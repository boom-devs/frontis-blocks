<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';

/** Start Heading */
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
$headingFontWeight = isset($block_attributes['headingFontWeight']) ? sanitize_text_field($block_attributes['headingFontWeight']) : '600';
$headingFontStyle = isset($block_attributes['headingFontStyle']) ? sanitize_text_field($block_attributes['headingFontStyle']) : '';
$headingTextTransform = isset($block_attributes['headingTextTransform']) ? sanitize_text_field($block_attributes['headingTextTransform']) : '';
$headingTextDecoration = isset($block_attributes['headingTextDecoration']) ? sanitize_text_field($block_attributes['headingTextDecoration']) : '';
$headingLetterSpacing = isset($block_attributes['headingLetterSpacing']) ? $block_attributes['headingLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$headingLineHeight = isset($block_attributes['headingLineHeight']) ? $block_attributes['headingLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$headingLetterSpacingUnits = isset($block_attributes['headingLetterSpacingUnits']) ? $block_attributes['headingLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingLineHeightUnits = isset($block_attributes['headingLineHeightUnits']) ? $block_attributes['headingLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$headingColor = isset($block_attributes['headingColor']) ? sanitize_text_field($block_attributes['headingColor']) : '';
$headingHoverColor = isset($block_attributes['headingHoverColor']) ? sanitize_text_field($block_attributes['headingHoverColor']) : '';
$headingBgColor = isset($block_attributes['headingBgColor']) ? sanitize_text_field($block_attributes['headingBgColor']) : '';
$headingBgColorHover = isset($block_attributes['headingBgColorHover']) ? sanitize_text_field($block_attributes['headingBgColorHover']) : '';	
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
$headingDesktopMargin = isset($block_attributes['headingDesktopMargin']) ? $block_attributes['headingDesktopMargin'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$headingTabMargin = isset($block_attributes['headingTabMargin']) ? $block_attributes['headingTabMargin'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$headingMobileMargin = isset($block_attributes['headingMobileMargin']) ? $block_attributes['headingMobileMargin'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
/** Default margin for Heading */
$headingDesktopMarginWidth = $headingDesktopMargin['top'] . $headingMarginUnits['Desktop'] . ' ' . $headingDesktopMargin['right'] . $headingMarginUnits['Desktop'] . ' ' . $headingDesktopMargin['bottom'] . $headingMarginUnits['Desktop'] . ' ' . $headingDesktopMargin['left'] . $headingMarginUnits['Desktop'];
$headingTabletMarginWidth = $headingTabMargin['top'] . $headingMarginUnits['Tablet'] . ' ' . $headingTabMargin['right'] . $headingMarginUnits['Tablet'] . ' ' . $headingTabMargin['bottom'] . $headingMarginUnits['Tablet'] . ' ' . $headingTabMargin['left'] . $headingMarginUnits['Tablet'];
$headingMobileMarginWidth = $headingMobileMargin['top'] . $headingMarginUnits['Mobile'] . ' ' . $headingMobileMargin['right'] . $headingMarginUnits['Mobile'] . ' ' . $headingMobileMargin['bottom'] . $headingMarginUnits['Mobile'] . ' ' . $headingMobileMargin['left'] . $headingMarginUnits['Mobile'];
/** End Heading Margin */


$headingTextShadowCssValue = isset($block_attributes['headingTextShadowCssValue']) ? sanitize_text_field($block_attributes['headingTextShadowCssValue']) : '';
$headingTextStroke = isset($block_attributes['headingTextStroke']) ? sanitize_text_field($block_attributes['headingTextStroke']) : '';
$headingTextStrokeColorSwitcher = isset($block_attributes['headingTextStrokeColorSwitcher']) ? sanitize_text_field($block_attributes['headingTextStrokeColorSwitcher']) : 'normal';
$headingTextStrokeColor = isset($block_attributes['headingTextStrokeColor']) ? sanitize_text_field($block_attributes['headingTextStrokeColor']) : '#399CFF';
$headingTextStrokeHoverColor = isset($block_attributes['headingTextStrokeHoverColor']) ? sanitize_text_field($block_attributes['headingTextStrokeHoverColor']) : '#399CFF';
$headingBoxShadowCssValue = isset($block_attributes['headingBoxShadowCssValue']) ? sanitize_text_field($block_attributes['headingBoxShadowCssValue']) : '';
$headingBackgroundImageEnabled = isset($block_attributes['headingBackgroundImageEnabled']) ? rest_sanitize_boolean($block_attributes['headingBackgroundImageEnabled']) : false;
$headingBackgroundImageUrl = isset($block_attributes['headingBackgroundImageUrl']) ? sanitize_text_field($block_attributes['headingBackgroundImageUrl']) : '';
/** End Heading */


/** Start Sub Heading */
$subHeadingSwitcher = isset($block_attributes['subHeadingSwitcher']) ? rest_sanitize_boolean($block_attributes['subHeadingSwitcher']) : false;
$subHeadingText = isset($block_attributes['subHeadingText']) ? sanitize_text_field($block_attributes['subHeadingText']) : '';
$subHeadingTag = isset($block_attributes['subHeadingTag']) ? sanitize_text_field($block_attributes['subHeadingTag']) : 'p';
$subHeadingPosition = isset($block_attributes['subHeadingPosition']) ? sanitize_text_field($block_attributes['subHeadingPosition']) : 'bottom';

$subHeadingFontFamily = isset($block_attributes['subHeadingFontFamily']) ? sanitize_text_field($block_attributes['subHeadingFontFamily']) : 'inherit';
$subHeadingFontSize = isset($block_attributes['subHeadingFontSize']) ? $block_attributes['subHeadingFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$subHeadingFontSizeUnits = isset($block_attributes['subHeadingFontSizeUnits']) ? $block_attributes['subHeadingFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$subHeadingFontWeight = isset($block_attributes['subHeadingFontWeight']) ? sanitize_text_field($block_attributes['subHeadingFontWeight']) : '';
$subHeadingFontStyle = isset($block_attributes['subHeadingFontStyle']) ? sanitize_text_field($block_attributes['subHeadingFontStyle']) : '';
$subHeadingTextTransform = isset($block_attributes['subHeadingTextTransform']) ? sanitize_text_field($block_attributes['subHeadingTextTransform']) : '';
$subHeadingTextDecoration = isset($block_attributes['subHeadingTextDecoration']) ? sanitize_text_field($block_attributes['subHeadingTextDecoration']) : '';
$subHeadingLetterSpacing = isset($block_attributes['subHeadingLetterSpacing']) ? $block_attributes['subHeadingLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$subHeadingLetterSpacingUnits = isset($block_attributes['subHeadingLetterSpacingUnits']) ? $block_attributes['subHeadingLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$subHeadingLineHeight = isset($block_attributes['subHeadingLineHeight']) ? $block_attributes['subHeadingLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$subHeadingLineHeightUnits = isset($block_attributes['subHeadingLineHeightUnits']) ? $block_attributes['subHeadingLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$subHeadingTextShadowValues = isset($block_attributes['subHeadingTextShadowValues']) ? $block_attributes['subHeadingTextShadowValues'] : array();
$subHeadingTextShadowCssValue = isset($block_attributes['subHeadingTextShadowCssValue']) ? sanitize_text_field($block_attributes['subHeadingTextShadowCssValue']) : '';
$subHeadingTextStroke = isset($block_attributes['subHeadingTextStroke']) ? intval($block_attributes['subHeadingTextStroke']) : 0;

$subHeadingColorSwitcher = isset($block_attributes['subHeadingColorSwitcher']) ? sanitize_text_field($block_attributes['subHeadingColorSwitcher']) : 'normal';
$subHeadingColor = isset($block_attributes['subHeadingColor']) ? sanitize_text_field($block_attributes['subHeadingColor']) : '';
$subHeadingHoverColor = isset($block_attributes['subHeadingHoverColor']) ? sanitize_text_field($block_attributes['subHeadingHoverColor']) : '';
$subHeadingBgColorSwitcher = isset($block_attributes['subHeadingBgColorSwitcher']) ? sanitize_text_field($block_attributes['subHeadingBgColorSwitcher']) : 'normal';
$subHeadingBgColor = isset($block_attributes['subHeadingBgColor']) ? sanitize_text_field($block_attributes['subHeadingBgColor']) : '';
$subHeadingBgColorHover = isset($block_attributes['subHeadingBgColorHover']) ? sanitize_text_field($block_attributes['subHeadingBgColorHover']) : '';

$subHeadingBorder = isset($block_attributes['subHeadingBorder']) ? sanitize_text_field($block_attributes['subHeadingBorder']) : 'none';
$subHeadingBorderColorSwitcher = isset($block_attributes['subHeadingBorderColorSwitcher']) ? sanitize_text_field($block_attributes['subHeadingBorderColorSwitcher']) : 'normal';
$subHeadingBorderColor = isset($block_attributes['subHeadingBorderColor']) ? sanitize_text_field($block_attributes['subHeadingBorderColor']) : '';
$subHeadingBorderHoverColor = isset($block_attributes['subHeadingBorderHoverColor']) ? sanitize_text_field($block_attributes['subHeadingBorderHoverColor']) : '';

$subHeadingBorderUnits = isset($block_attributes['subHeadingBorderUnits']) ? $block_attributes['subHeadingBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$subHeadingDesktopBorder = isset($block_attributes['subHeadingDesktopBorder']) ? $block_attributes['subHeadingDesktopBorder'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$subHeadingTabBorder = isset($block_attributes['subHeadingTabBorder']) ? $block_attributes['subHeadingTabBorder'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$subHeadingMobileBorder = isset($block_attributes['subHeadingMobileBorder']) ? $block_attributes['subHeadingMobileBorder'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default border for Sub Heading */
$subHeadingDesktopBorderWidth = $subHeadingDesktopBorder['top'] . $subHeadingBorderUnits['Desktop'] . ' ' . $subHeadingDesktopBorder['right'] . $subHeadingBorderUnits['Desktop'] . ' ' . $subHeadingDesktopBorder['bottom'] . $subHeadingBorderUnits['Desktop'] . ' ' . $subHeadingDesktopBorder['left'] . $subHeadingBorderUnits['Desktop'];
$subHeadingTabletBorderWidth = $subHeadingTabBorder['top'] . $subHeadingBorderUnits['Tablet'] . ' ' . $subHeadingTabBorder['right'] . $subHeadingBorderUnits['Tablet'] . ' ' . $subHeadingTabBorder['bottom'] . $subHeadingBorderUnits['Tablet'] . ' ' . $subHeadingTabBorder['left'] . $subHeadingBorderUnits['Tablet'];
$subHeadingMobileBorderWidth = $subHeadingMobileBorder['top'] . $subHeadingBorderUnits['Mobile'] . ' ' . $subHeadingMobileBorder['right'] . $subHeadingBorderUnits['Mobile'] . ' ' . $subHeadingMobileBorder['bottom'] . $subHeadingBorderUnits['Mobile'] . ' ' . $subHeadingMobileBorder['left'] . $subHeadingBorderUnits['Mobile'];
/** End Sub Heading Border */

$subHeadingBorderRadiusUnits = isset($block_attributes['subHeadingBorderRadiusUnits']) ? $block_attributes['subHeadingBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$subHeadingDesktopBorderRadius = isset($block_attributes['subHeadingDesktopBorderRadius']) ? $block_attributes['subHeadingDesktopBorderRadius'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$subHeadingTabBorderRadius = isset($block_attributes['subHeadingTabBorderRadius']) ? $block_attributes['subHeadingTabBorderRadius'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$subHeadingMobileBorderRadius = isset($block_attributes['subHeadingMobileBorderRadius']) ? $block_attributes['subHeadingMobileBorderRadius'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default border radius for Sub Heading */
$subHeadingDesktopBorderRadiusWidth = $subHeadingDesktopBorderRadius['top'] . $subHeadingBorderRadiusUnits['Desktop'] . ' ' . $subHeadingDesktopBorderRadius['right'] . $subHeadingBorderRadiusUnits['Desktop'] . ' ' . $subHeadingDesktopBorderRadius['bottom'] . $subHeadingBorderRadiusUnits['Desktop'] . ' ' . $subHeadingDesktopBorderRadius['left'] . $subHeadingBorderRadiusUnits['Desktop'];
$subHeadingTabletBorderRadiusWidth = $subHeadingTabBorderRadius['top'] . $subHeadingBorderRadiusUnits['Tablet'] . ' ' . $subHeadingTabBorderRadius['right'] . $subHeadingBorderRadiusUnits['Tablet'] . ' ' . $subHeadingTabBorderRadius['bottom'] . $subHeadingBorderRadiusUnits['Tablet'] . ' ' . $subHeadingTabBorderRadius['left'] . $subHeadingBorderRadiusUnits['Tablet'];
$subHeadingMobileBorderRadiusWidth = $subHeadingMobileBorderRadius['top'] . $subHeadingBorderRadiusUnits['Mobile'] . ' ' . $subHeadingMobileBorderRadius['right'] . $subHeadingBorderRadiusUnits['Mobile'] . ' ' . $subHeadingMobileBorderRadius['bottom'] . $subHeadingBorderRadiusUnits['Mobile'] . ' ' . $subHeadingMobileBorderRadius['left'] . $subHeadingBorderRadiusUnits['Mobile'];
/** End Sub Heading Border Radius */

$subHeadingBoxShadowValues = isset($block_attributes['subHeadingBoxShadowValues']) ? $block_attributes['subHeadingBoxShadowValues'] : array();
$subHeadingBoxShadowCssValue = isset($block_attributes['subHeadingBoxShadowCssValue']) ? sanitize_text_field($block_attributes['subHeadingBoxShadowCssValue']) : '';

$subHeadingPaddingUnits = isset($block_attributes['subHeadingPaddingUnits']) ? $block_attributes['subHeadingPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$subHeadingDesktopPadding = isset($block_attributes['subHeadingDesktopPadding']) ? $block_attributes['subHeadingDesktopPadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$subHeadingTabPadding = isset($block_attributes['subHeadingTabPadding']) ? $block_attributes['subHeadingTabPadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$subHeadingMobilePadding = isset($block_attributes['subHeadingMobilePadding']) ? $block_attributes['subHeadingMobilePadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default padding for Sub Heading */
$subHeadingDesktopPaddingWidth = $subHeadingDesktopPadding['top'] . $subHeadingPaddingUnits['Desktop'] . ' ' . $subHeadingDesktopPadding['right'] . $subHeadingPaddingUnits['Desktop'] . ' ' . $subHeadingDesktopPadding['bottom'] . $subHeadingPaddingUnits['Desktop'] . ' ' . $subHeadingDesktopPadding['left'] . $subHeadingPaddingUnits['Desktop'];
$subHeadingTabletPaddingWidth = $subHeadingTabPadding['top'] . $subHeadingPaddingUnits['Tablet'] . ' ' . $subHeadingTabPadding['right'] . $subHeadingPaddingUnits['Tablet'] . ' ' . $subHeadingTabPadding['bottom'] . $subHeadingPaddingUnits['Tablet'] . ' ' . $subHeadingTabPadding['left'] . $subHeadingPaddingUnits['Tablet'];
$subHeadingMobilePaddingWidth = $subHeadingMobilePadding['top'] . $subHeadingPaddingUnits['Mobile'] . ' ' . $subHeadingMobilePadding['right'] . $subHeadingPaddingUnits['Mobile'] . ' ' . $subHeadingMobilePadding['bottom'] . $subHeadingPaddingUnits['Mobile'] . ' ' . $subHeadingMobilePadding['left'] . $subHeadingPaddingUnits['Mobile'];
/** End Sub Heading Padding */


$subHeadingMarginUnits = isset($block_attributes['subHeadingMarginUnits']) ? $block_attributes['subHeadingMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$subHeadingDesktopMargin = isset($block_attributes['subHeadingDesktopMargin']) ? $block_attributes['subHeadingDesktopMargin'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$subHeadingTabMargin = isset($block_attributes['subHeadingTabMargin']) ? $block_attributes['subHeadingTabMargin'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$subHeadingMobileMargin = isset($block_attributes['subHeadingMobileMargin']) ? $block_attributes['subHeadingMobileMargin'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
/** Default margin for Sub Heading */
$subHeadingDesktopMarginWidth = $subHeadingDesktopMargin['top'] . $subHeadingMarginUnits['Desktop'] . ' ' . $subHeadingDesktopMargin['right'] . $subHeadingMarginUnits['Desktop'] . ' ' . $subHeadingDesktopMargin['bottom'] . $subHeadingMarginUnits['Desktop'] . ' ' . $subHeadingDesktopMargin['left'] . $subHeadingMarginUnits['Desktop'];
$subHeadingTabletMarginWidth = $subHeadingTabMargin['top'] . $subHeadingMarginUnits['Tablet'] . ' ' . $subHeadingTabMargin['right'] . $subHeadingMarginUnits['Tablet'] . ' ' . $subHeadingTabMargin['bottom'] . $subHeadingMarginUnits['Tablet'] . ' ' . $subHeadingTabMargin['left'] . $subHeadingMarginUnits['Tablet'];
$subHeadingMobileMarginWidth = $subHeadingMobileMargin['top'] . $subHeadingMarginUnits['Mobile'] . ' ' . $subHeadingMobileMargin['right'] . $subHeadingMarginUnits['Mobile'] . ' ' . $subHeadingMobileMargin['bottom'] . $subHeadingMarginUnits['Mobile'] . ' ' . $subHeadingMobileMargin['left'] . $subHeadingMarginUnits['Mobile'];
/** End Sub Heading Margin */
/** End Sub Heading */

/** Start Icon */
$headingIconSwitcher = isset($block_attributes['headingIconSwitcher']) ? rest_sanitize_boolean($block_attributes['headingIconSwitcher']) : false;
$headingIconAlign = isset($block_attributes['headingIconAlign']) ? sanitize_text_field($block_attributes['headingIconAlign']) : 'icon';
$headingIcon = isset($block_attributes['headingIcon']) ? sanitize_text_field($block_attributes['headingIcon']) : 'check';
$headingIconSize = isset($block_attributes['headingIconSize']) ? $block_attributes['headingIconSize'] : array('Desktop' => '30', 'Tablet' => '30', 'Mobile' => '30');
$headingIconSizeUnits = isset($block_attributes['headingIconSizeUnits']) ? $block_attributes['headingIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingIconBgSize = isset($block_attributes['headingIconBgSize']) ? $block_attributes['headingIconBgSize'] : array('Desktop' => '50', 'Tablet' => '50', 'Mobile' => '50');
$headingIconBgSizeUnits = isset($block_attributes['headingIconBgSizeUnits']) ? $block_attributes['headingIconBgSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingIconColorSwitcher = isset($block_attributes['headingIconColorSwitcher']) ? sanitize_text_field($block_attributes['headingIconColorSwitcher']) : 'normal';
$headingIconColor = isset($block_attributes['headingIconColor']) ? sanitize_text_field($block_attributes['headingIconColor']) : '#399CFF';
$headingIconHoverColor = isset($block_attributes['headingIconHoverColor']) ? sanitize_text_field($block_attributes['headingIconHoverColor']) : '#399CFF';
$headingIconBgColorSwitcher = isset($block_attributes['headingIconBgColorSwitcher']) ? sanitize_text_field($block_attributes['headingIconBgColorSwitcher']) : 'normal';
$headingIconBgColor = isset($block_attributes['headingIconBgColor']) ? sanitize_text_field($block_attributes['headingIconBgColor']) : '';
$headingIconBgHoverColor = isset($block_attributes['headingIconBgHoverColor']) ? sanitize_text_field($block_attributes['headingIconBgHoverColor']) : '';
$headingIconBorder = isset($block_attributes['headingIconBorder']) ? sanitize_text_field($block_attributes['headingIconBorder']) : 'none';
$headingIconBorderColorSwitcher = isset($block_attributes['headingIconBorderColorSwitcher']) ? sanitize_text_field($block_attributes['headingIconBorderColorSwitcher']) : 'normal';
$headingIconBorderColor = isset($block_attributes['headingIconBorderColor']) ? sanitize_text_field($block_attributes['headingIconBorderColor']) : '';
$headingIconBorderHoverColor = isset($block_attributes['headingIconBorderHoverColor']) ? sanitize_text_field($block_attributes['headingIconBorderHoverColor']) : '';

$headingIconBorderUnits = isset($block_attributes['headingIconBorderUnits']) ? $block_attributes['headingIconBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingIconBorderDesktop = isset($block_attributes['headingIconBorderDesktop']) ? $block_attributes['headingIconBorderDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingIconBorderTablet = isset($block_attributes['headingIconBorderTablet']) ? $block_attributes['headingIconBorderTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingIconBorderMobile = isset($block_attributes['headingIconBorderMobile']) ? $block_attributes['headingIconBorderMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Default border for Icon */
$headingIconDesktopBorderWidthValue = $headingIconBorderDesktop['top'] . $headingIconBorderUnits['Desktop'] . ' ' . $headingIconBorderDesktop['right'] . $headingIconBorderUnits['Desktop'] . ' ' . $headingIconBorderDesktop['bottom'] . $headingIconBorderUnits['Desktop'] . ' ' . $headingIconBorderDesktop['left'] . $headingIconBorderUnits['Desktop'];
$headingIconTabletBorderWidthValue = $headingIconBorderTablet['top'] . $headingIconBorderUnits['Tablet'] . ' ' . $headingIconBorderTablet['right'] . $headingIconBorderUnits['Tablet'] . ' ' . $headingIconBorderTablet['bottom'] . $headingIconBorderUnits['Tablet'] . ' ' . $headingIconBorderTablet['left'] . $headingIconBorderUnits['Tablet'];
$headingIconMobileBorderWidthValue = $headingIconBorderMobile['top'] . $headingIconBorderUnits['Mobile'] . ' ' . $headingIconBorderMobile['right'] . $headingIconBorderUnits['Mobile'] . ' ' . $headingIconBorderMobile['bottom'] . $headingIconBorderUnits['Mobile'] . ' ' . $headingIconBorderMobile['left'] . $headingIconBorderUnits['Mobile'];
/** End Icon Border */


$headingIconBorderRadiusUnits = isset($block_attributes['headingIconBorderRadiusUnits']) ? $block_attributes['headingIconBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingIconBorderRadiusDesktop = isset($block_attributes['headingIconBorderRadiusDesktop']) ? $block_attributes['headingIconBorderRadiusDesktop'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$headingIconBorderRadiusTablet = isset($block_attributes['headingIconBorderRadiusTablet']) ? $block_attributes['headingIconBorderRadiusTablet'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$headingIconBorderRadiusMobile = isset($block_attributes['headingIconBorderRadiusMobile']) ? $block_attributes['headingIconBorderRadiusMobile'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
/** Default border radius for Icon */
$headingIconDesktopBorderRadiusWidthValue = $headingIconBorderRadiusDesktop['top'] . $headingIconBorderRadiusUnits['Desktop'] . ' ' . $headingIconBorderRadiusDesktop['right'] . $headingIconBorderRadiusUnits['Desktop'] . ' ' . $headingIconBorderRadiusDesktop['bottom'] . $headingIconBorderRadiusUnits['Desktop'] . ' ' . $headingIconBorderRadiusDesktop['left'] . $headingIconBorderRadiusUnits['Desktop'];
$headingIconTabletBorderRadiusWidthValue = $headingIconBorderRadiusTablet['top'] . $headingIconBorderRadiusUnits['Tablet'] . ' ' . $headingIconBorderRadiusTablet['right'] . $headingIconBorderRadiusUnits['Tablet'] . ' ' . $headingIconBorderRadiusTablet['bottom'] . $headingIconBorderRadiusUnits['Tablet'] . ' ' . $headingIconBorderRadiusTablet['left'] . $headingIconBorderRadiusUnits['Tablet'];
$headingIconMobileBorderRadiusWidthValue = $headingIconBorderRadiusMobile['top'] . $headingIconBorderRadiusUnits['Mobile'] . ' ' . $headingIconBorderRadiusMobile['right'] . $headingIconBorderRadiusUnits['Mobile'] . ' ' . $headingIconBorderRadiusMobile['bottom'] . $headingIconBorderRadiusUnits['Mobile'] . ' ' . $headingIconBorderRadiusMobile['left'] . $headingIconBorderRadiusUnits['Mobile'];
/** End Icon Border Radius */

/** Start Separator */
$separator = isset($block_attributes['separator']) ? sanitize_text_field($block_attributes['separator']) : 'solid';
$showSeparatorSwitcher = isset($block_attributes['showSeparatorSwitcher']) ? rest_sanitize_boolean($block_attributes['showSeparatorSwitcher']) : false;
$separatorPosition = isset($block_attributes['separatorPosition']) ? sanitize_text_field($block_attributes['separatorPosition']) : 'bottom';
$separatorColorSwitcher = isset($block_attributes['separatorColorSwitcher']) ? sanitize_text_field($block_attributes['separatorColorSwitcher']) : 'normal';
$separatorColor = isset($block_attributes['separatorColor']) ? sanitize_text_field($block_attributes['separatorColor']) : '#399CFF';
$separatorHoverColor = isset($block_attributes['separatorHoverColor']) ? sanitize_text_field($block_attributes['separatorHoverColor']) : '#399CFF';
$separatorWidth = isset($block_attributes['separatorWidth']) ? $block_attributes['separatorWidth'] : array('Desktop' => '12', 'Tablet' => '12', 'Mobile' => '12');
$separatorWidthUnits = isset($block_attributes['separatorWidthUnits']) ? $block_attributes['separatorWidthUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
$separatorHeight = isset($block_attributes['separatorHeight']) ? $block_attributes['separatorHeight'] : array('Desktop' => '2', 'Tablet' => '2', 'Mobile' => '2');
$separatorHeightUnits = isset($block_attributes['separatorHeightUnits']) ? $block_attributes['separatorHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$separatorSpacing = isset($block_attributes['separatorSpacing']) ? $block_attributes['separatorSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$separatorSpacingUnits = isset($block_attributes['separatorSpacingUnits']) ? $block_attributes['separatorSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
/** End Separator */

/** Start Global Setting */
$headingGlobalZIndex = isset($block_attributes['headingGlobalZIndex']) ? intval($block_attributes['headingGlobalZIndex']) : null;
$headingGlobalPaddingUnits = isset($block_attributes['headingGlobalPaddingUnits']) ? $block_attributes['headingGlobalPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingGlobalPaddingDesktop = isset($block_attributes['headingGlobalPaddingDesktop']) ? $block_attributes['headingGlobalPaddingDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalPaddingTablet = isset($block_attributes['headingGlobalPaddingTablet']) ? $block_attributes['headingGlobalPaddingTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalPaddingMobile = isset($block_attributes['headingGlobalPaddingMobile']) ? $block_attributes['headingGlobalPaddingMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

/** Default padding for Global */
$globalDesktopPadding = $headingGlobalPaddingDesktop['top'] . $headingGlobalPaddingUnits['Desktop'] . ' ' . $headingGlobalPaddingDesktop['right'] . $headingGlobalPaddingUnits['Desktop'] . ' ' . $headingGlobalPaddingDesktop['bottom'] . $headingGlobalPaddingUnits['Desktop'] . ' ' . $headingGlobalPaddingDesktop['left'] . $headingGlobalPaddingUnits['Desktop'];
$globalTabletPadding = $headingGlobalPaddingTablet['top'] . $headingGlobalPaddingUnits['Tablet'] . ' ' . $headingGlobalPaddingTablet['right'] . $headingGlobalPaddingUnits['Tablet'] . ' ' . $headingGlobalPaddingTablet['bottom'] . $headingGlobalPaddingUnits['Tablet'] . ' ' . $headingGlobalPaddingTablet['left'] . $headingGlobalPaddingUnits['Tablet'];
$globalMobilePadding = $headingGlobalPaddingMobile['top'] . $headingGlobalPaddingUnits['Mobile'] . ' ' . $headingGlobalPaddingMobile['right'] . $headingGlobalPaddingUnits['Mobile'] . ' ' . $headingGlobalPaddingMobile['bottom'] . $headingGlobalPaddingUnits['Mobile'] . ' ' . $headingGlobalPaddingMobile['left'] . $headingGlobalPaddingUnits['Mobile'];
/** End Global Padding */

$headingGlobalMarginUnits = isset($block_attributes['headingGlobalMarginUnits']) ? $block_attributes['headingGlobalMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingGlobalMarginDesktop = isset($block_attributes['headingGlobalMarginDesktop']) ? $block_attributes['headingGlobalMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalMarginTablet = isset($block_attributes['headingGlobalMarginTablet']) ? $block_attributes['headingGlobalMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalMarginMobile = isset($block_attributes['headingGlobalMarginMobile']) ? $block_attributes['headingGlobalMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

/** Default margin for Global */
$globalDesktopMargin = $headingGlobalMarginDesktop['top'] . $headingGlobalMarginUnits['Desktop'] . ' ' . $headingGlobalMarginDesktop['right'] . $headingGlobalMarginUnits['Desktop'] . ' ' . $headingGlobalMarginDesktop['bottom'] . $headingGlobalMarginUnits['Desktop'] . ' ' . $headingGlobalMarginDesktop['left'] . $headingGlobalMarginUnits['Desktop'];
$globalTabletMargin = $headingGlobalMarginTablet['top'] . $headingGlobalMarginUnits['Tablet'] . ' ' . $headingGlobalMarginTablet['right'] . $headingGlobalMarginUnits['Tablet'] . ' ' . $headingGlobalMarginTablet['bottom'] . $headingGlobalMarginUnits['Tablet'] . ' ' . $headingGlobalMarginTablet['left'] . $headingGlobalMarginUnits['Tablet'];
$globalMobileMargin = $headingGlobalMarginMobile['top'] . $headingGlobalMarginUnits['Mobile'] . ' ' . $headingGlobalMarginMobile['right'] . $headingGlobalMarginUnits['Mobile'] . ' ' . $headingGlobalMarginMobile['bottom'] . $headingGlobalMarginUnits['Mobile'] . ' ' . $headingGlobalMarginMobile['left'] . $headingGlobalMarginUnits['Mobile'];
/** End Global Margin */

$headingGlobalBgColorSwitcher = isset($block_attributes['headingGlobalBgColorSwitcher']) ? sanitize_text_field($block_attributes['headingGlobalBgColorSwitcher']) : 'normal';
$headingGlobalBgColor = isset($block_attributes['headingGlobalBgColor']) ? sanitize_text_field($block_attributes['headingGlobalBgColor']) : '';
$headingGlobalBgHoverColor = isset($block_attributes['headingGlobalBgHoverColor']) ? sanitize_text_field($block_attributes['headingGlobalBgHoverColor']) : '';

$headingGlobalBorder = isset($block_attributes['headingGlobalBorder']) ? sanitize_text_field($block_attributes['headingGlobalBorder']) : 'none';
$headingGlobalBorderColorSwitcher = isset($block_attributes['headingGlobalBorderColorSwitcher']) ? sanitize_text_field($block_attributes['headingGlobalBorderColorSwitcher']) : 'normal';
$headingGlobalBorderColor = isset($block_attributes['headingGlobalBorderColor']) ? sanitize_text_field($block_attributes['headingGlobalBorderColor']) : '';
$headingGlobalBorderHoverColor = isset($block_attributes['headingGlobalBorderHoverColor']) ? sanitize_text_field($block_attributes['headingGlobalBorderHoverColor']) : '';


$headingGlobalBorderUnits = isset($block_attributes['headingGlobalBorderUnits']) ? $block_attributes['headingGlobalBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingGlobalBorderDesktop = isset($block_attributes['headingGlobalBorderDesktop']) ? $block_attributes['headingGlobalBorderDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalBorderTablet = isset($block_attributes['headingGlobalBorderTablet']) ? $block_attributes['headingGlobalBorderTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalBorderMobile = isset($block_attributes['headingGlobalBorderMobile']) ? $block_attributes['headingGlobalBorderMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

/** Default border width for Global */
$globalDesktopBorderWidth = $headingGlobalBorderDesktop['top'] . $headingGlobalBorderUnits['Desktop'] . ' ' . $headingGlobalBorderDesktop['right'] . $headingGlobalBorderUnits['Desktop'] . ' ' . $headingGlobalBorderDesktop['bottom'] . $headingGlobalBorderUnits['Desktop'] . ' ' . $headingGlobalBorderDesktop['left'] . $headingGlobalBorderUnits['Desktop'];
$globalTabletBorderWidth = $headingGlobalBorderTablet['top'] . $headingGlobalBorderUnits['Tablet'] . ' ' . $headingGlobalBorderTablet['right'] . $headingGlobalBorderUnits['Tablet'] . ' ' . $headingGlobalBorderTablet['bottom'] . $headingGlobalBorderUnits['Tablet'] . ' ' . $headingGlobalBorderTablet['left'] . $headingGlobalBorderUnits['Tablet'];
$globalMobileBorderWidth = $headingGlobalBorderMobile['top'] . $headingGlobalBorderUnits['Mobile'] . ' ' . $headingGlobalBorderMobile['right'] . $headingGlobalBorderUnits['Mobile'] . ' ' . $headingGlobalBorderMobile['bottom'] . $headingGlobalBorderUnits['Mobile'] . ' ' . $headingGlobalBorderMobile['left'] . $headingGlobalBorderUnits['Mobile'];
/** End Border */

$headingGlobalBorderRadiusUnits = isset($block_attributes['headingGlobalBorderRadiusUnits']) ? $block_attributes['headingGlobalBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$headingGlobalBorderRadiusDesktop = isset($block_attributes['headingGlobalBorderRadiusDesktop']) ? $block_attributes['headingGlobalBorderRadiusDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalBorderRadiusTablet = isset($block_attributes['headingGlobalBorderRadiusTablet']) ? $block_attributes['headingGlobalBorderRadiusTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$headingGlobalBorderRadiusMobile = isset($block_attributes['headingGlobalBorderRadiusMobile']) ? $block_attributes['headingGlobalBorderRadiusMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** End Global Border Radius */
$globalDesktopBorderRadiusWidth = $headingGlobalBorderRadiusDesktop['top'] . $headingGlobalBorderRadiusUnits['Desktop'] . ' ' . $headingGlobalBorderRadiusDesktop['right'] . $headingGlobalBorderRadiusUnits['Desktop'] . ' ' . $headingGlobalBorderRadiusDesktop['bottom'] . $headingGlobalBorderRadiusUnits['Desktop'] . ' ' . $headingGlobalBorderRadiusDesktop['left'] . $headingGlobalBorderRadiusUnits['Desktop'];
$globalTabletBorderRadiusWidth = $headingGlobalBorderRadiusTablet['top'] . $headingGlobalBorderRadiusUnits['Tablet'] . ' ' . $headingGlobalBorderRadiusTablet['right'] . $headingGlobalBorderRadiusUnits['Tablet'] . ' ' . $headingGlobalBorderRadiusTablet['bottom'] . $headingGlobalBorderRadiusUnits['Tablet'] . ' ' . $headingGlobalBorderRadiusTablet['left'] . $headingGlobalBorderRadiusUnits['Tablet'];
$globalMobileBorderRadiusWidth = $headingGlobalBorderRadiusMobile['top'] . $headingGlobalBorderRadiusUnits['Mobile'] . ' ' . $headingGlobalBorderRadiusMobile['right'] . $headingGlobalBorderRadiusUnits['Mobile'] . ' ' . $headingGlobalBorderRadiusMobile['bottom'] . $headingGlobalBorderRadiusUnits['Mobile'] . ' ' . $headingGlobalBorderRadiusMobile['left'] . $headingGlobalBorderRadiusUnits['Mobile'];
/** End Border Radius */

$headingGlobalBoxShadowValues = isset($block_attributes['headingGlobalBoxShadowValues']) ? $block_attributes['headingGlobalBoxShadowValues'] : array();
$headingGlobalBoxShadowCssValue = isset($block_attributes['headingGlobalBoxShadowCssValue']) ? sanitize_text_field($block_attributes['headingGlobalBoxShadowCssValue']) : '';
/** End Global Style */

// New attributes
$headingPresetStyle = isset($block_attributes['headingPresetStyle']) ? sanitize_text_field($block_attributes['headingPresetStyle']) : 'preset-0';
$activeLineSwitcher = isset($block_attributes['activeLineSwitcher']) ? rest_sanitize_boolean($block_attributes['activeLineSwitcher']) : false;
$activeLineAfterWidth = isset($block_attributes['activeLineAfterWidth']) ? $block_attributes['activeLineAfterWidth'] : array('Desktop' => '100', 'Tablet' => '100', 'Mobile' => '100');
$activeLineAfterWidthUnits = isset($block_attributes['activeLineAfterWidthUnits']) ? $block_attributes['activeLineAfterWidthUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
$activeLineAfterHeight = isset($block_attributes['activeLineAfterHeight']) ? $block_attributes['activeLineAfterHeight'] : array('Desktop' => '2', 'Tablet' => '2', 'Mobile' => '2');
$activeLineAfterHeightUnits = isset($block_attributes['activeLineAfterHeightUnits']) ? $block_attributes['activeLineAfterHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$activeLineAfterColor = isset($block_attributes['activeLineAfterColor']) ? sanitize_text_field($block_attributes['activeLineAfterColor']) : '#B0D7FF';
$activeLineBeforeWidth = isset($block_attributes['activeLineBeforeWidth']) ? $block_attributes['activeLineBeforeWidth'] : array('Desktop' => '30', 'Tablet' => '30', 'Mobile' => '30');
$activeLineBeforeWidthUnits = isset($block_attributes['activeLineBeforeWidthUnits']) ? $block_attributes['activeLineBeforeWidthUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
$activeLineBeforeHeight = isset($block_attributes['activeLineBeforeHeight']) ? $block_attributes['activeLineBeforeHeight'] : array('Desktop' => '3', 'Tablet' => '3', 'Mobile' => '3');
$activeLineBeforeHeightUnits = isset($block_attributes['activeLineBeforeHeightUnits']) ? $block_attributes['activeLineBeforeHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$activeLineBeforeColor = isset($block_attributes['activeLineBeforeColor']) ? sanitize_text_field($block_attributes['activeLineBeforeColor']) : '#399CFF';

// Generate CSS content
$css_content = "
    .${blockId}.fb-advanced-wrapper .fb-advanced-heading {
        " . ($headingColor ? "color: $headingColor;" : "") . "
        " . ($headingBgColor ? "background-color: $headingBgColor;" : "") . "
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
        " . ($headingTextShadowCssValue ? "text-shadow: $headingTextShadowCssValue;" : "") . "
        " . ($headingTextStroke ? "
            -webkit-text-stroke: {$headingTextStroke}px {$headingTextStrokeColor};
            -moz-text-stroke: {$headingTextStroke}px {$headingTextStrokeColor};
            -ms-text-stroke: {$headingTextStroke}px {$headingTextStrokeColor};
            text-stroke: {$headingTextStroke}px {$headingTextStrokeColor};
        " : "") . "
        " . ($headingBoxShadowCssValue ? "box-shadow: $headingBoxShadowCssValue;" : "") . "
        " . ($headingBackgroundImageEnabled && $headingBackgroundImageUrl && $headingBackgroundImageUrl !== 'null' ? "
            background-image: url($headingBackgroundImageUrl);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-position: center;
            background-size: contain;
        " : "") . "
        transition: all .3s ease-in-out;
    }
    
    .${blockId}.fb-advanced-wrapper .fb-advanced-heading:hover {
        " . ($headingHoverColor ? "color: $headingHoverColor;" : "") . "
        " . ($headingBorderHoverColor ? "border-color: $headingBorderHoverColor;" : "") . "
        " . ($headingBgColorHover ? "background-color: $headingBgColorHover;" : "") . "
        " . ($headingTextStrokeHoverColor ? "
            -webkit-text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
            -moz-text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
            -ms-text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
            text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
        " : "") . "
    }

	.${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading {
		" . ($subHeadingColor ? "color: $subHeadingColor;" : "") . "
		" . ($subHeadingBgColor ? "background-color: $subHeadingBgColor;" : "") . "
		" . ($subHeadingFontFamily ? "font-family: $subHeadingFontFamily;" : "") . "
		" . ($subHeadingFontSize['Desktop'] && $subHeadingFontSizeUnits['Desktop'] ? "font-size: {$subHeadingFontSize['Desktop']}{$subHeadingFontSizeUnits['Desktop']};" : "") . "
		" . ($subHeadingFontWeight ? "font-weight: $subHeadingFontWeight;" : "") . "
		" . ($subHeadingFontStyle ? "font-style: $subHeadingFontStyle;" : "") . "
		" . ($subHeadingTextTransform ? "text-transform: $subHeadingTextTransform;" : "") . "
		" . ($subHeadingTextDecoration ? "text-decoration: $subHeadingTextDecoration;" : "") . "
		" . ($subHeadingLetterSpacing['Desktop'] && $subHeadingLetterSpacingUnits['Desktop'] ? "letter-spacing: {$subHeadingLetterSpacing['Desktop']}{$subHeadingLetterSpacingUnits['Desktop']};" : "") . "
		" . ($subHeadingLineHeight['Desktop'] && $subHeadingLineHeightUnits['Desktop'] ? "line-height: {$subHeadingLineHeight['Desktop']}{$subHeadingLineHeightUnits['Desktop']};" : "") . "
		" . ($subHeadingDesktopPaddingWidth ? "padding: $subHeadingDesktopPaddingWidth;" : "") . "
		" . ($subHeadingDesktopMarginWidth ? "margin: $subHeadingDesktopMarginWidth;" : "") . "
		" . ($subHeadingBorder ? "border: $subHeadingBorder;" : "") . "
		" . ($subHeadingDesktopBorderWidth ? "border-width: $subHeadingDesktopBorderWidth;" : "") . "
		" . ($subHeadingDesktopBorderRadiusWidth ? "border-radius: $subHeadingDesktopBorderRadiusWidth;" : "") . "
		" . ($subHeadingBorderColor ? "border-color: $subHeadingBorderColor;" : "") . "
		" . ($subHeadingTextShadowCssValue ? "text-shadow: $subHeadingTextShadowCssValue;" : "") . "
		" . ($subHeadingTextStroke ? "
			-webkit-text-stroke: {$subHeadingTextStroke}px;
			-moz-text-stroke: {$subHeadingTextStroke}px;
			-ms-text-stroke: {$subHeadingTextStroke}px;
			text-stroke: {$subHeadingTextStroke}px;
		" : "") . "
		" . ($subHeadingBoxShadowCssValue ? "box-shadow: $subHeadingBoxShadowCssValue;" : "") . "
		transition: all .3s ease-in-out;
	}

	.${blockId} .fb-advanced-icon {
		" . ($headingIconBgSize['Desktop'] && $headingIconBgSizeUnits['Desktop'] ? "width: {$headingIconBgSize['Desktop']}{$headingIconBgSizeUnits['Desktop']};" : "") . "
		" . ($headingIconBgSize['Desktop'] && $headingIconBgSizeUnits['Desktop'] ? "height: {$headingIconBgSize['Desktop']}{$headingIconBgSizeUnits['Desktop']};" : "") . "
		" . ($headingIconBgColor ? "background-color: $headingIconBgColor;" : "") . "
		" . ($headingIconBorder ? "border: $headingIconBorder;" : "") . "
		" . ($headingIconDesktopBorderWidthValue ? "border-width: $headingIconDesktopBorderWidthValue;" : "") . "
		" . ($headingIconBorderColor ? "border-color: $headingIconBorderColor;" : "") . "
		" . ($headingIconDesktopBorderRadiusWidthValue ? "border-radius: $headingIconDesktopBorderRadiusWidthValue;" : "") . "
		transition: all .3s ease-in-out;
	}
	.${blockId} .fb-advanced-icon svg {
		" . ($headingIconSize['Desktop'] && $headingIconSizeUnits['Desktop'] ? "width: {$headingIconSize['Desktop']}{$headingIconSizeUnits['Desktop']};" : "") . "
		" . ($headingIconSize['Desktop'] && $headingIconSizeUnits['Desktop'] ? "height: {$headingIconSize['Desktop']}{$headingIconSizeUnits['Desktop']};" : "") . "
		" . ($headingIconColor ? "fill: $headingIconColor;" : "") . "
	}
	.${blockId} .fb-advanced-icon:hover {
		" . ($headingIconHoverColor ? "color: $headingIconHoverColor;" : "") . "
		" . ($headingIconBgHoverColor ? "background-color: $headingIconBgHoverColor;" : "") . "
		" . ($headingIconBorderHoverColor ? "border-color: $headingIconBorderHoverColor;" : "") . "
	}
	.${blockId} .fb-advanced-icon:hover svg {
		" . ($headingIconHoverColor ? "fill: $headingIconHoverColor;" : "") . "
	}
	.${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading:hover {
		" . ($subHeadingHoverColor ? "color: $subHeadingHoverColor;" : "") . "
		" . ($subHeadingBgColorHover ? "background-color: $subHeadingBgColorHover;" : "") . "
		" . ($subHeadingBorderHoverColor ? "border-color: $subHeadingBorderHoverColor;" : "") . "
	}

	.${blockId}.fb-advanced-wrapper .fb-advanced-title-separator {
		" . ($separator !== 'zigzag' && isset($separatorWidth['Desktop']) && isset($separatorWidthUnits['Desktop']) ? "width: {$separatorWidth['Desktop']}{$separatorWidthUnits['Desktop']};" : "") . "
		" . ($separator !== 'zigzag' && isset($separatorHeight['Desktop']) && isset($separatorHeightUnits['Desktop']) ? "border-top-width: {$separatorHeight['Desktop']}{$separatorHeightUnits['Desktop']};" : "") . "
		" . ($separator !== 'zigzag' ? "border-top-style: $separator;" : "") . "
		" . ($separator !== 'zigzag' && $separatorColor ? "border-top-color: $separatorColor;" : "") . "
		" . ($separatorPosition === 'bottom' && isset($separatorSpacing['Desktop']) && isset($separatorSpacingUnits['Desktop']) ? 
			"margin-top: {$separatorSpacing['Desktop']}{$separatorSpacingUnits['Desktop']};" : 
			($separatorPosition === 'top' && isset($separatorSpacing['Desktop']) && isset($separatorSpacingUnits['Desktop']) ? 
			"margin-bottom: {$separatorSpacing['Desktop']}{$separatorSpacingUnits['Desktop']};" : "")) . "
	}

	.${blockId}.fb-advanced-wrapper {
		" . ($headingGlobalZIndex ? "z-index: $headingGlobalZIndex;" : "") . "
		" . ($headingGlobalBgColor ? "background-color: $headingGlobalBgColor;" : "") . "
		" . ($globalDesktopPadding ? "padding: $globalDesktopPadding;" : "") . "
		" . ($globalDesktopMargin ? "margin: $globalDesktopMargin;" : "") . "
		" . ($headingGlobalBorder ? "border: $headingGlobalBorder;" : "") . "
		" . ($globalDesktopBorderWidth ? "border-width: $globalDesktopBorderWidth;" : "") . "
		" . ($globalDesktopBorderRadiusWidth ? "border-radius: $globalDesktopBorderRadiusWidth;" : "") . "
		" . ($headingGlobalBorderColor ? "border-color: $headingGlobalBorderColor;" : "") . "
		" . ($headingGlobalBoxShadowCssValue ? "box-shadow: $headingGlobalBoxShadowCssValue;" : "") . "
		transition: all .3s ease-in-out;
		position: relative;
	}
	.${blockId}.fb-advanced-wrapper:hover {
		" . ($headingGlobalBgHoverColor ? "background-color: $headingGlobalBgHoverColor;" : "") . "
		" . ($headingGlobalBorderHoverColor ? "border-color: $headingGlobalBorderHoverColor;" : "") . "
	}


	.${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::after {
			" . (isset($activeLineAfterWidth['Desktop']) && isset($activeLineAfterWidthUnits['Desktop']) ? "width: {$activeLineAfterWidth['Desktop']}{$activeLineAfterWidthUnits['Desktop']};" : "") . "
			" . (isset($activeLineAfterHeight['Desktop']) && isset($activeLineAfterHeightUnits['Desktop']) ? "height: {$activeLineAfterHeight['Desktop']}{$activeLineAfterHeightUnits['Desktop']};" : "") . "
			" . ($activeLineAfterColor ? "background-color: $activeLineAfterColor;" : "") . "
	}

	.${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::before {
			" . (isset($activeLineBeforeWidth['Desktop']) && isset($activeLineBeforeWidthUnits['Desktop']) ? "width: {$activeLineBeforeWidth['Desktop']}{$activeLineBeforeWidthUnits['Desktop']};" : "") . "
			" . (isset($activeLineBeforeHeight['Desktop']) && isset($activeLineBeforeHeightUnits['Desktop']) ? "height: {$activeLineBeforeHeight['Desktop']}{$activeLineBeforeHeightUnits['Desktop']};" : "") . "
			" . ($activeLineBeforeColor ? "background-color: $activeLineBeforeColor;" : "") . "
	}

	@media only screen and (max-width: 1024px) {
		.${blockId}.fb-advanced-wrapper .fb-advanced-heading {
			" . (isset($headingFontSize['Tablet']) && isset($headingFontSizeUnits['Tablet']) ? "font-size: {$headingFontSize['Tablet']}{$headingFontSizeUnits['Tablet']};" : "") . "
			" . (isset($headingLetterSpacing['Tablet']) && isset($headingLetterSpacingUnits['Tablet']) ? "letter-spacing: {$headingLetterSpacing['Tablet']}{$headingLetterSpacingUnits['Tablet']};" : "") . "
			" . (isset($headingLineHeight['Tablet']) && isset($headingLineHeightUnits['Tablet']) ? "line-height: {$headingLineHeight['Tablet']}{$headingLineHeightUnits['Tablet']};" : "") . "
			" . ($headingTabletPaddingWidth ? "padding: $headingTabletPaddingWidth;" : "") . "
			" . ($headingTabletMarginWidth ? "margin: $headingTabletMarginWidth;" : "") . "
			" . ($headingTabletBorderWidth ? "border-width: $headingTabletBorderWidth;" : "") . "
			" . ($headingTabletBorderRadiusWidth ? "border-radius: $headingTabletBorderRadiusWidth;" : "") . "
		}
		.${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading {
			" . (isset($subHeadingFontSize['Tablet']) && isset($subHeadingFontSizeUnits['Tablet']) ? "font-size: {$subHeadingFontSize['Tablet']}{$subHeadingFontSizeUnits['Tablet']};" : "") . "
			" . (isset($subHeadingLetterSpacing['Tablet']) && isset($subHeadingLetterSpacingUnits['Tablet']) ? "letter-spacing: {$subHeadingLetterSpacing['Tablet']}{$subHeadingLetterSpacingUnits['Tablet']};" : "") . "
			" . (isset($subHeadingLineHeight['Tablet']) && isset($subHeadingLineHeightUnits['Tablet']) ? "line-height: {$subHeadingLineHeight['Tablet']}{$subHeadingLineHeightUnits['Tablet']};" : "") . "
			" . ($subHeadingTabletPaddingWidth ? "padding: $subHeadingTabletPaddingWidth;" : "") . "
			" . ($subHeadingTabletMarginWidth ? "margin: $subHeadingTabletMarginWidth;" : "") . "
			" . ($subHeadingTabletBorderWidth ? "border-width: $subHeadingTabletBorderWidth;" : "") . "
			" . ($subHeadingTabletBorderRadiusWidth ? "border-radius: $subHeadingTabletBorderRadiusWidth;" : "") . "
		}
		.${blockId} .fb-advanced-icon {
			" . (isset($headingIconBgSize['Tablet']) && isset($headingIconBgSizeUnits['Tablet']) ? "width: {$headingIconBgSize['Tablet']}{$headingIconBgSizeUnits['Tablet']};" : "") . "
			" . (isset($headingIconBgSize['Tablet']) && isset($headingIconBgSizeUnits['Tablet']) ? "height: {$headingIconBgSize['Tablet']}{$headingIconBgSizeUnits['Tablet']};" : "") . "
			" . ($headingIconTabletBorderWidthValue ? "border-width: $headingIconTabletBorderWidthValue;" : "") . "
			" . ($headingIconTabletBorderRadiusWidthValue ? "border-radius: $headingIconTabletBorderRadiusWidthValue;" : "") . "
		}
		.${blockId} .fb-advanced-icon svg {
			" . (isset($headingIconSize['Tablet']) && isset($headingIconSizeUnits['Tablet']) ? "width: {$headingIconSize['Tablet']}{$headingIconSizeUnits['Tablet']};" : "") . "
			" . (isset($headingIconSize['Tablet']) && isset($headingIconSizeUnits['Tablet']) ? "height: {$headingIconSize['Tablet']}{$headingIconSizeUnits['Tablet']};" : "") . "
		}
		.fb-advanced-wrapper.${blockId} .fb-advanced-title-separator {
			" . (isset($separatorWidth['Tablet']) && isset($separatorWidthUnits['Tablet']) ? "width: {$separatorWidth['Tablet']}{$separatorWidthUnits['Tablet']};" : "") . "
			" . (isset($separatorHeight['Tablet']) && isset($separatorHeightUnits['Tablet']) ? "border-top-width: {$separatorHeight['Tablet']}{$separatorHeightUnits['Tablet']};" : "") . "
			" . ($separatorPosition === 'bottom' ? 
				(isset($separatorSpacing['Tablet']) && isset($separatorSpacingUnits['Tablet']) ? 
					"margin-top: {$separatorSpacing['Tablet']}{$separatorSpacingUnits['Tablet']};" 
					: "")
				: ($separatorPosition === 'top' ?
				(isset($separatorSpacing['Tablet']) && isset($separatorSpacingUnits['Tablet']) ? 
					"margin-bottom: {$separatorSpacing['Tablet']}{$separatorSpacingUnits['Tablet']};" 
					: "")
				: "")) . "
		}
		.${blockId}.fb-advanced-wrapper {
			" . ($globalTabletPadding ? "padding: $globalTabletPadding;" : "") . "
			" . ($globalTabletMargin ? "margin: $globalTabletMargin;" : "") . "
			" . ($globalTabletBorderWidth ? "border-width: $globalTabletBorderWidth;" : "") . "
			" . ($globalTabletBorderRadiusWidth ? "border-radius: $globalTabletBorderRadiusWidth;" : "") . "
		}
		.${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::after {
			" . (isset($activeLineAfterWidth['Tablet']) && isset($activeLineAfterWidthUnits['Tablet']) ? "width: {$activeLineAfterWidth['Tablet']}{$activeLineAfterWidthUnits['Tablet']};" : "") . "
			" . (isset($activeLineAfterHeight['Tablet']) && isset($activeLineAfterHeightUnits['Tablet']) ? "height: {$activeLineAfterHeight['Tablet']}{$activeLineAfterHeightUnits['Tablet']};" : "") . "
		}
		.${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::before {
			" . (isset($activeLineBeforeWidth['Tablet']) && isset($activeLineBeforeWidthUnits['Tablet']) ? "width: {$activeLineBeforeWidth['Tablet']}{$activeLineBeforeWidthUnits['Tablet']};" : "") . "
			" . (isset($activeLineBeforeHeight['Tablet']) && isset($activeLineBeforeHeightUnits['Tablet']) ? "height: {$activeLineBeforeHeight['Tablet']}{$activeLineBeforeHeightUnits['Tablet']};" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.${blockId}.fb-advanced-wrapper .fb-advanced-heading {
			" . (isset($headingFontSize['Mobile']) && isset($headingFontSizeUnits['Mobile']) ? "font-size: {$headingFontSize['Mobile']}{$headingFontSizeUnits['Mobile']};" : "") . "
			" . (isset($headingLetterSpacing['Mobile']) && isset($headingLetterSpacingUnits['Mobile']) ? "letter-spacing: {$headingLetterSpacing['Mobile']}{$headingLetterSpacingUnits['Mobile']};" : "") . "
			" . (isset($headingLineHeight['Mobile']) && isset($headingLineHeightUnits['Mobile']) ? "line-height: {$headingLineHeight['Mobile']}{$headingLineHeightUnits['Mobile']};" : "") . "
			" . ($headingMobilePaddingWidth ? "padding: $headingMobilePaddingWidth;" : "") . "
			" . ($headingMobileMarginWidth ? "margin: $headingMobileMarginWidth;" : "") . "
			" . ($headingMobileBorderWidth ? "border-width: $headingMobileBorderWidth;" : "") . "
			" . ($headingMobileBorderRadiusWidth ? "border-radius: $headingMobileBorderRadiusWidth;" : "") . "
		}
		.${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading {
			" . (isset($subHeadingFontSize['Mobile']) && isset($subHeadingFontSizeUnits['Mobile']) ? "font-size: {$subHeadingFontSize['Mobile']}{$subHeadingFontSizeUnits['Mobile']};" : "") . "
			" . (isset($subHeadingLetterSpacing['Mobile']) && isset($subHeadingLetterSpacingUnits['Mobile']) ? "letter-spacing: {$subHeadingLetterSpacing['Mobile']}{$subHeadingLetterSpacingUnits['Mobile']};" : "") . "
			" . (isset($subHeadingLineHeight['Mobile']) && isset($subHeadingLineHeightUnits['Mobile']) ? "line-height: {$subHeadingLineHeight['Mobile']}{$subHeadingLineHeightUnits['Mobile']};" : "") . "
			" . ($subHeadingMobilePaddingWidth ? "padding: $subHeadingMobilePaddingWidth;" : "") . "
			" . ($subHeadingMobileMarginWidth ? "margin: $subHeadingMobileMarginWidth;" : "") . "
			" . ($subHeadingMobileBorderWidth ? "border-width: $subHeadingMobileBorderWidth;" : "") . "
			" . ($subHeadingMobileBorderRadiusWidth ? "border-radius: $subHeadingMobileBorderRadiusWidth;" : "") . "
		}
		.${blockId} .fb-advanced-icon {
			" . (isset($headingIconBgSize['Mobile']) && isset($headingIconBgSizeUnits['Mobile']) ? "width: {$headingIconBgSize['Mobile']}{$headingIconBgSizeUnits['Mobile']};" : "") . "
			" . (isset($headingIconBgSize['Mobile']) && isset($headingIconBgSizeUnits['Mobile']) ? "height: {$headingIconBgSize['Mobile']}{$headingIconBgSizeUnits['Mobile']};" : "") . "
			" . ($headingIconMobileBorderWidthValue ? "border-width: $headingIconMobileBorderWidthValue;" : "") . "
			" . ($headingIconMobileBorderRadiusWidthValue ? "border-radius: $headingIconMobileBorderRadiusWidthValue;" : "") . "
		}
		.${blockId} .fb-advanced-icon svg {
			" . (isset($headingIconSize['Mobile']) && isset($headingIconSizeUnits['Mobile']) ? "width: {$headingIconSize['Mobile']}{$headingIconSizeUnits['Mobile']};" : "") . "
			" . (isset($headingIconSize['Mobile']) && isset($headingIconSizeUnits['Mobile']) ? "height: {$headingIconSize['Mobile']}{$headingIconSizeUnits['Mobile']};" : "") . "
		}
		.fb-advanced-wrapper.${blockId} .fb-advanced-title-separator {
			" . (isset($separatorWidth['Mobile']) && isset($separatorWidthUnits['Mobile']) ? "width: {$separatorWidth['Mobile']}{$separatorWidthUnits['Mobile']};" : "") . "
			" . (isset($separatorHeight['Mobile']) && isset($separatorHeightUnits['Mobile']) ? "border-top-width: {$separatorHeight['Mobile']}{$separatorHeightUnits['Mobile']};" : "") . "
			" . ($separatorPosition === 'bottom' ? 
				(isset($separatorSpacing['Mobile']) && isset($separatorSpacingUnits['Mobile']) ? 
					"margin-top: {$separatorSpacing['Mobile']}{$separatorSpacingUnits['Mobile']};" 
					: "")
				: ($separatorPosition === 'top' ?
				(isset($separatorSpacing['Mobile']) && isset($separatorSpacingUnits['Mobile']) ? 
					"margin-bottom: {$separatorSpacing['Mobile']}{$separatorSpacingUnits['Mobile']};" 
					: "")
				: "")) . "
		}
		.${blockId}.fb-advanced-wrapper {
			" . ($globalMobilePadding ? "padding: $globalMobilePadding;" : "") . "
			" . ($globalMobileMargin ? "margin: $globalMobileMargin;" : "") . "
			" . ($globalMobileBorderWidth ? "border-width: $globalMobileBorderWidth;" : "") . "
			" . ($globalMobileBorderRadiusWidth ? "border-radius: $globalMobileBorderRadiusWidth;" : "") . "
		}
		.${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::after {
			" . (isset($activeLineAfterWidth['Mobile']) && isset($activeLineAfterWidthUnits['Mobile']) ? "width: {$activeLineAfterWidth['Mobile']}{$activeLineAfterWidthUnits['Mobile']};" : "") . "
			" . (isset($activeLineAfterHeight['Mobile']) && isset($activeLineAfterHeightUnits['Mobile']) ? "height: {$activeLineAfterHeight['Mobile']}{$activeLineAfterHeightUnits['Mobile']};" : "") . "
		}
		.${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::before {
			" . (isset($activeLineBeforeWidth['Mobile']) && isset($activeLineBeforeWidthUnits['Mobile']) ? "width: {$activeLineBeforeWidth['Mobile']}{$activeLineBeforeWidthUnits['Mobile']};" : "") . "
			" . (isset($activeLineBeforeHeight['Mobile']) && isset($activeLineBeforeHeightUnits['Mobile']) ? "height: {$activeLineBeforeHeight['Mobile']}{$activeLineBeforeHeightUnits['Mobile']};" : "") . "
		}
	}
";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockId);