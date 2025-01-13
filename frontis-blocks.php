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


function parse_block($block) {
    // Use WP's block serialization function
    return serialize_block($block);
}

add_action('init', function () {
//     $json_file_path = FB_PLUGIN_URL . 'testing-page.json';
    
//     // echo FB_PLUGIN_URL;

// // Read and decode the JSON file
//     $json_data = file_get_contents($json_file_path);
//     $blocks = json_decode($json_data, true);

//      // Check if the decoding was successful
//      if (!$blocks || !is_array($blocks)) {
//         return 'Invalid JSON structure';
//     }

//     // Prepare post content for Gutenberg blocks
//     $post_content = '';

//     // Process each block
//     foreach ($blocks as $block) {
//         // Convert block to serialized Gutenberg content
//         $post_content .= parse_block($block);
//     }

//     // Insert the post with Gutenberg blocks
//     $post_id = wp_insert_post([
//         'post_title'   => 'Imported Block Post',
//         'post_content' => $post_content,
//         'post_status'  => 'publish',
//         'post_type'    => 'post',
//     ]);

//     if (is_wp_error($post_id)) {
//         wp_die('Error creating post: ' . $post_id->get_error_message());
//     }

//     echo 'Post created successfully with ID: ' . $post_id;
});