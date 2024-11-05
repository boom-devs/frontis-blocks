<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes               = $block['attrs'];
$blockId                        = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';
$blockStyle                     = isset($block_attributes['blockStyle']) ? sanitize_text_field($block_attributes['blockStyle']) : '';

// $socialIconZIndex               = isset($block_attributes['socialIconZIndex']) ? sanitize_text_field($block_attributes['socialIconZIndex']) : '';
// $deviceType                     = isset($block_attributes['deviceType']) ? sanitize_text_field($block_attributes['deviceType']) : 'Desktop';
// $socialAlignment                = isset($block_attributes['socialAlignment']) ? sanitize_text_field($block_attributes['socialAlignment']) : 'left';
// $socialIconZIndex               = isset($block_attributes['socialIconZIndex']) ? sanitize_text_field($block_attributes['socialIconZIndex']) : '';
// $socialIconSize                 = isset($block_attributes['socialIconSize']) ? $block_attributes['socialIconSize'] : ['Desktop' => 25, 'Tablet' => 25, 'Mobile' => 25];
// $socialIconSizeUnits            = isset($block_attributes['socialIconSizeUnits']) ? $block_attributes['socialIconSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

// $socialIconColor                = isset($block_attributes['socialIconColor']) ? sanitize_text_field($block_attributes['socialIconColor']) : '#fff';
// $socialIconHoverColor           = isset($block_attributes['socialIconHoverColor']) ? sanitize_text_field($block_attributes['socialIconHoverColor']) : '#fff';

// $socialBgColor                  = isset($block_attributes['socialBgColor']) ? sanitize_text_field($block_attributes['socialBgColor']) : '#399CFF';
// $socialBgHoverColor             = isset($block_attributes['socialBgHoverColor']) ? sanitize_text_field($block_attributes['socialBgHoverColor']) : '#399CFF';

// $socialIconBorder               = isset($block_attributes['socialIconBorder']) ? sanitize_text_field($block_attributes['socialIconBorder']) : 'none';
// $socialIconBorderColor          = isset($block_attributes['socialIconBorderColor']) ? sanitize_text_field($block_attributes['socialIconBorderColor']) : '';
// $socialIconBorderHoverColor     = isset($block_attributes['socialIconBorderHoverColor']) ? sanitize_text_field($block_attributes['socialIconBorderHoverColor']) : '';

// /** Start Icon border */
// $socialIconBorderUnits          = isset($block_attributes['socialIconBorderUnits']) ? $block_attributes['socialIconBorderUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px']; 
// $socialIconBorderDesktop        = isset($block_attributes['socialIconBorderDesktop']) ? $block_attributes['socialIconBorderDesktop'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialIconBorderTablet         = isset($block_attributes['socialIconBorderTablet']) ? $block_attributes['socialIconBorderTablet'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialIconBorderMobile         = isset($block_attributes['socialIconBorderMobile']) ? $block_attributes['socialIconBorderMobile'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

// $IconBorderDesktopWidth         = $socialIconBorderDesktop['top'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderDesktop['right'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderDesktop['bottom'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderDesktop['left'] . $socialIconBorderUnits[$deviceType];
// $IconBorderTabletWidth          = $socialIconBorderTablet['top'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderTablet['right'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderTablet['bottom'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderTablet['left'] . $socialIconBorderUnits[$deviceType];
// $IconBorderMobileWidth          = $socialIconBorderMobile['top'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderMobile['right'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderMobile['bottom'] . $socialIconBorderUnits[$deviceType] . ' ' . $socialIconBorderMobile['left'] . $socialIconBorderUnits[$deviceType];
// /** End Icon Border */

// /** Start Border Radius */
// $socialIconBorderRadiusUnits    = isset($block_attributes['socialIconBorderRadiusUnits']) ? $block_attributes['socialIconBorderRadiusUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
// $socialIconBorderRadiusDesktop  = isset($block_attributes['socialIconBorderRadiusDesktop']) ? $block_attributes['socialIconBorderRadiusDesktop'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialIconBorderRadiusTablet   = isset($block_attributes['socialIconBorderRadiusTablet']) ? $block_attributes['socialIconBorderRadiusTablet'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialIconBorderRadiusMobile   = isset($block_attributes['socialIconBorderRadiusMobile']) ? $block_attributes['socialIconBorderRadiusMobile'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

// $IconBorderRadiusDesktopWidth   = $socialIconBorderRadiusDesktop['top'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusDesktop['right'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusDesktop['bottom'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusDesktop['left'] . $socialIconBorderRadiusUnits[$deviceType];
// $IconBorderRadiusTabletWidth    = $socialIconBorderRadiusTablet['top'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusTablet['right'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusTablet['bottom'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusTablet['left'] . $socialIconBorderRadiusUnits[$deviceType];
// $IconBorderRadiusMobileWidth    = $socialIconBorderRadiusMobile['top'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusMobile['right'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusMobile['bottom'] . $socialIconBorderRadiusUnits[$deviceType] . ' ' . $socialIconBorderRadiusMobile['left'] . $socialIconBorderRadiusUnits[$deviceType];
// /** End Border Radius */

// $socialIconGapSize              = isset($block_attributes['socialIconGapSize']) ? $block_attributes['socialIconGapSize'] : ['Desktop' => 20, 'Tablet' => 15, 'Mobile' => 15];
// $socialIconGapUnits             = isset($block_attributes['socialIconGapUnits']) ? $block_attributes['socialIconGapUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

// /** Start Icon Padding */
// $socialIconPaddingUnits         = isset($block_attributes['socialIconPaddingUnits']) ? $block_attributes['socialIconPaddingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
// $socialIconPaddingDesktop       = isset($block_attributes['socialIconPaddingDesktop']) ? $block_attributes['socialIconPaddingDesktop'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
// $socialIconPaddingTablet        = isset($block_attributes['socialIconPaddingTablet']) ? $block_attributes['socialIconPaddingTablet'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
// $socialIconPaddingMobile        = isset($block_attributes['socialIconPaddingMobile']) ? $block_attributes['socialIconPaddingMobile'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];

// $IconPaddingDesktop             = $socialIconPaddingDesktop['top'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingDesktop['right'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingDesktop['bottom'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingDesktop['left'] . $socialIconPaddingUnits[$deviceType];
// $IconPaddingTablet              = $socialIconPaddingTablet['top'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingTablet['right'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingTablet['bottom'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingTablet['left'] . $socialIconPaddingUnits[$deviceType];
// $IconPaddingMobile              = $socialIconPaddingMobile['top'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingMobile['right'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingMobile['bottom'] . $socialIconPaddingUnits[$deviceType] . ' ' . $socialIconPaddingMobile['left'] . $socialIconPaddingUnits[$deviceType];
// /** End Icon Padding */

// /** Start Global Padding */
// $socialPaddingUnits             = isset($block_attributes['socialPaddingUnits']) ? $block_attributes['socialPaddingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
// $socialPaddingDesktop           = isset($block_attributes['socialPaddingDesktop']) ? $block_attributes['socialPaddingDesktop'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialPaddingTablet            = isset($block_attributes['socialPaddingTablet']) ? $block_attributes['socialPaddingTablet'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialPaddingMobile            = isset($block_attributes['socialPaddingMobile']) ? $block_attributes['socialPaddingMobile'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

// $DesktopPadding                 = $socialPaddingDesktop['top'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingDesktop['right'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingDesktop['bottom'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingDesktop['left'] . $socialPaddingUnits[$deviceType];
// $TabletPadding                  = $socialPaddingTablet['top'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingTablet['right'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingTablet['bottom'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingTablet['left'] . $socialPaddingUnits[$deviceType];
// $MobilePadding                  = $socialPaddingMobile['top'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingMobile['right'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingMobile['bottom'] . $socialPaddingUnits[$deviceType] . ' ' . $socialPaddingMobile['left'] . $socialPaddingUnits[$deviceType];
// /** End Global Padding */   

// /** Start Global Margin */
// $socialMarginUnits              = isset($block_attributes['socialMarginUnits']) ? $block_attributes['socialMarginUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
// $socialMarginDesktop            = isset($block_attributes['socialMarginDesktop']) ? $block_attributes['socialMarginDesktop'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialMarginTablet             = isset($block_attributes['socialMarginTablet']) ? $block_attributes['socialMarginTablet'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialMarginMobile             = isset($block_attributes['socialMarginMobile']) ? $block_attributes['socialMarginMobile'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

// $DesktopMargin                  = $socialMarginDesktop['top'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginDesktop['right'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginDesktop['bottom'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginDesktop['left'] . $socialMarginUnits[$deviceType];
// $TabletMargin                   = $socialMarginTablet['top'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginTablet['right'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginTablet['bottom'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginTablet['left'] . $socialMarginUnits[$deviceType];
// $MobileMargin                   = $socialMarginMobile['top'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginMobile['right'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginMobile['bottom'] . $socialMarginUnits[$deviceType] . ' ' . $socialMarginMobile['left'] . $socialMarginUnits[$deviceType];
// /** End Global Margin */

// $socialGlobalBgColor            = isset($block_attributes['socialGlobalBgColor']) ? sanitize_text_field($block_attributes['socialGlobalBgColor']) : '';
// $socialGlobalBgHoverColor       = isset($block_attributes['socialGlobalBgHoverColor']) ? sanitize_text_field($block_attributes['socialGlobalBgHoverColor']) : '';

// $socialBorder                   = isset($block_attributes['socialBorder']) ? sanitize_text_field($block_attributes['socialBorder']) : 'none';
// $socialBorderColor              = isset($block_attributes['socialBorderColor']) ? sanitize_text_field($block_attributes['socialBorderColor']) : '';
// $socialBorderHoverColor         = isset($block_attributes['socialBorderHoverColor']) ? sanitize_text_field($block_attributes['socialBorderHoverColor']) : '';

// /** Start Global Border */
// $socialBorderUnits              = isset($block_attributes['socialBorderUnits']) ? $block_attributes['socialBorderUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
// $socialBorderDesktop            = isset($block_attributes['socialBorderDesktop']) ? $block_attributes['socialBorderDesktop'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialBorderTablet             = isset($block_attributes['socialBorderTablet']) ? $block_attributes['socialBorderTablet'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialBorderMobile             = isset($block_attributes['socialBorderMobile']) ? $block_attributes['socialBorderMobile'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

// $BorderDesktopWidth             = $socialBorderDesktop['top'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderDesktop['right'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderDesktop['bottom'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderDesktop['left'] . $socialBorderUnits[$deviceType];
// $BorderTabletWidth              = $socialBorderTablet['top'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderTablet['right'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderTablet['bottom'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderTablet['left'] . $socialBorderUnits[$deviceType];
// $BorderMobileWidth              = $socialBorderMobile['top'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderMobile['right'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderMobile['bottom'] . $socialBorderUnits[$deviceType] . ' ' . $socialBorderMobile['left'] . $socialBorderUnits[$deviceType];
// /** End Global Border */

// /** Start Global Border Radius */
// $socialBorderRadiusUnits        = isset($block_attributes['socialBorderRadiusUnits']) ? $block_attributes['socialBorderRadiusUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
// $socialBorderRadiusDesktop      = isset($block_attributes['socialBorderRadiusDesktop']) ? $block_attributes['socialBorderRadiusDesktop'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialBorderRadiusTablet       = isset($block_attributes['socialBorderRadiusTablet']) ? $block_attributes['socialBorderRadiusTablet'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
// $socialBorderRadiusMobile       = isset($block_attributes['socialBorderRadiusMobile']) ? $block_attributes['socialBorderRadiusMobile'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];

// $BorderRadiusDesktopWidth       = $socialBorderRadiusDesktop['top'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusDesktop['right'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusDesktop['bottom'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusDesktop['left'] . $socialBorderRadiusUnits[$deviceType];
// $BorderRadiusTabletWidth        = $socialBorderRadiusTablet['top'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusTablet['right'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusTablet['bottom'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusTablet['left'] . $socialBorderRadiusUnits[$deviceType];
// $BorderRadiusMobileWidth        = $socialBorderRadiusMobile['top'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusMobile['right'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusMobile['bottom'] . $socialBorderRadiusUnits[$deviceType] . ' ' . $socialBorderRadiusMobile['left'] . $socialBorderRadiusUnits[$deviceType];
// /** End Global Border Radius */


// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($blockStyle, $single_block['slug'], $blockId);