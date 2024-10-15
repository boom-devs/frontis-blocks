<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
$block_attributes = $block['attrs'];

$block_id = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
$heading_color = isset( $block_attributes['Heading_Color'] ) ? sanitize_hex_color( $block_attributes['Heading_Color'] ) : '';
$heading_background_color = isset( $block_attributes['Heading_Background_Color'] ) ? sanitize_hex_color( $block_attributes['Heading_Background_Color'] ) : '';
$heading_font_family = isset( $block_attributes['Heading_Font_Family'] ) && $block_attributes['Heading_Font_Family'] !== 'default' ? sanitize_text_field( $block_attributes['Heading_Font_Family'] ) : 'default';
$heading_font_size = isset( $block_attributes['Heading_Font_Size'] ) ? sanitize_text_field( $block_attributes['Heading_Font_Size'] ) : '35';
$heading_font_size_units = isset( $block_attributes['Heading_Font_size_units'] ) ? sanitize_text_field( $block_attributes['Heading_Font_size_units'] ) : 'px';
$heading_font_weight = isset( $block_attributes['Heading_Font_Weight'] ) ? sanitize_text_field( $block_attributes['Heading_Font_Weight'] ) : 'normal';
$heading_font_style = isset( $block_attributes['Heading_Font_Style'] ) ? sanitize_text_field( $block_attributes['Heading_Font_Style'] ) : 'normal';
$heading_text_transform = isset( $block_attributes['Heading_Text_Transform'] ) ? sanitize_text_field( $block_attributes['Heading_Text_Transform'] ) : 'none';
$heading_text_decoration = isset( $block_attributes['Heading_Text_Decoration'] ) ? sanitize_text_field( $block_attributes['Heading_Text_Decoration'] ) : 'none';
$heading_letter_spacing = isset( $block_attributes['Heading_Letter_Spacing'] ) ? sanitize_text_field( $block_attributes['Heading_Letter_Spacing'] ) : '';
$heading_letter_spacing_units = isset( $block_attributes['Heading_Letter_Spacing_units'] ) ? sanitize_text_field( $block_attributes['Heading_Letter_Spacing_units'] ) : 'px';
$heading_line_height = isset( $block_attributes['Heading_Line_Height'] ) ? sanitize_text_field( $block_attributes['Heading_Line_Height'] ) : '';
$heading_line_height_units = isset( $block_attributes['Heading_Line_Height_units'] ) ? sanitize_text_field( $block_attributes['Heading_Line_Height_units'] ) : '';
$heading_border = isset( $block_attributes['Heading_Border'] ) ? sanitize_text_field( $block_attributes['Heading_Border'] ) : '';
$heading_border_color = isset( $block_attributes['Heading_Border_Color'] ) ? sanitize_hex_color( $block_attributes['Heading_Border_Color'] ) : '';
//Heading padding
$heading_padding_units = isset( $block_attributes['Heading_padding_units'] ) ? sanitize_text_field( $block_attributes['Heading_padding_units'] ) : 'px';

$heading_desktop_padding_top = isset( $block_attributes['Heading_Desktop_padding']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_padding']['top'] ) : '0';
$heading_desktop_padding_right = isset( $block_attributes['Heading_Desktop_padding']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_padding']['right'] ) : '0';
$heading_desktop_padding_bottom = isset( $block_attributes['Heading_Desktop_padding']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_padding']['bottom'] ) : '0';
$heading_desktop_padding_left = isset( $block_attributes['Heading_Desktop_padding']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_padding']['left'] ) : '0';

$padding = "{$heading_desktop_padding_top}{$heading_padding_units} {$heading_desktop_padding_right}{$heading_padding_units} {$heading_desktop_padding_bottom}{$heading_padding_units} {$heading_desktop_padding_left}{$heading_padding_units}";
//Heading margin
$heading_desktop_margin_top = isset( $block_attributes['Heading_Desktop_Margin']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Margin']['top'] ) : '0';
$heading_desktop_margin_right = isset( $block_attributes['Heading_Desktop_Margin']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Margin']['right'] ) : '0';
$heading_desktop_margin_bottom = isset( $block_attributes['Heading_Desktop_Margin']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Margin']['bottom'] ) : '0';
$heading_desktop_margin_left = isset( $block_attributes['Heading_Desktop_Margin']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Margin']['left'] ) : '0';

$margin = "{$heading_desktop_margin_top}{$heading_padding_units} {$heading_desktop_margin_right}{$heading_padding_units} {$heading_desktop_margin_bottom}{$heading_padding_units} {$heading_desktop_margin_left}{$heading_padding_units}";

//Heading border
$heading_border_units = isset( $block_attributes['Heading_Border_units'] ) ? sanitize_text_field( $block_attributes['Heading_Border_units'] ) : 'px';

$heading_desktop_border_width_top = isset( $block_attributes['Heading_Desktop_Border_Width']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_Width']['top'] ) : '0';
$heading_desktop_border_width_right = isset( $block_attributes['Heading_Desktop_Border_Width']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_Width']['right'] ) : '0';
$heading_desktop_border_width_bottom = isset( $block_attributes['Heading_Desktop_Border_Width']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_Width']['bottom'] ) : '0';
$heading_desktop_border_width_left = isset( $block_attributes['Heading_Desktop_Border_Width']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_Width']['left'] ) : '0';

$border_width = "{$heading_desktop_border_width_top}{$heading_border_units} {$heading_desktop_border_width_right}{$heading_border_units} {$heading_desktop_border_width_bottom}{$heading_border_units} {$heading_desktop_border_width_left}{$heading_border_units}";
//Heading border radius
$heading_border_radius_units = isset( $block_attributes['Heading_Border_radius_units'] ) ? sanitize_text_field( $block_attributes['Heading_Border_radius_units'] ) : 'px';

$heading_desktop_border_radius_width_top = isset( $block_attributes['Heading_Desktop_Border_radius_Width']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_radius_Width']['top'] ) : '0';
$heading_desktop_border_radius_width_right = isset( $block_attributes['Heading_Desktop_Border_radius_Width']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_radius_Width']['right'] ) : '0';
$heading_desktop_border_radius_width_bottom = isset( $block_attributes['Heading_Desktop_Border_radius_Width']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_radius_Width']['bottom'] ) : '0';
$heading_desktop_border_radius_width_left = isset( $block_attributes['Heading_Desktop_Border_radius_Width']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Desktop_Border_radius_Width']['left'] ) : '0';

$border_radius_width = "{$heading_desktop_border_radius_width_top}{$heading_border_radius_units} {$heading_desktop_border_radius_width_right}{$heading_border_radius_units} {$heading_desktop_border_radius_width_bottom}{$heading_border_radius_units} {$heading_desktop_border_radius_width_left}{$heading_border_radius_units}";
//Heading Hover
$heading_hover_color = isset( $block_attributes['Heading_Hover_Color'] ) ? sanitize_text_field( $block_attributes['Heading_Hover_Color'] ) : '';
$heading_border_hover_color = isset( $block_attributes['Heading_Border_Hover_Color'] ) ? sanitize_text_field( $block_attributes['Heading_Border_Hover_Color'] ) : '';
//Tab
// Padding
$heading_tab_padding_top = isset( $block_attributes['Heading_Tab_padding']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_padding']['top'] ) : '0';
$heading_tab_padding_right = isset( $block_attributes['Heading_Tab_padding']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_padding']['right'] ) : '0';
$heading_tab_padding_bottom = isset( $block_attributes['Heading_Tab_padding']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_padding']['bottom'] ) : '0';
$heading_tab_padding_left = isset( $block_attributes['Heading_Tab_padding']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_padding']['left'] ) : '0';
$heading_padding_units = isset( $block_attributes['Heading_padding_units'] ) ? sanitize_text_field( $block_attributes['Heading_padding_units'] ) : 'px';

$tab_padding = "{$heading_tab_padding_top}{$heading_padding_units} {$heading_tab_padding_right}{$heading_padding_units} {$heading_tab_padding_bottom}{$heading_padding_units} {$heading_tab_padding_left}{$heading_padding_units}";

// Margin
$heading_tab_margin_top = isset( $block_attributes['Heading_Tab_Margin']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Margin']['top'] ) : '0';
$heading_tab_margin_right = isset( $block_attributes['Heading_Tab_Margin']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Margin']['right'] ) : '0';
$heading_tab_margin_bottom = isset( $block_attributes['Heading_Tab_Margin']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Margin']['bottom'] ) : '0';
$heading_tab_margin_left = isset( $block_attributes['Heading_Tab_Margin']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Margin']['left'] ) : '0';
$heading_margin_units = isset( $block_attributes['Heading_Margin_Units'] ) ? sanitize_text_field( $block_attributes['Heading_Margin_Units'] ) : 'px';

$tab_margin = "{$heading_tab_margin_top}{$heading_margin_units} {$heading_tab_margin_right}{$heading_margin_units} {$heading_tab_margin_bottom}{$heading_margin_units} {$heading_tab_margin_left}{$heading_margin_units}";

// Border Width
$heading_tab_border_width_top = isset( $block_attributes['Heading_Tab_Border_Width']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_Width']['top'] ) : '0';
$heading_tab_border_width_right = isset( $block_attributes['Heading_Tab_Border_Width']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_Width']['right'] ) : '0';
$heading_tab_border_width_bottom = isset( $block_attributes['Heading_Tab_Border_Width']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_Width']['bottom'] ) : '0';
$heading_tab_border_width_left = isset( $block_attributes['Heading_Tab_Border_Width']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_Width']['left'] ) : '0';
$heading_border_units = isset( $block_attributes['Heading_Border_units'] ) ? sanitize_text_field( $block_attributes['Heading_Border_units'] ) : 'px';

$tab_border_width = "{$heading_tab_border_width_top}{$heading_border_units} {$heading_tab_border_width_right}{$heading_border_units} {$heading_tab_border_width_bottom}{$heading_border_units} {$heading_tab_border_width_left}{$heading_border_units}";

// Border Radius
$heading_tab_border_radius_top = isset( $block_attributes['Heading_Tab_Border_radius_Width']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_radius_Width']['top'] ) : '0';
$heading_tab_border_radius_right = isset( $block_attributes['Heading_Tab_Border_radius_Width']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_radius_Width']['right'] ) : '0';
$heading_tab_border_radius_bottom = isset( $block_attributes['Heading_Tab_Border_radius_Width']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_radius_Width']['bottom'] ) : '0';
$heading_tab_border_radius_left = isset( $block_attributes['Heading_Tab_Border_radius_Width']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Tab_Border_radius_Width']['left'] ) : '0';
$heading_border_radius_units = isset( $block_attributes['Heading_Border_radius_units'] ) ? sanitize_text_field( $block_attributes['Heading_Border_radius_units'] ) : 'px';

$tab_border_radius_width = "{$heading_tab_border_radius_top}{$heading_border_radius_units} {$heading_tab_border_radius_right}{$heading_border_radius_units} {$heading_tab_border_radius_bottom}{$heading_border_radius_units} {$heading_tab_border_radius_left}{$heading_border_radius_units}";

// Mobile Padding
$heading_mobile_padding_top = isset( $block_attributes['Heading_Mobile_padding']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_padding']['top'] ) : '0';
$heading_mobile_padding_right = isset( $block_attributes['Heading_Mobile_padding']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_padding']['right'] ) : '0';
$heading_mobile_padding_bottom = isset( $block_attributes['Heading_Mobile_padding']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_padding']['bottom'] ) : '0';
$heading_mobile_padding_left = isset( $block_attributes['Heading_Mobile_padding']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_padding']['left'] ) : '0';
$heading_padding_units = isset( $block_attributes['Heading_padding_units'] ) ? sanitize_text_field( $block_attributes['Heading_padding_units'] ) : 'px';
$mobile_padding = "{$heading_mobile_padding_top}{$heading_padding_units} {$heading_mobile_padding_right}{$heading_padding_units} {$heading_mobile_padding_bottom}{$heading_padding_units} {$heading_mobile_padding_left}{$heading_padding_units}";
// Mobile Margin
$heading_mobile_margin_top = isset( $block_attributes['Heading_Mobile_Margin']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Margin']['top'] ) : '0';
$heading_mobile_margin_right = isset( $block_attributes['Heading_Mobile_Margin']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Margin']['right'] ) : '0';
$heading_mobile_margin_bottom = isset( $block_attributes['Heading_Mobile_Margin']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Margin']['bottom'] ) : '0';
$heading_mobile_margin_left = isset( $block_attributes['Heading_Mobile_Margin']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Margin']['left'] ) : '0';
$heading_margin_units = isset( $block_attributes['Heading_Margin_Units'] ) ? sanitize_text_field( $block_attributes['Heading_Margin_Units'] ) : 'px';
$mobile_margin = "{$heading_mobile_margin_top}{$heading_margin_units} {$heading_mobile_margin_right}{$heading_margin_units} {$heading_mobile_margin_bottom}{$heading_margin_units} {$heading_mobile_margin_left}{$heading_margin_units}";
// Mobile Border Width
$heading_mobile_border_width_top = isset( $block_attributes['Heading_Mobile_Border_Width']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_Width']['top'] ) : '0';
$heading_mobile_border_width_right = isset( $block_attributes['Heading_Mobile_Border_Width']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_Width']['right'] ) : '0';
$heading_mobile_border_width_bottom = isset( $block_attributes['Heading_Mobile_Border_Width']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_Width']['bottom'] ) : '0';
$heading_mobile_border_width_left = isset( $block_attributes['Heading_Mobile_Border_Width']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_Width']['left'] ) : '0';
$heading_border_units = isset( $block_attributes['Heading_Border_units'] ) ? sanitize_text_field( $block_attributes['Heading_Border_units'] ) : 'px';
$mobile_border = "{$heading_mobile_border_width_top}{$heading_border_units} {$heading_mobile_border_width_right}{$heading_border_units} {$heading_mobile_border_width_bottom}{$heading_border_units} {$heading_mobile_border_width_left}{$heading_border_units}";
// Mobile Border Radius
$heading_mobile_border_radius_top = isset( $block_attributes['Heading_Mobile_Border_radius_Width']['top'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_radius_Width']['top'] ) : '0';
$heading_mobile_border_radius_right = isset( $block_attributes['Heading_Mobile_Border_radius_Width']['right'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_radius_Width']['right'] ) : '0';
$heading_mobile_border_radius_bottom = isset( $block_attributes['Heading_Mobile_Border_radius_Width']['bottom'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_radius_Width']['bottom'] ) : '0';
$heading_mobile_border_radius_left = isset( $block_attributes['Heading_Mobile_Border_radius_Width']['left'] ) ? sanitize_text_field( $block_attributes['Heading_Mobile_Border_radius_Width']['left'] ) : '0';
$heading_border_radius_units = isset( $block_attributes['Heading_Border_radius_units'] ) ? sanitize_text_field( $block_attributes['Heading_Border_radius_units'] ) : 'px';
$mobile_border_radius = "{$heading_mobile_border_radius_top}{$heading_border_radius_units} {$heading_mobile_border_radius_right}{$heading_border_radius_units} {$heading_mobile_border_radius_bottom}{$heading_border_radius_units} {$heading_mobile_border_radius_left}{$heading_border_radius_units}";
//Description style
// Description Color
$sub_heading_color = isset( $block_attributes['SubHeadingColor'] ) ? sanitize_text_field( $block_attributes['SubHeadingColor'] ) : '';
$sub_heading_color_css = !empty( $sub_heading_color ) ? "color: $sub_heading_color;" : '';
// Description Font Family
$sub_heading_font_family = isset( $block_attributes['SubHeadingFontFamily'] ) ? sanitize_text_field( $block_attributes['SubHeadingFontFamily'] ) : 'default';
$sub_heading_font_family_css = $sub_heading_font_family !== 'default' ? "font-family: $sub_heading_font_family;" : '';
// Description Font Size
$sub_heading_font_size = isset( $block_attributes['SubHeadingFontSize'] ) ? sanitize_text_field( $block_attributes['SubHeadingFontSize'] ) : '';
$sub_heading_font_size_units = isset( $block_attributes['SubHeadingFontSizeUnits'] ) ? sanitize_text_field( $block_attributes['SubHeadingFontSizeUnits'] ) : 'px';
$sub_heading_font_size_css = !empty( $sub_heading_font_size ) ? "font-size: {$sub_heading_font_size}{$sub_heading_font_size_units};" : '';
// Description Font Weight
$sub_heading_font_weight = isset( $block_attributes['SubHeadingFontWeight'] ) ? sanitize_text_field( $block_attributes['SubHeadingFontWeight'] ) : 'normal';
// Description Font Style
$sub_heading_font_style = isset( $block_attributes['SubHeadingFontStyle'] ) ? sanitize_text_field( $block_attributes['SubHeadingFontStyle'] ) : 'normal';
// Description Text Transform
$sub_heading_text_transform = isset( $block_attributes['SubHeadingTextTransform'] ) ? sanitize_text_field( $block_attributes['SubHeadingTextTransform'] ) : 'none';
// Description Text Decoration
$sub_heading_text_decoration = isset( $block_attributes['SubHeadingTextDecoration'] ) ? sanitize_text_field( $block_attributes['SubHeadingTextDecoration'] ) : 'none';
// Description Padding
$sub_heading_desktop_padding_top = isset( $block_attributes['SubHeadingDesktopPadding']['top'] ) ? sanitize_text_field( $block_attributes['SubHeadingDesktopPadding']['top'] ) : '0';
$sub_heading_desktop_padding_right = isset( $block_attributes['SubHeadingDesktopPadding']['right'] ) ? sanitize_text_field( $block_attributes['SubHeadingDesktopPadding']['right'] ) : '0';
$sub_heading_desktop_padding_bottom = isset( $block_attributes['SubHeadingDesktopPadding']['bottom'] ) ? sanitize_text_field( $block_attributes['SubHeadingDesktopPadding']['bottom'] ) : '0';
$sub_heading_desktop_padding_left = isset( $block_attributes['SubHeadingDesktopPadding']['left'] ) ? sanitize_text_field( $block_attributes['SubHeadingDesktopPadding']['left'] ) : '0';
$sub_heading_padding_units = isset( $block_attributes['SubHeadingPaddingUnits'] ) ? sanitize_text_field( $block_attributes['SubHeadingPaddingUnits'] ) : 'px';
$desc_padding = "{$sub_heading_desktop_padding_top}{$sub_heading_padding_units} {$sub_heading_desktop_padding_right}{$sub_heading_padding_units} {$sub_heading_desktop_padding_bottom}{$sub_heading_padding_units} {$sub_heading_desktop_padding_left}{$sub_heading_padding_units}";
// Description Margin
$desc_desktop_margin_top = isset( $block_attributes['descDesktopMargin']['top'] ) ? sanitize_text_field( $block_attributes['descDesktopMargin']['top'] ) : '0';
$desc_desktop_margin_right = isset( $block_attributes['descDesktopMargin']['right'] ) ? sanitize_text_field( $block_attributes['descDesktopMargin']['right'] ) : '0';
$desc_desktop_margin_bottom = isset( $block_attributes['descDesktopMargin']['bottom'] ) ? sanitize_text_field( $block_attributes['descDesktopMargin']['bottom'] ) : '0';
$desc_desktop_margin_left = isset( $block_attributes['descDesktopMargin']['left'] ) ? sanitize_text_field( $block_attributes['descDesktopMargin']['left'] ) : '0';
$desc_margin_units = isset( $block_attributes['descMarginUnits'] ) ? sanitize_text_field( $block_attributes['descMarginUnits'] ) : 'px';
$desc_margin = "{$desc_desktop_margin_top}{$desc_margin_units} {$desc_desktop_margin_right}{$desc_margin_units} {$desc_desktop_margin_bottom}{$desc_margin_units} {$desc_desktop_margin_left}{$desc_margin_units}";
//Description hover
$sub_heading_hover_color = isset( $block_attributes['SubHeadingHoverColor'] ) ? sanitize_text_field( $block_attributes['SubHeadingHoverColor'] ) : '';
//Description Responsive
// Tab padding and margin
$sub_heading_tab_padding_top = isset( $block_attributes['SubHeadingTabPadding']['top'] ) ? sanitize_text_field( $block_attributes['SubHeadingTabPadding']['top'] ) : '0';
$sub_heading_tab_padding_right = isset( $block_attributes['SubHeadingTabPadding']['right'] ) ? sanitize_text_field( $block_attributes['SubHeadingTabPadding']['right'] ) : '0';
$sub_heading_tab_padding_bottom = isset( $block_attributes['SubHeadingTabPadding']['bottom'] ) ? sanitize_text_field( $block_attributes['SubHeadingTabPadding']['bottom'] ) : '0';
$sub_heading_tab_padding_left = isset( $block_attributes['SubHeadingTabPadding']['left'] ) ? sanitize_text_field( $block_attributes['SubHeadingTabPadding']['left'] ) : '0';
$sub_heading_padding_units = isset( $block_attributes['SubHeadingPaddingUnits'] ) ? sanitize_text_field( $block_attributes['SubHeadingPaddingUnits'] ) : 'px';
$tab_desc_padding = "{$sub_heading_tab_padding_top}{$sub_heading_padding_units} {$sub_heading_tab_padding_right}{$sub_heading_padding_units} {$sub_heading_tab_padding_bottom}{$sub_heading_padding_units} {$sub_heading_tab_padding_left}{$sub_heading_padding_units}";

$desc_tab_margin_top = isset( $block_attributes['descTabMargin']['top'] ) ? sanitize_text_field( $block_attributes['descTabMargin']['top'] ) : '0';
$desc_tab_margin_right = isset( $block_attributes['descTabMargin']['right'] ) ? sanitize_text_field( $block_attributes['descTabMargin']['right'] ) : '0';
$desc_tab_margin_bottom = isset( $block_attributes['descTabMargin']['bottom'] ) ? sanitize_text_field( $block_attributes['descTabMargin']['bottom'] ) : '0';
$desc_tab_margin_left = isset( $block_attributes['descTabMargin']['left'] ) ? sanitize_text_field( $block_attributes['descTabMargin']['left'] ) : '0';
$desc_margin_units = isset( $block_attributes['descMarginUnits'] ) ? sanitize_text_field( $block_attributes['descMarginUnits'] ) : 'px';
$tab_desc_margin = "{$desc_tab_margin_top}{$desc_margin_units} {$desc_tab_margin_right}{$desc_margin_units} {$desc_tab_margin_bottom}{$desc_margin_units} {$desc_tab_margin_left}{$desc_margin_units}";
// Mobile padding and margin
$sub_heading_mobile_padding_top = isset( $block_attributes['SubHeadingMobilePadding']['top'] ) ? sanitize_text_field( $block_attributes['SubHeadingMobilePadding']['top'] ) : '0';
$sub_heading_mobile_padding_right = isset( $block_attributes['SubHeadingMobilePadding']['right'] ) ? sanitize_text_field( $block_attributes['SubHeadingMobilePadding']['right'] ) : '0';
$sub_heading_mobile_padding_bottom = isset( $block_attributes['SubHeadingMobilePadding']['bottom'] ) ? sanitize_text_field( $block_attributes['SubHeadingMobilePadding']['bottom'] ) : '0';
$sub_heading_mobile_padding_left = isset( $block_attributes['SubHeadingMobilePadding']['left'] ) ? sanitize_text_field( $block_attributes['SubHeadingMobilePadding']['left'] ) : '0';
$mobile_desc_padding = "{$sub_heading_mobile_padding_top}{$sub_heading_padding_units} {$sub_heading_mobile_padding_right}{$sub_heading_padding_units} {$sub_heading_mobile_padding_bottom}{$sub_heading_padding_units} {$sub_heading_mobile_padding_left}{$sub_heading_padding_units}";
// Mobile margin
$desc_mobile_margin_top = isset( $block_attributes['descMobileMargin']['top'] ) ? sanitize_text_field( $block_attributes['descMobileMargin']['top'] ) : '0';
$desc_mobile_margin_right = isset( $block_attributes['descMobileMargin']['right'] ) ? sanitize_text_field( $block_attributes['descMobileMargin']['right'] ) : '0';
$desc_mobile_margin_bottom = isset( $block_attributes['descMobileMargin']['bottom'] ) ? sanitize_text_field( $block_attributes['descMobileMargin']['bottom'] ) : '0';
$desc_mobile_margin_left = isset( $block_attributes['descMobileMargin']['left'] ) ? sanitize_text_field( $block_attributes['descMobileMargin']['left'] ) : '0';
$mobile_desc_margin = "{$desc_mobile_margin_top}{$desc_margin_units} {$desc_mobile_margin_right}{$desc_margin_units} {$desc_mobile_margin_bottom}{$desc_margin_units} {$desc_mobile_margin_left}{$desc_margin_units}";
//Icon
// Media size and units for desktop, tablet, and mobile
$media_size_desktop = isset( $block_attributes['mediaSize']['Desktop'] ) ? sanitize_text_field( $block_attributes['mediaSize']['Desktop'] ) : '25';
$media_size_units_desktop = isset( $block_attributes['mediaSizeUnits']['Desktop'] ) ? sanitize_text_field( $block_attributes['mediaSizeUnits']['Desktop'] ) : 'px';

$media_size_tablet = isset( $block_attributes['mediaSize']['Tablet'] ) ? sanitize_text_field( $block_attributes['mediaSize']['Tablet'] ) : '25';
$media_size_units_tablet = isset( $block_attributes['mediaSizeUnits']['Tablet'] ) ? sanitize_text_field( $block_attributes['mediaSizeUnits']['Tablet'] ) : 'px';

$media_size_mobile = isset( $block_attributes['mediaSize']['Mobile'] ) ? sanitize_text_field( $block_attributes['mediaSize']['Mobile'] ) : '25';
$media_size_units_mobile = isset( $block_attributes['mediaSizeUnits']['Mobile'] ) ? sanitize_text_field( $block_attributes['mediaSizeUnits']['Mobile'] ) : 'px';

$css_content = "
.$block_id.fb-info-box-content-wrapper .fb-heading {
    " . ( ! empty( $heading_color ) ? "color: $heading_color;" : '' ) . "
    " . ( ! empty( $heading_background_color ) ? "background-color: $heading_background_color;" : '' ) . "
    font-family: " . ( $heading_font_family !== 'default' ? $heading_font_family : 'inherit' ) . ";
    font-size: " . ( ! empty( $heading_font_size ) ? "{$heading_font_size}{$heading_font_size_units}" : '' ) . ";
    font-weight: $heading_font_weight;
    font-style: $heading_font_style;
    text-transform: $heading_text_transform;
    text-decoration: $heading_text_decoration;
    " . ( ! empty( $heading_letter_spacing ) ? "letter-spacing: {$heading_letter_spacing}{$heading_letter_spacing_units};" : '' ) . "
    " . ( ! empty( $heading_line_height ) ? "line-height: {$heading_line_height}{$heading_line_height_units};" : '' ) . "
    transition: all .3s ease-in-out;
    padding: $padding;
    margin: $margin;
    border: $heading_border;
    border-width: $border_width;
    border-radius: $border_radius_width;
    " . ( ! empty( $heading_border_color ) ? "border-color: $heading_border_color;" : '' ) . "
}
.{$block_id}.fb-info-box-content-wrapper .fb-heading:hover {
        " . ( ! empty( $heading_hover_color ) ? "color: $heading_hover_color;" : '' ) . "
        " . ( ! empty( $heading_border_hover_color ) ? "border-color: $heading_border_hover_color;" : '' ) . "
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
.fb-info-box-content-wrapper.{$block_id} .fb-description:hover {
        " . ( !empty( $sub_heading_hover_color ) ? "color: $sub_heading_hover_color;" : '' ) . "
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
    .fb-info-box-content-wrapper.{$block_id} .fb-icon-wrapper svg,
    .fb-info-box-content-wrapper.{$block_id} .fb-info-media-wrapper img {
        width: {$media_size_desktop}{$media_size_units_desktop};
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


EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $block_id);
