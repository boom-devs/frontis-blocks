<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$block_attributes = $block['attrs'];
$blockID = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';

$counterItemBgColor = isset($block_attributes['counterItemBgColor']) ? sanitize_hex_color($block_attributes['counterItemBgColor']) : '';
$counterIconColor = isset($block_attributes['counterIconColor']) ? sanitize_hex_color($block_attributes['counterIconColor']) : '';

/** Start Border */
$counterItemBorder = isset($block_attributes['counterItemBorder']) ? sanitize_text_field($block_attributes['counterItemBorder']) : '';
$counterItemBorderColor = isset($block_attributes['counterItemBorderColor']) ? sanitize_hex_color($block_attributes['counterItemBorderColor']) : '';
$counterItemBorderTypeUnits = isset($block_attributes['counterItemBorderTypeUnits']) ? $block_attributes['counterItemBorderTypeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterItemBorderTypeDesktop = isset($block_attributes['counterItemBorderTypeDesktop']) ? $block_attributes['counterItemBorderTypeDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$counterItemBorderTypeTablet = isset($block_attributes['counterItemBorderTypeTablet']) ? $block_attributes['counterItemBorderTypeTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$counterItemBorderTypeMobile = isset($block_attributes['counterItemBorderTypeMobile']) ? $block_attributes['counterItemBorderTypeMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$counterItemBorderTypeGetDesktop = $counterItemBorderTypeDesktop['top'] . $counterItemBorderTypeUnits['Desktop'] . ' ' . $counterItemBorderTypeDesktop['right'] . $counterItemBorderTypeUnits['Desktop'] . ' ' . $counterItemBorderTypeDesktop['bottom'] . $counterItemBorderTypeUnits['Desktop'] . ' ' . $counterItemBorderTypeDesktop['left'] . $counterItemBorderTypeUnits['Desktop'];
$counterItemBorderTypeGetTablet = $counterItemBorderTypeTablet['top'] . $counterItemBorderTypeUnits['Tablet'] . ' ' . $counterItemBorderTypeTablet['right'] . $counterItemBorderTypeUnits['Tablet'] . ' ' . $counterItemBorderTypeTablet['bottom'] . $counterItemBorderTypeUnits['Tablet'] . ' ' . $counterItemBorderTypeTablet['left'] . $counterItemBorderTypeUnits['Tablet'];
$counterItemBorderTypeGetMobile = $counterItemBorderTypeMobile['top'] . $counterItemBorderTypeUnits['Mobile'] . ' ' . $counterItemBorderTypeMobile['right'] . $counterItemBorderTypeUnits['Mobile'] . ' ' . $counterItemBorderTypeMobile['bottom'] . $counterItemBorderTypeUnits['Mobile'] . ' ' . $counterItemBorderTypeMobile['left'] . $counterItemBorderTypeUnits['Mobile'];
/** End Border */

/** Start Border Radius */
$counterItemBorderRadiusUnits = isset($block_attributes['counterItemBorderRadiusUnits']) ? $block_attributes['counterItemBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterItemBorderRadiusDesktop = isset($block_attributes['counterItemBorderRadiusDesktop']) ? $block_attributes['counterItemBorderRadiusDesktop'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$counterItemBorderRadiusTablet = isset($block_attributes['counterItemBorderRadiusTablet']) ? $block_attributes['counterItemBorderRadiusTablet'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$counterItemBorderRadiusMobile = isset($block_attributes['counterItemBorderRadiusMobile']) ? $block_attributes['counterItemBorderRadiusMobile'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$counterItemBorderRadiusGetDesktop = $counterItemBorderRadiusDesktop['top'] . $counterItemBorderRadiusUnits['Desktop'] . ' ' . $counterItemBorderRadiusDesktop['right'] . $counterItemBorderRadiusUnits['Desktop'] . ' ' . $counterItemBorderRadiusDesktop['bottom'] . $counterItemBorderRadiusUnits['Desktop'] . ' ' . $counterItemBorderRadiusDesktop['left'] . $counterItemBorderRadiusUnits['Desktop'];
$counterItemBorderRadiusGetTablet = $counterItemBorderRadiusTablet['top'] . $counterItemBorderRadiusUnits['Tablet'] . ' ' . $counterItemBorderRadiusTablet['right'] . $counterItemBorderRadiusUnits['Tablet'] . ' ' . $counterItemBorderRadiusTablet['bottom'] . $counterItemBorderRadiusUnits['Tablet'] . ' ' . $counterItemBorderRadiusTablet['left'] . $counterItemBorderRadiusUnits['Tablet'];
$counterItemBorderRadiusGetMobile = $counterItemBorderRadiusMobile['top'] . $counterItemBorderRadiusUnits['Mobile'] . ' ' . $counterItemBorderRadiusMobile['right'] . $counterItemBorderRadiusUnits['Mobile'] . ' ' . $counterItemBorderRadiusMobile['bottom'] . $counterItemBorderRadiusUnits['Mobile'] . ' ' . $counterItemBorderRadiusMobile['left'] . $counterItemBorderRadiusUnits['Mobile'];
/** End Border Radius */


$counterItemSize = isset($block_attributes['counterItemSize']) ? $block_attributes['counterItemSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$counterItemSizeUnits = isset($block_attributes['counterItemSizeUnits']) ? $block_attributes['counterItemSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$counterIconSize = isset($block_attributes['counterIconSize']) ? $block_attributes['counterIconSize'] : array('Desktop' => '60', 'Tablet' => '', 'Mobile' => '');
$counterIconSizeUnits = isset($block_attributes['counterIconSizeUnits']) ? $block_attributes['counterIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');


/** Counter Icon Margin Start*/
$counterIconMarginUnits = isset($block_attributes['counterIconMarginUnits']) ? $block_attributes['counterIconMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Get margin values for different devices
$counterIconMarginDesktop = isset($block_attributes['counterIconMarginDesktop']) ? $block_attributes['counterIconMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$counterIconMarginTablet = isset($block_attributes['counterIconMarginTablet']) ? $block_attributes['counterIconMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$counterIconMarginMobile = isset($block_attributes['counterIconMarginMobile']) ? $block_attributes['counterIconMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

// Construct margin strings for each device type
$counterIconMarginGetDesktop = $counterIconMarginDesktop['top'] . $counterIconMarginUnits['Desktop'] . ' ' . $counterIconMarginDesktop['right'] . $counterIconMarginUnits['Desktop'] . ' ' . $counterIconMarginDesktop['bottom'] . $counterIconMarginUnits['Desktop'] . ' ' . $counterIconMarginDesktop['left'] . $counterIconMarginUnits['Desktop'];
$counterIconMarginGetTablet = $counterIconMarginTablet['top'] . $counterIconMarginUnits['Tablet'] . ' ' . $counterIconMarginTablet['right'] . $counterIconMarginUnits['Tablet'] . ' ' . $counterIconMarginTablet['bottom'] . $counterIconMarginUnits['Tablet'] . ' ' . $counterIconMarginTablet['left'] . $counterIconMarginUnits['Tablet'];
$counterIconMarginGetMobile = $counterIconMarginMobile['top'] . $counterIconMarginUnits['Mobile'] . ' ' . $counterIconMarginMobile['right'] . $counterIconMarginUnits['Mobile'] . ' ' . $counterIconMarginMobile['bottom'] . $counterIconMarginUnits['Mobile'] . ' ' . $counterIconMarginMobile['left'] . $counterIconMarginUnits['Mobile'];
/** Counter Icon Margin End*/


/** Counter Number Typography */
$counterNumberFontFamily = isset($block_attributes['counterNumberFontFamily']) ? sanitize_text_field($block_attributes['counterNumberFontFamily']) : 'inherit';
$counterNumberFontSize = isset($block_attributes['counterNumberFontSize']) ? $block_attributes['counterNumberFontSize'] : array('Desktop' => '62', 'Tablet' => '58', 'Mobile' => '52');
$counterNumberFontSizeUnits = isset($block_attributes['counterNumberFontSizeUnits']) ? $block_attributes['counterNumberFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterNumberFontWeight = isset($block_attributes['counterNumberFontWeight']) ? sanitize_text_field($block_attributes['counterNumberFontWeight']) : '700';
$counterNumberFontStyle = isset($block_attributes['counterNumberFontStyle']) ? sanitize_text_field($block_attributes['counterNumberFontStyle']) : '';
$counterNumberTextTransform = isset($block_attributes['counterNumberTextTransform']) ? sanitize_text_field($block_attributes['counterNumberTextTransform']) : '';
$counterNumberTextDecoration = isset($block_attributes['counterNumberTextDecoration']) ? sanitize_text_field($block_attributes['counterNumberTextDecoration']) : '';
$counterNumberLetterSpacing = isset($block_attributes['counterNumberLetterSpacing']) ? $block_attributes['counterNumberLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$counterNumberLetterSpacingUnits = isset($block_attributes['counterNumberLetterSpacingUnits']) ? $block_attributes['counterNumberLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterNumberLineHeight = isset($block_attributes['counterNumberLineHeight']) ? $block_attributes['counterNumberLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$counterNumberLineHeightUnits = isset($block_attributes['counterNumberLineHeightUnits']) ? $block_attributes['counterNumberLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterNumberFontColor = isset($block_attributes['counterNumberFontColor']) ? sanitize_hex_color($block_attributes['counterNumberFontColor']) : '';
$counterNumberFontHoverColor = isset($block_attributes['counterNumberFontHoverColor']) ? sanitize_hex_color($block_attributes['counterNumberFontHoverColor']) : '';


/** Counter Number Margin Start*/
$counterNumberMarginUnits = isset($block_attributes['counterNumberMarginUnits']) ? $block_attributes['counterNumberMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Get margin values for different devices
$counterNumberMarginDesktop = isset($block_attributes['counterNumberMarginDesktop']) ? $block_attributes['counterNumberMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$counterNumberMarginTablet = isset($block_attributes['counterNumberMarginTablet']) ? $block_attributes['counterNumberMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$counterNumberMarginMobile = isset($block_attributes['counterNumberMarginMobile']) ? $block_attributes['counterNumberMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

// Construct margin strings for each device type
$counterNumberMarginGetDesktop = $counterNumberMarginDesktop['top'] . $counterNumberMarginUnits['Desktop'] . ' ' . $counterNumberMarginDesktop['right'] . $counterNumberMarginUnits['Desktop'] . ' ' . $counterNumberMarginDesktop['bottom'] . $counterNumberMarginUnits['Desktop'] . ' ' . $counterNumberMarginDesktop['left'] . $counterNumberMarginUnits['Desktop'];
$counterNumberMarginGetTablet = $counterNumberMarginTablet['top'] . $counterNumberMarginUnits['Tablet'] . ' ' . $counterNumberMarginTablet['right'] . $counterNumberMarginUnits['Tablet'] . ' ' . $counterNumberMarginTablet['bottom'] . $counterNumberMarginUnits['Tablet'] . ' ' . $counterNumberMarginTablet['left'] . $counterNumberMarginUnits['Tablet'];
$counterNumberMarginGetMobile = $counterNumberMarginMobile['top'] . $counterNumberMarginUnits['Mobile'] . ' ' . $counterNumberMarginMobile['right'] . $counterNumberMarginUnits['Mobile'] . ' ' . $counterNumberMarginMobile['bottom'] . $counterNumberMarginUnits['Mobile'] . ' ' . $counterNumberMarginMobile['left'] . $counterNumberMarginUnits['Mobile'];
/** Counter Number Margin End*/



/** Counter Number Title Typography */
$counterNumberTitleFontFamily = isset($block_attributes['counterNumberTitleFontFamily']) ? sanitize_text_field($block_attributes['counterNumberTitleFontFamily']) : 'inherit';
$counterNumberTitleFontSize = isset($block_attributes['counterNumberTitleFontSize']) ? $block_attributes['counterNumberTitleFontSize'] : array('Desktop' => '18', 'Tablet' => '16', 'Mobile' => '16');
$counterNumberTitleFontSizeUnits = isset($block_attributes['counterNumberTitleFontSizeUnits']) ? $block_attributes['counterNumberTitleFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterNumberTitleFontWeight = isset($block_attributes['counterNumberTitleFontWeight']) ? sanitize_text_field($block_attributes['counterNumberTitleFontWeight']) : '400';
$counterNumberTitleFontStyle = isset($block_attributes['counterNumberTitleFontStyle']) ? sanitize_text_field($block_attributes['counterNumberTitleFontStyle']) : '';
$counterNumberTitleTextTransform = isset($block_attributes['counterNumberTitleTextTransform']) ? sanitize_text_field($block_attributes['counterNumberTitleTextTransform']) : '';
$counterNumberTitleTextDecoration = isset($block_attributes['counterNumberTitleTextDecoration']) ? sanitize_text_field($block_attributes['counterNumberTitleTextDecoration']) : '';
$counterNumberTitleLetterSpacing = isset($block_attributes['counterNumberTitleLetterSpacing']) ? $block_attributes['counterNumberTitleLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$counterNumberTitleLetterSpacingUnits = isset($block_attributes['counterNumberTitleLetterSpacingUnits']) ? $block_attributes['counterNumberTitleLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterNumberTitleLineHeight = isset($block_attributes['counterNumberTitleLineHeight']) ? $block_attributes['counterNumberTitleLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$counterNumberTitleLineHeightUnits = isset($block_attributes['counterNumberTitleLineHeightUnits']) ? $block_attributes['counterNumberTitleLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$counterNumberTitleFontColor = isset($block_attributes['counterNumberTitleFontColor']) ? sanitize_hex_color($block_attributes['counterNumberTitleFontColor']) : '';
$counterNumberTitleFontHoverColor = isset($block_attributes['counterNumberTitleFontHoverColor']) ? sanitize_hex_color($block_attributes['counterNumberTitleFontHoverColor']) : '';

/** Counter Number Title Margin Start*/
$counterNumberTitleMarginUnits = isset($block_attributes['counterNumberTitleMarginUnits']) ? $block_attributes['counterNumberTitleMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

// Get margin values for different devices
$counterNumberTitleMarginDesktop = isset($block_attributes['counterNumberTitleMarginDesktop']) ? $block_attributes['counterNumberTitleMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$counterNumberTitleMarginTablet = isset($block_attributes['counterNumberTitleMarginTablet']) ? $block_attributes['counterNumberTitleMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$counterNumberTitleMarginMobile = isset($block_attributes['counterNumberTitleMarginMobile']) ? $block_attributes['counterNumberTitleMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

// Construct margin strings for each device type
$counterNumberTitleMarginGetDesktop = $counterNumberTitleMarginDesktop['top'] . $counterNumberTitleMarginUnits['Desktop'] . ' ' . $counterNumberTitleMarginDesktop['right'] . $counterNumberTitleMarginUnits['Desktop'] . ' ' . $counterNumberTitleMarginDesktop['bottom'] . $counterNumberTitleMarginUnits['Desktop'] . ' ' . $counterNumberTitleMarginDesktop['left'] . $counterNumberTitleMarginUnits['Desktop'];
$counterNumberTitleMarginGetTablet = $counterNumberTitleMarginTablet['top'] . $counterNumberTitleMarginUnits['Tablet'] . ' ' . $counterNumberTitleMarginTablet['right'] . $counterNumberTitleMarginUnits['Tablet'] . ' ' . $counterNumberTitleMarginTablet['bottom'] . $counterNumberTitleMarginUnits['Tablet'] . ' ' . $counterNumberTitleMarginTablet['left'] . $counterNumberTitleMarginUnits['Tablet'];
$counterNumberTitleMarginGetMobile = $counterNumberTitleMarginMobile['top'] . $counterNumberTitleMarginUnits['Mobile'] . ' ' . $counterNumberTitleMarginMobile['right'] . $counterNumberTitleMarginUnits['Mobile'] . ' ' . $counterNumberTitleMarginMobile['bottom'] . $counterNumberTitleMarginUnits['Mobile'] . ' ' . $counterNumberTitleMarginMobile['left'] . $counterNumberTitleMarginUnits['Mobile'];
/** Counter Number Title Margin End*/


// Generate CSS content
$css_content = "
	.fb-counter-wrapper.$blockID .fb-counter-item {
		" . ($counterItemBgColor ? "background: $counterItemBgColor;" : "") . "
		" . ($counterItemSize['Desktop'] && $counterItemSizeUnits['Desktop'] ? "width: {$counterItemSize['Desktop']}{$counterItemSizeUnits['Desktop']};" : "") . "
		" . ($counterItemSize['Desktop'] && $counterItemSizeUnits['Desktop'] ? "height: {$counterItemSize['Desktop']}{$counterItemSizeUnits['Desktop']};" : "") . "
		" . ($counterItemBorder ? "border: $counterItemBorder;" : "") . "
		" . ($counterItemBorderTypeGetDesktop ? "border-width: $counterItemBorderTypeGetDesktop;" : "") . "
		" . ($counterItemBorderRadiusGetDesktop ? "border-radius: $counterItemBorderRadiusGetDesktop;" : "") . "
		" . ($counterItemBorderColor ? "border-color: $counterItemBorderColor;" : "") . "
	}

	.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-icon svg {
		" . ($counterIconSize['Desktop'] && $counterIconSizeUnits['Desktop'] ? "width: {$counterIconSize['Desktop']}{$counterIconSizeUnits['Desktop']};" : "") . "
		" . ($counterIconColor ? "fill: $counterIconColor;" : "") . "
		" . ($counterIconMarginGetDesktop ? "margin: $counterIconMarginGetDesktop;" : "") . "
	}

	.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-wrapper {
		" . ($counterNumberMarginGetDesktop ? "margin: $counterNumberMarginGetDesktop;" : "") . "
	}

	.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number,
	.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-prefix,
	.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-suffix {
		" . ($counterNumberFontColor ? "color: $counterNumberFontColor;" : "") . "
		" . ($counterNumberFontFamily ? "font-family: $counterNumberFontFamily;" : "") . "
		" . ($counterNumberFontSize['Desktop'] && $counterNumberFontSizeUnits['Desktop'] ? "font-size: {$counterNumberFontSize['Desktop']}{$counterNumberFontSizeUnits['Desktop']};" : "") . "
		" . ($counterNumberFontWeight ? "font-weight: $counterNumberFontWeight;" : "") . "
		" . ($counterNumberFontStyle ? "font-style: $counterNumberFontStyle;" : "") . "
		" . ($counterNumberTextTransform ? "text-transform: $counterNumberTextTransform;" : "") . "
		" . ($counterNumberTextDecoration ? "text-decoration: $counterNumberTextDecoration;" : "") . "
		" . ($counterNumberLetterSpacing['Desktop'] && $counterNumberLetterSpacingUnits['Desktop'] ? "letter-spacing: {$counterNumberLetterSpacing['Desktop']}{$counterNumberLetterSpacingUnits['Desktop']};" : "") . "
		" . ($counterNumberLineHeight['Desktop'] && $counterNumberLineHeightUnits['Desktop'] ? "line-height: {$counterNumberLineHeight['Desktop']}{$counterNumberLineHeightUnits['Desktop']};" : "") . "
	}

	.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-title {
		" . ($counterNumberTitleFontColor ? "color: $counterNumberTitleFontColor;" : "") . "
		" . ($counterNumberTitleFontFamily ? "font-family: $counterNumberTitleFontFamily;" : "") . "
		" . ($counterNumberTitleFontSize['Desktop'] && $counterNumberTitleFontSizeUnits['Desktop'] ? "font-size: {$counterNumberTitleFontSize['Desktop']}{$counterNumberTitleFontSizeUnits['Desktop']};" : "") . "
		" . ($counterNumberTitleFontWeight ? "font-weight: $counterNumberTitleFontWeight;" : "") . "
		" . ($counterNumberTitleFontStyle ? "font-style: $counterNumberTitleFontStyle;" : "") . "
		" . ($counterNumberTitleTextTransform ? "text-transform: $counterNumberTitleTextTransform;" : "") . "
		" . ($counterNumberTitleTextDecoration ? "text-decoration: $counterNumberTitleTextDecoration;" : "") . "
		" . ($counterNumberTitleLetterSpacing['Desktop'] && $counterNumberTitleLetterSpacingUnits['Desktop'] ? "letter-spacing: {$counterNumberTitleLetterSpacing['Desktop']}{$counterNumberTitleLetterSpacingUnits['Desktop']};" : "") . "
		" . ($counterNumberTitleLineHeight['Desktop'] && $counterNumberTitleLineHeightUnits['Desktop'] ? "line-height: {$counterNumberTitleLineHeight['Desktop']}{$counterNumberTitleLineHeightUnits['Desktop']};" : "") . "
		" . ($counterNumberTitleMarginGetDesktop ? "margin: $counterNumberTitleMarginGetDesktop;" : "") . "
	}

	@media only screen and (max-width: 1024px) {
		.fb-counter-wrapper.$blockID .fb-counter-item {
			" . ($counterItemSize['Tablet'] && $counterItemSizeUnits['Tablet'] ? "width: {$counterItemSize['Tablet']}{$counterItemSizeUnits['Tablet']};" : "") . "
			" . ($counterItemSize['Tablet'] && $counterItemSizeUnits['Tablet'] ? "height: {$counterItemSize['Tablet']}{$counterItemSizeUnits['Tablet']};" : "") . "
			" . ($counterItemBorderTypeGetTablet ? "border-width: $counterItemBorderTypeGetTablet;" : "") . "
			" . ($counterItemBorderRadiusGetTablet ? "border-radius: $counterItemBorderRadiusGetTablet;" : "") . "
		}
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-icon svg {
			" . ($counterIconSize['Tablet'] && $counterIconSizeUnits['Tablet'] ? "width: {$counterIconSize['Tablet']}{$counterIconSizeUnits['Tablet']};" : "") . "
			" . ($counterIconMarginGetTablet ? "margin: $counterIconMarginGetTablet;" : "") . "
		}
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-wrapper {
			" . ($counterNumberMarginGetTablet ? "margin: $counterNumberMarginGetTablet;" : "") . "
		}

		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number,
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-prefix,
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-suffix {
			" . ($counterNumberFontSize['Tablet'] && $counterNumberFontSizeUnits['Tablet'] ? "font-size: {$counterNumberFontSize['Tablet']}{$counterNumberFontSizeUnits['Tablet']};" : "") . "
			" . ($counterNumberLetterSpacing['Tablet'] && $counterNumberLetterSpacingUnits['Tablet'] ? "letter-spacing: {$counterNumberLetterSpacing['Tablet']}{$counterNumberLetterSpacingUnits['Tablet']};" : "") . "
			" . ($counterNumberLineHeight['Tablet'] && $counterNumberLineHeightUnits['Tablet'] ? "line-height: {$counterNumberLineHeight['Tablet']}{$counterNumberLineHeightUnits['Tablet']};" : "") . "
		}

		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-title {
			" . ($counterNumberTitleFontSize['Tablet'] && $counterNumberTitleFontSizeUnits['Tablet'] ? "font-size: {$counterNumberTitleFontSize['Tablet']}{$counterNumberTitleFontSizeUnits['Tablet']};" : "") . "
			" . ($counterNumberTitleLetterSpacing['Tablet'] && $counterNumberTitleLetterSpacingUnits['Tablet'] ? "letter-spacing: {$counterNumberTitleLetterSpacing['Tablet']}{$counterNumberTitleLetterSpacingUnits['Tablet']};" : "") . "
			" . ($counterNumberTitleLineHeight['Tablet'] && $counterNumberTitleLineHeightUnits['Tablet'] ? "line-height: {$counterNumberTitleLineHeight['Tablet']}{$counterNumberTitleLineHeightUnits['Tablet']};" : "") . "
			" . ($counterNumberTitleMarginGetTablet ? "margin: $counterNumberTitleMarginGetTablet;" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.fb-counter-wrapper.$blockID .fb-counter-item {
			" . ($counterItemSize['Mobile'] && $counterItemSizeUnits['Mobile'] ? "width: {$counterItemSize['Mobile']}{$counterItemSizeUnits['Mobile']};" : "") . "
			" . ($counterItemSize['Mobile'] && $counterItemSizeUnits['Mobile'] ? "height: {$counterItemSize['Mobile']}{$counterItemSizeUnits['Mobile']};" : "") . "
			" . ($counterItemBorderTypeGetTablet ? "border-width: $counterItemBorderTypeGetTablet;" : "") . "
			" . ($counterItemBorderRadiusGetTablet ? "border-radius: $counterItemBorderRadiusGetTablet;" : "") . "
		}
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-icon svg {
			" . ($counterIconSize['Mobile'] && $counterIconSizeUnits['Mobile'] ? "width: {$counterIconSize['Mobile']}{$counterIconSizeUnits['Mobile']};" : "") . "
			" . ($counterIconMarginGetMobile ? "margin: $counterIconMarginGetMobile;" : "") . "
		}
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-wrapper {
			" . ($counterNumberMarginGetMobile ? "margin: $counterNumberMarginGetMobile;" : "") . "
		}

		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number,
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-prefix,
		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-number-suffix {
			" . ($counterNumberFontSize['Mobile'] && $counterNumberFontSizeUnits['Mobile'] ? "font-size: {$counterNumberFontSize['Mobile']}{$counterNumberFontSizeUnits['Mobile']};" : "") . "
			" . ($counterNumberLetterSpacing['Mobile'] && $counterNumberLetterSpacingUnits['Mobile'] ? "letter-spacing: {$counterNumberLetterSpacing['Mobile']}{$counterNumberLetterSpacingUnits['Mobile']};" : "") . "
			" . ($counterNumberLineHeight['Mobile'] && $counterNumberLineHeightUnits['Mobile'] ? "line-height: {$counterNumberLineHeight['Mobile']}{$counterNumberLineHeightUnits['Mobile']};" : "") . "
		}

		.fb-counter-wrapper.$blockID .fb-counter-item .fb-counter-title {
			" . ($counterNumberTitleFontSize['Mobile'] && $counterNumberTitleFontSizeUnits['Mobile'] ? "font-size: {$counterNumberTitleFontSize['Mobile']}{$counterNumberTitleFontSizeUnits['Mobile']};" : "") . "
			" . ($counterNumberTitleLetterSpacing['Mobile'] && $counterNumberTitleLetterSpacingUnits['Mobile'] ? "letter-spacing: {$counterNumberTitleLetterSpacing['Mobile']}{$counterNumberTitleLetterSpacingUnits['Mobile']};" : "") . "
			" . ($counterNumberTitleLineHeight['Mobile'] && $counterNumberTitleLineHeightUnits['Mobile'] ? "line-height: {$counterNumberTitleLineHeight['Mobile']}{$counterNumberTitleLineHeightUnits['Mobile']};" : "") . "
			" . ($counterNumberTitleMarginGetMobile ? "margin: $counterNumberTitleMarginGetMobile;" : "") . "
		}
	}
";


// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID);
