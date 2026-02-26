<?php

namespace FrontisBlocks\Admin\Ajax;

if (!defined('ABSPATH')) {
	exit;
}

use FrontisBlocks\Traits\Singleton;

/**
 * FormBuilder AJAX Handler
 *
 * Handles form submission and sends email notification.
 * No data is stored in the database — email only.
 * SMTP configuration is delegated to external plugins (WP Mail SMTP, etc.)
 *
 * @package FrontisBlocks
 */
class FormBuilder extends AjaxBase
{

	use Singleton;

	/**
	 * Register AJAX events
	 *
	 * @return void
	 */
	public function register_ajax_events()
	{
		$ajax_events = [
			'save_form_submission',
		];

		$this->init_ajax_events($ajax_events);

		// Public-facing (nopriv) action
		add_action('wp_ajax_nopriv_fb_save_form_submission', [$this, 'save_form_submission']);
	}

	/**
	 * Parse and validate multiple emails from a string.
	 */
	private function get_valid_emails($email_string)
	{
		if (empty($email_string)) {
			return [];
		}

		$emails = preg_split('/[,\s;]+/', $email_string, -1, PREG_SPLIT_NO_EMPTY);
		$valid_emails = [];

		foreach ($emails as $email) {
			$sanitized_email = sanitize_email($email);
			if (is_email($sanitized_email)) {
				$valid_emails[] = $sanitized_email;
			}
		}

		return array_unique($valid_emails);
	}

	/**
	 * Handle frontend form submission via AJAX.
	 *
	 * Parses form data and sends a plain-text notification email
	 * via wp_mail(). SMTP transport is handled by whatever SMTP
	 * plugin the site has installed. No data is stored in the DB.
	 */
	public function save_form_submission()
	{
		check_ajax_referer('fb_form_nonce', 'nonce');

		// --- Meta fields from POST ---
		$form_title    = sanitize_text_field(wp_unslash($_POST['form_title'] ?? 'Untitled Form'));
		$page_url      = esc_url_raw(wp_unslash($_POST['form_page_url'] ?? home_url()));
		$to_email_raw  = sanitize_text_field(wp_unslash($_POST['form_to_email'] ?? ''));
		$cc_email_raw  = sanitize_text_field(wp_unslash($_POST['form_cc_email'] ?? ''));
		$bcc_email_raw = sanitize_text_field(wp_unslash($_POST['form_bcc_email'] ?? ''));
		$email_subject = sanitize_text_field(wp_unslash($_POST['form_email_subject'] ?? 'New Submission: {form_title}'));

		// --- Parse submission data from JSON ---
		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		$raw_json = isset($_POST['submission_data']) ? wp_unslash($_POST['submission_data']) : '{}';
		$decoded  = json_decode($raw_json, true);

		if (!is_array($decoded) || empty($decoded)) {
			wp_send_json_error(['message' => 'No form data received.']);
			return;
		}

		// Sanitize every field value
		$clean_data = [];
		foreach ($decoded as $key => $value) {
			$clean_data[sanitize_text_field($key)] = sanitize_text_field($value);
		}

		// --- Validate recipient emails ---
		$to_emails  = $this->get_valid_emails($to_email_raw);
		$cc_emails  = $this->get_valid_emails($cc_email_raw);
		$bcc_emails = $this->get_valid_emails($bcc_email_raw);

		if (empty($to_emails)) {
			wp_send_json_error(['message' => 'No valid recipient email configured.']);
			return;
		}

		// --- Build email ---
		$subject   = str_replace('{form_title}', $form_title, $email_subject);
		$site_name = get_bloginfo('name');
		$site_url  = home_url();

		$message  = "Form Name: {$form_title}\n";
		$message .= "Date:      " . current_time('F j, Y g:i A') . "\n\n";
		$message .= "\n-- \n";
		
		foreach ($clean_data as $key => $value) {
			$label = ucwords(str_replace(['_', '-'], ' ', $key));
			$message .= "{$label}: {$value}\n";
		}

		$message .= "\n-- \n";
		$message .= sprintf(
			__('This is a notification that a contact form was submitted on your website (%s %s).', 'frontis-blocks'),
			$site_name,
			$site_url
		);

		$headers = ['Content-Type: text/plain; charset=UTF-8'];
		if (!empty($cc_emails)) {
			$headers[] = 'Cc: ' . implode(', ', $cc_emails);
		}
		if (!empty($bcc_emails)) {
			$headers[] = 'Bcc: ' . implode(', ', $bcc_emails);
		}

		// --- Send via wp_mail (SMTP handled by external plugin) ---
		$sent = wp_mail($to_emails, $subject, $message, $headers);

		if ($sent) {
			wp_send_json_success(['message' => 'Form submitted successfully.']);
		} else {
			wp_send_json_error(['message' => 'Failed to send email. Please try again.']);
		}
	}
}