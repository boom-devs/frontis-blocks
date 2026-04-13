/**
 * Pricing Table Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generatePricingTableStyle = (attributes) => { 

    const {
        blockID,
        // deviceType,
        blockStyle,
        columns,
        pricingPresetStyle,
        featureTitleAlignment,
        featureTitlePosition,
        featureTitlePositionUnits,

        /** Start Top Section */
        pricingGlobalStyleSwitcher,
        pricingTopSectionBgColorSwitcher,
        pricingTopSectionNormalBackgroundType,
        pricingTopSectionNormalClassicColor,
        pricingTopSectionNormalGradientColor,
        pricingTopSectionNormalCustomGradientSwitcher,
        pricingTopSectionNormalCustomGradientInputValue,

        pricingTopSectionHoverBackgroundType,
        pricingTopSectionHoverClassicColor,
        pricingTopSectionHoverGradientColor,
        pricingTopSectionHoverCustomGradientSwitcher,
        pricingTopSectionHoverCustomGradientInputValue,

        pricingTopSectionPaddingUnits,
        pricingTopSectionDesktopPadding,
        pricingTopSectionTabletPadding,
        pricingTopSectionMobilePadding,
        pricingTopSectionPaddingLink,

        pricingTopSectionBorder,
        pricingTopSectionBorderColorSwitcher,
        pricingTopSectionBorderColor,
        pricingTopSectionBorderHoverColor,

        pricingTopSectionBorderUnits,
        pricingTopSectionBorderDesktop,
        pricingTopSectionBorderTablet,
        pricingTopSectionBorderMobile,
        pricingTopSectionBorderLink,

        pricingTopSectionBorderRadiusUnits,
        pricingTopSectionBorderRadiusDesktop,
        pricingTopSectionBorderRadiusTablet,
        pricingTopSectionBorderRadiusMobile,
        pricingTopSectionBorderRadiusLink,

        pricingTopSectionTextColorSwitcher,
        pricingTopSectionTextColor,
        pricingTopSectionTextHoverColor,

        pricingTopSectionTextGlobalTypoSwitcher,
        pricingTopSectionTextGlobalTypographyData,
        pricingTopSectionTextGlobalTypoType,
        pricingTopSectionTextGlobalTypoOption,
        pricingTopSectionTextFontFamily,
        pricingTopSectionTextFontSize,
        pricingTopSectionTextFontSizeUnits,
        pricingTopSectionTextFontWeight,
        pricingTopSectionTextFontStyle,
        pricingTopSectionTextTextTransform,
        pricingTopSectionTextTextDecoration,
        pricingTopSectionTextLetterSpacing,
        pricingTopSectionTextLetterSpacingUnits,
        pricingTopSectionTextLineHeight,
        pricingTopSectionTextLineHeightUnits,

        pricingTopSectionTextPaddingUnits,
        pricingTopSectionTextDesktopPadding,
        pricingTopSectionTextTabletPadding,
        pricingTopSectionTextMobilePadding,
        pricingTopSectionTextPaddingLink,

        /** End Top Section */
        /** Start Header */
        pricingSectionTopSwitcher,
        pricingSectionTopText,
        pricingTitleTag,
        pricingTitle,
        pricingSubTitleTag,
        pricingSubTitleSwitcher,
        pricingSubTitle,
        pricingIconAlign,
        pricingIcon,
        /** End Header */

        /** Start Pricing */
        normalPrice,
        salePriceSwitcher,
        salePrice,
        priceCurrency,
        priceCurrencyPosition,
        pricePeriod,
        pricePeriodSeparator,

        /** Start Feature */
        priceHideFeaturesSwitcher,
        priceFeatureIconSwitcher,
        priceFeatureItems,
        
        /** End Feature */

        /** Start Button */
        priceButtonSwitcher,
        priceButtonText,
        priceButtonUrl,
        priceButtonTargetUrl,
        priceButtonIconAlign,
        priceButtonIcon,
        priceButtonIconPosition,
        priceButtonIconSpacing,
        priceButtonIconSpacingUnits,
        /** End Button */

        /** Start Style Settings */
        pricingHeaderBgColorSwitcher,
        pricingHeaderBgColor,
        pricingHeaderBgHoverColor,
        /** Start Padding */
        pricingHeaderPaddingUnits,
        pricingHeaderDesktopPadding,
        pricingHeaderTabletPadding,
        pricingHeaderMobilePadding,
        pricingHeaderPaddingLink,
        /** End Padding */
        /** Start Border */
        pricingHeaderBorder,
        pricingHeaderBorderColorSwitcher,
        pricingHeaderBorderColor,
        pricingHeaderBorderHoverColor,
        pricingHeaderBorderUnits,
        pricingHeaderBorderDesktop,
        pricingHeaderBorderTablet,
        pricingHeaderBorderMobile,
        pricingHeaderBorderLink,
        /** End Border */

        /** Start Border Radius */
        pricingHeaderBorderRadiusUnits,
        pricingHeaderBorderRadiusDesktop,
        pricingHeaderBorderRadiusTablet,
        pricingHeaderBorderRadiusMobile,
        pricingHeaderBorderRadiusLink,
        /**End Header */

        /** Start Icon Style */
        priceIconColorSwitcher,
        priceIconColor,
        priceIconHoverColor,
        priceIconBgColorSwitcher,
        priceIconBgColor,
        priceIconBgHoverColor,
        priceIconSize,
        priceIconSizeUnits,
        priceIconBgSize,
        priceIconBgSizeUnits,

        priceIconPositionSwitcher,
        priceIconPositionTop,
        priceIconPositionTopUnits,
        priceIconPositionLeft,
        priceIconPositionLeftUnits,

        /** Start Icon Border */
        priceIconBorder,
        priceIconBorderColorSwitcher,
        priceIconBorderColor,
        priceIconBorderHoverColor,
        priceIconBorderUnits,
        priceIconBorderDesktop,
        priceIconBorderTablet,
        priceIconBorderMobile,
        priceIconBorderLink,
        /** End Icon Border */

        /** Start Icon Border Radius */
        priceIconBorderRadiusUnits,
        priceIconBorderRadiusDesktop,
        priceIconBorderRadiusTablet,
        priceIconBorderRadiusMobile,
        priceIconBorderRadiusLink,
        /** End Icon Border Radius */
        /** End Icon Style */

        /** Start Pricing Style */
        pricingAlignment,
        normalPricingGlobalTypoSwitcher,
        normalPricingGlobalTypographyData,
        normalPricingGlobalTypoType,
        normalPricingGlobalTypoOption,
        normalPricingFontFamily,
        normalPricingFontSize,
        normalPricingFontSizeUnits,
        normalPricingFontWeight,
        normalPricingFontStyle,
        normalPricingTextTransform,
        normalPricingTextDecoration,
        normalPricingLetterSpacing,
        normalPricingLetterSpacingUnits,
        normalPricingLineHeight,
        normalPricingLineHeightUnits,
        normalPricingColorSwitcher,
        normalPricingColor,
        normalPricingHoverColor,

        salePricingGlobalTypoSwitcher,
        salePricingGlobalTypographyData,
        salePricingGlobalTypoType,
        salePricingGlobalTypoOption,
        salePricingFontFamily,
        salePricingFontSize,
        salePricingFontSizeUnits,
        salePricingFontWeight,
        salePricingFontStyle,
        salePricingTextTransform,
        salePricingTextDecoration,
        salePricingLetterSpacing,
        salePricingLetterSpacingUnits,
        salePricingLineHeight,
        salePricingLineHeightUnits,
        salePricingColorSwitcher,
        salePricingColor,
        salePricingHoverColor,

        priceCurrencyGlobalTypoSwitcher,
        priceCurrencyGlobalTypographyData,
        priceCurrencyGlobalTypoType,
        priceCurrencyGlobalTypoOption,
        priceCurrencyFontFamily,
        priceCurrencyFontSize,
        priceCurrencyFontSizeUnits,
        priceCurrencyFontWeight,
        priceCurrencyFontStyle,
        priceCurrencyTextTransform,
        priceCurrencyTextDecoration,
        priceCurrencyLetterSpacing,
        priceCurrencyLetterSpacingUnits,
        priceCurrencyLineHeight,
        priceCurrencyLineHeightUnits,
        priceCurrencyColorSwitcher,
        priceCurrencyColor,
        priceCurrencyHoverColor,

        pricePeriodGlobalTypoSwitcher,
        pricePeriodGlobalTypographyData,
        pricePeriodGlobalTypoType,
        pricePeriodGlobalTypoOption,
        pricePeriodFontFamily,
        pricePeriodFontSize,
        pricePeriodFontSizeUnits,
        pricePeriodFontWeight,
        pricePeriodFontStyle,
        pricePeriodTextTransform,
        pricePeriodTextDecoration,
        pricePeriodLetterSpacing,
        pricePeriodLetterSpacingUnits,
        pricePeriodLineHeight,
        pricePeriodLineHeightUnits,
        pricePeriodColorSwitcher,
        pricePeriodColor,
        pricePeriodHoverColor,
        /** End Pricing Style */

        pricePaddingUnits, 
        priceDesktopPadding,
        priceTabletPadding,
        priceMobilePadding,
        pricePaddingLink,

        /**Start Title and Subtitle Style */
        pricingTitleAlignment,
        pricingTitleColorSwitcher,
        pricingTitleColor,
        pricingTitleHoverColor,
        pricingTitleGlobalTypoSwitcher,
        pricingTitleGlobalTypographyData,
        pricingTitleGlobalTypoType,
        pricingTitleGlobalTypoOption,
        pricingTitleFontFamily,
        pricingTitleFontSize,
        pricingTitleFontSizeUnits,
        pricingTitleFontWeight,
        pricingTitleFontStyle,
        pricingTitleTextTransform,
        pricingTitleTextDecoration,
        pricingTitleLetterSpacing,
        pricingTitleLetterSpacingUnits,
        pricingTitleLineHeight,
        pricingTitleLineHeightUnits,

        pricingTitlePaddingUnits,
        pricingTitleDesktopPadding,
        pricingTitleTabletPadding,
        pricingTitleMobilePadding,
        pricingTitlePaddingLink,

        pricingTitleMarginUnits,
        pricingTitleDesktopMargin,
        pricingTitleTabletMargin,
        pricingTitleMobileMargin,
        pricingTitleMarginLink,

        pricingSubtitleColorSwitcher,
        pricingSubtitleColor,
        pricingSubtitleHoverColor,
        pricingSubtitleGlobalTypoSwitcher,
        pricingSubtitleGlobalTypographyData,
        pricingSubtitleGlobalTypoType,
        pricingSubtitleGlobalTypoOption,
        pricingSubtitleFontFamily,
        pricingSubtitleFontSize,
        pricingSubtitleFontSizeUnits,
        pricingSubtitleFontWeight,
        pricingSubtitleFontStyle,
        pricingSubtitleTextTransform,
        pricingSubtitleTextDecoration,
        pricingSubtitleLetterSpacing,
        pricingSubtitleLetterSpacingUnits,
        pricingSubtitleLineHeight,
        pricingSubtitleLineHeightUnits,

        pricingSubtitlePaddingUnits,
        pricingSubtitleDesktopPadding,
        pricingSubtitleTabletPadding,
        pricingSubtitleMobilePadding,
        pricingSubtitlePaddingLink,

        pricingSubtitleMarginUnits,
        pricingSubtitleDesktopMargin,
        pricingSubtitleTabletMargin,
        pricingSubtitleMobileMargin,
        pricingSubtitleMarginLink,
        /**end Title and Subtitle Style */

         /** Start Feature Title */
         featureTitleColorSwitcher,
         featureTitleColor,
         featureTitleHoverColor,
 
         featureTitleGlobalTypoSwitcher,
         featureTitleGlobalTypographyData,
         featureTitleGlobalTypoType,
         featureTitleGlobalTypoOption,
         featureTitleFontFamily,
         featureTitleFontSize,
         featureTitleFontSizeUnits,
         featureTitleFontWeight,
         featureTitleFontStyle,
         featureTitleTextTransform,
         featureTitleTextDecoration,
         featureTitleLetterSpacing,
         featureTitleLetterSpacingUnits,
         featureTitleLineHeight,
         featureTitleLineHeightUnits,
         /** End Feature Title */

        /** Start Feature Icon */
        FeatureListGap,
        FeatureListGapUnits,
        priceFeatureAlignment,
        priceFeatureIconColorSwitcher,
        priceFeatureIconColor,
        priceFeatureIconHoverColor,
        priceFeatureIconSize,
        priceFeatureIconSizeUnits,
        /** End Feature Icon */

        /** Start Feature Title */
        pricingfeatureTitleColorSwitcher,
        pricingfeatureTitleColor,
        pricingfeatureTitleHoverColor,
        pricingfeatureTitleGlobalTypoSwitcher,
        pricingfeatureTitleGlobalTypographyData,
        pricingfeatureTitleGlobalTypoType,
        pricingfeatureTitleGlobalTypoOption,
        pricingfeatureTitleFontFamily,
        pricingfeatureTitleFontSize,
        pricingfeatureTitleFontSizeUnits,
        pricingfeatureTitleFontWeight,
        pricingfeatureTitleFontStyle,
        pricingfeatureTitleTextTransform,
        pricingfeatureTitleTextDecoration,
        pricingfeatureTitleLetterSpacing,
        pricingfeatureTitleLetterSpacingUnits,
        pricingfeatureTitleLineHeight,
        pricingfeatureTitleLineHeightUnits,
        /** End Feature Title */

        /** Start Feature Item Padding */
        priceFeatureItemPaddingUnits,
        priceFeatureItemDesktopPadding,
        priceFeatureItemTabPadding,
        priceFeatureItemMobilePadding,
        priceFeatureItemPaddingLink,
        /** End Feature Item Padding */

        /** Start Feature Margin */
        priceFeatureItemMarginUnits,
        priceFeatureItemDesktopMargin,
        priceFeatureItemTabMargin,
        priceFeatureItemMobileMargin,
        priceFeatureItemMarginLink,
        /** End Feature Margin */

        /** Start Feature Border */
        priceFeatureItemBorderBottom,
        priceFeatureItemBorder,
        priceFeatureItemBorderColorSwitcher,
        priceFeatureItemBorderColor,
        priceFeatureItemBorderHoverColor,

        priceFeatureItemBorderUnits,
        priceFeatureItemDesktopBorder,
        priceFeatureItemTabBorder,
        priceFeatureItemMobileBorder,
        priceFeatureItemBorderLink,
        /** End Feature Border */

        /** Start Feature Border Radius */
        priceFeatureItemBorderRadiusUnits,
        priceFeatureItemDesktopBorderRadius,
        priceFeatureItemTabBorderRadius,
        priceFeatureItemMobileBorderRadius,
        priceFeatureItemBorderRadiusLink,
        /** End Feature Border Radius */

        /**feature background */
        priceFeatureAreaBgColorSwitcher,
        priceFeatureAreaNormalBackgroundType,
        priceFeatureAreaNormalClassicColor,
        priceFeatureAreaNormalGradientColor,
        priceFeatureAreaNormalCustomGradientSwitcher,
        priceFeatureAreaNormalCustomGradientInputValue,
        priceFeatureAreaHoverBackgroundType,
        priceFeatureAreaHoverClassicColor,
        priceFeatureAreaHoverGradientColor,
        priceFeatureAreaHoverCustomGradientSwitcher,
        priceFeatureAreaHoverCustomGradientInputValue,

        /** Start Feature Padding */
        priceFeaturePaddingUnits,
        priceFeatureDesktopPadding,
        priceFeatureTabPadding,
        priceFeatureMobilePadding,
        priceFeaturePaddingLink,
        /** End Feature Padding */

        /** Start Feature Margin */
        priceFeatureMarginUnits,
        priceFeatureDesktopMargin,
        priceFeatureTabMargin,
        priceFeatureMobileMargin,
        priceFeatureMarginLink,

        /** Start price Button */
        headerAlignment,
        priceButtonWidth,
        priceButtonWidthUnits,

        priceButtonGlobalTypoSwitcher,
        priceButtonGlobalTypographyData,
        priceButtonGlobalTypoType,
        priceButtonGlobalTypoOption,
        priceButtonFontFamily,
        priceButtonFontSize,
        priceButtonFontSizeUnits,
        priceButtonFontWeight,
        priceButtonFontStyle,
        priceButtonTextTransform,
        priceButtonTextDecoration,
        priceButtonLetterSpacing,
        priceButtonLetterSpacingUnits,
        priceButtonLineHeight,
        priceButtonLineHeightUnits,

        priceButtonColorSwitcher,
        priceButtonColor,
        priceButtonHoverColor,
        priceButtonBgHoverColor,

        priceButtonBackgroundColorSwitcher,
        priceButtonNormalBackgroundType,
        priceButtonNormalClassicColor,
        priceButtonNormalGradientColor,
        priceButtonNormalCustomGradientSwitcher,
        priceButtonNormalCustomGradientInputValue,

        priceButtonHoverBackgroundType,
        priceButtonHoverClassicColor,
        priceButtonHoverGradientColor,
        priceButtonHoverCustomGradientSwitcher,
        priceButtonHoverCustomGradientInputValue,

        priceButtonPaddingUnits,
        priceButtonDesktopPadding,
        priceButtonTabPadding,
        priceButtonMobilePadding,
        priceButtonPaddingLink,

        priceButtonMarginUnits,
        priceButtonDesktopMargin,
        priceButtonTabMargin,
        priceButtonMobileMargin,
        priceButtonMarginLink,

        priceButtonBorder,
        priceButtonBorderColorSwitcher,
        priceButtonBorderColor,
        priceButtonBorderHoverColor,

        priceButtonBorderUnits,
        priceButtonDesktopBorderWidth,
        priceButtonTabBorderWidth,
        priceButtonMobileBorderWidth,
        priceButtonBorderLink,

        priceButtonBorderRadiusUnits,
        priceButtonDesktopBorderRadiusWidth,
        priceButtonTabBorderRadiusWidth,
        priceButtonMobileBorderRadiusWidth,
        priceButtonBorderRadiusLink,

        priceButtonIconColorSwitcher,
        priceButtonIconColor,
        priceButtonIconHoverColor,
        priceButtonIconSize,
        priceButtonIconSizeUnits,
        /** End price Button */

        priceColumnGap,
        priceColumnGapUnits,

        priceColumnPaddingUnits,
        priceColumnDesktopPadding,
        priceColumnTabletPadding,
        priceColumnMobilePadding,
        priceColumnPaddingLink,

        priceColumnMarginUnits,
        priceColumnDesktopMargin,
        priceColumnTabletMargin,
        priceColumnMobileMargin,
        priceColumnMarginLink,

        priceColumnBackgroundColorSwitcher,
        priceColumnNormalBackgroundType,
        priceColumnNormalClassicColor,
        priceColumnNormalGradientColor,
        priceColumnNormalCustomGradientSwitcher,
        priceColumnNormalCustomGradientInputValue,
        priceColumnHoverBackgroundType,
        priceColumnHoverClassicColor,
        priceColumnHoverGradientColor,
        priceColumnHoverCustomGradientSwitcher,
        priceColumnHoverCustomGradientInputValue,

        priceColumnBorder,
        priceColumnBorderColorSwitcher,
        priceColumnBorderColor,
        priceColumnBorderHoverColor,

        priceColumnBorderUnits,
        priceColumnDesktopBorderWidth,
        priceColumnTabletBorderWidth,
        priceColumnMobileBorderWidth,
        priceColumnBorderLink,

        priceColumnBorderRadiusUnits,
        priceColumnDesktopBorderRadiusWidth,
        priceColumnTabBorderRadiusWidth,
        priceColumnMobileBorderRadiusWidth,
        priceColumnBorderRadiusLink,

        /** Start Global Settings */
        priceGlobalZIndex,
        pricingTableOverflow,
        priceGlobalPaddingUnits,
        priceGlobalPaddingDesktop,
        priceGlobalPaddingTablet,
        priceGlobalPaddingMobile,
        priceGlobalPaddingLink,
        priceGlobalMarginUnits,
        priceGlobalMarginDesktop,
        priceGlobalMarginTablet,
        priceGlobalMarginMobile,
        priceGlobalMarginLink,

        priceGlobalBackgroundColorSwitcher,
        priceGlobalNormalBackgroundType,
        priceGlobalNormalClassicColor,
        priceGlobalNormalGradientColor,
        priceGlobalNormalCustomGradientSwitcher,
        priceGlobalNormalCustomGradientInputValue,
        priceGlobalHoverBackgroundType,
        priceGlobalHoverClassicColor,
        priceGlobalHoverGradientColor,
        priceGlobalHoverCustomGradientSwitcher,
        priceGlobalHoverCustomGradientInputValue,

        priceGlobalBorder,
        priceGlobalBorderColorSwitcher,
        priceGlobalBorderColor,
        priceGlobalBorderHoverColor,
        priceGlobalBorderUnits,
        priceGlobalBorderDesktop,
        priceGlobalBorderTablet,
        priceGlobalBorderMobile,
        priceGlobalBorderLink,
        priceGlobalBorderRadiusUnits,
        priceGlobalBorderRadiusDesktop,
        priceGlobalBorderRadiusTablet,
        priceGlobalBorderRadiusMobile,
        priceGlobalBorderRadiusLink,
        priceGlobalBoxShadowSwitcher,
        priceGlobalBoxShadowValues,
        priceGlobalBoxShadowCssValue,
        priceGlobalBoxShadowHoverValues,
        priceGlobalBoxShadowHoverCssValue,
        /** End Global Settings */

        activationContentAlignment,
        priceAfterTextSwitcher,
        priceAfterText,
        priceAfterTextGlobalTypoSwitcher,
        priceAfterTextGlobalTypographyData,
        priceAfterTextGlobalTypoType,
        priceAfterTextGlobalTypoOption,
        priceAfterTextFontFamily,
        priceAfterTextFontSize,
        priceAfterTextFontSizeUnits,
        priceAfterTextFontWeight,
        priceAfterTextFontStyle,
        priceAfterTextTextTransform,
        priceAfterTextTextDecoration,
        priceAfterTextLetterSpacing,
        priceAfterTextLetterSpacingUnits,
        priceAfterTextLineHeight,
        priceAfterTextLineHeightUnits,
        priceAfterTextColorSwitcher,
        priceAfterTextColor,
        priceAfterTextHoverColor,
        
        priceAfterTextBgColorSwitcher,
        priceAfterTextNormalBackgroundType,
        priceAfterTextNormalClassicColor,
        priceAfterTextNormalGradientColor,
        priceAfterTextNormalCustomGradientSwitcher,
        priceAfterTextNormalCustomGradientInputValue,
        priceAfterTextHoverBackgroundType,
        priceAfterTextHoverClassicColor,
        priceAfterTextHoverGradientColor,
        priceAfterTextHoverCustomGradientSwitcher,
        priceAfterTextHoverCustomGradientInputValue,

        priceAfterTextPaddingUnits,
        priceAfterTextPaddingDesktop,
        priceAfterTextPaddingTablet,
        priceAfterTextPaddingMobile,
        priceAfterTextPaddingLink,

        priceAfterTextBorder,
        priceAfterTextBorderColorSwitcher,
        priceAfterTextBorderColor,
        priceAfterTextBorderHoverColor,

        priceAfterTextBorderUnits,
        priceAfterTextBorderDesktop,
        priceAfterTextBorderTablet,
        priceAfterTextBorderMobile,
        priceAfterTextBorderLink,

        priceAfterTextBorderRadiusUnits,
        priceAfterTextBorderRadiusDesktop,
        priceAfterTextBorderRadiusTablet,
        priceAfterTextBorderRadiusMobile,
        priceAfterTextBorderRadiusLink,

        priceFeatureAfterTextSwitcher,
        priceFeatureAfterText,
        priceFeatureAfterTextGlobalTypoSwitcher,
        priceFeatureAfterTextGlobalTypographyData,
        priceFeatureAfterTextGlobalTypoType,
        priceFeatureAfterTextGlobalTypoOption,
        priceFeatureAfterTextFontFamily,
        priceFeatureAfterTextFontSize,
        priceFeatureAfterTextFontSizeUnits,
        priceFeatureAfterTextFontWeight,
        priceFeatureAfterTextFontStyle,
        priceFeatureAfterTextTextTransform,
        priceFeatureAfterTextTextDecoration,
        priceFeatureAfterTextLetterSpacing,
        priceFeatureAfterTextLetterSpacingUnits,
        priceFeatureAfterTextLineHeight,
        priceFeatureAfterTextLineHeightUnits,
        priceFeatureAfterTextColorSwitcher,
        priceFeatureAfterTextColor,
        priceFeatureAfterTextHoverColor,
 
        priceFeatureDisabledOpacity,

        pricingTableDesktopSwitcher,
        pricingTableTabletSwitcher,
        pricingTableMobileSwitcher,

        pricingTableGlobalCustomCSS,
        pricingTableGlobalWraperID,
        pricingTableGlobalWraperClass,

        // Position
        pricingTablePositionType,
        pricingTableHZOrientationType,
        pricingTableVROrientationType,
        pricingTableHZLeftOffset,
        pricingTableHZLeftOffsetUnits,
        pricingTableHZRightOffset,
        pricingTableHZRightOffsetUnits,
        pricingTableVRTopOffset,
        pricingTableVRTopOffsetUnits,
        pricingTableVRBottomOffset,
        pricingTableVRBottomOffsetUnits,

        /** Start Pricing Grid */
        gridRowGap,
        gridColumnGap,
        gridGapUnits,

        pricingGridPaddingUnits,
        pricingGridDesktopPadding,
        pricingGridTabletPadding,
        pricingGridMobilePadding,
        pricingGridPaddingLink,

        pricingGridMarginUnits,
        pricingGridDesktopMargin,
        pricingGridTabletMargin,
        pricingGridMobileMargin,
        pricingGridMarginLink,

        priceGridBackgroundColorSwitcher,
        priceGridNormalBackgroundType,
        priceGridNormalClassicColor,
        priceGridNormalGradientColor,
        priceGridNormalCustomGradientSwitcher,
        priceGridNormalCustomGradientInputValue,

        priceGridHoverBackgroundType,
        priceGridHoverClassicColor,
        priceGridHoverGradientColor,
        priceGridHoverCustomGradientSwitcher,
        priceGridHoverCustomGradientInputValue,

        pricingGridBorder,
        pricingGridBorderColorSwitcher,
        pricingGridBorderColor,
        pricingGridBorderHoverColor,
        pricingGridBorderUnits,
        pricingGridBorderDesktop,
        pricingGridBorderTablet,
        pricingGridBorderMobile,
        pricingGridBorderLink,
        
        pricingGridBorderRadiusUnits,
        pricingGridBorderRadiusDesktop,
        pricingGridBorderRadiusTablet,
        pricingGridBorderRadiusMobile,
        pricingGridBorderRadiusLink,
    } = attributes;

    const pricingTopSectionDesktopPaddingWidth = `${pricingTopSectionDesktopPadding?.top}${pricingTopSectionPaddingUnits?.Desktop} ${pricingTopSectionDesktopPadding?.right}${pricingTopSectionPaddingUnits?.Desktop} ${pricingTopSectionDesktopPadding?.bottom}${pricingTopSectionPaddingUnits?.Desktop} ${pricingTopSectionDesktopPadding?.left}${pricingTopSectionPaddingUnits?.Desktop}`;
    const pricingTopSectionTabletPaddingWidth = `${pricingTopSectionTabletPadding?.top}${pricingTopSectionPaddingUnits?.Tablet} ${pricingTopSectionTabletPadding?.right}${pricingTopSectionPaddingUnits?.Tablet} ${pricingTopSectionTabletPadding?.bottom}${pricingTopSectionPaddingUnits?.Tablet} ${pricingTopSectionTabletPadding?.left}${pricingTopSectionPaddingUnits?.Tablet}`;
    const pricingTopSectionMobilePaddingWidth = `${pricingTopSectionMobilePadding?.top}${pricingTopSectionPaddingUnits?.Mobile} ${pricingTopSectionMobilePadding?.right}${pricingTopSectionPaddingUnits?.Mobile} ${pricingTopSectionMobilePadding?.bottom}${pricingTopSectionPaddingUnits?.Mobile} ${pricingTopSectionMobilePadding?.left}${pricingTopSectionPaddingUnits?.Mobile}`;

    const pricingTopSectionBorderDesktopWidth = `${pricingTopSectionBorderDesktop?.top}${pricingTopSectionBorderUnits?.Desktop} ${pricingTopSectionBorderDesktop?.right}${pricingTopSectionBorderUnits?.Desktop} ${pricingTopSectionBorderDesktop?.bottom}${pricingTopSectionBorderUnits?.Desktop} ${pricingTopSectionBorderDesktop?.left}${pricingTopSectionBorderUnits?.Desktop}`;
    const pricingTopSectionBorderTabletWidth = `${pricingTopSectionBorderTablet?.top}${pricingTopSectionBorderUnits?.Tablet} ${pricingTopSectionBorderTablet?.right}${pricingTopSectionBorderUnits?.Tablet} ${pricingTopSectionBorderTablet?.bottom}${pricingTopSectionBorderUnits?.Tablet} ${pricingTopSectionBorderTablet?.left}${pricingTopSectionBorderUnits?.Tablet}`;
    const pricingTopSectionBorderMobileWidth = `${pricingTopSectionBorderMobile?.top}${pricingTopSectionBorderUnits?.Mobile} ${pricingTopSectionBorderMobile?.right}${pricingTopSectionBorderUnits?.Mobile} ${pricingTopSectionBorderMobile?.bottom}${pricingTopSectionBorderUnits?.Mobile} ${pricingTopSectionBorderMobile?.left}${pricingTopSectionBorderUnits?.Mobile}`;

    const pricingTopSectionBorderRadiusDesktopWidth = `${pricingTopSectionBorderRadiusDesktop.top}${pricingTopSectionBorderRadiusUnits.Desktop} ${pricingTopSectionBorderRadiusDesktop.right}${pricingTopSectionBorderRadiusUnits.Desktop} ${pricingTopSectionBorderRadiusDesktop.bottom}${pricingTopSectionBorderRadiusUnits.Desktop} ${pricingTopSectionBorderRadiusDesktop.left}${pricingTopSectionBorderRadiusUnits.Desktop}`;
    const pricingTopSectionBorderRadiusTabletWidth = `${pricingTopSectionBorderRadiusTablet.top}${pricingTopSectionBorderRadiusUnits.Tablet} ${pricingTopSectionBorderRadiusTablet.right}${pricingTopSectionBorderRadiusUnits.Tablet} ${pricingTopSectionBorderRadiusTablet.bottom}${pricingTopSectionBorderRadiusUnits.Tablet} ${pricingTopSectionBorderRadiusTablet.left}${pricingTopSectionBorderRadiusUnits.Tablet}`;
    const pricingTopSectionBorderRadiusMobileWidth = `${pricingTopSectionBorderRadiusMobile.top}${pricingTopSectionBorderRadiusUnits.Mobile} ${pricingTopSectionBorderRadiusMobile.right}${pricingTopSectionBorderRadiusUnits.Mobile} ${pricingTopSectionBorderRadiusMobile.bottom}${pricingTopSectionBorderRadiusUnits.Mobile} ${pricingTopSectionBorderRadiusMobile.left}${pricingTopSectionBorderRadiusUnits.Mobile}`;

    const priceAfterTextDesktopPaddingWidth = `${priceAfterTextPaddingDesktop?.top}${priceAfterTextPaddingUnits?.Desktop} ${priceAfterTextPaddingDesktop?.right}${priceAfterTextPaddingUnits?.Desktop} ${priceAfterTextPaddingDesktop?.bottom}${priceAfterTextPaddingUnits?.Desktop} ${priceAfterTextPaddingDesktop?.left}${priceAfterTextPaddingUnits?.Desktop}`;
    const priceAfterTextTabletPaddingWidth = `${priceAfterTextPaddingTablet?.top}${priceAfterTextPaddingUnits?.Tablet} ${priceAfterTextPaddingTablet?.right}${priceAfterTextPaddingUnits?.Tablet} ${priceAfterTextPaddingTablet?.bottom}${priceAfterTextPaddingUnits?.Tablet} ${priceAfterTextPaddingTablet?.left}${priceAfterTextPaddingUnits?.Tablet}`;
    const priceAfterTextMobilePaddingWidth = `${priceAfterTextPaddingMobile?.top}${priceAfterTextPaddingUnits?.Mobile} ${priceAfterTextPaddingMobile?.right}${priceAfterTextPaddingUnits?.Mobile} ${priceAfterTextPaddingMobile?.bottom}${priceAfterTextPaddingUnits?.Mobile} ${priceAfterTextPaddingMobile?.left}${priceAfterTextPaddingUnits?.Mobile}`;

    const priceFeatureItemDesktopPaddingWidth 	= `${priceFeatureItemDesktopPadding?.top}${priceFeatureItemPaddingUnits?.Desktop} ${priceFeatureItemDesktopPadding?.right}${priceFeatureItemPaddingUnits?.Desktop} ${priceFeatureItemDesktopPadding?.bottom}${priceFeatureItemPaddingUnits?.Desktop} ${priceFeatureItemDesktopPadding?.left}${priceFeatureItemPaddingUnits?.Desktop}`;
    const priceFeatureItemTabPaddingWidth 		= `${priceFeatureItemTabPadding?.top}${priceFeatureItemPaddingUnits?.Tablet} ${priceFeatureItemTabPadding?.right}${priceFeatureItemPaddingUnits?.Tablet} ${priceFeatureItemTabPadding?.bottom}${priceFeatureItemPaddingUnits?.Tablet} ${priceFeatureItemTabPadding?.left}${priceFeatureItemPaddingUnits?.Tablet}`;
    const priceFeatureItemMobilePaddingWidth 	= `${priceFeatureItemMobilePadding?.top}${priceFeatureItemPaddingUnits?.Mobile} ${priceFeatureItemMobilePadding?.right}${priceFeatureItemPaddingUnits?.Mobile} ${priceFeatureItemMobilePadding?.bottom}${priceFeatureItemPaddingUnits?.Mobile} ${priceFeatureItemMobilePadding?.left}${priceFeatureItemPaddingUnits?.Mobile}`;

    const priceFeatureItemDesktopMarginWidth 	= `${priceFeatureItemDesktopMargin?.top}${priceFeatureItemMarginUnits?.Desktop} ${priceFeatureItemDesktopMargin?.right}${priceFeatureItemMarginUnits?.Desktop} ${priceFeatureItemDesktopMargin?.bottom}${priceFeatureItemMarginUnits?.Desktop} ${priceFeatureItemDesktopMargin?.left}${priceFeatureItemMarginUnits?.Desktop}`;
    const priceFeatureItemTabMarginWidth 		= `${priceFeatureItemTabMargin?.top}${priceFeatureItemMarginUnits?.Tablet} ${priceFeatureItemTabMargin?.right}${priceFeatureItemMarginUnits?.Tablet} ${priceFeatureItemTabMargin?.bottom}${priceFeatureItemMarginUnits?.Tablet} ${priceFeatureItemTabMargin?.left}${priceFeatureItemMarginUnits?.Tablet}`;
    const priceFeatureItemMobileMarginWidth 	= `${priceFeatureItemMobileMargin?.top}${priceFeatureItemMarginUnits?.Mobile} ${priceFeatureItemMobileMargin?.right}${priceFeatureItemMarginUnits?.Mobile} ${priceFeatureItemMobileMargin?.bottom}${priceFeatureItemMarginUnits?.Mobile} ${priceFeatureItemMobileMargin?.left}${priceFeatureItemMarginUnits?.Mobile}`;

    const priceFeatureItemDesktopBorderWidth 	= `${priceFeatureItemDesktopBorder?.top}${priceFeatureItemBorderUnits?.Desktop} ${priceFeatureItemDesktopBorder?.right}${priceFeatureItemBorderUnits?.Desktop} ${priceFeatureItemDesktopBorder?.bottom}${priceFeatureItemBorderUnits?.Desktop} ${priceFeatureItemDesktopBorder?.left}${priceFeatureItemBorderUnits?.Desktop}`;
    const priceFeatureItemTabBorderWidth 		= `${priceFeatureItemTabBorder?.top}${priceFeatureItemBorderUnits?.Tablet} ${priceFeatureItemTabBorder?.right}${priceFeatureItemBorderUnits?.Tablet} ${priceFeatureItemTabBorder?.bottom}${priceFeatureItemBorderUnits?.Tablet} ${priceFeatureItemTabBorder?.left}${priceFeatureItemBorderUnits?.Tablet}`;
    const priceFeatureItemMobileBorderWidth 	= `${priceFeatureItemMobileBorder?.top}${priceFeatureItemBorderUnits?.Mobile} ${priceFeatureItemMobileBorder?.right}${priceFeatureItemBorderUnits?.Mobile} ${priceFeatureItemMobileBorder?.bottom}${priceFeatureItemBorderUnits?.Mobile} ${priceFeatureItemMobileBorder?.left}${priceFeatureItemBorderUnits?.Mobile}`;

    const priceFeatureItemDesktopBorderRadiusWidth 	= `${priceFeatureItemDesktopBorderRadius?.top}${priceFeatureItemBorderRadiusUnits?.Desktop} ${priceFeatureItemDesktopBorderRadius?.right}${priceFeatureItemBorderRadiusUnits?.Desktop} ${priceFeatureItemDesktopBorderRadius?.bottom}${priceFeatureItemBorderRadiusUnits?.Desktop} ${priceFeatureItemDesktopBorderRadius?.left}${priceFeatureItemBorderRadiusUnits?.Desktop}`;
    const priceFeatureItemTabBorderRadiusWidth 		= `${priceFeatureItemTabBorderRadius?.top}${priceFeatureItemBorderRadiusUnits?.Tablet} ${priceFeatureItemTabBorderRadius?.right}${priceFeatureItemBorderRadiusUnits?.Tablet} ${priceFeatureItemTabBorderRadius?.bottom}${priceFeatureItemBorderRadiusUnits?.Tablet} ${priceFeatureItemTabBorderRadius?.left}${priceFeatureItemBorderRadiusUnits?.Tablet}`;
    const priceFeatureItemMobileBorderRadiusWidth 	= `${priceFeatureItemMobileBorderRadius?.top}${priceFeatureItemBorderRadiusUnits?.Mobile} ${priceFeatureItemMobileBorderRadius?.right}${priceFeatureItemBorderRadiusUnits?.Mobile} ${priceFeatureItemMobileBorderRadius?.bottom}${priceFeatureItemBorderRadiusUnits?.Mobile} ${priceFeatureItemMobileBorderRadius?.left}${priceFeatureItemBorderRadiusUnits?.Mobile}`;

    const priceFeatureDesktopPaddingWidth 	= `${priceFeatureDesktopPadding?.top}${priceFeaturePaddingUnits?.Desktop} ${priceFeatureDesktopPadding?.right}${priceFeaturePaddingUnits?.Desktop} ${priceFeatureDesktopPadding?.bottom}${priceFeaturePaddingUnits?.Desktop} ${priceFeatureDesktopPadding?.left}${priceFeaturePaddingUnits?.Desktop}`;
    const priceFeatureTabletPaddingWidth 		= `${priceFeatureTabPadding?.top}${priceFeaturePaddingUnits?.Tablet} ${priceFeatureTabPadding?.right}${priceFeaturePaddingUnits?.Tablet} ${priceFeatureTabPadding?.bottom}${priceFeaturePaddingUnits?.Tablet} ${priceFeatureTabPadding?.left}${priceFeaturePaddingUnits?.Tablet}`;
    const priceFeatureMobilePaddingWidth 	= `${priceFeatureMobilePadding?.top}${priceFeaturePaddingUnits?.Mobile} ${priceFeatureMobilePadding?.right}${priceFeaturePaddingUnits?.Mobile} ${priceFeatureMobilePadding?.bottom}${priceFeaturePaddingUnits?.Mobile} ${priceFeatureMobilePadding?.left}${priceFeaturePaddingUnits?.Mobile}`;
    
    const priceFeatureDesktopMarginWidth 	= `${priceFeatureDesktopMargin?.top}${priceFeatureMarginUnits?.Desktop} ${priceFeatureDesktopMargin?.right}${priceFeatureMarginUnits?.Desktop} ${priceFeatureDesktopMargin?.bottom}${priceFeatureMarginUnits?.Desktop} ${priceFeatureDesktopMargin?.left}${priceFeatureMarginUnits?.Desktop}`;
    const priceFeatureTabMarginWidth 		= `${priceFeatureTabMargin?.top}${priceFeatureMarginUnits?.Tablet} ${priceFeatureTabMargin?.right}${priceFeatureMarginUnits?.Tablet} ${priceFeatureTabMargin?.bottom}${priceFeatureMarginUnits?.Tablet} ${priceFeatureTabMargin?.left}${priceFeatureMarginUnits?.Tablet}`;
    const priceFeatureMobileMarginWidth 	= `${priceFeatureMobileMargin?.top}${priceFeatureMarginUnits?.Mobile} ${priceFeatureMobileMargin?.right}${priceFeatureMarginUnits?.Mobile} ${priceFeatureMobileMargin?.bottom}${priceFeatureMarginUnits?.Mobile} ${priceFeatureMobileMargin?.left}${priceFeatureMarginUnits?.Mobile}`;

    const priceAfterTextBorderDesktopWidth = `${priceAfterTextBorderDesktop?.top}${priceAfterTextBorderUnits?.Desktop} ${priceAfterTextBorderDesktop?.right}${priceAfterTextBorderUnits?.Desktop} ${priceAfterTextBorderDesktop?.bottom}${priceAfterTextBorderUnits?.Desktop} ${priceAfterTextBorderDesktop?.left}${priceAfterTextBorderUnits?.Desktop}`;
    const priceAfterTextBorderTabletWidth = `${priceAfterTextBorderTablet?.top}${priceAfterTextBorderUnits?.Tablet} ${priceAfterTextBorderTablet?.right}${priceAfterTextBorderUnits?.Tablet} ${priceAfterTextBorderTablet?.bottom}${priceAfterTextBorderUnits?.Tablet} ${priceAfterTextBorderTablet?.left}${priceAfterTextBorderUnits?.Tablet}`;
    const priceAfterTextBorderMobileWidth = `${priceAfterTextBorderMobile?.top}${priceAfterTextBorderUnits?.Mobile} ${priceAfterTextBorderMobile?.right}${priceAfterTextBorderUnits?.Mobile} ${priceAfterTextBorderMobile?.bottom}${priceAfterTextBorderUnits?.Mobile} ${priceAfterTextBorderMobile?.left}${priceAfterTextBorderUnits?.Mobile}`;

    const priceAfterTextBorderRadiusDesktopWidth = `${priceAfterTextBorderRadiusDesktop?.top}${priceAfterTextBorderRadiusUnits?.Desktop} ${priceAfterTextBorderRadiusDesktop?.right}${priceAfterTextBorderRadiusUnits?.Desktop} ${priceAfterTextBorderRadiusDesktop?.bottom}${priceAfterTextBorderRadiusUnits?.Desktop} ${priceAfterTextBorderRadiusDesktop?.left}${priceAfterTextBorderRadiusUnits?.Desktop}`;
    const priceAfterTextBorderRadiusTabletWidth = `${priceAfterTextBorderRadiusTablet?.top}${priceAfterTextBorderRadiusUnits?.Tablet} ${priceAfterTextBorderRadiusTablet?.right}${priceAfterTextBorderRadiusUnits?.Tablet} ${priceAfterTextBorderRadiusTablet?.bottom}${priceAfterTextBorderRadiusUnits?.Tablet} ${priceAfterTextBorderRadiusTablet?.left}${priceAfterTextBorderRadiusUnits?.Tablet}`;
    const priceAfterTextBorderRadiusMobileWidth = `${priceAfterTextBorderRadiusMobile?.top}${priceAfterTextBorderRadiusUnits?.Mobile} ${priceAfterTextBorderRadiusMobile?.right}${priceAfterTextBorderRadiusUnits?.Mobile} ${priceAfterTextBorderRadiusMobile?.bottom}${priceAfterTextBorderRadiusUnits?.Mobile} ${priceAfterTextBorderRadiusMobile?.left}${priceAfterTextBorderRadiusUnits?.Mobile}`;

    const priceDesktopPaddingWidth = `${priceDesktopPadding?.top}${pricePaddingUnits?.Desktop} ${priceDesktopPadding?.right}${pricePaddingUnits?.Desktop} ${priceDesktopPadding?.bottom}${pricePaddingUnits?.Desktop} ${priceDesktopPadding?.left}${pricePaddingUnits?.Desktop}`;
    const priceTabletPaddingWidth = `${priceTabletPadding?.top}${pricePaddingUnits?.Tablet} ${priceTabletPadding?.right}${pricePaddingUnits?.Tablet} ${priceTabletPadding?.bottom}${pricePaddingUnits?.Tablet} ${priceTabletPadding?.left}${pricePaddingUnits?.Tablet}`;
    const priceMobilePaddingWidth = `${priceMobilePadding?.top}${pricePaddingUnits?.Mobile} ${priceMobilePadding?.right}${pricePaddingUnits?.Mobile} ${priceMobilePadding?.bottom}${pricePaddingUnits?.Mobile} ${priceMobilePadding?.left}${pricePaddingUnits?.Mobile}`;

    const headerDesktopPadding = `${pricingHeaderDesktopPadding?.top}${pricingHeaderPaddingUnits?.Desktop} ${pricingHeaderDesktopPadding?.right}${pricingHeaderPaddingUnits?.Desktop} ${pricingHeaderDesktopPadding?.bottom}${pricingHeaderPaddingUnits?.Desktop} ${pricingHeaderDesktopPadding?.left}${pricingHeaderPaddingUnits?.Desktop}`;
    const headerTabletPadding = `${pricingHeaderTabletPadding?.top}${pricingHeaderPaddingUnits?.Tablet} ${pricingHeaderTabletPadding?.right}${pricingHeaderPaddingUnits?.Tablet} ${pricingHeaderTabletPadding?.bottom}${pricingHeaderPaddingUnits?.Tablet} ${pricingHeaderTabletPadding?.left}${pricingHeaderPaddingUnits?.Tablet}`;
    const headerMobilePadding = `${pricingHeaderMobilePadding?.top}${pricingHeaderPaddingUnits?.Mobile} ${pricingHeaderMobilePadding?.right}${pricingHeaderPaddingUnits?.Mobile} ${pricingHeaderMobilePadding?.bottom}${pricingHeaderPaddingUnits?.Mobile} ${pricingHeaderMobilePadding?.left}${pricingHeaderPaddingUnits?.Mobile}`;

    const headerDesktopBorderWidth = `${pricingHeaderBorderDesktop?.top}${pricingHeaderBorderUnits?.Desktop} ${pricingHeaderBorderDesktop?.right}${pricingHeaderBorderUnits?.Desktop} ${pricingHeaderBorderDesktop?.bottom}${pricingHeaderBorderUnits?.Desktop} ${pricingHeaderBorderDesktop?.left}${pricingHeaderBorderUnits?.Desktop}`;
    const headerTabletBorderWidth = `${pricingHeaderBorderTablet?.top}${pricingHeaderBorderUnits?.Tablet} ${pricingHeaderBorderTablet?.right}${pricingHeaderBorderUnits?.Tablet} ${pricingHeaderBorderTablet?.bottom}${pricingHeaderBorderUnits?.Tablet} ${pricingHeaderBorderTablet?.left}${pricingHeaderBorderUnits?.Tablet}`;
    const headerMobileBorderWidth = `${pricingHeaderBorderMobile?.top}${pricingHeaderBorderUnits?.Mobile} ${pricingHeaderBorderMobile?.right}${pricingHeaderBorderUnits?.Mobile} ${pricingHeaderBorderMobile?.bottom}${pricingHeaderBorderUnits?.Mobile} ${pricingHeaderBorderMobile?.left}${pricingHeaderBorderUnits?.Mobile}`;

    const headerDesktopBorderRadiusWidth = `${pricingHeaderBorderRadiusDesktop?.top}${pricingHeaderBorderRadiusUnits?.Desktop} ${pricingHeaderBorderRadiusDesktop?.right}${pricingHeaderBorderRadiusUnits?.Desktop} ${pricingHeaderBorderRadiusDesktop?.bottom}${pricingHeaderBorderRadiusUnits?.Desktop} ${pricingHeaderBorderRadiusDesktop?.left}${pricingHeaderBorderRadiusUnits?.Desktop}`;
    const headerTabletBorderRadiusWidth = `${pricingHeaderBorderRadiusTablet?.top}${pricingHeaderBorderRadiusUnits?.Tablet} ${pricingHeaderBorderRadiusTablet?.right}${pricingHeaderBorderRadiusUnits?.Tablet} ${pricingHeaderBorderRadiusTablet?.bottom}${pricingHeaderBorderRadiusUnits?.Tablet} ${pricingHeaderBorderRadiusTablet?.left}${pricingHeaderBorderRadiusUnits?.Tablet}`;
    const headerMobileBorderRadiusWidth = `${pricingHeaderBorderRadiusMobile?.top}${pricingHeaderBorderRadiusUnits?.Mobile} ${pricingHeaderBorderRadiusMobile?.right}${pricingHeaderBorderRadiusUnits?.Mobile} ${pricingHeaderBorderRadiusMobile?.bottom}${pricingHeaderBorderRadiusUnits?.Mobile} ${pricingHeaderBorderRadiusMobile?.left}${pricingHeaderBorderRadiusUnits?.Mobile}`;

    const titleDesktopPadding = `${pricingTitleDesktopPadding?.top}${pricingTitlePaddingUnits?.Desktop} ${pricingTitleDesktopPadding?.right}${pricingTitlePaddingUnits?.Desktop} ${pricingTitleDesktopPadding?.bottom}${pricingTitlePaddingUnits?.Desktop} ${pricingTitleDesktopPadding?.left}${pricingTitlePaddingUnits?.Desktop}`;
    const titleTabletPadding = `${pricingTitleTabletPadding?.top}${pricingTitlePaddingUnits?.Tablet} ${pricingTitleTabletPadding?.right}${pricingTitlePaddingUnits?.Tablet} ${pricingTitleTabletPadding?.bottom}${pricingTitlePaddingUnits?.Tablet} ${pricingTitleTabletPadding?.left}${pricingTitlePaddingUnits?.Tablet}`;
    const titleMobilePadding = `${pricingTitleMobilePadding?.top}${pricingTitlePaddingUnits?.Mobile} ${pricingTitleMobilePadding?.right}${pricingTitlePaddingUnits?.Mobile} ${pricingTitleMobilePadding?.bottom}${pricingTitlePaddingUnits?.Mobile} ${pricingTitleMobilePadding?.left}${pricingTitlePaddingUnits?.Mobile}`;

    const titleDesktopMargin = `${pricingTitleDesktopMargin?.top}${pricingTitleMarginUnits?.Desktop} ${pricingTitleDesktopMargin?.right}${pricingTitleMarginUnits?.Desktop} ${pricingTitleDesktopMargin?.bottom}${pricingTitleMarginUnits?.Desktop} ${pricingTitleDesktopMargin?.left}${pricingTitleMarginUnits?.Desktop}`;
    const titleTabletMargin = `${pricingTitleTabletMargin?.top}${pricingTitleMarginUnits?.Tablet} ${pricingTitleTabletMargin?.right}${pricingTitleMarginUnits?.Tablet} ${pricingTitleTabletMargin?.bottom}${pricingTitleMarginUnits?.Tablet} ${pricingTitleTabletMargin?.left}${pricingTitleMarginUnits?.Tablet}`;
    const titleMobileMargin = `${pricingTitleMobileMargin?.top}${pricingTitleMarginUnits?.Mobile} ${pricingTitleMobileMargin?.right}${pricingTitleMarginUnits?.Mobile} ${pricingTitleMobileMargin?.bottom}${pricingTitleMarginUnits?.Mobile} ${pricingTitleMobileMargin?.left}${pricingTitleMarginUnits?.Mobile}`;

    const subtitleDesktopPadding = `${pricingSubtitleDesktopPadding?.top}${pricingSubtitlePaddingUnits?.Desktop} ${pricingSubtitleDesktopPadding?.right}${pricingSubtitlePaddingUnits?.Desktop} ${pricingSubtitleDesktopPadding?.bottom}${pricingSubtitlePaddingUnits?.Desktop} ${pricingSubtitleDesktopPadding?.left}${pricingSubtitlePaddingUnits?.Desktop}`;
    const subtitleTabletPadding = `${pricingSubtitleTabletPadding?.top}${pricingSubtitlePaddingUnits?.Tablet} ${pricingSubtitleTabletPadding?.right}${pricingSubtitlePaddingUnits?.Tablet} ${pricingSubtitleTabletPadding?.bottom}${pricingSubtitlePaddingUnits?.Tablet} ${pricingSubtitleTabletPadding?.left}${pricingSubtitlePaddingUnits?.Tablet}`;
    const subtitleMobilePadding = `${pricingSubtitleMobilePadding?.top}${pricingSubtitlePaddingUnits?.Mobile} ${pricingSubtitleMobilePadding?.right}${pricingSubtitlePaddingUnits?.Mobile} ${pricingSubtitleMobilePadding?.bottom}${pricingSubtitlePaddingUnits?.Mobile} ${pricingSubtitleMobilePadding?.left}${pricingSubtitlePaddingUnits?.Mobile}`;

    const subtitleDesktopMargin = `${pricingSubtitleDesktopMargin?.top}${pricingSubtitleMarginUnits?.Desktop} ${pricingSubtitleDesktopMargin?.right}${pricingSubtitleMarginUnits?.Desktop} ${pricingSubtitleDesktopMargin?.bottom}${pricingSubtitleMarginUnits?.Desktop} ${pricingSubtitleDesktopMargin?.left}${pricingSubtitleMarginUnits?.Desktop}`;
    const subtitleTabletMargin = `${pricingSubtitleTabletMargin?.top}${pricingSubtitleMarginUnits?.Tablet} ${pricingSubtitleTabletMargin?.right}${pricingSubtitleMarginUnits?.Tablet} ${pricingSubtitleTabletMargin?.bottom}${pricingSubtitleMarginUnits?.Tablet} ${pricingSubtitleTabletMargin?.left}${pricingSubtitleMarginUnits?.Tablet}`;
    const subtitleMobileMargin = `${pricingSubtitleMobileMargin?.top}${pricingSubtitleMarginUnits?.Mobile} ${pricingSubtitleMobileMargin?.right}${pricingSubtitleMarginUnits?.Mobile} ${pricingSubtitleMobileMargin?.bottom}${pricingSubtitleMarginUnits?.Mobile} ${pricingSubtitleMobileMargin?.left}${pricingSubtitleMarginUnits?.Mobile}`;

    const priceIconDesktopBorderWidthValue = `${priceIconBorderDesktop?.top}${priceIconBorderUnits?.Desktop} ${priceIconBorderDesktop?.right}${priceIconBorderUnits?.Desktop} ${priceIconBorderDesktop?.bottom}${priceIconBorderUnits?.Desktop} ${priceIconBorderDesktop?.left}${priceIconBorderUnits?.Desktop}`;
    const priceIconTabletBorderWidthValue = `${priceIconBorderTablet?.top}${priceIconBorderUnits?.Tablet} ${priceIconBorderTablet?.right}${priceIconBorderUnits?.Tablet} ${priceIconBorderTablet?.bottom}${priceIconBorderUnits?.Tablet} ${priceIconBorderTablet?.left}${priceIconBorderUnits?.Tablet}`;
    const priceIconMobileBorderWidthValue = `${priceIconBorderMobile?.top}${priceIconBorderUnits?.Mobile} ${priceIconBorderMobile?.right}${priceIconBorderUnits?.Mobile} ${priceIconBorderMobile?.bottom}${priceIconBorderUnits?.Mobile} ${priceIconBorderMobile?.left}${priceIconBorderUnits?.Mobile}`;

    const priceIconDesktopBorderRadiusWidthValue = `${priceIconBorderRadiusDesktop?.top}${priceIconBorderRadiusUnits?.Desktop} ${priceIconBorderRadiusDesktop?.right}${priceIconBorderRadiusUnits?.Desktop} ${priceIconBorderRadiusDesktop?.bottom}${priceIconBorderRadiusUnits?.Desktop} ${priceIconBorderRadiusDesktop?.left}${priceIconBorderRadiusUnits?.Desktop}`;
    const priceIconTabletBorderRadiusWidthValue = `${priceIconBorderRadiusTablet?.top}${priceIconBorderRadiusUnits?.Tablet} ${priceIconBorderRadiusTablet?.right}${priceIconBorderRadiusUnits?.Tablet} ${priceIconBorderRadiusTablet?.bottom}${priceIconBorderRadiusUnits?.Tablet} ${priceIconBorderRadiusTablet?.left}${priceIconBorderRadiusUnits?.Tablet}`;
    const priceIconMobileBorderRadiusWidthValue = `${priceIconBorderRadiusMobile?.top}${priceIconBorderRadiusUnits?.Mobile} ${priceIconBorderRadiusMobile?.right}${priceIconBorderRadiusUnits?.Mobile} ${priceIconBorderRadiusMobile?.bottom}${priceIconBorderRadiusUnits?.Mobile} ${priceIconBorderRadiusMobile?.left}${priceIconBorderRadiusUnits?.Mobile}`;

    const priceButtonDesktopPaddingValue = `${priceButtonDesktopPadding?.top}${priceButtonPaddingUnits?.Desktop} ${priceButtonDesktopPadding?.right}${priceButtonPaddingUnits?.Desktop} ${priceButtonDesktopPadding?.bottom}${priceButtonPaddingUnits?.Desktop} ${priceButtonDesktopPadding?.left}${priceButtonPaddingUnits?.Desktop}`;
    const priceButtonTabletPaddingValue = `${priceButtonTabPadding?.top}${priceButtonPaddingUnits?.Tablet} ${priceButtonTabPadding?.right}${priceButtonPaddingUnits?.Tablet} ${priceButtonTabPadding?.bottom}${priceButtonPaddingUnits?.Tablet} ${priceButtonTabPadding?.left}${priceButtonPaddingUnits?.Tablet}`;
    const priceButtonMobilePaddingValue = `${priceButtonMobilePadding?.top}${priceButtonPaddingUnits?.Mobile} ${priceButtonMobilePadding?.right}${priceButtonPaddingUnits?.Mobile} ${priceButtonMobilePadding?.bottom}${priceButtonPaddingUnits?.Mobile} ${priceButtonMobilePadding?.left}${priceButtonPaddingUnits?.Mobile}`;

    const priceButtonDesktopMarginValue = `${priceButtonDesktopMargin?.top}${priceButtonMarginUnits?.Desktop} ${priceButtonDesktopMargin?.right}${priceButtonMarginUnits?.Desktop} ${priceButtonDesktopMargin?.bottom}${priceButtonMarginUnits?.Desktop} ${priceButtonDesktopMargin?.left}${priceButtonMarginUnits?.Desktop}`;
    const priceButtonTabletMarginValue = `${priceButtonTabMargin?.top}${priceButtonMarginUnits?.Tablet} ${priceButtonTabMargin?.right}${priceButtonMarginUnits?.Tablet} ${priceButtonTabMargin?.bottom}${priceButtonMarginUnits?.Tablet} ${priceButtonTabMargin?.left}${priceButtonMarginUnits?.Tablet}`;
    const priceButtonMobileMarginValue = `${priceButtonMobileMargin?.top}${priceButtonMarginUnits?.Mobile} ${priceButtonMobileMargin?.right}${priceButtonMarginUnits?.Mobile} ${priceButtonMobileMargin?.bottom}${priceButtonMarginUnits?.Mobile} ${priceButtonMobileMargin?.left}${priceButtonMarginUnits?.Mobile}`;

    const priceButtonDesktopBorderWidthValue = `${priceButtonDesktopBorderWidth?.top}${priceButtonBorderUnits?.Desktop} ${priceButtonDesktopBorderWidth?.right}${priceButtonBorderUnits?.Desktop} ${priceButtonDesktopBorderWidth?.bottom}${priceButtonBorderUnits?.Desktop} ${priceButtonDesktopBorderWidth?.left}${priceButtonBorderUnits?.Desktop}`;
    const priceButtonTabletBorderWidthValue = `${priceButtonTabBorderWidth?.top}${priceButtonBorderUnits?.Tablet} ${priceButtonTabBorderWidth?.right}${priceButtonBorderUnits?.Tablet} ${priceButtonTabBorderWidth?.bottom}${priceButtonBorderUnits?.Tablet} ${priceButtonTabBorderWidth?.left}${priceButtonBorderUnits?.Tablet}`;
    const priceButtonMobileBorderWidthValue = `${priceButtonMobileBorderWidth?.top}${priceButtonBorderUnits?.Mobile} ${priceButtonMobileBorderWidth?.right}${priceButtonBorderUnits?.Mobile} ${priceButtonMobileBorderWidth?.bottom}${priceButtonBorderUnits?.Mobile} ${priceButtonMobileBorderWidth?.left}${priceButtonBorderUnits?.Mobile}`;

    const priceButtonDesktopBorderRadiusWidthValue = `${priceButtonDesktopBorderRadiusWidth?.top}${priceButtonBorderRadiusUnits?.Desktop} ${priceButtonDesktopBorderRadiusWidth?.right}${priceButtonBorderRadiusUnits?.Desktop} ${priceButtonDesktopBorderRadiusWidth?.bottom}${priceButtonBorderRadiusUnits?.Desktop} ${priceButtonDesktopBorderRadiusWidth?.left}${priceButtonBorderRadiusUnits?.Desktop}`;
    const priceButtonTabletBorderRadiusWidthValue = `${priceButtonTabBorderRadiusWidth?.top}${priceButtonBorderRadiusUnits?.Tablet} ${priceButtonTabBorderRadiusWidth?.right}${priceButtonBorderRadiusUnits?.Tablet} ${priceButtonTabBorderRadiusWidth?.bottom}${priceButtonBorderRadiusUnits?.Tablet} ${priceButtonTabBorderRadiusWidth?.left}${priceButtonBorderRadiusUnits?.Tablet}`;
    const priceButtonMobileBorderRadiusWidthValue = `${priceButtonMobileBorderRadiusWidth?.top}${priceButtonBorderRadiusUnits?.Mobile} ${priceButtonMobileBorderRadiusWidth?.right}${priceButtonBorderRadiusUnits?.Mobile} ${priceButtonMobileBorderRadiusWidth?.bottom}${priceButtonBorderRadiusUnits?.Mobile} ${priceButtonMobileBorderRadiusWidth?.left}${priceButtonBorderRadiusUnits?.Mobile}`;

    const globalDesktopPadding    = `${priceGlobalPaddingDesktop?.top}${priceGlobalPaddingUnits?.Desktop} ${priceGlobalPaddingDesktop?.right}${priceGlobalPaddingUnits?.Desktop} ${priceGlobalPaddingDesktop?.bottom}${priceGlobalPaddingUnits?.Desktop} ${priceGlobalPaddingDesktop?.left}${priceGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding     = `${priceGlobalPaddingTablet?.top}${priceGlobalPaddingUnits?.Tablet} ${priceGlobalPaddingTablet?.right}${priceGlobalPaddingUnits?.Tablet} ${priceGlobalPaddingTablet?.bottom}${priceGlobalPaddingUnits?.Tablet} ${priceGlobalPaddingTablet?.left}${priceGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding     = `${priceGlobalPaddingMobile?.top}${priceGlobalPaddingUnits?.Mobile} ${priceGlobalPaddingMobile?.right}${priceGlobalPaddingUnits?.Mobile} ${priceGlobalPaddingMobile?.bottom}${priceGlobalPaddingUnits?.Mobile} ${priceGlobalPaddingMobile?.left}${priceGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${priceGlobalMarginDesktop?.top}${priceGlobalMarginUnits?.Desktop} ${priceGlobalMarginDesktop?.right}${priceGlobalMarginUnits?.Desktop} ${priceGlobalMarginDesktop?.bottom}${priceGlobalMarginUnits?.Desktop} ${priceGlobalMarginDesktop?.left}${priceGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${priceGlobalMarginTablet?.top}${priceGlobalMarginUnits?.Tablet} ${priceGlobalMarginTablet?.right}${priceGlobalMarginUnits?.Tablet} ${priceGlobalMarginTablet?.bottom}${priceGlobalMarginUnits?.Tablet} ${priceGlobalMarginTablet?.left}${priceGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${priceGlobalMarginMobile?.top}${priceGlobalMarginUnits?.Mobile} ${priceGlobalMarginMobile?.right}${priceGlobalMarginUnits?.Mobile} ${priceGlobalMarginMobile?.bottom}${priceGlobalMarginUnits?.Mobile} ${priceGlobalMarginMobile?.left}${priceGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${priceGlobalBorderDesktop?.top}${priceGlobalBorderUnits?.Desktop} ${priceGlobalBorderDesktop?.right}${priceGlobalBorderUnits?.Desktop} ${priceGlobalBorderDesktop?.bottom}${priceGlobalBorderUnits?.Desktop} ${priceGlobalBorderDesktop?.left}${priceGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${priceGlobalBorderTablet?.top}${priceGlobalBorderUnits?.Tablet} ${priceGlobalBorderTablet?.right}${priceGlobalBorderUnits?.Tablet} ${priceGlobalBorderTablet?.bottom}${priceGlobalBorderUnits?.Tablet} ${priceGlobalBorderTablet?.left}${priceGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${priceGlobalBorderMobile?.top}${priceGlobalBorderUnits?.Mobile} ${priceGlobalBorderMobile?.right}${priceGlobalBorderUnits?.Mobile} ${priceGlobalBorderMobile?.bottom}${priceGlobalBorderUnits?.Mobile} ${priceGlobalBorderMobile?.left}${priceGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${priceGlobalBorderRadiusDesktop?.top}${priceGlobalBorderRadiusUnits?.Desktop} ${priceGlobalBorderRadiusDesktop?.right}${priceGlobalBorderRadiusUnits?.Desktop} ${priceGlobalBorderRadiusDesktop?.bottom}${priceGlobalBorderRadiusUnits?.Desktop} ${priceGlobalBorderRadiusDesktop?.left}${priceGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${priceGlobalBorderRadiusTablet?.top}${priceGlobalBorderRadiusUnits?.Tablet} ${priceGlobalBorderRadiusTablet?.right}${priceGlobalBorderRadiusUnits?.Tablet} ${priceGlobalBorderRadiusTablet?.bottom}${priceGlobalBorderRadiusUnits?.Tablet} ${priceGlobalBorderRadiusTablet?.left}${priceGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${priceGlobalBorderRadiusMobile?.top}${priceGlobalBorderRadiusUnits?.Mobile} ${priceGlobalBorderRadiusMobile?.right}${priceGlobalBorderRadiusUnits?.Mobile} ${priceGlobalBorderRadiusMobile?.bottom}${priceGlobalBorderRadiusUnits?.Mobile} ${priceGlobalBorderRadiusMobile?.left}${priceGlobalBorderRadiusUnits?.Mobile}`;

    const priceColumnDesktopPaddingValue = `${priceColumnDesktopPadding?.top}${priceColumnPaddingUnits?.Desktop} ${priceColumnDesktopPadding?.right}${priceColumnPaddingUnits?.Desktop} ${priceColumnDesktopPadding?.bottom}${priceColumnPaddingUnits?.Desktop} ${priceColumnDesktopPadding?.left}${priceColumnPaddingUnits?.Desktop}`;
    const priceColumnTabletPaddingValue = `${priceColumnTabletPadding?.top}${priceColumnPaddingUnits?.Tablet} ${priceColumnTabletPadding?.right}${priceColumnPaddingUnits?.Tablet} ${priceColumnTabletPadding?.bottom}${priceColumnPaddingUnits?.Tablet} ${priceColumnTabletPadding?.left}${priceColumnPaddingUnits?.Tablet}`;
    const priceColumnMobilePaddingValue = `${priceColumnMobilePadding?.top}${priceColumnPaddingUnits?.Mobile} ${priceColumnMobilePadding?.right}${priceColumnPaddingUnits?.Mobile} ${priceColumnMobilePadding?.bottom}${priceColumnPaddingUnits?.Mobile} ${priceColumnMobilePadding?.left}${priceColumnPaddingUnits?.Mobile}`;

    const priceColumnDesktopMarginValue = `${priceColumnDesktopMargin?.top}${priceColumnMarginUnits?.Desktop} ${priceColumnDesktopMargin?.right}${priceColumnMarginUnits?.Desktop} ${priceColumnDesktopMargin?.bottom}${priceColumnMarginUnits?.Desktop} ${priceColumnDesktopMargin?.left}${priceColumnMarginUnits?.Desktop}`;
    const priceColumnTabletMarginValue = `${priceColumnTabletMargin?.top}${priceColumnMarginUnits?.Tablet} ${priceColumnTabletMargin?.right}${priceColumnMarginUnits?.Tablet} ${priceColumnTabletMargin?.bottom}${priceColumnMarginUnits?.Tablet} ${priceColumnTabletMargin?.left}${priceColumnMarginUnits?.Tablet}`;
    const priceColumnMobileMarginValue = `${priceColumnMobileMargin?.top}${priceColumnMarginUnits?.Mobile} ${priceColumnMobileMargin?.right}${priceColumnMarginUnits?.Mobile} ${priceColumnMobileMargin?.bottom}${priceColumnMarginUnits?.Mobile} ${priceColumnMobileMargin?.left}${priceColumnMarginUnits?.Mobile}`;

    const pricingGridDesktopPaddingValue = `${pricingGridDesktopPadding?.top}${pricingGridPaddingUnits?.Desktop} ${pricingGridDesktopPadding?.right}${pricingGridPaddingUnits?.Desktop} ${pricingGridDesktopPadding?.bottom}${pricingGridPaddingUnits?.Desktop} ${pricingGridDesktopPadding?.left}${pricingGridPaddingUnits?.Desktop}`;
    const pricingGridTabletPaddingValue = `${pricingGridTabletPadding?.top}${pricingGridPaddingUnits?.Tablet} ${pricingGridTabletPadding?.right}${pricingGridPaddingUnits?.Tablet} ${pricingGridTabletPadding?.bottom}${pricingGridPaddingUnits?.Tablet} ${pricingGridTabletPadding?.left}${pricingGridPaddingUnits?.Tablet}`;
    const pricingGridMobilePaddingValue = `${pricingGridMobilePadding?.top}${pricingGridPaddingUnits?.Mobile} ${pricingGridMobilePadding?.right}${pricingGridPaddingUnits?.Mobile} ${pricingGridMobilePadding?.bottom}${pricingGridPaddingUnits?.Mobile} ${pricingGridMobilePadding?.left}${pricingGridPaddingUnits?.Mobile}`;
    
    const pricingGridDesktopMarginValue = `${pricingGridDesktopMargin?.top}${pricingGridMarginUnits?.Desktop} ${pricingGridDesktopMargin?.right}${pricingGridMarginUnits?.Desktop} ${pricingGridDesktopMargin?.bottom}${pricingGridMarginUnits?.Desktop} ${pricingGridDesktopMargin?.left}${pricingGridMarginUnits?.Desktop}`;
    const pricingGridTabletMarginValue = `${pricingGridTabletMargin?.top}${pricingGridMarginUnits?.Tablet} ${pricingGridTabletMargin?.right}${pricingGridMarginUnits?.Tablet} ${pricingGridTabletMargin?.bottom}${pricingGridMarginUnits?.Tablet} ${pricingGridTabletMargin?.left}${pricingGridMarginUnits?.Tablet}`;
    const pricingGridMobileMarginValue = `${pricingGridMobileMargin?.top}${pricingGridMarginUnits?.Mobile} ${pricingGridMobileMargin?.right}${pricingGridMarginUnits?.Mobile} ${pricingGridMobileMargin?.bottom}${pricingGridMarginUnits?.Mobile} ${pricingGridMobileMargin?.left}${pricingGridMarginUnits?.Mobile}`;

    const pricingGridDesktopBorderWidth = `${pricingGridBorderDesktop?.top}${pricingGridBorderUnits?.Desktop} ${pricingGridBorderDesktop?.right}${pricingGridBorderUnits?.Desktop} ${pricingGridBorderDesktop?.bottom}${pricingGridBorderUnits?.Desktop} ${pricingGridBorderDesktop?.left}${pricingGridBorderUnits?.Desktop}`;
    const pricingGridTabletBorderWidth = `${pricingGridBorderTablet?.top}${pricingGridBorderUnits?.Tablet} ${pricingGridBorderTablet?.right}${pricingGridBorderUnits?.Tablet} ${pricingGridBorderTablet?.bottom}${pricingGridBorderUnits?.Tablet} ${pricingGridBorderTablet?.left}${pricingGridBorderUnits?.Tablet}`;
    const pricingGridMobileBorderWidth = `${pricingGridBorderMobile?.top}${pricingGridBorderUnits?.Mobile} ${pricingGridBorderMobile?.right}${pricingGridBorderUnits?.Mobile} ${pricingGridBorderMobile?.bottom}${pricingGridBorderUnits?.Mobile} ${pricingGridBorderMobile?.left}${pricingGridBorderUnits?.Mobile}`;

    const pricingGridDesktopBorderRadiusWidth = `${pricingGridBorderRadiusDesktop?.top}${pricingGridBorderRadiusUnits?.Desktop} ${pricingGridBorderRadiusDesktop?.right}${pricingGridBorderRadiusUnits?.Desktop} ${pricingGridBorderRadiusDesktop?.bottom}${pricingGridBorderRadiusUnits?.Desktop} ${pricingGridBorderRadiusDesktop?.left}${pricingGridBorderRadiusUnits?.Desktop}`;
    const pricingGridTabletBorderRadiusWidth = `${pricingGridBorderRadiusTablet?.top}${pricingGridBorderRadiusUnits?.Tablet} ${pricingGridBorderRadiusTablet?.right}${pricingGridBorderRadiusUnits?.Tablet} ${pricingGridBorderRadiusTablet?.bottom}${pricingGridBorderRadiusUnits?.Tablet} ${pricingGridBorderRadiusTablet?.left}${pricingGridBorderRadiusUnits?.Tablet}`;
    const pricingGridMobileBorderRadiusWidth = `${pricingGridBorderRadiusMobile?.top}${pricingGridBorderRadiusUnits?.Mobile} ${pricingGridBorderRadiusMobile?.right}${pricingGridBorderRadiusUnits?.Mobile} ${pricingGridBorderRadiusMobile?.bottom}${pricingGridBorderRadiusUnits?.Mobile} ${pricingGridBorderRadiusMobile?.left}${pricingGridBorderRadiusUnits?.Mobile}`;

    const getFourSideValue = (spacing = {}, unit = '') => `${spacing?.top}${unit} ${spacing?.right}${unit} ${spacing?.bottom}${unit} ${spacing?.left}${unit}`;

    const priceColumnDesktopBorderWidthValue = getFourSideValue(priceColumnDesktopBorderWidth, priceColumnBorderUnits?.Desktop);
    const priceColumnTabletBorderWidthValue = `${priceColumnTabletBorderWidth?.top}${priceColumnBorderUnits?.Tablet} ${priceColumnTabletBorderWidth?.right}${priceColumnBorderUnits?.Tablet} ${priceColumnTabletBorderWidth?.bottom}${priceColumnBorderUnits?.Tablet} ${priceColumnTabletBorderWidth?.left}${priceColumnBorderUnits?.Tablet}`;
    const priceColumnMobileBorderWidthValue = `${priceColumnMobileBorderWidth?.top}${priceColumnBorderUnits?.Mobile} ${priceColumnMobileBorderWidth?.right}${priceColumnBorderUnits?.Mobile} ${priceColumnMobileBorderWidth?.bottom}${priceColumnBorderUnits?.Mobile} ${priceColumnMobileBorderWidth?.left}${priceColumnBorderUnits?.Mobile}`;

    const priceColumnDesktopBorderRadiusWidthValue = `${priceColumnDesktopBorderRadiusWidth?.top}${priceColumnBorderRadiusUnits?.Desktop} ${priceColumnDesktopBorderRadiusWidth?.right}${priceColumnBorderRadiusUnits?.Desktop} ${priceColumnDesktopBorderRadiusWidth?.bottom}${priceColumnBorderRadiusUnits?.Desktop} ${priceColumnDesktopBorderRadiusWidth?.left}${priceColumnBorderRadiusUnits?.Desktop}`;
    const priceColumnTabletBorderRadiusWidthValue = `${priceColumnTabBorderRadiusWidth?.top}${priceColumnBorderRadiusUnits?.Tablet} ${priceColumnTabBorderRadiusWidth?.right}${priceColumnBorderRadiusUnits?.Tablet} ${priceColumnTabBorderRadiusWidth?.bottom}${priceColumnBorderRadiusUnits?.Tablet} ${priceColumnTabBorderRadiusWidth?.left}${priceColumnBorderRadiusUnits?.Tablet}`;
    const priceColumnMobileBorderRadiusWidthValue = `${priceColumnMobileBorderRadiusWidth?.top}${priceColumnBorderRadiusUnits?.Mobile} ${priceColumnMobileBorderRadiusWidth?.right}${priceColumnBorderRadiusUnits?.Mobile} ${priceColumnMobileBorderRadiusWidth?.bottom}${priceColumnBorderRadiusUnits?.Mobile} ${priceColumnMobileBorderRadiusWidth?.left}${priceColumnBorderRadiusUnits?.Mobile}`;

    // Pricing Table Style    
    const pricingTableBlockStyle = ` 

        .${blockID} .fb-mc-pricing-column {
            ${priceColumnNormalBackgroundType === 'gradient' ? `  
                background: ${priceColumnNormalCustomGradientSwitcher && priceColumnNormalCustomGradientInputValue ? priceColumnNormalCustomGradientInputValue : priceColumnNormalGradientColor};
            `: `
                ${priceColumnNormalClassicColor ? `background: ${priceColumnNormalClassicColor};` : ''}
            `}
            ${priceColumnDesktopPaddingValue && priceColumnDesktopPadding?.top ? `padding: ${priceColumnDesktopPaddingValue};` : ''}
            ${priceColumnDesktopMarginValue && priceColumnDesktopMargin?.top ? `margin: ${priceColumnDesktopMarginValue};` : ''}
            ${priceColumnBorder ? `border: ${priceColumnBorder};` : ''}
            ${priceColumnBorderColor ? `border-color: ${priceColumnBorderColor};` : ''}
            ${priceColumnDesktopBorderWidthValue && priceColumnDesktopBorderWidth?.top ? `border-width: ${priceColumnDesktopBorderWidthValue};` : ''}
            ${priceColumnDesktopBorderRadiusWidthValue && priceColumnDesktopBorderRadiusWidth?.top? `border-radius: ${priceColumnDesktopBorderRadiusWidthValue};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .${blockID} .fb-mc-pricing-column:hover{
            ${priceColumnBorderHoverColor ? `border-color: ${priceColumnBorderHoverColor};` : ''}
            ${priceColumnHoverBackgroundType === 'gradient' ? `  
                background: ${priceColumnHoverCustomGradientSwitcher && priceColumnHoverCustomGradientInputValue ? priceColumnHoverCustomGradientInputValue : priceColumnHoverGradientColor ? priceColumnHoverGradientColor : 'linear-gradient(180deg, #D0D0D0 0%, #F7F7F7 100%)'};
            `: `
                ${priceColumnHoverClassicColor ? `background: ${priceColumnHoverClassicColor};` : ''}
            `}
        }

        .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-grid{
            display: grid;
            grid-template-columns: repeat(${pricingPresetStyle === 'preset-2' ? 4 : 3}, 1fr);
            ${gridRowGap ? `row-gap: ${gridRowGap.Desktop}${gridGapUnits.Desktop};` : ''}
            ${gridColumnGap ? `column-gap: ${gridColumnGap.Desktop}${gridGapUnits.Desktop};` : ''}
            overflow: hidden;
            ${pricingGridDesktopPaddingValue && pricingGridDesktopPadding?.top? `padding: ${pricingGridDesktopPaddingValue};` : ''}
            ${pricingGridDesktopMarginValue && pricingGridDesktopMargin?.top? `margin: ${pricingGridDesktopMarginValue};` : ''}
            ${priceGridNormalBackgroundType === 'gradient' ? `  
                background: ${priceGridNormalCustomGradientSwitcher && priceGridNormalCustomGradientInputValue ? priceGridNormalCustomGradientInputValue : priceGridNormalGradientColor};
            `: `
                ${priceGridNormalClassicColor ? `background: ${priceGridNormalClassicColor};` : ''}
            `}

            ${pricingGridBorder ? `border: ${pricingGridBorder};` : ''}
            ${pricingGridDesktopBorderWidth && pricingGridBorderDesktop?.top ? `border-width: ${pricingGridDesktopBorderWidth};` : ''}
            ${pricingGridDesktopBorderRadiusWidth && pricingGridBorderRadiusDesktop?.top? `border-radius: ${pricingGridDesktopBorderRadiusWidth};` : ''}
            ${pricingGridBorderColor ? `border-color: ${pricingGridBorderColor};` : ''}
            
            transition: all .3s ease-in-out;
        }
        .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-grid:hover{
            ${priceGridHoverBackgroundType === 'gradient' ? `  
                background: ${priceGridHoverCustomGradientSwitcher && priceGridHoverCustomGradientInputValue ? priceGridHoverCustomGradientInputValue : priceGridHoverGradientColor};
            `: `
                ${priceGridHoverClassicColor ? `background: ${priceGridHoverClassicColor};` : ''}
            `}
            ${pricingGridBorderHoverColor ? `border-color: ${pricingGridBorderHoverColor};` : ''}
        }

        .${blockID}.fb-mc-pricing-area {
            ${pricingTablePositionType === 'default' ? `position: relative;` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' ? `width: 100%;` : ''}
            ${pricingTablePositionType !== 'default' ? `position: ${pricingTablePositionType};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'left' && pricingTableHZLeftOffset?.Desktop !== undefined ? `left: ${pricingTableHZLeftOffset?.Desktop}${pricingTableHZLeftOffsetUnits?.Desktop};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'right' && pricingTableHZRightOffset?.Desktop !== undefined ? `right: ${pricingTableHZRightOffset?.Desktop}${pricingTableHZRightOffsetUnits?.Desktop};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'top' && pricingTableVRTopOffset?.Desktop !== undefined ? `top: ${pricingTableVRTopOffset?.Desktop}${pricingTableVRTopOffsetUnits?.Desktop};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'bottom' && pricingTableVRBottomOffset?.Desktop !== undefined ? `bottom: ${pricingTableVRBottomOffset?.Desktop}${pricingTableVRBottomOffsetUnits?.Desktop};` : ''}
            ${priceGlobalZIndex?.Desktop ? `z-index: ${priceGlobalZIndex?.Desktop};` : ''}			
            ${pricingTableOverflow !== 'default' ? `overflow: ${pricingTableOverflow};` : ''}
        }

        ${pricingPresetStyle === 'preset-1' ? ` 
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper{
                display: flex;
                top: 12px;
                left: unset;
                right: 12px;
                width: max-content;
            }
        `: ''}

        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper{
            position: relative;
        }

        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper {
            position: absolute;
            top: -55px;
            left: 0;
            width: stretch;
            text-align: center;
            ${pricingTopSectionNormalBackgroundType === 'gradient' ? `  
                background: ${pricingTopSectionNormalCustomGradientSwitcher && pricingTopSectionNormalCustomGradientInputValue ? pricingTopSectionNormalCustomGradientInputValue : pricingTopSectionNormalGradientColor};
            `: `
                ${pricingTopSectionNormalClassicColor ? `background: ${pricingTopSectionNormalClassicColor};` : ''}
            `}
            ${pricingTopSectionBorder ? `border: ${pricingTopSectionBorder};` : ''}
            ${pricingTopSectionBorderColor ? `border-color: ${pricingTopSectionBorderColor};` : ''}
            ${pricingTopSectionBorderDesktopWidth && pricingTopSectionBorderDesktop?.top ? `border-width: ${pricingTopSectionBorderDesktopWidth};` : ''}
            ${pricingTopSectionBorderRadiusDesktopWidth && pricingTopSectionBorderRadiusDesktop?.top ? `border-radius: ${pricingTopSectionBorderRadiusDesktopWidth};` : ''}
            ${pricingTopSectionDesktopPaddingWidth && pricingTopSectionDesktopPadding?.top ? `padding: ${pricingTopSectionDesktopPaddingWidth};` : ''}
            transition: all .3s ease-in-out;
        } 

        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper:hover {
            ${pricingTopSectionHoverBackgroundType === 'gradient' ? `  
                background: ${pricingTopSectionHoverCustomGradientSwitcher && pricingTopSectionHoverCustomGradientInputValue ? pricingTopSectionHoverCustomGradientInputValue : pricingTopSectionHoverGradientColor};
            `: `
                ${pricingTopSectionHoverClassicColor ? `background: ${pricingTopSectionHoverClassicColor};` : ''}
            `}
            ${pricingTopSectionBorderHoverColor ? `border-color: ${pricingTopSectionBorderHoverColor};` : ''}
        }

        .${blockID} .fb-multi-column-pricing-table-wrapper.fb-multi-column-pricing-table-top-section .fb-mc-pricing-column  .fb-mc-pricing-top-wrapper .fb-mc-pricing-top-text,
        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper{
            ${pricingTopSectionTextColor ? `color: ${pricingTopSectionTextColor};` : ''}

            ${pricingTopSectionTextGlobalTypoSwitcher?.fontFamily === true && pricingTopSectionTextGlobalTypographyData?.fontFamily ? `font-family: ${pricingTopSectionTextGlobalTypographyData?.fontFamily};` : ''}
            ${pricingTopSectionTextGlobalTypoSwitcher?.fontSize === true && pricingTopSectionTextGlobalTypographyData?.fontSize ? `font-size: ${pricingTopSectionTextGlobalTypographyData?.fontSize};` : ''}
            ${pricingTopSectionTextGlobalTypoSwitcher?.fontWeight === true && pricingTopSectionTextGlobalTypographyData?.fontWeight ? `font-weight: ${pricingTopSectionTextGlobalTypographyData?.fontWeight};` : ''}
            ${pricingTopSectionTextGlobalTypoSwitcher?.fontStyle === true && pricingTopSectionTextGlobalTypographyData?.fontStyle ? `font-style: ${pricingTopSectionTextGlobalTypographyData?.fontStyle};` : ''}
            ${pricingTopSectionTextGlobalTypoSwitcher?.textTransform === true && pricingTopSectionTextGlobalTypographyData?.textTransform ? `text-transform: ${pricingTopSectionTextGlobalTypographyData?.textTransform};` : ''}
            ${pricingTopSectionTextGlobalTypoSwitcher?.textDecoration === true && pricingTopSectionTextGlobalTypographyData?.textDecoration ? `text-decoration: ${pricingTopSectionTextGlobalTypographyData?.textDecoration};` : ''}
            ${pricingTopSectionTextGlobalTypoSwitcher?.letterSpacing === true && pricingTopSectionTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${pricingTopSectionTextGlobalTypographyData?.letterSpacing};` : ''}
            ${pricingTopSectionTextGlobalTypoSwitcher?.lineHeight === true && pricingTopSectionTextGlobalTypographyData?.lineHeight ? `line-height: ${pricingTopSectionTextGlobalTypographyData?.lineHeight};` : ''}

            ${pricingTopSectionTextGlobalTypoSwitcher?.fontFamily === false && pricingTopSectionTextFontFamily && pricingTopSectionTextFontFamily !== 'Default' ? `font-family: ${pricingTopSectionTextFontFamily};` : ""}
            ${pricingTopSectionTextGlobalTypoSwitcher?.fontSize === false && pricingTopSectionTextFontSize.Desktop ? `font-size: ${pricingTopSectionTextFontSize.Desktop}${pricingTopSectionTextFontSizeUnits.Desktop};` : ""}
            ${pricingTopSectionTextGlobalTypoSwitcher?.fontWeight === false && pricingTopSectionTextFontWeight ? `font-weight: ${pricingTopSectionTextFontWeight};` : ""}
            ${pricingTopSectionTextGlobalTypoSwitcher?.fontStyle === false && pricingTopSectionTextFontStyle ? `font-style: ${pricingTopSectionTextFontStyle};` : ""}
            ${pricingTopSectionTextGlobalTypoSwitcher?.textTransform === false && pricingTopSectionTextTextTransform ? `text-transform: ${pricingTopSectionTextTextTransform};` : ""} 
            ${pricingTopSectionTextGlobalTypoSwitcher?.textDecoration === false && pricingTopSectionTextTextDecoration ? `text-decoration: ${pricingTopSectionTextTextDecoration};` : ""}
            ${pricingTopSectionTextGlobalTypoSwitcher?.letterSpacing === false && pricingTopSectionTextLetterSpacing.Desktop ? `letter-spacing: ${pricingTopSectionTextLetterSpacing.Desktop}${pricingTopSectionTextLetterSpacingUnits.Desktop};` : ""}
            ${pricingTopSectionTextGlobalTypoSwitcher?.lineHeight === false && pricingTopSectionTextLineHeight.Desktop ? `line-height: ${pricingTopSectionTextLineHeight.Desktop}${pricingTopSectionTextLineHeightUnits.Desktop};` : ""}
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .${blockID} .fb-multi-column-pricing-table-wrapper.fb-multi-column-pricing-table-top-section .fb-mc-pricing-column .fb-mc-pricing-top-wrapper:hover .fb-mc-pricing-top-text,
        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper:hover {
            ${pricingTopSectionTextHoverColor ? `color: ${pricingTopSectionTextHoverColor};` : ''}
        }

        .${blockID} .fb-multi-column-pricing-table-wrapper {
            ${priceGlobalNormalBackgroundType === 'gradient' ? `  
                background: ${priceGlobalNormalCustomGradientSwitcher && priceGlobalNormalCustomGradientInputValue ? priceGlobalNormalCustomGradientInputValue : priceGlobalNormalGradientColor};
            `: `
                ${priceGlobalNormalClassicColor ? `background: ${priceGlobalNormalClassicColor};` : ''}
            `}
            ${globalDesktopPadding && priceGlobalPaddingDesktop?.top? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && priceGlobalMarginDesktop?.top? `margin: ${globalDesktopMargin};` : ''}
            ${priceGlobalBorder ? `border: ${priceGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && priceGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && priceGlobalBorderRadiusDesktop?.top? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${priceGlobalBorderColor ? `border-color: ${priceGlobalBorderColor};` : ''}
            ${priceGlobalBoxShadowCssValue ? `box-shadow: ${priceGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }

        .${blockID} .fb-multi-column-pricing-table-wrapper:hover {
            ${priceGlobalHoverBackgroundType === 'gradient' ? `  
                background: ${priceGlobalHoverCustomGradientSwitcher && priceGlobalHoverCustomGradientInputValue ? priceGlobalHoverCustomGradientInputValue : priceGlobalHoverGradientColor};
            `: `
                ${priceGlobalHoverClassicColor ? `background: ${priceGlobalHoverClassicColor};` : ''}
            `}
            ${priceGlobalBorderHoverColor ? `border-color: ${priceGlobalBorderHoverColor};` : ''}
            ${priceGlobalBoxShadowHoverCssValue ? `box-shadow: ${priceGlobalBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header {
            position: relative;
            ${pricingHeaderBgColor ? `background-color: ${pricingHeaderBgColor};` : ''}
            ${headerDesktopPadding && pricingHeaderDesktopPadding?.top? `padding: ${headerDesktopPadding};` : ''}
            ${pricingHeaderBorder ? `border: ${pricingHeaderBorder};` : ''}
            ${headerDesktopBorderWidth && pricingHeaderBorderDesktop?.top ? `border-width: ${headerDesktopBorderWidth};` : ''}
            ${headerDesktopBorderRadiusWidth && pricingHeaderBorderRadiusDesktop?.top? `border-radius: ${headerDesktopBorderRadiusWidth};` : ''}
            ${pricingHeaderBorderColor ? `border-color: ${pricingHeaderBorderColor};` : ''}

            align-items: ${headerAlignment === 'left' ? 'flex-start' : headerAlignment === 'center' ? 'center' : headerAlignment === 'right' ? 'flex-end' : 'center'};
            display: flex;
            flex-direction: column;
            transition: all .3s ease-in-out;
        }
    
        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header:hover {
            ${pricingHeaderBgHoverColor ? `background-color: ${pricingHeaderBgHoverColor};` : ''}
            ${pricingHeaderBorderHoverColor ? `border-color: ${pricingHeaderBorderHoverColor};` : ''}
        }

        ${pricingPresetStyle === 'default' ? ` 
            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header{
                ${headerDesktopPadding && pricingHeaderDesktopPadding?.top? `padding: ${headerDesktopPadding};` : 'padding: 42px'}
            }

        ` : ''}

        ${pricingPresetStyle === 'preset-1' ? ` 
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content {
                ${headerDesktopPadding && pricingHeaderDesktopPadding?.top? `padding: ${headerDesktopPadding};` : ''}
                ${pricingHeaderBgColor ? `background-color: ${pricingHeaderBgColor};` : ''}
                ${pricingHeaderBorder ? `border: ${pricingHeaderBorder};` : ''}
                ${headerDesktopBorderWidth && pricingHeaderBorderDesktop?.top ? `border-width: ${headerDesktopBorderWidth};` : ''}
                ${pricingHeaderBorderColor ? `border-color: ${pricingHeaderBorderColor};` : ''}
                border-bottom: 0;
                display: flex;
                flex-direction: column;
                align-items: ${headerAlignment === 'left' ? 'flex-start' : headerAlignment === 'center' ? 'center' : headerAlignment === 'right' ? 'flex-end' : 'center'};
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(1) .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content{
                border-radius: 0 0 0 16px;
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(3) .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content{
                border-radius: 0 0 16px 0;
            }

            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(1) .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header{
                border-radius: 16px 0 0 0;
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(3) .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header{
                border-radius: 0 16px 0 0;
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(3) .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content, 
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(3) .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header {
                border-right: 0;
            }

            .${blockID} .fb-layout-two .fb-mc-pricing-support, .${blockID} .fb-layout-two .fb-mc-pricing-plan-activation-wrapper{
                width: 100%;
                ${activationContentAlignment ? `text-align: ${activationContentAlignment};` : ''} 
            }

            .${blockID} .fb-layout-two .fb-mc-pricing-column:nth-child(1) .fb-mc-pricing-feature-item {
                padding-left: 0;
            }
            .${blockID} .fb-layout-two .fb-mc-pricing-feature-item:last-child {
                padding-bottom: 0;
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(1) .fb-mc-pricing-features-wrapper{
                border-radius: 16px 0 0 16px;
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(3) .fb-mc-pricing-features-wrapper{
                border-radius: 0 16px 16px 0;
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(3) .fb-mc-pricing-features-wrapper{
                padding-right: 42px;    
            }
            .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(1) .fb-mc-pricing-features-wrapper{
                padding-left: 42px;    
            }

            .${blockID} .fb-layout-two .fb-mc-pricing-feature-title{
                ${featureTitleAlignment ? `text-align: ${featureTitleAlignment};` : ''}
                position: absolute;
                top: ${featureTitlePosition?.Desktop}${featureTitlePositionUnits?.Desktop};
                left: 42px;
                width: stretch;
                z-index: 999;
            }

            .${blockID} .fb-layout-two .fb-mc-pricing-feature-title-text{
                ${pricingfeatureTitleColorSwitcher === 'normal' ? `color: ${pricingfeatureTitleColor};` : ''}

                ${featureTitleGlobalTypoSwitcher?.fontFamily === true && featureTitleGlobalTypographyData?.fontFamily ? `font-family: ${featureTitleGlobalTypographyData?.fontFamily};` : ''}
                ${featureTitleGlobalTypoSwitcher?.fontSize === true && featureTitleGlobalTypographyData?.fontSize ? `font-size: ${featureTitleGlobalTypographyData?.fontSize};` : ''}
                ${featureTitleGlobalTypoSwitcher?.fontWeight === true && featureTitleGlobalTypographyData?.fontWeight ? `font-weight: ${featureTitleGlobalTypographyData?.fontWeight};` : ''}
                ${featureTitleGlobalTypoSwitcher?.fontStyle === true && featureTitleGlobalTypographyData?.fontStyle ? `font-style: ${featureTitleGlobalTypographyData?.fontStyle};` : ''}
                ${featureTitleGlobalTypoSwitcher?.textTransform === true && featureTitleGlobalTypographyData?.textTransform ? `text-transform: ${featureTitleGlobalTypographyData?.textTransform};` : ''}
                ${featureTitleGlobalTypoSwitcher?.textDecoration === true && featureTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${featureTitleGlobalTypographyData?.textDecoration};` : ''}
                ${featureTitleGlobalTypoSwitcher?.letterSpacing === true && featureTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${featureTitleGlobalTypographyData?.letterSpacing};` : ''}
                ${featureTitleGlobalTypoSwitcher?.lineHeight === true && featureTitleGlobalTypographyData?.lineHeight ? `line-height: ${featureTitleGlobalTypographyData?.lineHeight};` : ''}

                ${featureTitleGlobalTypoSwitcher?.fontFamily === false && featureTitleFontFamily && featureTitleFontFamily !== 'Default' ? `font-family: ${featureTitleFontFamily};` : ''}
                ${featureTitleGlobalTypoSwitcher?.fontSize === false && featureTitleFontSize?.Desktop ? `font-size: ${featureTitleFontSize?.Desktop}${featureTitleFontSizeUnits?.Desktop};` : ''}
                ${featureTitleGlobalTypoSwitcher?.fontWeight === false && featureTitleFontWeight ? `font-weight: ${featureTitleFontWeight};` : ''}
                ${featureTitleGlobalTypoSwitcher?.fontStyle === false && featureTitleFontStyle ? `font-style: ${featureTitleFontStyle};` : ''}
                ${featureTitleGlobalTypoSwitcher?.textTransform === false && featureTitleTextTransform ? `text-transform: ${featureTitleTextTransform};` : ''}
                ${featureTitleGlobalTypoSwitcher?.textDecoration === false && featureTitleTextDecoration ? `text-decoration: ${featureTitleTextDecoration};` : ''}
                ${featureTitleGlobalTypoSwitcher?.letterSpacing === false && featureTitleLetterSpacing?.Desktop ? `letter-spacing: ${featureTitleLetterSpacing?.Desktop}${featureTitleLetterSpacingUnits?.Desktop};` : ''}
                ${featureTitleGlobalTypoSwitcher?.lineHeight === false && featureTitleLineHeight?.Desktop ? `line-height: ${featureTitleLineHeight?.Desktop}${featureTitleLineHeightUnits?.Desktop};` : ''}
            }
            .${blockID} .fb-layout-two .fb-mc-pricing-feature-title-text:hover {
                ${featureTitleHoverColor ? `color: ${featureTitleHoverColor};` : ''}
            }
        ` : ''}

        .${blockID} .fb-mc-pricing-ribbon-icon {
            ${priceIconPositionSwitcher ? 'position: absolute;' : ''}
            ${priceIconPositionSwitcher ? `top: ${priceIconPositionTop?.Desktop && priceIconPositionTopUnits?.Desktop ? `${priceIconPositionTop?.Desktop}${priceIconPositionTopUnits?.Desktop}` : '0'};` : ''}
            ${priceIconPositionSwitcher ? `left: ${priceIconPositionLeft?.Desktop && priceIconPositionLeftUnits?.Desktop ? `${priceIconPositionLeft?.Desktop}${priceIconPositionLeftUnits?.Desktop}` : '0'};` : ''}
            ${priceIconBgSize?.Desktop && priceIconBgSizeUnits?.Desktop ? `width: ${priceIconBgSize?.Desktop}${priceIconBgSizeUnits?.Desktop};` : ''}
            ${priceIconBgSize?.Desktop && priceIconBgSizeUnits?.Desktop ? `height: ${priceIconBgSize?.Desktop}${priceIconBgSizeUnits?.Desktop};` : ''}
            ${priceIconBgColor ? `background-color: ${priceIconBgColor};` : ''}
            ${priceIconBorder ? `border: ${priceIconBorder};` : ''}
            ${priceIconDesktopBorderWidthValue && priceIconBorderDesktop?.top ? `border-width: ${priceIconDesktopBorderWidthValue};` : ''}
            ${priceIconDesktopBorderRadiusWidthValue && priceIconBorderRadiusDesktop?.top ? `border-radius: ${priceIconDesktopBorderRadiusWidthValue};` : ''}
            ${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockID} .fb-mc-pricing-ribbon-icon:hover {
            ${priceIconBgHoverColor ? `background-color: ${priceIconBgHoverColor};` : ''}
            ${priceIconBorderHoverColor ? `border-color: ${priceIconBorderHoverColor};` : ''}
        }

        .${blockID} .fb-mc-pricing-ribbon-icon svg {
            width: ${priceIconSize?.Desktop}${priceIconSizeUnits?.Desktop};
            height: ${priceIconSize?.Desktop}${priceIconSizeUnits?.Desktop};
            fill: ${priceIconColor};
            transition: fill 0.3s ease;
        }

        .${blockID} .fb-mc-pricing-ribbon-icon:hover svg {
            ${priceIconHoverColor ? `fill: ${priceIconHoverColor};` : ''}
        }

        .${blockID}	.fb-mc-pricing-price-wrapper {
            ${priceDesktopPaddingWidth && priceDesktopPadding?.top? `padding: ${priceDesktopPaddingWidth};` : ''}
            text-align: ${pricingAlignment === 'left' ? 'left' : pricingAlignment === 'center' ? 'center' : pricingAlignment === 'right' ? 'right' : 'center'};
        }

        .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price.line-through {
            text-decoration: line-through;
            padding-left: 5px;
        }

        ${pricingPresetStyle === 'preset-1' ? ` 

            .${blockID} .fb-layout-two .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price.line-through .price-currency{

                ${normalPricingColor ? `color: ${normalPricingColor};` : ''}

                ${normalPricingGlobalTypoSwitcher?.fontFamily === true && normalPricingGlobalTypographyData?.fontFamily ? `font-family: ${normalPricingGlobalTypographyData?.fontFamily};` : ''}
                ${normalPricingGlobalTypoSwitcher?.fontSize === true && normalPricingGlobalTypographyData?.fontSize ? `font-size: ${normalPricingGlobalTypographyData?.fontSize};` : ''}
                ${normalPricingGlobalTypoSwitcher?.fontWeight === true && normalPricingGlobalTypographyData?.fontWeight ? `font-weight: ${normalPricingGlobalTypographyData?.fontWeight};` : ''}
                ${normalPricingGlobalTypoSwitcher?.fontStyle === true && normalPricingGlobalTypographyData?.fontStyle ? `font-style: ${normalPricingGlobalTypographyData?.fontStyle};` : ''}
                ${normalPricingGlobalTypoSwitcher?.textTransform === true && normalPricingGlobalTypographyData?.textTransform ? `text-transform: ${normalPricingGlobalTypographyData?.textTransform};` : ''}
                ${normalPricingGlobalTypoSwitcher?.textDecoration === true && normalPricingGlobalTypographyData?.textDecoration ? `text-decoration: ${normalPricingGlobalTypographyData?.textDecoration};` : ''}
                ${normalPricingGlobalTypoSwitcher?.letterSpacing === true && normalPricingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${normalPricingGlobalTypographyData?.letterSpacing};` : ''}
                ${normalPricingGlobalTypoSwitcher?.lineHeight === true && normalPricingGlobalTypographyData?.lineHeight ? `line-height: ${normalPricingGlobalTypographyData?.lineHeight};` : ''}

                ${normalPricingGlobalTypoSwitcher?.fontFamily === false && normalPricingFontFamily && normalPricingFontFamily !== 'Default' ? `font-family: ${normalPricingFontFamily};` : ""}
                ${normalPricingGlobalTypoSwitcher?.fontSize === false && normalPricingFontSize?.Desktop ? `font-size: ${normalPricingFontSize?.Desktop}${normalPricingFontSizeUnits?.Desktop};` : ""}
                ${normalPricingGlobalTypoSwitcher?.fontWeight === false && normalPricingFontWeight ? `font-weight: ${normalPricingFontWeight};` : ""}
                ${normalPricingGlobalTypoSwitcher?.fontStyle === false && normalPricingFontStyle ? `font-style: ${normalPricingFontStyle};` : ""}
                ${normalPricingGlobalTypoSwitcher?.textTransform === false && normalPricingTextTransform ? `text-transform: ${normalPricingTextTransform};` : ""}
                ${normalPricingGlobalTypoSwitcher?.textDecoration === false && normalPricingTextDecoration ? `text-decoration: ${normalPricingTextDecoration};` : ""}
                ${normalPricingGlobalTypoSwitcher?.letterSpacing === false && normalPricingLetterSpacing?.Desktop ? `letter-spacing: ${normalPricingLetterSpacing?.Desktop}${normalPricingLetterSpacingUnits?.Desktop};` : ""}
                ${normalPricingGlobalTypoSwitcher?.lineHeight === false && normalPricingLineHeight?.Desktop ? `line-height: ${normalPricingLineHeight?.Desktop}${normalPricingLineHeightUnits?.Desktop};` : ""}
            }
            
            .${blockID} .fb-layout-two .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price.line-through .price-currency:hover{
                ${normalPricingHoverColor ? `color: ${normalPricingHoverColor};` : ''}
            }

        `: ''}

        .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price {
            ${normalPricingColor ? `color: ${normalPricingColor};` : ''}

            ${normalPricingGlobalTypoSwitcher?.fontFamily === true && normalPricingGlobalTypographyData?.fontFamily ? `font-family: ${normalPricingGlobalTypographyData?.fontFamily};` : ''}
            ${normalPricingGlobalTypoSwitcher?.fontSize === true && normalPricingGlobalTypographyData?.fontSize ? `font-size: ${normalPricingGlobalTypographyData?.fontSize};` : ''}
            ${normalPricingGlobalTypoSwitcher?.fontWeight === true && normalPricingGlobalTypographyData?.fontWeight ? `font-weight: ${normalPricingGlobalTypographyData?.fontWeight};` : ''}
            ${normalPricingGlobalTypoSwitcher?.fontStyle === true && normalPricingGlobalTypographyData?.fontStyle ? `font-style: ${normalPricingGlobalTypographyData?.fontStyle};` : ''}
            ${normalPricingGlobalTypoSwitcher?.textTransform === true && normalPricingGlobalTypographyData?.textTransform ? `text-transform: ${normalPricingGlobalTypographyData?.textTransform};` : ''}
            ${normalPricingGlobalTypoSwitcher?.textDecoration === true && normalPricingGlobalTypographyData?.textDecoration ? `text-decoration: ${normalPricingGlobalTypographyData?.textDecoration};` : ''}
            ${normalPricingGlobalTypoSwitcher?.letterSpacing === true && normalPricingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${normalPricingGlobalTypographyData?.letterSpacing};` : ''}
            ${normalPricingGlobalTypoSwitcher?.lineHeight === true && normalPricingGlobalTypographyData?.lineHeight ? `line-height: ${normalPricingGlobalTypographyData?.lineHeight};` : ''}

            ${normalPricingGlobalTypoSwitcher?.fontFamily === false && normalPricingFontFamily && normalPricingFontFamily !== 'Default' ? `font-family: ${normalPricingFontFamily};` : ""}
            ${normalPricingGlobalTypoSwitcher?.fontSize === false && normalPricingFontSize?.Desktop ? `font-size: ${normalPricingFontSize?.Desktop}${normalPricingFontSizeUnits?.Desktop};` : ""}
            ${normalPricingGlobalTypoSwitcher?.fontWeight === false && normalPricingFontWeight ? `font-weight: ${normalPricingFontWeight};` : ""}
            ${normalPricingGlobalTypoSwitcher?.fontStyle === false && normalPricingFontStyle ? `font-style: ${normalPricingFontStyle};` : ""}
            ${normalPricingGlobalTypoSwitcher?.textTransform === false && normalPricingTextTransform ? `text-transform: ${normalPricingTextTransform};` : ""}
            ${normalPricingGlobalTypoSwitcher?.textDecoration === false && normalPricingTextDecoration ? `text-decoration: ${normalPricingTextDecoration};` : ""}
            ${normalPricingGlobalTypoSwitcher?.letterSpacing === false && normalPricingLetterSpacing?.Desktop ? `letter-spacing: ${normalPricingLetterSpacing?.Desktop}${normalPricingLetterSpacingUnits?.Desktop};` : ""}
            ${normalPricingGlobalTypoSwitcher?.lineHeight === false && normalPricingLineHeight?.Desktop ? `line-height: ${normalPricingLineHeight?.Desktop}${normalPricingLineHeightUnits?.Desktop};` : ""}
            transition: all 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price:hover {
            ${normalPricingHoverColor ? `color: ${normalPricingHoverColor};` : ''}
        }

        .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-sale-price {
            ${salePricingColor ? `color: ${salePricingColor};` : ''}

            ${salePricingGlobalTypoSwitcher?.fontFamily === true && salePricingGlobalTypographyData?.fontFamily ? `font-family: ${salePricingGlobalTypographyData?.fontFamily};` : ''}
            ${salePricingGlobalTypoSwitcher?.fontSize === true && salePricingGlobalTypographyData?.fontSize ? `font-size: ${salePricingGlobalTypographyData?.fontSize};` : ''}
            ${salePricingGlobalTypoSwitcher?.fontWeight === true && salePricingGlobalTypographyData?.fontWeight ? `font-weight: ${salePricingGlobalTypographyData?.fontWeight};` : ''}
            ${salePricingGlobalTypoSwitcher?.fontStyle === true && salePricingGlobalTypographyData?.fontStyle ? `font-style: ${salePricingGlobalTypographyData?.fontStyle};` : ''}
            ${salePricingGlobalTypoSwitcher?.textTransform === true && salePricingGlobalTypographyData?.textTransform ? `text-transform: ${salePricingGlobalTypographyData?.textTransform};` : ''}
            ${salePricingGlobalTypoSwitcher?.textDecoration === true && salePricingGlobalTypographyData?.textDecoration ? `text-decoration: ${salePricingGlobalTypographyData?.textDecoration};` : ''}
            ${salePricingGlobalTypoSwitcher?.letterSpacing === true && salePricingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${salePricingGlobalTypographyData?.letterSpacing};` : ''}
            ${salePricingGlobalTypoSwitcher?.lineHeight === true && salePricingGlobalTypographyData?.lineHeight ? `line-height: ${salePricingGlobalTypographyData?.lineHeight};` : ''}

            ${salePricingGlobalTypoSwitcher?.fontFamily === false && salePricingFontFamily && salePricingFontFamily !== 'Default' ? `font-family: ${salePricingFontFamily};` : ""}
            ${salePricingGlobalTypoSwitcher?.fontSize === false && salePricingFontSize?.Desktop ? `font-size: ${salePricingFontSize?.Desktop}${salePricingFontSizeUnits?.Desktop};` : ""}
            ${salePricingGlobalTypoSwitcher?.fontWeight === false && salePricingFontWeight ? `font-weight: ${salePricingFontWeight};` : ""}
            ${salePricingGlobalTypoSwitcher?.fontStyle === false && salePricingFontStyle ? `font-style: ${salePricingFontStyle};` : ""}
            ${salePricingGlobalTypoSwitcher?.textTransform === false && salePricingTextTransform ? `text-transform: ${salePricingTextTransform};` : ""}
            ${salePricingGlobalTypoSwitcher?.textDecoration === false && salePricingTextDecoration ? `text-decoration: ${salePricingTextDecoration};` : ""}
            ${salePricingGlobalTypoSwitcher?.letterSpacing === false && salePricingLetterSpacing?.Desktop ? `letter-spacing: ${salePricingLetterSpacing?.Desktop}${salePricingLetterSpacingUnits?.Desktop};` : ""}
            ${salePricingGlobalTypoSwitcher?.lineHeight === false && salePricingLineHeight?.Desktop ? `line-height: ${salePricingLineHeight?.Desktop}${salePricingLineHeightUnits?.Desktop};` : ""}
            transition: all 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-sale-price:hover {
            ${salePricingHoverColor ? `color: ${salePricingHoverColor};` : ''}
        }

        .${blockID} .fb-mc-pricing-price-wrapper .price-currency {
            ${priceCurrencyColor ? `color: ${priceCurrencyColor};` : ''}

            ${priceCurrencyGlobalTypoSwitcher?.fontFamily === true && priceCurrencyGlobalTypographyData?.fontFamily ? `font-family: ${priceCurrencyGlobalTypographyData?.fontFamily};` : ''}
            ${priceCurrencyGlobalTypoSwitcher?.fontSize === true && priceCurrencyGlobalTypographyData?.fontSize ? `font-size: ${priceCurrencyGlobalTypographyData?.fontSize};` : ''}
            ${priceCurrencyGlobalTypoSwitcher?.fontWeight === true && priceCurrencyGlobalTypographyData?.fontWeight ? `font-weight: ${priceCurrencyGlobalTypographyData?.fontWeight};` : ''}
            ${priceCurrencyGlobalTypoSwitcher?.fontStyle === true && priceCurrencyGlobalTypographyData?.fontStyle ? `font-style: ${priceCurrencyGlobalTypographyData?.fontStyle};` : ''}
            ${priceCurrencyGlobalTypoSwitcher?.textTransform === true && priceCurrencyGlobalTypographyData?.textTransform ? `text-transform: ${priceCurrencyGlobalTypographyData?.textTransform};` : ''}
            ${priceCurrencyGlobalTypoSwitcher?.textDecoration === true && priceCurrencyGlobalTypographyData?.textDecoration ? `text-decoration: ${priceCurrencyGlobalTypographyData?.textDecoration};` : ''}
            ${priceCurrencyGlobalTypoSwitcher?.letterSpacing === true && priceCurrencyGlobalTypographyData?.letterSpacing ? `letter-spacing: ${priceCurrencyGlobalTypographyData?.letterSpacing};` : ''}
            ${priceCurrencyGlobalTypoSwitcher?.lineHeight === true && priceCurrencyGlobalTypographyData?.lineHeight ? `line-height: ${priceCurrencyGlobalTypographyData?.lineHeight};` : ''}

            ${priceCurrencyGlobalTypoSwitcher?.fontFamily === false && priceCurrencyFontFamily && priceCurrencyFontFamily !== 'Default' ? `font-family: ${priceCurrencyFontFamily};` : ""}
            ${priceCurrencyGlobalTypoSwitcher?.fontSize === false && priceCurrencyFontSize?.Desktop ? `font-size: ${priceCurrencyFontSize?.Desktop}${priceCurrencyFontSizeUnits?.Desktop};` : ""}
            ${priceCurrencyGlobalTypoSwitcher?.fontWeight === false && priceCurrencyFontWeight ? `font-weight: ${priceCurrencyFontWeight};` : ""}
            ${priceCurrencyGlobalTypoSwitcher?.fontStyle === false && priceCurrencyFontStyle ? `font-style: ${priceCurrencyFontStyle};` : ""}
            ${priceCurrencyGlobalTypoSwitcher?.textTransform === false && priceCurrencyTextTransform ? `text-transform: ${priceCurrencyTextTransform};` : ""}
            ${priceCurrencyGlobalTypoSwitcher?.textDecoration === false && priceCurrencyTextDecoration ? `text-decoration: ${priceCurrencyTextDecoration};` : ""}
            ${priceCurrencyGlobalTypoSwitcher?.letterSpacing === false && priceCurrencyLetterSpacing?.Desktop ? `letter-spacing: ${priceCurrencyLetterSpacing?.Desktop}${priceCurrencyLetterSpacingUnits?.Desktop};` : ""}
            ${priceCurrencyGlobalTypoSwitcher?.lineHeight === false && priceCurrencyLineHeight?.Desktop ? `line-height: ${priceCurrencyLineHeight?.Desktop}${priceCurrencyLineHeightUnits?.Desktop};` : ""}
            transition: all 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-price-wrapper .price-currency:hover {
            ${priceCurrencyHoverColor ? `color: ${priceCurrencyHoverColor};` : ''}
        }

        .${blockID} .fb-mc-pricing-price-wrapper .price-period {
            ${pricePeriodColor ? `color: ${pricePeriodColor};` : ''}

            ${pricePeriodGlobalTypoSwitcher?.fontFamily === true && pricePeriodGlobalTypographyData?.fontFamily ? `font-family: ${pricePeriodGlobalTypographyData?.fontFamily};` : ''}
            ${pricePeriodGlobalTypoSwitcher?.fontSize === true && pricePeriodGlobalTypographyData?.fontSize ? `font-size: ${pricePeriodGlobalTypographyData?.fontSize};` : ''}
            ${pricePeriodGlobalTypoSwitcher?.fontWeight === true && pricePeriodGlobalTypographyData?.fontWeight ? `font-weight: ${pricePeriodGlobalTypographyData?.fontWeight};` : ''}
            ${pricePeriodGlobalTypoSwitcher?.fontStyle === true && pricePeriodGlobalTypographyData?.fontStyle ? `font-style: ${pricePeriodGlobalTypographyData?.fontStyle};` : ''}
            ${pricePeriodGlobalTypoSwitcher?.textTransform === true && pricePeriodGlobalTypographyData?.textTransform ? `text-transform: ${pricePeriodGlobalTypographyData?.textTransform};` : ''}
            ${pricePeriodGlobalTypoSwitcher?.textDecoration === true && pricePeriodGlobalTypographyData?.textDecoration ? `text-decoration: ${pricePeriodGlobalTypographyData?.textDecoration};` : ''}
            ${pricePeriodGlobalTypoSwitcher?.letterSpacing === true && pricePeriodGlobalTypographyData?.letterSpacing ? `letter-spacing: ${pricePeriodGlobalTypographyData?.letterSpacing};` : ''}
            ${pricePeriodGlobalTypoSwitcher?.lineHeight === true && pricePeriodGlobalTypographyData?.lineHeight ? `line-height: ${pricePeriodGlobalTypographyData?.lineHeight};` : ''}

            ${pricePeriodGlobalTypoSwitcher?.fontFamily === false && pricePeriodFontFamily && pricePeriodFontFamily !== 'Default' ? `font-family: ${pricePeriodFontFamily};` : ""}
            ${pricePeriodGlobalTypoSwitcher?.fontSize === false && pricePeriodFontSize?.Desktop ? `font-size: ${pricePeriodFontSize?.Desktop}${pricePeriodFontSizeUnits?.Desktop};` : ""}
            ${pricePeriodGlobalTypoSwitcher?.fontWeight === false && pricePeriodFontWeight ? `font-weight: ${pricePeriodFontWeight};` : ""}
            ${pricePeriodGlobalTypoSwitcher?.fontStyle === false && pricePeriodFontStyle ? `font-style: ${pricePeriodFontStyle};` : ""}
            ${pricePeriodGlobalTypoSwitcher?.textTransform === false && pricePeriodTextTransform ? `text-transform: ${pricePeriodTextTransform};` : ""}
            ${pricePeriodGlobalTypoSwitcher?.textDecoration === false && pricePeriodTextDecoration ? `text-decoration: ${pricePeriodTextDecoration};` : ""}
            ${pricePeriodGlobalTypoSwitcher?.letterSpacing === false && pricePeriodLetterSpacing?.Desktop ? `letter-spacing: ${pricePeriodLetterSpacing?.Desktop}${pricePeriodLetterSpacingUnits?.Desktop};` : ""}
            ${pricePeriodGlobalTypoSwitcher?.lineHeight === false && pricePeriodLineHeight?.Desktop ? `line-height: ${pricePeriodLineHeight?.Desktop}${pricePeriodLineHeightUnits?.Desktop};` : ""}
            transition: all 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-price-wrapper .price-period:hover {
            ${pricePeriodHoverColor ? `color: ${pricePeriodHoverColor};` : ''}
        }

        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header .fb-mc-pricing-title {
            ${pricingTitleColor ? `color: ${pricingTitleColor};` : ''}

            ${pricingTitleGlobalTypoSwitcher?.fontFamily === true && pricingTitleGlobalTypographyData?.fontFamily ? `font-family: ${pricingTitleGlobalTypographyData?.fontFamily};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.fontSize === true && pricingTitleGlobalTypographyData?.fontSize ? `font-size: ${pricingTitleGlobalTypographyData?.fontSize};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.fontWeight === true && pricingTitleGlobalTypographyData?.fontWeight ? `font-weight: ${pricingTitleGlobalTypographyData?.fontWeight};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.fontStyle === true && pricingTitleGlobalTypographyData?.fontStyle ? `font-style: ${pricingTitleGlobalTypographyData?.fontStyle};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.textTransform === true && pricingTitleGlobalTypographyData?.textTransform ? `text-transform: ${pricingTitleGlobalTypographyData?.textTransform};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.textDecoration === true && pricingTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${pricingTitleGlobalTypographyData?.textDecoration};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.letterSpacing === true && pricingTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${pricingTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.lineHeight === true && pricingTitleGlobalTypographyData?.lineHeight ? `line-height: ${pricingTitleGlobalTypographyData?.lineHeight};` : ''}

            ${pricingTitleGlobalTypoSwitcher?.fontFamily === false && pricingTitleFontFamily && pricingTitleFontFamily !== 'Default' ? `font-family: ${pricingTitleFontFamily};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.fontSize === false && pricingTitleFontSize?.Desktop ? `font-size: ${pricingTitleFontSize?.Desktop}${pricingTitleFontSizeUnits?.Desktop};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.fontWeight === false && pricingTitleFontWeight ? `font-weight: ${pricingTitleFontWeight};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.fontStyle === false && pricingTitleFontStyle ? `font-style: ${pricingTitleFontStyle};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.textTransform === false && pricingTitleTextTransform ? `text-transform: ${pricingTitleTextTransform};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.textDecoration === false && pricingTitleTextDecoration ? `text-decoration: ${pricingTitleTextDecoration};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.letterSpacing === false && pricingTitleLetterSpacing?.Desktop ? `letter-spacing: ${pricingTitleLetterSpacing?.Desktop}${pricingTitleLetterSpacingUnits?.Desktop};` : ''}
            ${pricingTitleGlobalTypoSwitcher?.lineHeight === false && pricingTitleLineHeight?.Desktop ? `line-height: ${pricingTitleLineHeight?.Desktop}${pricingTitleLineHeightUnits?.Desktop};` : ''}

            ${titleDesktopPadding && pricingTitleDesktopPadding?.top? `padding: ${titleDesktopPadding};` : ''}
            ${titleDesktopMargin && pricingTitleDesktopMargin?.top? `margin: ${titleDesktopMargin};` : ''}
            transition: all 0.3s ease;

        }
        .${blockID} .fb-mc-pricing-title:hover {
            ${pricingTitleHoverColor ? `color: ${pricingTitleHoverColor};` : ''}
        }
        .${blockID} .fb-mc-pricing-subtitle {
            ${pricingSubtitleColor ? `color: ${pricingSubtitleColor};` : ''}

            ${pricingSubtitleGlobalTypoSwitcher?.fontFamily === true && pricingSubtitleGlobalTypographyData?.fontFamily ? `font-family: ${pricingSubtitleGlobalTypographyData?.fontFamily};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.fontSize === true && pricingSubtitleGlobalTypographyData?.fontSize ? `font-size: ${pricingSubtitleGlobalTypographyData?.fontSize};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.fontWeight === true && pricingSubtitleGlobalTypographyData?.fontWeight ? `font-weight: ${pricingSubtitleGlobalTypographyData?.fontWeight};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.fontStyle === true && pricingSubtitleGlobalTypographyData?.fontStyle ? `font-style: ${pricingSubtitleGlobalTypographyData?.fontStyle};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.textTransform === true && pricingSubtitleGlobalTypographyData?.textTransform ? `text-transform: ${pricingSubtitleGlobalTypographyData?.textTransform};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.textDecoration === true && pricingSubtitleGlobalTypographyData?.textDecoration ? `text-decoration: ${pricingSubtitleGlobalTypographyData?.textDecoration};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.letterSpacing === true && pricingSubtitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${pricingSubtitleGlobalTypographyData?.letterSpacing};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.lineHeight === true && pricingSubtitleGlobalTypographyData?.lineHeight ? `line-height: ${pricingSubtitleGlobalTypographyData?.lineHeight};` : ''}

            ${pricingSubtitleGlobalTypoSwitcher?.fontFamily === false && pricingSubtitleFontFamily && pricingSubtitleFontFamily !== 'Default' ? `font-family: ${pricingSubtitleFontFamily};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.fontSize === false && pricingSubtitleFontSize?.Desktop ? `font-size: ${pricingSubtitleFontSize?.Desktop}${pricingSubtitleFontSizeUnits?.Desktop};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.fontWeight === false && pricingSubtitleFontWeight ? `font-weight: ${pricingSubtitleFontWeight};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.fontStyle === false && pricingSubtitleFontStyle ? `font-style: ${pricingSubtitleFontStyle};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.textTransform === false && pricingSubtitleTextTransform ? `text-transform: ${pricingSubtitleTextTransform};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.textDecoration === false && pricingSubtitleTextDecoration ? `text-decoration: ${pricingSubtitleTextDecoration};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.letterSpacing === false && pricingSubtitleLetterSpacing?.Desktop ? `letter-spacing: ${pricingSubtitleLetterSpacing?.Desktop}${pricingSubtitleLetterSpacingUnits?.Desktop};` : ''}
            ${pricingSubtitleGlobalTypoSwitcher?.lineHeight === false && pricingSubtitleLineHeight?.Desktop ? `line-height: ${pricingSubtitleLineHeight?.Desktop}${pricingSubtitleLineHeightUnits?.Desktop};` : ''}

            ${subtitleDesktopPadding && pricingSubtitleDesktopPadding?.top? `padding: ${subtitleDesktopPadding};` : ''}
            ${subtitleDesktopMargin && pricingSubtitleDesktopMargin?.top? `margin: ${subtitleDesktopMargin};` : ''}
            transition: all 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-subtitle:hover {
            ${pricingSubtitleHoverColor ? `color: ${pricingSubtitleHoverColor};` : ''}
        }

        .${blockID} .fb-mc-pricing-plan-activation-wrapper{
            ${priceAfterTextNormalBackgroundType === 'gradient' ? `  
                background: ${priceAfterTextNormalCustomGradientSwitcher && priceAfterTextNormalCustomGradientInputValue ? priceAfterTextNormalCustomGradientInputValue : priceAfterTextNormalGradientColor};
            `: `
                ${priceAfterTextNormalClassicColor ? `background: ${priceAfterTextNormalClassicColor};` : ''}
            `}

            ${priceAfterTextBorder ? `border: ${priceAfterTextBorder};` : ''}
            ${priceAfterTextBorderColor ? `border-color: ${priceAfterTextBorderColor};` : ''}
            ${priceAfterTextBorderDesktopWidth && priceAfterTextBorderDesktop?.top? `border-width: ${priceAfterTextBorderDesktopWidth};` : ''}
            ${priceAfterTextBorderRadiusDesktopWidth && priceAfterTextBorderRadiusDesktop?.top? `border-radius: ${priceAfterTextBorderRadiusDesktopWidth};` : ''}
            ${priceAfterTextDesktopPaddingWidth && priceAfterTextPaddingDesktop?.top ? `padding: ${priceAfterTextDesktopPaddingWidth};` : ''}
            ${activationContentAlignment ? `text-align: ${activationContentAlignment};` : ''}
            transition: all 0.3s ease;
        }

        .${blockID} .fb-mc-pricing-plan-activation-wrapper:hover {
            ${priceAfterTextHoverBackgroundType === 'gradient' ? `  
                background: ${priceAfterTextHoverCustomGradientSwitcher && priceAfterTextHoverCustomGradientInputValue ? priceAfterTextHoverCustomGradientInputValue : priceAfterTextHoverGradientColor};
            `: `
                ${priceAfterTextHoverClassicColor ? `background: ${priceAfterTextHoverClassicColor};` : ''}
            `}

            ${priceAfterTextBorderHoverColor ? `border-color: ${priceAfterTextBorderHoverColor};` : ''}
            transition: all 0.3s ease;
        }

        .${blockID} .fb-mc-pricing-plan-activation-wrapper .fb-mc-pricing-plan-activation{
            ${priceAfterTextGlobalTypoSwitcher?.fontFamily === true && priceAfterTextGlobalTypographyData?.fontFamily ? `font-family: ${priceAfterTextGlobalTypographyData?.fontFamily};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.fontSize === true && priceAfterTextGlobalTypographyData?.fontSize ? `font-size: ${priceAfterTextGlobalTypographyData?.fontSize};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.fontWeight === true && priceAfterTextGlobalTypographyData?.fontWeight ? `font-weight: ${priceAfterTextGlobalTypographyData?.fontWeight};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.fontStyle === true && priceAfterTextGlobalTypographyData?.fontStyle ? `font-style: ${priceAfterTextGlobalTypographyData?.fontStyle};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.textTransform === true && priceAfterTextGlobalTypographyData?.textTransform ? `text-transform: ${priceAfterTextGlobalTypographyData?.textTransform};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.textDecoration === true && priceAfterTextGlobalTypographyData?.textDecoration ? `text-decoration: ${priceAfterTextGlobalTypographyData?.textDecoration};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.letterSpacing === true && priceAfterTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${priceAfterTextGlobalTypographyData?.letterSpacing};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.lineHeight === true && priceAfterTextGlobalTypographyData?.lineHeight ? `line-height: ${priceAfterTextGlobalTypographyData?.lineHeight};` : ''}
            
            ${priceAfterTextGlobalTypoSwitcher?.fontFamily === false && priceAfterTextFontFamily && priceAfterTextFontFamily !== 'Default' ? `font-family: ${priceAfterTextFontFamily};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.fontSize === false && priceAfterTextFontSize?.Desktop && priceAfterTextFontSizeUnits?.Desktop ? `font-size: ${priceAfterTextFontSize?.Desktop}${priceAfterTextFontSizeUnits?.Desktop};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.fontWeight === false && priceAfterTextFontWeight ? `font-weight: ${priceAfterTextFontWeight};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.fontStyle === false && priceAfterTextFontStyle ? `font-style: ${priceAfterTextFontStyle};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.textTransform === false && priceAfterTextTextTransform ? `text-transform: ${priceAfterTextTextTransform};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.textDecoration === false && priceAfterTextTextDecoration ? `text-decoration: ${priceAfterTextTextDecoration};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.letterSpacing === false && priceAfterTextLetterSpacing?.Desktop && priceAfterTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${priceAfterTextLetterSpacing?.Desktop}${priceAfterTextLetterSpacingUnits?.Desktop};` : ''}
            ${priceAfterTextGlobalTypoSwitcher?.lineHeight === false && priceAfterTextLineHeight?.Desktop && priceAfterTextLineHeightUnits?.Desktop ? `line-height: ${priceAfterTextLineHeight?.Desktop}${priceAfterTextLineHeightUnits?.Desktop};` : ''}

            ${priceAfterTextColor ? `color: ${priceAfterTextColor};` : ''} 
            transition: all 0.3s ease;
        }

        .${blockID} .fb-mc-pricing-after-text:hover {
            ${priceAfterTextHoverColor ? `color: ${priceAfterTextHoverColor};` : ''}
            transition: all 0.3s ease;
        }

        .${blockID} .fb-mc-pricing-features-wrapper {
            ${priceFeatureAreaNormalBackgroundType === 'gradient' ? `  
                background: ${priceFeatureAreaNormalCustomGradientSwitcher && priceFeatureAreaNormalCustomGradientInputValue ? priceFeatureAreaNormalCustomGradientInputValue : priceFeatureAreaNormalGradientColor};
            `: `
                ${priceFeatureAreaNormalClassicColor ? `background: ${priceFeatureAreaNormalClassicColor};` : ''}
            `}
            ${priceFeatureDesktopMarginWidth && priceFeatureDesktopMargin?.top? `margin: ${priceFeatureDesktopMarginWidth};` : ''}
            ${priceFeatureDesktopPaddingWidth && priceFeatureDesktopPadding?.top? `padding: ${priceFeatureDesktopPaddingWidth};` : ''}
        }
        .${blockID} .fb-mc-pricing-features-wrapper:hover {
            ${priceFeatureAreaHoverBackgroundType === 'gradient' ? `  
                background: ${priceFeatureAreaHoverCustomGradientSwitcher && priceFeatureAreaHoverCustomGradientInputValue ? priceFeatureAreaHoverCustomGradientInputValue : priceFeatureAreaHoverGradientColor};
            `: `
                ${priceFeatureAreaHoverClassicColor ? `background: ${priceFeatureAreaHoverClassicColor};` : ''}
            `}
        }

        .${blockID} .fb-mc-pricing-features-list {
            display: flex;
            flex-direction: column;
            gap: ${FeatureListGap?.Desktop}${FeatureListGapUnits?.Desktop};
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .${blockID} .fb-mc-pricing-feature-item {
            ${priceFeatureItemDesktopPaddingWidth && priceFeatureItemDesktopPadding?.top? `padding: ${priceFeatureItemDesktopPaddingWidth};` : ''}
            ${priceFeatureItemDesktopMarginWidth && priceFeatureItemDesktopMargin?.top? `margin: ${priceFeatureItemDesktopMarginWidth};` : ''}
            ${priceFeatureItemBorder ? `border: ${priceFeatureItemBorder};` : ''}
            ${priceFeatureItemBorderColor ? `border-color: ${priceFeatureItemBorderColor};` : ''}
            ${priceFeatureItemDesktopBorderWidth && priceFeatureItemDesktopBorder?.top? `border-width: ${priceFeatureItemDesktopBorderWidth};` : ''}
            ${priceFeatureItemDesktopBorderRadiusWidth && priceFeatureItemDesktopBorderRadius?.top? `border-radius: ${priceFeatureItemDesktopBorderRadiusWidth};` : ''}
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .${blockID} .fb-mc-pricing-feature-item:hover {
            ${priceFeatureItemBorderHoverColor ? `border-color: ${priceFeatureItemBorderHoverColor};` : ''}	
        }

        .${blockID} .fb-mc-pricing-feature-item.fb-feature-disabled {
            opacity: ${priceFeatureDisabledOpacity?.Desktop ?? 0.5};
            transition: opacity 0.3s ease;
        }

        .${blockID} .fb-mc-pricing-feature-item:last-child {
            ${priceFeatureItemBorderBottom ? `border-bottom: none;` : ''}
        }

        .${blockID} .fb-mc-pricing-feature-item, .${blockID} .fb-mc-pricing-feature-after-text {
            justify-content: ${priceFeatureAlignment === 'left' ? 'flex-start' : priceFeatureAlignment === 'center' ? 'center' : priceFeatureAlignment === 'right' ? 'flex-end' : 'center'};
        }

        .${blockID} .fb-mc-pricing-feature-after-text { 
            ${priceFeatureAfterTextColor ? `color: ${priceFeatureAfterTextColor};` : ''}

            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontFamily === true && priceFeatureAfterTextGlobalTypographyData?.fontFamily ? `font-family: ${priceFeatureAfterTextGlobalTypographyData?.fontFamily};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontSize === true && priceFeatureAfterTextGlobalTypographyData?.fontSize ? `font-size: ${priceFeatureAfterTextGlobalTypographyData?.fontSize};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontWeight === true && priceFeatureAfterTextGlobalTypographyData?.fontWeight ? `font-weight: ${priceFeatureAfterTextGlobalTypographyData?.fontWeight};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontStyle === true && priceFeatureAfterTextGlobalTypographyData?.fontStyle ? `font-style: ${priceFeatureAfterTextGlobalTypographyData?.fontStyle};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.textTransform === true && priceFeatureAfterTextGlobalTypographyData?.textTransform ? `text-transform: ${priceFeatureAfterTextGlobalTypographyData?.textTransform};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.textDecoration === true && priceFeatureAfterTextGlobalTypographyData?.textDecoration ? `text-decoration: ${priceFeatureAfterTextGlobalTypographyData?.textDecoration};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.letterSpacing === true && priceFeatureAfterTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${priceFeatureAfterTextGlobalTypographyData?.letterSpacing};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.lineHeight === true && priceFeatureAfterTextGlobalTypographyData?.lineHeight ? `line-height: ${priceFeatureAfterTextGlobalTypographyData?.lineHeight};` : ''}

            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontFamily === false && priceFeatureAfterTextFontFamily && priceFeatureAfterTextFontFamily !== 'Default' ? `font-family: ${priceFeatureAfterTextFontFamily};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontSize === false && priceFeatureAfterTextFontSize?.Desktop ? `font-size: ${priceFeatureAfterTextFontSize?.Desktop}${priceFeatureAfterTextFontSizeUnits?.Desktop};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontWeight === false && priceFeatureAfterTextFontWeight ? `font-weight: ${priceFeatureAfterTextFontWeight};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.fontStyle === false && priceFeatureAfterTextFontStyle ? `font-style: ${priceFeatureAfterTextFontStyle};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.textTransform === false && priceFeatureAfterTextTextTransform ? `text-transform: ${priceFeatureAfterTextTextTransform};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.textDecoration === false && priceFeatureAfterTextTextDecoration ? `text-decoration: ${priceFeatureAfterTextTextDecoration};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.letterSpacing === false && priceFeatureAfterTextLetterSpacing?.Desktop ? `letter-spacing: ${priceFeatureAfterTextLetterSpacing?.Desktop}${priceFeatureAfterTextLetterSpacingUnits?.Desktop};` : ''}
            ${priceFeatureAfterTextGlobalTypoSwitcher?.lineHeight === false && priceFeatureAfterTextLineHeight?.Desktop ? `line-height: ${priceFeatureAfterTextLineHeight?.Desktop}${priceFeatureAfterTextLineHeightUnits?.Desktop};` : ''}	
            transition: all 0.3s ease;
        }

        .${blockID} .fb-mc-pricing-feature-after-text:hover {
            ${priceFeatureAfterTextHoverColor ? `color: ${priceFeatureAfterTextHoverColor};` : ''}
        }
        .fb-mc-pricing-feature-icon-inner{
            display: flex;
        }

        .${blockID} .fb-mc-pricing-feature-icon-inner svg {
            width: ${priceFeatureIconSize?.Desktop}${priceFeatureIconSizeUnits?.Desktop};
            height: ${priceFeatureIconSize?.Desktop}${priceFeatureIconSizeUnits?.Desktop};
            fill: ${priceFeatureIconColor};
            transition: fill 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-feature-icon-inner:hover svg {
            ${priceFeatureIconHoverColor ? `fill: ${priceFeatureIconHoverColor};` : ''}
        }

        .${blockID} .fb-mc-pricing-feature-text {
            ${pricingfeatureTitleColor ? `color: ${pricingfeatureTitleColor};` : ''}

            ${pricingfeatureTitleGlobalTypoSwitcher?.fontFamily === true && pricingfeatureTitleGlobalTypographyData?.fontFamily ? `font-family: ${pricingfeatureTitleGlobalTypographyData?.fontFamily};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.fontSize === true && pricingfeatureTitleGlobalTypographyData?.fontSize ? `font-size: ${pricingfeatureTitleGlobalTypographyData?.fontSize};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.fontWeight === true && pricingfeatureTitleGlobalTypographyData?.fontWeight ? `font-weight: ${pricingfeatureTitleGlobalTypographyData?.fontWeight};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.fontStyle === true && pricingfeatureTitleGlobalTypographyData?.fontStyle ? `font-style: ${pricingfeatureTitleGlobalTypographyData?.fontStyle};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.textTransform === true && pricingfeatureTitleGlobalTypographyData?.textTransform ? `text-transform: ${pricingfeatureTitleGlobalTypographyData?.textTransform};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.textDecoration === true && pricingfeatureTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${pricingfeatureTitleGlobalTypographyData?.textDecoration};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.letterSpacing === true && pricingfeatureTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${pricingfeatureTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.lineHeight === true && pricingfeatureTitleGlobalTypographyData?.lineHeight ? `line-height: ${pricingfeatureTitleGlobalTypographyData?.lineHeight};` : ''}

            ${pricingfeatureTitleGlobalTypoSwitcher?.fontFamily === false && pricingfeatureTitleFontFamily && pricingfeatureTitleFontFamily !== 'Default' ? `font-family: ${pricingfeatureTitleFontFamily};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.fontSize === false && pricingfeatureTitleFontSize?.Desktop ? `font-size: ${pricingfeatureTitleFontSize?.Desktop}${pricingfeatureTitleFontSizeUnits?.Desktop};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.fontWeight === false && pricingfeatureTitleFontWeight ? `font-weight: ${pricingfeatureTitleFontWeight};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.fontStyle === false && pricingfeatureTitleFontStyle ? `font-style: ${pricingfeatureTitleFontStyle};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.textTransform === false && pricingfeatureTitleTextTransform ? `text-transform: ${pricingfeatureTitleTextTransform};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.textDecoration === false && pricingfeatureTitleTextDecoration ? `text-decoration: ${pricingfeatureTitleTextDecoration};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.letterSpacing === false && pricingfeatureTitleLetterSpacing?.Desktop ? `letter-spacing: ${pricingfeatureTitleLetterSpacing?.Desktop}${pricingfeatureTitleLetterSpacingUnits?.Desktop};` : ''}
            ${pricingfeatureTitleGlobalTypoSwitcher?.lineHeight === false && pricingfeatureTitleLineHeight?.Desktop ? `line-height: ${pricingfeatureTitleLineHeight?.Desktop}${pricingfeatureTitleLineHeightUnits?.Desktop};` : ''}
            transition: all 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-feature-text:hover {
            ${pricingfeatureTitleHoverColor ? `color: ${pricingfeatureTitleHoverColor};` : ''}
        }
        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-button-wrapper{
            display: flex;
            text-align: center;
            width: ${priceButtonWidth?.Desktop ? `${priceButtonWidth?.Desktop}${priceButtonWidthUnits?.Desktop}` : 'auto'};
        }

        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-button-wrapper .fb-mc-pricing-button {
            width: 100%;
            
            ${priceButtonGlobalTypoSwitcher?.fontFamily === true && priceButtonGlobalTypographyData?.fontFamily ? `font-family: ${priceButtonGlobalTypographyData?.fontFamily};` : ''}
            ${priceButtonGlobalTypoSwitcher?.fontSize === true && priceButtonGlobalTypographyData?.fontSize ? `font-size: ${priceButtonGlobalTypographyData?.fontSize};` : ''}
            ${priceButtonGlobalTypoSwitcher?.fontWeight === true && priceButtonGlobalTypographyData?.fontWeight ? `font-weight: ${priceButtonGlobalTypographyData?.fontWeight};` : ''}
            ${priceButtonGlobalTypoSwitcher?.fontStyle === true && priceButtonGlobalTypographyData?.fontStyle ? `font-style: ${priceButtonGlobalTypographyData?.fontStyle};` : ''}
            ${priceButtonGlobalTypoSwitcher?.textTransform === true && priceButtonGlobalTypographyData?.textTransform ? `text-transform: ${priceButtonGlobalTypographyData?.textTransform};` : ''}
            ${priceButtonGlobalTypoSwitcher?.textDecoration === true && priceButtonGlobalTypographyData?.textDecoration ? `text-decoration: ${priceButtonGlobalTypographyData?.textDecoration};` : ''}
            ${priceButtonGlobalTypoSwitcher?.letterSpacing === true && priceButtonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${priceButtonGlobalTypographyData?.letterSpacing};` : ''}
            ${priceButtonGlobalTypoSwitcher?.lineHeight === true && priceButtonGlobalTypographyData?.lineHeight ? `line-height: ${priceButtonGlobalTypographyData?.lineHeight};` : ''}

            ${priceButtonGlobalTypoSwitcher?.fontFamily === false && priceButtonFontFamily && priceButtonFontFamily !== 'Default' ? `font-family: ${priceButtonFontFamily};` : ''}
            ${priceButtonGlobalTypoSwitcher?.fontSize === false && priceButtonFontSize?.Desktop ? `font-size: ${priceButtonFontSize?.Desktop}${priceButtonFontSizeUnits?.Desktop};` : ''}
            ${priceButtonGlobalTypoSwitcher?.fontWeight === false && priceButtonFontWeight ? `font-weight: ${priceButtonFontWeight};` : ''}
            ${priceButtonGlobalTypoSwitcher?.fontStyle === false && priceButtonFontStyle ? `font-style: ${priceButtonFontStyle};` : ''}
            ${priceButtonGlobalTypoSwitcher?.textTransform === false && priceButtonTextTransform ? `text-transform: ${priceButtonTextTransform};` : ''}
            ${priceButtonGlobalTypoSwitcher?.textDecoration === false && priceButtonTextDecoration ? `text-decoration: ${priceButtonTextDecoration};` : 'text-decoration: none;'}
            ${priceButtonGlobalTypoSwitcher?.letterSpacing === false && priceButtonLetterSpacing?.Desktop ? `letter-spacing: ${priceButtonLetterSpacing?.Desktop}${priceButtonLetterSpacingUnits?.Desktop};` : ''}
            ${priceButtonGlobalTypoSwitcher?.lineHeight === false && priceButtonLineHeight?.Desktop ? `line-height: ${priceButtonLineHeight?.Desktop}${priceButtonLineHeightUnits?.Desktop};` : ''}
            
            ${priceButtonColor ? `color: ${priceButtonColor};` : ''}
            ${priceButtonDesktopPaddingValue && priceButtonDesktopPadding?.top? `padding: ${priceButtonDesktopPaddingValue};` : ''}
            ${priceButtonDesktopMarginValue && priceButtonDesktopMargin?.top? `margin: ${priceButtonDesktopMarginValue};` : ''}
            ${priceButtonBorder ? `border: ${priceButtonBorder};` : ''}
            ${priceButtonBorderColor ? `border-color: ${priceButtonBorderColor};` : ''}
            ${priceButtonDesktopBorderWidthValue && priceButtonDesktopBorderWidth?.top ? `border-width: ${priceButtonDesktopBorderWidthValue};` : ''}
            ${priceButtonDesktopBorderRadiusWidthValue && priceButtonDesktopBorderRadiusWidth?.top? `border-radius: ${priceButtonDesktopBorderRadiusWidthValue};` : ''}

            ${priceButtonNormalBackgroundType === 'gradient' ? `  
                background: ${priceButtonNormalCustomGradientSwitcher && priceButtonNormalCustomGradientInputValue ? priceButtonNormalCustomGradientInputValue : priceButtonNormalGradientColor};
            `: `
                ${priceButtonNormalClassicColor ? `background: ${priceButtonNormalClassicColor};` : ''}
            `}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-button-wrapper .fb-mc-pricing-button:hover {
            ${priceButtonHoverColor ? `color: ${priceButtonHoverColor};` : ''}
            ${priceButtonBorderHoverColor ? `border-color: ${priceButtonBorderHoverColor};` : ''}
            ${priceButtonHoverBackgroundType === 'gradient' ? `  
                background: ${priceButtonHoverCustomGradientSwitcher && priceButtonHoverCustomGradientInputValue ? priceButtonHoverCustomGradientInputValue : priceButtonHoverGradientColor};
            `: `
                ${priceButtonHoverClassicColor ? `background: ${priceButtonHoverClassicColor};` : ''}
            `}
        }
        .${blockID} .fb-mc-pricing-button.fb-button-icon-left .fb-mc-pricing-button-icon {
            margin-right: ${priceButtonIconSpacing?.Desktop}${priceButtonIconSpacingUnits?.Desktop};
        }
        .${blockID} .fb-mc-pricing-button.fb-button-icon-right .fb-mc-pricing-button-icon {
            margin-left: ${priceButtonIconSpacing?.Desktop}${priceButtonIconSpacingUnits?.Desktop};
        }

        .${blockID} .fb-mc-pricing-button-icon svg {
            width: ${priceButtonIconSize?.Desktop}${priceButtonIconSizeUnits?.Desktop};
            height: ${priceButtonIconSize?.Desktop}${priceButtonIconSizeUnits?.Desktop};
            fill: ${priceButtonIconColor};
            transition: fill 0.3s ease;
        }
        .${blockID} .fb-mc-pricing-button-icon:hover svg {
            ${priceButtonIconHoverColor ? `fill: ${priceButtonIconHoverColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockID} .fb-mc-pricing-feature-title{
                left: 16px;
            }

            .${blockID} .fb-layout-two .fb-mc-pricing-feature-title{
                top: ${featureTitlePosition?.Tablet}${featureTitlePositionUnits?.Tablet};
            }

            ${pricingPresetStyle === 'preset-1' ? ` 
                .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content {
                    ${headerTabletPadding && pricingHeaderTabletPadding?.top? `padding: ${headerTabletPadding};` : ''}
                    ${headerTabletBorderWidth && pricingHeaderBorderTablet?.top ? `border-width: ${headerTabletBorderWidth};` : ''}
                }
            `:''}

            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price,
            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price.line-through .price-currency {
                ${normalPricingGlobalTypoSwitcher?.fontSize === false && normalPricingFontSize?.Tablet ? `font-size: ${normalPricingFontSize?.Tablet}${normalPricingFontSizeUnits?.Tablet};` : ""}
                ${normalPricingGlobalTypoSwitcher?.letterSpacing === false && normalPricingLetterSpacing?.Tablet ? `letter-spacing: ${normalPricingLetterSpacing?.Tablet}${normalPricingLetterSpacingUnits?.Tablet};` : ""}
                ${normalPricingGlobalTypoSwitcher?.lineHeight === false && normalPricingLineHeight?.Tablet ? `line-height: ${normalPricingLineHeight?.Tablet}${normalPricingLineHeightUnits?.Tablet};` : ""}
            }
            
            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-sale-price .price-currency {
                ${priceCurrencyGlobalTypoSwitcher?.fontSize === false && priceCurrencyFontSize?.Tablet ? `font-size: ${priceCurrencyFontSize?.Tablet}${priceCurrencyFontSizeUnits?.Tablet};` : ""}
                ${priceCurrencyGlobalTypoSwitcher?.letterSpacing === false && priceCurrencyLetterSpacing?.Tablet ? `letter-spacing: ${priceCurrencyLetterSpacing?.Tablet}${priceCurrencyLetterSpacingUnits?.Tablet};` : ""}
                ${priceCurrencyGlobalTypoSwitcher?.lineHeight === false && priceCurrencyLineHeight?.Tablet ? `line-height: ${priceCurrencyLineHeight?.Tablet}${priceCurrencyLineHeightUnits?.Tablet};` : ""}
            }
            
            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-sale-price {
                ${salePricingGlobalTypoSwitcher?.fontSize === false && salePricingFontSize?.Tablet ? `font-size: ${salePricingFontSize?.Tablet}${salePricingFontSizeUnits?.Tablet};` : ""}
                ${salePricingGlobalTypoSwitcher?.letterSpacing === false && salePricingLetterSpacing?.Tablet ? `letter-spacing: ${salePricingLetterSpacing?.Tablet}${salePricingLetterSpacingUnits?.Tablet};` : ""}
                ${salePricingGlobalTypoSwitcher?.lineHeight === false && salePricingLineHeight?.Tablet ? `line-height: ${salePricingLineHeight?.Tablet}${salePricingLineHeightUnits?.Tablet};` : ""}
            }

            .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-grid{
                ${gridRowGap ? `row-gap: ${gridRowGap.Tablet}${gridGapUnits.Tablet};` : ''}
                ${gridColumnGap ? `column-gap: ${gridColumnGap.Tablet}${gridGapUnits.Tablet};` : ''}
                ${pricingGridTabletPaddingValue && pricingGridTabletPadding?.top? `padding: ${pricingGridTabletPaddingValue};` : ''}
                ${pricingGridTabletMarginValue && pricingGridTabletMargin?.top? `margin: ${pricingGridTabletMarginValue};` : ''}
                ${pricingGridTabletBorderWidth && pricingGridBorderTablet?.top ? `border-width: ${pricingGridTabletBorderWidth};` : ''}
                ${pricingGridTabletBorderRadiusWidth && pricingGridBorderRadiusTablet?.top? `border-radius: ${pricingGridTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .fb-mc-pricing-column {
                ${priceColumnTabletPaddingValue && priceColumnTabletPadding?.top ? `padding: ${priceColumnTabletPaddingValue};` : ''}
                ${priceColumnTabletMarginValue && priceColumnTabletMargin?.top ? `margin: ${priceColumnTabletMarginValue};` : ''}
                ${priceColumnTabletBorderWidthValue && priceColumnTabletBorderWidth?.top ? `border-width: ${priceColumnTabletBorderWidthValue};` : ''}
                ${priceColumnTabletBorderRadiusWidthValue && priceColumnTabBorderRadiusWidth?.top? `border-radius: ${priceColumnTabletBorderRadiusWidthValue};` : ''}
                transition: all 0.3s ease-in-out;
            }

            .${blockID}.fb-mc-pricing-area {
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'left' && pricingTableHZLeftOffset?.Tablet !== undefined ? `left: ${pricingTableHZLeftOffset?.Tablet}${pricingTableHZLeftOffsetUnits?.Tablet};` : ''}
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'right' && pricingTableHZRightOffset?.Tablet !== undefined ? `right: ${pricingTableHZRightOffset?.Tablet}${pricingTableHZRightOffsetUnits?.Tablet};` : ''}
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'top' && pricingTableVRTopOffset?.Tablet !== undefined ? `top: ${pricingTableVRTopOffset?.Tablet}${pricingTableVRTopOffsetUnits?.Tablet};` : ''}
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'bottom' && pricingTableVRBottomOffset?.Tablet !== undefined ? `bottom: ${pricingTableVRBottomOffset?.Tablet}${pricingTableVRBottomOffsetUnits?.Tablet};` : ''}
                ${priceGlobalZIndex?.Tablet ? `z-index: ${priceGlobalZIndex?.Tablet};` : ''}
            }
            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper {
                ${pricingTopSectionBorderTabletWidth && pricingTopSectionBorderTablet?.top ? `border-width: ${pricingTopSectionBorderTabletWidth};` : ''}
                ${pricingTopSectionBorderRadiusTabletWidth && pricingTopSectionBorderRadiusTablet?.top? `border-radius: ${pricingTopSectionBorderRadiusTabletWidth};` : ''}
                ${pricingTopSectionTabletPaddingWidth && pricingTopSectionTabletPadding?.top? `padding: ${pricingTopSectionTabletPaddingWidth};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper.fb-multi-column-pricing-table-top-section .fb-mc-pricing-column .fb-mc-pricing-top-wrapper .fb-mc-pricing-top-text{
                ${pricingTopSectionTextGlobalTypoSwitcher?.fontSize === false && pricingTopSectionTextFontSize?.Tablet ? `font-size: ${pricingTopSectionTextFontSize?.Tablet}${pricingTopSectionTextFontSizeUnits?.Tablet};` : ""}
                ${pricingTopSectionTextGlobalTypoSwitcher?.letterSpacing === false && pricingTopSectionTextLetterSpacing?.Tablet ? `letter-spacing: ${pricingTopSectionTextLetterSpacing?.Tablet}${pricingTopSectionTextLetterSpacingUnits?.Tablet};` : ""}
                ${pricingTopSectionTextGlobalTypoSwitcher?.lineHeight === false && pricingTopSectionTextLineHeight?.Tablet ? `line-height: ${pricingTopSectionTextLineHeight?.Tablet}${pricingTopSectionTextLineHeightUnits?.Tablet};` : ""}
                text-align: center;
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper {
                ${priceGlobalNormalBackgroundType === 'gradient' ? `  
                    background: ${priceGlobalNormalCustomGradientSwitcher && priceGlobalNormalCustomGradientInputValue ? priceGlobalNormalCustomGradientInputValue : priceGlobalNormalGradientColor};
                `: `
                    ${priceGlobalNormalClassicColor ? `background: ${priceGlobalNormalClassicColor};` : ''}
                `}
                ${globalTabletPadding && priceGlobalPaddingTablet?.top? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && priceGlobalMarginTablet?.top? `margin: ${globalTabletMargin};` : ''}
                ${priceGlobalBorder ? `border: ${priceGlobalBorder};` : ''}
                ${globalTabletBorderWidth && priceGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && priceGlobalBorderRadiusTablet?.top? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                ${priceGlobalBorderColor ? `border-color: ${priceGlobalBorderColor};` : ''}
                ${priceGlobalBoxShadowCssValue ? `box-shadow: ${priceGlobalBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
                position: relative;
            }
            .${blockID} .fb-multi-column-pricing-table-wrapper:hover {
                ${priceGlobalHoverBackgroundType === 'gradient' ? `  
                    background: ${priceGlobalHoverCustomGradientSwitcher && priceGlobalHoverCustomGradientInputValue ? priceGlobalHoverCustomGradientInputValue : priceGlobalHoverGradientColor};
                `: `
                    ${priceGlobalHoverClassicColor ? `background: ${priceGlobalHoverClassicColor};` : ''}
                `}
                ${priceGlobalBorderHoverColor ? `border-color: ${priceGlobalBorderHoverColor};` : ''}
                ${priceGlobalBoxShadowHoverCssValue ? `box-shadow: ${priceGlobalBoxShadowHoverCssValue};` : ''}
            }

            .${blockID}	.fb-mc-pricing-price-wrapper {
                ${priceTabletPaddingWidth && priceTabletPadding?.top? `padding: ${priceTabletPaddingWidth};` : ''}
                text-align: ${pricingAlignment === 'left' ? 'left' : pricingAlignment === 'center' ? 'center' : pricingAlignment === 'right' ? 'right' : 'center'};
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header .fb-mc-pricing-title {
                ${pricingTitleGlobalTypoSwitcher?.fontSize === false && pricingTitleFontSize?.Tablet ? `font-size: ${pricingTitleFontSize?.Tablet}${pricingTitleFontSizeUnits?.Tablet};` : ''}
                ${pricingTitleGlobalTypoSwitcher?.letterSpacing === false && pricingTitleLetterSpacing?.Tablet ? `letter-spacing: ${pricingTitleLetterSpacing?.Tablet}${pricingTitleLetterSpacingUnits?.Tablet};` : ''}
                ${pricingTitleGlobalTypoSwitcher?.lineHeight === false && pricingTitleLineHeight?.Tablet ? `line-height: ${pricingTitleLineHeight?.Tablet}${pricingTitleLineHeightUnits?.Tablet};` : ''}

                ${titleTabletPadding && pricingTitleTabletPadding?.top? `padding: ${titleTabletPadding};` : ''}
                ${titleTabletMargin && pricingTitleTabletMargin?.top? `margin: ${titleTabletMargin};` : 'margin: 0;'}
            }

            .${blockID} .fb-mc-pricing-subtitle {
                ${pricingSubtitleGlobalTypoSwitcher?.fontSize === false && pricingSubtitleFontSize?.Tablet ? `font-size: ${pricingSubtitleFontSize?.Tablet}${pricingSubtitleFontSizeUnits?.Tablet};` : ''}
                ${pricingSubtitleGlobalTypoSwitcher?.letterSpacing === false && pricingSubtitleLetterSpacing?.Tablet ? `letter-spacing: ${pricingSubtitleLetterSpacing?.Tablet}${pricingSubtitleLetterSpacingUnits?.Tablet};` : ''}
                ${pricingSubtitleGlobalTypoSwitcher?.lineHeight === false && pricingSubtitleLineHeight?.Tablet ? `line-height: ${pricingSubtitleLineHeight?.Tablet}${pricingSubtitleLineHeightUnits?.Tablet};` : ''}

                ${subtitleTabletPadding && pricingSubtitleTabletPadding?.top? `padding: ${subtitleTabletPadding};` : ''}
                ${subtitleTabletMargin && pricingSubtitleTabletMargin?.top? `margin: ${subtitleTabletMargin};` : ''}
            }

            .${blockID} .fb-mc-pricing-plan-activation-wrapper{
                ${priceAfterTextBorderTabletWidth && priceAfterTextBorderTablet?.top? `border-width: ${priceAfterTextBorderTabletWidth};` : ''}
                ${priceAfterTextBorderRadiusTabletWidth && priceAfterTextBorderRadiusTablet?.top? `border-radius: ${priceAfterTextBorderRadiusTabletWidth};` : ''}
                ${priceAfterTextTabletPaddingWidth && priceAfterTextPaddingTablet?.top ? `padding: ${priceAfterTextTabletPaddingWidth};` : ''}
            }
            
            .${blockID} .fb-mc-pricing-plan-activation-wrapper .fb-mc-pricing-plan-activation{
                ${priceAfterTextGlobalTypoSwitcher?.fontSize === false && priceAfterTextFontSize?.Tablet && priceAfterTextFontSizeUnits?.Tablet ? `font-size: ${priceAfterTextFontSize?.Tablet}${priceAfterTextFontSizeUnits?.Tablet};` : ''}
                ${priceAfterTextGlobalTypoSwitcher?.letterSpacing === false && priceAfterTextLetterSpacing?.Tablet && priceAfterTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${priceAfterTextLetterSpacing?.Tablet}${priceAfterTextLetterSpacingUnits?.Tablet};` : ''}
                ${priceAfterTextGlobalTypoSwitcher?.lineHeight === false && priceAfterTextLineHeight?.Tablet && priceAfterTextLineHeightUnits?.Tablet ? `line-height: ${priceAfterTextLineHeight?.Tablet}${priceAfterTextLineHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-mc-pricing-after-text {
                ${priceAfterTextGlobalTypoSwitcher?.fontSize === false && priceAfterTextFontSize?.Tablet && priceAfterTextFontSizeUnits?.Tablet ? `font-size: ${priceAfterTextFontSize?.Tablet}${priceAfterTextFontSizeUnits?.Tablet};` : ''}
                ${priceAfterTextGlobalTypoSwitcher?.letterSpacing === false && priceAfterTextLetterSpacing?.Tablet && priceAfterTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${priceAfterTextLetterSpacing?.Tablet}${priceAfterTextLetterSpacingUnits?.Tablet};` : ''}
                ${priceAfterTextGlobalTypoSwitcher?.lineHeight === false && priceAfterTextLineHeight?.Tablet && priceAfterTextLineHeightUnits?.Tablet ? `line-height: ${priceAfterTextLineHeight?.Tablet}${priceAfterTextLineHeightUnits?.Tablet};` : ''}
            }

            ${pricingPresetStyle === 'preset-1' ? `
                .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(1) .fb-mc-pricing-features-wrapper {
                    padding-left: 16px;
                }
                .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(3) .fb-mc-pricing-features-wrapper {
                    padding-right: 16px;
                }
            `:''}

            .${blockID} .fb-mc-pricing-features-wrapper {
                ${priceFeatureTabMarginWidth && priceFeatureTabMargin?.top? `margin: ${priceFeatureTabMarginWidth};` : ''}
                ${priceFeatureTabletPaddingWidth && priceFeatureTabPadding?.top? `padding: ${priceFeatureTabletPaddingWidth};` : ''}
            }

            .${blockID} .fb-mc-pricing-features-list {
                gap: ${FeatureListGap?.Tablet}${FeatureListGapUnits?.Tablet};
            }

            .${blockID} .fb-mc-pricing-feature-item {
                ${priceFeatureItemTabPaddingWidth && priceFeatureItemTabPadding?.top? `padding: ${priceFeatureItemTabPaddingWidth};` : ''}
                ${priceFeatureItemTabMarginWidth && priceFeatureItemTabMargin?.top? `margin: ${priceFeatureItemTabMarginWidth};` : ''}
                ${priceFeatureItemBorder ? `border: ${priceFeatureItemBorder};` : ''}
                ${priceFeatureItemBorderColor ? `border-color: ${priceFeatureItemBorderColor};` : ''}
                ${priceFeatureItemTabBorderWidth && priceFeatureItemTabBorder?.top? `border-width: ${priceFeatureItemTabBorderWidth};` : ''}
                ${priceFeatureItemTabBorderRadiusWidth && priceFeatureItemTabBorderRadius?.top? `border-radius: ${priceFeatureItemTabBorderRadiusWidth};` : ''} 
            }
            .${blockID} .fb-mc-pricing-feature-item:hover {
                ${priceFeatureItemBorderHoverColor ? `border-color: ${priceFeatureItemBorderHoverColor};` : ''}	
            }

            .${blockID} .fb-mc-pricing-feature-item, .${blockID} .fb-mc-pricing-feature-after-text {
                justify-content: ${priceFeatureAlignment === 'left' ? 'flex-start' : priceFeatureAlignment === 'center' ? 'center' : priceFeatureAlignment === 'right' ? 'flex-end' : 'center'};
            }

            .${blockID} .fb-mc-pricing-feature-after-text { 
                ${priceFeatureAfterTextGlobalTypoSwitcher?.fontSize === false && priceFeatureAfterTextFontSize?.Tablet && priceFeatureAfterTextFontSizeUnits?.Tablet ? `font-size: ${priceFeatureAfterTextFontSize?.Tablet}${priceFeatureAfterTextFontSizeUnits?.Tablet};` : ''}
                ${priceFeatureAfterTextGlobalTypoSwitcher?.letterSpacing === false && priceFeatureAfterTextLetterSpacing?.Tablet && priceFeatureAfterTextLetterSpacingUnits?.Tablet ? `letter-spacing: ${priceFeatureAfterTextLetterSpacing?.Tablet}${priceFeatureAfterTextLetterSpacingUnits?.Tablet};` : ''}
                ${priceFeatureAfterTextGlobalTypoSwitcher?.lineHeight === false && priceFeatureAfterTextLineHeight?.Tablet && priceFeatureAfterTextLineHeightUnits?.Tablet ? `line-height: ${priceFeatureAfterTextLineHeight?.Tablet}${priceFeatureAfterTextLineHeightUnits?.Tablet};` : ''}	
            }

            ${pricingPresetStyle === 'preset-1' ? `
                .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header{
                    ${headerTabletPadding && pricingHeaderTabletPadding?.top ? `padding: ${headerTabletPadding};` : ''}
                }
            `:''}

            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header {
                ${headerTabletPadding && pricingHeaderTabletPadding?.top ? `padding: ${headerTabletPadding};` : ''}
                ${headerTabletBorderWidth && pricingHeaderBorderTablet?.top ? `border-width: ${headerTabletBorderWidth};` : ''}
                ${headerTabletBorderRadiusWidth && pricingHeaderBorderRadiusTablet?.top? `border-radius: ${headerTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .fb-mc-pricing-ribbon-icon {
                ${priceIconPositionSwitcher ? 'position: absolute;' : ''}
                ${priceIconPositionSwitcher ? `top: ${priceIconPositionTop?.Tablet && priceIconPositionTopUnits?.Tablet ? `${priceIconPositionTop?.Tablet}${priceIconPositionTopUnits?.Tablet}` : '0'};` : ''}
                ${priceIconPositionSwitcher ? `left: ${priceIconPositionLeft?.Tablet && priceIconPositionLeftUnits?.Tablet ? `${priceIconPositionLeft?.Tablet}${priceIconPositionLeftUnits?.Tablet}` : '0'};` : ''}
                ${priceIconBgSize?.Tablet && priceIconBgSizeUnits?.Tablet ? `width: ${priceIconBgSize?.Tablet}${priceIconBgSizeUnits?.Tablet};` : ''}
                ${priceIconBgSize?.Tablet && priceIconBgSizeUnits?.Tablet ? `height: ${priceIconBgSize?.Tablet}${priceIconBgSizeUnits?.Tablet};` : ''}
                ${priceIconBgColor ? `background-color: ${priceIconBgColor};` : ''}
                ${priceIconBorder ? `border: ${priceIconBorder};` : ''}
                ${priceIconTabletBorderWidthValue && priceIconBorderTablet?.top ? `border-width: ${priceIconTabletBorderWidthValue};` : ''}
                ${priceIconTabletBorderRadiusWidthValue && priceIconBorderRadiusTablet?.top? `border-radius: ${priceIconTabletBorderRadiusWidthValue};` : ''} 
                ${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-mc-pricing-ribbon-icon:hover {
                ${priceIconBgHoverColor ? `background-color: ${priceIconBgHoverColor};` : ''}
                ${priceIconBorderHoverColor ? `border-color: ${priceIconBorderHoverColor};` : ''}
            }

            .${blockID} .fb-mc-pricing-ribbon-icon svg {
                width: ${priceIconSize?.Tablet}${priceIconSizeUnits?.Tablet};
                height: ${priceIconSize?.Tablet}${priceIconSizeUnits?.Tablet};
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-button-wrapper .fb-mc-pricing-button {
                width: ${priceButtonWidth?.Tablet ? `${priceButtonWidth?.Tablet}${priceButtonWidthUnits?.Tablet}` : 'auto'}; 
                ${priceButtonGlobalTypoSwitcher?.fontSize === false && priceButtonFontSize?.Tablet ? `font-size: ${priceButtonFontSize?.Tablet}${priceButtonFontSizeUnits?.Tablet};` : ''}
                ${priceButtonGlobalTypoSwitcher?.letterSpacing === false && priceButtonLetterSpacing?.Tablet ? `letter-spacing: ${priceButtonLetterSpacing?.Tablet}${priceButtonLetterSpacingUnits?.Tablet};` : ''}
                ${priceButtonGlobalTypoSwitcher?.lineHeight === false && priceButtonLineHeight?.Tablet ? `line-height: ${priceButtonLineHeight?.Tablet}${priceButtonLineHeightUnits?.Tablet};` : ''}
                ${priceButtonTabletPaddingValue && priceButtonTabPadding?.top? `padding: ${priceButtonTabletPaddingValue};` : ''}
                ${priceButtonTabletMarginValue && priceButtonTabMargin?.top? `margin: ${priceButtonTabletMarginValue};` : ''}
                ${priceButtonTabletBorderWidthValue && priceButtonTabBorderWidth?.top? `border-width: ${priceButtonTabletBorderWidthValue};` : ''}
                ${priceButtonTabletBorderRadiusWidthValue && priceButtonTabBorderRadiusWidth?.top? `border-radius: ${priceButtonTabletBorderRadiusWidthValue};` : ''}
            }

            .${blockID} .fb-mc-pricing-button.fb-button-icon-left .fb-mc-pricing-button-icon {
                margin-right: ${priceButtonIconSpacing?.Tablet}${priceButtonIconSpacingUnits?.Tablet};
            }
            .${blockID} .fb-mc-pricing-button.fb-button-icon-right .fb-mc-pricing-button-icon {
                margin-left: ${priceButtonIconSpacing?.Tablet}${priceButtonIconSpacingUnits?.Tablet};
            }

            .${blockID} .fb-mc-pricing-button-icon svg {
                width: ${priceButtonIconSize?.Tablet}${priceButtonIconSizeUnits?.Tablet};
                height: ${priceButtonIconSize?.Tablet}${priceButtonIconSizeUnits?.Tablet};
            }
        }

        @media only screen and (max-width: 767px) {
            
            .${blockID} .fb-mc-pricing-feature-title{
                display: none;
            }

             .${blockID} .fb-layout-two .fb-mc-pricing-feature-title{
                top: ${featureTitlePosition?.Mobile}${featureTitlePositionUnits?.Mobile};
            }

            ${pricingPresetStyle === 'preset-1' ? ` 
                .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content {
                    ${headerMobilePadding && pricingHeaderMobilePadding?.top? `padding: ${headerMobilePadding};` : ''}
                    ${headerMobileBorderWidth && pricingHeaderBorderMobile?.top ? `border-width: ${headerMobileBorderWidth};` : ''}
                }
            `:''}
                
            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price,
            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-normal-price.line-through .price-currency {
                ${normalPricingGlobalTypoSwitcher?.fontSize === false && normalPricingFontSize?.Mobile ? `font-size: ${normalPricingFontSize?.Mobile}${normalPricingFontSizeUnits?.Mobile};` : ""}
                ${normalPricingGlobalTypoSwitcher?.letterSpacing === false && normalPricingLetterSpacing?.Mobile ? `letter-spacing: ${normalPricingLetterSpacing?.Mobile}${normalPricingLetterSpacingUnits?.Mobile};` : ""}
                ${normalPricingGlobalTypoSwitcher?.lineHeight === false && normalPricingLineHeight?.Mobile ? `line-height: ${normalPricingLineHeight?.Mobile}${normalPricingLineHeightUnits?.Mobile};` : ""}
            }

            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-sale-price .price-currency{
                ${priceCurrencyGlobalTypoSwitcher?.fontSize === false && priceCurrencyFontSize?.Mobile ? `font-size: ${priceCurrencyFontSize?.Mobile}${priceCurrencyFontSizeUnits?.Mobile};` : ""}
                ${priceCurrencyGlobalTypoSwitcher?.letterSpacing === false && priceCurrencyLetterSpacing?.Mobile ? `letter-spacing: ${priceCurrencyLetterSpacing?.Mobile}${priceCurrencyLetterSpacingUnits?.Mobile};` : ""}
                ${priceCurrencyGlobalTypoSwitcher?.lineHeight === false && priceCurrencyLineHeight?.Mobile ? `line-height: ${priceCurrencyLineHeight?.Mobile}${priceCurrencyLineHeightUnits?.Mobile};` : ""}
            }

            .${blockID} .fb-mc-pricing-price-wrapper .fb-mc-pricing-sale-price {
                ${salePricingGlobalTypoSwitcher?.fontSize === false && salePricingFontSize?.Mobile ? `font-size: ${salePricingFontSize?.Mobile}${salePricingFontSizeUnits?.Mobile};` : ""}
                ${salePricingGlobalTypoSwitcher?.letterSpacing === false && salePricingLetterSpacing?.Mobile ? `letter-spacing: ${salePricingLetterSpacing?.Mobile}${salePricingLetterSpacingUnits?.Mobile};` : ""}
                ${salePricingGlobalTypoSwitcher?.lineHeight === false && salePricingLineHeight?.Mobile ? `line-height: ${salePricingLineHeight?.Mobile}${salePricingLineHeightUnits?.Mobile};` : ""}
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-grid{
                grid-template-columns: repeat(1, 1fr);
                ${gridRowGap ? `row-gap: ${gridRowGap.Mobile}${gridGapUnits.Mobile};` : ''}
                ${gridColumnGap ? `column-gap: ${gridColumnGap.Mobile}${gridGapUnits.Mobile};` : ''}
                ${pricingGridMobilePaddingValue && pricingGridMobilePadding?.top? `padding: ${pricingGridMobilePaddingValue};` : ''}
                ${pricingGridMobileMarginValue && pricingGridMobileMargin?.top? `margin: ${pricingGridMobileMarginValue};` : ''}
                ${pricingGridMobileBorderWidth && pricingGridBorderMobile?.top ? `border-width: ${pricingGridMobileBorderWidth};` : ''}
                ${pricingGridMobileBorderRadiusWidth && pricingGridBorderRadiusMobile?.top? `border-radius: ${pricingGridMobileBorderRadiusWidth};` : ''}
            }
            
            .${blockID} .fb-mc-pricing-column {
                ${priceColumnMobilePaddingValue && priceColumnMobilePadding?.top ? `padding: ${priceColumnMobilePaddingValue};` : ''}
                ${priceColumnMobileMarginValue && priceColumnMobileMargin?.top ? `margin: ${priceColumnMobileMarginValue};` : ''}
                ${priceColumnMobileBorderWidthValue && priceColumnMobileBorderWidth?.top ? `border-width: ${priceColumnMobileBorderWidthValue};` : ''}
                ${priceColumnMobileBorderRadiusWidthValue && priceColumnMobileBorderRadiusWidth?.top? `border-radius: ${priceColumnMobileBorderRadiusWidthValue};` : ''}
                transition: all 0.3s ease-in-out;
            }

            .${blockID}.fb-mc-pricing-area {
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'left' && pricingTableHZLeftOffset?.Mobile !== undefined ? `left: ${pricingTableHZLeftOffset?.Mobile}${pricingTableHZLeftOffsetUnits?.Mobile};` : ''}
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'right' && pricingTableHZRightOffset?.Mobile !== undefined ? `right: ${pricingTableHZRightOffset?.Mobile}${pricingTableHZRightOffsetUnits?.Mobile};` : ''}
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'top' && pricingTableVRTopOffset?.Mobile !== undefined ? `top: ${pricingTableVRTopOffset?.Mobile}${pricingTableVRTopOffsetUnits?.Mobile};` : ''}
                ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'bottom' && pricingTableVRBottomOffset?.Mobile !== undefined ? `bottom: ${pricingTableVRBottomOffset?.Mobile}${pricingTableVRBottomOffsetUnits?.Mobile};` : ''} 
                ${priceGlobalZIndex?.Mobile ? `z-index: ${priceGlobalZIndex?.Mobile};` : ''}
            }

            ${pricingPresetStyle === 'preset-1' ? ` 
                .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper{
                    position: absolute !important;
                }    
            `:''}

            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-top-wrapper {
                position: relative;
                top: 0;
                ${pricingTopSectionBorderMobileWidth && pricingTopSectionBorderMobile?.top ? `border-width: ${pricingTopSectionBorderMobileWidth};` : ''}
                ${pricingTopSectionBorderRadiusMobileWidth && pricingTopSectionBorderRadiusMobile?.top? `border-radius: ${pricingTopSectionBorderRadiusMobileWidth};` : ''}
                ${pricingTopSectionMobilePaddingWidth && pricingTopSectionMobilePadding?.top? `padding: ${pricingTopSectionMobilePaddingWidth};` : ''}
                transition: all .3s ease-in-out;
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper.fb-multi-column-pricing-table-top-section .fb-mc-pricing-column .fb-mc-pricing-top-wrapper .fb-mc-pricing-top-text{
                ${pricingTopSectionTextGlobalTypoSwitcher?.fontSize === false && pricingTopSectionTextFontSize?.Mobile ? `font-size: ${pricingTopSectionTextFontSize?.Mobile}${pricingTopSectionTextFontSizeUnits?.Mobile};` : ""}
                ${pricingTopSectionTextGlobalTypoSwitcher?.letterSpacing === false && pricingTopSectionTextLetterSpacing?.Mobile ? `letter-spacing: ${pricingTopSectionTextLetterSpacing?.Mobile}${pricingTopSectionTextLetterSpacingUnits?.Mobile};` : ""}
                ${pricingTopSectionTextGlobalTypoSwitcher?.lineHeight === false && pricingTopSectionTextLineHeight?.Mobile ? `line-height: ${pricingTopSectionTextLineHeight?.Mobile}${pricingTopSectionTextLineHeightUnits?.Mobile};` : ""}
               text-align: center;
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper.fb-multi-column-pricing-table-top-section .fb-mc-pricing-column .fb-mc-pricing-top-wrapper:hover .fb-mc-pricing-top-text{
                ${pricingTopSectionTextHoverColor ? `color: ${pricingTopSectionTextHoverColor};` : ''}
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper {
                ${globalMobilePadding && priceGlobalPaddingMobile?.top? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && priceGlobalMarginMobile?.top? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && priceGlobalBorderMobile?.top? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && priceGlobalBorderRadiusMobile?.top? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                transition: all .3s ease-in-out;
                position: relative;
            }
            
            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header {
                ${headerMobilePadding && pricingHeaderMobilePadding?.top? `padding: ${headerMobilePadding};` : ''}
                ${headerMobileBorderWidth && pricingHeaderBorderMobile?.top ? `border-width: ${headerMobileBorderWidth};` : ''}
                ${headerMobileBorderRadiusWidth && pricingHeaderBorderRadiusMobile?.top? `border-radius: ${headerMobileBorderRadiusWidth};` : ''}
            }
                
            ${pricingPresetStyle === 'preset-1' ? ` 
                .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content {
                    ${headerMobilePadding && pricingHeaderMobilePadding?.top? `padding: ${headerMobilePadding};` : ''}
                    ${headerMobileBorderWidth && pricingHeaderBorderMobile?.top ? `border-width: ${headerMobileBorderWidth};` : ''}
                    ${headerMobileBorderRadiusWidth && pricingHeaderBorderRadiusMobile?.top? `border-radius: ${headerMobileBorderRadiusWidth};` : ''}
                }

                .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header {
                   border-radius: 16px 16px 0 0;
                }    

                .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-content {
                   border-radius: 0 0 16px 16px;
                } 

                .${blockID} .fb-layout-two .fb-mc-pricing-features-wrapper {
                    border-radius: 16px 16px 16px 16px !important;                
                }
            `:''}

            .${blockID}	.fb-mc-pricing-price-wrapper {
                ${priceMobilePaddingWidth && priceMobilePadding?.top? `padding: ${priceMobilePaddingWidth};` : ''}
                text-align: ${pricingAlignment === 'left' ? 'left' : pricingAlignment === 'center' ? 'center' : pricingAlignment === 'right' ? 'right' : 'center'};
            }
            
           .${blockID} .fb-mc-pricing-features-wrapper {
                ${priceFeatureMobileMarginWidth && priceFeatureMobileMargin?.top? `margin: ${priceFeatureMobileMarginWidth};` : ''}
                ${priceFeatureMobilePaddingWidth && priceFeatureMobilePadding?.top? `padding: ${priceFeatureMobilePaddingWidth} !important;` : ''}
            }

            .${blockID} .fb-mc-pricing-features-list {
                gap: ${FeatureListGap?.Mobile}${FeatureListGapUnits?.Mobile};
            }

            .${blockID} .fb-mc-pricing-feature-item {
                ${priceFeatureItemMobilePaddingWidth && priceFeatureItemMobilePadding?.top? `padding: ${priceFeatureItemMobilePaddingWidth};` : ''}
                ${priceFeatureItemMobileMarginWidth && priceFeatureItemMobileMargin?.top? `margin: ${priceFeatureItemMobileMarginWidth};` : ''}
                ${priceFeatureItemBorder ? `border: ${priceFeatureItemBorder};` : ''}
                ${priceFeatureItemBorderColor ? `border-color: ${priceFeatureItemBorderColor};` : ''}
                ${priceFeatureItemMobileBorderWidth && priceFeatureItemMobileBorder?.top? `border-width: ${priceFeatureItemMobileBorderWidth};` : ''}
                ${priceFeatureItemMobileBorderRadiusWidth && priceFeatureItemMobileBorderRadius?.top? `border-radius: ${priceFeatureItemMobileBorderRadiusWidth};` : ''} 
            }

            .${blockID} .fb-mc-pricing-feature-item:hover {
                ${priceFeatureItemBorderHoverColor ? `border-color: ${priceFeatureItemBorderHoverColor};` : ''}	
            }

            .${blockID} .fb-mc-pricing-feature-item, .${blockID} .fb-mc-pricing-feature-after-text {
                justify-content: ${priceFeatureAlignment === 'left' ? 'flex-start' : priceFeatureAlignment === 'center' ? 'center' : priceFeatureAlignment === 'right' ? 'flex-end' : 'center'};
            }

            .${blockID} .fb-mc-pricing-feature-after-text {
                ${priceFeatureAfterTextGlobalTypoSwitcher?.fontSize === false && priceFeatureAfterTextFontSize?.Mobile && priceFeatureAfterTextFontSizeUnits?.Mobile ? `font-size: ${priceFeatureAfterTextFontSize?.Mobile}${priceFeatureAfterTextFontSizeUnits?.Mobile};` : ''}
                ${priceFeatureAfterTextGlobalTypoSwitcher?.letterSpacing === false && priceFeatureAfterTextLetterSpacing?.Mobile && priceFeatureAfterTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${priceFeatureAfterTextLetterSpacing?.Mobile}${priceFeatureAfterTextLetterSpacingUnits?.Mobile};` : ''}
                ${priceFeatureAfterTextGlobalTypoSwitcher?.lineHeight === false && priceFeatureAfterTextLineHeight?.Mobile && priceFeatureAfterTextLineHeightUnits?.Mobile ? `line-height: ${priceFeatureAfterTextLineHeight?.Mobile}${priceFeatureAfterTextLineHeightUnits?.Mobile};` : ''}	
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header .fb-mc-pricing-title {
                ${pricingTitleGlobalTypoSwitcher?.fontSize === false && pricingTitleFontSize?.Mobile ? `font-size: ${pricingTitleFontSize?.Mobile}${pricingTitleFontSizeUnits?.Mobile};` : ''}
                ${pricingTitleGlobalTypoSwitcher?.letterSpacing === false && pricingTitleLetterSpacing?.Mobile ? `letter-spacing: ${pricingTitleLetterSpacing?.Mobile}${pricingTitleLetterSpacingUnits?.Mobile};` : ''}
                ${pricingTitleGlobalTypoSwitcher?.lineHeight === false && pricingTitleLineHeight?.Mobile ? `line-height: ${pricingTitleLineHeight?.Mobile}${pricingTitleLineHeightUnits?.Mobile};` : ''}

                ${titleMobilePadding && pricingTitleMobilePadding?.top? `padding: ${titleMobilePadding};` : ''}
                ${titleMobileMargin && pricingTitleMobileMargin?.top? `margin: ${titleMobileMargin};` : ''}

            }

            ${pricingPresetStyle === 'preset-1' ? `
                .${blockID} .fb-layout-two.fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-header{
                    ${headerTabletPadding && pricingHeaderTabletPadding?.top ? `padding: ${headerTabletPadding};` : ''}
                }
            `:''}

            .${blockID} .fb-mc-pricing-subtitle {
                ${pricingSubtitleGlobalTypoSwitcher?.fontSize === false && pricingSubtitleFontSize?.Mobile ? `font-size: ${pricingSubtitleFontSize?.Mobile}${pricingSubtitleFontSizeUnits?.Mobile};` : ''}
                ${pricingSubtitleGlobalTypoSwitcher?.letterSpacing === false && pricingSubtitleLetterSpacing?.Mobile ? `letter-spacing: ${pricingSubtitleLetterSpacing?.Mobile}${pricingSubtitleLetterSpacingUnits?.Mobile};` : ''}
                ${pricingSubtitleGlobalTypoSwitcher?.lineHeight === false && pricingSubtitleLineHeight?.Mobile ? `line-height: ${pricingSubtitleLineHeight?.Mobile}${pricingSubtitleLineHeightUnits?.Mobile};` : ''}

                ${subtitleMobilePadding && pricingSubtitleMobilePadding?.top? `padding: ${subtitleMobilePadding};` : ''}
                ${subtitleMobileMargin && pricingSubtitleMobileMargin?.top? `margin: ${subtitleMobileMargin};` : ''}
            }

            .${blockID} .fb-mc-pricing-plan-activation-wrapper{
                ${priceAfterTextBorderMobileWidth && priceAfterTextBorderMobile?.top? `border-width: ${priceAfterTextBorderMobileWidth};` : ''}
                ${priceAfterTextBorderRadiusMobileWidth && priceAfterTextBorderRadiusMobile?.top? `border-radius: ${priceAfterTextBorderRadiusMobileWidth};` : ''}
                ${priceAfterTextMobilePaddingWidth && priceAfterTextPaddingMobile?.top? `padding: ${priceAfterTextMobilePaddingWidth};` : ''}
            }

            .${blockID} .fb-mc-pricing-plan-activation-wrapper .fb-mc-pricing-plan-activation{
                ${priceAfterTextGlobalTypoSwitcher?.fontSize === false && priceAfterTextFontSize?.Mobile && priceAfterTextFontSizeUnits?.Mobile ? `font-size: ${priceAfterTextFontSize?.Mobile}${priceAfterTextFontSizeUnits?.Mobile};` : ''}
                ${priceAfterTextGlobalTypoSwitcher?.letterSpacing === false && priceAfterTextLetterSpacing?.Mobile && priceAfterTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${priceAfterTextLetterSpacing?.Mobile}${priceAfterTextLetterSpacingUnits?.Mobile};` : ''}
                ${priceAfterTextGlobalTypoSwitcher?.lineHeight === false && priceAfterTextLineHeight?.Mobile && priceAfterTextLineHeightUnits?.Mobile ? `line-height: ${priceAfterTextLineHeight?.Mobile}${priceAfterTextLineHeightUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-mc-pricing-after-text {
                ${priceAfterTextFontSize?.Mobile && priceAfterTextFontSizeUnits?.Mobile ? `font-size: ${priceAfterTextFontSize?.Mobile}${priceAfterTextFontSizeUnits?.Mobile};` : ''}
                ${priceAfterTextLetterSpacing?.Mobile && priceAfterTextLetterSpacingUnits?.Mobile ? `letter-spacing: ${priceAfterTextLetterSpacing?.Mobile}${priceAfterTextLetterSpacingUnits?.Mobile};` : ''}
                ${priceAfterTextLineHeight?.Mobile && priceAfterTextLineHeightUnits?.Mobile ? `line-height: ${priceAfterTextLineHeight?.Mobile}${priceAfterTextLineHeightUnits?.Mobile};` : ''}
            }
            
            .${blockID} .fb-mc-pricing-ribbon-icon {
                ${priceIconPositionSwitcher ? 'position: absolute;' : ''}
                ${priceIconPositionSwitcher ? `top: ${priceIconPositionTop?.Mobile && priceIconPositionTopUnits?.Mobile ? `${priceIconPositionTop?.Mobile}${priceIconPositionTopUnits?.Mobile}` : '0'};` : ''}
                ${priceIconPositionSwitcher ? `left: ${priceIconPositionLeft?.Mobile && priceIconPositionLeftUnits?.Mobile ? `${priceIconPositionLeft?.Mobile}${priceIconPositionLeftUnits?.Mobile}` : '0'};` : ''}
                ${priceIconBgSize?.Mobile && priceIconBgSizeUnits?.Mobile ? `width: ${priceIconBgSize?.Mobile}${priceIconBgSizeUnits?.Mobile};` : ''}
                ${priceIconBgSize?.Mobile && priceIconBgSizeUnits?.Mobile ? `height: ${priceIconBgSize?.Mobile}${priceIconBgSizeUnits?.Mobile};` : ''}
                ${priceIconBgColor ? `background-color: ${priceIconBgColor};` : ''}
                ${priceIconBorder ? `border: ${priceIconBorder};` : ''}
                ${priceIconMobileBorderWidthValue && priceIconBorderMobile?.top ? `border-width: ${priceIconMobileBorderWidthValue};` : ''}
                ${priceIconMobileBorderRadiusWidthValue && priceIconBorderRadiusMobile?.top? `border-radius: ${priceIconMobileBorderRadiusWidthValue};` : ''} 
                ${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
                transition: all .3s ease-in-out;
            }
            .${blockID} .fb-mc-pricing-ribbon-icon:hover {
                ${priceIconBgHoverColor ? `background-color: ${priceIconBgHoverColor};` : ''}
                ${priceIconBorderHoverColor ? `border-color: ${priceIconBorderHoverColor};` : ''}
            }
            .${blockID} .fb-mc-pricing-ribbon-icon svg {
                width: ${priceIconSize?.Mobile}${priceIconSizeUnits?.Mobile};
                height: ${priceIconSize?.Mobile}${priceIconSizeUnits?.Mobile};
            }

            .${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-inner-wrapper .fb-mc-pricing-main-wrapper .fb-mc-pricing-button-wrapper .fb-mc-pricing-button {
                width: ${priceButtonWidth?.Mobile ? `${priceButtonWidth?.Mobile}${priceButtonWidthUnits?.Mobile}` : 'auto'}; 
                ${priceButtonGlobalTypoSwitcher?.fontSize === false && priceButtonFontSize?.Mobile ? `font-size: ${priceButtonFontSize?.Mobile}${priceButtonFontSizeUnits?.Mobile};` : ''}
                ${priceButtonGlobalTypoSwitcher?.letterSpacing === false && priceButtonLetterSpacing?.Mobile ? `letter-spacing: ${priceButtonLetterSpacing?.Mobile}${priceButtonLetterSpacingUnits?.Mobile};` : ''}
                ${priceButtonGlobalTypoSwitcher?.lineHeight === false && priceButtonLineHeight?.Mobile ? `line-height: ${priceButtonLineHeight?.Mobile}${priceButtonLineHeightUnits?.Mobile};` : ''}
                ${priceButtonMobilePaddingValue && priceButtonMobilePadding?.top? `padding: ${priceButtonMobilePaddingValue};` : ''}
                ${priceButtonMobileMarginValue && priceButtonMobileMargin?.top? `margin: ${priceButtonMobileMarginValue};` : ''}
                ${priceButtonMobileBorderWidthValue && priceButtonMobileBorderWidth?.top? `border-width: ${priceButtonMobileBorderWidthValue};` : ''}
                ${priceButtonMobileBorderRadiusWidthValue && priceButtonMobileBorderRadiusWidth?.top? `border-radius: ${priceButtonMobileBorderRadiusWidthValue};` : ''}
            }

            .${blockID} .fb-mc-pricing-button.fb-button-icon-left .fb-mc-pricing-button-icon {
                margin-right: ${priceButtonIconSpacing?.Mobile}${priceButtonIconSpacingUnits?.Mobile}; 
            }
            .${blockID} .fb-mc-pricing-button.fb-button-icon-right .fb-mc-pricing-button-icon {
                margin-left: ${priceButtonIconSpacing?.Mobile}${priceButtonIconSpacingUnits?.Mobile};
            }

            .${blockID} .fb-mc-pricing-button-icon svg {
                width: ${priceButtonIconSize?.Mobile}${priceButtonIconSizeUnits?.Mobile};
                height: ${priceButtonIconSize?.Mobile}${priceButtonIconSizeUnits?.Mobile};
            }
        }
    `;

    
    if (!pricingGlobalStyleSwitcher) {
        (columns || []).forEach((column, index) => {
            const colSelector = `.${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(${index + 1}) .fb-mc-pricing-inner-wrapper`;

            // Background Type & Color
            if (column.pricingTopSectionNormalClassicColor) {
                topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper { background: ${column.pricingTopSectionNormalClassicColor}; background-image: none; }`;
            } else if (column.pricingTopSectionNormalGradientColor) {
                const gradValue = column.pricingTopSectionNormalCustomGradientSwitcher !== undefined ? (column.pricingTopSectionNormalCustomGradientSwitcher ? column.pricingTopSectionNormalCustomGradientInputValue : column.pricingTopSectionNormalGradientColor) : '';
                if (gradValue) {
                    topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper { background: ${gradValue}; background-color: transparent; }`;
                }
            }
            
            // Text Color
            if (column.pricingTopSectionTextColor) {
                topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper .fb-mc-pricing-top-text, ${colSelector} .fb-mc-pricing-top-wrapper { color: ${column.pricingTopSectionTextColor}; }`;
            }

            // Border Style and Color
            if (column.pricingTopSectionBorder) {
                 topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper { border-style: ${column.pricingTopSectionBorder}; }`;
                topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper { border-color: ${column.pricingTopSectionBorderColor}; }`;
            }

            // Hover states
            if (column.pricingTopSectionHoverClassicColor) {
                topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper:hover { background: ${column.pricingTopSectionHoverClassicColor}; background-image: none; }`;
            } else if (column.pricingTopSectionHoverGradientColor) {
                const hoverGrad = column.pricingTopSectionHoverCustomGradientSwitcher !== undefined ? (column.pricingTopSectionHoverCustomGradientSwitcher ? column.pricingTopSectionHoverCustomGradientInputValue : column.pricingTopSectionHoverGradientColor) : '';
                if (hoverGrad) {
                    topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper:hover { background: ${hoverGrad}; background-color: transparent; }`;
                }
            }
            
            if (column.pricingTopSectionTextHoverColor) {
                topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper:hover .fb-mc-pricing-top-text { color: ${column.pricingTopSectionTextHoverColor}; }`;
            }
            if (column.pricingTopSectionBorderHoverColor) {
                topSectionDynamicCSS += `${colSelector} .fb-mc-pricing-top-wrapper:hover { border-color: ${column.pricingTopSectionBorderHoverColor}; }`;
            }


             //Column background and border style
            const pricingColSelector = `.${blockID} .fb-multi-column-pricing-table-wrapper .fb-mc-pricing-column:nth-child(${index + 1})`;
            // Background Normal
            if (column.priceColumnNormalClassicColor) {
                pricingColumnDynamicCSS += `${pricingColSelector} { background: ${column.priceColumnNormalClassicColor}; }`;
            } else if (column.priceColumnNormalGradientColor) {
                const gradValue = column.priceColumnNormalCustomGradientSwitcher !== undefined ? (column.priceColumnNormalCustomGradientSwitcher ? column.priceColumnNormalCustomGradientInputValue : column.priceColumnNormalGradientColor) : '';
                if (gradValue) {
                    pricingColumnDynamicCSS += `${pricingColSelector} { background: ${gradValue}; }`;
                }
            }

            // Background Hover
            if (column.priceColumnHoverClassicColor) {
                pricingColumnDynamicCSS += `${pricingColSelector}:hover { background: ${column.priceColumnHoverClassicColor}; }`;
            } else if (column.priceColumnHoverGradientColor) {
                const hoverGrad = column.priceColumnHoverCustomGradientSwitcher !== undefined ? (column.priceColumnHoverCustomGradientSwitcher ? column.priceColumnHoverCustomGradientInputValue : column.priceColumnHoverGradientColor) : '';
                if (hoverGrad) {
                    pricingColumnDynamicCSS += `${pricingColSelector}:hover { background: ${hoverGrad}; }`;
                }
            }

            // Border style, color, width and radius (per-column)
            const columnBorderWidthValue = column.priceColumnDesktopBorderWidth
                ? getFourSideValue(column.priceColumnDesktopBorderWidth, priceColumnBorderUnits?.Desktop)
                : (column.priceColumnBorderDesktop
                    ? getFourSideValue(column.priceColumnBorderDesktop, priceColumnBorderUnits?.Desktop)
                    : '');
            const columnBorderRadiusValue = column.priceColumnDesktopBorderRadiusWidth
                ? getFourSideValue(column.priceColumnDesktopBorderRadiusWidth, priceColumnBorderRadiusUnits?.Desktop)
                : '';
            const columnBorderWidthTabletValue = column.priceColumnTabletBorderWidth
                ? getFourSideValue(column.priceColumnTabletBorderWidth, priceColumnBorderUnits?.Tablet)
                : '';
            const columnBorderWidthMobileValue = column.priceColumnMobileBorderWidth
                ? getFourSideValue(column.priceColumnMobileBorderWidth, priceColumnBorderUnits?.Mobile)
                : '';
            const columnBorderRadiusTabletValue = column.priceColumnTabBorderRadiusWidth
                ? getFourSideValue(column.priceColumnTabBorderRadiusWidth, priceColumnBorderRadiusUnits?.Tablet)
                : '';
            const columnBorderRadiusMobileValue = column.priceColumnMobileBorderRadiusWidth
                ? getFourSideValue(column.priceColumnMobileBorderRadiusWidth, priceColumnBorderRadiusUnits?.Mobile)
                : '';

            if (column.priceColumnBorder) {
                pricingColumnDynamicCSS += `${pricingColSelector} { border-style: ${column.priceColumnBorder}; }`;
                pricingColumnDynamicCSS += `${pricingColSelector} { border-color: ${column.priceColumnBorderColor || ''}; }`;
            }
            if (columnBorderWidthValue && (column.priceColumnDesktopBorderWidth?.top || column.priceColumnBorderDesktop?.top)) {
                pricingColumnDynamicCSS += `${pricingColSelector} { border-width: ${columnBorderWidthValue}; }`;
            }
            if (columnBorderRadiusValue && column.priceColumnDesktopBorderRadiusWidth?.top) {
                pricingColumnDynamicCSS += `${pricingColSelector} { border-radius: ${columnBorderRadiusValue}; }`;
            }
            if (column.priceColumnBorderHoverColor) {
                pricingColumnDynamicCSS += `${pricingColSelector}:hover { border-color: ${column.priceColumnBorderHoverColor}; }`;
            }
            if (columnBorderWidthTabletValue && column.priceColumnTabletBorderWidth?.top) {
                pricingColumnDynamicCSSTablet += `${pricingColSelector} { border-width: ${columnBorderWidthTabletValue}; }`;
            }
            if (columnBorderRadiusTabletValue && column.priceColumnTabBorderRadiusWidth?.top) {
                pricingColumnDynamicCSSTablet += `${pricingColSelector} { border-radius: ${columnBorderRadiusTabletValue}; }`;
            }
            if (columnBorderWidthMobileValue && column.priceColumnMobileBorderWidth?.top) {
                pricingColumnDynamicCSSMobile += `${pricingColSelector} { border-width: ${columnBorderWidthMobileValue}; }`;
            }
            if (columnBorderRadiusMobileValue && column.priceColumnMobileBorderRadiusWidth?.top) {
                pricingColumnDynamicCSSMobile += `${pricingColSelector} { border-radius: ${columnBorderRadiusMobileValue}; }`;
            }

        });
    }

    const customCss = getCustomCss(pricingTableGlobalCustomCSS, `.${blockID} `);
    return `${pricingTableBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generatePricingTableStyle;