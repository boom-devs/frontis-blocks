<?php
use FrontisBlocks\Assets\EnqueueBlocksCss;


// Extract the block attributes
$block_attributes = $block['attrs'];
$blockID          = isset( $block_attributes['blockID'] ) ? sanitize_text_field( $block_attributes['blockID'] ) : '';
$deviceType       = isset( $block_attributes['deviceType'] ) ? sanitize_text_field( $block_attributes['deviceType'] ) : 'Desktop';


// Accordion Icon Start
$titleIconSize       = isset( $block_attributes['titleIconSize'] ) ? $block_attributes['titleIconSize'] : ['Desktop' => 22, 'Tablet' => 20, 'Mobile' => 18];
$titleIconSizeUnits  = isset( $block_attributes['titleIconSizeUnits'] ) ? $block_attributes['titleIconSizeUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];
$titleIconColor      = isset( $block_attributes['titleIconColor'] ) ? $block_attributes['titleIconColor'] : '#000';
$titleIconHoverColor = isset( $block_attributes['titleIconHoverColor'] ) ? $block_attributes['titleIconHoverColor'] : '#000';
// Accordion Icon End


// Accordion Item Start
$accordionItemGap      = isset( $block_attributes['accordionItemGap'] ) ? $block_attributes['accordionItemGap'] : ['Desktop' => 20, 'Tablet' => 15, 'Mobile' => 15];
$accordionItemGapUnits = isset( $block_attributes['accordionItemGapUnits'] ) ? $block_attributes['accordionItemGapUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$titleSpacing      = isset( $block_attributes['titleSpacing'] ) ? $block_attributes['titleSpacing'] : ['Desktop' => 20, 'Tablet' => 15, 'Mobile' => 15];
$titleSpacingUnits = isset( $block_attributes['titleSpacingUnits'] ) ? $block_attributes['titleSpacingUnits'] : ['Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px'];

$titleAlignment = isset( $block_attributes['titleAlignment'] ) ? $block_attributes['titleAlignment'] : 'between';
$iconPosition   = isset( $block_attributes['iconPosition'] ) ? $block_attributes['iconPosition'] : 'right';

$titleBGColor      = isset( $block_attributes['titleBGColor'] ) ? $block_attributes['titleBGColor'] : 'antiquewhite';
$titleBGHoverColor = isset( $block_attributes['titleBGHoverColor'] ) ? $block_attributes['titleBGHoverColor'] : 'antiquewhite';

// padding
$accordionItemsPaddingUnits   = isset( $block_attributes['accordionItemsPaddingUnits'] ) ? $block_attributes['accordionItemsPaddingUnits'] : 'px';
$accordionItemsDesktopPadding = isset( $block_attributes['accordionItemsDesktopPadding'] ) ? $block_attributes['accordionItemsDesktopPadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
$accordionItemsTabPadding     = isset( $block_attributes['accordionItemsTabPadding'] ) ? $block_attributes['accordionItemsTabPadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];
$accordionItemsMobilePadding  = isset( $block_attributes['accordionItemsMobilePadding'] ) ? $block_attributes['accordionItemsMobilePadding'] : ['top' => 20, 'bottom' => 20, 'left' => 20, 'right' => 20];

$accordionItemsDesktopPaddingWidth = $accordionItemsDesktopPadding['top'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsDesktopPadding['right'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsDesktopPadding['bottom'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsDesktopPadding['left'] . $accordionItemsPaddingUnits;
$accordionItemsTabPaddingWidth = $accordionItemsTabPadding['top'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsTabPadding['right'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsTabPadding['bottom'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsTabPadding['left'] . $accordionItemsPaddingUnits;
$accordionItemsMobilePaddingWidth = $accordionItemsMobilePadding['top'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsMobilePadding['right'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsMobilePadding['bottom'] . $accordionItemsPaddingUnits . ' ' . $accordionItemsMobilePadding['left'] . $accordionItemsPaddingUnits;

// border
$accordionItemsBorder           = isset( $block_attributes['accordionItemsBorder'] ) ? $block_attributes['accordionItemsBorder'] : 'none';
$accordionItemsBorderColor      = isset( $block_attributes['accordionItemsBorderColor'] ) ? $block_attributes['accordionItemsBorderColor'] : '#000';
$accordionItemsBorderHoverColor = isset( $block_attributes['accordionItemsBorderHoverColor'] ) ? $block_attributes['accordionItemsBorderHoverColor'] : '#000';

$accordionItemsBorderUnits        = isset( $block_attributes['accordionItemsBorderUnits'] ) ? $block_attributes['accordionItemsBorderUnits'] : 'px';
$accordionItemsDesktopBorderWidth = isset( $block_attributes['accordionItemsDesktopBorderWidth'] ) ? $block_attributes['accordionItemsDesktopBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionItemsTabBorderWidth     = isset( $block_attributes['accordionItemsTabBorderWidth'] ) ? $block_attributes['accordionItemsTabBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionItemsMobileBorderWidth  = isset( $block_attributes['accordionItemsMobileBorderWidth'] ) ? $block_attributes['accordionItemsMobileBorderWidth'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$accordionItemsDesktopBorder = $accordionItemsDesktopBorderWidth['top'] . $accordionItemsBorderUnits . ' ' . $accordionItemsDesktopBorderWidth['right'] . $accordionItemsBorderUnits . ' ' . $accordionItemsDesktopBorderWidth['bottom'] . $accordionItemsBorderUnits . ' ' . $accordionItemsDesktopBorderWidth['left'] . $accordionItemsBorderUnits;
$accordionItemsTabBorder     = $accordionItemsTabBorderWidth['top'] . $accordionItemsBorderUnits . ' ' . $accordionItemsTabBorderWidth['right'] . $accordionItemsBorderUnits . ' ' . $accordionItemsTabBorderWidth['bottom'] . $accordionItemsBorderUnits . ' ' . $accordionItemsTabBorderWidth['left'] . $accordionItemsBorderUnits;
$accordionItemsMobileBorder  = $accordionItemsMobileBorderWidth['top'] . $accordionItemsBorderUnits . ' ' . $accordionItemsMobileBorderWidth['right'] . $accordionItemsBorderUnits . ' ' . $accordionItemsMobileBorderWidth['bottom'] . $accordionItemsBorderUnits . ' ' . $accordionItemsMobileBorderWidth['left'] . $accordionItemsBorderUnits;

// border radius
$accordionItemsBorderRadiusUnits        = isset( $block_attributes['accordionItemsBorderRadiusUnits'] ) ? $block_attributes['accordionItemsBorderRadiusUnits'] : 'px';
$accordionItemsDesktopBorderRadiusWidth = isset( $block_attributes['accordionItemsDesktopBorderRadiusWidth'] ) ? $block_attributes['accordionItemsDesktopBorderRadiusWidth'] : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];
$accordionItemsTabBorderRadiusWidth     = isset( $block_attributes['accordionItemsTabBorderRadiusWidth'] ) ? $block_attributes['accordionItemsTabBorderRadiusWidth'] : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];
$accordionItemsMobileBorderRadiusWidth  = isset( $block_attributes['accordionItemsMobileBorderRadiusWidth'] ) ? $block_attributes['accordionItemsMobileBorderRadiusWidth'] : ['top' => 10, 'bottom' => 10, 'left' => 10, 'right' => 10];

$accordionItemsDesktopBorderRadius = $accordionItemsDesktopBorderRadiusWidth['top'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsDesktopBorderRadiusWidth['right'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsDesktopBorderRadiusWidth['bottom'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsDesktopBorderRadiusWidth['left'] . $accordionItemsBorderRadiusUnits;
$accordionItemsTabBorderRadius     = $accordionItemsTabBorderRadiusWidth['top'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsTabBorderRadiusWidth['right'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsTabBorderRadiusWidth['bottom'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsTabBorderRadiusWidth['left'] . $accordionItemsBorderRadiusUnits;
$accordionItemsMobileBorderRadius  = $accordionItemsMobileBorderRadiusWidth['top'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsMobileBorderRadiusWidth['right'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsMobileBorderRadiusWidth['bottom'] . $accordionItemsBorderRadiusUnits . ' ' . $accordionItemsMobileBorderRadiusWidth['left'] . $accordionItemsBorderRadiusUnits;
// Accordion Item End


// Accordion Title Typo Start
$titleFontFamily         = isset( $block_attributes['titleFontFamily'] ) ? sanitize_text_field( $block_attributes['titleFontFamily'] ) : 'inherit';
$titleFontSize           = isset( $block_attributes['titleFontSize'] ) ? $block_attributes['titleFontSize'] : array( 'Desktop' => '', 'Tablet' => '', 'Mobile' => '' );
$titleFontSizeUnits      = isset( $block_attributes['titleFontSizeUnits'] ) ? $block_attributes['titleFontSizeUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$titleFontWeight         = isset( $block_attributes['titleFontWeight'] ) ? sanitize_text_field( $block_attributes['titleFontWeight'] ) : 'normal';
$titleFontStyle          = isset( $block_attributes['titleFontStyle'] ) ? sanitize_text_field( $block_attributes['titleFontStyle'] ) : 'normal';
$titleTextTransform      = isset( $block_attributes['titleTextTransform'] ) ? sanitize_text_field( $block_attributes['titleTextTransform'] ) : 'none';
$titleTextDecoration     = isset( $block_attributes['titleTextDecoration'] ) ? sanitize_text_field( $block_attributes['titleTextDecoration'] ) : 'none';
$titleLetterSpacing      = isset( $block_attributes['titleLetterSpacing'] ) ? $block_attributes['titleLetterSpacing'] : array( 'Desktop' => '0', 'Tablet' => '0', 'Mobile' => '0' );
$titleLineHeight         = isset( $block_attributes['titleLineHeight'] ) ? $block_attributes['titleLineHeight'] : array( 'Desktop' => '1.5', 'Tablet' => '1.4', 'Mobile' => '1.3' );
$titleLetterSpacingUnits = isset( $block_attributes['titleLetterSpacingUnits'] ) ? $block_attributes['titleLetterSpacingUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$titleLineHeightUnits    = isset( $block_attributes['titleLineHeightUnits'] ) ? $block_attributes['titleLineHeightUnits'] : array( 'Desktop' => 'em', 'Tablet' => 'em', 'Mobile' => 'em' );

$titleColor      = isset( $block_attributes['titleColor'] ) ? $block_attributes['titleColor'] : '#000000';
$titleHoverColor = isset( $block_attributes['titleHoverColor'] ) ? $block_attributes['titleHoverColor'] : '#333333';
// Accordion Title Typo End


// Accordion Main Start
$accordionZIndex = isset( $block_attributes['accordionZIndex'] ) ? $block_attributes['accordionZIndex'] : '1';
$accordionBgColor      = isset( $block_attributes['accordionBgColor'] ) ? $block_attributes['accordionBgColor'] : 'transparent';
$accordionBgHoverColor = isset( $block_attributes['accordionBgHoverColor'] ) ? $block_attributes['accordionBgHoverColor'] : 'transparent';

// margin
$accordionMarginUnits   = isset( $block_attributes['accordionMarginUnits'] ) ? $block_attributes['accordionMarginUnits'] : 'px';
$accordionDesktopMargin = isset( $block_attributes['accordionDesktopMargin'] ) ? $block_attributes['accordionDesktopMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionTabMargin     = isset( $block_attributes['accordionTabMargin'] ) ? $block_attributes['accordionTabMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionMobileMargin  = isset( $block_attributes['accordionMobileMargin'] ) ? $block_attributes['accordionMobileMargin'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$accordionDesktopMarginWidth = $accordionDesktopMargin['top'] . $accordionMarginUnits . ' ' . $accordionDesktopMargin['right'] . $accordionMarginUnits . ' ' . $accordionDesktopMargin['bottom'] . $accordionMarginUnits . ' ' . $accordionDesktopMargin['left'] . $accordionMarginUnits;
$accordionTabMarginWidth     = $accordionTabMargin['top'] . $accordionMarginUnits . ' ' . $accordionTabMargin['right'] . $accordionMarginUnits . ' ' . $accordionTabMargin['bottom'] . $accordionMarginUnits . ' ' . $accordionTabMargin['left'] . $accordionMarginUnits;
$accordionMobileMarginWidth  = $accordionMobileMargin['top'] . $accordionMarginUnits . ' ' . $accordionMobileMargin['right'] . $accordionMarginUnits . ' ' . $accordionMobileMargin['bottom'] . $accordionMarginUnits . ' ' . $accordionMobileMargin['left'] . $accordionMarginUnits;

// Padding
$accordionPaddingUnits   = isset( $block_attributes['accordionPaddingUnits'] ) ? $block_attributes['accordionPaddingUnits'] : 'px';
$accordionDesktopPadding = isset( $block_attributes['accordionDesktopPadding'] ) ? $block_attributes['accordionDesktopPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionTabPadding     = isset( $block_attributes['accordionTabPadding'] ) ? $block_attributes['accordionTabPadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionMobilePadding  = isset( $block_attributes['accordionMobilePadding'] ) ? $block_attributes['accordionMobilePadding'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$accordionDesktopPaddingWidth = $accordionDesktopPadding['top'] . $accordionPaddingUnits . ' ' . $accordionDesktopPadding['right'] . $accordionPaddingUnits . ' ' . $accordionDesktopPadding['bottom'] . $accordionPaddingUnits . ' ' . $accordionDesktopPadding['left'] . $accordionPaddingUnits;
$accordionTabPaddingWidth     = $accordionTabPadding['top'] . $accordionPaddingUnits . ' ' . $accordionTabPadding['right'] . $accordionPaddingUnits . ' ' . $accordionTabPadding['bottom'] . $accordionPaddingUnits . ' ' . $accordionTabPadding['left'] . $accordionPaddingUnits;
$accordionMobilePaddingWidth  = $accordionMobilePadding['top'] . $accordionPaddingUnits . ' ' . $accordionMobilePadding['right'] . $accordionPaddingUnits . ' ' . $accordionMobilePadding['bottom'] . $accordionPaddingUnits . ' ' . $accordionMobilePadding['left'] . $accordionPaddingUnits;

// Border
$accordionBorder           = isset( $block_attributes['accordionBorder'] ) ? sanitize_text_field( $block_attributes['accordionBorder'] ) : 'solid';
$accordionBorderColor      = isset( $block_attributes['accordionBorderColor'] ) ? $block_attributes['accordionBorderColor'] : '#cccccc';
$accordionBorderHoverColor = isset( $block_attributes['accordionBorderHoverColor'] ) ? $block_attributes['accordionBorderHoverColor'] : '#aaaaaa';

$accordionBorderUnits   = isset( $block_attributes['accordionBorderUnits'] ) ? $block_attributes['accordionBorderUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$accordionBorderDesktop = isset( $block_attributes['accordionBorderDesktop'] ) ? $block_attributes['accordionBorderDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionBorderTablet  = isset( $block_attributes['accordionBorderTablet'] ) ? $block_attributes['accordionBorderTablet'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionBorderMobile  = isset( $block_attributes['accordionBorderMobile'] ) ? $block_attributes['accordionBorderMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$accordionDesktopBorderWidth = $accordionBorderDesktop['top'] . $accordionBorderUnits['Desktop'] . ' ' . $accordionBorderDesktop['right'] . $accordionBorderUnits['Desktop'] . ' ' . $accordionBorderDesktop['bottom'] . $accordionBorderUnits['Desktop'] . ' ' . $accordionBorderDesktop['left'] . $accordionBorderUnits['Desktop'];
$accordionTabletBorderWidth  = $accordionBorderTablet['top'] . $accordionBorderUnits['Tablet'] . ' ' . $accordionBorderTablet['right'] . $accordionBorderUnits['Tablet'] . ' ' . $accordionBorderTablet['bottom'] . $accordionBorderUnits['Tablet'] . ' ' . $accordionBorderTablet['left'] . $accordionBorderUnits['Tablet'];
$accordionMobileBorderWidth  = $accordionBorderMobile['top'] . $accordionBorderUnits['Mobile'] . ' ' . $accordionBorderMobile['right'] . $accordionBorderUnits['Mobile'] . ' ' . $accordionBorderMobile['bottom'] . $accordionBorderUnits['Mobile'] . ' ' . $accordionBorderMobile['left'] . $accordionBorderUnits['Mobile'];

// Border Radius
$accordionBorderRadiusUnits   = isset( $block_attributes['accordionBorderRadiusUnits'] ) ? $block_attributes['accordionBorderRadiusUnits'] : array( 'Desktop' => 'px', 'Tablet' => 'px', 'Mobile' => 'px' );
$accordionBorderRadiusDesktop = isset( $block_attributes['accordionBorderRadiusDesktop'] ) ? $block_attributes['accordionBorderRadiusDesktop'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionBorderRadiusTablet  = isset( $block_attributes['accordionBorderRadiusTablet'] ) ? $block_attributes['accordionBorderRadiusTablet'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];
$accordionBorderRadiusMobile  = isset( $block_attributes['accordionBorderRadiusMobile'] ) ? $block_attributes['accordionBorderRadiusMobile'] : ['top' => 0, 'bottom' => 0, 'left' => 0, 'right' => 0];

$accordionDesktopBorderRadiusWidth = $accordionBorderRadiusDesktop['top'] . $accordionBorderRadiusUnits['Desktop'] . ' ' . $accordionBorderRadiusDesktop['right'] . $accordionBorderRadiusUnits['Desktop'] . ' ' . $accordionBorderRadiusDesktop['bottom'] . $accordionBorderRadiusUnits['Desktop'] . ' ' . $accordionBorderRadiusDesktop['left'] . $accordionBorderRadiusUnits['Desktop'];
$accordionTabletBorderRadiusWidth  = $accordionBorderRadiusTablet['top'] . $accordionBorderRadiusUnits['Tablet'] . ' ' . $accordionBorderRadiusTablet['right'] . $accordionBorderRadiusUnits['Tablet'] . ' ' . $accordionBorderRadiusTablet['bottom'] . $accordionBorderRadiusUnits['Tablet'] . ' ' . $accordionBorderRadiusTablet['left'] . $accordionBorderRadiusUnits['Tablet'];
$accordionMobileBorderRadiusWidth  = $accordionBorderRadiusMobile['top'] . $accordionBorderRadiusUnits['Mobile'] . ' ' . $accordionBorderRadiusMobile['right'] . $accordionBorderRadiusUnits['Mobile'] . ' ' . $accordionBorderRadiusMobile['bottom'] . $accordionBorderRadiusUnits['Mobile'] . ' ' . $accordionBorderRadiusMobile['left'] . $accordionBorderRadiusUnits['Mobile'];
// Accordion Main End




/** Start CSS Content */
$css_content = "

	.$blockID.fb-accordion-main-wrapper {
		position: relative;
		" . ( $accordionBgColor ? "background-color: $accordionBgColor;" : "" ) . "
		" . ( $accordionDesktopPaddingWidth ? "padding: $accordionDesktopPaddingWidth;" : "" ) . "
		" . ( $accordionDesktopMarginWidth ? "margin: $accordionDesktopMarginWidth;" : "" ) . "
		" . ( $accordionBorder ? "border-style: $accordionBorder;" : "" ) . "
		" . ( $accordionDesktopBorderWidth ? "border-width: $accordionDesktopBorderWidth;" : "" ) . "
		" . ( $accordionDesktopBorderRadiusWidth ? "border-radius: $accordionDesktopBorderRadiusWidth;" : "" ) . "
		" . ( $accordionBorderColor ? "border-color: $accordionBorderColor;" : "" ) . "
		" . ( $accordionZIndex ? "z-index: $accordionZIndex;" : "" ) . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}
	.$blockID.fb-accordion-main-wrapper:hover {
		" . ( $accordionBorderHoverColor ? "border-color: $accordionBorderHoverColor;" : "" ) . "
		" . ( $accordionBgHoverColor ? "background-color: $accordionBgHoverColor;" : "" ) . "
		transition: background-color 0.3s ease, border-color 0.3s ease;
	}


	.$blockID.fb-accordion-main-wrapper .fb-accordion-inner {
		display: flex;
		flex-direction: column;
		" . ( $accordionItemGap['Desktop'] && $accordionItemGapUnits['Desktop'] ? "gap: {$accordionItemGap['Desktop']}{$accordionItemGapUnits['Desktop']};" : "" ) . "
		padding: 0;
		margin: 0;
	}

	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
		display: flex;
		align-items: center;
		" . ( $titleSpacing['Desktop'] && $titleSpacingUnits['Desktop'] ? "gap: {$titleSpacing['Desktop']}{$titleSpacingUnits['Desktop']};" : "" ) . "
		" . ( $titleAlignment === 'left' ? "justify-content: left;" : "" ) . "
		" . ( $titleAlignment === 'center' ? "justify-content: center;" : "" ) . "
		" . ( $titleAlignment === 'right' ? "justify-content: right;" : "" ) . "
		" . ( $titleAlignment === 'between' ? "justify-content: space-between;" : "" ) . "
		" . ( $iconPosition === 'left' ? "flex-direction: row-reverse;" : "" ) . "
		" . ( $iconPosition === 'right' ? "flex-direction: row;" : "" ) . "
		" . ( $accordionItemsDesktopPaddingWidth ? "padding: $accordionItemsDesktopPaddingWidth;" : "" ) . "
        " . ( $accordionItemsBorder ? "border-style: $accordionItemsBorder;" : "" ) . "
        " . ( $accordionItemsDesktopBorder ? "border-width: $accordionItemsDesktopBorder;" : "" ) . "
        " . ( $accordionItemsBorderColor ? "border-color: $accordionItemsBorderColor;" : "" ) . "
        " . ( $accordionItemsDesktopBorderRadius ? "border-radius: $accordionItemsDesktopBorderRadius !important;" : "" ) . "
		" . ( $titleBGColor ? "background-color: $titleBGColor;" : "" ) . "
		transition: all .3s ease-in-out;
	}
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper:hover {
		" . ( $accordionItemsBorderHoverColor ? "border-color: $accordionItemsBorderHoverColor;" : "" ) . "
		" . ( $titleBGHoverColor ? "background-color: $titleBGHoverColor;" : "" ) . "
		transition: all .3s ease-in-out;
	}

	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon {
		" . ( $titleIconSize['Desktop'] && $titleIconSizeUnits['Desktop'] ? "width: {$titleIconSize['Desktop']}{$titleIconSizeUnits['Desktop']};" : "" ) . "
		" . ( $titleIconSize['Desktop'] && $titleIconSizeUnits['Desktop'] ? "height: {$titleIconSize['Desktop']}{$titleIconSizeUnits['Desktop']};" : "" ) . "
		" . ( $titleIconColor ? "fill: $titleIconColor;" : "" ) . "
		transition: all .3s ease-in-out;
	}
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper:hover .fb-accordion-tab-icon,
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper:hover .fb-accordion-expanded-icon {
		" . ( $titleIconHoverColor ? "fill: $titleIconHoverColor;" : "" ) . "
		transition: all .3s ease-in-out;
	}
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-tab-icon svg,
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon svg {
		width: 100%;
		height: 100%;
	}

	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title {
		" . ( $titleColor ? "color: $titleColor;" : "" ) . "
		" . ( $titleFontFamily ? "font-family: $titleFontFamily;" : "" ) . "
		" . ( $titleFontSize['Desktop'] && $titleFontSizeUnits['Desktop'] ? "font-size: {$titleFontSize['Desktop']}{$titleFontSizeUnits['Desktop']};" : "" ) . "
		" . ( $titleFontWeight ? "font-weight: $titleFontWeight;" : "" ) . "
		" . ( $titleFontStyle ? "font-style: $titleFontStyle;" : "" ) . "
		" . ( $titleTextTransform ? "text-transform: $titleTextTransform;" : "" ) . "
		" . ( $titleTextDecoration ? "text-decoration: $titleTextDecoration;" : "" ) . "
		" . ( $titleLetterSpacing['Desktop'] && $titleLetterSpacingUnits['Desktop'] ? "letter-spacing: {$titleLetterSpacing['Desktop']}{$titleLetterSpacingUnits['Desktop']};" : "" ) . "
		" . ( $titleLineHeight['Desktop'] && $titleLineHeightUnits['Desktop'] ? "line-height: {$titleLineHeight['Desktop']}{$titleLineHeightUnits['Desktop']};" : "" ) . "
		transition: all .3s ease-in-out;
	}
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper:hover .fb-accordion-title {
		" . ( $titleHoverColor ? "color: $titleHoverColor;" : "" ) . "
		transition: all .3s ease-in-out;
	}

	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
		display: inline-flex;
		align-items: center;
		" . ( $titleSpacing['Desktop'] && $titleSpacingUnits['Desktop'] ? "gap: {$titleSpacing['Desktop']}{$titleSpacingUnits['Desktop']};" : "" ) . "

	}
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
		" . ( $titleIconSize['Desktop'] && $titleIconSizeUnits['Desktop'] ? "width: {$titleIconSize['Desktop']}{$titleIconSizeUnits['Desktop']};" : "" ) . "
		" . ( $titleIconSize['Desktop'] && $titleIconSizeUnits['Desktop'] ? "height: {$titleIconSize['Desktop']}{$titleIconSizeUnits['Desktop']};" : "" ) . "
	}
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
		" . ( $titleIconSize['Desktop'] && $titleIconSizeUnits['Desktop'] ? "width: {$titleIconSize['Desktop']}{$titleIconSizeUnits['Desktop']};" : "" ) . "
		" . ( $titleIconSize['Desktop'] && $titleIconSizeUnits['Desktop'] ? "height: {$titleIconSize['Desktop']}{$titleIconSizeUnits['Desktop']};" : "" ) . "
	}

	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix img,
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix svg,
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix img,
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix svg {
		margin: 0;
		padding: 0;
		min-width: 100%;
		width: 100%;
		height: 100%;
	}

	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix img,
	.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix img {
		margin: 0 !important;
        padding: 0 !important;
        min-width: 100% !important;
        width: 100% !important;
        height: 100% !important;
        object-fix: cover !important;
	}

	@media only screen and (max-width: 1024px) {
		.$blockID.fb-accordion-main-wrapper {
			" . ( $accordionTabPaddingWidth ? "padding: $accordionTabPaddingWidth;" : "" ) . "
			" . ( $accordionTabMarginWidth ? "margin: $accordionTabMarginWidth;" : "" ) . "
			" . ( $accordionTabletBorderWidth ? "border-width: $accordionTabletBorderWidth;" : "" ) . "
			" . ( $accordionTabletBorderRadiusWidth ? "border-radius: $accordionTabletBorderRadiusWidth;" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-inner {
			" . ( $accordionItemGap['Tablet'] && $accordionItemGapUnits['Tablet'] ? "gap: {$accordionItemGap['Tablet']}{$accordionItemGapUnits['Tablet']};" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
			" . ( $titleSpacing['Tablet'] && $titleSpacingUnits['Tablet'] ? "gap: {$titleSpacing['Tablet']}{$titleSpacingUnits['Tablet']};" : "" ) . "
			" . ( $accordionItemsTabPaddingWidth ? "padding: $accordionItemsTabPaddingWidth;" : "" ) . "
			" . ( $accordionItemsTabBorder ? "border-width: $accordionItemsTabBorder;" : "" ) . "
			" . ( $accordionItemsTabBorderRadius ? "border-radius: $accordionItemsTabBorderRadius !important;" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon {
			" . ( $titleIconSize['Tablet'] && $titleIconSizeUnits['Tablet'] ? "width: {$titleIconSize['Tablet']}{$titleIconSizeUnits['Tablet']};" : "" ) . "
			" . ( $titleIconSize['Tablet'] && $titleIconSizeUnits['Tablet'] ? "height: {$titleIconSize['Tablet']}{$titleIconSizeUnits['Tablet']};" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title {
			" . ( $titleFontSize['Tablet'] && $titleFontSizeUnits['Tablet'] ? "font-size: {$titleFontSize['Tablet']}{$titleFontSizeUnits['Tablet']};" : "" ) . "
			" . ( $titleLetterSpacing['Tablet'] && $titleLetterSpacingUnits['Tablet'] ? "letter-spacing: {$titleLetterSpacing['Tablet']}{$titleLetterSpacingUnits['Tablet']};" : "" ) . "
			" . ( $titleLineHeight['Tablet'] && $titleLineHeightUnits['Tablet'] ? "line-height: {$titleLineHeight['Tablet']}{$titleLineHeightUnits['Tablet']};" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
			display: inline-flex;
			align-items: center;
			" . ( $titleSpacing['Tablet'] && $titleSpacingUnits['Tablet'] ? "gap: {$titleSpacing['Tablet']}{$titleSpacingUnits['Tablet']};" : "" ) . "

		}
		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
			" . ( $titleIconSize['Tablet'] && $titleIconSizeUnits['Tablet'] ? "width: {$titleIconSize['Tablet']}{$titleIconSizeUnits['Tablet']};" : "" ) . "
			" . ( $titleIconSize['Tablet'] && $titleIconSizeUnits['Tablet'] ? "height: {$titleIconSize['Tablet']}{$titleIconSizeUnits['Tablet']};" : "" ) . "
		}
		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
			" . ( $titleIconSize['Tablet'] && $titleIconSizeUnits['Tablet'] ? "width: {$titleIconSize['Tablet']}{$titleIconSizeUnits['Tablet']};" : "" ) . "
			" . ( $titleIconSize['Tablet'] && $titleIconSizeUnits['Tablet'] ? "height: {$titleIconSize['Tablet']}{$titleIconSizeUnits['Tablet']};" : "" ) . "
		}
	}

	@media only screen and (max-width: 767px) {
		.$blockID.fb-accordion-main-wrapper {
			" . ( $accordionMobilePaddingWidth ? "padding: $accordionMobilePaddingWidth;" : "" ) . "
			" . ( $accordionMobileMarginWidth ? "margin: $accordionMobileMarginWidth;" : "" ) . "
			" . ( $accordionMobileBorderWidth ? "border-width: $accordionMobileBorderWidth;" : "" ) . "
			" . ( $accordionMobileBorderRadiusWidth ? "border-radius: $accordionMobileBorderRadiusWidth;" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-inner {
			" . ( $accordionItemGap['Mobile'] && $accordionItemGapUnits['Mobile'] ? "gap: {$accordionItemGap['Mobile']}{$accordionItemGapUnits['Mobile']};" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
			" . ( $titleSpacing['Mobile'] && $titleSpacingUnits['Mobile'] ? "gap: {$titleSpacing['Mobile']}{$titleSpacingUnits['Mobile']};" : "" ) . "
			" . ( $accordionItemsMobilePaddingWidth ? "padding: $accordionItemsMobilePaddingWidth;" : "" ) . "
			" . ( $accordionItemsMobileBorder ? "border-width: $accordionItemsMobileBorder;" : "" ) . "
			" . ( $accordionItemsMobileBorderRadius ? "border-radius: $accordionItemsMobileBorderRadius !important;" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon {
			" . ( $titleIconSize['Mobile'] && $titleIconSizeUnits['Mobile'] ? "width: {$titleIconSize['Mobile']}{$titleIconSizeUnits['Mobile']};" : "" ) . "
			" . ( $titleIconSize['Mobile'] && $titleIconSizeUnits['Mobile'] ? "height: {$titleIconSize['Mobile']}{$titleIconSizeUnits['Mobile']};" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title {
			" . ( $titleFontSize['Mobile'] && $titleFontSizeUnits['Mobile'] ? "font-size: {$titleFontSize['Mobile']}{$titleFontSizeUnits['Mobile']};" : "" ) . "
			" . ( $titleLetterSpacing['Mobile'] && $titleLetterSpacingUnits['Mobile'] ? "letter-spacing: {$titleLetterSpacing['Mobile']}{$titleLetterSpacingUnits['Mobile']};" : "" ) . "
			" . ( $titleLineHeight['Mobile'] && $titleLineHeightUnits['Mobile'] ? "line-height: {$titleLineHeight['Mobile']}{$titleLineHeightUnits['Mobile']};" : "" ) . "
		}

		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
			display: inline-flex;
			align-items: center;
			" . ( $titleSpacing['Mobile'] && $titleSpacingUnits['Mobile'] ? "gap: {$titleSpacing['Mobile']}{$titleSpacingUnits['Mobile']};" : "" ) . "

		}
		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
			" . ( $titleIconSize['Mobile'] && $titleIconSizeUnits['Mobile'] ? "width: {$titleIconSize['Mobile']}{$titleIconSizeUnits['Mobile']};" : "" ) . "
			" . ( $titleIconSize['Mobile'] && $titleIconSizeUnits['Mobile'] ? "height: {$titleIconSize['Mobile']}{$titleIconSizeUnits['Mobile']};" : "" ) . "
		}
		.$blockID.fb-accordion-main-wrapper .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
			" . ( $titleIconSize['Mobile'] && $titleIconSizeUnits['Mobile'] ? "width: {$titleIconSize['Mobile']}{$titleIconSizeUnits['Mobile']};" : "" ) . "
			" . ( $titleIconSize['Mobile'] && $titleIconSizeUnits['Mobile'] ? "height: {$titleIconSize['Mobile']}{$titleIconSizeUnits['Mobile']};" : "" ) . "
		}
	}
";
/** End CSS Content */

/** Enqueue style for frontend */
EnqueueBlocksCss::enqueue_block_asset( $css_content, $single_block['slug'], $blockID );
/** End Enqueue style for frontend */
