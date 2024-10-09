<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get block attributes
$blockID = isset( $attributes['blockID'] ) ? sanitize_text_field( $attributes['blockID'] ) : '';
$DeviceType = isset( $attributes['DeviceType'] ) ? sanitize_text_field( $attributes['DeviceType'] ) : 'Desktop';

$videoGlobalZIndex = isset( $attributes['videoGlobalZIndex'] ) ? intval( $attributes['videoGlobalZIndex'] ) : '';
$videoURL = isset( $attributes['videoURL'] ) ? esc_url( $attributes['videoURL'] ) : 'https://www.youtube.com/watch?v=WZdCL4Y5EBY';
$autoPlaySwitcher = isset( $attributes['autoPlaySwitcher'] ) ? boolval( $attributes['autoPlaySwitcher'] ) : false;
$muteSwitcher = isset( $attributes['muteSwitcher'] ) ? boolval( $attributes['muteSwitcher'] ) : false;
$loopSwitcher = isset( $attributes['loopSwitcher'] ) ? boolval( $attributes['loopSwitcher'] ) : false;
$showControlsSwitcher = isset( $attributes['showControlsSwitcher'] ) ? boolval( $attributes['showControlsSwitcher'] ) : false;

$videoBorder = isset( $attributes['videoBorder'] ) ? sanitize_text_field( $attributes['videoBorder'] ) : 'none';
$videoBorderColorSwitcher = isset( $attributes['videoBorderColorSwitcher'] ) ? sanitize_text_field( $attributes['videoBorderColorSwitcher'] ) : 'normal';
$videoBorderColor = isset( $attributes['videoBorderColor'] ) ? sanitize_hex_color( $attributes['videoBorderColor'] ) : '';
$videoBorderHoverColor = isset( $attributes['videoBorderHoverColor'] ) ? sanitize_hex_color( $attributes['videoBorderHoverColor'] ) : '';

