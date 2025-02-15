<?php

/**
 * Plugin Name: Frontis Blocks
 * Plugin URI: https://frontisblocks.com
 * Description: The ultimate blocks library for Gutenberg editor.
 * Author: WPmessiah
 * Author URI: https://WPmessiah.com
 * Version: 1.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: frontis-blocks
 *
 * @package Frontis_Blocks
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define things
define( 'FB_PLUGIN_FILE', __FILE__ );

/**
 * Require Autoloader.
 *
 * @since 1.0.0
 * @package Frontis_Blocks
 */

require_once __DIR__ . '/vendor/autoload.php';


function wm_frontis_blocks(){
    return FrontisBlocks\Plugin::get_instance();
}

//Kick of the plugin.
wm_frontis_blocks();


// function fb_common_enqueue_editor_styles() {
//     wp_enqueue_style(
//         'fb-responsive-control-editor',
//         get_template_directory_uri() . '/assets/css/fbe-common.css',
//         array(), // Dependencies
//         filemtime(get_template_directory() . '/assets/css/fbe-common.css') // Cache busting
//     );
// }
// add_action('enqueue_block_editor_assets', 'fb_common_enqueue_editor_styles');

// function fb_common_enqueue_styles() {
//     wp_enqueue_style(
//         'fb-responsive-control',
//         get_template_directory_uri() . '/assets/css/fbe-common.css',
//         array(),
//         filemtime(get_template_directory() . '/assets/css/fbe-common.css')
//     );
// }
// add_action('wp_enqueue_scripts', 'fb_common_enqueue_styles');

