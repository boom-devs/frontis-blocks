/**
 * Testimonial Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateTestimonialStyle = (attributes) => {
    const {
        blockID,
        // deviceType,
        TestimonialPresetStyle,
        TestimonialAlignment,

        TestimonialImageSwitcher,
        TestimonialImageUrl,
        TestimonialImageAlt,
        TestimonialImageID,

        TitleSwitcher,
        TestimonialTitle,
        DescSwitcher,
        TestimonialDesc,
        AuthorSwitcher,
        TestimonialAuthor,
        DesignationSwitcher,
        TestimonialDesignation,
        RatingSwitcher,
        TestimonialRatingNumber,
        TestimonialRatingicon,
        FrontendTestimonialRatingicon,
        TestimonialRatingImageUrl,
        TestimonialRatingImageAlt,
        TestimonialRatingImageID,
        TestimonialRatinIconAlign,
        QuoteIconSwitcher,
        TestimonialQuoteIcon,
        TestimonialQuoteImageUrl,
        TestimonialQuoteImageAlt,
        TestimonialQuoteImageID,
        TestimonialQuoteIconAlign,

        TestimonialImageWidth,
        TestimonialImageWidthUnits,
        TestimonialImageObjectFit,

        TestimonialImageRadiusUnits,
        TestimonialImageDesktopRadiusWidth,
        TestimonialImageTabRadiusWidth,
        TestimonialImageMobileRadiusWidth,
        TestimonialImageRadiusLink,

        TestimonialImageMarginUnits,
        TestimonialImageMarginDesktop,
        TestimonialImageMarginTablet,
        TestimonialImageMarginMobile,
        TestimonialImageMarginLink,

        TestimonialImagePositionSwitcher,
        TestimonialImageTopPosition,
        TestimonialImageTopPositionUnits,
        TestimonialImageLeftPosition,
        TestimonialImageLeftPositionUnits,

        TestimonialQuoteIconSize,
        TestimonialQuoteIconSizeUnits,
        TestimonialQuoteIconColorSwitcher,
        TestimonialQuoteIconColor,
        TestimonialQuoteIconHoverColor,
        TestimonialQuoteIconPositionSwitcher,
        TestimonialQuoteIconTopPosition,
        TestimonialQuoteIconTopPositionUnits,
        TestimonialQuoteIconLeftPosition,
        TestimonialQuoteIconLeftPositionUnits,
        TestimonialQuoteIconMarginUnits,
        TestimonialQuoteIconMarginDesktop,
        TestimonialQuoteIconMarginTablet,
        TestimonialQuoteIconMarginMobile,
        TestimonialQuoteIconMarginLink,

        TestimonialTitleTag,
        TestimonialTitleGlobalTypoSwitcher,
        TestimonialTitleGlobalTypographyData,
        TestimonialTitleGlobalTypoType,
        TestimonialTitleGlobalTypoOption,
        TestimonialTitleFontFamily,
        TestimonialTitleFontSize,
        TestimonialTitleFontSizeUnits,
        TestimonialTitleFontWeight,
        TestimonialTitleFontStyle,
        TestimonialTitleTextTransform,
        TestimonialTitleTextDecoration,
        TestimonialTitleLetterSpacing,
        TestimonialTitleLetterSpacingUnits,
        TestimonialTitleLineHeight,
        TestimonialTitleLineHeightUnits,
        TestimonialTitleColorSwitcher,
        TestimonialTitleColor,
        TestimonialTitleHoverColor,
        TestimonialTitleMarginUnits,
        TestimonialTitleMarginDesktop,
        TestimonialTitleMarginTablet,
        TestimonialTitleMarginMobile,
        TestimonialTitleMarginLink,

        TestimonialDescGlobalTypoSwitcher,
        TestimonialDescGlobalTypographyData,
        TestimonialDescGlobalTypoType,
        TestimonialDescGlobalTypoOption,
        TestimonialDescFontFamily,
        TestimonialDescFontSize,
        TestimonialDescFontSizeUnits,
        TestimonialDescFontWeight,
        TestimonialDescFontStyle,
        TestimonialDescTextTransform,
        TestimonialDescTextDecoration,
        TestimonialDescLetterSpacing,
        TestimonialDescLetterSpacingUnits,
        TestimonialDescLineHeight,
        TestimonialDescLineHeightUnits,
        TestimonialDescColorSwitcher,
        TestimonialDescColor,
        TestimonialDescHoverColor,
        TestimonialDescMarginUnits,
        TestimonialDescMarginDesktop,
        TestimonialDescMarginTablet,
        TestimonialDescMarginMobile,
        TestimonialDescMarginLink,

        TestimonialAuthorGlobalTypoSwitcher,
        TestimonialAuthorGlobalTypographyData,
        TestimonialAuthorGlobalTypoType,
        TestimonialAuthorGlobalTypoOption,
        TestimonialAuthorFontFamily,
        TestimonialAuthorFontSize,
        TestimonialAuthorFontSizeUnits,
        TestimonialAuthorFontWeight,
        TestimonialAuthorFontStyle,
        TestimonialAuthorTextTransform,
        TestimonialAuthorTextDecoration,
        TestimonialAuthorLetterSpacing,
        TestimonialAuthorLetterSpacingUnits,
        TestimonialAuthorLineHeight,
        TestimonialAuthorLineHeightUnits,
        TestimonialAuthorColorSwitcher,
        TestimonialAuthorColor,
        TestimonialAuthorHoverColor,

        TestimonialAuthorMarginUnits,
        TestimonialAuthorMarginDesktop,
        TestimonialAuthorMarginTablet,
        TestimonialAuthorMarginMobile,
        TestimonialAuthorMarginLink,

        TestimonialDesignationGlobalTypoSwitcher,
        TestimonialDesignationGlobalTypographyData,
        TestimonialDesignationGlobalTypoType,
        TestimonialDesignationGlobalTypoOption,
        TestimonialDesignationFontFamily,
        TestimonialDesignationFontSize,
        TestimonialDesignationFontSizeUnits,
        TestimonialDesignationFontWeight,
        TestimonialDesignationFontStyle,
        TestimonialDesignationTextTransform,
        TestimonialDesignationTextDecoration,
        TestimonialDesignationLetterSpacing,
        TestimonialDesignationLetterSpacingUnits,
        TestimonialDesignationLineHeight,
        TestimonialDesignationLineHeightUnits,
        TestimonialDesignationColorSwitcher,
        TestimonialDesignationColor,
        TestimonialDesignationHoverColor,
        TestimonialDesignationMarginUnits,
        TestimonialDesignationMarginDesktop,
        TestimonialDesignationMarginTablet,
        TestimonialDesignationMarginMobile,
        TestimonialDesignationMarginLink,

        TestimonialRatingIconAlign,
        TestimonialRatingIconGap,
        TestimonialRatingIconGapUnits,

        TestimonialRatingIconSize,
        TestimonialRatingIconSizeUnits,
        TestimonialRatingIconColorSwitcher,
        TestimonialRatingIconColor,
        TestimonialRatingIconHoverColor,
        TestimonialRatingIconMarginUnits,
        TestimonialRatingIconMarginDesktop,
        TestimonialRatingIconMarginTablet,
        TestimonialRatingIconMarginMobile,
        TestimonialRatingIconMarginLink,

        TestimonialGlobalZIndex,
        TestimonialOverflow,
        TestimonialGlobalPaddingUnits,
        TestimonialGlobalPaddingDesktop,
        TestimonialGlobalPaddingTablet,
        TestimonialGlobalPaddingMobile,
        TestimonialGlobalPaddingLink,
        TestimonialGlobalMarginUnits,
        TestimonialGlobalMarginDesktop,
        TestimonialGlobalMarginTablet,
        TestimonialGlobalMarginMobile,
        TestimonialGlobalMarginLink,

        TestimonialGlobalBgColorSwitcher,
        TestimonialGlobalBgNormalBackgroundType,
        TestimonialGlobalBgNormalClassicColor,
        TestimonialGlobalBgNormalGradientColor,
        TestimonialGlobalBgNormalCustomGradientSwitcher,
        TestimonialGlobalBgNormalCustomGradientInputValue,
        TestimonialGlobalBgHoverBackgroundType,
        TestimonialGlobalBgHoverClassicColor,
        TestimonialGlobalBgHoverGradientColor,
        TestimonialGlobalBgHoverCustomGradientSwitcher,
        TestimonialGlobalBgHoverCustomGradientInputValue,

        TestimonialGlobalBorder,
        TestimonialGlobalBorderColor,
        TestimonialGlobalBorderHoverColor,
        TestimonialGlobalBorderColorSwitcher,

        TestimonialGlobalBorderUnits,
        TestimonialGlobalBorderDesktop,
        TestimonialGlobalBorderTablet,
        TestimonialGlobalBorderMobile,
        TestimonialGlobalBorderLink,

        TestimonialGlobalBorderRadiusUnits,
        TestimonialGlobalBorderRadiusDesktop,
        TestimonialGlobalBorderRadiusTablet,
        TestimonialGlobalBorderRadiusMobile,
        TestimonialGlobalBorderRadiusLink,

        TestimonialGlobalBoxShadowSwitcher,
        TestimonialGlobalBoxShadowValues,
        TestimonialGlobalBoxShadowCssValue,
        TestimonialGlobalBoxShadowHoverValues,
        TestimonialGlobalBoxShadowHoverCssValue,

        testimonialDesktopSwitcher,
        testimonialTabletSwitcher,
        testimonialMobileSwitcher,

        testimonialCustomCSS,
        testimonialGlobalWraperID,
        testimonialGlobalWraperClass,

        // Position
        testimonialPositionType,
        testimonialHZOrientationType,
        testimonialVROrientationType,
        testimonialHZLeftOffset,
        testimonialHZLeftOffsetUnits,
        testimonialHZRightOffset,
        testimonialHZRightOffsetUnits,
        testimonialVRTopOffset,
        testimonialVRTopOffsetUnits,
        testimonialVRBottomOffset,
        testimonialVRBottomOffsetUnits,

    } = attributes;

    /** Start Testimonial Rating Icon Margin */
    const testimonialRatingIconDesktopMargin = `${TestimonialRatingIconMarginDesktop?.top}${TestimonialRatingIconMarginUnits?.Desktop} ${TestimonialRatingIconMarginDesktop?.right}${TestimonialRatingIconMarginUnits?.Desktop} ${TestimonialRatingIconMarginDesktop?.bottom}${TestimonialRatingIconMarginUnits?.Desktop} ${TestimonialRatingIconMarginDesktop?.left}${TestimonialRatingIconMarginUnits?.Desktop}`;
    const testimonialRatingIconTabletMargin = `${TestimonialRatingIconMarginTablet?.top}${TestimonialRatingIconMarginUnits?.Tablet} ${TestimonialRatingIconMarginTablet?.right}${TestimonialRatingIconMarginUnits?.Tablet} ${TestimonialRatingIconMarginTablet?.bottom}${TestimonialRatingIconMarginUnits?.Tablet} ${TestimonialRatingIconMarginTablet?.left}${TestimonialRatingIconMarginUnits?.Tablet}`;
    const testimonialRatingIconMobileMargin = `${TestimonialRatingIconMarginMobile?.top}${TestimonialRatingIconMarginUnits?.Mobile} ${TestimonialRatingIconMarginMobile?.right}${TestimonialRatingIconMarginUnits?.Mobile} ${TestimonialRatingIconMarginMobile?.bottom}${TestimonialRatingIconMarginUnits?.Mobile} ${TestimonialRatingIconMarginMobile?.left}${TestimonialRatingIconMarginUnits?.Mobile}`;
    /** End Testimonial Rating Icon Margin */

    /** Start Testimonial Title Margin */
    const testimonialTitleDesktopMargin = `${TestimonialTitleMarginDesktop?.top}${TestimonialTitleMarginUnits?.Desktop} ${TestimonialTitleMarginDesktop?.right}${TestimonialTitleMarginUnits?.Desktop} ${TestimonialTitleMarginDesktop?.bottom}${TestimonialTitleMarginUnits?.Desktop} ${TestimonialTitleMarginDesktop?.left}${TestimonialTitleMarginUnits?.Desktop}`;
    const testimonialTitleTabletMargin = `${TestimonialTitleMarginTablet?.top}${TestimonialTitleMarginUnits?.Tablet} ${TestimonialTitleMarginTablet?.right}${TestimonialTitleMarginUnits?.Tablet} ${TestimonialTitleMarginTablet?.bottom}${TestimonialTitleMarginUnits?.Tablet} ${TestimonialTitleMarginTablet?.left}${TestimonialTitleMarginUnits?.Tablet}`;
    const testimonialTitleMobileMargin = `${TestimonialTitleMarginMobile?.top}${TestimonialTitleMarginUnits?.Mobile} ${TestimonialTitleMarginMobile?.right}${TestimonialTitleMarginUnits?.Mobile} ${TestimonialTitleMarginMobile?.bottom}${TestimonialTitleMarginUnits?.Mobile} ${TestimonialTitleMarginMobile?.left}${TestimonialTitleMarginUnits?.Mobile}`;
    /** End Testimonial Title Margin */

    /** Start Testimonial Desc Margin */
    const testimonialDescDesktopMargin = `${TestimonialDescMarginDesktop?.top}${TestimonialDescMarginUnits?.Desktop} ${TestimonialDescMarginDesktop?.right}${TestimonialDescMarginUnits?.Desktop} ${TestimonialDescMarginDesktop?.bottom}${TestimonialDescMarginUnits?.Desktop} ${TestimonialDescMarginDesktop?.left}${TestimonialDescMarginUnits?.Desktop}`;
    const testimonialDescTabletMargin = `${TestimonialDescMarginTablet?.top}${TestimonialDescMarginUnits?.Tablet} ${TestimonialDescMarginTablet?.right}${TestimonialDescMarginUnits?.Tablet} ${TestimonialDescMarginTablet?.bottom}${TestimonialDescMarginUnits?.Tablet} ${TestimonialDescMarginTablet?.left}${TestimonialDescMarginUnits?.Tablet}`;
    const testimonialDescMobileMargin = `${TestimonialDescMarginMobile?.top}${TestimonialDescMarginUnits?.Mobile} ${TestimonialDescMarginMobile?.right}${TestimonialDescMarginUnits?.Mobile} ${TestimonialDescMarginMobile?.bottom}${TestimonialDescMarginUnits?.Mobile} ${TestimonialDescMarginMobile?.left}${TestimonialDescMarginUnits?.Mobile}`;
    /** End Testimonial Desc Margin */

    /** Start Testimonial Image Margin */
    const testimonialImageDesktopMargin = `${TestimonialImageMarginDesktop?.top}${TestimonialImageMarginUnits?.Desktop} ${TestimonialImageMarginDesktop?.right}${TestimonialImageMarginUnits?.Desktop} ${TestimonialImageMarginDesktop?.bottom}${TestimonialImageMarginUnits?.Desktop} ${TestimonialImageMarginDesktop?.left}${TestimonialImageMarginUnits?.Desktop}`;
    const testimonialImageTabletMargin = `${TestimonialImageMarginTablet?.top}${TestimonialImageMarginUnits?.Tablet} ${TestimonialImageMarginTablet?.right}${TestimonialImageMarginUnits?.Tablet} ${TestimonialImageMarginTablet?.bottom}${TestimonialImageMarginUnits?.Tablet} ${TestimonialImageMarginTablet?.left}${TestimonialImageMarginUnits?.Tablet}`;
    const testimonialImageMobileMargin = `${TestimonialImageMarginMobile?.top}${TestimonialImageMarginUnits?.Mobile} ${TestimonialImageMarginMobile?.right}${TestimonialImageMarginUnits?.Mobile} ${TestimonialImageMarginMobile?.bottom}${TestimonialImageMarginUnits?.Mobile} ${TestimonialImageMarginMobile?.left}${TestimonialImageMarginUnits?.Mobile}`;
    /** End Testimonial Image Margin */

    /** Start Testimonial Author Margin */
    const testimonialAuthorDesktopMargin = `${TestimonialAuthorMarginDesktop?.top}${TestimonialAuthorMarginUnits?.Desktop} ${TestimonialAuthorMarginDesktop?.right}${TestimonialAuthorMarginUnits?.Desktop} ${TestimonialAuthorMarginDesktop?.bottom}${TestimonialAuthorMarginUnits?.Desktop} ${TestimonialAuthorMarginDesktop?.left}${TestimonialAuthorMarginUnits?.Desktop}`;
    const testimonialAuthorTabletMargin = `${TestimonialAuthorMarginTablet?.top}${TestimonialAuthorMarginUnits?.Tablet} ${TestimonialAuthorMarginTablet?.right}${TestimonialAuthorMarginUnits?.Tablet} ${TestimonialAuthorMarginTablet?.bottom}${TestimonialAuthorMarginUnits?.Tablet} ${TestimonialAuthorMarginTablet?.left}${TestimonialAuthorMarginUnits?.Tablet}`;
    const testimonialAuthorMobileMargin = `${TestimonialAuthorMarginMobile?.top}${TestimonialAuthorMarginUnits?.Mobile} ${TestimonialAuthorMarginMobile?.right}${TestimonialAuthorMarginUnits?.Mobile} ${TestimonialAuthorMarginMobile?.bottom}${TestimonialAuthorMarginUnits?.Mobile} ${TestimonialAuthorMarginMobile?.left}${TestimonialAuthorMarginUnits?.Mobile}`;
    /** End Testimonial Author Margin */

    /** Start Testimonial Designation Margin */
    const testimonialDesignationDesktopMargin = `${TestimonialDesignationMarginDesktop?.top}${TestimonialDesignationMarginUnits?.Desktop} ${TestimonialDesignationMarginDesktop?.right}${TestimonialDesignationMarginUnits?.Desktop} ${TestimonialDesignationMarginDesktop?.bottom}${TestimonialDesignationMarginUnits?.Desktop} ${TestimonialDesignationMarginDesktop?.left}${TestimonialDesignationMarginUnits?.Desktop}`;
    const testimonialDesignationTabletMargin = `${TestimonialDesignationMarginTablet?.top}${TestimonialDesignationMarginUnits?.Tablet} ${TestimonialDesignationMarginTablet?.right}${TestimonialDesignationMarginUnits?.Tablet} ${TestimonialDesignationMarginTablet?.bottom}${TestimonialDesignationMarginUnits?.Tablet} ${TestimonialDesignationMarginTablet?.left}${TestimonialDesignationMarginUnits?.Tablet}`;
    const testimonialDesignationMobileMargin = `${TestimonialDesignationMarginMobile?.top}${TestimonialDesignationMarginUnits?.Mobile} ${TestimonialDesignationMarginMobile?.right}${TestimonialDesignationMarginUnits?.Mobile} ${TestimonialDesignationMarginMobile?.bottom}${TestimonialDesignationMarginUnits?.Mobile} ${TestimonialDesignationMarginMobile?.left}${TestimonialDesignationMarginUnits?.Mobile}`;
    /** End Testimonial Designation Margin */

    /** Start Testimonial Quote Icon Margin */
    const testimonialQuoteIconDesktopMargin = `${TestimonialQuoteIconMarginDesktop?.top}${TestimonialQuoteIconMarginUnits?.Desktop} ${TestimonialQuoteIconMarginDesktop?.right}${TestimonialQuoteIconMarginUnits?.Desktop} ${TestimonialQuoteIconMarginDesktop?.bottom}${TestimonialQuoteIconMarginUnits?.Desktop} ${TestimonialQuoteIconMarginDesktop?.left}${TestimonialQuoteIconMarginUnits?.Desktop}`;
    const testimonialQuoteIconTabletMargin = `${TestimonialQuoteIconMarginTablet?.top}${TestimonialQuoteIconMarginUnits?.Tablet} ${TestimonialQuoteIconMarginTablet?.right}${TestimonialQuoteIconMarginUnits?.Tablet} ${TestimonialQuoteIconMarginTablet?.bottom}${TestimonialQuoteIconMarginUnits?.Tablet} ${TestimonialQuoteIconMarginTablet?.left}${TestimonialQuoteIconMarginUnits?.Tablet}`;
    const testimonialQuoteIconMobileMargin = `${TestimonialQuoteIconMarginMobile?.top}${TestimonialQuoteIconMarginUnits?.Mobile} ${TestimonialQuoteIconMarginMobile?.right}${TestimonialQuoteIconMarginUnits?.Mobile} ${TestimonialQuoteIconMarginMobile?.bottom}${TestimonialQuoteIconMarginUnits?.Mobile} ${TestimonialQuoteIconMarginMobile?.left}${TestimonialQuoteIconMarginUnits?.Mobile}`;
    /** End Testimonial Quote Icon Margin */

    /** Start Testimonial Image Border Radius */
    const testimonialImageDesktopBorderRadiusWidth = `${TestimonialImageDesktopRadiusWidth?.top}${TestimonialImageRadiusUnits?.Desktop} ${TestimonialImageDesktopRadiusWidth?.right}${TestimonialImageRadiusUnits?.Desktop} ${TestimonialImageDesktopRadiusWidth?.bottom}${TestimonialImageRadiusUnits?.Desktop} ${TestimonialImageDesktopRadiusWidth?.left}${TestimonialImageRadiusUnits?.Desktop}`;
    const testimonialImageTabletBorderRadiusWidth = `${TestimonialImageTabRadiusWidth?.top}${TestimonialImageRadiusUnits?.Tablet} ${TestimonialImageTabRadiusWidth?.right}${TestimonialImageRadiusUnits?.Tablet} ${TestimonialImageTabRadiusWidth?.bottom}${TestimonialImageRadiusUnits?.Tablet} ${TestimonialImageTabRadiusWidth?.left}${TestimonialImageRadiusUnits?.Tablet}`;
    const testimonialImageMobileBorderRadiusWidth = `${TestimonialImageMobileRadiusWidth?.top}${TestimonialImageRadiusUnits?.Mobile} ${TestimonialImageMobileRadiusWidth?.right}${TestimonialImageRadiusUnits?.Mobile} ${TestimonialImageMobileRadiusWidth?.bottom}${TestimonialImageRadiusUnits?.Mobile} ${TestimonialImageMobileRadiusWidth?.left}${TestimonialImageRadiusUnits?.Mobile}`;
    /** End Testimonial Image Border Radius */

    /** Start Global Padding */
    const globalDesktopPadding = `${TestimonialGlobalPaddingDesktop?.top}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.right}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.bottom}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.left}${TestimonialGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${TestimonialGlobalPaddingTablet?.top}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.right}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.bottom}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.left}${TestimonialGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${TestimonialGlobalPaddingMobile?.top}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.right}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.bottom}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.left}${TestimonialGlobalPaddingUnits?.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const globalDesktopMargin = `${TestimonialGlobalMarginDesktop?.top}${TestimonialGlobalMarginUnits?.Desktop} ${TestimonialGlobalMarginDesktop?.right}${TestimonialGlobalMarginUnits?.Desktop} ${TestimonialGlobalMarginDesktop?.bottom}${TestimonialGlobalMarginUnits?.Desktop} ${TestimonialGlobalMarginDesktop?.left}${TestimonialGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${TestimonialGlobalMarginTablet?.top}${TestimonialGlobalMarginUnits?.Tablet} ${TestimonialGlobalMarginTablet?.right}${TestimonialGlobalMarginUnits?.Tablet} ${TestimonialGlobalMarginTablet?.bottom}${TestimonialGlobalMarginUnits?.Tablet} ${TestimonialGlobalMarginTablet?.left}${TestimonialGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${TestimonialGlobalMarginMobile?.top}${TestimonialGlobalMarginUnits?.Mobile} ${TestimonialGlobalMarginMobile?.right}${TestimonialGlobalMarginUnits?.Mobile} ${TestimonialGlobalMarginMobile?.bottom}${TestimonialGlobalMarginUnits?.Mobile} ${TestimonialGlobalMarginMobile?.left}${TestimonialGlobalMarginUnits?.Mobile}`;
    /** End Global Margin */

    /** Start Global Border */
    const globalDesktopBorderWidth = `${TestimonialGlobalBorderDesktop?.top}${TestimonialGlobalBorderUnits?.Desktop} ${TestimonialGlobalBorderDesktop?.right}${TestimonialGlobalBorderUnits?.Desktop} ${TestimonialGlobalBorderDesktop?.bottom}${TestimonialGlobalBorderUnits?.Desktop} ${TestimonialGlobalBorderDesktop?.left}${TestimonialGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${TestimonialGlobalBorderTablet?.top}${TestimonialGlobalBorderUnits?.Tablet} ${TestimonialGlobalBorderTablet?.right}${TestimonialGlobalBorderUnits?.Tablet} ${TestimonialGlobalBorderTablet?.bottom}${TestimonialGlobalBorderUnits?.Tablet} ${TestimonialGlobalBorderTablet?.left}${TestimonialGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${TestimonialGlobalBorderMobile?.top}${TestimonialGlobalBorderUnits?.Mobile} ${TestimonialGlobalBorderMobile?.right}${TestimonialGlobalBorderUnits?.Mobile} ${TestimonialGlobalBorderMobile?.bottom}${TestimonialGlobalBorderUnits?.Mobile} ${TestimonialGlobalBorderMobile?.left}${TestimonialGlobalBorderUnits?.Mobile}`;
    /** End Global Border */

    /** Start Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${TestimonialGlobalBorderRadiusDesktop?.top}${TestimonialGlobalBorderRadiusUnits?.Desktop} ${TestimonialGlobalBorderRadiusDesktop?.right}${TestimonialGlobalBorderRadiusUnits?.Desktop} ${TestimonialGlobalBorderRadiusDesktop?.bottom}${TestimonialGlobalBorderRadiusUnits?.Desktop} ${TestimonialGlobalBorderRadiusDesktop?.left}${TestimonialGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${TestimonialGlobalBorderRadiusTablet?.top}${TestimonialGlobalBorderRadiusUnits?.Tablet} ${TestimonialGlobalBorderRadiusTablet?.right}${TestimonialGlobalBorderRadiusUnits?.Tablet} ${TestimonialGlobalBorderRadiusTablet?.bottom}${TestimonialGlobalBorderRadiusUnits?.Tablet} ${TestimonialGlobalBorderRadiusTablet?.left}${TestimonialGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${TestimonialGlobalBorderRadiusMobile?.top}${TestimonialGlobalBorderRadiusUnits?.Mobile} ${TestimonialGlobalBorderRadiusMobile?.right}${TestimonialGlobalBorderRadiusUnits?.Mobile} ${TestimonialGlobalBorderRadiusMobile?.bottom}${TestimonialGlobalBorderRadiusUnits?.Mobile} ${TestimonialGlobalBorderRadiusMobile?.left}${TestimonialGlobalBorderRadiusUnits?.Mobile}`;
    /** End Global Border Radius */

    /** Start All Block Style */
    const testimonialCSS = `

        .${blockID}.fb-testimonial-main-wrapper {
            ${testimonialPositionType === 'default' ? `position: relative;` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' ? `width: 100%;` : ''}
            ${testimonialPositionType !== 'default' ? `position: ${testimonialPositionType};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'left' && testimonialHZLeftOffset?.Desktop !== undefined ? `left: ${testimonialHZLeftOffset?.Desktop}${testimonialHZLeftOffsetUnits?.Desktop};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'right' && testimonialHZRightOffset?.Desktop !== undefined ? `right: ${testimonialHZRightOffset?.Desktop}${testimonialHZRightOffsetUnits?.Desktop};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'top' && testimonialVRTopOffset?.Desktop !== undefined ? `top: ${testimonialVRTopOffset?.Desktop}${testimonialVRTopOffsetUnits?.Desktop};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'bottom' && testimonialVRBottomOffset?.Desktop !== undefined ? `bottom: ${testimonialVRBottomOffset?.Desktop}${testimonialVRBottomOffsetUnits?.Desktop};` : ''}
            ${TestimonialGlobalZIndex?.Desktop ? `z-index: ${TestimonialGlobalZIndex?.Desktop};` : ''}
            ${TestimonialOverflow !== 'default' ? `overflow: ${TestimonialOverflow};` : ''}
        }
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section {
            ${globalDesktopPadding && TestimonialGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && TestimonialGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
            ${TestimonialGlobalBorder ? `border: ${TestimonialGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && TestimonialGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && TestimonialGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${TestimonialGlobalBorderColor ? `border-color: ${TestimonialGlobalBorderColor};` : ''}
            ${TestimonialGlobalBoxShadowCssValue ? `box-shadow: ${TestimonialGlobalBoxShadowCssValue};` : ''}
            ${TestimonialGlobalBgNormalBackgroundType === 'gradient' ? `  
                background: ${TestimonialGlobalBgNormalCustomGradientSwitcher && TestimonialGlobalBgNormalCustomGradientInputValue
                ? TestimonialGlobalBgNormalCustomGradientInputValue
                : TestimonialGlobalBgNormalGradientColor || TestimonialGlobalBgNormalClassicColor
            };
            ` : `
                background: ${TestimonialGlobalBgNormalClassicColor};
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section:hover {
            ${TestimonialGlobalBgHoverBackgroundType === 'gradient' ? `  
                background: ${TestimonialGlobalBgHoverCustomGradientSwitcher && TestimonialGlobalBgHoverCustomGradientInputValue
                ? TestimonialGlobalBgHoverCustomGradientInputValue
                : TestimonialGlobalBgHoverGradientColor || TestimonialGlobalBgHoverClassicColor
            };
            ` : `
                ${TestimonialGlobalBgHoverClassicColor ? `background: ${TestimonialGlobalBgHoverClassicColor};` : ''}
            `} 
            ${TestimonialGlobalBorderHoverColor ? `border-color: ${TestimonialGlobalBorderHoverColor};` : ''}
            ${TestimonialGlobalBoxShadowHoverCssValue ? `box-shadow: ${TestimonialGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .fb-testimonial-image img {
            ${TestimonialImageWidth?.Desktop && TestimonialImageWidthUnits?.Desktop ? `width: ${TestimonialImageWidth?.Desktop}${TestimonialImageWidthUnits?.Desktop};` : ''}
            ${TestimonialImageWidth?.Desktop && TestimonialImageWidthUnits?.Desktop ? `height: ${TestimonialImageWidth?.Desktop}${TestimonialImageWidthUnits?.Desktop};` : ''}
            ${TestimonialImageObjectFit !== 'default' ? `object-fit: ${TestimonialImageObjectFit};` : ''}
            ${testimonialImageDesktopBorderRadiusWidth && TestimonialImageDesktopRadiusWidth?.top ? `border-radius: ${testimonialImageDesktopBorderRadiusWidth};` : ''}
            ${testimonialImageDesktopMargin && TestimonialImageMarginDesktop?.top ? `margin: ${testimonialImageDesktopMargin};` : ''}
            ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
            ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition?.Desktop && TestimonialImageTopPositionUnits?.Desktop ? `${TestimonialImageTopPosition?.Desktop}${TestimonialImageTopPositionUnits?.Desktop}` : '0'};` : ''}
            ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition?.Desktop && TestimonialImageLeftPositionUnits?.Desktop ? `${TestimonialImageLeftPosition?.Desktop}${TestimonialImageLeftPositionUnits?.Desktop}` : '0'};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon {
            ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
            ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition?.Desktop && TestimonialQuoteIconTopPositionUnits?.Desktop ? `${TestimonialQuoteIconTopPosition?.Desktop}${TestimonialQuoteIconTopPositionUnits?.Desktop}` : '0'};` : ''}
            ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition?.Desktop && TestimonialQuoteIconLeftPositionUnits?.Desktop ? `${TestimonialQuoteIconLeftPosition?.Desktop}${TestimonialQuoteIconLeftPositionUnits?.Desktop}` : '0'};` : ''}
            ${testimonialQuoteIconDesktopMargin && TestimonialQuoteIconMarginDesktop?.top ? `margin: ${testimonialQuoteIconDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon svg {
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `width: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `height: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
            fill: ${TestimonialQuoteIconColor};
        }
        .${blockID} .fb-testimonial-quote-icon img {
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `width: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `height: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon:hover svg {
            fill: ${TestimonialQuoteIconHoverColor};
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title,
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title a {
            ${TestimonialTitleGlobalTypoSwitcher?.fontFamily === true && TestimonialTitleGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialTitleGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontSize === true && TestimonialTitleGlobalTypographyData?.fontSize ? `font-size: ${TestimonialTitleGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontWeight === true && TestimonialTitleGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialTitleGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontStyle === true && TestimonialTitleGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialTitleGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textTransform === true && TestimonialTitleGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialTitleGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textDecoration === true && TestimonialTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialTitleGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === true && TestimonialTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === true && TestimonialTitleGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialTitleGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialTitleGlobalTypoSwitcher?.fontFamily === false && TestimonialTitleFontFamily ? `font-family: ${TestimonialTitleFontFamily};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontSize === false && TestimonialTitleFontSize?.Desktop && TestimonialTitleFontSizeUnits?.Desktop ? `font-size: ${TestimonialTitleFontSize?.Desktop}${TestimonialTitleFontSizeUnits?.Desktop};` : '24px'}
            ${TestimonialTitleGlobalTypoSwitcher?.fontWeight === false && TestimonialTitleFontWeight ? `font-weight: ${TestimonialTitleFontWeight};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontStyle === false && TestimonialTitleFontStyle ? `font-style: ${TestimonialTitleFontStyle};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textTransform === false && TestimonialTitleTextTransform ? `text-transform: ${TestimonialTitleTextTransform};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textDecoration === false && TestimonialTitleTextDecoration ? `text-decoration: ${TestimonialTitleTextDecoration};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === false && TestimonialTitleLetterSpacing?.Desktop && TestimonialTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${TestimonialTitleLetterSpacing?.Desktop}${TestimonialTitleLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === false && TestimonialTitleLineHeight?.Desktop && TestimonialTitleLineHeightUnits?.Desktop ? `line-height: ${TestimonialTitleLineHeight?.Desktop}${TestimonialTitleLineHeightUnits?.Desktop};` : ''}
            ${TestimonialTitleColor ? `color: ${TestimonialTitleColor};` : ''}
            ${testimonialTitleDesktopMargin && TestimonialTitleMarginDesktop?.top ? `margin: ${testimonialTitleDesktopMargin};` : ''}
            
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title:hover,
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title a:hover {
            ${TestimonialTitleHoverColor ? `color: ${TestimonialTitleHoverColor};` : ''}
        }
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc,
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a {
            ${TestimonialDescGlobalTypoSwitcher?.fontFamily === true && TestimonialDescGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialDescGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontSize === true && TestimonialDescGlobalTypographyData?.fontSize ? `font-size: ${TestimonialDescGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontWeight === true && TestimonialDescGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialDescGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontStyle === true && TestimonialDescGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialDescGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textTransform === true && TestimonialDescGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialDescGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textDecoration === true && TestimonialDescGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialDescGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === true && TestimonialDescGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialDescGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.lineHeight === true && TestimonialDescGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialDescGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialDescGlobalTypoSwitcher?.fontFamily === false && TestimonialDescFontFamily ? `font-family: ${TestimonialDescFontFamily};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontSize === false && TestimonialDescFontSize?.Desktop && TestimonialDescFontSizeUnits?.Desktop ? `font-size: ${TestimonialDescFontSize?.Desktop}${TestimonialDescFontSizeUnits?.Desktop};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontWeight === false && TestimonialDescFontWeight ? `font-weight: ${TestimonialDescFontWeight};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontStyle === false && TestimonialDescFontStyle ? `font-style: ${TestimonialDescFontStyle};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textTransform === false && TestimonialDescTextTransform ? `text-transform: ${TestimonialDescTextTransform};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textDecoration === false && TestimonialDescTextDecoration ? `text-decoration: ${TestimonialDescTextDecoration};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === false && TestimonialDescLetterSpacing?.Desktop && TestimonialDescLetterSpacingUnits?.Desktop ? `letter-spacing: ${TestimonialDescLetterSpacing?.Desktop}${TestimonialDescLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.lineHeight === false && TestimonialDescLineHeight?.Desktop && TestimonialDescLineHeightUnits?.Desktop ? `line-height: ${TestimonialDescLineHeight?.Desktop}${TestimonialDescLineHeightUnits?.Desktop};` : ''}
            ${TestimonialDescColor ? `color: ${TestimonialDescColor};` : ''}
            ${testimonialDescDesktopMargin && TestimonialDescMarginDesktop?.top ? `margin: ${testimonialDescDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc:hover,
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a:hover {
            ${TestimonialDescHoverColor ? `color: ${TestimonialDescHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user,
        .${blockID} .fb-testimonial-userinfo-container .fb-user a {
            ${TestimonialAuthorGlobalTypoSwitcher?.fontFamily === true && TestimonialAuthorGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialAuthorGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === true && TestimonialAuthorGlobalTypographyData?.fontSize ? `font-size: ${TestimonialAuthorGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontWeight === true && TestimonialAuthorGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialAuthorGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontStyle === true && TestimonialAuthorGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialAuthorGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textTransform === true && TestimonialAuthorGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialAuthorGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textDecoration === true && TestimonialAuthorGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialAuthorGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === true && TestimonialAuthorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialAuthorGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === true && TestimonialAuthorGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialAuthorGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialAuthorGlobalTypoSwitcher?.fontFamily === false && TestimonialAuthorFontFamily ? `font-family: ${TestimonialAuthorFontFamily};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === false && TestimonialAuthorFontSize?.Desktop ? `font-size: ${TestimonialAuthorFontSize?.Desktop}${TestimonialAuthorFontSizeUnits?.Desktop};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontWeight === false && TestimonialAuthorFontWeight ? `font-weight: ${TestimonialAuthorFontWeight};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontStyle === false && TestimonialAuthorFontStyle ? `font-style: ${TestimonialAuthorFontStyle};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textTransform === false && TestimonialAuthorTextTransform ? `text-transform: ${TestimonialAuthorTextTransform};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textDecoration === false && TestimonialAuthorTextDecoration ? `text-decoration: ${TestimonialAuthorTextDecoration};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === false && TestimonialAuthorLetterSpacing?.Desktop ? `letter-spacing: ${TestimonialAuthorLetterSpacing?.Desktop}${TestimonialAuthorLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === false && TestimonialAuthorLineHeight?.Desktop ? `line-height: ${TestimonialAuthorLineHeight?.Desktop}${TestimonialAuthorLineHeightUnits?.Desktop};` : ''}
            
            ${TestimonialAuthorColor ? `color: ${TestimonialAuthorColor};` : ''}
            ${testimonialAuthorDesktopMargin && TestimonialAuthorMarginDesktop?.top ? `margin: ${testimonialAuthorDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userinfo-container .fb-user:hover,
        .${blockID} .fb-testimonial-userinfo-container .fb-user a:hover {
            ${TestimonialAuthorHoverColor ? `color: ${TestimonialAuthorHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation,
        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation a {
            ${TestimonialDesignationGlobalTypoSwitcher?.fontFamily === true && TestimonialDesignationGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialDesignationGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === true && TestimonialDesignationGlobalTypographyData?.fontSize ? `font-size: ${TestimonialDesignationGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontWeight === true && TestimonialDesignationGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialDesignationGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontStyle === true && TestimonialDesignationGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialDesignationGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textTransform === true && TestimonialDesignationGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialDesignationGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textDecoration === true && TestimonialDesignationGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialDesignationGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === true && TestimonialDesignationGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialDesignationGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === true && TestimonialDesignationGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialDesignationGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialDesignationGlobalTypoSwitcher?.fontFamily === false && TestimonialDesignationFontFamily ? `font-family: ${TestimonialDesignationFontFamily};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === false && TestimonialDesignationFontSize?.Desktop ? `font-size: ${TestimonialDesignationFontSize?.Desktop}${TestimonialDesignationFontSizeUnits?.Desktop};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontWeight === false && TestimonialDesignationFontWeight ? `font-weight: ${TestimonialDesignationFontWeight};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontStyle === false && TestimonialDesignationFontStyle ? `font-style: ${TestimonialDesignationFontStyle};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textTransform === false && TestimonialDesignationTextTransform ? `text-transform: ${TestimonialDesignationTextTransform};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textDecoration === false && TestimonialDesignationTextDecoration ? `text-decoration: ${TestimonialDesignationTextDecoration};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === false && TestimonialDesignationLetterSpacing?.Desktop ? `letter-spacing: ${TestimonialDesignationLetterSpacing?.Desktop}${TestimonialDesignationLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === false && TestimonialDesignationLineHeight?.Desktop ? `line-height: ${TestimonialDesignationLineHeight?.Desktop}${TestimonialDesignationLineHeightUnits?.Desktop};` : ''}
            
            ${TestimonialDesignationColor ? `color: ${TestimonialDesignationColor};` : ''}
            ${testimonialDesignationDesktopMargin && TestimonialDesignationMarginDesktop?.top ? `margin: ${testimonialDesignationDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation:hover {
            ${TestimonialDesignationHoverColor ? `color: ${TestimonialDesignationHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-rating {
            display: flex;
            align-items: center;
            justify-content: ${TestimonialRatingIconAlign};
            gap: ${TestimonialRatingIconGap?.Desktop}${TestimonialRatingIconGapUnits?.Desktop};
            ${testimonialRatingIconDesktopMargin && TestimonialRatingIconMarginDesktop?.top ? `margin: ${testimonialRatingIconDesktopMargin};` : ''}
        }

        .${blockID} .fb-testimonial-rating-icon svg {
            width: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
            height: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
            fill: ${TestimonialRatingIconColor};
        }
        .${blockID} .fb-testimonial-rating-icon img {
            width: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
            height: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
        }
        .${blockID} .fb-testimonial-rating-icon:hover svg {
            fill: ${TestimonialRatingIconHoverColor};
        }

        .${blockID} .fb-testimonial-author-container {
            ${TestimonialPresetStyle === "preset-5" ?
            `
                display: flex;
                align-items: center;
                justify-content: space-between !important;
                ` : ''}

        }
        .${blockID} .fb-user-desc {
                ${TestimonialPresetStyle === "preset-5" ?
            `
                padding-top: 24px;
                ` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-testimonial-main-wrapper {
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'left' && testimonialHZLeftOffset?.Tablet !== undefined ? `left: ${testimonialHZLeftOffset?.Tablet}${testimonialHZLeftOffsetUnits?.Tablet};` : ''}
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'right' && testimonialHZRightOffset?.Tablet !== undefined ? `right: ${testimonialHZRightOffset?.Tablet}${testimonialHZRightOffsetUnits?.Tablet};` : ''}
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'top' && testimonialVRTopOffset?.Tablet !== undefined ? `top: ${testimonialVRTopOffset?.Tablet}${testimonialVRTopOffsetUnits?.Tablet};` : ''}
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'bottom' && testimonialVRBottomOffset?.Tablet !== undefined ? `bottom: ${testimonialVRBottomOffset?.Tablet}${testimonialVRBottomOffsetUnits?.Tablet};` : ''}
                ${TestimonialGlobalZIndex?.Tablet ? `z-index: ${TestimonialGlobalZIndex?.Tablet};` : ''}
            }
            .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                ${globalTabletPadding && TestimonialGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && TestimonialGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && TestimonialGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && TestimonialGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon {
                ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition?.Tablet && TestimonialQuoteIconTopPositionUnits?.Tablet ? `${TestimonialQuoteIconTopPosition?.Tablet}${TestimonialQuoteIconTopPositionUnits?.Tablet}` : '0'};` : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition?.Tablet && TestimonialQuoteIconLeftPositionUnits?.Tablet ? `${TestimonialQuoteIconLeftPosition?.Tablet}${TestimonialQuoteIconLeftPositionUnits?.Tablet}` : '0'};` : ''}
                ${testimonialQuoteIconTabletMargin && TestimonialQuoteIconMarginTablet?.top ? `margin: ${testimonialQuoteIconTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon svg {
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `width: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `height: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon img {
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `width: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `height: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-testimonial-rating {
                gap: ${TestimonialRatingIconGap?.Tablet}${TestimonialRatingIconGapUnits?.Tablet};
                ${testimonialRatingIconTabletMargin && TestimonialRatingIconMarginTablet?.top ? `margin: ${testimonialRatingIconTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-rating-icon svg {
                width: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
                height: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
            }
            .${blockID} .fb-testimonial-rating-icon img {
                width: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
                height: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
            }
            .${blockID} .fb-testimonial-image img {
                ${TestimonialImageWidth?.Tablet && TestimonialImageWidthUnits?.Tablet ? `width: ${TestimonialImageWidth?.Tablet}${TestimonialImageWidthUnits?.Tablet};` : ''}
                ${TestimonialImageWidth?.Tablet && TestimonialImageWidthUnits?.Tablet ? `height: ${TestimonialImageWidth?.Tablet}${TestimonialImageWidthUnits?.Tablet};` : ''}
                ${testimonialImageTabletBorderRadiusWidth && TestimonialImageTabRadiusWidth?.top ? `border-radius: ${testimonialImageTabletBorderRadiusWidth};` : ''}
                ${testimonialImageTabletMargin && TestimonialImageMarginTablet?.top ? `margin: ${testimonialImageTabletMargin};` : ''}
                ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition?.Tablet && TestimonialImageTopPositionUnits?.Tablet ? `${TestimonialImageTopPosition?.Tablet}${TestimonialImageTopPositionUnits?.Tablet}` : '0'};` : ''}
                ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition?.Tablet && TestimonialImageLeftPositionUnits?.Tablet ? `${TestimonialImageLeftPosition?.Tablet}${TestimonialImageLeftPositionUnits?.Tablet}` : '0'};` : ''}
            }
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title,
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title a{
                ${TestimonialTitleGlobalTypoSwitcher?.fontSize === false && TestimonialTitleFontSize?.Tablet && TestimonialTitleFontSizeUnits?.Tablet ? `font-size: ${TestimonialTitleFontSize?.Tablet}${TestimonialTitleFontSizeUnits?.Tablet};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === false && TestimonialTitleLetterSpacing?.Tablet && TestimonialTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${TestimonialTitleLetterSpacing?.Tablet}${TestimonialTitleLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === false && TestimonialTitleLineHeight?.Tablet && TestimonialTitleLineHeightUnits?.Tablet ? `line-height: ${TestimonialTitleLineHeight?.Tablet}${TestimonialTitleLineHeightUnits?.Tablet};` : ''}
                ${testimonialTitleTabletMargin && TestimonialTitleMarginTablet.top ? `margin: ${testimonialTitleTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc,
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a {
                ${TestimonialDescGlobalTypoSwitcher?.fontSize === false && TestimonialDescFontSize?.Tablet && TestimonialDescFontSizeUnits?.Tablet ? `font-size: ${TestimonialDescFontSize?.Tablet}${TestimonialDescFontSizeUnits?.Tablet};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === false && TestimonialDescLetterSpacing?.Tablet && TestimonialDescLetterSpacingUnits?.Tablet ? `letter-spacing: ${TestimonialDescLetterSpacing?.Tablet}${TestimonialDescLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.lineHeight === false && TestimonialDescLineHeight?.Tablet && TestimonialDescLineHeightUnits?.Tablet ? `line-height: ${TestimonialDescLineHeight?.Tablet}${TestimonialDescLineHeightUnits?.Tablet};` : ''}
                ${testimonialDescTabletMargin && TestimonialDescMarginTablet?.top ? `margin: ${testimonialDescTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user,
            .${blockID} .fb-testimonial-userinfo-container .fb-user a {
                ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === false && TestimonialAuthorFontSize?.Tablet ? `font-size: ${TestimonialAuthorFontSize?.Tablet}${TestimonialAuthorFontSizeUnits?.Tablet};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === false && TestimonialAuthorLetterSpacing?.Tablet ? `letter-spacing: ${TestimonialAuthorLetterSpacing?.Tablet}${TestimonialAuthorLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === false && TestimonialAuthorLineHeight?.Tablet ? `line-height: ${TestimonialAuthorLineHeight?.Tablet}${TestimonialAuthorLineHeightUnits?.Tablet};` : ''}
                
                ${testimonialAuthorTabletMargin && TestimonialAuthorMarginTablet.top ? `margin: ${testimonialAuthorTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation a {
                ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === false && TestimonialDesignationFontSize?.Tablet ? `font-size: ${TestimonialDesignationFontSize?.Tablet}${TestimonialDesignationFontSizeUnits?.Tablet};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === false && TestimonialDesignationLetterSpacing?.Tablet ? `letter-spacing: ${TestimonialDesignationLetterSpacing?.Tablet}${TestimonialDesignationLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === false && TestimonialDesignationLineHeight?.Tablet ? `line-height: ${TestimonialDesignationLineHeight?.Tablet}${TestimonialDesignationLineHeightUnits?.Tablet};` : ''}
                
                ${testimonialDesignationTabletMargin && TestimonialDesignationMarginTablet?.top ? `margin: ${testimonialDesignationTabletMargin};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .${blockID}.fb-testimonial-main-wrapper {
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'left' && testimonialHZLeftOffset?.Mobile !== undefined ? `left: ${testimonialHZLeftOffset?.Mobile}${testimonialHZLeftOffsetUnits?.Mobile};` : ''}
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'right' && testimonialHZRightOffset?.Mobile !== undefined ? `right: ${testimonialHZRightOffset?.Mobile}${testimonialHZRightOffsetUnits?.Mobile};` : ''}
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'top' && testimonialVRTopOffset?.Mobile !== undefined ? `top: ${testimonialVRTopOffset?.Mobile}${testimonialVRTopOffsetUnits?.Mobile};` : ''}
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'bottom' && testimonialVRBottomOffset?.Mobile !== undefined ? `bottom: ${testimonialVRBottomOffset?.Mobile}${testimonialVRBottomOffsetUnits?.Mobile};` : ''} 
                ${TestimonialGlobalZIndex?.Mobile ? `z-index: ${TestimonialGlobalZIndex?.Mobile};` : ''} 
            }
            .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                ${globalMobilePadding && TestimonialGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && TestimonialGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && TestimonialGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && TestimonialGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-testimonial-rating {
                gap: ${TestimonialRatingIconGap?.Mobile}${TestimonialRatingIconGapUnits?.Mobile};
                ${testimonialRatingIconMobileMargin && TestimonialRatingIconMarginMobile?.top ? `margin: ${testimonialRatingIconMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-rating-icon svg {
                width: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
                height: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-testimonial-rating-icon img {
                width: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
                height: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-testimonial-quote-icon {
                ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition?.Mobile && TestimonialQuoteIconTopPositionUnits?.Mobile ? `${TestimonialQuoteIconTopPosition?.Mobile}${TestimonialQuoteIconTopPositionUnits?.Mobile}` : '0'};` : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition?.Mobile && TestimonialQuoteIconLeftPositionUnits?.Mobile ? `${TestimonialQuoteIconLeftPosition?.Mobile}${TestimonialQuoteIconLeftPositionUnits?.Mobile}` : '0'};` : ''}
                ${testimonialQuoteIconMobileMargin && TestimonialQuoteIconMarginMobile?.top ? `margin: ${testimonialQuoteIconMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon svg {
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `width: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `height: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon img {
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `width: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `height: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-testimonial-image img {
                ${TestimonialImageWidth?.Mobile && TestimonialImageWidthUnits?.Mobile ? `width: ${TestimonialImageWidth?.Mobile}${TestimonialImageWidthUnits?.Mobile};` : ''}
                ${TestimonialImageWidth?.Mobile && TestimonialImageWidthUnits?.Mobile ? `height: ${TestimonialImageWidth?.Mobile}${TestimonialImageWidthUnits?.Mobile};` : ''}
                ${testimonialImageMobileBorderRadiusWidth && TestimonialImageMobileRadiusWidth?.top ? `border-radius: ${testimonialImageMobileBorderRadiusWidth};` : ''}
                ${testimonialImageMobileMargin && TestimonialImageMarginMobile?.top ? `margin: ${testimonialImageMobileMargin};` : ''}
                ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition?.Mobile && TestimonialImageTopPositionUnits?.Mobile ? `${TestimonialImageTopPosition?.Mobile}${TestimonialImageTopPositionUnits?.Mobile}` : '0'};` : ''}
                ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition?.Mobile && TestimonialImageLeftPositionUnits?.Mobile ? `${TestimonialImageLeftPosition?.Mobile}${TestimonialImageLeftPositionUnits?.Mobile}` : '0'};` : ''}
            }
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title,
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title a {
                ${TestimonialTitleGlobalTypoSwitcher?.fontSize === false && TestimonialTitleFontSize?.Mobile && TestimonialTitleFontSizeUnits?.Mobile ? `font-size: ${TestimonialTitleFontSize?.Mobile}${TestimonialTitleFontSizeUnits?.Mobile};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === false && TestimonialTitleLetterSpacing?.Mobile && TestimonialTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${TestimonialTitleLetterSpacing?.Mobile}${TestimonialTitleLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === false && TestimonialTitleLineHeight?.Mobile && TestimonialTitleLineHeightUnits?.Mobile ? `line-height: ${TestimonialTitleLineHeight?.Mobile}${TestimonialTitleLineHeightUnits?.Mobile};` : ''}
                ${testimonialTitleMobileMargin && TestimonialTitleMarginMobile?.top ? `margin: ${testimonialTitleMobileMargin};` : ''}

            }
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc,
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a {
                ${TestimonialDescGlobalTypoSwitcher?.fontSize === false && TestimonialDescFontSize?.Mobile && TestimonialDescFontSizeUnits?.Mobile ? `font-size: ${TestimonialDescFontSize?.Mobile}${TestimonialDescFontSizeUnits?.Mobile};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === false && TestimonialDescLetterSpacing?.Mobile && TestimonialDescLetterSpacingUnits?.Mobile ? `letter-spacing: ${TestimonialDescLetterSpacing?.Mobile}${TestimonialDescLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.lineHeight === false && TestimonialDescLineHeight?.Mobile && TestimonialDescLineHeightUnits?.Mobile ? `line-height: ${TestimonialDescLineHeight?.Mobile}${TestimonialDescLineHeightUnits?.Mobile};` : ''}
                ${testimonialDescMobileMargin && TestimonialDescMarginMobile?.top ? `margin: ${testimonialDescMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user
            .${blockID} .fb-testimonial-userinfo-container .fb-user a {
                ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === false && TestimonialAuthorFontSize?.Mobile ? `font-size: ${TestimonialAuthorFontSize?.Mobile}${TestimonialAuthorFontSizeUnits?.Mobile};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === false && TestimonialAuthorLetterSpacing?.Mobile ? `letter-spacing: ${TestimonialAuthorLetterSpacing?.Mobile}${TestimonialAuthorLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === false && TestimonialAuthorLineHeight?.Mobile ? `line-height: ${TestimonialAuthorLineHeight?.Mobile}${TestimonialAuthorLineHeightUnits?.Mobile};` : ''}
                
                ${testimonialAuthorMobileMargin && TestimonialAuthorMarginMobile?.top ? `margin: ${testimonialAuthorMobileMargin};` : ''} 
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation,
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation a {
                ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === false && TestimonialDesignationFontSize?.Mobile ? `font-size: ${TestimonialDesignationFontSize?.Mobile}${TestimonialDesignationFontSizeUnits?.Mobile};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === false && TestimonialDesignationLetterSpacing?.Mobile ? `letter-spacing: ${TestimonialDesignationLetterSpacing?.Mobile}${TestimonialDesignationLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === false && TestimonialDesignationLineHeight?.Mobile ? `line-height: ${TestimonialDesignationLineHeight?.Mobile}${TestimonialDesignationLineHeightUnits?.Mobile};` : ''}
                
                ${testimonialDesignationMobileMargin && TestimonialDesignationMarginMobile?.top ? `margin: ${testimonialDesignationMobileMargin};` : ''}
            }  
        }


    `;
    /** End All Block Style */

    // Custom CSS
    const customCss = getCustomCss(testimonialCustomCSS, `.${blockID}`);

    return `${testimonialCSS} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateTestimonialStyle;
