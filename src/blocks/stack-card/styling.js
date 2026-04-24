/**
 * Stack Card Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

const hasValue = (value) => value !== undefined && value !== null && value !== '';

const generateStackCardsStyle = (attributes) => {
    const {
        blockID,
		blockStyle,
        stackCardsPresetStyle,

        stackCardsOffsetTop,
        stackCardsOffsetTopUnits,
        stackCardsItemOffsetTop,
        stackCardsItemOffsetTopSwitcher,
        stackCardsItemScale,

        stackCardsCardItemGap,
        stackCardsCardItemGapUnits,

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

    const frameSelector = `.${blockID}.fb-stack-cards-main-wrapper .fb-stack-cards-frame`;
    const editorLayoutSelector = `${frameSelector} > .block-editor-inner-blocks > .block-editor-block-list__layout`;
    const frameGapSelector = `${frameSelector}, ${editorLayoutSelector}`;
    const frameItemSelector = `${frameSelector} .fb-stack-card-item`;
    const editorItemSelector = `${editorLayoutSelector} > .fb-stack-card-item`;
    const allItemSelector = `${frameItemSelector}, ${editorItemSelector}`;

    /** Start All Block Style */
    const stackCardsCSS = `
        .${blockID}.fb-stack-cards-main-wrapper {
            width: 100%;
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
        
        ${frameSelector} {
            ${hasValue(stackCardsGlobalPaddingDesktop?.top) ? `padding: ${globalDesktopPadding};` : ''}
            ${hasValue(stackCardsGlobalMarginDesktop?.top) ? `margin: ${globalDesktopMargin};` : ''} 
            ${stackCardsGlobalBorder ? `border: ${stackCardsGlobalBorder};` : ''} 
            ${hasValue(stackCardsGlobalBorderDesktop?.top) ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${hasValue(stackCardsGlobalBorderRadiusDesktop?.top) ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
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
        ${frameSelector}:hover {
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
        
        ${stackCardsPresetStyle === 'stack-top' && `
            ${frameGapSelector} {
                ${hasValue(stackCardsCardItemGap?.Desktop) && stackCardsCardItemGapUnits?.Desktop ? `gap: ${stackCardsCardItemGap?.Desktop}${stackCardsCardItemGapUnits?.Desktop};` : ''}
            }

            ${allItemSelector} {
                ${hasValue(stackCardsOffsetTop?.Desktop) && stackCardsOffsetTopUnits?.Desktop ? `top: ${stackCardsOffsetTop?.Desktop}${stackCardsOffsetTopUnits?.Desktop};` : ''}
            }

            ${Object.entries(stackCardsItemOffsetTop?.Desktop || {}).map(([itemNumber, value]) => {
                const normalizedValue = typeof value === 'object' && value !== null ? value?.Desktop : value;
                if (
                    !stackCardsItemOffsetTopSwitcher ||
                    !hasValue(normalizedValue)
                ) {
                    return '';
                }
                return `
                ${frameSelector} .fb-stack-card-item:nth-child(${itemNumber}),
                ${editorLayoutSelector} > .fb-stack-card-item:nth-child(${itemNumber}) { 
                    top: ${normalizedValue}${stackCardsOffsetTopUnits?.Desktop};
                }`;
            }).join(' ')}

            ${Object.entries(stackCardsItemScale?.Desktop || {}).map(([itemNumber, value]) => {
                const normalizedScale = typeof value === 'object' && value !== null ? value?.Desktop : value;
                if (
                    !hasValue(normalizedScale)
                ) {
                    return '';
                }
                return `
                ${frameItemSelector}.fb-card-item${itemNumber},
                ${editorItemSelector}.fb-card-item${itemNumber} {
                    --fb-design-scale: ${normalizedScale};
                }`;
            }).join(' ')}

        `}

        ${allItemSelector} {
            position: sticky;
            transform-origin: top center;
            ${stackCardsPresetStyle === 'stack-top' ? `transform: scale(var(--fb-active-scale, var(--fb-design-scale, 1)));` : ''}
            transition: transform 0.5s ease,opacity 0.5s ease;
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-stack-cards-main-wrapper {
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'left' && stackCardsHZLeftOffset?.Tablet !== undefined ? `left: ${stackCardsHZLeftOffset?.Tablet}${stackCardsHZLeftOffsetUnits?.Tablet};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'right' && stackCardsHZRightOffset?.Tablet !== undefined ? `right: ${stackCardsHZRightOffset?.Tablet}${stackCardsHZRightOffsetUnits?.Tablet};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'top' && stackCardsVRTopOffset?.Tablet !== undefined ? `top: ${stackCardsVRTopOffset?.Tablet}${stackCardsVRTopOffsetUnits?.Tablet};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'bottom' && stackCardsVRBottomOffset?.Tablet !== undefined ? `bottom: ${stackCardsVRBottomOffset?.Tablet}${stackCardsVRBottomOffsetUnits?.Tablet};` : ''}
                ${stackCardsGlobalZIndex?.Tablet ? `z-index: ${stackCardsGlobalZIndex?.Tablet};` : ''}
            }

            ${frameSelector} {
                ${hasValue(stackCardsGlobalPaddingTablet?.top) ? `padding: ${globalTabletPadding};` : ''}
                ${hasValue(stackCardsGlobalMarginTablet?.top) ? `margin: ${globalTabletMargin};` : ''} 
                ${hasValue(stackCardsGlobalBorderTablet?.top) ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${hasValue(stackCardsGlobalBorderRadiusTablet?.top) ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }

            ${stackCardsPresetStyle === 'stack-top' && `
                ${frameGapSelector} {
                    ${hasValue(stackCardsCardItemGap?.Tablet) && stackCardsCardItemGapUnits?.Tablet ? `gap: ${stackCardsCardItemGap?.Tablet}${stackCardsCardItemGapUnits?.Tablet};` : ''}
                }
                
                ${allItemSelector} {
                    ${hasValue(stackCardsOffsetTop?.Tablet) && stackCardsOffsetTopUnits?.Tablet ? `top: ${stackCardsOffsetTop?.Tablet}${stackCardsOffsetTopUnits?.Tablet};` : ''}
                }

                ${Object.entries(stackCardsItemOffsetTop?.Tablet || {}).map(([itemNumber, value]) => {
                    const normalizedValue = typeof value === 'object' && value !== null ? value?.Tablet : value;
                    if (
                        !stackCardsItemOffsetTopSwitcher ||
                        !hasValue(normalizedValue)
                    ) {
                        return '';
                    }
                    return `
                    ${frameSelector} .fb-stack-card-item:nth-child(${itemNumber}),
                    ${editorLayoutSelector} > .fb-stack-card-item:nth-child(${itemNumber}) { top: ${normalizedValue}${stackCardsOffsetTopUnits?.Tablet}; }`;
                }).join(' ')}

                ${Object.entries(stackCardsItemScale?.Tablet || {}).map(([itemNumber, value]) => {
                    const normalizedScale = typeof value === 'object' && value !== null ? value?.Tablet : value;
                    if (
                        !hasValue(normalizedScale)
                    ) {
                        return '';
                    }
                    return `
                    ${frameItemSelector}.fb-card-item${itemNumber},
                    ${editorItemSelector}.fb-card-item${itemNumber} { --fb-design-scale: ${normalizedScale}; }`;
                }).join(' ')}

            `}
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-stack-cards-main-wrapper {
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'left' && stackCardsHZLeftOffset?.Mobile !== undefined ? `left: ${stackCardsHZLeftOffset?.Mobile}${stackCardsHZLeftOffsetUnits?.Mobile};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsHZOrientationType === 'right' && stackCardsHZRightOffset?.Mobile !== undefined ? `right: ${stackCardsHZRightOffset?.Mobile}${stackCardsHZRightOffsetUnits?.Mobile};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'top' && stackCardsVRTopOffset?.Mobile !== undefined ? `top: ${stackCardsVRTopOffset?.Mobile}${stackCardsVRTopOffsetUnits?.Mobile};` : ''}
                ${stackCardsPositionType !== 'default' && stackCardsPositionType !== 'relative' && stackCardsVROrientationType === 'bottom' && stackCardsVRBottomOffset?.Mobile !== undefined ? `bottom: ${stackCardsVRBottomOffset?.Mobile}${stackCardsVRBottomOffsetUnits?.Mobile};` : ''}
                ${stackCardsGlobalZIndex?.Mobile ? `z-index: ${stackCardsGlobalZIndex?.Mobile};` : ''}
            }

            ${frameSelector} {
                ${hasValue(stackCardsGlobalPaddingMobile?.top) ? `padding: ${globalMobilePadding};` : ''}
                ${hasValue(stackCardsGlobalMarginMobile?.top) ? `margin: ${globalMobileMargin};` : ''} 
                ${hasValue(stackCardsGlobalBorderMobile?.top) ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${hasValue(stackCardsGlobalBorderRadiusMobile?.top) ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }

            ${stackCardsPresetStyle === 'stack-top' && `
                ${frameGapSelector} {
                    ${hasValue(stackCardsCardItemGap?.Mobile) && stackCardsCardItemGapUnits?.Mobile ? `gap: ${stackCardsCardItemGap?.Mobile}${stackCardsCardItemGapUnits?.Mobile};` : ''}
                }
    
                ${allItemSelector} {
                    ${hasValue(stackCardsOffsetTop?.Mobile) && stackCardsOffsetTopUnits?.Mobile ? `top: ${stackCardsOffsetTop?.Mobile}${stackCardsOffsetTopUnits?.Mobile};` : ''}
                }

                ${Object.entries(stackCardsItemOffsetTop?.Mobile || {}).map(([itemNumber, value]) => {
                    const normalizedValue = typeof value === 'object' && value !== null ? value?.Mobile : value;
                    if (
                        !stackCardsItemOffsetTopSwitcher ||
                        !hasValue(normalizedValue)
                    ) {
                        return '';
                    }
                    return `
                    ${frameSelector} .fb-stack-card-item:nth-child(${itemNumber}),
                    ${editorLayoutSelector} > .fb-stack-card-item:nth-child(${itemNumber}) { top: ${normalizedValue}${stackCardsOffsetTopUnits?.Mobile}; }`;
                }).join(' ')}

                ${Object.entries(stackCardsItemScale?.Mobile || {}).map(([itemNumber, value]) => {
                    const normalizedScale = typeof value === 'object' && value !== null ? value?.Mobile : value;
                    if (
                        !hasValue(normalizedScale)
                    ) {
                        return '';
                    }
                    return `
                    ${frameItemSelector}.fb-card-item${itemNumber},
                    ${editorItemSelector}.fb-card-item${itemNumber} { --fb-design-scale: ${normalizedScale}; }`;
                }).join(' ')}

            `}
        }
    
    `;
    /** End All Block Style */

    // Custom CSS
    const customCss = getCustomCss(stackCardsCustomCSS, `.${blockID}`);

    return `${stackCardsCSS} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateStackCardsStyle;
