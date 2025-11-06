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

// Layout attributes
$layout_type = fb_norm_str(isset($attributes['layoutType']) ? $attributes['layoutType'] : 'grid');
$grid_columns = isset($attributes['gridColumns']) ? $attributes['gridColumns'] : ['Desktop' => 3, 'Tablet' => 2, 'Mobile' => 1];
$list_style = fb_norm_str(isset($attributes['listStyle']) ? $attributes['listStyle'] : 'none');

// Read More attributes
$read_more_icon_frontend         = fb_norm_str(isset($attributes['readMoreIconFrontend']) ? $attributes['readMoreIconFrontend'] : '');
$read_more_switcher = isset($attributes['readMoreSwitcher']) ? (bool) $attributes['readMoreSwitcher'] : true;
$read_more_text = fb_norm_str(isset($attributes['readMoreText']) ? $attributes['readMoreText'] : 'View All');
$read_more_icon_align = fb_norm_str(isset($attributes['readMoreIconAlign']) ? $attributes['readMoreIconAlign'] : 'none');
$read_more_icon_image_url = fb_norm_str(isset($attributes['readMoreIconImageUrl']) ? $attributes['readMoreIconImageUrl'] : '');
$read_more_icon_image_alt = fb_norm_str(isset($attributes['readMoreIconImageAlt']) ? $attributes['readMoreIconImageAlt'] : 'icon');
// $read_more_icon_image_id = fb_norm_str(isset($attributes['readMoreIconImageID']) ? $attributes['readMoreIconImageID'] : '');
// $read_more_icon_image_display = fb_norm_str(isset($attributes['readMoreIconImagedisplay']) ? $attributes['readMoreIconImagedisplay'] : 'full');

// Description excerpt
$post_description_excerpt_length = isset($attributes['postDescriptionExcerptLength']) ? (int) $attributes['postDescriptionExcerptLength'] : 10;
$separator_style = fb_norm_str(isset($attributes['separatorStyle']) ? $attributes['separatorStyle'] : 'none');

// Wrapper attributes
$post_category_global_wraper_id = fb_norm_str(isset($attributes['postCategoryGlobalWraperID']) ? $attributes['postCategoryGlobalWraperID'] : '');
$post_category_global_wraper_class = fb_norm_str(isset($attributes['postCategoryGlobalWraperClass']) ? $attributes['postCategoryGlobalWraperClass'] : '');

// Responsive classes
$post_category_desktop_switcher = isset($attributes['postCategoryDesktopSwitcher']) ? (bool) $attributes['postCategoryDesktopSwitcher'] : false;
$post_category_tablet_switcher = isset($attributes['postCategoryTabletSwitcher']) ? (bool) $attributes['postCategoryTabletSwitcher'] : false;
$post_category_mobile_switcher = isset($attributes['postCategoryMobileSwitcher']) ? (bool) $attributes['postCategoryMobileSwitcher'] : false;

$responsive_classes = [];
if ($post_category_desktop_switcher) $responsive_classes[] = 'fb-desktop-responsive';
if ($post_category_tablet_switcher) $responsive_classes[] = 'fb-tablet-responsive';
if ($post_category_mobile_switcher) $responsive_classes[] = 'fb-mobile-responsive';

// Base classes
$base_classes = array_merge([
    'fb-taxonomy-block',
    'fb-post-category-area',
    $block_id,
    'fb-taxonomy-' . $premade_style
], $responsive_classes);

$wrapper_classes_arr = array_filter(array_map(function ($c) {
    return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapper_classes_arr),
]);


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

// Proper hierarchical sorting function (same as editor)
if (!function_exists('fb_sort_taxonomy_terms_hierarchically')) {
    function fb_sort_taxonomy_terms_hierarchically($terms)
    {
        if (!is_array($terms) || empty($terms)) {
            return [];
        }

        // Sort terms to ensure parents come before children
        $sorted_terms = [];

        // First, add all parent terms (parent = 0)
        foreach ($terms as $term) {
            if ($term->parent === 0) {
                $sorted_terms[] = $term;
            }
        }

        // Then recursively add child terms immediately after their parent
        foreach ($terms as $term) {
            if ($term->parent !== 0) {
                // Find the position of the parent term
                $parent_position = null;
                foreach ($sorted_terms as $index => $sorted_term) {
                    if ($sorted_term->term_id === $term->parent) {
                        $parent_position = $index;
                        break;
                    }
                }

                // Insert child term immediately after parent
                if ($parent_position !== null) {
                    array_splice($sorted_terms, $parent_position + 1, 0, [$term]);
                } else {
                    // If parent not found, add at the end
                    $sorted_terms[] = $term;
                }
            }
        }

        return $sorted_terms;
    }
}

// Improved hierarchical list builder
if (!function_exists('fb_build_taxonomy_hierarchy')) {
    function fb_build_taxonomy_hierarchy($terms, $parent_id = 0, $level = 0, $args)
    {
        $children = array_filter($terms, function ($term) use ($parent_id) {
            return $term->parent == $parent_id;
        });

        if (empty($children)) return '';

        $ul_class = $parent_id === 0 ?
            'fb-taxonomy-list fb_post_category_container ' . $args['wrapper_class'] :
            'fb-taxonomy-list fb_taxonomy_sublist';

        $list_id = $parent_id === 0 && $args['wrapper_id'] ? 'id="' . esc_attr($args['wrapper_id']) . '"' : '';

        $html = '<ul class="' . esc_attr($ul_class) . '" ' . $list_id . '>';

        foreach ($children as $term) {
            $term_link = get_term_link($term);
            $term_image = get_term_meta($term->term_id, 'fb_taxonomy_image', true);

            $html .= '<li class="fb-taxonomy-item" data-parent-id="' . esc_attr($term->parent) . '">';
            $html .= '<div class="fb-taxonomy-link-count">';
            $html .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-link">';
            $html .= '<span class="fb-taxonomy-name">' . esc_html($term->name) . '</span>';
            $html .= '</a>';

            // if ($args['show_count']) {
            //     $html .= '<span class="fb-taxonomy-count">(' . esc_html($term->count) . ')</span>';
            // }

            if ($args['show_count']) {
                if ($args['premade_style'] === 'style-1') {
                    $html .= '<span class="fb-taxonomy-count">(' . esc_html($term->count) . ')</span>';
                } else {
                    $html .= '<span class="fb-taxonomy-count">' . esc_html($term->count) . '</span>';
                }
            }

            $html .= '</div>';

            if ($args['show_description'] && $term->description) {
                $html .= '<p class="fb-taxonomy-description">';
                $html .= esc_html(fb_trim_words($term->description, $args['excerpt_length']));
                $html .= '</p>';
            }

              if (
                isset($args['premade_style'], $args['read_more_switcher']) &&
                $args['premade_style'] === 'style-2' &&
                $args['read_more_switcher']
            ) {
                $html .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-read-more-button">';

                if ($args['read_more_icon_align'] !== 'icon-only') {
                    $html .= '<span class="fb-taxonomy-read-more-text">' . esc_html($args['read_more_text']) . '</span>';
                }

                if ($args['read_more_icon_align'] === 'icon-text') {
                    $html .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon">'
                        . $args['read_more_icon_frontend'] .
                        '</div></div>';
                }

                if ($args['read_more_icon_align'] === 'image' && !empty($args['read_more_icon_image_url'])) {
                    $html .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon-image">'
                        . '<img src="' . esc_url($args['read_more_icon_image_url']) . '" alt="' . esc_attr($args['read_more_icon_image_alt']) . '" />'
                        . '</div></div>';
                }

                if ($args['read_more_icon_align'] === 'icon-only') {
                    $html .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon">'
                        . $args['read_more_icon_frontend'] .
                        '</div></div>';
                }

                $html .= '</a>';
            }

            if ($args['separator_style'] !== 'none') {
                $html .= '<div class="fb-tax-separator"></div>';
            }
            
            $html .= '</li>';
            // Recursive call for child terms
            $html .= fb_build_taxonomy_hierarchy($terms, $term->term_id, $level + 1, $args);
        }

        $html .= '</ul>';
        return $html;
    }
}

// Build the output
$output = '';

