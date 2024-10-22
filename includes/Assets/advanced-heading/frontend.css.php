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


$headingTextShadowCssValue = isset($block_attributes['headingTextShadowCssValue']) ? sanitize_text_field($block_attributes['headingTextShadowCssValue']) : '';
$headingTextStroke = isset($block_attributes['headingTextStroke']) ? sanitize_text_field($block_attributes['headingTextStroke']) : '';
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
$activeLineBeforeHeight = isset($block_attributes['activeLineBeforeHeight']) ? $block_attributes['activeLineBeforeHeight'] : array('Desktop' => '2', 'Tablet' => '2', 'Mobile' => '2');
$activeLineBeforeHeightUnits = isset($block_attributes['activeLineBeforeHeightUnits']) ? $block_attributes['activeLineBeforeHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$activeLineBeforeColor = isset($block_attributes['activeLineBeforeColor']) ? sanitize_text_field($block_attributes['activeLineBeforeColor']) : '#B0D7FF';

// Generate CSS content
$css_content = "
    .${blockId}.fb-advanced-wrapper .fb-advanced-heading {
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
        " . ($headingTextShadowCssValue ? "text-shadow: $headingTextShadowCssValue;" : "") . "
        " . ($headingTextStroke ? "
            -webkit-text-stroke: {$headingTextStroke}px;
            -moz-text-stroke: {$headingTextStroke}px;
            -ms-text-stroke: {$headingTextStroke}px;
            text-stroke: {$headingTextStroke}px;
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
    }

    .${blockId}.fb-advanced-wrapper .fb-advanced-title-separator {
        display: inline-block;
        " . ($separator !== 'zigzag' && isset($separatorWidth['Desktop']) && isset($separatorWidthUnits['Desktop']) ? "width: {$separatorWidth['Desktop']}{$separatorWidthUnits['Desktop']};" : "") . "
        " . ($separator !== 'zigzag' && isset($separatorHeight['Desktop']) && isset($separatorHeightUnits['Desktop']) ? "border-top-width: {$separatorHeight['Desktop']}{$separatorHeightUnits['Desktop']};" : "") . "
        " . ($separator !== 'zigzag' ? "border-top-style: $separator;" : "") . "
        " . ($separator !== 'zigzag' && isset($separatorColor) ? "border-top-color: $separatorColor;" : "") . "
        " . ($separatorPosition === 'bottom' && isset($separatorSpacing['Desktop']) && isset($separatorSpacingUnits['Desktop']) ? 
            "margin-top: {$separatorSpacing['Desktop']}{$separatorSpacingUnits['Desktop']};" : 
            ($separatorPosition === 'top' && isset($separatorSpacing['Desktop']) && isset($separatorSpacingUnits['Desktop']) ? 
            "margin-bottom: {$separatorSpacing['Desktop']}{$separatorSpacingUnits['Desktop']};" : "")) . "
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
            " . ($headingFontSize['Tablet'] && $headingFontSizeUnits['Tablet'] ? "font-size: {$headingFontSize['Tablet']}{$headingFontSizeUnits['Tablet']};" : "") . "
            " . ($headingLetterSpacing['Tablet'] && $headingLetterSpacingUnits['Tablet'] ? "letter-spacing: {$headingLetterSpacing['Tablet']}{$headingLetterSpacingUnits['Tablet']};" : "") . "
            " . ($headingLineHeight['Tablet'] && $headingLineHeightUnits['Tablet'] ? "line-height: {$headingLineHeight['Tablet']}{$headingLineHeightUnits['Tablet']};" : "") . "
            " . ($headingTabletPaddingWidth ? "padding: $headingTabletPaddingWidth;" : "") . "
            " . ($headingTabletMarginWidth ? "margin: $headingTabletMarginWidth;" : "") . "
            " . ($headingTabletBorderWidth ? "border-width: $headingTabletBorderWidth;" : "") . "
            " . ($headingTabletBorderRadiusWidth ? "border-radius: $headingTabletBorderRadiusWidth;" : "") . "
        }
        .${blockId}.fb-advanced-wrapper .fb-advanced-title-separator {
            " . ($separator !== 'zigzag' && isset($separatorWidth['Tablet']) && isset($separatorWidthUnits['Tablet']) ? "width: {$separatorWidth['Tablet']}{$separatorWidthUnits['Tablet']};" : "") . "
            " . ($separator !== 'zigzag' && isset($separatorHeight['Tablet']) && isset($separatorHeightUnits['Tablet']) ? "border-top-width: {$separatorHeight['Tablet']}{$separatorHeightUnits['Tablet']};" : "") . "
            " . ($separatorPosition === 'bottom' && isset($separatorSpacing['Tablet']) && isset($separatorSpacingUnits['Tablet']) ? 
                "margin-top: {$separatorSpacing['Tablet']}{$separatorSpacingUnits['Tablet']};" : 
                ($separatorPosition === 'top' && isset($separatorSpacing['Tablet']) && isset($separatorSpacingUnits['Tablet']) ? 
                "margin-bottom: {$separatorSpacing['Tablet']}{$separatorSpacingUnits['Tablet']};" : "")) . "
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
            " . ($headingFontSize['Mobile'] && $headingFontSizeUnits['Mobile'] ? "font-size: {$headingFontSize['Mobile']}{$headingFontSizeUnits['Mobile']};" : "") . "
            " . ($headingLetterSpacing['Mobile'] && $headingLetterSpacingUnits['Mobile'] ? "letter-spacing: {$headingLetterSpacing['Mobile']}{$headingLetterSpacingUnits['Mobile']};" : "") . "
            " . ($headingLineHeight['Mobile'] && $headingLineHeightUnits['Mobile'] ? "line-height: {$headingLineHeight['Mobile']}{$headingLineHeightUnits['Mobile']};" : "") . "
            " . ($headingMobilePaddingWidth ? "padding: $headingMobilePaddingWidth;" : "") . "
            " . ($headingMobileMarginWidth ? "margin: $headingMobileMarginWidth;" : "") . "
            " . ($headingMobileBorderWidth ? "border-width: $headingMobileBorderWidth;" : "") . "
            " . ($headingMobileBorderRadiusWidth ? "border-radius: $headingMobileBorderRadiusWidth;" : "") . "
        }
        .${blockId}.fb-advanced-wrapper .fb-advanced-title-separator {
            " . ($separator !== 'zigzag' && isset($separatorWidth['Mobile']) && isset($separatorWidthUnits['Mobile']) ? "width: {$separatorWidth['Mobile']}{$separatorWidthUnits['Mobile']};" : "") . "
            " . ($separator !== 'zigzag' && isset($separatorHeight['Mobile']) && isset($separatorHeightUnits['Mobile']) ? "border-top-width: {$separatorHeight['Mobile']}{$separatorHeightUnits['Mobile']};" : "") . "
            " . ($separatorPosition === 'bottom' && isset($separatorSpacing['Mobile']) && isset($separatorSpacingUnits['Mobile']) ? 
                "margin-top: {$separatorSpacing['Mobile']}{$separatorSpacingUnits['Mobile']};" : 
                ($separatorPosition === 'top' && isset($separatorSpacing['Mobile']) && isset($separatorSpacingUnits['Mobile']) ? 
                "margin-bottom: {$separatorSpacing['Mobile']}{$separatorSpacingUnits['Mobile']};" : "")) . "
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