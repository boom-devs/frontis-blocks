<?php
/**
 * Render callback for the Breadcrumb block.
 */

$attributes = $attributes ?? [];
$blockID = $attributes['blockID'] ?? '';
$separatorType = $attributes['separatorType'] ?? 'text';
$separatorText = $attributes['separatorText'] ?? '/';
$separatorIcon = $attributes['separatorIcon'] ?? 'fas fa-angle-right';
$showHomeIcon = $attributes['showHomeIcon'] ?? true;
$homeIcon = $attributes['homeIcon'] ?? 'fas fa-home';
$homeText = $attributes['homeText'] ?? 'Home';
$showItemIcon = $attributes['showItemIcon'] ?? false;
$itemIcon = $attributes['itemIcon'] ?? 'far fa-file';

// Helper to render separator
$render_separator = function() use ($separatorType, $separatorText, $separatorIcon) {
    if ($separatorType === 'text') {
        return '<span class="fb-breadcrumb-separator">' . esc_html($separatorText) . '</span>';
    }
    return '<i class="fb-breadcrumb-separator ' . esc_attr($separatorIcon) . '"></i>';
};

// Helper to render item icon
$render_item_icon = function() use ($showItemIcon, $itemIcon) {
    if ($showItemIcon) {
        return '<i class="fb-breadcrumb-icon ' . esc_attr($itemIcon) . '"></i>';
    }
    return '';
};

// Start Output
$output = '<div class="fb-breadcrumb-main-wrapper ' . esc_attr($blockID) . '">';
$output .= '<div class="fb-parent-wrapper fb-breadcrumb-container ' . esc_attr($blockID) . '">';
$output .= '<div class="fb-breadcrumb-list">';

// Home Link
$output .= '<div class="fb-breadcrumb-item">';
$output .= '<a href="' . esc_url(home_url('/')) . '" class="fb-breadcrumb-link">';
if ($showHomeIcon) {
    $output .= '<i class="fb-breadcrumb-icon ' . esc_attr($homeIcon) . '"></i> ';
}
$output .= esc_html($homeText);
$output .= '</a>';
$output .= '</div>';

// Breadcrumb Logic
if (!is_front_page()) {
    $output .= $render_separator();

    if (is_category() || is_single()) {
        if (is_single()) {
            $category = get_the_category();
            if ($category) {
                $cat = $category[0];
                $output .= '<div class="fb-breadcrumb-item">';
                $output .= '<a href="' . esc_url(get_category_link($cat->term_id)) . '" class="fb-breadcrumb-link">';
                $output .= $render_item_icon();
                $output .= esc_html($cat->name);
                $output .= '</a>';
                $output .= '</div>';
                $output .= $render_separator();
            }
        }
        $output .= '<div class="fb-breadcrumb-item">';
        $output .= $render_item_icon();
        $output .= '<span class="fb-breadcrumb-text">' . get_the_title() . '</span>';
        $output .= '</div>';
    } elseif (is_page()) {
        global $post;
        if ($post->post_parent) {
            $anc = get_post_ancestors($post->ID);
            $anc = array_reverse($anc);
            foreach ($anc as $ancestor) {
                $output .= '<div class="fb-breadcrumb-item">';
                $output .= '<a href="' . esc_url(get_permalink($ancestor)) . '" class="fb-breadcrumb-link">';
                $output .= $render_item_icon();
                $output .= esc_html(get_the_title($ancestor));
                $output .= '</a>';
                $output .= '</div>';
                $output .= $render_separator();
            }
        }
        $output .= '<div class="fb-breadcrumb-item">';
        $output .= $render_item_icon();
        $output .= '<span class="fb-breadcrumb-text">' . get_the_title() . '</span>';
        $output .= '</div>';
    } elseif (is_search()) {
        $output .= '<div class="fb-breadcrumb-item">';
        $output .= $render_item_icon();
        $output .= '<span class="fb-breadcrumb-text">Search Results for: ' . get_search_query() . '</span>';
        $output .= '</div>';
    }
}

$output .= '</div>'; // .fb-breadcrumb-list
$output .= '</div>'; // .fb-parent-wrapper
$output .= '</div>'; // .fb-breadcrumb-main-wrapper

echo $output;
