/**
 * Advanced Heading Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAdvancedHeadingStyle = (attributes) => {
    const {
        blockID,
        headingAlignment,

        headingGlobalTypoSwitcher,
        headingGlobalTypographyData,
        headingFontFamily,
        headingFontSize,
        headingFontSizeUnits,
        headingFontWeight,
        headingFontStyle,
        headingTextTransform,
        headingTextDecoration,
        headingLetterSpacing,
        headingLineHeight,
        headingLetterSpacingUnits,
        headingLineHeightUnits,

        headingTextShadowCssValue,
        headingTextStroke,
        headingTextStrokeColor,
        headingTextStrokeHoverColor,

        headingTextColorType,
        headingTextHoverColorType,
        headingColor,
        headingHoverColor,
        headingTextGradientColor,
        headingTextHoverGradientColor,
        headingTextCustomGradientColorSwitcher,
        headingTextCustomGradientColor,
        headingTextHoverCustomGradientColorSwitcher,
        headingTextHoverCustomGradientColor,

        headingBgColorType,
        headingBgHoverColorType,
        headingBgColor,
        headingBgHoverColor,
        headingBgGradientColor,
        headingBgHoverGradientColor,
        headingBgCustomGradientColorSwitcher,
        headingBgCustomGradientColor,
        headingBgHoverCustomGradientColorSwitcher,
        headingBgHoverCustomGradientColor,

        headingBorder,
        headingBorderColor,
        headingBorderHoverColor,

        headingBorderUnits,
        headingDesktopBorder,
        headingTabletBorder,
        headingMobileBorder,

        headingBorderRadiusUnits,
        headingDesktopBorderRadius,
        headingTabBorderRadius,
        headingMobileBorderRadius,
        headingBoxShadowCssValue,

        headingPaddingUnits,
        headingDesktopPadding,
        headingTabPadding,
        headingMobilePadding,
        headingMarginUnits,
        headingDesktopMargin,
        headingTabMargin,
        headingMobileMargin,
        /** End Heading */

        subHeadingGlobalTypoSwitcher,
        subHeadingGlobalTypographyData,
        subHeadingFontFamily,
        subHeadingFontSize,
        subHeadingFontSizeUnits,
        subHeadingFontWeight,
        subHeadingFontStyle,
        subHeadingTextTransform,
        subHeadingTextDecoration,
        subHeadingLetterSpacing,
        subHeadingLetterSpacingUnits,
        subHeadingLineHeight,
        subHeadingLineHeightUnits,

        subHeadingTextShadowCssValue,
        subHeadingTextStroke,
        subHeadingTextStrokeColor,
        subHeadingTextStrokeHoverColor,

        subHeadingTextColorType,
        subHeadingTextHoverColorType,
        subHeadingColor,
        subHeadingHoverColor,
        subHeadingTextGradientColor,
        subHeadingTextHoverGradientColor,
        subHeadingTextCustomGradientColorSwitcher,
        subHeadingTextCustomGradientColor,
        subHeadingTextHoverCustomGradientColorSwitcher,
        subHeadingTextHoverCustomGradientColor,

        subHeadingBgColorType,
        subHeadingBgHoverColorType,
        subHeadingBgColor,
        subHeadingBgHoverColor,
        subHeadingBgGradientColor,
        subHeadingBgHoverGradientColor,
        subHeadingBgCustomGradientColorSwitcher,
        subHeadingBgCustomGradientColor,
        subHeadingBgHoverCustomGradientColorSwitcher,
        subHeadingBgHoverCustomGradientColor,

        subHeadingBorder,
        subHeadingBorderColor,
        subHeadingBorderHoverColor,
        subHeadingBorderUnits,
        subHeadingDesktopBorder,
        subHeadingTabBorder,
        subHeadingMobileBorder,
        subHeadingBorderRadiusUnits,
        subHeadingDesktopBorderRadius,
        subHeadingTabBorderRadius,
        subHeadingMobileBorderRadius,
        subHeadingBoxShadowCssValue,

        subHeadingPaddingUnits,
        subHeadingDesktopPadding,
        subHeadingTabPadding,
        subHeadingMobilePadding,
        subHeadingMarginUnits,
        subHeadingDesktopMargin,
        subHeadingTabMargin,
        subHeadingMobileMargin,
        /** End Sub Heading */

        /** Start Separator */
        separator,
        separatorPosition,
        separatorColor,
        separatorHoverColor,
        separatorWidth,
        separatorWidthUnits,
        separatorHeight,
        separatorHeightUnits,
        separatorSpacing,
        separatorSpacingUnits,

        headingIconSize,
        headingIconSizeUnits,
        headingIconBgSize,
        headingIconBgSizeUnits,
        headingIconColor,
        headingIconHoverColor,
        headingIconBgColor,
        headingIconBgHoverColor,
        headingIconBorder,
        headingIconBorderColor,
        headingIconBorderHoverColor,
        headingIconBorderUnits,
        headingIconBorderDesktop,
        headingIconBorderTablet,
        headingIconBorderMobile,
        headingIconBorderRadiusUnits,
        headingIconBorderRadiusDesktop,
        headingIconBorderRadiusTablet,
        headingIconBorderRadiusMobile,
        headingIconPaddingUnits,
        headingIconDesktopPadding,
        headingIconTabletPadding,
        headingIconMobilePadding,
        /** End Icon */

        /** Start Global Setting */
        headingGlobalZIndex,
        advancedHeadingOverflow,

        headingGlobalPaddingUnits,
        headingGlobalPaddingDesktop,
        headingGlobalPaddingTablet,
        headingGlobalPaddingMobile,
        headingGlobalMarginUnits,

        headingGlobalMarginDesktop,
        headingGlobalMarginTablet,
        headingGlobalMarginMobile,

        headingGlobalBorder,
        headingGlobalBorderColor,
        headingGlobalBorderHoverColor,
        headingGlobalBorderUnits,
        headingGlobalBorderDesktop,
        headingGlobalBorderTablet,
        headingGlobalBorderMobile,

        headingGlobalBorderRadiusUnits,
        headingGlobalBorderRadiusDesktop,
        headingGlobalBorderRadiusTablet,
        headingGlobalBorderRadiusMobile,

        headingGlobalBoxShadowCssValue,
        headingGlobalBoxShadowHoverCssValue,

        /** End Global Style */

        /** Start Background Image */
        headingBackgroundImageEnabled,
        headingBackgroundImageUrl,
        /** End Background Image */

        activeLineAfterWidth,
        activeLineAfterWidthUnits,
        activeLineAfterHeight,
        activeLineAfterHeightUnits,
        activeLineAfterColor,
        activeLineBeforeWidth,
        activeLineBeforeWidthUnits,
        activeLineBeforeHeight,
        activeLineBeforeHeightUnits,
        activeLineBeforeColor,

        advancedHeadingCustomCSS,

        // Position
        advancedHeadingPositionType,
        advancedHeadingHZOrientationType,
        advancedHeadingVROrientationType,
        advancedHeadingHZLeftOffset,
        advancedHeadingHZLeftOffsetUnits,
        advancedHeadingHZRightOffset,
        advancedHeadingHZRightOffsetUnits,
        advancedHeadingVRTopOffset,
        advancedHeadingVRTopOffsetUnits,
        advancedHeadingVRBottomOffset,
        advancedHeadingVRBottomOffsetUnits,

        /** Start Before After */
        headingBeforeAfterSwitcher,
        headingBeforeAfterWidth,
        headingBeforeAfterWidthUnits,
        headingBeforeAfterHeight,
        headingBeforeAfterHeightUnits,

        headingBeforeAfterGap,
        headingBeforeAfterGapUnits,

        headingBeforeAfterBorder,
        headingBeforeAfterBorderColor,
        headingBeforeAfterBorderUnits,
        headingBeforeAfterDesktopBorder,
        headingBeforeAfterTabletBorder,
        headingBeforeAfterMobileBorder,
        headingBeforeAfterBorderRadiusUnits,
        headingBeforeAfterDesktopBorderRadius,
        headingBeforeAfterTabletBorderRadius,
        headingBeforeAfterMobileBorderRadius,
        /** End Before After */

        /** Start Background */
        headingGlobalBgNormalBackgroundType,
        headingGlobalBgNormalClassicColor,
        headingGlobalBgNormalGradientColor,
        headingGlobalBgNormalCustomGradientSwitcher,
        headingGlobalBgNormalCustomGradientInputValue,
        headingGlobalBgNormalBackgroundImageUrl,
        headingGlobalBgNormalBackgroundImagePosition,
        headingGlobalBgNormalBackgroundImageAttachment,
        headingGlobalBgNormalBackgroundImageRepeat,
        headingGlobalBgNormalBackgroundImageSize,

        headingGlobalBgHoverBackgroundType,
        headingGlobalBgHoverClassicColor,
        headingGlobalBgHoverGradientColor,
        headingGlobalBgHoverCustomGradientSwitcher,
        headingGlobalBgHoverCustomGradientInputValue,
        headingGlobalBgHoverBackgroundImageUrl,
        headingGlobalBgHoverBackgroundImagePosition,
        headingGlobalBgHoverBackgroundImageAttachment,
        headingGlobalBgHoverBackgroundImageRepeat,
        headingGlobalBgHoverBackgroundImageSize,

    } = attributes;

    /** Default padding for Heading */
    const headingDesktopPaddingWidth = `${headingDesktopPadding?.top}${headingPaddingUnits?.Desktop} ${headingDesktopPadding?.right}${headingPaddingUnits?.Desktop} ${headingDesktopPadding?.bottom}${headingPaddingUnits?.Desktop} ${headingDesktopPadding?.left}${headingPaddingUnits?.Desktop}`;
    const headingTabletPaddingWidth = `${headingTabPadding?.top}${headingPaddingUnits?.Tablet} ${headingTabPadding?.right}${headingPaddingUnits?.Tablet} ${headingTabPadding?.bottom}${headingPaddingUnits?.Tablet} ${headingTabPadding?.left}${headingPaddingUnits?.Tablet}`;
    const headingMobilePaddingWidth = `${headingMobilePadding?.top}${headingPaddingUnits?.Mobile} ${headingMobilePadding?.right}${headingPaddingUnits?.Mobile} ${headingMobilePadding?.bottom}${headingPaddingUnits?.Mobile} ${headingMobilePadding?.left}${headingPaddingUnits?.Mobile}`;

    /** Default margin for Heading */
    const headingDesktopMarginWidth = `${headingDesktopMargin?.top}${headingMarginUnits?.Desktop} ${headingDesktopMargin?.right}${headingMarginUnits?.Desktop} ${headingDesktopMargin?.bottom}${headingMarginUnits?.Desktop} ${headingDesktopMargin?.left}${headingMarginUnits?.Desktop}`;
    const headingTabletMarginWidth = `${headingTabMargin?.top}${headingMarginUnits?.Tablet} ${headingTabMargin?.right}${headingMarginUnits?.Tablet} ${headingTabMargin?.bottom}${headingMarginUnits?.Tablet} ${headingTabMargin?.left}${headingMarginUnits?.Tablet}`;
    const headingMobileMarginWidth = `${headingMobileMargin?.top}${headingMarginUnits?.Mobile} ${headingMobileMargin?.right}${headingMarginUnits?.Mobile} ${headingMobileMargin?.bottom}${headingMarginUnits?.Mobile} ${headingMobileMargin?.left}${headingMarginUnits?.Mobile}`;

    /** Default border radius for Heading */
    const headingDesktopBorderWidth = `${headingDesktopBorder?.top}${headingBorderUnits?.Desktop} ${headingDesktopBorder?.right}${headingBorderUnits?.Desktop} ${headingDesktopBorder?.bottom}${headingBorderUnits?.Desktop} ${headingDesktopBorder?.left}${headingBorderUnits?.Desktop}`;
    const headingTabletBorderWidth = `${headingTabletBorder?.top}${headingBorderUnits?.Tablet} ${headingTabletBorder?.right}${headingBorderUnits?.Tablet} ${headingTabletBorder?.bottom}${headingBorderUnits?.Tablet} ${headingTabletBorder?.left}${headingBorderUnits?.Tablet}`;
    const headingMobileBorderWidth = `${headingMobileBorder?.top}${headingBorderUnits?.Mobile} ${headingMobileBorder?.right}${headingBorderUnits?.Mobile} ${headingMobileBorder?.bottom}${headingBorderUnits?.Mobile} ${headingMobileBorder?.left}${headingBorderUnits?.Mobile}`;

    /** Default border radius for Heading */
    const headingDesktopBorderRadiusWidth = `${headingDesktopBorderRadius?.top}${headingBorderRadiusUnits?.Desktop} ${headingDesktopBorderRadius?.right}${headingBorderRadiusUnits?.Desktop} ${headingDesktopBorderRadius?.bottom}${headingBorderRadiusUnits?.Desktop} ${headingDesktopBorderRadius?.left}${headingBorderRadiusUnits?.Desktop}`;
    const headingTabletBorderRadiusWidth = `${headingTabBorderRadius?.top}${headingBorderRadiusUnits?.Tablet} ${headingTabBorderRadius?.right}${headingBorderRadiusUnits?.Tablet} ${headingTabBorderRadius?.bottom}${headingBorderRadiusUnits?.Tablet} ${headingTabBorderRadius?.left}${headingBorderRadiusUnits?.Tablet}`;
    const headingMobileBorderRadiusWidth = `${headingMobileBorderRadius?.top}${headingBorderRadiusUnits?.Mobile} ${headingMobileBorderRadius?.right}${headingBorderRadiusUnits?.Mobile} ${headingMobileBorderRadius?.bottom}${headingBorderRadiusUnits?.Mobile} ${headingMobileBorderRadius?.left}${headingBorderRadiusUnits?.Mobile}`;

    /** Default border for Heading */
    const headingBeforeAfterDesktopBorderWidth = `${headingBeforeAfterDesktopBorder?.top}${headingBeforeAfterBorderUnits?.Desktop} ${headingBeforeAfterDesktopBorder?.right}${headingBeforeAfterBorderUnits?.Desktop} ${headingBeforeAfterDesktopBorder?.bottom}${headingBeforeAfterBorderUnits?.Desktop} ${headingBeforeAfterDesktopBorder?.left}${headingBeforeAfterBorderUnits?.Desktop}`;
    const headingBeforeAfterTabletBorderWidth = `${headingBeforeAfterTabletBorder?.top}${headingBeforeAfterBorderUnits?.Tablet} ${headingBeforeAfterTabletBorder?.right}${headingBeforeAfterBorderUnits?.Tablet} ${headingBeforeAfterTabletBorder?.bottom}${headingBeforeAfterBorderUnits?.Tablet} ${headingBeforeAfterTabletBorder?.left}${headingBeforeAfterBorderUnits?.Tablet}`;
    const headingBeforeAfterMobileBorderWidth = `${headingBeforeAfterMobileBorder?.top}${headingBeforeAfterBorderUnits?.Mobile} ${headingBeforeAfterMobileBorder?.right}${headingBeforeAfterBorderUnits?.Mobile} ${headingBeforeAfterMobileBorder?.bottom}${headingBeforeAfterBorderUnits?.Mobile} ${headingBeforeAfterMobileBorder?.left}${headingBeforeAfterBorderUnits?.Mobile}`;

    /** Default border radius for Heading */
    const headingBeforeAfterDesktopBorderRadiusWidth = `${headingBeforeAfterDesktopBorderRadius?.top}${headingBeforeAfterBorderRadiusUnits?.Desktop} ${headingBeforeAfterDesktopBorderRadius?.right}${headingBeforeAfterBorderRadiusUnits?.Desktop} ${headingBeforeAfterDesktopBorderRadius?.bottom}${headingBeforeAfterBorderRadiusUnits?.Desktop} ${headingBeforeAfterDesktopBorderRadius?.left}${headingBeforeAfterBorderRadiusUnits?.Desktop}`;
    const headingBeforeAfterTabletBorderRadiusWidth = `${headingBeforeAfterTabletBorderRadius?.top}${headingBeforeAfterBorderRadiusUnits?.Tablet} ${headingBeforeAfterTabletBorderRadius?.right}${headingBeforeAfterBorderRadiusUnits?.Tablet} ${headingBeforeAfterTabletBorderRadius?.bottom}${headingBeforeAfterBorderRadiusUnits?.Tablet} ${headingBeforeAfterTabletBorderRadius?.left}${headingBeforeAfterBorderRadiusUnits?.Tablet}`;
    const headingBeforeAfterMobileBorderRadiusWidth = `${headingBeforeAfterMobileBorderRadius?.top}${headingBeforeAfterBorderRadiusUnits?.Mobile} ${headingBeforeAfterMobileBorderRadius?.right}${headingBeforeAfterBorderRadiusUnits?.Mobile} ${headingBeforeAfterMobileBorderRadius?.bottom}${headingBeforeAfterBorderRadiusUnits?.Mobile} ${headingBeforeAfterMobileBorderRadius?.left}${headingBeforeAfterBorderRadiusUnits?.Mobile}`;

    /** Default padding for Sub Heading */
    const subHeadingDesktopPaddingWidth = `${subHeadingDesktopPadding?.top}${subHeadingPaddingUnits?.Desktop} ${subHeadingDesktopPadding?.right}${subHeadingPaddingUnits?.Desktop} ${subHeadingDesktopPadding?.bottom}${subHeadingPaddingUnits?.Desktop} ${subHeadingDesktopPadding?.left}${subHeadingPaddingUnits?.Desktop}`;
    const subHeadingTabletPaddingWidth = `${subHeadingTabPadding?.top}${subHeadingPaddingUnits?.Tablet} ${subHeadingTabPadding?.right}${subHeadingPaddingUnits?.Tablet} ${subHeadingTabPadding?.bottom}${subHeadingPaddingUnits?.Tablet} ${subHeadingTabPadding?.left}${subHeadingPaddingUnits?.Tablet}`;
    const subHeadingMobilePaddingWidth = `${subHeadingMobilePadding?.top}${subHeadingPaddingUnits?.Mobile} ${subHeadingMobilePadding?.right}${subHeadingPaddingUnits?.Mobile} ${subHeadingMobilePadding?.bottom}${subHeadingPaddingUnits?.Mobile} ${subHeadingMobilePadding?.left}${subHeadingPaddingUnits?.Mobile}`;

    /** Default margin for Sub Heading */
    const subHeadingDesktopMarginWidth = `${subHeadingDesktopMargin?.top}${subHeadingMarginUnits?.Desktop} ${subHeadingDesktopMargin?.right}${subHeadingMarginUnits?.Desktop} ${subHeadingDesktopMargin?.bottom}${subHeadingMarginUnits?.Desktop} ${subHeadingDesktopMargin?.left}${subHeadingMarginUnits?.Desktop}`;
    const subHeadingTabletMarginWidth = `${subHeadingTabMargin?.top}${subHeadingMarginUnits?.Tablet} ${subHeadingTabMargin?.right}${subHeadingMarginUnits?.Tablet} ${subHeadingTabMargin?.bottom}${subHeadingMarginUnits?.Tablet} ${subHeadingTabMargin?.left}${subHeadingMarginUnits?.Tablet}`;
    const subHeadingMobileMarginWidth = `${subHeadingMobileMargin?.top}${subHeadingMarginUnits?.Mobile} ${subHeadingMobileMargin?.right}${subHeadingMarginUnits?.Mobile} ${subHeadingMobileMargin?.bottom}${subHeadingMarginUnits?.Mobile} ${subHeadingMobileMargin?.left}${subHeadingMarginUnits?.Mobile}`;

    /** Default border for Sub Heading */
    const subHeadingDesktopBorderWidth = `${subHeadingDesktopBorder?.top}${subHeadingBorderUnits?.Desktop} ${subHeadingDesktopBorder?.right}${subHeadingBorderUnits?.Desktop} ${subHeadingDesktopBorder?.bottom}${subHeadingBorderUnits?.Desktop} ${subHeadingDesktopBorder?.left}${subHeadingBorderUnits?.Desktop}`;
    const subHeadingTabletBorderWidth = `${subHeadingTabBorder?.top}${subHeadingBorderUnits?.Tablet} ${subHeadingTabBorder?.right}${subHeadingBorderUnits?.Tablet} ${subHeadingTabBorder?.bottom}${subHeadingBorderUnits?.Tablet} ${subHeadingTabBorder?.left}${subHeadingBorderUnits?.Tablet}`;
    const subHeadingMobileBorderWidth = `${subHeadingMobileBorder?.top}${subHeadingBorderUnits?.Mobile} ${subHeadingMobileBorder?.right}${subHeadingBorderUnits?.Mobile} ${subHeadingMobileBorder?.bottom}${subHeadingBorderUnits?.Mobile} ${subHeadingMobileBorder?.left}${subHeadingBorderUnits?.Mobile}`;

    /** Default border radius for Sub Heading */
    const subHeadingDesktopBorderRadiusWidth = `${subHeadingDesktopBorderRadius?.top}${subHeadingBorderRadiusUnits?.Desktop} ${subHeadingDesktopBorderRadius?.right}${subHeadingBorderRadiusUnits?.Desktop} ${subHeadingDesktopBorderRadius?.bottom}${subHeadingBorderRadiusUnits?.Desktop} ${subHeadingDesktopBorderRadius?.left}${subHeadingBorderRadiusUnits?.Desktop}`;
    const subHeadingTabletBorderRadiusWidth = `${subHeadingTabBorderRadius?.top}${subHeadingBorderRadiusUnits?.Tablet} ${subHeadingTabBorderRadius?.right}${subHeadingBorderRadiusUnits?.Tablet} ${subHeadingTabBorderRadius?.bottom}${subHeadingBorderRadiusUnits?.Tablet} ${subHeadingTabBorderRadius?.left}${subHeadingBorderRadiusUnits?.Tablet}`;
    const subHeadingMobileBorderRadiusWidth = `${subHeadingMobileBorderRadius?.top}${subHeadingBorderRadiusUnits?.Mobile} ${subHeadingMobileBorderRadius?.right}${subHeadingBorderRadiusUnits?.Mobile} ${subHeadingMobileBorderRadius?.bottom}${subHeadingBorderRadiusUnits?.Mobile} ${subHeadingMobileBorderRadius?.left}${subHeadingBorderRadiusUnits?.Mobile}`;

    /** Default border for Icon */
    const headingIconDesktopBorderWidthValue = `${headingIconBorderDesktop?.top}${headingIconBorderUnits?.Desktop} ${headingIconBorderDesktop?.right}${headingIconBorderUnits?.Desktop} ${headingIconBorderDesktop?.bottom}${headingIconBorderUnits?.Desktop} ${headingIconBorderDesktop?.left}${headingIconBorderUnits?.Desktop}`;
    const headingIconTabletBorderWidthValue = `${headingIconBorderTablet?.top}${headingIconBorderUnits?.Tablet} ${headingIconBorderTablet?.right}${headingIconBorderUnits?.Tablet} ${headingIconBorderTablet?.bottom}${headingIconBorderUnits?.Tablet} ${headingIconBorderTablet?.left}${headingIconBorderUnits?.Tablet}`;
    const headingIconMobileBorderWidthValue = `${headingIconBorderMobile?.top}${headingIconBorderUnits?.Mobile} ${headingIconBorderMobile?.right}${headingIconBorderUnits?.Mobile} ${headingIconBorderMobile?.bottom}${headingIconBorderUnits?.Mobile} ${headingIconBorderMobile?.left}${headingIconBorderUnits?.Mobile}`;

    /** Default border radius for Icon */
    const headingIconDesktopBorderRadiusWidthValue = `${headingIconBorderRadiusDesktop?.top}${headingIconBorderRadiusUnits?.Desktop} ${headingIconBorderRadiusDesktop?.right}${headingIconBorderRadiusUnits?.Desktop} ${headingIconBorderRadiusDesktop?.bottom}${headingIconBorderRadiusUnits?.Desktop} ${headingIconBorderRadiusDesktop?.left}${headingIconBorderRadiusUnits?.Desktop}`;
    const headingIconTabletBorderRadiusWidthValue = `${headingIconBorderRadiusTablet?.top}${headingIconBorderRadiusUnits?.Tablet} ${headingIconBorderRadiusTablet?.right}${headingIconBorderRadiusUnits?.Tablet} ${headingIconBorderRadiusTablet?.bottom}${headingIconBorderRadiusUnits?.Tablet} ${headingIconBorderRadiusTablet?.left}${headingIconBorderRadiusUnits?.Tablet}`;
    const headingIconMobileBorderRadiusWidthValue = `${headingIconBorderRadiusMobile?.top}${headingIconBorderRadiusUnits?.Mobile} ${headingIconBorderRadiusMobile?.right}${headingIconBorderRadiusUnits?.Mobile} ${headingIconBorderRadiusMobile?.bottom}${headingIconBorderRadiusUnits?.Mobile} ${headingIconBorderRadiusMobile?.left}${headingIconBorderRadiusUnits?.Mobile}`;

    /** Default padding for Heading */
    const headingIconDesktopPaddingWidth = `${headingIconDesktopPadding?.top}${headingIconPaddingUnits?.Desktop} ${headingIconDesktopPadding?.right}${headingIconPaddingUnits?.Desktop} ${headingIconDesktopPadding?.bottom}${headingIconPaddingUnits?.Desktop} ${headingIconDesktopPadding?.left}${headingIconPaddingUnits?.Desktop}`;
    const headingIconTabletPaddingWidth = `${headingIconTabletPadding?.top}${headingIconPaddingUnits?.Tablet} ${headingIconTabletPadding?.right}${headingIconPaddingUnits?.Tablet} ${headingIconTabletPadding?.bottom}${headingIconPaddingUnits?.Tablet} ${headingIconTabletPadding?.left}${headingIconPaddingUnits?.Tablet}`;
    const headingIconMobilePaddingWidth = `${headingIconMobilePadding?.top}${headingIconPaddingUnits?.Mobile} ${headingIconMobilePadding?.right}${headingIconPaddingUnits?.Mobile} ${headingIconMobilePadding?.bottom}${headingIconPaddingUnits?.Mobile} ${headingIconMobilePadding?.left}${headingIconPaddingUnits?.Mobile}`;

    /** Default Global Padding, Margin, Border, Border Radius start*/
    const globalDesktopPadding = `${headingGlobalPaddingDesktop?.top}${headingGlobalPaddingUnits?.Desktop} ${headingGlobalPaddingDesktop?.right}${headingGlobalPaddingUnits?.Desktop} ${headingGlobalPaddingDesktop?.bottom}${headingGlobalPaddingUnits?.Desktop} ${headingGlobalPaddingDesktop?.left}${headingGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${headingGlobalPaddingTablet?.top}${headingGlobalPaddingUnits?.Tablet} ${headingGlobalPaddingTablet?.right}${headingGlobalPaddingUnits?.Tablet} ${headingGlobalPaddingTablet?.bottom}${headingGlobalPaddingUnits?.Tablet} ${headingGlobalPaddingTablet?.left}${headingGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${headingGlobalPaddingMobile?.top}${headingGlobalPaddingUnits?.Mobile} ${headingGlobalPaddingMobile?.right}${headingGlobalPaddingUnits?.Mobile} ${headingGlobalPaddingMobile?.bottom}${headingGlobalPaddingUnits?.Mobile} ${headingGlobalPaddingMobile?.left}${headingGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${headingGlobalMarginDesktop?.top}${headingGlobalMarginUnits?.Desktop} ${headingGlobalMarginDesktop?.right}${headingGlobalMarginUnits?.Desktop} ${headingGlobalMarginDesktop?.bottom}${headingGlobalMarginUnits?.Desktop} ${headingGlobalMarginDesktop?.left}${headingGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${headingGlobalMarginTablet?.top}${headingGlobalMarginUnits?.Tablet} ${headingGlobalMarginTablet?.right}${headingGlobalMarginUnits?.Tablet} ${headingGlobalMarginTablet?.bottom}${headingGlobalMarginUnits?.Tablet} ${headingGlobalMarginTablet?.left}${headingGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${headingGlobalMarginMobile?.top}${headingGlobalMarginUnits?.Mobile} ${headingGlobalMarginMobile?.right}${headingGlobalMarginUnits?.Mobile} ${headingGlobalMarginMobile?.bottom}${headingGlobalMarginUnits?.Mobile} ${headingGlobalMarginMobile?.left}${headingGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${headingGlobalBorderDesktop?.top}${headingGlobalBorderUnits?.Desktop} ${headingGlobalBorderDesktop?.right}${headingGlobalBorderUnits?.Desktop} ${headingGlobalBorderDesktop?.bottom}${headingGlobalBorderUnits?.Desktop} ${headingGlobalBorderDesktop?.left}${headingGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${headingGlobalBorderTablet?.top}${headingGlobalBorderUnits?.Tablet} ${headingGlobalBorderTablet?.right}${headingGlobalBorderUnits?.Tablet} ${headingGlobalBorderTablet?.bottom}${headingGlobalBorderUnits?.Tablet} ${headingGlobalBorderTablet?.left}${headingGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${headingGlobalBorderMobile?.top}${headingGlobalBorderUnits?.Mobile} ${headingGlobalBorderMobile?.right}${headingGlobalBorderUnits?.Mobile} ${headingGlobalBorderMobile?.bottom}${headingGlobalBorderUnits?.Mobile} ${headingGlobalBorderMobile?.left}${headingGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${headingGlobalBorderRadiusDesktop?.top}${headingGlobalBorderRadiusUnits?.Desktop} ${headingGlobalBorderRadiusDesktop?.right}${headingGlobalBorderRadiusUnits?.Desktop} ${headingGlobalBorderRadiusDesktop?.bottom}${headingGlobalBorderRadiusUnits?.Desktop} ${headingGlobalBorderRadiusDesktop?.left}${headingGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${headingGlobalBorderRadiusTablet?.top}${headingGlobalBorderRadiusUnits?.Tablet} ${headingGlobalBorderRadiusTablet?.right}${headingGlobalBorderRadiusUnits?.Tablet} ${headingGlobalBorderRadiusTablet?.bottom}${headingGlobalBorderRadiusUnits?.Tablet} ${headingGlobalBorderRadiusTablet?.left}${headingGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${headingGlobalBorderRadiusMobile?.top}${headingGlobalBorderRadiusUnits?.Mobile} ${headingGlobalBorderRadiusMobile?.right}${headingGlobalBorderRadiusUnits?.Mobile} ${headingGlobalBorderRadiusMobile?.bottom}${headingGlobalBorderRadiusUnits?.Mobile} ${headingGlobalBorderRadiusMobile?.left}${headingGlobalBorderRadiusUnits?.Mobile}`;
    /** Default Global Padding, Margin, Border, Border Radius end*/

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = headingGlobalBgNormalBackgroundType;
        const bgColor = headingGlobalBgNormalClassicColor;
        const bgGradient = headingGlobalBgNormalGradientColor;
        const customGradient = headingGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = headingGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = headingGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = headingGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = headingGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = headingGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = headingGlobalBgNormalBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Get background hover styles
     */
    const getBackgroundHoverStyles = (device) => {
        const bgType = headingGlobalBgHoverBackgroundType;
        const bgColor = headingGlobalBgHoverClassicColor;
        const bgGradient = headingGlobalBgHoverGradientColor;
        const customGradient = headingGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = headingGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = headingGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = headingGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = headingGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = headingGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = headingGlobalBgHoverBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
    * Convert object to string
    */
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');
    const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
    const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
    const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
    const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
    const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
    const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    // Generate CSS
    const advancedHeadingStyle = `
        .${blockID}.fb-advanced-heading-main-wrapper {
            ${advancedHeadingPositionType === 'default' ? `position: relative !important;` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' ? `width: 100%;` : ''}
            ${advancedHeadingPositionType !== 'default' ? `position: ${advancedHeadingPositionType} !important;` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'left' && advancedHeadingHZLeftOffset?.Desktop ? `left: ${advancedHeadingHZLeftOffset?.Desktop}${advancedHeadingHZLeftOffsetUnits?.Desktop};` : ''} 
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'right' && advancedHeadingHZRightOffset?.Desktop ? `right: ${advancedHeadingHZRightOffset?.Desktop}${advancedHeadingHZRightOffsetUnits?.Desktop};` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'top' && advancedHeadingVRTopOffset?.Desktop ? `top: ${advancedHeadingVRTopOffset?.Desktop}${advancedHeadingVRTopOffsetUnits?.Desktop};` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'bottom' && advancedHeadingVRBottomOffset?.Desktop ? `bottom: ${advancedHeadingVRBottomOffset?.Desktop}${advancedHeadingVRBottomOffsetUnits?.Desktop};` : ''}
            ${headingGlobalZIndex?.Desktop ? `z-index: ${headingGlobalZIndex?.Desktop};` : ''}
            ${advancedHeadingOverflow !== 'default' ? `overflow: ${advancedHeadingOverflow};` : ''}
        }

        .${blockID} .fb-advanced-wrapper {
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPadding && headingGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && headingGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${headingGlobalBorder ? `border: ${headingGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && headingGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && headingGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${headingGlobalBorderColor ? `border-color: ${headingGlobalBorderColor};` : ''}
            ${headingGlobalBoxShadowCssValue ? `box-shadow: ${headingGlobalBoxShadowCssValue};` : ''}
            ${headingAlignment?.Desktop ? `text-align: ${headingAlignment?.Desktop};` : ''}
            position: relative;
            display: flex;
            flex-direction: column;
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-advanced-wrapper:hover {
            ${desktopBackgroundHoverStyles}
            ${headingGlobalBorderHoverColor ? `border-color: ${headingGlobalBorderHoverColor};` : ''}
            ${headingGlobalBoxShadowHoverCssValue ? `box-shadow: ${headingGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link {
            ${headingGlobalTypoSwitcher?.fontFamily === true && headingGlobalTypographyData?.fontFamily ? `font-family: ${headingGlobalTypographyData?.fontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === true && headingGlobalTypographyData?.fontSize ? `font-size: ${headingGlobalTypographyData?.fontSize};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === true && headingGlobalTypographyData?.fontWeight ? `font-weight: ${headingGlobalTypographyData?.fontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === true && headingGlobalTypographyData?.fontStyle ? `font-style: ${headingGlobalTypographyData?.fontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === true && headingGlobalTypographyData?.textTransform ? `text-transform: ${headingGlobalTypographyData?.textTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === true && headingGlobalTypographyData?.textDecoration ? `text-decoration: ${headingGlobalTypographyData?.textDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === true && headingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData?.letterSpacing};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === true && headingGlobalTypographyData?.lineHeight ? `line-height: ${headingGlobalTypographyData?.lineHeight};` : ''}

            ${headingGlobalTypoSwitcher?.fontFamily === false && headingFontFamily && headingFontFamily !== 'Default' ? `font-family: ${headingFontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Desktop && headingFontSizeUnits?.Desktop ? `font-size: ${headingFontSize?.Desktop}${headingFontSizeUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Desktop && headingLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingLetterSpacing?.Desktop}${headingLetterSpacingUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Desktop && headingLineHeightUnits?.Desktop ? `line-height: ${headingLineHeight?.Desktop}${headingLineHeightUnits?.Desktop};` : ''}

            ${headingDesktopPaddingWidth && headingDesktopPadding?.top ? `padding: ${headingDesktopPaddingWidth};` : ''}
            ${headingDesktopMarginWidth && headingDesktopMargin?.top ? `margin: ${headingDesktopMarginWidth};` : ''}
            ${headingBorder ? `border: ${headingBorder};` : ''}
            ${headingDesktopBorderWidth && headingDesktopBorder?.top ? `border-width: ${headingDesktopBorderWidth};` : ''}
            ${headingDesktopBorderRadiusWidth && headingDesktopBorderRadius?.top ? `border-radius: ${headingDesktopBorderRadiusWidth};` : ''}
            ${headingBorderColor ? `border-color: ${headingBorderColor};` : ''}

            ${headingTextShadowCssValue ? `text-shadow: ${headingTextShadowCssValue};` : ''}

            ${headingColor ? `color: ${headingColor};` : ''}
            ${headingTextStroke ? `
                ${headingTextStroke?.Desktop ? `-webkit-text-stroke: ${headingTextStroke?.Desktop}px ${headingTextStrokeColor};` : ''}
                ${headingTextStroke?.Desktop ? `text-stroke: ${headingTextStroke?.Desktop}px ${headingTextStrokeColor};` : ''}
            ` : ''}
            ${headingBoxShadowCssValue ? `box-shadow: ${headingBoxShadowCssValue};` : ''}

            ${headingTextColorType === 'gradient' ? `
                background: ${headingTextCustomGradientColorSwitcher && headingTextCustomGradientColor ? headingTextCustomGradientColor : headingTextGradientColor};
                ${headingTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${headingTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

            ${headingBackgroundImageEnabled && headingBackgroundImageUrl && headingBackgroundImageUrl !== 'null' ? `
                background-image: url(${headingBackgroundImageUrl});
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-position: center;
                background-size: contain;
            ` : ''}

            ${headingBgColorType === "gradient"
            ? `background: ${headingBgCustomGradientColorSwitcher && headingBgCustomGradientColor
                ? headingBgCustomGradientColor
                : headingBgGradientColor
            };`
            : headingBgColor ? `background: ${headingBgColor};` : ''
        }
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-advanced-wrapper .fb-advanced-heading:hover,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link:hover {
            ${headingHoverColor ? `color: ${headingHoverColor};` : ''}
            ${headingTextStrokeHoverColor ? `
                ${headingTextStroke?.Desktop ? `-webkit-text-stroke: ${headingTextStroke?.Desktop}px ${headingTextStrokeHoverColor};` : ''}
                ${headingTextStroke?.Desktop ? `text-stroke: ${headingTextStroke?.Desktop}px ${headingTextStrokeHoverColor};` : ''}
            ` : ''}

            ${headingTextHoverColorType === 'gradient' ? `
                background: ${headingTextHoverCustomGradientColorSwitcher && headingTextHoverCustomGradientColor ? headingTextHoverCustomGradientColor : headingTextHoverGradientColor};
                ${headingTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${headingTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

            ${headingBorderHoverColor ? `border-color: ${headingBorderHoverColor};` : ''}

            ${headingBgHoverColorType === "gradient"
            ? `background: ${headingBgHoverCustomGradientColorSwitcher && headingBgHoverCustomGradientColor
                ? headingBgHoverCustomGradientColor
                : headingBgHoverGradientColor
            };`
            : headingBgHoverColor ? `background: ${headingBgHoverColor};` : ''
        }
            transition: all .3s ease-in-out;
        }

        ${headingBeforeAfterSwitcher ? `
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link{
            display: flex;
            align-items: center;
            justify-content: center;
            ${headingBeforeAfterGap?.Desktop ? `gap: ${headingBeforeAfterGap?.Desktop}${headingBeforeAfterGapUnits?.Desktop};` : ''}
        }
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading::before,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading::after,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link::before,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link::after {
            content: '';
            ${headingBeforeAfterWidth?.Desktop ? `width: ${headingBeforeAfterWidth?.Desktop}${headingBeforeAfterWidthUnits?.Desktop};` : 'flex-grow: 1;'}
            ${headingBeforeAfterHeight?.Desktop ? `height: ${headingBeforeAfterHeight?.Desktop}${headingBeforeAfterHeightUnits?.Desktop};` : ''}
            ${headingBeforeAfterBorder ? `border: ${headingBeforeAfterBorder};` : ''}
            ${headingBeforeAfterDesktopBorderWidth && headingBeforeAfterDesktopBorder?.top ? `border-width: ${headingBeforeAfterDesktopBorderWidth};` : ''}
            ${headingBeforeAfterDesktopBorderRadiusWidth && headingBeforeAfterDesktopBorderRadius?.top ? `border-radius: ${headingBeforeAfterDesktopBorderRadiusWidth};` : ''}
            ${headingBeforeAfterBorderColor ? `border-color: ${headingBeforeAfterBorderColor};` : ''}
        }
        ` : ''}

        .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading, 
        .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading .fb-sub-heading-dynamic-link {
            ${subHeadingColor ? `color: ${subHeadingColor};` : ''}
            ${subHeadingTextColorType === 'gradient' ? `
                background: ${subHeadingTextCustomGradientColorSwitcher && subHeadingTextCustomGradientColor ? subHeadingTextCustomGradientColor : subHeadingTextGradientColor};
                ${subHeadingTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${subHeadingTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

            ${subHeadingGlobalTypoSwitcher?.fontFamily === true && subHeadingGlobalTypographyData?.fontFamily ? `font-family: ${subHeadingGlobalTypographyData?.fontFamily};` : ''}
            ${subHeadingGlobalTypoSwitcher?.fontSize === true && subHeadingGlobalTypographyData?.fontSize ? `font-size: ${subHeadingGlobalTypographyData?.fontSize};` : ''}
            ${subHeadingGlobalTypoSwitcher?.fontWeight === true && subHeadingGlobalTypographyData?.fontWeight ? `font-weight: ${subHeadingGlobalTypographyData?.fontWeight};` : ''}
            ${subHeadingGlobalTypoSwitcher?.fontStyle === true && subHeadingGlobalTypographyData?.fontStyle ? `font-style: ${subHeadingGlobalTypographyData?.fontStyle};` : ''}
            ${subHeadingGlobalTypoSwitcher?.textTransform === true && subHeadingGlobalTypographyData?.textTransform ? `text-transform: ${subHeadingGlobalTypographyData?.textTransform};` : ''}
            ${subHeadingGlobalTypoSwitcher?.textDecoration === true && subHeadingGlobalTypographyData?.textDecoration ? `text-decoration: ${subHeadingGlobalTypographyData?.textDecoration};` : ''}
            ${subHeadingGlobalTypoSwitcher?.letterSpacing === true && subHeadingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${subHeadingGlobalTypographyData?.letterSpacing};` : ''}
            ${subHeadingGlobalTypoSwitcher?.lineHeight === true && subHeadingGlobalTypographyData?.lineHeight ? `line-height: ${subHeadingGlobalTypographyData?.lineHeight};` : ''}

            ${subHeadingGlobalTypoSwitcher?.fontFamily === false && subHeadingFontFamily && subHeadingFontFamily !== 'Default' ? `font-family: ${subHeadingFontFamily};` : ''}
            ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Desktop && subHeadingFontSizeUnits?.Desktop ? `font-size: ${subHeadingFontSize?.Desktop}${subHeadingFontSizeUnits?.Desktop};` : ''}
            ${subHeadingGlobalTypoSwitcher?.fontWeight === false && subHeadingFontWeight ? `font-weight: ${subHeadingFontWeight};` : ''}
            ${subHeadingGlobalTypoSwitcher?.fontStyle === false && subHeadingFontStyle ? `font-style: ${subHeadingFontStyle};` : ''}
            ${subHeadingGlobalTypoSwitcher?.textTransform === false && subHeadingTextTransform ? `text-transform: ${subHeadingTextTransform};` : ''}
            ${subHeadingGlobalTypoSwitcher?.textDecoration === false && subHeadingTextDecoration ? `text-decoration: ${subHeadingTextDecoration};` : ''}
            ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Desktop && subHeadingLetterSpacingUnits?.Desktop ? `letter-spacing: ${subHeadingLetterSpacing?.Desktop}${subHeadingLetterSpacingUnits?.Desktop};` : ''}
            ${subHeadingGlobalTypoSwitcher.lineHeight === false && subHeadingLineHeight?.Desktop && subHeadingLineHeightUnits?.Desktop ? `line-height: ${subHeadingLineHeight?.Desktop}${subHeadingLineHeightUnits?.Desktop};` : ''}

            ${subHeadingDesktopPaddingWidth && subHeadingDesktopPadding?.top ? `padding: ${subHeadingDesktopPaddingWidth};` : ''}
            ${subHeadingDesktopMarginWidth && subHeadingDesktopMargin?.top ? `margin: ${subHeadingDesktopMarginWidth};` : ''}
            ${subHeadingBorder ? `border: ${subHeadingBorder};` : ''}
            ${subHeadingDesktopBorderWidth && subHeadingDesktopBorder?.top ? `border-width: ${subHeadingDesktopBorderWidth};` : ''}
            ${subHeadingDesktopBorderRadiusWidth && subHeadingDesktopBorderRadius?.top ? `border-radius: ${subHeadingDesktopBorderRadiusWidth};` : ''}
            ${subHeadingBorderColor ? `border-color: ${subHeadingBorderColor};` : ''}
            ${subHeadingTextShadowCssValue ? `text-shadow: ${subHeadingTextShadowCssValue};` : ''}
            ${subHeadingTextStroke ? `
                ${subHeadingTextStroke?.Desktop ? `-webkit-text-stroke: ${subHeadingTextStroke?.Desktop}px ${subHeadingTextStrokeColor};` : ''}
                ${subHeadingTextStroke?.Desktop ? `text-stroke: ${subHeadingTextStroke?.Desktop}px ${subHeadingTextStrokeColor};` : ''}
            ` : ''}
            ${subHeadingBoxShadowCssValue ? `box-shadow: ${subHeadingBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            ${subHeadingBgColorType === "gradient"
            ? `background: ${subHeadingBgCustomGradientColorSwitcher && subHeadingBgCustomGradientColor
                ? subHeadingBgCustomGradientColor
                : subHeadingBgGradientColor
            };`
            : subHeadingBgColor ? `background: ${subHeadingBgColor};` : ''
        }
        }

        .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading:hover,
        .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading .fb-sub-heading-dynamic-link:hover {
            ${subHeadingHoverColor ? `color: ${subHeadingHoverColor};` : ''}
            ${subHeadingTextHoverColorType === 'gradient' ? `
                background: ${subHeadingTextHoverCustomGradientColorSwitcher && subHeadingTextHoverCustomGradientColor ? subHeadingTextHoverCustomGradientColor : subHeadingTextHoverGradientColor};
                ${subHeadingTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${subHeadingTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
            ${subHeadingBorderHoverColor ? `border-color: ${subHeadingBorderHoverColor};` : ''}
            ${subHeadingTextStroke ? `
                ${subHeadingTextStroke?.Desktop ? `-webkit-text-stroke: ${subHeadingTextStroke?.Desktop}px ${subHeadingTextStrokeHoverColor};` : ''}
                ${subHeadingTextStroke?.Desktop ? `text-stroke: ${subHeadingTextStroke?.Desktop}px ${subHeadingTextStrokeHoverColor};` : ''}
            ` : ''}
            ${subHeadingBgHoverColorType === "gradient"
            ? `background: ${subHeadingBgHoverCustomGradientColorSwitcher && subHeadingBgHoverCustomGradientColor
                ? subHeadingBgHoverCustomGradientColor
                : subHeadingBgHoverGradientColor
            };`
            : subHeadingBgHoverColor ? `background: ${subHeadingBgHoverColor};` : ''
        }
        }

        .${blockID} .fb-advanced-icon-wrapper {
            ${headingAlignment?.Desktop ? `justify-content: ${headingAlignment?.Desktop};` : ''}
            ${headingIconDesktopPaddingWidth && headingIconDesktopPadding?.top ? `padding: ${headingIconDesktopPaddingWidth};` : ''}
            width: auto;
        }

        .${blockID} .fb-advanced-icon {
            ${headingIconBgSize?.Desktop ? `width: ${headingIconBgSize?.Desktop}${headingIconBgSizeUnits?.Desktop};` : ''}
            ${headingIconBgSize?.Desktop ? `height: ${headingIconBgSize?.Desktop}${headingIconBgSizeUnits?.Desktop};` : ''}
            ${headingIconBgColor ? `background-color: ${headingIconBgColor};` : ''}
            ${headingIconBorder ? `border: ${headingIconBorder};` : ''}
            ${headingIconDesktopBorderWidthValue && headingIconBorderDesktop?.top ? `border-width: ${headingIconDesktopBorderWidthValue};` : ''}
            ${headingIconBorderColor ? `border-color: ${headingIconBorderColor};` : ''}
            ${headingIconDesktopBorderRadiusWidthValue && headingIconBorderRadiusDesktop?.top ? `border-radius: ${headingIconDesktopBorderRadiusWidthValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-advanced-icon svg {
            ${headingIconSize?.Desktop ? `width: ${headingIconSize?.Desktop}${headingIconSizeUnits?.Desktop};` : ''}
            ${headingIconSize?.Desktop ? `height: ${headingIconSize?.Desktop}${headingIconSizeUnits?.Desktop};` : ''}
            ${headingIconColor ? `fill: ${headingIconColor};` : ''}
        }
        .${blockID} .fb-advanced-icon:hover {
            ${headingIconHoverColor ? `color: ${headingIconHoverColor};` : ''}
            ${headingIconBgHoverColor ? `background-color: ${headingIconBgHoverColor};` : ''}
            ${headingIconBorderHoverColor ? `border-color: ${headingIconBorderHoverColor};` : ''}
        }
        .${blockID} .fb-advanced-icon:hover svg {
            ${headingIconHoverColor ? `fill: ${headingIconHoverColor};` : ''}
        }

        .${blockID} .fb-advanced-wrapper .fb-advanced-title-separator {
            display: inline-block;
            ${separator && separatorWidth?.Desktop && separatorWidthUnits?.Desktop ? `width: ${separatorWidth?.Desktop}${separatorWidthUnits?.Desktop};` : ''}
            ${separator !== 'zigzag' && separatorHeight?.Desktop && separatorHeightUnits?.Desktop ? `border-top-width: ${separatorHeight?.Desktop}${separatorHeightUnits?.Desktop};` : ''}
            ${separator !== 'zigzag' ? `border-top-style: ${separator};` : ''}
            ${separator !== 'zigzag' && separatorColor ? `border-top-color: ${separatorColor};` : ''}
            ${separatorPosition === 'bottom' ?
            `${separatorSpacing?.Desktop && separatorSpacingUnits?.Desktop ?
                `margin-top: ${separatorSpacing?.Desktop}${separatorSpacingUnits?.Desktop};`
                : ''}`
            : separatorPosition === 'top' ?
                `${separatorSpacing?.Desktop && separatorSpacingUnits?.Desktop ?
                    `margin-bottom: ${separatorSpacing?.Desktop}${separatorSpacingUnits?.Desktop};`
                    : ''}`
                : ''}
            
            align-self: ${
                headingAlignment.Desktop === 'center' ? 'center' :
                headingAlignment.Desktop === 'right'  ? 'self-end' : 'self-start'
            };
            
        }
        .${blockID} .fb-advanced-wrapper .fb-advanced-title-separator-zigzag {
            display: flex;
        }        
        .${blockID} .fb-advanced-wrapper .fb-advanced-title-separator:hover {
            ${separatorHoverColor ? `border-top-color: ${separatorHoverColor};` : ''}
        }
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading.active-line::after,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link.active-line::after {
            ${activeLineAfterWidth?.Desktop && activeLineAfterWidthUnits?.Desktop ? `width: ${activeLineAfterWidth?.Desktop}${activeLineAfterWidthUnits?.Desktop};` : ''}
            ${activeLineAfterHeight?.Desktop && activeLineAfterHeightUnits?.Desktop ? `height: ${activeLineAfterHeight?.Desktop}${activeLineAfterHeightUnits?.Desktop};` : ''}
            ${activeLineAfterColor ? `background-color: ${activeLineAfterColor};` : ''}
        }

        .${blockID} .fb-advanced-wrapper .fb-advanced-heading.active-line::before,
        .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link.active-line::before {
            ${activeLineBeforeWidth?.Desktop && activeLineBeforeWidthUnits?.Desktop ? `width: ${activeLineBeforeWidth?.Desktop}${activeLineBeforeWidthUnits?.Desktop};` : ''}
            ${activeLineBeforeHeight?.Desktop && activeLineBeforeHeightUnits?.Desktop ? `height: ${activeLineBeforeHeight?.Desktop}${activeLineBeforeHeightUnits?.Desktop};` : ''}
            ${activeLineBeforeColor ? `background-color: ${activeLineBeforeColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {


            .${blockID}.fb-advanced-heading-main-wrapper {
                ${advancedHeadingPositionType !== 'default' ? `position: ${advancedHeadingPositionType};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'left' && advancedHeadingHZLeftOffset?.Tablet ? `left: ${advancedHeadingHZLeftOffset?.Tablet}${advancedHeadingHZLeftOffsetUnits?.Tablet};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'right' && advancedHeadingHZRightOffset?.Tablet ? `right: ${advancedHeadingHZRightOffset?.Tablet}${advancedHeadingHZRightOffsetUnits?.Tablet};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'top' && advancedHeadingVRTopOffset?.Tablet ? `top: ${advancedHeadingVRTopOffset?.Tablet}${advancedHeadingVRTopOffsetUnits?.Tablet};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'bottom' && advancedHeadingVRBottomOffset?.Tablet ? `bottom: ${advancedHeadingVRBottomOffset?.Tablet}${advancedHeadingVRBottomOffsetUnits?.Tablet};` : ''}
                ${headingGlobalZIndex?.Tablet ? `z-index: ${headingGlobalZIndex?.Tablet};` : ''}
            }

            .${blockID} .fb-advanced-wrapper {
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && headingGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && headingGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && headingGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && headingGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                ${headingAlignment?.Tablet ? `text-align: ${headingAlignment?.Tablet};` : ''}
            }

            .${blockID} .fb-advanced-wrapper:hover {
                ${tabletBackgroundHoverStyles}
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-heading,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link {
                ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
                ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
                ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight?.Tablet}${headingLineHeightUnits?.Tablet};` : ''}
                ${headingTabletPaddingWidth && headingTabPadding?.top ? `padding: ${headingTabletPaddingWidth};` : ''} 
                ${headingTabletMarginWidth && headingTabMargin?.top ? `margin: ${headingTabletMarginWidth};` : ''}
                ${headingTabletBorderWidth && headingTabletBorder?.top ? `border-width: ${headingTabletBorderWidth};` : ''}
                ${headingTabletBorderRadiusWidth && headingTabBorderRadius?.top ? `border-radius: ${headingTabletBorderRadiusWidth};` : ''}

                ${headingTextStroke ? `
                    ${headingTextStroke?.Tablet ? `-webkit-text-stroke: ${headingTextStroke?.Tablet}px ${headingTextStrokeColor};` : ''} 
                    ${headingTextStroke?.Tablet ? `text-stroke: ${headingTextStroke?.Tablet}px ${headingTextStrokeColor};` : ''}
                ` : ''}
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-heading:hover,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link:hover {
                ${headingTextStrokeHoverColor ? `
                    ${headingTextStroke?.Tablet ? `-webkit-text-stroke: ${headingTextStroke?.Tablet}px ${headingTextStrokeHoverColor};` : ''}
                    ${headingTextStroke?.Tablet ? `text-stroke: ${headingTextStroke?.Tablet}px ${headingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            ${headingBeforeAfterSwitcher ? `
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link{
                ${headingBeforeAfterGap?.Tablet ? `gap: ${headingBeforeAfterGap?.Tablet}${headingBeforeAfterGapUnits?.Tablet};` : ''} 
            }
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading::before,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading::after,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link::before,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link::after {
                ${headingBeforeAfterWidth?.Tablet ? `width: ${headingBeforeAfterWidth?.Tablet}${headingBeforeAfterWidthUnits?.Tablet};` : 'flex-grow: 1;'}
                ${headingBeforeAfterHeight?.Tablet ? `height: ${headingBeforeAfterHeight?.Tablet}${headingBeforeAfterHeightUnits?.Tablet};` : ''}
                ${headingBeforeAfterTabletBorderWidth && headingBeforeAfterTabletBorder?.top ? `border-width: ${headingBeforeAfterTabletBorderWidth};` : ''}
                ${headingBeforeAfterTabletBorderRadiusWidth && headingBeforeAfterTabletBorderRadius?.top ? `border-radius: ${headingBeforeAfterTabletBorderRadiusWidth};` : ''}
            }
            ` : ''}

            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading,
            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading .fb-sub-heading-dynamic-link {
                ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Tablet && subHeadingFontSizeUnits?.Tablet ? `font-size: ${subHeadingFontSize?.Tablet}${subHeadingFontSizeUnits?.Tablet};` : ''}
                ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Tablet && subHeadingLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingLetterSpacing?.Tablet}${subHeadingLetterSpacingUnits?.Tablet};` : ''}
                ${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Tablet && subHeadingLineHeightUnits?.Tablet ? `line-height: ${subHeadingLineHeight?.Tablet}${subHeadingLineHeightUnits?.Tablet};` : ''}
                ${subHeadingTabletPaddingWidth && subHeadingTabPadding?.top ? `padding: ${subHeadingTabletPaddingWidth};` : ''}
                ${subHeadingTabletMarginWidth && subHeadingTabMargin?.top ? `margin: ${subHeadingTabletMarginWidth};` : ''}
                ${subHeadingTabletBorderWidth && subHeadingTabBorder?.top ? `border-width: ${subHeadingTabletBorderWidth};` : ''}
                ${subHeadingTabletBorderRadiusWidth && subHeadingTabBorderRadius?.top ? `border-radius: ${subHeadingTabletBorderRadiusWidth};` : ''} 
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke?.Tablet ? `-webkit-text-stroke: ${subHeadingTextStroke?.Tablet}px ${subHeadingTextStrokeColor};` : ''}
                    ${subHeadingTextStroke?.Tablet ? `text-stroke: ${subHeadingTextStroke?.Tablet}px ${subHeadingTextStrokeColor};` : ''}
                ` : ''}
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading:hover,
            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading .fb-sub-heading-dynamic-link:hover {
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke?.Tablet ? `-webkit-text-stroke: ${subHeadingTextStroke?.Tablet}px ${subHeadingTextStrokeHoverColor};` : ''}
                    ${subHeadingTextStroke?.Tablet ? `text-stroke: ${subHeadingTextStroke?.Tablet}px ${subHeadingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            .${blockID} .fb-advanced-icon-wrapper {
                ${headingAlignment?.Tablet ? `justify-content: ${headingAlignment?.Tablet};` : ''}

                ${headingIconTabletPaddingWidth && headingIconTabletPadding?.top ? `padding: ${headingIconTabletPaddingWidth};` : ''}
                width: auto;
            }

            .${blockID} .fb-advanced-icon {
                ${headingIconBgSize?.Tablet ? `width: ${headingIconBgSize?.Tablet}${headingIconBgSizeUnits?.Tablet};` : ''}
                ${headingIconBgSize?.Tablet ? `height: ${headingIconBgSize?.Tablet}${headingIconBgSizeUnits?.Tablet};` : ''} 
                ${headingIconTabletBorderWidthValue && headingIconBorderTablet?.top ? `border-width: ${headingIconTabletBorderWidthValue};` : ''}
                ${headingIconTabletBorderRadiusWidthValue && headingIconBorderRadiusTablet?.top ? `border-radius: ${headingIconTabletBorderRadiusWidthValue};` : ''}
            }
            .${blockID} .fb-advanced-icon svg {
                ${headingIconSize?.Tablet ? `width: ${headingIconSize?.Tablet}${headingIconSizeUnits?.Tablet};` : ''}
                ${headingIconSize?.Tablet ? `height: ${headingIconSize?.Tablet}${headingIconSizeUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-advanced-wrapper .fb-advanced-title-separator {
                ${separatorWidth?.Tablet && separatorWidthUnits?.Tablet ? `width: ${separatorWidth?.Tablet}${separatorWidthUnits?.Tablet};` : ''}
                ${separatorHeight?.Tablet && separatorHeightUnits?.Tablet ? `border-top-width: ${separatorHeight?.Tablet}${separatorHeightUnits?.Tablet};` : ''} 
                ${separatorPosition === 'bottom' ?
            `${separatorSpacing?.Tablet && separatorSpacingUnits?.Tablet ?
                `margin-top: ${separatorSpacing?.Tablet}${separatorSpacingUnits?.Tablet};`
                : ''}`
            : separatorPosition === 'top' ?
                `${separatorSpacing?.Tablet && separatorSpacingUnits?.Tablet ?
                    `margin-bottom: ${separatorSpacing?.Tablet}${separatorSpacingUnits?.Tablet};`
                    : ''}`
                : ''}
                    
                align-self: ${
                    headingAlignment.Tablet === 'center' ? 'center' :
                    headingAlignment.Tablet === 'right'  ? 'self-end' : 'self-start'
                };
            }
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading.active-line::after,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link.active-line::after {
                ${activeLineAfterWidth?.Tablet && activeLineAfterWidthUnits?.Tablet ? `width: ${activeLineAfterWidth?.Tablet}${activeLineAfterWidthUnits?.Tablet};` : ''}
                ${activeLineAfterHeight?.Tablet && activeLineAfterHeightUnits?.Tablet ? `height: ${activeLineAfterHeight?.Tablet}${activeLineAfterHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading.active-line::before,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link.active-line::before {
                ${activeLineBeforeWidth?.Tablet && activeLineBeforeWidthUnits?.Tablet ? `width: ${activeLineBeforeWidth?.Tablet}${activeLineBeforeWidthUnits?.Tablet};` : ''}
                ${activeLineBeforeHeight?.Tablet && activeLineBeforeHeightUnits?.Tablet ? `height: ${activeLineBeforeHeight?.Tablet}${activeLineBeforeHeightUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link {
                ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
                ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
                ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
                ${headingMobilePaddingWidth && headingMobilePadding?.top ? `padding: ${headingMobilePaddingWidth};` : ''}
                ${headingMobileMarginWidth && headingMobileMargin?.top ? `margin: ${headingMobileMarginWidth};` : ''}
                ${headingMobileBorderWidth && headingMobileBorder?.top ? `border-width: ${headingMobileBorderWidth};` : ''}
                ${headingMobileBorderRadiusWidth && headingMobileBorderRadius?.top ? `border-radius: ${headingMobileBorderRadiusWidth};` : ''}
                ${headingTextStroke ? `
                    ${headingTextStroke?.Mobile ? `-webkit-text-stroke: ${headingTextStroke?.Mobile}px ${headingTextStrokeColor};` : ''}
                    ${headingTextStroke?.Mobile ? `text-stroke: ${headingTextStroke?.Mobile}px ${headingTextStrokeColor};` : ''}
                ` : ''}
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-heading:hover,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link:hover {
                ${headingTextStrokeHoverColor ? `
                    ${headingTextStroke?.Mobile ? `-webkit-text-stroke: ${headingTextStroke?.Mobile}px ${headingTextStrokeHoverColor};` : ''}
                    ${headingTextStroke?.Mobile ? `text-stroke: ${headingTextStroke?.Mobile}px ${headingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading,
            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading .fb-sub-heading-dynamic-link {
                ${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Mobile && subHeadingFontSizeUnits?.Mobile ? `font-size: ${subHeadingFontSize?.Mobile}${subHeadingFontSizeUnits?.Mobile};` : ''}
                ${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Mobile && subHeadingLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingLetterSpacing?.Mobile}${subHeadingLetterSpacingUnits?.Mobile};` : ''}
                ${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Mobile && subHeadingLineHeightUnits?.Mobile ? `line-height: ${subHeadingLineHeight?.Mobile}${subHeadingLineHeightUnits?.Mobile};` : ''}
                ${subHeadingMobilePaddingWidth && subHeadingMobilePadding?.top ? `padding: ${subHeadingMobilePaddingWidth};` : ''}
                ${subHeadingMobileMarginWidth && subHeadingMobileMargin?.top ? `margin: ${subHeadingMobileMarginWidth};` : ''}
                ${subHeadingMobileBorderWidth && subHeadingMobileBorder?.top ? `border-width: ${subHeadingMobileBorderWidth};` : ''}
                ${subHeadingMobileBorderRadiusWidth && subHeadingMobileBorderRadius?.top ? `border-radius: ${subHeadingMobileBorderRadiusWidth};` : ''}
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke?.Mobile ? `-webkit-text-stroke: ${subHeadingTextStroke?.Mobile}px ${subHeadingTextStrokeColor};` : ''}
                    ${subHeadingTextStroke?.Mobile ? `text-stroke: ${subHeadingTextStroke?.Mobile}px ${subHeadingTextStrokeColor};` : ''}
                ` : ''}
            }
            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading:hover
            .${blockID} .fb-advanced-wrapper .fb-advanced-sub-heading .fb-sub-heading-dynamic-link:hover {
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke?.Mobile ? `-webkit-text-stroke: ${subHeadingTextStroke?.Mobile}px ${subHeadingTextStrokeHoverColor};` : ''}
                    ${subHeadingTextStroke?.Mobile ? `text-stroke: ${subHeadingTextStroke?.Mobile}px ${subHeadingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            ${headingBeforeAfterSwitcher ? `
                .${blockID} .fb-advanced-wrapper .fb-advanced-heading,
                .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link{
                    ${headingBeforeAfterGap?.Mobile ? `gap: ${headingBeforeAfterGap?.Mobile}${headingBeforeAfterGapUnits?.Mobile};` : ''}
                }
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading::before,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading::after,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link::before,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link::after {
                ${headingBeforeAfterWidth?.Mobile ? `width: ${headingBeforeAfterWidth?.Mobile}${headingBeforeAfterWidthUnits?.Mobile};` : 'flex-grow: 1;'}
                ${headingBeforeAfterHeight?.Mobile ? `height: ${headingBeforeAfterHeight?.Mobile}${headingBeforeAfterHeightUnits?.Mobile};` : ''} 
                ${headingBeforeAfterMobileBorderWidth && headingBeforeAfterMobileBorder?.top ? `border-width: ${headingBeforeAfterMobileBorderWidth};` : ''}
                ${headingBeforeAfterMobileBorderRadiusWidth && headingBeforeAfterMobileBorderRadius?.top ? `border-radius: ${headingBeforeAfterMobileBorderRadiusWidth};` : ''}
            }
            ` : ''}

            .${blockID} .fb-advanced-icon-wrapper {
                ${headingAlignment?.Mobile ? `justify-content: ${headingAlignment?.Mobile};` : ''}
                ${headingIconMobilePaddingWidth && headingIconMobilePadding?.top ? `padding: ${headingIconMobilePaddingWidth};` : ''}
                width: auto;
            }

            .${blockID} .fb-advanced-icon {
                ${headingIconBgSize?.Mobile ? `width: ${headingIconBgSize?.Mobile}${headingIconBgSizeUnits?.Mobile};` : ''}
                ${headingIconBgSize?.Mobile ? `height: ${headingIconBgSize?.Mobile}${headingIconBgSizeUnits?.Mobile};` : ''}
                ${headingIconMobileBorderWidthValue && headingIconBorderMobile?.top ? `border-width: ${headingIconMobileBorderWidthValue};` : ''}
                ${headingIconMobileBorderRadiusWidthValue && headingIconBorderRadiusMobile?.top ? `border-radius: ${headingIconMobileBorderRadiusWidthValue};` : ''}
            }
            .${blockID} .fb-advanced-icon svg {
                ${headingIconSize?.Mobile ? `width: ${headingIconSize?.Mobile}${headingIconSizeUnits?.Mobile};` : ''}
                ${headingIconSize?.Mobile ? `height: ${headingIconSize?.Mobile}${headingIconSizeUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-advanced-wrapper .fb-advanced-title-separator {
                ${separatorWidth?.Mobile && separatorWidthUnits?.Mobile ? `width: ${separatorWidth?.Mobile}${separatorWidthUnits?.Mobile};` : ''}
                ${separatorHeight?.Mobile && separatorHeightUnits?.Mobile ? `border-top-width: ${separatorHeight?.Mobile}${separatorHeightUnits?.Mobile};` : ''}
                ${separatorPosition === 'bottom' ?
            `${separatorSpacing?.Mobile && separatorSpacingUnits?.Mobile ?
                `margin-top: ${separatorSpacing?.Mobile}${separatorSpacingUnits?.Mobile};`
                : ''}`
            : separatorPosition === 'top' ?
                `${separatorSpacing?.Mobile && separatorSpacingUnits?.Mobile ?
                    `margin-bottom: ${separatorSpacing?.Mobile}${separatorSpacingUnits?.Mobile};`
                    : ''}`
                : ''}

                align-self: ${
                    headingAlignment.Mobile === 'center' ? 'center' :
                    headingAlignment.Mobile === 'right'  ? 'self-end' : 'self-start'
                };
            }

            .${blockID}.fb-advanced-heading-main-wrapper {
                ${advancedHeadingPositionType !== 'default' ? `position: ${advancedHeadingPositionType};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'left' && advancedHeadingHZLeftOffset.Mobile ? `left: ${advancedHeadingHZLeftOffset.Mobile}${advancedHeadingHZLeftOffsetUnits.Mobile};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'right' && advancedHeadingHZRightOffset?.Mobile ? `right: ${advancedHeadingHZRightOffset?.Mobile}${advancedHeadingHZRightOffsetUnits?.Mobile};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'top' && advancedHeadingVRTopOffset?.Mobile ? `top: ${advancedHeadingVRTopOffset?.Mobile}${advancedHeadingVRTopOffsetUnits?.Mobile};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'bottom' && advancedHeadingVRBottomOffset?.Mobile ? `bottom: ${advancedHeadingVRBottomOffset?.Mobile}${advancedHeadingVRBottomOffsetUnits?.Mobile};` : ''}
                ${headingGlobalZIndex?.Mobile ? `z-index: ${headingGlobalZIndex?.Mobile};` : ''}
            }
            .${blockID} .fb-advanced-wrapper {
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && headingGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && headingGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && headingGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && headingGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                ${headingAlignment?.Mobile ? `text-align: ${headingAlignment?.Mobile};` : ''}
            }

            .${blockID} .fb-advanced-wrapper:hover {
                ${mobileBackgroundHoverStyles}
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-heading.active-line::after,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link.active-line::after {
                ${activeLineAfterWidth?.Mobile && activeLineAfterWidthUnits?.Mobile ? `width: ${activeLineAfterWidth?.Mobile}${activeLineAfterWidthUnits?.Mobile};` : ''}
                ${activeLineAfterHeight?.Mobile && activeLineAfterHeightUnits?.Mobile ? `height: ${activeLineAfterHeight?.Mobile}${activeLineAfterHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading.active-line::before,
            .${blockID} .fb-advanced-wrapper .fb-advanced-heading .fb-heading-dynamic-link.active-line::before {
                ${activeLineBeforeWidth?.Mobile && activeLineBeforeWidthUnits?.Mobile ? `width: ${activeLineBeforeWidth?.Mobile}${activeLineBeforeWidthUnits?.Mobile};` : ''}
                ${activeLineBeforeHeight?.Mobile && activeLineBeforeHeightUnits?.Mobile ? `height: ${activeLineBeforeHeight?.Mobile}${activeLineBeforeHeightUnits?.Mobile};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(advancedHeadingCustomCSS, `.${blockID}`);
    return `${advancedHeadingStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateAdvancedHeadingStyle;