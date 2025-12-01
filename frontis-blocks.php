<?php

/**
 * Plugin Name:       Frontis Blocks – The Ultimate WordPress Block Plugin
 * Plugin URI:        https://wpmessiah.com/products/frontis-blocks/
 * Description:       The ultimate blocks library for Gutenberg editor.
 * Version:           1.1.3
 * Author:            WPmessiah
 * Author URI:        https://wpmessiah.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       frontis-blocks
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define things
define( 'FB_PLUGIN_FILE', __FILE__ );
define( 'PORTAL_API', 'https://template-library.boomdevshub.com' );
define( 'WORDPRESS_SYNC_API', 'https://frontis-sync.boomdevshub.com' );

/**
 * Autoloader
 */
require_once __DIR__ . '/vendor/autoload.php';

/**
 * Initialize plugin
 */
function frontis_blocks(){
    FrontisBlocks\Activator\Activator::get_instance();
    FrontisBlocks\Plugin::get_instance();
}

frontis_blocks();


function enqueue_tlsite_admin_scripts() {
    
    // Just copy and paste insid anywhere with plugin installed
    wp_enqueue_style('frontis-template-tlsite', FB_PLUGIN_URL . 'assets/admin/style-tlsite.css', array(), '1.0.0');

    wp_enqueue_script('jquery');
    $script_path = FB_PLUGIN_PATH . 'assets/admin/tlsite.js';
    $script_asset_path = FB_PLUGIN_PATH . 'assets/admin/tlsite.asset.php';
    $script_asset      = file_exists( $script_asset_path ) ? require( $script_asset_path ) : array( 'dependencies' => array(), 'version' => filemtime( $script_path ) );

    //push jquery in $script_asset['dependencies']
    $script_asset['dependencies'][] = 'jquery';

    wp_enqueue_script('frontis-blocks-tlsite', FB_PLUGIN_URL . 'assets/admin/tlsite.js', $script_asset['dependencies'], '1.0.0', true);

    $localizeArray = array();

    // Localize the script with new data
    wp_localize_script('frontis-blocks-tlsite', 'frontisBlocksAdmin', $localizeArray);
    wp_localize_script('frontis-blocks-tlsite', 'FB_TLibrary', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'portalApi' => PORTAL_API,
        'wordpressSyncApi' => WORDPRESS_SYNC_API
    ));
}

add_action('wp_enqueue_scripts', 'enqueue_tlsite_admin_scripts');