if (empty($taxonomy_type)) {
    $output = '<p class="fb-no-taxonomies">' . __('Taxonomy not available', 'frontis-blocks') . '</p>';
} elseif (empty($taxonomy_terms)) {
    $output = '<p class="fb-no-taxonomies">' . __('No terms found with current filters.', 'frontis-blocks') . '</p>';
} elseif ($layout_type === 'grid') {

    // Apply hierarchical sorting for grid layout with child terms
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

        // Determine if the image block should be rendered at all
        $should_render_image = false;

        // For style-3, only render if a custom term image exists
        if ($premade_style === 'style-3' && !empty($term_image)) {
            $should_render_image = true;
        } 
        // For style-4, render if the default image is set, meaning $image_source will have a value
        elseif ($premade_style === 'style-4') {
            $should_render_image = true;
        }

        // Show image for style-3 & style-4
        if ($should_render_image) {
            
            // Start the output wrapper for style-4 only
            if ($premade_style === 'style-4') {
                $output .= '<div class="fb-taxonomy-image-container">';
            }

            // Output the image container common to both styles
            $output .= '<div class="fb-taxonomy-image">';
            
            // Use $image_source which handles the fallback for style-4, and the term image for style-3
            $output .= '<img src="' . esc_url($image_source) . '" alt="' . esc_attr($term->name) . '" />';
            
            $output .= '</div>';

            // Close the output wrapper for style-4 only
            if ($premade_style === 'style-4') {
                $output .= '</div>';
            }
        }

        


        if($premade_style === 'style-4') {
            $output .= '<div class="fb-taxonomy-card-content">';
        }

        $output .= '<div class="fb-taxonomy-meta">';

        $output .= '<div class="fb-taxonomy-link-count">';
            if ($show_count) {
                $output .= '<span class="fb-taxonomy-count">' . esc_html($term->count) . '</span>';
            }
            $output .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-link">';
            // Visual indicator for child terms in grid layout
            // if ($term->parent !== 0) {
            //     $output .= '<span class="fb-child-indicator">(Child Category)</span>';
            // }
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

            // Note: Icons would need additional handling
            if ($read_more_icon_align === 'icon-only' || $read_more_icon_align === 'icon-text') {
                $output .= '<div class="fb-taxonomy-read-more-icon-wrapper">';
                $output .= '<div class="fb-taxonomy-read-more-icon">' . $read_more_icon_frontend . '</div>';
                $output .= '</div>';
            }

            // Image : Show Custom Image 
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

        $output .= '</div>'; // closed taxonomy item div
    }

    $output .= '</div>';
} else {
    // List layout
    $args = [
        'wrapper_id' => $post_category_global_wraper_id,
        'wrapper_class' => $post_category_global_wraper_class,
        'show_count' => $show_count,
        'show_description' => $show_description,
        'excerpt_length' => $post_description_excerpt_length,
        'separator_style' => $separator_style,
        'premade_style' => $premade_style,
        'read_more_switcher'      => $read_more_switcher,
        'read_more_text'          => $read_more_text,
        'read_more_icon_align'    => $read_more_icon_align,
        'read_more_icon_frontend' => $read_more_icon_frontend,
        'read_more_icon_image_url'=> $read_more_icon_image_url,
        'read_more_icon_image_alt'=> $read_more_icon_image_alt,
    ];

    if ($show_child_categories) {
        // Apply hierarchical sorting for list layout
        $taxonomy_terms = fb_sort_taxonomy_terms_hierarchically($taxonomy_terms);
        $output = fb_build_taxonomy_hierarchy($taxonomy_terms, 0, 0, $args);
    } else {
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

            // if ($show_count) {
            //     $output .= '<span class="fb-taxonomy-count">(' . esc_html($term->count) . ')</span>';
            // }

            if ($show_count) {
                if ($premade_style === 'style-1') {
                    $output .= '<span class="fb-taxonomy-count">(' . esc_html($term->count) . ')</span>';
                } else {
                    $output .= '<span class="fb-taxonomy-count">' . esc_html($term->count) . '</span>';
                }
            }



            $output .= '</div>';

            if ($show_description && $term->description) {
                $output .= '<p class="fb-taxonomy-description">';
                $output .= esc_html(fb_trim_words($term->description, $post_description_excerpt_length));
                $output .= '</p>';
            }


            // Read More button for list + premadeStyle style-2
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
}
?>

<div <?php echo $wrapper_attributes; ?>>
    <?php echo $output; ?>
</div>