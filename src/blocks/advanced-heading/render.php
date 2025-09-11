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
$separator_color               = fb_norm_str(isset($attributes['separatorColor']) ? $attributes['separatorColor'] : '#399CFF');
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
			<div class="fb-advanced-title-separator">
                <?php if ( $separator === 'zigzag' ) : ?>
                    <div class='fb-advanced-title-separator-zigzag'>
                        <svg 
                            class='fb-advanced-title-separator-zigzag-svg' 
                            width="322" 
                            height="7" 
                            viewBox="0 0 322 7" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            style="stroke: <?php echo esc_attr( $separator_color ); ?>;"
                        >
                            <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094" 
                            strokeWidth="2" stroke-miterlimit="10" />
                        </svg>
                    </div>
                <?php endif; ?>
            </div>
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
			<div class="fb-advanced-title-separator">
                <?php if ( $separator === 'zigzag' ) : ?>
                    <div class='fb-advanced-title-separator-zigzag'>
                        <svg 
                            class='fb-advanced-title-separator-zigzag-svg' 
                            width="322" 
                            height="7" 
                            viewBox="0 0 322 7" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            style="stroke: <?php echo esc_attr( $separator_color ); ?>;"
                        >
                            <path d="M0.349609 5.71094L5.34961 0.710938L10.3496 5.71094L15.3496 0.710938L20.3496 5.71094L25.3496 0.710938L30.3496 5.71094L35.3496 0.710938L40.3496 5.71094L45.3496 0.710938L50.3496 5.71094L55.3496 0.710938L60.3496 5.71094L65.3496 0.710938L70.3496 5.71094L75.3496 0.710938L80.3496 5.71094L85.3496 0.710938L90.3496 5.71094L95.3496 0.710938L100.35 5.71094L105.35 0.710938L110.35 5.71094L115.35 0.710938L120.35 5.71094L125.35 0.710938L130.35 5.71094L135.35 0.710938L140.35 5.71094L145.35 0.710938L150.35 5.71094L155.35 0.710938L160.35 5.71094L165.35 0.710938L170.35 5.71094L175.35 0.710938L180.35 5.71094L185.35 0.710938L190.35 5.71094L195.35 0.710938L200.35 5.71094L205.35 0.710938L210.35 5.71094L215.35 0.710938L220.35 5.71094L225.35 0.710938L230.35 5.71094L235.35 0.710938L240.35 5.71094L245.35 0.710938L250.35 5.71094L255.35 0.710938L260.35 5.71094L265.35 0.710938L270.35 5.71094L275.35 0.710938L280.35 5.71094L285.35 0.710938L290.35 5.71094L295.35 0.710938L300.35 5.71094L305.35 0.710938L310.35 5.71094L315.35 0.710938L320.35 5.71094" 
                            strokeWidth="2" stroke-miterlimit="10" />
                        </svg>
                    </div>
                <?php endif; ?>
            </div>
		<?php endif; ?>

	</div>
</div>
