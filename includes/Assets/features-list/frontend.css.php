<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';


$FeatureZIndex = isset($block_attributes['FeatureZIndex']) ? sanitize_text_field($block_attributes['FeatureZIndex']) : '';

/** Start Global Padding */
$FeaturePaddingUnits            = isset($block_attributes['FeaturePaddingUnits']) ? sanitize_text_field($block_attributes['FeaturePaddingUnits']) : 'px';
$FeatureDesktopPadding          = isset($block_attributes['FeatureDesktopPadding']) ? $block_attributes['FeatureDesktopPadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureTabPadding              = isset($block_attributes['FeatureTabPadding']) ? $block_attributes['FeatureTabPadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureMobilePadding           = isset($block_attributes['FeatureMobilePadding']) ? $block_attributes['FeatureMobilePadding'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

$globalFeatureDesktopPadding    = $FeatureDesktopPadding['top'] . $FeaturePaddingUnits . ' ' . $FeatureDesktopPadding['right'] . $FeaturePaddingUnits . ' ' . $FeatureDesktopPadding['bottom'] . $FeaturePaddingUnits . ' ' . $FeatureDesktopPadding['left'] . $FeaturePaddingUnits;
$globalFeatureTabletPadding     = $FeatureTabPadding['top'] . $FeaturePaddingUnits . ' ' . $FeatureTabPadding['right'] . $FeaturePaddingUnits . ' ' . $FeatureTabPadding['bottom'] . $FeaturePaddingUnits . ' ' . $FeatureTabPadding['left'] . $FeaturePaddingUnits;
$globalFeatureMobilePadding     = $FeatureMobilePadding['top'] . $FeaturePaddingUnits . ' ' . $FeatureMobilePadding['right'] . $FeaturePaddingUnits . ' ' . $FeatureMobilePadding['bottom'] . $FeaturePaddingUnits . ' ' . $FeatureMobilePadding['left'] . $FeaturePaddingUnits;
/** End Global Padding */

/** Start Global Margin */
$FeatureMarginUnits            = isset($block_attributes['FeatureMarginUnits']) ? sanitize_text_field($block_attributes['FeatureMarginUnits']) : 'px';
$FeatureDesktopMargin          = isset($block_attributes['FeatureDesktopMargin']) ? $block_attributes['FeatureDesktopMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureTabMargin              = isset($block_attributes['FeatureTabMargin']) ? $block_attributes['FeatureTabMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureMobileMargin           = isset($block_attributes['FeatureMobileMargin']) ? $block_attributes['FeatureMobileMargin'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

$globalFeatureDesktopMargin    = $FeatureDesktopMargin['top'] . $FeatureMarginUnits . ' ' . $FeatureDesktopMargin['right'] . $FeatureMarginUnits . ' ' . $FeatureDesktopMargin['bottom'] . $FeatureMarginUnits . ' ' . $FeatureDesktopMargin['left'] . $FeatureMarginUnits;
$globalFeatureTabletMargin     = $FeatureTabMargin['top'] . $FeatureMarginUnits . ' ' . $FeatureTabMargin['right'] . $FeatureMarginUnits . ' ' . $FeatureTabMargin['bottom'] . $FeatureMarginUnits . ' ' . $FeatureTabMargin['left'] . $FeatureMarginUnits;
$globalFeatureMobileMargin     = $FeatureMobileMargin['top'] . $FeatureMarginUnits . ' ' . $FeatureMobileMargin['right'] . $FeatureMarginUnits . ' ' . $FeatureMobileMargin['bottom'] . $FeatureMarginUnits . ' ' . $FeatureMobileMargin['left'] . $FeatureMarginUnits;
/** End Global Margin */

/** Start Global Bg Color */
$FeatureBgColor                 = isset($block_attributes['FeatureBgColor']) ? sanitize_text_field($block_attributes['FeatureBgColor']) : '';
$FeatureBgHoverColor            = isset($block_attributes['FeatureBgHoverColor']) ? sanitize_text_field($block_attributes['FeatureBgHoverColor']) : '';
/** End Global Bg Color */

/** Start Global Border */
$FeatureBorder                  = isset($block_attributes['FeatureBorder']) ? sanitize_text_field($block_attributes['FeatureBorder']) : 'none';
$FeatureBorderColor             = isset($block_attributes['FeatureBorderColor']) ? sanitize_text_field($block_attributes['FeatureBorderColor']) : '';
$FeatureBorderHoverColor        = isset($block_attributes['FeatureBorderHoverColor']) ? sanitize_text_field($block_attributes['FeatureBorderHoverColor']) : '';
/** End Global Border */

/** Start Global Border Width */
$FeatureBorderUnits             = isset($block_attributes['FeatureBorderUnits']) ? sanitize_text_field($block_attributes['FeatureBorderUnits']) : 'px';
$FeatureDesktopBorderWidth      = isset($block_attributes['FeatureDesktopBorderWidth']) ? $block_attributes['FeatureDesktopBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureTabBorderWidth          = isset($block_attributes['FeatureTabBorderWidth']) ? $block_attributes['FeatureTabBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureMobileBorderWidth       = isset($block_attributes['FeatureMobileBorderWidth']) ? $block_attributes['FeatureMobileBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

$globalFeatureDesktopBorderWidth= $FeatureDesktopBorderWidth['top'] . $FeatureBorderUnits . ' ' . $FeatureDesktopBorderWidth['right'] . $FeatureBorderUnits . ' ' . $FeatureDesktopBorderWidth['bottom'] . $FeatureBorderUnits . ' ' . $FeatureDesktopBorderWidth['left'] . $FeatureBorderUnits;
$globalFeatureTabletBorderWidth = $FeatureTabBorderWidth['top'] . $FeatureBorderUnits . ' ' . $FeatureTabBorderWidth['right'] . $FeatureBorderUnits . ' ' . $FeatureTabBorderWidth['bottom'] . $FeatureBorderUnits . ' ' . $FeatureTabBorderWidth['left'] . $FeatureBorderUnits;
$globalFeatureMobileBorderWidth = $FeatureMobileBorderWidth['top'] . $FeatureBorderUnits . ' ' . $FeatureMobileBorderWidth['right'] . $FeatureBorderUnits . ' ' . $FeatureMobileBorderWidth['bottom'] . $FeatureBorderUnits . ' ' . $FeatureMobileBorderWidth['left'] . $FeatureBorderUnits;
/** End Global Border Width */

/** Start Global Border Radius */
$FeatureBorderRadiusUnits               = isset($block_attributes['FeatureBorderRadiusUnits']) ? sanitize_text_field($block_attributes['FeatureBorderRadiusUnits']) : 'px';
$FeatureDesktopBorderRadiusWidth        = isset($block_attributes['FeatureDesktopBorderRadiusWidth']) ? $block_attributes['FeatureDesktopBorderRadiusWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureTabBorderRadiusWidth            = isset($block_attributes['FeatureTabBorderRadiusWidth']) ? $block_attributes['FeatureTabBorderRadiusWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$FeatureMobileBorderRadiusWidth         = isset($block_attributes['FeatureMobileBorderRadiusWidth']) ? $block_attributes['FeatureMobileBorderRadiusWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

$globalFeatureDesktopBorderRadiusWidth  = $FeatureDesktopBorderRadiusWidth['top'] . $FeatureBorderRadiusUnits . ' ' . $FeatureDesktopBorderRadiusWidth['right'] . $FeatureBorderRadiusUnits . ' ' . $FeatureDesktopBorderRadiusWidth['bottom'] . $FeatureBorderRadiusUnits . ' ' . $FeatureDesktopBorderRadiusWidth['left'] . $FeatureBorderRadiusUnits;
$globalFeatureTabletBorderRadiusWidth   = $FeatureTabBorderRadiusWidth['top'] . $FeatureBorderRadiusUnits . ' ' . $FeatureTabBorderRadiusWidth['right'] . $FeatureBorderRadiusUnits . ' ' . $FeatureTabBorderRadiusWidth['bottom'] . $FeatureBorderRadiusUnits . ' ' . $FeatureTabBorderRadiusWidth['left'] . $FeatureBorderRadiusUnits;
$globalFeatureMobileBorderRadiusWidth   = $FeatureMobileBorderRadiusWidth['top'] . $FeatureBorderRadiusUnits . ' ' . $FeatureMobileBorderRadiusWidth['right'] . $FeatureBorderRadiusUnits . ' ' . $FeatureMobileBorderRadiusWidth['bottom'] . $FeatureBorderRadiusUnits . ' ' . $FeatureMobileBorderRadiusWidth['left'] . $FeatureBorderRadiusUnits;
/** End Global Border Radius */

$FeatureboxShadowCssValue   = isset($block_attributes['FeatureboxShadowCssValue']) ? sanitize_text_field($block_attributes['FeatureboxShadowCssValue']) : '';
$FeatureTag                 = isset($block_attributes['FeatureTag']) ? sanitize_text_field($block_attributes['FeatureTag']) : 'h3';


$FeatureListGapDesktop      = isset($block_attributes['FeatureListGapDesktop']) ? intval($block_attributes['FeatureListGapDesktop']) : 20;
$FeatureListGapTablet       = isset($block_attributes['FeatureListGapTablet']) ? intval($block_attributes['FeatureListGapTablet']) : 15;
$FeatureListGapMobile       = isset($block_attributes['FeatureListGapMobile']) ? intval($block_attributes['FeatureListGapMobile']) : 10;
$FeatureListGapUnits        = isset($block_attributes['FeatureListGapUnits']) ? sanitize_text_field($block_attributes['FeatureListGapUnits']) : 'px';

$FeatureIconColor           = isset($block_attributes['FeatureIconColor']) ? sanitize_text_field($block_attributes['FeatureIconColor']) : '#fff';
$FeatureIconHoverColor      = isset($block_attributes['FeatureIconHoverColor']) ? sanitize_text_field($block_attributes['FeatureIconHoverColor']) : '#fff';

$FeatureIconBgColor         = isset($block_attributes['FeatureIconBgColor']) ? sanitize_text_field($block_attributes['FeatureIconBgColor']) : '#000';
$FeatureIconBgHoverColor    = isset($block_attributes['FeatureIconBgHoverColor']) ? sanitize_text_field($block_attributes['FeatureIconBgHoverColor']) : '#000';

$FeatureIconSizeDesktop     = isset($block_attributes['FeatureIconSizeDesktop']) ? intval($block_attributes['FeatureIconSizeDesktop']) : 25;
$FeatureIconSizeTablet      = isset($block_attributes['FeatureIconSizeTablet']) ? intval($block_attributes['FeatureIconSizeTablet']) : 25;
$FeatureIconSizeMobile      = isset($block_attributes['FeatureIconSizeMobile']) ? intval($block_attributes['FeatureIconSizeMobile']) : 25;
$FeatureIconSizeUnits       = isset($block_attributes['FeatureIconSizeUnits']) ? sanitize_text_field($block_attributes['FeatureIconSizeUnits']) : 'px';

$FeatureIconBgSizeDesktop   = isset($block_attributes['FeatureIconBgSizeDesktop']) ? intval($block_attributes['FeatureIconBgSizeDesktop']) : 60;
$FeatureIconBgSizeTablet    = isset($block_attributes['FeatureIconBgSizeTablet']) ? intval($block_attributes['FeatureIconBgSizeTablet']) : 60;
$FeatureIconBgSizeMobile    = isset($block_attributes['FeatureIconBgSizeMobile']) ? intval($block_attributes['FeatureIconBgSizeMobile']) : 60;
$FeatureIconBgSizeUnits     = isset($block_attributes['FeatureIconBgSizeUnits']) ? sanitize_text_field($block_attributes['FeatureIconBgSizeUnits']) : 'px';

$FeatureIconSpacingDesktop  = isset($block_attributes['FeatureIconSpacingDesktop']) ? intval($block_attributes['FeatureIconSpacingDesktop']) : 20;
$FeatureIconSpacingTablet   = isset($block_attributes['FeatureIconSpacingTablet']) ? intval($block_attributes['FeatureIconSpacingTablet']) : 20;
$FeatureIconSpacingMobile   = isset($block_attributes['FeatureIconSpacingMobile']) ? intval($block_attributes['FeatureIconSpacingMobile']) : 20;
$FeatureIconSpacingUnits    = isset($block_attributes['FeatureIconSpacingUnits']) ? sanitize_text_field($block_attributes['FeatureIconSpacingUnits']) : 'px';

$FeatureTitleFontFamily             = isset($block_attributes['FeatureTitleFontFamily']) ? sanitize_text_field($block_attributes['FeatureTitleFontFamily']) : 'inherit';
$FeatureTitleFontSizeDesktop        = isset($block_attributes['FeatureTitleFontSizeDesktop']) ? intval($block_attributes['FeatureTitleFontSizeDesktop']) : 18;
$FeatureTitleFontSizeTablet         = isset($block_attributes['FeatureTitleFontSizeTablet']) ? intval($block_attributes['FeatureTitleFontSizeTablet']) : 18;
$FeatureTitleFontSizeMobile         = isset($block_attributes['FeatureTitleFontSizeMobile']) ? intval($block_attributes['FeatureTitleFontSizeMobile']) : 18;
$FeatureTitleFontSizeUnits          = isset($block_attributes['FeatureTitleFontSizeUnits']) ? sanitize_text_field($block_attributes['FeatureTitleFontSizeUnits']) : 'px';
$FeatureTitleFontWeight             = isset($block_attributes['FeatureTitleFontWeight']) ? sanitize_text_field($block_attributes['FeatureTitleFontWeight']) : '600';
$FeatureTitleFontStyle              = isset($block_attributes['FeatureTitleFontStyle']) ? sanitize_text_field($block_attributes['FeatureTitleFontStyle']) : 'normal';
$FeatureTitleTextTransform          = isset($block_attributes['FeatureTitleTextTransform']) ? sanitize_text_field($block_attributes['FeatureTitleTextTransform']) : 'none';
$FeatureTitleTextDecoration         = isset($block_attributes['FeatureTitleTextDecoration']) ? sanitize_text_field($block_attributes['FeatureTitleTextDecoration']) : 'none';
$FeatureTitleLetterSpacingDesktop   = isset($block_attributes['FeatureTitleLetterSpacingDesktop']) ? intval($block_attributes['FeatureTitleLetterSpacingDesktop']) : 0;
$FeatureTitleLetterSpacingTablet    = isset($block_attributes['FeatureTitleLetterSpacingTablet']) ? intval($block_attributes['FeatureTitleLetterSpacingTablet']) : 0;
$FeatureTitleLetterSpacingMobile    = isset($block_attributes['FeatureTitleLetterSpacingMobile']) ? intval($block_attributes['FeatureTitleLetterSpacingMobile']) : 0;
$FeatureTitleLetterSpacingUnits     = isset($block_attributes['FeatureTitleLetterSpacingUnits']) ? sanitize_text_field($block_attributes['FeatureTitleLetterSpacingUnits']) : 'px';
$FeatureTitleLineHeightDesktop      = isset($block_attributes['FeatureTitleLineHeightDesktop']) ? sanitize_text_field($block_attributes['FeatureTitleLineHeightDesktop']) : 'inherit';
$FeatureTitleLineHeightTablet       = isset($block_attributes['FeatureTitleLineHeightTablet']) ? sanitize_text_field($block_attributes['FeatureTitleLineHeightTablet']) : 'inherit';
$FeatureTitleLineHeightMobile       = isset($block_attributes['FeatureTitleLineHeightMobile']) ? sanitize_text_field($block_attributes['FeatureTitleLineHeightMobile']) : 'inherit';
$FeatureTitleLineHeightUnits        = isset($block_attributes['FeatureTitleLineHeightUnits']) ? sanitize_text_field($block_attributes['FeatureTitleLineHeightUnits']) : 'px';

$FeatureTitleColor                  = isset($block_attributes['FeatureTitleColor']) ? sanitize_text_field($block_attributes['FeatureTitleColor']) : '#000';
$FeatureTitleHoverColor             = isset($block_attributes['FeatureTitleHoverColor']) ? sanitize_text_field($block_attributes['FeatureTitleHoverColor']) : '#000';

$FeatureDescFontFamily              = isset($block_attributes['FeatureDescFontFamily']) ? sanitize_text_field($block_attributes['FeatureDescFontFamily']) : 'inherit';
$FeatureDescFontSizeDesktop         = isset($block_attributes['FeatureDescFontSizeDesktop']) ? intval($block_attributes['FeatureDescFontSizeDesktop']) : 14;
$FeatureDescFontSizeTablet          = isset($block_attributes['FeatureDescFontSizeTablet']) ? intval($block_attributes['FeatureDescFontSizeTablet']) : 14;
$FeatureDescFontSizeMobile          = isset($block_attributes['FeatureDescFontSizeMobile']) ? intval($block_attributes['FeatureDescFontSizeMobile']) : 14;
$FeatureDescFontSizeUnits           = isset($block_attributes['FeatureDescFontSizeUnits']) ? sanitize_text_field($block_attributes['FeatureDescFontSizeUnits']) : 'px';
$FeatureDescFontWeight              = isset($block_attributes['FeatureDescFontWeight']) ? sanitize_text_field($block_attributes['FeatureDescFontWeight']) : '400';
$FeatureDescFontStyle               = isset($block_attributes['FeatureDescFontStyle']) ? sanitize_text_field($block_attributes['FeatureDescFontStyle']) : 'normal';
$FeatureDescTextTransform           = isset($block_attributes['FeatureDescTextTransform']) ? sanitize_text_field($block_attributes['FeatureDescTextTransform']) : 'none';
$FeatureDescTextDecoration          = isset($block_attributes['FeatureDescTextDecoration']) ? sanitize_text_field($block_attributes['FeatureDescTextDecoration']) : 'none';
$FeatureDescLetterSpacingDesktop    = isset($block_attributes['FeatureDescLetterSpacingDesktop']) ? intval($block_attributes['FeatureDescLetterSpacingDesktop']) : 0;
$FeatureDescLetterSpacingTablet     = isset($block_attributes['FeatureDescLetterSpacingTablet']) ? intval($block_attributes['FeatureDescLetterSpacingTablet']) : 0;
$FeatureDescLetterSpacingMobile     = isset($block_attributes['FeatureDescLetterSpacingMobile']) ? intval($block_attributes['FeatureDescLetterSpacingMobile']) : 0;
$FeatureDescLetterSpacingUnits      = isset($block_attributes['FeatureDescLetterSpacingUnits']) ? sanitize_text_field($block_attributes['FeatureDescLetterSpacingUnits']) : 'px';
$FeatureDescLineHeightDesktop       = isset($block_attributes['FeatureDescLineHeightDesktop']) ? sanitize_text_field($block_attributes['FeatureDescLineHeightDesktop']) : 'inherit';
$FeatureDescLineHeightTablet        = isset($block_attributes['FeatureDescLineHeightTablet']) ? sanitize_text_field($block_attributes['FeatureDescLineHeightTablet']) : 'inherit';
$FeatureDescLineHeightMobile        = isset($block_attributes['FeatureDescLineHeightMobile']) ? sanitize_text_field($block_attributes['FeatureDescLineHeightMobile']) : 'inherit';
$FeatureDescLineHeightUnits         = isset($block_attributes['FeatureDescLineHeightUnits']) ? sanitize_text_field($block_attributes['FeatureDescLineHeightUnits']) : 'px';

$FeatureDescColor                   = isset($block_attributes['FeatureDescColor']) ? sanitize_text_field($block_attributes['FeatureDescColor']) : '#000';
$FeatureDescHoverColor              = isset($block_attributes['FeatureDescHoverColor']) ? sanitize_text_field($block_attributes['FeatureDescHoverColor']) : '#000';

// Generate CSS content
$css_content = "

    .$blockId.fb-feature-main-wrapper {
        z-index: " . (isset($FeatureZIndex) ? intval($FeatureZIndex) : 'auto') . ";
        position: relative;
    }

    .$blockId.fb-feature-main-wrapper {
        background-color: {$FeatureBgColor};
        padding: {$globalFeatureDesktopPadding};
        margin: {$globalFeatureDesktopMargin};
        border: {$FeatureBorder};
        border-width: {$globalFeatureDesktopBorderWidth};
        border-radius: {$globalFeatureDesktopBorderRadiusWidth} !important;
        border-color: {$FeatureBorderColor};
        box-shadow: {$FeatureboxShadowCssValue};
        transition: all .3s ease-in-out;
    }
    .$blockId.fb-feature-main-wrapper:hover {
        background-color: {$FeatureBgHoverColor};
        border-color: {$FeatureBorderHoverColor};
    }

    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
        padding-bottom: calc({$FeatureListGapDesktop}{$FeatureListGapUnits} / 2);
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
        padding-top: calc({$FeatureListGapDesktop}{$FeatureListGapUnits} / 2);
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon svg {
        fill: {$FeatureIconColor};
        height: {$FeatureIconSizeDesktop}{$FeatureIconSizeUnits};
        width: {$FeatureIconSizeDesktop}{$FeatureIconSizeUnits};
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon:hover svg {
        fill: {$FeatureIconHoverColor};
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon-box {
        margin-right: {$FeatureIconSpacingDesktop}{$FeatureIconSpacingUnits}!important;
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon-inner {
        background-color: {$FeatureIconBgColor};
        border-color: {$FeatureIconBgColor};
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon-inner:hover {
        background-color: {$FeatureIconBgHoverColor};
        border-color: {$FeatureIconBgHoverColor};
    }

    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon {
        width: {$FeatureIconBgSizeDesktop}{$FeatureIconBgSizeUnits};
        height: {$FeatureIconBgSizeDesktop}{$FeatureIconBgSizeUnits};
    }

    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content {$FeatureTag} {
        font-family: {$FeatureTitleFontFamily};
        font-size: {$FeatureTitleFontSizeDesktop}{$FeatureTitleFontSizeUnits};
        font-weight: {$FeatureTitleFontWeight};
        font-style: {$FeatureTitleFontStyle};
        text-transform: {$FeatureTitleTextTransform};
        text-decoration: {$FeatureTitleTextDecoration};
        letter-spacing: {$FeatureTitleLetterSpacingDesktop}{$FeatureTitleLetterSpacingUnits};
        line-height: {$FeatureTitleLineHeightDesktop}{$FeatureTitleLineHeightUnits};
        color: {$FeatureTitleColor};
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-title:hover {
        color: {$FeatureTitleHoverColor};
    }

    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
        font-family: {$FeatureDescFontFamily};
        font-size: {$FeatureDescFontSizeDesktop}{$FeatureDescFontSizeUnits};
        font-weight: {$FeatureDescFontWeight};
        font-style: {$FeatureDescFontStyle};
        text-transform: {$FeatureDescTextTransform};
        text-decoration: {$FeatureDescTextDecoration};
        letter-spacing: {$FeatureDescLetterSpacingDesktop}{$FeatureDescLetterSpacingUnits};
        line-height: {$FeatureDescLineHeightDesktop}{$FeatureDescLineHeightUnits};
        color: {$FeatureDescColor};
    }
    .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text:hover {
        color: {$FeatureDescHoverColor};
    }


    @media only screen and (max-width: 1024px) {
        .$blockId.fb-feature-main-wrapper {
            padding: $globalFeatureTabletPadding;
            margin: $globalFeatureTabletMargin;
            border-width: $globalFeatureTabletBorderWidth;
            border-radius: $globalFeatureTabletBorderRadiusWidth !important;
        }

        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
            padding-bottom: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
            padding-top: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
        }

        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon svg {
            height: {$FeatureIconSizeTablet}{$FeatureIconSizeUnits};
            width: {$FeatureIconSizeTablet}{$FeatureIconSizeUnits};
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon {
            width: {$FeatureIconBgSizeTablet}{$FeatureIconBgSizeUnits};
            height: {$FeatureIconBgSizeTablet}{$FeatureIconBgSizeUnits};
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon-box {
            margin-right: {$FeatureIconSpacingTablet}{$FeatureIconSpacingUnits}!important;
        }

        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content {$FeatureTag} {
            font-size: {$FeatureTitleFontSizeTablet}{$FeatureTitleFontSizeUnits};
            letter-spacing: {$FeatureTitleLetterSpacingTablet}{$FeatureTitleLetterSpacingUnits};
            line-height: {$FeatureTitleLineHeightTablet}{$FeatureTitleLineHeightUnits};
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
            font-size: {$FeatureDescFontSizeTablet}{$FeatureDescFontSizeUnits};
            letter-spacing: {$FeatureDescLetterSpacingTablet}{$FeatureDescLetterSpacingUnits};
            line-height: {$FeatureDescLineHeightTablet}{$FeatureDescLineHeightUnits};
        }
    }

    @media only screen and (max-width: 767px) {
        .$blockId.fb-feature-main-wrapper {
            padding: $globalFeatureMobilePadding;
            margin: $globalFeatureMobileMargin;
            border-width: $globalFeatureMobileBorderWidth;
            border-radius: $globalFeatureMobileBorderRadiusWidth !important;
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-item:not(:last-child) {
            padding-bottom: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-item:not(:first-child) {
            padding-top: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon svg {
            height: {$FeatureIconSizeMobile}{$FeatureIconSizeUnits};
            width: {$FeatureIconSizeMobile}{$FeatureIconSizeUnits};
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon {
            width: {$FeatureIconBgSizeMobile}{$FeatureIconBgSizeUnits};
            height: {$FeatureIconBgSizeMobile}{$FeatureIconBgSizeUnits};
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-icon-box {
            margin-right: {$FeatureIconSpacingMobile}{$FeatureIconSpacingUnits}!important;
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content {$FeatureTag} {
            font-size: {$FeatureTitleFontSizeMobile}{$FeatureTitleFontSizeUnits};
            letter-spacing: {$FeatureTitleLetterSpacingMobile}{$FeatureTitleLetterSpacingUnits};
            line-height: {$FeatureTitleLineHeightMobile}{$FeatureTitleLineHeightUnits};
        }
        .{$blockId}.fb-feature-main-wrapper .fb-feature-list-content .fb-feature-list-text {
            font-size: {$FeatureDescFontSizeMobile}{$FeatureDescFontSizeUnits};
            letter-spacing: {$FeatureDescLetterSpacingMobile}{$FeatureDescLetterSpacingUnits};
            line-height: {$FeatureDescLineHeightMobile}{$FeatureDescLineHeightUnits};
        }
    }

";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockId);