<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$block_attributes = $block['attrs'];
$block_ID = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';

$countDownItemBgColor = isset($block_attributes['countDownItemBgColor']) ? sanitize_hex_color($block_attributes['countDownItemBgColor']) : '#F97255';

/** Start Border */
$countDownItemBorder = isset($block_attributes['countDownItemBorder']) ? sanitize_text_field($block_attributes['countDownItemBorder']) : '';
$countDownItemBorderColor = isset($block_attributes['countDownItemBorderColor']) ? sanitize_hex_color($block_attributes['countDownItemBorderColor']) : '';
$countDownItemBorderTypeUnits = isset($block_attributes['countDownItemBorderTypeUnits']) ? $block_attributes['countDownItemBorderTypeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$countDownItemBorderTypeDesktop = isset($block_attributes['countDownItemBorderTypeDesktop']) ? $block_attributes['countDownItemBorderTypeDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$countDownItemBorderTypeTablet = isset($block_attributes['countDownItemBorderTypeTablet']) ? $block_attributes['countDownItemBorderTypeTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$countDownItemBorderTypeMobile = isset($block_attributes['countDownItemBorderTypeMobile']) ? $block_attributes['countDownItemBorderTypeMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$countDownItemBorderTypeGetDesktop = $countDownItemBorderTypeDesktop['top'] . $countDownItemBorderTypeUnits['Desktop'] . ' ' . $countDownItemBorderTypeDesktop['right'] . $countDownItemBorderTypeUnits['Desktop'] . ' ' . $countDownItemBorderTypeDesktop['bottom'] . $countDownItemBorderTypeUnits['Desktop'] . ' ' . $countDownItemBorderTypeDesktop['left'] . $countDownItemBorderTypeUnits['Desktop'];
$countDownItemBorderTypeGetTablet = $countDownItemBorderTypeTablet['top'] . $countDownItemBorderTypeUnits['Tablet'] . ' ' . $countDownItemBorderTypeTablet['right'] . $countDownItemBorderTypeUnits['Tablet'] . ' ' . $countDownItemBorderTypeTablet['bottom'] . $countDownItemBorderTypeUnits['Tablet'] . ' ' . $countDownItemBorderTypeTablet['left'] . $countDownItemBorderTypeUnits['Tablet'];
$countDownItemBorderTypeGetMobile = $countDownItemBorderTypeMobile['top'] . $countDownItemBorderTypeUnits['Mobile'] . ' ' . $countDownItemBorderTypeMobile['right'] . $countDownItemBorderTypeUnits['Mobile'] . ' ' . $countDownItemBorderTypeMobile['bottom'] . $countDownItemBorderTypeUnits['Mobile'] . ' ' . $countDownItemBorderTypeMobile['left'] . $countDownItemBorderTypeUnits['Mobile'];
/** End Border */

/** Start Border Radius */
$countDownItemBorderRadiusUnits = isset($block_attributes['countDownItemBorderRadiusUnits']) ? $block_attributes['countDownItemBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$countDownItemBorderRadiusDesktop = isset($block_attributes['countDownItemBorderRadiusDesktop']) ? $block_attributes['countDownItemBorderRadiusDesktop'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$countDownItemBorderRadiusTablet = isset($block_attributes['countDownItemBorderRadiusTablet']) ? $block_attributes['countDownItemBorderRadiusTablet'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$countDownItemBorderRadiusMobile = isset($block_attributes['countDownItemBorderRadiusMobile']) ? $block_attributes['countDownItemBorderRadiusMobile'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$countDownItemBorderRadiusGetDesktop = $countDownItemBorderRadiusDesktop['top'] . $countDownItemBorderRadiusUnits['Desktop'] . ' ' . $countDownItemBorderRadiusDesktop['right'] . $countDownItemBorderRadiusUnits['Desktop'] . ' ' . $countDownItemBorderRadiusDesktop['bottom'] . $countDownItemBorderRadiusUnits['Desktop'] . ' ' . $countDownItemBorderRadiusDesktop['left'] . $countDownItemBorderRadiusUnits['Desktop'];
$countDownItemBorderRadiusGetTablet = $countDownItemBorderRadiusTablet['top'] . $countDownItemBorderRadiusUnits['Tablet'] . ' ' . $countDownItemBorderRadiusTablet['right'] . $countDownItemBorderRadiusUnits['Tablet'] . ' ' . $countDownItemBorderRadiusTablet['bottom'] . $countDownItemBorderRadiusUnits['Tablet'] . ' ' . $countDownItemBorderRadiusTablet['left'] . $countDownItemBorderRadiusUnits['Tablet'];
$countDownItemBorderRadiusGetMobile = $countDownItemBorderRadiusMobile['top'] . $countDownItemBorderRadiusUnits['Mobile'] . ' ' . $countDownItemBorderRadiusMobile['right'] . $countDownItemBorderRadiusUnits['Mobile'] . ' ' . $countDownItemBorderRadiusMobile['bottom'] . $countDownItemBorderRadiusUnits['Mobile'] . ' ' . $countDownItemBorderRadiusMobile['left'] . $countDownItemBorderRadiusUnits['Mobile'];
/** End Border Radius */

$countDownItemGap = isset($block_attributes['countDownItemGap']) ? $block_attributes['countDownItemGap'] : array('Desktop' => '20', 'Tablet' => '20', 'Mobile' => '20');
$countDownItemGapUnits = isset($block_attributes['countDownItemGapUnits']) ? $block_attributes['countDownItemGapUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$countDownItemSize = isset($block_attributes['countDownItemSize']) ? $block_attributes['countDownItemSize'] : array('Desktop' => '144', 'Tablet' => '140', 'Mobile' => '140');
$countDownItemSizeUnits = isset($block_attributes['countDownItemSizeUnits']) ? $block_attributes['countDownItemSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');


/** Digit Typography */
$digitFontFamily = isset($block_attributes['digitFontFamily']) ? sanitize_text_field($block_attributes['digitFontFamily']) : 'inherit';
$digitFontSize = isset($block_attributes['digitFontSize']) ? $block_attributes['digitFontSize'] : array('Desktop' => '48', 'Tablet' => '40', 'Mobile' => '38');
$digitFontSizeUnits = isset($block_attributes['digitFontSizeUnits']) ? $block_attributes['digitFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$digitFontWeight = isset($block_attributes['digitFontWeight']) ? sanitize_text_field($block_attributes['digitFontWeight']) : '700';
$digitFontStyle = isset($block_attributes['digitFontStyle']) ? sanitize_text_field($block_attributes['digitFontStyle']) : '';
$digitTextTransform = isset($block_attributes['digitTextTransform']) ? sanitize_text_field($block_attributes['digitTextTransform']) : '';
$digitTextDecoration = isset($block_attributes['digitTextDecoration']) ? sanitize_text_field($block_attributes['digitTextDecoration']) : '';
$digitLetterSpacing = isset($block_attributes['digitLetterSpacing']) ? $block_attributes['digitLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$digitLetterSpacingUnits = isset($block_attributes['digitLetterSpacingUnits']) ? $block_attributes['digitLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$digitLineHeight = isset($block_attributes['digitLineHeight']) ? $block_attributes['digitLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$digitLineHeightUnits = isset($block_attributes['digitLineHeightUnits']) ? $block_attributes['digitLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$digitFontColor = isset($block_attributes['digitFontColor']) ? sanitize_hex_color($block_attributes['digitFontColor']) : '#fff';
$digitFontHoverColor = isset($block_attributes['digitFontHoverColor']) ? sanitize_hex_color($block_attributes['digitFontHoverColor']) : '';


/** Label Typography */
$labelFontFamily = isset($block_attributes['labelFontFamily']) ? sanitize_text_field($block_attributes['labelFontFamily']) : 'inherit';
$labelFontSize = isset($block_attributes['labelFontSize']) ? $block_attributes['labelFontSize'] : array('Desktop' => '14', 'Tablet' => '', 'Mobile' => '');
$labelFontSizeUnits = isset($block_attributes['labelFontSizeUnits']) ? $block_attributes['labelFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$labelFontWeight = isset($block_attributes['labelFontWeight']) ? sanitize_text_field($block_attributes['labelFontWeight']) : '400';
$labelFontStyle = isset($block_attributes['labelFontStyle']) ? sanitize_text_field($block_attributes['labelFontStyle']) : '';
$labelTextTransform = isset($block_attributes['labelTextTransform']) ? sanitize_text_field($block_attributes['labelTextTransform']) : '';
$labelTextDecoration = isset($block_attributes['labelTextDecoration']) ? sanitize_text_field($block_attributes['labelTextDecoration']) : '';
$labelLetterSpacing = isset($block_attributes['labelLetterSpacing']) ? $block_attributes['labelLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$labelLetterSpacingUnits = isset($block_attributes['labelLetterSpacingUnits']) ? $block_attributes['labelLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$labelLineHeight = isset($block_attributes['labelLineHeight']) ? $block_attributes['labelLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$labelLineHeightUnits = isset($block_attributes['labelLineHeightUnits']) ? $block_attributes['labelLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$labelFontColor = isset($block_attributes['labelFontColor']) ? sanitize_hex_color($block_attributes['labelFontColor']) : '#fff';
$labelFontHoverColor = isset($block_attributes['labelFontHoverColor']) ? sanitize_hex_color($block_attributes['labelFontHoverColor']) : '';



// Generate CSS content
$css_content = "
	.fb-count-down-wrapper.$block_ID{
		" . ($countDownItemGap['Desktop'] && $countDownItemGapUnits['Desktop'] ? "gap: {$countDownItemGap['Desktop']}{$countDownItemGapUnits['Desktop']};" : "") . "
	}
	.fb-count-down-wrapper.$block_ID .fb-count-down-item {
		" . ($countDownItemBorderTypeGetDesktop ? "border-width: $countDownItemBorderTypeGetDesktop;" : "") . "
		" . ($countDownItemBorderRadiusGetDesktop ? "border-radius: $countDownItemBorderRadiusGetDesktop;" : "") . "
		" . ($countDownItemBorder ? "border: $countDownItemBorder;" : "") . "
		" . ($countDownItemBorderColor ? "border-color: $countDownItemBorderColor;" : "") . "
		" . ($countDownItemBgColor ? "background: $countDownItemBgColor;" : "") . "
		" . ($countDownItemSize['Desktop'] && $countDownItemSizeUnits['Desktop'] ? "width: {$countDownItemSize['Desktop']}{$countDownItemSizeUnits['Desktop']};" : "") . "
		" . ($countDownItemSize['Desktop'] && $countDownItemSizeUnits['Desktop'] ? "height: {$countDownItemSize['Desktop']}{$countDownItemSizeUnits['Desktop']};" : "") . "
	}
	.fb-count-down-wrapper.$block_ID .fb-count-down-item .fb-count-down-time{
		" . ($digitFontColor ? "color: $digitFontColor;" : "") . "
		" . ($digitFontFamily ? "font-family: $digitFontFamily;" : "") . "
		" . ($digitFontSize['Desktop'] && $digitFontSizeUnits['Desktop'] ? "font-size: {$digitFontSize['Desktop']}{$digitFontSizeUnits['Desktop']};" : "") . "
		" . ($digitFontWeight ? "font-weight: $digitFontWeight;" : "") . "
		" . ($digitFontStyle ? "font-style: $digitFontStyle;" : "") . "
		" . ($digitTextTransform ? "text-transform: $digitTextTransform;" : "") . "
		" . ($digitTextDecoration ? "text-decoration: $digitTextDecoration;" : "") . "
		" . ($digitLetterSpacing['Desktop'] && $digitLetterSpacingUnits['Desktop'] ? "letter-spacing: {$digitLetterSpacing['Desktop']}{$digitLetterSpacingUnits['Desktop']};" : "") . "
		" . ($digitLineHeight['Desktop'] && $digitLineHeightUnits['Desktop'] ? "line-height: {$digitLineHeight['Desktop']}{$digitLineHeightUnits['Desktop']};" : "") . "
	}
	.fb-count-down-wrapper.$block_ID .fb-count-down-item .fb-count-down-label{
		" . ($labelFontColor ? "color: $labelFontColor;" : "") . "
		" . ($labelFontFamily ? "font-family: $labelFontFamily;" : "") . "
		" . ($labelFontSize['Desktop'] && $labelFontSizeUnits['Desktop'] ? "font-size: {$labelFontSize['Desktop']}{$labelFontSizeUnits['Desktop']};" : "") . "
		" . ($labelFontWeight ? "font-weight: $labelFontWeight;" : "") . "
		" . ($labelFontStyle ? "font-style: $labelFontStyle;" : "") . "
		" . ($labelTextTransform ? "text-transform: $labelTextTransform;" : "") . "
		" . ($labelTextDecoration ? "text-decoration: $labelTextDecoration;" : "") . "
		" . ($labelLetterSpacing['Desktop'] && $labelLetterSpacingUnits['Desktop'] ? "letter-spacing: {$labelLetterSpacing['Desktop']}{$labelLetterSpacingUnits['Desktop']};" : "") . "
		" . ($labelLineHeight['Desktop'] && $labelLineHeightUnits['Desktop'] ? "line-height: {$labelLineHeight['Desktop']}{$labelLineHeightUnits['Desktop']};" : "") . "
	}

	@media only screen and (max-width: 1024px) {
		.fb-count-down-wrapper.$block_ID{
			" . ($countDownItemGap['Tablet'] && $countDownItemGapUnits['Tablet'] ? "gap: {$countDownItemGap['Tablet']}{$countDownItemGapUnits['Tablet']};" : "") . "
		}
		.fb-count-down-wrapper.$block_ID .fb-count-down-item {
			" . ($countDownItemBorderTypeGetTablet ? "border-width: $countDownItemBorderTypeGetTablet;" : "") . "
			" . ($countDownItemBorderRadiusGetTablet ? "border-radius: $countDownItemBorderRadiusGetTablet;" : "") . "
			" . ($countDownItemSize['Tablet'] && $countDownItemSizeUnits['Tablet'] ? "width: {$countDownItemSize['Tablet']}{$countDownItemSizeUnits['Tablet']};" : "") . "
			" . ($countDownItemSize['Tablet'] && $countDownItemSizeUnits['Tablet'] ? "height: {$countDownItemSize['Tablet']}{$countDownItemSizeUnits['Tablet']};" : "") . "
		}
		.fb-count-down-wrapper.$block_ID .fb-count-down-item .fb-count-down-time{
			" . ($digitFontSize['Tablet'] && $digitFontSizeUnits['Tablet'] ? "font-size: {$digitFontSize['Tablet']}{$digitFontSizeUnits['Tablet']};" : "") . "
			" . ($digitLetterSpacing['Tablet'] && $digitLetterSpacingUnits['Tablet'] ? "letter-spacing: {$digitLetterSpacing['Tablet']}{$digitLetterSpacingUnits['Tablet']};" : "") . "
			" . ($digitLineHeight['Tablet'] && $digitLineHeightUnits['Tablet'] ? "line-height: {$digitLineHeight['Tablet']}{$digitLineHeightUnits['Tablet']};" : "") . "
		}
		.fb-count-down-wrapper.$block_ID .fb-count-down-item .fb-count-down-label{
			" . ($labelFontSize['Tablet'] && $labelFontSizeUnits['Tablet'] ? "font-size: {$labelFontSize['Tablet']}{$labelFontSizeUnits['Tablet']};" : "") . "
			" . ($labelLetterSpacing['Tablet'] && $labelLetterSpacingUnits['Tablet'] ? "letter-spacing: {$labelLetterSpacing['Tablet']}{$labelLetterSpacingUnits['Tablet']};" : "") . "
			" . ($labelLineHeight['Tablet'] && $labelLineHeightUnits['Tablet'] ? "line-height: {$labelLineHeight['Tablet']}{$labelLineHeightUnits['Tablet']};" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.fb-count-down-wrapper.$block_ID{
			" . ($countDownItemGap['Mobile'] && $countDownItemGapUnits['Mobile'] ? "gap: {$countDownItemGap['Mobile']}{$countDownItemGapUnits['Mobile']};" : "") . "
		}
		.fb-count-down-wrapper.$block_ID .fb-count-down-item {
			" . ($countDownItemBorderTypeGetMobile ? "border-width: $countDownItemBorderTypeGetMobile;" : "") . "
			" . ($countDownItemBorderRadiusGetMobile ? "border-radius: $countDownItemBorderRadiusGetMobile;" : "") . "
			" . ($countDownItemSize['Mobile'] && $countDownItemSizeUnits['Mobile'] ? "width: {$countDownItemSize['Mobile']}{$countDownItemSizeUnits['Mobile']};" : "") . "
			" . ($countDownItemSize['Mobile'] && $countDownItemSizeUnits['Mobile'] ? "height: {$countDownItemSize['Mobile']}{$countDownItemSizeUnits['Mobile']};" : "") . "
		}
		.fb-count-down-wrapper.$block_ID .fb-count-down-item .fb-count-down-time{
			" . ($digitFontSize['Mobile'] && $digitFontSizeUnits['Mobile'] ? "font-size: {$digitFontSize['Mobile']}{$digitFontSizeUnits['Mobile']};" : "") . "
			" . ($digitLetterSpacing['Mobile'] && $digitLetterSpacingUnits['Mobile'] ? "letter-spacing: {$digitLetterSpacing['Mobile']}{$digitLetterSpacingUnits['Mobile']};" : "") . "
			" . ($digitLineHeight['Mobile'] && $digitLineHeightUnits['Mobile'] ? "line-height: {$digitLineHeight['Mobile']}{$digitLineHeightUnits['Mobile']};" : "") . "
		}
		.fb-count-down-wrapper.$block_ID .fb-count-down-item .fb-count-down-label{
			" . ($labelFontSize['Mobile'] && $labelFontSizeUnits['Mobile'] ? "font-size: {$labelFontSize['Mobile']}{$labelFontSizeUnits['Mobile']};" : "") . "
			" . ($labelLetterSpacing['Mobile'] && $labelLetterSpacingUnits['Mobile'] ? "letter-spacing: {$labelLetterSpacing['Mobile']}{$labelLetterSpacingUnits['Mobile']};" : "") . "
			" . ($labelLineHeight['Mobile'] && $labelLineHeightUnits['Mobile'] ? "line-height: {$labelLineHeight['Mobile']}{$labelLineHeightUnits['Mobile']};" : "") . "
		}
	}
";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $block_ID);
