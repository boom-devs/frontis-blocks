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

function generate_css_from_block_attributes( $block_attributes ) {
    // Extract the block attributes
    $block_id = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
    $heading_color = isset( $block_attributes['HeadingColor'] ) ? sanitize_hex_color( $block_attributes['HeadingColor'] ) : '#000000';
    $heading_border = isset( $block_attributes['HeadingBorder'] ) ? sanitize_text_field( $block_attributes['HeadingBorder'] ) : 'none';
    $border_widths = isset( $block_attributes['HeadingDesktopBorderWidth'] ) ? $block_attributes['HeadingDesktopBorderWidth'] : array( 'top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0' );

    // Generate CSS content
    $css_content = "
    #$block_id {
        color: $heading_color;
        border-style: $heading_border;
        border-width: {$border_widths['top']}px {$border_widths['right']}px {$border_widths['bottom']}px {$border_widths['left']}px;
    }";

    // Define the path to save the CSS file in the uploads directory
    $upload_dir = wp_upload_dir();
    $css_dir = trailingslashit( $upload_dir['basedir'] ) . 'custom-css/';

    // Ensure the directory exists
    if ( ! file_exists( $css_dir ) ) {
        wp_mkdir_p( $css_dir );
    }

    // Create a unique CSS file name
    $css_file_name = 'block-' . $block_id . '.css';
    $css_file = $css_dir . $css_file_name;

    // Write the CSS content to the file
    file_put_contents( $css_file, $css_content );

    // Enqueue the generated CSS file
    $css_url = trailingslashit( $upload_dir['baseurl'] ) . 'custom-css/' . $css_file_name;
    wp_enqueue_style( 'dynamic-block-style-' . $block_id, $css_url );
}


function handle_block_css_generation( $block_content, $block ) {
    if ( 'frontis-blocks/advanced-heading' === $block['blockName'] && ! is_admin() ) {
            generate_css_from_block_attributes( $block['attrs'] );
        }

        return $block_content;
}
add_filter( 'render_block', 'handle_block_css_generation', 10, 2 );
