<?php

/**
 * Plugin Name:       Frontis Blocks – The Ultimate WordPress Block Plugin
 * Plugin URI:        https://wpmessiah.com/products/frontis-blocks/
 * Description:       The ultimate blocks library for Gutenberg editor.
 * Version:           1.1.0
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

// function get_wordpress_plugin_changelog( $plugin_slug ) {
//     // Construct the API URL for the plugin
//     $api_url = 'https://api.wordpress.org/plugins/info/1.0/' . $plugin_slug . '.json';

//     // Make an HTTP request to the API
//     $response = wp_remote_get( $api_url );

//     // Check for request errors
//     if ( is_wp_error( $response ) ) {
//         return 'Error fetching plugin data: ' . $response->get_error_message();
//     }

//     // Decode the JSON response
//     $plugin_data = json_decode( wp_remote_retrieve_body( $response ) );

//     // Check if the changelog exists in the response
//     if ( isset( $plugin_data->sections->changelog ) ) {
//         return $plugin_data->sections->changelog;
//     } else {
//         return 'Changelog not found for this plugin.';
//     }
// }

// // Example usage:
// $plugin_slug = 'frontis-blocks'; // Replace with the actual plugin slug
// $changelog = get_wordpress_plugin_changelog( $plugin_slug );

// echo "<h2>Changelog for {$plugin_slug}:</h2>";
// echo $changelog;
