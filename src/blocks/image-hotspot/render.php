<?php
/**
 * render.php
 * Server-side render for frontis-blocks/image-hotspot.
 *
 * Available variables (injected by WordPress):
 *   $attributes  – block attribute values
 *   $content     – inner blocks HTML (unused)
 *   $block       – WP_Block instance
 */

defined( 'ABSPATH' ) || exit;

// ─── Helpers

/**
 * Build a drop-shadow() CSS filter value from a shadow attribute object.
 */
if ( ! function_exists( 'fb_hotspot_drop_shadow' ) ) {
	function fb_hotspot_drop_shadow( $shadow ) {
		if ( empty( $shadow['enabled'] ) ) {
			return 'none';
		}
		$h     = isset( $shadow['horizontal'] ) ? (float) $shadow['horizontal'] : 0;
		$v     = isset( $shadow['vertical'] )   ? (float) $shadow['vertical']   : 0;
		$blur  = isset( $shadow['blur'] )       ? (float) $shadow['blur']       : 0;
		$color = ! empty( $shadow['color'] )    ? $shadow['color']              : 'rgba(0,0,0,0.25)';
		return sprintf( 'drop-shadow(%spx %spx %spx %s)', $h, $v, $blur, $color );
	}
}

/**
 * Build a box-shadow CSS value from a shadow attribute object.
 */
if ( ! function_exists( 'fb_hotspot_box_shadow' ) ) {
	function fb_hotspot_box_shadow( $shadow ) {
		if ( empty( $shadow['enabled'] ) ) {
			return 'none';
		}
		$h      = isset( $shadow['horizontal'] ) ? (float) $shadow['horizontal'] : 0;
		$v      = isset( $shadow['vertical'] )   ? (float) $shadow['vertical']   : 0;
		$blur   = isset( $shadow['blur'] )       ? (float) $shadow['blur']       : 0;
		$spread = isset( $shadow['spread'] )     ? (float) $shadow['spread']     : 0;
		$color  = ! empty( $shadow['color'] )    ? $shadow['color']              : 'rgba(0,0,0,0.25)';
		return sprintf( '%spx %spx %spx %spx %s', $h, $v, $blur, $spread, $color );
	}
}

// ─── Attributes

$block_id      = ! empty( $attributes['blockId'] ) ? $attributes['blockId'] : uniqid( 'fb-hotspot-' );
$image         = ! empty( $attributes['image'] )   ? $attributes['image']   : [];
$image_url     = ! empty( $image['url'] )          ? $image['url']          : '';
$image_alt     = ! empty( $attributes['imageAlt'] ) ? $attributes['imageAlt']
	: ( ! empty( $image['alt'] ) ? $image['alt'] : '' );
$marker_preset = ! empty( $attributes['markerPreset'] ) ? $attributes['markerPreset'] : 'preset-1';
$hotspots      = ! empty( $attributes['hotspots'] ) && is_array( $attributes['hotspots'] )
	? $attributes['hotspots']
	: [];

// Layout defaults
$preset_defaults = [
	'preset-1' => [ 'tooltipPosition' => 'top-left', 'markerDesign' => 'tag'          ],
	'preset-2' => [ 'tooltipPosition' => 'left',     'markerDesign' => 'target'       ],
	'preset-3' => [ 'tooltipPosition' => 'top',      'markerDesign' => 'pin'          ],
	'preset-4' => [ 'tooltipPosition' => 'right',    'markerDesign' => 'square-notch' ],
	'custom'   => [ 'tooltipPosition' => 'top',      'markerDesign' => 'round'        ],
];
$defaults = $preset_defaults[ $marker_preset ] ?? $preset_defaults['custom'];

// ─── Dynamic CSS

$wrap               = "#block-{$block_id}";
$marker_shadow      = ! empty( $attributes['markerShadow'] )      ? $attributes['markerShadow']      : [];
$marker_shadow_hover= ! empty( $attributes['markerShadowHover'] ) ? $attributes['markerShadowHover'] : [];
$marker_bg          = ! empty( $attributes['markerBackground'] )   ? $attributes['markerBackground']  : '';
$marker_bg_hover    = ! empty( $attributes['markerBackgroundHover'] ) ? $attributes['markerBackgroundHover'] : '';

$drop_shadow        = fb_hotspot_drop_shadow( $marker_shadow );
$drop_shadow_hover  = fb_hotspot_drop_shadow( $marker_shadow_hover );

// Size
$marker_size    = isset( $attributes['markerSize'] ) ? (int) $attributes['markerSize'] : 34;
$tooltip_width  = isset( $attributes['tooltipWidth'] ) ? (int) $attributes['tooltipWidth'] : 220;

// Tooltip padding
$tp_top    = isset( $attributes['tooltipPaddingTop'] )    ? (int) $attributes['tooltipPaddingTop']    : 12;
$tp_right  = isset( $attributes['tooltipPaddingRight'] )  ? (int) $attributes['tooltipPaddingRight']  : 14;
$tp_bottom = isset( $attributes['tooltipPaddingBottom'] ) ? (int) $attributes['tooltipPaddingBottom'] : 12;
$tp_left   = isset( $attributes['tooltipPaddingLeft'] )   ? (int) $attributes['tooltipPaddingLeft']   : 14;
$tp_unit   = ! empty( $attributes['tooltipPaddingUnit'] ) ? $attributes['tooltipPaddingUnit']         : 'px';

$tooltip_bg           = ! empty( $attributes['tooltipBackground'] )      ? $attributes['tooltipBackground']      : '#ffffff';
$tooltip_title_color  = ! empty( $attributes['tooltipTitleColor'] )      ? $attributes['tooltipTitleColor']      : '#111827';
$tooltip_desc_color   = ! empty( $attributes['tooltipDescriptionColor'] ) ? $attributes['tooltipDescriptionColor'] : '#6b7280';
$tooltip_radius       = isset( $attributes['tooltipBorderRadius'] )      ? (int) $attributes['tooltipBorderRadius'] : 8;
$tooltip_shadow       = ! empty( $attributes['tooltipShadow'] )          ? $attributes['tooltipShadow']          : [];
$tooltip_shadow_css   = fb_hotspot_box_shadow( $tooltip_shadow );
$marker_color         = ! empty( $attributes['markerColor'] )            ? $attributes['markerColor']            : '#ffffff';

$title_font_size   = isset( $attributes['titleFontSize'] )   ? (int) $attributes['titleFontSize']   : 14;
$title_font_weight = ! empty( $attributes['titleFontWeight'] ) ? $attributes['titleFontWeight']       : '600';
$desc_font_size    = isset( $attributes['descriptionFontSize'] )   ? (int) $attributes['descriptionFontSize']   : 13;
$desc_font_weight  = ! empty( $attributes['descriptionFontWeight'] ) ? $attributes['descriptionFontWeight']       : '400';

$round_sel  = "{$wrap} .fb-hotspot__button:not(.fb-hotspot__button--tag):not(.fb-hotspot__button--target):not(.fb-hotspot__button--pin):not(.fb-hotspot__button--square-notch)";
$shape_sels = "{$wrap} .fb-hotspot__button--tag,{$wrap} .fb-hotspot__button--target,{$wrap} .fb-hotspot__button--pin,{$wrap} .fb-hotspot__button--square-notch";

ob_start();
?>
<style id="fb-hotspot-style-<?php echo esc_attr( $block_id ); ?>">
<?php echo esc_attr( $wrap ); ?> .fb-hotspot {
	--fb-hotspot-marker-drop-shadow: <?php echo esc_attr( $drop_shadow ); ?>;
	--fb-hotspot-marker-drop-shadow-hover: <?php echo esc_attr( $drop_shadow_hover ); ?>;
	--fb-hotspot-glow-color: <?php echo esc_attr( $marker_bg ); ?>;
	--fb-hotspot-glow-hover-color: <?php echo esc_attr( $marker_bg_hover ); ?>;
}
<?php echo $round_sel; ?>,
<?php echo $shape_sels; ?> {
	width: <?php echo esc_attr( $marker_size ); ?>px;
	height: <?php echo esc_attr( $marker_size ); ?>px;
}
<?php echo $round_sel; ?> {
	background-color: <?php echo esc_attr( $marker_bg ); ?>;
	color: <?php echo esc_attr( $marker_color ); ?>;
	<?php if ( ! empty( $attributes['markerShadow']['enabled'] ) ) : ?>
	box-shadow: <?php echo esc_attr( fb_hotspot_box_shadow( $marker_shadow ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $attributes['markerBorderType'] ) && 'none' !== $attributes['markerBorderType'] ) : ?>
	border-style: <?php echo esc_attr( $attributes['markerBorderType'] ); ?>;
	border-width: <?php echo esc_attr( (int) ( $attributes['markerBorderWidth'] ?? 2 ) ); ?>px;
	border-color: <?php echo esc_attr( $attributes['markerBorderColor'] ?? '' ); ?>;
	<?php endif; ?>
	border-radius: <?php echo esc_attr( (int) ( $attributes['markerBorderRadius'] ?? 50 ) ); ?>px;
}
<?php echo $round_sel; ?>:hover,
<?php echo $round_sel; ?>:focus-visible {
	<?php if ( ! empty( $attributes['markerBackgroundHover'] ) ) : ?>
	background-color: <?php echo esc_attr( $attributes['markerBackgroundHover'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $attributes['markerColorHover'] ) ) : ?>
	color: <?php echo esc_attr( $attributes['markerColorHover'] ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $attributes['markerSizeHover'] ) ) : ?>
	width: <?php echo esc_attr( (int) $attributes['markerSizeHover'] ); ?>px;
	height: <?php echo esc_attr( (int) $attributes['markerSizeHover'] ); ?>px;
	<?php endif; ?>
	<?php if ( ! empty( $attributes['markerShadowHover']['enabled'] ) ) : ?>
	box-shadow: <?php echo esc_attr( fb_hotspot_box_shadow( $marker_shadow_hover ) ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $attributes['markerBorderColorHover'] ) ) : ?>
	border-color: <?php echo esc_attr( $attributes['markerBorderColorHover'] ); ?>;
	<?php endif; ?>
}
<?php echo esc_attr( $wrap ); ?> .fb-hotspot__tooltip {
	background-color: <?php echo esc_attr( $tooltip_bg ); ?>;
	width: <?php echo esc_attr( $tooltip_width ); ?>px;
	padding: <?php echo esc_attr( "{$tp_top}{$tp_unit} {$tp_right}{$tp_unit} {$tp_bottom}{$tp_unit} {$tp_left}{$tp_unit}" ); ?>;
	border-radius: <?php echo esc_attr( $tooltip_radius ); ?>px;
	<?php if ( ! empty( $tooltip_shadow['enabled'] ) ) : ?>
	box-shadow: <?php echo esc_attr( $tooltip_shadow_css ); ?>;
	<?php endif; ?>
	<?php if ( ! empty( $attributes['tooltipBorderType'] ) && 'none' !== $attributes['tooltipBorderType'] ) : ?>
	border-style: <?php echo esc_attr( $attributes['tooltipBorderType'] ); ?>;
	border-width: <?php echo esc_attr( (int) ( $attributes['tooltipBorderWidth'] ?? 1 ) ); ?>px;
	border-color: <?php echo esc_attr( $attributes['tooltipBorderColor'] ?? '' ); ?>;
	<?php endif; ?>
}
<?php echo esc_attr( $wrap ); ?> .fb-hotspot__tooltip-title {
	color: <?php echo esc_attr( $tooltip_title_color ); ?>;
	font-size: <?php echo esc_attr( $title_font_size ); ?>px;
	font-weight: <?php echo esc_attr( $title_font_weight ); ?>;
}
<?php echo esc_attr( $wrap ); ?> .fb-hotspot__tooltip-description {
	color: <?php echo esc_attr( $tooltip_desc_color ); ?>;
	font-size: <?php echo esc_attr( $desc_font_size ); ?>px;
	font-weight: <?php echo esc_attr( $desc_font_weight ); ?>;
}
</style>
<?php
$inline_css = ob_get_clean();

// ─── SVG marker shapes

$marker_svgs = [
	'tag' => '<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none"><path d="M25.88 12.5467L14.1067 0.773333C13.6133 0.28 12.9333 0 12.2267 0H2.66667C1.2 0 0 1.2 0 2.66667V12.2267C0 12.9333 0.28 13.6133 0.786667 14.1067L12.56 25.88C13.6 26.92 15.2933 26.92 16.3333 25.88L25.8933 16.32C26.9333 15.28 26.9333 13.6 25.88 12.5467ZM6 8C4.89333 8 4 7.10667 4 6C4 4.89333 4.89333 4 6 4C7.10667 4 8 4.89333 8 6C8 7.10667 7.10667 8 6 8Z" fill="currentColor"/></svg>',
	'target' => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="currentColor"/><circle cx="10" cy="10" r="5" fill="currentColor"/></svg>',
	'pin' => '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="46" viewBox="0 0 36 46" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0369 44.4626C16.0369 44.4626 0 30.9564 0 17.6667C0 12.9812 1.8613 8.48759 5.17445 5.17445C8.48759 1.8613 12.9812 0 17.6667 0C22.3522 0 26.8457 1.8613 30.1589 5.17445C33.472 8.48759 35.3333 12.9812 35.3333 17.6667C35.3333 30.9564 19.2964 44.4626 19.2964 44.4626C18.4042 45.2841 16.9357 45.2752 16.0369 44.4626ZM17.6667 25.3958C25.3958 25.3958 25.3958 9.9375 17.6667 9.9375C9.9375 9.9375 9.9375 25.3958 17.6667 25.3958Z" fill="currentColor"/></svg>',
	'square-notch' => '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="46" viewBox="0 0 38 46" fill="none"><path d="M2 0H36C37.1046 0 38 0.895431 38 2V36C38 37.1046 37.1046 38 36 38H25L19.8 44.9333C19.4 45.4667 18.6 45.4667 18.2 44.9333L13 38H2C0.895431 38 0 37.1046 0 36V2C0 0.895431 0.895431 0 2 0Z" fill="currentColor"/></svg>',
];

// ─── Render
?>
<?php echo $inline_css; // Already sanitised via ob_start + esc_attr inside. ?>

<div
	id="block-<?php echo esc_attr( $block_id ); ?>"
	class="fb-image-hotspot-block"
