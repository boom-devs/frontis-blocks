<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';


/** Start Style Settings */
$priceGlobalZIndex = isset($block_attributes['priceGlobalZIndex']) ? intval($block_attributes['priceGlobalZIndex']) : '';

/** Start Global Padding */
// Get padding units for different devices
$priceGlobalPaddingUnits = isset($block_attributes['priceGlobalPaddingUnits']) ? $block_attributes['priceGlobalPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Get padding values for different devices
$priceGlobalPaddingDesktop = isset($block_attributes['priceGlobalPaddingDesktop']) ? $block_attributes['priceGlobalPaddingDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalPaddingTablet = isset($block_attributes['priceGlobalPaddingTablet']) ? $block_attributes['priceGlobalPaddingTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalPaddingMobile = isset($block_attributes['priceGlobalPaddingMobile']) ? $block_attributes['priceGlobalPaddingMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

// Construct padding strings for each device type
$globalDesktopPadding = $priceGlobalPaddingDesktop['top'] . $priceGlobalPaddingUnits['Desktop'] . ' ' . $priceGlobalPaddingDesktop['right'] . $priceGlobalPaddingUnits['Desktop'] . ' ' . $priceGlobalPaddingDesktop['bottom'] . $priceGlobalPaddingUnits['Desktop'] . ' ' . $priceGlobalPaddingDesktop['left'] . $priceGlobalPaddingUnits['Desktop'];
$globalTabletPadding = $priceGlobalPaddingTablet['top'] . $priceGlobalPaddingUnits['Tablet'] . ' ' . $priceGlobalPaddingTablet['right'] . $priceGlobalPaddingUnits['Tablet'] . ' ' . $priceGlobalPaddingTablet['bottom'] . $priceGlobalPaddingUnits['Tablet'] . ' ' . $priceGlobalPaddingTablet['left'] . $priceGlobalPaddingUnits['Tablet'];
$globalMobilePadding = $priceGlobalPaddingMobile['top'] . $priceGlobalPaddingUnits['Mobile'] . ' ' . $priceGlobalPaddingMobile['right'] . $priceGlobalPaddingUnits['Mobile'] . ' ' . $priceGlobalPaddingMobile['bottom'] . $priceGlobalPaddingUnits['Mobile'] . ' ' . $priceGlobalPaddingMobile['left'] . $priceGlobalPaddingUnits['Mobile'];
/** End Global Padding */


/** Start Global Margin */
// Get margin units for different devices
$priceGlobalMarginUnits = isset($block_attributes['priceGlobalMarginUnits']) ? $block_attributes['priceGlobalMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Get margin values for different devices
$priceGlobalMarginDesktop = isset($block_attributes['priceGlobalMarginDesktop']) ? $block_attributes['priceGlobalMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalMarginTablet = isset($block_attributes['priceGlobalMarginTablet']) ? $block_attributes['priceGlobalMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalMarginMobile = isset($block_attributes['priceGlobalMarginMobile']) ? $block_attributes['priceGlobalMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

// Construct margin strings for each device type
$globalDesktopMargin = $priceGlobalMarginDesktop['top'] . $priceGlobalMarginUnits['Desktop'] . ' ' . $priceGlobalMarginDesktop['right'] . $priceGlobalMarginUnits['Desktop'] . ' ' . $priceGlobalMarginDesktop['bottom'] . $priceGlobalMarginUnits['Desktop'] . ' ' . $priceGlobalMarginDesktop['left'] . $priceGlobalMarginUnits['Desktop'];
$globalTabletMargin = $priceGlobalMarginTablet['top'] . $priceGlobalMarginUnits['Tablet'] . ' ' . $priceGlobalMarginTablet['right'] . $priceGlobalMarginUnits['Tablet'] . ' ' . $priceGlobalMarginTablet['bottom'] . $priceGlobalMarginUnits['Tablet'] . ' ' . $priceGlobalMarginTablet['left'] . $priceGlobalMarginUnits['Tablet'];
$globalMobileMargin = $priceGlobalMarginMobile['top'] . $priceGlobalMarginUnits['Mobile'] . ' ' . $priceGlobalMarginMobile['right'] . $priceGlobalMarginUnits['Mobile'] . ' ' . $priceGlobalMarginMobile['bottom'] . $priceGlobalMarginUnits['Mobile'] . ' ' . $priceGlobalMarginMobile['left'] . $priceGlobalMarginUnits['Mobile'];
/** End Global Margin */

// Global background color settings
$priceGlobalBgColor = isset($block_attributes['priceGlobalBgColor']) ? sanitize_hex_color($block_attributes['priceGlobalBgColor']) : '';
$priceGlobalBgHoverColor = isset($block_attributes['priceGlobalBgHoverColor']) ? sanitize_hex_color($block_attributes['priceGlobalBgHoverColor']) : '';

// Global border settings
$priceGlobalBorder = isset($block_attributes['priceGlobalBorder']) ? sanitize_text_field($block_attributes['priceGlobalBorder']) : 'solid';
$priceGlobalBorderColor = isset($block_attributes['priceGlobalBorderColor']) ? sanitize_hex_color($block_attributes['priceGlobalBorderColor']) : '#ddd';
$priceGlobalBorderHoverColor = isset($block_attributes['priceGlobalBorderHoverColor']) ? sanitize_hex_color($block_attributes['priceGlobalBorderHoverColor']) : '';

/** Start Border */
// Get border units for different devices
$priceGlobalBorderUnits = isset($block_attributes['priceGlobalBorderUnits']) ? $block_attributes['priceGlobalBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Get border values for different devices
$priceGlobalBorderDesktop = isset($block_attributes['priceGlobalBorderDesktop']) ? $block_attributes['priceGlobalBorderDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$priceGlobalBorderTablet = isset($block_attributes['priceGlobalBorderTablet']) ? $block_attributes['priceGlobalBorderTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$priceGlobalBorderMobile = isset($block_attributes['priceGlobalBorderMobile']) ? $block_attributes['priceGlobalBorderMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');

// Construct border width strings for each device type
$globalDesktopBorderWidth = $priceGlobalBorderDesktop['top'] . $priceGlobalBorderUnits['Desktop'] . ' ' . $priceGlobalBorderDesktop['right'] . $priceGlobalBorderUnits['Desktop'] . ' ' . $priceGlobalBorderDesktop['bottom'] . $priceGlobalBorderUnits['Desktop'] . ' ' . $priceGlobalBorderDesktop['left'] . $priceGlobalBorderUnits['Desktop'];
$globalTabletBorderWidth = $priceGlobalBorderTablet['top'] . $priceGlobalBorderUnits['Tablet'] . ' ' . $priceGlobalBorderTablet['right'] . $priceGlobalBorderUnits['Tablet'] . ' ' . $priceGlobalBorderTablet['bottom'] . $priceGlobalBorderUnits['Tablet'] . ' ' . $priceGlobalBorderTablet['left'] . $priceGlobalBorderUnits['Tablet'];
$globalMobileBorderWidth = $priceGlobalBorderMobile['top'] . $priceGlobalBorderUnits['Mobile'] . ' ' . $priceGlobalBorderMobile['right'] . $priceGlobalBorderUnits['Mobile'] . ' ' . $priceGlobalBorderMobile['bottom'] . $priceGlobalBorderUnits['Mobile'] . ' ' . $priceGlobalBorderMobile['left'] . $priceGlobalBorderUnits['Mobile'];
/** End Border */

/** Start Border Radius */
// Get border radius units for different devices
$priceGlobalBorderRadiusUnits = isset($block_attributes['priceGlobalBorderRadiusUnits']) ? $block_attributes['priceGlobalBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Get border radius values for different devices
$priceGlobalBorderRadiusDesktop = isset($block_attributes['priceGlobalBorderRadiusDesktop']) ? $block_attributes['priceGlobalBorderRadiusDesktop'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$priceGlobalBorderRadiusTablet = isset($block_attributes['priceGlobalBorderRadiusTablet']) ? $block_attributes['priceGlobalBorderRadiusTablet'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$priceGlobalBorderRadiusMobile = isset($block_attributes['priceGlobalBorderRadiusMobile']) ? $block_attributes['priceGlobalBorderRadiusMobile'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');

// Construct border radius strings for each device type
$globalDesktopBorderRadiusWidth = $priceGlobalBorderRadiusDesktop['top'] . $priceGlobalBorderRadiusUnits['Desktop'] . ' ' . $priceGlobalBorderRadiusDesktop['right'] . $priceGlobalBorderRadiusUnits['Desktop'] . ' ' . $priceGlobalBorderRadiusDesktop['bottom'] . $priceGlobalBorderRadiusUnits['Desktop'] . ' ' . $priceGlobalBorderRadiusDesktop['left'] . $priceGlobalBorderRadiusUnits['Desktop'];
$globalTabletBorderRadiusWidth = $priceGlobalBorderRadiusTablet['top'] . $priceGlobalBorderRadiusUnits['Tablet'] . ' ' . $priceGlobalBorderRadiusTablet['right'] . $priceGlobalBorderRadiusUnits['Tablet'] . ' ' . $priceGlobalBorderRadiusTablet['bottom'] . $priceGlobalBorderRadiusUnits['Tablet'] . ' ' . $priceGlobalBorderRadiusTablet['left'] . $priceGlobalBorderRadiusUnits['Tablet'];
$globalMobileBorderRadiusWidth = $priceGlobalBorderRadiusMobile['top'] . $priceGlobalBorderRadiusUnits['Mobile'] . ' ' . $priceGlobalBorderRadiusMobile['right'] . $priceGlobalBorderRadiusUnits['Mobile'] . ' ' . $priceGlobalBorderRadiusMobile['bottom'] . $priceGlobalBorderRadiusUnits['Mobile'] . ' ' . $priceGlobalBorderRadiusMobile['left'] . $priceGlobalBorderRadiusUnits['Mobile'];
/** End Border Radius */

// Get the global box shadow CSS value from block attributes
$priceGlobalBoxShadowCssValue = isset($block_attributes['priceGlobalBoxShadowCssValue']) ? sanitize_text_field($block_attributes['priceGlobalBoxShadowCssValue']) : '';



// Generate CSS content
$css_content = "
	.$blockId.fb-pricing-wrapper {
		" . ($priceGlobalBgColor ? "background-color: $priceGlobalBgColor;" : "") . "
		" . ($globalDesktopPadding ? "padding: $globalDesktopPadding;" : "") . "
		" . ($globalDesktopMargin ? "margin: $globalDesktopMargin;" : "") . "
		" . ($priceGlobalBorder ? "border-style: $priceGlobalBorder;" : "") . "
		" . ($globalDesktopBorderWidth ? "border-width: $globalDesktopBorderWidth;" : "") . "
		" . ($globalDesktopBorderRadiusWidth ? "border-radius: $globalDesktopBorderRadiusWidth;" : "") . "
		" . ($priceGlobalBorderColor ? "border-color: $priceGlobalBorderColor;" : "") . "
		" . ($priceGlobalZIndex ? "z-index: $priceGlobalZIndex;" : "") . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
		position: relative;
	}
	
	.$blockId.fb-pricing-wrapper:hover {
		" . ($priceGlobalBoxShadowCssValue ? "box-shadow: $priceGlobalBoxShadowCssValue;" : "") . "
		" . ($priceGlobalBorderHoverColor ? "border-color: $priceGlobalBorderHoverColor;" : "") . "
		" . ($priceGlobalBgHoverColor ? "background-color: $priceGlobalBgHoverColor;" : "") . "
	}

	@media only screen and (max-width: 1024px) {
		.$blockId.fb-pricing-wrapper {
			" . ($globalTabletPadding ? "padding: $globalTabletPadding;" : "") . "
			" . ($globalTabletMargin ? "margin: $globalTabletMargin;" : "") . "
			" . ($globalTabletBorderWidth ? "border-width: $globalTabletBorderWidth;" : "") . "
			" . ($globalTabletBorderRadiusWidth ? "border-radius: $globalTabletBorderRadiusWidth;" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.$blockId.fb-pricing-wrapper {
			" . ($globalMobilePadding ? "padding: $globalMobilePadding;" : "") . "
			" . ($globalMobileMargin ? "margin: $globalMobileMargin;" : "") . "
			" . ($globalMobileBorderWidth ? "border-width: $globalMobileBorderWidth;" : "") . "
			" . ($globalMobileBorderRadiusWidth ? "border-radius: $globalMobileBorderRadiusWidth;" : "") . "
		}
	}
";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockId);
