<?php
/**
 * Server-side rendering for the Loop Builder block
 *
 * @package Frontis Blocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Renders the Loop Builder block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post grid.
 */

if (!function_exists('render_frontis_loop_builder')) {
    function render_frontis_loop_builder($attributes, $content, $block) {
        $block_id = isset($attributes['blockID']) ? $attributes['blockID'] : 'fb-loop-builder-' . uniqid();
        $query = isset($attributes['query']) ? $attributes['query'] : [];
        $display_layout = isset($attributes['displayLayout']) ? $attributes['displayLayout'] : ['type' => 'flex', 'columns' => 3];
        
        // Query parameters
        $args = array(
            'post_type' => isset($query['postType']) ? $query['postType'] : 'post',
            'posts_per_page' => isset($query['perPage']) ? $query['perPage'] : 6,
            'order' => isset($query['order']) ? $query['order'] : 'desc',
            'orderby' => isset($query['orderBy']) ? $query['orderBy'] : 'date',
            'offset' => isset($query['offset']) ? $query['offset'] : 0,
        );
        
        // Handle pagination if needed
        if (isset($query['pages']) && $query['pages'] > 0) {
            $paged = get_query_var('paged') ? get_query_var('paged') : 1;
            $args['paged'] = $paged;
        }
        
        // Handle taxonomy query if set
        if (isset($query['taxQuery']) && !empty($query['taxQuery'])) {
            $tax_query = [];
            
            foreach ($query['taxQuery'] as $taxonomy => $terms) {
                if (!empty($terms)) {
                    $tax_query[] = [
                        'taxonomy' => $taxonomy,
                        'field' => 'id',
                        'terms' => $terms,
                    ];
                }
            }
            
            if (!empty($tax_query)) {
                $args['tax_query'] = $tax_query;
            }
        }
        
        // Run the query
        $loop = new WP_Query($args);
        
        // Store the global post object
        global $post;
        $original_post = $post;
        
        ob_start();
        
        if ($loop->have_posts()) {
            $wrapper_classes = "fb-loop-builder-block {$block_id}";
            $layout_classes = "fb-loop-content layout-{$display_layout['type']}";
            
            if ($display_layout['type'] === 'flex') {
                $layout_classes .= " columns-{$display_layout['columns']}";
            }
            
            echo '<div class="' . esc_attr($wrapper_classes) . '">';
            echo '<div class="' . esc_attr($layout_classes) . '">';
            
            // Filter for custom layout classes
            $layout_classes = apply_filters('frontis_loop_builder_layout_classes', '', $attributes);
            
            echo '<div class="fb-loop-builder-inner ' . esc_attr($layout_classes) . '">';
            
            // Loop through the posts
            while ($loop->have_posts()) {
                $loop->the_post();
                $post_id = get_the_ID();
                
                // Parse the inner blocks and replace the post template parts
                $inner_content = do_blocks($content);
                
                // Output the content
                echo $inner_content;
            }
            
            echo '</div>'; // close .fb-loop-builder-inner
            echo '</div>'; // close .fb-loop-content
            echo '</div>'; // close .fb-loop-builder-block
            
        } else {
            // No posts found
            $no_results = '<div class="fb-loop-no-results">';
            $no_results .= '<p>' . __('No posts found.', 'frontis-blocks') . '</p>';
            $no_results .= '</div>';
            
            echo $no_results;
        }
        
        // Reset the global post object
        $post = $original_post;
        wp_reset_postdata();
        
        return ob_get_clean();
    }
}


/**
 * Register the dynamic block.
 */
if (!function_exists('register_frontis_loop_builder')) {
    function register_frontis_loop_builder() {
        register_block_type_from_metadata(
            __DIR__,
            array(
                'render_callback' => 'render_frontis_loop_builder',
            )
        );
    }
}

add_action('init', 'register_frontis_loop_builder');

/**
 * Add custom query parameters support
 */
if (!function_exists('render_frontis_loop_builder')) {
    function frontis_loop_builder_query_vars($query_vars, $block) {
        if (!isset($block['attrs']['namespace']) || $block['attrs']['namespace'] !== 'frontis-blocks/custom-loop') {
            return $query_vars;
        }
        
        // Add your custom query modifications here
        
        return $query_vars;
    }
}

add_filter('query_loop_block_query_vars', 'frontis_loop_builder_query_vars', 10, 2);