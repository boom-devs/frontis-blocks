<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';

// Video Border
$videoBorder = isset($block_attributes['videoBorder']) ? sanitize_text_field($block_attributes['videoBorder']) : 'none';
$videoBorderColorSwitcher = isset($block_attributes['videoBorderColorSwitcher']) ? sanitize_text_field($block_attributes['videoBorderColorSwitcher']) : 'normal';
$videoBorderColor = isset($block_attributes['videoBorderColor']) ? sanitize_hex_color($block_attributes['videoBorderColor']) : '';
$videoBorderHoverColor = isset($block_attributes['videoBorderHoverColor']) ? sanitize_hex_color($block_attributes['videoBorderHoverColor']) : '';

// Video Border Width
$videoBorderUnits = isset($block_attributes['videoBorderUnits']) ? array_map('sanitize_text_field', $block_attributes['videoBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$videoBorderDesktop = isset($block_attributes['videoBorderDesktop']) ? array_map('intval', $block_attributes['videoBorderDesktop']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoBorderTablet = isset($block_attributes['videoBorderTablet']) ? array_map('intval', $block_attributes['videoBorderTablet']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoBorderMobile = isset($block_attributes['videoBorderMobile']) ? array_map('intval', $block_attributes['videoBorderMobile']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
/** Default border for Video */
$IframeBorderDesktopWidth = $videoBorderDesktop['top'] . $videoBorderUnits['Desktop'] . ' ' . $videoBorderDesktop['right'] . $videoBorderUnits['Desktop'] . ' ' . $videoBorderDesktop['bottom'] . $videoBorderUnits['Desktop'] . ' ' . $videoBorderDesktop['left'] . $videoBorderUnits['Desktop'];
$IframeBorderTabletWidth = $videoBorderTablet['top'] . $videoBorderUnits['Tablet'] . ' ' . $videoBorderTablet['right'] . $videoBorderUnits['Tablet'] . ' ' . $videoBorderTablet['bottom'] . $videoBorderUnits['Tablet'] . ' ' . $videoBorderTablet['left'] . $videoBorderUnits['Tablet'];
$IframeBorderMobileWidth = $videoBorderMobile['top'] . $videoBorderUnits['Mobile'] . ' ' . $videoBorderMobile['right'] . $videoBorderUnits['Mobile'] . ' ' . $videoBorderMobile['bottom'] . $videoBorderUnits['Mobile'] . ' ' . $videoBorderMobile['left'] . $videoBorderUnits['Mobile'];
/** End Video Border */

// Video Border Radius
$videoBorderRadiusUnits = isset($block_attributes['videoBorderRadiusUnits']) ? array_map('sanitize_text_field', $block_attributes['videoBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$videoBorderRadiusDesktop = isset($block_attributes['videoBorderRadiusDesktop']) ? array_map('intval', $block_attributes['videoBorderRadiusDesktop']) : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];
$videoBorderRadiusTablet = isset($block_attributes['videoBorderRadiusTablet']) ? array_map('intval', $block_attributes['videoBorderRadiusTablet']) : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];
$videoBorderRadiusMobile = isset($block_attributes['videoBorderRadiusMobile']) ? array_map('intval', $block_attributes['videoBorderRadiusMobile']) : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];
/** Default border radius for Video */
$IframeBorderRadiusDesktopWidth = $videoBorderRadiusDesktop['top'] . $videoBorderRadiusUnits['Desktop'] . ' ' . $videoBorderRadiusDesktop['right'] . $videoBorderRadiusUnits['Desktop'] . ' ' . $videoBorderRadiusDesktop['bottom'] . $videoBorderRadiusUnits['Desktop'] . ' ' . $videoBorderRadiusDesktop['left'] . $videoBorderRadiusUnits['Desktop'];
$IframeBorderRadiusTabletWidth = $videoBorderRadiusTablet['top'] . $videoBorderRadiusUnits['Tablet'] . ' ' . $videoBorderRadiusTablet['right'] . $videoBorderRadiusUnits['Tablet'] . ' ' . $videoBorderRadiusTablet['bottom'] . $videoBorderRadiusUnits['Tablet'] . ' ' . $videoBorderRadiusTablet['left'] . $videoBorderRadiusUnits['Tablet'];
$IframeBorderRadiusMobileWidth = $videoBorderRadiusMobile['top'] . $videoBorderRadiusUnits['Mobile'] . ' ' . $videoBorderRadiusMobile['right'] . $videoBorderRadiusUnits['Mobile'] . ' ' . $videoBorderRadiusMobile['bottom'] . $videoBorderRadiusUnits['Mobile'] . ' ' . $videoBorderRadiusMobile['left'] . $videoBorderRadiusUnits['Mobile'];
/** End Video Border Radius */

// Video Global Padding
$videoGlobalPaddingUnits = isset($block_attributes['videoGlobalPaddingUnits']) ? array_map('sanitize_text_field', $block_attributes['videoGlobalPaddingUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$videoGlobalPaddingDesktop = isset($block_attributes['videoGlobalPaddingDesktop']) ? array_map('intval', $block_attributes['videoGlobalPaddingDesktop']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalPaddingTablet = isset($block_attributes['videoGlobalPaddingTablet']) ? array_map('intval', $block_attributes['videoGlobalPaddingTablet']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalPaddingMobile = isset($block_attributes['videoGlobalPaddingMobile']) ? array_map('intval', $block_attributes['videoGlobalPaddingMobile']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
/** Default padding for Video */
$DesktopPadding = $videoGlobalPaddingDesktop['top'] . $videoGlobalPaddingUnits['Desktop'] . ' ' . $videoGlobalPaddingDesktop['right'] . $videoGlobalPaddingUnits['Desktop'] . ' ' . $videoGlobalPaddingDesktop['bottom'] . $videoGlobalPaddingUnits['Desktop'] . ' ' . $videoGlobalPaddingDesktop['left'] . $videoGlobalPaddingUnits['Desktop'];
$TabletPadding = $videoGlobalPaddingTablet['top'] . $videoGlobalPaddingUnits['Tablet'] . ' ' . $videoGlobalPaddingTablet['right'] . $videoGlobalPaddingUnits['Tablet'] . ' ' . $videoGlobalPaddingTablet['bottom'] . $videoGlobalPaddingUnits['Tablet'] . ' ' . $videoGlobalPaddingTablet['left'] . $videoGlobalPaddingUnits['Tablet'];
$MobilePadding = $videoGlobalPaddingMobile['top'] . $videoGlobalPaddingUnits['Mobile'] . ' ' . $videoGlobalPaddingMobile['right'] . $videoGlobalPaddingUnits['Mobile'] . ' ' . $videoGlobalPaddingMobile['bottom'] . $videoGlobalPaddingUnits['Mobile'] . ' ' . $videoGlobalPaddingMobile['left'] . $videoGlobalPaddingUnits['Mobile'];
/** End Video Padding */


// Video Global Margin
$videoGlobalMarginUnits = isset($block_attributes['videoGlobalMarginUnits']) ? array_map('sanitize_text_field', $block_attributes['videoGlobalMarginUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$videoGlobalMarginDesktop = isset($block_attributes['videoGlobalMarginDesktop']) ? array_map('intval', $block_attributes['videoGlobalMarginDesktop']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalMarginTablet = isset($block_attributes['videoGlobalMarginTablet']) ? array_map('intval', $block_attributes['videoGlobalMarginTablet']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalMarginMobile = isset($block_attributes['videoGlobalMarginMobile']) ? array_map('intval', $block_attributes['videoGlobalMarginMobile']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
/** Default margin for Video */
$DesktopMargin = $videoGlobalMarginDesktop['top'] . $videoGlobalMarginUnits['Desktop'] . ' ' . $videoGlobalMarginDesktop['right'] . $videoGlobalMarginUnits['Desktop'] . ' ' . $videoGlobalMarginDesktop['bottom'] . $videoGlobalMarginUnits['Desktop'] . ' ' . $videoGlobalMarginDesktop['left'] . $videoGlobalMarginUnits['Desktop'];
$TabletMargin = $videoGlobalMarginTablet['top'] . $videoGlobalMarginUnits['Tablet'] . ' ' . $videoGlobalMarginTablet['right'] . $videoGlobalMarginUnits['Tablet'] . ' ' . $videoGlobalMarginTablet['bottom'] . $videoGlobalMarginUnits['Tablet'] . ' ' . $videoGlobalMarginTablet['left'] . $videoGlobalMarginUnits['Tablet'];
$MobileMargin = $videoGlobalMarginMobile['top'] . $videoGlobalMarginUnits['Mobile'] . ' ' . $videoGlobalMarginMobile['right'] . $videoGlobalMarginUnits['Mobile'] . ' ' . $videoGlobalMarginMobile['bottom'] . $videoGlobalMarginUnits['Mobile'] . ' ' . $videoGlobalMarginMobile['left'] . $videoGlobalMarginUnits['Mobile'];
/** End Video Margin */

// Video Global Background Color
$videoGlobalBgColorSwitcher = isset($block_attributes['videoGlobalBgColorSwitcher']) ? sanitize_text_field($block_attributes['videoGlobalBgColorSwitcher']) : 'normal';
$videoGlobalBgColor = isset($block_attributes['videoGlobalBgColor']) ? sanitize_hex_color($block_attributes['videoGlobalBgColor']) : '';
$videoGlobalBgHoverColor = isset($block_attributes['videoGlobalBgHoverColor']) ? sanitize_hex_color($block_attributes['videoGlobalBgHoverColor']) : '';

// Video Global Border
$videoGlobalBorder = isset($block_attributes['videoGlobalBorder']) ? sanitize_text_field($block_attributes['videoGlobalBorder']) : 'none';
$videoGlobalBorderColorSwitcher = isset($block_attributes['videoGlobalBorderColorSwitcher']) ? sanitize_text_field($block_attributes['videoGlobalBorderColorSwitcher']) : 'normal';
$videoGlobalBorderColor = isset($block_attributes['videoGlobalBorderColor']) ? sanitize_hex_color($block_attributes['videoGlobalBorderColor']) : '';
$videoGlobalBorderHoverColor = isset($block_attributes['videoGlobalBorderHoverColor']) ? sanitize_hex_color($block_attributes['videoGlobalBorderHoverColor']) : '';

// Video Global Border Width
$videoGlobalBorderUnits = isset($block_attributes['videoGlobalBorderUnits']) ? array_map('sanitize_text_field', $block_attributes['videoGlobalBorderUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$videoGlobalBorderDesktop = isset($block_attributes['videoGlobalBorderDesktop']) ? array_map('intval', $block_attributes['videoGlobalBorderDesktop']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalBorderTablet = isset($block_attributes['videoGlobalBorderTablet']) ? array_map('intval', $block_attributes['videoGlobalBorderTablet']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalBorderMobile = isset($block_attributes['videoGlobalBorderMobile']) ? array_map('intval', $block_attributes['videoGlobalBorderMobile']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
/** Default border for Video Wrapper */
$BorderDesktopWidth = $videoGlobalBorderDesktop['top'] . $videoGlobalBorderUnits['Desktop'] . ' ' . $videoGlobalBorderDesktop['right'] . $videoGlobalBorderUnits['Desktop'] . ' ' . $videoGlobalBorderDesktop['bottom'] . $videoGlobalBorderUnits['Desktop'] . ' ' . $videoGlobalBorderDesktop['left'] . $videoGlobalBorderUnits['Desktop'];
$BorderTabletWidth = $videoGlobalBorderTablet['top'] . $videoGlobalBorderUnits['Tablet'] . ' ' . $videoGlobalBorderTablet['right'] . $videoGlobalBorderUnits['Tablet'] . ' ' . $videoGlobalBorderTablet['bottom'] . $videoGlobalBorderUnits['Tablet'] . ' ' . $videoGlobalBorderTablet['left'] . $videoGlobalBorderUnits['Tablet'];
$BorderMobileWidth = $videoGlobalBorderMobile['top'] . $videoGlobalBorderUnits['Mobile'] . ' ' . $videoGlobalBorderMobile['right'] . $videoGlobalBorderUnits['Mobile'] . ' ' . $videoGlobalBorderMobile['bottom'] . $videoGlobalBorderUnits['Mobile'] . ' ' . $videoGlobalBorderMobile['left'] . $videoGlobalBorderUnits['Mobile'];
/** End Video Wrapper Border */

// Video Global Border Radius
$videoGlobalBorderRadiusUnits = isset($block_attributes['videoGlobalBorderRadiusUnits']) ? array_map('sanitize_text_field', $block_attributes['videoGlobalBorderRadiusUnits']) : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$videoGlobalBorderRadiusDesktop = isset($block_attributes['videoGlobalBorderRadiusDesktop']) ? array_map('intval', $block_attributes['videoGlobalBorderRadiusDesktop']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalBorderRadiusTablet = isset($block_attributes['videoGlobalBorderRadiusTablet']) ? array_map('intval', $block_attributes['videoGlobalBorderRadiusTablet']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalBorderRadiusMobile = isset($block_attributes['videoGlobalBorderRadiusMobile']) ? array_map('intval', $block_attributes['videoGlobalBorderRadiusMobile']) : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$videoGlobalBorderRadiusLink = isset($block_attributes['videoGlobalBorderRadiusLink']) ? rest_sanitize_boolean($block_attributes['videoGlobalBorderRadiusLink']) : true;

/** Default border radius for Video Wrapper */
$BorderRadiusDesktopWidth = $videoGlobalBorderRadiusDesktop['top'] . $videoGlobalBorderRadiusUnits['Desktop'] . ' ' . $videoGlobalBorderRadiusDesktop['right'] . $videoGlobalBorderRadiusUnits['Desktop'] . ' ' . $videoGlobalBorderRadiusDesktop['bottom'] . $videoGlobalBorderRadiusUnits['Desktop'] . ' ' . $videoGlobalBorderRadiusDesktop['left'] . $videoGlobalBorderRadiusUnits['Desktop'];
$BorderRadiusTabletWidth = $videoGlobalBorderRadiusTablet['top'] . $videoGlobalBorderRadiusUnits['Tablet'] . ' ' . $videoGlobalBorderRadiusTablet['right'] . $videoGlobalBorderRadiusUnits['Tablet'] . ' ' . $videoGlobalBorderRadiusTablet['bottom'] . $videoGlobalBorderRadiusUnits['Tablet'] . ' ' . $videoGlobalBorderRadiusTablet['left'] . $videoGlobalBorderRadiusUnits['Tablet'];
$BorderRadiusMobileWidth = $videoGlobalBorderRadiusMobile['top'] . $videoGlobalBorderRadiusUnits['Mobile'] . ' ' . $videoGlobalBorderRadiusMobile['right'] . $videoGlobalBorderRadiusUnits['Mobile'] . ' ' . $videoGlobalBorderRadiusMobile['bottom'] . $videoGlobalBorderRadiusUnits['Mobile'] . ' ' . $videoGlobalBorderRadiusMobile['left'] . $videoGlobalBorderRadiusUnits['Mobile'];
/** End Video Wrapper Border Radius */

// Generate CSS content
$css_content = "
	.$blockId.fb-advanced-video-main-wrapper {
        z-index: " . (isset($videoGlobalZIndex) ? intval($videoGlobalZIndex) : 'auto') . ";
    }
    .$blockId.fb-advanced-video-wrapper {
        " . (isset($videoGlobalBgColor) ? "background-color: $videoGlobalBgColor;" : "") . "
        padding: $DesktopPadding;
        margin: $DesktopMargin;
        border: $videoGlobalBorder;
        border-width: $BorderDesktopWidth;
        border-radius: $BorderRadiusDesktopWidth !important;
        " . (isset($videoGlobalBorderColor) ? "border-color: $videoGlobalBorderColor;" : "") . "
    }
    .$blockId.fb-advanced-video-wrapper:hover {
        " . (isset($videoGlobalBgHoverColor) ? "background-color: $videoGlobalBgHoverColor;" : "") . "
        " . (isset($videoGlobalBorderHoverColor) ? "border-color: $videoGlobalBorderHoverColor;" : "") . "
    }
	
    .$blockId .fb-react-player iframe {
        border: $videoBorder;
        border-width: $IframeBorderDesktopWidth;
        border-radius: $IframeBorderRadiusDesktopWidth !important;
        " . (isset($videoBorderColor) ? "border-color: $videoBorderColor;" : "") . "
    }

    @media only screen and (max-width: 1024px) {
        .$blockId.fb-advanced-video-wrapper {
            padding: $TabletPadding;
            margin: $TabletMargin;
            border-width: $BorderTabletWidth;
            border-radius: $BorderRadiusTabletWidth !important;
        }

        .$blockId .fb-react-player iframe {
            border-width: $IframeBorderTabletWidth;
            border-radius: $IframeBorderRadiusTabletWidth !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .$blockId.fb-advanced-video-wrapper {
            padding: $MobilePadding;
            margin: $MobileMargin;
            border-width: $BorderMobileWidth;
            border-radius: $BorderRadiusMobileWidth !important;
        }

        .$blockId .fb-react-player iframe {
            border-width: $IframeBorderMobileWidth;
            border-radius: $IframeBorderRadiusMobileWidth !important;
        }
    }
";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockId);
