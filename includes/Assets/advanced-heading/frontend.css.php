<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';

$headingText = isset($block_attributes['headingText']) ? sanitize_text_field($block_attributes['headingText']) : '';
$headingTag = isset($block_attributes['headingTag']) ? sanitize_text_field($block_attributes['headingTag']) : 'h2';
$headingBackgroundColor = isset($block_attributes['headingBackgroundColor']) ? sanitize_text_field($block_attributes['headingBackgroundColor']) : '';
$headingAlignment = isset($block_attributes['headingAlignment']) ? sanitize_text_field($block_attributes['headingAlignment']) : 'left';
$separator = isset($block_attributes['separator']) ? sanitize_text_field($block_attributes['separator']) : 'solid';
$subHeadingSwitcher = isset($block_attributes['subHeadingSwitcher']) ? rest_sanitize_boolean($block_attributes['subHeadingSwitcher']) : false;
$showSeparatorSwitcher = isset($block_attributes['showSeparatorSwitcher']) ? rest_sanitize_boolean($block_attributes['showSeparatorSwitcher']) : false;
$subHeadingText = isset($block_attributes['subHeadingText']) ? sanitize_text_field($block_attributes['subHeadingText']) : '';
$subHeadingTag = isset($block_attributes['subHeadingTag']) ? sanitize_text_field($block_attributes['subHeadingTag']) : 'p';
$separatorPosition = isset($block_attributes['separatorPosition']) ? sanitize_text_field($block_attributes['separatorPosition']) : 'bottom';
$subHeadingPosition = isset($block_attributes['subHeadingPosition']) ? sanitize_text_field($block_attributes['subHeadingPosition']) : 'bottom';

