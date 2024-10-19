<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes               = $block['attrs'];
$blockId                        = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';
$deviceType                     = isset($block_attributes['deviceType']) ? sanitize_text_field($block_attributes['deviceType']) : 'Desktop';
$TestimonialZIndex              = isset($block_attributes['TestimonialZIndex']) ? $block_attributes['TestimonialZIndex'] : '';

$TestimonialImageWidthDesktop   = isset($block_attributes['TestimonialImageWidthDesktop']) ? $block_attributes['TestimonialImageWidthDesktop'] : 100;
$TestimonialImageWidthTablet    = isset($block_attributes['TestimonialImageWidthTablet']) ? $block_attributes['TestimonialImageWidthTablet'] : 100;
$TestimonialImageWidthMobile    = isset($block_attributes['TestimonialImageWidthMobile']) ? $block_attributes['TestimonialImageWidthMobile'] : 100;
$TestimonialImageWidthUnits     = isset($block_attributes['TestimonialImageWidthUnits']) ? $block_attributes['TestimonialImageWidthUnits'] : 'px';
$TestimonialImageUrl            = isset($block_attributes['TestimonialImageUrl']) ? $block_attributes['TestimonialImageUrl'] : '';
$TestimonialImageAlt            = isset($block_attributes['TestimonialImageAlt']) ? $block_attributes['TestimonialImageAlt'] : '';
$TestimonialAlignment           = isset($block_attributes['TestimonialAlignment']) ? $block_attributes['TestimonialAlignment'] : 'center';
$TestimonialDesc                = isset($block_attributes['TestimonialDesc']) ? $block_attributes['TestimonialDesc'] : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
$TestimonialAuthor              = isset($block_attributes['TestimonialAuthor']) ? $block_attributes['TestimonialAuthor'] : 'John Doe';
$TestimonialDesignation         = isset($block_attributes['TestimonialDesignation']) ? $block_attributes['TestimonialDesignation'] : 'CEO, Company Name';
$TestimonialRatingNumber        = isset($block_attributes['TestimonialRatingNumber']) ? $block_attributes['TestimonialRatingNumber'] : 5;
$TestimonialRatingicon          = isset($block_attributes['TestimonialRatingicon']) ? $block_attributes['TestimonialRatingicon'] : 'star';
$TestimonialRatinIconAlign      = isset($block_attributes['TestimonialRatinIconAlign']) ? $block_attributes['TestimonialRatinIconAlign'] : 'icon';
$TestimonialQuoteIcon           = isset($block_attributes['TestimonialQuoteIcon']) ? $block_attributes['TestimonialQuoteIcon'] : 'quote-left';
$TestimonialQuoteIconAlign      = isset($block_attributes['TestimonialQuoteIconAlign']) ? $block_attributes['TestimonialQuoteIconAlign'] : 'icon';

$TestimonialImageRadiusUnits        = isset($block_attributes['TestimonialImageRadiusUnits']) ? $block_attributes['TestimonialImageRadiusUnits'] : '%';
$TestimonialImageDesktopRadiusWidth = isset($block_attributes['TestimonialImageDesktopRadiusWidth']) ? $block_attributes['TestimonialImageDesktopRadiusWidth'] : ['top' => 50, 'bottom' => 50, 'left' => 50, 'right' => 50];
$TestimonialImagelTabRadiusWidth    = isset($block_attributes['TestimonialImagelTabRadiusWidth']) ? $block_attributes['TestimonialImagelTabRadiusWidth'] : ['top' => 50, 'bottom' => 50, 'left' => 50, 'right' => 50];
$TestimonialImageMobileRadiusWidth  = isset($block_attributes['TestimonialImageMobileRadiusWidth']) ? $block_attributes['TestimonialImageMobileRadiusWidth'] : ['top' => 50, 'bottom' => 50, 'left' => 50, 'right' => 50];
/** End Border Radius Width */
$ImageDesktopBorderRadiusWidth      = $TestimonialImageDesktopRadiusWidth['top'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImageDesktopRadiusWidth['right'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImageDesktopRadiusWidth['bottom'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImageDesktopRadiusWidth['left'] . $TestimonialImageRadiusUnits;
$ImageTabBorderRadiusWidth          = $TestimonialImagelTabRadiusWidth['top'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImagelTabRadiusWidth['right'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImagelTabRadiusWidth['bottom'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImagelTabRadiusWidth['left'] . $TestimonialImageRadiusUnits;
$ImageMobileBorderRadiusWidth       = $TestimonialImageMobileRadiusWidth['top'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImageMobileRadiusWidth['right'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImageMobileRadiusWidth['bottom'] . $TestimonialImageRadiusUnits . ' ' . $TestimonialImageMobileRadiusWidth['left'] . $TestimonialImageRadiusUnits;
/** End Border Radius Width */

/** Start Quote Icon */
$TestimonialQuoteIconSizeDesktop    = isset($block_attributes['TestimonialQuoteIconSizeDesktop']) ? $block_attributes['TestimonialQuoteIconSizeDesktop'] : 100;
$TestimonialQuoteIconSizeTablet     = isset($block_attributes['TestimonialQuoteIconSizeTablet']) ? $block_attributes['TestimonialQuoteIconSizeTablet'] : 100;
$TestimonialQuoteIconSizeMobile     = isset($block_attributes['TestimonialQuoteIconSizeMobile']) ? $block_attributes['TestimonialQuoteIconSizeMobile'] : 100;
$TestimonialQuoteIconSizeUnits      = isset($block_attributes['TestimonialQuoteIconSizeUnits']) ? $block_attributes['TestimonialQuoteIconSizeUnits'] : 'px';
$TestimonialQuoteIconColor          = isset($block_attributes['TestimonialQuoteIconColor']) ? $block_attributes['TestimonialQuoteIconColor'] : '#399CFF';
$TestimonialQuoteIconHoverColor     = isset($block_attributes['TestimonialQuoteIconHoverColor']) ? $block_attributes['TestimonialQuoteIconHoverColor'] : '#399CFF';
/** End Quote Icon */

/** Start Description */
$TestimonialDescFontFamily            = isset($block_attributes['TestimonialDescFontFamily']) ? $block_attributes['TestimonialDescFontFamily'] : 'inherit';
$TestimonialDescFontSizeDesktop       = isset($block_attributes['TestimonialDescFontSizeDesktop']) ? $block_attributes['TestimonialDescFontSizeDesktop'] : 18;
$TestimonialDescFontSizeTablet        = isset($block_attributes['TestimonialDescFontSizeTablet']) ? $block_attributes['TestimonialDescFontSizeTablet'] : 18;
$TestimonialDescFontSizeMobile        = isset($block_attributes['TestimonialDescFontSizeMobile']) ? $block_attributes['TestimonialDescFontSizeMobile'] : 18;
$TestimonialDescFontSizeUnits         = isset($block_attributes['TestimonialDescFontSizeUnits']) ? $block_attributes['TestimonialDescFontSizeUnits'] : 'px';
$TestimonialDescFontWeight            = isset($block_attributes['TestimonialDescFontWeight']) ? $block_attributes['TestimonialDescFontWeight'] : '400';
$TestimonialDescFontStyle             = isset($block_attributes['TestimonialDescFontStyle']) ? $block_attributes['TestimonialDescFontStyle'] : 'normal';
$TestimonialDescTextTransform         = isset($block_attributes['TestimonialDescTextTransform']) ? $block_attributes['TestimonialDescTextTransform'] : 'none';
$TestimonialDescTextDecoration        = isset($block_attributes['TestimonialDescTextDecoration']) ? $block_attributes['TestimonialDescTextDecoration'] : 'none';
$TestimonialDescLetterSpacingDesktop  = isset($block_attributes['TestimonialDescLetterSpacingDesktop']) ? $block_attributes['TestimonialDescLetterSpacingDesktop'] : '';
$TestimonialDescLetterSpacingTablet   = isset($block_attributes['TestimonialDescLetterSpacingTablet']) ? $block_attributes['TestimonialDescLetterSpacingTablet'] : '';
$TestimonialDescLetterSpacingMobile   = isset($block_attributes['TestimonialDescLetterSpacingMobile']) ? $block_attributes['TestimonialDescLetterSpacingMobile'] : '';
$TestimonialDescLetterSpacingUnits    = isset($block_attributes['TestimonialDescLetterSpacingUnits']) ? $block_attributes['TestimonialDescLetterSpacingUnits'] : 'px';
$TestimonialDescLineHeightDesktop     = isset($block_attributes['TestimonialDescLineHeightDesktop']) ? $block_attributes['TestimonialDescLineHeightDesktop'] : 'inherit';
$TestimonialDescLineHeightTablet      = isset($block_attributes['TestimonialDescLineHeightTablet']) ? $block_attributes['TestimonialDescLineHeightTablet'] : 'inherit';
$TestimonialDescLineHeightMobile      = isset($block_attributes['TestimonialDescLineHeightMobile']) ? $block_attributes['TestimonialDescLineHeightMobile'] : 'inherit';
$TestimonialDescLineHeightUnits       = isset($block_attributes['TestimonialDescLineHeightUnits']) ? $block_attributes['TestimonialDescLineHeightUnits'] : 'px';
$TestimonialDescColor                 = isset($block_attributes['TestimonialDescColor']) ? $block_attributes['TestimonialDescColor'] : '#000';
$TestimonialDescHoverColor            = isset($block_attributes['TestimonialDescHoverColor']) ? $block_attributes['TestimonialDescHoverColor'] : '#000';
/** End Description */

/** Start Author */
$TestimonialAuthorFontFamily            = isset($block_attributes['TestimonialAuthorFontFamily']) ? $block_attributes['TestimonialAuthorFontFamily'] : 'inherit';
$TestimonialAuthorFontSizeDesktop       = isset($block_attributes['TestimonialAuthorFontSizeDesktop']) ? $block_attributes['TestimonialAuthorFontSizeDesktop'] : 20;
$TestimonialAuthorFontSizeTablet        = isset($block_attributes['TestimonialAuthorFontSizeTablet']) ? $block_attributes['TestimonialAuthorFontSizeTablet'] : 20;
$TestimonialAuthorFontSizeMobile        = isset($block_attributes['TestimonialAuthorFontSizeMobile']) ? $block_attributes['TestimonialAuthorFontSizeMobile'] : 20;
$TestimonialAuthorFontSizeUnits         = isset($block_attributes['TestimonialAuthorFontSizeUnits']) ? $block_attributes['TestimonialAuthorFontSizeUnits'] : 'px';
$TestimonialAuthorFontWeight            = isset($block_attributes['TestimonialAuthorFontWeight']) ? $block_attributes['TestimonialAuthorFontWeight'] : '700';
$TestimonialAuthorFontStyle             = isset($block_attributes['TestimonialAuthorFontStyle']) ? $block_attributes['TestimonialAuthorFontStyle'] : 'normal';
$TestimonialAuthorTextTransform         = isset($block_attributes['TestimonialAuthorTextTransform']) ? $block_attributes['TestimonialAuthorTextTransform'] : 'none';
$TestimonialAuthorTextDecoration        = isset($block_attributes['TestimonialAuthorTextDecoration']) ? $block_attributes['TestimonialAuthorTextDecoration'] : 'none';
$TestimonialAuthorLetterSpacingDesktop  = isset($block_attributes['TestimonialAuthorLetterSpacingDesktop']) ? $block_attributes['TestimonialAuthorLetterSpacingDesktop'] : '';
$TestimonialAuthorLetterSpacingTablet   = isset($block_attributes['TestimonialAuthorLetterSpacingTablet']) ? $block_attributes['TestimonialAuthorLetterSpacingTablet'] : '';
$TestimonialAuthorLetterSpacingMobile   = isset($block_attributes['TestimonialAuthorLetterSpacingMobile']) ? $block_attributes['TestimonialAuthorLetterSpacingMobile'] : '';
$TestimonialAuthorLetterSpacingUnits    = isset($block_attributes['TestimonialAuthorLetterSpacingUnits']) ? $block_attributes['TestimonialAuthorLetterSpacingUnits'] : 'px';
$TestimonialAuthorLineHeightDesktop     = isset($block_attributes['TestimonialAuthorLineHeightDesktop']) ? $block_attributes['TestimonialAuthorLineHeightDesktop'] : 'inherit';
$TestimonialAuthorLineHeightTablet      = isset($block_attributes['TestimonialAuthorLineHeightTablet']) ? $block_attributes['TestimonialAuthorLineHeightTablet'] : 'inherit';
$TestimonialAuthorLineHeightMobile      = isset($block_attributes['TestimonialAuthorLineHeightMobile']) ? $block_attributes['TestimonialAuthorLineHeightMobile'] : 'inherit';
$TestimonialAuthorLineHeightUnits       = isset($block_attributes['TestimonialAuthorLineHeightUnits']) ? $block_attributes['TestimonialAuthorLineHeightUnits'] : 'px';
$TestimonialAuthorColor                 = isset($block_attributes['TestimonialAuthorColor']) ? $block_attributes['TestimonialAuthorColor'] : '#000';
$TestimonialAuthorHoverColor            = isset($block_attributes['TestimonialAuthorHoverColor']) ? $block_attributes['TestimonialAuthorHoverColor'] : '#000';
/** End Author */

/** Start Designation */
$TestimonialDesignationFontFamily               = isset($block_attributes['TestimonialDesignationFontFamily']) ? $block_attributes['TestimonialDesignationFontFamily'] : 'inherit';
$TestimonialDesignationFontSizeDesktop          = isset($block_attributes['TestimonialDesignationFontSizeDesktop']) ? $block_attributes['TestimonialDesignationFontSizeDesktop'] : 16;
$TestimonialDesignationFontSizeTablet           = isset($block_attributes['TestimonialDesignationFontSizeTablet']) ? $block_attributes['TestimonialDesignationFontSizeTablet'] : 16;
$TestimonialDesignationFontSizeMobile           = isset($block_attributes['TestimonialDesignationFontSizeMobile']) ? $block_attributes['TestimonialDesignationFontSizeMobile'] : 16;
$TestimonialDesignationFontSizeUnits            = isset($block_attributes['TestimonialDesignationFontSizeUnits']) ? $block_attributes['TestimonialDesignationFontSizeUnits'] : 'px';
$TestimonialDesignationFontWeight               = isset($block_attributes['TestimonialDesignationFontWeight']) ? $block_attributes['TestimonialDesignationFontWeight'] : '400';
$TestimonialDesignationFontStyle                = isset($block_attributes['TestimonialDesignationFontStyle']) ? $block_attributes['TestimonialDesignationFontStyle'] : 'normal';
$TestimonialDesignationTextTransform            = isset($block_attributes['TestimonialDesignationTextTransform']) ? $block_attributes['TestimonialDesignationTextTransform'] : 'none';
$TestimonialDesignationTextDecoration           = isset($block_attributes['TestimonialDesignationTextDecoration']) ? $block_attributes['TestimonialDesignationTextDecoration'] : 'none';
$TestimonialDesignationLetterSpacingDesktop     = isset($block_attributes['TestimonialDesignationLetterSpacingDesktop']) ? $block_attributes['TestimonialDesignationLetterSpacingDesktop'] : '';
$TestimonialDesignationLetterSpacingTablet      = isset($block_attributes['TestimonialDesignationLetterSpacingTablet']) ? $block_attributes['TestimonialDesignationLetterSpacingTablet'] : '';
$TestimonialDesignationLetterSpacingMobile      = isset($block_attributes['TestimonialDesignationLetterSpacingMobile']) ? $block_attributes['TestimonialDesignationLetterSpacingMobile'] : '';
$TestimonialDesignationLetterSpacingUnits       = isset($block_attributes['TestimonialDesignationLetterSpacingUnits']) ? $block_attributes['TestimonialDesignationLetterSpacingUnits'] : 'px';
$TestimonialDesignationLineHeightDesktop        = isset($block_attributes['TestimonialDesignationLineHeightDesktop']) ? $block_attributes['TestimonialDesignationLineHeightDesktop'] : 'inherit';
$TestimonialDesignationLineHeightTablet         = isset($block_attributes['TestimonialDesignationLineHeightTablet']) ? $block_attributes['TestimonialDesignationLineHeightTablet'] : 'inherit';
$TestimonialDesignationLineHeightMobile         = isset($block_attributes['TestimonialDesignationLineHeightMobile']) ? $block_attributes['TestimonialDesignationLineHeightMobile'] : 'inherit';
$TestimonialDesignationLineHeightUnits          = isset($block_attributes['TestimonialDesignationLineHeightUnits']) ? $block_attributes['TestimonialDesignationLineHeightUnits'] : 'px';
$TestimonialDesignationColor                    = isset($block_attributes['TestimonialDesignationColor']) ? $block_attributes['TestimonialDesignationColor'] : '#777';
$TestimonialDesignationHoverColor               = isset($block_attributes['TestimonialDesignationHoverColor']) ? $block_attributes['TestimonialDesignationHoverColor'] : '#777';
/** End Designation */

/** Start Rating Icon */
$TestimonialRatingIconSizeDesktop   = isset($block_attributes['TestimonialRatingIconSizeDesktop']) ? $block_attributes['TestimonialRatingIconSizeDesktop'] : 20;
$TestimonialRatingIconSizeTablet    = isset($block_attributes['TestimonialRatingIconSizeTablet']) ? $block_attributes['TestimonialRatingIconSizeTablet'] : 20;
$TestimonialRatingIconSizeMobile    = isset($block_attributes['TestimonialRatingIconSizeMobile']) ? $block_attributes['TestimonialRatingIconSizeMobile'] : 20;
$TestimonialRatingIconSizeUnits     = isset($block_attributes['TestimonialRatingIconSizeUnits']) ? $block_attributes['TestimonialRatingIconSizeUnits'] : 'px';
$TestimonialRatingIconColor         = isset($block_attributes['TestimonialRatingIconColor']) ? $block_attributes['TestimonialRatingIconColor'] : '#FFB400';
$TestimonialRatingIconHoverColor    = isset($block_attributes['TestimonialRatingIconHoverColor']) ? $block_attributes['TestimonialRatingIconHoverColor'] : '#FFB400';
/** End Rating Icon */ 

/** Start Global Padding */
$TestimonialPaddingUnits            = isset($block_attributes['TestimonialPaddingUnits']) ? $block_attributes['TestimonialPaddingUnits'] : 'px';
$TestimonialDesktopPadding          = isset($block_attributes['TestimonialDesktopPadding']) ? $block_attributes['TestimonialDesktopPadding'] : ['top' => 30, 'bottom' => 30, 'left' => 30, 'right' => 30];
$TestimonialTabPadding              = isset($block_attributes['TestimonialTabPadding']) ? $block_attributes['TestimonialTabPadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
$TestimonialMobilePadding           = isset($block_attributes['TestimonialMobilePadding']) ? $block_attributes['TestimonialMobilePadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
/** End Padding */
$DesktopPadding                     = $TestimonialDesktopPadding['top'] . $TestimonialPaddingUnits . ' ' . $TestimonialDesktopPadding['right'] . $TestimonialPaddingUnits . ' ' . $TestimonialDesktopPadding['bottom'] . $TestimonialPaddingUnits . ' ' . $TestimonialDesktopPadding['left'] . $TestimonialPaddingUnits;
$TabPadding                         = $TestimonialTabPadding['top'] . $TestimonialPaddingUnits . ' ' . $TestimonialTabPadding['right'] . $TestimonialPaddingUnits . ' ' . $TestimonialTabPadding['bottom'] . $TestimonialPaddingUnits . ' ' . $TestimonialTabPadding['left'] . $TestimonialPaddingUnits;
$MobilePadding                      = $TestimonialMobilePadding['top'] . $TestimonialPaddingUnits . ' ' . $TestimonialMobilePadding['right'] . $TestimonialPaddingUnits . ' ' . $TestimonialMobilePadding['bottom'] . $TestimonialPaddingUnits . ' ' . $TestimonialMobilePadding['left'] . $TestimonialPaddingUnits;
/** End Padding */

/** Start Global Margin */
$TestimonialMarginUnits    = isset($block_attributes['TestimonialMarginUnits']) ? $block_attributes['TestimonialMarginUnits'] : 'px';
$TestimonialDesktopMargin  = isset($block_attributes['TestimonialDesktopMargin']) ? $block_attributes['TestimonialDesktopMargin'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$TestimonialTabMargin      = isset($block_attributes['TestimonialTabMargin']) ? $block_attributes['TestimonialTabMargin'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$TestimonialMobileMargin   = isset($block_attributes['TestimonialMobileMargin']) ? $block_attributes['TestimonialMobileMargin'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
/** End Global Margin */
$DesktopMargin             = $TestimonialDesktopMargin['top'] . $TestimonialMarginUnits . ' ' . $TestimonialDesktopMargin['right'] . $TestimonialMarginUnits . ' ' . $TestimonialDesktopMargin['bottom'] . $TestimonialMarginUnits . ' ' . $TestimonialDesktopMargin['left'] . $TestimonialMarginUnits;
$TabMargin                 = $TestimonialTabMargin['top'] . $TestimonialMarginUnits . ' ' . $TestimonialTabMargin['right'] . $TestimonialMarginUnits . ' ' . $TestimonialTabMargin['bottom'] . $TestimonialMarginUnits . ' ' . $TestimonialTabMargin['left'] . $TestimonialMarginUnits;
$MobileMargin              = $TestimonialMobileMargin['top'] . $TestimonialMarginUnits . ' ' . $TestimonialMobileMargin['right'] . $TestimonialMarginUnits . ' ' . $TestimonialMobileMargin['bottom'] . $TestimonialMarginUnits . ' ' . $TestimonialMobileMargin['left'] . $TestimonialMarginUnits;
/** End Global Margin */ 

/** Start Background Color */
$TestimonialBgColor             = isset($block_attributes['TestimonialBgColor']) ? $block_attributes['TestimonialBgColor'] : '';
$TestimonialBgHoverColor        = isset($block_attributes['TestimonialBgHoverColor']) ? $block_attributes['TestimonialBgHoverColor'] : '';
/** End Background Color */

/** Start Border */
$TestimonialBorder              = isset($block_attributes['TestimonialBorder']) ? $block_attributes['TestimonialBorder'] : 'none';
$TestimonialBorderColor         = isset($block_attributes['TestimonialBorderColor']) ? $block_attributes['TestimonialBorderColor'] : '';
$TestimonialBorderHoverColor    = isset($block_attributes['TestimonialBorderHoverColor']) ? $block_attributes['TestimonialBorderHoverColor'] : '';
/** End Border */
/** Start Border Width */
$TestimonialBorderUnits         = isset($block_attributes['TestimonialBorderUnits']) ? $block_attributes['TestimonialBorderUnits'] : 'px';
$TestimonialDesktopBorderWidth  = isset($block_attributes['TestimonialDesktopBorderWidth']) ? $block_attributes['TestimonialDesktopBorderWidth'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$TestimonialTabBorderWidth      = isset($block_attributes['TestimonialTabBorderWidth']) ? $block_attributes['TestimonialTabBorderWidth'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$TestimonialMobileBorderWidth   = isset($block_attributes['TestimonialMobileBorderWidth']) ? $block_attributes['TestimonialMobileBorderWidth'] : ['top' => '', 'bottom' => '', 'left' => '', 'right' => ''];
$DesktopBorderWidth             = $TestimonialDesktopBorderWidth['top'] . $TestimonialBorderUnits . ' ' . $TestimonialDesktopBorderWidth['right'] . $TestimonialBorderUnits . ' ' . $TestimonialDesktopBorderWidth['bottom'] . $TestimonialBorderUnits . ' ' . $TestimonialDesktopBorderWidth['left'] . $TestimonialBorderUnits;
$TabBorderWidth                 = $TestimonialTabBorderWidth['top'] . $TestimonialBorderUnits . ' ' . $TestimonialTabBorderWidth['right'] . $TestimonialBorderUnits . ' ' . $TestimonialTabBorderWidth['bottom'] . $TestimonialBorderUnits . ' ' . $TestimonialTabBorderWidth['left'] . $TestimonialBorderUnits;
$MobileBorderWidth              = $TestimonialMobileBorderWidth['top'] . $TestimonialBorderUnits . ' ' . $TestimonialMobileBorderWidth['right'] . $TestimonialBorderUnits . ' ' . $TestimonialMobileBorderWidth['bottom'] . $TestimonialBorderUnits . ' ' . $TestimonialMobileBorderWidth['left'] . $TestimonialBorderUnits;
/** End Border Width */

/** Start Border Radius Width */
$TestimonialBorderRadiusUnits        = isset($block_attributes['TestimonialBorderRadiusUnits']) ? $block_attributes['TestimonialBorderRadiusUnits'] : 'px';
$TestimonialDesktopBorderRadiusWidth = isset($block_attributes['TestimonialDesktopBorderRadiusWidth']) ? $block_attributes['TestimonialDesktopBorderRadiusWidth'] : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];
$TestimonialTabBorderRadiusWidth     = isset($block_attributes['TestimonialTabBorderRadiusWidth']) ? $block_attributes['TestimonialTabBorderRadiusWidth'] : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];
$TestimonialMobileBorderRadiusWidth  = isset($block_attributes['TestimonialMobileBorderRadiusWidth']) ? $block_attributes['TestimonialMobileBorderRadiusWidth'] : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];

$DesktopBorderRadiusWidth            = $TestimonialDesktopBorderRadiusWidth['top'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialDesktopBorderRadiusWidth['right'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialDesktopBorderRadiusWidth['bottom'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialDesktopBorderRadiusWidth['left'] . $TestimonialBorderRadiusUnits;
$TabBorderRadiusWidth                = $TestimonialTabBorderRadiusWidth['top'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialTabBorderRadiusWidth['right'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialTabBorderRadiusWidth['bottom'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialTabBorderRadiusWidth['left'] . $TestimonialBorderRadiusUnits;
$MobileBorderRadiusWidth             = $TestimonialMobileBorderRadiusWidth['top'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialMobileBorderRadiusWidth['right'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialMobileBorderRadiusWidth['bottom'] . $TestimonialBorderRadiusUnits . ' ' . $TestimonialMobileBorderRadiusWidth['left'] . $TestimonialBorderRadiusUnits;
/** End Border Radius Width */


// Generate CSS content
$css_content = "

    .${blockId}.fb-testimonial-main-wrapper {
        " . ($TestimonialZIndex ? "z-index: $TestimonialZIndex;" : "") . "
    }
    .${blockId}.fb-testimonial-main-wrapper .fb-testimonial-section {
        " . ($TestimonialBgColor ? "background-color: $TestimonialBgColor;" : "") . "
        " . ($DesktopPadding ? "padding: $DesktopPadding;" : "") . "
        " . ($DesktopMargin ? "margin: $DesktopMargin;" : "") . "
        " . ($TestimonialBorder ? "border-style: $TestimonialBorder;" : "") . "
        " . ($DesktopBorderWidth ? "border-width: $DesktopBorderWidth;" : "") . "
        " . ($DesktopBorderRadiusWidth ? "border-radius: $DesktopBorderRadiusWidth !important;" : "") . "
        " . ($TestimonialBorderColor ? "border-color: $TestimonialBorderColor;" : "") . "
        transition: all .3s ease-in-out;
    }
    .${blockId}.fb-testimonial-main-wrapper .fb-testimonial-section:hover {
        " . ($TestimonialBgHoverColor ? "background-color: $TestimonialBgHoverColor;" : "") . "
        " . ($TestimonialBorderHoverColor ? "border-color: $TestimonialBorderHoverColor;" : "") . "
    }
    .${blockId} .fb-testimonial-image img {
        " . ($TestimonialImageWidthDesktop ? "width: ${TestimonialImageWidthDesktop}${TestimonialImageWidthUnits};" : "") . "
        " . ($TestimonialImageWidthDesktop ? "height: ${TestimonialImageWidthDesktop}${TestimonialImageWidthUnits};" : "") . "
        " . ($ImageDesktopBorderRadiusWidth ? "border-radius: ${ImageDesktopBorderRadiusWidth};" : "") . "
    }
    .${blockId} .fb-testimonial-quote-icon svg {
        " . ($TestimonialQuoteIconSizeDesktop ? "width: ${TestimonialQuoteIconSizeDesktop}${TestimonialQuoteIconSizeUnits};" : "") . "
        " . ($TestimonialQuoteIconSizeDesktop ? "height: ${TestimonialQuoteIconSizeDesktop}${TestimonialQuoteIconSizeUnits};" : "") . "
        " . ($TestimonialQuoteIconColor ? "fill: ${TestimonialQuoteIconColor};" : "") . "
    }
    .${blockId} .fb-testimonial-quote-icon:hover svg {
        " . ($TestimonialQuoteIconHoverColor ? "fill: ${TestimonialQuoteIconHoverColor};" : "") . "
    }
    .${blockId} .fb-testimonial-userinfo-container .fb-user-desc {
        " . ($TestimonialDescFontFamily ? "font-family: $TestimonialDescFontFamily;" : "") . "
        " . ($TestimonialDescFontSizeDesktop ? "font-size: ${TestimonialDescFontSizeDesktop}${TestimonialDescFontSizeUnits};" : "") . "
        " . ($TestimonialDescFontWeight ? "font-weight: $TestimonialDescFontWeight;" : "") . "
        " . ($TestimonialDescFontStyle ? "font-style: $TestimonialDescFontStyle;" : "") . "
        " . ($TestimonialDescTextTransform ? "text-transform: $TestimonialDescTextTransform;" : "") . "
        " . ($TestimonialDescTextDecoration ? "text-decoration: $TestimonialDescTextDecoration;" : "") . "
        " . ($TestimonialDescLetterSpacingDesktop ? "letter-spacing: ${TestimonialDescLetterSpacingDesktop}${TestimonialDescLetterSpacingUnits};" : "") . "
        " . ($TestimonialDescLineHeightDesktop ? "line-height: ${TestimonialDescLineHeightDesktop}${TestimonialDescLineHeightUnits};" : "") . "
        " . ($TestimonialDescColor ? "color: $TestimonialDescColor;" : "") . "
    }
    .${blockId} .fb-testimonial-userinfo-container .fb-user-desc:hover {
        " . ($TestimonialDescHoverColor ? "color: $TestimonialDescHoverColor;" : "") . "
    }

    .${blockId} .fb-testimonial-userinfo-container .fb-user {
        " . ($TestimonialAuthorFontFamily ? "font-family: $TestimonialAuthorFontFamily;" : "") . "
        " . ($TestimonialAuthorFontSizeDesktop ? "font-size: ${TestimonialAuthorFontSizeDesktop}${TestimonialAuthorFontSizeUnits};" : "") . "
        " . ($TestimonialAuthorFontWeight ? "font-weight: $TestimonialAuthorFontWeight;" : "") . "
        " . ($TestimonialAuthorFontStyle ? "font-style: $TestimonialAuthorFontStyle;" : "") . "
        " . ($TestimonialAuthorTextTransform ? "text-transform: $TestimonialAuthorTextTransform;" : "") . "
        " . ($TestimonialAuthorTextDecoration ? "text-decoration: $TestimonialAuthorTextDecoration;" : "") . "
        " . ($TestimonialAuthorLetterSpacingDesktop ? "letter-spacing: ${TestimonialAuthorLetterSpacingDesktop}${TestimonialAuthorLetterSpacingUnits};" : "") . "
        " . ($TestimonialAuthorLineHeightDesktop ? "line-height: ${TestimonialAuthorLineHeightDesktop}${TestimonialAuthorLineHeightUnits};" : "") . "
        " . ($TestimonialAuthorColor ? "color: $TestimonialAuthorColor;" : "") . "
    }
    .${blockId} .fb-testimonial-userinfo-container .fb-user:hover {
        " . ($TestimonialAuthorHoverColor ? "color: $TestimonialAuthorHoverColor;" : "") . "
    }

    .${blockId} .fb-testimonial-userinfo-container .fb-user-designation {
        " . ($TestimonialDesignationFontFamily ? "font-family: $TestimonialDesignationFontFamily;" : "") . "
        " . ($TestimonialDesignationFontSizeDesktop ? "font-size: ${TestimonialDesignationFontSizeDesktop}${TestimonialDesignationFontSizeUnits};" : "") . "
        " . ($TestimonialDesignationFontWeight ? "font-weight: $TestimonialDesignationFontWeight;" : "") . "
        " . ($TestimonialDesignationFontStyle ? "font-style: $TestimonialDesignationFontStyle;" : "") . "
        " . ($TestimonialDesignationTextTransform ? "text-transform: $TestimonialDesignationTextTransform;" : "") . "
        " . ($TestimonialDesignationTextDecoration ? "text-decoration: $TestimonialDesignationTextDecoration;" : "") . "
        " . ($TestimonialDesignationLetterSpacingDesktop ? "letter-spacing: ${TestimonialDesignationLetterSpacingDesktop}${TestimonialDesignationLetterSpacingUnits};" : "") . "
        " . ($TestimonialDesignationLineHeightDesktop ? "line-height: ${TestimonialDesignationLineHeightDesktop}${TestimonialDesignationLineHeightUnits};" : "") . "
        " . ($TestimonialDesignationColor ? "color: $TestimonialDesignationColor;" : "") . "
    }
    .${blockId} .fb-testimonial-userinfo-container .fb-user-designation:hover {
        " . ($TestimonialDesignationHoverColor ? "color: $TestimonialDesignationHoverColor;" : "") . "
    }

    .${blockId} .fb-testimonial-rating-icon svg {
        " . ($TestimonialRatingIconSizeDesktop ? "width: ${TestimonialRatingIconSizeDesktop}${TestimonialRatingIconSizeUnits};" : "") . "
        " . ($TestimonialRatingIconSizeDesktop ? "height: ${TestimonialRatingIconSizeDesktop}${TestimonialRatingIconSizeUnits};" : "") . "
        " . ($TestimonialRatingIconColor ? "fill: ${TestimonialRatingIconColor};" : "") . "
    }
    .${blockId} .fb-testimonial-rating-icon:hover svg {
        " . ($TestimonialRatingIconHoverColor ? "fill: ${TestimonialRatingIconHoverColor};" : "") . "
    }

    @media only screen and (max-width: 1024px) {
        .${blockId}.fb-testimonial-main-wrapper .fb-testimonial-section {
            " . ($TabPadding ? "padding: $TabPadding;" : "") . "
            " . ($TabMargin ? "margin: $TabMargin;" : "") . "
            " . ($TabBorderWidth ? "border-width: $TabBorderWidth;" : "") . "
            " . ($TabBorderRadiusWidth ? "border-radius: $TabBorderRadiusWidth !important;" : "") . "
        }
        .${blockId}.fb-testimonial-image img {
            " . ($TestimonialImageWidthTablet ? "width: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};" : "") . "
            " . ($TestimonialImageWidthTablet ? "height: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};" : "") . "
            " . ($ImageTabBorderRadiusWidth ? "border-radius: ${ImageTabBorderRadiusWidth};" : "") . "
        }
        .${blockId} .fb-testimonial-quote-icon svg {
            " . ($TestimonialQuoteIconSizeTablet ? "width: ${TestimonialQuoteIconSizeTablet}${TestimonialQuoteIconSizeUnits};" : "") . "
            " . ($TestimonialQuoteIconSizeTablet ? "height: ${TestimonialQuoteIconSizeTablet}${TestimonialQuoteIconSizeUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-userdesc-container .fb-user-desc {
            " . ($TestimonialDescFontSizeTablet ? "font-size: ${TestimonialDescFontSizeTablet}${TestimonialDescFontSizeUnits};" : "") . "
            " . ($TestimonialDescLetterSpacingTablet ? "letter-spacing: ${TestimonialDescLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};" : "") . "
            " . ($TestimonialDescLineHeightTablet ? "line-height: ${TestimonialDescLineHeightTablet}${TestimonialDescLineHeightUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-userinfo-container .fb-user {
            " . ($TestimonialAuthorFontSizeTablet ? "font-size: ${TestimonialAuthorFontSizeTablet}${TestimonialDescFontSizeUnits};" : "") . "
            " . ($TestimonialAuthorLetterSpacingTablet ? "letter-spacing: ${TestimonialAuthorLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};" : "") . "
            " . ($TestimonialAuthorLineHeightTablet ? "line-height: ${TestimonialAuthorLineHeightTablet}${TestimonialDescLineHeightUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-userinfo-container .fb-user-designation {
            " . ($TestimonialDesignationFontSizeTablet ? "font-size: ${TestimonialDesignationFontSizeTablet}${TestimonialDescFontSizeUnits};" : "") . "
            " . ($TestimonialDesignationLetterSpacingTablet ? "letter-spacing: ${TestimonialDesignationLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};" : "") . "
            " . ($TestimonialDesignationLineHeightTablet ? "line-height: ${TestimonialDesignationLineHeightTablet}${TestimonialDescLineHeightUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-rating-icon svg {
            " . ($TestimonialRatingIconSizeTablet ? "width: ${TestimonialRatingIconSizeTablet}${TestimonialRatingIconSizeUnits};" : "") . "
            " . ($TestimonialRatingIconSizeTablet ? "height: ${TestimonialRatingIconSizeTablet}${TestimonialRatingIconSizeUnits};" : "") . "
        }
    }

    @media only screen and (max-width: 767px) {
        .${blockId}.fb-testimonial-main-wrapper .fb-testimonial-section {
            " . ($MobilePadding ? "padding: $MobilePadding;" : "") . "
            " . ($MobileMargin ? "margin: $MobileMargin;" : "") . "
            " . ($MobileBorderWidth ? "border-width: $MobileBorderWidth;" : "") . "
            " . ($MobileBorderRadiusWidth ? "border-radius: $MobileBorderRadiusWidth !important;" : "") . "
        }
        .${blockId} .fb-testimonial-image img {
            " . ($TestimonialImageWidthMobile ? "width: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};" : "") . "
            " . ($TestimonialImageWidthMobile ? "height: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};" : "") . "
            " . ($ImageMobileBorderRadiusWidth ? "border-radius: ${ImageMobileBorderRadiusWidth};" : "") . "
        }
        .${blockId} .fb-testimonial-quote-icon svg {
            " . ($TestimonialQuoteIconSizeMobile ? "width: ${TestimonialQuoteIconSizeMobile}${TestimonialQuoteIconSizeUnits};" : "") . "
            " . ($TestimonialQuoteIconSizeMobile ? "height: ${TestimonialQuoteIconSizeMobile}${TestimonialQuoteIconSizeUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-userdesc-container .fb-user-desc {
            " . ($TestimonialDescFontSizeMobile ? "font-size: ${TestimonialDescFontSizeMobile}${TestimonialDescFontSizeUnits};" : "") . "
            " . ($TestimonialDescLetterSpacingMobile ? "letter-spacing: ${TestimonialDescLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};" : "") . "
            " . ($TestimonialDescLineHeightMobile ? "line-height: ${TestimonialDescLineHeightMobile}${TestimonialDescLineHeightUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-userinfo-container .fb-user {
            " . ($TestimonialAuthorFontSizeMobile ? "font-size: ${TestimonialAuthorFontSizeMobile}${TestimonialDescFontSizeUnits};" : "") . "
            " . ($TestimonialAuthorLetterSpacingMobile ? "letter-spacing: ${TestimonialAuthorLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};" : "") . "
            " . ($TestimonialAuthorLineHeightMobile ? "line-height: ${TestimonialAuthorLineHeightMobile}${TestimonialDescLineHeightUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-userinfo-container .fb-user-designation {
            " . ($TestimonialDesignationFontSizeMobile ? "font-size: ${TestimonialDesignationFontSizeMobile}${TestimonialDescFontSizeUnits};" : "") . "
            " . ($TestimonialDesignationLetterSpacingMobile ? "letter-spacing: ${TestimonialDesignationLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};" : "") . "
            " . ($TestimonialDesignationLineHeightMobile ? "line-height: ${TestimonialDesignationLineHeightMobile}${TestimonialDescLineHeightUnits};" : "") . "
        }
        .${blockId} .fb-testimonial-rating-icon svg {
            " . ($TestimonialRatingIconSizeMobile ? "width: ${TestimonialRatingIconSizeMobile}${TestimonialRatingIconSizeUnits};" : "") . "
            " . ($TestimonialRatingIconSizeMobile ? "height: ${TestimonialRatingIconSizeMobile}${TestimonialRatingIconSizeUnits};" : "") . "
        }
    }


";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockId);