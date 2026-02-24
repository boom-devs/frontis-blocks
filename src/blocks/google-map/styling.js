/**
 * Google Map Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateGoogleMapStyle = (attributes) => {
    const {
        blockID,
        blockStyle,
        googleMapLocation,
        googleMapZoomLevel,
        googleMapMapType,
        googleMapWidth,
        googleMapWidthUnits,
        googleMapHeight,
        googleMapHeightUnits,

        googleMapPaddingUnits,
        googleMapPaddingDesktop,
        googleMapPaddingTablet,
        googleMapPaddingMobile,
        googleMapPaddingLink,

        googleMapMarginUnits,
        googleMapMarginDesktop,
        googleMapMarginTablet,
        googleMapMarginMobile,
        googleMapMarginLink,

        googleMapBgColorSwitcher,
        googleMapNormalBackgroundType,
        googleMapNormalClassicColor,
        googleMapNormalGradientColor,
        googleMapNormalCustomGradientSwitcher,
        googleMapNormalCustomGradientInputValue,
        googleMapHoverBackgroundType,
        googleMapHoverClassicColor,
        googleMapHoverGradientColor,
        googleMapHoverCustomGradientSwitcher,
        googleMapHoverCustomGradientInputValue,

        googleMapBorder,
        googleMapBorderColorSwitcher,
        googleMapBorderColor,
        googleMapBorderHoverColor,

        googleMapBorderUnits,
        googleMapBorderDesktop,
        googleMapBorderTablet,
        googleMapBorderMobile,
        googleMapBorderLink,

        googleMapBorderRadiusUnits,
        googleMapBorderRadiusDesktop,
        googleMapBorderRadiusTablet,
        googleMapBorderRadiusMobile,
        googleMapBorderRadiusLink,

        googleMapBoxShadowSwitcher,
        googleMapBoxShadowValues,
        googleMapBoxShadowCssValue,
        googleMapBoxShadowHoverValues,
        googleMapBoxShadowHoverCssValue,
        googleMapGlobalZIndex,

        googleMapCustomCSS,
        googleMapWraperID,
        googleMapWraperClass,

    } = attributes;

    /** Default padding for Google Map */
    const googleMapPaddingDesktopWidth = `${googleMapPaddingDesktop?.top}${googleMapPaddingUnits?.Desktop} ${googleMapPaddingDesktop?.right}${googleMapPaddingUnits?.Desktop} ${googleMapPaddingDesktop?.bottom}${googleMapPaddingUnits?.Desktop} ${googleMapPaddingDesktop?.left}${googleMapPaddingUnits?.Desktop}`; 
    const googleMapPaddingTabletWidth = `${googleMapPaddingTablet?.top}${googleMapPaddingUnits?.Tablet} ${googleMapPaddingTablet?.right}${googleMapPaddingUnits?.Tablet} ${googleMapPaddingTablet?.bottom}${googleMapPaddingUnits?.Tablet} ${googleMapPaddingTablet?.left}${googleMapPaddingUnits?.Tablet}`;
    const googleMapPaddingMobileWidth = `${googleMapPaddingMobile?.top}${googleMapPaddingUnits?.Mobile} ${googleMapPaddingMobile?.right}${googleMapPaddingUnits?.Mobile} ${googleMapPaddingMobile?.bottom}${googleMapPaddingUnits?.Mobile} ${googleMapPaddingMobile?.left}${googleMapPaddingUnits?.Mobile}`;

    /** Default margin for Google Map */
    const googleMapMarginDesktopWidth = `${googleMapMarginDesktop?.top}${googleMapMarginUnits?.Desktop} ${googleMapMarginDesktop?.right}${googleMapMarginUnits?.Desktop} ${googleMapMarginDesktop?.bottom}${googleMapMarginUnits?.Desktop} ${googleMapMarginDesktop?.left}${googleMapMarginUnits?.Desktop}`;
    const googleMapMarginTabletWidth = `${googleMapMarginTablet?.top}${googleMapMarginUnits?.Tablet} ${googleMapMarginTablet?.right}${googleMapMarginUnits?.Tablet} ${googleMapMarginTablet?.bottom}${googleMapMarginUnits?.Tablet} ${googleMapMarginTablet?.left}${googleMapMarginUnits?.Tablet}`;
    const googleMapMarginMobileWidth = `${googleMapMarginMobile?.top}${googleMapMarginUnits?.Mobile} ${googleMapMarginMobile?.right}${googleMapMarginUnits?.Mobile} ${googleMapMarginMobile?.bottom}${googleMapMarginUnits?.Mobile} ${googleMapMarginMobile?.left}${googleMapMarginUnits?.Mobile}`;

    /** Default border radius for Google Map */ 
    const googleMapBorderDesktopWidth = `${googleMapBorderDesktop?.top}${googleMapBorderUnits?.Desktop} ${googleMapBorderDesktop?.right}${googleMapBorderUnits?.Desktop} ${googleMapBorderDesktop?.bottom}${googleMapBorderUnits?.Desktop} ${googleMapBorderDesktop?.left}${googleMapBorderUnits?.Desktop}`;
    const googleMapBorderTabletWidth = `${googleMapBorderTablet?.top}${googleMapBorderUnits?.Tablet} ${googleMapBorderTablet?.right}${googleMapBorderUnits?.Tablet} ${googleMapBorderTablet?.bottom}${googleMapBorderUnits?.Tablet} ${googleMapBorderTablet?.left}${googleMapBorderUnits?.Tablet}`;
    const googleMapBorderMobileWidth = `${googleMapBorderMobile?.top}${googleMapBorderUnits?.Mobile} ${googleMapBorderMobile?.right}${googleMapBorderUnits?.Mobile} ${googleMapBorderMobile?.bottom}${googleMapBorderUnits?.Mobile} ${googleMapBorderMobile?.left}${googleMapBorderUnits?.Mobile}`;

    /** Default border radius for Google Map */
    const googleMapBorderRadiusDesktopWidth = `${googleMapBorderRadiusDesktop?.top}${googleMapBorderRadiusUnits?.Desktop} ${googleMapBorderRadiusDesktop?.right}${googleMapBorderRadiusUnits?.Desktop} ${googleMapBorderRadiusDesktop?.bottom}${googleMapBorderRadiusUnits?.Desktop} ${googleMapBorderRadiusDesktop?.left}${googleMapBorderRadiusUnits?.Desktop}`;
    const googleMapBorderRadiusTabletWidth = `${googleMapBorderRadiusTablet?.top}${googleMapBorderRadiusUnits?.Tablet} ${googleMapBorderRadiusTablet?.right}${googleMapBorderRadiusUnits?.Tablet} ${googleMapBorderRadiusTablet?.bottom}${googleMapBorderRadiusUnits?.Tablet} ${googleMapBorderRadiusTablet?.left}${googleMapBorderRadiusUnits?.Tablet}`;
    const googleMapBorderRadiusMobileWidth = `${googleMapBorderRadiusMobile?.top}${googleMapBorderRadiusUnits?.Mobile} ${googleMapBorderRadiusMobile?.right}${googleMapBorderRadiusUnits?.Mobile} ${googleMapBorderRadiusMobile?.bottom}${googleMapBorderRadiusUnits?.Mobile} ${googleMapBorderRadiusMobile?.left}${googleMapBorderRadiusUnits?.Mobile}`;

    const googleMapBlockStyle = `
    
        .${blockID} .fb-google-map-wrapper iframe {
            ${googleMapGlobalZIndex?.Desktop ? `z-index: ${googleMapGlobalZIndex?.Desktop};` : ''} 
            ${googleMapWidth?.Desktop ? `width: ${googleMapWidth?.Desktop}${googleMapWidthUnits?.Desktop};` : ''} 
            ${googleMapHeight?.Desktop ? `height: ${googleMapHeight?.Desktop}${googleMapHeightUnits?.Desktop};` : ''} 
            ${googleMapPaddingDesktopWidth && googleMapPaddingDesktop?.top? `padding: ${googleMapPaddingDesktopWidth};` : ''}
            ${googleMapMarginDesktopWidth && googleMapMarginDesktop?.top? `margin: ${googleMapMarginDesktopWidth};` : ''} 
            ${googleMapBorder ? `border: ${googleMapBorder};` : ''} 
            ${googleMapBorderDesktopWidth && googleMapBorderDesktop?.top? `border-width: ${googleMapBorderDesktopWidth};` : ''}
            ${googleMapBorderRadiusDesktopWidth && googleMapBorderRadiusDesktop?.top? `border-radius: ${googleMapBorderRadiusDesktopWidth};` : ''}
            ${googleMapBorderColor ? `border-color: ${googleMapBorderColor};` : ''}
            ${googleMapBoxShadowCssValue ? `box-shadow: ${googleMapBoxShadowCssValue};` : ''}

            ${googleMapNormalBackgroundType === 'gradient' ? `  
                ${googleMapNormalCustomGradientSwitcher && googleMapNormalCustomGradientInputValue ? `background: ${googleMapNormalCustomGradientInputValue};` : `background: ${googleMapNormalGradientColor};`}
            `: `
                ${googleMapNormalClassicColor ? `background: ${googleMapNormalClassicColor};` : ''}
            `}
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID} .fb-google-map-wrapper iframe:hover {
            ${googleMapBorderHoverColor ? `border-color: ${googleMapBorderHoverColor};` : ''}
            ${googleMapBoxShadowHoverCssValue ? `box-shadow: ${googleMapBoxShadowHoverCssValue};` : ''}
            ${googleMapHoverBackgroundType === 'gradient' ? `
                ${googleMapHoverCustomGradientSwitcher && googleMapHoverCustomGradientInputValue ? `background: ${googleMapHoverCustomGradientInputValue};` : `background: ${googleMapHoverGradientColor};`}
            `: `
                ${googleMapHoverClassicColor ? `background: ${googleMapHoverClassicColor};` : ''}
            `}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID} .fb-google-map-wrapper iframe {
                ${googleMapGlobalZIndex?.Tablet ? `z-index: ${googleMapGlobalZIndex?.Tablet};` : ''} 
                ${googleMapWidth?.Tablet ? `width: ${googleMapWidth?.Tablet}${googleMapWidthUnits?.Tablet};` : ''} 
                ${googleMapHeight?.Tablet ? `height: ${googleMapHeight?.Tablet}${googleMapHeightUnits?.Tablet};` : ''} 
                ${googleMapPaddingTabletWidth && googleMapPaddingTablet?.top? `padding: ${googleMapPaddingTabletWidth};` : ''}
                ${googleMapMarginTabletWidth && googleMapMarginTablet?.top? `margin: ${googleMapMarginTabletWidth};` : ''} 
                ${googleMapBorderTabletWidth && googleMapBorderTablet?.top? `border-width: ${googleMapBorderTabletWidth};` : ''}
                ${googleMapBorderRadiusTabletWidth && googleMapBorderRadiusTablet?.top? `border-radius: ${googleMapBorderRadiusTabletWidth};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID} .fb-google-map-wrapper iframe {
                ${googleMapGlobalZIndex?.Mobile ? `z-index: ${googleMapGlobalZIndex?.Mobile};` : ''}  
                ${googleMapWidth?.Mobile ? `width: ${googleMapWidth?.Mobile}${googleMapWidthUnits?.Mobile};` : ''} 
                ${googleMapHeight?.Mobile ? `height: ${googleMapHeight?.Mobile}${googleMapHeightUnits?.Mobile};` : ''} 
                ${googleMapPaddingMobileWidth && googleMapPaddingMobile?.top? `padding: ${googleMapPaddingMobileWidth};` : ''}
                ${googleMapMarginMobileWidth && googleMapMarginMobile?.top? `margin: ${googleMapMarginMobileWidth};` : ''} 
                ${googleMapBorderMobileWidth && googleMapBorderMobile?.top? `border-width: ${googleMapBorderMobileWidth};` : ''}
                ${googleMapBorderRadiusMobileWidth && googleMapBorderRadiusMobile?.top? `border-radius: ${googleMapBorderRadiusMobileWidth};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(googleMapCustomCSS, `.${blockID}`);
    return `${googleMapBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateGoogleMapStyle;