<?php

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;

/**
 * GlobalSettings
 *
 * @package FrontisBlocks
 */
class GlobalSettings extends AjaxBase {

    use Singleton;

    /**
     * register_global_settings_events
     *
     * @return void
     */
    public function register_global_settings_events() {
        $events = [
            'update_global_colors',
            'update_gradient_colors',
            'update_custom_colors',
            'update_custom_gradient_colors',
            'update_typography',
            'update_custom_typography',
            'update_fontfamilies',
            'get_global_colors',
            'get_gradient_colors',
            'get_custom_colors',
            'get_custom_gradient_colors',
            'get_typography',
            'get_custom_typography',
            'get_custom_css',
            'get_fontfamilies'
        ];

        $this->init_ajax_events($events);
    }

    public function update_global_colors() {
        //log the data
        $this->handle_option_update('global_colors', 'array');
    }

    public function update_gradient_colors() {
        $this->handle_option_update('gradient_colors', 'array');
    }

    public function update_custom_colors() {
        $this->handle_option_update('custom_colors', 'array');
    }

    public function update_custom_gradient_colors() {
        $this->handle_option_update('custom_gradient_colors', 'array');
    }

    public function update_typography() {
        // error_log(print_r($_POST['data'], true));
        $this->handle_option_update('typography', 'array');
        
    }

 	public function update_custom_typography() {
        $this->handle_option_update('custom_typography', 'array');
    }

	public function update_fontfamilies() {
        $this->handle_option_update('fontfamilies', 'array');
    }

    public function get_global_colors() {
        $global_colors = get_option('fb_global_colors');
        
        if($global_colors) {
			wp_send_json_success($global_colors);
		}

        wp_send_json_error('Global color not found.');
    }

    public function get_gradient_colors() {
        $global_gradient_colors = get_option('fb_gradient_colors');
		if($global_gradient_colors) {
			wp_send_json_success($global_gradient_colors);
		}
		wp_send_json_error('Gradient color not found.');
    }

    public function get_custom_colors() {
        $custom_colors = get_option('fb_custom_colors');
        if($custom_colors) {
			wp_send_json_success($custom_colors);
        }

		wp_send_json_error('Custom color not found.');

    }

    public function get_custom_gradient_colors() {
        $custom_gradient_colors = get_option('fb_custom_gradient_colors');
        if($custom_gradient_colors) {
			wp_send_json_success($custom_gradient_colors);
        }

		wp_send_json_error('Custom gradient color not found.');
    }

    public function get_typography() {
        $typography = get_option('fb_typography');
        // error_log(print_r($typography, true));
        if($typography) {
			wp_send_json_success($typography);
		}

		wp_send_json_error('Typography not found.');
    }

	public function get_custom_typography() {
        $typography = get_option('fb_custom_typography');
        if($typography) {
			wp_send_json_success($typography);
		}

		wp_send_json_error('Typography not found.');
    }

	public function get_fontfamilies() {
        $font_families = get_option('fb_fontfamilies');
        if($font_families) {
			wp_send_json_success($font_families);
		}

		wp_send_json_error('Font families not found.');
    }

    public function get_custom_css() {
        $custom_css = get_option('fb_custom_css');

        if($custom_css) {
			wp_send_json_success($custom_css);
		}

		wp_send_json_error('Custom css not found.');
    }

    /**
     * handle_option_update
     *
     * @param string $option_name
     * @param string $type
     * @return void
     */
    private function handle_option_update($option_name, $type) {
        $this->validate_nonce();
        $this->validate_permissions();
        $this->update_option("fb_$option_name", $type);
    }

    /**
     * validate_nonce
     *
     * @return void
     */
    private function validate_nonce() {
        if (!wp_verify_nonce( $_POST['nonce'], 'fb_sidebar_nonce' )) {
            wp_send_json_error('Invalid nonce');
        }
    }

    /**
     * check permissions
     *
     * @return void
     */
    private function validate_permissions() {
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions');
        }
    }

    /**
     * update_option
     *
     * @param string $option_name
     * @param string $type
     * @return void
     */
    private function update_option($option_name, $type) {
        $updated = update_option($option_name, $_POST['data'], true);

		if($updated) {
			$get_values = get_option($option_name);
			$data = array(
				'option_name' => $option_name,
				'data' => $get_values
			);

			wp_send_json_success($data);
		}

		wp_send_json_error('Update failed.');
    }
    /**
     * sanitize_option_value
     *
     * @param mixed $value
     * @param string $type
     * @return mixed
     */
    private function sanitize_option_value($value, $type) {
        switch ($type) {
            case 'array':
                return is_array($value) ? $value : [];
            default:
                return sanitize_text_field($value);
        }
    }

}
