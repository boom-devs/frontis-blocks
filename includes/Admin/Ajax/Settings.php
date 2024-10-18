<?php 

namespace FrontisBlocks\Admin\Ajax;

use FrontisBlocks\Traits\Singleton;

class Settings extends AjaxBase {

    use Singleton;

    public function register_ajax_events() {
        $ajax_events = [
            'get_options',
            'default_content_width',
            'button_inherit_from_theme',
            'container_padding',
            'container_elements_gap',
            'custom_css',
            'copy_paste_style',
            'file_generation',
            'generate_assets',
            'version_control',
            'enable_quick_action_bar',
            'collapse_panel',
            'enable_templates_button',
        ];

        $this->init_ajax_events($ajax_events);
    }

    public function get_options() {
        if (!check_ajax_referer('fb_settings_nonce', 'security', false)) {
            wp_send_json_error(['message' => 'Invalid nonce'], 400);
            return;
        }
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(['message' => 'Insufficient permissions'], 403);
            return;
        }

        $keys = isset($_POST['keys']) ? $_POST['keys'] : [];
        $options = [];

        foreach ($keys as $key) {
            $options[$key] = get_option("fb_$key");
        }

        wp_send_json_success($options);
    }

    // Individual option handlers
    public function default_content_width() {
        $this->handle_option_update('default_content_width', 'number');
    }

    public function button_inherit_from_theme() {
        $this->handle_option_update('button_inherit_from_theme', 'boolean');
    }

    public function container_padding() {
        $this->handle_option_update('container_padding', 'number');
    }

    public function container_elements_gap() {
        $this->handle_option_update('container_elements_gap', 'number');
    }

    public function custom_css() {
        $this->handle_option_update('custom_css', 'boolean');
    }

    public function copy_paste_style() {
        $this->handle_option_update('copy_paste_style', 'boolean');
    }

    public function file_generation() {
        $this->handle_option_update('file_generation', 'boolean');
    }

    public function generate_assets() {
        $this->handle_option_update('generate_assets', 'boolean');
    }

    public function version_control() {
        $this->handle_option_update('version_control', 'text');
    }

    public function enable_quick_action_bar() {
        $this->handle_option_update('enable_quick_action_bar', 'boolean');
    }

    public function collapse_panel() {
        $this->handle_option_update('collapse_panel', 'boolean');
    }

    public function enable_templates_button() {
        $this->handle_option_update('enable_templates_button', 'boolean');
    }

    private function handle_option_update($option_name, $type) {
        if (!check_ajax_referer('fb_settings_nonce', 'security', false)) {
            wp_send_json_error(['message' => 'Invalid nonce'], 400);
            return;
        }
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error(['message' => 'Insufficient permissions'], 403);
            return;
        }

        $value = isset($_POST['value']) ? $this->sanitize_option_value($_POST['value'], $type) : '';
        $old_value = get_option("fb_$option_name");

        // Convert old_value to the correct type for comparison
        $old_value = $this->sanitize_option_value($old_value, $type);

        if ($old_value === $value) {
            wp_send_json_success(['message' => 'No changes were made']);
            return;
        }

        $updated = update_option("fb_$option_name", $value);
        
        if ($updated) {
            wp_send_json_success(['message' => 'Option updated successfully']);
        } else {
            $error_message = 'Failed to update option';
            if ($old_value === false) {
                $error_message .= ': Option does not exist';
            } elseif ($old_value === $value) {
                $error_message .= ': Value unchanged';
            } else {
                $error_message .= ': Unknown reason';
            }
            wp_send_json_error([
                'message' => $error_message, 
                'old_value' => $old_value, 
                'new_value' => $value,
                'option_name' => "fb_$option_name"
            ]);
        }
    }

    private function sanitize_option_value($value, $type) {
        switch ($type) {
            case 'number':
                return intval($value);
            case 'boolean':
                return $value === '1' || $value === 'true' || $value === true;
            case 'text':
                return sanitize_text_field($value);
            default:
                return sanitize_text_field($value);
        }
    }
}
