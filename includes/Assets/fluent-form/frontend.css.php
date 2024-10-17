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
	
";
/** End CSS Content */

/** Enqueue style for frontend */
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID);
/** End Enqueue style for frontend */
