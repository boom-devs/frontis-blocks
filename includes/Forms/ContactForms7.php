<?php

namespace FrontisBlocks\Forms;
use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

defined('ABSPATH') || exit;

class ContactForms7
{
	use Singleton;

	public static function check_enable()
	{
		$active_plugins = Helper::get_active_plugin_list();
		if (in_array('contact-form-7/wp-contact-form-7.php', $active_plugins)) {
			return true;
		}
		return false;
	}

	public static function form_list()
	{
		// Check for cached data first (persistent cache)
		$cached = get_transient('frontis_cf7_form_list');
		if (false !== $cached) {
			return $cached;
		}

		$options = [];
		$options[0]['value'] = '';
		$options[0]['label'] = __('Select a form', 'frontis-blocks');

		// Using WP_Query to get contact forms
		$args = [
			'post_type' => 'wpcf7_contact_form',
			'post_status' => 'publish',
			'posts_per_page' => -1
		];

		$query = new \WP_Query($args);

		if ($query->have_posts()) {
			foreach ($query->posts as $key => $form) {
				$options[$key + 1]['value'] = $form->ID;
				$options[$key + 1]['label'] = $form->post_title;
			}
		}

		// Cache for 12 hours (persistent)
		set_transient('frontis_cf7_form_list', $options, 12 * HOUR_IN_SECONDS);

		return $options;
	}

	public static function wf7_form_html()
	{
		// Check for cached data first (persistent cache)
		$cached = get_transient('frontis_cf7_form_html');
		if (false !== $cached) {
			return $cached;
		}

		$options = [];

		// Using WP_Query to get contact forms
		$args = [
			'post_type' => 'wpcf7_contact_form',
			'post_status' => 'publish',
			'posts_per_page' => -1
		];

		$query = new \WP_Query($args);

		if ($query->have_posts()) {
			foreach ($query->posts as $form) {
				// Generate the HTML for each form using its ID and title
				$contact_7_html = do_shortcode('[contact-form-7 id="' . $form->ID . '" title="' . $form->post_title . '"]');
				$options[$form->ID] = $contact_7_html;
			}
		}

		// Cache for 12 hours (persistent)
		set_transient('frontis_cf7_form_html', $options, 12 * HOUR_IN_SECONDS);

		return $options;
	}
}
