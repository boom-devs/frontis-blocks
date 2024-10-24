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

$buttonBoxShadowCssValue = isset($block_attributes['buttonBoxShadowCssValue']) ? sanitize_text_field($block_attributes['buttonBoxShadowCssValue']) : '';


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

$buttonIconAlign = isset($block_attributes['buttonIconAlign']) ? sanitize_text_field($block_attributes['buttonIconAlign']) : 'none';
$buttonIcon = isset($block_attributes['buttonIcon']) ? sanitize_text_field($block_attributes['buttonIcon']) : 'angle-right';
$buttonIconPosition = isset($block_attributes['buttonIconPosition']) ? sanitize_text_field($block_attributes['buttonIconPosition']) : 'right';

$buttonIconSize = isset($block_attributes['buttonIconSize']) ? $block_attributes['buttonIconSize'] : array('Desktop' => 16, 'Tablet' => 16, 'Mobile' => 16);
$buttonIconSizeUnits = isset($block_attributes['buttonIconSizeUnits']) ? $block_attributes['buttonIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonIconColorSwitcher = isset($block_attributes['buttonIconColorSwitcher']) ? sanitize_text_field($block_attributes['buttonIconColorSwitcher']) : 'normal';
$buttonIconColor = isset($block_attributes['buttonIconColor']) ? sanitize_hex_color($block_attributes['buttonIconColor']) : '#fff';
$buttonIconHoverColor = isset($block_attributes['buttonIconHoverColor']) ? sanitize_hex_color($block_attributes['buttonIconHoverColor']) : '#fff';
$buttonIconBgColorSwitcher = isset($block_attributes['buttonIconBgColorSwitcher']) ? sanitize_text_field($block_attributes['buttonIconBgColorSwitcher']) : 'normal';
$buttonIconBgColor = isset($block_attributes['buttonIconBgColor']) ? sanitize_hex_color($block_attributes['buttonIconBgColor']) : '';
$buttonIconBgHoverColor = isset($block_attributes['buttonIconBgHoverColor']) ? sanitize_hex_color($block_attributes['buttonIconBgHoverColor']) : '';
$buttonIconBorder = isset($block_attributes['buttonIconBorder']) ? sanitize_text_field($block_attributes['buttonIconBorder']) : 'none';
$buttonIconBorderColorSwitcher = isset($block_attributes['buttonIconBorderColorSwitcher']) ? sanitize_text_field($block_attributes['buttonIconBorderColorSwitcher']) : 'normal';
$buttonIconBorderColor = isset($block_attributes['buttonIconBorderColor']) ? sanitize_hex_color($block_attributes['buttonIconBorderColor']) : '';
$buttonIconBorderHoverColor = isset($block_attributes['buttonIconBorderHoverColor']) ? sanitize_hex_color($block_attributes['buttonIconBorderHoverColor']) : '';


$buttonIconBorderUnits = isset($block_attributes['buttonIconBorderUnits']) ? $block_attributes['buttonIconBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonIconBorderDesktop = isset($block_attributes['buttonIconBorderDesktop']) ? $block_attributes['buttonIconBorderDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonIconBorderTablet = isset($block_attributes['buttonIconBorderTablet']) ? $block_attributes['buttonIconBorderTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonIconBorderMobile = isset($block_attributes['buttonIconBorderMobile']) ? $block_attributes['buttonIconBorderMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** End Icon border */
$buttonIconBorderDesktopWidth = $buttonIconBorderDesktop['top'] . $buttonIconBorderUnits['Desktop'] . ' ' . $buttonIconBorderDesktop['right'] . $buttonIconBorderUnits['Desktop'] . ' ' . $buttonIconBorderDesktop['bottom'] . $buttonIconBorderUnits['Desktop'] . ' ' . $buttonIconBorderDesktop['left'] . $buttonIconBorderUnits['Desktop'];
$buttonIconBorderTabletWidth = $buttonIconBorderTablet['top'] . $buttonIconBorderUnits['Tablet'] . ' ' . $buttonIconBorderTablet['right'] . $buttonIconBorderUnits['Tablet'] . ' ' . $buttonIconBorderTablet['bottom'] . $buttonIconBorderUnits['Tablet'] . ' ' . $buttonIconBorderTablet['left'] . $buttonIconBorderUnits['Tablet'];
$buttonIconBorderMobileWidth = $buttonIconBorderMobile['top'] . $buttonIconBorderUnits['Mobile'] . ' ' . $buttonIconBorderMobile['right'] . $buttonIconBorderUnits['Mobile'] . ' ' . $buttonIconBorderMobile['bottom'] . $buttonIconBorderUnits['Mobile'] . ' ' . $buttonIconBorderMobile['left'] . $buttonIconBorderUnits['Mobile'];
/** End Border */

$buttonIconBorderRadiusUnits = isset($block_attributes['buttonIconBorderRadiusUnits']) ? $block_attributes['buttonIconBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonIconBorderRadiusDesktop = isset($block_attributes['buttonIconBorderRadiusDesktop']) ? $block_attributes['buttonIconBorderRadiusDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonIconBorderRadiusTablet = isset($block_attributes['buttonIconBorderRadiusTablet']) ? $block_attributes['buttonIconBorderRadiusTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonIconBorderRadiusMobile = isset($block_attributes['buttonIconBorderRadiusMobile']) ? $block_attributes['buttonIconBorderRadiusMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonIconBorderRadiusLink = isset($block_attributes['buttonIconBorderRadiusLink']) ? (bool)$block_attributes['buttonIconBorderRadiusLink'] : true;
/** End Icon Border Radius */
$buttonIconBorderRadiusDesktopWidth = $buttonIconBorderRadiusDesktop['top'] . $buttonIconBorderRadiusUnits['Desktop'] . ' ' . $buttonIconBorderRadiusDesktop['right'] . $buttonIconBorderRadiusUnits['Desktop'] . ' ' . $buttonIconBorderRadiusDesktop['bottom'] . $buttonIconBorderRadiusUnits['Desktop'] . ' ' . $buttonIconBorderRadiusDesktop['left'] . $buttonIconBorderRadiusUnits['Desktop'];
$buttonIconBorderRadiusTabletWidth = $buttonIconBorderRadiusTablet['top'] . $buttonIconBorderRadiusUnits['Tablet'] . ' ' . $buttonIconBorderRadiusTablet['right'] . $buttonIconBorderRadiusUnits['Tablet'] . ' ' . $buttonIconBorderRadiusTablet['bottom'] . $buttonIconBorderRadiusUnits['Tablet'] . ' ' . $buttonIconBorderRadiusTablet['left'] . $buttonIconBorderRadiusUnits['Tablet'];
$buttonIconBorderRadiusMobileWidth = $buttonIconBorderRadiusMobile['top'] . $buttonIconBorderRadiusUnits['Mobile'] . ' ' . $buttonIconBorderRadiusMobile['right'] . $buttonIconBorderRadiusUnits['Mobile'] . ' ' . $buttonIconBorderRadiusMobile['bottom'] . $buttonIconBorderRadiusUnits['Mobile'] . ' ' . $buttonIconBorderRadiusMobile['left'] . $buttonIconBorderRadiusUnits['Mobile'];
/** End Border Radius */

$buttonIconGapSize = isset($block_attributes['buttonIconGapSize']) ? $block_attributes['buttonIconGapSize'] : array('Desktop' => 10, 'Tablet' => 10, 'Mobile' => 10);
$buttonIconGapUnits = isset($block_attributes['buttonIconGapUnits']) ? $block_attributes['buttonIconGapUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

/** Start Global Setting */
$buttonGlobalZIndex = isset($block_attributes['buttonGlobalZIndex']) ? intval($block_attributes['buttonGlobalZIndex']) : null;

$buttonGlobalPaddingUnits = isset($block_attributes['buttonGlobalPaddingUnits']) ? $block_attributes['buttonGlobalPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonGlobalPaddingDesktop = isset($block_attributes['buttonGlobalPaddingDesktop']) ? $block_attributes['buttonGlobalPaddingDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalPaddingTablet = isset($block_attributes['buttonGlobalPaddingTablet']) ? $block_attributes['buttonGlobalPaddingTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalPaddingMobile = isset($block_attributes['buttonGlobalPaddingMobile']) ? $block_attributes['buttonGlobalPaddingMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Start Global Padding */
$globalDesktopPadding = $buttonGlobalPaddingDesktop['top'] . $buttonGlobalPaddingUnits['Desktop'] . ' ' . $buttonGlobalPaddingDesktop['right'] . $buttonGlobalPaddingUnits['Desktop'] . ' ' . $buttonGlobalPaddingDesktop['bottom'] . $buttonGlobalPaddingUnits['Desktop'] . ' ' . $buttonGlobalPaddingDesktop['left'] . $buttonGlobalPaddingUnits['Desktop'];
$globalTabletPadding = $buttonGlobalPaddingTablet['top'] . $buttonGlobalPaddingUnits['Tablet'] . ' ' . $buttonGlobalPaddingTablet['right'] . $buttonGlobalPaddingUnits['Tablet'] . ' ' . $buttonGlobalPaddingTablet['bottom'] . $buttonGlobalPaddingUnits['Tablet'] . ' ' . $buttonGlobalPaddingTablet['left'] . $buttonGlobalPaddingUnits['Tablet'];
$globalMobilePadding = $buttonGlobalPaddingMobile['top'] . $buttonGlobalPaddingUnits['Mobile'] . ' ' . $buttonGlobalPaddingMobile['right'] . $buttonGlobalPaddingUnits['Mobile'] . ' ' . $buttonGlobalPaddingMobile['bottom'] . $buttonGlobalPaddingUnits['Mobile'] . ' ' . $buttonGlobalPaddingMobile['left'] . $buttonGlobalPaddingUnits['Mobile'];
/** End Global Padding */

$buttonGlobalMarginUnits = isset($block_attributes['buttonGlobalMarginUnits']) ? $block_attributes['buttonGlobalMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonGlobalMarginDesktop = isset($block_attributes['buttonGlobalMarginDesktop']) ? $block_attributes['buttonGlobalMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalMarginTablet = isset($block_attributes['buttonGlobalMarginTablet']) ? $block_attributes['buttonGlobalMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalMarginMobile = isset($block_attributes['buttonGlobalMarginMobile']) ? $block_attributes['buttonGlobalMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalMarginLink = isset($block_attributes['buttonGlobalMarginLink']) ? (bool)$block_attributes['buttonGlobalMarginLink'] : true;
$globalDesktopMargin = $buttonGlobalMarginDesktop['top'] . $buttonGlobalMarginUnits['Desktop'] . ' ' . $buttonGlobalMarginDesktop['right'] . $buttonGlobalMarginUnits['Desktop'] . ' ' . $buttonGlobalMarginDesktop['bottom'] . $buttonGlobalMarginUnits['Desktop'] . ' ' . $buttonGlobalMarginDesktop['left'] . $buttonGlobalMarginUnits['Desktop'];
$globalTabletMargin = $buttonGlobalMarginTablet['top'] . $buttonGlobalMarginUnits['Tablet'] . ' ' . $buttonGlobalMarginTablet['right'] . $buttonGlobalMarginUnits['Tablet'] . ' ' . $buttonGlobalMarginTablet['bottom'] . $buttonGlobalMarginUnits['Tablet'] . ' ' . $buttonGlobalMarginTablet['left'] . $buttonGlobalMarginUnits['Tablet'];
$globalMobileMargin = $buttonGlobalMarginMobile['top'] . $buttonGlobalMarginUnits['Mobile'] . ' ' . $buttonGlobalMarginMobile['right'] . $buttonGlobalMarginUnits['Mobile'] . ' ' . $buttonGlobalMarginMobile['bottom'] . $buttonGlobalMarginUnits['Mobile'] . ' ' . $buttonGlobalMarginMobile['left'] . $buttonGlobalMarginUnits['Mobile'];
/** End Global Margin */

$buttonGlobalBgColorSwitcher = isset($block_attributes['buttonGlobalBgColorSwitcher']) ? sanitize_text_field($block_attributes['buttonGlobalBgColorSwitcher']) : 'normal';
$buttonGlobalBgColor = isset($block_attributes['buttonGlobalBgColor']) ? sanitize_hex_color($block_attributes['buttonGlobalBgColor']) : '';
$buttonGlobalBgHoverColor = isset($block_attributes['buttonGlobalBgHoverColor']) ? sanitize_hex_color($block_attributes['buttonGlobalBgHoverColor']) : '';
$buttonGlobalBorder = isset($block_attributes['buttonGlobalBorder']) ? sanitize_text_field($block_attributes['buttonGlobalBorder']) : 'none';
$buttonGlobalBorderColorSwitcher = isset($block_attributes['buttonGlobalBorderColorSwitcher']) ? sanitize_text_field($block_attributes['buttonGlobalBorderColorSwitcher']) : 'normal';
$buttonGlobalBorderColor = isset($block_attributes['buttonGlobalBorderColor']) ? sanitize_hex_color($block_attributes['buttonGlobalBorderColor']) : '';
$buttonGlobalBorderHoverColor = isset($block_attributes['buttonGlobalBorderHoverColor']) ? sanitize_hex_color($block_attributes['buttonGlobalBorderHoverColor']) : '';

$buttonGlobalBorderUnits = isset($block_attributes['buttonGlobalBorderUnits']) ? $block_attributes['buttonGlobalBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonGlobalBorderDesktop = isset($block_attributes['buttonGlobalBorderDesktop']) ? $block_attributes['buttonGlobalBorderDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalBorderTablet = isset($block_attributes['buttonGlobalBorderTablet']) ? $block_attributes['buttonGlobalBorderTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalBorderMobile = isset($block_attributes['buttonGlobalBorderMobile']) ? $block_attributes['buttonGlobalBorderMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

$globalDesktopBorderWidth = $buttonGlobalBorderDesktop['top'] . $buttonGlobalBorderUnits['Desktop'] . ' ' . $buttonGlobalBorderDesktop['right'] . $buttonGlobalBorderUnits['Desktop'] . ' ' . $buttonGlobalBorderDesktop['bottom'] . $buttonGlobalBorderUnits['Desktop'] . ' ' . $buttonGlobalBorderDesktop['left'] . $buttonGlobalBorderUnits['Desktop'];
$globalTabletBorderWidth = $buttonGlobalBorderTablet['top'] . $buttonGlobalBorderUnits['Tablet'] . ' ' . $buttonGlobalBorderTablet['right'] . $buttonGlobalBorderUnits['Tablet'] . ' ' . $buttonGlobalBorderTablet['bottom'] . $buttonGlobalBorderUnits['Tablet'] . ' ' . $buttonGlobalBorderTablet['left'] . $buttonGlobalBorderUnits['Tablet'];
$globalMobileBorderWidth = $buttonGlobalBorderMobile['top'] . $buttonGlobalBorderUnits['Mobile'] . ' ' . $buttonGlobalBorderMobile['right'] . $buttonGlobalBorderUnits['Mobile'] . ' ' . $buttonGlobalBorderMobile['bottom'] . $buttonGlobalBorderUnits['Mobile'] . ' ' . $buttonGlobalBorderMobile['left'] . $buttonGlobalBorderUnits['Mobile'];
/** End Border */

$buttonGlobalBorderRadiusUnits = isset($block_attributes['buttonGlobalBorderRadiusUnits']) ? $block_attributes['buttonGlobalBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$buttonGlobalBorderRadiusDesktop = isset($block_attributes['buttonGlobalBorderRadiusDesktop']) ? $block_attributes['buttonGlobalBorderRadiusDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalBorderRadiusTablet = isset($block_attributes['buttonGlobalBorderRadiusTablet']) ? $block_attributes['buttonGlobalBorderRadiusTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$buttonGlobalBorderRadiusMobile = isset($block_attributes['buttonGlobalBorderRadiusMobile']) ? $block_attributes['buttonGlobalBorderRadiusMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** End Global Border Radius */
$globalDesktopBorderRadiusWidth = $buttonGlobalBorderRadiusDesktop['top'] . $buttonGlobalBorderRadiusUnits['Desktop'] . ' ' . $buttonGlobalBorderRadiusDesktop['right'] . $buttonGlobalBorderRadiusUnits['Desktop'] . ' ' . $buttonGlobalBorderRadiusDesktop['bottom'] . $buttonGlobalBorderRadiusUnits['Desktop'] . ' ' . $buttonGlobalBorderRadiusDesktop['left'] . $buttonGlobalBorderRadiusUnits['Desktop'];
$globalTabletBorderRadiusWidth = $buttonGlobalBorderRadiusTablet['top'] . $buttonGlobalBorderRadiusUnits['Tablet'] . ' ' . $buttonGlobalBorderRadiusTablet['right'] . $buttonGlobalBorderRadiusUnits['Tablet'] . ' ' . $buttonGlobalBorderRadiusTablet['bottom'] . $buttonGlobalBorderRadiusUnits['Tablet'] . ' ' . $buttonGlobalBorderRadiusTablet['left'] . $buttonGlobalBorderRadiusUnits['Tablet'];
$globalMobileBorderRadiusWidth = $buttonGlobalBorderRadiusMobile['top'] . $buttonGlobalBorderRadiusUnits['Mobile'] . ' ' . $buttonGlobalBorderRadiusMobile['right'] . $buttonGlobalBorderRadiusUnits['Mobile'] . ' ' . $buttonGlobalBorderRadiusMobile['bottom'] . $buttonGlobalBorderRadiusUnits['Mobile'] . ' ' . $buttonGlobalBorderRadiusMobile['left'] . $buttonGlobalBorderRadiusUnits['Mobile'];
/** End Border Radius */

$buttonGlobalBoxShadowCssValue = isset($block_attributes['buttonGlobalBoxShadowCssValue']) ? sanitize_text_field($block_attributes['buttonGlobalBoxShadowCssValue']) : '';
/** End Global Setting */


// Generate CSS content
$css_content = "

	.$blockId.fb-advanced-button-wrapper {
		" . ($buttonGlobalZIndex ? "z-index: $buttonGlobalZIndex;" : "") . "
		" . ($buttonGlobalBgColor ? "background-color: $buttonGlobalBgColor;" : "") . "
		" . ($globalDesktopPadding ? "padding: $globalDesktopPadding;" : "") . "
		" . ($globalDesktopMargin ? "margin: $globalDesktopMargin;" : "") . "
		" . ($buttonGlobalBorder ? "border: $buttonGlobalBorder;" : "") . "
		" . ($globalDesktopBorderWidth ? "border-width: $globalDesktopBorderWidth;" : "") . "
		" . ($globalDesktopBorderRadiusWidth ? "border-radius: $globalDesktopBorderRadiusWidth;" : "") . "
		" . ($buttonGlobalBorderColor ? "border-color: $buttonGlobalBorderColor;" : "") . "
		" . ($buttonGlobalBoxShadowCssValue ? "box-shadow: $buttonGlobalBoxShadowCssValue;" : "") . "
		transition: all .3s ease-in-out;
		position: relative;
	}
	.$blockId.fb-advanced-button-wrapper:hover {
		" . ($buttonGlobalBgHoverColor ? "background-color: $buttonGlobalBgHoverColor;" : "") . "
		" . ($buttonGlobalBorderHoverColor ? "border-color: $buttonGlobalBorderHoverColor;" : "") . "
	}
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
		" . ($buttonBoxShadowCssValue ? "box-shadow: $buttonBoxShadowCssValue;" : "") . "
		" . ($buttonWidth['Desktop'] && $buttonWidthUnits['Desktop'] ? "width: {$buttonWidth['Desktop']}{$buttonWidthUnits['Desktop']};" : "") . "
		display: " . ($buttonAlignment === 'justify' ? 'flex' : 'inline-flex') . ";
		transition: all 0.3s ease;
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button:hover {
		" . ($buttonBorderHoverColor ? "border-color: $buttonBorderHoverColor;" : "") . "
		" . ($buttonBgHoverColor !== null ? "background-color: $buttonBgHoverColor;" : "") . "
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-text {
		" . ($buttonColor !== null ? "color: $buttonColor;" : "") . "
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-text {
		" . ($buttonHoverColor !== null ? "color: $buttonHoverColor;" : "") . "
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
		" . ($buttonIconPosition === 'left' ? "margin-right: {$buttonIconGapSize['Desktop']}{$buttonIconGapUnits['Desktop']};" : "") . "
		" . ($buttonIconPosition === 'right' ? "margin-left: {$buttonIconGapSize['Desktop']}{$buttonIconGapUnits['Desktop']};" : "") . "
		" . ($buttonIconBgColor ? "background-color: $buttonIconBgColor;" : "") . "
		" . ($buttonIconBorder ? "border: $buttonIconBorder;" : "") . "
		" . ($buttonIconBorderColor ? "border-color: $buttonIconBorderColor;" : "") . "
		" . ($buttonIconBorderDesktopWidth ? "border-width: $buttonIconBorderDesktopWidth;" : "") . "
		" . ($buttonIconBorderRadiusDesktopWidth ? "border-radius: $buttonIconBorderRadiusDesktopWidth;" : "") . "
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper:hover {
		" . ($buttonIconBgHoverColor ? "background-color: $buttonIconBgHoverColor;" : "") . "
		" . ($buttonIconBorderHoverColor ? "border-color: $buttonIconBorderHoverColor;" : "") . "
	}
	.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
		" . ($buttonIconSize['Desktop'] && $buttonIconSizeUnits['Desktop'] ? "width: {$buttonIconSize['Desktop']}{$buttonIconSizeUnits['Desktop']};" : "") . "
		" . ($buttonIconSize['Desktop'] && $buttonIconSizeUnits['Desktop'] ? "height: {$buttonIconSize['Desktop']}{$buttonIconSizeUnits['Desktop']};" : "") . "
		" . ($buttonIconColor ? "fill: $buttonIconColor;" : "") . "
	}
	@media only screen and (max-width: 1024px) {
		.$blockId.fb-advanced-button-wrapper {
			" . ($globalTabletPadding ? "padding: $globalTabletPadding;" : "") . "
			" . ($globalTabletMargin ? "margin: $globalTabletMargin;" : "") . "
			" . ($globalTabletBorderWidth ? "border-width: $globalTabletBorderWidth;" : "") . "
			" . ($globalTabletBorderRadiusWidth ? "border-radius: $globalTabletBorderRadiusWidth;" : "") . "
		}
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button {
			" . ($buttonTabletPaddingValue ? "padding: $buttonTabletPaddingValue;" : "") . "
			" . ($buttonTabletMarginValue ? "margin: $buttonTabletMarginValue;" : "") . "
			" . ($buttonTabletBorderWidthValue ? "border-width: $buttonTabletBorderWidthValue;" : "") . "
			" . ($buttonTabletBorderRadiusValue ? "border-radius: $buttonTabletBorderRadiusValue;" : "") . "
			" . ($buttonWidth['Tablet'] && $buttonWidthUnits['Tablet'] ? "width: {$buttonWidth['Tablet']}{$buttonWidthUnits['Tablet']};" : "") . "
			" . ($buttonFontSize['Tablet'] && $buttonFontSizeUnits['Tablet'] ? "font-size: {$buttonFontSize['Tablet']}{$buttonFontSizeUnits['Tablet']};" : "") . "
			" . ($buttonLetterSpacing['Tablet'] && $buttonLetterSpacingUnits['Tablet'] ? "letter-spacing: {$buttonLetterSpacing['Tablet']}{$buttonLetterSpacingUnits['Tablet']};" : "") . "
			" . ($buttonLineHeight['Tablet'] && $buttonLineHeightUnits['Tablet'] ? "line-height: {$buttonLineHeight['Tablet']}{$buttonLineHeightUnits['Tablet']};" : "") . "
		}
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
			" . ($buttonIconPosition === 'left' ? "margin-right: {$buttonIconGapSize['Tablet']}{$buttonIconGapUnits['Tablet']};" : "") . "
			" . ($buttonIconPosition === 'right' ? "margin-left: {$buttonIconGapSize['Tablet']}{$buttonIconGapUnits['Tablet']};" : "") . "
			" . ($buttonIconBorderTabletWidth ? "border-width: $buttonIconBorderTabletWidth;" : "") . "
			" . ($buttonIconBorderRadiusTabletWidth ? "border-radius: $buttonIconBorderRadiusTabletWidth;" : "") . "
		}
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
			" . ($buttonIconSize['Tablet'] && $buttonIconSizeUnits['Tablet'] ? "width: {$buttonIconSize['Tablet']}{$buttonIconSizeUnits['Tablet']};" : "") . "
			" . ($buttonIconSize['Tablet'] && $buttonIconSizeUnits['Tablet'] ? "height: {$buttonIconSize['Tablet']}{$buttonIconSizeUnits['Tablet']};" : "") . "
		}
	}
	@media only screen and (max-width: 767px) {
		.$blockId.fb-advanced-button-wrapper {
			" . ($globalMobilePadding ? "padding: $globalMobilePadding;" : "") . "
			" . ($globalMobileMargin ? "margin: $globalMobileMargin;" : "") . "
			" . ($globalMobileBorderWidth ? "border-width: $globalMobileBorderWidth;" : "") . "
			" . ($globalMobileBorderRadiusWidth ? "border-radius: $globalMobileBorderRadiusWidth;" : "") . "
		}
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button {
			" . ($buttonMobilePaddingValue ? "padding: $buttonMobilePaddingValue;" : "") . "
			" . ($buttonMobileMarginValue ? "margin: $buttonMobileMarginValue;" : "") . "
			" . ($buttonMobileBorderWidthValue ? "border-width: $buttonMobileBorderWidthValue;" : "") . "
			" . ($buttonMobileBorderRadiusValue ? "border-radius: $buttonMobileBorderRadiusValue;" : "") . "
			" . ($buttonWidth['Mobile'] && $buttonWidthUnits['Mobile'] ? "width: {$buttonWidth['Mobile']}{$buttonWidthUnits['Mobile']};" : "") . "
			" . ($buttonFontSize['Mobile'] && $buttonFontSizeUnits['Mobile'] ? "font-size: {$buttonFontSize['Mobile']}{$buttonFontSizeUnits['Mobile']};" : "") . "
			" . ($buttonLetterSpacing['Mobile'] && $buttonLetterSpacingUnits['Mobile'] ? "letter-spacing: {$buttonLetterSpacing['Mobile']}{$buttonLetterSpacingUnits['Mobile']};" : "") . "
			" . ($buttonLineHeight['Mobile'] && $buttonLineHeightUnits['Mobile'] ? "line-height: {$buttonLineHeight['Mobile']}{$buttonLineHeightUnits['Mobile']};" : "") . "
		}
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
			" . ($buttonIconPosition === 'left' ? "margin-right: {$buttonIconGapSize['Mobile']}{$buttonIconGapUnits['Mobile']};" : "") . "
			" . ($buttonIconPosition === 'right' ? "margin-left: {$buttonIconGapSize['Mobile']}{$buttonIconGapUnits['Mobile']};" : "") . "
			" . ($buttonIconBorderMobileWidth ? "border-width: $buttonIconBorderMobileWidth;" : "") . "
			" . ($buttonIconBorderRadiusMobileWidth ? "border-radius: $buttonIconBorderRadiusMobileWidth;" : "") . "
		}
		.$blockId.fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
			" . ($buttonIconSize['Mobile'] && $buttonIconSizeUnits['Mobile'] ? "width: {$buttonIconSize['Mobile']}{$buttonIconSizeUnits['Mobile']};" : "") . "
			" . ($buttonIconSize['Mobile'] && $buttonIconSizeUnits['Mobile'] ? "height: {$buttonIconSize['Mobile']}{$buttonIconSizeUnits['Mobile']};" : "") . "
		}
	}

";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockId);
