/**
 * Stack Card Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

const generateStackCardsStyle = (attributes) => {
    const {
        blockID,
		blockStyle,

		stackCardsDesktopSwitcher,
		stackCardsTabletSwitcher,
		stackCardsMobileSwitcher,

		stackCardsCustomCSS,
		stackCardsGlobalWraperID,
		stackCardsGlobalWraperClass,

		stackCardsGlobalZIndex,
        stackCardsOverflow,
        stackCardsGlobalPaddingUnits,
        stackCardsGlobalPaddingDesktop,
        stackCardsGlobalPaddingTablet,
        stackCardsGlobalPaddingMobile,
        stackCardsGlobalPaddingLink,
        stackCardsGlobalMarginUnits,
        stackCardsGlobalMarginDesktop,
        stackCardsGlobalMarginTablet,
        stackCardsGlobalMarginMobile,
        stackCardsGlobalMarginLink,

        stackCardsGlobalBgColorSwitcher,
        stackCardsGlobalBgNormalBackgroundType,
        stackCardsGlobalBgNormalClassicColor,
        stackCardsGlobalBgNormalGradientColor,
        stackCardsGlobalBgNormalCustomGradientSwitcher,
        stackCardsGlobalBgNormalCustomGradientInputValue,
        stackCardsGlobalBgHoverBackgroundType,
        stackCardsGlobalBgHoverClassicColor,
        stackCardsGlobalBgHoverGradientColor,
        stackCardsGlobalBgHoverCustomGradientSwitcher,
        stackCardsGlobalBgHoverCustomGradientInputValue,

        stackCardsGlobalBorder,
        stackCardsGlobalBorderColor,
        stackCardsGlobalBorderHoverColor,
        stackCardsGlobalBorderColorSwitcher,

        stackCardsGlobalBorderUnits,
        stackCardsGlobalBorderDesktop,
        stackCardsGlobalBorderTablet,
        stackCardsGlobalBorderMobile,
        stackCardsGlobalBorderLink,

        stackCardsGlobalBorderRadiusUnits,
        stackCardsGlobalBorderRadiusDesktop,
        stackCardsGlobalBorderRadiusTablet,
        stackCardsGlobalBorderRadiusMobile,
        stackCardsGlobalBorderRadiusLink,

        stackCardsGlobalBoxShadowSwitcher,
        stackCardsGlobalBoxShadowValues,
        stackCardsGlobalBoxShadowCssValue,
        stackCardsGlobalBoxShadowHoverValues,
        stackCardsGlobalBoxShadowHoverCssValue,

        // Position
        stackCardsPositionType,
        stackCardsHZOrientationType,
        stackCardsVROrientationType,
        stackCardsHZLeftOffset,
        stackCardsHZLeftOffsetUnits,
        stackCardsHZRightOffset,
        stackCardsHZRightOffsetUnits,
        stackCardsVRTopOffset,
        stackCardsVRTopOffsetUnits,
        stackCardsVRBottomOffset,
        stackCardsVRBottomOffsetUnits,
    } = attributes;

    /** Start Global Padding */
    const globalDesktopPadding = `${stackCardsGlobalPaddingDesktop?.top}${stackCardsGlobalPaddingUnits?.Desktop} ${stackCardsGlobalPaddingDesktop?.right}${stackCardsGlobalPaddingUnits?.Desktop} ${stackCardsGlobalPaddingDesktop?.bottom}${stackCardsGlobalPaddingUnits?.Desktop} ${stackCardsGlobalPaddingDesktop?.left}${stackCardsGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${stackCardsGlobalPaddingTablet?.top}${stackCardsGlobalPaddingUnits?.Tablet} ${stackCardsGlobalPaddingTablet?.right}${stackCardsGlobalPaddingUnits?.Tablet} ${stackCardsGlobalPaddingTablet?.bottom}${stackCardsGlobalPaddingUnits?.Tablet} ${stackCardsGlobalPaddingTablet?.left}${stackCardsGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${stackCardsGlobalPaddingMobile?.top}${stackCardsGlobalPaddingUnits?.Mobile} ${stackCardsGlobalPaddingMobile?.right}${stackCardsGlobalPaddingUnits?.Mobile} ${stackCardsGlobalPaddingMobile?.bottom}${stackCardsGlobalPaddingUnits?.Mobile} ${stackCardsGlobalPaddingMobile?.left}${stackCardsGlobalPaddingUnits?.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const globalDesktopMargin = `${stackCardsGlobalMarginDesktop?.top}${stackCardsGlobalMarginUnits?.Desktop} ${stackCardsGlobalMarginDesktop?.right}${stackCardsGlobalMarginUnits?.Desktop} ${stackCardsGlobalMarginDesktop?.bottom}${stackCardsGlobalMarginUnits?.Desktop} ${stackCardsGlobalMarginDesktop?.left}${stackCardsGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${stackCardsGlobalMarginTablet?.top}${stackCardsGlobalMarginUnits?.Tablet} ${stackCardsGlobalMarginTablet?.right}${stackCardsGlobalMarginUnits?.Tablet} ${stackCardsGlobalMarginTablet?.bottom}${stackCardsGlobalMarginUnits?.Tablet} ${stackCardsGlobalMarginTablet?.left}${stackCardsGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${stackCardsGlobalMarginMobile?.top}${stackCardsGlobalMarginUnits?.Mobile} ${stackCardsGlobalMarginMobile?.right}${stackCardsGlobalMarginUnits?.Mobile} ${stackCardsGlobalMarginMobile?.bottom}${stackCardsGlobalMarginUnits?.Mobile} ${stackCardsGlobalMarginMobile?.left}${stackCardsGlobalMarginUnits?.Mobile}`;
    /** End Global Margin */

    /** Start Global Border */
    const globalDesktopBorderWidth = `${stackCardsGlobalBorderDesktop?.top}${stackCardsGlobalBorderUnits?.Desktop} ${stackCardsGlobalBorderDesktop?.right}${stackCardsGlobalBorderUnits?.Desktop} ${stackCardsGlobalBorderDesktop?.bottom}${stackCardsGlobalBorderUnits?.Desktop} ${stackCardsGlobalBorderDesktop?.left}${stackCardsGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${stackCardsGlobalBorderTablet?.top}${stackCardsGlobalBorderUnits?.Tablet} ${stackCardsGlobalBorderTablet?.right}${stackCardsGlobalBorderUnits?.Tablet} ${stackCardsGlobalBorderTablet?.bottom}${stackCardsGlobalBorderUnits?.Tablet} ${stackCardsGlobalBorderTablet?.left}${stackCardsGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${stackCardsGlobalBorderMobile?.top}${stackCardsGlobalBorderUnits?.Mobile} ${stackCardsGlobalBorderMobile?.right}${stackCardsGlobalBorderUnits?.Mobile} ${stackCardsGlobalBorderMobile?.bottom}${stackCardsGlobalBorderUnits?.Mobile} ${stackCardsGlobalBorderMobile?.left}${stackCardsGlobalBorderUnits?.Mobile}`;
    /** End Global Border */

    /** Start Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${stackCardsGlobalBorderRadiusDesktop?.top}${stackCardsGlobalBorderRadiusUnits?.Desktop} ${stackCardsGlobalBorderRadiusDesktop?.right}${stackCardsGlobalBorderRadiusUnits?.Desktop} ${stackCardsGlobalBorderRadiusDesktop?.bottom}${stackCardsGlobalBorderRadiusUnits?.Desktop} ${stackCardsGlobalBorderRadiusDesktop?.left}${stackCardsGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${stackCardsGlobalBorderRadiusTablet?.top}${stackCardsGlobalBorderRadiusUnits?.Tablet} ${stackCardsGlobalBorderRadiusTablet?.right}${stackCardsGlobalBorderRadiusUnits?.Tablet} ${stackCardsGlobalBorderRadiusTablet?.bottom}${stackCardsGlobalBorderRadiusUnits?.Tablet} ${stackCardsGlobalBorderRadiusTablet?.left}${stackCardsGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${stackCardsGlobalBorderRadiusMobile?.top}${stackCardsGlobalBorderRadiusUnits?.Mobile} ${stackCardsGlobalBorderRadiusMobile?.right}${stackCardsGlobalBorderRadiusUnits?.Mobile} ${stackCardsGlobalBorderRadiusMobile?.bottom}${stackCardsGlobalBorderRadiusUnits?.Mobile} ${stackCardsGlobalBorderRadiusMobile?.left}${stackCardsGlobalBorderRadiusUnits?.Mobile}`;
    /** End Global Border Radius */

    /** Start All Block Style */
    const stackCardsCSS = `
        .${blockID}.fb-stack-cards-main-wrapper {
            ${stackCardsPositionType === 'default' ? `position: relative;` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' ? `width: 100%;` : ''}
            ${stackCardsPositionType !== 'default' ? `position: ${stackCardsPositionType};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'left' && stackCardsHZLeftOffset?.Desktop !== undefined ? `left: ${stackCardsHZLeftOffset?.Desktop}${stackCardsHZLeftOffsetUnits?.Desktop};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'right' && stackCardsHZRightOffset?.Desktop !== undefined ? `right: ${stackCardsHZRightOffset?.Desktop}${stackCardsHZRightOffsetUnits?.Desktop};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'top' && stackCardsVRTopOffset?.Desktop !== undefined ? `top: ${stackCardsVRTopOffset?.Desktop}${stackCardsVRTopOffsetUnits?.Desktop};` : ''}
            ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'bottom' && stackCardsVRBottomOffset?.Desktop !== undefined ? `bottom: ${stackCardsVRBottomOffset?.Desktop}${stackCardsVRBottomOffsetUnits?.Desktop};` : ''}
            ${stackCardsGlobalZIndex?.Desktop ? `z-index: ${stackCardsGlobalZIndex?.Desktop};` : ''}
            ${stackCardsOverflow !== 'default' ? `overflow: ${stackCardsOverflow};` : ''}
        }
        
        .${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame {
            ${globalDesktopPadding && stackCardsGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && stackCardsGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
            ${stackCardsGlobalBorder ? `border: ${stackCardsGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && stackCardsGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && stackCardsGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${stackCardsGlobalBorderColor ? `border-color: ${stackCardsGlobalBorderColor};` : ''}
            ${stackCardsGlobalBoxShadowCssValue ? `box-shadow: ${stackCardsGlobalBoxShadowCssValue};` : ''}
            ${stackCardsGlobalBgNormalBackgroundType === 'gradient' ? `  
                background: ${stackCardsGlobalBgNormalCustomGradientSwitcher && stackCardsGlobalBgNormalCustomGradientInputValue
                ? stackCardsGlobalBgNormalCustomGradientInputValue
                : stackCardsGlobalBgNormalGradientColor || stackCardsGlobalBgNormalClassicColor
            };
            ` : `
                background: ${stackCardsGlobalBgNormalClassicColor};
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame:hover {
            ${stackCardsGlobalBgHoverBackgroundType === 'gradient' ? `  
                background: ${stackCardsGlobalBgHoverCustomGradientSwitcher && stackCardsGlobalBgHoverCustomGradientInputValue
                ? stackCardsGlobalBgHoverCustomGradientInputValue
                : stackCardsGlobalBgHoverGradientColor || stackCardsGlobalBgHoverClassicColor
            };
            ` : `
                ${stackCardsGlobalBgHoverClassicColor ? `background: ${stackCardsGlobalBgHoverClassicColor};` : ''}
            `} 
            ${stackCardsGlobalBorderHoverColor ? `border-color: ${stackCardsGlobalBorderHoverColor};` : ''}
            ${stackCardsGlobalBoxShadowHoverCssValue ? `box-shadow: ${stackCardsGlobalBoxShadowHoverCssValue};` : ''}
        }
    
    `;
    /** End All Block Style */

    // Custom CSS
    const customCss = getCustomCss(stackCardsCustomCSS, `.${blockID}`);

    return `${stackCardsCSS} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateStackCardsStyle;