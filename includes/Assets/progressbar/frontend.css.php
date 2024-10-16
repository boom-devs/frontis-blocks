<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes = $block['attrs'];
// Retrieve and sanitize block attributes
$blockId = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';

/**Progress bar settings */
$progressGlobalZIndex    = isset($block_attributes['progressGlobalZIndex']) ? intval($block_attributes['progressGlobalZIndex']) : '';
$progressTextPosition    = isset($block_attributes['progressTextPosition']) ? sanitize_text_field($block_attributes['progressTextPosition']) : 'text-outSide';
$progressNumber          = isset($block_attributes['progressNumber']) ? intval($block_attributes['progressNumber']) : 95;
$progressColor           = isset($block_attributes['progressColor']) ? sanitize_text_field($block_attributes['progressColor']) : '#399CFF';
$progressHoverColor      = isset($block_attributes['progressHoverColor']) ? sanitize_text_field($block_attributes['progressHoverColor']) : '#399CFF';

/** Text color settings */
$progressTextColor       = isset($block_attributes['progressTextColor']) ? sanitize_text_field($block_attributes['progressTextColor']) : '#000000';
$progressTextHoverColor  = isset($block_attributes['progressTextHoverColor']) ? sanitize_text_field($block_attributes['progressTextHoverColor']) : '#000000';

/** Background color settings */
$progressBgColor         = isset($block_attributes['progressBgColor']) ? sanitize_text_field($block_attributes['progressBgColor']) : '#e8e8e8';
$progressBgHoverColor    = isset($block_attributes['progressBgHoverColor']) ? sanitize_text_field($block_attributes['progressBgHoverColor']) : '#e8e8e8';

/** Title and heading settings */
$progressTitle           = isset($block_attributes['progressTitle']) ? sanitize_text_field($block_attributes['progressTitle']) : 'Progress Bar';
$progressHeadingTag      = isset($block_attributes['progressHeadingTag']) ? sanitize_text_field($block_attributes['progressHeadingTag']) : 'div';
$progressBarHeight       = isset($block_attributes['progressBarHeight']) ? intval($block_attributes['progressBarHeight']) : '';

/** Border radius settings */
$progressBorderRadiusUnits      = isset($block_attributes['progressBorderRadiusUnits']) ? $block_attributes['progressBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$progressBorderRadiusDesktop    = isset($block_attributes['progressBorderRadiusDesktop']) ? $block_attributes['progressBorderRadiusDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$progressBorderRadiusTablet     = isset($block_attributes['progressBorderRadiusTablet']) ? $block_attributes['progressBorderRadiusTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$progressBorderRadiusMobile     = isset($block_attributes['progressBorderRadiusMobile']) ? $block_attributes['progressBorderRadiusMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

/** Calculate border radius for different devices */
$progressDesktopBorderRadiusWidth   = $progressBorderRadiusDesktop['top'] . $progressBorderRadiusUnits['Desktop'] . ' ' . $progressBorderRadiusDesktop['right'] . $progressBorderRadiusUnits['Desktop'] . ' ' . $progressBorderRadiusDesktop['bottom'] . $progressBorderRadiusUnits['Desktop'] . ' ' . $progressBorderRadiusDesktop['left'] . $progressBorderRadiusUnits['Desktop'];
$progressTabletBorderRadiusWidth    = $progressBorderRadiusTablet['top'] . $progressBorderRadiusUnits['Tablet'] . ' ' . $progressBorderRadiusTablet['right'] . $progressBorderRadiusUnits['Tablet'] . ' ' . $progressBorderRadiusTablet['bottom'] . $progressBorderRadiusUnits['Tablet'] . ' ' . $progressBorderRadiusTablet['left'] . $progressBorderRadiusUnits['Tablet'];
$progressMobileBorderRadiusWidth    = $progressBorderRadiusMobile['top'] . $progressBorderRadiusUnits['Mobile'] . ' ' . $progressBorderRadiusMobile['right'] . $progressBorderRadiusUnits['Mobile'] . ' ' . $progressBorderRadiusMobile['bottom'] . $progressBorderRadiusUnits['Mobile'] . ' ' . $progressBorderRadiusMobile['left'] . $progressBorderRadiusUnits['Mobile'];

/** Typography settings */
$progressFontFamily         = isset($block_attributes['progressFontFamily']) ? sanitize_text_field($block_attributes['progressFontFamily']) : '';
$progressFontSize           = isset($block_attributes['progressFontSize']) ? $block_attributes['progressFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$progressFontSizeUnits      = isset($block_attributes['progressFontSizeUnits']) ? $block_attributes['progressFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$progressFontWeight         = isset($block_attributes['progressFontWeight']) ? sanitize_text_field($block_attributes['progressFontWeight']) : '';
$progressFontStyle          = isset($block_attributes['progressFontStyle']) ? sanitize_text_field($block_attributes['progressFontStyle']) : '';
$progressTextTransform      = isset($block_attributes['progressTextTransform']) ? sanitize_text_field($block_attributes['progressTextTransform']) : '';
$progressTextDecoration     = isset($block_attributes['progressTextDecoration']) ? sanitize_text_field($block_attributes['progressTextDecoration']) : '';
$progressLetterSpacing      = isset($block_attributes['progressLetterSpacing']) ? $block_attributes['progressLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$progressLetterSpacingUnits = isset($block_attributes['progressLetterSpacingUnits']) ? $block_attributes['progressLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$progressLineHeight         = isset($block_attributes['progressLineHeight']) ? $block_attributes['progressLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$progressLineHeightUnits    = isset($block_attributes['progressLineHeightUnits']) ? $block_attributes['progressLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');


// Generate CSS content
$css_content = "

    .$blockId .progress-bar-wrapper {
        position: relative;
        z-index: " . (isset($progressGlobalZIndex) ? intval($progressGlobalZIndex) : 'auto') . ";
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
        color: {$progressTextColor};
        font-family: {$progressFontFamily};
        font-size: {$progressFontSize['Desktop']}{$progressFontSizeUnits['Desktop']};
        font-weight: {$progressFontWeight};
        font-style: {$progressFontStyle};
        text-transform: {$progressTextTransform};
        text-decoration: {$progressTextDecoration};
        letter-spacing: {$progressLetterSpacing['Desktop']}{$progressLetterSpacingUnits['Desktop']};
        line-height: {$progressLineHeight['Desktop']}{$progressLineHeightUnits['Desktop']};
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label:hover {
        line-height: {$progressLineHeight['Desktop']}{$progressLineHeightUnits['Desktop']};
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label:hover {
        color: $progressTextHoverColor !important;
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line {
        background-color: $progressBgColor;
        border-radius: $progressDesktopBorderRadiusWidth;
        position: relative;
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line:hover {
        background-color: $progressBgHoverColor;
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar {
        height: " . ($progressBarHeight ? "{$progressBarHeight}px" : "2px") . ";
        background-color: $progressColor;
        border-radius: $progressDesktopBorderRadiusWidth;
        transition: width 0.5s ease-in-out;
        width: {$progressNumber}%;
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar:hover {
        background-color: $progressHoverColor;
        transition: ease-in-out .5s;
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number {
        position: absolute;
        top: -30px;
        left: 150px; 
        transform: translateX(-100%);
        transition: left 0.5s ease-in-out;
        color: $progressTextColor;
    }
    .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-number:hover {
        color: $progressTextHoverColor;
    }
    
    .$blockId .progress-bar-text-inSide-wrapper {
        display: flex;
        background-color: $progressBgColor;
        border-radius: $progressDesktopBorderRadiusWidth;
        height: " . ($progressBarHeight ? "{$progressBarHeight}px" : "30px") . ";
        overflow: hidden;
    }
    .$blockId .progress-bar-text-inSide-wrapper:hover {
        background-color: $progressBgHoverColor;
    }
    .$blockId .progress-bar-text-inSide-wrapper .progress-bar-label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: width .6s ease;
        background-color: $progressColor;
        border-radius: $progressDesktopBorderRadiusWidth;
        transition: width 0.5s ease-in-out;
        width: {$progressNumber}%;
    }
    .$blockId .progress-bar-text-inSide-wrapper .progress-bar-label:hover {
        background-color: $progressHoverColor;
        transition: ease-in-out .5s;
    }

    .$blockId .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info {
        padding-right: 1rem;
        padding-left: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 1;
        border-radius: $progressDesktopBorderRadiusWidth;
        color: $progressTextColor;
        font-size: 14px;
    }
    .$blockId .progress-bar-text-inSide-wrapper .progress-bar-label .progress-bar-info:hover {
        color: $progressTextHoverColor;
    }

    @media only screen and (max-width: 1024px) {
        .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
        .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
        .$blockId .progress-bar-text-inSide-wrapper,
        .$blockId .progress-bar-text-inSide-wrapper .progress-bar-label {
            border-radius: $progressTabletBorderRadiusWidth !important;  
        }
        .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label {
            font-size: {$progressFontSize['Tablet']}{$progressFontSizeUnits['Tablet']};
            letter-spacing: {$progressLetterSpacing['Tablet']}{$progressLetterSpacingUnits['Tablet']};
            line-height: {$progressLineHeight['Tablet']}{$progressLineHeightUnits['Tablet']};
        }
    }

    @media only screen and (max-width: 767px) {
        .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-line,
        .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar,
        .$blockId .progress-bar-text-inSide-wrapper,
        .$blockId .progress-bar-text-inSide-wrapper .progress-bar-label {
            border-radius: $progressMobileBorderRadiusWidth !important;
        }
        .$blockId .progress-bar-wrapper .progress-bar-text-outSide-wrapper .progress-bar-label { 
            font-size: {$progressFontSize['Mobile']}{$progressFontSizeUnits['Mobile']};
            letter-spacing: {$progressLetterSpacing['Mobile']}{$progressLetterSpacingUnits['Mobile']};
            line-height: {$progressLineHeight['Mobile']}{$progressLineHeightUnits['Mobile']};
        }
    }


";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockId);