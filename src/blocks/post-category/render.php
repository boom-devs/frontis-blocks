<?php

if (!defined('ABSPATH')) {
    exit;
}

use FrontisBlocks\Utils\Helper;

// Helper functions
if (!function_exists('fb_norm_str')) {
    function fb_norm_str($val, $default = '')
    {
        if (is_array($val)) {
            $val = implode(' ', array_filter(array_map('strval', $val)));
        }
        if ($val === null)
            return $default;
        return (string) $val;
    }
}

if (!function_exists('fb_trim_words')) {
    function fb_trim_words($text, $word_limit)
    {
        if (!$text)
            return '';
        $words = explode(' ', $text);
        return count($words) > $word_limit ? implode(' ', array_slice($words, 0, $word_limit)) . '...' : $text;
    }
}

// Extract attributes
$block_id = fb_norm_str(isset($attributes['blockID']) ? $attributes['blockID'] : '');
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
$show_post_type_label = !empty($attributes['showLabel']);
// $show_post_type_label = isset($attributes['showLabel']) ? (bool) $attributes['showLabel'] : true;
$show_author = isset($attributes['showAuthor']) ? (bool) $attributes['showAuthor'] : true;

// Layout attributes
$layout_type = fb_norm_str(isset($attributes['layoutType']) ? $attributes['layoutType'] : 'grid');
$grid_columns = isset($attributes['gridColumns']) ? $attributes['gridColumns'] : ['Desktop' => 3, 'Tablet' => 2, 'Mobile' => 1];
$list_style = fb_norm_str(isset($attributes['listStyle']) ? $attributes['listStyle'] : 'none');

// Read More attributes
$read_more_icon_slug = fb_norm_str(isset($attributes['readMoreIcon']) ? $attributes['readMoreIcon'] : '');
$read_more_icon_frontend = fb_norm_str(isset($attributes['readMoreIconFrontend']) ? $attributes['readMoreIconFrontend'] : '');
$read_more_icon_html = Helper::render_icon($read_more_icon_slug, ['fallback' => $read_more_icon_frontend]);
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

// Responsive classes
$post_category_desktop_switcher = isset($attributes['postCategoryDesktopSwitcher']) ? (bool) $attributes['postCategoryDesktopSwitcher'] : false;
$post_category_tablet_switcher = isset($attributes['postCategoryTabletSwitcher']) ? (bool) $attributes['postCategoryTabletSwitcher'] : false;
$post_category_mobile_switcher = isset($attributes['postCategoryMobileSwitcher']) ? (bool) $attributes['postCategoryMobileSwitcher'] : false;

$responsive_classes = [];
if ($post_category_desktop_switcher)
    $responsive_classes[] = 'fb-desktop-responsive';
if ($post_category_tablet_switcher)
    $responsive_classes[] = 'fb-tablet-responsive';
if ($post_category_mobile_switcher)
    $responsive_classes[] = 'fb-mobile-responsive';

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

if (!function_exists('fb_get_post_type_label_for_taxonomy')) {
    function fb_get_post_type_label_for_taxonomy($taxonomy_slug, $count = 1)
    {
        if (empty($taxonomy_slug)) {
            return '';
        }

        $taxonomy = get_taxonomy($taxonomy_slug);
        if (!$taxonomy || empty($taxonomy->object_type)) {
            return '';
        }

        // Get the first post type associated with this taxonomy
        $post_type_slug = $taxonomy->object_type[0];
        $post_type = get_post_type_object($post_type_slug);

        if (!$post_type) {
            return '';
        }

        $is_plural = $count !== 1;

        // For custom post types
        if ($post_type->labels) {
            if (!$is_plural && !empty($post_type->labels->singular_name)) {
                return $post_type->labels->singular_name;
            } else if ($is_plural && !empty($post_type->labels->name)) {
                return $post_type->labels->name;
            } else if (!empty($post_type->labels->name)) {
                return $post_type->labels->name;
            } else if (!empty($post_type->labels->singular_name)) {
                return $post_type->labels->singular_name;
            }
        }

        // Fallback
        $base_name = ucfirst($post_type_slug);
        return $is_plural ? $base_name . 's' : $base_name;
    }
}

