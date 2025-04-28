<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Renders the Masonry Testimonial block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the testimonials grid.
 */

// Extract attributes
$block_id = isset($attributes['blockID']) ? $attributes['blockID'] : 'fb-masonry-testimonial-' . uniqid();
$post_type = isset($attributes['postType']) ? $attributes['postType'] : 'post';
$posts_to_show = isset($attributes['postsToShow']) ? intval($attributes['postsToShow']) : 6;
$post_order = isset($attributes['postOrder']) ? $attributes['postOrder'] : 'desc';
$columns = isset($attributes['columns']) ? intval($attributes['columns']) : 3;
$show_image = isset($attributes['showImage']) ? $attributes['showImage'] : true;
$show_author = isset($attributes['showAuthor']) ? $attributes['showAuthor'] : true;
$show_role = isset($attributes['showRole']) ? $attributes['showRole'] : true;
$text_color = isset($attributes['textColor']) ? $attributes['textColor'] : '';
$background_color = isset($attributes['backgroundColor']) ? $attributes['backgroundColor'] : '';
$item_background_color = isset($attributes['itemBackgroundColor']) ? $attributes['itemBackgroundColor'] : '#f4f4f4';
$animation = isset($attributes['animation']) ? $attributes['animation'] : 'none';

// Generate class name
$class_name = 'fb-masionry-testimonial frontis-block ' . $block_id;
if ($animation !== 'none') {
    $class_name .= ' animate__' . $animation;
}

// Generate inline styles
$container_style = '';
$text_style = '';
$item_style = '';

if ($columns) {
    $container_style .= 'grid-template-columns: repeat(' . $columns . ', 1fr);';
}

if ($text_color) {
    $text_style .= 'color: ' . esc_attr($text_color) . ';';
}

if ($item_background_color) {
    $item_style .= 'background-color: ' . esc_attr($item_background_color) . ';';
}

if ($background_color) {
    $container_style .= 'background-color: ' . esc_attr($background_color) . ';';
}

// Query arguments
$args = array(
    'post_type' => $post_type,
    'posts_per_page' => $posts_to_show,
    'post_status' => 'publish',
);

// Add orderby and order parameters based on post_order
if ($post_order === 'rand') {
    $args['orderby'] = 'rand';
} elseif ($post_order === 'title' || $post_order === 'title-desc') {
    $args['orderby'] = 'title';
    $args['order'] = ($post_order === 'title') ? 'ASC' : 'DESC';
} else {
    $args['orderby'] = 'date';
    $args['order'] = ($post_order === 'asc') ? 'ASC' : 'DESC';
}

// Run the query
$testimonials_query = new WP_Query($args);

// Start building the HTML output
$output = '<div class="' . esc_attr($class_name) . '"' . ($background_color ? ' style="' . esc_attr($container_style) . '"' : '') . '>';
$output .= '<div class="testimonial-container" style="' . esc_attr($container_style) . '">';

// Check if there are posts
if ($testimonials_query->have_posts()) {
    while ($testimonials_query->have_posts()) {
        $testimonials_query->the_post();
        $post_id = get_the_ID();

        // Get post content
        $excerpt = has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 25);

        $author_id = get_the_author_meta('ID');
        $author_name = get_the_author();
        $author_role = get_post_meta($post_id, 'author_designation', true) ?: 'Sales and service';

        $image_url = '';
        if ($show_image && has_post_thumbnail()) {
            $image_url = get_the_post_thumbnail_url($post_id, 'thumbnail');
        }

        $output .= '<div class="testimonial-item"' . ($item_style ? ' style="' . esc_attr($item_style) . '"' : '') . '>';
        $output .= '<div class="testimonial-content"' . ($text_style ? ' style="' . esc_attr($text_style) . '"' : '') . '>';
        $output .= '<p>' . wp_kses_post($excerpt) . '</p>';
        $output .= '</div>';
        $output .= '<div class="testimonial-bottom">';

        if ($show_author) {
            $output .= '<div class="author-info">';
            $output .= '<span class="author-name">' . esc_html($author_name) . '</span>';

            if ($show_role && !empty($author_role)) {
                $output .= '<span class="author-designation">' . esc_html($author_role) . '</span>';
            }

            $output .= '</div>';
        }

        if ($show_image && !empty($image_url)) {
            $output .= '<div class="author-avatar">';
            $output .= '<img src="' . esc_url($image_url) . '" alt="' . esc_attr($author_name) . '" />';
            $output .= '</div>';
        }

        $output .= '</div>'; 
        $output .= '</div>'; 
    }

    // Reset post data
    wp_reset_postdata();
} else {
    $output .= '<div class="no-posts-message">';
    $output .= esc_html__('No testimonials found. Please select a post type and ensure it has content.', 'frontis-blocks');
    $output .= '</div>';
}

$output .= '</div>'; 
$output .= '</div>';

echo $output;

return '';