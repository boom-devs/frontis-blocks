<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get block attributes
$blockID        = isset( $attributes['blockID'] ) ? sanitize_text_field( $attributes['blockID'] ) : '';
$DeviceType     = isset( $attributes['DeviceType'] ) ? sanitize_text_field( $attributes['DeviceType'] ) : 'Desktop';
$formId         = isset( $attributes['formId'] ) ? sanitize_text_field( $attributes['formId'] ) : '';


$showLabels = isset( $attributes['showLabels'] ) ? (bool) $attributes['showLabels'] : true;
$showPlaceholder = isset( $attributes['showPlaceholder'] ) ? (bool) $attributes['showPlaceholder'] : true;
$showErrorMessage = isset( $attributes['showErrorMessage'] ) ? (bool) $attributes['showErrorMessage'] : true;

$fluentFormGlobalPaddingUnits = isset( $attributes['fluentFormGlobalPaddingUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalPaddingUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$fluentFormGlobalPaddingDesktop = isset( $attributes['fluentFormGlobalPaddingDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalPaddingTablet = isset( $attributes['fluentFormGlobalPaddingTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalPaddingMobile = isset( $attributes['fluentFormGlobalPaddingMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalPaddingLink = isset( $attributes['fluentFormGlobalPaddingLink'] ) ? boolval( $attributes['fluentFormGlobalPaddingLink'] ) : true;

$fluentFormGlobalMarginUnits = isset( $attributes['fluentFormGlobalMarginUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalMarginUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$fluentFormGlobalMarginDesktop = isset( $attributes['fluentFormGlobalMarginDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalMarginTablet = isset( $attributes['fluentFormGlobalMarginTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalMarginMobile = isset( $attributes['fluentFormGlobalMarginMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalMarginLink = isset( $attributes['fluentFormGlobalMarginLink'] ) ? boolval( $attributes['fluentFormGlobalMarginLink'] ) : true;

$fluentFormGlobalBgColorSwitcher = isset( $attributes['fluentFormGlobalBgColorSwitcher'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBgColorSwitcher'] ) : 'normal';
$fluentFormGlobalBgColor = isset( $attributes['fluentFormGlobalBgColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBgColor'] ) : '';
$fluentFormGlobalBgHoverColor = isset( $attributes['fluentFormGlobalBgHoverColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBgHoverColor'] ) : '';

$fluentFormGlobalBorder = isset( $attributes['fluentFormGlobalBorder'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBorder'] ) : 'none';
$fluentFormGlobalBorderColorSwitcher = isset( $attributes['fluentFormGlobalBorderColorSwitcher'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBorderColorSwitcher'] ) : 'normal';
$fluentFormGlobalBorderColor = isset( $attributes['fluentFormGlobalBorderColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBorderColor'] ) : '';
$fluentFormGlobalBorderHoverColor = isset( $attributes['fluentFormGlobalBorderHoverColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBorderHoverColor'] ) : '';

$fluentFormGlobalBorderUnits = isset( $attributes['fluentFormGlobalBorderUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalBorderUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$fluentFormGlobalBorderDesktop = isset( $attributes['fluentFormGlobalBorderDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalBorderTablet = isset( $attributes['fluentFormGlobalBorderTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalBorderMobile = isset( $attributes['fluentFormGlobalBorderMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalBorderLink = isset( $attributes['fluentFormGlobalBorderLink'] ) ? boolval( $attributes['fluentFormGlobalBorderLink'] ) : true;

$fluentFormGlobalBorderRadiusUnits = isset( $attributes['fluentFormGlobalBorderRadiusUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalBorderRadiusUnits'] ) : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$fluentFormGlobalBorderRadiusDesktop = isset( $attributes['fluentFormGlobalBorderRadiusDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusDesktop'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalBorderRadiusTablet = isset( $attributes['fluentFormGlobalBorderRadiusTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusTablet'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalBorderRadiusMobile = isset( $attributes['fluentFormGlobalBorderRadiusMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusMobile'] ) : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$fluentFormGlobalBorderRadiusLink = isset( $attributes['fluentFormGlobalBorderRadiusLink'] ) ? boolval( $attributes['fluentFormGlobalBorderRadiusLink'] ) : true;


/** For Desktop */
$DesktopPadding = $fluentFormGlobalPaddingDesktop['top'] . $fluentFormGlobalPaddingUnits['Desktop'] . ' ' .
				$fluentFormGlobalPaddingDesktop['right'] . $fluentFormGlobalPaddingUnits['Desktop'] . ' ' .
				$fluentFormGlobalPaddingDesktop['bottom'] . $fluentFormGlobalPaddingUnits['Desktop'] . ' ' .
				$fluentFormGlobalPaddingDesktop['left'] . $fluentFormGlobalPaddingUnits['Desktop'];

/** For Tablet */
$TabletPadding = $fluentFormGlobalPaddingTablet['top'] . $fluentFormGlobalPaddingUnits['Tablet'] . ' ' .
				$fluentFormGlobalPaddingTablet['right'] . $fluentFormGlobalPaddingUnits['Tablet'] . ' ' .
				$fluentFormGlobalPaddingTablet['bottom'] . $fluentFormGlobalPaddingUnits['Tablet'] . ' ' .
				$fluentFormGlobalPaddingTablet['left'] . $fluentFormGlobalPaddingUnits['Tablet'];

/** For Mobile */
$MobilePadding = $fluentFormGlobalPaddingMobile['top'] . $fluentFormGlobalPaddingUnits['Mobile'] . ' ' .
				$fluentFormGlobalPaddingMobile['right'] . $fluentFormGlobalPaddingUnits['Mobile'] . ' ' .
				$fluentFormGlobalPaddingMobile['bottom'] . $fluentFormGlobalPaddingUnits['Mobile'] . ' ' .
				$fluentFormGlobalPaddingMobile['left'] . $fluentFormGlobalPaddingUnits['Mobile'];

/** For Desktop */
$DesktopMargin = $fluentFormGlobalMarginDesktop['top'] . $fluentFormGlobalMarginUnits['Desktop'] . ' ' .
                 $fluentFormGlobalMarginDesktop['right'] . $fluentFormGlobalMarginUnits['Desktop'] . ' ' .
                 $fluentFormGlobalMarginDesktop['bottom'] . $fluentFormGlobalMarginUnits['Desktop'] . ' ' .
                 $fluentFormGlobalMarginDesktop['left'] . $fluentFormGlobalMarginUnits['Desktop'];

/** For Tablet */
$TabletMargin = $fluentFormGlobalMarginTablet['top'] . $fluentFormGlobalMarginUnits['Tablet'] . ' ' .
                $fluentFormGlobalMarginTablet['right'] . $fluentFormGlobalMarginUnits['Tablet'] . ' ' .
                $fluentFormGlobalMarginTablet['bottom'] . $fluentFormGlobalMarginUnits['Tablet'] . ' ' .
                $fluentFormGlobalMarginTablet['left'] . $fluentFormGlobalMarginUnits['Tablet'];

/** For Mobile */
$MobileMargin = $fluentFormGlobalMarginMobile['top'] . $fluentFormGlobalMarginUnits['Mobile'] . ' ' .
                $fluentFormGlobalMarginMobile['right'] . $fluentFormGlobalMarginUnits['Mobile'] . ' ' .
                $fluentFormGlobalMarginMobile['bottom'] . $fluentFormGlobalMarginUnits['Mobile'] . ' ' .
                $fluentFormGlobalMarginMobile['left'] . $fluentFormGlobalMarginUnits['Mobile'];
/** For Desktop */
$BorderDesktopWidth = $fluentFormGlobalBorderDesktop['top'] . $fluentFormGlobalBorderUnits['Desktop'] . ' ' .
				$fluentFormGlobalBorderDesktop['right'] . $fluentFormGlobalBorderUnits['Desktop'] . ' ' .
				$fluentFormGlobalBorderDesktop['bottom'] . $fluentFormGlobalBorderUnits['Desktop'] . ' ' .
				$fluentFormGlobalBorderDesktop['left'] . $fluentFormGlobalBorderUnits['Desktop'];
/** For Tablet */
$BorderTabletWidth = $fluentFormGlobalBorderTablet['top'] . $fluentFormGlobalBorderUnits['Tablet'] . ' ' .
			   $fluentFormGlobalBorderTablet['right'] . $fluentFormGlobalBorderUnits['Tablet'] . ' ' .
			   $fluentFormGlobalBorderTablet['bottom'] . $fluentFormGlobalBorderUnits['Tablet'] . ' ' .
			   $fluentFormGlobalBorderTablet['left'] . $fluentFormGlobalBorderUnits['Tablet'];
/** For Mobile */
$BorderMobileWidth = $fluentFormGlobalBorderMobile['top'] . $fluentFormGlobalBorderUnits['Mobile'] . ' ' .
			   $fluentFormGlobalBorderMobile['right'] . $fluentFormGlobalBorderUnits['Mobile'] . ' ' .
			   $fluentFormGlobalBorderMobile['bottom'] . $fluentFormGlobalBorderUnits['Mobile'] . ' ' .
			   $fluentFormGlobalBorderMobile['left'] . $fluentFormGlobalBorderUnits['Mobile'];

/** For Desktop */
$BorderRadiusDesktopWidth = $fluentFormGlobalBorderRadiusDesktop['top'] . $fluentFormGlobalBorderRadiusUnits['Desktop'] . ' ' .
                             $fluentFormGlobalBorderRadiusDesktop['right'] . $fluentFormGlobalBorderRadiusUnits['Desktop'] . ' ' .
                             $fluentFormGlobalBorderRadiusDesktop['bottom'] . $fluentFormGlobalBorderRadiusUnits['Desktop'] . ' ' .
                             $fluentFormGlobalBorderRadiusDesktop['left'] . $fluentFormGlobalBorderRadiusUnits['Desktop'];
/** For Tablet */
$BorderRadiusTabletWidth = $fluentFormGlobalBorderRadiusTablet['top'] . $fluentFormGlobalBorderRadiusUnits['Tablet'] . ' ' .
                           $fluentFormGlobalBorderRadiusTablet['right'] . $fluentFormGlobalBorderRadiusUnits['Tablet'] . ' ' .
                           $fluentFormGlobalBorderRadiusTablet['bottom'] . $fluentFormGlobalBorderRadiusUnits['Tablet'] . ' ' .
                           $fluentFormGlobalBorderRadiusTablet['left'] . $fluentFormGlobalBorderRadiusUnits['Tablet'];
/** For Mobile */
$BorderRadiusMobileWidth = $fluentFormGlobalBorderRadiusMobile['top'] . $fluentFormGlobalBorderRadiusUnits['Mobile'] . ' ' .
                           $fluentFormGlobalBorderRadiusMobile['right'] . $fluentFormGlobalBorderRadiusUnits['Mobile'] . ' ' .
                           $fluentFormGlobalBorderRadiusMobile['bottom'] . $fluentFormGlobalBorderRadiusUnits['Mobile'] . ' ' .
                           $fluentFormGlobalBorderRadiusMobile['left'] . $fluentFormGlobalBorderRadiusUnits['Mobile'];



                           

$_wrapper_classes = [
    "fb-parent-$blockID"
];


$_form_wrapper_classes = [
    $blockID,
    'fb-fluent-form-wrapper',
    !$showLabels ? 'fb-fluent-form-hide-label' : '',
    !$showPlaceholder ? 'fb-fluent-form-hide-placeholder' : '',
    !$showErrorMessage ? 'fb-fluent-form-hide-error-message' : '',
];

// Remove any empty classes
$_form_wrapper_classes = array_filter($_form_wrapper_classes);

$wrapper_attributes = get_block_wrapper_attributes(
    [
        'class' => $blockID
    ]
);

?>

<style>

    .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?> {
        z-index: <?php echo isset( $fluentFormGlobalZIndex ) ? intval( $fluentFormGlobalZIndex ) : 'auto'; ?>;
        <?php if ( isset( $fluentFormGlobalBgColor ) ): ?>
            background-color: <?php echo esc_attr( $fluentFormGlobalBgColor ); ?>;
        <?php endif; ?>
        padding: <?php echo esc_attr( $DesktopPadding ); ?>;
        margin: <?php echo esc_attr( $DesktopMargin ); ?>;
        border: <?php echo esc_attr( $fluentFormGlobalBorder ); ?>;
        border-width: <?php echo esc_attr( $BorderDesktopWidth ); ?>;
        border-radius: <?php echo esc_attr( $BorderRadiusDesktopWidth ); ?> !important;
        <?php if ( isset( $fluentFormGlobalBorderColor ) ): ?>
            border-color: <?php echo esc_attr( $fluentFormGlobalBorderColor ); ?>;
        <?php endif; ?>
    }

    .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?>:hover {
        <?php if ( isset( $fluentFormGlobalBgHoverColor ) ): ?>
            background-color: <?php echo esc_attr( $fluentFormGlobalBgHoverColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormGlobalBorderHoverColor ) ): ?>
            border-color: <?php echo esc_attr( $fluentFormGlobalBorderHoverColor ); ?>;
        <?php endif; ?>
    }

    @media only screen and (max-width: 1024px) {
        .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?> {
            padding: <?php echo esc_attr( $TabletPadding ); ?>;
            margin: <?php echo esc_attr( $TabletMargin ); ?>;
            border-width: <?php echo esc_attr( $BorderTabletWidth ); ?>;
            border-radius: <?php echo esc_attr( $BorderRadiusTabletWidth ); ?> !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?> {
            padding: <?php echo esc_attr( $MobilePadding ); ?>;
            margin: <?php echo esc_attr( $MobileMargin ); ?>;
            border-width: <?php echo esc_attr( $BorderMobileWidth ); ?>;
            border-radius: <?php echo esc_attr( $BorderRadiusMobileWidth ); ?> !important;
        }
    }

    <?php echo ".$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-label .ff-el-group label:not(.ff-el-form-check-label),
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-label .ff-el-group .ff-el-input--label,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .ff-el-group .error.text-danger {
        display: none;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
        opacity: 0;
        visibility: hidden;
    }";
    ?>
</style>

<div <?php echo wp_kses_data( $wrapper_attributes ); ?> >
	<div class="<?php echo esc_attr( implode( ' ', $_wrapper_classes ) ); ?> fb-parent-wrapper">
		<div class="<?php echo esc_attr( implode( ' ', $_form_wrapper_classes ) ); ?>">
			<?php
                $shortcode = sprintf( '[fluentform id="%s"]', esc_attr( $formId ) );
                echo do_shortcode( shortcode_unautop( wp_kses_post( $shortcode ) ) );
            ?>
		</div>
	</div>
</div>