/**
 * Features List Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateFeaturesListStyle = (attributes) => {
    const { 
        blockID,
        FeatureTag,
        FeatureListDirection,
        FeatureListDirectionWrap,
        FeatureListGap,
        FeatureListGapUnits,

        /** Icon Style */
        FeatureIconColor,
        FeatureIconHoverColor,

        FeatureIconNormalBackgroundType,
        FeatureIconNormalClassicColor,
        FeatureIconNormalGradientColor,
        FeatureIconNormalCustomGradientSwitcher,
        FeatureIconNormalCustomGradientInputValue,

        FeatureIconHoverBackgroundType,
        FeatureIconHoverClassicColor,
        FeatureIconHoverGradientColor,
        FeatureIconHoverCustomGradientSwitcher,
        FeatureIconHoverCustomGradientInputValue,

        FeatureIconPaddingUnits,
        FeatureIconPaddingDesktop,
        FeatureIconPaddingTablet,
        FeatureIconPaddingMobile,

        FeatureIconMarginUnits,
        FeatureIconMarginDesktop,
        FeatureIconMarginTablet,
        FeatureIconMarginMobile,

        FeatureIconBorder,
        FeatureIconBorderColor,
        FeatureIconBorderHoverColor,
        FeatureIconBorderUnits,
        FeatureIconBorderDesktop,
        FeatureIconBorderTablet,
        FeatureIconBorderMobile,

        FeatureIconBorderRadiusUnits,
        FeatureIconBorderRadiusDesktop,
        FeatureIconBorderRadiusTablet,
        FeatureIconBorderRadiusMobile,

        FeatureIconBoxShadowCssValue,
        FeatureIconBoxShadowHoverCssValue,

        FeatureIconSize,
        FeatureIconSizeUnits,
        /** End Icon Style */

        FeatureTitleGlobalTypoSwitcher,
        FeatureTitleGlobalTypographyData,
        FeatureTitleFontFamily,
        FeatureTitleFontSize,
        FeatureTitleFontSizeUnits,
        FeatureTitleFontWeight,
        FeatureTitleFontStyle,
        FeatureTitleTextTransform,
        FeatureTitleTextDecoration,
        FeatureTitleLetterSpacing,
        FeatureTitleLetterSpacingUnits,
        FeatureTitleLineHeight,
        FeatureTitleLineHeightUnits,

        FeatureTitleColor,
        FeatureTitleHoverColor,
        FeatureTitleMarginUnits,
        FeatureTitleMarginDesktop,
        FeatureTitleMarginTablet,
        FeatureTitleMarginMobile,
        /** End Title Style */

        /** Description Style */
        FeatureDescGlobalTypoSwitcher,
        FeatureDescGlobalTypographyData,
        FeatureDescFontFamily,
        FeatureDescFontSize,
        FeatureDescFontSizeUnits,
        FeatureDescFontWeight,
        FeatureDescFontStyle,
        FeatureDescTextTransform,
        FeatureDescTextDecoration,
        FeatureDescLetterSpacing,
        FeatureDescLetterSpacingUnits,
        FeatureDescLineHeight,
        FeatureDescLineHeightUnits,

        FeatureDescColor,
        FeatureDescHoverColor,
        FeatureDescMarginUnits,
        FeatureDescMarginDesktop,
        FeatureDescMarginTablet,
        FeatureDescMarginMobile,
        /** End Description Style */

        FeatureSingleItemNormalBackgroundType,
        FeatureSingleItemNormalClassicColor,
        FeatureSingleItemNormalGradientColor,
        FeatureSingleItemNormalCustomGradientSwitcher,
        FeatureSingleItemNormalCustomGradientInputValue,
        FeatureSingleItemHoverBackgroundType,
        FeatureSingleItemHoverClassicColor,
        FeatureSingleItemHoverGradientColor,
        FeatureSingleItemHoverCustomGradientSwitcher,
        FeatureSingleItemHoverCustomGradientInputValue, 

        FeatureSingleItemPaddingUnits,
        FeatureSingleItemPaddingDesktop,
        FeatureSingleItemPaddingTablet,
        FeatureSingleItemPaddingMobile,

        FeatureSingleItemBorder,
        FeatureSingleItemBorderColor,
        FeatureSingleItemBorderHoverColor,

        FeatureSingleItemBorderUnits,
        FeatureSingleItemBorderDesktop,
        FeatureSingleItemBorderTablet,
        FeatureSingleItemBorderMobile,
        
        FeatureSingleItemBorderRadiusUnits,
        FeatureSingleItemBorderRadiusDesktop,
        FeatureSingleItemBorderRadiusTablet,
        FeatureSingleItemBorderRadiusMobile,
        FeatureSingleItemBoxShadowCssValue,
        FeatureSingleItemBoxShadowHoverCssValue,
        /** End Single Item */

        /** Global Style */
        FeatureGlobalZIndex,
        featuresListOverflow,
        FeatureGlobalPaddingUnits,
        FeatureGlobalPaddingDesktop,
        FeatureGlobalPaddingTablet,
        FeatureGlobalPaddingMobile,

        FeatureGlobalMarginUnits,
        FeatureGlobalMarginDesktop,
        FeatureGlobalMarginTablet,
        FeatureGlobalMarginMobile,

        FeatureGlobalNormalBackgroundType,
        FeatureGlobalNormalClassicColor,
        FeatureGlobalNormalGradientColor,
        FeatureGlobalNormalCustomGradientSwitcher,
        FeatureGlobalNormalCustomGradientInputValue,

        FeatureGlobalNormalBackgroundImageUrl,
        FeatureGlobalNormalBackgroundImagePosition,
        FeatureGlobalNormalBackgroundImageAttachment,
        FeatureGlobalNormalBackgroundImageRepeat,
        FeatureGlobalNormalBackgroundImageSize,

        FeatureGlobalHoverBackgroundType,
        FeatureGlobalHoverClassicColor,
        FeatureGlobalHoverGradientColor,
        FeatureGlobalHoverCustomGradientSwitcher,
        FeatureGlobalHoverCustomGradientInputValue,

        FeatureGlobalHoverBackgroundImageUrl,
        FeatureGlobalHoverBackgroundImagePosition,
        FeatureGlobalHoverBackgroundImageAttachment,
        FeatureGlobalHoverBackgroundImageRepeat,
        FeatureGlobalHoverBackgroundImageSize,

        FeatureGlobalBorder,
        FeatureGlobalBorderColor,
        FeatureGlobalBorderHoverColor,

        FeatureGlobalBorderUnits,
        FeatureGlobalBorderDesktop,
        FeatureGlobalBorderTablet,
        FeatureGlobalBorderMobile,

        FeatureGlobalBorderRadiusUnits,
        FeatureGlobalBorderRadiusDesktop,
        FeatureGlobalBorderRadiusTablet,
        FeatureGlobalBorderRadiusMobile,
        FeatureGlobalBoxShadowCssValue,
        FeatureGlobalBoxShadowHoverCssValue,
        /** End Global Style */

        FeatureIconImageUnits,
        FeatureIconImageWidth,
        FeatureIconImageHeight,

        FeatureIconImageBorder,
        FeatureIconImageBorderColor,
        FeatureIconImageBorderHoverColor,

        FeatureIconImageBorderUnits,
        FeatureIconImageBorderDesktop,
        FeatureIconImageBorderTablet,
        FeatureIconImageBorderMobile,

        FeatureIconImageBorderRadiusUnits,
        FeatureIconImageBorderRadiusDesktop,
        FeatureIconImageBorderRadiusTablet,
        FeatureIconImageBorderRadiusMobile,

        featuresListCustomCSS,
        
        featuresListPositionType,
        featuresListHZOrientationType,
        featuresListVROrientationType,
        featuresListHZLeftOffset,
        featuresListHZLeftOffsetUnits,
        featuresListHZRightOffset,
        featuresListHZRightOffsetUnits,
        featuresListVRTopOffset,
        featuresListVRTopOffsetUnits,
        featuresListVRBottomOffset,
        featuresListVRBottomOffsetUnits,
    } = attributes;

    //Icon Padding
    const featureIconDesktopPadding    = `${FeatureIconPaddingDesktop?.top}${FeatureIconPaddingUnits?.Desktop} ${FeatureIconPaddingDesktop?.right}${FeatureIconPaddingUnits?.Desktop} ${FeatureIconPaddingDesktop?.bottom}${FeatureIconPaddingUnits?.Desktop} ${FeatureIconPaddingDesktop?.left}${FeatureIconPaddingUnits?.Desktop}`;
	const featureIconTabletPadding     = `${FeatureIconPaddingTablet?.top}${FeatureIconPaddingUnits?.Tablet} ${FeatureIconPaddingTablet?.right}${FeatureIconPaddingUnits?.Tablet} ${FeatureIconPaddingTablet?.bottom}${FeatureIconPaddingUnits?.Tablet} ${FeatureIconPaddingTablet?.left}${FeatureIconPaddingUnits?.Tablet}`;
	const featureIconMobilePadding     = `${FeatureIconPaddingMobile?.top}${FeatureIconPaddingUnits?.Mobile} ${FeatureIconPaddingMobile?.right}${FeatureIconPaddingUnits?.Mobile} ${FeatureIconPaddingMobile?.bottom}${FeatureIconPaddingUnits?.Mobile} ${FeatureIconPaddingMobile?.left}${FeatureIconPaddingUnits?.Mobile}`;

    //Icon Margin
    const featureIconDesktopMargin = `${FeatureIconMarginDesktop?.top}${FeatureIconMarginUnits?.Desktop} ${FeatureIconMarginDesktop?.right}${FeatureIconMarginUnits?.Desktop} ${FeatureIconMarginDesktop?.bottom}${FeatureIconMarginUnits?.Desktop} ${FeatureIconMarginDesktop?.left}${FeatureIconMarginUnits?.Desktop}`;
	const featureIconTabletMargin = `${FeatureIconMarginTablet?.top}${FeatureIconMarginUnits?.Tablet} ${FeatureIconMarginTablet?.right}${FeatureIconMarginUnits?.Tablet} ${FeatureIconMarginTablet?.bottom}${FeatureIconMarginUnits?.Tablet} ${FeatureIconMarginTablet?.left}${FeatureIconMarginUnits?.Tablet}`;
	const featureIconMobileMargin = `${FeatureIconMarginMobile?.top}${FeatureIconMarginUnits?.Mobile} ${FeatureIconMarginMobile?.right}${FeatureIconMarginUnits?.Mobile} ${FeatureIconMarginMobile?.bottom}${FeatureIconMarginUnits?.Mobile} ${FeatureIconMarginMobile?.left}${FeatureIconMarginUnits?.Mobile}`;

    //Icon Border
    const featureIconDesktopBorderWidth = `${FeatureIconBorderDesktop?.top}${FeatureIconBorderUnits?.Desktop} ${FeatureIconBorderDesktop?.right}${FeatureIconBorderUnits?.Desktop} ${FeatureIconBorderDesktop?.bottom}${FeatureIconBorderUnits?.Desktop} ${FeatureIconBorderDesktop?.left}${FeatureIconBorderUnits?.Desktop}`;
	const featureIconTabletBorderWidth = `${FeatureIconBorderTablet?.top}${FeatureIconBorderUnits?.Tablet} ${FeatureIconBorderTablet?.right}${FeatureIconBorderUnits?.Tablet} ${FeatureIconBorderTablet?.bottom}${FeatureIconBorderUnits?.Tablet} ${FeatureIconBorderTablet?.left}${FeatureIconBorderUnits?.Tablet}`;
	const featureIconMobileBorderWidth = `${FeatureIconBorderMobile?.top}${FeatureIconBorderUnits?.Mobile} ${FeatureIconBorderMobile?.right}${FeatureIconBorderUnits?.Mobile} ${FeatureIconBorderMobile?.bottom}${FeatureIconBorderUnits?.Mobile} ${FeatureIconBorderMobile?.left}${FeatureIconBorderUnits?.Mobile}`;

    //Icon Border Radius
    const featureIconDesktopBorderRadiusWidth = `${FeatureIconBorderRadiusDesktop?.top}${FeatureIconBorderRadiusUnits?.Desktop} ${FeatureIconBorderRadiusDesktop?.right}${FeatureIconBorderRadiusUnits?.Desktop} ${FeatureIconBorderRadiusDesktop?.bottom}${FeatureIconBorderRadiusUnits?.Desktop} ${FeatureIconBorderRadiusDesktop?.left}${FeatureIconBorderRadiusUnits?.Desktop}`;
	const featureIconTabletBorderRadiusWidth = `${FeatureIconBorderRadiusTablet?.top}${FeatureIconBorderRadiusUnits?.Tablet} ${FeatureIconBorderRadiusTablet?.right}${FeatureIconBorderRadiusUnits?.Tablet} ${FeatureIconBorderRadiusTablet?.bottom}${FeatureIconBorderRadiusUnits?.Tablet} ${FeatureIconBorderRadiusTablet?.left}${FeatureIconBorderRadiusUnits?.Tablet}`;
	const featureIconMobileBorderRadiusWidth = `${FeatureIconBorderRadiusMobile?.top}${FeatureIconBorderRadiusUnits?.Mobile} ${FeatureIconBorderRadiusMobile?.right}${FeatureIconBorderRadiusUnits?.Mobile} ${FeatureIconBorderRadiusMobile?.bottom}${FeatureIconBorderRadiusUnits?.Mobile} ${FeatureIconBorderRadiusMobile?.left}${FeatureIconBorderRadiusUnits?.Mobile}`;

    //Single Item Padding
    const singleItemDesktopPadding    = `${FeatureSingleItemPaddingDesktop?.top}${FeatureSingleItemPaddingUnits?.Desktop} ${FeatureSingleItemPaddingDesktop?.right}${FeatureSingleItemPaddingUnits?.Desktop} ${FeatureSingleItemPaddingDesktop?.bottom}${FeatureSingleItemPaddingUnits?.Desktop} ${FeatureSingleItemPaddingDesktop?.left}${FeatureSingleItemPaddingUnits?.Desktop}`;
	const singleItemTabletPadding     = `${FeatureSingleItemPaddingTablet?.top}${FeatureSingleItemPaddingUnits?.Tablet} ${FeatureSingleItemPaddingTablet?.right}${FeatureSingleItemPaddingUnits?.Tablet} ${FeatureSingleItemPaddingTablet?.bottom}${FeatureSingleItemPaddingUnits?.Tablet} ${FeatureSingleItemPaddingTablet?.left}${FeatureSingleItemPaddingUnits?.Tablet}`;
	const singleItemMobilePadding     = `${FeatureSingleItemPaddingMobile?.top}${FeatureSingleItemPaddingUnits?.Mobile} ${FeatureSingleItemPaddingMobile?.right}${FeatureSingleItemPaddingUnits?.Mobile} ${FeatureSingleItemPaddingMobile?.bottom}${FeatureSingleItemPaddingUnits?.Mobile} ${FeatureSingleItemPaddingMobile?.left}${FeatureSingleItemPaddingUnits?.Mobile}`;

    //Single Item Border
    const singleItemDesktopBorderWidth = `${FeatureSingleItemBorderDesktop?.top}${FeatureSingleItemBorderUnits?.Desktop} ${FeatureSingleItemBorderDesktop?.right}${FeatureSingleItemBorderUnits?.Desktop} ${FeatureSingleItemBorderDesktop?.bottom}${FeatureSingleItemBorderUnits?.Desktop} ${FeatureSingleItemBorderDesktop?.left}${FeatureSingleItemBorderUnits?.Desktop}`;
	const singleItemTabletBorderWidth = `${FeatureSingleItemBorderTablet?.top}${FeatureSingleItemBorderUnits?.Tablet} ${FeatureSingleItemBorderTablet?.right}${FeatureSingleItemBorderUnits?.Tablet} ${FeatureSingleItemBorderTablet?.bottom}${FeatureSingleItemBorderUnits?.Tablet} ${FeatureSingleItemBorderTablet?.left}${FeatureSingleItemBorderUnits?.Tablet}`;
	const singleItemMobileBorderWidth = `${FeatureSingleItemBorderMobile?.top}${FeatureSingleItemBorderUnits?.Mobile} ${FeatureSingleItemBorderMobile?.right}${FeatureSingleItemBorderUnits?.Mobile} ${FeatureSingleItemBorderMobile?.bottom}${FeatureSingleItemBorderUnits?.Mobile} ${FeatureSingleItemBorderMobile?.left}${FeatureSingleItemBorderUnits?.Mobile}`;

    //Single Item Border Radius
    const singleItemDesktopBorderRadiusWidth = `${FeatureSingleItemBorderRadiusDesktop?.top}${FeatureSingleItemBorderRadiusUnits?.Desktop} ${FeatureSingleItemBorderRadiusDesktop?.right}${FeatureSingleItemBorderRadiusUnits?.Desktop} ${FeatureSingleItemBorderRadiusDesktop?.bottom}${FeatureSingleItemBorderRadiusUnits?.Desktop} ${FeatureSingleItemBorderRadiusDesktop?.left}${FeatureSingleItemBorderRadiusUnits?.Desktop}`;
	const singleItemTabletBorderRadiusWidth = `${FeatureSingleItemBorderRadiusTablet?.top}${FeatureSingleItemBorderRadiusUnits?.Tablet} ${FeatureSingleItemBorderRadiusTablet?.right}${FeatureSingleItemBorderRadiusUnits?.Tablet} ${FeatureSingleItemBorderRadiusTablet?.bottom}${FeatureSingleItemBorderRadiusUnits?.Tablet} ${FeatureSingleItemBorderRadiusTablet?.left}${FeatureSingleItemBorderRadiusUnits?.Tablet}`;
	const singleItemMobileBorderRadiusWidth = `${FeatureSingleItemBorderRadiusMobile?.top}${FeatureSingleItemBorderRadiusUnits?.Mobile} ${FeatureSingleItemBorderRadiusMobile?.right}${FeatureSingleItemBorderRadiusUnits?.Mobile} ${FeatureSingleItemBorderRadiusMobile?.bottom}${FeatureSingleItemBorderRadiusUnits?.Mobile} ${FeatureSingleItemBorderRadiusMobile?.left}${FeatureSingleItemBorderRadiusUnits?.Mobile}`;

    //Global Padding
    const globalDesktopPadding    = `${FeatureGlobalPaddingDesktop?.top}${FeatureGlobalPaddingUnits?.Desktop} ${FeatureGlobalPaddingDesktop?.right}${FeatureGlobalPaddingUnits?.Desktop} ${FeatureGlobalPaddingDesktop?.bottom}${FeatureGlobalPaddingUnits?.Desktop} ${FeatureGlobalPaddingDesktop?.left}${FeatureGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding     = `${FeatureGlobalPaddingTablet?.top}${FeatureGlobalPaddingUnits?.Tablet} ${FeatureGlobalPaddingTablet?.right}${FeatureGlobalPaddingUnits?.Tablet} ${FeatureGlobalPaddingTablet?.bottom}${FeatureGlobalPaddingUnits?.Tablet} ${FeatureGlobalPaddingTablet?.left}${FeatureGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding     = `${FeatureGlobalPaddingMobile?.top}${FeatureGlobalPaddingUnits?.Mobile} ${FeatureGlobalPaddingMobile?.right}${FeatureGlobalPaddingUnits?.Mobile} ${FeatureGlobalPaddingMobile?.bottom}${FeatureGlobalPaddingUnits?.Mobile} ${FeatureGlobalPaddingMobile?.left}${FeatureGlobalPaddingUnits?.Mobile}`;

    //Global Margin
    const globalDesktopMargin = `${FeatureGlobalMarginDesktop?.top}${FeatureGlobalMarginUnits?.Desktop} ${FeatureGlobalMarginDesktop?.right}${FeatureGlobalMarginUnits?.Desktop} ${FeatureGlobalMarginDesktop?.bottom}${FeatureGlobalMarginUnits?.Desktop} ${FeatureGlobalMarginDesktop?.left}${FeatureGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${FeatureGlobalMarginTablet?.top}${FeatureGlobalMarginUnits?.Tablet} ${FeatureGlobalMarginTablet?.right}${FeatureGlobalMarginUnits?.Tablet} ${FeatureGlobalMarginTablet?.bottom}${FeatureGlobalMarginUnits?.Tablet} ${FeatureGlobalMarginTablet?.left}${FeatureGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${FeatureGlobalMarginMobile?.top}${FeatureGlobalMarginUnits?.Mobile} ${FeatureGlobalMarginMobile?.right}${FeatureGlobalMarginUnits?.Mobile} ${FeatureGlobalMarginMobile?.bottom}${FeatureGlobalMarginUnits?.Mobile} ${FeatureGlobalMarginMobile?.left}${FeatureGlobalMarginUnits?.Mobile}`;

    //Global Border Radius
    const globalDesktopBorderRadiusWidth = `${FeatureGlobalBorderRadiusDesktop?.top}${FeatureGlobalBorderRadiusUnits?.Desktop} ${FeatureGlobalBorderRadiusDesktop?.right}${FeatureGlobalBorderRadiusUnits?.Desktop} ${FeatureGlobalBorderRadiusDesktop?.bottom}${FeatureGlobalBorderRadiusUnits?.Desktop} ${FeatureGlobalBorderRadiusDesktop?.left}${FeatureGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${FeatureGlobalBorderRadiusTablet?.top}${FeatureGlobalBorderRadiusUnits?.Tablet} ${FeatureGlobalBorderRadiusTablet?.right}${FeatureGlobalBorderRadiusUnits?.Tablet} ${FeatureGlobalBorderRadiusTablet?.bottom}${FeatureGlobalBorderRadiusUnits?.Tablet} ${FeatureGlobalBorderRadiusTablet?.left}${FeatureGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${FeatureGlobalBorderRadiusMobile?.top}${FeatureGlobalBorderRadiusUnits?.Mobile} ${FeatureGlobalBorderRadiusMobile?.right}${FeatureGlobalBorderRadiusUnits?.Mobile} ${FeatureGlobalBorderRadiusMobile?.bottom}${FeatureGlobalBorderRadiusUnits?.Mobile} ${FeatureGlobalBorderRadiusMobile?.left}${FeatureGlobalBorderRadiusUnits?.Mobile}`;

    //Global Border
    const globalDesktopBorderWidth = `${FeatureGlobalBorderDesktop?.top}${FeatureGlobalBorderUnits?.Desktop} ${FeatureGlobalBorderDesktop?.right}${FeatureGlobalBorderUnits?.Desktop} ${FeatureGlobalBorderDesktop?.bottom}${FeatureGlobalBorderUnits?.Desktop} ${FeatureGlobalBorderDesktop?.left}${FeatureGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${FeatureGlobalBorderTablet?.top}${FeatureGlobalBorderUnits?.Tablet} ${FeatureGlobalBorderTablet?.right}${FeatureGlobalBorderUnits?.Tablet} ${FeatureGlobalBorderTablet?.bottom}${FeatureGlobalBorderUnits?.Tablet} ${FeatureGlobalBorderTablet?.left}${FeatureGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${FeatureGlobalBorderMobile?.top}${FeatureGlobalBorderUnits?.Mobile} ${FeatureGlobalBorderMobile?.right}${FeatureGlobalBorderUnits?.Mobile} ${FeatureGlobalBorderMobile?.bottom}${FeatureGlobalBorderUnits?.Mobile} ${FeatureGlobalBorderMobile?.left}${FeatureGlobalBorderUnits?.Mobile}`;

    //Feature Icon Image Border
    const featureIconImageDesktopBorderWidth = `${FeatureIconImageBorderDesktop?.top}${FeatureIconImageBorderUnits?.Desktop} ${FeatureIconImageBorderDesktop?.right}${FeatureIconImageBorderUnits?.Desktop} ${FeatureIconImageBorderDesktop?.bottom}${FeatureIconImageBorderUnits?.Desktop} ${FeatureIconImageBorderDesktop?.left}${FeatureIconImageBorderUnits?.Desktop}`;
	const featureIconImageTabletBorderWidth = `${FeatureIconImageBorderTablet?.top}${FeatureIconImageBorderUnits?.Tablet} ${FeatureIconImageBorderTablet?.right}${FeatureIconImageBorderUnits?.Tablet} ${FeatureIconImageBorderTablet?.bottom}${FeatureIconImageBorderUnits?.Tablet} ${FeatureIconImageBorderTablet?.left}${FeatureIconImageBorderUnits?.Tablet}`;
	const featureIconImageMobileBorderWidth = `${FeatureIconImageBorderMobile?.top}${FeatureIconImageBorderUnits?.Mobile} ${FeatureIconImageBorderMobile?.right}${FeatureIconImageBorderUnits?.Mobile} ${FeatureIconImageBorderMobile?.bottom}${FeatureIconImageBorderUnits?.Mobile} ${FeatureIconImageBorderMobile?.left}${FeatureIconImageBorderUnits?.Mobile}`;

    //Feature Icon Image Border Radius
    const featureIconImageDesktopBorderRadiusWidth = `${FeatureIconImageBorderRadiusDesktop?.top}${FeatureIconImageBorderRadiusUnits?.Desktop} ${FeatureIconImageBorderRadiusDesktop?.right}${FeatureIconImageBorderRadiusUnits?.Desktop} ${FeatureIconImageBorderRadiusDesktop?.bottom}${FeatureIconImageBorderRadiusUnits?.Desktop} ${FeatureIconImageBorderRadiusDesktop?.left}${FeatureIconImageBorderRadiusUnits?.Desktop}`;
    const featureIconImageTabletBorderRadiusWidth = `${FeatureIconImageBorderRadiusTablet?.top}${FeatureIconImageBorderRadiusUnits?.Tablet} ${FeatureIconImageBorderRadiusTablet?.right}${FeatureIconImageBorderRadiusUnits?.Tablet} ${FeatureIconImageBorderRadiusTablet?.bottom}${FeatureIconImageBorderRadiusUnits?.Tablet} ${FeatureIconImageBorderRadiusTablet?.left}${FeatureIconImageBorderRadiusUnits?.Tablet}`;
    const featureIconImageMobileBorderRadiusWidth = `${FeatureIconImageBorderRadiusMobile?.top}${FeatureIconImageBorderRadiusUnits?.Mobile} ${FeatureIconImageBorderRadiusMobile?.right}${FeatureIconImageBorderRadiusUnits?.Mobile} ${FeatureIconImageBorderRadiusMobile?.bottom}${FeatureIconImageBorderRadiusUnits?.Mobile} ${FeatureIconImageBorderRadiusMobile?.left}${FeatureIconImageBorderRadiusUnits?.Mobile}`;

    //Feature Title Margin
    const featureTitleDesktopMargin = `${FeatureTitleMarginDesktop?.top}${FeatureTitleMarginUnits?.Desktop} ${FeatureTitleMarginDesktop?.right}${FeatureTitleMarginUnits?.Desktop} ${FeatureTitleMarginDesktop?.bottom}${FeatureTitleMarginUnits?.Desktop} ${FeatureTitleMarginDesktop?.left}${FeatureTitleMarginUnits?.Desktop}`;
	const featureTitleTabletMargin = `${FeatureTitleMarginTablet?.top}${FeatureTitleMarginUnits?.Tablet} ${FeatureTitleMarginTablet?.right}${FeatureTitleMarginUnits?.Tablet} ${FeatureTitleMarginTablet?.bottom}${FeatureTitleMarginUnits?.Tablet} ${FeatureTitleMarginTablet?.left}${FeatureTitleMarginUnits?.Tablet}`;
	const featureTitleMobileMargin = `${FeatureTitleMarginMobile?.top}${FeatureTitleMarginUnits?.Mobile} ${FeatureTitleMarginMobile?.right}${FeatureTitleMarginUnits?.Mobile} ${FeatureTitleMarginMobile?.bottom}${FeatureTitleMarginUnits?.Mobile} ${FeatureTitleMarginMobile?.left}${FeatureTitleMarginUnits?.Mobile}`;

    //Feature Description Margin
    const featureDescDesktopMargin = `${FeatureDescMarginDesktop?.top}${FeatureDescMarginUnits?.Desktop} ${FeatureDescMarginDesktop?.right}${FeatureDescMarginUnits?.Desktop} ${FeatureDescMarginDesktop?.bottom}${FeatureDescMarginUnits?.Desktop} ${FeatureDescMarginDesktop?.left}${FeatureDescMarginUnits?.Desktop}`;
    const featureDescTabletMargin = `${FeatureDescMarginTablet?.top}${FeatureDescMarginUnits?.Tablet} ${FeatureDescMarginTablet?.right}${FeatureDescMarginUnits?.Tablet} ${FeatureDescMarginTablet?.bottom}${FeatureDescMarginUnits?.Tablet} ${FeatureDescMarginTablet?.left}${FeatureDescMarginUnits?.Tablet}`;
    const featureDescMobileMargin = `${FeatureDescMarginMobile?.top}${FeatureDescMarginUnits?.Mobile} ${FeatureDescMarginMobile?.right}${FeatureDescMarginUnits?.Mobile} ${FeatureDescMarginMobile?.bottom}${FeatureDescMarginUnits?.Mobile} ${FeatureDescMarginMobile?.left}${FeatureDescMarginUnits?.Mobile}`;

    // Generate Style
    const featureListStyle = `

        .fb-feature-main-wrapper.${blockID} {
            ${FeatureGlobalNormalBackgroundType === 'gradient' ? `
                background: ${FeatureGlobalNormalCustomGradientSwitcher && FeatureGlobalNormalCustomGradientInputValue ? FeatureGlobalNormalCustomGradientInputValue : FeatureGlobalNormalGradientColor};
            ` : FeatureGlobalNormalBackgroundImageUrl && FeatureGlobalNormalBackgroundImageUrl !== 'null' ? `
                ${FeatureGlobalNormalBackgroundImageUrl ? `background-image: url(${FeatureGlobalNormalBackgroundImageUrl});` : ''}
                ${FeatureGlobalNormalBackgroundImagePosition ? `background-position: ${FeatureGlobalNormalBackgroundImagePosition};` : ''}
                ${FeatureGlobalNormalBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalNormalBackgroundImageAttachment};` : ''}
                ${FeatureGlobalNormalBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalNormalBackgroundImageRepeat};` : ''}
                ${FeatureGlobalNormalBackgroundImageSize ? `background-size: ${FeatureGlobalNormalBackgroundImageSize};` : ''}
            ` : `
                ${FeatureGlobalNormalClassicColor ? `background: ${FeatureGlobalNormalClassicColor};` : ''}
            `}
            ${globalDesktopPadding && FeatureGlobalPaddingDesktop?.top? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && FeatureGlobalMarginDesktop?.top? `margin: ${globalDesktopMargin};` : ''} 
            ${FeatureGlobalBorder ? `border: ${FeatureGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && FeatureGlobalBorderDesktop?.top? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && FeatureGlobalBorderRadiusDesktop?.top? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${FeatureGlobalBorderColor ? `border-color: ${FeatureGlobalBorderColor};` : ''}
            ${FeatureGlobalBoxShadowCssValue ? `box-shadow: ${FeatureGlobalBoxShadowCssValue};` : ''}
            ${featuresListPositionType === 'default' ? `position: relative;` : ''}
            ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' ? `width: 100%;` : ''}
            ${featuresListPositionType !== 'default' ? `position: ${featuresListPositionType};` : ''}
            ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'left' && featuresListHZLeftOffset?.Desktop !== undefined ? `left: ${featuresListHZLeftOffset?.Desktop}${featuresListHZLeftOffsetUnits?.Desktop};` : ''}
            ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'right' && featuresListHZRightOffset?.Desktop !== undefined ? `right: ${featuresListHZRightOffset?.Desktop}${featuresListHZRightOffsetUnits?.Desktop};` : ''}
            ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'top' && featuresListVRTopOffset?.Desktop !== undefined ? `top: ${featuresListVRTopOffset?.Desktop}${featuresListVRTopOffsetUnits?.Desktop};` : ''}
            ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'bottom' && featuresListVRBottomOffset?.Desktop !== undefined ? `bottom: ${featuresListVRBottomOffset?.Desktop}${featuresListVRBottomOffsetUnits?.Desktop};` : ''}
            ${FeatureGlobalZIndex?.Desktop ? `z-index: ${FeatureGlobalZIndex?.Desktop};` : ''}
            ${featuresListOverflow !== 'default' ? `overflow: ${featuresListOverflow};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID}:hover {
            ${FeatureGlobalHoverBackgroundType === 'gradient' ? `
                background: ${FeatureGlobalHoverCustomGradientSwitcher && FeatureGlobalHoverCustomGradientInputValue ? FeatureGlobalHoverCustomGradientInputValue : FeatureGlobalHoverGradientColor};
            ` : FeatureGlobalHoverBackgroundImageUrl && FeatureGlobalHoverBackgroundImageUrl !== 'null' ? `
                ${FeatureGlobalHoverBackgroundImageUrl ? `background-image: url(${FeatureGlobalHoverBackgroundImageUrl});` : ''}
                ${FeatureGlobalHoverBackgroundImagePosition ? `background-position: ${FeatureGlobalHoverBackgroundImagePosition};` : ''}
                ${FeatureGlobalHoverBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalHoverBackgroundImageAttachment};` : ''}
                ${FeatureGlobalHoverBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalHoverBackgroundImageRepeat};` : ''}
                ${FeatureGlobalHoverBackgroundImageSize ? `background-size: ${FeatureGlobalHoverBackgroundImageSize};` : ''}
            ` : `
                ${FeatureGlobalHoverClassicColor ? `background: ${FeatureGlobalHoverClassicColor};` : ''}
            `}
            ${FeatureGlobalBorderHoverColor ? `border-color: ${FeatureGlobalBorderHoverColor};` : ''}
            ${FeatureGlobalBoxShadowHoverCssValue ? `box-shadow: ${FeatureGlobalBoxShadowHoverCssValue};` : ''}
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-item {
            ${FeatureSingleItemNormalBackgroundType === 'gradient' ? `  
                background: ${FeatureSingleItemNormalCustomGradientSwitcher && FeatureSingleItemNormalCustomGradientInputValue ? FeatureSingleItemNormalCustomGradientInputValue : FeatureSingleItemNormalGradientColor};
            `: `
                ${FeatureSingleItemNormalClassicColor ? `background: ${FeatureSingleItemNormalClassicColor};` : ''}
            `}
            ${singleItemDesktopPadding && FeatureSingleItemPaddingDesktop?.top? `padding: ${singleItemDesktopPadding};` : ''}
            ${FeatureSingleItemBorder ? `border: ${FeatureSingleItemBorder};` : ''} 
            ${singleItemDesktopBorderWidth && FeatureSingleItemBorderDesktop?.top? `border-width: ${singleItemDesktopBorderWidth};` : ''}
            ${singleItemDesktopBorderRadiusWidth && FeatureSingleItemBorderRadiusDesktop?.top? `border-radius: ${singleItemDesktopBorderRadiusWidth};` : ''}
            ${FeatureSingleItemBorderColor ? `border-color: ${FeatureSingleItemBorderColor};` : ''}
            ${FeatureSingleItemBoxShadowCssValue ? `box-shadow: ${FeatureSingleItemBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:hover {
            ${FeatureSingleItemHoverBackgroundType === 'gradient' ? `  
                background: ${FeatureSingleItemHoverCustomGradientSwitcher && FeatureSingleItemHoverCustomGradientInputValue ? FeatureSingleItemHoverCustomGradientInputValue : FeatureSingleItemHoverGradientColor};
            `: `
                ${FeatureSingleItemHoverClassicColor ? `background: ${FeatureSingleItemHoverClassicColor};` : ''}
            `}
            ${FeatureSingleItemBorderHoverColor ? `border-color: ${FeatureSingleItemBorderHoverColor};` : ''}
            ${FeatureSingleItemBoxShadowHoverCssValue ? `box-shadow: ${FeatureSingleItemBoxShadowHoverCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-items {
            display: flex;
            flex-direction: ${FeatureListDirection?.Desktop};
            flex-wrap: ${FeatureListDirectionWrap?.Desktop};
            gap: ${FeatureListGap?.Desktop}${FeatureListGapUnits?.Desktop};
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
            ${FeatureIconColor ? `fill: ${FeatureIconColor};` : ''}
            height: ${FeatureIconSize?.Desktop}${FeatureIconSizeUnits?.Desktop};
            width: ${FeatureIconSize?.Desktop}${FeatureIconSizeUnits?.Desktop};
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:hover .fb-feature-list-icon svg {
            ${FeatureIconHoverColor ? `fill: ${FeatureIconHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
            ${featureIconDesktopMargin && FeatureIconMarginDesktop?.top ? `margin: ${featureIconDesktopMargin};` : ''}
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
            ${FeatureIconNormalBackgroundType === 'gradient' ? ` 
                background: ${FeatureIconNormalCustomGradientSwitcher && FeatureIconNormalCustomGradientInputValue ? FeatureIconNormalCustomGradientInputValue : FeatureIconNormalGradientColor};
            `: `
                ${FeatureIconNormalClassicColor ? `background: ${FeatureIconNormalClassicColor};` : ''}
            `}
            ${featureIconDesktopPadding && FeatureIconPaddingDesktop?.top ? `padding: ${featureIconDesktopPadding};` : ''} 
            ${FeatureIconBorder ? `border: ${FeatureIconBorder};` : ''} 
            ${featureIconDesktopBorderWidth && FeatureIconBorderDesktop?.top? `border-width: ${featureIconDesktopBorderWidth};` : ''}
            ${FeatureIconBorderColor ? `border-color: ${FeatureIconBorderColor};` : ''}
            ${FeatureIconBoxShadowCssValue ? `box-shadow: ${FeatureIconBoxShadowCssValue};` : ''}
            ${featureIconDesktopBorderRadiusWidth && FeatureIconBorderRadiusDesktop?.top? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.circle {
            ${featureIconDesktopBorderRadiusWidth && FeatureIconBorderRadiusDesktop?.top ? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : 'border-radius: 50%;'} 
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.square {
            ${featureIconDesktopBorderRadiusWidth && FeatureIconBorderRadiusDesktop?.top ? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : 'border-radius: 0;'} 
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.rhombus {
            ${featureIconDesktopBorderRadiusWidth && FeatureIconBorderRadiusDesktop?.top ? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : 'border-radius: 0;'} 
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:hover .fb-feature-list-icon-inner {
            ${FeatureIconHoverBackgroundType === 'gradient' ? ` 
                background: ${FeatureIconHoverCustomGradientSwitcher && FeatureIconHoverCustomGradientInputValue ? FeatureIconHoverCustomGradientInputValue : FeatureIconHoverGradientColor};
            `: `
                ${FeatureIconHoverClassicColor ? `background: ${FeatureIconHoverClassicColor};` : ''}
            `}
            ${FeatureIconBorderHoverColor ? `border-color: ${FeatureIconBorderHoverColor};` : ''}
            ${FeatureIconBoxShadowHoverCssValue ? `box-shadow: ${FeatureIconBoxShadowHoverCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
            ${FeatureTitleGlobalTypoSwitcher?.fontFamily === true && FeatureTitleGlobalTypographyData?.fontFamily ? `font-family: ${FeatureTitleGlobalTypographyData?.fontFamily};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.fontSize === true && FeatureTitleGlobalTypographyData?.fontSize ? `font-size: ${FeatureTitleGlobalTypographyData?.fontSize};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.fontWeight === true && FeatureTitleGlobalTypographyData?.fontWeight ? `font-weight: ${FeatureTitleGlobalTypographyData?.fontWeight};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.fontStyle === true && FeatureTitleGlobalTypographyData?.fontStyle ? `font-style: ${FeatureTitleGlobalTypographyData?.fontStyle};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.textTransform === true && FeatureTitleGlobalTypographyData?.textTransform ? `text-transform: ${FeatureTitleGlobalTypographyData?.textTransform};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.textDecoration === true && FeatureTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${FeatureTitleGlobalTypographyData?.textDecoration};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.letterSpacing === true && FeatureTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${FeatureTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.lineHeight === true && FeatureTitleGlobalTypographyData?.lineHeight ? `line-height: ${FeatureTitleGlobalTypographyData?.lineHeight};` : ''}
            
            ${FeatureTitleGlobalTypoSwitcher?.fontFamily === false && FeatureTitleFontFamily ? `font-family: ${FeatureTitleFontFamily};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.fontSize === false && FeatureTitleFontSize?.Desktop && FeatureTitleFontSizeUnits?.Desktop ? `font-size: ${FeatureTitleFontSize?.Desktop}${FeatureTitleFontSizeUnits?.Desktop};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.fontWeight === false && FeatureTitleFontWeight ? `font-weight: ${FeatureTitleFontWeight};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.fontStyle === false && FeatureTitleFontStyle ? `font-style: ${FeatureTitleFontStyle};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.textTransform === false && FeatureTitleTextTransform ? `text-transform: ${FeatureTitleTextTransform};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.textDecoration === false && FeatureTitleTextDecoration ? `text-decoration: ${FeatureTitleTextDecoration};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.letterSpacing === false && FeatureTitleLetterSpacing?.Desktop && FeatureTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${FeatureTitleLetterSpacing?.Desktop}${FeatureTitleLetterSpacingUnits?.Desktop};` : ''}
            ${FeatureTitleGlobalTypoSwitcher?.lineHeight === false && FeatureTitleLineHeight?.Desktop && FeatureTitleLineHeightUnits?.Desktop ? `line-height: ${FeatureTitleLineHeight?.Desktop}${FeatureTitleLineHeightUnits?.Desktop};` : ''}
            ${FeatureTitleColor ? `color: ${FeatureTitleColor};` : ''}
            ${featureTitleDesktopMargin ? `margin: ${featureTitleDesktopMargin};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:hover .fb-feature-list-content ${FeatureTag} {
            ${FeatureTitleHoverColor ? `color: ${FeatureTitleHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
            ${FeatureDescGlobalTypoSwitcher?.fontFamily === true && FeatureDescGlobalTypographyData?.fontFamily ? `font-family: ${FeatureDescGlobalTypographyData?.fontFamily};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.fontSize === true && FeatureDescGlobalTypographyData?.fontSize ? `font-size: ${FeatureDescGlobalTypographyData?.fontSize};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.fontWeight === true && FeatureDescGlobalTypographyData?.fontWeight ? `font-weight: ${FeatureDescGlobalTypographyData?.fontWeight};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.fontStyle === true && FeatureDescGlobalTypographyData?.fontStyle ? `font-style: ${FeatureDescGlobalTypographyData?.fontStyle};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.textTransform === true && FeatureDescGlobalTypographyData?.textTransform ? `text-transform: ${FeatureDescGlobalTypographyData?.textTransform};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.textDecoration === true && FeatureDescGlobalTypographyData?.textDecoration ? `text-decoration: ${FeatureDescGlobalTypographyData?.textDecoration};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.letterSpacing === true && FeatureDescGlobalTypographyData?.letterSpacing ? `letter-spacing: ${FeatureDescGlobalTypographyData?.letterSpacing};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.lineHeight === true && FeatureDescGlobalTypographyData?.lineHeight ? `line-height: ${FeatureDescGlobalTypographyData?.lineHeight};` : ''}
            
            ${FeatureDescGlobalTypoSwitcher?.fontFamily === false && FeatureDescFontFamily ? `font-family: ${FeatureDescFontFamily};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.fontSize === false && FeatureDescFontSize?.Desktop && FeatureDescFontSizeUnits?.Desktop ? `font-size: ${FeatureDescFontSize?.Desktop}${FeatureDescFontSizeUnits?.Desktop};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.fontWeight === false && FeatureDescFontWeight ? `font-weight: ${FeatureDescFontWeight};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.fontStyle === false && FeatureDescFontStyle ? `font-style: ${FeatureDescFontStyle};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.textTransform === false && FeatureDescTextTransform ? `text-transform: ${FeatureDescTextTransform};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.textDecoration === false && FeatureDescTextDecoration ? `text-decoration: ${FeatureDescTextDecoration};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.letterSpacing === false && FeatureDescLetterSpacing?.Desktop && FeatureDescLetterSpacingUnits?.Desktop ? `letter-spacing: ${FeatureDescLetterSpacing?.Desktop}${FeatureDescLetterSpacingUnits?.Desktop};` : ''}
            ${FeatureDescGlobalTypoSwitcher?.lineHeight === false && FeatureDescLineHeight?.Desktop && FeatureDescLineHeightUnits?.Desktop ? `line-height: ${FeatureDescLineHeight?.Desktop}${FeatureDescLineHeightUnits?.Desktop};` : ''}
            ${FeatureDescColor ? `color: ${FeatureDescColor};` : ''}
            ${featureDescDesktopMargin ? `margin: ${featureDescDesktopMargin};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:hover .fb-feature-list-content .fb-feature-list-text {
            ${FeatureDescHoverColor ? `color: ${FeatureDescHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper {
            height: ${FeatureIconImageHeight?.Desktop}${FeatureIconImageUnits?.Desktop};
            width: ${FeatureIconImageWidth?.Desktop}${FeatureIconImageUnits?.Desktop};  
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper img {
            ${FeatureIconImageBorder ? `border: ${FeatureIconImageBorder};` : ''} 
            ${FeatureIconImageBorderColor ? `border-color: ${FeatureIconImageBorderColor};` : ''}
            ${featureIconImageDesktopBorderWidth && FeatureIconImageBorderDesktop?.top? `border-width: ${featureIconImageDesktopBorderWidth};` : ''}
            ${featureIconImageDesktopBorderRadiusWidth && FeatureIconImageBorderRadiusDesktop?.top? `border-radius: ${featureIconImageDesktopBorderRadiusWidth};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper img:hover {
            ${FeatureIconImageBorderHoverColor ? `border-color: ${FeatureIconImageBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {
            .fb-feature-main-wrapper.${blockID} {
                ${featuresListPositionType !== 'default' ? `position: ${featuresListPositionType};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'left' && featuresListHZLeftOffset?.Tablet !== undefined ? `left: ${featuresListHZLeftOffset?.Tablet}${featuresListHZLeftOffsetUnits?.Tablet};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'right' && featuresListHZRightOffset?.Tablet !== undefined ? `right: ${featuresListHZRightOffset?.Tablet}${featuresListHZRightOffsetUnits?.Tablet};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'top' && featuresListVRTopOffset?.Tablet !== undefined ? `top: ${featuresListVRTopOffset?.Tablet}${featuresListVRTopOffsetUnits?.Tablet};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'bottom' && featuresListVRBottomOffset?.Tablet !== undefined ? `bottom: ${featuresListVRBottomOffset?.Tablet}${featuresListVRBottomOffsetUnits?.Tablet};` : ''}
                ${FeatureGlobalZIndex?.Tablet ? `z-index: ${FeatureGlobalZIndex?.Tablet};` : ''}
                ${globalTabletPadding && FeatureGlobalPaddingTablet?.top? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && FeatureGlobalMarginTablet?.top? `margin: ${globalTabletMargin};` : ''} 
                ${globalTabletBorderWidth && FeatureGlobalBorderTablet?.top? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && FeatureGlobalBorderRadiusTablet?.top? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }

            .fb-feature-main-wrapper.${blockID} .fb-feature-list-item {
                ${singleItemTabletPadding && FeatureSingleItemPaddingTablet?.top? `padding: ${singleItemTabletPadding};` : ''}
                ${singleItemTabletBorderWidth && FeatureSingleItemBorderTablet?.top? `border-width: ${singleItemTabletBorderWidth};` : ''}
                ${singleItemTabletBorderRadiusWidth && FeatureSingleItemBorderRadiusTablet?.top? `border-radius: ${singleItemTabletBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-items {
                flex-direction: ${FeatureListDirection?.Tablet};
                flex-wrap: ${FeatureListDirectionWrap?.Tablet};
                gap: ${FeatureListGap?.Tablet}${FeatureListGapUnits?.Tablet};
            }

            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                height: ${FeatureIconSize?.Tablet}${FeatureIconSizeUnits?.Tablet};
                width: ${FeatureIconSize?.Tablet}${FeatureIconSizeUnits?.Tablet};
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
                ${featureIconTabletPadding && FeatureIconPaddingTablet?.top? `padding: ${featureIconTabletPadding};` : ''} 
                ${featureIconTabletBorderWidth && FeatureIconBorderTablet?.top? `border-width: ${featureIconTabletBorderWidth};` : ''}
                ${featureIconTabletBorderRadiusWidth && FeatureIconBorderRadiusTablet?.top? `border-radius: ${featureIconTabletBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.circle {
                ${featureIconTabletBorderRadiusWidth && FeatureIconBorderRadiusTablet?.top? `border-radius: ${featureIconTabletBorderRadiusWidth};` : 'border-radius: 50%;'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.square {
                ${featureIconTabletBorderRadiusWidth && FeatureIconBorderRadiusTablet?.top? `border-radius: ${featureIconTabletBorderRadiusWidth};` : 'border-radius: 0;'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.rhombus {
                ${featureIconTabletBorderRadiusWidth && FeatureIconBorderRadiusTablet?.top? `border-radius: ${featureIconTabletBorderRadiusWidth};` : 'border-radius: 0;'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                ${featureIconTabletMargin && FeatureIconMarginTablet?.top ? `margin: ${featureIconTabletMargin};` : ''} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                ${FeatureTitleGlobalTypoSwitcher?.fontSize === false && FeatureTitleFontSize?.Tablet && FeatureTitleFontSizeUnits?.Tablet ? `font-size: ${FeatureTitleFontSize?.Tablet}${FeatureTitleFontSizeUnits?.Tablet};` : ''}
                ${FeatureTitleGlobalTypoSwitcher?.letterSpacing === false && FeatureTitleLetterSpacing?.Tablet && FeatureTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${FeatureTitleLetterSpacing?.Tablet}${FeatureTitleLetterSpacingUnits?.Tablet};` : ''}
                ${FeatureTitleGlobalTypoSwitcher?.lineHeight === false && FeatureTitleLineHeight?.Tablet && FeatureTitleLineHeightUnits?.Tablet ? `line-height: ${FeatureTitleLineHeight?.Tablet}${FeatureTitleLineHeightUnits?.Tablet};` : ''}
                ${featureTitleTabletMargin ? `margin: ${featureTitleTabletMargin};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                ${FeatureDescGlobalTypoSwitcher?.fontSize === false && FeatureDescFontSize?.Tablet && FeatureDescFontSizeUnits?.Tablet ? `font-size: ${FeatureDescFontSize?.Tablet}${FeatureDescFontSizeUnits?.Tablet};` : ''}
                ${FeatureDescGlobalTypoSwitcher?.letterSpacing === false && FeatureDescLetterSpacing?.Tablet && FeatureDescLetterSpacingUnits?.Tablet ? `letter-spacing: ${FeatureDescLetterSpacing?.Tablet}${FeatureDescLetterSpacingUnits?.Tablet};` : ''}
                ${FeatureDescGlobalTypoSwitcher?.lineHeight === false && FeatureDescLineHeight?.Tablet && FeatureDescLineHeightUnits?.Tablet ? `line-height: ${FeatureDescLineHeight?.Tablet}${FeatureDescLineHeightUnits?.Tablet};` : ''}
                ${featureDescTabletMargin ? `margin: ${featureDescTabletMargin};` : ''}
            }

            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper {
                height: ${FeatureIconImageHeight?.Tablet}${FeatureIconImageUnits?.Tablet};
                width: ${FeatureIconImageWidth?.Tablet}${FeatureIconImageUnits?.Tablet};  
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper img {
                ${FeatureIconImageBorder ? `border: ${FeatureIconImageBorder};` : ''} 
                ${FeatureIconImageBorderColor ? `border-color: ${FeatureIconImageBorderColor};` : ''}
                ${featureIconImageTabletBorderWidth && FeatureIconImageBorderTablet?.top? `border-width: ${featureIconImageTabletBorderWidth};` : ''}
                ${featureIconImageTabletBorderRadiusWidth && FeatureIconImageBorderRadiusTablet?.top? `border-radius: ${featureIconImageTabletBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper img:hover {
                ${FeatureIconImageBorderHoverColor ? `border-color: ${FeatureIconImageBorderHoverColor};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .fb-feature-main-wrapper.${blockID} {
                ${featuresListPositionType !== 'default' ? `position: ${featuresListPositionType};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'left' && featuresListHZLeftOffset?.Mobile !== undefined ? `left: ${featuresListHZLeftOffset?.Mobile}${featuresListHZLeftOffsetUnits?.Mobile};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'right' && featuresListHZRightOffset?.Mobile !== undefined ? `right: ${featuresListHZRightOffset?.Mobile}${featuresListHZRightOffsetUnits?.Mobile};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'top' && featuresListVRTopOffset?.Mobile !== undefined ? `top: ${featuresListVRTopOffset?.Mobile}${featuresListVRTopOffsetUnits?.Mobile};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'bottom' && featuresListVRBottomOffset?.Mobile !== undefined ? `bottom: ${featuresListVRBottomOffset?.Mobile}${featuresListVRBottomOffsetUnits?.Mobile};` : ''}
                ${FeatureGlobalZIndex?.Mobile ? `z-index: ${FeatureGlobalZIndex?.Mobile};` : ''}
                ${globalMobilePadding && FeatureGlobalPaddingMobile?.top? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && FeatureGlobalMarginMobile?.top? `margin: ${globalMobileMargin};` : ''} 
                ${globalMobileBorderWidth && FeatureGlobalBorderMobile?.top? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && FeatureGlobalBorderRadiusMobile?.top? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-item {
                ${singleItemMobilePadding && FeatureSingleItemPaddingMobile?.top? `padding: ${singleItemMobilePadding};` : ''}
                ${singleItemMobileBorderWidth && FeatureSingleItemBorderMobile?.top? `border-width: ${singleItemMobileBorderWidth};` : ''}
                ${singleItemMobileBorderRadiusWidth && FeatureSingleItemBorderRadiusMobile?.top? `border-radius: ${singleItemMobileBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-items {
                flex-direction: ${FeatureListDirection?.Mobile};
                flex-wrap: ${FeatureListDirectionWrap?.Mobile};
                gap: ${FeatureListGap?.Mobile}${FeatureListGapUnits?.Mobile};
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                height: ${FeatureIconSize?.Mobile}${FeatureIconSizeUnits?.Mobile}; 
                width: ${FeatureIconSize?.Mobile}${FeatureIconSizeUnits?.Mobile};
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
                ${featureIconMobilePadding && FeatureIconPaddingMobile?.top? `padding: ${featureIconMobilePadding};` : ''} 
                ${featureIconMobileBorderWidth && FeatureIconBorderMobile?.top? `border-width: ${featureIconMobileBorderWidth};` : ''}
                ${featureIconMobileBorderRadiusWidth && FeatureIconBorderRadiusMobile?.top? `border-radius: ${featureIconMobileBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.circle {
                ${featureIconMobileBorderRadiusWidth && FeatureIconBorderRadiusMobile?.top? `border-radius: ${featureIconMobileBorderRadiusWidth};` : 'border-radius: 50%;'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.square {
                ${featureIconMobileBorderRadiusWidth && FeatureIconBorderRadiusMobile?.top? `border-radius: ${featureIconMobileBorderRadiusWidth};` : 'border-radius: 0;'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.rhombus {
                ${featureIconMobileBorderRadiusWidth && FeatureIconBorderRadiusMobile?.top? `border-radius: ${featureIconMobileBorderRadiusWidth};` : 'border-radius: 0;'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                ${featureIconMobileMargin && FeatureIconMarginMobile?.top? `margin: ${featureIconMobileMargin};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                ${FeatureTitleGlobalTypoSwitcher?.fontSize === false && FeatureTitleFontSize?.Mobile && FeatureTitleFontSizeUnits?.Mobile ? `font-size: ${FeatureTitleFontSize?.Mobile}${FeatureTitleFontSizeUnits?.Mobile};` : ''}
                ${FeatureTitleGlobalTypoSwitcher?.letterSpacing === false && FeatureTitleLetterSpacing?.Mobile && FeatureTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${FeatureTitleLetterSpacing?.Mobile}${FeatureTitleLetterSpacingUnits?.Mobile};` : ''}
                ${FeatureTitleGlobalTypoSwitcher?.lineHeight === false && FeatureTitleLineHeight?.Mobile && FeatureTitleLineHeightUnits?.Mobile ? `line-height: ${FeatureTitleLineHeight?.Mobile}${FeatureTitleLineHeightUnits?.Mobile};` : ''}
                ${featureTitleMobileMargin ? `margin: ${featureTitleMobileMargin};` : ''}
            }

            .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                ${FeatureDescGlobalTypoSwitcher?.fontSize === false && FeatureDescFontSize?.Mobile && FeatureDescFontSizeUnits?.Mobile ? `font-size: ${FeatureDescFontSize?.Mobile}${FeatureDescFontSizeUnits?.Mobile};` : ''} 
                ${FeatureDescGlobalTypoSwitcher?.letterSpacing === false && FeatureDescLetterSpacing?.Mobile && FeatureDescLetterSpacingUnits?.Mobile ? `letter-spacing: ${FeatureDescLetterSpacing?.Mobile}${FeatureDescLetterSpacingUnits?.Mobile};` : ''}
                ${FeatureDescGlobalTypoSwitcher?.lineHeight === false && FeatureDescLineHeight?.Mobile && FeatureDescLineHeightUnits?.Mobile ? `line-height: ${FeatureDescLineHeight?.Mobile}${FeatureDescLineHeightUnits?.Mobile};` : ''}
                ${featureDescMobileMargin ? `margin: ${featureDescMobileMargin};` : ''}
            }

            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper {
                height: ${FeatureIconImageHeight?.Mobile}${FeatureIconImageUnits?.Mobile};
                width: ${FeatureIconImageWidth?.Mobile}${FeatureIconImageUnits?.Mobile};  
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper img {
                ${FeatureIconImageBorder ? `border: ${FeatureIconImageBorder};` : ''} 
                ${FeatureIconImageBorderColor ? `border-color: ${FeatureIconImageBorderColor};` : ''}
                ${featureIconImageMobileBorderWidth && FeatureIconImageBorderMobile?.top? `border-width: ${featureIconImageMobileBorderWidth};` : ''}
                ${featureIconImageMobileBorderRadiusWidth && FeatureIconImageBorderRadiusMobile?.top? `border-radius: ${featureIconImageMobileBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box .fb-feature-icon-image-wrapper img:hover {
                ${FeatureIconImageBorderHoverColor ? `border-color: ${FeatureIconImageBorderHoverColor};` : ''}
            }
        }
    `;

    // Custom CSS
    const customCss = getCustomCss(featuresListCustomCSS, `.${blockID}`);
    return `${featureListStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
};
export default generateFeaturesListStyle;