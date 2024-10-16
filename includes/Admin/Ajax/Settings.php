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
        ];

        $this->init_ajax_events($ajax_events);
    }

    public function get_options() {
        $this->verify_nonce('fb_get_options');
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error($this->get_error_msg('no_permission'));
        }

        $keys = isset($_POST['keys']) ? $_POST['keys'] : [];
        $options = [];

        foreach ($keys as $key) {
            $options[$key] = get_option($key);
        }

        wp_send_json_success($options);
    }

    // public function save_option() {
    //     $this->verify_nonce('fb_save_settings');
        
    //     if (!current_user_can('manage_options')) {
    //         wp_send_json_error($this->get_error_msg('no_permission'));
    //     }

    //     $key = isset($_POST['key']) ? sanitize_text_field($_POST['key']) : '';
    //     $value = isset($_POST['value']) ? $_POST['value'] : '';

    //     if (empty($key)) {
    //         wp_send_json_error($this->get_error_msg('invalid_data'));
    //     }

    //     update_option($key, $value);
    //     wp_send_json_success();
    // }

    // Individual option handlers
    public function default_content_width() {
        $this->verify_nonce('fb_default_content_width');
        $this->handle_option_update('default_content_width');
    }

    public function button_inherit_from_theme() {
        $this->verify_nonce('fb_settings_nonce');
        $this->handle_option_update('fb_button_inherit_from_theme');

        wp_die();
    }

    public function container_padding() {
        $this->handle_option_update('container_padding');
    }

    public function container_elements_gap() {
        $this->handle_option_update('container_elements_gap');
    }

    public function custom_css() {
        $this->handle_option_update('custom_css');
    }

    public function copy_paste_style() {
        $this->handle_option_update('copy_paste_style');
    }

    public function file_generation() {
        $this->handle_option_update('file_generation');
    }

    public function generate_assets() {
        $this->handle_option_update('generate_assets');
    }

    public function version_control() {
        $this->handle_option_update('version_control');
    }

    private function handle_option_update($option_name) {
        $this->verify_nonce($option_name);
        
        if (!current_user_can('manage_options')) {
            wp_send_json_error($this->get_error_msg('no_permission'));
        }

        $value = isset($_POST['value']) ? $_POST['value'] : '';
        update_option($option_name, $value);
        wp_send_json_success();
    }

    private function verify_nonce($nonce_name, $scope = 'manage_options', $security = 'security') {
        if ( ! current_user_can( $scope ) ) {
			wp_send_json_error( array( 'messsage' => $this->get_error_msg( 'no_permission' ) ) );
		}

		/**
		 * Nonce verification
		 */
		if ( check_ajax_referer( $nonce_name, $security, false ) ) {
			wp_send_json_success( array( 'messsage' => 'Nonce verified' ), 200 );
		}
    }
}
