import { __ } from '@wordpress/i18n';
import { InspectorControls, URLInput } from '@wordpress/block-editor';
import { useEffect, useMemo } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    TextareaControl,
    TextControl,
	Dropdown,
	Dashicon,
	ColorPicker,
	ColorPalette,
    ToggleControl,
} from '@wordpress/components';

import {
    PROGRESS_TEXT_OPTIONS,
	HEADING,
    TEXT_ALIGN,
	ICON_ALIGN,
	CURRENCY_POSITION,
	ICON_POSITION,
	RIBBON_POSITION,
	BORDER_STYLES,
	NORMAL_HOVER,
	OVERFLOW_OP,
	PRESETS
} from "./constants/constants";

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
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
		// deviceType,
		blockStyle,

		//Preset Style
		pricingTablePreset,

		/** Start Top Section */
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

		/** Start Feature Icon */
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

		/** Start Feature Padding */
		priceFeaturePaddingUnits,
		priceFeatureDesktopPadding,
		priceFeatureTabPadding,
		priceFeatureMobilePadding,
		priceFeaturePaddingLink,
		/** End Feature Padding */

		/** Start price Button */
		priceButtonAlignment,
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
    } = attributes;

	console.log(attributes);

	const deviceType= useDeviceType();

		// let defaultImageUrl = [];
		// if (typeof FrontisBlocksData !== 'undefined') {
		// 	defaultImageUrl = [
		// 		FrontisBlocksData.pluginUrl + 'assets/images/ctabg-one.png',
		// 		FrontisBlocksData.pluginUrl + 'assets/images/ctabgtwo.png',
		// 		FrontisBlocksData.pluginUrl + 'assets/images/ctabgthree.png',
		// 	];
		// }	
		// // Set default value for buttonIconImageUrl
		// useEffect(() => {
		// 	if (!ctaGlobalBackgroundImageUrl && typeof FrontisBlocksData !== 'undefined') {
		// 		setAttributes({ ctaGlobalBackgroundImageUrl: '' });
		// 	}
		// }, []);

	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = priceFeatureItems.findIndex(item => item.id === active.id);
            const newIndex = priceFeatureItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(priceFeatureItems, oldIndex, newIndex);
            setAttributes({ priceFeatureItems: updatedItems });
        }
    };

    const handleAddItem = () => {
        const newItem = { id: `item-${priceFeatureItems.length + 1}`, Title: `Feature Item ${priceFeatureItems.length + 1}`, FeatureIcon: 'check' };
        setAttributes({ priceFeatureItems: [...priceFeatureItems, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = priceFeatureItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ priceFeatureItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = priceFeatureItems.filter(item => item.id !== id);
        setAttributes({ priceFeatureItems: updatedItems });
    };

	const priceIconHandler = (IconName) => {
		setAttributes({pricingIcon: IconName})
	}
	const priceButtonIconHandler = (IconName) => {
		setAttributes({priceButtonIcon: IconName})
	}

	/** Start Preset Style */
	const changeCTAPreset = (selectedPreset) => {
        const presetConfigurations = {
			"preset-1": {
				pricingSectionTopSwitcher: false,
				priceAfterTextSwitcher: true,
				priceFeatureItemBorderBottom: true,
				priceFeatureAfterTextSwitcher: true,
				priceButtonSwitcher: true,
				pricingIconAlign: 'none',
				pricingIcon: 'bookmark',
				pricingTopSectionNormalBackgroundType: 'classic',
				priceButtonNormalBackgroundType: 'classic',
				priceGlobalNormalBackgroundType: 'classic',
				priceGlobalBorder: 'solid',
				pricingSectionTopText: 'Best Deal',
				pricingTitle: 'Basic Plan',
				pricingSubTitle: 'Best for Business Owners.',
				normalPrice: '49.00',
				pricePeriod: 'month',
				priceAfterText: 'What Value Add For Your Business',
				priceFeatureItems: [
					{ id: 'item-1', Title: 'Feature Item 1', FeatureIcon: 'check' },
					{ id: 'item-2', Title: 'Feature Item 2', FeatureIcon: 'check' },
					{ id: 'item-3', Title: 'Feature Item 3', FeatureIcon: 'check' },
				],
				priceFeatureItemBorder: 'solid',
				priceFeatureAfterText: 'Billed every year Popular amongst entrepeneurs $497 per year',
				priceButtonText: 'Select Plan',
				priceGlobalBorderColor: '',
				pricingTopSectionNormalClassicColor: '#399CFF',
				pricingTopSectionTextColor: '#fff',
				priceGlobalNormalClassicColor: '#EBF5FF',
				priceGlobalHoverClassicColor: '#EBF5FF',
				priceButtonNormalClassicColor: '#15171C',
				priceButtonHoverClassicColor: '',
				priceButtonColor: '#fff',
				priceFeatureAfterTextColor: '#15171C',
				priceFeatureItemBorderColor: '#E1E3E8',
				priceFeatureIconColor: '#6A758E',
				pricingTitleColor: '#15171C',
				pricingSubtitleColor: '#6A758E',
				normalPricingColor: '#399CFF',
				pricePeriodColor: '#6A758E',
				priceAfterTextBgColor: '#ffffff',
				priceAfterTextColor: '#6A758E',
				pricingfeatureTitleColor: '#6A758E',
				priceGlobalPaddingDesktop: {
					top: '30',
					bottom: '30',
					left: '30',
					right: '30',
				},
				priceGlobalBorderDesktop: {
					top: '0',
					bottom: '0',
					left: '0',
					right: '0',
				},
				priceGlobalBorderRadiusDesktop: {
					top: '24',
					bottom: '24',
					left: '24',
					right: '24',
				},
				pricingTitleDesktopMargin: {
					top: '0',
					bottom: '0',
					left: '0',
					right: '0',
				},
				priceFeatureDesktopPadding: {
					top: '0',
					bottom: '42',
					left: '0',
					right: '0',
				},
				priceButtonDesktopMargin: {
					top: '40',
					right: '0',
					bottom: '0',
					left: '0',
				},
				priceFeatureItemDesktopBorder: {
					top: '0',
					right: '0',
					bottom: '1',
					left: '0',
				},
				priceButtonDesktopPadding: {
					top: '20',
					right: '20',
					bottom: '20',
					left: '20',
				},
				priceAfterTextPaddingDesktop: {
					top: '5',
					right: '10',
					bottom: '5',
					left: '10',
				},
				priceFeatureItemDesktopPadding: {
					top: '10',
					right: '0',
					bottom: '10',
					left: '0',
				},
				priceButtonDesktopBorderRadiusWidth: {
					top: '5',
					right: '5',
					bottom: '5',
					left: '5',
				},
				pricingTopSectionDesktopPadding: {
					top: '5',
					right: '5',
					bottom: '5',
					left: '5'
				},
				priceDesktopPadding: {
					top: '32',
					right: '0',
					bottom: '42',
					left: '0'
				},
				pricingTopSectionTextDesktopPadding: {
					top: '20',
					right: '0',
					bottom: '20',
					left: '0'
				},
				pricingTopSectionBorderRadiusDesktop: {
					top: '30',
					right: '30',
					bottom: '30',
					left: '30'
				}
			},
			"preset-2": {
				pricingSectionTopSwitcher: false,
				priceAfterTextSwitcher: false,
				priceFeatureItemBorderBottom: true,
				priceFeatureAfterTextSwitcher: false,
				priceButtonSwitcher: true,
				pricingIconAlign: 'none',
				pricingIcon: 'bookmark',
				pricingTopSectionNormalBackgroundType: 'classic',
				priceButtonNormalBackgroundType: 'classic',
				priceGlobalNormalBackgroundType: 'classic',
				priceGlobalBorder: 'none',
				pricingSectionTopText: 'Best Deal',
				pricingTitle: 'Basic Plan',
				pricingSubTitle: 'Best for Business Owners.',
				normalPrice: '49.00',
				pricePeriod: 'month',
				priceAfterText: 'What Value Add For Your Business',
				priceFeatureItems: [
					{ id: 'item-1', Title: 'Customization options', FeatureIcon: 'circle-check' },
					{ id: 'item-2', Title: 'Essential pattern library', FeatureIcon: 'circle-check' },
					{ id: 'item-3', Title: 'Handcrafted theme styles', FeatureIcon: 'circle-check' },
					{ id: 'item-4', Title: 'Unmatched performance', FeatureIcon: 'circle-check' },
				],
				priceFeatureItemBorder: 'none',
				priceFeatureAfterText: 'Billed every year Popular amongst entrepeneurs $497 per year',
				priceButtonText: 'Get Started',
				priceGlobalBorderColor: '',
				pricingTopSectionNormalClassicColor: '#399CFF',
				pricingTopSectionTextColor: '#fff',
				priceGlobalNormalClassicColor: '#F7F7F7',
				priceGlobalHoverClassicColor: '#EBF5FF',
				pricingTitleColor: '#15171C',
				pricingSubtitleColor: '#555E72',
				normalPricingColor: '#0D173B',
				pricePeriodColor: '#555E72',
				priceAfterTextBgColor: '#ffffff',
				priceAfterTextColor: '#6A758E',
				priceFeatureAfterTextColor: '#15171C',
				pricingfeatureTitleColor: '#555E72',
				priceFeatureIconColor: '#15171C',
				priceFeatureItemBorderColor: '#E1E3E8',
				priceButtonColor: '#15171C',
				priceButtonNormalClassicColor: '#E1E3E8',
				priceButtonHoverClassicColor: '',
				priceGlobalPaddingDesktop: {
					top: '32',
					bottom: '32',
					left: '32',
					right: '32',
				},
				priceGlobalBorderDesktop: {
					top: '0',
					bottom: '0',
					left: '0',
					right: '0',
				},
				priceGlobalBorderRadiusDesktop: {
					top: '24',
					bottom: '24',
					left: '24',
					right: '24',
				},
				pricingTitleDesktopMargin: {
					top: '0',
					bottom: '10',
					left: '0',
					right: '0',
				},
				priceFeatureItemDesktopBorder: {
					top: '0',
					right: '0',
					bottom: '1',
					left: '0',
				},
				priceFeatureDesktopPadding: {
					top: '0',
					bottom: '32',
					left: '0',
					right: '0',
				},
				priceButtonDesktopMargin: {
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
				},
				priceButtonDesktopPadding: {
					top: '20',
					right: '20',
					bottom: '20',
					left: '20',
				},
				priceAfterTextPaddingDesktop: {
					top: '5',
					right: '10',
					bottom: '5',
					left: '10',
				},
				priceFeatureItemDesktopPadding: {
					top: '12',
					right: '0',
					bottom: '12',
					left: '0',
				},
				priceButtonDesktopBorderRadiusWidth: {
					top: '10',
					right: '10',
					bottom: '10',
					left: '10',
				},
				pricingTopSectionDesktopPadding: {
					top: '5',
					right: '5',
					bottom: '5',
					left: '5'
				},
				priceDesktopPadding: {
					top: '52',
					right: '0',
					bottom: '42',
					left: '0'
				},
				pricingTopSectionTextDesktopPadding: {
					top: '20',
					right: '0',
					bottom: '20',
					left: '0'
				},
				pricingTopSectionBorderRadiusDesktop: {
					top: '30',
					right: '30',
					bottom: '30',
					left: '30'
				}
			},
			
			"preset-3": {
				pricingSectionTopSwitcher: true,
				priceAfterTextSwitcher: false,
				priceFeatureItemBorderBottom: true,
				priceFeatureAfterTextSwitcher: false,
				priceButtonSwitcher: true,
				pricingIconAlign: 'none',
				pricingIcon: 'bookmark',
				pricingTopSectionNormalBackgroundType: 'gradient',
				pricingTopSectionNormalCustomGradientSwitcher: true,
				priceButtonNormalBackgroundType: 'gradient',
				priceButtonNormalCustomGradientSwitcher: true,
				priceGlobalNormalBackgroundType: 'classic',
				priceGlobalBorder: 'none',
				pricingSectionTopText: 'Best Deal',
				pricingTitle: 'Basic Plan',
				pricingSubTitle: 'Everything you need to get start building your website.',
				normalPrice: '9.99',
				pricePeriod: 'month',
				priceAfterText: 'What Value Add For Your Business',
				priceFeatureItems: [
					{ id: 'item-1', Title: 'Customization options', FeatureIcon: 'circle-check' },
					{ id: 'item-2', Title: 'Essential pattern library', FeatureIcon: 'circle-check' },
					{ id: 'item-3', Title: 'Handcrafted theme styles', FeatureIcon: 'circle-check' },
					{ id: 'item-4', Title: 'Unmatched performance', FeatureIcon: 'circle-check' },
				],
				priceFeatureItemBorder: 'none',
				priceFeatureAfterText: 'Billed every year Popular amongst entrepeneurs $497 per year',
				priceButtonText: 'Get Started',
				priceGlobalBorderColor: '',
				pricingTopSectionNormalCustomGradientInputValue: 'linear-gradient(142deg, #FF38FC 0%, #8091FF 50%, #1868BE 100%)',
				pricingTopSectionNormalClassicColor: '#399CFF',
				pricingTopSectionTextColor: '#fff',
				priceGlobalNormalClassicColor: '#F7F7F7',
				priceGlobalHoverClassicColor: '#EBF5FF',
				pricingTitleColor: '#15171C',
				pricingSubtitleColor: '#555E72',
				normalPricingColor: '#0D173B',
				pricePeriodColor: '#555E72',
				priceAfterTextBgColor: '#ffffff',
				priceAfterTextColor: '#6A758E',
				priceFeatureAfterTextColor: '#15171C',
				pricingfeatureTitleColor: '#555E72',
				priceFeatureIconColor: '#15171C',
				priceFeatureItemBorderColor: '#E1E3E8',
				priceButtonColor: '#ffffff',
				priceButtonNormalClassicColor: '#E1E3E8',
				priceButtonNormalCustomGradientInputValue: 'linear-gradient(142deg, #FF38FC 0%, #8091FF 100%)',
				priceButtonHoverClassicColor: '',
				priceGlobalPaddingDesktop: {
					top: '32',
					bottom: '32',
					left: '32',
					right: '32',
				},
				priceGlobalBorderDesktop: {
					top: '0',
					bottom: '0',
					left: '0',
					right: '0',
				},
				priceGlobalBorderRadiusDesktop: {
					top: '24',
					bottom: '24',
					left: '24',
					right: '24',
				},
				pricingTitleDesktopMargin: {
					top: '0',
					bottom: '10',
					left: '0',
					right: '0',
				},
				priceFeatureItemDesktopBorder: {
					top: '0',
					right: '0',
					bottom: '1',
					left: '0',
				},
				priceFeatureDesktopPadding: {
					top: '0',
					bottom: '32',
					left: '0',
					right: '0',
				},
				priceButtonDesktopMargin: {
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
				},
				priceButtonDesktopPadding: {
					top: '20',
					right: '20',
					bottom: '20',
					left: '20',
				},
				priceAfterTextPaddingDesktop: {
					top: '5',
					right: '10',
					bottom: '5',
					left: '10',
				},
				priceFeatureItemDesktopPadding: {
					top: '12',
					right: '0',
					bottom: '12',
					left: '0',
				},
				priceButtonDesktopBorderRadiusWidth: {
					top: '10',
					right: '10',
					bottom: '10',
					left: '10',
				},
				pricingTopSectionDesktopPadding: {
					top: '5',
					right: '5',
					bottom: '5',
					left: '5'
				},
				priceDesktopPadding: {
					top: '52',
					right: '0',
					bottom: '42',
					left: '0'
				},
				pricingTopSectionTextDesktopPadding: {
					top: '20',
					right: '0',
					bottom: '20',
					left: '0'
				},
				pricingTopSectionBorderRadiusDesktop: {
					top: '30',
					right: '30',
					bottom: '30',
					left: '30'
				}
			},
			
		}
		const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
				pricingTablePreset: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Call to Action: Preset "${selectedPreset}" not found.`);
        }
	}


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
	const pricingTopSectionDesktopPaddingWidth = `${pricingTopSectionDesktopPadding.top}${pricingTopSectionPaddingUnits.Desktop} ${pricingTopSectionDesktopPadding.right}${pricingTopSectionPaddingUnits.Desktop} ${pricingTopSectionDesktopPadding.bottom}${pricingTopSectionPaddingUnits.Desktop} ${pricingTopSectionDesktopPadding.left}${pricingTopSectionPaddingUnits.Desktop}`;
	const pricingTopSectionTabletPaddingWidth = `${pricingTopSectionTabletPadding.top}${pricingTopSectionPaddingUnits.Tablet} ${pricingTopSectionTabletPadding.right}${pricingTopSectionPaddingUnits.Tablet} ${pricingTopSectionTabletPadding.bottom}${pricingTopSectionPaddingUnits.Tablet} ${pricingTopSectionTabletPadding.left}${pricingTopSectionPaddingUnits.Tablet}`;
	const pricingTopSectionMobilePaddingWidth = `${pricingTopSectionMobilePadding.top}${pricingTopSectionPaddingUnits.Mobile} ${pricingTopSectionMobilePadding.right}${pricingTopSectionPaddingUnits.Mobile} ${pricingTopSectionMobilePadding.bottom}${pricingTopSectionPaddingUnits.Mobile} ${pricingTopSectionMobilePadding.left}${pricingTopSectionPaddingUnits.Mobile}`;
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
	const pricingTopSectionBorderDesktopWidth = `${pricingTopSectionBorderDesktop.top}${pricingTopSectionBorderUnits.Desktop} ${pricingTopSectionBorderDesktop.right}${pricingTopSectionBorderUnits.Desktop} ${pricingTopSectionBorderDesktop.bottom}${pricingTopSectionBorderUnits.Desktop} ${pricingTopSectionBorderDesktop.left}${pricingTopSectionBorderUnits.Desktop}`;
	const pricingTopSectionBorderTabletWidth = `${pricingTopSectionBorderTablet.top}${pricingTopSectionBorderUnits.Tablet} ${pricingTopSectionBorderTablet.right}${pricingTopSectionBorderUnits.Tablet} ${pricingTopSectionBorderTablet.bottom}${pricingTopSectionBorderUnits.Tablet} ${pricingTopSectionBorderTablet.left}${pricingTopSectionBorderUnits.Tablet}`;
	const pricingTopSectionBorderMobileWidth = `${pricingTopSectionBorderMobile.top}${pricingTopSectionBorderUnits.Mobile} ${pricingTopSectionBorderMobile.right}${pricingTopSectionBorderUnits.Mobile} ${pricingTopSectionBorderMobile.bottom}${pricingTopSectionBorderUnits.Mobile} ${pricingTopSectionBorderMobile.left}${pricingTopSectionBorderUnits.Mobile}`;
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
	const pricingTopSectionBorderRadiusDesktopWidth = `${pricingTopSectionBorderRadiusDesktop.top}${pricingTopSectionBorderRadiusUnits.Desktop} ${pricingTopSectionBorderRadiusDesktop.right}${pricingTopSectionBorderRadiusUnits.Desktop} ${pricingTopSectionBorderRadiusDesktop.bottom}${pricingTopSectionBorderRadiusUnits.Desktop} ${pricingTopSectionBorderRadiusDesktop.left}${pricingTopSectionBorderRadiusUnits.Desktop}`;
	const pricingTopSectionBorderRadiusTabletWidth = `${pricingTopSectionBorderRadiusTablet.top}${pricingTopSectionBorderRadiusUnits.Tablet} ${pricingTopSectionBorderRadiusTablet.right}${pricingTopSectionBorderRadiusUnits.Tablet} ${pricingTopSectionBorderRadiusTablet.bottom}${pricingTopSectionBorderRadiusUnits.Tablet} ${pricingTopSectionBorderRadiusTablet.left}${pricingTopSectionBorderRadiusUnits.Tablet}`;
	const pricingTopSectionBorderRadiusMobileWidth = `${pricingTopSectionBorderRadiusMobile.top}${pricingTopSectionBorderRadiusUnits.Mobile} ${pricingTopSectionBorderRadiusMobile.right}${pricingTopSectionBorderRadiusUnits.Mobile} ${pricingTopSectionBorderRadiusMobile.bottom}${pricingTopSectionBorderRadiusUnits.Mobile} ${pricingTopSectionBorderRadiusMobile.left}${pricingTopSectionBorderRadiusUnits.Mobile}`;
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
	const pricingTopSectionTextDesktopPaddingWidth = `${pricingTopSectionTextDesktopPadding.top}${pricingTopSectionTextPaddingUnits.Desktop} ${pricingTopSectionTextDesktopPadding.right}${pricingTopSectionTextPaddingUnits.Desktop} ${pricingTopSectionTextDesktopPadding.bottom}${pricingTopSectionTextPaddingUnits.Desktop} ${pricingTopSectionTextDesktopPadding.left}${pricingTopSectionTextPaddingUnits.Desktop}`;
	const pricingTopSectionTextTabletPaddingWidth = `${pricingTopSectionTextTabletPadding.top}${pricingTopSectionTextPaddingUnits.Tablet} ${pricingTopSectionTextTabletPadding.right}${pricingTopSectionTextPaddingUnits.Tablet} ${pricingTopSectionTextTabletPadding.bottom}${pricingTopSectionTextPaddingUnits.Tablet} ${pricingTopSectionTextTabletPadding.left}${pricingTopSectionTextPaddingUnits.Tablet}`;
	const pricingTopSectionTextMobilePaddingWidth = `${pricingTopSectionTextMobilePadding.top}${pricingTopSectionTextPaddingUnits.Mobile} ${pricingTopSectionTextMobilePadding.right}${pricingTopSectionTextPaddingUnits.Mobile} ${pricingTopSectionTextMobilePadding.bottom}${pricingTopSectionTextPaddingUnits.Mobile} ${pricingTopSectionTextMobilePadding.left}${pricingTopSectionTextPaddingUnits.Mobile}`;
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
	const priceAfterTextDesktopPaddingWidth = `${priceAfterTextPaddingDesktop.top}${priceAfterTextPaddingUnits.Desktop} ${priceAfterTextPaddingDesktop.right}${priceAfterTextPaddingUnits.Desktop} ${priceAfterTextPaddingDesktop.bottom}${priceAfterTextPaddingUnits.Desktop} ${priceAfterTextPaddingDesktop.left}${priceAfterTextPaddingUnits.Desktop}`;
	const priceAfterTextTabletPaddingWidth = `${priceAfterTextPaddingTablet.top}${priceAfterTextPaddingUnits.Tablet} ${priceAfterTextPaddingTablet.right}${priceAfterTextPaddingUnits.Tablet} ${priceAfterTextPaddingTablet.bottom}${priceAfterTextPaddingUnits.Tablet} ${priceAfterTextPaddingTablet.left}${priceAfterTextPaddingUnits.Tablet}`;
	const priceAfterTextMobilePaddingWidth = `${priceAfterTextPaddingMobile.top}${priceAfterTextPaddingUnits.Mobile} ${priceAfterTextPaddingMobile.right}${priceAfterTextPaddingUnits.Mobile} ${priceAfterTextPaddingMobile.bottom}${priceAfterTextPaddingUnits.Mobile} ${priceAfterTextPaddingMobile.left}${priceAfterTextPaddingUnits.Mobile}`;
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
	const priceFeatureItemDesktopPaddingWidth 	= `${priceFeatureItemDesktopPadding.top}${priceFeatureItemPaddingUnits.Desktop} ${priceFeatureItemDesktopPadding.right}${priceFeatureItemPaddingUnits.Desktop} ${priceFeatureItemDesktopPadding.bottom}${priceFeatureItemPaddingUnits.Desktop} ${priceFeatureItemDesktopPadding.left}${priceFeatureItemPaddingUnits.Desktop}`;
	const priceFeatureItemTabPaddingWidth 		= `${priceFeatureItemTabPadding.top}${priceFeatureItemPaddingUnits.Tablet} ${priceFeatureItemTabPadding.right}${priceFeatureItemPaddingUnits.Tablet} ${priceFeatureItemTabPadding.bottom}${priceFeatureItemPaddingUnits.Tablet} ${priceFeatureItemTabPadding.left}${priceFeatureItemPaddingUnits.Tablet}`;
	const priceFeatureItemMobilePaddingWidth 	= `${priceFeatureItemMobilePadding.top}${priceFeatureItemPaddingUnits.Mobile} ${priceFeatureItemMobilePadding.right}${priceFeatureItemPaddingUnits.Mobile} ${priceFeatureItemMobilePadding.bottom}${priceFeatureItemPaddingUnits.Mobile} ${priceFeatureItemMobilePadding.left}${priceFeatureItemPaddingUnits.Mobile}`;
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
	const priceFeatureItemDesktopMarginWidth 	= `${priceFeatureItemDesktopMargin.top}${priceFeatureItemMarginUnits.Desktop} ${priceFeatureItemDesktopMargin.right}${priceFeatureItemMarginUnits.Desktop} ${priceFeatureItemDesktopMargin.bottom}${priceFeatureItemMarginUnits.Desktop} ${priceFeatureItemDesktopMargin.left}${priceFeatureItemMarginUnits.Desktop}`;
	const priceFeatureItemTabMarginWidth 		= `${priceFeatureItemTabMargin.top}${priceFeatureItemMarginUnits.Tablet} ${priceFeatureItemTabMargin.right}${priceFeatureItemMarginUnits.Tablet} ${priceFeatureItemTabMargin.bottom}${priceFeatureItemMarginUnits.Tablet} ${priceFeatureItemTabMargin.left}${priceFeatureItemMarginUnits.Tablet}`;
	const priceFeatureItemMobileMarginWidth 	= `${priceFeatureItemMobileMargin.top}${priceFeatureItemMarginUnits.Mobile} ${priceFeatureItemMobileMargin.right}${priceFeatureItemMarginUnits.Mobile} ${priceFeatureItemMobileMargin.bottom}${priceFeatureItemMarginUnits.Mobile} ${priceFeatureItemMobileMargin.left}${priceFeatureItemMarginUnits.Mobile}`;
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
	const priceFeatureItemDesktopBorderWidth 	= `${priceFeatureItemDesktopBorder.top}${priceFeatureItemBorderUnits.Desktop} ${priceFeatureItemDesktopBorder.right}${priceFeatureItemBorderUnits.Desktop} ${priceFeatureItemDesktopBorder.bottom}${priceFeatureItemBorderUnits.Desktop} ${priceFeatureItemDesktopBorder.left}${priceFeatureItemBorderUnits.Desktop}`;
	const priceFeatureItemTabBorderWidth 		= `${priceFeatureItemTabBorder.top}${priceFeatureItemBorderUnits.Tablet} ${priceFeatureItemTabBorder.right}${priceFeatureItemBorderUnits.Tablet} ${priceFeatureItemTabBorder.bottom}${priceFeatureItemBorderUnits.Tablet} ${priceFeatureItemTabBorder.left}${priceFeatureItemBorderUnits.Tablet}`;
	const priceFeatureItemMobileBorderWidth 	= `${priceFeatureItemMobileBorder.top}${priceFeatureItemBorderUnits.Mobile} ${priceFeatureItemMobileBorder.right}${priceFeatureItemBorderUnits.Mobile} ${priceFeatureItemMobileBorder.bottom}${priceFeatureItemBorderUnits.Mobile} ${priceFeatureItemMobileBorder.left}${priceFeatureItemBorderUnits.Mobile}`;
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
	const priceFeatureItemDesktopBorderRadiusWidth 	= `${priceFeatureItemDesktopBorderRadius.top}${priceFeatureItemBorderRadiusUnits.Desktop} ${priceFeatureItemDesktopBorderRadius.right}${priceFeatureItemBorderRadiusUnits.Desktop} ${priceFeatureItemDesktopBorderRadius.bottom}${priceFeatureItemBorderRadiusUnits.Desktop} ${priceFeatureItemDesktopBorderRadius.left}${priceFeatureItemBorderRadiusUnits.Desktop}`;
	const priceFeatureItemTabBorderRadiusWidth 		= `${priceFeatureItemTabBorderRadius.top}${priceFeatureItemBorderRadiusUnits.Tablet} ${priceFeatureItemTabBorderRadius.right}${priceFeatureItemBorderRadiusUnits.Tablet} ${priceFeatureItemTabBorderRadius.bottom}${priceFeatureItemBorderRadiusUnits.Tablet} ${priceFeatureItemTabBorderRadius.left}${priceFeatureItemBorderRadiusUnits.Tablet}`;
	const priceFeatureItemMobileBorderRadiusWidth 	= `${priceFeatureItemMobileBorderRadius.top}${priceFeatureItemBorderRadiusUnits.Mobile} ${priceFeatureItemMobileBorderRadius.right}${priceFeatureItemBorderRadiusUnits.Mobile} ${priceFeatureItemMobileBorderRadius.bottom}${priceFeatureItemBorderRadiusUnits.Mobile} ${priceFeatureItemMobileBorderRadius.left}${priceFeatureItemBorderRadiusUnits.Mobile}`;
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
	const priceFeatureDesktopPaddingWidth 	= `${priceFeatureDesktopPadding.top}${priceFeaturePaddingUnits.Desktop} ${priceFeatureDesktopPadding.right}${priceFeaturePaddingUnits.Desktop} ${priceFeatureDesktopPadding.bottom}${priceFeaturePaddingUnits.Desktop} ${priceFeatureDesktopPadding.left}${priceFeaturePaddingUnits.Desktop}`;
	const priceFeatureTabPaddingWidth 		= `${priceFeatureTabPadding.top}${priceFeaturePaddingUnits.Tablet} ${priceFeatureTabPadding.right}${priceFeaturePaddingUnits.Tablet} ${priceFeatureTabPadding.bottom}${priceFeaturePaddingUnits.Tablet} ${priceFeatureTabPadding.left}${priceFeaturePaddingUnits.Tablet}`;
	const priceFeatureMobilePaddingWidth 	= `${priceFeatureMobilePadding.top}${priceFeaturePaddingUnits.Mobile} ${priceFeatureMobilePadding.right}${priceFeaturePaddingUnits.Mobile} ${priceFeatureMobilePadding.bottom}${priceFeaturePaddingUnits.Mobile} ${priceFeatureMobilePadding.left}${priceFeaturePaddingUnits.Mobile}`;
	/** End Feature Padding */


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
	const priceAfterTextBorderDesktopWidth = `${priceAfterTextBorderDesktop.top}${priceAfterTextBorderUnits.Desktop} ${priceAfterTextBorderDesktop.right}${priceAfterTextBorderUnits.Desktop} ${priceAfterTextBorderDesktop.bottom}${priceAfterTextBorderUnits.Desktop} ${priceAfterTextBorderDesktop.left}${priceAfterTextBorderUnits.Desktop}`;
	const priceAfterTextBorderTabletWidth = `${priceAfterTextBorderTablet.top}${priceAfterTextBorderUnits.Tablet} ${priceAfterTextBorderTablet.right}${priceAfterTextBorderUnits.Tablet} ${priceAfterTextBorderTablet.bottom}${priceAfterTextBorderUnits.Tablet} ${priceAfterTextBorderTablet.left}${priceAfterTextBorderUnits.Tablet}`;
	const priceAfterTextBorderMobileWidth = `${priceAfterTextBorderMobile.top}${priceAfterTextBorderUnits.Mobile} ${priceAfterTextBorderMobile.right}${priceAfterTextBorderUnits.Mobile} ${priceAfterTextBorderMobile.bottom}${priceAfterTextBorderUnits.Mobile} ${priceAfterTextBorderMobile.left}${priceAfterTextBorderUnits.Mobile}`;
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
	const priceAfterTextBorderRadiusDesktopWidth = `${priceAfterTextBorderRadiusDesktop.top}${priceAfterTextBorderRadiusUnits.Desktop} ${priceAfterTextBorderRadiusDesktop.right}${priceAfterTextBorderRadiusUnits.Desktop} ${priceAfterTextBorderRadiusDesktop.bottom}${priceAfterTextBorderRadiusUnits.Desktop} ${priceAfterTextBorderRadiusDesktop.left}${priceAfterTextBorderRadiusUnits.Desktop}`;
	const priceAfterTextBorderRadiusTabletWidth = `${priceAfterTextBorderRadiusTablet.top}${priceAfterTextBorderRadiusUnits.Tablet} ${priceAfterTextBorderRadiusTablet.right}${priceAfterTextBorderRadiusUnits.Tablet} ${priceAfterTextBorderRadiusTablet.bottom}${priceAfterTextBorderRadiusUnits.Tablet} ${priceAfterTextBorderRadiusTablet.left}${priceAfterTextBorderRadiusUnits.Tablet}`;
	const priceAfterTextBorderRadiusMobileWidth = `${priceAfterTextBorderRadiusMobile.top}${priceAfterTextBorderRadiusUnits.Mobile} ${priceAfterTextBorderRadiusMobile.right}${priceAfterTextBorderRadiusUnits.Mobile} ${priceAfterTextBorderRadiusMobile.bottom}${priceAfterTextBorderRadiusUnits.Mobile} ${priceAfterTextBorderRadiusMobile.left}${priceAfterTextBorderRadiusUnits.Mobile}`;
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
	const priceDesktopPaddingWidth = `${priceDesktopPadding.top}${pricePaddingUnits.Desktop} ${priceDesktopPadding.right}${pricePaddingUnits.Desktop} ${priceDesktopPadding.bottom}${pricePaddingUnits.Desktop} ${priceDesktopPadding.left}${pricePaddingUnits.Desktop}`;
	const priceTabletPaddingWidth = `${priceTabletPadding.top}${pricePaddingUnits.Tablet} ${priceTabletPadding.right}${pricePaddingUnits.Tablet} ${priceTabletPadding.bottom}${pricePaddingUnits.Tablet} ${priceTabletPadding.left}${pricePaddingUnits.Tablet}`;
	const priceMobilePaddingWidth = `${priceMobilePadding.top}${pricePaddingUnits.Mobile} ${priceMobilePadding.right}${pricePaddingUnits.Mobile} ${priceMobilePadding.bottom}${pricePaddingUnits.Mobile} ${priceMobilePadding.left}${pricePaddingUnits.Mobile}`;
	/** End Pricing Padding */


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
	const headerDesktopPadding = `${pricingHeaderDesktopPadding.top}${pricingHeaderPaddingUnits.Desktop} ${pricingHeaderDesktopPadding.right}${pricingHeaderPaddingUnits.Desktop} ${pricingHeaderDesktopPadding.bottom}${pricingHeaderPaddingUnits.Desktop} ${pricingHeaderDesktopPadding.left}${pricingHeaderPaddingUnits.Desktop}`;
	const headerTabletPadding = `${pricingHeaderTabletPadding.top}${pricingHeaderPaddingUnits.Tablet} ${pricingHeaderTabletPadding.right}${pricingHeaderPaddingUnits.Tablet} ${pricingHeaderTabletPadding.bottom}${pricingHeaderPaddingUnits.Tablet} ${pricingHeaderTabletPadding.left}${pricingHeaderPaddingUnits.Tablet}`;
	const headerMobilePadding = `${pricingHeaderMobilePadding.top}${pricingHeaderPaddingUnits.Mobile} ${pricingHeaderMobilePadding.right}${pricingHeaderPaddingUnits.Mobile} ${pricingHeaderMobilePadding.bottom}${pricingHeaderPaddingUnits.Mobile} ${pricingHeaderMobilePadding.left}${pricingHeaderPaddingUnits.Mobile}`;
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
	const headerDesktopBorderWidth = `${pricingHeaderBorderDesktop.top}${pricingHeaderBorderUnits.Desktop} ${pricingHeaderBorderDesktop.right}${pricingHeaderBorderUnits.Desktop} ${pricingHeaderBorderDesktop.bottom}${pricingHeaderBorderUnits.Desktop} ${pricingHeaderBorderDesktop.left}${pricingHeaderBorderUnits.Desktop}`;
	const headerTabletBorderWidth = `${pricingHeaderBorderTablet.top}${pricingHeaderBorderUnits.Tablet} ${pricingHeaderBorderTablet.right}${pricingHeaderBorderUnits.Tablet} ${pricingHeaderBorderTablet.bottom}${pricingHeaderBorderUnits.Tablet} ${pricingHeaderBorderTablet.left}${pricingHeaderBorderUnits.Tablet}`;
	const headerMobileBorderWidth = `${pricingHeaderBorderMobile.top}${pricingHeaderBorderUnits.Mobile} ${pricingHeaderBorderMobile.right}${pricingHeaderBorderUnits.Mobile} ${pricingHeaderBorderMobile.bottom}${pricingHeaderBorderUnits.Mobile} ${pricingHeaderBorderMobile.left}${pricingHeaderBorderUnits.Mobile}`;
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

	/** End Header Border Radius */
	const headerDesktopBorderRadiusWidth = `${pricingHeaderBorderRadiusDesktop.top}${pricingHeaderBorderRadiusUnits.Desktop} ${pricingHeaderBorderRadiusDesktop.right}${pricingHeaderBorderRadiusUnits.Desktop} ${pricingHeaderBorderRadiusDesktop.bottom}${pricingHeaderBorderRadiusUnits.Desktop} ${pricingHeaderBorderRadiusDesktop.left}${pricingHeaderBorderRadiusUnits.Desktop}`;
	const headerTabletBorderRadiusWidth = `${pricingHeaderBorderRadiusTablet.top}${pricingHeaderBorderRadiusUnits.Tablet} ${pricingHeaderBorderRadiusTablet.right}${pricingHeaderBorderRadiusUnits.Tablet} ${pricingHeaderBorderRadiusTablet.bottom}${pricingHeaderBorderRadiusUnits.Tablet} ${pricingHeaderBorderRadiusTablet.left}${pricingHeaderBorderRadiusUnits.Tablet}`;
	const headerMobileBorderRadiusWidth = `${pricingHeaderBorderRadiusMobile.top}${pricingHeaderBorderRadiusUnits.Mobile} ${pricingHeaderBorderRadiusMobile.right}${pricingHeaderBorderRadiusUnits.Mobile} ${pricingHeaderBorderRadiusMobile.bottom}${pricingHeaderBorderRadiusUnits.Mobile} ${pricingHeaderBorderRadiusMobile.left}${pricingHeaderBorderRadiusUnits.Mobile}`;
	/** End Header Border Radius */

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
	const titleDesktopPadding = `${pricingTitleDesktopPadding.top}${pricingTitlePaddingUnits.Desktop} ${pricingTitleDesktopPadding.right}${pricingTitlePaddingUnits.Desktop} ${pricingTitleDesktopPadding.bottom}${pricingTitlePaddingUnits.Desktop} ${pricingTitleDesktopPadding.left}${pricingTitlePaddingUnits.Desktop}`;
	const titleTabletPadding = `${pricingTitleTabletPadding.top}${pricingTitlePaddingUnits.Tablet} ${pricingTitleTabletPadding.right}${pricingTitlePaddingUnits.Tablet} ${pricingTitleTabletPadding.bottom}${pricingTitlePaddingUnits.Tablet} ${pricingTitleTabletPadding.left}${pricingTitlePaddingUnits.Tablet}`;
	const titleMobilePadding = `${pricingTitleMobilePadding.top}${pricingTitlePaddingUnits.Mobile} ${pricingTitleMobilePadding.right}${pricingTitlePaddingUnits.Mobile} ${pricingTitleMobilePadding.bottom}${pricingTitlePaddingUnits.Mobile} ${pricingTitleMobilePadding.left}${pricingTitlePaddingUnits.Mobile}`;
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
	const titleDesktopMargin = `${pricingTitleDesktopMargin.top}${pricingTitleMarginUnits.Desktop} ${pricingTitleDesktopMargin.right}${pricingTitleMarginUnits.Desktop} ${pricingTitleDesktopMargin.bottom}${pricingTitleMarginUnits.Desktop} ${pricingTitleDesktopMargin.left}${pricingTitleMarginUnits.Desktop}`;
	const titleTabletMargin = `${pricingTitleTabletMargin.top}${pricingTitleMarginUnits.Tablet} ${pricingTitleTabletMargin.right}${pricingTitleMarginUnits.Tablet} ${pricingTitleTabletMargin.bottom}${pricingTitleMarginUnits.Tablet} ${pricingTitleTabletMargin.left}${pricingTitleMarginUnits.Tablet}`;
	const titleMobileMargin = `${pricingTitleMobileMargin.top}${pricingTitleMarginUnits.Mobile} ${pricingTitleMobileMargin.right}${pricingTitleMarginUnits.Mobile} ${pricingTitleMobileMargin.bottom}${pricingTitleMarginUnits.Mobile} ${pricingTitleMobileMargin.left}${pricingTitleMarginUnits.Mobile}`;
	/** End Title Margin */

	/** Start Sub Title padding */
	const handleSubtitlePaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( pricingSubtitlePaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						pricingSubtitleDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						pricingSubtitleTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						pricingSubtitleMobilePadding: {
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
					setAttributes( {pricingSubtitleDesktopPadding: {...pricingSubtitleDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {pricingSubtitleTabletPadding: {...pricingSubtitleTabletPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {pricingSubtitleMobilePadding: {...pricingSubtitleMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleSubtitlePaddingCombineBtn = () => {
		setAttributes( {pricingSubtitlePaddingLink: !pricingSubtitlePaddingLink} );
	}

	const handleSubtitlePaddingUnitsHandler = (unit) => {
		setAttributes( {
			pricingSubtitlePaddingUnits: {
				...pricingSubtitlePaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const subtitleDesktopPadding = `${pricingSubtitleDesktopPadding.top}${pricingSubtitlePaddingUnits.Desktop} ${pricingSubtitleDesktopPadding.right}${pricingSubtitlePaddingUnits.Desktop} ${pricingSubtitleDesktopPadding.bottom}${pricingSubtitlePaddingUnits.Desktop} ${pricingSubtitleDesktopPadding.left}${pricingSubtitlePaddingUnits.Desktop}`;
	const subtitleTabletPadding = `${pricingSubtitleTabletPadding.top}${pricingSubtitlePaddingUnits.Tablet} ${pricingSubtitleTabletPadding.right}${pricingSubtitlePaddingUnits.Tablet} ${pricingSubtitleTabletPadding.bottom}${pricingSubtitlePaddingUnits.Tablet} ${pricingSubtitleTabletPadding.left}${pricingSubtitlePaddingUnits.Tablet}`;
	const subtitleMobilePadding = `${pricingSubtitleMobilePadding.top}${pricingSubtitlePaddingUnits.Mobile} ${pricingSubtitleMobilePadding.right}${pricingSubtitlePaddingUnits.Mobile} ${pricingSubtitleMobilePadding.bottom}${pricingSubtitlePaddingUnits.Mobile} ${pricingSubtitleMobilePadding.left}${pricingSubtitlePaddingUnits.Mobile}`;
	/** End Sub Title Padding */

	/** Start Sub Title Margin */
	const handleSubtitleMarginUnitChange = ( event, position ) => {
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
	const subtitleDesktopMargin = `${pricingSubtitleDesktopMargin.top}${pricingSubtitleMarginUnits.Desktop} ${pricingSubtitleDesktopMargin.right}${pricingSubtitleMarginUnits.Desktop} ${pricingSubtitleDesktopMargin.bottom}${pricingSubtitleMarginUnits.Desktop} ${pricingSubtitleDesktopMargin.left}${pricingSubtitleMarginUnits.Desktop}`;
	const subtitleTabletMargin = `${pricingSubtitleTabletMargin.top}${pricingSubtitleMarginUnits.Tablet} ${pricingSubtitleTabletMargin.right}${pricingSubtitleMarginUnits.Tablet} ${pricingSubtitleTabletMargin.bottom}${pricingSubtitleMarginUnits.Tablet} ${pricingSubtitleTabletMargin.left}${pricingSubtitleMarginUnits.Tablet}`;
	const subtitleMobileMargin = `${pricingSubtitleMobileMargin.top}${pricingSubtitleMarginUnits.Mobile} ${pricingSubtitleMobileMargin.right}${pricingSubtitleMarginUnits.Mobile} ${pricingSubtitleMobileMargin.bottom}${pricingSubtitleMarginUnits.Mobile} ${pricingSubtitleMobileMargin.left}${pricingSubtitleMarginUnits.Mobile}`;
	/** End Sub Title Margin */

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
	const priceIconDesktopBorderWidthValue = `${priceIconBorderDesktop.top}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.right}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.bottom}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.left}${priceIconBorderUnits.Desktop}`;
	const priceIconTabletBorderWidthValue = `${priceIconBorderTablet.top}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.right}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.bottom}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.left}${priceIconBorderUnits.Tablet}`;
	const priceIconMobileBorderWidthValue = `${priceIconBorderMobile.top}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.right}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.bottom}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.left}${priceIconBorderUnits.Mobile}`;
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
	const priceIconDesktopBorderRadiusWidthValue = `${priceIconBorderRadiusDesktop.top}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.right}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.bottom}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.left}${priceIconBorderRadiusUnits.Desktop}`;
	const priceIconTabletBorderRadiusWidthValue = `${priceIconBorderRadiusTablet.top}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.right}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.bottom}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.left}${priceIconBorderRadiusUnits.Tablet}`;
	const priceIconMobileBorderRadiusWidthValue = `${priceIconBorderRadiusMobile.top}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.right}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.bottom}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.left}${priceIconBorderRadiusUnits.Mobile}`;
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
	const priceButtonDesktopPaddingValue = `${priceButtonDesktopPadding.top}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.right}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.bottom}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.left}${priceButtonPaddingUnits.Desktop}`;
	const priceButtonTabletPaddingValue = `${priceButtonTabPadding.top}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.right}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.bottom}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.left}${priceButtonPaddingUnits.Tablet}`;
	const priceButtonMobilePaddingValue = `${priceButtonMobilePadding.top}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.right}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.bottom}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.left}${priceButtonPaddingUnits.Mobile}`;
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

	const priceButtonDesktopMarginValue = `${priceButtonDesktopMargin.top}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.right}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.bottom}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.left}${priceButtonMarginUnits.Desktop}`;
	const priceButtonTabletMarginValue = `${priceButtonTabMargin.top}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.right}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.bottom}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.left}${priceButtonMarginUnits.Tablet}`;
	const priceButtonMobileMarginValue = `${priceButtonMobileMargin.top}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.right}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.bottom}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.left}${priceButtonMarginUnits.Mobile}`;
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
	const priceButtonDesktopBorderWidthValue = `${priceButtonDesktopBorderWidth.top}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.right}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.bottom}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.left}${priceButtonBorderUnits.Desktop}`;
	const priceButtonTabletBorderWidthValue = `${priceButtonTabBorderWidth.top}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.right}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.bottom}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.left}${priceButtonBorderUnits.Tablet}`;
	const priceButtonMobileBorderWidthValue = `${priceButtonMobileBorderWidth.top}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.right}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.bottom}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.left}${priceButtonBorderUnits.Mobile}`;
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

	/** End Pricing Button Border Radius */
	const priceButtonDesktopBorderRadiusWidthValue = `${priceButtonDesktopBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Desktop}`;
	const priceButtonTabletBorderRadiusWidthValue = `${priceButtonTabBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Tablet}`;
	const priceButtonMobileBorderRadiusWidthValue = `${priceButtonMobileBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Mobile}`;
	/** End Pricing Button Border Radius */

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
	const globalDesktopPadding    = `${priceGlobalPaddingDesktop.top}${priceGlobalPaddingUnits.Desktop} ${priceGlobalPaddingDesktop.right}${priceGlobalPaddingUnits.Desktop} ${priceGlobalPaddingDesktop.bottom}${priceGlobalPaddingUnits.Desktop} ${priceGlobalPaddingDesktop.left}${priceGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${priceGlobalPaddingTablet.top}${priceGlobalPaddingUnits.Tablet} ${priceGlobalPaddingTablet.right}${priceGlobalPaddingUnits.Tablet} ${priceGlobalPaddingTablet.bottom}${priceGlobalPaddingUnits.Tablet} ${priceGlobalPaddingTablet.left}${priceGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${priceGlobalPaddingMobile.top}${priceGlobalPaddingUnits.Mobile} ${priceGlobalPaddingMobile.right}${priceGlobalPaddingUnits.Mobile} ${priceGlobalPaddingMobile.bottom}${priceGlobalPaddingUnits.Mobile} ${priceGlobalPaddingMobile.left}${priceGlobalPaddingUnits.Mobile}`;
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

	const globalDesktopMargin = `${priceGlobalMarginDesktop.top}${priceGlobalMarginUnits.Desktop} ${priceGlobalMarginDesktop.right}${priceGlobalMarginUnits.Desktop} ${priceGlobalMarginDesktop.bottom}${priceGlobalMarginUnits.Desktop} ${priceGlobalMarginDesktop.left}${priceGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${priceGlobalMarginTablet.top}${priceGlobalMarginUnits.Tablet} ${priceGlobalMarginTablet.right}${priceGlobalMarginUnits.Tablet} ${priceGlobalMarginTablet.bottom}${priceGlobalMarginUnits.Tablet} ${priceGlobalMarginTablet.left}${priceGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${priceGlobalMarginMobile.top}${priceGlobalMarginUnits.Mobile} ${priceGlobalMarginMobile.right}${priceGlobalMarginUnits.Mobile} ${priceGlobalMarginMobile.bottom}${priceGlobalMarginUnits.Mobile} ${priceGlobalMarginMobile.left}${priceGlobalMarginUnits.Mobile}`;
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
	const globalDesktopBorderWidth = `${priceGlobalBorderDesktop.top}${priceGlobalBorderUnits.Desktop} ${priceGlobalBorderDesktop.right}${priceGlobalBorderUnits.Desktop} ${priceGlobalBorderDesktop.bottom}${priceGlobalBorderUnits.Desktop} ${priceGlobalBorderDesktop.left}${priceGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${priceGlobalBorderTablet.top}${priceGlobalBorderUnits.Tablet} ${priceGlobalBorderTablet.right}${priceGlobalBorderUnits.Tablet} ${priceGlobalBorderTablet.bottom}${priceGlobalBorderUnits.Tablet} ${priceGlobalBorderTablet.left}${priceGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${priceGlobalBorderMobile.top}${priceGlobalBorderUnits.Mobile} ${priceGlobalBorderMobile.right}${priceGlobalBorderUnits.Mobile} ${priceGlobalBorderMobile.bottom}${priceGlobalBorderUnits.Mobile} ${priceGlobalBorderMobile.left}${priceGlobalBorderUnits.Mobile}`;
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

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${priceGlobalBorderRadiusDesktop.top}${priceGlobalBorderRadiusUnits.Desktop} ${priceGlobalBorderRadiusDesktop.right}${priceGlobalBorderRadiusUnits.Desktop} ${priceGlobalBorderRadiusDesktop.bottom}${priceGlobalBorderRadiusUnits.Desktop} ${priceGlobalBorderRadiusDesktop.left}${priceGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${priceGlobalBorderRadiusTablet.top}${priceGlobalBorderRadiusUnits.Tablet} ${priceGlobalBorderRadiusTablet.right}${priceGlobalBorderRadiusUnits.Tablet} ${priceGlobalBorderRadiusTablet.bottom}${priceGlobalBorderRadiusUnits.Tablet} ${priceGlobalBorderRadiusTablet.left}${priceGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${priceGlobalBorderRadiusMobile.top}${priceGlobalBorderRadiusUnits.Mobile} ${priceGlobalBorderRadiusMobile.right}${priceGlobalBorderRadiusUnits.Mobile} ${priceGlobalBorderRadiusMobile.bottom}${priceGlobalBorderRadiusUnits.Mobile} ${priceGlobalBorderRadiusMobile.left}${priceGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

	/** Start load font */
	useEffect(() => {
		loadGoogleFont(pricingTopSectionTextFontFamily);
		loadGoogleFont(normalPricingFontFamily);
		loadGoogleFont(salePricingFontFamily);
		loadGoogleFont(priceCurrencyFontFamily);
		loadGoogleFont(pricePeriodFontFamily);
		loadGoogleFont(pricingTitleFontFamily);
		loadGoogleFont(pricingSubtitleFontFamily);
		loadGoogleFont(priceAfterTextFontFamily);
		loadGoogleFont(pricingfeatureTitleFontFamily);
		loadGoogleFont(priceButtonFontFamily);
		loadGoogleFont(priceFeatureAfterTextFontFamily);
	}, [pricingTopSectionTextFontFamily,
		 normalPricingFontFamily, 
		 salePricingFontFamily, 
		 priceCurrencyFontFamily, 
		 pricePeriodFontFamily, 
		 pricingTitleFontFamily, 
		 pricingSubtitleFontFamily, 
		 priceAfterTextFontFamily, 
		 pricingfeatureTitleFontFamily, 
		 priceButtonFontFamily, 
		 priceFeatureAfterTextFontFamily]);
	/** End load font */



	const allBlockStyle = useMemo(() => ` 

		.${blockId}.fb-pricing-area {
			${pricingTablePositionType === 'default' ? `position: relative;` : ''}
			${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' ? `width: 100%;` : ''}
            ${pricingTablePositionType !== 'default' ? `position: ${pricingTablePositionType};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'left' && pricingTableHZLeftOffset.Desktop !== undefined ? `left: ${pricingTableHZLeftOffset.Desktop}${pricingTableHZLeftOffsetUnits.Desktop};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'right' && pricingTableHZRightOffset.Desktop !== undefined ? `right: ${pricingTableHZRightOffset.Desktop}${pricingTableHZRightOffsetUnits.Desktop};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'top' && pricingTableVRTopOffset.Desktop !== undefined ? `top: ${pricingTableVRTopOffset.Desktop}${pricingTableVRTopOffsetUnits.Desktop};` : ''}
            ${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'bottom' && pricingTableVRBottomOffset.Desktop !== undefined ? `bottom: ${pricingTableVRBottomOffset.Desktop}${pricingTableVRBottomOffsetUnits.Desktop};` : ''}
			${priceGlobalZIndex.Desktop ? `z-index: ${priceGlobalZIndex.Desktop};` : ''}
            ${pricingTableOverflow !== 'default' ? `overflow: ${pricingTableOverflow};` : ''}
		}
		.${blockId}.fb-pricing-wrapper.fb-pricing-top-section {
		    ${pricingTopSectionNormalBackgroundType === 'gradient' ? `  
                background: ${pricingTopSectionNormalCustomGradientSwitcher && pricingTopSectionNormalCustomGradientInputValue ? pricingTopSectionNormalCustomGradientInputValue : pricingTopSectionNormalGradientColor};
            `: `
				${pricingTopSectionNormalClassicColor ? `background: ${pricingTopSectionNormalClassicColor};` : ''}
            `}
			${pricingTopSectionBorder ? `border: ${pricingTopSectionBorder};` : ''}
			${pricingTopSectionBorderColor ? `border-color: ${pricingTopSectionBorderColor};` : ''}
			${pricingTopSectionBorderDesktopWidth && pricingTopSectionBorderDesktop.top ? `border-width: ${pricingTopSectionBorderDesktopWidth};` : ''}
			${pricingTopSectionBorderRadiusDesktopWidth && pricingTopSectionBorderRadiusDesktop.top ? `border-radius: ${pricingTopSectionBorderRadiusDesktopWidth};` : ''}
			${pricingTopSectionDesktopPaddingWidth && pricingTopSectionDesktopPadding.top ? `padding: ${pricingTopSectionDesktopPaddingWidth};` : ''}
            transition: all .3s ease-in-out;
		}
		.${blockId}.fb-pricing-wrapper.fb-pricing-top-section:hover {
		    ${pricingTopSectionHoverBackgroundType === 'gradient' ? `  
                background: ${pricingTopSectionHoverCustomGradientSwitcher && pricingTopSectionHoverCustomGradientInputValue ? pricingTopSectionHoverCustomGradientInputValue : pricingTopSectionHoverGradientColor};
            `: `
				${pricingTopSectionHoverClassicColor ? `background: ${pricingTopSectionHoverClassicColor};` : ''}
            `}
			${pricingTopSectionBorderHoverColor ? `border-color: ${pricingTopSectionBorderHoverColor};` : ''}
		}

		.${blockId}.fb-pricing-wrapper.fb-pricing-top-section .fb-pricing-top-wrapper {
			${pricingTopSectionTextColor ? `color: ${pricingTopSectionTextColor};` : ''}

			${pricingTopSectionTextGlobalTypoSwitcher.fontFamily === true && pricingTopSectionTextGlobalTypographyData.fontFamily ? `font-family: ${pricingTopSectionTextGlobalTypographyData.fontFamily};` : ''}
			${pricingTopSectionTextGlobalTypoSwitcher.fontSize === true && pricingTopSectionTextGlobalTypographyData.fontSize ? `font-size: ${pricingTopSectionTextGlobalTypographyData.fontSize};` : ''}
			${pricingTopSectionTextGlobalTypoSwitcher.fontWeight === true && pricingTopSectionTextGlobalTypographyData.fontWeight ? `font-weight: ${pricingTopSectionTextGlobalTypographyData.fontWeight};` : ''}
			${pricingTopSectionTextGlobalTypoSwitcher.fontStyle === true && pricingTopSectionTextGlobalTypographyData.fontStyle ? `font-style: ${pricingTopSectionTextGlobalTypographyData.fontStyle};` : ''}
			${pricingTopSectionTextGlobalTypoSwitcher.textTransform === true && pricingTopSectionTextGlobalTypographyData.textTransform ? `text-transform: ${pricingTopSectionTextGlobalTypographyData.textTransform};` : ''}
			${pricingTopSectionTextGlobalTypoSwitcher.textDecoration === true && pricingTopSectionTextGlobalTypographyData.textDecoration ? `text-decoration: ${pricingTopSectionTextGlobalTypographyData.textDecoration};` : ''}
			${pricingTopSectionTextGlobalTypoSwitcher.letterSpacing === true && pricingTopSectionTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${pricingTopSectionTextGlobalTypographyData.letterSpacing};` : ''}
			${pricingTopSectionTextGlobalTypoSwitcher.lineHeight === true && pricingTopSectionTextGlobalTypographyData.lineHeight ? `line-height: ${pricingTopSectionTextGlobalTypographyData.lineHeight};` : ''}

			${pricingTopSectionTextGlobalTypoSwitcher.fontFamily === false && pricingTopSectionTextFontFamily && pricingTopSectionTextFontFamily !== 'Default' ? `font-family: ${pricingTopSectionTextFontFamily};` : ""}
			${pricingTopSectionTextGlobalTypoSwitcher.fontSize === false && pricingTopSectionTextFontSize.Desktop ? `font-size: ${pricingTopSectionTextFontSize.Desktop}${pricingTopSectionTextFontSizeUnits.Desktop};` : ""}
			${pricingTopSectionTextGlobalTypoSwitcher.fontWeight === false && pricingTopSectionTextFontWeight ? `font-weight: ${pricingTopSectionTextFontWeight};` : ""}
			${pricingTopSectionTextGlobalTypoSwitcher.fontStyle === false && pricingTopSectionTextFontStyle ? `font-style: ${pricingTopSectionTextFontStyle};` : ""}
			${pricingTopSectionTextGlobalTypoSwitcher.textTransform === false && pricingTopSectionTextTextTransform ? `text-transform: ${pricingTopSectionTextTextTransform};` : ""} 
			${pricingTopSectionTextGlobalTypoSwitcher.textDecoration === false && pricingTopSectionTextTextDecoration ? `text-decoration: ${pricingTopSectionTextTextDecoration};` : ""}
			${pricingTopSectionTextGlobalTypoSwitcher.letterSpacing === false && pricingTopSectionTextLetterSpacing.Desktop ? `letter-spacing: ${pricingTopSectionTextLetterSpacing.Desktop}${pricingTopSectionTextLetterSpacingUnits.Desktop};` : ""}
			${pricingTopSectionTextGlobalTypoSwitcher.lineHeight === false && pricingTopSectionTextLineHeight.Desktop ? `line-height: ${pricingTopSectionTextLineHeight.Desktop}${pricingTopSectionTextLineHeightUnits.Desktop};` : ""}
			${pricingTopSectionTextDesktopPaddingWidth && pricingTopSectionTextDesktopPadding.top? `padding: ${pricingTopSectionTextDesktopPaddingWidth};` : ''}
			text-align: center;
			transition: all 0.3s ease;
		}
		.${blockId}.fb-pricing-wrapper.fb-pricing-top-section .fb-pricing-top-wrapper:hover {
			${pricingTopSectionTextHoverColor ? `color: ${pricingTopSectionTextHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-main-wrapper {
			${priceGlobalNormalBackgroundType === 'gradient' ? `  
                background: ${priceGlobalNormalCustomGradientSwitcher && priceGlobalNormalCustomGradientInputValue ? priceGlobalNormalCustomGradientInputValue : priceGlobalNormalGradientColor};
            `: `
				${priceGlobalNormalClassicColor ? `background: ${priceGlobalNormalClassicColor};` : ''}
            `}
			${globalDesktopPadding && priceGlobalPaddingDesktop.top? `padding: ${globalDesktopPadding};` : ''}
			${globalDesktopMargin && priceGlobalMarginDesktop.top? `margin: ${globalDesktopMargin};` : ''}
			${priceGlobalBorder ? `border: ${priceGlobalBorder};` : ''}
			${globalDesktopBorderWidth && priceGlobalBorderDesktop.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
			${globalDesktopBorderRadiusWidth && priceGlobalBorderRadiusDesktop.top? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
			${priceGlobalBorderColor ? `border-color: ${priceGlobalBorderColor};` : ''}
			${priceGlobalBoxShadowCssValue ? `box-shadow: ${priceGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
			position: relative;
		}
		.${blockId} .fb-pricing-main-wrapper:hover {
			${priceGlobalHoverBackgroundType === 'gradient' ? `  
                background: ${priceGlobalHoverCustomGradientSwitcher && priceGlobalHoverCustomGradientInputValue ? priceGlobalHoverCustomGradientInputValue : priceGlobalHoverGradientColor};
            `: `
				${priceGlobalHoverClassicColor ? `background: ${priceGlobalHoverClassicColor};` : ''}
            `}
			${priceGlobalBorderHoverColor ? `border-color: ${priceGlobalBorderHoverColor};` : ''}
			${priceGlobalBoxShadowHoverCssValue ? `box-shadow: ${priceGlobalBoxShadowHoverCssValue};` : ''}
		}
		.${blockId} .fb-pricing-header {
			${pricingHeaderBgColor ? `background-color: ${pricingHeaderBgColor};` : ''}
			${headerDesktopPadding && pricingHeaderDesktopPadding.top? `padding: ${headerDesktopPadding};` : ''}
			${pricingHeaderBorder ? `border: ${pricingHeaderBorder};` : ''}
			${headerDesktopBorderWidth && pricingHeaderBorderDesktop.top ? `border-width: ${headerDesktopBorderWidth};` : ''}
			${headerDesktopBorderRadiusWidth && pricingHeaderBorderRadiusDesktop.top? `border-radius: ${headerDesktopBorderRadiusWidth};` : ''}
			${pricingHeaderBorderColor ? `border-color: ${pricingHeaderBorderColor};` : ''}
            transition: all .3s ease-in-out;
		}
		.${blockId} .fb-pricing-header:hover {
			${pricingHeaderBgHoverColor ? `background-color: ${pricingHeaderBgHoverColor};` : ''}
			${pricingHeaderBorderHoverColor ? `border-color: ${pricingHeaderBorderHoverColor};` : ''}
		}
		.${blockId} .fb-pricing-ribbon-icon {
			${priceIconPositionSwitcher ? 'position: absolute;' : ''}
			${priceIconPositionSwitcher ? `top: ${priceIconPositionTop.Desktop && priceIconPositionTopUnits.Desktop ? `${priceIconPositionTop.Desktop}${priceIconPositionTopUnits.Desktop}` : '0'};` : ''}
			${priceIconPositionSwitcher ? `left: ${priceIconPositionLeft.Desktop && priceIconPositionLeftUnits.Desktop ? `${priceIconPositionLeft.Desktop}${priceIconPositionLeftUnits.Desktop}` : '0'};` : ''}
			${priceIconBgSize.Desktop && priceIconBgSizeUnits.Desktop ? `width: ${priceIconBgSize.Desktop}${priceIconBgSizeUnits.Desktop};` : ''}
			${priceIconBgSize.Desktop && priceIconBgSizeUnits.Desktop ? `height: ${priceIconBgSize.Desktop}${priceIconBgSizeUnits.Desktop};` : ''}
			${priceIconBgColor ? `background-color: ${priceIconBgColor};` : ''}
			${priceIconBorder ? `border: ${priceIconBorder};` : ''}
			${priceIconDesktopBorderWidthValue && priceIconBorderDesktop.top ? `border-width: ${priceIconDesktopBorderWidthValue};` : ''}
			${priceIconDesktopBorderRadiusWidthValue && priceIconBorderRadiusDesktop.top ? `border-radius: ${priceIconDesktopBorderRadiusWidthValue};` : ''}
			${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
            transition: all .3s ease-in-out;
		}
		.${blockId} .fb-pricing-ribbon-icon:hover {
			${priceIconBgHoverColor ? `background-color: ${priceIconBgHoverColor};` : ''}
			${priceIconBorderHoverColor ? `border-color: ${priceIconBorderHoverColor};` : ''}
		}
		.${blockId} .fb-pricing-ribbon-icon svg {
			width: ${priceIconSize.Desktop}${priceIconSizeUnits.Desktop};
			height: ${priceIconSize.Desktop}${priceIconSizeUnits.Desktop};
			fill: ${priceIconColor};
			transition: fill 0.3s ease;
		}
		.${blockId} .fb-pricing-ribbon-icon:hover svg {
			${priceIconHoverColor ? `fill: ${priceIconHoverColor};` : ''}
		}

		.${blockId}	.fb-pricing-price-wrapper {
			${priceDesktopPaddingWidth && priceDesktopPadding.top? `padding: ${priceDesktopPaddingWidth};` : ''}
			text-align: ${pricingAlignment === 'left' ? 'left' : pricingAlignment === 'center' ? 'center' : pricingAlignment === 'right' ? 'right' : 'center'};
		}

		.${blockId} .fb-pricing-price-wrapper .fb-pricing-normal-price {
			${normalPricingColor ? `color: ${normalPricingColor};` : ''}

			${normalPricingGlobalTypoSwitcher.fontFamily === true && normalPricingGlobalTypographyData.fontFamily ? `font-family: ${normalPricingGlobalTypographyData.fontFamily};` : ''}
			${normalPricingGlobalTypoSwitcher.fontSize === true && normalPricingGlobalTypographyData.fontSize ? `font-size: ${normalPricingGlobalTypographyData.fontSize};` : ''}
			${normalPricingGlobalTypoSwitcher.fontWeight === true && normalPricingGlobalTypographyData.fontWeight ? `font-weight: ${normalPricingGlobalTypographyData.fontWeight};` : ''}
			${normalPricingGlobalTypoSwitcher.fontStyle === true && normalPricingGlobalTypographyData.fontStyle ? `font-style: ${normalPricingGlobalTypographyData.fontStyle};` : ''}
			${normalPricingGlobalTypoSwitcher.textTransform === true && normalPricingGlobalTypographyData.textTransform ? `text-transform: ${normalPricingGlobalTypographyData.textTransform};` : ''}
			${normalPricingGlobalTypoSwitcher.textDecoration === true && normalPricingGlobalTypographyData.textDecoration ? `text-decoration: ${normalPricingGlobalTypographyData.textDecoration};` : ''}
			${normalPricingGlobalTypoSwitcher.letterSpacing === true && normalPricingGlobalTypographyData.letterSpacing ? `letter-spacing: ${normalPricingGlobalTypographyData.letterSpacing};` : ''}
			${normalPricingGlobalTypoSwitcher.lineHeight === true && normalPricingGlobalTypographyData.lineHeight ? `line-height: ${normalPricingGlobalTypographyData.lineHeight};` : ''}

			${normalPricingGlobalTypoSwitcher.fontFamily === false && normalPricingFontFamily && normalPricingFontFamily !== 'Default' ? `font-family: ${normalPricingFontFamily};` : ""}
			${normalPricingGlobalTypoSwitcher.fontSize === false && normalPricingFontSize.Desktop ? `font-size: ${normalPricingFontSize.Desktop}${normalPricingFontSizeUnits.Desktop};` : ""}
			${normalPricingGlobalTypoSwitcher.fontWeight === false && normalPricingFontWeight ? `font-weight: ${normalPricingFontWeight};` : ""}
			${normalPricingGlobalTypoSwitcher.fontStyle === false && normalPricingFontStyle ? `font-style: ${normalPricingFontStyle};` : ""}
			${normalPricingGlobalTypoSwitcher.textTransform === false && normalPricingTextTransform ? `text-transform: ${normalPricingTextTransform};` : ""}
			${normalPricingGlobalTypoSwitcher.textDecoration === false && normalPricingTextDecoration ? `text-decoration: ${normalPricingTextDecoration};` : ""}
			${normalPricingGlobalTypoSwitcher.letterSpacing === false && normalPricingLetterSpacing.Desktop ? `letter-spacing: ${normalPricingLetterSpacing.Desktop}${normalPricingLetterSpacingUnits.Desktop};` : ""}
			${normalPricingGlobalTypoSwitcher.lineHeight === false && normalPricingLineHeight.Desktop ? `line-height: ${normalPricingLineHeight.Desktop}${normalPricingLineHeightUnits.Desktop};` : ""}
			transition: all 0.3s ease;
		}
		.${blockId} .fb-pricing-price-wrapper .fb-pricing-normal-price:hover {
			${normalPricingHoverColor ? `color: ${normalPricingHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-price-wrapper .fb-pricing-sale-price {
			${salePricingColor ? `color: ${salePricingColor};` : ''}

			${salePricingGlobalTypoSwitcher.fontFamily === true && salePricingGlobalTypographyData.fontFamily ? `font-family: ${salePricingGlobalTypographyData.fontFamily};` : ''}
			${salePricingGlobalTypoSwitcher.fontSize === true && salePricingGlobalTypographyData.fontSize ? `font-size: ${salePricingGlobalTypographyData.fontSize};` : ''}
			${salePricingGlobalTypoSwitcher.fontWeight === true && salePricingGlobalTypographyData.fontWeight ? `font-weight: ${salePricingGlobalTypographyData.fontWeight};` : ''}
			${salePricingGlobalTypoSwitcher.fontStyle === true && salePricingGlobalTypographyData.fontStyle ? `font-style: ${salePricingGlobalTypographyData.fontStyle};` : ''}
			${salePricingGlobalTypoSwitcher.textTransform === true && salePricingGlobalTypographyData.textTransform ? `text-transform: ${salePricingGlobalTypographyData.textTransform};` : ''}
			${salePricingGlobalTypoSwitcher.textDecoration === true && salePricingGlobalTypographyData.textDecoration ? `text-decoration: ${salePricingGlobalTypographyData.textDecoration};` : ''}
			${salePricingGlobalTypoSwitcher.letterSpacing === true && salePricingGlobalTypographyData.letterSpacing ? `letter-spacing: ${salePricingGlobalTypographyData.letterSpacing};` : ''}
			${salePricingGlobalTypoSwitcher.lineHeight === true && salePricingGlobalTypographyData.lineHeight ? `line-height: ${salePricingGlobalTypographyData.lineHeight};` : ''}

			${salePricingGlobalTypoSwitcher.fontFamily === false && salePricingFontFamily && salePricingFontFamily !== 'Default' ? `font-family: ${salePricingFontFamily};` : ""}
			${salePricingGlobalTypoSwitcher.fontSize === false && salePricingFontSize.Desktop ? `font-size: ${salePricingFontSize.Desktop}${salePricingFontSizeUnits.Desktop};` : ""}
			${salePricingGlobalTypoSwitcher.fontWeight === false && salePricingFontWeight ? `font-weight: ${salePricingFontWeight};` : ""}
			${salePricingGlobalTypoSwitcher.fontStyle === false && salePricingFontStyle ? `font-style: ${salePricingFontStyle};` : ""}
			${salePricingGlobalTypoSwitcher.textTransform === false && salePricingTextTransform ? `text-transform: ${salePricingTextTransform};` : ""}
			${salePricingGlobalTypoSwitcher.textDecoration === false && salePricingTextDecoration ? `text-decoration: ${salePricingTextDecoration};` : ""}
			${salePricingGlobalTypoSwitcher.letterSpacing === false && salePricingLetterSpacing.Desktop ? `letter-spacing: ${salePricingLetterSpacing.Desktop}${salePricingLetterSpacingUnits.Desktop};` : ""}
			${salePricingGlobalTypoSwitcher.lineHeight === false && salePricingLineHeight.Desktop ? `line-height: ${salePricingLineHeight.Desktop}${salePricingLineHeightUnits.Desktop};` : ""}
			transition: all 0.3s ease;
		}
		.${blockId} .fb-pricing-price-wrapper .fb-pricing-sale-price:hover {
			${salePricingHoverColor ? `color: ${salePricingHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-price-wrapper .price-currency {
			${priceCurrencyColor ? `color: ${priceCurrencyColor};` : ''}

			${priceCurrencyGlobalTypoSwitcher.fontFamily === true && priceCurrencyGlobalTypographyData.fontFamily ? `font-family: ${priceCurrencyGlobalTypographyData.fontFamily};` : ''}
			${priceCurrencyGlobalTypoSwitcher.fontSize === true && priceCurrencyGlobalTypographyData.fontSize ? `font-size: ${priceCurrencyGlobalTypographyData.fontSize};` : ''}
			${priceCurrencyGlobalTypoSwitcher.fontWeight === true && priceCurrencyGlobalTypographyData.fontWeight ? `font-weight: ${priceCurrencyGlobalTypographyData.fontWeight};` : ''}
			${priceCurrencyGlobalTypoSwitcher.fontStyle === true && priceCurrencyGlobalTypographyData.fontStyle ? `font-style: ${priceCurrencyGlobalTypographyData.fontStyle};` : ''}
			${priceCurrencyGlobalTypoSwitcher.textTransform === true && priceCurrencyGlobalTypographyData.textTransform ? `text-transform: ${priceCurrencyGlobalTypographyData.textTransform};` : ''}
			${priceCurrencyGlobalTypoSwitcher.textDecoration === true && priceCurrencyGlobalTypographyData.textDecoration ? `text-decoration: ${priceCurrencyGlobalTypographyData.textDecoration};` : ''}
			${priceCurrencyGlobalTypoSwitcher.letterSpacing === true && priceCurrencyGlobalTypographyData.letterSpacing ? `letter-spacing: ${priceCurrencyGlobalTypographyData.letterSpacing};` : ''}
			${priceCurrencyGlobalTypoSwitcher.lineHeight === true && priceCurrencyGlobalTypographyData.lineHeight ? `line-height: ${priceCurrencyGlobalTypographyData.lineHeight};` : ''}

			${priceCurrencyGlobalTypoSwitcher.fontFamily === false && priceCurrencyFontFamily && priceCurrencyFontFamily !== 'Default' ? `font-family: ${priceCurrencyFontFamily};` : ""}
			${priceCurrencyGlobalTypoSwitcher.fontSize === false && priceCurrencyFontSize.Desktop ? `font-size: ${priceCurrencyFontSize.Desktop}${priceCurrencyFontSizeUnits.Desktop};` : ""}
			${priceCurrencyGlobalTypoSwitcher.fontWeight === false && priceCurrencyFontWeight ? `font-weight: ${priceCurrencyFontWeight};` : ""}
			${priceCurrencyGlobalTypoSwitcher.fontStyle === false && priceCurrencyFontStyle ? `font-style: ${priceCurrencyFontStyle};` : ""}
			${priceCurrencyGlobalTypoSwitcher.textTransform === false && priceCurrencyTextTransform ? `text-transform: ${priceCurrencyTextTransform};` : ""}
			${priceCurrencyGlobalTypoSwitcher.textDecoration === false && priceCurrencyTextDecoration ? `text-decoration: ${priceCurrencyTextDecoration};` : ""}
			${priceCurrencyGlobalTypoSwitcher.letterSpacing === false && priceCurrencyLetterSpacing.Desktop ? `letter-spacing: ${priceCurrencyLetterSpacing.Desktop}${priceCurrencyLetterSpacingUnits.Desktop};` : ""}
			${priceCurrencyGlobalTypoSwitcher.lineHeight === false && priceCurrencyLineHeight.Desktop ? `line-height: ${priceCurrencyLineHeight.Desktop}${priceCurrencyLineHeightUnits.Desktop};` : ""}
			transition: all 0.3s ease;
		}
		.${blockId} .fb-pricing-price-wrapper .price-currency:hover {
			${priceCurrencyHoverColor ? `color: ${priceCurrencyHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-price-wrapper .price-period {
			${pricePeriodColor ? `color: ${pricePeriodColor};` : ''}

			${pricePeriodGlobalTypoSwitcher.fontFamily === true && pricePeriodGlobalTypographyData.fontFamily ? `font-family: ${pricePeriodGlobalTypographyData.fontFamily};` : ''}
			${pricePeriodGlobalTypoSwitcher.fontSize === true && pricePeriodGlobalTypographyData.fontSize ? `font-size: ${pricePeriodGlobalTypographyData.fontSize};` : ''}
			${pricePeriodGlobalTypoSwitcher.fontWeight === true && pricePeriodGlobalTypographyData.fontWeight ? `font-weight: ${pricePeriodGlobalTypographyData.fontWeight};` : ''}
			${pricePeriodGlobalTypoSwitcher.fontStyle === true && pricePeriodGlobalTypographyData.fontStyle ? `font-style: ${pricePeriodGlobalTypographyData.fontStyle};` : ''}
			${pricePeriodGlobalTypoSwitcher.textTransform === true && pricePeriodGlobalTypographyData.textTransform ? `text-transform: ${pricePeriodGlobalTypographyData.textTransform};` : ''}
			${pricePeriodGlobalTypoSwitcher.textDecoration === true && pricePeriodGlobalTypographyData.textDecoration ? `text-decoration: ${pricePeriodGlobalTypographyData.textDecoration};` : ''}
			${pricePeriodGlobalTypoSwitcher.letterSpacing === true && pricePeriodGlobalTypographyData.letterSpacing ? `letter-spacing: ${pricePeriodGlobalTypographyData.letterSpacing};` : ''}
			${pricePeriodGlobalTypoSwitcher.lineHeight === true && pricePeriodGlobalTypographyData.lineHeight ? `line-height: ${pricePeriodGlobalTypographyData.lineHeight};` : ''}

			${pricePeriodGlobalTypoSwitcher.fontFamily === false && pricePeriodFontFamily && pricePeriodFontFamily !== 'Default' ? `font-family: ${pricePeriodFontFamily};` : ""}
			${pricePeriodGlobalTypoSwitcher.fontSize === false && pricePeriodFontSize.Desktop ? `font-size: ${pricePeriodFontSize.Desktop}${pricePeriodFontSizeUnits.Desktop};` : ""}
			${pricePeriodGlobalTypoSwitcher.fontWeight === false && pricePeriodFontWeight ? `font-weight: ${pricePeriodFontWeight};` : ""}
			${pricePeriodGlobalTypoSwitcher.fontStyle === false && pricePeriodFontStyle ? `font-style: ${pricePeriodFontStyle};` : ""}
			${pricePeriodGlobalTypoSwitcher.textTransform === false && pricePeriodTextTransform ? `text-transform: ${pricePeriodTextTransform};` : ""}
			${pricePeriodGlobalTypoSwitcher.textDecoration === false && pricePeriodTextDecoration ? `text-decoration: ${pricePeriodTextDecoration};` : ""}
			${pricePeriodGlobalTypoSwitcher.letterSpacing === false && pricePeriodLetterSpacing.Desktop ? `letter-spacing: ${pricePeriodLetterSpacing.Desktop}${pricePeriodLetterSpacingUnits.Desktop};` : ""}
			${pricePeriodGlobalTypoSwitcher.lineHeight === false && pricePeriodLineHeight.Desktop ? `line-height: ${pricePeriodLineHeight.Desktop}${pricePeriodLineHeightUnits.Desktop};` : ""}
			transition: all 0.3s ease;
		}
		.${blockId} .fb-pricing-price-wrapper .price-period:hover {
			${pricePeriodHoverColor ? `color: ${pricePeriodHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-title {
			${pricingTitleColor ? `color: ${pricingTitleColor};` : ''}

			${pricingTitleGlobalTypoSwitcher.fontFamily === true && pricingTitleGlobalTypographyData.fontFamily ? `font-family: ${pricingTitleGlobalTypographyData.fontFamily};` : ''}
			${pricingTitleGlobalTypoSwitcher.fontSize === true && pricingTitleGlobalTypographyData.fontSize ? `font-size: ${pricingTitleGlobalTypographyData.fontSize};` : ''}
			${pricingTitleGlobalTypoSwitcher.fontWeight === true && pricingTitleGlobalTypographyData.fontWeight ? `font-weight: ${pricingTitleGlobalTypographyData.fontWeight};` : ''}
			${pricingTitleGlobalTypoSwitcher.fontStyle === true && pricingTitleGlobalTypographyData.fontStyle ? `font-style: ${pricingTitleGlobalTypographyData.fontStyle};` : ''}
			${pricingTitleGlobalTypoSwitcher.textTransform === true && pricingTitleGlobalTypographyData.textTransform ? `text-transform: ${pricingTitleGlobalTypographyData.textTransform};` : ''}
			${pricingTitleGlobalTypoSwitcher.textDecoration === true && pricingTitleGlobalTypographyData.textDecoration ? `text-decoration: ${pricingTitleGlobalTypographyData.textDecoration};` : ''}
			${pricingTitleGlobalTypoSwitcher.letterSpacing === true && pricingTitleGlobalTypographyData.letterSpacing ? `letter-spacing: ${pricingTitleGlobalTypographyData.letterSpacing};` : ''}
			${pricingTitleGlobalTypoSwitcher.lineHeight === true && pricingTitleGlobalTypographyData.lineHeight ? `line-height: ${pricingTitleGlobalTypographyData.lineHeight};` : ''}

			${pricingTitleGlobalTypoSwitcher.fontFamily === false && pricingTitleFontFamily && pricingTitleFontFamily !== 'Default' ? `font-family: ${pricingTitleFontFamily};` : ''}
			${pricingTitleGlobalTypoSwitcher.fontSize === false && pricingTitleFontSize.Desktop ? `font-size: ${pricingTitleFontSize.Desktop}${pricingTitleFontSizeUnits.Desktop};` : ''}
			${pricingTitleGlobalTypoSwitcher.fontWeight === false && pricingTitleFontWeight ? `font-weight: ${pricingTitleFontWeight};` : ''}
			${pricingTitleGlobalTypoSwitcher.fontStyle === false && pricingTitleFontStyle ? `font-style: ${pricingTitleFontStyle};` : ''}
			${pricingTitleGlobalTypoSwitcher.textTransform === false && pricingTitleTextTransform ? `text-transform: ${pricingTitleTextTransform};` : ''}
			${pricingTitleGlobalTypoSwitcher.textDecoration === false && pricingTitleTextDecoration ? `text-decoration: ${pricingTitleTextDecoration};` : ''}
			${pricingTitleGlobalTypoSwitcher.letterSpacing === false && pricingTitleLetterSpacing.Desktop ? `letter-spacing: ${pricingTitleLetterSpacing.Desktop}${pricingTitleLetterSpacingUnits.Desktop};` : ''}
			${pricingTitleGlobalTypoSwitcher.lineHeight === false && pricingTitleLineHeight.Desktop ? `line-height: ${pricingTitleLineHeight.Desktop}${pricingTitleLineHeightUnits.Desktop};` : ''}

			${titleDesktopPadding && pricingTitleDesktopPadding.top? `padding: ${titleDesktopPadding};` : ''}
			${titleDesktopMargin && pricingTitleDesktopMargin.top? `margin: ${titleDesktopMargin};` : ''}
			transition: all 0.3s ease;

		}
		.${blockId} .fb-pricing-title:hover {
			${pricingTitleHoverColor ? `color: ${pricingTitleHoverColor};` : ''}
		}
		.${blockId} .fb-pricing-subtitle {
			${pricingSubtitleColor ? `color: ${pricingSubtitleColor};` : ''}

			${pricingSubtitleGlobalTypoSwitcher.fontFamily === true && pricingSubtitleGlobalTypographyData.fontFamily ? `font-family: ${pricingSubtitleGlobalTypographyData.fontFamily};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.fontSize === true && pricingSubtitleGlobalTypographyData.fontSize ? `font-size: ${pricingSubtitleGlobalTypographyData.fontSize};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.fontWeight === true && pricingSubtitleGlobalTypographyData.fontWeight ? `font-weight: ${pricingSubtitleGlobalTypographyData.fontWeight};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.fontStyle === true && pricingSubtitleGlobalTypographyData.fontStyle ? `font-style: ${pricingSubtitleGlobalTypographyData.fontStyle};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.textTransform === true && pricingSubtitleGlobalTypographyData.textTransform ? `text-transform: ${pricingSubtitleGlobalTypographyData.textTransform};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.textDecoration === true && pricingSubtitleGlobalTypographyData.textDecoration ? `text-decoration: ${pricingSubtitleGlobalTypographyData.textDecoration};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.letterSpacing === true && pricingSubtitleGlobalTypographyData.letterSpacing ? `letter-spacing: ${pricingSubtitleGlobalTypographyData.letterSpacing};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.lineHeight === true && pricingSubtitleGlobalTypographyData.lineHeight ? `line-height: ${pricingSubtitleGlobalTypographyData.lineHeight};` : ''}

			${pricingSubtitleGlobalTypoSwitcher.fontFamily === false && pricingSubtitleFontFamily && pricingSubtitleFontFamily !== 'Default' ? `font-family: ${pricingSubtitleFontFamily};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.fontSize === false && pricingSubtitleFontSize.Desktop ? `font-size: ${pricingSubtitleFontSize.Desktop}${pricingSubtitleFontSizeUnits.Desktop};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.fontWeight === false && pricingSubtitleFontWeight ? `font-weight: ${pricingSubtitleFontWeight};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.fontStyle === false && pricingSubtitleFontStyle ? `font-style: ${pricingSubtitleFontStyle};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.textTransform === false && pricingSubtitleTextTransform ? `text-transform: ${pricingSubtitleTextTransform};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.textDecoration === false && pricingSubtitleTextDecoration ? `text-decoration: ${pricingSubtitleTextDecoration};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.letterSpacing === false && pricingSubtitleLetterSpacing.Desktop ? `letter-spacing: ${pricingSubtitleLetterSpacing.Desktop}${pricingSubtitleLetterSpacingUnits.Desktop};` : ''}
			${pricingSubtitleGlobalTypoSwitcher.lineHeight === false && pricingSubtitleLineHeight.Desktop ? `line-height: ${pricingSubtitleLineHeight.Desktop}${pricingSubtitleLineHeightUnits.Desktop};` : ''}

			${subtitleDesktopPadding && pricingSubtitleDesktopPadding.top? `padding: ${subtitleDesktopPadding};` : ''}
			${subtitleDesktopMargin && pricingSubtitleDesktopMargin.top? `margin: ${subtitleDesktopMargin};` : ''}
			transition: all 0.3s ease;
		}
		.${blockId} .fb-pricing-subtitle:hover {
			${pricingSubtitleHoverColor ? `color: ${pricingSubtitleHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-after-text {
			${priceAfterTextGlobalTypoSwitcher.fontFamily === true && priceAfterTextGlobalTypographyData.fontFamily ? `font-family: ${priceAfterTextGlobalTypographyData.fontFamily};` : ''}
			${priceAfterTextGlobalTypoSwitcher.fontSize === true && priceAfterTextGlobalTypographyData.fontSize ? `font-size: ${priceAfterTextGlobalTypographyData.fontSize};` : ''}
			${priceAfterTextGlobalTypoSwitcher.fontWeight === true && priceAfterTextGlobalTypographyData.fontWeight ? `font-weight: ${priceAfterTextGlobalTypographyData.fontWeight};` : ''}
			${priceAfterTextGlobalTypoSwitcher.fontStyle === true && priceAfterTextGlobalTypographyData.fontStyle ? `font-style: ${priceAfterTextGlobalTypographyData.fontStyle};` : ''}
			${priceAfterTextGlobalTypoSwitcher.textTransform === true && priceAfterTextGlobalTypographyData.textTransform ? `text-transform: ${priceAfterTextGlobalTypographyData.textTransform};` : ''}
			${priceAfterTextGlobalTypoSwitcher.textDecoration === true && priceAfterTextGlobalTypographyData.textDecoration ? `text-decoration: ${priceAfterTextGlobalTypographyData.textDecoration};` : ''}
			${priceAfterTextGlobalTypoSwitcher.letterSpacing === true && priceAfterTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${priceAfterTextGlobalTypographyData.letterSpacing};` : ''}
			${priceAfterTextGlobalTypoSwitcher.lineHeight === true && priceAfterTextGlobalTypographyData.lineHeight ? `line-height: ${priceAfterTextGlobalTypographyData.lineHeight};` : ''}
			
			${priceAfterTextGlobalTypoSwitcher.fontFamily === false && priceAfterTextFontFamily && priceAfterTextFontFamily !== 'Default' ? `font-family: ${priceAfterTextFontFamily};` : ''}
			${priceAfterTextGlobalTypoSwitcher.fontSize === false && priceAfterTextFontSize.Desktop && priceAfterTextFontSizeUnits.Desktop ? `font-size: ${priceAfterTextFontSize.Desktop}${priceAfterTextFontSizeUnits.Desktop};` : ''}
			${priceAfterTextGlobalTypoSwitcher.fontWeight === false && priceAfterTextFontWeight ? `font-weight: ${priceAfterTextFontWeight};` : ''}
			${priceAfterTextGlobalTypoSwitcher.fontStyle === false && priceAfterTextFontStyle ? `font-style: ${priceAfterTextFontStyle};` : ''}
			${priceAfterTextGlobalTypoSwitcher.textTransform === false && priceAfterTextTextTransform ? `text-transform: ${priceAfterTextTextTransform};` : ''}
			${priceAfterTextGlobalTypoSwitcher.textDecoration === false && priceAfterTextTextDecoration ? `text-decoration: ${priceAfterTextTextDecoration};` : ''}
			${priceAfterTextGlobalTypoSwitcher.letterSpacing === false && priceAfterTextLetterSpacing.Desktop && priceAfterTextLetterSpacingUnits.Desktop ? `letter-spacing: ${priceAfterTextLetterSpacing.Desktop}${priceAfterTextLetterSpacingUnits.Desktop};` : ''}
			${priceAfterTextGlobalTypoSwitcher.lineHeight === false && priceAfterTextLineHeight.Desktop && priceAfterTextLineHeightUnits.Desktop ? `line-height: ${priceAfterTextLineHeight.Desktop}${priceAfterTextLineHeightUnits.Desktop};` : ''}

			${priceAfterTextColor ? `color: ${priceAfterTextColor};` : ''} 

			${priceAfterTextNormalBackgroundType === 'gradient' ? `  
				background: ${priceAfterTextNormalCustomGradientSwitcher && priceAfterTextNormalCustomGradientInputValue ? priceAfterTextNormalCustomGradientInputValue : priceAfterTextNormalGradientColor};
			`: `
				${priceAfterTextNormalClassicColor ? `background: ${priceAfterTextNormalClassicColor};` : ''}
			`}

			${priceAfterTextBorder ? `border: ${priceAfterTextBorder};` : ''}
			${priceAfterTextBorderColor ? `border-color: ${priceAfterTextBorderColor};` : ''}
			${priceAfterTextBorderDesktopWidth && priceAfterTextBorderDesktop.top? `border-width: ${priceAfterTextBorderDesktopWidth};` : ''}
			${priceAfterTextBorderRadiusDesktopWidth && priceAfterTextBorderRadiusDesktop.top? `border-radius: ${priceAfterTextBorderRadiusDesktopWidth};` : ''}
			${priceAfterTextDesktopPaddingWidth && priceAfterTextPaddingDesktop.top ? `padding: ${priceAfterTextDesktopPaddingWidth};` : ''}
			transition: all 0.3s ease;
		}

		.${blockId} .fb-pricing-after-text:hover {
			${priceAfterTextHoverColor ? `color: ${priceAfterTextHoverColor};` : ''}

			${priceAfterTextHoverBackgroundType === 'gradient' ? `  
				background: ${priceAfterTextHoverCustomGradientSwitcher && priceAfterTextHoverCustomGradientInputValue ? priceAfterTextHoverCustomGradientInputValue : priceAfterTextHoverGradientColor};
			`: `
				${priceAfterTextHoverClassicColor ? `background: ${priceAfterTextHoverClassicColor};` : ''}
			`}

			${priceAfterTextBorderHoverColor ? `border-color: ${priceAfterTextBorderHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-features-wrapper {
			${priceFeatureDesktopPaddingWidth && priceFeatureDesktopPadding.top? `padding: ${priceFeatureDesktopPaddingWidth};` : ''}
		}

		.${blockId} .fb-pricing-feature-item {
			${priceFeatureItemDesktopPaddingWidth && priceFeatureItemDesktopPadding.top? `padding: ${priceFeatureItemDesktopPaddingWidth};` : ''}
			${priceFeatureItemDesktopMarginWidth && priceFeatureItemDesktopMargin.top? `margin: ${priceFeatureItemDesktopMarginWidth};` : ''}
			${priceFeatureItemBorder ? `border: ${priceFeatureItemBorder};` : ''}
			${priceFeatureItemBorderColor ? `border-color: ${priceFeatureItemBorderColor};` : ''}
			${priceFeatureItemDesktopBorderWidth && priceFeatureItemDesktopBorder.top? `border-width: ${priceFeatureItemDesktopBorderWidth};` : ''}
			${priceFeatureItemDesktopBorderRadiusWidth && priceFeatureItemDesktopBorderRadius.top? `border-radius: ${priceFeatureItemDesktopBorderRadiusWidth};` : ''}
			transition: all 0.3s ease;
		}
		
		.${blockId} .fb-pricing-feature-item:hover {
			${priceFeatureItemBorderHoverColor ? `border-color: ${priceFeatureItemBorderHoverColor};` : ''}	
		}

		.${blockId} .fb-pricing-feature-item:last-child {
			${priceFeatureItemBorderBottom ? `border-bottom: none;` : ''}
		}

		.${blockId} .fb-pricing-feature-item, .${blockId} .fb-pricing-feature-after-text {
			justify-content: ${priceFeatureAlignment === 'left' ? 'flex-start' : priceFeatureAlignment === 'center' ? 'center' : priceFeatureAlignment === 'right' ? 'flex-end' : 'center'};
		}

		.${blockId} .fb-pricing-feature-after-text { 
			${priceFeatureAfterTextColor ? `color: ${priceFeatureAfterTextColor};` : ''}

			${priceFeatureAfterTextGlobalTypoSwitcher.fontFamily === true && priceFeatureAfterTextGlobalTypographyData.fontFamily ? `font-family: ${priceFeatureAfterTextGlobalTypographyData.fontFamily};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.fontSize === true && priceFeatureAfterTextGlobalTypographyData.fontSize ? `font-size: ${priceFeatureAfterTextGlobalTypographyData.fontSize};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.fontWeight === true && priceFeatureAfterTextGlobalTypographyData.fontWeight ? `font-weight: ${priceFeatureAfterTextGlobalTypographyData.fontWeight};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.fontStyle === true && priceFeatureAfterTextGlobalTypographyData.fontStyle ? `font-style: ${priceFeatureAfterTextGlobalTypographyData.fontStyle};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.textTransform === true && priceFeatureAfterTextGlobalTypographyData.textTransform ? `text-transform: ${priceFeatureAfterTextGlobalTypographyData.textTransform};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.textDecoration === true && priceFeatureAfterTextGlobalTypographyData.textDecoration ? `text-decoration: ${priceFeatureAfterTextGlobalTypographyData.textDecoration};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.letterSpacing === true && priceFeatureAfterTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${priceFeatureAfterTextGlobalTypographyData.letterSpacing};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.lineHeight === true && priceFeatureAfterTextGlobalTypographyData.lineHeight ? `line-height: ${priceFeatureAfterTextGlobalTypographyData.lineHeight};` : ''}

			${priceFeatureAfterTextGlobalTypoSwitcher.fontFamily === false && priceFeatureAfterTextFontFamily && priceFeatureAfterTextFontFamily !== 'Default' ? `font-family: ${priceFeatureAfterTextFontFamily};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.fontSize === false && priceFeatureAfterTextFontSize.Desktop ? `font-size: ${priceFeatureAfterTextFontSize.Desktop}${priceFeatureAfterTextFontSizeUnits.Desktop};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.fontWeight === false && priceFeatureAfterTextFontWeight ? `font-weight: ${priceFeatureAfterTextFontWeight};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.fontStyle === false && priceFeatureAfterTextFontStyle ? `font-style: ${priceFeatureAfterTextFontStyle};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.textTransform === false && priceFeatureAfterTextTextTransform ? `text-transform: ${priceFeatureAfterTextTextTransform};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.textDecoration === false && priceFeatureAfterTextTextDecoration ? `text-decoration: ${priceFeatureAfterTextTextDecoration};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.letterSpacing === false && priceFeatureAfterTextLetterSpacing.Desktop ? `letter-spacing: ${priceFeatureAfterTextLetterSpacing.Desktop}${priceFeatureAfterTextLetterSpacingUnits.Desktop};` : ''}
			${priceFeatureAfterTextGlobalTypoSwitcher.lineHeight === false && priceFeatureAfterTextLineHeight.Desktop ? `line-height: ${priceFeatureAfterTextLineHeight.Desktop}${priceFeatureAfterTextLineHeightUnits.Desktop};` : ''}	
			transition: all 0.3s ease;
		}

		.${blockId} .fb-pricing-feature-after-text:hover {
			${priceFeatureAfterTextHoverColor ? `color: ${priceFeatureAfterTextHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-feature-icon-inner svg {
			width: ${priceFeatureIconSize.Desktop}${priceFeatureIconSizeUnits.Desktop};
			height: ${priceFeatureIconSize.Desktop}${priceFeatureIconSizeUnits.Desktop};
			fill: ${priceFeatureIconColor};
			transition: fill 0.3s ease;
		}
		.${blockId} .fb-pricing-feature-icon-inner:hover svg {
			${priceFeatureIconHoverColor ? `fill: ${priceFeatureIconHoverColor};` : ''}
		}

		.${blockId} .fb-pricing-feature-text {
			${pricingfeatureTitleColor ? `color: ${pricingfeatureTitleColor};` : ''}

			${pricingfeatureTitleGlobalTypoSwitcher.fontFamily === true && pricingfeatureTitleGlobalTypographyData.fontFamily ? `font-family: ${pricingfeatureTitleGlobalTypographyData.fontFamily};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.fontSize === true && pricingfeatureTitleGlobalTypographyData.fontSize ? `font-size: ${pricingfeatureTitleGlobalTypographyData.fontSize};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.fontWeight === true && pricingfeatureTitleGlobalTypographyData.fontWeight ? `font-weight: ${pricingfeatureTitleGlobalTypographyData.fontWeight};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.fontStyle === true && pricingfeatureTitleGlobalTypographyData.fontStyle ? `font-style: ${pricingfeatureTitleGlobalTypographyData.fontStyle};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.textTransform === true && pricingfeatureTitleGlobalTypographyData.textTransform ? `text-transform: ${pricingfeatureTitleGlobalTypographyData.textTransform};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.textDecoration === true && pricingfeatureTitleGlobalTypographyData.textDecoration ? `text-decoration: ${pricingfeatureTitleGlobalTypographyData.textDecoration};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.letterSpacing === true && pricingfeatureTitleGlobalTypographyData.letterSpacing ? `letter-spacing: ${pricingfeatureTitleGlobalTypographyData.letterSpacing};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.lineHeight === true && pricingfeatureTitleGlobalTypographyData.lineHeight ? `line-height: ${pricingfeatureTitleGlobalTypographyData.lineHeight};` : ''}

			${pricingfeatureTitleGlobalTypoSwitcher.fontFamily === false && pricingfeatureTitleFontFamily && pricingfeatureTitleFontFamily !== 'Default' ? `font-family: ${pricingfeatureTitleFontFamily};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.fontSize === false && pricingfeatureTitleFontSize.Desktop ? `font-size: ${pricingfeatureTitleFontSize.Desktop}${pricingfeatureTitleFontSizeUnits.Desktop};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.fontWeight === false && pricingfeatureTitleFontWeight ? `font-weight: ${pricingfeatureTitleFontWeight};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.fontStyle === false && pricingfeatureTitleFontStyle ? `font-style: ${pricingfeatureTitleFontStyle};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.textTransform === false && pricingfeatureTitleTextTransform ? `text-transform: ${pricingfeatureTitleTextTransform};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.textDecoration === false && pricingfeatureTitleTextDecoration ? `text-decoration: ${pricingfeatureTitleTextDecoration};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.letterSpacing === false && pricingfeatureTitleLetterSpacing.Desktop ? `letter-spacing: ${pricingfeatureTitleLetterSpacing.Desktop}${pricingfeatureTitleLetterSpacingUnits.Desktop};` : ''}
			${pricingfeatureTitleGlobalTypoSwitcher.lineHeight === false && pricingfeatureTitleLineHeight.Desktop ? `line-height: ${pricingfeatureTitleLineHeight.Desktop}${pricingfeatureTitleLineHeightUnits.Desktop};` : ''}
			transition: all 0.3s ease;
		}
		.${blockId} .fb-pricing-feature-text:hover {
			${pricingfeatureTitleHoverColor ? `color: ${pricingfeatureTitleHoverColor};` : ''}
		}


		.${blockId} .fb-pricing-button-wrapper {
			justify-content: ${priceButtonAlignment === 'left' ? 'flex-start' : priceButtonAlignment === 'center' ? 'center' : priceButtonAlignment === 'right' ? 'flex-end' : 'center'};
		}

		.${blockId} .fb-pricing-button {
			width: ${priceButtonWidth.Desktop ? `${priceButtonWidth.Desktop}${priceButtonWidthUnits.Desktop}` : 'auto'};

			${priceButtonGlobalTypoSwitcher.fontFamily === true && priceButtonGlobalTypographyData.fontFamily ? `font-family: ${priceButtonGlobalTypographyData.fontFamily};` : ''}
			${priceButtonGlobalTypoSwitcher.fontSize === true && priceButtonGlobalTypographyData.fontSize ? `font-size: ${priceButtonGlobalTypographyData.fontSize};` : ''}
			${priceButtonGlobalTypoSwitcher.fontWeight === true && priceButtonGlobalTypographyData.fontWeight ? `font-weight: ${priceButtonGlobalTypographyData.fontWeight};` : ''}
			${priceButtonGlobalTypoSwitcher.fontStyle === true && priceButtonGlobalTypographyData.fontStyle ? `font-style: ${priceButtonGlobalTypographyData.fontStyle};` : ''}
			${priceButtonGlobalTypoSwitcher.textTransform === true && priceButtonGlobalTypographyData.textTransform ? `text-transform: ${priceButtonGlobalTypographyData.textTransform};` : ''}
			${priceButtonGlobalTypoSwitcher.textDecoration === true && priceButtonGlobalTypographyData.textDecoration ? `text-decoration: ${priceButtonGlobalTypographyData.textDecoration};` : ''}
			${priceButtonGlobalTypoSwitcher.letterSpacing === true && priceButtonGlobalTypographyData.letterSpacing ? `letter-spacing: ${priceButtonGlobalTypographyData.letterSpacing};` : ''}
			${priceButtonGlobalTypoSwitcher.lineHeight === true && priceButtonGlobalTypographyData.lineHeight ? `line-height: ${priceButtonGlobalTypographyData.lineHeight};` : ''}

			${priceButtonGlobalTypoSwitcher.fontFamily === false && priceButtonFontFamily && priceButtonFontFamily !== 'Default' ? `font-family: ${priceButtonFontFamily};` : ''}
			${priceButtonGlobalTypoSwitcher.fontSize === false && priceButtonFontSize.Desktop ? `font-size: ${priceButtonFontSize.Desktop}${priceButtonFontSizeUnits.Desktop};` : ''}
			${priceButtonGlobalTypoSwitcher.fontWeight === false && priceButtonFontWeight ? `font-weight: ${priceButtonFontWeight};` : ''}
			${priceButtonGlobalTypoSwitcher.fontStyle === false && priceButtonFontStyle ? `font-style: ${priceButtonFontStyle};` : ''}
			${priceButtonGlobalTypoSwitcher.textTransform === false && priceButtonTextTransform ? `text-transform: ${priceButtonTextTransform};` : ''}
			${priceButtonGlobalTypoSwitcher.textDecoration === false && priceButtonTextDecoration ? `text-decoration: ${priceButtonTextDecoration};` : ''}
			${priceButtonGlobalTypoSwitcher.letterSpacing === false && priceButtonLetterSpacing.Desktop ? `letter-spacing: ${priceButtonLetterSpacing.Desktop}${priceButtonLetterSpacingUnits.Desktop};` : ''}
			${priceButtonGlobalTypoSwitcher.lineHeight === false && priceButtonLineHeight.Desktop ? `line-height: ${priceButtonLineHeight.Desktop}${priceButtonLineHeightUnits.Desktop};` : ''}
			
			${priceButtonColor ? `color: ${priceButtonColor};` : ''}
			${priceButtonDesktopPaddingValue && priceButtonDesktopPadding.top? `padding: ${priceButtonDesktopPaddingValue};` : ''}
			${priceButtonDesktopMarginValue && priceButtonDesktopMargin.top? `margin: ${priceButtonDesktopMarginValue};` : ''}
			${priceButtonBorder ? `border: ${priceButtonBorder};` : ''}
			${priceButtonBorderColor ? `border-color: ${priceButtonBorderColor};` : ''}
			${priceButtonDesktopBorderWidthValue && priceButtonDesktopBorderWidth.top ? `border-width: ${priceButtonDesktopBorderWidthValue};` : ''}
			${priceButtonDesktopBorderRadiusWidthValue && priceButtonDesktopBorderRadiusWidth.top? `border-radius: ${priceButtonDesktopBorderRadiusWidthValue};` : ''}

			${priceButtonNormalBackgroundType === 'gradient' ? `  
				background: ${priceButtonNormalCustomGradientSwitcher && priceButtonNormalCustomGradientInputValue ? priceButtonNormalCustomGradientInputValue : priceButtonNormalGradientColor};
			`: `
				${priceButtonNormalClassicColor ? `background: ${priceButtonNormalClassicColor};` : ''}
			`}
            transition: all .3s ease-in-out;
		}
		.${blockId} .fb-pricing-button:hover {
			${priceButtonHoverColor ? `color: ${priceButtonHoverColor};` : ''}
			${priceButtonBorderHoverColor ? `border-color: ${priceButtonBorderHoverColor};` : ''}
			${priceButtonHoverBackgroundType === 'gradient' ? `  
				background: ${priceButtonHoverCustomGradientSwitcher && priceButtonHoverCustomGradientInputValue ? priceButtonHoverCustomGradientInputValue : priceButtonHoverGradientColor};
			`: `
				${priceButtonHoverClassicColor ? `background: ${priceButtonHoverClassicColor};` : ''}
			`}
		}
		.${blockId} .fb-pricing-button.fb-button-icon-left .fb-pricing-button-icon {
			margin-right: ${priceButtonIconSpacing.Desktop}${priceButtonIconSpacingUnits.Desktop};
		}
		.${blockId} .fb-pricing-button.fb-button-icon-right .fb-pricing-button-icon {
			margin-left: ${priceButtonIconSpacing.Desktop}${priceButtonIconSpacingUnits.Desktop};
		}

		.${blockId} .fb-pricing-button-icon svg {
			width: ${priceButtonIconSize.Desktop}${priceButtonIconSizeUnits.Desktop};
			height: ${priceButtonIconSize.Desktop}${priceButtonIconSizeUnits.Desktop};
			fill: ${priceButtonIconColor};
			transition: fill 0.3s ease;
		}
		.${blockId} .fb-pricing-button-icon:hover svg {
			${priceButtonIconHoverColor ? `fill: ${priceButtonIconHoverColor};` : ''}
		}

		@media only screen and (max-width: 1024px) {

			.${blockId}.fb-pricing-area {
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'left' && pricingTableHZLeftOffset.Tablet !== undefined ? `left: ${pricingTableHZLeftOffset.Tablet}${pricingTableHZLeftOffsetUnits.Tablet};` : ''}
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'right' && pricingTableHZRightOffset.Tablet !== undefined ? `right: ${pricingTableHZRightOffset.Tablet}${pricingTableHZRightOffsetUnits.Tablet};` : ''}
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'top' && pricingTableVRTopOffset.Tablet !== undefined ? `top: ${pricingTableVRTopOffset.Tablet}${pricingTableVRTopOffsetUnits.Tablet};` : ''}
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'bottom' && pricingTableVRBottomOffset.Tablet !== undefined ? `bottom: ${pricingTableVRBottomOffset.Tablet}${pricingTableVRBottomOffsetUnits.Tablet};` : ''}
				${priceGlobalZIndex.Tablet ? `z-index: ${priceGlobalZIndex.Tablet};` : ''}
			}
			.${blockId}.fb-pricing-wrapper.fb-pricing-top-section {
				${pricingTopSectionNormalBackgroundType === 'gradient' ? `  
					background: ${pricingTopSectionNormalCustomGradientSwitcher && pricingTopSectionNormalCustomGradientInputValue ? pricingTopSectionNormalCustomGradientInputValue : pricingTopSectionNormalGradientColor};
				`: `
					${pricingTopSectionNormalClassicColor ? `background: ${pricingTopSectionNormalClassicColor};` : ''}
				`}
				${pricingTopSectionBorder ? `border: ${pricingTopSectionBorder};` : ''}
				${pricingTopSectionBorderColor ? `border-color: ${pricingTopSectionBorderColor};` : ''}
				${pricingTopSectionBorderTabletWidth && pricingTopSectionBorderTablet.top ? `border-width: ${pricingTopSectionBorderTabletWidth};` : ''}
				${pricingTopSectionBorderRadiusTabletWidth && pricingTopSectionBorderRadiusTablet.top? `border-radius: ${pricingTopSectionBorderRadiusTabletWidth};` : ''}
				${pricingTopSectionTabletPaddingWidth && pricingTopSectionTabletPadding.top? `padding: ${pricingTopSectionTabletPaddingWidth};` : ''}
            	transition: all .3s ease-in-out;
			}
			.${blockId}.fb-pricing-wrapper.fb-pricing-top-section:hover {
				${pricingTopSectionHoverBackgroundType === 'gradient' ? `  
					background: ${pricingTopSectionHoverCustomGradientSwitcher && pricingTopSectionHoverCustomGradientInputValue ? pricingTopSectionHoverCustomGradientInputValue : pricingTopSectionHoverGradientColor};
				`: `
					${pricingTopSectionHoverClassicColor ? `background: ${pricingTopSectionHoverClassicColor};` : ''}
				`}
				${pricingTopSectionBorderHoverColor ? `border-color: ${pricingTopSectionBorderHoverColor};` : ''}
			}

			.${blockId}.fb-pricing-wrapper.fb-pricing-top-section .fb-pricing-top-wrapper {
				${pricingTopSectionTextGlobalTypoSwitcher.fontSize === false && pricingTopSectionTextFontSize.Tablet ? `font-size: ${pricingTopSectionTextFontSize.Tablet}${pricingTopSectionTextFontSizeUnits.Tablet};` : ""}
				${pricingTopSectionTextGlobalTypoSwitcher.letterSpacing === false && pricingTopSectionTextLetterSpacing.Tablet ? `letter-spacing: ${pricingTopSectionTextLetterSpacing.Tablet}${pricingTopSectionTextLetterSpacingUnits.Tablet};` : ""}
				${pricingTopSectionTextGlobalTypoSwitcher.lineHeight === false && pricingTopSectionTextLineHeight.Tablet ? `line-height: ${pricingTopSectionTextLineHeight.Tablet}${pricingTopSectionTextLineHeightUnits.Tablet};` : ""}
				${pricingTopSectionTextTabletPaddingWidth && pricingTopSectionTextTabletPadding.top? `padding: ${pricingTopSectionTextTabletPaddingWidth};` : ''}
				text-align: center;
			}

			.${blockId} .fb-pricing-main-wrapper {
				${priceGlobalNormalBackgroundType === 'gradient' ? `  
					background: ${priceGlobalNormalCustomGradientSwitcher && priceGlobalNormalCustomGradientInputValue ? priceGlobalNormalCustomGradientInputValue : priceGlobalNormalGradientColor};
				`: `
					${priceGlobalNormalClassicColor ? `background: ${priceGlobalNormalClassicColor};` : ''}
				`}
				${globalTabletPadding && priceGlobalPaddingTablet.top? `padding: ${globalTabletPadding};` : ''}
				${globalTabletMargin && priceGlobalMarginTablet.top? `margin: ${globalTabletMargin};` : ''}
				${priceGlobalBorder ? `border: ${priceGlobalBorder};` : ''}
				${globalTabletBorderWidth && priceGlobalBorderTablet.top ? `border-width: ${globalTabletBorderWidth};` : ''}
				${globalTabletBorderRadiusWidth && priceGlobalBorderRadiusTablet.top? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
				${priceGlobalBorderColor ? `border-color: ${priceGlobalBorderColor};` : ''}
				${priceGlobalBoxShadowCssValue ? `box-shadow: ${priceGlobalBoxShadowCssValue};` : ''}
            	transition: all .3s ease-in-out;
				position: relative;
			}
			.${blockId} .fb-pricing-main-wrapper:hover {
				${priceGlobalHoverBackgroundType === 'gradient' ? `  
					background: ${priceGlobalHoverCustomGradientSwitcher && priceGlobalHoverCustomGradientInputValue ? priceGlobalHoverCustomGradientInputValue : priceGlobalHoverGradientColor};
				`: `
					${priceGlobalHoverClassicColor ? `background: ${priceGlobalHoverClassicColor};` : ''}
				`}
				${priceGlobalBorderHoverColor ? `border-color: ${priceGlobalBorderHoverColor};` : ''}
				${priceGlobalBoxShadowHoverCssValue ? `box-shadow: ${priceGlobalBoxShadowHoverCssValue};` : ''}
			}

			.${blockId}	.fb-pricing-price-wrapper {
				${priceTabletPaddingWidth && priceTabletPadding.top? `padding: ${priceTabletPaddingWidth};` : ''}
				text-align: ${pricingAlignment === 'left' ? 'left' : pricingAlignment === 'center' ? 'center' : pricingAlignment === 'right' ? 'right' : 'center'};
			}

			.${blockId} .fb-pricing-title {
				${pricingTitleGlobalTypoSwitcher.fontSize === false && pricingTitleFontSize.Tablet ? `font-size: ${pricingTitleFontSize.Tablet}${pricingTitleFontSizeUnits.Tablet};` : ''}
				${pricingTitleGlobalTypoSwitcher.letterSpacing === false && pricingTitleLetterSpacing.Tablet ? `letter-spacing: ${pricingTitleLetterSpacing.Tablet}${pricingTitleLetterSpacingUnits.Tablet};` : ''}
				${pricingTitleGlobalTypoSwitcher.lineHeight === false && pricingTitleLineHeight.Tablet ? `line-height: ${pricingTitleLineHeight.Tablet}${pricingTitleLineHeightUnits.Tablet};` : ''}

				${titleTabletPadding && pricingTitleTabletPadding.top? `padding: ${titleTabletPadding};` : ''}
				${titleTabletMargin && pricingTitleTabletMargin.top? `margin: ${titleTabletMargin};` : ''}

			}

			.${blockId} .fb-pricing-subtitle {
				${pricingSubtitleGlobalTypoSwitcher.fontSize === false && pricingSubtitleFontSize.Tablet ? `font-size: ${pricingSubtitleFontSize.Tablet}${pricingSubtitleFontSizeUnits.Tablet};` : ''}
				${pricingSubtitleGlobalTypoSwitcher.letterSpacing === false && pricingSubtitleLetterSpacing.Tablet ? `letter-spacing: ${pricingSubtitleLetterSpacing.Tablet}${pricingSubtitleLetterSpacingUnits.Tablet};` : ''}
				${pricingSubtitleGlobalTypoSwitcher.lineHeight === false && pricingSubtitleLineHeight.Tablet ? `line-height: ${pricingSubtitleLineHeight.Tablet}${pricingSubtitleLineHeightUnits.Tablet};` : ''}

				${subtitleTabletPadding && pricingSubtitleTabletPadding.top? `padding: ${subtitleTabletPadding};` : ''}
				${subtitleTabletMargin && pricingSubtitleTabletMargin.top? `margin: ${subtitleTabletMargin};` : ''}
			}

			.${blockId} .fb-pricing-after-text {
				${priceAfterTextGlobalTypoSwitcher.fontSize === false && priceAfterTextFontSize.Tablet && priceAfterTextFontSizeUnits.Tablet ? `font-size: ${priceAfterTextFontSize.Tablet}${priceAfterTextFontSizeUnits.Tablet};` : ''}
				${priceAfterTextGlobalTypoSwitcher.letterSpacing === false && priceAfterTextLetterSpacing.Tablet && priceAfterTextLetterSpacingUnits.Tablet ? `letter-spacing: ${priceAfterTextLetterSpacing.Tablet}${priceAfterTextLetterSpacingUnits.Tablet};` : ''}
				${priceAfterTextGlobalTypoSwitcher.lineHeight === false && priceAfterTextLineHeight.Tablet && priceAfterTextLineHeightUnits.Tablet ? `line-height: ${priceAfterTextLineHeight.Tablet}${priceAfterTextLineHeightUnits.Tablet};` : ''}
				${priceAfterTextBorderTabletWidth && priceAfterTextBorderTablet.top? `border-width: ${priceAfterTextBorderTabletWidth};` : ''}
				${priceAfterTextBorderRadiusTabletWidth && priceAfterTextBorderRadiusTablet.top? `border-radius: ${priceAfterTextBorderRadiusTabletWidth};` : ''}
				${priceAfterTextTabletPaddingWidth && priceAfterTextPaddingTablet.top ? `padding: ${priceAfterTextTabletPaddingWidth};` : ''}
			}

			.${blockId} .fb-pricing-features-wrapper {
				${priceFeatureTabPaddingWidth && priceFeatureTabPadding.top? `padding: ${priceFeatureTabPaddingWidth};` : ''} 
			}

			.${blockId} .fb-pricing-feature-item {
				${priceFeatureItemTabPaddingWidth && priceFeatureItemTabPadding.top? `padding: ${priceFeatureItemTabPaddingWidth};` : ''}
				${priceFeatureItemTabMarginWidth && priceFeatureItemTabMargin.top? `margin: ${priceFeatureItemTabMarginWidth};` : ''}
				${priceFeatureItemBorder ? `border: ${priceFeatureItemBorder};` : ''}
				${priceFeatureItemBorderColor ? `border-color: ${priceFeatureItemBorderColor};` : ''}
				${priceFeatureItemTabBorderWidth && priceFeatureItemTabBorder.top? `border-width: ${priceFeatureItemTabBorderWidth};` : ''}
				${priceFeatureItemTabBorderRadiusWidth && priceFeatureItemTabBorderRadius.top? `border-radius: ${priceFeatureItemTabBorderRadiusWidth};` : ''} 
			}
			.${blockId} .fb-pricing-feature-item:hover {
				${priceFeatureItemBorderHoverColor ? `border-color: ${priceFeatureItemBorderHoverColor};` : ''}	
			}

			.${blockId} .fb-pricing-feature-item, .${blockId} .fb-pricing-feature-after-text {
				justify-content: ${priceFeatureAlignment === 'left' ? 'flex-start' : priceFeatureAlignment === 'center' ? 'center' : priceFeatureAlignment === 'right' ? 'flex-end' : 'center'};
			}

			.${blockId} .fb-pricing-feature-after-text { 
				${priceFeatureAfterTextGlobalTypoSwitcher.fontSize === false && priceFeatureAfterTextFontSize.Tablet && priceFeatureAfterTextFontSizeUnits.Tablet ? `font-size: ${priceFeatureAfterTextFontSize.Tablet}${priceFeatureAfterTextFontSizeUnits.Tablet};` : ''}
				${priceFeatureAfterTextGlobalTypoSwitcher.letterSpacing === false && priceFeatureAfterTextLetterSpacing.Tablet && priceFeatureAfterTextLetterSpacingUnits.Tablet ? `letter-spacing: ${priceFeatureAfterTextLetterSpacing.Tablet}${priceFeatureAfterTextLetterSpacingUnits.Tablet};` : ''}
				${priceFeatureAfterTextGlobalTypoSwitcher.lineHeight === false && priceFeatureAfterTextLineHeight.Tablet && priceFeatureAfterTextLineHeightUnits.Tablet ? `line-height: ${priceFeatureAfterTextLineHeight.Tablet}${priceFeatureAfterTextLineHeightUnits.Tablet};` : ''}	
			}

			.${blockId} .fb-pricing-feature-after-text:hover {
				${priceFeatureAfterTextHoverColor ? `color: ${priceFeatureAfterTextHoverColor};` : ''}
			}

			.${blockId} .fb-pricing-header {
				${headerTabletPadding && pricingHeaderTabletPadding.top ? `padding: ${headerTabletPadding};` : ''}
				${headerTabletBorderWidth && pricingHeaderBorderTablet.top ? `border-width: ${headerTabletBorderWidth};` : ''}
				${headerTabletBorderRadiusWidth && pricingHeaderBorderRadiusTablet.top? `border-radius: ${headerTabletBorderRadiusWidth};` : ''}
			}
			.${blockId} .fb-pricing-ribbon-icon {
				${priceIconPositionSwitcher ? 'position: absolute;' : ''}
				${priceIconPositionSwitcher ? `top: ${priceIconPositionTop.Tablet && priceIconPositionTopUnits.Tablet ? `${priceIconPositionTop.Tablet}${priceIconPositionTopUnits.Tablet}` : '0'};` : ''}
				${priceIconPositionSwitcher ? `left: ${priceIconPositionLeft.Tablet && priceIconPositionLeftUnits.Tablet ? `${priceIconPositionLeft.Tablet}${priceIconPositionLeftUnits.Tablet}` : '0'};` : ''}
				${priceIconBgSize.Tablet && priceIconBgSizeUnits.Tablet ? `width: ${priceIconBgSize.Tablet}${priceIconBgSizeUnits.Tablet};` : ''}
				${priceIconBgSize.Tablet && priceIconBgSizeUnits.Tablet ? `height: ${priceIconBgSize.Tablet}${priceIconBgSizeUnits.Tablet};` : ''}
				${priceIconBgColor ? `background-color: ${priceIconBgColor};` : ''}
				${priceIconBorder ? `border: ${priceIconBorder};` : ''}
				${priceIconTabletBorderWidthValue && priceIconBorderTablet.top ? `border-width: ${priceIconTabletBorderWidthValue};` : ''}
				${priceIconTabletBorderRadiusWidthValue && priceIconBorderRadiusTablet.top? `border-radius: ${priceIconTabletBorderRadiusWidthValue};` : ''} 
				${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
            	transition: all .3s ease-in-out;
			}
			.${blockId} .fb-pricing-ribbon-icon:hover {
				${priceIconBgHoverColor ? `background-color: ${priceIconBgHoverColor};` : ''}
				${priceIconBorderHoverColor ? `border-color: ${priceIconBorderHoverColor};` : ''}
			}
			.${blockId} .fb-pricing-ribbon-icon svg {
				width: ${priceIconSize.Tablet}${priceIconSizeUnits.Tablet};
				height: ${priceIconSize.Tablet}${priceIconSizeUnits.Tablet};
			}

			.${blockId} .fb-pricing-button {
				width: ${priceButtonWidth.Tablet ? `${priceButtonWidth.Tablet}${priceButtonWidthUnits.Tablet}` : 'auto'}; 
				${priceButtonGlobalTypoSwitcher.fontSize === false && priceButtonFontSize.Tablet ? `font-size: ${priceButtonFontSize.Tablet}${priceButtonFontSizeUnits.Tablet};` : ''}
				${priceButtonGlobalTypoSwitcher.letterSpacing === false && priceButtonLetterSpacing.Tablet ? `letter-spacing: ${priceButtonLetterSpacing.Tablet}${priceButtonLetterSpacingUnits.Tablet};` : ''}
				${priceButtonGlobalTypoSwitcher.lineHeight === false && priceButtonLineHeight.Tablet ? `line-height: ${priceButtonLineHeight.Tablet}${priceButtonLineHeightUnits.Tablet};` : ''}
				${priceButtonTabletPaddingValue && priceButtonTabPadding.top? `padding: ${priceButtonTabletPaddingValue};` : ''}
				${priceButtonTabletMarginValue && priceButtonTabMargin.top? `margin: ${priceButtonTabletMarginValue};` : ''}
				${priceButtonTabletBorderWidthValue && priceButtonTabBorderWidth.top? `border-width: ${priceButtonTabletBorderWidthValue};` : ''}
				${priceButtonTabletBorderRadiusWidthValue && priceButtonTabBorderRadiusWidth.top? `border-radius: ${priceButtonTabletBorderRadiusWidthValue};` : ''}
			}

			.${blockId} .fb-pricing-button.fb-button-icon-left .fb-pricing-button-icon {
				margin-right: ${priceButtonIconSpacing.Tablet}${priceButtonIconSpacingUnits.Tablet};
			}
			.${blockId} .fb-pricing-button.fb-button-icon-right .fb-pricing-button-icon {
				margin-left: ${priceButtonIconSpacing.Tablet}${priceButtonIconSpacingUnits.Tablet};
			}

			.${blockId} .fb-pricing-button-icon svg {
				width: ${priceButtonIconSize.Tablet}${priceButtonIconSizeUnits.Tablet};
				height: ${priceButtonIconSize.Tablet}${priceButtonIconSizeUnits.Tablet};
			}
		}

		@media only screen and (max-width: 767px) {
			.${blockId}.fb-pricing-area {
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'left' && pricingTableHZLeftOffset.Mobile !== undefined ? `left: ${pricingTableHZLeftOffset.Mobile}${pricingTableHZLeftOffsetUnits.Mobile};` : ''}
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableHZOrientationType === 'right' && pricingTableHZRightOffset.Mobile !== undefined ? `right: ${pricingTableHZRightOffset.Mobile}${pricingTableHZRightOffsetUnits.Mobile};` : ''}
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'top' && pricingTableVRTopOffset.Mobile !== undefined ? `top: ${pricingTableVRTopOffset.Mobile}${pricingTableVRTopOffsetUnits.Mobile};` : ''}
				${pricingTablePositionType !== 'default' && pricingTablePositionType !== 'relative' && pricingTableVROrientationType === 'bottom' && pricingTableVRBottomOffset.Mobile !== undefined ? `bottom: ${pricingTableVRBottomOffset.Mobile}${pricingTableVRBottomOffsetUnits.Mobile};` : ''} 
				${priceGlobalZIndex.Mobile ? `z-index: ${priceGlobalZIndex.Mobile};` : ''}
			}
			.${blockId}.fb-pricing-wrapper.fb-pricing-top-section {
				${pricingTopSectionNormalBackgroundType === 'gradient' ? `  
					background: ${pricingTopSectionNormalCustomGradientSwitcher && pricingTopSectionNormalCustomGradientInputValue ? pricingTopSectionNormalCustomGradientInputValue : pricingTopSectionNormalGradientColor};
				`: `
					${pricingTopSectionNormalClassicColor ? `background: ${pricingTopSectionNormalClassicColor};` : ''}
				`}
				${pricingTopSectionBorder ? `border: ${pricingTopSectionBorder};` : ''}
				${pricingTopSectionBorderColor ? `border-color: ${pricingTopSectionBorderColor};` : ''}
				${pricingTopSectionBorderMobileWidth && pricingTopSectionBorderMobile.top ? `border-width: ${pricingTopSectionBorderMobileWidth};` : ''}
				${pricingTopSectionBorderRadiusMobileWidth && pricingTopSectionBorderRadiusMobile.top? `border-radius: ${pricingTopSectionBorderRadiusMobileWidth};` : ''}
				${pricingTopSectionMobilePaddingWidth && pricingTopSectionMobilePadding.top? `padding: ${pricingTopSectionMobilePaddingWidth};` : ''}
            	transition: all .3s ease-in-out;
			}
			.${blockId}.fb-pricing-wrapper.fb-pricing-top-section:hover {
				${pricingTopSectionHoverBackgroundType === 'gradient' ? `  
					background: ${pricingTopSectionHoverCustomGradientSwitcher && pricingTopSectionHoverCustomGradientInputValue ? pricingTopSectionHoverCustomGradientInputValue : pricingTopSectionHoverGradientColor};
				`: `
					${pricingTopSectionHoverClassicColor ? `background: ${pricingTopSectionHoverClassicColor};` : ''}
				`}
				${pricingTopSectionBorderHoverColor ? `border-color: ${pricingTopSectionBorderHoverColor};` : ''}
			}

			.${blockId}.fb-pricing-wrapper.fb-pricing-top-section .fb-pricing-top-wrapper {
				${pricingTopSectionTextGlobalTypoSwitcher.fontSize === false && pricingTopSectionTextFontSize.Mobile ? `font-size: ${pricingTopSectionTextFontSize.Mobile}${pricingTopSectionTextFontSizeUnits.Mobile};` : ""}
				${pricingTopSectionTextGlobalTypoSwitcher.letterSpacing === false && pricingTopSectionTextLetterSpacing.Mobile ? `letter-spacing: ${pricingTopSectionTextLetterSpacing.Mobile}${pricingTopSectionTextLetterSpacingUnits.Mobile};` : ""}
				${pricingTopSectionTextGlobalTypoSwitcher.lineHeight === false && pricingTopSectionTextLineHeight.Mobile ? `line-height: ${pricingTopSectionTextLineHeight.Mobile}${pricingTopSectionTextLineHeightUnits.Mobile};` : ""}
				${pricingTopSectionTextMobilePaddingWidth && pricingTopSectionTextMobilePadding.top? `padding: ${pricingTopSectionTextMobilePaddingWidth};` : ''}
				text-align: center;
			}
			.${blockId}.fb-pricing-wrapper.fb-pricing-top-section .fb-pricing-top-wrapper:hover {
				${pricingTopSectionTextHoverColor ? `color: ${pricingTopSectionTextHoverColor};` : ''}
			}

			.${blockId} .fb-pricing-main-wrapper {
				${priceGlobalNormalBackgroundType === 'gradient' ? `  
					background: ${priceGlobalNormalCustomGradientSwitcher && priceGlobalNormalCustomGradientInputValue ? priceGlobalNormalCustomGradientInputValue : priceGlobalNormalGradientColor};
				`: `
					${priceGlobalNormalClassicColor ? `background: ${priceGlobalNormalClassicColor};` : ''}
				`}
				${globalMobilePadding && priceGlobalPaddingMobile.top? `padding: ${globalMobilePadding};` : ''}
				${globalMobileMargin && priceGlobalMarginMobile.top? `margin: ${globalMobileMargin};` : ''}
				${priceGlobalBorder ? `border: ${priceGlobalBorder};` : ''}
				${globalMobileBorderWidth && priceGlobalBorderMobile.top? `border-width: ${globalMobileBorderWidth};` : ''}
				${globalMobileBorderRadiusWidth && priceGlobalBorderRadiusMobile.top? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
				${priceGlobalBorderColor ? `border-color: ${priceGlobalBorderColor};` : ''}
				${priceGlobalBoxShadowCssValue ? `box-shadow: ${priceGlobalBoxShadowCssValue};` : ''}
            	transition: all .3s ease-in-out;
				position: relative;
			}
			.${blockId} .fb-pricing-main-wrapper:hover {
				${priceGlobalHoverBackgroundType === 'gradient' ? `  
					background: ${priceGlobalHoverCustomGradientSwitcher && priceGlobalHoverCustomGradientInputValue ? priceGlobalHoverCustomGradientInputValue : priceGlobalHoverGradientColor};
				`: `
					${priceGlobalHoverClassicColor ? `background: ${priceGlobalHoverClassicColor};` : ''}
				`}
				${priceGlobalBorderHoverColor ? `border-color: ${priceGlobalBorderHoverColor};` : ''}
				${priceGlobalBoxShadowHoverCssValue ? `box-shadow: ${priceGlobalBoxShadowHoverCssValue};` : ''}
			}
			.${blockId} .fb-pricing-header {
				${headerMobilePadding && pricingHeaderMobilePadding.top? `padding: ${headerMobilePadding};` : ''}
				${headerMobileBorderWidth && pricingHeaderBorderMobile.top ? `border-width: ${headerMobileBorderWidth};` : ''}
				${headerMobileBorderRadiusWidth && pricingHeaderBorderRadiusMobile.top? `border-radius: ${headerMobileBorderRadiusWidth};` : ''}
			}
			.${blockId}	.fb-pricing-price-wrapper {
				${priceMobilePaddingWidth && priceMobilePadding.top? `padding: ${priceMobilePaddingWidth};` : ''}
				text-align: ${pricingAlignment === 'left' ? 'left' : pricingAlignment === 'center' ? 'center' : pricingAlignment === 'right' ? 'right' : 'center'};
			}

			.${blockId} .fb-pricing-features-wrapper {
				${priceFeatureMobilePaddingWidth && priceFeatureMobilePadding.top? `padding: ${priceFeatureMobilePaddingWidth};` : ''} 
			}

			.${blockId} .fb-pricing-feature-item {
				${priceFeatureItemMobilePaddingWidth && priceFeatureItemMobilePadding.top? `padding: ${priceFeatureItemMobilePaddingWidth};` : ''}
				${priceFeatureItemMobileMarginWidth && priceFeatureItemMobileMargin.top? `margin: ${priceFeatureItemMobileMarginWidth};` : ''}
				${priceFeatureItemBorder ? `border: ${priceFeatureItemBorder};` : ''}
				${priceFeatureItemBorderColor ? `border-color: ${priceFeatureItemBorderColor};` : ''}
				${priceFeatureItemMobileBorderWidth && priceFeatureItemMobileBorder.top? `border-width: ${priceFeatureItemMobileBorderWidth};` : ''}
				${priceFeatureItemMobileBorderRadiusWidth && priceFeatureItemMobileBorderRadius.top? `border-radius: ${priceFeatureItemMobileBorderRadiusWidth};` : ''} 
			}
			.${blockId} .fb-pricing-feature-item:hover {
				${priceFeatureItemBorderHoverColor ? `border-color: ${priceFeatureItemBorderHoverColor};` : ''}	
			}

			.${blockId} .fb-pricing-feature-item, .${blockId} .fb-pricing-feature-after-text {
				justify-content: ${priceFeatureAlignment === 'left' ? 'flex-start' : priceFeatureAlignment === 'center' ? 'center' : priceFeatureAlignment === 'right' ? 'flex-end' : 'center'};
			}

			.${blockId} .fb-pricing-feature-after-text {
				${priceFeatureAfterTextGlobalTypoSwitcher.fontSize === false && priceFeatureAfterTextFontSize.Mobile && priceFeatureAfterTextFontSizeUnits.Mobile ? `font-size: ${priceFeatureAfterTextFontSize.Mobile}${priceFeatureAfterTextFontSizeUnits.Mobile};` : ''}
				${priceFeatureAfterTextGlobalTypoSwitcher.letterSpacing === false && priceFeatureAfterTextLetterSpacing.Mobile && priceFeatureAfterTextLetterSpacingUnits.Mobile ? `letter-spacing: ${priceFeatureAfterTextLetterSpacing.Mobile}${priceFeatureAfterTextLetterSpacingUnits.Mobile};` : ''}
				${priceFeatureAfterTextGlobalTypoSwitcher.lineHeight === false && priceFeatureAfterTextLineHeight.Mobile && priceFeatureAfterTextLineHeightUnits.Mobile ? `line-height: ${priceFeatureAfterTextLineHeight.Mobile}${priceFeatureAfterTextLineHeightUnits.Mobile};` : ''}	
			}

			.${blockId} .fb-pricing-feature-after-text:hover {
				${priceFeatureAfterTextHoverColor ? `color: ${priceFeatureAfterTextHoverColor};` : ''}
			}

			.${blockId} .fb-pricing-title {
				${pricingTitleGlobalTypoSwitcher.fontSize === false && pricingTitleFontSize.Mobile ? `font-size: ${pricingTitleFontSize.Mobile}${pricingTitleFontSizeUnits.Mobile};` : ''}
				${pricingTitleGlobalTypoSwitcher.letterSpacing === false && pricingTitleLetterSpacing.Mobile ? `letter-spacing: ${pricingTitleLetterSpacing.Mobile}${pricingTitleLetterSpacingUnits.Mobile};` : ''}
				${pricingTitleGlobalTypoSwitcher.lineHeight === false && pricingTitleLineHeight.Mobile ? `line-height: ${pricingTitleLineHeight.Mobile}${pricingTitleLineHeightUnits.Mobile};` : ''}

				${titleMobilePadding && pricingTitleMobilePadding.top? `padding: ${titleMobilePadding};` : ''}
				${titleMobileMargin && pricingTitleMobileMargin.top? `margin: ${titleMobileMargin};` : ''}

			}

			.${blockId} .fb-pricing-subtitle {
				${pricingSubtitleGlobalTypoSwitcher.fontSize === false && pricingSubtitleFontSize.Mobile ? `font-size: ${pricingSubtitleFontSize.Mobile}${pricingSubtitleFontSizeUnits.Mobile};` : ''}
				${pricingSubtitleGlobalTypoSwitcher.letterSpacing === false && pricingSubtitleLetterSpacing.Mobile ? `letter-spacing: ${pricingSubtitleLetterSpacing.Mobile}${pricingSubtitleLetterSpacingUnits.Mobile};` : ''}
				${pricingSubtitleGlobalTypoSwitcher.lineHeight === false && pricingSubtitleLineHeight.Mobile ? `line-height: ${pricingSubtitleLineHeight.Mobile}${pricingSubtitleLineHeightUnits.Mobile};` : ''}

				${subtitleMobilePadding && pricingSubtitleMobilePadding.top? `padding: ${subtitleMobilePadding};` : ''}
				${subtitleMobileMargin && pricingSubtitleMobileMargin.top? `margin: ${subtitleMobileMargin};` : ''}
			}

			.${blockId} .fb-pricing-after-text {
				${priceAfterTextFontSize.Mobile && priceAfterTextFontSizeUnits.Mobile ? `font-size: ${priceAfterTextFontSize.Mobile}${priceAfterTextFontSizeUnits.Mobile};` : ''}
				${priceAfterTextLetterSpacing.Mobile && priceAfterTextLetterSpacingUnits.Mobile ? `letter-spacing: ${priceAfterTextLetterSpacing.Mobile}${priceAfterTextLetterSpacingUnits.Mobile};` : ''}
				${priceAfterTextLineHeight.Mobile && priceAfterTextLineHeightUnits.Mobile ? `line-height: ${priceAfterTextLineHeight.Mobile}${priceAfterTextLineHeightUnits.Mobile};` : ''}
				
				${priceAfterTextBorderMobileWidth && priceAfterTextBorderMobile.top? `border-width: ${priceAfterTextBorderMobileWidth};` : ''}
				${priceAfterTextBorderRadiusMobileWidth && priceAfterTextBorderRadiusMobile.top? `border-radius: ${priceAfterTextBorderRadiusMobileWidth};` : ''}
				${priceAfterTextMobilePaddingWidth && priceAfterTextPaddingMobile.top? `padding: ${priceAfterTextMobilePaddingWidth};` : ''}
			}
			
			.${blockId} .fb-pricing-ribbon-icon {
				${priceIconPositionSwitcher ? 'position: absolute;' : ''}
				${priceIconPositionSwitcher ? `top: ${priceIconPositionTop.Mobile && priceIconPositionTopUnits.Mobile ? `${priceIconPositionTop.Mobile}${priceIconPositionTopUnits.Mobile}` : '0'};` : ''}
				${priceIconPositionSwitcher ? `left: ${priceIconPositionLeft.Mobile && priceIconPositionLeftUnits.Mobile ? `${priceIconPositionLeft.Mobile}${priceIconPositionLeftUnits.Mobile}` : '0'};` : ''}
				${priceIconBgSize.Mobile && priceIconBgSizeUnits.Mobile ? `width: ${priceIconBgSize.Mobile}${priceIconBgSizeUnits.Mobile};` : ''}
				${priceIconBgSize.Mobile && priceIconBgSizeUnits.Mobile ? `height: ${priceIconBgSize.Mobile}${priceIconBgSizeUnits.Mobile};` : ''}
				${priceIconBgColor ? `background-color: ${priceIconBgColor};` : ''}
				${priceIconBorder ? `border: ${priceIconBorder};` : ''}
				${priceIconMobileBorderWidthValue && priceIconBorderMobile.top ? `border-width: ${priceIconMobileBorderWidthValue};` : ''}
				${priceIconMobileBorderRadiusWidthValue && priceIconBorderRadiusMobile.top? `border-radius: ${priceIconMobileBorderRadiusWidthValue};` : ''} 
				${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
            	transition: all .3s ease-in-out;
			}
			.${blockId} .fb-pricing-ribbon-icon:hover {
				${priceIconBgHoverColor ? `background-color: ${priceIconBgHoverColor};` : ''}
				${priceIconBorderHoverColor ? `border-color: ${priceIconBorderHoverColor};` : ''}
			}
			.${blockId} .fb-pricing-ribbon-icon svg {
				width: ${priceIconSize.Mobile}${priceIconSizeUnits.Mobile};
				height: ${priceIconSize.Mobile}${priceIconSizeUnits.Mobile};
			}

			.${blockId} .fb-pricing-button {
				width: ${priceButtonWidth.Mobile ? `${priceButtonWidth.Mobile}${priceButtonWidthUnits.Mobile}` : 'auto'}; 
				${priceButtonGlobalTypoSwitcher.fontSize === false && priceButtonFontSize.Mobile ? `font-size: ${priceButtonFontSize.Mobile}${priceButtonFontSizeUnits.Mobile};` : ''}
				${priceButtonGlobalTypoSwitcher.letterSpacing === false && priceButtonLetterSpacing.Mobile ? `letter-spacing: ${priceButtonLetterSpacing.Mobile}${priceButtonLetterSpacingUnits.Mobile};` : ''}
				${priceButtonGlobalTypoSwitcher.lineHeight === false && priceButtonLineHeight.Mobile ? `line-height: ${priceButtonLineHeight.Mobile}${priceButtonLineHeightUnits.Mobile};` : ''}
				${priceButtonMobilePaddingValue && priceButtonMobilePadding.top? `padding: ${priceButtonMobilePaddingValue};` : ''}
				${priceButtonMobileMarginValue && priceButtonMobileMargin.top? `margin: ${priceButtonMobileMarginValue};` : ''}
				${priceButtonMobileBorderWidthValue && priceButtonMobileBorderWidth.top? `border-width: ${priceButtonMobileBorderWidthValue};` : ''}
				${priceButtonMobileBorderRadiusWidthValue && priceButtonMobileBorderRadiusWidth.top? `border-radius: ${priceButtonMobileBorderRadiusWidthValue};` : ''}
			}

			.${blockId} .fb-pricing-button.fb-button-icon-left .fb-pricing-button-icon {
				margin-right: ${priceButtonIconSpacing.Mobile}${priceButtonIconSpacingUnits.Mobile}; 
			}
			.${blockId} .fb-pricing-button.fb-button-icon-right .fb-pricing-button-icon {
				margin-left: ${priceButtonIconSpacing.Mobile}${priceButtonIconSpacingUnits.Mobile};
			}

			.${blockId} .fb-pricing-button-icon svg {
				width: ${priceButtonIconSize.Mobile}${priceButtonIconSizeUnits.Mobile};
				height: ${priceButtonIconSize.Mobile}${priceButtonIconSizeUnits.Mobile};
			}
		}
	`, [
		blockId,
		pricingSectionTopSwitcher,
		pricingSectionTopText,
		pricingTitle,
		pricingSubTitleSwitcher,
		pricingSubTitle,
		pricingIconAlign,
		pricingIcon,
		
		normalPrice,
		salePriceSwitcher,
		salePrice,
		priceCurrency,
		priceCurrencyPosition,
		pricePeriod,
		pricePeriodSeparator,
		priceHideFeaturesSwitcher,
		priceFeatureIconSwitcher,
		priceFeatureItems,

		priceButtonSwitcher,
		priceButtonText,
		priceButtonUrl,
		priceButtonTargetUrl,
		priceButtonIconAlign,
		priceButtonIcon,
		priceButtonIconPosition,
		priceButtonIconSpacing,
		priceButtonIconSpacingUnits,

		pricingHeaderBgColorSwitcher,
		pricingHeaderBgColor,
		pricingHeaderBgHoverColor,

		pricingHeaderPaddingUnits,
		pricingHeaderDesktopPadding,
		pricingHeaderTabletPadding,
		pricingHeaderMobilePadding,
		pricingHeaderPaddingLink,


		pricingHeaderBorder,
		pricingHeaderBorderColorSwitcher,
		pricingHeaderBorderColor,
		pricingHeaderBorderHoverColor,
		pricingHeaderBorderUnits,
		pricingHeaderBorderDesktop,
		pricingHeaderBorderTablet,
		pricingHeaderBorderMobile,
		pricingHeaderBorderLink,

		pricingHeaderBorderRadiusUnits,
		pricingHeaderBorderRadiusDesktop,
		pricingHeaderBorderRadiusTablet,
		pricingHeaderBorderRadiusMobile,
		pricingHeaderBorderRadiusLink,
		/**End Header */

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

		priceIconBorder,
		priceIconBorderColorSwitcher,
		priceIconBorderColor,
		priceIconBorderHoverColor,
		priceIconBorderUnits,
		priceIconBorderDesktop,
		priceIconBorderTablet,
		priceIconBorderMobile,
		priceIconBorderLink,

		priceIconBorderRadiusUnits,
		priceIconBorderRadiusDesktop,
		priceIconBorderRadiusTablet,
		priceIconBorderRadiusMobile,
		priceIconBorderRadiusLink,

		pricingAlignment,
		normalPricingGlobalTypoSwitcher,
		normalPricingGlobalTypographyData,
		normalPricingGlobalTypoType,
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

		pricingTitleAlignment,
		pricingTitleColorSwitcher,
		pricingTitleColor,
		pricingTitleHoverColor,
		pricingTitleGlobalTypoSwitcher,
		pricingTitleGlobalTypographyData,
		pricingTitleGlobalTypoType,
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
		titleDesktopPadding,
		titleTabletPadding,
		titleMobilePadding,

		pricingTitleMarginUnits,
		pricingTitleDesktopMargin,
		pricingTitleTabletMargin,
		pricingTitleMobileMargin,
		pricingTitleMarginLink,
		titleDesktopMargin,
		titleTabletMargin,
		titleMobileMargin,

		pricingSubtitleColorSwitcher,
		pricingSubtitleColor,
		pricingSubtitleHoverColor,
		pricingSubtitleGlobalTypoSwitcher,
		pricingSubtitleGlobalTypographyData,
		pricingSubtitleGlobalTypoType,
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
		subtitleDesktopPadding,
		subtitleTabletPadding,
		subtitleMobilePadding,

		pricingSubtitleMarginUnits,
		pricingSubtitleDesktopMargin,
		pricingSubtitleTabletMargin,
		pricingSubtitleMobileMargin,
		pricingSubtitleMarginLink,
		subtitleDesktopMargin,
		subtitleTabletMargin,
		subtitleMobileMargin,

		priceFeatureAlignment,
		priceFeatureIconColorSwitcher,
		priceFeatureIconColor,
		priceFeatureIconHoverColor,
		priceFeatureIconSize,
		priceFeatureIconSizeUnits,

		pricingfeatureTitleColorSwitcher,
		pricingfeatureTitleColor,
		pricingfeatureTitleHoverColor,
		pricingfeatureTitleGlobalTypoSwitcher,
		pricingfeatureTitleGlobalTypographyData,
		pricingfeatureTitleGlobalTypoType,
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

		priceFeatureItemPaddingUnits,
		priceFeatureItemDesktopPadding,
		priceFeatureItemTabPadding,
		priceFeatureItemMobilePadding,
		priceFeatureItemPaddingLink,
		priceFeatureItemDesktopPaddingWidth,
		priceFeatureItemTabPaddingWidth,
		priceFeatureItemMobilePaddingWidth,

		priceFeatureItemMarginUnits,
		priceFeatureItemDesktopMargin,
		priceFeatureItemTabMargin,
		priceFeatureItemMobileMargin,
		priceFeatureItemMarginLink,
		priceFeatureItemDesktopMarginWidth,
		priceFeatureItemTabMarginWidth,
		priceFeatureItemMobileMarginWidth,

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
		priceFeatureItemDesktopBorderWidth,
		priceFeatureItemTabBorderWidth,
		priceFeatureItemMobileBorderWidth,

		priceFeatureItemBorderRadiusUnits,
		priceFeatureItemDesktopBorderRadius,
		priceFeatureItemTabBorderRadius,
		priceFeatureItemMobileBorderRadius,
		priceFeatureItemBorderRadiusLink,
		priceFeatureItemDesktopBorderRadiusWidth,
		priceFeatureItemTabBorderRadiusWidth,
		priceFeatureItemMobileBorderRadiusWidth,


		priceFeaturePaddingUnits, 
		priceFeatureDesktopPadding,
		priceFeatureTabPadding,
		priceFeatureMobilePadding,
		priceFeaturePaddingLink,
		priceFeatureDesktopPaddingWidth,
		priceFeatureTabPaddingWidth,
		priceFeatureMobilePaddingWidth,

		priceButtonAlignment,
		priceButtonWidth,
		priceButtonWidthUnits,

		priceButtonGlobalTypoSwitcher,
		priceButtonGlobalTypographyData,
		priceButtonGlobalTypoType,
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

		headerDesktopPadding,
		headerTabletPadding,
		headerMobilePadding,

		headerDesktopBorderWidth,
		headerTabletBorderWidth,
		headerMobileBorderWidth,

		headerDesktopBorderRadiusWidth,
		headerTabletBorderRadiusWidth,
		headerMobileBorderRadiusWidth,

		priceIconDesktopBorderWidthValue,
		priceIconTabletBorderWidthValue,
		priceIconMobileBorderWidthValue,

		priceIconDesktopBorderRadiusWidthValue,
		priceIconTabletBorderRadiusWidthValue,
		priceIconMobileBorderRadiusWidthValue,

		priceButtonDesktopPaddingValue,
		priceButtonTabletPaddingValue,
		priceButtonMobilePaddingValue,

		priceButtonDesktopMarginValue,
		priceButtonTabletMarginValue,
		priceButtonMobileMarginValue,

		priceButtonDesktopBorderWidthValue,
		priceButtonTabletBorderWidthValue,
		priceButtonMobileBorderWidthValue,

		priceButtonDesktopBorderRadiusWidthValue,
		priceButtonTabletBorderRadiusWidthValue,
		priceButtonMobileBorderRadiusWidthValue,

		globalDesktopPadding,
		globalTabletPadding,
		globalMobilePadding,

		globalDesktopMargin,
		globalTabletMargin,
		globalMobileMargin,

		globalDesktopBorderWidth,
		globalTabletBorderWidth,
		globalMobileBorderWidth,

		globalDesktopBorderRadiusWidth,
		globalTabletBorderRadiusWidth,
		globalMobileBorderRadiusWidth,


		pricePaddingUnits, 
		priceDesktopPadding,
		priceTabletPadding,
		priceMobilePadding,
		pricePaddingLink,
		priceDesktopPaddingWidth,
		priceTabletPaddingWidth,
		priceMobilePaddingWidth,


		priceAfterTextSwitcher,
		priceAfterText,

		priceAfterTextGlobalTypoSwitcher,
		priceAfterTextGlobalTypographyData,
		priceAfterTextGlobalTypoType,
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
		priceAfterTextDesktopPaddingWidth,
		priceAfterTextTabletPaddingWidth,
		priceAfterTextMobilePaddingWidth,

		priceAfterTextBorder,
		priceAfterTextBorderColorSwitcher,
		priceAfterTextBorderColor,
		priceAfterTextBorderHoverColor,

		priceAfterTextBorderUnits,
		priceAfterTextBorderDesktop,
		priceAfterTextBorderTablet,
		priceAfterTextBorderMobile,
		priceAfterTextBorderLink,
		priceAfterTextBorderDesktopWidth,
		priceAfterTextBorderTabletWidth,
		priceAfterTextBorderMobileWidth,

		priceAfterTextBorderRadiusUnits,
		priceAfterTextBorderRadiusDesktop,
		priceAfterTextBorderRadiusTablet,
		priceAfterTextBorderRadiusMobile,
		priceAfterTextBorderRadiusLink,
		priceAfterTextBorderRadiusDesktopWidth,
		priceAfterTextBorderRadiusTabletWidth,
		priceAfterTextBorderRadiusMobileWidth,

		priceFeatureAfterTextSwitcher,
		priceFeatureAfterText,
		priceFeatureAfterTextGlobalTypoSwitcher,
		priceFeatureAfterTextGlobalTypographyData,
		priceFeatureAfterTextGlobalTypoType,
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
		pricingTopSectionDesktopPaddingWidth,
		pricingTopSectionTabletPaddingWidth,
		pricingTopSectionMobilePaddingWidth,

		pricingTopSectionBorder,
		pricingTopSectionBorderColorSwitcher,
		pricingTopSectionBorderColor,
		pricingTopSectionBorderHoverColor,

		pricingTopSectionBorderUnits,
		pricingTopSectionBorderDesktop,
		pricingTopSectionBorderTablet,
		pricingTopSectionBorderMobile,
		pricingTopSectionBorderLink,
		pricingTopSectionBorderDesktopWidth,
		pricingTopSectionBorderTabletWidth,
		pricingTopSectionBorderMobileWidth,

		pricingTopSectionBorderRadiusUnits,
		pricingTopSectionBorderRadiusDesktop,
		pricingTopSectionBorderRadiusTablet,
		pricingTopSectionBorderRadiusMobile,
		pricingTopSectionBorderRadiusLink,
		pricingTopSectionBorderRadiusDesktopWidth,
		pricingTopSectionBorderRadiusTabletWidth,
		pricingTopSectionBorderRadiusMobileWidth,

		pricingTopSectionTextColorSwitcher,
		pricingTopSectionTextColor,
		pricingTopSectionTextHoverColor,

		pricingTopSectionTextGlobalTypoSwitcher,
		pricingTopSectionTextGlobalTypographyData,
		pricingTopSectionTextGlobalTypoType,
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
		pricingTopSectionTextDesktopPaddingWidth,
		pricingTopSectionTextTabletPaddingWidth,
		pricingTopSectionTextMobilePaddingWidth,

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
	]);

	const customCss = getCustomCss(pricingTableGlobalCustomCSS, `.${blockId}`);

	useEffect(() => {
		setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
	}, [allBlockStyle, customCss]);

	const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			{/* Preset Style */}
			<PanelBody title={__("Preset", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Preset Style", "frontis-blocks")}
					value={pricingTablePreset}
					options={PRESETS}
					onChange={(selected) => changeCTAPreset(selected)}
				/>
			</PanelBody>

			{/** Start Header */}
			<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>

				<ToggleControl
					label={__("Display Top Section", "frontis-blocks")}
					checked={pricingSectionTopSwitcher}	
					onChange={(value) => setAttributes({pricingSectionTopSwitcher: value})}
				/>
				{pricingSectionTopSwitcher && ( 
					<TextControl
						label={__("Top Text", "frontis-blocks")}
						value={pricingSectionTopText}
						onChange={(value) => setAttributes({ pricingSectionTopText: value })}
						placeholder={__('Best Deal', 'frontis-block')}
					/>
				)}

				<BaseControl
					label={__("Icon", "frontis-blocks")}
					id="fb-setting-text-alignment"
					className="fb-setting-text-alignment"
				>
						<ButtonGroup
							className="fb-setting-text-alignment-group-btn"
						>
							{ICON_ALIGN.map((item, key) => (
								<Button
									key={key}
									onClick={() => setAttributes({ pricingIconAlign: item.value })}
									className={`fb-setting-text-alignment-single-btn ${pricingIconAlign === item.value ? 'active' : ''}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
						{pricingIconAlign === 'icon' && (
							<FBIconPicker value={pricingIcon} setIconHandler={priceIconHandler} /> 
						)}
				</BaseControl>

				<TextControl
					label={__("Title", "frontis-blocks")}
					value={pricingTitle}
					onChange={(value) => setAttributes({ pricingTitle: value })}
					placeholder={__('Startup', 'frontis-block')}
				/>
				<ToggleControl
					label={__("Show Sub Title", "frontis-blocks")}
					checked={pricingSubTitleSwitcher}
					onChange={(value) => setAttributes({pricingSubTitleSwitcher: value})}
				/>
				{pricingSubTitleSwitcher && (
					<TextareaControl
						label={__("Sub Title", "frontis-blocks")}
						value={pricingSubTitle}
						onChange={(value) => setAttributes({ pricingSubTitle: value })}
						placeholder={__('sub title', 'frontis-block')}
					/>
				)}
			</PanelBody>
			{/** End Header */}

			{/** Start Price */}
			<PanelBody title={__("Price", "frontis-blocks")} initialOpen={false}>
				<TextControl
					label={__("Price", "frontis-blocks")}
					value={normalPrice}
					onChange={(value) => setAttributes({ normalPrice: value })}
				/>
				<ToggleControl
					label={__("On Sale", "frontis-blocks")}
					checked={salePriceSwitcher}
					onChange={(value) => setAttributes({salePriceSwitcher: value})}
				/>
				{salePriceSwitcher && (
					<TextControl
						label={__("Sale Price", "frontis-blocks")}
						value={salePrice}
						onChange={(value) => setAttributes({ salePrice: value })}
					/>
				)}
				<TextControl
					label={__("Currency", "frontis-blocks")}
					value={priceCurrency}
					onChange={(value) => setAttributes({ priceCurrency: value })}
				/>
				<SelectControl 
					label={__("Currency Position", "frontis-blocks")}
					value={priceCurrencyPosition}
					onChange={(value) => setAttributes({ priceCurrencyPosition: value })}
					options={CURRENCY_POSITION}
				/>
				<TextControl
					label={__("Separator", "frontis-blocks")}
					value={pricePeriodSeparator}
					onChange={(value) => setAttributes({ pricePeriodSeparator: value })}
				/>
				<TextControl
					label={__("Period", "frontis-blocks")}
					value={pricePeriod}
					onChange={(value) => setAttributes({ pricePeriod: value })}
				/>	

				<ToggleControl
					label={__("Text Switcher", "frontis-blocks")}
					checked={priceAfterTextSwitcher}
					onChange={(value) => setAttributes({priceAfterTextSwitcher: value})}
				/>
				{priceAfterTextSwitcher && (
					<TextareaControl
						value={priceAfterText}
						onChange={(value) => setAttributes({ priceAfterText: value })}
					/>
				)}
			</PanelBody>
			{/** End Price */}

			{/** Start Feature */}
			<PanelBody title={__("Features", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Show Features", "frontis-blocks")}
					checked={priceHideFeaturesSwitcher}
					onChange={(value) => setAttributes({priceHideFeaturesSwitcher: value})}
				/>

				{priceHideFeaturesSwitcher && (
					<>
						<ToggleControl
							label={__("Show Icon", "frontis-blocks")}
							checked={priceFeatureIconSwitcher}
							onChange={(value) => setAttributes({ priceFeatureIconSwitcher: value })}
						/>
						<div className="fb-feature-wrapper">
							<DndContext
								collisionDetection={closestCenter}
								onDragEnd={handleDragEnd}
							>
								<SortableContext items={priceFeatureItems.map(item => item.id)}>
									<ul className='dnd-items-wrapper'>
										{priceFeatureItems.map((item) => (
											<SortableItem
												key={item.id}
												id={item.id}
												item={item}
												handleChangeItem={handleChangeItem}
												handleDeleteItem={handleDeleteItem}
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

				<ToggleControl
					label={__("Text Switcher", "frontis-blocks")}
					checked={priceFeatureAfterTextSwitcher}
					onChange={(value) => setAttributes({priceFeatureAfterTextSwitcher: value})}
				/>
				{priceFeatureAfterTextSwitcher && (
					<TextareaControl
						value={priceFeatureAfterText}
						onChange={(value) => setAttributes({ priceFeatureAfterText: value })}
					/>
				)}
			</PanelBody>
			{/** End Feature */}


			{/** Start Button */}
			<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Enable Button", "frontis-blocks")}
					checked={priceButtonSwitcher}
					onChange={(value) => setAttributes({ priceButtonSwitcher: value })}
				/>
				{priceButtonSwitcher && (
					<>
						<TextControl
							label={__("Button Text", "frontis-blocks")}
							value={priceButtonText}
							onChange={(value) => setAttributes({ priceButtonText: value })}
						/>
						<FB_UrlControl
							url={priceButtonUrl}
							onChangeUrl={(value) => setAttributes({ priceButtonUrl: value })}
							openInNewTab={priceButtonTargetUrl}
							onChangeOpenInNewTab={(value) => setAttributes({ priceButtonTargetUrl: value })}
						/>
						<BaseControl
							label={__("Icon", "frontis-blocks")}
							id="fb-setting-text-alignment"
							className="fb-setting-text-alignment"
						>
							<ButtonGroup
								className="fb-setting-text-alignment-group-btn"
							>
								{ICON_ALIGN.map((item, key) => (
										<Button
											key={key}
											onClick={() => setAttributes({ priceButtonIconAlign: item.value })}
											className={`fb-setting-text-alignment-single-btn ${priceButtonIconAlign === item.value ? 'active' : ''}`}
										>
											{item.label}
										</Button>
									))}
								</ButtonGroup>
								{priceButtonIconAlign === 'icon' && (
									<>
										<FBIconPicker value={priceButtonIcon} setIconHandler={priceButtonIconHandler} />
										<SelectControl
											label={__("Icon Position", "frontis-blocks")}
											value={priceButtonIconPosition}
											options={ICON_POSITION}
											onChange={(value) => setAttributes({ priceButtonIconPosition: value })}
										/>
									</>
								)}
						</BaseControl>
					</>
				)}
			</PanelBody>
			{/** End Button */}
		
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			{pricingSectionTopSwitcher && (
				<PanelBody
					title={__("Top Section", "frontis-blocks")}
					initialOpen={false}
				>
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
						value={pricingTopSectionBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ pricingTopSectionBorder: value })}
					/>

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={pricingTopSectionBorderColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ pricingTopSectionBorderColorSwitcher: value })}
					/>

					{pricingTopSectionBorderColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={pricingTopSectionBorderColor}
							setGlobalColor={(value) => setAttributes({ pricingTopSectionBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{pricingTopSectionBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={pricingTopSectionBorderHoverColor}
							setGlobalColor={(value) => setAttributes({ pricingTopSectionBorderHoverColor: value === undefined ? '' : value })}
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

					<FB_BackgroundColorControl
						label={__("Background Color", "frontis-blocks")}
						bgColorSwitcher={pricingTopSectionBgColorSwitcher}
						setBgColorSwitcher={(value) => setAttributes({ pricingTopSectionBgColorSwitcher: value })}
						
						normalBackgroundType={pricingTopSectionNormalBackgroundType}
						setNormalBackgroundType={(value) => setAttributes({ pricingTopSectionNormalBackgroundType: value })}
						normalClassicColor={pricingTopSectionNormalClassicColor}
						setNormalClassicColor={(value) => setAttributes({ pricingTopSectionNormalClassicColor: value === undefined ? '' : value })}
						normalGradientColor={pricingTopSectionNormalGradientColor}
						setNormalGradientColor={(value) => setAttributes({ pricingTopSectionNormalGradientColor: value === undefined ? '' : value })}
						normalCustomGradientSwitcher={pricingTopSectionNormalCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ pricingTopSectionNormalCustomGradientSwitcher: value })}
						normalCustomGradientInputValue={pricingTopSectionNormalCustomGradientInputValue}
						setNormalCustomGradientInputValue={(value) => setAttributes({ pricingTopSectionNormalCustomGradientInputValue: value })}
						
						hoverBackgroundType={pricingTopSectionHoverBackgroundType}
						setHoverBackgroundType={(value) => setAttributes({ pricingTopSectionHoverBackgroundType: value })}
						hoverClassicColor={pricingTopSectionHoverClassicColor}
						setHoverClassicColor={(value) => setAttributes({ pricingTopSectionHoverClassicColor: value === undefined ? '' : value })}
						hoverGradientColor={pricingTopSectionHoverGradientColor} 
						setHoverGradientColor={(value) => setAttributes({ pricingTopSectionHoverGradientColor: value === undefined ? '' : value })}
						hoverCustomGradientSwitcher={pricingTopSectionHoverCustomGradientSwitcher}
						setHoverCustomGradientSwitcher={(value) => setAttributes({ pricingTopSectionHoverCustomGradientSwitcher: value })}
						hoverCustomGradientInputValue={pricingTopSectionHoverCustomGradientInputValue}
						setHoverCustomGradientInputValue={(value) => setAttributes({ pricingTopSectionHoverCustomGradientInputValue: value })}

						isBackgroundImage={false}

					/>

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
						globalSwitcher={pricingTopSectionTextColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ pricingTopSectionTextColorSwitcher: value })}
					/>

					{pricingTopSectionTextColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Color", "frontis-blocks")}
							globalColor={pricingTopSectionTextColor}
							setGlobalColor={(value) => setAttributes({ pricingTopSectionTextColor: value === undefined ? '' : value })}
						/>
					)}

					{pricingTopSectionTextColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={pricingTopSectionTextHoverColor}
							setGlobalColor={(value) => setAttributes({ pricingTopSectionTextHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Spacing 
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleTopSectionTextPaddingUnitsHandler}
						spacingUnits={pricingTopSectionTextPaddingUnits}
						spacingDesktop={pricingTopSectionTextDesktopPadding}
						spacingTablet={pricingTopSectionTextTabletPadding}
						spacingMobile={pricingTopSectionTextMobilePadding}
						handleSpacingUnitHandler={handleTopSectionTextPaddingUnitChange}
						spacingCombineBtn={pricingTopSectionTextPaddingLink}
						spacingCombineBtnHandler={handleTopSectionTextPaddingCombineBtn}
						setAttributes={setAttributes}
					/>

				</PanelBody>
			)}
			<PanelBody
				title={__("Header", "frontis-blocks")}
				initialOpen={false}
			>

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
			
			{pricingIconAlign !== 'none' && (
				<PanelBody
					title={__("Icon", "frontis-blocks")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Position", "frontis-blocks")}
						checked={priceIconPositionSwitcher} 
						onChange={(value) => setAttributes({ priceIconPositionSwitcher: value })}
					/>
					
					{priceIconPositionSwitcher && (
						<>
							<FB_Range
								min={0}
								max={100}
								label={__("Top", "frontis-blocks")}
								rangeValue={priceIconPositionTop} 
								onChangeHandler={(value) => setAttributes({ priceIconPositionTop: value })}
								rangeUnitHandler={(value) => setAttributes({ priceIconPositionTopUnits: value })}
								deviceType={deviceType}
								units={priceIconPositionTopUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>
							<FB_Range
								min={0}
								max={100}
								label={__("Left", "frontis-blocks")}
								rangeValue={priceIconPositionLeft} 
								onChangeHandler={(value) => setAttributes({ priceIconPositionLeft: value })}
								rangeUnitHandler={(value) => setAttributes({ priceIconPositionLeftUnits: value })}
								deviceType={deviceType}
								units={priceIconPositionLeftUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>
						</>
					)} 
					<FB_Range
						min={1}
						max={200}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={priceIconSize}
						onChangeHandler={(value) => setAttributes({ priceIconSize: value })}
						rangeUnitHandler={(value) => setAttributes({ priceIconSizeUnits: value })}
						deviceType={deviceType}
						units={priceIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"100"}
					/>

					<FB_Range
						min={0}
						max={200}
						label={__("Background Size", "frontis-blocks")}
						rangeValue={priceIconBgSize}
						onChangeHandler={(value) => setAttributes({ priceIconBgSize: value })}
						rangeUnitHandler={(value) => setAttributes({ priceIconBgSizeUnits: value })}
						deviceType={deviceType}
						units={priceIconBgSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={""}
					/>

					<FB_SwitcherControl
						label={__("Color", "frontis-blocks")}
						globalSwitcher={priceIconColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ priceIconColorSwitcher: value })}
					/>

					{priceIconColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={priceIconColor}
							setGlobalColor={(value) => setAttributes({ priceIconColor: value === undefined ? '' : value })}
						/>
					)}

					{priceIconColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={priceIconHoverColor}
							setGlobalColor={(value) => setAttributes({ priceIconHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_SwitcherControl
						label={__("Background Color", "frontis-blocks")}
						globalSwitcher={priceIconBgColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ priceIconBgColorSwitcher: value })}
					/>

					{priceIconBgColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={priceIconBgColor}
							setGlobalColor={(value) => setAttributes({ priceIconBgColor: value === undefined ? '' : value })}
						/>
					)}

					{priceIconBgColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={priceIconBgHoverColor}
							setGlobalColor={(value) => setAttributes({ priceIconBgHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={priceIconBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ priceIconBorder: value })}
					/>


					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")} 
						globalSwitcher={priceIconBorderColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ priceIconBorderColorSwitcher: value })}
					/>

					{priceIconBorderColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={priceIconBorderColor}
							setGlobalColor={(value) => setAttributes({ priceIconBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{priceIconBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={priceIconBorderHoverColor}
							setGlobalColor={(value) => setAttributes({ priceIconBorderHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={priceIconBorderColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ priceIconBorderColorSwitcher: value })}
					/>

					{priceIconBorderColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={priceIconBorderColor}
							setGlobalColor={(value) => setAttributes({ priceIconBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{priceIconBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={priceIconBorderHoverColor}
							setGlobalColor={(value) => setAttributes({ priceIconBorderHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Spacing 
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePriceIconBorderUnitsHandler}
						spacingUnits={priceIconBorderUnits}
						spacingDesktop={priceIconBorderDesktop}
						spacingTablet={priceIconBorderTablet}
						spacingMobile={priceIconBorderMobile}
						handleSpacingUnitHandler={handlePriceIconBorderUnitChange}
						spacingCombineBtn={priceIconBorderLink}
						spacingCombineBtnHandler={handlePriceIconBorderCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_Spacing 
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handlePriceIconBorderRadiusUnitsHandler}
						spacingUnits={priceIconBorderRadiusUnits}
						spacingDesktop={priceIconBorderRadiusDesktop}
						spacingTablet={priceIconBorderRadiusTablet}
						spacingMobile={priceIconBorderRadiusMobile}
						handleSpacingUnitHandler={handlePriceIconBorderRadiusUnitChange}
						spacingCombineBtn={priceIconBorderRadiusLink}
						spacingCombineBtnHandler={handlePriceIconBorderRadiusCombineBtn}
						setAttributes={setAttributes}
					/>

				</PanelBody>
			)}
			<PanelBody
				title={__("Title", "frontis-blocks")}
				initialOpen={false}
			>
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
									onClick={() => setAttributes({ pricingTitleAlignment: item.value })}
									className={`fb-setting-text-alignment-single-btn ${pricingTitleAlignment === item.value ? 'active' : ''}`}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
				</BaseControl>

				<FB_HtmlTagControl
					label={__("HTML Tag", "frontis-blocks")}
					globalHtmlTag={pricingTitleTag}
					setGlobalHtmlTag={(value) => setAttributes({ pricingTitleTag: value })}
				/>

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

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={pricingTitleColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ pricingTitleColorSwitcher: value })}
				/>

				{pricingTitleColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Nomal Color", "frontis-blocks")}
						globalColor={pricingTitleColor}
						setGlobalColor={(value) => setAttributes({ pricingTitleColor: value === undefined ? '' : value })}
					/>
				)}

				{pricingTitleColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={pricingTitleHoverColor}
						setGlobalColor={(value) => setAttributes({ pricingTitleHoverColor: value === undefined ? '' : value })}
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

			{pricingSubTitleSwitcher && (
				<PanelBody
				title={__("Subtitle", "frontis-blocks")}
					initialOpen={false}
				>
					<FB_HtmlTagControl
						label={__("HTML Tag", "frontis-blocks")}
						globalHtmlTag={pricingSubTitleTag}
						setGlobalHtmlTag={(value) => setAttributes({ pricingSubTitleTag: value })}
					/>

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
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleSubtitlePaddingUnitsHandler}
						spacingUnits={pricingSubtitlePaddingUnits}
						spacingDesktop={pricingSubtitleDesktopPadding}
						spacingTablet={pricingSubtitleTabletPadding}
						spacingMobile={pricingSubtitleMobilePadding}
						handleSpacingUnitHandler={handleSubtitlePaddingUnitChange}
						spacingCombineBtn={pricingSubtitlePaddingLink}
						spacingCombineBtnHandler={handleSubtitlePaddingCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_Spacing 
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleSubtitleMarginUnitsHandler}
						spacingUnits={pricingSubtitleMarginUnits}
						spacingDesktop={pricingSubtitleDesktopMargin}
						spacingTablet={pricingSubtitleTabletMargin}
						spacingMobile={pricingSubtitleMobileMargin}
						handleSpacingUnitHandler={handleSubtitleMarginUnitChange}
						spacingCombineBtn={pricingSubtitleMarginLink}
						spacingCombineBtnHandler={handleSubtitleMarginCombineBtn}
						setAttributes={setAttributes}
					/>
				</PanelBody>
			)}	

			<PanelBody
				title={__("Price", "frontis-blocks")}
				initialOpen={false}
			>
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

			<PanelBody
				title={__("Price After Text", "frontis-blocks")}
				initialOpen={false}
			>

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
					setNormalGradientColor={(value) => setAttributes({ priceAfterTextNormalGradientColor: value === undefined ? '' : value })}
					normalCustomGradientSwitcher={priceAfterTextNormalCustomGradientSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ priceAfterTextNormalCustomGradientSwitcher: value })}
					normalCustomGradientInputValue={priceAfterTextNormalCustomGradientInputValue}
					setNormalCustomGradientInputValue={(value) => setAttributes({ priceAfterTextNormalCustomGradientInputValue: value })}
					
					hoverBackgroundType={priceAfterTextHoverBackgroundType}
					setHoverBackgroundType={(value) => setAttributes({ priceAfterTextHoverBackgroundType: value })}
					hoverClassicColor={priceAfterTextHoverClassicColor}
					setHoverClassicColor={(value) => setAttributes({ priceAfterTextHoverClassicColor: value === undefined ? '' : value })}
					hoverGradientColor={priceAfterTextHoverGradientColor} 
					setHoverGradientColor={(value) => setAttributes({ priceAfterTextHoverGradientColor: value === undefined ? '' : value })}
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

			<PanelBody
				title={__("Feature", "frontis-blocks")}
				initialOpen={false}
			>

				<FB_AlignmentControl
					label={__("Alignment", "frontis-blocks")}
					globalAlignment={priceFeatureAlignment}
					setGlobalAlignment={(value) => setAttributes({ priceFeatureAlignment: value })}
				/>

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
					label={__("Feature Title Color", "frontis-blocks")}
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

				<FB_Spacing 
					label={__("Padding", "frontis-blocks")}
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

			<PanelBody
				title={__("Feature After Text", "frontis-blocks")}
				initialOpen={false}
			>
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

					globalTypoOption={priceAfterTextGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ priceAfterTextGlobalTypoOption: value })}

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

			</PanelBody>

			{priceButtonSwitcher && (
				<PanelBody
					title={__("Button", "frontis-blocks")}
					initialOpen={false}
				>
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
										onClick={() => setAttributes({ priceButtonAlignment: item.value })}
										className={`fb-setting-text-alignment-single-btn ${priceButtonAlignment === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
					</BaseControl>

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

					<FB_SwitcherControl
						label={__("Text Color", "frontis-blocks")}
						globalSwitcher={priceButtonColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ priceButtonColorSwitcher: value })}
					/>

					{priceButtonColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={priceButtonColor}
							setGlobalColor={(value) => setAttributes({ priceButtonColor: value === undefined ? '' : value })}
						/>
					)}

					{priceButtonColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={priceButtonHoverColor}
							setGlobalColor={(value) => setAttributes({ priceButtonHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_BackgroundColorControl
						label={__("Background Color", "frontis-blocks")}
						bgColorSwitcher={priceButtonBackgroundColorSwitcher}
						setBgColorSwitcher={(value) => setAttributes({ priceButtonBackgroundColorSwitcher: value })}
						
						normalBackgroundType={priceButtonNormalBackgroundType}
						setNormalBackgroundType={(value) => setAttributes({ priceButtonNormalBackgroundType: value })}
						normalClassicColor={priceButtonNormalClassicColor}
						setNormalClassicColor={(value) => setAttributes({ priceButtonNormalClassicColor: value === undefined ? '' : value })}
						normalGradientColor={priceButtonNormalGradientColor}
						setNormalGradientColor={(value) => setAttributes({ priceButtonNormalGradientColor: value === undefined ? '' : value })}
						normalCustomGradientSwitcher={priceButtonNormalCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ priceButtonNormalCustomGradientSwitcher: value })}
						normalCustomGradientInputValue={priceButtonNormalCustomGradientInputValue}
						setNormalCustomGradientInputValue={(value) => setAttributes({ priceButtonNormalCustomGradientInputValue: value })}
						
						hoverBackgroundType={priceButtonHoverBackgroundType}
						setHoverBackgroundType={(value) => setAttributes({ priceButtonHoverBackgroundType: value })}
						hoverClassicColor={priceButtonHoverClassicColor}
						setHoverClassicColor={(value) => setAttributes({ priceButtonHoverClassicColor: value === undefined ? '' : value })}
						hoverGradientColor={priceButtonHoverGradientColor} 
						setHoverGradientColor={(value) => setAttributes({ priceButtonHoverGradientColor: value === undefined ? '' : value })}
						hoverCustomGradientSwitcher={priceButtonHoverCustomGradientSwitcher}
						setHoverCustomGradientSwitcher={(value) => setAttributes({ priceButtonHoverCustomGradientSwitcher: value })}
						hoverCustomGradientInputValue={priceButtonHoverCustomGradientInputValue}
						setHoverCustomGradientInputValue={(value) => setAttributes({ priceButtonHoverCustomGradientInputValue: value })}

						isBackgroundImage={false}

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

					<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={priceButtonBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ priceButtonBorder: value })}
					/>


					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={priceButtonBorderColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ priceButtonBorderColorSwitcher: value })}
					/>

					{priceButtonBorderColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={priceButtonBorderColor}
							setGlobalColor={(value) => setAttributes({ priceButtonBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{priceButtonBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={priceButtonBorderHoverColor}
							setGlobalColor={(value) => setAttributes({ priceButtonBorderHoverColor: value === undefined ? '' : value })}
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

					<FB_SwitcherControl
						label={__("Icon Color", "frontis-blocks")}
						globalSwitcher={priceButtonIconColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ priceButtonIconColorSwitcher: value })}
					/>

					{priceButtonIconColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Nomal Color", "frontis-blocks")}
							globalColor={priceButtonIconColor}
							setGlobalColor={(value) => setAttributes({ priceButtonIconColor: value === undefined ? '' : value })}
						/>
					)}

					{priceButtonIconColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={priceButtonIconHoverColor}
							setGlobalColor={(value) => setAttributes({ priceButtonIconHoverColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Range
						min={0}
						max={100}
						label={__("Icon Size", "frontis-blocks")}
						rangeValue={priceButtonIconSize}
						onChangeHandler={(value) => setAttributes({ priceButtonIconSize: value })}
						rangeUnitHandler={(value) => setAttributes({ priceButtonIconSizeUnits: value })}
						deviceType={deviceType}
						units={priceButtonIconSizeUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"20"}
					/>
					<FB_Range
						min={0}
						max={100}
						label={__("Icon Spacing", "frontis-blocks")}
						rangeValue={priceButtonIconSpacing}
						onChangeHandler={(value) => setAttributes({ priceButtonIconSpacing: value })}
						rangeUnitHandler={(value) => setAttributes({ priceButtonIconSpacingUnits: value })}
						deviceType={deviceType}
						units={priceButtonIconSpacingUnits}
						setAttributes={setAttributes}
						rangeStep={1}
						resetFallbackValue={"10"}
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
							setNormalGradientColor={(value) => setAttributes({ priceGlobalNormalGradientColor: value === undefined ? '' : value })}
							normalCustomGradientSwitcher={priceGlobalNormalCustomGradientSwitcher}
							setNormalCustomGradientSwitcher={(value) => setAttributes({ priceGlobalNormalCustomGradientSwitcher: value })}
							normalCustomGradientInputValue={priceGlobalNormalCustomGradientInputValue}
							setNormalCustomGradientInputValue={(value) => setAttributes({ priceGlobalNormalCustomGradientInputValue: value })}
							
							hoverBackgroundType={priceGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) => setAttributes({ priceGlobalHoverBackgroundType: value })}
							hoverClassicColor={priceGlobalHoverClassicColor}
							setHoverClassicColor={(value) => setAttributes({ priceGlobalHoverClassicColor: value === undefined ? '' : value })}
							hoverGradientColor={priceGlobalHoverGradientColor} 
							setHoverGradientColor={(value) => setAttributes({ priceGlobalHoverGradientColor: value === undefined ? '' : value })}
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
			<style>
				{editorStyle}
			</style>

			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
        </>
    );
}