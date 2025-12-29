<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Render callback for the post-meta block on front-end.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 */

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

// -----------------------------------------
// Helper: Format comment count
// -----------------------------------------
if (!function_exists('format_comment_count')) {
    function format_comment_count($count)
    {
        if ($count >= 1000000)
            return round($count / 1000000, 1) . 'M';
        if ($count >= 1000)
            return round($count / 1000, 1) . 'k';
        return $count;
    }
}

// -----------------------------------------
// Main block render
// -----------------------------------------
$post_id = get_the_ID();
if (!$post_id) {
    return '';
}

// Block attributes
$block_id = fb_norm_str(isset($attributes['blockId']) ? $attributes['blockId'] : '');
$meta_icon_front_end = fb_norm_str(isset($attributes['metaIconFrontEnd']) ? $attributes['metaIconFrontEnd'] : '');
$post_metaterms = $attributes['postMetaterms'] ?? [];
$single_item_color = $attributes['singleItemColorStyle'] ?? '';
$block_style = $attributes['blockStyle'] ?? '';
$alignment = $attributes['alignment'] ?? '';

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => "fb-post-meta-main-wrapper {$block_id} {$block_style} align-{$alignment}",
]);

// Post data
$post_date = get_the_date();
$post_author_id = get_post_field('post_author', $post_id);
$author_name = get_the_author_meta('display_name', $post_author_id);
$author_avatar = get_avatar_url($post_author_id, ['size' => 48]);
$author_url = get_author_posts_url($post_author_id);

// Categories
$categories = get_the_category($post_id);
$category_list = '';
if (!empty($categories)) {
    $links = [];
    foreach ($categories as $cat) {
        $links[] = '<a href="' . esc_url(get_category_link($cat->term_id)) . '" class="fb-post-category-name">' . esc_html($cat->name) . '</a>';
    }
    $category_list = implode(', ', $links);
}

// Comments
$post_comments = get_comments_number($post_id);

?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <div class="fb-post-meta-list">
        <?php foreach ($post_metaterms as $item):
            $value = '';

            switch ($item['metaType']) {
                case 'author':
                    $value = '<a href="' . esc_url($author_url) . '" class="fb-post-author-name">' . esc_html($author_name) . '</a>';
                    break;

                case 'authorImage':
                    $value = '<img src="' . esc_url($author_avatar) . '" alt="' . esc_attr($author_name) . '" class="fb-post-author-avatar" />';
                    break;

                case 'date':
                    $value = esc_html(get_the_date($item['dateFormat'] ?? 'F j, Y', $post_id));
                    break;

                case 'category':
                    $value = $category_list;
                    break;

                case 'comments':
                    $value = format_comment_count($post_comments);
                    break;

                case 'custom':
                    $value = !empty($item['metaLabel']) ? esc_html($item['metaLabel']) : '';
                    break;
            }

            if ($value): ?>
                <div class="fb-post-meta-item single-item-<?php echo esc_attr($item['id']); ?>"
                    style="color:<?php echo esc_attr($single_item_color); ?>;">
                    <?php
                    // Add SVG icon if set
                    if (!empty($item['metaIconFrontEnd'])) {
                        echo '<span class="fb-post-meta-icon">' . $item['metaIconFrontEnd'] . '</span>';
                    }
                    echo $value;
                    ?>
                </div>
            <?php endif;
        endforeach; ?>
    </div>
</div>