<?php
/**
 * Server-side rendering of the `frontis-blocks/loop-builder` block.
 */

if (!function_exists('frontis_blocks_render_loop_builder')) {
    function frontis_blocks_render_loop_builder($attributes, $content, $block) {
        // Extract attributes
        $block_id = isset($attributes['blockID']) ? $attributes['blockID'] : 'fb-loop-builder-' . uniqid();
        $post_type = isset($attributes['postType']) ? $attributes['postType'] : 'post';
        $posts_per_page = isset($attributes['postsPerPage']) ? intval($attributes['postsPerPage']) : 6;
        $order = isset($attributes['order']) ? $attributes['order'] : 'desc';
        $order_by = isset($attributes['orderBy']) ? $attributes['orderBy'] : 'date';
        $offset = isset($attributes['offset']) ? intval($attributes['offset']) : 0;
        $show_featured_image = isset($attributes['showFeaturedImage']) ? (bool) $attributes['showFeaturedImage'] : true;
        $show_title = isset($attributes['showTitle']) ? (bool) $attributes['showTitle'] : true;
        $show_excerpt = isset($attributes['showExcerpt']) ? (bool) $attributes['showExcerpt'] : true;
        $excerpt_length = isset($attributes['excerptLength']) ? intval($attributes['excerptLength']) : 25;
        $show_read_more = isset($attributes['showReadMore']) ? (bool) $attributes['showReadMore'] : true;
        $read_more_text = isset($attributes['readMoreText']) ? $attributes['readMoreText'] : __('Read More', 'frontis-blocks');
        $columns = isset($attributes['columns']) ? intval($attributes['columns']) : 3;
        $gap = isset($attributes['gap']) ? intval($attributes['gap']) : 20;

        // Parse categories and tags
        $included_categories = isset($attributes['includedCategories']) ? $attributes['includedCategories'] : [];
        $included_tags = isset($attributes['includedTags']) ? $attributes['includedTags'] : [];

        // Set up query arguments
        $args = array(
            'post_type' => $post_type,
            'posts_per_page' => $posts_per_page,
            'order' => $order,
            'orderby' => $order_by,
            'offset' => $offset,
            'post_status' => 'publish',
        );

        // Add tax query for categories and tags if specified
        $tax_query = array();

        if (!empty($included_categories)) {
            $tax_query[] = array(
                'taxonomy' => $post_type === 'post' ? 'category' : $post_type . '_category',
                'field' => 'term_id',
                'terms' => $included_categories,
            );
        }

        if (!empty($included_tags)) {
            $tax_query[] = array(
                'taxonomy' => $post_type === 'post' ? 'post_tag' : $post_type . '_tag',
                'field' => 'term_id',
                'terms' => $included_tags,
            );
        }

        if (!empty($tax_query)) {
            $args['tax_query'] = $tax_query;
            if (count($tax_query) > 1) {
                $args['tax_query']['relation'] = 'AND';
            }
        }

        // Run the query
        $query = new WP_Query($args);

        // Get the template content
        $template = $content;

        // Start the output
        $output = '<div class="fb-loop-builder-block ' . esc_attr($block_id) . '">';
        $output .= '<div class="fb-loop-builder-grid" style="display: grid; grid-template-columns: repeat(' . esc_attr($columns) . ', 1fr); gap: ' . esc_attr($gap) . 'px;">';

        // If we have posts
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post_id = get_the_ID();

                // Clone the template for each post
                $post_content = $template;

                // Replace placeholder content with actual post data
                $featured_image = '';
                if ($show_featured_image && has_post_thumbnail()) {
                    $featured_image = get_the_post_thumbnail($post_id, 'large');
                }

                $title = '';
                if ($show_title) {
                    $title = get_the_title();
                }

                $excerpt = '';
                if ($show_excerpt) {
                    if (has_excerpt()) {
                        $excerpt = get_the_excerpt();
                    } else {
                        $excerpt = wp_trim_words(get_the_content(), $excerpt_length);
                    }
                }

                $read_more = '';
                if ($show_read_more) {
                    $read_more = '<a href="' . esc_url(get_permalink()) . '" class="fb-loop-item-readmore-link">' . esc_html($read_more_text) . '</a>';
                }

                // Prepare individual post item
                $post_output = '<div class="fb-loop-item">';
                
                if ($show_featured_image) {
                    $post_output .= '<div class="fb-loop-item-image">' . $featured_image . '</div>';
                }
                
                if ($show_title) {
                    $post_output .= '<h3 class="fb-loop-item-title"><a href="' . esc_url(get_permalink()) . '">' . esc_html($title) . '</a></h3>';
                }
                
                if ($show_excerpt) {
                    $post_output .= '<div class="fb-loop-item-excerpt">' . wpautop($excerpt) . '</div>';
                }
                
                if ($show_read_more) {
                    $post_output .= '<div class="fb-loop-item-readmore">' . $read_more . '</div>';
                }
                
                $post_output .= '</div>';

                $output .= $post_output;
            }

            // Reset the post data
            wp_reset_postdata();
        } else {
            $output .= '<div class="fb-loop-builder-no-posts">' . __('No posts found.', 'frontis-blocks') . '</div>';
        }

        $output .= '</div>'; // Close grid
        $output .= '</div>'; // Close loop-builder-block

        return $output;
    }
}

// Register the render callback
return frontis_blocks_render_loop_builder($attributes, $content, $block);