if (!function_exists('fb_get_term_owner')) {
    function fb_get_term_owner($term_id, $taxonomy = 'category')
    {
        $posts = get_posts([
            'post_type' => 'any',
            'post_status' => 'publish',
            'posts_per_page' => 1,
            'orderby' => 'date',
            'order' => 'ASC',
            // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_tax_query -- Required for term owner detection
            'tax_query' => [
                [
                    'taxonomy' => $taxonomy,
                    'field' => 'term_id',
                    'terms' => $term_id,
                ]
            ],
            'fields' => 'ids'
        ]);

        if (empty($posts)) {
            $admin = get_users(['role' => 'administrator', 'number' => 1, 'orderby' => 'ID']);
            $user_id = !empty($admin) ? $admin[0]->ID : 1;
        } else {
            $user_id = get_post_field('post_author', $posts[0]);
        }

        $user = get_userdata($user_id);
        if (!$user)
            return null;

        return [
            'id' => $user->ID,
            'name' => $user->display_name,
            'avatar' => get_avatar_url($user->ID, ['size' => 40]),
            'url' => get_author_posts_url($user->ID),
        ];
    }
}

if (!function_exists('fb_format_count_with_label_html')) {
    function fb_format_count_with_label_html($count, $taxonomy_slug, $show_label = true)
    {
        $number_html = '<span class="fb-taxonomy-count-number">' . esc_html($count) . '</span>';

        // Main fix: jodi user label dekhte na chay, tahole label add koro na
        if (!$show_label) {
            return $number_html;
        }

        $label = fb_get_post_type_label_for_taxonomy($taxonomy_slug, $count);

        if (empty($label)) {
            return $number_html;
        }

        return $number_html . '<span class="fb-taxonomy-count-label"> ' . esc_html($label) . '</span>';
    }
}

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
        $args['exclude'] = $exclude_taxonomies; // phpcs:ignore WordPressVIPMinimum.Performance.WPQueryParams.PostNotIn_exclude
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

// hierarchical list builder
if (!function_exists('fb_build_taxonomy_hierarchy')) {
    function fb_build_taxonomy_hierarchy($terms, $parent_id = 0, $level = 0, $args = array())
    {
        $children = array_filter($terms, function ($term) use ($parent_id) {
            return $term->parent == $parent_id;
        });

        if (empty($children))
            return '';

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

            if ($args['show_count']) {
                $formatted_count_html = fb_format_count_with_label_html(
                    $term->count,
                    $args['taxonomy_type'],
                    $args['show_post_type_label']
                );

                if ($args['premade_style'] === 'style-1') {
                    $html .= '<span class="fb-taxonomy-count">(' . $formatted_count_html . ')</span>';
                } else {
                    $html .= '<span class="fb-taxonomy-count">' . $formatted_count_html . '</span>';
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
                        . $args['read_more_icon_html'] .
                        '</div></div>';
                }

                if ($args['read_more_icon_align'] === 'image' && !empty($args['read_more_icon_image_url'])) {
                    $html .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon-image">'
                        . '<img src="' . esc_url($args['read_more_icon_image_url']) . '" alt="' . esc_attr($args['read_more_icon_image_alt']) . '" />'
                        . '</div></div>';
                }

                if ($args['read_more_icon_align'] === 'icon-only') {
                    $html .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon">'
                        . $args['read_more_icon_html'] .
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

    $is_single_item = count($taxonomy_terms) === 1;
    $grid_class = 'fb_post_category_container';
    if (!$is_single_item) {
        $grid_class .= ' fb-taxonomy-grid';
    } else {
        $grid_class .= ' single-item';
    }
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
        $author = fb_get_term_owner($term->term_id, $term->taxonomy);

        $output .= '<div class="fb-taxonomy-item">';

        $should_render_image = false;

        if ($premade_style === 'style-3') {
            $should_render_image = true;
        } elseif ($premade_style === 'style-4') {
            $should_render_image = true;
        }

        if ($should_render_image) {

            if ($premade_style === 'style-4') {
                $output .= '<div class="fb-taxonomy-image-container">';
            }

            $output .= '<div class="fb-taxonomy-image">';

            $output .= '<img src="' . esc_url($image_source) . '" alt="' . esc_attr($term->name) . '" />';

            $output .= '</div>';

            if ($premade_style === 'style-4') {
                $output .= '</div>';
            }
        }

        if ($premade_style === 'style-4') {
            $output .= '<div class="fb-taxonomy-card-content">';
        }

        $output .= '<div class="fb-taxonomy-meta">';

        $output .= '<div class="fb-taxonomy-link-count">';
        if ($show_count) {
            $formatted_count_html = fb_format_count_with_label_html(
                $term->count,
                $taxonomy_type,
                $show_post_type_label
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
        $output .= '<div class="fb-taxonomy-more-info">';

        if ($show_author && $author) {
            $output .= '<div class="fb-taxonomy-author-wrapper">';
            $output .= '<a href="' . esc_url($author['url']) . '">';
            $output .= '<img src="' . esc_url($author['avatar']) . '" alt="' . esc_attr($author['name']) . '" class="fb-taxonomy-author-avatar">';
            $output .= '</a>';
            $output .= '<a href="' . esc_url($author['url']) . '" class="fb-taxonomy-author-name">' . esc_html($author['name']) . '</a>';
            $output .= '</div>';
        }

        if ($read_more_switcher) {
            $output .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-read-more-button">';

            if ($read_more_icon_align !== 'icon-only') {
                $output .= '<span class="fb-taxonomy-read-more-text">' . esc_html($read_more_text) . '</span>';
            }

            if ($read_more_icon_align === 'icon-only' || $read_more_icon_align === 'icon-text') {
                $output .= '<div class="fb-taxonomy-read-more-icon-wrapper">';
                $output .= '<div class="fb-taxonomy-read-more-icon">' . $read_more_icon_html . '</div>';
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
        $output .= '</div>';

        if ($premade_style === 'style-4') {
            $output .= '</div>';
        }

        $output .= '</div>';
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
        'read_more_switcher' => $read_more_switcher,
        'read_more_text' => $read_more_text,
        'read_more_icon_align' => $read_more_icon_align,
        'read_more_icon_frontend' => $read_more_icon_frontend,
        'read_more_icon_image_url' => $read_more_icon_image_url,
        'read_more_icon_image_alt' => $read_more_icon_image_alt,
        'read_more_icon_html' => $read_more_icon_html,
        'taxonomy_type' => $taxonomy_type,
        'show_post_type_label' => $show_post_type_label,
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

            if ($show_count) {
                $formatted_count_html = fb_format_count_with_label_html(
                    $term->count,
                    $taxonomy_type,
                    $show_post_type_label
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

            // Read More button for list + premadeStyle style-2
            if ($premade_style === 'style-2' && $read_more_switcher) {
                $output .= '<a href="' . esc_url($term_link) . '" class="fb-taxonomy-read-more-button">';

                if ($read_more_icon_align !== 'icon-only') {
                    $output .= '<span class="fb-taxonomy-read-more-text">' . esc_html($read_more_text) . '</span>';
                }

                if ($read_more_icon_align === 'icon-text') {
                    $output .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon">'
                        . $read_more_icon_html .
                        '</div></div>';
                }

                if ($read_more_icon_align === 'image' && $read_more_icon_image_url) {
                    $output .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon-image">'
                        . '<img src="' . esc_url($read_more_icon_image_url) . '" alt="' . esc_attr($read_more_icon_image_alt) . '" />'
                        . '</div></div>';
                }

                if ($read_more_icon_align === 'icon-only') {
                    $output .= '<div class="fb-taxonomy-read-more-icon-wrapper"><div class="fb-taxonomy-read-more-icon">'
                        . $read_more_icon_html .
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

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <?php echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>