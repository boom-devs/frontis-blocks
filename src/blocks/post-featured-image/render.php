<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Server-side rendering for the Post Featured Image block
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

$is_link = isset($attributes['isLink']) ? (bool) $attributes['isLink'] : false;
$rel = isset($attributes['rel']) ? esc_attr($attributes['rel']) : '';
$link_target = isset($attributes['linkTarget']) ? esc_attr($attributes['linkTarget']) : '_self';
$use_first_image = isset($attributes['useFirstImage']) ? (bool) $attributes['useFirstImage'] : false;
$image_size = isset($attributes['imageSize']) ? esc_attr($attributes['imageSize']) : 'large';


// Wrapper attributes
$wrapper_id = isset($attributes['wrapperId']) ? $attributes['wrapperId'] : '';
$wrapper_class = isset($attributes['wrapperClass']) ? $attributes['wrapperClass'] : '';

$block_id = isset($attributes['blockId']) ? esc_attr($attributes['blockId']) : '';

$featured_image_desktop_switcher = isset($attributes['featuredImageDesktopSwitcher']) ? $attributes['featuredImageDesktopSwitcher'] : false;
$featured_image_tablet_switcher = isset($attributes['featuredImageTabletSwitcher']) ? $attributes['featuredImageTabletSwitcher'] : false;
$featured_image_mobile_switcher = isset($attributes['featuredImageMobileSwitcher']) ? $attributes['featuredImageMobileSwitcher'] : false;

$placeholder_image_url = FB_PLUGIN_URL . 'assets/images/preset-bg.jpg';

// Get Responsive Class
$responsive_classes = [];
if ($featured_image_desktop_switcher) {
    $responsive_classes[] = 'fb-desktop-responsive';
}
if ($featured_image_tablet_switcher) {
    $responsive_classes[] = 'fb-tablet-responsive';
}
if ($featured_image_mobile_switcher) {
    $responsive_classes[] = 'fb-mobile-responsive';
}

// Get the current post ID
$post_id = get_the_ID();

// Get featured image
$featured_image_url = '';
$featured_image_alt = '';
$featured_image_id = get_post_thumbnail_id($post_id);

if ($featured_image_id) {
    $featured_image_data = wp_get_attachment_image_src($featured_image_id, $image_size);
    if ($featured_image_data) {
        $featured_image_url = $featured_image_data[0];
        $featured_image_alt = get_post_meta($featured_image_id, '_wp_attachment_image_alt', true);
    }
}

// Get first image from post content if no featured image and option is enabled
$first_image_url = '';
if (empty($featured_image_url) && $use_first_image) {
    $post_content = get_the_content();
    preg_match('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post_content, $matches);
    if (!empty($matches[1])) {
        $first_image_url = $matches[1];
    }
}

// Determine which image to display
$display_image_url = '';
$display_image_alt = '';

if (!empty($featured_image_url)) {
    $display_image_url = $featured_image_url;
    $display_image_alt = !empty($featured_image_alt) ? $featured_image_alt : get_the_title($post_id);
} elseif (!empty($first_image_url)) {
    $display_image_url = $first_image_url;
    $display_image_alt = __('First image from content', 'frontis-blocks');
} elseif (!empty($placeholder_image_url)) {
    $display_image_url = $placeholder_image_url;
    $display_image_alt = __('Placeholder Image', 'frontis-blocks');
}


// Build wrapper classes for the featured image block (array merge + sanitize)
$parent_classes_arr = array_merge(
    ['fb-post-featured-image-block', $block_id],
    $responsive_classes
);


// Build image wrapper classes
$image_wrapper_classes_arr = array_filter(array_map(
    function ($c) {
        return sanitize_html_class(fb_norm_str($c)); },
    $parent_classes_arr
));

// Prepare wrapper attributes for the featured image block
$image_wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $image_wrapper_classes_arr),
]);

// Build HTML tag classes for the image wrapper
$image_html_tag_classes = array_filter([
    'fb-post-featured-image',
    $wrapper_class, // Custom CSS classes from the advanced tab
]);

// Prepare HTML tag ID attribute for the image wrapper
$image_html_tag_id_attr = !empty($wrapper_id) ? ' id="' . esc_attr($wrapper_id) . '"' : '';

?>
<div <?php echo $image_wrapper_attributes; ?>>
    <div class="<?php echo esc_attr(implode(' ', $image_html_tag_classes)); ?>" <?php echo $image_html_tag_id_attr; ?>>
        <?php if (!empty($display_image_url)): ?>
            <?php if ($is_link): ?>
                <div class="fb-post-featured-image-inner">
                    <a class="fb-post-featured-image-link" href="<?php echo esc_url(get_permalink()); ?>"
                        rel="<?php echo esc_attr($rel); ?>" target="<?php echo esc_attr($link_target); ?>">
                        <img src="<?php echo esc_url($display_image_url); ?>" alt="<?php echo esc_attr($display_image_alt); ?>"
                            class="fb-post-featured-image-img" />
                    </a>
                </div>
            <?php else: ?>
                <div class="fb-post-featured-image-inner">
                    <img src="<?php echo esc_url($display_image_url); ?>" alt="<?php echo esc_attr($display_image_alt); ?>"
                        class="fb-post-featured-image-img" />
                </div>
            <?php endif; ?>
        <?php else: ?>
            <div class="fb-post-featured-image-placeholder">
                <?php echo esc_html__('No featured image set', 'frontis-blocks'); ?>
            </div>
        <?php endif; ?>
    </div>
</div>