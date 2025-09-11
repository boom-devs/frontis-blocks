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
        $allowed = ['h1','h2','h3','h4','h5','h6','p','div','span'];
        $tag = strtolower(fb_norm_str($tag, $fallback));
        return in_array($tag, $allowed, true) ? $tag : $fallback;
    }
}

// ---------- extract & normalize ----------
$block_id                      = fb_norm_str(isset($attributes['blockId']) ? $attributes['blockId'] : '');
$heading_text                  = fb_norm_str(isset($attributes['headingText']) ? $attributes['headingText'] : 'Advanced Heading');
$heading_tag                   = fb_tag_whitelist(isset($attributes['headingTag']) ? $attributes['headingTag'] : 'h2', 'h2');
$heading_alignment             = fb_norm_str(isset($attributes['headingAlignment']) ? $attributes['headingAlignment'] : '');
$sub_heading_switcher          = !empty($attributes['subHeadingSwitcher']);
$sub_heading_text              = fb_norm_str(isset($attributes['subHeadingText']) ? $attributes['subHeadingText'] : 'Advanced Sub Heading');
$sub_heading_tag               = fb_tag_whitelist(isset($attributes['subHeadingTag']) ? $attributes['subHeadingTag'] : 'p', 'p');
$sub_heading_position          = fb_norm_str(isset($attributes['subHeadingPosition']) ? $attributes['subHeadingPosition'] : 'bottom');
$active_line_switcher          = !empty($attributes['activeLineSwitcher']);
$heading_icon_switcher         = !empty($attributes['headingIconSwitcher']);
$heading_icon_align            = fb_norm_str(isset($attributes['headingIconAlign']) ? $attributes['headingIconAlign'] : 'icon');
$heading_icon_frontend         = fb_norm_str(isset($attributes['headingIconFrontend']) ? $attributes['headingIconFrontend'] : '');
$show_separator_switcher       = !empty($attributes['showSeparatorSwitcher']);
$separator                     = fb_norm_str(isset($attributes['separator']) ? $attributes['separator'] : '');
$separator_position            = fb_norm_str(isset($attributes['separatorPosition']) ? $attributes['separatorPosition'] : 'bottom');
$separator_color               = fb_norm_str(isset($attributes['separatorColor']) ? $attributes['separatorColor'] : '#000000');
$heading_global_wraper_id      = fb_norm_str(isset($attributes['headingGlobalWraperID']) ? $attributes['headingGlobalWraperID'] : '');
$heading_global_wraper_class   = fb_norm_str(isset($attributes['headingGlobalWraperClass']) ? $attributes['headingGlobalWraperClass'] : '');

$advanced_desktop_switcher     = !empty($attributes['advancedHeadingDesktopSwitcher']);
$advanced_tablet_switcher      = !empty($attributes['advancedHeadingTabletSwitcher']);
$advanced_mobile_switcher      = !empty($attributes['advancedHeadingMobileSwitcher']);
$heading_before_after_switcher = !empty($attributes['headingBeforeAfterSwitcher']);

// ---------- classes (match save.js) ----------
$responsive_classes = [];
if ($advanced_desktop_switcher)  $responsive_classes[] = 'fb-desktop-responsive';
if ($advanced_tablet_switcher)   $responsive_classes[] = 'fb-tablet-responsive';
if ($advanced_mobile_switcher)   $responsive_classes[] = 'fb-mobile-responsive';
if ($heading_before_after_switcher) $responsive_classes[] = 'fb-advanced-heading-before-after';

$base_classes = array_merge(['frontis-block', 'fb-advanced-heading-main-wrapper', $block_id], $responsive_classes);

// sanitize and keep as array
$wrapper_classes_arr = array_filter(array_map(function($c){
    return sanitize_html_class(fb_norm_str($c));
}, $base_classes));

// precompute wrapper attributes string
$wrapper_attributes = get_block_wrapper_attributes([
    'class' => implode(' ', $wrapper_classes_arr),
]);

?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="fb-parent-wrapper fb-advanced-wrapper <?php echo esc_attr( $heading_global_wraper_class ); ?>"
	     <?php if ( $heading_global_wraper_id ) : ?>
		     id="<?php echo esc_attr( $heading_global_wraper_id ); ?>"
	     <?php endif; ?>
	     <?php if ( $heading_alignment ) : ?>
		     style="text-align:<?php echo esc_attr( $heading_alignment ); ?>;"
	     <?php endif; ?>
	>

		<?php if ( $heading_icon_switcher && $heading_icon_align === 'icon' ) : ?>
			<div class="fb-advanced-icon-wrapper" style="justify-content:<?php echo esc_attr( $heading_alignment ?: 'initial' ); ?>;">
				<div class="fb-advanced-icon"><?php echo $heading_icon_frontend; ?></div>
			</div>
		<?php endif; ?>

		<?php if ( $show_separator_switcher && $separator_position === 'top' ) : ?>
			<div class="fb-advanced-title-separator"></div>
		<?php endif; ?>

		<?php if ( $sub_heading_switcher && $sub_heading_position === 'top' ) : ?>
			<div class="fb-advanced-sub-heading-wrapper">
				<<?php echo esc_attr( $sub_heading_tag ); ?> class="fb-advanced-sub-heading">
					<?php echo wp_kses_post( $sub_heading_text ); ?>
				</<?php echo esc_attr( $sub_heading_tag ); ?>>
			</div>
		<?php endif; ?>

		<div class="fb-advanced-heading-wrapper">
			<<?php echo esc_attr( $heading_tag ); ?> class="fb-advanced-heading<?php echo $active_line_switcher ? ' active-line' : ''; ?>">
				<?php echo wp_kses_post( $heading_text ); ?>
			</<?php echo esc_attr( $heading_tag ); ?>>
		</div>

		<?php if ( $sub_heading_switcher && $sub_heading_position === 'bottom' ) : ?>
			<div class="fb-advanced-sub-heading-wrapper">
				<<?php echo esc_attr( $sub_heading_tag ); ?> class="fb-advanced-sub-heading">
					<?php echo wp_kses_post( $sub_heading_text ); ?>
				</<?php echo esc_attr( $sub_heading_tag ); ?>>
			</div>
		<?php endif; ?>

		<?php if ( $show_separator_switcher && $separator_position === 'bottom' ) : ?>
			<div class="fb-advanced-title-separator"></div>
		<?php endif; ?>

	</div>
</div>
