<?php

if (!defined('ABSPATH')) {
    exit;
}

// helpers
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

// tag whitelist
if (!function_exists('fb_tag_whitelist')) {
    function fb_tag_whitelist($tag, $fallback = 'div')
    {
        $allowed = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'figcaption'];
        $tag = strtolower(fb_norm_str($tag, $fallback));
        return in_array($tag, $allowed, true) ? $tag : $fallback;
    }
}

// extract & normalize
$block_id = fb_norm_str($attributes['blockID'] ?? '');

$advanced_image_url = fb_norm_str($attributes['advancedImageUrl'] ?? '');
$advanced_image_alt = fb_norm_str($attributes['advancedImageAlt'] ?? __('Image', 'frontis-blocks'));
$advanced_image_srcset = fb_norm_str($attributes['advancedImageSrcSet'] ?? '');
$advanced_image_default_width = fb_norm_str($attributes['advancedImageDefaultWidth'] ?? '');
$advanced_image_default_height = fb_norm_str($attributes['advancedImageDefaultHeight'] ?? '');

$link_switch = !empty($attributes['linkSwitch']);
$link_target_url = !empty($attributes['linkTargetUrl']);
$link_url = fb_norm_str($attributes['linkUrl'] ?? '');

$image_caption = fb_norm_str($attributes['imageCaption'] ?? '');
$display_caption = !empty($attributes['displayCaption']);

$image_style = fb_norm_str($attributes['imageStyle'] ?? '');
$image_size = fb_norm_str($attributes['imageSize'] ?? '');
$image_hover = fb_norm_str($attributes['imageHover'] ?? '');
$image_fit = fb_norm_str($attributes['imageFit'] ?? 'cover');
$auto_fit_switch = !empty($attributes['autoFitSwitch']);

$title_text = fb_norm_str($attributes['titleText'] ?? 'Fly in the sky');
$title_tag = fb_tag_whitelist($attributes['titleTag'] ?? 'h3', 'h3');
$display_title = !empty($attributes['displayTitle']);
$title_position = fb_norm_str($attributes['titlePosition'] ?? 'center');

$global_wrapper_id = fb_norm_str($attributes['advancedImageGlobalWraperID'] ?? '');
$global_wrapper_class = fb_norm_str($attributes['advancedImageGlobalWraperClass'] ?? '');

$desktop_switcher = !empty($attributes['advancedImageDesktopSwitcher']);
$tablet_switcher = !empty($attributes['advancedImageTabletSwitcher']);
$mobile_switcher = !empty($attributes['advancedImageMobileSwitcher']);
$lazy_load_switcher = !empty($attributes['advancedImageLazyLoadSwitcher']);

$smart_lazy_load_switcher = !empty($attributes['smartLazyLoadSwitcher']);
$smart_lazy_load_image_url = fb_norm_str($attributes['smartLazyLoadImageUrl'] ?? '');

$show_overlay = !empty($attributes['showOverlay']);

// Dynamic image + link attrs
$dynamic_image_enabled = !empty($attributes['dynamicImageEnabled']);
$dynamic_image_source = fb_norm_str($attributes['dynamicImageSource'] ?? 'current_post');
$dynamic_image_post_id = (int) fb_norm_str($attributes['dynamicImagePostId'] ?? 0);
$dynamic_image_post_type = fb_norm_str($attributes['dynamicImagePostType'] ?? '');
$dynamic_image_post_label = fb_norm_str($attributes['dynamicImagePostLabel'] ?? '');
$dynamic_image_field = fb_norm_str($attributes['dynamicImageField'] ?? 'featured_image');
$dynamic_image_size = fb_norm_str($attributes['dynamicImageSize'] ?? 'full');
$dynamic_image_fallback_url = fb_norm_str($attributes['dynamicImageFallbackUrl'] ?? '');
$dynamic_image_fallback_alt = fb_norm_str($attributes['dynamicImageFallbackAlt'] ?? __('Image', 'frontis-blocks'));
$dynamic_image_fallback_id = fb_norm_str($attributes['dynamicImageFallbackId'] ?? '');

$dynamic_enable_link = !empty($attributes['dynamicImageEnableLink']);
$dynamic_link_source = fb_norm_str($attributes['dynamicImageLinkSource'] ?? 'post_permalink');

$loop_post_id = isset($block->context['postId']) ? (int) $block->context['postId'] : 0;
$loop_post_type = isset($block->context['postType']) ? (string) $block->context['postType'] : '';

// Resolve target post/type (for current_post/post_type)
$target_post_id = ($dynamic_image_source === 'post_type' && $dynamic_image_post_id)
    ? (int) $dynamic_image_post_id
    : ($loop_post_id ?: get_the_ID());

$target_post_type = ($dynamic_image_source === 'post_type' && $dynamic_image_post_type)
    ? $dynamic_image_post_type
    : ($loop_post_type ?: get_post_type($target_post_id));

// classes (match save.js)
$responsive_classes = [];
if ($desktop_switcher)
    $responsive_classes[] = 'fb-desktop-responsive';
if ($tablet_switcher)
    $responsive_classes[] = 'fb-tablet-responsive';
