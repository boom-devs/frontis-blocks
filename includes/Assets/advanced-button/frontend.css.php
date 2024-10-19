<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';

$buttonAlignment = isset($block_attributes['buttonAlignment']) ? sanitize_text_field($block_attributes['buttonAlignment']) : 'left';
$buttonText = isset($block_attributes['buttonText']) ? sanitize_text_field($block_attributes['buttonText']) : 'Add Text';
$buttonUrl = isset($block_attributes['buttonUrl']) ? esc_url($block_attributes['buttonUrl']) : '';
$buttonTargetUrl = isset($block_attributes['buttonTargetUrl']) ? (bool)$block_attributes['buttonTargetUrl'] : false;
$buttonWidth = isset($block_attributes['buttonWidth']) ? $block_attributes['buttonWidth'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$buttonWidthUnits = isset($block_attributes['buttonWidthUnits']) ? $block_attributes['buttonWidthUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');

$buttonFontFamily = isset($block_attributes['buttonFontFamily']) ? sanitize_text_field($block_attributes['buttonFontFamily']) : 'inherit';
$buttonFontSize = isset($block_attributes['buttonFontSize']) ? $block_attributes['buttonFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$buttonFontSizeUnits = isset($block_attributes['buttonFontSizeUnits']) ? $block_attributes['buttonFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonFontWeight = isset($block_attributes['buttonFontWeight']) ? sanitize_text_field($block_attributes['buttonFontWeight']) : '';
$buttonFontStyle = isset($block_attributes['buttonFontStyle']) ? sanitize_text_field($block_attributes['buttonFontStyle']) : '';
$buttonTextTransform = isset($block_attributes['buttonTextTransform']) ? sanitize_text_field($block_attributes['buttonTextTransform']) : '';
$buttonTextDecoration = isset($block_attributes['buttonTextDecoration']) ? sanitize_text_field($block_attributes['buttonTextDecoration']) : '';
$buttonLetterSpacing = isset($block_attributes['buttonLetterSpacing']) ? $block_attributes['buttonLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$buttonLetterSpacingUnits = isset($block_attributes['buttonLetterSpacingUnits']) ? $block_attributes['buttonLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonLineHeight = isset($block_attributes['buttonLineHeight']) ? $block_attributes['buttonLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$buttonLineHeightUnits = isset($block_attributes['buttonLineHeightUnits']) ? $block_attributes['buttonLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$buttonColorSwitcher = isset($block_attributes['buttonColorSwitcher']) ? sanitize_text_field($block_attributes['buttonColorSwitcher']) : 'normal';
$buttonColor = isset($block_attributes['buttonColor']) ? sanitize_hex_color($block_attributes['buttonColor']) : '';
$buttonHoverColor = isset($block_attributes['buttonHoverColor']) ? sanitize_hex_color($block_attributes['buttonHoverColor']) : '';
$buttonBgColorSwitcher = isset($block_attributes['buttonBgColorSwitcher']) ? sanitize_text_field($block_attributes['buttonBgColorSwitcher']) : 'normal';
$buttonBgColor = isset($block_attributes['buttonBgColor']) ? sanitize_hex_color($block_attributes['buttonBgColor']) : '';
$buttonBgHoverColor = isset($block_attributes['buttonBgHoverColor']) ? sanitize_hex_color($block_attributes['buttonBgHoverColor']) : '';
$buttonBorder = isset($block_attributes['buttonBorder']) ? sanitize_text_field($block_attributes['buttonBorder']) : 'none';
$buttonBorderColorSwitcher = isset($block_attributes['buttonBorderColorSwitcher']) ? sanitize_text_field($block_attributes['buttonBorderColorSwitcher']) : 'normal';
$buttonBorderColor = isset($block_attributes['buttonBorderColor']) ? sanitize_hex_color($block_attributes['buttonBorderColor']) : '';
$buttonBorderHoverColor = isset($block_attributes['buttonBorderHoverColor']) ? sanitize_hex_color($block_attributes['buttonBorderHoverColor']) : '';

$buttonBorderUnits = isset($block_attributes['buttonBorderUnits']) ? $block_attributes['buttonBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonDesktopBorderWidth = isset($block_attributes['buttonDesktopBorderWidth']) ? $block_attributes['buttonDesktopBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonTabBorderWidth = isset($block_attributes['buttonTabBorderWidth']) ? $block_attributes['buttonTabBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonMobileBorderWidth = isset($block_attributes['buttonMobileBorderWidth']) ? $block_attributes['buttonMobileBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default border width for different devices */
$buttonDesktopBorderWidthValue = $buttonDesktopBorderWidth['top'] . $buttonBorderUnits['Desktop'] . ' ' . $buttonDesktopBorderWidth['right'] . $buttonBorderUnits['Desktop'] . ' ' . $buttonDesktopBorderWidth['bottom'] . $buttonBorderUnits['Desktop'] . ' ' . $buttonDesktopBorderWidth['left'] . $buttonBorderUnits['Desktop'];
$buttonTabletBorderWidthValue = $buttonTabBorderWidth['top'] . $buttonBorderUnits['Tablet'] . ' ' . $buttonTabBorderWidth['right'] . $buttonBorderUnits['Tablet'] . ' ' . $buttonTabBorderWidth['bottom'] . $buttonBorderUnits['Tablet'] . ' ' . $buttonTabBorderWidth['left'] . $buttonBorderUnits['Tablet'];
$buttonMobileBorderWidthValue = $buttonMobileBorderWidth['top'] . $buttonBorderUnits['Mobile'] . ' ' . $buttonMobileBorderWidth['right'] . $buttonBorderUnits['Mobile'] . ' ' . $buttonMobileBorderWidth['bottom'] . $buttonBorderUnits['Mobile'] . ' ' . $buttonMobileBorderWidth['left'] . $buttonBorderUnits['Mobile'];
/** End border width */

$buttonBorderRadiusUnits = isset($block_attributes['buttonBorderRadiusUnits']) ? $block_attributes['buttonBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonDesktopBorderRadiusWidth = isset($block_attributes['buttonDesktopBorderRadiusWidth']) ? $block_attributes['buttonDesktopBorderRadiusWidth'] : array('top' => '4', 'bottom' => '4', 'left' => '4', 'right' => '4');
$buttonTabBorderRadiusWidth = isset($block_attributes['buttonTabBorderRadiusWidth']) ? $block_attributes['buttonTabBorderRadiusWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonMobileBorderRadiusWidth = isset($block_attributes['buttonMobileBorderRadiusWidth']) ? $block_attributes['buttonMobileBorderRadiusWidth'] : array('top' => '4', 'bottom' => '4', 'left' => '4', 'right' => '4');
/** Default border radius for different devices */
$buttonDesktopBorderRadiusValue = $buttonDesktopBorderRadiusWidth['top'] . $buttonBorderRadiusUnits['Desktop'] . ' ' . $buttonDesktopBorderRadiusWidth['right'] . $buttonBorderRadiusUnits['Desktop'] . ' ' . $buttonDesktopBorderRadiusWidth['bottom'] . $buttonBorderRadiusUnits['Desktop'] . ' ' . $buttonDesktopBorderRadiusWidth['left'] . $buttonBorderRadiusUnits['Desktop'];
$buttonTabletBorderRadiusValue = $buttonTabBorderRadiusWidth['top'] . $buttonBorderRadiusUnits['Tablet'] . ' ' . $buttonTabBorderRadiusWidth['right'] . $buttonBorderRadiusUnits['Tablet'] . ' ' . $buttonTabBorderRadiusWidth['bottom'] . $buttonBorderRadiusUnits['Tablet'] . ' ' . $buttonTabBorderRadiusWidth['left'] . $buttonBorderRadiusUnits['Tablet'];
$buttonMobileBorderRadiusValue = $buttonMobileBorderRadiusWidth['top'] . $buttonBorderRadiusUnits['Mobile'] . ' ' . $buttonMobileBorderRadiusWidth['right'] . $buttonBorderRadiusUnits['Mobile'] . ' ' . $buttonMobileBorderRadiusWidth['bottom'] . $buttonBorderRadiusUnits['Mobile'] . ' ' . $buttonMobileBorderRadiusWidth['left'] . $buttonBorderRadiusUnits['Mobile'];
/** End border radius */

$buttonboxShadowValues = isset($block_attributes['buttonboxShadowValues']) ? $block_attributes['buttonboxShadowValues'] : array();
$buttonboxShadowCssValue = isset($block_attributes['buttonboxShadowCssValue']) ? sanitize_text_field($block_attributes['buttonboxShadowCssValue']) : '';


$buttonPaddingUnits = isset($block_attributes['buttonPaddingUnits']) ? $block_attributes['buttonPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonDesktopPadding = isset($block_attributes['buttonDesktopPadding']) ? $block_attributes['buttonDesktopPadding'] : array('top' => 12, 'bottom' => 12, 'left' => 24, 'right' => 24);
$buttonTabPadding = isset($block_attributes['buttonTabPadding']) ? $block_attributes['buttonTabPadding'] : array('top' => 12, 'bottom' => 12, 'left' => 24, 'right' => 24);
$buttonMobilePadding = isset($block_attributes['buttonMobilePadding']) ? $block_attributes['buttonMobilePadding'] : array('top' => 12, 'bottom' => 12, 'left' => 24, 'right' => 24);
/** Default padding for each device */
$buttonDesktopPaddingValue = $buttonDesktopPadding['top'] . $buttonPaddingUnits['Desktop'] . ' ' . $buttonDesktopPadding['right'] . $buttonPaddingUnits['Desktop'] . ' ' . $buttonDesktopPadding['bottom'] . $buttonPaddingUnits['Desktop'] . ' ' . $buttonDesktopPadding['left'] . $buttonPaddingUnits['Desktop'];
$buttonTabletPaddingValue = $buttonTabPadding['top'] . $buttonPaddingUnits['Tablet'] . ' ' . $buttonTabPadding['right'] . $buttonPaddingUnits['Tablet'] . ' ' . $buttonTabPadding['bottom'] . $buttonPaddingUnits['Tablet'] . ' ' . $buttonTabPadding['left'] . $buttonPaddingUnits['Tablet'];
$buttonMobilePaddingValue = $buttonMobilePadding['top'] . $buttonPaddingUnits['Mobile'] . ' ' . $buttonMobilePadding['right'] . $buttonPaddingUnits['Mobile'] . ' ' . $buttonMobilePadding['bottom'] . $buttonPaddingUnits['Mobile'] . ' ' . $buttonMobilePadding['left'] . $buttonPaddingUnits['Mobile'];
/** End Padding */

$buttonMarginUnits = isset($block_attributes['buttonMarginUnits']) ? $block_attributes['buttonMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonDesktopMargin = isset($block_attributes['buttonDesktopMargin']) ? $block_attributes['buttonDesktopMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonTabMargin = isset($block_attributes['buttonTabMargin']) ? $block_attributes['buttonTabMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonMobileMargin = isset($block_attributes['buttonMobileMargin']) ? $block_attributes['buttonMobileMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default margin for each device */
$buttonDesktopMarginValue = $buttonDesktopMargin['top'] . $buttonMarginUnits['Desktop'] . ' ' . $buttonDesktopMargin['right'] . $buttonMarginUnits['Desktop'] . ' ' . $buttonDesktopMargin['bottom'] . $buttonMarginUnits['Desktop'] . ' ' . $buttonDesktopMargin['left'] . $buttonMarginUnits['Desktop'];
$buttonTabletMarginValue = $buttonTabMargin['top'] . $buttonMarginUnits['Tablet'] . ' ' . $buttonTabMargin['right'] . $buttonMarginUnits['Tablet'] . ' ' . $buttonTabMargin['bottom'] . $buttonMarginUnits['Tablet'] . ' ' . $buttonTabMargin['left'] . $buttonMarginUnits['Tablet'];
$buttonMobileMarginValue = $buttonMobileMargin['top'] . $buttonMarginUnits['Mobile'] . ' ' . $buttonMobileMargin['right'] . $buttonMarginUnits['Mobile'] . ' ' . $buttonMobileMargin['bottom'] . $buttonMarginUnits['Mobile'] . ' ' . $buttonMobileMargin['left'] . $buttonMarginUnits['Mobile'];
/** End margin */

$buttonIconAlign = isset($block_attributes['buttonIconAlign']) ? sanitize_text_field($block_attributes['buttonIconAlign']) : 'no-icon';
$buttonIcon = isset($block_attributes['buttonIcon']) ? sanitize_text_field($block_attributes['buttonIcon']) : 'circle-check';
$buttonZIndex = isset($block_attributes['buttonZIndex']) ? $block_attributes['buttonZIndex'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$buttonZIndexUnits = isset($block_attributes['buttonZIndexUnits']) ? $block_attributes['buttonZIndexUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Generate CSS content
$css_content = "

	.$blockId.fb-advanced-button-wrapper .fb-advanced-button {
		" . ($buttonBgColor ? "background-color: $buttonBgColor;" : "") . "
		" . ($buttonFontFamily ? "font-family: $buttonFontFamily;" : "") . "
		" . ($buttonFontSize['Desktop'] && $buttonFontSizeUnits['Desktop'] ? "font-size: {$buttonFontSize['Desktop']}{$buttonFontSizeUnits['Desktop']};" : "") . "
		" . ($buttonFontWeight ? "font-weight: $buttonFontWeight;" : "") . "
		" . ($buttonFontStyle ? "font-style: $buttonFontStyle;" : "") . "
		" . ($buttonTextTransform ? "text-transform: $buttonTextTransform;" : "") . "
		" . ($buttonTextDecoration ? "text-decoration: $buttonTextDecoration;" : "") . "
		" . ($buttonLetterSpacing['Desktop'] && $buttonLetterSpacingUnits['Desktop'] ? "letter-spacing: {$buttonLetterSpacing['Desktop']}{$buttonLetterSpacingUnits['Desktop']};" : "") . "
		" . ($buttonLineHeight['Desktop'] && $buttonLineHeightUnits['Desktop'] ? "line-height: {$buttonLineHeight['Desktop']}{$buttonLineHeightUnits['Desktop']};" : "") . "
		" . ($buttonDesktopPaddingValue ? "padding: $buttonDesktopPaddingValue;" : "") . "
		" . ($buttonDesktopMarginValue ? "margin: $buttonDesktopMarginValue;" : "") . "
		" . ($buttonBorder ? "border: $buttonBorder;" : "") . "
		" . ($buttonDesktopBorderWidthValue ? "border-width: $buttonDesktopBorderWidthValue;" : "") . "
		" . ($buttonDesktopBorderRadiusValue ? "border-radius: $buttonDesktopBorderRadiusValue;" : "") . "
		" . ($buttonBorderColor ? "border-color: $buttonBorderColor;" : "") . "
		" . ($buttonboxShadowCssValue ? "box-shadow: $buttonboxShadowCssValue;" : "") . "
		" . ($buttonZIndex['Desktop'] && $buttonZIndexUnits['Desktop'] ? "z-index: {$buttonZIndex['Desktop']}{$buttonZIndexUnits['Desktop']};" : "") . "
		" . ($buttonWidth['Desktop'] && $buttonWidthUnits['Desktop'] ? "width: {$buttonWidth['Desktop']}{$buttonWidthUnits['Desktop']};" : "") . "
		display: " . ($buttonAlignment === 'justify' ? 'flex' : 'inline-flex') . ";
	}

	.$blockId.fb-advanced-button-wrapper .fb-advanced-button:hover {
		" . ($buttonBorderHoverColor ? "border-color: $buttonBorderHoverColor;" : "") . "
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-text {
		" . ($buttonColor !== null ? "color: $buttonColor;" : "") . "
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-text {
		" . ($buttonHoverColor !== null ? "color: $buttonHoverColor;" : "") . "
	}

	.$blockId.fb-advanced-button-wrapper .fb-advanced-button:hover {
		" . ($buttonBgHoverColor !== null ? "background-color: $buttonBgHoverColor;" : "") . "
	}
	@media only screen and (max-width: 1024px) {
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button {
			" . ($buttonTabletPaddingValue ? "padding: $buttonTabletPaddingValue;" : "") . "
			" . ($buttonTabletMarginValue ? "margin: $buttonTabletMarginValue;" : "") . "
			" . ($buttonBorder ? "border: $buttonBorder;" : "") . "
			" . ($buttonTabletBorderWidthValue ? "border-width: $buttonTabletBorderWidthValue;" : "") . "
			" . ($buttonTabletBorderRadiusValue ? "border-radius: $buttonTabletBorderRadiusValue;" : "") . "
			" . ($buttonWidth['Tablet'] && $buttonWidthUnits['Tablet'] ? "width: {$buttonWidth['Tablet']}{$buttonWidthUnits['Tablet']};" : "") . "
			" . ($buttonFontSize['Tablet'] && $buttonFontSizeUnits['Tablet'] ? "font-size: {$buttonFontSize['Tablet']}{$buttonFontSizeUnits['Tablet']};" : "") . "
			" . ($buttonLetterSpacing['Tablet'] && $buttonLetterSpacingUnits['Tablet'] ? "letter-spacing: {$buttonLetterSpacing['Tablet']}{$buttonLetterSpacingUnits['Tablet']};" : "") . "
			" . ($buttonLineHeight['Tablet'] && $buttonLineHeightUnits['Tablet'] ? "line-height: {$buttonLineHeight['Tablet']}{$buttonLineHeightUnits['Tablet']};" : "") . "
			" . ($buttonZIndex['Tablet'] && $buttonZIndexUnits['Tablet'] ? "z-index: {$buttonZIndex['Tablet']}{$buttonZIndexUnits['Tablet']};" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button {
			" . ($buttonMobilePaddingValue ? "padding: $buttonMobilePaddingValue;" : "") . "
			" . ($buttonMobileMarginValue ? "margin: $buttonMobileMarginValue;" : "") . "
			" . ($buttonBorder ? "border: $buttonBorder;" : "") . "
			" . ($buttonMobileBorderWidthValue ? "border-width: $buttonMobileBorderWidthValue;" : "") . "
			" . ($buttonMobileBorderRadiusValue ? "border-radius: $buttonMobileBorderRadiusValue;" : "") . "
			" . ($buttonWidth['Mobile'] && $buttonWidthUnits['Mobile'] ? "width: {$buttonWidth['Mobile']}{$buttonWidthUnits['Mobile']};" : "") . "
			" . ($buttonFontSize['Mobile'] && $buttonFontSizeUnits['Mobile'] ? "font-size: {$buttonFontSize['Mobile']}{$buttonFontSizeUnits['Mobile']};" : "") . "
			" . ($buttonLetterSpacing['Mobile'] && $buttonLetterSpacingUnits['Mobile'] ? "letter-spacing: {$buttonLetterSpacing['Mobile']}{$buttonLetterSpacingUnits['Mobile']};" : "") . "
			" . ($buttonLineHeight['Mobile'] && $buttonLineHeightUnits['Mobile'] ? "line-height: {$buttonLineHeight['Mobile']}{$buttonLineHeightUnits['Mobile']};" : "") . "
			" . ($buttonZIndex['Mobile'] && $buttonZIndexUnits['Mobile'] ? "z-index: {$buttonZIndex['Mobile']}{$buttonZIndexUnits['Mobile']};" : "") . "
		}
	}

";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockId);
