<?php 

namespace FrontisBlocks\Admin;

use FrontisBlocks\Core\Settings;
use FrontisBlocks\Config\BlockList;
use FrontisBlocks\Traits\Singleton;

class Admin {

    use Singleton;

    public function __construct() {
        add_action('admin_menu', array( $this, 'add_menu_page' ) );
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);

        add_action( 'plugin_action_links', [ $this, 'fb_menu_action_links' ], 10, 2 );

        add_action( 'wp_ajax_fb_save_settings', array( $this, 'save_settings' ) );

        add_action( 'wp_ajax_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );
        add_action( 'wp_ajax_nopriv_fb_save_all_block_settings', array( $this, 'save_all_block_settings' ) );

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
        $script_path = FB_PLUGIN_PATH . 'assets/admin/index.js';
        $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/index.asset.php';
        $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );
        
        wp_enqueue_script('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.js', $script_asset['dependencies'], '1.0.0', true);

        // Get the blocks list
        $blocks = BlockList::get_instance()->get_blocks();

        // Localize the script with new data
        wp_localize_script('frontis-blocks-admin', 'frontisBlocksAdmin', array(
            'blocks' => $blocks,
            'nonce' => wp_create_nonce('fb_save_settings'),
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

    public function enqueue_scripts($hook){
        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }

        wp_enqueue_style('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.css', array(), '1.0.0');
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



}