if ($mobile_switcher)
    $responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge(['frontis-block', 'fb-advanced-image-main-wrapper', $block_id], $responsive_classes);

// sanitize and keep as array
$wrapper_classes_arr = array_filter(array_map(function ($c) {
    return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

// precompute wrapper attributes string
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapper_classes_arr),
]);

// helpers for dynamic
$__size_map = [
    'full' => 'full',
    'thumbnail' => 'thumbnail',
    'small' => 'thumbnail',
    'medium' => 'medium',
    'large' => 'large',
];
$__wp_size = $__size_map[$dynamic_image_size] ?? 'full';

// Build srcset with width/height tokens similar to editor format
$__build_srcset = static function ($att_id) {
    $meta = wp_get_attachment_metadata($att_id);
    if (!$meta)
        return '';
    $out = [];

    // sizes
    if (!empty($meta['sizes']) && is_array($meta['sizes'])) {
        foreach ($meta['sizes'] as $size) {
            $w = (int) ($size['width'] ?? 0);
            $h = (int) ($size['height'] ?? 0);
            if ($w <= 0)
                continue;

            // Try to get URL for that specific size
            $url = '';
            if (!empty($size['file'])) {
                $url = wp_get_attachment_image_url($att_id, [$w, $h ?: 0]);
            }
            if (!$url) {
                // Fallback to core
                $url = wp_get_attachment_image_url($att_id, 'full');
            }
            if ($url) {
                $out[] = $url . ' ' . $w . 'w' . ($h ? (' ' . $h . 'h') : '');
            }
        }
    }

    // full as last/fallback
    $full = wp_get_attachment_image_src($att_id, 'full');
    if ($full && !empty($full[0]) && !empty($full[1])) {
        $fh = !empty($full[2]) ? (int) $full[2] : 0;
        $out[] = $full[0] . ' ' . (int) $full[1] . 'w' . ($fh ? (' ' . $fh . 'h') : '');
    }

    return implode(', ', array_unique(array_filter($out)));
};

// resolve dynamic image
$dyn_url = '';
$dyn_alt = '';
$dyn_w = '';
$dyn_h = '';
$dyn_srcset = '';
$the_post = null;

if ($dynamic_image_enabled) {

    if ($dynamic_image_source === 'site_logo_url') {
        $logo_id = (int) get_theme_mod('custom_logo');
        if ($logo_id) {
            $img = wp_get_attachment_image_src($logo_id, $__wp_size);
            if ($img) {
                $dyn_url = $img[0] ?? '';
                $dyn_w = !empty($img[1]) ? (string) (int) $img[1] : '';
                $dyn_h = !empty($img[2]) ? (string) (int) $img[2] : '';
                $alt = get_post_meta($logo_id, '_wp_attachment_image_alt', true);
                $dyn_alt = $alt !== '' ? $alt : __('Site Logo', 'frontis-blocks');
                $dyn_srcset = $__build_srcset($logo_id);
            }
        }
    } elseif (in_array($dynamic_image_source, ['current_post', 'post_type'], true) && $target_post_id) {

        $the_post = get_post($target_post_id);

        if ($dynamic_image_field === 'featured_image') {
            $thumb_id = (int) get_post_thumbnail_id($target_post_id);
            if ($thumb_id) {
                $img = wp_get_attachment_image_src($thumb_id, $__wp_size);
                if ($img) {
                    $dyn_url = $img[0] ?? '';
                    $dyn_w = !empty($img[1]) ? (string) (int) $img[1] : '';
                    $dyn_h = !empty($img[2]) ? (string) (int) $img[2] : '';
                    $alt = get_post_meta($thumb_id, '_wp_attachment_image_alt', true);
                    $dyn_alt = $alt !== '' ? $alt : get_the_title($thumb_id);
                    $dyn_srcset = $__build_srcset($thumb_id);
                }
            }
        } elseif ($dynamic_image_field === 'avatar_profile') {
            $author_id = (int) get_post_field('post_author', $target_post_id);
            if ($author_id) {
                $px_map = ['thumbnail' => 48, 'small' => 48, 'medium' => 96, 'large' => 96, 'full' => 96];
                $px = $px_map[$dynamic_image_size] ?? 96;

                $dyn_url = get_avatar_url($author_id, ['size' => $px]);
                $dyn_alt = get_the_author_meta('display_name', $author_id) ?: '';

                $dyn_w = (string) $px;
                $dyn_h = (string) $px;

                $dyn_srcset = '';
            }
        }
    }

    // Fallback if dynamic not found
    if (!$dyn_url && $dynamic_image_fallback_url) {
        $dyn_url = $dynamic_image_fallback_url;
        $dyn_alt = $dynamic_image_fallback_alt;
        // no reliable w/h/srcset for arbitrary fallback
    }
}

// final image (dynamic > manual)
$final_url = ($dynamic_image_enabled && $dyn_url) ? $dyn_url : $advanced_image_url;
$final_alt = ($dynamic_image_enabled && $dyn_alt !== '') ? $dyn_alt : $advanced_image_alt;
$final_width = ($dynamic_image_enabled && $dyn_w) ? $dyn_w : $advanced_image_default_width;
$final_height = ($dynamic_image_enabled && $dyn_h) ? $dyn_h : $advanced_image_default_height;
$final_srcset = ($dynamic_image_enabled && $dyn_srcset) ? $dyn_srcset : $advanced_image_srcset;