>
	<div class="fb-hotspot fb-hotspot--<?php echo esc_attr( $marker_preset ); ?>">
		<div class="fb-hotspot__image-wrapper">

			<?php if ( $image_url ) : ?>
				<img
					class="fb-hotspot__image"
					src="<?php echo esc_url( $image_url ); ?>"
					alt="<?php echo esc_attr( $image_alt ); ?>"
					loading="lazy"
				>
			<?php else : ?>
				<div class="fb-hotspot__placeholder" aria-hidden="true">
					<span class="fb-hotspot__placeholder-text"><?php esc_html_e( 'Select an image', 'frontis-blocks' ); ?></span>
				</div>
			<?php endif; ?>

			<?php foreach ( $hotspots as $item ) :
				$title          = ! empty( $item['title'] )          ? $item['title']          : '';
				$description    = ! empty( $item['description'] )    ? $item['description']    : '';
				$position_x     = isset( $item['positionX'] )        ? (float) $item['positionX'] : 50;
				$position_y     = isset( $item['positionY'] )        ? (float) $item['positionY'] : 50;
				$design         = ! empty( $item['markerDesign'] )   ? $item['markerDesign']   : $defaults['markerDesign'];
				$tooltip_pos    = ! empty( $item['tooltipPosition'] )? $item['tooltipPosition']: $defaults['tooltipPosition'];
				$animation      = ! empty( $item['animation'] )      ? $item['animation']      : 'none';
				$anim_delay     = isset( $item['animationInterval'] )? (float) $item['animationInterval'] : 0;
				$marker_icon    = ! empty( $item['markerIcon'] )     ? $item['markerIcon']     : '';
				$marker_text    = ! empty( $item['markerText'] )     ? $item['markerText']     : '';

				// Media
				$media_type     = ! empty( $item['tooltipMediaType'] ) ? $item['tooltipMediaType'] : '';
				$tooltip_image  = ! empty( $item['tooltipImage']['url'] ) ? $item['tooltipImage'] : [];
				$tooltip_slider = ! empty( $item['tooltipSlider'] ) && is_array( $item['tooltipSlider'] ) ? $item['tooltipSlider'] : [];
				if ( 'preset-3' === $marker_preset && 'slider' === $media_type && ! $tooltip_image && ! empty( $tooltip_slider[0]['url'] ) ) {
					$media_type    = 'image';
					$tooltip_image = $tooltip_slider[0];
				}

				// Social links
				$show_links     = ! empty( $item['showLinks'] );
				$links          = ! empty( $item['links'] ) && is_array( $item['links'] ) ? $item['links'] : [];

				// Actions
				$action_type    = ! empty( $item['actionType'] )    ? $item['actionType']    : 'none';
				$custom_url     = ! empty( $item['customUrl'] )     ? $item['customUrl']     : '';
				$custom_ext     = ! empty( $item['customUrlExternal'] );
				$custom_nofollow= ! empty( $item['customUrlNofollow'] );
				$product_id     = isset( $item['productId'] )       ? absint( $item['productId'] ) : 0;
				$cta_text       = ! empty( $item['ctaText'] )       ? $item['ctaText']       : __( 'Buy Now', 'frontis-blocks' );
				$price_fallback = ! empty( $item['price'] )         ? $item['price']         : '';
				$quantity       = isset( $item['quantity'] )        ? max( 1, (int) $item['quantity'] ) : 1;
				$show_reviews   = ! empty( $item['showReviews'] );

				// Product data
				$product        = function_exists( 'wc_get_product' ) && $product_id ? wc_get_product( $product_id ) : false;
				$price_html     = $product ? $product->get_price_html() : esc_html( $price_fallback );
				$is_purchasable = $product && $product->is_purchasable() && $product->is_in_stock() && ! $product->is_type( 'variable' );
				$product_url    = $product_id ? get_permalink( $product_id ) : '';
				$avg_rating     = $product ? (float) $product->get_average_rating() : 4;
				$review_count   = $product ? (int)   $product->get_review_count()   : 0;
				$rounded_rating = (int) round( $avg_rating );

				// Auto-fill from product
				$display_title  = $product ? $product->get_name() : $title;
				$display_desc   = $description;
				if ( $product ) {
					$pd = $product->get_short_description() ?: $product->get_description();
					$display_desc = wp_strip_all_tags( $pd );
				}
				if ( $product && ! $tooltip_image ) {
					$pid = $product->get_image_id();
					$purl= $pid ? wp_get_attachment_image_url( $pid, 'full' ) : '';
					if ( $purl ) {
						$media_type    = 'image';
						$tooltip_image = [ 'id' => $pid, 'url' => $purl, 'alt' => '' ];
					}
				}

				// CTA URL
				$cta_url    = '';
				$cta_target = '';
				$cta_rel    = [];
				if ( 'product_link' === $action_type && $product_url ) {
					$cta_url = $product_url;
				} elseif ( 'custom_url' === $action_type && $custom_url ) {
					$cta_url    = $custom_url;
					$cta_target = $custom_ext ? '_blank' : '';
					if ( $custom_nofollow ) $cta_rel[] = 'nofollow';
					if ( $custom_ext )      $cta_rel[] = 'noopener';
				} elseif ( 'add_to_cart' === $action_type && ! $is_purchasable && $product_url ) {
					$cta_url = $product_url;
				}

				$render_add_to_cart = 'add_to_cart' === $action_type && $is_purchasable;
				$has_media = in_array( $marker_preset, [ 'custom', 'preset-1', 'preset-2', 'preset-3' ], true ) && (
					( 'image'  === $media_type && ! empty( $tooltip_image['url'] ) ) ||
					( 'slider' === $media_type && ! empty( $tooltip_slider ) )
				);
				$has_price = $price_html && '' !== trim( wp_strip_all_tags( (string) $price_html ) ) && '0' !== trim( wp_strip_all_tags( (string) $price_html ) );

				$button_classes = 'fb-hotspot__button fb-hotspot__button--' . esc_attr( $design );
			?>

				<div
					class="fb-hotspot__item fb-hotspot__item--<?php echo esc_attr( $tooltip_pos ); ?>"
					style="left:<?php echo esc_attr( $position_x ); ?>%;top:<?php echo esc_attr( $position_y ); ?>%;animation-delay:<?php echo esc_attr( $anim_delay ); ?>s;"
					data-animation="<?php echo esc_attr( $animation ); ?>"
					data-animation-delay="<?php echo esc_attr( $anim_delay ); ?>"
				>
					<button
						type="button"
						class="<?php echo esc_attr( $button_classes ); ?>"
						aria-label="<?php echo esc_attr( $display_title ); ?>"
					>
						<?php if ( in_array( $design, [ 'tag', 'target', 'pin', 'square-notch' ], true ) ) : ?>
							<span class="fb-hotspot__marker-<?php echo esc_attr( $design ); ?>" aria-hidden="true">
								<?php echo $marker_svgs[ $design ]; // Pre-built safe SVG strings. ?>
								<?php if ( $marker_icon ) : ?>
									<span class="fb-hotspot__marker-<?php echo esc_attr( $design ); ?>-icon">
										<i class="<?php echo esc_attr( $marker_icon ); ?>"></i>
									</span>
								<?php endif; ?>
							</span>
						<?php else : ?>
							<?php if ( $marker_icon ) : ?>
								<span class="fb-hotspot__marker-icon"><i class="<?php echo esc_attr( $marker_icon ); ?>"></i></span>
							<?php endif; ?>
							<?php if ( $marker_text ) : ?>
								<span class="fb-hotspot__marker-text"><?php echo esc_html( $marker_text ); ?></span>
							<?php endif; ?>
						<?php endif; ?>
					</button>

					<?php
					// ── Tooltip
					$has_content = $display_title || $display_desc || $has_media || $show_reviews || $has_price || ( 'preset-4' === $marker_preset );
					?>
					<?php if ( $has_content ) : ?>
						<div class="fb-hotspot__tooltip<?php echo $has_media ? ' fb-hotspot__tooltip--has-media' : ''; ?>" role="tooltip">

							<?php if ( 'preset-4' === $marker_preset ) : ?>

								<?php if ( $display_title ) : ?>
									<div class="fb-hotspot__tooltip-title"><?php echo esc_html( $display_title ); ?></div>
								<?php endif; ?>
								<?php if ( $display_desc ) : ?>
									<div class="fb-hotspot__tooltip-description"><?php echo esc_html( $display_desc ); ?></div>
								<?php endif; ?>
								<?php if ( $show_links && $links ) : ?>
									<div class="fb-hotspot__tooltip-icon-links">
										<?php foreach ( $links as $link ) :
											$link_url    = ! empty( $link['url'] )      ? $link['url']      : '';
											$link_ext    = ! empty( $link['isExternal'] );
											$link_nofollow = ! empty( $link['nofollow'] );
											$link_icon   = ! empty( $link['icon'] )     ? $link['icon']     : '';
											$link_rel    = [];
											if ( $link_ext )      $link_rel[] = 'noopener';
											if ( $link_nofollow ) $link_rel[] = 'nofollow';
										?>
											<?php if ( $link_url ) : ?>
												<a
													class="fb-hotspot__tooltip-icon-link"
													href="<?php echo esc_url( $link_url ); ?>"
													<?php echo $link_ext ? 'target="_blank"' : ''; ?>
													<?php echo $link_rel ? 'rel="' . esc_attr( implode( ' ', array_unique( $link_rel ) ) ) . '"' : ''; ?>
												>
													<i class="<?php echo esc_attr( $link_icon ); ?>"></i>
												</a>
											<?php elseif ( $link_icon ) : ?>
												<span class="fb-hotspot__tooltip-icon-link">
													<i class="<?php echo esc_attr( $link_icon ); ?>"></i>
												</span>
											<?php endif; ?>
										<?php endforeach; ?>
									</div>
								<?php endif; ?>

							<?php elseif ( 'preset-3' === $marker_preset ) : ?>

								<?php if ( $has_media ) :
									$this_image = 'image' === $media_type ? $tooltip_image : [];
								?>
									<div class="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--image">
										<div class="fb-hotspot__tooltip-media-frame">
											<?php if ( ! empty( $this_image['id'] ) ) :
												echo wp_get_attachment_image( (int) $this_image['id'], 'full', false, [ 'class' => 'fb-hotspot__tooltip-image' ] );
											else : ?>
												<img class="fb-hotspot__tooltip-image" src="<?php echo esc_url( $this_image['url'] ); ?>" alt="">
											<?php endif; ?>
										</div>
									</div>
								<?php else : ?>
									<div class="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--placeholder">
										<div class="fb-hotspot__tooltip-media-frame fb-hotspot__tooltip-media-frame--placeholder">
											<div class="fb-hotspot__placeholder" aria-hidden="true">
												<span><?php esc_html_e( 'Select image', 'frontis-blocks' ); ?></span>
											</div>
										</div>
									</div>
								<?php endif; ?>

								<?php if ( $display_title ) : ?>
									<div class="fb-hotspot__tooltip-title"><?php echo esc_html( $display_title ); ?></div>
								<?php endif; ?>
								<?php if ( $display_desc ) : ?>
									<div class="fb-hotspot__tooltip-description"><?php echo esc_html( $display_desc ); ?></div>
								<?php endif; ?>
								<?php if ( $has_price ) : ?>
									<div class="fb-hotspot__tooltip-price"><?php echo wp_kses_post( $price_html ); ?></div>
								<?php endif; ?>
								<?php if ( $show_reviews ) : ?>
									<div class="fb-hotspot__tooltip-reviews" aria-label="<?php echo esc_attr( sprintf( __( 'Rated %s out of 5', 'frontis-blocks' ), $avg_rating ) ); ?>">
										<?php if ( $review_count > 0 ) : ?>
											<span class="fb-hotspot__tooltip-stars" aria-hidden="true">
												<?php for ( $s = 1; $s <= 5; $s++ ) : ?>
													<svg class="fb-hotspot__tooltip-star<?php echo $s <= $rounded_rating ? ' is-filled' : ''; ?>" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
														<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
													</svg>
												<?php endfor; ?>
											</span>
											<span class="fb-hotspot__tooltip-review-count"><?php echo esc_html( $review_count ); ?></span>
											<span class="fb-hotspot__tooltip-review-text"><?php esc_html_e( 'reviews', 'frontis-blocks' ); ?></span>
										<?php endif; ?>
									</div>
								<?php endif; ?>

							<?php elseif ( 'preset-2' === $marker_preset ) : ?>

								<?php if ( $has_media ) : ?>
									<div class="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--image">
										<div class="fb-hotspot__tooltip-media-frame">
											<?php if ( ! empty( $tooltip_image['id'] ) ) :
												echo wp_get_attachment_image( (int) $tooltip_image['id'], 'full', false, [ 'class' => 'fb-hotspot__tooltip-image' ] );
											else : ?>
												<img class="fb-hotspot__tooltip-image" src="<?php echo esc_url( $tooltip_image['url'] ); ?>" alt="">
											<?php endif; ?>
										</div>
									</div>
								<?php endif; ?>

								<?php if ( $has_price ) : ?>
									<div class="fb-hotspot__tooltip-price"><?php echo wp_kses_post( $price_html ); ?></div>
								<?php endif; ?>
								<?php if ( $display_title ) : ?>
									<div class="fb-hotspot__tooltip-title"><?php echo esc_html( $display_title ); ?></div>
								<?php endif; ?>
								<?php if ( $render_add_to_cart ) : ?>
									<button type="button" class="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--cart" data-product-id="<?php echo esc_attr( $product_id ); ?>" data-default-text="<?php echo esc_attr( $cta_text ); ?>"><?php echo esc_html( $cta_text ); ?></button>
								<?php elseif ( $cta_url ) : ?>
									<a class="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--link" href="<?php echo esc_url( $cta_url ); ?>" <?php echo $cta_target ? 'target="' . esc_attr( $cta_target ) . '"' : ''; ?> <?php echo $cta_rel ? 'rel="' . esc_attr( implode( ' ', array_unique( $cta_rel ) ) ) . '"' : ''; ?>><?php echo esc_html( $cta_text ); ?></a>
								<?php elseif ( 'none' !== $action_type ) : ?>
									<span class="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--disabled"><?php echo esc_html( $cta_text ); ?></span>
								<?php endif; ?>

							<?php else : /* preset-1 and custom */ ?>

								<?php if ( $has_media ) : ?>
									<?php if ( 'image' === $media_type && ! empty( $tooltip_image['url'] ) ) : ?>
										<div class="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--image">
											<div class="fb-hotspot__tooltip-media-frame">
												<?php if ( ! empty( $tooltip_image['id'] ) ) :
													echo wp_get_attachment_image( (int) $tooltip_image['id'], 'full', false, [ 'class' => 'fb-hotspot__tooltip-image' ] );
												else : ?>
													<img class="fb-hotspot__tooltip-image" src="<?php echo esc_url( $tooltip_image['url'] ); ?>" alt="">
												<?php endif; ?>
											</div>
										</div>
									<?php elseif ( 'slider' === $media_type && ! empty( $tooltip_slider ) ) : ?>
										<div class="fb-hotspot__tooltip-media fb-hotspot__tooltip-media--slider">
											<div class="fb-hotspot__tooltip-slider" data-active-slide="0">
												<div class="fb-hotspot__tooltip-slider-viewport">
													<div class="fb-hotspot__tooltip-slider-track">
														<?php foreach ( $tooltip_slider as $si => $slide ) : ?>
															<div class="fb-hotspot__tooltip-slide<?php echo 0 === $si ? ' is-active' : ''; ?>" data-slide-index="<?php echo esc_attr( $si ); ?>">
																<?php if ( ! empty( $slide['id'] ) ) :
																	echo wp_get_attachment_image( (int) $slide['id'], 'full', false, [ 'class' => 'fb-hotspot__tooltip-image' ] );
																elseif ( ! empty( $slide['url'] ) ) : ?>
																	<img class="fb-hotspot__tooltip-image" src="<?php echo esc_url( $slide['url'] ); ?>" alt="">
																<?php endif; ?>
															</div>
														<?php endforeach; ?>
													</div>
												</div>
												<?php if ( count( $tooltip_slider ) > 1 ) : ?>
													<div class="fb-hotspot__tooltip-slider-dots" role="tablist">
														<?php foreach ( $tooltip_slider as $si => $slide ) : ?>
															<button
																type="button"
																class="fb-hotspot__tooltip-slider-dot<?php echo 0 === $si ? ' is-active' : ''; ?>"
																data-slide-target="<?php echo esc_attr( $si ); ?>"
																role="tab"
																aria-selected="<?php echo 0 === $si ? 'true' : 'false'; ?>"
																aria-label="<?php echo esc_attr( sprintf( __( 'Go to image %d', 'frontis-blocks' ), $si + 1 ) ); ?>"
															></button>
														<?php endforeach; ?>
													</div>
												<?php endif; ?>
											</div>
										</div>
									<?php endif; ?>
								<?php endif; ?>

								<?php if ( $display_title ) : ?>
									<div class="fb-hotspot__tooltip-title"><?php echo esc_html( $display_title ); ?></div>
								<?php endif; ?>
								<?php if ( $display_desc ) : ?>
									<div class="fb-hotspot__tooltip-description"><?php echo esc_html( $display_desc ); ?></div>
								<?php endif; ?>

								<div class="fb-hotspot__tooltip-meta">
									<?php if ( $has_price ) : ?>
										<div class="fb-hotspot__tooltip-price"><?php echo wp_kses_post( $price_html ); ?></div>
									<?php endif; ?>
									<?php if ( 'add_to_cart' === $action_type ) : ?>
										<div class="fb-hotspot__tooltip-quantity" data-quantity="<?php echo esc_attr( $quantity ); ?>">
											<button type="button" class="fb-hotspot__tooltip-quantity-button" data-step="-1" aria-label="<?php esc_attr_e( 'Decrease quantity', 'frontis-blocks' ); ?>">-</button>
											<span class="fb-hotspot__tooltip-quantity-value"><?php echo esc_html( str_pad( (string) $quantity, 2, '0', STR_PAD_LEFT ) ); ?></span>
											<button type="button" class="fb-hotspot__tooltip-quantity-button" data-step="1" aria-label="<?php esc_attr_e( 'Increase quantity', 'frontis-blocks' ); ?>">+</button>
										</div>
									<?php endif; ?>
								</div>

								<?php if ( $render_add_to_cart ) : ?>
									<button type="button" class="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--cart" data-product-id="<?php echo esc_attr( $product_id ); ?>" data-default-text="<?php echo esc_attr( $cta_text ); ?>"><?php echo esc_html( $cta_text ); ?></button>
								<?php elseif ( $cta_url ) : ?>
									<a class="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--link" href="<?php echo esc_url( $cta_url ); ?>" <?php echo $cta_target ? 'target="' . esc_attr( $cta_target ) . '"' : ''; ?> <?php echo $cta_rel ? 'rel="' . esc_attr( implode( ' ', array_unique( $cta_rel ) ) ) . '"' : ''; ?>><?php echo esc_html( $cta_text ); ?></a>
								<?php elseif ( 'none' !== $action_type ) : ?>
									<span class="fb-hotspot__tooltip-cta fb-hotspot__tooltip-cta--disabled"><?php echo esc_html( $cta_text ); ?></span>
								<?php endif; ?>

							<?php endif; ?>

						</div><!-- /.fb-hotspot__tooltip -->
					<?php endif; ?>

				</div><!-- /.fb-hotspot__item -->

			<?php endforeach; ?>

		</div><!-- /.fb-hotspot__image-wrapper -->
	</div><!-- /.fb-hotspot -->
</div><!-- /.fb-image-hotspot-block -->
