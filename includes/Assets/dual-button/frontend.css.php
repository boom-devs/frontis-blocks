<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// $block
// Extract the block attributes
$block_attributes = $block['attrs'];

$block_id = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
// Start Button Border Radius
$button_bg_color = isset( $block_attributes['ButtonBgColor'] ) ? sanitize_text_field( $block_attributes['ButtonBgColor'] ) : '';
$button_font_family = isset( $block_attributes['ButtonFontFamily'] ) ? sanitize_text_field( $block_attributes['ButtonFontFamily'] ) : 'default';
$button_font_size = isset( $block_attributes['ButtonFontSize'] ) ? sanitize_text_field( $block_attributes['ButtonFontSize'] ) : '16';
$button_font_size_units = isset( $block_attributes['ButtonFontSizeUnits'] ) ? sanitize_text_field( $block_attributes['ButtonFontSizeUnits'] ) : 'px';
$button_font_weight = isset( $block_attributes['ButtonFontWeight'] ) ? sanitize_text_field( $block_attributes['ButtonFontWeight'] ) : 'normal';
$button_font_style = isset( $block_attributes['ButtonFontStyle'] ) ? sanitize_text_field( $block_attributes['ButtonFontStyle'] ) : 'normal';
$button_padding = isset( $block_attributes['ButtonPadding'] ) ? sanitize_text_field( $block_attributes['ButtonPadding'] ) : '10px';
$button_margin = isset( $block_attributes['ButtonMargin'] ) ? sanitize_text_field( $block_attributes['ButtonMargin'] ) : '0';
$button_border = isset( $block_attributes['ButtonBorder'] ) ? sanitize_text_field( $block_attributes['ButtonBorder'] ) : 'none';
$button_border_color = isset( $block_attributes['ButtonBorderColor'] ) ? sanitize_text_field( $block_attributes['ButtonBorderColor'] ) : '';
$button_border_radius = isset( $block_attributes['ButtonBorderRadius'] ) ? sanitize_text_field( $block_attributes['ButtonBorderRadius'] ) : '4px';

$button_two_border_radius_units = isset($block_attributes['ButtonTwoBorderRadiusUnits']) ? $block_attributes['ButtonTwoBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$button_two_desktop_border_radius_width = isset($block_attributes['ButtonTwoDesktopBorderRadiusWidth']) ? $block_attributes['ButtonTwoDesktopBorderRadiusWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$button_two_tab_border_radius_width = isset($block_attributes['ButtonTwoTabBorderRadiusWidth']) ? $block_attributes['ButtonTwoTabBorderRadiusWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$button_two_mobile_border_radius_width = isset($block_attributes['ButtonTwoMobileBorderRadiusWidth']) ? $block_attributes['ButtonTwoMobileBorderRadiusWidth'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

// Construct border-radius strings for each device type
$button_border_radius_desktop_width = $button_two_desktop_border_radius_width['top'] . $button_two_border_radius_units['Desktop'] . ' ' . $button_two_desktop_border_radius_width['right'] . $button_two_border_radius_units['Desktop'] . ' ' . $button_two_desktop_border_radius_width['bottom'] . $button_two_border_radius_units['Desktop'] . ' ' . $button_two_desktop_border_radius_width['left'] . $button_two_border_radius_units['Desktop'];
$button_border_radius_tablet_width = $button_two_tab_border_radius_width['top'] . $button_two_border_radius_units['Tablet'] . ' ' . $button_two_tab_border_radius_width['right'] . $button_two_border_radius_units['Tablet'] . ' ' . $button_two_tab_border_radius_width['bottom'] . $button_two_border_radius_units['Tablet'] . ' ' . $button_two_tab_border_radius_width['left'] . $button_two_border_radius_units['Tablet'];
$button_border_radius_mobile_width = $button_two_mobile_border_radius_width['top'] . $button_two_border_radius_units['Mobile'] . ' ' . $button_two_mobile_border_radius_width['right'] . $button_two_border_radius_units['Mobile'] . ' ' . $button_two_mobile_border_radius_width['bottom'] . $button_two_border_radius_units['Mobile'] . ' ' . $button_two_mobile_border_radius_width['left'] . $button_two_border_radius_units['Mobile'];

// Start Button Border
$button_two_border_units = isset($block_attributes['ButtonTwoBorderUnits']) ? $block_attributes['ButtonTwoBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$button_two_desktop_border_width = isset($block_attributes['ButtonTwoDesktopBorderWidth']) ? $block_attributes['ButtonTwoDesktopBorderWidth'] : array('top' => '1', 'right' => '1', 'bottom' => '1', 'left' => '1');
$button_two_tab_border_width = isset($block_attributes['ButtonTwoTabBorderWidth']) ? $block_attributes['ButtonTwoTabBorderWidth'] : array('top' => '1', 'right' => '1', 'bottom' => '1', 'left' => '1');
$button_two_mobile_border_width = isset($block_attributes['ButtonTwoMobileBorderWidth']) ? $block_attributes['ButtonTwoMobileBorderWidth'] : array('top' => '1', 'right' => '1', 'bottom' => '1', 'left' => '1');

// Construct border width strings for each device type
$button_border_desktop_width = $button_two_desktop_border_width['top'] . $button_two_border_units['Desktop'] . ' ' . $button_two_desktop_border_width['right'] . $button_two_border_units['Desktop'] . ' ' . $button_two_desktop_border_width['bottom'] . $button_two_border_units['Desktop'] . ' ' . $button_two_desktop_border_width['left'] . $button_two_border_units['Desktop'];
$button_border_tablet_width = $button_two_tab_border_width['top'] . $button_two_border_units['Tablet'] . ' ' . $button_two_tab_border_width['right'] . $button_two_border_units['Tablet'] . ' ' . $button_two_tab_border_width['bottom'] . $button_two_border_units['Tablet'] . ' ' . $button_two_tab_border_width['left'] . $button_two_border_units['Tablet'];
$button_border_mobile_width = $button_two_mobile_border_width['top'] . $button_two_border_units['Mobile'] . ' ' . $button_two_mobile_border_width['right'] . $button_two_border_units['Mobile'] . ' ' . $button_two_mobile_border_width['bottom'] . $button_two_border_units['Mobile'] . ' ' . $button_two_mobile_border_width['left'] . $button_two_border_units['Mobile'];

// Start Button Margin
$button_two_margin_units = isset($block_attributes['ButtonTwoMarginUnits']) ? $block_attributes['ButtonTwoMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$button_two_desktop_margin = isset($block_attributes['ButtonTwoDesktopMargin']) ? $block_attributes['ButtonTwoDesktopMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$button_two_tab_margin = isset($block_attributes['ButtonTwoTabMargin']) ? $block_attributes['ButtonTwoTabMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');
$button_two_mobile_margin = isset($block_attributes['ButtonTwoMobileMargin']) ? $block_attributes['ButtonTwoMobileMargin'] : array('top' => '0', 'right' => '0', 'bottom' => '0', 'left' => '0');

// Construct margin strings for each device type
$button_desktop_margin = $button_two_desktop_margin['top'] . $button_two_margin_units['Desktop'] . ' ' . $button_two_desktop_margin['right'] . $button_two_margin_units['Desktop'] . ' ' . $button_two_desktop_margin['bottom'] . $button_two_margin_units['Desktop'] . ' ' . $button_two_desktop_margin['left'] . $button_two_margin_units['Desktop'];
$button_tab_margin = $button_two_tab_margin['top'] . $button_two_margin_units['Tablet'] . ' ' . $button_two_tab_margin['right'] . $button_two_margin_units['Tablet'] . ' ' . $button_two_tab_margin['bottom'] . $button_two_margin_units['Tablet'] . ' ' . $button_two_tab_margin['left'] . $button_two_margin_units['Tablet'];
$button_mobile_margin = $button_two_mobile_margin['top'] . $button_two_margin_units['Mobile'] . ' ' . $button_two_mobile_margin['right'] . $button_two_margin_units['Mobile'] . ' ' . $button_two_mobile_margin['bottom'] . $button_two_margin_units['Mobile'] . ' ' . $button_two_mobile_margin['left'] . $button_two_margin_units['Mobile'];

// Start Button Padding
$button_two_padding_units = isset($block_attributes['ButtonTwoPaddingUnits']) ? $block_attributes['ButtonTwoPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$button_two_desktop_padding = isset($block_attributes['ButtonTwoDesktopPadding']) ? $block_attributes['ButtonTwoDesktopPadding'] : array('top' => '12', 'right' => '30', 'bottom' => '12', 'left' => '30');
$button_two_tab_padding = isset($block_attributes['ButtonTwoTabPadding']) ? $block_attributes['ButtonTwoTabPadding'] : array('top' => '10', 'right' => '10', 'bottom' => '10', 'left' => '10');
$button_two_mobile_padding = isset($block_attributes['ButtonTwoMobilePadding']) ? $block_attributes['ButtonTwoMobilePadding'] : array('top' => '10', 'right' => '10', 'bottom' => '10', 'left' => '10');

// Construct padding strings for each device type
$button_desktop_padding = $button_two_desktop_padding['top'] . $button_two_padding_units['Desktop'] . ' ' . $button_two_desktop_padding['right'] . $button_two_padding_units['Desktop'] . ' ' . $button_two_desktop_padding['bottom'] . $button_two_padding_units['Desktop'] . ' ' . $button_two_desktop_padding['left'] . $button_two_padding_units['Desktop'];
$button_tab_padding = $button_two_tab_padding['top'] . $button_two_padding_units['Tablet'] . ' ' . $button_two_tab_padding['right'] . $button_two_padding_units['Tablet'] . ' ' . $button_two_tab_padding['bottom'] . $button_two_padding_units['Tablet'] . ' ' . $button_two_tab_padding['left'] . $button_two_padding_units['Tablet'];
$button_mobile_padding = $button_two_mobile_padding['top'] . $button_two_padding_units['Mobile'] . ' ' . $button_two_mobile_padding['right'] . $button_two_padding_units['Mobile'] . ' ' . $button_two_mobile_padding['bottom'] . $button_two_padding_units['Mobile'] . ' ' . $button_two_mobile_padding['left'] . $button_two_padding_units['Mobile'];


// Generate CSS content
$css_content = "
.$block_id .fb-advanced-button-wrapper .fb-advanced-button {
    " . ( ! empty( $button_bg_color ) ? "background-color: $button_bg_color;" : '' ) . "
    font-family: " . ( $button_font_family !== 'default' ? $button_font_family : 'inherit' ) . ";
    font-size: " . ( ! empty( $button_font_size ) ? "{$button_font_size}{$button_font_size_units}" : 'inherit' ) . ";
    font-weight: " . ( ! empty( $button_font_weight ) ? $button_font_weight : 'normal' ) . ";
    font-style: " . ( ! empty( $button_font_style ) ? $button_font_style : 'normal' ) . ";
    padding: " . ( ! empty( $button_padding ) ? $button_padding : '10px' ) . ";
    margin: " . ( ! empty( $button_margin ) ? $button_margin : '0' ) . ";
    border: " . ( ! empty( $button_border ) ? $button_border : 'none' ) . ";
    padding: {$button_desktop_padding};
    margin: {$button_desktop_margin};
    border-radius: " . ( ! empty( $button_border_radius ) ? $button_border_radius : '4px' ) . ";
    " . ( ! empty( $button_border_color ) ? "border-color: $button_border_color;" : '' ) . "
}
";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $block_id);