if ($dynamic_image_enabled && $dynamic_image_field === 'avatar_profile') {
    $final_srcset = '';
}

// dynamic link resolve (optional)
$dynamic_link_url = '';

if ($dynamic_image_enabled && $dynamic_enable_link) {
    // Ensure $the_post exists for post-based links
    if (!$the_post && $target_post_id) {
        $the_post = get_post($target_post_id);
    }

    switch ($dynamic_link_source) {
        case 'post_permalink':
            $dynamic_link_url = $the_post ? get_permalink($the_post) : '';
            break;

        case 'comments_area':
            $dynamic_link_url = $the_post ? get_comments_link($the_post) : '';
            break;

        case 'featured_image':
            $dynamic_link_url = $the_post ? (get_the_post_thumbnail_url($the_post, 'full') ?: '') : '';
            break;

        case 'avatar_profile_url':
            if ($the_post) {
                $author_id = (int) $the_post->post_author;
                $dynamic_link_url = $author_id ? (get_avatar_url($author_id) ?: '') : '';
            }
            break;

        case 'author_page_url':
            if ($the_post) {
                $author_id = (int) $the_post->post_author;
                $dynamic_link_url = $author_id ? get_author_posts_url($author_id) : '';
            }
            break;

        case 'archive_url':
            // Interpret as post type archive (to mirror your heading example)
            $pt = $the_post ? get_post_type($the_post) : ($target_post_type ?: '');
            $dynamic_link_url = $pt ? (get_post_type_archive_link($pt) ?: '') : '';
            break;

        default:
            $dynamic_link_url = '';
            break;
    }
}

// image html builder (matches save.js semantics)
$img_attributes = [
    'width' => $final_width !== '' ? esc_attr($final_width) : '',
    'height' => $final_height !== '' ? esc_attr($final_height) : '',
    'data-src' => $final_url ? esc_url($final_url) : '',
    'src' => ($smart_lazy_load_switcher && $smart_lazy_load_image_url)
        ? esc_url($smart_lazy_load_image_url)
        : esc_url($final_url),
    'alt' => esc_attr($final_alt),
    'aria-hidden' => 'true',
];

if ($lazy_load_switcher) {
    $img_attributes['loading'] = 'lazy';
}

if ($final_srcset) {
    if ($smart_lazy_load_switcher && $smart_lazy_load_image_url) {
        $img_attributes['data-srcset'] = esc_attr($final_srcset);
    } else {
        $img_attributes['srcset'] = esc_attr($final_srcset);
    }
}

// build <img> tag
$img_html = '<img';
foreach ($img_attributes as $key => $value) {
    if ($value !== '') {
        $img_html .= sprintf(' %s="%s"', $key, $value);
    }
}
$img_html .= ' />';

// wrap with link (priority: dynamic link → manual link)
if ($dynamic_image_enabled && $dynamic_enable_link && $dynamic_link_url) {
    $img_html = sprintf(
        '<a href="%s" aria-label="%s">%s</a>',
        esc_url($dynamic_link_url),
        esc_attr($final_alt),
        $img_html
    );
} elseif ($link_switch && $link_url) {
    $img_html = sprintf(
        '<a href="%s"%s%s aria-label="%s">%s</a>',
        esc_url($link_url),
        $link_target_url ? ' target="_blank"' : '',
        $link_target_url ? ' rel="noopener noreferrer"' : '',
        esc_attr($final_alt),
        $img_html
    );
}

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
    <div class="fb-parent-wrapper fb-advanced-image-wrapper <?php echo esc_attr($global_wrapper_class); ?>" <?php if ($global_wrapper_id): ?> id="<?php echo esc_attr($global_wrapper_id); ?>" <?php endif; ?>
        data-smart-lazy-load-switcher="<?php echo esc_attr($smart_lazy_load_switcher); ?>">
        <div class="fb-advanced-image <?php
        echo esc_attr(trim(
            $image_style . ' ' .
            $image_size . ' ' .
            $image_hover . ' ' .
            ($auto_fit_switch ? $image_fit : '') . ' ' .
            $title_position . ' ' .
            ($show_overlay ? 'overlay-simple' : '')
        ));
        ?>">
            <div class="fb-advanced-image-inner">
                <?php echo $final_url ? $img_html : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </div>

            <?php if ($display_title && $title_text): ?>
                <div class="fb-advanced-image-title">
                    <div class="fb-advanced-image-title-inner">
                        <<?php echo esc_attr($title_tag); ?> class="fb-advanced-title">
                            <?php echo wp_kses_post($title_text); ?>
                        </<?php echo esc_attr($title_tag); ?>>
                    </div>
                </div>
            <?php endif; ?>

            <?php if ($display_caption && $image_caption): ?>
                <div class="fb-advanced-image-caption">
                    <figcaption>
                        <?php echo wp_kses_post($image_caption); ?>
                    </figcaption>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>