/**
 * coverflowCarousel Number Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generatecoverflowCarouselNumberStyle = (attributes) => {
    const {
        blockID,
        showNavigation,
        showPagination,

        CarouselWidth,
        CarouselWidthUnits,
        CarouselHeight,
        CarouselHeightUnits,

        transitionSpeed,
        carouselReflection,
        carouselReflectionGap,
        carouselReflectionOpacity,
        carouselTransitionEasing,
        autoplay,
        autoplaySpeed,
        loop,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
        enableKeyboardNavigation,

        carouselArrowPositionType,
        carouselArrowPosition,
        carouselArrowDirection,
        carouselArrowGap,
        carouselArrowGapUnits,

        carouselArrowPositionTopOffset,
        carouselArrowPositionTopOffsetUnits,
        carouselArrowPositionLeftOffset,
        carouselArrowPositionLeftOffsetUnits,
        carouselArrowPositionRightOffset,
        carouselArrowPositionRightOffsetUnits,
        carouselArrowPositionBottomOffset,
        carouselArrowPositionBottomOffsetUnits,

        carouselArrowPositionOutsidePadding,
        carouselArrowPositionOutsidePaddingUnits,
        /** End Position */

        coverflowCarouselItemBgColorSwitcher,
        coverflowCarouselItemBgColor,
        coverflowCarouselItemBgHoverColor,

        /** carousel Arrows Style */
        carouselArrowsIconSwitcher,

        carouselArrowsIconLeftAlign,
        carouselArrowsIconLeft,
        carouselArrowsIconLeftImageUrl,
        carouselArrowsIconLeftImageAlt,
        carouselArrowsIconLeftImageID,

        carouselArrowsIconRightAlign,
        carouselArrowsIconRight,
        carouselArrowsIconRightImageUrl,
        carouselArrowsIconRightImageAlt,
        carouselArrowsIconRightImageID,

        carouselArrowsSize,
        carouselArrowsSizeUnits,
        carouselArrowsColorSwitcher,
        carouselArrowsColor,
        carouselArrowsColorHover,

        carouselArrowsBgColorSwitcher,
        carouselArrowsBgColor,
        carouselArrowsBgColorHover,

        carouselArrowsWidth,
        carouselArrowsWidthUnits,
        carouselArrowsHeight,
        carouselArrowsHeightUnits,

        /** Border Settings */
        carouselArrowsBorder,
        carouselArrowsBorderColorSwitcher,
        carouselArrowsBorderColor,
        carouselArrowsBorderHoverColor,
        carouselArrowsBorderUnits,
        carouselArrowsBorderDesktop,
        carouselArrowsBorderTablet,
        carouselArrowsBorderMobile,
        carouselArrowsBorderLink,

        /** Border Radius */
        carouselArrowsBorderRadiusUnits,
        carouselArrowsBorderRadiusDesktop,
        carouselArrowsBorderRadiusTablet,
        carouselArrowsBorderRadiusMobile,
        carouselArrowsBorderRadiusLink,

        /** Box Shadow */
        carouselArrowsBoxShadowSwitcher,
        carouselArrowsBoxShadowValues,
        carouselArrowsBoxShadowCssValue,
        carouselArrowsBoxShadowHoverValues,
        carouselArrowsBoxShadowHoverCssValue,

        /** Dots Style */

        carouselDotsMarginUnits,
        carouselDotsMarginDesktop,
        carouselDotsMarginTablet,
        carouselDotsMarginMobile,
        carouselDotsMarginLink,

        carouselDotsPosition,
        carouselDotsPositionUnits,

        carouselDotsSwitcher,
        carouselNormalDotsBgColor,
        carouselNormalDotsWidth,
        carouselNormalDotsWidthUnits,
        carouselNormalDotsHeight,
        carouselNormalDotsHeightUnits,

        carouselNormalDotsBorder,
        carouselNormalDotsBorderColorSwitcher,
        carouselNormalDotsBorderColor,
        carouselNormalDotsBorderHoverColor,

        carouselNormalDotsBorderUnits,
        carouselNormalDotsBorderDesktop,
        carouselNormalDotsBorderTablet,
        carouselNormalDotsBorderMobile,
        carouselNormalDotsBorderLink,

        carouselNormalDotsBorderRadiusUnits,
        carouselNormalDotsBorderRadiusDesktop,
        carouselNormalDotsBorderRadiusTablet,
        carouselNormalDotsBorderRadiusMobile,
        carouselNormalDotsBorderRadiusLink,

        carouselActiveDotsBgColor,
        carouselActiveDotsWidth,
        carouselActiveDotsWidthUnits,
        carouselActiveDotsHeight,
        carouselActiveDotsHeightUnits,

        carouselActiveDotsBorder,
        carouselActiveDotsBorderColorSwitcher,
        carouselActiveDotsBorderColor,
        carouselActiveDotsBorderHoverColor,

        carouselActiveDotsBorderUnits,
        carouselActiveDotsBorderDesktop,
        carouselActiveDotsBorderTablet,
        carouselActiveDotsBorderMobile,
        carouselActiveDotsBorderLink,

        carouselActiveDotsBorderRadiusUnits,
        carouselActiveDotsBorderRadiusDesktop,
        carouselActiveDotsBorderRadiusTablet,
        carouselActiveDotsBorderRadiusMobile,
        carouselActiveDotsBorderRadiusLink,

        carouselFractionColorSwitcher,
        carouselFractionColor,
        carouselFractionHoverColor,

        carouselFractionGlobalTypographyData,
        carouselFractionGlobalTypoSwitcher,
        carouselFractionGlobalTypoType,
        carouselFractionGlobalTypoOption,

        carouselFractionFontFamily,
        carouselFractionFontSize,
        carouselFractionFontSizeUnits,
        carouselFractionFontWeight,
        carouselFractionFontStyle,
        carouselFractionTextTransform,
        carouselFractionTextDecoration,
        carouselFractionLetterSpacing,
        carouselFractionLetterSpacingUnits,
        carouselFractionLineHeight,
        carouselFractionLineHeightUnits,

        carouselProgressbarBGColorSwitcher,
        carouselProgressbarBGColor,
        carouselProgressbarBGActiveColor,
        carouselProgressbarHeight,
        carouselProgressbarHeightUnits,

        //Global attributes
        coverflowCarouselGlobalZIndex,
        coverflowCarouselOverflow,
        coverflowCarouselGlobalPaddingUnits,
        coverflowCarouselGlobalPaddingDesktop,
        coverflowCarouselGlobalPaddingTablet,
        coverflowCarouselGlobalPaddingMobile,
        coverflowCarouselGlobalPaddingLink,
        coverflowCarouselGlobalMarginUnits,
        coverflowCarouselGlobalMarginDesktop,
        coverflowCarouselGlobalMarginTablet,
        coverflowCarouselGlobalMarginMobile,
        coverflowCarouselGlobalMarginLink,
        coverflowCarouselGlobalBgColorSwitcher,
        coverflowCarouselGlobalBgColor,
        coverflowCarouselGlobalBgHoverColor,
        coverflowCarouselGlobalBorder,
        coverflowCarouselGlobalBorderColorSwitcher,
        coverflowCarouselGlobalBorderColor,
        coverflowCarouselGlobalBorderHoverColor,
        coverflowCarouselGlobalBorderUnits,
        coverflowCarouselGlobalBorderDesktop,
        coverflowCarouselGlobalBorderTablet,
        coverflowCarouselGlobalBorderMobile,
        coverflowCarouselGlobalBorderLink,
        coverflowCarouselGlobalBorderRadiusUnits,
        coverflowCarouselGlobalBorderRadiusDesktop,
        coverflowCarouselGlobalBorderRadiusTablet,
        coverflowCarouselGlobalBorderRadiusMobile,
        coverflowCarouselGlobalBorderRadiusLink,
        coverflowCarouselGlobalBoxShadowValues,
        coverflowCarouselGlobalBoxShadowCssValue,

        coverflowCarouselDesktopSwitcher,
        coverflowCarouselTabletSwitcher,
        coverflowCarouselMobileSwitcher,

        // Position
        coverflowCarouselPositionType,
        coverflowCarouselHZOrientationType,
        coverflowCarouselVROrientationType,
        coverflowCarouselHZLeftOffset,
        coverflowCarouselHZLeftOffsetUnits,
        coverflowCarouselHZRightOffset,
        coverflowCarouselHZRightOffsetUnits,
        coverflowCarouselVRTopOffset,
        coverflowCarouselVRTopOffsetUnits,
        coverflowCarouselVRBottomOffset,
        coverflowCarouselVRBottomOffsetUnits,

        coverflowCarouselGlobalWraperCustomCSS,
        coverflowCarouselGlobalWraperID,
        coverflowCarouselGlobalWraperClass,
        coverflowCarouselPresetStyle
    } = attributes;

    const carouselArrowsBorderDesktopWidth = `${carouselArrowsBorderDesktop?.top}${carouselArrowsBorderUnits?.Desktop} ${carouselArrowsBorderDesktop?.right}${carouselArrowsBorderUnits?.Desktop} ${carouselArrowsBorderDesktop?.bottom}${carouselArrowsBorderUnits?.Desktop} ${carouselArrowsBorderDesktop?.left}${carouselArrowsBorderUnits?.Desktop}`;
    const carouselArrowsBorderTabletWidth = `${carouselArrowsBorderTablet?.top}${carouselArrowsBorderUnits?.Tablet} ${carouselArrowsBorderTablet?.right}${carouselArrowsBorderUnits?.Tablet} ${carouselArrowsBorderTablet?.bottom}${carouselArrowsBorderUnits?.Tablet} ${carouselArrowsBorderTablet?.left}${carouselArrowsBorderUnits?.Tablet}`;
    const carouselArrowsBorderMobileWidth = `${carouselArrowsBorderMobile?.top}${carouselArrowsBorderUnits?.Mobile} ${carouselArrowsBorderMobile?.right}${carouselArrowsBorderUnits?.Mobile} ${carouselArrowsBorderMobile?.bottom}${carouselArrowsBorderUnits?.Mobile} ${carouselArrowsBorderMobile?.left}${carouselArrowsBorderUnits?.Mobile}`;

    const carouselArrowsBorderRadiusDesktopWidth = `${carouselArrowsBorderRadiusDesktop?.top}${carouselArrowsBorderRadiusUnits?.Desktop} ${carouselArrowsBorderRadiusDesktop?.right}${carouselArrowsBorderRadiusUnits?.Desktop} ${carouselArrowsBorderRadiusDesktop?.bottom}${carouselArrowsBorderRadiusUnits?.Desktop} ${carouselArrowsBorderRadiusDesktop?.left}${carouselArrowsBorderRadiusUnits?.Desktop}`;
    const carouselArrowsBorderRadiusTabletWidth = `${carouselArrowsBorderRadiusTablet?.top}${carouselArrowsBorderRadiusUnits?.Tablet} ${carouselArrowsBorderRadiusTablet?.right}${carouselArrowsBorderRadiusUnits?.Tablet} ${carouselArrowsBorderRadiusTablet?.bottom}${carouselArrowsBorderRadiusUnits?.Tablet} ${carouselArrowsBorderRadiusTablet?.left}${carouselArrowsBorderRadiusUnits?.Tablet}`;
    const carouselArrowsBorderRadiusMobileWidth = `${carouselArrowsBorderRadiusMobile?.top}${carouselArrowsBorderRadiusUnits?.Mobile} ${carouselArrowsBorderRadiusMobile?.right}${carouselArrowsBorderRadiusUnits?.Mobile} ${carouselArrowsBorderRadiusMobile?.bottom}${carouselArrowsBorderRadiusUnits?.Mobile} ${carouselArrowsBorderRadiusMobile?.left}${carouselArrowsBorderRadiusUnits?.Mobile}`;

    const carouselDotsMarginDesktopWidth = `${carouselDotsMarginDesktop?.top}${carouselDotsMarginUnits?.Desktop} ${carouselDotsMarginDesktop?.right}${carouselDotsMarginUnits?.Desktop} ${carouselDotsMarginDesktop?.bottom}${carouselDotsMarginUnits?.Desktop} ${carouselDotsMarginDesktop?.left}${carouselDotsMarginUnits?.Desktop}`;
    const carouselDotsMarginTabletWidth = `${carouselDotsMarginTablet?.top}${carouselDotsMarginUnits?.Tablet} ${carouselDotsMarginTablet?.right}${carouselDotsMarginUnits?.Tablet} ${carouselDotsMarginTablet?.bottom}${carouselDotsMarginUnits?.Tablet} ${carouselDotsMarginTablet?.left}${carouselDotsMarginUnits?.Tablet}`;
    const carouselDotsMarginMobileWidth = `${carouselDotsMarginMobile?.top}${carouselDotsMarginUnits?.Mobile} ${carouselDotsMarginMobile?.right}${carouselDotsMarginUnits?.Mobile} ${carouselDotsMarginMobile?.bottom}${carouselDotsMarginUnits?.Mobile} ${carouselDotsMarginMobile?.left}${carouselDotsMarginUnits?.Mobile}`;

    const carouselNormalDotsBorderDesktopWidth = `${carouselNormalDotsBorderDesktop?.top}${carouselNormalDotsBorderUnits?.Desktop} ${carouselNormalDotsBorderDesktop?.right}${carouselNormalDotsBorderUnits?.Desktop} ${carouselNormalDotsBorderDesktop?.bottom}${carouselNormalDotsBorderUnits?.Desktop} ${carouselNormalDotsBorderDesktop?.left}${carouselNormalDotsBorderUnits?.Desktop}`;
    const carouselNormalDotsBorderTabletWidth = `${carouselNormalDotsBorderTablet?.top}${carouselNormalDotsBorderUnits?.Tablet} ${carouselNormalDotsBorderTablet?.right}${carouselNormalDotsBorderUnits?.Tablet} ${carouselNormalDotsBorderTablet?.bottom}${carouselNormalDotsBorderUnits?.Tablet} ${carouselNormalDotsBorderTablet?.left}${carouselNormalDotsBorderUnits?.Tablet}`;
    const carouselNormalDotsBorderMobileWidth = `${carouselNormalDotsBorderMobile?.top}${carouselNormalDotsBorderUnits?.Mobile} ${carouselNormalDotsBorderMobile?.right}${carouselNormalDotsBorderUnits?.Mobile} ${carouselNormalDotsBorderMobile?.bottom}${carouselNormalDotsBorderUnits?.Mobile} ${carouselNormalDotsBorderMobile?.left}${carouselNormalDotsBorderUnits?.Mobile}`;

    const carouselNormalDotsBorderRadiusDesktopWidth = `${carouselNormalDotsBorderRadiusDesktop?.top}${carouselNormalDotsBorderRadiusUnits?.Desktop} ${carouselNormalDotsBorderRadiusDesktop?.right}${carouselNormalDotsBorderRadiusUnits?.Desktop} ${carouselNormalDotsBorderRadiusDesktop?.bottom}${carouselNormalDotsBorderRadiusUnits?.Desktop} ${carouselNormalDotsBorderRadiusDesktop?.left}${carouselNormalDotsBorderRadiusUnits?.Desktop}`;
    const carouselNormalDotsBorderRadiusTabletWidth = `${carouselNormalDotsBorderRadiusTablet?.top}${carouselNormalDotsBorderRadiusUnits?.Tablet} ${carouselNormalDotsBorderRadiusTablet?.right}${carouselNormalDotsBorderRadiusUnits?.Tablet} ${carouselNormalDotsBorderRadiusTablet?.bottom}${carouselNormalDotsBorderRadiusUnits?.Tablet} ${carouselNormalDotsBorderRadiusTablet?.left}${carouselNormalDotsBorderRadiusUnits?.Tablet}`;
    const carouselNormalDotsBorderRadiusMobileWidth = `${carouselNormalDotsBorderRadiusMobile?.top}${carouselNormalDotsBorderRadiusUnits?.Mobile} ${carouselNormalDotsBorderRadiusMobile?.right}${carouselNormalDotsBorderRadiusUnits?.Mobile} ${carouselNormalDotsBorderRadiusMobile?.bottom}${carouselNormalDotsBorderRadiusUnits?.Mobile} ${carouselNormalDotsBorderRadiusMobile?.left}${carouselNormalDotsBorderRadiusUnits?.Mobile}`;

    const carouselActiveDotsBorderDesktopWidth = `${carouselActiveDotsBorderDesktop?.top}${carouselActiveDotsBorderUnits?.Desktop} ${carouselActiveDotsBorderDesktop?.right}${carouselActiveDotsBorderUnits?.Desktop} ${carouselActiveDotsBorderDesktop?.bottom}${carouselActiveDotsBorderUnits?.Desktop} ${carouselActiveDotsBorderDesktop?.left}${carouselActiveDotsBorderUnits?.Desktop}`;
    const carouselActiveDotsBorderTabletWidth = `${carouselActiveDotsBorderTablet?.top}${carouselActiveDotsBorderUnits?.Tablet} ${carouselActiveDotsBorderTablet?.right}${carouselActiveDotsBorderUnits?.Tablet} ${carouselActiveDotsBorderTablet?.bottom}${carouselActiveDotsBorderUnits?.Tablet} ${carouselActiveDotsBorderTablet?.left}${carouselActiveDotsBorderUnits?.Tablet}`;
    const carouselActiveDotsBorderMobileWidth = `${carouselActiveDotsBorderMobile?.top}${carouselActiveDotsBorderUnits?.Mobile} ${carouselActiveDotsBorderMobile?.right}${carouselActiveDotsBorderUnits?.Mobile} ${carouselActiveDotsBorderMobile?.bottom}${carouselActiveDotsBorderUnits?.Mobile} ${carouselActiveDotsBorderMobile?.left}${carouselActiveDotsBorderUnits?.Mobile}`;

    const carouselActiveDotsBorderRadiusDesktopWidth = `${carouselActiveDotsBorderRadiusDesktop?.top}${carouselActiveDotsBorderRadiusUnits?.Desktop} ${carouselActiveDotsBorderRadiusDesktop?.right}${carouselActiveDotsBorderRadiusUnits?.Desktop} ${carouselActiveDotsBorderRadiusDesktop?.bottom}${carouselActiveDotsBorderRadiusUnits?.Desktop} ${carouselActiveDotsBorderRadiusDesktop?.left}${carouselActiveDotsBorderRadiusUnits?.Desktop}`;
    const carouselActiveDotsBorderRadiusTabletWidth = `${carouselActiveDotsBorderRadiusTablet?.top}${carouselActiveDotsBorderRadiusUnits?.Tablet} ${carouselActiveDotsBorderRadiusTablet?.right}${carouselActiveDotsBorderRadiusUnits?.Tablet} ${carouselActiveDotsBorderRadiusTablet?.bottom}${carouselActiveDotsBorderRadiusUnits?.Tablet} ${carouselActiveDotsBorderRadiusTablet?.left}${carouselActiveDotsBorderRadiusUnits?.Tablet}`;
    const carouselActiveDotsBorderRadiusMobileWidth = `${carouselActiveDotsBorderRadiusMobile?.top}${carouselActiveDotsBorderRadiusUnits?.Mobile} ${carouselActiveDotsBorderRadiusMobile?.right}${carouselActiveDotsBorderRadiusUnits?.Mobile} ${carouselActiveDotsBorderRadiusMobile?.bottom}${carouselActiveDotsBorderRadiusUnits?.Mobile} ${carouselActiveDotsBorderRadiusMobile?.left}${carouselActiveDotsBorderRadiusUnits?.Mobile}`;


    const globalDesktopPadding = `${coverflowCarouselGlobalPaddingDesktop?.top}${coverflowCarouselGlobalPaddingUnits?.Desktop} ${coverflowCarouselGlobalPaddingDesktop?.right}${coverflowCarouselGlobalPaddingUnits?.Desktop} ${coverflowCarouselGlobalPaddingDesktop?.bottom}${coverflowCarouselGlobalPaddingUnits?.Desktop} ${coverflowCarouselGlobalPaddingDesktop?.left}${coverflowCarouselGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${coverflowCarouselGlobalPaddingTablet?.top}${coverflowCarouselGlobalPaddingUnits?.Tablet} ${coverflowCarouselGlobalPaddingTablet?.right}${coverflowCarouselGlobalPaddingUnits?.Tablet} ${coverflowCarouselGlobalPaddingTablet?.bottom}${coverflowCarouselGlobalPaddingUnits?.Tablet} ${coverflowCarouselGlobalPaddingTablet?.left}${coverflowCarouselGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${coverflowCarouselGlobalPaddingMobile?.top}${coverflowCarouselGlobalPaddingUnits?.Mobile} ${coverflowCarouselGlobalPaddingMobile?.right}${coverflowCarouselGlobalPaddingUnits?.Mobile} ${coverflowCarouselGlobalPaddingMobile?.bottom}${coverflowCarouselGlobalPaddingUnits?.Mobile} ${coverflowCarouselGlobalPaddingMobile?.left}${coverflowCarouselGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${coverflowCarouselGlobalMarginDesktop?.top}${coverflowCarouselGlobalMarginUnits?.Desktop} ${coverflowCarouselGlobalMarginDesktop?.right}${coverflowCarouselGlobalMarginUnits?.Desktop} ${coverflowCarouselGlobalMarginDesktop?.bottom}${coverflowCarouselGlobalMarginUnits?.Desktop} ${coverflowCarouselGlobalMarginDesktop?.left}${coverflowCarouselGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${coverflowCarouselGlobalMarginTablet?.top}${coverflowCarouselGlobalMarginUnits?.Tablet} ${coverflowCarouselGlobalMarginTablet?.right}${coverflowCarouselGlobalMarginUnits?.Tablet} ${coverflowCarouselGlobalMarginTablet?.bottom}${coverflowCarouselGlobalMarginUnits?.Tablet} ${coverflowCarouselGlobalMarginTablet?.left}${coverflowCarouselGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${coverflowCarouselGlobalMarginMobile?.top}${coverflowCarouselGlobalMarginUnits?.Mobile} ${coverflowCarouselGlobalMarginMobile?.right}${coverflowCarouselGlobalMarginUnits?.Mobile} ${coverflowCarouselGlobalMarginMobile?.bottom}${coverflowCarouselGlobalMarginUnits?.Mobile} ${coverflowCarouselGlobalMarginMobile?.left}${coverflowCarouselGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${coverflowCarouselGlobalBorderDesktop?.top}${coverflowCarouselGlobalBorderUnits?.Desktop} ${coverflowCarouselGlobalBorderDesktop?.right}${coverflowCarouselGlobalBorderUnits?.Desktop} ${coverflowCarouselGlobalBorderDesktop?.bottom}${coverflowCarouselGlobalBorderUnits?.Desktop} ${coverflowCarouselGlobalBorderDesktop?.left}${coverflowCarouselGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${coverflowCarouselGlobalBorderTablet?.top}${coverflowCarouselGlobalBorderUnits?.Tablet} ${coverflowCarouselGlobalBorderTablet?.right}${coverflowCarouselGlobalBorderUnits?.Tablet} ${coverflowCarouselGlobalBorderTablet?.bottom}${coverflowCarouselGlobalBorderUnits?.Tablet} ${coverflowCarouselGlobalBorderTablet?.left}${coverflowCarouselGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${coverflowCarouselGlobalBorderMobile?.top}${coverflowCarouselGlobalBorderUnits?.Mobile} ${coverflowCarouselGlobalBorderMobile?.right}${coverflowCarouselGlobalBorderUnits?.Mobile} ${coverflowCarouselGlobalBorderMobile?.bottom}${coverflowCarouselGlobalBorderUnits?.Mobile} ${coverflowCarouselGlobalBorderMobile?.left}${coverflowCarouselGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${coverflowCarouselGlobalBorderRadiusDesktop?.top}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop} ${coverflowCarouselGlobalBorderRadiusDesktop?.right}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop} ${coverflowCarouselGlobalBorderRadiusDesktop?.bottom}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop} ${coverflowCarouselGlobalBorderRadiusDesktop?.left}${coverflowCarouselGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${coverflowCarouselGlobalBorderRadiusTablet?.top}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet} ${coverflowCarouselGlobalBorderRadiusTablet?.right}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet} ${coverflowCarouselGlobalBorderRadiusTablet?.bottom}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet} ${coverflowCarouselGlobalBorderRadiusTablet?.left}${coverflowCarouselGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${coverflowCarouselGlobalBorderRadiusMobile?.top}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile} ${coverflowCarouselGlobalBorderRadiusMobile?.right}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile} ${coverflowCarouselGlobalBorderRadiusMobile?.bottom}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile} ${coverflowCarouselGlobalBorderRadiusMobile?.left}${coverflowCarouselGlobalBorderRadiusUnits?.Mobile}`;

    const coverflowCarouselBlockStyle = `
        .fb-coverflowCarousel-main-wrapper.${blockID}{
            ${coverflowCarouselPositionType === 'default' ? `position: relative;` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' ? `width: 100%;` : ''}
            ${coverflowCarouselPositionType !== 'default' ? `position: ${coverflowCarouselPositionType};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'left' && coverflowCarouselHZLeftOffset?.Desktop ? `left: ${coverflowCarouselHZLeftOffset?.Desktop}${coverflowCarouselHZLeftOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'right' && coverflowCarouselHZRightOffset?.Desktop ? `right: ${coverflowCarouselHZRightOffset?.Desktop}${coverflowCarouselHZRightOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'top' && coverflowCarouselVRTopOffset?.Desktop ? `top: ${coverflowCarouselVRTopOffset?.Desktop}${coverflowCarouselVRTopOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'bottom' && coverflowCarouselVRBottomOffset?.Desktop ? `bottom: ${coverflowCarouselVRBottomOffset?.Desktop}${coverflowCarouselVRBottomOffsetUnits?.Desktop};` : ''}
            ${coverflowCarouselGlobalZIndex?.Desktop ? `z-index: ${coverflowCarouselGlobalZIndex?.Desktop};` : ''}
            ${coverflowCarouselOverflow !== 'default' ? `overflow: ${coverflowCarouselOverflow};` : ''}
        }
        .fb-coverflowCarousel-wrapper.${blockID}{
            ${coverflowCarouselGlobalBgColor ? `background: ${coverflowCarouselGlobalBgColor};` : ''}
            ${globalDesktopPadding && coverflowCarouselGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ""}
            ${globalDesktopMargin && coverflowCarouselGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ""}
            ${coverflowCarouselGlobalBorder ? `border-style: ${coverflowCarouselGlobalBorder};` : ""}
            ${coverflowCarouselGlobalBorderColor ? `border-color: ${coverflowCarouselGlobalBorderColor};` : ""} 
            ${globalDesktopBorderWidth && coverflowCarouselGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
            ${globalDesktopBorderRadiusWidth && coverflowCarouselGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
            ${coverflowCarouselGlobalBoxShadowCssValue ? `box-shadow: ${coverflowCarouselGlobalBoxShadowCssValue};` : ""}
        }
        .fb-coverflowCarousel-wrapper.${blockID}:hover{
            ${coverflowCarouselGlobalBgHoverColor ? `background: ${coverflowCarouselGlobalBgHoverColor};` : ''}
            ${coverflowCarouselGlobalBorderHoverColor ? `border-color: ${coverflowCarouselGlobalBorderHoverColor};` : ""}
        }

        .${blockID} .fb-coverflowCarousel-items-container{
            ${CarouselWidth?.Desktop ? `width: ${CarouselWidth?.Desktop}${CarouselWidthUnits?.Desktop};` : ''}
            ${CarouselHeight?.Desktop ? `height: ${CarouselHeight?.Desktop}${CarouselHeightUnits?.Desktop};` : ''}
        } 

        .${blockID} .fb-coverflow-carousel-slide{
            ${coverflowCarouselItemBgColorSwitcher === 'normal' && coverflowCarouselItemBgColor ? `background: ${coverflowCarouselItemBgColor};` : ''}
            transition: all ${transitionSpeed / 1000}s ${carouselTransitionEasing || 'cubic-bezier(0.16, 1, 0.3, 1)'};
            ${carouselReflection ? `-webkit-box-reflect: below ${carouselReflectionGap}px linear-gradient(transparent, transparent, rgba(0, 0, 0, ${carouselReflectionOpacity / 100}));` : '-webkit-box-reflect: none;'}
        }
        .${blockID} .fb-coverflow-carousel-slide:hover{
            ${coverflowCarouselItemBgColorSwitcher === 'hover' && coverflowCarouselItemBgHoverColor ? `background: ${coverflowCarouselItemBgHoverColor};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-prev-btn,
        .${blockID} .fb-coverflow-carousel-next-btn {
            ${carouselArrowsBorder ? `border: ${carouselArrowsBorder};` : ''}
            ${carouselArrowsBorderDesktopWidth && carouselArrowsBorderDesktop?.top ? `border-width: ${carouselArrowsBorderDesktopWidth};` : ''}
            ${carouselArrowsBorderRadiusDesktopWidth && carouselArrowsBorderRadiusDesktop?.top ? `border-radius: ${carouselArrowsBorderRadiusDesktopWidth};` : ''}
            ${carouselArrowsBorderColor ? `border-color: ${carouselArrowsBorderColor};` : ''}
            ${carouselArrowsBoxShadowCssValue ? `box-shadow: ${carouselArrowsBoxShadowCssValue};` : ''}
            ${carouselArrowsBgColor ? `background-color: ${carouselArrowsBgColor};` : ''}
            ${carouselArrowsColor ? `color: ${carouselArrowsColor};` : ''}
            ${carouselArrowsWidth?.Desktop ? `width: ${carouselArrowsWidth?.Desktop}${carouselArrowsWidthUnits?.Desktop};` : ''}
            ${carouselArrowsHeight?.Desktop ? `height: ${carouselArrowsHeight?.Desktop}${carouselArrowsHeightUnits?.Desktop};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-coverflow-carousel-prev-btn:hover,
        .${blockID} .fb-coverflow-carousel-next-btn:hover {
            ${carouselArrowsBgColorHover ? `background-color: ${carouselArrowsBgColorHover};` : ''}
            ${carouselArrowsColorHover ? `color: ${carouselArrowsColorHover};` : ''}
            ${carouselArrowsBorderHoverColor ? `border-color: ${carouselArrowsBorderHoverColor};` : ''}
            ${carouselArrowsBoxShadowHoverCssValue ? `box-shadow: ${carouselArrowsBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-prev-btn svg,
        .${blockID} .fb-coverflow-carousel-next-btn svg {
            ${carouselArrowsColor ? `fill: ${carouselArrowsColor};` : ''}
            ${carouselArrowsSize?.Desktop ? `width: ${carouselArrowsSize?.Desktop}${carouselArrowsSizeUnits?.Desktop};` : ''}
            ${carouselArrowsSize?.Desktop ? `height: ${carouselArrowsSize?.Desktop}${carouselArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-prev-btn img,
        .${blockID} .fb-coverflow-carousel-next-btn img {
            ${carouselArrowsSize?.Desktop ? `width: ${carouselArrowsSize?.Desktop}${carouselArrowsSizeUnits?.Desktop};` : ''}
            ${carouselArrowsSize?.Desktop ? `height: ${carouselArrowsSize?.Desktop}${carouselArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-prev-btn:hover svg,
        .${blockID} .fb-coverflow-carousel-next-btn:hover svg {
            ${carouselArrowsColorHover ? `fill: ${carouselArrowsColorHover};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-prev-btn:after,
        .${blockID} .fb-coverflow-carousel-next-btn:after {
            ${carouselArrowsSize?.Desktop ? `font-size: ${carouselArrowsSize?.Desktop}${carouselArrowsSizeUnits?.Desktop};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-pagination {
            ${carouselDotsPosition?.Desktop ? `bottom: ${carouselDotsPosition?.Desktop}${carouselDotsPositionUnits?.Desktop} !important;` : ''}
            ${carouselDotsMarginDesktopWidth && carouselDotsMarginDesktop?.top ? `margin: ${carouselDotsMarginDesktopWidth};` : ''}
        }
        .${blockID} .fb-coverflow-carousel-pagination.pagination-bullets .fb-coverflow-carousel-bullet {
            ${carouselNormalDotsBgColor ? `background-color: ${carouselNormalDotsBgColor};` : ''}
            ${carouselNormalDotsBorder ? `border: ${carouselNormalDotsBorder};` : ''}
            ${carouselNormalDotsBorderDesktopWidth && carouselNormalDotsBorderDesktop?.top ? `border-width: ${carouselNormalDotsBorderDesktopWidth};` : ''}
            ${carouselNormalDotsBorderRadiusDesktopWidth && carouselNormalDotsBorderRadiusDesktop?.top ? `border-radius: ${carouselNormalDotsBorderRadiusDesktopWidth};` : ''}
            ${carouselNormalDotsBorderColor ? `border-color: ${carouselNormalDotsBorderColor};` : ''}
            ${carouselNormalDotsWidth?.Desktop ? `width: ${carouselNormalDotsWidth?.Desktop}${carouselNormalDotsWidthUnits?.Desktop};` : ''}
            ${carouselNormalDotsHeight?.Desktop ? `height: ${carouselNormalDotsHeight?.Desktop}${carouselNormalDotsHeightUnits?.Desktop};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-pagination.pagination-bullets .fb-coverflow-carousel-bullet.active {
            ${carouselActiveDotsBgColor ? `background-color: ${carouselActiveDotsBgColor};` : ''}
            ${carouselActiveDotsBorder ? `border: ${carouselActiveDotsBorder};` : ''}
            ${carouselActiveDotsBorderDesktopWidth && carouselActiveDotsBorderDesktop?.top ? `border-width: ${carouselActiveDotsBorderDesktopWidth};` : ''}
            ${carouselActiveDotsBorderRadiusDesktopWidth && carouselActiveDotsBorderRadiusDesktop?.top ? `border-radius: ${carouselActiveDotsBorderRadiusDesktopWidth};` : ''}
            ${carouselActiveDotsBorderColor ? `border-color: ${carouselActiveDotsBorderColor};` : ''}
            ${carouselActiveDotsWidth?.Desktop ? `width: ${carouselActiveDotsWidth?.Desktop}${carouselActiveDotsWidthUnits?.Desktop};` : ''}
            ${carouselActiveDotsHeight?.Desktop ? `height: ${carouselActiveDotsHeight?.Desktop}${carouselActiveDotsHeightUnits?.Desktop};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-pagination.pagination-fraction span {
            ${carouselFractionGlobalTypoSwitcher?.fontFamily === true && carouselFractionGlobalTypographyData?.fontFamily ? `font-family: ${carouselFractionGlobalTypographyData?.fontFamily};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.fontSize === true && carouselFractionGlobalTypographyData?.fontSize ? `font-size: ${carouselFractionGlobalTypographyData?.fontSize};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.fontWeight === true && carouselFractionGlobalTypographyData?.fontWeight ? `font-weight: ${carouselFractionGlobalTypographyData?.fontWeight};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.fontStyle === true && carouselFractionGlobalTypographyData?.fontStyle ? `font-style: ${carouselFractionGlobalTypographyData?.fontStyle};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.textTransform === true && carouselFractionGlobalTypographyData?.textTransform ? `text-transform: ${carouselFractionGlobalTypographyData?.textTransform};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.textDecoration === true && carouselFractionGlobalTypographyData?.textDecoration ? `text-decoration: ${carouselFractionGlobalTypographyData?.textDecoration};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.letterSpacing === true && carouselFractionGlobalTypographyData?.letterSpacing ? `letter-spacing: ${carouselFractionGlobalTypographyData?.letterSpacing};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.lineHeight === true && carouselFractionGlobalTypographyData?.lineHeight ? `line-height: ${carouselFractionGlobalTypographyData?.lineHeight};` : ''}

            ${carouselFractionGlobalTypoSwitcher?.fontFamily === false && carouselFractionFontFamily && carouselFractionFontFamily !== 'Default' ? `font-family: ${carouselFractionFontFamily};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.fontSize === false && carouselFractionFontSize?.Desktop && carouselFractionFontSizeUnits?.Desktop ? `font-size: ${carouselFractionFontSize?.Desktop}${carouselFractionFontSizeUnits?.Desktop};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.fontWeight === false && carouselFractionFontWeight ? `font-weight: ${carouselFractionFontWeight};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.fontStyle === false && carouselFractionFontStyle ? `font-style: ${carouselFractionFontStyle};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.textTransform === false && carouselFractionTextTransform ? `text-transform: ${carouselFractionTextTransform};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.textDecoration === false && carouselFractionTextDecoration ? `text-decoration: ${carouselFractionTextDecoration};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.letterSpacing === false && carouselFractionLetterSpacing?.Desktop && carouselFractionLetterSpacingUnits?.Desktop ? `letter-spacing: ${carouselFractionLetterSpacing?.Desktop}${carouselFractionLetterSpacingUnits?.Desktop};` : ''}
            ${carouselFractionGlobalTypoSwitcher?.lineHeight === false && carouselFractionLineHeight?.Desktop && carouselFractionLineHeightUnits?.Desktop ? `line-height: ${carouselFractionLineHeight?.Desktop}${carouselFractionLineHeightUnits?.Desktop};` : ''}
            ${carouselFractionColor ? `color: ${carouselFractionColor};` : ''}
        }
        .${blockID} .fb-coverflow-carousel-pagination.pagination-fraction span:hover {
            ${carouselFractionHoverColor ? `color: ${carouselFractionHoverColor};` : ''}
        }

        .${blockID} .fb-coverflow-carousel-pagination.pagination-progressbar .fb-coverflow-carousel-pagination-progressbar-fill{
            ${carouselProgressbarBGColor ? `background-color: ${carouselProgressbarBGColor};` : ''}
            ${carouselProgressbarHeight?.Desktop ? `height: ${carouselProgressbarHeight?.Desktop}${carouselProgressbarHeightUnits?.Desktop};` : ''}
        } 
        .${blockID} .fb-coverflow-carousel-pagination.pagination-progressbar .fb-coverflow-carousel-pagination-progressbar-fill.active {
            ${carouselProgressbarBGActiveColor ? `background-color: ${carouselProgressbarBGActiveColor};` : ''}
        } 
        
        @media only screen and (max-width: 1024px) {
            .fb-coverflowCarousel-main-wrapper.${blockID}{
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'left' && coverflowCarouselHZLeftOffset?.Tablet ? `left: ${coverflowCarouselHZLeftOffset?.Tablet}${coverflowCarouselHZLeftOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'right' && coverflowCarouselHZRightOffset?.Tablet ? `right: ${coverflowCarouselHZRightOffset?.Tablet}${coverflowCarouselHZRightOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'top' && coverflowCarouselVRTopOffset?.Tablet ? `top: ${coverflowCarouselVRTopOffset?.Tablet}${coverflowCarouselVRTopOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'bottom' && coverflowCarouselVRBottomOffset?.Tablet ? `bottom: ${coverflowCarouselVRBottomOffset?.Tablet}${coverflowCarouselVRBottomOffsetUnits?.Tablet};` : ''}
                ${coverflowCarouselGlobalZIndex?.Tablet ? `z-index: ${coverflowCarouselGlobalZIndex?.Tablet};` : ''}        
            }
            .fb-coverflowCarousel-wrapper.${blockID}{
                ${globalTabletPadding && coverflowCarouselGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ""}
                ${globalTabletMargin && coverflowCarouselGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ""}
                ${globalTabletBorderWidth && coverflowCarouselGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ""}
                ${globalTabletBorderRadiusWidth && coverflowCarouselGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
            }
            .${blockID} .fb-coverflowCarousel-items-container{
                ${CarouselWidth?.Tablet ? `width: ${CarouselWidth?.Tablet}${CarouselWidthUnits?.Tablet};` : ''}
                ${CarouselHeight?.Tablet ? `height: ${CarouselHeight?.Tablet}${CarouselHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn {
                ${carouselArrowsBorderTabletWidth && carouselArrowsBorderTablet?.top ? `border-width: ${carouselArrowsBorderTabletWidth};` : ''}
                ${carouselArrowsBorderRadiusTabletWidth && carouselArrowsBorderRadiusTablet?.top ? `border-radius: ${carouselArrowsBorderRadiusTabletWidth};` : ''}
                ${carouselArrowsWidth?.Tablet ? `width: ${carouselArrowsWidth?.Tablet}${carouselArrowsWidthUnits?.Tablet};` : ''}
                ${carouselArrowsHeight?.Tablet ? `height: ${carouselArrowsHeight?.Tablet}${carouselArrowsHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn svg,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn svg {
                ${carouselArrowsSize?.Tablet ? `width: ${carouselArrowsSize?.Tablet}${carouselArrowsSizeUnits?.Tablet};` : ''}
                ${carouselArrowsSize?.Tablet ? `height: ${carouselArrowsSize?.Tablet}${carouselArrowsSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn img,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn img {
                ${carouselArrowsSize?.Tablet ? `width: ${carouselArrowsSize?.Tablet}${carouselArrowsSizeUnits?.Tablet};` : ''}
                ${carouselArrowsSize?.Tablet ? `height: ${carouselArrowsSize?.Tablet}${carouselArrowsSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn:after,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn:after {
                ${carouselArrowsSize?.Tablet ? `font-size: ${carouselArrowsSize?.Tablet}${carouselArrowsSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-pagination {
                ${carouselDotsPosition?.Tablet ? `bottom: ${carouselDotsPosition?.Tablet}${carouselDotsPositionUnits?.Tablet} !important;` : ''}
                ${carouselDotsMarginTabletWidth && carouselDotsMarginTablet?.top ? `margin: ${carouselDotsMarginTabletWidth};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-pagination.pagination-bullets .fb-coverflow-carousel-bullet {
                ${carouselNormalDotsBorderTabletWidth && carouselNormalDotsBorderTablet?.top ? `border-width: ${carouselNormalDotsBorderTabletWidth};` : ''}
                ${carouselNormalDotsBorderRadiusTabletWidth && carouselNormalDotsBorderRadiusTablet?.top ? `border-radius: ${carouselNormalDotsBorderRadiusTabletWidth};` : ''}
                ${carouselNormalDotsWidth?.Tablet ? `width: ${carouselNormalDotsWidth?.Tablet}${carouselNormalDotsWidthUnits?.Tablet};` : ''}
                ${carouselNormalDotsHeight?.Tablet ? `height: ${carouselNormalDotsHeight?.Tablet}${carouselNormalDotsHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-pagination.pagination-bullets .fb-coverflow-carousel-bullet.active {
                ${carouselActiveDotsBorderTabletWidth && carouselActiveDotsBorderTablet?.top ? `border-width: ${carouselActiveDotsBorderTabletWidth};` : ''}
                ${carouselActiveDotsBorderRadiusTabletWidth && carouselActiveDotsBorderRadiusTablet?.top ? `border-radius: ${carouselActiveDotsBorderRadiusTabletWidth};` : ''}
                ${carouselActiveDotsWidth?.Tablet ? `width: ${carouselActiveDotsWidth?.Tablet}${carouselActiveDotsWidthUnits?.Tablet};` : ''}
                ${carouselActiveDotsHeight?.Tablet ? `height: ${carouselActiveDotsHeight?.Tablet}${carouselActiveDotsHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-coverflow-carousel-pagination.pagination-fraction span {
                ${carouselFractionGlobalTypoSwitcher?.fontSize === false && carouselFractionFontSize?.Tablet && carouselFractionFontSizeUnits?.Tablet ? `font-size: ${carouselFractionFontSize?.Tablet}${carouselFractionFontSizeUnits?.Tablet};` : ''}
                ${carouselFractionGlobalTypoSwitcher?.letterSpacing === false && carouselFractionLetterSpacing?.Tablet && carouselFractionLetterSpacingUnits?.Tablet ? `letter-spacing: ${carouselFractionLetterSpacing?.Tablet}${carouselFractionLetterSpacingUnits?.Tablet};` : ''}
                ${carouselFractionGlobalTypoSwitcher?.lineHeight === false && carouselFractionLineHeight?.Tablet && carouselFractionLineHeightUnits?.Tablet ? `line-height: ${carouselFractionLineHeight?.Tablet}${carouselFractionLineHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-coverflow-carousel-pagination.pagination-progressbar .fb-coverflow-carousel-pagination-progressbar-fill {
                ${carouselProgressbarHeight?.Tablet ? `height: ${carouselProgressbarHeight?.Tablet}${carouselProgressbarHeightUnits?.Tablet};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .fb-coverflowCarousel-main-wrapper.${blockID}{
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'left' && coverflowCarouselHZLeftOffset?.Mobile ? `left: ${coverflowCarouselHZLeftOffset?.Mobile}${coverflowCarouselHZLeftOffsetUnits?.Mobile};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselHZOrientationType === 'right' && coverflowCarouselHZRightOffset?.Mobile ? `right: ${coverflowCarouselHZRightOffset?.Mobile}${coverflowCarouselHZRightOffsetUnits?.Mobile};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'top' && coverflowCarouselVRTopOffset?.Mobile ? `top: ${coverflowCarouselVRTopOffset?.Mobile}${coverflowCarouselVRTopOffsetUnits?.Mobile};` : ''}
                ${coverflowCarouselPositionType !== 'default' && coverflowCarouselPositionType !== 'relative' && coverflowCarouselVROrientationType === 'bottom' && coverflowCarouselVRBottomOffset?.Mobile ? `bottom: ${coverflowCarouselVRBottomOffset?.Mobile}${coverflowCarouselVRBottomOffsetUnits?.Mobile};` : ''} 
                ${coverflowCarouselGlobalZIndex?.Mobile ? `z-index: ${coverflowCarouselGlobalZIndex?.Mobile};` : ''}
            }
            .fb-coverflowCarousel-wrapper.${blockID}{
                ${globalMobilePadding && coverflowCarouselGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ""}
                ${globalMobileMargin && coverflowCarouselGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ""}
                ${globalMobileBorderWidth && coverflowCarouselGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ""}
                ${globalMobileBorderRadiusWidth && coverflowCarouselGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
            }
            .${blockID} .fb-coverflowCarousel-items-container{
                ${CarouselWidth?.Mobile ? `width: ${CarouselWidth?.Mobile}${CarouselWidthUnits?.Mobile};` : ''}
                ${CarouselHeight?.Mobile ? `height: ${CarouselHeight?.Mobile}${CarouselHeightUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn {
                ${carouselArrowsBorderMobileWidth && carouselArrowsBorderMobile?.top ? `border-width: ${carouselArrowsBorderMobileWidth};` : ''}
                ${carouselArrowsBorderRadiusMobileWidth && carouselArrowsBorderRadiusMobile?.top ? `border-radius: ${carouselArrowsBorderRadiusMobileWidth};` : ''}
                ${carouselArrowsWidth?.Mobile ? `width: ${carouselArrowsWidth?.Mobile}${carouselArrowsWidthUnits?.Mobile};` : ''}
                ${carouselArrowsHeight?.Mobile ? `height: ${carouselArrowsHeight?.Mobile}${carouselArrowsHeightUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn svg,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn svg {
                ${carouselArrowsSize?.Mobile ? `width: ${carouselArrowsSize?.Mobile}${carouselArrowsSizeUnits?.Mobile};` : ''}
                ${carouselArrowsSize?.Mobile ? `height: ${carouselArrowsSize?.Mobile}${carouselArrowsSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn img,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn img {
                ${carouselArrowsSize?.Mobile ? `width: ${carouselArrowsSize?.Mobile}${carouselArrowsSizeUnits?.Mobile};` : ''}
                ${carouselArrowsSize?.Mobile ? `height: ${carouselArrowsSize?.Mobile}${carouselArrowsSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-arrow-prev-btn:after,
            .${blockID} .fb-coverflow-carousel-arrow-next-btn:after {
                ${carouselArrowsSize?.Mobile ? `font-size: ${carouselArrowsSize?.Mobile}${carouselArrowsSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-pagination {
                ${carouselDotsPosition?.Mobile ? `bottom: ${carouselDotsPosition?.Mobile}${carouselDotsPositionUnits?.Mobile} !important;` : ''}
                ${carouselDotsMarginMobileWidth && carouselDotsMarginMobile?.top ? `margin: ${carouselDotsMarginMobileWidth};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-pagination.pagination-bullets .fb-coverflow-carousel-bullet {
                ${carouselNormalDotsBorderMobileWidth && carouselNormalDotsBorderMobile?.top ? `border-width: ${carouselNormalDotsBorderMobileWidth};` : ''}
                ${carouselNormalDotsBorderRadiusMobileWidth && carouselNormalDotsBorderRadiusMobile?.top ? `border-radius: ${carouselNormalDotsBorderRadiusMobileWidth};` : ''}
                ${carouselNormalDotsWidth?.Mobile ? `width: ${carouselNormalDotsWidth?.Mobile}${carouselNormalDotsWidthUnits?.Mobile};` : ''}
                ${carouselNormalDotsHeight?.Mobile ? `height: ${carouselNormalDotsHeight?.Mobile}${carouselNormalDotsHeightUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-coverflow-carousel-pagination.pagination-bullets .fb-coverflow-carousel-bullet.active {
                ${carouselActiveDotsBorderMobileWidth && carouselActiveDotsBorderMobile?.top ? `border-width: ${carouselActiveDotsBorderMobileWidth};` : ''}
                ${carouselActiveDotsBorderRadiusMobileWidth && carouselActiveDotsBorderRadiusMobile?.top ? `border-radius: ${carouselActiveDotsBorderRadiusMobileWidth};` : ''}
                ${carouselActiveDotsWidth?.Mobile ? `width: ${carouselActiveDotsWidth?.Mobile}${carouselActiveDotsWidthUnits?.Mobile};` : ''}
                ${carouselActiveDotsHeight?.Mobile ? `height: ${carouselActiveDotsHeight?.Mobile}${carouselActiveDotsHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-coverflow-carousel-pagination.pagination-fraction span {
                ${carouselFractionGlobalTypoSwitcher?.fontSize === false && carouselFractionFontSize?.Mobile && carouselFractionFontSizeUnits?.Mobile ? `font-size: ${carouselFractionFontSize?.Mobile}${carouselFractionFontSizeUnits?.Mobile};` : ''}
                ${carouselFractionGlobalTypoSwitcher?.letterSpacing === false && carouselFractionLetterSpacing?.Mobile && carouselFractionLetterSpacingUnits?.Mobile ? `letter-spacing: ${carouselFractionLetterSpacing?.Mobile}${carouselFractionLetterSpacingUnits?.Mobile};` : ''}
                ${carouselFractionGlobalTypoSwitcher?.lineHeight === false && carouselFractionLineHeight?.Mobile && carouselFractionLineHeightUnits?.Mobile ? `line-height: ${carouselFractionLineHeight?.Mobile}${carouselFractionLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-coverflow-carousel-pagination.pagination-progressbar .fb-coverflow-carousel-pagination-progressbar-fill{
                ${carouselProgressbarHeight?.Mobile ? `height: ${carouselProgressbarHeight?.Mobile}${carouselProgressbarHeightUnits?.Mobile};` : ''}
            }
        }`;

    const customCss = getCustomCss(coverflowCarouselGlobalWraperCustomCSS, `.${blockID}`);
    return `${coverflowCarouselBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

}
export default generatecoverflowCarouselNumberStyle;