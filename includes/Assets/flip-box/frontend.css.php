<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$block_attributes = $block['attrs'];
$blockID = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';

/** Start Flip Box Front Control */
$flipBoxItemFrontBgFontColor = isset($block_attributes['flipBoxItemFrontBgFontColor']) ? sanitize_hex_color($block_attributes['flipBoxItemFrontBgFontColor']) : '#efeff1';
$flipBoxItemFrontBgFontHoverColor = isset($block_attributes['flipBoxItemFrontBgFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxItemFrontBgFontHoverColor']) : '#efeff1';

$flipBoxItemFrontSize = isset($block_attributes['flipBoxItemFrontSize']) ? $block_attributes['flipBoxItemFrontSize'] : array('Desktop' => '364', 'Tablet' => '', 'Mobile' => '');
$flipBoxItemFrontSizeUnits = isset($block_attributes['flipBoxItemFrontSizeUnits']) ? $block_attributes['flipBoxItemFrontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$flipBoxItemFrontBorder = isset($block_attributes['flipBoxItemFrontBorder']) ? sanitize_text_field($block_attributes['flipBoxItemFrontBorder']) : '';
$flipBoxItemFrontBorderColor = isset($block_attributes['flipBoxItemFrontBorderColor']) ? sanitize_hex_color($block_attributes['flipBoxItemFrontBorderColor']) : '';
$flipBoxItemFrontBorderTypeUnits = isset($block_attributes['flipBoxItemFrontBorderTypeUnits']) ? $block_attributes['flipBoxItemFrontBorderTypeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxItemFrontBorderTypeDesktop = isset($block_attributes['flipBoxItemFrontBorderTypeDesktop']) ? $block_attributes['flipBoxItemFrontBorderTypeDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxItemFrontBorderTypeTablet = isset($block_attributes['flipBoxItemFrontBorderTypeTablet']) ? $block_attributes['flipBoxItemFrontBorderTypeTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxItemFrontBorderTypeMobile = isset($block_attributes['flipBoxItemFrontBorderTypeMobile']) ? $block_attributes['flipBoxItemFrontBorderTypeMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxItemFrontBorderTypeGetDesktop = $flipBoxItemFrontBorderTypeDesktop['top'] . $flipBoxItemFrontBorderTypeUnits['Desktop'] . ' ' . $flipBoxItemFrontBorderTypeDesktop['right'] . $flipBoxItemFrontBorderTypeUnits['Desktop'] . ' ' . $flipBoxItemFrontBorderTypeDesktop['bottom'] . $flipBoxItemFrontBorderTypeUnits['Desktop'] . ' ' . $flipBoxItemFrontBorderTypeDesktop['left'] . $flipBoxItemFrontBorderTypeUnits['Desktop'];
$flipBoxItemFrontBorderTypeGetTablet = $flipBoxItemFrontBorderTypeTablet['top'] . $flipBoxItemFrontBorderTypeUnits['Tablet'] . ' ' . $flipBoxItemFrontBorderTypeTablet['right'] . $flipBoxItemFrontBorderTypeUnits['Tablet'] . ' ' . $flipBoxItemFrontBorderTypeTablet['bottom'] . $flipBoxItemFrontBorderTypeUnits['Tablet'] . ' ' . $flipBoxItemFrontBorderTypeTablet['left'] . $flipBoxItemFrontBorderTypeUnits['Tablet'];
$flipBoxItemFrontBorderTypeGetMobile = $flipBoxItemFrontBorderTypeMobile['top'] . $flipBoxItemFrontBorderTypeUnits['Mobile'] . ' ' . $flipBoxItemFrontBorderTypeMobile['right'] . $flipBoxItemFrontBorderTypeUnits['Mobile'] . ' ' . $flipBoxItemFrontBorderTypeMobile['bottom'] . $flipBoxItemFrontBorderTypeUnits['Mobile'] . ' ' . $flipBoxItemFrontBorderTypeMobile['left'] . $flipBoxItemFrontBorderTypeUnits['Mobile'];

$flipBoxItemFrontBorderRadiusUnits = isset($block_attributes['flipBoxItemFrontBorderRadiusUnits']) ? $block_attributes['flipBoxItemFrontBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxItemFrontBorderRadiusDesktop = isset($block_attributes['flipBoxItemFrontBorderRadiusDesktop']) ? $block_attributes['flipBoxItemFrontBorderRadiusDesktop'] : array('top' => '15', 'bottom' => '15', 'left' => '15', 'right' => '15');
$flipBoxItemFrontBorderRadiusTablet = isset($block_attributes['flipBoxItemFrontBorderRadiusTablet']) ? $block_attributes['flipBoxItemFrontBorderRadiusTablet'] : array('top' => '15', 'bottom' => '15', 'left' => '15', 'right' => '15');
$flipBoxItemFrontBorderRadiusMobile = isset($block_attributes['flipBoxItemFrontBorderRadiusMobile']) ? $block_attributes['flipBoxItemFrontBorderRadiusMobile'] : array('top' => '15', 'bottom' => '15', 'left' => '15', 'right' => '15');
$flipBoxItemFrontBorderRadiusGetDesktop = $flipBoxItemFrontBorderRadiusDesktop['top'] . $flipBoxItemFrontBorderRadiusUnits['Desktop'] . ' ' . $flipBoxItemFrontBorderRadiusDesktop['right'] . $flipBoxItemFrontBorderRadiusUnits['Desktop'] . ' ' . $flipBoxItemFrontBorderRadiusDesktop['bottom'] . $flipBoxItemFrontBorderRadiusUnits['Desktop'] . ' ' . $flipBoxItemFrontBorderRadiusDesktop['left'] . $flipBoxItemFrontBorderRadiusUnits['Desktop'];
$flipBoxItemFrontBorderRadiusGetTablet = $flipBoxItemFrontBorderRadiusTablet['top'] . $flipBoxItemFrontBorderRadiusUnits['Tablet'] . ' ' . $flipBoxItemFrontBorderRadiusTablet['right'] . $flipBoxItemFrontBorderRadiusUnits['Tablet'] . ' ' . $flipBoxItemFrontBorderRadiusTablet['bottom'] . $flipBoxItemFrontBorderRadiusUnits['Tablet'] . ' ' . $flipBoxItemFrontBorderRadiusTablet['left'] . $flipBoxItemFrontBorderRadiusUnits['Tablet'];
$flipBoxItemFrontBorderRadiusGetMobile = $flipBoxItemFrontBorderRadiusMobile['top'] . $flipBoxItemFrontBorderRadiusUnits['Mobile'] . ' ' . $flipBoxItemFrontBorderRadiusMobile['right'] . $flipBoxItemFrontBorderRadiusUnits['Mobile'] . ' ' . $flipBoxItemFrontBorderRadiusMobile['bottom'] . $flipBoxItemFrontBorderRadiusUnits['Mobile'] . ' ' . $flipBoxItemFrontBorderRadiusMobile['left'] . $flipBoxItemFrontBorderRadiusUnits['Mobile'];

/** Front Icon*/
$flipBoxFrontIconSize = isset($block_attributes['flipBoxFrontIconSize']) ? $block_attributes['flipBoxFrontIconSize'] : array('Desktop' => '70', 'Tablet' => '', 'Mobile' => '');
$flipBoxFrontIconSizeUnits = isset($block_attributes['flipBoxFrontIconSizeUnits']) ? $block_attributes['flipBoxFrontIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$flipBoxFrontIconFontColor = isset($block_attributes['flipBoxFrontIconFontColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontIconFontColor']) : '#ffffff';
$flipBoxFrontIconFontHoverColor = isset($block_attributes['flipBoxFrontIconFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontIconFontHoverColor']) : '#ffffff';

$flipBoxFrontIconBgFontColor = isset($block_attributes['flipBoxFrontIconBgFontColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontIconBgFontColor']) : '#0D173B';
$flipBoxFrontIconBgFontHoverColor = isset($block_attributes['flipBoxFrontIconBgFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontIconBgFontHoverColor']) : '#0D173B';


/** Front Icon Border*/
$flipBoxFrontIconBorder = isset($block_attributes['flipBoxFrontIconBorder']) ? sanitize_text_field($block_attributes['flipBoxFrontIconBorder']) : '';
$flipBoxFrontIconBorderColor = isset($block_attributes['flipBoxFrontIconBorderColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontIconBorderColor']) : '';
$flipBoxFrontIconBorderTypeUnits = isset($block_attributes['flipBoxFrontIconBorderTypeUnits']) ? $block_attributes['flipBoxFrontIconBorderTypeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontIconBorderTypeDesktop = isset($block_attributes['flipBoxFrontIconBorderTypeDesktop']) ? $block_attributes['flipBoxFrontIconBorderTypeDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxFrontIconBorderTypeTablet = isset($block_attributes['flipBoxFrontIconBorderTypeTablet']) ? $block_attributes['flipBoxFrontIconBorderTypeTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxFrontIconBorderTypeMobile = isset($block_attributes['flipBoxFrontIconBorderTypeMobile']) ? $block_attributes['flipBoxFrontIconBorderTypeMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxFrontIconBorderTypeGetDesktop = $flipBoxFrontIconBorderTypeDesktop['top'] . $flipBoxFrontIconBorderTypeUnits['Desktop'] . ' ' . $flipBoxFrontIconBorderTypeDesktop['right'] . $flipBoxFrontIconBorderTypeUnits['Desktop'] . ' ' . $flipBoxFrontIconBorderTypeDesktop['bottom'] . $flipBoxFrontIconBorderTypeUnits['Desktop'] . ' ' . $flipBoxFrontIconBorderTypeDesktop['left'] . $flipBoxFrontIconBorderTypeUnits['Desktop'];
$flipBoxFrontIconBorderTypeGetTablet = $flipBoxFrontIconBorderTypeTablet['top'] . $flipBoxFrontIconBorderTypeUnits['Tablet'] . ' ' . $flipBoxFrontIconBorderTypeTablet['right'] . $flipBoxFrontIconBorderTypeUnits['Tablet'] . ' ' . $flipBoxFrontIconBorderTypeTablet['bottom'] . $flipBoxFrontIconBorderTypeUnits['Tablet'] . ' ' . $flipBoxFrontIconBorderTypeTablet['left'] . $flipBoxFrontIconBorderTypeUnits['Tablet'];
$flipBoxFrontIconBorderTypeGetMobile = $flipBoxFrontIconBorderTypeMobile['top'] . $flipBoxFrontIconBorderTypeUnits['Mobile'] . ' ' . $flipBoxFrontIconBorderTypeMobile['right'] . $flipBoxFrontIconBorderTypeUnits['Mobile'] . ' ' . $flipBoxFrontIconBorderTypeMobile['bottom'] . $flipBoxFrontIconBorderTypeUnits['Mobile'] . ' ' . $flipBoxFrontIconBorderTypeMobile['left'] . $flipBoxFrontIconBorderTypeUnits['Mobile'];

$flipBoxFrontIconBorderRadiusUnits = isset($block_attributes['flipBoxBackIconBorderRadiusUnits']) ? $block_attributes['flipBoxBackIconBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontIconBorderRadiusDesktop = isset($block_attributes['flipBoxFrontIconBorderRadiusDesktop']) ? $block_attributes['flipBoxFrontIconBorderRadiusDesktop'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxFrontIconBorderRadiusTablet = isset($block_attributes['flipBoxFrontIconBorderRadiusTablet']) ? $block_attributes['flipBoxFrontIconBorderRadiusTablet'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxFrontIconBorderRadiusMobile = isset($block_attributes['flipBoxFrontIconBorderRadiusMobile']) ? $block_attributes['flipBoxFrontIconBorderRadiusMobile'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxFrontIconBorderRadiusGetDesktop = $flipBoxFrontIconBorderRadiusDesktop['top'] . $flipBoxFrontIconBorderRadiusUnits['Desktop'] . ' ' . $flipBoxFrontIconBorderRadiusDesktop['right'] . $flipBoxFrontIconBorderRadiusUnits['Desktop'] . ' ' . $flipBoxFrontIconBorderRadiusDesktop['bottom'] . $flipBoxFrontIconBorderRadiusUnits['Desktop'] . ' ' . $flipBoxFrontIconBorderRadiusDesktop['left'] . $flipBoxFrontIconBorderRadiusUnits['Desktop'];
$flipBoxFrontIconBorderRadiusGetTablet = $flipBoxFrontIconBorderRadiusTablet['top'] . $flipBoxFrontIconBorderRadiusUnits['Tablet'] . ' ' . $flipBoxFrontIconBorderRadiusTablet['right'] . $flipBoxFrontIconBorderRadiusUnits['Tablet'] . ' ' . $flipBoxFrontIconBorderRadiusTablet['bottom'] . $flipBoxFrontIconBorderRadiusUnits['Tablet'] . ' ' . $flipBoxFrontIconBorderRadiusTablet['left'] . $flipBoxFrontIconBorderRadiusUnits['Tablet'];
$flipBoxFrontIconBorderRadiusGetMobile = $flipBoxFrontIconBorderRadiusMobile['top'] . $flipBoxFrontIconBorderRadiusUnits['Mobile'] . ' ' . $flipBoxFrontIconBorderRadiusMobile['right'] . $flipBoxFrontIconBorderRadiusUnits['Mobile'] . ' ' . $flipBoxFrontIconBorderRadiusMobile['bottom'] . $flipBoxFrontIconBorderRadiusUnits['Mobile'] . ' ' . $flipBoxFrontIconBorderRadiusMobile['left'] . $flipBoxFrontIconBorderRadiusUnits['Mobile'];

/** Front Icon Padding */
$flipBoxFrontIconPaddingUnits = isset($block_attributes['flipBoxFrontIconPaddingUnits']) ? $block_attributes['flipBoxFrontIconPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontIconPaddingDesktop = isset($block_attributes['flipBoxFrontIconPaddingDesktop']) ? $block_attributes['flipBoxFrontIconPaddingDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontIconPaddingTablet = isset($block_attributes['flipBoxFrontIconPaddingTablet']) ? $block_attributes['flipBoxFrontIconPaddingTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontIconPaddingMobile = isset($block_attributes['flipBoxFrontIconPaddingMobile']) ? $block_attributes['flipBoxFrontIconPaddingMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontIconPaddingGetDesktop = $flipBoxFrontIconPaddingDesktop['top'] . $flipBoxFrontIconPaddingUnits['Desktop'] . ' ' . $flipBoxFrontIconPaddingDesktop['right'] . $flipBoxFrontIconPaddingUnits['Desktop'] . ' ' . $flipBoxFrontIconPaddingDesktop['bottom'] . $flipBoxFrontIconPaddingUnits['Desktop'] . ' ' . $flipBoxFrontIconPaddingDesktop['left'] . $flipBoxFrontIconPaddingUnits['Desktop'];
$flipBoxFrontIconPaddingGetTablet = $flipBoxFrontIconPaddingTablet['top'] . $flipBoxFrontIconPaddingUnits['Tablet'] . ' ' . $flipBoxFrontIconPaddingTablet['right'] . $flipBoxFrontIconPaddingUnits['Tablet'] . ' ' . $flipBoxFrontIconPaddingTablet['bottom'] . $flipBoxFrontIconPaddingUnits['Tablet'] . ' ' . $flipBoxFrontIconPaddingTablet['left'] . $flipBoxFrontIconPaddingUnits['Tablet'];
$flipBoxFrontIconPaddingGetMobile = $flipBoxFrontIconPaddingMobile['top'] . $flipBoxFrontIconPaddingUnits['Mobile'] . ' ' . $flipBoxFrontIconPaddingMobile['right'] . $flipBoxFrontIconPaddingUnits['Mobile'] . ' ' . $flipBoxFrontIconPaddingMobile['bottom'] . $flipBoxFrontIconPaddingUnits['Mobile'] . ' ' . $flipBoxFrontIconPaddingMobile['left'] . $flipBoxFrontIconPaddingUnits['Mobile'];

/** Front Icon Margin */
$flipBoxFrontIconMarginUnits = isset($block_attributes['flipBoxFrontIconMarginUnits']) ? $block_attributes['flipBoxFrontIconMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontIconMarginDesktop = isset($block_attributes['flipBoxFrontIconMarginDesktop']) ? $block_attributes['flipBoxFrontIconMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontIconMarginTablet = isset($block_attributes['flipBoxFrontIconMarginTablet']) ? $block_attributes['flipBoxFrontIconMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontIconMarginMobile = isset($block_attributes['flipBoxFrontIconMarginMobile']) ? $block_attributes['flipBoxFrontIconMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontIconMarginGetDesktop = $flipBoxFrontIconMarginDesktop['top'] . $flipBoxFrontIconMarginUnits['Desktop'] . ' ' . $flipBoxFrontIconMarginDesktop['right'] . $flipBoxFrontIconMarginUnits['Desktop'] . ' ' . $flipBoxFrontIconMarginDesktop['bottom'] . $flipBoxFrontIconMarginUnits['Desktop'] . ' ' . $flipBoxFrontIconMarginDesktop['left'] . $flipBoxFrontIconMarginUnits['Desktop'];
$flipBoxFrontIconMarginGetTablet = $flipBoxFrontIconMarginTablet['top'] . $flipBoxFrontIconMarginUnits['Tablet'] . ' ' . $flipBoxFrontIconMarginTablet['right'] . $flipBoxFrontIconMarginUnits['Tablet'] . ' ' . $flipBoxFrontIconMarginTablet['bottom'] . $flipBoxFrontIconMarginUnits['Tablet'] . ' ' . $flipBoxFrontIconMarginTablet['left'] . $flipBoxFrontIconMarginUnits['Tablet'];
$flipBoxFrontIconMarginGetMobile = $flipBoxFrontIconMarginMobile['top'] . $flipBoxFrontIconMarginUnits['Mobile'] . ' ' . $flipBoxFrontIconMarginMobile['right'] . $flipBoxFrontIconMarginUnits['Mobile'] . ' ' . $flipBoxFrontIconMarginMobile['bottom'] . $flipBoxFrontIconMarginUnits['Mobile'] . ' ' . $flipBoxFrontIconMarginMobile['left'] . $flipBoxFrontIconMarginUnits['Mobile'];

/** Front Title Margin */
$flipBoxFrontTitleMarginUnits = isset($block_attributes['flipBoxFrontTitleMarginUnits']) ? $block_attributes['flipBoxFrontTitleMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontTitleMarginDesktop = isset($block_attributes['flipBoxFrontTitleMarginDesktop']) ? $block_attributes['flipBoxFrontTitleMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontTitleMarginTablet = isset($block_attributes['flipBoxFrontTitleMarginTablet']) ? $block_attributes['flipBoxFrontTitleMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontTitleMarginMobile = isset($block_attributes['flipBoxFrontTitleMarginMobile']) ? $block_attributes['flipBoxFrontTitleMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontTitleMarginGetDesktop = $flipBoxFrontTitleMarginDesktop['top'] . $flipBoxFrontTitleMarginUnits['Desktop'] . ' ' . $flipBoxFrontTitleMarginDesktop['right'] . $flipBoxFrontTitleMarginUnits['Desktop'] . ' ' . $flipBoxFrontTitleMarginDesktop['bottom'] . $flipBoxFrontTitleMarginUnits['Desktop'] . ' ' . $flipBoxFrontTitleMarginDesktop['left'] . $flipBoxFrontTitleMarginUnits['Desktop'];
$flipBoxFrontTitleMarginGetTablet = $flipBoxFrontTitleMarginTablet['top'] . $flipBoxFrontTitleMarginUnits['Tablet'] . ' ' . $flipBoxFrontTitleMarginTablet['right'] . $flipBoxFrontTitleMarginUnits['Tablet'] . ' ' . $flipBoxFrontTitleMarginTablet['bottom'] . $flipBoxFrontTitleMarginUnits['Tablet'] . ' ' . $flipBoxFrontTitleMarginTablet['left'] . $flipBoxFrontTitleMarginUnits['Tablet'];
$flipBoxFrontTitleMarginGetMobile = $flipBoxFrontTitleMarginMobile['top'] . $flipBoxFrontTitleMarginUnits['Mobile'] . ' ' . $flipBoxFrontTitleMarginMobile['right'] . $flipBoxFrontTitleMarginUnits['Mobile'] . ' ' . $flipBoxFrontTitleMarginMobile['bottom'] . $flipBoxFrontTitleMarginUnits['Mobile'] . ' ' . $flipBoxFrontTitleMarginMobile['left'] . $flipBoxFrontTitleMarginUnits['Mobile'];


/** Front Title Typography */
$flipBoxFrontTitleFontFamily = isset($block_attributes['flipBoxFrontTitleFontFamily']) ? sanitize_text_field($block_attributes['flipBoxFrontTitleFontFamily']) : 'inherit';
$flipBoxFrontTitleFontSize = isset($block_attributes['flipBoxFrontTitleFontSize']) ? $block_attributes['flipBoxFrontTitleFontSize'] : array('Desktop' => '32', 'Tablet' => '', 'Mobile' => '');
$flipBoxFrontTitleFontSizeUnits = isset($block_attributes['flipBoxFrontTitleFontSizeUnits']) ? $block_attributes['flipBoxFrontTitleFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontTitleFontWeight = isset($block_attributes['flipBoxFrontTitleFontWeight']) ? sanitize_text_field($block_attributes['flipBoxFrontTitleFontWeight']) : '600';
$flipBoxFrontTitleFontStyle = isset($block_attributes['flipBoxFrontTitleFontStyle']) ? sanitize_text_field($block_attributes['flipBoxFrontTitleFontStyle']) : '';
$flipBoxFrontTitleTextTransform = isset($block_attributes['flipBoxFrontTitleTextTransform']) ? sanitize_text_field($block_attributes['flipBoxFrontTitleTextTransform']) : '';
$flipBoxFrontTitleTextDecoration = isset($block_attributes['flipBoxFrontTitleTextDecoration']) ? sanitize_text_field($block_attributes['flipBoxFrontTitleTextDecoration']) : '';
$flipBoxFrontTitleLetterSpacing = isset($block_attributes['flipBoxFrontTitleLetterSpacing']) ? $block_attributes['flipBoxFrontTitleLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxFrontTitleLetterSpacingUnits = isset($block_attributes['flipBoxFrontTitleLetterSpacingUnits']) ? $block_attributes['flipBoxFrontTitleLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontTitleLineHeight = isset($block_attributes['flipBoxFrontTitleLineHeight']) ? $block_attributes['flipBoxFrontTitleLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxFrontTitleLineHeightUnits = isset($block_attributes['flipBoxFrontTitleLineHeightUnits']) ? $block_attributes['flipBoxFrontTitleLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontTitleFontColor = isset($block_attributes['flipBoxFrontTitleFontColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontTitleFontColor']) : '';
$flipBoxFrontTitleFontHoverColor = isset($block_attributes['flipBoxFrontTitleFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontTitleFontHoverColor']) : '';

/** Front Content Margin */
$flipBoxFrontContentMarginUnits = isset($block_attributes['flipBoxFrontContentMarginUnits']) ? $block_attributes['flipBoxFrontContentMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontContentMarginDesktop = isset($block_attributes['flipBoxFrontContentMarginDesktop']) ? $block_attributes['flipBoxFrontContentMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontContentMarginTablet = isset($block_attributes['flipBoxFrontContentMarginTablet']) ? $block_attributes['flipBoxFrontContentMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontContentMarginMobile = isset($block_attributes['flipBoxFrontContentMarginMobile']) ? $block_attributes['flipBoxFrontContentMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxFrontContentMarginGetDesktop = $flipBoxFrontContentMarginDesktop['top'] . $flipBoxFrontContentMarginUnits['Desktop'] . ' ' . $flipBoxFrontContentMarginDesktop['right'] . $flipBoxFrontContentMarginUnits['Desktop'] . ' ' . $flipBoxFrontContentMarginDesktop['bottom'] . $flipBoxFrontContentMarginUnits['Desktop'] . ' ' . $flipBoxFrontContentMarginDesktop['left'] . $flipBoxFrontContentMarginUnits['Desktop'];
$flipBoxFrontContentMarginGetTablet = $flipBoxFrontContentMarginTablet['top'] . $flipBoxFrontContentMarginUnits['Tablet'] . ' ' . $flipBoxFrontContentMarginTablet['right'] . $flipBoxFrontContentMarginUnits['Tablet'] . ' ' . $flipBoxFrontContentMarginTablet['bottom'] . $flipBoxFrontContentMarginUnits['Tablet'] . ' ' . $flipBoxFrontContentMarginTablet['left'] . $flipBoxFrontContentMarginUnits['Tablet'];
$flipBoxFrontContentMarginGetMobile = $flipBoxFrontContentMarginMobile['top'] . $flipBoxFrontContentMarginUnits['Mobile'] . ' ' . $flipBoxFrontContentMarginMobile['right'] . $flipBoxFrontContentMarginUnits['Mobile'] . ' ' . $flipBoxFrontContentMarginMobile['bottom'] . $flipBoxFrontContentMarginUnits['Mobile'] . ' ' . $flipBoxFrontContentMarginMobile['left'] . $flipBoxFrontContentMarginUnits['Mobile'];

/** Front Content Typography */
$flipBoxFrontContentFontFamily = isset($block_attributes['flipBoxFrontContentFontFamily']) ? sanitize_text_field($block_attributes['flipBoxFrontContentFontFamily']) : 'inherit';
$flipBoxFrontContentFontSize = isset($block_attributes['flipBoxFrontContentFontSize']) ? $block_attributes['flipBoxFrontContentFontSize'] : array('Desktop' => '18', 'Tablet' => '', 'Mobile' => '');
$flipBoxFrontContentFontSizeUnits = isset($block_attributes['flipBoxFrontContentFontSizeUnits']) ? $block_attributes['flipBoxFrontContentFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontContentFontWeight = isset($block_attributes['flipBoxFrontContentFontWeight']) ? sanitize_text_field($block_attributes['flipBoxFrontContentFontWeight']) : '400';
$flipBoxFrontContentFontStyle = isset($block_attributes['flipBoxFrontContentFontStyle']) ? sanitize_text_field($block_attributes['flipBoxFrontContentFontStyle']) : '';
$flipBoxFrontContentTextTransform = isset($block_attributes['flipBoxFrontContentTextTransform']) ? sanitize_text_field($block_attributes['flipBoxFrontContentTextTransform']) : '';
$flipBoxFrontContentTextDecoration = isset($block_attributes['flipBoxFrontContentTextDecoration']) ? sanitize_text_field($block_attributes['flipBoxFrontContentTextDecoration']) : '';
$flipBoxFrontContentLetterSpacing = isset($block_attributes['flipBoxFrontContentLetterSpacing']) ? $block_attributes['flipBoxFrontContentLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxFrontContentLetterSpacingUnits = isset($block_attributes['flipBoxFrontContentLetterSpacingUnits']) ? $block_attributes['flipBoxFrontContentLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontContentLineHeight = isset($block_attributes['flipBoxFrontContentLineHeight']) ? $block_attributes['flipBoxFrontContentLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxFrontContentLineHeightUnits = isset($block_attributes['flipBoxFrontContentLineHeightUnits']) ? $block_attributes['flipBoxFrontContentLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxFrontContentFontColor = isset($block_attributes['flipBoxFrontContentFontColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontContentFontColor']) : '';
$flipBoxFrontContentFontHoverColor = isset($block_attributes['flipBoxFrontContentFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxFrontContentFontHoverColor']) : '';

/** End Flip Box Front Control */


/** Start Flip Box Back Control */
$flipBoxItemBackBgFontColor = isset($block_attributes['flipBoxItemBackBgFontColor']) ? sanitize_hex_color($block_attributes['flipBoxItemBackBgFontColor']) : '#F97255';
$flipBoxItemBackBgFontHoverColor = isset($block_attributes['flipBoxItemBackBgFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxItemBackBgFontHoverColor']) : '#F97255';

$flipBoxItemBackSize = isset($block_attributes['flipBoxItemBackSize']) ? $block_attributes['flipBoxItemBackSize'] : array('Desktop' => '364', 'Tablet' => '', 'Mobile' => '');
$flipBoxItemBackSizeUnits = isset($block_attributes['flipBoxItemBackSizeUnits']) ? $block_attributes['flipBoxItemBackSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$flipBoxItemBackBorder = isset($block_attributes['flipBoxItemFrontBorder']) ? sanitize_text_field($block_attributes['flipBoxItemFrontBorder']) : '';
$flipBoxItemBackBorderColor = isset($block_attributes['flipBoxItemFrontBorderColor']) ? sanitize_hex_color($block_attributes['flipBoxItemFrontBorderColor']) : '';
$flipBoxItemBackBorderTypeUnits = isset($block_attributes['flipBoxItemFrontBorderTypeUnits']) ? $block_attributes['flipBoxItemFrontBorderTypeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxItemBackBorderTypeDesktop = isset($block_attributes['flipBoxItemFrontBorderTypeDesktop']) ? $block_attributes['flipBoxItemFrontBorderTypeDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxItemBackBorderTypeTablet = isset($block_attributes['flipBoxItemFrontBorderTypeTablet']) ? $block_attributes['flipBoxItemFrontBorderTypeTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxItemBackBorderTypeMobile = isset($block_attributes['flipBoxItemFrontBorderTypeMobile']) ? $block_attributes['flipBoxItemFrontBorderTypeMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxItemBackBorderTypeGetDesktop = $flipBoxItemBackBorderTypeDesktop['top'] . $flipBoxItemBackBorderTypeUnits['Desktop'] . ' ' . $flipBoxItemBackBorderTypeDesktop['right'] . $flipBoxItemBackBorderTypeUnits['Desktop'] . ' ' . $flipBoxItemBackBorderTypeDesktop['bottom'] . $flipBoxItemBackBorderTypeUnits['Desktop'] . ' ' . $flipBoxItemBackBorderTypeDesktop['left'] . $flipBoxItemBackBorderTypeUnits['Desktop'];
$flipBoxItemBackBorderTypeGetTablet = $flipBoxItemBackBorderTypeTablet['top'] . $flipBoxItemBackBorderTypeUnits['Tablet'] . ' ' . $flipBoxItemBackBorderTypeTablet['right'] . $flipBoxItemBackBorderTypeUnits['Tablet'] . ' ' . $flipBoxItemBackBorderTypeTablet['bottom'] . $flipBoxItemBackBorderTypeUnits['Tablet'] . ' ' . $flipBoxItemBackBorderTypeTablet['left'] . $flipBoxItemBackBorderTypeUnits['Tablet'];
$flipBoxItemBackBorderTypeGetMobile = $flipBoxItemBackBorderTypeMobile['top'] . $flipBoxItemBackBorderTypeUnits['Mobile'] . ' ' . $flipBoxItemBackBorderTypeMobile['right'] . $flipBoxItemBackBorderTypeUnits['Mobile'] . ' ' . $flipBoxItemBackBorderTypeMobile['bottom'] . $flipBoxItemBackBorderTypeUnits['Mobile'] . ' ' . $flipBoxItemBackBorderTypeMobile['left'] . $flipBoxItemBackBorderTypeUnits['Mobile'];

$flipBoxItemBackBorderRadiusUnits = isset($block_attributes['flipBoxItemBackBorderRadiusUnits']) ? $block_attributes['flipBoxItemBackBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxItemBackBorderRadiusDesktop = isset($block_attributes['flipBoxItemBackBorderRadiusDesktop']) ? $block_attributes['flipBoxItemBackBorderRadiusDesktop'] : array('top' => '15', 'bottom' => '15', 'left' => '15', 'right' => '15');
$flipBoxItemBackBorderRadiusTablet = isset($block_attributes['flipBoxItemBackBorderRadiusTablet']) ? $block_attributes['flipBoxItemBackBorderRadiusTablet'] : array('top' => '15', 'bottom' => '15', 'left' => '15', 'right' => '15');
$flipBoxItemBackBorderRadiusMobile = isset($block_attributes['flipBoxItemBackBorderRadiusMobile']) ? $block_attributes['flipBoxItemBackBorderRadiusMobile'] : array('top' => '15', 'bottom' => '15', 'left' => '15', 'right' => '15');
$flipBoxItemBackBorderRadiusGetDesktop = $flipBoxItemBackBorderRadiusDesktop['top'] . $flipBoxItemBackBorderRadiusUnits['Desktop'] . ' ' . $flipBoxItemBackBorderRadiusDesktop['right'] . $flipBoxItemBackBorderRadiusUnits['Desktop'] . ' ' . $flipBoxItemBackBorderRadiusDesktop['bottom'] . $flipBoxItemBackBorderRadiusUnits['Desktop'] . ' ' . $flipBoxItemBackBorderRadiusDesktop['left'] . $flipBoxItemBackBorderRadiusUnits['Desktop'];
$flipBoxItemBackBorderRadiusGetTablet = $flipBoxItemBackBorderRadiusTablet['top'] . $flipBoxItemBackBorderRadiusUnits['Tablet'] . ' ' . $flipBoxItemBackBorderRadiusTablet['right'] . $flipBoxItemBackBorderRadiusUnits['Tablet'] . ' ' . $flipBoxItemBackBorderRadiusTablet['bottom'] . $flipBoxItemBackBorderRadiusUnits['Tablet'] . ' ' . $flipBoxItemBackBorderRadiusTablet['left'] . $flipBoxItemBackBorderRadiusUnits['Tablet'];
$flipBoxItemBackBorderRadiusGetMobile = $flipBoxItemBackBorderRadiusMobile['top'] . $flipBoxItemBackBorderRadiusUnits['Mobile'] . ' ' . $flipBoxItemBackBorderRadiusMobile['right'] . $flipBoxItemBackBorderRadiusUnits['Mobile'] . ' ' . $flipBoxItemBackBorderRadiusMobile['bottom'] . $flipBoxItemBackBorderRadiusUnits['Mobile'] . ' ' . $flipBoxItemBackBorderRadiusMobile['left'] . $flipBoxItemBackBorderRadiusUnits['Mobile'];

/** Back Icon */
$flipBoxBackIconSize = isset($block_attributes['flipBoxBackIconSize']) ? $block_attributes['flipBoxBackIconSize'] : array('Desktop' => '70', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackIconSizeUnits = isset($block_attributes['flipBoxBackIconSizeUnits']) ? $block_attributes['flipBoxBackIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$flipBoxBackIconFontColor = isset($block_attributes['flipBoxBackIconFontColor']) ? sanitize_hex_color($block_attributes['flipBoxBackIconFontColor']) : '#F97255';
$flipBoxBackIconFontHoverColor = isset($block_attributes['flipBoxBackIconFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxBackIconFontHoverColor']) : '#F97255';

$flipBoxBackIconBgFontColor = isset($block_attributes['flipBoxBackIconBgFontColor']) ? sanitize_hex_color($block_attributes['flipBoxBackIconBgFontColor']) : '#ffffff';
$flipBoxBackIconBgFontHoverColor = isset($block_attributes['flipBoxBackIconBgFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxBackIconBgFontHoverColor']) : '#ffffff';


/** Back Icon Border*/
$flipBoxBackIconBorder = isset($block_attributes['flipBoxBackIconBorder']) ? sanitize_text_field($block_attributes['flipBoxBackIconBorder']) : '';
$flipBoxBackIconBorderColor = isset($block_attributes['flipBoxBackIconBorderColor']) ? sanitize_hex_color($block_attributes['flipBoxBackIconBorderColor']) : '';
$flipBoxBackIconBorderTypeUnits = isset($block_attributes['flipBoxBackIconBorderTypeUnits']) ? $block_attributes['flipBoxBackIconBorderTypeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackIconBorderTypeDesktop = isset($block_attributes['flipBoxBackIconBorderTypeDesktop']) ? $block_attributes['flipBoxBackIconBorderTypeDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxBackIconBorderTypeTablet = isset($block_attributes['flipBoxBackIconBorderTypeTablet']) ? $block_attributes['flipBoxBackIconBorderTypeTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxBackIconBorderTypeMobile = isset($block_attributes['flipBoxBackIconBorderTypeMobile']) ? $block_attributes['flipBoxBackIconBorderTypeMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxBackIconBorderTypeGetDesktop = $flipBoxBackIconBorderTypeDesktop['top'] . $flipBoxBackIconBorderTypeUnits['Desktop'] . ' ' . $flipBoxBackIconBorderTypeDesktop['right'] . $flipBoxBackIconBorderTypeUnits['Desktop'] . ' ' . $flipBoxBackIconBorderTypeDesktop['bottom'] . $flipBoxBackIconBorderTypeUnits['Desktop'] . ' ' . $flipBoxBackIconBorderTypeDesktop['left'] . $flipBoxBackIconBorderTypeUnits['Desktop'];
$flipBoxBackIconBorderTypeGetTablet = $flipBoxBackIconBorderTypeTablet['top'] . $flipBoxBackIconBorderTypeUnits['Tablet'] . ' ' . $flipBoxBackIconBorderTypeTablet['right'] . $flipBoxBackIconBorderTypeUnits['Tablet'] . ' ' . $flipBoxBackIconBorderTypeTablet['bottom'] . $flipBoxBackIconBorderTypeUnits['Tablet'] . ' ' . $flipBoxBackIconBorderTypeTablet['left'] . $flipBoxBackIconBorderTypeUnits['Tablet'];
$flipBoxBackIconBorderTypeGetMobile = $flipBoxBackIconBorderTypeMobile['top'] . $flipBoxBackIconBorderTypeUnits['Mobile'] . ' ' . $flipBoxBackIconBorderTypeMobile['right'] . $flipBoxBackIconBorderTypeUnits['Mobile'] . ' ' . $flipBoxBackIconBorderTypeMobile['bottom'] . $flipBoxBackIconBorderTypeUnits['Mobile'] . ' ' . $flipBoxBackIconBorderTypeMobile['left'] . $flipBoxBackIconBorderTypeUnits['Mobile'];

$flipBoxBackIconBorderRadiusUnits = isset($block_attributes['flipBoxBackIconBorderRadiusUnits']) ? $block_attributes['flipBoxBackIconBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackIconBorderRadiusDesktop = isset($block_attributes['flipBoxBackIconBorderRadiusDesktop']) ? $block_attributes['flipBoxBackIconBorderRadiusDesktop'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxBackIconBorderRadiusTablet = isset($block_attributes['flipBoxBackIconBorderRadiusTablet']) ? $block_attributes['flipBoxBackIconBorderRadiusTablet'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxBackIconBorderRadiusMobile = isset($block_attributes['flipBoxBackIconBorderRadiusMobile']) ? $block_attributes['flipBoxBackIconBorderRadiusMobile'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxBackIconBorderRadiusGetDesktop = $flipBoxBackIconBorderRadiusDesktop['top'] . $flipBoxBackIconBorderRadiusUnits['Desktop'] . ' ' . $flipBoxBackIconBorderRadiusDesktop['right'] . $flipBoxBackIconBorderRadiusUnits['Desktop'] . ' ' . $flipBoxBackIconBorderRadiusDesktop['bottom'] . $flipBoxBackIconBorderRadiusUnits['Desktop'] . ' ' . $flipBoxBackIconBorderRadiusDesktop['left'] . $flipBoxBackIconBorderRadiusUnits['Desktop'];
$flipBoxBackIconBorderRadiusGetTablet = $flipBoxBackIconBorderRadiusTablet['top'] . $flipBoxBackIconBorderRadiusUnits['Tablet'] . ' ' . $flipBoxBackIconBorderRadiusTablet['right'] . $flipBoxBackIconBorderRadiusUnits['Tablet'] . ' ' . $flipBoxBackIconBorderRadiusTablet['bottom'] . $flipBoxBackIconBorderRadiusUnits['Tablet'] . ' ' . $flipBoxBackIconBorderRadiusTablet['left'] . $flipBoxBackIconBorderRadiusUnits['Tablet'];
$flipBoxBackIconBorderRadiusGetMobile = $flipBoxBackIconBorderRadiusMobile['top'] . $flipBoxBackIconBorderRadiusUnits['Mobile'] . ' ' . $flipBoxBackIconBorderRadiusMobile['right'] . $flipBoxBackIconBorderRadiusUnits['Mobile'] . ' ' . $flipBoxBackIconBorderRadiusMobile['bottom'] . $flipBoxBackIconBorderRadiusUnits['Mobile'] . ' ' . $flipBoxBackIconBorderRadiusMobile['left'] . $flipBoxBackIconBorderRadiusUnits['Mobile'];

/** Back Icon Padding */
$flipBoxBackIconPaddingUnits = isset($block_attributes['flipBoxBackIconPaddingUnits']) ? $block_attributes['flipBoxBackIconPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackIconPaddingDesktop = isset($block_attributes['flipBoxBackIconPaddingDesktop']) ? $block_attributes['flipBoxBackIconPaddingDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackIconPaddingTablet = isset($block_attributes['flipBoxBackIconPaddingTablet']) ? $block_attributes['flipBoxBackIconPaddingTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackIconPaddingMobile = isset($block_attributes['flipBoxBackIconPaddingMobile']) ? $block_attributes['flipBoxBackIconPaddingMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackIconPaddingGetDesktop = $flipBoxBackIconPaddingDesktop['top'] . $flipBoxBackIconPaddingUnits['Desktop'] . ' ' . $flipBoxBackIconPaddingDesktop['right'] . $flipBoxBackIconPaddingUnits['Desktop'] . ' ' . $flipBoxBackIconPaddingDesktop['bottom'] . $flipBoxBackIconPaddingUnits['Desktop'] . ' ' . $flipBoxBackIconPaddingDesktop['left'] . $flipBoxBackIconPaddingUnits['Desktop'];
$flipBoxBackIconPaddingGetTablet = $flipBoxBackIconPaddingTablet['top'] . $flipBoxBackIconPaddingUnits['Tablet'] . ' ' . $flipBoxBackIconPaddingTablet['right'] . $flipBoxBackIconPaddingUnits['Tablet'] . ' ' . $flipBoxBackIconPaddingTablet['bottom'] . $flipBoxBackIconPaddingUnits['Tablet'] . ' ' . $flipBoxBackIconPaddingTablet['left'] . $flipBoxBackIconPaddingUnits['Tablet'];
$flipBoxBackIconPaddingGetMobile = $flipBoxBackIconPaddingMobile['top'] . $flipBoxBackIconPaddingUnits['Mobile'] . ' ' . $flipBoxBackIconPaddingMobile['right'] . $flipBoxBackIconPaddingUnits['Mobile'] . ' ' . $flipBoxBackIconPaddingMobile['bottom'] . $flipBoxBackIconPaddingUnits['Mobile'] . ' ' . $flipBoxBackIconPaddingMobile['left'] . $flipBoxBackIconPaddingUnits['Mobile'];

/** Back Icon Margin */
$flipBoxBackIconMarginUnits = isset($block_attributes['flipBoxBackIconMarginUnits']) ? $block_attributes['flipBoxBackIconMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackIconMarginDesktop = isset($block_attributes['flipBoxBackIconMarginDesktop']) ? $block_attributes['flipBoxBackIconMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackIconMarginTablet = isset($block_attributes['flipBoxBackIconMarginTablet']) ? $block_attributes['flipBoxBackIconMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackIconMarginMobile = isset($block_attributes['flipBoxBackIconMarginMobile']) ? $block_attributes['flipBoxBackIconMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackIconMarginGetDesktop = $flipBoxBackIconMarginDesktop['top'] . $flipBoxBackIconMarginUnits['Desktop'] . ' ' . $flipBoxBackIconMarginDesktop['right'] . $flipBoxBackIconMarginUnits['Desktop'] . ' ' . $flipBoxBackIconMarginDesktop['bottom'] . $flipBoxBackIconMarginUnits['Desktop'] . ' ' . $flipBoxBackIconMarginDesktop['left'] . $flipBoxBackIconMarginUnits['Desktop'];
$flipBoxBackIconMarginGetTablet = $flipBoxBackIconMarginTablet['top'] . $flipBoxBackIconMarginUnits['Tablet'] . ' ' . $flipBoxBackIconMarginTablet['right'] . $flipBoxBackIconMarginUnits['Tablet'] . ' ' . $flipBoxBackIconMarginTablet['bottom'] . $flipBoxBackIconMarginUnits['Tablet'] . ' ' . $flipBoxBackIconMarginTablet['left'] . $flipBoxBackIconMarginUnits['Tablet'];
$flipBoxBackIconMarginGetMobile = $flipBoxBackIconMarginMobile['top'] . $flipBoxBackIconMarginUnits['Mobile'] . ' ' . $flipBoxBackIconMarginMobile['right'] . $flipBoxBackIconMarginUnits['Mobile'] . ' ' . $flipBoxBackIconMarginMobile['bottom'] . $flipBoxBackIconMarginUnits['Mobile'] . ' ' . $flipBoxBackIconMarginMobile['left'] . $flipBoxBackIconMarginUnits['Mobile'];

/** Back Title Margin */
$flipBoxBackTitleMarginUnits = isset($block_attributes['flipBoxBackTitleMarginUnits']) ? $block_attributes['flipBoxBackTitleMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackTitleMarginDesktop = isset($block_attributes['flipBoxBackTitleMarginDesktop']) ? $block_attributes['flipBoxBackTitleMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackTitleMarginTablet = isset($block_attributes['flipBoxBackTitleMarginTablet']) ? $block_attributes['flipBoxBackTitleMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackTitleMarginMobile = isset($block_attributes['flipBoxBackTitleMarginMobile']) ? $block_attributes['flipBoxBackTitleMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackTitleMarginGetDesktop = $flipBoxBackTitleMarginDesktop['top'] . $flipBoxBackTitleMarginUnits['Desktop'] . ' ' . $flipBoxBackTitleMarginDesktop['right'] . $flipBoxBackTitleMarginUnits['Desktop'] . ' ' . $flipBoxBackTitleMarginDesktop['bottom'] . $flipBoxBackTitleMarginUnits['Desktop'] . ' ' . $flipBoxBackTitleMarginDesktop['left'] . $flipBoxBackTitleMarginUnits['Desktop'];
$flipBoxBackTitleMarginGetTablet = $flipBoxBackTitleMarginTablet['top'] . $flipBoxBackTitleMarginUnits['Tablet'] . ' ' . $flipBoxBackTitleMarginTablet['right'] . $flipBoxBackTitleMarginUnits['Tablet'] . ' ' . $flipBoxBackTitleMarginTablet['bottom'] . $flipBoxBackTitleMarginUnits['Tablet'] . ' ' . $flipBoxBackTitleMarginTablet['left'] . $flipBoxBackTitleMarginUnits['Tablet'];
$flipBoxBackTitleMarginGetMobile = $flipBoxBackTitleMarginMobile['top'] . $flipBoxBackTitleMarginUnits['Mobile'] . ' ' . $flipBoxBackTitleMarginMobile['right'] . $flipBoxBackTitleMarginUnits['Mobile'] . ' ' . $flipBoxBackTitleMarginMobile['bottom'] . $flipBoxBackTitleMarginUnits['Mobile'] . ' ' . $flipBoxBackTitleMarginMobile['left'] . $flipBoxBackTitleMarginUnits['Mobile'];


/** Back Title Typography */
$flipBoxBackTitleFontFamily = isset($block_attributes['flipBoxBackTitleFontFamily']) ? sanitize_text_field($block_attributes['flipBoxBackTitleFontFamily']) : 'inherit';
$flipBoxBackTitleFontSize = isset($block_attributes['flipBoxBackTitleFontSize']) ? $block_attributes['flipBoxBackTitleFontSize'] : array('Desktop' => '32', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackTitleFontSizeUnits = isset($block_attributes['flipBoxBackTitleFontSizeUnits']) ? $block_attributes['flipBoxBackTitleFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackTitleFontWeight = isset($block_attributes['flipBoxBackTitleFontWeight']) ? sanitize_text_field($block_attributes['flipBoxBackTitleFontWeight']) : '600';
$flipBoxBackTitleFontStyle = isset($block_attributes['flipBoxBackTitleFontStyle']) ? sanitize_text_field($block_attributes['flipBoxBackTitleFontStyle']) : '';
$flipBoxBackTitleTextTransform = isset($block_attributes['flipBoxBackTitleTextTransform']) ? sanitize_text_field($block_attributes['flipBoxBackTitleTextTransform']) : '';
$flipBoxBackTitleTextDecoration = isset($block_attributes['flipBoxBackTitleTextDecoration']) ? sanitize_text_field($block_attributes['flipBoxBackTitleTextDecoration']) : '';
$flipBoxBackTitleLetterSpacing = isset($block_attributes['flipBoxBackTitleLetterSpacing']) ? $block_attributes['flipBoxBackTitleLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackTitleLetterSpacingUnits = isset($block_attributes['flipBoxBackTitleLetterSpacingUnits']) ? $block_attributes['flipBoxBackTitleLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackTitleLineHeight = isset($block_attributes['flipBoxBackTitleLineHeight']) ? $block_attributes['flipBoxBackTitleLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackTitleLineHeightUnits = isset($block_attributes['flipBoxBackTitleLineHeightUnits']) ? $block_attributes['flipBoxBackTitleLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackTitleFontColor = isset($block_attributes['flipBoxBackTitleFontColor']) ? sanitize_hex_color($block_attributes['flipBoxBackTitleFontColor']) : '';
$flipBoxBackTitleFontHoverColor = isset($block_attributes['flipBoxBackTitleFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxBackTitleFontHoverColor']) : '';

/** Back Content Margin */
$flipBoxBackContentMarginUnits = isset($block_attributes['flipBoxBackContentMarginUnits']) ? $block_attributes['flipBoxBackContentMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackContentMarginDesktop = isset($block_attributes['flipBoxBackContentMarginDesktop']) ? $block_attributes['flipBoxBackContentMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackContentMarginTablet = isset($block_attributes['flipBoxBackContentMarginTablet']) ? $block_attributes['flipBoxBackContentMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackContentMarginMobile = isset($block_attributes['flipBoxBackContentMarginMobile']) ? $block_attributes['flipBoxBackContentMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackContentMarginGetDesktop = $flipBoxBackContentMarginDesktop['top'] . $flipBoxBackContentMarginUnits['Desktop'] . ' ' . $flipBoxBackContentMarginDesktop['right'] . $flipBoxBackContentMarginUnits['Desktop'] . ' ' . $flipBoxBackContentMarginDesktop['bottom'] . $flipBoxBackContentMarginUnits['Desktop'] . ' ' . $flipBoxBackContentMarginDesktop['left'] . $flipBoxBackContentMarginUnits['Desktop'];
$flipBoxBackContentMarginGetTablet = $flipBoxBackContentMarginTablet['top'] . $flipBoxBackContentMarginUnits['Tablet'] . ' ' . $flipBoxBackContentMarginTablet['right'] . $flipBoxBackContentMarginUnits['Tablet'] . ' ' . $flipBoxBackContentMarginTablet['bottom'] . $flipBoxBackContentMarginUnits['Tablet'] . ' ' . $flipBoxBackContentMarginTablet['left'] . $flipBoxBackContentMarginUnits['Tablet'];
$flipBoxBackContentMarginGetMobile = $flipBoxBackContentMarginMobile['top'] . $flipBoxBackContentMarginUnits['Mobile'] . ' ' . $flipBoxBackContentMarginMobile['right'] . $flipBoxBackContentMarginUnits['Mobile'] . ' ' . $flipBoxBackContentMarginMobile['bottom'] . $flipBoxBackContentMarginUnits['Mobile'] . ' ' . $flipBoxBackContentMarginMobile['left'] . $flipBoxBackContentMarginUnits['Mobile'];

/** Back Content Typography */
$flipBoxBackContentFontFamily = isset($block_attributes['flipBoxBackContentFontFamily']) ? sanitize_text_field($block_attributes['flipBoxBackContentFontFamily']) : 'inherit';
$flipBoxBackContentFontSize = isset($block_attributes['flipBoxBackContentFontSize']) ? $block_attributes['flipBoxBackContentFontSize'] : array('Desktop' => '18', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackContentFontSizeUnits = isset($block_attributes['flipBoxBackContentFontSizeUnits']) ? $block_attributes['flipBoxBackContentFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackContentFontWeight = isset($block_attributes['flipBoxBackContentFontWeight']) ? sanitize_text_field($block_attributes['flipBoxBackContentFontWeight']) : '400';
$flipBoxBackContentFontStyle = isset($block_attributes['flipBoxBackContentFontStyle']) ? sanitize_text_field($block_attributes['flipBoxBackContentFontStyle']) : '';
$flipBoxBackContentTextTransform = isset($block_attributes['flipBoxBackContentTextTransform']) ? sanitize_text_field($block_attributes['flipBoxBackContentTextTransform']) : '';
$flipBoxBackContentTextDecoration = isset($block_attributes['flipBoxBackContentTextDecoration']) ? sanitize_text_field($block_attributes['flipBoxBackContentTextDecoration']) : '';
$flipBoxBackContentLetterSpacing = isset($block_attributes['flipBoxBackContentLetterSpacing']) ? $block_attributes['flipBoxBackContentLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackContentLetterSpacingUnits = isset($block_attributes['flipBoxBackContentLetterSpacingUnits']) ? $block_attributes['flipBoxBackContentLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackContentLineHeight = isset($block_attributes['flipBoxBackContentLineHeight']) ? $block_attributes['flipBoxBackContentLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackContentLineHeightUnits = isset($block_attributes['flipBoxBackContentLineHeightUnits']) ? $block_attributes['flipBoxBackContentLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackContentFontColor = isset($block_attributes['flipBoxBackContentFontColor']) ? sanitize_hex_color($block_attributes['flipBoxBackContentFontColor']) : '';
$flipBoxBackContentFontHoverColor = isset($block_attributes['flipBoxBackContentFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxBackContentFontHoverColor']) : '';

/** Back Button Typography */
$flipBoxBackButtonFontFamily = isset($block_attributes['flipBoxBackButtonFontFamily']) ? sanitize_text_field($block_attributes['flipBoxBackButtonFontFamily']) : 'inherit';
$flipBoxBackButtonFontSize = isset($block_attributes['flipBoxBackButtonFontSize']) ? $block_attributes['flipBoxBackButtonFontSize'] : array('Desktop' => '62', 'Tablet' => '58', 'Mobile' => '52');
$flipBoxBackButtonFontSizeUnits = isset($block_attributes['flipBoxBackButtonFontSizeUnits']) ? $block_attributes['flipBoxBackButtonFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackButtonFontWeight = isset($block_attributes['flipBoxBackButtonFontWeight']) ? sanitize_text_field($block_attributes['flipBoxBackButtonFontWeight']) : '700';
$flipBoxBackButtonFontStyle = isset($block_attributes['flipBoxBackButtonFontStyle']) ? sanitize_text_field($block_attributes['flipBoxBackButtonFontStyle']) : '';
$flipBoxBackButtonTextTransform = isset($block_attributes['flipBoxBackButtonTextTransform']) ? sanitize_text_field($block_attributes['flipBoxBackButtonTextTransform']) : '';
$flipBoxBackButtonTextDecoration = isset($block_attributes['flipBoxBackButtonTextDecoration']) ? sanitize_text_field($block_attributes['flipBoxBackButtonTextDecoration']) : '';
$flipBoxBackButtonLetterSpacing = isset($block_attributes['flipBoxBackButtonLetterSpacing']) ? $block_attributes['flipBoxBackButtonLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackButtonLetterSpacingUnits = isset($block_attributes['flipBoxBackButtonLetterSpacingUnits']) ? $block_attributes['flipBoxBackButtonLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackButtonLineHeight = isset($block_attributes['flipBoxBackButtonLineHeight']) ? $block_attributes['flipBoxBackButtonLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$flipBoxBackButtonLineHeightUnits = isset($block_attributes['flipBoxBackButtonLineHeightUnits']) ? $block_attributes['flipBoxBackButtonLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackButtonFontColor = isset($block_attributes['flipBoxBackButtonFontColor']) ? sanitize_hex_color($block_attributes['flipBoxBackButtonFontColor']) : '';
$flipBoxBackButtonFontHoverColor = isset($block_attributes['flipBoxBackButtonFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxBackButtonFontHoverColor']) : '';

$flipBoxBackButtonBgFontColor = isset($block_attributes['flipBoxBackButtonBgFontColor']) ? sanitize_hex_color($block_attributes['flipBoxBackButtonBgFontColor']) : '#ffffff';
$flipBoxBackButtonBgFontHoverColor = isset($block_attributes['flipBoxBackButtonBgFontHoverColor']) ? sanitize_hex_color($block_attributes['flipBoxBackButtonBgFontHoverColor']) : '#ffffff';


/** Back Button Border*/
$flipBoxBackButtonBorder = isset($block_attributes['flipBoxBackButtonBorder']) ? sanitize_text_field($block_attributes['flipBoxBackButtonBorder']) : '';
$flipBoxBackButtonBorderColor = isset($block_attributes['flipBoxBackButtonBorderColor']) ? sanitize_hex_color($block_attributes['flipBoxBackButtonBorderColor']) : '';
$flipBoxBackButtonBorderTypeUnits = isset($block_attributes['flipBoxBackButtonBorderTypeUnits']) ? $block_attributes['flipBoxBackButtonBorderTypeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackButtonBorderTypeDesktop = isset($block_attributes['flipBoxBackButtonBorderTypeDesktop']) ? $block_attributes['flipBoxBackButtonBorderTypeDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxBackButtonBorderTypeTablet = isset($block_attributes['flipBoxBackButtonBorderTypeTablet']) ? $block_attributes['flipBoxBackButtonBorderTypeTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxBackButtonBorderTypeMobile = isset($block_attributes['flipBoxBackButtonBorderTypeMobile']) ? $block_attributes['flipBoxBackButtonBorderTypeMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$flipBoxBackButtonBorderTypeGetDesktop = $flipBoxBackButtonBorderTypeDesktop['top'] . $flipBoxBackButtonBorderTypeUnits['Desktop'] . ' ' . $flipBoxBackButtonBorderTypeDesktop['right'] . $flipBoxBackButtonBorderTypeUnits['Desktop'] . ' ' . $flipBoxBackButtonBorderTypeDesktop['bottom'] . $flipBoxBackButtonBorderTypeUnits['Desktop'] . ' ' . $flipBoxBackButtonBorderTypeDesktop['left'] . $flipBoxBackButtonBorderTypeUnits['Desktop'];
$flipBoxBackButtonBorderTypeGetTablet = $flipBoxBackButtonBorderTypeTablet['top'] . $flipBoxBackButtonBorderTypeUnits['Tablet'] . ' ' . $flipBoxBackButtonBorderTypeTablet['right'] . $flipBoxBackButtonBorderTypeUnits['Tablet'] . ' ' . $flipBoxBackButtonBorderTypeTablet['bottom'] . $flipBoxBackButtonBorderTypeUnits['Tablet'] . ' ' . $flipBoxBackButtonBorderTypeTablet['left'] . $flipBoxBackButtonBorderTypeUnits['Tablet'];
$flipBoxBackButtonBorderTypeGetMobile = $flipBoxBackButtonBorderTypeMobile['top'] . $flipBoxBackButtonBorderTypeUnits['Mobile'] . ' ' . $flipBoxBackButtonBorderTypeMobile['right'] . $flipBoxBackButtonBorderTypeUnits['Mobile'] . ' ' . $flipBoxBackButtonBorderTypeMobile['bottom'] . $flipBoxBackButtonBorderTypeUnits['Mobile'] . ' ' . $flipBoxBackButtonBorderTypeMobile['left'] . $flipBoxBackButtonBorderTypeUnits['Mobile'];

$flipBoxBackButtonBorderRadiusUnits = isset($block_attributes['flipBoxBackButtonBorderRadiusUnits']) ? $block_attributes['flipBoxBackButtonBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackButtonBorderRadiusDesktop = isset($block_attributes['flipBoxBackButtonBorderRadiusDesktop']) ? $block_attributes['flipBoxBackButtonBorderRadiusDesktop'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxBackButtonBorderRadiusTablet = isset($block_attributes['flipBoxBackButtonBorderRadiusTablet']) ? $block_attributes['flipBoxBackButtonBorderRadiusTablet'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxBackButtonBorderRadiusMobile = isset($block_attributes['flipBoxBackButtonBorderRadiusMobile']) ? $block_attributes['flipBoxBackButtonBorderRadiusMobile'] : array('top' => '500', 'bottom' => '500', 'left' => '500', 'right' => '500');
$flipBoxBackButtonBorderRadiusGetDesktop = $flipBoxBackButtonBorderRadiusDesktop['top'] . $flipBoxBackButtonBorderRadiusUnits['Desktop'] . ' ' . $flipBoxBackButtonBorderRadiusDesktop['right'] . $flipBoxBackButtonBorderRadiusUnits['Desktop'] . ' ' . $flipBoxBackButtonBorderRadiusDesktop['bottom'] . $flipBoxBackButtonBorderRadiusUnits['Desktop'] . ' ' . $flipBoxBackButtonBorderRadiusDesktop['left'] . $flipBoxBackButtonBorderRadiusUnits['Desktop'];
$flipBoxBackButtonBorderRadiusGetTablet = $flipBoxBackButtonBorderRadiusTablet['top'] . $flipBoxBackButtonBorderRadiusUnits['Tablet'] . ' ' . $flipBoxBackButtonBorderRadiusTablet['right'] . $flipBoxBackButtonBorderRadiusUnits['Tablet'] . ' ' . $flipBoxBackButtonBorderRadiusTablet['bottom'] . $flipBoxBackButtonBorderRadiusUnits['Tablet'] . ' ' . $flipBoxBackButtonBorderRadiusTablet['left'] . $flipBoxBackButtonBorderRadiusUnits['Tablet'];
$flipBoxBackButtonBorderRadiusGetMobile = $flipBoxBackButtonBorderRadiusMobile['top'] . $flipBoxBackButtonBorderRadiusUnits['Mobile'] . ' ' . $flipBoxBackButtonBorderRadiusMobile['right'] . $flipBoxBackButtonBorderRadiusUnits['Mobile'] . ' ' . $flipBoxBackButtonBorderRadiusMobile['bottom'] . $flipBoxBackButtonBorderRadiusUnits['Mobile'] . ' ' . $flipBoxBackButtonBorderRadiusMobile['left'] . $flipBoxBackButtonBorderRadiusUnits['Mobile'];



/** Back Button Padding */
$flipBoxBackButtonPaddingUnits = isset($block_attributes['flipBoxBackButtonPaddingUnits']) ? $block_attributes['flipBoxBackButtonPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackButtonPaddingDesktop = isset($block_attributes['flipBoxBackButtonPaddingDesktop']) ? $block_attributes['flipBoxBackButtonPaddingDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackButtonPaddingTablet = isset($block_attributes['flipBoxBackButtonPaddingTablet']) ? $block_attributes['flipBoxBackButtonPaddingTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackButtonPaddingMobile = isset($block_attributes['flipBoxBackButtonPaddingMobile']) ? $block_attributes['flipBoxBackButtonPaddingMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackButtonPaddingGetDesktop = $flipBoxBackButtonPaddingDesktop['top'] . $flipBoxBackButtonPaddingUnits['Desktop'] . ' ' . $flipBoxBackButtonPaddingDesktop['right'] . $flipBoxBackButtonPaddingUnits['Desktop'] . ' ' . $flipBoxBackButtonPaddingDesktop['bottom'] . $flipBoxBackButtonPaddingUnits['Desktop'] . ' ' . $flipBoxBackButtonPaddingDesktop['left'] . $flipBoxBackButtonPaddingUnits['Desktop'];
$flipBoxBackButtonPaddingGetTablet = $flipBoxBackButtonPaddingTablet['top'] . $flipBoxBackButtonPaddingUnits['Tablet'] . ' ' . $flipBoxBackButtonPaddingTablet['right'] . $flipBoxBackButtonPaddingUnits['Tablet'] . ' ' . $flipBoxBackButtonPaddingTablet['bottom'] . $flipBoxBackButtonPaddingUnits['Tablet'] . ' ' . $flipBoxBackButtonPaddingTablet['left'] . $flipBoxBackButtonPaddingUnits['Tablet'];
$flipBoxBackButtonPaddingGetMobile = $flipBoxBackButtonPaddingMobile['top'] . $flipBoxBackButtonPaddingUnits['Mobile'] . ' ' . $flipBoxBackButtonPaddingMobile['right'] . $flipBoxBackButtonPaddingUnits['Mobile'] . ' ' . $flipBoxBackButtonPaddingMobile['bottom'] . $flipBoxBackButtonPaddingUnits['Mobile'] . ' ' . $flipBoxBackButtonPaddingMobile['left'] . $flipBoxBackButtonPaddingUnits['Mobile'];

/** Back Button Margin */
$flipBoxBackButtonMarginUnits = isset($block_attributes['flipBoxBackButtonMarginUnits']) ? $block_attributes['flipBoxBackButtonMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$flipBoxBackButtonMarginDesktop = isset($block_attributes['flipBoxBackButtonMarginDesktop']) ? $block_attributes['flipBoxBackButtonMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackButtonMarginTablet = isset($block_attributes['flipBoxBackButtonMarginTablet']) ? $block_attributes['flipBoxBackButtonMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackButtonMarginMobile = isset($block_attributes['flipBoxBackButtonMarginMobile']) ? $block_attributes['flipBoxBackButtonMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$flipBoxBackButtonMarginGetDesktop = $flipBoxBackButtonMarginDesktop['top'] . $flipBoxBackButtonMarginUnits['Desktop'] . ' ' . $flipBoxBackButtonMarginDesktop['right'] . $flipBoxBackButtonMarginUnits['Desktop'] . ' ' . $flipBoxBackButtonMarginDesktop['bottom'] . $flipBoxBackButtonMarginUnits['Desktop'] . ' ' . $flipBoxBackButtonMarginDesktop['left'] . $flipBoxBackButtonMarginUnits['Desktop'];
$flipBoxBackButtonMarginGetTablet = $flipBoxBackButtonMarginTablet['top'] . $flipBoxBackButtonMarginUnits['Tablet'] . ' ' . $flipBoxBackButtonMarginTablet['right'] . $flipBoxBackButtonMarginUnits['Tablet'] . ' ' . $flipBoxBackButtonMarginTablet['bottom'] . $flipBoxBackButtonMarginUnits['Tablet'] . ' ' . $flipBoxBackButtonMarginTablet['left'] . $flipBoxBackButtonMarginUnits['Tablet'];
$flipBoxBackButtonMarginGetMobile = $flipBoxBackButtonMarginMobile['top'] . $flipBoxBackButtonMarginUnits['Mobile'] . ' ' . $flipBoxBackButtonMarginMobile['right'] . $flipBoxBackButtonMarginUnits['Mobile'] . ' ' . $flipBoxBackButtonMarginMobile['bottom'] . $flipBoxBackButtonMarginUnits['Mobile'] . ' ' . $flipBoxBackButtonMarginMobile['left'] . $flipBoxBackButtonMarginUnits['Mobile'];


/** End Flip Box Back Control */

// Generate CSS content
$css_content = "

.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front {
    " . ($flipBoxItemFrontSize['Desktop'] ? "min-height: " . $flipBoxItemFrontSize['Desktop'] . $flipBoxItemFrontSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxItemFrontBorder ? "border: " . $flipBoxItemFrontBorder . ";" : "") . "
    " . ($flipBoxItemFrontBorderTypeGetDesktop ? "border-width: " . $flipBoxItemFrontBorderTypeGetDesktop . ";" : "") . "
    " . ($flipBoxItemFrontBorderRadiusGetDesktop ? "border-radius: " . $flipBoxItemFrontBorderRadiusGetDesktop . ";" : "") . "
    " . ($flipBoxItemFrontBorderColor ? "border-color: " . $flipBoxItemFrontBorderColor . ";" : "") . "
    " . ($flipBoxItemFrontBgFontColor ? "background: " . $flipBoxItemFrontBgFontColor . ";" : "") . "
}
.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon svg {
    " . ($flipBoxFrontIconSize['Desktop'] ? "width: " . $flipBoxFrontIconSize['Desktop'] . $flipBoxFrontIconSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontIconSize['Desktop'] ? "height: " . $flipBoxFrontIconSize['Desktop'] . $flipBoxFrontIconSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontIconBorder ? "border: " . $flipBoxFrontIconBorder . ";" : "") . "
    " . ($flipBoxFrontIconBorderTypeGetDesktop ? "border-width: " . $flipBoxFrontIconBorderTypeGetDesktop . ";" : "") . "
    " . ($flipBoxFrontIconBorderRadiusGetDesktop ? "border-radius: " . $flipBoxFrontIconBorderRadiusGetDesktop . ";" : "") . "
    " . ($flipBoxFrontIconBorderColor ? "border-color: " . $flipBoxFrontIconBorderColor . ";" : "") . "
    " . ($flipBoxFrontIconFontColor ? "fill: " . $flipBoxFrontIconFontColor . ";" : "") . "
    " . ($flipBoxFrontIconBgFontColor ? "background: " . $flipBoxFrontIconBgFontColor . ";" : "") . "
    " . ($flipBoxFrontIconPaddingGetDesktop ? "padding: " . $flipBoxFrontIconPaddingGetDesktop . ";" : "") . "
    " . ($flipBoxFrontIconMarginGetDesktop ? "margin: " . $flipBoxFrontIconMarginGetDesktop . ";" : "") . "
}

.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon svg {
    " . ($flipBoxBackIconSize['Desktop'] ? "width: " . $flipBoxBackIconSize['Desktop'] . $flipBoxBackIconSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackIconSize['Desktop'] ? "height: " . $flipBoxBackIconSize['Desktop'] . $flipBoxBackIconSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackIconBorder ? "border: " . $flipBoxBackIconBorder . ";" : "") . "
    " . ($flipBoxBackIconBorderTypeGetDesktop ? "border-width: " . $flipBoxBackIconBorderTypeGetDesktop . ";" : "") . "
    " . ($flipBoxBackIconBorderRadiusGetDesktop ? "border-radius: " . $flipBoxBackIconBorderRadiusGetDesktop . ";" : "") . "
    " . ($flipBoxBackIconBorderColor ? "border-color: " . $flipBoxBackIconBorderColor . ";" : "") . "
    " . ($flipBoxBackIconFontColor ? "fill: " . $flipBoxBackIconFontColor . ";" : "") . "
    " . ($flipBoxBackIconBgFontColor ? "background: " . $flipBoxBackIconBgFontColor . ";" : "") . "
    " . ($flipBoxBackIconPaddingGetDesktop ? "padding: " . $flipBoxBackIconPaddingGetDesktop . ";" : "") . "
    " . ($flipBoxBackIconMarginGetDesktop ? "margin: " . $flipBoxBackIconMarginGetDesktop . ";" : "") . "
}

.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-title {
    " . ($flipBoxFrontTitleFontColor ? "color: " . $flipBoxFrontTitleFontColor . ";" : "") . "
    " . ($flipBoxFrontTitleFontFamily ? "font-family: " . $flipBoxFrontTitleFontFamily . ";" : "") . "
    " . ($flipBoxFrontTitleFontSize['Desktop'] ? "font-size: " . $flipBoxFrontTitleFontSize['Desktop'] . $flipBoxFrontTitleFontSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontTitleFontWeight ? "font-weight: " . $flipBoxFrontTitleFontWeight . ";" : "") . "
    " . ($flipBoxFrontTitleFontStyle ? "font-style: " . $flipBoxFrontTitleFontStyle . ";" : "") . "
    " . ($flipBoxFrontTitleTextTransform ? "text-transform: " . $flipBoxFrontTitleTextTransform . ";" : "") . "
    " . ($flipBoxFrontTitleTextDecoration ? "text-decoration: " . $flipBoxFrontTitleTextDecoration . ";" : "") . "
    " . ($flipBoxFrontTitleLetterSpacing['Desktop'] ? "letter-spacing: " . $flipBoxFrontTitleLetterSpacing['Desktop'] . $flipBoxFrontTitleLetterSpacingUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontTitleLineHeight['Desktop'] ? "line-height: " . $flipBoxFrontTitleLineHeight['Desktop'] . $flipBoxFrontTitleLineHeightUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontTitleMarginGetDesktop ? "margin: " . $flipBoxFrontTitleMarginGetDesktop . ";" : "") . "
}

.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content {
    " . ($flipBoxFrontContentFontColor ? "color: " . $flipBoxFrontContentFontColor . ";" : "") . "
    " . ($flipBoxFrontContentFontFamily ? "font-family: " . $flipBoxFrontContentFontFamily . ";" : "") . "
    " . ($flipBoxFrontContentFontSize['Desktop'] ? "font-size: " . $flipBoxFrontContentFontSize['Desktop'] . $flipBoxFrontContentFontSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontContentFontWeight ? "font-weight: " . $flipBoxFrontContentFontWeight . ";" : "") . "
    " . ($flipBoxFrontContentFontStyle ? "font-style: " . $flipBoxFrontContentFontStyle . ";" : "") . "
    " . ($flipBoxFrontContentTextTransform ? "text-transform: " . $flipBoxFrontContentTextTransform . ";" : "") . "
    " . ($flipBoxFrontContentTextDecoration ? "text-decoration: " . $flipBoxFrontContentTextDecoration . ";" : "") . "
    " . ($flipBoxFrontContentLetterSpacing['Desktop'] ? "letter-spacing: " . $flipBoxFrontContentLetterSpacing['Desktop'] . $flipBoxFrontContentLetterSpacingUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontContentLineHeight['Desktop'] ? "line-height: " . $flipBoxFrontContentLineHeight['Desktop'] . $flipBoxFrontContentLineHeightUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxFrontContentMarginGetDesktop ? "margin: " . $flipBoxFrontContentMarginGetDesktop . ";" : "") . "
}

.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-back-button {
    display: inline-block;
    " . ($flipBoxBackButtonFontColor ? "color: " . $flipBoxBackButtonFontColor . ";" : "") . "
    " . ($flipBoxBackButtonBgFontColor ? "background: " . $flipBoxBackButtonBgFontColor . ";" : "") . "
    " . ($flipBoxBackButtonFontFamily ? "font-family: " . $flipBoxBackButtonFontFamily . ";" : "") . "
    " . ($flipBoxBackButtonFontWeight ? "font-weight: " . $flipBoxBackButtonFontWeight . ";" : "") . "
    " . ($flipBoxBackButtonFontStyle ? "font-style: " . $flipBoxBackButtonFontStyle . ";" : "") . "
    " . ($flipBoxBackButtonTextTransform ? "text-transform: " . $flipBoxBackButtonTextTransform . ";" : "") . "
    " . ($flipBoxBackButtonTextDecoration ? "text-decoration: " . $flipBoxBackButtonTextDecoration . ";" : "") . "
    " . ($flipBoxBackButtonFontSize['Desktop'] ? "font-size: " . $flipBoxBackButtonFontSize['Desktop'] . $flipBoxBackButtonFontSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackButtonLetterSpacing['Desktop'] ? "letter-spacing: " . $flipBoxBackButtonLetterSpacing['Desktop'] . $flipBoxBackButtonLetterSpacingUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackButtonLineHeight['Desktop'] ? "line-height: " . $flipBoxBackButtonLineHeight['Desktop'] . $flipBoxBackButtonLineHeightUnits['Desktop'] . ";" : "") . "
     " . ($flipBoxBackButtonBorder ? "border: " . $flipBoxBackButtonBorder . ";" : "") . "
    " . ($flipBoxBackButtonBorderTypeGetDesktop ? "border-width: " . $flipBoxBackButtonBorderTypeGetDesktop . ";" : "") . "
    " . ($flipBoxBackButtonBorderRadiusGetDesktop ? "border-radius: " . $flipBoxBackButtonBorderRadiusGetDesktop . ";" : "") . "
    " . ($flipBoxBackButtonBorderColor ? "border-color: " . $flipBoxBackButtonBorderColor . ";" : "") . "
    " . ($flipBoxBackButtonPaddingGetDesktop ? "padding: " . $flipBoxBackButtonPaddingGetDesktop . ";" : "") . "
    " . ($flipBoxBackButtonMarginGetDesktop ? "margin: " . $flipBoxBackButtonMarginGetDesktop . ";" : "") . "
}
.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-title {
    " . ($flipBoxBackTitleFontColor ? "color: " . $flipBoxBackTitleFontColor . ";" : "") . "
    " . ($flipBoxBackTitleFontFamily ? "font-family: " . $flipBoxBackTitleFontFamily . ";" : "") . "
    " . ($flipBoxBackTitleFontSize['Desktop'] ? "font-size: " . $flipBoxBackTitleFontSize['Desktop'] . $flipBoxBackTitleFontSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackTitleFontWeight ? "font-weight: " . $flipBoxBackTitleFontWeight . ";" : "") . "
    " . ($flipBoxBackTitleFontStyle ? "font-style: " . $flipBoxBackTitleFontStyle . ";" : "") . "
    " . ($flipBoxBackTitleTextTransform ? "text-transform: " . $flipBoxBackTitleTextTransform . ";" : "") . "
    " . ($flipBoxBackTitleTextDecoration ? "text-decoration: " . $flipBoxBackTitleTextDecoration . ";" : "") . "
    " . ($flipBoxBackTitleLetterSpacing['Desktop'] ? "letter-spacing: " . $flipBoxBackTitleLetterSpacing['Desktop'] . $flipBoxBackTitleLetterSpacingUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackTitleLineHeight['Desktop'] ? "line-height: " . $flipBoxBackTitleLineHeight['Desktop'] . $flipBoxBackTitleLineHeightUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackTitleMarginGetDesktop ? "margin: " . $flipBoxBackTitleMarginGetDesktop . ";" : "") . "
}
.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content {
    " . ($flipBoxBackContentFontColor ? "color: " . $flipBoxBackContentFontColor . ";" : "") . "
    " . ($flipBoxBackContentFontFamily ? "font-family: " . $flipBoxBackContentFontFamily . ";" : "") . "
    " . ($flipBoxBackContentFontSize['Desktop'] ? "font-size: " . $flipBoxBackContentFontSize['Desktop'] . $flipBoxBackContentFontSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackContentFontWeight ? "font-weight: " . $flipBoxBackContentFontWeight . ";" : "") . "
    " . ($flipBoxBackContentFontStyle ? "font-style: " . $flipBoxBackContentFontStyle . ";" : "") . "
    " . ($flipBoxBackContentTextTransform ? "text-transform: " . $flipBoxBackContentTextTransform . ";" : "") . "
    " . ($flipBoxBackContentTextDecoration ? "text-decoration: " . $flipBoxBackContentTextDecoration . ";" : "") . "
    " . ($flipBoxBackContentLetterSpacing['Desktop'] ? "letter-spacing: " . $flipBoxBackContentLetterSpacing['Desktop'] . $flipBoxBackContentLetterSpacingUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackContentLineHeight['Desktop'] ? "line-height: " . $flipBoxBackContentLineHeight['Desktop'] . $flipBoxBackContentLineHeightUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxBackContentMarginGetDesktop ? "margin: " . $flipBoxBackContentMarginGetDesktop . ";" : "") . "
}
.fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back {
    " . ($flipBoxItemBackSize['Desktop'] ? "min-height: " . $flipBoxItemBackSize['Desktop'] . $flipBoxItemBackSizeUnits['Desktop'] . ";" : "") . "
    " . ($flipBoxItemBackBorder ? "border: " . $flipBoxItemBackBorder . ";" : "") . "
    " . ($flipBoxItemBackBorderTypeGetDesktop ? "border-width: " . $flipBoxItemBackBorderTypeGetDesktop . ";" : "") . "
    " . ($flipBoxItemBackBorderRadiusGetDesktop ? "border-radius: " . $flipBoxItemBackBorderRadiusGetDesktop . ";" : "") . "
    " . ($flipBoxItemBackBorderColor ? "border-color: " . $flipBoxItemBackBorderColor . ";" : "") . "
    " . ($flipBoxItemBackBgFontColor ? "background: " . $flipBoxItemBackBgFontColor . ";" : "") . "
}
// Tablet media query
@media only screen and (max-width: 1024px) {
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front {
        " . ($flipBoxItemFrontSize['Tablet'] ? "min-height: " . $flipBoxItemFrontSize['Tablet'] . $flipBoxItemFrontSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxItemFrontBorderTypeGetTablet ? "border-width: " . $flipBoxItemFrontBorderTypeGetTablet . ";" : "") . "
        " . ($flipBoxItemFrontBorderRadiusGetTablet ? "border-radius: " . $flipBoxItemFrontBorderRadiusGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back {
        " . ($flipBoxItemBackSize['Tablet'] ? "min-height: " . $flipBoxItemBackSize['Tablet'] . $flipBoxItemBackSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxItemBackBorderTypeGetTablet ? "border-width: " . $flipBoxItemBackBorderTypeGetTablet . ";" : "") . "
        " . ($flipBoxItemBackBorderRadiusGetTablet ? "border-radius: " . $flipBoxItemBackBorderRadiusGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon svg {
        " . ($flipBoxFrontIconSize['Tablet'] ? "width: " . $flipBoxFrontIconSize['Tablet'] . $flipBoxFrontIconSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontIconSize['Tablet'] ? "height: " . $flipBoxFrontIconSize['Tablet'] . $flipBoxFrontIconSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontIconBorderTypeGetTablet ? "border-width: " . $flipBoxFrontIconBorderTypeGetTablet . ";" : "") . "
        " . ($flipBoxFrontIconBorderRadiusGetTablet ? "border-radius: " . $flipBoxFrontIconBorderRadiusGetTablet . ";" : "") . "
        " . ($flipBoxFrontIconPaddingGetTablet ? "padding: " . $flipBoxFrontIconPaddingGetTablet . ";" : "") . "
        " . ($flipBoxFrontIconMarginGetTablet ? "margin: " . $flipBoxFrontIconMarginGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon svg {
        " . ($flipBoxBackIconSize['Tablet'] ? "width: " . $flipBoxBackIconSize['Tablet'] . $flipBoxBackIconSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackIconSize['Tablet'] ? "height: " . $flipBoxBackIconSize['Tablet'] . $flipBoxBackIconSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackIconBorderTypeGetTablet ? "border-width: " . $flipBoxBackIconBorderTypeGetTablet . ";" : "") . "
        " . ($flipBoxBackIconBorderRadiusGetTablet ? "border-radius: " . $flipBoxBackIconBorderRadiusGetTablet . ";" : "") . "
        " . ($flipBoxBackIconPaddingGetTablet ? "padding: " . $flipBoxBackIconPaddingGetTablet . ";" : "") . "
        " . ($flipBoxBackIconMarginGetTablet ? "margin: " . $flipBoxBackIconMarginGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-title {
        " . ($flipBoxFrontTitleFontSize['Tablet'] ? "font-size: " . $flipBoxFrontTitleFontSize['Tablet'] . $flipBoxFrontTitleFontSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontTitleLetterSpacing['Tablet'] ? "letter-spacing: " . $flipBoxFrontTitleLetterSpacing['Tablet'] . $flipBoxFrontTitleLetterSpacingUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontTitleLineHeight['Tablet'] ? "line-height: " . $flipBoxFrontTitleLineHeight['Tablet'] . $flipBoxFrontTitleLineHeightUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontTitleMarginGetTablet ? "margin: " . $flipBoxFrontTitleMarginGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content {
        " . ($flipBoxFrontContentFontSize['Tablet'] ? "font-size: " . $flipBoxFrontContentFontSize['Tablet'] . $flipBoxFrontContentFontSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontContentLetterSpacing['Tablet'] ? "letter-spacing: " . $flipBoxFrontContentLetterSpacing['Tablet'] . $flipBoxFrontContentLetterSpacingUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontContentLineHeight['Tablet'] ? "line-height: " . $flipBoxFrontContentLineHeight['Tablet'] . $flipBoxFrontContentLineHeightUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxFrontContentMarginGetTablet ? "margin: " . $flipBoxFrontContentMarginGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-back-button {
        " . ($flipBoxBackButtonFontSize['Tablet'] ? "font-size: " . $flipBoxBackButtonFontSize['Tablet'] . $flipBoxBackButtonFontSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackButtonLetterSpacing['Tablet'] ? "letter-spacing: " . $flipBoxBackButtonLetterSpacing['Tablet'] . $flipBoxBackButtonLetterSpacingUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackButtonLineHeight['Tablet'] ? "line-height: " . $flipBoxBackButtonLineHeight['Tablet'] . $flipBoxBackButtonLineHeightUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackButtonBorderTypeGetTablet ? "border-width: " . $flipBoxBackButtonBorderTypeGetTablet . ";" : "") . "
        " . ($flipBoxBackButtonBorderRadiusGetTablet ? "border-radius: " . $flipBoxBackButtonBorderRadiusGetTablet . ";" : "") . "
        " . ($flipBoxBackButtonPaddingGetTablet ? "padding: " . $flipBoxBackButtonPaddingGetTablet . ";" : "") . "
        " . ($flipBoxBackButtonMarginGetTablet ? "margin: " . $flipBoxBackButtonMarginGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-title {
        " . ($flipBoxBackTitleFontSize['Tablet'] ? "font-size: " . $flipBoxBackTitleFontSize['Tablet'] . $flipBoxBackTitleFontSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackTitleLetterSpacing['Tablet'] ? "letter-spacing: " . $flipBoxBackTitleLetterSpacing['Tablet'] . $flipBoxBackTitleLetterSpacingUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackTitleLineHeight['Tablet'] ? "line-height: " . $flipBoxBackTitleLineHeight['Tablet'] . $flipBoxBackTitleLineHeightUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackTitleMarginGetTablet ? "margin: " . $flipBoxBackTitleMarginGetTablet . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content {
        " . ($flipBoxBackContentFontSize['Tablet'] ? "font-size: " . $flipBoxBackContentFontSize['Tablet'] . $flipBoxBackContentFontSizeUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackContentLetterSpacing['Tablet'] ? "letter-spacing: " . $flipBoxBackContentLetterSpacing['Tablet'] . $flipBoxBackContentLetterSpacingUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackContentLineHeight['Tablet'] ? "line-height: " . $flipBoxBackContentLineHeight['Tablet'] . $flipBoxBackContentLineHeightUnits['Tablet'] . ";" : "") . "
        " . ($flipBoxBackContentMarginGetTablet ? "margin: " . $flipBoxBackContentMarginGetTablet . ";" : "") . "
    }
}

// Mobile media query
@media only screen and (max-width: 767px) {
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front {
        " . ($flipBoxItemFrontSize['Mobile'] ? "min-height: " . $flipBoxItemFrontSize['Mobile'] . $flipBoxItemFrontSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxItemFrontBorderTypeGetMobile ? "border-width: " . $flipBoxItemFrontBorderTypeGetMobile . ";" : "") . "
        " . ($flipBoxItemFrontBorderRadiusGetMobile ? "border-radius: " . $flipBoxItemFrontBorderRadiusGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back {
        " . ($flipBoxItemBackSize['Mobile'] ? "min-height: " . $flipBoxItemBackSize['Mobile'] . $flipBoxItemBackSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxItemBackBorderTypeGetMobile ? "border-width: " . $flipBoxItemBackBorderTypeGetMobile . ";" : "") . "
        " . ($flipBoxItemBackBorderRadiusGetMobile ? "border-radius: " . $flipBoxItemBackBorderRadiusGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon svg {
        " . ($flipBoxFrontIconSize['Mobile'] ? "width: " . $flipBoxFrontIconSize['Mobile'] . $flipBoxFrontIconSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontIconSize['Mobile'] ? "height: " . $flipBoxFrontIconSize['Mobile'] . $flipBoxFrontIconSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontIconBorderTypeGetMobile ? "border-width: " . $flipBoxFrontIconBorderTypeGetMobile . ";" : "") . "
        " . ($flipBoxFrontIconBorderRadiusGetMobile ? "border-radius: " . $flipBoxFrontIconBorderRadiusGetMobile . ";" : "") . "
        " . ($flipBoxFrontIconPaddingGetMobile ? "padding: " . $flipBoxFrontIconPaddingGetMobile . ";" : "") . "
        " . ($flipBoxFrontIconMarginGetMobile ? "margin: " . $flipBoxFrontIconMarginGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon svg {
        " . ($flipBoxBackIconSize['Mobile'] ? "width: " . $flipBoxBackIconSize['Mobile'] . $flipBoxBackIconSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackIconSize['Mobile'] ? "height: " . $flipBoxBackIconSize['Mobile'] . $flipBoxBackIconSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackIconBorderTypeGetMobile ? "border-width: " . $flipBoxBackIconBorderTypeGetMobile . ";" : "") . "
        " . ($flipBoxBackIconBorderRadiusGetMobile ? "border-radius: " . $flipBoxBackIconBorderRadiusGetMobile . ";" : "") . "
        " . ($flipBoxBackIconPaddingGetMobile ? "padding: " . $flipBoxBackIconPaddingGetMobile . ";" : "") . "
        " . ($flipBoxBackIconMarginGetMobile ? "margin: " . $flipBoxBackIconMarginGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-title {
        " . ($flipBoxFrontTitleFontSize['Mobile'] ? "font-size: " . $flipBoxFrontTitleFontSize['Mobile'] . $flipBoxFrontTitleFontSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontTitleLetterSpacing['Mobile'] ? "letter-spacing: " . $flipBoxFrontTitleLetterSpacing['Mobile'] . $flipBoxFrontTitleLetterSpacingUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontTitleLineHeight['Mobile'] ? "line-height: " . $flipBoxFrontTitleLineHeight['Mobile'] . $flipBoxFrontTitleLineHeightUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontTitleMarginGetMobile ? "margin: " . $flipBoxFrontTitleMarginGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content {
        " . ($flipBoxFrontContentFontSize['Mobile'] ? "font-size: " . $flipBoxFrontContentFontSize['Mobile'] . $flipBoxFrontContentFontSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontContentLetterSpacing['Mobile'] ? "letter-spacing: " . $flipBoxFrontContentLetterSpacing['Mobile'] . $flipBoxFrontContentLetterSpacingUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontContentLineHeight['Mobile'] ? "line-height: " . $flipBoxFrontContentLineHeight['Mobile'] . $flipBoxFrontContentLineHeightUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxFrontContentMarginGetMobile ? "margin: " . $flipBoxFrontContentMarginGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-front .fb-flip-box-back-button {
        " . ($flipBoxBackButtonFontSize['Mobile'] ? "font-size: " . $flipBoxBackButtonFontSize['Mobile'] . $flipBoxBackButtonFontSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackButtonLetterSpacing['Mobile'] ? "letter-spacing: " . $flipBoxBackButtonLetterSpacing['Mobile'] . $flipBoxBackButtonLetterSpacingUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackButtonLineHeight['Mobile'] ? "line-height: " . $flipBoxBackButtonLineHeight['Mobile'] . $flipBoxBackButtonLineHeightUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackButtonBorderTypeGetMobile ? "border-width: " . $flipBoxBackButtonBorderTypeGetMobile . ";" : "") . "
        " . ($flipBoxBackButtonBorderRadiusGetMobile ? "border-radius: " . $flipBoxBackButtonBorderRadiusGetMobile . ";" : "") . "
        " . ($flipBoxBackButtonPaddingGetMobile ? "padding: " . $flipBoxBackButtonPaddingGetMobile . ";" : "") . "
        " . ($flipBoxBackButtonMarginGetMobile ? "margin: " . $flipBoxBackButtonMarginGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-title {
        " . ($flipBoxBackTitleFontSize['Mobile'] ? "font-size: " . $flipBoxBackTitleFontSize['Mobile'] . $flipBoxBackTitleFontSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackTitleLetterSpacing['Mobile'] ? "letter-spacing: " . $flipBoxBackTitleLetterSpacing['Mobile'] . $flipBoxBackTitleLetterSpacingUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackTitleLineHeight['Mobile'] ? "line-height: " . $flipBoxBackTitleLineHeight['Mobile'] . $flipBoxBackTitleLineHeightUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackTitleMarginGetMobile ? "margin: " . $flipBoxBackTitleMarginGetMobile . ";" : "") . "
    }
    .fb-flip-box-wrapper." . $blockID . " .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content {
        " . ($flipBoxBackContentFontSize['Mobile'] ? "font-size: " . $flipBoxBackContentFontSize['Mobile'] . $flipBoxBackContentFontSizeUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackContentLetterSpacing['Mobile'] ? "letter-spacing: " . $flipBoxBackContentLetterSpacing['Mobile'] . $flipBoxBackContentLetterSpacingUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackContentLineHeight['Mobile'] ? "line-height: " . $flipBoxBackContentLineHeight['Mobile'] . $flipBoxBackContentLineHeightUnits['Mobile'] . ";" : "") . "
        " . ($flipBoxBackContentMarginGetMobile ? "margin: " . $flipBoxBackContentMarginGetMobile . ";" : "") . "
    }
}
";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID);
