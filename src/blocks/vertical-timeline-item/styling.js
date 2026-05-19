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

        /** Start Phase Title Background */
        vertcalTimelinePhaseTitleNormalBgColorSwitcher,
        vertcalTimelinePhaseTitleNormalBackgroundType,
        vertcalTimelinePhaseTitleNormalClassicColor,
        vertcalTimelinePhaseTitleNormalGradientColor,
        vertcalTimelinePhaseTitleNormalCustomGradientSwitcher,
        vertcalTimelinePhaseTitleNormalCustomGradientInputValue,

        vertcalTimelinePhaseTitleHoverBackgroundType,
        vertcalTimelinePhaseTitleHoverClassicColor,
        vertcalTimelinePhaseTitleHoverGradientColor,
        vertcalTimelinePhaseTitleHoverCustomGradientSwitcher,
        vertcalTimelinePhaseTitleHoverCustomGradientInputValue,
        /** End Phase Title Background */

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

        /** Start Phase Title Border */
        vertcalTimelinePhaseTitleNormalBorder,
        vertcalTimelinePhaseTitleNormalBorderColorSwitcher,
        vertcalTimelinePhaseTitleNormalBorderColor,
        vertcalTimelinePhaseTitleNormalBorderHoverColor,
        vertcalTimelinePhaseTitleNormalBorderUnits,
        vertcalTimelinePhaseTitleNormalBorderDesktop,
        vertcalTimelinePhaseTitleNormalBorderTablet,
        vertcalTimelinePhaseTitleNormalBorderMobile,
        vertcalTimelinePhaseTitleNormalBorderLink,
        /** End Phase Title Border */

        /** Start Content Box Border Radius */
        vertcalTimelineContentBoxGlobalBorderRadiusUnits,
        vertcalTimelineContentBoxGlobalBorderRadiusDesktop,
        vertcalTimelineContentBoxGlobalBorderRadiusTablet,
        vertcalTimelineContentBoxGlobalBorderRadiusMobile,
        vertcalTimelineContentBoxGlobalBorderRadiusLink,
        /** End Content Box Border Radius */

        /** Start Phase Title Border Radius */
        vertcalTimelinePhaseTitleNormalBorderRadiusUnits,
        vertcalTimelinePhaseTitleNormalBorderRadiusDesktop,
        vertcalTimelinePhaseTitleNormalBorderRadiusTablet,
        vertcalTimelinePhaseTitleNormalBorderRadiusMobile,
        vertcalTimelinePhaseTitleNormalBorderRadiusLink,
        /** End Phase Title Border Radius */

        /** Start Content Box Padding */
        vertcalTimelineContentBoxPaddingUnits,
        vertcalTimelineContentBoxPaddingDesktop,
        vertcalTimelineContentBoxPaddingTablet,
        vertcalTimelineContentBoxPaddingMobile,
        vertcalTimelineContentBoxPaddingLink,
        /** End Content Box Padding */

        /** Start Phase Title Padding */
        vertcalTimelinePhaseTitlePaddingUnits,
        vertcalTimelinePhaseTitlePaddingDesktop,
        vertcalTimelinePhaseTitlePaddingTablet,
        vertcalTimelinePhaseTitlePaddingMobile,
        vertcalTimelinePhaseTitlePaddingLink,
        /** End Phase Title Padding */

        /** Start Content Box Margin */
        vertcalTimelineContentBoxMarginUnits,
        vertcalTimelineContentBoxMarginDesktop,
        vertcalTimelineContentBoxMarginTablet,
        vertcalTimelineContentBoxMarginMobile,
        vertcalTimelineContentBoxMarginLink,
        /** End Content Box Margin */

        /** Start Phase Title Margin */
        vertcalTimelinePhaseTitleMarginUnits,
        vertcalTimelinePhaseTitleMarginDesktop,
        vertcalTimelinePhaseTitleMarginTablet,
        vertcalTimelinePhaseTitleMarginMobile,
        vertcalTimelinePhaseTitleMarginLink,
        /** End Phase Title Margin */

        /** Start Content Box Box Shadow */
        vertcalTimelineContentBoxBoxShadowSwitcher,
        vertcalTimelineContentBoxBoxShadowValues,
        vertcalTimelineContentBoxBoxShadowCssValue,
        vertcalTimelineContentBoxBoxShadowHoverValues,
        vertcalTimelineContentBoxBoxShadowHoverCssValue,
        /** End Content Box Box Shadow */

        /** Start Phase Title Box Shadow */
        vertcalTimelinePhaseTitleBoxShadowSwitcher,
        vertcalTimelinePhaseTitleBoxShadowValues,
        vertcalTimelinePhaseTitleBoxShadowCssValue,
        vertcalTimelinePhaseTitleBoxShadowHoverValues,
        vertcalTimelinePhaseTitleBoxShadowHoverCssValue,
        /** End Phase Title Box Shadow */

        vertcalTimelinePhaseTitleAlignment,

        vertcalTimelinePhaseTitleGlobalTypoSwitcher,
        vertcalTimelinePhaseTitleGlobalTypographyData,
        vertcalTimelinePhaseTitleGlobalTypoType,
        vertcalTimelinePhaseTitleGlobalTypoOption,
        vertcalTimelinePhaseTitleFontFamily,
        vertcalTimelinePhaseTitleFontSize,
        vertcalTimelinePhaseTitleFontSizeUnits,
        vertcalTimelinePhaseTitleFontWeight,
        vertcalTimelinePhaseTitleFontStyle,
        vertcalTimelinePhaseTitleTextTransform,
        vertcalTimelinePhaseTitleTextDecoration,
        vertcalTimelinePhaseTitleLetterSpacing,
        vertcalTimelinePhaseTitleLineHeight,
        vertcalTimelinePhaseTitleLetterSpacingUnits,
        vertcalTimelinePhaseTitleLineHeightUnits,

        vertcalTimelinePhaseTitleColorSwitcher,
        vertcalTimelinePhaseTitleColor,
        vertcalTimelinePhaseTitleHoverColor,


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

    /** Default padding for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitlePaddingDesktopWidth = `${vertcalTimelinePhaseTitlePaddingDesktop?.top}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop} ${vertcalTimelinePhaseTitlePaddingDesktop?.right}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop} ${vertcalTimelinePhaseTitlePaddingDesktop?.bottom}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop} ${vertcalTimelinePhaseTitlePaddingDesktop?.left}${vertcalTimelinePhaseTitlePaddingUnits?.Desktop}`;
    const vertcalTimelinePhaseTitlePaddingTabletWidth = `${vertcalTimelinePhaseTitlePaddingTablet?.top}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet} ${vertcalTimelinePhaseTitlePaddingTablet?.right}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet} ${vertcalTimelinePhaseTitlePaddingTablet?.bottom}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet} ${vertcalTimelinePhaseTitlePaddingTablet?.left}${vertcalTimelinePhaseTitlePaddingUnits?.Tablet}`;
    const vertcalTimelinePhaseTitlePaddingMobileWidth = `${vertcalTimelinePhaseTitlePaddingMobile?.top}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile} ${vertcalTimelinePhaseTitlePaddingMobile?.right}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile} ${vertcalTimelinePhaseTitlePaddingMobile?.bottom}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile} ${vertcalTimelinePhaseTitlePaddingMobile?.left}${vertcalTimelinePhaseTitlePaddingUnits?.Mobile}`;

    /** Default margin for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitleMarginDesktopWidth = `${vertcalTimelinePhaseTitleMarginDesktop?.top}${vertcalTimelinePhaseTitleMarginUnits?.Desktop} ${vertcalTimelinePhaseTitleMarginDesktop?.right}${vertcalTimelinePhaseTitleMarginUnits?.Desktop} ${vertcalTimelinePhaseTitleMarginDesktop?.bottom}${vertcalTimelinePhaseTitleMarginUnits?.Desktop} ${vertcalTimelinePhaseTitleMarginDesktop?.left}${vertcalTimelinePhaseTitleMarginUnits?.Desktop}`;
    const vertcalTimelinePhaseTitleMarginTabletWidth = `${vertcalTimelinePhaseTitleMarginTablet?.top}${vertcalTimelinePhaseTitleMarginUnits?.Tablet} ${vertcalTimelinePhaseTitleMarginTablet?.right}${vertcalTimelinePhaseTitleMarginUnits?.Tablet} ${vertcalTimelinePhaseTitleMarginTablet?.bottom}${vertcalTimelinePhaseTitleMarginUnits?.Tablet} ${vertcalTimelinePhaseTitleMarginTablet?.left}${vertcalTimelinePhaseTitleMarginUnits?.Tablet}`;
    const vertcalTimelinePhaseTitleMarginMobileWidth = `${vertcalTimelinePhaseTitleMarginMobile?.top}${vertcalTimelinePhaseTitleMarginUnits?.Mobile} ${vertcalTimelinePhaseTitleMarginMobile?.right}${vertcalTimelinePhaseTitleMarginUnits?.Mobile} ${vertcalTimelinePhaseTitleMarginMobile?.bottom}${vertcalTimelinePhaseTitleMarginUnits?.Mobile} ${vertcalTimelinePhaseTitleMarginMobile?.left}${vertcalTimelinePhaseTitleMarginUnits?.Mobile}`;

    /** Default border for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitleBorderDesktopWidth = `${vertcalTimelinePhaseTitleNormalBorderDesktop?.top}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderDesktop?.right}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderDesktop?.bottom}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderDesktop?.left}${vertcalTimelinePhaseTitleNormalBorderUnits?.Desktop}`;
    const vertcalTimelinePhaseTitleBorderTabletWidth = `${vertcalTimelinePhaseTitleNormalBorderTablet?.top}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderTablet?.right}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderTablet?.bottom}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderTablet?.left}${vertcalTimelinePhaseTitleNormalBorderUnits?.Tablet}`;
    const vertcalTimelinePhaseTitleBorderMobileWidth = `${vertcalTimelinePhaseTitleNormalBorderMobile?.top}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderMobile?.right}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderMobile?.bottom}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderMobile?.left}${vertcalTimelinePhaseTitleNormalBorderUnits?.Mobile}`;

    /** Default border radius for Vertical Timeline Item Phase Title */
    const vertcalTimelinePhaseTitleBorderRadiusDesktopWidth = `${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.top}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.right}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.bottom}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop} ${vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.left}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Desktop}`;
    const vertcalTimelinePhaseTitleBorderRadiusTabletWidth = `${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.top}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.right}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.bottom}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet} ${vertcalTimelinePhaseTitleNormalBorderRadiusTablet?.left}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Tablet}`;
    const vertcalTimelinePhaseTitleBorderRadiusMobileWidth = `${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.top}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.right}${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.right} ${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.bottom}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Mobile} ${vertcalTimelinePhaseTitleNormalBorderRadiusMobile?.left}${vertcalTimelinePhaseTitleNormalBorderRadiusUnits?.Mobile}`;



    const fbTimelineItemStyle = `

    .${blockID} .fb-vertical-timeline-item-wrapper {
            ${verticalTimelineItemGlobalZIndex?.Desktop ? `z-index: ${verticalTimelineItemGlobalZIndex?.Desktop};` : ''}
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            position: relative;
        }

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

        .${blockID} .fb-vertical-timeline-item-phase-title {
            display: flex;
            ${vertcalTimelinePhaseTitleAlignment?.Desktop ? `justify-content: ${vertcalTimelinePhaseTitleAlignment?.Desktop};` : ''}    
        }

       .${blockID} .fb-vertical-timeline-item-phase-title p {
            ${vertcalTimelinePhaseTitlePaddingDesktopWidth && vertcalTimelinePhaseTitlePaddingDesktop?.top ? `padding: ${vertcalTimelinePhaseTitlePaddingDesktopWidth};` : ''}
            ${vertcalTimelinePhaseTitleMarginDesktopWidth && vertcalTimelinePhaseTitleMarginDesktop?.top ? `margin: ${vertcalTimelinePhaseTitleMarginDesktopWidth};` : ''} 
            ${vertcalTimelinePhaseTitleNormalBorder ? `border-style: ${vertcalTimelinePhaseTitleNormalBorder};` : ''} 
            ${vertcalTimelinePhaseTitleNormalBorderColor ? `border-color: ${vertcalTimelinePhaseTitleNormalBorderColor};` : ''}
            ${vertcalTimelinePhaseTitleBorderDesktopWidth && vertcalTimelinePhaseTitleNormalBorderDesktop?.top ? `border-width: ${vertcalTimelinePhaseTitleBorderDesktopWidth};` : ''}
            ${vertcalTimelinePhaseTitleBorderRadiusDesktopWidth && vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.top ? `border-radius: ${vertcalTimelinePhaseTitleBorderRadiusDesktopWidth};` : ''}
            ${vertcalTimelinePhaseTitleNormalBackgroundType === 'gradient' ? `  
                ${vertcalTimelinePhaseTitleNormalCustomGradientSwitcher && vertcalTimelinePhaseTitleNormalCustomGradientInputValue ? `background: ${vertcalTimelinePhaseTitleNormalCustomGradientInputValue};` : `background: ${vertcalTimelinePhaseTitleNormalGradientColor};`}
            `: `
                ${vertcalTimelinePhaseTitleNormalClassicColor ? `background: ${vertcalTimelinePhaseTitleNormalClassicColor};` : ''}
            `}
           ${vertcalTimelinePhaseTitleBoxShadowCssValue ? `box-shadow: ${vertcalTimelinePhaseTitleBoxShadowCssValue};` : ''}
           ${vertcalTimelinePhaseTitleColorSwitcher && vertcalTimelinePhaseTitleColor ? `color: ${vertcalTimelinePhaseTitleColor};` : ''}
        } 

        .${blockID} .fb-vertical-timeline-item-inner-wrapper:hover .fb-vertical-timeline-item-phase-title p {
            ${vertcalTimelinePhaseTitleHoverBackgroundType === 'gradient' ? `  
                ${vertcalTimelinePhaseTitleHoverCustomGradientSwitcher && vertcalTimelinePhaseTitleHoverCustomGradientInputValue ? `background: ${vertcalTimelinePhaseTitleHoverCustomGradientInputValue};` : `background: ${vertcalTimelinePhaseTitleHoverGradientColor};`}
            `: `
                ${vertcalTimelinePhaseTitleHoverClassicColor ? `background: ${vertcalTimelinePhaseTitleHoverClassicColor};` : ''}
            `}
            ${vertcalTimelinePhaseTitleBoxShadowHoverCssValue ? `box-shadow: ${vertcalTimelinePhaseTitleBoxShadowHoverCssValue};` : ''}
            ${vertcalTimelinePhaseTitleNormalBorderHoverColor ? `border-color: ${vertcalTimelinePhaseTitleNormalBorderHoverColor};` : ''}
            ${vertcalTimelinePhaseTitleColorSwitcher && vertcalTimelinePhaseTitleHoverColor ? `color: ${vertcalTimelinePhaseTitleHoverColor};` : ''}
        } 

       @media only screen and (max-width: 1024px) {
           .${blockID} .fb-vertical-timeline-item-inner-wrapper {
               ${vertcalTimelineContentBoxPaddingTabletWidth && vertcalTimelineContentBoxPaddingTablet?.top ? `padding: ${vertcalTimelineContentBoxPaddingTabletWidth};` : ''}
               ${vertcalTimelineContentBoxMarginTabletWidth && vertcalTimelineContentBoxMarginTablet?.top ? `margin: ${vertcalTimelineContentBoxMarginTabletWidth};` : ''} 
               ${vertcalTimelineContentBoxGlobalBorderTabletWidth && vertcalTimelineContentBoxGlobalBorderTablet?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderTabletWidth};` : ''}
               ${vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth && vertcalTimelineContentBoxGlobalBorderRadiusTablet?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusTabletWidth};` : ''}
           } 

          .${blockID} .fb-vertical-timeline-item-phase-title p {
              ${vertcalTimelinePhaseTitlePaddingTabletWidth && vertcalTimelinePhaseTitlePaddingDesktop?.top ? `padding: ${vertcalTimelinePhaseTitlePaddingDesktopWidth};` : ''}
              ${vertcalTimelinePhaseTitleMarginTabletWidth && vertcalTimelinePhaseTitleMarginDesktop?.top ? `margin: ${vertcalTimelinePhaseTitleMarginDesktopWidth};` : ''} 
              ${vertcalTimelinePhaseTitleBorderTabletWidth && vertcalTimelinePhaseTitleNormalBorderDesktop?.top ? `border-width: ${vertcalTimelinePhaseTitleBorderDesktopWidth};` : ''}
              ${vertcalTimelinePhaseTitleBorderRadiusTabletWidth && vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.top ? `border-radius: ${vertcalTimelinePhaseTitleBorderRadiusDesktopWidth};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontFamily === true && vertcalTimelinePhaseTitleGlobalTypographyData?.fontFamily ? `font-family: ${vertcalTimelinePhaseTitleGlobalTypographyData?.fontFamily};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontSize === true && vertcalTimelinePhaseTitleGlobalTypographyData?.fontSize ? `font-size: ${vertcalTimelinePhaseTitleGlobalTypographyData?.fontSize};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontWeight === true && vertcalTimelinePhaseTitleGlobalTypographyData?.fontWeight ? `font-weight: ${vertcalTimelinePhaseTitleGlobalTypographyData?.fontWeight};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontStyle === true && vertcalTimelinePhaseTitleGlobalTypographyData?.fontStyle ? `font-style: ${vertcalTimelinePhaseTitleGlobalTypographyData?.fontStyle};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.textTransform === true && vertcalTimelinePhaseTitleGlobalTypographyData?.textTransform ? `text-transform: ${vertcalTimelinePhaseTitleGlobalTypographyData?.textTransform};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.textDecoration === true && vertcalTimelinePhaseTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${vertcalTimelinePhaseTitleGlobalTypographyData?.textDecoration};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.letterSpacing === true && vertcalTimelinePhaseTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${vertcalTimelinePhaseTitleGlobalTypographyData?.letterSpacing};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.lineHeight === true && vertcalTimelinePhaseTitleGlobalTypographyData?.lineHeight ? `line-height: ${vertcalTimelinePhaseTitleGlobalTypographyData?.lineHeight};` : ''}

              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontFamily === false && vertcalTimelinePhaseTitleFontFamily && vertcalTimelinePhaseTitleFontFamily !== 'Default' ? `font-family: ${vertcalTimelinePhaseTitleFontFamily};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontSize === false && vertcalTimelinePhaseTitleFontSize?.Desktop && vertcalTimelinePhaseTitleFontSizeUnits?.Desktop ? `font-size: ${vertcalTimelinePhaseTitleFontSize?.Desktop}${vertcalTimelinePhaseTitleFontSizeUnits?.Desktop};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontWeight === false && vertcalTimelinePhaseTitleFontWeight ? `font-weight: ${vertcalTimelinePhaseTitleFontWeight};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.fontStyle === false && vertcalTimelinePhaseTitleFontStyle ? `font-style: ${vertcalTimelinePhaseTitleFontStyle};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.textTransform === false && vertcalTimelinePhaseTitleTextTransform ? `text-transform: ${vertcalTimelinePhaseTitleTextTransform};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.textDecoration === false && vertcalTimelinePhaseTitleTextDecoration ? `text-decoration: ${vertcalTimelinePhaseTitleTextDecoration};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.letterSpacing === false && vertcalTimelinePhaseTitleLetterSpacing?.Desktop && vertcalTimelinePhaseTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${vertcalTimelinePhaseTitleLetterSpacing?.Desktop}${vertcalTimelinePhaseTitleLetterSpacingUnits?.Desktop};` : ''}
              ${vertcalTimelinePhaseTitleGlobalTypoSwitcher?.lineHeight === false && vertcalTimelinePhaseTitleLineHeight?.Desktop && vertcalTimelinePhaseTitleLineHeightUnits?.Desktop ? `line-height: ${vertcalTimelinePhaseTitleLineHeight?.Desktop}${vertcalTimelinePhaseTitleLineHeightUnits?.Desktop};` : ''}

          } 
        }

       @media only screen and (max-width: 767px) {
          .${blockID} .fb-vertical-timeline-item-inner-wrapper {
             ${vertcalTimelineContentBoxPaddingMobileWidth && vertcalTimelineContentBoxPaddingMobile?.top ? `padding: ${vertcalTimelineContentBoxPaddingMobileWidth};` : ''}
             ${vertcalTimelineContentBoxMarginMobileWidth && vertcalTimelineContentBoxMarginMobile?.top ? `margin: ${vertcalTimelineContentBoxMarginMobileWidth};` : ''} 
             ${vertcalTimelineContentBoxGlobalBorderMobileWidth && vertcalTimelineContentBoxGlobalBorderMobile?.top ? `border-width: ${vertcalTimelineContentBoxGlobalBorderMobileWidth};` : ''}
             ${vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth && vertcalTimelineContentBoxGlobalBorderRadiusMobile?.top ? `border-radius: ${vertcalTimelineContentBoxGlobalBorderRadiusMobileWidth};` : ''}
          } 
          
          .${blockID} .fb-vertical-timeline-item-phase-title p {
              ${vertcalTimelinePhaseTitlePaddingMobileWidth && vertcalTimelinePhaseTitlePaddingDesktop?.top ? `padding: ${vertcalTimelinePhaseTitlePaddingDesktopWidth};` : ''}
              ${vertcalTimelinePhaseTitleMarginMobileWidth && vertcalTimelinePhaseTitleMarginDesktop?.top ? `margin: ${vertcalTimelinePhaseTitleMarginDesktopWidth};` : ''} 
              ${vertcalTimelinePhaseTitleBorderMobileWidth && vertcalTimelinePhaseTitleNormalBorderDesktop?.top ? `border-width: ${vertcalTimelinePhaseTitleBorderDesktopWidth};` : ''}
              ${vertcalTimelinePhaseTitleBorderRadiusMobileWidth && vertcalTimelinePhaseTitleNormalBorderRadiusDesktop?.top ? `border-radius: ${vertcalTimelinePhaseTitleBorderRadiusDesktopWidth};` : ''}
          } 
       }
    `;

    const customCss = getCustomCss(verticalTimelineItemCustomCSS, `.${blockID}`);
    return `${fbTimelineItemStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateVerticalTimelineItemStyle;
