/**
 * Breadcrumb Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateBreadcrumbBlockStyle = (attributes) => {
    const {
		blockID,
		breadcrumbAlignment,
		separatorType,
		separatorText,
		separatorIcon,
		showHomePage,
		homeprefixSwitcher,
		homeTextPrefix,
		showHomeIcon,
		homeIcon,
		homeText,
		showItemIcon,
		itemIcon,
		breadcrumbTypography,
		align,
		//Items style
		breadcrumbItemGlobalTypographyData,
		breadcrumbItemGlobalTypoSwitcher,
		breadcrumbItemGlobalTypoType,
		breadcrumbItemGlobalTypoOption,
		breadcrumbItemFontFamily,
		breadcrumbItemFontSize,
		breadcrumbItemFontSizeUnits,
		breadcrumbItemFontWeight,
		breadcrumbItemFontStyle,
		breadcrumbItemTextTransform,
		breadcrumbItemTextDecoration,
		breadcrumbItemLetterSpacing,
		breadcrumbItemLetterSpacingUnits,
		breadcrumbItemLineHeight,
		breadcrumbItemLineHeightUnits,
		breadcrumbGlobalZIndex,
		breadcrumbOverflow,
		//Current item
		breadcrumbCurrentItemGlobalTypographyData,
		breadcrumbCurrentItemGlobalTypoSwitcher,
		breadcrumbCurrentItemGlobalTypoType,
		breadcrumbCurrentItemGlobalTypoOption,
		breadcrumbCurrentItemFontFamily,
		breadcrumbCurrentItemFontSize,
		breadcrumbCurrentItemFontSizeUnits,
		breadcrumbCurrentItemFontWeight,
		breadcrumbCurrentItemFontStyle,
		breadcrumbCurrentItemTextTransform,
		breadcrumbCurrentItemTextDecoration,
		breadcrumbCurrentItemLetterSpacing,
		breadcrumbCurrentItemLetterSpacingUnits,
		breadcrumbCurrentItemLineHeight,
		breadcrumbCurrentItemLineHeightUnits,
		breadcrumbCurrentItemColorSwitcher,
		breadcrumbCurrentItemColor,
		breadcrumbCurrentItemHoverColor,
		breadcrumbCurrentItemBgColorSwitcher,
		breadcrumbCurrentItemBgColor,
		breadcrumbCurrentItemBgHoverColor,
		//Item color
		breadcrumbItemColorSwitcher,
		breadcrumbItemColor,
		breadcrumbItemHoverColor,
		breadcrumbItemBgColorSwitcher,
		breadcrumbItemBgColor,
		breadcrumbItemBgHoverColor,
		breadcrumbItemGap,
		breadcrumbItemGapUnits,
		//Item Spacing
		breadcrumbItemBorder,
		breadcrumbItemBorderColorSwitcher,
		breadcrumbItemBorderColor,
		breadcrumbItemBorderHoverColor,
		breadcrumbItemBorderUnits,
		breadcrumbItemDesktopBorder,
		breadcrumbItemTabletBorder,
		breadcrumbItemMobileBorder,
		breadcrumbItemBorderLink,
		breadcrumbItemBorderRadiusUnits,
		breadcrumbItemDesktopBorderRadius,
		breadcrumbItemTabBorderRadius,
		breadcrumbItemMobileBorderRadius,
		breadcrumbItemBorderRadiusLink,
		breadcrumbItemBoxShadowSwitcher,
		breadcrumbItemBoxShadowValues,
		breadcrumbItemBoxShadowCssValue,
		breadcrumbItemBoxShadowHoverValues,
		breadcrumbItemBoxShadowHoverCssValue,
		breadcrumbItemPaddingUnits,
		breadcrumbItemDesktopPadding,
		breadcrumbItemTabPadding,
		breadcrumbItemMobilePadding,
		breadcrumbItemPaddingLink,
		breadcrumbItemMarginUnits,
		breadcrumbItemDesktopMargin,
		breadcrumbItemTabMargin,
		breadcrumbItemMobileMargin,
		breadcrumbItemMarginLink,
		breadcrumbIconSize,
		breadcrumbIconSizeUnits,
		breadcrumbHomeIconGap,
		breadcrumbHomeIconGapUnits,
		breadcrumbIconBgSize,
		breadcrumbIconBgSizeUnits,
		breadcrumbIconColorSwitcher,
		breadcrumbIconColor,
		breadcrumbIconHoverColor,
		breadcrumbIconBgColorSwitcher,
		breadcrumbIconBgColor,
		breadcrumbIconBgHoverColor,

		//seperator 
		breadcrumbSeperatorSize,
		breadcrumbSeperatorSizeUnits,
		breadcrumbSeperatorIconGap,
		breadcrumbSeperatorIconGapUnits,
		breadcrumbSeperatorBgSize,
		breadcrumbSeperatorBgSizeUnits,
		breadcrumbSeperatorColorSwitcher,
		breadcrumbSeperatorColor,
		breadcrumbSeperatorHoverColor,
		breadcrumbSeperatorBgColorSwitcher,
		breadcrumbSeperatorBgColor,
		breadcrumbSeperatorBgHoverColor,
		//Item Icon
		breadcrumbItemIconSize,
		breadcrumbItemIconSizeUnits,
		breadcrumbItemIconGap,
		breadcrumbItemIconGapUnits,
		breadcrumbItemIconBgSize,
		breadcrumbItemIconBgSizeUnits,
		breadcrumbItemIconColorSwitcher,
		breadcrumbItemIconColor,
		breadcrumbItemIconHoverColor,
		breadcrumbItemIconBgColorSwitcher,
		breadcrumbItemIconBgColor,
		breadcrumbItemIconBgHoverColor,
		//position
		breadcrumbPositionType,
		breadcrumbHZOrientationType,
		breadcrumbVROrientationType,
		breadcrumbHZLeftOffset,
		breadcrumbHZLeftOffsetUnits,
		breadcrumbHZRightOffset,
		breadcrumbHZRightOffsetUnits,
		breadcrumbVRTopOffset,
		breadcrumbVRTopOffsetUnits,
		breadcrumbVRBottomOffset,
		breadcrumbVRBottomOffsetUnits,

		breadcrumbGlobalWraperID,
		breadcrumbGlobalWraperClass,

		breadcrumbGlobalPaddingUnits,
		breadcrumbGlobalPaddingDesktop,
		breadcrumbGlobalPaddingTablet,
		breadcrumbGlobalPaddingMobile,
		breadcrumbGlobalPaddingLink,

		breadcrumbGlobalMarginUnits,
		breadcrumbGlobalMarginDesktop,
		breadcrumbGlobalMarginTablet,
		breadcrumbGlobalMarginMobile,
		breadcrumbGlobalMarginLink,

		/** Start Background */
		breadcrumbGlobalBgColorSwitcher,
		breadcrumbGlobalBgNormalBackgroundType,
		breadcrumbGlobalBgNormalClassicColor,
		breadcrumbGlobalBgNormalGradientColor,
		breadcrumbGlobalBgNormalCustomGradientSwitcher,
		breadcrumbGlobalBgNormalCustomGradientInputValue,
		breadcrumbGlobalBgNormalBackgroundImageUrl,
		breadcrumbGlobalBgNormalBackgroundImageAlt,
		breadcrumbGlobalBgNormalBackgroundImageID,
		breadcrumbGlobalBgNormalBackgroundImagePosition,
		breadcrumbGlobalBgNormalBackgroundImageAttachment,
		breadcrumbGlobalBgNormalBackgroundImageRepeat,
		breadcrumbGlobalBgNormalBackgroundImageSize,

		breadcrumbGlobalBgHoverBackgroundType,
		breadcrumbGlobalBgHoverClassicColor,
		breadcrumbGlobalBgHoverGradientColor,
		breadcrumbGlobalBgHoverCustomGradientSwitcher,
		breadcrumbGlobalBgHoverCustomGradientInputValue,
		breadcrumbGlobalBgHoverBackgroundImageUrl,
		breadcrumbGlobalBgHoverBackgroundImagePosition,
		breadcrumbGlobalBgHoverBackgroundImageAttachment,
		breadcrumbGlobalBgHoverBackgroundImageRepeat,
		breadcrumbGlobalBgHoverBackgroundImageSize,

		breadcrumbGlobalBorder,
		breadcrumbGlobalBorderColorSwitcher,
		breadcrumbGlobalBorderColor,
		breadcrumbGlobalBorderHoverColor,
		breadcrumbGlobalBorderUnits,
		breadcrumbGlobalBorderDesktop,
		breadcrumbGlobalBorderTablet,
		breadcrumbGlobalBorderMobile,
		breadcrumbGlobalBorderLink,

		breadcrumbGlobalBorderRadiusUnits,
		breadcrumbGlobalBorderRadiusDesktop,
		breadcrumbGlobalBorderRadiusTablet,
		breadcrumbGlobalBorderRadiusMobile,
		breadcrumbGlobalBorderRadiusLink,

		breadcrumbGlobalBoxShadowSwitcher,
		breadcrumbGlobalBoxShadowValues,
		breadcrumbGlobalBoxShadowCssValue,
		breadcrumbGlobalBoxShadowHoverValues,
		breadcrumbGlobalBoxShadowHoverCssValue,

		breadcrumbDesktopSwitcher,
		breadcrumbTabletSwitcher,
		breadcrumbMobileSwitcher,

		breadcrumbCustomCSS,
		blockStyle

	} = attributes;

    /** Default padding for breadcrumbItem */
	const breadcrumbItemDesktopPaddingWidth = `${breadcrumbItemDesktopPadding?.top}${breadcrumbItemPaddingUnits?.Desktop} ${breadcrumbItemDesktopPadding?.right}${breadcrumbItemPaddingUnits?.Desktop} ${breadcrumbItemDesktopPadding?.bottom}${breadcrumbItemPaddingUnits?.Desktop} ${breadcrumbItemDesktopPadding?.left}${breadcrumbItemPaddingUnits?.Desktop}`;
	const breadcrumbItemTabletPaddingWidth = `${breadcrumbItemTabPadding?.top}${breadcrumbItemPaddingUnits?.Tablet} ${breadcrumbItemTabPadding?.right}${breadcrumbItemPaddingUnits?.Tablet} ${breadcrumbItemTabPadding?.bottom}${breadcrumbItemPaddingUnits?.Tablet} ${breadcrumbItemTabPadding?.left}${breadcrumbItemPaddingUnits?.Tablet}`;
	const breadcrumbItemMobilePaddingWidth = `${breadcrumbItemMobilePadding?.top}${breadcrumbItemPaddingUnits?.Mobile} ${breadcrumbItemMobilePadding?.right}${breadcrumbItemPaddingUnits?.Mobile} ${breadcrumbItemMobilePadding?.bottom}${breadcrumbItemPaddingUnits?.Mobile} ${breadcrumbItemMobilePadding?.left}${breadcrumbItemPaddingUnits?.Mobile}`;

    /** Default margin for breadcrumbItem */
	const breadcrumbItemDesktopMarginWidth = `${breadcrumbItemDesktopMargin?.top}${breadcrumbItemMarginUnits?.Desktop} ${breadcrumbItemDesktopMargin?.right}${breadcrumbItemMarginUnits?.Desktop} ${breadcrumbItemDesktopMargin?.bottom}${breadcrumbItemMarginUnits?.Desktop} ${breadcrumbItemDesktopMargin?.left}${breadcrumbItemMarginUnits?.Desktop}`;
	const breadcrumbItemTabletMarginWidth = `${breadcrumbItemTabMargin?.top}${breadcrumbItemMarginUnits?.Tablet} ${breadcrumbItemTabMargin?.right}${breadcrumbItemMarginUnits?.Tablet} ${breadcrumbItemTabMargin?.bottom}${breadcrumbItemMarginUnits?.Tablet} ${breadcrumbItemTabMargin?.left}${breadcrumbItemMarginUnits?.Tablet}`;
	const breadcrumbItemMobileMarginWidth = `${breadcrumbItemMobileMargin?.top}${breadcrumbItemMarginUnits?.Mobile} ${breadcrumbItemMobileMargin?.right}${breadcrumbItemMarginUnits?.Mobile} ${breadcrumbItemMobileMargin?.bottom}${breadcrumbItemMarginUnits?.Mobile} ${breadcrumbItemMobileMargin?.left}${breadcrumbItemMarginUnits?.Mobile}`;

    /** Default border radius for breadcrumbItem */
	const breadcrumbItemDesktopBorderWidth = `${breadcrumbItemDesktopBorder?.top}${breadcrumbItemBorderUnits?.Desktop} ${breadcrumbItemDesktopBorder?.right}${breadcrumbItemBorderUnits?.Desktop} ${breadcrumbItemDesktopBorder?.bottom}${breadcrumbItemBorderUnits?.Desktop} ${breadcrumbItemDesktopBorder?.left}${breadcrumbItemBorderUnits?.Desktop}`;
	const breadcrumbItemTabletBorderWidth = `${breadcrumbItemTabletBorder?.top}${breadcrumbItemBorderUnits?.Tablet} ${breadcrumbItemTabletBorder?.right}${breadcrumbItemBorderUnits?.Tablet} ${breadcrumbItemTabletBorder?.bottom}${breadcrumbItemBorderUnits?.Tablet} ${breadcrumbItemTabletBorder?.left}${breadcrumbItemBorderUnits?.Tablet}`;
	const breadcrumbItemMobileBorderWidth = `${breadcrumbItemMobileBorder?.top}${breadcrumbItemBorderUnits?.Mobile} ${breadcrumbItemMobileBorder?.right}${breadcrumbItemBorderUnits?.Mobile} ${breadcrumbItemMobileBorder?.bottom}${breadcrumbItemBorderUnits?.Mobile} ${breadcrumbItemMobileBorder?.left}${breadcrumbItemBorderUnits?.Mobile}`;

    /** Default border radius for breadcrumbItem */
	const breadcrumbItemDesktopBorderRadiusWidth = `${breadcrumbItemDesktopBorderRadius?.top}${breadcrumbItemBorderRadiusUnits?.Desktop} ${breadcrumbItemDesktopBorderRadius?.right}${breadcrumbItemBorderRadiusUnits?.Desktop} ${breadcrumbItemDesktopBorderRadius?.bottom}${breadcrumbItemBorderRadiusUnits?.Desktop} ${breadcrumbItemDesktopBorderRadius?.left}${breadcrumbItemBorderRadiusUnits?.Desktop}`;
	const breadcrumbItemTabletBorderRadiusWidth = `${breadcrumbItemTabBorderRadius?.top}${breadcrumbItemBorderRadiusUnits?.Tablet} ${breadcrumbItemTabBorderRadius?.right}${breadcrumbItemBorderRadiusUnits?.Tablet} ${breadcrumbItemTabBorderRadius?.bottom}${breadcrumbItemBorderRadiusUnits?.Tablet} ${breadcrumbItemTabBorderRadius?.left}${breadcrumbItemBorderRadiusUnits?.Tablet}`;
	const breadcrumbItemMobileBorderRadiusWidth = `${breadcrumbItemMobileBorderRadius?.top}${breadcrumbItemBorderRadiusUnits?.Mobile} ${breadcrumbItemMobileBorderRadius?.right}${breadcrumbItemBorderRadiusUnits?.Mobile} ${breadcrumbItemMobileBorderRadius?.bottom}${breadcrumbItemBorderRadiusUnits?.Mobile} ${breadcrumbItemMobileBorderRadius?.left}${breadcrumbItemBorderRadiusUnits?.Mobile}`;

    const globalDesktopPadding = `${breadcrumbGlobalPaddingDesktop?.top}${breadcrumbGlobalPaddingUnits?.Desktop} ${breadcrumbGlobalPaddingDesktop?.right}${breadcrumbGlobalPaddingUnits?.Desktop} ${breadcrumbGlobalPaddingDesktop?.bottom}${breadcrumbGlobalPaddingUnits?.Desktop} ${breadcrumbGlobalPaddingDesktop?.left}${breadcrumbGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${breadcrumbGlobalPaddingTablet?.top}${breadcrumbGlobalPaddingUnits?.Tablet} ${breadcrumbGlobalPaddingTablet?.right}${breadcrumbGlobalPaddingUnits?.Tablet} ${breadcrumbGlobalPaddingTablet?.bottom}${breadcrumbGlobalPaddingUnits?.Tablet} ${breadcrumbGlobalPaddingTablet?.left}${breadcrumbGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${breadcrumbGlobalPaddingMobile?.top}${breadcrumbGlobalPaddingUnits?.Mobile} ${breadcrumbGlobalPaddingMobile?.right}${breadcrumbGlobalPaddingUnits?.Mobile} ${breadcrumbGlobalPaddingMobile?.bottom}${breadcrumbGlobalPaddingUnits?.Mobile} ${breadcrumbGlobalPaddingMobile?.left}${breadcrumbGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${breadcrumbGlobalMarginDesktop?.top}${breadcrumbGlobalMarginUnits?.Desktop} ${breadcrumbGlobalMarginDesktop?.right}${breadcrumbGlobalMarginUnits?.Desktop} ${breadcrumbGlobalMarginDesktop?.bottom}${breadcrumbGlobalMarginUnits?.Desktop} ${breadcrumbGlobalMarginDesktop?.left}${breadcrumbGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${breadcrumbGlobalMarginTablet?.top}${breadcrumbGlobalMarginUnits?.Tablet} ${breadcrumbGlobalMarginTablet?.right}${breadcrumbGlobalMarginUnits?.Tablet} ${breadcrumbGlobalMarginTablet?.bottom}${breadcrumbGlobalMarginUnits?.Tablet} ${breadcrumbGlobalMarginTablet?.left}${breadcrumbGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${breadcrumbGlobalMarginMobile?.top}${breadcrumbGlobalMarginUnits?.Mobile} ${breadcrumbGlobalMarginMobile?.right}${breadcrumbGlobalMarginUnits?.Mobile} ${breadcrumbGlobalMarginMobile?.bottom}${breadcrumbGlobalMarginUnits?.Mobile} ${breadcrumbGlobalMarginMobile?.left}${breadcrumbGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${breadcrumbGlobalBorderDesktop?.top}${breadcrumbGlobalBorderUnits?.Desktop} ${breadcrumbGlobalBorderDesktop?.right}${breadcrumbGlobalBorderUnits?.Desktop} ${breadcrumbGlobalBorderDesktop?.bottom}${breadcrumbGlobalBorderUnits?.Desktop} ${breadcrumbGlobalBorderDesktop?.left}${breadcrumbGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${breadcrumbGlobalBorderTablet?.top}${breadcrumbGlobalBorderUnits?.Tablet} ${breadcrumbGlobalBorderTablet?.right}${breadcrumbGlobalBorderUnits?.Tablet} ${breadcrumbGlobalBorderTablet?.bottom}${breadcrumbGlobalBorderUnits?.Tablet} ${breadcrumbGlobalBorderTablet?.left}${breadcrumbGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${breadcrumbGlobalBorderMobile?.top}${breadcrumbGlobalBorderUnits?.Mobile} ${breadcrumbGlobalBorderMobile?.right}${breadcrumbGlobalBorderUnits?.Mobile} ${breadcrumbGlobalBorderMobile?.bottom}${breadcrumbGlobalBorderUnits?.Mobile} ${breadcrumbGlobalBorderMobile?.left}${breadcrumbGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${breadcrumbGlobalBorderRadiusDesktop?.top}${breadcrumbGlobalBorderRadiusUnits?.Desktop} ${breadcrumbGlobalBorderRadiusDesktop?.right}${breadcrumbGlobalBorderRadiusUnits?.Desktop} ${breadcrumbGlobalBorderRadiusDesktop?.bottom}${breadcrumbGlobalBorderRadiusUnits?.Desktop} ${breadcrumbGlobalBorderRadiusDesktop?.left}${breadcrumbGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${breadcrumbGlobalBorderRadiusTablet?.top}${breadcrumbGlobalBorderRadiusUnits?.Tablet} ${breadcrumbGlobalBorderRadiusTablet?.right}${breadcrumbGlobalBorderRadiusUnits?.Tablet} ${breadcrumbGlobalBorderRadiusTablet?.bottom}${breadcrumbGlobalBorderRadiusUnits?.Tablet} ${breadcrumbGlobalBorderRadiusTablet?.left}${breadcrumbGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${breadcrumbGlobalBorderRadiusMobile?.top}${breadcrumbGlobalBorderRadiusUnits?.Mobile} ${breadcrumbGlobalBorderRadiusMobile?.right}${breadcrumbGlobalBorderRadiusUnits?.Mobile} ${breadcrumbGlobalBorderRadiusMobile?.bottom}${breadcrumbGlobalBorderRadiusUnits?.Mobile} ${breadcrumbGlobalBorderRadiusMobile?.left}${breadcrumbGlobalBorderRadiusUnits?.Mobile}`;

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = breadcrumbGlobalBgNormalBackgroundType;
        const bgColor = breadcrumbGlobalBgNormalClassicColor;
        const bgGradient = breadcrumbGlobalBgNormalGradientColor;
        const customGradient = breadcrumbGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = breadcrumbGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = breadcrumbGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = breadcrumbGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = breadcrumbGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = breadcrumbGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = breadcrumbGlobalBgNormalBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Get background hover styles
     */
    const getBackgroundHoverStyles = (device) => {
        const bgType = breadcrumbGlobalBgHoverBackgroundType;
        const bgColor = breadcrumbGlobalBgHoverClassicColor;
        const bgGradient = breadcrumbGlobalBgHoverGradientColor;
        const customGradient = breadcrumbGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = breadcrumbGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = breadcrumbGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = breadcrumbGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = breadcrumbGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = breadcrumbGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = breadcrumbGlobalBgHoverBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
    * Convert object to string
    */
    const backgroundStyleObjectToString = (styleObj) => Object.entries(styleObj).map(([key, value]) => `${key}: ${value};`).join(' ');

    const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
    const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
    const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
    const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
    const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
    const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    const breadcrumbBlockStyle =  `
        .${blockID}.fb-breadcrumb-main-wrapper {
            ${breadcrumbPositionType === 'default' ? `position: relative !important;` : ''}
            ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' ? `width: 100%;` : ''}
            ${breadcrumbPositionType !== 'default' ? `position: ${breadcrumbPositionType} !important;` : ''}
            ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'left' && breadcrumbHZLeftOffset?.Desktop ? `left: ${breadcrumbHZLeftOffset?.Desktop}${breadcrumbHZLeftOffsetUnits?.Desktop};` : ''} 
            ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'right' && breadcrumbHZRightOffset?.Desktop ? `right: ${breadcrumbHZRightOffset?.Desktop}${breadcrumbHZRightOffsetUnits?.Desktop};` : ''}
            ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'top' && breadcrumbVRTopOffset?.Desktop ? `top: ${breadcrumbVRTopOffset?.Desktop}${breadcrumbVRTopOffsetUnits?.Desktop};` : ''}
            ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'bottom' && breadcrumbVRBottomOffset?.Desktop ? `bottom: ${breadcrumbVRBottomOffset?.Desktop}${breadcrumbVRBottomOffsetUnits?.Desktop};` : ''}
            ${breadcrumbGlobalZIndex?.Desktop ? `z-index: ${breadcrumbGlobalZIndex?.Desktop};` : ''}
            ${breadcrumbOverflow !== 'default' ? `overflow: ${breadcrumbOverflow};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-breadcrumb-container {
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPadding && breadcrumbGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && breadcrumbGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${breadcrumbGlobalBorder ? `border: ${breadcrumbGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && breadcrumbGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && breadcrumbGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${breadcrumbGlobalBorderColor ? `border-color: ${breadcrumbGlobalBorderColor};` : ''}
            ${breadcrumbGlobalBoxShadowCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID}.fb-breadcrumb-main-wrapper:hover .fb-breadcrumb-container {
            ${desktopBackgroundHoverStyles}
            ${breadcrumbGlobalBorderHoverColor ? `border-color: ${breadcrumbGlobalBorderHoverColor};` : ''}
            ${breadcrumbGlobalBoxShadowHoverCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowHoverCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper {
            align-items: center;
            display: flex;
            flex-direction: row;
            ${breadcrumbAlignment?.Desktop === "left" ? `justify-content: flex-start;` : ""}
            ${breadcrumbAlignment?.Desktop === "center" ? `justify-content: center;` : ""}
            ${breadcrumbAlignment?.Desktop === "right" ? `justify-content: flex-end;` : ""}
        }

        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list{
            ${breadcrumbItemGap?.Desktop ? `gap: ${breadcrumbItemGap?.Desktop}${breadcrumbItemGapUnits?.Desktop};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item{
            ${breadcrumbItemDesktopPaddingWidth && breadcrumbItemDesktopPadding?.top ? `padding: ${breadcrumbItemDesktopPaddingWidth};` : ''}
            ${breadcrumbItemDesktopMarginWidth && breadcrumbItemDesktopMargin?.top ? `margin: ${breadcrumbItemDesktopMarginWidth};` : ''}
            ${breadcrumbItemBorder ? `border: ${breadcrumbItemBorder};` : ''}
            ${breadcrumbItemDesktopBorderWidth && breadcrumbItemDesktopBorder?.top ? `border-width: ${breadcrumbItemDesktopBorderWidth};` : ''}
            ${breadcrumbItemDesktopBorderRadiusWidth && breadcrumbItemDesktopBorderRadius?.top ? `border-radius: ${breadcrumbItemDesktopBorderRadiusWidth};` : ''}
            ${breadcrumbItemBorderColor ? `border-color: ${breadcrumbItemBorderColor};` : ''}
            ${breadcrumbItemBoxShadowCssValue ? `box-shadow: ${breadcrumbItemBoxShadowCssValue};` : ''}
            ${breadcrumbItemBgColor ? `background-color: ${breadcrumbItemBgColor};` : ''}
        }

        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item:hover {
            ${breadcrumbItemBgHoverColor ? `background-color: ${breadcrumbItemBgHoverColor};` : ''}
            ${breadcrumbItemBorderHoverColor ? `border-color: ${breadcrumbItemBorderHoverColor};` : ''}
            ${breadcrumbItemBoxShadowHoverCssValue ? `box-shadow: ${breadcrumbItemBoxShadowHoverCssValue};` : ''}
        }

        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-link {
            ${breadcrumbItemGlobalTypoSwitcher?.fontFamily === true && breadcrumbItemGlobalTypographyData?.fontFamily ? `font-family: ${breadcrumbItemGlobalTypographyData?.fontFamily};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.fontSize === true && breadcrumbItemGlobalTypographyData?.fontSize ? `font-size: ${breadcrumbItemGlobalTypographyData?.fontSize};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.fontWeight === true && breadcrumbItemGlobalTypographyData?.fontWeight ? `font-weight: ${breadcrumbItemGlobalTypographyData?.fontWeight};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.fontStyle === true && breadcrumbItemGlobalTypographyData?.fontStyle ? `font-style: ${breadcrumbItemGlobalTypographyData?.fontStyle};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.textTransform === true && breadcrumbItemGlobalTypographyData?.textTransform ? `text-transform: ${breadcrumbItemGlobalTypographyData?.textTransform};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.textDecoration === true && breadcrumbItemGlobalTypographyData?.textDecoration ? `text-decoration: ${breadcrumbItemGlobalTypographyData?.textDecoration};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.letterSpacing === true && breadcrumbItemGlobalTypographyData?.letterSpacing ? `letter-spacing: ${breadcrumbItemGlobalTypographyData?.letterSpacing};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.lineHeight === true && breadcrumbItemGlobalTypographyData?.lineHeight ? `line-height: ${breadcrumbItemGlobalTypographyData?.lineHeight};` : ''}
            
            ${breadcrumbItemGlobalTypoSwitcher?.fontFamily === false && breadcrumbItemFontFamily && breadcrumbItemFontFamily !== 'Default' ? `font-family: ${breadcrumbItemFontFamily};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.fontSize === false && breadcrumbItemFontSize?.Desktop && breadcrumbItemFontSizeUnits?.Desktop ? `font-size: ${breadcrumbItemFontSize?.Desktop}${breadcrumbItemFontSizeUnits?.Desktop};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.fontWeight === false && breadcrumbItemFontWeight ? `font-weight: ${breadcrumbItemFontWeight};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.fontStyle === false && breadcrumbItemFontStyle ? `font-style: ${breadcrumbItemFontStyle};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.textTransform === false && breadcrumbItemTextTransform ? `text-transform: ${breadcrumbItemTextTransform};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.textDecoration === false && breadcrumbItemTextDecoration ? `text-decoration: ${breadcrumbItemTextDecoration};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.letterSpacing === false && breadcrumbItemLetterSpacing?.Desktop && breadcrumbItemLetterSpacingUnits?.Desktop ? `letter-spacing: ${breadcrumbItemLetterSpacing?.Desktop}${breadcrumbItemLetterSpacingUnits?.Desktop};` : ''}
            ${breadcrumbItemGlobalTypoSwitcher?.lineHeight === false && breadcrumbItemLineHeight?.Desktop && breadcrumbItemLineHeightUnits?.Desktop ? `line-height: ${breadcrumbItemLineHeight?.Desktop}${breadcrumbItemLineHeightUnits?.Desktop};` : ''}
            ${breadcrumbItemColor ? `color: ${breadcrumbItemColor};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-link:hover {
            ${breadcrumbItemHoverColor ? `color: ${breadcrumbItemHoverColor};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-text{
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontFamily === true && breadcrumbCurrentItemGlobalTypographyData?.fontFamily ? `font-family: ${breadcrumbCurrentItemGlobalTypographyData?.fontFamily};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontSize === true && breadcrumbCurrentItemGlobalTypographyData?.fontSize ? `font-size: ${breadcrumbCurrentItemGlobalTypographyData?.fontSize};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontWeight === true && breadcrumbCurrentItemGlobalTypographyData?.fontWeight ? `font-weight: ${breadcrumbCurrentItemGlobalTypographyData?.fontWeight};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontStyle === true && breadcrumbCurrentItemGlobalTypographyData?.fontStyle ? `font-style: ${breadcrumbCurrentItemGlobalTypographyData?.fontStyle};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.textTransform === true && breadcrumbCurrentItemGlobalTypographyData?.textTransform ? `text-transform: ${breadcrumbCurrentItemGlobalTypographyData?.textTransform};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.textDecoration === true && breadcrumbCurrentItemGlobalTypographyData?.textDecoration ? `text-decoration: ${breadcrumbCurrentItemGlobalTypographyData?.textDecoration};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.letterSpacing === true && breadcrumbCurrentItemGlobalTypographyData?.letterSpacing ? `letter-spacing: ${breadcrumbCurrentItemGlobalTypographyData?.letterSpacing};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.lineHeight === true && breadcrumbCurrentItemGlobalTypographyData?.lineHeight ? `line-height: ${breadcrumbCurrentItemGlobalTypographyData?.lineHeight};` : ''}
            
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontFamily === false && breadcrumbCurrentItemFontFamily && breadcrumbCurrentItemFontFamily !== 'Default' ? `font-family: ${breadcrumbCurrentItemFontFamily};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontSize === false && breadcrumbCurrentItemFontSize?.Desktop && breadcrumbCurrentItemFontSizeUnits?.Desktop ? `font-size: ${breadcrumbCurrentItemFontSize?.Desktop}${breadcrumbCurrentItemFontSizeUnits?.Desktop};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontWeight === false && breadcrumbCurrentItemFontWeight ? `font-weight: ${breadcrumbCurrentItemFontWeight};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.fontStyle === false && breadcrumbCurrentItemFontStyle ? `font-style: ${breadcrumbCurrentItemFontStyle};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.textTransform === false && breadcrumbCurrentItemTextTransform ? `text-transform: ${breadcrumbCurrentItemTextTransform};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.textDecoration === false && breadcrumbCurrentItemTextDecoration ? `text-decoration: ${breadcrumbCurrentItemTextDecoration};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.letterSpacing === false && breadcrumbCurrentItemLetterSpacing?.Desktop && breadcrumbCurrentItemLetterSpacingUnits?.Desktop ? `letter-spacing: ${breadcrumbCurrentItemLetterSpacing?.Desktop}${breadcrumbCurrentItemLetterSpacingUnits?.Desktop};` : ''}
            ${breadcrumbCurrentItemGlobalTypoSwitcher?.lineHeight === false && breadcrumbCurrentItemLineHeight?.Desktop && breadcrumbCurrentItemLineHeightUnits?.Desktop ? `line-height: ${breadcrumbCurrentItemLineHeight?.Desktop}${breadcrumbCurrentItemLineHeightUnits?.Desktop};` : ''}
            ${breadcrumbCurrentItemColor ? `color: ${breadcrumbCurrentItemColor};` : ''}
            ${breadcrumbCurrentItemBgColor ? `background-color: ${breadcrumbCurrentItemBgColor};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-text:hover {
            ${breadcrumbCurrentItemHoverColor ? `color: ${breadcrumbCurrentItemHoverColor};` : ''}
            ${breadcrumbCurrentItemBgHoverColor ? `background-color: ${breadcrumbCurrentItemBgHoverColor};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item.home{
            ${breadcrumbHomeIconGap?.Desktop ? `gap: ${breadcrumbHomeIconGap?.Desktop}${breadcrumbHomeIconGapUnits?.Desktop};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.home svg{
            ${breadcrumbIconSize?.Desktop ? `width: ${breadcrumbIconSize?.Desktop}${breadcrumbIconSizeUnits?.Desktop};` : ''}
            ${breadcrumbIconSize?.Desktop ? `height: ${breadcrumbIconSize?.Desktop}${breadcrumbIconSizeUnits?.Desktop};` : ''}
            ${breadcrumbIconColor ? `fill: ${breadcrumbIconColor};` : ''}
            ${breadcrumbIconBgColor ? `background-color: ${breadcrumbIconBgColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.home:hover svg{
            ${breadcrumbIconHoverColor ? `fill: ${breadcrumbIconHoverColor};` : ''}
            ${breadcrumbIconBgHoverColor ? `background-color: ${breadcrumbIconBgHoverColor};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item:not(.home){
            ${breadcrumbItemIconGap?.Desktop ? `gap: ${breadcrumbItemIconGap?.Desktop}${breadcrumbItemIconGapUnits?.Desktop};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.item svg{
            ${breadcrumbItemIconSize?.Desktop ? `width: ${breadcrumbItemIconSize?.Desktop}${breadcrumbItemIconSizeUnits?.Desktop};` : ''}
            ${breadcrumbItemIconSize?.Desktop ? `height: ${breadcrumbItemIconSize?.Desktop}${breadcrumbItemIconSizeUnits?.Desktop};` : ''}
            ${breadcrumbItemIconColor ? `fill: ${breadcrumbItemIconColor};` : ''}
            ${breadcrumbItemIconBgColor ? `background-color: ${breadcrumbItemIconBgColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.item:hover svg{
            ${breadcrumbItemIconHoverColor ? `fill: ${breadcrumbItemIconHoverColor};` : ''}
            ${breadcrumbItemIconBgHoverColor ? `background-color: ${breadcrumbItemIconBgHoverColor};` : ''}
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-separator{
            ${breadcrumbSeperatorIconGap?.Desktop ? `margin-right: ${breadcrumbSeperatorIconGap?.Desktop}${breadcrumbSeperatorIconGapUnits?.Desktop};` : ''}
            ${breadcrumbSeperatorColor ? `color: ${breadcrumbSeperatorColor};` : ''}
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-separator.text {
            ${breadcrumbSeperatorSize?.Desktop ? `font-size: ${breadcrumbSeperatorSize?.Desktop}${breadcrumbSeperatorSizeUnits?.Desktop};` : ''}
            ${breadcrumbSeperatorColor ? `color: ${breadcrumbSeperatorColor};` : ''}
            ${breadcrumbSeperatorBgColor ? `background-color: ${breadcrumbSeperatorBgColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-separator.text:hover {
            ${breadcrumbSeperatorHoverColor ? `color: ${breadcrumbSeperatorHoverColor};` : ''}
            ${breadcrumbSeperatorBgHoverColor ? `background-color: ${breadcrumbSeperatorBgHoverColor};` : ''}
        }

        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-separator svg{
            ${breadcrumbSeperatorSize?.Desktop ? `width: ${breadcrumbSeperatorSize?.Desktop}${breadcrumbSeperatorSizeUnits?.Desktop};` : ''}
            ${breadcrumbSeperatorSize?.Desktop ? `height: ${breadcrumbSeperatorSize?.Desktop}${breadcrumbSeperatorSizeUnits?.Desktop};` : ''}
            ${breadcrumbSeperatorColor ? `fill: ${breadcrumbSeperatorColor};` : ''}
            ${breadcrumbSeperatorBgColor ? `background-color: ${breadcrumbSeperatorBgColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-separator:hover svg{
            ${breadcrumbSeperatorHoverColor ? `fill: ${breadcrumbSeperatorHoverColor};` : ''}
            ${breadcrumbSeperatorBgHoverColor ? `background-color: ${breadcrumbSeperatorBgHoverColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-breadcrumb-main-wrapper {
                ${breadcrumbPositionType === 'default' ? `position: relative !important;` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' ? `width: 100%;` : ''}
                ${breadcrumbPositionType !== 'default' ? `position: ${breadcrumbPositionType} !important;` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'left' && breadcrumbHZLeftOffset?.Tablet ? `left: ${breadcrumbHZLeftOffset?.Tablet}${breadcrumbHZLeftOffsetUnits?.Tablet};` : ''} 
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'right' && breadcrumbHZRightOffset?.Tablet ? `right: ${breadcrumbHZRightOffset?.Tablet}${breadcrumbHZRightOffsetUnits?.Tablet};` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'top' && breadcrumbVRTopOffset?.Tablet ? `top: ${breadcrumbVRTopOffset?.Tablet}${breadcrumbVRTopOffsetUnits?.Tablet};` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'bottom' && breadcrumbVRBottomOffset?.Tablet ? `bottom: ${breadcrumbVRBottomOffset?.Tablet}${breadcrumbVRBottomOffsetUnits?.Tablet};` : ''}
                ${breadcrumbGlobalZIndex?.Tablet ? `z-index: ${breadcrumbGlobalZIndex?.Tablet};` : ''}
                ${breadcrumbOverflow !== 'default' ? `overflow: ${breadcrumbOverflow};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-breadcrumb-container {
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && breadcrumbGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && breadcrumbGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${breadcrumbGlobalBorder ? `border: ${breadcrumbGlobalBorder};` : ''}
                ${globalTabletBorderWidth && breadcrumbGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && breadcrumbGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                ${breadcrumbGlobalBorderColor ? `border-color: ${breadcrumbGlobalBorderColor};` : ''}
                ${breadcrumbGlobalBoxShadowCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-breadcrumb-main-wrapper:hover .fb-breadcrumb-container {
                ${tabletBackgroundHoverStyles}
                ${breadcrumbGlobalBorderHoverColor ? `border-color: ${breadcrumbGlobalBorderHoverColor};` : ''}
                ${breadcrumbGlobalBoxShadowHoverCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowHoverCssValue};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper {
                ${breadcrumbAlignment?.Tablet === "left" ? `justify-content: flex-start;` : ""}
                ${breadcrumbAlignment?.Tablet === "center" ? `justify-content: center;` : ""}
                ${breadcrumbAlignment?.Tablet === "right" ? `justify-content: flex-end;` : ""}
            }

            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list{
                ${breadcrumbItemGap?.Tablet ? `gap: ${breadcrumbItemGap?.Tablet}${breadcrumbItemGapUnits?.Tablet};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item{
                ${breadcrumbItemTabletPaddingWidth && breadcrumbItemTabPadding?.top ? `padding: ${breadcrumbItemTabletPaddingWidth};` : ''}
                ${breadcrumbItemTabletMarginWidth && breadcrumbItemTabMargin?.top ? `margin: ${breadcrumbItemTabletMarginWidth};` : ''}
                ${breadcrumbItemTabletBorderWidth && breadcrumbItemTabletBorder?.top ? `border-width: ${breadcrumbItemTabletBorderWidth};` : ''}
                ${breadcrumbItemTabletBorderRadiusWidth && breadcrumbItemTabBorderRadius?.top ? `border-radius: ${breadcrumbItemTabletBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-link{
                ${breadcrumbItemGlobalTypoSwitcher?.fontSize === false && breadcrumbItemFontSize?.Tablet && breadcrumbItemFontSizeUnits?.Tablet ? `font-size: ${breadcrumbItemFontSize?.Tablet}${breadcrumbItemFontSizeUnits?.Tablet};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.letterSpacing === false && breadcrumbItemLetterSpacing?.Tablet && breadcrumbItemLetterSpacingUnits?.Tablet ? `letter-spacing: ${breadcrumbItemLetterSpacing?.Tablet}${breadcrumbItemLetterSpacingUnits?.Tablet};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.lineHeight === false && breadcrumbItemLineHeight?.Tablet && breadcrumbItemLineHeightUnits?.Tablet ? `line-height: ${breadcrumbItemLineHeight?.Tablet}${breadcrumbItemLineHeightUnits?.Tablet};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-text{
                ${breadcrumbItemGlobalTypoSwitcher?.fontSize === false && breadcrumbItemFontSize?.Tablet && breadcrumbItemFontSizeUnits?.Tablet ? `font-size: ${breadcrumbItemFontSize?.Tablet}${breadcrumbItemFontSizeUnits?.Tablet};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.letterSpacing === false && breadcrumbItemLetterSpacing?.Tablet && breadcrumbItemLetterSpacingUnits?.Tablet ? `letter-spacing: ${breadcrumbItemLetterSpacing?.Tablet}${breadcrumbItemLetterSpacingUnits?.Tablet};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.lineHeight === false && breadcrumbItemLineHeight?.Tablet && breadcrumbItemLineHeightUnits?.Tablet ? `line-height: ${breadcrumbItemLineHeight?.Tablet}${breadcrumbItemLineHeightUnits?.Tablet};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.home svg{
                ${breadcrumbIconSize?.Tablet ? `width: ${breadcrumbIconSize?.Tablet}${breadcrumbIconSizeUnits?.Tablet};` : ''}
                ${breadcrumbIconSize?.Tablet ? `height: ${breadcrumbIconSize?.Tablet}${breadcrumbIconSizeUnits?.Tablet};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.item svg{
                ${breadcrumbItemIconSize?.Tablet ? `width: ${breadcrumbItemIconSize?.Tablet}${breadcrumbItemIconSizeUnits?.Tablet};` : ''}
                ${breadcrumbItemIconSize?.Tablet ? `height: ${breadcrumbItemIconSize?.Tablet}${breadcrumbItemIconSizeUnits?.Tablet};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-separator.text{
                ${breadcrumbSeperatorSize?.Tablet ? `font-size: ${breadcrumbSeperatorSize?.Tablet}${breadcrumbSeperatorSizeUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-breadcrumb-main-wrapper {
                ${breadcrumbPositionType === 'default' ? `position: relative !important;` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' ? `width: 100%;` : ''}
                ${breadcrumbPositionType !== 'default' ? `position: ${breadcrumbPositionType} !important;` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'left' && breadcrumbHZLeftOffset?.Mobile ? `left: ${breadcrumbHZLeftOffset?.Mobile}${breadcrumbHZLeftOffsetUnits?.Mobile};` : ''} 
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'right' && breadcrumbHZRightOffset?.Mobile ? `right: ${breadcrumbHZRightOffset?.Mobile}${breadcrumbHZRightOffsetUnits?.Mobile};` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'top' && breadcrumbVRTopOffset?.Mobile ? `top: ${breadcrumbVRTopOffset?.Mobile}${breadcrumbVRTopOffsetUnits?.Mobile};` : ''}
                ${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'bottom' && breadcrumbVRBottomOffset?.Mobile ? `bottom: ${breadcrumbVRBottomOffset?.Mobile}${breadcrumbVRBottomOffsetUnits?.Mobile};` : ''}
                ${breadcrumbGlobalZIndex?.Mobile ? `z-index: ${breadcrumbGlobalZIndex?.Mobile};` : ''}
                ${breadcrumbOverflow !== 'default' ? `overflow: ${breadcrumbOverflow};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-breadcrumb-container { 
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && breadcrumbGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && breadcrumbGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${breadcrumbGlobalBorder ? `border: ${breadcrumbGlobalBorder};` : ''}
                ${globalMobileBorderWidth && breadcrumbGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && breadcrumbGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                ${breadcrumbGlobalBorderColor ? `border-color: ${breadcrumbGlobalBorderColor};` : ''}
                ${breadcrumbGlobalBoxShadowCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-breadcrumb-main-wrapper:hover .fb-breadcrumb-container {
                ${mobileBackgroundHoverStyles}
                ${breadcrumbGlobalBorderHoverColor ? `border-color: ${breadcrumbGlobalBorderHoverColor};` : ''}
                ${breadcrumbGlobalBoxShadowHoverCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowHoverCssValue};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper {
                ${breadcrumbAlignment?.Mobile === "left" ? `justify-content: flex-start;` : ""}
                ${breadcrumbAlignment?.Mobile === "center" ? `justify-content: center;` : ""}
                ${breadcrumbAlignment?.Mobile === "right" ? `justify-content: flex-end;` : ""}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item{
                ${breadcrumbItemMobilePaddingWidth && breadcrumbItemMobilePadding?.top ? `padding: ${breadcrumbItemMobilePaddingWidth};` : ''}
                ${breadcrumbItemMobileMarginWidth && breadcrumbItemMobileMargin?.top ? `margin: ${breadcrumbItemMobileMarginWidth};` : ''}
                ${breadcrumbItemMobileBorderWidth && breadcrumbItemMobileBorder?.top ? `border-width: ${breadcrumbItemMobileBorderWidth};` : ''}
                ${breadcrumbItemMobileBorderRadiusWidth && breadcrumbItemMobileBorderRadius?.top ? `border-radius: ${breadcrumbItemMobileBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list{
                ${breadcrumbItemGap?.Mobile ? `gap: ${breadcrumbItemGap?.Mobile}${breadcrumbItemGapUnits?.Mobile};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-link{
                ${breadcrumbItemGlobalTypoSwitcher?.fontSize === false && breadcrumbItemFontSize?.Mobile && breadcrumbItemFontSizeUnits?.Mobile ? `font-size: ${breadcrumbItemFontSize?.Mobile}${breadcrumbItemFontSizeUnits?.Mobile};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.letterSpacing === false && breadcrumbItemLetterSpacing?.Mobile && breadcrumbItemLetterSpacingUnits?.Mobile ? `letter-spacing: ${breadcrumbItemLetterSpacing?.Mobile}${breadcrumbItemLetterSpacingUnits?.Mobile};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.lineHeight === false && breadcrumbItemLineHeight?.Mobile && breadcrumbItemLineHeightUnits?.Mobile ? `line-height: ${breadcrumbItemLineHeight?.Mobile}${breadcrumbItemLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-label.fb-breadcrumb-text{
                ${breadcrumbItemGlobalTypoSwitcher?.fontSize === false && breadcrumbItemFontSize?.Mobile && breadcrumbItemFontSizeUnits?.Mobile ? `font-size: ${breadcrumbItemFontSize?.Mobile}${breadcrumbItemFontSizeUnits?.Mobile};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.letterSpacing === false && breadcrumbItemLetterSpacing?.Mobile && breadcrumbItemLetterSpacingUnits?.Mobile ? `letter-spacing: ${breadcrumbItemLetterSpacing?.Mobile}${breadcrumbItemLetterSpacingUnits?.Mobile};` : ''}
                ${breadcrumbItemGlobalTypoSwitcher?.lineHeight === false && breadcrumbItemLineHeight?.Mobile && breadcrumbItemLineHeightUnits?.Mobile ? `line-height: ${breadcrumbItemLineHeight?.Mobile}${breadcrumbItemLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.home svg{
                ${breadcrumbIconSize?.Mobile ? `width: ${breadcrumbIconSize?.Mobile}${breadcrumbIconSizeUnits?.Mobile};` : ''}
                ${breadcrumbIconSize?.Mobile ? `height: ${breadcrumbIconSize?.Mobile}${breadcrumbIconSizeUnits?.Mobile};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-item .fb-breadcrumb-icon.item svg{
                ${breadcrumbItemIconSize?.Mobile ? `width: ${breadcrumbItemIconSize?.Mobile}${breadcrumbItemIconSizeUnits?.Mobile};` : ''}
                ${breadcrumbItemIconSize?.Mobile ? `height: ${breadcrumbItemIconSize?.Mobile}${breadcrumbItemIconSizeUnits?.Mobile};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-breadcrumb-main-wrapper .fb-breadcrumb-container .fb-breadcrumb-inner-wrapper .fb-breadcrumb-list .fb-breadcrumb-separator.text{
                ${breadcrumbSeperatorSize?.Mobile ? `font-size: ${breadcrumbSeperatorSize?.Mobile}${breadcrumbSeperatorSizeUnits?.Mobile};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(breadcrumbCustomCSS, `.${blockID}`);
    return `${breadcrumbBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateBreadcrumbBlockStyle;