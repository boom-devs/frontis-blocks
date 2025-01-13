<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$grid_css_array = array(
    array(
        'default' => 'custom',
        'min' => array(
            'unit' => 'px',
            'value' => 10
        ),
        'max' => array(
            'unit' => 'fr',
            'value' => 1
        ),
        'custom' => array(
            'unit' => 'fr',
            'value' => 1
        )
    )
);

$attributes = $block['attrs'];

// Arrange block attributes
$containerType = isset( $attributes['containerType'] ) ? $attributes['containerType'] : 'full-width';
$containerTypeFull = isset( $attributes['containerTypeFull'] ) ? $attributes['containerTypeFull'] : 'boxed';
$htmlTag = isset( $attributes['htmlTag'] ) ? $attributes['htmlTag'] : 'div';
$htmlTagLink = isset( $attributes['htmlTagLink'] ) ? $attributes['htmlTagLink'] : null;
$linkTarget = isset( $attributes['linkTarget'] ) ? $attributes['linkTarget'] : false;
$contentWidth = isset( $attributes['contentWidth'] ) ? $attributes['contentWidth'] : 'alignfull';
$innerContentWidth = isset( $attributes['innerContentWidth'] ) ? $attributes['innerContentWidth'] : 'alignwide';
$customWidth = isset( $attributes['customWidth'] ) ? $attributes['customWidth'] : [ 'Desktop' => 100, 'Tablet' => 100, 'Mobile' => 100 ];
$customWidthUnits = isset( $attributes['customWidthUnits'] ) ? $attributes['customWidthUnits'] : [ 'Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%' ];
$resetFallBackCustomWidth = isset( $attributes['resetFallBackCustomWidth'] ) ? $attributes['resetFallBackCustomWidth'] : [ 'Desktop' => 100, 'Tablet' => 100, 'Mobile' => 100 ];
$widthDesktop = isset( $attributes['widthDesktop'] ) ? $attributes['widthDesktop'] : 100;
$widthTablet = isset( $attributes['widthTablet'] ) ? $attributes['widthTablet'] : null;
$widthMobile = isset( $attributes['widthMobile'] ) ? $attributes['widthMobile'] : 100;
$widthType = isset( $attributes['widthType'] ) ? $attributes['widthType'] : '%';
$fullWidthContentBoxedWidth = isset( $attributes['fullWidthContentBoxedWidth'] ) ? $attributes['fullWidthContentBoxedWidth'] : [ 'Desktop' => 1200, 'Tablet' => 1024, 'Mobile' => 767 ];
$fullWidthContentBoxedWidthUnits = isset( $attributes['fullWidthContentBoxedWidthUnits'] ) ? $attributes['fullWidthContentBoxedWidthUnits'] : [ 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' ];
$innerContentCustomWidthDesktop = isset( $attributes['innerContentCustomWidthDesktop'] ) ? $attributes['innerContentCustomWidthDesktop'] : 1200;
$innerContentCustomWidthTablet = isset( $attributes['innerContentCustomWidthTablet'] ) ? $attributes['innerContentCustomWidthTablet'] : 1024;
$innerContentCustomWidthMobile = isset( $attributes['innerContentCustomWidthMobile'] ) ? $attributes['innerContentCustomWidthMobile'] : 767;
$innerContentCustomWidthType = isset( $attributes['innerContentCustomWidthType'] ) ? $attributes['innerContentCustomWidthType'] : 'px';
$minHeight = isset( $attributes['minHeight'] ) ? $attributes['minHeight'] : [ 'Desktop' => 500, 'Tablet' => '', 'Mobile' => '' ];
$minHeightUnits = isset( $attributes['minHeightUnits'] ) ? $attributes['minHeightUnits'] : [ 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' ];
$directionDesktop = isset( $attributes['directionDesktop'] ) ? $attributes['directionDesktop'] : 'column';
$directionTablet = isset( $attributes['directionTablet'] ) ? $attributes['directionTablet'] : null;
$directionMobile = isset( $attributes['directionMobile'] ) ? $attributes['directionMobile'] : null;
$alignItemsDesktop = isset( $attributes['alignItemsDesktop'] ) ? $attributes['alignItemsDesktop'] : 'center';
$alignItemsTablet = isset( $attributes['alignItemsTablet'] ) ? $attributes['alignItemsTablet'] : null;
$alignItemsMobile = isset( $attributes['alignItemsMobile'] ) ? $attributes['alignItemsMobile'] : null;
$justifyContentDesktop = isset( $attributes['justifyContentDesktop'] ) ? $attributes['justifyContentDesktop'] : 'center';
$justifyContentTablet = isset( $attributes['justifyContentTablet'] ) ? $attributes['justifyContentTablet'] : null;
$justifyContentMobile = isset( $attributes['justifyContentMobile'] ) ? $attributes['justifyContentMobile'] : null;
$wrapDesktop = isset( $attributes['wrapDesktop'] ) ? $attributes['wrapDesktop'] : 'nowrap';
$wrapTablet = isset( $attributes['wrapTablet'] ) ? $attributes['wrapTablet'] : null;
$wrapMobile = isset( $attributes['wrapMobile'] ) ? $attributes['wrapMobile'] : 'wrap';
$alignContentDesktop = isset( $attributes['alignContentDesktop'] ) ? $attributes['alignContentDesktop'] : '';
$alignContentTablet = isset( $attributes['alignContentTablet'] ) ? $attributes['alignContentTablet'] : null;
$alignContentMobile = isset( $attributes['alignContentMobile'] ) ? $attributes['alignContentMobile'] : null;
$backgroundType = isset( $attributes['backgroundType'] ) ? $attributes['backgroundType'] : 'none';
$backgroundImageDesktop = isset( $attributes['backgroundImageDesktop'] ) ? $attributes['backgroundImageDesktop'] : null;
$backgroundImageTablet = isset( $attributes['backgroundImageTablet'] ) ? $attributes['backgroundImageTablet'] : null;
$backgroundImageMobile = isset( $attributes['backgroundImageMobile'] ) ? $attributes['backgroundImageMobile'] : null;
$backgroundPositionDesktop = isset( $attributes['backgroundPositionDesktop'] ) ? $attributes['backgroundPositionDesktop'] : [ 'x' => 0.5, 'y' => 0.5 ];
$backgroundPositionTablet = isset( $attributes['backgroundPositionTablet'] ) ? $attributes['backgroundPositionTablet'] : null;
$backgroundPositionMobile = isset( $attributes['backgroundPositionMobile'] ) ? $attributes['backgroundPositionMobile'] : null;
$backgroundSizeDesktop = isset( $attributes['backgroundSizeDesktop'] ) ? $attributes['backgroundSizeDesktop'] : 'cover';
$backgroundSizeTablet = isset( $attributes['backgroundSizeTablet'] ) ? $attributes['backgroundSizeTablet'] : null;
$backgroundSizeMobile = isset( $attributes['backgroundSizeMobile'] ) ? $attributes['backgroundSizeMobile'] : null;
$backgroundRepeatDesktop = isset( $attributes['backgroundRepeatDesktop'] ) ? $attributes['backgroundRepeatDesktop'] : 'no-repeat';
$backgroundRepeatTablet = isset( $attributes['backgroundRepeatTablet'] ) ? $attributes['backgroundRepeatTablet'] : null;
$backgroundRepeatMobile = isset( $attributes['backgroundRepeatMobile'] ) ? $attributes['backgroundRepeatMobile'] : null;
$backgroundAttachmentDesktop = isset( $attributes['backgroundAttachmentDesktop'] ) ? $attributes['backgroundAttachmentDesktop'] : 'scroll';
$backgroundAttachmentTablet = isset( $attributes['backgroundAttachmentTablet'] ) ? $attributes['backgroundAttachmentTablet'] : null;
$backgroundAttachmentMobile = isset( $attributes['backgroundAttachmentMobile'] ) ? $attributes['backgroundAttachmentMobile'] : null;
$backgroundColor = isset( $attributes['backgroundColor'] ) ? $attributes['backgroundColor'] : null;
$backgroundOpacity = isset( $attributes['backgroundOpacity'] ) ? $attributes['backgroundOpacity'] : null;
$backgroundImageColor = isset( $attributes['backgroundImageColor'] ) ? $attributes['backgroundImageColor'] : '#FFFFFF75';
$gradientValue = isset( $attributes['gradientValue'] ) ? $attributes['gradientValue'] : 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)';

$border_style = isset( $attributes['borderStyle'] ) ? $attributes['borderStyle'] : '';
$border_width = isset( $attributes['borderWidth'] ) ? $attributes['borderWidth'] : '';
$border_radius = isset( $attributes['borderRadius'] ) ? $attributes['borderRadius'] : '';
$border_color = isset( $attributes['borderColor'] ) ? $attributes['borderColor'] : '';
$border_hover_color = isset( $attributes['borderHoverColor'] ) ? $attributes['borderHoverColor'] : '';
$box_shadow_color = isset( $attributes['boxShadowColor'] ) ? $attributes['boxShadowColor'] : '#00000070';
$box_shadow_h_offset = isset( $attributes['boxShadowHOffset'] ) ? $attributes['boxShadowHOffset'] : 0;
$box_shadow_v_offset = isset( $attributes['boxShadowVOffset'] ) ? $attributes['boxShadowVOffset'] : 0;
$box_shadow_blur = isset( $attributes['boxShadowBlur'] ) ? $attributes['boxShadowBlur'] : '';
$box_shadow_spread = isset( $attributes['boxShadowSpread'] ) ? $attributes['boxShadowSpread'] : '';
$box_shadow_position = isset( $attributes['boxShadowPosition'] ) ? $attributes['boxShadowPosition'] : 'outset';

$box_shadow_color_hover = isset( $attributes['boxShadowColorHover'] ) ? $attributes['boxShadowColorHover'] : '';
$box_shadow_h_offset_hover = isset( $attributes['boxShadowHOffsetHover'] ) ? $attributes['boxShadowHOffsetHover'] : 0;
$box_shadow_v_offset_hover = isset( $attributes['boxShadowVOffsetHover'] ) ? $attributes['boxShadowVOffsetHover'] : 0;
$box_shadow_blur_hover = isset( $attributes['boxShadowBlurHover'] ) ? $attributes['boxShadowBlurHover'] : '';
$box_shadow_spread_hover = isset( $attributes['boxShadowSpreadHover'] ) ? $attributes['boxShadowSpreadHover'] : '';
$box_shadow_position_hover = isset( $attributes['boxShadowPositionHover'] ) ? $attributes['boxShadowPositionHover'] : 'outset';

$top_padding_desktop = isset( $attributes['topPaddingDesktop'] ) ? $attributes['topPaddingDesktop'] : 10;
$bottom_padding_desktop = isset( $attributes['bottomPaddingDesktop'] ) ? $attributes['bottomPaddingDesktop'] : 10;
$left_padding_desktop = isset( $attributes['leftPaddingDesktop'] ) ? $attributes['leftPaddingDesktop'] : 10;
$right_padding_desktop = isset( $attributes['rightPaddingDesktop'] ) ? $attributes['rightPaddingDesktop'] : 10;

$top_padding_tablet = isset( $attributes['topPaddingTablet'] ) ? $attributes['topPaddingTablet'] : '';
$bottom_padding_tablet = isset( $attributes['bottomPaddingTablet'] ) ? $attributes['bottomPaddingTablet'] : '';
$left_padding_tablet = isset( $attributes['leftPaddingTablet'] ) ? $attributes['leftPaddingTablet'] : '';
$right_padding_tablet = isset( $attributes['rightPaddingTablet'] ) ? $attributes['rightPaddingTablet'] : '';

$top_padding_mobile = isset( $attributes['topPaddingMobile'] ) ? $attributes['topPaddingMobile'] : '';
$bottom_padding_mobile = isset( $attributes['bottomPaddingMobile'] ) ? $attributes['bottomPaddingMobile'] : '';
$left_padding_mobile = isset( $attributes['leftPaddingMobile'] ) ? $attributes['leftPaddingMobile'] : '';
$right_padding_mobile = isset( $attributes['rightPaddingMobile'] ) ? $attributes['rightPaddingMobile'] : '';

$padding_type = isset( $attributes['paddingType'] ) ? $attributes['paddingType'] : 'px';
$padding_type_tablet = isset( $attributes['paddingTypeTablet'] ) ? $attributes['paddingTypeTablet'] : 'px';
$padding_type_mobile = isset( $attributes['paddingTypeMobile'] ) ? $attributes['paddingTypeMobile'] : 'px';
$padding_link = isset( $attributes['paddingLink'] ) ? $attributes['paddingLink'] : true;

$top_margin_desktop = isset( $attributes['topMarginDesktop'] ) ? $attributes['topMarginDesktop'] : '';
$bottom_margin_desktop = isset( $attributes['bottomMarginDesktop'] ) ? $attributes['bottomMarginDesktop'] : '';
$left_margin_desktop = isset( $attributes['leftMarginDesktop'] ) ? $attributes['leftMarginDesktop'] : '';
$right_margin_desktop = isset( $attributes['rightMarginDesktop'] ) ? $attributes['rightMarginDesktop'] : '';

$top_margin_tablet = isset( $attributes['topMarginTablet'] ) ? $attributes['topMarginTablet'] : '';
$bottom_margin_tablet = isset( $attributes['bottomMarginTablet'] ) ? $attributes['bottomMarginTablet'] : '';
$left_margin_tablet = isset( $attributes['leftMarginTablet'] ) ? $attributes['leftMarginTablet'] : '';
$right_margin_tablet = isset( $attributes['rightMarginTablet'] ) ? $attributes['rightMarginTablet'] : '';

$top_margin_mobile = isset( $attributes['topMarginMobile'] ) ? $attributes['topMarginMobile'] : '';
$bottom_margin_mobile = isset( $attributes['bottomMarginMobile'] ) ? $attributes['bottomMarginMobile'] : '';
$left_margin_mobile = isset( $attributes['leftMarginMobile'] ) ? $attributes['leftMarginMobile'] : '';
$right_margin_mobile = isset( $attributes['rightMarginMobile'] ) ? $attributes['rightMarginMobile'] : '';

$margin_type = isset( $attributes['marginType'] ) ? $attributes['marginType'] : 'px';
$margin_type_tablet = isset( $attributes['marginTypeTablet'] ) ? $attributes['marginTypeTablet'] : 'px';
$margin_type_mobile = isset( $attributes['marginTypeMobile'] ) ? $attributes['marginTypeMobile'] : 'px';
$margin_link = isset( $attributes['marginLink'] ) ? $attributes['marginLink'] : true;

$variation_selected = isset( $attributes['variationSelected'] ) ? $attributes['variationSelected'] : false;
$row_gap_desktop = isset( $attributes['rowGapDesktop'] ) ? $attributes['rowGapDesktop'] : 0;
$row_gap_tablet = isset( $attributes['rowGapTablet'] ) ? $attributes['rowGapTablet'] : '';
$row_gap_mobile = isset( $attributes['rowGapMobile'] ) ? $attributes['rowGapMobile'] : '';

$row_gap_type = isset( $attributes['rowGapType'] ) ? $attributes['rowGapType'] : 'px';
$row_gap_type_tablet = isset( $attributes['rowGapTypeTablet'] ) ? $attributes['rowGapTypeTablet'] : 'px';
$row_gap_type_mobile = isset( $attributes['rowGapTypeMobile'] ) ? $attributes['rowGapTypeMobile'] : 'px';

$column_gap_desktop = isset( $attributes['columnGapDesktop'] ) ? $attributes['columnGapDesktop'] : 0;
$column_gap_tablet = isset( $attributes['columnGapTablet'] ) ? $attributes['columnGapTablet'] : '';
$column_gap_mobile = isset( $attributes['columnGapMobile'] ) ? $attributes['columnGapMobile'] : '';

$column_gap_type = isset( $attributes['columnGapType'] ) ? $attributes['columnGapType'] : 'px';
$column_gap_type_tablet = isset( $attributes['columnGapTypeTablet'] ) ? $attributes['columnGapTypeTablet'] : 'px';
$column_gap_type_mobile = isset( $attributes['columnGapTypeMobile'] ) ? $attributes['columnGapTypeMobile'] : 'px';

$is_preview = isset( $attributes['isPreview'] ) ? $attributes['isPreview'] : false;
$is_block_root_parent = isset( $attributes['isBlockRootParent'] ) ? $attributes['isBlockRootParent'] : false;

$bottom_type = isset( $attributes['bottomType'] ) ? $attributes['bottomType'] : 'none';
$bottom_color = isset( $attributes['bottomColor'] ) ? $attributes['bottomColor'] : '#333';
$bottom_height = isset( $attributes['bottomHeight'] ) ? $attributes['bottomHeight'] : '';
$bottom_height_tablet = isset( $attributes['bottomHeightTablet'] ) ? $attributes['bottomHeightTablet'] : '';
$bottom_height_mobile = isset( $attributes['bottomHeightMobile'] ) ? $attributes['bottomHeightMobile'] : '';
$bottom_width = isset( $attributes['bottomWidth'] ) ? $attributes['bottomWidth'] : 100;

$top_type = isset( $attributes['topType'] ) ? $attributes['topType'] : 'none';
$top_color = isset( $attributes['topColor'] ) ? $attributes['topColor'] : '#333';
$top_height = isset( $attributes['topHeight'] ) ? $attributes['topHeight'] : '';
$top_height_tablet = isset( $attributes['topHeightTablet'] ) ? $attributes['topHeightTablet'] : '';
$top_height_mobile = isset( $attributes['topHeightMobile'] ) ? $attributes['topHeightMobile'] : '';
$top_width = isset( $attributes['topWidth'] ) ? $attributes['topWidth'] : 100;

$top_flip = isset( $attributes['topFlip'] ) ? $attributes['topFlip'] : false;
$bottom_flip = isset( $attributes['bottomFlip'] ) ? $attributes['bottomFlip'] : false;
$top_invert = isset( $attributes['topInvert'] ) ? $attributes['topInvert'] : false;
$bottom_invert = isset( $attributes['bottomInvert'] ) ? $attributes['bottomInvert'] : true;

$top_content_above_shape = isset( $attributes['topContentAboveShape'] ) ? $attributes['topContentAboveShape'] : false;
$bottom_content_above_shape = isset( $attributes['bottomContentAboveShape'] ) ? $attributes['bottomContentAboveShape'] : false;
$width_set_by_user = isset( $attributes['widthSetByUser'] ) ? $attributes['widthSetByUser'] : false;

$background_custom_size_desktop = isset( $attributes['backgroundCustomSizeDesktop'] ) ? $attributes['backgroundCustomSizeDesktop'] : 100;
$background_custom_size_tablet = isset( $attributes['backgroundCustomSizeTablet'] ) ? $attributes['backgroundCustomSizeTablet'] : '';
$background_custom_size_mobile = isset( $attributes['backgroundCustomSizeMobile'] ) ? $attributes['backgroundCustomSizeMobile'] : '';
$background_custom_size_type = isset( $attributes['backgroundCustomSizeType'] ) ? $attributes['backgroundCustomSizeType'] : '%';

$overlay_type = isset( $attributes['overlayType'] ) ? $attributes['overlayType'] : 'none';
$overlay_opacity = isset( $attributes['overlayOpacity'] ) ? $attributes['overlayOpacity'] : 1;
$overlay_blend_mode = isset( $attributes['overlayBlendMode'] ) ? $attributes['overlayBlendMode'] : 'normal';
$overlay_blend_mode_tablet = isset( $attributes['overlayBlendModeTablet'] ) ? $attributes['overlayBlendModeTablet'] : '';
$overlay_blend_mode_mobile = isset( $attributes['overlayBlendModeMobile'] ) ? $attributes['overlayBlendModeMobile'] : '';

$centralized_position = isset( $attributes['centralizedPosition'] ) ? $attributes['centralizedPosition'] : false;
$custom_position = isset( $attributes['customPosition'] ) ? $attributes['customPosition'] : 'default';

$x_position_desktop = isset( $attributes['xPositionDesktop'] ) ? $attributes['xPositionDesktop'] : '';
$x_position_tablet = isset( $attributes['xPositionTablet'] ) ? $attributes['xPositionTablet'] : '';
$x_position_mobile = isset( $attributes['xPositionMobile'] ) ? $attributes['xPositionMobile'] : '';
$x_position_type = isset( $attributes['xPositionType'] ) ? $attributes['xPositionType'] : 'px';
$x_position_type_tablet = isset( $attributes['xPositionTypeTablet'] ) ? $attributes['xPositionTypeTablet'] : 'px';
$x_position_type_mobile = isset( $attributes['xPositionTypeMobile'] ) ? $attributes['xPositionTypeMobile'] : 'px';

$y_position_desktop = isset( $attributes['yPositionDesktop'] ) ? $attributes['yPositionDesktop'] : '';
$y_position_tablet = isset( $attributes['yPositionTablet'] ) ? $attributes['yPositionTablet'] : '';
$y_position_mobile = isset( $attributes['yPositionMobile'] ) ? $attributes['yPositionMobile'] : '';
$y_position_type = isset( $attributes['yPositionType'] ) ? $attributes['yPositionType'] : 'px';
$y_position_type_tablet = isset( $attributes['yPositionTypeTablet'] ) ? $attributes['yPositionTypeTablet'] : 'px';
$y_position_type_mobile = isset( $attributes['yPositionTypeMobile'] ) ? $attributes['yPositionTypeMobile'] : 'px';

$background_video_color = isset( $attributes['backgroundVideoColor'] ) ? $attributes['backgroundVideoColor'] : '#FFFFFF75';
$background_video = isset( $attributes['backgroundVideo'] ) ? $attributes['backgroundVideo'] : '';
$background_video_opacity = isset( $attributes['backgroundVideoOpacity'] ) ? $attributes['backgroundVideoOpacity'] : 0.5;

$text_color = isset( $attributes['textColor'] ) ? $attributes['textColor'] : '';
$link_color = isset( $attributes['linkColor'] ) ? $attributes['linkColor'] : '';
$link_hover_color = isset( $attributes['linkHoverColor'] ) ? $attributes['linkHoverColor'] : '';

$inner_content_custom_width_type_tablet = isset( $attributes['innerContentCustomWidthTypeTablet'] ) ? $attributes['innerContentCustomWidthTypeTablet'] : 'px';
$inner_content_custom_width_type_mobile = isset( $attributes['innerContentCustomWidthTypeMobile'] ) ? $attributes['innerContentCustomWidthTypeMobile'] : 'px';

$width_type_tablet = isset( $attributes['widthTypeTablet'] ) ? $attributes['widthTypeTablet'] : '%';
$width_type_mobile = isset( $attributes['widthTypeMobile'] ) ? $attributes['widthTypeMobile'] : '%';
$min_height_type_tablet = isset( $attributes['minHeightTypeTablet'] ) ? $attributes['minHeightTypeTablet'] : 'px';
$min_height_type_mobile = isset( $attributes['minHeightTypeMobile'] ) ? $attributes['minHeightTypeMobile'] : 'px';

$top_height_type = isset( $attributes['topHeightType'] ) ? $attributes['topHeightType'] : 'px';
$top_height_type_tablet = isset( $attributes['topHeightTypeTablet'] ) ? $attributes['topHeightTypeTablet'] : 'px';
$top_height_type_mobile = isset( $attributes['topHeightTypeMobile'] ) ? $attributes['topHeightTypeMobile'] : 'px';

$bottom_height_type = isset( $attributes['bottomHeightType'] ) ? $attributes['bottomHeightType'] : 'px';
$bottom_height_type_tablet = isset( $attributes['bottomHeightTypeTablet'] ) ? $attributes['bottomHeightTypeTablet'] : 'px';
$bottom_height_type_mobile = isset( $attributes['bottomHeightTypeMobile'] ) ? $attributes['bottomHeightTypeMobile'] : 'px';

$overflow = isset( $attributes['overflow'] ) ? $attributes['overflow'] : 'visible';
$top_divider_width_type = isset( $attributes['topDividerWidthType'] ) ? $attributes['topDividerWidthType'] : '%';
$bottom_divider_width_type = isset( $attributes['bottomDividerWidthType'] ) ? $attributes['bottomDividerWidthType'] : '%';
$top_divider_height_type = isset( $attributes['topDividerHeightType'] ) ? $attributes['topDividerHeightType'] : 'px';
$bottom_divider_height_type = isset( $attributes['bottomDividerHeightType'] ) ? $attributes['bottomDividerHeightType'] : 'px';

$equal_height = isset( $attributes['equalHeight'] ) ? $attributes['equalHeight'] : false;
$gradient_color1 = isset( $attributes['gradientColor1'] ) ? $attributes['gradientColor1'] : '#06558a';
$gradient_color2 = isset( $attributes['gradientColor2'] ) ? $attributes['gradientColor2'] : '#0063A1';
$gradient_type = isset( $attributes['gradientType'] ) ? $attributes['gradientType'] : 'linear';
$select_gradient = isset( $attributes['selectGradient'] ) ? $attributes['selectGradient'] : 'basic';

$gradient_location1 = isset( $attributes['gradientLocation1'] ) ? $attributes['gradientLocation1'] : 0;
$gradient_location2 = isset( $attributes['gradientLocation2'] ) ? $attributes['gradientLocation2'] : 100;
$gradient_angle = isset( $attributes['gradientAngle'] ) ? $attributes['gradientAngle'] : 0;
$gradient_overlay_angle = isset( $attributes['gradientOverlayAngle'] ) ? $attributes['gradientOverlayAngle'] : 0;

$background_overlay_type = isset( $attributes['backgroundOverlayType'] ) ? $attributes['backgroundOverlayType'] : 'none';
$background_overlay_image_desktop = isset( $attributes['backgroundOverlayImageDesktop'] ) ? $attributes['backgroundOverlayImageDesktop'] : '';
$background_overlay_image_tablet = isset( $attributes['backgroundOverlayImageTablet'] ) ? $attributes['backgroundOverlayImageTablet'] : '';
$background_overlay_image_mobile = isset( $attributes['backgroundOverlayImageMobile'] ) ? $attributes['backgroundOverlayImageMobile'] : '';

$background_position_overlay_desktop = isset( $attributes['backgroundPositionOverlayDesktop'] ) ? $attributes['backgroundPositionOverlayDesktop'] : array('x' => 0.5, 'y' => 0.5);
$background_position_overlay_tablet = isset( $attributes['backgroundPositionOverlayTablet'] ) ? $attributes['backgroundPositionOverlayTablet'] : '';
$background_position_overlay_mobile = isset( $attributes['backgroundPositionOverlayMobile'] ) ? $attributes['backgroundPositionOverlayMobile'] : '';

$background_size_overlay_desktop = isset( $attributes['backgroundSizeOverlayDesktop'] ) ? $attributes['backgroundSizeOverlayDesktop'] : 'cover';
$background_size_overlay_tablet = isset( $attributes['backgroundSizeOverlayTablet'] ) ? $attributes['backgroundSizeOverlayTablet'] : '';
$background_size_overlay_mobile = isset( $attributes['backgroundSizeOverlayMobile'] ) ? $attributes['backgroundSizeOverlayMobile'] : '';

$background_repeat_overlay_desktop = isset( $attributes['backgroundRepeatOverlayDesktop'] ) ? $attributes['backgroundRepeatOverlayDesktop'] : 'no-repeat';
$background_repeat_overlay_tablet = isset( $attributes['backgroundRepeatOverlayTablet'] ) ? $attributes['backgroundRepeatOverlayTablet'] : '';
$background_repeat_overlay_mobile = isset( $attributes['backgroundRepeatOverlayMobile'] ) ? $attributes['backgroundRepeatOverlayMobile'] : '';

$background_attachment_overlay_desktop = isset( $attributes['backgroundAttachmentOverlayDesktop'] ) ? $attributes['backgroundAttachmentOverlayDesktop'] : 'scroll';
$background_attachment_overlay_tablet = isset( $attributes['backgroundAttachmentOverlayTablet'] ) ? $attributes['backgroundAttachmentOverlayTablet'] : '';
$background_attachment_overlay_mobile = isset( $attributes['backgroundAttachmentOverlayMobile'] ) ? $attributes['backgroundAttachmentOverlayMobile'] : '';

$background_overlay_color = isset( $attributes['backgroundOverlayColor'] ) ? $attributes['backgroundOverlayColor'] : '';
$background_image_overlay_color = isset( $attributes['backgroundImageOverlayColor'] ) ? $attributes['backgroundImageOverlayColor'] : '#FFFFFF75';
$background_overlay_image_color = isset( $attributes['backgroundOverlayImageColor'] ) ? $attributes['backgroundOverlayImageColor'] : '#FFFFFF75';

$background_custom_size_overlay_desktop = isset( $attributes['backgroundCustomSizeOverlayDesktop'] ) ? $attributes['backgroundCustomSizeOverlayDesktop'] : 100;
$background_custom_size_overlay_tablet = isset( $attributes['backgroundCustomSizeOverlayTablet'] ) ? $attributes['backgroundCustomSizeOverlayTablet'] : '';
$background_custom_size_overlay_mobile = isset( $attributes['backgroundCustomSizeOverlayMobile'] ) ? $attributes['backgroundCustomSizeOverlayMobile'] : '';
$background_custom_overlay_size_type = isset( $attributes['backgroundCustomOverlaySizeType'] ) ? $attributes['backgroundCustomOverlaySizeType'] : '%';

$custom_overlay_position = isset( $attributes['customOverlayPosition'] ) ? $attributes['customOverlayPosition'] : 'default';
$x_position_overlay_desktop = isset( $attributes['xPositionOverlayDesktop'] ) ? $attributes['xPositionOverlayDesktop'] : '';
$x_position_overlay_tablet = isset( $attributes['xPositionOverlayTablet'] ) ? $attributes['xPositionOverlayTablet'] : '';
$x_position_overlay_mobile = isset( $attributes['xPositionOverlayMobile'] ) ? $attributes['xPositionOverlayMobile'] : '';
$x_position_overlay_type = isset( $attributes['xPositionOverlayType'] ) ? $attributes['xPositionOverlayType'] : 'px';
$x_position_overlay_type_tablet = isset( $attributes['xPositionOverlayTypeTablet'] ) ? $attributes['xPositionOverlayTypeTablet'] : 'px';
$x_position_overlay_type_mobile = isset( $attributes['xPositionOverlayTypeMobile'] ) ? $attributes['xPositionOverlayTypeMobile'] : 'px';

$y_position_overlay_desktop = isset( $attributes['yPositionOverlayDesktop'] ) ? $attributes['yPositionOverlayDesktop'] : '';
$y_position_overlay_tablet = isset( $attributes['yPositionOverlayTablet'] ) ? $attributes['yPositionOverlayTablet'] : '';
$y_position_overlay_mobile = isset( $attributes['yPositionOverlayMobile'] ) ? $attributes['yPositionOverlayMobile'] : '';
$y_position_overlay_type = isset( $attributes['yPositionOverlayType'] ) ? $attributes['yPositionOverlayType'] : 'px';
$y_position_overlay_type_tablet = isset( $attributes['yPositionOverlayTypeTablet'] ) ? $attributes['yPositionOverlayTypeTablet'] : 'px';
$y_position_overlay_type_mobile = isset( $attributes['yPositionOverlayTypeMobile'] ) ? $attributes['yPositionOverlayTypeMobile'] : 'px';

$gradient_overlay_color1 = isset( $attributes['gradientOverlayColor1'] ) ? $attributes['gradientOverlayColor1'] : '#06558a';
$gradient_overlay_color2 = isset( $attributes['gradientOverlayColor2'] ) ? $attributes['gradientOverlayColor2'] : '#0063A1';
$gradient_overlay_type = isset( $attributes['gradientOverlayType'] ) ? $attributes['gradientOverlayType'] : 'linear';
$select_overlay_gradient = isset( $attributes['selectOverlayGradient'] ) ? $attributes['selectOverlayGradient'] : 'basic';
$gradient_overlay_location1 = isset( $attributes['gradientOverlayLocation1'] ) ? $attributes['gradientOverlayLocation1'] : 0;
$gradient_overlay_location2 = isset( $attributes['gradientOverlayLocation2'] ) ? $attributes['gradientOverlayLocation2'] : 100;

$children_width_desktop = isset( $attributes['childrenWidthDesktop'] ) ? $attributes['childrenWidthDesktop'] : '';
$children_width_tablet = isset( $attributes['childrenWidthTablet'] ) ? $attributes['childrenWidthTablet'] : '';
$children_width_mobile = isset( $attributes['childrenWidthMobile'] ) ? $attributes['childrenWidthMobile'] : '';

$uag_animation_delay_interval = isset( $attributes['UAGAnimationDelayInterval'] ) ? $attributes['UAGAnimationDelayInterval'] : 200;
$uag_animation_do_not_apply_to_container = isset( $attributes['UAGAnimationDoNotApplyToContainer'] ) ? $attributes['UAGAnimationDoNotApplyToContainer'] : false;
$uag_animation_show_container_advanced_settings = isset( $attributes['UAGAnimationShowContainerAdvancedSettings'] ) ? $attributes['UAGAnimationShowContainerAdvancedSettings'] : false;
$background_video_fallback_image = isset( $attributes['backgroundVideoFallbackImage'] ) ? $attributes['backgroundVideoFallbackImage'] : '';
$layout = isset( $attributes['layout'] ) ? $attributes['layout'] : '';

$grid_column_desktop = isset( $attributes['gridColumnDesktop'] ) ? $attributes['gridColumnDesktop'] : $grid_css_array;
$grid_column_tablet = isset( $attributes['gridColumnTablet'] ) ? $attributes['gridColumnTablet'] : $grid_css_array;
$grid_column_mobile = isset( $attributes['gridColumnMobile'] ) ? $attributes['gridColumnMobile'] : $grid_css_array;

$grid_row_desktop = isset( $attributes['gridRowDesktop'] ) ? $attributes['gridRowDesktop'] : $grid_css_array;
$grid_row_tablet = isset( $attributes['gridRowTablet'] ) ? $attributes['gridRowTablet'] : $grid_css_array;
$grid_row_mobile = isset( $attributes['gridRowMobile'] ) ? $attributes['gridRowMobile'] : $grid_css_array;

$grid_align_items_desktop = isset( $attributes['gridAlignItemsDesktop'] ) ? $attributes['gridAlignItemsDesktop'] : 'stretch';
$grid_align_items_tablet = isset( $attributes['gridAlignItemsTablet'] ) ? $attributes['gridAlignItemsTablet'] : 'stretch';
$grid_align_items_mobile = isset( $attributes['gridAlignItemsMobile'] ) ? $attributes['gridAlignItemsMobile'] : 'stretch';

$grid_justify_items_desktop = isset( $attributes['gridJustifyItemsDesktop'] ) ? $attributes['gridJustifyItemsDesktop'] : 'stretch';
$grid_justify_items_tablet = isset( $attributes['gridJustifyItemsTablet'] ) ? $attributes['gridJustifyItemsTablet'] : 'stretch';
$grid_justify_items_mobile = isset( $attributes['gridJustifyItemsMobile'] ) ? $attributes['gridJustifyItemsMobile'] : 'stretch';

$grid_align_content_desktop = isset( $attributes['gridAlignContentDesktop'] ) ? $attributes['gridAlignContentDesktop'] : 'stretch';
$grid_align_content_tablet = isset( $attributes['gridAlignContentTablet'] ) ? $attributes['gridAlignContentTablet'] : 'stretch';
$grid_align_content_mobile = isset( $attributes['gridAlignContentMobile'] ) ? $attributes['gridAlignContentMobile'] : 'stretch';

$grid_justify_content_desktop = isset( $attributes['gridJustifyContentDesktop'] ) ? $attributes['gridJustifyContentDesktop'] : 'stretch';
$grid_justify_content_tablet = isset( $attributes['gridJustifyContentTablet'] ) ? $attributes['gridJustifyContentTablet'] : 'stretch';
$grid_justify_content_mobile = isset( $attributes['gridJustifyContentMobile'] ) ? $attributes['gridJustifyContentMobile'] : 'stretch';

$order_desktop = isset( $attributes['orderDesktop'] ) ? $attributes['orderDesktop'] : 'initial';
$order_tablet = isset( $attributes['orderTablet'] ) ? $attributes['orderTablet'] : 'initial';
$order_mobile = isset( $attributes['orderMobile'] ) ? $attributes['orderMobile'] : 'initial';

$custom_order_desktop = isset( $attributes['customOrderDesktop'] ) ? $attributes['customOrderDesktop'] : '';
$custom_order_tablet = isset( $attributes['customOrderTablet'] ) ? $attributes['customOrderTablet'] : '';
$custom_order_mobile = isset( $attributes['customOrderMobile'] ) ? $attributes['customOrderMobile'] : '';

$innerContentWidth = isset( $attributes['innerContentWidth'] ) ? $attributes['innerContentWidth'] : 'alignfull';
$contentWidth = isset( $attributes['contentWidth'] ) ? $attributes['contentWidth'] : 'alignwide';

$has_inner_blocks_wrap = 'alignwide' === $contentWidth && 'alignfull' === $innerContentWidth;

$css = "";
if (isset($attributes['p_block_id']) && !isset($attributes['isBlockRootParent'])) {
	$block_id = $attributes['p_block_id'];
	$css_content = "";
	// Generate custom width CSS if available
	if (isset($attributes['customWidth'])) {
		$customWidth = $attributes['customWidth'];
		$css_content .= ".frontis-blocks-$block_id {\n";
		if (isset($customWidth['Desktop'])) {
			$css_content .= "  max-width: {$customWidth['Desktop']}%; /* Desktop */\n";
			$css_content .= "  width: 100%\n";
		}
		$css_content .= "}\n";

		$css_content .= "@media (max-width: 1024px) {\n";
		$css_content .= "  .frontis-blocks-$block_id {\n";
		if (isset($customWidth['Tablet'])) {
			$css_content .= "    max-width: {$customWidth['Tablet']}%; /* Tablet */\n";
			$css_content .= "    width: 100%\n";
		}
		$css_content .= "  }\n";
		$css_content .= "}\n";

		$css_content .= "@media (max-width: 768px) {\n";
		$css_content .= "  .frontis-blocks-$block_id {\n";
		if (isset($customWidth['Mobile'])) {
			$css_content .= "    max-width: {$customWidth['Mobile']}%; /* Mobile */\n";
			$css_content .= "    width: 100%\n";
		}
		$css_content .= "  }\n";
		$css_content .= "}\n";
	}

	// Enqueue style for frontend
	EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $block_id);
}

if(isset($block_attributes['isBlockRootParent']) && $block_attributes['isBlockRootParent'] ) {

		// Add style to frontis-blocks-container-inner-blocks-wrap

		var_dump($has_inner_blocks_wrap);

		if ( $has_inner_blocks_wrap ) {
// 			$selectors[ '.uagb-is-root-container.alignfull' . $base_selector . ' > .frontis-container-inner-blocks-wrap' ] = array_merge(
// 				array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
// 				'--inner-content-custom-width' => 'min( 100%, ' . $attr['innerContentCustomWidthDesktop'] . $attr['innerContentCustomWidthType'] . ')',
// 				'max-width'                    => 'var(--inner-content-custom-width)',
// 				'width'                        => '100%',
// 				),
// 				$inner_container_css
// 			);

// 			$t_selectors[ '.uagb-is-root-container.alignfull' . $base_selector . ' > .uagb-container-inner-blocks-wrap' ] = array_merge(
// 				array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
// 				'--inner-content-custom-width' => 'min( 100%, ' . $inner_content_custom_width_tablet_fallback . $attr['innerContentCustomWidthTypeTablet'] . ')',
// 				'max-width'                    => 'var(--inner-content-custom-width)',
// 				'width'                        => '100%',
// 				),
// 				$inner_container_tablet_css
// 			);
//
// 			$m_selectors[ '.uagb-is-root-container.alignfull' . $base_selector . ' > .uagb-container-inner-blocks-wrap' ] = array_merge(
// 				array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
// 				'--inner-content-custom-width' => 'min( 100%, ' . $inner_content_custom_width_mobile_fallback . $attr['innerContentCustomWidthTypeMobile'] . ')',
// 				'max-width'                    => 'var(--inner-content-custom-width)',
// 				'width'                        => '100%',
// 				),
// 				$inner_container_mobile_css
// 			);
		}

// 	    --inner-content-custom-width: min(100%, 1340px);
//         max-width: var(--inner-content-custom-width);
//         width: 100%;
//         flex-direction: row;
//         align-items: center;
//         justify-content: center;
//         flex-wrap: wrap;
//         row-gap: 20px;
//         column-gap: 20px;
	// Generate css for Tablet

	// Generate css for mobile

	// Enqueue style for frontend
	EnqueueBlocksCss::enqueue_block_asset($css, $single_block['slug'], $block_id);
}

