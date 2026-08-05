/**
 * Slider Block Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generateSliderStyle = (attributes) => {
    const {
        blockID,
        sliderItems,
        blockStyle,
        autoplay,
        autoplaySpeed,
        loop,
        transitionSpeed,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
        enableKeyboardNavigation,
        displayArrows,
        displayDots,
        paginationType,
        sliderHeight,
        sliderHeightUnits,
        sliderType,
        slideEffect,
        carouselEffect,
        carouselPerColumn,
        carouselPerColumnGap,
        carouselPerColumnGapUnits,

        /** Start Position */
        sliderArrowPositionType,
        sliderArrowPosition,
        sliderArrowDirection,
        sliderArrowGap,
        sliderArrowGapUnits,

        sliderNavigationTransform,
        sliderNavigationTransformUnits,

        sliderNavigationLeftIconRotate,
		sliderNavigationLeftIconRotateHover,
        sliderNavigationRightIconRotate,
		sliderNavigationRightIconRotateHover,

        sliderNavigationBgColorSwitcher,
        sliderNavigationBgNormalBackgroundType,
        sliderNavigationBgNormalClassicColor,
        sliderNavigationBgNormalGradientColor,
        sliderNavigationBgNormalCustomGradientSwitcher,
        sliderNavigationBgNormalCustomGradientInputValue,
        sliderNavigationBgHoverBackgroundType,
        sliderNavigationBgHoverClassicColor,
        sliderNavigationBgHoverGradientColor,
        sliderNavigationBgHoverCustomGradientSwitcher,
        sliderNavigationBgHoverCustomGradientInputValue,

        sliderNavigationBorder,
        sliderNavigationBorderColorSwitcher,
        sliderNavigationBorderColor,
        sliderNavigationBorderHoverColor,

        sliderNavigationBorderUnits,
        sliderNavigationBorderDesktop,
        sliderNavigationBorderTablet,
        sliderNavigationBorderMobile,
        sliderNavigationBorderLink,

        sliderNavigationBorderRadiusUnits,
        sliderNavigationBorderRadiusDesktop,
        sliderNavigationBorderRadiusTablet,
        sliderNavigationBorderRadiusMobile,
        sliderNavigationBorderRadiusLink,

        sliderNavigationPaddingUnits,
        sliderNavigationPaddingDesktop,
        sliderNavigationPaddingTablet,
        sliderNavigationPaddingMobile,
        sliderNavigationPaddingLink,

        sliderArrowPositionTopOffset,
        sliderArrowPositionTopOffsetUnits,
        sliderArrowPositionLeftOffset,
        sliderArrowPositionLeftOffsetUnits,
        sliderArrowPositionRightOffset,
        sliderArrowPositionRightOffsetUnits,
        sliderArrowPositionBottomOffset,
        sliderArrowPositionBottomOffsetUnits,

        sliderArrowPositionOutsidePadding,
        sliderArrowPositionOutsidePaddingUnits,
        /** End Position */

        /** Slider Arrows Style */
        sliderArrowsIconSwitcher,

        sliderArrowsIconLeftAlign,
        sliderArrowsIconLeft,
        sliderArrowsIconLeftImageUrl,
        sliderArrowsIconLeftImageAlt,
        sliderArrowsIconLeftImageID,

        sliderArrowsIconRightAlign,
        sliderArrowsIconRight,
        sliderArrowsIconRightImageUrl,
        sliderArrowsIconRightImageAlt,
        sliderArrowsIconRightImageID,

        sliderArrowsSize,
        sliderArrowsSizeUnits,
        sliderArrowsColorSwitcher,
        sliderArrowsColor,
        sliderArrowsColorHover,

        sliderArrowsBgColorSwitcher,
        sliderArrowsBgColor,
        sliderArrowsBgColorHover,

        sliderArrowsWidth,
        sliderArrowsWidthUnits,
        sliderArrowsHeight,
        sliderArrowsHeightUnits,

        /** Border Settings */
        sliderArrowsBorder,
        sliderArrowsBorderColorSwitcher,
        sliderArrowsBorderColor,
        sliderArrowsBorderHoverColor,
        sliderArrowsBorderUnits,
        sliderArrowsBorderDesktop,
        sliderArrowsBorderTablet,
        sliderArrowsBorderMobile,
        sliderArrowsBorderLink,

        /** Border Radius */
        sliderArrowsBorderRadiusUnits,
        sliderArrowsBorderRadiusDesktop,
        sliderArrowsBorderRadiusTablet,
        sliderArrowsBorderRadiusMobile,
        sliderArrowsBorderRadiusLink,

        /** Box Shadow */
        sliderArrowsBoxShadowSwitcher,
        sliderArrowsBoxShadowValues,
        sliderArrowsBoxShadowCssValue,
        sliderArrowsBoxShadowHoverValues,
        sliderArrowsBoxShadowHoverCssValue,

        /** Dots Style */

        sliderDotsMarginUnits,
        sliderDotsMarginDesktop,
        sliderDotsMarginTablet,
        sliderDotsMarginMobile,
        sliderDotsMarginLink,

        sliderDotsPosition,
        sliderDotsPositionUnits,

        sliderDotsSwitcher,
        sliderNormalDotsBgColor,
        sliderNormalDotsWidth,
        sliderNormalDotsWidthUnits,
        sliderNormalDotsHeight,
        sliderNormalDotsHeightUnits,

        sliderNormalDotsBorder,
        sliderNormalDotsBorderColorSwitcher,
        sliderNormalDotsBorderColor,
        sliderNormalDotsBorderHoverColor,

        sliderNormalDotsBorderUnits,
        sliderNormalDotsBorderDesktop,
        sliderNormalDotsBorderTablet,
        sliderNormalDotsBorderMobile,
        sliderNormalDotsBorderLink,

        sliderNormalDotsBorderRadiusUnits,
        sliderNormalDotsBorderRadiusDesktop,
        sliderNormalDotsBorderRadiusTablet,
        sliderNormalDotsBorderRadiusMobile,
        sliderNormalDotsBorderRadiusLink,

        sliderActiveDotsBgColor,
        sliderActiveDotsWidth,
        sliderActiveDotsWidthUnits,
        sliderActiveDotsHeight,
        sliderActiveDotsHeightUnits,

        sliderActiveDotsBorder,
        sliderActiveDotsBorderColorSwitcher,
        sliderActiveDotsBorderColor,
        sliderActiveDotsBorderHoverColor,

        sliderActiveDotsBorderUnits,
        sliderActiveDotsBorderDesktop,
        sliderActiveDotsBorderTablet,
        sliderActiveDotsBorderMobile,
        sliderActiveDotsBorderLink,

        sliderActiveDotsBorderRadiusUnits,
        sliderActiveDotsBorderRadiusDesktop,
        sliderActiveDotsBorderRadiusTablet,
        sliderActiveDotsBorderRadiusMobile,
        sliderActiveDotsBorderRadiusLink,

        sliderFractionColorSwitcher,
        sliderFractionColor,
        sliderFractionHoverColor,

        sliderFractionGlobalTypographyData,
        sliderFractionGlobalTypoSwitcher,
        sliderFractionGlobalTypoType,
        sliderFractionGlobalTypoOption,

        sliderFractionFontFamily,
        sliderFractionFontSize,
        sliderFractionFontSizeUnits,
        sliderFractionFontWeight,
        sliderFractionFontStyle,
        sliderFractionTextTransform,
        sliderFractionTextDecoration,
        sliderFractionLetterSpacing,
        sliderFractionLetterSpacingUnits,
        sliderFractionLineHeight,
        sliderFractionLineHeightUnits,

        sliderProgressbarBGColorSwitcher,
        sliderProgressbarBGColor,
        sliderProgressbarBGActiveColor,
        sliderProgressbarHeight,
        sliderProgressbarHeightUnits,

        /** Global Settings */
        sliderGlobalZIndex,
        sliderOverflow,

        sliderGlobalPaddingUnits,
        sliderGlobalPaddingDesktop,
        sliderGlobalPaddingTablet,
        sliderGlobalPaddingMobile,
        sliderGlobalPaddingLink,

        sliderGlobalMarginUnits,
        sliderGlobalMarginDesktop,
        sliderGlobalMarginTablet,
        sliderGlobalMarginMobile,
        sliderGlobalMarginLink,

        sliderGlobalBgColorSwitcher,
        sliderGlobalBgNormalBackgroundType,
        sliderGlobalBgNormalClassicColor,
        sliderGlobalBgNormalGradientColor,
        sliderGlobalBgNormalCustomGradientSwitcher,
        sliderGlobalBgNormalCustomGradientInputValue,
        sliderGlobalBgHoverBackgroundType,
        sliderGlobalBgHoverClassicColor,
        sliderGlobalBgHoverGradientColor,
        sliderGlobalBgHoverCustomGradientSwitcher,
        sliderGlobalBgHoverCustomGradientInputValue,

        sliderGlobalBorder,
        sliderGlobalBorderColorSwitcher,
        sliderGlobalBorderColor,
        sliderGlobalBorderHoverColor,

        sliderGlobalBorderUnits,
        sliderGlobalBorderDesktop,
        sliderGlobalBorderTablet,
        sliderGlobalBorderMobile,
        sliderGlobalBorderLink,

        sliderGlobalBorderRadiusUnits,
        sliderGlobalBorderRadiusDesktop,
        sliderGlobalBorderRadiusTablet,
        sliderGlobalBorderRadiusMobile,
        sliderGlobalBorderRadiusLink,

        sliderGlobalBoxShadowSwitcher,
        sliderGlobalBoxShadowValues,
        sliderGlobalBoxShadowCssValue,
        sliderGlobalBoxShadowHoverValues,
        sliderGlobalBoxShadowHoverCssValue,
        /** End Global Setting */

        sliderDesktopSwitcher,
        sliderTabletSwitcher,
        sliderMobileSwitcher,

        sliderGlobalCustomCSS,
        sliderGlobalWraperClass,

        // Position
        sliderPositionType,
        sliderHZOrientationType,
        sliderVROrientationType,
        sliderHZLeftOffset,
        sliderHZLeftOffsetUnits,
        sliderHZRightOffset,
        sliderHZRightOffsetUnits,
        sliderVRTopOffset,
        sliderVRTopOffsetUnits,
        sliderVRBottomOffset,
        sliderVRBottomOffsetUnits,
    } = attributes;

    const sliderNavigationBorderDesktopWidth = `${sliderNavigationBorderDesktop?.top}${sliderNavigationBorderUnits?.Desktop} ${sliderNavigationBorderDesktop?.right}${sliderNavigationBorderUnits?.Desktop} ${sliderNavigationBorderDesktop?.bottom}${sliderNavigationBorderUnits?.Desktop} ${sliderNavigationBorderDesktop?.left}${sliderNavigationBorderUnits?.Desktop}`;
    const sliderNavigationBorderTabletWidth = `${sliderNavigationBorderTablet?.top}${sliderNavigationBorderUnits?.Tablet} ${sliderNavigationBorderTablet?.right}${sliderNavigationBorderUnits?.Tablet} ${sliderNavigationBorderTablet?.bottom}${sliderNavigationBorderUnits?.Tablet} ${sliderNavigationBorderTablet?.left}${sliderNavigationBorderUnits?.Tablet}`;
    const sliderNavigationBorderMobileWidth = `${sliderNavigationBorderMobile?.top}${sliderNavigationBorderUnits?.Mobile} ${sliderNavigationBorderMobile?.right}${sliderNavigationBorderUnits?.Mobile} ${sliderNavigationBorderMobile?.bottom}${sliderNavigationBorderUnits?.Mobile} ${sliderNavigationBorderMobile?.left}${sliderNavigationBorderUnits?.Mobile}`;

    const sliderNavigationBorderRadiusDesktopWidth = `${sliderNavigationBorderRadiusDesktop?.top}${sliderNavigationBorderRadiusUnits?.Desktop} ${sliderNavigationBorderRadiusDesktop?.right}${sliderNavigationBorderRadiusUnits?.Desktop} ${sliderNavigationBorderRadiusDesktop?.bottom}${sliderNavigationBorderRadiusUnits?.Desktop} ${sliderNavigationBorderRadiusDesktop?.left}${sliderNavigationBorderRadiusUnits?.Desktop}`;
    const sliderNavigationBorderRadiusTabletWidth = `${sliderNavigationBorderRadiusTablet?.top}${sliderNavigationBorderRadiusUnits?.Tablet} ${sliderNavigationBorderRadiusTablet?.right}${sliderNavigationBorderRadiusUnits?.Tablet} ${sliderNavigationBorderRadiusTablet?.bottom}${sliderNavigationBorderRadiusUnits?.Tablet} ${sliderNavigationBorderRadiusTablet?.left}${sliderNavigationBorderRadiusUnits?.Tablet}`;
    const sliderNavigationBorderRadiusMobileWidth = `${sliderNavigationBorderRadiusMobile?.top}${sliderNavigationBorderRadiusUnits?.Mobile} ${sliderNavigationBorderRadiusMobile?.right}${sliderNavigationBorderRadiusUnits?.Mobile} ${sliderNavigationBorderRadiusMobile?.bottom}${sliderNavigationBorderRadiusUnits?.Mobile} ${sliderNavigationBorderRadiusMobile?.left}${sliderNavigationBorderRadiusUnits?.Mobile}`;

    const sliderNavigationPaddingDesktopWidth = `${sliderNavigationPaddingDesktop?.top}${sliderNavigationPaddingUnits?.Desktop} ${sliderNavigationPaddingDesktop?.right}${sliderNavigationPaddingUnits?.Desktop} ${sliderNavigationPaddingDesktop?.bottom}${sliderNavigationPaddingUnits?.Desktop} ${sliderNavigationPaddingDesktop?.left}${sliderNavigationPaddingUnits?.Desktop}`;
    const sliderNavigationPaddingTabletWidth = `${sliderNavigationPaddingTablet?.top}${sliderNavigationPaddingUnits?.Tablet} ${sliderNavigationPaddingTablet?.right}${sliderNavigationPaddingUnits?.Tablet} ${sliderNavigationPaddingTablet?.bottom}${sliderNavigationPaddingUnits?.Tablet} ${sliderNavigationPaddingTablet?.left}${sliderNavigationPaddingUnits?.Tablet}`;
    const sliderNavigationPaddingMobileWidth = `${sliderNavigationPaddingMobile?.top}${sliderNavigationPaddingUnits?.Mobile} ${sliderNavigationPaddingMobile?.right}${sliderNavigationPaddingUnits?.Mobile} ${sliderNavigationPaddingMobile?.bottom}${sliderNavigationPaddingUnits?.Mobile} ${sliderNavigationPaddingMobile?.left}${sliderNavigationPaddingUnits?.Mobile}`;

    const sliderArrowsBorderDesktopWidth = `${sliderArrowsBorderDesktop?.top}${sliderArrowsBorderUnits?.Desktop} ${sliderArrowsBorderDesktop?.right}${sliderArrowsBorderUnits?.Desktop} ${sliderArrowsBorderDesktop?.bottom}${sliderArrowsBorderUnits?.Desktop} ${sliderArrowsBorderDesktop?.left}${sliderArrowsBorderUnits?.Desktop}`;
    const sliderArrowsBorderTabletWidth = `${sliderArrowsBorderTablet?.top}${sliderArrowsBorderUnits?.Tablet} ${sliderArrowsBorderTablet?.right}${sliderArrowsBorderUnits?.Tablet} ${sliderArrowsBorderTablet?.bottom}${sliderArrowsBorderUnits?.Tablet} ${sliderArrowsBorderTablet?.left}${sliderArrowsBorderUnits?.Tablet}`;
    const sliderArrowsBorderMobileWidth = `${sliderArrowsBorderMobile?.top}${sliderArrowsBorderUnits?.Mobile} ${sliderArrowsBorderMobile?.right}${sliderArrowsBorderUnits?.Mobile} ${sliderArrowsBorderMobile?.bottom}${sliderArrowsBorderUnits?.Mobile} ${sliderArrowsBorderMobile?.left}${sliderArrowsBorderUnits?.Mobile}`;

    const sliderArrowsBorderRadiusDesktopWidth = `${sliderArrowsBorderRadiusDesktop?.top}${sliderArrowsBorderRadiusUnits?.Desktop} ${sliderArrowsBorderRadiusDesktop?.right}${sliderArrowsBorderRadiusUnits?.Desktop} ${sliderArrowsBorderRadiusDesktop?.bottom}${sliderArrowsBorderRadiusUnits?.Desktop} ${sliderArrowsBorderRadiusDesktop?.left}${sliderArrowsBorderRadiusUnits?.Desktop}`;
    const sliderArrowsBorderRadiusTabletWidth = `${sliderArrowsBorderRadiusTablet?.top}${sliderArrowsBorderRadiusUnits?.Tablet} ${sliderArrowsBorderRadiusTablet?.right}${sliderArrowsBorderRadiusUnits?.Tablet} ${sliderArrowsBorderRadiusTablet?.bottom}${sliderArrowsBorderRadiusUnits?.Tablet} ${sliderArrowsBorderRadiusTablet?.left}${sliderArrowsBorderRadiusUnits?.Tablet}`;
    const sliderArrowsBorderRadiusMobileWidth = `${sliderArrowsBorderRadiusMobile?.top}${sliderArrowsBorderRadiusUnits?.Mobile} ${sliderArrowsBorderRadiusMobile?.right}${sliderArrowsBorderRadiusUnits?.Mobile} ${sliderArrowsBorderRadiusMobile?.bottom}${sliderArrowsBorderRadiusUnits?.Mobile} ${sliderArrowsBorderRadiusMobile?.left}${sliderArrowsBorderRadiusUnits?.Mobile}`;

    const sliderDotsMarginDesktopWidth = `${sliderDotsMarginDesktop?.top}${sliderDotsMarginUnits?.Desktop} ${sliderDotsMarginDesktop?.right}${sliderDotsMarginUnits?.Desktop} ${sliderDotsMarginDesktop?.bottom}${sliderDotsMarginUnits?.Desktop} ${sliderDotsMarginDesktop?.left}${sliderDotsMarginUnits?.Desktop}`;
    const sliderDotsMarginTabletWidth = `${sliderDotsMarginTablet?.top}${sliderDotsMarginUnits?.Tablet} ${sliderDotsMarginTablet?.right}${sliderDotsMarginUnits?.Tablet} ${sliderDotsMarginTablet?.bottom}${sliderDotsMarginUnits?.Tablet} ${sliderDotsMarginTablet?.left}${sliderDotsMarginUnits?.Tablet}`;
    const sliderDotsMarginMobileWidth = `${sliderDotsMarginMobile?.top}${sliderDotsMarginUnits?.Mobile} ${sliderDotsMarginMobile?.right}${sliderDotsMarginUnits?.Mobile} ${sliderDotsMarginMobile?.bottom}${sliderDotsMarginUnits?.Mobile} ${sliderDotsMarginMobile?.left}${sliderDotsMarginUnits?.Mobile}`;

    const sliderNormalDotsBorderDesktopWidth = `${sliderNormalDotsBorderDesktop?.top}${sliderNormalDotsBorderUnits?.Desktop} ${sliderNormalDotsBorderDesktop?.right}${sliderNormalDotsBorderUnits?.Desktop} ${sliderNormalDotsBorderDesktop?.bottom}${sliderNormalDotsBorderUnits?.Desktop} ${sliderNormalDotsBorderDesktop?.left}${sliderNormalDotsBorderUnits?.Desktop}`;
    const sliderNormalDotsBorderTabletWidth = `${sliderNormalDotsBorderTablet?.top}${sliderNormalDotsBorderUnits?.Tablet} ${sliderNormalDotsBorderTablet?.right}${sliderNormalDotsBorderUnits?.Tablet} ${sliderNormalDotsBorderTablet?.bottom}${sliderNormalDotsBorderUnits?.Tablet} ${sliderNormalDotsBorderTablet?.left}${sliderNormalDotsBorderUnits?.Tablet}`;
    const sliderNormalDotsBorderMobileWidth = `${sliderNormalDotsBorderMobile?.top}${sliderNormalDotsBorderUnits?.Mobile} ${sliderNormalDotsBorderMobile?.right}${sliderNormalDotsBorderUnits?.Mobile} ${sliderNormalDotsBorderMobile?.bottom}${sliderNormalDotsBorderUnits?.Mobile} ${sliderNormalDotsBorderMobile?.left}${sliderNormalDotsBorderUnits?.Mobile}`;

    const sliderNormalDotsBorderRadiusDesktopWidth = `${sliderNormalDotsBorderRadiusDesktop?.top}${sliderNormalDotsBorderRadiusUnits?.Desktop} ${sliderNormalDotsBorderRadiusDesktop?.right}${sliderNormalDotsBorderRadiusUnits?.Desktop} ${sliderNormalDotsBorderRadiusDesktop?.bottom}${sliderNormalDotsBorderRadiusUnits?.Desktop} ${sliderNormalDotsBorderRadiusDesktop?.left}${sliderNormalDotsBorderRadiusUnits?.Desktop}`;
    const sliderNormalDotsBorderRadiusTabletWidth = `${sliderNormalDotsBorderRadiusTablet?.top}${sliderNormalDotsBorderRadiusUnits?.Tablet} ${sliderNormalDotsBorderRadiusTablet?.right}${sliderNormalDotsBorderRadiusUnits?.Tablet} ${sliderNormalDotsBorderRadiusTablet?.bottom}${sliderNormalDotsBorderRadiusUnits?.Tablet} ${sliderNormalDotsBorderRadiusTablet?.left}${sliderNormalDotsBorderRadiusUnits?.Tablet}`;
    const sliderNormalDotsBorderRadiusMobileWidth = `${sliderNormalDotsBorderRadiusMobile?.top}${sliderNormalDotsBorderRadiusUnits?.Mobile} ${sliderNormalDotsBorderRadiusMobile?.right}${sliderNormalDotsBorderRadiusUnits?.Mobile} ${sliderNormalDotsBorderRadiusMobile?.bottom}${sliderNormalDotsBorderRadiusUnits?.Mobile} ${sliderNormalDotsBorderRadiusMobile?.left}${sliderNormalDotsBorderRadiusUnits?.Mobile}`;

    const sliderActiveDotsBorderDesktopWidth = `${sliderActiveDotsBorderDesktop?.top}${sliderActiveDotsBorderUnits?.Desktop} ${sliderActiveDotsBorderDesktop?.right}${sliderActiveDotsBorderUnits?.Desktop} ${sliderActiveDotsBorderDesktop?.bottom}${sliderActiveDotsBorderUnits?.Desktop} ${sliderActiveDotsBorderDesktop?.left}${sliderActiveDotsBorderUnits?.Desktop}`;
    const sliderActiveDotsBorderTabletWidth = `${sliderActiveDotsBorderTablet?.top}${sliderActiveDotsBorderUnits?.Tablet} ${sliderActiveDotsBorderTablet?.right}${sliderActiveDotsBorderUnits?.Tablet} ${sliderActiveDotsBorderTablet?.bottom}${sliderActiveDotsBorderUnits?.Tablet} ${sliderActiveDotsBorderTablet?.left}${sliderActiveDotsBorderUnits?.Tablet}`;
    const sliderActiveDotsBorderMobileWidth = `${sliderActiveDotsBorderMobile?.top}${sliderActiveDotsBorderUnits?.Mobile} ${sliderActiveDotsBorderMobile?.right}${sliderActiveDotsBorderUnits?.Mobile} ${sliderActiveDotsBorderMobile?.bottom}${sliderActiveDotsBorderUnits?.Mobile} ${sliderActiveDotsBorderMobile?.left}${sliderActiveDotsBorderUnits?.Mobile}`;

    const sliderActiveDotsBorderRadiusDesktopWidth = `${sliderActiveDotsBorderRadiusDesktop?.top}${sliderActiveDotsBorderRadiusUnits?.Desktop} ${sliderActiveDotsBorderRadiusDesktop?.right}${sliderActiveDotsBorderRadiusUnits?.Desktop} ${sliderActiveDotsBorderRadiusDesktop?.bottom}${sliderActiveDotsBorderRadiusUnits?.Desktop} ${sliderActiveDotsBorderRadiusDesktop?.left}${sliderActiveDotsBorderRadiusUnits?.Desktop}`;
    const sliderActiveDotsBorderRadiusTabletWidth = `${sliderActiveDotsBorderRadiusTablet?.top}${sliderActiveDotsBorderRadiusUnits?.Tablet} ${sliderActiveDotsBorderRadiusTablet?.right}${sliderActiveDotsBorderRadiusUnits?.Tablet} ${sliderActiveDotsBorderRadiusTablet?.bottom}${sliderActiveDotsBorderRadiusUnits?.Tablet} ${sliderActiveDotsBorderRadiusTablet?.left}${sliderActiveDotsBorderRadiusUnits?.Tablet}`;
    const sliderActiveDotsBorderRadiusMobileWidth = `${sliderActiveDotsBorderRadiusMobile?.top}${sliderActiveDotsBorderRadiusUnits?.Mobile} ${sliderActiveDotsBorderRadiusMobile?.right}${sliderActiveDotsBorderRadiusUnits?.Mobile} ${sliderActiveDotsBorderRadiusMobile?.bottom}${sliderActiveDotsBorderRadiusUnits?.Mobile} ${sliderActiveDotsBorderRadiusMobile?.left}${sliderActiveDotsBorderRadiusUnits?.Mobile}`;

    const sliderGlobalPaddingDesktopWidth = `${sliderGlobalPaddingDesktop?.top}${sliderGlobalPaddingUnits?.Desktop} ${sliderGlobalPaddingDesktop?.right}${sliderGlobalPaddingUnits?.Desktop} ${sliderGlobalPaddingDesktop?.bottom}${sliderGlobalPaddingUnits?.Desktop} ${sliderGlobalPaddingDesktop?.left}${sliderGlobalPaddingUnits?.Desktop}`;
    const sliderGlobalPaddingTabletWidth = `${sliderGlobalPaddingTablet?.top}${sliderGlobalPaddingUnits?.Tablet} ${sliderGlobalPaddingTablet?.right}${sliderGlobalPaddingUnits?.Tablet} ${sliderGlobalPaddingTablet?.bottom}${sliderGlobalPaddingUnits?.Tablet} ${sliderGlobalPaddingTablet?.left}${sliderGlobalPaddingUnits?.Tablet}`;
    const sliderGlobalPaddingMobileWidth = `${sliderGlobalPaddingMobile?.top}${sliderGlobalPaddingUnits?.Mobile} ${sliderGlobalPaddingMobile?.right}${sliderGlobalPaddingUnits?.Mobile} ${sliderGlobalPaddingMobile?.bottom}${sliderGlobalPaddingUnits?.Mobile} ${sliderGlobalPaddingMobile?.left}${sliderGlobalPaddingUnits?.Mobile}`;

    const sliderGlobalMarginDesktopWidth = `${sliderGlobalMarginDesktop?.top}${sliderGlobalMarginUnits?.Desktop} ${sliderGlobalMarginDesktop?.right}${sliderGlobalMarginUnits?.Desktop} ${sliderGlobalMarginDesktop?.bottom}${sliderGlobalMarginUnits?.Desktop} ${sliderGlobalMarginDesktop?.left}${sliderGlobalMarginUnits?.Desktop}`;
    const sliderGlobalMarginTabletWidth = `${sliderGlobalMarginTablet?.top}${sliderGlobalMarginUnits?.Tablet} ${sliderGlobalMarginTablet?.right}${sliderGlobalMarginUnits?.Tablet} ${sliderGlobalMarginTablet?.bottom}${sliderGlobalMarginUnits?.Tablet} ${sliderGlobalMarginTablet?.left}${sliderGlobalMarginUnits?.Tablet}`;
    const sliderGlobalMarginMobileWidth = `${sliderGlobalMarginMobile?.top}${sliderGlobalMarginUnits?.Mobile} ${sliderGlobalMarginMobile?.right}${sliderGlobalMarginUnits?.Mobile} ${sliderGlobalMarginMobile?.bottom}${sliderGlobalMarginUnits?.Mobile} ${sliderGlobalMarginMobile?.left}${sliderGlobalMarginUnits?.Mobile}`;

    const sliderGlobalBorderDesktopWidth = `${sliderGlobalBorderDesktop?.top}${sliderGlobalBorderUnits?.Desktop} ${sliderGlobalBorderDesktop?.right}${sliderGlobalBorderUnits?.Desktop} ${sliderGlobalBorderDesktop?.bottom}${sliderGlobalBorderUnits?.Desktop} ${sliderGlobalBorderDesktop?.left}${sliderGlobalBorderUnits?.Desktop}`;
    const sliderGlobalBorderTabletWidth = `${sliderGlobalBorderTablet?.top}${sliderGlobalBorderUnits?.Tablet} ${sliderGlobalBorderTablet?.right}${sliderGlobalBorderUnits?.Tablet} ${sliderGlobalBorderTablet?.bottom}${sliderGlobalBorderUnits?.Tablet} ${sliderGlobalBorderTablet?.left}${sliderGlobalBorderUnits?.Tablet}`;
    const sliderGlobalBorderMobileWidth = `${sliderGlobalBorderMobile?.top}${sliderGlobalBorderUnits?.Mobile} ${sliderGlobalBorderMobile?.right}${sliderGlobalBorderUnits?.Mobile} ${sliderGlobalBorderMobile?.bottom}${sliderGlobalBorderUnits?.Mobile} ${sliderGlobalBorderMobile?.left}${sliderGlobalBorderUnits?.Mobile}`;

    const sliderGlobalBorderRadiusDesktopWidth = `${sliderGlobalBorderRadiusDesktop?.top}${sliderGlobalBorderRadiusUnits?.Desktop} ${sliderGlobalBorderRadiusDesktop?.right}${sliderGlobalBorderRadiusUnits?.Desktop} ${sliderGlobalBorderRadiusDesktop?.bottom}${sliderGlobalBorderRadiusUnits?.Desktop} ${sliderGlobalBorderRadiusDesktop?.left}${sliderGlobalBorderRadiusUnits?.Desktop}`;
    const sliderGlobalBorderRadiusTabletWidth = `${sliderGlobalBorderRadiusTablet?.top}${sliderGlobalBorderRadiusUnits?.Tablet} ${sliderGlobalBorderRadiusTablet?.right}${sliderGlobalBorderRadiusUnits?.Tablet} ${sliderGlobalBorderRadiusTablet?.bottom}${sliderGlobalBorderRadiusUnits?.Tablet} ${sliderGlobalBorderRadiusTablet?.left}${sliderGlobalBorderRadiusUnits?.Tablet}`;
    const sliderGlobalBorderRadiusMobileWidth = `${sliderGlobalBorderRadiusMobile?.top}${sliderGlobalBorderRadiusUnits?.Mobile} ${sliderGlobalBorderRadiusMobile?.right}${sliderGlobalBorderRadiusUnits?.Mobile} ${sliderGlobalBorderRadiusMobile?.bottom}${sliderGlobalBorderRadiusUnits?.Mobile} ${sliderGlobalBorderRadiusMobile?.left}${sliderGlobalBorderRadiusUnits?.Mobile}`;

    const sliderBlockStyle = `
        .${blockID}.fb-slider-container{
            ${sliderPositionType === 'default' ? `position: relative;` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' ? `width: 100%;` : ''}
            ${sliderPositionType !== 'default' ? `position: ${sliderPositionType};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset?.Desktop !== undefined ? `left: ${sliderHZLeftOffset?.Desktop}${sliderHZLeftOffsetUnits?.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset?.Desktop !== undefined ? `right: ${sliderHZRightOffset?.Desktop}${sliderHZRightOffsetUnits?.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset?.Desktop !== undefined ? `top: ${sliderVRTopOffset?.Desktop}${sliderVRTopOffsetUnits?.Desktop};` : ''}
            ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset?.Desktop !== undefined ? `bottom: ${sliderVRBottomOffset?.Desktop}${sliderVRBottomOffsetUnits?.Desktop};` : ''}
            ${sliderGlobalZIndex?.Desktop ? `z-index: ${sliderGlobalZIndex?.Desktop};` : ''}
            ${sliderOverflow !== 'default' ? `overflow: ${sliderOverflow};` : ''}
            ${sliderGlobalPaddingDesktopWidth ? `padding: ${sliderGlobalPaddingDesktopWidth};` : ''}
            ${sliderGlobalMarginDesktopWidth ? `margin: ${sliderGlobalMarginDesktopWidth};` : ''}
            ${sliderGlobalBorder ? `border: ${sliderGlobalBorder};` : ''}
            ${sliderGlobalBorderDesktopWidth ? `border-width: ${sliderGlobalBorderDesktopWidth};` : ''}
            ${sliderGlobalBorderRadiusDesktopWidth ? `border-radius: ${sliderGlobalBorderRadiusDesktopWidth};` : ''}
            ${sliderGlobalBorderColor ? `border-color: ${sliderGlobalBorderColor};` : ''}
            ${sliderGlobalBoxShadowCssValue ? `box-shadow: ${sliderGlobalBoxShadowCssValue};` : ''}
            ${sliderGlobalBgNormalBackgroundType === 'gradient' ? `
                background: ${sliderGlobalBgNormalCustomGradientSwitcher && sliderGlobalBgNormalCustomGradientInputValue
                ? sliderGlobalBgNormalCustomGradientInputValue
                : sliderGlobalBgNormalGradientColor || sliderGlobalBgNormalClassicColor
            };
            ` : `
                background: ${sliderGlobalBgNormalClassicColor};
            `}
            transition: all .3s ease-in-out;
            box-sizing: border-box;
        }
        .${blockID}.fb-slider-container:hover{
            ${sliderGlobalBgHoverBackgroundType === 'gradient' ? `
                background: ${sliderGlobalBgHoverCustomGradientSwitcher && sliderGlobalBgHoverCustomGradientInputValue
                ? sliderGlobalBgHoverCustomGradientInputValue
                : sliderGlobalBgHoverGradientColor || sliderGlobalBgHoverClassicColor
            };
            ` : `
                background: ${sliderGlobalBgHoverClassicColor};
            `}
            ${sliderGlobalBorderHoverColor ? `border-color: ${sliderGlobalBorderHoverColor};` : ''}
            ${sliderGlobalBoxShadowHoverCssValue ? `box-shadow: ${sliderGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .swiper-wrapper.fb-swiper-wrapper {
            align-items: center;
            ${sliderHeight?.Desktop ? `min-height: ${sliderHeight?.Desktop}${sliderHeightUnits?.Desktop};` : ''}
        }

        .${blockID}.fb-slider-container.outside {
            ${sliderArrowPosition === 'top-left' || sliderArrowPosition === 'top-center' || sliderArrowPosition === 'top-right' ? `
                padding: ${sliderArrowPositionOutsidePadding?.Desktop}${sliderArrowPositionOutsidePaddingUnits?.Desktop} 0 0;
            ` : ''}

            ${sliderArrowPosition === 'bottom-left' || sliderArrowPosition === 'bottom-center' || sliderArrowPosition === 'bottom-right' ? `
                padding: 0 0 ${sliderArrowPositionOutsidePadding?.Desktop}${sliderArrowPositionOutsidePaddingUnits?.Desktop};
            ` : ''}

            ${sliderArrowPosition === 'center' ? `
                padding: 0 ${sliderArrowPositionOutsidePadding?.Desktop}${sliderArrowPositionOutsidePaddingUnits?.Desktop};

            ` : ''}
        }

        .${blockID} .fb-slider-default-icon-wrapper {
            ${sliderNavigationBgNormalBackgroundType === 'gradient' ? `
                background: ${sliderNavigationBgNormalCustomGradientSwitcher && sliderNavigationBgNormalCustomGradientInputValue
                ? sliderNavigationBgNormalCustomGradientInputValue
                : sliderNavigationBgNormalGradientColor || sliderNavigationBgNormalClassicColor
            };
            ` : `
                background: ${sliderNavigationBgNormalClassicColor};
            `}
            ${sliderNavigationPaddingDesktopWidth ? `padding: ${sliderNavigationPaddingDesktopWidth};` : ''}
            ${sliderNavigationBorder ? `border: ${sliderNavigationBorder};` : ''}
            ${sliderNavigationBorderDesktopWidth ? `border-width: ${sliderNavigationBorderDesktopWidth};` : ''}
            ${sliderNavigationBorderRadiusDesktopWidth ? `border-radius: ${sliderNavigationBorderRadiusDesktopWidth};` : ''}
            ${sliderNavigationBorderColor ? `border-color: ${sliderNavigationBorderColor};` : ''}
        }

        .${blockID} .fb-slider-default-icon-wrapper:hover {
            ${sliderNavigationBgHoverBackgroundType === 'gradient' ? `
                background: ${sliderNavigationBgHoverCustomGradientSwitcher && sliderNavigationBgHoverCustomGradientInputValue
                ? sliderNavigationBgHoverCustomGradientInputValue
                : sliderNavigationBgHoverGradientColor || sliderNavigationBgHoverClassicColor
            };
            ` : `
                background: ${sliderNavigationBgHoverClassicColor};
            `}

            ${sliderNavigationBorderHoverColor ? `border-color: ${sliderNavigationBorderHoverColor};` : ''}
        }

        ${sliderArrowPosition && sliderArrowPosition !== 'center' ? `

            .${blockID} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition},
            .${blockID} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: ${sliderArrowDirection};
                gap: ${sliderArrowGap?.Desktop}${sliderArrowGapUnits?.Desktop};
                position: absolute;
                z-index: 100;

                ${sliderArrowPosition === 'top-left' ? `
                    top: ${sliderArrowPositionTopOffset?.Desktop ? `${sliderArrowPositionTopOffset?.Desktop}${sliderArrowPositionTopOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '0'};
                ` : ''}

                ${sliderArrowPosition === 'top-center' ? `
                    top: ${sliderArrowPositionTopOffset?.Desktop ? `${sliderArrowPositionTopOffset?.Desktop}${sliderArrowPositionTopOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '50%'};
                    transform: translateX(-50%);
                ` : ''}

                ${sliderArrowPosition === 'top-right' ? `
                    top: ${sliderArrowPositionTopOffset?.Desktop ? `${sliderArrowPositionTopOffset?.Desktop}${sliderArrowPositionTopOffsetUnits?.Desktop}` : '0'};
                    right: ${sliderArrowPositionRightOffset?.Desktop ? `${sliderArrowPositionRightOffset?.Desktop}${sliderArrowPositionRightOffsetUnits?.Desktop}` : '0'};
                ` : ''}

                ${sliderArrowPosition === 'bottom-left' ? `
                    bottom: ${sliderArrowPositionBottomOffset?.Desktop ? `${sliderArrowPositionBottomOffset?.Desktop}${sliderArrowPositionBottomOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '0'};
                ` : ''}

                ${sliderArrowPosition === 'bottom-center' ? `
                    bottom: ${sliderArrowPositionBottomOffset?.Desktop ? `${sliderArrowPositionBottomOffset?.Desktop}${sliderArrowPositionBottomOffsetUnits?.Desktop}` : '0'};
                    left: ${sliderArrowPositionLeftOffset?.Desktop ? `${sliderArrowPositionLeftOffset?.Desktop}${sliderArrowPositionLeftOffsetUnits?.Desktop}` : '50%'};
                    transform: translateX(-50%);
                ` : ''}

                ${sliderArrowPosition === 'bottom-right' ? `
                    bottom: ${sliderArrowPositionBottomOffset?.Desktop ? `${sliderArrowPositionBottomOffset?.Desktop}${sliderArrowPositionBottomOffsetUnits?.Desktop}` : '0'};
                    right: ${sliderArrowPositionRightOffset?.Desktop ? `${sliderArrowPositionRightOffset?.Desktop}${sliderArrowPositionRightOffsetUnits?.Desktop}` : '0'};
                ` : ''}

                ${sliderNavigationTransform ? `transform: translateY(${sliderNavigationTransform.Desktop}${sliderNavigationTransformUnits.Desktop});` : ''}
            }

            .${blockID} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-prev,
            .${blockID} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-next,
            .${blockID} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-prev,
            .${blockID} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} .swiper-button-next {
                position: relative;
                top: auto;
                right: auto;
                bottom: auto;
                left: auto;
                margin: 0 !important;
            }
        ` : ''}

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:after,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:after {
            display: none !important;
        }
        .${blockID} .swiper-button-prev,
        .${blockID} .swiper-button-next {
            ${sliderArrowsBorder ? `border: ${sliderArrowsBorder};` : ''}
            ${sliderArrowsBorderDesktopWidth && sliderArrowsBorderDesktop?.top ? `border-width: ${sliderArrowsBorderDesktopWidth};` : ''}
            ${sliderArrowsBorderRadiusDesktopWidth && sliderArrowsBorderRadiusDesktop?.top ? `border-radius: ${sliderArrowsBorderRadiusDesktopWidth};` : ''}
            ${sliderArrowsBorderColor ? `border-color: ${sliderArrowsBorderColor};` : ''}
            ${sliderArrowsBoxShadowCssValue ? `box-shadow: ${sliderArrowsBoxShadowCssValue};` : ''}
            ${sliderArrowsBgColor ? `background-color: ${sliderArrowsBgColor};` : ''}
            ${sliderArrowsColor ? `color: ${sliderArrowsColor};` : ''}
            ${sliderArrowsWidth?.Desktop ? `width: ${sliderArrowsWidth?.Desktop}${sliderArrowsWidthUnits?.Desktop};` : ''}
            ${sliderArrowsHeight?.Desktop ? `height: ${sliderArrowsHeight?.Desktop}${sliderArrowsHeightUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .swiper-button-prev:hover,
        .${blockID} .swiper-button-next:hover {
            ${sliderArrowsBgColorHover ? `background-color: ${sliderArrowsBgColorHover};` : ''}
            ${sliderArrowsColorHover ? `color: ${sliderArrowsColorHover};` : ''}
            ${sliderArrowsBorderHoverColor ? `border-color: ${sliderArrowsBorderHoverColor};` : ''}
            ${sliderArrowsBoxShadowHoverCssValue ? `box-shadow: ${sliderArrowsBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next svg {
            ${sliderArrowsColor ? `fill: ${sliderArrowsColor};` : ''}
            ${sliderArrowsSize?.Desktop ? `width: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
            ${sliderArrowsSize?.Desktop ? `height: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
        .${blockID} .fb-slider-default-icon-wrapper .swiper-button-prev:after {
            ${sliderNavigationLeftIconRotate?.Desktop ? `transform: rotate(${sliderNavigationLeftIconRotate?.Desktop}deg);` : ''}
            transition: all 0.3s ease-in-out;
        }

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next svg,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next img,
        .${blockID} .fb-slider-default-icon-wrapper .swiper-button-next:after {
            ${sliderNavigationRightIconRotate?.Desktop ? `transform: rotate(${sliderNavigationRightIconRotate?.Desktop}deg);` : ''}
            transition: all 0.3s ease-in-out;
        }

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover svg,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover img,
        .${blockID} .fb-slider-default-icon-wrapper .swiper-button-prev:hover:after {
            ${sliderNavigationLeftIconRotateHover?.Desktop ? `transform: rotate(${sliderNavigationLeftIconRotateHover?.Desktop}deg);` : ''}
        }

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:hover svg,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:hover img,
        .${blockID} .fb-slider-default-icon-wrapper .swiper-button-next:hover:after {
            ${sliderNavigationRightIconRotateHover?.Desktop ? `transform: rotate(${sliderNavigationRightIconRotateHover?.Desktop}deg);` : ''}
        }

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next img {
            ${sliderArrowsSize?.Desktop ? `width: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
            ${sliderArrowsSize?.Desktop ? `height: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover svg,
        .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:hover svg {
            ${sliderArrowsColorHover ? `fill: ${sliderArrowsColorHover};` : ''}
        }

        .${blockID} .swiper-button-prev:after,
        .${blockID} .swiper-button-next:after {
            ${sliderArrowsSize?.Desktop ? `font-size: ${sliderArrowsSize?.Desktop}${sliderArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .swiper-pagination {
            ${sliderDotsPosition?.Desktop ? `bottom: ${sliderDotsPosition?.Desktop}${sliderDotsPositionUnits?.Desktop} !important;` : ''}
            ${sliderDotsMarginDesktopWidth && sliderDotsMarginDesktop?.top ? `margin: ${sliderDotsMarginDesktopWidth};` : ''}
        }

        .${blockID} .swiper-pagination-bullet {
            ${sliderNormalDotsBgColor ? `background-color: ${sliderNormalDotsBgColor};` : ''}
            ${sliderNormalDotsBorder ? `border: ${sliderNormalDotsBorder};` : ''}
            ${sliderNormalDotsBorderDesktopWidth && sliderNormalDotsBorderDesktop?.top ? `border-width: ${sliderNormalDotsBorderDesktopWidth};` : ''}
            ${sliderNormalDotsBorderRadiusDesktopWidth && sliderNormalDotsBorderRadiusDesktop?.top ? `border-radius: ${sliderNormalDotsBorderRadiusDesktopWidth};` : ''}
            ${sliderNormalDotsBorderColor ? `border-color: ${sliderNormalDotsBorderColor};` : ''}
            ${sliderNormalDotsWidth?.Desktop ? `width: ${sliderNormalDotsWidth?.Desktop}${sliderNormalDotsWidthUnits?.Desktop};` : ''}
            ${sliderNormalDotsHeight?.Desktop ? `height: ${sliderNormalDotsHeight?.Desktop}${sliderNormalDotsHeightUnits?.Desktop};` : ''}
        }

        .${blockID} .swiper-pagination-bullet-active {
            ${sliderActiveDotsBgColor ? `background-color: ${sliderActiveDotsBgColor};` : ''}
            ${sliderActiveDotsBorder ? `border: ${sliderActiveDotsBorder};` : ''}
            ${sliderActiveDotsBorderDesktopWidth && sliderActiveDotsBorderDesktop?.top ? `border-width: ${sliderActiveDotsBorderDesktopWidth};` : ''}
            ${sliderActiveDotsBorderRadiusDesktopWidth && sliderActiveDotsBorderRadiusDesktop?.top ? `border-radius: ${sliderActiveDotsBorderRadiusDesktopWidth};` : ''}
            ${sliderActiveDotsBorderColor ? `border-color: ${sliderActiveDotsBorderColor};` : ''}
            ${sliderActiveDotsWidth?.Desktop ? `width: ${sliderActiveDotsWidth?.Desktop}${sliderActiveDotsWidthUnits?.Desktop};` : ''}
            ${sliderActiveDotsHeight?.Desktop ? `height: ${sliderActiveDotsHeight?.Desktop}${sliderActiveDotsHeightUnits?.Desktop};` : ''}
        }

        .${blockID} .swiper-pagination-fraction {
            ${sliderFractionGlobalTypoSwitcher?.fontFamily === true && sliderFractionGlobalTypographyData?.fontFamily ? `font-family: ${sliderFractionGlobalTypographyData?.fontFamily};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontSize === true && sliderFractionGlobalTypographyData?.fontSize ? `font-size: ${sliderFractionGlobalTypographyData?.fontSize};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontWeight === true && sliderFractionGlobalTypographyData?.fontWeight ? `font-weight: ${sliderFractionGlobalTypographyData?.fontWeight};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontStyle === true && sliderFractionGlobalTypographyData?.fontStyle ? `font-style: ${sliderFractionGlobalTypographyData?.fontStyle};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textTransform === true && sliderFractionGlobalTypographyData?.textTransform ? `text-transform: ${sliderFractionGlobalTypographyData?.textTransform};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textDecoration === true && sliderFractionGlobalTypographyData?.textDecoration ? `text-decoration: ${sliderFractionGlobalTypographyData?.textDecoration};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.letterSpacing === true && sliderFractionGlobalTypographyData?.letterSpacing ? `letter-spacing: ${sliderFractionGlobalTypographyData?.letterSpacing};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.lineHeight === true && sliderFractionGlobalTypographyData?.lineHeight ? `line-height: ${sliderFractionGlobalTypographyData?.lineHeight};` : ''}

            ${sliderFractionGlobalTypoSwitcher?.fontFamily === false && sliderFractionFontFamily && sliderFractionFontFamily !== 'Default' ? `font-family: ${sliderFractionFontFamily};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontSize === false && sliderFractionFontSize?.Desktop && sliderFractionFontSizeUnits?.Desktop ? `font-size: ${sliderFractionFontSize?.Desktop}${sliderFractionFontSizeUnits?.Desktop};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontWeight === false && sliderFractionFontWeight ? `font-weight: ${sliderFractionFontWeight};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.fontStyle === false && sliderFractionFontStyle ? `font-style: ${sliderFractionFontStyle};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textTransform === false && sliderFractionTextTransform ? `text-transform: ${sliderFractionTextTransform};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.textDecoration === false && sliderFractionTextDecoration ? `text-decoration: ${sliderFractionTextDecoration};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.letterSpacing === false && sliderFractionLetterSpacing?.Desktop && sliderFractionLetterSpacingUnits?.Desktop ? `letter-spacing: ${sliderFractionLetterSpacing?.Desktop}${sliderFractionLetterSpacingUnits?.Desktop};` : ''}
            ${sliderFractionGlobalTypoSwitcher?.lineHeight === false && sliderFractionLineHeight?.Desktop && sliderFractionLineHeightUnits?.Desktop ? `line-height: ${sliderFractionLineHeight?.Desktop}${sliderFractionLineHeightUnits?.Desktop};` : ''}
            ${sliderFractionColor ? `color: ${sliderFractionColor};` : ''}
        }
        .${blockID} .swiper-pagination-fraction:hover {
            ${sliderFractionHoverColor ? `color: ${sliderFractionHoverColor};` : ''}
        }

        .${blockID} .swiper-pagination-progressbar {
            ${sliderProgressbarBGColor ? `background-color: ${sliderProgressbarBGColor};` : ''}
            ${sliderProgressbarHeight?.Desktop ? `height: ${sliderProgressbarHeight?.Desktop}${sliderProgressbarHeightUnits?.Desktop};` : ''}
        }
        .${blockID} .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            ${sliderProgressbarBGActiveColor ? `background-color: ${sliderProgressbarBGActiveColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-slider-container{
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset?.Tablet !== undefined ? `left: ${sliderHZLeftOffset?.Tablet}${sliderHZLeftOffsetUnits?.Tablet};` : ''}
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset?.Tablet !== undefined ? `right: ${sliderHZRightOffset?.Tablet}${sliderHZRightOffsetUnits?.Tablet};` : ''}
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset?.Tablet !== undefined ? `top: ${sliderVRTopOffset?.Tablet}${sliderVRTopOffsetUnits?.Tablet};` : ''}
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset?.Tablet !== undefined ? `bottom: ${sliderVRBottomOffset?.Tablet}${sliderVRBottomOffsetUnits?.Tablet};` : ''}
                ${sliderGlobalZIndex?.Tablet ? `z-index: ${sliderGlobalZIndex?.Tablet};` : ''}
                ${sliderGlobalPaddingTabletWidth ? `padding: ${sliderGlobalPaddingTabletWidth};` : ''}
                ${sliderGlobalMarginTabletWidth ? `margin: ${sliderGlobalMarginTabletWidth};` : ''}
                ${sliderGlobalBorderTabletWidth ? `border-width: ${sliderGlobalBorderTabletWidth};` : ''}
                ${sliderGlobalBorderRadiusTabletWidth ? `border-radius: ${sliderGlobalBorderRadiusTabletWidth};` : ''}
            }

            .${blockID} .swiper-wrapper.fb-swiper-wrapper {
                ${sliderHeight?.Tablet ? `min-height: ${sliderHeight?.Tablet}${sliderHeightUnits?.Tablet};` : ''}
            }

            .${blockID}.fb-slider-container.outside {
                ${sliderArrowPosition === 'top-left' || sliderArrowPosition === 'top-center' || sliderArrowPosition === 'top-right' ? `
                    padding: ${sliderArrowPositionOutsidePadding?.Tablet}${sliderArrowPositionOutsidePaddingUnits?.Tablet} 0 0;
                ` : ''}

                ${sliderArrowPosition === 'bottom-left' || sliderArrowPosition === 'bottom-center' || sliderArrowPosition === 'bottom-right' ? `
                    padding: 0 0 ${sliderArrowPositionOutsidePadding?.Tablet}${sliderArrowPositionOutsidePaddingUnits?.Tablet};
                ` : ''}

                ${sliderArrowPosition === 'center' ? `
                    padding: 0 ${sliderArrowPositionOutsidePadding?.Tablet}${sliderArrowPositionOutsidePaddingUnits?.Tablet};

                ` : ''}
            }

            .${blockID} .fb-slider-default-icon-wrapper {
                ${sliderNavigationPaddingTabletWidth ? `padding: ${sliderNavigationPaddingTabletWidth};` : ''}
                ${sliderNavigationBorderTabletWidth ? `border-width: ${sliderNavigationBorderTabletWidth};` : ''}
                ${sliderNavigationBorderRadiusTabletWidth ? `border-radius: ${sliderNavigationBorderRadiusTabletWidth};` : ''}                                             
            }

            ${sliderArrowPosition && sliderArrowPosition !== 'center' ? `

                .${blockID} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition},
                .${blockID} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} {

                    gap: ${sliderArrowGap?.Tablet}${sliderArrowGapUnits?.Tablet};

                    ${sliderArrowPosition === 'top-left' ? `
                        top: ${sliderArrowPositionTopOffset?.Tablet ? `${sliderArrowPositionTopOffset?.Tablet}${sliderArrowPositionTopOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'top-center' ? `
                        top: ${sliderArrowPositionTopOffset?.Tablet ? `${sliderArrowPositionTopOffset?.Tablet}${sliderArrowPositionTopOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'top-right' ? `
                        top: ${sliderArrowPositionTopOffset?.Tablet ? `${sliderArrowPositionTopOffset?.Tablet}${sliderArrowPositionTopOffsetUnits?.Tablet}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Tablet ? `${sliderArrowPositionRightOffset?.Tablet}${sliderArrowPositionRightOffsetUnits?.Tablet}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-left' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Tablet ? `${sliderArrowPositionBottomOffset?.Tablet}${sliderArrowPositionBottomOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-center' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Tablet ? `${sliderArrowPositionBottomOffset?.Tablet}${sliderArrowPositionBottomOffsetUnits?.Tablet}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Tablet ? `${sliderArrowPositionLeftOffset?.Tablet}${sliderArrowPositionLeftOffsetUnits?.Tablet}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-right' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Tablet ? `${sliderArrowPositionBottomOffset?.Tablet}${sliderArrowPositionBottomOffsetUnits?.Tablet}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Tablet ? `${sliderArrowPositionRightOffset?.Tablet}${sliderArrowPositionRightOffsetUnits?.Tablet}` : '0'};
                    ` : ''}

                    ${sliderNavigationTransform ? `transform: translateY(${sliderNavigationTransform.Tablet}${sliderNavigationTransformUnits.Tablet});` : ''}
                }
            ` : ''}


            .${blockID} .swiper-button-prev,
            .${blockID} .swiper-button-next {
                ${sliderArrowsBorderTabletWidth && sliderArrowsBorderTablet?.top ? `border-width: ${sliderArrowsBorderTabletWidth};` : ''}
                ${sliderArrowsBorderRadiusTabletWidth && sliderArrowsBorderRadiusTablet?.top ? `border-radius: ${sliderArrowsBorderRadiusTabletWidth};` : ''}
                ${sliderArrowsWidth?.Tablet ? `width: ${sliderArrowsWidth?.Tablet}${sliderArrowsWidthUnits?.Tablet};` : ''}
                ${sliderArrowsHeight?.Tablet ? `height: ${sliderArrowsHeight?.Tablet}${sliderArrowsHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next svg {
                ${sliderArrowsSize?.Tablet ? `width: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
                ${sliderArrowsSize?.Tablet ? `height: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next img {
                ${sliderArrowsSize?.Tablet ? `width: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
                ${sliderArrowsSize?.Tablet ? `height: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .swiper-button-prev:after,
            .${blockID} .swiper-button-next:after {
                ${sliderArrowsSize?.Tablet ? `font-size: ${sliderArrowsSize?.Tablet}${sliderArrowsSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-prev:after {
                ${sliderNavigationLeftIconRotate?.Tablet ? `transform: rotate(${sliderNavigationLeftIconRotate?.Tablet}deg);` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-next:after {
                ${sliderNavigationRightIconRotate?.Tablet ? `transform: rotate(${sliderNavigationRightIconRotate?.Tablet}deg);` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-prev:hover:after {
                ${sliderNavigationLeftIconRotateHover?.Tablet ? `transform: rotate(${sliderNavigationLeftIconRotateHover?.Tablet}deg);` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:hover svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:hover img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-next:hover:after {
                ${sliderNavigationRightIconRotateHover?.Tablet ? `transform: rotate(${sliderNavigationRightIconRotateHover?.Tablet}deg);` : ''}
            }

            .${blockID} .swiper-pagination {
                ${sliderDotsPosition?.Tablet ? `bottom: ${sliderDotsPosition?.Tablet}${sliderDotsPositionUnits?.Tablet} !important;` : ''}
                ${sliderDotsMarginTabletWidth && sliderDotsMarginTablet?.top ? `margin: ${sliderDotsMarginTabletWidth};` : ''}
            }

            .${blockID} .swiper-pagination-bullet {
                ${sliderNormalDotsBorderTabletWidth && sliderNormalDotsBorderTablet?.top ? `border-width: ${sliderNormalDotsBorderTabletWidth};` : ''}
                ${sliderNormalDotsBorderRadiusTabletWidth && sliderNormalDotsBorderRadiusTablet?.top ? `border-radius: ${sliderNormalDotsBorderRadiusTabletWidth};` : ''}
                ${sliderNormalDotsWidth?.Tablet ? `width: ${sliderNormalDotsWidth?.Tablet}${sliderNormalDotsWidthUnits?.Tablet};` : ''}
                ${sliderNormalDotsHeight?.Tablet ? `height: ${sliderNormalDotsHeight?.Tablet}${sliderNormalDotsHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .swiper-pagination-bullet-active {
                ${sliderActiveDotsBorderTabletWidth && sliderActiveDotsBorderTablet?.top ? `border-width: ${sliderActiveDotsBorderTabletWidth};` : ''}
                ${sliderActiveDotsBorderRadiusTabletWidth && sliderActiveDotsBorderRadiusTablet?.top ? `border-radius: ${sliderActiveDotsBorderRadiusTabletWidth};` : ''}
                ${sliderActiveDotsWidth?.Tablet ? `width: ${sliderActiveDotsWidth?.Tablet}${sliderActiveDotsWidthUnits?.Tablet};` : ''}
                ${sliderActiveDotsHeight?.Tablet ? `height: ${sliderActiveDotsHeight?.Tablet}${sliderActiveDotsHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .swiper-pagination-fraction {
                ${sliderFractionGlobalTypoSwitcher?.fontSize === false && sliderFractionFontSize?.Tablet && sliderFractionFontSizeUnits?.Tablet ? `font-size: ${sliderFractionFontSize?.Tablet}${sliderFractionFontSizeUnits?.Tablet};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.letterSpacing === false && sliderFractionLetterSpacing?.Tablet && sliderFractionLetterSpacingUnits?.Tablet ? `letter-spacing: ${sliderFractionLetterSpacing?.Tablet}${sliderFractionLetterSpacingUnits?.Tablet};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.lineHeight === false && sliderFractionLineHeight?.Tablet && sliderFractionLineHeightUnits?.Tablet ? `line-height: ${sliderFractionLineHeight?.Tablet}${sliderFractionLineHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .swiper-pagination-progressbar {
                ${sliderProgressbarHeight?.Tablet ? `height: ${sliderProgressbarHeight?.Tablet}${sliderProgressbarHeightUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-slider-container{
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'left' && sliderHZLeftOffset?.Mobile !== undefined ? `left: ${sliderHZLeftOffset?.Mobile}${sliderHZLeftOffsetUnits?.Mobile};` : ''}
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderHZOrientationType === 'right' && sliderHZRightOffset?.Mobile !== undefined ? `right: ${sliderHZRightOffset?.Mobile}${sliderHZRightOffsetUnits?.Mobile};` : ''}
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'top' && sliderVRTopOffset?.Mobile !== undefined ? `top: ${sliderVRTopOffset?.Mobile}${sliderVRTopOffsetUnits?.Mobile};` : ''}
                ${sliderPositionType !== 'default' && sliderPositionType !== 'relative' && sliderVROrientationType === 'bottom' && sliderVRBottomOffset?.Mobile !== undefined ? `bottom: ${sliderVRBottomOffset?.Mobile}${sliderVRBottomOffsetUnits?.Mobile};` : ''}
                ${sliderGlobalZIndex?.Mobile ? `z-index: ${sliderGlobalZIndex?.Mobile};` : ''}
                ${sliderGlobalPaddingMobileWidth ? `padding: ${sliderGlobalPaddingMobileWidth};` : ''}
                ${sliderGlobalMarginMobileWidth ? `margin: ${sliderGlobalMarginMobileWidth};` : ''}
                ${sliderGlobalBorderMobileWidth ? `border-width: ${sliderGlobalBorderMobileWidth};` : ''}
                ${sliderGlobalBorderRadiusMobileWidth ? `border-radius: ${sliderGlobalBorderRadiusMobileWidth};` : ''}
            }

            .${blockID} .swiper-wrapper.fb-swiper-wrapper {
                ${sliderHeight?.Mobile ? `min-height: ${sliderHeight?.Mobile}${sliderHeightUnits?.Mobile};` : ''}
            }

            .${blockID}.fb-slider-container.outside {
                ${sliderArrowPosition === 'top-left' || sliderArrowPosition === 'top-center' || sliderArrowPosition === 'top-right' ? `
                    padding: ${sliderArrowPositionOutsidePadding?.Mobile}${sliderArrowPositionOutsidePaddingUnits?.Mobile} 0 0;
                ` : ''}

                ${sliderArrowPosition === 'bottom-left' || sliderArrowPosition === 'bottom-center' || sliderArrowPosition === 'bottom-right' ? `
                    padding: 0 0 ${sliderArrowPositionOutsidePadding?.Mobile}${sliderArrowPositionOutsidePaddingUnits?.Mobile};
                ` : ''}

                ${sliderArrowPosition === 'center' ? `
                    padding: 0 ${sliderArrowPositionOutsidePadding?.Mobile}${sliderArrowPositionOutsidePaddingUnits?.Mobile};

                ` : ''}
            }

            .${blockID} .fb-slider-default-icon-wrapper {
                ${sliderNavigationPaddingMobileWidth ? `padding: ${sliderNavigationPaddingMobileWidth};` : ''}
                ${sliderNavigationBorderMobileWidth ? `border-width: ${sliderNavigationBorderMobileWidth};` : ''}
                ${sliderNavigationBorderRadiusMobileWidth ? `border-radius: ${sliderNavigationBorderRadiusMobileWidth};` : ''}                                             
            }

            ${sliderArrowPosition && sliderArrowPosition !== 'center' ? `

                .${blockID} .fb-slider-default-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition},
                .${blockID} .fb-slider-custom-icon-wrapper.${sliderArrowPositionType}.${sliderArrowPosition} {

                    gap: ${sliderArrowGap?.Mobile}${sliderArrowGapUnits?.Mobile};

                    ${sliderArrowPosition === 'top-left' ? `
                        top: ${sliderArrowPositionTopOffset?.Mobile ? `${sliderArrowPositionTopOffset?.Mobile}${sliderArrowPositionTopOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'top-center' ? `
                        top: ${sliderArrowPositionTopOffset?.Mobile ? `${sliderArrowPositionTopOffset?.Mobile}${sliderArrowPositionTopOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'top-right' ? `
                        top: ${sliderArrowPositionTopOffset?.Mobile ? `${sliderArrowPositionTopOffset?.Mobile}${sliderArrowPositionTopOffsetUnits?.Mobile}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Mobile ? `${sliderArrowPositionRightOffset?.Mobile}${sliderArrowPositionRightOffsetUnits?.Mobile}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-left' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Mobile ? `${sliderArrowPositionBottomOffset?.Mobile}${sliderArrowPositionBottomOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '0'};
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-center' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Mobile ? `${sliderArrowPositionBottomOffset?.Mobile}${sliderArrowPositionBottomOffsetUnits?.Mobile}` : '0'};
                        left: ${sliderArrowPositionLeftOffset?.Mobile ? `${sliderArrowPositionLeftOffset?.Mobile}${sliderArrowPositionLeftOffsetUnits?.Mobile}` : '50%'};
                        transform: translateX(-50%);
                    ` : ''}

                    ${sliderArrowPosition === 'bottom-right' ? `
                        bottom: ${sliderArrowPositionBottomOffset?.Mobile ? `${sliderArrowPositionBottomOffset?.Mobile}${sliderArrowPositionBottomOffsetUnits?.Mobile}` : '0'};
                        right: ${sliderArrowPositionRightOffset?.Mobile ? `${sliderArrowPositionRightOffset?.Mobile}${sliderArrowPositionRightOffsetUnits?.Mobile}` : '0'};
                    ` : ''}

                     ${sliderNavigationTransform ? `transform: translateY(${sliderNavigationTransform.Mobile}${sliderNavigationTransformUnits.Mobile});` : ''}
                }
            ` : ''}

            .${blockID} .swiper-button-prev,
            .${blockID} .swiper-button-next {
                ${sliderArrowsBorderMobileWidth && sliderArrowsBorderMobile?.top ? `border-width: ${sliderArrowsBorderMobileWidth};` : ''}
                ${sliderArrowsBorderRadiusMobileWidth && sliderArrowsBorderRadiusMobile?.top ? `border-radius: ${sliderArrowsBorderRadiusMobileWidth};` : ''}
                ${sliderArrowsWidth?.Mobile ? `width: ${sliderArrowsWidth?.Mobile}${sliderArrowsWidthUnits?.Mobile};` : ''}
                ${sliderArrowsHeight?.Mobile ? `height: ${sliderArrowsHeight?.Mobile}${sliderArrowsHeightUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next svg {
                ${sliderArrowsSize?.Mobile ? `width: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
                ${sliderArrowsSize?.Mobile ? `height: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next img {
                ${sliderArrowsSize?.Mobile ? `width: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
                ${sliderArrowsSize?.Mobile ? `height: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .swiper-button-prev:after,
            .${blockID} .swiper-button-next:after {
                ${sliderArrowsSize?.Mobile ? `font-size: ${sliderArrowsSize?.Mobile}${sliderArrowsSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-prev:after {
                ${sliderNavigationLeftIconRotate?.Mobile ? `transform: rotate(${sliderNavigationLeftIconRotate?.Mobile}deg);` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-next:after {
                ${sliderNavigationRightIconRotate?.Mobile ? `transform: rotate(${sliderNavigationRightIconRotate?.Mobile}deg);` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-prev:hover img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-prev:hover:after {
                ${sliderNavigationLeftIconRotateHover?.Mobile ? `transform: rotate(${sliderNavigationLeftIconRotateHover?.Mobile}deg);` : ''}
            }

            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:hover svg,
            .${blockID} .fb-slider-custom-icon-wrapper .swiper-button-next:hover img,
            .${blockID} .fb-slider-default-icon-wrapper .swiper-button-next:hover:after {
                ${sliderNavigationRightIconRotateHover?.Mobile ? `transform: rotate(${sliderNavigationRightIconRotateHover?.Mobile}deg);` : ''}
            }

            .${blockID} .swiper-pagination {
                ${sliderDotsPosition?.Mobile ? `bottom: ${sliderDotsPosition?.Mobile}${sliderDotsPositionUnits?.Mobile} !important;` : ''}
                ${sliderDotsMarginMobileWidth && sliderDotsMarginMobile?.top ? `margin: ${sliderDotsMarginMobileWidth};` : ''}
            }

            .${blockID} .swiper-pagination-bullet {
                ${sliderNormalDotsBorderMobileWidth && sliderNormalDotsBorderMobile?.top ? `border-width: ${sliderNormalDotsBorderMobileWidth};` : ''}
                ${sliderNormalDotsBorderRadiusMobileWidth && sliderNormalDotsBorderRadiusMobile?.top ? `border-radius: ${sliderNormalDotsBorderRadiusMobileWidth};` : ''}
                ${sliderNormalDotsWidth?.Mobile ? `width: ${sliderNormalDotsWidth?.Mobile}${sliderNormalDotsWidthUnits?.Mobile};` : ''}
                ${sliderNormalDotsHeight?.Mobile ? `height: ${sliderNormalDotsHeight?.Mobile}${sliderNormalDotsHeightUnits?.Mobile};` : ''}
            }

            .${blockID} .swiper-pagination-bullet-active {
                ${sliderActiveDotsBorderMobileWidth && sliderActiveDotsBorderMobile?.top ? `border-width: ${sliderActiveDotsBorderMobileWidth};` : ''}
                ${sliderActiveDotsBorderRadiusMobileWidth && sliderActiveDotsBorderRadiusMobile?.top ? `border-radius: ${sliderActiveDotsBorderRadiusMobileWidth};` : ''}
                ${sliderActiveDotsWidth?.Mobile ? `width: ${sliderActiveDotsWidth?.Mobile}${sliderActiveDotsWidthUnits?.Mobile};` : ''}
                ${sliderActiveDotsHeight?.Mobile ? `height: ${sliderActiveDotsHeight?.Mobile}${sliderActiveDotsHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .swiper-pagination-fraction {
                ${sliderFractionGlobalTypoSwitcher?.fontSize === false && sliderFractionFontSize?.Mobile && sliderFractionFontSizeUnits?.Mobile ? `font-size: ${sliderFractionFontSize?.Mobile}${sliderFractionFontSizeUnits?.Mobile};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.letterSpacing === false && sliderFractionLetterSpacing?.Mobile && sliderFractionLetterSpacingUnits?.Mobile ? `letter-spacing: ${sliderFractionLetterSpacing?.Mobile}${sliderFractionLetterSpacingUnits?.Mobile};` : ''}
                ${sliderFractionGlobalTypoSwitcher?.lineHeight === false && sliderFractionLineHeight?.Mobile && sliderFractionLineHeightUnits?.Mobile ? `line-height: ${sliderFractionLineHeight?.Mobile}${sliderFractionLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .swiper-pagination-progressbar {
                ${sliderProgressbarHeight?.Mobile ? `height: ${sliderProgressbarHeight?.Mobile}${sliderProgressbarHeightUnits?.Mobile};` : ''}
            }
        }

    `;

    const customCss = getCustomCss(sliderGlobalCustomCSS, `.${blockID} `);
    return `${sliderBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateSliderStyle;