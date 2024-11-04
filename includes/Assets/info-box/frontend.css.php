<?php

use FrontisBlocks\Assets\EnqueueBlocksCss;

$block_attributes = $block['attrs'];

$block_id = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';
$heading_color = isset($block_attributes['Heading_Color']) ? sanitize_hex_color($block_attributes['Heading_Color']) : '';
$heading_background_color = isset($block_attributes['Heading_Background_Color']) ? sanitize_hex_color($block_attributes['Heading_Background_Color']) : '';
$heading_font_family = isset($block_attributes['Heading_Font_Family']) && $block_attributes['Heading_Font_Family'] !== 'default' ? sanitize_text_field($block_attributes['Heading_Font_Family']) : 'default';
$heading_font_size = isset($block_attributes['Heading_Font_Size']) ? sanitize_text_field($block_attributes['Heading_Font_Size']) : '35';
$heading_font_size_units = isset($block_attributes['Heading_Font_size_units']) ? sanitize_text_field($block_attributes['Heading_Font_size_units']) : 'px';
$heading_font_weight = isset($block_attributes['Heading_Font_Weight']) ? sanitize_text_field($block_attributes['Heading_Font_Weight']) : 'normal';
$heading_font_style = isset($block_attributes['Heading_Font_Style']) ? sanitize_text_field($block_attributes['Heading_Font_Style']) : 'normal';
$heading_text_transform = isset($block_attributes['Heading_Text_Transform']) ? sanitize_text_field($block_attributes['Heading_Text_Transform']) : 'none';
$heading_text_decoration = isset($block_attributes['Heading_Text_Decoration']) ? sanitize_text_field($block_attributes['Heading_Text_Decoration']) : 'none';
$heading_letter_spacing = isset($block_attributes['Heading_Letter_Spacing']) ? sanitize_text_field($block_attributes['Heading_Letter_Spacing']) : '';
$heading_letter_spacing_units = isset($block_attributes['Heading_Letter_Spacing_units']) ? sanitize_text_field($block_attributes['Heading_Letter_Spacing_units']) : 'px';
$heading_line_height = isset($block_attributes['Heading_Line_Height']) ? sanitize_text_field($block_attributes['Heading_Line_Height']) : '';
$heading_line_height_units = isset($block_attributes['Heading_Line_Height_units']) ? sanitize_text_field($block_attributes['Heading_Line_Height_units']) : '';
$heading_border = isset($block_attributes['Heading_Border']) ? sanitize_text_field($block_attributes['Heading_Border']) : '';
$heading_border_color = isset($block_attributes['Heading_Border_Color']) ? sanitize_hex_color($block_attributes['Heading_Border_Color']) : '';
//Heading padding
$heading_padding_units = isset($block_attributes['Heading_padding_units']) ? sanitize_text_field($block_attributes['Heading_padding_units']) : 'px';

$heading_desktop_padding_top = isset($block_attributes['Heading_Desktop_padding']['top']) ? sanitize_text_field($block_attributes['Heading_Desktop_padding']['top']) : '0';
$heading_desktop_padding_right = isset($block_attributes['Heading_Desktop_padding']['right']) ? sanitize_text_field($block_attributes['Heading_Desktop_padding']['right']) : '0';
$heading_desktop_padding_bottom = isset($block_attributes['Heading_Desktop_padding']['bottom']) ? sanitize_text_field($block_attributes['Heading_Desktop_padding']['bottom']) : '0';
$heading_desktop_padding_left = isset($block_attributes['Heading_Desktop_padding']['left']) ? sanitize_text_field($block_attributes['Heading_Desktop_padding']['left']) : '0';

$padding = "{$heading_desktop_padding_top}{$heading_padding_units} {$heading_desktop_padding_right}{$heading_padding_units} {$heading_desktop_padding_bottom}{$heading_padding_units} {$heading_desktop_padding_left}{$heading_padding_units}";
//Heading margin
$heading_desktop_margin_top = isset($block_attributes['Heading_Desktop_Margin']['top']) ? sanitize_text_field($block_attributes['Heading_Desktop_Margin']['top']) : '0';
$heading_desktop_margin_right = isset($block_attributes['Heading_Desktop_Margin']['right']) ? sanitize_text_field($block_attributes['Heading_Desktop_Margin']['right']) : '0';
$heading_desktop_margin_bottom = isset($block_attributes['Heading_Desktop_Margin']['bottom']) ? sanitize_text_field($block_attributes['Heading_Desktop_Margin']['bottom']) : '0';
$heading_desktop_margin_left = isset($block_attributes['Heading_Desktop_Margin']['left']) ? sanitize_text_field($block_attributes['Heading_Desktop_Margin']['left']) : '0';

$margin = "{$heading_desktop_margin_top}{$heading_padding_units} {$heading_desktop_margin_right}{$heading_padding_units} {$heading_desktop_margin_bottom}{$heading_padding_units} {$heading_desktop_margin_left}{$heading_padding_units}";

//Heading border
$heading_border_units = isset($block_attributes['Heading_Border_units']) ? sanitize_text_field($block_attributes['Heading_Border_units']) : 'px';

$heading_desktop_border_width_top = isset($block_attributes['Heading_Desktop_Border_Width']['top']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_Width']['top']) : '0';
$heading_desktop_border_width_right = isset($block_attributes['Heading_Desktop_Border_Width']['right']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_Width']['right']) : '0';
$heading_desktop_border_width_bottom = isset($block_attributes['Heading_Desktop_Border_Width']['bottom']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_Width']['bottom']) : '0';
$heading_desktop_border_width_left = isset($block_attributes['Heading_Desktop_Border_Width']['left']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_Width']['left']) : '0';

$border_width = "{$heading_desktop_border_width_top}{$heading_border_units} {$heading_desktop_border_width_right}{$heading_border_units} {$heading_desktop_border_width_bottom}{$heading_border_units} {$heading_desktop_border_width_left}{$heading_border_units}";
//Heading border radius
$heading_border_radius_units = isset($block_attributes['Heading_Border_radius_units']) ? sanitize_text_field($block_attributes['Heading_Border_radius_units']) : 'px';

$heading_desktop_border_radius_width_top = isset($block_attributes['Heading_Desktop_Border_radius_Width']['top']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_radius_Width']['top']) : '0';
$heading_desktop_border_radius_width_right = isset($block_attributes['Heading_Desktop_Border_radius_Width']['right']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_radius_Width']['right']) : '0';
$heading_desktop_border_radius_width_bottom = isset($block_attributes['Heading_Desktop_Border_radius_Width']['bottom']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_radius_Width']['bottom']) : '0';
$heading_desktop_border_radius_width_left = isset($block_attributes['Heading_Desktop_Border_radius_Width']['left']) ? sanitize_text_field($block_attributes['Heading_Desktop_Border_radius_Width']['left']) : '0';

$border_radius_width = "{$heading_desktop_border_radius_width_top}{$heading_border_radius_units} {$heading_desktop_border_radius_width_right}{$heading_border_radius_units} {$heading_desktop_border_radius_width_bottom}{$heading_border_radius_units} {$heading_desktop_border_radius_width_left}{$heading_border_radius_units}";
//Heading Hover
$heading_hover_color = isset($block_attributes['Heading_Hover_Color']) ? sanitize_text_field($block_attributes['Heading_Hover_Color']) : '';
$heading_border_hover_color = isset($block_attributes['Heading_Border_Hover_Color']) ? sanitize_text_field($block_attributes['Heading_Border_Hover_Color']) : '';
//Tab
// Padding
$heading_tab_padding_top = isset($block_attributes['Heading_Tab_padding']['top']) ? sanitize_text_field($block_attributes['Heading_Tab_padding']['top']) : '0';
$heading_tab_padding_right = isset($block_attributes['Heading_Tab_padding']['right']) ? sanitize_text_field($block_attributes['Heading_Tab_padding']['right']) : '0';
$heading_tab_padding_bottom = isset($block_attributes['Heading_Tab_padding']['bottom']) ? sanitize_text_field($block_attributes['Heading_Tab_padding']['bottom']) : '0';
$heading_tab_padding_left = isset($block_attributes['Heading_Tab_padding']['left']) ? sanitize_text_field($block_attributes['Heading_Tab_padding']['left']) : '0';
$heading_padding_units = isset($block_attributes['Heading_padding_units']) ? sanitize_text_field($block_attributes['Heading_padding_units']) : 'px';

$tab_padding = "{$heading_tab_padding_top}{$heading_padding_units} {$heading_tab_padding_right}{$heading_padding_units} {$heading_tab_padding_bottom}{$heading_padding_units} {$heading_tab_padding_left}{$heading_padding_units}";

// Margin
$heading_tab_margin_top = isset($block_attributes['Heading_Tab_Margin']['top']) ? sanitize_text_field($block_attributes['Heading_Tab_Margin']['top']) : '0';
$heading_tab_margin_right = isset($block_attributes['Heading_Tab_Margin']['right']) ? sanitize_text_field($block_attributes['Heading_Tab_Margin']['right']) : '0';
$heading_tab_margin_bottom = isset($block_attributes['Heading_Tab_Margin']['bottom']) ? sanitize_text_field($block_attributes['Heading_Tab_Margin']['bottom']) : '0';
$heading_tab_margin_left = isset($block_attributes['Heading_Tab_Margin']['left']) ? sanitize_text_field($block_attributes['Heading_Tab_Margin']['left']) : '0';
$heading_margin_units = isset($block_attributes['Heading_Margin_Units']) ? sanitize_text_field($block_attributes['Heading_Margin_Units']) : 'px';

$tab_margin = "{$heading_tab_margin_top}{$heading_margin_units} {$heading_tab_margin_right}{$heading_margin_units} {$heading_tab_margin_bottom}{$heading_margin_units} {$heading_tab_margin_left}{$heading_margin_units}";

// Border Width
$heading_tab_border_width_top = isset($block_attributes['Heading_Tab_Border_Width']['top']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_Width']['top']) : '0';
$heading_tab_border_width_right = isset($block_attributes['Heading_Tab_Border_Width']['right']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_Width']['right']) : '0';
$heading_tab_border_width_bottom = isset($block_attributes['Heading_Tab_Border_Width']['bottom']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_Width']['bottom']) : '0';
$heading_tab_border_width_left = isset($block_attributes['Heading_Tab_Border_Width']['left']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_Width']['left']) : '0';
$heading_border_units = isset($block_attributes['Heading_Border_units']) ? sanitize_text_field($block_attributes['Heading_Border_units']) : 'px';

$tab_border_width = "{$heading_tab_border_width_top}{$heading_border_units} {$heading_tab_border_width_right}{$heading_border_units} {$heading_tab_border_width_bottom}{$heading_border_units} {$heading_tab_border_width_left}{$heading_border_units}";

// Border Radius
$heading_tab_border_radius_top = isset($block_attributes['Heading_Tab_Border_radius_Width']['top']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_radius_Width']['top']) : '0';
$heading_tab_border_radius_right = isset($block_attributes['Heading_Tab_Border_radius_Width']['right']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_radius_Width']['right']) : '0';
$heading_tab_border_radius_bottom = isset($block_attributes['Heading_Tab_Border_radius_Width']['bottom']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_radius_Width']['bottom']) : '0';
$heading_tab_border_radius_left = isset($block_attributes['Heading_Tab_Border_radius_Width']['left']) ? sanitize_text_field($block_attributes['Heading_Tab_Border_radius_Width']['left']) : '0';
$heading_border_radius_units = isset($block_attributes['Heading_Border_radius_units']) ? sanitize_text_field($block_attributes['Heading_Border_radius_units']) : 'px';

$tab_border_radius_width = "{$heading_tab_border_radius_top}{$heading_border_radius_units} {$heading_tab_border_radius_right}{$heading_border_radius_units} {$heading_tab_border_radius_bottom}{$heading_border_radius_units} {$heading_tab_border_radius_left}{$heading_border_radius_units}";

// Mobile Padding
$heading_mobile_padding_top = isset($block_attributes['Heading_Mobile_padding']['top']) ? sanitize_text_field($block_attributes['Heading_Mobile_padding']['top']) : '0';
$heading_mobile_padding_right = isset($block_attributes['Heading_Mobile_padding']['right']) ? sanitize_text_field($block_attributes['Heading_Mobile_padding']['right']) : '0';
$heading_mobile_padding_bottom = isset($block_attributes['Heading_Mobile_padding']['bottom']) ? sanitize_text_field($block_attributes['Heading_Mobile_padding']['bottom']) : '0';
$heading_mobile_padding_left = isset($block_attributes['Heading_Mobile_padding']['left']) ? sanitize_text_field($block_attributes['Heading_Mobile_padding']['left']) : '0';
$heading_padding_units = isset($block_attributes['Heading_padding_units']) ? sanitize_text_field($block_attributes['Heading_padding_units']) : 'px';
$mobile_padding = "{$heading_mobile_padding_top}{$heading_padding_units} {$heading_mobile_padding_right}{$heading_padding_units} {$heading_mobile_padding_bottom}{$heading_padding_units} {$heading_mobile_padding_left}{$heading_padding_units}";
// Mobile Margin
$heading_mobile_margin_top = isset($block_attributes['Heading_Mobile_Margin']['top']) ? sanitize_text_field($block_attributes['Heading_Mobile_Margin']['top']) : '0';
$heading_mobile_margin_right = isset($block_attributes['Heading_Mobile_Margin']['right']) ? sanitize_text_field($block_attributes['Heading_Mobile_Margin']['right']) : '0';
$heading_mobile_margin_bottom = isset($block_attributes['Heading_Mobile_Margin']['bottom']) ? sanitize_text_field($block_attributes['Heading_Mobile_Margin']['bottom']) : '0';
$heading_mobile_margin_left = isset($block_attributes['Heading_Mobile_Margin']['left']) ? sanitize_text_field($block_attributes['Heading_Mobile_Margin']['left']) : '0';
$heading_margin_units = isset($block_attributes['Heading_Margin_Units']) ? sanitize_text_field($block_attributes['Heading_Margin_Units']) : 'px';
$mobile_margin = "{$heading_mobile_margin_top}{$heading_margin_units} {$heading_mobile_margin_right}{$heading_margin_units} {$heading_mobile_margin_bottom}{$heading_margin_units} {$heading_mobile_margin_left}{$heading_margin_units}";
// Mobile Border Width
$heading_mobile_border_width_top = isset($block_attributes['Heading_Mobile_Border_Width']['top']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_Width']['top']) : '0';
$heading_mobile_border_width_right = isset($block_attributes['Heading_Mobile_Border_Width']['right']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_Width']['right']) : '0';
$heading_mobile_border_width_bottom = isset($block_attributes['Heading_Mobile_Border_Width']['bottom']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_Width']['bottom']) : '0';
$heading_mobile_border_width_left = isset($block_attributes['Heading_Mobile_Border_Width']['left']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_Width']['left']) : '0';
$heading_border_units = isset($block_attributes['Heading_Border_units']) ? sanitize_text_field($block_attributes['Heading_Border_units']) : 'px';
$mobile_border = "{$heading_mobile_border_width_top}{$heading_border_units} {$heading_mobile_border_width_right}{$heading_border_units} {$heading_mobile_border_width_bottom}{$heading_border_units} {$heading_mobile_border_width_left}{$heading_border_units}";
// Mobile Border Radius
$heading_mobile_border_radius_top = isset($block_attributes['Heading_Mobile_Border_radius_Width']['top']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_radius_Width']['top']) : '0';
$heading_mobile_border_radius_right = isset($block_attributes['Heading_Mobile_Border_radius_Width']['right']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_radius_Width']['right']) : '0';
$heading_mobile_border_radius_bottom = isset($block_attributes['Heading_Mobile_Border_radius_Width']['bottom']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_radius_Width']['bottom']) : '0';
$heading_mobile_border_radius_left = isset($block_attributes['Heading_Mobile_Border_radius_Width']['left']) ? sanitize_text_field($block_attributes['Heading_Mobile_Border_radius_Width']['left']) : '0';
$heading_border_radius_units = isset($block_attributes['Heading_Border_radius_units']) ? sanitize_text_field($block_attributes['Heading_Border_radius_units']) : 'px';
$mobile_border_radius = "{$heading_mobile_border_radius_top}{$heading_border_radius_units} {$heading_mobile_border_radius_right}{$heading_border_radius_units} {$heading_mobile_border_radius_bottom}{$heading_border_radius_units} {$heading_mobile_border_radius_left}{$heading_border_radius_units}";
//Description style
// Description Color
$sub_heading_color = isset($block_attributes['SubHeadingColor']) ? sanitize_text_field($block_attributes['SubHeadingColor']) : '';
$sub_heading_color_css = !empty($sub_heading_color) ? "color: $sub_heading_color;" : '';
// Description Font Family
$sub_heading_font_family = isset($block_attributes['SubHeadingFontFamily']) ? sanitize_text_field($block_attributes['SubHeadingFontFamily']) : 'default';
$sub_heading_font_family_css = $sub_heading_font_family !== 'default' ? "font-family: $sub_heading_font_family;" : '';
// Description Font Size
$sub_heading_font_size = isset($block_attributes['SubHeadingFontSize']) ? sanitize_text_field($block_attributes['SubHeadingFontSize']) : '';
$sub_heading_font_size_units = isset($block_attributes['SubHeadingFontSizeUnits']) ? sanitize_text_field($block_attributes['SubHeadingFontSizeUnits']) : 'px';
$sub_heading_font_size_css = !empty($sub_heading_font_size) ? "font-size: {$sub_heading_font_size}{$sub_heading_font_size_units};" : '';
// Description Font Weight
$sub_heading_font_weight = isset($block_attributes['SubHeadingFontWeight']) ? sanitize_text_field($block_attributes['SubHeadingFontWeight']) : 'normal';
// Description Font Style
$sub_heading_font_style = isset($block_attributes['SubHeadingFontStyle']) ? sanitize_text_field($block_attributes['SubHeadingFontStyle']) : 'normal';
// Description Text Transform
$sub_heading_text_transform = isset($block_attributes['SubHeadingTextTransform']) ? sanitize_text_field($block_attributes['SubHeadingTextTransform']) : 'none';
// Description Text Decoration
$sub_heading_text_decoration = isset($block_attributes['SubHeadingTextDecoration']) ? sanitize_text_field($block_attributes['SubHeadingTextDecoration']) : 'none';
// Description Padding
$sub_heading_desktop_padding_top = isset($block_attributes['SubHeadingDesktopPadding']['top']) ? sanitize_text_field($block_attributes['SubHeadingDesktopPadding']['top']) : '15';
$sub_heading_desktop_padding_right = isset($block_attributes['SubHeadingDesktopPadding']['right']) ? sanitize_text_field($block_attributes['SubHeadingDesktopPadding']['right']) : '0';
$sub_heading_desktop_padding_bottom = isset($block_attributes['SubHeadingDesktopPadding']['bottom']) ? sanitize_text_field($block_attributes['SubHeadingDesktopPadding']['bottom']) : '15';
$sub_heading_desktop_padding_left = isset($block_attributes['SubHeadingDesktopPadding']['left']) ? sanitize_text_field($block_attributes['SubHeadingDesktopPadding']['left']) : '0';
$sub_heading_padding_units = isset($block_attributes['SubHeadingPaddingUnits']) ? sanitize_text_field($block_attributes['SubHeadingPaddingUnits']) : 'px';
$desc_padding = "{$sub_heading_desktop_padding_top}{$sub_heading_padding_units} {$sub_heading_desktop_padding_right}{$sub_heading_padding_units} {$sub_heading_desktop_padding_bottom}{$sub_heading_padding_units} {$sub_heading_desktop_padding_left}{$sub_heading_padding_units}";
// Description Margin
$desc_desktop_margin_top = isset($block_attributes['descDesktopMargin']['top']) ? sanitize_text_field($block_attributes['descDesktopMargin']['top']) : '0';
$desc_desktop_margin_right = isset($block_attributes['descDesktopMargin']['right']) ? sanitize_text_field($block_attributes['descDesktopMargin']['right']) : '0';
$desc_desktop_margin_bottom = isset($block_attributes['descDesktopMargin']['bottom']) ? sanitize_text_field($block_attributes['descDesktopMargin']['bottom']) : '0';
$desc_desktop_margin_left = isset($block_attributes['descDesktopMargin']['left']) ? sanitize_text_field($block_attributes['descDesktopMargin']['left']) : '0';
$desc_margin_units = isset($block_attributes['descMarginUnits']) ? sanitize_text_field($block_attributes['descMarginUnits']) : 'px';
$desc_margin = "{$desc_desktop_margin_top}{$desc_margin_units} {$desc_desktop_margin_right}{$desc_margin_units} {$desc_desktop_margin_bottom}{$desc_margin_units} {$desc_desktop_margin_left}{$desc_margin_units}";
//Description hover
$sub_heading_hover_color = isset($block_attributes['SubHeadingHoverColor']) ? sanitize_text_field($block_attributes['SubHeadingHoverColor']) : '';
//Description Responsive
// Tab padding and margin
$sub_heading_tab_padding_top = isset($block_attributes['SubHeadingTabPadding']['top']) ? sanitize_text_field($block_attributes['SubHeadingTabPadding']['top']) : '0';
$sub_heading_tab_padding_right = isset($block_attributes['SubHeadingTabPadding']['right']) ? sanitize_text_field($block_attributes['SubHeadingTabPadding']['right']) : '0';
$sub_heading_tab_padding_bottom = isset($block_attributes['SubHeadingTabPadding']['bottom']) ? sanitize_text_field($block_attributes['SubHeadingTabPadding']['bottom']) : '0';
$sub_heading_tab_padding_left = isset($block_attributes['SubHeadingTabPadding']['left']) ? sanitize_text_field($block_attributes['SubHeadingTabPadding']['left']) : '0';
$sub_heading_padding_units = isset($block_attributes['SubHeadingPaddingUnits']) ? sanitize_text_field($block_attributes['SubHeadingPaddingUnits']) : 'px';
$tab_desc_padding = "{$sub_heading_tab_padding_top}{$sub_heading_padding_units} {$sub_heading_tab_padding_right}{$sub_heading_padding_units} {$sub_heading_tab_padding_bottom}{$sub_heading_padding_units} {$sub_heading_tab_padding_left}{$sub_heading_padding_units}";

$desc_tab_margin_top = isset($block_attributes['descTabMargin']['top']) ? sanitize_text_field($block_attributes['descTabMargin']['top']) : '0';
$desc_tab_margin_right = isset($block_attributes['descTabMargin']['right']) ? sanitize_text_field($block_attributes['descTabMargin']['right']) : '0';
$desc_tab_margin_bottom = isset($block_attributes['descTabMargin']['bottom']) ? sanitize_text_field($block_attributes['descTabMargin']['bottom']) : '0';
$desc_tab_margin_left = isset($block_attributes['descTabMargin']['left']) ? sanitize_text_field($block_attributes['descTabMargin']['left']) : '0';
$desc_margin_units = isset($block_attributes['descMarginUnits']) ? sanitize_text_field($block_attributes['descMarginUnits']) : 'px';
$tab_desc_margin = "{$desc_tab_margin_top}{$desc_margin_units} {$desc_tab_margin_right}{$desc_margin_units} {$desc_tab_margin_bottom}{$desc_margin_units} {$desc_tab_margin_left}{$desc_margin_units}";
// Mobile padding and margin
$sub_heading_mobile_padding_top = isset($block_attributes['SubHeadingMobilePadding']['top']) ? sanitize_text_field($block_attributes['SubHeadingMobilePadding']['top']) : '0';
$sub_heading_mobile_padding_right = isset($block_attributes['SubHeadingMobilePadding']['right']) ? sanitize_text_field($block_attributes['SubHeadingMobilePadding']['right']) : '0';
$sub_heading_mobile_padding_bottom = isset($block_attributes['SubHeadingMobilePadding']['bottom']) ? sanitize_text_field($block_attributes['SubHeadingMobilePadding']['bottom']) : '0';
$sub_heading_mobile_padding_left = isset($block_attributes['SubHeadingMobilePadding']['left']) ? sanitize_text_field($block_attributes['SubHeadingMobilePadding']['left']) : '0';
$mobile_desc_padding = "{$sub_heading_mobile_padding_top}{$sub_heading_padding_units} {$sub_heading_mobile_padding_right}{$sub_heading_padding_units} {$sub_heading_mobile_padding_bottom}{$sub_heading_padding_units} {$sub_heading_mobile_padding_left}{$sub_heading_padding_units}";
// Mobile margin
$desc_mobile_margin_top = isset($block_attributes['descMobileMargin']['top']) ? sanitize_text_field($block_attributes['descMobileMargin']['top']) : '0';
$desc_mobile_margin_right = isset($block_attributes['descMobileMargin']['right']) ? sanitize_text_field($block_attributes['descMobileMargin']['right']) : '0';
$desc_mobile_margin_bottom = isset($block_attributes['descMobileMargin']['bottom']) ? sanitize_text_field($block_attributes['descMobileMargin']['bottom']) : '0';
$desc_mobile_margin_left = isset($block_attributes['descMobileMargin']['left']) ? sanitize_text_field($block_attributes['descMobileMargin']['left']) : '0';
$mobile_desc_margin = "{$desc_mobile_margin_top}{$desc_margin_units} {$desc_mobile_margin_right}{$desc_margin_units} {$desc_mobile_margin_bottom}{$desc_margin_units} {$desc_mobile_margin_left}{$desc_margin_units}";
//Icon
// Media size and units for desktop, tablet, and mobile
$media_size_desktop = isset($block_attributes['mediaSize']['Desktop']) ? sanitize_text_field($block_attributes['mediaSize']['Desktop']) : '25';
$media_size_units_desktop = isset($block_attributes['mediaSizeUnits']['Desktop']) ? sanitize_text_field($block_attributes['mediaSizeUnits']['Desktop']) : 'px';

$media_size_tablet = isset($block_attributes['mediaSize']['Tablet']) ? sanitize_text_field($block_attributes['mediaSize']['Tablet']) : '25';
$media_size_units_tablet = isset($block_attributes['mediaSizeUnits']['Tablet']) ? sanitize_text_field($block_attributes['mediaSizeUnits']['Tablet']) : 'px';

$media_size_mobile = isset($block_attributes['mediaSize']['Mobile']) ? sanitize_text_field($block_attributes['mediaSize']['Mobile']) : '25';
$media_size_units_mobile = isset($block_attributes['mediaSizeUnits']['Mobile']) ? sanitize_text_field($block_attributes['mediaSizeUnits']['Mobile']) : 'px';
//Box Style
// Define padding units and values for each device type (Desktop, Tablet, Mobile)
$info_box_padding_units = isset($block_attributes['globalPaddingUnits']) ? $block_attributes['globalPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_box_desktop_padding = isset($block_attributes['globalPaddingDesktop']) ? $block_attributes['globalPaddingDesktop'] : array('top' => '40', 'right' => '40', 'bottom' => '40', 'left' => '40');
$info_box_tablet_padding = isset($block_attributes['globalPaddingTablet']) ? $block_attributes['globalPaddingTablet'] : array('top' => '20', 'right' => '20', 'bottom' => '20', 'left' => '20');
$info_box_mobile_padding = isset($block_attributes['globalPaddingMobile']) ? $block_attributes['globalPaddingMobile'] : array('top' => '10', 'right' => '10', 'bottom' => '10', 'left' => '10');

// Padding strings for each device type
$box_padding_desktop = $info_box_desktop_padding['top'] . $info_box_padding_units['Desktop'] . ' ' . $info_box_desktop_padding['right'] . $info_box_padding_units['Desktop'] . ' ' . $info_box_desktop_padding['bottom'] . $info_box_padding_units['Desktop'] . ' ' . $info_box_desktop_padding['left'] . $info_box_padding_units['Desktop'];
$box_padding_tablet = $info_box_tablet_padding['top'] . $info_box_padding_units['Tablet'] . ' ' . $info_box_tablet_padding['right'] . $info_box_padding_units['Tablet'] . ' ' . $info_box_tablet_padding['bottom'] . $info_box_padding_units['Tablet'] . ' ' . $info_box_tablet_padding['left'] . $info_box_padding_units['Tablet'];
$box_padding_mobile = $info_box_mobile_padding['top'] . $info_box_padding_units['Mobile'] . ' ' . $info_box_mobile_padding['right'] . $info_box_padding_units['Mobile'] . ' ' . $info_box_mobile_padding['bottom'] . $info_box_padding_units['Mobile'] . ' ' . $info_box_mobile_padding['left'] . $info_box_padding_units['Mobile'];

// Define margin units and values for each device type (Desktop, Tablet, Mobile)
$info_box_margin_units = isset($block_attributes['infoBoxMarginUnits']) ? $block_attributes['infoBoxMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_box_desktop_margin = isset($block_attributes['infoBoxDesktopMargin']) ? $block_attributes['infoBoxDesktopMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_box_tablet_margin = isset($block_attributes['infoBoxTabletMargin']) ? $block_attributes['infoBoxTabletMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_box_mobile_margin = isset($block_attributes['infoBoxMobileMargin']) ? $block_attributes['infoBoxMobileMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

// Margin strings for each device type
$box_margin_desktop = $info_box_desktop_margin['top'] . $info_box_margin_units['Desktop'] . ' ' . $info_box_desktop_margin['right'] . $info_box_margin_units['Desktop'] . ' ' . $info_box_desktop_margin['bottom'] . $info_box_margin_units['Desktop'] . ' ' . $info_box_desktop_margin['left'] . $info_box_margin_units['Desktop'];
$box_margin_tablet = $info_box_tablet_margin['top'] . $info_box_margin_units['Tablet'] . ' ' . $info_box_tablet_margin['right'] . $info_box_margin_units['Tablet'] . ' ' . $info_box_tablet_margin['bottom'] . $info_box_margin_units['Tablet'] . ' ' . $info_box_tablet_margin['left'] . $info_box_margin_units['Tablet'];
$box_margin_mobile = $info_box_mobile_margin['top'] . $info_box_margin_units['Mobile'] . ' ' . $info_box_mobile_margin['right'] . $info_box_margin_units['Mobile'] . ' ' . $info_box_mobile_margin['bottom'] . $info_box_margin_units['Mobile'] . ' ' . $info_box_mobile_margin['left'] . $info_box_margin_units['Mobile'];

// Define border width units and values for each device type
$info_box_border_units = isset($block_attributes['infoBoxBorderUnits']) ? $block_attributes['infoBoxBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_box_desktop_border_width = isset($block_attributes['infoBoxDesktopBorderWidth']) ? $block_attributes['infoBoxDesktopBorderWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_box_tablet_border_width = isset($block_attributes['infoBoxTabletBorderWidth']) ? $block_attributes['infoBoxTabletBorderWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_box_mobile_border_width = isset($block_attributes['infoBoxMobileBorderWidth']) ? $block_attributes['infoBoxMobileBorderWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

// Border width strings for each device type
$box_border_width_desktop = $info_box_desktop_border_width['top'] . $info_box_border_units['Desktop'] . ' ' . $info_box_desktop_border_width['right'] . $info_box_border_units['Desktop'] . ' ' . $info_box_desktop_border_width['bottom'] . $info_box_border_units['Desktop'] . ' ' . $info_box_desktop_border_width['left'] . $info_box_border_units['Desktop'];
$box_border_width_tablet = $info_box_tablet_border_width['top'] . $info_box_border_units['Tablet'] . ' ' . $info_box_tablet_border_width['right'] . $info_box_border_units['Tablet'] . ' ' . $info_box_tablet_border_width['bottom'] . $info_box_border_units['Tablet'] . ' ' . $info_box_tablet_border_width['left'] . $info_box_border_units['Tablet'];
$box_border_width_mobile = $info_box_mobile_border_width['top'] . $info_box_border_units['Mobile'] . ' ' . $info_box_mobile_border_width['right'] . $info_box_border_units['Mobile'] . ' ' . $info_box_mobile_border_width['bottom'] . $info_box_border_units['Mobile'] . ' ' . $info_box_mobile_border_width['left'] . $info_box_border_units['Mobile'];

// Define border radius units and values for each device type
$info_box_border_radius_units = isset($block_attributes['globalBorderRadiusUnits']) ? $block_attributes['globalBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_box_desktop_border_radius_width = isset($block_attributes['globalBorderRadiusDesktop']) ? $block_attributes['globalBorderRadiusDesktop'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_box_tablet_border_radius_width = isset($block_attributes['globalBorderRadiusTablet']) ? $block_attributes['globalBorderRadiusTablet'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_box_mobile_border_radius_width = isset($block_attributes['globalBorderRadiusMobile']) ? $block_attributes['globalBorderRadiusMobile'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

// Border radius strings for each device type
$box_border_radius_width_desktop = $info_box_desktop_border_radius_width['top'] . $info_box_border_radius_units['Desktop'] . ' ' . $info_box_desktop_border_radius_width['right'] . $info_box_border_radius_units['Desktop'] . ' ' . $info_box_desktop_border_radius_width['bottom'] . $info_box_border_radius_units['Desktop'] . ' ' . $info_box_desktop_border_radius_width['left'] . $info_box_border_radius_units['Desktop'];
$box_border_radius_width_tablet = $info_box_tablet_border_radius_width['top'] . $info_box_border_radius_units['Tablet'] . ' ' . $info_box_tablet_border_radius_width['right'] . $info_box_border_radius_units['Tablet'] . ' ' . $info_box_tablet_border_radius_width['bottom'] . $info_box_border_radius_units['Tablet'] . ' ' . $info_box_tablet_border_radius_width['left'] . $info_box_border_radius_units['Tablet'];
$box_border_radius_width_mobile = $info_box_mobile_border_radius_width['top'] . $info_box_border_radius_units['Mobile'] . ' ' . $info_box_mobile_border_radius_width['right'] . $info_box_border_radius_units['Mobile'] . ' ' . $info_box_mobile_border_radius_width['bottom'] . $info_box_border_radius_units['Mobile'] . ' ' . $info_box_mobile_border_radius_width['left'] . $info_box_border_radius_units['Mobile'];

// Define border color and type
$info_box_border_color = isset($block_attributes['infoBoxBorderColor']) ? $block_attributes['infoBoxBorderColor'] : '';
$info_box_border_type = isset($block_attributes['infoBoxBorderType']) ? $block_attributes['infoBoxBorderType'] : 'solid';

$info_box_border = isset($block_attributes['infoBoxBorder']) ? sanitize_text_field($block_attributes['infoBoxBorder']) : 'none';
$info_box_border_color = isset($block_attributes['infoBoxBorderColor']) ? sanitize_text_field($block_attributes['infoBoxBorderColor']) : '';
$box_bg_color = isset($block_attributes['globalBgColor']) ? sanitize_text_field($block_attributes['globalBgColor']) : '#ffffff';
$box_bg_hover_color = isset($block_attributes['globalBgHoverColor']) ? sanitize_text_field($block_attributes['globalBgHoverColor']) : '';
$content_alignment = isset($block_attributes['contentAlignment']) ? sanitize_text_field($block_attributes['contentAlignment']) : 'left';

//Button Styles
$info_button_padding_units = isset($block_attributes['infoButtonPaddingUnits']) ? $block_attributes['infoButtonPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_button_desktop_padding = isset($block_attributes['infoButtonDesktopPadding']) ? $block_attributes['infoButtonDesktopPadding'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_button_tablet_padding = isset($block_attributes['infoButtonTabletPadding']) ? $block_attributes['infoButtonTabletPadding'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_button_mobile_padding = isset($block_attributes['infoButtonMobilePadding']) ? $block_attributes['infoButtonMobilePadding'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

$info_button_margin_units = isset($block_attributes['infoButtonMarginUnits']) ? $block_attributes['infoButtonMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_button_desktop_margin = isset($block_attributes['infoButtonDesktopMargin']) ? $block_attributes['infoButtonDesktopMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_button_tablet_margin = isset($block_attributes['infoButtonTabletMargin']) ? $block_attributes['infoButtonTabletMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_button_mobile_margin = isset($block_attributes['infoButtonMobileMargin']) ? $block_attributes['infoButtonMobileMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

$info_btn_borderradius_units = isset($block_attributes['infoBtnBorderradiusUnits']) ? $block_attributes['infoBtnBorderradiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_btn_desktop_borderradius_width = isset($block_attributes['infoBtnDesktopBorderradiusWidth']) ? $block_attributes['infoBtnDesktopBorderradiusWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_btn_tablet_borderradius_width = isset($block_attributes['infoBtnTabletBorderradiusWidth']) ? $block_attributes['infoBtnTabletBorderradiusWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_btn_mobile_borderradius_width = isset($block_attributes['infoBtnMobileBorderradiusWidth']) ? $block_attributes['infoBtnMobileBorderradiusWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

$info_button_border_units = isset($block_attributes['infoButtonBorderUnits']) ? $block_attributes['infoButtonBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$info_button_desktop_border_width = isset($block_attributes['infoButtonDesktopBorderWidth']) ? $block_attributes['infoButtonDesktopBorderWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_button_tablet_border_width = isset($block_attributes['infoButtonTabletBorderWidth']) ? $block_attributes['infoButtonTabletBorderWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$info_button_mobile_border_width = isset($block_attributes['infoButtonMobileBorderWidth']) ? $block_attributes['infoButtonMobileBorderWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

// Padding strings for each device type
$button_padding_desktop = $info_button_desktop_padding['top'] . $info_button_padding_units['Desktop'] . ' ' . $info_button_desktop_padding['right'] . $info_button_padding_units['Desktop'] . ' ' . $info_button_desktop_padding['bottom'] . $info_button_padding_units['Desktop'] . ' ' . $info_button_desktop_padding['left'] . $info_button_padding_units['Desktop'];
$button_padding_tablet = $info_button_tablet_padding['top'] . $info_button_padding_units['Tablet'] . ' ' . $info_button_tablet_padding['right'] . $info_button_padding_units['Tablet'] . ' ' . $info_button_tablet_padding['bottom'] . $info_button_padding_units['Tablet'] . ' ' . $info_button_tablet_padding['left'] . $info_button_padding_units['Tablet'];
$button_padding_mobile = $info_button_mobile_padding['top'] . $info_button_padding_units['Mobile'] . ' ' . $info_button_mobile_padding['right'] . $info_button_padding_units['Mobile'] . ' ' . $info_button_mobile_padding['bottom'] . $info_button_padding_units['Mobile'] . ' ' . $info_button_mobile_padding['left'] . $info_button_padding_units['Mobile'];

// Margin strings for each device type
$button_margin_desktop = $info_button_desktop_margin['top'] . $info_button_margin_units['Desktop'] . ' ' . $info_button_desktop_margin['right'] . $info_button_margin_units['Desktop'] . ' ' . $info_button_desktop_margin['bottom'] . $info_button_margin_units['Desktop'] . ' ' . $info_button_desktop_margin['left'] . $info_button_margin_units['Desktop'];
$button_margin_tablet = $info_button_tablet_margin['top'] . $info_button_margin_units['Tablet'] . ' ' . $info_button_tablet_margin['right'] . $info_button_margin_units['Tablet'] . ' ' . $info_button_tablet_margin['bottom'] . $info_button_margin_units['Tablet'] . ' ' . $info_button_tablet_margin['left'] . $info_button_margin_units['Tablet'];
$button_margin_mobile = $info_button_mobile_margin['top'] . $info_button_margin_units['Mobile'] . ' ' . $info_button_mobile_margin['right'] . $info_button_margin_units['Mobile'] . ' ' . $info_button_mobile_margin['bottom'] . $info_button_margin_units['Mobile'] . ' ' . $info_button_mobile_margin['left'] . $info_button_margin_units['Mobile'];

// Border-radius strings for each device type
$button_borderradius_desktop = $info_btn_desktop_borderradius_width['top'] . $info_btn_borderradius_units['Desktop'] . ' ' . $info_btn_desktop_borderradius_width['right'] . $info_btn_borderradius_units['Desktop'] . ' ' . $info_btn_desktop_borderradius_width['bottom'] . $info_btn_borderradius_units['Desktop'] . ' ' . $info_btn_desktop_borderradius_width['left'] . $info_btn_borderradius_units['Desktop'];
$button_borderradius_tablet = $info_btn_tablet_borderradius_width['top'] . $info_btn_borderradius_units['Tablet'] . ' ' . $info_btn_tablet_borderradius_width['right'] . $info_btn_borderradius_units['Tablet'] . ' ' . $info_btn_tablet_borderradius_width['bottom'] . $info_btn_borderradius_units['Tablet'] . ' ' . $info_btn_tablet_borderradius_width['left'] . $info_btn_borderradius_units['Tablet'];
$button_borderradius_mobile = $info_btn_mobile_borderradius_width['top'] . $info_btn_borderradius_units['Mobile'] . ' ' . $info_btn_mobile_borderradius_width['right'] . $info_btn_borderradius_units['Mobile'] . ' ' . $info_btn_mobile_borderradius_width['bottom'] . $info_btn_borderradius_units['Mobile'] . ' ' . $info_btn_mobile_borderradius_width['left'] . $info_btn_borderradius_units['Mobile'];

// Border-width strings for each device type
$button_border_desktop = $info_button_desktop_border_width['top'] . $info_button_border_units['Desktop'] . ' ' . $info_button_desktop_border_width['right'] . $info_button_border_units['Desktop'] . ' ' . $info_button_desktop_border_width['bottom'] . $info_button_border_units['Desktop'] . ' ' . $info_button_desktop_border_width['left'] . $info_button_border_units['Desktop'];
$button_border_tablet = $info_button_tablet_border_width['top'] . $info_button_border_units['Tablet'] . ' ' . $info_button_tablet_border_width['right'] . $info_button_border_units['Tablet'] . ' ' . $info_button_tablet_border_width['bottom'] . $info_button_border_units['Tablet'] . ' ' . $info_button_tablet_border_width['left'] . $info_button_border_units['Tablet'];
$button_border_mobile = $info_button_mobile_border_width['top'] . $info_button_border_units['Mobile'] . ' ' . $info_button_mobile_border_width['right'] . $info_button_border_units['Mobile'] . ' ' . $info_button_mobile_border_width['bottom'] . $info_button_border_units['Mobile'] . ' ' . $info_button_mobile_border_width['left'] . $info_button_border_units['Mobile'];

//Button typography
$button_text_color = isset($block_attributes['buttonTextColor']) ? sanitize_hex_color($block_attributes['buttonTextColor']) : '';
$button_text_hover_color = isset($block_attributes['buttonTextHoverColor']) ? sanitize_hex_color($block_attributes['buttonTextHoverColor']) : '';
$button_bg_color = isset($block_attributes['ButtonBgColor']) ? sanitize_hex_color($block_attributes['ButtonBgColor']) : '';
$button_font_family = isset($block_attributes['ButtonFontFamily']) ? sanitize_text_field($block_attributes['ButtonFontFamily']) : '';
$button_font_size = isset($block_attributes['ButtonFontSize']) ? sanitize_text_field($block_attributes['ButtonFontSize']) : '14';
$button_font_size_units = isset($block_attributes['ButtonFontSizeUnits']) ? sanitize_text_field($block_attributes['ButtonFontSizeUnits']) : 'px';
$button_font_weight = isset($block_attributes['ButtonFontWeight']) ? sanitize_text_field($block_attributes['ButtonFontWeight']) : 'normal';
$button_font_style = isset($block_attributes['ButtonFontStyle']) ? sanitize_text_field($block_attributes['ButtonFontStyle']) : 'normal';
$button_text_transform = isset($block_attributes['ButtonTextTransform']) ? sanitize_text_field($block_attributes['ButtonTextTransform']) : 'none';
$button_text_decoration = isset($block_attributes['ButtonTextDecoration']) ? sanitize_text_field($block_attributes['ButtonTextDecoration']) : 'none';
$info_button_border = isset($block_attributes['InfoButtonBorder']) ? sanitize_text_field($block_attributes['InfoButtonBorder']) : '';

//Hover
$button_bg_hover_color = isset($block_attributes['ButtonBgHoverColor']) ? sanitize_hex_color($block_attributes['ButtonBgHoverColor']) : '';

$media_bg_width_desktop = isset($block_attributes['mediaBgWidth']['Desktop']) ? sanitize_text_field($block_attributes['mediaBgWidth']['Desktop']) : '25';
$media_bg_width_units_desktop = isset($block_attributes['mediaBgWidthUnits']['Desktop']) ? sanitize_text_field($block_attributes['mediaBgWidthUnits']['Desktop']) : 'px';

$media_bg_height_desktop = isset($block_attributes['mediaBgHeight']['Desktop']) ? sanitize_text_field($block_attributes['mediaBgHeight']['Desktop']) : '25';
$media_bg_height_units_desktop = isset($block_attributes['mediaBgHeightUnits']['Desktop']) ? sanitize_text_field($block_attributes['mediaBgHeightUnits']['Desktop']) : 'px';

$media_bg_color = isset($block_attributes['mediaBgColor']) ? sanitize_hex_color($block_attributes['mediaBgColor']) : '';
$media_bg_hover_color = isset($block_attributes['mediaBgHoverColor']) ? sanitize_hex_color($block_attributes['mediaBgHoverColor']) : '';
$media_border = isset($block_attributes['mediaBorder']) ? sanitize_text_field($block_attributes['mediaBorder']) : 'none';

/** Start Header Border Radius */
$media_desktop_border_radius_units = isset($block_attributes['mediaBorderRadiusUnits']) ? $block_attributes['mediaBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$media_desktop_border_radius = isset($block_attributes['mediaBorderRadiusDesktop']) ? $block_attributes['mediaBorderRadiusDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$media_tablet_border_radius = isset($block_attributes['mediaBorderRadiusTablet']) ? $block_attributes['mediaBorderRadiusTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$media_mobile_border_radius = isset($block_attributes['mediaBorderRadiusMobile']) ? $block_attributes['mediaBorderRadiusMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
// Construct border radius strings for each device type
$media_desktop_border_radius_width = $media_desktop_border_radius['top'] . $media_desktop_border_radius_units['Desktop'] . ' ' . $media_desktop_border_radius['right'] . $media_desktop_border_radius_units['Desktop'] . ' ' . $media_desktop_border_radius['bottom'] . $media_desktop_border_radius_units['Desktop'] . ' ' . $media_desktop_border_radius['left'] . $media_desktop_border_radius_units['Desktop'];
$media_tablet_border_radius_width = $media_tablet_border_radius['top'] . $media_desktop_border_radius_units['Tablet'] . ' ' . $media_tablet_border_radius['right'] . $media_desktop_border_radius_units['Tablet'] . ' ' . $media_tablet_border_radius['bottom'] . $media_desktop_border_radius_units['Tablet'] . ' ' . $media_tablet_border_radius['left'] . $media_desktop_border_radius_units['Tablet'];
$media_mobile_border_radius_width = $media_mobile_border_radius['top'] . $media_desktop_border_radius_units['Mobile'] . ' ' . $media_mobile_border_radius['right'] . $media_desktop_border_radius_units['Mobile'] . ' ' . $media_mobile_border_radius['bottom'] . $media_desktop_border_radius_units['Mobile'] . ' ' . $media_mobile_border_radius['left'] . $media_desktop_border_radius_units['Mobile'];

// Padding
$media_padding_units = isset($block_attributes['mediaPaddingUnits']) ? $block_attributes['mediaPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$media_padding_desktop = isset($block_attributes['mediaPaddingDesktop']) ? $block_attributes['mediaPaddingDesktop'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$media_padding_tablet = isset($block_attributes['mediaPaddingTablet']) ? $block_attributes['mediaPaddingTablet'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$media_padding_mobile = isset($block_attributes['mediaPaddingMobile']) ? $block_attributes['mediaPaddingMobile'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');

// Construct padding strings for each device type
$media_desktop_padding = $media_padding_desktop['top'] . $media_padding_units['Desktop'] . ' ' .
    $media_padding_desktop['right'] . $media_padding_units['Desktop'] . ' ' .
    $media_padding_desktop['bottom'] . $media_padding_units['Desktop'] . ' ' .
    $media_padding_desktop['left'] . $media_padding_units['Desktop'];

$media_tablet_padding = $media_padding_tablet['top'] . $media_padding_units['Tablet'] . ' ' .
    $media_padding_tablet['right'] . $media_padding_units['Tablet'] . ' ' .
    $media_padding_tablet['bottom'] . $media_padding_units['Tablet'] . ' ' .
    $media_padding_tablet['left'] . $media_padding_units['Tablet'];

$media_mobile_padding = $media_padding_mobile['top'] . $media_padding_units['Mobile'] . ' ' .
    $media_padding_mobile['right'] . $media_padding_units['Mobile'] . ' ' .
    $media_padding_mobile['bottom'] . $media_padding_units['Mobile'] . ' ' .
    $media_padding_mobile['left'] . $media_padding_units['Mobile'];

// Margin
$media_margin_units = isset($block_attributes['mediaMarginUnits']) ? $block_attributes['mediaMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$media_margin_desktop = isset($block_attributes['mediaMarginDesktop']) ? $block_attributes['mediaMarginDesktop'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$media_margin_tablet = isset($block_attributes['mediaMarginTablet']) ? $block_attributes['mediaMarginTablet'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$media_margin_mobile = isset($block_attributes['mediaMarginMobile']) ? $block_attributes['mediaMarginMobile'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');

// Construct margin strings for each device type
$media_desktop_margin = $media_margin_desktop['top'] . $media_margin_units['Desktop'] . ' ' .
    $media_margin_desktop['right'] . $media_margin_units['Desktop'] . ' ' .
    $media_margin_desktop['bottom'] . $media_margin_units['Desktop'] . ' ' .
    $media_margin_desktop['left'] . $media_margin_units['Desktop'];

$media_tablet_margin = $media_margin_tablet['top'] . $media_margin_units['Tablet'] . ' ' .
    $media_margin_tablet['right'] . $media_margin_units['Tablet'] . ' ' .
    $media_margin_tablet['bottom'] . $media_margin_units['Tablet'] . ' ' .
    $media_margin_tablet['left'] . $media_margin_units['Tablet'];

$media_mobile_margin = $media_margin_mobile['top'] . $media_margin_units['Mobile'] . ' ' .
    $media_margin_mobile['right'] . $media_margin_units['Mobile'] . ' ' .
    $media_margin_mobile['bottom'] . $media_margin_units['Mobile'] . ' ' .
    $media_margin_mobile['left'] . $media_margin_units['Mobile'];

// Border
$media_border_units = isset($block_attributes['mediaBorderUnits']) ? $block_attributes['mediaBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$media_border_desktop = isset($block_attributes['mediaBorderDesktop']) ? $block_attributes['mediaBorderDesktop'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$media_border_tablet = isset($block_attributes['mediaBorderTablet']) ? $block_attributes['mediaBorderTablet'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');
$media_border_mobile = isset($block_attributes['mediaBorderMobile']) ? $block_attributes['mediaBorderMobile'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '0');

// Construct border strings for each device type
$media_border_desktop_width = $media_border_desktop['top'] . $media_border_units['Desktop'] . ' ' .
    $media_border_desktop['right'] . $media_border_units['Desktop'] . ' ' .
    $media_border_desktop['bottom'] . $media_border_units['Desktop'] . ' ' .
    $media_border_desktop['left'] . $media_border_units['Desktop'];

$media_border_tablet_width = $media_border_tablet['top'] . $media_border_units['Tablet'] . ' ' .
    $media_border_tablet['right'] . $media_border_units['Tablet'] . ' ' .
    $media_border_tablet['bottom'] . $media_border_units['Tablet'] . ' ' .
    $media_border_tablet['left'] . $media_border_units['Tablet'];

$media_border_mobile_width = $media_border_mobile['top'] . $media_border_units['Mobile'] . ' ' .
    $media_border_mobile['right'] . $media_border_units['Mobile'] . ' ' .
    $media_border_mobile['bottom'] . $media_border_units['Mobile'] . ' ' .
    $media_border_mobile['left'] . $media_border_units['Mobile'];



$btn_icon_size_desktop = isset($block_attributes['btnIconSize']['Desktop']) ? sanitize_text_field($block_attributes['btnIconSize']['Desktop']) : '16';
$btn_icon_size_units_desktop = isset($block_attributes['btnIconSizeUnits']['Desktop']) ? sanitize_text_field($block_attributes['btnIconSizeUnits']['Desktop']) : 'px';

$btn_icon_size_tablet = isset($block_attributes['btnIconSize']['Tablet']) ? sanitize_text_field($block_attributes['mediaSize']['Tablet']) : '16';
$btn_icon_size_units_tablet = isset($block_attributes['btnIconSizeUnits']['Tablet']) ? sanitize_text_field($block_attributes['btnIconSizeUnits']['Tablet']) : 'px';

$btn_icon_size_mobile = isset($block_attributes['btnIconSize']['Mobile']) ? sanitize_text_field($block_attributes['btnIconSize']['Mobile']) : '16';
$btn_icon_size_units_mobile = isset($block_attributes['btnIconSizeUnits']['Mobile']) ? sanitize_text_field($block_attributes['btnIconSizeUnits']['Mobile']) : 'px';
$btn_icon_color = isset($block_attributes['btnIconColor']) ? sanitize_hex_color($block_attributes['btnIconColor']) : '#ffffff';
$btn_icon_hover_color = isset($block_attributes['btnIconHoverColor']) ? sanitize_hex_color($block_attributes['btnIconHoverColor']) : '#ffffff';
$media_icon_color = isset($block_attributes['mediaIconColor']) ? sanitize_hex_color($block_attributes['mediaIconColor']) : '#ffffff';
$media_icon_hover_color = isset($block_attributes['mediaIconHoverColor']) ? sanitize_hex_color($block_attributes['mediaIconHoverColor']) : '#ffffff';

$css_content = "
.fb-info-box-content-wrapper.{$block_id} {
    padding: {$box_padding_desktop};
    margin: {$box_margin_desktop};
    border: {$info_box_border_type};
    border-width: {$box_border_width_desktop};
    border-radius: {$box_border_radius_width_desktop};
    " . (!empty($info_box_border_color) ? "border-color: {$info_box_border_color};" : '') . "
    " . (!empty($box_bg_color) ? "background-color: {$box_bg_color};" : '') . "
    text-align: {$content_alignment};
    transition: all .3s ease-in-out;
}
.fb-info-box-content-wrapper.{$block_id}:hover {
    " . (!empty($box_bg_hover_color) ? "background-color: {$box_bg_hover_color};" : '') . "
}
@media only screen and (max-width: 1024px) {
    .fb-info-box-content-wrapper.{$block_id} {
        padding: {$box_padding_tablet} !important;
        margin: {$box_margin_tablet} !important;
        border-width: {$box_border_width_tablet} !important;
        border-radius: {$box_border_radius_width_tablet} !important;
    }
}

@media only screen and (max-width: 767px) {
    .fb-info-box-content-wrapper.{$block_id} {
        padding: {$box_padding_mobile} !important;
        margin: {$box_margin_mobile} !important;
        border-width: {$box_border_width_mobile} !important;
        border-radius: {$box_border_radius_width_mobile} !important;
    }
}
.fb-info-box-content-wrapper.{$block_id} .fb-info-btn-wrapper .fb-info-button{
    " . (!empty($button_text_color) ? "color: {$button_text_color};" : '') . "
    font-family: {$button_font_family};
    font-size: " . (!empty($button_font_size) ? "{$button_font_size}{$button_font_size_units}" : '') . ";
    font-weight: {$button_font_weight};
    font-style: {$button_font_style};
    text-transform: {$button_text_transform};
    text-decoration: {$button_text_decoration};
}
.fb-info-box-content-wrapper.{$block_id} .fb-info-btn-wrapper {
    " . (!empty($button_bg_color) ? "background-color: {$button_bg_color};" : '') . "
    display: inline-flex;
    gap: 10px;
    align-items: center;
    padding: {$button_padding_desktop};
    margin: {$button_margin_desktop};
    border: {$info_button_border};
    border-width: {$button_border_desktop};
    border-radius: {$button_borderradius_desktop};
}
.fb-info-box-content-wrapper.{$block_id} .fb-info-btn-wrapper .fb-btn-icon-wrapper {
    line-height: 0;
}
.fb-info-box-content-wrapper.{$block_id}:hover .fb-info-btn-wrapper .fb-info-button {
    " . (!empty($button_text_hover_color) ? "color: {$button_text_hover_color};" : '') . "
    " . (!empty($button_bg_hover_color) ? "background-color: {$button_bg_hover_color};" : '') . "
}
@media only screen and (max-width: 1024px) {
    .fb-info-box-content-wrapper.{$block_id} .fb-info-btn-wrapper{
        padding: {$button_padding_tablet} !important;
        margin: {$button_margin_tablet} !important;
        border-width: {$button_border_tablet} !important;
        border-radius: {$button_borderradius_tablet} !important;
    }
}

@media only screen and (max-width: 767px) {
    .fb-info-box-content-wrapper.{$block_id} .fb-info-btn-wrapper{
        padding: {$button_padding_mobile} !important;
        margin: {$button_margin_mobile} !important;
        border-width: {$button_border_mobile} !important;
        border-radius: {$button_borderradius_mobile} !important;
    }
}
.$block_id.fb-info-box-content-wrapper .fb-heading {
    " . (! empty($heading_color) ? "color: $heading_color;" : '') . "
    " . (! empty($heading_background_color) ? "background-color: $heading_background_color;" : '') . "
    font-family: " . ($heading_font_family !== 'default' ? $heading_font_family : 'inherit') . ";
    font-size: " . (! empty($heading_font_size) ? "{$heading_font_size}{$heading_font_size_units}" : '') . ";
    font-weight: $heading_font_weight;
    font-style: $heading_font_style;
    text-transform: $heading_text_transform;
    text-decoration: $heading_text_decoration;
    " . (! empty($heading_letter_spacing) ? "letter-spacing: {$heading_letter_spacing}{$heading_letter_spacing_units};" : '') . "
    " . (! empty($heading_line_height) ? "line-height: {$heading_line_height}{$heading_line_height_units};" : '') . "
    transition: all .3s ease-in-out;
    padding: $padding;
    margin: $margin;
    border: $heading_border;
    border-width: $border_width;
    border-radius: $border_radius_width;
    " . (! empty($heading_border_color) ? "border-color: $heading_border_color;" : '') . "
}
.{$block_id}.fb-info-box-content-wrapper:hover .fb-heading {
        " . (! empty($heading_hover_color) ? "color: $heading_hover_color;" : '') . "
        " . (! empty($heading_border_hover_color) ? "border-color: $heading_border_hover_color;" : '') . "
}
 @media only screen and (max-width: 1024px) {
	.{$block_id}.fb-info-box-content-wrapper .fb-heading {
		padding: {$tab_padding} !important;
		margin: {$tab_margin} !important;
		border-width: {$tab_border_width} !important;
		border-radius: {$tab_border_radius_width} !important;
	}
}
@media only screen and (max-width: 767px) {
.fb-info-box-content-wrapper.$block_id .fb-heading {
	padding: {$mobile_padding} !important;
	margin: {$mobile_margin} !important;
	border-width: {$mobile_border} !important;
	border-radius: {$mobile_border_radius} !important;
}
}
.fb-info-box-content-wrapper.$block_id .fb-description {
    $sub_heading_color_css
    $sub_heading_font_family_css
    $sub_heading_font_size_css
    font-weight: $sub_heading_font_weight;
    font-style: $sub_heading_font_style;
    text-transform: $sub_heading_text_transform;
    text-decoration: $sub_heading_text_decoration;
    padding: $desc_padding;
    margin: $desc_margin;
}
.fb-info-box-content-wrapper.{$block_id}:hover .fb-description {
        " . (!empty($sub_heading_hover_color) ? "color: $sub_heading_hover_color;" : '') . "
}
 @media only screen and (max-width: 1024px) {
        .fb-info-box-content-wrapper.{$block_id} .fb-description {
            padding: {$tab_desc_padding} !important;
            margin: {$tab_desc_margin} !important;
        }
    }

    @media only screen and (max-width: 757px) {
        .fb-info-box-content-wrapper.{$block_id} .fb-description {
            padding: {$mobile_desc_padding} !important;
            margin: {$mobile_desc_margin} !important;
        }
    }
    .fb-info-box-content-wrapper.{$block_id} .fb-info-media-wrapper {
    width: {$media_bg_width_desktop}{$media_bg_width_units_desktop};
    height: {$media_bg_height_desktop}{$media_bg_height_units_desktop};
    background-color: {$media_bg_color};
    padding: {$media_desktop_padding};
    margin: {$media_desktop_margin};
    border: {$media_border_desktop_width};
    border-width: {$media_border_desktop_width};
    border-radius: {$media_desktop_border_radius_width};
    }
    .fb-info-box-content-wrapper.{$block_id}:hover .fb-info-media-wrapper {
    background-color: {$media_bg_hover_color};
    }
    @media (max-width: 1024px) {
    .fb-info-box-content-wrapper.{$block_id} .fb-info-media-wrapper {
    padding: {$media_tablet_padding};
    margin: {$media_tablet_margin};
    border: {$media_border_tablet_width};
    border-width: {$media_border_tablet_width};
        border-radius: {$media_tablet_border_radius_width};
    }
    }

    @media (max-width: 767px) {
        .fb-info-box-content-wrapper.{$block_id} .fb-info-media-wrapper {
        padding: {$media_desktop_padding};
    margin: {$media_mobile_margin};
    border: {$media_border_mobile_width};
    border-width: {$media_border_mobile_width};
            border-radius: {$media_mobile_border_radius_width};
        }
    }
    .fb-info-box-content-wrapper.{$block_id} .fb-btn-icon-wrapper svg {
    width: {$btn_icon_size_desktop}{$btn_icon_size_units_desktop};
    " . (!empty($btn_icon_color) ? "fill: $btn_icon_color;" : '') . "
    }
    .fb-info-box-content-wrapper.{$block_id}:hover .fb-btn-icon-wrapper svg {
    " . (!empty($btn_icon_hover_color) ? "fill: $btn_icon_hover_color;" : '') . "
    }
    .fb-info-box-content-wrapper.{$block_id} .fb-icon-wrapper svg,
    .fb-info-box-content-wrapper.{$block_id} .fb-info-media-wrapper img {
        width: {$media_size_desktop}{$media_size_units_desktop};
        " . (!empty($media_icon_color) ? "fill: $media_icon_color;" : '') . "
    }

    .fb-info-box-content-wrapper.{$block_id}:hover .fb-icon-wrapper svg{
        " . (!empty($media_icon_hover_color) ? "fill: $media_icon_hover_color;" : '') . "
    }
    @media only screen and (max-width: 1024px) {
        .fb-info-box-content-wrapper.{$block_id} .fb-icon-wrapper svg,
        .fb-info-box-content-wrapper.{$block_id} .fb-info-media-wrapper img {
            width: {$media_size_tablet}{$media_size_units_tablet};
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-info-box-content-wrapper.{$block_id} .fb-icon-wrapper svg,
        .fb-info-box-content-wrapper.{$block_id} .fb-info-media-wrapper img {
            width: {$media_size_mobile}{$media_size_units_mobile};
        }
    }
";

EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $block_id);