/**
 * Advanced Mega Menu Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAdvancedMegaMenuStyle = (attributes) => {
    const {
        blockID,
        blockStyle,
        megaMenuGlobalCustomCSS,
        megaMenuDesktopSwitcher,
        megaMenuTabletSwitcher,
        megaMenuMobileSwitcher,
        megaMenuAlignment,
        menuItems,
        triggerType,
        megaMenuBorder,
        megaMenuBorderColorSwitcher,
        megaMenuBorderColor,
        megaMenuBorderHoverColor,
        megaMenuBorderUnits,
        megaMenuDesktopBorder,
        megaMenuTabletBorder,
        megaMenuMobileBorder,
        megaMenuBorderLink,

        // Border Radius
        megaMenuBorderRadiusUnits,
        megaMenuDesktopBorderRadius,
        megaMenuTabletBorderRadius,
        megaMenuMobileBorderRadius,
        megaMenuBorderRadiusLink,

        // Box Shadow
        megaMenuBoxShadowValues,
        megaMenuBoxShadowCssValue,

        // Padding
        megaMenuPaddingUnits,
        megaMenuDesktopPadding,
        megaMenuTabletPadding,
        megaMenuMobilePadding,
        megaMenuPaddingLink,

        // Margin
        megaMenuMarginUnits,
        megaMenuDesktopMargin,
        megaMenuTabletMargin,
        megaMenuMobileMargin,
        megaMenuMarginLink,

        // Typography / Style
        megaMenuGlobalTypographyData,
        megaMenuGlobalTypoSwitcher,
        megaMenuGlobalTypoType,
        megaMenuGlobalTypoOption,
        megaMenuFontFamily,
        megaMenuFontSize,
        megaMenuFontSizeUnits,
        megaMenuFontWeight,
        megaMenuFontStyle,
        megaMenuTextTransform,
        megaMenuTextDecoration,
        megaMenuLetterSpacing,
        megaMenuLetterSpacingUnits,
        megaMenuLineHeight,
        megaMenuLineHeightUnits,

        // Text Color
        megaMenuTextColorTypeSwitcher,
        megaMenuTextColorType,
        megaMenuTextHoverColorType,
        megaMenuTextShadowValues,
        megaMenuTextShadowCssValue,
        megaMenuTextStroke,
        megaMenuTextStrokeColorSwitcher,
        megaMenuTextStrokeColor,
        megaMenuTextStrokeHoverColor,
        megaMenuHighlightColorSwitcher,
        megaMenuHighlightColor,
        megaMenuHighlightHoverColor,
        megaMenuColorSwitcher,
        megaMenuColor,
        megaMenuHoverColor,
        megaMenuTextGradientColor,
        megaMenuTextHoverGradientColor,
        megaMenuTextCustomGradientColorSwitcher,
        megaMenuTextCustomGradientColor,
        megaMenuTextHoverCustomGradientColorSwitcher,
        megaMenuTextHoverCustomGradientColor,

        // Menu Text Background
        megaMenuTextBackgroundColorSwitcher,
        megaMenuTextBgColorType,
        megaMenuTextBgHoverColorType,
        megaMenuTextBackgroundColor,
        megaMenuTextBackgroundHoverColor,
        megaMenuTextBackgroundGradientColor,
        megaMenuTextBackgroundHoverGradientColor,
        megaMenuTextBackgroundCustomGradientColorSwitcher,
        megaMenuTextBackgroundCustomGradientColor,
        megaMenuTextBackgroundHoverCustomGradientColorSwitcher,
        megaMenuTextBackgroundHoverCustomGradientColor,
        //Global Settings
        megaMenuGlobalZIndex,
        advancedMegaMenuOverflow,
        megaMenuGlobalWraperID,
        megaMenuGlobalWraperClass,
        advancedMegaMenuPositionType,
        advancedMegaMenuHZOrientationType,
        advancedMegaMenuVROrientationType,
        advancedMegaMenuHZLeftOffset,
        advancedMegaMenuHZLeftOffsetUnits,
        advancedMegaMenuHZRightOffset,
        advancedMegaMenuHZRightOffsetUnits,
        advancedMegaMenuVRTopOffset,
        advancedMegaMenuVRTopOffsetUnits,
        advancedMegaMenuVRBottomOffset,
        advancedMegaMenuVRBottomOffsetUnits,
        megaMenuGlobalBgColorSwitcher,
        //Global spacing
        megaMenuGlobalPaddingUnits,
        megaMenuGlobalPaddingDesktop,
        megaMenuGlobalPaddingTablet,
        megaMenuGlobalPaddingMobile,
        megaMenuGlobalPaddingLink,
        megaMenuGlobalMarginUnits,
        megaMenuGlobalMarginDesktop,
        megaMenuGlobalMarginTablet,
        megaMenuGlobalMarginMobile,
        megaMenuGlobalMarginLink,
        megaMenuGlobalBgNormalBackgroundType,
        megaMenuGlobalBgNormalClassicColor,
        megaMenuGlobalBgNormalGradientColor,
        megaMenuGlobalBgNormalCustomGradientSwitcher,
        megaMenuGlobalBgNormalCustomGradientInputValue,
        megaMenuGlobalBgNormalBackgroundImageUrl,
        megaMenuGlobalBgNormalBackgroundImagePosition,
        megaMenuGlobalBgNormalBackgroundImageAttachment,
        megaMenuGlobalBgNormalBackgroundImageRepeat,
        megaMenuGlobalBgNormalBackgroundImageSize,

        megaMenuGlobalBgHoverBackgroundType,
        megaMenuGlobalBgHoverClassicColor,
        megaMenuGlobalBgHoverGradientColor,
        megaMenuGlobalBgHoverCustomGradientSwitcher,
        megaMenuGlobalBgHoverCustomGradientInputValue,
        megaMenuGlobalBgHoverBackgroundImageUrl,
        megaMenuGlobalBgHoverBackgroundImagePosition,
        megaMenuGlobalBgHoverBackgroundImageAttachment,
        megaMenuGlobalBgHoverBackgroundImageRepeat,
        megaMenuGlobalBgHoverBackgroundImageSize,

        megaMenuGlobalBorder,
        megaMenuGlobalBorderColorSwitcher,
        megaMenuGlobalBorderColor,
        megaMenuGlobalBorderHoverColor,
        megaMenuGlobalBorderUnits,
        megaMenuGlobalBorderDesktop,
        megaMenuGlobalBorderTablet,
        megaMenuGlobalBorderMobile,
        megaMenuGlobalBorderLink,

        megaMenuGlobalBorderRadiusUnits,
        megaMenuGlobalBorderRadiusDesktop,
        megaMenuGlobalBorderRadiusTablet,
        megaMenuGlobalBorderRadiusMobile,
        megaMenuGlobalBorderRadiusLink,

        megaMenuGlobalBoxShadowSwitcher,
        megaMenuGlobalBoxShadowValues,
        megaMenuGlobalBoxShadowCssValue,
        megaMenuGlobalBoxShadowHoverValues,
        megaMenuGlobalBoxShadowHoverCssValue,
        megaMenuIcon,
        megaMenuIconFrontend,
        megaMenuIconColorSwitcher,
        megaMenuIconColor,
        megaMenuIconHoverColor,
        megaMenuIconSize,
        megaMenuIconSizeUnits,
        megaMenuIconGap,
        megaMenuIconGapUnits,
        megaMenuIconRotateSwitcher,
        megaMenuIconRotation,
        megaMenuIconRotateHover,
        megaMenuWidthSwitcher,
        megaMenuContentWidthValue,
        megaMenuContentWidthValueUnits,
        megaMenuContentTopPositionValue,
        megaMenuContentTopPositionUnits,
        megaMenuContentLeftPositionValue,
        megaMenuContentLeftPositionUnits,
        megaMenuCloseIconColorSwitcher,
        megaMenuCloseIconColor,
        megaMenuCloseIconHoverColor,
        megaMenuCloseIconSize,
        megaMenuCloseIconSizeUnits,
        megaMenuCloseIconRotateSwitcher,
        megaMenuCloseIconRotation,
        megaMenuCloseIconRotateHover,
        megaMenuIconTypeSwitcher,
        megaMenuOpenIconColorSwitcher,
        megaMenuOpenIconColor,
        megaMenuOpenIconHoverColor,
        megaMenuOpenIconSize,
        megaMenuOpenIconSizeUnits,
        megaMenuOpenIconRotateSwitcher,
        megaMenuOpenIconRotation,
        megaMenuOpenIconRotateHover,
        megaMenuMobileLogoWidth,
        megaMenuMobileLogoWidthUnits,
        megaMenuMobileLogoHeight,
        megaMenuMobileLogoHeightUnits,
        megaMenuMobileLogoObjectFit,
    } = attributes;

    const mobileLogoObjectFit =
        megaMenuMobileLogoObjectFit && megaMenuMobileLogoObjectFit !== 'default'
            ? `object-fit: ${megaMenuMobileLogoObjectFit};`
            : '';

    /** Default padding for MegaMenu */
    const megaMenuDesktopPaddingWidth = `${megaMenuDesktopPadding?.top}${megaMenuPaddingUnits?.Desktop} ${megaMenuDesktopPadding?.right}${megaMenuPaddingUnits?.Desktop} ${megaMenuDesktopPadding?.bottom}${megaMenuPaddingUnits?.Desktop} ${megaMenuDesktopPadding?.left}${megaMenuPaddingUnits?.Desktop}`;
    const megaMenuTabletPaddingWidth = `${megaMenuTabletPadding?.top}${megaMenuPaddingUnits?.Tablet} ${megaMenuTabletPadding?.right}${megaMenuPaddingUnits?.Tablet} ${megaMenuTabletPadding?.bottom}${megaMenuPaddingUnits?.Tablet} ${megaMenuTabletPadding?.left}${megaMenuPaddingUnits?.Tablet}`;
    const megaMenuMobilePaddingWidth = `${megaMenuMobilePadding?.top}${megaMenuPaddingUnits?.Mobile} ${megaMenuMobilePadding?.right}${megaMenuPaddingUnits?.Mobile} ${megaMenuMobilePadding?.bottom}${megaMenuPaddingUnits?.Mobile} ${megaMenuMobilePadding?.left}${megaMenuPaddingUnits?.Mobile}`;

    /** Default margin for MegaMenu */
    const megaMenuDesktopMarginWidth = `${megaMenuDesktopMargin?.top}${megaMenuMarginUnits?.Desktop} ${megaMenuDesktopMargin?.right}${megaMenuMarginUnits?.Desktop} ${megaMenuDesktopMargin?.bottom}${megaMenuMarginUnits?.Desktop} ${megaMenuDesktopMargin?.left}${megaMenuMarginUnits?.Desktop}`;
    const megaMenuTabletMarginWidth = `${megaMenuTabletMargin?.top}${megaMenuMarginUnits?.Tablet} ${megaMenuTabletMargin?.right}${megaMenuMarginUnits?.Tablet} ${megaMenuTabletMargin?.bottom}${megaMenuMarginUnits?.Tablet} ${megaMenuTabletMargin?.left}${megaMenuMarginUnits?.Tablet}`;
    const megaMenuMobileMarginWidth = `${megaMenuMobileMargin?.top}${megaMenuMarginUnits?.Mobile} ${megaMenuMobileMargin?.right}${megaMenuMarginUnits?.Mobile} ${megaMenuMobileMargin?.bottom}${megaMenuMarginUnits?.Mobile} ${megaMenuMobileMargin?.left}${megaMenuMarginUnits?.Mobile}`;

    /** Default border for MegaMenu */
    const megaMenuDesktopBorderWidth = `${megaMenuDesktopBorder?.top}${megaMenuBorderUnits?.Desktop} ${megaMenuDesktopBorder?.right}${megaMenuBorderUnits?.Desktop} ${megaMenuDesktopBorder?.bottom}${megaMenuBorderUnits?.Desktop} ${megaMenuDesktopBorder?.left}${megaMenuBorderUnits?.Desktop}`;
    const megaMenuTabletBorderWidth = `${megaMenuTabletBorder?.top}${megaMenuBorderUnits?.Tablet} ${megaMenuTabletBorder?.right}${megaMenuBorderUnits?.Tablet} ${megaMenuTabletBorder?.bottom}${megaMenuBorderUnits?.Tablet} ${megaMenuTabletBorder?.left}${megaMenuBorderUnits?.Tablet}`;
    const megaMenuMobileBorderWidth = `${megaMenuMobileBorder?.top}${megaMenuBorderUnits?.Mobile} ${megaMenuMobileBorder?.right}${megaMenuBorderUnits?.Mobile} ${megaMenuMobileBorder?.bottom}${megaMenuBorderUnits?.Mobile} ${megaMenuMobileBorder?.left}${megaMenuBorderUnits?.Mobile}`;

    /** Default border radius for MegaMenu */
    const megaMenuDesktopBorderRadiusWidth = `${megaMenuDesktopBorderRadius?.top}${megaMenuBorderRadiusUnits?.Desktop} ${megaMenuDesktopBorderRadius?.right}${megaMenuBorderRadiusUnits?.Desktop} ${megaMenuDesktopBorderRadius?.bottom}${megaMenuBorderRadiusUnits?.Desktop} ${megaMenuDesktopBorderRadius?.left}${megaMenuBorderRadiusUnits?.Desktop}`;
    const megaMenuTabletBorderRadiusWidth = `${megaMenuTabletBorderRadius?.top}${megaMenuBorderRadiusUnits?.Tablet} ${megaMenuTabletBorderRadius?.right}${megaMenuBorderRadiusUnits?.Tablet} ${megaMenuTabletBorderRadius?.bottom}${megaMenuBorderRadiusUnits?.Tablet} ${megaMenuTabletBorderRadius?.left}${megaMenuBorderRadiusUnits?.Tablet}`;
    const megaMenuMobileBorderRadiusWidth = `${megaMenuMobileBorderRadius?.top}${megaMenuBorderRadiusUnits?.Mobile} ${megaMenuMobileBorderRadius?.right}${megaMenuBorderRadiusUnits?.Mobile} ${megaMenuMobileBorderRadius?.bottom}${megaMenuBorderRadiusUnits?.Mobile} ${megaMenuMobileBorderRadius?.left}${megaMenuBorderRadiusUnits?.Mobile}`;
    
    const globalDesktopPadding = `${megaMenuGlobalPaddingDesktop?.top}${megaMenuGlobalPaddingUnits?.Desktop} ${megaMenuGlobalPaddingDesktop?.right}${megaMenuGlobalPaddingUnits?.Desktop} ${megaMenuGlobalPaddingDesktop?.bottom}${megaMenuGlobalPaddingUnits?.Desktop} ${megaMenuGlobalPaddingDesktop?.left}${megaMenuGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${megaMenuGlobalPaddingTablet?.top}${megaMenuGlobalPaddingUnits?.Tablet} ${megaMenuGlobalPaddingTablet?.right}${megaMenuGlobalPaddingUnits?.Tablet} ${megaMenuGlobalPaddingTablet?.bottom}${megaMenuGlobalPaddingUnits?.Tablet} ${megaMenuGlobalPaddingTablet?.left}${megaMenuGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${megaMenuGlobalPaddingMobile?.top}${megaMenuGlobalPaddingUnits?.Mobile} ${megaMenuGlobalPaddingMobile?.right}${megaMenuGlobalPaddingUnits?.Mobile} ${megaMenuGlobalPaddingMobile?.bottom}${megaMenuGlobalPaddingUnits?.Mobile} ${megaMenuGlobalPaddingMobile?.left}${megaMenuGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${megaMenuGlobalMarginDesktop?.top}${megaMenuGlobalMarginUnits?.Desktop} ${megaMenuGlobalMarginDesktop?.right}${megaMenuGlobalMarginUnits?.Desktop} ${megaMenuGlobalMarginDesktop?.bottom}${megaMenuGlobalMarginUnits?.Desktop} ${megaMenuGlobalMarginDesktop?.left}${megaMenuGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${megaMenuGlobalMarginTablet?.top}${megaMenuGlobalMarginUnits?.Tablet} ${megaMenuGlobalMarginTablet?.right}${megaMenuGlobalMarginUnits?.Tablet} ${megaMenuGlobalMarginTablet?.bottom}${megaMenuGlobalMarginUnits?.Tablet} ${megaMenuGlobalMarginTablet?.left}${megaMenuGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${megaMenuGlobalMarginMobile?.top}${megaMenuGlobalMarginUnits?.Mobile} ${megaMenuGlobalMarginMobile?.right}${megaMenuGlobalMarginUnits?.Mobile} ${megaMenuGlobalMarginMobile?.bottom}${megaMenuGlobalMarginUnits?.Mobile} ${megaMenuGlobalMarginMobile?.left}${megaMenuGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${megaMenuGlobalBorderDesktop?.top}${megaMenuGlobalBorderUnits?.Desktop} ${megaMenuGlobalBorderDesktop?.right}${megaMenuGlobalBorderUnits?.Desktop} ${megaMenuGlobalBorderDesktop?.bottom}${megaMenuGlobalBorderUnits?.Desktop} ${megaMenuGlobalBorderDesktop?.left}${megaMenuGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${megaMenuGlobalBorderTablet?.top}${megaMenuGlobalBorderUnits?.Tablet} ${megaMenuGlobalBorderTablet?.right}${megaMenuGlobalBorderUnits?.Tablet} ${megaMenuGlobalBorderTablet?.bottom}${megaMenuGlobalBorderUnits?.Tablet} ${megaMenuGlobalBorderTablet?.left}${megaMenuGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${megaMenuGlobalBorderMobile?.top}${megaMenuGlobalBorderUnits?.Mobile} ${megaMenuGlobalBorderMobile?.right}${megaMenuGlobalBorderUnits?.Mobile} ${megaMenuGlobalBorderMobile?.bottom}${megaMenuGlobalBorderUnits?.Mobile} ${megaMenuGlobalBorderMobile?.left}${megaMenuGlobalBorderUnits?.Mobile}`;

    /** End Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${megaMenuGlobalBorderRadiusDesktop?.top}${megaMenuGlobalBorderRadiusUnits?.Desktop} ${megaMenuGlobalBorderRadiusDesktop?.right}${megaMenuGlobalBorderRadiusUnits?.Desktop} ${megaMenuGlobalBorderRadiusDesktop?.bottom}${megaMenuGlobalBorderRadiusUnits?.Desktop} ${megaMenuGlobalBorderRadiusDesktop?.left}${megaMenuGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${megaMenuGlobalBorderRadiusTablet?.top}${megaMenuGlobalBorderRadiusUnits?.Tablet} ${megaMenuGlobalBorderRadiusTablet?.right}${megaMenuGlobalBorderRadiusUnits?.Tablet} ${megaMenuGlobalBorderRadiusTablet?.bottom}${megaMenuGlobalBorderRadiusUnits?.Tablet} ${megaMenuGlobalBorderRadiusTablet?.left}${megaMenuGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${megaMenuGlobalBorderRadiusMobile?.top}${megaMenuGlobalBorderRadiusUnits?.Mobile} ${megaMenuGlobalBorderRadiusMobile?.right}${megaMenuGlobalBorderRadiusUnits?.Mobile} ${megaMenuGlobalBorderRadiusMobile?.bottom}${megaMenuGlobalBorderRadiusUnits?.Mobile} ${megaMenuGlobalBorderRadiusMobile?.left}${megaMenuGlobalBorderRadiusUnits?.Mobile}`;

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = megaMenuGlobalBgNormalBackgroundType;
        const bgColor = megaMenuGlobalBgNormalClassicColor;
        const bgGradient = megaMenuGlobalBgNormalGradientColor;
        const customGradient = megaMenuGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = megaMenuGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = megaMenuGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = megaMenuGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = megaMenuGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = megaMenuGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = megaMenuGlobalBgNormalBackgroundImageSize?.[device];

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
        const bgType = megaMenuGlobalBgHoverBackgroundType;
        const bgColor = megaMenuGlobalBgHoverClassicColor;
        const bgGradient = megaMenuGlobalBgHoverGradientColor;
        const customGradient = megaMenuGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = megaMenuGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = megaMenuGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = megaMenuGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = megaMenuGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = megaMenuGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = megaMenuGlobalBgHoverBackgroundImageSize?.[device];

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
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');


    const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
    const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
    const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
    const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
    const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
    const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    const megaMenuBlockStyle = `
        .${blockID} .fb-advanced-mega-menu-wrapper {
            ${desktopBackgroundNormalStyles}
            ${advancedMegaMenuPositionType === 'default' ? `position: relative !important;` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' ? `width: 100%;` : ''}
            ${advancedMegaMenuPositionType !== 'default' ? `position: ${advancedMegaMenuPositionType} !important;` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuHZOrientationType === 'left' && advancedMegaMenuHZLeftOffset?.Desktop ? `left: ${advancedMegaMenuHZLeftOffset?.Desktop}${advancedMegaMenuHZLeftOffsetUnits?.Desktop};` : ''} 
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuHZOrientationType === 'right' && advancedMegaMenuHZRightOffset?.Desktop ? `right: ${advancedMegaMenuHZRightOffset?.Desktop}${advancedMegaMenuHZRightOffsetUnits?.Desktop};` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuVROrientationType === 'top' && advancedMegaMenuVRTopOffset?.Desktop ? `top: ${advancedMegaMenuVRTopOffset?.Desktop}${advancedMegaMenuVRTopOffsetUnits?.Desktop};` : ''}
            ${advancedMegaMenuPositionType !== 'default' && advancedMegaMenuPositionType !== 'relative' && advancedMegaMenuVROrientationType === 'bottom' && advancedMegaMenuVRBottomOffset?.Desktop ? `bottom: ${advancedMegaMenuVRBottomOffset?.Desktop}${advancedMegaMenuVRBottomOffsetUnits?.Desktop};` : ''}
            ${megaMenuGlobalZIndex?.Desktop ? `z-index: ${megaMenuGlobalZIndex?.Desktop};` : ''}
            ${advancedMegaMenuOverflow !== 'default' ? `overflow: ${advancedMegaMenuOverflow};` : ''}
            ${globalDesktopPadding && megaMenuGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && megaMenuGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${megaMenuGlobalBorder ? `border: ${megaMenuGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && megaMenuGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && megaMenuGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${megaMenuGlobalBorderColor ? `border-color: ${megaMenuGlobalBorderColor};` : ''}
            ${megaMenuGlobalBoxShadowCssValue ? `box-shadow: ${megaMenuGlobalBoxShadowCssValue};` : ''}
        }
        .${blockID} .fb-advanced-mega-menu-wrapper:hover {
            ${desktopBackgroundHoverStyles}
            ${megaMenuGlobalBorderHoverColor ? `border-color: ${megaMenuGlobalBorderHoverColor};` : ''}
            ${megaMenuGlobalBoxShadowHoverCssValue ? `box-shadow: ${megaMenuGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .fb-advanced-mega-menu-wrapper ul{
            ${megaMenuAlignment?.Desktop ? `justify-content: ${megaMenuAlignment?.Desktop};` : ''}
        }
        .${blockID} .fb-advanced-mega-menu-wrapper ul .fb-advanced-mega-menu-item {
            
        }
        .${blockID} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link {
                ${megaMenuGlobalTypoSwitcher?.fontFamily === true && megaMenuGlobalTypographyData?.fontFamily ? `font-family: ${megaMenuGlobalTypographyData?.fontFamily};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontSize === true && megaMenuGlobalTypographyData?.fontSize ? `font-size: ${megaMenuGlobalTypographyData?.fontSize};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontWeight === true && megaMenuGlobalTypographyData?.fontWeight ? `font-weight: ${megaMenuGlobalTypographyData?.fontWeight};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontStyle === true && megaMenuGlobalTypographyData?.fontStyle ? `font-style: ${megaMenuGlobalTypographyData?.fontStyle};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textTransform === true && megaMenuGlobalTypographyData?.textTransform ? `text-transform: ${megaMenuGlobalTypographyData?.textTransform};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textDecoration === true && megaMenuGlobalTypographyData?.textDecoration ? `text-decoration: ${megaMenuGlobalTypographyData?.textDecoration};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === true && megaMenuGlobalTypographyData?.letterSpacing ? `letter-spacing: ${megaMenuGlobalTypographyData?.letterSpacing};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === true && megaMenuGlobalTypographyData?.lineHeight ? `line-height: ${megaMenuGlobalTypographyData?.lineHeight};` : ''}

                ${megaMenuGlobalTypoSwitcher?.fontFamily === false && megaMenuFontFamily && megaMenuFontFamily !== 'Default' ? `font-family: ${megaMenuFontFamily};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontSize === false && megaMenuFontSize?.Desktop && megaMenuFontSizeUnits?.Desktop ? `font-size: ${megaMenuFontSize?.Desktop}${megaMenuFontSizeUnits?.Desktop};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontWeight === false && megaMenuFontWeight ? `font-weight: ${megaMenuFontWeight};` : ''}
                ${megaMenuGlobalTypoSwitcher?.fontStyle === false && megaMenuFontStyle ? `font-style: ${megaMenuFontStyle};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textTransform === false && megaMenuTextTransform ? `text-transform: ${megaMenuTextTransform};` : ''}
                ${megaMenuGlobalTypoSwitcher?.textDecoration === false && megaMenuTextDecoration ? `text-decoration: ${megaMenuTextDecoration};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === false && megaMenuLetterSpacing?.Desktop && megaMenuLetterSpacingUnits?.Desktop ? `letter-spacing: ${megaMenuLetterSpacing?.Desktop}${megaMenuLetterSpacingUnits?.Desktop};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === false && megaMenuLineHeight?.Desktop && megaMenuLineHeightUnits?.Desktop ? `line-height: ${megaMenuLineHeight?.Desktop}${megaMenuLineHeightUnits?.Desktop};` : ''}
                ${megaMenuDesktopPaddingWidth && megaMenuDesktopPadding?.top ? `padding: ${megaMenuDesktopPaddingWidth};` : ''}
                ${megaMenuDesktopMarginWidth && megaMenuDesktopMargin?.top ? `margin: ${megaMenuDesktopMarginWidth};` : ''}
                ${megaMenuBorder ? `border: ${megaMenuBorder};` : ''}
                ${megaMenuDesktopBorderWidth && megaMenuDesktopBorder?.top ? `border-width: ${megaMenuDesktopBorderWidth};` : ''}
                ${megaMenuDesktopBorderRadiusWidth && megaMenuDesktopBorderRadius?.top ? `border-radius: ${megaMenuDesktopBorderRadiusWidth};` : ''}
                ${megaMenuBorderColor ? `border-color: ${megaMenuBorderColor};` : ''}
                ${megaMenuColor ? `color: ${megaMenuColor};` : ''}
                gap: ${megaMenuIconGap?.Desktop}${megaMenuIconGapUnits?.Desktop};
                ${megaMenuTextColorType === 'gradient' ? `
                background: ${megaMenuTextCustomGradientColorSwitcher && megaMenuTextCustomGradientColor ? megaMenuTextCustomGradientColor : megaMenuTextGradientColor};
                ${megaMenuTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${megaMenuTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
                ${megaMenuTextBgColorType === "gradient"
            ? `background: ${megaMenuTextBackgroundCustomGradientColorSwitcher && megaMenuTextBackgroundCustomGradientColor
                ? megaMenuTextBackgroundCustomGradientColor
                : megaMenuTextBackgroundGradientColor
            };`
            : megaMenuTextBackgroundColor ? `background: ${megaMenuTextBackgroundColor};` : ''
        }
            ${megaMenuBoxShadowCssValue ? `box-shadow: ${megaMenuBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        
        .${blockID} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link:hover{
            ${megaMenuHoverColor ? `color: ${megaMenuHoverColor} !important;` : ''}
            ${megaMenuBorderHoverColor ? `border-color: ${megaMenuBorderHoverColor};` : ''}
            ${megaMenuTextHoverColorType === 'gradient' ? `
                background: ${megaMenuTextHoverCustomGradientColorSwitcher && megaMenuTextHoverCustomGradientColor ? megaMenuTextHoverCustomGradientColor : megaMenuTextHoverGradientColor};
                ${megaMenuTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${megaMenuTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
            ${megaMenuTextBgHoverColorType === "gradient"
            ? `background: ${megaMenuTextBackgroundHoverCustomGradientColorSwitcher && megaMenuTextBackgroundHoverCustomGradientColor
                ? megaMenuTextBackgroundHoverCustomGradientColor
                : megaMenuTextBackgroundHoverGradientColor
            };`
            : megaMenuTextBackgroundHoverColor ? `background: ${megaMenuTextBackgroundHoverColor};` : ''
        }
        }
        .${blockID} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-panel{
            ${megaMenuWidthSwitcher === "content"
            ? `
            position: absolute;
                ${megaMenuContentWidthValue ? `width: ${megaMenuContentWidthValue?.Desktop}${megaMenuContentWidthValueUnits?.Desktop};` : ''}
                ${megaMenuContentTopPositionValue ? `top: ${megaMenuContentTopPositionValue?.Desktop}${megaMenuContentTopPositionUnits?.Desktop};` : ''}
                ${megaMenuContentLeftPositionValue ? `left: ${megaMenuContentLeftPositionValue?.Desktop}${megaMenuContentLeftPositionUnits?.Desktop};` : ''}
            `
            : megaMenuWidthSwitcher === "full"
                ? `
                    position: fixed;
                    width: 100%;
                `
                : ''
        }
        }
        .${blockID} .fb-advanced-mega-menu-link .fb-advanced-mega-menu-indicator svg{
            ${megaMenuIconColor ? `fill: ${megaMenuIconColor};` : ''}
            transform: rotate(${megaMenuIconRotation?.Desktop}deg);
            width: ${megaMenuIconSize?.Desktop}${megaMenuIconSizeUnits?.Desktop};
            height: ${megaMenuIconSize?.Desktop}${megaMenuIconSizeUnits?.Desktop};
        }

        .${blockID} .fb-advanced-mega-menu-link:hover .fb-advanced-mega-menu-indicator svg{
            ${megaMenuIconHoverColor ? `fill: ${megaMenuIconHoverColor};` : ''}
            transform: rotate(${megaMenuIconRotateHover?.Desktop}deg);
        }
        
        .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle .hamburger-icon svg{
            ${megaMenuOpenIconColor ? `stroke: ${megaMenuOpenIconColor};` : ''}
            transform: rotate(${megaMenuOpenIconRotation?.Desktop}deg);
            width: ${megaMenuOpenIconSize?.Desktop}${megaMenuOpenIconSizeUnits?.Desktop};
            height: ${megaMenuOpenIconSize?.Desktop}${megaMenuOpenIconSizeUnits?.Desktop};
        }
        .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle:hover .hamburger-icon svg{
            ${megaMenuOpenIconHoverColor ? `stroke: ${megaMenuOpenIconHoverColor};` : ''}
            transform: rotate(${megaMenuOpenIconRotateHover?.Desktop}deg);
        }
        .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle .close-icon svg{
            ${megaMenuCloseIconColor ? `stroke: ${megaMenuCloseIconColor};` : ''}
            transform: rotate(${megaMenuCloseIconRotation?.Desktop}deg);
            width: ${megaMenuCloseIconSize?.Desktop}${megaMenuCloseIconSizeUnits?.Desktop};
            height: ${megaMenuCloseIconSize?.Desktop}${megaMenuCloseIconSizeUnits?.Desktop};
        }
        .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle:hover .close-icon svg{
            ${megaMenuCloseIconHoverColor ? `stroke: ${megaMenuCloseIconHoverColor};` : ''}
            transform: rotate(${megaMenuCloseIconRotateHover?.Desktop}deg);
        }
        .${blockID} .fb-advanced-mega-menu-list .mobile-logo {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .${blockID} .fb-advanced-mega-menu-list .mobile-logo a {
            display: inline-flex;
            line-height: 0;
        }
        .${blockID} .fb-advanced-mega-menu-list .mobile-logo img {
            ${megaMenuMobileLogoWidth?.Desktop && megaMenuMobileLogoWidthUnits?.Desktop ? `width: ${megaMenuMobileLogoWidth.Desktop}${megaMenuMobileLogoWidthUnits.Desktop};` : ''}
            ${megaMenuMobileLogoHeight?.Desktop && megaMenuMobileLogoHeightUnits?.Desktop ? `height: ${megaMenuMobileLogoHeight.Desktop}${megaMenuMobileLogoHeightUnits.Desktop};` : ''}
            ${mobileLogoObjectFit}
            display: block;
        }
        @media only screen and (max-width: 1024px) {
            .${blockID} .fb-advanced-mega-menu-wrapper{
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && megaMenuGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && megaMenuGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && megaMenuGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && megaMenuGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-advanced-mega-menu-wrapper:hover{
                ${tabletBackgroundHoverStyles}
            }
            
            .${blockID} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link {
                ${megaMenuGlobalTypoSwitcher?.fontSize === false && megaMenuFontSize?.Tablet && megaMenuFontSizeUnits?.Tablet ? `font-size: ${megaMenuFontSize?.Tablet}${megaMenuFontSizeUnits?.Tablet};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === false && megaMenuLetterSpacing?.Tablet && megaMenuLetterSpacingUnits?.Tablet ? `letter-spacing: ${megaMenuLetterSpacing?.Tablet}${megaMenuLetterSpacingUnits?.Tablet};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === false && megaMenuLineHeight?.Tablet && megaMenuLineHeightUnits?.Tablet ? `line-height: ${megaMenuLineHeight?.Tablet}${megaMenuLineHeightUnits?.Tablet};` : ''}
                gap: ${megaMenuIconGap?.Tablet}${megaMenuIconGapUnits?.Tablet};
                ${megaMenuTabletPaddingWidth && megaMenuTabletPadding?.top ? `padding: ${megaMenuTabletPaddingWidth};` : ''}
                ${megaMenuTabletMarginWidth && megaMenuTabletMargin?.top ? `margin: ${megaMenuTabletMarginWidth};` : ''}
                ${megaMenuTabletBorderWidth && megaMenuTabletBorder?.top ? `border-width: ${megaMenuTabletBorderWidth};` : ''}
                ${megaMenuTabletBorderRadiusWidth && megaMenuTabletBorderRadius?.top ? `border-radius: ${megaMenuTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-panel{
                ${megaMenuWidthSwitcher === "content"
            ? `
                position: absolute;
                    ${megaMenuContentWidthValue ? `width: ${megaMenuContentWidthValue?.Tablet}${megaMenuContentWidthValueUnits?.Tablet};` : ''}
                    ${megaMenuContentTopPositionValue ? `top: ${megaMenuContentTopPositionValue?.Tablet}${megaMenuContentTopPositionUnits?.Tablet};` : ''}
                    ${megaMenuContentLeftPositionValue ? `left: ${megaMenuContentLeftPositionValue?.Tablet}${megaMenuContentLeftPositionUnits?.Tablet};` : ''}
                `
            : megaMenuWidthSwitcher === "full"
                ? `
                        position: fixed;
                        width: 100%;
                    `
                : ''
        }
            }
            .${blockID} .fb-advanced-mega-menu-link .fb-advanced-mega-menu-indicator svg{
                transform: rotate(${megaMenuIconRotation?.Tablet}deg);
                width: ${megaMenuIconSize?.Tablet}${megaMenuIconSizeUnits?.Tablet};
                height: ${megaMenuIconSize?.Tablet}${megaMenuIconSizeUnits?.Tablet};
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle .hamburger-icon svg{
                transform: rotate(${megaMenuOpenIconRotation?.Tablet}deg);
                width: ${megaMenuOpenIconSize?.Tablet}${megaMenuOpenIconSizeUnits?.Tablet};
                height: ${megaMenuOpenIconSize?.Tablet}${megaMenuOpenIconSizeUnits?.Tablet};
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle:hover .hamburger-icon svg{
                transform: rotate(${megaMenuOpenIconRotateHover?.Tablet}deg);
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle .close-icon svg{
                transform: rotate(${megaMenuCloseIconRotation?.Tablet}deg);
                width: ${megaMenuCloseIconSize?.Tablet}${megaMenuCloseIconSizeUnits?.Tablet};
                height: ${megaMenuCloseIconSize?.Tablet}${megaMenuCloseIconSizeUnits?.Tablet};
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle:hover .close-icon svg{
                transform: rotate(${megaMenuCloseIconRotateHover?.Tablet}deg);
            }
            .${blockID} .fb-advanced-mega-menu-list .mobile-logo img {
                ${megaMenuMobileLogoWidth?.Tablet && megaMenuMobileLogoWidthUnits?.Tablet ? `width: ${megaMenuMobileLogoWidth.Tablet}${megaMenuMobileLogoWidthUnits.Tablet};` : ''}
                ${megaMenuMobileLogoHeight?.Tablet && megaMenuMobileLogoHeightUnits?.Tablet ? `height: ${megaMenuMobileLogoHeight.Tablet}${megaMenuMobileLogoHeightUnits.Tablet};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {   
            .${blockID} .fb-advanced-mega-menu-wrapper{
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && megaMenuGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && megaMenuGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && megaMenuGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && megaMenuGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-advanced-mega-menu-wrapper:hover{
                ${mobileBackgroundHoverStyles}
            }

            .${blockID} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-link {
                ${megaMenuGlobalTypoSwitcher?.fontSize === false && megaMenuFontSize?.Mobile && megaMenuFontSizeUnits?.Mobile ? `font-size: ${megaMenuFontSize?.Mobile}${megaMenuFontSizeUnits?.Mobile};` : ''}
                ${megaMenuGlobalTypoSwitcher?.letterSpacing === false && megaMenuLetterSpacing?.Mobile && megaMenuLetterSpacingUnits?.Mobile ? `letter-spacing: ${megaMenuLetterSpacing?.Mobile}${megaMenuLetterSpacingUnits?.Mobile};` : ''}
                ${megaMenuGlobalTypoSwitcher?.lineHeight === false && megaMenuLineHeight?.Mobile && megaMenuLineHeightUnits?.Mobile ? `line-height: ${megaMenuLineHeight?.Mobile}${megaMenuLineHeightUnits?.Mobile};` : ''}
                gap: ${megaMenuIconGap?.Mobile}${megaMenuIconGapUnits?.Mobile};
                ${megaMenuMobilePaddingWidth && megaMenuMobilePadding?.top ? `padding: ${megaMenuMobilePaddingWidth};` : ''}
                ${megaMenuMobileMarginWidth && megaMenuMobileMargin?.top ? `margin: ${megaMenuMobileMarginWidth};` : ''}
                ${megaMenuMobileBorderWidth && megaMenuMobileBorder?.top ? `border-width: ${megaMenuMobileBorderWidth};` : ''}
                ${megaMenuMobileBorderRadiusWidth && megaMenuMobileBorderRadius?.top ? `border-radius: ${megaMenuMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-advanced-mega-menu-item .fb-advanced-mega-menu-panel{
                ${megaMenuWidthSwitcher === "content"
            ? `
                position: absolute;
                    ${megaMenuContentWidthValue ? `width: ${megaMenuContentWidthValue?.Mobile}${megaMenuContentWidthValueUnits?.Mobile};` : ''}
                    ${megaMenuContentTopPositionValue ? `top: ${megaMenuContentTopPositionValue?.Mobile}${megaMenuContentTopPositionUnits?.Mobile};` : ''}
                    ${megaMenuContentLeftPositionValue ? `left: ${megaMenuContentLeftPositionValue?.Mobile}${megaMenuContentLeftPositionUnits?.Mobile};` : ''}
                `
            : megaMenuWidthSwitcher === "full"
                ? `
                        position: fixed;
                        width: 100%;
                    `
                : ''
        }
            }
            .${blockID} .fb-advanced-mega-menu-link .fb-advanced-mega-menu-indicator svg{
                transform: rotate(${megaMenuIconRotation?.Mobile}deg);
                width: ${megaMenuIconSize?.Mobile}${megaMenuIconSizeUnits?.Mobile};
                height: ${megaMenuIconSize?.Mobile}${megaMenuIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle .hamburger-icon svg{
                transform: rotate(${megaMenuOpenIconRotation?.Mobile}deg);
                width: ${megaMenuOpenIconSize?.Mobile}${megaMenuOpenIconSizeUnits?.Mobile};
                height: ${megaMenuOpenIconSize?.Mobile}${megaMenuOpenIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle:hover .hamburger-icon svg{
                transform: rotate(${megaMenuOpenIconRotateHover?.Tablet}deg);
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle .close-icon svg{
                transform: rotate(${megaMenuCloseIconRotation?.Mobile}deg);
                width: ${megaMenuCloseIconSize?.Mobile}${megaMenuCloseIconSizeUnits?.Mobile};
                height: ${megaMenuCloseIconSize?.Mobile}${megaMenuCloseIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-advanced-mega-menu-wrapper .fb-advanced-mega-menu-toggle:hover .close-icon svg{
                transform: rotate(${megaMenuCloseIconRotateHover?.Mobile}deg);
            }
            .${blockID} .fb-advanced-mega-menu-list .mobile-logo img {
                ${megaMenuMobileLogoWidth?.Mobile && megaMenuMobileLogoWidthUnits?.Mobile ? `width: ${megaMenuMobileLogoWidth.Mobile}${megaMenuMobileLogoWidthUnits.Mobile};` : ''}
                ${megaMenuMobileLogoHeight?.Mobile && megaMenuMobileLogoHeightUnits?.Mobile ? `height: ${megaMenuMobileLogoHeight.Mobile}${megaMenuMobileLogoHeightUnits.Mobile};` : ''}
            }
        }

    `;

    const customCss = getCustomCss(megaMenuGlobalCustomCSS, `.${blockID}`);
    return `${megaMenuBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateAdvancedMegaMenuStyle;