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
            'get_global_colors',
            'get_gradient_colors',
            'get_custom_colors',
            'get_custom_gradient_colors',
            'get_typography'
        ];

        $this->init_ajax_events($events);
    }

    public function update_global_colors() {
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
        $this->handle_option_update('typography', 'array');
    }

    public function get_global_colors() {
        return get_option('fb_global_colors');
    }

    public function get_gradient_colors() {
        return get_option('fb_gradient_colors');
    }

    public function get_custom_colors() {
        return get_option('fb_custom_colors');
    }

    public function get_custom_gradient_colors() {
        return get_option('fb_custom_gradient_colors');
    }

    public function get_typography() {
        $typography = get_option('fb_typography', []);
        wp_send_json_success($typography);
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
        if (!check_ajax_referer('fb_sidebar_nonce', 'nonce', false)) {
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
        $value = $this->sanitize_option_value($_POST[$option_name], $type);
        update_option("fb_$option_name", $value);
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