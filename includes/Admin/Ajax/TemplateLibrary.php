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
            'full_site_import',
            'update_site_settings',
            'demo_import'
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
        $content = isset($_POST['content']) ? $_POST['content'] : '';
    
        // Duplicate title handle
        $original_title = $title;
        $count = 1;
        while (get_page_by_title($title, OBJECT, 'page')) {
            $title = $original_title . ' ' . $count;
            $count++;
        }
    
        // $content = $this->decode_unicode_escapes($content);
        $page_id = wp_insert_post([
            'post_title'   => $title,
            'post_content' => $content,
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ]);
    
        if ($page_id) {
            Helper::insert_job($page_id, $title . $page_id);
    
            wp_send_json_success([
                'message' => 'Page created successfully',
                'page_id' => $page_id,
                'title'   => $title
            ]);
        } else {
            wp_send_json_error(['message' => 'Failed to create page']);
        }
    }
    

    function update_site_settings() {
        $this->check_permission();
    
        $site_name    = isset($_POST['siteName']) ? sanitize_text_field($_POST['siteName']) : '';
        $site_tagline = isset($_POST['siteTagline']) ? sanitize_text_field($_POST['siteTagline']) : '';
        $site_logo    = isset($_POST['siteLogo']) ? intval($_POST['siteLogo']) : 0;
    
        if (!empty($site_name)) {
            update_option('blogname', $site_name);
        }
        if (!empty($site_tagline)) {
            update_option('blogdescription', $site_tagline);
        }
        if (!empty($site_logo)) {
            set_theme_mod('custom_logo', $site_logo);
        }
    
        wp_send_json_success([
            'message' => 'Site settings updated',
            'site' => [
                'name'     => get_option('blogname'),
                'tagline'  => get_option('blogdescription'),
                'logo'     => get_theme_mod('custom_logo'),
            ]
        ]);
    }
}
