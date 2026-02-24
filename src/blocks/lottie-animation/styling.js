/**
 * Lottie Animation Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateLottieAnimationStyle = (attributes) => {
    const {
		blockID,
		blockStyle,
		lottieAnimationJsonTypeSwitcher,
		lottieAnimationImageUrl,
		lottieAnimationImageAlt,
		lottieAnimationImageID,
		lottieAnimationJsonUrl,
		lottieAnimationJsonTargetUrl,
		lottieAnimationGlobalWraperCustomCSS,
		lottieRenderer,
		lottieLoop,
		lottieAutoplay,
		lottieAnimationSpeed,
		lottieEffectsOnHover,
		lottieAnimationReverse,
		lottieAnimationGlobalWraperClass,
		lottieAnimationGlobalWraperID,
		lottieAnimationMobileSwitcher,
		lottieAnimationTabletSwitcher,
		lottieAnimationDesktopSwitcher,
		lottieAnimationGlobalZIndex,
		lottieAnimationOverflow,
		lottieAnimationContainerHeight,
		lottieAnimationContainerHeightUnits,
		lottieAnimationContainerWidth,
		lottieAnimationContainerWidthUnits,
		lottieAnimationNormalOpacity,
		lottieAnimationHoverOpacity,
		lottieOpacitySwitcher,
		// Padding
		lottieAnimationGlobalPaddingUnits,
		lottieAnimationGlobalPaddingDesktop,
		lottieAnimationGlobalPaddingTablet,
		lottieAnimationGlobalPaddingMobile,
		lottieAnimationGlobalPaddingLink,

		// Margin
		lottieAnimationGlobalMarginUnits,
		lottieAnimationGlobalMarginDesktop,
		lottieAnimationGlobalMarginTablet,
		lottieAnimationGlobalMarginMobile,
		lottieAnimationGlobalMarginLink,

		// Background
		lottieAnimationGlobalBgColorSwitcher,
		lottieAnimationGlobalNormalBackgroundType,
		lottieAnimationGlobalNormalClassicColor,
		lottieAnimationGlobalNormalGradientColor,
		lottieAnimationGlobalNormalCustomGradientSwitcher,
		lottieAnimationGlobalNormalCustomGradientInputValue,

		lottieAnimationGlobalHoverBackgroundType,
		lottieAnimationGlobalHoverClassicColor,
		lottieAnimationGlobalHoverGradientColor,
		lottieAnimationGlobalHoverCustomGradientSwitcher,
		lottieAnimationGlobalHoverCustomGradientInputValue,

		// Border
		lottieAnimationGlobalBorder,
		lottieAnimationGlobalBorderColorSwitcher,
		lottieAnimationGlobalBorderColor,
		lottieAnimationGlobalBorderHoverColor,
		lottieAnimationGlobalBorderUnits,
		lottieAnimationGlobalBorderDesktop,
		lottieAnimationGlobalBorderTablet,
		lottieAnimationGlobalBorderMobile,
		lottieAnimationGlobalBorderLink,

		// Border Radius
		lottieAnimationGlobalBorderRadiusUnits,
		lottieAnimationGlobalBorderRadiusDesktop,
		lottieAnimationGlobalBorderRadiusTablet,
		lottieAnimationGlobalBorderRadiusMobile,
		lottieAnimationGlobalBorderRadiusLink,

		// Box Shadow
		lottieAnimationGlobalBoxShadowSwitcher,
		lottieAnimationGlobalBoxShadowValues,
		lottieAnimationGlobalBoxShadowCssValue,
		lottieAnimationGlobalBoxShadowHoverValues,
		lottieAnimationGlobalBoxShadowHoverCssValue,
		lottieAnimationPositionType,
		lottieAnimationHZOrientationType,
		lottieAnimationVROrientationType,

		lottieAnimationHZLeftOffset,
		lottieAnimationHZLeftOffsetUnits,

		lottieAnimationHZRightOffset,
		lottieAnimationHZRightOffsetUnits,

		lottieAnimationVRTopOffset,
		lottieAnimationVRTopOffsetUnits,

		lottieAnimationVRBottomOffset,
		lottieAnimationVRBottomOffsetUnits,
	} = attributes;

    const globalDesktopPadding = `${lottieAnimationGlobalPaddingDesktop?.top}${lottieAnimationGlobalPaddingUnits?.Desktop} ${lottieAnimationGlobalPaddingDesktop?.right}${lottieAnimationGlobalPaddingUnits?.Desktop} ${lottieAnimationGlobalPaddingDesktop?.bottom}${lottieAnimationGlobalPaddingUnits?.Desktop} ${lottieAnimationGlobalPaddingDesktop?.left}${lottieAnimationGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${lottieAnimationGlobalPaddingTablet?.top}${lottieAnimationGlobalPaddingUnits?.Tablet} ${lottieAnimationGlobalPaddingTablet?.right}${lottieAnimationGlobalPaddingUnits?.Tablet} ${lottieAnimationGlobalPaddingTablet?.bottom}${lottieAnimationGlobalPaddingUnits?.Tablet} ${lottieAnimationGlobalPaddingTablet?.left}${lottieAnimationGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${lottieAnimationGlobalPaddingMobile?.top}${lottieAnimationGlobalPaddingUnits?.Mobile} ${lottieAnimationGlobalPaddingMobile?.right}${lottieAnimationGlobalPaddingUnits?.Mobile} ${lottieAnimationGlobalPaddingMobile?.bottom}${lottieAnimationGlobalPaddingUnits?.Mobile} ${lottieAnimationGlobalPaddingMobile?.left}${lottieAnimationGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${lottieAnimationGlobalMarginDesktop?.top}${lottieAnimationGlobalMarginUnits?.Desktop} ${lottieAnimationGlobalMarginDesktop?.right}${lottieAnimationGlobalMarginUnits?.Desktop} ${lottieAnimationGlobalMarginDesktop?.bottom}${lottieAnimationGlobalMarginUnits?.Desktop} ${lottieAnimationGlobalMarginDesktop?.left}${lottieAnimationGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${lottieAnimationGlobalMarginTablet?.top}${lottieAnimationGlobalMarginUnits?.Tablet} ${lottieAnimationGlobalMarginTablet?.right}${lottieAnimationGlobalMarginUnits?.Tablet} ${lottieAnimationGlobalMarginTablet?.bottom}${lottieAnimationGlobalMarginUnits?.Tablet} ${lottieAnimationGlobalMarginTablet?.left}${lottieAnimationGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${lottieAnimationGlobalMarginMobile?.top}${lottieAnimationGlobalMarginUnits?.Mobile} ${lottieAnimationGlobalMarginMobile?.right}${lottieAnimationGlobalMarginUnits?.Mobile} ${lottieAnimationGlobalMarginMobile?.bottom}${lottieAnimationGlobalMarginUnits?.Mobile} ${lottieAnimationGlobalMarginMobile?.left}${lottieAnimationGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${lottieAnimationGlobalBorderDesktop?.top}${lottieAnimationGlobalBorderUnits?.Desktop} ${lottieAnimationGlobalBorderDesktop?.right}${lottieAnimationGlobalBorderUnits?.Desktop} ${lottieAnimationGlobalBorderDesktop?.bottom}${lottieAnimationGlobalBorderUnits?.Desktop} ${lottieAnimationGlobalBorderDesktop?.left}${lottieAnimationGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${lottieAnimationGlobalBorderTablet?.top}${lottieAnimationGlobalBorderUnits?.Tablet} ${lottieAnimationGlobalBorderTablet?.right}${lottieAnimationGlobalBorderUnits?.Tablet} ${lottieAnimationGlobalBorderTablet?.bottom}${lottieAnimationGlobalBorderUnits?.Tablet} ${lottieAnimationGlobalBorderTablet?.left}${lottieAnimationGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${lottieAnimationGlobalBorderMobile?.top}${lottieAnimationGlobalBorderUnits?.Mobile} ${lottieAnimationGlobalBorderMobile?.right}${lottieAnimationGlobalBorderUnits?.Mobile} ${lottieAnimationGlobalBorderMobile?.bottom}${lottieAnimationGlobalBorderUnits?.Mobile} ${lottieAnimationGlobalBorderMobile?.left}${lottieAnimationGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${lottieAnimationGlobalBorderRadiusDesktop?.top}${lottieAnimationGlobalBorderRadiusUnits?.Desktop} ${lottieAnimationGlobalBorderRadiusDesktop?.right}${lottieAnimationGlobalBorderRadiusUnits?.Desktop} ${lottieAnimationGlobalBorderRadiusDesktop?.bottom}${lottieAnimationGlobalBorderRadiusUnits?.Desktop} ${lottieAnimationGlobalBorderRadiusDesktop?.left}${lottieAnimationGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${lottieAnimationGlobalBorderRadiusTablet?.top}${lottieAnimationGlobalBorderRadiusUnits?.Tablet} ${lottieAnimationGlobalBorderRadiusTablet?.right}${lottieAnimationGlobalBorderRadiusUnits?.Tablet} ${lottieAnimationGlobalBorderRadiusTablet?.bottom}${lottieAnimationGlobalBorderRadiusUnits?.Tablet} ${lottieAnimationGlobalBorderRadiusTablet?.left}${lottieAnimationGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${lottieAnimationGlobalBorderRadiusMobile?.top}${lottieAnimationGlobalBorderRadiusUnits?.Mobile} ${lottieAnimationGlobalBorderRadiusMobile?.right}${lottieAnimationGlobalBorderRadiusUnits?.Mobile} ${lottieAnimationGlobalBorderRadiusMobile?.bottom}${lottieAnimationGlobalBorderRadiusUnits?.Mobile} ${lottieAnimationGlobalBorderRadiusMobile?.left}${lottieAnimationGlobalBorderRadiusUnits?.Mobile}`;

    const lottieAnimationStyle = `
        .${blockID}.fb-lottie-animation-main-wrapper {
            ${lottieAnimationPositionType === 'default' ? `position: relative;` : ''}
            ${lottieAnimationPositionType !== 'default' ? `position: ${lottieAnimationPositionType} !important;` : ''}
            ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'left' && lottieAnimationHZLeftOffset?.Desktop ? `left: ${lottieAnimationHZLeftOffset?.Desktop}${lottieAnimationHZLeftOffsetUnits?.Desktop};` : ''}
            ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'right' && lottieAnimationHZRightOffset?.Desktop ? `right: ${lottieAnimationHZRightOffset?.Desktop}${lottieAnimationHZRightOffsetUnits?.Desktop};` : ''}
            ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'top' && lottieAnimationVRTopOffset?.Desktop ? `top: ${lottieAnimationVRTopOffset?.Desktop}${lottieAnimationVRTopOffsetUnits?.Desktop};` : ''}
            ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'bottom' && lottieAnimationVRBottomOffset?.Desktop ? `bottom: ${lottieAnimationVRBottomOffset?.Desktop}${lottieAnimationVRBottomOffsetUnits?.Desktop};` : ''}
            ${lottieAnimationGlobalZIndex?.Desktop ? `z-index: ${lottieAnimationGlobalZIndex?.Desktop};` : ''}
            ${lottieAnimationOverflow !== 'default' ? `overflow: ${lottieAnimationOverflow};` : ''}
            ${lottieAnimationContainerWidth?.Desktop ? `width: ${lottieAnimationContainerWidth?.Desktop}${lottieAnimationContainerWidthUnits?.Desktop};` : ''}
            
        }
        .${blockID}.fb-lottie-animation-main-wrapper .fb-lottie-animation-container {
            ${lottieAnimationGlobalNormalBackgroundType === 'gradient' ? `  
                ${lottieAnimationGlobalNormalCustomGradientSwitcher && lottieAnimationGlobalNormalCustomGradientInputValue ? `background: ${lottieAnimationGlobalNormalCustomGradientInputValue};` : `background: ${lottieAnimationGlobalNormalGradientColor};`}
            `: `
                ${lottieAnimationGlobalNormalClassicColor ? `background: ${lottieAnimationGlobalNormalClassicColor};` : ''}
            `}
            ${globalDesktopPadding && lottieAnimationGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && lottieAnimationGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
            ${lottieAnimationGlobalBorder ? `border: ${lottieAnimationGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && lottieAnimationGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && lottieAnimationGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${lottieAnimationGlobalBorderColor ? `border-color: ${lottieAnimationGlobalBorderColor};` : ''}
            ${lottieAnimationGlobalBoxShadowCssValue ? `box-shadow: ${lottieAnimationGlobalBoxShadowCssValue};` : ''}
            ${lottieAnimationNormalOpacity ? `opacity: ${lottieAnimationNormalOpacity};` : ''}
            ${lottieAnimationContainerHeight?.Desktop ? `height: ${lottieAnimationContainerHeight?.Desktop}${lottieAnimationContainerHeightUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID} .fb-lottie-animation-container:hover{
            ${lottieAnimationGlobalHoverBackgroundType === 'gradient' ? `   	
                ${lottieAnimationGlobalHoverCustomGradientSwitcher && lottieAnimationGlobalHoverCustomGradientInputValue ? `background: ${lottieAnimationGlobalHoverCustomGradientInputValue};` : `background: ${lottieAnimationGlobalHoverGradientColor};`}
            `: `
                ${lottieAnimationGlobalHoverClassicColor ? `background: ${lottieAnimationGlobalHoverClassicColor};` : ''}
            `}
            ${lottieAnimationGlobalBorderHoverColor ? `border-color: ${lottieAnimationGlobalBorderHoverColor};` : ''}
            ${lottieAnimationGlobalBoxShadowHoverCssValue ? `box-shadow: ${lottieAnimationGlobalBoxShadowHoverCssValue};` : ''}
            ${lottieAnimationHoverOpacity ? `opacity: ${lottieAnimationHoverOpacity};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-lottie-animation-main-wrapper {
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'left' && lottieAnimationHZLeftOffset?.Tablet ? `left: ${lottieAnimationHZLeftOffset?.Tablet}${lottieAnimationHZLeftOffsetUnits?.Tablet};` : ''}
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'right' && lottieAnimationHZRightOffset?.Tablet ? `right: ${lottieAnimationHZRightOffset?.Tablet}${lottieAnimationHZRightOffsetUnits?.Tablet};` : ''}
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'top' && lottieAnimationVRTopOffset?.Tablet ? `top: ${lottieAnimationVRTopOffset?.Tablet}${lottieAnimationVRTopOffsetUnits?.Tablet};` : ''}
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'bottom' && lottieAnimationVRBottomOffset?.Tablet ? `bottom: ${lottieAnimationVRBottomOffset?.Tablet}${lottieAnimationVRBottomOffsetUnits?.Tablet};` : ''}
                ${lottieAnimationGlobalZIndex?.Tablet ? `z-index: ${lottieAnimationGlobalZIndex?.Tablet};` : ''}
                ${lottieAnimationContainerWidth?.Tablet ? `width: ${lottieAnimationContainerWidth?.Tablet}${lottieAnimationContainerWidthUnits?.Tablet};` : ''}
                
            }
                
            .${blockID}.fb-lottie-animation-main-wrapper .fb-lottie-animation-container {
                ${globalTabletPadding && lottieAnimationGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && lottieAnimationGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && lottieAnimationGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && lottieAnimationGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                ${lottieAnimationContainerHeight?.Tablet ? `height: ${lottieAnimationContainerHeight?.Tablet}${lottieAnimationContainerHeightUnits?.Tablet};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .${blockID}.fb-lottie-animation-main-wrapper {
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'left' && lottieAnimationHZLeftOffset?.Mobile ? `left: ${lottieAnimationHZLeftOffset?.Mobile}${lottieAnimationHZLeftOffsetUnits?.Mobile};` : ''}
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'right' && lottieAnimationHZRightOffset?.Mobile ? `right: ${lottieAnimationHZRightOffset?.Mobile}${lottieAnimationHZRightOffsetUnits?.Mobile};` : ''}
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'top' && lottieAnimationVRTopOffset?.Mobile ? `top: ${lottieAnimationVRTopOffset?.Mobile}${lottieAnimationVRTopOffsetUnits?.Mobile};` : ''}
                ${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'bottom' && lottieAnimationVRBottomOffset?.Mobile ? `bottom: ${lottieAnimationVRBottomOffset?.Mobile}${lottieAnimationVRBottomOffsetUnits?.Mobile};` : ''}
                ${lottieAnimationGlobalZIndex?.Mobile ? `z-index: ${lottieAnimationGlobalZIndex?.Mobile};` : ''}
                ${lottieAnimationContainerWidth?.Mobile ? `width: ${lottieAnimationContainerWidth?.Mobile}${lottieAnimationContainerWidthUnits?.Mobile};` : ''}
                
            }
            .${blockID}.fb-lottie-animation-main-wrapper .fb-lottie-animation-container {
                ${globalMobilePadding && lottieAnimationGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && lottieAnimationGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && lottieAnimationGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && lottieAnimationGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                ${lottieAnimationContainerHeight?.Mobile ? `height: ${lottieAnimationContainerHeight?.Mobile}${lottieAnimationContainerHeightUnits?.Mobile};` : ''}
            }
        }
    `;
    
    const customCss = getCustomCss(lottieAnimationGlobalWraperCustomCSS, `.${blockID}`);
        
    return `${lottieAnimationStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateLottieAnimationStyle;