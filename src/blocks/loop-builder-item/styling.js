import getCustomCss from '@Utils/getCustomCss';

/**
 * Loop Builder Item Block - Style Generation
 * Returns Dynamic Generated CSS
 */
const generateLoopBuilderItemStyle = (attributes) => {
    const {
        blockID,
        gridColumnsPerSection,
        gridRowGap,
        gridColumnGap,
        gridGapUnits,

        postSwitcher,
        listGapUnits,
        listRowGap,
        loopBuilderItemGlobalZIndex,
        loopBuilderItemClass,
        loopBuilderItemCustomCSS,

        loopBuilderItemPaddingUnits,
        loopBuilderItemPaddingDesktop,
        loopBuilderItemPaddingTablet,
        loopBuilderItemPaddingMobile,
        loopBuilderItemPaddingLink,

        loopBuilderItemMarginUnits,
        loopBuilderItemMarginDesktop,
        loopBuilderItemMarginTablet,
        loopBuilderItemMarginMobile,
        loopBuilderItemMarginLink,

        loopBuilderItemBgColorSwitcher,
        loopBuilderItemNormalBackgroundType,
        loopBuilderItemNormalClassicColor,
        loopBuilderItemNormalGradientColor,
        loopBuilderItemNormalCustomGradientSwitcher,
        loopBuilderItemNormalCustomGradientInputValue,
        loopBuilderItemHoverBackgroundType,
        loopBuilderItemHoverClassicColor,
        loopBuilderItemHoverGradientColor,
        loopBuilderItemHoverCustomGradientSwitcher,
        loopBuilderItemHoverCustomGradientInputValue,

        loopBuilderItemBorder,
        loopBuilderItemBorderColorSwitcher,
        loopBuilderItemBorderColor,
        loopBuilderItemBorderHoverColor,

        loopBuilderItemBorderUnits,
        loopBuilderItemBorderDesktop,
        loopBuilderItemBorderTablet,
        loopBuilderItemBorderMobile,
        loopBuilderItemBorderLink,

        loopBuilderItemBorderRadiusUnits,
        loopBuilderItemBorderRadiusDesktop,
        loopBuilderItemBorderRadiusTablet,
        loopBuilderItemBorderRadiusMobile,
        loopBuilderItemBorderRadiusLink,

        loopBuilderItemBoxShadowSwitcher,
        loopBuilderItemBoxShadowValues,
        loopBuilderItemBoxShadowCssValue,
        loopBuilderItemBoxShadowHoverValues,
        loopBuilderItemBoxShadowHoverCssValue,
    } = attributes;

    /** Default padding for Google Map */
    const loopBuilderItemPaddingDesktopWidth = `${loopBuilderItemPaddingDesktop?.top}${loopBuilderItemPaddingUnits?.Desktop} ${loopBuilderItemPaddingDesktop?.right}${loopBuilderItemPaddingUnits?.Desktop} ${loopBuilderItemPaddingDesktop?.bottom}${loopBuilderItemPaddingUnits?.Desktop} ${loopBuilderItemPaddingDesktop?.left}${loopBuilderItemPaddingUnits?.Desktop}`; 
    const loopBuilderItemPaddingTabletWidth = `${loopBuilderItemPaddingTablet?.top}${loopBuilderItemPaddingUnits?.Tablet} ${loopBuilderItemPaddingTablet?.right}${loopBuilderItemPaddingUnits?.Tablet} ${loopBuilderItemPaddingTablet?.bottom}${loopBuilderItemPaddingUnits?.Tablet} ${loopBuilderItemPaddingTablet?.left}${loopBuilderItemPaddingUnits?.Tablet}`;
    const loopBuilderItemPaddingMobileWidth = `${loopBuilderItemPaddingMobile?.top}${loopBuilderItemPaddingUnits?.Mobile} ${loopBuilderItemPaddingMobile?.right}${loopBuilderItemPaddingUnits?.Mobile} ${loopBuilderItemPaddingMobile?.bottom}${loopBuilderItemPaddingUnits?.Mobile} ${loopBuilderItemPaddingMobile?.left}${loopBuilderItemPaddingUnits?.Mobile}`;

    /** Default margin for Google Map */
    const loopBuilderItemMarginDesktopWidth = `${loopBuilderItemMarginDesktop?.top}${loopBuilderItemMarginUnits?.Desktop} ${loopBuilderItemMarginDesktop?.right}${loopBuilderItemMarginUnits?.Desktop} ${loopBuilderItemMarginDesktop?.bottom}${loopBuilderItemMarginUnits?.Desktop} ${loopBuilderItemMarginDesktop?.left}${loopBuilderItemMarginUnits?.Desktop}`;
    const loopBuilderItemMarginTabletWidth = `${loopBuilderItemMarginTablet?.top}${loopBuilderItemMarginUnits?.Tablet} ${loopBuilderItemMarginTablet?.right}${loopBuilderItemMarginUnits?.Tablet} ${loopBuilderItemMarginTablet?.bottom}${loopBuilderItemMarginUnits?.Tablet} ${loopBuilderItemMarginTablet?.left}${loopBuilderItemMarginUnits?.Tablet}`;
    const loopBuilderItemMarginMobileWidth = `${loopBuilderItemMarginMobile?.top}${loopBuilderItemMarginUnits?.Mobile} ${loopBuilderItemMarginMobile?.right}${loopBuilderItemMarginUnits?.Mobile} ${loopBuilderItemMarginMobile?.bottom}${loopBuilderItemMarginUnits?.Mobile} ${loopBuilderItemMarginMobile?.left}${loopBuilderItemMarginUnits?.Mobile}`;

    /** Default border radius for Google Map */ 
    const loopBuilderItemBorderDesktopWidth = `${loopBuilderItemBorderDesktop?.top}${loopBuilderItemBorderUnits?.Desktop} ${loopBuilderItemBorderDesktop?.right}${loopBuilderItemBorderUnits?.Desktop} ${loopBuilderItemBorderDesktop?.bottom}${loopBuilderItemBorderUnits?.Desktop} ${loopBuilderItemBorderDesktop?.left}${loopBuilderItemBorderUnits?.Desktop}`;
    const loopBuilderItemBorderTabletWidth = `${loopBuilderItemBorderTablet?.top}${loopBuilderItemBorderUnits?.Tablet} ${loopBuilderItemBorderTablet?.right}${loopBuilderItemBorderUnits?.Tablet} ${loopBuilderItemBorderTablet?.bottom}${loopBuilderItemBorderUnits?.Tablet} ${loopBuilderItemBorderTablet?.left}${loopBuilderItemBorderUnits?.Tablet}`;
    const loopBuilderItemBorderMobileWidth = `${loopBuilderItemBorderMobile?.top}${loopBuilderItemBorderUnits?.Mobile} ${loopBuilderItemBorderMobile?.right}${loopBuilderItemBorderUnits?.Mobile} ${loopBuilderItemBorderMobile?.bottom}${loopBuilderItemBorderUnits?.Mobile} ${loopBuilderItemBorderMobile?.left}${loopBuilderItemBorderUnits?.Mobile}`;

    /** Default border radius for Google Map */
    const loopBuilderItemBorderRadiusDesktopWidth = `${loopBuilderItemBorderRadiusDesktop?.top}${loopBuilderItemBorderRadiusUnits?.Desktop} ${loopBuilderItemBorderRadiusDesktop?.right}${loopBuilderItemBorderRadiusUnits?.Desktop} ${loopBuilderItemBorderRadiusDesktop?.bottom}${loopBuilderItemBorderRadiusUnits?.Desktop} ${loopBuilderItemBorderRadiusDesktop?.left}${loopBuilderItemBorderRadiusUnits?.Desktop}`;
    const loopBuilderItemBorderRadiusTabletWidth = `${loopBuilderItemBorderRadiusTablet?.top}${loopBuilderItemBorderRadiusUnits?.Tablet} ${loopBuilderItemBorderRadiusTablet?.right}${loopBuilderItemBorderRadiusUnits?.Tablet} ${loopBuilderItemBorderRadiusTablet?.bottom}${loopBuilderItemBorderRadiusUnits?.Tablet} ${loopBuilderItemBorderRadiusTablet?.left}${loopBuilderItemBorderRadiusUnits?.Tablet}`;
    const loopBuilderItemBorderRadiusMobileWidth = `${loopBuilderItemBorderRadiusMobile?.top}${loopBuilderItemBorderRadiusUnits?.Mobile} ${loopBuilderItemBorderRadiusMobile?.right}${loopBuilderItemBorderRadiusUnits?.Mobile} ${loopBuilderItemBorderRadiusMobile?.bottom}${loopBuilderItemBorderRadiusUnits?.Mobile} ${loopBuilderItemBorderRadiusMobile?.left}${loopBuilderItemBorderRadiusUnits?.Mobile}`;


    const allBlockStyle = `
        .${blockID}.fb-loop-builder-item-main-container {
            margin-top: 0;
            margin-bottom: 0;
            max-width: 100%;
            padding: 0;
            list-style: none;
            box-sizing: border-box;
            width: 100%;

        }

        .${blockID} .fb-loop-builder-item-inner-container {
            ${loopBuilderItemPaddingDesktopWidth && loopBuilderItemPaddingDesktop?.top? `padding: ${loopBuilderItemPaddingDesktopWidth};` : ''}
            ${loopBuilderItemMarginDesktopWidth && loopBuilderItemMarginDesktop?.top? `margin: ${loopBuilderItemMarginDesktopWidth};` : ''} 
            ${loopBuilderItemBorder ? `border: ${loopBuilderItemBorder};` : ''} 
            ${loopBuilderItemBorderDesktopWidth && loopBuilderItemBorderDesktop?.top? `border-width: ${loopBuilderItemBorderDesktopWidth};` : ''}
            ${loopBuilderItemBorderRadiusDesktopWidth && loopBuilderItemBorderRadiusDesktop?.top? `border-radius: ${loopBuilderItemBorderRadiusDesktopWidth};` : ''}
            ${loopBuilderItemBorderColor ? `border-color: ${loopBuilderItemBorderColor};` : ''}
            ${loopBuilderItemBoxShadowCssValue ? `box-shadow: ${loopBuilderItemBoxShadowCssValue};` : ''}

            ${loopBuilderItemNormalBackgroundType === 'gradient' ? `  
                ${loopBuilderItemNormalCustomGradientSwitcher && loopBuilderItemNormalCustomGradientInputValue ? `background: ${loopBuilderItemNormalCustomGradientInputValue};` : `background: ${loopBuilderItemNormalGradientColor};`}
            `: `
                ${loopBuilderItemNormalClassicColor ? `background: ${loopBuilderItemNormalClassicColor};` : ''}
            `}
            
        }

        .${blockID} .fb-loop-builder-item-inner-container:hover {
            ${loopBuilderItemBorderHoverColor ? `border-color: ${loopBuilderItemBorderHoverColor};` : ''}
            ${loopBuilderItemBoxShadowHoverCssValue ? `box-shadow: ${loopBuilderItemBoxShadowHoverCssValue};` : ''}

            ${loopBuilderItemHoverBackgroundType === 'gradient' ? `  
                ${loopBuilderItemHoverCustomGradientSwitcher && loopBuilderItemHoverCustomGradientInputValue ? `background: ${loopBuilderItemHoverCustomGradientInputValue};` : `background: ${loopBuilderItemHoverGradientColor};`}
            `: `
                ${loopBuilderItemHoverClassicColor ? `background: ${loopBuilderItemHoverClassicColor};` : ''}
            `}
            
        }

        .${blockID}.fb-loop-builder-item-main-container > .wp-block-post .alignright,
        .${blockID}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container .alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        .${blockID}.fb-loop-builder-item-main-container > .wp-block-post .alignleft,
        .${blockID}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container .alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        .${blockID}.fb-loop-builder-item-main-container > .wp-block-post .aligncenter,
        .${blockID}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container .aligncenter {
            margin-inline-start: auto;
            margin-inline-end: auto;
        }

        .${blockID}.fb-loop-builder-item-main-container.grid-layout {
            display: grid;
            grid-template-columns: repeat(${gridColumnsPerSection?.Desktop}, minmax(0, 1fr)); 
            row-gap: ${gridRowGap?.Desktop}${gridGapUnits?.Desktop};  
            column-gap: ${gridColumnGap?.Desktop}${gridGapUnits?.Desktop};
            overflow: hidden;
        }

        .${blockID}.fb-loop-builder-item-main-container.list-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: ${listRowGap?.Desktop}${listGapUnits?.Desktop}; 
        }

        .${blockID}.fb-loop-builder-item-main-container > .wp-block-post,
        .${blockID}.fb-loop-builder-item-main-container > .fb-loop-builder-item-inner-container {
            min-width: 0;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .${blockID}.fb-loop-builder-item-main-container .fb-advanced-image-main-wrapper,
        .${blockID}.fb-loop-builder-item-main-container .fb-parent-wrapper,
        .${blockID}.fb-loop-builder-item-main-container .fb-advanced-image-wrapper,
        .${blockID}.fb-loop-builder-item-main-container .fb-advanced-image,
        .${blockID}.fb-loop-builder-item-main-container .fb-advanced-image-inner,
        .${blockID}.fb-loop-builder-item-main-container .wp-block-post-featured-image {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            overflow: hidden;
        }

        .${blockID}.fb-loop-builder-item-main-container .fb-advanced-image-inner {
            display: block;
        }

        .${blockID}.fb-loop-builder-item-main-container .fb-advanced-image-inner img,
        .${blockID}.fb-loop-builder-item-main-container .wp-block-post-featured-image img,
        .${blockID}.fb-loop-builder-item-main-container .fb-advanced-image-main-wrapper img {
            width: 100%;
            max-width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
            box-sizing: border-box;
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-loop-builder-item-main-container.grid-layout {
                grid-template-columns: repeat(${gridColumnsPerSection?.Tablet}, minmax(0, 1fr)) !important; 
                row-gap: ${gridRowGap?.Tablet}${gridGapUnits?.Tablet};  
                column-gap: ${gridColumnGap?.Tablet}${gridGapUnits?.Tablet}; 
            }

            .${blockID}.fb-loop-builder-item-main-container.list-layout {
                display: grid;
                grid-template-columns: minmax(0, 1fr);
                gap: ${listRowGap?.Tablet}${listGapUnits?.Tablet}; 
            }

            .${blockID} .fb-loop-builder-item-inner-container {
                ${loopBuilderItemPaddingTabletWidth && loopBuilderItemPaddingTablet?.top? `padding: ${loopBuilderItemPaddingTabletWidth};` : ''}
                ${loopBuilderItemMarginTabletWidth && loopBuilderItemMarginTablet?.top? `margin: ${loopBuilderItemMarginTabletWidth};` : ''} 
                ${loopBuilderItemBorderTabletWidth && loopBuilderItemBorderTablet?.top? `border-width: ${loopBuilderItemBorderTabletWidth};` : ''}
                ${loopBuilderItemBorderRadiusTabletWidth && loopBuilderItemBorderRadiusTablet?.top? `border-radius: ${loopBuilderItemBorderRadiusTabletWidth};` : ''}
            }
            
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-loop-builder-item-main-container.grid-layout {
                grid-template-columns: repeat(${gridColumnsPerSection?.Mobile}, minmax(0, 1fr)) !important; 
                row-gap: ${gridRowGap?.Mobile}${gridGapUnits?.Mobile};  
                column-gap: ${gridColumnGap?.Mobile}${gridGapUnits?.Mobile}; 
            }

            .${blockID}.fb-loop-builder-item-main-container.list-layout {
                display: grid;
                grid-template-columns: minmax(0, 1fr);
                gap: ${listRowGap?.Mobile}${listGapUnits?.Mobile};  
            }

            .${blockID} .fb-loop-builder-item-inner-container {
                ${loopBuilderItemPaddingMobileWidth && loopBuilderItemPaddingMobile?.top? `padding: ${loopBuilderItemPaddingMobileWidth};` : ''}
                ${loopBuilderItemMarginMobileWidth && loopBuilderItemMarginMobile?.top? `margin: ${loopBuilderItemMarginMobileWidth};` : ''} 
                ${loopBuilderItemBorderMobileWidth && loopBuilderItemBorderMobile?.top? `border-width: ${loopBuilderItemBorderMobileWidth};` : ''}
                ${loopBuilderItemBorderRadiusMobileWidth && loopBuilderItemBorderRadiusMobile?.top? `border-radius: ${loopBuilderItemBorderRadiusMobileWidth};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(loopBuilderItemCustomCSS, `.${blockID}`);
    return `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
};

export default generateLoopBuilderItemStyle;
