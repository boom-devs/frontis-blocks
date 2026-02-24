import { __ } from '@wordpress/i18n';
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

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
		blockStyle,
		
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

	const deviceType= useDeviceType();

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
							{POST_GRID_ICON_ALIGN.map((item, key) => (
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
								{POST_GRID_ICON_ALIGN.map((item, key) => (
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
						setNormalGradientColor={(value) => setAttributes({ pricingTopSectionNormalGradientColor: value === undefined ? null : value })}
						normalCustomGradientSwitcher={pricingTopSectionNormalCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ pricingTopSectionNormalCustomGradientSwitcher: value })}
						normalCustomGradientInputValue={pricingTopSectionNormalCustomGradientInputValue}
						setNormalCustomGradientInputValue={(value) => setAttributes({ pricingTopSectionNormalCustomGradientInputValue: value })}
						
						hoverBackgroundType={pricingTopSectionHoverBackgroundType}
						setHoverBackgroundType={(value) => setAttributes({ pricingTopSectionHoverBackgroundType: value })}
						hoverClassicColor={pricingTopSectionHoverClassicColor}
						setHoverClassicColor={(value) => setAttributes({ pricingTopSectionHoverClassicColor: value === undefined ? '' : value })}
						hoverGradientColor={pricingTopSectionHoverGradientColor} 
						setHoverGradientColor={(value) => setAttributes({ pricingTopSectionHoverGradientColor: value === undefined ? null : value })}
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
						setNormalGradientColor={(value) => setAttributes({ priceButtonNormalGradientColor: value === undefined ? null : value })}
						normalCustomGradientSwitcher={priceButtonNormalCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ priceButtonNormalCustomGradientSwitcher: value })}
						normalCustomGradientInputValue={priceButtonNormalCustomGradientInputValue}
						setNormalCustomGradientInputValue={(value) => setAttributes({ priceButtonNormalCustomGradientInputValue: value })}
						
						hoverBackgroundType={priceButtonHoverBackgroundType}
						setHoverBackgroundType={(value) => setAttributes({ priceButtonHoverBackgroundType: value })}
						hoverClassicColor={priceButtonHoverClassicColor}
						setHoverClassicColor={(value) => setAttributes({ priceButtonHoverClassicColor: value === undefined ? '' : value })}
						hoverGradientColor={priceButtonHoverGradientColor} 
						setHoverGradientColor={(value) => setAttributes({ priceButtonHoverGradientColor: value === undefined ? null : value })}
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