<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
$block_attributes = $block['attrs'];


$block_id = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
$global_z_index = isset( $block_attributes['fluentFormGlobalZIndex'] ) ? intval( $block_attributes['fluentFormGlobalZIndex'] ) : '';
$global_bg_color = isset( $block_attributes['fluentFormGlobalBgColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormGlobalBgColor'] ) : '#ffffff';
$desktop_padding = isset( $block_attributes['DesktopPadding'] ) ? sanitize_text_field( $block_attributes['DesktopPadding'] ) : '0';
$desktop_margin = isset( $block_attributes['DesktopMargin'] ) ? sanitize_text_field( $block_attributes['DesktopMargin'] ) : '0'; // Set a default value if needed
$contact_form_global_border = isset( $block_attributes['fluentFormGlobalBorder'] ) ? sanitize_text_field( $block_attributes['fluentFormGlobalBorder'] ) : 'none';
$border_desktop_width = isset( $block_attributes['BorderDesktopWidth'] ) ? intval( $block_attributes['BorderDesktopWidth'] ) : 0;
$border_radius_desktop_width = isset( $block_attributes['BorderRadiusDesktopWidth'] ) ? intval( $block_attributes['BorderRadiusDesktopWidth'] ) : 0;
$contact_form_global_border_color = isset( $block_attributes['fluentFormGlobalBorderColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormGlobalBorderColor'] ) : '';

/*Padding*/
$contact_form_global_padding_desktop_top = isset( $block_attributes['fluentFormGlobalPaddingDesktop']['top'] ) ? intval( $block_attributes['fluentFormGlobalPaddingDesktop']['top'] ) : 0;
$contact_form_global_padding_desktop_right = isset( $block_attributes['fluentFormGlobalPaddingDesktop']['right'] ) ? intval( $block_attributes['fluentFormGlobalPaddingDesktop']['right'] ) : 0;
$contact_form_global_padding_desktop_bottom = isset( $block_attributes['fluentFormGlobalPaddingDesktop']['bottom'] ) ? intval( $block_attributes['fluentFormGlobalPaddingDesktop']['bottom'] ) : 0;
$contact_form_global_padding_desktop_left = isset( $block_attributes['fluentFormGlobalPaddingDesktop']['left'] ) ? intval( $block_attributes['fluentFormGlobalPaddingDesktop']['left'] ) : 0;

$contact_form_global_padding_units_desktop = isset( $block_attributes['fluentFormGlobalPaddingUnits']['Desktop'] ) ? sanitize_text_field( $block_attributes['fluentFormGlobalPaddingUnits']['Desktop'] ) : 'px'; // Default unit

$desktop_padding = "{$contact_form_global_padding_desktop_top}{$contact_form_global_padding_units_desktop} {$contact_form_global_padding_desktop_right}{$contact_form_global_padding_units_desktop} {$contact_form_global_padding_desktop_bottom}{$contact_form_global_padding_units_desktop} {$contact_form_global_padding_desktop_left}{$contact_form_global_padding_units_desktop}";
/*Padding*/

/*Border*/
$contact_form_global_border_desktop_top = isset( $block_attributes['fluentFormGlobalBorderDesktop']['top'] ) ? intval( $block_attributes['fluentFormGlobalBorderDesktop']['top'] ) : 0;
$contact_form_global_border_desktop_right = isset( $block_attributes['fluentFormGlobalBorderDesktop']['right'] ) ? intval( $block_attributes['fluentFormGlobalBorderDesktop']['right'] ) : 0;
$contact_form_global_border_desktop_bottom = isset( $block_attributes['fluentFormGlobalBorderDesktop']['bottom'] ) ? intval( $block_attributes['fluentFormGlobalBorderDesktop']['bottom'] ) : 0;
$contact_form_global_border_desktop_left = isset( $block_attributes['fluentFormGlobalBorderDesktop']['left'] ) ? intval( $block_attributes['fluentFormGlobalBorderDesktop']['left'] ) : 0;

$contact_form_global_border_units_desktop = isset( $block_attributes['fluentFormGlobalBorderUnits']['Desktop'] ) ? sanitize_text_field( $block_attributes['fluentFormGlobalBorderUnits']['Desktop'] ) : 'px'; // Default unit

$border_desktop_width = "{$contact_form_global_border_desktop_top}{$contact_form_global_border_units_desktop} {$contact_form_global_border_desktop_right}{$contact_form_global_border_units_desktop} {$contact_form_global_border_desktop_bottom}{$contact_form_global_border_units_desktop} {$contact_form_global_border_desktop_left}{$contact_form_global_border_units_desktop}";

/*Border Radius*/
$contact_form_global_border_radius_desktop_top = isset( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['top'] ) ? intval( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['top'] ) : 0;
$contact_form_global_border_radius_desktop_right = isset( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['right'] ) ? intval( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['right'] ) : 0;
$contact_form_global_border_radius_desktop_bottom = isset( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['bottom'] ) ? intval( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['bottom'] ) : 0;
$contact_form_global_border_radius_desktop_left = isset( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['left'] ) ? intval( $block_attributes['fluentFormGlobalBorderRadiusDesktop']['left'] ) : 0;

$contact_form_global_border_radius_units_desktop = isset( $block_attributes['fluentFormGlobalBorderRadiusUnits']['Desktop'] ) ? sanitize_text_field( $block_attributes['fluentFormGlobalBorderRadiusUnits']['Desktop'] ) : 'px'; // Default unit

$border_radius_desktop_width = "{$contact_form_global_border_radius_desktop_top}{$contact_form_global_border_radius_units_desktop} {$contact_form_global_border_radius_desktop_right}{$contact_form_global_border_radius_units_desktop} {$contact_form_global_border_radius_desktop_bottom}{$contact_form_global_border_radius_units_desktop} {$contact_form_global_border_radius_desktop_left}{$contact_form_global_border_radius_units_desktop}";
//Wrapper hover
$contact_form_global_bg_hover_color = isset( $block_attributes['fluentFormGlobalBgHoverColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormGlobalBgHoverColor'] ) : null;
$contact_form_global_border_hover_color = isset( $block_attributes['fluentFormGlobalBorderHoverColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormGlobalBorderHoverColor'] ) : null;
//Label
$contact_form_label_color = isset( $block_attributes['fluentFormLabelColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormLabelColor'] ) : '';
$contact_form_label_font_family = isset( $block_attributes['fluentFormLabelFontFamily'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelFontFamily'] ) : '';
$contact_form_label_font_size = isset( $block_attributes['fluentFormLabelFontSize'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelFontSize'] ) : '';
$contact_form_label_font_size_units = isset( $block_attributes['fluentFormLabelFontSizeUnits'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelFontSizeUnits'] ) : 'px';
$contact_form_label_font_weight = isset( $block_attributes['fluentFormLabelFontWeight'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelFontWeight'] ) : '';
$contact_form_label_font_style = isset( $block_attributes['fluentFormLabelFontStyle'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelFontStyle'] ) : '';
$contact_form_label_text_transform = isset( $block_attributes['fluentFormLabelTextTransform'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelTextTransform'] ) : '';
$contact_form_label_text_decoration = isset( $block_attributes['fluentFormLabelTextDecoration'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelTextDecoration'] ) : '';
$contact_form_label_letter_spacing = isset( $block_attributes['fluentFormLabelLetterSpacing'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelLetterSpacing'] ) : '';
$contact_form_label_letter_spacing_units = isset( $block_attributes['fluentFormLabelLetterSpacingUnits'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelLetterSpacingUnits'] ) : 'px';
$contact_form_label_line_height = isset( $block_attributes['fluentFormLabelLineHeight'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelLineHeight'] ) : '';
$contact_form_label_line_height_units = isset( $block_attributes['fluentFormLabelLineHeightUnits'] ) ? sanitize_text_field( $block_attributes['fluentFormLabelLineHeightUnits'] ) : 'px';
//Label hover
$contact_form_label_hover_color = isset( $block_attributes['fluentFormLabelHoverColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormLabelHoverColor'] ) : '';
//
$contact_form_input_bg_color             = isset( $block_attributes['fluentFormInputBgColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormInputBgColor'] ) : '';
$contact_form_input_color                = isset( $block_attributes['fluentFormInputColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormInputColor'] ) : '';
$contact_form_input_font_family          = isset( $block_attributes['fluentFormInputFontFamily'] ) ? sanitize_text_field( $block_attributes['fluentFormInputFontFamily'] ) : '';
$contact_form_input_font_size            = isset( $block_attributes['fluentFormInputFontSize'] ) ? floatval( $block_attributes['fluentFormInputFontSize'] ) . (isset( $block_attributes['fluentFormInputFontSizeUnits'] ) ? sanitize_text_field( $block_attributes['fluentFormInputFontSizeUnits'] ) : 'px') : '';
$contact_form_input_font_weight          = isset( $block_attributes['fluentFormInputFontWeight'] ) ? sanitize_text_field( $block_attributes['fluentFormInputFontWeight'] ) : '';
$contact_form_input_font_style           = isset( $block_attributes['fluentFormInputFontStyle'] ) ? sanitize_text_field( $block_attributes['fluentFormInputFontStyle'] ) : '';
$contact_form_input_text_transform       = isset( $block_attributes['fluentFormInputTextTransform'] ) ? sanitize_text_field( $block_attributes['fluentFormInputTextTransform'] ) : '';
$contact_form_input_text_decoration      = isset( $block_attributes['fluentFormInputTextDecoration'] ) ? sanitize_text_field( $block_attributes['fluentFormInputTextDecoration'] ) : '';
$contact_form_input_letter_spacing       = isset( $block_attributes['fluentFormInputLetterSpacing'] ) ? floatval( $block_attributes['fluentFormInputLetterSpacing'] ) . (isset( $block_attributes['fluentFormInputLetterSpacingUnits'] ) ? sanitize_text_field( $block_attributes['fluentFormInputLetterSpacingUnits'] ) : 'px') : '';
$contact_form_input_line_height          = isset( $block_attributes['fluentFormInputLineHeight'] ) ? floatval( $block_attributes['fluentFormInputLineHeight'] ) . (isset( $block_attributes['fluentFormInputLineHeightUnits'] ) ? sanitize_text_field( $block_attributes['fluentFormInputLineHeightUnits'] ) : 'px') : '';
$contact_form_text_indent_size           = isset( $block_attributes['fluentFormTextIndentSize']['Desktop'] ) ? floatval( $block_attributes['fluentFormTextIndentSize']['Desktop'] ) . (isset( $block_attributes['fluentFormTextIndentSizeUnits']['Desktop'] ) ? sanitize_text_field( $block_attributes['fluentFormTextIndentSizeUnits']['Desktop'] ) : 'px') : '';
$contact_form_input_width_size           = isset( $block_attributes['fluentFormInputWidthSize']['Desktop'] ) ? floatval( $block_attributes['fluentFormInputWidthSize']['Desktop'] ) . (isset( $block_attributes['fluentFormInputWidthSizeUnits']['Desktop'] ) ? sanitize_text_field( $block_attributes['fluentFormInputWidthSizeUnits']['Desktop'] ) : 'px') : '';
$contact_form_input_height_size          = isset( $block_attributes['fluentFormInputHeightSize']['Desktop'] ) ? floatval( $block_attributes['fluentFormInputHeightSize']['Desktop'] ) . (isset( $block_attributes['fluentFormInputHeightSizeUnits']['Desktop'] ) ? sanitize_text_field( $block_attributes['fluentFormInputHeightSizeUnits']['Desktop'] ) : 'px') : '';
$contact_form_border                     = isset( $block_attributes['fluentFormBorder'] ) ? sanitize_text_field( $block_attributes['fluentFormBorder'] ) : '';
$contact_form_border_color               = isset( $block_attributes['fluentFormBorderColor'] ) ? sanitize_hex_color( $block_attributes['fluentFormBorderColor'] ) : '';
//textarea select padding
$contact_form_padding_desktop_top    = isset( $block_attributes['fluentFormPaddingDesktop']['top'] ) ? $block_attributes['fluentFormPaddingDesktop']['top'] : '';
$contact_form_padding_desktop_right  = isset( $block_attributes['fluentFormPaddingDesktop']['right'] ) ? $block_attributes['fluentFormPaddingDesktop']['right'] : '';
$contact_form_padding_desktop_bottom = isset( $block_attributes['fluentFormPaddingDesktop']['bottom'] ) ? $block_attributes['fluentFormPaddingDesktop']['bottom'] : '';
$contact_form_padding_desktop_left   = isset( $block_attributes['fluentFormPaddingDesktop']['left'] ) ? $block_attributes['fluentFormPaddingDesktop']['left'] : '';
$contact_form_padding_units_desktop  = isset( $block_attributes['fluentFormPaddingUnits']['Desktop'] ) ? $block_attributes['fluentFormPaddingUnits']['Desktop'] : 'px';

$contact_form_desktop_padding = "{$contact_form_padding_desktop_top}{$contact_form_padding_units_desktop} {$contact_form_padding_desktop_right}{$contact_form_padding_units_desktop} {$contact_form_padding_desktop_bottom}{$contact_form_padding_units_desktop} {$contact_form_padding_desktop_left}{$contact_form_padding_units_desktop}";
// Border width(textarea,select)
$contact_form_border_desktop_top    = isset( $block_attributes['fluentFormBorderDesktop']['top'] ) ? $block_attributes['fluentFormBorderDesktop']['top'] : '';
$contact_form_border_desktop_right  = isset( $block_attributes['fluentFormBorderDesktop']['right'] ) ? $block_attributes['fluentFormBorderDesktop']['right'] : '';
$contact_form_border_desktop_bottom = isset( $block_attributes['fluentFormBorderDesktop']['bottom'] ) ? $block_attributes['fluentFormBorderDesktop']['bottom'] : '';
$contact_form_border_desktop_left   = isset( $block_attributes['fluentFormBorderDesktop']['left'] ) ? $block_attributes['fluentFormBorderDesktop']['left'] : '';
$contact_form_border_units_desktop  = isset( $block_attributes['fluentFormBorderUnits']['Desktop'] ) ? $block_attributes['fluentFormBorderUnits']['Desktop'] : 'px';

$contact_form_border_desktop_width = "{$contact_form_border_desktop_top}{$contact_form_border_units_desktop} {$contact_form_border_desktop_right}{$contact_form_border_units_desktop} {$contact_form_border_desktop_bottom}{$contact_form_border_units_desktop} {$contact_form_border_desktop_left}{$contact_form_border_units_desktop}";
//Border radius(textarea,select)
$contact_form_border_radius_desktop_top    = isset( $block_attributes['fluentFormBorderRadiusDesktop']['top'] ) ? $block_attributes['fluentFormBorderRadiusDesktop']['top'] : '';
$contact_form_border_radius_desktop_right  = isset( $block_attributes['fluentFormBorderRadiusDesktop']['right'] ) ? $block_attributes['fluentFormBorderRadiusDesktop']['right'] : '';
$contact_form_border_radius_desktop_bottom = isset( $block_attributes['fluentFormBorderRadiusDesktop']['bottom'] ) ? $block_attributes['fluentFormBorderRadiusDesktop']['bottom'] : '';
$contact_form_border_radius_desktop_left   = isset( $block_attributes['fluentFormBorderRadiusDesktop']['left'] ) ? $block_attributes['fluentFormBorderRadiusDesktop']['left'] : '';
$contact_form_border_radius_units_desktop  = isset( $block_attributes['fluentFormBorderRadiusUnits']['Desktop'] ) ? $block_attributes['fluentFormBorderRadiusUnits']['Desktop'] : 'px';

$contact_form_border_radius_desktop_width = "{$contact_form_border_radius_desktop_top}{$contact_form_border_radius_units_desktop} {$contact_form_border_radius_desktop_right}{$contact_form_border_radius_units_desktop} {$contact_form_border_radius_desktop_bottom}{$contact_form_border_radius_units_desktop} {$contact_form_border_radius_desktop_left}{$contact_form_border_radius_units_desktop}";
//textarea, select focus color
$text_select_focus_color = isset($block_attributes['fluentFormInputFocusColor']) ? $block_attributes['fluentFormInputFocusColor'] : '';
//
$textarea_width_size = isset($block_attributes['fluentFormTextareaWidthSize']) ? $block_attributes['fluentFormTextareaWidthSize'] : null;
$textarea_width_size_units = isset($block_attributes['fluentFormTextareaWidthSizeUnits']) ? $block_attributes['fluentFormTextareaWidthSizeUnits'] : 'px';

$textarea_height_size = isset($block_attributes['fluentFormTextareaHeightSize']) ? $block_attributes['fluentFormTextareaHeightSize'] : null;
$textarea_height_size_units = isset($block_attributes['fluentFormTextareaHeightSizeUnits']) ? $block_attributes['fluentFormTextareaHeightSizeUnits'] : 'px';

$placeholder_color = isset($block_attributes['fluentFormPlaceholderColor']) ? $block_attributes['fluentFormPlaceholderColor'] : '';
//
$radio_font_size = isset($contact_form_radio_font_size['Desktop']) ? $contact_form_radio_font_size['Desktop'] : '';
$radio_font_size_units = isset($contact_form_radio_font_size_units['Desktop']) ? $contact_form_radio_font_size_units['Desktop'] : '';
$radio_color = isset($contact_form_radio_color) ? $contact_form_radio_color : '';
$radio_border_color = isset($contact_form_radio_border_color) ? $contact_form_radio_border_color : '';
$radio_border_width = isset($contact_form_radio_border_width['Desktop']) ? $contact_form_radio_border_width['Desktop'] : '';
$radio_border_width_units = isset($contact_form_radio_border_width_units['Desktop']) ? $contact_form_radio_border_width_units['Desktop'] : '';

$check_box_border_radius_desktop_top = isset($contact_form_checkbox_border_radius_desktop['top']) ? $contact_form_checkbox_border_radius_desktop['top'] : '';
$check_box_border_radius_desktop_right = isset($contact_form_checkbox_border_radius_desktop['right']) ? $contact_form_checkbox_border_radius_desktop['right'] : '';
$check_box_border_radius_desktop_bottom = isset($contact_form_checkbox_border_radius_desktop['bottom']) ? $contact_form_checkbox_border_radius_desktop['bottom'] : '';
$check_box_border_radius_desktop_left = isset($contact_form_checkbox_border_radius_desktop['left']) ? $contact_form_checkbox_border_radius_desktop['left'] : '';

$check_box_border_radius_units_desktop = isset($contact_form_checkbox_border_radius_units['Desktop']) ? $contact_form_checkbox_border_radius_units['Desktop'] : '';

$contact_form_checkbox_border_radius_desktop_width = "{$check_box_border_radius_desktop_top}{$check_box_border_radius_units_desktop} {$check_box_border_radius_desktop_right}{$check_box_border_radius_units_desktop} {$check_box_border_radius_desktop_bottom}{$check_box_border_radius_units_desktop} {$check_box_border_radius_desktop_left}{$check_box_border_radius_units_desktop}";
//Radio Button
$radio_font_size_desktop = isset($contact_form_radio_font_size['Desktop']) ? $contact_form_radio_font_size['Desktop'] : '';
$radio_font_size_units_desktop = isset($contact_form_radio_font_size_units['Desktop']) ? $contact_form_radio_font_size_units['Desktop'] : '';

$radio_color = isset($contact_form_radio_color) ? $contact_form_radio_color : '';

$radio_border_color = isset($contact_form_radio_border_color) ? $contact_form_radio_border_color : '';

$radio_border_width_desktop = isset($contact_form_radio_border_width['Desktop']) ? $contact_form_radio_border_width['Desktop'] : '';
$radio_border_width_units_desktop = isset($contact_form_radio_border_width_units['Desktop']) ? $contact_form_radio_border_width_units['Desktop'] : '';

$radio_border_radius_desktop_width = isset($contact_form_radio_border_radius_desktop_width) ? $contact_form_radio_border_radius_desktop_width : '';
$radio_checked_color = isset($block_attributes['fluentFormRadioCheckedColor']) ? $block_attributes['fluentFormRadioCheckedColor'] : '';

//submit btn
$submit_alignment = isset($block_attributes['fluentFormSubmitAlignment']) ? $block_attributes['fluentFormSubmitAlignment'] : '';
$submit_height = isset($block_attributes['fluentFormSubmitHeight']['Desktop']) ? $block_attributes['fluentFormSubmitHeight']['Desktop'] : '';
$submit_height_units = isset($block_attributes['fluentFormSubmitHeightUnits']['Desktop']) ? $block_attributes['fluentFormSubmitHeightUnits']['Desktop'] : '';
$submit_color = isset($block_attributes['fluentFormSubmitColor']) ? $block_attributes['fluentFormSubmitColor'] : '';
$submit_bg_color = isset($block_attributes['fluentFormSubmitBgColor']) ? $block_attributes['fluentFormSubmitBgColor'] : '';
$submit_font_family = isset($block_attributes['fluentFormSubmitFontFamily']) ? $block_attributes['fluentFormSubmitFontFamily'] : '';
$submit_font_size = isset($block_attributes['fluentFormSubmitFontSize']) ? $block_attributes['fluentFormSubmitFontSize'] : '';
$submit_font_size_units = isset($block_attributes['fluentFormSubmitFontSizeUnits']) ? $block_attributes['fluentFormSubmitFontSizeUnits'] : '';
$submit_font_weight = isset($block_attributes['fluentFormSubmitFontWeight']) ? $block_attributes['fluentFormSubmitFontWeight'] : '';
$submit_font_style = isset($block_attributes['fluentFormSubmitFontStyle']) ? $block_attributes['fluentFormSubmitFontStyle'] : '';
$submit_text_transform = isset($block_attributes['fluentFormSubmitTextTransform']) ? $block_attributes['fluentFormSubmitTextTransform'] : '';
$submit_text_decoration = isset($block_attributes['fluentFormSubmitTextDecoration']) ? $block_attributes['fluentFormSubmitTextDecoration'] : '';
$submit_letter_spacing = isset($block_attributes['fluentFormSubmitLetterSpacing']) ? $block_attributes['fluentFormSubmitLetterSpacing'] : '';
$submit_letter_spacing_units = isset($block_attributes['fluentFormSubmitLetterSpacingUnits']) ? $block_attributes['fluentFormSubmitLetterSpacingUnits'] : '';
$submit_line_height = isset($block_attributes['fluentFormSubmitLineHeight']) ? $block_attributes['fluentFormSubmitLineHeight'] : '';
$submit_line_height_units = isset($block_attributes['fluentFormSubmitLineHeightUnits']) ? $block_attributes['fluentFormSubmitLineHeightUnits'] : '';
//padding
$submit_padding_top = isset($block_attributes['fluentFormSubmitPaddingDesktop']['top']) ? $block_attributes['fluentFormSubmitPaddingDesktop']['top'] : '';
$submit_padding_right = isset($block_attributes['fluentFormSubmitPaddingDesktop']['right']) ? $block_attributes['fluentFormSubmitPaddingDesktop']['right'] : '';
$submit_padding_bottom = isset($block_attributes['fluentFormSubmitPaddingDesktop']['bottom']) ? $block_attributes['fluentFormSubmitPaddingDesktop']['bottom'] : '';
$submit_padding_left = isset($block_attributes['fluentFormSubmitPaddingDesktop']['left']) ? $block_attributes['fluentFormSubmitPaddingDesktop']['left'] : '';

$submit_padding_units = isset($block_attributes['fluentFormSubmitPaddingUnits']['Desktop']) ? $block_attributes['fluentFormSubmitPaddingUnits']['Desktop'] : 'px';

$submit_desktop_padding = "{$submit_padding_top}{$submit_padding_units} {$submit_padding_right}{$submit_padding_units} {$submit_padding_bottom}{$submit_padding_units} {$submit_padding_left}{$submit_padding_units}";

//margin
$submit_margin_top = isset($block_attributes['fluentFormSubmitMarginDesktop']['top']) ? $block_attributes['fluentFormSubmitMarginDesktop']['top'] : '';
$submit_margin_right = isset($block_attributes['fluentFormSubmitMarginDesktop']['right']) ? $block_attributes['fluentFormSubmitMarginDesktop']['right'] : '';
$submit_margin_bottom = isset($block_attributes['fluentFormSubmitMarginDesktop']['bottom']) ? $block_attributes['fluentFormSubmitMarginDesktop']['bottom'] : '';
$submit_margin_left = isset($block_attributes['fluentFormSubmitMarginDesktop']['left']) ? $block_attributes['fluentFormSubmitMarginDesktop']['left'] : '';

$submit_margin_units = isset($block_attributes['fluentFormSubmitMarginUnits']['Desktop']) ? $block_attributes['fluentFormSubmitMarginUnits']['Desktop'] : 'px';

$submit_desktop_margin = "{$submit_margin_top}{$submit_margin_units} {$submit_margin_right}{$submit_margin_units} {$submit_margin_bottom}{$submit_margin_units} {$submit_margin_left}{$submit_margin_units}";

$submit_border = isset($block_attributes['fluentFormSubmitBorder']) ? $block_attributes['fluentFormSubmitBorder'] : '';
//border width
$submit_border_top = isset($block_attributes['fluentFormSubmitBorderDesktop']['top']) ? $block_attributes['fluentFormSubmitBorderDesktop']['top'] : '';
$submit_border_right = isset($block_attributes['fluentFormSubmitBorderDesktop']['right']) ? $block_attributes['fluentFormSubmitBorderDesktop']['right'] : '';
$submit_border_bottom = isset($block_attributes['fluentFormSubmitBorderDesktop']['bottom']) ? $block_attributes['fluentFormSubmitBorderDesktop']['bottom'] : '';
$submit_border_left = isset($block_attributes['fluentFormSubmitBorderDesktop']['left']) ? $block_attributes['fluentFormSubmitBorderDesktop']['left'] : '';

$submit_border_units = isset($block_attributes['fluentFormSubmitBorderUnits']['Desktop']) ? $block_attributes['fluentFormSubmitBorderUnits']['Desktop'] : 'px';

$submit_border_width = "{$submit_border_top}{$submit_border_units} {$submit_border_right}{$submit_border_units} {$submit_border_bottom}{$submit_border_units} {$submit_border_left}{$submit_border_units}";

$submit_border_color = isset($block_attributes['fluentFormSubmitBorderColor']) ? $block_attributes['fluentFormSubmitBorderColor'] : '';

//border radius
$submit_border_radius_top = isset($block_attributes['fluentFormSubmitBorderRadiusDesktop']['top']) ? $block_attributes['fluentFormSubmitBorderRadiusDesktop']['top'] : '';
$submit_border_radius_right = isset($block_attributes['fluentFormSubmitBorderRadiusDesktop']['right']) ? $block_attributes['fluentFormSubmitBorderRadiusDesktop']['right'] : '';
$submit_border_radius_bottom = isset($block_attributes['fluentFormSubmitBorderRadiusDesktop']['bottom']) ? $block_attributes['fluentFormSubmitBorderRadiusDesktop']['bottom'] : '';
$submit_border_radius_left = isset($block_attributes['fluentFormSubmitBorderRadiusDesktop']['left']) ? $block_attributes['fluentFormSubmitBorderRadiusDesktop']['left'] : '';

$submit_border_radius_units = isset($block_attributes['fluentFormSubmitBorderRadiusUnits']['Desktop']) ? $block_attributes['fluentFormSubmitBorderRadiusUnits']['Desktop'] : 'px';

$submit_border_radius = "{$submit_border_radius_top}{$submit_border_radius_units} {$submit_border_radius_right}{$submit_border_radius_units} {$submit_border_radius_bottom}{$submit_border_radius_units} {$submit_border_radius_left}{$submit_border_radius_units}";


$css_content = "
.$block_id.fb-contact-form-wrapper {
	background-color: $global_bg_color;
	padding: $desktop_padding;
    margin: $desktop_margin;
    border: $contact_form_global_border;
    border-width: {$border_desktop_width};
    border-radius: {$border_radius_desktop_width};
    " . ($contact_form_global_border_color !== '' ? "border-color: $contact_form_global_border_color;" : '') . "
    transition: all .3s ease-in-out;
}
.$block_id.fb-contact-form-wrapper:hover{
 " . ($contact_form_global_bg_hover_color !== null ? "background-color: $contact_form_global_bg_hover_color;" : "") . "
    " . ($contact_form_global_border_hover_color !== null ? "border-color: $contact_form_global_border_hover_color;" : "") . "
}
.$block_id.fb-contact-form-wrapper.fb-contact-form-hide-label label{
 	display: none;
}
.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
	opacity: 0;
	visibility: hidden;
}
.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
    opacity: 0;
    visibility: hidden;
}

.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
    opacity: 0;
    visibility: hidden;
}

.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
.$block_id.fb-contact-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
    opacity: 0;
    visibility: hidden;
}
.$block_id.fb-contact-form-wrapper label {
    " . ( $contact_form_label_color ? "color: $contact_form_label_color;" : "" ) . "
    " . ( $contact_form_label_font_family ? "font-family: $contact_form_label_font_family;" : "" ) . "
    " . ( $contact_form_label_font_size ? "font-size: {$contact_form_label_font_size}{$contact_form_label_font_size_units};" : "" ) . "
    " . ( $contact_form_label_font_weight ? "font-weight: $contact_form_label_font_weight;" : "" ) . "
    " . ( $contact_form_label_font_style ? "font-style: $contact_form_label_font_style;" : "" ) . "
    " . ( $contact_form_label_text_transform ? "text-transform: $contact_form_label_text_transform;" : "" ) . "
    " . ( $contact_form_label_text_decoration ? "text-decoration: $contact_form_label_text_decoration;" : "" ) . "
    " . ( $contact_form_label_letter_spacing ? "letter-spacing: {$contact_form_label_letter_spacing}{$contact_form_label_letter_spacing_units};" : "" ) . "
    " . ( $contact_form_label_line_height ? "line-height: {$contact_form_label_line_height}{$contact_form_label_line_height_units};" : "" ) . "
    transition: all .3s ease-in-out;
}
.$block_id.fb-contact-form-wrapper label:hover {
    " . ( $contact_form_label_hover_color ? "color: $contact_form_label_hover_color;" : "" ) . "
}
.$block_id.fb-contact-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
.$block_id.fb-contact-form-wrapper textarea,
.$block_id.fb-contact-form-wrapper select {
    " . ( $contact_form_input_bg_color ? "background-color: $contact_form_input_bg_color;" : "" ) . "
    " . ( $contact_form_input_color ? "color: $contact_form_input_color;" : "" ) . "
    " . ( $contact_form_input_font_family ? "font-family: $contact_form_input_font_family;" : "" ) . "
    " . ( $contact_form_input_font_size ? "font-size: $contact_form_input_font_size;" : "" ) . "
    " . ( $contact_form_input_font_weight ? "font-weight: $contact_form_input_font_weight;" : "" ) . "
    " . ( $contact_form_input_font_style ? "font-style: $contact_form_input_font_style;" : "" ) . "
    " . ( $contact_form_input_text_transform ? "text-transform: $contact_form_input_text_transform;" : "" ) . "
    " . ( $contact_form_input_text_decoration ? "text-decoration: $contact_form_input_text_decoration;" : "" ) . "
    " . ( $contact_form_input_letter_spacing ? "letter-spacing: $contact_form_input_letter_spacing;" : "" ) . "
    " . ( $contact_form_input_line_height ? "line-height: $contact_form_input_line_height;" : "" ) . "
    " . ( $contact_form_text_indent_size ? "text-indent: $contact_form_text_indent_size;" : "" ) . "
    " . ( $contact_form_input_width_size ? "width: $contact_form_input_width_size;" : "" ) . "
    " . ( $contact_form_input_height_size ? "height: $contact_form_input_height_size;" : "" ) . "
    " . ( $contact_form_desktop_padding ? "padding: $contact_form_desktop_padding;" : "" ) . "
    " . ( $contact_form_border ? "border: $contact_form_border;" : "" ) . "
    " . ( $contact_form_border_desktop_width ? "border-width: $contact_form_border_desktop_width;" : "" ) . "
    " . ( $contact_form_border_color ? "border-color: $contact_form_border_color;" : "" ) . "
    " . ( $contact_form_border_radius_desktop_width ? "border-radius: $contact_form_border_radius_desktop_width;" : "" ) . "
    transition: all .3s ease-in-out;
}
.$block_id.fb-contact-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
.$block_id.fb-contact-form-wrapper textarea:focus,
.$block_id.fb-contact-form-wrapper select:focus {
    " . ($text_select_focus_color ? "border-color: $text_select_focus_color;" : "") . "
    " . ($text_select_focus_color ? "box-shadow: 0 0 0 1px $text_select_focus_color;" : "") . "
}
.$block_id.fb-contact-form-wrapper textarea {
    " . ($textarea_width_size ? "width: {$textarea_width_size}.Desktop{$textarea_width_size_units};" : "") . "
    " . ($textarea_height_size ? "height: {$textarea_height_size}.Desktop{$textarea_height_size_units};" : "") . "
}

.$block_id.fb-contact-form-wrapper input::-webkit-input-placeholder,
.$block_id.fb-contact-form-wrapper textarea::-webkit-input-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}

.$block_id.fb-contact-form-wrapper input::-moz-placeholder,
.$block_id.fb-contact-form-wrapper textarea::-moz-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}

.$block_id.fb-contact-form-wrapper input:-ms-input-placeholder,
.$block_id.fb-contact-form-wrapper textarea:-ms-input-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}

.$block_id.fb-contact-form-wrapper input:-moz-placeholder,
.$block_id.fb-contact-form-wrapper textarea:-moz-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}
.$block_id.fb-contact-form-wrapper textarea {
    " . ($textarea_width_size ? "width: {$textarea_width_size}.Desktop{$textarea_width_size_units};" : "") . "
    " . ($textarea_height_size ? "height: {$textarea_height_size}.Desktop{$textarea_height_size_units};" : "") . "
}

.$block_id.fb-contact-form-wrapper input::-webkit-input-placeholder,
.$block_id.fb-contact-form-wrapper textarea::-webkit-input-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}

.$block_id.fb-contact-form-wrapper input::-moz-placeholder,
.$block_id.fb-contact-form-wrapper textarea::-moz-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}

.$block_id.fb-contact-form-wrapper input:-ms-input-placeholder,
.$block_id.fb-contact-form-wrapper textarea:-ms-input-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}

.$block_id.fb-contact-form-wrapper input:-moz-placeholder,
.$block_id.fb-contact-form-wrapper textarea:-moz-placeholder {
    " . ($placeholder_color ? "color: $placeholder_color;" : "") . "
}
.$block_id.fb-contact-form-wrapper input[type='checkbox'] {
    width: {$radio_font_size}{$radio_font_size_units};
    height: {$radio_font_size}{$radio_font_size_units};
    " . ($radio_color ? "background: $radio_color;" : "") . "
    " . ($radio_border_color ? "border-color: $radio_border_color;" : "") . "
    " . ($radio_border_width ? "border-width: {$radio_border_width}{$radio_border_width_units};" : "") . "
    " . ($contact_form_checkbox_border_radius_desktop_width ? "border-radius: $contact_form_checkbox_border_radius_desktop_width;" : "") . "
    position: relative;
    appearance: none;
    transition: all .3s ease-in-out;
}
.$block_id.fb-contact-form-wrapper input[type='radio'] {
    width: {$radio_font_size}{$radio_font_size_units};
    height: {$radio_font_size}{$radio_font_size_units};
    " . ($radio_color ? "background: $radio_color;" : "") . "
    " . ($radio_border_color ? "border-color: $radio_border_color;" : "") . "
    " . ($radio_border_width ? "border-width: {$radio_border_width}{$radio_border_width_units};" : "") . "
    " . ($contact_form_checkbox_border_radius_desktop_width ? "border-radius: $contact_form_checkbox_border_radius_desktop_width;" : "") . "
    position: relative;
    appearance: none;
    transition: all .3s ease-in-out;
}
.$block_id.fb-contact-form-wrapper input[type='checkbox']:checked:before,
.$block_id.fb-contact-form-wrapper input[type='radio']:checked:before {
    " . ($radio_checked_color ? "background: $radio_checked_color;" : "") . "
}
.$block_id.fb-contact-form-wrapper input[type='submit'] {
        " . ($submit_alignment ? "text-align: $submit_alignment;" : "") . "
        " . ($submit_height ? "height: {$submit_height}{$submit_height_units};" : "") . "
        " . ($submit_color ? "color: $submit_color;" : "") . "
        " . ($submit_bg_color ? "background: $submit_bg_color;" : "") . "
        " . ($submit_font_family ? "font-family: $submit_font_family;" : "") . "
        " . ($submit_font_size ? "font-size: {$submit_font_size}{$submit_font_size_units};" : "") . "
        " . ($submit_font_weight ? "font-weight: $submit_font_weight;" : "") . "
        " . ($submit_font_style ? "font-style: $submit_font_style;" : "") . "
        " . ($submit_text_transform ? "text-transform: $submit_text_transform;" : "") . "
        " . ($submit_text_decoration ? "text-decoration: $submit_text_decoration;" : "") . "
        " . ($submit_letter_spacing ? "letter-spacing: {$submit_letter_spacing}{$submit_letter_spacing_units};" : "") . "
        " . ($submit_line_height ? "line-height: {$submit_line_height}{$submit_line_height_units};" : "") . "
        " . ($submit_desktop_padding ? "padding: $submit_desktop_padding;" : "") . "
        " . ($submit_desktop_margin ? "margin: $submit_desktop_margin;" : "") . "
        " . ($submit_border ? "border: $submit_border;" : "") . "
        " . ($submit_border_width ? "border-width: $submit_border_width;" : "") . "
        " . ($submit_border_color ? "border-color: $submit_border_color;" : "") . "
        " . ($submit_border_radius ? "border-radius: $submit_border_radius;" : "") . "
    }
";


EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $block_id);
