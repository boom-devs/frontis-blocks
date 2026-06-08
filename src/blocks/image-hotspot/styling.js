/**
 * Image Hotspot Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

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
        imageHotspotPopoverBgColor,
        imageHotspotPopoverBgHoverColor,
        imageHotspotPopoverWidth,
        imageHotspotPopoverWidthUnits,

        imageHotspotPopoverPaddingDesktop,
        imageHotspotPopoverPaddingTablet,
        imageHotspotPopoverPaddingMobile,
        imageHotspotPopoverPaddingUnits,
        imageHotspotPopoverMarginDesktop,
        imageHotspotPopoverMarginTablet,
        imageHotspotPopoverMarginMobile,
        imageHotspotPopoverMarginUnits,
        imageHotspotPopoverBorderRadiusDesktop,
        imageHotspotPopoverBorderRadiusTablet,
        imageHotspotPopoverBorderRadiusMobile,
        imageHotspotPopoverBorderRadiusUnits,
        imageHotspotPopoverBorderWidthDesktop,
        imageHotspotPopoverBorderWidthTablet,
        imageHotspotPopoverBorderWidthMobile,
        imageHotspotPopoverBorderWidthUnits,
        imageHotspotPopoverBorderColor,
        imageHotspotPopoverImageBorderWidthDesktop,
        imageHotspotPopoverImageBorderWidthTablet,
        imageHotspotPopoverImageBorderWidthMobile,
        imageHotspotPopoverImageBorderWidthUnits,
        imageHotspotPopoverImageBorderRadiusDesktop,
        imageHotspotPopoverImageBorderRadiusTablet,
        imageHotspotPopoverImageBorderRadiusMobile,
        imageHotspotPopoverImageBorderRadiusUnits,
        imageHotspotPopoverImageBorderColor,

        imageHotspotPopoverShadowCssValue,
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
        imageHotspotCategoryBorderWidthDesktop,
        imageHotspotCategoryBorderWidthTablet,
        imageHotspotCategoryBorderWidthMobile,
        imageHotspotCategoryBorderWidthUnits,
        imageHotspotCategoryBorderColor,
        imageHotspotCategoryBorderRadiusDesktop,
        imageHotspotCategoryBorderRadiusTablet,
        imageHotspotCategoryBorderRadiusMobile,
        imageHotspotCategoryBorderRadiusUnits,
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
        imageHotspotPriceBorderWidthDesktop,
        imageHotspotPriceBorderWidthTablet,
        imageHotspotPriceBorderWidthMobile,
        imageHotspotPriceBorderWidthUnits,
        imageHotspotPriceBorderColor,
        imageHotspotPriceBorderRadiusDesktop,
        imageHotspotPriceBorderRadiusTablet,
        imageHotspotPriceBorderRadiusMobile,
        imageHotspotPriceBorderRadiusUnits,

        // Title typography
        imageHotspotTitleFontFamily,
        imageHotspotTitleFontSize,
        imageHotspotTitleFontSizeUnits,
        imageHotspotTitleFontWeight,
        imageHotspotTitleFontStyle,
        imageHotspotTitleColor,
        imageHotspotTitleHoverColor,

        imageHotspotTitleMargin,
        imageHotspotTitleMarginUnits,
        imageHotspotTitlePaddingDesktop,
        imageHotspotTitlePaddingTablet,
        imageHotspotTitlePaddingMobile,
        imageHotspotTitlePaddingUnits,
        imageHotspotTitleMarginDesktop,
        imageHotspotTitleMarginTablet,
        imageHotspotTitleMarginMobile,
        imageHotspotTitleBorderWidthDesktop,
        imageHotspotTitleBorderWidthTablet,
        imageHotspotTitleBorderWidthMobile,
        imageHotspotTitleBorderWidthUnits,
        imageHotspotTitleBorderColor,
        imageHotspotTitleBorderRadiusDesktop,
        imageHotspotTitleBorderRadiusTablet,
        imageHotspotTitleBorderRadiusMobile,
        imageHotspotTitleBorderRadiusUnits,

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

        imageHotspotDescMargin,
        imageHotspotDescMarginUnits,
        imageHotspotDescPaddingDesktop,
        imageHotspotDescPaddingTablet,
        imageHotspotDescPaddingMobile,
        imageHotspotDescPaddingUnits,
        imageHotspotDescMarginDesktop,
        imageHotspotDescMarginTablet,
        imageHotspotDescMarginMobile,
        imageHotspotDescBorderWidthDesktop,
        imageHotspotDescBorderWidthTablet,
        imageHotspotDescBorderWidthMobile,
        imageHotspotDescBorderWidthUnits,
        imageHotspotDescBorderColor,
        imageHotspotDescBorderRadiusDesktop,
        imageHotspotDescBorderRadiusTablet,
        imageHotspotDescBorderRadiusMobile,
        imageHotspotDescBorderRadiusUnits,

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

        /** Start Hotspot Popover Padding */
        imageHotspotsPopoverPaddingUnits,
        imageHotspotsPopoverPaddingDesktop,
        imageHotspotsPopoverPaddingTablet,
        imageHotspotsPopoverPaddingMobile,
        imageHotspotsPopoverPaddingLink,
        /** End Hotspot Popover Padding */

        /** Start Image Hotspots Popover Margin */
        imageHotspotsPopoverMarginUnits,
        imageHotspotsPopoverMarginDesktop,
        imageHotspotsPopoverMarginTablet,
        imageHotspotsPopoverMarginMobile,
        imageHotspotsPopoverMarginLink,
        /** End Image Hotspots Popover Margin */

        /** Start Hotspot Popover Background */
        imageHotspotsPopoverBgColorSwitcher,
        imageHotspotsPopoverNormalBackgroundType,
        imageHotspotsPopoverNormalClassicColor,
        imageHotspotsPopoverNormalGradientColor,
        imageHotspotsPopoverNormalCustomGradientSwitcher,
        imageHotspotsPopoverNormalCustomGradientInputValue,
        imageHotspotsPopoverHoverBackgroundType,
        imageHotspotsPopoverHoverClassicColor,
        imageHotspotsPopoverHoverGradientColor,
        imageHotspotsPopoverHoverCustomGradientSwitcher,
        imageHotspotsPopoverHoverCustomGradientInputValue,
        /** End Hotspot Popover Background */

        /** Start Hotspot Popover Border */
        imageHotspotsPopoverBorder,
        imageHotspotsPopoverBorderColorSwitcher,
        imageHotspotsPopoverBorderColor,
        imageHotspotsPopoverBorderHoverColor,
        /** End Hotspot Popover Border */

        /** Start Hotspot Popover Border Units */
        imageHotspotsPopoverBorderUnits,
        imageHotspotsPopoverBorderDesktop,
        imageHotspotsPopoverBorderTablet,
        imageHotspotsPopoverBorderMobile,
        imageHotspotsPopoverBorderLink,
        /** End Hotspot Popover Border Units */

        /** Start Hotspot Popover Border Radius */
        imageHotspotsPopoverBorderRadiusUnits,
        imageHotspotsPopoverBorderRadiusDesktop,
        imageHotspotsPopoverBorderRadiusTablet,
        imageHotspotsPopoverBorderRadiusMobile,
        imageHotspotsPopoverBorderRadiusLink,
        /** End Hotspot Popover Border Radius */

        /** Start Hotspot Popover Box Shadow */
        imageHotspotsPopoverBoxShadowSwitcher,
        imageHotspotsPopoverBoxShadowValues,
        imageHotspotsPopoverBoxShadowHoverValues,
        imageHotspotsPopoverGlobalZIndex,
        /** End Hotspot Popover Box Shadow */


    } = attributes;

    // ─── Helpers

    const buildFourSided = (obj, unit) => {
        if (!obj || (!obj.top && !obj.right && !obj.bottom && !obj.left)) return '';
        const u = unit || 'px';
        return `${obj.top || 0}${u} ${obj.right || 0}${u} ${obj.bottom || 0}${u} ${obj.left || 0}${u}`;
    };

    const buildResponsiveBoxValue = (obj, units, device, fallback = '') => {
        const value = obj?.[device];

        if (value && typeof value === 'object') {
            return buildFourSided(value, units?.[device]) || fallback;
        }

        return value ? `${value}${units?.[device] || 'px'}` : fallback;
    };

    const getResponsiveSize = (size, units, fallback) => {
        const desktop = size?.Desktop ? `${size.Desktop}${units?.Desktop || 'px'}` : fallback.Desktop;
        const tablet = size?.Tablet ? `${size.Tablet}${units?.Tablet || 'px'}` : fallback.Tablet;
        const mobile = size?.Mobile ? `${size.Mobile}${units?.Mobile || 'px'}` : fallback.Mobile;
        return { desktop, tablet, mobile };
    };

    const getScale = (normalSize, hoverSize) => {
        const normal = parseFloat(normalSize);
        const hover = parseFloat(hoverSize);

        if (!normal || !hover) {
            return 1.15;
        }

        return Number((hover / normal).toFixed(4));
    };

    // ─── Global shorthand values

    // Marker size
    const markerSizeDesktop = imageHotspotMarkerSize?.Desktop ? `${imageHotspotMarkerSize.Desktop}${imageHotspotMarkerSizeUnits?.Desktop || 'px'}` : '35px';
    const markerSizeTablet = imageHotspotMarkerSize?.Tablet ? `${imageHotspotMarkerSize.Tablet}${imageHotspotMarkerSizeUnits?.Tablet || 'px'}` : markerSizeDesktop;
    const markerSizeMobile = imageHotspotMarkerSize?.Mobile ? `${imageHotspotMarkerSize.Mobile}${imageHotspotMarkerSizeUnits?.Mobile || 'px'}` : markerSizeDesktop;

    // Marker hover size
    const markerHoverSizeDesktop = imageHotspotMarkerHoverSize?.Desktop ? `${imageHotspotMarkerHoverSize.Desktop}${imageHotspotMarkerHoverSizeUnits?.Desktop || 'px'}` : '40px';
    const markerHoverSizeTablet = imageHotspotMarkerHoverSize?.Tablet ? `${imageHotspotMarkerHoverSize.Tablet}${imageHotspotMarkerHoverSizeUnits?.Tablet || 'px'}` : '37px';
    const markerHoverSizeMobile = imageHotspotMarkerHoverSize?.Mobile ? `${imageHotspotMarkerHoverSize.Mobile}${imageHotspotMarkerHoverSizeUnits?.Mobile || 'px'}` : '35px';

    // Marker border width
    const markerBorderWidthDesktop = imageHotspotMarkerBorderWidth?.Desktop ? `${imageHotspotMarkerBorderWidth.Desktop}${imageHotspotMarkerBorderWidthUnits?.Desktop || 'px'}` : '';
    const markerBorderWidthTablet = imageHotspotMarkerBorderWidth?.Tablet ? `${imageHotspotMarkerBorderWidth.Tablet}${imageHotspotMarkerBorderWidthUnits?.Tablet || 'px'}` : '';
    const markerBorderWidthMobile = imageHotspotMarkerBorderWidth?.Mobile ? `${imageHotspotMarkerBorderWidth.Mobile}${imageHotspotMarkerBorderWidthUnits?.Mobile || 'px'}` : '';

    // Marker border radius
    const markerBorderRadiusDesktop = imageHotspotMarkerBorderRadius?.Desktop ? `${imageHotspotMarkerBorderRadius.Desktop}${imageHotspotMarkerBorderRadiusUnits?.Desktop || '%'}` : '50%';
    const markerBorderRadiusTablet = imageHotspotMarkerBorderRadius?.Tablet ? `${imageHotspotMarkerBorderRadius.Tablet}${imageHotspotMarkerBorderRadiusUnits?.Tablet || '%'}` : markerBorderRadiusDesktop;
    const markerBorderRadiusMobile = imageHotspotMarkerBorderRadius?.Mobile ? `${imageHotspotMarkerBorderRadius.Mobile}${imageHotspotMarkerBorderRadiusUnits?.Mobile || '%'}` : markerBorderRadiusDesktop;

    // Title spacing
    const titlePaddingDesktop = buildFourSided(imageHotspotTitlePaddingDesktop, imageHotspotTitlePaddingUnits?.Desktop);
    const titlePaddingTablet = buildFourSided(imageHotspotTitlePaddingTablet, imageHotspotTitlePaddingUnits?.Tablet);
    const titlePaddingMobile = buildFourSided(imageHotspotTitlePaddingMobile, imageHotspotTitlePaddingUnits?.Mobile);

    const titleMarginDesktop = buildFourSided(imageHotspotTitleMarginDesktop, imageHotspotTitleMarginUnits?.Desktop)
        || (imageHotspotTitleMargin?.Desktop ? `${imageHotspotTitleMargin.Desktop}${imageHotspotTitleMarginUnits?.Desktop || 'px'}` : '');
    const titleMarginTablet = buildFourSided(imageHotspotTitleMarginTablet, imageHotspotTitleMarginUnits?.Tablet)
        || (imageHotspotTitleMargin?.Tablet ? `${imageHotspotTitleMargin.Tablet}${imageHotspotTitleMarginUnits?.Tablet || 'px'}` : '');
    const titleMarginMobile = buildFourSided(imageHotspotTitleMarginMobile, imageHotspotTitleMarginUnits?.Mobile)
        || (imageHotspotTitleMargin?.Mobile ? `${imageHotspotTitleMargin.Mobile}${imageHotspotTitleMarginUnits?.Mobile || 'px'}` : '');

    const titleBorderWidthDesktop = buildFourSided(imageHotspotTitleBorderWidthDesktop, imageHotspotTitleBorderWidthUnits?.Desktop);
    const titleBorderWidthTablet = buildFourSided(imageHotspotTitleBorderWidthTablet, imageHotspotTitleBorderWidthUnits?.Tablet);
    const titleBorderWidthMobile = buildFourSided(imageHotspotTitleBorderWidthMobile, imageHotspotTitleBorderWidthUnits?.Mobile);

    const titleBorderRadiusDesktop = buildFourSided(imageHotspotTitleBorderRadiusDesktop, imageHotspotTitleBorderRadiusUnits?.Desktop);
    const titleBorderRadiusTablet = buildFourSided(imageHotspotTitleBorderRadiusTablet, imageHotspotTitleBorderRadiusUnits?.Tablet);
    const titleBorderRadiusMobile = buildFourSided(imageHotspotTitleBorderRadiusMobile, imageHotspotTitleBorderRadiusUnits?.Mobile);

    const categoryPaddingDesktop = buildFourSided(imageHotspotCategoryPaddingDesktop, imageHotspotCategoryPaddingUnits?.Desktop);
    const categoryPaddingTablet = buildFourSided(imageHotspotCategoryPaddingTablet, imageHotspotCategoryPaddingUnits?.Tablet);
    const categoryPaddingMobile = buildFourSided(imageHotspotCategoryPaddingMobile, imageHotspotCategoryPaddingUnits?.Mobile);

    const categoryMarginDesktop = buildFourSided(imageHotspotCategoryMarginDesktop, imageHotspotCategoryMarginUnits?.Desktop);
    const categoryMarginTablet = buildFourSided(imageHotspotCategoryMarginTablet, imageHotspotCategoryMarginUnits?.Tablet);
    const categoryMarginMobile = buildFourSided(imageHotspotCategoryMarginMobile, imageHotspotCategoryMarginUnits?.Mobile);

    const categoryBorderWidthDesktop = buildFourSided(imageHotspotCategoryBorderWidthDesktop, imageHotspotCategoryBorderWidthUnits?.Desktop);
    const categoryBorderWidthTablet = buildFourSided(imageHotspotCategoryBorderWidthTablet, imageHotspotCategoryBorderWidthUnits?.Tablet);
    const categoryBorderWidthMobile = buildFourSided(imageHotspotCategoryBorderWidthMobile, imageHotspotCategoryBorderWidthUnits?.Mobile);

    const categoryBorderRadiusDesktop = buildFourSided(imageHotspotCategoryBorderRadiusDesktop, imageHotspotCategoryBorderRadiusUnits?.Desktop);
    const categoryBorderRadiusTablet = buildFourSided(imageHotspotCategoryBorderRadiusTablet, imageHotspotCategoryBorderRadiusUnits?.Tablet);
    const categoryBorderRadiusMobile = buildFourSided(imageHotspotCategoryBorderRadiusMobile, imageHotspotCategoryBorderRadiusUnits?.Mobile);

    // Description spacing
    const descPaddingDesktop = buildFourSided(imageHotspotDescPaddingDesktop, imageHotspotDescPaddingUnits?.Desktop);
    const descPaddingTablet = buildFourSided(imageHotspotDescPaddingTablet, imageHotspotDescPaddingUnits?.Tablet);
    const descPaddingMobile = buildFourSided(imageHotspotDescPaddingMobile, imageHotspotDescPaddingUnits?.Mobile);

    const descMarginDesktop = buildFourSided(imageHotspotDescMarginDesktop, imageHotspotDescMarginUnits?.Desktop)
        || (imageHotspotDescMargin?.Desktop ? `${imageHotspotDescMargin.Desktop}${imageHotspotDescMarginUnits?.Desktop || 'px'}` : '');
    const descMarginTablet = buildFourSided(imageHotspotDescMarginTablet, imageHotspotDescMarginUnits?.Tablet)
        || (imageHotspotDescMargin?.Tablet ? `${imageHotspotDescMargin.Tablet}${imageHotspotDescMarginUnits?.Tablet || 'px'}` : '');
    const descMarginMobile = buildFourSided(imageHotspotDescMarginMobile, imageHotspotDescMarginUnits?.Mobile)
        || (imageHotspotDescMargin?.Mobile ? `${imageHotspotDescMargin.Mobile}${imageHotspotDescMarginUnits?.Mobile || 'px'}` : '');

    const descBorderWidthDesktop = buildFourSided(imageHotspotDescBorderWidthDesktop, imageHotspotDescBorderWidthUnits?.Desktop);
    const descBorderWidthTablet = buildFourSided(imageHotspotDescBorderWidthTablet, imageHotspotDescBorderWidthUnits?.Tablet);
    const descBorderWidthMobile = buildFourSided(imageHotspotDescBorderWidthMobile, imageHotspotDescBorderWidthUnits?.Mobile);

    const descBorderRadiusDesktop = buildFourSided(imageHotspotDescBorderRadiusDesktop, imageHotspotDescBorderRadiusUnits?.Desktop);
    const descBorderRadiusTablet = buildFourSided(imageHotspotDescBorderRadiusTablet, imageHotspotDescBorderRadiusUnits?.Tablet);
    const descBorderRadiusMobile = buildFourSided(imageHotspotDescBorderRadiusMobile, imageHotspotDescBorderRadiusUnits?.Mobile);

    const pricePaddingDesktop = buildFourSided(imageHotspotPricePaddingDesktop, imageHotspotPricePaddingUnits?.Desktop);
    const pricePaddingTablet = buildFourSided(imageHotspotPricePaddingTablet, imageHotspotPricePaddingUnits?.Tablet);
    const pricePaddingMobile = buildFourSided(imageHotspotPricePaddingMobile, imageHotspotPricePaddingUnits?.Mobile);

    const priceMarginDesktop = buildFourSided(imageHotspotPriceMarginDesktop, imageHotspotPriceMarginUnits?.Desktop);
    const priceMarginTablet = buildFourSided(imageHotspotPriceMarginTablet, imageHotspotPriceMarginUnits?.Tablet);
    const priceMarginMobile = buildFourSided(imageHotspotPriceMarginMobile, imageHotspotPriceMarginUnits?.Mobile);

    const priceBorderWidthDesktop = buildFourSided(imageHotspotPriceBorderWidthDesktop, imageHotspotPriceBorderWidthUnits?.Desktop);
    const priceBorderWidthTablet = buildFourSided(imageHotspotPriceBorderWidthTablet, imageHotspotPriceBorderWidthUnits?.Tablet);
    const priceBorderWidthMobile = buildFourSided(imageHotspotPriceBorderWidthMobile, imageHotspotPriceBorderWidthUnits?.Mobile);

    const priceBorderRadiusDesktop = buildFourSided(imageHotspotPriceBorderRadiusDesktop, imageHotspotPriceBorderRadiusUnits?.Desktop);
    const priceBorderRadiusTablet = buildFourSided(imageHotspotPriceBorderRadiusTablet, imageHotspotPriceBorderRadiusUnits?.Tablet);
    const priceBorderRadiusMobile = buildFourSided(imageHotspotPriceBorderRadiusMobile, imageHotspotPriceBorderRadiusUnits?.Mobile);

    // Popover spacing (four-sided objects)
    const popoverPaddingDesktop = buildFourSided(imageHotspotPopoverPaddingDesktop, imageHotspotPopoverPaddingUnits?.Desktop);
    const popoverPaddingTablet = buildFourSided(imageHotspotPopoverPaddingTablet, imageHotspotPopoverPaddingUnits?.Tablet);
    const popoverPaddingMobile = buildFourSided(imageHotspotPopoverPaddingMobile, imageHotspotPopoverPaddingUnits?.Mobile);

    const popoverMarginDesktop = buildFourSided(imageHotspotPopoverMarginDesktop, imageHotspotPopoverMarginUnits?.Desktop);
    const popoverMarginTablet = buildFourSided(imageHotspotPopoverMarginTablet, imageHotspotPopoverMarginUnits?.Tablet);
    const popoverMarginMobile = buildFourSided(imageHotspotPopoverMarginMobile, imageHotspotPopoverMarginUnits?.Mobile);

    const imageBorderWidthDesktop = buildResponsiveBoxValue(imageHotspotImageBorderWidth, imageHotspotImageBorderWidthUnits, 'Desktop');
    const imageBorderWidthTablet = buildResponsiveBoxValue(imageHotspotImageBorderWidth, imageHotspotImageBorderWidthUnits, 'Tablet');
    const imageBorderWidthMobile = buildResponsiveBoxValue(imageHotspotImageBorderWidth, imageHotspotImageBorderWidthUnits, 'Mobile');

    const imageBorderRadiusDesktop = buildResponsiveBoxValue(imageHotspotImageBorderRadius, imageHotspotImageBorderRadiusUnits, 'Desktop');
    const imageBorderRadiusTablet = buildResponsiveBoxValue(imageHotspotImageBorderRadius, imageHotspotImageBorderRadiusUnits, 'Tablet');
    const imageBorderRadiusMobile = buildResponsiveBoxValue(imageHotspotImageBorderRadius, imageHotspotImageBorderRadiusUnits, 'Mobile');

    // Popover width
    const popoverWidthDesktop = imageHotspotPopoverWidth?.Desktop ? `${imageHotspotPopoverWidth.Desktop}${imageHotspotPopoverWidthUnits?.Desktop || 'px'}` : '250';
    const popoverWidthTablet = imageHotspotPopoverWidth?.Tablet ? `${imageHotspotPopoverWidth.Tablet}${imageHotspotPopoverWidthUnits?.Tablet || 'px'}` : popoverWidthDesktop;
    const popoverWidthMobile = imageHotspotPopoverWidth?.Mobile ? `${imageHotspotPopoverWidth.Mobile}${imageHotspotPopoverWidthUnits?.Mobile || 'px'}` : popoverWidthDesktop;

    // Popover border
    const popoverBorderRadiusDesktop = buildFourSided(imageHotspotPopoverBorderRadiusDesktop, imageHotspotPopoverBorderRadiusUnits?.Desktop) || '8px';
    const popoverBorderRadiusTablet = buildFourSided(imageHotspotPopoverBorderRadiusTablet, imageHotspotPopoverBorderRadiusUnits?.Tablet) || popoverBorderRadiusDesktop;
    const popoverBorderRadiusMobile = buildFourSided(imageHotspotPopoverBorderRadiusMobile, imageHotspotPopoverBorderRadiusUnits?.Mobile) || popoverBorderRadiusDesktop;

    const popoverBorderWidthDesktop = buildFourSided(imageHotspotPopoverBorderWidthDesktop, imageHotspotPopoverBorderWidthUnits?.Desktop);
    const popoverBorderWidthTablet = buildFourSided(imageHotspotPopoverBorderWidthTablet, imageHotspotPopoverBorderWidthUnits?.Tablet);
    const popoverBorderWidthMobile = buildFourSided(imageHotspotPopoverBorderWidthMobile, imageHotspotPopoverBorderWidthUnits?.Mobile);

    const popoverImageBorderWidthDesktop = buildFourSided(imageHotspotPopoverImageBorderWidthDesktop, imageHotspotPopoverImageBorderWidthUnits?.Desktop);
    const popoverImageBorderWidthTablet = buildFourSided(imageHotspotPopoverImageBorderWidthTablet, imageHotspotPopoverImageBorderWidthUnits?.Tablet);
    const popoverImageBorderWidthMobile = buildFourSided(imageHotspotPopoverImageBorderWidthMobile, imageHotspotPopoverImageBorderWidthUnits?.Mobile);

    const popoverImageBorderRadiusDesktop = buildFourSided(imageHotspotPopoverImageBorderRadiusDesktop, imageHotspotPopoverImageBorderRadiusUnits?.Desktop);
    const popoverImageBorderRadiusTablet = buildFourSided(imageHotspotPopoverImageBorderRadiusTablet, imageHotspotPopoverImageBorderRadiusUnits?.Tablet);
    const popoverImageBorderRadiusMobile = buildFourSided(imageHotspotPopoverImageBorderRadiusMobile, imageHotspotPopoverImageBorderRadiusUnits?.Mobile);

    // Block spacing
    const blockPaddingDesktop = buildFourSided(imageHotspotPaddingDesktop, imageHotspotPaddingUnits?.Desktop);
    const blockPaddingTablet = buildFourSided(imageHotspotPaddingTablet, imageHotspotPaddingUnits?.Tablet);
    const blockPaddingMobile = buildFourSided(imageHotspotPaddingMobile, imageHotspotPaddingUnits?.Mobile);

    const blockMarginDesktop = buildFourSided(imageHotspotMarginDesktop, imageHotspotMarginUnits?.Desktop);
    const blockMarginTablet = buildFourSided(imageHotspotMarginTablet, imageHotspotMarginUnits?.Tablet);
    const blockMarginMobile = buildFourSided(imageHotspotMarginMobile, imageHotspotMarginUnits?.Mobile);

    const blockBorderDesktop = buildFourSided(imageHotspotBorderDesktop, imageHotspotBorderUnits?.Desktop);
    const blockBorderTablet = buildFourSided(imageHotspotBorderTablet, imageHotspotBorderUnits?.Tablet);
    const blockBorderMobile = buildFourSided(imageHotspotBorderMobile, imageHotspotBorderUnits?.Mobile);

    const blockBorderRadiusDesktop = buildFourSided(imageHotspotBorderRadiusDesktop, imageHotspotBorderRadiusUnits?.Desktop);
    const blockBorderRadiusTablet = buildFourSided(imageHotspotBorderRadiusTablet, imageHotspotBorderRadiusUnits?.Tablet);
    const blockBorderRadiusMobile = buildFourSided(imageHotspotBorderRadiusMobile, imageHotspotBorderRadiusUnits?.Mobile);

    /** Default padding for Image Hotspots Popovers */
    const imageHotspotsPopoverPaddingDesktopWidth = `${imageHotspotsPopoverPaddingDesktop?.top}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.right}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.bottom}${imageHotspotsPopoverPaddingUnits?.Desktop} ${imageHotspotsPopoverPaddingDesktop?.left}${imageHotspotsPopoverPaddingUnits?.Desktop}`;
    const imageHotspotsPopoverPaddingTabletWidth = `${imageHotspotsPopoverPaddingTablet?.top}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.right}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.bottom}${imageHotspotsPopoverPaddingUnits?.Tablet} ${imageHotspotsPopoverPaddingTablet?.left}${imageHotspotsPopoverPaddingUnits?.Tablet}`;
    const imageHotspotsPopoverPaddingMobileWidth = `${imageHotspotsPopoverPaddingMobile?.top}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.right}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.bottom}${imageHotspotsPopoverPaddingUnits?.Mobile} ${imageHotspotsPopoverPaddingMobile?.left}${imageHotspotsPopoverPaddingUnits?.Mobile}`;

    /** Default border for Image Hotspots Popovers */
    const imageHotspotsPopoverBorderDesktopWidth = `${imageHotspotsPopoverBorderDesktop?.top}${imageHotspotsPopoverBorderUnits?.Desktop} ${imageHotspotsPopoverBorderDesktop?.right}${imageHotspotsPopoverBorderUnits?.Desktop} ${imageHotspotsPopoverBorderDesktop?.bottom}${imageHotspotsPopoverBorderUnits?.Desktop} ${imageHotspotsPopoverBorderDesktop?.left}${imageHotspotsPopoverBorderUnits?.Desktop}`;
    const imageHotspotsPopoverBorderTabletWidth = `${imageHotspotsPopoverBorderTablet?.top}${imageHotspotsPopoverBorderUnits?.Tablet} ${imageHotspotsPopoverBorderTablet?.right}${imageHotspotsPopoverBorderUnits?.Tablet} ${imageHotspotsPopoverBorderTablet?.bottom}${imageHotspotsPopoverBorderUnits?.Tablet} ${imageHotspotsPopoverBorderTablet?.left}${imageHotspotsPopoverBorderUnits?.Tablet}`;
    const imageHotspotsPopoverBorderMobileWidth = `${imageHotspotsPopoverBorderMobile?.top}${imageHotspotsPopoverBorderUnits?.Mobile} ${imageHotspotsPopoverBorderMobile?.right}${imageHotspotsPopoverBorderUnits?.Mobile} ${imageHotspotsPopoverBorderMobile?.bottom}${imageHotspotsPopoverBorderUnits?.Mobile} ${imageHotspotsPopoverBorderMobile?.left}${imageHotspotsPopoverBorderUnits?.Mobile}`;

    /** Default border radius for Image Hotspots Popovers */
    const imageHotspotsPopoverBorderRadiusDesktopWidth = `${imageHotspotsPopoverBorderRadiusDesktop?.top}${imageHotspotsPopoverBorderRadiusUnits?.Desktop} ${imageHotspotsPopoverBorderRadiusDesktop?.right}${imageHotspotsPopoverBorderRadiusUnits?.Desktop} ${imageHotspotsPopoverBorderRadiusDesktop?.bottom}${imageHotspotsPopoverBorderRadiusUnits?.Desktop} ${imageHotspotsPopoverBorderRadiusDesktop?.left}${imageHotspotsPopoverBorderRadiusUnits?.Desktop}`;
    const imageHotspotsPopoverBorderRadiusTabletWidth = `${imageHotspotsPopoverBorderRadiusTablet?.top}${imageHotspotsPopoverBorderRadiusUnits?.Tablet} ${imageHotspotsPopoverBorderRadiusTablet?.right}${imageHotspotsPopoverBorderRadiusUnits?.Tablet} ${imageHotspotsPopoverBorderRadiusTablet?.bottom}${imageHotspotsPopoverBorderRadiusUnits?.Tablet} ${imageHotspotsPopoverBorderRadiusTablet?.left}${imageHotspotsPopoverBorderRadiusUnits?.Tablet}`;
    const imageHotspotsPopoverBorderRadiusMobileWidth = `${imageHotspotsPopoverBorderRadiusMobile?.top}${imageHotspotsPopoverBorderRadiusUnits?.Mobile} ${imageHotspotsPopoverBorderRadiusMobile?.right}${imageHotspotsPopoverBorderRadiusUnits?.Mobile} ${imageHotspotsPopoverBorderRadiusMobile?.bottom}${imageHotspotsPopoverBorderRadiusUnits?.Mobile} ${imageHotspotsPopoverBorderRadiusMobile?.left}${imageHotspotsPopoverBorderRadiusUnits?.Mobile}`;


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
        const normalSize = getResponsiveSize(
            hotspot.markerSize,
            hotspot.markerSizeUnits,
            { Desktop: markerSizeDesktop, Tablet: markerSizeTablet, Mobile: markerSizeMobile }
        );
        const hoverSize = getResponsiveSize(
            hotspot.markerHoverSize,
            hotspot.markerHoverSizeUnits,
            { Desktop: markerHoverSizeDesktop, Tablet: markerHoverSizeTablet, Mobile: markerHoverSizeMobile }
        );

        return `
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                aspect-ratio: 1 / 1;
            }
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                width: ${normalSize.desktop};
                height: ${normalSize.desktop};
                aspect-ratio: 1 / 1;
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                transform: scale(${getScale(normalSize.desktop, hoverSize.desktop)});
            }

            @media only screen and (max-width: 1024px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                    aspect-ratio: 1 / 1;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    width: ${normalSize.desktop};
                    height: ${normalSize.desktop};
                    aspect-ratio: 1 / 1;
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                    transform: scale(${getScale(normalSize.tablet, hoverSize.tablet)});
                }
            }

            @media only screen and (max-width: 767px) {
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] {
                    aspect-ratio: 1 / 1;
                }
                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"] .fb-hotspot-trigger {
                    width: ${normalSize.desktop};
                    height: ${normalSize.desktop};
                    aspect-ratio: 1 / 1;
                }

                .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-trigger {
                    transform: scale(${getScale(normalSize.mobile, hoverSize.mobile)});
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


    const popoverBg = imageHotspotPopoverBgColor || '#ffffff';

    const resolvedPopoverBg = (() => {
        if (imageHotspotsPopoverNormalBackgroundType === 'gradient') {
            if (imageHotspotsPopoverNormalCustomGradientSwitcher && imageHotspotsPopoverNormalCustomGradientInputValue) {
                return imageHotspotsPopoverNormalCustomGradientInputValue;
            }
            return imageHotspotsPopoverNormalGradientColor || popoverBg;
        }
        return imageHotspotsPopoverNormalClassicColor || popoverBg;
    })();

    const popoverBgHover = imageHotspotPopoverBgHoverColor || popoverBg;
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
               ${imageHotspotsPopoverPaddingMobileWidth && imageHotspotsPopoverPaddingMobile?.top ? `padding: ${imageHotspotsPopoverPaddingMobileWidth};` : ''}
               ${imageHotspotsPopoverBorderMobileWidth && imageHotspotsPopoverBorderMobile?.top ? `border-width: ${imageHotspotsPopoverBorderMobileWidth};` : ''}
               ${imageHotspotsPopoverBorderRadiusMobileWidth && imageHotspotsPopoverBorderRadiusMobile?.top ? `border-radius: ${imageHotspotsPopoverBorderRadiusMobileWidth};` : ''}
               ${imageHotspotsPopoverBoxShadowHoverValues ? `box-shadow: ${imageHotspotsPopoverBoxShadowHoverValues};` : ''}
               ${imageHotspotsPopoverNormalBackgroundType === 'gradient' ? `  
                 ${imageHotspotsPopoverNormalCustomGradientSwitcher && imageHotspotsPopoverNormalCustomGradientInputValue ? `--fb-popover-bg: ${imageHotspotsPopoverNormalCustomGradientInputValue};` : `--fb-popover-bg: ${imageHotspotsPopoverNormalGradientColor};`}
                  `: `
                 ${imageHotspotsPopoverNormalClassicColor ? `--fb-popover-bg: ${imageHotspotsPopoverNormalClassicColor};` : ''}
               `}  
                position: absolute;
                inset: auto;
                ${placement.position}
                transform: ${placement.hiddenTransform};
                transform-origin: center;
                --fb-popover-bg: ${resolvedPopoverBg};
                background-color: var(--fb-popover-bg);
                width: ${popoverWidthDesktop};
                z-index: 200;
                min-width: ${popoverWidthDesktop};
                word-wrap: break-word;
                white-space: normal;
                box-sizing: border-box;
                display: block;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease, background-color 0.2s ease;
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"]:hover .fb-hotspot-popover,
            .${blockID} .fb-hotspot-marker[data-hotspot-id="${hotspot.id}"].locked .fb-hotspot-popover {
                opacity: 1;
                visibility: visible;
                pointer-events: auto;
                transform: ${placement.visibleTransform};
                --fb-popover-bg: ${popoverBgHover};
                background-color: var(--fb-popover-bg);
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
                    ${placement.notch}
                ` : `content: none; display: none;`}
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
            ${imageHotspotImageHeight?.Desktop && imageHotspotImageHeightUnits?.Desktop
            ? `height: ${imageHotspotImageHeight.Desktop}${imageHotspotImageHeightUnits.Desktop};`
            : ''}
            ${imageHotspotImageSize ? `object-fit: ${imageHotspotImageSize};` : ''}
            ${imageBorderWidthDesktop ? `border-width: ${imageBorderWidthDesktop};` : ''}
            ${imageBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotImageBorderColor ? `border-color: ${imageHotspotImageBorderColor};` : ''}
            ${imageBorderRadiusDesktop ? `border-radius: ${imageBorderRadiusDesktop};` : ''}
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
            box-sizing: border-box;
            width: ${markerSizeDesktop};
            height: ${markerSizeDesktop};
            ${imageHotspotMarkerSvg
            ? imageHotspotMarkerColor ? `color: ${imageHotspotMarkerColor};` : ''
            : imageHotspotMarkerColor ? `background-color: ${imageHotspotMarkerColor};` : ''}
            transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            border-radius: ${markerBorderRadiusDesktop};
            ${markerBorderWidthDesktop ? `border-width: ${markerBorderWidthDesktop};` : ''}
            ${imageHotspotMarkerBorderColor ? `border-color: ${imageHotspotMarkerBorderColor};` : ''}
            border-style: solid;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            transform-origin: center;
            transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 0;
            font-size: 0;
        }

        .${blockID} .fb-hotspot-trigger:hover {
            ${!imageHotspotMarkerSvg && imageHotspotMarkerHoverColor
            ? `background-color: ${imageHotspotMarkerHoverColor};`
            : ''}
            ${imageHotspotMarkerSvg && imageHotspotMarkerHoverColor
            ? `color: ${imageHotspotMarkerHoverColor};`
            : ''}
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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
            ${imageHotspotIconSize?.Desktop && imageHotspotIconSizeUnits?.Desktop
            ? `width: ${imageHotspotIconSize.Desktop}${imageHotspotIconSizeUnits.Desktop};
                   height: ${imageHotspotIconSize.Desktop}${imageHotspotIconSizeUnits.Desktop};`
            : 'width: 50%; height: 50%;'}
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
            ${imageHotspotTitleFontSize?.Desktop && imageHotspotTitleFontSizeUnits?.Desktop
            ? `font-size: ${imageHotspotTitleFontSize.Desktop}${imageHotspotTitleFontSizeUnits.Desktop};` : ''}
            ${imageHotspotTitleFontWeight ? `font-weight: ${imageHotspotTitleFontWeight};` : ''}
            ${imageHotspotTitleFontStyle ? `font-style: ${imageHotspotTitleFontStyle};` : ''}
            ${imageHotspotTitleColor ? `color: ${imageHotspotTitleColor};` : ''}
            ${imageHotspotTitleTextTransform ? `text-transform: ${imageHotspotTitleTextTransform};` : ''}
            ${imageHotspotTitleTextDecoration ? `text-decoration: ${imageHotspotTitleTextDecoration};` : ''}
            ${imageHotspotTitleLetterSpacing?.Desktop && imageHotspotTitleLetterSpacingUnits?.Desktop
            ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Desktop}${imageHotspotTitleLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotTitleLineHeight?.Desktop && imageHotspotTitleLineHeightUnits?.Desktop
            ? `line-height: ${imageHotspotTitleLineHeight.Desktop}${imageHotspotTitleLineHeightUnits.Desktop};` : ''}
            ${titlePaddingDesktop ? `padding: ${titlePaddingDesktop};` : ''}
            ${titleMarginDesktop ? `margin: ${titleMarginDesktop};` : ''}
            ${titleBorderWidthDesktop ? `border-width: ${titleBorderWidthDesktop};` : ''}
            ${titleBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotTitleBorderColor ? `border-color: ${imageHotspotTitleBorderColor};` : ''}
            ${titleBorderRadiusDesktop ? `border-radius: ${titleBorderRadiusDesktop};` : ''}
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
            ${imageHotspotDescFontSize?.Desktop
            ? `font-size: ${imageHotspotDescFontSize.Desktop}${imageHotspotDescFontSizeUnits?.Desktop || 'rem'};` : ''}
            ${imageHotspotDescFontWeight ? `font-weight: ${imageHotspotDescFontWeight};` : ''}
            ${imageHotspotDescFontStyle ? `font-style: ${imageHotspotDescFontStyle};` : ''}
            ${imageHotspotDescColor ? `color: ${imageHotspotDescColor};` : ''}
            ${imageHotspotDescTextTransform ? `text-transform: ${imageHotspotDescTextTransform};` : ''}
            ${imageHotspotDescTextDecoration ? `text-decoration: ${imageHotspotDescTextDecoration};` : ''}
            ${imageHotspotDescLetterSpacing?.Desktop && imageHotspotDescLetterSpacingUnits?.Desktop
            ? `letter-spacing: ${imageHotspotDescLetterSpacing.Desktop}${imageHotspotDescLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotDescLineHeight?.Desktop
            ? `line-height: ${imageHotspotDescLineHeight.Desktop}${imageHotspotDescLineHeightUnits?.Desktop || ''};`
            : 'line-height: 1.5;'}
            ${descPaddingDesktop ? `padding: ${descPaddingDesktop};` : ''}
            ${descMarginDesktop ? `margin: ${descMarginDesktop};` : ''}
            ${descBorderWidthDesktop ? `border-width: ${descBorderWidthDesktop};` : ''}
            ${descBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotDescBorderColor ? `border-color: ${imageHotspotDescBorderColor};` : ''}
            ${descBorderRadiusDesktop ? `border-radius: ${descBorderRadiusDesktop};` : ''}
        }

        .${blockID} .fb-hotspot-marker:hover .fb-hotspot-popover-description,
        .${blockID} .fb-hotspot-marker.locked .fb-hotspot-popover-description {
            ${imageHotspotDescHoverColor ? `color: ${imageHotspotDescHoverColor};` : ''}
        }

        .${blockID} .fb-hotspot-popover-category {
            box-sizing: border-box;
            white-space: normal;
            ${imageHotspotCategoryFontFamily ? `font-family: ${imageHotspotCategoryFontFamily};` : ''}
            ${imageHotspotCategoryFontSize?.Desktop
            ? `font-size: ${imageHotspotCategoryFontSize.Desktop}${imageHotspotCategoryFontSizeUnits?.Desktop || 'rem'};` : ''}
            ${imageHotspotCategoryFontWeight ? `font-weight: ${imageHotspotCategoryFontWeight};` : ''}
            ${imageHotspotCategoryFontStyle ? `font-style: ${imageHotspotCategoryFontStyle};` : ''}
            ${imageHotspotCategoryColor ? `color: ${imageHotspotCategoryColor};` : ''}
            ${imageHotspotCategoryTextTransform ? `text-transform: ${imageHotspotCategoryTextTransform};` : ''}
            ${imageHotspotCategoryTextDecoration ? `text-decoration: ${imageHotspotCategoryTextDecoration};` : ''}
            ${imageHotspotCategoryLetterSpacing?.Desktop && imageHotspotCategoryLetterSpacingUnits?.Desktop
            ? `letter-spacing: ${imageHotspotCategoryLetterSpacing.Desktop}${imageHotspotCategoryLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotCategoryLineHeight?.Desktop
            ? `line-height: ${imageHotspotCategoryLineHeight.Desktop}${imageHotspotCategoryLineHeightUnits?.Desktop || ''};` : ''}
            ${categoryPaddingDesktop ? `padding: ${categoryPaddingDesktop};` : ''}
            ${categoryMarginDesktop ? `margin: ${categoryMarginDesktop};` : ''}
            ${categoryBorderWidthDesktop ? `border-width: ${categoryBorderWidthDesktop};` : ''}
            ${categoryBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotCategoryBorderColor ? `border-color: ${imageHotspotCategoryBorderColor};` : ''}
            ${categoryBorderRadiusDesktop ? `border-radius: ${categoryBorderRadiusDesktop};` : ''}
        }

        .${blockID} .fb-hotspot-marker:hover .fb-hotspot-popover-category,
        .${blockID} .fb-hotspot-marker.locked .fb-hotspot-popover-category {
            ${imageHotspotCategoryHoverColor ? `color: ${imageHotspotCategoryHoverColor};` : ''}
        }

        .${blockID} .fb-hotspot-popover-price {
            box-sizing: border-box;
            ${imageHotspotPriceFontFamily ? `font-family: ${imageHotspotPriceFontFamily};` : ''}
            ${imageHotspotPriceFontSize?.Desktop
            ? `font-size: ${imageHotspotPriceFontSize.Desktop}${imageHotspotPriceFontSizeUnits?.Desktop || 'rem'};` : ''}
            ${imageHotspotPriceFontWeight ? `font-weight: ${imageHotspotPriceFontWeight};` : ''}
            ${imageHotspotPriceFontStyle ? `font-style: ${imageHotspotPriceFontStyle};` : ''}
            ${imageHotspotPriceColor ? `color: ${imageHotspotPriceColor};` : ''}
            ${imageHotspotPriceTextTransform ? `text-transform: ${imageHotspotPriceTextTransform};` : ''}
            ${imageHotspotPriceTextDecoration ? `text-decoration: ${imageHotspotPriceTextDecoration};` : ''}
            ${imageHotspotPriceLetterSpacing?.Desktop && imageHotspotPriceLetterSpacingUnits?.Desktop
            ? `letter-spacing: ${imageHotspotPriceLetterSpacing.Desktop}${imageHotspotPriceLetterSpacingUnits.Desktop};` : ''}
            ${imageHotspotPriceLineHeight?.Desktop
            ? `line-height: ${imageHotspotPriceLineHeight.Desktop}${imageHotspotPriceLineHeightUnits?.Desktop || ''};`
            : 'line-height: 1.4;'}
            ${pricePaddingDesktop ? `padding: ${pricePaddingDesktop};` : ''}
            ${priceMarginDesktop ? `margin: ${priceMarginDesktop};` : 'margin-top: 8px;'}
            ${priceBorderWidthDesktop ? `border-width: ${priceBorderWidthDesktop};` : ''}
            ${priceBorderWidthDesktop ? 'border-style: solid;' : ''}
            ${imageHotspotPriceBorderColor ? `border-color: ${imageHotspotPriceBorderColor};` : ''}
            ${priceBorderRadiusDesktop ? `border-radius: ${priceBorderRadiusDesktop};` : ''}
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


        @media only screen and (max-width: 1024px) {

            .${blockID} {
                ${blockPaddingTablet ? `padding: ${blockPaddingTablet};` : ''}
                ${blockMarginTablet ? `margin: ${blockMarginTablet};` : ''}
                ${blockBorderTablet ? `border-width: ${blockBorderTablet};` : ''}
                ${blockBorderRadiusTablet ? `border-radius: ${blockBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-base-image {
                ${imageHotspotImageHeight?.Tablet && imageHotspotImageHeightUnits?.Tablet
            ? `height: ${imageHotspotImageHeight.Tablet}${imageHotspotImageHeightUnits.Tablet};` : ''}
                ${imageBorderWidthTablet ? `border-width: ${imageBorderWidthTablet};` : ''}
                ${imageBorderRadiusTablet ? `border-radius: ${imageBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-trigger {
                width: ${markerSizeTablet};
                height: ${markerSizeTablet};
                ${markerBorderWidthTablet ? `border-width: ${markerBorderWidthTablet};` : ''}
                ${markerBorderRadiusTablet !== markerBorderRadiusDesktop ? `border-radius: ${markerBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id] .fb-hotspot-popover {
                ${popoverWidthTablet ? `width: ${popoverWidthTablet};` : ''}
                ${popoverPaddingTablet ? `padding: ${popoverPaddingTablet};` : ''}
                ${popoverMarginTablet ? `margin: ${popoverMarginTablet};` : ''}
                ${popoverBorderRadiusTablet ? `border-radius: ${popoverBorderRadiusTablet};` : ''}
                ${popoverBorderWidthTablet ? `border-width: ${popoverBorderWidthTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-image {
                box-sizing: border-box;
                ${popoverImageBorderWidthTablet ? `border-width: ${popoverImageBorderWidthTablet};` : ''}
                ${popoverImageBorderRadiusTablet ? `border-radius: ${popoverImageBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-icon {
                ${imageHotspotIconSize?.Tablet && imageHotspotIconSizeUnits?.Tablet
            ? `width: ${imageHotspotIconSize.Tablet}${imageHotspotIconSizeUnits.Tablet};
                       height: ${imageHotspotIconSize.Tablet}${imageHotspotIconSizeUnits.Tablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-title {
                ${imageHotspotTitleFontSize?.Tablet && imageHotspotTitleFontSizeUnits?.Tablet
            ? `font-size: ${imageHotspotTitleFontSize.Tablet}${imageHotspotTitleFontSizeUnits.Tablet};` : ''}
                ${imageHotspotTitleLetterSpacing?.Tablet && imageHotspotTitleLetterSpacingUnits?.Tablet
            ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Tablet}${imageHotspotTitleLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotTitleLineHeight?.Tablet && imageHotspotTitleLineHeightUnits?.Tablet
            ? `line-height: ${imageHotspotTitleLineHeight.Tablet}${imageHotspotTitleLineHeightUnits.Tablet};` : ''}
                ${titlePaddingTablet ? `padding: ${titlePaddingTablet};` : ''}
                ${titleMarginTablet ? `margin: ${titleMarginTablet};` : ''}
                ${titleBorderWidthTablet ? `border-width: ${titleBorderWidthTablet};` : ''}
                ${titleBorderRadiusTablet ? `border-radius: ${titleBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-description {
                ${imageHotspotDescFontSize?.Tablet
            ? `font-size: ${imageHotspotDescFontSize.Tablet}${imageHotspotDescFontSizeUnits?.Tablet || 'rem'};` : ''}
                ${imageHotspotDescLetterSpacing?.Tablet && imageHotspotDescLetterSpacingUnits?.Tablet
            ? `letter-spacing: ${imageHotspotDescLetterSpacing.Tablet}${imageHotspotDescLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotDescLineHeight?.Tablet
            ? `line-height: ${imageHotspotDescLineHeight.Tablet}${imageHotspotDescLineHeightUnits?.Tablet || ''};` : ''}
                ${descPaddingTablet ? `padding: ${descPaddingTablet};` : ''}
                ${descMarginTablet ? `margin: ${descMarginTablet};` : ''}
                ${descBorderWidthTablet ? `border-width: ${descBorderWidthTablet};` : ''}
                ${descBorderRadiusTablet ? `border-radius: ${descBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-category {
                ${imageHotspotCategoryFontSize?.Tablet
            ? `font-size: ${imageHotspotCategoryFontSize.Tablet}${imageHotspotCategoryFontSizeUnits?.Tablet || 'rem'};` : ''}
                ${imageHotspotCategoryLetterSpacing?.Tablet && imageHotspotCategoryLetterSpacingUnits?.Tablet
            ? `letter-spacing: ${imageHotspotCategoryLetterSpacing.Tablet}${imageHotspotCategoryLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotCategoryLineHeight?.Tablet
            ? `line-height: ${imageHotspotCategoryLineHeight.Tablet}${imageHotspotCategoryLineHeightUnits?.Tablet || ''};` : ''}
                ${categoryPaddingTablet ? `padding: ${categoryPaddingTablet};` : ''}
                ${categoryMarginTablet ? `margin: ${categoryMarginTablet};` : ''}
                ${categoryBorderWidthTablet ? `border-width: ${categoryBorderWidthTablet};` : ''}
                ${categoryBorderRadiusTablet ? `border-radius: ${categoryBorderRadiusTablet};` : ''}
            }

            .${blockID} .fb-hotspot-popover-price {
                ${imageHotspotPriceFontSize?.Tablet
            ? `font-size: ${imageHotspotPriceFontSize.Tablet}${imageHotspotPriceFontSizeUnits?.Tablet || 'rem'};` : ''}
                ${imageHotspotPriceLetterSpacing?.Tablet && imageHotspotPriceLetterSpacingUnits?.Tablet
            ? `letter-spacing: ${imageHotspotPriceLetterSpacing.Tablet}${imageHotspotPriceLetterSpacingUnits.Tablet};` : ''}
                ${imageHotspotPriceLineHeight?.Tablet
            ? `line-height: ${imageHotspotPriceLineHeight.Tablet}${imageHotspotPriceLineHeightUnits?.Tablet || ''};` : ''}
                ${pricePaddingTablet ? `padding: ${pricePaddingTablet};` : ''}
                ${priceMarginTablet ? `margin: ${priceMarginTablet};` : ''}
                ${priceBorderWidthTablet ? `border-width: ${priceBorderWidthTablet};` : ''}
                ${priceBorderRadiusTablet ? `border-radius: ${priceBorderRadiusTablet};` : ''}
            }
        }

        .${blockID} .fb-hotspot-social-links {
                gap: ${imageHotspotSocialLinksGap?.Tablet !== undefined && imageHotspotSocialLinksGap.Tablet !== '' ? `${imageHotspotSocialLinksGap.Tablet}${imageHotspotSocialLinksGapUnits?.Tablet || 'px'}` : ''};
            }

            .${blockID} .fb-hotspot-social-icon {
                ${imageHotspotSocialLinksIconSize?.Tablet !== undefined && imageHotspotSocialLinksIconSize.Tablet !== '' ? `width: ${imageHotspotSocialLinksIconSize.Tablet}${imageHotspotSocialLinksIconSizeUnits?.Tablet || 'px'}; height: ${imageHotspotSocialLinksIconSize.Tablet}${imageHotspotSocialLinksIconSizeUnits?.Tablet || 'px'};` : ''}
            }

        }
        }

        @media only screen and (max-width: 767px) {

            .${blockID} {
                ${blockPaddingMobile ? `padding: ${blockPaddingMobile};` : ''}
                ${blockMarginMobile ? `margin: ${blockMarginMobile};` : ''}
                ${blockBorderMobile ? `border-width: ${blockBorderMobile};` : ''}
                ${blockBorderRadiusMobile ? `border-radius: ${blockBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-base-image {
                ${imageHotspotImageHeight?.Mobile && imageHotspotImageHeightUnits?.Mobile
            ? `height: ${imageHotspotImageHeight.Mobile}${imageHotspotImageHeightUnits.Mobile};` : ''}
                ${imageBorderWidthMobile ? `border-width: ${imageBorderWidthMobile};` : ''}
                ${imageBorderRadiusMobile ? `border-radius: ${imageBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-trigger {
                width: ${markerSizeMobile};
                height: ${markerSizeMobile};
                ${markerBorderWidthMobile ? `border-width: ${markerBorderWidthMobile};` : ''}
                ${markerBorderRadiusMobile !== markerBorderRadiusDesktop ? `border-radius: ${markerBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-marker[data-hotspot-id] .fb-hotspot-popover {
                ${popoverWidthMobile ? `width: ${popoverWidthMobile};` : ''}
                ${popoverPaddingMobile ? `padding: ${popoverPaddingMobile};` : ''}
                ${popoverMarginMobile ? `margin: ${popoverMarginMobile};` : ''}
                ${popoverBorderRadiusMobile ? `border-radius: ${popoverBorderRadiusMobile};` : ''}
                ${popoverBorderWidthMobile ? `border-width: ${popoverBorderWidthMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-image {
                box-sizing: border-box;
                ${popoverImageBorderWidthMobile ? `border-width: ${popoverImageBorderWidthMobile};` : ''}
                ${popoverImageBorderRadiusMobile ? `border-radius: ${popoverImageBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-icon {
                ${imageHotspotIconSize?.Mobile && imageHotspotIconSizeUnits?.Mobile
            ? `width: ${imageHotspotIconSize.Mobile}${imageHotspotIconSizeUnits.Mobile};
                       height: ${imageHotspotIconSize.Mobile}${imageHotspotIconSizeUnits.Mobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-title {
                ${imageHotspotTitleFontSize?.Mobile && imageHotspotTitleFontSizeUnits?.Mobile
            ? `font-size: ${imageHotspotTitleFontSize.Mobile}${imageHotspotTitleFontSizeUnits.Mobile};` : ''}
                ${imageHotspotTitleLetterSpacing?.Mobile && imageHotspotTitleLetterSpacingUnits?.Mobile
            ? `letter-spacing: ${imageHotspotTitleLetterSpacing.Mobile}${imageHotspotTitleLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotTitleLineHeight?.Mobile && imageHotspotTitleLineHeightUnits?.Mobile
            ? `line-height: ${imageHotspotTitleLineHeight.Mobile}${imageHotspotTitleLineHeightUnits.Mobile};` : ''}
                ${titlePaddingMobile ? `padding: ${titlePaddingMobile};` : ''}
                ${titleMarginMobile ? `margin: ${titleMarginMobile};` : ''}
                ${titleBorderWidthMobile ? `border-width: ${titleBorderWidthMobile};` : ''}
                ${titleBorderRadiusMobile ? `border-radius: ${titleBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-description {
                ${imageHotspotDescFontSize?.Mobile
            ? `font-size: ${imageHotspotDescFontSize.Mobile}${imageHotspotDescFontSizeUnits?.Mobile || 'rem'};` : ''}
                ${imageHotspotDescLetterSpacing?.Mobile && imageHotspotDescLetterSpacingUnits?.Mobile
            ? `letter-spacing: ${imageHotspotDescLetterSpacing.Mobile}${imageHotspotDescLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotDescLineHeight?.Mobile
            ? `line-height: ${imageHotspotDescLineHeight.Mobile}${imageHotspotDescLineHeightUnits?.Mobile || ''};` : ''}
                ${descPaddingMobile ? `padding: ${descPaddingMobile};` : ''}
                ${descMarginMobile ? `margin: ${descMarginMobile};` : ''}
                ${descBorderWidthMobile ? `border-width: ${descBorderWidthMobile};` : ''}
                ${descBorderRadiusMobile ? `border-radius: ${descBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-category {
                ${imageHotspotCategoryFontSize?.Mobile
            ? `font-size: ${imageHotspotCategoryFontSize.Mobile}${imageHotspotCategoryFontSizeUnits?.Mobile || 'rem'};` : ''}
                ${imageHotspotCategoryLetterSpacing?.Mobile && imageHotspotCategoryLetterSpacingUnits?.Mobile
            ? `letter-spacing: ${imageHotspotCategoryLetterSpacing.Mobile}${imageHotspotCategoryLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotCategoryLineHeight?.Mobile
            ? `line-height: ${imageHotspotCategoryLineHeight.Mobile}${imageHotspotCategoryLineHeightUnits?.Mobile || ''};` : ''}
                ${categoryPaddingMobile ? `padding: ${categoryPaddingMobile};` : ''}
                ${categoryMarginMobile ? `margin: ${categoryMarginMobile};` : ''}
                ${categoryBorderWidthMobile ? `border-width: ${categoryBorderWidthMobile};` : ''}
                ${categoryBorderRadiusMobile ? `border-radius: ${categoryBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-popover-price {
                ${imageHotspotPriceFontSize?.Mobile
            ? `font-size: ${imageHotspotPriceFontSize.Mobile}${imageHotspotPriceFontSizeUnits?.Mobile || 'rem'};` : ''}
                ${imageHotspotPriceLetterSpacing?.Mobile && imageHotspotPriceLetterSpacingUnits?.Mobile
            ? `letter-spacing: ${imageHotspotPriceLetterSpacing.Mobile}${imageHotspotPriceLetterSpacingUnits.Mobile};` : ''}
                ${imageHotspotPriceLineHeight?.Mobile
            ? `line-height: ${imageHotspotPriceLineHeight.Mobile}${imageHotspotPriceLineHeightUnits?.Mobile || ''};` : ''}
                ${pricePaddingMobile ? `padding: ${pricePaddingMobile};` : ''}
                ${priceMarginMobile ? `margin: ${priceMarginMobile};` : ''}
                ${priceBorderWidthMobile ? `border-width: ${priceBorderWidthMobile};` : ''}
                ${priceBorderRadiusMobile ? `border-radius: ${priceBorderRadiusMobile};` : ''}
            }

            .${blockID} .fb-hotspot-social-links {
                gap: ${imageHotspotSocialLinksGap?.Mobile !== undefined && imageHotspotSocialLinksGap.Mobile !== '' ? `${imageHotspotSocialLinksGap.Mobile}${imageHotspotSocialLinksGapUnits?.Mobile || 'px'}` : ''};
            }

            .${blockID} .fb-hotspot-social-icon {
                ${imageHotspotSocialLinksIconSize?.Mobile !== undefined && imageHotspotSocialLinksIconSize.Mobile !== '' ? `width: ${imageHotspotSocialLinksIconSize.Mobile}${imageHotspotSocialLinksIconSizeUnits?.Mobile || 'px'};
                height: ${imageHotspotSocialLinksIconSize.Mobile}${imageHotspotSocialLinksIconSizeUnits?.Mobile || 'px'};`
            : ''}
            }
        }
    `;

    const customCssOutput = getCustomCss(imageHotspotCustomCSS, `.${blockID}`);
    return `${fbHotspotStyle} ${customCssOutput}`.replace(/\s+/g, ' ').trim();
};

export default generateImageHotspotStyle;
