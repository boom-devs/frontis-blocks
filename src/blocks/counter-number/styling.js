/**
 * Counter Number Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateCounterNumberStyle = (attributes) => {
    const {
        blockID,
        counterAlignment,
        // deviceType,
        counterNumberStart,
        counterNumberEnd,
        counterDuration,
        counterPrefix,
        counterPrefixSwitch,
        counterSuffix,
        counterSuffixSwitch,
        counterTitle,
        counterTitleSwitch,
        counterTitleTag,
        showThousandsSeparator,
        showThousandsSeparatorType,
        icon,
        iconPosition,
        titlePosition,
        counterCardAlignment,
        mediaSwitcher,
        counterMediaId,
        counterMediaUrl,
        counterMediaAlt,
        counterMediaImagedisplay,

        counterItemSize,
        counterItemSizeUnits,
        counterItemRatio,
        counterItemHeight,
        counterItemHeightUnits,

        // Item Border Type
        counterItemBorder,
        counterItemBorderColorSwitcher,
        counterItemBorderColor,
        counterItemBorderHoverColor,

        counterItemBorderTypeUnits,
        counterItemBorderTypeDesktop,
        counterItemBorderTypeTablet,
        counterItemBorderTypeMobile,
        counterItemBorderTypeLink,

        // Item Border Radius
        counterItemBorderRadiusUnits,
        counterItemBorderRadiusDesktop,
        counterItemBorderRadiusTablet,
        counterItemBorderRadiusMobile,
        counterItemBorderRadiusLink,

        // Item Background attributes
        counterItemBgColorSwitcher,
        counterItemBgColor,
        counterItemBgHoverColor,

        // Item Padding
        counterItemPaddingUnits,
        counterItemPaddingDesktop,
        counterItemPaddingTablet,
        counterItemPaddingMobile,
        counterItemPaddingLink,

        // Item Margin
        counterItemMarginUnits,
        counterItemMarginDesktop,
        counterItemMarginTablet,
        counterItemMarginMobile,
        counterItemMarginLink,

        //Counter Icon attributes
        counterIconMarginUnits,
        counterIconMarginDesktop,
        counterIconMarginTablet,
        counterIconMarginMobile,
        counterIconMarginLink,
        counterIconColorSwitcher,
        counterIconColor,
        counterIconHoverColor,
        counterIconSize,
        counterIconSizeUnits,
        counterIconSizeRatio,

        // Gap between icon and content
        counterItemGap,
        counterItemGapUnits,

        //Counter Number attributes
        counterNumberFontColorSwitcher,
        counterNumberFontColor,
        counterNumberFontHoverColor,
        counterNumberGlobalTypoSwitcher,
        counterNumberGlobalTypographyData,
        counterNumberGlobalTypoType,
        counterNumberGlobalTypoOption,
        counterNumberFontFamily,
        counterNumberFontSize,
        counterNumberFontSizeUnits,
        counterNumberFontWeight,
        counterNumberFontStyle,
        counterNumberTextTransform,
        counterNumberTextDecoration,
        counterNumberLetterSpacing,
        counterNumberLetterSpacingUnits,
        counterNumberLineHeight,
        counterNumberLineHeightUnits,

        counterNumberMarginUnits,
        counterNumberMarginDesktop,
        counterNumberMarginTablet,
        counterNumberMarginMobile,
        counterNumberMarginLink,

        //Counter Number Title attributes
        counterNumberTitleGlobalTypoSwitcher,
        counterNumberTitleGlobalTypographyData,
        counterNumberTitleGlobalTypoType,
        counterNumberTitleGlobalTypoOption,
        counterNumberTitleFontFamily,
        counterNumberTitleFontSize,
        counterNumberTitleFontSizeUnits,
        counterNumberTitleFontWeight,
        counterNumberTitleFontStyle,
        counterNumberTitleTextTransform,
        counterNumberTitleTextDecoration,
        counterNumberTitleLetterSpacing,
        counterNumberTitleLetterSpacingUnits,
        counterNumberTitleLineHeight,
        counterNumberTitleLineHeightUnits,
        counterNumberTitleFontColorSwitcher,
        counterNumberTitleFontColor,
        counterNumberTitleFontHoverColor,

        counterNumberTitleMarginUnits,
        counterNumberTitleMarginDesktop,
        counterNumberTitleMarginTablet,
        counterNumberTitleMarginMobile,
        counterNumberTitleMarginLink,

        //Global attributes
        counterGlobalZIndex,
        counterOverflow,
        counterGlobalPaddingUnits,
        counterGlobalPaddingDesktop,
        counterGlobalPaddingTablet,
        counterGlobalPaddingMobile,
        counterGlobalPaddingLink,
        counterGlobalMarginUnits,
        counterGlobalMarginDesktop,
        counterGlobalMarginTablet,
        counterGlobalMarginMobile,
        counterGlobalMarginLink,
        counterGlobalBgColorSwitcher,
        counterGlobalBgColor,
        counterGlobalBgHoverColor,
        counterGlobalBorder,
        counterGlobalBorderColorSwitcher,
        counterGlobalBorderColor,
        counterGlobalBorderHoverColor,
        counterGlobalBorderUnits,
        counterGlobalBorderDesktop,
        counterGlobalBorderTablet,
        counterGlobalBorderMobile,
        counterGlobalBorderLink,
        counterGlobalBorderRadiusUnits,
        counterGlobalBorderRadiusDesktop,
        counterGlobalBorderRadiusTablet,
        counterGlobalBorderRadiusMobile,
        counterGlobalBorderRadiusLink,
        counterGlobalBoxShadowValues,
        counterGlobalBoxShadowCssValue,

        counterDesktopSwitcher,
        counterTabletSwitcher,
        counterMobileSwitcher,

        // Position
        counterPositionType,
        counterHZOrientationType,
        counterVROrientationType,
        counterHZLeftOffset,
        counterHZLeftOffsetUnits,
        counterHZRightOffset,
        counterHZRightOffsetUnits,
        counterVRTopOffset,
        counterVRTopOffsetUnits,
        counterVRBottomOffset,
        counterVRBottomOffsetUnits,

        counterGlobalWraperCustomCSS,
        counterGlobalWraperID,
        counterGlobalWraperClass,
        counterPresetStyle
    } = attributes;

    const counterItemDesktopBorderRadius = `${counterItemBorderRadiusDesktop?.top}${counterItemBorderRadiusUnits?.Desktop} ${counterItemBorderRadiusDesktop?.right}${counterItemBorderRadiusUnits?.Desktop} ${counterItemBorderRadiusDesktop?.bottom}${counterItemBorderRadiusUnits?.Desktop} ${counterItemBorderRadiusDesktop?.left}${counterItemBorderRadiusUnits?.Desktop}`;
    const counterItemTabletBorderRadius = `${counterItemBorderRadiusTablet?.top}${counterItemBorderRadiusUnits?.Tablet} ${counterItemBorderRadiusTablet?.right}${counterItemBorderRadiusUnits?.Tablet} ${counterItemBorderRadiusTablet?.bottom}${counterItemBorderRadiusUnits?.Tablet} ${counterItemBorderRadiusTablet?.left}${counterItemBorderRadiusUnits?.Tablet}`;
    const counterItemMobileBorderRadius = `${counterItemBorderRadiusMobile?.top}${counterItemBorderRadiusUnits?.Mobile} ${counterItemBorderRadiusMobile?.right}${counterItemBorderRadiusUnits?.Mobile} ${counterItemBorderRadiusMobile?.bottom}${counterItemBorderRadiusUnits?.Mobile} ${counterItemBorderRadiusMobile?.left}${counterItemBorderRadiusUnits?.Mobile}`;

    const counterItemDesktopPadding = `${counterItemPaddingDesktop?.top}${counterItemPaddingUnits?.Desktop} ${counterItemPaddingDesktop?.right}${counterItemPaddingUnits?.Desktop} ${counterItemPaddingDesktop?.bottom}${counterItemPaddingUnits?.Desktop} ${counterItemPaddingDesktop?.left}${counterItemPaddingUnits?.Desktop}`;
    const counterItemTabletPadding = `${counterItemPaddingTablet?.top}${counterItemPaddingUnits?.Tablet} ${counterItemPaddingTablet?.right}${counterItemPaddingUnits?.Tablet} ${counterItemPaddingTablet?.bottom}${counterItemPaddingUnits?.Tablet} ${counterItemPaddingTablet?.left}${counterItemPaddingUnits?.Tablet}`;
    const counterItemMobilePadding = `${counterItemPaddingMobile?.top}${counterItemPaddingUnits?.Mobile} ${counterItemPaddingMobile?.right}${counterItemPaddingUnits?.Mobile} ${counterItemPaddingMobile?.bottom}${counterItemPaddingUnits?.Mobile} ${counterItemPaddingMobile?.left}${counterItemPaddingUnits?.Mobile}`;

    const counterItemDesktopMargin = `${counterItemMarginDesktop?.top}${counterItemMarginUnits?.Desktop} ${counterItemMarginDesktop?.right}${counterItemMarginUnits?.Desktop} ${counterItemMarginDesktop?.bottom}${counterItemMarginUnits?.Desktop} ${counterItemMarginDesktop?.left}${counterItemMarginUnits?.Desktop}`;
    const counterItemTabletMargin = `${counterItemMarginTablet?.top}${counterItemMarginUnits?.Tablet} ${counterItemMarginTablet?.right}${counterItemMarginUnits?.Tablet} ${counterItemMarginTablet?.bottom}${counterItemMarginUnits?.Tablet} ${counterItemMarginTablet?.left}${counterItemMarginUnits?.Tablet}`;
    const counterItemMobileMargin = `${counterItemMarginMobile?.top}${counterItemMarginUnits?.Mobile} ${counterItemMarginMobile?.right}${counterItemMarginUnits?.Mobile} ${counterItemMarginMobile?.bottom}${counterItemMarginUnits?.Mobile} ${counterItemMarginMobile?.left}${counterItemMarginUnits?.Mobile}`;

    const counterIconDesktopMargin = `${counterIconMarginDesktop?.top}${counterIconMarginUnits?.Desktop} ${counterIconMarginDesktop?.right}${counterIconMarginUnits?.Desktop} ${counterIconMarginDesktop?.bottom}${counterIconMarginUnits?.Desktop} ${counterIconMarginDesktop?.left}${counterIconMarginUnits?.Desktop}`;
    const counterIconTabletMargin = `${counterIconMarginTablet?.top}${counterIconMarginUnits?.Tablet} ${counterIconMarginTablet?.right}${counterIconMarginUnits?.Tablet} ${counterIconMarginTablet?.bottom}${counterIconMarginUnits?.Tablet} ${counterIconMarginTablet?.left}${counterIconMarginUnits?.Tablet}`;
    const counterIconMobileMargin = `${counterIconMarginMobile?.top}${counterIconMarginUnits?.Mobile} ${counterIconMarginMobile?.right}${counterIconMarginUnits?.Mobile} ${counterIconMarginMobile?.bottom}${counterIconMarginUnits?.Mobile} ${counterIconMarginMobile?.left}${counterIconMarginUnits?.Mobile}`;

    const counterNumberDesktopMargin = `${counterNumberMarginDesktop?.top}${counterNumberMarginUnits?.Desktop} ${counterNumberMarginDesktop?.right}${counterNumberMarginUnits?.Desktop} ${counterNumberMarginDesktop?.bottom}${counterNumberMarginUnits?.Desktop} ${counterNumberMarginDesktop?.left}${counterNumberMarginUnits?.Desktop}`;
    const counterNumberTabletMargin = `${counterNumberMarginTablet?.top}${counterNumberMarginUnits?.Tablet} ${counterNumberMarginTablet?.right}${counterNumberMarginUnits?.Tablet} ${counterNumberMarginTablet?.bottom}${counterNumberMarginUnits?.Tablet} ${counterNumberMarginTablet?.left}${counterNumberMarginUnits?.Tablet}`;
    const counterNumberMobileMargin = `${counterNumberMarginMobile?.top}${counterNumberMarginUnits?.Mobile} ${counterNumberMarginMobile?.right}${counterNumberMarginUnits?.Mobile} ${counterNumberMarginMobile?.bottom}${counterNumberMarginUnits?.Mobile} ${counterNumberMarginMobile?.left}${counterNumberMarginUnits?.Mobile}`;

    const counterNumberTitleDesktopMargin = `${counterNumberTitleMarginDesktop?.top}${counterNumberTitleMarginUnits?.Desktop} ${counterNumberTitleMarginDesktop?.right}${counterNumberTitleMarginUnits?.Desktop} ${counterNumberTitleMarginDesktop?.bottom}${counterNumberTitleMarginUnits?.Desktop} ${counterNumberTitleMarginDesktop?.left}${counterNumberTitleMarginUnits?.Desktop}`;
    const counterNumberTitleTabletMargin = `${counterNumberTitleMarginTablet?.top}${counterNumberTitleMarginUnits?.Tablet} ${counterNumberTitleMarginTablet?.right}${counterNumberTitleMarginUnits?.Tablet} ${counterNumberTitleMarginTablet?.bottom}${counterNumberTitleMarginUnits?.Tablet} ${counterNumberTitleMarginTablet?.left}${counterNumberTitleMarginUnits?.Tablet}`;
    const counterNumberTitleMobileMargin = `${counterNumberTitleMarginMobile?.top}${counterNumberTitleMarginUnits?.Mobile} ${counterNumberTitleMarginMobile?.right}${counterNumberTitleMarginUnits?.Mobile} ${counterNumberTitleMarginMobile?.bottom}${counterNumberTitleMarginUnits?.Mobile} ${counterNumberTitleMarginMobile?.left}${counterNumberTitleMarginUnits?.Mobile}`;

    const globalDesktopPadding = `${counterGlobalPaddingDesktop?.top}${counterGlobalPaddingUnits?.Desktop} ${counterGlobalPaddingDesktop?.right}${counterGlobalPaddingUnits?.Desktop} ${counterGlobalPaddingDesktop?.bottom}${counterGlobalPaddingUnits?.Desktop} ${counterGlobalPaddingDesktop?.left}${counterGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${counterGlobalPaddingTablet?.top}${counterGlobalPaddingUnits?.Tablet} ${counterGlobalPaddingTablet?.right}${counterGlobalPaddingUnits?.Tablet} ${counterGlobalPaddingTablet?.bottom}${counterGlobalPaddingUnits?.Tablet} ${counterGlobalPaddingTablet?.left}${counterGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${counterGlobalPaddingMobile?.top}${counterGlobalPaddingUnits?.Mobile} ${counterGlobalPaddingMobile?.right}${counterGlobalPaddingUnits?.Mobile} ${counterGlobalPaddingMobile?.bottom}${counterGlobalPaddingUnits?.Mobile} ${counterGlobalPaddingMobile?.left}${counterGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${counterGlobalMarginDesktop?.top}${counterGlobalMarginUnits?.Desktop} ${counterGlobalMarginDesktop?.right}${counterGlobalMarginUnits?.Desktop} ${counterGlobalMarginDesktop?.bottom}${counterGlobalMarginUnits?.Desktop} ${counterGlobalMarginDesktop?.left}${counterGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${counterGlobalMarginTablet?.top}${counterGlobalMarginUnits?.Tablet} ${counterGlobalMarginTablet?.right}${counterGlobalMarginUnits?.Tablet} ${counterGlobalMarginTablet?.bottom}${counterGlobalMarginUnits?.Tablet} ${counterGlobalMarginTablet?.left}${counterGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${counterGlobalMarginMobile?.top}${counterGlobalMarginUnits?.Mobile} ${counterGlobalMarginMobile?.right}${counterGlobalMarginUnits?.Mobile} ${counterGlobalMarginMobile?.bottom}${counterGlobalMarginUnits?.Mobile} ${counterGlobalMarginMobile?.left}${counterGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${counterGlobalBorderDesktop?.top}${counterGlobalBorderUnits?.Desktop} ${counterGlobalBorderDesktop?.right}${counterGlobalBorderUnits?.Desktop} ${counterGlobalBorderDesktop?.bottom}${counterGlobalBorderUnits?.Desktop} ${counterGlobalBorderDesktop?.left}${counterGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${counterGlobalBorderTablet?.top}${counterGlobalBorderUnits?.Tablet} ${counterGlobalBorderTablet?.right}${counterGlobalBorderUnits?.Tablet} ${counterGlobalBorderTablet?.bottom}${counterGlobalBorderUnits?.Tablet} ${counterGlobalBorderTablet?.left}${counterGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${counterGlobalBorderMobile?.top}${counterGlobalBorderUnits?.Mobile} ${counterGlobalBorderMobile?.right}${counterGlobalBorderUnits?.Mobile} ${counterGlobalBorderMobile?.bottom}${counterGlobalBorderUnits?.Mobile} ${counterGlobalBorderMobile?.left}${counterGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${counterGlobalBorderRadiusDesktop?.top}${counterGlobalBorderRadiusUnits?.Desktop} ${counterGlobalBorderRadiusDesktop?.right}${counterGlobalBorderRadiusUnits?.Desktop} ${counterGlobalBorderRadiusDesktop?.bottom}${counterGlobalBorderRadiusUnits?.Desktop} ${counterGlobalBorderRadiusDesktop?.left}${counterGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${counterGlobalBorderRadiusTablet?.top}${counterGlobalBorderRadiusUnits?.Tablet} ${counterGlobalBorderRadiusTablet?.right}${counterGlobalBorderRadiusUnits?.Tablet} ${counterGlobalBorderRadiusTablet?.bottom}${counterGlobalBorderRadiusUnits?.Tablet} ${counterGlobalBorderRadiusTablet?.left}${counterGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${counterGlobalBorderRadiusMobile?.top}${counterGlobalBorderRadiusUnits?.Mobile} ${counterGlobalBorderRadiusMobile?.right}${counterGlobalBorderRadiusUnits?.Mobile} ${counterGlobalBorderRadiusMobile?.bottom}${counterGlobalBorderRadiusUnits?.Mobile} ${counterGlobalBorderRadiusMobile?.left}${counterGlobalBorderRadiusUnits?.Mobile}`;

    const counterItemDesktopBorder = `${counterItemBorderTypeDesktop?.top}${counterItemBorderTypeUnits?.Desktop} ${counterItemBorderTypeDesktop?.right}${counterItemBorderTypeUnits?.Desktop} ${counterItemBorderTypeDesktop?.bottom}${counterItemBorderTypeUnits?.Desktop} ${counterItemBorderTypeDesktop?.left}${counterItemBorderTypeUnits?.Desktop}`;
    const counterItemTabletBorder = `${counterItemBorderTypeTablet?.top}${counterItemBorderTypeUnits?.Tablet} ${counterItemBorderTypeTablet?.right}${counterItemBorderTypeUnits?.Tablet} ${counterItemBorderTypeTablet?.bottom}${counterItemBorderTypeUnits?.Tablet} ${counterItemBorderTypeTablet?.left}${counterItemBorderTypeUnits?.Tablet}`;
    const counterItemMobileBorder = `${counterItemBorderTypeMobile?.top}${counterItemBorderTypeUnits?.Mobile} ${counterItemBorderTypeMobile?.right}${counterItemBorderTypeUnits?.Mobile} ${counterItemBorderTypeMobile?.bottom}${counterItemBorderTypeUnits?.Mobile} ${counterItemBorderTypeMobile?.left}${counterItemBorderTypeUnits?.Mobile}`;

    const counterBlockStyle = `
        .fb-counter-main-wrapper.${blockID}{
            ${counterPositionType === 'default' ? `position: relative;` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' ? `width: 100%;` : ''}
            ${counterPositionType !== 'default' ? `position: ${counterPositionType};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset?.Desktop ? `left: ${counterHZLeftOffset?.Desktop}${counterHZLeftOffsetUnits?.Desktop};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset?.Desktop ? `right: ${counterHZRightOffset?.Desktop}${counterHZRightOffsetUnits?.Desktop};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset?.Desktop ? `top: ${counterVRTopOffset?.Desktop}${counterVRTopOffsetUnits?.Desktop};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset?.Desktop ? `bottom: ${counterVRBottomOffset?.Desktop}${counterVRBottomOffsetUnits?.Desktop};` : ''}
            ${counterGlobalZIndex?.Desktop ? `z-index: ${counterGlobalZIndex?.Desktop};` : ''}
            ${counterOverflow !== 'default' ? `overflow: ${counterOverflow};` : ''}
        }
        .fb-counter-wrapper.${blockID}{
            ${counterGlobalBgColor ? `background: ${counterGlobalBgColor};` : ''}
            ${globalDesktopPadding && counterGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ""}
            ${globalDesktopMargin && counterGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ""}
            ${counterGlobalBorder ? `border-style: ${counterGlobalBorder};` : ""}
            ${counterGlobalBorderColor ? `border-color: ${counterGlobalBorderColor};` : ""} 
            ${globalDesktopBorderWidth && counterGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
            ${globalDesktopBorderRadiusWidth && counterGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
            ${counterGlobalBoxShadowCssValue ? `box-shadow: ${counterGlobalBoxShadowCssValue};` : ""}
    
            ${counterAlignment?.Desktop === 'left' ? `justify-content: flex-start;` : ''}
            ${counterAlignment?.Desktop === 'center' ? `justify-content: center;` : ''}
            ${counterAlignment?.Desktop === 'right' ? `justify-content: flex-end;` : ''}
        }
        .fb-counter-wrapper.${blockID}:hover{
            ${counterGlobalBgHoverColor ? `background: ${counterGlobalBgHoverColor};` : ''}
            ${counterGlobalBorderHoverColor ? `border-color: ${counterGlobalBorderHoverColor};` : ""}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item {
            display: flex;
            ${iconPosition === 'top' ? `flex-direction: column;` : ''}
            ${iconPosition === 'right' ? `flex-direction: row-reverse; align-items: center;` : ''}
            ${iconPosition === 'bottom' ? `flex-direction: column-reverse;` : ''}
            ${iconPosition === 'left' ? `flex-direction: row; align-items: center;` : ''}
    
            ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment?.Desktop ? `justify-content: ${counterAlignment?.Desktop};` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Desktop === 'left' ? `align-items: flex-start;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Desktop === 'center' ? `align-items: center;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Desktop === 'right' ? `align-items: flex-end;` : ''}
    
            ${counterItemBgColor ? `background: ${counterItemBgColor};` : ''}
            ${counterItemSize?.Desktop ? `width: ${counterItemSize?.Desktop}${counterItemSizeUnits?.Desktop};` : ''}
            ${counterItemHeight && counterItemHeight?.Desktop ? `height: ${counterItemHeight?.Desktop}${counterItemHeightUnits?.Desktop};` : ''}
            ${counterItemRatio ? `aspect-ratio: 1 / 1;` : ''}
            ${counterItemBorder ? `border: ${counterItemBorder};` : ''}
            ${counterItemDesktopBorder && counterItemBorderTypeDesktop?.top ? `border-width: ${counterItemDesktopBorder};` : ''}
            ${counterItemBorderColor ? `border-color: ${counterItemBorderColor};` : ''}
            ${counterItemDesktopBorderRadius && counterItemBorderRadiusDesktop?.top ? `border-radius: ${counterItemDesktopBorderRadius};` : ''}
            ${counterItemDesktopPadding && counterItemPaddingDesktop?.top ? `padding: ${counterItemDesktopPadding};` : ''}
            ${counterItemDesktopMargin && counterItemMarginDesktop?.top ? `margin: ${counterItemDesktopMargin};` : ''}
            ${counterItemGap?.Desktop ? `gap: ${counterItemGap?.Desktop}${counterItemGapUnits?.Desktop};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item:hover{
            ${counterItemBgHoverColor ? `background: ${counterItemBgHoverColor};` : ''}
            ${counterItemBorderHoverColor ? `border-color: ${counterItemBorderHoverColor};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
            display: flex;
            ${counterIconDesktopMargin && counterIconMarginDesktop?.top ? `margin: ${counterIconDesktopMargin};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
            ${counterIconSize?.Desktop ? `width: ${counterIconSize?.Desktop}${counterIconSizeUnits?.Desktop};` : ''}
            ${counterIconSizeRatio ? `aspect-ratio: 1 / 1;` : ''}
            ${counterMediaImagedisplay && counterMediaImagedisplay !== 'none' ? `object-fit: ${counterMediaImagedisplay};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon {
            display: flex;
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
            ${counterIconSize?.Desktop ? `width: ${counterIconSize?.Desktop}${counterIconSizeUnits?.Desktop};` : ''}
            ${counterIconSizeRatio ? `aspect-ratio: 1 / 1;` : ''}
            ${counterIconColor ? `fill: ${counterIconColor};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-icon-wrapper .fb-counter-icon svg {
            ${counterIconHoverColor ? `fill: ${counterIconHoverColor};` : ''}
        }
    
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-content-wrapper {
            display: flex;
            ${titlePosition === 'top' ? `flex-direction: column-reverse;` : ''}
            ${titlePosition === 'right' ? `flex-direction: row; align-items: center;` : ''}
            ${titlePosition === 'bottom' ? `flex-direction: column;` : ''}
            ${titlePosition === 'left' ? `flex-direction: row-reverse; align-items: center;` : ''}
    
            ${iconPosition !== 'top' && iconPosition !== 'bottom' ? `text-align: left;` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
            ${counterNumberDesktopMargin && counterNumberMarginDesktop?.top ? `margin: ${counterNumberDesktopMargin};` : ''}
            ${counterCardAlignment?.Desktop === 'left' ? `justify-content: flex-start;` : ''}
            ${counterCardAlignment?.Desktop === 'center' ? `justify-content: center;` : ''}
            ${counterCardAlignment?.Desktop === 'right' ? `justify-content: flex-end;` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
            ${counterNumberFontColor ? `color: ${counterNumberFontColor};` : ''}
    
            ${counterNumberGlobalTypoSwitcher?.fontFamily === true && counterNumberGlobalTypographyData?.fontFamily ? `font-family: ${counterNumberGlobalTypographyData?.fontFamily};` : ''}
            ${counterNumberGlobalTypoSwitcher?.fontSize === true && counterNumberGlobalTypographyData?.fontSize ? `font-size: ${counterNumberGlobalTypographyData?.fontSize};` : ''}
            ${counterNumberGlobalTypoSwitcher?.fontWeight === true && counterNumberGlobalTypographyData?.fontWeight ? `font-weight: ${counterNumberGlobalTypographyData?.fontWeight};` : ''}
            ${counterNumberGlobalTypoSwitcher?.fontStyle === true && counterNumberGlobalTypographyData?.fontStyle ? `font-style: ${counterNumberGlobalTypographyData?.fontStyle};` : ''}
            ${counterNumberGlobalTypoSwitcher?.textTransform === true && counterNumberGlobalTypographyData?.textTransform ? `text-transform: ${counterNumberGlobalTypographyData?.textTransform};` : ''}
            ${counterNumberGlobalTypoSwitcher?.textDecoration === true && counterNumberGlobalTypographyData?.textDecoration ? `text-decoration: ${counterNumberGlobalTypographyData?.textDecoration};` : ''}
            ${counterNumberGlobalTypoSwitcher?.letterSpacing === true && counterNumberGlobalTypographyData?.letterSpacing ? `letter-spacing: ${counterNumberGlobalTypographyData?.letterSpacing};` : ''}
            ${counterNumberGlobalTypoSwitcher?.lineHeight === true && counterNumberGlobalTypographyData?.lineHeight ? `line-height: ${counterNumberGlobalTypographyData?.lineHeight};` : ''}
    
            ${counterNumberGlobalTypoSwitcher?.fontFamily === false && counterNumberFontFamily && counterNumberFontFamily !== 'Default' ? `font-family: ${counterNumberFontFamily};` : ''}
            ${counterNumberGlobalTypoSwitcher?.fontSize === false && counterNumberFontSize?.Desktop ? `font-size: ${counterNumberFontSize?.Desktop}${counterNumberFontSizeUnits?.Desktop};` : ''}
            ${counterNumberGlobalTypoSwitcher?.fontWeight === false && counterNumberFontWeight ? `font-weight: ${counterNumberFontWeight};` : ''}
            ${counterNumberGlobalTypoSwitcher?.fontStyle === false && counterNumberFontStyle ? `font-style: ${counterNumberFontStyle};` : ''}
            ${counterNumberGlobalTypoSwitcher?.textTransform === false && counterNumberTextTransform ? `text-transform: ${counterNumberTextTransform};` : ''}
            ${counterNumberGlobalTypoSwitcher?.textDecoration === false && counterNumberTextDecoration ? `text-decoration: ${counterNumberTextDecoration};` : ''}
            ${counterNumberGlobalTypoSwitcher?.letterSpacing === false && counterNumberLetterSpacing?.Desktop ? `letter-spacing: ${counterNumberLetterSpacing?.Desktop}${counterNumberLetterSpacingUnits?.Desktop};` : ''}
            ${counterNumberGlobalTypoSwitcher?.lineHeight === false && counterNumberLineHeight?.Desktop ? `line-height: ${counterNumberLineHeight?.Desktop}${counterNumberLineHeightUnits?.Desktop};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number,
        .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number-prefix,
        .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number-suffix{
            ${counterNumberFontHoverColor ? `color: ${counterNumberFontHoverColor};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
            ${counterNumberTitleFontColor ? `color: ${counterNumberTitleFontColor};` : ''}
    
            ${counterNumberTitleGlobalTypoSwitcher?.fontFamily === true && counterNumberTitleGlobalTypographyData?.fontFamily ? `font-family: ${counterNumberTitleGlobalTypographyData?.fontFamily};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.fontSize === true && counterNumberTitleGlobalTypographyData?.fontSize ? `font-size: ${counterNumberTitleGlobalTypographyData?.fontSize};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.fontWeight === true && counterNumberTitleGlobalTypographyData?.fontWeight ? `font-weight: ${counterNumberTitleGlobalTypographyData?.fontWeight};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.fontStyle === true && counterNumberTitleGlobalTypographyData?.fontStyle ? `font-style: ${counterNumberTitleGlobalTypographyData?.fontStyle};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.textTransform === true && counterNumberTitleGlobalTypographyData?.textTransform ? `text-transform: ${counterNumberTitleGlobalTypographyData?.textTransform};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.textDecoration === true && counterNumberTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${counterNumberTitleGlobalTypographyData?.textDecoration};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === true && counterNumberTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${counterNumberTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === true && counterNumberTitleGlobalTypographyData?.lineHeight ? `line-height: ${counterNumberTitleGlobalTypographyData?.lineHeight};` : ''}
    
            ${counterNumberTitleGlobalTypoSwitcher?.fontFamily === false && counterNumberTitleFontFamily && counterNumberTitleFontFamily !== 'Default' ? `font-family: ${counterNumberTitleFontFamily};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.fontSize === false && counterNumberTitleFontSize?.Desktop ? `font-size: ${counterNumberTitleFontSize?.Desktop}${counterNumberTitleFontSizeUnits?.Desktop};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.fontWeight === false && counterNumberTitleFontWeight ? `font-weight: ${counterNumberTitleFontWeight};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.fontStyle === false && counterNumberTitleFontStyle ? `font-style: ${counterNumberTitleFontStyle};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.textTransform === false && counterNumberTitleTextTransform ? `text-transform: ${counterNumberTitleTextTransform};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.textDecoration === false && counterNumberTitleTextDecoration ? `text-decoration: ${counterNumberTitleTextDecoration};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === false && counterNumberTitleLetterSpacing?.Desktop ? `letter-spacing: ${counterNumberTitleLetterSpacing?.Desktop}${counterNumberTitleLetterSpacingUnits?.Desktop};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === false && counterNumberTitleLineHeight?.Desktop ? `line-height: ${counterNumberTitleLineHeight?.Desktop}${counterNumberTitleLineHeightUnits?.Desktop};` : ''}
            ${counterNumberTitleDesktopMargin && counterNumberTitleMarginDesktop?.top ? `margin: ${counterNumberTitleDesktopMargin};` : ''}
            
            ${counterCardAlignment?.Desktop ? `text-align: ${counterCardAlignment?.Desktop};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-title{
            ${counterNumberTitleFontHoverColor ? `color: ${counterNumberTitleFontHoverColor};` : ''}
        }
        @media only screen and (max-width: 1024px) {
            .fb-counter-main-wrapper.${blockID}{
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset?.Tablet ? `left: ${counterHZLeftOffset?.Tablet}${counterHZLeftOffsetUnits?.Tablet};` : ''}
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset?.Tablet ? `right: ${counterHZRightOffset?.Tablet}${counterHZRightOffsetUnits?.Tablet};` : ''}
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset?.Tablet ? `top: ${counterVRTopOffset?.Tablet}${counterVRTopOffsetUnits?.Tablet};` : ''}
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset?.Tablet ? `bottom: ${counterVRBottomOffset?.Tablet}${counterVRBottomOffsetUnits?.Tablet};` : ''}
                ${counterGlobalZIndex?.Tablet ? `z-index: ${counterGlobalZIndex?.Tablet};` : ''}        
            }
            .fb-counter-wrapper.${blockID}{
                ${globalTabletPadding && counterGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ""}
                ${globalTabletMargin && counterGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ""}
                ${globalTabletBorderWidth && counterGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ""}
                ${globalTabletBorderRadiusWidth && counterGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
                ${counterAlignment?.Tablet === 'left' ? `justify-content: flex-start;` : ''}
                ${counterAlignment?.Tablet === 'center' ? `justify-content: center;` : ''}
                ${counterAlignment?.Tablet === 'right' ? `justify-content: flex-end;` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item {
                ${counterItemTabletBorder && counterItemBorderTypeTablet?.top ? `border-width: ${counterItemTabletBorder};` : ''}
                ${counterItemTabletBorderRadius && counterItemBorderRadiusTablet?.top ? `border-radius: ${counterItemTabletBorderRadius};` : ''}
                ${counterItemTabletPadding && counterItemPaddingTablet?.top ? `padding: ${counterItemTabletPadding};` : ''}
                ${counterItemTabletMargin && counterItemMarginTablet?.top ? `margin: ${counterItemTabletMargin};` : ''}
                ${counterItemHeight && counterItemHeight?.Tablet ? `height: ${counterItemHeight?.Tablet}${counterItemHeightUnits?.Tablet};` : ''}
                ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment?.Tablet ? `justify-content: ${counterAlignment?.Tablet};` : ''}
                ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Tablet === 'left' ? `align-items: flex-start;` : ''}
                ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Tablet === 'center' ? `align-items: center;` : ''}
                ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Tablet === 'right' ? `align-items: flex-end;` : ''}
                ${counterItemGap?.Tablet ? `gap: ${counterItemGap?.Tablet}${counterItemGapUnits?.Tablet};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
                ${counterIconTabletMargin && counterIconMarginTablet?.top ? `margin: ${counterIconTabletMargin};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
                ${counterIconSize?.Tablet ? `width: ${counterIconSize?.Tablet}${counterIconSizeUnits?.Tablet};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
                ${counterIconSize?.Tablet ? `width: ${counterIconSize?.Tablet}${counterIconSizeUnits?.Tablet};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
                ${counterNumberTabletMargin && counterNumberMarginTablet?.top ? `margin: ${counterNumberTabletMargin};` : ''}
                ${counterCardAlignment?.Tablet === 'left' ? `justify-content: flex-start;` : ''}
                ${counterCardAlignment?.Tablet === 'center' ? `justify-content: center;` : ''}
                ${counterCardAlignment?.Tablet === 'right' ? `justify-content: flex-end;` : ''}
            }
    
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
                ${counterNumberGlobalTypoSwitcher?.fontSize === false && counterNumberFontSize?.Tablet ? `font-size: ${counterNumberFontSize?.Tablet}${counterNumberFontSizeUnits?.Tablet};` : ''}
                ${counterNumberGlobalTypoSwitcher?.letterSpacing === false && counterNumberLetterSpacing?.Tablet ? `letter-spacing: ${counterNumberLetterSpacing?.Tablet}${counterNumberLetterSpacingUnits?.Tablet};` : ''}
                ${counterNumberGlobalTypoSwitcher?.lineHeight === false && counterNumberLineHeight?.Tablet ? `line-height: ${counterNumberLineHeight?.Tablet}${counterNumberLineHeightUnits?.Tablet};` : ''}
            }
    
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
                ${counterNumberTitleGlobalTypoSwitcher?.fontSize === false && counterNumberTitleFontSize?.Tablet ? `font-size: ${counterNumberTitleFontSize?.Tablet}${counterNumberTitleFontSizeUnits?.Tablet};` : ''}
                ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === false && counterNumberTitleLetterSpacing?.Tablet ? `letter-spacing: ${counterNumberTitleLetterSpacing?.Tablet}${counterNumberTitleLetterSpacingUnits?.Tablet};` : ''}
                ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === false && counterNumberTitleLineHeight?.Tablet ? `line-height: ${counterNumberTitleLineHeight?.Tablet}${counterNumberTitleLineHeightUnits?.Tablet};` : ''}
                ${counterNumberTitleTabletMargin && counterNumberTitleMarginTablet?.top ? `margin: ${counterNumberTitleTabletMargin};` : ''}
                ${counterCardAlignment?.Tablet ? `text-align: ${counterCardAlignment?.Tablet};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .fb-counter-main-wrapper.${blockID}{
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset?.Mobile ? `left: ${counterHZLeftOffset?.Mobile}${counterHZLeftOffsetUnits?.Mobile};` : ''}
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset?.Mobile ? `right: ${counterHZRightOffset?.Mobile}${counterHZRightOffsetUnits?.Mobile};` : ''}
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset?.Mobile ? `top: ${counterVRTopOffset?.Mobile}${counterVRTopOffsetUnits?.Mobile};` : ''}
                ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset?.Mobile ? `bottom: ${counterVRBottomOffset?.Mobile}${counterVRBottomOffsetUnits?.Mobile};` : ''} 
                ${counterGlobalZIndex?.Mobile ? `z-index: ${counterGlobalZIndex?.Mobile};` : ''}
            }
            .fb-counter-wrapper.${blockID}{
                ${globalMobilePadding && counterGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ""}
                ${globalMobileMargin && counterGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ""}
                ${globalMobileBorderWidth && counterGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ""}
                ${globalMobileBorderRadiusWidth && counterGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
                ${counterAlignment?.Mobile === 'left' ? `justify-content: flex-start;` : ''}
                ${counterAlignment?.Mobile === 'center' ? `justify-content: center;` : ''}
                ${counterAlignment?.Mobile === 'right' ? `justify-content: flex-end;` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item {
                ${counterItemMobileBorder && counterItemBorderTypeMobile?.top ? `border-width: ${counterItemMobileBorder};` : ''}
                ${counterItemMobileBorderRadius && counterItemBorderRadiusMobile?.top ? `border-radius: ${counterItemMobileBorderRadius};` : ''}
                ${counterItemMobilePadding && counterItemPaddingMobile?.top ? `padding: ${counterItemMobilePadding};` : ''}
                ${counterItemMobileMargin && counterItemMarginMobile?.top ? `margin: ${counterItemMobileMargin};` : ''}
                ${counterItemHeight && counterItemHeight?.Mobile ? `height: ${counterItemHeight?.Mobile}${counterItemHeightUnits?.Mobile};` : ''}
                ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment?.Mobile ? `justify-content: ${counterAlignment?.Mobile};` : ''}
                ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Mobile === 'left' ? `align-items: flex-start;` : ''}
                ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Mobile === 'center' ? `align-items: center;` : ''}
                ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Mobile === 'right' ? `align-items: flex-end;` : ''}
                ${counterItemGap?.Mobile ? `gap: ${counterItemGap?.Mobile}${counterItemGapUnits?.Mobile};` : ''}
            }
    
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
                ${counterIconMobileMargin && counterIconMarginMobile?.top ? `margin: ${counterIconMobileMargin};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
                ${counterIconSize?.Mobile ? `width: ${counterIconSize?.Mobile}${counterIconSizeUnits?.Mobile};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
                ${counterIconSize?.Mobile ? `width: ${counterIconSize?.Mobile}${counterIconSizeUnits?.Mobile};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
                ${counterNumberMobileMargin && counterNumberMarginMobile?.top ? `margin: ${counterNumberMobileMargin};` : ''}
                ${counterCardAlignment?.Mobile === 'left' ? `justify-content: flex-start;` : ''}
                ${counterCardAlignment?.Mobile === 'center' ? `justify-content: center;` : ''}
                ${counterCardAlignment?.Mobile === 'right' ? `justify-content: flex-end;` : ''}
            }
    
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
                ${counterNumberGlobalTypoSwitcher?.fontSize === false && counterNumberFontSize?.Mobile ? `font-size: ${counterNumberFontSize?.Mobile}${counterNumberFontSizeUnits?.Mobile};` : ''}
                ${counterNumberGlobalTypoSwitcher?.letterSpacing === false && counterNumberLetterSpacing?.Mobile ? `letter-spacing: ${counterNumberLetterSpacing?.Mobile}${counterNumberLetterSpacingUnits?.Mobile};` : ''}
                ${counterNumberGlobalTypoSwitcher?.lineHeight === false && counterNumberLineHeight?.Mobile ? `line-height: ${counterNumberLineHeight?.Mobile}${counterNumberLineHeightUnits?.Mobile};` : ''}
            }
            .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
                ${counterNumberTitleGlobalTypoSwitcher?.fontSize === false && counterNumberTitleFontSize?.Mobile ? `font-size: ${counterNumberTitleFontSize?.Mobile}${counterNumberTitleFontSizeUnits?.Mobile};` : ''}
                ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === false && counterNumberTitleLetterSpacing?.Mobile ? `letter-spacing: ${counterNumberTitleLetterSpacing?.Mobile}${counterNumberTitleLetterSpacingUnits?.Mobile};` : ''}
                ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === false && counterNumberTitleLineHeight?.Mobile ? `line-height: ${counterNumberTitleLineHeight?.Mobile}${counterNumberTitleLineHeightUnits?.Mobile};` : ''}
                ${counterNumberTitleMobileMargin && counterNumberTitleMarginMobile?.top ? `margin: ${counterNumberTitleMobileMargin};` : ''}
                ${counterCardAlignment?.Mobile ? `text-align: ${counterCardAlignment?.Mobile};` : ''}
            }
        }`;

        const customCss = getCustomCss(counterGlobalWraperCustomCSS, `.${blockID}`);
        return `${counterBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
    
}
export default generateCounterNumberStyle;