<?php

/**
 * Server-side rendering for the Post Category block
 */

// Helper functions
if (!function_exists('fb_norm_str')) {
    function fb_norm_str($val, $default = '')
    {
        if (is_array($val)) {
            $val = implode(' ', array_filter(array_map('strval', $val)));
        }
        if ($val === null) return $default;
        return (string) $val;
    }
}

if (!function_exists('fb_trim_words')) {
    function fb_trim_words($text, $word_limit)
    {
        if (!$text) return '';
        $words = explode(' ', $text);
        return count($words) > $word_limit ? implode(' ', array_slice($words, 0, $word_limit)) . '...' : $text;
    }
}

if (!function_exists('fb_format_count_with_label_html')) {
    function fb_format_count_with_label_html($count, $term_id, $taxonomy_slug, $show_label = true) {
        $html = '<span class="fb-taxonomy-count">';
        
        if (!$show_label) {
            $html .= '<span class="fb-taxonomy-count-number">' . esc_html($count) . '</span>';
        } else {
            $label = fb_get_post_type_label_for_term($term_id, $taxonomy_slug, $count);
            if (!empty($label)) {
                $html .= '<span class="fb-taxonomy-count-number">' . esc_html($count) . '</span>' . 
                       '<span class="fb-taxonomy-count-label"> ' . esc_html($label) . '</span>';
            } else {
                $html .= '<span class="fb-taxonomy-count-number">' . esc_html($count) . '</span>';
            }
        }
        
        $html .= '</span>';
        return $html;
    }
}

if (!function_exists('fb_get_post_type_label_for_term')) {
    function fb_get_post_type_label_for_term($term_id, $taxonomy_slug, $count = 1) {
        if (empty($term_id) || empty($taxonomy_slug)) {
            return '';
        }
        
        // Get the term
        $term = get_term($term_id, $taxonomy_slug);
        if (is_wp_error($term) || !$term) {
            return '';
        }
        
        // Get taxonomy object
        $taxonomy = get_taxonomy($taxonomy_slug);
        if (!$taxonomy) {
            return '';
        }
        
        // Get post types associated with this taxonomy
        $post_types = $taxonomy->object_type;
        if (empty($post_types)) {
            return '';
        }
        
        // Use a single query to check all post types at once
        $valid_post_types = [];
        
        // Build a tax query to check multiple post types
        $query_args = array(
            'post_type' => $post_types,
            'posts_per_page' => 1,
            'fields' => 'ids',
            'post_status' => 'publish',
            'tax_query' => array(
                array(
                    'taxonomy' => $taxonomy_slug,
                    'field' => 'term_id',
                    'terms' => $term_id,
                )
            )
        );
        
        $posts = get_posts($query_args);
        
        if (empty($posts)) {
            return '';
        }
        
        // Since we found posts, now we need to know which post types they belong to
        // Get labels for all post types (simplified approach)
        $post_type_labels = [];
        foreach ($post_types as $post_type_slug) {
            $post_type = get_post_type_object($post_type_slug);
            if ($post_type && $post_type->public) {
                if ($count == 1) {
                    $post_type_labels[] = $post_type->labels->singular_name ?? ucfirst($post_type_slug);
                } else {
                    $post_type_labels[] = $post_type->labels->name ?? ucfirst($post_type_slug) . 's';
                }
            }
        }
        
        if (empty($post_type_labels)) {
            return '';
        }
        
        // Return appropriate label
        if (count($post_type_labels) === 1) {
            return $post_type_labels[0];
        }
        
        // Multiple post types - use generic label
        if ($count == 1) {
            return __('Post', 'frontis-blocks');
        } else {
            return __('Posts', 'frontis-blocks');
        }
    }
}

// Extract attributes
$block_id = fb_norm_str(isset($attributes['blockId']) ? $attributes['blockId'] : '');
$premade_style = fb_norm_str(isset($attributes['premadeStyle']) ? $attributes['premadeStyle'] : 'style-1');
$taxonomy_type = fb_norm_str(isset($attributes['taxonomyType']) ? $attributes['taxonomyType'] : '');
$show_count = isset($attributes['showCount']) ? (bool) $attributes['showCount'] : true;
$show_description = isset($attributes['showDescription']) ? (bool) $attributes['showDescription'] : true;
$show_empty = isset($attributes['showEmpty']) ? (bool) $attributes['showEmpty'] : false;
$show_child_categories = isset($attributes['showChildCategories']) ? (bool) $attributes['showChildCategories'] : false;
$selection_type = fb_norm_str(isset($attributes['selectionType']) ? $attributes['selectionType'] : 'include');
$include_taxonomies = isset($attributes['includeTaxonomies']) ? (array) $attributes['includeTaxonomies'] : [];
$exclude_taxonomies = isset($attributes['excludeTaxonomies']) ? (array) $attributes['excludeTaxonomies'] : [];
$order_by = fb_norm_str(isset($attributes['orderBy']) ? $attributes['orderBy'] : 'name');
$sort_order = fb_norm_str(isset($attributes['sortOrder']) ? $attributes['sortOrder'] : 'asc');
$per_page = isset($attributes['perPage']) ? (int) $attributes['perPage'] : 6;
$show_label = isset($attributes['showLabel']) ? (bool) $attributes['showLabel'] : true; // FIXED: showLabel not showPostTypeLabel

// Layout attributes
$layout_type = fb_norm_str(isset($attributes['layoutType']) ? $attributes['layoutType'] : 'grid');

// Read More attributes
$read_more_icon_frontend = fb_norm_str(isset($attributes['readMoreIconFrontend']) ? $attributes['readMoreIconFrontend'] : '');
$read_more_switcher = isset($attributes['readMoreSwitcher']) ? (bool) $attributes['readMoreSwitcher'] : false;
$read_more_text = fb_norm_str(isset($attributes['readMoreText']) ? $attributes['readMoreText'] : 'View All');
$read_more_icon_align = fb_norm_str(isset($attributes['readMoreIconAlign']) ? $attributes['readMoreIconAlign'] : 'none');
$read_more_icon_image_url = fb_norm_str(isset($attributes['readMoreIconImageUrl']) ? $attributes['readMoreIconImageUrl'] : '');
$read_more_icon_image_alt = fb_norm_str(isset($attributes['readMoreIconImageAlt']) ? $attributes['readMoreIconImageAlt'] : 'icon');

// Description excerpt
$post_description_excerpt_length = isset($attributes['postDescriptionExcerptLength']) ? (int) $attributes['postDescriptionExcerptLength'] : 10;
$separator_style = fb_norm_str(isset($attributes['separatorStyle']) ? $attributes['separatorStyle'] : 'none');

// Wrapper attributes
$post_category_global_wraper_id = fb_norm_str(isset($attributes['postCategoryGlobalWraperID']) ? $attributes['postCategoryGlobalWraperID'] : '');
$post_category_global_wraper_class = fb_norm_str(isset($attributes['postCategoryGlobalWraperClass']) ? $attributes['postCategoryGlobalWraperClass'] : '');

// Get taxonomy terms
$taxonomy_terms = [];
if ($taxonomy_type) {
    $args = [
        'taxonomy' => $taxonomy_type,
        'hide_empty' => !$show_empty,
        'number' => $per_page,
        'orderby' => $order_by,
        'order' => $sort_order,
    ];

    if (!$show_child_categories) {
        $args['parent'] = 0;
    }

    if ($selection_type === 'include' && !empty($include_taxonomies)) {
        $args['include'] = $include_taxonomies;
    } elseif ($selection_type === 'exclude' && !empty($exclude_taxonomies)) {
        $args['exclude'] = $exclude_taxonomies;
    }

    $taxonomy_terms = get_terms($args);

    if (is_wp_error($taxonomy_terms)) {
        $taxonomy_terms = [];
    }
}

