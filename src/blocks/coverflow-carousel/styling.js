/**
 * coverflowCarousel Number Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generatecoverflowCarouselNumberStyle = (attributes) => {
    const {
        blockID,

        //Global attributes
        coverflowCarouselGlobalZIndex,
        coverflowCarouselOverflow,
        coverflowCarouselGlobalPaddingUnits,
        coverflowCarouselGlobalPaddingDesktop,
        coverflowCarouselGlobalPaddingTablet,
        coverflowCarouselGlobalPaddingMobile,
        coverflowCarouselGlobalPaddingLink,
        coverflowCarouselGlobalMarginUnits,
        coverflowCarouselGlobalMarginDesktop,
        coverflowCarouselGlobalMarginTablet,
        coverflowCarouselGlobalMarginMobile,
        coverflowCarouselGlobalMarginLink,
        coverflowCarouselGlobalBgColorSwitcher,
        coverflowCarouselGlobalBgColor,
        coverflowCarouselGlobalBgHoverColor,
        coverflowCarouselGlobalBorder,
        coverflowCarouselGlobalBorderColorSwitcher,
        coverflowCarouselGlobalBorderColor,
        coverflowCarouselGlobalBorderHoverColor,
        coverflowCarouselGlobalBorderUnits,
        coverflowCarouselGlobalBorderDesktop,
        coverflowCarouselGlobalBorderTablet,
        coverflowCarouselGlobalBorderMobile,
        coverflowCarouselGlobalBorderLink,
        coverflowCarouselGlobalBorderRadiusUnits,
        coverflowCarouselGlobalBorderRadiusDesktop,
        coverflowCarouselGlobalBorderRadiusTablet,
        coverflowCarouselGlobalBorderRadiusMobile,
        coverflowCarouselGlobalBorderRadiusLink,
        coverflowCarouselGlobalBoxShadowValues,
        coverflowCarouselGlobalBoxShadowCssValue,

        coverflowCarouselDesktopSwitcher,
        coverflowCarouselTabletSwitcher,
        coverflowCarouselMobileSwitcher,

        // Position
        coverflowCarouselPositionType,
        coverflowCarouselHZOrientationType,
        coverflowCarouselVROrientationType,
        coverflowCarouselHZLeftOffset,
        coverflowCarouselHZLeftOffsetUnits,
        coverflowCarouselHZRightOffset,
        coverflowCarouselHZRightOffsetUnits,
        coverflowCarouselVRTopOffset,
        coverflowCarouselVRTopOffsetUnits,
        coverflowCarouselVRBottomOffset,
        coverflowCarouselVRBottomOffsetUnits,

        coverflowCarouselGlobalWraperCustomCSS,
        coverflowCarouselGlobalWraperID,
        coverflowCarouselGlobalWraperClass,
        coverflowCarouselPresetStyle
    } = attributes;

    const globalDesktopPadding = `${coverflowCarouselGlobalPaddingDesktop?.top}${coverflowCarouselGlobalPaddingUnits?.Desktop} ${coverflowCarouselGlobalPaddingDesktop?.right}${coverflowCarouselGlobalPaddingUnits?.Desktop} ${coverflowCarouselGlobalPaddingDesktop?.bottom}${coverflowCarouselGlobalPaddingUnits?.Desktop} ${coverflowCarouselGlobalPaddingDesktop?.left}${coverflowCarouselGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${coverflowCarouselGlobalPaddingTablet?.top}${coverflowCarouselGlobalPaddingUnits?.Tablet} ${coverflowCarouselGlobalPaddingTablet?.right}${coverflowCarouselGlobalPaddingUnits?.Tablet} ${coverflowCarouselGlobalPaddingTablet?.bottom}${coverflowCarouselGlobalPaddingUnits?.Tablet} ${coverflowCarouselGlobalPaddingTablet?.left}${coverflowCarouselGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${coverflowCarouselGlobalPaddingMobile?.top}${coverflowCarouselGlobalPaddingUnits?.Mobile} ${coverflowCarouselGlobalPaddingMobile?.right}${coverflowCarouselGlobalPaddingUnits?.Mobile} ${coverflowCarouselGlobalPaddingMobile?.bottom}${coverflowCarouselGlobalPaddingUnits?.Mobile} ${coverflowCarouselGlobalPaddingMobile?.left}${coverflowCarouselGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${coverflowCarouselGlobalMarginDesktop?.top}${coverflowCarouselGlobalMarginUnits?.Desktop} ${coverflowCarouselGlobalMarginDesktop?.right}${coverflowCarouselGlobalMarginUnits?.Desktop} ${coverflowCarouselGlobalMarginDesktop?.bottom}${coverflowCarouselGlobalMarginUnits?.Desktop} ${coverflowCarouselGlobalMarginDesktop?.left}${coverflowCarouselGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${coverflowCarouselGlobalMarginTablet?.top}${coverflowCarouselGlobalMarginUnits?.Tablet} ${coverflowCarouselGlobalMarginTablet?.right}${coverflowCarouselGlobalMarginUnits?.Tablet} ${coverflowCarouselGlobalMarginTablet?.bottom}${coverflowCarouselGlobalMarginUnits?.Tablet} ${coverflowCarouselGlobalMarginTablet?.left}${coverflowCarouselGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${coverflowCarouselGlobalMarginMobile?.top}${coverflowCarouselGlobalMarginUnits?.Mobile} ${coverflowCarouselGlobalMarginMobile?.right}${coverflowCarouselGlobalMarginUnits?.Mobile} ${coverflowCarouselGlobalMarginMobile?.bottom}${coverflowCarouselGlobalMarginUnits?.Mobile} ${coverflowCarouselGlobalMarginMobile?.left}${coverflowCarouselGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${coverflowCarouselGlobalBorderDesktop?.top}${coverflowCarouselGlobalBorderUnits?.Desktop} ${coverflowCarouselGlobalBorderDesktop?.right}${coverflowCarouselGlobalBorderUnits?.Desktop} ${coverflowCarouselGlobalBorderDesktop?.bottom}${coverflowCarouselGlobalBorderUnits?.Desktop} ${coverflowCarouselGlobalBorderDesktop?.left}${coverflowCarouselGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${coverflowCarouselGlobalBorderTablet?.top}${coverflowCarouselGlobalBorderUnits?.Tablet} ${coverflowCarouselGlobalBorderTablet?.right}${coverflowCarouselGlobalBorderUnits?.Tablet} ${coverflowCarouselGlobalBorderTablet?.bottom}${coverflowCarouselGlobalBorderUnits?.Tablet} ${coverflowCarouselGlobalBorderTablet?.left}${coverflowCarouselGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${coverflowCarouselGlobalBorderMobile?.top}${coverflowCarouselGlobalBorderUnits?.Mobile} ${coverflowCarouselGlobalBorderMobile?.right}${coverflowCarouselGlobalBorderUnits?.Mobile} ${coverflowCarouselGlobalBorderMobile?.bottom}${coverflowCarouselGlobalBorderUnits?.Mobile} ${coverflowCarouselGlobalBorderMobile?.left}${coverflowCarouselGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${coverflowCarouselGlobalBorderRadiusDesktop?.top}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop} ${coverflowCarouselGlobalBorderRadiusDesktop?.right}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop} ${coverflowCarouselGlobalBorderRadiusDesktop?.bottom}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop} ${coverflowCarouselGlobalBorderRadiusDesktop?.left}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${coverflowCarouselGlobalBorderRadiusTablet?.top}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet} ${coverflowCarouselGlobalBorderRadiusTablet?.right}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet} ${coverflowCarouselGlobalBorderRadiusTablet?.bottom}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet} ${coverflowCarouselGlobalBorderRadiusTablet?.left}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${coverflowCarouselGlobalBorderRadiusMobile?.top}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile} ${coverflowCarouselGlobalBorderRadiusMobile?.right}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile} ${coverflowCarouselGlobalBorderRadiusMobile?.bottom}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile} ${coverflowCarouselGlobalBorderRadiusMobile?.left}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile}`;

    const coverflowCarouselBlockStyle = `
        .fb-coverflowCarousel-main-wrapper.${blockID}{
            ${coverflowCarouselPositionType === 'default' ? `position: relative;` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' ? `width: 100%;` : ''}
            ${coverflowCarouselPositionType !== 'default' ? `position: ${coverflowCarouselPositionType};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'left' && coverflowCarouselHZLeftOffset?.Desktop ? `left: ${coverflowCarouselHZLeftOffset?.Desktop}${coverflowCarouselHZLeftOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'right' && coverflowCarouselHZRightOffset?.Desktop ? `right: ${coverflowCarouselHZRightOffset?.Desktop}${coverflowCarouselHZRightOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'top' && coverflowCarouselVRTopOffset?.Desktop ? `top: ${coverflowCarouselVRTopOffset?.Desktop}${coverflowCarouselVRTopOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'bottom' && coverflowCarouselVRBottomOffset?.Desktop ? `bottom: ${coverflowCarouselVRBottomOffset?.Desktop}${coverflowCarouselVRBottomOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselGlobalZIndex?.Desktop ? `z-index: ${coverflowCarouselGlobalZIndex?.Desktop};` : ''}
            ${coverflowCarouselOverflow !== 'default' ? `overflow: ${coverflowCarouselOverflow};` : ''}
        }
        .fb-coverflowCarousel-wrapper.${blockID}{
            ${coverflowCarouselGlobalBgColor ? `background: ${coverflowCarouselGlobalBgColor};` : ''}
            ${globalDesktopPadding && coverflowCarouselGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ""}
            ${globalDesktopMargin && coverflowCarouselGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ""}
            ${coverflowCarouselGlobalBorder ? `border-style: ${coverflowCarouselGlobalBorder};` : ""}
            ${coverflowCarouselGlobalBorderColor ? `border-color: ${coverflowCarouselGlobalBorderColor};` : ""} 
            ${globalDesktopBorderWidth && coverflowCarouselGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
            ${globalDesktopBorderRadiusWidth && coverflowCarouselGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
            ${coverflowCarouselGlobalBoxShadowCssValue ? `box-shadow: ${coverflowCarouselGlobalBoxShadowCssValue};` : ""}
        }
        .fb-coverflowCarousel-wrapper.${blockID}:hover{
            ${coverflowCarouselGlobalBgHoverColor ? `background: ${coverflowCarouselGlobalBgHoverColor};` : ''}
            ${coverflowCarouselGlobalBorderHoverColor ? `border-color: ${coverflowCarouselGlobalBorderHoverColor};` : ""}
        }
       
        @media only screen and (max-width: 1024px) {
            .fb-coverflowCarousel-main-wrapper.${blockID}{
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'left' && coverflowCarouselHZLeftOffset?.Tablet ? `left: ${coverflowCarouselHZLeftOffset?.Tablet}${coverflowCarouselHZLeftOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'right' && coverflowCarouselHZRightOffset?.Tablet ? `right: ${coverflowCarouselHZRightOffset?.Tablet}${coverflowCarouselHZRightOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'top' && coverflowCarouselVRTopOffset?.Tablet ? `top: ${coverflowCarouselVRTopOffset?.Tablet}${coverflowCarouselVRTopOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'bottom' && coverflowCarouselVRBottomOffset?.Tablet ? `bottom: ${coverflowCarouselVRBottomOffset?.Tablet}${coverflowCarouselVRBottomOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselGlobalZIndex?.Tablet ? `z-index: ${coverflowCarouselGlobalZIndex?.Tablet};` : ''}        
            }
            .fb-coverflowCarousel-wrapper.${blockID}{
                ${globalTabletPadding && coverflowCarouselGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ""}
                ${globalTabletMargin && coverflowCarouselGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ""}
                ${globalTabletBorderWidth && coverflowCarouselGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ""}
                ${globalTabletBorderRadiusWidth && coverflowCarouselGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
            }
        }
        @media only screen and (max-width: 767px) {
            .fb-coverflowCarousel-main-wrapper.${blockID}{
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'left' && coverflowCarouselHZLeftOffset?.Mobile ? `left: ${coverflowCarouselHZLeftOffset?.Mobile}${coverflowCarouselHZLeftOffsetUnits?.Mobile};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'right' && coverflowCarouselHZRightOffset?.Mobile ? `right: ${coverflowCarouselHZRightOffset?.Mobile}${coverflowCarouselHZRightOffsetUnits?.Mobile};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'top' && coverflowCarouselVRTopOffset?.Mobile ? `top: ${coverflowCarouselVRTopOffset?.Mobile}${coverflowCarouselVRTopOffsetUnits?.Mobile};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'bottom' && coverflowCarouselVRBottomOffset?.Mobile ? `bottom: ${coverflowCarouselVRBottomOffset?.Mobile}${coverflowCarouselVRBottomOffsetUnits?.Mobile};` : ''} 
                ${coverflowCarouselGlobalZIndex?.Mobile ? `z-index: ${coverflowCarouselGlobalZIndex?.Mobile};` : ''}
            }
            .fb-coverflowCarousel-wrapper.${blockID}{
                ${globalMobilePadding && coverflowCarouselGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ""}
                ${globalMobileMargin && coverflowCarouselGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ""}
                ${globalMobileBorderWidth && coverflowCarouselGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ""}
                ${globalMobileBorderRadiusWidth && coverflowCarouselGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
            }
        }`;

        const customCss = getCustomCss(coverflowCarouselGlobalWraperCustomCSS, `.${blockID}`);
        return `${coverflowCarouselBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
    
}
export default generatecoverflowCarouselNumberStyle;