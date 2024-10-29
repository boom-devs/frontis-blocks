<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;

// Ensure WordPress functions are available
if (!function_exists('sanitize_text_field') || !function_exists('rest_sanitize_boolean')) {
    require_once(ABSPATH . 'wp-includes/formatting.php');
}

$block_attributes               = $block['attrs'];
$blockID = isset($block_attributes['blockID']) ? sanitize_text_field($block_attributes['blockID']) : '';

$TestimonialAlignment           = isset($block_attributes['TestimonialAlignment']) ? sanitize_text_field($block_attributes['TestimonialAlignment']) : 'center';
$TestimonialImageSwitcher       = isset($block_attributes['TestimonialImageSwitcher']) ? rest_sanitize_boolean($block_attributes['TestimonialImageSwitcher']) : true;
$TestimonialImageUrl            = isset($block_attributes['TestimonialImageUrl']) ? esc_url($block_attributes['TestimonialImageUrl']) : '';
$TestimonialImageAlt            = isset($block_attributes['TestimonialImageAlt']) ? sanitize_text_field($block_attributes['TestimonialImageAlt']) : '';
$TestimonialImageID             = isset($block_attributes['TestimonialImageID']) ? sanitize_text_field($block_attributes['TestimonialImageID']) : '';
$TitleSwitcher                  = isset($block_attributes['TitleSwitcher']) ? rest_sanitize_boolean($block_attributes['TitleSwitcher']) : true;
$TestimonialTitle               = isset($block_attributes['TestimonialTitle']) ? sanitize_text_field($block_attributes['TestimonialTitle']) : 'A game changer for us';
$DescSwitcher                   = isset($block_attributes['DescSwitcher']) ? rest_sanitize_boolean($block_attributes['DescSwitcher']) : true;
$TestimonialDesc                = isset($block_attributes['TestimonialDesc']) ? sanitize_text_field($block_attributes['TestimonialDesc']) : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
$AuthorSwitcher                 = isset($block_attributes['AuthorSwitcher']) ? rest_sanitize_boolean($block_attributes['AuthorSwitcher']) : true;
$TestimonialAuthor              = isset($block_attributes['TestimonialAuthor']) ? sanitize_text_field($block_attributes['TestimonialAuthor']) : 'John Doe';
$DesignationSwitcher            = isset($block_attributes['DesignationSwitcher']) ? rest_sanitize_boolean($block_attributes['DesignationSwitcher']) : true;
$TestimonialDesignation         = isset($block_attributes['TestimonialDesignation']) ? sanitize_text_field($block_attributes['TestimonialDesignation']) : 'CEO, Company Name';
$RatingSwitcher                 = isset($block_attributes['RatingSwitcher']) ? rest_sanitize_boolean($block_attributes['RatingSwitcher']) : true;
$TestimonialRatingNumber        = isset($block_attributes['TestimonialRatingNumber']) ? sanitize_text_field($block_attributes['TestimonialRatingNumber']) : '5';
$TestimonialRatingicon          = isset($block_attributes['TestimonialRatingicon']) ? sanitize_text_field($block_attributes['TestimonialRatingicon']) : 'star';
$TestimonialRatinIconAlign      = isset($block_attributes['TestimonialRatinIconAlign']) ? sanitize_text_field($block_attributes['TestimonialRatinIconAlign']) : 'icon';
$QuoteIconSwitcher              = isset($block_attributes['QuoteIconSwitcher']) ? rest_sanitize_boolean($block_attributes['QuoteIconSwitcher']) : true;
$TestimonialQuoteIcon           = isset($block_attributes['TestimonialQuoteIcon']) ? sanitize_text_field($block_attributes['TestimonialQuoteIcon']) : 'quote-left';
$TestimonialQuoteIconAlign      = isset($block_attributes['TestimonialQuoteIconAlign']) ? sanitize_text_field($block_attributes['TestimonialQuoteIconAlign']) : 'icon';

$TestimonialImageWidth          = isset($block_attributes['TestimonialImageWidth']) ? $block_attributes['TestimonialImageWidth'] : array('Desktop' => 60, 'Tablet' => 60, 'Mobile' => 60);
$TestimonialImageWidthUnits     = isset($block_attributes['TestimonialImageWidthUnits']) ? $block_attributes['TestimonialImageWidthUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$TestimonialImageRadiusUnits        = isset($block_attributes['TestimonialImageRadiusUnits']) ? $block_attributes['TestimonialImageRadiusUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
$TestimonialImageDesktopRadiusWidth = isset($block_attributes['TestimonialImageDesktopRadiusWidth']) ? $block_attributes['TestimonialImageDesktopRadiusWidth'] : array('top' => '50', 'bottom' => '50', 'left' => '50', 'right' => '50');
$TestimonialImageTabRadiusWidth     = isset($block_attributes['TestimonialImageTabRadiusWidth']) ? $block_attributes['TestimonialImageTabRadiusWidth'] : array('top' => '50', 'bottom' => '50', 'left' => '50', 'right' => '50');
$TestimonialImageMobileRadiusWidth  = isset($block_attributes['TestimonialImageMobileRadiusWidth']) ? $block_attributes['TestimonialImageMobileRadiusWidth'] : array('top' => '50', 'bottom' => '50', 'left' => '50', 'right' => '50');
$TestimonialImageRadiusLink         = isset($block_attributes['TestimonialImageRadiusLink']) ? rest_sanitize_boolean($block_attributes['TestimonialImageRadiusLink']) : true;

$TestimonialImageMarginUnits = isset($block_attributes['TestimonialImageMarginUnits']) ? $block_attributes['TestimonialImageMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialImageMarginDesktop = isset($block_attributes['TestimonialImageMarginDesktop']) ? $block_attributes['TestimonialImageMarginDesktop'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '14');
$TestimonialImageMarginTablet = isset($block_attributes['TestimonialImageMarginTablet']) ? $block_attributes['TestimonialImageMarginTablet'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '14');
$TestimonialImageMarginMobile = isset($block_attributes['TestimonialImageMarginMobile']) ? $block_attributes['TestimonialImageMarginMobile'] : array('top' => '0', 'bottom' => '0', 'left' => '0', 'right' => '14');
$TestimonialImageMarginLink = isset($block_attributes['TestimonialImageMarginLink']) ? rest_sanitize_boolean($block_attributes['TestimonialImageMarginLink']) : true;

$testimonialImageDesktopMargin = $TestimonialImageMarginDesktop['top'] . $TestimonialImageMarginUnits['Desktop'] . ' ' . $TestimonialImageMarginDesktop['right'] . $TestimonialImageMarginUnits['Desktop'] . ' ' . $TestimonialImageMarginDesktop['bottom'] . $TestimonialImageMarginUnits['Desktop'] . ' ' . $TestimonialImageMarginDesktop['left'] . $TestimonialImageMarginUnits['Desktop'];
$testimonialImageTabletMargin = $TestimonialImageMarginTablet['top'] . $TestimonialImageMarginUnits['Tablet'] . ' ' . $TestimonialImageMarginTablet['right'] . $TestimonialImageMarginUnits['Tablet'] . ' ' . $TestimonialImageMarginTablet['bottom'] . $TestimonialImageMarginUnits['Tablet'] . ' ' . $TestimonialImageMarginTablet['left'] . $TestimonialImageMarginUnits['Tablet'];
$testimonialImageMobileMargin = $TestimonialImageMarginMobile['top'] . $TestimonialImageMarginUnits['Mobile'] . ' ' . $TestimonialImageMarginMobile['right'] . $TestimonialImageMarginUnits['Mobile'] . ' ' . $TestimonialImageMarginMobile['bottom'] . $TestimonialImageMarginUnits['Mobile'] . ' ' . $TestimonialImageMarginMobile['left'] . $TestimonialImageMarginUnits['Mobile'];
/** End Testimonial Image Margin */

/** Testimonial Image Position */
$TestimonialImagePositionSwitcher = isset($block_attributes['TestimonialImagePositionSwitcher']) ? rest_sanitize_boolean($block_attributes['TestimonialImagePositionSwitcher']) : false;
$TestimonialImageTopPosition = isset($block_attributes['TestimonialImageTopPosition']) ? $block_attributes['TestimonialImageTopPosition'] : array('Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0');
$TestimonialImageTopPositionUnits = isset($block_attributes['TestimonialImageTopPositionUnits']) ? $block_attributes['TestimonialImageTopPositionUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
$TestimonialImageLeftPosition = isset($block_attributes['TestimonialImageLeftPosition']) ? $block_attributes['TestimonialImageLeftPosition'] : array('Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0');
$TestimonialImageLeftPositionUnits = isset($block_attributes['TestimonialImageLeftPositionUnits']) ? $block_attributes['TestimonialImageLeftPositionUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
/** End Testimonial Image Position */

/** Default border radius for Testimonial Image */
$testimonialImageDesktopBorderRadiusWidth   = $TestimonialImageDesktopRadiusWidth['top'] . $TestimonialImageRadiusUnits['Desktop'] . ' ' . $TestimonialImageDesktopRadiusWidth['right'] . $TestimonialImageRadiusUnits['Desktop'] . ' ' . $TestimonialImageDesktopRadiusWidth['bottom'] . $TestimonialImageRadiusUnits['Desktop'] . ' ' . $TestimonialImageDesktopRadiusWidth['left'] . $TestimonialImageRadiusUnits['Desktop'];
$testimonialImageTabletBorderRadiusWidth    = $TestimonialImageTabRadiusWidth['top'] . $TestimonialImageRadiusUnits['Tablet'] . ' ' . $TestimonialImageTabRadiusWidth['right'] . $TestimonialImageRadiusUnits['Tablet'] . ' ' . $TestimonialImageTabRadiusWidth['bottom'] . $TestimonialImageRadiusUnits['Tablet'] . ' ' . $TestimonialImageTabRadiusWidth['left'] . $TestimonialImageRadiusUnits['Tablet'];
$testimonialImageMobileBorderRadiusWidth    = $TestimonialImageMobileRadiusWidth['top'] . $TestimonialImageRadiusUnits['Mobile'] . ' ' . $TestimonialImageMobileRadiusWidth['right'] . $TestimonialImageRadiusUnits['Mobile'] . ' ' . $TestimonialImageMobileRadiusWidth['bottom'] . $TestimonialImageRadiusUnits['Mobile'] . ' ' . $TestimonialImageMobileRadiusWidth['left'] . $TestimonialImageRadiusUnits['Mobile'];
/** End Testimonial Image Border Radius */

$TestimonialQuoteIconSize           = isset($block_attributes['TestimonialQuoteIconSize']) ? $block_attributes['TestimonialQuoteIconSize'] : array('Desktop' => 60, 'Tablet' => 60, 'Mobile' => 60);
$TestimonialQuoteIconSizeUnits      = isset($block_attributes['TestimonialQuoteIconSizeUnits']) ? $block_attributes['TestimonialQuoteIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialQuoteIconColorSwitcher  = isset($block_attributes['TestimonialQuoteIconColorSwitcher']) ? $block_attributes['TestimonialQuoteIconColorSwitcher'] : 'normal';
$TestimonialQuoteIconColor          = isset($block_attributes['TestimonialQuoteIconColor']) ? $block_attributes['TestimonialQuoteIconColor'] : '#399CFF';
$TestimonialQuoteIconHoverColor     = isset($block_attributes['TestimonialQuoteIconHoverColor']) ? $block_attributes['TestimonialQuoteIconHoverColor'] : '#399CFF';

$TestimonialQuoteIconPositionSwitcher = isset($block_attributes['TestimonialQuoteIconPositionSwitcher']) ? rest_sanitize_boolean($block_attributes['TestimonialQuoteIconPositionSwitcher']) : false;
$TestimonialQuoteIconTopPosition = isset($block_attributes['TestimonialQuoteIconTopPosition']) ? $block_attributes['TestimonialQuoteIconTopPosition'] : array('Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0');
$TestimonialQuoteIconTopPositionUnits = isset($block_attributes['TestimonialQuoteIconTopPositionUnits']) ? $block_attributes['TestimonialQuoteIconTopPositionUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
$TestimonialQuoteIconLeftPosition = isset($block_attributes['TestimonialQuoteIconLeftPosition']) ? $block_attributes['TestimonialQuoteIconLeftPosition'] : array('Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0');
$TestimonialQuoteIconLeftPositionUnits = isset($block_attributes['TestimonialQuoteIconLeftPositionUnits']) ? $block_attributes['TestimonialQuoteIconLeftPositionUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');
$TestimonialQuoteIconMarginUnits = isset($block_attributes['TestimonialQuoteIconMarginUnits']) ? $block_attributes['TestimonialQuoteIconMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialQuoteIconMarginDesktop = isset($block_attributes['TestimonialQuoteIconMarginDesktop']) ? $block_attributes['TestimonialQuoteIconMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialQuoteIconMarginTablet = isset($block_attributes['TestimonialQuoteIconMarginTablet']) ? $block_attributes['TestimonialQuoteIconMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialQuoteIconMarginMobile = isset($block_attributes['TestimonialQuoteIconMarginMobile']) ? $block_attributes['TestimonialQuoteIconMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialQuoteIconMarginLink = isset($block_attributes['TestimonialQuoteIconMarginLink']) ? rest_sanitize_boolean($block_attributes['TestimonialQuoteIconMarginLink']) : true;
/** End Testimonial Quote Icon Margin */
$testimonialQuoteIconDesktopMargin = $TestimonialQuoteIconMarginDesktop['top'] . $TestimonialQuoteIconMarginUnits['Desktop'] . ' ' . $TestimonialQuoteIconMarginDesktop['right'] . $TestimonialQuoteIconMarginUnits['Desktop'] . ' ' . $TestimonialQuoteIconMarginDesktop['bottom'] . $TestimonialQuoteIconMarginUnits['Desktop'] . ' ' . $TestimonialQuoteIconMarginDesktop['left'] . $TestimonialQuoteIconMarginUnits['Desktop'];
$testimonialQuoteIconTabletMargin = $TestimonialQuoteIconMarginTablet['top'] . $TestimonialQuoteIconMarginUnits['Tablet'] . ' ' . $TestimonialQuoteIconMarginTablet['right'] . $TestimonialQuoteIconMarginUnits['Tablet'] . ' ' . $TestimonialQuoteIconMarginTablet['bottom'] . $TestimonialQuoteIconMarginUnits['Tablet'] . ' ' . $TestimonialQuoteIconMarginTablet['left'] . $TestimonialQuoteIconMarginUnits['Tablet'];
$testimonialQuoteIconMobileMargin = $TestimonialQuoteIconMarginMobile['top'] . $TestimonialQuoteIconMarginUnits['Mobile'] . ' ' . $TestimonialQuoteIconMarginMobile['right'] . $TestimonialQuoteIconMarginUnits['Mobile'] . ' ' . $TestimonialQuoteIconMarginMobile['bottom'] . $TestimonialQuoteIconMarginUnits['Mobile'] . ' ' . $TestimonialQuoteIconMarginMobile['left'] . $TestimonialQuoteIconMarginUnits['Mobile'];
/** End Testimonial Quote Icon Margin */

$TestimonialTitleTag                = isset($block_attributes['TestimonialTitleTag']) ? sanitize_text_field($block_attributes['TestimonialTitleTag']) : 'h3';
$TestimonialTitleFontFamily         = isset($block_attributes['TestimonialTitleFontFamily']) ? sanitize_text_field($block_attributes['TestimonialTitleFontFamily']) : 'inherit';
$TestimonialTitleFontSize           = isset($block_attributes['TestimonialTitleFontSize']) ? $block_attributes['TestimonialTitleFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialTitleFontSizeUnits      = isset($block_attributes['TestimonialTitleFontSizeUnits']) ? $block_attributes['TestimonialTitleFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialTitleFontWeight         = isset($block_attributes['TestimonialTitleFontWeight']) ? sanitize_text_field($block_attributes['TestimonialTitleFontWeight']) : '';
$TestimonialTitleFontStyle          = isset($block_attributes['TestimonialTitleFontStyle']) ? sanitize_text_field($block_attributes['TestimonialTitleFontStyle']) : 'normal';
$TestimonialTitleTextTransform      = isset($block_attributes['TestimonialTitleTextTransform']) ? sanitize_text_field($block_attributes['TestimonialTitleTextTransform']) : 'none';
$TestimonialTitleTextDecoration     = isset($block_attributes['TestimonialTitleTextDecoration']) ? sanitize_text_field($block_attributes['TestimonialTitleTextDecoration']) : 'none';
$TestimonialTitleLetterSpacing      = isset($block_attributes['TestimonialTitleLetterSpacing']) ? $block_attributes['TestimonialTitleLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialTitleLetterSpacingUnits = isset($block_attributes['TestimonialTitleLetterSpacingUnits']) ? $block_attributes['TestimonialTitleLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialTitleLineHeight         = isset($block_attributes['TestimonialTitleLineHeight']) ? $block_attributes['TestimonialTitleLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialTitleLineHeightUnits    = isset($block_attributes['TestimonialTitleLineHeightUnits']) ? $block_attributes['TestimonialTitleLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialTitleColorSwitcher      = isset($block_attributes['TestimonialTitleColorSwitcher']) ? sanitize_text_field($block_attributes['TestimonialTitleColorSwitcher']) : 'normal';
$TestimonialTitleColor              = isset($block_attributes['TestimonialTitleColor']) ? sanitize_text_field($block_attributes['TestimonialTitleColor']) : '';
$TestimonialTitleHoverColor         = isset($block_attributes['TestimonialTitleHoverColor']) ? sanitize_text_field($block_attributes['TestimonialTitleHoverColor']) : '';

/** Start Testimonial Title Margin */
$TestimonialTitleMarginUnits        = isset($block_attributes['TestimonialTitleMarginUnits']) ? $block_attributes['TestimonialTitleMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialTitleMarginDesktop      = isset($block_attributes['TestimonialTitleMarginDesktop']) ? $block_attributes['TestimonialTitleMarginDesktop'] : array('top' => '14', 'bottom' => '14', 'left' => '0', 'right' => '0');
$TestimonialTitleMarginTablet       = isset($block_attributes['TestimonialTitleMarginTablet']) ? $block_attributes['TestimonialTitleMarginTablet'] : array('top' => '14', 'bottom' => '14', 'left' => '0', 'right' => '0');
$TestimonialTitleMarginMobile       = isset($block_attributes['TestimonialTitleMarginMobile']) ? $block_attributes['TestimonialTitleMarginMobile'] : array('top' => '14', 'bottom' => '14', 'left' => '0', 'right' => '0');
$TestimonialTitleMarginLink         = isset($block_attributes['TestimonialTitleMarginLink']) ? rest_sanitize_boolean($block_attributes['TestimonialTitleMarginLink']) : true;

$testimonialTitleDesktopMargin      = $TestimonialTitleMarginDesktop['top'] . $TestimonialTitleMarginUnits['Desktop'] . ' ' . $TestimonialTitleMarginDesktop['right'] . $TestimonialTitleMarginUnits['Desktop'] . ' ' . $TestimonialTitleMarginDesktop['bottom'] . $TestimonialTitleMarginUnits['Desktop'] . ' ' . $TestimonialTitleMarginDesktop['left'] . $TestimonialTitleMarginUnits['Desktop'];
$testimonialTitleTabletMargin       = $TestimonialTitleMarginTablet['top'] . $TestimonialTitleMarginUnits['Tablet'] . ' ' . $TestimonialTitleMarginTablet['right'] . $TestimonialTitleMarginUnits['Tablet'] . ' ' . $TestimonialTitleMarginTablet['bottom'] . $TestimonialTitleMarginUnits['Tablet'] . ' ' . $TestimonialTitleMarginTablet['left'] . $TestimonialTitleMarginUnits['Tablet'];
$testimonialTitleMobileMargin       = $TestimonialTitleMarginMobile['top'] . $TestimonialTitleMarginUnits['Mobile'] . ' ' . $TestimonialTitleMarginMobile['right'] . $TestimonialTitleMarginUnits['Mobile'] . ' ' . $TestimonialTitleMarginMobile['bottom'] . $TestimonialTitleMarginUnits['Mobile'] . ' ' . $TestimonialTitleMarginMobile['left'] . $TestimonialTitleMarginUnits['Mobile'];
/** End Testimonial Title Margin */

$TestimonialDescFontFamily         = isset($block_attributes['TestimonialDescFontFamily']) ? sanitize_text_field($block_attributes['TestimonialDescFontFamily']) : 'inherit';
$TestimonialDescFontSize           = isset($block_attributes['TestimonialDescFontSize']) ? $block_attributes['TestimonialDescFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialDescFontSizeUnits      = isset($block_attributes['TestimonialDescFontSizeUnits']) ? $block_attributes['TestimonialDescFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDescFontWeight         = isset($block_attributes['TestimonialDescFontWeight']) ? sanitize_text_field($block_attributes['TestimonialDescFontWeight']) : '400';
$TestimonialDescFontStyle          = isset($block_attributes['TestimonialDescFontStyle']) ? sanitize_text_field($block_attributes['TestimonialDescFontStyle']) : 'normal';
$TestimonialDescTextTransform      = isset($block_attributes['TestimonialDescTextTransform']) ? sanitize_text_field($block_attributes['TestimonialDescTextTransform']) : 'none';
$TestimonialDescTextDecoration     = isset($block_attributes['TestimonialDescTextDecoration']) ? sanitize_text_field($block_attributes['TestimonialDescTextDecoration']) : 'none';
$TestimonialDescLetterSpacing      = isset($block_attributes['TestimonialDescLetterSpacing']) ? $block_attributes['TestimonialDescLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialDescLetterSpacingUnits = isset($block_attributes['TestimonialDescLetterSpacingUnits']) ? $block_attributes['TestimonialDescLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDescLineHeight         = isset($block_attributes['TestimonialDescLineHeight']) ? $block_attributes['TestimonialDescLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialDescLineHeightUnits    = isset($block_attributes['TestimonialDescLineHeightUnits']) ? $block_attributes['TestimonialDescLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDescColorSwitcher      = isset($block_attributes['TestimonialDescColorSwitcher']) ? sanitize_text_field($block_attributes['TestimonialDescColorSwitcher']) : 'normal';
$TestimonialDescColor              = isset($block_attributes['TestimonialDescColor']) ? sanitize_text_field($block_attributes['TestimonialDescColor']) : '';
$TestimonialDescHoverColor         = isset($block_attributes['TestimonialDescHoverColor']) ? sanitize_text_field($block_attributes['TestimonialDescHoverColor']) : '';
/** Start Testimonial Desc Margin */
$TestimonialDescMarginUnits        = isset($block_attributes['TestimonialDescMarginUnits']) ? $block_attributes['TestimonialDescMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDescMarginDesktop      = isset($block_attributes['TestimonialDescMarginDesktop']) ? $block_attributes['TestimonialDescMarginDesktop'] : array('top' => '0', 'bottom' => '24', 'left' => '0', 'right' => '0');
$TestimonialDescMarginTablet       = isset($block_attributes['TestimonialDescMarginTablet']) ? $block_attributes['TestimonialDescMarginTablet'] : array('top' => '0', 'bottom' => '24', 'left' => '0', 'right' => '0');
$TestimonialDescMarginMobile       = isset($block_attributes['TestimonialDescMarginMobile']) ? $block_attributes['TestimonialDescMarginMobile'] : array('top' => '0', 'bottom' => '24', 'left' => '0', 'right' => '0');
$TestimonialDescMarginLink         = isset($block_attributes['TestimonialDescMarginLink']) ? rest_sanitize_boolean($block_attributes['TestimonialDescMarginLink']) : true;

$testimonialDescDesktopMargin      = $TestimonialDescMarginDesktop['top'] . $TestimonialDescMarginUnits['Desktop'] . ' ' . $TestimonialDescMarginDesktop['right'] . $TestimonialDescMarginUnits['Desktop'] . ' ' . $TestimonialDescMarginDesktop['bottom'] . $TestimonialDescMarginUnits['Desktop'] . ' ' . $TestimonialDescMarginDesktop['left'] . $TestimonialDescMarginUnits['Desktop'];
$testimonialDescTabletMargin       = $TestimonialDescMarginTablet['top'] . $TestimonialDescMarginUnits['Tablet'] . ' ' . $TestimonialDescMarginTablet['right'] . $TestimonialDescMarginUnits['Tablet'] . ' ' . $TestimonialDescMarginTablet['bottom'] . $TestimonialDescMarginUnits['Tablet'] . ' ' . $TestimonialDescMarginTablet['left'] . $TestimonialDescMarginUnits['Tablet'];
$testimonialDescMobileMargin       = $TestimonialDescMarginMobile['top'] . $TestimonialDescMarginUnits['Mobile'] . ' ' . $TestimonialDescMarginMobile['right'] . $TestimonialDescMarginUnits['Mobile'] . ' ' . $TestimonialDescMarginMobile['bottom'] . $TestimonialDescMarginUnits['Mobile'] . ' ' . $TestimonialDescMarginMobile['left'] . $TestimonialDescMarginUnits['Mobile'];
/** End Testimonial Desc Margin */


$TestimonialAuthorFontFamily         = isset($block_attributes['TestimonialAuthorFontFamily']) ? sanitize_text_field($block_attributes['TestimonialAuthorFontFamily']) : 'inherit';
$TestimonialAuthorFontSize           = isset($block_attributes['TestimonialAuthorFontSize']) ? $block_attributes['TestimonialAuthorFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialAuthorFontSizeUnits      = isset($block_attributes['TestimonialAuthorFontSizeUnits']) ? $block_attributes['TestimonialAuthorFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialAuthorFontWeight         = isset($block_attributes['TestimonialAuthorFontWeight']) ? sanitize_text_field($block_attributes['TestimonialAuthorFontWeight']) : '700';
$TestimonialAuthorFontStyle          = isset($block_attributes['TestimonialAuthorFontStyle']) ? sanitize_text_field($block_attributes['TestimonialAuthorFontStyle']) : 'normal';
$TestimonialAuthorTextTransform      = isset($block_attributes['TestimonialAuthorTextTransform']) ? sanitize_text_field($block_attributes['TestimonialAuthorTextTransform']) : 'none';
$TestimonialAuthorTextDecoration     = isset($block_attributes['TestimonialAuthorTextDecoration']) ? sanitize_text_field($block_attributes['TestimonialAuthorTextDecoration']) : 'none';
$TestimonialAuthorLetterSpacing      = isset($block_attributes['TestimonialAuthorLetterSpacing']) ? $block_attributes['TestimonialAuthorLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialAuthorLetterSpacingUnits = isset($block_attributes['TestimonialAuthorLetterSpacingUnits']) ? $block_attributes['TestimonialAuthorLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialAuthorLineHeight         = isset($block_attributes['TestimonialAuthorLineHeight']) ? $block_attributes['TestimonialAuthorLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialAuthorLineHeightUnits    = isset($block_attributes['TestimonialAuthorLineHeightUnits']) ? $block_attributes['TestimonialAuthorLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialAuthorColorSwitcher      = isset($block_attributes['TestimonialAuthorColorSwitcher']) ? sanitize_text_field($block_attributes['TestimonialAuthorColorSwitcher']) : 'normal';
$TestimonialAuthorColor              = isset($block_attributes['TestimonialAuthorColor']) ? sanitize_text_field($block_attributes['TestimonialAuthorColor']) : '';
$TestimonialAuthorHoverColor         = isset($block_attributes['TestimonialAuthorHoverColor']) ? sanitize_text_field($block_attributes['TestimonialAuthorHoverColor']) : '';

/** Start Testimonial Author Margin */
$TestimonialAuthorMarginUnits        = isset($block_attributes['TestimonialAuthorMarginUnits']) ? $block_attributes['TestimonialAuthorMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialAuthorMarginDesktop      = isset($block_attributes['TestimonialAuthorMarginDesktop']) ? $block_attributes['TestimonialAuthorMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialAuthorMarginTablet       = isset($block_attributes['TestimonialAuthorMarginTablet']) ? $block_attributes['TestimonialAuthorMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialAuthorMarginMobile       = isset($block_attributes['TestimonialAuthorMarginMobile']) ? $block_attributes['TestimonialAuthorMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialAuthorMarginLink         = isset($block_attributes['TestimonialAuthorMarginLink']) ? rest_sanitize_boolean($block_attributes['TestimonialAuthorMarginLink']) : true;

$testimonialAuthorDesktopMargin      = $TestimonialAuthorMarginDesktop['top'] . $TestimonialAuthorMarginUnits['Desktop'] . ' ' . $TestimonialAuthorMarginDesktop['right'] . $TestimonialAuthorMarginUnits['Desktop'] . ' ' . $TestimonialAuthorMarginDesktop['bottom'] . $TestimonialAuthorMarginUnits['Desktop'] . ' ' . $TestimonialAuthorMarginDesktop['left'] . $TestimonialAuthorMarginUnits['Desktop'];
$testimonialAuthorTabletMargin       = $TestimonialAuthorMarginTablet['top'] . $TestimonialAuthorMarginUnits['Tablet'] . ' ' . $TestimonialAuthorMarginTablet['right'] . $TestimonialAuthorMarginUnits['Tablet'] . ' ' . $TestimonialAuthorMarginTablet['bottom'] . $TestimonialAuthorMarginUnits['Tablet'] . ' ' . $TestimonialAuthorMarginTablet['left'] . $TestimonialAuthorMarginUnits['Tablet'];
$testimonialAuthorMobileMargin       = $TestimonialAuthorMarginMobile['top'] . $TestimonialAuthorMarginUnits['Mobile'] . ' ' . $TestimonialAuthorMarginMobile['right'] . $TestimonialAuthorMarginUnits['Mobile'] . ' ' . $TestimonialAuthorMarginMobile['bottom'] . $TestimonialAuthorMarginUnits['Mobile'] . ' ' . $TestimonialAuthorMarginMobile['left'] . $TestimonialAuthorMarginUnits['Mobile'];
/** End Testimonial Author Margin */


$TestimonialDesignationFontFamily         = isset($block_attributes['TestimonialDesignationFontFamily']) ? sanitize_text_field($block_attributes['TestimonialDesignationFontFamily']) : 'inherit';
$TestimonialDesignationFontSize           = isset($block_attributes['TestimonialDesignationFontSize']) ? $block_attributes['TestimonialDesignationFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialDesignationFontSizeUnits      = isset($block_attributes['TestimonialDesignationFontSizeUnits']) ? $block_attributes['TestimonialDesignationFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDesignationFontWeight         = isset($block_attributes['TestimonialDesignationFontWeight']) ? sanitize_text_field($block_attributes['TestimonialDesignationFontWeight']) : '';
$TestimonialDesignationFontStyle          = isset($block_attributes['TestimonialDesignationFontStyle']) ? sanitize_text_field($block_attributes['TestimonialDesignationFontStyle']) : '';
$TestimonialDesignationTextTransform      = isset($block_attributes['TestimonialDesignationTextTransform']) ? sanitize_text_field($block_attributes['TestimonialDesignationTextTransform']) : '';
$TestimonialDesignationTextDecoration     = isset($block_attributes['TestimonialDesignationTextDecoration']) ? sanitize_text_field($block_attributes['TestimonialDesignationTextDecoration']) : '';
$TestimonialDesignationLetterSpacing      = isset($block_attributes['TestimonialDesignationLetterSpacing']) ? $block_attributes['TestimonialDesignationLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialDesignationLetterSpacingUnits = isset($block_attributes['TestimonialDesignationLetterSpacingUnits']) ? $block_attributes['TestimonialDesignationLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDesignationLineHeight         = isset($block_attributes['TestimonialDesignationLineHeight']) ? $block_attributes['TestimonialDesignationLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$TestimonialDesignationLineHeightUnits    = isset($block_attributes['TestimonialDesignationLineHeightUnits']) ? $block_attributes['TestimonialDesignationLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDesignationColorSwitcher      = isset($block_attributes['TestimonialDesignationColorSwitcher']) ? sanitize_text_field($block_attributes['TestimonialDesignationColorSwitcher']) : 'normal';
$TestimonialDesignationColor              = isset($block_attributes['TestimonialDesignationColor']) ? sanitize_text_field($block_attributes['TestimonialDesignationColor']) : '';
$TestimonialDesignationHoverColor         = isset($block_attributes['TestimonialDesignationHoverColor']) ? sanitize_text_field($block_attributes['TestimonialDesignationHoverColor']) : '';

/** Start Testimonial Designation Margin */
$TestimonialDesignationMarginUnits        = isset($block_attributes['TestimonialDesignationMarginUnits']) ? $block_attributes['TestimonialDesignationMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialDesignationMarginDesktop      = isset($block_attributes['TestimonialDesignationMarginDesktop']) ? $block_attributes['TestimonialDesignationMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialDesignationMarginTablet       = isset($block_attributes['TestimonialDesignationMarginTablet']) ? $block_attributes['TestimonialDesignationMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialDesignationMarginMobile       = isset($block_attributes['TestimonialDesignationMarginMobile']) ? $block_attributes['TestimonialDesignationMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialDesignationMarginLink         = isset($block_attributes['TestimonialDesignationMarginLink']) ? rest_sanitize_boolean($block_attributes['TestimonialDesignationMarginLink']) : true;

$testimonialDesignationDesktopMargin      = $TestimonialDesignationMarginDesktop['top'] . $TestimonialDesignationMarginUnits['Desktop'] . ' ' . $TestimonialDesignationMarginDesktop['right'] . $TestimonialDesignationMarginUnits['Desktop'] . ' ' . $TestimonialDesignationMarginDesktop['bottom'] . $TestimonialDesignationMarginUnits['Desktop'] . ' ' . $TestimonialDesignationMarginDesktop['left'] . $TestimonialDesignationMarginUnits['Desktop'];
$testimonialDesignationTabletMargin       = $TestimonialDesignationMarginTablet['top'] . $TestimonialDesignationMarginUnits['Tablet'] . ' ' . $TestimonialDesignationMarginTablet['right'] . $TestimonialDesignationMarginUnits['Tablet'] . ' ' . $TestimonialDesignationMarginTablet['bottom'] . $TestimonialDesignationMarginUnits['Tablet'] . ' ' . $TestimonialDesignationMarginTablet['left'] . $TestimonialDesignationMarginUnits['Tablet'];
$testimonialDesignationMobileMargin       = $TestimonialDesignationMarginMobile['top'] . $TestimonialDesignationMarginUnits['Mobile'] . ' ' . $TestimonialDesignationMarginMobile['right'] . $TestimonialDesignationMarginUnits['Mobile'] . ' ' . $TestimonialDesignationMarginMobile['bottom'] . $TestimonialDesignationMarginUnits['Mobile'] . ' ' . $TestimonialDesignationMarginMobile['left'] . $TestimonialDesignationMarginUnits['Mobile'];
/** End Testimonial Designation Margin */


$TestimonialRatingIconSize              = isset($block_attributes['TestimonialRatingIconSize']) ? $block_attributes['TestimonialRatingIconSize'] : array('Desktop' => 20, 'Tablet' => 20, 'Mobile' => 20);
$TestimonialRatingIconSizeUnits         = isset($block_attributes['TestimonialRatingIconSizeUnits']) ? $block_attributes['TestimonialRatingIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialRatingIconColorSwitcher     = isset($block_attributes['TestimonialRatingIconColorSwitcher']) ? sanitize_text_field($block_attributes['TestimonialRatingIconColorSwitcher']) : 'normal';
$TestimonialRatingIconColor             = isset($block_attributes['TestimonialRatingIconColor']) ? sanitize_text_field($block_attributes['TestimonialRatingIconColor']) : '#FFB400';
$TestimonialRatingIconHoverColor        = isset($block_attributes['TestimonialRatingIconHoverColor']) ? sanitize_text_field($block_attributes['TestimonialRatingIconHoverColor']) : '#FFB400';

/** Start Testimonial Rating Icon Margin */
$TestimonialRatingIconMarginUnits        = isset($block_attributes['TestimonialRatingIconMarginUnits']) ? $block_attributes['TestimonialRatingIconMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialRatingIconMarginDesktop      = isset($block_attributes['TestimonialRatingIconMarginDesktop']) ? $block_attributes['TestimonialRatingIconMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialRatingIconMarginTablet       = isset($block_attributes['TestimonialRatingIconMarginTablet']) ? $block_attributes['TestimonialRatingIconMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialRatingIconMarginMobile       = isset($block_attributes['TestimonialRatingIconMarginMobile']) ? $block_attributes['TestimonialRatingIconMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialRatingIconMarginLink         = isset($block_attributes['TestimonialRatingIconMarginLink']) ? rest_sanitize_boolean($block_attributes['TestimonialRatingIconMarginLink']) : true;

$testimonialRatingIconDesktopMargin      = $TestimonialRatingIconMarginDesktop['top'] . $TestimonialRatingIconMarginUnits['Desktop'] . ' ' . $TestimonialRatingIconMarginDesktop['right'] . $TestimonialRatingIconMarginUnits['Desktop'] . ' ' . $TestimonialRatingIconMarginDesktop['bottom'] . $TestimonialRatingIconMarginUnits['Desktop'] . ' ' . $TestimonialRatingIconMarginDesktop['left'] . $TestimonialRatingIconMarginUnits['Desktop'];
$testimonialRatingIconTabletMargin       = $TestimonialRatingIconMarginTablet['top'] . $TestimonialRatingIconMarginUnits['Tablet'] . ' ' . $TestimonialRatingIconMarginTablet['right'] . $TestimonialRatingIconMarginUnits['Tablet'] . ' ' . $TestimonialRatingIconMarginTablet['bottom'] . $TestimonialRatingIconMarginUnits['Tablet'] . ' ' . $TestimonialRatingIconMarginTablet['left'] . $TestimonialRatingIconMarginUnits['Tablet'];
$testimonialRatingIconMobileMargin       = $TestimonialRatingIconMarginMobile['top'] . $TestimonialRatingIconMarginUnits['Mobile'] . ' ' . $TestimonialRatingIconMarginMobile['right'] . $TestimonialRatingIconMarginUnits['Mobile'] . ' ' . $TestimonialRatingIconMarginMobile['bottom'] . $TestimonialRatingIconMarginUnits['Mobile'] . ' ' . $TestimonialRatingIconMarginMobile['left'] . $TestimonialRatingIconMarginUnits['Mobile'];
/** End Testimonial Rating Icon Margin */

$TestimonialGlobalZIndex                = isset($block_attributes['TestimonialGlobalZIndex']) ? $block_attributes['TestimonialGlobalZIndex'] : '';
$TestimonialGlobalPaddingUnits          = isset($block_attributes['TestimonialGlobalPaddingUnits']) ? $block_attributes['TestimonialGlobalPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialGlobalPaddingDesktop        = isset($block_attributes['TestimonialGlobalPaddingDesktop']) ? $block_attributes['TestimonialGlobalPaddingDesktop'] : array('top' => '30', 'bottom' => '30', 'left' => '30', 'right' => '30');
$TestimonialGlobalPaddingTablet         = isset($block_attributes['TestimonialGlobalPaddingTablet']) ? $block_attributes['TestimonialGlobalPaddingTablet'] : array('top' => '20', 'bottom' => '20', 'left' => '20', 'right' => '20');
$TestimonialGlobalPaddingMobile         = isset($block_attributes['TestimonialGlobalPaddingMobile']) ? $block_attributes['TestimonialGlobalPaddingMobile'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$TestimonialGlobalPaddingLink           = isset($block_attributes['TestimonialGlobalPaddingLink']) ? $block_attributes['TestimonialGlobalPaddingLink'] : true;

$globalDesktopPadding                   = $TestimonialGlobalPaddingDesktop['top'] . $TestimonialGlobalPaddingUnits['Desktop'] . ' ' . $TestimonialGlobalPaddingDesktop['right'] . $TestimonialGlobalPaddingUnits['Desktop'] . ' ' . $TestimonialGlobalPaddingDesktop['bottom'] . $TestimonialGlobalPaddingUnits['Desktop'] . ' ' . $TestimonialGlobalPaddingDesktop['left'] . $TestimonialGlobalPaddingUnits['Desktop'];
$globalTabletPadding                    = $TestimonialGlobalPaddingTablet['top'] . $TestimonialGlobalPaddingUnits['Tablet'] . ' ' . $TestimonialGlobalPaddingTablet['right'] . $TestimonialGlobalPaddingUnits['Tablet'] . ' ' . $TestimonialGlobalPaddingTablet['bottom'] . $TestimonialGlobalPaddingUnits['Tablet'] . ' ' . $TestimonialGlobalPaddingTablet['left'] . $TestimonialGlobalPaddingUnits['Tablet'];
$globalMobilePadding                    = $TestimonialGlobalPaddingMobile['top'] . $TestimonialGlobalPaddingUnits['Mobile'] . ' ' . $TestimonialGlobalPaddingMobile['right'] . $TestimonialGlobalPaddingUnits['Mobile'] . ' ' . $TestimonialGlobalPaddingMobile['bottom'] . $TestimonialGlobalPaddingUnits['Mobile'] . ' ' . $TestimonialGlobalPaddingMobile['left'] . $TestimonialGlobalPaddingUnits['Mobile'];
/** End Global Padding */

$TestimonialGlobalMarginUnits           = isset($block_attributes['TestimonialGlobalMarginUnits']) ? $block_attributes['TestimonialGlobalMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialGlobalMarginDesktop         = isset($block_attributes['TestimonialGlobalMarginDesktop']) ? $block_attributes['TestimonialGlobalMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialGlobalMarginTablet          = isset($block_attributes['TestimonialGlobalMarginTablet']) ? $block_attributes['TestimonialGlobalMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialGlobalMarginMobile          = isset($block_attributes['TestimonialGlobalMarginMobile']) ? $block_attributes['TestimonialGlobalMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialGlobalMarginLink            = isset($block_attributes['TestimonialGlobalMarginLink']) ? $block_attributes['TestimonialGlobalMarginLink'] : true;
/** End Global Margin */
$globalDesktopMargin                    = $TestimonialGlobalMarginDesktop['top'] . $TestimonialGlobalMarginUnits['Desktop'] . ' ' . $TestimonialGlobalMarginDesktop['right'] . $TestimonialGlobalMarginUnits['Desktop'] . ' ' . $TestimonialGlobalMarginDesktop['bottom'] . $TestimonialGlobalMarginUnits['Desktop'] . ' ' . $TestimonialGlobalMarginDesktop['left'] . $TestimonialGlobalMarginUnits['Desktop'];
$globalTabletMargin                     = $TestimonialGlobalMarginTablet['top'] . $TestimonialGlobalMarginUnits['Tablet'] . ' ' . $TestimonialGlobalMarginTablet['right'] . $TestimonialGlobalMarginUnits['Tablet'] . ' ' . $TestimonialGlobalMarginTablet['bottom'] . $TestimonialGlobalMarginUnits['Tablet'] . ' ' . $TestimonialGlobalMarginTablet['left'] . $TestimonialGlobalMarginUnits['Tablet'];
$globalMobileMargin                     = $TestimonialGlobalMarginMobile['top'] . $TestimonialGlobalMarginUnits['Mobile'] . ' ' . $TestimonialGlobalMarginMobile['right'] . $TestimonialGlobalMarginUnits['Mobile'] . ' ' . $TestimonialGlobalMarginMobile['bottom'] . $TestimonialGlobalMarginUnits['Mobile'] . ' ' . $TestimonialGlobalMarginMobile['left'] . $TestimonialGlobalMarginUnits['Mobile'];
/** End Global Margin */

$TestimonialGlobalBgColorSwitcher       = isset($block_attributes['TestimonialGlobalBgColorSwitcher']) ? $block_attributes['TestimonialGlobalBgColorSwitcher'] : 'normal';
$TestimonialGlobalBgColor               = isset($block_attributes['TestimonialGlobalBgColor']) ? $block_attributes['TestimonialGlobalBgColor'] : '#fefaf3';
$TestimonialGlobalBgHoverColor          = isset($block_attributes['TestimonialGlobalBgHoverColor']) ? $block_attributes['TestimonialGlobalBgHoverColor'] : '';

$TestimonialGlobalBorder                = isset($block_attributes['TestimonialGlobalBorder']) ? $block_attributes['TestimonialGlobalBorder'] : 'none';
$TestimonialGlobalBorderColorSwitcher   = isset($block_attributes['TestimonialGlobalBorderColorSwitcher']) ? $block_attributes['TestimonialGlobalBorderColorSwitcher'] : 'normal';
$TestimonialGlobalBorderColor           = isset($block_attributes['TestimonialGlobalBorderColor']) ? $block_attributes['TestimonialGlobalBorderColor'] : '';
$TestimonialGlobalBorderHoverColor      = isset($block_attributes['TestimonialGlobalBorderHoverColor']) ? $block_attributes['TestimonialGlobalBorderHoverColor'] : '';

$TestimonialGlobalBorderUnits           = isset($block_attributes['TestimonialGlobalBorderUnits']) ? $block_attributes['TestimonialGlobalBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialGlobalBorderDesktop         = isset($block_attributes['TestimonialGlobalBorderDesktop']) ? $block_attributes['TestimonialGlobalBorderDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialGlobalBorderTablet          = isset($block_attributes['TestimonialGlobalBorderTablet']) ? $block_attributes['TestimonialGlobalBorderTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialGlobalBorderMobile          = isset($block_attributes['TestimonialGlobalBorderMobile']) ? $block_attributes['TestimonialGlobalBorderMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$TestimonialGlobalBorderLink            = isset($block_attributes['TestimonialGlobalBorderLink']) ? $block_attributes['TestimonialGlobalBorderLink'] : true;

$globalDesktopBorderWidth               = $TestimonialGlobalBorderDesktop['top'] . $TestimonialGlobalBorderUnits['Desktop'] . ' ' . $TestimonialGlobalBorderDesktop['right'] . $TestimonialGlobalBorderUnits['Desktop'] . ' ' . $TestimonialGlobalBorderDesktop['bottom'] . $TestimonialGlobalBorderUnits['Desktop'] . ' ' . $TestimonialGlobalBorderDesktop['left'] . $TestimonialGlobalBorderUnits['Desktop'];
$globalTabletBorderWidth                = $TestimonialGlobalBorderTablet['top'] . $TestimonialGlobalBorderUnits['Tablet'] . ' ' . $TestimonialGlobalBorderTablet['right'] . $TestimonialGlobalBorderUnits['Tablet'] . ' ' . $TestimonialGlobalBorderTablet['bottom'] . $TestimonialGlobalBorderUnits['Tablet'] . ' ' . $TestimonialGlobalBorderTablet['left'] . $TestimonialGlobalBorderUnits['Tablet'];
$globalMobileBorderWidth                = $TestimonialGlobalBorderMobile['top'] . $TestimonialGlobalBorderUnits['Mobile'] . ' ' . $TestimonialGlobalBorderMobile['right'] . $TestimonialGlobalBorderUnits['Mobile'] . ' ' . $TestimonialGlobalBorderMobile['bottom'] . $TestimonialGlobalBorderUnits['Mobile'] . ' ' . $TestimonialGlobalBorderMobile['left'] . $TestimonialGlobalBorderUnits['Mobile'];
/** End Border */

$TestimonialGlobalBorderRadiusUnits     = isset($block_attributes['TestimonialGlobalBorderRadiusUnits']) ? $block_attributes['TestimonialGlobalBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$TestimonialGlobalBorderRadiusDesktop   = isset($block_attributes['TestimonialGlobalBorderRadiusDesktop']) ? $block_attributes['TestimonialGlobalBorderRadiusDesktop'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$TestimonialGlobalBorderRadiusTablet    = isset($block_attributes['TestimonialGlobalBorderRadiusTablet']) ? $block_attributes['TestimonialGlobalBorderRadiusTablet'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$TestimonialGlobalBorderRadiusMobile    = isset($block_attributes['TestimonialGlobalBorderRadiusMobile']) ? $block_attributes['TestimonialGlobalBorderRadiusMobile'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$TestimonialGlobalBorderRadiusLink      = isset($block_attributes['TestimonialGlobalBorderRadiusLink']) ? $block_attributes['TestimonialGlobalBorderRadiusLink'] : true;

$globalDesktopBorderRadiusWidth         = $TestimonialGlobalBorderRadiusDesktop['top'] . $TestimonialGlobalBorderRadiusUnits['Desktop'] . ' ' . $TestimonialGlobalBorderRadiusDesktop['right'] . $TestimonialGlobalBorderRadiusUnits['Desktop'] . ' ' . $TestimonialGlobalBorderRadiusDesktop['bottom'] . $TestimonialGlobalBorderRadiusUnits['Desktop'] . ' ' . $TestimonialGlobalBorderRadiusDesktop['left'] . $TestimonialGlobalBorderRadiusUnits['Desktop'];
$globalTabletBorderRadiusWidth          = $TestimonialGlobalBorderRadiusTablet['top'] . $TestimonialGlobalBorderRadiusUnits['Tablet'] . ' ' . $TestimonialGlobalBorderRadiusTablet['right'] . $TestimonialGlobalBorderRadiusUnits['Tablet'] . ' ' . $TestimonialGlobalBorderRadiusTablet['bottom'] . $TestimonialGlobalBorderRadiusUnits['Tablet'] . ' ' . $TestimonialGlobalBorderRadiusTablet['left'] . $TestimonialGlobalBorderRadiusUnits['Tablet'];
$globalMobileBorderRadiusWidth          = $TestimonialGlobalBorderRadiusMobile['top'] . $TestimonialGlobalBorderRadiusUnits['Mobile'] . ' ' . $TestimonialGlobalBorderRadiusMobile['right'] . $TestimonialGlobalBorderRadiusUnits['Mobile'] . ' ' . $TestimonialGlobalBorderRadiusMobile['bottom'] . $TestimonialGlobalBorderRadiusUnits['Mobile'] . ' ' . $TestimonialGlobalBorderRadiusMobile['left'] . $TestimonialGlobalBorderRadiusUnits['Mobile'];
/** End Border Radius */

$TestimonialGlobalBoxShadowValues       = isset($block_attributes['TestimonialGlobalBoxShadowValues']) ? $block_attributes['TestimonialGlobalBoxShadowValues'] : [];
$TestimonialGlobalBoxShadowCssValue     = isset($block_attributes['TestimonialGlobalBoxShadowCssValue']) ? $block_attributes['TestimonialGlobalBoxShadowCssValue'] : '';

$TestimonialPresetStyle = isset($block_attributes['TestimonialPresetStyle']) ? $block_attributes['TestimonialPresetStyle'] : 'preset-1';
// Generate CSS content
$css_content = "

     .fb-testimonial-main-wrapper.${blockID} {
        " . ($TestimonialGlobalZIndex ? "z-index: $TestimonialGlobalZIndex;" : "") . "
        position: relative;
    }
    .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
        " . ($TestimonialGlobalBgColor ? "background-color: $TestimonialGlobalBgColor;" : "") . "
        " . ($globalDesktopPadding ? "padding: $globalDesktopPadding;" : "") . "
        " . ($globalDesktopMargin ? "margin: $globalDesktopMargin;" : "") . "
        " . ($TestimonialGlobalBorder ? "border-style: $TestimonialGlobalBorder;" : "") . "
        " . ($globalDesktopBorderWidth ? "border-width: $globalDesktopBorderWidth;" : "") . "
        " . ($globalDesktopBorderRadiusWidth ? "border-radius: $globalDesktopBorderRadiusWidth;" : "") . "
        " . ($TestimonialGlobalBorderColor ? "border-color: $TestimonialGlobalBorderColor;" : "") . "
        " . ($TestimonialGlobalBoxShadowCssValue ? "box-shadow: $TestimonialGlobalBoxShadowCssValue;" : "") . "
        transition: all .3s ease-in-out;
        position: relative;
    }
    .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section:hover {
        " . ($TestimonialGlobalBgHoverColor ? "background-color: $TestimonialGlobalBgHoverColor;" : "") . "
        " . ($TestimonialGlobalBorderHoverColor ? "border-color: $TestimonialGlobalBorderHoverColor;" : "") . "
    }

    .${blockID} .fb-testimonial-image img { 
        " . ($TestimonialImageWidth['Desktop'] && $TestimonialImageWidthUnits['Desktop'] ? "width: {$TestimonialImageWidth['Desktop']}{$TestimonialImageWidthUnits['Desktop']};" : "") . "
        " . ($TestimonialImageWidth['Desktop'] && $TestimonialImageWidthUnits['Desktop'] ? "height: {$TestimonialImageWidth['Desktop']}{$TestimonialImageWidthUnits['Desktop']};" : "") . "
        border-radius: {$testimonialImageDesktopBorderRadiusWidth};
        " . ($testimonialImageDesktopMargin ? "margin: {$testimonialImageDesktopMargin};" : "") . "
        " . ($TestimonialImagePositionSwitcher ? "position: absolute;" : "") . "
        " . ($TestimonialImagePositionSwitcher ? "top: " . ($TestimonialImageTopPosition['Desktop'] && $TestimonialImageTopPositionUnits['Desktop'] ? "{$TestimonialImageTopPosition['Desktop']}{$TestimonialImageTopPositionUnits['Desktop']}" : "0") . ";" : "") . "
        " . ($TestimonialImagePositionSwitcher ? "left: " . ($TestimonialImageLeftPosition['Desktop'] && $TestimonialImageLeftPositionUnits['Desktop'] ? "{$TestimonialImageLeftPosition['Desktop']}{$TestimonialImageLeftPositionUnits['Desktop']}" : "0") . ";" : "") . "
    }

    .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-quote-icon {
        " . ($TestimonialQuoteIconPositionSwitcher ? "position: absolute;" : "") . "
        " . ($TestimonialQuoteIconPositionSwitcher ? "top: " . ($TestimonialQuoteIconTopPosition['Desktop'] && $TestimonialQuoteIconTopPositionUnits['Desktop'] ? "{$TestimonialQuoteIconTopPosition['Desktop']}{$TestimonialQuoteIconTopPositionUnits['Desktop']}" : "0") . ";" : "") . "
        " . ($TestimonialQuoteIconPositionSwitcher ? "left: " . ($TestimonialQuoteIconLeftPosition['Desktop'] && $TestimonialQuoteIconLeftPositionUnits['Desktop'] ? "{$TestimonialQuoteIconLeftPosition['Desktop']}{$TestimonialQuoteIconLeftPositionUnits['Desktop']}" : "0") . ";" : "") . "
        " . ($testimonialQuoteIconDesktopMargin ? "margin: {$testimonialQuoteIconDesktopMargin};" : "") . "
    }


    .${blockID} .fb-testimonial-quote-icon svg {
        " . ($TestimonialQuoteIconSize['Desktop'] && $TestimonialQuoteIconSizeUnits['Desktop'] ? "width: {$TestimonialQuoteIconSize['Desktop']}{$TestimonialQuoteIconSizeUnits['Desktop']};" : "") . "
        " . ($TestimonialQuoteIconSize['Desktop'] && $TestimonialQuoteIconSizeUnits['Desktop'] ? "height: {$TestimonialQuoteIconSize['Desktop']}{$TestimonialQuoteIconSizeUnits['Desktop']};" : "") . "
        fill: {$TestimonialQuoteIconColor};
    }

    .${blockID} .fb-testimonial-quote-icon:hover svg {
        fill: {$TestimonialQuoteIconHoverColor};
    }

    .${blockID} .fb-testimonial-title-container .fb-testimonial-title {
        " . ($TestimonialTitleFontFamily ? "font-family: $TestimonialTitleFontFamily;" : "") . "
        " . ($TestimonialTitleFontSize['Desktop'] && $TestimonialTitleFontSizeUnits['Desktop'] ? "font-size: {$TestimonialTitleFontSize['Desktop']}{$TestimonialTitleFontSizeUnits['Desktop']};" : "") . "
        " . ($TestimonialTitleFontWeight ? "font-weight: $TestimonialTitleFontWeight;" : "") . "
        " . ($TestimonialTitleFontStyle ? "font-style: $TestimonialTitleFontStyle;" : "") . "
        " . ($TestimonialTitleTextTransform ? "text-transform: $TestimonialTitleTextTransform;" : "") . "
        " . ($TestimonialTitleTextDecoration ? "text-decoration: $TestimonialTitleTextDecoration;" : "") . "
        " . ($TestimonialTitleLetterSpacing['Desktop'] && $TestimonialTitleLetterSpacingUnits['Desktop'] ? "letter-spacing: {$TestimonialTitleLetterSpacing['Desktop']}{$TestimonialTitleLetterSpacingUnits['Desktop']};" : "") . "
        " . ($TestimonialTitleLineHeight['Desktop'] && $TestimonialTitleLineHeightUnits['Desktop'] ? "line-height: {$TestimonialTitleLineHeight['Desktop']}{$TestimonialTitleLineHeightUnits['Desktop']};" : "") . "
        " . ($TestimonialTitleColor ? "color: $TestimonialTitleColor;" : "") . "
        " . ($testimonialTitleDesktopMargin ? "margin: {$testimonialTitleDesktopMargin};" : "") . "
    }
    .${blockID} .fb-testimonial-title-container .fb-testimonial-title:hover {
        " . ($TestimonialTitleHoverColor ? "color: $TestimonialTitleHoverColor;" : "") . "
    }

    .${blockID}.fb-testimonial-userdesc-container .fb-user-desc {
        " . ($TestimonialDescFontFamily ? "font-family: $TestimonialDescFontFamily;" : "") . "
        " . ($TestimonialDescFontSize['Desktop'] && $TestimonialDescFontSizeUnits['Desktop'] ? "font-size: {$TestimonialDescFontSize['Desktop']}{$TestimonialDescFontSizeUnits['Desktop']};" : "") . "
        " . ($TestimonialDescFontWeight ? "font-weight: $TestimonialDescFontWeight;" : "") . "
        " . ($TestimonialDescFontStyle ? "font-style: $TestimonialDescFontStyle;" : "") . "
        " . ($TestimonialDescTextTransform ? "text-transform: $TestimonialDescTextTransform;" : "") . "
        " . ($TestimonialDescTextDecoration ? "text-decoration: $TestimonialDescTextDecoration;" : "") . "
        " . ($TestimonialDescLetterSpacing['Desktop'] && $TestimonialDescLetterSpacingUnits['Desktop'] ? "letter-spacing: {$TestimonialDescLetterSpacing['Desktop']}{$TestimonialDescLetterSpacingUnits['Desktop']};" : "") . "
        " . ($TestimonialDescLineHeight['Desktop'] && $TestimonialDescLineHeightUnits['Desktop'] ? "line-height: {$TestimonialDescLineHeight['Desktop']}{$TestimonialDescLineHeightUnits['Desktop']};" : "") . "
        " . ($TestimonialDescColor ? "color: $TestimonialDescColor;" : "") . "
        " . ($testimonialDescDesktopMargin ? "margin: {$testimonialDescDesktopMargin};" : "") . "
    }
    .${blockID}.fb-testimonial-userdesc-container .fb-user-desc:hover {
        " . ($TestimonialDescHoverColor ? "color: $TestimonialDescHoverColor;" : "") . "
    }
    .${blockID} .fb-testimonial-userinfo-container .fb-user {
        " . ($TestimonialAuthorFontFamily ? "font-family: $TestimonialAuthorFontFamily;" : "") . "
        " . ($TestimonialAuthorFontSize['Desktop'] && $TestimonialAuthorFontSizeUnits['Desktop'] ? "font-size: {$TestimonialAuthorFontSize['Desktop']}{$TestimonialAuthorFontSizeUnits['Desktop']};" : "") . "
        " . ($TestimonialAuthorFontWeight ? "font-weight: $TestimonialAuthorFontWeight;" : "") . "
        " . ($TestimonialAuthorFontStyle ? "font-style: $TestimonialAuthorFontStyle;" : "") . "
        " . ($TestimonialAuthorTextTransform ? "text-transform: $TestimonialAuthorTextTransform;" : "") . "
        " . ($TestimonialAuthorTextDecoration ? "text-decoration: $TestimonialAuthorTextDecoration;" : "") . "
        " . ($TestimonialAuthorLetterSpacing['Desktop'] && $TestimonialAuthorLetterSpacingUnits['Desktop'] ? "letter-spacing: {$TestimonialAuthorLetterSpacing['Desktop']}{$TestimonialAuthorLetterSpacingUnits['Desktop']};" : "") . "
        " . ($TestimonialAuthorLineHeight['Desktop'] && $TestimonialAuthorLineHeightUnits['Desktop'] ? "line-height: {$TestimonialAuthorLineHeight['Desktop']}{$TestimonialAuthorLineHeightUnits['Desktop']};" : "") . "
        " . ($TestimonialAuthorColor ? "color: $TestimonialAuthorColor;" : "") . "
        " . ($testimonialAuthorDesktopMargin ? "margin: {$testimonialAuthorDesktopMargin};" : "") . "
    }
    .${blockID} .fb-testimonial-userinfo-container .fb-user:hover {
        " . ($TestimonialAuthorHoverColor ? "color: $TestimonialAuthorHoverColor;" : "") . "
    }

    .${blockID} .fb-testimonial-userinfo-container .fb-user-designation {
        " . ($TestimonialDesignationFontFamily ? "font-family: $TestimonialDesignationFontFamily;" : "") . "
        " . ($TestimonialDesignationFontSize['Desktop'] && $TestimonialDesignationFontSizeUnits['Desktop'] ? "font-size: {$TestimonialDesignationFontSize['Desktop']}{$TestimonialDesignationFontSizeUnits['Desktop']};" : "") . "
        " . ($TestimonialDesignationFontWeight ? "font-weight: $TestimonialDesignationFontWeight;" : "") . "
        " . ($TestimonialDesignationFontStyle ? "font-style: $TestimonialDesignationFontStyle;" : "") . "
        " . ($TestimonialDesignationTextTransform ? "text-transform: $TestimonialDesignationTextTransform;" : "") . "
        " . ($TestimonialDesignationTextDecoration ? "text-decoration: $TestimonialDesignationTextDecoration;" : "") . "
        " . ($TestimonialDesignationLetterSpacing['Desktop'] && $TestimonialDesignationLetterSpacingUnits['Desktop'] ? "letter-spacing: {$TestimonialDesignationLetterSpacing['Desktop']}{$TestimonialDesignationLetterSpacingUnits['Desktop']};" : "") . "
        " . ($TestimonialDesignationLineHeight['Desktop'] && $TestimonialDesignationLineHeightUnits['Desktop'] ? "line-height: {$TestimonialDesignationLineHeight['Desktop']}{$TestimonialDesignationLineHeightUnits['Desktop']};" : "") . "
        " . ($TestimonialDesignationColor ? "color: $TestimonialDesignationColor;" : "") . "
        " . ($testimonialDesignationDesktopMargin ? "margin: {$testimonialDesignationDesktopMargin};" : "") . " 
    }
    .${blockID} .fb-testimonial-userinfo-container .fb-user-designation:hover {
        " . ($TestimonialDesignationHoverColor ? "color: $TestimonialDesignationHoverColor;" : "") . "
    }

    .${blockID} .fb-testimonial-rating {
        " . ($testimonialRatingIconDesktopMargin ? "margin: $testimonialRatingIconDesktopMargin;" : "") . "
        
    }

    .${blockID} .fb-testimonial-rating-icon svg {
        " . ($TestimonialRatingIconSize['Desktop'] && $TestimonialRatingIconSizeUnits['Desktop'] ? "width: {$TestimonialRatingIconSize['Desktop']}{$TestimonialRatingIconSizeUnits['Desktop']};" : "") . "
        " . ($TestimonialRatingIconSize['Desktop'] && $TestimonialRatingIconSizeUnits['Desktop'] ? "height: {$TestimonialRatingIconSize['Desktop']}{$TestimonialRatingIconSizeUnits['Desktop']};" : "") . "
        " . ($TestimonialRatingIconColor ? "fill: $TestimonialRatingIconColor;" : "") . "
    }
    .${blockID} .fb-testimonial-rating-icon:hover svg {
        " . ($TestimonialRatingIconHoverColor ? "fill: $TestimonialRatingIconHoverColor;" : "") . "
    }
    .${blockID} .fb-testimonial-author-container {
        " . ($TestimonialPresetStyle === "preset-5" ? "display: flex; align-items: center; justify-content: space-between;" : "") . "
    }
    .${blockID} .fb-user-desc {
        " . ($TestimonialPresetStyle === "preset-5" ? "padding-top: 24px; color: #fff;" : "") . "
    }

    @media only screen and (max-width: 1024px) {
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section {
            " . ($globalTabletPadding ? "padding: $globalTabletPadding;" : "") . "
            " . ($globalTabletMargin ? "margin: $globalTabletMargin;" : "") . "
            " . ($globalTabletBorderWidth ? "border-width: $globalTabletBorderWidth;" : "") . "
            " . ($globalTabletBorderRadiusWidth ? "border-radius: $globalTabletBorderRadiusWidth;" : "") . "
        }

        .${blockID} .fb-testimonial-quote-icon {
            " . ($TestimonialQuoteIconPositionSwitcher ? "position: absolute;" : "") . "
            " . ($TestimonialQuoteIconPositionSwitcher && $TestimonialQuoteIconTopPosition['Tablet'] && $TestimonialQuoteIconTopPositionUnits['Tablet'] ? "top: {$TestimonialQuoteIconTopPosition['Tablet']}{$TestimonialQuoteIconTopPositionUnits['Tablet']};" : "") . "
            " . ($TestimonialQuoteIconPositionSwitcher && $TestimonialQuoteIconLeftPosition['Tablet'] && $TestimonialQuoteIconLeftPositionUnits['Tablet'] ? "left: {$TestimonialQuoteIconLeftPosition['Tablet']}{$TestimonialQuoteIconLeftPositionUnits['Tablet']};" : "") . "
            " . ($testimonialQuoteIconTabletMargin ? "margin: $testimonialQuoteIconTabletMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-rating {
            " . ($testimonialRatingIconTabletMargin ? `margin: ${testimonialRatingIconTabletMargin};` : "") . "
        }

        .${blockID} .fb-testimonial-image img {
            " . ($TestimonialImageWidth['Tablet'] && $TestimonialImageWidthUnits['Tablet'] ? "width: {$TestimonialImageWidth['Tablet']}{$TestimonialImageWidthUnits['Tablet']};" : "") . "
            " . ($TestimonialImageWidth['Tablet'] && $TestimonialImageWidthUnits['Tablet'] ? "height: {$TestimonialImageWidth['Tablet']}{$TestimonialImageWidthUnits['Tablet']};" : "") . "
            " . ($testimonialImageTabletBorderRadiusWidth ? "border-radius: $testimonialImageTabletBorderRadiusWidth;" : "") . "
            " . ($testimonialImageTabletMargin ? "margin: $testimonialImageTabletMargin;" : "") . "
            " . ($TestimonialImagePositionSwitcher ? "position: absolute;" : "") . "
            " . ($TestimonialImagePositionSwitcher && $TestimonialImageTopPosition['Tablet'] && $TestimonialImageTopPositionUnits['Tablet'] ? "top: {$TestimonialImageTopPosition['Tablet']}{$TestimonialImageTopPositionUnits['Tablet']};" : "") . "
            " . ($TestimonialImagePositionSwitcher && $TestimonialImageLeftPosition['Tablet'] && $TestimonialImageLeftPositionUnits['Tablet'] ? "left: {$TestimonialImageLeftPosition['Tablet']}{$TestimonialImageLeftPositionUnits['Tablet']};" : "") . "
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title {
            " . ($TestimonialTitleFontSize['Tablet'] && $TestimonialTitleFontSizeUnits['Tablet'] ? "font-size: {$TestimonialTitleFontSize['Tablet']}{$TestimonialTitleFontSizeUnits['Tablet']};" : "") . "
            " . ($TestimonialTitleLetterSpacing['Tablet'] && $TestimonialTitleLetterSpacingUnits['Tablet'] ? "letter-spacing: {$TestimonialTitleLetterSpacing['Tablet']}{$TestimonialTitleLetterSpacingUnits['Tablet']};" : "") . "
            " . ($TestimonialTitleLineHeight['Tablet'] && $TestimonialTitleLineHeightUnits['Tablet'] ? "line-height: {$TestimonialTitleLineHeight['Tablet']}{$TestimonialTitleLineHeightUnits['Tablet']};" : "") . "
            " . ($testimonialTitleTabletMargin ? "margin: $testimonialTitleTabletMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc {
            " . ($TestimonialDescFontSize['Tablet'] && $TestimonialDescFontSizeUnits['Tablet'] ? "font-size: {$TestimonialDescFontSize['Tablet']}{$TestimonialDescFontSizeUnits['Tablet']};" : "") . "
            " . ($TestimonialDescLetterSpacing['Tablet'] && $TestimonialDescLetterSpacingUnits['Tablet'] ? "letter-spacing: {$TestimonialDescLetterSpacing['Tablet']}{$TestimonialDescLetterSpacingUnits['Tablet']};" : "") . "
            " . ($TestimonialDescLineHeight['Tablet'] && $TestimonialDescLineHeightUnits['Tablet'] ? "line-height: {$TestimonialDescLineHeight['Tablet']}{$TestimonialDescLineHeightUnits['Tablet']};" : "") . "
            " . ($testimonialDescTabletMargin ? "margin: $testimonialDescTabletMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user {
            " . ($TestimonialAuthorFontSize['Tablet'] && $TestimonialAuthorFontSizeUnits['Tablet'] ? "font-size: {$TestimonialAuthorFontSize['Tablet']}{$TestimonialAuthorFontSizeUnits['Tablet']};" : "") . "
            " . ($TestimonialAuthorLetterSpacing['Tablet'] && $TestimonialAuthorLetterSpacingUnits['Tablet'] ? "letter-spacing: {$TestimonialAuthorLetterSpacing['Tablet']}{$TestimonialAuthorLetterSpacingUnits['Tablet']};" : "") . "
            " . ($TestimonialAuthorLineHeight['Tablet'] && $TestimonialAuthorLineHeightUnits['Tablet'] ? "line-height: {$TestimonialAuthorLineHeight['Tablet']}{$TestimonialAuthorLineHeightUnits['Tablet']};" : "") . "
            " . ($testimonialAuthorTabletMargin ? "margin: $testimonialAuthorTabletMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation {
            " . ($TestimonialDesignationFontSize['Tablet'] && $TestimonialDesignationFontSizeUnits['Tablet'] ? "font-size: {$TestimonialDesignationFontSize['Tablet']}{$TestimonialDesignationFontSizeUnits['Tablet']};" : "") . "
            " . ($TestimonialDesignationLetterSpacing['Tablet'] && $TestimonialDesignationLetterSpacingUnits['Tablet'] ? "letter-spacing: {$TestimonialDesignationLetterSpacing['Tablet']}{$TestimonialDesignationLetterSpacingUnits['Tablet']};" : "") . "
            " . ($TestimonialDesignationLineHeight['Tablet'] && $TestimonialDesignationLineHeightUnits['Tablet'] ? "line-height: {$TestimonialDesignationLineHeight['Tablet']}{$TestimonialDesignationLineHeightUnits['Tablet']};" : "") . "
            " . ($testimonialDesignationTabletMargin ? "margin: $testimonialDesignationTabletMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-rating-icon svg {
            " . ($testimonialRatingIconTabletMargin ? "margin: $testimonialRatingIconTabletMargin;" : "") . "
        }
    }

    @media only screen and (max-width: 767px) {
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section {
            " . ($globalMobilePadding ? "padding: $globalMobilePadding;" : "") . "
            " . ($globalMobileMargin ? "margin: $globalMobileMargin;" : "") . "
            " . ($globalMobileBorderWidth ? "border-width: $globalMobileBorderWidth;" : "") . "
            " . ($globalMobileBorderRadiusWidth ? "border-radius: $globalMobileBorderRadiusWidth;" : "") . "
        }
        .${blockID} .fb-testimonial-rating {
            " . ($testimonialRatingIconMobileMargin ? "margin: $testimonialRatingIconMobileMargin;" : "") . "
        }
        .${blockID} .fb-testimonial-quote-icon {
            " . ($TestimonialQuoteIconPositionSwitcher ? "position: absolute;" : "") . "
            " . ($TestimonialQuoteIconPositionSwitcher && $TestimonialQuoteIconTopPosition['Mobile'] && $TestimonialQuoteIconTopPositionUnits['Mobile'] ? "top: {$TestimonialQuoteIconTopPosition['Mobile']}{$TestimonialQuoteIconTopPositionUnits['Mobile']};" : "") . "
            " . ($TestimonialQuoteIconPositionSwitcher && $TestimonialQuoteIconLeftPosition['Mobile'] && $TestimonialQuoteIconLeftPositionUnits['Mobile'] ? "left: {$TestimonialQuoteIconLeftPosition['Mobile']}{$TestimonialQuoteIconLeftPositionUnits['Mobile']};" : "") . "
            " . ($testimonialQuoteIconMobileMargin ? "margin: $testimonialQuoteIconMobileMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-image img {
            " . ($TestimonialImageWidth['Mobile'] && $TestimonialImageWidthUnits['Mobile'] ? "width: {$TestimonialImageWidth['Mobile']}{$TestimonialImageWidthUnits['Mobile']};" : "") . "
            " . ($TestimonialImageWidth['Mobile'] && $TestimonialImageWidthUnits['Mobile'] ? "height: {$TestimonialImageWidth['Mobile']}{$TestimonialImageWidthUnits['Mobile']};" : "") . "
            " . ($testimonialImageMobileBorderRadiusWidth ? "border-radius: $testimonialImageMobileBorderRadiusWidth;" : "") . "
            " . ($testimonialImageMobileMargin ? "margin: $testimonialImageMobileMargin;" : "") . "
            " . ($TestimonialImagePositionSwitcher ? "position: absolute;" : "") . "
            " . ($TestimonialImagePositionSwitcher && $TestimonialImageTopPosition['Mobile'] && $TestimonialImageTopPositionUnits['Mobile'] ? "top: {$TestimonialImageTopPosition['Mobile']}{$TestimonialImageTopPositionUnits['Mobile']};" : "") . "
            " . ($TestimonialImagePositionSwitcher && $TestimonialImageLeftPosition['Mobile'] && $TestimonialImageLeftPositionUnits['Mobile'] ? "left: {$TestimonialImageLeftPosition['Mobile']}{$TestimonialImageLeftPositionUnits['Mobile']};" : "") . "
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title {
            " . ($TestimonialTitleFontSize['Mobile'] && $TestimonialTitleFontSizeUnits['Mobile'] ? "font-size: {$TestimonialTitleFontSize['Mobile']}{$TestimonialTitleFontSizeUnits['Mobile']};" : "") . "
            " . ($TestimonialTitleLetterSpacing['Mobile'] && $TestimonialTitleLetterSpacingUnits['Mobile'] ? "letter-spacing: {$TestimonialTitleLetterSpacing['Mobile']}{$TestimonialTitleLetterSpacingUnits['Mobile']};" : "") . "
            " . ($TestimonialTitleLineHeight['Mobile'] && $TestimonialTitleLineHeightUnits['Mobile'] ? "line-height: {$TestimonialTitleLineHeight['Mobile']}{$TestimonialTitleLineHeightUnits['Mobile']};" : "") . "
            " . ($testimonialTitleMobileMargin ? "margin: $testimonialTitleMobileMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc {
            " . ($TestimonialDescFontSize['Mobile'] && $TestimonialDescFontSizeUnits['Mobile'] ? "font-size: {$TestimonialDescFontSize['Mobile']}{$TestimonialDescFontSizeUnits['Mobile']};" : "") . "
            " . ($TestimonialDescLetterSpacing['Mobile'] && $TestimonialDescLetterSpacingUnits['Mobile'] ? "letter-spacing: {$TestimonialDescLetterSpacing['Mobile']}{$TestimonialDescLetterSpacingUnits['Mobile']};" : "") . "
            " . ($TestimonialDescLineHeight['Mobile'] && $TestimonialDescLineHeightUnits['Mobile'] ? "line-height: {$TestimonialDescLineHeight['Mobile']}{$TestimonialDescLineHeightUnits['Mobile']};" : "") . "
            " . ($testimonialDescMobileMargin ? "margin: $testimonialDescMobileMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user {
            " . ($TestimonialAuthorFontSize['Mobile'] && $TestimonialAuthorFontSizeUnits['Mobile'] ? "font-size: {$TestimonialAuthorFontSize['Mobile']}{$TestimonialAuthorFontSizeUnits['Mobile']};" : "") . "
            " . ($TestimonialAuthorLetterSpacing['Mobile'] && $TestimonialAuthorLetterSpacingUnits['Mobile'] ? "letter-spacing: {$TestimonialAuthorLetterSpacing['Mobile']}{$TestimonialAuthorLetterSpacingUnits['Mobile']};" : "") . "
            " . ($TestimonialAuthorLineHeight['Mobile'] && $TestimonialAuthorLineHeightUnits['Mobile'] ? "line-height: {$TestimonialAuthorLineHeight['Mobile']}{$TestimonialAuthorLineHeightUnits['Mobile']};" : "") . "
            " . ($testimonialAuthorMobileMargin ? "margin: $testimonialAuthorMobileMargin;" : "") . "
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation {
            " . ($TestimonialDesignationFontSize['Mobile'] && $TestimonialDesignationFontSizeUnits['Mobile'] ? "font-size: {$TestimonialDesignationFontSize['Mobile']}{$TestimonialDesignationFontSizeUnits['Mobile']};" : "") . "
            " . ($TestimonialDesignationLetterSpacing['Mobile'] && $TestimonialDesignationLetterSpacingUnits['Mobile'] ? "letter-spacing: {$TestimonialDesignationLetterSpacing['Mobile']}{$TestimonialDesignationLetterSpacingUnits['Mobile']};" : "") . "
            " . ($TestimonialDesignationLineHeight['Mobile'] && $TestimonialDesignationLineHeightUnits['Mobile'] ? "line-height: {$TestimonialDesignationLineHeight['Mobile']}{$TestimonialDesignationLineHeightUnits['Mobile']};" : "") . "
            " . ($testimonialDesignationMobileMargin ? "margin: $testimonialDesignationMobileMargin;" : "") . "
        }
    }
}


";

// Enqueue style for frontend
EnqueueBlocksCss::enqueue_block_asset($css_content, $single_block['slug'], $blockID);