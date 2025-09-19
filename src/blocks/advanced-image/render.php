<?php
// ---------- helpers ----------
if ( ! function_exists('fb_norm_str') ) {
    function fb_norm_str($val, $default = '') {
        if (is_array($val)) {
            $val = implode(' ', array_filter(array_map('strval', $val)));
        }
        if ($val === null) return $default;
        return (string) $val;
    }
}

if ( ! function_exists('fb_tag_whitelist') ) {
    function fb_tag_whitelist($tag, $fallback = 'div') {
        $allowed = ['h1','h2','h3','h4','h5','h6','p','div','span','figcaption'];
        $tag = strtolower(fb_norm_str($tag, $fallback));
        return in_array($tag, $allowed, true) ? $tag : $fallback;
    }
}

// ---------- extract & normalize ----------
$block_id                         = fb_norm_str( isset($attributes['blockID']) ? $attributes['blockID'] : '' );

$advanced_image_url               = fb_norm_str( isset($attributes['advancedImageUrl']) ? $attributes['advancedImageUrl'] : '' );
$advanced_image_alt               = fb_norm_str( isset($attributes['advancedImageAlt']) ? $attributes['advancedImageAlt'] : __( 'Image', 'frontis-blocks' ) );
$advanced_image_srcset            = fb_norm_str( isset($attributes['advancedImageSrcSet']) ? $attributes['advancedImageSrcSet'] : '' );
$advanced_image_default_width     = fb_norm_str( isset($attributes['advancedImageDefaultWidth']) ? $attributes['advancedImageDefaultWidth'] : '' );
$advanced_image_default_height    = fb_norm_str( isset($attributes['advancedImageDefaultHeight']) ? $attributes['advancedImageDefaultHeight'] : '' );

$link_switch                      = !empty( $attributes['linkSwitch'] );
$link_target_url                  = !empty( $attributes['linkTargetUrl'] );
$link_url                         = fb_norm_str( isset($attributes['linkUrl']) ? $attributes['linkUrl'] : '' );

$image_caption                    = fb_norm_str( isset($attributes['imageCaption']) ? $attributes['imageCaption'] : '' );
$display_caption                  = !empty( $attributes['displayCaption'] );

$image_style                      = fb_norm_str( isset($attributes['imageStyle']) ? $attributes['imageStyle'] : '' );
$image_size                       = fb_norm_str( isset($attributes['imageSize']) ? $attributes['imageSize'] : '' );
$image_hover                      = fb_norm_str( isset($attributes['imageHover']) ? $attributes['imageHover'] : '' );
$image_fit                        = fb_norm_str( isset($attributes['imageFit']) ? $attributes['imageFit'] : '' );
$auto_fit_switch                  = !empty( $attributes['autoFitSwitch'] );

$title_text                       = fb_norm_str( isset($attributes['titleText']) ? $attributes['titleText'] : 'Fly in the sky' ); 
$title_tag                        = fb_tag_whitelist( isset($attributes['titleTag']) ? $attributes['titleTag'] : 'h3', 'h3' );
$display_title                    = !empty( $attributes['displayTitle'] );
$title_position                   = fb_norm_str( isset($attributes['titlePosition']) ? $attributes['titlePosition'] : 'center' );

$global_wrapper_id                = fb_norm_str( isset($attributes['advancedImageGlobalWraperID']) ? $attributes['advancedImageGlobalWraperID'] : '' );
$global_wrapper_class             = fb_norm_str( isset($attributes['advancedImageGlobalWraperClass']) ? $attributes['advancedImageGlobalWraperClass'] : '' );

$desktop_switcher                 = !empty( $attributes['advancedImageDesktopSwitcher'] );
$tablet_switcher                  = !empty( $attributes['advancedImageTabletSwitcher'] );
$mobile_switcher                  = !empty( $attributes['advancedImageMobileSwitcher'] );
$lazy_load_switcher               = !empty( $attributes['advancedImageLazyLoadSwitcher'] );

$smart_lazy_load_switcher         = !empty( $attributes['smartLazyLoadSwitcher'] );
$smart_lazy_load_image_url        = fb_norm_str( isset($attributes['smartLazyLoadImageUrl']) ? $attributes['smartLazyLoadImageUrl'] : '' );

$show_overlay                     = !empty( $attributes['showOverlay'] );


$dynamic_image_enabled             = !empty( $attributes['dynamicImageEnabled'] );
$dynamic_image_source              = fb_norm_str( isset($attributes['dynamicImageSource']) ? $attributes['dynamicImageSource'] : 'current_post' );
$dynamic_image_post_id             = fb_norm_str( isset($attributes['dynamicImagePostId']) ? $attributes['dynamicImagePostId'] : 0 );
$dynamic_image_post_type           = fb_norm_str( isset($attributes['dynamicImagePostType']) ? $attributes['dynamicImagePostType'] : '' );
$dynamic_image_post_label          = fb_norm_str( isset($attributes['dynamicImagePostLabel']) ? $attributes['dynamicImagePostLabel'] : '' );
$dynamic_image_field               = fb_norm_str( isset($attributes['dynamicImageField']) ? $attributes['dynamicImageField'] : 'featured_image' );
$dynamic_image_size                = fb_norm_str( isset($attributes['dynamicImageSize']) ? $attributes['dynamicImageSize'] : 'full' );
$dynamic_image_fallback_url        = fb_norm_str( isset($attributes['dynamicImageFallbackUrl']) ? $attributes['dynamicImageFallbackUrl'] : '' );
$dynamic_image_fallback_alt        = fb_norm_str( isset($attributes['dynamicImageFallbackAlt']) ? $attributes['dynamicImageFallbackAlt'] : __( 'Image', 'frontis-blocks' ) );
$dynamic_image_fallback_id         = fb_norm_str( isset($attributes['dynamicImageFallbackId']) ? $attributes['dynamicImageFallbackId'] : '' );
$dynamic_enable_link               = !empty( $attributes['dynamicEnableLink'] );
$dynamic_link_source               = fb_norm_str( isset($attributes['dynamicLinkSource']) ? $attributes['dynamicLinkSource'] : 'post_permalink' );

// ---------- classes (match save.js) ----------
$responsive_classes = [];
if ($desktop_switcher) $responsive_classes[] = 'fb-desktop-responsive';
if ($tablet_switcher)  $responsive_classes[] = 'fb-tablet-responsive';
if ($mobile_switcher)  $responsive_classes[] = 'fb-mobile-responsive';

$base_classes = array_merge(['frontis-block', 'fb-advanced-image-main-wrapper', $block_id], $responsive_classes);

// sanitize and keep as array
$wrapper_classes_arr = array_filter(array_map(function($c){
    return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

// precompute wrapper attributes string
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapper_classes_arr),
]);

// ---------- image html builder ----------
$img_attributes = [
    'width'        => $advanced_image_default_width !== '' ? esc_attr($advanced_image_default_width) : '',
    'height'       => $advanced_image_default_height !== '' ? esc_attr($advanced_image_default_height) : '',
    'data-src'     => $advanced_image_url ? esc_url($advanced_image_url) : '',
    'src'          => ($smart_lazy_load_switcher && $smart_lazy_load_image_url) ? esc_url($smart_lazy_load_image_url) : esc_url($advanced_image_url),
    'alt'          => esc_attr($advanced_image_alt),
    'aria-hidden'  => 'true',
];

if ( $lazy_load_switcher ) {
    $img_attributes['loading'] = 'lazy';
}

if ( $advanced_image_srcset ) {
    if ( $smart_lazy_load_switcher && $smart_lazy_load_image_url ) {
        $img_attributes['data-srcset'] = esc_attr( $advanced_image_srcset ); // save.js: data-srcset for smart lazy
    } else {
        $img_attributes['srcset'] = esc_attr( $advanced_image_srcset );
    }
}

// build <img> tag
$img_html = '<img';
foreach ( $img_attributes as $key => $value ) {
    if ( $value !== '' ) {
        $img_html .= sprintf( ' %s="%s"', $key, $value );
    }
}
$img_html .= ' />';

// wrap with link if enabled (exactly like save.js)
if ( $link_switch && $link_url ) {
    $img_html = sprintf(
        '<a href="%s"%s%s aria-label="%s">%s</a>',
        esc_url( $link_url ),
        $link_target_url ? ' target="_blank"' : '',
        $link_target_url ? ' rel="noopener noreferrer"' : '',
        esc_attr( $advanced_image_alt ),
        $img_html
    );
}
?>
<div <?php echo $wrapper_attributes; ?>>
    <div
        class="fb-parent-wrapper fb-advanced-image-wrapper <?php echo esc_attr( $global_wrapper_class ); ?>"
        <?php if ( $global_wrapper_id ) : ?>
            id="<?php echo esc_attr( $global_wrapper_id ); ?>"
        <?php endif; ?>
        data-smart-lazy-load-switcher="<?php echo esc_attr( $smart_lazy_load_switcher ); ?>"
    >
        <div class="fb-advanced-image <?php
            // save.js: `${imageStyle} ${imageSize} ${imageHover} ${autoFit?imageFit:''} ${titlePosition} ${showOverlay ? 'overlay-simple' : ''}`
            echo esc_attr( trim(
                $image_style . ' ' .
                $image_size . ' ' .
                $image_hover . ' ' .
                ( $auto_fit_switch ? $image_fit : '' ) . ' ' .
                $title_position . ' ' .
                ( $show_overlay ? 'overlay-simple' : '' )
            ) );
        ?>">
            <div class="fb-advanced-image-inner">
                <?php echo $advanced_image_url ? $img_html : ''; ?>
            </div>

            <?php if ( $display_title && $title_text ) : ?>
                <div class="fb-advanced-image-title">
                    <div class="fb-advanced-image-title-inner">
                        <<?php echo esc_attr( $title_tag ); ?> class="fb-advanced-title">
                            <?php echo wp_kses_post( $title_text ); ?>
                        </<?php echo esc_attr( $title_tag ); ?>>
                    </div>
                </div>
            <?php endif; ?>

            <?php if ( $display_caption && $image_caption ) : ?>
                <div class="fb-advanced-image-caption">
                    <figcaption>
                        <?php echo wp_kses_post( $image_caption ); ?>
                    </figcaption>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>