<?php

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;
use FrontisBlocks\Utils\Helper;

/**
 * Settings
 *
 * @package FrontisBlocks
 */
class TemplateLibrary extends AjaxBase {

	use Singleton;

	/**
	 * register_ajax_events
	 *
	 * @return void
	 */
	public function register_ajax_events() {
		$ajax_events = [
			'update_option',
			'get_option',
            'full_site_import'
		];

		$this->init_ajax_events($ajax_events);
	}

    public function check_permission() {
        if (!check_ajax_referer('fb_settings_nonce', 'security', false)) {
			wp_send_json_error(['message' => 'Invalid nonce'], 400);
			return;
		}

		if (!current_user_can('manage_options')) {
			wp_send_json_error(['message' => 'Insufficient permissions'], 403);
			return;
		}
    }

    public function update_option() {
        $this->check_permission();

        $option_name = isset($_POST['option_name']) ? $_POST['option_name'] : '';
        $value = isset($_POST['value']) ? $_POST['value'] : '';

        $updated = update_option("fb_$option_name", $value);

        if ($updated) {
            wp_send_json_success(['message' => 'Option updated successfully']);
        } else {
            wp_send_json_error(['message' => 'Failed to update option']);
        }
    }

    public function get_option() {
        $this->check_permission();

        $option_name = isset($_POST['option_name']) ? $_POST['option_name'] : '';
        $value = get_option("fb_$option_name");

        if ($value) {
            wp_send_json_success(['message' => 'Option updated successfully']);
        } else {
            wp_send_json_error(['message' => 'Failed to update option']);
        }
    }

    public function full_site_import() {
        $this->check_permission();
    
        $title   = isset($_POST['title']) ? sanitize_text_field($_POST['title']) : '';
        $content = isset($_POST['content']) ? wp_kses_post($_POST['content']) : '';
    
        if (empty($title)) {
            wp_send_json_error(['message' => 'Title is required']);
        }
    
        // Duplicate title handle
        $original_title = $title;
        $count = 1;
        while (get_page_by_title($title, OBJECT, 'page')) {
            $title = $original_title . ' ' . $count;
            $count++;
        }
    
        $page_id = wp_insert_post([
            'post_title'   => $title,
            'post_content' => $content,
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ]);
    
        if ($page_id) {
            wp_send_json_success([
                'message' => 'Page created successfully',
                'page_id' => $page_id,
                'title'   => $title
            ]);
        } else {
            wp_send_json_error(['message' => 'Failed to create page']);
        }
    }
    
}