$headingFontFamily = isset($block_attributes['headingFontFamily']) ? sanitize_text_field($block_attributes['headingFontFamily']) : 'inherit';
$headingFontSize = isset($block_attributes['headingFontSize']) ? $block_attributes['headingFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$headingFontSizeUnits = isset($block_attributes['headingFontSizeUnits']) ? $block_attributes['headingFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingFontWeight = isset($block_attributes['headingFontWeight']) ? sanitize_text_field($block_attributes['headingFontWeight']) : '';
$headingFontStyle = isset($block_attributes['headingFontStyle']) ? sanitize_text_field($block_attributes['headingFontStyle']) : '';
$headingTextTransform = isset($block_attributes['headingTextTransform']) ? sanitize_text_field($block_attributes['headingTextTransform']) : '';
$headingTextDecoration = isset($block_attributes['headingTextDecoration']) ? sanitize_text_field($block_attributes['headingTextDecoration']) : '';
$headingLetterSpacing = isset($block_attributes['headingLetterSpacing']) ? $block_attributes['headingLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$headingLineHeight = isset($block_attributes['headingLineHeight']) ? $block_attributes['headingLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$headingLetterSpacingUnits = isset($block_attributes['headingLetterSpacingUnits']) ? $block_attributes['headingLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingLineHeightUnits = isset($block_attributes['headingLineHeightUnits']) ? $block_attributes['headingLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$headingColor = isset($block_attributes['headingColor']) ? sanitize_text_field($block_attributes['headingColor']) : '';
$headingHoverColor = isset($block_attributes['headingHoverColor']) ? sanitize_text_field($block_attributes['headingHoverColor']) : '';
$headingBorder = isset($block_attributes['headingBorder']) ? sanitize_text_field($block_attributes['headingBorder']) : 'none';
$headingBorderColor = isset($block_attributes['headingBorderColor']) ? sanitize_text_field($block_attributes['headingBorderColor']) : '';
$headingBorderHoverColor = isset($block_attributes['headingBorderHoverColor']) ? sanitize_text_field($block_attributes['headingBorderHoverColor']) : '';

$headingBorderUnits = isset($block_attributes['headingBorderUnits']) ? $block_attributes['headingBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingDesktopBorder = isset($block_attributes['headingDesktopBorder']) ? $block_attributes['headingDesktopBorder'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingTabBorder = isset($block_attributes['headingTabBorder']) ? $block_attributes['headingTabBorder'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingMobileBorder = isset($block_attributes['headingMobileBorder']) ? $block_attributes['headingMobileBorder'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default border for Heading */
$headingDesktopBorderWidth = $headingDesktopBorder['top'] . $headingBorderUnits['Desktop'] . ' ' . $headingDesktopBorder['right'] . $headingBorderUnits['Desktop'] . ' ' . $headingDesktopBorder['bottom'] . $headingBorderUnits['Desktop'] . ' ' . $headingDesktopBorder['left'] . $headingBorderUnits['Desktop'];
$headingTabletBorderWidth = $headingTabBorder['top'] . $headingBorderUnits['Tablet'] . ' ' . $headingTabBorder['right'] . $headingBorderUnits['Tablet'] . ' ' . $headingTabBorder['bottom'] . $headingBorderUnits['Tablet'] . ' ' . $headingTabBorder['left'] . $headingBorderUnits['Tablet'];
$headingMobileBorderWidth = $headingMobileBorder['top'] . $headingBorderUnits['Mobile'] . ' ' . $headingMobileBorder['right'] . $headingBorderUnits['Mobile'] . ' ' . $headingMobileBorder['bottom'] . $headingBorderUnits['Mobile'] . ' ' . $headingMobileBorder['left'] . $headingBorderUnits['Mobile'];
/** End Heading Border */

$headingBorderRadiusUnits = isset($block_attributes['headingBorderRadiusUnits']) ? $block_attributes['headingBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingDesktopBorderRadius = isset($block_attributes['headingDesktopBorderRadius']) ? $block_attributes['headingDesktopBorderRadius'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingTabBorderRadius = isset($block_attributes['headingTabBorderRadius']) ? $block_attributes['headingTabBorderRadius'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingMobileBorderRadius = isset($block_attributes['headingMobileBorderRadius']) ? $block_attributes['headingMobileBorderRadius'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default border radius for Heading */
$headingDesktopBorderRadiusWidth = $headingDesktopBorderRadius['top'] . $headingBorderRadiusUnits['Desktop'] . ' ' . $headingDesktopBorderRadius['right'] . $headingBorderRadiusUnits['Desktop'] . ' ' . $headingDesktopBorderRadius['bottom'] . $headingBorderRadiusUnits['Desktop'] . ' ' . $headingDesktopBorderRadius['left'] . $headingBorderRadiusUnits['Desktop'];
$headingTabletBorderRadiusWidth = $headingTabBorderRadius['top'] . $headingBorderRadiusUnits['Tablet'] . ' ' . $headingTabBorderRadius['right'] . $headingBorderRadiusUnits['Tablet'] . ' ' . $headingTabBorderRadius['bottom'] . $headingBorderRadiusUnits['Tablet'] . ' ' . $headingTabBorderRadius['left'] . $headingBorderRadiusUnits['Tablet'];
$headingMobileBorderRadiusWidth = $headingMobileBorderRadius['top'] . $headingBorderRadiusUnits['Mobile'] . ' ' . $headingMobileBorderRadius['right'] . $headingBorderRadiusUnits['Mobile'] . ' ' . $headingMobileBorderRadius['bottom'] . $headingBorderRadiusUnits['Mobile'] . ' ' . $headingMobileBorderRadius['left'] . $headingBorderRadiusUnits['Mobile'];
/** End Heading Border Radius */

$headingPaddingUnits = isset($block_attributes['headingPaddingUnits']) ? $block_attributes['headingPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingDesktopPadding = isset($block_attributes['headingDesktopPadding']) ? $block_attributes['headingDesktopPadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingTabPadding = isset($block_attributes['headingTabPadding']) ? $block_attributes['headingTabPadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingMobilePadding = isset($block_attributes['headingMobilePadding']) ? $block_attributes['headingMobilePadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default padding for Heading */
$headingDesktopPaddingWidth = $headingDesktopPadding['top'] . $headingPaddingUnits['Desktop'] . ' ' . $headingDesktopPadding['right'] . $headingPaddingUnits['Desktop'] . ' ' . $headingDesktopPadding['bottom'] . $headingPaddingUnits['Desktop'] . ' ' . $headingDesktopPadding['left'] . $headingPaddingUnits['Desktop'];
$headingTabletPaddingWidth = $headingTabPadding['top'] . $headingPaddingUnits['Tablet'] . ' ' . $headingTabPadding['right'] . $headingPaddingUnits['Tablet'] . ' ' . $headingTabPadding['bottom'] . $headingPaddingUnits['Tablet'] . ' ' . $headingTabPadding['left'] . $headingPaddingUnits['Tablet'];
$headingMobilePaddingWidth = $headingMobilePadding['top'] . $headingPaddingUnits['Mobile'] . ' ' . $headingMobilePadding['right'] . $headingPaddingUnits['Mobile'] . ' ' . $headingMobilePadding['bottom'] . $headingPaddingUnits['Mobile'] . ' ' . $headingMobilePadding['left'] . $headingPaddingUnits['Mobile'];
/** End Heading Padding */

$headingMarginUnits = isset($block_attributes['headingMarginUnits']) ? $block_attributes['headingMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingDesktopMargin = isset($block_attributes['headingDesktopMargin']) ? $block_attributes['headingDesktopMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingTabMargin = isset($block_attributes['headingTabMargin']) ? $block_attributes['headingTabMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingMobileMargin = isset($block_attributes['headingMobileMargin']) ? $block_attributes['headingMobileMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default margin for Heading */
$headingDesktopMarginWidth = $headingDesktopMargin['top'] . $headingMarginUnits['Desktop'] . ' ' . $headingDesktopMargin['right'] . $headingMarginUnits['Desktop'] . ' ' . $headingDesktopMargin['bottom'] . $headingMarginUnits['Desktop'] . ' ' . $headingDesktopMargin['left'] . $headingMarginUnits['Desktop'];
$headingTabletMarginWidth = $headingTabMargin['top'] . $headingMarginUnits['Tablet'] . ' ' . $headingTabMargin['right'] . $headingMarginUnits['Tablet'] . ' ' . $headingTabMargin['bottom'] . $headingMarginUnits['Tablet'] . ' ' . $headingTabMargin['left'] . $headingMarginUnits['Tablet'];
$headingMobileMarginWidth = $headingMobileMargin['top'] . $headingMarginUnits['Mobile'] . ' ' . $headingMobileMargin['right'] . $headingMarginUnits['Mobile'] . ' ' . $headingMobileMargin['bottom'] . $headingMarginUnits['Mobile'] . ' ' . $headingMobileMargin['left'] . $headingMarginUnits['Mobile'];
/** End Heading Margin */

$headingZIndex = isset($block_attributes['headingZIndex']) ? $block_attributes['headingZIndex'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$headingZIndexUnits = isset($block_attributes['headingZIndexUnits']) ? $block_attributes['headingZIndexUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Generate CSS content
$css_content = "

	.${blockId}.fb-advanced-wrapper .fb-advanced {
		" . ($headingColor ? "color: $headingColor;" : "") . "
		" . ($headingBackgroundColor ? "background-color: $headingBackgroundColor;" : "") . "
		" . ($headingFontFamily ? "font-family: $headingFontFamily;" : "") . "
		" . ($headingFontSize['Desktop'] && $headingFontSizeUnits['Desktop'] ? "font-size: {$headingFontSize['Desktop']}{$headingFontSizeUnits['Desktop']};" : "") . "
		" . ($headingFontWeight ? "font-weight: $headingFontWeight;" : "") . "
		" . ($headingFontStyle ? "font-style: $headingFontStyle;" : "") . "
		" . ($headingTextTransform ? "text-transform: $headingTextTransform;" : "") . "
		" . ($headingTextDecoration ? "text-decoration: $headingTextDecoration;" : "") . "
		" . ($headingLetterSpacing['Desktop'] && $headingLetterSpacingUnits['Desktop'] ? "letter-spacing: {$headingLetterSpacing['Desktop']}{$headingLetterSpacingUnits['Desktop']};" : "") . "
		" . ($headingLineHeight['Desktop'] && $headingLineHeightUnits['Desktop'] ? "line-height: {$headingLineHeight['Desktop']}{$headingLineHeightUnits['Desktop']};" : "") . "
		" . ($headingDesktopPaddingWidth ? "padding: $headingDesktopPaddingWidth;" : "") . "
		" . ($headingDesktopMarginWidth ? "margin: $headingDesktopMarginWidth;" : "") . "
		" . ($headingBorder ? "border: $headingBorder;" : "") . "
		" . ($headingDesktopBorderWidth ? "border-width: $headingDesktopBorderWidth;" : "") . "
		" . ($headingDesktopBorderRadiusWidth ? "border-radius: $headingDesktopBorderRadiusWidth;" : "") . "
		" . ($headingBorderColor ? "border-color: $headingBorderColor;" : "") . "
		transition: all .3s ease-in-out;
		" . ($headingZIndex['Desktop'] && $headingZIndexUnits['Desktop'] ? "z-index: {$headingZIndex['Desktop']}{$headingZIndexUnits['Desktop']};" : "") . "
	}
	.${blockId}.fb-advanced-wrapper .fb-advanced:hover {
		" . ($headingHoverColor !== null ? "color: $headingHoverColor;" : "") . "
		" . ($headingBorderHoverColor ? "border-color: $headingBorderHoverColor;" : "") . "
	}

	.${blockId}.fb-advanced-wrapper .fb-advanced-title-separator {
		display: inline-block;
		margin: 0 0 10px 0;
		width: 12%;
		margin-bottom: 15px;
		border-top: 2px ${separator} #0170b9;
	}

	@media only screen and (max-width: 1024px) {
		.${blockId}.fb-advanced-wrapper .fb-advanced {
			" . ($headingTabletPaddingWidth ? "padding: $headingTabletPaddingWidth;" : "") . "
			" . ($headingTabletMarginWidth ? "margin: $headingTabletMarginWidth;" : "") . "
			" . ($headingTabletBorderWidth ? "border-width: $headingTabletBorderWidth;" : "") . "
			" . ($headingTabletBorderRadiusWidth ? "border-radius: $headingTabletBorderRadiusWidth;" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.${blockId}.fb-advanced-wrapper .fb-advanced {
			" . ($headingMobilePaddingWidth ? "padding: $headingMobilePaddingWidth;" : "") . "
			" . ($headingMobileMarginWidth ? "margin: $headingMobileMarginWidth;" : "") . "
			" . ($headingMobileBorderWidth ? "border-width: $headingMobileBorderWidth;" : "") . "
			" . ($headingMobileBorderRadiusWidth ? "border-radius: $headingMobileBorderRadiusWidth;" : "") . "
		}
	}

";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockId);