// Proper hierarchical sorting function
if (!function_exists('fb_sort_taxonomy_terms_hierarchically')) {
    function fb_sort_taxonomy_terms_hierarchically($terms)
    {
        if (!is_array($terms) || empty($terms)) {
            return [];
        }

        $sorted_terms = [];

        // First, add all parent terms (parent = 0)
        foreach ($terms as $term) {
            if ($term->parent === 0) {
                $sorted_terms[] = $term;
            }
        }

        // Then recursively add child terms
        foreach ($terms as $term) {
            if ($term->parent !== 0) {
                $parent_position = null;
                foreach ($sorted_terms as $index => $sorted_term) {
                    if ($sorted_term->term_id === $term->parent) {
                        $parent_position = $index;
                        break;
                    }
                }

                if ($parent_position !== null) {
                    array_splice($sorted_terms, $parent_position + 1, 0, [$term]);
                } else {
                    $sorted_terms[] = $term;
                }
            }
        }

        return $sorted_terms;
    }
}

// Build the output
$output = '';

if (empty($taxonomy_type)) {
    $output = '<p class="fb-no-taxonomies">' . __('Taxonomy not available', 'frontis-blocks') . '</p>';
} elseif (empty($taxonomy_terms)) {
    $output = '<p class="fb-no-taxonomies">' . __('No terms found with current filters.', 'frontis-blocks') . '</p>';
} elseif ($layout_type === 'grid') {

    // Apply hierarchical sorting for grid layout
    if ($show_child_categories) {
        $taxonomy_terms = fb_sort_taxonomy_terms_hierarchically($taxonomy_terms);
    }

    $grid_class = 'fb_post_category_container fb-taxonomy-grid';
    if ($post_category_global_wraper_class) {
        $grid_class .= ' ' . $post_category_global_wraper_class;
    }

    $grid_id = $post_category_global_wraper_id ? 'id="' . esc_attr($post_category_global_wraper_id) . '"' : '';

    $output .= '<div class="' . esc_attr($grid_class) . '" ' . $grid_id . '>';

    foreach ($taxonomy_terms as $term) {
        $term_link = get_term_link($term);
        $term_image = get_term_meta($term->term_id, 'fb_taxonomy_image', true);
        $default_image_url = FB_PLUGIN_URL . 'assets/images/preset-bg.jpg';
        $image_source = !empty($term_image) ? $term_image : $default_image_url;

        $output .= '<div class="fb-taxonomy-item">';

        // Show image for style-3 & style-4
        if (($premade_style === 'style-3' && !empty($term_image)) || $premade_style === 'style-4') {
            if ($premade_style === 'style-4') {
                $output .= '<div class="fb-taxonomy-image-container">';
            }
            
            $output .= '<div class="fb-taxonomy-image">';
            $output .= '<img src="' . esc_url($image_source) . '" alt="' . esc_attr($term->name) . '" />';
            $output .= '</div>';
            
            if ($premade_style === 'style-4') {
                $output .= '</div>';
                $output .= '<div class="fb-taxonomy-card-content">';
            }
        }

        $output .= '<div class="fb-taxonomy-meta">';

        $output .= '<div class="fb-taxonomy-link-count">';
            if ($show_count) {
                $formatted_count_html = fb_format_count_with_label_html(
                    $term->count, 
                    $term->term_id,
                    $taxonomy_type, 
                    $show_label
                );
                $output .= '<span class="fb-taxonomy-count">' . $formatted_count_html . '</span>';
            }
            $output .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-link">';
            $output .= '<h4 class="fb-taxonomy-name">' . esc_html($term->name) . '</h4>';
            $output .= '</a>';
        $output .= '</div>';

        if ($show_description && $term->description) {
            $output .= '<p class="fb-taxonomy-description">';
            $output .= esc_html(fb_trim_words($term->description, $post_description_excerpt_length));
            $output .= '</p>';
        }

        $output .= '</div>';

        if ($read_more_switcher) {
            $output .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-read-more-button">';

            if ($read_more_icon_align !== 'icon-only') {
                $output .= '<span class="fb-taxonomy-read-more-text">' . esc_html($read_more_text) . '</span>';
            }

            if ($read_more_icon_align === 'icon-only' || $read_more_icon_align === 'icon-text') {
                $output .= '<div class="fb-taxonomy-read-more-icon-wrapper">';
                $output .= '<div class="fb-taxonomy-read-more-icon">' . $read_more_icon_frontend . '</div>';
                $output .= '</div>';
            }

            if ($read_more_icon_align === 'image' && $read_more_icon_image_url) {
                $output .= '<div class="fb-taxonomy-read-more-icon-wrapper">';
                $output .= '<div class="fb-taxonomy-read-more-icon-image">';
                $output .= '<img src="' . esc_url($read_more_icon_image_url) . '" alt="' . esc_attr($read_more_icon_image_alt) . '" />';
                $output .= '</div>';
                $output .= '</div>';
            }

            $output .= '</a>';
        }

        if($premade_style === 'style-4') {
            $output .= '</div>';
        }

        $output .= '</div>';
    }

    $output .= '</div>';
} else {
    // List layout
    $list_class = 'fb-taxonomy-list fb_post_category_container';
    if ($post_category_global_wraper_class) {
        $list_class .= ' ' . $post_category_global_wraper_class;
    }

    $list_id = $post_category_global_wraper_id ? 'id="' . esc_attr($post_category_global_wraper_id) . '"' : '';

    $output .= '<ul class="' . esc_attr($list_class) . '" ' . $list_id . '>';

    foreach ($taxonomy_terms as $term) {
        $term_link = get_term_link($term);

        $output .= '<li class="fb-taxonomy-item" data-parent-id="' . esc_attr($term->parent) . '">';
        $output .= '<div class="fb-taxonomy-link-count">';
        $output .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-link">';
        $output .= '<span class="fb-taxonomy-name">' . esc_html($term->name) . '</span>';
        $output .= '</a>';

        if ($show_count) {
            $formatted_count_html = fb_format_count_with_label_html(
                $term->count, 
                $term->term_id,
                $taxonomy_type, 
                $show_label
            );
            
            if ($premade_style === 'style-1') {
                $output .= '<span class="fb-taxonomy-count">(' . $formatted_count_html . ')</span>';
            } else {
                $output .= '<span class="fb-taxonomy-count">' . $formatted_count_html . '</span>';
            }
        }

        $output .= '</div>';

        if ($show_description && $term->description) {
            $output .= '<p class="fb-taxonomy-description">';
            $output .= esc_html(fb_trim_words($term->description, $post_description_excerpt_length));
            $output .= '</p>';
        }

        // Read More button for style-2
        if ($premade_style === 'style-2' && $read_more_switcher) {
            $output .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-read-more-button">';

            if ($read_more_icon_align !== 'icon-only') {
                $output .= '<span class="fb-taxonomy-read-more-text">' . esc_html($read_more_text) . '</span>';
            }

            if ($read_more_icon_align === 'icon-text') {
                $output .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon">'
                        . $read_more_icon_frontend .
                        '</div></div>';
            }

            if ($read_more_icon_align === 'image' && $read_more_icon_image_url) {
                $output .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon-image">'
                        . '<img src="' . esc_url($read_more_icon_image_url) . '" alt="' . esc_attr($read_more_icon_image_alt) . '" />'
                        . '</div></div>';
            }

            if ($read_more_icon_align === 'icon-only') {
                $output .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon">'
                        . $read_more_icon_frontend .
                        '</div></div>';
            }

            $output .= '</a>';
        }

        if ($separator_style !== 'none') {
            $output .= '<div class="fb-tax-separator"></div>';
        }

        $output .= '</li>';
    }

    $output .= '</ul>';
}

// Responsive classes
$responsive_classes = [];
if (isset($attributes['postCategoryDesktopSwitcher']) && $attributes['postCategoryDesktopSwitcher']) {
    $responsive_classes[] = 'fb-desktop-responsive';
}
if (isset($attributes['postCategoryTabletSwitcher']) && $attributes['postCategoryTabletSwitcher']) {
    $responsive_classes[] = 'fb-tablet-responsive';
}
if (isset($attributes['postCategoryMobileSwitcher']) && $attributes['postCategoryMobileSwitcher']) {
    $responsive_classes[] = 'fb-mobile-responsive';
}

$wrapper_classes = array_merge([
    'fb-taxonomy-block',
    'fb-post-category-area',
    $block_id,
    'fb-taxonomy-' . $premade_style
], $responsive_classes);

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', array_filter($wrapper_classes)),
]);
?>

<div <?php echo $wrapper_attributes; ?>>
    <?php echo $output; ?>
</div>