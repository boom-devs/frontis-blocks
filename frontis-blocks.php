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


// function get_templates_by_post_type_and_name( ) {
//     global $wpdb;

//     // Prepare the query to select posts with post_type 'wp_template' and post_name containing 'fb-template'
//     $query = $wpdb->prepare(
//         "SELECT * FROM $wpdb->posts WHERE post_type = %s AND post_name LIKE %s",
//         'wp_template',
//         '%fb-template%'
//     );
    
//     // Execute the query
//     return $wpdb->get_results($query);
// }

// $templates = get_templates_by_post_type_and_name();


// if(count($templates) > 0) {
//     $pattern = '/<!--\s*wp:template-part\s*{(.*?)}\s*\/-->/s';
//     $index_to_slug = [];

//     if (preg_match_all($pattern, $templates[0]->post_content, $template_part_matches)) {
//         foreach ($template_part_matches[1] as $i => $attributes) {
//             // Minimal: tolerate spaces -> "slug" : "..."
//             if (preg_match('/"slug"\s*:\s*"([^"]+)"/', $attributes, $slug_match)) {
//                 $index_to_slug[$i] = $slug_match[1];
//             }
//         }
//     }

//     if(!empty($index_to_slug)) {
//         foreach($index_to_slug as $i => $slug) {
//             // echo $slug;
//             $args = [
//                 'name' => $slug,
//                 'post_type' => 'wp_template_part',
//                 'post_status' => 'publish',
//             ];

//             $template_part = get_posts($args);
//             if(!empty($template_part)) {
//                 // var_dump($template_part[0]->post_name);
//             }
//         }
//     }
// }


// var_dump($templates[0]->post_content);


/**
 * data format form frontis portal
 * 
 * wp_templates: [
 *  {
 *      id: 1,
 *      title: "Template 1",
 *      slug: "template-1",
 *      content: "<!-- wp:template-part {..."
 *  }
 * ]
 * 
 * pages: [
 *  {
 *      id: 1,
 *      title: "Part 1",
 *      slug: "part-1",
 *      content: "<!-- wp:template-part {..."
 *  }
 * ]
 * 
 * posts: [
 *  {
 *      id: 1,
 *      title: "Post 1",
 *      slug: "post-1",
 *      content: "<!-- wp:post {..."
 *  }
 * ]
 * 
 * wp_template_parts: [
 *  {
 *      id: 1,
 *      title: "Template Part 1",   
 *      content: "<!-- wp:template-part {..."
 *  }
 * ]
 * 
 * */