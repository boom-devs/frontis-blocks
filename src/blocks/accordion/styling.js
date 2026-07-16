/**
 * Accordion Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAccordionStyle = (attributes) => {
    const {
        blockID,
        blockStyle,
        accordionAlignment,
        accordionIconZIndex,
        accordionItems,
        accordionPresetStyle,

        accordionIconSize,
        accordionIconSizeUnits,

        accordionIconColorSwitcher,
        accordionIconColor,
        accordionIconHoverColor,

        accordionIconBorder,
        accordionIconBorderColorSwitcher,
        accordionIconBorderColor,
        accordionIconBorderHoverColor,

        accordionIconBorderUnits,
        accordionIconBorderDesktop,
        accordionIconBorderTablet,
        accordionIconBorderMobile,
        accordionIconBorderLink,

        accordionIconBorderRadiusUnits,
        accordionIconBorderRadiusDesktop,
        accordionIconBorderRadiusTablet,
        accordionIconBorderRadiusMobile,
        accordionIconBorderRadiusLink,

        accordionIconGapSize,
        accordionIconGapUnits,

        accordionIconPaddingUnits,
        accordionIconPaddingDesktop,
        accordionIconPaddingTablet,
        accordionIconPaddingMobile,
        accordionIconPaddingLink,

        titleGlobalTypoSwitcher,
        titleGlobalTypographyData,
        titleGlobalTypoType,
        titleGlobalTypoOption,
        titleFontFamily,
        titleFontSize,
        titleFontSizeUnits,
        titleFontWeight,
        titleFontStyle,
        titleTextTransform,
        titleTextDecoration,
        titleLetterSpacing,
        titleLetterSpacingUnits,
        titleLineHeight,
        titleLineHeightUnits,

        accordionType,
        displayIcon,
        transitionDuration,
        tabIconSwitcher,
        tabIcon,
        tabImageUrl,
        tabImageAlt,
        tabImageID,
        tabImagePosition,
        tabImageAttachment,
        tabImageRepeat,
        tabImageSize,

        expandedIconSwitcher,
        expandedIcon,
        expandedImageUrl,
        expandedImageAlt,
        expandedImageID,
        expandedImagePosition,
        expandedImageAttachment,
        expandedImageRepeat,
        expandedImageSize,
        contentAlign,
        contentColor,
        iconColor,
        iconPosition,
        titleAlignment,
        tagName,
        faqSchema,

        titleColorSwitcher,
        titleColor,
        titleHoverColor,

        titleActiveColor,
        titleBgActiveColor,
        contentBgActiveColor,
        accordionItemsBorderActiveColor,
        accordionItemsContentBorderActiveColor,

        accordionItemGap,
        accordionItemGapUnits,

        titleSpacing,
        titleSpacingUnits,

        prefixSuffixSpacing,
        prefixSuffixSpacingUnits,

        titleIconSize,
        titleIconSizeUnits,

        titlePrefixIconSize,
        titlePrefixIconSizeUnits,

        titleSuffixIconSize,
        titleSuffixIconSizeUnits,

        titleBGColorSwitcher,
        titleBGColor,
        titleBGHoverColor,
        titleIconColorSwitcher,
        titleIconColor,
        titleIconHoverColor,

        // Accordion Items
        accordionItemsPaddingUnits,
        accordionItemsDesktopPadding,
        accordionItemsTabPadding,
        accordionItemsMobilePadding,
        accordionItemsPaddingLink,

        accordionItemsBorder,
        accordionItemsBorderColor,
        accordionItemsBorderHoverColor,
        accordionItemsBorderColorSwitcher,
        accordionItemsBorderUnits,
        accordionItemsDesktopBorderWidth,
        accordionItemsTabBorderWidth,
        accordionItemsMobileBorderWidth,
        accordionItemsBorderLink,
        accordionItemsBorderRadiusUnits,
        accordionItemsDesktopBorderRadiusWidth,
        accordionItemsTabBorderRadiusWidth,
        accordionItemsMobileBorderRadiusWidth,
        accordionItemsBorderRadiusLink,

        // Accordion Advance
        accordionZIndex,
        accordionOverflow,
        accordionPaddingUnits,
        accordionDesktopPadding,
        accordionTabPadding,
        accordionMobilePadding,
        accordionPaddingLink,
        accordionMarginUnits,
        accordionDesktopMargin,
        accordionTabMargin,
        accordionMobileMargin,
        accordionMarginLink,
        accordionBorder,
        accordionBorderColor,
        accordionBorderHoverColor,
        accordionBorderColorSwitcher,
        accordionBorderUnits,
        accordionDesktopBorderWidth,
        accordionTabBorderWidth,
        accordionMobileBorderWidth,
        accordionBorderLink,
        accordionBorderRadiusUnits,
        accordionDesktopBorderRadiusWidth,
        accordionTabBorderRadiusWidth,
        accordionMobileBorderRadiusWidth,
        accordionBorderRadiusLink,
        accordionDesktopSwitcher,
        accordionTabletSwitcher,
        accordionMobileSwitcher,

        // Boxshadow
        accordionGlobalBoxShadowSwitcher,
        accordionGlobalBoxShadowValues,
        accordionGlobalBoxShadowCssValue,
        accordionGlobalHoverBoxShadowValues,
        accordionGlobalHoverBoxShadowCssValue,

        // Backgorund
        accordionBgColorSwitcher,
        accordionBgType,
        accordionBgClassicColor,
        accordionBgGradientColor,
        accordionBgCustomGradientSwitcher,
        accordionBgCustomGradientInputValue,
        accordionBgImageUrl,
        accordionBgImageAlt,
        accordionBgImageID,
        accordionBgImagePosition,
        accordionBgImageAttachment,
        accordionBgImageRepeat,
        accordionBgImageSize,
        accordionBgHoverType,
        accordionBgHoverClassicColor,
        accordionBgHoverGradientColor,
        accordionBgHoverCustomGradientSwitcher,
        accordionBgHoverCustomGradientInputValue,
        accordionBgHoverImageUrl,
        accordionBgHoverImageAlt,
        accordionBgHoverImageID,
        accordionBgHoverImagePosition,
        accordionBgHoverImageAttachment,
        accordionBgHoverImageRepeat,
        accordionBgHoverImageSize,

        // Item Box Shadow
        accordionItemBoxShadowSwitcher,
        accordionItemBoxShadowValues,
        accordionItemBoxShadowCssValue,
        accordionItemHoverBoxShadowValues,
        accordionItemHoverBoxShadowCssValue,

        // Item Backgorund
        titleBgColorSwitcher,
        titleBgType,
        titleBgClassicColor,
        titleBgGradientColor,
        titleBgCustomGradientSwitcher,
        titleBgCustomGradientInputValue,
        titleBgImageUrl,
        titleBgImageAlt,
        titleBgImageID,
        titleBgImagePosition,
        titleBgImageAttachment,
        titleBgImageRepeat,
        titleBgImageSize,
        titleBgHoverType,
        titleBgHoverClassicColor,
        titleBgHoverGradientColor,
        titleBgHoverCustomGradientSwitcher,
        titleBgHoverCustomGradientInputValue,
        titleBgHoverImageUrl,
        titleBgHoverImageAlt,
        titleBgHoverImageID,
        titleBgHoverImagePosition,
        titleBgHoverImageAttachment,
        titleBgHoverImageRepeat,
        titleBgHoverImageSize,

        // Accordion Item Content
        contentBorder,
        contentBorderColor,
        contentBorderHoverColor,
        contentBorderColorSwitcher,
        contentBorderUnits,
        contentDesktopBorderWidth,
        contentTabBorderWidth,
        contentMobileBorderWidth,
        contentBorderLink,
        contentBorderRadiusUnits,
        contentDesktopBorderRadiusWidth,
        contentTabBorderRadiusWidth,
        contentMobileBorderRadiusWidth,
        contentBorderRadiusLink,

        contentActiveBorderRadiusUnits,
        contentDesktopActiveBorderRadiusWidth,
        contentTabActiveBorderRadiusWidth,
        contentMobileActiveBorderRadiusWidth,
        contentActiveBorderRadiusLink,

        contentDesktopSwitcher,
        contentTabletSwitcher,
        contentMobileSwitcher,

        // Item Box Shadow
        contentBoxShadowSwitcher,
        contentBoxShadowValues,
        contentBoxShadowCssValue,
        contentHoverBoxShadowValues,
        contentHoverBoxShadowCssValue,

        // Item Backgorund
        contentBgColorSwitcher,
        contentBgType,
        contentBgClassicColor,
        contentBgGradientColor,
        contentBgCustomGradientSwitcher,
        contentBgCustomGradientInputValue,
        contentBgImageUrl,
        contentBgImageAlt,
        contentBgImageID,
        contentBgImagePosition,
        contentBgImageAttachment,
        contentBgImageRepeat,
        contentBgImageSize,
        contentBgHoverType,
        contentBgHoverClassicColor,
        contentBgHoverGradientColor,
        contentBgHoverCustomGradientSwitcher,
        contentBgHoverCustomGradientInputValue,
        contentBgHoverImageUrl,
        contentBgHoverImageAlt,
        contentBgHoverImageID,
        contentBgHoverImagePosition,
        contentBgHoverImageAttachment,
        contentBgHoverImageRepeat,
        contentBgHoverImageSize,

        accordionCustomCSS,
        accordionGlobalWraperID,
        accordionGlobalWraperClass,

        // Position
        accordionPositionType,
        accordionHZOrientationType,
        accordionVROrientationType,
        accordionHZLeftOffset,
        accordionHZLeftOffsetUnits,
        accordionHZRightOffset,
        accordionHZRightOffsetUnits,
        accordionVRTopOffset,
        accordionVRTopOffsetUnits,
        accordionVRBottomOffset,
        accordionVRBottomOffsetUnits,

    } = attributes;

    const accordionItemsPaddingDesktopWidth = `${accordionItemsDesktopPadding?.top}${accordionItemsPaddingUnits?.Desktop} ${accordionItemsDesktopPadding?.right}${accordionItemsPaddingUnits?.Desktop} ${accordionItemsDesktopPadding?.bottom}${accordionItemsPaddingUnits?.Desktop} ${accordionItemsDesktopPadding?.left}${accordionItemsPaddingUnits?.Desktop}`;
    const accordionItemsPaddingTabletWidth = `${accordionItemsTabPadding?.top}${accordionItemsPaddingUnits?.Tablet} ${accordionItemsTabPadding?.right}${accordionItemsPaddingUnits?.Tablet} ${accordionItemsTabPadding?.bottom}${accordionItemsPaddingUnits?.Tablet} ${accordionItemsTabPadding?.left}${accordionItemsPaddingUnits?.Tablet}`;
    const accordionItemsPaddingMobileWidth = `${accordionItemsMobilePadding?.top}${accordionItemsPaddingUnits?.Mobile} ${accordionItemsMobilePadding?.right}${accordionItemsPaddingUnits?.Mobile} ${accordionItemsMobilePadding?.bottom}${accordionItemsPaddingUnits?.Mobile} ${accordionItemsMobilePadding?.left}${accordionItemsPaddingUnits?.Mobile}`;

    const accordionItemsBorderDesktopWidth = `${accordionItemsDesktopBorderWidth?.top}${accordionItemsBorderUnits?.Desktop} ${accordionItemsDesktopBorderWidth?.right}${accordionItemsBorderUnits?.Desktop} ${accordionItemsDesktopBorderWidth?.bottom}${accordionItemsBorderUnits?.Desktop} ${accordionItemsDesktopBorderWidth?.left}${accordionItemsBorderUnits?.Desktop}`;
    const accordionItemsBorderTabletWidth = `${accordionItemsTabBorderWidth?.top}${accordionItemsBorderUnits?.Tablet} ${accordionItemsTabBorderWidth?.right}${accordionItemsBorderUnits?.Tablet} ${accordionItemsTabBorderWidth?.bottom}${accordionItemsBorderUnits?.Tablet} ${accordionItemsTabBorderWidth?.left}${accordionItemsBorderUnits?.Tablet}`;
    const accordionItemsBorderMobileWidth = `${accordionItemsMobileBorderWidth?.top}${accordionItemsBorderUnits?.Mobile} ${accordionItemsMobileBorderWidth?.right}${accordionItemsBorderUnits?.Mobile} ${accordionItemsMobileBorderWidth?.bottom}${accordionItemsBorderUnits?.Mobile} ${accordionItemsMobileBorderWidth?.left}${accordionItemsBorderUnits?.Mobile}`;

    const accordionItemsBorderRadiusDesktopWidth = `${accordionItemsDesktopBorderRadiusWidth?.top}${accordionItemsBorderRadiusUnits?.Desktop} ${accordionItemsDesktopBorderRadiusWidth?.right}${accordionItemsBorderRadiusUnits?.Desktop} ${accordionItemsDesktopBorderRadiusWidth?.bottom}${accordionItemsBorderRadiusUnits?.Desktop} ${accordionItemsDesktopBorderRadiusWidth?.left}${accordionItemsBorderRadiusUnits?.Desktop}`;
    const accordionItemsBorderRadiusTabletWidth = `${accordionItemsTabBorderRadiusWidth?.top}${accordionItemsBorderRadiusUnits?.Tablet} ${accordionItemsTabBorderRadiusWidth?.right}${accordionItemsBorderRadiusUnits?.Tablet} ${accordionItemsTabBorderRadiusWidth?.bottom}${accordionItemsBorderRadiusUnits?.Tablet} ${accordionItemsTabBorderRadiusWidth?.left}${accordionItemsBorderRadiusUnits?.Tablet}`;
    const accordionItemsBorderRadiusMobileWidth = `${accordionItemsMobileBorderRadiusWidth?.top}${accordionItemsBorderRadiusUnits?.Mobile} ${accordionItemsMobileBorderRadiusWidth?.right}${accordionItemsBorderRadiusUnits?.Mobile} ${accordionItemsMobileBorderRadiusWidth?.bottom}${accordionItemsBorderRadiusUnits?.Mobile} ${accordionItemsMobileBorderRadiusWidth?.left}${accordionItemsBorderRadiusUnits?.Mobile}`;

    const accordionMarginDesktopWidth = `${accordionDesktopMargin?.top}${accordionMarginUnits?.Desktop} ${accordionDesktopMargin?.right}${accordionMarginUnits?.Desktop} ${accordionDesktopMargin?.bottom}${accordionMarginUnits?.Desktop} ${accordionDesktopMargin?.left}${accordionMarginUnits?.Desktop}`;
    const accordionMarginTabletWidth = `${accordionTabMargin?.top}${accordionMarginUnits?.Tablet} ${accordionTabMargin?.right}${accordionMarginUnits?.Tablet} ${accordionTabMargin?.bottom}${accordionMarginUnits?.Tablet} ${accordionTabMargin?.left}${accordionMarginUnits?.Tablet}`;
    const accordionMarginMobileWidth = `${accordionMobileMargin?.top}${accordionMarginUnits?.Mobile} ${accordionMobileMargin?.right}${accordionMarginUnits?.Mobile} ${accordionMobileMargin?.bottom}${accordionMarginUnits?.Mobile} ${accordionMobileMargin?.left}${accordionMarginUnits?.Mobile}`;

    const accordionPaddingDesktopWidth = `${accordionDesktopPadding?.top}${accordionPaddingUnits?.Desktop} ${accordionDesktopPadding?.right}${accordionPaddingUnits?.Desktop} ${accordionDesktopPadding?.bottom}${accordionPaddingUnits?.Desktop} ${accordionDesktopPadding?.left}${accordionPaddingUnits?.Desktop}`;
    const accordionPaddingTabletWidth = `${accordionTabPadding?.top}${accordionPaddingUnits?.Tablet} ${accordionTabPadding?.right}${accordionPaddingUnits?.Tablet} ${accordionTabPadding?.bottom}${accordionPaddingUnits?.Tablet} ${accordionTabPadding?.left}${accordionPaddingUnits?.Tablet}`;
    const accordionPaddingMobileWidth = `${accordionMobilePadding?.top}${accordionPaddingUnits?.Mobile} ${accordionMobilePadding?.right}${accordionPaddingUnits?.Mobile} ${accordionMobilePadding?.bottom}${accordionPaddingUnits?.Mobile} ${accordionMobilePadding?.left}${accordionPaddingUnits?.Mobile}`;

    const accordionBorderDesktopWidth = `${accordionDesktopBorderWidth?.top}${accordionBorderUnits?.Desktop} ${accordionDesktopBorderWidth?.right}${accordionBorderUnits?.Desktop} ${accordionDesktopBorderWidth?.bottom}${accordionBorderUnits?.Desktop} ${accordionDesktopBorderWidth?.left}${accordionBorderUnits?.Desktop}`;
    const accordionBorderTabletWidth = `${accordionTabBorderWidth?.top}${accordionBorderUnits?.Tablet} ${accordionTabBorderWidth?.right}${accordionBorderUnits?.Tablet} ${accordionTabBorderWidth?.bottom}${accordionBorderUnits?.Tablet} ${accordionTabBorderWidth?.left}${accordionBorderUnits?.Tablet}`;
    const accordionBorderMobileWidth = `${accordionMobileBorderWidth?.top}${accordionBorderUnits?.Mobile} ${accordionMobileBorderWidth?.right}${accordionBorderUnits?.Mobile} ${accordionMobileBorderWidth?.bottom}${accordionBorderUnits?.Mobile} ${accordionMobileBorderWidth?.left}${accordionBorderUnits?.Mobile}`;

    const accordionBorderRadiusDesktopWidth = `${accordionDesktopBorderRadiusWidth?.top}${accordionBorderRadiusUnits?.Desktop} ${accordionDesktopBorderRadiusWidth?.right}${accordionBorderRadiusUnits?.Desktop} ${accordionDesktopBorderRadiusWidth?.bottom}${accordionBorderRadiusUnits?.Desktop} ${accordionDesktopBorderRadiusWidth?.left}${accordionBorderRadiusUnits?.Desktop}`;
    const accordionBorderRadiusTabletWidth = `${accordionTabBorderRadiusWidth?.top}${accordionBorderRadiusUnits?.Tablet} ${accordionTabBorderRadiusWidth?.right}${accordionBorderRadiusUnits?.Tablet} ${accordionTabBorderRadiusWidth?.bottom}${accordionBorderRadiusUnits?.Tablet} ${accordionTabBorderRadiusWidth?.left}${accordionBorderRadiusUnits?.Tablet}`;
    const accordionBorderRadiusMobileWidth = `${accordionMobileBorderRadiusWidth?.top}${accordionBorderRadiusUnits?.Mobile} ${accordionMobileBorderRadiusWidth?.right}${accordionBorderRadiusUnits?.Mobile} ${accordionMobileBorderRadiusWidth?.bottom}${accordionBorderRadiusUnits?.Mobile} ${accordionMobileBorderRadiusWidth?.left}${accordionBorderRadiusUnits?.Mobile}`;

    const contentBorderDesktopWidth = `${contentDesktopBorderWidth?.top}${contentBorderUnits?.Desktop} ${contentDesktopBorderWidth?.right}${contentBorderUnits?.Desktop} ${contentDesktopBorderWidth?.bottom}${contentBorderUnits?.Desktop} ${contentDesktopBorderWidth?.left}${contentBorderUnits?.Desktop}`;
    const contentBorderTabletWidth = `${contentTabBorderWidth?.top}${contentBorderUnits?.Tablet} ${contentTabBorderWidth?.right}${contentBorderUnits?.Tablet} ${contentTabBorderWidth?.bottom}${contentBorderUnits?.Tablet} ${contentTabBorderWidth?.left}${contentBorderUnits?.Tablet}`;
    const contentBorderMobileWidth = `${contentMobileBorderWidth?.top}${contentBorderUnits?.Mobile} ${contentMobileBorderWidth?.right}${contentBorderUnits?.Mobile} ${contentMobileBorderWidth?.bottom}${contentBorderUnits?.Mobile} ${contentMobileBorderWidth?.left}${contentBorderUnits?.Mobile}`;

    const contentBorderRadiusDesktopWidth = `${contentDesktopBorderRadiusWidth?.top}${contentBorderRadiusUnits?.Desktop} ${contentDesktopBorderRadiusWidth?.right}${contentBorderRadiusUnits?.Desktop} ${contentDesktopBorderRadiusWidth?.bottom}${contentBorderRadiusUnits?.Desktop} ${contentDesktopBorderRadiusWidth?.left}${contentBorderRadiusUnits?.Desktop}`;
    const contentBorderRadiusTabletWidth = `${contentTabBorderRadiusWidth?.top}${contentBorderRadiusUnits?.Tablet} ${contentTabBorderRadiusWidth?.right}${contentBorderRadiusUnits?.Tablet} ${contentTabBorderRadiusWidth?.bottom}${contentBorderRadiusUnits?.Tablet} ${contentTabBorderRadiusWidth?.left}${contentBorderRadiusUnits?.Tablet}`;
    const contentBorderRadiusMobileWidth = `${contentMobileBorderRadiusWidth?.top}${contentBorderRadiusUnits?.Mobile} ${contentMobileBorderRadiusWidth?.right}${contentBorderRadiusUnits?.Mobile} ${contentMobileBorderRadiusWidth?.bottom}${contentBorderRadiusUnits?.Mobile} ${contentMobileBorderRadiusWidth?.left}${contentBorderRadiusUnits?.Mobile}`;
    
    const contentActiveBorderRadiusDesktopWidth = `${contentDesktopActiveBorderRadiusWidth?.top}${contentActiveBorderRadiusUnits?.Desktop} ${contentDesktopActiveBorderRadiusWidth?.right}${contentActiveBorderRadiusUnits?.Desktop} ${contentDesktopActiveBorderRadiusWidth?.bottom}${contentActiveBorderRadiusUnits?.Desktop} ${contentDesktopActiveBorderRadiusWidth?.left}${contentActiveBorderRadiusUnits?.Desktop}`; 
    const contentActiveBorderRadiusTabletWidth = `${contentTabActiveBorderRadiusWidth?.top}${contentActiveBorderRadiusUnits?.Tablet} ${contentTabActiveBorderRadiusWidth?.right}${contentActiveBorderRadiusUnits?.Tablet} ${contentTabActiveBorderRadiusWidth?.bottom}${contentActiveBorderRadiusUnits?.Tablet} ${contentTabActiveBorderRadiusWidth?.left}${contentActiveBorderRadiusUnits?.Tablet}`;
    const contentActiveBorderRadiusMobileWidth = `${contentMobileActiveBorderRadiusWidth?.top}${contentActiveBorderRadiusUnits?.Mobile} ${contentMobileActiveBorderRadiusWidth?.right}${contentActiveBorderRadiusUnits?.Mobile} ${contentMobileActiveBorderRadiusWidth?.bottom}${contentActiveBorderRadiusUnits?.Mobile} ${contentMobileActiveBorderRadiusWidth?.left}${contentActiveBorderRadiusUnits?.Mobile}`;

    // FB Accordion Style
    const fbaccordionItemstyle = `
        .fb-accordion-main-wrapper.${blockID} {
            ${accordionPositionType === 'default' ? `position: relative;` : ''}
            width: 100%;
            ${accordionPositionType !== 'default' ? `position: ${accordionPositionType};` : ''}
            ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionHZOrientationType === 'left' && accordionHZLeftOffset?.Desktop ? `left: ${accordionHZLeftOffset?.Desktop}${accordionHZLeftOffsetUnits?.Desktop};` : ''}
            ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionHZOrientationType === 'right' && accordionHZRightOffset?.Desktop ? `right: ${accordionHZRightOffset?.Desktop}${accordionHZRightOffsetUnits?.Desktop};` : ''}
            ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionVROrientationType === 'top' && accordionVRTopOffset?.Desktop ? `top: ${accordionVRTopOffset?.Desktop}${accordionVRTopOffsetUnits?.Desktop};` : ''}
            ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionVROrientationType === 'bottom' && accordionVRBottomOffset?.Desktop ? `bottom: ${accordionVRBottomOffset?.Desktop}${accordionVRBottomOffsetUnits?.Desktop};` : ''}
            ${accordionZIndex?.Desktop ? `z-index: ${accordionZIndex?.Desktop};` : ''}
            ${accordionOverflow !== 'default' ? `overflow: ${accordionOverflow};` : ''}
        }
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-wrapper {
            position: relative;
            ${accordionPaddingDesktopWidth && accordionDesktopPadding?.top ? `padding: ${accordionPaddingDesktopWidth};` : ''}
            ${accordionMarginDesktopWidth && accordionDesktopMargin?.top ? `margin: ${accordionMarginDesktopWidth};` : ''}
            ${accordionBorder !== 'none' ? `border-style: ${accordionBorder};` : ''}
            ${accordionBorderDesktopWidth && accordionDesktopBorderWidth?.top ? `border-width: ${accordionBorderDesktopWidth};` : ''}
            ${accordionBorderColor ? `border-color: ${accordionBorderColor};` : ''}
            ${accordionBorderRadiusDesktopWidth && accordionDesktopBorderRadiusWidth?.top ? `border-radius: ${accordionBorderRadiusDesktopWidth};` : ''}
            ${accordionBgType === "gradient"
            ? `background: ${accordionBgCustomGradientSwitcher && accordionBgCustomGradientInputValue
                ? accordionBgCustomGradientInputValue
                : accordionBgGradientColor
            };`
            : accordionBgImageUrl !== undefined && accordionBgImageUrl !== null && accordionBgImageUrl !== ""
                ? `
                    ${accordionBgImageUrl !== undefined ? `background-image: url(${accordionBgImageUrl});` : ''}
                    ${accordionBgImagePosition !== undefined ? `background-position: ${accordionBgImagePosition};` : ''}
                    ${accordionBgImageAttachment !== undefined ? `background-attachment: ${accordionBgImageAttachment};` : ''}
                    ${accordionBgImageRepeat !== undefined ? `background-repeat: ${accordionBgImageRepeat};` : ''}
                    ${accordionBgImageSize !== undefined ? `background-size: ${accordionBgImageSize};` : ''}
                    `
                : accordionBgClassicColor ? `background: ${accordionBgClassicColor};` : ''
        }
            ${accordionGlobalBoxShadowCssValue ? `box-shadow: ${accordionGlobalBoxShadowCssValue};` : ''}
            overflow: hidden;
            transition: all .3s ease-in-out;
        }
        
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-wrapper:hover {
            ${accordionBgHoverType === "gradient"
            ? `background: ${accordionBgHoverCustomGradientSwitcher && accordionBgHoverCustomGradientInputValue
                ? accordionBgHoverCustomGradientInputValue
                : accordionBgHoverGradientColor
            };`
            : accordionBgHoverImageUrl !== undefined && accordionBgHoverImageUrl !== null && accordionBgHoverImageUrl !== ""
                ? `
                    ${accordionBgHoverImageUrl !== undefined ? `background-image: url(${accordionBgHoverImageUrl});` : ''}
                    ${accordionBgHoverImagePosition !== undefined ? `background-position: ${accordionBgHoverImagePosition};` : ''}
                    ${accordionBgHoverImageAttachment !== undefined ? `background-attachment: ${accordionBgHoverImageAttachment};` : ''}
                    ${accordionBgHoverImageRepeat !== undefined ? `background-repeat: ${accordionBgHoverImageRepeat};` : ''}
                    ${accordionBgHoverImageSize !== undefined ? `background-size: ${accordionBgHoverImageSize};` : ''}
                    `
                : accordionBgHoverClassicColor ? `background: ${accordionBgHoverClassicColor};` : ''
            }
            ${accordionBorderHoverColor ? `border-color: ${accordionBorderHoverColor};` : ''}
            ${accordionGlobalHoverBoxShadowCssValue ? `box-shadow: ${accordionGlobalHoverBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper.active .fb-accordion-title{
            ${titleActiveColor ? `color: ${titleActiveColor};` : ''}
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper.active .fb-accordion-icon,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper.active .fb-accordion-tab-icon,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper.active .fb-accordion-expanded-icon {
            ${titleActiveColor ? `fill: ${titleActiveColor};` : ''}
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper.active {
            ${titleBgActiveColor ? `background: ${titleBgActiveColor};` : ''}
            ${accordionItemsBorderActiveColor ? `border-color: ${accordionItemsBorderActiveColor};` : ''}
        } 

        .${blockID}.fb-accordion-item-main-wrapper.current-tab .fb-accordion-item-wrapper,
        .${blockID}.fb-accordion-item-main-wrapper.active .fb-accordion-item-wrapper {
            ${contentBgActiveColor ? `background: ${contentBgActiveColor} !important;` : ''}
            ${accordionItemsContentBorderActiveColor ? `border-color: ${accordionItemsContentBorderActiveColor} !important;` : ''}
            ${contentActiveBorderRadiusDesktopWidth && contentDesktopActiveBorderRadiusWidth?.top ? `border-radius: ${contentActiveBorderRadiusDesktopWidth} !important;` : ''}
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
            ${titleBgType === "gradient"
            ? `background: ${titleBgCustomGradientSwitcher && titleBgCustomGradientInputValue
                ? titleBgCustomGradientInputValue
                : titleBgGradientColor
            };`
            : titleBgImageUrl !== undefined && titleBgImageUrl !== null && titleBgImageUrl !== ""
                ? `
                    ${titleBgImageUrl !== undefined ? `background-image: url(${titleBgImageUrl});` : ''}
                    ${titleBgImagePosition !== undefined ? `background-position: ${titleBgImagePosition};` : ''}
                    ${titleBgImageAttachment !== undefined ? `background-attachment: ${titleBgImageAttachment};` : ''}
                    ${titleBgImageRepeat !== undefined ? `background-repeat: ${titleBgImageRepeat};` : ''}
                    ${titleBgImageSize !== undefined ? `background-size: ${titleBgImageSize};` : ''}
                    `
                : titleBgClassicColor ? `background: ${titleBgClassicColor};` : ''
            }
            display: flex;
            align-items: center;
            cursor: pointer;
            ${titleSpacing?.Desktop ? `gap: ${titleSpacing?.Desktop}${titleSpacingUnits?.Desktop};` : ''}
            ${accordionItemsPaddingDesktopWidth && accordionItemsDesktopPadding?.top ? `padding: ${accordionItemsPaddingDesktopWidth};` : ''}
            ${accordionItemsBorder ? `border-style: ${accordionItemsBorder};` : ''}
            ${accordionItemsBorderColor ? `border-color: ${accordionItemsBorderColor};` : ''}
            ${accordionItemsBorderDesktopWidth && accordionItemsDesktopBorderWidth?.top ? `border-width: ${accordionItemsBorderDesktopWidth};` : ''}
            ${accordionItemsBorderRadiusDesktopWidth && accordionItemsDesktopBorderRadiusWidth?.top ? `border-radius: ${accordionItemsBorderRadiusDesktopWidth};` : ''}
            ${accordionItemBoxShadowCssValue ? `box-shadow: ${accordionItemBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover {
            ${titleBgHoverType === "gradient"
            ? `background: ${titleBgHoverCustomGradientSwitcher && titleBgHoverCustomGradientInputValue
                ? titleBgHoverCustomGradientInputValue
                : titleBgHoverGradientColor
            };`
            : titleBgHoverImageUrl !== undefined && titleBgHoverImageUrl !== null && titleBgHoverImageUrl !== ""
                ? `
                    ${titleBgHoverImageUrl !== undefined ? `background-image: url(${titleBgHoverImageUrl});` : ''}
                    ${titleBgHoverImagePosition !== undefined ? `background-position: ${titleBgHoverImagePosition};` : ''}
                    ${titleBgHoverImageAttachment !== undefined ? `background-attachment: ${titleBgHoverImageAttachment};` : ''}
                    ${titleBgHoverImageRepeat !== undefined ? `background-repeat: ${titleBgHoverImageRepeat};` : ''}
                    ${titleBgHoverImageSize !== undefined ? `background-size: ${titleBgHoverImageSize};` : ''}
                    `
                : titleBgHoverClassicColor ? `background: ${titleBgHoverClassicColor};` : ''
        }
            ${accordionItemsBorderHoverColor ? `border-color: ${accordionItemsBorderHoverColor};` : ''}
            ${accordionItemHoverBoxShadowCssValue ? `box-shadow: ${accordionItemHoverBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
            ${titleGlobalTypoSwitcher?.fontFamily === true && titleGlobalTypographyData?.fontFamily ? `font-family: ${titleGlobalTypographyData?.fontFamily};` : ''}
            ${titleGlobalTypoSwitcher?.fontSize === true && titleGlobalTypographyData?.fontSize ? `font-size: ${titleGlobalTypographyData?.fontSize};` : ''}
            ${titleGlobalTypoSwitcher?.fontWeight === true && titleGlobalTypographyData?.fontWeight ? `font-weight: ${titleGlobalTypographyData?.fontWeight};` : ''}
            ${titleGlobalTypoSwitcher?.fontStyle === true && titleGlobalTypographyData?.fontStyle ? `font-style: ${titleGlobalTypographyData?.fontStyle};` : ''}
            ${titleGlobalTypoSwitcher?.textTransform === true && titleGlobalTypographyData?.textTransform ? `text-transform: ${titleGlobalTypographyData?.textTransform};` : ''}
            ${titleGlobalTypoSwitcher?.textDecoration === true && titleGlobalTypographyData?.textDecoration ? `text-decoration: ${titleGlobalTypographyData?.textDecoration};` : ''}
            ${titleGlobalTypoSwitcher?.letterSpacing === true && titleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${titleGlobalTypographyData?.letterSpacing};` : ''}
            ${titleGlobalTypoSwitcher?.lineHeight === true && titleGlobalTypographyData?.lineHeight ? `line-height: ${titleGlobalTypographyData?.lineHeight};` : ''}
            
            ${titleGlobalTypoSwitcher?.fontFamily === false && titleFontFamily && titleFontFamily !== 'default' ? `font-family: ${titleFontFamily};` : ''}
            ${titleGlobalTypoSwitcher?.fontSize === false && titleFontSize?.Desktop ? `font-size: ${titleFontSize?.Desktop}${titleFontSizeUnits?.Desktop};` : ''}
            ${titleGlobalTypoSwitcher?.fontWeight === false && titleFontWeight ? `font-weight: ${titleFontWeight};` : ''}
            ${titleGlobalTypoSwitcher?.fontStyle === false && titleFontStyle ? `font-style: ${titleFontStyle};` : ''}
            ${titleGlobalTypoSwitcher?.textTransform === false && titleTextTransform ? `text-transform: ${titleTextTransform};` : ''}
            ${titleGlobalTypoSwitcher?.textDecoration === false && titleTextDecoration ? `text-decoration: ${titleTextDecoration};` : ''}
            ${titleGlobalTypoSwitcher?.letterSpacing === false && titleLetterSpacing?.Desktop ? `letter-spacing: ${titleLetterSpacing?.Desktop}${titleLetterSpacingUnits?.Desktop};` : ''}
            ${titleGlobalTypoSwitcher?.lineHeight === false && titleLineHeight?.Desktop ? `line-height: ${titleLineHeight?.Desktop}${titleLineHeightUnits?.Desktop};` : ''}
            ${titleColor ? `color: ${titleColor};` : ''}
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title {
            ${titleHoverColor ? `color: ${titleHoverColor};` : ''}
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon svg,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon img,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon svg,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon img,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon svg,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon img {
            width: 100%;
            height: 100%;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
            ${titleIconColor ? `fill: ${titleIconColor};` : ''}
            ${titleIconSize?.Desktop ? `
                width: ${titleIconSize?.Desktop}${titleIconSizeUnits?.Desktop}; 
                min-width: ${titleIconSize?.Desktop}${titleIconSizeUnits?.Desktop}; 
                height: ${titleIconSize?.Desktop}${titleIconSizeUnits?.Desktop};`
            : ''}
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-tab-icon,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-expanded-icon,
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-icon {
            ${titleIconHoverColor ? `fill: ${titleIconHoverColor};` : ''}
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
            display: flex;
            flex-direction: column;
            ${accordionItemGap?.Desktop ? `gap: ${accordionItemGap?.Desktop}${accordionItemGapUnits?.Desktop};` : ''}
            padding: 0;
            margin: 0;
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper {
            ${titleAlignment === 'left' ? 'justify-content: left;' : ''}
            ${titleAlignment === 'center' ? 'justify-content: center;' : ''}
            ${titleAlignment === 'right' ? 'justify-content: right;' : ''}
            ${titleAlignment === 'between' ? 'justify-content: space-between;' : ''}
            ${iconPosition === 'left' ? 'flex-direction: row-reverse;' : ''}
            ${iconPosition === 'right' ? 'flex-direction: row;' : ''}
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
            display: inline-flex;
            align-items: center;
            ${prefixSuffixSpacing?.Desktop ? `gap: ${prefixSuffixSpacing?.Desktop}${prefixSuffixSpacingUnits?.Desktop};` : ''}
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
            ${titlePrefixIconSize?.Desktop ? `width: ${titlePrefixIconSize?.Desktop}${titlePrefixIconSizeUnits?.Desktop}; height: ${titlePrefixIconSize?.Desktop}${titlePrefixIconSizeUnits?.Desktop};` : ''}
            display: flex;
            flex-shrink: 0;
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
            ${titleSuffixIconSize?.Desktop ? `width: ${titleSuffixIconSize?.Desktop}${titleSuffixIconSizeUnits?.Desktop}; height: ${titleSuffixIconSize?.Desktop}${titleSuffixIconSizeUnits?.Desktop};` : ''}
            display: flex;
            flex-shrink: 0;
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix img,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix svg,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix img,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix svg {
            margin: 0;
            padding: 0;
            min-width: 100%;
            width: 100%;
            height: 100%;
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix img,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix .components-button,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix img,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix .components-button {
            margin: 0 !important;
            padding: 0 !important;
            min-width: 100% !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper {
            ${contentBgType === "gradient"
            ? `background: ${contentBgCustomGradientSwitcher && contentBgCustomGradientInputValue
                ? contentBgCustomGradientInputValue
                : contentBgGradientColor
            };`
            : contentBgImageUrl !== undefined && contentBgImageUrl !== null && contentBgImageUrl !== ""
                ? `
                ${contentBgImageUrl !== undefined ? `background-image: url(${contentBgImageUrl});` : ''}
                ${contentBgImagePosition !== undefined ? `background-position: ${contentBgImagePosition};` : ''}
                ${contentBgImageAttachment !== undefined ? `background-attachment: ${contentBgImageAttachment};` : ''}
                ${contentBgImageRepeat !== undefined ? `background-repeat: ${contentBgImageRepeat};` : ''}
                ${contentBgImageSize !== undefined ? `background-size: ${contentBgImageSize};` : ''}
                `
                : contentBgClassicColor ? `background: ${contentBgClassicColor};` : ''
        }
            ${contentBoxShadowCssValue ? `box-shadow: ${contentBoxShadowCssValue};` : ''}
            ${contentBorder ? `border-style: ${contentBorder};` : ''}
            ${contentBorderDesktopWidth && contentDesktopBorderWidth?.top ? `border-width: ${contentBorderDesktopWidth};` : ''}  
            ${contentBorderColor ? `border-color: ${contentBorderColor};` : ''}
            ${contentBorderRadiusDesktopWidth && contentDesktopBorderRadiusWidth?.top ? `border-radius: ${contentBorderRadiusDesktopWidth};` : ''}
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper:hover {
            ${contentBgHoverType === "gradient"
            ? `background: ${contentBgHoverCustomGradientSwitcher && contentBgHoverCustomGradientInputValue
                ? contentBgHoverCustomGradientInputValue
                : contentBgHoverGradientColor
            };`
            : contentBgHoverImageUrl !== undefined && contentBgHoverImageUrl !== null && contentBgHoverImageUrl !== ""
                ? `
                    ${contentBgHoverImageUrl !== undefined ? `background-image: url(${contentBgHoverImageUrl});` : ''}
                    ${contentBgHoverImagePosition !== undefined ? `background-position: ${contentBgHoverImagePosition};` : ''}
                    ${contentBgHoverImageAttachment !== undefined ? `background-attachment: ${contentBgHoverImageAttachment};` : ''}
                    ${contentBgHoverImageRepeat !== undefined ? `background-repeat: ${contentBgHoverImageRepeat};` : ''}
                    ${contentBgHoverImageSize !== undefined ? `background-size: ${contentBgHoverImageSize};` : ''}
                `
                : contentBgHoverClassicColor ? `background: ${contentBgHoverClassicColor};` : ''
        }
            ${contentHoverBoxShadowCssValue ? `box-shadow: ${contentHoverBoxShadowCssValue};` : ''}
            ${contentBorderHoverColor ? `border-color: ${contentBorderHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }


        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper.active .fb-accordion-tab-icon,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon {
            display: none;
            position: absolute;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
        .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-title-wrapper.active .fb-accordion-expanded-icon {
            display: block;
            position: static;
            visibility: visible;
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
        }
        
        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-accordion-item-main-wrapper.current-tab .fb-accordion-item-wrapper,
            .${blockID}.fb-accordion-item-main-wrapper.active .fb-accordion-item-wrapper  {
                ${contentActiveBorderRadiusTabletWidth && contentTabActiveBorderRadiusWidth?.top ? `border-radius: ${contentActiveBorderRadiusTabletWidth} !important;` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} {
                ${accordionPositionType !== 'default' ? `position: ${accordionPositionType};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionHZOrientationType === 'left' && accordionHZLeftOffset?.Tablet ? `left: ${accordionHZLeftOffset?.Tablet}${accordionHZLeftOffsetUnits?.Tablet};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionHZOrientationType === 'right' && accordionHZRightOffset?.Tablet ? `right: ${accordionHZRightOffset?.Tablet}${accordionHZRightOffsetUnits?.Tablet};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionVROrientationType === 'top' && accordionVRTopOffset?.Tablet ? `top: ${accordionVRTopOffset?.Tablet}${accordionVRTopOffsetUnits?.Tablet};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionVROrientationType === 'bottom' && accordionVRBottomOffset?.Tablet ? `bottom: ${accordionVRBottomOffset?.Tablet}${accordionVRBottomOffsetUnits?.Tablet};` : ''}
                ${accordionZIndex?.Tablet ? `z-index: ${accordionZIndex?.Tablet};` : ''}
            }
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-wrapper {
                ${accordionPaddingTabletWidth && accordionTabPadding?.top ? `padding: ${accordionPaddingTabletWidth};` : ''}  
                ${accordionMarginTabletWidth && accordionTabMargin?.top ? `margin: ${accordionMarginTabletWidth};` : ''}
                ${accordionBorderTabletWidth && accordionTabBorderWidth?.top ? `border-width: ${accordionBorderTabletWidth};` : ''}
                ${accordionBorderRadiusTabletWidth && accordionTabBorderRadiusWidth?.top ? `border-radius: ${accordionBorderRadiusTabletWidth};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                ${titleIconSize?.Tablet ? `
                    width: ${titleIconSize?.Tablet}${titleIconSizeUnits?.Tablet}; 
                    min-width: ${titleIconSize?.Tablet}${titleIconSizeUnits?.Tablet}; 
                    height: ${titleIconSize?.Tablet}${titleIconSizeUnits?.Tablet};`
            : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                ${titleGlobalTypoSwitcher?.fontSize === false && titleFontSize?.Tablet ? `font-size: ${titleFontSize?.Tablet}${titleFontSizeUnits?.Tablet};` : ''}
                ${titleGlobalTypoSwitcher?.letterSpacing === false && titleLetterSpacing?.Tablet ? `letter-spacing: ${titleLetterSpacing?.Tablet}${titleLetterSpacingUnits?.Tablet};` : ''}
                ${titleGlobalTypoSwitcher?.lineHeight === false && titleLineHeight?.Tablet ? `line-height: ${titleLineHeight?.Tablet}${titleLineHeightUnits?.Tablet};` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                ${accordionItemGap?.Tablet ? `gap: ${accordionItemGap?.Tablet}${accordionItemGapUnits?.Tablet};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
                ${titleSpacing?.Tablet ? `gap: ${titleSpacing?.Tablet}${titleSpacingUnits?.Tablet};` : ''}
                ${accordionItemsPaddingTabletWidth && accordionItemsTabPadding?.top ? `padding: ${accordionItemsPaddingTabletWidth};` : ''}
                ${accordionItemsBorderTabletWidth && accordionItemsTabBorderWidth?.top ? `border-width: ${accordionItemsBorderTabletWidth};` : ''}
                ${accordionItemsBorderRadiusTabletWidth && accordionItemsTabBorderRadiusWidth?.top ? `border-radius: ${accordionItemsBorderRadiusTabletWidth};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                ${prefixSuffixSpacing?.Tablet ? `gap: ${prefixSuffixSpacing?.Tablet}${prefixSuffixSpacingUnits?.Tablet};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-prefix {
                ${titlePrefixIconSize?.Tablet ? `width: ${titlePrefixIconSize?.Tablet}${titlePrefixIconSizeUnits?.Tablet}; height: ${titlePrefixIconSize?.Tablet}${titlePrefixIconSizeUnits?.Tablet};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-suffix {
                ${titleSuffixIconSize?.Tablet ? `width: ${titleSuffixIconSize?.Tablet}${titleSuffixIconSizeUnits?.Tablet}; height: ${titleSuffixIconSize?.Tablet}${titleSuffixIconSizeUnits?.Tablet};` : ''}
            }
            
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper {
                ${contentBorderTabletWidth && contentTabBorderWidth?.top ? `border-width: ${contentBorderTabletWidth};` : ''}
                ${contentBorderRadiusTabletWidth && contentTabBorderRadiusWidth?.top ? `border-radius: ${contentBorderRadiusTabletWidth};` : ''}
            }
        }
        
        @media only screen and (max-width: 767px) {
                    
            .${blockID}.fb-accordion-item-main-wrapper.current-tab .fb-accordion-item-wrapper,
            .${blockID}.fb-accordion-item-main-wrapper.active .fb-accordion-item-wrapper  {
                ${contentActiveBorderRadiusMobileWidth && contentMobileActiveBorderRadiusWidth?.top ? `border-radius: ${contentActiveBorderRadiusMobileWidth} !important;` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} {
                ${accordionPositionType !== 'default' ? `position: ${accordionPositionType};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionHZOrientationType === 'left' && accordionHZLeftOffset?.Mobile ? `left: ${accordionHZLeftOffset?.Mobile}${accordionHZLeftOffsetUnits?.Mobile};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionHZOrientationType === 'right' && accordionHZRightOffset?.Mobile ? `right: ${accordionHZRightOffset?.Mobile}${accordionHZRightOffsetUnits?.Mobile};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionVROrientationType === 'top' && accordionVRTopOffset?.Mobile ? `top: ${accordionVRTopOffset?.Mobile}${accordionVRTopOffsetUnits?.Mobile};` : ''}
                ${accordionPositionType !== 'default' && accordionPositionType !== 'relative' && accordionVROrientationType === 'bottom' && accordionVRBottomOffset?.Mobile ? `bottom: ${accordionVRBottomOffset?.Mobile}${accordionVRBottomOffsetUnits?.Mobile};` : ''}
                ${accordionZIndex?.Mobile ? `z-index: ${accordionZIndex?.Mobile};` : ''}
            }
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-wrapper {
                ${accordionPaddingMobileWidth && accordionMobilePadding?.top ? `padding: ${accordionPaddingMobileWidth};` : ''}
                ${accordionMarginMobileWidth && accordionMobileMargin?.top ? `margin: ${accordionMarginMobileWidth};` : ''}
                ${accordionBorderMobileWidth && accordionMobileBorderWidth?.top ? `border-width: ${accordionBorderMobileWidth};` : ''}
                ${accordionBorderRadiusMobileWidth && accordionMobileBorderRadiusWidth?.top ? `border-radius: ${accordionBorderRadiusMobileWidth};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-tab-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-expanded-icon,
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-icon {
                ${titleIconSize?.Mobile ? `
                    width: ${titleIconSize?.Mobile}${titleIconSizeUnits?.Mobile}; 
                    min-width: ${titleIconSize?.Mobile}${titleIconSizeUnits?.Mobile}; 
                    height: ${titleIconSize?.Mobile}${titleIconSizeUnits?.Mobile};`
            : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title {
                ${titleGlobalTypoSwitcher?.fontSize === false && titleFontSize?.Mobile ? `font-size: ${titleFontSize?.Mobile}${titleFontSizeUnits?.Mobile};` : ''}
                ${titleGlobalTypoSwitcher?.letterSpacing === false && titleLetterSpacing?.Mobile ? `letter-spacing: ${titleLetterSpacing?.Mobile}${titleLetterSpacingUnits?.Mobile};` : ''}
                ${titleGlobalTypoSwitcher?.lineHeight === false && titleLineHeight?.Mobile ? `line-height: ${titleLineHeight?.Mobile}${titleLineHeightUnits?.Mobile};` : ''}
            }

            .fb-accordion-main-wrapper.${blockID} .fb-accordion-inner .block-editor-block-list__layout {
                ${accordionItemGap?.Mobile ? `gap: ${accordionItemGap?.Mobile}${accordionItemGapUnits?.Mobile};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper {
                ${titleSpacing?.Mobile ? `gap: ${titleSpacing?.Mobile}${titleSpacingUnits?.Mobile};` : ''}
                ${accordionItemsPaddingMobileWidth && accordionItemsMobilePadding?.top ? `padding: ${accordionItemsPaddingMobileWidth};` : ''}
                ${accordionItemsBorderMobileWidth && accordionItemsMobileBorderWidth?.top ? `border-width: ${accordionItemsBorderMobileWidth};` : ''}
                ${accordionItemsBorderRadiusMobileWidth && accordionItemsMobileBorderRadiusWidth?.top ? `border-radius: ${accordionItemsBorderRadiusMobileWidth};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner {
                ${prefixSuffixSpacing?.Mobile ? `gap: ${prefixSuffixSpacing?.Mobile}${prefixSuffixSpacingUnits?.Mobile};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-prefix {
                ${titlePrefixIconSize?.Mobile ? `width: ${titlePrefixIconSize?.Mobile}${titlePrefixIconSizeUnits?.Mobile}; height: ${titlePrefixIconSize?.Mobile}${titlePrefixIconSizeUnits?.Mobile};` : ''}
            }

            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-title-inner .fb-accordion-title-suffix {
                ${titleSuffixIconSize?.Mobile ? `width: ${titleSuffixIconSize?.Mobile}${titleSuffixIconSizeUnits?.Mobile}; height: ${titleSuffixIconSize?.Mobile}${titleSuffixIconSizeUnits?.Mobile};` : ''}
            }
            
            .fb-accordion-main-wrapper.${blockID} .fb-accordion-item-main-wrapper .fb-accordion-item-wrapper {
                ${contentBorderMobileWidth && contentMobileBorderWidth?.top ? `border-width: ${contentBorderMobileWidth};` : ''}
                ${contentBorderRadiusMobileWidth && contentMobileBorderRadiusWidth?.top ? `border-radius: ${contentBorderRadiusMobileWidth};` : ''}
            }
        }

    `;

    const customCss = getCustomCss(accordionCustomCSS, `.${blockID}`);
    return `${fbaccordionItemstyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateAccordionStyle;