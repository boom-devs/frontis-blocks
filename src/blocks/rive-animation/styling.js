/**
 * Rive Animation Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generateRiveAnimationStyle = (attributes) => {
    const {
		blockID,
		riveAnimationJsonTypeSwitcher,
		riveAnimationImageUrl,
		riveAnimationImageAlt,
		riveAnimationImageID,
		riveAnimationJsonUrl,
		riveAnimationJsonTargetUrl,
		riveAnimationGlobalWraperCustomCSS,
		riveRenderer,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveEffectsOnHover,
		riveAnimationReverse,
		riveAnimationGlobalWraperClass,
		riveAnimationGlobalWraperID,
		riveAnimationMobileSwitcher,
		riveAnimationTabletSwitcher,
		riveAnimationDesktopSwitcher,
		riveAnimationGlobalZIndex,
		riveAnimationOverflow,
		riveAnimationContainerHeight,
		riveAnimationContainerHeightUnits,
		riveAnimationContainerWidth,
		riveAnimationContainerWidthUnits,
		riveAnimationNormalOpacity,
		riveAnimationHoverOpacity,
		riveOpacitySwitcher,
		// Padding
		riveAnimationGlobalPaddingUnits,
		riveAnimationGlobalPaddingDesktop,
		riveAnimationGlobalPaddingTablet,
		riveAnimationGlobalPaddingMobile,
		riveAnimationGlobalPaddingLink,

		// Margin
		riveAnimationGlobalMarginUnits,
		riveAnimationGlobalMarginDesktop,
		riveAnimationGlobalMarginTablet,
		riveAnimationGlobalMarginMobile,
		riveAnimationGlobalMarginLink,

		// Background
		riveAnimationGlobalBgColorSwitcher,
		riveAnimationGlobalNormalBackgroundType,
		riveAnimationGlobalNormalClassicColor,
		riveAnimationGlobalNormalGradientColor,
		riveAnimationGlobalNormalCustomGradientSwitcher,
		riveAnimationGlobalNormalCustomGradientInputValue,

		riveAnimationGlobalHoverBackgroundType,
		riveAnimationGlobalHoverClassicColor,
		riveAnimationGlobalHoverGradientColor,
		riveAnimationGlobalHoverCustomGradientSwitcher,
		riveAnimationGlobalHoverCustomGradientInputValue,

		// Border
		riveAnimationGlobalBorder,
		riveAnimationGlobalBorderColorSwitcher,
		riveAnimationGlobalBorderColor,
		riveAnimationGlobalBorderHoverColor,
		riveAnimationGlobalBorderUnits,
		riveAnimationGlobalBorderDesktop,
		riveAnimationGlobalBorderTablet,
		riveAnimationGlobalBorderMobile,
		riveAnimationGlobalBorderLink,

		// Border Radius
		riveAnimationGlobalBorderRadiusUnits,
		riveAnimationGlobalBorderRadiusDesktop,
		riveAnimationGlobalBorderRadiusTablet,
		riveAnimationGlobalBorderRadiusMobile,
		riveAnimationGlobalBorderRadiusLink,

		// Box Shadow
		riveAnimationGlobalBoxShadowSwitcher,
		riveAnimationGlobalBoxShadowValues,
		riveAnimationGlobalBoxShadowCssValue,
		riveAnimationGlobalBoxShadowHoverValues,
		riveAnimationGlobalBoxShadowHoverCssValue,
		riveAnimationPositionType,
		riveAnimationHZOrientationType,
		riveAnimationVROrientationType,

		riveAnimationHZLeftOffset,
		riveAnimationHZLeftOffsetUnits,

		riveAnimationHZRightOffset,
		riveAnimationHZRightOffsetUnits,

		riveAnimationVRTopOffset,
		riveAnimationVRTopOffsetUnits,

		riveAnimationVRBottomOffset,
		riveAnimationVRBottomOffsetUnits,

		//canvas width and height
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight,
		riveAnimationCanvasHeightUnits,
		riveAnimationCanvasWidthUnits,
	} = attributes;

    const globalDesktopPadding = `${riveAnimationGlobalPaddingDesktop?.top}${riveAnimationGlobalPaddingUnits?.Desktop} ${riveAnimationGlobalPaddingDesktop?.right}${riveAnimationGlobalPaddingUnits?.Desktop} ${riveAnimationGlobalPaddingDesktop?.bottom}${riveAnimationGlobalPaddingUnits?.Desktop} ${riveAnimationGlobalPaddingDesktop?.left}${riveAnimationGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${riveAnimationGlobalPaddingTablet?.top}${riveAnimationGlobalPaddingUnits?.Tablet} ${riveAnimationGlobalPaddingTablet?.right}${riveAnimationGlobalPaddingUnits?.Tablet} ${riveAnimationGlobalPaddingTablet?.bottom}${riveAnimationGlobalPaddingUnits?.Tablet} ${riveAnimationGlobalPaddingTablet?.left}${riveAnimationGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${riveAnimationGlobalPaddingMobile?.top}${riveAnimationGlobalPaddingUnits?.Mobile} ${riveAnimationGlobalPaddingMobile?.right}${riveAnimationGlobalPaddingUnits?.Mobile} ${riveAnimationGlobalPaddingMobile?.bottom}${riveAnimationGlobalPaddingUnits?.Mobile} ${riveAnimationGlobalPaddingMobile?.left}${riveAnimationGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${riveAnimationGlobalMarginDesktop?.top}${riveAnimationGlobalMarginUnits?.Desktop} ${riveAnimationGlobalMarginDesktop?.right}${riveAnimationGlobalMarginUnits?.Desktop} ${riveAnimationGlobalMarginDesktop?.bottom}${riveAnimationGlobalMarginUnits?.Desktop} ${riveAnimationGlobalMarginDesktop?.left}${riveAnimationGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${riveAnimationGlobalMarginTablet?.top}${riveAnimationGlobalMarginUnits?.Tablet} ${riveAnimationGlobalMarginTablet?.right}${riveAnimationGlobalMarginUnits?.Tablet} ${riveAnimationGlobalMarginTablet?.bottom}${riveAnimationGlobalMarginUnits?.Tablet} ${riveAnimationGlobalMarginTablet?.left}${riveAnimationGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${riveAnimationGlobalMarginMobile?.top}${riveAnimationGlobalMarginUnits?.Mobile} ${riveAnimationGlobalMarginMobile?.right}${riveAnimationGlobalMarginUnits?.Mobile} ${riveAnimationGlobalMarginMobile?.bottom}${riveAnimationGlobalMarginUnits?.Mobile} ${riveAnimationGlobalMarginMobile?.left}${riveAnimationGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${riveAnimationGlobalBorderDesktop?.top}${riveAnimationGlobalBorderUnits?.Desktop} ${riveAnimationGlobalBorderDesktop?.right}${riveAnimationGlobalBorderUnits?.Desktop} ${riveAnimationGlobalBorderDesktop?.bottom}${riveAnimationGlobalBorderUnits?.Desktop} ${riveAnimationGlobalBorderDesktop?.left}${riveAnimationGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${riveAnimationGlobalBorderTablet?.top}${riveAnimationGlobalBorderUnits?.Tablet} ${riveAnimationGlobalBorderTablet?.right}${riveAnimationGlobalBorderUnits?.Tablet} ${riveAnimationGlobalBorderTablet?.bottom}${riveAnimationGlobalBorderUnits?.Tablet} ${riveAnimationGlobalBorderTablet?.left}${riveAnimationGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${riveAnimationGlobalBorderMobile?.top}${riveAnimationGlobalBorderUnits?.Mobile} ${riveAnimationGlobalBorderMobile?.right}${riveAnimationGlobalBorderUnits?.Mobile} ${riveAnimationGlobalBorderMobile?.bottom}${riveAnimationGlobalBorderUnits?.Mobile} ${riveAnimationGlobalBorderMobile?.left}${riveAnimationGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${riveAnimationGlobalBorderRadiusDesktop?.top}${riveAnimationGlobalBorderRadiusUnits?.Desktop} ${riveAnimationGlobalBorderRadiusDesktop?.right}${riveAnimationGlobalBorderRadiusUnits?.Desktop} ${riveAnimationGlobalBorderRadiusDesktop?.bottom}${riveAnimationGlobalBorderRadiusUnits?.Desktop} ${riveAnimationGlobalBorderRadiusDesktop?.left}${riveAnimationGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${riveAnimationGlobalBorderRadiusTablet?.top}${riveAnimationGlobalBorderRadiusUnits?.Tablet} ${riveAnimationGlobalBorderRadiusTablet?.right}${riveAnimationGlobalBorderRadiusUnits?.Tablet} ${riveAnimationGlobalBorderRadiusTablet?.bottom}${riveAnimationGlobalBorderRadiusUnits?.Tablet} ${riveAnimationGlobalBorderRadiusTablet?.left}${riveAnimationGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${riveAnimationGlobalBorderRadiusMobile?.top}${riveAnimationGlobalBorderRadiusUnits?.Mobile} ${riveAnimationGlobalBorderRadiusMobile?.right}${riveAnimationGlobalBorderRadiusUnits?.Mobile} ${riveAnimationGlobalBorderRadiusMobile?.bottom}${riveAnimationGlobalBorderRadiusUnits?.Mobile} ${riveAnimationGlobalBorderRadiusMobile?.left}${riveAnimationGlobalBorderRadiusUnits?.Mobile}`;

    /** Rive Animation Style */
    const riveAnimationStyle = `
        .${blockID}.fb-rive-animation-main-wrapper {
            ${riveAnimationPositionType === 'default' ? `position: relative;` : ''}
            ${riveAnimationPositionType !== 'default' ? `position: ${riveAnimationPositionType} !important;` : ''}
            ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'left' && riveAnimationHZLeftOffset?.Desktop ? `left: ${riveAnimationHZLeftOffset?.Desktop}${riveAnimationHZLeftOffsetUnits?.Desktop};` : ''}
            ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'right' && riveAnimationHZRightOffset?.Desktop ? `right: ${riveAnimationHZRightOffset?.Desktop}${riveAnimationHZRightOffsetUnits?.Desktop};` : ''}
            ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'top' && riveAnimationVRTopOffset?.Desktop ? `top: ${riveAnimationVRTopOffset?.Desktop}${riveAnimationVRTopOffsetUnits?.Desktop};` : ''}
            ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'bottom' && riveAnimationVRBottomOffset?.Desktop ? `bottom: ${riveAnimationVRBottomOffset?.Desktop}${riveAnimationVRBottomOffsetUnits?.Desktop};` : ''}
            ${riveAnimationGlobalZIndex?.Desktop ? `z-index: ${riveAnimationGlobalZIndex?.Desktop};` : ''}
            ${riveAnimationOverflow !== 'default' ? `overflow: ${riveAnimationOverflow};` : ''}
        }
		.${blockID}.fb-rive-animation-main-wrapper .fb-rive-animation-container{
		 	${riveAnimationGlobalNormalBackgroundType === 'gradient' ? `  
                ${riveAnimationGlobalNormalCustomGradientSwitcher && riveAnimationGlobalNormalCustomGradientInputValue ? `background: ${riveAnimationGlobalNormalCustomGradientInputValue};` : `background: ${riveAnimationGlobalNormalGradientColor};`}
            `: `
                ${riveAnimationGlobalNormalClassicColor ? `background: ${riveAnimationGlobalNormalClassicColor};` : ''}
            `}
			${globalDesktopPadding && riveAnimationGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && riveAnimationGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
            ${riveAnimationGlobalBorder ? `border: ${riveAnimationGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && riveAnimationGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && riveAnimationGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${riveAnimationGlobalBorderColor ? `border-color: ${riveAnimationGlobalBorderColor};` : ''}
            ${riveAnimationGlobalBoxShadowCssValue ? `box-shadow: ${riveAnimationGlobalBoxShadowCssValue};` : ''}
            ${riveAnimationNormalOpacity ? `opacity: ${riveAnimationNormalOpacity};` : ''}
			transition: all .3s ease-in-out;
		}
        .${blockID}.fb-rive-animation-main-wrapper .fb-rive-canvas-wrapper {
            ${riveAnimationCanvasWidth?.Desktop ? `width: ${riveAnimationCanvasWidth?.Desktop}${riveAnimationCanvasWidthUnits?.Desktop};` : ''}
            ${riveAnimationCanvasHeight?.Desktop ? `height: ${riveAnimationCanvasHeight?.Desktop}${riveAnimationCanvasHeightUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID} .fb-rive-animation-container:hover .fb-rive-canvas-wrapper{
            ${riveAnimationGlobalHoverBackgroundType === 'gradient' ? `   	
                ${riveAnimationGlobalHoverCustomGradientSwitcher && riveAnimationGlobalHoverCustomGradientInputValue ? `background: ${riveAnimationGlobalHoverCustomGradientInputValue};` : `background: ${riveAnimationGlobalHoverGradientColor};`}
            `: `
                ${riveAnimationGlobalHoverClassicColor ? `background: ${riveAnimationGlobalHoverClassicColor};` : ''}
            `}
            ${riveAnimationGlobalBorderHoverColor ? `border-color: ${riveAnimationGlobalBorderHoverColor};` : ''}
            ${riveAnimationGlobalBoxShadowHoverCssValue ? `box-shadow: ${riveAnimationGlobalBoxShadowHoverCssValue};` : ''}
            ${riveAnimationHoverOpacity ? `opacity: ${riveAnimationHoverOpacity};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-rive-animation-main-wrapper {
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'left' && riveAnimationHZLeftOffset?.Tablet ? `left: ${riveAnimationHZLeftOffset?.Tablet}${riveAnimationHZLeftOffsetUnits?.Tablet};` : ''}
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'right' && riveAnimationHZRightOffset?.Tablet ? `right: ${riveAnimationHZRightOffset?.Tablet}${riveAnimationHZRightOffsetUnits?.Tablet};` : ''}
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'top' && riveAnimationVRTopOffset?.Tablet ? `top: ${riveAnimationVRTopOffset?.Tablet}${riveAnimationVRTopOffsetUnits?.Tablet};` : ''}
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'bottom' && riveAnimationVRBottomOffset?.Tablet ? `bottom: ${riveAnimationVRBottomOffset?.Tablet}${riveAnimationVRBottomOffsetUnits?.Tablet};` : ''}
                ${riveAnimationGlobalZIndex?.Tablet ? `z-index: ${riveAnimationGlobalZIndex?.Tablet};` : ''}
            }
			.${blockID}.fb-rive-animation-main-wrapper .fb-rive-animation-container{
				${globalTabletPadding && riveAnimationGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && riveAnimationGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && riveAnimationGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && riveAnimationGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
			}
            .${blockID}.fb-rive-animation-main-wrapper .fb-rive-canvas-wrapper {
                ${riveAnimationCanvasWidth?.Tablet ? `width: ${riveAnimationCanvasWidth?.Tablet}${riveAnimationCanvasWidthUnits?.Tablet};` : ''}
                ${riveAnimationCanvasHeight?.Tablet ? `height: ${riveAnimationCanvasHeight?.Tablet}${riveAnimationCanvasHeightUnits?.Tablet};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .${blockID}.fb-rive-animation-main-wrapper {
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'left' && riveAnimationHZLeftOffset?.Mobile ? `left: ${riveAnimationHZLeftOffset?.Mobile}${riveAnimationHZLeftOffsetUnits?.Mobile};` : ''}
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'right' && riveAnimationHZRightOffset?.Mobile ? `right: ${riveAnimationHZRightOffset?.Mobile}${riveAnimationHZRightOffsetUnits?.Mobile};` : ''}
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'top' && riveAnimationVRTopOffset?.Mobile ? `top: ${riveAnimationVRTopOffset?.Mobile}${riveAnimationVRTopOffsetUnits?.Mobile};` : ''}
                ${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'bottom' && riveAnimationVRBottomOffset?.Mobile ? `bottom: ${riveAnimationVRBottomOffset?.Mobile}${riveAnimationVRBottomOffsetUnits?.Mobile};` : ''}
                ${riveAnimationGlobalZIndex?.Mobile ? `z-index: ${riveAnimationGlobalZIndex?.Mobile};` : ''}
            }
			.${blockID}.fb-rive-animation-main-wrapper .fb-rive-animation-container{
				${globalMobilePadding && riveAnimationGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && riveAnimationGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && riveAnimationGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && riveAnimationGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
			}
            .${blockID}.fb-rive-animation-main-wrapper .fb-rive-canvas-wrapper {
                ${riveAnimationCanvasWidth?.Mobile ? `width: ${riveAnimationCanvasWidth?.Mobile}${riveAnimationCanvasWidthUnits?.Mobile};` : ''}
                ${riveAnimationCanvasHeight?.Mobile ? `height: ${riveAnimationCanvasHeight?.Mobile}${riveAnimationCanvasHeightUnits?.Mobile};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(riveAnimationGlobalWraperCustomCSS, `.${blockID} `);
    return `${riveAnimationStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateRiveAnimationStyle;