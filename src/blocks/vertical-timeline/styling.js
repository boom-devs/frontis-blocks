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
const generateVerticalTimelineStyle = (attributes) => {
    const {
        blockID,

        /** Start Progress Line */
        verticalTimelineItemlineColorSwitcher,
        verticalTimelineItemProgressLineColor,
        verticalTimelineItemBaseLineColor,
        /** End Progress Line */

        /** Start Base Line Size */
        verticalTimelineBaseLineWidth,
        verticalTimelineBaseLineWidthUnits,
        /** End Base Line Size */

        /** Start Progress Line Size */
        verticalTimelineProgressLineWidth,
        verticalTimelineProgressLineWidthUnits,
        /** End Progress Line Size */


        /** Start Responsive Controls */
        verticalTimelineDesktopSwitcher,
        verticalTimelineTabletSwitcher,
        verticalTimelineMobileSwitcher,
        /** End Responsive Controls */

        /** Start Box Shadow */
        verticalTimelineGlobalBoxShadowSwitcher,
        verticalTimelineGlobalBoxShadowValues,
        verticalTimelineGlobalBoxShadowCssValue,
        verticalTimelineGlobalHoverBoxShadowValues,
        verticalTimelineGlobalHoverBoxShadowCssValue,
        /** End Box Shadow */

        /** Start Border */
        verticalTimelineBorder,
        verticalTimelineBorderColor,
        verticalTimelineBorderHoverColor,
        verticalTimelineBorderColorSwitcher,
        verticalTimelineBorderUnits,
        verticalTimelineDesktopBorderWidth,
        verticalTimelineTabBorderWidth,
        verticalTimelineMobileBorderWidth,
        verticalTimelineBorderLink,
        verticalTimelineBorderRadiusUnits,
        verticalTimelineDesktopBorderRadiusWidth,
        verticalTimelineTabBorderRadiusWidth,
        verticalTimelineMobileBorderRadiusWidth,
        verticalTimelineBorderRadiusLink,
        /** End Border */

        /** Start Background */
        verticalTimelineBgColorSwitcher,
        verticalTimelineBgType,
        verticalTimelineBgClassicColor,
        verticalTimelineBgGradientColor,
        verticalTimelineBgCustomGradientSwitcher,
        verticalTimelineBgCustomGradientInputValue,
        verticalTimelineBgImageUrl,
        verticalTimelineBgImageAlt,
        verticalTimelineBgImageID,
        verticalTimelineBgImagePosition,
        verticalTimelineBgImageAttachment,
        verticalTimelineBgImageRepeat,
        verticalTimelineBgImageSize,
        verticalTimelineBgHoverType,
        verticalTimelineBgHoverClassicColor,
        verticalTimelineBgHoverGradientColor,
        verticalTimelineBgHoverCustomGradientSwitcher,
        verticalTimelineBgHoverCustomGradientInputValue,
        verticalTimelineBgHoverImageUrl,
        verticalTimelineBgHoverImageAlt,
        verticalTimelineBgHoverImageID,
        verticalTimelineBgHoverImagePosition,
        verticalTimelineBgHoverImageAttachment,
        verticalTimelineBgHoverImageRepeat,
        verticalTimelineBgHoverImageSize,
        /** End Background */

        /** Start Padding */
        verticalTimelinePaddingUnits,
        verticalTimelineDesktopPadding,
        verticalTimelineTabPadding,
        verticalTimelineMobilePadding,
        verticalTimelinePaddingLink,
        /** End Padding */

        /** Start Margin */
        verticalTimelineMarginUnits,
        verticalTimelineDesktopMargin,
        verticalTimelineTabMargin,
        verticalTimelineMobileMargin,
        verticalTimelineMarginLink,
        /** End Margin */

        /** Start Class & ID Setting */
        verticalTimelineGlobalZIndex,
        verticalTimelineCustomCSS,
        verticalTimelineWrapperID,
        verticalTimelineWrapperClass,
        /** End Class & ID Setting */
    } = attributes;

    // Border controls
    const verticalTimelineBorderDesktopWidth = `${verticalTimelineDesktopBorderWidth?.top}${verticalTimelineBorderUnits?.Desktop} ${verticalTimelineDesktopBorderWidth?.right}${verticalTimelineBorderUnits?.Desktop} ${verticalTimelineDesktopBorderWidth?.bottom}${verticalTimelineBorderUnits?.Desktop} ${verticalTimelineDesktopBorderWidth?.left}${verticalTimelineBorderUnits?.Desktop}`;
    const verticalTimelineBorderTabletWidth = `${verticalTimelineTabBorderWidth?.top}${verticalTimelineBorderUnits?.Tablet} ${verticalTimelineTabBorderWidth?.right}${verticalTimelineBorderUnits?.Tablet} ${verticalTimelineTabBorderWidth?.bottom}${verticalTimelineBorderUnits?.Tablet} ${verticalTimelineTabBorderWidth?.left}${verticalTimelineBorderUnits?.Tablet}`;
    const verticalTimelineBorderMobileWidth = `${verticalTimelineMobileBorderWidth?.top}${verticalTimelineBorderUnits?.Mobile} ${verticalTimelineMobileBorderWidth?.right}${verticalTimelineBorderUnits?.Mobile} ${verticalTimelineMobileBorderWidth?.bottom}${verticalTimelineBorderUnits?.Mobile} ${verticalTimelineMobileBorderWidth?.left}${verticalTimelineBorderUnits?.Mobile}`;

    // Border Radius controls
    const verticalTimelineBorderRadiusDesktopWidth = `${verticalTimelineDesktopBorderRadiusWidth?.top}${verticalTimelineBorderRadiusUnits?.Desktop} ${verticalTimelineDesktopBorderRadiusWidth?.right}${verticalTimelineBorderRadiusUnits?.Desktop} ${verticalTimelineDesktopBorderRadiusWidth?.bottom}${verticalTimelineBorderRadiusUnits?.Desktop} ${verticalTimelineDesktopBorderRadiusWidth?.left}${verticalTimelineBorderRadiusUnits?.Desktop}`;
    const verticalTimelineBorderRadiusTabletWidth = `${verticalTimelineTabBorderRadiusWidth?.top}${verticalTimelineBorderRadiusUnits?.Tablet} ${verticalTimelineTabBorderRadiusWidth?.right}${verticalTimelineBorderRadiusUnits?.Tablet} ${verticalTimelineTabBorderRadiusWidth?.bottom}${verticalTimelineBorderRadiusUnits?.Tablet} ${verticalTimelineTabBorderRadiusWidth?.left}${verticalTimelineBorderRadiusUnits?.Tablet}`;
    const verticalTimelineBorderRadiusMobileWidth = `${verticalTimelineMobileBorderRadiusWidth?.top}${verticalTimelineBorderRadiusUnits?.Mobile} ${verticalTimelineMobileBorderRadiusWidth?.right}${verticalTimelineBorderRadiusUnits?.Mobile} ${verticalTimelineMobileBorderRadiusWidth?.bottom}${verticalTimelineBorderRadiusUnits?.Mobile} ${verticalTimelineMobileBorderRadiusWidth?.left}${verticalTimelineBorderRadiusUnits?.Mobile}`;


    // Margin controls
    const verticalTimelineMarginDesktopWidth = `${verticalTimelineDesktopMargin?.top}${verticalTimelineMarginUnits?.Desktop} ${verticalTimelineDesktopMargin?.right}${verticalTimelineMarginUnits?.Desktop} ${verticalTimelineDesktopMargin?.bottom}${verticalTimelineMarginUnits?.Desktop} ${verticalTimelineDesktopMargin?.left}${verticalTimelineMarginUnits?.Desktop}`;
    const verticalTimelineMarginTabletWidth = `${verticalTimelineTabMargin?.top}${verticalTimelineMarginUnits?.Tablet} ${verticalTimelineTabMargin?.right}${verticalTimelineMarginUnits?.Tablet} ${verticalTimelineTabMargin?.bottom}${verticalTimelineMarginUnits?.Tablet} ${verticalTimelineTabMargin?.left}${verticalTimelineMarginUnits?.Tablet}`;
    const verticalTimelineMarginMobileWidth = `${verticalTimelineMobileMargin?.top}${verticalTimelineMarginUnits?.Mobile} ${verticalTimelineMobileMargin?.right}${verticalTimelineMarginUnits?.Mobile} ${verticalTimelineMobileMargin?.bottom}${verticalTimelineMarginUnits?.Mobile} ${verticalTimelineMobileMargin?.left}${verticalTimelineMarginUnits?.Mobile}`;

    // Padding controls
    const verticalTimelinePaddingDesktopWidth = `${verticalTimelineDesktopPadding?.top}${verticalTimelinePaddingUnits?.Desktop} ${verticalTimelineDesktopPadding?.right}${verticalTimelinePaddingUnits?.Desktop} ${verticalTimelineDesktopPadding?.bottom}${verticalTimelinePaddingUnits?.Desktop} ${verticalTimelineDesktopPadding?.left}${verticalTimelinePaddingUnits?.Desktop}`;
    const verticalTimelinePaddingTabletWidth = `${verticalTimelineTabPadding?.top}${verticalTimelinePaddingUnits?.Tablet} ${verticalTimelineTabPadding?.right}${verticalTimelinePaddingUnits?.Tablet} ${verticalTimelineTabPadding?.bottom}${verticalTimelinePaddingUnits?.Tablet} ${verticalTimelineTabPadding?.left}${verticalTimelinePaddingUnits?.Tablet}`;
    const verticalTimelinePaddingMobileWidth = `${verticalTimelineMobilePadding?.top}${verticalTimelinePaddingUnits?.Mobile} ${verticalTimelineMobilePadding?.right}${verticalTimelinePaddingUnits?.Mobile} ${verticalTimelineMobilePadding?.bottom}${verticalTimelinePaddingUnits?.Mobile} ${verticalTimelineMobilePadding?.left}${verticalTimelinePaddingUnits?.Mobile}`;


    const verticalTimelineStyle = `

    .${blockID} .fb-vertical-timeline-inner:before {
        ${verticalTimelineBaseLineWidth?.Desktop ? `width: ${verticalTimelineBaseLineWidth?.Desktop}${verticalTimelineBaseLineWidthUnits?.Desktop};` : ''}
        ${verticalTimelineItemBaseLineColor ? `background: ${verticalTimelineItemBaseLineColor};` : ''}
    }

    .${blockID} .fb-vertical-timeline-inner:after {
        ${verticalTimelineProgressLineWidth?.Desktop ? `width: ${verticalTimelineProgressLineWidth?.Desktop}${verticalTimelineProgressLineWidthUnits?.Desktop};` : ''}
        ${verticalTimelineItemProgressLineColor ? `background: ${verticalTimelineItemProgressLineColor};` : ''}
    }

    .${blockID} .fb-vertical-timeline-wrapper {
        ${verticalTimelineGlobalZIndex?.Desktop ? `z-index: ${verticalTimelineGlobalZIndex?.Desktop};` : ''}
        box-sizing: border-box;
        transition: all .3s ease-in-out;
        position: relative;
    }

    .fb-vertical-timeline-main-wrapper.${blockID} {
        ${verticalTimelineMarginDesktopWidth ? `margin: ${verticalTimelineMarginDesktopWidth};` : ''}
        ${verticalTimelinePaddingDesktopWidth ? `padding: ${verticalTimelinePaddingDesktopWidth};` : ''}
        ${verticalTimelineBgType === "gradient" ? `background: ${verticalTimelineBgCustomGradientSwitcher && verticalTimelineBgCustomGradientInputValue
            ? verticalTimelineBgCustomGradientInputValue
            : verticalTimelineBgGradientColor
            };`
            : verticalTimelineBgImageUrl !== undefined && verticalTimelineBgImageUrl !== null && verticalTimelineBgImageUrl !== ""
                ? `
                    ${verticalTimelineBgImageUrl !== undefined ? `background-image: url(${verticalTimelineBgImageUrl});` : ''}
                    ${verticalTimelineBgImagePosition !== undefined ? `background-position: ${verticalTimelineBgImagePosition};` : ''}
                    ${verticalTimelineBgImageAttachment !== undefined ? `background-attachment: ${verticalTimelineBgImageAttachment};` : ''}
                    ${verticalTimelineBgImageRepeat !== undefined ? `background-repeat: ${verticalTimelineBgImageRepeat};` : ''}
                    ${verticalTimelineBgImageSize !== undefined ? `background-size: ${verticalTimelineBgImageSize};` : ''}
                    `
                : verticalTimelineBgClassicColor ? `background: ${verticalTimelineBgClassicColor};` : ''
        }
        ${verticalTimelineGlobalBoxShadowCssValue ? `box-shadow: ${verticalTimelineGlobalBoxShadowCssValue};` : ''}  
        ${verticalTimelineBorder !== 'none' ? `border-style: ${verticalTimelineBorder};` : ''}
        ${verticalTimelineBorderDesktopWidth && verticalTimelineDesktopBorderWidth?.top ? `border-width: ${verticalTimelineBorderDesktopWidth};` : ''}
        ${verticalTimelineBorderColor ? `border-color: ${verticalTimelineBorderColor};` : ''}
        ${verticalTimelineBorderRadiusDesktopWidth && verticalTimelineDesktopBorderRadiusWidth?.top ? `border-radius: ${verticalTimelineBorderRadiusDesktopWidth};` : ''}   
    }

    .fb-vertical-timeline-main-wrapper.${blockID}:hover {
        ${verticalTimelineBgHoverType === "gradient"
            ? `background: ${verticalTimelineBgHoverCustomGradientSwitcher && verticalTimelineBgHoverCustomGradientInputValue
                ? verticalTimelineBgHoverCustomGradientInputValue
                : verticalTimelineBgHoverGradientColor
            };`
            : verticalTimelineBgHoverImageUrl !== undefined && verticalTimelineBgHoverImageUrl !== null && verticalTimelineBgHoverImageUrl !== ""
                ? `
                    ${verticalTimelineBgHoverImageUrl !== undefined ? `background-image: url(${verticalTimelineBgHoverImageUrl});` : ''}
                    ${verticalTimelineBgHoverImagePosition !== undefined ? `background-position: ${verticalTimelineBgHoverImagePosition};` : ''}
                    ${verticalTimelineBgHoverImageAttachment !== undefined ? `background-attachment: ${verticalTimelineBgHoverImageAttachment};` : ''}
                    ${verticalTimelineBgHoverImageRepeat !== undefined ? `background-repeat: ${verticalTimelineBgHoverImageRepeat};` : ''}
                    ${verticalTimelineBgHoverImageSize !== undefined ? `background-size: ${verticalTimelineBgHoverImageSize};` : ''}
                    `
                : verticalTimelineBgHoverClassicColor ? `background: ${verticalTimelineBgHoverClassicColor};` : ''
        }
            ${verticalTimelineBorderHoverColor ? `border-color: ${verticalTimelineBorderHoverColor};` : ''}
            ${verticalTimelineGlobalHoverBoxShadowCssValue ? `box-shadow: ${verticalTimelineGlobalHoverBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
    }

    @media only screen and (max-width: 1024px) {
        .${blockID} .fb-vertical-timeline-inner:before {
            ${verticalTimelineBaseLineWidth?.Tablet ? `width: ${verticalTimelineBaseLineWidth?.Tablet}${verticalTimelineBaseLineWidthUnits?.Tablet};` : ''}
            ${verticalTimelineBorderTabletWidth && verticalTimelineTabBorderWidth?.top ? `border-width: ${verticalTimelineBorderTabletWidth};` : ''}
            ${verticalTimelineBorderRadiusTabletWidth && verticalTimelineTabBorderRadiusWidth?.top ? `border-radius: ${verticalTimelineBorderRadiusTabletWidth};` : ''}
          
        }

        .${blockID} .fb-vertical-timeline-inner:after {
            ${verticalTimelineProgressLineWidth?.Tablet ? `width: ${verticalTimelineProgressLineWidth?.Tablet}${verticalTimelineProgressLineWidthUnits?.Tablet};` : ''}
        }

        .fb-vertical-timeline-main-wrapper.${blockID} {
            ${verticalTimelineMarginTabletWidth ? `margin: ${verticalTimelineMarginTabletWidth};` : ''}
            ${verticalTimelinePaddingTabletWidth ? `padding: ${verticalTimelinePaddingTabletWidth};` : ''}
        }

    }

    @media only screen and (max-width: 767px) {
        .${blockID} .fb-vertical-timeline-inner:before {
            ${verticalTimelineBaseLineWidth?.Mobile ? `width: ${verticalTimelineBaseLineWidth?.Mobile}${verticalTimelineBaseLineWidthUnits?.Mobile};` : ''}
        }

        .${blockID} .fb-vertical-timeline-inner:after {
            ${verticalTimelineProgressLineWidth?.Mobile ? `width: ${verticalTimelineProgressLineWidth?.Mobile}${verticalTimelineProgressLineWidthUnits?.Mobile};` : ''}
        }

        .fb-vertical-timeline-main-wrapper.${blockID} {
            ${verticalTimelineMarginMobileWidth ? `margin: ${verticalTimelineMarginMobileWidth};` : ''}
            ${verticalTimelinePaddingMobileWidth ? `padding: ${verticalTimelinePaddingMobileWidth};` : ''}
            ${verticalTimelineBorderMobileWidth && verticalTimelineMobileBorderWidth?.top ? `border-width: ${verticalTimelineBorderMobileWidth};` : ''}
            ${verticalTimelineBorderRadiusMobileWidth && verticalTimelineMobileBorderRadiusWidth?.top ? `border-radius: ${verticalTimelineBorderRadiusMobileWidth};` : ''}
        }

    }
    `;


    const customCss = getCustomCss(verticalTimelineCustomCSS, `.${blockID}`);
    return `${verticalTimelineStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateVerticalTimelineStyle;
