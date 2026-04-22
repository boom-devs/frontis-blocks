import { __, sprintf } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    Button,
    ButtonGroup,
    SelectControl,
    TextareaControl,
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import {
    TEXT_ALIGN,
    POST_GRID_ICON_ALIGN,
    CURRENCY_POSITION,
    ICON_POSITION,
    BORDER_STYLES,
    OVERFLOW_OP,
} from '@Constants/fbConstants';

import FBIconPicker from "../../components/icon-picker";
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import SortableItem from './sortableItem.js';
import FB_UrlControl from '@Components/url-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_Presets from '@Components/presets';
import { pricingTablePresets } from './presets';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        blockStyle,
        selectedColumn,
        columns,
        pricingPresetStyle,
        priceFeatureTitle,
        priceFeatureTitleSwitcher,
        featureTitleAlignment,
        featureTitlePositionUnits,
        featureTitlePosition,

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

        pricingSubtitleMarginUnits,
        pricingSubtitleDesktopMargin,
        pricingSubtitleTabletMargin,
        pricingSubtitleMobileMargin,
        pricingSubtitleMarginLink,

        /** Start Feature Icon */
        FeatureListGap,
        FeatureListGapUnits,
        priceFeatureAlignment,
        priceFeatureIconColorSwitcher,
        priceFeatureIconColor,
        priceFeatureIconHoverColor,
        priceFeatureIconSize,
        priceFeatureIconSizeUnits,
        priceFeatureDisabledOpacity,
        /** End Feature Icon */

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

        /** Start Feature items text */
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
        /** End Feature items text */

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

        priceFeatureAfterTextMarginUnits,
        priceFeatureAfterTextDesktopMargin,
        priceFeatureAfterTextTabletMargin,
        priceFeatureAfterTextMobileMargin,
        priceFeatureAfterTextMarginLink,

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

    const deviceType = useDeviceType();

    const maxColumnTabs = pricingPresetStyle === 'preset-2' ? 4 : 3;
    const columnSwitcherOptions = Array.from({ length: maxColumnTabs }, (_, i) => ({
        label: sprintf(__('Col %d', 'frontis-blocks'), i + 1),
        value: columns?.[i]?.id || `column-${i + 1}`,
    }));

    // Helper to get current column data
    const getColumnData = () => {
        const columnIndex = columns.findIndex(col => col.id === selectedColumn);
        return columns[columnIndex] || {};
    };

    // Helper to update specific column attribute
    const updateColumnAttribute = (key, value) => {
        const columnIndex = columns.findIndex(col => col.id === selectedColumn);
        const newColumns = columns.map((col, index) => {
            if (index === columnIndex) {
                return { ...col, [key]: value };
            }
            return col;
        });
        setAttributes({ columns: newColumns });
    };

    // Get current column data
    const columnData = getColumnData();

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = (columnData.priceFeatureItems || []).findIndex(item => item.id === active.id);
            const newIndex = (columnData.priceFeatureItems || []).findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(columnData.priceFeatureItems || [], oldIndex, newIndex);
            updateColumnAttribute('priceFeatureItems', updatedItems);
        }
    };

    const handleAddItem = () => {
        const newItem = { id: `item-${(columnData.priceFeatureItems || []).length + 1}`, Title: `Feature Item ${(columnData.priceFeatureItems || []).length + 1}`, FeatureIcon: 'check', FeatureIconAlign: 'icon', Disabled: false, DisabledListItem: '0.5' };
        updateColumnAttribute('priceFeatureItems', [...(columnData.priceFeatureItems || []), newItem]);
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = (columnData.priceFeatureItems || []).map(item =>
            item.id === id ? { ...item, [key]: value } : item
        );
        updateColumnAttribute('priceFeatureItems', updatedItems);
    };

    const handleDeleteItem = (id) => {
        const updatedItems = (columnData.priceFeatureItems || []).filter(item => item.id !== id);
        updateColumnAttribute('priceFeatureItems', updatedItems);
    };

    const priceIconHandler = (IconName) => {
        setAttributes({pricingIcon: IconName})
    }
    const priceButtonIconHandler = (IconName) => {
        setAttributes({priceButtonIcon: IconName})
    }

    const getColumnsVal = (key) => (!pricingGlobalStyleSwitcher && columnData[key] !== undefined) ? columnData[key] : attributes[key];
    const setColumnsVal = (key, val) => pricingGlobalStyleSwitcher ? setAttributes({ [key]: val }) : updateColumnAttribute(key, val);

    /** Start section Top Padding */ 
    const handleTopSectionPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingTopSectionPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingTopSectionDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingTopSectionTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingTopSectionMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingTopSectionDesktopPadding: {...pricingTopSectionDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingTopSectionTabletPadding: {...pricingTopSectionTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingTopSectionMobilePadding: {...pricingTopSectionMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleTopSectionPaddingCombineBtn = () => {   
        setAttributes( {pricingTopSectionPaddingLink: !pricingTopSectionPaddingLink} );
    }

    const handleTopSectionPaddingUnitsHandler = (unit) => {
        setAttributes( {
            pricingTopSectionPaddingUnits: {
                ...pricingTopSectionPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Top Section Padding */

    /** Start section Top Border */ 
    const handleTopSectionBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingTopSectionBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingTopSectionBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingTopSectionBorderTablet: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingTopSectionBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingTopSectionBorderDesktop: {...pricingTopSectionBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingTopSectionBorderTablet: {...pricingTopSectionBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingTopSectionBorderMobile: {...pricingTopSectionBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleTopSectionBorderCombineBtn = () => {   
        setAttributes( {pricingTopSectionBorderLink: !pricingTopSectionBorderLink} );
    }

    const handleTopSectionBorderUnitsHandler = (unit) => {
        setAttributes( {
            pricingTopSectionBorderUnits: {
                ...pricingTopSectionBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Top Section Border */
    
    /** Start section Top Border Radius */ 
    const handleTopSectionBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingTopSectionBorderRadiusLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingTopSectionBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingTopSectionBorderRadiusTablet: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingTopSectionBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingTopSectionBorderRadiusDesktop: {...pricingTopSectionBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingTopSectionBorderRadiusTablet: {...pricingTopSectionBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingTopSectionBorderRadiusMobile: {...pricingTopSectionBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleTopSectionBorderRadiusCombineBtn = () => {   
        setAttributes( {pricingTopSectionBorderRadiusLink: !pricingTopSectionBorderRadiusLink} );
    }

    const handleTopSectionBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            pricingTopSectionBorderRadiusUnits: {
                ...pricingTopSectionBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Top Section Border Radius */

    /** Start section Top Text Padding */ 
    const handleTopSectionTextPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingTopSectionTextPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingTopSectionTextDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingTopSectionTextTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingTopSectionTextMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingTopSectionTextDesktopPadding: {...pricingTopSectionTextDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingTopSectionTextTabletPadding: {...pricingTopSectionTextTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingTopSectionTextMobilePadding: {...pricingTopSectionTextMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleTopSectionTextPaddingCombineBtn = () => { 
        setAttributes( {pricingTopSectionTextPaddingLink: !pricingTopSectionTextPaddingLink} );
    }

    const handleTopSectionTextPaddingUnitsHandler = (unit) => {
        setAttributes( {
            pricingTopSectionTextPaddingUnits: {
                ...pricingTopSectionTextPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Top Section Text Padding */


    /** Start After Text Padding */ 
    const handleAfterTextPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceAfterTextPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceAfterTextPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceAfterTextPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceAfterTextPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceAfterTextPaddingDesktop: {...priceAfterTextPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceAfterTextPaddingTablet: {...priceAfterTextPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceAfterTextPaddingMobile: {...priceAfterTextPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleAfterTextPaddingCombineBtn = () => {
        setAttributes( {priceAfterTextPaddingLink: !priceAfterTextPaddingLink} );
    }

    const handleAfterTextPaddingUnitsHandler = (unit) => {
        setAttributes( {
            priceAfterTextPaddingUnits: {
                ...priceAfterTextPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End After Text Padding */


    /** Start Feature Item Padding */ 
    const handleFeatureItemPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceFeatureItemPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceFeatureItemDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceFeatureItemTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceFeatureItemMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceFeatureItemDesktopPadding: {...priceFeatureItemDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceFeatureItemTabPadding: {...priceFeatureItemTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceFeatureItemMobilePadding: {...priceFeatureItemMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleFeatureItemPaddingCombineBtn = () => {
        setAttributes( {priceFeatureItemPaddingLink: !priceFeatureItemPaddingLink} );
    }

    const handleFeatureItemPaddingUnitsHandler = (unit) => {
        setAttributes( {
            priceFeatureItemPaddingUnits: {
                ...priceFeatureItemPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Feature Item Padding */

    /** Start Feature Item Margin */ 
    const handleFeatureItemMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceFeatureItemMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceFeatureItemDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceFeatureItemTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceFeatureItemMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceFeatureItemDesktopMargin: {...priceFeatureItemDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceFeatureItemTabMargin: {...priceFeatureItemTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceFeatureItemMobileMargin: {...priceFeatureItemMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleFeatureItemMarginCombineBtn = () => {
        setAttributes( {priceFeatureItemMarginLink: !priceFeatureItemMarginLink} );
    }

    const handleFeatureItemMarginUnitsHandler = (unit) => {
        setAttributes( {
            priceFeatureItemMarginUnits: {
                ...priceFeatureItemMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Feature Item Margin */

    /** Start Feature Item Border */ 
    const handleFeatureItemBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceFeatureItemBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceFeatureItemDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceFeatureItemTabBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceFeatureItemMobileBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceFeatureItemDesktopBorder: {...priceFeatureItemDesktopBorder, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceFeatureItemTabBorder: {...priceFeatureItemTabBorder, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceFeatureItemMobileBorder: {...priceFeatureItemMobileBorder, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleFeatureItemBorderCombineBtn = () => {
        setAttributes( {priceFeatureItemBorderLink: !priceFeatureItemBorderLink} );
    }

    const handleFeatureItemBorderUnitsHandler = (unit) => {
        setAttributes( {
            priceFeatureItemBorderUnits: {
                ...priceFeatureItemBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Feature Item Border */


    /** Start Feature Item Border Radius  */ 
    const handleFeatureItemBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceFeatureItemBorderRadiusLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceFeatureItemDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceFeatureItemTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceFeatureItemMobileBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceFeatureItemDesktopBorderRadius: {...priceFeatureItemDesktopBorderRadius, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceFeatureItemTabBorderRadius: {...priceFeatureItemTabBorderRadius, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceFeatureItemMobileBorderRadius: {...priceFeatureItemMobileBorderRadius, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleFeatureItemBorderRadiusCombineBtn = () => {
        setAttributes( {priceFeatureItemBorderRadiusLink: !priceFeatureItemBorderRadiusLink} );
    }

    const handleFeatureItemBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            priceFeatureItemBorderRadiusUnits: {
                ...priceFeatureItemBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Feature Item Border Radius */
    
    /** Start Feature Padding */ 
    const handleFeaturePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceFeaturePaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceFeatureDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceFeatureTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceFeatureMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceFeatureDesktopPadding: {...priceFeatureDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceFeatureTabPadding: {...priceFeatureTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceFeatureMobilePadding: {...priceFeatureMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleFeaturePaddingCombineBtn = () => {
        setAttributes( {priceFeaturePaddingLink: !priceFeaturePaddingLink} );
    }

    const handleFeaturePaddingUnitsHandler = (unit) => {
        setAttributes( {
            priceFeaturePaddingUnits: {
                ...priceFeaturePaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Feature Padding */

    /** Start Feature Margin */ 
    const handleFeatureMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceFeatureMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceFeatureDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceFeatureTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceFeatureMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceFeatureDesktopMargin: {...priceFeatureDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceFeatureTabMargin: {...priceFeatureTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceFeatureMobileMargin: {...priceFeatureMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleFeatureMarginCombineBtn = () => {
        setAttributes( {priceFeatureMarginLink: !priceFeatureMarginLink} );
    }

    const handleFeatureMarginUnitsHandler = (unit) => {
        setAttributes( {
            priceFeatureMarginUnits: {
                ...priceFeatureMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Feature Margin */

    /** Start Feature After Text Margin */ 
    const handleFeatureAfterTextMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceFeatureAfterTextMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceFeatureAfterTextDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceFeatureAfterTextTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceFeatureAfterTextMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceFeatureAfterTextDesktopMargin: {...priceFeatureAfterTextDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceFeatureAfterTextTabletMargin: {...priceFeatureAfterTextTabletMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceFeatureAfterTextMobileMargin: {...priceFeatureAfterTextMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleFeatureAfterTextMarginCombineBtn = () => {
        setAttributes( {priceFeatureAfterTextMarginLink: !priceFeatureAfterTextMarginLink} );
    }

    const handleFeatureAfterTextMarginUnitsHandler = (unit) => {
        setAttributes( {
            priceFeatureAfterTextMarginUnits: {
                ...priceFeatureAfterTextMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Feature After Text Margin */

    /** Start After Text Border */ 
    const handleAfterTextBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceAfterTextBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceAfterTextBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceAfterTextBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceAfterTextBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceAfterTextBorderDesktop: {...priceAfterTextBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceAfterTextBorderTablet: {...priceAfterTextBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceAfterTextBorderMobile: {...priceAfterTextBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleAfterTextBorderCombineBtn = () => {
        setAttributes( {priceAfterTextBorderLink: !priceAfterTextBorderLink} );
    }

    const handleAfterTextBorderUnitsHandler = (unit) => {
        setAttributes( {
            priceAfterTextBorderUnits: {
                ...priceAfterTextBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End After Text Border */

    /** Start After Text Border Radius */ 
    const handleAfterTextBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceAfterTextBorderRadiusLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceAfterTextBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceAfterTextBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceAfterTextBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceAfterTextBorderRadiusDesktop: {...priceAfterTextBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceAfterTextBorderRadiusTablet: {...priceAfterTextBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceAfterTextBorderRadiusMobile: {...priceAfterTextBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleAfterTextBorderRadiusCombineBtn = () => {
        setAttributes( {priceAfterTextBorderRadiusLink: !priceAfterTextBorderRadiusLink} );
    }

    const handleAfterTextBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            priceAfterTextBorderRadiusUnits: {
                ...priceAfterTextBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End After Text Border Radius */

    /** Start Pricing Padding */
    const handlePricePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricePaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceDesktopPadding: {...priceDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceTabletPadding: {...priceTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceMobilePadding: {...priceMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePricePaddingCombineBtn = () => {
        setAttributes( {pricePaddingLink: !pricePaddingLink} );
    }

    const handlePricePaddingUnitsHandler = (unit) => {
        setAttributes( {
            pricePaddingUnits: {
                ...pricePaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Grid Padding */

     /** Start Prcing Grid Margin */
     const handlePricingGridMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingGridMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingGridDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingGridTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingGridMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingGridDesktopMargin: {...pricingGridDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingGridTabletMargin: {...pricingGridTabletMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingGridMobileMargin: {...pricingGridMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePricingGridMarginCombineBtn = () => {
        setAttributes( {pricingGridMarginLink: !pricingGridMarginLink} );
    }

    const handlePricingGridMarginUnitsHandler = (unit) => {
        setAttributes( {
            pricingGridMarginUnits: {
                ...pricingGridMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Grid Margin */

    /** Start Pricing Grid padding */
    const handlePricingGridPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingGridPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingGridDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingGridTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingGridMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingGridDesktopPadding: {...pricingGridDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingGridTabletPadding: {...pricingGridTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingGridMobilePadding: {...pricingGridMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePricingGridPaddingCombineBtn = () => {
        setAttributes( {pricingGridPaddingLink: !pricingGridPaddingLink} );
    }

    const handlePricingGridPaddingUnitsHandler = (unit) => {
        setAttributes( {
            pricingGridPaddingUnits: {
                ...pricingGridPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Header Padding */

    /** Start Pricing Grid border */
    const handlePricingGridBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingGridBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingGridBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingGridBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingGridBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingGridBorderDesktop: {...pricingGridBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingGridBorderTablet: {...pricingGridBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingGridBorderMobile: {...pricingGridBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePricingGridBorderCombineBtn = () => {
        setAttributes( {pricingGridBorderLink: !pricingGridBorderLink} );
    }

    const handlePricingGridBorderUnitsHandler = (unit) => {
        setAttributes( {
            pricingGridBorderUnits: {
                ...pricingGridBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Grid Border */

    /** Start Pricing Grid border radius*/
    const handlePricingGridBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingGridBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingGridBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingGridBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingGridBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingGridBorderRadiusDesktop: {...pricingGridBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingGridBorderRadiusTablet: {...pricingGridBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingGridBorderRadiusMobile: {...pricingGridBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePricingGridBorderRadiusCombineBtn = () => {
        setAttributes( {pricingGridBorderRadiusLink: !pricingGridBorderRadiusLink} );
    }

    const handlePricingGridBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            pricingGridBorderRadiusUnits: {
                ...pricingGridBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Grid border */


    /** Start Header padding */
    const handleHeaderPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingHeaderPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingHeaderDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingHeaderTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingHeaderMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingHeaderDesktopPadding: {...pricingHeaderDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingHeaderTabletPadding: {...pricingHeaderTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingHeaderMobilePadding: {...pricingHeaderMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleHeaderPaddingCombineBtn = () => {
        setAttributes( {pricingHeaderPaddingLink: !pricingHeaderPaddingLink} );
    }

    const handleHeaderPaddingUnitsHandler = (unit) => {
        setAttributes( {
            pricingHeaderPaddingUnits: {
                ...pricingHeaderPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Header Padding */

    /** Start Header border */
    const handleHeaderBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingHeaderBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingHeaderBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingHeaderBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingHeaderBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingHeaderBorderDesktop: {...pricingHeaderBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingHeaderBorderTablet: {...pricingHeaderBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingHeaderBorderMobile: {...pricingHeaderBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleHeaderBorderCombineBtn = () => {
        setAttributes( {pricingHeaderBorderLink: !pricingHeaderBorderLink} );
    }

    const handleHeaderBorderUnitsHandler = (unit) => {
        setAttributes( {
            pricingHeaderBorderUnits: {
                ...pricingHeaderBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Header Border */

    /** Start Header border radius*/
    const handleHeaderBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingHeaderBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingHeaderBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingHeaderBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingHeaderBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingHeaderBorderRadiusDesktop: {...pricingHeaderBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingHeaderBorderRadiusTablet: {...pricingHeaderBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingHeaderBorderRadiusMobile: {...pricingHeaderBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleHeaderBorderRadiusCombineBtn = () => {
        setAttributes( {pricingHeaderBorderRadiusLink: !pricingHeaderBorderRadiusLink} );
    }

    const handleHeaderBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            pricingHeaderBorderRadiusUnits: {
                ...pricingHeaderBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Header border */

    /** Start Title padding */
    const handleTitlePaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingTitlePaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingTitleDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingTitleTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingTitleMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingTitleDesktopPadding: {...pricingTitleDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingTitleTabletPadding: {...pricingTitleTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingTitleMobilePadding: {...pricingTitleMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleTitlePaddingCombineBtn = () => {
        setAttributes( {pricingTitlePaddingLink: !pricingTitlePaddingLink} );
    }

    const handleTitlePaddingUnitsHandler = (unit) => {
        setAttributes( {
            pricingTitlePaddingUnits: {
                ...pricingTitlePaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Title Padding */

    /** Start Title Margin */
    const handleTitleMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingTitleMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingTitleDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        pricingTitleTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingTitleMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingTitleDesktopMargin: {...pricingTitleDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingTitleTabletMargin: {...pricingTitleTabletMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingTitleMobileMargin: {...pricingTitleMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleTitleMarginCombineBtn = () => {
        setAttributes( {pricingTitleMarginLink: !pricingTitleMarginLink} );
    }

    const handleTitleMarginUnitsHandler = (unit) => {
        setAttributes( {
            pricingTitleMarginUnits: {
                ...pricingTitleMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Title Margin */

    /** Start Subtitle Margin */
    const handleSubTitleMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( pricingSubtitleMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        pricingSubtitleDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {    
                        pricingSubtitleTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        pricingSubtitleMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {pricingSubtitleDesktopMargin: {...pricingSubtitleDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {pricingSubtitleTabletMargin: {...pricingSubtitleTabletMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {pricingSubtitleMobileMargin: {...pricingSubtitleMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleSubtitleMarginCombineBtn = () => {
        setAttributes( {pricingSubtitleMarginLink: !pricingSubtitleMarginLink} );
    }

    const handleSubtitleMarginUnitsHandler = (unit) => {
        setAttributes( {
            pricingSubtitleMarginUnits: {
                ...pricingSubtitleMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Subtitle Margin */

    /** Start Icon Border */
    const handlePriceIconBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceIconBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceIconBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceIconBorderDesktop: {...priceIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceIconBorderTablet: {...priceIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceIconBorderMobile: {...priceIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceIconBorderCombineBtn = () => {
        setAttributes( {priceIconBorderLink: !priceIconBorderLink} );
    }

    const handlePriceIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            priceIconBorderUnits: {
                ...priceIconBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Icon Border */

    /** Start Icon Border Radius */
    const handlePriceIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceIconBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceIconBorderRadiusDesktop: {...priceIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceIconBorderRadiusTablet: {...priceIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceIconBorderRadiusMobile: {...priceIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceIconBorderRadiusCombineBtn = () => {
        setAttributes( {priceIconBorderRadiusLink: !priceIconBorderRadiusLink} );
    }

    const handlePriceIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            priceIconBorderRadiusUnits: {
                ...priceIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Icon Border Radius */

    /** Start Pricing Button padding */
    const handlePriceButtonPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceButtonPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceButtonDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceButtonTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceButtonMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceButtonDesktopPadding: {...priceButtonDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceButtonTabPadding: {...priceButtonTabPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceButtonMobilePadding: {...priceButtonMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceButtonPaddingCombineBtn = () => {
        setAttributes( {priceButtonPaddingLink: !priceButtonPaddingLink} );
    }

    const handlePriceButtonPaddingUnitsHandler = (unit) => {
        setAttributes( {
            priceButtonPaddingUnits: {
                ...priceButtonPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Button Padding */
    
    /** Start Pricing Button Margin */
    const handlePriceButtonMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceButtonMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceButtonDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceButtonTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceButtonMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceButtonDesktopMargin: {...priceButtonDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceButtonTabMargin: {...priceButtonTabMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceButtonMobileMargin: {...priceButtonMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceButtonMarginCombineBtn = () => {
        setAttributes( {priceButtonMarginLink: !priceButtonMarginLink} );
    }

    const handlePriceButtonMarginUnitsHandler = (unit) => {
        setAttributes( {
            priceButtonMarginUnits: {
                ...priceButtonMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Button Margin */

    /** Start Pricing Button border */
    const handlePriceButtonBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceButtonBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceButtonDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceButtonTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceButtonMobileBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceButtonDesktopBorderWidth: {...priceButtonDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceButtonTabBorderWidth: {...priceButtonTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceButtonMobileBorderWidth: {...priceButtonMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceButtonBorderCombineBtn = () => {
        setAttributes( {priceButtonBorderLink: !priceButtonBorderLink} );
    }

    const handlePriceButtonBorderUnitsHandler = (unit) => {
        setAttributes( {
            priceButtonBorderUnits: {
                ...priceButtonBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Button Border */

    /** Start Pricing Button border radius*/
    const handlePriceButtonBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceButtonBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceButtonDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceButtonTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceButtonMobileBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceButtonDesktopBorderRadiusWidth: {...priceButtonDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceButtonTabBorderRadiusWidth: {...priceButtonTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceButtonMobileBorderRadiusWidth: {...priceButtonMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceButtonBorderRadiusCombineBtn = () => {
        setAttributes( {priceButtonBorderRadiusLink: !priceButtonBorderRadiusLink} );
    }

    const handlePriceButtonBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            priceButtonBorderRadiusUnits: {
                ...priceButtonBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Pricing Button border */

    /** Start Pricing Column border */
    const handlePriceColumnBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceColumnBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setColumnsVal( 'priceColumnDesktopBorderWidth', {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        } );
                    break;
                case 'Tablet':
                    setColumnsVal( 'priceColumnTabletBorderWidth', {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        } );
                    break;
                case 'Mobile':
                    setColumnsVal( 'priceColumnMobileBorderWidth', {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setColumnsVal( 'priceColumnDesktopBorderWidth', {...getColumnsVal('priceColumnDesktopBorderWidth'), [position]: value} );
                    break;
                case 'Tablet':
                    setColumnsVal( 'priceColumnTabletBorderWidth', {...getColumnsVal('priceColumnTabletBorderWidth'), [position]: value} );
                    break;
                case 'Mobile':
                    setColumnsVal( 'priceColumnMobileBorderWidth', {...getColumnsVal('priceColumnMobileBorderWidth'), [position]: value} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceColumnBorderCombineBtn = () => {
        setColumnsVal( 'priceColumnBorderLink', !getColumnsVal('priceColumnBorderLink') );
    }

    const handlePriceColumnBorderUnitsHandler = (unit) => {
        setColumnsVal( 'priceColumnBorderUnits', {
            ...getColumnsVal('priceColumnBorderUnits'),
            [deviceType]: unit
        })
    }
    /** End Pricing Column Border */

    /** Start Pricing Column border radius*/
    const handlePriceColumnBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceColumnBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setColumnsVal( 'priceColumnDesktopBorderRadiusWidth', {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        } );
                    break;
                case 'Tablet':
                    setColumnsVal( 'priceColumnTabBorderRadiusWidth', {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        } );
                    break;
                case 'Mobile':
                    setColumnsVal( 'priceColumnMobileBorderRadiusWidth', {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setColumnsVal( 'priceColumnDesktopBorderRadiusWidth', {...getColumnsVal('priceColumnDesktopBorderRadiusWidth'), [position]: value} );
                    break;
                case 'Tablet':
                    setColumnsVal( 'priceColumnTabBorderRadiusWidth', {...getColumnsVal('priceColumnTabBorderRadiusWidth'), [position]: value} );
                    break;
                case 'Mobile':
                    setColumnsVal( 'priceColumnMobileBorderRadiusWidth', {...getColumnsVal('priceColumnMobileBorderRadiusWidth'), [position]: value} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceColumnBorderRadiusCombineBtn = () => {
        setColumnsVal( 'priceColumnBorderRadiusLink', !getColumnsVal('priceColumnBorderRadiusLink') );
    }

    const handlePriceColumnBorderRadiusUnitsHandler = (unit) => {
        setColumnsVal( 'priceColumnBorderRadiusUnits', {
            ...getColumnsVal('priceColumnBorderRadiusUnits'),
            [deviceType]: unit
        })
    }
    /** end Pricing Column border */

    /** Start Pricing Column Padding */
    const handlePriceColumnPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceColumnPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceColumnDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceColumnTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceColumnMobilePadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceColumnDesktopPadding: {...priceColumnDesktopPadding, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceColumnTabletPadding: {...priceColumnTabletPadding, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceColumnMobilePadding: {...priceColumnMobilePadding, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceColumnPaddingCombineBtn = () => {
        setAttributes( {priceColumnPaddingLink: !priceColumnPaddingLink} );
    }

    const handlePriceColumnPaddingUnitsHandler = (unit) => {
        setAttributes( {
            priceColumnPaddingUnits: {
                ...priceColumnPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Column Padding */
    
    /** Start Pricing Column Margin */
    const handlePriceColumnMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceColumnMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceColumnDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceColumnTabletMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceColumnMobileMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceColumnDesktopMargin: {...priceColumnDesktopMargin, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceColumnTabletMargin: {...priceColumnTabletMargin, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceColumnMobileMargin: {...priceColumnMobileMargin, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handlePriceColumnMarginCombineBtn = () => {
        setAttributes( {priceColumnMarginLink: !priceColumnMarginLink} );
    }

    const handlePriceColumnMarginUnitsHandler = (unit) => {
        setAttributes( {
            priceColumnMarginUnits: {
                ...priceColumnMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Pricing Column Margin */

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceGlobalPaddingLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceGlobalPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceGlobalPaddingDesktop: {...priceGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceGlobalPaddingTablet: {...priceGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceGlobalPaddingMobile: {...priceGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {priceGlobalPaddingLink: !priceGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            priceGlobalPaddingUnits: {
                ...priceGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Padding */
    
    /** Start Global Margin */
    const handleGlobalMarginUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceGlobalMarginLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceGlobalMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceGlobalMarginDesktop: {...priceGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceGlobalMarginTablet: {...priceGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceGlobalMarginMobile: {...priceGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {priceGlobalMarginLink: !priceGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            priceGlobalMarginUnits: {
                ...priceGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceGlobalBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceGlobalBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceGlobalBorderDesktop: {...priceGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceGlobalBorderTablet: {...priceGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceGlobalBorderMobile: {...priceGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {priceGlobalBorderLink: !priceGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            priceGlobalBorderUnits: {
                ...priceGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */


    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( priceGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        priceGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        priceGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        priceGlobalBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {priceGlobalBorderRadiusDesktop: {...priceGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {priceGlobalBorderRadiusTablet: {...priceGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {priceGlobalBorderRadiusMobile: {...priceGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {priceGlobalBorderRadiusLink: !priceGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            priceGlobalBorderRadiusUnits: {
                ...priceGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("Pricing Table", "frontis-blocks")} initialOpen={true}>
                <BaseControl label={__("Preset Style", "frontis-blocks")}>
                    <FB_Presets
                        className="fb-advanced-heading-presets"
                        label={__('Select Preset', 'frontis-blocks')}
                        presets={pricingTablePresets}
                        value={pricingPresetStyle}
                        onChangeValue='pricingPresetStyle'
                        defaultPresetValue="default"
                        setAttributes={setAttributes}
                    />
                </BaseControl>

                <FB_SwitcherControl
                    label={__("Select Column", "frontis-blocks")}
                    help={__("Choose the column you want to change content.", "frontis-blocks")}
                    options={columnSwitcherOptions}
                    globalSwitcher={selectedColumn}
                    setGlobalSwitcher={(value) => setAttributes({ selectedColumn: value })}
                />
            </PanelBody>
            {/** Start Header */}
            <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>

                <ToggleControl
                    label={__("Display Top Section", "frontis-blocks")}
                    checked={columnData.pricingSectionTopSwitcher}
                    onChange={(value) => updateColumnAttribute('pricingSectionTopSwitcher', value)}
                />
                {columnData.pricingSectionTopSwitcher && (
                    <TextControl
                        label={__("Top Badge Text", "frontis-blocks")}
                        value={columnData.pricingSectionTopText}
                        onChange={(value) => updateColumnAttribute('pricingSectionTopText', value)}
                        placeholder={__('Most Popular Package', 'frontis-blocks')}
                    />
                )}

                <TextControl
                    label={__("Title", "frontis-blocks")}
                    value={columnData.pricingTitle}
                    onChange={(value) => updateColumnAttribute('pricingTitle', value)}
                    placeholder={__('Personal Package', 'frontis-blocks')}
                />
                <ToggleControl 
                    label={__("Show Sub Title", "frontis-blocks")}
                    checked={columnData.pricingSubTitleSwitcher}
                    onChange={(value) => updateColumnAttribute('pricingSubTitleSwitcher', value)}
                />
                {columnData.pricingSubTitleSwitcher && (
                    <TextControl
                        label={__("Sub Title", "frontis-blocks")}
                        value={columnData.pricingSubTitle}
                        onChange={(value) => updateColumnAttribute('pricingSubTitle', value)}
                    />
                )}
            </PanelBody>
            {/** End Header */}

            {/** Start Price */}
            <PanelBody title={__("Price", "frontis-blocks")} initialOpen={false}>
                <TextControl
                    label={__("Price", "frontis-blocks")}
                    value={columnData.normalPrice}
                    onChange={(value) => updateColumnAttribute('normalPrice', value)}
                />
                <ToggleControl
                    label={__("On Sale", "frontis-blocks")}
                    checked={columnData.salePriceSwitcher}
                    onChange={(value) => updateColumnAttribute('salePriceSwitcher', value)}
                />
                {columnData.salePriceSwitcher && (
                    <TextControl
                        label={__("Sale Price", "frontis-blocks")}
                        value={columnData.salePrice}
                        onChange={(value) => updateColumnAttribute('salePrice', value)}
                    />
                )}
                <TextControl
                    label={__("Currency", "frontis-blocks")}
                    value={columnData.priceCurrency}
                    onChange={(value) => updateColumnAttribute('priceCurrency', value)}
                />
                <SelectControl
                    label={__("Currency Position", "frontis-blocks")}
                    value={columnData.priceCurrencyPosition}
                    onChange={(value) => updateColumnAttribute('priceCurrencyPosition', value)}
                    options={CURRENCY_POSITION}
                />
                <TextControl
                    label={__("Separator", "frontis-blocks")}
                    value={columnData.pricePeriodSeparator}
                    onChange={(value) => updateColumnAttribute('pricePeriodSeparator', value)}
                />
                <TextControl
                    label={__("Period", "frontis-blocks")}
                    value={columnData.pricePeriod}
                    onChange={(value) => updateColumnAttribute('pricePeriod', value)}
                />
            </PanelBody>
            {/** End Price */}

            <PanelBody title={__("Pricing Plan Activation", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__("Show Pricing Plan Text", "frontis-blocks")}
                    checked={columnData.priceAfterTextSwitcher}
                    onChange={(value) => updateColumnAttribute('priceAfterTextSwitcher', value)}
                />
                {columnData.priceAfterTextSwitcher && (
                    <TextControl
                        value={columnData.priceAfterText}
                        onChange={(value) => updateColumnAttribute('priceAfterText', value)}
                    />
                )}
            </PanelBody>

            {/** Start Feature */}
            <PanelBody title={__("Features", "frontis-blocks")} initialOpen={false}>
                {pricingPresetStyle === 'preset-3' && (
                    <ToggleControl
                        label={__("Feature After Text", "frontis-blocks")}
                        checked={columnData.priceFeatureAfterTextSwitcher}
                        onChange={(value) => updateColumnAttribute('priceFeatureAfterTextSwitcher', value)}
                    />
                )}

                <ToggleControl
                    label={__("Show Features", "frontis-blocks")}
                    checked={columnData.priceHideFeaturesSwitcher}
                    onChange={(value) => updateColumnAttribute('priceHideFeaturesSwitcher', value)}
                />

                {columnData.priceHideFeaturesSwitcher && (
                    <>
                        <ToggleControl
                            label={__("Show Icon", "frontis-blocks")}
                            checked={columnData.priceFeatureIconSwitcher}
                            onChange={(value) => updateColumnAttribute('priceFeatureIconSwitcher', value)}
                        />
                        <div className="fb-feature-wrapper">
                            <DndContext
                                collisionDetection={closestCenter}
                                onDragEnd={handleDragEnd}
                            >
                                <SortableContext items={(columnData.priceFeatureItems || []).map(item => item.id)}>
                                    <ul className='dnd-items-wrapper'>
                                        {(columnData.priceFeatureItems || []).map((item) => (
                                            <SortableItem
                                                key={item.id}
                                                id={item.id}
                                                item={item}
                                                handleChangeItem={handleChangeItem}
                                                handleDeleteItem={handleDeleteItem}
                                                setAttributes={setAttributes}
                                            />
                                        ))}
                                    </ul>
                                </SortableContext>
                                <Button isPrimary onClick={handleAddItem}>
                                    {__("Add Feature", "frontis-blocks")}
                                </Button>
                            </DndContext>
                        </div>
                    </>
                )}
                
                {(pricingPresetStyle === 'preset-3' && columnData.priceFeatureAfterTextSwitcher) && (
                    <TextControl
                        label={__("Feature After Text", "frontis-blocks")}
                        value={columnData.priceFeatureAfterText}
                        onChange={(value) => updateColumnAttribute('priceFeatureAfterText', value)}
                    />
                )}
            </PanelBody>
            {/** End Feature */}

            {pricingPresetStyle === 'preset-1' && (
                <PanelBody title={__("Feature Title", "frontis-blocks")} initialOpen={false}>
                     <FB_Range
                        min={0}
                        max={100}
                        label={__("Position Top (%)", "frontis-blocks")}
                        rangeValue={featureTitlePosition}
                        onChangeHandler={(value) => setAttributes({ featureTitlePosition: value })}
                        rangeUnitHandler={(value) => setAttributes({ featureTitlePositionUnits: value })}
                        deviceType={deviceType}
                        units={featureTitlePositionUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={'67%'}
                    />
                    <ToggleControl
                        label={__("Show Feature Title", "frontis-blocks")}
                        checked={priceFeatureTitleSwitcher}
                        onChange={(value) => setAttributes({ priceFeatureTitleSwitcher: value })}
                    />
                    {priceFeatureTitleSwitcher && (
                        <TextControl
                            label={__("Feature title", "frontis-blocks")}
                            value={priceFeatureTitle}
                            onChange={(value) => setAttributes({ priceFeatureTitle: value })}
                            placeholder={__('Enter feature title', 'frontis-blocks')}
                        />
                    )}
                </PanelBody>
            )}

            {/** Start Button */}
            <PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__("Enable Button", "frontis-blocks")}
                    checked={columnData.priceButtonSwitcher}
                    onChange={(value) => updateColumnAttribute('priceButtonSwitcher', value)}
                />
                {columnData.priceButtonSwitcher && (
                    <>
                        <TextControl
                            label={__("Button Text", "frontis-blocks")}
                            value={columnData.priceButtonText}
                            onChange={(value) => updateColumnAttribute('priceButtonText', value)}
                        />
                        <FB_UrlControl
                            url={columnData.priceButtonUrl}
                            onChangeUrl={(value) => updateColumnAttribute('priceButtonUrl', value)}
                            openInNewTab={columnData.priceButtonTargetUrl}
                            onChangeOpenInNewTab={(value) => updateColumnAttribute('priceButtonTargetUrl', value)}
                        />
                    </>
                )}
            </PanelBody>
            {/** End Button */}

        </>
    );

    // console.log(columnData.pricingSectionTopSwitcher);

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <ToggleControl
                label={__("Global Styles", "frontis-blocks")}
                help={pricingGlobalStyleSwitcher ? __("Styles for all columns.", "frontis-blocks") : __("Styles for each column.", "frontis-blocks")}
                checked={pricingGlobalStyleSwitcher}
                onChange={(value) => setAttributes({ pricingGlobalStyleSwitcher: value })}
            />
            {columnData.pricingSectionTopSwitcher && (
                <PanelBody title={__("Top Section", "frontis-blocks")} initialOpen={false}>
                    
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={pricingTopSectionTextGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ pricingTopSectionTextGlobalTypographyData: value })}

                        globalTypoType={pricingTopSectionTextGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                pricingTopSectionTextGlobalTypoType: value, 
                                pricingTopSectionTextGlobalTypoSwitcher: value === 'default' ? {...pricingTopSectionTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...pricingTopSectionTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={pricingTopSectionTextGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ pricingTopSectionTextGlobalTypoOption: value })}

                        fontFamily={pricingTopSectionTextFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ pricingTopSectionTextFontFamily: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={pricingTopSectionTextFontSize}
                        onChangeFontSize={(value) => setAttributes({ pricingTopSectionTextFontSize: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={pricingTopSectionTextFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ pricingTopSectionTextFontSizeUnits: value })}

                        fontWeight={pricingTopSectionTextFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ pricingTopSectionTextFontWeight: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={pricingTopSectionTextFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ pricingTopSectionTextFontStyle: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={pricingTopSectionTextTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ pricingTopSectionTextTextTransform: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={pricingTopSectionTextTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ pricingTopSectionTextTextDecoration: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={pricingTopSectionTextLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ pricingTopSectionTextLetterSpacing: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={pricingTopSectionTextLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ pricingTopSectionTextLetterSpacingUnits: value })}

                        lineHeight={pricingTopSectionTextLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ pricingTopSectionTextLineHeight: value, pricingTopSectionTextGlobalTypoSwitcher: {...pricingTopSectionTextGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={pricingTopSectionTextLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ pricingTopSectionTextLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={getColumnsVal('pricingTopSectionTextColorSwitcher')}
                        setGlobalSwitcher={(value) => setColumnsVal('pricingTopSectionTextColorSwitcher', value)}
                    />

                    {getColumnsVal('pricingTopSectionTextColorSwitcher') === 'normal' && (
                        <FB_ColorControl
                            label={__("Color", "frontis-blocks")}
                            globalColor={getColumnsVal('pricingTopSectionTextColor')}
                            setGlobalColor={(value) => setColumnsVal('pricingTopSectionTextColor', value === undefined ? '' : value)}
                        />
                    )}

                    {getColumnsVal('pricingTopSectionTextColorSwitcher') === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={getColumnsVal('pricingTopSectionTextHoverColor')}
                            setGlobalColor={(value) => setColumnsVal('pricingTopSectionTextHoverColor', value === undefined ? '' : value)}
                        />
                    )}

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={getColumnsVal('pricingTopSectionBgColorSwitcher')}
                        setBgColorSwitcher={(value) => setColumnsVal('pricingTopSectionBgColorSwitcher', value)}
                        
                        normalBackgroundType={getColumnsVal('pricingTopSectionNormalBackgroundType')}
                        setNormalBackgroundType={(value) => setColumnsVal('pricingTopSectionNormalBackgroundType', value)}
                        normalClassicColor={getColumnsVal('pricingTopSectionNormalClassicColor')}
                        setNormalClassicColor={(value) => setColumnsVal('pricingTopSectionNormalClassicColor', value === undefined ? '' : value)}
                        normalGradientColor={getColumnsVal('pricingTopSectionNormalGradientColor')}
                        setNormalGradientColor={(value) => setColumnsVal('pricingTopSectionNormalGradientColor', value === undefined ? null : value)}
                        normalCustomGradientSwitcher={getColumnsVal('pricingTopSectionNormalCustomGradientSwitcher')}
                        setNormalCustomGradientSwitcher={(value) => setColumnsVal('pricingTopSectionNormalCustomGradientSwitcher', value)}
                        normalCustomGradientInputValue={getColumnsVal('pricingTopSectionNormalCustomGradientInputValue')}
                        setNormalCustomGradientInputValue={(value) => setColumnsVal('pricingTopSectionNormalCustomGradientInputValue', value)}
                        
                        hoverBackgroundType={getColumnsVal('pricingTopSectionHoverBackgroundType')}
                        setHoverBackgroundType={(value) => setColumnsVal('pricingTopSectionHoverBackgroundType', value)}
                        hoverClassicColor={getColumnsVal('pricingTopSectionHoverClassicColor')}
                        setHoverClassicColor={(value) => setColumnsVal('pricingTopSectionHoverClassicColor', value === undefined ? '' : value)}
                        hoverGradientColor={getColumnsVal('pricingTopSectionHoverGradientColor')} 
                        setHoverGradientColor={(value) => setColumnsVal('pricingTopSectionHoverGradientColor', value === undefined ? null : value)}
                        hoverCustomGradientSwitcher={getColumnsVal('pricingTopSectionHoverCustomGradientSwitcher')}
                        setHoverCustomGradientSwitcher={(value) => setColumnsVal('pricingTopSectionHoverCustomGradientSwitcher', value)}
                        hoverCustomGradientInputValue={getColumnsVal('pricingTopSectionHoverCustomGradientInputValue')}
                        setHoverCustomGradientInputValue={(value) => setColumnsVal('pricingTopSectionHoverCustomGradientInputValue', value)}

                        isBackgroundImage={false}

                    />
                    
                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleTopSectionPaddingUnitsHandler}
                        spacingUnits={pricingTopSectionPaddingUnits}
                        spacingDesktop={pricingTopSectionDesktopPadding} 
                        spacingTablet={pricingTopSectionTabletPadding}
                        spacingMobile={pricingTopSectionMobilePadding}
                        handleSpacingUnitHandler={handleTopSectionPaddingUnitChange}
                        spacingCombineBtn={pricingTopSectionPaddingLink}
                        spacingCombineBtnHandler={handleTopSectionPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={getColumnsVal('pricingTopSectionBorder')}
                        options={BORDER_STYLES}
                        onChange={(value) => setColumnsVal('pricingTopSectionBorder', value)}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={getColumnsVal('pricingTopSectionBorderColorSwitcher')}
                        setGlobalSwitcher={(value) => setColumnsVal('pricingTopSectionBorderColorSwitcher', value)}
                    />

                    {getColumnsVal('pricingTopSectionBorderColorSwitcher') === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={getColumnsVal('pricingTopSectionBorderColor')}
                            setGlobalColor={(value) => setColumnsVal('pricingTopSectionBorderColor', value === undefined ? '' : value)}
                        />
                    )}

                    {getColumnsVal('pricingTopSectionBorderColorSwitcher') === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={getColumnsVal('pricingTopSectionBorderHoverColor')}
                            setGlobalColor={(value) => setColumnsVal('pricingTopSectionBorderHoverColor', value === undefined ? '' : value)}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleTopSectionBorderUnitsHandler}
                        spacingUnits={pricingTopSectionBorderUnits}
                        spacingDesktop={pricingTopSectionBorderDesktop} 
                        spacingTablet={pricingTopSectionBorderTablet}
                        spacingMobile={pricingTopSectionBorderMobile}
                        handleSpacingUnitHandler={handleTopSectionBorderUnitChange}
                        spacingCombineBtn={pricingTopSectionBorderLink}
                        spacingCombineBtnHandler={handleTopSectionBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleTopSectionBorderRadiusUnitsHandler}
                        spacingUnits={pricingTopSectionBorderRadiusUnits}
                        spacingDesktop={pricingTopSectionBorderRadiusDesktop}
                        spacingTablet={pricingTopSectionBorderRadiusTablet}
                        spacingMobile={pricingTopSectionBorderRadiusMobile}
                        handleSpacingUnitHandler={handleTopSectionBorderRadiusUnitChange}
                        spacingCombineBtn={pricingTopSectionBorderRadiusLink}
                        spacingCombineBtnHandler={handleTopSectionBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
            )}

            {/** Start Pricing Grid */}
            
            <PanelBody title={__("Pricing Grid", "frontis-blocks")} initialOpen={false}>
                <FB_Range
                    min={0}
                    max={100}
                    label={__("Row Gap", "frontis-blocks")}
                    rangeValue={gridRowGap}
                    onChangeHandler={(value) =>
                        setAttributes({ gridRowGap: value })
                    }
                    rangeUnitHandler={(value) =>
                        setAttributes({ gridGapUnits: value })
                    }
                    deviceType={deviceType}
                    units={gridGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                
                <FB_Range
                    min={0}
                    max={100}
                    label={__("Column Gap", "frontis-blocks")}
                    rangeValue={gridColumnGap}
                    onChangeHandler={(value) =>
                        setAttributes({ gridColumnGap: value })
                    }
                    rangeUnitHandler={(value) =>
                        setAttributes({ gridGapUnits: value })
                    }
                    deviceType={deviceType}
                    units={gridGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePricingGridPaddingUnitsHandler}
                    spacingUnits={pricingGridPaddingUnits}
                    spacingDesktop={pricingGridDesktopPadding}
                    spacingTablet={pricingHeaderTabletPadding}
                    spacingMobile={pricingGridMobilePadding}
                    handleSpacingUnitHandler={handlePricingGridPaddingUnitChange}
                    spacingCombineBtn={pricingGridPaddingLink}
                    spacingCombineBtnHandler={handlePricingGridPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePricingGridMarginUnitsHandler}
                    spacingUnits={pricingGridMarginUnits}
                    spacingDesktop={pricingGridDesktopMargin}
                    spacingTablet={pricingGridTabletMargin}
                    spacingMobile={pricingGridMobileMargin}
                    handleSpacingUnitHandler={handlePricingGridMarginUnitChange}
                    spacingCombineBtn={pricingGridMarginLink}
                    spacingCombineBtnHandler={handlePricingGridMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={priceGridBackgroundColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ priceGridBackgroundColorSwitcher: value })}
                    
                    normalBackgroundType={priceGridNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ priceGridNormalBackgroundType: value })}
                    normalClassicColor={priceGridNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ priceGridNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={priceGridNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ priceGridNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={priceGridNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ priceGridNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={priceGridNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ priceGridNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={priceGridHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ priceGridHoverBackgroundType: value })}
                    hoverClassicColor={priceGridHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ priceGridHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={priceGridHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ priceGridHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={priceGridHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ priceGridHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={priceGridHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ priceGridHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}
                />
                
                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={pricingGridBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ pricingGridBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={pricingGridBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ pricingGridBorderColorSwitcher: value })}
                />

                {pricingGridBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={pricingGridBorderColor}
                        setGlobalColor={(value) => setAttributes({ pricingGridBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {pricingGridBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={pricingGridBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ pricingGridBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePricingGridBorderUnitsHandler}
                    spacingUnits={pricingGridBorderUnits}
                    spacingDesktop={pricingGridBorderDesktop}
                    spacingTablet={pricingGridBorderTablet}
                    spacingMobile={pricingGridBorderMobile}
                    handleSpacingUnitHandler={handlePricingGridBorderUnitChange}
                    spacingCombineBtn={pricingGridBorderLink}
                    spacingCombineBtnHandler={handlePricingGridBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePricingGridBorderRadiusUnitsHandler}
                    spacingUnits={pricingGridBorderRadiusUnits}
                    spacingDesktop={pricingGridBorderRadiusDesktop}
                    spacingTablet={pricingGridBorderRadiusTablet}
                    spacingMobile={pricingGridBorderRadiusMobile}
                    handleSpacingUnitHandler={handlePricingGridBorderRadiusUnitChange}
                    spacingCombineBtn={pricingGridBorderRadiusLink}
                    spacingCombineBtnHandler={handlePricingGridBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            {(pricingPresetStyle === 'default' || pricingPresetStyle === 'preset-2' || pricingPresetStyle === 'preset-3') &&  (
                <PanelBody title={__("Pricing Column", "frontis-blocks")} initialOpen={false}> 
                    {pricingGlobalStyleSwitcher === false && (
                        <FB_SwitcherControl
                            label={__("Select Column", "frontis-blocks")}
                            options={columnSwitcherOptions}
                            globalSwitcher={selectedColumn}
                            setGlobalSwitcher={(value) => setAttributes({ selectedColumn: value })}
                        />
                    )}
                    
                    <FB_BackgroundColorControl
                        label={__("Column BG", "frontis-blocks")}
                        bgColorSwitcher={getColumnsVal('priceColumnBackgroundColorSwitcher')}
                        setBgColorSwitcher={(value) => setColumnsVal('priceColumnBackgroundColorSwitcher', value )}
                        
                        normalBackgroundType={getColumnsVal('priceColumnNormalBackgroundType')}
                        setNormalBackgroundType={(value) => setColumnsVal('priceColumnNormalBackgroundType', value )}
                        normalClassicColor={getColumnsVal('priceColumnNormalClassicColor')}
                        setNormalClassicColor={(value) => setColumnsVal('priceColumnNormalClassicColor', value === undefined ? '' : value )}
                        normalGradientColor={getColumnsVal('priceColumnNormalGradientColor')}
                        setNormalGradientColor={(value) => setColumnsVal('priceColumnNormalGradientColor', value === undefined ? null : value )}
                        normalCustomGradientSwitcher={getColumnsVal('priceColumnNormalCustomGradientSwitcher')}
                        setNormalCustomGradientSwitcher={(value) => setColumnsVal('priceColumnNormalCustomGradientSwitcher', value )}
                        normalCustomGradientInputValue={getColumnsVal('priceColumnNormalCustomGradientInputValue')}
                        setNormalCustomGradientInputValue={(value) => setColumnsVal('priceColumnNormalCustomGradientInputValue', value )}
                        
                        hoverBackgroundType={getColumnsVal('priceColumnHoverBackgroundType')}
                        setHoverBackgroundType={(value) => setColumnsVal('priceColumnHoverBackgroundType', value )}
                        hoverClassicColor={getColumnsVal('priceColumnHoverClassicColor')}
                        setHoverClassicColor={(value) => setColumnsVal('priceColumnHoverClassicColor', value === undefined ? '' : value )}
                        hoverGradientColor={getColumnsVal('priceColumnHoverGradientColor')} 
                        setHoverGradientColor={(value) => setColumnsVal('priceColumnHoverGradientColor', value === undefined ? null : value )}
                        hoverCustomGradientSwitcher={getColumnsVal('priceColumnHoverCustomGradientSwitcher')}
                        setHoverCustomGradientSwitcher={(value) => setColumnsVal('priceColumnHoverCustomGradientSwitcher', value )}
                        hoverCustomGradientInputValue={getColumnsVal('priceColumnHoverCustomGradientInputValue')}
                        setHoverCustomGradientInputValue={(value) => setColumnsVal('priceColumnHoverCustomGradientInputValue', value )}

                        isBackgroundImage={false}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={getColumnsVal('priceColumnBorder')}
                        options={BORDER_STYLES}
                        onChange={(value) => setColumnsVal('priceColumnBorder', value )}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={getColumnsVal('priceColumnBorderColorSwitcher')}
                        setGlobalSwitcher={(value) => setColumnsVal('priceColumnBorderColorSwitcher', value )}
                    />

                    {getColumnsVal('priceColumnBorderColorSwitcher') === 'normal' && (
                        <FB_ColorControl
                            label={__("Nomal Color", "frontis-blocks")}
                            globalColor={getColumnsVal('priceColumnBorderColor')}
                            setGlobalColor={(value) => setColumnsVal('priceColumnBorderColor', value === undefined ? '' : value )}
                        />
                    )}

                    {getColumnsVal('priceColumnBorderColorSwitcher') === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={getColumnsVal('priceColumnBorderHoverColor')}
                            setGlobalColor={(value) => setColumnsVal('priceColumnBorderHoverColor', value === undefined ? '' : value )}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceColumnBorderUnitsHandler}
                        spacingUnits={getColumnsVal('priceColumnBorderUnits')}
                        spacingDesktop={getColumnsVal('priceColumnDesktopBorderWidth')}
                        spacingTablet={getColumnsVal('priceColumnTabletBorderWidth')}
                        spacingMobile={getColumnsVal('priceColumnMobileBorderWidth')}
                        handleSpacingUnitHandler={handlePriceColumnBorderUnitChange}
                        spacingCombineBtn={getColumnsVal('priceColumnBorderLink')}
                        spacingCombineBtnHandler={handlePriceColumnBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceColumnBorderRadiusUnitsHandler}
                        spacingUnits={getColumnsVal('priceColumnBorderRadiusUnits')}
                        spacingDesktop={getColumnsVal('priceColumnDesktopBorderRadiusWidth')}
                        spacingTablet={getColumnsVal('priceColumnTabBorderRadiusWidth')}
                        spacingMobile={getColumnsVal('priceColumnMobileBorderRadiusWidth')}
                        handleSpacingUnitHandler={handlePriceColumnBorderRadiusUnitChange}
                        spacingCombineBtn={getColumnsVal('priceColumnBorderRadiusLink')}
                        spacingCombineBtnHandler={handlePriceColumnBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                    
                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceColumnMarginUnitsHandler}
                        spacingUnits={priceColumnMarginUnits}
                        spacingDesktop={priceColumnDesktopMargin}
                        spacingTablet={priceColumnTabletMargin}
                        spacingMobile={priceColumnMobileMargin}
                        handleSpacingUnitHandler={handlePriceColumnMarginUnitChange}
                        spacingCombineBtn={priceColumnMarginLink}
                        spacingCombineBtnHandler={handlePriceColumnMarginCombineBtn}
                        setAttributes={setAttributes}
                    /> 
                    
                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceColumnPaddingUnitsHandler}
                        spacingUnits={priceColumnPaddingUnits}
                        spacingDesktop={priceColumnDesktopPadding} 
                        spacingTablet={priceColumnTabletPadding}
                        spacingMobile={priceColumnMobilePadding}
                        handleSpacingUnitHandler={handlePriceColumnPaddingUnitChange}
                        spacingCombineBtn={priceColumnPaddingLink}
                        spacingCombineBtnHandler={handlePriceColumnPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
            )}

            <PanelBody title={__("Header", "frontis-blocks")} initialOpen={false}>
                <BaseControl
                    label={__("Alignment", "frontis-blocks")}
                    id="fb-setting-text-alignment"
                    className="fb-setting-text-alignment"
                >
                        <ButtonGroup
                            className="fb-setting-text-alignment-group-btn"
                        >
                            {TEXT_ALIGN.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ headerAlignment: item.value })}
                                    className={`fb-setting-text-alignment-single-btn ${headerAlignment === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                </BaseControl>

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={pricingHeaderBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ pricingHeaderBgColorSwitcher: value })}
                />

                {pricingHeaderBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={pricingHeaderBgColor}
                        setGlobalColor={(value) => setAttributes({ pricingHeaderBgColor: value === undefined ? '' : value })}
                    />
                )}

                {pricingHeaderBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={pricingHeaderBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ pricingHeaderBgHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleHeaderPaddingUnitsHandler}
                    spacingUnits={pricingHeaderPaddingUnits}
                    spacingDesktop={pricingHeaderDesktopPadding}
                    spacingTablet={pricingHeaderTabletPadding}
                    spacingMobile={pricingHeaderMobilePadding}
                    handleSpacingUnitHandler={handleHeaderPaddingUnitChange}
                    spacingCombineBtn={pricingHeaderPaddingLink}
                    spacingCombineBtnHandler={handleHeaderPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={pricingHeaderBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ pricingHeaderBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={pricingHeaderBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ pricingHeaderBorderColorSwitcher: value })}
                />

                {pricingHeaderBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={pricingHeaderBorderColor}
                        setGlobalColor={(value) => setAttributes({ pricingHeaderBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {pricingHeaderBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={pricingHeaderBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ pricingHeaderBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleHeaderBorderUnitsHandler}
                    spacingUnits={pricingHeaderBorderUnits}
                    spacingDesktop={pricingHeaderBorderDesktop}
                    spacingTablet={pricingHeaderBorderTablet}
                    spacingMobile={pricingHeaderBorderMobile}
                    handleSpacingUnitHandler={handleHeaderBorderUnitChange}
                    spacingCombineBtn={pricingHeaderBorderLink}
                    spacingCombineBtnHandler={handleHeaderBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleHeaderBorderRadiusUnitsHandler}
                    spacingUnits={pricingHeaderBorderRadiusUnits}
                    spacingDesktop={pricingHeaderBorderRadiusDesktop}
                    spacingTablet={pricingHeaderBorderRadiusTablet}
                    spacingMobile={pricingHeaderBorderRadiusMobile}
                    handleSpacingUnitHandler={handleHeaderBorderRadiusUnitChange}
                    spacingCombineBtn={pricingHeaderBorderRadiusLink}
                    spacingCombineBtnHandler={handleHeaderBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={pricingTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ pricingTitleGlobalTypographyData: value })}

                    globalTypoType={pricingTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            pricingTitleGlobalTypoType: value, 
                            pricingTitleGlobalTypoSwitcher: value === 'default' ? {...pricingTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...pricingTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={pricingTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ pricingTitleGlobalTypoOption: value })}

                    fontFamily={pricingTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ pricingTitleFontFamily: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={pricingTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ pricingTitleFontSize: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={pricingTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ pricingTitleFontSizeUnits: value })}

                    fontWeight={pricingTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ pricingTitleFontWeight: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={pricingTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ pricingTitleFontStyle: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={pricingTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ pricingTitleTextTransform: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={pricingTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ pricingTitleTextDecoration: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={pricingTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ pricingTitleLetterSpacing: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={pricingTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ pricingTitleLetterSpacingUnits: value })}

                    lineHeight={pricingTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ pricingTitleLineHeight: value, pricingTitleGlobalTypoSwitcher: {...pricingTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={pricingTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ pricingTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                {pricingGlobalStyleSwitcher === false && (
                    <FB_SwitcherControl
                        label={__("Select Column", "frontis-blocks")}
                        options={columnSwitcherOptions}
                        globalSwitcher={selectedColumn}
                        setGlobalSwitcher={(value) => setAttributes({ selectedColumn: value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={getColumnsVal('pricingTitleColorSwitcher')}
                    setGlobalSwitcher={(value) => setColumnsVal('pricingTitleColorSwitcher', value)}
                />

                {getColumnsVal('pricingTitleColorSwitcher') === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={getColumnsVal('pricingTitleColor')}
                        setGlobalColor={(value) => setColumnsVal('pricingTitleColor', value === undefined ? '' : value)}
                    />
                )}

                {getColumnsVal('pricingTitleColorSwitcher') === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={getColumnsVal('pricingTitleHoverColor')}
                        setGlobalColor={(value) => setColumnsVal('pricingTitleHoverColor', value === undefined ? '' : value)}
                    />
                )}

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTitlePaddingUnitsHandler}
                    spacingUnits={pricingTitlePaddingUnits}
                    spacingDesktop={pricingTitleDesktopPadding}
                    spacingTablet={pricingTitleTabletPadding}
                    spacingMobile={pricingTitleMobilePadding}
                    handleSpacingUnitHandler={handleTitlePaddingUnitChange}
                    spacingCombineBtn={pricingTitlePaddingLink}
                    spacingCombineBtnHandler={handleTitlePaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTitleMarginUnitsHandler}
                    spacingUnits={pricingTitleMarginUnits}
                    spacingDesktop={pricingTitleDesktopMargin}
                    spacingTablet={pricingTitleTabletMargin}
                    spacingMobile={pricingTitleMobileMargin}
                    handleSpacingUnitHandler={handleTitleMarginUnitChange}
                    spacingCombineBtn={pricingTitleMarginLink}
                    spacingCombineBtnHandler={handleTitleMarginCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            {}

            {(pricingSubTitleSwitcher === true && pricingPresetStyle === 'preset-3') && (
                <PanelBody title={__("Sub Title", "frontis-blocks")} initialOpen={false}>   
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={pricingSubtitleGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ pricingSubtitleGlobalTypographyData: value })}

                        globalTypoType={pricingSubtitleGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                pricingSubtitleGlobalTypoType: value, 
                                pricingSubtitleGlobalTypoSwitcher: value === 'default' ? {...pricingSubtitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...pricingSubtitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={pricingSubtitleGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ pricingSubtitleGlobalTypoOption: value })}

                        fontFamily={pricingSubtitleFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ pricingSubtitleFontFamily: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={pricingSubtitleFontSize}
                        onChangeFontSize={(value) => setAttributes({ pricingSubtitleFontSize: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={pricingSubtitleFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ pricingSubtitleFontSizeUnits: value })}

                        fontWeight={pricingSubtitleFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ pricingSubtitleFontWeight: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={pricingSubtitleFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ pricingSubtitleFontStyle: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={pricingSubtitleTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ pricingSubtitleTextTransform: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={pricingSubtitleTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ pricingSubtitleTextDecoration: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={pricingSubtitleLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ pricingSubtitleLetterSpacing: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={pricingSubtitleLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ pricingSubtitleLetterSpacingUnits: value })}

                        lineHeight={pricingSubtitleLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ pricingSubtitleLineHeight: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={pricingSubtitleLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ pricingSubtitleLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={pricingSubtitleColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ pricingSubtitleColorSwitcher: value })}
                    />

                    {pricingSubtitleColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Nomal Color", "frontis-blocks")}
                            globalColor={pricingSubtitleColor}
                            setGlobalColor={(value) => setAttributes({ pricingSubtitleColor: value === undefined ? '' : value })}
                        />
                    )}

                    {pricingSubtitleColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={pricingSubtitleHoverColor}
                            setGlobalColor={(value) => setAttributes({ pricingSubtitleHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSubtitleMarginUnitsHandler}
                        spacingUnits={pricingSubtitleMarginUnits}
                        spacingDesktop={pricingSubtitleDesktopMargin}
                        spacingTablet={pricingSubtitleTabletMargin}
                        spacingMobile={pricingSubtitleMobileMargin}
                        handleSpacingUnitHandler={handleSubTitleMarginUnitChange}
                        spacingCombineBtn={pricingSubtitleMarginLink}
                        spacingCombineBtnHandler={handleSubtitleMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>

            )}
            

            <PanelBody title={__("Price", "frontis-blocks")} initialOpen={false}>
                <FB_AlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={pricingAlignment}
                    setGlobalAlignment={(value) => setAttributes({ pricingAlignment: value })}
                />

                <FB_TypographyControl
                    label={__("Normal Price Typography", "frontis-blocks")}
                    globalTypoControlActive={true}
                    globalTypoSwitcher={normalPricingGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ normalPricingGlobalTypographyData: value })}

                    globalTypoType={normalPricingGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            normalPricingGlobalTypoType: value, 
                            normalPricingGlobalTypoSwitcher: value === 'default' ? {...normalPricingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...normalPricingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={normalPricingGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ normalPricingGlobalTypoOption: value })}

                    fontFamily={normalPricingFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ normalPricingFontFamily: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={normalPricingFontSize}
                    onChangeFontSize={(value) => setAttributes({ normalPricingFontSize: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={normalPricingFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ normalPricingFontSizeUnits: value })}

                    fontWeight={normalPricingFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ normalPricingFontWeight: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={normalPricingFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ normalPricingFontStyle: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={normalPricingTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ normalPricingTextTransform: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={normalPricingTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ normalPricingTextDecoration: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={normalPricingLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ normalPricingLetterSpacing: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={normalPricingLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ normalPricingLetterSpacingUnits: value })}

                    lineHeight={normalPricingLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ normalPricingLineHeight: value, normalPricingGlobalTypoSwitcher: {...normalPricingGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={normalPricingLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ normalPricingLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Price Color", "frontis-blocks")}
                    globalSwitcher={normalPricingColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ normalPricingColorSwitcher: value })}
                />

                {normalPricingColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={normalPricingColor}
                        setGlobalColor={(value) => setAttributes({ normalPricingColor: value === undefined ? '' : value })}
                    />
                )}

                {normalPricingColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={normalPricingHoverColor}
                        setGlobalColor={(value) => setAttributes({ normalPricingHoverColor: value === undefined ? '' : value })}
                    />
                )}

            </PanelBody>

            <PanelBody title={__("Currency", "frontis-blocks")} initialOpen={false}> 
                <FB_TypographyControl
                    label={__("Currency Typography", "frontis-blocks")}
                    globalTypoControlActive={true}
                    globalTypoSwitcher={priceCurrencyGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ priceCurrencyGlobalTypographyData: value })}

                    globalTypoType={priceCurrencyGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            priceCurrencyGlobalTypoType: value, 
                            priceCurrencyGlobalTypoSwitcher: value === 'default' ? {...priceCurrencyGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...priceCurrencyGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={priceCurrencyGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ priceCurrencyGlobalTypoOption: value })}

                    fontFamily={priceCurrencyFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ priceCurrencyFontFamily: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={priceCurrencyFontSize}
                    onChangeFontSize={(value) => setAttributes({ priceCurrencyFontSize: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={priceCurrencyFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ priceCurrencyFontSizeUnits: value })}

                    fontWeight={priceCurrencyFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ priceCurrencyFontWeight: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={priceCurrencyFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ priceCurrencyFontStyle: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={priceCurrencyTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ priceCurrencyTextTransform: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={priceCurrencyTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ priceCurrencyTextDecoration: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={priceCurrencyLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ priceCurrencyLetterSpacing: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={priceCurrencyLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ priceCurrencyLetterSpacingUnits: value })}

                    lineHeight={priceCurrencyLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ priceCurrencyLineHeight: value, priceCurrencyGlobalTypoSwitcher: {...priceCurrencyGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={priceCurrencyLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ priceCurrencyLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Currency Color", "frontis-blocks")}
                    globalSwitcher={priceCurrencyColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ priceCurrencyColorSwitcher: value })}
                />

                {priceCurrencyColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={priceCurrencyColor}
                        setGlobalColor={(value) => setAttributes({ priceCurrencyColor: value === undefined ? '' : value })}
                    />
                )}

                {priceCurrencyColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={priceCurrencyHoverColor}
                        setGlobalColor={(value) => setAttributes({ priceCurrencyHoverColor: value === undefined ? '' : value })}
                    />
                )}
            </PanelBody>

            <PanelBody title={__("Price Period", "frontis-blocks")} initialOpen={false}> 
                <FB_TypographyControl
                    label={__("Period Typography", "frontis-blocks")}
                    globalTypoControlActive={true}
                    globalTypoSwitcher={pricePeriodGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ pricePeriodGlobalTypographyData: value })}

                    globalTypoType={pricePeriodGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            pricePeriodGlobalTypoType: value, 
                            pricePeriodGlobalTypoSwitcher: value === 'default' ? {...pricePeriodGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...pricePeriodGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={pricePeriodGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ pricePeriodGlobalTypoOption: value })}

                    fontFamily={pricePeriodFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ pricePeriodFontFamily: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={pricePeriodFontSize}
                    onChangeFontSize={(value) => setAttributes({ pricePeriodFontSize: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={pricePeriodFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ pricePeriodFontSizeUnits: value })}

                    fontWeight={pricePeriodFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ pricePeriodFontWeight: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={pricePeriodFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ pricePeriodFontStyle: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={pricePeriodTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ pricePeriodTextTransform: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={pricePeriodTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ pricePeriodTextDecoration: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={pricePeriodLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ pricePeriodLetterSpacing: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={pricePeriodLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ pricePeriodLetterSpacingUnits: value })}

                    lineHeight={pricePeriodLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ pricePeriodLineHeight: value, pricePeriodGlobalTypoSwitcher: {...pricePeriodGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={pricePeriodLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ pricePeriodLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Period Color", "frontis-blocks")}
                    globalSwitcher={pricePeriodColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ pricePeriodColorSwitcher: value })}
                />

                {pricePeriodColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={pricePeriodColor}
                        setGlobalColor={(value) => setAttributes({ pricePeriodColor: value === undefined ? '' : value })}
                    />
                )}

                {pricePeriodColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={pricePeriodHoverColor}
                        setGlobalColor={(value) => setAttributes({ pricePeriodHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handlePricePaddingUnitsHandler}
                    spacingUnits={pricePaddingUnits}
                    spacingDesktop={priceDesktopPadding}
                    spacingTablet={priceTabletPadding}
                    spacingMobile={priceMobilePadding}
                    handleSpacingUnitHandler={handlePricePaddingUnitChange}
                    spacingCombineBtn={pricePaddingLink}
                    spacingCombineBtnHandler={handlePricePaddingCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__("Sale Price", "frontis-blocks")} initialOpen={false}>
                <FB_TypographyControl
                    label={__("Sale Price Typography", "frontis-blocks")}
                    globalTypoControlActive={true}
                    globalTypoSwitcher={salePricingGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ salePricingGlobalTypographyData: value })}

                    globalTypoType={salePricingGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            salePricingGlobalTypoType: value, 
                            salePricingGlobalTypoSwitcher: value === 'default' ? {...salePricingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...salePricingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={salePricingGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ salePricingGlobalTypoOption: value })}

                    fontFamily={salePricingFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ salePricingFontFamily: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={salePricingFontSize}
                    onChangeFontSize={(value) => setAttributes({ salePricingFontSize: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={salePricingFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ salePricingFontSizeUnits: value })}

                    fontWeight={salePricingFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ salePricingFontWeight: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={salePricingFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ salePricingFontStyle: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={salePricingTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ salePricingTextTransform: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={salePricingTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ salePricingTextDecoration: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={salePricingLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ salePricingLetterSpacing: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={salePricingLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ salePricingLetterSpacingUnits: value })}

                    lineHeight={salePricingLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ salePricingLineHeight: value, salePricingGlobalTypoSwitcher: {...salePricingGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={salePricingLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ salePricingLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Sale Price Color", "frontis-blocks")}
                    globalSwitcher={salePricingColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ salePricingColorSwitcher: value })}
                />

                {salePricingColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={salePricingColor} 
                        setGlobalColor={(value) => setAttributes({ salePricingColor: value === undefined ? '' : value })}
                    />
                )}

                {salePricingColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={salePricingHoverColor}
                        setGlobalColor={(value) => setAttributes({ salePricingHoverColor: value === undefined ? '' : value })}
                    />
                )}
            </PanelBody>

            <PanelBody title={__("Pricing Plan Active", "frontis-blocks")} initialOpen={false}>
                <BaseControl
                    label={__("Alignment", "frontis-blocks")}
                    id="fb-setting-text-alignment"
                    className="fb-setting-text-alignment"
                >
                        <ButtonGroup
                            className="fb-setting-text-alignment-group-btn"
                        >
                            {TEXT_ALIGN.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ activationContentAlignment: item.value })}
                                    className={`fb-setting-text-alignment-single-btn ${activationContentAlignment === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                </BaseControl>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={priceAfterTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ priceAfterTextGlobalTypographyData: value })}

                    globalTypoType={priceAfterTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            priceAfterTextGlobalTypoType: value, 
                            priceAfterTextGlobalTypoSwitcher: value === 'default' ? {...priceAfterTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...priceAfterTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={priceAfterTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ priceAfterTextGlobalTypoOption: value })}

                    fontFamily={priceAfterTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ priceAfterTextFontFamily: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={priceAfterTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ priceAfterTextFontSize: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={priceAfterTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ priceAfterTextFontSizeUnits: value })}

                    fontWeight={priceAfterTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ priceAfterTextFontWeight: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={priceAfterTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ priceAfterTextFontStyle: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={priceAfterTextTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ priceAfterTextTextTransform: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={priceAfterTextTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ priceAfterTextTextDecoration: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={priceAfterTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ priceAfterTextLetterSpacing: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={priceAfterTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ priceAfterTextLetterSpacingUnits: value })}

                    lineHeight={priceAfterTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ priceAfterTextLineHeight: value, priceAfterTextGlobalTypoSwitcher: {...priceAfterTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={priceAfterTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ priceAfterTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Text Color", "frontis-blocks")}
                    globalSwitcher={priceAfterTextColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ priceAfterTextColorSwitcher: value })}
                />

                {priceAfterTextColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={priceAfterTextColor}
                        setGlobalColor={(value) => setAttributes({ priceAfterTextColor: value === undefined ? '' : value })}
                    />
                )}

                {priceAfterTextColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={priceAfterTextHoverColor}
                        setGlobalColor={(value) => setAttributes({ priceAfterTextHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_BackgroundColorControl
                    label={__("BackgroundColor", "frontis-blocks")}
                    bgColorSwitcher={priceAfterTextBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ priceAfterTextBgColorSwitcher: value })}
                    
                    normalBackgroundType={priceAfterTextNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ priceAfterTextNormalBackgroundType: value })}
                    normalClassicColor={priceAfterTextNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ priceAfterTextNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={priceAfterTextNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ priceAfterTextNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={priceAfterTextNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ priceAfterTextNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={priceAfterTextNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ priceAfterTextNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={priceAfterTextHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ priceAfterTextHoverBackgroundType: value })}
                    hoverClassicColor={priceAfterTextHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ priceAfterTextHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={priceAfterTextHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ priceAfterTextHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={priceAfterTextHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ priceAfterTextHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={priceAfterTextHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ priceAfterTextHoverCustomGradientInputValue: value })}
                    isBackgroundImage={false}

                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleAfterTextPaddingUnitsHandler}
                    spacingUnits={priceAfterTextPaddingUnits}
                    spacingDesktop={priceAfterTextPaddingDesktop} 
                    spacingTablet={priceAfterTextPaddingTablet} 
                    spacingMobile={priceAfterTextPaddingMobile}
                    handleSpacingUnitHandler={handleAfterTextPaddingUnitChange}
                    spacingCombineBtn={priceAfterTextPaddingLink}
                    spacingCombineBtnHandler={handleAfterTextPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Border", "frontis-blocks")}
                    value={priceAfterTextBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ priceAfterTextBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={priceAfterTextBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ priceAfterTextBorderColorSwitcher: value })}
                />

                {priceAfterTextBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={priceAfterTextBorderColor}
                        setGlobalColor={(value) => setAttributes({ priceAfterTextBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {priceAfterTextBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={priceAfterTextBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ priceAfterTextBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleAfterTextBorderUnitsHandler}
                    spacingUnits={priceAfterTextBorderUnits}
                    spacingDesktop={priceAfterTextBorderDesktop}
                    spacingTablet={priceAfterTextBorderTablet}
                    spacingMobile={priceAfterTextBorderMobile}
                    handleSpacingUnitHandler={handleAfterTextBorderUnitChange}
                    spacingCombineBtn={priceAfterTextBorderLink}
                    spacingCombineBtnHandler={handleAfterTextBorderCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleAfterTextBorderRadiusUnitsHandler}
                    spacingUnits={priceAfterTextBorderRadiusUnits}
                    spacingDesktop={priceAfterTextBorderRadiusDesktop}
                    spacingTablet={priceAfterTextBorderRadiusTablet}
                    spacingMobile={priceAfterTextBorderRadiusMobile}
                    handleSpacingUnitHandler={handleAfterTextBorderRadiusUnitChange}
                    spacingCombineBtn={priceAfterTextBorderRadiusLink}
                    spacingCombineBtnHandler={handleAfterTextBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
                
            </PanelBody>	

            <PanelBody title={__("Feature", "frontis-blocks")} initialOpen={false}>

                <FB_AlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={priceFeatureAlignment}
                    setGlobalAlignment={(value) => setAttributes({ priceFeatureAlignment: value })}
                />

                <FB_Range
                    min={0}
                    max={FeatureListGapUnits === '%' ? 100 : 200}
                    label={__("List Gap", "frontis-blocks")}
                    rangeValue={FeatureListGap}
                    onChangeHandler={(value) => setAttributes({ FeatureListGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ FeatureListGapUnits: value })}
                    deviceType={deviceType}
                    units={FeatureListGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                {priceFeatureIconSwitcher === true && (
                    <>  
                        <FB_SwitcherControl
                            label={__("Feature Icon Color", "frontis-blocks")}
                            globalSwitcher={priceFeatureIconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ priceFeatureIconColorSwitcher: value })}
                        />

                        {priceFeatureIconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Nomal Color", "frontis-blocks")}
                                globalColor={priceFeatureIconColor}
                                setGlobalColor={(value) => setAttributes({ priceFeatureIconColor: value === undefined ? '' : value })}
                            />
                        )}

                        {priceFeatureIconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={priceFeatureIconHoverColor}
                                setGlobalColor={(value) => setAttributes({ priceFeatureIconHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Range
                            min={0}
                            max={200}
                            label={__("Feature Icon Size", "frontis-blocks")}
                            rangeValue={priceFeatureIconSize}
                            onChangeHandler={(value) => setAttributes({ priceFeatureIconSize: value })}
                            rangeUnitHandler={(value) => setAttributes({ priceFeatureIconSizeUnits: value })}
                            deviceType={deviceType}
                            units={priceFeatureIconSizeUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />
                    </>
                    
                )}

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={pricingfeatureTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ pricingfeatureTitleGlobalTypographyData: value })}

                    globalTypoType={pricingfeatureTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            pricingfeatureTitleGlobalTypoType: value, 
                            pricingfeatureTitleGlobalTypoSwitcher: value === 'default' ? {...pricingfeatureTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...pricingfeatureTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={pricingfeatureTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ pricingfeatureTitleGlobalTypoOption: value })}

                    fontFamily={pricingfeatureTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ pricingfeatureTitleFontFamily: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={pricingfeatureTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ pricingfeatureTitleFontSize: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={pricingfeatureTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ pricingfeatureTitleFontSizeUnits: value })}

                    fontWeight={pricingfeatureTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ pricingfeatureTitleFontWeight: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={pricingfeatureTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ pricingfeatureTitleFontStyle: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={pricingfeatureTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ pricingfeatureTitleTextTransform: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={pricingfeatureTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ pricingfeatureTitleTextDecoration: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={pricingfeatureTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ pricingfeatureTitleLetterSpacing: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={pricingfeatureTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ pricingfeatureTitleLetterSpacingUnits: value })}

                    lineHeight={pricingfeatureTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ pricingfeatureTitleLineHeight: value, pricingfeatureTitleGlobalTypoSwitcher: {...pricingfeatureTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={pricingfeatureTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ pricingfeatureTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Item Text Color", "frontis-blocks")}
                    globalSwitcher={pricingfeatureTitleColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ pricingfeatureTitleColorSwitcher: value })}
                />

                {pricingfeatureTitleColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={pricingfeatureTitleColor}
                        setGlobalColor={(value) => setAttributes({ pricingfeatureTitleColor: value === undefined ? '' : value })}
                    />
                )}

                {pricingfeatureTitleColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={pricingfeatureTitleHoverColor}
                        setGlobalColor={(value) => setAttributes({ pricingfeatureTitleHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Item Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureItemPaddingUnitsHandler}
                    spacingUnits={priceFeatureItemPaddingUnits}
                    spacingDesktop={priceFeatureItemDesktopPadding}
                    spacingTablet={priceFeatureItemTabPadding}
                    spacingMobile={priceFeatureItemMobilePadding}
                    handleSpacingUnitHandler={handleFeatureItemPaddingUnitChange}
                    spacingCombineBtn={priceFeatureItemPaddingLink}
                    spacingCombineBtnHandler={handleFeatureItemPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Item Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureItemMarginUnitsHandler}
                    spacingUnits={priceFeatureItemMarginUnits}
                    spacingDesktop={priceFeatureItemDesktopMargin}
                    spacingTablet={priceFeatureItemTabMargin}
                    spacingMobile={priceFeatureItemMobileMargin}
                    handleSpacingUnitHandler={handleFeatureItemMarginUnitChange}
                    spacingCombineBtn={priceFeatureItemMarginLink}
                    spacingCombineBtnHandler={handleFeatureItemMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                    label={__("Item Border Style", "frontis-blocks")}
                    value={priceFeatureItemBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ priceFeatureItemBorder: value })}
                />
                <ToggleControl
                    label={__("Hide Last Item Border", "frontis-blocks")}
                    checked={priceFeatureItemBorderBottom}
                    onChange={(value) => setAttributes({priceFeatureItemBorderBottom: value})}
                />

                <FB_SwitcherControl
                    label={__("Item Border Color", "frontis-blocks")}
                    globalSwitcher={priceFeatureItemBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ priceFeatureItemBorderColorSwitcher: value })}
                />

                {priceFeatureItemBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Nomal Color", "frontis-blocks")}
                        globalColor={priceFeatureItemBorderColor}
                        setGlobalColor={(value) => setAttributes({ priceFeatureItemBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {priceFeatureItemBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={priceFeatureItemBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ priceFeatureItemBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Item Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureItemBorderUnitsHandler}
                    spacingUnits={priceFeatureItemBorderUnits}
                    spacingDesktop={priceFeatureItemDesktopBorder}  
                    spacingTablet={priceFeatureItemTabBorder}
                    spacingMobile={priceFeatureItemMobileBorder}
                    handleSpacingUnitHandler={handleFeatureItemBorderUnitChange}
                    spacingCombineBtn={priceFeatureItemBorderLink}
                    spacingCombineBtnHandler={handleFeatureItemBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Item Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureItemBorderRadiusUnitsHandler}
                    spacingUnits={priceFeatureItemBorderRadiusUnits}
                    spacingDesktop={priceFeatureItemDesktopBorderRadius}
                    spacingTablet={priceFeatureItemTabBorderRadius}
                    spacingMobile={priceFeatureItemMobileBorderRadius}
                    handleSpacingUnitHandler={handleFeatureItemBorderRadiusUnitChange}
                    spacingCombineBtn={priceFeatureItemBorderRadiusLink}
                    spacingCombineBtnHandler={handleFeatureItemBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Range
                    min={0}
                    max={1}
                    label={__("Opacity", "frontis-blocks")}
                    help={__("For Disabled Item", "frontis-blocks")}
                    rangeValue={priceFeatureDisabledOpacity}
                    onChangeHandler={(value) => setAttributes({ priceFeatureDisabledOpacity: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    isRangeUnit={false}
                    rangeStep={0.1}
                    resetFallbackValue={"0.5"}
                />

                <FB_BackgroundColorControl
                    label={__("Feature Area BG", "frontis-blocks")}
                    bgColorSwitcher={priceFeatureAreaBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ priceFeatureAreaBgColorSwitcher: value })}
                    
                    normalBackgroundType={priceFeatureAreaNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ priceFeatureAreaNormalBackgroundType: value })}
                    normalClassicColor={priceFeatureAreaNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ priceFeatureAreaNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={priceFeatureAreaNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ priceFeatureAreaNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={priceFeatureAreaNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ priceFeatureAreaNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={priceFeatureAreaNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ priceFeatureAreaNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={priceFeatureAreaHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ priceFeatureAreaHoverBackgroundType: value })}
                    hoverClassicColor={priceFeatureAreaHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ priceFeatureAreaHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={priceFeatureAreaHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ priceFeatureAreaHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={priceFeatureAreaHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ priceFeatureAreaHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={priceFeatureAreaHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ priceFeatureAreaHoverCustomGradientInputValue: value })}
                    isBackgroundImage={false}
                />

                <FB_Spacing 
                    label={__("Feature Area Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeatureMarginUnitsHandler}
                    spacingUnits={priceFeatureMarginUnits}
                    spacingDesktop={priceFeatureDesktopMargin}
                    spacingTablet={priceFeatureTabMargin}
                    spacingMobile={priceFeatureMobileMargin}
                    handleSpacingUnitHandler={handleFeatureMarginUnitChange}
                    spacingCombineBtn={priceFeatureMarginLink}
                    spacingCombineBtnHandler={handleFeatureMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Feature Area Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleFeaturePaddingUnitsHandler}
                    spacingUnits={priceFeaturePaddingUnits}
                    spacingDesktop={priceFeatureDesktopPadding}
                    spacingTablet={priceFeatureTabPadding}
                    spacingMobile={priceFeatureMobilePadding}
                    handleSpacingUnitHandler={handleFeaturePaddingUnitChange}
                    spacingCombineBtn={priceFeaturePaddingLink}
                    spacingCombineBtnHandler={handleFeaturePaddingCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            {(priceFeatureAfterTextSwitcher === true && pricingPresetStyle === 'preset-3') && (
                <PanelBody title={__("Feature After Text", "frontis-blocks")} initialOpen={false}>   
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={priceFeatureAfterTextGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ priceFeatureAfterTextGlobalTypographyData: value })}

                        globalTypoType={priceFeatureAfterTextGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                priceFeatureAfterTextGlobalTypoType: value, 
                                priceFeatureAfterTextGlobalTypoSwitcher: value === 'default' ? {...priceFeatureAfterTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...priceFeatureAfterTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={priceFeatureAfterTextGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ priceFeatureAfterTextGlobalTypoOption: value })}

                        fontFamily={priceFeatureAfterTextFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ priceFeatureAfterTextFontFamily: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={priceFeatureAfterTextFontSize}
                        onChangeFontSize={(value) => setAttributes({ priceFeatureAfterTextFontSize: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={priceFeatureAfterTextFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ priceFeatureAfterTextFontSizeUnits: value })}

                        fontWeight={priceFeatureAfterTextFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ priceFeatureAfterTextFontWeight: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={priceFeatureAfterTextFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ priceFeatureAfterTextFontStyle: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={priceFeatureAfterTextTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ priceFeatureAfterTextTextTransform: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={priceFeatureAfterTextTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ priceFeatureAfterTextTextDecoration: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={priceFeatureAfterTextLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ priceFeatureAfterTextLetterSpacing: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={priceFeatureAfterTextLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ priceFeatureAfterTextLetterSpacingUnits: value })}

                        lineHeight={priceFeatureAfterTextLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ priceFeatureAfterTextLineHeight: value, priceFeatureAfterTextGlobalTypoSwitcher: {...priceFeatureAfterTextGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={priceFeatureAfterTextLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ priceFeatureAfterTextLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={priceFeatureAfterTextColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ priceFeatureAfterTextColorSwitcher: value })}
                    />

                    {priceFeatureAfterTextColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Nomal Color", "frontis-blocks")}
                            globalColor={priceFeatureAfterTextColor}
                            setGlobalColor={(value) => setAttributes({ priceFeatureAfterTextColor: value === undefined ? '' : value })}
                        />
                    )}

                    {priceFeatureAfterTextColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={priceFeatureAfterTextHoverColor}
                            setGlobalColor={(value) => setAttributes({ priceFeatureAfterTextHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleFeatureAfterTextMarginUnitsHandler}
                        spacingUnits={priceFeatureAfterTextMarginUnits}
                        spacingDesktop={priceFeatureAfterTextDesktopMargin}
                        spacingTablet={priceFeatureAfterTextTabletMargin}
                        spacingMobile={priceFeatureAfterTextMobileMargin}
                        handleSpacingUnitHandler={handleFeatureAfterTextMarginUnitChange}
                        spacingCombineBtn={priceFeatureAfterTextMarginLink}
                        spacingCombineBtnHandler={handleFeatureAfterTextMarginCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>  
            )}

            {(pricingSubTitleSwitcher === true && pricingPresetStyle === 'preset-3') && (
                <PanelBody title={__("Sub Title", "frontis-blocks")} initialOpen={false}>   
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={pricingSubtitleGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ pricingSubtitleGlobalTypographyData: value })}

                        globalTypoType={pricingSubtitleGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                pricingSubtitleGlobalTypoType: value, 
                                pricingSubtitleGlobalTypoSwitcher: value === 'default' ? {...pricingSubtitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...pricingSubtitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={pricingSubtitleGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ pricingSubtitleGlobalTypoOption: value })}

                        fontFamily={pricingSubtitleFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ pricingSubtitleFontFamily: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={pricingSubtitleFontSize}
                        onChangeFontSize={(value) => setAttributes({ pricingSubtitleFontSize: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={pricingSubtitleFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ pricingSubtitleFontSizeUnits: value })}

                        fontWeight={pricingSubtitleFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ pricingSubtitleFontWeight: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={pricingSubtitleFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ pricingSubtitleFontStyle: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={pricingSubtitleTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ pricingSubtitleTextTransform: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={pricingSubtitleTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ pricingSubtitleTextDecoration: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={pricingSubtitleLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ pricingSubtitleLetterSpacing: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={pricingSubtitleLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ pricingSubtitleLetterSpacingUnits: value })}

                        lineHeight={pricingSubtitleLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ pricingSubtitleLineHeight: value, pricingSubtitleGlobalTypoSwitcher: {...pricingSubtitleGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={pricingSubtitleLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ pricingSubtitleLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={pricingSubtitleColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ pricingSubtitleColorSwitcher: value })}
                    />

                    {pricingSubtitleColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Nomal Color", "frontis-blocks")}
                            globalColor={pricingSubtitleColor}
                            setGlobalColor={(value) => setAttributes({ pricingSubtitleColor: value === undefined ? '' : value })}
                        />
                    )}

                    {pricingSubtitleColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={pricingSubtitleHoverColor}
                            setGlobalColor={(value) => setAttributes({ pricingSubtitleHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleSubtitleMarginUnitsHandler}
                        spacingUnits={pricingSubtitleMarginUnits}
                        spacingDesktop={pricingSubtitleDesktopMargin}
                        spacingTablet={pricingSubtitleTabletMargin}
                        spacingMobile={pricingSubtitleMobileMargin}
                        handleSpacingUnitHandler={handleSubTitleMarginUnitChange}
                        spacingCombineBtn={pricingSubtitleMarginLink}
                        spacingCombineBtnHandler={handleSubtitleMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>

            )}

            {pricingPresetStyle === 'preset-1' && priceFeatureTitleSwitcher && (
                <PanelBody title={__("Feature Title", "frontis-blocks")} initialOpen={false}>    
                    <FB_AlignmentControl
                        label={__("Alignment", "frontis-blocks")}
                        globalAlignment={featureTitleAlignment}
                        setGlobalAlignment={(value) => setAttributes({ featureTitleAlignment: value })}
                    />

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={featureTitleGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ featureTitleGlobalTypographyData: value })}

                        globalTypoType={featureTitleGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                featureTitleGlobalTypoType: value, 
                                featureTitleGlobalTypoSwitcher: value === 'default' ? {...featureTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...featureTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={featureTitleGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ featureTitleGlobalTypoOption: value })}

                        fontFamily={featureTitleFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ featureTitleFontFamily: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={featureTitleFontSize}
                        onChangeFontSize={(value) => setAttributes({ featureTitleFontSize: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={featureTitleFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ featureTitleFontSizeUnits: value })}

                        fontWeight={featureTitleFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ featureTitleFontWeight: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={featureTitleFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ featureTitleFontStyle: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={featureTitleTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ featureTitleTextTransform: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={featureTitleTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ featureTitleTextDecoration: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={featureTitleLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ featureTitleLetterSpacing: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={featureTitleLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ featureTitleLetterSpacingUnits: value })}

                        lineHeight={featureTitleLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ featureTitleLineHeight: value, featureTitleGlobalTypoSwitcher: {...featureTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={featureTitleLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ featureTitleLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Item Text Color", "frontis-blocks")}
                        globalSwitcher={featureTitleColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ featureTitleColorSwitcher: value })}
                    />

                    {featureTitleColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Nomal Color", "frontis-blocks")}
                            globalColor={featureTitleColor}
                            setGlobalColor={(value) => setAttributes({ featureTitleColor: value === undefined ? '' : value })}
                        />
                    )}

                    {featureTitleColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={featureTitleHoverColor}
                            setGlobalColor={(value) => setAttributes({ featureTitleHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                </PanelBody>
            )}

            {priceButtonSwitcher && (
                <PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>

                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Button Width", "frontis-blocks")}
                        rangeValue={priceButtonWidth}
                        onChangeHandler={(value) => setAttributes({ priceButtonWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ priceButtonWidthUnits: value })}
                        deviceType={deviceType}
                        units={priceButtonWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={priceButtonGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ priceButtonGlobalTypographyData: value })}

                        globalTypoType={priceButtonGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({ 
                                priceButtonGlobalTypoType: value, 
                                priceButtonGlobalTypoSwitcher: value === 'default' ? {...priceButtonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...priceButtonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={priceButtonGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ priceButtonGlobalTypoOption: value })}

                        fontFamily={priceButtonFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ priceButtonFontFamily: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={priceButtonFontSize}
                        onChangeFontSize={(value) => setAttributes({ priceButtonFontSize: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={priceButtonFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ priceButtonFontSizeUnits: value })}

                        fontWeight={priceButtonFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ priceButtonFontWeight: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={priceButtonFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ priceButtonFontStyle: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={priceButtonTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ priceButtonTextTransform: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={priceButtonTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ priceButtonTextDecoration: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={priceButtonLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ priceButtonLetterSpacing: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={priceButtonLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ priceButtonLetterSpacingUnits: value })}

                        lineHeight={priceButtonLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ priceButtonLineHeight: value, priceButtonGlobalTypoSwitcher: {...priceButtonGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={priceButtonLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ priceButtonLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    {pricingGlobalStyleSwitcher === false && (
                        <FB_SwitcherControl
                            label={__("Select Column", "frontis-blocks")}
                            options={columnSwitcherOptions}
                            globalSwitcher={selectedColumn}
                            setGlobalSwitcher={(value) => setAttributes({ selectedColumn: value })}
                        />
                    )}
                    <FB_SwitcherControl
                        label={__("Text Color", "frontis-blocks")}
                        globalSwitcher={getColumnsVal('priceButtonColorSwitcher')}
                        setGlobalSwitcher={(value) => setColumnsVal('priceButtonColorSwitcher', value)}
                    />

                    {getColumnsVal('priceButtonColorSwitcher') === 'normal' && (
                        <FB_ColorControl
                            label={__("Nomal Color", "frontis-blocks")}
                            globalColor={getColumnsVal('priceButtonColor')}
                            setGlobalColor={(value) => setColumnsVal('priceButtonColor', value === undefined ? '' : value)}
                        />
                    )}

                    {getColumnsVal('priceButtonColorSwitcher') === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={getColumnsVal('priceButtonHoverColor')}
                            setGlobalColor={(value) => setColumnsVal('priceButtonHoverColor', value === undefined ? '' : value)}
                        />
                    )}

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={getColumnsVal('priceButtonBackgroundColorSwitcher')}
                        setBgColorSwitcher={(value) => setColumnsVal('priceButtonBackgroundColorSwitcher', value)}
                        
                        normalBackgroundType={getColumnsVal('priceButtonNormalBackgroundType')}
                        setNormalBackgroundType={(value) => setColumnsVal('priceButtonNormalBackgroundType', value)}
                        normalClassicColor={getColumnsVal('priceButtonNormalClassicColor')}
                        setNormalClassicColor={(value) => setColumnsVal('priceButtonNormalClassicColor', value === undefined ? '' : value)}
                        normalGradientColor={getColumnsVal('priceButtonNormalGradientColor')}
                        setNormalGradientColor={(value) => setColumnsVal('priceButtonNormalGradientColor', value === undefined ? null : value)}
                        normalCustomGradientSwitcher={getColumnsVal('priceButtonNormalCustomGradientSwitcher')}
                        setNormalCustomGradientSwitcher={(value) => setColumnsVal('priceButtonNormalCustomGradientSwitcher', value)}
                        normalCustomGradientInputValue={getColumnsVal('priceButtonNormalCustomGradientInputValue')}
                        setNormalCustomGradientInputValue={(value) => setColumnsVal('priceButtonNormalCustomGradientInputValue', value)}
                        
                        hoverBackgroundType={getColumnsVal('priceButtonHoverBackgroundType')}
                        setHoverBackgroundType={(value) => setColumnsVal('priceButtonHoverBackgroundType', value)}
                        hoverClassicColor={getColumnsVal('priceButtonHoverClassicColor')}
                        setHoverClassicColor={(value) => setColumnsVal('priceButtonHoverClassicColor', value === undefined ? '' : value)}
                        hoverGradientColor={getColumnsVal('priceButtonHoverGradientColor')} 
                        setHoverGradientColor={(value) => setColumnsVal('priceButtonHoverGradientColor', value === undefined ? null : value)}
                        hoverCustomGradientSwitcher={getColumnsVal('priceButtonHoverCustomGradientSwitcher')}
                        setHoverCustomGradientSwitcher={(value) => setColumnsVal('priceButtonHoverCustomGradientSwitcher', value)}
                        hoverCustomGradientInputValue={getColumnsVal('priceButtonHoverCustomGradientInputValue')}
                        setHoverCustomGradientInputValue={(value) => setColumnsVal('priceButtonHoverCustomGradientInputValue', value)}

                        isBackgroundImage={false}

                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={priceButtonBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ priceButtonBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={getColumnsVal('priceButtonBorderColorSwitcher')}
                        setGlobalSwitcher={(value) => setColumnsVal('priceButtonBorderColorSwitcher', value)}
                    />

                    {getColumnsVal('priceButtonBorderColorSwitcher') === 'normal' && (
                        <FB_ColorControl
                            label={__("Nomal Color", "frontis-blocks")}
                            globalColor={getColumnsVal('priceButtonBorderColor')}
                            setGlobalColor={(value) => setColumnsVal('priceButtonBorderColor', value === undefined ? '' : value)}
                        />
                    )}

                    {getColumnsVal('priceButtonBorderColorSwitcher') === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={getColumnsVal('priceButtonBorderHoverColor')}
                            setGlobalColor={(value) => setColumnsVal('priceButtonBorderHoverColor', value === undefined ? '' : value)}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceButtonBorderUnitsHandler}
                        spacingUnits={priceButtonBorderUnits}
                        spacingDesktop={priceButtonDesktopBorderWidth}
                        spacingTablet={priceButtonTabBorderWidth}
                        spacingMobile={priceButtonMobileBorderWidth}
                        handleSpacingUnitHandler={handlePriceButtonBorderUnitChange}
                        spacingCombineBtn={priceButtonBorderLink}
                        spacingCombineBtnHandler={handlePriceButtonBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceButtonBorderRadiusUnitsHandler}
                        spacingUnits={priceButtonBorderRadiusUnits}
                        spacingDesktop={priceButtonDesktopBorderRadiusWidth}
                        spacingTablet={priceButtonTabBorderRadiusWidth}
                        spacingMobile={priceButtonMobileBorderRadiusWidth}
                        handleSpacingUnitHandler={handlePriceButtonBorderRadiusUnitChange}
                        spacingCombineBtn={priceButtonBorderRadiusLink}
                        spacingCombineBtnHandler={handlePriceButtonBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceButtonPaddingUnitsHandler}
                        spacingUnits={priceButtonPaddingUnits}
                        spacingDesktop={priceButtonDesktopPadding}
                        spacingTablet={priceButtonTabPadding}
                        spacingMobile={priceButtonMobilePadding}
                        handleSpacingUnitHandler={handlePriceButtonPaddingUnitChange}
                        spacingCombineBtn={priceButtonPaddingLink}
                        spacingCombineBtnHandler={handlePriceButtonPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlePriceButtonMarginUnitsHandler}
                        spacingUnits={priceButtonMarginUnits}
                        spacingDesktop={priceButtonDesktopMargin}
                        spacingTablet={priceButtonTabMargin}
                        spacingMobile={priceButtonMobileMargin}
                        handleSpacingUnitHandler={handlePriceButtonMarginUnitChange}
                        spacingCombineBtn={priceButtonMarginLink}
                        spacingCombineBtnHandler={handlePriceButtonMarginCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
            )}

        </>
    );
        
    /**
     * Inspector Advanced Controls
     */
    const advancedControls = (
        <>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header' 
                    >
                        <FB_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={priceGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ priceGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={pricingTableOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ pricingTableOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={pricingTablePositionType}
                            setPositionType={(value) => setAttributes({ pricingTablePositionType: value })}
                                                                            
                            HZOrientationType={pricingTableHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ pricingTableHZOrientationType: value })
                            }
                            VROrientationType={pricingTableVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ pricingTableVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={pricingTableHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ pricingTableHZLeftOffset: value })}
                            HZLeftOffsetUnits={pricingTableHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ pricingTableHZLeftOffsetUnits: value })}
                            HZRightOffset={pricingTableHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ pricingTableHZRightOffset: value })}
                            HZRightOffsetUnits={pricingTableHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ pricingTableHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={pricingTableVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ pricingTableVRTopOffset: value })}
                            VRTopOffsetUnits={pricingTableVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ pricingTableVRTopOffsetUnits: value })}
                            VRBottomOffset={pricingTableVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ pricingTableVRBottomOffset: value })}
                            VRBottomOffsetUnits={pricingTableVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ pricingTableVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={pricingTableGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ pricingTableGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />
                        
                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={pricingTableGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ pricingTableGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={priceGlobalPaddingUnits}
                            spacingDesktop={priceGlobalPaddingDesktop}
                            spacingTablet={priceGlobalPaddingTablet}
                            spacingMobile={priceGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={priceGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing 
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={priceGlobalMarginUnits}
                            spacingDesktop={priceGlobalMarginDesktop}
                            spacingTablet={priceGlobalMarginTablet}
                            spacingMobile={priceGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={priceGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody title="Background Color" initialOpen={false} >

                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={priceGlobalBackgroundColorSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ priceGlobalBackgroundColorSwitcher: value })}
                            
                            normalBackgroundType={priceGlobalNormalBackgroundType}
                            setNormalBackgroundType={(value) => setAttributes({ priceGlobalNormalBackgroundType: value })}
                            normalClassicColor={priceGlobalNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ priceGlobalNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={priceGlobalNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ priceGlobalNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={priceGlobalNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ priceGlobalNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={priceGlobalNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ priceGlobalNormalCustomGradientInputValue: value })}
                            
                            hoverBackgroundType={priceGlobalHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ priceGlobalHoverBackgroundType: value })}
                            hoverClassicColor={priceGlobalHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ priceGlobalHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={priceGlobalHoverGradientColor} 
                            setHoverGradientColor={(value) => setAttributes({ priceGlobalHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={priceGlobalHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ priceGlobalHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={priceGlobalHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ priceGlobalHoverCustomGradientInputValue: value })}

                            isBackgroundImage={false}

                        />

                    </PanelBody>
                    <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                        <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={priceGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ priceGlobalBorder: value })}
                        />



                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={priceGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ priceGlobalBorderColorSwitcher: value })}
                        />

                        {priceGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Nomal Color", "frontis-blocks")}
                                globalColor={priceGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ priceGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {priceGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={priceGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ priceGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={priceGlobalBorderUnits}
                            spacingDesktop={priceGlobalBorderDesktop}
                            spacingTablet={priceGlobalBorderTablet}
                            spacingMobile={priceGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={priceGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={priceGlobalBorderRadiusUnits}
                            spacingDesktop={priceGlobalBorderRadiusDesktop}
                            spacingTablet={priceGlobalBorderRadiusTablet}
                            spacingMobile={priceGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={priceGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={priceGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ priceGlobalBoxShadowSwitcher: value })}
                        />

                        {priceGlobalBoxShadowSwitcher === 'normal' && (
                        <FB_BoxShadowControl
                            label={__("Normal Shadow", "frontis-blocks")}
                            onBoxShadowChange={(value) => setAttributes({ priceGlobalBoxShadowValues: value })}
                            initialShadowValue={priceGlobalBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ priceGlobalBoxShadowCssValue: value })}
                        />
                        )}

                        {priceGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ priceGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={priceGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ priceGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={pricingTableDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ pricingTableDesktopSwitcher: value })}

                            tabletValue={pricingTableTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ pricingTableTabletSwitcher: value })}

                            mobileValue={pricingTableMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ pricingTableMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={pricingTableGlobalCustomCSS} 
                            onChangeValue={(value) => setAttributes({ pricingTableGlobalCustomCSS: value })}
                        />
                    </PanelBody>
                        
                </div>
            </div>
        </>
    );

    return (
        <>
            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}
export default memo(Inspector);