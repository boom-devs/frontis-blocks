/**
 * Off Canvas Menu Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generatemodalPopupStyle = (attributes) => {
    const {
        blockID,
        modalPopupPanelWidth,
        modalPopupPanelWidthUnits,
        modalPopupPanelHeight,
        modalPopupPanelHeightUnits,
        modalPopupCustomCSS,
        modalPopupPanelPaddingUnits,
        modalPopupPanelDesktopPadding,
        modalPopupPanelTabPadding,
        modalPopupPanelMobilePadding,
        modalPopupPanelPaddingLink,
        modalPopupPanelMarginUnits,
        modalPopupPanelDesktopMargin,
        modalPopupPanelTabMargin,
        modalPopupPanelMobileMargin,
        modalPopupPanelMarginLink,
        modalPopupPanelBorder,
        modalPopupPanelBorderColorSwitcher,
        modalPopupPanelBorderColor,
        modalPopupPanelBorderHoverColor,
        modalPopupPanelBorderUnits,
        modalPopupPanelDesktopBorderWidth,
        modalPopupPanelTabBorderWidth,
        modalPopupPanelMobileBorderWidth,
        modalPopupPanelBorderLink,
        modalPopupPanelBorderRadiusUnits,
        modalPopupPanelDesktopBorderRadiusWidth,
        modalPopupPanelTabBorderRadiusWidth,
        modalPopupPanelMobileBorderRadiusWidth,
        modalPopupPanelBorderRadiusLink,
        modalPopupPanelBoxShadowSwitcher,
        modalPopupPanelBoxShadowValues,
        modalPopupPanelBoxShadowCssValue,
        modalPopupPanelBoxShadowHoverValues,
        modalPopupPanelBoxShadowHoverCssValue,
        modalPopupPanelBgColorSwitcher,
        modalPopupPanelBgNormalBackgroundType,
        modalPopupPanelBgNormalClassicColor,
        modalPopupPanelBgNormalGradientColor,
        modalPopupPanelBgNormalCustomGradientSwitcher,
        modalPopupPanelBgNormalCustomGradientInputValue,
        modalPopupPanelBgNormalBackgroundImageUrl,
        modalPopupPanelBgNormalBackgroundImagePosition,
        modalPopupPanelBgNormalBackgroundImageAttachment,
        modalPopupPanelBgNormalBackgroundImageRepeat,
        modalPopupPanelBgNormalBackgroundImageSize,

        modalPopupPanelBgHoverBackgroundType,
        modalPopupPanelBgHoverClassicColor,
        modalPopupPanelBgHoverGradientColor,
        modalPopupPanelBgHoverCustomGradientSwitcher,
        modalPopupPanelBgHoverCustomGradientInputValue,
        modalPopupPanelBgHoverBackgroundImageUrl,
        modalPopupPanelBgHoverBackgroundImagePosition,
        modalPopupPanelBgHoverBackgroundImageAttachment,
        modalPopupPanelBgHoverBackgroundImageRepeat,
        modalPopupPanelBgHoverBackgroundImageSize,

        modalPopupGlobalZIndex,
        modalPopupOverflow,
        modalPopupPositionType,
        modalPopupHZOrientationType,
        modalPopupVROrientationType,
        modalPopupHZLeftOffset,
        modalPopupHZLeftOffsetUnits,
        modalPopupHZRightOffset,
        modalPopupHZRightOffsetUnits,
        modalPopupVRTopOffset,
        modalPopupVRTopOffsetUnits,
        modalPopupVRBottomOffset,
        modalPopupVRBottomOffsetUnits,

        modalPopupGlobalWraperID,
        modalPopupGlobalWraperClass,

        modalPopupGlobalPaddingUnits,
        modalPopupGlobalPaddingDesktop,
        modalPopupGlobalPaddingTablet,
        modalPopupGlobalPaddingMobile,
        modalPopupGlobalPaddingLink,

        modalPopupGlobalMarginUnits,
        modalPopupGlobalMarginDesktop,
        modalPopupGlobalMarginTablet,
        modalPopupGlobalMarginMobile,
        modalPopupGlobalMarginLink,

        modalPopupGlobalBgColorSwitcher,
        modalPopupGlobalBgNormalBackgroundType,
        modalPopupGlobalBgNormalClassicColor,
        modalPopupGlobalBgNormalGradientColor,
        modalPopupGlobalBgNormalCustomGradientSwitcher,
        modalPopupGlobalBgNormalCustomGradientInputValue,

        modalPopupGlobalBgNormalBackgroundImageUrl,
        modalPopupGlobalBgNormalBackgroundImageAlt,
        modalPopupGlobalBgNormalBackgroundImageID,
        modalPopupGlobalBgNormalBackgroundImagePosition,
        modalPopupGlobalBgNormalBackgroundImageAttachment,
        modalPopupGlobalBgNormalBackgroundImageRepeat,
        modalPopupGlobalBgNormalBackgroundImageSize,

        modalPopupGlobalBgHoverBackgroundType,
        modalPopupGlobalBgHoverClassicColor,
        modalPopupGlobalBgHoverGradientColor,
        modalPopupGlobalBgHoverCustomGradientSwitcher,
        modalPopupGlobalBgHoverCustomGradientInputValue,

        modalPopupGlobalBgHoverBackgroundImageUrl,
        modalPopupGlobalBgHoverBackgroundImagePosition,
        modalPopupGlobalBgHoverBackgroundImageAttachment,
        modalPopupGlobalBgHoverBackgroundImageRepeat,
        modalPopupGlobalBgHoverBackgroundImageSize,

        modalPopupGlobalBorder,
        modalPopupGlobalBorderColorSwitcher,
        modalPopupGlobalBorderColor,
        modalPopupGlobalBorderHoverColor,
        modalPopupGlobalBorderUnits,
        modalPopupGlobalBorderDesktop,
        modalPopupGlobalBorderTablet,
        modalPopupGlobalBorderMobile,
        modalPopupGlobalBorderLink,

        modalPopupGlobalBorderRadiusUnits,
        modalPopupGlobalBorderRadiusDesktop,
        modalPopupGlobalBorderRadiusTablet,
        modalPopupGlobalBorderRadiusMobile,
        modalPopupGlobalBorderRadiusLink,

        modalPopupGlobalBoxShadowSwitcher,
        modalPopupGlobalBoxShadowValues,
        modalPopupGlobalBoxShadowCssValue,
        modalPopupGlobalBoxShadowHoverValues,
        modalPopupGlobalBoxShadowHoverCssValue,

        modalPopupDesktopSwitcher,
        modalPopupTabletSwitcher,
        modalPopupMobileSwitcher,
        modalPopupOverlayBackgroundColorSwitcher,
        modalPopupOverlayBackgroundColor,
        modalPopupOverlayBackgroundHoverColor,
        modalPopupOverlayBackgroundGradientColor,
        modalPopupOverlayBackgroundHoverGradientColor,
        modalPopupOverlayBackgroundCustomGradientColorSwitcher,
        modalPopupOverlayBackgroundCustomGradientColor,
        modalPopupOverlayBackgroundHoverCustomGradientColorSwitcher,
        modalPopupOverlayBackgroundHoverCustomGradientColor,
        modalPopupOverlayBgColorType,
        modalPopupOverlayBgHoverColorType,
        modalPopupOverlayColorType,
        modalPopupOverlayHoverColorType,
        modalPopupOverlayHoverColor,
        modalPopupOverlayGradientColor,
        modalPopupOverlayHoverGradientColor,
        modalPopupOverlayCustomGradientColorSwitcher,
        modalPopupOverlayCustomGradientColor,
        modalPopupOverlayHoverCustomGradientColorSwitcher,
        modalPopupOverlayHoverCustomGradientColor,
        modalPopupOverlayOpacity,
        modalPopupOverlayOpacityUnits    
    } = attributes;

    /** Default padding for each device */
    const modalPopupPanelDesktopPaddingStr = `${modalPopupPanelDesktopPadding?.top}${modalPopupPanelPaddingUnits?.Desktop} ${modalPopupPanelDesktopPadding?.right}${modalPopupPanelPaddingUnits?.Desktop} ${modalPopupPanelDesktopPadding?.bottom}${modalPopupPanelPaddingUnits?.Desktop} ${modalPopupPanelDesktopPadding?.left}${modalPopupPanelPaddingUnits?.Desktop}`;
    const modalPopupPanelTabletPaddingStr = `${modalPopupPanelTabPadding?.top}${modalPopupPanelPaddingUnits?.Tablet} ${modalPopupPanelTabPadding?.right}${modalPopupPanelPaddingUnits?.Tablet} ${modalPopupPanelTabPadding?.bottom}${modalPopupPanelPaddingUnits?.Tablet} ${modalPopupPanelTabPadding?.left}${modalPopupPanelPaddingUnits?.Tablet}`;
    const modalPopupPanelMobilePaddingStr = `${modalPopupPanelMobilePadding?.top}${modalPopupPanelPaddingUnits?.Mobile} ${modalPopupPanelMobilePadding?.right}${modalPopupPanelPaddingUnits?.Mobile} ${modalPopupPanelMobilePadding?.bottom}${modalPopupPanelPaddingUnits?.Mobile} ${modalPopupPanelMobilePadding?.left}${modalPopupPanelPaddingUnits?.Mobile}`;

    /** Default margin for each device */
    const modalPopupPanelDesktopMarginStr = `${modalPopupPanelDesktopMargin?.top}${modalPopupPanelMarginUnits?.Desktop} ${modalPopupPanelDesktopMargin?.right}${modalPopupPanelMarginUnits?.Desktop} ${modalPopupPanelDesktopMargin?.bottom}${modalPopupPanelMarginUnits?.Desktop} ${modalPopupPanelDesktopMargin?.left}${modalPopupPanelMarginUnits?.Desktop}`;
    const modalPopupPanelTabletMarginStr = `${modalPopupPanelTabMargin?.top}${modalPopupPanelMarginUnits?.Tablet} ${modalPopupPanelTabMargin?.right}${modalPopupPanelMarginUnits?.Tablet} ${modalPopupPanelTabMargin?.bottom}${modalPopupPanelMarginUnits?.Tablet} ${modalPopupPanelTabMargin?.left}${modalPopupPanelMarginUnits?.Tablet}`;
    const modalPopupPanelMobileMarginStr = `${modalPopupPanelMobileMargin?.top}${modalPopupPanelMarginUnits?.Mobile} ${modalPopupPanelMobileMargin?.right}${modalPopupPanelMarginUnits?.Mobile} ${modalPopupPanelMobileMargin?.bottom}${modalPopupPanelMarginUnits?.Mobile} ${modalPopupPanelMobileMargin?.left}${modalPopupPanelMarginUnits?.Mobile}`;

    /** Default border width for different devices */
    const modalPopupPanelDesktopBorderWidthStr = `${modalPopupPanelDesktopBorderWidth?.top}${modalPopupPanelBorderUnits?.Desktop} ${modalPopupPanelDesktopBorderWidth?.right}${modalPopupPanelBorderUnits?.Desktop} ${modalPopupPanelDesktopBorderWidth?.bottom}${modalPopupPanelBorderUnits?.Desktop} ${modalPopupPanelDesktopBorderWidth?.left}${modalPopupPanelBorderUnits?.Desktop}`;
    const modalPopupPanelTabletBorderWidthStr = `${modalPopupPanelTabBorderWidth?.top}${modalPopupPanelBorderUnits?.Tablet} ${modalPopupPanelTabBorderWidth?.right}${modalPopupPanelBorderUnits?.Tablet} ${modalPopupPanelTabBorderWidth?.bottom}${modalPopupPanelBorderUnits?.Tablet} ${modalPopupPanelTabBorderWidth?.left}${modalPopupPanelBorderUnits?.Tablet}`;
    const modalPopupPanelMobileBorderWidthStr = `${modalPopupPanelMobileBorderWidth?.top}${modalPopupPanelBorderUnits?.Mobile} ${modalPopupPanelMobileBorderWidth?.right}${modalPopupPanelBorderUnits?.Mobile} ${modalPopupPanelMobileBorderWidth?.bottom}${modalPopupPanelBorderUnits?.Mobile} ${modalPopupPanelMobileBorderWidth?.left}${modalPopupPanelBorderUnits?.Mobile}`;

    /** Default border radius for different devices */
    const modalPopupPanelDesktopBorderRadiusStr = `${modalPopupPanelDesktopBorderRadiusWidth?.top}${modalPopupPanelBorderRadiusUnits?.Desktop} ${modalPopupPanelDesktopBorderRadiusWidth?.right}${modalPopupPanelBorderRadiusUnits?.Desktop} ${modalPopupPanelDesktopBorderRadiusWidth?.bottom}${modalPopupPanelBorderRadiusUnits?.Desktop} ${modalPopupPanelDesktopBorderRadiusWidth?.left}${modalPopupPanelBorderRadiusUnits?.Desktop}`;
    const modalPopupPanelTabletBorderRadiusStr = `${modalPopupPanelTabBorderRadiusWidth?.top}${modalPopupPanelBorderRadiusUnits?.Tablet} ${modalPopupPanelTabBorderRadiusWidth?.right}${modalPopupPanelBorderRadiusUnits?.Tablet} ${modalPopupPanelTabBorderRadiusWidth?.bottom}${modalPopupPanelBorderRadiusUnits?.Tablet} ${modalPopupPanelTabBorderRadiusWidth?.left}${modalPopupPanelBorderRadiusUnits?.Tablet}`;
    const modalPopupPanelMobileBorderRadiusStr = `${modalPopupPanelMobileBorderRadiusWidth?.top}${modalPopupPanelBorderRadiusUnits?.Mobile} ${modalPopupPanelMobileBorderRadiusWidth?.right}${modalPopupPanelBorderRadiusUnits?.Mobile} ${modalPopupPanelMobileBorderRadiusWidth?.bottom}${modalPopupPanelBorderRadiusUnits?.Mobile} ${modalPopupPanelMobileBorderRadiusWidth?.left}${modalPopupPanelBorderRadiusUnits?.Mobile}`;

    const globalDesktopPadding = `${modalPopupGlobalPaddingDesktop?.top}${modalPopupGlobalPaddingUnits?.Desktop} ${modalPopupGlobalPaddingDesktop?.right}${modalPopupGlobalPaddingUnits?.Desktop} ${modalPopupGlobalPaddingDesktop?.bottom}${modalPopupGlobalPaddingUnits?.Desktop} ${modalPopupGlobalPaddingDesktop?.left}${modalPopupGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${modalPopupGlobalPaddingTablet?.top}${modalPopupGlobalPaddingUnits?.Tablet} ${modalPopupGlobalPaddingTablet?.right}${modalPopupGlobalPaddingUnits?.Tablet} ${modalPopupGlobalPaddingTablet?.bottom}${modalPopupGlobalPaddingUnits?.Tablet} ${modalPopupGlobalPaddingTablet?.left}${modalPopupGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${modalPopupGlobalPaddingMobile?.top}${modalPopupGlobalPaddingUnits?.Mobile} ${modalPopupGlobalPaddingMobile?.right}${modalPopupGlobalPaddingUnits?.Mobile} ${modalPopupGlobalPaddingMobile?.bottom}${modalPopupGlobalPaddingUnits?.Mobile} ${modalPopupGlobalPaddingMobile?.left}${modalPopupGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${modalPopupGlobalMarginDesktop?.top}${modalPopupGlobalMarginUnits?.Desktop} ${modalPopupGlobalMarginDesktop?.right}${modalPopupGlobalMarginUnits?.Desktop} ${modalPopupGlobalMarginDesktop?.bottom}${modalPopupGlobalMarginUnits?.Desktop} ${modalPopupGlobalMarginDesktop?.left}${modalPopupGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${modalPopupGlobalMarginTablet?.top}${modalPopupGlobalMarginUnits?.Tablet} ${modalPopupGlobalMarginTablet?.right}${modalPopupGlobalMarginUnits?.Tablet} ${modalPopupGlobalMarginTablet?.bottom}${modalPopupGlobalMarginUnits?.Tablet} ${modalPopupGlobalMarginTablet?.left}${modalPopupGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${modalPopupGlobalMarginMobile?.top}${modalPopupGlobalMarginUnits?.Mobile} ${modalPopupGlobalMarginMobile?.right}${modalPopupGlobalMarginUnits?.Mobile} ${modalPopupGlobalMarginMobile?.bottom}${modalPopupGlobalMarginUnits?.Mobile} ${modalPopupGlobalMarginMobile?.left}${modalPopupGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${modalPopupGlobalBorderDesktop?.top}${modalPopupGlobalBorderUnits?.Desktop} ${modalPopupGlobalBorderDesktop?.right}${modalPopupGlobalBorderUnits?.Desktop} ${modalPopupGlobalBorderDesktop?.bottom}${modalPopupGlobalBorderUnits?.Desktop} ${modalPopupGlobalBorderDesktop?.left}${modalPopupGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${modalPopupGlobalBorderTablet?.top}${modalPopupGlobalBorderUnits?.Tablet} ${modalPopupGlobalBorderTablet?.right}${modalPopupGlobalBorderUnits?.Tablet} ${modalPopupGlobalBorderTablet?.bottom}${modalPopupGlobalBorderUnits?.Tablet} ${modalPopupGlobalBorderTablet?.left}${modalPopupGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${modalPopupGlobalBorderMobile?.top}${modalPopupGlobalBorderUnits?.Mobile} ${modalPopupGlobalBorderMobile?.right}${modalPopupGlobalBorderUnits?.Mobile} ${modalPopupGlobalBorderMobile?.bottom}${modalPopupGlobalBorderUnits?.Mobile} ${modalPopupGlobalBorderMobile?.left}${modalPopupGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${modalPopupGlobalBorderRadiusDesktop?.top}${modalPopupGlobalBorderRadiusUnits?.Desktop} ${modalPopupGlobalBorderRadiusDesktop?.right}${modalPopupGlobalBorderRadiusUnits?.Desktop} ${modalPopupGlobalBorderRadiusDesktop?.bottom}${modalPopupGlobalBorderRadiusUnits?.Desktop} ${modalPopupGlobalBorderRadiusDesktop?.left}${modalPopupGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${modalPopupGlobalBorderRadiusTablet?.top}${modalPopupGlobalBorderRadiusUnits?.Tablet} ${modalPopupGlobalBorderRadiusTablet?.right}${modalPopupGlobalBorderRadiusUnits?.Tablet} ${modalPopupGlobalBorderRadiusTablet?.bottom}${modalPopupGlobalBorderRadiusUnits?.Tablet} ${modalPopupGlobalBorderRadiusTablet?.left}${modalPopupGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${modalPopupGlobalBorderRadiusMobile?.top}${modalPopupGlobalBorderRadiusUnits?.Mobile} ${modalPopupGlobalBorderRadiusMobile?.right}${modalPopupGlobalBorderRadiusUnits?.Mobile} ${modalPopupGlobalBorderRadiusMobile?.bottom}${modalPopupGlobalBorderRadiusUnits?.Mobile} ${modalPopupGlobalBorderRadiusMobile?.left}${modalPopupGlobalBorderRadiusUnits?.Mobile}`;

    const getBackgroundNormalStyles = (device) => {
        const bgType = modalPopupPanelBgNormalBackgroundType;
        const bgColor = modalPopupPanelBgNormalClassicColor;
        const bgGradient = modalPopupPanelBgNormalGradientColor;
        const customGradient = modalPopupPanelBgNormalCustomGradientInputValue;
        const customGradientEnabled = modalPopupPanelBgNormalCustomGradientSwitcher;

        const bgImageUrl = modalPopupPanelBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = modalPopupPanelBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = modalPopupPanelBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = modalPopupPanelBgNormalBackgroundImageRepeat?.[device];
        const bgSize = modalPopupPanelBgNormalBackgroundImageSize?.[device];

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
        const bgType = modalPopupPanelBgHoverBackgroundType;
        const bgColor = modalPopupPanelBgHoverClassicColor;
        const bgGradient = modalPopupPanelBgHoverGradientColor;
        const customGradient = modalPopupPanelBgHoverCustomGradientInputValue;
        const customGradientEnabled = modalPopupPanelBgHoverCustomGradientSwitcher;

        const bgImageUrl = modalPopupPanelBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = modalPopupPanelBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = modalPopupPanelBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = modalPopupPanelBgHoverBackgroundImageRepeat?.[device];
        const bgSize = modalPopupPanelBgHoverBackgroundImageSize?.[device];

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

    /**
     * Get background normal styles
     */
    const getGlobalBackgroundNormalStyles = (device) => {
        const bgType = modalPopupGlobalBgNormalBackgroundType;
        const bgColor = modalPopupGlobalBgNormalClassicColor;
        const bgGradient = modalPopupGlobalBgNormalGradientColor;
        const customGradient = modalPopupGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = modalPopupGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = modalPopupGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = modalPopupGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = modalPopupGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = modalPopupGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = modalPopupGlobalBgNormalBackgroundImageSize?.[device];

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
    const getGlobalBackgroundHoverStyles = (device) => {
        const bgType = modalPopupGlobalBgHoverBackgroundType;
        const bgColor = modalPopupGlobalBgHoverClassicColor;
        const bgGradient = modalPopupGlobalBgHoverGradientColor;
        const customGradient = modalPopupGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = modalPopupGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = modalPopupGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = modalPopupGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = modalPopupGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = modalPopupGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = modalPopupGlobalBgHoverBackgroundImageSize?.[device];

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
    const backgroundGlobalStyleObjectToString = (styleObj) => Object.entries(styleObj).map(([key, value]) => `${key}: ${value};`).join(' ');

    const desktopGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Desktop'));
    const desktopGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Desktop'));
    const tabletGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Tablet'));
    const tabletGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Tablet'));
    const mobileGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Mobile'));
    const mobileGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Mobile'));

    const modalPopupStyle = `
        .${blockID}.fb-advanced-modal-popup-block{
            ${modalPopupPositionType === 'default' ? `position: relative !important;` : ''}
            ${modalPopupPositionType !== 'default' && modalPopupPositionType !== 'relative' ? `width: 100%;` : ''}
            ${modalPopupPositionType !== 'default' ? `position: ${modalPopupPositionType} !important;` : ''}
            ${modalPopupPositionType !== 'default' && modalPopupPositionType !== 'relative' && modalPopupHZOrientationType === 'left' && modalPopupHZLeftOffset?.Desktop ? `left: ${modalPopupHZLeftOffset?.Desktop}${modalPopupHZLeftOffsetUnits?.Desktop};` : ''} 
            ${modalPopupPositionType !== 'default' && modalPopupPositionType !== 'relative' && modalPopupHZOrientationType === 'right' && modalPopupHZRightOffset?.Desktop ? `right: ${modalPopupHZRightOffset?.Desktop}${modalPopupHZRightOffsetUnits?.Desktop};` : ''}
            ${modalPopupPositionType !== 'default' && modalPopupPositionType !== 'relative' && modalPopupVROrientationType === 'top' && modalPopupVRTopOffset?.Desktop ? `top: ${modalPopupVRTopOffset?.Desktop}${modalPopupVRTopOffsetUnits?.Desktop};` : ''}
            ${modalPopupPositionType !== 'default' && modalPopupPositionType !== 'relative' && modalPopupVROrientationType === 'bottom' && modalPopupVRBottomOffset?.Desktop ? `bottom: ${modalPopupVRBottomOffset?.Desktop}${modalPopupVRBottomOffsetUnits?.Desktop};` : ''}
            ${modalPopupGlobalZIndex?.Desktop ? `z-index: ${modalPopupGlobalZIndex?.Desktop};` : ''}
            ${modalPopupOverflow !== 'default' ? `overflow: ${modalPopupOverflow};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup-container{
            ${desktopGlobalBackgroundNormalStyles}
            ${globalDesktopPadding && modalPopupGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && modalPopupGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${modalPopupGlobalBorder ? `border: ${modalPopupGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && modalPopupGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && modalPopupGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${modalPopupGlobalBorderColor ? `border-color: ${modalPopupGlobalBorderColor};` : ''}
            ${modalPopupGlobalBoxShadowCssValue ? `box-shadow: ${modalPopupGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-advanced-modal-popup-block:hover .fb-advanced-modal-popup-container{
            ${desktopGlobalBackgroundHoverStyles}
            ${modalPopupGlobalBorderHoverColor ? `border-color: ${modalPopupGlobalBorderHoverColor};` : ''}
            ${modalPopupGlobalBoxShadowHoverCssValue ? `box-shadow: ${modalPopupGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup{
            ${modalPopupPanelWidth?.Desktop ? `width: ${modalPopupPanelWidth?.Desktop}${modalPopupPanelWidthUnits?.Desktop};` : ''}
            ${modalPopupPanelHeight?.Desktop ? `height: ${modalPopupPanelHeight?.Desktop}${modalPopupPanelHeightUnits?.Desktop};` : ''}
            ${modalPopupPanelDesktopPaddingStr && modalPopupPanelDesktopPadding?.top ? `padding: ${modalPopupPanelDesktopPaddingStr};` : ''}
            ${modalPopupPanelDesktopMarginStr && modalPopupPanelDesktopMargin?.top ? `margin: ${modalPopupPanelDesktopMarginStr};` : ''}
            ${modalPopupPanelBorder ? `border: ${modalPopupPanelBorder};` : ''}
            ${modalPopupPanelBorderColor ? `border-color: ${modalPopupPanelBorderColor};` : ''}
            ${modalPopupPanelDesktopBorderWidthStr && modalPopupPanelDesktopBorderWidth?.top ? `border-width: ${modalPopupPanelDesktopBorderWidthStr};` : ''}
            ${modalPopupPanelDesktopBorderRadiusStr && modalPopupPanelDesktopBorderRadiusWidth?.top ? `border-radius: ${modalPopupPanelDesktopBorderRadiusStr};` : ''}
            ${modalPopupPanelBoxShadowCssValue ? `box-shadow: ${modalPopupPanelBoxShadowCssValue};` : ''} 
            ${desktopBackgroundNormalStyles}
        }

        .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup:hover{
            ${modalPopupPanelBoxShadowHoverCssValue ? `box-shadow: ${modalPopupPanelBoxShadowHoverCssValue};` : ''}
            ${modalPopupPanelBorderHoverColor ? `border-color: ${modalPopupPanelBorderHoverColor};` : ''}
            ${desktopBackgroundHoverStyles}
        }

        .${blockID}.fb-advanced-modal-popup-block .fb-modal-overlay{
            ${modalPopupOverlayColorType === 'gradient' ? `
                background: ${modalPopupOverlayCustomGradientColorSwitcher && modalPopupOverlayCustomGradientColor ? modalPopupOverlayCustomGradientColor : modalPopupOverlayGradientColor};
                ${modalPopupOverlayCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${modalPopupOverlayGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
                ${modalPopupOverlayBgColorType === "gradient"
            ? `background: ${modalPopupOverlayBackgroundCustomGradientColorSwitcher && modalPopupOverlayBackgroundCustomGradientColor
                ? modalPopupOverlayBackgroundCustomGradientColor
                : modalPopupOverlayBackgroundGradientColor
            };`
            : modalPopupOverlayBackgroundColor ? `background: ${modalPopupOverlayBackgroundColor};` : ''
            }
        }
        .${blockID}.fb-advanced-modal-popup-block .fb-modal-overlay.active{
            ${modalPopupOverlayOpacity?.Desktop ? `opacity: ${modalPopupOverlayOpacity?.Desktop}${modalPopupOverlayOpacityUnits?.Desktop};` : ''}
        }
        .${blockID}.fb-advanced-modal-popup-block .fb-modal-overlay:hover{
            ${modalPopupOverlayHoverColorType === 'gradient' ? `
                background: ${modalPopupOverlayHoverCustomGradientColorSwitcher && modalPopupOverlayHoverCustomGradientColor ? modalPopupOverlayHoverCustomGradientColor : modalPopupOverlayHoverGradientColor};
                ${modalPopupOverlayHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${modalPopupOverlayHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
                ${modalPopupOverlayHoverColorType === "gradient"
            ? `background: ${modalPopupOverlayHoverCustomGradientColorSwitcher && modalPopupOverlayHoverCustomGradientColor
                ? modalPopupOverlayHoverCustomGradientColor
                : modalPopupOverlayHoverGradientColor
            };`
            : modalPopupOverlayBackgroundHoverColor ? `background: ${modalPopupOverlayBackgroundHoverColor};` : ''
            }
        }
        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-advanced-modal-popup-block{
                ${modalPopupGlobalZIndex?.Tablet ? `z-index: ${modalPopupGlobalZIndex?.Tablet};` : ''}
            }
            .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup{
                ${modalPopupPanelWidth?.Tablet ? `width: ${modalPopupPanelWidth?.Tablet}${modalPopupPanelWidthUnits?.Tablet};` : ''}
                ${modalPopupPanelHeight?.Tablet ? `height: ${modalPopupPanelHeight?.Tablet}${modalPopupPanelHeightUnits?.Tablet};` : ''}
                ${modalPopupPanelTabletPaddingStr && modalPopupPanelTabPadding?.top ? `padding: ${modalPopupPanelTabletPaddingStr};` : ''}
                ${modalPopupPanelTabletMarginStr && modalPopupPanelTabMargin?.top ? `margin: ${modalPopupPanelTabletMarginStr};` : ''}
                ${modalPopupPanelTabletBorderWidthStr && modalPopupPanelTabBorderWidth?.top ? `border-width: ${modalPopupPanelTabletBorderWidthStr};` : ''}
                ${modalPopupPanelTabletBorderRadiusStr && modalPopupPanelTabBorderRadiusWidth?.top ? `border-radius: ${modalPopupPanelTabletBorderRadiusStr};` : ''}
                ${tabletBackgroundNormalStyles}
            }
            .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup:hover{
                ${tabletBackgroundHoverStyles}
            }
            .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup-container{
                ${tabletGlobalBackgroundNormalStyles}
                ${globalTabletPadding && modalPopupGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && modalPopupGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${modalPopupGlobalBorder ? `border: ${modalPopupGlobalBorder};` : ''}
                ${globalTabletBorderWidth && modalPopupGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && modalPopupGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-advanced-modal-popup-block:hover .fb-advanced-modal-popup-container{
                ${tabletGlobalBackgroundHoverStyles}
            }
        }

        @media only screen and (max-width: 768px) {
            .${blockID}.fb-advanced-modal-popup-block{
                ${modalPopupGlobalZIndex?.Mobile ? `z-index: ${modalPopupGlobalZIndex?.Mobile};` : ''}
            }
            .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup{
                ${modalPopupPanelWidth?.Mobile ? `width: ${modalPopupPanelWidth?.Mobile}${modalPopupPanelWidthUnits?.Mobile};` : ''}
                ${modalPopupPanelHeight?.Mobile ? `height: ${modalPopupPanelHeight?.Mobile}${modalPopupPanelHeightUnits?.Mobile};` : ''}
                ${modalPopupPanelMobilePaddingStr && modalPopupPanelMobilePadding?.top ? `padding: ${modalPopupPanelMobilePaddingStr};` : ''}
                ${modalPopupPanelMobileMarginStr && modalPopupPanelMobileMargin?.top ? `margin: ${modalPopupPanelMobileMarginStr};` : ''}
                ${modalPopupPanelMobileBorderWidthStr && modalPopupPanelMobileBorderWidth?.top ? `border-width: ${modalPopupPanelMobileBorderWidthStr};` : ''}
                ${modalPopupPanelMobileBorderRadiusStr && modalPopupPanelMobileBorderRadiusWidth?.top ? `border-radius: ${modalPopupPanelMobileBorderRadiusStr};` : ''}
                ${mobileBackgroundNormalStyles}

            }
            .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup:hover{
                ${mobileBackgroundHoverStyles}
            }

            .${blockID}.fb-advanced-modal-popup-block .fb-advanced-modal-popup-container{
                ${mobileGlobalBackgroundNormalStyles}
                ${globalMobilePadding && modalPopupGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && modalPopupGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${modalPopupGlobalBorder ? `border: ${modalPopupGlobalBorder};` : ''}
                ${globalMobileBorderWidth && modalPopupGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && modalPopupGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-advanced-modal-popup-block:hover .fb-advanced-modal-popup-container{
                ${mobileGlobalBackgroundHoverStyles}
            }
        }
    `;

    const customCss = getCustomCss(modalPopupCustomCSS, `.${blockID}`);
        
    return `${modalPopupStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generatemodalPopupStyle;