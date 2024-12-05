<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;


// Extract the block attributes
$block_attributes = $block['attrs'];

// Responsive Control
$blockID          = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
$parentBlockID    = isset( $block_attributes['parentBlockID'] ) ? sanitize_text_field( $block_attributes['parentBlockID'] ) : '';
$deviceType       = isset( $block_attributes['deviceType'] ) ? sanitize_text_field( $block_attributes['deviceType'] ) : 'Desktop';

// Prefix color
$titlePrefixColor      = isset( $block_attributes['titlePrefixColor'] ) ? $block_attributes['titlePrefixColor'] : '#000';
$titlePrefixHoverColor = isset( $block_attributes['titlePrefixHoverColor'] ) ? $block_attributes['titlePrefixHoverColor'] : '#000';

// Suffix color
$titleSuffixColor      = isset( $block_attributes['titleSuffixColor'] ) ? $block_attributes['titleSuffixColor'] : '#000';
$titleSuffixHoverColor = isset( $block_attributes['titleSuffixHoverColor'] ) ? $block_attributes['titleSuffixHoverColor'] : '#000';

// AccordionItem Main Start
$accordionItemZIndex      = isset( $block_attributes['accordionItemZIndex'] ) ? $block_attributes['accordionItemZIndex'] : 0;
$accordionItemBoxShadowValues = isset( $block_attributes['accordionItemBoxShadowValues'] ) ? $block_attributes['accordionItemBoxShadowValues'] : [];
$accordionItemBoxShadowCssValue = isset( $block_attributes['accordionItemBoxShadowCssValue'] ) ? $block_attributes['accordionItemBoxShadowCssValue'] : '';

$accordionItemBgColorSwitcher = isset( $block_attributes['accordionItemBgColorSwitcher'] ) ? $block_attributes['accordionItemBgColorSwitcher'] : 'normal';
$accordionItemBgType = isset( $block_attributes['accordionItemBgType'] ) ? $block_attributes['accordionItemBgType'] : 'classic';
$accordionItemBgClassicColor = isset( $block_attributes['accordionItemBgClassicColor'] ) ? $block_attributes['accordionItemBgClassicColor'] : '';
$accordionItemBgGradientColor = isset( $block_attributes['accordionItemBgGradientColor'] ) ? $block_attributes['accordionItemBgGradientColor'] : '';
$accordionItemBgCustomGradientSwitcher = isset( $block_attributes['accordionItemBgCustomGradientSwitcher'] ) ? $block_attributes['accordionItemBgCustomGradientSwitcher'] : false;
$accordionItemBgCustomGradientInputValue = isset( $block_attributes['accordionItemBgCustomGradientInputValue'] ) ? $block_attributes['accordionItemBgCustomGradientInputValue'] : '';
$accordionItemBgColorStyle = isset( $block_attributes['accordionItemBgColorStyle'] ) ? $block_attributes['accordionItemBgColorStyle'] : '';
$accordionItemBgImageUrl = isset( $block_attributes['accordionItemBgImageUrl'] ) ? $block_attributes['accordionItemBgImageUrl'] : '';
$accordionItemBgImageAlt = isset( $block_attributes['accordionItemBgImageAlt'] ) ? $block_attributes['accordionItemBgImageAlt'] : '';
$accordionItemBgImageID = isset( $block_attributes['accordionItemBgImageID'] ) ? $block_attributes['accordionItemBgImageID'] : '';
$accordionItemBgImagePosition = isset( $block_attributes['accordionItemBgImagePosition'] ) ? $block_attributes['accordionItemBgImagePosition'] : '';
$accordionItemBgImageAttachment = isset( $block_attributes['accordionItemBgImageAttachment'] ) ? $block_attributes['accordionItemBgImageAttachment'] : '';
$accordionItemBgImageSize = isset( $block_attributes['accordionItemBgImageSize'] ) ? $block_attributes['accordionItemBgImageSize'] : '';
$accordionItemBgImageRepeat = isset( $block_attributes['accordionItemBgImageRepeat'] ) ? $block_attributes['accordionItemBgImageRepeat'] : '';
$accordionItemBgHoverType = isset( $block_attributes['accordionItemBgHoverType'] ) ? $block_attributes['accordionItemBgHoverType'] : 'classic';
$accordionItemBgHoverClassicColor = isset( $block_attributes['accordionItemBgHoverClassicColor'] ) ? $block_attributes['accordionItemBgHoverClassicColor'] : '';
$accordionItemBgHoverGradientColor = isset( $block_attributes['accordionItemBgHoverGradientColor'] ) ? $block_attributes['accordionItemBgHoverGradientColor'] : '';
$accordionItemBgHoverCustomGradientSwitcher = isset( $block_attributes['accordionItemBgHoverCustomGradientSwitcher'] ) ? $block_attributes['accordionItemBgHoverCustomGradientSwitcher'] : false;
$accordionItemBgHoverCustomGradientInputValue = isset( $block_attributes['accordionItemBgHoverCustomGradientInputValue'] ) ? $block_attributes['accordionItemBgHoverCustomGradientInputValue'] : '';
$accordionItemBgHoverColorStyle = isset( $block_attributes['accordionItemBgHoverColorStyle'] ) ? $block_attributes['accordionItemBgHoverColorStyle'] : '';
$accordionItemBgHoverImageUrl = isset( $block_attributes['accordionItemBgHoverImageUrl'] ) ? $block_attributes['accordionItemBgHoverImageUrl'] : '';
$accordionItemBgHoverImageAlt = isset( $block_attributes['accordionItemBgHoverImageAlt'] ) ? $block_attributes['accordionItemBgHoverImageAlt'] : '';
$accordionItemBgHoverImageID = isset( $block_attributes['accordionItemBgHoverImageID'] ) ? $block_attributes['accordionItemBgHoverImageID'] : '';
$accordionItemBgHoverImagePosition = isset( $block_attributes['accordionItemBgHoverImagePosition'] ) ? $block_attributes['accordionItemBgHoverImagePosition'] : '';
$accordionItemBgHoverImageAttachment = isset( $block_attributes['accordionItemBgHoverImageAttachment'] ) ? $block_attributes['accordionItemBgHoverImageAttachment'] : '';
$accordionItemBgHoverImageSize = isset( $block_attributes['accordionItemBgHoverImageSize'] ) ? $block_attributes['accordionItemBgHoverImageSize'] : '';
$accordionItemBgHoverImageRepeat = isset( $block_attributes['accordionItemBgHoverImageRepeat'] ) ? $block_attributes['accordionItemBgHoverImageRepeat'] : '';


// Margin
$accordionItemMarginUnits   = isset( $block_attributes['accordionItemMarginUnits'] ) ? $block_attributes['accordionItemMarginUnits'] : 'px';
$accordionItemDesktopMargin = isset( $block_attributes['accordionItemDesktopMargin'] ) ? $block_attributes['accordionItemDesktopMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionItemTabMargin     = isset( $block_attributes['accordionItemTabMargin'] ) ? $block_attributes['accordionItemTabMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionItemMobileMargin  = isset( $block_attributes['accordionItemMobileMargin'] ) ? $block_attributes['accordionItemMobileMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$accordionItemDesktopMarginWidth = $accordionItemDesktopMargin['top'] . $accordionItemMarginUnits . ' ' . $accordionItemDesktopMargin['right'] . $accordionItemMarginUnits . ' ' . $accordionItemDesktopMargin['bottom'] . $accordionItemMarginUnits . ' ' . $accordionItemDesktopMargin['left'] . $accordionItemMarginUnits;
$accordionItemTabMarginWidth     = $accordionItemTabMargin['top'] . $accordionItemMarginUnits . ' ' . $accordionItemTabMargin['right'] . $accordionItemMarginUnits . ' ' . $accordionItemTabMargin['bottom'] . $accordionItemMarginUnits . ' ' . $accordionItemTabMargin['left'] . $accordionItemMarginUnits;
$accordionItemMobileMarginWidth  = $accordionItemMobileMargin['top'] . $accordionItemMarginUnits . ' ' . $accordionItemMobileMargin['right'] . $accordionItemMarginUnits . ' ' . $accordionItemMobileMargin['bottom'] . $accordionItemMarginUnits . ' ' . $accordionItemMobileMargin['left'] . $accordionItemMarginUnits;

// Padding
$accordionItemPaddingUnits   = isset( $block_attributes['accordionItemPaddingUnits'] ) ? $block_attributes['accordionItemPaddingUnits'] : 'px';
$accordionItemDesktopPadding = isset( $block_attributes['accordionItemDesktopPadding'] ) ? $block_attributes['accordionItemDesktopPadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
$accordionItemTabPadding     = isset( $block_attributes['accordionItemTabPadding'] ) ? $block_attributes['accordionItemTabPadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
$accordionItemMobilePadding  = isset( $block_attributes['accordionItemMobilePadding'] ) ? $block_attributes['accordionItemMobilePadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];

$accordionItemDesktopPaddingWidth = $accordionItemDesktopPadding['top'] . $accordionItemPaddingUnits . ' ' . $accordionItemDesktopPadding['right'] . $accordionItemPaddingUnits . ' ' . $accordionItemDesktopPadding['bottom'] . $accordionItemPaddingUnits . ' ' . $accordionItemDesktopPadding['left'] . $accordionItemPaddingUnits;
$accordionItemTabPaddingWidth     = $accordionItemTabPadding['top'] . $accordionItemPaddingUnits . ' ' . $accordionItemTabPadding['right'] . $accordionItemPaddingUnits . ' ' . $accordionItemTabPadding['bottom'] . $accordionItemPaddingUnits . ' ' . $accordionItemTabPadding['left'] . $accordionItemPaddingUnits;
$accordionItemMobilePaddingWidth  = $accordionItemMobilePadding['top'] . $accordionItemPaddingUnits . ' ' . $accordionItemMobilePadding['right'] . $accordionItemPaddingUnits . ' ' . $accordionItemMobilePadding['bottom'] . $accordionItemPaddingUnits . ' ' . $accordionItemMobilePadding['left'] . $accordionItemPaddingUnits;

// Border
$accordionItemBorder           = isset( $block_attributes['accordionItemBorder'] ) ? sanitize_text_field( $block_attributes['accordionItemBorder'] ) : 'none';
$accordionItemBorderColor      = isset( $block_attributes['accordionItemBorderColor'] ) ? $block_attributes['accordionItemBorderColor'] : '#000';
$accordionItemBorderHoverColor = isset( $block_attributes['accordionItemBorderHoverColor'] ) ? $block_attributes['accordionItemBorderHoverColor'] : '#000';

$accordionItemBorderUnits   = isset( $block_attributes['accordionItemBorderUnits'] ) ? $block_attributes['accordionItemBorderUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$accordionItemDesktopBorderWidth = isset( $block_attributes['accordionItemDesktopBorderWidth'] ) ? $block_attributes['accordionItemDesktopBorderWidth'] : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$accordionItemTabBorderWidth  = isset( $block_attributes['accordionItemTabBorderWidth'] ) ? $block_attributes['accordionItemTabBorderWidth'] : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$accordionItemMobileBorderWidth  = isset( $block_attributes['accordionItemMobileBorderWidth'] ) ? $block_attributes['accordionItemMobileBorderWidth'] : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );

$accordionItemDesktopBorder = $accordionItemDesktopBorderWidth['top'] . $accordionItemBorderUnits['Desktop'] . ' ' . $accordionItemDesktopBorderWidth['right'] . $accordionItemBorderUnits['Desktop'] . ' ' . $accordionItemDesktopBorderWidth['bottom'] . $accordionItemBorderUnits['Desktop'] . ' ' . $accordionItemDesktopBorderWidth['left'] . $accordionItemBorderUnits['Desktop'];
$accordionItemTabBorder  = $accordionItemTabBorderWidth['top'] . $accordionItemBorderUnits['Tablet'] . ' ' . $accordionItemTabBorderWidth['right'] . $accordionItemBorderUnits['Tablet'] . ' ' . $accordionItemTabBorderWidth['bottom'] . $accordionItemBorderUnits['Tablet'] . ' ' . $accordionItemTabBorderWidth['left'] . $accordionItemBorderUnits['Tablet'];
$accordionItemMobileBorder  = $accordionItemMobileBorderWidth['top'] . $accordionItemBorderUnits['Mobile'] . ' ' . $accordionItemMobileBorderWidth['right'] . $accordionItemBorderUnits['Mobile'] . ' ' . $accordionItemMobileBorderWidth['bottom'] . $accordionItemBorderUnits['Mobile'] . ' ' . $accordionItemMobileBorderWidth['left'] . $accordionItemBorderUnits['Mobile'];

// Border Radius
$accordionItemBorderRadiusUnits   = isset( $block_attributes['accordionItemBorderRadiusUnits'] ) ? $block_attributes['accordionItemBorderRadiusUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$accordionItemDesktopBorderRadiusWidth = isset( $block_attributes['accordionItemDesktopBorderRadiusWidth'] ) ? $block_attributes['accordionItemDesktopBorderRadiusWidth'] : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$accordionItemTabBorderRadiusWidth  = isset( $block_attributes['accordionItemTabBorderRadiusWidth'] ) ? $block_attributes['accordionItemTabBorderRadiusWidth'] : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );
$accordionItemMobileBorderRadiusWidth  = isset( $block_attributes['accordionItemMobileBorderRadiusWidth'] ) ? $block_attributes['accordionItemMobileBorderRadiusWidth'] : array( 'top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0 );

$accordionItemDesktopBorderRadius = $accordionItemDesktopBorderRadiusWidth['top'] . $accordionItemBorderRadiusUnits['Desktop'] . ' ' . $accordionItemDesktopBorderRadiusWidth['right'] . $accordionItemBorderRadiusUnits['Desktop'] . ' ' . $accordionItemDesktopBorderRadiusWidth['bottom'] . $accordionItemBorderRadiusUnits['Desktop'] . ' ' . $accordionItemDesktopBorderRadiusWidth['left'] . $accordionItemBorderRadiusUnits['Desktop'];
$accordionItemTabBorderRadius  = $accordionItemTabBorderRadiusWidth['top'] . $accordionItemBorderRadiusUnits['Tablet'] . ' ' . $accordionItemTabBorderRadiusWidth['right'] . $accordionItemBorderRadiusUnits['Tablet'] . ' ' . $accordionItemTabBorderRadiusWidth['bottom'] . $accordionItemBorderRadiusUnits['Tablet'] . ' ' . $accordionItemTabBorderRadiusWidth['left'] . $accordionItemBorderRadiusUnits['Tablet'];
$accordionItemMobileBorderRadius  = $accordionItemMobileBorderRadiusWidth['top'] . $accordionItemBorderRadiusUnits['Mobile'] . ' ' . $accordionItemMobileBorderRadiusWidth['right'] . $accordionItemBorderRadiusUnits['Mobile'] . ' ' . $accordionItemMobileBorderRadiusWidth['bottom'] . $accordionItemBorderRadiusUnits['Mobile'] . ' ' . $accordionItemMobileBorderRadiusWidth['left'] . $accordionItemBorderRadiusUnits['Mobile'];
// accordionItem Main End




/** Start CSS Content */
$css_content = "

	.$blockID.fb-accordion-item-main-wrapper {
		position: relative;
		display: block;
		overflow: hidden;
		" . ( $accordionItemZIndex ? "z-index: $accordionItemZIndex;" : "" ) . "
	}
	.$blockID.fb-accordion-item-main-wrapper .fb-accordion-content-wrapper {
		" . (
    	$accordionItemBgType === "gradient"
			? (
				!empty($accordionItemBgCustomGradientSwitcher) && !empty($accordionItemBgCustomGradientInputValue)
				? "background: $accordionItemBgCustomGradientInputValue;"
				: "background: $accordionItemBgGradientColor;"
			)
			: (
				!empty($accordionItemBgImageUrl)
				? "
					background-image: url('$accordionItemBgImageUrl');
					" . (!empty($accordionItemBgImagePosition) ? "background-position: $accordionItemBgImagePosition;" : "") . "
					" . (!empty($accordionItemBgImageAttachment) ? "background-attachment: $accordionItemBgImageAttachment;" : "") . "
					" . (!empty($accordionItemBgImageRepeat) ? "background-repeat: $accordionItemBgImageRepeat;" : "") . "
					" . (!empty($accordionItemBgImageSize) ? "background-size: $accordionItemBgImageSize;" : "") . "
				"
				: "background: $accordionItemBgClassicColor;"
			)
		) . "
		" . ( $accordionItemBorder ? "border-style: $accordionItemBorder;" : "" ) . "
		" . ( $accordionItemDesktopBorder ? "border-width: $accordionItemDesktopBorder;" : "" ) . "
		" . ( $accordionItemBorderColor ? "border-color: $accordionItemBorderColor;" : "" ) . "
		" . ( $accordionItemDesktopBorderRadius ? "border-radius: $accordionItemDesktopBorderRadius;" : "" ) . "
		" . ( !empty($accordionItemBoxShadowCssValue) ? "box-shadow: $accordionItemBoxShadowCssValue;" : "" ) . "
		margin: 0;
		padding: 0;
		transform-origin: top;
		transform: scaleY(0);
		height: 0;
		visibility: hidden;
		opacity: 0;
		transition: all .3s ease-in-out;
	}
	.$blockID.fb-accordion-item-main-wrapper .fb-accordion-content-wrapper.active {
		" . ( $accordionItemDesktopPaddingWidth ? "padding: $accordionItemDesktopPaddingWidth;" : "" ) . "
		" . ( $accordionItemDesktopMarginWidth ? "margin: $accordionItemDesktopMarginWidth;" : "" ) . "
		height: unset;
		visibility: visible;
		transform: scaleY(1);
		opacity: 1;
	}
	.$blockID.fb-accordion-item-main-wrapper .fb-accordion-content-wrapper:hover {
		" . (
    	$accordionItemBgHoverType === "gradient"
			? (
				!empty($accordionItemBgHoverCustomGradientSwitcher) && !empty($accordionItemBgHoverCustomGradientInputValue)
				? "background: $accordionItemBgHoverCustomGradientInputValue;"
				: "background: $accordionItemBgHoverGradientColor;"
			)
			: (
				!empty($accordionItemBgHoverImageUrl)
				? "
					background-image: url('$accordionItemBgHoverImageUrl');
					" . (!empty($accordionItemBgHoverImagePosition) ? "background-position: $accordionItemBgHoverImagePosition;" : "") . "
					" . (!empty($accordionItemBgHoverImageAttachment) ? "background-attachment: $accordionItemBgHoverImageAttachment;" : "") . "
					" . (!empty($accordionItemBgHoverImageRepeat) ? "background-repeat: $accordionItemBgHoverImageRepeat;" : "") . "
					" . (!empty($accordionItemBgHoverImageSize) ? "background-size: $accordionItemBgHoverImageSize;" : "") . "
				"
				: "background: $accordionItemBgHoverClassicColor;"
			)
		) . "
		" . ( $accordionItemBorderHoverColor ? "border-color: $accordionItemBorderHoverColor;" : "" ) . "
		transition: all .3s ease-in-out;
	}

	.$parentBlockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper.active .fb-accordion-tab-icon,
	.$parentBlockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon {
		display: none;
	}
	.$parentBlockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
	.$parentBlockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper.active .fb-accordion-expanded-icon {
		display: block;
	}

	.$blockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
		" . ( $titlePrefixColor ? "fill: $titlePrefixColor;" : "" ) . "
	}
	.$blockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
		" . ( $titlePrefixHoverColor ? "fill: $titlePrefixHoverColor;" : "" ) . "
	}
	.$blockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-prefix {
		" . ( $titleSuffixColor ? "fill: $titleSuffixColor;" : "" ) . "
	}
	.$blockID.fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-suffix {
		" . ( $titleSuffixHoverColor ? "fill: $titleSuffixHoverColor;" : "" ) . "
	}
	

	@media only screen and (max-width: 1024px) {
		.$blockID.fb-accordion-item-main-wrapper .fb-accordion-content-wrapper {
			" . ( $accordionItemTabBorder ? "border-width: $accordionItemTabBorder;" : "" ) . "
			" . ( $accordionItemTabBorderRadius ? "border-radius: $accordionItemTabBorderRadius;" : "" ) . "
		}
		.$blockID.fb-accordion-item-main-wrapper .fb-accordion-content-wrapper.active {
			" . ( $accordionItemTabPaddingWidth ? "padding: $accordionItemTabPaddingWidth;" : "" ) . "
			" . ( $accordionItemTabMarginWidth ? "margin: $accordionItemTabMarginWidth;" : "" ) . "
		}
	}

	@media only screen and (max-width: 767px) {
		.$blockID.fb-accordion-item-main-wrapper .fb-accordion-content-wrapper {
			" . ( $accordionItemMobileBorder ? "border-width: $accordionItemMobileBorder;" : "" ) . "
			" . ( $accordionItemMobileBorderRadius ? "border-radius: $accordionItemMobileBorderRadius;" : "" ) . "
		}
		.$blockID.fb-accordion-item-main-wrapper .fb-accordion-content-wrapper.active {
			" . ( $accordionItemMobilePaddingWidth ? "padding: $accordionItemMobilePaddingWidth;" : "" ) . "
			" . ( $accordionItemMobileMarginWidth ? "margin: $accordionItemMobileMarginWidth;" : "" ) . "
		}
	}
";
/** End CSS Content */

/** Enqueue style for frontend */
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID );
/** End Enqueue style for frontend */
