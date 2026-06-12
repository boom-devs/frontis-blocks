/**
 * Image Hotspot Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';
// import { CleanWebpackPlugin } from "clean-webpack-plugin";

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateImageHotspotStyle = (attributes) => {
    const {
        blockID,
        imageHotspotImageSize,
        imageHotspotImageHeight,
        imageHotspotImageHeightUnits,
        imageHotspotImageBorderWidth,
        imageHotspotImageBorderWidthUnits,
        imageHotspotImageBorderColor,
        imageHotspotImageBorderRadius,
        imageHotspotImageBorderRadiusUnits,
        imageHotspotHotspots,

        // Hotspot marker styles
        imageHotspotMarkerSize,
        imageHotspotMarkerSizeUnits,
        imageHotspotMarkerHoverSize,
        imageHotspotMarkerHoverSizeUnits,
        imageHotspotMarkerColor,
        imageHotspotMarkerHoverColor,
        imageHotspotMarkerBorderWidth,
        imageHotspotMarkerBorderWidthUnits,
        imageHotspotMarkerBorderColor,
        imageHotspotMarkerBorderRadius,
        imageHotspotMarkerBorderRadiusUnits,
        imageHotspotContainerShadowCssValue,
        imageHotspotMarkerSvg,

        // Popover styles
        imageHotspotPopoverWidth,
        imageHotspotPopoverWidthUnits,

        imageHotspotPopoverImageBorderWidthDesktop,
        imageHotspotPopoverImageBorderWidthTablet,
        imageHotspotPopoverImageBorderWidthMobile,
        imageHotspotPopoverImageBorderWidthUnits,
        imageHotspotPopoverImageBorderRadiusDesktop,
        imageHotspotPopoverImageBorderRadiusTablet,
        imageHotspotPopoverImageBorderRadiusMobile,
        imageHotspotPopoverImageBorderRadiusUnits,
        imageHotspotPopoverImageBorderColor,

        imageHotspotCategoryFontFamily,
        imageHotspotCategoryFontSize,
        imageHotspotCategoryFontSizeUnits,
        imageHotspotCategoryFontWeight,
        imageHotspotCategoryFontStyle,
        imageHotspotCategoryColor,
        imageHotspotCategoryHoverColor,
        imageHotspotCategoryTextTransform,
        imageHotspotCategoryTextDecoration,
        imageHotspotCategoryLetterSpacing,
        imageHotspotCategoryLetterSpacingUnits,
        imageHotspotCategoryLineHeight,
        imageHotspotCategoryLineHeightUnits,
        imageHotspotCategoryPaddingDesktop,
        imageHotspotCategoryPaddingTablet,
        imageHotspotCategoryPaddingMobile,
        imageHotspotCategoryPaddingUnits,
        imageHotspotCategoryMarginDesktop,
        imageHotspotCategoryMarginTablet,
        imageHotspotCategoryMarginMobile,
        imageHotspotCategoryMarginUnits,
        imageHotspotPriceFontFamily,
        imageHotspotPriceFontSize,
        imageHotspotPriceFontSizeUnits,
        imageHotspotPriceFontWeight,
        imageHotspotPriceFontStyle,
        imageHotspotPriceColor,
        imageHotspotPriceHoverColor,
        imageHotspotPriceTextTransform,
        imageHotspotPriceTextDecoration,
        imageHotspotPriceLetterSpacing,
        imageHotspotPriceLetterSpacingUnits,
        imageHotspotPriceLineHeight,
        imageHotspotPriceLineHeightUnits,
        imageHotspotPricePaddingDesktop,
        imageHotspotPricePaddingTablet,
        imageHotspotPricePaddingMobile,
        imageHotspotPricePaddingUnits,
        imageHotspotPriceMarginDesktop,
        imageHotspotPriceMarginTablet,
        imageHotspotPriceMarginMobile,
        imageHotspotPriceMarginUnits,

        // Title typography
        imageHotspotTitleFontFamily,
        imageHotspotTitleFontSize,
        imageHotspotTitleFontSizeUnits,
        imageHotspotTitleFontWeight,
        imageHotspotTitleFontStyle,
        imageHotspotTitleColor,
        imageHotspotTitleHoverColor,

        imageHotspotTitleMarginUnits,
        imageHotspotTitleMarginDesktop,
        imageHotspotTitleMarginTablet,
        imageHotspotTitleMarginMobile,

        imageHotspotTitleTextTransform,
        imageHotspotTitleTextDecoration,
        imageHotspotTitleLetterSpacing,
        imageHotspotTitleLetterSpacingUnits,
        imageHotspotTitleLineHeight,
        imageHotspotTitleLineHeightUnits,

        // Description typography
        imageHotspotDescFontFamily,
        imageHotspotDescFontSize,
        imageHotspotDescFontSizeUnits,
        imageHotspotDescFontWeight,
        imageHotspotDescFontStyle,
        imageHotspotDescColor,
        imageHotspotDescHoverColor,

        imageHotspotDescMarginUnits,
        imageHotspotDescPaddingDesktop,
        imageHotspotDescPaddingTablet,
        imageHotspotDescPaddingMobile,
        imageHotspotDescPaddingUnits,
        imageHotspotDescMarginDesktop,
        imageHotspotDescMarginTablet,
        imageHotspotDescMarginMobile,

        imageHotspotDescTextTransform,
        imageHotspotDescTextDecoration,
        imageHotspotDescLetterSpacing,
        imageHotspotDescLetterSpacingUnits,
        imageHotspotDescLineHeight,
        imageHotspotDescLineHeightUnits,

        // Icon styles
        imageHotspotIconSize,
        imageHotspotIconSizeUnits,
        imageHotspotIconColor,

        imageHotspotPaddingDesktop,
        imageHotspotPaddingTablet,
        imageHotspotPaddingMobile,
        imageHotspotPaddingUnits,
        imageHotspotMarginDesktop,
        imageHotspotMarginTablet,
        imageHotspotMarginMobile,
        imageHotspotMarginUnits,
        imageHotspotBorderDesktop,
        imageHotspotBorderTablet,
        imageHotspotBorderMobile,
        imageHotspotBorderUnits,
        imageHotspotBorderRadiusDesktop,
        imageHotspotBorderRadiusTablet,
        imageHotspotBorderRadiusMobile,
        imageHotspotBorderRadiusUnits,

        imageHotspotSocialLinksGap,
        imageHotspotSocialLinksGapUnits,

        imageHotspotSocialLinksIconSize,
        imageHotspotSocialLinksIconSizeUnits,

        // Custom CSS
        imageHotspotCustomCSS,

        /** Start Hotspot Title Padding */
        imageHotspotTitlePaddingUnits,
        imageHotspotTitlePaddingDesktop,
        imageHotspotTitlePaddingTablet,
        imageHotspotTitlePaddingMobile,
        /** End Hotspot Title Padding */

        /** Start Hotspot Popover Padding */
        imageHotspotsPopoverPaddingUnits,
        imageHotspotsPopoverPaddingDesktop,
        imageHotspotsPopoverPaddingTablet,
        imageHotspotsPopoverPaddingMobile,
        /** End Hotspot Popover Padding */

        /** Start Image Hotspots Popover Margin */
        imageHotspotsPopoverMarginUnits,
        imageHotspotsPopoverMarginDesktop,
        imageHotspotsPopoverMarginTablet,
        imageHotspotsPopoverMarginMobile,
        /** End Image Hotspots Popover Margin */

        /** Start Hotspot Popover Border */
        imageHotspotsPopoverBorder,
        imageHotspotsPopoverBorderColor,
        imageHotspotsPopoverBorderHoverColor,
        /** End Hotspot Popover Border */

        /** Start Hotspot Popover Border Units */
        imageHotspotsPopoverBorderUnits,
        imageHotspotsPopoverBorderDesktop,
        imageHotspotsPopoverBorderTablet,
        imageHotspotsPopoverBorderMobile,
        /** End Hotspot Popover Border Units */

        /** Start Hotspot Popover Border Radius */
        imageHotspotsPopoverBorderRadiusUnits,
        imageHotspotsPopoverBorderRadiusDesktop,
        imageHotspotsPopoverBorderRadiusTablet,
        imageHotspotsPopoverBorderRadiusMobile,
        /** End Hotspot Popover Border Radius */

        /** Start Hotspot Popover Box Shadow */
        imageHotspotsPopoverBoxShadowCssValue,
        /** End Hotspot Popover Box Shadow */

        imgotsHpotsPopoverNormalBackgroundType,
        imgotsHpotsPopoverNormalClassicColor,
        imgotsHpotsPopoverNormalGradientColor,
        imgotsHpotsPopoverNormalCustomGradientSwitcher,
        imgotsHpotsPopoverNormalCustomGradientInputValue,
        imgotsHpotsPopoverHoverBackgroundType,
        imgotsHpotsPopoverHoverClassicColor,
        imgotsHpotsPopoverHoverGradientColor,
        imgotsHpotsPopoverHoverCustomGradientSwitcher,
        imgotsHpotsPopoverHoverCustomGradientInputValue,

        /**start global style control */
        /**start global padding control */
        globalPaddingUnits,
        globalPaddingDesktop,
        globalPaddingTablet,
        globalPaddingMobile,
        globalPaddingLink,
        /**end global padding control */

        /**start global margin control */
        globalMarginUnits,
        globalMarginDesktop,
        globalMarginTablet,
        globalMarginMobile,
        globalMarginLink,
        /**end global margin control */

        /**Start imageHotspotsGlobalBg Background */
        imageHotspotsGlobalBgBgColorSwitcher,
        imageHotspotsGlobalBgBgType,
        imageHotspotsGlobalBgBgClassicColor,
        imageHotspotsGlobalBgBgGradientColor,
        imageHotspotsGlobalBgBgCustomGradientSwitcher,
        imageHotspotsGlobalBgBgCustomGradientInputValue,
        imageHotspotsGlobalBgBgImageUrl,
        imageHotspotsGlobalBgBgImageAlt,
        imageHotspotsGlobalBgBgImageID,
        imageHotspotsGlobalBgBgImagePosition,
        imageHotspotsGlobalBgBgImageAttachment,
        imageHotspotsGlobalBgBgImageRepeat,
        imageHotspotsGlobalBgBgImageSize,
        imageHotspotsGlobalBgBgHoverType,
        imageHotspotsGlobalBgBgHoverClassicColor,
        imageHotspotsGlobalBgBgHoverGradientColor,
        imageHotspotsGlobalBgBgHoverCustomGradientSwitcher,
        imageHotspotsGlobalBgBgHoverCustomGradientInputValue,
        imageHotspotsGlobalBgBgHoverImageUrl,
        imageHotspotsGlobalBgBgHoverImageAlt,
        imageHotspotsGlobalBgBgHoverImageID,
        imageHotspotsGlobalBgBgHoverImagePosition,
        imageHotspotsGlobalBgBgHoverImageAttachment,
        imageHotspotsGlobalBgBgHoverImageRepeat,
        imageHotspotsGlobalBgBgHoverImageSize,
        /**End imageHotspotsGlobalBg Background */

        /** Start imageHotspotsGlobal Border */
        imageHotspotsGlobalBorder,
        imageHotspotsGlobalBorderColorSwitcher,
        imageHotspotsGlobalBorderColor,
        imageHotspotsGlobalBorderHoverColor,
        /** End imageHotspotsGlobal Border */

        /** Start imageHotspotsGlobal Border Units */
        imageHotspotsGlobalBorderUnits,
        imageHotspotsGlobalBorderDesktop,
        imageHotspotsGlobalBorderTablet,
        imageHotspotsGlobalBorderMobile,
        imageHotspotsGlobalBorderLink,
        /** End imageHotspotsGlobal Border Units */

        /** Start imageHotspotsGlobal Border Radius */
        imageHotspotsGlobalBorderRadiusUnits,
        imageHotspotsGlobalBorderRadiusDesktop,
        imageHotspotsGlobalBorderRadiusTablet,
        imageHotspotsGlobalBorderRadiusMobile,
        imageHotspotsGlobalBorderRadiusLink,
        /** End imageHotspotsGlobal Border Radius */

        /** Start imageHotspotsGlobal Box Shadow */
        imageHotspotsGlobalBoxShadowSwitcher,
        imageHotspotsGlobalBoxShadowValues,
        imageHotspotsGlobalBoxShadowCssValue,
        imageHotspotsGlobalBoxShadowHoverValues,
        imageHotspotsGlobalBoxShadowHoverCssValue,
        /** End imageHotspotsGlobal Box Shadow */

        /**end global style control */
    } = attributes;

    // // Marker border width
    const markerBorderWidthDesktop = `${imageHotspotMarkerBorderWidth?.top}${imageHotspotMarkerBorderWidthUnits?.Desktop} ${imageHotspotMarkerBorderWidth?.right}${imageHotspotMarkerBorderWidthUnits?.Desktop} ${imageHotspotMarkerBorderWidth?.bottom}${imageHotspotMarkerBorderWidthUnits?.Desktop} ${imageHotspotMarkerBorderWidth?.left}${imageHotspotMarkerBorderWidthUnits?.Desktop}`;
    const markerBorderWidthTablet = `${imageHotspotMarkerBorderWidth?.top}${imageHotspotMarkerBorderWidthUnits?.Tablet} ${imageHotspotMarkerBorderWidth?.right}${imageHotspotMarkerBorderWidthUnits?.Tablet} ${imageHotspotMarkerBorderWidth?.bottom}${imageHotspotMarkerBorderWidthUnits?.Tablet} ${imageHotspotMarkerBorderWidth?.left}${imageHotspotMarkerBorderWidthUnits?.Tablet}`;
    const markerBorderWidthMobile = `${imageHotspotMarkerBorderWidth?.top}${imageHotspotMarkerBorderWidthUnits?.Mobile} ${imageHotspotMarkerBorderWidth?.right}${imageHotspotMarkerBorderWidthUnits?.Mobile} ${imageHotspotMarkerBorderWidth?.bottom}${imageHotspotMarkerBorderWidthUnits?.Mobile} ${imageHotspotMarkerBorderWidth?.left}${imageHotspotMarkerBorderWidthUnits?.Mobile}`;

    // Marker border radius
    const markerBorderRadiusDesktop = `${imageHotspotMarkerBorderRadius?.top}${imageHotspotMarkerBorderRadiusUnits?.Desktop} ${imageHotspotMarkerBorderRadius?.right}${imageHotspotMarkerBorderRadiusUnits?.Desktop} ${imageHotspotMarkerBorderRadius?.bottom}${imageHotspotMarkerBorderRadiusUnits?.Desktop} ${imageHotspotMarkerBorderRadius?.left}${imageHotspotMarkerBorderRadiusUnits?.Desktop}`;
    const markerBorderRadiusTablet = `${imageHotspotMarkerBorderRadius?.top}${imageHotspotMarkerBorderRadiusUnits?.Tablet} ${imageHotspotMarkerBorderRadius?.right}${imageHotspotMarkerBorderRadiusUnits?.Tablet} ${imageHotspotMarkerBorderRadius?.bottom}${imageHotspotMarkerBorderRadiusUnits?.Tablet} ${imageHotspotMarkerBorderRadius?.left}${imageHotspotMarkerBorderRadiusUnits?.Tablet}`;
    const markerBorderRadiusMobile = `${imageHotspotMarkerBorderRadius?.top}${imageHotspotMarkerBorderRadiusUnits?.Mobile} ${imageHotspotMarkerBorderRadius?.right}${imageHotspotMarkerBorderRadiusUnits?.Mobile} ${imageHotspotMarkerBorderRadius?.bottom}${imageHotspotMarkerBorderRadiusUnits?.Mobile} ${imageHotspotMarkerBorderRadius?.left}${imageHotspotMarkerBorderRadiusUnits?.Mobile}`;

    // Title spacing
    const titlePaddingDesktop = `${imageHotspotTitlePaddingDesktop?.top}${imageHotspotTitlePaddingUnits?.Desktop} ${imageHotspotTitlePaddingDesktop?.right}${imageHotspotTitlePaddingUnits?.Desktop} ${imageHotspotTitlePaddingDesktop?.bottom}${imageHotspotTitlePaddingUnits?.Desktop} ${imageHotspotTitlePaddingDesktop?.left}${imageHotspotTitlePaddingUnits?.Desktop}`;
    const titlePaddingTablet = `${imageHotspotTitlePaddingTablet?.top}${imageHotspotTitlePaddingUnits?.Tablet} ${imageHotspotTitlePaddingTablet?.right}${imageHotspotTitlePaddingUnits?.Tablet} ${imageHotspotTitlePaddingTablet?.bottom}${imageHotspotTitlePaddingUnits?.Tablet} ${imageHotspotTitlePaddingTablet?.left}${imageHotspotTitlePaddingUnits?.Tablet}`;
    const titlePaddingMobile = `${imageHotspotTitlePaddingMobile?.top}${imageHotspotTitlePaddingUnits?.Mobile} ${imageHotspotTitlePaddingMobile?.right}${imageHotspotTitlePaddingUnits?.Mobile} ${imageHotspotTitlePaddingMobile?.bottom}${imageHotspotTitlePaddingUnits?.Mobile} ${imageHotspotTitlePaddingMobile?.left}${imageHotspotTitlePaddingUnits?.Mobile}`;

    const titleMarginDesktop = `${imageHotspotTitleMarginDesktop?.top}${imageHotspotTitleMarginUnits?.Desktop} ${imageHotspotTitleMarginDesktop?.right}${imageHotspotTitleMarginUnits?.Desktop} ${imageHotspotTitleMarginDesktop?.bottom}${imageHotspotTitleMarginUnits?.Desktop} ${imageHotspotTitleMarginDesktop?.left}${imageHotspotTitleMarginUnits?.Desktop}`;
    const titleMarginTablet = `${imageHotspotTitleMarginTablet?.top}${imageHotspotTitleMarginUnits?.Tablet} ${imageHotspotTitleMarginTablet?.right}${imageHotspotTitleMarginUnits?.Tablet} ${imageHotspotTitleMarginTablet?.bottom}${imageHotspotTitleMarginUnits?.Tablet} ${imageHotspotTitleMarginTablet?.left}${imageHotspotTitleMarginUnits?.Tablet}`;
    const titleMarginMobile = `${imageHotspotTitleMarginMobile?.top}${imageHotspotTitleMarginUnits?.Mobile} ${imageHotspotTitleMarginMobile?.right}${imageHotspotTitleMarginUnits?.Mobile} ${imageHotspotTitleMarginMobile?.bottom}${imageHotspotTitleMarginUnits?.Mobile} ${imageHotspotTitleMarginMobile?.left}${imageHotspotTitleMarginUnits?.Mobile}`;

    const categoryPaddingDesktop = `${imageHotspotCategoryPaddingDesktop?.top}${imageHotspotCategoryPaddingUnits?.Desktop} ${imageHotspotCategoryPaddingDesktop?.right}${imageHotspotCategoryPaddingUnits?.Desktop} ${imageHotspotCategoryPaddingDesktop?.bottom}${imageHotspotCategoryPaddingUnits?.Desktop} ${imageHotspotCategoryPaddingDesktop?.left}${imageHotspotCategoryPaddingUnits?.Desktop}`;
    const categoryPaddingTablet = `${imageHotspotCategoryPaddingTablet?.top}${imageHotspotCategoryPaddingUnits?.Tablet} ${imageHotspotCategoryPaddingTablet?.right}${imageHotspotCategoryPaddingUnits?.Tablet} ${imageHotspotCategoryPaddingTablet?.bottom}${imageHotspotCategoryPaddingUnits?.Tablet} ${imageHotspotCategoryPaddingTablet?.left}${imageHotspotCategoryPaddingUnits?.Tablet}`;
    const categoryPaddingMobile = `${imageHotspotCategoryPaddingMobile?.top}${imageHotspotCategoryPaddingUnits?.Mobile} ${imageHotspotCategoryPaddingMobile?.right}${imageHotspotCategoryPaddingUnits?.Mobile} ${imageHotspotCategoryPaddingMobile?.bottom}${imageHotspotCategoryPaddingUnits?.Mobile} ${imageHotspotCategoryPaddingMobile?.left}${imageHotspotCategoryPaddingUnits?.Mobile}`;

    const categoryMarginDesktop = `${imageHotspotCategoryMarginDesktop?.top}${imageHotspotCategoryMarginUnits?.Desktop} ${imageHotspotCategoryMarginDesktop?.right}${imageHotspotCategoryMarginUnits?.Desktop} ${imageHotspotCategoryMarginDesktop?.bottom}${imageHotspotCategoryMarginUnits?.Desktop} ${imageHotspotCategoryMarginDesktop?.left}${imageHotspotCategoryMarginUnits?.Desktop}`;
    const categoryMarginTablet = `${imageHotspotCategoryMarginTablet?.top}${imageHotspotCategoryMarginUnits?.Tablet} ${imageHotspotCategoryMarginTablet?.right}${imageHotspotCategoryMarginUnits?.Tablet} ${imageHotspotCategoryMarginTablet?.bottom}${imageHotspotCategoryMarginUnits?.Tablet} ${imageHotspotCategoryMarginTablet?.left}${imageHotspotCategoryMarginUnits?.Tablet}`;
    const categoryMarginMobile = `${imageHotspotCategoryMarginMobile?.top}${imageHotspotCategoryMarginUnits?.Mobile} ${imageHotspotCategoryMarginMobile?.right}${imageHotspotCategoryMarginUnits?.Mobile} ${imageHotspotCategoryMarginMobile?.bottom}${imageHotspotCategoryMarginUnits?.Mobile} ${imageHotspotCategoryMarginMobile?.left}${imageHotspotCategoryMarginUnits?.Mobile}`;

    // Description spacing
    const descPaddingDesktop = `${imageHotspotDescPaddingDesktop?.top}${imageHotspotDescPaddingUnits?.Desktop} ${imageHotspotDescPaddingDesktop?.right}${imageHotspotDescPaddingUnits?.Desktop} ${imageHotspotDescPaddingDesktop?.bottom}${imageHotspotDescPaddingUnits?.Desktop} ${imageHotspotDescPaddingDesktop?.left}${imageHotspotDescPaddingUnits?.Desktop}`;
    const descPaddingTablet = `${imageHotspotDescPaddingTablet?.top}${imageHotspotDescPaddingUnits?.Tablet} ${imageHotspotDescPaddingTablet?.right}${imageHotspotDescPaddingUnits?.Tablet} ${imageHotspotDescPaddingTablet?.bottom}${imageHotspotDescPaddingUnits?.Tablet} ${imageHotspotDescPaddingTablet?.left}${imageHotspotDescPaddingUnits?.Tablet}`;
    const descPaddingMobile = `${imageHotspotDescPaddingMobile?.top}${imageHotspotDescPaddingUnits?.Mobile} ${imageHotspotDescPaddingMobile?.right}${imageHotspotDescPaddingUnits?.Mobile} ${imageHotspotDescPaddingMobile?.bottom}${imageHotspotDescPaddingUnits?.Mobile} ${imageHotspotDescPaddingMobile?.left}${imageHotspotDescPaddingUnits?.Mobile}`;

    const descMarginDesktop = `${imageHotspotDescMarginDesktop?.top}${imageHotspotDescMarginUnits?.Desktop} ${imageHotspotDescMarginDesktop?.right}${imageHotspotDescMarginUnits?.Desktop} ${imageHotspotDescMarginDesktop?.bottom}${imageHotspotDescMarginUnits?.Desktop} ${imageHotspotDescMarginDesktop?.left}${imageHotspotDescMarginUnits?.Desktop}`;
    const descMarginTablet = `${imageHotspotDescMarginTablet?.top}${imageHotspotDescMarginUnits?.Tablet} ${imageHotspotDescMarginTablet?.right}${imageHotspotDescMarginUnits?.Tablet} ${imageHotspotDescMarginTablet?.bottom}${imageHotspotDescMarginUnits?.Tablet} ${imageHotspotDescMarginTablet?.left}${imageHotspotDescMarginUnits?.Tablet}`;
    const descMarginMobile = `${imageHotspotDescMarginMobile?.top}${imageHotspotDescMarginUnits?.Mobile} ${imageHotspotDescMarginMobile?.right}${imageHotspotDescMarginUnits?.Mobile} ${imageHotspotDescMarginMobile?.bottom}${imageHotspotDescMarginUnits?.Mobile} ${imageHotspotDescMarginMobile?.left}${imageHotspotDescMarginUnits?.Mobile}`;

    const pricePaddingDesktop = `${imageHotspotPricePaddingDesktop?.top}${imageHotspotPricePaddingUnits?.Desktop} ${imageHotspotPricePaddingDesktop?.right}${imageHotspotPricePaddingUnits?.Desktop} ${imageHotspotPricePaddingDesktop?.bottom}${imageHotspotPricePaddingUnits?.Desktop} ${imageHotspotPricePaddingDesktop?.left}${imageHotspotPricePaddingUnits?.Desktop}`;
    const pricePaddingTablet = `${imageHotspotPricePaddingTablet?.top}${imageHotspotPricePaddingUnits?.Tablet} ${imageHotspotPricePaddingTablet?.right}${imageHotspotPricePaddingUnits?.Tablet} ${imageHotspotPricePaddingTablet?.bottom}${imageHotspotPricePaddingUnits?.Tablet} ${imageHotspotPricePaddingTablet?.left}${imageHotspotPricePaddingUnits?.Tablet}`;
    const pricePaddingMobile = `${imageHotspotPricePaddingMobile?.top}${imageHotspotPricePaddingUnits?.Mobile} ${imageHotspotPricePaddingMobile?.right}${imageHotspotPricePaddingUnits?.Mobile} ${imageHotspotPricePaddingMobile?.bottom}${imageHotspotPricePaddingUnits?.Mobile} ${imageHotspotPricePaddingMobile?.left}${imageHotspotPricePaddingUnits?.Mobile}`;

    const priceMarginDesktop = `${imageHotspotPriceMarginDesktop?.top}${imageHotspotPriceMarginUnits?.Desktop} ${imageHotspotPriceMarginDesktop?.right}${imageHotspotPriceMarginUnits?.Desktop} ${imageHotspotPriceMarginDesktop?.bottom}${imageHotspotPriceMarginUnits?.Desktop} ${imageHotspotPriceMarginDesktop?.left}${imageHotspotPriceMarginUnits?.Desktop}`;
    const priceMarginTablet = `${imageHotspotPriceMarginTablet?.top}${imageHotspotPriceMarginUnits?.Tablet} ${imageHotspotPriceMarginTablet?.right}${imageHotspotPriceMarginUnits?.Tablet} ${imageHotspotPriceMarginTablet?.bottom}${imageHotspotPriceMarginUnits?.Tablet} ${imageHotspotPriceMarginTablet?.left}${imageHotspotPriceMarginUnits?.Tablet}`;
    const priceMarginMobile = `${imageHotspotPriceMarginMobile?.top}${imageHotspotPriceMarginUnits?.Mobile} ${imageHotspotPriceMarginMobile?.right}${imageHotspotPriceMarginUnits?.Mobile} ${imageHotspotPriceMarginMobile?.bottom}${imageHotspotPriceMarginUnits?.Mobile} ${imageHotspotPriceMarginMobile?.left}${imageHotspotPriceMarginUnits?.Mobile}`;

    // Popover spacing (four-sided objects)
    const popoverPaddingDesktop = `${imageHotspotsPopoverPaddingDesktop?.top}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.right}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.bottom}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.left}${imageHotspotsPopoverPaddingUnits?.Desktop}`;
    const popoverPaddingTablet = `${imageHotspotsPopoverPaddingTablet?.top}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.right}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.bottom}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.left}${imageHotspotsPopoverPaddingUnits?.Tablet}`;
    const popoverPaddingMobile = `${imageHotspotsPopoverPaddingMobile?.top}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.right}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.bottom}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.left}${imageHotspotsPopoverPaddingUnits?.Mobile}`;

    const imageBorderWidthDesktop = `${imageHotspotImageBorderWidth?.top}${imageHotspotImageBorderWidthUnits?.Desktop} ${imageHotspotImageBorderWidth?.right}${imageHotspotImageBorderWidthUnits?.Desktop} ${imageHotspotImageBorderWidth?.bottom}${imageHotspotImageBorderWidthUnits?.Desktop} ${imageHotspotImageBorderWidth?.left}${imageHotspotImageBorderWidthUnits?.Desktop}`;
    const imageBorderWidthTablet = `${imageHotspotImageBorderWidth?.top}${imageHotspotImageBorderWidthUnits?.Tablet} ${imageHotspotImageBorderWidth?.right}${imageHotspotImageBorderWidthUnits?.Tablet} ${imageHotspotImageBorderWidth?.bottom}${imageHotspotImageBorderWidthUnits?.Tablet} ${imageHotspotImageBorderWidth?.left}${imageHotspotImageBorderWidthUnits?.Tablet}`;
    const imageBorderWidthMobile = `${imageHotspotImageBorderWidth?.top}${imageHotspotImageBorderWidthUnits?.Mobile} ${imageHotspotImageBorderWidth?.right}${imageHotspotImageBorderWidthUnits?.Mobile} ${imageHotspotImageBorderWidth?.bottom}${imageHotspotImageBorderWidthUnits?.Mobile} ${imageHotspotImageBorderWidth?.left}${imageHotspotImageBorderWidthUnits?.Mobile}`;

    const imageBorderRadiusDesktop = `${imageHotspotImageBorderRadius?.top}${imageHotspotImageBorderRadiusUnits?.Desktop} ${imageHotspotImageBorderRadius?.right}${imageHotspotImageBorderRadiusUnits?.Desktop} ${imageHotspotImageBorderRadius?.bottom}${imageHotspotImageBorderRadiusUnits?.Desktop} ${imageHotspotImageBorderRadius?.left}${imageHotspotImageBorderRadiusUnits?.Desktop}`;
    const imageBorderRadiusTablet = `${imageHotspotImageBorderRadius?.top}${imageHotspotImageBorderRadiusUnits?.Tablet} ${imageHotspotImageBorderRadius?.right}${imageHotspotImageBorderRadiusUnits?.Tablet} ${imageHotspotImageBorderRadius?.bottom}${imageHotspotImageBorderRadiusUnits?.Tablet} ${imageHotspotImageBorderRadius?.left}${imageHotspotImageBorderRadiusUnits?.Tablet}`;
    const imageBorderRadiusMobile = `${imageHotspotImageBorderRadius?.top}${imageHotspotImageBorderRadiusUnits?.Mobile} ${imageHotspotImageBorderRadius?.right}${imageHotspotImageBorderRadiusUnits?.Mobile} ${imageHotspotImageBorderRadius?.bottom}${imageHotspotImageBorderRadiusUnits?.Mobile} ${imageHotspotImageBorderRadius?.left}${imageHotspotImageBorderRadiusUnits?.Mobile}`;

    // Popover border Radius
    const popoverImageBorderWidthDesktop = `${imageHotspotPopoverImageBorderWidthDesktop?.top}${imageHotspotPopoverImageBorderWidthUnits?.Desktop} ${imageHotspotPopoverImageBorderWidthDesktop?.right}${imageHotspotPopoverImageBorderWidthUnits?.Desktop} ${imageHotspotPopoverImageBorderWidthDesktop?.bottom}${imageHotspotPopoverImageBorderWidthUnits?.Desktop} ${imageHotspotPopoverImageBorderWidthDesktop?.left}${imageHotspotPopoverImageBorderWidthUnits?.Desktop}`;
    const popoverImageBorderWidthTablet = `${imageHotspotPopoverImageBorderWidthTablet?.top}${imageHotspotPopoverImageBorderWidthUnits?.Tablet} ${imageHotspotPopoverImageBorderWidthTablet?.right}${imageHotspotPopoverImageBorderWidthUnits?.Tablet} ${imageHotspotPopoverImageBorderWidthTablet?.bottom}${imageHotspotPopoverImageBorderWidthUnits?.Tablet} ${imageHotspotPopoverImageBorderWidthTablet?.left}${imageHotspotPopoverImageBorderWidthUnits?.Tablet}`;
    const popoverImageBorderWidthMobile = `${imageHotspotPopoverImageBorderWidthMobile?.top}${imageHotspotPopoverImageBorderWidthUnits?.Mobile} ${imageHotspotPopoverImageBorderWidthMobile?.right}${imageHotspotPopoverImageBorderWidthUnits?.Mobile} ${imageHotspotPopoverImageBorderWidthMobile?.bottom}${imageHotspotPopoverImageBorderWidthUnits?.Mobile} ${imageHotspotPopoverImageBorderWidthMobile?.left}${imageHotspotPopoverImageBorderWidthUnits?.Mobile}`;

    const popoverImageBorderRadiusDesktop = `${imageHotspotPopoverImageBorderRadiusDesktop?.top}${imageHotspotPopoverImageBorderRadiusUnits?.Desktop} ${imageHotspotPopoverImageBorderRadiusDesktop?.right}${imageHotspotPopoverImageBorderRadiusUnits?.Desktop} ${imageHotspotPopoverImageBorderRadiusDesktop?.bottom}${imageHotspotPopoverImageBorderRadiusUnits?.Desktop} ${imageHotspotPopoverImageBorderRadiusDesktop?.left}${imageHotspotPopoverImageBorderRadiusUnits?.Desktop}`;
    const popoverImageBorderRadiusTablet = `${imageHotspotPopoverImageBorderRadiusTablet?.top}${imageHotspotPopoverImageBorderRadiusUnits?.Tablet} ${imageHotspotPopoverImageBorderRadiusTablet?.right}${imageHotspotPopoverImageBorderRadiusUnits?.Tablet} ${imageHotspotPopoverImageBorderRadiusTablet?.bottom}${imageHotspotPopoverImageBorderRadiusUnits?.Tablet} ${imageHotspotPopoverImageBorderRadiusTablet?.left}${imageHotspotPopoverImageBorderRadiusUnits?.Tablet}`;
    const popoverImageBorderRadiusMobile = `${imageHotspotPopoverImageBorderRadiusMobile?.top}${imageHotspotPopoverImageBorderRadiusUnits?.Mobile} ${imageHotspotPopoverImageBorderRadiusMobile?.right}${imageHotspotPopoverImageBorderRadiusUnits?.Mobile} ${imageHotspotPopoverImageBorderRadiusMobile?.bottom}${imageHotspotPopoverImageBorderRadiusUnits?.Mobile} ${imageHotspotPopoverImageBorderRadiusMobile?.left}${imageHotspotPopoverImageBorderRadiusUnits?.Mobile}`;

    // Block spacing
    const blockPaddingDesktop = `${imageHotspotPaddingDesktop?.top}${imageHotspotPaddingUnits?.Desktop} ${imageHotspotPaddingDesktop?.right}${imageHotspotPaddingUnits?.Desktop} ${imageHotspotPaddingDesktop?.bottom}${imageHotspotPaddingUnits?.Desktop} ${imageHotspotPaddingDesktop?.left}${imageHotspotPaddingUnits?.Desktop}`;
    const blockPaddingTablet = `${imageHotspotPaddingTablet?.top}${imageHotspotPaddingUnits?.Tablet} ${imageHotspotPaddingTablet?.right}${imageHotspotPaddingUnits?.Tablet} ${imageHotspotPaddingTablet?.bottom}${imageHotspotPaddingUnits?.Tablet} ${imageHotspotPaddingTablet?.left}${imageHotspotPaddingUnits?.Tablet}`;
    const blockPaddingMobile = `${imageHotspotPaddingMobile?.top}${imageHotspotPaddingUnits?.Mobile} ${imageHotspotPaddingMobile?.right}${imageHotspotPaddingUnits?.Mobile} ${imageHotspotPaddingMobile?.bottom}${imageHotspotPaddingUnits?.Mobile} ${imageHotspotPaddingMobile?.left}${imageHotspotPaddingUnits?.Mobile}`;

    const blockMarginDesktop = `${imageHotspotMarginDesktop?.top}${imageHotspotMarginUnits?.Desktop} ${imageHotspotMarginDesktop?.right}${imageHotspotMarginUnits?.Desktop} ${imageHotspotMarginDesktop?.bottom}${imageHotspotMarginUnits?.Desktop} ${imageHotspotMarginDesktop?.left}${imageHotspotMarginUnits?.Desktop}`;
    const blockMarginTablet = `${imageHotspotMarginTablet?.top}${imageHotspotMarginUnits?.Tablet} ${imageHotspotMarginTablet?.right}${imageHotspotMarginUnits?.Tablet} ${imageHotspotMarginTablet?.bottom}${imageHotspotMarginUnits?.Tablet} ${imageHotspotMarginTablet?.left}${imageHotspotMarginUnits?.Tablet}`;
    const blockMarginMobile = `${imageHotspotMarginMobile?.top}${imageHotspotMarginUnits?.Mobile} ${imageHotspotMarginMobile?.right}${imageHotspotMarginUnits?.Mobile} ${imageHotspotMarginMobile?.bottom}${imageHotspotMarginUnits?.Mobile} ${imageHotspotMarginMobile?.left}${imageHotspotMarginUnits?.Mobile}`;

    const blockBorderDesktop = `${imageHotspotBorderDesktop?.top}${imageHotspotBorderUnits?.Desktop} ${imageHotspotBorderDesktop?.right}${imageHotspotBorderUnits?.Desktop} ${imageHotspotBorderDesktop?.bottom}${imageHotspotBorderUnits?.Desktop} ${imageHotspotBorderDesktop?.left}${imageHotspotBorderUnits?.Desktop}`;
    const blockBorderTablet = `${imageHotspotBorderTablet?.top}${imageHotspotBorderUnits?.Tablet} ${imageHotspotBorderTablet?.right}${imageHotspotBorderUnits?.Tablet} ${imageHotspotBorderTablet?.bottom}${imageHotspotBorderUnits?.Tablet} ${imageHotspotBorderTablet?.left}${imageHotspotBorderUnits?.Tablet}`;
    const blockBorderMobile = `${imageHotspotBorderMobile?.top}${imageHotspotBorderUnits?.Mobile} ${imageHotspotBorderMobile?.right}${imageHotspotBorderUnits?.Mobile} ${imageHotspotBorderMobile?.bottom}${imageHotspotBorderUnits?.Mobile} ${imageHotspotBorderMobile?.left}${imageHotspotBorderUnits?.Mobile}`;

    const blockBorderRadiusDesktop = `${imageHotspotBorderRadiusDesktop?.top}${imageHotspotBorderRadiusUnits?.Desktop} ${imageHotspotBorderRadiusDesktop?.right}${imageHotspotBorderRadiusUnits?.Desktop} ${imageHotspotBorderRadiusDesktop?.bottom}${imageHotspotBorderRadiusUnits?.Desktop} ${imageHotspotBorderRadiusDesktop?.left}${imageHotspotBorderRadiusUnits?.Desktop}`;
    const blockBorderRadiusTablet = `${imageHotspotBorderRadiusTablet?.top}${imageHotspotBorderRadiusUnits?.Tablet} ${imageHotspotBorderRadiusTablet?.right}${imageHotspotBorderRadiusUnits?.Tablet} ${imageHotspotBorderRadiusTablet?.bottom}${imageHotspotBorderRadiusUnits?.Tablet} ${imageHotspotBorderRadiusTablet?.left}${imageHotspotBorderRadiusUnits?.Tablet}`;
    const blockBorderRadiusMobile = `${imageHotspotBorderRadiusMobile?.top}${imageHotspotBorderRadiusUnits?.Mobile} ${imageHotspotBorderRadiusMobile?.right}${imageHotspotBorderRadiusUnits?.Mobile} ${imageHotspotBorderRadiusMobile?.bottom}${imageHotspotBorderRadiusUnits?.Mobile} ${imageHotspotBorderRadiusMobile?.left}${imageHotspotBorderRadiusUnits?.Mobile}`;

    /** Default padding for Image Hotspots Popovers */
    const imageHotspotsPopoverPaddingDesktopWidth = `${imageHotspotsPopoverPaddingDesktop?.top}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.right}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.bottom}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.left}${imageHotspotsPopoverPaddingUnits?.Desktop}`;
    const imageHotspotsPopoverPaddingTabletWidth = `${imageHotspotsPopoverPaddingTablet?.top}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.right}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.bottom}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.left}${imageHotspotsPopoverPaddingUnits?.Tablet}`;
    const imageHotspotsPopoverPaddingMobileWidth = `${imageHotspotsPopoverPaddingMobile?.top}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.right}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.bottom}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.left}${imageHotspotsPopoverPaddingUnits?.Mobile}`;

    /** Default margin for Image Hotspots Popovers */
    const popoverMarginDesktop = `${imageHotspotsPopoverMarginDesktop?.top}${imageHotspotsPopoverMarginUnits?.Desktop} ${imageHotspotsPopoverMarginDesktop?.right}${imageHotspotsPopoverMarginUnits?.Desktop} ${imageHotspotsPopoverMarginDesktop?.bottom}${imageHotspotsPopoverMarginUnits?.Desktop} ${imageHotspotsPopoverMarginDesktop?.left}${imageHotspotsPopoverMarginUnits?.Desktop}`;
    const popoverMarginTablet = `${imageHotspotsPopoverMarginTablet?.top}${imageHotspotsPopoverMarginUnits?.Tablet} ${imageHotspotsPopoverMarginTablet?.right}${imageHotspotsPopoverMarginUnits?.Tablet} ${imageHotspotsPopoverMarginTablet?.bottom}${imageHotspotsPopoverMarginUnits?.Tablet} ${imageHotspotsPopoverMarginTablet?.left}${imageHotspotsPopoverMarginUnits?.Tablet}`;
    const popoverMarginMobile = `${imageHotspotsPopoverMarginMobile?.top}${imageHotspotsPopoverMarginUnits?.Mobile} ${imageHotspotsPopoverMarginMobile?.right}${imageHotspotsPopoverMarginUnits?.Mobile} ${imageHotspotsPopoverMarginMobile?.bottom}${imageHotspotsPopoverMarginUnits?.Mobile} ${imageHotspotsPopoverMarginMobile?.left}${imageHotspotsPopoverMarginUnits?.Mobile}`;

    /** Default border for Image Hotspots Popovers */
    const imageHotspotsPopoverBorderDesktopWidth = `${imageHotspotsPopoverBorderDesktop?.top}${imageHotspotsPopoverBorderUnits?.Desktop} ${imageHotspotsPopoverBorderDesktop?.right}${imageHotspotsPopoverBorderUnits?.Desktop} ${imageHotspotsPopoverBorderDesktop?.bottom}${imageHotspotsPopoverBorderUnits?.Desktop} ${imageHotspotsPopoverBorderDesktop?.left}${imageHotspotsPopoverBorderUnits?.Desktop}`;
    const imageHotspotsPopoverBorderTabletWidth = `${imageHotspotsPopoverBorderTablet?.top}${imageHotspotsPopoverBorderUnits?.Tablet} ${imageHotspotsPopoverBorderTablet?.right}${imageHotspotsPopoverBorderUnits?.Tablet} ${imageHotspotsPopoverBorderTablet?.bottom}${imageHotspotsPopoverBorderUnits?.Tablet} ${imageHotspotsPopoverBorderTablet?.left}${imageHotspotsPopoverBorderUnits?.Tablet}`;
    const imageHotspotsPopoverBorderMobileWidth = `${imageHotspotsPopoverBorderMobile?.top}${imageHotspotsPopoverBorderUnits?.Mobile} ${imageHotspotsPopoverBorderMobile?.right}${imageHotspotsPopoverBorderUnits?.Mobile} ${imageHotspotsPopoverBorderMobile?.bottom}${imageHotspotsPopoverBorderUnits?.Mobile} ${imageHotspotsPopoverBorderMobile?.left}${imageHotspotsPopoverBorderUnits?.Mobile}`;

    /** Default border radius for Image Hotspots Popovers */
    const imageHotspotsPopoverBorderRadiusDesktopWidth = `${imageHotspotsPopoverBorderRadiusDesktop?.top}${imageHotspotsPopoverBorderRadiusUnits?.Desktop} ${imageHotspotsPopoverBorderRadiusDesktop?.right}${imageHotspotsPopoverBorderRadiusUnits?.Desktop} ${imageHotspotsPopoverBorderRadiusDesktop?.bottom}${imageHotspotsPopoverBorderRadiusUnits?.Desktop} ${imageHotspotsPopoverBorderRadiusDesktop?.left}${imageHotspotsPopoverBorderRadiusUnits?.Desktop}`;
    const imageHotspotsPopoverBorderRadiusTabletWidth = `${imageHotspotsPopoverBorderRadiusTablet?.top}${imageHotspotsPopoverBorderRadiusUnits?.Tablet} ${imageHotspotsPopoverBorderRadiusTablet?.right}${imageHotspotsPopoverBorderRadiusUnits?.Tablet} ${imageHotspotsPopoverBorderRadiusTablet?.bottom}${imageHotspotsPopoverBorderRadiusUnits?.Tablet} ${imageHotspotsPopoverBorderRadiusTablet?.left}${imageHotspotsPopoverBorderRadiusUnits?.Tablet}`;
    const imageHotspotsPopoverBorderRadiusMobileWidth = `${imageHotspotsPopoverBorderRadiusMobile?.top}${imageHotspotsPopoverBorderRadiusUnits?.Mobile} ${imageHotspotsPopoverBorderRadiusMobile?.right}${imageHotspotsPopoverBorderRadiusUnits?.Mobile} ${imageHotspotsPopoverBorderRadiusMobile?.bottom}${imageHotspotsPopoverBorderRadiusUnits?.Mobile} ${imageHotspotsPopoverBorderRadiusMobile?.left}${imageHotspotsPopoverBorderRadiusUnits?.Mobile}`;

    /**Default Global Padding For Image Hotspot */
    const globalPaddingDesktopWidth = `${globalPaddingDesktop?.top}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.right}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.bottom}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.left}${globalPaddingUnits?.Desktop}`;
    const globalPaddingTabletWidth = `${globalPaddingTablet?.top}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.right}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.bottom}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.left}${globalPaddingUnits?.Tablet}`;
    const globalPaddingMobileWidth = `${globalPaddingMobile?.top}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.right}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.bottom}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.left}${globalPaddingUnits?.Mobile}`;

    /**Default Global Margin For Image Hotspot */
    const globalMarginDesktopWidth = `${globalMarginDesktop?.top}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.right}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.bottom}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.left}${globalMarginUnits?.Desktop}`;
    const globalMarginTabletWidth = `${globalMarginTablet?.top}${globalMarginUnits?.Tablet} ${globalMarginTablet?.right}${globalMarginUnits?.Tablet} ${globalMarginTablet?.bottom}${globalMarginUnits?.Tablet} ${globalMarginTablet?.left}${globalMarginUnits?.Tablet}`;
    const globalMarginMobileWidth = `${globalMarginMobile?.top}${globalMarginUnits?.Mobile} ${globalMarginMobile?.right}${globalMarginUnits?.Mobile} ${globalMarginMobile?.bottom}${globalMarginUnits?.Mobile} ${globalMarginMobile?.left}${globalMarginUnits?.Mobile}`;

    /** Default border for imageHotspotsGlobal */
    const imageHotspotsGlobalBorderDesktopWidth = `${imageHotspotsGlobalBorderDesktop?.top}${imageHotspotsGlobalBorderUnits?.Desktop} ${imageHotspotsGlobalBorderDesktop?.right}${imageHotspotsGlobalBorderUnits?.Desktop} ${imageHotspotsGlobalBorderDesktop?.bottom}${imageHotspotsGlobalBorderUnits?.Desktop} ${imageHotspotsGlobalBorderDesktop?.left}${imageHotspotsGlobalBorderUnits?.Desktop}`;
    const imageHotspotsGlobalBorderTabletWidth = `${imageHotspotsGlobalBorderTablet?.top}${imageHotspotsGlobalBorderUnits?.Tablet} ${imageHotspotsGlobalBorderTablet?.right}${imageHotspotsGlobalBorderUnits?.Tablet} ${imageHotspotsGlobalBorderTablet?.bottom}${imageHotspotsGlobalBorderUnits?.Tablet} ${imageHotspotsGlobalBorderTablet?.left}${imageHotspotsGlobalBorderUnits?.Tablet}`;
    const imageHotspotsGlobalBorderMobileWidth = `${imageHotspotsGlobalBorderMobile?.top}${imageHotspotsGlobalBorderUnits?.Mobile} ${imageHotspotsGlobalBorderMobile?.right}${imageHotspotsGlobalBorderUnits?.Mobile} ${imageHotspotsGlobalBorderMobile?.bottom}${imageHotspotsGlobalBorderUnits?.Mobile} ${imageHotspotsGlobalBorderMobile?.left}${imageHotspotsGlobalBorderUnits?.Mobile}`;

    /** Default border radius for imageHotspotsGlobal */
    const imageHotspotsGlobalBorderRadiusDesktopWidth = `${imageHotspotsGlobalBorderRadiusDesktop?.top}${imageHotspotsGlobalBorderRadiusUnits?.Desktop} ${imageHotspotsGlobalBorderRadiusDesktop?.right}${imageHotspotsGlobalBorderRadiusUnits?.Desktop} ${imageHotspotsGlobalBorderRadiusDesktop?.bottom}${imageHotspotsGlobalBorderRadiusUnits?.Desktop} ${imageHotspotsGlobalBorderRadiusDesktop?.left}${imageHotspotsGlobalBorderRadiusUnits?.Desktop}`;
    const imageHotspotsGlobalBorderRadiusTabletWidth = `${imageHotspotsGlobalBorderRadiusTablet?.top}${imageHotspotsGlobalBorderRadiusUnits?.Tablet} ${imageHotspotsGlobalBorderRadiusTablet?.right}${imageHotspotsGlobalBorderRadiusUnits?.Tablet} ${imageHotspotsGlobalBorderRadiusTablet?.bottom}${imageHotspotsGlobalBorderRadiusUnits?.Tablet} ${imageHotspotsGlobalBorderRadiusTablet?.left}${imageHotspotsGlobalBorderRadiusUnits?.Tablet}`;
    const imageHotspotsGlobalBorderRadiusMobileWidth = `${imageHotspotsGlobalBorderRadiusMobile?.top}${imageHotspotsGlobalBorderRadiusUnits?.Mobile} ${imageHotspotsGlobalBorderRadiusMobile?.right}${imageHotspotsGlobalBorderRadiusUnits?.Mobile} ${imageHotspotsGlobalBorderRadiusMobile?.bottom}${imageHotspotsGlobalBorderRadiusUnits?.Mobile} ${imageHotspotsGlobalBorderRadiusMobile?.left}${imageHotspotsGlobalBorderRadiusUnits?.Mobile}`;





    const hotspotBaseStyles = (imageHotspotHotspots || []).map((hotspot) => `
        .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
            ${(hotspot.markerColor || imageHotspotMarkerColor)
            ? imageHotspotMarkerSvg
                ? `color: ${hotspot.markerColor || imageHotspotMarkerColor};`
                : `background-color: ${hotspot.markerColor || imageHotspotMarkerColor}; color: ${hotspot.markerColor || imageHotspotMarkerColor};`
            : ''}
        }

        .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-icon {
            ${hotspot.iconColor ? `color: ${hotspot.iconColor};` : ''}
        }

        ${(hotspot.socialLinks || []).map((socialLink) => `
        .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-social-links .fb-hotspot-social-link[data-social-link-id="${socialLink.id}"] svg {
            ${socialLink.socialLinkIconColor ? `fill: ${socialLink.socialLinkIconColor};` : ''}
        }
        .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-social-links .fb-hotspot-social-link[data-social-link-id="${socialLink.id}"]:hover svg {
            ${socialLink.socialLinkIconHoverColor ? `fill: ${socialLink.socialLinkIconHoverColor} !important;` : ''}
        }
        `).join('')}

        ${hotspot.hoverBackgroundColor ? (
            imageHotspotMarkerSvg ? `
            
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                color: ${hotspot.hoverBackgroundColor} !important;
            }
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-marker-svg svg *[stroke] {
                stroke: ${hotspot.hoverBackgroundColor} !important;
            }
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-marker-svg svg *[fill]:not([fill="none"]) {
                fill: ${hotspot.hoverBackgroundColor} !important;
            }
            ` : `
            
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                background-color: ${hotspot.hoverBackgroundColor} !important;
                color: ${hotspot.hoverBackgroundColor} !important;
            }
            `
        ) : ''}

        ${hotspot.iconHoverColor ? `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-icon {
                color: ${hotspot.iconHoverColor} !important;
            }
        ` : ''}
    `).join('');

    // ─── Per-hotspot: responsive sizes

    const hotspotSizeStyles = (imageHotspotHotspots || []).map((hotspot) => {
        return `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                aspect-ratio: 1 / 1;
            }
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                aspect-ratio: 1 / 1;
                ${imageHotspotMarkerSize?.Desktop ? `width: ${imageHotspotMarkerSize?.Desktop}${imageHotspotMarkerSizeUnits?.Desktop};` : ''} 
                ${imageHotspotMarkerSize?.Desktop ? `height: ${imageHotspotMarkerSize?.Desktop}${imageHotspotMarkerSizeUnits?.Desktop};` : ''}
                transition: width 0.3s ease, height 0.3s ease;
            }
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                ${imageHotspotMarkerHoverSize?.Desktop ? `width: ${imageHotspotMarkerHoverSize?.Desktop}${imageHotspotMarkerHoverSizeUnits?.Desktop};` : ''} 
                ${imageHotspotMarkerHoverSize?.Desktop ? `height: ${imageHotspotMarkerHoverSize?.Desktop}${imageHotspotMarkerSizeUnits?.Desktop};` : ''}
            }

            @media only screen and (max-width: 1024px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                    aspect-ratio: 1 / 1;
                  
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    aspect-ratio: 1 / 1;
                    ${imageHotspotMarkerSize?.Tablet ? `width: ${imageHotspotMarkerSize?.Tablet}${imageHotspotMarkerSizeUnits?.Tablet};` : ''} 
                    ${imageHotspotMarkerSize?.Tablet ? `height: ${imageHotspotMarkerSize?.Tablet}${imageHotspotMarkerSizeUnits?.Tablet};` : ''}                  
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                    ${imageHotspotMarkerHoverSize?.Tablet ? `width: ${imageHotspotMarkerHoverSize?.Tablet}${imageHotspotMarkerHoverSizeUnits?.Tablet};` : ''} 
                    ${imageHotspotMarkerHoverSize?.Tablet ? `height: ${imageHotspotMarkerHoverSize?.Tablet}${imageHotspotMarkerHoverSizeUnits?.Tablet};` : ''}

                }
            }

            @media only screen and (max-width: 767px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                    aspect-ratio: 1 / 1;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    aspect-ratio: 1 / 1;
                      ${imageHotspotMarkerSize?.Mobile ? `width: ${imageHotspotMarkerSize?.Mobile}${imageHotspotMarkerSizeUnits?.Mobile};` : ''} 
                    ${imageHotspotMarkerSize?.Mobile ? `height: ${imageHotspotMarkerSize?.Mobile}${imageHotspotMarkerSizeUnits?.Mobile};` : ''}
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                    ${imageHotspotMarkerHoverSize?.Mobile ? `width: ${imageHotspotMarkerHoverSize?.Mobile}${imageHotspotMarkerHoverSizeUnits?.Mobile};` : ''} 
                    ${imageHotspotMarkerHoverSize?.Mobile ? `height: ${imageHotspotMarkerHoverSize?.Mobile}${imageHotspotMarkerSizeUnits?.Mobile};` : ''}
                }
            }
        `;
    }).join('');

    const hotspotAnimationStyles = (imageHotspotHotspots || []).map((hotspot) => {
        const animation = hotspot.animation || 'none';

        // Skip if no animation or explicitly disabled via autoplay toggle
        if (animation === 'none' || hotspot.autoplay === false) {
            return '';
        }

        // Active motion duration (seconds) per animation type
        const activeDuration = animation === 'pulse' ? 1.9
            : animation === 'glow' ? 1.8
                : 2.2; // float

        const interval = Math.max(Number(hotspot.animationInterval) || 0, 0);
        const totalDuration = activeDuration + interval;

        // Percentage of the cycle that contains actual motion
        const endPct = ((activeDuration / totalDuration) * 100).toFixed(4);
        const midPct = (endPct / 2).toFixed(4);

        // Unique keyframe name — safe for use as a CSS identifier
        const animId = `${blockID}-${hotspot.id}`.replace(/[^a-zA-Z0-9_-]/g, '');

        const markerColor = hotspot.markerColor || imageHotspotMarkerColor || '';
        const hoverColor = hotspot.hoverBackgroundColor || imageHotspotMarkerHoverColor || markerColor;

        if (animation === 'pulse') {
            return `
                @keyframes fb-anim-pulse-${animId} {
                    0%, ${endPct}%, 100% { transform: scale(1); }
                    ${midPct}%           { transform: scale(1.12); }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-pulse .fb-hotspot-trigger {
                    position: relative;
                    color: ${markerColor};
                    animation: fb-anim-pulse-${animId} ${totalDuration}s ease-in-out infinite;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-pulse .fb-hotspot-trigger::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: currentColor;
                    opacity: 0.18;
                    border-radius: inherit;
                    pointer-events: none;
                    animation: fb-anim-pulse-${animId} ${totalDuration}s ease-in-out infinite;
                }
            `;
        }

        if (animation === 'glow') {
            return `
                @keyframes fb-anim-glow-${animId} {
                    0%                   { transform: scale(1);   opacity: 1; }
                    ${endPct}%, 100%     { transform: scale(1.6); opacity: 0; }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow .fb-hotspot-trigger {
                    position: relative;
                    color: ${markerColor};
                    animation: none;
                    isolation: isolate;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow .fb-hotspot-trigger::before {
                    content: '';
                    position: absolute;
                    inset: -4px;
                    z-index: -1;
                    background: ${markerColor};
                    opacity: 0;
                    border-radius: inherit;
                    pointer-events: none;
                    animation: fb-anim-glow-${animId} ${totalDuration}s ease-out infinite;
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow:hover .fb-hotspot-trigger::before,
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-glow.locked .fb-hotspot-trigger::before {
                    background: ${hoverColor};
                }
            `;
        }

        if (animation === 'float') {
            return `
                @keyframes fb-anim-float-${animId} {
                    0%, ${endPct}%, 100% { transform: translateY(0px); }
                    ${midPct}%           { transform: translateY(-4px); }
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].animation-float .fb-hotspot-trigger {
                    animation: fb-anim-float-${animId} ${totalDuration}s ease-in-out infinite;
                }
            `;
        }

        return '';
    }).join('');


    const gap = '25px';

    const popoverPositions = {
        top: {
            position: `left: 50%; bottom: calc(50% + ${gap});`,
            hiddenTransform: 'translateX(-50%) translateY(8px)',
            visibleTransform: 'translateX(-50%) translateY(0)',
            notch: `top: 100%; left: 50%; transform: translateX(-50%); border-color: var(--fb-popover-bg) transparent transparent transparent;`,
        },
        bottom: {
            position: `left: 50%; top: calc(50% + ${gap});`,
            hiddenTransform: 'translateX(-50%) translateY(-8px)',
            visibleTransform: 'translateX(-50%) translateY(0)',
            notch: `bottom: 100%; left: 50%; transform: translateX(-50%); border-color: transparent transparent var(--fb-popover-bg) transparent;`,
        },
        left: {
            position: `right: calc(50% + ${gap}); top: 50%;`,
            hiddenTransform: 'translateY(-50%) translateX(8px)',
            visibleTransform: 'translateY(-50%) translateX(0)',
            notch: `top: 50%; left: 100%; transform: translateY(-50%); border-color: transparent transparent transparent var(--fb-popover-bg);`,
        },
        right: {
            position: `left: calc(50% + ${gap}); top: 50%;`,
            hiddenTransform: 'translateY(-50%) translateX(-8px)',
            visibleTransform: 'translateY(-50%) translateX(0)',
            notch: `top: 50%; right: 100%; transform: translateY(-50%); border-color: transparent var(--fb-popover-bg) transparent transparent;`,
        },
        'top-left': {
            position: `right: calc(50% + ${gap}); bottom: calc(50% + ${gap});`,
            hiddenTransform: 'translateY(8px)',
            visibleTransform: 'translateY(0)',
            notch: null,
        },
        'top-right': {
            position: `left: calc(50% + ${gap}); bottom: calc(50% + ${gap});`,
            hiddenTransform: 'translateY(8px)',
            visibleTransform: 'translateY(0)',
            notch: null,
        },
        'bottom-left': {
            position: `right: calc(50% + ${gap}); top: calc(50% + ${gap});`,
            hiddenTransform: 'translateY(-8px)',
            visibleTransform: 'translateY(0)',
            notch: null,
        },
        'bottom-right': {
            position: `left: calc(50% + ${gap}); top: calc(50% + ${gap});`,
            hiddenTransform: 'translateY(-8px)',
            visibleTransform: 'translateY(0)',
            notch: null,
        },
    };

    const hotspotPopoverStyles = (imageHotspotHotspots || []).map((hotspot) => {
        const placement = popoverPositions[hotspot.popoverPosition || 'top'] || popoverPositions.top;

        return `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-popover {
                ${imageHotspotsPopoverPaddingDesktopWidth && imageHotspotsPopoverPaddingDesktop?.top ? `padding: ${imageHotspotsPopoverPaddingDesktopWidth};` : ''}
                ${popoverMarginDesktop && imageHotspotsPopoverMarginDesktop?.top ? `margin: ${popoverMarginDesktop};` : ''}
                ${imageHotspotsPopoverBorderDesktopWidth && imageHotspotsPopoverBorderDesktop?.top ? `border-width: ${imageHotspotsPopoverBorderDesktopWidth};` : ''}
                ${imageHotspotsPopoverBorderRadiusDesktopWidth && imageHotspotsPopoverBorderRadiusDesktop?.top ? `border-radius: ${imageHotspotsPopoverBorderRadiusDesktopWidth};` : ''}
                ${imageHotspotsPopoverBoxShadowCssValue ? `box-shadow: ${imageHotspotsPopoverBoxShadowCssValue};` : ''}
                ${imgotsHpotsPopoverNormalBackgroundType === 'gradient' ? `  
                ${imgotsHpotsPopoverNormalCustomGradientSwitcher && imgotsHpotsPopoverNormalCustomGradientInputValue ? `--fb-popover-bg: ${imgotsHpotsPopoverNormalCustomGradientInputValue};` : `background: ${imgotsHpotsPopoverNormalGradientColor};`}
                  `: `
                ${imgotsHpotsPopoverNormalClassicColor ? `--fb-popover-bg: ${imgotsHpotsPopoverNormalClassicColor};` : ''}
                  `}
                ${imageHotspotsPopoverBorder && imageHotspotsPopoverBorder !== 'none' ? `border-style: ${imageHotspotsPopoverBorder};` : ''}
                ${imageHotspotsPopoverBorderColor ? `border-color: ${imageHotspotsPopoverBorderColor};` : ''}
                ${imageHotspotsPopoverBoxShadowCssValue ? `box-shadow: ${imageHotspotsPopoverBoxShadowCssValue};` : ''} 
                background-color: var(--fb-popover-bg);
                position: absolute;
                inset: auto;
                ${placement.position}
                transform: ${placement.hiddenTransform};
                transform-origin: center;
                ${imageHotspotPopoverWidth?.Desktop ? `width: ${imageHotspotPopoverWidth?.Desktop}${imageHotspotPopoverWidthUnits?.Desktop};` : ''} 
                z-index: 200;
                word-wrap: break-word;
                white-space: normal;
                box-sizing: border-box;
                display: block;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease, background-color 0.2s ease;
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-popover:hover {
                ${imgotsHpotsPopoverHoverBackgroundType === 'gradient' ? `
                ${imgotsHpotsPopoverHoverCustomGradientSwitcher && imgotsHpotsPopoverHoverCustomGradientInputValue ? `background-color: ${imgotsHpotsPopoverHoverCustomGradientInputValue};` : `background: ${imgotsHpotsPopoverHoverGradientColor};`}
                `: `
                ${imgotsHpotsPopoverHoverClassicColor ? `background-color: ${imgotsHpotsPopoverHoverClassicColor};` : ''}
                `}
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-popover:hover::after {
                ${imgotsHpotsPopoverHoverBackgroundType === 'gradient' ? `
                ${imgotsHpotsPopoverHoverCustomGradientSwitcher && imgotsHpotsPopoverHoverCustomGradientInputValue ? `border-top-color: ${imgotsHpotsPopoverHoverCustomGradientInputValue};` : `border-top-color: ${imgotsHpotsPopoverHoverGradientColor};`}
                `: `
                ${imgotsHpotsPopoverHoverClassicColor ? `border-top-color: ${imgotsHpotsPopoverHoverClassicColor};` : ''}
            `}                
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-popover,
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].locked .fb-hotspot-popover {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transform: ${placement.visibleTransform};
                ${imageHotspotsPopoverBorderHoverColor ? `border-color: ${imageHotspotsPopoverBorderHoverColor} !important;` : ''}
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-popover::after {
                ${placement.notch ? `
                    content: '';
                    position: absolute;
                    inset: auto;
                    width: 0;
                    height: 0;
                    border-width: 8px;
                    border-style: solid;
                    ${placement.notch} ` : `content: none; display: none;`}
            }
        `;
    }).join('');

    // ─── Main block styles
    const fbHotspotStyle = `

        .${blockID} {
            ${blockPaddingDesktop ? `padding: ${blockPaddingDesktop};` : ''}
            ${blockMarginDesktop ? `margin: ${blockMarginDesktop};` : ''}
            ${blockBorderDesktop ? `border-width: ${blockBorderDesktop};` : ''}
            ${blockBorderRadiusDesktop ? `border-radius: ${blockBorderRadiusDesktop};` : ''}
            ${imageHotspotContainerShadowCssValue ? `box-shadow: ${imageHotspotContainerShadowCssValue};` : ''}
        }

        .${blockID} .fb-hotspot-base-image {
            width: 100%;
            display: block;
            box-sizing: border-box;
            ${imageHotspotImageHeight?.Desktop && imageHotspotImageHeightUnits?.Desktop ? `height: ${imageHotspotImageHeight.Desktop}${imageHotspotImageHeightUnits.Desktop};` : ''}
            ${imageHotspotImageSize ? `object-fit: ${imageHotspotImageSize};` : ''}
            ${imageHotspotImageBorderColor ? `border-color: ${imageHotspotImageBorderColor};` : ''}
            ${imageBorderRadiusDesktop ? `border-radius: ${imageBorderRadiusDesktop};` : ''}
             ${imageBorderWidthTablet ? `border-width: ${imageBorderWidthTablet};` : ''}
        }

        .${blockID} .fb-hotspot-marker {
            position: absolute;
            transform: translate(-50%, -50%);
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .${blockID} .fb-hotspot-trigger {
            ${imageHotspotMarkerSize?.Desktop ? `width: ${imageHotspotMarkerSize?.Desktop}${imageHotspotMarkerSizeUnits?.Desktop};` : ''} 
            ${imageHotspotMarkerSize?.Desktop ? `height: ${imageHotspotMarkerSize?.Desktop}${imageHotspotMarkerSizeUnits?.Desktop};` : ''}
            box-sizing: border-box;
            ${imageHotspotMarkerSvg ? imageHotspotMarkerColor ? `color: ${imageHotspotMarkerColor};` : '' : imageHotspotMarkerColor ? `background-color: ${imageHotspotMarkerColor};` : ''}
            transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            border-radius: ${markerBorderRadiusDesktop};
            ${markerBorderWidthDesktop ? `border-width: ${markerBorderWidthDesktop};` : ''}
            ${imageHotspotMarkerBorderColor ? `border-color: ${imageHotspotMarkerBorderColor};` : ''}
            border-style: solid;
            cursor: pointer;
            transform-origin: center;
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            font-size: 0;
        }

        .${blockID} .fb-hotspot-trigger:hover {
            ${imageHotspotMarkerHoverSize?.Desktop ? `width: ${imageHotspotMarkerHoverSize?.Desktop}${imageHotspotMarkerHoverSizeUnits?.Desktop};` : ''} 
            ${imageHotspotMarkerHoverSize?.Desktop ? `height: ${imageHotspotMarkerHoverSize?.Desktop}${imageHotspotMarkerHoverSizeUnits?.Desktop};` : ''}
            ${!imageHotspotMarkerSvg && imageHotspotMarkerHoverColor ? `background-color: ${imageHotspotMarkerHoverColor};` : ''}
            ${imageHotspotMarkerSvg && imageHotspotMarkerHoverColor ? `color: ${imageHotspotMarkerHoverColor};` : ''}
        }      

        ${imageHotspotMarkerSvg && imageHotspotMarkerHoverColor ? `
        .${blockID} .fb-hotspot-trigger:hover .fb-hotspot-marker-svg svg *[stroke] {
            stroke: ${imageHotspotMarkerHoverColor};
        }
        .${blockID} .fb-hotspot-trigger:hover .fb-hotspot-marker-svg svg *[fill]:not([fill="none"]) {
            fill: ${imageHotspotMarkerHoverColor};
        }
        ` : ''}

        .${blockID} .fb-hotspot-icon {
            ${imageHotspotIconSize?.Desktop && imageHotspotIconSizeUnits?.Desktop ? `width: ${imageHotspotIconSize.Desktop}${imageHotspotIconSizeUnits.Desktop}; height: ${imageHotspotIconSize.Desktop}${imageHotspotIconSizeUnits.Desktop};` : 'width: 50%; height: 50%;'}
            ${imageHotspotIconColor ? `color: ${imageHotspotIconColor};` : ''}
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
        }

        .${blockID} .fb-hotspot-icon svg {
            width: 100%;
            height: 100%;
            fill: currentColor;
        }

        .${blockID} .fb-hotspot-popover-image {
            display: block;
            width: 100%;
            height: auto;
            box-sizing: border-box;
            ${popoverImageBorderWidthDesktop ? `border-width: ${popoverImageBorderWidthDesktop};` : ''}
            ${popoverImageBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotPopoverImageBorderColor ? `border-color: ${imageHotspotPopoverImageBorderColor};` : ''}
            ${popoverImageBorderRadiusDesktop ? `border-radius: ${popoverImageBorderRadiusDesktop} !important;` : ''}
        }

        ${hotspotBaseStyles}
        ${hotspotSizeStyles}
        ${hotspotAnimationStyles}
        ${hotspotPopoverStyles}

        .${blockID} .fb-hotspot-popover-title {
            box-sizing: border-box;
            ${imageHotspotTitleFontFamily ? `font-family: ${imageHotspotTitleFontFamily};` : ''}
            ${imageHotspotTitleFontSize?.Desktop && imageHotspotTitleFontSizeUnits?.Desktop ? `font-size: ${imageHotspotTitleFontSize.Desktop}${imageHotspotTitleFontSizeUnits.Desktop};` : ''}
            ${imageHotspotTitleFontWeight ? `font-weight: ${imageHotspotTitleFontWeight};` : ''}
            ${imageHotspotTitleFontStyle ? `font-style: ${imageHotspotTitleFontStyle};` : ''}
            ${imageHotspotTitleColor ? `color: ${imageHotspotTitleColor};` : ''}
            ${imageHotspotTitleTextTransform ? `text-transform: ${imageHotspotTitleTextTransform};` : ''}
            ${imageHotspotTitleTextDecoration ? `text-decoration: ${imageHotspotTitleTextDecoration};` : ''}
            ${imageHotspotTitleLetterSpacing?.Desktop && imageHotspotTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Desktop}${imageHotspotTitleLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotTitleLineHeight?.Desktop && imageHotspotTitleLineHeightUnits?.Desktop ? `line-height: ${imageHotspotTitleLineHeight.Desktop}${imageHotspotTitleLineHeightUnits.Desktop};` : ''}
            ${titlePaddingDesktop ? `padding: ${titlePaddingDesktop};` : ''}
            ${titleMarginDesktop ? `margin: ${titleMarginDesktop};` : ''}
        }

        .${blockID} .fb-hotspot-popover-title a {
            color: inherit;
            text-decoration: inherit;
        }

        .${blockID} .fb-hotspot-popover-title:hover,
        .${blockID} .fb-hotspot-popover-title:focus-within {
            ${imageHotspotTitleHoverColor ? `color: ${imageHotspotTitleHoverColor};` : ''}
        }

        .${blockID} .fb-hotspot-popover-description {
            box-sizing: border-box;
            margin: 0;
            ${imageHotspotDescFontFamily ? `font-family: ${imageHotspotDescFontFamily};` : ''}
            ${imageHotspotDescFontSize?.Desktop ? `font-size: ${imageHotspotDescFontSize.Desktop}${imageHotspotDescFontSizeUnits?.Desktop || 'rem'};` : ''}
            ${imageHotspotDescFontWeight ? `font-weight: ${imageHotspotDescFontWeight};` : ''}
            ${imageHotspotDescFontStyle ? `font-style: ${imageHotspotDescFontStyle};` : ''}
            ${imageHotspotDescColor ? `color: ${imageHotspotDescColor};` : ''}
            ${imageHotspotDescTextTransform ? `text-transform: ${imageHotspotDescTextTransform};` : ''}
            ${imageHotspotDescTextDecoration ? `text-decoration: ${imageHotspotDescTextDecoration};` : ''}
            ${imageHotspotDescLetterSpacing?.Desktop && imageHotspotDescLetterSpacingUnits?.Desktop ? `letter-spacing: ${imageHotspotDescLetterSpacing.Desktop}${imageHotspotDescLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotDescLineHeight?.Desktop ? `line-height: ${imageHotspotDescLineHeight.Desktop}${imageHotspotDescLineHeightUnits?.Desktop || ''};` : 'line-height: 1.5;'}
            ${descPaddingDesktop ? `padding: ${descPaddingDesktop};` : ''}
            ${descMarginDesktop ? `margin: ${descMarginDesktop};` : ''}
        }

        .${blockID} .fb-hotspot-marker:hover .fb-hotspot-popover-description,
        .${blockID} .fb-hotspot-marker.locked .fb-hotspot-popover-description {
            ${imageHotspotDescHoverColor ? `color: ${imageHotspotDescHoverColor};` : ''}
        }

        .${blockID} .fb-hotspot-popover-category {
            box-sizing: border-box;
            white-space: normal;
            ${imageHotspotCategoryFontFamily ? `font-family: ${imageHotspotCategoryFontFamily};` : ''}
            ${imageHotspotCategoryFontSize?.Desktop ? `font-size: ${imageHotspotCategoryFontSize.Desktop}${imageHotspotCategoryFontSizeUnits?.Desktop || 'rem'};` : ''}
            ${imageHotspotCategoryFontWeight ? `font-weight: ${imageHotspotCategoryFontWeight};` : ''}
            ${imageHotspotCategoryFontStyle ? `font-style: ${imageHotspotCategoryFontStyle};` : ''}
            ${imageHotspotCategoryColor ? `color: ${imageHotspotCategoryColor};` : ''}
            ${imageHotspotCategoryTextTransform ? `text-transform: ${imageHotspotCategoryTextTransform};` : ''}
            ${imageHotspotCategoryTextDecoration ? `text-decoration: ${imageHotspotCategoryTextDecoration};` : ''}
            ${imageHotspotCategoryLetterSpacing?.Desktop && imageHotspotCategoryLetterSpacingUnits?.Desktop ? `letter-spacing: ${imageHotspotCategoryLetterSpacing.Desktop}${imageHotspotCategoryLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotCategoryLineHeight?.Desktop ? `line-height: ${imageHotspotCategoryLineHeight.Desktop}${imageHotspotCategoryLineHeightUnits?.Desktop || ''};` : ''}
            ${categoryPaddingDesktop ? `padding: ${categoryPaddingDesktop};` : ''}
            ${categoryMarginDesktop ? `margin: ${categoryMarginDesktop};` : ''}
        }

        .${blockID} .fb-hotspot-marker:hover .fb-hotspot-popover-category,
        .${blockID} .fb-hotspot-marker.locked .fb-hotspot-popover-category {
            ${imageHotspotCategoryHoverColor ? `color: ${imageHotspotCategoryHoverColor};` : ''}
        }

        .${blockID} .fb-hotspot-popover-price {
            box-sizing: border-box;
            ${imageHotspotPriceFontFamily ? `font-family: ${imageHotspotPriceFontFamily};` : ''}
            ${imageHotspotPriceFontSize?.Desktop ? `font-size: ${imageHotspotPriceFontSize.Desktop}${imageHotspotPriceFontSizeUnits?.Desktop || 'rem'};` : ''}
            ${imageHotspotPriceFontWeight ? `font-weight: ${imageHotspotPriceFontWeight};` : ''}
            ${imageHotspotPriceFontStyle ? `font-style: ${imageHotspotPriceFontStyle};` : ''}
            ${imageHotspotPriceColor ? `color: ${imageHotspotPriceColor};` : ''}
            ${imageHotspotPriceTextTransform ? `text-transform: ${imageHotspotPriceTextTransform};` : ''}
            ${imageHotspotPriceTextDecoration ? `text-decoration: ${imageHotspotPriceTextDecoration};` : ''}
            ${imageHotspotPriceLetterSpacing?.Desktop && imageHotspotPriceLetterSpacingUnits?.Desktop ? `letter-spacing: ${imageHotspotPriceLetterSpacing.Desktop}${imageHotspotPriceLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotPriceLineHeight?.Desktop ? `line-height: ${imageHotspotPriceLineHeight.Desktop}${imageHotspotPriceLineHeightUnits?.Desktop || ''};` : 'line-height: 1.4;'}
            ${pricePaddingDesktop ? `padding: ${pricePaddingDesktop};` : ''}
            ${priceMarginDesktop ? `margin: ${priceMarginDesktop};` : 'margin-top: 8px;'}
        }

        .${blockID} .fb-hotspot-marker:hover .fb-hotspot-popover-price,
        .${blockID} .fb-hotspot-marker.locked .fb-hotspot-popover-price {
            ${imageHotspotPriceHoverColor ? `color: ${imageHotspotPriceHoverColor};` : ''}
        }

        .${blockID} .fb-hotspot-social-links {
            gap: ${imageHotspotSocialLinksGap?.Desktop !== undefined && imageHotspotSocialLinksGap.Desktop !== '' ? `${imageHotspotSocialLinksGap.Desktop}${imageHotspotSocialLinksGapUnits?.Desktop || 'px'}` : ''};
        }

        .${blockID} .fb-hotspot-social-icon {
           width: ${imageHotspotSocialLinksIconSize?.Desktop !== undefined && imageHotspotSocialLinksIconSize.Desktop !== '' ? `${imageHotspotSocialLinksIconSize.Desktop}${imageHotspotSocialLinksIconSizeUnits?.Desktop || 'px'}` : ''};
           height: ${imageHotspotSocialLinksIconSize?.Desktop !== undefined && imageHotspotSocialLinksIconSize.Desktop !== '' ? `${imageHotspotSocialLinksIconSize.Desktop}${imageHotspotSocialLinksIconSizeUnits?.Desktop || 'px'}` : ''};
        }

        .fb-hotspot-main-wrapper.${blockID} {
            ${globalPaddingDesktopWidth && globalPaddingDesktop?.top ? `padding: ${globalPaddingDesktopWidth};` : ''}
            ${globalMarginDesktopWidth && globalMarginDesktop?.top ? `margin: ${globalMarginDesktopWidth};` : ''} 
            ${imageHotspotsGlobalBorder ? `border: ${imageHotspotsGlobalBorder};` : ''}
            ${imageHotspotsGlobalBorderDesktopWidth && imageHotspotsGlobalBorderDesktop?.top ? `border-width: ${imageHotspotsGlobalBorderDesktopWidth};` : ''}
            ${imageHotspotsGlobalBorderRadiusDesktopWidth && imageHotspotsGlobalBorderRadiusDesktop?.top ? `border-radius: ${imageHotspotsGlobalBorderRadiusDesktopWidth};` : ''}
            ${imageHotspotsGlobalBorderColor ? `border-color: ${imageHotspotsGlobalBorderColor};` : ''}
            ${imageHotspotsGlobalBoxShadowCssValue ? `box-shadow: ${imageHotspotsGlobalBoxShadowCssValue};` : ''}
            ${imageHotspotsGlobalBgBgType === "gradient"
            ? `background: ${imageHotspotsGlobalBgBgCustomGradientSwitcher && imageHotspotsGlobalBgBgCustomGradientInputValue
                ? imageHotspotsGlobalBgBgCustomGradientInputValue
                : imageHotspotsGlobalBgBgGradientColor
            };`
            : imageHotspotsGlobalBgBgImageUrl !== undefined && imageHotspotsGlobalBgBgImageUrl !== null && imageHotspotsGlobalBgBgImageUrl !== ""
                ? `
                    ${imageHotspotsGlobalBgBgImageUrl !== undefined ? `background-image: url(${imageHotspotsGlobalBgBgImageUrl});` : ''}
                    ${imageHotspotsGlobalBgBgImagePosition !== undefined ? `background-position: ${imageHotspotsGlobalBgBgImagePosition};` : ''}
                    ${imageHotspotsGlobalBgBgImageAttachment !== undefined ? `background-attachment: ${imageHotspotsGlobalBgBgImageAttachment};` : ''}
                    ${imageHotspotsGlobalBgBgImageRepeat !== undefined ? `background-repeat: ${imageHotspotsGlobalBgBgImageRepeat};` : ''}
                    ${imageHotspotsGlobalBgBgImageSize !== undefined ? `background-size: ${imageHotspotsGlobalBgBgImageSize};` : ''}
                    `
                : imageHotspotsGlobalBgBgClassicColor ? `background: ${imageHotspotsGlobalBgBgClassicColor};` : ''
        }
            transition: all 0.3s ease;
        }

        .fb-hotspot-main-wrapper.${blockID}:hover {
            ${imageHotspotsGlobalBgBgHoverType === "gradient"
            ? `background: ${imageHotspotsGlobalBgBgHoverCustomGradientSwitcher && imageHotspotsGlobalBgBgHoverCustomGradientInputValue
                ? imageHotspotsGlobalBgBgHoverCustomGradientInputValue
                : imageHotspotsGlobalBgBgHoverGradientColor
            };`
            : imageHotspotsGlobalBgBgHoverImageUrl !== undefined && imageHotspotsGlobalBgBgHoverImageUrl !== null && imageHotspotsGlobalBgBgHoverImageUrl !== ""
                ? `
                    ${imageHotspotsGlobalBgBgHoverImageUrl !== undefined ? `background-image: url(${imageHotspotsGlobalBgBgHoverImageUrl});` : ''}
                    ${imageHotspotsGlobalBgBgHoverImagePosition !== undefined ? `background-position: ${imageHotspotsGlobalBgBgHoverImagePosition};` : ''}
                    ${imageHotspotsGlobalBgBgHoverImageAttachment !== undefined ? `background-attachment: ${imageHotspotsGlobalBgBgHoverImageAttachment};` : ''}
                    ${imageHotspotsGlobalBgBgHoverImageRepeat !== undefined ? `background-repeat: ${imageHotspotsGlobalBgBgHoverImageRepeat};` : ''}
                    ${imageHotspotsGlobalBgBgHoverImageSize !== undefined ? `background-size: ${imageHotspotsGlobalBgBgHoverImageSize};` : ''}
                    `
                : imageHotspotsGlobalBgBgHoverClassicColor ? `background: ${imageHotspotsGlobalBgBgHoverClassicColor};` : ''
        }
            ${imageHotspotsGlobalBorderHoverColor ? `border-color: ${imageHotspotsGlobalBorderHoverColor};` : ''}
            ${imageHotspotsGlobalBoxShadowHoverCssValue ? `box-shadow: ${imageHotspotsGlobalBoxShadowHoverCssValue};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockID} {
                ${blockPaddingTablet ? `padding: ${blockPaddingTablet};` : ''}
                ${blockMarginTablet ? `margin: ${blockMarginTablet};` : ''}
                ${blockBorderTablet ? `border-width: ${blockBorderTablet};` : ''}
                ${blockBorderRadiusTablet ? `border-radius: ${blockBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-base-image {
                ${imageHotspotImageHeight?.Tablet && imageHotspotImageHeightUnits?.Tablet ? `height: ${imageHotspotImageHeight.Tablet}${imageHotspotImageHeightUnits.Tablet};` : ''}
                ${imageBorderWidthTablet ? `border-width: ${imageBorderWidthTablet};` : ''}
                ${imageBorderRadiusTablet ? `border-radius: ${imageBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-trigger {
                ${imageHotspotMarkerSize?.Tablet ? `width: ${imageHotspotMarkerSize?.Tablet}${imageHotspotMarkerSizeUnits?.Tablet};` : ''} 
                ${imageHotspotMarkerSize?.Tablet ? `height: ${imageHotspotMarkerSize?.Tablet}${imageHotspotMarkerSizeUnits?.Tablet};` : ''}    
                ${markerBorderWidthTablet ? `border-width: ${markerBorderWidthTablet};` : ''}
                ${markerBorderRadiusTablet !== markerBorderRadiusDesktop ? `border-radius: ${markerBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id] .fb-hotspot-popover {
                ${imageHotspotPopoverWidth?.Tablet ? `width: ${imageHotspotPopoverWidth?.Tablet}${imageHotspotPopoverWidthUnits?.Tablet};` : ''}
                ${popoverPaddingTablet ? `padding: ${popoverPaddingTablet};` : ''}
                ${imageHotspotsPopoverBorderRadiusTabletWidth && imageHotspotsPopoverBorderRadiusTablet?.top ? `border-radius: ${imageHotspotsPopoverBorderRadiusTabletWidth};` : ''}
                ${imageHotspotsPopoverBorderTabletWidth && imageHotspotsPopoverBorderTablet?.top ? `border-width: ${imageHotspotsPopoverBorderTabletWidth};` : ''}
                ${popoverMarginTablet && imageHotspotsPopoverMarginTablet?.top ? `margin: ${popoverMarginTablet};` : ''}
                ${imageHotspotsPopoverPaddingTabletWidth && imageHotspotsPopoverPaddingTablet?.top ? `padding: ${imageHotspotsPopoverPaddingTabletWidth};` : ''}
            }

            .${blockID} .fb-hotspot-popover-image {
                box-sizing: border-box;
                ${popoverImageBorderWidthTablet ? `border-width: ${popoverImageBorderWidthTablet};` : ''}
                ${popoverImageBorderRadiusTablet ? `border-radius: ${popoverImageBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-icon {
                ${imageHotspotIconSize?.Tablet && imageHotspotIconSizeUnits?.Tablet ? `width: ${imageHotspotIconSize.Tablet}${imageHotspotIconSizeUnits.Tablet}; height: ${imageHotspotIconSize.Tablet}${imageHotspotIconSizeUnits.Tablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-title {
                ${imageHotspotTitleFontSize?.Tablet && imageHotspotTitleFontSizeUnits?.Tablet ? `font-size: ${imageHotspotTitleFontSize.Tablet}${imageHotspotTitleFontSizeUnits.Tablet};` : ''}
                ${imageHotspotTitleLetterSpacing?.Tablet && imageHotspotTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Tablet}${imageHotspotTitleLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotTitleLineHeight?.Tablet && imageHotspotTitleLineHeightUnits?.Tablet ? `line-height: ${imageHotspotTitleLineHeight.Tablet}${imageHotspotTitleLineHeightUnits.Tablet};` : ''}
                ${titlePaddingTablet ? `padding: ${titlePaddingTablet};` : ''}
                ${titleMarginTablet ? `margin: ${titleMarginTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-description {
                ${imageHotspotDescFontSize?.Tablet ? `font-size: ${imageHotspotDescFontSize.Tablet}${imageHotspotDescFontSizeUnits?.Tablet || 'rem'};` : ''}
                ${imageHotspotDescLetterSpacing?.Tablet && imageHotspotDescLetterSpacingUnits?.Tablet ? `letter-spacing: ${imageHotspotDescLetterSpacing.Tablet}${imageHotspotDescLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotDescLineHeight?.Tablet ? `line-height: ${imageHotspotDescLineHeight.Tablet}${imageHotspotDescLineHeightUnits?.Tablet || ''};` : ''}
                ${descPaddingTablet ? `padding: ${descPaddingTablet};` : ''}
                ${descMarginTablet ? `margin: ${descMarginTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-category {
                ${imageHotspotCategoryFontSize?.Tablet ? `font-size: ${imageHotspotCategoryFontSize.Tablet}${imageHotspotCategoryFontSizeUnits?.Tablet || 'rem'};` : ''}
                ${imageHotspotCategoryLetterSpacing?.Tablet && imageHotspotCategoryLetterSpacingUnits?.Tablet ? `letter-spacing: ${imageHotspotCategoryLetterSpacing.Tablet}${imageHotspotCategoryLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotCategoryLineHeight?.Tablet ? `line-height: ${imageHotspotCategoryLineHeight.Tablet}${imageHotspotCategoryLineHeightUnits?.Tablet || ''};` : ''}
                ${categoryPaddingTablet ? `padding: ${categoryPaddingTablet};` : ''}
                ${categoryMarginTablet ? `margin: ${categoryMarginTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-price {
                ${imageHotspotPriceFontSize?.Tablet ? `font-size: ${imageHotspotPriceFontSize.Tablet}${imageHotspotPriceFontSizeUnits?.Tablet || 'rem'};` : ''}
                ${imageHotspotPriceLetterSpacing?.Tablet && imageHotspotPriceLetterSpacingUnits?.Tablet ? `letter-spacing: ${imageHotspotPriceLetterSpacing.Tablet}${imageHotspotPriceLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotPriceLineHeight?.Tablet ? `line-height: ${imageHotspotPriceLineHeight.Tablet}${imageHotspotPriceLineHeightUnits?.Tablet || ''};` : ''}
                ${pricePaddingTablet ? `padding: ${pricePaddingTablet};` : ''}
                ${priceMarginTablet ? `margin: ${priceMarginTablet};` : ''}
            }
        }

        .${blockID} .fb-hotspot-social-links {
            gap: ${imageHotspotSocialLinksGap?.Tablet !== undefined && imageHotspotSocialLinksGap.Tablet !== '' ? `${imageHotspotSocialLinksGap.Tablet}${imageHotspotSocialLinksGapUnits?.Tablet || 'px'}` : ''};
        }

        .${blockID} .fb-hotspot-social-icon {
            ${imageHotspotSocialLinksIconSize?.Tablet !== undefined && imageHotspotSocialLinksIconSize.Tablet !== '' ? `width: ${imageHotspotSocialLinksIconSize.Tablet}${imageHotspotSocialLinksIconSizeUnits?.Tablet || 'px'}; height: ${imageHotspotSocialLinksIconSize.Tablet}${imageHotspotSocialLinksIconSizeUnits?.Tablet || 'px'};` : ''}
        }

        .fb-hotspot-main-wrapper.${blockID} {
            ${globalPaddingTabletWidth && globalPaddingTablet?.top ? `padding: ${globalPaddingTabletWidth};` : ''}
            ${globalMarginTabletWidth && globalMarginTablet?.top ? `margin: ${globalMarginTabletWidth};` : ''} 
            ${imageHotspotsGlobalBorderTabletWidth && imageHotspotsGlobalBorderTablet?.top ? `border-width: ${imageHotspotsGlobalBorderTabletWidth};` : ''}
            ${imageHotspotsGlobalBorderRadiusTabletWidth && imageHotspotsGlobalBorderRadiusTablet?.top ? `border-radius: ${imageHotspotsGlobalBorderRadiusTabletWidth};` : ''}
        }

        @media only screen and (max-width: 767px) {

            .${blockID} {
                ${blockPaddingMobile ? `padding: ${blockPaddingMobile};` : ''}
                ${blockMarginMobile ? `margin: ${blockMarginMobile};` : ''}
                ${blockBorderMobile ? `border-width: ${blockBorderMobile};` : ''}
                ${blockBorderRadiusMobile ? `border-radius: ${blockBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-base-image {
                ${imageHotspotImageHeight?.Mobile && imageHotspotImageHeightUnits?.Mobile ? `height: ${imageHotspotImageHeight.Mobile}${imageHotspotImageHeightUnits.Mobile};` : ''}
                ${imageBorderWidthMobile ? `border-width: ${imageBorderWidthMobile};` : ''}
                ${imageBorderRadiusMobile ? `border-radius: ${imageBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-trigger {
                ${imageHotspotMarkerSize?.Mobile ? `width: ${imageHotspotMarkerSize?.Mobile}${imageHotspotMarkerSizeUnits?.Mobile};` : ''} 
                ${imageHotspotMarkerSize?.Mobile ? `height: ${imageHotspotMarkerSize?.Mobile}${imageHotspotMarkerSizeUnits?.Mobile};` : ''}    
                ${markerBorderWidthMobile ? `border-width: ${markerBorderWidthMobile};` : ''}
                ${markerBorderRadiusMobile !== markerBorderRadiusDesktop ? `border-radius: ${markerBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id] .fb-hotspot-popover {
                ${imageHotspotPopoverWidth?.Mobile ? `width: ${imageHotspotPopoverWidth?.Mobile}${imageHotspotPopoverWidthUnits?.Mobile};` : ''}
                ${popoverPaddingMobile ? `padding: ${popoverPaddingMobile};` : ''}
                ${imageHotspotsPopoverBorderMobileWidth && imageHotspotsPopoverBorderMobile?.top ? `border-width: ${imageHotspotsPopoverBorderMobileWidth};` : ''}
                ${imageHotspotsPopoverBorderRadiusMobileWidth && imageHotspotsPopoverBorderRadiusMobile?.top ? `border-radius: ${imageHotspotsPopoverBorderRadiusMobileWidth};` : ''}
                ${popoverMarginMobile && imageHotspotsPopoverMarginMobile?.top ? `margin: ${popoverMarginMobile};` : ''}
                ${imageHotspotsPopoverPaddingMobileWidth && imageHotspotsPopoverPaddingMobile?.top ? `padding: ${imageHotspotsPopoverPaddingMobileWidth};` : ''}
            }

            .${blockID} .fb-hotspot-popover-image {
                box-sizing: border-box;
                ${popoverImageBorderWidthMobile ? `border-width: ${popoverImageBorderWidthMobile};` : ''}
                ${popoverImageBorderRadiusMobile ? `border-radius: ${popoverImageBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-icon {
                ${imageHotspotIconSize?.Mobile && imageHotspotIconSizeUnits?.Mobile ? `width: ${imageHotspotIconSize.Mobile}${imageHotspotIconSizeUnits.Mobile};   height: ${imageHotspotIconSize.Mobile}${imageHotspotIconSizeUnits.Mobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-title {
                ${imageHotspotTitleFontSize?.Mobile && imageHotspotTitleFontSizeUnits?.Mobile ? `font-size: ${imageHotspotTitleFontSize.Mobile}${imageHotspotTitleFontSizeUnits.Mobile};` : ''}
                ${imageHotspotTitleLetterSpacing?.Mobile && imageHotspotTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Mobile}${imageHotspotTitleLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotTitleLineHeight?.Mobile && imageHotspotTitleLineHeightUnits?.Mobile ? `line-height: ${imageHotspotTitleLineHeight.Mobile}${imageHotspotTitleLineHeightUnits.Mobile};` : ''}
                ${titlePaddingMobile ? `padding: ${titlePaddingMobile};` : ''}
                ${titleMarginMobile ? `margin: ${titleMarginMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-description {
                ${imageHotspotDescFontSize?.Mobile ? `font-size: ${imageHotspotDescFontSize.Mobile}${imageHotspotDescFontSizeUnits?.Mobile || 'rem'};` : ''}
                ${imageHotspotDescLetterSpacing?.Mobile && imageHotspotDescLetterSpacingUnits?.Mobile ? `letter-spacing: ${imageHotspotDescLetterSpacing.Mobile}${imageHotspotDescLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotDescLineHeight?.Mobile ? `line-height: ${imageHotspotDescLineHeight.Mobile}${imageHotspotDescLineHeightUnits?.Mobile || ''};` : ''}
                ${descPaddingMobile ? `padding: ${descPaddingMobile};` : ''}
                ${descMarginMobile ? `margin: ${descMarginMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-category {
                ${imageHotspotCategoryFontSize?.Mobile ? `font-size: ${imageHotspotCategoryFontSize.Mobile}${imageHotspotCategoryFontSizeUnits?.Mobile || 'rem'};` : ''}
                ${imageHotspotCategoryLetterSpacing?.Mobile && imageHotspotCategoryLetterSpacingUnits?.Mobile ? `letter-spacing: ${imageHotspotCategoryLetterSpacing.Mobile}${imageHotspotCategoryLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotCategoryLineHeight?.Mobile ? `line-height: ${imageHotspotCategoryLineHeight.Mobile}${imageHotspotCategoryLineHeightUnits?.Mobile || ''};` : ''}
                ${categoryPaddingMobile ? `padding: ${categoryPaddingMobile};` : ''}
                ${categoryMarginMobile ? `margin: ${categoryMarginMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-price {
                ${imageHotspotPriceFontSize?.Mobile ? `font-size: ${imageHotspotPriceFontSize.Mobile}${imageHotspotPriceFontSizeUnits?.Mobile || 'rem'};` : ''}
                ${imageHotspotPriceLetterSpacing?.Mobile && imageHotspotPriceLetterSpacingUnits?.Mobile ? `letter-spacing: ${imageHotspotPriceLetterSpacing.Mobile}${imageHotspotPriceLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotPriceLineHeight?.Mobile ? `line-height: ${imageHotspotPriceLineHeight.Mobile}${imageHotspotPriceLineHeightUnits?.Mobile || ''};` : ''}
                ${pricePaddingMobile ? `padding: ${pricePaddingMobile};` : ''}
                ${priceMarginMobile ? `margin: ${priceMarginMobile};` : ''}
            }

            .${blockID} .fb-hotspot-social-links {
                gap: ${imageHotspotSocialLinksGap?.Mobile !== undefined && imageHotspotSocialLinksGap.Mobile !== '' ? `${imageHotspotSocialLinksGap.Mobile}${imageHotspotSocialLinksGapUnits?.Mobile || 'px'}` : ''};
            }

            .${blockID} .fb-hotspot-social-icon {
                ${imageHotspotSocialLinksIconSize?.Mobile !== undefined && imageHotspotSocialLinksIconSize.Mobile !== '' ? `width: ${imageHotspotSocialLinksIconSize.Mobile}${imageHotspotSocialLinksIconSizeUnits?.Mobile || 'px'}; height: ${imageHotspotSocialLinksIconSize.Mobile}${imageHotspotSocialLinksIconSizeUnits?.Mobile || 'px'};` : ''}
            }

            .fb-hotspot-main-wrapper.${blockID} {
                ${globalPaddingMobileWidth && globalPaddingMobile?.top ? `padding: ${globalPaddingMobileWidth};` : ''}
                ${globalMarginMobileWidth && globalMarginMobile?.top ? `margin: ${globalMarginMobileWidth};` : ''} 
                ${imageHotspotsGlobalBorderMobileWidth && imageHotspotsGlobalBorderMobile?.top ? `border-width: ${imageHotspotsGlobalBorderMobileWidth};` : ''}
                ${imageHotspotsGlobalBorderRadiusMobileWidth && imageHotspotsGlobalBorderRadiusMobile?.top ? `border-radius: ${imageHotspotsGlobalBorderRadiusMobileWidth};` : ''}
            }
        }
    `;

    const customCssOutput = getCustomCss(imageHotspotCustomCSS, `.${blockID}`);
    return `${fbHotspotStyle} ${customCssOutput}`.replace(/\s+/g, ' ').trim();
};

export default generateImageHotspotStyle;
