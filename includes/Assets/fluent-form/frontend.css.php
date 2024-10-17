<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$attributes = $block['attrs'];
$blockID = isset($attributes['blockID']) ? sanitize_text_field($attributes['blockID']) : '';
$fluentFormGlobalZIndex = isset( $attributes['fluentFormGlobalZIndex'] ) ? intval( $attributes['fluentFormGlobalZIndex'] ) : '';

/** Start Label Style */
$fluentFormLabelColor 				= isset($attributes['fluentFormLabelColor']) ? sanitize_hex_color($attributes['fluentFormLabelColor']) : '';
$fluentFormLabelHoverColor 			= isset($attributes['fluentFormLabelHoverColor']) ? sanitize_hex_color($attributes['fluentFormLabelHoverColor']) : '';
$fluentFormLabelFontFamily 			= isset($attributes['fluentFormLabelFontFamily']) ? sanitize_text_field($attributes['fluentFormLabelFontFamily']) : 'inherit';
$fluentFormLabelFontSize 			= isset($attributes['fluentFormLabelFontSize']) ? intval($attributes['fluentFormLabelFontSize']) : '';
$fluentFormLabelFontSizeUnits 		= isset($attributes['fluentFormLabelFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormLabelFontSizeUnits']) : 'px';
$fluentFormLabelFontWeight 			= isset($attributes['fluentFormLabelFontWeight']) ? sanitize_text_field($attributes['fluentFormLabelFontWeight']) : '';
$fluentFormLabelFontStyle 			= isset($attributes['fluentFormLabelFontStyle']) ? sanitize_text_field($attributes['fluentFormLabelFontStyle']) : 'normal';
$fluentFormLabelTextTransform 		= isset($attributes['fluentFormLabelTextTransform']) ? sanitize_text_field($attributes['fluentFormLabelTextTransform']) : 'none';
$fluentFormLabelTextDecoration 		= isset($attributes['fluentFormLabelTextDecoration']) ? sanitize_text_field($attributes['fluentFormLabelTextDecoration']) : 'none';
$fluentFormLabelLetterSpacing 		= isset($attributes['fluentFormLabelLetterSpacing']) ? intval($attributes['fluentFormLabelLetterSpacing']) : '';
$fluentFormLabelLetterSpacingUnits 	= isset($attributes['fluentFormLabelLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormLabelLetterSpacingUnits']) : 'px';
$fluentFormLabelLineHeight 			= isset($attributes['fluentFormLabelLineHeight']) ? intval($attributes['fluentFormLabelLineHeight']) : '';
$fluentFormLabelLineHeightUnits 	= isset($attributes['fluentFormLabelLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormLabelLineHeightUnits']) : 'px';
/** End Label Style */	

/** Start Input Style */
$fluentFormInputBgColor 			= isset($attributes['fluentFormInputBgColor']) ? sanitize_hex_color($attributes['fluentFormInputBgColor']) : '';
$fluentFormInputColor 				= isset($attributes['fluentFormInputColor']) ? sanitize_hex_color($attributes['fluentFormInputColor']) : '';
$fluentFormInputFocusColor 			= isset($attributes['fluentFormInputFocusColor']) ? sanitize_hex_color($attributes['fluentFormInputFocusColor']) : '#1a7efb';
$fluentFormInputFontFamily 			= isset($attributes['fluentFormInputFontFamily']) ? sanitize_text_field($attributes['fluentFormInputFontFamily']) : 'inherit';
$fluentFormInputFontSize 			= isset($attributes['fluentFormInputFontSize']) ? intval($attributes['fluentFormInputFontSize']) : '';
$fluentFormInputFontSizeUnits 		= isset($attributes['fluentFormInputFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormInputFontSizeUnits']) : 'px';
$fluentFormInputFontWeight 			= isset($attributes['fluentFormInputFontWeight']) ? sanitize_text_field($attributes['fluentFormInputFontWeight']) : 'normal';
$fluentFormInputFontStyle 			= isset($attributes['fluentFormInputFontStyle']) ? sanitize_text_field($attributes['fluentFormInputFontStyle']) : 'normal';
$fluentFormInputTextTransform 		= isset($attributes['fluentFormInputTextTransform']) ? sanitize_text_field($attributes['fluentFormInputTextTransform']) : 'none';
$fluentFormInputTextDecoration 		= isset($attributes['fluentFormInputTextDecoration']) ? sanitize_text_field($attributes['fluentFormInputTextDecoration']) : 'none';
$fluentFormInputLetterSpacing 		= isset($attributes['fluentFormInputLetterSpacing']) ? intval($attributes['fluentFormInputLetterSpacing']) : '';
$fluentFormInputLetterSpacingUnits 	= isset($attributes['fluentFormInputLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormInputLetterSpacingUnits']) : 'px';
$fluentFormInputLineHeight 			= isset($attributes['fluentFormInputLineHeight']) ? intval($attributes['fluentFormInputLineHeight']) : '';
$fluentFormInputLineHeightUnits 	= isset($attributes['fluentFormInputLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormInputLineHeightUnits']) : 'px';
$fluentFormTextIndentSize 			= isset($attributes['fluentFormTextIndentSize']) ? $attributes['fluentFormTextIndentSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormTextIndentSizeUnits 		= isset($attributes['fluentFormTextIndentSizeUnits']) ? $attributes['fluentFormTextIndentSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormInputWidthSize 			= isset($attributes['fluentFormInputWidthSize']) ? $attributes['fluentFormInputWidthSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormInputWidthSizeUnits 		= isset($attributes['fluentFormInputWidthSizeUnits']) ? $attributes['fluentFormInputWidthSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormInputHeightSize 			= isset($attributes['fluentFormInputHeightSize']) ? $attributes['fluentFormInputHeightSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormInputHeightSizeUnits 	= isset($attributes['fluentFormInputHeightSizeUnits']) ? $attributes['fluentFormInputHeightSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormTextareaWidthSize 		= isset($attributes['fluentFormTextareaWidthSize']) ? $attributes['fluentFormTextareaWidthSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormTextareaWidthSizeUnits 	= isset($attributes['fluentFormTextareaWidthSizeUnits']) ? $attributes['fluentFormTextareaWidthSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormTextareaHeightSize 		= isset($attributes['fluentFormTextareaHeightSize']) ? $attributes['fluentFormTextareaHeightSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormTextareaHeightSizeUnits 	= isset($attributes['fluentFormTextareaHeightSizeUnits']) ? $attributes['fluentFormTextareaHeightSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSpacingSize 				= isset($attributes['fluentFormSpacingSize']) ? $attributes['fluentFormSpacingSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormSpacingUnits 			= isset($attributes['fluentFormSpacingUnits']) ? $attributes['fluentFormSpacingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
/** End Input Spacing */

/** Start Input Padding */
$fluentFormPaddingUnits 			= isset($attributes['fluentFormPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormPaddingDesktop 			= isset($attributes['fluentFormPaddingDesktop']) ? array_map('intval', $attributes['fluentFormPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormPaddingTablet 			= isset($attributes['fluentFormPaddingTablet']) ? array_map('intval', $attributes['fluentFormPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormPaddingMobile 			= isset($attributes['fluentFormPaddingMobile']) ? array_map('intval', $attributes['fluentFormPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormDesktopPadding 			= "{$fluentFormPaddingDesktop['top']}{$fluentFormPaddingUnits['Desktop']} {$fluentFormPaddingDesktop['right']}{$fluentFormPaddingUnits['Desktop']} {$fluentFormPaddingDesktop['bottom']}{$fluentFormPaddingUnits['Desktop']} {$fluentFormPaddingDesktop['left']}{$fluentFormPaddingUnits['Desktop']}";
$fluentFormTabletPadding 			= "{$fluentFormPaddingTablet['top']}{$fluentFormPaddingUnits['Tablet']} {$fluentFormPaddingTablet['right']}{$fluentFormPaddingUnits['Tablet']} {$fluentFormPaddingTablet['bottom']}{$fluentFormPaddingUnits['Tablet']} {$fluentFormPaddingTablet['left']}{$fluentFormPaddingUnits['Tablet']}";
$fluentFormMobilePadding 			= "{$fluentFormPaddingMobile['top']}{$fluentFormPaddingUnits['Mobile']} {$fluentFormPaddingMobile['right']}{$fluentFormPaddingUnits['Mobile']} {$fluentFormPaddingMobile['bottom']}{$fluentFormPaddingUnits['Mobile']} {$fluentFormPaddingMobile['left']}{$fluentFormPaddingUnits['Mobile']}";
/** End Input Padding */

/** Start Input Border */
$fluentFormBorder 					= isset($attributes['fluentFormBorder']) ? sanitize_text_field($attributes['fluentFormBorder']) : 'solid';
$fluentFormBorderColor 				= isset($attributes['fluentFormBorderColor']) ? sanitize_hex_color($attributes['fluentFormBorderColor']) : '#dadbdd';
$fluentFormBorderHoverColor 		= isset($attributes['fluentFormBorderHoverColor']) ? sanitize_hex_color($attributes['fluentFormBorderHoverColor']) : '';

$fluentFormBorderUnits 				= isset($attributes['fluentFormBorderUnits']) ? sanitize_text_field($attributes['fluentFormBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px']; 
$fluentFormBorderDesktop 			= isset($attributes['fluentFormBorderDesktop']) ? array_map('intval', $attributes['fluentFormBorderDesktop']) : ['top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1']; 
$fluentFormBorderTablet 			= isset($attributes['fluentFormBorderTablet']) ? array_map('intval', $attributes['fluentFormBorderTablet']) : ['top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1']; 
$fluentFormBorderMobile 			= isset($attributes['fluentFormBorderMobile']) ? array_map('intval', $attributes['fluentFormBorderMobile']) : ['top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1']; 

$fluentFormBorderDesktopString 		= "{$fluentFormBorderDesktop['top']}{$fluentFormBorderUnits['Desktop']} {$fluentFormBorderDesktop['right']}{$fluentFormBorderUnits['Desktop']} {$fluentFormBorderDesktop['bottom']}{$fluentFormBorderUnits['Desktop']} {$fluentFormBorderDesktop['left']}{$fluentFormBorderUnits['Desktop']}";
$fluentFormBorderTabletString 		= "{$fluentFormBorderTablet['top']}{$fluentFormBorderUnits['Tablet']} {$fluentFormBorderTablet['right']}{$fluentFormBorderUnits['Tablet']} {$fluentFormBorderTablet['bottom']}{$fluentFormBorderUnits['Tablet']} {$fluentFormBorderTablet['left']}{$fluentFormBorderUnits['Tablet']}";
$fluentFormBorderMobileString 		= "{$fluentFormBorderMobile['top']}{$fluentFormBorderUnits['Mobile']} {$fluentFormBorderMobile['right']}{$fluentFormBorderUnits['Mobile']} {$fluentFormBorderMobile['bottom']}{$fluentFormBorderUnits['Mobile']} {$fluentFormBorderMobile['left']}{$fluentFormBorderUnits['Mobile']}";
/** End Input Border */

/** Start Input Border Radius */
$fluentFormBorderRadiusUnits 		= isset($attributes['fluentFormBorderRadiusUnits']) ? sanitize_text_field($attributes['fluentFormBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormBorderRadiusDesktop 		= isset($attributes['fluentFormBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormBorderRadiusTablet 		= isset($attributes['fluentFormBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormBorderRadiusMobile 		= isset($attributes['fluentFormBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormBorderRadiusDesktopString= "{$fluentFormBorderRadiusDesktop['top']}{$fluentFormBorderRadiusUnits['Desktop']} {$fluentFormBorderRadiusDesktop['right']}{$fluentFormBorderRadiusUnits['Desktop']} {$fluentFormBorderRadiusDesktop['bottom']}{$fluentFormBorderRadiusUnits['Desktop']} {$fluentFormBorderRadiusDesktop['left']}{$fluentFormBorderRadiusUnits['Desktop']}";
$fluentFormBorderRadiusTabletString = "{$fluentFormBorderRadiusTablet['top']}{$fluentFormBorderRadiusUnits['Tablet']} {$fluentFormBorderRadiusTablet['right']}{$fluentFormBorderRadiusUnits['Tablet']} {$fluentFormBorderRadiusTablet['bottom']}{$fluentFormBorderRadiusUnits['Tablet']} {$fluentFormBorderRadiusTablet['left']}{$fluentFormBorderRadiusUnits['Tablet']}";
$fluentFormBorderRadiusMobileString = "{$fluentFormBorderRadiusMobile['top']}{$fluentFormBorderRadiusUnits['Mobile']} {$fluentFormBorderRadiusMobile['right']}{$fluentFormBorderRadiusUnits['Mobile']} {$fluentFormBorderRadiusMobile['bottom']}{$fluentFormBorderRadiusUnits['Mobile']} {$fluentFormBorderRadiusMobile['left']}{$fluentFormBorderRadiusUnits['Mobile']}";
/** End Input Border Radius */	

/** Start Input Placeholder */
$fluentFormPlaceholderColor 		= isset($attributes['fluentFormPlaceholderColor']) ? sanitize_hex_color($attributes['fluentFormPlaceholderColor']) : '';
/** End Input Placeholder */

/** Start Radio */
$fluentFormRadioFontSize 					= isset($attributes['fluentFormRadioFontSize']) ? array_map('intval', $attributes['fluentFormRadioFontSize']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormRadioFontSizeUnits 				= isset($attributes['fluentFormRadioFontSizeUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioFontSizeUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormRadioColor 						= isset($attributes['fluentFormRadioColor']) ? sanitize_hex_color($attributes['fluentFormRadioColor']) : '';
$fluentFormRadioCheckedColor 				= isset($attributes['fluentFormRadioCheckedColor']) ? sanitize_hex_color($attributes['fluentFormRadioCheckedColor']) : '';
$fluentFormRadioBorderWidth 				= isset($attributes['fluentFormRadioBorderWidth']) ? array_map('intval', $attributes['fluentFormRadioBorderWidth']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormRadioBorderWidthUnits 			= isset($attributes['fluentFormRadioBorderWidthUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioBorderWidthUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormRadioBorderColor 				= isset($attributes['fluentFormRadioBorderColor']) ? sanitize_hex_color($attributes['fluentFormRadioBorderColor']) : '';
$fluentFormRadioBorderRadiusUnits 			= isset($attributes['fluentFormRadioBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormRadioBorderRadiusDesktop 		= isset($attributes['fluentFormRadioBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormRadioBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormRadioBorderRadiusTablet 			= isset($attributes['fluentFormRadioBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormRadioBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormRadioBorderRadiusMobile 			= isset($attributes['fluentFormRadioBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormRadioBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormRadioBorderRadiusDesktopString 	= "{$fluentFormRadioBorderRadiusDesktop['top']}{$fluentFormRadioBorderRadiusUnits['Desktop']} {$fluentFormRadioBorderRadiusDesktop['right']}{$fluentFormRadioBorderRadiusUnits['Desktop']} {$fluentFormRadioBorderRadiusDesktop['bottom']}{$fluentFormRadioBorderRadiusUnits['Desktop']} {$fluentFormRadioBorderRadiusDesktop['left']}{$fluentFormRadioBorderRadiusUnits['Desktop']}";
$fluentFormRadioBorderRadiusTabletString 	= "{$fluentFormRadioBorderRadiusTablet['top']}{$fluentFormRadioBorderRadiusUnits['Tablet']} {$fluentFormRadioBorderRadiusTablet['right']}{$fluentFormRadioBorderRadiusUnits['Tablet']} {$fluentFormRadioBorderRadiusTablet['bottom']}{$fluentFormRadioBorderRadiusUnits['Tablet']} {$fluentFormRadioBorderRadiusTablet['left']}{$fluentFormRadioBorderRadiusUnits['Tablet']}";
$fluentFormRadioBorderRadiusMobileString 	= "{$fluentFormRadioBorderRadiusMobile['top']}{$fluentFormRadioBorderRadiusUnits['Mobile']} {$fluentFormRadioBorderRadiusMobile['right']}{$fluentFormRadioBorderRadiusUnits['Mobile']} {$fluentFormRadioBorderRadiusMobile['bottom']}{$fluentFormRadioBorderRadiusUnits['Mobile']} {$fluentFormRadioBorderRadiusMobile['left']}{$fluentFormRadioBorderRadiusUnits['Mobile']}";
/** End Radio */

/** Start Checkbox */	
$fluentFormCheckBoxBorderRadiusUnits 			= isset($attributes['fluentFormCheckBoxBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormCheckBoxBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormCheckBoxBorderRadiusDesktop 			= isset($attributes['fluentFormCheckBoxBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormCheckBoxBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormCheckBoxBorderRadiusTablet 			= isset($attributes['fluentFormCheckBoxBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormCheckBoxBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormCheckBoxBorderRadiusMobile 			= isset($attributes['fluentFormCheckBoxBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormCheckBoxBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormCheckBoxBorderRadiusDesktopString 	= "{$fluentFormCheckBoxBorderRadiusDesktop['top']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']} {$fluentFormCheckBoxBorderRadiusDesktop['right']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']} {$fluentFormCheckBoxBorderRadiusDesktop['bottom']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']} {$fluentFormCheckBoxBorderRadiusDesktop['left']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']}";
$fluentFormCheckBoxBorderRadiusTabletString 	= "{$fluentFormCheckBoxBorderRadiusTablet['top']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']} {$fluentFormCheckBoxBorderRadiusTablet['right']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']} {$fluentFormCheckBoxBorderRadiusTablet['bottom']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']} {$fluentFormCheckBoxBorderRadiusTablet['left']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']}";
$fluentFormCheckBoxBorderRadiusMobileString 	= "{$fluentFormCheckBoxBorderRadiusMobile['top']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']} {$fluentFormCheckBoxBorderRadiusMobile['right']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']} {$fluentFormCheckBoxBorderRadiusMobile['bottom']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']} {$fluentFormCheckBoxBorderRadiusMobile['left']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']}";
/** End Checkbox */

/** Start Radio & Checkbox Item Spacing */	
$fluentFormRadioCheckBoxItemSpacing 			= isset($attributes['fluentFormRadioCheckBoxItemSpacing']) ? array_map('intval', $attributes['fluentFormRadioCheckBoxItemSpacing']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormRadioCheckBoxItemSpacingUnits 		= isset($attributes['fluentFormRadioCheckBoxItemSpacingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioCheckBoxItemSpacingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
/** End Radio & Checkbox Item Spacing */

/** Start Section Break */
$fluentFormSectionBreakAlignment 				= isset($attributes['fluentFormSectionBreakAlignment']) ? sanitize_text_field($attributes['fluentFormSectionBreakAlignment']) : 'left';
$fluentFormSectionBreakTitleColorSwitcher 		= isset($attributes['fluentFormSectionBreakTitleColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleColorSwitcher']) : 'normal';
$fluentFormSectionBreakTitleColor 				= isset($attributes['fluentFormSectionBreakTitleColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakTitleColor']) : '';
$fluentFormSectionBreakTitleHoverColor 			= isset($attributes['fluentFormSectionBreakTitleHoverColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakTitleHoverColor']) : '';
$fluentFormSectionBreakTitleFontFamily 			= isset($attributes['fluentFormSectionBreakTitleFontFamily']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontFamily']) : 'inherit';
$fluentFormSectionBreakTitleFontSize 			= isset($attributes['fluentFormSectionBreakTitleFontSize']) ? intval($attributes['fluentFormSectionBreakTitleFontSize']) : "";
$fluentFormSectionBreakTitleFontSizeUnits 		= isset($attributes['fluentFormSectionBreakTitleFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontSizeUnits']) : 'px';
$fluentFormSectionBreakTitleFontWeight 			= isset($attributes['fluentFormSectionBreakTitleFontWeight']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontWeight']) : '';
$fluentFormSectionBreakTitleFontStyle 			= isset($attributes['fluentFormSectionBreakTitleFontStyle']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontStyle']) : 'normal';
$fluentFormSectionBreakTitleTextTransform 		= isset($attributes['fluentFormSectionBreakTitleTextTransform']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleTextTransform']) : 'none';
$fluentFormSectionBreakTitleTextDecoration 		= isset($attributes['fluentFormSectionBreakTitleTextDecoration']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleTextDecoration']) : 'none';
$fluentFormSectionBreakTitleLetterSpacing 		= isset($attributes['fluentFormSectionBreakTitleLetterSpacing']) ? intval($attributes['fluentFormSectionBreakTitleLetterSpacing']) : "";
$fluentFormSectionBreakTitleLetterSpacingUnits 	= isset($attributes['fluentFormSectionBreakTitleLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleLetterSpacingUnits']) : 'px';
$fluentFormSectionBreakTitleLineHeight 			= isset($attributes['fluentFormSectionBreakTitleLineHeight']) ? intval($attributes['fluentFormSectionBreakTitleLineHeight']) : "";
$fluentFormSectionBreakTitleLineHeightUnits 	= isset($attributes['fluentFormSectionBreakTitleLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleLineHeightUnits']) : 'px';

$fluentFormSectionBreakTitlePaddingUnits 		= isset($attributes['fluentFormSectionBreakTitlePaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakTitlePaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakTitlePaddingDesktop 		= isset($attributes['fluentFormSectionBreakTitlePaddingDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakTitlePaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitlePaddingTablet 		= isset($attributes['fluentFormSectionBreakTitlePaddingTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakTitlePaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitlePaddingMobile 		= isset($attributes['fluentFormSectionBreakTitlePaddingMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakTitlePaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSectionBreakTitlePaddingDesktopString= "{$fluentFormSectionBreakTitlePaddingDesktop['top']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']} {$fluentFormSectionBreakTitlePaddingDesktop['right']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']} {$fluentFormSectionBreakTitlePaddingDesktop['bottom']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']} {$fluentFormSectionBreakTitlePaddingDesktop['left']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']}";
$fluentFormSectionBreakTitlePaddingTabletString = "{$fluentFormSectionBreakTitlePaddingTablet['top']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']} {$fluentFormSectionBreakTitlePaddingTablet['right']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']} {$fluentFormSectionBreakTitlePaddingTablet['bottom']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']} {$fluentFormSectionBreakTitlePaddingTablet['left']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']}";
$fluentFormSectionBreakTitlePaddingMobileString = "{$fluentFormSectionBreakTitlePaddingMobile['top']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']} {$fluentFormSectionBreakTitlePaddingMobile['right']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']} {$fluentFormSectionBreakTitlePaddingMobile['bottom']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']} {$fluentFormSectionBreakTitlePaddingMobile['left']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']}";

$fluentFormSectionBreakTitleMarginUnits 		= isset($attributes['fluentFormSectionBreakTitleMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakTitleMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakTitleMarginDesktop 		= isset($attributes['fluentFormSectionBreakTitleMarginDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakTitleMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitleMarginTablet 		= isset($attributes['fluentFormSectionBreakTitleMarginTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakTitleMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitleMarginMobile 		= isset($attributes['fluentFormSectionBreakTitleMarginMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakTitleMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSectionBreakTitleMarginDesktopString = "{$fluentFormSectionBreakTitleMarginDesktop['top']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']} {$fluentFormSectionBreakTitleMarginDesktop['right']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']} {$fluentFormSectionBreakTitleMarginDesktop['bottom']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']} {$fluentFormSectionBreakTitleMarginDesktop['left']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']}";
$fluentFormSectionBreakTitleMarginTabletString 	= "{$fluentFormSectionBreakTitleMarginTablet['top']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']} {$fluentFormSectionBreakTitleMarginTablet['right']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']} {$fluentFormSectionBreakTitleMarginTablet['bottom']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']} {$fluentFormSectionBreakTitleMarginTablet['left']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']}";
$fluentFormSectionBreakTitleMarginMobileString 	= "{$fluentFormSectionBreakTitleMarginMobile['top']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']} {$fluentFormSectionBreakTitleMarginMobile['right']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']} {$fluentFormSectionBreakTitleMarginMobile['bottom']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']} {$fluentFormSectionBreakTitleMarginMobile['left']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']}";

$fluentFormSectionBreakDescColorSwitcher 		= isset($attributes['fluentFormSectionBreakDescColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescColorSwitcher']) : 'normal';
$fluentFormSectionBreakDescColor 				= isset($attributes['fluentFormSectionBreakDescColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakDescColor']) : '';
$fluentFormSectionBreakDescHoverColor 			= isset($attributes['fluentFormSectionBreakDescHoverColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakDescHoverColor']) : '';
$fluentFormSectionBreakDescFontFamily 			= isset($attributes['fluentFormSectionBreakDescFontFamily']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontFamily']) : 'inherit';
$fluentFormSectionBreakDescFontSize 			= isset($attributes['fluentFormSectionBreakDescFontSize']) ? intval($attributes['fluentFormSectionBreakDescFontSize']) : '';
$fluentFormSectionBreakDescFontSizeUnits 		= isset($attributes['fluentFormSectionBreakDescFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontSizeUnits']) : 'px';
$fluentFormSectionBreakDescFontWeight 			= isset($attributes['fluentFormSectionBreakDescFontWeight']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontWeight']) : '';
$fluentFormSectionBreakDescFontStyle 			= isset($attributes['fluentFormSectionBreakDescFontStyle']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontStyle']) : 'normal';
$fluentFormSectionBreakDescTextTransform 		= isset($attributes['fluentFormSectionBreakDescTextTransform']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescTextTransform']) : 'none';
$fluentFormSectionBreakDescTextDecoration 		= isset($attributes['fluentFormSectionBreakDescTextDecoration']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescTextDecoration']) : 'none';
$fluentFormSectionBreakDescLetterSpacing 		= isset($attributes['fluentFormSectionBreakDescLetterSpacing']) ? intval($attributes['fluentFormSectionBreakDescLetterSpacing']) : '';
$fluentFormSectionBreakDescLetterSpacingUnits 	= isset($attributes['fluentFormSectionBreakDescLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescLetterSpacingUnits']) : 'px';
$fluentFormSectionBreakDescLineHeight 			= isset($attributes['fluentFormSectionBreakDescLineHeight']) ? intval($attributes['fluentFormSectionBreakDescLineHeight']) : '';
$fluentFormSectionBreakDescLineHeightUnits 		= isset($attributes['fluentFormSectionBreakDescLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescLineHeightUnits']) : 'px';

$fluentFormSectionBreakDescPaddingUnits 		= isset($attributes['fluentFormSectionBreakDescPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakDescPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakDescPaddingDesktop 		= isset($attributes['fluentFormSectionBreakDescPaddingDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakDescPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescPaddingTablet 		= isset($attributes['fluentFormSectionBreakDescPaddingTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakDescPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescPaddingMobile 		= isset($attributes['fluentFormSectionBreakDescPaddingMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakDescPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSectionBreakDescPaddingDesktopString = "{$fluentFormSectionBreakDescPaddingDesktop['top']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']} {$fluentFormSectionBreakDescPaddingDesktop['right']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']} {$fluentFormSectionBreakDescPaddingDesktop['bottom']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']} {$fluentFormSectionBreakDescPaddingDesktop['left']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']}";
$fluentFormSectionBreakDescPaddingTabletString 	= "{$fluentFormSectionBreakDescPaddingTablet['top']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']} {$fluentFormSectionBreakDescPaddingTablet['right']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']} {$fluentFormSectionBreakDescPaddingTablet['bottom']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']} {$fluentFormSectionBreakDescPaddingTablet['left']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']}";
$fluentFormSectionBreakDescPaddingMobileString 	= "{$fluentFormSectionBreakDescPaddingMobile['top']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']} {$fluentFormSectionBreakDescPaddingMobile['right']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']} {$fluentFormSectionBreakDescPaddingMobile['bottom']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']} {$fluentFormSectionBreakDescPaddingMobile['left']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']}";

$fluentFormSectionBreakDescMarginUnits 			= isset($attributes['fluentFormSectionBreakDescMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakDescMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakDescMarginDesktop 		= isset($attributes['fluentFormSectionBreakDescMarginDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakDescMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescMarginTablet 		= isset($attributes['fluentFormSectionBreakDescMarginTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakDescMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescMarginMobile 		= isset($attributes['fluentFormSectionBreakDescMarginMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakDescMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSectionBreakDescMarginDesktopString 	= "{$fluentFormSectionBreakDescMarginDesktop['top']}{$fluentFormSectionBreakDescMarginUnits['Desktop']} {$fluentFormSectionBreakDescMarginDesktop['right']}{$fluentFormSectionBreakDescMarginUnits['Desktop']} {$fluentFormSectionBreakDescMarginDesktop['bottom']}{$fluentFormSectionBreakDescMarginUnits['Desktop']} {$fluentFormSectionBreakDescMarginDesktop['left']}{$fluentFormSectionBreakDescMarginUnits['Desktop']}";
$fluentFormSectionBreakDescMarginTabletString 	= "{$fluentFormSectionBreakDescMarginTablet['top']}{$fluentFormSectionBreakDescMarginUnits['Tablet']} {$fluentFormSectionBreakDescMarginTablet['right']}{$fluentFormSectionBreakDescMarginUnits['Tablet']} {$fluentFormSectionBreakDescMarginTablet['bottom']}{$fluentFormSectionBreakDescMarginUnits['Tablet']} {$fluentFormSectionBreakDescMarginTablet['left']}{$fluentFormSectionBreakDescMarginUnits['Tablet']}";
$fluentFormSectionBreakDescMarginMobileString 	= "{$fluentFormSectionBreakDescMarginMobile['top']}{$fluentFormSectionBreakDescMarginUnits['Mobile']} {$fluentFormSectionBreakDescMarginMobile['right']}{$fluentFormSectionBreakDescMarginUnits['Mobile']} {$fluentFormSectionBreakDescMarginMobile['bottom']}{$fluentFormSectionBreakDescMarginUnits['Mobile']} {$fluentFormSectionBreakDescMarginMobile['left']}{$fluentFormSectionBreakDescMarginUnits['Mobile']}";
/** End Section Break */

/** Start Html */
$fluentFormHtmlAlignment 						= isset($attributes['fluentFormHtmlAlignment']) ? sanitize_text_field($attributes['fluentFormHtmlAlignment']) : 'left';
$fluentFormHtmlColorSwitcher 					= isset($attributes['fluentFormHtmlColorSwitcher']) ? sanitize_text_field($attributes['fluentFormHtmlColorSwitcher']) : 'normal';
$fluentFormHtmlColor 							= isset($attributes['fluentFormHtmlColor']) ? sanitize_hex_color($attributes['fluentFormHtmlColor']) : '';
$fluentFormHtmlHoverColor 						= isset($attributes['fluentFormHtmlHoverColor']) ? sanitize_hex_color($attributes['fluentFormHtmlHoverColor']) : '';
$fluentFormHtmlFontFamily 						= isset($attributes['fluentFormHtmlFontFamily']) ? sanitize_text_field($attributes['fluentFormHtmlFontFamily']) : 'inherit';
$fluentFormHtmlFontSize 						= isset($attributes['fluentFormHtmlFontSize']) ? intval($attributes['fluentFormHtmlFontSize']) : '';
$fluentFormHtmlFontSizeUnits 					= isset($attributes['fluentFormHtmlFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormHtmlFontSizeUnits']) : 'px';
$fluentFormHtmlFontWeight 						= isset($attributes['fluentFormHtmlFontWeight']) ? sanitize_text_field($attributes['fluentFormHtmlFontWeight']) : '';
$fluentFormHtmlFontStyle 						= isset($attributes['fluentFormHtmlFontStyle']) ? sanitize_text_field($attributes['fluentFormHtmlFontStyle']) : 'normal';
$fluentFormHtmlTextTransform 					= isset($attributes['fluentFormHtmlTextTransform']) ? sanitize_text_field($attributes['fluentFormHtmlTextTransform']) : 'none';
$fluentFormHtmlTextDecoration 					= isset($attributes['fluentFormHtmlTextDecoration']) ? sanitize_text_field($attributes['fluentFormHtmlTextDecoration']) : 'none';
$fluentFormHtmlLetterSpacing 					= isset($attributes['fluentFormHtmlLetterSpacing']) ? intval($attributes['fluentFormHtmlLetterSpacing']) : '';
$fluentFormHtmlLetterSpacingUnits 				= isset($attributes['fluentFormHtmlLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormHtmlLetterSpacingUnits']) : 'px';
$fluentFormHtmlLineHeight 						= isset($attributes['fluentFormHtmlLineHeight']) ? intval($attributes['fluentFormHtmlLineHeight']) : '';
$fluentFormHtmlLineHeightUnits 					= isset($attributes['fluentFormHtmlLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormHtmlLineHeightUnits']) : 'px';

$fluentFormHtmlPaddingUnits 					= isset($attributes['fluentFormHtmlPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormHtmlPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormHtmlPaddingDesktop 					= isset($attributes['fluentFormHtmlPaddingDesktop']) ? array_map('intval', $attributes['fluentFormHtmlPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlPaddingTablet 					= isset($attributes['fluentFormHtmlPaddingTablet']) ? array_map('intval', $attributes['fluentFormHtmlPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlPaddingMobile 					= isset($attributes['fluentFormHtmlPaddingMobile']) ? array_map('intval', $attributes['fluentFormHtmlPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormHtmlPaddingDesktopString 			= "{$fluentFormHtmlPaddingDesktop['top']}{$fluentFormHtmlPaddingUnits['Desktop']} {$fluentFormHtmlPaddingDesktop['right']}{$fluentFormHtmlPaddingUnits['Desktop']} {$fluentFormHtmlPaddingDesktop['bottom']}{$fluentFormHtmlPaddingUnits['Desktop']} {$fluentFormHtmlPaddingDesktop['left']}{$fluentFormHtmlPaddingUnits['Desktop']}";
$fluentFormHtmlPaddingTabletString 				= "{$fluentFormHtmlPaddingTablet['top']}{$fluentFormHtmlPaddingUnits['Tablet']} {$fluentFormHtmlPaddingTablet['right']}{$fluentFormHtmlPaddingUnits['Tablet']} {$fluentFormHtmlPaddingTablet['bottom']}{$fluentFormHtmlPaddingUnits['Tablet']} {$fluentFormHtmlPaddingTablet['left']}{$fluentFormHtmlPaddingUnits['Tablet']}";
$fluentFormHtmlPaddingMobileString 				= "{$fluentFormHtmlPaddingMobile['top']}{$fluentFormHtmlPaddingUnits['Mobile']} {$fluentFormHtmlPaddingMobile['right']}{$fluentFormHtmlPaddingUnits['Mobile']} {$fluentFormHtmlPaddingMobile['bottom']}{$fluentFormHtmlPaddingUnits['Mobile']} {$fluentFormHtmlPaddingMobile['left']}{$fluentFormHtmlPaddingUnits['Mobile']}";

$fluentFormHtmlMarginUnits 						= isset($attributes['fluentFormHtmlMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormHtmlMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormHtmlMarginDesktop 					= isset($attributes['fluentFormHtmlMarginDesktop']) ? array_map('intval', $attributes['fluentFormHtmlMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlMarginTablet 					= isset($attributes['fluentFormHtmlMarginTablet']) ? array_map('intval', $attributes['fluentFormHtmlMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlMarginMobile 					= isset($attributes['fluentFormHtmlMarginMobile']) ? array_map('intval', $attributes['fluentFormHtmlMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormHtmlMarginDesktopString 				= "{$fluentFormHtmlMarginDesktop['top']}{$fluentFormHtmlMarginUnits['Desktop']} {$fluentFormHtmlMarginDesktop['right']}{$fluentFormHtmlMarginUnits['Desktop']} {$fluentFormHtmlMarginDesktop['bottom']}{$fluentFormHtmlMarginUnits['Desktop']} {$fluentFormHtmlMarginDesktop['left']}{$fluentFormHtmlMarginUnits['Desktop']}";
$fluentFormHtmlMarginTabletString 				= "{$fluentFormHtmlMarginTablet['top']}{$fluentFormHtmlMarginUnits['Tablet']} {$fluentFormHtmlMarginTablet['right']}{$fluentFormHtmlMarginUnits['Tablet']} {$fluentFormHtmlMarginTablet['bottom']}{$fluentFormHtmlMarginUnits['Tablet']} {$fluentFormHtmlMarginTablet['left']}{$fluentFormHtmlMarginUnits['Tablet']}";
$fluentFormHtmlMarginMobileString 				= "{$fluentFormHtmlMarginMobile['top']}{$fluentFormHtmlMarginUnits['Mobile']} {$fluentFormHtmlMarginMobile['right']}{$fluentFormHtmlMarginUnits['Mobile']} {$fluentFormHtmlMarginMobile['bottom']}{$fluentFormHtmlMarginUnits['Mobile']} {$fluentFormHtmlMarginMobile['left']}{$fluentFormHtmlMarginUnits['Mobile']}";
/** End Html */

/** Start Submit */
$fluentFormSubmitAlignment 						= isset($attributes['fluentFormSubmitAlignment']) ? sanitize_text_field($attributes['fluentFormSubmitAlignment']) : 'left';
$fluentFormSubmitHeight 						= isset($attributes['fluentFormSubmitHeight']) ? array_map('intval', $attributes['fluentFormSubmitHeight']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormSubmitHeightUnits 					= isset($attributes['fluentFormSubmitHeightUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitHeightUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitWidthSelect 					= isset($attributes['fluentFormSubmitWidthSelect']) ? sanitize_text_field($attributes['fluentFormSubmitWidthSelect']) : 'custom';
$fluentFormSubmitWidth 							= isset($attributes['fluentFormSubmitWidth']) ? array_map('intval', $attributes['fluentFormSubmitWidth']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormSubmitWidthUnits 					= isset($attributes['fluentFormSubmitWidthUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitWidthUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitColorSwitcher 					= isset($attributes['fluentFormSubmitColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSubmitColorSwitcher']) : 'normal';
$fluentFormSubmitColor 							= isset($attributes['fluentFormSubmitColor']) ? sanitize_hex_color($attributes['fluentFormSubmitColor']) : '';
$fluentFormSubmitHoverColor 					= isset($attributes['fluentFormSubmitHoverColor']) ? sanitize_hex_color($attributes['fluentFormSubmitHoverColor']) : '';
$fluentFormSubmitBgColorSwitcher 				= isset($attributes['fluentFormSubmitBgColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSubmitBgColorSwitcher']) : 'normal';
$fluentFormSubmitBgColor 						= isset($attributes['fluentFormSubmitBgColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBgColor']) : '';
$fluentFormSubmitBgHoverColor 					= isset($attributes['fluentFormSubmitBgHoverColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBgHoverColor']) : '';
$fluentFormSubmitFontFamily 					= isset($attributes['fluentFormSubmitFontFamily']) ? sanitize_text_field($attributes['fluentFormSubmitFontFamily']) : 'inherit';
$fluentFormSubmitFontSize 						= isset($attributes['fluentFormSubmitFontSize']) ? intval($attributes['fluentFormSubmitFontSize']) : '';
$fluentFormSubmitFontSizeUnits 					= isset($attributes['fluentFormSubmitFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSubmitFontSizeUnits']) : 'px';
$fluentFormSubmitFontWeight 					= isset($attributes['fluentFormSubmitFontWeight']) ? sanitize_text_field($attributes['fluentFormSubmitFontWeight']) : '';
$fluentFormSubmitFontStyle 						= isset($attributes['fluentFormSubmitFontStyle']) ? sanitize_text_field($attributes['fluentFormSubmitFontStyle']) : 'normal';
$fluentFormSubmitTextTransform 					= isset($attributes['fluentFormSubmitTextTransform']) ? sanitize_text_field($attributes['fluentFormSubmitTextTransform']) : 'none';
$fluentFormSubmitTextDecoration 				= isset($attributes['fluentFormSubmitTextDecoration']) ? sanitize_text_field($attributes['fluentFormSubmitTextDecoration']) : 'none';
$fluentFormSubmitLetterSpacing 					= isset($attributes['fluentFormSubmitLetterSpacing']) ? intval($attributes['fluentFormSubmitLetterSpacing']) : '';
$fluentFormSubmitLetterSpacingUnits 			= isset($attributes['fluentFormSubmitLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSubmitLetterSpacingUnits']) : 'px';
$fluentFormSubmitLineHeight 					= isset($attributes['fluentFormSubmitLineHeight']) ? intval($attributes['fluentFormSubmitLineHeight']) : '';
$fluentFormSubmitLineHeightUnits 				= isset($attributes['fluentFormSubmitLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSubmitLineHeightUnits']) : 'px';

$fluentFormSubmitPaddingUnits 					= isset($attributes['fluentFormSubmitPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitPaddingDesktop 				= isset($attributes['fluentFormSubmitPaddingDesktop']) ? array_map('intval', $attributes['fluentFormSubmitPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitPaddingTablet 					= isset($attributes['fluentFormSubmitPaddingTablet']) ? array_map('intval', $attributes['fluentFormSubmitPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitPaddingMobile 					= isset($attributes['fluentFormSubmitPaddingMobile']) ? array_map('intval', $attributes['fluentFormSubmitPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSubmitPaddingDesktopString 			= "{$fluentFormSubmitPaddingDesktop['top']}{$fluentFormSubmitPaddingUnits['Desktop']} {$fluentFormSubmitPaddingDesktop['right']}{$fluentFormSubmitPaddingUnits['Desktop']} {$fluentFormSubmitPaddingDesktop['bottom']}{$fluentFormSubmitPaddingUnits['Desktop']} {$fluentFormSubmitPaddingDesktop['left']}{$fluentFormSubmitPaddingUnits['Desktop']}";
$fluentFormSubmitPaddingTabletString 			= "{$fluentFormSubmitPaddingTablet['top']}{$fluentFormSubmitPaddingUnits['Tablet']} {$fluentFormSubmitPaddingTablet['right']}{$fluentFormSubmitPaddingUnits['Tablet']} {$fluentFormSubmitPaddingTablet['bottom']}{$fluentFormSubmitPaddingUnits['Tablet']} {$fluentFormSubmitPaddingTablet['left']}{$fluentFormSubmitPaddingUnits['Tablet']}";
$fluentFormSubmitPaddingMobileString 			= "{$fluentFormSubmitPaddingMobile['top']}{$fluentFormSubmitPaddingUnits['Mobile']} {$fluentFormSubmitPaddingMobile['right']}{$fluentFormSubmitPaddingUnits['Mobile']} {$fluentFormSubmitPaddingMobile['bottom']}{$fluentFormSubmitPaddingUnits['Mobile']} {$fluentFormSubmitPaddingMobile['left']}{$fluentFormSubmitPaddingUnits['Mobile']}";

$fluentFormSubmitMarginUnits 					= isset($attributes['fluentFormSubmitMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitMarginDesktop 					= isset($attributes['fluentFormSubmitMarginDesktop']) ? array_map('intval', $attributes['fluentFormSubmitMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitMarginTablet 					= isset($attributes['fluentFormSubmitMarginTablet']) ? array_map('intval', $attributes['fluentFormSubmitMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitMarginMobile 					= isset($attributes['fluentFormSubmitMarginMobile']) ? array_map('intval', $attributes['fluentFormSubmitMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSubmitMarginDesktopString 			= "{$fluentFormSubmitMarginDesktop['top']}{$fluentFormSubmitMarginUnits['Desktop']} {$fluentFormSubmitMarginDesktop['right']}{$fluentFormSubmitMarginUnits['Desktop']} {$fluentFormSubmitMarginDesktop['bottom']}{$fluentFormSubmitMarginUnits['Desktop']} {$fluentFormSubmitMarginDesktop['left']}{$fluentFormSubmitMarginUnits['Desktop']}";
$fluentFormSubmitMarginTabletString 			= "{$fluentFormSubmitMarginTablet['top']}{$fluentFormSubmitMarginUnits['Tablet']} {$fluentFormSubmitMarginTablet['right']}{$fluentFormSubmitMarginUnits['Tablet']} {$fluentFormSubmitMarginTablet['bottom']}{$fluentFormSubmitMarginUnits['Tablet']} {$fluentFormSubmitMarginTablet['left']}{$fluentFormSubmitMarginUnits['Tablet']}";
$fluentFormSubmitMarginMobileString 			= "{$fluentFormSubmitMarginMobile['top']}{$fluentFormSubmitMarginUnits['Mobile']} {$fluentFormSubmitMarginMobile['right']}{$fluentFormSubmitMarginUnits['Mobile']} {$fluentFormSubmitMarginMobile['bottom']}{$fluentFormSubmitMarginUnits['Mobile']} {$fluentFormSubmitMarginMobile['left']}{$fluentFormSubmitMarginUnits['Mobile']}";

$fluentFormSubmitBorder 						= isset($attributes['fluentFormSubmitBorder']) ? sanitize_text_field($attributes['fluentFormSubmitBorder']) : 'none';
$fluentFormSubmitBorderColorSwitcher 			= isset($attributes['fluentFormSubmitBorderColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSubmitBorderColorSwitcher']) : 'normal';
$fluentFormSubmitBorderColor 					= isset($attributes['fluentFormSubmitBorderColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBorderColor']) : '';
$fluentFormSubmitBorderHoverColor 				= isset($attributes['fluentFormSubmitBorderHoverColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBorderHoverColor']) : '';

$fluentFormSubmitBorderUnits 					= isset($attributes['fluentFormSubmitBorderUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitBorderDesktop 					= isset($attributes['fluentFormSubmitBorderDesktop']) ? array_map('intval', $attributes['fluentFormSubmitBorderDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderTablet 					= isset($attributes['fluentFormSubmitBorderTablet']) ? array_map('intval', $attributes['fluentFormSubmitBorderTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderMobile 					= isset($attributes['fluentFormSubmitBorderMobile']) ? array_map('intval', $attributes['fluentFormSubmitBorderMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSubmitBorderDesktopString 			= "{$fluentFormSubmitBorderDesktop['top']}{$fluentFormSubmitBorderUnits['Desktop']} {$fluentFormSubmitBorderDesktop['right']}{$fluentFormSubmitBorderUnits['Desktop']} {$fluentFormSubmitBorderDesktop['bottom']}{$fluentFormSubmitBorderUnits['Desktop']} {$fluentFormSubmitBorderDesktop['left']}{$fluentFormSubmitBorderUnits['Desktop']}";
$fluentFormSubmitBorderTabletString 			= "{$fluentFormSubmitBorderTablet['top']}{$fluentFormSubmitBorderUnits['Tablet']} {$fluentFormSubmitBorderTablet['right']}{$fluentFormSubmitBorderUnits['Tablet']} {$fluentFormSubmitBorderTablet['bottom']}{$fluentFormSubmitBorderUnits['Tablet']} {$fluentFormSubmitBorderTablet['left']}{$fluentFormSubmitBorderUnits['Tablet']}";
$fluentFormSubmitBorderMobileString 			= "{$fluentFormSubmitBorderMobile['top']}{$fluentFormSubmitBorderUnits['Mobile']} {$fluentFormSubmitBorderMobile['right']}{$fluentFormSubmitBorderUnits['Mobile']} {$fluentFormSubmitBorderMobile['bottom']}{$fluentFormSubmitBorderUnits['Mobile']} {$fluentFormSubmitBorderMobile['left']}{$fluentFormSubmitBorderUnits['Mobile']}";

$fluentFormSubmitBorderRadiusUnits 				= isset($attributes['fluentFormSubmitBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitBorderRadiusDesktop 			= isset($attributes['fluentFormSubmitBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormSubmitBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderRadiusTablet 			= isset($attributes['fluentFormSubmitBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormSubmitBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderRadiusMobile 			= isset($attributes['fluentFormSubmitBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormSubmitBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSubmitBorderRadiusDesktopString 		= "{$fluentFormSubmitBorderRadiusDesktop['top']}{$fluentFormSubmitBorderRadiusUnits['Desktop']} {$fluentFormSubmitBorderRadiusDesktop['right']}{$fluentFormSubmitBorderRadiusUnits['Desktop']} {$fluentFormSubmitBorderRadiusDesktop['bottom']}{$fluentFormSubmitBorderRadiusUnits['Desktop']} {$fluentFormSubmitBorderRadiusDesktop['left']}{$fluentFormSubmitBorderRadiusUnits['Desktop']}";
$fluentFormSubmitBorderRadiusTabletString 		= "{$fluentFormSubmitBorderRadiusTablet['top']}{$fluentFormSubmitBorderRadiusUnits['Tablet']} {$fluentFormSubmitBorderRadiusTablet['right']}{$fluentFormSubmitBorderRadiusUnits['Tablet']} {$fluentFormSubmitBorderRadiusTablet['bottom']}{$fluentFormSubmitBorderRadiusUnits['Tablet']} {$fluentFormSubmitBorderRadiusTablet['left']}{$fluentFormSubmitBorderRadiusUnits['Tablet']}";
$fluentFormSubmitBorderRadiusMobileString 		= "{$fluentFormSubmitBorderRadiusMobile['top']}{$fluentFormSubmitBorderRadiusUnits['Mobile']} {$fluentFormSubmitBorderRadiusMobile['right']}{$fluentFormSubmitBorderRadiusUnits['Mobile']} {$fluentFormSubmitBorderRadiusMobile['bottom']}{$fluentFormSubmitBorderRadiusUnits['Mobile']} {$fluentFormSubmitBorderRadiusMobile['left']}{$fluentFormSubmitBorderRadiusUnits['Mobile']}";
/** End Submit */

/** Success*/
$fluentFormSuccessColor 						= isset($attributes['fluentFormSuccessColor']) ? sanitize_hex_color($attributes['fluentFormSuccessColor']) : '';
$fluentFormSuccessBgColor 						= isset($attributes['fluentFormSuccessBgColor']) ? sanitize_hex_color($attributes['fluentFormSuccessBgColor']) : '';
$fluentFormSuccessFontFamily 					= isset($attributes['fluentFormSuccessFontFamily']) ? sanitize_text_field($attributes['fluentFormSuccessFontFamily']) : 'inherit';
$fluentFormSuccessFontSize 						= isset($attributes['fluentFormSuccessFontSize']) ? intval($attributes['fluentFormSuccessFontSize']) : '';
$fluentFormSuccessFontSizeUnits 				= isset($attributes['fluentFormSuccessFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSuccessFontSizeUnits']) : 'px';
$fluentFormSuccessFontWeight 					= isset($attributes['fluentFormSuccessFontWeight']) ? sanitize_text_field($attributes['fluentFormSuccessFontWeight']) : '';
$fluentFormSuccessFontStyle 					= isset($attributes['fluentFormSuccessFontStyle']) ? sanitize_text_field($attributes['fluentFormSuccessFontStyle']) : 'normal';
$fluentFormSuccessTextTransform 				= isset($attributes['fluentFormSuccessTextTransform']) ? sanitize_text_field($attributes['fluentFormSuccessTextTransform']) : 'none';
$fluentFormSuccessTextDecoration 				= isset($attributes['fluentFormSuccessTextDecoration']) ? sanitize_text_field($attributes['fluentFormSuccessTextDecoration']) : 'none';
$fluentFormSuccessLetterSpacing 				= isset($attributes['fluentFormSuccessLetterSpacing']) ? intval($attributes['fluentFormSuccessLetterSpacing']) : '';
$fluentFormSuccessLetterSpacingUnits 			= isset($attributes['fluentFormSuccessLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSuccessLetterSpacingUnits']) : 'px';
$fluentFormSuccessLineHeight 					= isset($attributes['fluentFormSuccessLineHeight']) ? intval($attributes['fluentFormSuccessLineHeight']) : '';
$fluentFormSuccessLineHeightUnits 				= isset($attributes['fluentFormSuccessLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSuccessLineHeightUnits']) : 'px';
$fluentFormSuccessBorder 						= isset($attributes['fluentFormSuccessBorder']) ? sanitize_text_field($attributes['fluentFormSuccessBorder']) : 'none';
$fluentFormSuccessBorderColorSwitcher 			= isset($attributes['fluentFormSuccessBorderColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSuccessBorderColorSwitcher']) : 'normal';
$fluentFormSuccessBorderColor 					= isset($attributes['fluentFormSuccessBorderColor']) ? sanitize_hex_color($attributes['fluentFormSuccessBorderColor']) : '';
$fluentFormSuccessBorderHoverColor 				= isset($attributes['fluentFormSuccessBorderHoverColor']) ? sanitize_hex_color($attributes['fluentFormSuccessBorderHoverColor']) : '';

$fluentFormSuccessBorderUnits 					= isset($attributes['fluentFormSuccessBorderUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSuccessBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSuccessBorderDesktop 				= isset($attributes['fluentFormSuccessBorderDesktop']) ? array_map('intval', $attributes['fluentFormSuccessBorderDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderTablet 					= isset($attributes['fluentFormSuccessBorderTablet']) ? array_map('intval', $attributes['fluentFormSuccessBorderTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderMobile 					= isset($attributes['fluentFormSuccessBorderMobile']) ? array_map('intval', $attributes['fluentFormSuccessBorderMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSuccessBorderDesktopString 			= "{$fluentFormSuccessBorderDesktop['top']}{$fluentFormSuccessBorderUnits['Desktop']} {$fluentFormSuccessBorderDesktop['right']}{$fluentFormSuccessBorderUnits['Desktop']} {$fluentFormSuccessBorderDesktop['bottom']}{$fluentFormSuccessBorderUnits['Desktop']} {$fluentFormSuccessBorderDesktop['left']}{$fluentFormSuccessBorderUnits['Desktop']}";
$fluentFormSuccessBorderTabletString 			= "{$fluentFormSuccessBorderTablet['top']}{$fluentFormSuccessBorderUnits['Tablet']} {$fluentFormSuccessBorderTablet['right']}{$fluentFormSuccessBorderUnits['Tablet']} {$fluentFormSuccessBorderTablet['bottom']}{$fluentFormSuccessBorderUnits['Tablet']} {$fluentFormSuccessBorderTablet['left']}{$fluentFormSuccessBorderUnits['Tablet']}";
$fluentFormSuccessBorderMobileString 			= "{$fluentFormSuccessBorderMobile['top']}{$fluentFormSuccessBorderUnits['Mobile']} {$fluentFormSuccessBorderMobile['right']}{$fluentFormSuccessBorderUnits['Mobile']} {$fluentFormSuccessBorderMobile['bottom']}{$fluentFormSuccessBorderUnits['Mobile']} {$fluentFormSuccessBorderMobile['left']}{$fluentFormSuccessBorderUnits['Mobile']}";

$fluentFormSuccessBorderRadiusUnits 			= isset($attributes['fluentFormSuccessBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSuccessBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSuccessBorderRadiusDesktop 			= isset($attributes['fluentFormSuccessBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormSuccessBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderRadiusTablet 			= isset($attributes['fluentFormSuccessBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormSuccessBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderRadiusMobile 			= isset($attributes['fluentFormSuccessBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormSuccessBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormSuccessBorderRadiusDesktopString 	= "{$fluentFormSuccessBorderRadiusDesktop['top']}{$fluentFormSuccessBorderRadiusUnits['Desktop']} {$fluentFormSuccessBorderRadiusDesktop['right']}{$fluentFormSuccessBorderRadiusUnits['Desktop']} {$fluentFormSuccessBorderRadiusDesktop['bottom']}{$fluentFormSuccessBorderRadiusUnits['Desktop']} {$fluentFormSuccessBorderRadiusDesktop['left']}{$fluentFormSuccessBorderRadiusUnits['Desktop']}";
$fluentFormSuccessBorderRadiusTabletString 		= "{$fluentFormSuccessBorderRadiusTablet['top']}{$fluentFormSuccessBorderRadiusUnits['Tablet']} {$fluentFormSuccessBorderRadiusTablet['right']}{$fluentFormSuccessBorderRadiusUnits['Tablet']} {$fluentFormSuccessBorderRadiusTablet['bottom']}{$fluentFormSuccessBorderRadiusUnits['Tablet']} {$fluentFormSuccessBorderRadiusTablet['left']}{$fluentFormSuccessBorderRadiusUnits['Tablet']}";
$fluentFormSuccessBorderRadiusMobileString 		= "{$fluentFormSuccessBorderRadiusMobile['top']}{$fluentFormSuccessBorderRadiusUnits['Mobile']} {$fluentFormSuccessBorderRadiusMobile['right']}{$fluentFormSuccessBorderRadiusUnits['Mobile']} {$fluentFormSuccessBorderRadiusMobile['bottom']}{$fluentFormSuccessBorderRadiusUnits['Mobile']} {$fluentFormSuccessBorderRadiusMobile['left']}{$fluentFormSuccessBorderRadiusUnits['Mobile']}";
/** End Success */

/** Start Error */
$fluentFormErrorColor 							= isset($attributes['fluentFormErrorColor']) ? sanitize_hex_color($attributes['fluentFormErrorColor']) : '';
$fluentFormErrorFontFamily 						= isset($attributes['fluentFormErrorFontFamily']) ? sanitize_text_field($attributes['fluentFormErrorFontFamily']) : 'inherit';
$fluentFormErrorFontSize 						= isset($attributes['fluentFormErrorFontSize']) ? intval($attributes['fluentFormErrorFontSize']) : '';
$fluentFormErrorFontSizeUnits 					= isset($attributes['fluentFormErrorFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormErrorFontSizeUnits']) : 'px';
$fluentFormErrorFontWeight 						= isset($attributes['fluentFormErrorFontWeight']) ? sanitize_text_field($attributes['fluentFormErrorFontWeight']) : '';
$fluentFormErrorFontStyle 						= isset($attributes['fluentFormErrorFontStyle']) ? sanitize_text_field($attributes['fluentFormErrorFontStyle']) : 'normal';
$fluentFormErrorTextTransform 					= isset($attributes['fluentFormErrorTextTransform']) ? sanitize_text_field($attributes['fluentFormErrorTextTransform']) : 'none';
$fluentFormErrorTextDecoration 					= isset($attributes['fluentFormErrorTextDecoration']) ? sanitize_text_field($attributes['fluentFormErrorTextDecoration']) : 'none';
$fluentFormErrorLetterSpacing 					= isset($attributes['fluentFormErrorLetterSpacing']) ? intval($attributes['fluentFormErrorLetterSpacing']) : '';
$fluentFormErrorLetterSpacingUnits 				= isset($attributes['fluentFormErrorLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormErrorLetterSpacingUnits']) : 'px';
$fluentFormErrorLineHeight 						= isset($attributes['fluentFormErrorLineHeight']) ? intval($attributes['fluentFormErrorLineHeight']) : '';
$fluentFormErrorLineHeightUnits 				= isset($attributes['fluentFormErrorLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormErrorLineHeightUnits']) : 'px';

$fluentFormErrorPaddingUnits 					= isset($attributes['fluentFormErrorPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormErrorPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormErrorPaddingDesktop 					= isset($attributes['fluentFormErrorPaddingDesktop']) ? array_map('intval', $attributes['fluentFormErrorPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorPaddingTablet 					= isset($attributes['fluentFormErrorPaddingTablet']) ? array_map('intval', $attributes['fluentFormErrorPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorPaddingMobile 					= isset($attributes['fluentFormErrorPaddingMobile']) ? array_map('intval', $attributes['fluentFormErrorPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormErrorPaddingDesktopString 			= "{$fluentFormErrorPaddingDesktop['top']}{$fluentFormErrorPaddingUnits['Desktop']} {$fluentFormErrorPaddingDesktop['right']}{$fluentFormErrorPaddingUnits['Desktop']} {$fluentFormErrorPaddingDesktop['bottom']}{$fluentFormErrorPaddingUnits['Desktop']} {$fluentFormErrorPaddingDesktop['left']}{$fluentFormErrorPaddingUnits['Desktop']}";
$fluentFormErrorPaddingTabletString 			= "{$fluentFormErrorPaddingTablet['top']}{$fluentFormErrorPaddingUnits['Tablet']} {$fluentFormErrorPaddingTablet['right']}{$fluentFormErrorPaddingUnits['Tablet']} {$fluentFormErrorPaddingTablet['bottom']}{$fluentFormErrorPaddingUnits['Tablet']} {$fluentFormErrorPaddingTablet['left']}{$fluentFormErrorPaddingUnits['Tablet']}";
$fluentFormErrorPaddingMobileString 			= "{$fluentFormErrorPaddingMobile['top']}{$fluentFormErrorPaddingUnits['Mobile']} {$fluentFormErrorPaddingMobile['right']}{$fluentFormErrorPaddingUnits['Mobile']} {$fluentFormErrorPaddingMobile['bottom']}{$fluentFormErrorPaddingUnits['Mobile']} {$fluentFormErrorPaddingMobile['left']}{$fluentFormErrorPaddingUnits['Mobile']}";

$fluentFormErrorMarginUnits 					= isset($attributes['fluentFormErrorMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormErrorMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormErrorMarginDesktop 					= isset($attributes['fluentFormErrorMarginDesktop']) ? array_map('intval', $attributes['fluentFormErrorMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorMarginTablet 					= isset($attributes['fluentFormErrorMarginTablet']) ? array_map('intval', $attributes['fluentFormErrorMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorMarginMobile 					= isset($attributes['fluentFormErrorMarginMobile']) ? array_map('intval', $attributes['fluentFormErrorMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

$fluentFormErrorMarginDesktopString 			= "{$fluentFormErrorMarginDesktop['top']}{$fluentFormErrorMarginUnits['Desktop']} {$fluentFormErrorMarginDesktop['right']}{$fluentFormErrorMarginUnits['Desktop']} {$fluentFormErrorMarginDesktop['bottom']}{$fluentFormErrorMarginUnits['Desktop']} {$fluentFormErrorMarginDesktop['left']}{$fluentFormErrorMarginUnits['Desktop']}";
$fluentFormErrorMarginTabletString 				= "{$fluentFormErrorMarginTablet['top']}{$fluentFormErrorMarginUnits['Tablet']} {$fluentFormErrorMarginTablet['right']}{$fluentFormErrorMarginUnits['Tablet']} {$fluentFormErrorMarginTablet['bottom']}{$fluentFormErrorMarginUnits['Tablet']} {$fluentFormErrorMarginTablet['left']}{$fluentFormErrorMarginUnits['Tablet']}";
$fluentFormErrorMarginMobileString 				= "{$fluentFormErrorMarginMobile['top']}{$fluentFormErrorMarginUnits['Mobile']} {$fluentFormErrorMarginMobile['right']}{$fluentFormErrorMarginUnits['Mobile']} {$fluentFormErrorMarginMobile['bottom']}{$fluentFormErrorMarginUnits['Mobile']} {$fluentFormErrorMarginMobile['left']}{$fluentFormErrorMarginUnits['Mobile']}";
/** End Error */

/** Start Global styles */
$fluentFormGlobalPaddingUnits 					= isset( $attributes['fluentFormGlobalPaddingUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalPaddingUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalPaddingDesktop 				= isset( $attributes['fluentFormGlobalPaddingDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalPaddingTablet 					= isset( $attributes['fluentFormGlobalPaddingTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalPaddingMobile 					= isset( $attributes['fluentFormGlobalPaddingMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );

$DesktopPadding 								= "{$fluentFormGlobalPaddingDesktop['top']}{$fluentFormGlobalPaddingUnits['Desktop']} {$fluentFormGlobalPaddingDesktop['right']}{$fluentFormGlobalPaddingUnits['Desktop']} {$fluentFormGlobalPaddingDesktop['bottom']}{$fluentFormGlobalPaddingUnits['Desktop']} {$fluentFormGlobalPaddingDesktop['left']}{$fluentFormGlobalPaddingUnits['Desktop']}";
$TabletPadding 									= "{$fluentFormGlobalPaddingTablet['top']}{$fluentFormGlobalPaddingUnits['Tablet']} {$fluentFormGlobalPaddingTablet['right']}{$fluentFormGlobalPaddingUnits['Tablet']} {$fluentFormGlobalPaddingTablet['bottom']}{$fluentFormGlobalPaddingUnits['Tablet']} {$fluentFormGlobalPaddingTablet['left']}{$fluentFormGlobalPaddingUnits['Tablet']}";
$MobilePadding 									= "{$fluentFormGlobalPaddingMobile['top']}{$fluentFormGlobalPaddingUnits['Mobile']} {$fluentFormGlobalPaddingMobile['right']}{$fluentFormGlobalPaddingUnits['Mobile']} {$fluentFormGlobalPaddingMobile['bottom']}{$fluentFormGlobalPaddingUnits['Mobile']} {$fluentFormGlobalPaddingMobile['left']}{$fluentFormGlobalPaddingUnits['Mobile']}";

$fluentFormGlobalMarginUnits 					= isset( $attributes['fluentFormGlobalMarginUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalMarginUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalMarginDesktop 					= isset( $attributes['fluentFormGlobalMarginDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalMarginTablet 					= isset( $attributes['fluentFormGlobalMarginTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalMarginMobile 					= isset( $attributes['fluentFormGlobalMarginMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );

$DesktopMargin 									= "{$fluentFormGlobalMarginDesktop['top']}{$fluentFormGlobalMarginUnits['Desktop']} {$fluentFormGlobalMarginDesktop['right']}{$fluentFormGlobalMarginUnits['Desktop']} {$fluentFormGlobalMarginDesktop['bottom']}{$fluentFormGlobalMarginUnits['Desktop']} {$fluentFormGlobalMarginDesktop['left']}{$fluentFormGlobalMarginUnits['Desktop']}";
$TabletMargin 									= "{$fluentFormGlobalMarginTablet['top']}{$fluentFormGlobalMarginUnits['Tablet']} {$fluentFormGlobalMarginTablet['right']}{$fluentFormGlobalMarginUnits['Tablet']} {$fluentFormGlobalMarginTablet['bottom']}{$fluentFormGlobalMarginUnits['Tablet']} {$fluentFormGlobalMarginTablet['left']}{$fluentFormGlobalMarginUnits['Tablet']}";
$MobileMargin 									= "{$fluentFormGlobalMarginMobile['top']}{$fluentFormGlobalMarginUnits['Mobile']} {$fluentFormGlobalMarginMobile['right']}{$fluentFormGlobalMarginUnits['Mobile']} {$fluentFormGlobalMarginMobile['bottom']}{$fluentFormGlobalMarginUnits['Mobile']} {$fluentFormGlobalMarginMobile['left']}{$fluentFormGlobalMarginUnits['Mobile']}";

$fluentFormGlobalBgColorSwitcher 				= isset( $attributes['fluentFormGlobalBgColorSwitcher'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBgColorSwitcher'] ) : '';
$fluentFormGlobalBgColor 						= isset( $attributes['fluentFormGlobalBgColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBgColor'] ) : '';
$fluentFormGlobalBgHoverColor 					= isset( $attributes['fluentFormGlobalBgHoverColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBgHoverColor'] ) : '';

$fluentFormGlobalBorder 						= isset( $attributes['fluentFormGlobalBorder'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBorder'] ) : '';
$fluentFormGlobalBorderColorSwitcher 			= isset( $attributes['fluentFormGlobalBorderColorSwitcher'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBorderColorSwitcher'] ) : '';
$fluentFormGlobalBorderColor 					= isset( $attributes['fluentFormGlobalBorderColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBorderColor'] ) : '';
$fluentFormGlobalBorderHoverColor 				= isset( $attributes['fluentFormGlobalBorderHoverColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBorderHoverColor'] ) : '';

$fluentFormGlobalBorderUnits 					= isset( $attributes['fluentFormGlobalBorderUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalBorderUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalBorderDesktop 					= isset( $attributes['fluentFormGlobalBorderDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderTablet 					= isset( $attributes['fluentFormGlobalBorderTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderMobile 					= isset( $attributes['fluentFormGlobalBorderMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );

$BorderDesktopWidth 							= "{$fluentFormGlobalBorderDesktop['top']}{$fluentFormGlobalBorderUnits['Desktop']} {$fluentFormGlobalBorderDesktop['right']}{$fluentFormGlobalBorderUnits['Desktop']} {$fluentFormGlobalBorderDesktop['bottom']}{$fluentFormGlobalBorderUnits['Desktop']} {$fluentFormGlobalBorderDesktop['left']}{$fluentFormGlobalBorderUnits['Desktop']}";
$BorderTabletWidth 								= "{$fluentFormGlobalBorderTablet['top']}{$fluentFormGlobalBorderUnits['Tablet']} {$fluentFormGlobalBorderTablet['right']}{$fluentFormGlobalBorderUnits['Tablet']} {$fluentFormGlobalBorderTablet['bottom']}{$fluentFormGlobalBorderUnits['Tablet']} {$fluentFormGlobalBorderTablet['left']}{$fluentFormGlobalBorderUnits['Tablet']}";
$BorderMobileWidth 								= "{$fluentFormGlobalBorderMobile['top']}{$fluentFormGlobalBorderUnits['Mobile']} {$fluentFormGlobalBorderMobile['right']}{$fluentFormGlobalBorderUnits['Mobile']} {$fluentFormGlobalBorderMobile['bottom']}{$fluentFormGlobalBorderUnits['Mobile']} {$fluentFormGlobalBorderMobile['left']}{$fluentFormGlobalBorderUnits['Mobile']}";

$fluentFormGlobalBorderRadiusUnits 				= isset( $attributes['fluentFormGlobalBorderRadiusUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalBorderRadiusUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalBorderRadiusDesktop 			= isset( $attributes['fluentFormGlobalBorderRadiusDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderRadiusTablet 			= isset( $attributes['fluentFormGlobalBorderRadiusTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderRadiusMobile 			= isset( $attributes['fluentFormGlobalBorderRadiusMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );

$BorderRadiusDesktopWidth 						= "{$fluentFormGlobalBorderRadiusDesktop['top']}{$fluentFormGlobalBorderRadiusUnits['Desktop']} {$fluentFormGlobalBorderRadiusDesktop['right']}{$fluentFormGlobalBorderRadiusUnits['Desktop']} {$fluentFormGlobalBorderRadiusDesktop['bottom']}{$fluentFormGlobalBorderRadiusUnits['Desktop']} {$fluentFormGlobalBorderRadiusDesktop['left']}{$fluentFormGlobalBorderRadiusUnits['Desktop']}";
$BorderRadiusTabletWidth 						= "{$fluentFormGlobalBorderRadiusTablet['top']}{$fluentFormGlobalBorderRadiusUnits['Tablet']} {$fluentFormGlobalBorderRadiusTablet['right']}{$fluentFormGlobalBorderRadiusUnits['Tablet']} {$fluentFormGlobalBorderRadiusTablet['bottom']}{$fluentFormGlobalBorderRadiusUnits['Tablet']} {$fluentFormGlobalBorderRadiusTablet['left']}{$fluentFormGlobalBorderRadiusUnits['Tablet']}";
$BorderRadiusMobileWidth 						= "{$fluentFormGlobalBorderRadiusMobile['top']}{$fluentFormGlobalBorderRadiusUnits['Mobile']} {$fluentFormGlobalBorderRadiusMobile['right']}{$fluentFormGlobalBorderRadiusUnits['Mobile']} {$fluentFormGlobalBorderRadiusMobile['bottom']}{$fluentFormGlobalBorderRadiusUnits['Mobile']} {$fluentFormGlobalBorderRadiusMobile['left']}{$fluentFormGlobalBorderRadiusUnits['Mobile']}";
/** End Global styles */

/** Start CSS Content */
$css_content = "

    .$blockID.fb-fluent-form-wrapper {
        z-index: {$fluentFormGlobalZIndex};
		position: relative;
	}

    .$blockID.fb-fluent-form-wrapper .ff-el-group label {
        font-family: {$fluentFormLabelFontFamily};
        font-size: {$fluentFormLabelFontSize}{$fluentFormLabelFontSizeUnits};
        font-weight: {$fluentFormLabelFontWeight};
        font-style: {$fluentFormLabelFontStyle};
        text-transform: {$fluentFormLabelTextTransform};
        text-decoration: {$fluentFormLabelTextDecoration};
        letter-spacing: {$fluentFormLabelLetterSpacing}{$fluentFormLabelLetterSpacingUnits};
        line-height: {$fluentFormLabelLineHeight}{$fluentFormLabelLineHeightUnits};
        color: {$fluentFormLabelColor};
    }
    .$blockID.fb-fluent-form-wrapper .ff-el-group label:hover {
        color: {$fluentFormLabelHoverColor};
    }

	.$blockID.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
	.$blockID.fb-fluent-form-wrapper .ff-el-group textarea,
	.$blockID.fb-fluent-form-wrapper .ff-el-group select {

	 background-color: {$fluentFormInputBgColor};
	 color: {$fluentFormInputColor};
	 font-family: {$fluentFormInputFontFamily};
	 font-size: {$fluentFormInputFontSize}{$fluentFormInputFontSizeUnits};
	 font-weight: {$fluentFormInputFontWeight};
	 font-style: {$fluentFormInputFontStyle};
	 text-transform: {$fluentFormInputTextTransform};
	 text-decoration: {$fluentFormInputTextDecoration};
	 letter-spacing: {$fluentFormInputLetterSpacing}{$fluentFormInputLetterSpacingUnits};
	 line-height: {$fluentFormInputLineHeight}{$fluentFormInputLineHeightUnits};
	 text-indent: {$fluentFormTextIndentSize['Desktop']}{$fluentFormTextIndentSizeUnits['Desktop']};
	 width: {$fluentFormInputWidthSize['Desktop']}{$fluentFormInputWidthSizeUnits['Desktop']};
	 height: {$fluentFormInputHeightSize['Desktop']}{$fluentFormInputHeightSizeUnits['Desktop']};
	 padding: {$fluentFormDesktopPadding};
	 border: {$fluentFormBorder};
	 border-width: {$fluentFormBorderDesktopString};
	 border-color: {$fluentFormBorderColor};
	 border-radius: {$fluentFormBorderRadiusDesktopString};
	 transition: all .3s ease-in-out;
	}

	.$blockID.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
	.$blockID.fb-fluent-form-wrapper .ff-el-group textarea:focus,
	.$blockID.fb-fluent-form-wrapper .ff-el-group select:focus {
	 border-color: {$fluentFormInputFocusColor};
	 box-shadow: 0 0 0 1px {$fluentFormInputFocusColor};
	}
	.$blockID.fb-fluent-form-wrapper .ff-el-group textarea {
	 width: {$fluentFormTextareaWidthSize['Desktop']}{$fluentFormTextareaWidthSizeUnits['Desktop']};
	 height: {$fluentFormTextareaHeightSize['Desktop']}{$fluentFormTextareaHeightSizeUnits['Desktop']};
	}

	.$blockID.fb-fluent-form-wrapper input::-webkit-input-placeholder,
	.$blockID.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
        color: {$fluentFormPlaceholderColor};
    }

    .$blockID.fb-fluent-form-wrapper input::-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper textarea::-moz-placeholder {
        color: {$fluentFormPlaceholderColor};
    }

    .$blockID.fb-fluent-form-wrapper input:-ms-input-placeholder,
    .$blockID.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
        color: {$fluentFormPlaceholderColor};
    }

    .$blockID.fb-fluent-form-wrapper input:-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper textarea:-moz-placeholder {
        color: {$fluentFormPlaceholderColor};
    }
    .$blockID.fb-fluent-form-wrapper .ff-el-input--content input[type='checkbox'] {
        width: {$fluentFormRadioFontSize['Desktop']}{$fluentFormRadioFontSizeUnits['Desktop']};
        height: {$fluentFormRadioFontSize['Desktop']}{$fluentFormRadioFontSizeUnits['Desktop']};
        background: {$fluentFormRadioColor};
        border-color: {$fluentFormRadioBorderColor};
        border-width: {$fluentFormRadioBorderWidth['Desktop']}{$fluentFormRadioBorderWidthUnits['Desktop']};
        border-radius: {$fluentFormRadioBorderRadiusDesktopString};
    }
    .$blockID.fb-fluent-form-wrapper .ff-el-input--content input[type='radio'] {
        width: {$fluentFormRadioFontSize['Desktop']}{$fluentFormRadioFontSizeUnits['Desktop']};
        height: {$fluentFormRadioFontSize['Desktop']}{$fluentFormRadioFontSizeUnits['Desktop']};
        background: {$fluentFormRadioColor};
        border-color: {$fluentFormRadioBorderColor};
        border-width: {$fluentFormRadioBorderWidth['Desktop']}{$fluentFormRadioBorderWidthUnits['Desktop']};
        border-radius: {$fluentFormCheckBoxBorderRadiusDesktopString};
    }

    .$blockID.fb-fluent-form-wrapper input[type='checkbox']:checked:before,
    .$blockID.fb-fluent-form-wrapper input[type='radio']:checked:before {
        background: {$fluentFormRadioCheckedColor};
    }

    .$blockID.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
        margin-bottom: {$fluentFormRadioCheckBoxItemSpacing['Desktop']}{$fluentFormRadioCheckBoxItemSpacingUnits['Desktop']};
    }

	.$blockID.fb-fluent-form-wrapper .ff-el-section-break,
    .$blockID.fb-fluent-form-wrapper .ff-el-section-break hr {
        text-align: {$fluentFormSectionBreakAlignment};
    }

    .$blockID.fb-fluent-form-wrapper .ff-el-group {
        margin-bottom: {$fluentFormSpacingSize['Desktop']}{$fluentFormSpacingUnits['Desktop']};
    }


    .$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
        color: {$fluentFormSectionBreakTitleColor};
        font-family: {$fluentFormSectionBreakTitleFontFamily};
        font-size: {$fluentFormSectionBreakTitleFontSize}{$fluentFormSectionBreakTitleFontSizeUnits};
        font-weight: {$fluentFormSectionBreakTitleFontWeight};
        font-style: {$fluentFormSectionBreakTitleFontStyle};
        text-transform: {$fluentFormSectionBreakTitleTextTransform};
        text-decoration: {$fluentFormSectionBreakTitleTextDecoration};
        letter-spacing: {$fluentFormSectionBreakTitleLetterSpacing}{$fluentFormSectionBreakTitleLetterSpacingUnits};
        line-height: {$fluentFormSectionBreakTitleLineHeight}{$fluentFormSectionBreakTitleLineHeightUnits};
        padding: {$fluentFormSectionBreakTitlePaddingDesktopString};
        margin: {$fluentFormSectionBreakTitleMarginDesktopString};
    }


    .$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
        color: {$fluentFormSectionBreakTitleHoverColor};
    }

    .$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
        color: {$fluentFormSectionBreakDescColor};
        font-family: {$fluentFormSectionBreakDescFontFamily};
        font-size: {$fluentFormSectionBreakDescFontSize}{$fluentFormSectionBreakDescFontSizeUnits};
        font-weight: {$fluentFormSectionBreakDescFontWeight};
        font-style: {$fluentFormSectionBreakDescFontStyle};
        text-transform: {$fluentFormSectionBreakDescTextTransform};
        text-decoration: {$fluentFormSectionBreakDescTextDecoration};
        letter-spacing: {$fluentFormSectionBreakDescLetterSpacing}{$fluentFormSectionBreakDescLetterSpacingUnits};
        line-height: {$fluentFormSectionBreakDescLineHeight}{$fluentFormSectionBreakDescLineHeightUnits};
        padding: {$fluentFormSectionBreakDescPaddingDesktopString};
        margin: {$fluentFormSectionBreakDescMarginDesktopString};
    }


    .$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk:hover {
        color: {$fluentFormSectionBreakDescHoverColor};
    }

    .$blockID.fb-fluent-form-wrapper .ff-custom_html > * {
        text-align: {$fluentFormHtmlAlignment};
        color: {$fluentFormHtmlColor};
        font-family: {$fluentFormHtmlFontFamily};
        font-size: {$fluentFormHtmlFontSize}{$fluentFormHtmlFontSizeUnits};
        font-weight: {$fluentFormHtmlFontWeight};
        font-style: {$fluentFormHtmlFontStyle};
        text-transform: {$fluentFormHtmlTextTransform};
        text-decoration: {$fluentFormHtmlTextDecoration};
        letter-spacing: {$fluentFormHtmlLetterSpacing}{$fluentFormHtmlLetterSpacingUnits};
        line-height: {$fluentFormHtmlLineHeight}{$fluentFormHtmlLineHeightUnits};
        padding: {$fluentFormHtmlPaddingDesktopString};
        margin: {$fluentFormHtmlMarginDesktopString};
    }


    .$blockID.fb-fluent-form-wrapper .ff-custom_html > *:hover {
        color: {$fluentFormHtmlHoverColor};
    }

	.{$blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper {
        text-align: {$fluentFormSubmitAlignment};
    }

    .{$blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
        height: {$fluentFormSubmitHeight['Desktop']}{$fluentFormSubmitHeightUnits['Desktop']};
        color: {$fluentFormSubmitColor};
        background: {$fluentFormSubmitBgColor};
        font-family: {$fluentFormSubmitFontFamily};
        font-size: {$fluentFormSubmitFontSize}{$fluentFormSubmitFontSizeUnits};
        font-weight: {$fluentFormSubmitFontWeight};
        font-style: {$fluentFormSubmitFontStyle};
        text-transform: {$fluentFormSubmitTextTransform};
        text-decoration: {$fluentFormSubmitTextDecoration};
        letter-spacing: {$fluentFormSubmitLetterSpacing}{$fluentFormSubmitLetterSpacingUnits};
        line-height: {$fluentFormSubmitLineHeight}{$fluentFormSubmitLineHeightUnits};
        padding: {$fluentFormSubmitPaddingDesktopString};
        margin: {$fluentFormSubmitMarginDesktopString};
        border: {$fluentFormSubmitBorder};
        border-width: {$fluentFormSubmitBorderDesktopString};
        border-color: {$fluentFormSubmitBorderColor};
        border-radius: {$fluentFormSubmitBorderRadiusDesktopString};
    }


    .{$blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
        color: {$fluentFormSubmitHoverColor};
        background: {$fluentFormSubmitBgHoverColor};	
        border-color: {$fluentFormSubmitBorderHoverColor};
    }

    .{$blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
        color: {$fluentFormSubmitHoverColor};
        background: {$fluentFormSubmitBgHoverColor};
        border-color: {$fluentFormSubmitBorderHoverColor};
    }

	.$blockID.fb-fluent-form-wrapper .ff-message-success {
    	color: {$fluentFormSuccessColor};
        background: {$fluentFormSuccessBgColor};
        font-family: {$fluentFormSuccessFontFamily};
        font-size: {$fluentFormSuccessFontSize}{$fluentFormSuccessFontSizeUnits};
        font-weight: {$fluentFormSuccessFontWeight};
        font-style: {$fluentFormSuccessFontStyle};
        text-transform: {$fluentFormSuccessTextTransform};
        text-decoration: {$fluentFormSuccessTextDecoration};
        letter-spacing: {$fluentFormSuccessLetterSpacing}{$fluentFormSuccessLetterSpacingUnits};
        line-height: {$fluentFormSuccessLineHeight}{$fluentFormSuccessLineHeightUnits};
        border: {$fluentFormSuccessBorder};
        border-width: {$fluentFormSuccessBorderDesktopString};
        border-color: {$fluentFormSuccessBorderColor};
        border-radius: {$fluentFormSuccessBorderRadiusDesktopString};	
    }


    .$blockID.fb-fluent-form-wrapper .ff-message-success:hover {
        border-color: {$fluentFormSuccessBorderHoverColor}; 
    }

	.{$blockID}.fb-fluent-form-wrapper .error.text-danger {
		color: {$fluentFormErrorColor};
        font-family: {$fluentFormErrorFontFamily};
        font-size: {$fluentFormErrorFontSize}{$fluentFormErrorFontSizeUnits};
        font-weight: {$fluentFormErrorFontWeight};
        font-style: {$fluentFormErrorFontStyle};
        text-transform: {$fluentFormErrorTextTransform};
        text-decoration: {$fluentFormErrorTextDecoration};
        letter-spacing: {$fluentFormErrorLetterSpacing}{$fluentFormErrorLetterSpacingUnits};
        line-height: {$fluentFormErrorLineHeight}{$fluentFormErrorLineHeightUnits};
		padding: {$fluentFormErrorPaddingDesktopString};
		margin: {$fluentFormErrorMarginDesktopString};
    }


	.$blockID.fb-fluent-form-wrapper {
        background-color: {$fluentFormGlobalBgColor};
        padding: {$DesktopPadding};
        margin: {$DesktopMargin};
        border: {$fluentFormGlobalBorder};
        border-width: {$BorderDesktopWidth};
        border-radius: {$BorderRadiusDesktopWidth} !important;
        border-color: {$fluentFormGlobalBorderColor};
    }

    .{$blockID}.fb-fluent-form-wrapper:hover {
        background-color: {$fluentFormGlobalBgHoverColor};
        border-color: {$fluentFormGlobalBorderHoverColor};
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-label .ff-el-group label:not(.ff-el-form-check-label),
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-label .ff-el-group .ff-el-input--label,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .ff-el-group .error.text-danger {
        display: none;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
        opacity: 0;
        visibility: hidden;
    }

    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
    .$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
        opacity: 0;
        visibility: hidden;
    }



    @media only screen and (max-width: 1024px) {
        .$blockID.fb-fluent-form-wrapper {
            padding: {$TabletPadding};
            margin: {$TabletMargin};
            border-width: {$BorderTabletWidth};
            border-radius: {$BorderRadiusTabletWidth} !important;
        }
		.$blockID.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
		.$blockID.fb-fluent-form-wrapper .ff-el-group textarea,
		.$blockID.fb-fluent-form-wrapper .ff-el-group select {
			padding: {$fluentFormTabletPadding};
			text-indent: {$fluentFormTabletTextIndentSize['Tablet']}{$fluentFormTabletTextIndentSizeUnits['Tablet']};
			width: {$fluentFormTabletWidthSize['Tablet']}{$fluentFormTabletWidthSizeUnits['Tablet']};
			height: {$fluentFormTabletHeightSize['Tablet']}{$fluentFormTabletHeightSizeUnits['Tablet']};
			border-width: {$fluentFormBorderTabletString};
			border-radius: {$fluentFormBorderRadiusTabletString};
			transition: all .3s ease-in-out;

		}
		.$blockID.fb-fluent-form-wrapper .ff-el-group textarea {
			width: {$fluentFormTextareaWidthSize['Tablet']}{$fluentFormTextareaWidthSizeUnits['Tablet']};
			height: {$fluentFormTextareaHeightSize['Tablet']}{$fluentFormTextareaHeightSizeUnits['Tablet']};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-input--content input[type='checkbox'] {
			width: {$fluentFormRadioFontSize['Tablet']}{$fluentFormRadioFontSizeUnits['Tablet']};
			height: {$fluentFormRadioFontSize['Tablet']}{$fluentFormRadioFontSizeUnits['Tablet']};
			border-width: {$fluentFormRadioBorderWidth['Tablet']}{$fluentFormRadioBorderWidthUnits['Tablet']};
			border-radius: {$fluentFormRadioBorderRadiusTabletString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-input--content input[type='radio'] {
			width: {$fluentFormRadioFontSize['Tablet']}{$fluentFormRadioFontSizeUnits['Tablet']};
			height: {$fluentFormRadioFontSize['Tablet']}{$fluentFormRadioFontSizeUnits['Tablet']};
			border-width: {$fluentFormRadioBorderWidth['Tablet']}{$fluentFormRadioBorderWidthUnits['Tablet']};
			border-radius: {$fluentFormCheckBoxBorderRadiusTabletString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
			margin-bottom: {$fluentFormRadioCheckBoxItemSpacing['Tablet']}{$fluentFormRadioCheckBoxItemSpacingUnits['Tablet']};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-group {
			margin-bottom: {$fluentFormSpacingSize['Tablet']}{$fluentFormSpacingUnits['Tablet']};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
			padding: {$fluentFormSectionBreakTitlePaddingTabletString};
			margin: {$fluentFormSectionBreakTitleMarginTabletString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
			padding: {$fluentFormSectionBreakDescPaddingTabletString};
			margin: {$fluentFormSectionBreakDescMarginTabletString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-custom_html > * {
			padding: {$fluentFormHtmlPaddingTabletString};
			margin: {$fluentFormHtmlMarginTabletString};
		}
		.$blockID.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
			padding: {$fluentFormSubmitPaddingTabletString};
			margin: {$fluentFormSubmitMarginTabletString};
			border-width: {$fluentFormSubmitBorderTabletString};
			border-radius: {$fluentFormSubmitBorderRadiusTabletString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-message-success {
			border-width: {$fluentFormSuccessBorderTabletString};
			border-radius: {$fluentFormSuccessBorderRadiusTabletString};
		}
		.$blockID.fb-fluent-form-wrapper .error.text-danger {
			padding: {$fluentFormErrorPaddingTabletString};
			margin: {$fluentFormErrorMarginTabletString};
		}
    }

    @media only screen and (max-width: 767px) {
        .$blockID.fb-fluent-form-wrapper {
            padding: {$MobilePadding};
            margin: {$MobileMargin};
            border-width: {$BorderMobileWidth};
            border-radius: {$BorderRadiusMobileWidth} !important;
        }
		.$blockID.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
		.$blockID.fb-fluent-form-wrapper .ff-el-group textarea,
		.$blockID.fb-fluent-form-wrapper .ff-el-group select {
			padding: {$fluentFormMobilePadding};
			text-indent: {$fluentFormMobileTextIndentSize['Mobile']}{$fluentFormMobileTextIndentSizeUnits['Mobile']};
			width: {$fluentFormMobileWidthSize['Mobile']}{$fluentFormMobileWidthSizeUnits['Mobile']};
			height: {$fluentFormMobileHeightSize['Mobile']}{$fluentFormMobileHeightSizeUnits['Mobile']};
			border-width: {$fluentFormBorderMobileString};	
			border-radius: {$fluentFormBorderRadiusMobileString};
			transition: all .3s ease-in-out;
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-group textarea {		
			width: {$fluentFormTextareaWidthSize['Mobile']}{$fluentFormTextareaWidthSizeUnits['Mobile']};
			height: {$fluentFormTextareaHeightSize['Mobile']}{$fluentFormTextareaHeightSizeUnits['Mobile']};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-input--content input[type='checkbox'] {	
			width: {$fluentFormRadioFontSize['Mobile']}{$fluentFormRadioFontSizeUnits['Mobile']};
			height: {$fluentFormRadioFontSize['Mobile']}{$fluentFormRadioFontSizeUnits['Mobile']};
			border-width: {$fluentFormRadioBorderWidth['Mobile']}{$fluentFormRadioBorderWidthUnits['Mobile']};
			border-radius: {$fluentFormRadioBorderRadiusMobileString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-input--content input[type='radio'] {	
			width: {$fluentFormRadioFontSize['Mobile']}{$fluentFormRadioFontSizeUnits['Mobile']};
			height: {$fluentFormRadioFontSize['Mobile']}{$fluentFormRadioFontSizeUnits['Mobile']};
			border-width: {$fluentFormRadioBorderWidth['Mobile']}{$fluentFormRadioBorderWidthUnits['Mobile']};
			border-radius: {$fluentFormCheckBoxBorderRadiusMobileString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {	
			margin-bottom: {$fluentFormRadioCheckBoxItemSpacing['Mobile']}{$fluentFormRadioCheckBoxItemSpacingUnits['Mobile']};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-group {	
			margin-bottom: {$fluentFormSpacingSize['Mobile']}{$fluentFormSpacingUnits['Mobile']};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {		
			padding: {$fluentFormSectionBreakTitlePaddingMobileString};
			margin: {$fluentFormSectionBreakTitleMarginMobileString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {		
			padding: {$fluentFormSectionBreakDescPaddingMobileString};
			margin: {$fluentFormSectionBreakDescMarginMobileString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-custom_html > * {	
			padding: {$fluentFormHtmlPaddingMobileString};
			margin: {$fluentFormHtmlMarginMobileString};
		}
		.$blockID.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {	
			padding: {$fluentFormSubmitPaddingMobileString};
			margin: {$fluentFormSubmitMarginMobileString};
			border-width: {$fluentFormSubmitBorderMobileString};
			border-radius: {$fluentFormSubmitBorderRadiusMobileString};
		}
		.$blockID.fb-fluent-form-wrapper .ff-message-success {	
			border-width: {$fluentFormSuccessBorderMobileString};
			border-radius: {$fluentFormSuccessBorderRadiusMobileString};
		}
		.$blockID.fb-fluent-form-wrapper .error.text-danger {	
			padding: {$fluentFormErrorPaddingMobileString};
			margin: {$fluentFormErrorMarginMobileString};
		}
	}


";
/** End CSS Content */

/** Enqueue style for frontend */
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID);
/** End Enqueue style for frontend */
