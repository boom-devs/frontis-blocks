<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;
// Extract the block attributes
$block_attributes = $block['attrs'];
$blockId = isset($block_attributes['blockId']) ? sanitize_text_field($block_attributes['blockId']) : '';


/** Header Background Colors */
$pricingHeaderBgColor = isset($block_attributes['pricingHeaderBgColor']) ? sanitize_hex_color($block_attributes['pricingHeaderBgColor']) : '#399CFF';
$pricingHeaderBgHoverColor = isset($block_attributes['pricingHeaderBgHoverColor']) ? sanitize_hex_color($block_attributes['pricingHeaderBgHoverColor']) : '';

/** Start Header Padding */
$pricingHeaderPaddingUnits = isset($block_attributes['pricingHeaderPaddingUnits']) ? $block_attributes['pricingHeaderPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingHeaderDesktopPadding = isset($block_attributes['pricingHeaderDesktopPadding']) ? $block_attributes['pricingHeaderDesktopPadding'] : array('top' => '30', 'bottom' => '30', 'left' => '30', 'right' => '30');
$pricingHeaderTabletPadding = isset($block_attributes['pricingHeaderTabletPadding']) ? $block_attributes['pricingHeaderTabletPadding'] : array('top' => '30', 'bottom' => '30', 'left' => '30', 'right' => '30');
$pricingHeaderMobilePadding = isset($block_attributes['pricingHeaderMobilePadding']) ? $block_attributes['pricingHeaderMobilePadding'] : array('top' => '20', 'bottom' => '20', 'left' => '20', 'right' => '20');
// Construct padding strings for each device type
$headerDesktopPadding = $pricingHeaderDesktopPadding['top'] . $pricingHeaderPaddingUnits['Desktop'] . ' ' . $pricingHeaderDesktopPadding['right'] . $pricingHeaderPaddingUnits['Desktop'] . ' ' . $pricingHeaderDesktopPadding['bottom'] . $pricingHeaderPaddingUnits['Desktop'] . ' ' . $pricingHeaderDesktopPadding['left'] . $pricingHeaderPaddingUnits['Desktop'];
$headerTabletPadding = $pricingHeaderTabletPadding['top'] . $pricingHeaderPaddingUnits['Tablet'] . ' ' . $pricingHeaderTabletPadding['right'] . $pricingHeaderPaddingUnits['Tablet'] . ' ' . $pricingHeaderTabletPadding['bottom'] . $pricingHeaderPaddingUnits['Tablet'] . ' ' . $pricingHeaderTabletPadding['left'] . $pricingHeaderPaddingUnits['Tablet'];
$headerMobilePadding = $pricingHeaderMobilePadding['top'] . $pricingHeaderPaddingUnits['Mobile'] . ' ' . $pricingHeaderMobilePadding['right'] . $pricingHeaderPaddingUnits['Mobile'] . ' ' . $pricingHeaderMobilePadding['bottom'] . $pricingHeaderPaddingUnits['Mobile'] . ' ' . $pricingHeaderMobilePadding['left'] . $pricingHeaderPaddingUnits['Mobile'];
/** End Header Padding */

/** Start Header Border */
$pricingHeaderBorder = isset($block_attributes['pricingHeaderBorder']) ? sanitize_text_field($block_attributes['pricingHeaderBorder']) : 'none';
$pricingHeaderBorderColor = isset($block_attributes['pricingHeaderBorderColor']) ? sanitize_hex_color($block_attributes['pricingHeaderBorderColor']) : '';
$pricingHeaderBorderHoverColor = isset($block_attributes['pricingHeaderBorderHoverColor']) ? sanitize_hex_color($block_attributes['pricingHeaderBorderHoverColor']) : '';
/** Start Header Border Units */
$pricingHeaderBorderUnits = isset($block_attributes['pricingHeaderBorderUnits']) ? $block_attributes['pricingHeaderBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingHeaderBorderDesktop = isset($block_attributes['pricingHeaderBorderDesktop']) ? $block_attributes['pricingHeaderBorderDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$pricingHeaderBorderTablet = isset($block_attributes['pricingHeaderBorderTablet']) ? $block_attributes['pricingHeaderBorderTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$pricingHeaderBorderMobile = isset($block_attributes['pricingHeaderBorderMobile']) ? $block_attributes['pricingHeaderBorderMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');

// Construct border width strings for each device type
$headerDesktopBorderWidth = $pricingHeaderBorderDesktop['top'] . $pricingHeaderBorderUnits['Desktop'] . ' ' . $pricingHeaderBorderDesktop['right'] . $pricingHeaderBorderUnits['Desktop'] . ' ' . $pricingHeaderBorderDesktop['bottom'] . $pricingHeaderBorderUnits['Desktop'] . ' ' . $pricingHeaderBorderDesktop['left'] . $pricingHeaderBorderUnits['Desktop'];
$headerTabletBorderWidth = $pricingHeaderBorderTablet['top'] . $pricingHeaderBorderUnits['Tablet'] . ' ' . $pricingHeaderBorderTablet['right'] . $pricingHeaderBorderUnits['Tablet'] . ' ' . $pricingHeaderBorderTablet['bottom'] . $pricingHeaderBorderUnits['Tablet'] . ' ' . $pricingHeaderBorderTablet['left'] . $pricingHeaderBorderUnits['Tablet'];
$headerMobileBorderWidth = $pricingHeaderBorderMobile['top'] . $pricingHeaderBorderUnits['Mobile'] . ' ' . $pricingHeaderBorderMobile['right'] . $pricingHeaderBorderUnits['Mobile'] . ' ' . $pricingHeaderBorderMobile['bottom'] . $pricingHeaderBorderUnits['Mobile'] . ' ' . $pricingHeaderBorderMobile['left'] . $pricingHeaderBorderUnits['Mobile'];
/** End Header Border */

/** Start Header Border Radius */
$pricingHeaderBorderRadiusUnits = isset($block_attributes['pricingHeaderBorderRadiusUnits']) ? $block_attributes['pricingHeaderBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingHeaderBorderRadiusDesktop = isset($block_attributes['pricingHeaderBorderRadiusDesktop']) ? $block_attributes['pricingHeaderBorderRadiusDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$pricingHeaderBorderRadiusTablet = isset($block_attributes['pricingHeaderBorderRadiusTablet']) ? $block_attributes['pricingHeaderBorderRadiusTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$pricingHeaderBorderRadiusMobile = isset($block_attributes['pricingHeaderBorderRadiusMobile']) ? $block_attributes['pricingHeaderBorderRadiusMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
// Construct border radius strings for each device type
$headerDesktopBorderRadiusWidth = $pricingHeaderBorderRadiusDesktop['top'] . $pricingHeaderBorderRadiusUnits['Desktop'] . ' ' . $pricingHeaderBorderRadiusDesktop['right'] . $pricingHeaderBorderRadiusUnits['Desktop'] . ' ' . $pricingHeaderBorderRadiusDesktop['bottom'] . $pricingHeaderBorderRadiusUnits['Desktop'] . ' ' . $pricingHeaderBorderRadiusDesktop['left'] . $pricingHeaderBorderRadiusUnits['Desktop'];
$headerTabletBorderRadiusWidth = $pricingHeaderBorderRadiusTablet['top'] . $pricingHeaderBorderRadiusUnits['Tablet'] . ' ' . $pricingHeaderBorderRadiusTablet['right'] . $pricingHeaderBorderRadiusUnits['Tablet'] . ' ' . $pricingHeaderBorderRadiusTablet['bottom'] . $pricingHeaderBorderRadiusUnits['Tablet'] . ' ' . $pricingHeaderBorderRadiusTablet['left'] . $pricingHeaderBorderRadiusUnits['Tablet'];
$headerMobileBorderRadiusWidth = $pricingHeaderBorderRadiusMobile['top'] . $pricingHeaderBorderRadiusUnits['Mobile'] . ' ' . $pricingHeaderBorderRadiusMobile['right'] . $pricingHeaderBorderRadiusUnits['Mobile'] . ' ' . $pricingHeaderBorderRadiusMobile['bottom'] . $pricingHeaderBorderRadiusUnits['Mobile'] . ' ' . $pricingHeaderBorderRadiusMobile['left'] . $pricingHeaderBorderRadiusUnits['Mobile'];
/** End Header Border Radius */

/** Start Icon Style */
$pricingIconAlignment = isset($block_attributes['pricingIconAlignment']) ? sanitize_text_field($block_attributes['pricingIconAlignment']) : 'center';
$priceIconColor = isset($block_attributes['priceIconColor']) ? sanitize_hex_color($block_attributes['priceIconColor']) : '#fff';
$priceIconHoverColor = isset($block_attributes['priceIconHoverColor']) ? sanitize_hex_color($block_attributes['priceIconHoverColor']) : '';
$priceIconBgColor = isset($block_attributes['priceIconBgColor']) ? sanitize_hex_color($block_attributes['priceIconBgColor']) : '#F72585';
$priceIconBgHoverColor = isset($block_attributes['priceIconBgHoverColor']) ? sanitize_hex_color($block_attributes['priceIconBgHoverColor']) : '';
$priceIconSize = isset($block_attributes['priceIconSize']) ? $block_attributes['priceIconSize'] : array('Desktop' => '50', 'Tablet' => '50', 'Mobile' => '50');
$priceIconSizeUnits = isset($block_attributes['priceIconSizeUnits']) ? $block_attributes['priceIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceIconBgSize = isset($block_attributes['priceIconBgSize']) ? $block_attributes['priceIconBgSize'] : array('Desktop' => '80', 'Tablet' => '80', 'Mobile' => '80');
$priceIconBgSizeUnits = isset($block_attributes['priceIconBgSizeUnits']) ? $block_attributes['priceIconBgSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

/** Start Icon Border */
$priceIconBorder = isset($block_attributes['priceIconBorder']) ? sanitize_text_field($block_attributes['priceIconBorder']) : 'none';
$priceIconBorderColor = isset($block_attributes['priceIconBorderColor']) ? sanitize_hex_color($block_attributes['priceIconBorderColor']) : '';
$priceIconBorderHoverColor = isset($block_attributes['priceIconBorderHoverColor']) ? sanitize_hex_color($block_attributes['priceIconBorderHoverColor']) : '';

/** Start Icon Border Units */
$priceIconBorderUnits = isset($block_attributes['priceIconBorderUnits']) ? $block_attributes['priceIconBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceIconBorderDesktop = isset($block_attributes['priceIconBorderDesktop']) ? $block_attributes['priceIconBorderDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceIconBorderTablet = isset($block_attributes['priceIconBorderTablet']) ? $block_attributes['priceIconBorderTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceIconBorderMobile = isset($block_attributes['priceIconBorderMobile']) ? $block_attributes['priceIconBorderMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** End Icon Border */

// Construct border width strings for each device type
$priceIconDesktopBorderWidth = $priceIconBorderDesktop['top'] . $priceIconBorderUnits['Desktop'] . ' ' . $priceIconBorderDesktop['right'] . $priceIconBorderUnits['Desktop'] . ' ' . $priceIconBorderDesktop['bottom'] . $priceIconBorderUnits['Desktop'] . ' ' . $priceIconBorderDesktop['left'] . $priceIconBorderUnits['Desktop'];
$priceIconTabletBorderWidth = $priceIconBorderTablet['top'] . $priceIconBorderUnits['Tablet'] . ' ' . $priceIconBorderTablet['right'] . $priceIconBorderUnits['Tablet'] . ' ' . $priceIconBorderTablet['bottom'] . $priceIconBorderUnits['Tablet'] . ' ' . $priceIconBorderTablet['left'] . $priceIconBorderUnits['Tablet'];
$priceIconMobileBorderWidth = $priceIconBorderMobile['top'] . $priceIconBorderUnits['Mobile'] . ' ' . $priceIconBorderMobile['right'] . $priceIconBorderUnits['Mobile'] . ' ' . $priceIconBorderMobile['bottom'] . $priceIconBorderUnits['Mobile'] . ' ' . $priceIconBorderMobile['left'] . $priceIconBorderUnits['Mobile'];

/** Start Icon Border Radius */
$priceIconBorderRadiusUnits = isset($block_attributes['priceIconBorderRadiusUnits']) ? $block_attributes['priceIconBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceIconBorderRadiusDesktop = isset($block_attributes['priceIconBorderRadiusDesktop']) ? $block_attributes['priceIconBorderRadiusDesktop'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$priceIconBorderRadiusTablet = isset($block_attributes['priceIconBorderRadiusTablet']) ? $block_attributes['priceIconBorderRadiusTablet'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$priceIconBorderRadiusMobile = isset($block_attributes['priceIconBorderRadiusMobile']) ? $block_attributes['priceIconBorderRadiusMobile'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
// Construct border radius strings for each device type
$priceIconDesktopBorderRadiusWidth = $priceIconBorderRadiusDesktop['top'] . $priceIconBorderRadiusUnits['Desktop'] . ' ' . $priceIconBorderRadiusDesktop['right'] . $priceIconBorderRadiusUnits['Desktop'] . ' ' . $priceIconBorderRadiusDesktop['bottom'] . $priceIconBorderRadiusUnits['Desktop'] . ' ' . $priceIconBorderRadiusDesktop['left'] . $priceIconBorderRadiusUnits['Desktop'];
$priceIconTabletBorderRadiusWidth = $priceIconBorderRadiusTablet['top'] . $priceIconBorderRadiusUnits['Tablet'] . ' ' . $priceIconBorderRadiusTablet['right'] . $priceIconBorderRadiusUnits['Tablet'] . ' ' . $priceIconBorderRadiusTablet['bottom'] . $priceIconBorderRadiusUnits['Tablet'] . ' ' . $priceIconBorderRadiusTablet['left'] . $priceIconBorderRadiusUnits['Tablet'];
$priceIconMobileBorderRadiusWidth = $priceIconBorderRadiusMobile['top'] . $priceIconBorderRadiusUnits['Mobile'] . ' ' . $priceIconBorderRadiusMobile['right'] . $priceIconBorderRadiusUnits['Mobile'] . ' ' . $priceIconBorderRadiusMobile['bottom'] . $priceIconBorderRadiusUnits['Mobile'] . ' ' . $priceIconBorderRadiusMobile['left'] . $priceIconBorderRadiusUnits['Mobile'];
/** End Icon Border Radius */
/** End Icon Style */

/** Start Pricing Style */
// Pricing alignment
$pricingAlignment = isset($block_attributes['pricingAlignment']) ? sanitize_text_field($block_attributes['pricingAlignment']) : 'center';

// Normal pricing styles
$normalPricingFontFamily = isset($block_attributes['normalPricingFontFamily']) ? sanitize_text_field($block_attributes['normalPricingFontFamily']) : 'inherit';
$normalPricingFontSize = isset($block_attributes['normalPricingFontSize']) ? $block_attributes['normalPricingFontSize'] : array('Desktop' => '40', 'Tablet' => '40', 'Mobile' => '20');
$normalPricingFontSizeUnits = isset($block_attributes['normalPricingFontSizeUnits']) ? $block_attributes['normalPricingFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$normalPricingFontWeight = isset($block_attributes['normalPricingFontWeight']) ? sanitize_text_field($block_attributes['normalPricingFontWeight']) : '700';
$normalPricingFontStyle = isset($block_attributes['normalPricingFontStyle']) ? sanitize_text_field($block_attributes['normalPricingFontStyle']) : '';
$normalPricingTextTransform = isset($block_attributes['normalPricingTextTransform']) ? sanitize_text_field($block_attributes['normalPricingTextTransform']) : '';
$normalPricingTextDecoration = isset($block_attributes['normalPricingTextDecoration']) ? sanitize_text_field($block_attributes['normalPricingTextDecoration']) : '';
$normalPricingLetterSpacing = isset($block_attributes['normalPricingLetterSpacing']) ? $block_attributes['normalPricingLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$normalPricingLetterSpacingUnits = isset($block_attributes['normalPricingLetterSpacingUnits']) ? $block_attributes['normalPricingLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$normalPricingLineHeight = isset($block_attributes['normalPricingLineHeight']) ? $block_attributes['normalPricingLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$normalPricingLineHeightUnits = isset($block_attributes['normalPricingLineHeightUnits']) ? $block_attributes['normalPricingLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$normalPricingColor = isset($block_attributes['normalPricingColor']) ? sanitize_hex_color($block_attributes['normalPricingColor']) : '#fff';
$normalPricingHoverColor = isset($block_attributes['normalPricingHoverColor']) ? sanitize_hex_color($block_attributes['normalPricingHoverColor']) : '';

// Sale pricing styles
$salePricingFontFamily = isset($block_attributes['salePricingFontFamily']) ? sanitize_text_field($block_attributes['salePricingFontFamily']) : '';
$salePricingFontSize = isset($block_attributes['salePricingFontSize']) ? $block_attributes['salePricingFontSize'] : array('Desktop' => '40', 'Tablet' => '40', 'Mobile' => '20');
$salePricingFontSizeUnits = isset($block_attributes['salePricingFontSizeUnits']) ? $block_attributes['salePricingFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$salePricingFontWeight = isset($block_attributes['salePricingFontWeight']) ? sanitize_text_field($block_attributes['salePricingFontWeight']) : '700';
$salePricingFontStyle = isset($block_attributes['salePricingFontStyle']) ? sanitize_text_field($block_attributes['salePricingFontStyle']) : '';
$salePricingTextTransform = isset($block_attributes['salePricingTextTransform']) ? sanitize_text_field($block_attributes['salePricingTextTransform']) : '';
$salePricingTextDecoration = isset($block_attributes['salePricingTextDecoration']) ? sanitize_text_field($block_attributes['salePricingTextDecoration']) : '';
$salePricingLetterSpacing = isset($block_attributes['salePricingLetterSpacing']) ? $block_attributes['salePricingLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$salePricingLetterSpacingUnits = isset($block_attributes['salePricingLetterSpacingUnits']) ? $block_attributes['salePricingLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$salePricingLineHeight = isset($block_attributes['salePricingLineHeight']) ? $block_attributes['salePricingLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$salePricingLineHeightUnits = isset($block_attributes['salePricingLineHeightUnits']) ? $block_attributes['salePricingLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$salePricingColor = isset($block_attributes['salePricingColor']) ? sanitize_hex_color($block_attributes['salePricingColor']) : '#000';
$salePricingHoverColor = isset($block_attributes['salePricingHoverColor']) ? sanitize_hex_color($block_attributes['salePricingHoverColor']) : '';

// Price currency styles
$priceCurrencyFontFamily = isset($block_attributes['priceCurrencyFontFamily']) ? sanitize_text_field($block_attributes['priceCurrencyFontFamily']) : 'inherit';
$priceCurrencyFontSize = isset($block_attributes['priceCurrencyFontSize']) ? $block_attributes['priceCurrencyFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceCurrencyFontSizeUnits = isset($block_attributes['priceCurrencyFontSizeUnits']) ? $block_attributes['priceCurrencyFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceCurrencyFontWeight = isset($block_attributes['priceCurrencyFontWeight']) ? sanitize_text_field($block_attributes['priceCurrencyFontWeight']) : '';
$priceCurrencyFontStyle = isset($block_attributes['priceCurrencyFontStyle']) ? sanitize_text_field($block_attributes['priceCurrencyFontStyle']) : '';
$priceCurrencyTextTransform = isset($block_attributes['priceCurrencyTextTransform']) ? sanitize_text_field($block_attributes['priceCurrencyTextTransform']) : '';
$priceCurrencyTextDecoration = isset($block_attributes['priceCurrencyTextDecoration']) ? sanitize_text_field($block_attributes['priceCurrencyTextDecoration']) : '';
$priceCurrencyLetterSpacing = isset($block_attributes['priceCurrencyLetterSpacing']) ? $block_attributes['priceCurrencyLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceCurrencyLetterSpacingUnits = isset($block_attributes['priceCurrencyLetterSpacingUnits']) ? $block_attributes['priceCurrencyLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceCurrencyLineHeight = isset($block_attributes['priceCurrencyLineHeight']) ? $block_attributes['priceCurrencyLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceCurrencyLineHeightUnits = isset($block_attributes['priceCurrencyLineHeightUnits']) ? $block_attributes['priceCurrencyLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceCurrencyColor = isset($block_attributes['priceCurrencyColor']) ? sanitize_hex_color($block_attributes['priceCurrencyColor']) : '';
$priceCurrencyHoverColor = isset($block_attributes['priceCurrencyHoverColor']) ? sanitize_hex_color($block_attributes['priceCurrencyHoverColor']) : '';

// Price period styles
$pricePeriodFontFamily = isset($block_attributes['pricePeriodFontFamily']) ? sanitize_text_field($block_attributes['pricePeriodFontFamily']) : 'inherit';
$pricePeriodFontSize = isset($block_attributes['pricePeriodFontSize']) ? $block_attributes['pricePeriodFontSize'] : array('Desktop' => '16', 'Tablet' => '16', 'Mobile' => '16');
$pricePeriodFontSizeUnits = isset($block_attributes['pricePeriodFontSizeUnits']) ? $block_attributes['pricePeriodFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricePeriodFontWeight = isset($block_attributes['pricePeriodFontWeight']) ? sanitize_text_field($block_attributes['pricePeriodFontWeight']) : '400';
$pricePeriodFontStyle = isset($block_attributes['pricePeriodFontStyle']) ? sanitize_text_field($block_attributes['pricePeriodFontStyle']) : '';
$pricePeriodTextTransform = isset($block_attributes['pricePeriodTextTransform']) ? sanitize_text_field($block_attributes['pricePeriodTextTransform']) : '';
$pricePeriodTextDecoration = isset($block_attributes['pricePeriodTextDecoration']) ? sanitize_text_field($block_attributes['pricePeriodTextDecoration']) : '';
$pricePeriodLetterSpacing = isset($block_attributes['pricePeriodLetterSpacing']) ? $block_attributes['pricePeriodLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricePeriodLetterSpacingUnits = isset($block_attributes['pricePeriodLetterSpacingUnits']) ? $block_attributes['pricePeriodLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricePeriodLineHeight = isset($block_attributes['pricePeriodLineHeight']) ? $block_attributes['pricePeriodLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricePeriodLineHeightUnits = isset($block_attributes['pricePeriodLineHeightUnits']) ? $block_attributes['pricePeriodLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricePeriodColor = isset($block_attributes['pricePeriodColor']) ? sanitize_hex_color($block_attributes['pricePeriodColor']) : '#fff';
$pricePeriodHoverColor = isset($block_attributes['pricePeriodHoverColor']) ? sanitize_hex_color($block_attributes['pricePeriodHoverColor']) : '';

// Pricing price gap
$priceingPriceGap = isset($block_attributes['priceingPriceGap']) ? $block_attributes['priceingPriceGap'] : array('Desktop' => '10', 'Tablet' => '10', 'Mobile' => '10');
$priceingPriceGapUnits = isset($block_attributes['priceingPriceGapUnits']) ? $block_attributes['priceingPriceGapUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
/** End Pricing Style */

/**Start Title and Subtitle Style */
$pricingTitleColor = isset($block_attributes['pricingTitleColor']) ? sanitize_hex_color($block_attributes['pricingTitleColor']) : '#fff';
$pricingTitleHoverColor = isset($block_attributes['pricingTitleHoverColor']) ? sanitize_hex_color($block_attributes['pricingTitleHoverColor']) : '';
$pricingTitleFontFamily = isset($block_attributes['pricingTitleFontFamily']) ? sanitize_text_field($block_attributes['pricingTitleFontFamily']) : '';
$pricingTitleFontSize = isset($block_attributes['pricingTitleFontSize']) ? $block_attributes['pricingTitleFontSize'] : array('Desktop' => '30', 'Tablet' => '30', 'Mobile' => '20');
$pricingTitleFontSizeUnits = isset($block_attributes['pricingTitleFontSizeUnits']) ? $block_attributes['pricingTitleFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingTitleFontWeight = isset($block_attributes['pricingTitleFontWeight']) ? sanitize_text_field($block_attributes['pricingTitleFontWeight']) : '700';
$pricingTitleFontStyle = isset($block_attributes['pricingTitleFontStyle']) ? sanitize_text_field($block_attributes['pricingTitleFontStyle']) : '';
$pricingTitleTextTransform = isset($block_attributes['pricingTitleTextTransform']) ? sanitize_text_field($block_attributes['pricingTitleTextTransform']) : '';
$pricingTitleTextDecoration = isset($block_attributes['pricingTitleTextDecoration']) ? sanitize_text_field($block_attributes['pricingTitleTextDecoration']) : '';
$pricingTitleLetterSpacing = isset($block_attributes['pricingTitleLetterSpacing']) ? $block_attributes['pricingTitleLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricingTitleLetterSpacingUnits = isset($block_attributes['pricingTitleLetterSpacingUnits']) ? $block_attributes['pricingTitleLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingTitleLineHeight = isset($block_attributes['pricingTitleLineHeight']) ? $block_attributes['pricingTitleLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricingTitleLineHeightUnits = isset($block_attributes['pricingTitleLineHeightUnits']) ? $block_attributes['pricingTitleLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

/** End Title Style */

/** Start Subtitle Style */	
$pricingSubtitleColor = isset($block_attributes['pricingSubtitleColor']) ? sanitize_hex_color($block_attributes['pricingSubtitleColor']) : '#fff';
$pricingSubtitleHoverColor = isset($block_attributes['pricingSubtitleHoverColor']) ? sanitize_hex_color($block_attributes['pricingSubtitleHoverColor']) : '';
$pricingSubtitleFontFamily = isset($block_attributes['pricingSubtitleFontFamily']) ? sanitize_text_field($block_attributes['pricingSubtitleFontFamily']) : '';
$pricingSubtitleFontSize = isset($block_attributes['pricingSubtitleFontSize']) ? $block_attributes['pricingSubtitleFontSize'] : array('Desktop' => '16', 'Tablet' => '16', 'Mobile' => '16');
$pricingSubtitleFontSizeUnits = isset($block_attributes['pricingSubtitleFontSizeUnits']) ? $block_attributes['pricingSubtitleFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingSubtitleFontWeight = isset($block_attributes['pricingSubtitleFontWeight']) ? sanitize_text_field($block_attributes['pricingSubtitleFontWeight']) : '400';
$pricingSubtitleFontStyle = isset($block_attributes['pricingSubtitleFontStyle']) ? sanitize_text_field($block_attributes['pricingSubtitleFontStyle']) : '';
$pricingSubtitleTextTransform = isset($block_attributes['pricingSubtitleTextTransform']) ? sanitize_text_field($block_attributes['pricingSubtitleTextTransform']) : '';
$pricingSubtitleTextDecoration = isset($block_attributes['pricingSubtitleTextDecoration']) ? sanitize_text_field($block_attributes['pricingSubtitleTextDecoration']) : '';
$pricingSubtitleLetterSpacing = isset($block_attributes['pricingSubtitleLetterSpacing']) ? $block_attributes['pricingSubtitleLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricingSubtitleLetterSpacingUnits = isset($block_attributes['pricingSubtitleLetterSpacingUnits']) ? $block_attributes['pricingSubtitleLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingSubtitleLineHeight = isset($block_attributes['pricingSubtitleLineHeight']) ? $block_attributes['pricingSubtitleLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricingSubtitleLineHeightUnits = isset($block_attributes['pricingSubtitleLineHeightUnits']) ? $block_attributes['pricingSubtitleLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
/**end Title and Subtitle Style */

/** Start Feature Icon */
$priceFeatureAlignment = isset($block_attributes['priceFeatureAlignment']) ? sanitize_text_field($block_attributes['priceFeatureAlignment']) : 'center';
$priceFeatureIconColor = isset($block_attributes['priceFeatureIconColor']) ? sanitize_hex_color($block_attributes['priceFeatureIconColor']) : '';
$priceFeatureIconHoverColor = isset($block_attributes['priceFeatureIconHoverColor']) ? sanitize_hex_color($block_attributes['priceFeatureIconHoverColor']) : '';
$priceFeatureIconSize = isset($block_attributes['priceFeatureIconSize']) ? $block_attributes['priceFeatureIconSize'] : array('Desktop' => '20', 'Tablet' => '20', 'Mobile' => '20');
$priceFeatureIconSizeUnits = isset($block_attributes['priceFeatureIconSizeUnits']) ? $block_attributes['priceFeatureIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
/** End Feature Icon */

/** Start Feature Title */
$pricingfeatureTitleColor = isset($block_attributes['pricingfeatureTitleColor']) ? sanitize_hex_color($block_attributes['pricingfeatureTitleColor']) : '#333';
$pricingfeatureTitleHoverColor = isset($block_attributes['pricingfeatureTitleHoverColor']) ? sanitize_hex_color($block_attributes['pricingfeatureTitleHoverColor']) : '';
$pricingfeatureTitleFontFamily = isset($block_attributes['pricingfeatureTitleFontFamily']) ? sanitize_text_field($block_attributes['pricingfeatureTitleFontFamily']) : '';
$pricingfeatureTitleFontSize = isset($block_attributes['pricingfeatureTitleFontSize']) ? $block_attributes['pricingfeatureTitleFontSize'] : array('Desktop' => '16', 'Tablet' => '16', 'Mobile' => '16');
$pricingfeatureTitleFontSizeUnits = isset($block_attributes['pricingfeatureTitleFontSizeUnits']) ? $block_attributes['pricingfeatureTitleFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingfeatureTitleFontWeight = isset($block_attributes['pricingfeatureTitleFontWeight']) ? sanitize_text_field($block_attributes['pricingfeatureTitleFontWeight']) : '';
$pricingfeatureTitleFontStyle = isset($block_attributes['pricingfeatureTitleFontStyle']) ? sanitize_text_field($block_attributes['pricingfeatureTitleFontStyle']) : '';
$pricingfeatureTitleTextTransform = isset($block_attributes['pricingfeatureTitleTextTransform']) ? sanitize_text_field($block_attributes['pricingfeatureTitleTextTransform']) : '';
$pricingfeatureTitleTextDecoration = isset($block_attributes['pricingfeatureTitleTextDecoration']) ? sanitize_text_field($block_attributes['pricingfeatureTitleTextDecoration']) : '';
$pricingfeatureTitleLetterSpacing = isset($block_attributes['pricingfeatureTitleLetterSpacing']) ? $block_attributes['pricingfeatureTitleLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricingfeatureTitleLetterSpacingUnits = isset($block_attributes['pricingfeatureTitleLetterSpacingUnits']) ? $block_attributes['pricingfeatureTitleLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$pricingfeatureTitleLineHeight = isset($block_attributes['pricingfeatureTitleLineHeight']) ? $block_attributes['pricingfeatureTitleLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$pricingfeatureTitleLineHeightUnits = isset($block_attributes['pricingfeatureTitleLineHeightUnits']) ? $block_attributes['pricingfeatureTitleLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
/** End Feature Title */

/** Start price Button */
$priceButtonAlignment = isset($block_attributes['priceButtonAlignment']) ? sanitize_text_field($block_attributes['priceButtonAlignment']) : 'center';
$priceButtonWidth = isset($block_attributes['priceButtonWidth']) ? $block_attributes['priceButtonWidth'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceButtonWidthUnits = isset($block_attributes['priceButtonWidthUnits']) ? $block_attributes['priceButtonWidthUnits'] : array('Desktop' => '%', 'Tablet' => '%', 'Mobile' => '%');

/** Start Pricing Button Font */
$priceButtonFontFamily = isset($block_attributes['priceButtonFontFamily']) ? sanitize_text_field($block_attributes['priceButtonFontFamily']) : 'inherit';
$priceButtonFontSize = isset($block_attributes['priceButtonFontSize']) ? $block_attributes['priceButtonFontSize'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceButtonFontSizeUnits = isset($block_attributes['priceButtonFontSizeUnits']) ? $block_attributes['priceButtonFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceButtonFontWeight = isset($block_attributes['priceButtonFontWeight']) ? sanitize_text_field($block_attributes['priceButtonFontWeight']) : '';
$priceButtonFontStyle = isset($block_attributes['priceButtonFontStyle']) ? sanitize_text_field($block_attributes['priceButtonFontStyle']) : '';
$priceButtonTextTransform = isset($block_attributes['priceButtonTextTransform']) ? sanitize_text_field($block_attributes['priceButtonTextTransform']) : '';
$priceButtonTextDecoration = isset($block_attributes['priceButtonTextDecoration']) ? sanitize_text_field($block_attributes['priceButtonTextDecoration']) : '';
$priceButtonLetterSpacing = isset($block_attributes['priceButtonLetterSpacing']) ? $block_attributes['priceButtonLetterSpacing'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceButtonLetterSpacingUnits = isset($block_attributes['priceButtonLetterSpacingUnits']) ? $block_attributes['priceButtonLetterSpacingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceButtonLineHeight = isset($block_attributes['priceButtonLineHeight']) ? $block_attributes['priceButtonLineHeight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceButtonLineHeightUnits = isset($block_attributes['priceButtonLineHeightUnits']) ? $block_attributes['priceButtonLineHeightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');

$priceButtonColor = isset($block_attributes['priceButtonColor']) ? sanitize_hex_color($block_attributes['priceButtonColor']) : '#fff';
$priceButtonHoverColor = isset($block_attributes['priceButtonHoverColor']) ? sanitize_hex_color($block_attributes['priceButtonHoverColor']) : '';
$priceButtonBgColor = isset($block_attributes['priceButtonBgColor']) ? sanitize_hex_color($block_attributes['priceButtonBgColor']) : '#0073e6';
$priceButtonBgHoverColor = isset($block_attributes['priceButtonBgHoverColor']) ? sanitize_hex_color($block_attributes['priceButtonBgHoverColor']) : '#005bb5';

/** Start Pricing Button Padding */
$priceButtonPaddingUnits = isset($block_attributes['priceButtonPaddingUnits']) ? $block_attributes['priceButtonPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceButtonDesktopPadding = isset($block_attributes['priceButtonDesktopPadding']) ? $block_attributes['priceButtonDesktopPadding'] : array('top' => 12, 'bottom' => 12, 'left' => 24, 'right' => 24);
$priceButtonTabPadding = isset($block_attributes['priceButtonTabPadding']) ? $block_attributes['priceButtonTabPadding'] : array('top' => 12, 'bottom' => 12, 'left' => 24, 'right' => 24);
$priceButtonMobilePadding = isset($block_attributes['priceButtonMobilePadding']) ? $block_attributes['priceButtonMobilePadding'] : array('top' => 12, 'bottom' => 12, 'left' => 24, 'right' => 24);
/** Construct padding strings for each device */
$priceButtonDesktopPaddingValue = $priceButtonDesktopPadding['top'] . $priceButtonPaddingUnits['Desktop'] . ' ' . $priceButtonDesktopPadding['right'] . $priceButtonPaddingUnits['Desktop'] . ' ' . $priceButtonDesktopPadding['bottom'] . $priceButtonPaddingUnits['Desktop'] . ' ' . $priceButtonDesktopPadding['left'] . $priceButtonPaddingUnits['Desktop'];
$priceButtonTabletPaddingValue = $priceButtonTabPadding['top'] . $priceButtonPaddingUnits['Tablet'] . ' ' . $priceButtonTabPadding['right'] . $priceButtonPaddingUnits['Tablet'] . ' ' . $priceButtonTabPadding['bottom'] . $priceButtonPaddingUnits['Tablet'] . ' ' . $priceButtonTabPadding['left'] . $priceButtonPaddingUnits['Tablet'];
$priceButtonMobilePaddingValue = $priceButtonMobilePadding['top'] . $priceButtonPaddingUnits['Mobile'] . ' ' . $priceButtonMobilePadding['right'] . $priceButtonPaddingUnits['Mobile'] . ' ' . $priceButtonMobilePadding['bottom'] . $priceButtonPaddingUnits['Mobile'] . ' ' . $priceButtonMobilePadding['left'] . $priceButtonPaddingUnits['Mobile'];
/** End Pricing Button Padding */

/** Start Pricing Button Margin */
$priceButtonMarginUnits = isset($block_attributes['priceButtonMarginUnits']) ? $block_attributes['priceButtonMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceButtonDesktopMargin = isset($block_attributes['priceButtonDesktopMargin']) ? $block_attributes['priceButtonDesktopMargin'] : array('top' => '20', 'bottom' => '20', 'left' => '0', 'right' => '0');
$priceButtonTabMargin = isset($block_attributes['priceButtonTabMargin']) ? $block_attributes['priceButtonTabMargin'] : array('top' => '20', 'bottom' => '20', 'left' => '0', 'right' => '0');
$priceButtonMobileMargin = isset($block_attributes['priceButtonMobileMargin']) ? $block_attributes['priceButtonMobileMargin'] : array('top' => '20', 'bottom' => '20', 'left' => '0', 'right' => '0');
/** Construct margin strings for each device */
$priceButtonDesktopMarginValue = $priceButtonDesktopMargin['top'] . $priceButtonMarginUnits['Desktop'] . ' ' . $priceButtonDesktopMargin['right'] . $priceButtonMarginUnits['Desktop'] . ' ' . $priceButtonDesktopMargin['bottom'] . $priceButtonMarginUnits['Desktop'] . ' ' . $priceButtonDesktopMargin['left'] . $priceButtonMarginUnits['Desktop'];
$priceButtonTabletMarginValue = $priceButtonTabMargin['top'] . $priceButtonMarginUnits['Tablet'] . ' ' . $priceButtonTabMargin['right'] . $priceButtonMarginUnits['Tablet'] . ' ' . $priceButtonTabMargin['bottom'] . $priceButtonMarginUnits['Tablet'] . ' ' . $priceButtonTabMargin['left'] . $priceButtonMarginUnits['Tablet'];
$priceButtonMobileMarginValue = $priceButtonMobileMargin['top'] . $priceButtonMarginUnits['Mobile'] . ' ' . $priceButtonMobileMargin['right'] . $priceButtonMarginUnits['Mobile'] . ' ' . $priceButtonMobileMargin['bottom'] . $priceButtonMarginUnits['Mobile'] . ' ' . $priceButtonMobileMargin['left'] . $priceButtonMarginUnits['Mobile'];
/** End Pricing Button Margin */

/** Start Pricing Button Border */
$priceButtonBorder = isset($block_attributes['priceButtonBorder']) ? sanitize_text_field($block_attributes['priceButtonBorder']) : 'none';
$priceButtonBorderColor = isset($block_attributes['priceButtonBorderColor']) ? sanitize_hex_color($block_attributes['priceButtonBorderColor']) : '';
$priceButtonBorderHoverColor = isset($block_attributes['priceButtonBorderHoverColor']) ? sanitize_hex_color($block_attributes['priceButtonBorderHoverColor']) : '';
/** End Pricing Button Border */

/** Start Pricing Button Border Width */
$priceButtonBorderUnits = isset($block_attributes['priceButtonBorderUnits']) ? $block_attributes['priceButtonBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceButtonDesktopBorderWidth = isset($block_attributes['priceButtonDesktopBorderWidth']) ? $block_attributes['priceButtonDesktopBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceButtonTabBorderWidth = isset($block_attributes['priceButtonTabBorderWidth']) ? $block_attributes['priceButtonTabBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceButtonMobileBorderWidth = isset($block_attributes['priceButtonMobileBorderWidth']) ? $block_attributes['priceButtonMobileBorderWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
/** Construct border width strings for each device */
$priceButtonDesktopBorderWidthValue = $priceButtonDesktopBorderWidth['top'] . $priceButtonBorderUnits['Desktop'] . ' ' . $priceButtonDesktopBorderWidth['right'] . $priceButtonBorderUnits['Desktop'] . ' ' . $priceButtonDesktopBorderWidth['bottom'] . $priceButtonBorderUnits['Desktop'] . ' ' . $priceButtonDesktopBorderWidth['left'] . $priceButtonBorderUnits['Desktop'];
$priceButtonTabletBorderWidthValue = $priceButtonTabBorderWidth['top'] . $priceButtonBorderUnits['Tablet'] . ' ' . $priceButtonTabBorderWidth['right'] . $priceButtonBorderUnits['Tablet'] . ' ' . $priceButtonTabBorderWidth['bottom'] . $priceButtonBorderUnits['Tablet'] . ' ' . $priceButtonTabBorderWidth['left'] . $priceButtonBorderUnits['Tablet'];
$priceButtonMobileBorderWidthValue = $priceButtonMobileBorderWidth['top'] . $priceButtonBorderUnits['Mobile'] . ' ' . $priceButtonMobileBorderWidth['right'] . $priceButtonBorderUnits['Mobile'] . ' ' . $priceButtonMobileBorderWidth['bottom'] . $priceButtonBorderUnits['Mobile'] . ' ' . $priceButtonMobileBorderWidth['left'] . $priceButtonBorderUnits['Mobile'];
/** End Pricing Button Border Width */

/** Start Pricing Button Border Radius */
$priceButtonBorderRadiusUnits = isset($block_attributes['priceButtonBorderRadiusUnits']) ? $block_attributes['priceButtonBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceButtonDesktopBorderRadiusWidth = isset($block_attributes['priceButtonDesktopBorderRadiusWidth']) ? $block_attributes['priceButtonDesktopBorderRadiusWidth'] : array('top' => '4', 'bottom' => '4', 'left' => '4', 'right' => '4');
$priceButtonTabBorderRadiusWidth = isset($block_attributes['priceButtonTabBorderRadiusWidth']) ? $block_attributes['priceButtonTabBorderRadiusWidth'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceButtonMobileBorderRadiusWidth = isset($block_attributes['priceButtonMobileBorderRadiusWidth']) ? $block_attributes['priceButtonMobileBorderRadiusWidth'] : array('top' => '4', 'bottom' => '4', 'left' => '4', 'right' => '4');
/** Construct border radius strings for each device */
$priceButtonDesktopBorderRadiusWidthValue = $priceButtonDesktopBorderRadiusWidth['top'] . $priceButtonBorderRadiusUnits['Desktop'] . ' ' . $priceButtonDesktopBorderRadiusWidth['right'] . $priceButtonBorderRadiusUnits['Desktop'] . ' ' . $priceButtonDesktopBorderRadiusWidth['bottom'] . $priceButtonBorderRadiusUnits['Desktop'] . ' ' . $priceButtonDesktopBorderRadiusWidth['left'] . $priceButtonBorderRadiusUnits['Desktop'];
$priceButtonTabletBorderRadiusWidthValue = $priceButtonTabBorderRadiusWidth['top'] . $priceButtonBorderRadiusUnits['Tablet'] . ' ' . $priceButtonTabBorderRadiusWidth['right'] . $priceButtonBorderRadiusUnits['Tablet'] . ' ' . $priceButtonTabBorderRadiusWidth['bottom'] . $priceButtonBorderRadiusUnits['Tablet'] . ' ' . $priceButtonTabBorderRadiusWidth['left'] . $priceButtonBorderRadiusUnits['Tablet'];
$priceButtonMobileBorderRadiusWidthValue = $priceButtonMobileBorderRadiusWidth['top'] . $priceButtonBorderRadiusUnits['Mobile'] . ' ' . $priceButtonMobileBorderRadiusWidth['right'] . $priceButtonBorderRadiusUnits['Mobile'] . ' ' . $priceButtonMobileBorderRadiusWidth['bottom'] . $priceButtonBorderRadiusUnits['Mobile'] . ' ' . $priceButtonMobileBorderRadiusWidth['left'] . $priceButtonBorderRadiusUnits['Mobile'];
/** End Pricing Button Border Radius */

/** Start Pricing Button Icon */
$priceButtonIconColor = isset($block_attributes['priceButtonIconColor']) ? sanitize_hex_color($block_attributes['priceButtonIconColor']) : '';
$priceButtonIconHoverColor = isset($block_attributes['priceButtonIconHoverColor']) ? sanitize_hex_color($block_attributes['priceButtonIconHoverColor']) : '';
$priceButtonIconSize = isset($block_attributes['priceButtonIconSize']) ? $block_attributes['priceButtonIconSize'] : array('Desktop' => '20', 'Tablet' => '20', 'Mobile' => '20');
$priceButtonIconSizeUnits = isset($block_attributes['priceButtonIconSizeUnits']) ? $block_attributes['priceButtonIconSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
/** End Pricing Button Icon */

/** Start Ribbon Color Settings */
$priceRibbonColor = isset($block_attributes['priceRibbonColor']) ? sanitize_hex_color($block_attributes['priceRibbonColor']) : '#fff';
$priceRibbonHoverColor = isset($block_attributes['priceRibbonHoverColor']) ? sanitize_hex_color($block_attributes['priceRibbonHoverColor']) : '';
$priceRibbonBgColor = isset($block_attributes['priceRibbonBgColor']) ? sanitize_hex_color($block_attributes['priceRibbonBgColor']) : '#f00';
$priceRibbonBgHoverColor = isset($block_attributes['priceRibbonBgHoverColor']) ? sanitize_hex_color($block_attributes['priceRibbonBgHoverColor']) : '';

$priceRibbonTop = isset($block_attributes['priceRibbonTop']) ? $block_attributes['priceRibbonTop'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceRibbonTopUnits = isset($block_attributes['priceRibbonTopUnits']) ? $block_attributes['priceRibbonTopUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceRibbonLeft = isset($block_attributes['priceRibbonLeft']) ? $block_attributes['priceRibbonLeft'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceRibbonLeftUnits = isset($block_attributes['priceRibbonLeftUnits']) ? $block_attributes['priceRibbonLeftUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceRibbonRight = isset($block_attributes['priceRibbonRight']) ? $block_attributes['priceRibbonRight'] : array('Desktop' => '', 'Tablet' => '', 'Mobile' => '');
$priceRibbonRightUnits = isset($block_attributes['priceRibbonRightUnits']) ? $block_attributes['priceRibbonRightUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceRibbonWidth = isset($block_attributes['priceRibbonWidth']) ? $block_attributes['priceRibbonWidth'] : array('Desktop' => '180', 'Tablet' => '180', 'Mobile' => '180');
$priceRibbonWidthUnits = isset($block_attributes['priceRibbonWidthUnits']) ? $block_attributes['priceRibbonWidthUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceRibbonFontSize = isset($block_attributes['priceRibbonFontSize']) ? $block_attributes['priceRibbonFontSize'] : array('Desktop' => '14', 'Tablet' => '14', 'Mobile' => '14');
$priceRibbonFontSizeUnits = isset($block_attributes['priceRibbonFontSizeUnits']) ? $block_attributes['priceRibbonFontSizeUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
$priceRibbonpadding = isset($block_attributes['priceRibbonpadding']) ? $block_attributes['priceRibbonpadding'] : array('Desktop' => '10', 'Tablet' => '10', 'Mobile' => '10');
$priceRibbonpaddingUnits = isset($block_attributes['priceRibbonpaddingUnits']) ? $block_attributes['priceRibbonpaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
/** End Ribbon Color Settings */

/** Start Global Style Settings */
$priceGlobalZIndex = isset($block_attributes['priceGlobalZIndex']) ? intval($block_attributes['priceGlobalZIndex']) : '';

/** Start Global Padding */
// Get padding units for different devices
$priceGlobalPaddingUnits = isset($block_attributes['priceGlobalPaddingUnits']) ? $block_attributes['priceGlobalPaddingUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
// Get padding values for different devices
$priceGlobalPaddingDesktop = isset($block_attributes['priceGlobalPaddingDesktop']) ? $block_attributes['priceGlobalPaddingDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalPaddingTablet = isset($block_attributes['priceGlobalPaddingTablet']) ? $block_attributes['priceGlobalPaddingTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalPaddingMobile = isset($block_attributes['priceGlobalPaddingMobile']) ? $block_attributes['priceGlobalPaddingMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
// Construct padding strings for each device type
$globalDesktopPadding = $priceGlobalPaddingDesktop['top'] . $priceGlobalPaddingUnits['Desktop'] . ' ' . $priceGlobalPaddingDesktop['right'] . $priceGlobalPaddingUnits['Desktop'] . ' ' . $priceGlobalPaddingDesktop['bottom'] . $priceGlobalPaddingUnits['Desktop'] . ' ' . $priceGlobalPaddingDesktop['left'] . $priceGlobalPaddingUnits['Desktop'];
$globalTabletPadding = $priceGlobalPaddingTablet['top'] . $priceGlobalPaddingUnits['Tablet'] . ' ' . $priceGlobalPaddingTablet['right'] . $priceGlobalPaddingUnits['Tablet'] . ' ' . $priceGlobalPaddingTablet['bottom'] . $priceGlobalPaddingUnits['Tablet'] . ' ' . $priceGlobalPaddingTablet['left'] . $priceGlobalPaddingUnits['Tablet'];
$globalMobilePadding = $priceGlobalPaddingMobile['top'] . $priceGlobalPaddingUnits['Mobile'] . ' ' . $priceGlobalPaddingMobile['right'] . $priceGlobalPaddingUnits['Mobile'] . ' ' . $priceGlobalPaddingMobile['bottom'] . $priceGlobalPaddingUnits['Mobile'] . ' ' . $priceGlobalPaddingMobile['left'] . $priceGlobalPaddingUnits['Mobile'];
/** End Global Padding */

/** Start Global Margin */
// Get margin units for different devices
$priceGlobalMarginUnits = isset($block_attributes['priceGlobalMarginUnits']) ? $block_attributes['priceGlobalMarginUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
// Get margin values for different devices
$priceGlobalMarginDesktop = isset($block_attributes['priceGlobalMarginDesktop']) ? $block_attributes['priceGlobalMarginDesktop'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalMarginTablet = isset($block_attributes['priceGlobalMarginTablet']) ? $block_attributes['priceGlobalMarginTablet'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
$priceGlobalMarginMobile = isset($block_attributes['priceGlobalMarginMobile']) ? $block_attributes['priceGlobalMarginMobile'] : array('top' => '', 'bottom' => '', 'left' => '', 'right' => '');
// Construct margin strings for each device type
$globalDesktopMargin = $priceGlobalMarginDesktop['top'] . $priceGlobalMarginUnits['Desktop'] . ' ' . $priceGlobalMarginDesktop['right'] . $priceGlobalMarginUnits['Desktop'] . ' ' . $priceGlobalMarginDesktop['bottom'] . $priceGlobalMarginUnits['Desktop'] . ' ' . $priceGlobalMarginDesktop['left'] . $priceGlobalMarginUnits['Desktop'];
$globalTabletMargin = $priceGlobalMarginTablet['top'] . $priceGlobalMarginUnits['Tablet'] . ' ' . $priceGlobalMarginTablet['right'] . $priceGlobalMarginUnits['Tablet'] . ' ' . $priceGlobalMarginTablet['bottom'] . $priceGlobalMarginUnits['Tablet'] . ' ' . $priceGlobalMarginTablet['left'] . $priceGlobalMarginUnits['Tablet'];
$globalMobileMargin = $priceGlobalMarginMobile['top'] . $priceGlobalMarginUnits['Mobile'] . ' ' . $priceGlobalMarginMobile['right'] . $priceGlobalMarginUnits['Mobile'] . ' ' . $priceGlobalMarginMobile['bottom'] . $priceGlobalMarginUnits['Mobile'] . ' ' . $priceGlobalMarginMobile['left'] . $priceGlobalMarginUnits['Mobile'];
/** End Global Margin */

// Global background color settings
$priceGlobalBgColor = isset($block_attributes['priceGlobalBgColor']) ? sanitize_hex_color($block_attributes['priceGlobalBgColor']) : '';
$priceGlobalBgHoverColor = isset($block_attributes['priceGlobalBgHoverColor']) ? sanitize_hex_color($block_attributes['priceGlobalBgHoverColor']) : '';
// Global border settings
$priceGlobalBorder = isset($block_attributes['priceGlobalBorder']) ? sanitize_text_field($block_attributes['priceGlobalBorder']) : 'solid';
$priceGlobalBorderColor = isset($block_attributes['priceGlobalBorderColor']) ? sanitize_hex_color($block_attributes['priceGlobalBorderColor']) : '#ddd';
$priceGlobalBorderHoverColor = isset($block_attributes['priceGlobalBorderHoverColor']) ? sanitize_hex_color($block_attributes['priceGlobalBorderHoverColor']) : '';

/** Start Border */
// Get border units for different devices
$priceGlobalBorderUnits = isset($block_attributes['priceGlobalBorderUnits']) ? $block_attributes['priceGlobalBorderUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
// Get border values for different devices
$priceGlobalBorderDesktop = isset($block_attributes['priceGlobalBorderDesktop']) ? $block_attributes['priceGlobalBorderDesktop'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$priceGlobalBorderTablet = isset($block_attributes['priceGlobalBorderTablet']) ? $block_attributes['priceGlobalBorderTablet'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
$priceGlobalBorderMobile = isset($block_attributes['priceGlobalBorderMobile']) ? $block_attributes['priceGlobalBorderMobile'] : array('top' => '1', 'bottom' => '1', 'left' => '1', 'right' => '1');
// Construct border width strings for each device type
$globalDesktopBorderWidth = $priceGlobalBorderDesktop['top'] . $priceGlobalBorderUnits['Desktop'] . ' ' . $priceGlobalBorderDesktop['right'] . $priceGlobalBorderUnits['Desktop'] . ' ' . $priceGlobalBorderDesktop['bottom'] . $priceGlobalBorderUnits['Desktop'] . ' ' . $priceGlobalBorderDesktop['left'] . $priceGlobalBorderUnits['Desktop'];
$globalTabletBorderWidth = $priceGlobalBorderTablet['top'] . $priceGlobalBorderUnits['Tablet'] . ' ' . $priceGlobalBorderTablet['right'] . $priceGlobalBorderUnits['Tablet'] . ' ' . $priceGlobalBorderTablet['bottom'] . $priceGlobalBorderUnits['Tablet'] . ' ' . $priceGlobalBorderTablet['left'] . $priceGlobalBorderUnits['Tablet'];
$globalMobileBorderWidth = $priceGlobalBorderMobile['top'] . $priceGlobalBorderUnits['Mobile'] . ' ' . $priceGlobalBorderMobile['right'] . $priceGlobalBorderUnits['Mobile'] . ' ' . $priceGlobalBorderMobile['bottom'] . $priceGlobalBorderUnits['Mobile'] . ' ' . $priceGlobalBorderMobile['left'] . $priceGlobalBorderUnits['Mobile'];
/** End Border */

/** Start Border Radius */
// Get border radius units for different devices
$priceGlobalBorderRadiusUnits = isset($block_attributes['priceGlobalBorderRadiusUnits']) ? $block_attributes['priceGlobalBorderRadiusUnits'] : array('Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px');
// Get border radius values for different devices
$priceGlobalBorderRadiusDesktop = isset($block_attributes['priceGlobalBorderRadiusDesktop']) ? $block_attributes['priceGlobalBorderRadiusDesktop'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$priceGlobalBorderRadiusTablet = isset($block_attributes['priceGlobalBorderRadiusTablet']) ? $block_attributes['priceGlobalBorderRadiusTablet'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
$priceGlobalBorderRadiusMobile = isset($block_attributes['priceGlobalBorderRadiusMobile']) ? $block_attributes['priceGlobalBorderRadiusMobile'] : array('top' => '10', 'bottom' => '10', 'left' => '10', 'right' => '10');
// Construct border radius strings for each device type
$globalDesktopBorderRadiusWidth = $priceGlobalBorderRadiusDesktop['top'] . $priceGlobalBorderRadiusUnits['Desktop'] . ' ' . $priceGlobalBorderRadiusDesktop['right'] . $priceGlobalBorderRadiusUnits['Desktop'] . ' ' . $priceGlobalBorderRadiusDesktop['bottom'] . $priceGlobalBorderRadiusUnits['Desktop'] . ' ' . $priceGlobalBorderRadiusDesktop['left'] . $priceGlobalBorderRadiusUnits['Desktop'];
$globalTabletBorderRadiusWidth = $priceGlobalBorderRadiusTablet['top'] . $priceGlobalBorderRadiusUnits['Tablet'] . ' ' . $priceGlobalBorderRadiusTablet['right'] . $priceGlobalBorderRadiusUnits['Tablet'] . ' ' . $priceGlobalBorderRadiusTablet['bottom'] . $priceGlobalBorderRadiusUnits['Tablet'] . ' ' . $priceGlobalBorderRadiusTablet['left'] . $priceGlobalBorderRadiusUnits['Tablet'];
$globalMobileBorderRadiusWidth = $priceGlobalBorderRadiusMobile['top'] . $priceGlobalBorderRadiusUnits['Mobile'] . ' ' . $priceGlobalBorderRadiusMobile['right'] . $priceGlobalBorderRadiusUnits['Mobile'] . ' ' . $priceGlobalBorderRadiusMobile['bottom'] . $priceGlobalBorderRadiusUnits['Mobile'] . ' ' . $priceGlobalBorderRadiusMobile['left'] . $priceGlobalBorderRadiusUnits['Mobile'];
/** End Border Radius */

// Get the global box shadow CSS value from block attributes
$priceGlobalBoxShadowCssValue = isset($block_attributes['priceGlobalBoxShadowCssValue']) ? sanitize_text_field($block_attributes['priceGlobalBoxShadowCssValue']) : '';



/** Start CSS Content */
$css_content = "

	.$blockId.fb-pricing-wrapper {
		" . ($priceGlobalBgColor ? "background-color: $priceGlobalBgColor;" : "") . "
		" . ($globalDesktopPadding ? "padding: $globalDesktopPadding;" : "") . "
		" . ($globalDesktopMargin ? "margin: $globalDesktopMargin;" : "") . "
		" . ($priceGlobalBorder ? "border-style: $priceGlobalBorder;" : "") . "
		" . ($globalDesktopBorderWidth ? "border-width: $globalDesktopBorderWidth;" : "") . "
		" . ($globalDesktopBorderRadiusWidth ? "border-radius: $globalDesktopBorderRadiusWidth;" : "") . "
		" . ($priceGlobalBorderColor ? "border-color: $priceGlobalBorderColor;" : "") . "
		" . ($priceGlobalZIndex ? "z-index: $priceGlobalZIndex;" : "") . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
		position: relative;
	}
	.$blockId.fb-pricing-wrapper:hover {
		" . ($priceGlobalBoxShadowCssValue ? "box-shadow: $priceGlobalBoxShadowCssValue;" : "") . "
		" . ($priceGlobalBorderHoverColor ? "border-color: $priceGlobalBorderHoverColor;" : "") . "
		" . ($priceGlobalBgHoverColor ? "background-color: $priceGlobalBgHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-header {
		" . ($pricingHeaderBgColor ? "background-color: $pricingHeaderBgColor;" : "") . "
		" . ($headerDesktopPadding ? "padding: $headerDesktopPadding;" : "") . "
		" . ($pricingHeaderBorder ? "border-style: $pricingHeaderBorder;" : "") . "
		" . ($headerDesktopBorderWidth ? "border-width: $headerDesktopBorderWidth;" : "") . "
		" . ($headerDesktopBorderRadiusWidth ? "border-radius: $headerDesktopBorderRadiusWidth;" : "") . "
		" . ($pricingHeaderBorderColor ? "border-color: $pricingHeaderBorderColor;" : "") . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-header:hover {
		" . ($pricingHeaderBgHoverColor ? "background-color: $pricingHeaderBgHoverColor;" : "") . "
		" . ($pricingHeaderBorderHoverColor ? "border-color: $pricingHeaderBorderHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-icon-wrapper {
		" . ($pricingIconAlignment ? "justify-content: " . ($pricingIconAlignment === 'left' ? 'flex-start' : ($pricingIconAlignment === 'center' ? 'center' : ($pricingIconAlignment === 'right' ? 'flex-end' : 'center'))) . ";" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-icon {
		" . ($priceIconBgSize['Desktop'] && $priceIconBgSizeUnits['Desktop'] ? "width: {$priceIconBgSize['Desktop']}{$priceIconBgSizeUnits['Desktop']};" : "") . "
		" . ($priceIconBgSize['Desktop'] && $priceIconBgSizeUnits['Desktop'] ? "height: {$priceIconBgSize['Desktop']}{$priceIconBgSizeUnits['Desktop']};" : "") . "
		" . ($priceIconBgColor ? "background-color: $priceIconBgColor;" : "") . "
		" . ($priceIconBorder ? "border: $priceIconBorder;" : "") . "
		" . ($priceIconDesktopBorderWidth ? "border-width: $priceIconDesktopBorderWidth;" : "") . "
		" . ($priceIconDesktopBorderRadiusWidth ? "border-radius: $priceIconDesktopBorderRadiusWidth;" : "") . "
		" . ($priceIconBorderColor ? "border-color: $priceIconBorderColor;" : "") . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-icon:hover {
		" . ($priceIconBgHoverColor ? "background-color: $priceIconBgHoverColor;" : "") . "
		" . ($priceIconBorderHoverColor ? "border-color: $priceIconBorderHoverColor;" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-icon svg {
		" . ($priceIconSize['Desktop'] && $priceIconSizeUnits['Desktop'] ? "width: {$priceIconSize['Desktop']}{$priceIconSizeUnits['Desktop']};" : "") . "
		" . ($priceIconSize['Desktop'] && $priceIconSizeUnits['Desktop'] ? "height: {$priceIconSize['Desktop']}{$priceIconSizeUnits['Desktop']};" : "") . "
		" . ($priceIconColor ? "fill: $priceIconColor;" : "") . "
		transition: fill 0.3s ease;
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-icon:hover svg {
		" . ($priceIconHoverColor ? "fill: $priceIconHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper {
		" . ($pricingAlignment ? "justify-content: " . ($pricingAlignment === 'left' ? 'flex-start' : ($pricingAlignment === 'center' ? 'center' : ($pricingAlignment === 'right' ? 'flex-end' : 'center'))) . ";" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper {
		" . ($priceingPriceGap['Desktop'] && $priceingPriceGapUnits['Desktop'] ? "margin: {$priceingPriceGap['Desktop']}{$priceingPriceGapUnits['Desktop']} 0;" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .fb-pricing-normal-price {
		" . ($normalPricingColor ? "color: $normalPricingColor;" : "") . "
		" . ($normalPricingFontFamily ? "font-family: $normalPricingFontFamily;" : "") . "
		" . ($normalPricingFontSize['Desktop'] && $normalPricingFontSizeUnits['Desktop'] ? "font-size: {$normalPricingFontSize['Desktop']}{$normalPricingFontSizeUnits['Desktop']};" : "") . "
		" . ($normalPricingFontWeight ? "font-weight: $normalPricingFontWeight;" : "") . "
		" . ($normalPricingFontStyle ? "font-style: $normalPricingFontStyle;" : "") . "
		" . ($normalPricingTextTransform ? "text-transform: $normalPricingTextTransform;" : "") . "
		" . ($normalPricingTextDecoration ? "text-decoration: $normalPricingTextDecoration;" : "") . "
		" . ($normalPricingLetterSpacing['Desktop'] && $normalPricingLetterSpacingUnits['Desktop'] ? "letter-spacing: {$normalPricingLetterSpacing['Desktop']}{$normalPricingLetterSpacingUnits['Desktop']};" : "") . "
		" . ($normalPricingLineHeight['Desktop'] && $normalPricingLineHeightUnits['Desktop'] ? "line-height: {$normalPricingLineHeight['Desktop']}{$normalPricingLineHeightUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .fb-pricing-normal-price:hover {
		" . ($normalPricingHoverColor ? "color: $normalPricingHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .fb-pricing-sale-price {
		" . ($salePricingColor ? "color: $salePricingColor;" : "") . "
		" . ($salePricingFontFamily ? "font-family: $salePricingFontFamily;" : "") . "
		" . ($salePricingFontSize['Desktop'] && $salePricingFontSizeUnits['Desktop'] ? "font-size: {$salePricingFontSize['Desktop']}{$salePricingFontSizeUnits['Desktop']};" : "") . "
		" . ($salePricingFontWeight ? "font-weight: $salePricingFontWeight;" : "") . "
		" . ($salePricingFontStyle ? "font-style: $salePricingFontStyle;" : "") . "
		" . ($salePricingTextTransform ? "text-transform: $salePricingTextTransform;" : "") . "
		" . ($salePricingTextDecoration ? "text-decoration: $salePricingTextDecoration;" : "") . "
		" . ($salePricingLetterSpacing['Desktop'] && $salePricingLetterSpacingUnits['Desktop'] ? "letter-spacing: {$salePricingLetterSpacing['Desktop']}{$salePricingLetterSpacingUnits['Desktop']};" : "") . "
		" . ($salePricingLineHeight['Desktop'] && $salePricingLineHeightUnits['Desktop'] ? "line-height: {$salePricingLineHeight['Desktop']}{$salePricingLineHeightUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .fb-pricing-sale-price:hover {
		" . ($salePricingHoverColor ? "color: $salePricingHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .price-currency {
		" . ($priceCurrencyColor ? "color: $priceCurrencyColor;" : "") . "
		" . ($priceCurrencyFontFamily ? "font-family: $priceCurrencyFontFamily;" : "") . "
		" . ($priceCurrencyFontSize['Desktop'] && $priceCurrencyFontSizeUnits['Desktop'] ? "font-size: {$priceCurrencyFontSize['Desktop']}{$priceCurrencyFontSizeUnits['Desktop']};" : "") . "
		" . ($priceCurrencyFontWeight ? "font-weight: $priceCurrencyFontWeight;" : "") . "
		" . ($priceCurrencyFontStyle ? "font-style: $priceCurrencyFontStyle;" : "") . "
		" . ($priceCurrencyTextTransform ? "text-transform: $priceCurrencyTextTransform;" : "") . "
		" . ($priceCurrencyTextDecoration ? "text-decoration: $priceCurrencyTextDecoration;" : "") . "
		" . ($priceCurrencyLetterSpacing['Desktop'] && $priceCurrencyLetterSpacingUnits['Desktop'] ? "letter-spacing: {$priceCurrencyLetterSpacing['Desktop']}{$priceCurrencyLetterSpacingUnits['Desktop']};" : "") . "
		" . ($priceCurrencyLineHeight['Desktop'] && $priceCurrencyLineHeightUnits['Desktop'] ? "line-height: {$priceCurrencyLineHeight['Desktop']}{$priceCurrencyLineHeightUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .price-currency:hover {
		" . ($priceCurrencyHoverColor ? "color: $priceCurrencyHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .price-period {
		" . ($pricePeriodColor ? "color: $pricePeriodColor;" : "") . "
		" . ($pricePeriodFontFamily ? "font-family: $pricePeriodFontFamily;" : "") . "
		" . ($pricePeriodFontSize['Desktop'] && $pricePeriodFontSizeUnits['Desktop'] ? "font-size: {$pricePeriodFontSize['Desktop']}{$pricePeriodFontSizeUnits['Desktop']};" : "") . "
		" . ($pricePeriodFontWeight ? "font-weight: $pricePeriodFontWeight;" : "") . "
		" . ($pricePeriodFontStyle ? "font-style: $pricePeriodFontStyle;" : "") . "
		" . ($pricePeriodTextTransform ? "text-transform: $pricePeriodTextTransform;" : "") . "
		" . ($pricePeriodTextDecoration ? "text-decoration: $pricePeriodTextDecoration;" : "") . "
		" . ($pricePeriodLetterSpacing['Desktop'] && $pricePeriodLetterSpacingUnits['Desktop'] ? "letter-spacing: {$pricePeriodLetterSpacing['Desktop']}{$pricePeriodLetterSpacingUnits['Desktop']};" : "") . "
		" . ($pricePeriodLineHeight['Desktop'] && $pricePeriodLineHeightUnits['Desktop'] ? "line-height: {$pricePeriodLineHeight['Desktop']}{$pricePeriodLineHeightUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-price-wrapper .price-period:hover {
		" . ($pricePeriodHoverColor ? "color: $pricePeriodHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-title {
		" . ($pricingTitleColor ? "color: $pricingTitleColor;" : "") . "
		" . ($pricingTitleFontFamily ? "font-family: $pricingTitleFontFamily;" : "") . "
		" . ($pricingTitleFontSize['Desktop'] && $pricingTitleFontSizeUnits['Desktop'] ? "font-size: {$pricingTitleFontSize['Desktop']}{$pricingTitleFontSizeUnits['Desktop']};" : "") . "
		" . ($pricingTitleFontWeight ? "font-weight: $pricingTitleFontWeight;" : "") . "
		" . ($pricingTitleFontStyle ? "font-style: $pricingTitleFontStyle;" : "") . "
		" . ($pricingTitleTextTransform ? "text-transform: $pricingTitleTextTransform;" : "") . "
		" . ($pricingTitleTextDecoration ? "text-decoration: $pricingTitleTextDecoration;" : "") . "
		" . ($pricingTitleLetterSpacing['Desktop'] && $pricingTitleLetterSpacingUnits['Desktop'] ? "letter-spacing: {$pricingTitleLetterSpacing['Desktop']}{$pricingTitleLetterSpacingUnits['Desktop']};" : "") . "
		" . ($pricingTitleLineHeight['Desktop'] && $pricingTitleLineHeightUnits['Desktop'] ? "line-height: {$pricingTitleLineHeight['Desktop']}{$pricingTitleLineHeightUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-title:hover {
		" . ($pricingTitleHoverColor ? "color: $pricingTitleHoverColor;" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-subtitle {
		" . ($pricingSubtitleColor ? "color: $pricingSubtitleColor;" : "") . "
		" . ($pricingSubtitleFontFamily ? "font-family: $pricingSubtitleFontFamily;" : "") . "
		" . ($pricingSubtitleFontSize['Desktop'] && $pricingSubtitleFontSizeUnits['Desktop'] ? "font-size: {$pricingSubtitleFontSize['Desktop']}{$pricingSubtitleFontSizeUnits['Desktop']};" : "") . "
		" . ($pricingSubtitleFontWeight ? "font-weight: $pricingSubtitleFontWeight;" : "") . "
		" . ($pricingSubtitleFontStyle ? "font-style: $pricingSubtitleFontStyle;" : "") . "
		" . ($pricingSubtitleTextTransform ? "text-transform: $pricingSubtitleTextTransform;" : "") . "
		" . ($pricingSubtitleTextDecoration ? "text-decoration: $pricingSubtitleTextDecoration;" : "") . "
		" . ($pricingSubtitleLetterSpacing['Desktop'] && $pricingSubtitleLetterSpacingUnits['Desktop'] ? "letter-spacing: {$pricingSubtitleLetterSpacing['Desktop']}{$pricingSubtitleLetterSpacingUnits['Desktop']};" : "") . "
		" . ($pricingSubtitleLineHeight['Desktop'] && $pricingSubtitleLineHeightUnits['Desktop'] ? "line-height: {$pricingSubtitleLineHeight['Desktop']}{$pricingSubtitleLineHeightUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-subtitle:hover {
		" . ($pricingSubtitleHoverColor ? "color: $pricingSubtitleHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-feature-item {
		" . ($priceFeatureAlignment ? "justify-content: " . ($priceFeatureAlignment === 'left' ? 'flex-start' : ($priceFeatureAlignment === 'center' ? 'center' : ($priceFeatureAlignment === 'right' ? 'flex-end' : 'center'))) . ";" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-feature-icon-inner svg {
		" . ($priceFeatureIconSize['Desktop'] && $priceFeatureIconSizeUnits['Desktop'] ? "width: {$priceFeatureIconSize['Desktop']}{$priceFeatureIconSizeUnits['Desktop']};" : "") . "
		" . ($priceFeatureIconSize['Desktop'] && $priceFeatureIconSizeUnits['Desktop'] ? "height: {$priceFeatureIconSize['Desktop']}{$priceFeatureIconSizeUnits['Desktop']};" : "") . "
		" . ($priceFeatureIconColor ? "fill: $priceFeatureIconColor;" : "") . "
		transition: fill 0.3s ease;
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-feature-icon-inner:hover svg {
		" . ($priceFeatureIconHoverColor ? "fill: $priceFeatureIconHoverColor;" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-feature-text {
		" . ($pricingfeatureTitleColor ? "color: $pricingfeatureTitleColor;" : "") . "
		" . ($pricingfeatureTitleFontFamily ? "font-family: $pricingfeatureTitleFontFamily;" : "") . "
		" . ($pricingfeatureTitleFontSize['Desktop'] && $pricingfeatureTitleFontSizeUnits['Desktop'] ? "font-size: {$pricingfeatureTitleFontSize['Desktop']}{$pricingfeatureTitleFontSizeUnits['Desktop']};" : "") . "
		" . ($pricingfeatureTitleFontWeight ? "font-weight: $pricingfeatureTitleFontWeight;" : "") . "
		" . ($pricingfeatureTitleFontStyle ? "font-style: $pricingfeatureTitleFontStyle;" : "") . "
		" . ($pricingfeatureTitleTextTransform ? "text-transform: $pricingfeatureTitleTextTransform;" : "") . "
		" . ($pricingfeatureTitleTextDecoration ? "text-decoration: $pricingfeatureTitleTextDecoration;" : "") . "
		" . ($pricingfeatureTitleLetterSpacing['Desktop'] && $pricingfeatureTitleLetterSpacingUnits['Desktop'] ? "letter-spacing: {$pricingfeatureTitleLetterSpacing['Desktop']}{$pricingfeatureTitleLetterSpacingUnits['Desktop']};" : "") . "
		" . ($pricingfeatureTitleLineHeight['Desktop'] && $pricingfeatureTitleLineHeightUnits['Desktop'] ? "line-height: {$pricingfeatureTitleLineHeight['Desktop']}{$pricingfeatureTitleLineHeightUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-feature-text:hover {
		" . ($pricingfeatureTitleHoverColor ? "color: $pricingfeatureTitleHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-footer-wrapper {
		" . ($priceButtonAlignment ? "justify-content: " . ($priceButtonAlignment === 'left' ? 'flex-start' : ($priceButtonAlignment === 'center' ? 'center' : ($priceButtonAlignment === 'right' ? 'flex-end' : 'center'))) . ";" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-button {
		" . ($priceButtonWidth['Desktop'] && $priceButtonWidthUnits['Desktop'] ? "width: {$priceButtonWidth['Desktop']}{$priceButtonWidthUnits['Desktop']};" : "width: auto;") . "
		" . ($priceButtonFontFamily ? "font-family: $priceButtonFontFamily;" : "") . "
		" . ($priceButtonFontSize['Desktop'] && $priceButtonFontSizeUnits['Desktop'] ? "font-size: {$priceButtonFontSize['Desktop']}{$priceButtonFontSizeUnits['Desktop']};" : "") . "
		" . ($priceButtonFontWeight ? "font-weight: $priceButtonFontWeight;" : "") . "
		" . ($priceButtonFontStyle ? "font-style: $priceButtonFontStyle;" : "") . "
		" . ($priceButtonTextTransform ? "text-transform: $priceButtonTextTransform;" : "") . "
		" . ($priceButtonTextDecoration ? "text-decoration: $priceButtonTextDecoration;" : "") . "
		" . ($priceButtonLetterSpacing['Desktop'] && $priceButtonLetterSpacingUnits['Desktop'] ? "letter-spacing: {$priceButtonLetterSpacing['Desktop']}{$priceButtonLetterSpacingUnits['Desktop']};" : "") . "
		" . ($priceButtonLineHeight['Desktop'] && $priceButtonLineHeightUnits['Desktop'] ? "line-height: {$priceButtonLineHeight['Desktop']}{$priceButtonLineHeightUnits['Desktop']};" : "") . "
		" . ($priceButtonColor ? "color: $priceButtonColor;" : "") . "
		" . ($priceButtonBgColor ? "background-color: $priceButtonBgColor;" : "") . "
		" . ($priceButtonDesktopPaddingValue ? "padding: $priceButtonDesktopPaddingValue;" : "") . "
		" . ($priceButtonDesktopMarginValue ? "margin: $priceButtonDesktopMarginValue;" : "") . "
		" . ($priceButtonBorder ? "border: $priceButtonBorder;" : "") . "
		" . ($priceButtonBorderColor ? "border-color: $priceButtonBorderColor;" : "") . "
		" . ($priceButtonDesktopBorderWidthValue ? "border-width: $priceButtonDesktopBorderWidthValue;" : "") . "
		" . ($priceButtonDesktopBorderRadiusWidthValue ? "border-radius: $priceButtonDesktopBorderRadiusWidthValue;" : "") . "
		transition: color 0.3s ease, background-color 0.3s ease;
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-button:hover {
		" . ($priceButtonHoverColor ? "color: $priceButtonHoverColor;" : "") . "
		" . ($priceButtonBgHoverColor ? "background-color: $priceButtonBgHoverColor;" : "") . "
		" . ($priceButtonBorderHoverColor ? "border-color: $priceButtonBorderHoverColor;" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-button-icon svg {
		" . ($priceButtonIconSize['Desktop'] && $priceButtonIconSizeUnits['Desktop'] ? "width: {$priceButtonIconSize['Desktop']}{$priceButtonIconSizeUnits['Desktop']};" : "") . "
		" . ($priceButtonIconSize['Desktop'] && $priceButtonIconSizeUnits['Desktop'] ? "height: {$priceButtonIconSize['Desktop']}{$priceButtonIconSizeUnits['Desktop']};" : "") . "
		" . ($priceButtonIconColor ? "fill: $priceButtonIconColor;" : "") . "
		transition: fill 0.3s ease;
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-button-icon:hover svg {
		" . ($priceButtonIconHoverColor ? "fill: $priceButtonIconHoverColor;" : "") . "
	}

	.$blockId.fb-pricing-wrapper .fb-pricing-ribbon {
		" . ($priceRibbonBgColor ? "background-color: $priceRibbonBgColor;" : "") . "
		" . ($priceRibbonColor ? "color: $priceRibbonColor;" : "") . "
		" . ($priceRibbonFontSize['Desktop'] && $priceRibbonFontSizeUnits['Desktop'] ? "font-size: {$priceRibbonFontSize['Desktop']}{$priceRibbonFontSizeUnits['Desktop']};" : "") . "
		" . ($priceRibbonTop['Desktop'] && $priceRibbonTopUnits['Desktop'] ? "top: {$priceRibbonTop['Desktop']}{$priceRibbonTopUnits['Desktop']};" : "") . "
		" . ($priceRibbonWidth['Desktop'] && $priceRibbonWidthUnits['Desktop'] ? "width: {$priceRibbonWidth['Desktop']}{$priceRibbonWidthUnits['Desktop']};" : "") . "
		" . ($priceRibbonpadding['Desktop'] && $priceRibbonpaddingUnits['Desktop'] ? "padding: {$priceRibbonpadding['Desktop']}{$priceRibbonpaddingUnits['Desktop']};" : "") . "
		transition: background-color 0.3s ease, color 0.3s ease;
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-ribbon:hover {
		" . ($priceRibbonBgHoverColor ? "background-color: $priceRibbonBgHoverColor;" : "") . "
		" . ($priceRibbonHoverColor ? "color: $priceRibbonHoverColor;" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-ribbon-left {
		" . ($priceRibbonLeft['Desktop'] && $priceRibbonLeftUnits['Desktop'] ? "left: {$priceRibbonLeft['Desktop']}{$priceRibbonLeftUnits['Desktop']};" : "") . "
	}
	.$blockId.fb-pricing-wrapper .fb-pricing-ribbon-right {
		" . ($priceRibbonRight['Desktop'] && $priceRibbonRightUnits['Desktop'] ? "right: {$priceRibbonRight['Desktop']}{$priceRibbonRightUnits['Desktop']};" : "") . "
	}

	@media only screen and (max-width: 1024px) {
		.$blockId.fb-pricing-wrapper {
			" . ($globalTabletPadding ? "padding: $globalTabletPadding;" : "") . "
			" . ($globalTabletMargin ? "margin: $globalTabletMargin;" : "") . "
			" . ($globalTabletBorderWidth ? "border-width: $globalTabletBorderWidth;" : "") . "
			" . ($globalTabletBorderRadiusWidth ? "border-radius: $globalTabletBorderRadiusWidth;" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-header {
			" . ($headerTabletPadding ? "padding: $headerTabletPadding;" : "") . "
			" . ($headerTabletBorderWidth ? "border-width: $headerTabletBorderWidth;" : "") . "
			" . ($headerTabletBorderRadiusWidth ? "border-radius: $headerTabletBorderRadiusWidth;" : "") . "
		}

		.$blockId.fb-pricing-wrapper .fb-pricing-icon {
			" . ($priceIconBgSize['Tablet'] && $priceIconBgSizeUnits['Tablet'] ? "width: {$priceIconBgSize['Tablet']}{$priceIconBgSizeUnits['Tablet']};" : "") . "
			" . ($priceIconBgSize['Tablet'] && $priceIconBgSizeUnits['Tablet'] ? "height: {$priceIconBgSize['Tablet']}{$priceIconBgSizeUnits['Tablet']};" : "") . "
			" . ($priceIconTabletBorderWidth ? "border-width: $priceIconTabletBorderWidth;" : "") . "
			" . ($priceIconTabletBorderRadiusWidth ? "border-radius: $priceIconTabletBorderRadiusWidth;" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-icon svg {
			" . ($priceIconSize['Tablet'] && $priceIconSizeUnits['Tablet'] ? "width: {$priceIconSize['Tablet']}{$priceIconSizeUnits['Tablet']};" : "") . "
			" . ($priceIconSize['Tablet'] && $priceIconSizeUnits['Tablet'] ? "height: {$priceIconSize['Tablet']}{$priceIconSizeUnits['Tablet']};" : "") . "
		}

		.$blockId.fb-pricing-wrapper .fb-pricing-button {
			" . ($priceButtonTabletPaddingValue ? "padding: $priceButtonTabletPaddingValue;" : "") . "
			" . ($priceButtonTabletMarginValue ? "margin: $priceButtonTabletMarginValue;" : "") . "
			" . ($priceButtonTabletBorderWidthValue ? "border-width: $priceButtonTabletBorderWidthValue;" : "") . "
			" . ($priceButtonTabletBorderRadiusWidthValue ? "border-radius: $priceButtonTabletBorderRadiusWidthValue;" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-button-icon svg {
			" . ($priceButtonIconSize['Tablet'] && $priceButtonIconSizeUnits['Tablet'] ? "width: {$priceButtonIconSize['Tablet']}{$priceButtonIconSizeUnits['Tablet']};" : "") . "
			" . ($priceButtonIconSize['Tablet'] && $priceButtonIconSizeUnits['Tablet'] ? "height: {$priceButtonIconSize['Tablet']}{$priceButtonIconSizeUnits['Tablet']};" : "") . "
		}

		.$blockId.fb-pricing-wrapper .fb-pricing-ribbon {
			" . ($priceRibbonFontSize['Tablet'] && $priceRibbonFontSizeUnits['Tablet'] ? "font-size: {$priceRibbonFontSize['Tablet']}{$priceRibbonFontSizeUnits['Tablet']};" : "") . "
			" . ($priceRibbonTop['Tablet'] && $priceRibbonTopUnits['Tablet'] ? "top: {$priceRibbonTop['Tablet']}{$priceRibbonTopUnits['Tablet']};" : "") . "
			" . ($priceRibbonWidth['Tablet'] && $priceRibbonWidthUnits['Tablet'] ? "width: {$priceRibbonWidth['Tablet']}{$priceRibbonWidthUnits['Tablet']};" : "") . "
			" . ($priceRibbonpadding['Tablet'] && $priceRibbonpaddingUnits['Tablet'] ? "padding: {$priceRibbonpadding['Tablet']}{$priceRibbonpaddingUnits['Tablet']};" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-ribbon-left {
			" . ($priceRibbonLeft['Tablet'] && $priceRibbonLeftUnits['Tablet'] ? "left: {$priceRibbonLeft['Tablet']}{$priceRibbonLeftUnits['Tablet']};" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-ribbon-right {
			" . ($priceRibbonRight['Tablet'] && $priceRibbonRightUnits['Tablet'] ? "right: {$priceRibbonRight['Tablet']}{$priceRibbonRightUnits['Tablet']};" : "") . "
		}
	}

	@media only screen and (max-width: 767px) {
		.$blockId.fb-pricing-wrapper {
			" . ($globalMobilePadding ? "padding: $globalMobilePadding;" : "") . "
			" . ($globalMobileMargin ? "margin: $globalMobileMargin;" : "") . "
			" . ($globalMobileBorderWidth ? "border-width: $globalMobileBorderWidth;" : "") . "
			" . ($globalMobileBorderRadiusWidth ? "border-radius: $globalMobileBorderRadiusWidth;" : "") . "
		}

		.$blockId.fb-pricing-wrapper .fb-pricing-header {
			" . ($headerMobilePadding ? "padding: $headerMobilePadding;" : "") . "
			" . ($headerMobileBorderWidth ? "border-width: $headerMobileBorderWidth;" : "") . "
			" . ($headerMobileBorderRadiusWidth ? "border-radius: $headerMobileBorderRadiusWidth;" : "") . "
		}

		.$blockId.fb-pricing-wrapper .fb-pricing-icon {
			" . ($priceIconMobileBorderRadiusWidth ? "border-radius: $priceIconMobileBorderRadiusWidth;" : "") . " 
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-icon svg {
			" . ($priceIconSize['Mobile'] && $priceIconSizeUnits['Mobile'] ? "width: {$priceIconSize['Mobile']}{$priceIconSizeUnits['Mobile']};" : "") . "
			" . ($priceIconSize['Mobile'] && $priceIconSizeUnits['Mobile'] ? "height: {$priceIconSize['Mobile']}{$priceIconSizeUnits['Mobile']};" : "") . "
		}

		.$blockId.fb-pricing-wrapper .fb-pricing-button {
			" . ($priceButtonMobilePaddingValue ? "padding: $priceButtonMobilePaddingValue;" : "") . "
			" . ($priceButtonMobileMarginValue ? "margin: $priceButtonMobileMarginValue;" : "") . "
			" . ($priceButtonMobileBorderWidthValue ? "border-width: $priceButtonMobileBorderWidthValue;" : "") . "
			" . ($priceButtonMobileBorderRadiusWidthValue ? "border-radius: $priceButtonMobileBorderRadiusWidthValue;" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-button-icon svg {
			" . ($priceButtonIconSize['Mobile'] && $priceButtonIconSizeUnits['Mobile'] ? "width: {$priceButtonIconSize['Mobile']}{$priceButtonIconSizeUnits['Mobile']};" : "") . "
			" . ($priceButtonIconSize['Mobile'] && $priceButtonIconSizeUnits['Mobile'] ? "height: {$priceButtonIconSize['Mobile']}{$priceButtonIconSizeUnits['Mobile']};" : "") . "
		}

		.$blockId.fb-pricing-wrapper .fb-pricing-ribbon {
			" . ($priceRibbonFontSize['Mobile'] && $priceRibbonFontSizeUnits['Mobile'] ? "font-size: {$priceRibbonFontSize['Mobile']}{$priceRibbonFontSizeUnits['Mobile']};" : "") . "
			" . ($priceRibbonTop['Mobile'] && $priceRibbonTopUnits['Mobile'] ? "top: {$priceRibbonTop['Mobile']}{$priceRibbonTopUnits['Mobile']};" : "") . "
			" . ($priceRibbonWidth['Mobile'] && $priceRibbonWidthUnits['Mobile'] ? "width: {$priceRibbonWidth['Mobile']}{$priceRibbonWidthUnits['Mobile']};" : "") . "
			" . ($priceRibbonpadding['Mobile'] && $priceRibbonpaddingUnits['Mobile'] ? "padding: {$priceRibbonpadding['Mobile']}{$priceRibbonpaddingUnits['Mobile']};" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-ribbon-left {
			" . ($priceRibbonLeft['Mobile'] && $priceRibbonLeftUnits['Mobile'] ? "left: {$priceRibbonLeft['Mobile']}{$priceRibbonLeftUnits['Mobile']};" : "") . "
		}
		.$blockId.fb-pricing-wrapper .fb-pricing-ribbon-right {
			" . ($priceRibbonRight['Mobile'] && $priceRibbonRightUnits['Mobile'] ? "right: {$priceRibbonRight['Mobile']}{$priceRibbonRightUnits['Mobile']};" : "") . "
		}

	}
";
/** End CSS Content */

/** Enqueue style for frontend */
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockId);
/** End Enqueue style for frontend */
