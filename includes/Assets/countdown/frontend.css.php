<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$block_attributes = $block['attrs'];
$block_ID = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';


$countDownItemBgColor = isset($block_attributes['countDownItemBgColor']) ? sanitize_hex_color($block_attributes['countDownItemBgColor']) : '';

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
$countDownItemBorderRadiusUnits = isset($block_attributes['priceGlobalBorderRadiusUnits']) ? $block_attributes['priceGlobalBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$countDownItemBorderRadiusDesktop = isset($block_attributes['priceGlobalBorderRadiusDesktop']) ? $block_attributes['priceGlobalBorderRadiusDesktop'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$countDownItemBorderRadiusTablet = isset($block_attributes['priceGlobalBorderRadiusTablet']) ? $block_attributes['priceGlobalBorderRadiusTablet'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$countDownItemBorderRadiusMobile = isset($block_attributes['priceGlobalBorderRadiusMobile']) ? $block_attributes['priceGlobalBorderRadiusMobile'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$countDownItemBorderRadiusGetDesktop = $countDownItemBorderRadiusDesktop['top'] . $countDownItemBorderRadiusUnits['Desktop'] . ' ' . $countDownItemBorderRadiusDesktop['right'] . $countDownItemBorderRadiusUnits['Desktop'] . ' ' . $countDownItemBorderRadiusDesktop['bottom'] . $countDownItemBorderRadiusUnits['Desktop'] . ' ' . $countDownItemBorderRadiusDesktop['left'] . $countDownItemBorderRadiusUnits['Desktop'];
$countDownItemBorderRadiusGetTablet = $countDownItemBorderRadiusTablet['top'] . $countDownItemBorderRadiusUnits['Tablet'] . ' ' . $countDownItemBorderRadiusTablet['right'] . $countDownItemBorderRadiusUnits['Tablet'] . ' ' . $countDownItemBorderRadiusTablet['bottom'] . $countDownItemBorderRadiusUnits['Tablet'] . ' ' . $countDownItemBorderRadiusTablet['left'] . $countDownItemBorderRadiusUnits['Tablet'];
$countDownItemBorderRadiusGetMobile = $countDownItemBorderRadiusMobile['top'] . $countDownItemBorderRadiusUnits['Mobile'] . ' ' . $countDownItemBorderRadiusMobile['right'] . $countDownItemBorderRadiusUnits['Mobile'] . ' ' . $countDownItemBorderRadiusMobile['bottom'] . $countDownItemBorderRadiusUnits['Mobile'] . ' ' . $countDownItemBorderRadiusMobile['left'] . $countDownItemBorderRadiusUnits['Mobile'];
/** End Border Radius */

/** Digit Typography */
$digitFontColor = isset($block_attributes['digitFontColor']) ? $block_attributes['digitFontColor'] : '';
$digitFontFamily = isset($block_attributes['digitFontFamily']) ? $block_attributes['digitFontFamily'] : '';
$digitFontSize = isset($block_attributes['digitFontSize']) ? $block_attributes['digitFontSize'] : '48';
$digitFontSizeUnits = isset($block_attributes['digitFontSizeUnits']) ? $block_attributes['digitFontSizeUnits'] : 'px';
$digitFontWeight = isset($block_attributes['digitFontWeight']) ? $block_attributes['digitFontWeight'] : '700';
$digitFontStyle = isset($block_attributes['digitFontStyle']) ? $block_attributes['digitFontStyle'] : '';
$digitTextTransform = isset($block_attributes['digitTextTransform']) ? $block_attributes['digitTextTransform'] : '';
$digitTextDecoration = isset($block_attributes['digitTextDecoration']) ? $block_attributes['digitTextDecoration'] : '';
$digitLetterSpacing = isset($block_attributes['digitLetterSpacing']) ? $block_attributes['digitLetterSpacing'] : '';
$digitLetterSpacingUnits = isset($block_attributes['digitLetterSpacingUnits']) ? $block_attributes['digitLetterSpacingUnits'] : 'px';
$digitLineHeight = isset($block_attributes['digitLineHeight']) ? $block_attributes['digitLineHeight'] : '62';
$digitLineHeightUnits = isset($block_attributes['digitLineHeightUnits']) ? $block_attributes['digitLineHeightUnits'] : 'px';


// Generate CSS content
$css_content = "
	.fb-count-down-wrapper.$block_ID .fb-count-down-item {
		" . ($countDownItemBorderTypeGetDesktop ? "border-width: $countDownItemBorderTypeGetDesktop;" : "") . "
		" . ($countDownItemBorderRadiusGetDesktop ? "border-radius: $countDownItemBorderRadiusGetDesktop;" : "") . "
		" . ($countDownItemBorderColor ? "border-color: $countDownItemBorderColor;" : "") . "
		" . ($countDownItemBgColor ? "background: $countDownItemBgColor;" : "") . "
	}
	.fb-count-down-wrapper.$block_ID .fb-count-down-item .fb-count-down-time{
			" . ($digitFontColor ? "color: $digitFontColor;" : "") . "
            " . ($digitFontFamily ? "font-family: $digitFontFamily;" : "") . "
            " . ($digitFontSize ? "font-size: {$digitFontSize}{$digitFontSizeUnits};" : "") . "
            " . ($digitFontWeight ? "font-weight: $digitFontWeight;" : "") . "
            " . ($digitFontStyle ? "font-style: $digitFontStyle;" : "") . "
            " . ($digitTextTransform ? "text-transform: $digitTextTransform;" : "") . "
            " . ($digitTextDecoration ? "text-decoration: $digitTextDecoration;" : "") . "
            " . ($digitLetterSpacing ? "letter-spacing: {$digitLetterSpacing}{$digitLetterSpacingUnits};" : "") . "
            " . ($digitLineHeight ? "line-height: {$digitLineHeight}{$digitLineHeightUnits};" : "") . "
	}

	@media only screen and (max-width: 1024px) {
		.fb-count-down-wrapper.$block_ID .fb-count-down-item {
			" . ($countDownItemBorderTypeGetTablet ? "border-width: $countDownItemBorderTypeGetTablet;" : "") . "
			" . ($countDownItemBorderRadiusGetTablet ? "border-radius: $countDownItemBorderRadiusGetTablet;" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.fb-count-down-wrapper.$block_ID .fb-count-down-item {
			" . ($countDownItemBorderTypeGetMobile ? "border-width: $countDownItemBorderTypeGetMobile;" : "") . "
			" . ($countDownItemBorderRadiusGetMobile ? "border-radius: $countDownItemBorderRadiusGetMobile;" : "") . "
		}
	}
";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $block_ID);
