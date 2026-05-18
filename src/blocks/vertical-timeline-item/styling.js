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
const generateVerticalTimelineItemStyle = (attributes) => {
    const {
        blockID,
        /** Start General Settings */
        showSectionLabelSwitcher,
        verticalTimelineItemSectionLabel,
        showPhaseTitleSwitcher,
        verticalTimelineItemPhaseTitle,
        verticalTimelineItemIcon,
        /** End General Settings */

        /** Start Content Box Background */
        vertcalTimelineContentBoxGlobalBgColorSwitcher,
        vertcalTimelineContentBoxGlobalNormalBackgroundType,
        vertcalTimelineContentBoxGlobalNormalClassicColor,
        vertcalTimelineContentBoxGlobalNormalGradientColor,
        vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue,

        vertcalTimelineContentBoxGlobalHoverBackgroundType,
        vertcalTimelineContentBoxGlobalHoverClassicColor,
        vertcalTimelineContentBoxGlobalHoverGradientColor,
        vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue,
        /** End Content Box  Background */

        /** Start Content Box Border */
        vertcalTimelineContentBoxGlobalBorder,
        vertcalTimelineContentBoxGlobalBorderColorSwitcher,
        vertcalTimelineContentBoxGlobalBorderColor,
        vertcalTimelineContentBoxGlobalBorderHoverColor,
        vertcalTimelineContentBoxGlobalBorderUnits,
        vertcalTimelineContentBoxGlobalBorderDesktop,
        vertcalTimelineContentBoxGlobalBorderTablet,
        vertcalTimelineContentBoxGlobalBorderMobile,
        vertcalTimelineContentBoxGlobalBorderLink,
        /** End Content Box Border */

        /** Start Content Box Border Radius */
        vertcalTimelineContentBoxGlobalBorderRadiusUnits,
        vertcalTimelineContentBoxGlobalBorderRadiusDesktop,
        vertcalTimelineContentBoxGlobalBorderRadiusTablet,
        vertcalTimelineContentBoxGlobalBorderRadiusMobile,
        vertcalTimelineContentBoxGlobalBorderRadiusLink,
        /** End Content Box Border Radius */

        /** Start Content Box Padding */
        vertcalTimelineContentBoxPaddingUnits,
        vertcalTimelineContentBoxPaddingDesktop,
        vertcalTimelineContentBoxPaddingTablet,
        vertcalTimelineContentBoxPaddingMobile,
        vertcalTimelineContentBoxPaddingLink,
        /** End Content Box Padding */

        /** Start Content Box Margin */
        vertcalTimelineContentBoxMarginUnits,
        vertcalTimelineContentBoxMarginDesktop,
        vertcalTimelineContentBoxMarginTablet,
        vertcalTimelineContentBoxMarginMobile,
        vertcalTimelineContentBoxMarginLink,
        /** End Content Box Margin */

        vertcalTimelineContentBoxBoxShadowSwitcher,
        vertcalTimelineContentBoxBoxShadowValues,
        vertcalTimelineContentBoxBoxShadowCssValue,
        vertcalTimelineContentBoxBoxShadowHoverValues,
        vertcalTimelineContentBoxBoxShadowHoverCssValue,

        /** Start Class & ID Setting */
        verticalTimelineItemGlobalZIndex,
        verticalTimelineItemCustomCSS,
        verticalTimelineItemWraperID,
        verticalTimelineItemWraperClass,
        /** End Class & ID Setting */
    } = attributes;

    /** Default padding for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxPaddingDesktopWidth = `${vertcalTimelineContentBoxPaddingDesktop?.top}${vertcalTimelineContentBoxPaddingUnits?.Desktop} ${vertcalTimelineContentBoxPaddingDesktop?.right}${vertcalTimelineContentBoxPaddingUnits?.Desktop} ${vertcalTimelineContentBoxPaddingDesktop?.bottom}${vertcalTimelineContentBoxPaddingUnits?.Desktop} ${vertcalTimelineContentBoxPaddingDesktop?.left}${vertcalTimelineContentBoxPaddingUnits?.Desktop}`;
    const vertcalTimelineContentBoxPaddingTabletWidth = `${vertcalTimelineContentBoxPaddingTablet?.top}${vertcalTimelineContentBoxPaddingUnits?.Tablet} ${vertcalTimelineContentBoxPaddingTablet?.right}${vertcalTimelineContentBoxPaddingUnits?.Tablet} ${vertcalTimelineContentBoxPaddingTablet?.bottom}${vertcalTimelineContentBoxPaddingUnits?.Tablet} ${vertcalTimelineContentBoxPaddingTablet?.left}${vertcalTimelineContentBoxPaddingUnits?.Tablet}`;
    const vertcalTimelineContentBoxPaddingMobileWidth = `${vertcalTimelineContentBoxPaddingMobile?.top}${vertcalTimelineContentBoxPaddingUnits?.Mobile} ${vertcalTimelineContentBoxPaddingMobile?.right}${vertcalTimelineContentBoxPaddingUnits?.Mobile} ${vertcalTimelineContentBoxPaddingMobile?.bottom}${vertcalTimelineContentBoxPaddingUnits?.Mobile} ${vertcalTimelineContentBoxPaddingMobile?.left}${vertcalTimelineContentBoxPaddingUnits?.Mobile}`;

    /** Default margin for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxMarginDesktopWidth = `${vertcalTimelineContentBoxMarginDesktop?.top}${vertcalTimelineContentBoxMarginUnits?.Desktop} ${vertcalTimelineContentBoxMarginDesktop?.right}${vertcalTimelineContentBoxMarginUnits?.Desktop} ${vertcalTimelineContentBoxMarginDesktop?.bottom}${vertcalTimelineContentBoxMarginUnits?.Desktop} ${vertcalTimelineContentBoxMarginDesktop?.left}${vertcalTimelineContentBoxMarginUnits?.Desktop}`;
    const vertcalTimelineContentBoxMarginTabletWidth = `${vertcalTimelineContentBoxMarginTablet?.top}${vertcalTimelineContentBoxMarginUnits?.Tablet} ${vertcalTimelineContentBoxMarginTablet?.right}${vertcalTimelineContentBoxMarginUnits?.Tablet} ${vertcalTimelineContentBoxMarginTablet?.bottom}${vertcalTimelineContentBoxMarginUnits?.Tablet} ${vertcalTimelineContentBoxMarginTablet?.left}${vertcalTimelineContentBoxMarginUnits?.Tablet}`;
    const vertcalTimelineContentBoxMarginMobileWidth = `${vertcalTimelineContentBoxMarginMobile?.top}${vertcalTimelineContentBoxMarginUnits?.Mobile} ${vertcalTimelineContentBoxMarginMobile?.right}${vertcalTimelineContentBoxMarginUnits?.Mobile} ${vertcalTimelineContentBoxMarginMobile?.bottom}${vertcalTimelineContentBoxMarginUnits?.Mobile} ${vertcalTimelineContentBoxMarginMobile?.left}${vertcalTimelineContentBoxMarginUnits?.Mobile}`;


    /** Default border for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxGlobalBorderDesktopWidth = `${vertcalTimelineContentBoxGlobalBorderDesktop?.top}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderDesktop?.right}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderDesktop?.bottom}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderDesktop?.left}${vertcalTimelineContentBoxGlobalBorderUnits?.Desktop}`;
    const vertcalTimelineContentBoxGlobalBorderTabletWidth = `${vertcalTimelineContentBoxGlobalBorderTablet?.top}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderTablet?.right}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderTablet?.bottom}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderTablet?.left}${vertcalTimelineContentBoxGlobalBorderUnits?.Tablet}`;
    const vertcalTimelineContentBoxGlobalBorderMobileWidth = `${vertcalTimelineContentBoxGlobalBorderMobile?.top}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderMobile?.right}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderMobile?.bottom}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderMobile?.left}${vertcalTimelineContentBoxGlobalBorderUnits?.Mobile}`;

    /** Default border radius for Vertical Timeline Item Content Box */
    const vertcalTimelineContentBoxGlobalBorderRadiusDesktopWidth = `${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.top}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.right}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.bottom}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop} ${vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.left}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Desktop}`;
    const vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth = `${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.top}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.right}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.bottom}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet} ${vertcalTimelineContentBoxGlobalBorderRadiusTablet?.left}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Tablet}`;
    const vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth = `${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.top}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.right}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.bottom}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile} ${vertcalTimelineContentBoxGlobalBorderRadiusMobile?.left}${vertcalTimelineContentBoxGlobalBorderRadiusUnits?.Mobile}`;


    const fbTimelineItemStyle = `

       .${blockID} .fb-vertical-timeline-item-inner-wrapper {
           ${vertcalTimelineContentBoxPaddingDesktopWidth && vertcalTimelineContentBoxPaddingDesktop?.top ? `padding: ${vertcalTimelineContentBoxPaddingDesktopWidth};` : ''}
           ${vertcalTimelineContentBoxMarginDesktopWidth && vertcalTimelineContentBoxMarginDesktop?.top ? `margin: ${vertcalTimelineContentBoxMarginDesktopWidth};` : ''} 
           ${vertcalTimelineContentBoxGlobalBorder ? `border-style: ${vertcalTimelineContentBoxGlobalBorder};` : ''} 
           ${vertcalTimelineContentBoxGlobalBorderColor ? `border-color: ${vertcalTimelineContentBoxGlobalBorderColor};` : ''}
           ${vertcalTimelineContentBoxGlobalBorderDesktopWidth && vertcalTimelineContentBoxGlobalBorderDesktop?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderDesktopWidth};` : ''}
           ${vertcalTimelineContentBoxGlobalBorderRadiusDesktopWidth && vertcalTimelineContentBoxGlobalBorderRadiusDesktop?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusDesktopWidth};` : ''}
           ${vertcalTimelineContentBoxGlobalNormalBackgroundType === 'gradient' ? `  
                ${vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher && vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue ? `background: ${vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue};` : `background: ${vertcalTimelineContentBoxGlobalNormalGradientColor};`}
            `: `
                ${vertcalTimelineContentBoxGlobalNormalClassicColor ? `background: ${vertcalTimelineContentBoxGlobalNormalClassicColor};` : ''}
            `}
           ${vertcalTimelineContentBoxBoxShadowCssValue ? `box-shadow: ${vertcalTimelineContentBoxBoxShadowCssValue};` : ''}
        } 

        .${blockID} .fb-vertical-timeline-item-inner-wrapper:hover {
            ${vertcalTimelineContentBoxGlobalHoverBackgroundType === 'gradient' ? `  
                ${vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher && vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue ? `background: ${vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue};` : `background: ${vertcalTimelineContentBoxGlobalHoverGradientColor};`}
            `: `
                ${vertcalTimelineContentBoxGlobalHoverClassicColor ? `background: ${vertcalTimelineContentBoxGlobalHoverClassicColor};` : ''}
            `}
            ${vertcalTimelineContentBoxGlobalBorderHoverColor ? `border-color: ${vertcalTimelineContentBoxGlobalBorderHoverColor};` : ''}
            ${vertcalTimelineContentBoxBoxShadowHoverCssValue ? `box-shadow: ${vertcalTimelineContentBoxBoxShadowHoverCssValue};` : ''}
        }

       .${blockID} .fb-vertical-timeline-item-wrapper {
            ${verticalTimelineItemGlobalZIndex?.Desktop ? `z-index: ${verticalTimelineItemGlobalZIndex?.Desktop};` : ''}
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            position: relative;
        }

       @media only screen and (max-width: 1024px) {
           .${blockID} .fb-vertical-timeline-item-inner-wrapper {
               ${vertcalTimelineContentBoxPaddingTabletWidth && vertcalTimelineContentBoxPaddingTablet?.top ? `padding: ${vertcalTimelineContentBoxPaddingTabletWidth};` : ''}
               ${vertcalTimelineContentBoxMarginTabletWidth && vertcalTimelineContentBoxMarginTablet?.top ? `margin: ${vertcalTimelineContentBoxMarginTabletWidth};` : ''} 
               ${vertcalTimelineContentBoxGlobalBorderTabletWidth && vertcalTimelineContentBoxGlobalBorderTablet?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderTabletWidth};` : ''}
               ${vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth && vertcalTimelineContentBoxGlobalBorderRadiusTablet?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth};` : ''}
           } 
        }

       @media only screen and (max-width: 767px) {
          .${blockID} .fb-vertical-timeline-item-inner-wrapper {
             ${vertcalTimelineContentBoxPaddingMobileWidth && vertcalTimelineContentBoxPaddingMobile?.top ? `padding: ${vertcalTimelineContentBoxPaddingMobileWidth};` : ''}
             ${vertcalTimelineContentBoxMarginMobileWidth && vertcalTimelineContentBoxMarginMobile?.top ? `margin: ${vertcalTimelineContentBoxMarginMobileWidth};` : ''} 
             ${vertcalTimelineContentBoxGlobalBorderMobileWidth && vertcalTimelineContentBoxGlobalBorderMobile?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderMobileWidth};` : ''}
             ${vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth && vertcalTimelineContentBoxGlobalBorderRadiusMobile?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth};` : ''}
          } 
       }

    `;

    const customCss = getCustomCss(verticalTimelineItemCustomCSS, `.${blockID}`);
    return `${fbTimelineItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateVerticalTimelineItemStyle;
