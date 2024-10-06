<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Get block attributes
$blockID        = isset( $attributes['blockID'] ) ? sanitize_text_field( $attributes['blockID'] ) : '';
$DeviceType     = isset( $attributes['DeviceType'] ) ? sanitize_text_field( $attributes['DeviceType'] ) : 'Desktop';
$formId         = isset( $attributes['formId'] ) ? sanitize_text_field( $attributes['formId'] ) : '';

$showLabels = isset( $attributes['showLabels'] ) ? (bool) $attributes['showLabels'] : true;
$showPlaceholder = isset( $attributes['showPlaceholder'] ) ? (bool) $attributes['showPlaceholder'] : true;
$showErrorMessage = isset( $attributes['showErrorMessage'] ) ? (bool) $attributes['showErrorMessage'] : true;
$fluentFormGlobalZIndex = isset( $attributes['fluentFormGlobalZIndex'] ) ? intval( $attributes['fluentFormGlobalZIndex'] ) : '';

$fluentFormLabelColor = isset($attributes['fluentFormLabelColor']) ? sanitize_hex_color($attributes['fluentFormLabelColor']) : '';
$fluentFormLabelHoverColor = isset($attributes['fluentFormLabelHoverColor']) ? sanitize_hex_color($attributes['fluentFormLabelHoverColor']) : '';
$fluentFormLabelFontFamily = isset($attributes['fluentFormLabelFontFamily']) ? sanitize_text_field($attributes['fluentFormLabelFontFamily']) : 'inherit';
$fluentFormLabelFontSize = isset($attributes['fluentFormLabelFontSize']) ? intval($attributes['fluentFormLabelFontSize']) : '';
$fluentFormLabelFontSizeUnits = isset($attributes['fluentFormLabelFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormLabelFontSizeUnits']) : 'px';
$fluentFormLabelFontWeight = isset($attributes['fluentFormLabelFontWeight']) ? sanitize_text_field($attributes['fluentFormLabelFontWeight']) : '';
$fluentFormLabelFontStyle = isset($attributes['fluentFormLabelFontStyle']) ? sanitize_text_field($attributes['fluentFormLabelFontStyle']) : 'normal';
$fluentFormLabelTextTransform = isset($attributes['fluentFormLabelTextTransform']) ? sanitize_text_field($attributes['fluentFormLabelTextTransform']) : 'none';
$fluentFormLabelTextDecoration = isset($attributes['fluentFormLabelTextDecoration']) ? sanitize_text_field($attributes['fluentFormLabelTextDecoration']) : 'none';
$fluentFormLabelLetterSpacing = isset($attributes['fluentFormLabelLetterSpacing']) ? intval($attributes['fluentFormLabelLetterSpacing']) : '';
$fluentFormLabelLetterSpacingUnits = isset($attributes['fluentFormLabelLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormLabelLetterSpacingUnits']) : 'px';
$fluentFormLabelLineHeight = isset($attributes['fluentFormLabelLineHeight']) ? intval($attributes['fluentFormLabelLineHeight']) : '';
$fluentFormLabelLineHeightUnits = isset($attributes['fluentFormLabelLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormLabelLineHeightUnits']) : 'px';



$fluentFormInputBgColor = isset($attributes['fluentFormInputBgColor']) ? sanitize_hex_color($attributes['fluentFormInputBgColor']) : '';
$fluentFormInputColor = isset($attributes['fluentFormInputColor']) ? sanitize_hex_color($attributes['fluentFormInputColor']) : '';
$fluentFormInputFocusColor = isset($attributes['fluentFormInputFocusColor']) ? sanitize_hex_color($attributes['fluentFormInputFocusColor']) : '';
$fluentFormInputFontFamily = isset($attributes['fluentFormInputFontFamily']) ? sanitize_text_field($attributes['fluentFormInputFontFamily']) : 'inherit';
$fluentFormInputFontSize = isset($attributes['fluentFormInputFontSize']) ? intval($attributes['fluentFormInputFontSize']) : '';
$fluentFormInputFontSizeUnits = isset($attributes['fluentFormInputFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormInputFontSizeUnits']) : 'px';
$fluentFormInputFontWeight = isset($attributes['fluentFormInputFontWeight']) ? sanitize_text_field($attributes['fluentFormInputFontWeight']) : 'normal';
$fluentFormInputFontStyle = isset($attributes['fluentFormInputFontStyle']) ? sanitize_text_field($attributes['fluentFormInputFontStyle']) : 'normal';
$fluentFormInputTextTransform = isset($attributes['fluentFormInputTextTransform']) ? sanitize_text_field($attributes['fluentFormInputTextTransform']) : 'none';
$fluentFormInputTextDecoration = isset($attributes['fluentFormInputTextDecoration']) ? sanitize_text_field($attributes['fluentFormInputTextDecoration']) : 'none';
$fluentFormInputLetterSpacing = isset($attributes['fluentFormInputLetterSpacing']) ? intval($attributes['fluentFormInputLetterSpacing']) : '';
$fluentFormInputLetterSpacingUnits = isset($attributes['fluentFormInputLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormInputLetterSpacingUnits']) : 'px';
$fluentFormInputLineHeight = isset($attributes['fluentFormInputLineHeight']) ? intval($attributes['fluentFormInputLineHeight']) : '';
$fluentFormInputLineHeightUnits = isset($attributes['fluentFormInputLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormInputLineHeightUnits']) : 'px';



$fluentFormTextIndentSize = isset($attributes['fluentFormTextIndentSize']) ? $attributes['fluentFormTextIndentSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormTextIndentSizeUnits = isset($attributes['fluentFormTextIndentSizeUnits']) ? $attributes['fluentFormTextIndentSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$fluentFormInputWidthSize = isset($attributes['fluentFormInputWidthSize']) ? $attributes['fluentFormInputWidthSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormInputWidthSizeUnits = isset($attributes['fluentFormInputWidthSizeUnits']) ? $attributes['fluentFormInputWidthSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$fluentFormInputHeightSize = isset($attributes['fluentFormInputHeightSize']) ? $attributes['fluentFormInputHeightSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormInputHeightSizeUnits = isset($attributes['fluentFormInputHeightSizeUnits']) ? $attributes['fluentFormInputHeightSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$fluentFormTextareaWidthSize = isset($attributes['fluentFormTextareaWidthSize']) ? $attributes['fluentFormTextareaWidthSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormTextareaWidthSizeUnits = isset($attributes['fluentFormTextareaWidthSizeUnits']) ? $attributes['fluentFormTextareaWidthSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$fluentFormTextareaHeightSize = isset($attributes['fluentFormTextareaHeightSize']) ? $attributes['fluentFormTextareaHeightSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormTextareaHeightSizeUnits = isset($attributes['fluentFormTextareaHeightSizeUnits']) ? $attributes['fluentFormTextareaHeightSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$fluentFormSpacingSize = isset($attributes['fluentFormSpacingSize']) ? $attributes['fluentFormSpacingSize'] : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormSpacingUnits = isset($attributes['fluentFormSpacingUnits']) ? $attributes['fluentFormSpacingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];


$fluentFormPaddingUnits = isset($attributes['fluentFormPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormPaddingDesktop = isset($attributes['fluentFormPaddingDesktop']) ? array_map('intval', $attributes['fluentFormPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormPaddingTablet = isset($attributes['fluentFormPaddingTablet']) ? array_map('intval', $attributes['fluentFormPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormPaddingMobile = isset($attributes['fluentFormPaddingMobile']) ? array_map('intval', $attributes['fluentFormPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** FluentForm Desktop padding */
$fluentFormDesktopPadding = "{$fluentFormPaddingDesktop['top']}{$fluentFormPaddingUnits['Desktop']} {$fluentFormPaddingDesktop['right']}{$fluentFormPaddingUnits['Desktop']} {$fluentFormPaddingDesktop['bottom']}{$fluentFormPaddingUnits['Desktop']} {$fluentFormPaddingDesktop['left']}{$fluentFormPaddingUnits['Desktop']}";
$fluentFormTabletPadding = "{$fluentFormPaddingTablet['top']}{$fluentFormPaddingUnits['Tablet']} {$fluentFormPaddingTablet['right']}{$fluentFormPaddingUnits['Tablet']} {$fluentFormPaddingTablet['bottom']}{$fluentFormPaddingUnits['Tablet']} {$fluentFormPaddingTablet['left']}{$fluentFormPaddingUnits['Tablet']}";
$fluentFormMobilePadding = "{$fluentFormPaddingMobile['top']}{$fluentFormPaddingUnits['Mobile']} {$fluentFormPaddingMobile['right']}{$fluentFormPaddingUnits['Mobile']} {$fluentFormPaddingMobile['bottom']}{$fluentFormPaddingUnits['Mobile']} {$fluentFormPaddingMobile['left']}{$fluentFormPaddingUnits['Mobile']}";
/** FluentForm Desktop padding */


$fluentFormBorder = isset($attributes['fluentFormBorder']) ? sanitize_text_field($attributes['fluentFormBorder']) : 'none';
$fluentFormBorderColor = isset($attributes['fluentFormBorderColor']) ? sanitize_hex_color($attributes['fluentFormBorderColor']) : '';
$fluentFormBorderHoverColor = isset($attributes['fluentFormBorderHoverColor']) ? sanitize_hex_color($attributes['fluentFormBorderHoverColor']) : '';

$fluentFormBorderUnits = isset($attributes['fluentFormBorderUnits']) ? sanitize_text_field($attributes['fluentFormBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px']; 
$fluentFormBorderDesktop = isset($attributes['fluentFormBorderDesktop']) ? array_map('intval', $attributes['fluentFormBorderDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => '']; 
$fluentFormBorderTablet = isset($attributes['fluentFormBorderTablet']) ? array_map('intval', $attributes['fluentFormBorderTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => '']; 
$fluentFormBorderMobile = isset($attributes['fluentFormBorderMobile']) ? array_map('intval', $attributes['fluentFormBorderMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormBorderDesktop */
$fluentFormBorderDesktopString = "{$fluentFormBorderDesktop['top']}{$fluentFormBorderUnits['Desktop']} {$fluentFormBorderDesktop['right']}{$fluentFormBorderUnits['Desktop']} {$fluentFormBorderDesktop['bottom']}{$fluentFormBorderUnits['Desktop']} {$fluentFormBorderDesktop['left']}{$fluentFormBorderUnits['Desktop']}";
$fluentFormBorderTabletString = "{$fluentFormBorderTablet['top']}{$fluentFormBorderUnits['Tablet']} {$fluentFormBorderTablet['right']}{$fluentFormBorderUnits['Tablet']} {$fluentFormBorderTablet['bottom']}{$fluentFormBorderUnits['Tablet']} {$fluentFormBorderTablet['left']}{$fluentFormBorderUnits['Tablet']}";
$fluentFormBorderMobileString = "{$fluentFormBorderMobile['top']}{$fluentFormBorderUnits['Mobile']} {$fluentFormBorderMobile['right']}{$fluentFormBorderUnits['Mobile']} {$fluentFormBorderMobile['bottom']}{$fluentFormBorderUnits['Mobile']} {$fluentFormBorderMobile['left']}{$fluentFormBorderUnits['Mobile']}";
/** fluentFormBorderDesktop */

$fluentFormBorderRadiusUnits = isset($attributes['fluentFormBorderRadiusUnits']) ? sanitize_text_field($attributes['fluentFormBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormBorderRadiusDesktop = isset($attributes['fluentFormBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormBorderRadiusTablet = isset($attributes['fluentFormBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormBorderRadiusMobile = isset($attributes['fluentFormBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormBorderRadiusDesktopString */
$fluentFormBorderRadiusDesktopString = "{$fluentFormBorderRadiusDesktop['top']}{$fluentFormBorderRadiusUnits['Desktop']} {$fluentFormBorderRadiusDesktop['right']}{$fluentFormBorderRadiusUnits['Desktop']} {$fluentFormBorderRadiusDesktop['bottom']}{$fluentFormBorderRadiusUnits['Desktop']} {$fluentFormBorderRadiusDesktop['left']}{$fluentFormBorderRadiusUnits['Desktop']}";
$fluentFormBorderRadiusTabletString = "{$fluentFormBorderRadiusTablet['top']}{$fluentFormBorderRadiusUnits['Tablet']} {$fluentFormBorderRadiusTablet['right']}{$fluentFormBorderRadiusUnits['Tablet']} {$fluentFormBorderRadiusTablet['bottom']}{$fluentFormBorderRadiusUnits['Tablet']} {$fluentFormBorderRadiusTablet['left']}{$fluentFormBorderRadiusUnits['Tablet']}";
$fluentFormBorderRadiusMobileString = "{$fluentFormBorderRadiusMobile['top']}{$fluentFormBorderRadiusUnits['Mobile']} {$fluentFormBorderRadiusMobile['right']}{$fluentFormBorderRadiusUnits['Mobile']} {$fluentFormBorderRadiusMobile['bottom']}{$fluentFormBorderRadiusUnits['Mobile']} {$fluentFormBorderRadiusMobile['left']}{$fluentFormBorderRadiusUnits['Mobile']}";
/** fluentFormBorderRadiusDesktopString */
$fluentFormPlaceholderColor = isset($attributes['fluentFormPlaceholderColor']) ? sanitize_hex_color($attributes['fluentFormPlaceholderColor']) : '';



$fluentFormRadioFontSize = isset($attributes['fluentFormRadioFontSize']) ? array_map('intval', $attributes['fluentFormRadioFontSize']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormRadioFontSizeUnits = isset($attributes['fluentFormRadioFontSizeUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioFontSizeUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$fluentFormRadioColor = isset($attributes['fluentFormRadioColor']) ? sanitize_hex_color($attributes['fluentFormRadioColor']) : '';
$fluentFormRadioCheckedColor = isset($attributes['fluentFormRadioCheckedColor']) ? sanitize_hex_color($attributes['fluentFormRadioCheckedColor']) : '';

$fluentFormRadioBorderWidth = isset($attributes['fluentFormRadioBorderWidth']) ? array_map('intval', $attributes['fluentFormRadioBorderWidth']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormRadioBorderWidthUnits = isset($attributes['fluentFormRadioBorderWidthUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioBorderWidthUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];


$fluentFormRadioBorderColor = isset($attributes['fluentFormRadioBorderColor']) ? sanitize_hex_color($attributes['fluentFormRadioBorderColor']) : '';
$fluentFormRadioBorderRadiusUnits = isset($attributes['fluentFormRadioBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormRadioBorderRadiusDesktop = isset($attributes['fluentFormRadioBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormRadioBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormRadioBorderRadiusTablet = isset($attributes['fluentFormRadioBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormRadioBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormRadioBorderRadiusMobile = isset($attributes['fluentFormRadioBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormRadioBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormRadioBorderRadiusDesktop */
$fluentFormRadioBorderRadiusDesktopString = "{$fluentFormRadioBorderRadiusDesktop['top']}{$fluentFormRadioBorderRadiusUnits['Desktop']} {$fluentFormRadioBorderRadiusDesktop['right']}{$fluentFormRadioBorderRadiusUnits['Desktop']} {$fluentFormRadioBorderRadiusDesktop['bottom']}{$fluentFormRadioBorderRadiusUnits['Desktop']} {$fluentFormRadioBorderRadiusDesktop['left']}{$fluentFormRadioBorderRadiusUnits['Desktop']}";
$fluentFormRadioBorderRadiusTabletString = "{$fluentFormRadioBorderRadiusTablet['top']}{$fluentFormRadioBorderRadiusUnits['Tablet']} {$fluentFormRadioBorderRadiusTablet['right']}{$fluentFormRadioBorderRadiusUnits['Tablet']} {$fluentFormRadioBorderRadiusTablet['bottom']}{$fluentFormRadioBorderRadiusUnits['Tablet']} {$fluentFormRadioBorderRadiusTablet['left']}{$fluentFormRadioBorderRadiusUnits['Tablet']}";
$fluentFormRadioBorderRadiusMobileString = "{$fluentFormRadioBorderRadiusMobile['top']}{$fluentFormRadioBorderRadiusUnits['Mobile']} {$fluentFormRadioBorderRadiusMobile['right']}{$fluentFormRadioBorderRadiusUnits['Mobile']} {$fluentFormRadioBorderRadiusMobile['bottom']}{$fluentFormRadioBorderRadiusUnits['Mobile']} {$fluentFormRadioBorderRadiusMobile['left']}{$fluentFormRadioBorderRadiusUnits['Mobile']}";
/** fluentFormRadioBorderRadiusDesktop */

$fluentFormCheckBoxBorderRadiusUnits = isset($attributes['fluentFormCheckBoxBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormCheckBoxBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormCheckBoxBorderRadiusDesktop = isset($attributes['fluentFormCheckBoxBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormCheckBoxBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormCheckBoxBorderRadiusTablet = isset($attributes['fluentFormCheckBoxBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormCheckBoxBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormCheckBoxBorderRadiusMobile = isset($attributes['fluentFormCheckBoxBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormCheckBoxBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormCheckBoxBorderRadiusDesktop */
$fluentFormCheckBoxBorderRadiusDesktopString = "{$fluentFormCheckBoxBorderRadiusDesktop['top']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']} {$fluentFormCheckBoxBorderRadiusDesktop['right']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']} {$fluentFormCheckBoxBorderRadiusDesktop['bottom']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']} {$fluentFormCheckBoxBorderRadiusDesktop['left']}{$fluentFormCheckBoxBorderRadiusUnits['Desktop']}";
$fluentFormCheckBoxBorderRadiusTabletString = "{$fluentFormCheckBoxBorderRadiusTablet['top']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']} {$fluentFormCheckBoxBorderRadiusTablet['right']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']} {$fluentFormCheckBoxBorderRadiusTablet['bottom']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']} {$fluentFormCheckBoxBorderRadiusTablet['left']}{$fluentFormCheckBoxBorderRadiusUnits['Tablet']}";
$fluentFormCheckBoxBorderRadiusMobileString = "{$fluentFormCheckBoxBorderRadiusMobile['top']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']} {$fluentFormCheckBoxBorderRadiusMobile['right']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']} {$fluentFormCheckBoxBorderRadiusMobile['bottom']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']} {$fluentFormCheckBoxBorderRadiusMobile['left']}{$fluentFormCheckBoxBorderRadiusUnits['Mobile']}";
/** fluentFormCheckBoxBorderRadiusDesktop */

$fluentFormRadioCheckBoxItemSpacing = isset($attributes['fluentFormRadioCheckBoxItemSpacing']) ? array_map('intval', $attributes['fluentFormRadioCheckBoxItemSpacing']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormRadioCheckBoxItemSpacingUnits = isset($attributes['fluentFormRadioCheckBoxItemSpacingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormRadioCheckBoxItemSpacingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$fluentFormSectionBreakAlignment = isset($attributes['fluentFormSectionBreakAlignment']) ? sanitize_text_field($attributes['fluentFormSectionBreakAlignment']) : 'left';
$fluentFormSectionBreakTitleColorSwitcher = isset($attributes['fluentFormSectionBreakTitleColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleColorSwitcher']) : 'normal';
$fluentFormSectionBreakTitleColor = isset($attributes['fluentFormSectionBreakTitleColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakTitleColor']) : '';
$fluentFormSectionBreakTitleHoverColor = isset($attributes['fluentFormSectionBreakTitleHoverColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakTitleHoverColor']) : '';
$fluentFormSectionBreakTitleFontFamily = isset($attributes['fluentFormSectionBreakTitleFontFamily']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontFamily']) : 'inherit';
$fluentFormSectionBreakTitleFontSize = isset($attributes['fluentFormSectionBreakTitleFontSize']) ? intval($attributes['fluentFormSectionBreakTitleFontSize']) : 0;
$fluentFormSectionBreakTitleFontSizeUnits = isset($attributes['fluentFormSectionBreakTitleFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontSizeUnits']) : 'px';
$fluentFormSectionBreakTitleFontWeight = isset($attributes['fluentFormSectionBreakTitleFontWeight']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontWeight']) : '';
$fluentFormSectionBreakTitleFontStyle = isset($attributes['fluentFormSectionBreakTitleFontStyle']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleFontStyle']) : 'normal';
$fluentFormSectionBreakTitleTextTransform = isset($attributes['fluentFormSectionBreakTitleTextTransform']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleTextTransform']) : 'none';
$fluentFormSectionBreakTitleTextDecoration = isset($attributes['fluentFormSectionBreakTitleTextDecoration']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleTextDecoration']) : 'none';
$fluentFormSectionBreakTitleLetterSpacing = isset($attributes['fluentFormSectionBreakTitleLetterSpacing']) ? intval($attributes['fluentFormSectionBreakTitleLetterSpacing']) : 0;
$fluentFormSectionBreakTitleLetterSpacingUnits = isset($attributes['fluentFormSectionBreakTitleLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleLetterSpacingUnits']) : 'px';
$fluentFormSectionBreakTitleLineHeight = isset($attributes['fluentFormSectionBreakTitleLineHeight']) ? intval($attributes['fluentFormSectionBreakTitleLineHeight']) : 0;
$fluentFormSectionBreakTitleLineHeightUnits = isset($attributes['fluentFormSectionBreakTitleLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakTitleLineHeightUnits']) : 'px';


$fluentFormSectionBreakTitlePaddingUnits = isset($attributes['fluentFormSectionBreakTitlePaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakTitlePaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakTitlePaddingDesktop = isset($attributes['fluentFormSectionBreakTitlePaddingDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakTitlePaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitlePaddingTablet = isset($attributes['fluentFormSectionBreakTitlePaddingTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakTitlePaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitlePaddingMobile = isset($attributes['fluentFormSectionBreakTitlePaddingMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakTitlePaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSectionBreakTitlePaddingDesktop */
$fluentFormSectionBreakTitlePaddingDesktopString = "{$fluentFormSectionBreakTitlePaddingDesktop['top']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']} {$fluentFormSectionBreakTitlePaddingDesktop['right']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']} {$fluentFormSectionBreakTitlePaddingDesktop['bottom']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']} {$fluentFormSectionBreakTitlePaddingDesktop['left']}{$fluentFormSectionBreakTitlePaddingUnits['Desktop']}";
$fluentFormSectionBreakTitlePaddingTabletString = "{$fluentFormSectionBreakTitlePaddingTablet['top']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']} {$fluentFormSectionBreakTitlePaddingTablet['right']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']} {$fluentFormSectionBreakTitlePaddingTablet['bottom']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']} {$fluentFormSectionBreakTitlePaddingTablet['left']}{$fluentFormSectionBreakTitlePaddingUnits['Tablet']}";
$fluentFormSectionBreakTitlePaddingMobileString = "{$fluentFormSectionBreakTitlePaddingMobile['top']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']} {$fluentFormSectionBreakTitlePaddingMobile['right']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']} {$fluentFormSectionBreakTitlePaddingMobile['bottom']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']} {$fluentFormSectionBreakTitlePaddingMobile['left']}{$fluentFormSectionBreakTitlePaddingUnits['Mobile']}";
/** fluentFormSectionBreakTitlePaddingDesktop */

$fluentFormSectionBreakTitleMarginUnits = isset($attributes['fluentFormSectionBreakTitleMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakTitleMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakTitleMarginDesktop = isset($attributes['fluentFormSectionBreakTitleMarginDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakTitleMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitleMarginTablet = isset($attributes['fluentFormSectionBreakTitleMarginTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakTitleMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakTitleMarginMobile = isset($attributes['fluentFormSectionBreakTitleMarginMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakTitleMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSectionBreakTitleMarginDesktop */
$fluentFormSectionBreakTitleMarginDesktopString = "{$fluentFormSectionBreakTitleMarginDesktop['top']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']} {$fluentFormSectionBreakTitleMarginDesktop['right']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']} {$fluentFormSectionBreakTitleMarginDesktop['bottom']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']} {$fluentFormSectionBreakTitleMarginDesktop['left']}{$fluentFormSectionBreakTitleMarginUnits['Desktop']}";
$fluentFormSectionBreakTitleMarginTabletString = "{$fluentFormSectionBreakTitleMarginTablet['top']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']} {$fluentFormSectionBreakTitleMarginTablet['right']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']} {$fluentFormSectionBreakTitleMarginTablet['bottom']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']} {$fluentFormSectionBreakTitleMarginTablet['left']}{$fluentFormSectionBreakTitleMarginUnits['Tablet']}";
$fluentFormSectionBreakTitleMarginMobileString = "{$fluentFormSectionBreakTitleMarginMobile['top']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']} {$fluentFormSectionBreakTitleMarginMobile['right']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']} {$fluentFormSectionBreakTitleMarginMobile['bottom']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']} {$fluentFormSectionBreakTitleMarginMobile['left']}{$fluentFormSectionBreakTitleMarginUnits['Mobile']}";
/** fluentFormSectionBreakTitleMarginDesktop */

$fluentFormSectionBreakDescColorSwitcher = isset($attributes['fluentFormSectionBreakDescColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescColorSwitcher']) : 'normal';
$fluentFormSectionBreakDescColor = isset($attributes['fluentFormSectionBreakDescColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakDescColor']) : '';
$fluentFormSectionBreakDescHoverColor = isset($attributes['fluentFormSectionBreakDescHoverColor']) ? sanitize_hex_color($attributes['fluentFormSectionBreakDescHoverColor']) : '';
$fluentFormSectionBreakDescFontFamily = isset($attributes['fluentFormSectionBreakDescFontFamily']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontFamily']) : 'inherit';
$fluentFormSectionBreakDescFontSize = isset($attributes['fluentFormSectionBreakDescFontSize']) ? intval($attributes['fluentFormSectionBreakDescFontSize']) : '';
$fluentFormSectionBreakDescFontSizeUnits = isset($attributes['fluentFormSectionBreakDescFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontSizeUnits']) : 'px';
$fluentFormSectionBreakDescFontWeight = isset($attributes['fluentFormSectionBreakDescFontWeight']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontWeight']) : '';
$fluentFormSectionBreakDescFontStyle = isset($attributes['fluentFormSectionBreakDescFontStyle']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescFontStyle']) : 'normal';
$fluentFormSectionBreakDescTextTransform = isset($attributes['fluentFormSectionBreakDescTextTransform']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescTextTransform']) : 'none';
$fluentFormSectionBreakDescTextDecoration = isset($attributes['fluentFormSectionBreakDescTextDecoration']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescTextDecoration']) : 'none';
$fluentFormSectionBreakDescLetterSpacing = isset($attributes['fluentFormSectionBreakDescLetterSpacing']) ? intval($attributes['fluentFormSectionBreakDescLetterSpacing']) : '';
$fluentFormSectionBreakDescLetterSpacingUnits = isset($attributes['fluentFormSectionBreakDescLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescLetterSpacingUnits']) : 'px';
$fluentFormSectionBreakDescLineHeight = isset($attributes['fluentFormSectionBreakDescLineHeight']) ? intval($attributes['fluentFormSectionBreakDescLineHeight']) : '';
$fluentFormSectionBreakDescLineHeightUnits = isset($attributes['fluentFormSectionBreakDescLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSectionBreakDescLineHeightUnits']) : 'px';


$fluentFormSectionBreakDescPaddingUnits = isset($attributes['fluentFormSectionBreakDescPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakDescPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakDescPaddingDesktop = isset($attributes['fluentFormSectionBreakDescPaddingDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakDescPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescPaddingTablet = isset($attributes['fluentFormSectionBreakDescPaddingTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakDescPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescPaddingMobile = isset($attributes['fluentFormSectionBreakDescPaddingMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakDescPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSectionBreakDescPaddingDesktop */
$fluentFormSectionBreakDescPaddingDesktopString = "{$fluentFormSectionBreakDescPaddingDesktop['top']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']} {$fluentFormSectionBreakDescPaddingDesktop['right']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']} {$fluentFormSectionBreakDescPaddingDesktop['bottom']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']} {$fluentFormSectionBreakDescPaddingDesktop['left']}{$fluentFormSectionBreakDescPaddingUnits['Desktop']}";
$fluentFormSectionBreakDescPaddingTabletString = "{$fluentFormSectionBreakDescPaddingTablet['top']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']} {$fluentFormSectionBreakDescPaddingTablet['right']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']} {$fluentFormSectionBreakDescPaddingTablet['bottom']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']} {$fluentFormSectionBreakDescPaddingTablet['left']}{$fluentFormSectionBreakDescPaddingUnits['Tablet']}";
$fluentFormSectionBreakDescPaddingMobileString = "{$fluentFormSectionBreakDescPaddingMobile['top']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']} {$fluentFormSectionBreakDescPaddingMobile['right']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']} {$fluentFormSectionBreakDescPaddingMobile['bottom']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']} {$fluentFormSectionBreakDescPaddingMobile['left']}{$fluentFormSectionBreakDescPaddingUnits['Mobile']}";
/** fluentFormSectionBreakDescPaddingDesktop */

$fluentFormSectionBreakDescMarginUnits = isset($attributes['fluentFormSectionBreakDescMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSectionBreakDescMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSectionBreakDescMarginDesktop = isset($attributes['fluentFormSectionBreakDescMarginDesktop']) ? array_map('intval', $attributes['fluentFormSectionBreakDescMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescMarginTablet = isset($attributes['fluentFormSectionBreakDescMarginTablet']) ? array_map('intval', $attributes['fluentFormSectionBreakDescMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSectionBreakDescMarginMobile = isset($attributes['fluentFormSectionBreakDescMarginMobile']) ? array_map('intval', $attributes['fluentFormSectionBreakDescMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSectionBreakDescMarginDesktop */
$fluentFormSectionBreakDescMarginDesktopString = "{$fluentFormSectionBreakDescMarginDesktop['top']}{$fluentFormSectionBreakDescMarginUnits['Desktop']} {$fluentFormSectionBreakDescMarginDesktop['right']}{$fluentFormSectionBreakDescMarginUnits['Desktop']} {$fluentFormSectionBreakDescMarginDesktop['bottom']}{$fluentFormSectionBreakDescMarginUnits['Desktop']} {$fluentFormSectionBreakDescMarginDesktop['left']}{$fluentFormSectionBreakDescMarginUnits['Desktop']}";
$fluentFormSectionBreakDescMarginTabletString = "{$fluentFormSectionBreakDescMarginTablet['top']}{$fluentFormSectionBreakDescMarginUnits['Tablet']} {$fluentFormSectionBreakDescMarginTablet['right']}{$fluentFormSectionBreakDescMarginUnits['Tablet']} {$fluentFormSectionBreakDescMarginTablet['bottom']}{$fluentFormSectionBreakDescMarginUnits['Tablet']} {$fluentFormSectionBreakDescMarginTablet['left']}{$fluentFormSectionBreakDescMarginUnits['Tablet']}";
$fluentFormSectionBreakDescMarginMobileString = "{$fluentFormSectionBreakDescMarginMobile['top']}{$fluentFormSectionBreakDescMarginUnits['Mobile']} {$fluentFormSectionBreakDescMarginMobile['right']}{$fluentFormSectionBreakDescMarginUnits['Mobile']} {$fluentFormSectionBreakDescMarginMobile['bottom']}{$fluentFormSectionBreakDescMarginUnits['Mobile']} {$fluentFormSectionBreakDescMarginMobile['left']}{$fluentFormSectionBreakDescMarginUnits['Mobile']}";
/** fluentFormSectionBreakDescMarginDesktop */



$fluentFormHtmlAlignment = isset($attributes['fluentFormHtmlAlignment']) ? sanitize_text_field($attributes['fluentFormHtmlAlignment']) : 'left';
$fluentFormHtmlColorSwitcher = isset($attributes['fluentFormHtmlColorSwitcher']) ? sanitize_text_field($attributes['fluentFormHtmlColorSwitcher']) : 'normal';
$fluentFormHtmlColor = isset($attributes['fluentFormHtmlColor']) ? sanitize_hex_color($attributes['fluentFormHtmlColor']) : '';
$fluentFormHtmlHoverColor = isset($attributes['fluentFormHtmlHoverColor']) ? sanitize_hex_color($attributes['fluentFormHtmlHoverColor']) : '';
$fluentFormHtmlFontFamily = isset($attributes['fluentFormHtmlFontFamily']) ? sanitize_text_field($attributes['fluentFormHtmlFontFamily']) : 'inherit';
$fluentFormHtmlFontSize = isset($attributes['fluentFormHtmlFontSize']) ? intval($attributes['fluentFormHtmlFontSize']) : '';
$fluentFormHtmlFontSizeUnits = isset($attributes['fluentFormHtmlFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormHtmlFontSizeUnits']) : 'px';
$fluentFormHtmlFontWeight = isset($attributes['fluentFormHtmlFontWeight']) ? sanitize_text_field($attributes['fluentFormHtmlFontWeight']) : '';
$fluentFormHtmlFontStyle = isset($attributes['fluentFormHtmlFontStyle']) ? sanitize_text_field($attributes['fluentFormHtmlFontStyle']) : 'normal';
$fluentFormHtmlTextTransform = isset($attributes['fluentFormHtmlTextTransform']) ? sanitize_text_field($attributes['fluentFormHtmlTextTransform']) : 'none';
$fluentFormHtmlTextDecoration = isset($attributes['fluentFormHtmlTextDecoration']) ? sanitize_text_field($attributes['fluentFormHtmlTextDecoration']) : 'none';
$fluentFormHtmlLetterSpacing = isset($attributes['fluentFormHtmlLetterSpacing']) ? intval($attributes['fluentFormHtmlLetterSpacing']) : '';
$fluentFormHtmlLetterSpacingUnits = isset($attributes['fluentFormHtmlLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormHtmlLetterSpacingUnits']) : 'px';
$fluentFormHtmlLineHeight = isset($attributes['fluentFormHtmlLineHeight']) ? intval($attributes['fluentFormHtmlLineHeight']) : '';
$fluentFormHtmlLineHeightUnits = isset($attributes['fluentFormHtmlLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormHtmlLineHeightUnits']) : 'px';


$fluentFormHtmlPaddingUnits = isset($attributes['fluentFormHtmlPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormHtmlPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormHtmlPaddingDesktop = isset($attributes['fluentFormHtmlPaddingDesktop']) ? array_map('intval', $attributes['fluentFormHtmlPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlPaddingTablet = isset($attributes['fluentFormHtmlPaddingTablet']) ? array_map('intval', $attributes['fluentFormHtmlPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlPaddingMobile = isset($attributes['fluentFormHtmlPaddingMobile']) ? array_map('intval', $attributes['fluentFormHtmlPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormHtmlPaddingDesktop */
$fluentFormHtmlPaddingDesktopString = "{$fluentFormHtmlPaddingDesktop['top']}{$fluentFormHtmlPaddingUnits['Desktop']} {$fluentFormHtmlPaddingDesktop['right']}{$fluentFormHtmlPaddingUnits['Desktop']} {$fluentFormHtmlPaddingDesktop['bottom']}{$fluentFormHtmlPaddingUnits['Desktop']} {$fluentFormHtmlPaddingDesktop['left']}{$fluentFormHtmlPaddingUnits['Desktop']}";
$fluentFormHtmlPaddingTabletString = "{$fluentFormHtmlPaddingTablet['top']}{$fluentFormHtmlPaddingUnits['Tablet']} {$fluentFormHtmlPaddingTablet['right']}{$fluentFormHtmlPaddingUnits['Tablet']} {$fluentFormHtmlPaddingTablet['bottom']}{$fluentFormHtmlPaddingUnits['Tablet']} {$fluentFormHtmlPaddingTablet['left']}{$fluentFormHtmlPaddingUnits['Tablet']}";
$fluentFormHtmlPaddingMobileString = "{$fluentFormHtmlPaddingMobile['top']}{$fluentFormHtmlPaddingUnits['Mobile']} {$fluentFormHtmlPaddingMobile['right']}{$fluentFormHtmlPaddingUnits['Mobile']} {$fluentFormHtmlPaddingMobile['bottom']}{$fluentFormHtmlPaddingUnits['Mobile']} {$fluentFormHtmlPaddingMobile['left']}{$fluentFormHtmlPaddingUnits['Mobile']}";
/** fluentFormHtmlPaddingDesktop */

$fluentFormHtmlMarginUnits = isset($attributes['fluentFormHtmlMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormHtmlMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormHtmlMarginDesktop = isset($attributes['fluentFormHtmlMarginDesktop']) ? array_map('intval', $attributes['fluentFormHtmlMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlMarginTablet = isset($attributes['fluentFormHtmlMarginTablet']) ? array_map('intval', $attributes['fluentFormHtmlMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormHtmlMarginMobile = isset($attributes['fluentFormHtmlMarginMobile']) ? array_map('intval', $attributes['fluentFormHtmlMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormHtmlMarginDesktop */
$fluentFormHtmlMarginDesktopString = "{$fluentFormHtmlMarginDesktop['top']}{$fluentFormHtmlMarginUnits['Desktop']} {$fluentFormHtmlMarginDesktop['right']}{$fluentFormHtmlMarginUnits['Desktop']} {$fluentFormHtmlMarginDesktop['bottom']}{$fluentFormHtmlMarginUnits['Desktop']} {$fluentFormHtmlMarginDesktop['left']}{$fluentFormHtmlMarginUnits['Desktop']}";
$fluentFormHtmlMarginTabletString = "{$fluentFormHtmlMarginTablet['top']}{$fluentFormHtmlMarginUnits['Tablet']} {$fluentFormHtmlMarginTablet['right']}{$fluentFormHtmlMarginUnits['Tablet']} {$fluentFormHtmlMarginTablet['bottom']}{$fluentFormHtmlMarginUnits['Tablet']} {$fluentFormHtmlMarginTablet['left']}{$fluentFormHtmlMarginUnits['Tablet']}";
$fluentFormHtmlMarginMobileString = "{$fluentFormHtmlMarginMobile['top']}{$fluentFormHtmlMarginUnits['Mobile']} {$fluentFormHtmlMarginMobile['right']}{$fluentFormHtmlMarginUnits['Mobile']} {$fluentFormHtmlMarginMobile['bottom']}{$fluentFormHtmlMarginUnits['Mobile']} {$fluentFormHtmlMarginMobile['left']}{$fluentFormHtmlMarginUnits['Mobile']}";
/** fluentFormHtmlMarginDesktop */

$fluentFormSubmitAlignment = isset($attributes['fluentFormSubmitAlignment']) ? sanitize_text_field($attributes['fluentFormSubmitAlignment']) : 'left';
$fluentFormSubmitHeight = isset($attributes['fluentFormSubmitHeight']) ? array_map('intval', $attributes['fluentFormSubmitHeight']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormSubmitHeightUnits = isset($attributes['fluentFormSubmitHeightUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitHeightUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitWidthSelect = isset($attributes['fluentFormSubmitWidthSelect']) ? sanitize_text_field($attributes['fluentFormSubmitWidthSelect']) : 'custom';
$fluentFormSubmitWidth = isset($attributes['fluentFormSubmitWidth']) ? array_map('intval', $attributes['fluentFormSubmitWidth']) : ['Desktop' => '', 'Tablet' => '', 'Mobile' => ''];
$fluentFormSubmitWidthUnits = isset($attributes['fluentFormSubmitWidthUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitWidthUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitColorSwitcher = isset($attributes['fluentFormSubmitColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSubmitColorSwitcher']) : 'normal';
$fluentFormSubmitColor = isset($attributes['fluentFormSubmitColor']) ? sanitize_hex_color($attributes['fluentFormSubmitColor']) : '';
$fluentFormSubmitHoverColor = isset($attributes['fluentFormSubmitHoverColor']) ? sanitize_hex_color($attributes['fluentFormSubmitHoverColor']) : '';
$fluentFormSubmitBgColorSwitcher = isset($attributes['fluentFormSubmitBgColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSubmitBgColorSwitcher']) : 'normal';
$fluentFormSubmitBgColor = isset($attributes['fluentFormSubmitBgColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBgColor']) : '';
$fluentFormSubmitBgHoverColor = isset($attributes['fluentFormSubmitBgHoverColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBgHoverColor']) : '';
$fluentFormSubmitFontFamily = isset($attributes['fluentFormSubmitFontFamily']) ? sanitize_text_field($attributes['fluentFormSubmitFontFamily']) : 'inherit';
$fluentFormSubmitFontSize = isset($attributes['fluentFormSubmitFontSize']) ? intval($attributes['fluentFormSubmitFontSize']) : '';
$fluentFormSubmitFontSizeUnits = isset($attributes['fluentFormSubmitFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSubmitFontSizeUnits']) : 'px';
$fluentFormSubmitFontWeight = isset($attributes['fluentFormSubmitFontWeight']) ? sanitize_text_field($attributes['fluentFormSubmitFontWeight']) : '';
$fluentFormSubmitFontStyle = isset($attributes['fluentFormSubmitFontStyle']) ? sanitize_text_field($attributes['fluentFormSubmitFontStyle']) : 'normal';
$fluentFormSubmitTextTransform = isset($attributes['fluentFormSubmitTextTransform']) ? sanitize_text_field($attributes['fluentFormSubmitTextTransform']) : 'none';
$fluentFormSubmitTextDecoration = isset($attributes['fluentFormSubmitTextDecoration']) ? sanitize_text_field($attributes['fluentFormSubmitTextDecoration']) : 'none';
$fluentFormSubmitLetterSpacing = isset($attributes['fluentFormSubmitLetterSpacing']) ? intval($attributes['fluentFormSubmitLetterSpacing']) : '';
$fluentFormSubmitLetterSpacingUnits = isset($attributes['fluentFormSubmitLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSubmitLetterSpacingUnits']) : 'px';
$fluentFormSubmitLineHeight = isset($attributes['fluentFormSubmitLineHeight']) ? intval($attributes['fluentFormSubmitLineHeight']) : '';
$fluentFormSubmitLineHeightUnits = isset($attributes['fluentFormSubmitLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSubmitLineHeightUnits']) : 'px';


$fluentFormSubmitPaddingUnits = isset($attributes['fluentFormSubmitPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitPaddingDesktop = isset($attributes['fluentFormSubmitPaddingDesktop']) ? array_map('intval', $attributes['fluentFormSubmitPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitPaddingTablet = isset($attributes['fluentFormSubmitPaddingTablet']) ? array_map('intval', $attributes['fluentFormSubmitPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitPaddingMobile = isset($attributes['fluentFormSubmitPaddingMobile']) ? array_map('intval', $attributes['fluentFormSubmitPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSubmitPaddingDesktop */
$fluentFormSubmitPaddingDesktopString = "{$fluentFormSubmitPaddingDesktop['top']}{$fluentFormSubmitPaddingUnits['Desktop']} {$fluentFormSubmitPaddingDesktop['right']}{$fluentFormSubmitPaddingUnits['Desktop']} {$fluentFormSubmitPaddingDesktop['bottom']}{$fluentFormSubmitPaddingUnits['Desktop']} {$fluentFormSubmitPaddingDesktop['left']}{$fluentFormSubmitPaddingUnits['Desktop']}";
$fluentFormSubmitPaddingTabletString = "{$fluentFormSubmitPaddingTablet['top']}{$fluentFormSubmitPaddingUnits['Tablet']} {$fluentFormSubmitPaddingTablet['right']}{$fluentFormSubmitPaddingUnits['Tablet']} {$fluentFormSubmitPaddingTablet['bottom']}{$fluentFormSubmitPaddingUnits['Tablet']} {$fluentFormSubmitPaddingTablet['left']}{$fluentFormSubmitPaddingUnits['Tablet']}";
$fluentFormSubmitPaddingMobileString = "{$fluentFormSubmitPaddingMobile['top']}{$fluentFormSubmitPaddingUnits['Mobile']} {$fluentFormSubmitPaddingMobile['right']}{$fluentFormSubmitPaddingUnits['Mobile']} {$fluentFormSubmitPaddingMobile['bottom']}{$fluentFormSubmitPaddingUnits['Mobile']} {$fluentFormSubmitPaddingMobile['left']}{$fluentFormSubmitPaddingUnits['Mobile']}";
/** fluentFormSubmitPaddingDesktop */


$fluentFormSubmitMarginUnits = isset($attributes['fluentFormSubmitMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitMarginDesktop = isset($attributes['fluentFormSubmitMarginDesktop']) ? array_map('intval', $attributes['fluentFormSubmitMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitMarginTablet = isset($attributes['fluentFormSubmitMarginTablet']) ? array_map('intval', $attributes['fluentFormSubmitMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitMarginMobile = isset($attributes['fluentFormSubmitMarginMobile']) ? array_map('intval', $attributes['fluentFormSubmitMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSubmitMarginDesktop */
$fluentFormSubmitMarginDesktopString = "{$fluentFormSubmitMarginDesktop['top']}{$fluentFormSubmitMarginUnits['Desktop']} {$fluentFormSubmitMarginDesktop['right']}{$fluentFormSubmitMarginUnits['Desktop']} {$fluentFormSubmitMarginDesktop['bottom']}{$fluentFormSubmitMarginUnits['Desktop']} {$fluentFormSubmitMarginDesktop['left']}{$fluentFormSubmitMarginUnits['Desktop']}";
$fluentFormSubmitMarginTabletString = "{$fluentFormSubmitMarginTablet['top']}{$fluentFormSubmitMarginUnits['Tablet']} {$fluentFormSubmitMarginTablet['right']}{$fluentFormSubmitMarginUnits['Tablet']} {$fluentFormSubmitMarginTablet['bottom']}{$fluentFormSubmitMarginUnits['Tablet']} {$fluentFormSubmitMarginTablet['left']}{$fluentFormSubmitMarginUnits['Tablet']}";
$fluentFormSubmitMarginMobileString = "{$fluentFormSubmitMarginMobile['top']}{$fluentFormSubmitMarginUnits['Mobile']} {$fluentFormSubmitMarginMobile['right']}{$fluentFormSubmitMarginUnits['Mobile']} {$fluentFormSubmitMarginMobile['bottom']}{$fluentFormSubmitMarginUnits['Mobile']} {$fluentFormSubmitMarginMobile['left']}{$fluentFormSubmitMarginUnits['Mobile']}";
/** fluentFormSubmitMarginDesktop */


$fluentFormSubmitBorder = isset($attributes['fluentFormSubmitBorder']) ? sanitize_text_field($attributes['fluentFormSubmitBorder']) : 'none';
$fluentFormSubmitBorderColorSwitcher = isset($attributes['fluentFormSubmitBorderColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSubmitBorderColorSwitcher']) : 'normal';
$fluentFormSubmitBorderColor = isset($attributes['fluentFormSubmitBorderColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBorderColor']) : '';
$fluentFormSubmitBorderHoverColor = isset($attributes['fluentFormSubmitBorderHoverColor']) ? sanitize_hex_color($attributes['fluentFormSubmitBorderHoverColor']) : '';


$fluentFormSubmitBorderUnits = isset($attributes['fluentFormSubmitBorderUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitBorderDesktop = isset($attributes['fluentFormSubmitBorderDesktop']) ? array_map('intval', $attributes['fluentFormSubmitBorderDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderTablet = isset($attributes['fluentFormSubmitBorderTablet']) ? array_map('intval', $attributes['fluentFormSubmitBorderTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderMobile = isset($attributes['fluentFormSubmitBorderMobile']) ? array_map('intval', $attributes['fluentFormSubmitBorderMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSubmitBorderDesktop */
$fluentFormSubmitBorderDesktopString = "{$fluentFormSubmitBorderDesktop['top']}{$fluentFormSubmitBorderUnits['Desktop']} {$fluentFormSubmitBorderDesktop['right']}{$fluentFormSubmitBorderUnits['Desktop']} {$fluentFormSubmitBorderDesktop['bottom']}{$fluentFormSubmitBorderUnits['Desktop']} {$fluentFormSubmitBorderDesktop['left']}{$fluentFormSubmitBorderUnits['Desktop']}";
$fluentFormSubmitBorderTabletString = "{$fluentFormSubmitBorderTablet['top']}{$fluentFormSubmitBorderUnits['Tablet']} {$fluentFormSubmitBorderTablet['right']}{$fluentFormSubmitBorderUnits['Tablet']} {$fluentFormSubmitBorderTablet['bottom']}{$fluentFormSubmitBorderUnits['Tablet']} {$fluentFormSubmitBorderTablet['left']}{$fluentFormSubmitBorderUnits['Tablet']}";
$fluentFormSubmitBorderMobileString = "{$fluentFormSubmitBorderMobile['top']}{$fluentFormSubmitBorderUnits['Mobile']} {$fluentFormSubmitBorderMobile['right']}{$fluentFormSubmitBorderUnits['Mobile']} {$fluentFormSubmitBorderMobile['bottom']}{$fluentFormSubmitBorderUnits['Mobile']} {$fluentFormSubmitBorderMobile['left']}{$fluentFormSubmitBorderUnits['Mobile']}";
/** fluentFormSubmitBorderDesktop */

$fluentFormSubmitBorderRadiusUnits = isset($attributes['fluentFormSubmitBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSubmitBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSubmitBorderRadiusDesktop = isset($attributes['fluentFormSubmitBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormSubmitBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderRadiusTablet = isset($attributes['fluentFormSubmitBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormSubmitBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSubmitBorderRadiusMobile = isset($attributes['fluentFormSubmitBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormSubmitBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSubmitBorderRadiusDesktop */
$fluentFormSubmitBorderRadiusDesktopString = "{$fluentFormSubmitBorderRadiusDesktop['top']}{$fluentFormSubmitBorderRadiusUnits['Desktop']} {$fluentFormSubmitBorderRadiusDesktop['right']}{$fluentFormSubmitBorderRadiusUnits['Desktop']} {$fluentFormSubmitBorderRadiusDesktop['bottom']}{$fluentFormSubmitBorderRadiusUnits['Desktop']} {$fluentFormSubmitBorderRadiusDesktop['left']}{$fluentFormSubmitBorderRadiusUnits['Desktop']}";
$fluentFormSubmitBorderRadiusTabletString = "{$fluentFormSubmitBorderRadiusTablet['top']}{$fluentFormSubmitBorderRadiusUnits['Tablet']} {$fluentFormSubmitBorderRadiusTablet['right']}{$fluentFormSubmitBorderRadiusUnits['Tablet']} {$fluentFormSubmitBorderRadiusTablet['bottom']}{$fluentFormSubmitBorderRadiusUnits['Tablet']} {$fluentFormSubmitBorderRadiusTablet['left']}{$fluentFormSubmitBorderRadiusUnits['Tablet']}";
$fluentFormSubmitBorderRadiusMobileString = "{$fluentFormSubmitBorderRadiusMobile['top']}{$fluentFormSubmitBorderRadiusUnits['Mobile']} {$fluentFormSubmitBorderRadiusMobile['right']}{$fluentFormSubmitBorderRadiusUnits['Mobile']} {$fluentFormSubmitBorderRadiusMobile['bottom']}{$fluentFormSubmitBorderRadiusUnits['Mobile']} {$fluentFormSubmitBorderRadiusMobile['left']}{$fluentFormSubmitBorderRadiusUnits['Mobile']}";
/** fluentFormSubmitBorderRadiusDesktop */


$fluentFormSuccessColor = isset($attributes['fluentFormSuccessColor']) ? sanitize_hex_color($attributes['fluentFormSuccessColor']) : '';
$fluentFormSuccessBgColor = isset($attributes['fluentFormSuccessBgColor']) ? sanitize_hex_color($attributes['fluentFormSuccessBgColor']) : '';
$fluentFormSuccessFontFamily = isset($attributes['fluentFormSuccessFontFamily']) ? sanitize_text_field($attributes['fluentFormSuccessFontFamily']) : 'inherit';
$fluentFormSuccessFontSize = isset($attributes['fluentFormSuccessFontSize']) ? intval($attributes['fluentFormSuccessFontSize']) : '';
$fluentFormSuccessFontSizeUnits = isset($attributes['fluentFormSuccessFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormSuccessFontSizeUnits']) : 'px';
$fluentFormSuccessFontWeight = isset($attributes['fluentFormSuccessFontWeight']) ? sanitize_text_field($attributes['fluentFormSuccessFontWeight']) : '';
$fluentFormSuccessFontStyle = isset($attributes['fluentFormSuccessFontStyle']) ? sanitize_text_field($attributes['fluentFormSuccessFontStyle']) : 'normal';
$fluentFormSuccessTextTransform = isset($attributes['fluentFormSuccessTextTransform']) ? sanitize_text_field($attributes['fluentFormSuccessTextTransform']) : 'none';
$fluentFormSuccessTextDecoration = isset($attributes['fluentFormSuccessTextDecoration']) ? sanitize_text_field($attributes['fluentFormSuccessTextDecoration']) : 'none';
$fluentFormSuccessLetterSpacing = isset($attributes['fluentFormSuccessLetterSpacing']) ? intval($attributes['fluentFormSuccessLetterSpacing']) : '';
$fluentFormSuccessLetterSpacingUnits = isset($attributes['fluentFormSuccessLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormSuccessLetterSpacingUnits']) : 'px';
$fluentFormSuccessLineHeight = isset($attributes['fluentFormSuccessLineHeight']) ? intval($attributes['fluentFormSuccessLineHeight']) : '';
$fluentFormSuccessLineHeightUnits = isset($attributes['fluentFormSuccessLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormSuccessLineHeightUnits']) : 'px';
$fluentFormSuccessBorder = isset($attributes['fluentFormSuccessBorder']) ? sanitize_text_field($attributes['fluentFormSuccessBorder']) : 'none';
$fluentFormSuccessBorderColorSwitcher = isset($attributes['fluentFormSuccessBorderColorSwitcher']) ? sanitize_text_field($attributes['fluentFormSuccessBorderColorSwitcher']) : 'normal';
$fluentFormSuccessBorderColor = isset($attributes['fluentFormSuccessBorderColor']) ? sanitize_hex_color($attributes['fluentFormSuccessBorderColor']) : '';
$fluentFormSuccessBorderHoverColor = isset($attributes['fluentFormSuccessBorderHoverColor']) ? sanitize_hex_color($attributes['fluentFormSuccessBorderHoverColor']) : '';

$fluentFormSuccessBorderUnits = isset($attributes['fluentFormSuccessBorderUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSuccessBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSuccessBorderDesktop = isset($attributes['fluentFormSuccessBorderDesktop']) ? array_map('intval', $attributes['fluentFormSuccessBorderDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderTablet = isset($attributes['fluentFormSuccessBorderTablet']) ? array_map('intval', $attributes['fluentFormSuccessBorderTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderMobile = isset($attributes['fluentFormSuccessBorderMobile']) ? array_map('intval', $attributes['fluentFormSuccessBorderMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSuccessBorderDesktop */
$fluentFormSuccessBorderDesktopString = "{$fluentFormSuccessBorderDesktop['top']}{$fluentFormSuccessBorderUnits['Desktop']} {$fluentFormSuccessBorderDesktop['right']}{$fluentFormSuccessBorderUnits['Desktop']} {$fluentFormSuccessBorderDesktop['bottom']}{$fluentFormSuccessBorderUnits['Desktop']} {$fluentFormSuccessBorderDesktop['left']}{$fluentFormSuccessBorderUnits['Desktop']}";
$fluentFormSuccessBorderTabletString = "{$fluentFormSuccessBorderTablet['top']}{$fluentFormSuccessBorderUnits['Tablet']} {$fluentFormSuccessBorderTablet['right']}{$fluentFormSuccessBorderUnits['Tablet']} {$fluentFormSuccessBorderTablet['bottom']}{$fluentFormSuccessBorderUnits['Tablet']} {$fluentFormSuccessBorderTablet['left']}{$fluentFormSuccessBorderUnits['Tablet']}";
$fluentFormSuccessBorderMobileString = "{$fluentFormSuccessBorderMobile['top']}{$fluentFormSuccessBorderUnits['Mobile']} {$fluentFormSuccessBorderMobile['right']}{$fluentFormSuccessBorderUnits['Mobile']} {$fluentFormSuccessBorderMobile['bottom']}{$fluentFormSuccessBorderUnits['Mobile']} {$fluentFormSuccessBorderMobile['left']}{$fluentFormSuccessBorderUnits['Mobile']}";
/** fluentFormSuccessBorderDesktop */

$fluentFormSuccessBorderRadiusUnits = isset($attributes['fluentFormSuccessBorderRadiusUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormSuccessBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormSuccessBorderRadiusDesktop = isset($attributes['fluentFormSuccessBorderRadiusDesktop']) ? array_map('intval', $attributes['fluentFormSuccessBorderRadiusDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderRadiusTablet = isset($attributes['fluentFormSuccessBorderRadiusTablet']) ? array_map('intval', $attributes['fluentFormSuccessBorderRadiusTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormSuccessBorderRadiusMobile = isset($attributes['fluentFormSuccessBorderRadiusMobile']) ? array_map('intval', $attributes['fluentFormSuccessBorderRadiusMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormSuccessBorderRadiusDesktop */
$fluentFormSuccessBorderRadiusDesktopString = "{$fluentFormSuccessBorderRadiusDesktop['top']}{$fluentFormSuccessBorderRadiusUnits['Desktop']} {$fluentFormSuccessBorderRadiusDesktop['right']}{$fluentFormSuccessBorderRadiusUnits['Desktop']} {$fluentFormSuccessBorderRadiusDesktop['bottom']}{$fluentFormSuccessBorderRadiusUnits['Desktop']} {$fluentFormSuccessBorderRadiusDesktop['left']}{$fluentFormSuccessBorderRadiusUnits['Desktop']}";
$fluentFormSuccessBorderRadiusTabletString = "{$fluentFormSuccessBorderRadiusTablet['top']}{$fluentFormSuccessBorderRadiusUnits['Tablet']} {$fluentFormSuccessBorderRadiusTablet['right']}{$fluentFormSuccessBorderRadiusUnits['Tablet']} {$fluentFormSuccessBorderRadiusTablet['bottom']}{$fluentFormSuccessBorderRadiusUnits['Tablet']} {$fluentFormSuccessBorderRadiusTablet['left']}{$fluentFormSuccessBorderRadiusUnits['Tablet']}";
$fluentFormSuccessBorderRadiusMobileString = "{$fluentFormSuccessBorderRadiusMobile['top']}{$fluentFormSuccessBorderRadiusUnits['Mobile']} {$fluentFormSuccessBorderRadiusMobile['right']}{$fluentFormSuccessBorderRadiusUnits['Mobile']} {$fluentFormSuccessBorderRadiusMobile['bottom']}{$fluentFormSuccessBorderRadiusUnits['Mobile']} {$fluentFormSuccessBorderRadiusMobile['left']}{$fluentFormSuccessBorderRadiusUnits['Mobile']}";
/** fluentFormSuccessBorderRadiusDesktop */


$fluentFormErrorColor = isset($attributes['fluentFormErrorColor']) ? sanitize_hex_color($attributes['fluentFormErrorColor']) : '';
$fluentFormErrorFontFamily = isset($attributes['fluentFormErrorFontFamily']) ? sanitize_text_field($attributes['fluentFormErrorFontFamily']) : 'inherit';
$fluentFormErrorFontSize = isset($attributes['fluentFormErrorFontSize']) ? intval($attributes['fluentFormErrorFontSize']) : '';
$fluentFormErrorFontSizeUnits = isset($attributes['fluentFormErrorFontSizeUnits']) ? sanitize_text_field($attributes['fluentFormErrorFontSizeUnits']) : 'px';
$fluentFormErrorFontWeight = isset($attributes['fluentFormErrorFontWeight']) ? sanitize_text_field($attributes['fluentFormErrorFontWeight']) : '';
$fluentFormErrorFontStyle = isset($attributes['fluentFormErrorFontStyle']) ? sanitize_text_field($attributes['fluentFormErrorFontStyle']) : 'normal';
$fluentFormErrorTextTransform = isset($attributes['fluentFormErrorTextTransform']) ? sanitize_text_field($attributes['fluentFormErrorTextTransform']) : 'none';
$fluentFormErrorTextDecoration = isset($attributes['fluentFormErrorTextDecoration']) ? sanitize_text_field($attributes['fluentFormErrorTextDecoration']) : 'none';
$fluentFormErrorLetterSpacing = isset($attributes['fluentFormErrorLetterSpacing']) ? intval($attributes['fluentFormErrorLetterSpacing']) : '';
$fluentFormErrorLetterSpacingUnits = isset($attributes['fluentFormErrorLetterSpacingUnits']) ? sanitize_text_field($attributes['fluentFormErrorLetterSpacingUnits']) : 'px';
$fluentFormErrorLineHeight = isset($attributes['fluentFormErrorLineHeight']) ? intval($attributes['fluentFormErrorLineHeight']) : '';
$fluentFormErrorLineHeightUnits = isset($attributes['fluentFormErrorLineHeightUnits']) ? sanitize_text_field($attributes['fluentFormErrorLineHeightUnits']) : 'px';

$fluentFormErrorPaddingUnits = isset($attributes['fluentFormErrorPaddingUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormErrorPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormErrorPaddingDesktop = isset($attributes['fluentFormErrorPaddingDesktop']) ? array_map('intval', $attributes['fluentFormErrorPaddingDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorPaddingTablet = isset($attributes['fluentFormErrorPaddingTablet']) ? array_map('intval', $attributes['fluentFormErrorPaddingTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorPaddingMobile = isset($attributes['fluentFormErrorPaddingMobile']) ? array_map('intval', $attributes['fluentFormErrorPaddingMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormErrorPaddingDesktop */
$fluentFormErrorPaddingDesktopString = "{$fluentFormErrorPaddingDesktop['top']}{$fluentFormErrorPaddingUnits['Desktop']} {$fluentFormErrorPaddingDesktop['right']}{$fluentFormErrorPaddingUnits['Desktop']} {$fluentFormErrorPaddingDesktop['bottom']}{$fluentFormErrorPaddingUnits['Desktop']} {$fluentFormErrorPaddingDesktop['left']}{$fluentFormErrorPaddingUnits['Desktop']}";
$fluentFormErrorPaddingTabletString = "{$fluentFormErrorPaddingTablet['top']}{$fluentFormErrorPaddingUnits['Tablet']} {$fluentFormErrorPaddingTablet['right']}{$fluentFormErrorPaddingUnits['Tablet']} {$fluentFormErrorPaddingTablet['bottom']}{$fluentFormErrorPaddingUnits['Tablet']} {$fluentFormErrorPaddingTablet['left']}{$fluentFormErrorPaddingUnits['Tablet']}";
$fluentFormErrorPaddingMobileString = "{$fluentFormErrorPaddingMobile['top']}{$fluentFormErrorPaddingUnits['Mobile']} {$fluentFormErrorPaddingMobile['right']}{$fluentFormErrorPaddingUnits['Mobile']} {$fluentFormErrorPaddingMobile['bottom']}{$fluentFormErrorPaddingUnits['Mobile']} {$fluentFormErrorPaddingMobile['left']}{$fluentFormErrorPaddingUnits['Mobile']}";
/** fluentFormErrorPaddingDesktop */

$fluentFormErrorMarginUnits = isset($attributes['fluentFormErrorMarginUnits']) ? array_map('sanitize_text_field', $attributes['fluentFormErrorMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$fluentFormErrorMarginDesktop = isset($attributes['fluentFormErrorMarginDesktop']) ? array_map('intval', $attributes['fluentFormErrorMarginDesktop']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorMarginTablet = isset($attributes['fluentFormErrorMarginTablet']) ? array_map('intval', $attributes['fluentFormErrorMarginTablet']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$fluentFormErrorMarginMobile = isset($attributes['fluentFormErrorMarginMobile']) ? array_map('intval', $attributes['fluentFormErrorMarginMobile']) : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** fluentFormErrorMarginDesktop */
$fluentFormErrorMarginDesktopString = "{$fluentFormErrorMarginDesktop['top']}{$fluentFormErrorMarginUnits['Desktop']} {$fluentFormErrorMarginDesktop['right']}{$fluentFormErrorMarginUnits['Desktop']} {$fluentFormErrorMarginDesktop['bottom']}{$fluentFormErrorMarginUnits['Desktop']} {$fluentFormErrorMarginDesktop['left']}{$fluentFormErrorMarginUnits['Desktop']}";
$fluentFormErrorMarginTabletString = "{$fluentFormErrorMarginTablet['top']}{$fluentFormErrorMarginUnits['Tablet']} {$fluentFormErrorMarginTablet['right']}{$fluentFormErrorMarginUnits['Tablet']} {$fluentFormErrorMarginTablet['bottom']}{$fluentFormErrorMarginUnits['Tablet']} {$fluentFormErrorMarginTablet['left']}{$fluentFormErrorMarginUnits['Tablet']}";
$fluentFormErrorMarginMobileString = "{$fluentFormErrorMarginMobile['top']}{$fluentFormErrorMarginUnits['Mobile']} {$fluentFormErrorMarginMobile['right']}{$fluentFormErrorMarginUnits['Mobile']} {$fluentFormErrorMarginMobile['bottom']}{$fluentFormErrorMarginUnits['Mobile']} {$fluentFormErrorMarginMobile['left']}{$fluentFormErrorMarginUnits['Mobile']}";
/** fluentFormErrorMarginDesktop */

$fluentFormGlobalPaddingUnits = isset( $attributes['fluentFormGlobalPaddingUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalPaddingUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalPaddingDesktop = isset( $attributes['fluentFormGlobalPaddingDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalPaddingTablet = isset( $attributes['fluentFormGlobalPaddingTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalPaddingMobile = isset( $attributes['fluentFormGlobalPaddingMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalPaddingMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
/** For fluentFormGlobalPaddingDesktop */
$DesktopPadding = "{$fluentFormGlobalPaddingDesktop['top']}{$fluentFormGlobalPaddingUnits['Desktop']} {$fluentFormGlobalPaddingDesktop['right']}{$fluentFormGlobalPaddingUnits['Desktop']} {$fluentFormGlobalPaddingDesktop['bottom']}{$fluentFormGlobalPaddingUnits['Desktop']} {$fluentFormGlobalPaddingDesktop['left']}{$fluentFormGlobalPaddingUnits['Desktop']}";
$TabletPadding = "{$fluentFormGlobalPaddingTablet['top']}{$fluentFormGlobalPaddingUnits['Tablet']} {$fluentFormGlobalPaddingTablet['right']}{$fluentFormGlobalPaddingUnits['Tablet']} {$fluentFormGlobalPaddingTablet['bottom']}{$fluentFormGlobalPaddingUnits['Tablet']} {$fluentFormGlobalPaddingTablet['left']}{$fluentFormGlobalPaddingUnits['Tablet']}";
$MobilePadding = "{$fluentFormGlobalPaddingMobile['top']}{$fluentFormGlobalPaddingUnits['Mobile']} {$fluentFormGlobalPaddingMobile['right']}{$fluentFormGlobalPaddingUnits['Mobile']} {$fluentFormGlobalPaddingMobile['bottom']}{$fluentFormGlobalPaddingUnits['Mobile']} {$fluentFormGlobalPaddingMobile['left']}{$fluentFormGlobalPaddingUnits['Mobile']}";
/** For fluentFormGlobalPaddingDesktop */

$fluentFormGlobalMarginUnits = isset( $attributes['fluentFormGlobalMarginUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalMarginUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalMarginDesktop = isset( $attributes['fluentFormGlobalMarginDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalMarginTablet = isset( $attributes['fluentFormGlobalMarginTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalMarginMobile = isset( $attributes['fluentFormGlobalMarginMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalMarginMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
/** For fluentFormGlobalMarginMobile */
$DesktopMargin = "{$fluentFormGlobalMarginDesktop['top']}{$fluentFormGlobalMarginUnits['Desktop']} {$fluentFormGlobalMarginDesktop['right']}{$fluentFormGlobalMarginUnits['Desktop']} {$fluentFormGlobalMarginDesktop['bottom']}{$fluentFormGlobalMarginUnits['Desktop']} {$fluentFormGlobalMarginDesktop['left']}{$fluentFormGlobalMarginUnits['Desktop']}";
$TabletMargin = "{$fluentFormGlobalMarginTablet['top']}{$fluentFormGlobalMarginUnits['Tablet']} {$fluentFormGlobalMarginTablet['right']}{$fluentFormGlobalMarginUnits['Tablet']} {$fluentFormGlobalMarginTablet['bottom']}{$fluentFormGlobalMarginUnits['Tablet']} {$fluentFormGlobalMarginTablet['left']}{$fluentFormGlobalMarginUnits['Tablet']}";
$MobileMargin = "{$fluentFormGlobalMarginMobile['top']}{$fluentFormGlobalMarginUnits['Mobile']} {$fluentFormGlobalMarginMobile['right']}{$fluentFormGlobalMarginUnits['Mobile']} {$fluentFormGlobalMarginMobile['bottom']}{$fluentFormGlobalMarginUnits['Mobile']} {$fluentFormGlobalMarginMobile['left']}{$fluentFormGlobalMarginUnits['Mobile']}";
/** For fluentFormGlobalMarginMobile */

$fluentFormGlobalBgColorSwitcher = isset( $attributes['fluentFormGlobalBgColorSwitcher'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBgColorSwitcher'] ) : '';
$fluentFormGlobalBgColor = isset( $attributes['fluentFormGlobalBgColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBgColor'] ) : '';
$fluentFormGlobalBgHoverColor = isset( $attributes['fluentFormGlobalBgHoverColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBgHoverColor'] ) : '';

$fluentFormGlobalBorder = isset( $attributes['fluentFormGlobalBorder'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBorder'] ) : '';
$fluentFormGlobalBorderColorSwitcher = isset( $attributes['fluentFormGlobalBorderColorSwitcher'] ) ? sanitize_text_field( $attributes['fluentFormGlobalBorderColorSwitcher'] ) : '';
$fluentFormGlobalBorderColor = isset( $attributes['fluentFormGlobalBorderColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBorderColor'] ) : '';
$fluentFormGlobalBorderHoverColor = isset( $attributes['fluentFormGlobalBorderHoverColor'] ) ? sanitize_hex_color( $attributes['fluentFormGlobalBorderHoverColor'] ) : '';

$fluentFormGlobalBorderUnits = isset( $attributes['fluentFormGlobalBorderUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalBorderUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalBorderDesktop = isset( $attributes['fluentFormGlobalBorderDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderTablet = isset( $attributes['fluentFormGlobalBorderTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderMobile = isset( $attributes['fluentFormGlobalBorderMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
/** For fluentFormGlobalBorderDesktop */
$BorderDesktopWidth = "{$fluentFormGlobalBorderDesktop['top']}{$fluentFormGlobalBorderUnits['Desktop']} {$fluentFormGlobalBorderDesktop['right']}{$fluentFormGlobalBorderUnits['Desktop']} {$fluentFormGlobalBorderDesktop['bottom']}{$fluentFormGlobalBorderUnits['Desktop']} {$fluentFormGlobalBorderDesktop['left']}{$fluentFormGlobalBorderUnits['Desktop']}";
$BorderTabletWidth = "{$fluentFormGlobalBorderTablet['top']}{$fluentFormGlobalBorderUnits['Tablet']} {$fluentFormGlobalBorderTablet['right']}{$fluentFormGlobalBorderUnits['Tablet']} {$fluentFormGlobalBorderTablet['bottom']}{$fluentFormGlobalBorderUnits['Tablet']} {$fluentFormGlobalBorderTablet['left']}{$fluentFormGlobalBorderUnits['Tablet']}";
$BorderMobileWidth = "{$fluentFormGlobalBorderMobile['top']}{$fluentFormGlobalBorderUnits['Mobile']} {$fluentFormGlobalBorderMobile['right']}{$fluentFormGlobalBorderUnits['Mobile']} {$fluentFormGlobalBorderMobile['bottom']}{$fluentFormGlobalBorderUnits['Mobile']} {$fluentFormGlobalBorderMobile['left']}{$fluentFormGlobalBorderUnits['Mobile']}";
/** For fluentFormGlobalBorderDesktop */

$fluentFormGlobalBorderRadiusUnits = isset( $attributes['fluentFormGlobalBorderRadiusUnits'] ) ? array_map( 'sanitize_text_field', $attributes['fluentFormGlobalBorderRadiusUnits'] ) : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$fluentFormGlobalBorderRadiusDesktop = isset( $attributes['fluentFormGlobalBorderRadiusDesktop'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusDesktop'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderRadiusTablet = isset( $attributes['fluentFormGlobalBorderRadiusTablet'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusTablet'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
$fluentFormGlobalBorderRadiusMobile = isset( $attributes['fluentFormGlobalBorderRadiusMobile'] ) ? array_map( 'intval', $attributes['fluentFormGlobalBorderRadiusMobile'] ) : array( 'top' => '', 'bottom' => '', 'left' => '', 'right' => '' );
/** For fluentFormGlobalBorderRadiusDesktop */
$BorderRadiusDesktopWidth = "{$fluentFormGlobalBorderRadiusDesktop['top']}{$fluentFormGlobalBorderRadiusUnits['Desktop']} {$fluentFormGlobalBorderRadiusDesktop['right']}{$fluentFormGlobalBorderRadiusUnits['Desktop']} {$fluentFormGlobalBorderRadiusDesktop['bottom']}{$fluentFormGlobalBorderRadiusUnits['Desktop']} {$fluentFormGlobalBorderRadiusDesktop['left']}{$fluentFormGlobalBorderRadiusUnits['Desktop']}";
$BorderRadiusTabletWidth = "{$fluentFormGlobalBorderRadiusTablet['top']}{$fluentFormGlobalBorderRadiusUnits['Tablet']} {$fluentFormGlobalBorderRadiusTablet['right']}{$fluentFormGlobalBorderRadiusUnits['Tablet']} {$fluentFormGlobalBorderRadiusTablet['bottom']}{$fluentFormGlobalBorderRadiusUnits['Tablet']} {$fluentFormGlobalBorderRadiusTablet['left']}{$fluentFormGlobalBorderRadiusUnits['Tablet']}";
$BorderRadiusMobileWidth = "{$fluentFormGlobalBorderRadiusMobile['top']}{$fluentFormGlobalBorderRadiusUnits['Mobile']} {$fluentFormGlobalBorderRadiusMobile['right']}{$fluentFormGlobalBorderRadiusUnits['Mobile']} {$fluentFormGlobalBorderRadiusMobile['bottom']}{$fluentFormGlobalBorderRadiusUnits['Mobile']} {$fluentFormGlobalBorderRadiusMobile['left']}{$fluentFormGlobalBorderRadiusUnits['Mobile']}";
/** For fluentFormGlobalBorderRadiusDesktop */


                           

$_wrapper_classes = [
    "fb-parent-$blockID"
];


$_form_wrapper_classes = [
    $blockID,
    'fb-fluent-form-wrapper',
    !$showLabels ? 'fb-fluent-form-hide-label' : '',
    !$showPlaceholder ? 'fb-fluent-form-hide-placeholder' : '',
    !$showErrorMessage ? 'fb-fluent-form-hide-error-message' : '',
];

// Remove any empty classes
$_form_wrapper_classes = array_filter($_form_wrapper_classes);

$wrapper_attributes = get_block_wrapper_attributes(
    [
        'class' => $blockID
    ]
);


// Accessing values for different devices
$textIndentSizeDesktop = $fluentFormTextIndentSize['Desktop'];
$textIndentSizeTablet = $fluentFormTextIndentSize['Tablet'];
$textIndentSizeMobile = $fluentFormTextIndentSize['Mobile'];

$textIndentSizeUnitsDesktop = $fluentFormTextIndentSizeUnits['Desktop'];
$textIndentSizeUnitsTablet = $fluentFormTextIndentSizeUnits['Tablet'];
$textIndentSizeUnitsMobile = $fluentFormTextIndentSizeUnits['Mobile'];

// Example output (you can replace this with your actual usage)
echo "Desktop Text Indent Size: {$fluentFormTextIndentSize['Desktop']}{$fluentFormTextIndentSizeUnits['Desktop']}\n";


?>

<style>

    .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?> {
        z-index: <?php echo isset( $fluentFormGlobalZIndex ) ? intval( $fluentFormGlobalZIndex ) : 'auto'; ?>;
        <?php if ( isset( $fluentFormGlobalBgColor ) ): ?>
            background-color: <?php echo esc_attr( $fluentFormGlobalBgColor ); ?>;
        <?php endif; ?>
        padding: <?php echo esc_attr( $DesktopPadding ); ?>;
        margin: <?php echo esc_attr( $DesktopMargin ); ?>;
        border: <?php echo esc_attr( $fluentFormGlobalBorder ); ?>;
        border-width: <?php echo esc_attr( $BorderDesktopWidth ); ?>;
        border-radius: <?php echo esc_attr( $BorderRadiusDesktopWidth ); ?> !important;
        <?php if ( isset( $fluentFormGlobalBorderColor ) ): ?>
            border-color: <?php echo esc_attr( $fluentFormGlobalBorderColor ); ?>;
        <?php endif; ?>
    }

    .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?>:hover {
        <?php if ( isset( $fluentFormGlobalBgHoverColor ) ): ?>
            background-color: <?php echo esc_attr( $fluentFormGlobalBgHoverColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormGlobalBorderHoverColor ) ): ?>
            border-color: <?php echo esc_attr( $fluentFormGlobalBorderHoverColor ); ?>;
        <?php endif; ?>
    }
    /** Start Label Style */
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-group label {
        color: <?php echo esc_attr( $fluentFormLabelColor ); ?>;
        font-family: <?php echo esc_attr( $fluentFormLabelFontFamily ); ?>;
        font-size: <?php echo esc_attr( $fluentFormLabelFontSize . ($fluentFormLabelFontSizeUnits ? esc_attr($fluentFormLabelFontSizeUnits) : 'px')); ?>;
        font-weight: <?php echo esc_attr( $fluentFormLabelFontWeight ); ?>;
        font-style: <?php echo esc_attr( $fluentFormLabelFontStyle ); ?>;
        text-transform: <?php echo esc_attr( $fluentFormLabelTextTransform ); ?>;
        text-decoration: <?php echo esc_attr( $fluentFormLabelTextDecoration ); ?>;
        letter-spacing: <?php echo esc_attr( $fluentFormLabelLetterSpacing . ($fluentFormLabelLetterSpacingUnits ? esc_attr($fluentFormLabelLetterSpacingUnits) : 'px')); ?>;
        line-height: <?php echo esc_attr( $fluentFormLabelLineHeight . ($fluentFormLabelLineHeightUnits ? esc_attr($fluentFormLabelLineHeightUnits) : 'px')); ?>;
        transition: all .3s ease-in-out;
    }
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-group label:hover {
        color: <?php echo esc_attr( $fluentFormLabelHoverColor ); ?>;
    }
    /** End Label Style */

    /** Start Input Style */
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-group textarea, 
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-group select {
        <?php echo $fluentFormInputBgColor ? "background-color: " . esc_attr($fluentFormInputBgColor) . ";" : ""; ?>
        <?php echo $fluentFormInputColor ? "color: " . esc_attr($fluentFormInputColor) . ";" : ""; ?>
        <?php echo $fluentFormInputFontFamily ? "font-family: " . esc_attr($fluentFormInputFontFamily) . ";" : ""; ?>
        <?php echo $fluentFormInputFontSize ? "font-size: " . esc_attr($fluentFormInputFontSize) . esc_attr($fluentFormInputFontSizeUnits) . ";" : ""; ?>
        <?php echo $fluentFormInputFontWeight ? "font-weight: " . esc_attr($fluentFormInputFontWeight) . ";" : ""; ?>
        <?php echo $fluentFormInputFontStyle ? "font-style: " . esc_attr($fluentFormInputFontStyle) . ";" : ""; ?>
        <?php echo $fluentFormInputTextTransform ? "text-transform: " . esc_attr($fluentFormInputTextTransform) . ";" : ""; ?>
        <?php echo $fluentFormInputTextDecoration ? "text-decoration: " . esc_attr($fluentFormInputTextDecoration) . ";" : ""; ?>
        <?php echo $fluentFormInputLetterSpacing ? "letter-spacing: " . esc_attr($fluentFormInputLetterSpacing) . esc_attr($fluentFormInputLetterSpacingUnits) . ";" : ""; ?>
        <?php echo $fluentFormInputLineHeight ? "line-height: " . esc_attr($fluentFormInputLineHeight) . esc_attr($fluentFormInputLineHeightUnits) . ";" : ""; ?>

        <?php echo "text-indent: " . $fluentFormTextIndentSize['Desktop'] . $fluentFormTextIndentSizeUnits['Desktop'] . ";"; ?>
        <?php echo "width: " . esc_attr($fluentFormInputWidthSize['Desktop']) . esc_attr($fluentFormInputWidthSizeUnits['Desktop']) . ";"; ?>
        <?php echo "height: " . esc_attr($fluentFormInputHeightSize['Desktop']) . esc_attr($fluentFormInputHeightSizeUnits['Desktop']) . ";"; ?>

        <?php echo $fluentFormDesktopPadding ? "padding: " . esc_attr($fluentFormDesktopPadding) . ";" : ""; ?>
        <?php echo $fluentFormBorder ? "border: " . esc_attr($fluentFormBorder) . ";" : ""; ?>
        <?php echo $fluentFormBorderDesktopString ? "border-width: " . esc_attr($fluentFormBorderDesktopString) . ";" : ""; ?>
        <?php echo $fluentFormBorderColor ? "border-color: " . esc_attr($fluentFormBorderColor) . ";" : ""; ?>
        <?php echo $fluentFormBorderRadiusDesktopString ? "border-radius: " . esc_attr($fluentFormBorderRadiusDesktopString) . ";" : ""; ?>

        transition: all .3s ease-in-out;
    }
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-group textarea:focus, 
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-group select:focus {
        border-color: <?php echo esc_attr($fluentFormInputFocusColor); ?>;
        box-shadow: 0 0 0 1px <?php echo esc_attr($fluentFormInputFocusColor); ?>;
    }
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-group textarea {
        width: <?php echo esc_attr($fluentFormTextareaWidthSize['Desktop']) . esc_attr($fluentFormTextareaWidthSizeUnits['Desktop']); ?>;
        height: <?php echo esc_attr($fluentFormTextareaHeightSize['Desktop']) . esc_attr($fluentFormTextareaHeightSizeUnits['Desktop']); ?>;
    }
    /** end Input Style */


    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input::-webkit-input-placeholder,
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
        color: <?php echo esc_attr( $fluentFormPlaceholderColor ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input::-moz-placeholder,
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper textarea::-moz-placeholder {
        color: <?php echo esc_attr( $fluentFormPlaceholderColor ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input:-ms-input-placeholder,
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
        color: <?php echo esc_attr( $fluentFormPlaceholderColor ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input:-moz-placeholder,
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper textarea:-moz-placeholder {
        color: <?php echo esc_attr( $fluentFormPlaceholderColor ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-input--content input[type="checkbox"] {
        width: <?php echo esc_attr( $fluentFormRadioFontSize['Desktop'] ); ?><?php echo esc_attr( $fluentFormRadioFontSizeUnits['Desktop'] ); ?>;
        height: <?php echo esc_attr( $fluentFormRadioFontSize['Desktop'] ); ?><?php echo esc_attr( $fluentFormRadioFontSizeUnits['Desktop'] ); ?>;
        <?php if ( $fluentFormRadioColor ) : ?>
            background: <?php echo esc_attr( $fluentFormRadioColor ); ?>;
        <?php endif; ?>
        <?php if ( $fluentFormRadioBorderColor ) : ?>
            border-color: <?php echo esc_attr( $fluentFormRadioBorderColor ); ?>;
        <?php endif; ?>
        <?php if ( $fluentFormRadioBorderWidth['Desktop'] ) : ?>
            border-width: <?php echo esc_attr( $fluentFormRadioBorderWidth['Desktop'] ); ?><?php echo esc_attr( $fluentFormRadioBorderWidthUnits['Desktop'] ); ?>;
        <?php endif; ?>
        <?php if ( $fluentFormRadioBorderRadiusDesktopString ) : ?>
            border-radius: <?php echo esc_attr( $fluentFormRadioBorderRadiusDesktopString ); ?>;
        <?php endif; ?>
        position: relative;
        appearance: none;
        transition: all .3s ease-in-out;
    }
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-input--content input[type="radio"] {
        width: <?php echo esc_attr( $fluentFormRadioFontSize['Desktop'] ); ?><?php echo esc_attr( $fluentFormRadioFontSizeUnits['Desktop'] ); ?>;
        height: <?php echo esc_attr( $fluentFormRadioFontSize['Desktop'] ); ?><?php echo esc_attr( $fluentFormRadioFontSizeUnits['Desktop'] ); ?>;
        <?php if ( $fluentFormRadioColor ) : ?>
            background: <?php echo esc_attr( $fluentFormRadioColor ); ?>;
        <?php endif; ?>
        <?php if ( $fluentFormRadioBorderColor ) : ?>
            border-color: <?php echo esc_attr( $fluentFormRadioBorderColor ); ?>;
        <?php endif; ?>
        <?php if ( $fluentFormRadioBorderWidth['Desktop'] ) : ?>
            border-width: <?php echo esc_attr( $fluentFormRadioBorderWidth['Desktop'] ); ?><?php echo esc_attr( $fluentFormRadioBorderWidthUnits['Desktop'] ); ?>;
        <?php endif; ?>
        <?php if ( $fluentFormCheckBoxBorderRadiusDesktopString ) : ?>
            border-radius: <?php echo esc_attr( $fluentFormCheckBoxBorderRadiusDesktopString ); ?>;
        <?php endif; ?>
        position: relative;
        appearance: none;
        transition: all .3s ease-in-out;
    }
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input[type="checkbox"]:checked:before,
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper input[type="radio"]:checked:before {
        <?php if ( $fluentFormRadioCheckedColor ) : ?>
            background: <?php echo esc_attr( $fluentFormRadioCheckedColor ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
        <?php if ( $fluentFormRadioCheckBoxItemSpacing['Desktop'] ) : ?>
            margin-bottom: <?php echo esc_attr( $fluentFormRadioCheckBoxItemSpacing['Desktop'] ); ?><?php echo esc_attr( $fluentFormRadioCheckBoxItemSpacingUnits['Desktop'] ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-section-break,
    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-section-break hr {
        text-align: <?php echo esc_attr( $fluentFormSectionBreakAlignment ); ?>;
    }

    .fb-fluent-form-wrapper .ff-el-group {
        margin-bottom: <?php echo esc_attr( $fluentFormSpacingSize ) . esc_attr( $fluentFormSpacingUnits ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
        <?php if ( isset( $fluentFormSectionBreakTitleColor ) ) : ?>
            color: <?php echo esc_attr( $fluentFormSectionBreakTitleColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleFontFamily ) ) : ?>
            font-family: <?php echo esc_attr( $fluentFormSectionBreakTitleFontFamily ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleFontSize ) && isset( $fluentFormSectionBreakTitleFontSizeUnits ) ) : ?>
            font-size: <?php echo esc_attr( $fluentFormSectionBreakTitleFontSize . $fluentFormSectionBreakTitleFontSizeUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleFontWeight ) ) : ?>
            font-weight: <?php echo esc_attr( $fluentFormSectionBreakTitleFontWeight ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleFontStyle ) ) : ?>
            font-style: <?php echo esc_attr( $fluentFormSectionBreakTitleFontStyle ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleTextTransform ) ) : ?>
            text-transform: <?php echo esc_attr( $fluentFormSectionBreakTitleTextTransform ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleTextDecoration ) ) : ?>
            text-decoration: <?php echo esc_attr( $fluentFormSectionBreakTitleTextDecoration ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleLetterSpacing ) && isset( $fluentFormSectionBreakTitleLetterSpacingUnits ) ) : ?>
            letter-spacing: <?php echo esc_attr( $fluentFormSectionBreakTitleLetterSpacing . $fluentFormSectionBreakTitleLetterSpacingUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleLineHeight ) && isset( $fluentFormSectionBreakTitleLineHeightUnits ) ) : ?>
            line-height: <?php echo esc_attr( $fluentFormSectionBreakTitleLineHeight . $fluentFormSectionBreakTitleLineHeightUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitlePaddingDesktopString ) ) : ?>
            padding: <?php echo esc_attr( $fluentFormSectionBreakTitlePaddingDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakTitleMarginDesktopString ) ) : ?>
            margin: <?php echo esc_attr( $fluentFormSectionBreakTitleMarginDesktopString ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?> .fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
        color: <?php echo esc_attr( $fluentFormSectionBreakTitleHoverColor ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
        <?php if ( isset( $fluentFormSectionBreakDescColor ) ) : ?>
            color: <?php echo esc_attr( $fluentFormSectionBreakDescColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescFontFamily ) ) : ?>
            font-family: <?php echo esc_attr( $fluentFormSectionBreakDescFontFamily ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescFontSize ) && isset( $fluentFormSectionBreakDescFontSizeUnits ) ) : ?>
            font-size: <?php echo esc_attr( $fluentFormSectionBreakDescFontSize . $fluentFormSectionBreakDescFontSizeUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescFontWeight ) ) : ?>
            font-weight: <?php echo esc_attr( $fluentFormSectionBreakDescFontWeight ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescFontStyle ) ) : ?>
            font-style: <?php echo esc_attr( $fluentFormSectionBreakDescFontStyle ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescTextTransform ) ) : ?>
            text-transform: <?php echo esc_attr( $fluentFormSectionBreakDescTextTransform ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescTextDecoration ) ) : ?>
            text-decoration: <?php echo esc_attr( $fluentFormSectionBreakDescTextDecoration ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescLetterSpacing ) && isset( $fluentFormSectionBreakDescLetterSpacingUnits ) ) : ?>
            letter-spacing: <?php echo esc_attr( $fluentFormSectionBreakDescLetterSpacing . $fluentFormSectionBreakDescLetterSpacingUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescLineHeight ) && isset( $fluentFormSectionBreakDescLineHeightUnits ) ) : ?>
            line-height: <?php echo esc_attr( $fluentFormSectionBreakDescLineHeight . $fluentFormSectionBreakDescLineHeightUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescPaddingDesktopString ) ) : ?>
            padding: <?php echo esc_attr( $fluentFormSectionBreakDescPaddingDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSectionBreakDescMarginDesktopString ) ) : ?>
            margin: <?php echo esc_attr( $fluentFormSectionBreakDescMarginDesktopString ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk:hover {
        color: <?php echo esc_attr( $fluentFormSectionBreakDescHoverColor ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-custom_html > * {
        <?php if ( isset( $fluentFormHtmlAlignment ) ) : ?>
            text-align: <?php echo esc_attr( $fluentFormHtmlAlignment ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlColor ) ) : ?>
            color: <?php echo esc_attr( $fluentFormHtmlColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlFontFamily ) ) : ?>
            font-family: <?php echo esc_attr( $fluentFormHtmlFontFamily ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlFontSize ) && isset( $fluentFormHtmlFontSizeUnits ) ) : ?>
            font-size: <?php echo esc_attr( $fluentFormHtmlFontSize . $fluentFormHtmlFontSizeUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlFontWeight ) ) : ?>
            font-weight: <?php echo esc_attr( $fluentFormHtmlFontWeight ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlFontStyle ) ) : ?>
            font-style: <?php echo esc_attr( $fluentFormHtmlFontStyle ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlTextTransform ) ) : ?>
            text-transform: <?php echo esc_attr( $fluentFormHtmlTextTransform ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlTextDecoration ) ) : ?>
            text-decoration: <?php echo esc_attr( $fluentFormHtmlTextDecoration ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlLetterSpacing ) && isset( $fluentFormHtmlLetterSpacingUnits ) ) : ?>
            letter-spacing: <?php echo esc_attr( $fluentFormHtmlLetterSpacing . $fluentFormHtmlLetterSpacingUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlLineHeight ) && isset( $fluentFormHtmlLineHeightUnits ) ) : ?>
            line-height: <?php echo esc_attr( $fluentFormHtmlLineHeight . $fluentFormHtmlLineHeightUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlPaddingDesktopString ) ) : ?>
            padding: <?php echo esc_attr( $fluentFormHtmlPaddingDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormHtmlMarginDesktopString ) ) : ?>
            margin: <?php echo esc_attr( $fluentFormHtmlMarginDesktopString ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-custom_html > *:hover {
        color: <?php echo esc_attr( $fluentFormHtmlHoverColor ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?> .fb-fluent-form-wrapper .ff_submit_btn_wrapper {
        text-align: <?php echo esc_attr( $fluentFormSubmitAlignment ); ?>;
    }

    .<?php echo esc_attr( $blockID ); ?> .fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
        <?php if ( isset( $fluentFormSubmitHeight['Desktop'] ) && isset( $fluentFormSubmitHeightUnits['Desktop']) ) : ?>
            height: <?php echo esc_attr( $fluentFormSubmitHeight['Desktop'] . $fluentFormSubmitHeightUnits['Desktop'] ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitColor ) ) : ?>
            color: <?php echo esc_attr( $fluentFormSubmitColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitBgColor ) ) : ?>
            background: <?php echo esc_attr( $fluentFormSubmitBgColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitFontFamily ) ) : ?>
            font-family: <?php echo esc_attr( $fluentFormSubmitFontFamily ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitFontSize ) && isset( $fluentFormSubmitFontSizeUnits ) ) : ?>
            font-size: <?php echo esc_attr( $fluentFormSubmitFontSize . $fluentFormSubmitFontSizeUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitFontWeight ) ) : ?>
            font-weight: <?php echo esc_attr( $fluentFormSubmitFontWeight ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitFontStyle ) ) : ?>
            font-style: <?php echo esc_attr( $fluentFormSubmitFontStyle ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitTextTransform ) ) : ?>
            text-transform: <?php echo esc_attr( $fluentFormSubmitTextTransform ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitTextDecoration ) ) : ?>
            text-decoration: <?php echo esc_attr( $fluentFormSubmitTextDecoration ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitLetterSpacing ) && isset( $fluentFormSubmitLetterSpacingUnits ) ) : ?>
            letter-spacing: <?php echo esc_attr( $fluentFormSubmitLetterSpacing . $fluentFormSubmitLetterSpacingUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitLineHeight ) && isset( $fluentFormSubmitLineHeightUnits ) ) : ?>
            line-height: <?php echo esc_attr( $fluentFormSubmitLineHeight . $fluentFormSubmitLineHeightUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitPaddingDesktopString ) ) : ?>
            padding: <?php echo esc_attr( $fluentFormSubmitPaddingDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitMarginDesktopString ) ) : ?>
            margin: <?php echo esc_attr( $fluentFormSubmitMarginDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitBorder ) ) : ?>
            border: <?php echo esc_attr( $fluentFormSubmitBorder ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitBorderDesktopString ) ) : ?>
            border-width: <?php echo esc_attr( $fluentFormSubmitBorderDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitBorderColor ) ) : ?>
            border-color: <?php echo esc_attr( $fluentFormSubmitBorderColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitBorderRadiusDesktopString ) ) : ?>
            border-radius: <?php echo esc_attr( $fluentFormSubmitBorderRadiusDesktopString ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
        <?php if ( isset( $fluentFormSubmitHoverColor ) ) : ?>
            color: <?php echo esc_attr( $fluentFormSubmitHoverColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitBgHoverColor ) ) : ?>
            background: <?php echo esc_attr( $fluentFormSubmitBgHoverColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSubmitBorderHoverColor ) ) : ?>
            border-color: <?php echo esc_attr( $fluentFormSubmitBorderHoverColor ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
        <?php if ( $fluentFormSubmitWidthSelect === 'full-width' ) : ?>
            width: 100%;
        <?php elseif ( $fluentFormSubmitWidthSelect === 'custom' && isset( $fluentFormSubmitWidth['Desktop']) ) : ?>
            width: <?php echo esc_attr( $fluentFormSubmitWidth['Desktop'] . $fluentFormSubmitWidthUnits['Desktop']); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-message-success {
        <?php if ( isset( $fluentFormSuccessColor ) ) : ?>
            color: <?php echo esc_attr( $fluentFormSuccessColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessBgColor ) ) : ?>
            background: <?php echo esc_attr( $fluentFormSuccessBgColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessFontFamily ) ) : ?>
            font-family: <?php echo esc_attr( $fluentFormSuccessFontFamily ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessFontSize ) && isset( $fluentFormSuccessFontSizeUnits ) ) : ?>
            font-size: <?php echo esc_attr( $fluentFormSuccessFontSize . $fluentFormSuccessFontSizeUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessFontWeight ) ) : ?>
            font-weight: <?php echo esc_attr( $fluentFormSuccessFontWeight ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessFontStyle ) ) : ?>
            font-style: <?php echo esc_attr( $fluentFormSuccessFontStyle ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessTextTransform ) ) : ?>
            text-transform: <?php echo esc_attr( $fluentFormSuccessTextTransform ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessTextDecoration ) ) : ?>
            text-decoration: <?php echo esc_attr( $fluentFormSuccessTextDecoration ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessLetterSpacing ) && isset( $fluentFormSuccessLetterSpacingUnits ) ) : ?>
            letter-spacing: <?php echo esc_attr( $fluentFormSuccessLetterSpacing . $fluentFormSuccessLetterSpacingUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessLineHeight ) && isset( $fluentFormSuccessLineHeightUnits ) ) : ?>
            line-height: <?php echo esc_attr( $fluentFormSuccessLineHeight . $fluentFormSuccessLineHeightUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessBorder ) ) : ?>
            border: <?php echo esc_attr( $fluentFormSuccessBorder ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessBorderDesktopString ) ) : ?>
            border-width: <?php echo esc_attr( $fluentFormSuccessBorderDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessBorderColor ) ) : ?>
            border-color: <?php echo esc_attr( $fluentFormSuccessBorderColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormSuccessBorderRadiusDesktopString ) ) : ?>
            border-radius: <?php echo esc_attr( $fluentFormSuccessBorderRadiusDesktopString ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .ff-message-success:hover {
        <?php if ( isset( $fluentFormSuccessBorderHoverColor ) ) : ?>
            border-color: <?php echo esc_attr( $fluentFormSuccessBorderHoverColor ); ?>;
        <?php endif; ?>
    }

    .<?php echo esc_attr( $blockID ); ?>.fb-fluent-form-wrapper .error.text-danger {
        <?php if ( isset( $fluentFormErrorColor ) ) : ?>
            color: <?php echo esc_attr( $fluentFormErrorColor ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorFontFamily ) ) : ?>
            font-family: <?php echo esc_attr( $fluentFormErrorFontFamily ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorFontSize ) && isset( $fluentFormErrorFontSizeUnits ) ) : ?>
            font-size: <?php echo esc_attr( $fluentFormErrorFontSize . $fluentFormErrorFontSizeUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorFontWeight ) ) : ?>
            font-weight: <?php echo esc_attr( $fluentFormErrorFontWeight ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorFontStyle ) ) : ?>
            font-style: <?php echo esc_attr( $fluentFormErrorFontStyle ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorTextTransform ) ) : ?>
            text-transform: <?php echo esc_attr( $fluentFormErrorTextTransform ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorTextDecoration ) ) : ?>
            text-decoration: <?php echo esc_attr( $fluentFormErrorTextDecoration ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorLetterSpacing ) && isset( $fluentFormErrorLetterSpacingUnits ) ) : ?>
            letter-spacing: <?php echo esc_attr( $fluentFormErrorLetterSpacing . $fluentFormErrorLetterSpacingUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorLineHeight ) && isset( $fluentFormErrorLineHeightUnits ) ) : ?>
            line-height: <?php echo esc_attr( $fluentFormErrorLineHeight . $fluentFormErrorLineHeightUnits ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorPaddingDesktopString ) ) : ?>
            padding: <?php echo esc_attr( $fluentFormErrorPaddingDesktopString ); ?>;
        <?php endif; ?>
        <?php if ( isset( $fluentFormErrorMarginDesktopString ) ) : ?>
            margin: <?php echo esc_attr( $fluentFormErrorMarginDesktopString ); ?>;
        <?php endif; ?>
    }

    @media only screen and (max-width: 1024px) {
        .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?> {
            padding: <?php echo esc_attr( $TabletPadding ); ?>;
            margin: <?php echo esc_attr( $TabletMargin ); ?>;
            border-width: <?php echo esc_attr( $BorderTabletWidth ); ?>;
            border-radius: <?php echo esc_attr( $BorderRadiusTabletWidth ); ?> !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-fluent-form-wrapper.<?php echo esc_attr( $blockID ); ?> {
            padding: <?php echo esc_attr( $MobilePadding ); ?>;
            margin: <?php echo esc_attr( $MobileMargin ); ?>;
            border-width: <?php echo esc_attr( $BorderMobileWidth ); ?>;
            border-radius: <?php echo esc_attr( $BorderRadiusMobileWidth ); ?> !important;
        }
    }

    <?php echo ".$blockID.fb-fluent-form-wrapper.fb-fluent-form-hide-label .ff-el-group label:not(.ff-el-form-check-label),
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
    }";
    ?>
</style>

<div <?php echo wp_kses_data( $wrapper_attributes ); ?> >
	<div class="<?php echo esc_attr( implode( ' ', $_wrapper_classes ) ); ?> fb-parent-wrapper">
		<div class="<?php echo esc_attr( implode( ' ', $_form_wrapper_classes ) ); ?>">
			<?php
                $shortcode = sprintf( '[fluentform id="%s"]', esc_attr( $formId ) );
                echo do_shortcode( shortcode_unautop( wp_kses_post( $shortcode ) ) );
            ?>
		</div>
	</div>
</div>