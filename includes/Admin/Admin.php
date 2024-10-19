<?php 

namespace FrontisBlocks\Admin;


use FrontisBlocks\Admin\Settings;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Traits\Singleton;

class Admin {

    use Singleton;

    public function __construct() {
        add_action('admin_menu', array( $this, 'add_menu_page' ) );
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

        add_action( 'plugin_action_links', [ $this, 'fb_menu_action_links' ], 10, 2 );

        // add_action( 'wp_ajax_fb_save_settings', array( $this, 'save_settings' ) );

        // add_action( 'wp_ajax_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );
        // add_action( 'wp_ajax_nopriv_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );

        // Add the new REST API endpoint
        add_action('rest_api_init', [$this, 'register_rest_routes']);
    }

    public function add_menu_page(){
        add_menu_page(
            __('Frontis Blocks', 'frontis-blocks'),
            __('Frontis Blocks', 'frontis-blocks'),
            'manage_options',
            'frontis-blocks',
            array( $this, 'display_page' ),
            'dashicons-admin-generic',
            30
        );
    }

    public function display_page(){
        echo "<div id='frontis-blocks-admin'></div>";
    }

    public function enqueue_styles($hook){
        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }

        wp_enqueue_style('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.css', array(), '1.0.0');

        
    }

    public function enqueue_scripts($hook){
        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }
        wp_enqueue_script('jquery');
        $script_path = FB_PLUGIN_PATH . 'assets/admin/index.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/index.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

        //push jquery in $script_asset['dependencies']
        $script_asset['dependencies'][] = 'jquery';

        // error_log(print_r($script_asset['dependencies'], true));
        
        wp_enqueue_script('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.js', $script_asset['dependencies'], '1.0.0', true);

        // Get the blocks list
        $blocks = BlockList::get_instance()->get_blocks();

        // Localize the script with new data
        wp_localize_script('frontis-blocks-admin', 'frontisBlocksAdmin', array(
            'blocks' => $blocks,
            'nonce' => wp_create_nonce('fb_settings_nonce'),
            'adminUrl' => admin_url(),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'restUrl' => get_rest_url(),
            'pluginUrl' => FB_PLUGIN_URL,
            'version' => FB_VERSION,
            'pro_url' => FB_UPGRADE_PRO_URL,
            'isProActive' => FB_IS_PRO_ACTIVE ? 'true' : 'false',
            'logo' => FB_PLUGIN_URL . 'assets/images/logo.svg',
        ));
    }

        /**
         * Menu Action Links
         *
         * @since 1.0.0
         */
        public function fb_menu_action_links( $links, $file )
        {
            if ( $file === FB_PLUGIN_BASENAME ) {
                $settings_links = sprintf(
                    '<a href="%1$s">Settings</a>',
                    admin_url( 'admin.php?page=frontis-blocks' )
                );
                array_unshift( $links, $settings_links );

                if ( ! class_exists( 'FrontisBlocks\Pro\Plugin' ) ) {
                    $go_pro_link = sprintf(
                        '<a target="_blank" href="%1$s"><strong style="color:#5e2eff;display: inline-block;">Go Pro</strong></a>',
                        FB_UPGRADE_PRO_URL
                    );
                    array_push( $links, $go_pro_link );
                }
            }

            return $links;
        }

    /**
     * Save settings via AJAX
     *
     * @since 1.0.0
     */
    public function save_settings() {
        // Check for nonce security
        if ( ! check_ajax_referer( 'fb_save_settings', 'nonce', false ) ) {
            wp_send_json_error( 'Invalid nonce' );
        }

        // Check user capabilities
        if ( ! current_user_can( 'manage_options' ) ) {
            wp_send_json_error( 'You don\'t have permission to perform this action' );
        }

        $key = isset( $_POST['key'] ) ? sanitize_text_field( $_POST['key'] ) : '';
        $value = isset( $_POST['value'] ) ? sanitize_text_field( $_POST['value'] ) : '';

        if ( empty( $key ) ) {
            wp_send_json_error( 'Key is required' );
        }

        $result = Settings::save( $key, $value );

        if ( $result ) {
            wp_send_json_success( 'Settings saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save settings' );
        }
    }

    /**
     * Save all block settings via AJAX
     *
     * @since 1.0.0
     */
    public function save_all_block_settings() {
        // Check for nonce security
        if ( ! check_ajax_referer( 'fb_save_all_block_settings', 'nonce', false ) ) {
            wp_send_json_error( 'Invalid nonce' );
        }

        // Check user capabilities
        if ( ! current_user_can( 'manage_options' ) ) {
            wp_send_json_error( 'You don\'t have permission to perform this action' );
        }

        $blocks = isset( $_POST['blocks'] ) ? $_POST['blocks'] : [];

        if ( empty( $blocks ) || ! is_array( $blocks ) ) {
            wp_send_json_error( 'No blocks provided or invalid format' );
        }

        $success = true;

        Settings::save_blocks($blocks);

        if ( $success ) {
            wp_send_json_success( 'All block settings saved successfully' );
        } else {
            wp_send_json_error( 'Failed to save all block settings' );
        }
    }

    /**
     * Register REST API routes
     */
    public function register_rest_routes() {
        register_rest_route('frontis-blocks/v1', '/save-option', [
            'methods' => 'POST',
            'callback' => [$this, 'save_option_endpoint'],
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);

        register_rest_route('frontis-blocks/v1', '/get-options', [
            'methods' => 'POST',
            'callback' => [$this, 'get_options_endpoint'],
            'permission_callback' => function () {
                return current_user_can('manage_options');
            },
        ]);
    }

    /**
     * Handle the save option REST API endpoint
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    public function save_option_endpoint($request) {
        $nonce = $request->get_param('nonce');
        if (!wp_verify_nonce($nonce, 'fb_save_settings')) {
            return new \WP_Error('invalid_nonce', 'Invalid nonce', ['status' => 403]);
        }

        error_log(print_r($request->get_params(), true));

        $key = $request->get_param('key');
        $value = $request->get_param('value');

        if (empty($key)) {
            return new \WP_Error('missing_key', 'Key is required', ['status' => 400]);
        }

        $result = Settings::save($key, $value);

        if ($result) {
            return new \WP_REST_Response(['success' => true, 'message' => 'Option saved successfully'], 200);
        } else {
            return new \WP_Error('save_failed', 'Failed to save option', ['status' => 500]);
        }
    }

    public function get_options_endpoint($request) {
        $nonce = $request->get_param('nonce');
        if (!wp_verify_nonce($nonce, 'fb_save_settings')) {
            return new \WP_Error('invalid_nonce', 'Invalid nonce', ['status' => 403]);
        }

        $keys = $request->get_param('keys');
        if (!is_array($keys)) {
            return new \WP_Error('invalid_keys', 'Keys must be an array', ['status' => 400]);
        }

        $options = [];
        foreach ($keys as $key) {
            $options[$key] = Settings::get($key, '');
        }

        return new \WP_REST_Response(['success' => true, 'data' => $options], 200);
    }

}
