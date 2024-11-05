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
$accordionItemBgColor      = isset( $block_attributes['accordionItemBgColor'] ) ? $block_attributes['accordionItemBgColor'] : 'transparent';
$accordionItemBgHoverColor = isset( $block_attributes['accordionItemBgHoverColor'] ) ? $block_attributes['accordionItemBgHoverColor'] : 'transparent';

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
		" . ( $accordionItemBgColor ? "background-color: $accordionItemBgColor;" : "" ) . "
		" . ( $accordionItemBorder ? "border-style: $accordionItemBorder;" : "" ) . "
		" . ( $accordionItemDesktopBorder ? "border-width: $accordionItemDesktopBorder;" : "" ) . "
		" . ( $accordionItemBorderColor ? "border-color: $accordionItemBorderColor;" : "" ) . "
		" . ( $accordionItemDesktopBorderRadius ? "border-radius: $accordionItemDesktopBorderRadius;" : "" ) . "
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
		" . ( $accordionItemBgHoverColor ? "background-color: $accordionItemBgHoverColor;" : "" ) . "
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
