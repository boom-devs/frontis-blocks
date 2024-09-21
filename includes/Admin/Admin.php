<?php 

namespace FrontisBlocks\Admin;

use FrontisBlocks\Traits\Singleton;

class Admin {

    use Singleton;

    public function __construct() {
        add_action('admin_menu', array( $this, 'add_menu_page' ) );
        add_action('admin_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
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
    }

    public function enqueue_scripts($hook){
        if('toplevel_page_frontis-blocks' != $hook){
            return;
        }

        wp_enqueue_style('frontis-blocks-admin', FB_PLUGIN_URL . 'assets/admin/index.css', array(), '1.0.0');
    }
}