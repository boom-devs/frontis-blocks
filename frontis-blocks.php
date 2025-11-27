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
define( 'PORTAL_API', 'https://bacciform-voluminously-ingrid.ngrok-free.dev' );
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
