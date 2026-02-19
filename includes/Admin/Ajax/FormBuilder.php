<?php

namespace FrontisBlocks\Admin\Ajax;

if (!defined('ABSPATH')) {
	exit;
}

use FrontisBlocks\Traits\Singleton;

/**
 * FormBuilder AJAX Handler
 *
 * @package FrontisBlocks
 */
class FormBuilder extends AjaxBase
{

	use Singleton;

	/**
	 * register_ajax_events
	 *
	 * @return void
	 */
	public function register_ajax_events()
	{
		$ajax_events = [
			'increment_view_count',
			'save_form_submission',
		];

		$this->init_ajax_events($ajax_events);
	}

	/**
	 * Increment view count for a form
	 *
	 * @return void
	 */
	public function increment_view_count()
	{
		$form_title = isset($_POST['form_title']) ? sanitize_text_field($_POST['form_title']) : '';

		if (empty($form_title)) {
			wp_send_json_error(['message' => 'Form title is required'], 400);
			return;
		}

		$view_counts = get_option('fb_form_view_counts', []);
		if (!isset($view_counts[$form_title])) {
			$view_counts[$form_title] = 0;
		}
		$view_counts[$form_title]++;

		update_option('fb_form_view_counts', $view_counts);

		wp_send_json_success(['view_count' => $view_counts[$form_title]]);
	}

	/**
	 * Save form submission
	 *
	 * @return void
	 */
	public function save_form_submission()
	{
		if (!check_ajax_referer('fb_form_nonce', 'nonce', false)) {
			wp_send_json_error(['message' => 'Invalid security nonce'], 400);
			return;
		}

		$submission_data = isset($_POST['submission_data']) ? json_decode(stripslashes($_POST['submission_data']), true) : [];
		$form_title = isset($_POST['form_title']) ? sanitize_text_field($_POST['form_title']) : 'Untitled Form';
		$to_email = isset($_POST['form_to_email']) ? sanitize_email($_POST['form_to_email']) : get_option('admin_email');
		$cc_email = isset($_POST['form_cc_email']) ? sanitize_text_field($_POST['form_cc_email']) : '';
		$bcc_email = isset($_POST['form_bcc_email']) ? sanitize_text_field($_POST['form_bcc_email']) : '';
		$subject = isset($_POST['form_email_subject']) ? sanitize_text_field($_POST['form_email_subject']) : 'New Submission: ' . $form_title;
		$page_url = isset($_POST['form_page_url']) ? esc_url_raw($_POST['form_page_url']) : '';

		if (empty($submission_data)) {
			wp_send_json_error(['message' => 'No data submitted'], 400);
			return;
		}

		// Sanitize submission data
		$sanitized_data = [];
		$email_body = "New submission from: $form_title\n\n";
		$email_body .= "Page URL: $page_url\n\n";
		$email_body .= "Submission Details:\n";
		$email_body .= "-------------------\n";

		foreach ($submission_data as $key => $value) {
			$sanitized_key = sanitize_text_field($key);
			$sanitized_value = is_array($value) ? implode(', ', array_map('sanitize_text_field', $value)) : sanitize_textarea_field($value);
			$sanitized_data[$sanitized_key] = $sanitized_value;
			$email_body .= ucfirst(str_replace(['-', '_'], ' ', $sanitized_key)) . ": $sanitized_value\n";
		}

		// Save submission to database (options for now)
		$submissions = get_option('fb_form_submissions', []);
		$submissions[] = [
			'form_title' => $form_title,
			'data' => $sanitized_data,
			'submitted_at' => current_time('mysql'),
			'ip_address' => $_SERVER['REMOTE_ADDR'] ?? '',
			'page_url' => $page_url
		];

		// Keep only last 100 submissions
		if (count($submissions) > 100) {
			array_shift($submissions);
		}

		update_option('fb_form_submissions', $submissions);

		// Send Email
		$headers = ['Content-Type: text/plain; charset=UTF-8'];
		if (!empty($cc_email)) {
			$headers[] = 'Cc: ' . $cc_email;
		}
		if (!empty($bcc_email)) {
			$headers[] = 'Bcc: ' . $bcc_email;
		}

		// Replace shortcodes in subject
		$subject = str_replace('{form_title}', $form_title, $subject);

		wp_mail($to_email, $subject, $email_body, $headers);

		wp_send_json_success(['message' => 'Submission saved successfully']);
	}
}