$videoBorderUnits = isset( $attributes['videoBorderUnits'] ) ? array_map( 'sanitize_text_field', $attributes['videoBorderUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$videoBorderDesktop = isset( $attributes['videoBorderDesktop'] ) ? array_map( 'intval', $attributes['videoBorderDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoBorderTablet = isset( $attributes['videoBorderTablet'] ) ? array_map( 'intval', $attributes['videoBorderTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoBorderMobile = isset( $attributes['videoBorderMobile'] ) ? array_map( 'intval', $attributes['videoBorderMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoBorderLink = isset( $attributes['videoBorderLink'] ) ? boolval( $attributes['videoBorderLink'] ) : true;

$videoBorderRadiusUnits = isset( $attributes['videoBorderRadiusUnits'] ) ? array_map( 'sanitize_text_field', $attributes['videoBorderRadiusUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$videoBorderRadiusDesktop = isset( $attributes['videoBorderRadiusDesktop'] ) ? array_map( 'intval', $attributes['videoBorderRadiusDesktop'] ) : array( 'top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10 );
$videoBorderRadiusTablet = isset( $attributes['videoBorderRadiusTablet'] ) ? array_map( 'intval', $attributes['videoBorderRadiusTablet'] ) : array( 'top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10 );
$videoBorderRadiusMobile = isset( $attributes['videoBorderRadiusMobile'] ) ? array_map( 'intval', $attributes['videoBorderRadiusMobile'] ) : array( 'top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10 );
$videoBorderRadiusLink = isset( $attributes['videoBorderRadiusLink'] ) ? boolval( $attributes['videoBorderRadiusLink'] ) : true;

$videoGlobalPaddingUnits = isset( $attributes['videoGlobalPaddingUnits'] ) ? array_map( 'sanitize_text_field', $attributes['videoGlobalPaddingUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$videoGlobalPaddingDesktop = isset( $attributes['videoGlobalPaddingDesktop'] ) ? array_map( 'intval', $attributes['videoGlobalPaddingDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalPaddingTablet = isset( $attributes['videoGlobalPaddingTablet'] ) ? array_map( 'intval', $attributes['videoGlobalPaddingTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalPaddingMobile = isset( $attributes['videoGlobalPaddingMobile'] ) ? array_map( 'intval', $attributes['videoGlobalPaddingMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalPaddingLink = isset( $attributes['videoGlobalPaddingLink'] ) ? boolval( $attributes['videoGlobalPaddingLink'] ) : true;

$videoGlobalMarginUnits = isset( $attributes['videoGlobalMarginUnits'] ) ? array_map( 'sanitize_text_field', $attributes['videoGlobalMarginUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$videoGlobalMarginDesktop = isset( $attributes['videoGlobalMarginDesktop'] ) ? array_map( 'intval', $attributes['videoGlobalMarginDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalMarginTablet = isset( $attributes['videoGlobalMarginTablet'] ) ? array_map( 'intval', $attributes['videoGlobalMarginTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalMarginMobile = isset( $attributes['videoGlobalMarginMobile'] ) ? array_map( 'intval', $attributes['videoGlobalMarginMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalMarginLink = isset( $attributes['videoGlobalMarginLink'] ) ? boolval( $attributes['videoGlobalMarginLink'] ) : true;

$videoGlobalBgColorSwitcher = isset( $attributes['videoGlobalBgColorSwitcher'] ) ? sanitize_text_field( $attributes['videoGlobalBgColorSwitcher'] ) : 'normal';
$videoGlobalBgColor = isset( $attributes['videoGlobalBgColor'] ) ? sanitize_hex_color( $attributes['videoGlobalBgColor'] ) : '';
$videoGlobalBgHoverColor = isset( $attributes['videoGlobalBgHoverColor'] ) ? sanitize_hex_color( $attributes['videoGlobalBgHoverColor'] ) : '';

$videoGlobalBorder = isset( $attributes['videoGlobalBorder'] ) ? sanitize_text_field( $attributes['videoGlobalBorder'] ) : 'none';
$videoGlobalBorderColorSwitcher = isset( $attributes['videoGlobalBorderColorSwitcher'] ) ? sanitize_text_field( $attributes['videoGlobalBorderColorSwitcher'] ) : 'normal';
$videoGlobalBorderColor = isset( $attributes['videoGlobalBorderColor'] ) ? sanitize_hex_color( $attributes['videoGlobalBorderColor'] ) : '';
$videoGlobalBorderHoverColor = isset( $attributes['videoGlobalBorderHoverColor'] ) ? sanitize_hex_color( $attributes['videoGlobalBorderHoverColor'] ) : '';

$videoGlobalBorderUnits = isset( $attributes['videoGlobalBorderUnits'] ) ? array_map( 'sanitize_text_field', $attributes['videoGlobalBorderUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$videoGlobalBorderDesktop = isset( $attributes['videoGlobalBorderDesktop'] ) ? array_map( 'intval', $attributes['videoGlobalBorderDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalBorderTablet = isset( $attributes['videoGlobalBorderTablet'] ) ? array_map( 'intval', $attributes['videoGlobalBorderTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalBorderMobile = isset( $attributes['videoGlobalBorderMobile'] ) ? array_map( 'intval', $attributes['videoGlobalBorderMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalBorderLink = isset( $attributes['videoGlobalBorderLink'] ) ? boolval( $attributes['videoGlobalBorderLink'] ) : true;

$videoGlobalBorderRadiusUnits = isset( $attributes['videoGlobalBorderRadiusUnits'] ) ? array_map( 'sanitize_text_field', $attributes['videoGlobalBorderRadiusUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$videoGlobalBorderRadiusDesktop = isset( $attributes['videoGlobalBorderRadiusDesktop'] ) ? array_map( 'intval', $attributes['videoGlobalBorderRadiusDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalBorderRadiusTablet = isset( $attributes['videoGlobalBorderRadiusTablet'] ) ? array_map( 'intval', $attributes['videoGlobalBorderRadiusTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalBorderRadiusMobile = isset( $attributes['videoGlobalBorderRadiusMobile'] ) ? array_map( 'intval', $attributes['videoGlobalBorderRadiusMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$videoGlobalBorderRadiusLink = isset( $attributes['videoGlobalBorderRadiusLink'] ) ? boolval( $attributes['videoGlobalBorderRadiusLink'] ) : true;


// For Desktop
$IframeBorderDesktopWidth = $videoBorderDesktop['top'] . $videoBorderUnits['Desktop'] . ' ' .
                            $videoBorderDesktop['right'] . $videoBorderUnits['Desktop'] . ' ' .
                            $videoBorderDesktop['bottom'] . $videoBorderUnits['Desktop'] . ' ' .
                            $videoBorderDesktop['left'] . $videoBorderUnits['Desktop'];
// For Tablet
$IframeBorderTabletWidth = $videoBorderTablet['top'] . $videoBorderUnits['Tablet'] . ' ' .
                           $videoBorderTablet['right'] . $videoBorderUnits['Tablet'] . ' ' .
                           $videoBorderTablet['bottom'] . $videoBorderUnits['Tablet'] . ' ' .
                           $videoBorderTablet['left'] . $videoBorderUnits['Tablet'];
// For Mobile
$IframeBorderMobileWidth = $videoBorderMobile['top'] . $videoBorderUnits['Mobile'] . ' ' .
                           $videoBorderMobile['right'] . $videoBorderUnits['Mobile'] . ' ' .
                           $videoBorderMobile['bottom'] . $videoBorderUnits['Mobile'] . ' ' .
                           $videoBorderMobile['left'] . $videoBorderUnits['Mobile'];
/** For Desktop */
$IframeBorderRadiusDesktopWidth = $videoBorderRadiusDesktop['top'] . $videoBorderRadiusUnits['Desktop'] . ' ' .
								  $videoBorderRadiusDesktop['right'] . $videoBorderRadiusUnits['Desktop'] . ' ' .
								  $videoBorderRadiusDesktop['bottom'] . $videoBorderRadiusUnits['Desktop'] . ' ' .
								  $videoBorderRadiusDesktop['left'] . $videoBorderRadiusUnits['Desktop'];
/** For Tablet */
$IframeBorderRadiusTabletWidth = $videoBorderRadiusTablet['top'] . $videoBorderRadiusUnits['Tablet'] . ' ' .
								 $videoBorderRadiusTablet['right'] . $videoBorderRadiusUnits['Tablet'] . ' ' .
								 $videoBorderRadiusTablet['bottom'] . $videoBorderRadiusUnits['Tablet'] . ' ' .
								 $videoBorderRadiusTablet['left'] . $videoBorderRadiusUnits['Tablet'];
/** For Mobile */
$IframeBorderRadiusMobileWidth = $videoBorderRadiusMobile['top'] . $videoBorderRadiusUnits['Mobile'] . ' ' .
								$videoBorderRadiusMobile['right'] . $videoBorderRadiusUnits['Mobile'] . ' ' .
								$videoBorderRadiusMobile['bottom'] . $videoBorderRadiusUnits['Mobile'] . ' ' .
								$videoBorderRadiusMobile['left'] . $videoBorderRadiusUnits['Mobile'];

/** For Desktop */
$DesktopPadding = $videoGlobalPaddingDesktop['top'] . $videoGlobalPaddingUnits['Desktop'] . ' ' .
				$videoGlobalPaddingDesktop['right'] . $videoGlobalPaddingUnits['Desktop'] . ' ' .
				$videoGlobalPaddingDesktop['bottom'] . $videoGlobalPaddingUnits['Desktop'] . ' ' .
				$videoGlobalPaddingDesktop['left'] . $videoGlobalPaddingUnits['Desktop'];

/** For Tablet */
$TabletPadding = $videoGlobalPaddingTablet['top'] . $videoGlobalPaddingUnits['Tablet'] . ' ' .
				$videoGlobalPaddingTablet['right'] . $videoGlobalPaddingUnits['Tablet'] . ' ' .
				$videoGlobalPaddingTablet['bottom'] . $videoGlobalPaddingUnits['Tablet'] . ' ' .
				$videoGlobalPaddingTablet['left'] . $videoGlobalPaddingUnits['Tablet'];

/** For Mobile */
$MobilePadding = $videoGlobalPaddingMobile['top'] . $videoGlobalPaddingUnits['Mobile'] . ' ' .
				$videoGlobalPaddingMobile['right'] . $videoGlobalPaddingUnits['Mobile'] . ' ' .
				$videoGlobalPaddingMobile['bottom'] . $videoGlobalPaddingUnits['Mobile'] . ' ' .
				$videoGlobalPaddingMobile['left'] . $videoGlobalPaddingUnits['Mobile'];

/** For Desktop */
$DesktopMargin = $videoGlobalMarginDesktop['top'] . $videoGlobalMarginUnits['Desktop'] . ' ' .
                 $videoGlobalMarginDesktop['right'] . $videoGlobalMarginUnits['Desktop'] . ' ' .
                 $videoGlobalMarginDesktop['bottom'] . $videoGlobalMarginUnits['Desktop'] . ' ' .
                 $videoGlobalMarginDesktop['left'] . $videoGlobalMarginUnits['Desktop'];

/** For Tablet */
$TabletMargin = $videoGlobalMarginTablet['top'] . $videoGlobalMarginUnits['Tablet'] . ' ' .
                $videoGlobalMarginTablet['right'] . $videoGlobalMarginUnits['Tablet'] . ' ' .
                $videoGlobalMarginTablet['bottom'] . $videoGlobalMarginUnits['Tablet'] . ' ' .
                $videoGlobalMarginTablet['left'] . $videoGlobalMarginUnits['Tablet'];

/** For Mobile */
$MobileMargin = $videoGlobalMarginMobile['top'] . $videoGlobalMarginUnits['Mobile'] . ' ' .
                $videoGlobalMarginMobile['right'] . $videoGlobalMarginUnits['Mobile'] . ' ' .
                $videoGlobalMarginMobile['bottom'] . $videoGlobalMarginUnits['Mobile'] . ' ' .
                $videoGlobalMarginMobile['left'] . $videoGlobalMarginUnits['Mobile'];
/** For Desktop */
$BorderDesktopWidth = $videoGlobalBorderDesktop['top'] . $videoGlobalBorderUnits['Desktop'] . ' ' .
				$videoGlobalBorderDesktop['right'] . $videoGlobalBorderUnits['Desktop'] . ' ' .
				$videoGlobalBorderDesktop['bottom'] . $videoGlobalBorderUnits['Desktop'] . ' ' .
				$videoGlobalBorderDesktop['left'] . $videoGlobalBorderUnits['Desktop'];
/** For Tablet */
$BorderTabletWidth = $videoGlobalBorderTablet['top'] . $videoGlobalBorderUnits['Tablet'] . ' ' .
			   $videoGlobalBorderTablet['right'] . $videoGlobalBorderUnits['Tablet'] . ' ' .
			   $videoGlobalBorderTablet['bottom'] . $videoGlobalBorderUnits['Tablet'] . ' ' .
			   $videoGlobalBorderTablet['left'] . $videoGlobalBorderUnits['Tablet'];
/** For Mobile */
$BorderMobileWidth = $videoGlobalBorderMobile['top'] . $videoGlobalBorderUnits['Mobile'] . ' ' .
			   $videoGlobalBorderMobile['right'] . $videoGlobalBorderUnits['Mobile'] . ' ' .
			   $videoGlobalBorderMobile['bottom'] . $videoGlobalBorderUnits['Mobile'] . ' ' .
			   $videoGlobalBorderMobile['left'] . $videoGlobalBorderUnits['Mobile'];

/** For Desktop */
$BorderRadiusDesktopWidth = $videoGlobalBorderRadiusDesktop['top'] . $videoGlobalBorderRadiusUnits['Desktop'] . ' ' .
                             $videoGlobalBorderRadiusDesktop['right'] . $videoGlobalBorderRadiusUnits['Desktop'] . ' ' .
                             $videoGlobalBorderRadiusDesktop['bottom'] . $videoGlobalBorderRadiusUnits['Desktop'] . ' ' .
                             $videoGlobalBorderRadiusDesktop['left'] . $videoGlobalBorderRadiusUnits['Desktop'];
/** For Tablet */
$BorderRadiusTabletWidth = $videoGlobalBorderRadiusTablet['top'] . $videoGlobalBorderRadiusUnits['Tablet'] . ' ' .
                           $videoGlobalBorderRadiusTablet['right'] . $videoGlobalBorderRadiusUnits['Tablet'] . ' ' .
                           $videoGlobalBorderRadiusTablet['bottom'] . $videoGlobalBorderRadiusUnits['Tablet'] . ' ' .
                           $videoGlobalBorderRadiusTablet['left'] . $videoGlobalBorderRadiusUnits['Tablet'];
/** For Mobile */
$BorderRadiusMobileWidth = $videoGlobalBorderRadiusMobile['top'] . $videoGlobalBorderRadiusUnits['Mobile'] . ' ' .
                           $videoGlobalBorderRadiusMobile['right'] . $videoGlobalBorderRadiusUnits['Mobile'] . ' ' .
                           $videoGlobalBorderRadiusMobile['bottom'] . $videoGlobalBorderRadiusUnits['Mobile'] . ' ' .
                           $videoGlobalBorderRadiusMobile['left'] . $videoGlobalBorderRadiusUnits['Mobile'];


?>
<style>
    .fb-advanced-video-main-wrapper.<?php echo esc_attr( $blockID ); ?> {
        z-index: <?php echo isset( $videoGlobalZIndex ) ? intval( $videoGlobalZIndex ) : 'auto'; ?>;
    }
    .fb-advanced-video-wrapper {
        <?php echo isset( $videoGlobalBgColor ) ? 'background-color: ' . esc_attr( $videoGlobalBgColor ) . ';' : ''; ?>
        padding: <?php echo esc_attr( $DesktopPadding ); ?>;
        margin: <?php echo esc_attr( $DesktopMargin ); ?>;
        border: <?php echo esc_attr( $videoGlobalBorder ); ?>;
        border-width: <?php echo esc_attr( $BorderDesktopWidth ); ?>;
        border-radius: <?php echo esc_attr( $BorderRadiusDesktopWidth ); ?> !important;
        <?php echo isset( $videoGlobalBorderColor ) ? 'border-color: ' . esc_attr( $videoGlobalBorderColor ) . ';' : ''; ?>
    }
    .fb-advanced-video-wrapper:hover {
        <?php echo isset( $videoGlobalBgHoverColor ) ? 'background-color: ' . esc_attr( $videoGlobalBgHoverColor ) . ';' : ''; ?>
        <?php echo isset( $videoGlobalBorderHoverColor ) ? 'border-color: ' . esc_attr( $videoGlobalBorderHoverColor ) . ';' : ''; ?>
    }
	
    .fb-react-player iframe {
        border: <?php echo esc_attr( $videoBorder ); ?>;
        border-width: <?php echo esc_attr( $IframeBorderDesktopWidth ); ?>;
        border-radius: <?php echo esc_attr( $IframeBorderRadiusDesktopWidth ); ?> !important;
        <?php echo isset( $videoBorderColor ) ? 'border-color: ' . esc_attr( $videoBorderColor ) . ';' : ''; ?>
    }

    @media only screen and (max-width: 1024px) {
        .fb-advanced-video-wrapper {
            padding: <?php echo esc_attr( $TabletPadding ); ?>;
            margin: <?php echo esc_attr( $TabletMargin ); ?>;
            border-width: <?php echo esc_attr( $BorderTabletWidth ); ?>;
            border-radius: <?php echo esc_attr( $BorderRadiusTabletWidth ); ?> !important;
        }

        .fb-react-player iframe {
            border-width: <?php echo esc_attr( $IframeBorderTabletWidth ); ?>;
            border-radius: <?php echo esc_attr( $IframeBorderRadiusTabletWidth ); ?> !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-advanced-video-wrapper {
            padding: <?php echo esc_attr( $MobilePadding ); ?>;
            margin: <?php echo esc_attr( $MobileMargin ); ?>;
            border-width: <?php echo esc_attr( $BorderMobileWidth ); ?>;
            border-radius: <?php echo esc_attr( $BorderRadiusMobileWidth ); ?> !important;
        }

        .fb-react-player iframe {
            border-width: <?php echo esc_attr( $IframeBorderMobileWidth ); ?>;
            border-radius: <?php echo esc_attr( $IframeBorderRadiusMobileWidth ); ?> !important;
        }
    }
</style>

<script src='https://cdn.jsdelivr.net/npm/react-player/dist/ReactPlayer.standalone.js'></script>

<div <?php echo get_block_wrapper_attributes(); ?>>

	<div class="fb-parent-wrapper">
		<div class="fb-advanced-video-wrapper">
			<div class="fb-player-wrapper">
				<div 
					id="fb-player-option"
					class="fb-player-option"
					data-url="<?php echo esc_attr( $videoURL ); ?>"
					data-autoplay="<?php echo esc_attr( $autoPlaySwitcher ? 'true' : 'false' ); ?>"
					data-muted="<?php echo esc_attr( $muteSwitcher ? 'true' : 'false' ); ?>"
					data-loop="<?php echo esc_attr( $loopSwitcher ? 'true' : 'false' ); ?>"
					data-controls="<?php echo esc_attr( $showControlsSwitcher ? 'true' : 'false' ); ?>"
				></div>
			</div>
		</div>
	</div>
</div>

<script>

	const container = document.getElementById('fb-player-option')
	const url = container.getAttribute('data-url');
	const autoPlay = container.getAttribute('data-autoplay') === 'true';
	const muted = container.getAttribute('data-muted') === 'true';
	const loop = container.getAttribute('data-loop') === 'true';
	const controls = container.getAttribute('data-controls') === 'true';

	renderReactPlayer(container, { 
		url: url,
		playing: autoPlay,
		muted: muted,
		loop: loop,
		controls: controls,
		width: '100%',
		height: '100%',
		className: 'fb-react-player'
	})

</script>