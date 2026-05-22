<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use FrontisBlocks\Utils\Helper;

/* -----------------------------------------------
   Helpers (guard against duplicate declarations)
----------------------------------------------- */
if ( ! function_exists( 'fb_ia_norm_str' ) ) {
	function fb_ia_norm_str( $val, $default = '' ) {
		if ( is_array( $val ) ) {
			$val = implode( ' ', array_filter( array_map( 'strval', $val ) ) );
		}
		return $val === null ? $default : (string) $val;
	}
}

if ( ! function_exists( 'fb_ia_bool' ) ) {
	function fb_ia_bool( $val ) {
		return ! empty( $val );
	}
}

/* -----------------------------------------------
   Extract attributes
----------------------------------------------- */
$blockID              = fb_ia_norm_str( $attributes['blockID']              ?? '' );
$presetStyle          = fb_ia_norm_str( $attributes['accordionPresetStyle'] ?? 'style-1' );
$trigger              = fb_ia_norm_str( $attributes['accordionTrigger']     ?? 'hover' );
$items                = isset( $attributes['accordionItems'] ) && is_array( $attributes['accordionItems'] )
                            ? $attributes['accordionItems']
                            : [];
$activeIndex          = isset( $attributes['accordionActiveIndex'] ) ? (int) $attributes['accordionActiveIndex'] : 0;

$showTitle            = fb_ia_bool( $attributes['accordionShowTitle']    ?? true );
$showSubtitle         = fb_ia_bool( $attributes['accordionShowSubtitle'] ?? true );
$showNumber           = fb_ia_bool( $attributes['accordionShowNumber']   ?? true );
$showButton           = fb_ia_bool( $attributes['accordionShowButton']   ?? false );
$showIcon             = fb_ia_bool( $attributes['accordionShowIcon']     ?? false );
$showOverlay          = fb_ia_bool( $attributes['accordionShowOverlay']  ?? true );

$transitionSpeed      = isset( $attributes['accordionTransitionSpeed'] ) ? (int) $attributes['accordionTransitionSpeed'] : 500;

$wrapperID            = fb_ia_norm_str( $attributes['accordionWraperID']    ?? '' );
$wrapperClass         = fb_ia_norm_str( $attributes['accordionWraperClass'] ?? '' );
$blockStyle           = fb_ia_norm_str( $attributes['blockStyle']           ?? '' );

$desktopHide          = fb_ia_bool( $attributes['accordionDesktopSwitcher'] ?? false );
$tabletHide           = fb_ia_bool( $attributes['accordionTabletSwitcher']  ?? false );
$mobileHide           = fb_ia_bool( $attributes['accordionMobileSwitcher']  ?? false );

/* -----------------------------------------------
   Wrapper classes (must mirror save.js)
----------------------------------------------- */
$responsiveClasses = [];
if ( $desktopHide ) $responsiveClasses[] = 'fb-desktop-responsive';
if ( $tabletHide  ) $responsiveClasses[] = 'fb-tablet-responsive';
if ( $mobileHide  ) $responsiveClasses[] = 'fb-mobile-responsive';

$baseClasses = array_merge( [ 'fb-image-accordion-main-wrapper', $blockID ], $responsiveClasses );

$wrapperAttributes = get_block_wrapper_attributes( [
	'class' => implode( ' ', array_map( 'sanitize_html_class', $baseClasses ) ),
] );

?>
<div <?php echo $wrapperAttributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>

	<?php if ( $blockStyle ) : ?>
		<style><?php echo esc_html( $blockStyle ); ?></style>
	<?php endif; ?>

	<div
		class="fb-image-accordion-wrapper <?php echo esc_attr( $presetStyle . ' ' . $wrapperClass ); ?>"
		<?php echo $wrapperID ? 'id="' . esc_attr( $wrapperID ) . '"' : ''; ?>
		data-trigger="<?php echo esc_attr( $trigger ); ?>"
		data-active="<?php echo esc_attr( $activeIndex ); ?>"
		data-speed="<?php echo esc_attr( $transitionSpeed ); ?>"
	>

		<?php foreach ( $items as $index => $item ) :
			$isActive   = ( $index === $activeIndex );
			$imageUrl   = fb_ia_norm_str( $item['imageUrl']    ?? '' );
			$imageAlt   = fb_ia_norm_str( $item['imageAlt']    ?? '' );
			$iconSlug   = fb_ia_norm_str( $item['icon']        ?? '' );
			$frontendIcon = fb_ia_norm_str( $item['frontendIcon'] ?? '' );
			$title      = fb_ia_norm_str( $item['title']       ?? '' );
			$subtitle   = fb_ia_norm_str( $item['subtitle']    ?? '' );
			$number     = fb_ia_norm_str( $item['number']      ?? '' );
			$btnText    = fb_ia_norm_str( $item['buttonText']  ?? '' );
			$btnUrl     = fb_ia_norm_str( $item['buttonUrl']   ?? '#' );
			$btnTarget  = fb_ia_bool( $item['buttonTarget']    ?? false );
			$iconHtml   = $iconSlug ? Helper::render_icon( $iconSlug, [ 'fallback' => $frontendIcon ] ) : '';

			$itemClasses = 'fb-accordion-item' . ( $isActive ? ' fb-accordion-active' : '' );
			$bgStyle     = $imageUrl ? 'background-image: url(' . esc_url( $imageUrl ) . ');' : '';
		?>
			<div
				class="<?php echo esc_attr( $itemClasses ); ?>"
				style="<?php echo esc_attr( $bgStyle ); ?>"
				data-index="<?php echo esc_attr( $index ); ?>"
			>
				<?php if ( $showOverlay ) : ?>
					<div class="fb-accordion-overlay"></div>
				<?php endif; ?>

				<?php if ( $showIcon && $iconHtml ) : ?>
					<div class="fb-accordion-icon-wrapper">
						<?php echo $iconHtml; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
					</div>
				<?php endif; ?>

				<div class="fb-accordion-content">
					<?php if ( $showNumber && $number ) : ?>
						<span class="fb-accordion-number"><?php echo esc_html( $number ); ?></span>
					<?php endif; ?>

					<?php if ( $showTitle && $title ) : ?>
						<h3 class="fb-accordion-title"><?php echo esc_html( $title ); ?></h3>
					<?php endif; ?>

					<?php if ( $showSubtitle && $subtitle ) : ?>
						<p class="fb-accordion-subtitle"><?php echo esc_html( $subtitle ); ?></p>
					<?php endif; ?>

					<?php if ( $showButton && $btnText ) : ?>
						<div class="fb-accordion-btn-wrapper">
							<a
								class="fb-accordion-btn"
								href="<?php echo esc_url( $btnUrl ?: '#' ); ?>"
								<?php echo $btnTarget ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>
							>
								<?php echo esc_html( $btnText ); ?>
							</a>
						</div>
					<?php endif; ?>
				</div>

			</div>
		<?php endforeach; ?>

	</div><!-- .fb-image-accordion-wrapper -->

</div><!-- .fb-image-accordion-main-wrapper -->

<?php /* ---- Frontend JS (inline, no extra file needed) ---- */ ?>
<script>
(function() {
    var initAccordion = function(wrapper) {
        var trigger = wrapper.dataset.trigger || 'hover';
        var speed   = parseInt(wrapper.dataset.speed) || 500;
        var items   = wrapper.querySelectorAll('.fb-accordion-item');
        if (!items.length) return;

        function activate(index) {
            items.forEach(function(el, i) {
                if (i === index) {
                    el.classList.add('fb-accordion-active');
                } else {
                    el.classList.remove('fb-accordion-active');
                }
            });
        }

        items.forEach(function(item, index) {
            if (trigger === 'hover') {
                item.addEventListener('mouseenter', function() {
                    activate(index);
                });
            } else {
                item.addEventListener('click', function() {
                    activate(index);
                });
            }
        });
    };

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.fb-image-accordion-wrapper').forEach(function(wrapper) {
            initAccordion(wrapper);
        });
    });
})();
</script>
