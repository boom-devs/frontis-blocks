import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
	URLInput,
} from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextareaControl,
	RangeControl,
	__experimentalHStack as HStack,
	__experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Internal depencencies
 */
import {
	TEXT_ALIGN,
	HEADING,
	BORDER_STYLES,
	mediaType,
	ICON_POSITION,
	FLIP_ICON_POSITION,
	FLIP_ICON_VERTICAL_POSITION,
	FLIP_WRAP_ALIGNMENT,
	PRESETS,
	OVERFLOW_OP,
	SELECTED_SIDE,
	FLIP_ANIMATION
} from "./constants/constants";

import { useEffect, useMemo } from "@wordpress/element";

import "./editor.scss";
import FBIconPicker from "../../components/icon-picker";
import FB_Range from "@Components/range";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Spacing from "@Components/spacing";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_UrlControl from "@Components/url-control";
import FB_TypographyControl from '@Components/typography-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_ColorControl from "../../components/color-control";
import FB_SwitcherControl from "../../components/switcher-control";
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		flipBoxPresetStyle,
		Heading_Text,
		headingTag,
		Heading_Background_Color,
		Alignment,
		descSwitcher,
		titleSwitcher,
		Sub_Heading_Text,
		headingGlobalTypoSwitcher,
		headingGlobalTypographyData,
		headingGlobalTypoType,
		headingGlobalTypoOption,
		headingFontFamily,
		headingFontSize,
		headingFontSizeUnits,
		headingFontWeight,
		headingFontStyle,
		headingTextTransform,
		headingTextDecoration,
		headingLetterSpacing,
		headingLetterSpacingUnits,
		headingLineHeight,
		headingLineHeightUnits,
		Heading_Color_Switcher,
		Heading_Color,
		Heading_Hover_Color,
		Heading_Border,
		Heading_Border_Color,
		Heading_Border_Hover_Color,
		Heading_Border_Color_Switcher,
		Heading_Border_units,
		Heading_Border_radius_units,
		Heading_Desktop_Border_Width,
		Heading_Tab_Border_Width,
		Heading_Mobile_Border_Width,
		Heading_Desktop_Border_radius_Width,
		Heading_Tab_Border_radius_Width,
		Heading_Mobile_Border_radius_Width,
		activeBorderRadiusDevice,
		borderRadiusLink,
		Heading_padding_units,
		Heading_Desktop_padding,
		Heading_Tab_padding,
		Heading_Mobile_padding,
		// deviceType,
		paddingLink,
		borderLink,

		Heading_Margin_Units,
		Heading_Desktop_Margin,
		Heading_Tab_Margin,
		Heading_Mobile_Margin,
		Heading_Margin_Link,

		flip_Button_Switcher,
		flip_Button_Text,
		flip_Button_Link,
		mediaAlignmentFront,
		mediaAlignmentBack,
		descAlignment,
		buttonAlignment,
		buttonAlignmentBack,
		flipBoxBg,

		SubHeadingPaddingUnits,
		SubHeadingDesktopPadding,
		SubHeadingTabPadding,
		SubHeadingMobilePadding,
		SubHeadingPaddingLink,
		subHeadingGlobalTypoSwitcher,
		subHeadingGlobalTypographyData,
		subHeadingGlobalTypoType,
		subHeadingGlobalTypoOption,
		subHeadingFontFamily,
		subHeadingFontSize,
		subHeadingFontSizeUnits,
		subHeadingFontWeight,
		subHeadingFontStyle,
		subHeadingTextTransform,
		subHeadingTextDecoration,
		subHeadingLetterSpacing,
		subHeadingLetterSpacingUnits,
		subHeadingLineHeight,
		subHeadingLineHeightUnits,
		SubHeadingColor,
		SubHeadingColorSwitcher,
		SubHeadingHoverColor,

		descMarginUnits,
		descDesktopMargin,
		descTabMargin,
		descMobileMargin,
		descActiveMarginDevice,
		descMarginLink,

		flipBoxPaddingUnits,
		flipBoxDesktopPadding,
		flipBoxTabPadding,
		flipBoxMobilePadding,
		flipBoxBorderUnits,
		flipBoxDesktopBorderWidth,
		flipBoxTabBorderWidth,
		flipBoxMobileBorderWidth,

		flipBoxBorderRadiusUnits,
		flipBoxDesktopBorderRadiusWidth,
		flipBoxTabBorderRadiusWidth,
		flipBoxMobileBorderRadiusWidth,

		buttonGlobalTypoSwitcher,
		buttonGlobalTypographyData,
		buttonGlobalTypoType,
		buttonGlobalTypoOption,
		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,
		buttonColorSwitcher,
		buttonTextColor,
		buttonTextHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,
		buttonBorderRadiusWidth,
		btnBorderRadiusLink,

		flipButtonMarginLink,
		flipButtonMarginUnits,
		flipButtonDesktopMargin,
		flipButtonTabMargin,
		flipButtonMobileMargin,
		flipButtonActiveMarginDevice,

		flipButtonPaddingUnits,
		flipButtonDesktopPadding,
		flipButtonTabPadding,
		flipButtonMobilePadding,
		flipButtonPaddingLink,
		flipButtonLink,
		flipbtnTargetUrl,
		icon,
		btnIcon,
		width,
		mediaSwitcher,
		flipModeSwitcher,
		contentAlignment,

		flipButtonBorder,
		flipBoxMarginUnits,
		flipBoxDesktopMargin,
		flipBoxTabMargin,
		flipBoxMobileMargin,
		flipBoxMarginLink,
		flipButtonBorderUnits,
		flipButtonDesktopBorderWidth,
		flipButtonTabBorderWidth,
		flipButtonMobileBorderWidth,
		flipBtnBorderradiusUnits,
		flipBtnDesktopBorderradiusWidth,
		flipBtnTabBorderradiusWidth,
		flipBtnMobileBorderradiusWidth,
		flipButtonBorderColorSwitcher,
		flipButtonBorderColor,
		flipButtonHoverBorderColor,
		boxBgColor,
		boxBgColorSwitcher,
		boxBgHoverColor,
		mediaSize,
		mediaSizeUnits,
		globalZIndex,
		flipBoxOverflow,
		globalPaddingUnits,
		globalPaddingDesktop,
		globalPaddingTablet,
		globalPaddingMobile,
		globalPaddingLink,

		globalMarginUnits,
		globalMarginDesktop,
		globalMarginTablet,
		globalMarginMobile,
		globalMarginLink,

		globalBgColorSwitcher,
		globalBgColor,
		globalBgHoverColor,

		globalBorder,
		globalBorderColorSwitcher,
		globalBorderColor,
		globalBorderHoverColor,
		globalBorderUnits,
		globalBorderDesktop,
		globalBorderTablet,
		globalBorderMobile,
		globalBorderLink,

		globalBorderRadiusUnits,
		globalBorderRadiusDesktop,
		globalBorderRadiusTablet,
		globalBorderRadiusMobile,
		globalBorderRadiusLink,

		mediaBgWidth,
		mediaBgWidthUnits,
		mediaBgHeight,
		mediaBgHeightUnits,

		mediaPaddingUnits,
		mediaPaddingDesktop,
		mediaPaddingTablet,
		mediaPaddingMobile,
		mediaPaddingLink,

		mediaMarginUnits,
		mediaMarginDesktop,
		mediaMarginTablet,
		mediaMarginMobile,
		mediaMarginLink,

		mediaBgColorSwitcher,
		mediaBgColor,
		mediaBgHoverColor,

		mediaBorder,
		mediaBorderColorSwitcher,
		mediaBorderColor,
		mediaBorderHoverColor,
		mediaBorderUnits,
		mediaBorderDesktop,
		mediaBorderTablet,
		mediaBorderMobile,
		mediaBorderLink,

		mediaBorderRadiusUnits,
		mediaBorderRadiusDesktop,
		mediaBorderRadiusTablet,
		mediaBorderRadiusMobile,
		mediaBorderRadiusLink,

		btnIconSize,
		btnIconSizeUnits,
		buttonIconSwitcher,
		btnIconColor,
		btnIconHoverColor,
		btnIconColorSwitcher,
		btnIconPosition,
		flipIconPosition,

		mediaIconColor,
		mediaIconHoverColor,
		mediaIconColorSwitcher,
		boxGlobalBoxShadowSwitcher,
		boxGlobalBoxShadowValues,
		boxGlobalBoxShadowCssValue,
		boxGlobalHoverBoxShadowValues,
		boxGlobalHoverBoxShadowCssValue,
		mediaBgTypeImage,
		bgType,
		flipMediaID,
		flipMediaAlt,
		flipMediaUrl,
		mediaBackColorSwitcher,
		mediaBackgroundType,
		mediaClassicColor,
		mediaGradientColor,
		mediaCustomGradientSwitcher,
		mediaCustomGradientInputValue,
		mediaBackgroundColorStyle,
		mediaBackgroundImageUrl,
		mediaBackgroundImageAlt,
		mediaBackgroundImageID,
		mediaBackgroundImagePosition,
		mediaBackgroundImageAttachment,
		mediaBackgroundImageSize,
		mediaBackgroundImageRepeat,
		mediaHoverBackgroundType,
		mediaHoverClassicColor,
		mediaHoverGradientColor,
		mediaHoverCustomGradientSwitcher,
		mediaHoverCustomGradientInputValue,
		mediaHoverBackgroundColorStyle,
		mediaHoverBackgroundImageUrl,
		mediaHoverBackgroundImageAlt,
		mediaHoverBackgroundImageID,
		mediaHoverBackgroundImagePosition,
		mediaHoverBackgroundImageAttachment,
		mediaHoverBackgroundImageSize,
		mediaHoverBackgroundImageRepeat,
		blockStyle,
		flipButtonBorderLink,
		flipIconVerticalPosition,
		flipCardAlignment,

		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher,

		flipBoxGlobalCustomCSS,
		flipBoxGlobalWraperID,
		flipBoxGlobalWraperClass,

		// Position
		flipBoxPositionType,
		flipBoxHZOrientationType,
		flipBoxVROrientationType,
		flipBoxHZLeftOffset,
		flipBoxHZLeftOffsetUnits,
		flipBoxHZRightOffset,
		flipBoxHZRightOffsetUnits,
		flipBoxVRTopOffset,
		flipBoxVRTopOffsetUnits,
		flipBoxVRBottomOffset,
		flipBoxVRBottomOffsetUnits,
		flipSelectedSide,
		isHover,
		// Flip box front
		flipBoxFrontHeight,
		flipBoxFrontHeightUnits,
		flipBoxFrontWidth,
		flipBoxFrontWidthUnits,
		flipBoxFrontBackColorSwitcher,
		flipBoxFrontBackgroundType,
		flipBoxFrontClassicColor,
		flipBoxFrontGradientColor,
		flipBoxFrontCustomGradientSwitcher,
		flipBoxFrontCustomGradientInputValue,
		flipBoxFrontBackgroundColorStyle,
		flipBoxFrontBackgroundImageUrl,
		flipBoxFrontBackgroundImageAlt,
		flipBoxFrontBackgroundImageID,
		flipBoxFrontBackgroundImagePosition,
		flipBoxFrontBackgroundImageAttachment,
		flipBoxFrontBackgroundImageSize,
		flipBoxFrontBackgroundImageRepeat,
		flipBoxFrontHoverBackgroundType,
		flipBoxFrontHoverClassicColor,
		flipBoxFrontHoverGradientColor,
		flipBoxFrontHoverCustomGradientSwitcher,
		flipBoxFrontHoverCustomGradientInputValue,
		flipBoxFrontHoverBackgroundColorStyle,
		flipBoxFrontHoverBackgroundImageUrl,
		flipBoxFrontHoverBackgroundImageAlt,
		flipBoxFrontHoverBackgroundImageID,
		flipBoxFrontHoverBackgroundImagePosition,
		flipBoxFrontHoverBackgroundImageAttachment,
		flipBoxFrontHoverBackgroundImageSize,
		flipBoxFrontHoverBackgroundImageRepeat,
		//Flip Back
		flipBackBoxPresetStyle,
		flipBack_Button_Switcher,
		flipBack_Button_Text,
		flipBack_Button_Link,
		flipBackBoxPaddingUnits,
		flipBackBoxDesktopPadding,
		flipBackBoxTabPadding,
		flipBackBoxMobilePadding,
		flipBackBoxBorderUnits,
		flipBackBoxDesktopBorderWidth,
		flipBackBoxTabBorderWidth,
		flipBackBoxMobileBorderWidth,

		flipBackBoxBorderRadiusUnits,
		flipBackBoxDesktopBorderRadiusWidth,
		flipBackBoxTabBorderRadiusWidth,
		flipBackBoxMobileBorderRadiusWidth,
		flipBackButtonMarginLink,
		flipBackButtonMarginUnits,
		flipBackButtonDesktopMargin,
		flipBackButtonTabMargin,
		flipBackButtonMobileMargin,
		flipBackButtonActiveMarginDevice,

		flipBackButtonPaddingUnits,
		flipBackButtonDesktopPadding,
		flipBackButtonTabPadding,
		flipBackButtonMobilePadding,
		flipBackButtonPaddingLink,
		buttonIconSwitcherBack,
		flipBackButtonLink,
		flipBackbtnTargetUrl,
		flipBackButtonBorder,
		flipBackBoxMarginUnits,
		flipBackBoxDesktopMargin,
		flipBackBoxTabMargin,
		flipBackBoxMobileMargin,
		flipBackBoxMarginLink,
		flipBackButtonBorderUnits,
		flipBackButtonDesktopBorderWidth,
		flipBackButtonTabBorderWidth,
		flipBackButtonMobileBorderWidth,
		flipBackBtnBorderradiusUnits,
		flipBackBtnDesktopBorderradiusWidth,
		flipBackBtnTabBorderradiusWidth,
		flipBackBtnMobileBorderradiusWidth,
		flipBackButtonBorderColorSwitcher,
		flipBackButtonBorderColor,
		flipBackButtonHoverBorderColor,
		flipBackIconPosition,
		flipBackMediaID,
		flipBackMediaAlt,
		flipBackMediaUrl,
		flipBackButtonBorderLink,
		flipBackIconVerticalPosition,
		flipBackCardAlignment,

		flipBackBoxDesktopSwitcher,
		flipBackBoxTabletSwitcher,
		flipBackBoxMobileSwitcher,

		flipBackBoxGlobalCustomCSS,
		flipBackBoxGlobalWraperID,
		flipBackBoxGlobalWraperClass,

		// Position
		flipBackBoxPositionType,
		flipBackBoxHZOrientationType,
		flipBackBoxVROrientationType,
		flipBackBoxHZLeftOffset,
		flipBackBoxHZLeftOffsetUnits,
		flipBackBoxHZRightOffset,
		flipBackBoxHZRightOffsetUnits,
		flipBackBoxVRTopOffset,
		flipBackBoxVRTopOffsetUnits,
		flipBackBoxVRBottomOffset,
		flipBackBoxVRBottomOffsetUnits,
		flipBackSelectedSide,
		headingTagBack,
		headingTextBack,
		flipBackContent,
		flipBackContentTag,
		descSwitcherBack,
		titleSwitcherBack,
		descAlignmentBack,
		mediaSwitcherBack,
		iconBack,
		flipAnimationType,
		titleAlignmentBack,
		headingBackColorSwitcher,
		headingBackColor,
		headingBackHoverColor,
		headingBackGlobalTypographyData,
		headingBackGlobalTypoSwitcher,
		headingBackGlobalTypoType,
		headingBackGlobalTypoOption,
		headingBackFontFamily,
		headingBackFontSize,
		headingBackFontSizeUnits,
		headingBackFontWeight,
		headingBackFontStyle,
		headingBackTextTransform,
		headingBackTextDecoration,
		headingBackLetterSpacing,
		headingBackLetterSpacingUnits,
		headingBackLineHeight,
		headingBackLineHeightUnits,

		headingBack_padding_units,
		headingBack_Desktop_padding,
		headingBack_Tab_padding,
		headingBack_Mobile_padding,

		headingBack_Margin_Units,
		headingBack_Desktop_Margin,
		headingBack_Tab_Margin,
		headingBack_Mobile_Margin,
		headingBack_Margin_Link,

		headingBack_Border,
		headingBack_Border_Color_Switcher,
		headingBack_Border_Color,
		headingBack_Border_Hover_Color,

		headingBack_Border_units,
		headingBack_Desktop_Border_Width,
		headingBack_Tab_Border_Width,
		headingBack_Mobile_Border_Width,

		headingBack_Border_radius_units,
		headingBack_Desktop_Border_radius_Width,
		headingBack_Tab_Border_radius_Width,
		headingBack_Mobile_Border_radius_Width,
		subHeadingBackGlobalTypographyData,
		subHeadingBackGlobalTypoSwitcher,
		subHeadingBackGlobalTypoType,
		subHeadingBackGlobalTypoOption,
		subHeadingBackFontFamily,
		subHeadingBackFontSize,
		subHeadingBackFontSizeUnits,
		subHeadingBackFontWeight,
		subHeadingBackFontStyle,
		subHeadingBackTextTransform,
		subHeadingBackTextDecoration,
		subHeadingBackLetterSpacing,
		subHeadingBackLetterSpacingUnits,
		subHeadingBackLineHeight,
		subHeadingBackLineHeightUnits,
		subHeadingBackColorSwitcher,
		subHeadingBackColor,
		subHeadingBackHoverColor,
		subHeadingBack_Text,
		subHeadingBack_Tag,
		subHeadingBack_Position,

		subHeadingBackPaddingUnits,
		subHeadingBackDesktopPadding,
		subHeadingBackTabPadding,
		subHeadingBackMobilePadding,
		subHeadingBackPaddingLink,

		descBackMarginUnits,
		descBackDesktopMargin,
		descBackTabMargin,
		descBackMobileMargin,
		descBackMarginLink,

		buttonBackGlobalTypographyData,
		buttonBackGlobalTypoSwitcher,
		buttonBackGlobalTypoType,
		buttonBackGlobalTypoOption,
		buttonBackFontFamily,
		buttonBackFontSize,
		buttonBackFontSizeUnits,
		buttonBackFontWeight,
		buttonBackFontStyle,
		buttonBackTextTransform,
		buttonBackTextDecoration,
		buttonBackLetterSpacing,
		buttonBackLetterSpacingUnits,
		buttonBackLineHeight,
		buttonBackLineHeightUnits,
		buttonBackColorSwitcher,
		buttonBackTextColor,
		buttonBackTextHoverColor,
		buttonBackBgColorSwitcher,
		buttonBackBgColor,
		buttonBackBgHoverColor,

		// Padding
		flipButtonBackPaddingUnits,
		flipButtonBackDesktopPadding,
		flipButtonBackTabPadding,
		flipButtonBackMobilePadding,
		flipButtonBackPaddingLink,

		// Margin
		flipButtonBackMarginUnits,
		flipButtonBackDesktopMargin,
		flipButtonBackTabMargin,
		flipButtonBackMobileMargin,
		flipButtonBackMarginLink,

		// Border
		flipButtonBackBorderColorSwitcher,
		flipButtonBackBorder,
		flipButtonBackBorderColor,
		flipButtonBackHoverBorderColor,
		flipButtonBackBorderUnits,
		flipButtonBackDesktopBorderWidth,
		flipButtonBackTabBorderWidth,
		flipButtonBackMobileBorderWidth,
		flipButtonBackBorderLink,

		// Border Radius
		flipBtnBackBorderradiusUnits,
		flipBtnBackDesktopBorderradiusWidth,
		flipBtnBackTabBorderradiusWidth,
		flipBtnBackMobileBorderradiusWidth,
		btnBackBorderRadiusLink,

		// Padding
		mediaBackPaddingUnits,
		mediaBackPaddingDesktop,
		mediaBackPaddingTablet,
		mediaBackPaddingMobile,
		mediaBackPaddingLink,

		// Margin
		mediaBackMarginUnits,
		mediaBackMarginDesktop,
		mediaBackMarginTablet,
		mediaBackMarginMobile,
		mediaBackMarginLink,

		// Background
		mediaBackBgColorSwitcher,
		mediaBackBgColor,
		bgBackType,
		mediaBackBgHoverColor,

		// Border
		mediaBackBorder,
		mediaBackBorderColorSwitcher,
		mediaBackBorderColor,
		mediaBackBorderHoverColor,
		mediaBackBorderUnits,
		mediaBackBorderDesktop,
		mediaBackBorderTablet,
		mediaBackBorderMobile,
		mediaBackBorderLink,

		// Border Radius
		mediaBackBorderRadiusUnits,
		mediaBackBorderRadiusDesktop,
		mediaBackBorderRadiusTablet,
		mediaBackBorderRadiusMobile,
		mediaBackBorderRadiusLink,

		// Normal Background
		mediaBackBackgroundType,
		mediaBackClassicColor,
		mediaBackGradientColor,
		mediaBackCustomGradientSwitcher,
		mediaBackCustomGradientInputValue,
		mediaBackBackgroundColorStyle,
		mediaBackBackgroundImageUrl,
		mediaBackBackgroundImageAlt,
		mediaBackBackgroundImageID,
		mediaBackBackgroundImagePosition,
		mediaBackBackgroundImageAttachment,
		mediaBackBackgroundImageSize,
		mediaBackBackgroundImageRepeat,

		// Hover Background
		mediaBackHoverBackgroundType,
		mediaBackHoverClassicColor,
		mediaBackHoverGradientColor,
		mediaBackHoverCustomGradientSwitcher,
		mediaBackHoverCustomGradientInputValue,
		mediaBackHoverBackgroundColorStyle,
		mediaBackHoverBackgroundImageUrl,
		mediaBackHoverBackgroundImageAlt,
		mediaBackHoverBackgroundImageID,
		mediaBackHoverBackgroundImagePosition,
		mediaBackHoverBackgroundImageAttachment,
		mediaBackHoverBackgroundImageSize,
		mediaBackHoverBackgroundImageRepeat,

		mediaBackBgWidth,
		mediaBackBgHeight,
		mediaBackBgWidthUnits,
		mediaBackBgHeightUnits,

		mediaBackSize,
		mediaBackSizeDesktop,
		mediaBackSizeSizeTablet,
		mediaBackSizeSizeMobile,
		mediaBackSizeUnitsSave,
		mediaBackSizeUnits,
		mediaBackBgTypeImage,
		mediaBackIconColorSwitcher,
		mediaBackIconColor,
		mediaBackIconHoverColor,

		flipBoxBackWidth,
		flipBoxBackWidthUnits,
		flipBoxBackHeight,
		flipBoxBackHeightUnits,
		flipBoxBackColorSwitcher,
		flipBoxBackBackgroundType,
		flipBoxBackClassicColor,
		flipBoxBackGradientColor,
		flipBoxBackCustomGradientSwitcher,
		flipBoxBackCustomGradientInputValue,
		flipBoxBackBackgroundColorStyle,
		flipBoxBackBackgroundImageUrl,
		flipBoxBackBackgroundImageAlt,
		flipBoxBackBackgroundImageID,
		flipBoxBackBackgroundImagePosition,
		flipBoxBackBackgroundImageAttachment,
		flipBoxBackBackgroundImageSize,
		flipBoxBackBackgroundImageRepeat,
		flipBoxBackHoverBackgroundType,
		flipBoxBackHoverClassicColor,
		flipBoxBackHoverGradientColor,
		flipBoxBackHoverCustomGradientSwitcher,
		flipBoxBackHoverCustomGradientInputValue,
		flipBoxBackHoverBackgroundColorStyle,
		flipBoxBackHoverBackgroundImageUrl,
		flipBoxBackHoverBackgroundImageAlt,
		flipBoxBackHoverBackgroundImageID,
		flipBoxBackHoverBackgroundImagePosition,
		flipBoxBackHoverBackgroundImageAttachment,
		flipBoxBackHoverBackgroundImageSize,
		flipBoxBackHoverBackgroundImageRepeat,
		btnIconBack,
		// Padding
		flipBoxFrontPaddingUnits,
		flipBoxFrontPaddingDesktop,
		flipBoxFrontPaddingTablet,
		flipBoxFrontPaddingMobile,
		flipBoxFrontPaddingLink,

		// Margin
		flipBoxFrontMarginUnits,
		flipBoxFrontMarginDesktop,
		flipBoxFrontMarginTablet,
		flipBoxFrontMarginMobile,
		flipBoxFrontMarginLink,

		// Border
		flipBoxFrontBorder,
		flipBoxFrontBorderColorSwitcher,
		flipBoxFrontBorderColor,
		flipBoxFrontBorderHoverColor,
		flipBoxFrontBorderUnits,
		flipBoxFrontBorderDesktop,
		flipBoxFrontBorderTablet,
		flipBoxFrontBorderMobile,
		flipBoxFrontBorderLink,

		// Border Radius
		flipBoxFrontBorderRadiusUnits,
		flipBoxFrontBorderRadiusDesktop,
		flipBoxFrontBorderRadiusTablet,
		flipBoxFrontBorderRadiusMobile,
		flipBoxFrontBorderRadiusLink,

		// Padding
		flipBoxBackPaddingUnits,
		flipBoxBackPaddingDesktop,
		flipBoxBackPaddingTablet,
		flipBoxBackPaddingMobile,
		flipBoxBackPaddingLink,

		// Margin
		flipBoxBackMarginUnits,
		flipBoxBackMarginDesktop,
		flipBoxBackMarginTablet,
		flipBoxBackMarginMobile,
		flipBoxBackMarginLink,

		// Border
		flipBoxBackBorder,
		flipBoxBackBorderColorSwitcher,
		flipBoxBackBorderColor,
		flipBoxBackBorderHoverColor,
		flipBoxBackBorderUnits,
		flipBoxBackBorderDesktop,
		flipBoxBackBorderTablet,
		flipBoxBackBorderMobile,
		flipBoxBackBorderLink,

		// Border Radius
		flipBoxBackBorderRadiusUnits,
		flipBoxBackBorderRadiusDesktop,
		flipBoxBackBorderRadiusTablet,
		flipBoxBackBorderRadiusMobile,
		flipBoxBackBorderRadiusLink,
		btnBackIconColor,
		btnBackIconSize,
		btnBackIconSizeUnits,
		btnBackIconHoverColor,
		buttonBackIconSwitcher,
		btnBackIconColorSwitcher,
		buttonBackIconRotateSwitcher,
		buttonBackIconRotate,
		buttonBackIconRotateHover,
		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,
		btnIconGap,
		btnIconGapUnits,
		btnBackIconGap,
		btnBackIconGapUnits,
		flipBoxAlignment,

		/** Start Dynamic Title Text */
		dynamicTitleEnabled,
		dynamicTitleSource,
		dynamicTitlePostId,
		dynamicTitlePostType,
		dynamicTitlePostLabel,
		dynamicTitleField,
		dynamicTitleFeaturedImageField,

		dynamicTitleDateType,
		dynamicTitleDateFormat,

		dynamicTitleTimeType,
		dynamicTitleTimeFormat,

		dynamicTitleCommentsZeroText,
		dynamicTitleCommentsOneText,
		dynamicTitleCommentsManyText,

		dynamicTitleTermsTaxonomy,
		dynamicTitleTermsSeparator,
		dynamicTitleEnableLink,
		dynamicTitleLinkSource,
		/** End Dynamic Title Text */

		/** Start Dynamic Description Text */
		dynamicDescriptionEnabled,
		dynamicDescriptionSource,
		dynamicDescriptionPostId,
		dynamicDescriptionPostType,
		dynamicDescriptionPostLabel,
		dynamicDescriptionField,
		dynamicDescriptionFeaturedImageField,

		dynamicDescriptionDateType,
		dynamicDescriptionDateFormat,

		dynamicDescriptionTimeType,
		dynamicDescriptionTimeFormat,

		dynamicDescriptionCommentsZeroText,
		dynamicDescriptionCommentsOneText,
		dynamicDescriptionCommentsManyText,

		dynamicDescriptionTermsTaxonomy,
		dynamicDescriptionTermsSeparator,
		dynamicDescriptionEnableLink,
		dynamicDescriptionLinkSource,
		/** End Dynamic Description Text */

		/** Start Dynamic Btn One Text */
		dynamicBtnEnabled,
		dynamicBtnSource,
		dynamicBtnPostId,
		dynamicBtnPostType,
		dynamicBtnPostLabel,
		dynamicBtnField,
		dynamicBtnFeaturedImageField,

		dynamicBtnDateType,
		dynamicBtnDateFormat,

		dynamicBtnTimeType,
		dynamicBtnTimeFormat,

		dynamicBtnCommentsZeroText,
		dynamicBtnCommentsOneText,
		dynamicBtnCommentsManyText,

		dynamicBtnTermsTaxonomy,
		dynamicBtnTermsSeparator,
		dynamicBtnEnableLink,	
		dynamicBtnLinkSource,
		/** End Dynamic Btn Text */

		/** Start Dynamic Back Title Text */
		dynamicBackTitleEnabled,
		dynamicBackTitleSource,
		dynamicBackTitlePostId,
		dynamicBackTitlePostType,
		dynamicBackTitlePostLabel,
		dynamicBackTitleField,
		dynamicBackTitleFeaturedImageField,

		dynamicBackTitleDateType,
		dynamicBackTitleDateFormat,

		dynamicBackTitleTimeType,
		dynamicBackTitleTimeFormat,

		dynamicBackTitleCommentsZeroText,
		dynamicBackTitleCommentsOneText,
		dynamicBackTitleCommentsManyText,

		dynamicBackTitleTermsTaxonomy,
		dynamicBackTitleTermsSeparator,
		dynamicBackTitleEnableLink,
		dynamicBackTitleLinkSource,
		/** End Dynamic Back Title Text */

		/** Start Dynamic Back Description Text */
		dynamicBackDescriptionEnabled,
		dynamicBackDescriptionSource,
		dynamicBackDescriptionPostId,
		dynamicBackDescriptionPostType,
		dynamicBackDescriptionPostLabel,
		dynamicBackDescriptionField,
		dynamicBackDescriptionFeaturedImageField,

		dynamicBackDescriptionDateType,
		dynamicBackDescriptionDateFormat,

		dynamicBackDescriptionTimeType,
		dynamicBackDescriptionTimeFormat,

		dynamicBackDescriptionCommentsZeroText,
		dynamicBackDescriptionCommentsOneText,
		dynamicBackDescriptionCommentsManyText,

		dynamicBackDescriptionTermsTaxonomy,
		dynamicBackDescriptionTermsSeparator,
		dynamicBackDescriptionEnableLink,
		dynamicBackDescriptionLinkSource,
		/** End Dynamic Back Description Text */

		/** Start Dynamic Back btn Text */
		dynamicBackBtnEnabled,
		dynamicBackBtnSource,
		dynamicBackBtnPostId,
		dynamicBackBtnPostType,
		dynamicBackBtnPostLabel,
		dynamicBackBtnField,
		dynamicBackBtnFeaturedImageField,

		dynamicBackBtnDateType,
		dynamicBackBtnDateFormat,

		dynamicBackBtnTimeType,
		dynamicBackBtnTimeFormat,

		dynamicBackBtnCommentsZeroText,
		dynamicBackBtnCommentsOneText,
		dynamicBackBtnCommentsManyText,

		dynamicBackBtnTermsTaxonomy,
		dynamicBackBtnTermsSeparator,
		dynamicBackBtnEnableLink,	
		dynamicBackBtnLinkSource,
		/** End Dynamic Back btn Text */
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-flip-box-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	/** flip Image */
	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/avatar.png';
	}

	// Set default value for front image
	useEffect(() => {
		if (!flipMediaUrl) {
			setAttributes({ flipMediaUrl: defaultImageUrl });
		}
	}, []);
	// Set default value for back image
	useEffect(() => {
		if (!flipBackMediaUrl) {
			setAttributes({ flipBackMediaUrl: defaultImageUrl });
		}
	}, []);

	const iconHandler = (iconName) => {
		setAttributes({ icon: iconName });
	};

	const iconHandlerBack = (iconName) => {
		setAttributes({ iconBack: iconName });
	};

	const buttonIconHandler = (iconName) => {
		setAttributes({ btnIcon: iconName });
	};

	const buttonIconHandlerBack = (iconName) => {
		setAttributes({ btnIconBack: iconName });
	};

	const getFlipTransform = (flipAnimationType) => {
		switch (flipAnimationType) {
			case "flip-left":
				return "rotateY(-180deg)";
			case "flip-right":
				return "rotateY(180deg)";
			case "flip-up":
				return "rotateX(180deg)";
			case "flip-down":
				return "rotateX(-180deg)";
			case "zoom-in":
				return "scale(1.1)";
			case "zoom-out":
				return "scale(0.8)";
			default:
				return "none";
		}
	};
	/** Start Preset Style **/
	const changeflipBoxPreset = (selectedPreset) => {
		const presetConfigurations = {
			"preset-1": {
				flip_Button_Switcher: true,
				mediaClassicColor: '#399CFF',
				mediaHoverClassicColor: '#ffffff',
				globalBgColor: '#EBF5FF',
				globalBgHoverColor: '#399CFF',
				mediaIconColor: '#ffffff',
				mediaIconHoverColor: '#399CFF',
				Heading_Color: '#15171C',
				Heading_Hover_Color: '#ffffff',
				SubHeadingColor: '#555E72',
				SubHeadingHoverColor: '#ffffff',
				buttonTextColor: '#399CFF',
				btnIconColor: '#399CFF',
				globalBorderRadiusDesktop: {
					top: "6",
					bottom: "6",
					left: "6",
					right: "6",
				},
				mediaBorderRadiusDesktop: {
					top: "50",
					bottom: "50",
					left: "50",
					right: "50",
				},
			},
			"preset-2": {
				flip_Button_Switcher: false,
				mediaClassicColor: '',
				mediaHoverClassicColor: '',
				globalBgColor: '#399CFF',
				globalBgHoverColor: '',
				mediaIconColor: '#ffffff',
				mediaIconHoverColor: '#ffffff',
				Heading_Color: '#ffffff',
				Heading_Hover_Color: '#ffffff',
				SubHeadingColor: '#ffffff',
				SubHeadingHoverColor: '#ffffff',
				globalBorderRadiusDesktop: {
					top: "24",
					bottom: "24",
					left: "24",
					right: "24",
				},
				mediaBorderRadiusDesktop: {
					top: "",
					bottom: "",
					left: "",
					right: "",
				},
			},
			"preset-3": {
				flip_Button_Switcher: false,
				mediaClassicColor: '#399CFF',
				mediaHoverClassicColor: '399CFF',
				globalBgColor: '',
				globalBgHoverColor: '',
				mediaIconColor: '#ffffff',
				mediaIconHoverColor: '#ffffff',
				Heading_Color: '#15171C',
				Heading_Hover_Color: '#15171C',
				SubHeadingColor: '#555E72',
				SubHeadingHoverColor: '#555E72',
				globalBorderRadiusDesktop: {
					top: "24",
					bottom: "24",
					left: "24",
					right: "24",
				},
				mediaBorderRadiusDesktop: {
					top: "24",
					bottom: "24",
					left: "24",
					right: "24",
				},
			},
			"preset-4": {
				flip_Button_Switcher: true,
				mediaClassicColor: '#399CFF',
				mediaHoverClassicColor: '#ffffff',
				globalBgColor: '#FFFBF5',
				globalBgHoverColor: '#399CFF',
				mediaIconColor: '#ffffff',
				mediaIconHoverColor: '#399CFF',
				Heading_Color: '#15171C',
				Heading_Hover_Color: '#ffffff',
				SubHeadingColor: '#555E72',
				SubHeadingHoverColor: '#ffffff',
				buttonTextColor: '#F89B2E',
				buttonTextHoverColor: '#F89B2E',
				btnIconColor: '#F89B2E',
				btnIconHoverColor: '#F89B2E',
				globalBorderRadiusDesktop: {
					top: "6",
					bottom: "6",
					left: "6",
					right: "6",
				},
				mediaBorderRadiusDesktop: {
					top: "24",
					bottom: "24",
					left: "24",
					right: "24",
				},
			},
			"preset-5": {
				flip_Button_Switcher: true,
				mediaClassicColor: '#399CFF',
				mediaHoverClassicColor: '399CFF',
				globalBgColor: '',
				globalBgHoverColor: '',
				mediaIconColor: '#ffffff',
				mediaIconHoverColor: '#ffffff',
				Heading_Color: '#15171C',
				Heading_Hover_Color: '#15171C',
				SubHeadingColor: '#555E72',
				SubHeadingHoverColor: '#555E72',
				buttonTextColor: '#399CFF',
				buttonTextHoverColor: '#399CFF',
				btnIconColor: '#399CFF',
				btnIconHoverColor: '#399CFF',
				globalBorderRadiusDesktop: {
					top: "",
					bottom: "",
					left: "",
					right: "",
				},
			},

		};

		const selectedPresetConfig = presetConfigurations[selectedPreset];

		if (selectedPresetConfig) {
			setAttributes({
				flipBoxPresetStyle: selectedPreset,
				...selectedPresetConfig,
			});
		} else {
			console.warn(`Dual Button: Preset "${selectedPreset}" not found.`);
		}
	};

	/** End Preset Style **/

	/** Heading Padding */
	const handleHeadingPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (paddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_padding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_padding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_padding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_padding: {
							...Heading_Desktop_padding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_padding: { ...Heading_Tab_padding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_padding: {
							...Heading_Mobile_padding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingPaddingCombineBtn = () => {
		setAttributes({ paddingLink: !paddingLink });
	};

	const handleHeadingPaddingUnitsHandler = (unit) => {
		setAttributes({
			Heading_padding_units: {
				...Heading_padding_units,
				[deviceType]: unit,
			},
		});
	};
	const headingPaddingDesktopWidthValue = `${Heading_Desktop_padding?.top}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.right}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.bottom}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.left}${Heading_padding_units?.Desktop}`;
	const headingPaddingTabWidthValue = `${Heading_Tab_padding?.top}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.right}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.bottom}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.left}${Heading_padding_units?.Tablet}`;
	const headingPaddingMobileWidthValue = `${Heading_Mobile_padding?.top}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.right}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.bottom}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.left}${Heading_padding_units?.Mobile}`;
	/** Heading Margin */
	const handleHeadingMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (Heading_Margin_Link) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_Margin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_Margin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_Margin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_Margin: {
							...Heading_Desktop_Margin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_Margin: { ...Heading_Tab_Margin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_Margin: {
							...Heading_Mobile_Margin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingMarginCombineBtn = () => {
		setAttributes({
			Heading_Margin_Link: !Heading_Margin_Link,
		});
	};

	const handleHeadingMarginUnitsHandler = (unit) => {
		setAttributes({
			Heading_Margin_Units: {
				...Heading_Margin_Units,
				[deviceType]: unit,
			},
		});
	};

	const headingMarginDesktopWidthValue = `${Heading_Desktop_Margin?.top}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.right}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.bottom}${Heading_Margin_Units?.Desktop} ${Heading_Desktop_Margin?.left}${Heading_Margin_Units?.Desktop}`;
	const headingMarginTabWidthValue = `${Heading_Tab_Margin?.top}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.right}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.bottom}${Heading_Margin_Units?.Tablet} ${Heading_Tab_Margin?.left}${Heading_Margin_Units?.Tablet}`;
	const headingMarginMobileWidthValue = `${Heading_Mobile_Margin?.top}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.right}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.bottom}${Heading_Margin_Units?.Mobile} ${Heading_Mobile_Margin?.left}${Heading_Margin_Units?.Mobile}`;
	/** Heading Border */
	const handleHeadingBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (borderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_Border_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_Border_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_Border_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_Border_Width: {
							...Heading_Desktop_Border_Width,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_Border_Width: {
							...Heading_Tab_Border_Width,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_Border_Width: {
							...Heading_Mobile_Border_Width,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingBorderCombineBtn = () => {
		setAttributes({ borderLink: !borderLink });
	};

	const handleHeadingBorderUnitsHandler = (unit) => {
		setAttributes({
			Heading_Border_units: {
				...Heading_Border_units,
				[deviceType]: unit,
			},
		});
	};

	const headingBorderDesktopWidthValue = `${Heading_Desktop_Border_Width?.top}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.right}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.bottom}${Heading_Border_units?.Desktop} ${Heading_Desktop_Border_Width?.left}${Heading_Border_units?.Desktop}`;
	const headingBorderTabWidthValue = `${Heading_Tab_Border_Width?.top}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.right}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.bottom}${Heading_Border_units?.Tablet} ${Heading_Tab_Border_Width?.left}${Heading_Border_units?.Tablet}`;
	const headingBorderMobileWidthValue = `${Heading_Mobile_Border_Width?.top}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.right}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.bottom}${Heading_Border_units?.Mobile} ${Heading_Mobile_Border_Width?.left}${Heading_Border_units?.Mobile}`;

	/** Heading Border Radius */
	const handleHeadingBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (borderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_Border_radius_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_Border_radius_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_Border_radius_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						Heading_Desktop_Border_radius_Width: {
							...Heading_Desktop_Border_radius_Width,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						Heading_Tab_Border_radius_Width: {
							...Heading_Tab_Border_radius_Width,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						Heading_Mobile_Border_radius_Width: {
							...Heading_Mobile_Border_radius_Width,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingBorderRadiusCombineBtn = () => {
		setAttributes({ borderRadiusLink: !borderRadiusLink });
	};

	const handleHeadingBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			Heading_Border_radius_units: {
				...Heading_Border_radius_units,
				[deviceType]: unit,
			},
		});
	};

	const headingBorderRadiusDesktopWidthValue = `${Heading_Desktop_Border_radius_Width?.top}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.right}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Desktop} ${Heading_Desktop_Border_radius_Width?.left}${Heading_Border_radius_units?.Desktop}`;
	const headingBorderRadiusTabWidthValue = `${Heading_Tab_Border_radius_Width?.top}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.right}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Tablet} ${Heading_Tab_Border_radius_Width?.left}${Heading_Border_radius_units?.Tablet}`;
	const headingBorderRadiusMobileWidthValue = `${Heading_Mobile_Border_radius_Width?.top}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.right}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.bottom}${Heading_Border_radius_units?.Mobile} ${Heading_Mobile_Border_radius_Width?.left}${Heading_Border_radius_units?.Mobile}`;

	/** Heading Back Padding */
	const handleheadingBackPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (paddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_padding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_padding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_padding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_padding: {
							...headingBack_Desktop_padding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_padding: { ...headingBack_Tab_padding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_padding: {
							...headingBack_Mobile_padding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleheadingBackPaddingCombineBtn = () => {
		setAttributes({ paddingLink: !paddingLink });
	};

	const handleheadingBackPaddingUnitsHandler = (unit) => {
		setAttributes({
			headingBack_padding_units: {
				...headingBack_padding_units,
				[deviceType]: unit,
			},
		});
	};
	const headingBackPaddingDesktopWidthValue = `${headingBack_Desktop_padding?.top}${headingBack_padding_units?.Desktop} ${headingBack_Desktop_padding?.right}${headingBack_padding_units?.Desktop} ${headingBack_Desktop_padding?.bottom}${headingBack_padding_units?.Desktop} ${headingBack_Desktop_padding?.left}${headingBack_padding_units?.Desktop}`;
	const headingBackPaddingTabWidthValue = `${headingBack_Tab_padding?.top}${headingBack_padding_units?.Tablet} ${headingBack_Tab_padding?.right}${headingBack_padding_units?.Tablet} ${headingBack_Tab_padding?.bottom}${headingBack_padding_units?.Tablet} ${headingBack_Tab_padding?.left}${headingBack_padding_units?.Tablet}`;
	const headingBackPaddingMobileWidthValue = `${headingBack_Mobile_padding?.top}${headingBack_padding_units?.Mobile} ${headingBack_Mobile_padding?.right}${headingBack_padding_units?.Mobile} ${headingBack_Mobile_padding?.bottom}${headingBack_padding_units?.Mobile} ${headingBack_Mobile_padding?.left}${headingBack_padding_units?.Mobile}`;
	/** Heading Back Margin */
	const handleheadingBackMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (headingBack_Margin_Link) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_Margin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_Margin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_Margin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_Margin: {
							...headingBack_Desktop_Margin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_Margin: { ...headingBack_Tab_Margin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_Margin: {
							...headingBack_Mobile_Margin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleheadingBackMarginCombineBtn = () => {
		setAttributes({
			headingBack_Margin_Link: !headingBack_Margin_Link,
		});
	};

	const handleheadingBackMarginUnitsHandler = (unit) => {
		setAttributes({
			headingBack_Margin_Units: {
				...headingBack_Margin_Units,
				[deviceType]: unit,
			},
		});
	};

	const headingBackMarginDesktopWidthValue = `${headingBack_Desktop_Margin?.top}${headingBack_Margin_Units?.Desktop} ${headingBack_Desktop_Margin?.right}${headingBack_Margin_Units?.Desktop} ${headingBack_Desktop_Margin?.bottom}${headingBack_Margin_Units?.Desktop} ${headingBack_Desktop_Margin?.left}${headingBack_Margin_Units?.Desktop}`;
	const headingBackMarginTabWidthValue = `${headingBack_Tab_Margin?.top}${headingBack_Margin_Units?.Tablet} ${headingBack_Tab_Margin?.right}${headingBack_Margin_Units?.Tablet} ${headingBack_Tab_Margin?.bottom}${headingBack_Margin_Units?.Tablet} ${headingBack_Tab_Margin?.left}${headingBack_Margin_Units?.Tablet}`;
	const headingBackMarginMobileWidthValue = `${headingBack_Mobile_Margin?.top}${headingBack_Margin_Units?.Mobile} ${headingBack_Mobile_Margin?.right}${headingBack_Margin_Units?.Mobile} ${headingBack_Mobile_Margin?.bottom}${headingBack_Margin_Units?.Mobile} ${headingBack_Mobile_Margin?.left}${headingBack_Margin_Units?.Mobile}`;
	/** headingBack Border */
	const handleheadingBackBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (borderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_Border_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_Border_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_Border_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_Border_Width: {
							...headingBack_Desktop_Border_Width,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_Border_Width: {
							...headingBack_Tab_Border_Width,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_Border_Width: {
							...headingBack_Mobile_Border_Width,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleheadingBackBorderCombineBtn = () => {
		setAttributes({ borderLink: !borderLink });
	};

	const handleheadingBackBorderUnitsHandler = (unit) => {
		setAttributes({
			headingBack_Border_units: {
				...headingBack_Border_units,
				[deviceType]: unit,
			},
		});
	};

	const headingBackBorderDesktopWidthValue = `${headingBack_Desktop_Border_Width?.top}${headingBack_Border_units?.Desktop} ${headingBack_Desktop_Border_Width?.right}${headingBack_Border_units?.Desktop} ${headingBack_Desktop_Border_Width?.bottom}${headingBack_Border_units?.Desktop} ${headingBack_Desktop_Border_Width?.left}${headingBack_Border_units?.Desktop}`;
	const headingBackBorderTabWidthValue = `${headingBack_Tab_Border_Width?.top}${headingBack_Border_units?.Tablet} ${headingBack_Tab_Border_Width?.right}${headingBack_Border_units?.Tablet} ${headingBack_Tab_Border_Width?.bottom}${headingBack_Border_units?.Tablet} ${headingBack_Tab_Border_Width?.left}${headingBack_Border_units?.Tablet}`;
	const headingBackBorderMobileWidthValue = `${headingBack_Mobile_Border_Width?.top}${headingBack_Border_units?.Mobile} ${headingBack_Mobile_Border_Width?.right}${headingBack_Border_units?.Mobile} ${headingBack_Mobile_Border_Width?.bottom}${headingBack_Border_units?.Mobile} ${headingBack_Mobile_Border_Width?.left}${headingBack_Border_units?.Mobile}`;

	/** Heading Back Border Radius */
	const handleheadingBackBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (borderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_Border_radius_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_Border_radius_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_Border_radius_Width: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingBack_Desktop_Border_radius_Width: {
							...headingBack_Desktop_Border_radius_Width,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingBack_Tab_Border_radius_Width: {
							...headingBack_Tab_Border_radius_Width,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingBack_Mobile_Border_radius_Width: {
							...headingBack_Mobile_Border_radius_Width,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleheadingBackBorderRadiusCombineBtn = () => {
		setAttributes({ borderRadiusLink: !borderRadiusLink });
	};

	const handleheadingBackBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			headingBack_Border_radius_units: {
				...headingBack_Border_radius_units,
				[deviceType]: unit,
			},
		});
	};

	const headingBackBorderRadiusDesktopWidthValue = `${headingBack_Desktop_Border_radius_Width?.top}${headingBack_Border_radius_units?.Desktop} ${headingBack_Desktop_Border_radius_Width?.right}${headingBack_Border_radius_units?.Desktop} ${headingBack_Desktop_Border_radius_Width?.bottom}${headingBack_Border_radius_units?.Desktop} ${headingBack_Desktop_Border_radius_Width?.left}${headingBack_Border_radius_units?.Desktop}`;
	const headingBackBorderRadiusTabWidthValue = `${headingBack_Tab_Border_radius_Width?.top}${headingBack_Border_radius_units?.Tablet} ${headingBack_Tab_Border_radius_Width?.right}${headingBack_Border_radius_units?.Tablet} ${headingBack_Tab_Border_radius_Width?.bottom}${headingBack_Border_radius_units?.Tablet} ${headingBack_Tab_Border_radius_Width?.left}${headingBack_Border_radius_units?.Tablet}`;
	const headingBackBorderRadiusMobileWidthValue = `${headingBack_Mobile_Border_radius_Width?.top}${headingBack_Border_radius_units?.Mobile} ${headingBack_Mobile_Border_radius_Width?.right}${headingBack_Border_radius_units?.Mobile} ${headingBack_Mobile_Border_radius_Width?.bottom}${headingBack_Border_radius_units?.Mobile} ${headingBack_Mobile_Border_radius_Width?.left}${headingBack_Border_radius_units?.Mobile}`;

	/** Desc Padding */
	const handleDescPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (SubHeadingPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						SubHeadingDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						SubHeadingTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						SubHeadingMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						SubHeadingDesktopPadding: {
							...SubHeadingDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						SubHeadingTabPadding: {
							...SubHeadingTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						SubHeadingMobilePadding: {
							...SubHeadingMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleDescPaddingCombineBtn = () => {
		setAttributes({ SubHeadingPaddingLink: !SubHeadingPaddingLink });
	};

	const handleDescPaddingUnitsHandler = (unit) => {
		setAttributes({
			SubHeadingPaddingUnits: {
				...SubHeadingPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const subHeadingDesktopPaddingValue = `${SubHeadingDesktopPadding?.top}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.right}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.bottom}${SubHeadingPaddingUnits?.Desktop} ${SubHeadingDesktopPadding?.left}${SubHeadingPaddingUnits?.Desktop}`;
	const subHeadingTabPaddingValue = `${SubHeadingTabPadding?.top}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.right}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.bottom}${SubHeadingPaddingUnits?.Tablet} ${SubHeadingTabPadding?.left}${SubHeadingPaddingUnits?.Tablet}`;
	const subHeadingMobilePaddingValue = `${SubHeadingMobilePadding?.top}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.right}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.bottom}${SubHeadingPaddingUnits?.Mobile} ${SubHeadingMobilePadding?.left}${SubHeadingPaddingUnits?.Mobile}`;

	/** Start Margin */
	const handleDescMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (descMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						descDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						descTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						descMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						descDesktopMargin: {
							...descDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						descTabMargin: {
							...descTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						descMobileMargin: {
							...descMobileMargin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleDescMarginCombineBtn = () => {
		setAttributes({ descMarginLink: !descMarginLink });
	};

	const handleDescMarginUnitsHandler = (unit) => {
		setAttributes({
			descMarginUnits: {
				...descMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const descDesktopMarginValue = `${descDesktopMargin?.top}${descMarginUnits?.Desktop} ${descDesktopMargin?.right}${descMarginUnits?.Desktop} ${descDesktopMargin?.bottom}${descMarginUnits?.Desktop} ${descDesktopMargin?.left}${descMarginUnits?.Desktop}`;
	const descTabMarginValue = `${descTabMargin?.top}${descMarginUnits?.Tablet} ${descTabMargin?.right}${descMarginUnits?.Tablet} ${descTabMargin?.bottom}${descMarginUnits?.Tablet} ${descTabMargin?.left}${descMarginUnits?.Tablet}`;
	const descMobileMarginValue = `${descMobileMargin?.top}${descMarginUnits?.Mobile} ${descMobileMargin?.right}${descMarginUnits?.Mobile} ${descMobileMargin?.bottom}${descMarginUnits?.Mobile} ${descMobileMargin?.left}${descMarginUnits?.Mobile}`;

	/* Flip Back Spacing */
	const handleDescBackPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (subHeadingBackPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						subHeadingBackDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						subHeadingBackTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						subHeadingBackMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						subHeadingBackDesktopPadding: {
							...subHeadingBackDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						subHeadingBackTabPadding: {
							...subHeadingBackTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						subHeadingBackMobilePadding: {
							...subHeadingBackMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleDescBackPaddingCombineBtn = () => {
		setAttributes({ subHeadingBackPaddingLink: !subHeadingBackPaddingLink });
	};

	const handleDescBackPaddingUnitsHandler = (unit) => {
		setAttributes({
			subHeadingBackPaddingUnits: {
				...subHeadingBackPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const subHeadingBackDesktopPaddingValue = `${subHeadingBackDesktopPadding?.top}${subHeadingBackPaddingUnits?.Desktop} ${subHeadingBackDesktopPadding?.right}${subHeadingBackPaddingUnits?.Desktop} ${subHeadingBackDesktopPadding?.bottom}${subHeadingBackPaddingUnits?.Desktop} ${subHeadingBackDesktopPadding?.left}${subHeadingBackPaddingUnits?.Desktop}`;
	const subHeadingBackTabPaddingValue = `${subHeadingBackTabPadding?.top}${subHeadingBackPaddingUnits?.Tablet} ${subHeadingBackTabPadding?.right}${subHeadingBackPaddingUnits?.Tablet} ${subHeadingBackTabPadding?.bottom}${subHeadingBackPaddingUnits?.Tablet} ${subHeadingBackTabPadding?.left}${subHeadingBackPaddingUnits?.Tablet}`;
	const subHeadingBackMobilePaddingValue = `${subHeadingBackMobilePadding?.top}${subHeadingBackPaddingUnits?.Mobile} ${subHeadingBackMobilePadding?.right}${subHeadingBackPaddingUnits?.Mobile} ${subHeadingBackMobilePadding?.bottom}${subHeadingBackPaddingUnits?.Mobile} ${subHeadingBackMobilePadding?.left}${subHeadingBackPaddingUnits?.Mobile}`;

	/** Start Margin */
	const handleDescBackMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (descBackMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						descBackDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						descBackTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						descBackMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						descBackDesktopMargin: {
							...descBackDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						descBackTabMargin: {
							...descBackTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						descBackMobileMargin: {
							...descBackMobileMargin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleDescBackMarginCombineBtn = () => {
		setAttributes({ descBackMarginLink: !descBackMarginLink });
	};

	const handleDescBackMarginUnitsHandler = (unit) => {
		setAttributes({
			descBackMarginUnits: {
				...descBackMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const descBackDesktopMarginValue = `${descBackDesktopMargin?.top}${descBackMarginUnits?.Desktop} ${descBackDesktopMargin?.right}${descBackMarginUnits?.Desktop} ${descBackDesktopMargin?.bottom}${descBackMarginUnits?.Desktop} ${descBackDesktopMargin?.left}${descBackMarginUnits?.Desktop}`;
	const descBackTabMarginValue = `${descBackTabMargin?.top}${descBackMarginUnits?.Tablet} ${descBackTabMargin?.right}${descBackMarginUnits?.Tablet} ${descBackTabMargin?.bottom}${descBackMarginUnits?.Tablet} ${descBackTabMargin?.left}${descBackMarginUnits?.Tablet}`;
	const descBackMobileMarginValue = `${descBackMobileMargin?.top}${descBackMarginUnits?.Mobile} ${descBackMobileMargin?.right}${descBackMarginUnits?.Mobile} ${descBackMobileMargin?.bottom}${descBackMarginUnits?.Mobile} ${descBackMobileMargin?.left}${descBackMarginUnits?.Mobile}`;

	/* Button Padding */
	const handleButtonPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipButtonPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonDesktopPadding: {
							...flipButtonDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonTabPadding: {
							...flipButtonTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonMobilePadding: {
							...flipButtonMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonPaddingCombineBtn = () => {
		setAttributes({ flipButtonPaddingLink: !flipButtonPaddingLink });
	};

	const handleButtonPaddingUnitsHandler = (unit) => {
		setAttributes({
			flipButtonPaddingUnits: {
				...flipButtonPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonDesktopPaddingValue = `${flipButtonDesktopPadding?.top}${flipButtonPaddingUnits?.Desktop} ${flipButtonDesktopPadding?.right}${flipButtonPaddingUnits?.Desktop} ${flipButtonDesktopPadding?.bottom}${flipButtonPaddingUnits?.Desktop} ${flipButtonDesktopPadding?.left}${flipButtonPaddingUnits?.Desktop}`;
	const buttonTabPaddingValue = `${flipButtonTabPadding?.top}${flipButtonPaddingUnits?.Tablet} ${flipButtonTabPadding?.right}${flipButtonPaddingUnits?.Tablet} ${flipButtonTabPadding?.bottom}${flipButtonPaddingUnits?.Tablet} ${flipButtonTabPadding?.left}${flipButtonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingValue = `${flipButtonMobilePadding?.top}${flipButtonPaddingUnits?.Mobile} ${flipButtonMobilePadding?.right}${flipButtonPaddingUnits?.Mobile} ${flipButtonMobilePadding?.bottom}${flipButtonPaddingUnits?.Mobile} ${flipButtonMobilePadding?.left}${flipButtonPaddingUnits?.Mobile}`;

	/* Button Margin */
	const handleButtonMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipButtonMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonDesktopMargin: {
							...flipButtonDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonTabMargin: {
							...flipButtonTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonMobileMargin: {
							...flipButtonMobileMargin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonMarginCombineBtn = () => {
		setAttributes({ flipButtonMarginLink: !flipButtonMarginLink });
	};

	const handleButtonMarginUnitsHandler = (unit) => {
		setAttributes({
			flipButtonMarginUnits: {
				...flipButtonMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonDesktopMarginValue = `${flipButtonDesktopMargin?.top}${flipButtonMarginUnits?.Desktop} ${flipButtonDesktopMargin?.right}${flipButtonMarginUnits?.Desktop} ${flipButtonDesktopMargin?.bottom}${flipButtonMarginUnits?.Desktop} ${flipButtonDesktopMargin?.left}${flipButtonMarginUnits?.Desktop}`;
	const buttonTabMarginValue = `${flipButtonTabMargin?.top}${flipButtonMarginUnits?.Tablet} ${flipButtonTabMargin?.right}${flipButtonMarginUnits?.Tablet} ${flipButtonTabMargin?.bottom}${flipButtonMarginUnits?.Tablet} ${flipButtonTabMargin?.left}${flipButtonMarginUnits?.Tablet}`;
	const buttonMobileMarginValue = `${flipButtonMobileMargin?.top}${flipButtonMarginUnits?.Mobile} ${flipButtonMobileMargin?.right}${flipButtonMarginUnits?.Mobile} ${flipButtonMobileMargin?.bottom}${flipButtonMarginUnits?.Mobile} ${flipButtonMobileMargin?.left}${flipButtonMarginUnits?.Mobile}`;


	/** Start Button Border */
	const handleButtonBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipButtonBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonDesktopBorderWidth: {
							...flipButtonDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonTabBorderWidth: {
							...flipButtonTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonMobileBorderWidth: {
							...flipButtonMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonBorderCombineBtn = () => {
		setAttributes({ flipButtonBorderLink: !flipButtonBorderLink });
	};

	const handleButtonBorderUnitsHandler = (unit) => {
		setAttributes({
			flipButtonBorderUnits: {
				...flipButtonBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonDesktopBorderValue = `${flipButtonDesktopBorderWidth?.top}${flipButtonBorderUnits?.Desktop} ${flipButtonDesktopBorderWidth?.right}${flipButtonBorderUnits?.Desktop} ${flipButtonDesktopBorderWidth?.bottom}${flipButtonBorderUnits?.Desktop} ${flipButtonDesktopBorderWidth?.left}${flipButtonBorderUnits?.Desktop}`;
	const buttonTabBorderValue = `${flipButtonTabBorderWidth?.top}${flipButtonBorderUnits?.Tablet} ${flipButtonTabBorderWidth?.right}${flipButtonBorderUnits?.Tablet} ${flipButtonTabBorderWidth?.bottom}${flipButtonBorderUnits?.Tablet} ${flipButtonTabBorderWidth?.left}${flipButtonBorderUnits?.Tablet}`;
	const buttonMobileBorderValue = `${flipButtonMobileBorderWidth?.top}${flipButtonBorderUnits?.Mobile} ${flipButtonMobileBorderWidth?.right}${flipButtonBorderUnits?.Mobile} ${flipButtonMobileBorderWidth?.bottom}${flipButtonBorderUnits?.Mobile} ${flipButtonMobileBorderWidth?.left}${flipButtonBorderUnits?.Mobile}`;

	/** Start Border Radius */
	const handleButtonBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBtnDesktopBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBtnTabBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBtnMobileBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBtnDesktopBorderradiusWidth: {
							...flipBtnDesktopBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBtnTabBorderradiusWidth: {
							...flipBtnTabBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBtnMobileBorderradiusWidth: {
							...flipBtnMobileBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonBorderRadiusCombineBtn = () => {
		setAttributes({ btnBorderRadiusLink: !btnBorderRadiusLink });
	};

	const handleButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			flipBtnBorderradiusUnits: {
				...flipBtnBorderradiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonDesktopBorderRadiusValue = `${flipBtnDesktopBorderradiusWidth?.top}${flipBtnBorderradiusUnits?.Desktop} ${flipBtnDesktopBorderradiusWidth?.right}${flipBtnBorderradiusUnits?.Desktop} ${flipBtnDesktopBorderradiusWidth?.bottom}${flipBtnBorderradiusUnits?.Desktop} ${flipBtnDesktopBorderradiusWidth?.left}${flipBtnBorderradiusUnits?.Desktop}`;
	const buttonTabBorderRadiusValue = `${flipBtnTabBorderradiusWidth?.top}${flipBtnBorderradiusUnits?.Tablet} ${flipBtnTabBorderradiusWidth?.right}${flipBtnBorderradiusUnits?.Tablet} ${flipBtnTabBorderradiusWidth?.bottom}${flipBtnBorderradiusUnits?.Tablet} ${flipBtnTabBorderradiusWidth?.left}${flipBtnBorderradiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusValue = `${flipBtnMobileBorderradiusWidth?.top}${flipBtnBorderradiusUnits?.Mobile} ${flipBtnMobileBorderradiusWidth?.right}${flipBtnBorderradiusUnits?.Mobile} ${flipBtnMobileBorderradiusWidth?.bottom}${flipBtnBorderradiusUnits?.Mobile} ${flipBtnMobileBorderradiusWidth?.left}${flipBtnBorderradiusUnits?.Mobile}`;

	/* Button Back */
	const handleButtonBackPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipButtonBackPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonBackDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonBackTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonBackMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonBackDesktopPadding: {
							...flipButtonBackDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonBackTabPadding: {
							...flipButtonBackTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonBackMobilePadding: {
							...flipButtonBackMobilePadding,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonBackPaddingCombineBtn = () => {
		setAttributes({ flipButtonBackPaddingLink: !flipButtonBackPaddingLink });
	};

	const handleButtonBackPaddingUnitsHandler = (unit) => {
		setAttributes({
			flipButtonBackPaddingUnits: {
				...flipButtonBackPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonBackDesktopPaddingValue = `${flipButtonBackDesktopPadding?.top}${flipButtonBackPaddingUnits?.Desktop} ${flipButtonBackDesktopPadding?.right}${flipButtonBackPaddingUnits?.Desktop} ${flipButtonBackDesktopPadding?.bottom}${flipButtonBackPaddingUnits?.Desktop} ${flipButtonBackDesktopPadding?.left}${flipButtonBackPaddingUnits?.Desktop}`;
	const buttonBackTabPaddingValue = `${flipButtonBackTabPadding?.top}${flipButtonBackPaddingUnits?.Tablet} ${flipButtonBackTabPadding?.right}${flipButtonBackPaddingUnits?.Tablet} ${flipButtonBackTabPadding?.bottom}${flipButtonBackPaddingUnits?.Tablet} ${flipButtonBackTabPadding?.left}${flipButtonBackPaddingUnits?.Tablet}`;
	const buttonBackMobilePaddingValue = `${flipButtonBackMobilePadding?.top}${flipButtonBackPaddingUnits?.Mobile} ${flipButtonBackMobilePadding?.right}${flipButtonBackPaddingUnits?.Mobile} ${flipButtonBackMobilePadding?.bottom}${flipButtonBackPaddingUnits?.Mobile} ${flipButtonBackMobilePadding?.left}${flipButtonBackPaddingUnits?.Mobile}`;

	/* buttonBack Margin */
	const handleButtonBackMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipButtonBackMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonBackDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonBackTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonBackMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonBackDesktopMargin: {
							...flipButtonBackDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonBackTabMargin: {
							...flipButtonBackTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonBackMobileMargin: {
							...flipButtonBackMobileMargin,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonBackMarginCombineBtn = () => {
		setAttributes({ flipButtonBackMarginLink: !flipButtonBackMarginLink });
	};

	const handleButtonBackMarginUnitsHandler = (unit) => {
		setAttributes({
			flipButtonBackMarginUnits: {
				...flipButtonBackMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonBackDesktopMarginValue = `${flipButtonBackDesktopMargin?.top}${flipButtonBackMarginUnits?.Desktop} ${flipButtonBackDesktopMargin?.right}${flipButtonBackMarginUnits?.Desktop} ${flipButtonBackDesktopMargin?.bottom}${flipButtonBackMarginUnits?.Desktop} ${flipButtonBackDesktopMargin?.left}${flipButtonBackMarginUnits?.Desktop}`;
	const buttonBackTabMarginValue = `${flipButtonBackTabMargin?.top}${flipButtonBackMarginUnits?.Tablet} ${flipButtonBackTabMargin?.right}${flipButtonBackMarginUnits?.Tablet} ${flipButtonBackTabMargin?.bottom}${flipButtonBackMarginUnits?.Tablet} ${flipButtonBackTabMargin?.left}${flipButtonBackMarginUnits?.Tablet}`;
	const buttonBackMobileMarginValue = `${flipButtonBackMobileMargin?.top}${flipButtonBackMarginUnits?.Mobile} ${flipButtonBackMobileMargin?.right}${flipButtonBackMarginUnits?.Mobile} ${flipButtonBackMobileMargin?.bottom}${flipButtonBackMarginUnits?.Mobile} ${flipButtonBackMobileMargin?.left}${flipButtonBackMarginUnits?.Mobile}`;


	/** Start buttonBack Border */
	const handleButtonBackBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipButtonBackBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonBackDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonBackTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonBackMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipButtonBackDesktopBorderWidth: {
							...flipButtonBackDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipButtonBackTabBorderWidth: {
							...flipButtonBackTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipButtonBackMobileBorderWidth: {
							...flipButtonBackMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonBackBorderCombineBtn = () => {
		setAttributes({ flipButtonBackBorderLink: !flipButtonBackBorderLink });
	};

	const handleButtonBackBorderUnitsHandler = (unit) => {
		setAttributes({
			flipButtonBackBorderUnits: {
				...flipButtonBackBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonBackDesktopBorderValue = `${flipButtonBackDesktopBorderWidth?.top}${flipButtonBackBorderUnits?.Desktop} ${flipButtonBackDesktopBorderWidth?.right}${flipButtonBackBorderUnits?.Desktop} ${flipButtonBackDesktopBorderWidth?.bottom}${flipButtonBackBorderUnits?.Desktop} ${flipButtonBackDesktopBorderWidth?.left}${flipButtonBackBorderUnits?.Desktop}`;
	const buttonBackTabBorderValue = `${flipButtonBackTabBorderWidth?.top}${flipButtonBackBorderUnits?.Tablet} ${flipButtonBackTabBorderWidth?.right}${flipButtonBackBorderUnits?.Tablet} ${flipButtonBackTabBorderWidth?.bottom}${flipButtonBackBorderUnits?.Tablet} ${flipButtonBackTabBorderWidth?.left}${flipButtonBackBorderUnits?.Tablet}`;
	const buttonBackMobileBorderValue = `${flipButtonBackMobileBorderWidth?.top}${flipButtonBackBorderUnits?.Mobile} ${flipButtonBackMobileBorderWidth?.right}${flipButtonBackBorderUnits?.Mobile} ${flipButtonBackMobileBorderWidth?.bottom}${flipButtonBackBorderUnits?.Mobile} ${flipButtonBackMobileBorderWidth?.left}${flipButtonBackBorderUnits?.Mobile}`;

	/** Start Border Radius */
	const handleButtonBackBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBtnBackDesktopBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBtnBackTabBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBtnBackMobileBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBtnBackDesktopBorderradiusWidth: {
							...flipBtnBackDesktopBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBtnBackTabBorderradiusWidth: {
							...flipBtnBackTabBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBtnBackMobileBorderradiusWidth: {
							...flipBtnBackMobileBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonBackBorderRadiusCombineBtn = () => {
		setAttributes({ btnBackBorderRadiusLink: !btnBackBorderRadiusLink });
	};

	const handleButtonBackBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			flipBtnBackBorderradiusUnits: {
				...flipBtnBackBorderradiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonBackDesktopBorderRadiusValue = `${flipBtnBackDesktopBorderradiusWidth?.top}${flipBtnBackBorderradiusUnits?.Desktop} ${flipBtnBackDesktopBorderradiusWidth?.right}${flipBtnBackBorderradiusUnits?.Desktop} ${flipBtnBackDesktopBorderradiusWidth?.bottom}${flipBtnBackBorderradiusUnits?.Desktop} ${flipBtnBackDesktopBorderradiusWidth?.left}${flipBtnBackBorderradiusUnits?.Desktop}`;
	const buttonBackTabBorderRadiusValue = `${flipBtnBackTabBorderradiusWidth?.top}${flipBtnBackBorderradiusUnits?.Tablet} ${flipBtnBackTabBorderradiusWidth?.right}${flipBtnBackBorderradiusUnits?.Tablet} ${flipBtnBackTabBorderradiusWidth?.bottom}${flipBtnBackBorderradiusUnits?.Tablet} ${flipBtnBackTabBorderradiusWidth?.left}${flipBtnBackBorderradiusUnits?.Tablet}`;
	const buttonBackMobileBorderRadiusValue = `${flipBtnBackMobileBorderradiusWidth?.top}${flipBtnBackBorderradiusUnits?.Mobile} ${flipBtnBackMobileBorderradiusWidth?.right}${flipBtnBackBorderradiusUnits?.Mobile} ${flipBtnBackMobileBorderradiusWidth?.bottom}${flipBtnBackBorderradiusUnits?.Mobile} ${flipBtnBackMobileBorderradiusWidth?.left}${flipBtnBackBorderradiusUnits?.Mobile}`;

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalPaddingDesktop: {
							...globalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalPaddingTablet: { ...globalPaddingTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						globalPaddingMobile: { ...globalPaddingMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ globalPaddingLink: !globalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			globalPaddingUnits: {
				...globalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const DesktopPadding = `${globalPaddingDesktop?.top}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.right}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.bottom}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.left}${globalPaddingUnits?.Desktop}`;
	const TabletPadding = `${globalPaddingTablet?.top}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.right}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.bottom}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.left}${globalPaddingUnits?.Tablet}`;
	const MobilePadding = `${globalPaddingMobile?.top}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.right}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.bottom}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.left}${globalPaddingUnits?.Mobile}`;

	/** Start Global margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalMarginDesktop: { ...globalMarginDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						globalMarginTablet: { ...globalMarginTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						globalMarginMobile: { ...globalMarginMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ globalMarginLink: !globalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			globalMarginUnits: {
				...globalMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const DesktopMargin = `${globalMarginDesktop?.top}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.right}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.bottom}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.left}${globalMarginUnits?.Desktop}`;
	const TabletMargin = `${globalMarginTablet?.top}${globalMarginUnits?.Tablet} ${globalMarginTablet?.right}${globalMarginUnits?.Tablet} ${globalMarginTablet?.bottom}${globalMarginUnits?.Tablet} ${globalMarginTablet?.left}${globalMarginUnits?.Tablet}`;
	const MobileMargin = `${globalMarginMobile?.top}${globalMarginUnits?.Mobile} ${globalMarginMobile?.right}${globalMarginUnits?.Mobile} ${globalMarginMobile?.bottom}${globalMarginUnits?.Mobile} ${globalMarginMobile?.left}${globalMarginUnits?.Mobile}`;

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalBorderDesktop: { ...globalBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderTablet: { ...globalBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderMobile: { ...globalBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ globalBorderLink: !globalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			globalBorderUnits: {
				...globalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global border */
	const BorderDesktopWidth = `${globalBorderDesktop?.top}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.right}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.bottom}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.left}${globalBorderUnits?.Desktop}`;
	const BorderTabletWidth = `${globalBorderTablet?.top}${globalBorderUnits?.Tablet} ${globalBorderTablet?.right}${globalBorderUnits?.Tablet} ${globalBorderTablet?.bottom}${globalBorderUnits?.Tablet} ${globalBorderTablet?.left}${globalBorderUnits?.Tablet}`;
	const BorderMobileWidth = `${globalBorderMobile?.top}${globalBorderUnits?.Mobile} ${globalBorderMobile?.right}${globalBorderUnits?.Mobile} ${globalBorderMobile?.bottom}${globalBorderUnits?.Mobile} ${globalBorderMobile?.left}${globalBorderUnits?.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalBorderRadiusDesktop: {
							...globalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderRadiusTablet: {
							...globalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderRadiusMobile: {
							...globalBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ globalBorderRadiusLink: !globalBorderRadiusLink });
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			globalBorderRadiusUnits: {
				...globalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const BorderRadiusDesktopWidth = `${globalBorderRadiusDesktop?.top}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.right}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.bottom}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.left}${globalBorderRadiusUnits?.Desktop}`;
	const BorderRadiusTabletWidth = `${globalBorderRadiusTablet?.top}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.right}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.bottom}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.left}${globalBorderRadiusUnits?.Tablet}`;
	const BorderRadiusMobileWidth = `${globalBorderRadiusMobile?.top}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.right}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.bottom}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.left}${globalBorderRadiusUnits?.Mobile}`;

	/** End Border Radius */

	/** Start Media padding */
	const handleMediaPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaPaddingDesktop: { ...mediaPaddingDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						mediaPaddingTablet: { ...mediaPaddingTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						mediaPaddingMobile: { ...mediaPaddingMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaPaddingCombineBtn = () => {
		setAttributes({ mediaPaddingLink: !mediaPaddingLink });
	};

	const handleMediaPaddingUnitsHandler = (unit) => {
		setAttributes({
			mediaPaddingUnits: {
				...mediaPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaDesktopPadding = `${mediaPaddingDesktop?.top}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.right}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.bottom}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.left}${mediaPaddingUnits?.Desktop}`;
	const mediaTabletPadding = `${mediaPaddingTablet?.top}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.right}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.bottom}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.left}${mediaPaddingUnits?.Tablet}`;
	const mediaMobilePadding = `${mediaPaddingMobile?.top}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.right}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.bottom}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.left}${mediaPaddingUnits?.Mobile}`;
	/** End Padding */

	/** Start Media Margin */
	const handleMediaMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaMarginDesktop: { ...mediaMarginDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						mediaMarginTablet: { ...mediaMarginTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						mediaMarginMobile: { ...mediaMarginMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaMarginCombineBtn = () => {
		setAttributes({ mediaMarginLink: !mediaMarginLink });
	};

	const handleMediaMarginUnitsHandler = (unit) => {
		setAttributes({
			mediaMarginUnits: {
				...mediaMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaDesktopMargin = `${mediaMarginDesktop?.top}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.right}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.bottom}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.left}${mediaMarginUnits?.Desktop}`;
	const mediaTabletMargin = `${mediaMarginTablet?.top}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.right}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.bottom}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.left}${mediaMarginUnits?.Tablet}`;
	const mediaMobileMargin = `${mediaMarginMobile?.top}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.right}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.bottom}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.left}${mediaMarginUnits?.Mobile}`;
	/** End Margin */

	/** Start Media Border */
	const handleMediaBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBorderDesktop: { ...mediaBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBorderTablet: { ...mediaBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBorderMobile: { ...mediaBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaBorderCombineBtn = () => {
		setAttributes({ mediaBorderLink: !mediaBorderLink });
	};

	const handleMediaBorderUnitsHandler = (unit) => {
		setAttributes({
			mediaBorderUnits: {
				...mediaBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaBorderDesktopWidth = `${mediaBorderDesktop?.top}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.right}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.bottom}${mediaBorderUnits?.Desktop} ${mediaBorderDesktop?.left}${mediaBorderUnits?.Desktop}`;
	const mediaBorderTabletWidth = `${mediaBorderTablet?.top}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.right}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.bottom}${mediaBorderUnits?.Tablet} ${mediaBorderTablet?.left}${mediaBorderUnits?.Tablet}`;
	const mediaBorderMobileWidth = `${mediaBorderMobile?.top}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.right}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.bottom}${mediaBorderUnits?.Mobile} ${mediaBorderMobile?.left}${mediaBorderUnits?.Mobile}`;
	/** End Border */

	/** Start Media border radius*/
	const handleMediaBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBorderRadiusDesktop: {
							...mediaBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBorderRadiusTablet: {
							...mediaBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBorderRadiusMobile: {
							...mediaBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaBorderRadiusCombineBtn = () => {
		setAttributes({ mediaBorderRadiusLink: !mediaBorderRadiusLink });
	};

	const handleMediaBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			mediaBorderRadiusUnits: {
				...mediaBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaBorderRadiusDesktopWidth = `${mediaBorderRadiusDesktop?.top}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.right}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.bottom}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.left}${mediaBorderRadiusUnits?.Desktop}`;
	const mediaBorderRadiusTabletWidth = `${mediaBorderRadiusTablet?.top}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.right}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.bottom}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.left}${mediaBorderRadiusUnits?.Tablet}`;
	const mediaBorderRadiusMobileWidth = `${mediaBorderRadiusMobile?.top}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.right}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.bottom}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.left}${mediaBorderRadiusUnits?.Mobile}`;
	/** End Media Radius */

	/* Back Media Styling */
	const handleMediaBackPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaBackPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackPaddingDesktop: { ...mediaBackPaddingDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackPaddingTablet: { ...mediaBackPaddingTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackPaddingMobile: { ...mediaBackPaddingMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaBackPaddingCombineBtn = () => {
		setAttributes({ mediaBackPaddingLink: !mediaBackPaddingLink });
	};

	const handleMediaBackPaddingUnitsHandler = (unit) => {
		setAttributes({
			mediaBackPaddingUnits: {
				...mediaBackPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaBackDesktopPadding = `${mediaBackPaddingDesktop?.top}${mediaBackPaddingUnits?.Desktop} ${mediaBackPaddingDesktop?.right}${mediaBackPaddingUnits?.Desktop} ${mediaBackPaddingDesktop?.bottom}${mediaBackPaddingUnits?.Desktop} ${mediaBackPaddingDesktop?.left}${mediaBackPaddingUnits?.Desktop}`;
	const mediaBackTabletPadding = `${mediaBackPaddingTablet?.top}${mediaBackPaddingUnits?.Tablet} ${mediaBackPaddingTablet?.right}${mediaBackPaddingUnits?.Tablet} ${mediaBackPaddingTablet?.bottom}${mediaBackPaddingUnits?.Tablet} ${mediaBackPaddingTablet?.left}${mediaBackPaddingUnits?.Tablet}`;
	const mediaBackMobilePadding = `${mediaBackPaddingMobile?.top}${mediaBackPaddingUnits?.Mobile} ${mediaBackPaddingMobile?.right}${mediaBackPaddingUnits?.Mobile} ${mediaBackPaddingMobile?.bottom}${mediaBackPaddingUnits?.Mobile} ${mediaBackPaddingMobile?.left}${mediaBackPaddingUnits?.Mobile}`;
	/** End Padding */

	/** Start mediaBack Margin */
	const handleMediaBackMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaBackMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackMarginDesktop: { ...mediaBackMarginDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackMarginTablet: { ...mediaBackMarginTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackMarginMobile: { ...mediaBackMarginMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaBackMarginCombineBtn = () => {
		setAttributes({ mediaBackMarginLink: !mediaBackMarginLink });
	};

	const handleMediaBackMarginUnitsHandler = (unit) => {
		setAttributes({
			mediaBackMarginUnits: {
				...mediaBackMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaBackDesktopMargin = `${mediaBackMarginDesktop?.top}${mediaBackMarginUnits?.Desktop} ${mediaBackMarginDesktop?.right}${mediaBackMarginUnits?.Desktop} ${mediaBackMarginDesktop?.bottom}${mediaBackMarginUnits?.Desktop} ${mediaBackMarginDesktop?.left}${mediaBackMarginUnits?.Desktop}`;
	const mediaBackTabletMargin = `${mediaBackMarginTablet?.top}${mediaBackMarginUnits?.Tablet} ${mediaBackMarginTablet?.right}${mediaBackMarginUnits?.Tablet} ${mediaBackMarginTablet?.bottom}${mediaBackMarginUnits?.Tablet} ${mediaBackMarginTablet?.left}${mediaBackMarginUnits?.Tablet}`;
	const mediaBackMobileMargin = `${mediaBackMarginMobile?.top}${mediaBackMarginUnits?.Mobile} ${mediaBackMarginMobile?.right}${mediaBackMarginUnits?.Mobile} ${mediaBackMarginMobile?.bottom}${mediaBackMarginUnits?.Mobile} ${mediaBackMarginMobile?.left}${mediaBackMarginUnits?.Mobile}`;
	/** End Margin */

	/** Start mediaBack Border */
	const handleMediaBackBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaBackBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackBorderDesktop: { ...mediaBackBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackBorderTablet: { ...mediaBackBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackBorderMobile: { ...mediaBackBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaBackBorderCombineBtn = () => {
		setAttributes({ mediaBackBorderLink: !mediaBackBorderLink });
	};

	const handleMediaBackBorderUnitsHandler = (unit) => {
		setAttributes({
			mediaBackBorderUnits: {
				...mediaBackBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaBackBorderDesktopWidth = `${mediaBackBorderDesktop?.top}${mediaBackBorderUnits?.Desktop} ${mediaBackBorderDesktop?.right}${mediaBackBorderUnits?.Desktop} ${mediaBackBorderDesktop?.bottom}${mediaBackBorderUnits?.Desktop} ${mediaBackBorderDesktop?.left}${mediaBackBorderUnits?.Desktop}`;
	const mediaBackBorderTabletWidth = `${mediaBackBorderTablet?.top}${mediaBackBorderUnits?.Tablet} ${mediaBackBorderTablet?.right}${mediaBackBorderUnits?.Tablet} ${mediaBackBorderTablet?.bottom}${mediaBackBorderUnits?.Tablet} ${mediaBackBorderTablet?.left}${mediaBackBorderUnits?.Tablet}`;
	const mediaBackBorderMobileWidth = `${mediaBackBorderMobile?.top}${mediaBackBorderUnits?.Mobile} ${mediaBackBorderMobile?.right}${mediaBackBorderUnits?.Mobile} ${mediaBackBorderMobile?.bottom}${mediaBackBorderUnits?.Mobile} ${mediaBackBorderMobile?.left}${mediaBackBorderUnits?.Mobile}`;
	/** End Border */

	/** Start mediaBack border radius*/
	const handleMediaBackBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (mediaBackBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						mediaBackBorderRadiusDesktop: {
							...mediaBackBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						mediaBackBorderRadiusTablet: {
							...mediaBackBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						mediaBackBorderRadiusMobile: {
							...mediaBackBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleMediaBackBorderRadiusCombineBtn = () => {
		setAttributes({ mediaBackBorderRadiusLink: !mediaBackBorderRadiusLink });
	};

	const handleMediaBackBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			mediaBackBorderRadiusUnits: {
				...mediaBackBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const mediaBackBorderRadiusDesktopWidth = `${mediaBackBorderRadiusDesktop?.top}${mediaBackBorderRadiusUnits?.Desktop} ${mediaBackBorderRadiusDesktop?.right}${mediaBackBorderRadiusUnits?.Desktop} ${mediaBackBorderRadiusDesktop?.bottom}${mediaBackBorderRadiusUnits?.Desktop} ${mediaBackBorderRadiusDesktop?.left}${mediaBackBorderRadiusUnits?.Desktop}`;
	const mediaBackBorderRadiusTabletWidth = `${mediaBackBorderRadiusTablet?.top}${mediaBackBorderRadiusUnits?.Tablet} ${mediaBackBorderRadiusTablet?.right}${mediaBackBorderRadiusUnits?.Tablet} ${mediaBackBorderRadiusTablet?.bottom}${mediaBackBorderRadiusUnits?.Tablet} ${mediaBackBorderRadiusTablet?.left}${mediaBackBorderRadiusUnits?.Tablet}`;
	const mediaBackBorderRadiusMobileWidth = `${mediaBackBorderRadiusMobile?.top}${mediaBackBorderRadiusUnits?.Mobile} ${mediaBackBorderRadiusMobile?.right}${mediaBackBorderRadiusUnits?.Mobile} ${mediaBackBorderRadiusMobile?.bottom}${mediaBackBorderRadiusUnits?.Mobile} ${mediaBackBorderRadiusMobile?.left}${mediaBackBorderRadiusUnits?.Mobile}`;

	/* Flip box front */
	const handleFlipBoxFrontPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxFrontPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontPaddingDesktop: { ...flipBoxFrontPaddingDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontPaddingTablet: { ...flipBoxFrontPaddingTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontPaddingMobile: { ...flipBoxFrontPaddingMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxFrontPaddingCombineBtn = () => {
		setAttributes({ flipBoxFrontPaddingLink: !flipBoxFrontPaddingLink });
	};

	const handleFlipBoxFrontPaddingUnitsHandler = (unit) => {
		setAttributes({
			flipBoxFrontPaddingUnits: {
				...flipBoxFrontPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxFrontDesktopPadding = `${flipBoxFrontPaddingDesktop?.top}${flipBoxFrontPaddingUnits?.Desktop} ${flipBoxFrontPaddingDesktop?.right}${flipBoxFrontPaddingUnits?.Desktop} ${flipBoxFrontPaddingDesktop?.bottom}${flipBoxFrontPaddingUnits?.Desktop} ${flipBoxFrontPaddingDesktop?.left}${flipBoxFrontPaddingUnits?.Desktop}`;
	const flipBoxFrontTabletPadding = `${flipBoxFrontPaddingTablet?.top}${flipBoxFrontPaddingUnits?.Tablet} ${flipBoxFrontPaddingTablet?.right}${flipBoxFrontPaddingUnits?.Tablet} ${flipBoxFrontPaddingTablet?.bottom}${flipBoxFrontPaddingUnits?.Tablet} ${flipBoxFrontPaddingTablet?.left}${flipBoxFrontPaddingUnits?.Tablet}`;
	const flipBoxFrontMobilePadding = `${flipBoxFrontPaddingMobile?.top}${flipBoxFrontPaddingUnits?.Mobile} ${flipBoxFrontPaddingMobile?.right}${flipBoxFrontPaddingUnits?.Mobile} ${flipBoxFrontPaddingMobile?.bottom}${flipBoxFrontPaddingUnits?.Mobile} ${flipBoxFrontPaddingMobile?.left}${flipBoxFrontPaddingUnits?.Mobile}`;
	/** End Padding */

	/** Start flipBoxFront Margin */
	const handleFlipBoxFrontMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxFrontMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontMarginDesktop: { ...flipBoxFrontMarginDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontMarginTablet: { ...flipBoxFrontMarginTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontMarginMobile: { ...flipBoxFrontMarginMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxFrontMarginCombineBtn = () => {
		setAttributes({ flipBoxFrontMarginLink: !flipBoxFrontMarginLink });
	};

	const handleFlipBoxFrontMarginUnitsHandler = (unit) => {
		setAttributes({
			flipBoxFrontMarginUnits: {
				...flipBoxFrontMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxFrontDesktopMargin = `${flipBoxFrontMarginDesktop?.top}${flipBoxFrontMarginUnits?.Desktop} ${flipBoxFrontMarginDesktop?.right}${flipBoxFrontMarginUnits?.Desktop} ${flipBoxFrontMarginDesktop?.bottom}${flipBoxFrontMarginUnits?.Desktop} ${flipBoxFrontMarginDesktop?.left}${flipBoxFrontMarginUnits?.Desktop}`;
	const flipBoxFrontTabletMargin = `${flipBoxFrontMarginTablet?.top}${flipBoxFrontMarginUnits?.Tablet} ${flipBoxFrontMarginTablet?.right}${flipBoxFrontMarginUnits?.Tablet} ${flipBoxFrontMarginTablet?.bottom}${flipBoxFrontMarginUnits?.Tablet} ${flipBoxFrontMarginTablet?.left}${flipBoxFrontMarginUnits?.Tablet}`;
	const flipBoxFrontMobileMargin = `${flipBoxFrontMarginMobile?.top}${flipBoxFrontMarginUnits?.Mobile} ${flipBoxFrontMarginMobile?.right}${flipBoxFrontMarginUnits?.Mobile} ${flipBoxFrontMarginMobile?.bottom}${flipBoxFrontMarginUnits?.Mobile} ${flipBoxFrontMarginMobile?.left}${flipBoxFrontMarginUnits?.Mobile}`;
	/** End Margin */

	/** Start flipBoxFront Border */
	const handleFlipBoxFrontBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxFrontBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontBorderDesktop: { ...flipBoxFrontBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontBorderTablet: { ...flipBoxFrontBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontBorderMobile: { ...flipBoxFrontBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxFrontBorderCombineBtn = () => {
		setAttributes({ flipBoxFrontBorderLink: !flipBoxFrontBorderLink });
	};

	const handleFlipBoxFrontBorderUnitsHandler = (unit) => {
		setAttributes({
			flipBoxFrontBorderUnits: {
				...flipBoxFrontBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxFrontBorderDesktopWidth = `${flipBoxFrontBorderDesktop?.top}${flipBoxFrontBorderUnits?.Desktop} ${flipBoxFrontBorderDesktop?.right}${flipBoxFrontBorderUnits?.Desktop} ${flipBoxFrontBorderDesktop?.bottom}${flipBoxFrontBorderUnits?.Desktop} ${flipBoxFrontBorderDesktop?.left}${flipBoxFrontBorderUnits?.Desktop}`;
	const flipBoxFrontBorderTabletWidth = `${flipBoxFrontBorderTablet?.top}${flipBoxFrontBorderUnits?.Tablet} ${flipBoxFrontBorderTablet?.right}${flipBoxFrontBorderUnits?.Tablet} ${flipBoxFrontBorderTablet?.bottom}${flipBoxFrontBorderUnits?.Tablet} ${flipBoxFrontBorderTablet?.left}${flipBoxFrontBorderUnits?.Tablet}`;
	const flipBoxFrontBorderMobileWidth = `${flipBoxFrontBorderMobile?.top}${flipBoxFrontBorderUnits?.Mobile} ${flipBoxFrontBorderMobile?.right}${flipBoxFrontBorderUnits?.Mobile} ${flipBoxFrontBorderMobile?.bottom}${flipBoxFrontBorderUnits?.Mobile} ${flipBoxFrontBorderMobile?.left}${flipBoxFrontBorderUnits?.Mobile}`;
	/** End Border */

	/** Start flipBoxFront border radius*/
	const handleFlipBoxFrontBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxFrontBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxFrontBorderRadiusDesktop: {
							...flipBoxFrontBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxFrontBorderRadiusTablet: {
							...flipBoxFrontBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxFrontBorderRadiusMobile: {
							...flipBoxFrontBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxFrontBorderRadiusCombineBtn = () => {
		setAttributes({ flipBoxFrontBorderRadiusLink: !flipBoxFrontBorderRadiusLink });
	};

	const handleFlipBoxFrontBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			flipBoxFrontBorderRadiusUnits: {
				...flipBoxFrontBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxFrontBorderRadiusDesktopWidth = `${flipBoxFrontBorderRadiusDesktop?.top}${flipBoxFrontBorderRadiusUnits?.Desktop} ${flipBoxFrontBorderRadiusDesktop?.right}${flipBoxFrontBorderRadiusUnits?.Desktop} ${flipBoxFrontBorderRadiusDesktop?.bottom}${flipBoxFrontBorderRadiusUnits?.Desktop} ${flipBoxFrontBorderRadiusDesktop?.left}${flipBoxFrontBorderRadiusUnits?.Desktop}`;
	const flipBoxFrontBorderRadiusTabletWidth = `${flipBoxFrontBorderRadiusTablet?.top}${flipBoxFrontBorderRadiusUnits?.Tablet} ${flipBoxFrontBorderRadiusTablet?.right}${flipBoxFrontBorderRadiusUnits?.Tablet} ${flipBoxFrontBorderRadiusTablet?.bottom}${flipBoxFrontBorderRadiusUnits?.Tablet} ${flipBoxFrontBorderRadiusTablet?.left}${flipBoxFrontBorderRadiusUnits?.Tablet}`;
	const flipBoxFrontBorderRadiusMobileWidth = `${flipBoxFrontBorderRadiusMobile?.top}${flipBoxFrontBorderRadiusUnits?.Mobile} ${flipBoxFrontBorderRadiusMobile?.right}${flipBoxFrontBorderRadiusUnits?.Mobile} ${flipBoxFrontBorderRadiusMobile?.bottom}${flipBoxFrontBorderRadiusUnits?.Mobile} ${flipBoxFrontBorderRadiusMobile?.left}${flipBoxFrontBorderRadiusUnits?.Mobile}`;

	/* Flip box back */
	const handleFlipBoxBackPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxBackPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackPaddingDesktop: { ...flipBoxBackPaddingDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackPaddingTablet: { ...flipBoxBackPaddingTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackPaddingMobile: { ...flipBoxBackPaddingMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxBackPaddingCombineBtn = () => {
		setAttributes({ flipBoxBackPaddingLink: !flipBoxBackPaddingLink });
	};

	const handleFlipBoxBackPaddingUnitsHandler = (unit) => {
		setAttributes({
			flipBoxBackPaddingUnits: {
				...flipBoxBackPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxBackDesktopPadding = `${flipBoxBackPaddingDesktop?.top}${flipBoxBackPaddingUnits?.Desktop} ${flipBoxBackPaddingDesktop?.right}${flipBoxBackPaddingUnits?.Desktop} ${flipBoxBackPaddingDesktop?.bottom}${flipBoxBackPaddingUnits?.Desktop} ${flipBoxBackPaddingDesktop?.left}${flipBoxBackPaddingUnits?.Desktop}`;
	const flipBoxBackTabletPadding = `${flipBoxBackPaddingTablet?.top}${flipBoxBackPaddingUnits?.Tablet} ${flipBoxBackPaddingTablet?.right}${flipBoxBackPaddingUnits?.Tablet} ${flipBoxBackPaddingTablet?.bottom}${flipBoxBackPaddingUnits?.Tablet} ${flipBoxBackPaddingTablet?.left}${flipBoxBackPaddingUnits?.Tablet}`;
	const flipBoxBackMobilePadding = `${flipBoxBackPaddingMobile?.top}${flipBoxBackPaddingUnits?.Mobile} ${flipBoxBackPaddingMobile?.right}${flipBoxBackPaddingUnits?.Mobile} ${flipBoxBackPaddingMobile?.bottom}${flipBoxBackPaddingUnits?.Mobile} ${flipBoxBackPaddingMobile?.left}${flipBoxBackPaddingUnits?.Mobile}`;
	/** End Padding */

	/** Start flipBoxBack Margin */
	const handleFlipBoxBackMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxBackMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackMarginDesktop: { ...flipBoxBackMarginDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackMarginTablet: { ...flipBoxBackMarginTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackMarginMobile: { ...flipBoxBackMarginMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxBackMarginCombineBtn = () => {
		setAttributes({ flipBoxBackMarginLink: !flipBoxBackMarginLink });
	};

	const handleFlipBoxBackMarginUnitsHandler = (unit) => {
		setAttributes({
			flipBoxBackMarginUnits: {
				...flipBoxBackMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxBackDesktopMargin = `${flipBoxBackMarginDesktop?.top}${flipBoxBackMarginUnits?.Desktop} ${flipBoxBackMarginDesktop?.right}${flipBoxBackMarginUnits?.Desktop} ${flipBoxBackMarginDesktop?.bottom}${flipBoxBackMarginUnits?.Desktop} ${flipBoxBackMarginDesktop?.left}${flipBoxBackMarginUnits?.Desktop}`;
	const flipBoxBackTabletMargin = `${flipBoxBackMarginTablet?.top}${flipBoxBackMarginUnits?.Tablet} ${flipBoxBackMarginTablet?.right}${flipBoxBackMarginUnits?.Tablet} ${flipBoxBackMarginTablet?.bottom}${flipBoxBackMarginUnits?.Tablet} ${flipBoxBackMarginTablet?.left}${flipBoxBackMarginUnits?.Tablet}`;
	const flipBoxBackMobileMargin = `${flipBoxBackMarginMobile?.top}${flipBoxBackMarginUnits?.Mobile} ${flipBoxBackMarginMobile?.right}${flipBoxBackMarginUnits?.Mobile} ${flipBoxBackMarginMobile?.bottom}${flipBoxBackMarginUnits?.Mobile} ${flipBoxBackMarginMobile?.left}${flipBoxBackMarginUnits?.Mobile}`;
	/** End Margin */

	/** Start flipBoxBack Border */
	const handleFlipBoxBackBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxBackBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackBorderDesktop: { ...flipBoxBackBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackBorderTablet: { ...flipBoxBackBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackBorderMobile: { ...flipBoxBackBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxBackBorderCombineBtn = () => {
		setAttributes({ flipBoxBackBorderLink: !flipBoxBackBorderLink });
	};

	const handleFlipBoxBackBorderUnitsHandler = (unit) => {
		setAttributes({
			flipBoxBackBorderUnits: {
				...flipBoxBackBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxBackBorderDesktopWidth = `${flipBoxBackBorderDesktop?.top}${flipBoxBackBorderUnits?.Desktop} ${flipBoxBackBorderDesktop?.right}${flipBoxBackBorderUnits?.Desktop} ${flipBoxBackBorderDesktop?.bottom}${flipBoxBackBorderUnits?.Desktop} ${flipBoxBackBorderDesktop?.left}${flipBoxBackBorderUnits?.Desktop}`;
	const flipBoxBackBorderTabletWidth = `${flipBoxBackBorderTablet?.top}${flipBoxBackBorderUnits?.Tablet} ${flipBoxBackBorderTablet?.right}${flipBoxBackBorderUnits?.Tablet} ${flipBoxBackBorderTablet?.bottom}${flipBoxBackBorderUnits?.Tablet} ${flipBoxBackBorderTablet?.left}${flipBoxBackBorderUnits?.Tablet}`;
	const flipBoxBackBorderMobileWidth = `${flipBoxBackBorderMobile?.top}${flipBoxBackBorderUnits?.Mobile} ${flipBoxBackBorderMobile?.right}${flipBoxBackBorderUnits?.Mobile} ${flipBoxBackBorderMobile?.bottom}${flipBoxBackBorderUnits?.Mobile} ${flipBoxBackBorderMobile?.left}${flipBoxBackBorderUnits?.Mobile}`;
	/** End Border */

	/** Start flipBoxBack border radius*/
	const handleFlipBoxBackBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (flipBoxBackBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						flipBoxBackBorderRadiusDesktop: {
							...flipBoxBackBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						flipBoxBackBorderRadiusTablet: {
							...flipBoxBackBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						flipBoxBackBorderRadiusMobile: {
							...flipBoxBackBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleFlipBoxBackBorderRadiusCombineBtn = () => {
		setAttributes({ flipBoxBackBorderRadiusLink: !flipBoxBackBorderRadiusLink });
	};

	const handleFlipBoxBackBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			flipBoxBackBorderRadiusUnits: {
				...flipBoxBackBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const flipBoxBackBorderRadiusDesktopWidth = `${flipBoxBackBorderRadiusDesktop?.top}${flipBoxBackBorderRadiusUnits?.Desktop} ${flipBoxBackBorderRadiusDesktop?.right}${flipBoxBackBorderRadiusUnits?.Desktop} ${flipBoxBackBorderRadiusDesktop?.bottom}${flipBoxBackBorderRadiusUnits?.Desktop} ${flipBoxBackBorderRadiusDesktop?.left}${flipBoxBackBorderRadiusUnits?.Desktop}`;
	const flipBoxBackBorderRadiusTabletWidth = `${flipBoxBackBorderRadiusTablet?.top}${flipBoxBackBorderRadiusUnits?.Tablet} ${flipBoxBackBorderRadiusTablet?.right}${flipBoxBackBorderRadiusUnits?.Tablet} ${flipBoxBackBorderRadiusTablet?.bottom}${flipBoxBackBorderRadiusUnits?.Tablet} ${flipBoxBackBorderRadiusTablet?.left}${flipBoxBackBorderRadiusUnits?.Tablet}`;
	const flipBoxBackBorderRadiusMobileWidth = `${flipBoxBackBorderRadiusMobile?.top}${flipBoxBackBorderRadiusUnits?.Mobile} ${flipBoxBackBorderRadiusMobile?.right}${flipBoxBackBorderRadiusUnits?.Mobile} ${flipBoxBackBorderRadiusMobile?.bottom}${flipBoxBackBorderRadiusUnits?.Mobile} ${flipBoxBackBorderRadiusMobile?.left}${flipBoxBackBorderRadiusUnits?.Mobile}`;

	useEffect(() => {
		loadGoogleFont(headingFontFamily);
		loadGoogleFont(buttonFontFamily);
		loadGoogleFont(subHeadingFontFamily);
	}, [headingFontFamily, buttonFontFamily, subHeadingFontFamily]);


	const fbflipBoxStyle = useMemo(
		() => `
			.fb-flip-box-main-wrapper.${blockID} {
				width: 100%;
			}

			.fb-flip-box-main-wrapper.${blockID} .fb-flip-box-wrapper{
				${flipBoxPositionType === 'default' ? `position: relative;` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' ? `width: 100%;` : ''}
				${flipBoxPositionType !== 'default' ? `position: ${flipBoxPositionType};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'left' && flipBoxHZLeftOffset?.Desktop ? `left: ${flipBoxHZLeftOffset?.Desktop}${flipBoxHZLeftOffsetUnits?.Desktop};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'right' && flipBoxHZRightOffset?.Desktop ? `right: ${flipBoxHZRightOffset?.Desktop}${flipBoxHZRightOffsetUnits?.Desktop};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'top' && flipBoxVRTopOffset?.Desktop ? `top: ${flipBoxVRTopOffset?.Desktop}${flipBoxVRTopOffsetUnits?.Desktop};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'bottom' && flipBoxVRBottomOffset?.Desktop ? `bottom: ${flipBoxVRBottomOffset?.Desktop}${flipBoxVRBottomOffsetUnits?.Desktop};` : ''}
				${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ""}
				${flipBoxOverflow !== 'default' ? `overflow: ${flipBoxOverflow};` : ''}
				${globalBgColor ? `background-color: ${globalBgColor};` : ""}
				${DesktopPadding && globalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ""}
				${DesktopMargin && globalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ""}
				${globalBorder ? `border: ${globalBorder};` : ""}
				${BorderDesktopWidth && globalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ""}
				${BorderRadiusDesktopWidth && globalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth};` : ""}
				${globalBorderColor ? `border-color: ${globalBorderColor};` : ""}
				${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : ""}
				display: flex;
				align-items: center;
				${flipBoxAlignment?.Desktop ? `justify-content: ${flipBoxAlignment?.Desktop};` : ''}
			}
	  
		  .fb-flip-box-wrapper.${blockID}:hover .fb-flip-box-wrapper {
			  ${globalBgHoverColor ? `background-color: ${globalBgHoverColor};` : ""}
			  ${globalBorderHoverColor ? `border-color: ${globalBorderHoverColor};` : ""}
			  ${boxGlobalHoverBoxShadowCssValue ? `box-shadow: ${boxGlobalHoverBoxShadowCssValue};` : ""}
			  transition: all .3s ease-in-out;
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-flip-box-main-wrapper.${blockID} .fb-flip-box-wrapper{
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'left' && flipBoxHZLeftOffset?.Tablet ? `left: ${flipBoxHZLeftOffset?.Tablet}${flipBoxHZLeftOffsetUnits?.Tablet};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'right' && flipBoxHZRightOffset?.Tablet ? `right: ${flipBoxHZRightOffset?.Tablet}${flipBoxHZRightOffsetUnits?.Tablet};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'top' && flipBoxVRTopOffset?.Tablet ? `top: ${flipBoxVRTopOffset?.Tablet}${flipBoxVRTopOffsetUnits?.Tablet};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'bottom' && flipBoxVRBottomOffset?.Tablet ? `bottom: ${flipBoxVRBottomOffset?.Tablet}${flipBoxVRBottomOffsetUnits?.Tablet};` : ''}
				${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ""}
				${flipBoxAlignment?.Tablet ? `justify-content: ${flipBoxAlignment?.Tablet};` : ''}
				${TabletPadding && globalPaddingTablet?.top ? `padding: ${TabletPadding};` : ""}
				${TabletMargin && globalMarginTablet?.top ? `margin: ${TabletMargin};` : ""}
				${BorderTabletWidth && globalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ""}
				${BorderRadiusTabletWidth && globalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth};` : ""}
			  }
			  
		  }
	  
		  @media only screen and (max-width: 767px) {
			  .fb-flip-box-main-wrapper.${blockID} {
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'left' && flipBoxHZLeftOffset?.Mobile ? `left: ${flipBoxHZLeftOffset?.Mobile}${flipBoxHZLeftOffsetUnits?.Mobile};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxHZOrientationType === 'right' && flipBoxHZRightOffset?.Mobile ? `right: ${flipBoxHZRightOffset?.Mobile}${flipBoxHZRightOffsetUnits?.Mobile};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'top' && flipBoxVRTopOffset?.Mobile ? `top: ${flipBoxVRTopOffset?.Mobile}${flipBoxVRTopOffsetUnits?.Mobile};` : ''}
				${flipBoxPositionType !== 'default' && flipBoxPositionType !== 'relative' && flipBoxVROrientationType === 'bottom' && flipBoxVRBottomOffset?.Mobile ? `bottom: ${flipBoxVRBottomOffset?.Mobile}${flipBoxVRBottomOffsetUnits?.Mobile};` : ''} 
				${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ""}
				${MobilePadding && globalPaddingMobile?.top ? `padding: ${MobilePadding};` : ""}
				${MobileMargin && globalMarginMobile?.top ? `margin: ${MobileMargin};` : ""}
				${BorderMobileWidth && globalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ""}
				${BorderRadiusMobileWidth && globalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth};` : ""}
				${flipBoxAlignment?.Mobile ? `justify-content: ${flipBoxAlignment?.Mobile};` : ''}
			  }
			  
		  }

		  	.fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper{
				${flipBoxFrontWidth?.Desktop ? `width: ${flipBoxFrontWidth?.Desktop}${flipBoxFrontWidthUnits?.Desktop};` : ''}
				${flipBoxFrontHeight?.Desktop ? `min-height: ${flipBoxFrontHeight?.Desktop}${flipBoxFrontHeightUnits?.Desktop};` : ''}
				height: fit-content;
		  	}
			.fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper.fb-show-back {
				transform:
					${isHover || flipSelectedSide === "back" ? getFlipTransform(flipAnimationType) : "none"};
			}
		  	.fb-flip-box-wrapper.${blockID} .fb-flipbox-front {
				display: flex;
				align-items: center;
				${flipBoxFrontWidth?.Desktop ? `min-width: ${flipBoxFrontWidth?.Desktop}${flipBoxFrontWidthUnits?.Desktop};` : ''}
				${flipBoxFrontHeight?.Desktop ? `min-height: ${flipBoxFrontHeight?.Desktop}${flipBoxFrontHeightUnits?.Desktop};` : ''}
				height: auto;
				${flipBoxFrontBackgroundType === "gradient" ? `
				background: ${flipBoxFrontCustomGradientSwitcher && flipBoxFrontCustomGradientInputValue ? flipBoxFrontCustomGradientInputValue : flipBoxFrontGradientColor};
				`
				: flipBoxFrontBackgroundImageUrl && flipBoxFrontBackgroundImageUrl !== "null" ? `
				${flipBoxFrontBackgroundImageUrl ? `background: url(${flipBoxFrontBackgroundImageUrl});` : ""}
				${flipBoxFrontBackgroundImagePosition ? `background-position: ${flipBoxFrontBackgroundImagePosition};` : ""}
				${flipBoxFrontBackgroundImageAttachment ? `background-attachment: ${flipBoxFrontBackgroundImageAttachment};` : ""}
				${flipBoxFrontBackgroundImageRepeat ? `background-repeat: ${flipBoxFrontBackgroundImageRepeat};` : ""}
				${flipBoxFrontBackgroundImageSize ? `background-size: ${flipBoxFrontBackgroundImageSize};` : ""}`
					: flipBoxFrontClassicColor ? `background: ${flipBoxFrontClassicColor}; ` : ""}
				${flipBoxFrontDesktopPadding && flipBoxFrontPaddingDesktop?.top ? `padding: ${flipBoxFrontDesktopPadding};` : ''}
				${flipBoxFrontDesktopMargin && flipBoxFrontMarginDesktop?.top ? `margin: ${flipBoxFrontDesktopMargin};` : ''}
				${flipBoxFrontBorder ? `border-style: ${flipBoxFrontBorder};` : ''}
				${flipBoxFrontBorderDesktopWidth && flipBoxFrontBorderDesktop?.top ? `border-width: ${flipBoxFrontBorderDesktopWidth};` : ''}
				${flipBoxFrontBorderColor ? `border-color: ${flipBoxFrontBorderColor};` : ''}
				${flipBoxFrontBorderRadiusDesktop && flipBoxFrontBorderRadiusDesktop?.top ? `border-radius: ${flipBoxFrontBorderRadiusDesktopWidth};` : ''}
				background-repeat: none;
				background-size: cover;
				transition: all .3s ease-in-out; 
		  }

		  .fb-flip-box-wrapper.${blockID}:hover .fb-flipbox-front{
				${flipBoxFrontHoverBackgroundType === "gradient" ? `
				background: ${flipBoxFrontHoverCustomGradientSwitcher && flipBoxFrontHoverCustomGradientInputValue ? flipBoxFrontHoverCustomGradientInputValue : flipBoxFrontHoverGradientColor};
				`
				: flipBoxFrontHoverBackgroundImageUrl && flipBoxFrontHoverBackgroundImageUrl !== "null" ? `
				${flipBoxFrontHoverBackgroundImageUrl ? `background: url(${flipBoxFrontHoverBackgroundImageUrl});` : ""}
				${flipBoxFrontHoverBackgroundImagePosition ? `background-position: ${flipBoxFrontHoverBackgroundImagePosition};` : ""}
				${flipBoxFrontHoverBackgroundImageAttachment ? `background-attachment: ${flipBoxFrontHoverBackgroundImageAttachment};` : ""}
				${flipBoxFrontHoverBackgroundImageRepeat ? `background-repeat: ${flipBoxFrontHoverBackgroundImageRepeat};` : ""}
				${flipBoxFrontHoverBackgroundImageSize ? `background-size: ${flipBoxFrontHoverBackgroundImageSize};` : ""}`
					: flipBoxFrontHoverClassicColor ? `background: ${flipBoxFrontHoverClassicColor}; ` : ""}
				${flipBoxFrontBorderHoverColor ? `border-color: ${flipBoxFrontBorderHoverColor};` : ''}
		  }
		  .fb-flip-box-wrapper.${blockID} .fb-flipbox-back {
			display: flex;
			align-items: center;
			${flipBoxFrontWidth?.Desktop ? `width: ${flipBoxFrontWidth?.Desktop}${flipBoxFrontWidthUnits?.Desktop};` : ''}
			${flipBoxFrontHeight?.Desktop ? `min-height: ${flipBoxFrontHeight?.Desktop}${flipBoxFrontHeightUnits?.Desktop};` : ''}
			height: auto;
			${flipBoxBackBackgroundType === "gradient" ? `
			background: ${flipBoxBackCustomGradientSwitcher && flipBoxBackCustomGradientInputValue ? flipBoxBackCustomGradientInputValue : flipBoxBackGradientColor};
			`
				: flipBoxBackBackgroundImageUrl && flipBoxBackBackgroundImageUrl !== "null" ? `
			${flipBoxBackBackgroundImageUrl ? `background: url(${flipBoxBackBackgroundImageUrl});` : ""}
			${flipBoxBackBackgroundImagePosition ? `background-position: ${flipBoxBackBackgroundImagePosition};` : ""}
			${flipBoxBackBackgroundImageAttachment ? `background-attachment: ${flipBoxBackBackgroundImageAttachment};` : ""}
			${flipBoxBackBackgroundImageRepeat ? `background-repeat: ${flipBoxBackBackgroundImageRepeat};` : ""}
			${flipBoxBackBackgroundImageSize ? `background-size: ${flipBoxBackBackgroundImageSize};` : ""}`
					: flipBoxBackClassicColor ? `background: ${flipBoxBackClassicColor}; ` : ""}
			${flipBoxBackDesktopPadding && flipBoxBackPaddingDesktop?.top ? `padding: ${flipBoxBackDesktopPadding};` : ''}
			${flipBoxBackDesktopMargin && flipBoxBackMarginDesktop?.top ? `margin: ${flipBoxBackDesktopMargin};` : ''}
			${flipBoxBackBorder ? `border-style: ${flipBoxBackBorder};` : ''}
			${flipBoxBackBorderDesktopWidth && flipBoxBackBorderDesktop?.top ? `border-width: ${flipBoxBackBorderDesktopWidth};` : ''}
			${flipBoxBackBorderColor ? `border-color: ${flipBoxBackBorderColor};` : ''}
			${flipBoxBackBorderRadiusDesktop && flipBoxBackBorderRadiusDesktop?.top ? `border-radius: ${flipBoxBackBorderRadiusDesktopWidth};` : ''}
			background-repeat: none;
			background-size: cover;
			transform:  ${(flipAnimationType === "flip-up" && "rotateX(-180deg)") ||
			(flipAnimationType === "flip-down" && "rotateX(180deg)") ||
			((flipAnimationType === "zoom-in" ||
				flipAnimationType === "zoom-out" ||
				flipAnimationType === "fade") &&
				"none")
			};
			${isHover && (flipAnimationType === "zoom-in" || flipAnimationType === "zoom-out")
				? "z-index: 5;"
				: ""
			}
			transition: all .3s ease-in-out; 
		  }
		
		  ${(isHover || flipSelectedSide === "front") && flipAnimationType === "fade"
				? `
			.fb-flip-box-wrapper.${blockID} .fb-flipper-wrapper.fb-show-back .fb-flipbox-front {
				opacity: 0;
			}
			`
				: ""
			}
		  ${(isHover || flipSelectedSide === "back") && flipAnimationType === "fade"
				? `
			.fb-flip-box-wrapper.${blockID} .fb-flipper-wrapper.fb-show-back .fb-flipbox-back {
				opacity: 1;
			}
			`
				: ""
			}
		  .fb-flip-box-wrapper.${blockID} .fb-flip-box-wrapper-inner {
			${flipIconPosition === 'top' ? 'flex-direction: column;' : ''}
			${flipIconPosition === 'bottom' ? 'flex-direction: column-reverse;' : ''}
			${flipIconPosition === 'left' ? 'flex-direction: row;' : ''}
			${flipIconPosition === 'right' ? 'flex-direction: row-reverse;' : ''}
			${flipIconPosition !== 'top' || flipIconPosition !== 'bottom' ? `justify-content: ${flipCardAlignment};` : ''}
		  }
		  .fb-flip-box-wrapper.${blockID} .fb-flipbox-content-wrapper .fb-flip-media-container {
			${mediaAlignmentFront ? `justify-content: ${mediaAlignmentFront};` : ''}
		  }
		  .fb-flip-box-wrapper.${blockID} .fb-flipbox-content-wrapper .fb-flip-back-media-container {
			${mediaAlignmentBack ? `justify-content: ${mediaAlignmentBack};` : ''}
		  }
	  
		  .fb-flip-box-wrapper.${blockID} .fb-flip-box-content-wrapper .fb-heading {
			  ${Heading_Color ? `color: ${Heading_Color};` : ""}
			  ${Heading_Background_Color ? `background-color: ${Heading_Background_Color};` : ""}

			  ${headingGlobalTypoSwitcher?.fontFamily === true && headingGlobalTypographyData?.fontFamily ? `font-family: ${headingGlobalTypographyData?.fontFamily};` : ''}
			  ${headingGlobalTypoSwitcher?.fontSize === true && headingGlobalTypographyData?.fontSize ? `font-size: ${headingGlobalTypographyData?.fontSize};` : ''}
			  ${headingGlobalTypoSwitcher?.fontWeight === true && headingGlobalTypographyData?.fontWeight ? `font-weight: ${headingGlobalTypographyData?.fontWeight};` : ''}
			  ${headingGlobalTypoSwitcher?.fontStyle === true && headingGlobalTypographyData?.fontStyle ? `font-style: ${headingGlobalTypographyData?.fontStyle};` : ''}
			  ${headingGlobalTypoSwitcher?.textTransform === true && headingGlobalTypographyData?.textTransform ? `text-transform: ${headingGlobalTypographyData?.textTransform};` : ''}
			  ${headingGlobalTypoSwitcher?.textDecoration === true && headingGlobalTypographyData?.textDecoration ? `text-decoration: ${headingGlobalTypographyData?.textDecoration};` : ''}
			  ${headingGlobalTypoSwitcher?.letterSpacing === true && headingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData?.letterSpacing};` : ''}
			  ${headingGlobalTypoSwitcher?.lineHeight === true && headingGlobalTypographyData?.lineHeight ? `line-height: ${headingGlobalTypographyData?.lineHeight};` : ''}

			  ${headingGlobalTypoSwitcher?.fontFamily === false && headingFontFamily && headingFontFamily !== "Default" ? `font-family: ${headingFontFamily};` : ''}
			  ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Desktop && headingFontSizeUnits?.Desktop ? `font-size: ${headingFontSize?.Desktop}${headingFontSizeUnits?.Desktop};` : ''}
			  ${headingGlobalTypoSwitcher?.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
			  ${headingGlobalTypoSwitcher?.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
			  ${headingGlobalTypoSwitcher?.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
			  ${headingGlobalTypoSwitcher?.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
			  ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Desktop && headingLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingLetterSpacing?.Desktop}${headingLetterSpacingUnits?.Desktop};` : ''}
			  ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Desktop && headingLineHeightUnits?.Desktop ? `line-height: ${headingLineHeight?.Desktop}${headingLineHeightUnits?.Desktop};` : ''}
			  ${headingPaddingDesktopWidthValue && Heading_Desktop_padding?.top ? `padding: ${headingPaddingDesktopWidthValue};` : ''}
			  ${headingMarginDesktopWidthValue && Heading_Desktop_Margin?.top ? `margin: ${headingMarginDesktopWidthValue};` : ''}
			  ${Heading_Border ? `border-style: ${Heading_Border};` : ''}
			  ${headingBorderDesktopWidthValue && Heading_Desktop_Border_Width?.top ? `border-width: ${headingBorderDesktopWidthValue};` : ''}
			  ${Heading_Border_Color ? `border-color: ${Heading_Border_Color};` : ''}
			  ${headingBorderRadiusDesktopWidthValue && Heading_Desktop_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusDesktopWidthValue};` : ''}
			  ${Alignment ? `text-align: ${Alignment};` : ''}
			  transition: all .3s ease-in-out;
			}
	  
		  	.fb-flip-box-wrapper.${blockID}:hover .fb-flip-box-content-wrapper .fb-heading {
			  ${Heading_Hover_Color ? `color: ${Heading_Hover_Color};` : ""}
			  ${Heading_Border_Hover_Color ? `border-color: ${Heading_Border_Hover_Color};` : ""}
			  transition: all .3s ease-in-out;
		  	}
	  
		  .fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-heading {
			${titleAlignmentBack ? `text-align: ${titleAlignmentBack};` : ''}
			${headingBackColor ? `color: ${headingBackColor};` : ""}

			${headingBackGlobalTypoSwitcher?.fontFamily === true && headingBackGlobalTypographyData?.fontFamily ? `font-family: ${headingBackGlobalTypographyData?.fontFamily};` : ''}
			${headingBackGlobalTypoSwitcher?.fontSize === true && headingBackGlobalTypographyData?.fontSize ? `font-size: ${headingBackGlobalTypographyData?.fontSize};` : ''}
			${headingBackGlobalTypoSwitcher?.fontWeight === true && headingBackGlobalTypographyData?.fontWeight ? `font-weight: ${headingBackGlobalTypographyData?.fontWeight};` : ''}
			${headingBackGlobalTypoSwitcher?.fontStyle === true && headingBackGlobalTypographyData?.fontStyle ? `font-style: ${headingBackGlobalTypographyData?.fontStyle};` : ''}
			${headingBackGlobalTypoSwitcher?.textTransform === true && headingBackGlobalTypographyData?.textTransform ? `text-transform: ${headingBackGlobalTypographyData?.textTransform};` : ''}
			${headingBackGlobalTypoSwitcher?.textDecoration === true && headingBackGlobalTypographyData?.textDecoration ? `text-decoration: ${headingBackGlobalTypographyData?.textDecoration};` : ''}
			${headingBackGlobalTypoSwitcher?.letterSpacing === true && headingBackGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingBackGlobalTypographyData?.letterSpacing};` : ''}
			${headingBackGlobalTypoSwitcher?.lineHeight === true && headingBackGlobalTypographyData?.lineHeight ? `line-height: ${headingBackGlobalTypographyData?.lineHeight};` : ''}

			${headingBackGlobalTypoSwitcher?.fontFamily === false && headingBackFontFamily && headingBackFontFamily !== "Default" ? `font-family: ${headingBackFontFamily};` : ''}
			${headingBackGlobalTypoSwitcher?.fontSize === false && headingBackFontSize?.Desktop && headingBackFontSizeUnits?.Desktop ? `font-size: ${headingBackFontSize?.Desktop}${headingBackFontSizeUnits?.Desktop};` : ''}
			${headingBackGlobalTypoSwitcher?.fontWeight === false && headingBackFontWeight ? `font-weight: ${headingBackFontWeight};` : ''}
			${headingBackGlobalTypoSwitcher?.fontStyle === false && headingBackFontStyle ? `font-style: ${headingBackFontStyle};` : ''}
			${headingBackGlobalTypoSwitcher?.textTransform === false && headingBackTextTransform ? `text-transform: ${headingBackTextTransform};` : ''}
			${headingBackGlobalTypoSwitcher?.textDecoration === false && headingBackTextDecoration ? `text-decoration: ${headingBackTextDecoration};` : ''}
			${headingBackGlobalTypoSwitcher?.letterSpacing === false && headingBackLetterSpacing?.Desktop && headingBackLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingBackLetterSpacing?.Desktop}${headingBackLetterSpacingUnits?.Desktop};` : ''}
			${headingBackGlobalTypoSwitcher?.lineHeight === false && headingBackLineHeight?.Desktop && headingBackLineHeightUnits?.Desktop ? `line-height: ${headingBackLineHeight?.Desktop}${headingBackLineHeightUnits?.Desktop};` : ''}

			${headingBackPaddingDesktopWidthValue && headingBack_Desktop_padding?.top ? `padding: ${headingBackPaddingDesktopWidthValue};` : ''}
			${headingBackMarginDesktopWidthValue && headingBack_Desktop_Margin?.top ? `margin: ${headingBackMarginDesktopWidthValue};` : ''}
			${headingBack_Border ? `border-style: ${headingBack_Border};` : ''}
			${headingBackBorderDesktopWidthValue && headingBack_Desktop_Border_Width?.top ? `border-width: ${headingBackBorderDesktopWidthValue};` : ''}
			${headingBack_Border_Color ? `border-color: ${headingBack_Border_Color};` : ''}
			${headingBackBorderRadiusDesktopWidthValue && headingBack_Desktop_Border_radius_Width?.top ? `border-radius: ${headingBackBorderRadiusDesktopWidthValue};` : ''}
		  }

		  .fb-flip-box-wrapper.${blockID}:hover .fb-flip-back-box-content-wrapper .fb-heading{
			${headingBackHoverColor ? `color: ${headingBackHoverColor};` : ""}
			${headingBack_Border_Hover_Color ? `border-color: ${headingBack_Border_Hover_Color};` : ''}
		  }
		@media only screen and (max-width: 1024px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-box-content-wrapper .fb-heading {
				${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
				${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
				${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight?.Tablet}${headingLineHeightUnits?.Tablet};` : ''}
				${headingPaddingTabWidthValue && Heading_Tab_padding?.top ? `padding: ${headingPaddingTabWidthValue};` : ''}
				${headingMarginTabWidthValue && Heading_Tab_Margin?.top ? `margin: ${headingMarginTabWidthValue};` : ''}
				${headingBorderTabWidthValue && Heading_Tab_Border_Width?.top ? `border-width: ${headingBorderTabWidthValue};` : ''}
				${headingBorderRadiusTabWidthValue && Heading_Tab_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusTabWidthValue};` : ''}
			}
			.fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-heading{
				${headingBackGlobalTypoSwitcher?.fontSize === false && headingBackFontSize?.Tablet && headingBackFontSizeUnits?.Tablet ? `font-size: ${headingBackFontSize?.Tablet}${headingBackFontSizeUnits?.Tablet};` : ''}
				${headingBackGlobalTypoSwitcher?.letterSpacing === false && headingBackLetterSpacing?.Tablet && headingBackLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingBackLetterSpacing?.Tablet}${headingBackLetterSpacingUnits?.Tablet};` : ''}
				${headingBackGlobalTypoSwitcher?.lineHeight === false && headingBackLineHeight?.Tablet && headingBackLineHeightUnits?.Tablet ? `line-height: ${headingBackLineHeight?.Tablet}${headingBackLineHeightUnits?.Tablet};` : ''}
				${headingBackPaddingTabWidthValue && headingBack_Tab_padding?.top ? `padding: ${headingBackPaddingTabWidthValue};` : ''}
				${headingBackMarginTabWidthValue && headingBack_Tab_Margin?.top ? `margin: ${headingBackMarginTabWidthValue};` : ''}
				${headingBackBorderTabWidthValue && headingBack_Tab_Border_Width?.top ? `border-width: ${headingBackBorderTabWidthValue};` : ''}
				${headingBackBorderRadiusTabWidthValue && headingBack_Tab_Border_radius_Width?.top ? `border-radius: ${headingBackBorderRadiusTabWidthValue};` : ''}
			}

			.fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper{
				${flipBoxFrontWidth?.Tablet ? `width: ${flipBoxFrontWidth?.Tablet}${flipBoxFrontWidthUnits?.Tablet};` : ''}
				${flipBoxFrontHeight?.Tablet ? `min-height: ${flipBoxFrontHeight?.Tablet}${flipBoxFrontHeightUnits?.Tablet};` : ''}
				height: fit-content;
			}

			.fb-flip-box-wrapper.${blockID} .fb-flipbox-front {
				display: flex;
				align-items: center;
				${flipBoxFrontWidth?.Tablet ? `width: ${flipBoxFrontWidth?.Tablet}${flipBoxFrontWidthUnits?.Tablet};` : ''}
				${flipBoxFrontHeight?.Tablet ? `min-height: ${flipBoxFrontHeight?.Tablet}${flipBoxFrontHeightUnits?.Tablet};` : ''}
				${flipBoxFrontTabletPadding && flipBoxFrontPaddingTablet?.top ? `padding: ${flipBoxFrontTabletPadding};` : ''}
				${flipBoxFrontTabletMargin && flipBoxFrontMarginTablet?.top ? `margin: ${flipBoxFrontTabletMargin};` : ''}
				${flipBoxFrontBorderTabletWidth && flipBoxFrontBorderTablet?.top ? `border-width: ${flipBoxFrontBorderTabletWidth};` : ''}
				${flipBoxFrontBorderRadiusTablet && flipBoxFrontBorderRadiusTablet?.top ? `border-radius: ${flipBoxFrontBorderRadiusTabletWidth};` : ''}
			}

			.fb-flip-box-wrapper.${blockID} .fb-flipbox-back {
				display: flex;
				align-items: center;
				${flipBoxFrontWidth?.Tablet ? `width: ${flipBoxFrontWidth?.Tablet}${flipBoxFrontWidthUnits?.Tablet};` : ''}
				${flipBoxFrontHeight?.Tablet ? `min-height: ${flipBoxFrontHeight?.Tablet}${flipBoxFrontHeightUnits?.Tablet};` : ''}
				${flipBoxBackTabletPadding && flipBoxBackPaddingTablet?.top ? `padding: ${flipBoxBackTabletPadding};` : ''}
				${flipBoxBackTabletMargin && flipBoxBackMarginTablet?.top ? `margin: ${flipBoxBackTabletMargin};` : ''}
				${flipBoxBackBorderTabletWidth && flipBoxBackBorderTablet?.top ? `border-width: ${flipBoxBackBorderTabletWidth};` : ''}
				${flipBoxBackBorderRadiusTablet && flipBoxBackBorderRadiusTablet?.top ? `border-radius: ${flipBoxBackBorderRadiusTabletWidth};` : ''}		
			}
		}
		@media only screen and (max-width: 724px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-box-content-wrapper .fb-heading {
				${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
				${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
				${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
				${headingPaddingMobileWidthValue && Heading_Mobile_padding?.top ? `padding: ${headingPaddingMobileWidthValue};` : ''}
				${headingMarginMobileWidthValue && Heading_Mobile_Margin?.top ? `margin: ${headingMarginMobileWidthValue};` : ''}
				${headingBorderMobileWidthValue && Heading_Mobile_Border_Width?.top ? `border-width: ${headingBorderMobileWidthValue};` : ''}
				${headingBorderRadiusMobileWidthValue && Heading_Mobile_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusMobileWidthValue};` : ''}
			}
			
			.fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-heading{
				${headingBackGlobalTypoSwitcher?.fontSize === false && headingBackFontSize?.Mobile && headingBackFontSizeUnits?.Mobile ? `font-size: ${headingBackFontSize?.Mobile}${headingBackFontSizeUnits?.Mobile};` : ''}
				${headingBackGlobalTypoSwitcher?.letterSpacing === false && headingBackLetterSpacing?.Mobile && headingBackLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingBackLetterSpacing?.Mobile}${headingBackLetterSpacingUnits?.Mobile};` : ''}
				${headingBackGlobalTypoSwitcher?.lineHeight === false && headingBackLineHeight?.Mobile && headingBackLineHeightUnits?.Mobile ? `line-height: ${headingBackLineHeight?.Mobile}${headingBackLineHeightUnits?.Mobile};` : ''}
				${headingBackPaddingMobileWidthValue && headingBack_Mobile_padding?.top ? `padding: ${headingBackPaddingMobileWidthValue};` : ''}
			    ${headingBackMarginMobileWidthValue && headingBack_Mobile_Margin?.top ? `margin: ${headingBackMarginMobileWidthValue};` : ''}
				${headingBackBorderMobileWidthValue && headingBack_Mobile_Border_Width?.top ? `border-width: ${headingBackBorderMobileWidthValue};` : ''}
			    ${headingBackBorderRadiusMobileWidthValue && headingBack_Mobile_Border_radius_Width?.top ? `border-radius: ${headingBackBorderRadiusMobileWidthValue};` : ''}
			}

			.fb-flip-box-main-wrapper.${blockID} .fb-flipper-wrapper{
				${flipBoxFrontWidth?.Mobile ? `width: ${flipBoxFrontWidth?.Mobile}${flipBoxFrontWidthUnits?.Mobile};` : ''}
				${flipBoxFrontHeight?.Mobile ? `min-height: ${flipBoxFrontHeight?.Mobile}${flipBoxFrontHeightUnits?.Mobile};` : ''}
				height: fit-content;
			}

			.fb-flip-box-wrapper.${blockID} .fb-flipbox-front {
				display: flex;
				align-items: center;
				${flipBoxFrontWidth?.Mobile ? `width: ${flipBoxFrontWidth?.Mobile}${flipBoxFrontWidthUnits?.Mobile};` : ''}
				${flipBoxFrontHeight?.Mobile ? `min-height: ${flipBoxFrontHeight?.Mobile}${flipBoxFrontHeightUnits?.Mobile};` : ''}
				${flipBoxFrontMobilePadding && flipBoxFrontPaddingMobile?.top ? `padding: ${flipBoxFrontMobilePadding};` : ''}
				${flipBoxFrontMobileMargin && flipBoxFrontMarginMobile?.top ? `margin: ${flipBoxFrontMobileMargin};` : ''}
				${flipBoxFrontBorderMobileWidth && flipBoxFrontBorderMobile?.top ? `border-width: ${flipBoxFrontBorderMobileWidth};` : ''}
				${flipBoxFrontBorderRadiusMobile && flipBoxFrontBorderRadiusMobile?.top ? `border-radius: ${flipBoxFrontBorderRadiusMobileWidth};` : ''}
			}

			.fb-flip-box-wrapper.${blockID} .fb-flipbox-back {
				display: flex;
				align-items: center;
				${flipBoxFrontWidth?.Mobile ? `width: ${flipBoxFrontWidth?.Mobile}${flipBoxFrontWidthUnits?.Mobile};` : ''}
				${flipBoxFrontHeight?.Mobile ? `min-height: ${flipBoxFrontHeight?.Mobile}${flipBoxFrontHeightUnits?.Mobile};` : ''}
				${flipBoxBackMobilePadding && flipBoxBackPaddingMobile?.top ? `padding: ${flipBoxBackMobilePadding};` : ''}
				${flipBoxBackMobileMargin && flipBoxBackMarginMobile?.top ? `margin: ${flipBoxBackMobileMargin};` : ''}
				${flipBoxBackBorderMobileWidth && flipBoxBackBorderMobile?.top ? `border-width: ${flipBoxBackBorderMobileWidth};` : ''}
				${flipBoxBackBorderRadiusMobile && flipBoxBackBorderRadiusMobile?.top ? `border-radius: ${flipBoxBackBorderRadiusMobileWidth};` : ''}		
			}
		}
		
		.fb-flip-box-wrapper.${blockID} .fb-description {
			${SubHeadingColor ? `color: ${SubHeadingColor};` : ""}
			${subHeadingGlobalTypoSwitcher?.fontFamily === true && subHeadingGlobalTypographyData?.fontFamily ? `font-family: ${subHeadingGlobalTypographyData?.fontFamily};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontSize === true && subHeadingGlobalTypographyData?.fontSize ? `font-size: ${subHeadingGlobalTypographyData?.fontSize};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontWeight === true && subHeadingGlobalTypographyData?.fontWeight ? `font-weight: ${subHeadingGlobalTypographyData?.fontWeight};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontStyle === true && subHeadingGlobalTypographyData?.fontStyle ? `font-style: ${subHeadingGlobalTypographyData?.fontStyle};` : ''}
			${subHeadingGlobalTypoSwitcher?.textTransform === true && subHeadingGlobalTypographyData?.textTransform ? `text-transform: ${subHeadingGlobalTypographyData?.textTransform};` : ''}
			${subHeadingGlobalTypoSwitcher?.textDecoration === true && subHeadingGlobalTypographyData?.textDecoration ? `text-decoration: ${subHeadingGlobalTypographyData?.textDecoration};` : ''}
			${subHeadingGlobalTypoSwitcher?.letterSpacing === true && subHeadingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${subHeadingGlobalTypographyData?.letterSpacing};` : ''}
			${subHeadingGlobalTypoSwitcher?.lineHeight === true && subHeadingGlobalTypographyData?.lineHeight ? `line-height: ${subHeadingGlobalTypographyData?.lineHeight};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontFamily === false && subHeadingFontFamily && subHeadingFontFamily !== "Default" ? `font-family: ${subHeadingFontFamily};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Desktop && subHeadingFontSizeUnits?.Desktop ? `font-size: ${subHeadingFontSize?.Desktop}${subHeadingFontSizeUnits?.Desktop};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontWeight === false && subHeadingFontWeight ? `font-weight: ${subHeadingFontWeight};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontStyle === false && subHeadingFontStyle ? `font-style: ${subHeadingFontStyle};` : ''}
			${subHeadingGlobalTypoSwitcher?.textTransform === false && subHeadingTextTransform ? `text-transform: ${subHeadingTextTransform};` : ''}
			${subHeadingGlobalTypoSwitcher?.textDecoration === false && subHeadingTextDecoration ? `text-decoration: ${subHeadingTextDecoration};` : ''}
			${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Desktop && subHeadingLetterSpacingUnits?.Desktop ? `letter-spacing: ${subHeadingLetterSpacing?.Desktop}${subHeadingLetterSpacingUnits?.Desktop};` : ''}
			${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Desktop && subHeadingLineHeightUnits?.Desktop ? `line-height: ${subHeadingLineHeight?.Desktop}${subHeadingLineHeightUnits?.Desktop};` : ''}
			${subHeadingDesktopPaddingValue && SubHeadingDesktopPadding?.top ? `padding: ${subHeadingDesktopPaddingValue};` : ""}
			${descDesktopMarginValue && descDesktopMargin?.top ? `margin: ${descDesktopMarginValue};` : ""}
			${descAlignment ? `text-align: ${descAlignment};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-flip-box-wrapper.${blockID}:hover .fb-description {
			${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
			${subHeadingBackColor ? `color: ${subHeadingBackColor};` : ""}
			${subHeadingBackGlobalTypoSwitcher?.fontFamily === true && subHeadingBackGlobalTypographyData?.fontFamily ? `font-family: ${subHeadingBackGlobalTypographyData?.fontFamily};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.fontSize === true && subHeadingBackGlobalTypographyData?.fontSize ? `font-size: ${subHeadingBackGlobalTypographyData?.fontSize};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.fontWeight === true && subHeadingBackGlobalTypographyData?.fontWeight ? `font-weight: ${subHeadingBackGlobalTypographyData?.fontWeight};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.fontStyle === true && subHeadingBackGlobalTypographyData?.fontStyle ? `font-style: ${subHeadingBackGlobalTypographyData?.fontStyle};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.textTransform === true && subHeadingBackGlobalTypographyData?.textTransform ? `text-transform: ${subHeadingBackGlobalTypographyData?.textTransform};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.textDecoration === true && subHeadingBackGlobalTypographyData?.textDecoration ? `text-decoration: ${subHeadingBackGlobalTypographyData?.textDecoration};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.letterSpacing === true && subHeadingBackGlobalTypographyData?.letterSpacing ? `letter-spacing: ${subHeadingBackGlobalTypographyData?.letterSpacing};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.lineHeight === true && subHeadingBackGlobalTypographyData?.lineHeight ? `line-height: ${subHeadingBackGlobalTypographyData?.lineHeight};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.fontFamily === false && subHeadingBackFontFamily && subHeadingBackFontFamily !== "Default" ? `font-family: ${subHeadingBackFontFamily};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.fontSize === false && subHeadingBackFontSize?.Desktop && subHeadingBackFontSizeUnits?.Desktop ? `font-size: ${subHeadingBackFontSize?.Desktop}${subHeadingBackFontSizeUnits?.Desktop};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.fontWeight === false && subHeadingBackFontWeight ? `font-weight: ${subHeadingBackFontWeight};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.fontStyle === false && subHeadingBackFontStyle ? `font-style: ${subHeadingBackFontStyle};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.textTransform === false && subHeadingBackTextTransform ? `text-transform: ${subHeadingBackTextTransform};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.textDecoration === false && subHeadingBackTextDecoration ? `text-decoration: ${subHeadingBackTextDecoration};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.letterSpacing === false && subHeadingBackLetterSpacing?.Desktop && subHeadingBackLetterSpacingUnits?.Desktop ? `letter-spacing: ${subHeadingBackLetterSpacing?.Desktop}${subHeadingBackLetterSpacingUnits?.Desktop};` : ''}
			${subHeadingBackGlobalTypoSwitcher?.lineHeight === false && subHeadingBackLineHeight?.Desktop && subHeadingBackLineHeightUnits?.Desktop ? `line-height: ${subHeadingBackLineHeight?.Desktop}${subHeadingBackLineHeightUnits?.Desktop};` : ''}
			${subHeadingBackDesktopPaddingValue && subHeadingBackDesktopPadding?.top ? `padding: ${subHeadingBackDesktopPaddingValue};` : ""}
			${descBackDesktopMarginValue && descBackDesktopMargin?.top ? `margin: ${descBackDesktopMarginValue};` : ""}
			${descAlignmentBack ? `text-align: ${descAlignmentBack};` : ''}
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
			${subHeadingBackHoverColor ? `color: ${subHeadingBackHoverColor};` : ""}
		}
		@media only screen and (max-width: 1024px) {
			.fb-flip-box-wrapper.${blockID} .fb-description {
				${subHeadingTabPaddingValue && SubHeadingTabPadding?.top ? `padding: ${subHeadingTabPaddingValue};` : ""}
				${descTabMarginValue && descTabMargin?.top ? `margin: ${descTabMarginValue};` : ""}
				${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Tablet && subHeadingFontSizeUnits?.Tablet ? `font-size: ${subHeadingFontSize?.Tablet}${subHeadingFontSizeUnits?.Tablet};` : ''}
				${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Tablet && subHeadingLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingLetterSpacing?.Tablet}${subHeadingLetterSpacingUnits?.Tablet};` : ''}
				${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Tablet && subHeadingLineHeightUnits?.Tablet ? `line-height: ${subHeadingLineHeight?.Tablet}${subHeadingLineHeightUnits?.Tablet};` : ''}
			}

			.fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
				${subHeadingBackGlobalTypoSwitcher?.fontSize === false && subHeadingBackFontSize?.Tablet && subHeadingBackFontSizeUnits?.Tablet ? `font-size: ${subHeadingBackFontSize?.Tablet}${subHeadingBackFontSizeUnits?.Tablet};` : ''}
				${subHeadingBackGlobalTypoSwitcher?.letterSpacing === false && subHeadingBackLetterSpacing?.Tablet && subHeadingBackLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingBackLetterSpacing?.Tablet}${subHeadingBackLetterSpacingUnits?.Tablet};` : ''}
				${subHeadingBackGlobalTypoSwitcher?.lineHeight === false && subHeadingBackLineHeight?.Tablet && subHeadingBackLineHeightUnits?.Tablet ? `line-height: ${subHeadingBackLineHeight?.Tablet}${subHeadingBackLineHeightUnits?.Tablet};` : ''}
				${subHeadingBackTabPaddingValue && subHeadingBackTabPadding?.top ? `padding: ${subHeadingBackTabPaddingValue};` : ""}
				${descBackTabMarginValue && descBackTabMargin?.top ? `margin: ${descBackTabMarginValue};` : ""}
			}
		}

		@media only screen and (max-width: 757px) {
			.fb-flip-box-wrapper.${blockID} .fb-description {
				${subHeadingMobilePaddingValue && SubHeadingMobilePadding?.top ? `padding: ${subHeadingMobilePaddingValue};` : ""}
				${descMobileMarginValue && descMobileMargin?.top ? `margin: ${descMobileMarginValue};` : ""}
				${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Mobile && subHeadingFontSizeUnits?.Mobile ? `font-size: ${subHeadingFontSize?.Mobile}${subHeadingFontSizeUnits?.Mobile};` : ''}
				${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Mobile && subHeadingLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingLetterSpacing?.Mobile}${subHeadingLetterSpacingUnits?.Mobile};` : ''}
				${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Mobile && subHeadingLineHeightUnits?.Mobile ? `line-height: ${subHeadingLineHeight?.Mobile}${subHeadingLineHeightUnits?.Mobile};` : ''}
			}

			.fb-flip-box-wrapper.${blockID} .fb-flip-back-box-content-wrapper .fb-description {
				${subHeadingBackGlobalTypoSwitcher?.fontSize === false && subHeadingBackFontSize?.Mobile && subHeadingBackFontSizeUnits?.Mobile ? `font-size: ${subHeadingBackFontSize?.Mobile}${subHeadingBackFontSizeUnits?.Mobile};` : ''}
				${subHeadingBackGlobalTypoSwitcher?.letterSpacing === false && subHeadingBackLetterSpacing?.Mobile && subHeadingBackLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingBackLetterSpacing?.Mobile}${subHeadingBackLetterSpacingUnits?.Mobile};` : ''}
				${subHeadingBackGlobalTypoSwitcher?.lineHeight === false && subHeadingBackLineHeight?.Mobile && subHeadingBackLineHeightUnits?.Mobile ? `line-height: ${subHeadingBackLineHeight?.Mobile}${subHeadingBackLineHeightUnits?.Mobile};` : ''}
				${subHeadingBackMobilePaddingValue && subHeadingBackMobilePadding?.top ? `padding: ${subHeadingBackMobilePaddingValue};` : ""}
				${descBackMobileMarginValue && descBackMobileMargin?.top ? `margin: ${descBackMobileMarginValue};` : ""}
			}
		}
		.fb-flip-box-wrapper.${blockID} .fb-flip-btn-container {
			${buttonAlignment ? `text-align: ${buttonAlignment};` : ''}
		}
		.fb-flip-box-wrapper.${blockID} .fb-flipbox-back .fb-flip-back-btn-container {
			${buttonAlignmentBack ? `text-align: ${buttonAlignmentBack};` : ''}
		}
		.fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper {
			flex-direction: ${btnIconPosition === "left" ? "row-reverse" : "row"};
			${buttonTextColor ? `color: ${buttonTextColor};` : ""}
			${buttonBgColor ? `background-color: ${buttonBgColor};` : ""}

			${buttonGlobalTypoSwitcher?.fontFamily === true && buttonGlobalTypographyData?.fontFamily ? `font-family: ${buttonGlobalTypographyData?.fontFamily};` : ''}
			${buttonGlobalTypoSwitcher?.fontSize === true && buttonGlobalTypographyData?.fontSize ? `font-size: ${buttonGlobalTypographyData?.fontSize};` : ''}
			${buttonGlobalTypoSwitcher?.fontWeight === true && buttonGlobalTypographyData?.fontWeight ? `font-weight: ${buttonGlobalTypographyData?.fontWeight};` : ''}
			${buttonGlobalTypoSwitcher?.fontStyle === true && buttonGlobalTypographyData?.fontStyle ? `font-style: ${buttonGlobalTypographyData?.fontStyle};` : ''}
			${buttonGlobalTypoSwitcher?.textTransform === true && buttonGlobalTypographyData?.textTransform ? `text-transform: ${buttonGlobalTypographyData?.textTransform};` : ''}
			${buttonGlobalTypoSwitcher?.textDecoration === true && buttonGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonGlobalTypographyData?.textDecoration};` : ''}
			${buttonGlobalTypoSwitcher?.letterSpacing === true && buttonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData?.letterSpacing};` : ''}
			${buttonGlobalTypoSwitcher?.lineHeight === true && buttonGlobalTypographyData?.lineHeight ? `line-height: ${buttonGlobalTypographyData?.lineHeight};` : ''}

			${buttonGlobalTypoSwitcher?.fontFamily === false && buttonFontFamily && buttonFontFamily !== "Default" ? `font-family: ${buttonFontFamily}` : ""};
			${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Desktop ? `font-size: ${buttonFontSize?.Desktop}${buttonFontSizeUnits?.Desktop};` : ''}
			${buttonGlobalTypoSwitcher?.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight}` : ""};
			${buttonGlobalTypoSwitcher?.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle}` : ""};
			${buttonGlobalTypoSwitcher?.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform}` : ""};
			${buttonGlobalTypoSwitcher?.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration}` : ""};
			${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Desktop ? `letter-spacing: ${buttonLetterSpacing?.Desktop}${buttonLetterSpacingUnits?.Desktop};` : ''}
			${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Desktop ? `line-height: ${buttonLineHeight?.Desktop}${buttonLineHeightUnits?.Desktop};` : ''}
			
			${buttonDesktopPaddingValue && flipButtonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingValue};` : ''}	
			${buttonDesktopMarginValue && flipButtonDesktopMargin?.top ? `margin: ${buttonDesktopMarginValue};` : ''}
			${flipButtonBorder ? `border-style: ${flipButtonBorder};` : ''}
			${buttonDesktopBorderValue && flipButtonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderValue};` : ''}
			${flipButtonBorderColor ? `border-color: ${flipButtonBorderColor};` : ''}
			${buttonDesktopBorderRadiusValue && flipBtnDesktopBorderradiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusValue};` : ''}
			${btnIconGap?.Desktop && btnIconGapUnits?.Desktop ? `gap: ${btnIconGap?.Desktop}${btnIconGapUnits?.Desktop};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper:hover {
			${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}
			${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
			${flipButtonHoverBorderColor ? `border-color: ${flipButtonHoverBorderColor};` : ''}
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper {
			flex-direction: ${btnIconPosition === "left" ? "row-reverse" : "row"};
			${buttonBackTextColor ? `color: ${buttonBackTextColor};` : ""}
			${buttonBackBgColor ? `background-color: ${buttonBackBgColor};` : ""}

			${buttonBackGlobalTypoSwitcher?.fontFamily === true && buttonBackGlobalTypographyData?.fontFamily ? `font-family: ${buttonBackGlobalTypographyData?.fontFamily};` : ''}
			${buttonBackGlobalTypoSwitcher?.fontSize === true && buttonBackGlobalTypographyData?.fontSize ? `font-size: ${buttonBackGlobalTypographyData?.fontSize};` : ''}
			${buttonBackGlobalTypoSwitcher?.fontWeight === true && buttonBackGlobalTypographyData?.fontWeight ? `font-weight: ${buttonBackGlobalTypographyData?.fontWeight};` : ''}
			${buttonBackGlobalTypoSwitcher?.fontStyle === true && buttonBackGlobalTypographyData?.fontStyle ? `font-style: ${buttonBackGlobalTypographyData?.fontStyle};` : ''}
			${buttonBackGlobalTypoSwitcher?.textTransform === true && buttonBackGlobalTypographyData?.textTransform ? `text-transform: ${buttonBackGlobalTypographyData?.textTransform};` : ''}
			${buttonBackGlobalTypoSwitcher?.textDecoration === true && buttonBackGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonBackGlobalTypographyData?.textDecoration};` : ''}
			${buttonBackGlobalTypoSwitcher?.letterSpacing === true && buttonBackGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonBackGlobalTypographyData?.letterSpacing};` : ''}
			${buttonBackGlobalTypoSwitcher?.lineHeight === true && buttonBackGlobalTypographyData?.lineHeight ? `line-height: ${buttonBackGlobalTypographyData?.lineHeight};` : ''}

			${buttonBackGlobalTypoSwitcher?.fontFamily === false && buttonBackFontFamily && buttonBackFontFamily !== "Default" ? `font-family: ${buttonBackFontFamily}` : ""};
			${buttonBackGlobalTypoSwitcher?.fontSize === false && buttonBackFontSize?.Desktop ? `font-size: ${buttonBackFontSize?.Desktop}${buttonBackFontSizeUnits?.Desktop};` : ''}
			${buttonBackGlobalTypoSwitcher?.fontWeight === false && buttonBackFontWeight ? `font-weight: ${buttonBackFontWeight}` : ""};
			${buttonBackGlobalTypoSwitcher?.fontStyle === false && buttonBackFontStyle ? `font-style: ${buttonBackFontStyle}` : ""};
			${buttonBackGlobalTypoSwitcher?.textTransform === false && buttonBackTextTransform ? `text-transform: ${buttonBackTextTransform}` : ""};
			${buttonBackGlobalTypoSwitcher?.textDecoration === false && buttonBackTextDecoration ? `text-decoration: ${buttonBackTextDecoration}` : ""};
			${buttonBackGlobalTypoSwitcher?.letterSpacing === false && buttonBackLetterSpacing?.Desktop ? `letter-spacing: ${buttonBackLetterSpacing?.Desktop}${buttonBackLetterSpacingUnits?.Desktop};` : ''}
			${buttonBackGlobalTypoSwitcher?.lineHeight === false && buttonBackLineHeight?.Desktop ? `line-height: ${buttonBackLineHeight?.Desktop}${buttonBackLineHeightUnits?.Desktop};` : ''}
			
			${buttonBackDesktopPaddingValue && flipButtonBackDesktopPadding?.top ? `padding: ${buttonBackDesktopPaddingValue};` : ''}	
			${buttonBackDesktopMarginValue && flipButtonBackDesktopMargin?.top ? `margin: ${buttonBackDesktopMarginValue};` : ''}
			${flipButtonBackBorder ? `border-style: ${flipButtonBackBorder};` : ''}
			${buttonBackDesktopBorderValue && flipButtonBackDesktopBorderWidth?.top ? `border-width: ${buttonBackDesktopBorderValue};` : ''}
			${flipButtonBackBorderColor ? `border-color: ${flipButtonBackBorderColor};` : ''}
			${buttonBackDesktopBorderRadiusValue && flipBtnBackDesktopBorderradiusWidth?.top ? `border-radius: ${buttonBackDesktopBorderRadiusValue};` : ''}
			${btnBackIconGap?.Desktop && btnBackIconGapUnits?.Desktop ? `gap: ${btnBackIconGap?.Desktop}${btnBackIconGapUnits?.Desktop};` : ''}
			transition: all .3s ease-in-out;
		}
		.fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper:hover{
			${buttonBackTextHoverColor ? `color: ${buttonBackTextHoverColor};` : ""}
			${buttonBackBgHoverColor ? `background-color: ${buttonBackBgHoverColor};` : ""}
			${flipButtonBackHoverBorderColor ? `border-color: ${flipButtonBackHoverBorderColor};` : ''}
		}
		@media only screen and (max-width: 1024px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper {
				${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
				${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
				${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
				${buttonTabPaddingValue && flipButtonTabPadding?.top ? `padding: ${buttonTabPaddingValue};` : ''}
				${buttonTabMarginValue && flipButtonTabMargin?.top ? `margin: ${buttonTabMarginValue};` : ''}
				${buttonTabBorderValue && flipButtonTabBorderWidth?.top ? `border-width: ${buttonTabBorderValue};` : ''}
				${buttonTabBorderRadiusValue && flipBtnTabBorderradiusWidth?.top ? `border-radius: ${buttonTabBorderRadiusValue};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-btn-wrapper {
				${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
				${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
				${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
				${buttonMobilePaddingValue && flipButtonMobilePadding?.top ? `padding: ${buttonMobilePaddingValue};` : ''}
				${buttonMobileMarginValue && flipButtonMobileMargin?.top ? `margin: ${buttonMobileMarginValue};` : ''}
				${buttonMobileBorderValue && flipButtonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderValue};` : ''}
				${buttonMobileBorderRadiusValue && flipBtnMobileBorderradiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusValue};` : ''}
			}
		}
		.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper {
			${mediaBackgroundType === "gradient" ? `
			background: ${mediaCustomGradientSwitcher && mediaCustomGradientInputValue ? mediaCustomGradientInputValue : mediaGradientColor};
			`
				: mediaBackgroundImageUrl && mediaBackgroundImageUrl !== "null" ? `
			${mediaBackgroundImageUrl ? `background-image: url(${mediaBackgroundImageUrl});` : ""}
			${mediaBackgroundImagePosition ? `background-position: ${mediaBackgroundImagePosition};` : ""}
			${mediaBackgroundImageAttachment ? `background-attachment: ${mediaBackgroundImageAttachment};` : ""}
			${mediaBackgroundImageRepeat ? `background-repeat: ${mediaBackgroundImageRepeat};` : ""}
			${mediaBackgroundImageSize ? `background-size: ${mediaBackgroundImageSize};` : ""}`
					: mediaClassicColor ? `background: ${mediaClassicColor}; ` : ""
			}
			${mediaBgWidth?.Desktop ? `width: ${mediaBgWidth?.Desktop}${mediaBgWidthUnits?.Desktop};` : ''}
			${mediaBgHeight?.Desktop ? `height: ${mediaBgHeight?.Desktop}${mediaBgHeightUnits?.Desktop};` : ''}
			${mediaDesktopPadding && mediaPaddingDesktop?.top ? `padding: ${mediaDesktopPadding};` : ''}
			${mediaDesktopMargin && mediaMarginDesktop?.top ? `margin: ${mediaDesktopMargin};` : ''}
			${mediaBorder ? `border-style: ${mediaBorder};` : ''}
			${mediaBorderDesktopWidth && mediaBorderDesktop?.top ? `border-width: ${mediaBorderDesktopWidth};` : ''}
			${mediaBorderColor ? `border-color: ${mediaBorderColor};` : ''}
			${mediaBorderRadiusDesktop && mediaBorderRadiusDesktop?.top ? `border-radius: ${mediaBorderRadiusDesktopWidth};` : ''}
			background-repeat: none;
			background-size: cover;
			${mediaClassicColor ? `justify-content: center; ` : ''}
			transition: all .3s ease-in-out;
		}
		
		.fb-flip-box-wrapper.${blockID}:hover .fb-flip-media-wrapper {
			${mediaHoverBackgroundType === "gradient" ? ` background: ${mediaHoverCustomGradientSwitcher && mediaHoverCustomGradientInputValue ? mediaHoverCustomGradientInputValue : mediaHoverGradientColor
				};
			`: mediaHoverBackgroundImageUrl && mediaHoverBackgroundImageUrl !== "null" ? `
			${mediaHoverBackgroundImageUrl ? `background-image: url(${mediaHoverBackgroundImageUrl});` : ""}
			${mediaHoverBackgroundImagePosition ? `background-position: ${mediaHoverBackgroundImagePosition};` : ""}
			${mediaHoverBackgroundImageAttachment ? `background-attachment: ${mediaHoverBackgroundImageAttachment};` : ""}
			${mediaHoverBackgroundImageRepeat ? `background-repeat: ${mediaHoverBackgroundImageRepeat};` : ""}
			${mediaHoverBackgroundImageSize ? `background-size: ${mediaHoverBackgroundImageSize};` : ""} `
				: mediaHoverClassicColor ? `background: ${mediaHoverClassicColor}; ` : ""
			}
			${mediaBorderHoverColor ? `border-color: ${mediaBorderHoverColor};` : ''}
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper {
			${mediaBackBackgroundType === "gradient" ? `
			background: ${mediaBackCustomGradientSwitcher && mediaBackCustomGradientInputValue ? mediaBackCustomGradientInputValue : mediaBackGradientColor};
			`
				: mediaBackBackgroundImageUrl && mediaBackBackgroundImageUrl !== "null" ? `
			${mediaBackBackgroundImageUrl ? `background-image: url(${mediaBackBackgroundImageUrl});` : ""}
			${mediaBackBackgroundImagePosition ? `background-position: ${mediaBackBackgroundImagePosition};` : ""}
			${mediaBackBackgroundImageAttachment ? `background-attachment: ${mediaBackBackgroundImageAttachment};` : ""}
			${mediaBackBackgroundImageRepeat ? `background-repeat: ${mediaBackBackgroundImageRepeat};` : ""}
			${mediaBackBackgroundImageSize ? `background-size: ${mediaBackBackgroundImageSize};` : ""}`
					: mediaBackClassicColor ? `background: ${mediaBackClassicColor}; ` : ""
			}
			${mediaBackBgWidth?.Desktop ? `width: ${mediaBackBgWidth?.Desktop}${mediaBackBgWidthUnits?.Desktop};` : ''}
			${mediaBackBgHeight?.Desktop ? `height: ${mediaBackBgHeight?.Desktop}${mediaBackBgHeightUnits?.Desktop};` : ''}
			${mediaBackDesktopPadding && mediaBackPaddingDesktop?.top ? `padding: ${mediaBackDesktopPadding};` : ''}
			${mediaBackDesktopMargin && mediaBackMarginDesktop?.top ? `margin: ${mediaBackDesktopMargin};` : ''}
			${mediaBackBorder ? `border-style: ${mediaBackBorder};` : ''}
			${mediaBackBorderDesktopWidth && mediaBackBorderDesktop?.top ? `border-width: ${mediaBackBorderDesktopWidth};` : ''}
			${mediaBackBorderColor ? `border-color: ${mediaBackBorderColor};` : ''}
			${mediaBackBorderRadiusDesktop && mediaBackBorderRadiusDesktop?.top ? `border-radius: ${mediaBackBorderRadiusDesktopWidth};` : ''}
			background-repeat: none;
			background-size: cover;
			${mediaBackClassicColor ? `justify-content: center; ` : ''}
			transition: all .3s ease-in-out;
		}
		
		.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper:hover{
			${mediaBackHoverBackgroundType === "gradient" ? ` background: ${mediaBackHoverCustomGradientSwitcher && mediaBackHoverCustomGradientInputValue ? mediaBackHoverCustomGradientInputValue : mediaBackHoverGradientColor
				};
			`: mediaBackHoverBackgroundImageUrl && mediaBackHoverBackgroundImageUrl !== "null" ? `
			${mediaBackHoverBackgroundImageUrl ? `background-image: url(${mediaBackHoverBackgroundImageUrl});` : ""}
			${mediaBackHoverBackgroundImagePosition ? `background-position: ${mediaBackHoverBackgroundImagePosition};` : ""}
			${mediaBackHoverBackgroundImageAttachment ? `background-attachment: ${mediaBackHoverBackgroundImageAttachment};` : ""}
			${mediaBackHoverBackgroundImageRepeat ? `background-repeat: ${mediaBackHoverBackgroundImageRepeat};` : ""}
			${mediaBackHoverBackgroundImageSize ? `background-size: ${mediaBackHoverBackgroundImageSize};` : ""} `
				: mediaBackHoverClassicColor ? `background: ${mediaBackHoverClassicColor}; ` : ""
			}
			${mediaBackBorderHoverColor ? `border-color: ${mediaBackBorderHoverColor};` : ''}
		}
		@media only screen and (max-width: 1024px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper {
				${mediaTabletPadding && mediaPaddingTablet?.top ? `padding: ${mediaTabletPadding};` : ''}
				${mediaTabletMargin && mediaMarginTablet?.top ? `margin: ${mediaTabletMargin};` : ''}
				${mediaBorderTabletWidth && mediaBorderTablet?.top ? `border-width: ${mediaBorderTabletWidth};` : ''}
				${mediaBorderRadiusTabletWidth && mediaBorderRadiusTablet?.top ? `border-radius: ${mediaBorderRadiusTabletWidth};` : ''}
				${mediaBgWidth?.Tablet ? `width: ${mediaBgWidth?.Tablet}${mediaBgWidthUnits?.Tablet};` : ''}
				${mediaBgHeight?.Tablet ? `height: ${mediaBgHeight?.Tablet}${mediaBgHeightUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper {
				${mediaMobilePadding && mediaPaddingMobile?.top ? `padding: ${mediaMobilePadding};` : ''}
				${mediaMobileMargin && mediaMarginMobile?.top ? `margin: ${mediaMobileMargin};` : ''}
				${mediaBorderMobileWidth && mediaBorderMobile?.top ? `border-width: ${mediaBorderMobileWidth};` : ''}
				${mediaBorderRadiusMobileWidth && mediaBorderRadiusMobile?.top ? `border-radius: ${mediaBorderRadiusMobileWidth};` : ''}
				${mediaBgWidth?.Mobile ? `width: ${mediaBgWidth?.Mobile}${mediaBgWidthUnits?.Mobile};` : ''}
				${mediaBgHeight?.Mobile ? `height: ${mediaBgHeight?.Mobile}${mediaBgHeightUnits?.Mobile};` : ''}
			}
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper svg,
		.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
			${mediaSize?.Desktop ? `width: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
			${mediaSize?.Desktop ? `height: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
			${mediaIconColor ? `fill: ${mediaIconColor};` : ""}
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper:hover svg {
			${mediaIconHoverColor ? `fill: ${mediaIconHoverColor};` : "#ffffff"}
			transition: all .3s ease-in-out;
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper svg,
		.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper img {
			${mediaBackSize?.Desktop ? `width: ${mediaBackSize?.Desktop}${mediaBackSizeUnits?.Desktop};` : ''}
			${mediaBackSize?.Desktop ? `height: ${mediaBackSize?.Desktop}${mediaBackSizeUnits?.Desktop};` : ''}
			${mediaBackIconColor ? `fill: ${mediaBackIconColor};` : ""}
		}
		.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper:hover svg{
			${mediaBackIconHoverColor ? `fill: ${mediaBackIconHoverColor};` : ""}
		}
		@media only screen and (max-width: 1024px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper svg,
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
				${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
				${mediaSize?.Tablet ? `height: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
			}

			.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper svg,
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
				${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
				${mediaSize?.Tablet ? `height: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper .fb-icon-wrapper svg,
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
				${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
				${mediaSize?.Mobile ? `height: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
			}

			.fb-flip-box-wrapper.${blockID} .fb-flip-back-media-wrapper .fb-icon-wrapper svg,
			.fb-flip-box-wrapper.${blockID} .fb-flip-media-wrapper img {
				${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
				${mediaSize?.Mobile ? `height: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
			}
		}

		.fb-flip-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
			${btnIconSize?.Desktop ? `width: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ''}
			${btnIconColor ? `fill: ${btnIconColor};` : "#ffffff"}
			transform: rotate(${buttonIconRotate?.Desktop}deg);
			transition: all .3s ease-in-out;
		}

		.fb-flip-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg {
			${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : "#ffffff"}
			transform: rotate(${buttonIconRotateHover?.Desktop}deg);
		}

		@media only screen and (max-width: 1024px) {
			.fb-flip-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
				${btnIconSize?.Tablet ? `width: ${btnIconSize?.Tablet}${btnIconSizeUnits?.Tablet};` : ''}
				transform: rotate(${buttonIconRotate?.Tablet}deg);
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-flip-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
				${btnIconSize?.Mobile ? `width: ${btnIconSize?.Mobile}${btnIconSizeUnits?.Mobile};` : ''}
				transform: rotate(${buttonIconRotate?.Mobile}deg);
			}
		}
		.fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper .fb-btn-icon-wrapper svg{
			${btnBackIconSize?.Desktop ? `width: ${btnBackIconSize?.Desktop}${btnBackIconSizeUnits?.Desktop};` : ''}
			${btnBackIconColor ? `fill: ${btnBackIconColor};` : "#ffffff"}
			transition: all .3s ease-in-out;
			transform: rotate(${buttonBackIconRotate?.Desktop}deg);
		}

		.fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper:hover .fb-btn-icon-wrapper svg{
			${btnBackIconHoverColor ? `fill: ${btnBackIconHoverColor};` : "#ffffff"}
			transform: rotate(${buttonBackIconRotateHover?.Desktop}deg);
		}
		@media only screen and (max-width: 1024px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper .fb-btn-icon-wrapper svg{
				${btnBackIconSize?.Tablet ? `width: ${btnBackIconSize?.Tablet}${btnBackIconSizeUnits?.Tablet};` : ''}
				transform: rotate(${buttonBackIconRotate?.Tablet}deg);
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-flip-box-wrapper.${blockID} .fb-flip-back-btn-wrapper .fb-btn-icon-wrapper svg{
				${btnBackIconSize?.Mobile ? `width: ${btnBackIconSize?.Mobile}${btnBackIconSizeUnits?.Mobile};` : ''}
				transform: rotate(${buttonBackIconRotate?.Mobile}deg);
			}
		}
		`,
		[
			blockID,
			Heading_Background_Color,
			Alignment,
			headingGlobalTypoSwitcher,
			headingGlobalTypographyData,
			headingGlobalTypoType,
			headingFontFamily,
			headingFontSize,
			headingFontSizeUnits,
			headingFontWeight,
			headingFontStyle,
			headingTextTransform,
			headingTextDecoration,
			headingLetterSpacing,
			headingLetterSpacingUnits,
			headingLineHeight,
			headingLineHeightUnits,
			Heading_Color,
			Heading_Hover_Color,
			Heading_Border,
			Heading_Border_Color,
			Heading_Border_Hover_Color,
			Heading_Border_units,
			Heading_Border_radius_units,
			Heading_Desktop_Border_Width,
			Heading_Tab_Border_Width,
			Heading_Mobile_Border_Width,
			Heading_Desktop_Border_radius_Width,
			Heading_Tab_Border_radius_Width,
			Heading_Mobile_Border_radius_Width,
			activeBorderRadiusDevice,
			Heading_padding_units,
			Heading_Desktop_padding,
			Heading_Tab_padding,
			Heading_Mobile_padding,
			deviceType,

			Heading_Margin_Units,
			Heading_Desktop_Margin,
			Heading_Tab_Margin,
			Heading_Mobile_Margin,

			flip_Button_Text,
			mediaAlignmentFront,
			mediaAlignmentBack,
			descAlignment,
			descAlignmentBack,
			buttonAlignment,
			buttonAlignmentBack,
			flipBoxBg,

			SubHeadingPaddingUnits,
			SubHeadingDesktopPadding,
			SubHeadingTabPadding,
			SubHeadingMobilePadding,
			subHeadingGlobalTypoSwitcher,
			subHeadingGlobalTypographyData,
			subHeadingGlobalTypoType,
			subHeadingFontFamily,
			subHeadingFontSize,
			subHeadingFontSizeUnits,
			subHeadingFontWeight,
			subHeadingFontStyle,
			subHeadingTextTransform,
			subHeadingTextDecoration,
			subHeadingLetterSpacing,
			subHeadingLetterSpacingUnits,
			subHeadingLineHeight,
			subHeadingLineHeightUnits,
			SubHeadingColor,
			SubHeadingHoverColor,

			descMarginUnits,
			descDesktopMargin,
			descTabMargin,
			descMobileMargin,
			descActiveMarginDevice,
			flipAnimationType,
			flipBoxPaddingUnits,
			flipBoxDesktopPadding,
			flipBoxTabPadding,
			flipBoxMobilePadding,
			flipBoxBorderUnits,
			flipBoxDesktopBorderWidth,
			flipBoxTabBorderWidth,
			flipBoxMobileBorderWidth,

			flipBoxBorderRadiusUnits,
			flipBoxDesktopBorderRadiusWidth,
			flipBoxTabBorderRadiusWidth,
			flipBoxMobileBorderRadiusWidth,

			buttonGlobalTypoSwitcher,
			buttonGlobalTypographyData,
			buttonGlobalTypoType,
			buttonFontFamily,
			buttonFontSize,
			buttonFontSizeUnits,
			buttonFontWeight,
			buttonFontStyle,
			buttonTextTransform,
			buttonTextDecoration,
			buttonLetterSpacing,
			buttonLetterSpacingUnits,
			buttonLineHeight,
			buttonLineHeightUnits,
			buttonColorSwitcher,
			buttonTextColor,
			buttonTextHoverColor,
			buttonBgColor,
			buttonBgHoverColor,
			buttonBorderRadiusWidth,

			flipButtonMarginUnits,
			flipButtonDesktopMargin,
			flipButtonTabMargin,
			flipButtonMobileMargin,
			flipButtonActiveMarginDevice,

			flipButtonPaddingUnits,
			flipButtonDesktopPadding,
			flipButtonTabPadding,
			flipButtonMobilePadding,
			icon,
			btnIcon,
			width,
			contentAlignment,

			flipButtonBorder,
			flipBoxMarginUnits,
			flipBoxDesktopMargin,
			flipBoxTabMargin,
			flipBoxMobileMargin,
			flipButtonBorderUnits,
			flipButtonDesktopBorderWidth,
			flipButtonTabBorderWidth,
			flipButtonMobileBorderWidth,
			flipBtnBorderradiusUnits,
			flipBtnDesktopBorderradiusWidth,
			flipBtnTabBorderradiusWidth,
			flipBtnMobileBorderradiusWidth,
			flipButtonBorderColor,
			flipButtonHoverBorderColor,
			boxBgColor,
			boxBgHoverColor,
			mediaSize,
			mediaSizeUnits,
			globalZIndex,
			flipBoxOverflow,
			globalPaddingUnits,
			globalPaddingDesktop,
			globalPaddingTablet,
			globalPaddingMobile,

			globalMarginUnits,
			globalMarginDesktop,
			globalMarginTablet,
			globalMarginMobile,

			globalBgColorSwitcher,
			globalBgColor,
			globalBgHoverColor,

			globalBorder,
			globalBorderColor,
			globalBorderHoverColor,
			globalBorderUnits,
			globalBorderDesktop,
			globalBorderTablet,
			globalBorderMobile,

			globalBorderRadiusUnits,
			globalBorderRadiusDesktop,
			globalBorderRadiusTablet,
			globalBorderRadiusMobile,

			mediaBgWidth,
			mediaBgWidthUnits,
			mediaBgHeight,
			mediaBgHeightUnits,

			mediaPaddingUnits,
			mediaPaddingDesktop,
			mediaPaddingTablet,
			mediaPaddingMobile,

			mediaMarginUnits,
			mediaMarginDesktop,
			mediaMarginTablet,
			mediaMarginMobile,

			mediaBgColor,
			mediaBgHoverColor,

			mediaBorder,
			mediaBorderColor,
			mediaBorderHoverColor,
			mediaBorderUnits,
			mediaBorderDesktop,
			mediaBorderTablet,
			mediaBorderMobile,

			mediaBorderRadiusUnits,
			mediaBorderRadiusDesktop,
			mediaBorderRadiusTablet,
			mediaBorderRadiusMobile,

			btnIconSize,
			btnIconSizeUnits,
			btnIconColor,
			btnIconHoverColor,
			btnIconPosition,
			flipIconPosition,

			mediaIconColor,
			mediaIconHoverColor,
			boxGlobalBoxShadowSwitcher,
			boxGlobalBoxShadowValues,
			boxGlobalBoxShadowCssValue,
			boxGlobalHoverBoxShadowValues,
			boxGlobalHoverBoxShadowCssValue,
			mediaBgTypeImage,
			bgType,
			flipMediaID,
			flipMediaAlt,
			flipMediaUrl,
			flipBackMediaUrl,
			mediaBackgroundType,
			mediaClassicColor,
			mediaGradientColor,
			mediaCustomGradientInputValue,
			mediaBackgroundColorStyle,
			mediaBackgroundImageUrl,
			mediaBackgroundImageAlt,
			mediaBackgroundImageID,
			mediaBackgroundImagePosition,
			mediaBackgroundImageAttachment,
			mediaBackgroundImageSize,
			mediaBackgroundImageRepeat,
			mediaHoverBackgroundType,
			mediaHoverClassicColor,
			mediaHoverGradientColor,
			mediaHoverCustomGradientInputValue,
			mediaHoverBackgroundColorStyle,
			mediaHoverBackgroundImageUrl,
			mediaHoverBackgroundImageAlt,
			mediaHoverBackgroundImageID,
			mediaHoverBackgroundImagePosition,
			mediaHoverBackgroundImageAttachment,
			mediaHoverBackgroundImageSize,
			mediaHoverBackgroundImageRepeat,
			flipIconVerticalPosition,
			flipCardAlignment,

			// Position
			flipBoxPositionType,
			flipBoxHZOrientationType,
			flipBoxVROrientationType,
			flipBoxHZLeftOffset,
			flipBoxHZLeftOffsetUnits,
			flipBoxHZRightOffset,
			flipBoxHZRightOffsetUnits,
			flipBoxVRTopOffset,
			flipBoxVRTopOffsetUnits,
			flipBoxVRBottomOffset,
			flipBoxVRBottomOffsetUnits,
			// Flip box front
			flipBoxFrontWidth,
			flipBoxFrontWidthUnits,
			flipBoxFrontHeight,
			flipBoxFrontHeightUnits,
			titleAlignmentBack,

			headingBackColor,
			headingBackHoverColor,
			headingBackGlobalTypographyData,
			headingBackGlobalTypoSwitcher,
			headingBackGlobalTypoType,
			headingBackGlobalTypoOption,
			headingBackFontFamily,
			headingBackFontSize,
			headingBackFontSizeUnits,
			headingBackFontWeight,
			headingBackFontStyle,
			headingBackTextTransform,
			headingBackTextDecoration,
			headingBackLetterSpacing,
			headingBackLetterSpacingUnits,
			headingBackLineHeight,
			headingBackLineHeightUnits,

			headingBack_padding_units,
			headingBack_Desktop_padding,
			headingBack_Tab_padding,
			headingBack_Mobile_padding,

			headingBack_Margin_Units,
			headingBack_Desktop_Margin,
			headingBack_Tab_Margin,
			headingBack_Mobile_Margin,
			headingBack_Margin_Link,

			headingBack_Border,
			headingBack_Border_Color_Switcher,
			headingBack_Border_Color,
			headingBack_Border_Hover_Color,

			headingBack_Border_units,
			headingBack_Desktop_Border_Width,
			headingBack_Tab_Border_Width,
			headingBack_Mobile_Border_Width,

			headingBack_Border_radius_units,
			headingBack_Desktop_Border_radius_Width,
			headingBack_Tab_Border_radius_Width,
			headingBack_Mobile_Border_radius_Width,
			subHeadingBackColor,
			subHeadingBackFontFamily,
			subHeadingBackFontSize,
			subHeadingBackFontWeight,
			subHeadingBackFontStyle,
			subHeadingBackTextTransform,
			subHeadingBackTextDecoration,
			subHeadingBackLetterSpacingUnits,
			subHeadingBackLineHeightUnits,
			subHeadingBackDesktopPaddingValue,
			descBackDesktopMarginValue,

			buttonBackGlobalTypographyData,
			buttonBackGlobalTypoSwitcher,
			buttonBackGlobalTypoType,
			buttonBackGlobalTypoOption,
			buttonBackFontFamily,
			buttonBackFontSize,
			buttonBackFontSizeUnits,
			buttonBackFontWeight,
			buttonBackFontStyle,
			buttonBackTextTransform,
			buttonBackTextDecoration,
			buttonBackLetterSpacing,
			buttonBackLetterSpacingUnits,
			buttonBackLineHeight,
			buttonBackLineHeightUnits,
			buttonBackColorSwitcher,
			buttonBackTextColor,
			buttonBackTextHoverColor,
			buttonBackBgColorSwitcher,
			buttonBackBgColor,
			buttonBackBgHoverColor,
			flipButtonBackBorderColor,

			buttonBackDesktopPaddingValue,
			buttonBackTabPaddingValue,
			buttonBackMobilePaddingValue,
			buttonBackDesktopMarginValue,
			buttonBackTabMarginValue,
			buttonBackMobileMarginValue,
			buttonBackDesktopBorderValue,
			buttonBackTabBorderValue,
			buttonBackMobileBorderValue,
			buttonBackDesktopBorderRadiusValue,
			buttonBackTabBorderRadiusValue,
			buttonBackMobileBorderRadiusValue,

			mediaBackBgWidth,
			mediaBackBgHeight,
			mediaBackBgWidthUnits,
			mediaBackBgHeightUnits,

			mediaBackSize,
			mediaBackSizeDesktop,
			mediaBackSizeSizeTablet,
			mediaBackSizeSizeMobile,
			mediaBackSizeUnitsSave,
			mediaBackSizeUnits,
			mediaBackBgTypeImage,
			mediaBackIconColorSwitcher,
			mediaBackIconColor,
			mediaBackIconHoverColor,

			mediaBackDesktopPadding,
			mediaBackTabletPadding,
			mediaBackMobilePadding,
			mediaBackDesktopMargin,
			mediaBackTabletMargin,
			mediaBackMobileMargin,
			mediaBackBorderDesktopWidth,
			mediaBackBorderTabletWidth,
			mediaBackBorderMobileWidth,
			mediaBackBorderRadiusDesktopWidth,
			mediaBackBorderRadiusTabletWidth,
			mediaBackBorderRadiusMobileWidth,
			flipBoxFrontClassicColor,
			flipBoxBackClassicColor,
			flipBoxFrontBorderRadiusDesktop,
			flipBoxFrontBorderColor,
			flipBoxFrontBorderDesktopWidth,
			flipBoxFrontBorder,
			flipBoxFrontDesktopMargin,
			flipBoxFrontDesktopPadding,
			flipBoxBackBorderRadiusDesktop,
			flipBoxBackBorderColor,
			flipBoxBackBorderDesktopWidth,
			flipBoxBackBorder,
			flipBoxBackDesktopMargin,
			flipBoxBackDesktopPadding,
			mediaBackClassicColor,
			mediaBackBackgroundImageUrl,
			mediaBackCustomGradientInputValue,
			btnBackIconColor,
			btnBackIconSize,
			buttonIconRotate,
			buttonBackIconRotate,
			buttonBackIconRotateHover,
			buttonIconRotate,
			buttonIconRotateHover,
			btnIconGap,
			btnBackIconGap,
			headingBackHoverColor,
			headingBack_Border_Hover_Color,
			subHeadingBackHoverColor,
			buttonBackTextHoverColor,
			buttonBackBgHoverColor,
			flipButtonBackHoverBorderColor,
			mediaBorderHoverColor,
			mediaHoverClassicColor,
			mediaBackBorderColor,
			mediaBackBorderHoverColor,
			mediaBackHoverClassicColor,
			mediaBackIconHoverColor,
			btnBackIconHoverColor,
			flipBoxFrontGradientColor,
			flipBoxFrontCustomGradientSwitcher,
			flipBoxFrontCustomGradientInputValue,
			flipBoxFrontHoverClassicColor,
			flipBoxFrontHoverGradientColor,
			flipBoxFrontHoverCustomGradientSwitcher,
			flipBoxFrontHoverCustomGradientInputValue,
			flipBoxFrontHoverBackgroundColorStyle,
			flipBoxFrontHoverBackgroundImageUrl,
			flipBoxFrontHoverBackgroundImageAlt,
			flipBoxFrontHoverBackgroundImageID,
			flipBoxFrontHoverBackgroundImagePosition,
			flipBoxFrontHoverBackgroundImageAttachment,
			flipBoxFrontHoverBackgroundImageSize,
			flipBoxFrontHoverBackgroundImageRepeat,
			flipBoxFrontBackgroundImageUrl,
			flipBoxFrontBackgroundImageAlt,
			flipBoxFrontBackgroundImageID,
			flipBoxFrontBackgroundImagePosition,
			flipBoxFrontBackgroundImageAttachment,
			flipBoxFrontBackgroundImageSize,
			flipBoxFrontBackgroundImageRepeat,
			flipBoxBackGradientColor,
			flipBoxBackCustomGradientSwitcher,
			flipBoxBackCustomGradientInputValue,
			flipBoxBackHoverClassicColor,
			flipBoxBackHoverGradientColor,
			flipBoxBackHoverCustomGradientSwitcher,
			flipBoxBackHoverCustomGradientInputValue,
			flipBoxBackHoverBackgroundColorStyle,
			flipBoxBackHoverBackgroundImageUrl,
			flipBoxBackHoverBackgroundImageAlt,
			flipBoxBackHoverBackgroundImageID,
			flipBoxBackHoverBackgroundImagePosition,
			flipBoxBackHoverBackgroundImageAttachment,
			flipBoxBackHoverBackgroundImageSize,
			flipBoxBackHoverBackgroundImageRepeat,
			flipBoxBackBackgroundImageUrl,
			flipBoxBackBackgroundImageAlt,
			flipBoxBackBackgroundImageID,
			flipBoxBackBackgroundImagePosition,
			flipBoxBackWidth,
			flipBoxBackWidthUnits,
			flipBoxBackHeight,
			flipBoxBackHeightUnits,
			isHover,
			flipSelectedSide,
			flipAnimationType,
			flipBoxFrontGradientColor,
			flipBoxFrontCustomGradientInputValue,
			flipBoxBackGradientColor,
			flipBoxBackCustomGradientInputValue,
			flipBoxAlignment
		],
	);

	const customCss = getCustomCss(flipBoxGlobalCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${fbflipBoxStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
		});
	}, [fbflipBoxStyle, customCss]);

	const editorStyle = `${fbflipBoxStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

		/**
     * Generate SVG Icons for Icon
     */
		useEffect(() => {
			setAttributes({
				frontendIcon: generateSvgIcon(icon),
				frontendBtnIcon: generateSvgIcon(btnIcon), 
			})
		}, [icon, btnIcon]);
	
	// Check if Pro is active
	const getProActiveState = getProActive();
	useEffect(() => {
		if (!getProActiveState) { 
			setAttributes({
				dynamicTitleEnabled: false,
				dynamicDescriptionEnabled: false,
				dynamicBtnEnabled: false,

				dynamicBackTitleEnabled: false,
				dynamicBackTitleEnableLink: false,
				dynamicBackDescriptionEnabled: false,
				dynamicBackDescriptionEnableLink: false,
				dynamicBackBtnEnabled: false,
				dynamicBackBtnEnableLink: false,
			});
		}
	}, [getProActiveState]);

	/**
	 * Toggle Controls for Dynamic Content
	 */
	const dynamicTitleContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-flip-box-dynamic-title-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicTitleEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'flip-box-dynamic-title-content',
		isProActive : getProActiveState
	});

	const dynamicDescriptionContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-flip-box-dynamic-description-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicDescriptionEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'flip-box-dynamic-description-content',
		isProActive : getProActiveState
	});

	const dynamicBtnContentToggleControls = getProToggleControls({ 
		hook: 'frontisblocks-flip-box-dynamic-btn-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBtnEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'flip-box-dynamic-btn-content',
		isProActive : getProActiveState
	});

	const dynamicBackTitleContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-flip-box-dynamic-back-title-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBackTitleEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'flip-box-dynamic-back-title-content',
		isProActive : getProActiveState
	});

	const dynamicBackDescriptionContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-flip-box-dynamic-back-description-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBackDescriptionEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'flip-box-dynamic-back-description-content',
		isProActive : getProActiveState
	});

	const dynamicBackBtnContentToggleControls = getProToggleControls({ 
		hook: 'frontisblocks-flip-box-dynamic-back-btn-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBackBtnEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'flip-box-dynamic-back-btn-content',
		isProActive : getProActiveState
	});

	return (
		<>
			<style>
				{editorStyle}
			</style>

			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name: "styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advance",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === "general" && (
									<>
										<div className="fb-flip-selection-wrapper">
											<PanelBody
												title={__("Flipbox Settings", "frontis-block")}
												initialOpen={true}
											>
												<BaseControl>
													<ButtonGroup
														className="fb-setting-switcher-panel-btn"
														id="fb-flipbox-sides">
														{SELECTED_SIDE.map(
															(item, index) => (
																<Button
																	className="fb-setting-switcher-panel-btn-switcher"
																	key={index}
																	isPrimary={
																		flipSelectedSide ===
																		item.value
																	}
																	isSecondary={
																		flipSelectedSide !==
																		item.value
																	}
																	onClick={() =>
																		setAttributes({
																			flipSelectedSide:
																				item.value,
																		})
																	}
																>
																	{item.label}
																</Button>
															)
														)}
													</ButtonGroup>
												</BaseControl>
												<BaseControl
													label='Flip Animation'
												>
													<SelectControl
														value={flipAnimationType}
														options={FLIP_ANIMATION}
														onChange={(value) =>
															setAttributes({ flipAnimationType: value })
														}
													/>
												</BaseControl>
												<BaseControl>
													<FB_ResponsiveAlignmentControl
														label={__("Alignment", "frontis-blocks")}
														globalAlignment={flipBoxAlignment}
														setGlobalAlignment={(value) => setAttributes({ flipBoxAlignment: value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
													/>
												</BaseControl>
											</PanelBody>
										</div>
										{flipSelectedSide === 'front' && (
											<div className="fb-flipbox-front-control-wrapper">
												<div className="fb-advanced-wrapper">
													<PanelBody
														title={__("Icon/Image", "frontis-block")}
														initialOpen={false}
													>

														<FB_AlignmentControl
															label={__("Alignment", "frontis-blocks")}
															globalAlignment={mediaAlignmentFront}
															setGlobalAlignment={(value) => setAttributes({ mediaAlignmentFront: value })}
														/>

														<BaseControl className="fb-sub-heading-position">
															<SelectControl
																label={__("Media Type", "frontis-block")}
																value={mediaSwitcher}
																options={mediaType}
																onChange={(value) =>
																	setAttributes({ mediaSwitcher: value })
																}
															/>
														</BaseControl>

														{(flipIconPosition === 'left' || flipIconPosition === 'right') && (
															<BaseControl className="fb-media-vertical-position">
																<SelectControl
																	label={__("Card Alignment", "frontis-block")}
																	value={flipCardAlignment}
																	options={FLIP_WRAP_ALIGNMENT}
																	onChange={(value) =>
																		setAttributes({ flipCardAlignment: value })
																	}
																/>
															</BaseControl>
														)}

														{(flipIconPosition === 'left' || flipIconPosition === 'right') && (
															<BaseControl className="fb-media-vertical-position">
																<SelectControl
																	label={__("Vertical Position", "frontis-block")}
																	value={flipIconVerticalPosition}
																	options={FLIP_ICON_VERTICAL_POSITION}
																	onChange={(value) =>
																		setAttributes({ flipIconVerticalPosition: value })
																	}
																/>
															</BaseControl>
														)}

														<div className="fb-image-upload-field-wrapper">
															{mediaSwitcher === "image" && (
																<>
																	<BaseControl
																		label={__("Background Image", "frontis-blocks")}
																		className="fb-advanced-heading-bg-image"
																	>
																		{flipMediaUrl ? (
																			<div
																				className="fb-image-avatar-control"
																				style={{
																					backgroundImage: `url(${flipMediaUrl})`,
																				}}
																			>
																				<button
																					className="fb-image-avatar-delete"
																					onClick={() => {
																						setAttributes({
																							flipMediaUrl: null,
																							flipMediaAlt: null,
																							flipMediaID: null,
																						});
																					}}
																				>
																					<svg
																						width="24"
																						height="24"
																						viewBox="0 0 24 24"
																						fill="none"
																						xmlns="http://www.w3.org/2000/svg"
																					>
																						<path
																							d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
																							stroke="#4D4D4D"
																							strokeWidth="1.5"
																							strokeLinecap="round"
																						></path>
																						<path
																							d="M15 9L9 15"
																							stroke="#4D4D4D"
																							strokeWidth="1.5"
																							strokeLinecap="round"
																						></path>
																						<path
																							d="M9 9L15 15"
																							stroke="#4D4D4D"
																							strokeWidth="1.5"
																							strokeLinecap="round"
																						></path>
																					</svg>
																				</button>
																				<button
																					className="fb-image-replace-btn"
																					onClick={() => {
																						const mediaUploader = wp.media({
																							title: __(
																								"Select or Upload Background Image",
																								"frontis-blocks",
																							),
																							button: {
																								text: __(
																									"Use this image",
																									"frontis-blocks",
																								),
																							},
																							multiple: false,
																						});

																						mediaUploader.on("select", function () {
																							const attachment = mediaUploader
																								.state()
																								.get("selection")
																								.first()
																								.toJSON();
																							setAttributes({
																								flipMediaUrl: attachment.url,
																								flipMediaAlt: attachment.alt,
																								flipMediaID: attachment.id,
																							});
																						});

																						mediaUploader.open();
																					}}
																				>
																					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C"></path><path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C"></path></svg>
																					Replace
																				</button>
																			</div>
																		) : (
																			<button
																				className="fb-image-upload-btn"
																				onClick={() => {
																					const mediaUploader = wp.media({
																						title: __(
																							"Select or Upload Background Image",
																							"frontis-blocks",
																						),
																						button: {
																							text: __(
																								"Use this image",
																								"frontis-blocks",
																							),
																						},
																						multiple: false,
																					});

																					mediaUploader.on("select", function () {
																						const attachment = mediaUploader
																							.state()
																							.get("selection")
																							.first()
																							.toJSON();
																						setAttributes({
																							flipMediaUrl: attachment.url,
																							flipMediaAlt: attachment.alt,
																							flipMediaID: attachment.id,
																						});
																					});

																					mediaUploader.open();
																				}}
																			>
																				<svg
																					width="24"
																					height="24"
																					xmlns="http://www.w3.org/2000/svg"
																					fillRule="evenodd"
																					clipRule="evenodd"
																				>
																					<path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path>
																				</svg>
																				Upload
																			</button>
																		)}
																	</BaseControl>
																</>
															)}

															{mediaSwitcher === "icon" && (
																<BaseControl>
																	<FBIconPicker
																		value={icon}
																		setIconHandler={iconHandler}
																	/>
																</BaseControl>
															)}
														</div>
													</PanelBody>
												</div>
												<div className="fb-advanced-wrapper">
													<PanelBody
														title={__("Title", "frontis-block")}
														initialOpen={false}
													>
														<ToggleControl
															label={__("Show Title", "frontis-block")}
															checked={titleSwitcher}
															onChange={(value) =>
																setAttributes({ titleSwitcher: value })
															}
														/>
														{titleSwitcher && (

															<>	
																<FB_AlignmentControl
																	label={__("Heading Alignment", "frontis-blocks")}
																	globalAlignment={Alignment}
																	setGlobalAlignment={(value) => setAttributes({ Alignment: value })}
																/>

																<FB_HtmlTagControl
																	label={__("Heading Tag", "frontis-blocks")}
																	globalHtmlTag={headingTag}
																	setGlobalHtmlTag={(value) => setAttributes({ headingTag: value })}
																/>

																{dynamicTitleContentToggleControls.map((control, index) => (
																	<div key={control.key || index}>{control.comp}</div>
																))}
												
																<DynamicDataSourceControl
																	enabled={dynamicTitleEnabled}
																	
																	source={dynamicTitleSource}
																	setSource={(value) => setAttributes({ dynamicTitleSource: value })}
																	postId={dynamicTitlePostId}
																	setPostId={(value) => setAttributes({ dynamicTitlePostId: value })}
																	postType={dynamicTitlePostType}
																	setPostType={(value) => setAttributes({ dynamicTitlePostType: value })}
																	postLabel={dynamicTitlePostLabel}
																	setPostLabel={(value) => setAttributes({ dynamicTitlePostLabel: value })}

																	field={dynamicTitleField}
																	setField={(value) => setAttributes({ dynamicTitleField: value })}
																	featuredImageField={dynamicTitleFeaturedImageField}
																	setFeaturedImageField={(value) => setAttributes({ dynamicTitleFeaturedImageField: value })}

																	dateType={dynamicTitleDateType}
																	setDateType={(value) => setAttributes({ dynamicTitleDateType: value })}
																	dateFormat={dynamicTitleDateFormat}
																	setDateFormat={(value) => setAttributes({ dynamicTitleDateFormat: value })}
																	timeType={dynamicTitleTimeType}
																	setTimeType={(value) => setAttributes({ dynamicTitleTimeType: value })}
																	timeFormat={dynamicTitleTimeFormat}
																	setTimeFormat={(value) => setAttributes({ dynamicTitleTimeFormat: value })}

																	commentsZeroText={dynamicTitleCommentsZeroText}
																	setCommentsZeroText={(value) => setAttributes({ dynamicTitleCommentsZeroText: value })}
																	commentsOneText={dynamicTitleCommentsOneText}
																	setCommentsOneText={(value) =>setAttributes({ dynamicTitleCommentsOneText: value })}
																	commentsManyText={dynamicTitleCommentsManyText}
																	setCommentsManyText={(value) =>setAttributes({ dynamicTitleCommentsManyText: value })}

																	termsTaxonomy={dynamicTitleTermsTaxonomy}
																	setTermsTaxonomy={(value) => setAttributes({ dynamicTitleTermsTaxonomy: value })}
																	termsSeparator={dynamicTitleTermsSeparator}
																	setTermsSeparator={(value) => setAttributes({ dynamicTitleTermsSeparator: value })}
																/>
																{!dynamicTitleEnabled && (
																	<TextareaControl
																		label={__("Heading Text", "frontis-block")}
																		value={Heading_Text}
																		onChange={(value) =>
																			setAttributes({ Heading_Text: value })
																		}
																		className="fb-setting-text"
																	/>
																)}
															</>
														)}
														
													</PanelBody>
												</div>
												<div className="fb-advanced-wrapper">
													<PanelBody
														title={__("Description", "frontis-block")}
														initialOpen={false}
													>
														<ToggleControl
															label={__("Show Description", "frontis-block")}
															checked={descSwitcher}
															onChange={(value) =>
																setAttributes({ descSwitcher: value })
															}
														/>

														{descSwitcher && (
															<>
																<FB_AlignmentControl
																	label={__("Alignment", "frontis-blocks")}
																	globalAlignment={descAlignment}
																	setGlobalAlignment={(value) => setAttributes({ descAlignment: value })}
																/>

																{dynamicDescriptionContentToggleControls.map((control, index) => (
																	<div key={control.key || index}>{control.comp}</div>
																))}

																<DynamicDataSourceControl
																	enabled={dynamicDescriptionEnabled}
																	
																	source={dynamicDescriptionSource}
																	setSource={(value) => setAttributes({ dynamicDescriptionSource: value })}
																	postId={dynamicDescriptionPostId}
																	setPostId={(value) => setAttributes({ dynamicDescriptionPostId: value })}
																	postType={dynamicDescriptionPostType}
																	setPostType={(value) => setAttributes({ dynamicDescriptionPostType: value })}
																	postLabel={dynamicDescriptionPostLabel}
																	setPostLabel={(value) => setAttributes({ dynamicDescriptionPostLabel: value })}

																	field={dynamicDescriptionField}
																	setField={(value) => setAttributes({ dynamicDescriptionField: value })}
																	featuredImageField={dynamicDescriptionFeaturedImageField}
																	setFeaturedImageField={(value) => setAttributes({ dynamicDescriptionFeaturedImageField: value })}

																	dateType={dynamicDescriptionDateType}
																	setDateType={(value) => setAttributes({ dynamicDescriptionDateType: value })}
																	dateFormat={dynamicDescriptionDateFormat}
																	setDateFormat={(value) => setAttributes({ dynamicDescriptionDateFormat: value })}
																	timeType={dynamicDescriptionTimeType}
																	setTimeType={(value) => setAttributes({ dynamicDescriptionTimeType: value })}
																	timeFormat={dynamicDescriptionTimeFormat}
																	setTimeFormat={(value) => setAttributes({ dynamicDescriptionTimeFormat: value })}

																	commentsZeroText={dynamicDescriptionCommentsZeroText}
																	setCommentsZeroText={(value) => setAttributes({ dynamicDescriptionCommentsZeroText: value })}
																	commentsOneText={dynamicDescriptionCommentsOneText}
																	setCommentsOneText={(value) =>setAttributes({ dynamicDescriptionCommentsOneText: value })}
																	commentsManyText={dynamicDescriptionCommentsManyText}
																	setCommentsManyText={(value) =>setAttributes({ dynamicDescriptionCommentsManyText: value })}

																	termsTaxonomy={dynamicDescriptionTermsTaxonomy}
																	setTermsTaxonomy={(value) => setAttributes({ dynamicDescriptionTermsTaxonomy: value })}
																	termsSeparator={dynamicDescriptionTermsSeparator}
																	setTermsSeparator={(value) => setAttributes({ dynamicDescriptionTermsSeparator: value })}
																/>
																{!dynamicDescriptionEnabled && (
																	<TextareaControl
																		label={__("Description Text", "frontis-block")}
																		value={Sub_Heading_Text}
																		onChange={(value) =>
																			setAttributes({ Sub_Heading_Text: value })
																		}
																		className="fb-sub-heading-text"
																	/>
																)}
															</>
														)}
													</PanelBody>
												</div>

												{/*Button Element*/}
												<div className="fb-flip-button-wrapper">
													<PanelBody
														title={__("Button", "frontis-block")}
														initialOpen={false}
													>
														<ToggleControl
															label={__("Show Button", "frontis-block")}
															checked={flip_Button_Switcher}
															onChange={(value) =>
																setAttributes({ flip_Button_Switcher: value })
															}
														/>

														{flip_Button_Switcher && (
															<>

																<FB_AlignmentControl
																	label={__("Alignment", "frontis-blocks")}
																	globalAlignment={buttonAlignment}
																	setGlobalAlignment={(value) => setAttributes({ buttonAlignment: value })}
																/>
																{dynamicBtnContentToggleControls.map((control, index) => (
																	<div key={control.key || index}>{control.comp}</div>
																))}
												
																<DynamicDataSourceControl
																	enabled={dynamicBtnEnabled}
																	
																	source={dynamicBtnSource}
																	setSource={(value) => setAttributes({ dynamicBtnSource: value })}
																	postId={dynamicBtnPostId}
																	setPostId={(value) => setAttributes({ dynamicBtnPostId: value })}
																	postType={dynamicBtnPostType}
																	setPostType={(value) => setAttributes({ dynamicBtnPostType: value })}
																	postLabel={dynamicBtnPostLabel}
																	setPostLabel={(value) => setAttributes({ dynamicBtnPostLabel: value })}

																	field={dynamicBtnField}
																	setField={(value) => setAttributes({ dynamicBtnField: value })}
																	featuredImageField={dynamicBtnFeaturedImageField}
																	setFeaturedImageField={(value) => setAttributes({ dynamicBtnFeaturedImageField: value })}

																	dateType={dynamicBtnDateType}
																	setDateType={(value) => setAttributes({ dynamicBtnDateType: value })}
																	dateFormat={dynamicBtnDateFormat}
																	setDateFormat={(value) => setAttributes({ dynamicBtnDateFormat: value })}
																	timeType={dynamicBtnTimeType}
																	setTimeType={(value) => setAttributes({ dynamicBtnTimeType: value })}
																	timeFormat={dynamicBtnTimeFormat}
																	setTimeFormat={(value) => setAttributes({ dynamicBtnTimeFormat: value })}

																	commentsZeroText={dynamicBtnCommentsZeroText}
																	setCommentsZeroText={(value) => setAttributes({ dynamicBtnCommentsZeroText: value })}
																	commentsOneText={dynamicBtnCommentsOneText}
																	setCommentsOneText={(value) =>setAttributes({ dynamicBtnCommentsOneText: value })} 
																	commentsManyText={dynamicBtnCommentsManyText}
																	setCommentsManyText={(value) =>setAttributes({ dynamicBtnCommentsManyText: value })}

																	termsTaxonomy={dynamicBtnTermsTaxonomy}
																	setTermsTaxonomy={(value) => setAttributes({ dynamicBtnTermsTaxonomy: value })}
																	termsSeparator={dynamicBtnTermsSeparator}
																	setTermsSeparator={(value) => setAttributes({ dynamicBtnTermsSeparator: value })}
																/>
																{!dynamicBtnEnabled && (
																	<TextareaControl
																		label={__("Button Text", "frontis-block")}
																		value={flip_Button_Text}
																		onChange={(value) =>
																			setAttributes({ flip_Button_Text: value })
																		}
																		className="fb-flip-button-text"
																	/>
																)}
																<ToggleControl
																	label={__("Show Icon", "frontis-block")}
																	checked={buttonIconSwitcher}
																	onChange={(value) =>
																		setAttributes({ buttonIconSwitcher: value })
																	}
																/>
																{buttonIconSwitcher && (
																	<>
																		<BaseControl>
																			<FBIconPicker
																				value={btnIcon}
																				setIconHandler={buttonIconHandler}
																			/>
																		</BaseControl>
																		<SelectControl
																			label={__("Icon Position", "frontis-block")}
																			value={btnIconPosition}
																			options={ICON_POSITION}
																			onChange={(value) =>
																				setAttributes({ btnIconPosition: value })
																			}
																		/>
																	</>
																)}
																<BaseControl>
																	<FB_UrlControl
																		url={flipButtonLink}
																		onChangeUrl={(value) =>
																			setAttributes({ flipButtonLink: value })
																		}
																		openInNewTab={flipbtnTargetUrl}
																		onChangeOpenInNewTab={(value) =>
																			setAttributes({ flipbtnTargetUrl: value })
																		}
																	/>
																</BaseControl>
															</>
														)}
													</PanelBody>
												</div>
											</div>
										)}
										{flipSelectedSide === 'back' && (
											<div className="fb-flipbox-back-control-wrapper">
												<div className="fb-advanced-wrapper">
													<PanelBody
														title={__("Icon/Image", "frontis-block")}
														initialOpen={false}
													>

														<FB_AlignmentControl
															label={__("Alignment", "frontis-blocks")}
															globalAlignment={mediaAlignmentBack}
															setGlobalAlignment={(value) => setAttributes({ mediaAlignmentBack: value })}
														/>

														<BaseControl className="fb-sub-heading-position">
															<SelectControl
																label={__("Media Type", "frontis-block")}
																value={mediaSwitcherBack}
																options={mediaType}
																onChange={(value) =>
																	setAttributes({ mediaSwitcherBack: value })
																}
															/>
														</BaseControl>

														{(flipBackIconPosition === 'left' || flipBackIconPosition === 'right') && (
															<BaseControl className="fb-media-vertical-position">
																<SelectControl
																	label={__("Card Alignment", "frontis-block")}
																	value={flipBackCardAlignment}
																	options={FLIP_WRAP_ALIGNMENT}
																	onChange={(value) =>
																		setAttributes({ flipBackCardAlignment: value })
																	}
																/>
															</BaseControl>
														)}

														{(flipBackIconPosition === 'left' || flipBackIconPosition === 'right') && (
															<BaseControl className="fb-media-vertical-position">
																<SelectControl
																	label={__("Vertical Position", "frontis-block")}
																	value={flipBackIconVerticalPosition}
																	options={FLIP_ICON_VERTICAL_POSITION}
																	onChange={(value) =>
																		setAttributes({ flipBackIconVerticalPosition: value })
																	}
																/>
															</BaseControl>
														)}

														<div className="fb-image-upload-field-wrapper">
															{mediaSwitcherBack === "image" && (
																<>
																	<BaseControl
																		label={__("Background Image", "frontis-blocks")}
																		className="fb-advanced-heading-bg-image"
																	>
																		{flipBackMediaUrl ? (
																			<div
																				className="fb-image-avatar-control"
																				style={{
																					backgroundImage: `url(${flipBackMediaUrl})`,
																				}}
																			>
																				<button
																					className="fb-image-avatar-delete"
																					onClick={() => {
																						setAttributes({
																							flipBackMediaUrl: null,
																							flipBackMediaAlt: null,
																							flipBackMediaID: null,
																						});
																					}}
																				>
																					<svg
																						width="24"
																						height="24"
																						viewBox="0 0 24 24"
																						fill="none"
																						xmlns="http://www.w3.org/2000/svg"
																					>
																						<path
																							d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
																							stroke="#4D4D4D"
																							strokeWidth="1.5"
																							strokeLinecap="round"
																						></path>
																						<path
																							d="M15 9L9 15"
																							stroke="#4D4D4D"
																							strokeWidth="1.5"
																							strokeLinecap="round"
																						></path>
																						<path
																							d="M9 9L15 15"
																							stroke="#4D4D4D"
																							strokeWidth="1.5"
																							strokeLinecap="round"
																						></path>
																					</svg>
																				</button>
																				<button
																					className="fb-image-replace-btn"
																					onClick={() => {
																						const mediaUploader = wp.media({
																							title: __(
																								"Select or Upload Background Image",
																								"frontis-blocks",
																							),
																							button: {
																								text: __(
																									"Use this image",
																									"frontis-blocks",
																								),
																							},
																							multiple: false,
																						});

																						mediaUploader.on("select", function () {
																							const attachment = mediaUploader
																								.state()
																								.get("selection")
																								.first()
																								.toJSON();
																							setAttributes({
																								flipBackMediaUrl: attachment.url,
																								flipBackMediaAlt: attachment.alt,
																								flipBackMediaID: attachment.id,
																							});
																						});

																						mediaUploader.open();
																					}}
																				>
																					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C"></path><path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C"></path></svg>
																					Replace
																				</button>
																			</div>
																		) : (
																			<button
																				className="fb-image-upload-btn"
																				onClick={() => {
																					const mediaUploader = wp.media({
																						title: __(
																							"Select or Upload Background Image",
																							"frontis-blocks",
																						),
																						button: {
																							text: __(
																								"Use this image",
																								"frontis-blocks",
																							),
																						},
																						multiple: false,
																					});

																					mediaUploader.on("select", function () {
																						const attachment = mediaUploader
																							.state()
																							.get("selection")
																							.first()
																							.toJSON();
																						setAttributes({
																							flipBackMediaUrl: attachment.url,
																							flipBackMediaAlt: attachment.alt,
																							flipBackMediaID: attachment.id,
																						});
																					});

																					mediaUploader.open();
																				}}
																			>
																				<svg
																					width="24"
																					height="24"
																					xmlns="http://www.w3.org/2000/svg"
																					fillRule="evenodd"
																					clipRule="evenodd"
																				>
																					<path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path>
																				</svg>
																				Upload
																			</button>
																		)}
																	</BaseControl>
																</>
															)}

															{mediaSwitcherBack === "icon" && (
																<BaseControl>
																	<FBIconPicker
																		value={iconBack}
																		setIconHandler={iconHandlerBack}
																	/>
																</BaseControl>
															)}
														</div>
													</PanelBody>
												</div>
												<div className="fb-advanced-wrapper">
													<PanelBody
														title={__("Title", "frontis-block")}
														initialOpen={false}
													>
														<ToggleControl
															label={__("Show Title", "frontis-block")}
															checked={titleSwitcherBack}
															onChange={(value) =>
																setAttributes({ titleSwitcherBack: value })
															}
														/>
														{titleSwitcherBack && (
															<>	
																<FB_AlignmentControl
																	label={__("Heading Alignment", "frontis-blocks")}
																	globalAlignment={titleAlignmentBack}
																	setGlobalAlignment={(value) => setAttributes({ titleAlignmentBack: value })}
																/>

																<FB_HtmlTagControl
																	label={__("Heading Tag", "frontis-blocks")}
																	globalHtmlTag={headingTagBack}
																	setGlobalHtmlTag={(value) => setAttributes({ headingTagBack: value })}
																/>

																{dynamicBackTitleContentToggleControls.map((control, index) => (
																	<div key={control.key || index}>{control.comp}</div>
																))}
												
																<DynamicDataSourceControl
																	enabled={dynamicBackTitleEnabled}
																	
																	source={dynamicBackTitleSource}
																	setSource={(value) => setAttributes({ dynamicBackTitleSource: value })}
																	postId={dynamicBackTitlePostId}
																	setPostId={(value) => setAttributes({ dynamicBackTitlePostId: value })}
																	postType={dynamicBackTitlePostType}
																	setPostType={(value) => setAttributes({ dynamicBackTitlePostType: value })}
																	postLabel={dynamicBackTitlePostLabel}
																	setPostLabel={(value) => setAttributes({ dynamicBackTitlePostLabel: value })}

																	field={dynamicBackTitleField}
																	setField={(value) => setAttributes({ dynamicBackTitleField: value })}
																	featuredImageField={dynamicBackTitleFeaturedImageField}
																	setFeaturedImageField={(value) => setAttributes({ dynamicBackTitleFeaturedImageField: value })}

																	dateType={dynamicBackTitleDateType}
																	setDateType={(value) => setAttributes({ dynamicBackTitleDateType: value })}
																	dateFormat={dynamicBackTitleDateFormat}
																	setDateFormat={(value) => setAttributes({ dynamicBackTitleDateFormat: value })}
																	timeType={dynamicBackTitleTimeType}
																	setTimeType={(value) => setAttributes({ dynamicBackTitleTimeType: value })}
																	timeFormat={dynamicBackTitleTimeFormat}
																	setTimeFormat={(value) => setAttributes({ dynamicBackTitleTimeFormat: value })}

																	commentsZeroText={dynamicBackTitleCommentsZeroText}
																	setCommentsZeroText={(value) => setAttributes({ dynamicBackTitleCommentsZeroText: value })}
																	commentsOneText={dynamicBackTitleCommentsOneText}
																	setCommentsOneText={(value) =>setAttributes({ dynamicBackTitleCommentsOneText: value })}
																	commentsManyText={dynamicBackTitleCommentsManyText}
																	setCommentsManyText={(value) =>setAttributes({ dynamicBackTitleCommentsManyText: value })}

																	termsTaxonomy={dynamicBackTitleTermsTaxonomy}
																	setTermsTaxonomy={(value) => setAttributes({ dynamicBackTitleTermsTaxonomy: value })}
																	termsSeparator={dynamicBackTitleTermsSeparator}
																	setTermsSeparator={(value) => setAttributes({ dynamicBackTitleTermsSeparator: value })}
																/>
																{dynamicBackTitleEnabled && (
																	<DynamicDataLinkControl
																		enableLink={dynamicBackTitleEnableLink}
																		setEnableLink={(value) => setAttributes({ dynamicBackTitleEnableLink: value })}
																		linkSource={dynamicBackTitleLinkSource}
																		setLinkSource={(value) => setAttributes({ dynamicBackTitleLinkSource: value })}
																	/>
																)}
																{!dynamicBackTitleEnabled && (
																	<TextareaControl
																		label={__("Heading Text", "frontis-block")}
																		value={headingTextBack}
																		onChange={(value) =>
																			setAttributes({ headingTextBack: value })
																		}
																		className="fb-setting-text"
																	/>
																)}
															</>
														)}
														
													</PanelBody>
												</div>
												<div className="fb-advanced-wrapper">
													<PanelBody
														title={__("Description", "frontis-block")}
														initialOpen={false}
													>
														<ToggleControl
															label={__("Show Description", "frontis-block")}
															checked={descSwitcherBack}
															onChange={(value) =>
																setAttributes({ descSwitcherBack: value })
															}
														/>

														{descSwitcherBack && (
															<>

																<FB_AlignmentControl
																	label={__("Alignment", "frontis-blocks")}
																	globalAlignment={descAlignmentBack}
																	setGlobalAlignment={(value) => setAttributes({ descAlignmentBack: value })}
																/>

																{dynamicBackDescriptionContentToggleControls.map((control, index) => (
																	<div key={control.key || index}>{control.comp}</div>
																))}

																<DynamicDataSourceControl
																	enabled={dynamicBackDescriptionEnabled}
																	
																	source={dynamicBackDescriptionSource}
																	setSource={(value) => setAttributes({ dynamicBackDescriptionSource: value })}
																	postId={dynamicBackDescriptionPostId}
																	setPostId={(value) => setAttributes({ dynamicBackDescriptionPostId: value })}
																	postType={dynamicBackDescriptionPostType}
																	setPostType={(value) => setAttributes({ dynamicBackDescriptionPostType: value })}
																	postLabel={dynamicBackDescriptionPostLabel}
																	setPostLabel={(value) => setAttributes({ dynamicBackDescriptionPostLabel: value })}

																	field={dynamicBackDescriptionField}
																	setField={(value) => setAttributes({ dynamicBackDescriptionField: value })}
																	featuredImageField={dynamicBackDescriptionFeaturedImageField}
																	setFeaturedImageField={(value) => setAttributes({ dynamicBackDescriptionFeaturedImageField: value })}

																	dateType={dynamicBackDescriptionDateType}
																	setDateType={(value) => setAttributes({ dynamicBackDescriptionDateType: value })}
																	dateFormat={dynamicBackDescriptionDateFormat}
																	setDateFormat={(value) => setAttributes({ dynamicBackDescriptionDateFormat: value })}
																	timeType={dynamicBackDescriptionTimeType}
																	setTimeType={(value) => setAttributes({ dynamicBackDescriptionTimeType: value })}
																	timeFormat={dynamicBackDescriptionTimeFormat}
																	setTimeFormat={(value) => setAttributes({ dynamicBackDescriptionTimeFormat: value })}

																	commentsZeroText={dynamicBackDescriptionCommentsZeroText}	
																	setCommentsZeroText={(value) => setAttributes({ dynamicBackDescriptionCommentsZeroText: value })}
																	commentsOneText={dynamicBackDescriptionCommentsOneText}
																	setCommentsOneText={(value) =>setAttributes({ dynamicBackDescriptionCommentsOneText: value })}
																	commentsManyText={dynamicBackDescriptionCommentsManyText}
																	setCommentsManyText={(value) =>setAttributes({ dynamicBackDescriptionCommentsManyText: value })}

																	termsTaxonomy={dynamicBackDescriptionTermsTaxonomy}
																	setTermsTaxonomy={(value) => setAttributes({ dynamicBackDescriptionTermsTaxonomy: value })}
																	termsSeparator={dynamicBackDescriptionTermsSeparator}
																	setTermsSeparator={(value) => setAttributes({ dynamicBackDescriptionTermsSeparator: value })}
																/>

																{dynamicBackDescriptionEnabled && ( 
																	<DynamicDataLinkControl
																		enableLink={dynamicBackDescriptionEnableLink}
																		setEnableLink={(value) => setAttributes({ dynamicBackDescriptionEnableLink: value })}
																		linkSource={dynamicBackDescriptionLinkSource}
																		setLinkSource={(value) => setAttributes({ dynamicBackDescriptionLinkSource: value })}
																	/>
																)}
																{!dynamicBackDescriptionEnabled && (
																	<TextareaControl
																		label={__("Description Text", "frontis-block")}
																		value={flipBackContent}
																		onChange={(value) =>
																			setAttributes({ flipBackContent: value })
																		}
																		className="fb-sub-heading-text"
																	/>
																)}
															</>
														)}
													</PanelBody>
												</div>

												{/*Button Element*/}
												<div className="fb-flipBack-button-wrapper">
													<PanelBody
														title={__("Button", "frontis-block")}
														initialOpen={false}
													>
														<ToggleControl
															label={__("Show Button", "frontis-block")}
															checked={flipBack_Button_Switcher}
															onChange={(value) =>
																setAttributes({ flipBack_Button_Switcher: value })
															}
														/>

														{flipBack_Button_Switcher && (
															<>

																<FB_AlignmentControl
																	label={__("Alignment", "frontis-blocks")}
																	globalAlignment={buttonAlignmentBack}
																	setGlobalAlignment={(value) => setAttributes({ buttonAlignmentBack: value })}
																/>

																{dynamicBackBtnContentToggleControls.map((control, index) => (
																	<div key={control.key || index}>{control.comp}</div>
																))}
												
																<DynamicDataSourceControl
																	enabled={dynamicBackBtnEnabled}
																	
																	source={dynamicBackBtnSource}
																	setSource={(value) => setAttributes({ dynamicBackBtnSource: value })}
																	postId={dynamicBackBtnPostId}
																	setPostId={(value) => setAttributes({ dynamicBackBtnPostId: value })}
																	postType={dynamicBackBtnPostType}
																	setPostType={(value) => setAttributes({ dynamicBackBtnPostType: value })}
																	postLabel={dynamicBackBtnPostLabel}
																	setPostLabel={(value) => setAttributes({ dynamicBackBtnPostLabel: value })}

																	field={dynamicBackBtnField}
																	setField={(value) => setAttributes({ dynamicBackBtnField: value })}
																	featuredImageField={dynamicBackBtnFeaturedImageField}
																	setFeaturedImageField={(value) => setAttributes({ dynamicBackBtnFeaturedImageField: value })}

																	dateType={dynamicBackBtnDateType}
																	setDateType={(value) => setAttributes({ dynamicBackBtnDateType: value })}
																	dateFormat={dynamicBackBtnDateFormat}
																	setDateFormat={(value) => setAttributes({ dynamicBackBtnDateFormat: value })}
																	timeType={dynamicBackBtnTimeType}
																	setTimeType={(value) => setAttributes({ dynamicBackBtnTimeType: value })}
																	timeFormat={dynamicBackBtnTimeFormat}
																	setTimeFormat={(value) => setAttributes({ dynamicBackBtnTimeFormat: value })}

																	commentsZeroText={dynamicBackBtnCommentsZeroText}
																	setCommentsZeroText={(value) => setAttributes({ dynamicBackBtnCommentsZeroText: value })}
																	commentsOneText={dynamicBackBtnCommentsOneText}
																	setCommentsOneText={(value) =>setAttributes({ dynamicBackBtnCommentsOneText: value })} 
																	commentsManyText={dynamicBackBtnCommentsManyText}
																	setCommentsManyText={(value) =>setAttributes({ dynamicBackBtnCommentsManyText: value })}

																	termsTaxonomy={dynamicBackBtnTermsTaxonomy}
																	setTermsTaxonomy={(value) => setAttributes({ dynamicBackBtnTermsTaxonomy: value })}
																	termsSeparator={dynamicBackBtnTermsSeparator}
																	setTermsSeparator={(value) => setAttributes({ dynamicBackBtnTermsSeparator: value })}
																/>
																{!dynamicBackBtnEnabled && (
																	<TextareaControl
																		label={__("Button Text", "frontis-block")}
																		value={flipBack_Button_Text}
																		onChange={(value) =>
																			setAttributes({ flipBack_Button_Text: value })
																		}
																		className="fb-flipBack-button-text"
																	/>
																)}
																<ToggleControl
																	label={__("Show Icon", "frontis-block")}
																	checked={buttonIconSwitcherBack}
																	onChange={(value) =>
																		setAttributes({ buttonIconSwitcherBack: value })
																	}
																/>
																{buttonIconSwitcherBack && (
																	<>
																		<BaseControl>
																			<FBIconPicker
																				value={btnIconBack}
																				setIconHandler={buttonIconHandlerBack}
																			/>
																		</BaseControl>
																		<SelectControl
																			label={__("Icon Position", "frontis-block")}
																			value={btnIconPosition}
																			options={ICON_POSITION}
																			onChange={(value) =>
																				setAttributes({ btnIconPosition: value })
																			}
																		/>
																	</>
																)}
																{dynamicBackBtnEnabled && ( 
																	<DynamicDataLinkControl
																		enableLink={dynamicBackBtnEnableLink}
																		setEnableLink={(value) => setAttributes({ dynamicBackBtnEnableLink: value })}
																		linkSource={dynamicBackBtnLinkSource}
																		setLinkSource={(value) => setAttributes({ dynamicBackBtnLinkSource: value })}
																	/>
																)}
																{!dynamicBackBtnEnableLink && (
																	<BaseControl>
																		<FB_UrlControl
																			url={flipBackButtonLink}
																			onChangeUrl={(value) =>
																				setAttributes({ flipBackButtonLink: value })
																			}
																			openInNewTab={flipBackbtnTargetUrl}
																			onChangeOpenInNewTab={(value) =>
																				setAttributes({ flipBackbtnTargetUrl: value })
																			}
																		/>
																	</BaseControl>
																)}
															</>
														)}
													</PanelBody>
												</div>
											</div>
										)}

									</>
								)}

								{tab.name === "styles" && (
									<>
										{flipSelectedSide === 'front' && (
											<>
												{/* Flip Box Style */}
												<PanelBody
													title={__("Flip Box", "frontis-block")}
													initialOpen={false}
												>
													<FB_Range
														min={0}
														max={600}
														label={__("Width", "frontis-blocks")}
														rangeValue={flipBoxFrontWidth}
														onChangeHandler={(value) => setAttributes({ flipBoxFrontWidth: value })}
														rangeUnitHandler={(value) => setAttributes({ flipBoxFrontWidthUnits: value })}
														deviceType={deviceType}
														units={flipBoxFrontWidthUnits}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														
													/>

													<FB_Range
														min={0}
														max={600}
														label={__("Height", "frontis-blocks")}
														rangeValue={flipBoxFrontHeight}
														onChangeHandler={(value) => setAttributes({ flipBoxFrontHeight: value })}
														rangeUnitHandler={(value) => setAttributes({ flipBoxFrontHeightUnits: value })}
														deviceType={deviceType}
														units={flipBoxFrontHeightUnits}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														units_types_arr={[
															{ label: 'px', value: 'px' },
															{ label: 'em', value: 'em' },
															{ label: 'rem', value: 'rem' },
															{ label: 'vh', value: 'vh' }
														]}
													/>

													{/*Background Color */}
													<FB_BackgroundColorControl
														bgColorSwitcher={flipBoxFrontBackColorSwitcher}
														setBgColorSwitcher={(value) => setAttributes({ flipBoxFrontBackColorSwitcher: value })}
														normalBackgroundType={flipBoxFrontBackgroundType}
														setNormalBackgroundType={(value) => setAttributes({ flipBoxFrontBackgroundType: value })}
														normalClassicColor={flipBoxFrontClassicColor}
														setNormalClassicColor={(value) => setAttributes({ flipBoxFrontClassicColor: value === undefined ? '' : value })}
														normalGradientColor={flipBoxFrontGradientColor}
														setNormalGradientColor={(value) => setAttributes({ flipBoxFrontGradientColor: value === undefined ? null : value })}
														normalCustomGradientSwitcher={flipBoxFrontCustomGradientSwitcher}
														setNormalCustomGradientSwitcher={(value) => setAttributes({ flipBoxFrontCustomGradientSwitcher: value })}
														normalCustomGradientInputValue={flipBoxFrontCustomGradientInputValue}
														setNormalCustomGradientInputValue={(value) => setAttributes({ flipBoxFrontCustomGradientInputValue: value })}
														normalBackgroundImageUrl={flipBoxFrontBackgroundImageUrl}
														setNormalBackgroundImageUrl={(value) => setAttributes({ flipBoxFrontBackgroundImageUrl: value })}
														normalBackgroundImageAlt={flipBoxFrontBackgroundImageAlt}
														setNormalBackgroundImageAlt={(value) => setAttributes({ flipBoxFrontBackgroundImageAlt: value })}
														normalBackgroundImageID={flipBoxFrontBackgroundImageID}
														setNormalBackgroundImageID={(value) => setAttributes({ flipBoxFrontBackgroundImageID: value })}
														normalBackgroundImagePosition={flipBoxFrontBackgroundImagePosition}
														setNormalBackgroundImagePosition={(value) => setAttributes({ flipBoxFrontBackgroundImagePosition: value })}
														normalBackgroundImageAttachment={flipBoxFrontBackgroundImageAttachment}
														setNormalBackgroundImageAttachment={(value) => setAttributes({ flipBoxFrontBackgroundImageAttachment: value })}
														normalBackgroundImageRepeat={flipBoxFrontBackgroundImageRepeat}
														setNormalBackgroundImageRepeat={(value) => setAttributes({ flipBoxFrontBackgroundImageRepeat: value })}
														normalBackgroundImageSize={flipBoxFrontBackgroundImageSize}
														setNormalBackgroundImageSize={(value) => setAttributes({ flipBoxFrontBackgroundImageSize: value })}
														hoverBackgroundType={flipBoxFrontHoverBackgroundType}
														setHoverBackgroundType={(value) => setAttributes({ flipBoxFrontHoverBackgroundType: value })}
														hoverClassicColor={flipBoxFrontHoverClassicColor}
														setHoverClassicColor={(value) => setAttributes({ flipBoxFrontHoverClassicColor: value === undefined ? '' : value })}
														hoverGradientColor={flipBoxFrontHoverGradientColor}
														setHoverGradientColor={(value) => setAttributes({ flipBoxFrontHoverGradientColor: value === undefined ? null : value })}
														hoverCustomGradientSwitcher={flipBoxFrontHoverCustomGradientSwitcher}
														setHoverCustomGradientSwitcher={(value) => setAttributes({ flipBoxFrontHoverCustomGradientSwitcher: value })}
														hoverCustomGradientInputValue={flipBoxFrontHoverCustomGradientInputValue}
														setHoverCustomGradientInputValue={(value) => setAttributes({ flipBoxFrontHoverCustomGradientInputValue: value })}
														hoverBackgroundImageUrl={flipBoxFrontHoverBackgroundImageUrl}
														setHoverBackgroundImageUrl={(value) => setAttributes({ flipBoxFrontHoverBackgroundImageUrl: value })}
														hoverBackgroundImageAlt={flipBoxFrontHoverBackgroundImageAlt}
														setHoverBackgroundImageAlt={(value) => setAttributes({ flipBoxFrontHoverBackgroundImageAlt: value })}
														hoverBackgroundImageID={flipBoxFrontHoverBackgroundImageID}
														setHoverBackgroundImageID={(value) => setAttributes({ flipBoxFrontHoverBackgroundImageID: value })}
														hoverBackgroundImagePosition={flipBoxFrontHoverBackgroundImagePosition}
														setHoverBackgroundImagePosition={(value) => setAttributes({ flipBoxFrontHoverBackgroundImagePosition: value })}
														hoverBackgroundImageAttachment={flipBoxFrontHoverBackgroundImageAttachment}
														setHoverBackgroundImageAttachment={(value) => setAttributes({ flipBoxFrontHoverBackgroundImageAttachment: value })}
														hoverBackgroundImageRepeat={flipBoxFrontHoverBackgroundImageRepeat}
														setHoverBackgroundImageRepeat={(value) => setAttributes({ flipBoxFrontHoverBackgroundImageRepeat: value })}
														hoverBackgroundImageSize={flipBoxFrontHoverBackgroundImageSize}
														setHoverBackgroundImageSize={(value) => setAttributes({ flipBoxFrontHoverBackgroundImageSize: value })}
													/>

													<FB_Spacing
														label={__("Padding", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleFlipBoxFrontPaddingUnitsHandler}
														spacingUnits={flipBoxFrontPaddingUnits}
														spacingDesktop={flipBoxFrontPaddingDesktop}
														spacingTablet={flipBoxFrontPaddingTablet}
														spacingMobile={flipBoxFrontPaddingMobile}
														handleSpacingUnitHandler={handleFlipBoxFrontPaddingUnitChange}
														spacingCombineBtn={flipBoxFrontPaddingLink}
														spacingCombineBtnHandler={handleFlipBoxFrontPaddingCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_Spacing
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleFlipBoxFrontMarginUnitsHandler}
														spacingUnits={flipBoxFrontMarginUnits}
														spacingDesktop={flipBoxFrontMarginDesktop}
														spacingTablet={flipBoxFrontMarginTablet}
														spacingMobile={flipBoxFrontMarginMobile}
														handleSpacingUnitHandler={handleFlipBoxFrontMarginUnitChange}
														spacingCombineBtn={flipBoxFrontMarginLink}
														spacingCombineBtnHandler={handleFlipBoxFrontMarginCombineBtn}
														setAttributes={setAttributes}
													/>

													<SelectControl
														label={__("Border Style", "frontis-block")}
														value={flipBoxFrontBorder}
														options={BORDER_STYLES}
														onChange={(value) =>
															setAttributes({ flipBoxFrontBorder: value })
														}
													/>

													<FB_SwitcherControl
														label={__("Border Color", "frontis-blocks")}
														globalSwitcher={flipBoxFrontBorderColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ flipBoxFrontBorderColorSwitcher: value })}
													/>

													{flipBoxFrontBorderColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={flipBoxFrontBorderColor}
															setGlobalColor={(value) => setAttributes({ flipBoxFrontBorderColor: value === undefined ? '' : value })}
														/>
													)}

													{flipBoxFrontBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={flipBoxFrontBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ flipBoxFrontBorderHoverColor: value === undefined ? '' : value })}
														/>
													)}

													<FB_Spacing
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleFlipBoxFrontBorderUnitsHandler}
														spacingUnits={flipBoxFrontBorderUnits}
														spacingDesktop={flipBoxFrontBorderDesktop}
														spacingTablet={flipBoxFrontBorderTablet}
														spacingMobile={flipBoxFrontBorderMobile}
														handleSpacingUnitHandler={handleFlipBoxFrontBorderUnitChange}
														spacingCombineBtn={flipBoxFrontBorderLink}
														spacingCombineBtnHandler={handleFlipBoxFrontBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={
															handleFlipBoxFrontBorderRadiusUnitsHandler
														}
														spacingUnits={flipBoxFrontBorderRadiusUnits}
														spacingDesktop={flipBoxFrontBorderRadiusDesktop}
														spacingTablet={flipBoxFrontBorderRadiusTablet}
														spacingMobile={flipBoxFrontBorderRadiusMobile}
														handleSpacingUnitHandler={
															handleFlipBoxFrontBorderRadiusUnitChange
														}
														spacingCombineBtn={flipBoxFrontBorderRadiusLink}
														spacingCombineBtnHandler={
															handleFlipBoxFrontBorderRadiusCombineBtn
														}
														setAttributes={setAttributes}
													/>
												</PanelBody>
												{/*Image/Icon Style*/}
												{mediaSwitcher !== "none"  && (
													<PanelBody
														title={__("Image/Icon", "frontis-block")}
														initialOpen={false}
													>
														<FB_Range
															min={0}
															max={500}
															label={__("Size", "frontis-blocks")}
															rangeValue={mediaSize}
															onChangeHandler={(value) =>
																setAttributes({ mediaSize: value })
															}
															rangeUnitHandler={(value) =>
																setAttributes({ mediaSizeUnits: value })
															}
															deviceType={deviceType}
															units={mediaSizeUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={""}
														/>

														{/*Icon Color */}
														{mediaSwitcher === "icon" && (
															<>
																<FB_SwitcherControl
																	label={__("Icon Color", "frontis-blocks")}
																	globalSwitcher={mediaIconColorSwitcher}
																	setGlobalSwitcher={(value) => setAttributes({ mediaIconColorSwitcher: value })}
																/>

																{mediaIconColorSwitcher === 'normal' && (
																	<FB_ColorControl
																		label={__("Normal Color", "frontis-blocks")}
																		globalColor={mediaIconColor}
																		setGlobalColor={(value) => setAttributes({ mediaIconColor: value === undefined ? '' : value })}
																	/>
																)}

																{mediaIconColorSwitcher === 'hover' && (
																	<FB_ColorControl
																		label={__("Hover Color", "frontis-blocks")}
																		globalColor={mediaIconHoverColor}
																		setGlobalColor={(value) => setAttributes({ mediaIconHoverColor: value === undefined ? '' : value })}
																	/>
																)}
															</>
														)}
														<FB_BackgroundColorControl
															bgColorSwitcher={mediaBackColorSwitcher}
															setBgColorSwitcher={(value) => setAttributes({ mediaBackColorSwitcher: value })}
															normalBackgroundType={mediaBackgroundType}
															setNormalBackgroundType={(value) => setAttributes({ mediaBackgroundType: value })}
															normalClassicColor={mediaClassicColor}
															setNormalClassicColor={(value) => setAttributes({ mediaClassicColor: value === undefined ? '' : value })}
															normalGradientColor={mediaGradientColor}
															setNormalGradientColor={(value) => setAttributes({ mediaGradientColor: value === undefined ? null : value })}
															normalCustomGradientSwitcher={mediaCustomGradientSwitcher}
															setNormalCustomGradientSwitcher={(value) => setAttributes({ mediaCustomGradientSwitcher: value })}
															normalCustomGradientInputValue={mediaCustomGradientInputValue}
															setNormalCustomGradientInputValue={(value) => setAttributes({ mediaCustomGradientInputValue: value })}
															normalBackgroundImageUrl={mediaBackgroundImageUrl}
															setNormalBackgroundImageUrl={(value) => setAttributes({ mediaBackgroundImageUrl: value })}
															normalBackgroundImageAlt={mediaBackgroundImageAlt}
															setNormalBackgroundImageAlt={(value) => setAttributes({ mediaBackgroundImageAlt: value })}
															normalBackgroundImageID={mediaBackgroundImageID}
															setNormalBackgroundImageID={(value) => setAttributes({ mediaBackgroundImageID: value })}
															normalBackgroundImagePosition={mediaBackgroundImagePosition}
															setNormalBackgroundImagePosition={(value) => setAttributes({ mediaBackgroundImagePosition: value })}
															normalBackgroundImageAttachment={mediaBackgroundImageAttachment}
															setNormalBackgroundImageAttachment={(value) => setAttributes({ mediaBackgroundImageAttachment: value })}
															normalBackgroundImageRepeat={mediaBackgroundImageRepeat}
															setNormalBackgroundImageRepeat={(value) => setAttributes({ mediaBackgroundImageRepeat: value })}
															normalBackgroundImageSize={mediaBackgroundImageSize}
															setNormalBackgroundImageSize={(value) => setAttributes({ mediaBackgroundImageSize: value })}
															hoverBackgroundType={mediaHoverBackgroundType}
															setHoverBackgroundType={(value) => setAttributes({ mediaHoverBackgroundType: value })}
															hoverClassicColor={mediaHoverClassicColor}
															setHoverClassicColor={(value) => setAttributes({ mediaHoverClassicColor: value === undefined ? '' : value })}
															hoverGradientColor={mediaHoverGradientColor}
															setHoverGradientColor={(value) => setAttributes({ mediaHoverGradientColor: value === undefined ? null : value })}
															hoverCustomGradientSwitcher={mediaHoverCustomGradientSwitcher}
															setHoverCustomGradientSwitcher={(value) => setAttributes({ mediaHoverCustomGradientSwitcher: value })}
															hoverCustomGradientInputValue={mediaHoverCustomGradientInputValue}
															setHoverCustomGradientInputValue={(value) => setAttributes({ mediaHoverCustomGradientInputValue: value })}
															hoverBackgroundImageUrl={mediaHoverBackgroundImageUrl}
															setHoverBackgroundImageUrl={(value) => setAttributes({ mediaHoverBackgroundImageUrl: value })}
															hoverBackgroundImageAlt={mediaHoverBackgroundImageAlt}
															setHoverBackgroundImageAlt={(value) => setAttributes({ mediaHoverBackgroundImageAlt: value })}
															hoverBackgroundImageID={mediaHoverBackgroundImageID}
															setHoverBackgroundImageID={(value) => setAttributes({ mediaHoverBackgroundImageID: value })}
															hoverBackgroundImagePosition={mediaHoverBackgroundImagePosition}
															setHoverBackgroundImagePosition={(value) => setAttributes({ mediaHoverBackgroundImagePosition: value })}
															hoverBackgroundImageAttachment={mediaHoverBackgroundImageAttachment}
															setHoverBackgroundImageAttachment={(value) => setAttributes({ mediaHoverBackgroundImageAttachment: value })}
															hoverBackgroundImageRepeat={mediaHoverBackgroundImageRepeat}
															setHoverBackgroundImageRepeat={(value) => setAttributes({ mediaHoverBackgroundImageRepeat: value })}
															hoverBackgroundImageSize={mediaHoverBackgroundImageSize}
															setHoverBackgroundImageSize={(value) => setAttributes({ mediaHoverBackgroundImageSize: value })}
														/>

														<FB_Range
															min={0}
															max={500}
															label={__("Background Width", "frontis-blocks")}
															rangeValue={mediaBgWidth}
															onChangeHandler={(value) =>
																setAttributes({ mediaBgWidth: value })
															}
															rangeUnitHandler={(value) =>
																setAttributes({ mediaBgWidthUnits: value })
															}
															deviceType={deviceType}
															units={mediaBgWidthUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={""}
														/>

														<FB_Range
															min={0}
															max={500}
															label={__("Background Height", "frontis-blocks")}
															rangeValue={mediaBgHeight}
															onChangeHandler={(value) =>
																setAttributes({ mediaBgHeight: value })
															}
															rangeUnitHandler={(value) =>
																setAttributes({ mediaBgHeightUnits: value })
															}
															deviceType={deviceType}
															units={mediaBgHeightUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={""}
														/>

														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleMediaPaddingUnitsHandler}
															spacingUnits={mediaPaddingUnits}
															spacingDesktop={mediaPaddingDesktop}
															spacingTablet={mediaPaddingTablet}
															spacingMobile={mediaPaddingMobile}
															handleSpacingUnitHandler={handleMediaPaddingUnitChange}
															spacingCombineBtn={mediaPaddingLink}
															spacingCombineBtnHandler={handleMediaPaddingCombineBtn}
															setAttributes={setAttributes}
														/>
														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleMediaMarginUnitsHandler}
															spacingUnits={mediaMarginUnits}
															spacingDesktop={mediaMarginDesktop}
															spacingTablet={mediaMarginTablet}
															spacingMobile={mediaMarginMobile}
															handleSpacingUnitHandler={handleMediaMarginUnitChange}
															spacingCombineBtn={mediaMarginLink}
															spacingCombineBtnHandler={handleMediaMarginCombineBtn}
															setAttributes={setAttributes}
														/>

														<SelectControl
															label={__("Border Style", "frontis-block")}
															value={mediaBorder}
															options={BORDER_STYLES}
															onChange={(value) =>
																setAttributes({ mediaBorder: value })
															}
														/>

														<FB_SwitcherControl
															label={__("Border Color", "frontis-blocks")}
															globalSwitcher={mediaBorderColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ mediaBorderColorSwitcher: value })}
														/>

														{mediaBorderColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={mediaBorderColor}
																setGlobalColor={(value) => setAttributes({ mediaBorderColor: value === undefined ? '' : value })}
															/>
														)}

														{mediaBorderColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={mediaBorderHoverColor}
																setGlobalColor={(value) => setAttributes({ mediaBorderHoverColor: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Border", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleMediaBorderUnitsHandler}
															spacingUnits={mediaBorderUnits}
															spacingDesktop={mediaBorderDesktop}
															spacingTablet={mediaBorderTablet}
															spacingMobile={mediaBorderMobile}
															handleSpacingUnitHandler={handleMediaBorderUnitChange}
															spacingCombineBtn={mediaBorderLink}
															spacingCombineBtnHandler={handleMediaBorderCombineBtn}
															setAttributes={setAttributes}
														/>

														<FB_Spacing
															label={__("Border Radius", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={
																handleMediaBorderRadiusUnitsHandler
															}
															spacingUnits={mediaBorderRadiusUnits}
															spacingDesktop={mediaBorderRadiusDesktop}
															spacingTablet={mediaBorderRadiusTablet}
															spacingMobile={mediaBorderRadiusMobile}
															handleSpacingUnitHandler={
																handleMediaBorderRadiusUnitChange
															}
															spacingCombineBtn={mediaBorderRadiusLink}
															spacingCombineBtnHandler={
																handleMediaBorderRadiusCombineBtn
															}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}
												
												{/*Heading Style*/}
												{titleSwitcher && (
													<PanelBody
														title={__("Title", "frontis-block")}
														initialOpen={false}
													>
														<FB_TypographyControl
															globalTypoControlActive={true}
															globalTypoSwitcher={headingGlobalTypoSwitcher}
															storeGlobalTypographyData={(value) => setAttributes({ headingGlobalTypographyData: value })}

															globalTypoType={headingGlobalTypoType}
															onChangeGlobalTypoType={(value) => {
																setAttributes({
																	headingGlobalTypoType: value,
																	headingGlobalTypoSwitcher: value === 'default' ? { ...headingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...headingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
																})
															}}

															globalTypoOption={headingGlobalTypoOption}
															onChangeGlobalTypoOption={(value) => setAttributes({ headingGlobalTypoOption: value })}

															fontFamily={headingFontFamily}
															onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontFamily: value && false } })}

															fontSize={headingFontSize}
															onChangeFontSize={(value) => setAttributes({ headingFontSize: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontSize: value && false } })}

															fontSizeUnits={headingFontSizeUnits}
															onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

															fontWeight={headingFontWeight}
															onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontWeight: value && false } })}

															fontStyle={headingFontStyle}
															onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontStyle: value && false } })}

															textTransform={headingTextTransform}
															onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, textTransform: value && false } })}

															textDecoration={headingTextDecoration}
															onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, textDecoration: value && false } })}

															letterSpacing={headingLetterSpacing}
															onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, letterSpacing: value && false } })}

															letterSpacingUnits={headingLetterSpacingUnits}
															onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

															lineHeight={headingLineHeight}
															onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, lineHeight: value && false } })}

															lineHeightUnits={headingLineHeightUnits}
															onChangeLineHeightUnit={(value) => setAttributes({ headingLineHeightUnits: value })}

															deviceType={deviceType}
															setAttributes={setAttributes}
														/>

														<FB_SwitcherControl
															label={__("Text Color", "frontis-blocks")}
															globalSwitcher={Heading_Color_Switcher}
															setGlobalSwitcher={(value) => setAttributes({ Heading_Color_Switcher: value })}
														/>

														{Heading_Color_Switcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={Heading_Color}
																setGlobalColor={(value) => setAttributes({ Heading_Color: value === undefined ? '' : value })}
															/>
														)}

														{Heading_Color_Switcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={Heading_Hover_Color}
																setGlobalColor={(value) => setAttributes({ Heading_Hover_Color: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleHeadingPaddingUnitsHandler}
															spacingUnits={Heading_padding_units}
															spacingDesktop={Heading_Desktop_padding}
															spacingTablet={Heading_Tab_padding}
															spacingMobile={Heading_Mobile_padding}
															handleSpacingUnitHandler={handleHeadingPaddingUnitChange}
															spacingCombineBtn={paddingLink}
															spacingCombineBtnHandler={handleHeadingPaddingCombineBtn}
															setAttributes={setAttributes}
														/>

														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleHeadingMarginUnitsHandler}
															spacingUnits={Heading_Margin_Units}
															spacingDesktop={Heading_Desktop_Margin}
															spacingTablet={Heading_Tab_Margin}
															spacingMobile={Heading_Mobile_Margin}
															handleSpacingUnitHandler={handleHeadingMarginUnitChange}
															spacingCombineBtn={Heading_Margin_Link}
															spacingCombineBtnHandler={handleHeadingMarginCombineBtn}
															setAttributes={setAttributes}
														/>

														{/*Border*/}
														<Heading>Border</Heading>
														<SelectControl
															label={__("Border Style", "frontis-block")}
															value={Heading_Border}
															options={BORDER_STYLES}
															onChange={(value) =>
																setAttributes({ Heading_Border: value })
															}
														/>

														<FB_SwitcherControl
															label={__("Border Color", "frontis-blocks")}
															globalSwitcher={Heading_Border_Color_Switcher}
															setGlobalSwitcher={(value) => setAttributes({ Heading_Border_Color_Switcher: value })}
														/>

														{Heading_Border_Color_Switcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={Heading_Border_Color}
																setGlobalColor={(value) => setAttributes({ Heading_Border_Color: value === undefined ? '' : value })}
															/>
														)}

														{Heading_Border_Color_Switcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={Heading_Border_Hover_Color}
																setGlobalColor={(value) => setAttributes({ Heading_Border_Hover_Color: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Border Width", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleHeadingBorderUnitsHandler}
															spacingUnits={Heading_Border_units}
															spacingDesktop={Heading_Desktop_Border_Width}
															spacingTablet={Heading_Tab_Border_Width}
															spacingMobile={Heading_Mobile_Border_Width}
															handleSpacingUnitHandler={handleHeadingBorderUnitChange}
															spacingCombineBtn={borderLink}
															spacingCombineBtnHandler={handleHeadingBorderCombineBtn}
															setAttributes={setAttributes}
														/>

														<FB_Spacing
															label={__("Border Radius", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={
																handleHeadingBorderRadiusUnitsHandler
															}
															spacingUnits={Heading_Border_radius_units}
															spacingDesktop={Heading_Desktop_Border_radius_Width}
															spacingTablet={Heading_Tab_Border_radius_Width}
															spacingMobile={Heading_Mobile_Border_radius_Width}
															handleSpacingUnitHandler={
																handleHeadingBorderRadiusUnitChange
															}
															spacingCombineBtn={borderRadiusLink}
															spacingCombineBtnHandler={
																handleHeadingBorderRadiusCombineBtn
															}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}
												
												{/*Description Style*/}
												{descSwitcher && (
													<PanelBody
														title={__("Description", "frontis-block")}
														initialOpen={false}
														className="fb-flip-box-desc-setting-wrapper"
													>
														{/*Typography*/}
														<FB_TypographyControl
															globalTypoControlActive={true}
															globalTypoSwitcher={subHeadingGlobalTypoSwitcher}
															storeGlobalTypographyData={(value) => setAttributes({ subHeadingGlobalTypographyData: value })}

															globalTypoType={subHeadingGlobalTypoType}
															onChangeGlobalTypoType={(value) => {
																setAttributes({
																	subHeadingGlobalTypoType: value,
																	subHeadingGlobalTypoSwitcher: value === 'default' ? { ...subHeadingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...subHeadingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
																})
															}}

															globalTypoOption={subHeadingGlobalTypoOption}
															onChangeGlobalTypoOption={(value) => setAttributes({ subHeadingGlobalTypoOption: value })}

															fontFamily={subHeadingFontFamily}
															onChangeFontFamily={(value) => setAttributes({ subHeadingFontFamily: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, fontFamily: value && false } })}

															fontSize={subHeadingFontSize}
															onChangeFontSize={(value) => setAttributes({ subHeadingFontSize: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, fontSize: value && false } })}

															fontSizeUnits={subHeadingFontSizeUnits}
															onChangeFontSizeUnit={(value) => setAttributes({ subHeadingFontSizeUnits: value })}

															fontWeight={subHeadingFontWeight}
															onChangeFontWeight={(value) => setAttributes({ subHeadingFontWeight: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, fontWeight: value && false } })}

															fontStyle={subHeadingFontStyle}
															onChangeFontStyle={(value) => setAttributes({ subHeadingFontStyle: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, fontStyle: value && false } })}

															textTransform={subHeadingTextTransform}
															onChangeTextTransform={(value) => setAttributes({ subHeadingTextTransform: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, textTransform: value && false } })}

															textDecoration={subHeadingTextDecoration}
															onChangeTextDecoration={(value) => setAttributes({ subHeadingTextDecoration: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, textDecoration: value && false } })}

															letterSpacing={subHeadingLetterSpacing}
															onChangeLetterSpacing={(value) => setAttributes({ subHeadingLetterSpacing: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, letterSpacing: value && false } })}

															letterSpacingUnits={subHeadingLetterSpacingUnits}
															onChangeLetterSpacingUnit={(value) => setAttributes({ subHeadingLetterSpacingUnits: value })}

															lineHeight={subHeadingLineHeight}
															onChangeLineHeight={(value) => setAttributes({ subHeadingLineHeight: value, subHeadingGlobalTypoSwitcher: { ...subHeadingGlobalTypoSwitcher, lineHeight: value && false } })}

															lineHeightUnits={subHeadingLineHeightUnits}
															onChangeLineHeightUnit={(value) => setAttributes({ subHeadingLineHeightUnits: value })}

															deviceType={deviceType}
															setAttributes={setAttributes}
														/>

														{/*Color*/}
														<FB_SwitcherControl
															label={__("Text Color", "frontis-blocks")}
															globalSwitcher={SubHeadingColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ SubHeadingColorSwitcher: value })}
														/>

														{SubHeadingColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={SubHeadingColor}
																setGlobalColor={(value) => setAttributes({ SubHeadingColor: value === undefined ? '' : value })}
															/>
														)}

														{SubHeadingColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={SubHeadingHoverColor}
																setGlobalColor={(value) => setAttributes({ SubHeadingHoverColor: value === undefined ? '' : value })}
															/>
														)}

														{/*Spacing*/}
														<Heading>Spacing</Heading>
														{/* Padding */}
														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleDescPaddingUnitsHandler}
															spacingUnits={SubHeadingPaddingUnits}
															spacingDesktop={SubHeadingDesktopPadding}
															spacingTablet={SubHeadingTabPadding}
															spacingMobile={SubHeadingMobilePadding}
															handleSpacingUnitHandler={handleDescPaddingUnitChange}
															spacingCombineBtn={SubHeadingPaddingLink}
															spacingCombineBtnHandler={handleDescPaddingCombineBtn}
															setAttributes={setAttributes}
														/>
														{/* Margin */}
														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleDescMarginUnitsHandler}
															spacingUnits={descMarginUnits}
															spacingDesktop={descDesktopMargin}
															spacingTablet={descTabMargin}
															spacingMobile={descMobileMargin}
															handleSpacingUnitHandler={handleDescMarginUnitChange}
															spacingCombineBtn={descMarginLink}
															spacingCombineBtnHandler={handleDescMarginCombineBtn}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}

												{/*Button Style*/}
												{flip_Button_Switcher && (
													<PanelBody
														title={__("Button", "frontis-block")}
														className="fb-flip-box-button-setting-wrapper"
														initialOpen={false}
													>
														<FB_TypographyControl
															globalTypoControlActive={true}
															globalTypoSwitcher={buttonGlobalTypoSwitcher}
															storeGlobalTypographyData={(value) => setAttributes({ buttonGlobalTypographyData: value })}

															globalTypoType={buttonGlobalTypoType}
															onChangeGlobalTypoType={(value) => {
																setAttributes({
																	buttonGlobalTypoType: value,
																	buttonGlobalTypoSwitcher: value === 'default' ? { ...buttonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...buttonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
																})
															}}

															globalTypoOption={buttonGlobalTypoOption}
															onChangeGlobalTypoOption={(value) => setAttributes({ buttonGlobalTypoOption: value })}

															fontFamily={buttonFontFamily}
															onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontFamily: value && false } })}

															fontSize={buttonFontSize}
															onChangeFontSize={(value) => setAttributes({ buttonFontSize: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontSize: value && false } })}

															fontSizeUnits={buttonFontSizeUnits}
															onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

															fontWeight={buttonFontWeight}
															onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontWeight: value && false } })}

															fontStyle={buttonFontStyle}
															onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontStyle: value && false } })}

															textTransform={buttonTextTransform}
															onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, textTransform: value && false } })}

															textDecoration={buttonTextDecoration}
															onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, textDecoration: value && false } })}

															letterSpacing={buttonLetterSpacing}
															onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, letterSpacing: value && false } })}

															letterSpacingUnits={buttonLetterSpacingUnits}
															onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

															lineHeight={buttonLineHeight}
															onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, lineHeight: value && false } })}

															lineHeightUnits={buttonLineHeightUnits}
															onChangeLineHeightUnit={(value) => setAttributes({ buttonLineHeightUnits: value })}

															deviceType={deviceType}
															setAttributes={setAttributes}
														/>


														{/* Start Text Color*/}
														<FB_SwitcherControl
															label={__("Text Color", "frontis-blocks")}
															globalSwitcher={buttonColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ buttonColorSwitcher: value })}
														/>

														{buttonColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={buttonTextColor}
																setGlobalColor={(value) => setAttributes({ buttonTextColor: value === undefined ? '' : value })}
															/>
														)}

														{buttonColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={buttonTextHoverColor}
																setGlobalColor={(value) => setAttributes({ buttonTextHoverColor: value === undefined ? '' : value })}
															/>
														)}

														{/* Start Button Bg Color*/}
														<FB_SwitcherControl
															label={__("Background Color", "frontis-blocks")}
															globalSwitcher={buttonBgColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ buttonBgColorSwitcher: value })}
														/>

														{buttonBgColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={buttonBgColor}
																setGlobalColor={(value) => setAttributes({ buttonBgColor: value === undefined ? '' : value })}
															/>
														)}

														{buttonBgColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={buttonBgHoverColor}
																setGlobalColor={(value) => setAttributes({ buttonBgHoverColor: value === undefined ? '' : value })}
															/>
														)}

														{/* Button Icon color */}
														{buttonIconSwitcher && <>
															<FB_SwitcherControl
																label={__("Icon Color", "frontis-blocks")}
																globalSwitcher={btnIconColorSwitcher}
																setGlobalSwitcher={(value) => setAttributes({ btnIconColorSwitcher: value })}
															/>

															{btnIconColorSwitcher === 'normal' && (
																<FB_ColorControl
																	label={__("Normal Color", "frontis-blocks")}
																	globalColor={btnIconColor}
																	setGlobalColor={(value) => setAttributes({ btnIconColor: value === undefined ? '' : value })}
																/>
															)}

															{btnIconColorSwitcher === 'hover' && (
																<FB_ColorControl
																	label={__("Hover Color", "frontis-blocks")}
																	globalColor={btnIconHoverColor}
																	setGlobalColor={(value) => setAttributes({ btnIconHoverColor: value === undefined ? '' : value })}
																/>
															)}

															<FB_Range
																min={0}
																max={500}
																label={__("Icon Size", "frontis-blocks")}
																rangeValue={btnIconSize}
																onChangeHandler={(value) => setAttributes({ btnIconSize: value })}
																rangeUnitHandler={(value) => setAttributes({ btnIconSizeUnits: value })}
																deviceType={deviceType}
																units={btnIconSizeUnits}
																setAttributes={setAttributes}
																rangeStep={1}
																resetFallbackValue={""}
															/>

															<FB_Range
																min={0}
																max={500}
																label={__("Icon Gap", "frontis-blocks")}
																rangeValue={btnIconGap}
																onChangeHandler={(value) => setAttributes({ btnIconGap: value })}
																rangeUnitHandler={(value) => setAttributes({ btnIconGapUnits: value })}
																deviceType={deviceType}
																units={btnIconGapUnits}
																setAttributes={setAttributes}
																rangeStep={1}
																resetFallbackValue={""}
															/>

															<FB_SwitcherControl
																label={__("Icon Rotation", "frontis-blocks")}
																globalSwitcher={buttonIconRotateSwitcher}
																setGlobalSwitcher={(value) => setAttributes({ buttonIconRotateSwitcher: value })}
															/>

															{buttonIconRotateSwitcher === 'normal' && (
																<FB_Range
																	min={-360}
																	max={360}
																	label={__("Icon Rotation", "frontis-blocks")}
																	rangeValue={buttonIconRotate}
																	onChangeHandler={(value) => setAttributes({ buttonIconRotate: value === 0 ? undefined : value })}
																	deviceType={deviceType}
																	setAttributes={setAttributes}
																	rangeStep={1}
																	resetFallbackValue={""}
																	isRangeUnit={false}

																/>
															)}

															{buttonIconRotateSwitcher === 'hover' && (
																<FB_Range
																	min={-360}
																	max={360}
																	label={__("Icon Rotation", "frontis-blocks")}
																	rangeValue={buttonIconRotateHover}
																	onChangeHandler={(value) => setAttributes({ buttonIconRotateHover: value === 0 ? undefined : value })}
																	deviceType={deviceType}
																	setAttributes={setAttributes}
																	rangeStep={1}
																	resetFallbackValue={""}
																	isRangeUnit={false}
																/>
															)}
														</>}

														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonPaddingUnitsHandler}
															spacingUnits={flipButtonPaddingUnits}
															spacingDesktop={flipButtonDesktopPadding}
															spacingTablet={flipButtonTabPadding}
															spacingMobile={flipButtonMobilePadding}
															handleSpacingUnitHandler={handleButtonPaddingUnitChange}
															spacingCombineBtn={flipButtonPaddingLink}
															spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
															setAttributes={setAttributes}
														/>
														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonMarginUnitsHandler}
															spacingUnits={flipButtonMarginUnits}
															spacingDesktop={flipButtonDesktopMargin}
															spacingTablet={flipButtonTabMargin}
															spacingMobile={flipButtonMobileMargin}
															handleSpacingUnitHandler={handleButtonMarginUnitChange}
															spacingCombineBtn={flipButtonMarginLink}
															spacingCombineBtnHandler={handleButtonMarginCombineBtn}
															setAttributes={setAttributes}
														/>
														{/* Border Width */}

														<SelectControl
															label={__("Border Style", "frontis-block")}
															value={flipButtonBorder}
															options={BORDER_STYLES}
															onChange={(value) =>
																setAttributes({ flipButtonBorder: value })
															}
														/>

														<FB_SwitcherControl
															label={__("Border Color", "frontis-blocks")}
															globalSwitcher={flipButtonBorderColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ flipButtonBorderColorSwitcher: value })}
														/>

														{flipButtonBorderColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={flipButtonBorderColor}
																setGlobalColor={(value) => setAttributes({ flipButtonBorderColor: value === undefined ? '' : value })}
															/>
														)}

														{flipButtonBorderColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={flipButtonHoverBorderColor}
																setGlobalColor={(value) => setAttributes({ flipButtonHoverBorderColor: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Border Width", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonBorderUnitsHandler}
															spacingUnits={flipButtonBorderUnits}
															spacingDesktop={flipButtonDesktopBorderWidth}
															spacingTablet={flipButtonTabBorderWidth}
															spacingMobile={flipButtonMobileBorderWidth}
															handleSpacingUnitHandler={handleButtonBorderUnitChange}
															spacingCombineBtn={flipButtonBorderLink}
															spacingCombineBtnHandler={handleButtonBorderCombineBtn}
															setAttributes={setAttributes}
														/>

														{/* Border radius Width */}
														<FB_Spacing
															label={__("Border Radius", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonBorderRadiusUnitsHandler}
															spacingUnits={flipBtnBorderradiusUnits}
															spacingDesktop={flipBtnDesktopBorderradiusWidth}
															spacingTablet={flipBtnTabBorderradiusWidth}
															spacingMobile={flipBtnMobileBorderradiusWidth}
															handleSpacingUnitHandler={handleButtonBorderRadiusUnitChange}
															spacingCombineBtn={btnBorderRadiusLink}
															spacingCombineBtnHandler={handleButtonBorderRadiusCombineBtn}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}
											</>
										)}
										{flipSelectedSide === 'back' && (
											<>
												{/* Flip Box Style */}
												<PanelBody
													title={__("Flip Box", "frontis-block")}
													initialOpen={false}
												>
													<FB_Range
														min={0}
														max={600}
														label={__("Width", "frontis-blocks")}
														rangeValue={flipBoxFrontWidth}
														onChangeHandler={(value) => setAttributes({ flipBoxFrontWidth: value })}
														rangeUnitHandler={(value) => setAttributes({ flipBoxFrontWidthUnits: value })}
														deviceType={deviceType}
														units={flipBoxFrontWidthUnits}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
													/>

													<FB_Range
														min={0}
														max={600}
														label={__("Height", "frontis-blocks")}
														rangeValue={flipBoxFrontHeight}
														onChangeHandler={(value) => setAttributes({ flipBoxFrontHeight: value })}
														rangeUnitHandler={(value) => setAttributes({ flipBoxFrontHeightUnits: value })}
														deviceType={deviceType}
														units={flipBoxFrontHeightUnits}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														units_types_arr={[
															{ label: 'px', value: 'px' },
															{ label: 'em', value: 'em' },
															{ label: 'rem', value: 'rem' },
															{ label: 'vh', value: 'vh' }
														]}
													/>

													{/*Background Color */}
													<FB_BackgroundColorControl
														bgColorSwitcher={flipBoxBackColorSwitcher}
														setBgColorSwitcher={(value) => setAttributes({ flipBoxBackColorSwitcher: value })}
														normalBackgroundType={flipBoxBackBackgroundType}
														setNormalBackgroundType={(value) => setAttributes({ flipBoxBackBackgroundType: value })}
														normalClassicColor={flipBoxBackClassicColor}
														setNormalClassicColor={(value) => setAttributes({ flipBoxBackClassicColor: value === undefined ? '' : value })}
														normalGradientColor={flipBoxBackGradientColor}
														setNormalGradientColor={(value) => setAttributes({ flipBoxBackGradientColor: value === undefined ? null : value })}
														normalCustomGradientSwitcher={flipBoxBackCustomGradientSwitcher}
														setNormalCustomGradientSwitcher={(value) => setAttributes({ flipBoxBackCustomGradientSwitcher: value })}
														normalCustomGradientInputValue={flipBoxBackCustomGradientInputValue}
														setNormalCustomGradientInputValue={(value) => setAttributes({ flipBoxBackCustomGradientInputValue: value })}
														normalBackgroundImageUrl={flipBoxBackBackgroundImageUrl}
														setNormalBackgroundImageUrl={(value) => setAttributes({ flipBoxBackBackgroundImageUrl: value })}
														normalBackgroundImageAlt={flipBoxBackBackgroundImageAlt}
														setNormalBackgroundImageAlt={(value) => setAttributes({ flipBoxBackBackgroundImageAlt: value })}
														normalBackgroundImageID={flipBoxBackBackgroundImageID}
														setNormalBackgroundImageID={(value) => setAttributes({ flipBoxBackBackgroundImageID: value })}
														normalBackgroundImagePosition={flipBoxBackBackgroundImagePosition}
														setNormalBackgroundImagePosition={(value) => setAttributes({ flipBoxBackBackgroundImagePosition: value })}
														normalBackgroundImageAttachment={flipBoxBackBackgroundImageAttachment}
														setNormalBackgroundImageAttachment={(value) => setAttributes({ flipBoxBackBackgroundImageAttachment: value })}
														normalBackgroundImageRepeat={flipBoxBackBackgroundImageRepeat}
														setNormalBackgroundImageRepeat={(value) => setAttributes({ flipBoxBackBackgroundImageRepeat: value })}
														normalBackgroundImageSize={flipBoxBackBackgroundImageSize}
														setNormalBackgroundImageSize={(value) => setAttributes({ flipBoxBackBackgroundImageSize: value })}
														hoverBackgroundType={flipBoxBackHoverBackgroundType}
														setHoverBackgroundType={(value) => setAttributes({ flipBoxBackHoverBackgroundType: value })}
														hoverClassicColor={flipBoxBackHoverClassicColor}
														setHoverClassicColor={(value) => setAttributes({ flipBoxBackHoverClassicColor: value === undefined ? '' : value })}
														hoverGradientColor={flipBoxBackHoverGradientColor}
														setHoverGradientColor={(value) => setAttributes({ flipBoxBackHoverGradientColor: value === undefined ? null : value })}
														hoverCustomGradientSwitcher={flipBoxBackHoverCustomGradientSwitcher}
														setHoverCustomGradientSwitcher={(value) => setAttributes({ flipBoxBackHoverCustomGradientSwitcher: value })}
														hoverCustomGradientInputValue={flipBoxBackHoverCustomGradientInputValue}
														setHoverCustomGradientInputValue={(value) => setAttributes({ flipBoxBackHoverCustomGradientInputValue: value })}
														hoverBackgroundImageUrl={flipBoxBackHoverBackgroundImageUrl}
														setHoverBackgroundImageUrl={(value) => setAttributes({ flipBoxBackHoverBackgroundImageUrl: value })}
														hoverBackgroundImageAlt={flipBoxBackHoverBackgroundImageAlt}
														setHoverBackgroundImageAlt={(value) => setAttributes({ flipBoxBackHoverBackgroundImageAlt: value })}
														hoverBackgroundImageID={flipBoxBackHoverBackgroundImageID}
														setHoverBackgroundImageID={(value) => setAttributes({ flipBoxBackHoverBackgroundImageID: value })}
														hoverBackgroundImagePosition={flipBoxBackHoverBackgroundImagePosition}
														setHoverBackgroundImagePosition={(value) => setAttributes({ flipBoxBackHoverBackgroundImagePosition: value })}
														hoverBackgroundImageAttachment={flipBoxBackHoverBackgroundImageAttachment}
														setHoverBackgroundImageAttachment={(value) => setAttributes({ flipBoxBackHoverBackgroundImageAttachment: value })}
														hoverBackgroundImageRepeat={flipBoxBackHoverBackgroundImageRepeat}
														setHoverBackgroundImageRepeat={(value) => setAttributes({ flipBoxBackHoverBackgroundImageRepeat: value })}
														hoverBackgroundImageSize={flipBoxBackHoverBackgroundImageSize}
														setHoverBackgroundImageSize={(value) => setAttributes({ flipBoxBackHoverBackgroundImageSize: value })}
													/>

													<FB_Spacing
														label={__("Padding", "Backis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleFlipBoxBackPaddingUnitsHandler}
														spacingUnits={flipBoxBackPaddingUnits}
														spacingDesktop={flipBoxBackPaddingDesktop}
														spacingTablet={flipBoxBackPaddingTablet}
														spacingMobile={flipBoxBackPaddingMobile}
														handleSpacingUnitHandler={handleFlipBoxBackPaddingUnitChange}
														spacingCombineBtn={flipBoxBackPaddingLink}
														spacingCombineBtnHandler={handleFlipBoxBackPaddingCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_Spacing
														label={__("Margin", "Backis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleFlipBoxBackMarginUnitsHandler}
														spacingUnits={flipBoxBackMarginUnits}
														spacingDesktop={flipBoxBackMarginDesktop}
														spacingTablet={flipBoxBackMarginTablet}
														spacingMobile={flipBoxBackMarginMobile}
														handleSpacingUnitHandler={handleFlipBoxBackMarginUnitChange}
														spacingCombineBtn={flipBoxBackMarginLink}
														spacingCombineBtnHandler={handleFlipBoxBackMarginCombineBtn}
														setAttributes={setAttributes}
													/>

													<SelectControl
														label={__("Border Style", "Backis-block")}
														value={flipBoxBackBorder}
														options={BORDER_STYLES}
														onChange={(value) =>
															setAttributes({ flipBoxBackBorder: value })
														}
													/>

													<FB_SwitcherControl
														label={__("Border Color", "Backis-blocks")}
														globalSwitcher={flipBoxBackBorderColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ flipBoxBackBorderColorSwitcher: value })}
													/>

													{flipBoxBackBorderColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "Backis-blocks")}
															globalColor={flipBoxBackBorderColor}
															setGlobalColor={(value) => setAttributes({ flipBoxBackBorderColor: value === undefined ? '' : value })}
														/>
													)}

													{flipBoxBackBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "Backis-blocks")}
															globalColor={flipBoxBackBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ flipBoxBackBorderHoverColor: value === undefined ? '' : value })}
														/>
													)}

													<FB_Spacing
														label={__("Border", "Backis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleFlipBoxBackBorderUnitsHandler}
														spacingUnits={flipBoxBackBorderUnits}
														spacingDesktop={flipBoxBackBorderDesktop}
														spacingTablet={flipBoxBackBorderTablet}
														spacingMobile={flipBoxBackBorderMobile}
														handleSpacingUnitHandler={handleFlipBoxBackBorderUnitChange}
														spacingCombineBtn={flipBoxBackBorderLink}
														spacingCombineBtnHandler={handleFlipBoxBackBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing
														label={__("Border Radius", "Backis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={
															handleFlipBoxBackBorderRadiusUnitsHandler
														}
														spacingUnits={flipBoxBackBorderRadiusUnits}
														spacingDesktop={flipBoxBackBorderRadiusDesktop}
														spacingTablet={flipBoxBackBorderRadiusTablet}
														spacingMobile={flipBoxBackBorderRadiusMobile}
														handleSpacingUnitHandler={
															handleFlipBoxBackBorderRadiusUnitChange
														}
														spacingCombineBtn={flipBoxBackBorderRadiusLink}
														spacingCombineBtnHandler={
															handleFlipBoxBackBorderRadiusCombineBtn
														}
														setAttributes={setAttributes}
													/>
												</PanelBody>
												{/*Image/Icon Style*/}
												{mediaSwitcherBack !== "none" && (
													<PanelBody
														title={__("Image/Icon", "frontis-block")}
														initialOpen={false}
													>
														<FB_Range
															min={0}
															max={500}
															label={__("Size", "frontis-blocks")}
															rangeValue={mediaBackSize}
															onChangeHandler={(value) =>
																setAttributes({ mediaBackSize: value })
															}
															rangeUnitHandler={(value) =>
																setAttributes({ mediaBackSizeUnits: value })
															}
															deviceType={deviceType}
															units={mediaBackSizeUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={""}
														/>

														{/*Icon Color */}
														{mediaSwitcherBack === "icon" && (
															<>
																<FB_SwitcherControl
																	label={__("Icon Color", "frontis-blocks")}
																	globalSwitcher={mediaBackIconColorSwitcher}
																	setGlobalSwitcher={(value) => setAttributes({ mediaBackIconColorSwitcher: value })}
																/>

																{mediaBackIconColorSwitcher === 'normal' && (
																	<FB_ColorControl
																		label={__("Normal Color", "frontis-blocks")}
																		globalColor={mediaBackIconColor}
																		setGlobalColor={(value) => setAttributes({ mediaBackIconColor: value === undefined ? '' : value })}
																	/>
																)}

																{mediaBackIconColorSwitcher === 'hover' && (
																	<FB_ColorControl
																		label={__("Hover Color", "frontis-blocks")}
																		globalColor={mediaBackIconHoverColor}
																		setGlobalColor={(value) => setAttributes({ mediaBackIconHoverColor: value === undefined ? '' : value })}
																	/>
																)}
															</>
														)}
														<FB_BackgroundColorControl
															bgColorSwitcher={mediaBackColorSwitcher}
															setBgColorSwitcher={(value) => setAttributes({ mediaBackColorSwitcher: value })}
															normalBackgroundType={mediaBackBackgroundType}
															setNormalBackgroundType={(value) => setAttributes({ mediaBackBackgroundType: value })}
															normalClassicColor={mediaBackClassicColor}
															setNormalClassicColor={(value) => setAttributes({ mediaBackClassicColor: value === undefined ? '' : value })}
															normalGradientColor={mediaBackGradientColor}
															setNormalGradientColor={(value) => setAttributes({ mediaBackGradientColor: value === undefined ? null : value })}
															normalCustomGradientSwitcher={mediaBackCustomGradientSwitcher}
															setNormalCustomGradientSwitcher={(value) => setAttributes({ mediaBackCustomGradientSwitcher: value })}
															normalCustomGradientInputValue={mediaBackCustomGradientInputValue}
															setNormalCustomGradientInputValue={(value) => setAttributes({ mediaBackCustomGradientInputValue: value })}
															normalBackgroundImageUrl={mediaBackBackgroundImageUrl}
															setNormalBackgroundImageUrl={(value) => setAttributes({ mediaBackBackgroundImageUrl: value })}
															normalBackgroundImageAlt={mediaBackBackgroundImageAlt}
															setNormalBackgroundImageAlt={(value) => setAttributes({ mediaBackBackgroundImageAlt: value })}
															normalBackgroundImageID={mediaBackBackgroundImageID}
															setNormalBackgroundImageID={(value) => setAttributes({ mediaBackBackgroundImageID: value })}
															normalBackgroundImagePosition={mediaBackBackgroundImagePosition}
															setNormalBackgroundImagePosition={(value) => setAttributes({ mediaBackBackgroundImagePosition: value })}
															normalBackgroundImageAttachment={mediaBackBackgroundImageAttachment}
															setNormalBackgroundImageAttachment={(value) => setAttributes({ mediaBackBackgroundImageAttachment: value })}
															normalBackgroundImageRepeat={mediaBackBackgroundImageRepeat}
															setNormalBackgroundImageRepeat={(value) => setAttributes({ mediaBackBackgroundImageRepeat: value })}
															normalBackgroundImageSize={mediaBackBackgroundImageSize}
															setNormalBackgroundImageSize={(value) => setAttributes({ mediaBackBackgroundImageSize: value })}
															hoverBackgroundType={mediaBackHoverBackgroundType}
															setHoverBackgroundType={(value) => setAttributes({ mediaBackHoverBackgroundType: value })}
															hoverClassicColor={mediaBackHoverClassicColor}
															setHoverClassicColor={(value) => setAttributes({ mediaBackHoverClassicColor: value === undefined ? '' : value })}
															hoverGradientColor={mediaBackHoverGradientColor}
															setHoverGradientColor={(value) => setAttributes({ mediaBackHoverGradientColor: value === undefined ? null : value })}
															hoverCustomGradientSwitcher={mediaBackHoverCustomGradientSwitcher}
															setHoverCustomGradientSwitcher={(value) => setAttributes({ mediaBackHoverCustomGradientSwitcher: value })}
															hoverCustomGradientInputValue={mediaBackHoverCustomGradientInputValue}
															setHoverCustomGradientInputValue={(value) => setAttributes({ mediaBackHoverCustomGradientInputValue: value })}
															hoverBackgroundImageUrl={mediaBackHoverBackgroundImageUrl}
															setHoverBackgroundImageUrl={(value) => setAttributes({ mediaBackHoverBackgroundImageUrl: value })}
															hoverBackgroundImageAlt={mediaBackHoverBackgroundImageAlt}
															setHoverBackgroundImageAlt={(value) => setAttributes({ mediaBackHoverBackgroundImageAlt: value })}
															hoverBackgroundImageID={mediaBackHoverBackgroundImageID}
															setHoverBackgroundImageID={(value) => setAttributes({ mediaBackHoverBackgroundImageID: value })}
															hoverBackgroundImagePosition={mediaBackHoverBackgroundImagePosition}
															setHoverBackgroundImagePosition={(value) => setAttributes({ mediaBackHoverBackgroundImagePosition: value })}
															hoverBackgroundImageAttachment={mediaBackHoverBackgroundImageAttachment}
															setHoverBackgroundImageAttachment={(value) => setAttributes({ mediaBackHoverBackgroundImageAttachment: value })}
															hoverBackgroundImageRepeat={mediaBackHoverBackgroundImageRepeat}
															setHoverBackgroundImageRepeat={(value) => setAttributes({ mediaBackHoverBackgroundImageRepeat: value })}
															hoverBackgroundImageSize={mediaBackHoverBackgroundImageSize}
															setHoverBackgroundImageSize={(value) => setAttributes({ mediaBackHoverBackgroundImageSize: value })}
														/>

														<FB_Range
															min={0}
															max={500}
															label={__("Background Width", "frontis-blocks")}
															rangeValue={mediaBackBgWidth}
															onChangeHandler={(value) =>
																setAttributes({ mediaBackBgWidth: value })
															}
															rangeUnitHandler={(value) =>
																setAttributes({ mediaBackBgWidthUnits: value })
															}
															deviceType={deviceType}
															units={mediaBackBgWidthUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={""}
														/>

														<FB_Range
															min={0}
															max={500}
															label={__("Background Height", "frontis-blocks")}
															rangeValue={mediaBackBgHeight}
															onChangeHandler={(value) =>
																setAttributes({ mediaBackBgHeight: value })
															}
															rangeUnitHandler={(value) =>
																setAttributes({ mediaBackBgHeightUnits: value })
															}
															deviceType={deviceType}
															units={mediaBackBgHeightUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={""}
														/>

														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleMediaBackPaddingUnitsHandler}
															spacingUnits={mediaBackPaddingUnits}
															spacingDesktop={mediaBackPaddingDesktop}
															spacingTablet={mediaBackPaddingTablet}
															spacingMobile={mediaBackPaddingMobile}
															handleSpacingUnitHandler={handleMediaBackPaddingUnitChange}
															spacingCombineBtn={mediaBackPaddingLink}
															spacingCombineBtnHandler={handleMediaBackPaddingCombineBtn}
															setAttributes={setAttributes}
														/>
														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleMediaBackMarginUnitsHandler}
															spacingUnits={mediaBackMarginUnits}
															spacingDesktop={mediaBackMarginDesktop}
															spacingTablet={mediaBackMarginTablet}
															spacingMobile={mediaBackMarginMobile}
															handleSpacingUnitHandler={handleMediaBackMarginUnitChange}
															spacingCombineBtn={mediaBackMarginLink}
															spacingCombineBtnHandler={handleMediaBackMarginCombineBtn}
															setAttributes={setAttributes}
														/>

														<SelectControl
															label={__("Border Style", "frontis-block")}
															value={mediaBackBorder}
															options={BORDER_STYLES}
															onChange={(value) =>
																setAttributes({ mediaBackBorder: value })
															}
														/>

														<FB_SwitcherControl
															label={__("Border Color", "frontis-blocks")}
															globalSwitcher={mediaBackBorderColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ mediaBackBorderColorSwitcher: value })}
														/>

														{mediaBackBorderColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={mediaBackBorderColor}
																setGlobalColor={(value) => setAttributes({ mediaBackBorderColor: value === undefined ? '' : value })}
															/>
														)}

														{mediaBackBorderColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={mediaBackBorderHoverColor}
																setGlobalColor={(value) => setAttributes({ mediaBackBorderHoverColor: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Border", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleMediaBackBorderUnitsHandler}
															spacingUnits={mediaBackBorderUnits}
															spacingDesktop={mediaBackBorderDesktop}
															spacingTablet={mediaBackBorderTablet}
															spacingMobile={mediaBackBorderMobile}
															handleSpacingUnitHandler={handleMediaBackBorderUnitChange}
															spacingCombineBtn={mediaBackBorderLink}
															spacingCombineBtnHandler={handleMediaBackBorderCombineBtn}
															setAttributes={setAttributes}
														/>

														<FB_Spacing
															label={__("Border Radius", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={
																handleMediaBackBorderRadiusUnitsHandler
															}
															spacingUnits={mediaBackBorderRadiusUnits}
															spacingDesktop={mediaBackBorderRadiusDesktop}
															spacingTablet={mediaBackBorderRadiusTablet}
															spacingMobile={mediaBackBorderRadiusMobile}
															handleSpacingUnitHandler={
																handleMediaBackBorderRadiusUnitChange
															}
															spacingCombineBtn={mediaBackBorderRadiusLink}
															spacingCombineBtnHandler={
																handleMediaBackBorderRadiusCombineBtn
															}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}
												
												{/*Heading Style*/}
												{titleSwitcherBack && (
													<PanelBody
														title={__("Title", "frontis-block")}
														initialOpen={false}
													>
														<FB_TypographyControl globalTypoControlActive={true} globalTypoSwitcher={headingBackGlobalTypoSwitcher}
															storeGlobalTypographyData={(value) => setAttributes({ headingBackGlobalTypographyData: value })}

															globalTypoType={headingBackGlobalTypoType}
															onChangeGlobalTypoType={(value) => {
																setAttributes({
																	headingBackGlobalTypoType: value,
																	headingBackGlobalTypoSwitcher: value === 'default' ? {
																		...headingBackGlobalTypoSwitcher, fontFamily: false, fontSize: false,
																		fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight:
																			false,
																	} : {
																		...headingBackGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true,
																		textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,
																	}
																})
															}}

															globalTypoOption={headingBackGlobalTypoOption}
															onChangeGlobalTypoOption={(value) => setAttributes({ headingBackGlobalTypoOption: value })}

															fontFamily={headingBackFontFamily}
															onChangeFontFamily={(value) => setAttributes({
																headingBackFontFamily: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, fontFamily: value && false
																}
															})}

															fontSize={headingBackFontSize}
															onChangeFontSize={(value) => setAttributes({
																headingBackFontSize: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, fontSize: value && false
																}
															})}

															fontSizeUnits={headingBackFontSizeUnits}
															onChangeFontSizeUnit={(value) => setAttributes({ headingBackFontSizeUnits: value })}

															fontWeight={headingBackFontWeight}
															onChangeFontWeight={(value) => setAttributes({
																headingBackFontWeight: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, fontWeight: value && false
																}
															})}

															fontStyle={headingBackFontStyle}
															onChangeFontStyle={(value) => setAttributes({
																headingBackFontStyle: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, fontStyle: value && false
																}
															})}

															textTransform={headingBackTextTransform}
															onChangeTextTransform={(value) => setAttributes({
																headingBackTextTransform: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, textTransform: value && false
																}
															})}

															textDecoration={headingBackTextDecoration}
															onChangeTextDecoration={(value) => setAttributes({
																headingBackTextDecoration: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, textDecoration: value && false
																}
															})}

															letterSpacing={headingBackLetterSpacing}
															onChangeLetterSpacing={(value) => setAttributes({
																headingBackLetterSpacing: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, letterSpacing: value && false
																}
															})}

															letterSpacingUnits={headingBackLetterSpacingUnits}
															onChangeLetterSpacingUnit={(value) => setAttributes({ headingBackLetterSpacingUnits: value })}

															lineHeight={headingBackLineHeight}
															onChangeLineHeight={(value) => setAttributes({
																headingBackLineHeight: value, headingBackGlobalTypoSwitcher: {
																	...headingBackGlobalTypoSwitcher, lineHeight: value && false
																}
															})}

															lineHeightUnits={headingBackLineHeightUnits}
															onChangeLineHeightUnit={(value) => setAttributes({ headingBackLineHeightUnits: value })}

															deviceType={deviceType}
															setAttributes={setAttributes}
														/>

														<FB_SwitcherControl
															label={__("Text Color", "frontis-blocks")}
															globalSwitcher={headingBackColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ headingBackColorSwitcher: value })}
														/>

														{headingBackColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={headingBackColor}
																setGlobalColor={(value) => setAttributes({ headingBackColor: value === undefined ? '' : value })}
															/>
														)}

														{headingBackColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={headingBackHoverColor}
																setGlobalColor={(value) => setAttributes({ headingBackHoverColor: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleheadingBackPaddingUnitsHandler}
															spacingUnits={headingBack_padding_units}
															spacingDesktop={headingBack_Desktop_padding}
															spacingTablet={headingBack_Tab_padding}
															spacingMobile={headingBack_Mobile_padding}
															handleSpacingUnitHandler={handleheadingBackPaddingUnitChange}
															spacingCombineBtn={paddingLink}
															spacingCombineBtnHandler={handleheadingBackPaddingCombineBtn}
															setAttributes={setAttributes}
														/>

														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleheadingBackMarginUnitsHandler}
															spacingUnits={headingBack_Margin_Units}
															spacingDesktop={headingBack_Desktop_Margin}
															spacingTablet={headingBack_Tab_Margin}
															spacingMobile={headingBack_Mobile_Margin}
															handleSpacingUnitHandler={handleheadingBackMarginUnitChange}
															spacingCombineBtn={headingBack_Margin_Link}
															spacingCombineBtnHandler={handleheadingBackMarginCombineBtn}
															setAttributes={setAttributes}
														/>

														{/*Border*/}
														<Heading>Border</Heading>
														<SelectControl
															label={__("Border Style", "frontis-block")}
															value={headingBack_Border}
															options={BORDER_STYLES}
															onChange={(value) =>
																setAttributes({ headingBack_Border: value })
															}
														/>

														<FB_SwitcherControl
															label={__("Border Color", "frontis-blocks")}
															globalSwitcher={headingBack_Border_Color_Switcher}
															setGlobalSwitcher={(value) => setAttributes({ headingBack_Border_Color_Switcher: value })}
														/>

														{headingBack_Border_Color_Switcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={headingBack_Border_Color}
																setGlobalColor={(value) => setAttributes({ headingBack_Border_Color: value === undefined ? '' : value })}
															/>
														)}

														{headingBack_Border_Color_Switcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={headingBack_Border_Hover_Color}
																setGlobalColor={(value) => setAttributes({ headingBack_Border_Hover_Color: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Border Width", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleheadingBackBorderUnitsHandler}
															spacingUnits={headingBack_Border_units}
															spacingDesktop={headingBack_Desktop_Border_Width}
															spacingTablet={headingBack_Tab_Border_Width}
															spacingMobile={headingBack_Mobile_Border_Width}
															handleSpacingUnitHandler={handleheadingBackBorderUnitChange}
															spacingCombineBtn={borderLink}
															spacingCombineBtnHandler={handleheadingBackBorderCombineBtn}
															setAttributes={setAttributes}
														/>

														<FB_Spacing
															label={__("Border Radius", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={
																handleheadingBackBorderRadiusUnitsHandler
															}
															spacingUnits={headingBack_Border_radius_units}
															spacingDesktop={headingBack_Desktop_Border_radius_Width}
															spacingTablet={headingBack_Tab_Border_radius_Width}
															spacingMobile={headingBack_Mobile_Border_radius_Width}
															handleSpacingUnitHandler={
																handleheadingBackBorderRadiusUnitChange
															}
															spacingCombineBtn={borderRadiusLink}
															spacingCombineBtnHandler={
																handleheadingBackBorderRadiusCombineBtn
															}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}
												
												{/*Description Style*/}
												{descSwitcherBack && (
													<PanelBody
														title={__("Description", "frontis-block")}
														initialOpen={false}
														className="fb-flip-box-desc-setting-wrapper"
													>
														{/*Typography*/}
														<FB_TypographyControl
															globalTypoControlActive={true}
															globalTypoSwitcher={subHeadingBackGlobalTypoSwitcher}
															storeGlobalTypographyData={(value) => setAttributes({ subHeadingBackGlobalTypographyData: value })}

															globalTypoType={subHeadingBackGlobalTypoType}
															onChangeGlobalTypoType={(value) => {
																setAttributes({
																	subHeadingBackGlobalTypoType: value,
																	subHeadingBackGlobalTypoSwitcher: value === 'default' ? { ...subHeadingBackGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...subHeadingBackGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
																})
															}}

															globalTypoOption={subHeadingBackGlobalTypoOption}
															onChangeGlobalTypoOption={(value) => setAttributes({ subHeadingBackGlobalTypoOption: value })}

															fontFamily={subHeadingBackFontFamily}
															onChangeFontFamily={(value) => setAttributes({ subHeadingBackFontFamily: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, fontFamily: value && false } })}

															fontSize={subHeadingBackFontSize}
															onChangeFontSize={(value) => setAttributes({ subHeadingBackFontSize: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, fontSize: value && false } })}

															fontSizeUnits={subHeadingBackFontSizeUnits}
															onChangeFontSizeUnit={(value) => setAttributes({ subHeadingBackFontSizeUnits: value })}

															fontWeight={subHeadingBackFontWeight}
															onChangeFontWeight={(value) => setAttributes({ subHeadingBackFontWeight: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, fontWeight: value && false } })}

															fontStyle={subHeadingBackFontStyle}
															onChangeFontStyle={(value) => setAttributes({ subHeadingBackFontStyle: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, fontStyle: value && false } })}

															textTransform={subHeadingBackTextTransform}
															onChangeTextTransform={(value) => setAttributes({ subHeadingBackTextTransform: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, textTransform: value && false } })}

															textDecoration={subHeadingBackTextDecoration}
															onChangeTextDecoration={(value) => setAttributes({ subHeadingBackTextDecoration: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, textDecoration: value && false } })}

															letterSpacing={subHeadingBackLetterSpacing}
															onChangeLetterSpacing={(value) => setAttributes({ subHeadingBackLetterSpacing: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, letterSpacing: value && false } })}

															letterSpacingUnits={subHeadingBackLetterSpacingUnits}
															onChangeLetterSpacingUnit={(value) => setAttributes({ subHeadingBackLetterSpacingUnits: value })}

															lineHeight={subHeadingBackLineHeight}
															onChangeLineHeight={(value) => setAttributes({ subHeadingBackLineHeight: value, subHeadingBackGlobalTypoSwitcher: { ...subHeadingBackGlobalTypoSwitcher, lineHeight: value && false } })}

															lineHeightUnits={subHeadingBackLineHeightUnits}
															onChangeLineHeightUnit={(value) => setAttributes({ subHeadingBackLineHeightUnits: value })}

															deviceType={deviceType}
															setAttributes={setAttributes}
														/>

														{/*Color*/}
														<FB_SwitcherControl
															label={__("Text Color", "frontis-blocks")}
															globalSwitcher={subHeadingBackColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ subHeadingBackColorSwitcher: value })}
														/>

														{subHeadingBackColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={subHeadingBackColor}
																setGlobalColor={(value) => setAttributes({ subHeadingBackColor: value === undefined ? '' : value })}
															/>
														)}

														{subHeadingBackColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={subHeadingBackHoverColor}
																setGlobalColor={(value) => setAttributes({ subHeadingBackHoverColor: value === undefined ? '' : value })}
															/>
														)}

														{/*Spacing*/}
														<Heading>Spacing</Heading>
														{/* Padding */}
														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleDescBackPaddingUnitsHandler}
															spacingUnits={subHeadingBackPaddingUnits}
															spacingDesktop={subHeadingBackDesktopPadding}
															spacingTablet={subHeadingBackTabPadding}
															spacingMobile={subHeadingBackMobilePadding}
															handleSpacingUnitHandler={handleDescBackPaddingUnitChange}
															spacingCombineBtn={subHeadingBackPaddingLink}
															spacingCombineBtnHandler={handleDescBackPaddingCombineBtn}
															setAttributes={setAttributes}
														/>
														{/* Margin */}
														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleDescBackMarginUnitsHandler}
															spacingUnits={descBackMarginUnits}
															spacingDesktop={descBackDesktopMargin}
															spacingTablet={descBackTabMargin}
															spacingMobile={descBackMobileMargin}
															handleSpacingUnitHandler={handleDescBackMarginUnitChange}
															spacingCombineBtn={descBackMarginLink}
															spacingCombineBtnHandler={handleDescBackMarginCombineBtn}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}

												{/*Button Style*/}
												{flipBack_Button_Switcher && (
													<PanelBody
														title={__("Button", "frontis-block")}
														className="fb-flip-box-button-setting-wrapper"
														initialOpen={false}
													>
														<FB_TypographyControl
															globalTypoControlActive={true}
															globalTypoSwitcher={buttonBackGlobalTypoSwitcher}
															storeGlobalTypographyData={(value) => setAttributes({ buttonBackGlobalTypographyData: value })}

															globalTypoType={buttonBackGlobalTypoType}
															onChangeGlobalTypoType={(value) => {
																setAttributes({
																	buttonBackGlobalTypoType: value,
																	buttonBackGlobalTypoSwitcher: value === 'default' ? { ...buttonBackGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...buttonBackGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
																})
															}}

															globalTypoOption={buttonBackGlobalTypoOption}
															onChangeGlobalTypoOption={(value) => setAttributes({ buttonBackGlobalTypoOption: value })}

															fontFamily={buttonBackFontFamily}
															onChangeFontFamily={(value) => setAttributes({ buttonBackFontFamily: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, fontFamily: value && false } })}

															fontSize={buttonBackFontSize}
															onChangeFontSize={(value) => setAttributes({ buttonBackFontSize: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, fontSize: value && false } })}

															fontSizeUnits={buttonBackFontSizeUnits}
															onChangeFontSizeUnit={(value) => setAttributes({ buttonBackFontSizeUnits: value })}

															fontWeight={buttonBackFontWeight}
															onChangeFontWeight={(value) => setAttributes({ buttonBackFontWeight: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, fontWeight: value && false } })}

															fontStyle={buttonBackFontStyle}
															onChangeFontStyle={(value) => setAttributes({ buttonBackFontStyle: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, fontStyle: value && false } })}

															textTransform={buttonBackTextTransform}
															onChangeTextTransform={(value) => setAttributes({ buttonBackTextTransform: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, textTransform: value && false } })}

															textDecoration={buttonBackTextDecoration}
															onChangeTextDecoration={(value) => setAttributes({ buttonBackTextDecoration: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, textDecoration: value && false } })}

															letterSpacing={buttonBackLetterSpacing}
															onChangeLetterSpacing={(value) => setAttributes({ buttonBackLetterSpacing: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, letterSpacing: value && false } })}

															letterSpacingUnits={buttonBackLetterSpacingUnits}
															onChangeLetterSpacingUnit={(value) => setAttributes({ buttonBackLetterSpacingUnits: value })}

															lineHeight={buttonBackLineHeight}
															onChangeLineHeight={(value) => setAttributes({ buttonBackLineHeight: value, buttonBackGlobalTypoSwitcher: { ...buttonBackGlobalTypoSwitcher, lineHeight: value && false } })}

															lineHeightUnits={buttonBackLineHeightUnits}
															onChangeLineHeightUnit={(value) => setAttributes({ buttonBackLineHeightUnits: value })}

															deviceType={deviceType}
															setAttributes={setAttributes}
														/>


														{/* Start Text Color*/}
														<FB_SwitcherControl
															label={__("Text Color", "frontis-blocks")}
															globalSwitcher={buttonBackColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ buttonBackColorSwitcher: value })}
														/>

														{buttonBackColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={buttonBackTextColor}
																setGlobalColor={(value) => setAttributes({ buttonBackTextColor: value === undefined ? '' : value })}
															/>
														)}

														{buttonBackColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={buttonBackTextHoverColor}
																setGlobalColor={(value) => setAttributes({ buttonBackTextHoverColor: value === undefined ? '' : value })}
															/>
														)}

														{/* Start buttonBack Bg Color*/}
														<FB_SwitcherControl
															label={__("Background Color", "frontis-blocks")}
															globalSwitcher={buttonBackBgColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ buttonBackBgColorSwitcher: value })}
														/>

														{buttonBackBgColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={buttonBackBgColor}
																setGlobalColor={(value) => setAttributes({ buttonBackBgColor: value === undefined ? '' : value })}
															/>
														)}

														{buttonBackBgColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={buttonBackBgHoverColor}
																setGlobalColor={(value) => setAttributes({ buttonBackBgHoverColor: value === undefined ? '' : value })}
															/>
														)}

														{/* Button Icon color */}
														{buttonBackIconSwitcher && <>
															<FB_SwitcherControl
																label={__("Icon Color", "frontis-blocks")}
																globalSwitcher={buttonBackIconSwitcher}
																setGlobalSwitcher={(value) => setAttributes({ buttonBackIconSwitcher: value })}
															/>

															{btnBackIconColorSwitcher === 'normal' && (
																<FB_ColorControl
																	label={__("Normal Color", "frontis-blocks")}
																	globalColor={btnBackIconColor}
																	setGlobalColor={(value) => setAttributes({ btnBackIconColor: value === undefined ? '' : value })}
																/>
															)}

															{btnBackIconColorSwitcher === 'hover' && (
																<FB_ColorControl
																	label={__("Hover Color", "frontis-blocks")}
																	globalColor={btnBackIconHoverColor}
																	setGlobalColor={(value) => setAttributes({ btnBackIconHoverColor: value === undefined ? '' : value })}
																/>
															)}

															<FB_Range
																min={0}
																max={500}
																label={__("Icon Size", "frontis-blocks")}
																rangeValue={btnBackIconSize}
																onChangeHandler={(value) => setAttributes({ btnBackIconSize: value })}
																rangeUnitHandler={(value) => setAttributes({ btnBackIconSizeUnits: value })}
																deviceType={deviceType}
																units={btnBackIconSizeUnits}
																setAttributes={setAttributes}
																rangeStep={1}
																resetFallbackValue={""}
															/>

															<FB_Range
																min={0}
																max={500}
																label={__("Icon Gap", "frontis-blocks")}
																rangeValue={btnBackIconGap}
																onChangeHandler={(value) => setAttributes({ btnBackIconGap: value })}
																rangeUnitHandler={(value) => setAttributes({ btnBackIconGapUnits: value })}
																deviceType={deviceType}
																units={btnBackIconGapUnits}
																setAttributes={setAttributes}
																rangeStep={1}
																resetFallbackValue={""}
															/>

															<FB_SwitcherControl
																label={__("Icon Rotation", "frontis-blocks")}
																globalSwitcher={buttonBackIconRotateSwitcher}
																setGlobalSwitcher={(value) => setAttributes({ buttonBackIconRotateSwitcher: value })}
															/>

															{buttonBackIconRotateSwitcher === 'normal' && (
																<FB_Range
																	min={-360}
																	max={360}
																	label={__("Icon Rotation", "frontis-blocks")}
																	rangeValue={buttonBackIconRotate}
																	onChangeHandler={(value) => setAttributes({ buttonBackIconRotate: value === 0 ? undefined : value })}
																	deviceType={deviceType}
																	setAttributes={setAttributes}
																	rangeStep={1}
																	resetFallbackValue={""}
																	isRangeUnit={false}

																/>
															)}

															{buttonBackIconRotateSwitcher === 'hover' && (
																<FB_Range
																	min={-360}
																	max={360}
																	label={__("Icon Rotation", "frontis-blocks")}
																	rangeValue={buttonBackIconRotateHover}
																	onChangeHandler={(value) => setAttributes({ buttonBackIconRotateHover: value === 0 ? undefined : value })}
																	deviceType={deviceType}
																	setAttributes={setAttributes}
																	rangeStep={1}
																	resetFallbackValue={""}
																	isRangeUnit={false}
																/>
															)}
														</>}

														<FB_Spacing
															label={__("Padding", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonBackPaddingUnitsHandler}
															spacingUnits={flipButtonBackPaddingUnits}
															spacingDesktop={flipButtonBackDesktopPadding}
															spacingTablet={flipButtonBackTabPadding}
															spacingMobile={flipButtonBackMobilePadding}
															handleSpacingUnitHandler={handleButtonBackPaddingUnitChange}
															spacingCombineBtn={flipButtonBackPaddingLink}
															spacingCombineBtnHandler={handleButtonBackPaddingCombineBtn}
															setAttributes={setAttributes}
														/>
														<FB_Spacing
															label={__("Margin", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonBackMarginUnitsHandler}
															spacingUnits={flipButtonBackMarginUnits}
															spacingDesktop={flipButtonBackDesktopMargin}
															spacingTablet={flipButtonBackTabMargin}
															spacingMobile={flipButtonBackMobileMargin}
															handleSpacingUnitHandler={handleButtonBackMarginUnitChange}
															spacingCombineBtn={flipButtonBackMarginLink}
															spacingCombineBtnHandler={handleButtonBackMarginCombineBtn}
															setAttributes={setAttributes}
														/>
														{/* Border Width */}

														<SelectControl
															label={__("Border Style", "frontis-block")}
															value={flipButtonBackBorder}
															options={BORDER_STYLES}
															onChange={(value) =>
																setAttributes({ flipButtonBackBorder: value })
															}
														/>

														<FB_SwitcherControl
															label={__("Border Color", "frontis-blocks")}
															globalSwitcher={flipButtonBackBorderColorSwitcher}
															setGlobalSwitcher={(value) => setAttributes({ flipButtonBackBorderColorSwitcher: value })}
														/>

														{flipButtonBackBorderColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={flipButtonBackBorderColor}
																setGlobalColor={(value) => setAttributes({ flipButtonBackBorderColor: value === undefined ? '' : value })}
															/>
														)}

														{flipButtonBackBorderColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={flipButtonBackHoverBorderColor}
																setGlobalColor={(value) => setAttributes({ flipButtonBackHoverBorderColor: value === undefined ? '' : value })}
															/>
														)}

														<FB_Spacing
															label={__("Border Width", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonBackBorderUnitsHandler}
															spacingUnits={flipButtonBackBorderUnits}
															spacingDesktop={flipButtonBackDesktopBorderWidth}
															spacingTablet={flipButtonBackTabBorderWidth}
															spacingMobile={flipButtonBackMobileBorderWidth}
															handleSpacingUnitHandler={handleButtonBackBorderUnitChange}
															spacingCombineBtn={flipButtonBackBorderLink}
															spacingCombineBtnHandler={handleButtonBackBorderCombineBtn}
															setAttributes={setAttributes}
														/>

														{/* Border radius Width */}
														<FB_Spacing
															label={__("Border Radius", "frontis-blocks")}
															deviceType={deviceType}
															spacingUnitsHandler={handleButtonBackBorderRadiusUnitsHandler}
															spacingUnits={flipBtnBackBorderradiusUnits}
															spacingDesktop={flipBtnBackDesktopBorderradiusWidth}
															spacingTablet={flipBtnBackTabBorderradiusWidth}
															spacingMobile={flipBtnBackMobileBorderradiusWidth}
															handleSpacingUnitHandler={handleButtonBackBorderRadiusUnitChange}
															spacingCombineBtn={btnBackBorderRadiusLink}
															spacingCombineBtnHandler={handleButtonBackBorderRadiusCombineBtn}
															setAttributes={setAttributes}
														/>
													</PanelBody>
												)}
											</>
										)}
									</>

								)}
								{tab.name === "advance" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Z Index", "frontis-blocks")}
													initialOpen={true}
													className="fb-setting-z-index-header"
												>
													<FB_Range
														min={0}
														max={10000000}
														label={__("Z Index", "frontis-blocks")}
														rangeValue={globalZIndex}
														onChangeHandler={(value) => setAttributes({ globalZIndex: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={''}
														isRangeUnit={false}
													/>

													<SelectControl
														label={__("Overflow", "frontis-blocks")}
														value={flipBoxOverflow}
														options={OVERFLOW_OP}
														onChange={(value) => setAttributes({ flipBoxOverflow: value })}
													/>

													<FB_PositionControl
														deviceType={deviceType}
														positionType={flipBoxPositionType}
														setPositionType={(value) => setAttributes({ flipBoxPositionType: value })}

														HZOrientationType={flipBoxHZOrientationType}
														setHZOrientationType={(value) =>
															setAttributes({ flipBoxHZOrientationType: value })
														}
														VROrientationType={flipBoxVROrientationType}
														setVROrientationType={(value) =>
															setAttributes({ flipBoxVROrientationType: value })
														}

														HZLeftOffset={flipBoxHZLeftOffset}
														setHZLeftOffset={(value) => setAttributes({ flipBoxHZLeftOffset: value })}
														HZLeftOffsetUnits={flipBoxHZLeftOffsetUnits}
														setHZLeftOffsetUnits={(value) => setAttributes({ flipBoxHZLeftOffsetUnits: value })}
														HZRightOffset={flipBoxHZRightOffset}
														setHZRightOffset={(value) => setAttributes({ flipBoxHZRightOffset: value })}
														HZRightOffsetUnits={flipBoxHZRightOffsetUnits}
														setHZRightOffsetUnits={(value) => setAttributes({ flipBoxHZRightOffsetUnits: value })}

														VRTopOffset={flipBoxVRTopOffset}
														setVRTopOffset={(value) => setAttributes({ flipBoxVRTopOffset: value })}
														VRTopOffsetUnits={flipBoxVRTopOffsetUnits}
														setVRTopOffsetUnits={(value) => setAttributes({ flipBoxVRTopOffsetUnits: value })}
														VRBottomOffset={flipBoxVRBottomOffset}
														setVRBottomOffset={(value) => setAttributes({ flipBoxVRBottomOffset: value })}
														VRBottomOffsetUnits={flipBoxVRBottomOffsetUnits}
														setVRBottomOffsetUnits={(value) => setAttributes({ flipBoxVRBottomOffsetUnits: value })}

														setAttributes={setAttributes}
													/>

													<FB_InputControl
														label={__("CSS ID", "frontis-blocks")}
														value={flipBoxGlobalWraperID}
														onChangeValue={(value) => setAttributes({ flipBoxGlobalWraperID: value })}
														helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
													/>

													<FB_InputControl
														label={__("CSS Class", "frontis-blocks")}
														value={flipBoxGlobalWraperClass}
														onChangeValue={(value) => setAttributes({ flipBoxGlobalWraperClass: value })}
														helpText={__("Separate with spaces key.", "frontis-blocks")}
													/>

												</PanelBody>

												<PanelBody
													title={__("Padding and Margin", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_Spacing
														label={__("Padding", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={
															handleGlobalPaddingUnitsHandler
														}
														spacingUnits={globalPaddingUnits}
														spacingDesktop={globalPaddingDesktop}
														spacingTablet={globalPaddingTablet}
														spacingMobile={globalPaddingMobile}
														handleSpacingUnitHandler={
															handleGlobalPaddingUnitChange
														}
														spacingCombineBtn={globalPaddingLink}
														spacingCombineBtnHandler={
															handleGlobalPaddingCombineBtn
														}
														setAttributes={setAttributes}
													/>
													<FB_Spacing
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalMarginUnitsHandler}
														spacingUnits={globalMarginUnits}
														spacingDesktop={globalMarginDesktop}
														spacingTablet={globalMarginTablet}
														spacingMobile={globalMarginMobile}
														handleSpacingUnitHandler={
															handleGlobalMarginUnitChange
														}
														spacingCombineBtn={globalMarginLink}
														spacingCombineBtnHandler={
															handleGlobalMarginCombineBtn
														}
														setAttributes={setAttributes}
													/>
												</PanelBody>

												<PanelBody title="Background Color" initialOpen={false}>
													<FB_SwitcherControl
														label={__("Background Color", "frontis-blocks")}
														globalSwitcher={globalBgColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ globalBgColorSwitcher: value })}
													/>

													{globalBgColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={globalBgColor}
															setGlobalColor={(value) => setAttributes({ globalBgColor: value === undefined ? '' : value })}
														/>
													)}

													{globalBgColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={globalBgHoverColor}
															setGlobalColor={(value) => setAttributes({ globalBgHoverColor: value === undefined ? '' : value })}
														/>
													)}
												</PanelBody>
												<PanelBody
													title={__("Border and Shadow", "frontis-blocks")}
													initialOpen={false}
												>
													<SelectControl
														label={__("Border Style", "frontis-blocks")}
														value={globalBorder}
														options={BORDER_STYLES}
														onChange={(value) =>
															setAttributes({ globalBorder: value })
														}
													/>

													<FB_SwitcherControl
														label={__("Border Color", "frontis-blocks")}
														globalSwitcher={globalBorderColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ globalBorderColorSwitcher: value })}
													/>

													{globalBorderColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={globalBorderColor}
															setGlobalColor={(value) => setAttributes({ globalBorderColor: value === undefined ? '' : value })}
														/>
													)}

													{globalBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={globalBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ globalBorderHoverColor: value === undefined ? '' : value })}
														/>
													)}

													<FB_Spacing
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderUnitsHandler}
														spacingUnits={globalBorderUnits}
														spacingDesktop={globalBorderDesktop}
														spacingTablet={globalBorderTablet}
														spacingMobile={globalBorderMobile}
														handleSpacingUnitHandler={
															handleGlobalBorderUnitChange
														}
														spacingCombineBtn={globalBorderLink}
														spacingCombineBtnHandler={
															handleGlobalBorderCombineBtn
														}
														setAttributes={setAttributes}
													/>

													<FB_Spacing
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={
															handleGlobalBorderRadiusUnitsHandler
														}
														spacingUnits={globalBorderRadiusUnits}
														spacingDesktop={globalBorderRadiusDesktop}
														spacingTablet={globalBorderRadiusTablet}
														spacingMobile={globalBorderRadiusMobile}
														handleSpacingUnitHandler={
															handleGlobalBorderRadiusUnitChange
														}
														spacingCombineBtn={globalBorderRadiusLink}
														spacingCombineBtnHandler={
															handleGlobalBorderRadiusCombineBtn
														}
														setAttributes={setAttributes}
													/>

													<FB_SwitcherControl
														label={__("Box Shadow", "frontis-blocks")}
														globalSwitcher={boxGlobalBoxShadowSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ boxGlobalBoxShadowSwitcher: value })}
													/>

													{boxGlobalBoxShadowSwitcher === 'normal' && (
														<FB_BoxShadowControl
															label={__("Normal Shadow", "frontis-blocks")}
															onBoxShadowChange={(value) =>
																setAttributes({ boxGlobalBoxShadowValues: value })
															}
															initialShadowValue={boxGlobalBoxShadowValues}
															onBoxShadowStyleChange={(value) =>
																setAttributes({
																	boxGlobalBoxShadowCssValue: value,
																})
															}
														/>
													)}

													{boxGlobalBoxShadowSwitcher === 'hover' && (
														<FB_BoxShadowControl
															label={__("Hover Shadow", "frontis-blocks")}
															onBoxShadowChange={(value) =>
																setAttributes({ boxGlobalHoverBoxShadowValues: value })
															}
															initialShadowValue={boxGlobalHoverBoxShadowValues}
															onBoxShadowStyleChange={(value) =>
																setAttributes({
																	boxGlobalHoverBoxShadowCssValue: value,
																})
															}
														/>
													)}
												</PanelBody>

												<PanelBody
													title={__("Responsive Control", "frontis-blocks")}
													initialOpen={false}
													className="fb-setting-responsive-control-wrapper"
												>
													<FB_VisibilityControl
														desktopValue={flipBoxDesktopSwitcher}
														setDesktopValue={(value) => setAttributes({ flipBoxDesktopSwitcher: value })}

														tabletValue={flipBoxTabletSwitcher}
														setTabletValue={(value) => setAttributes({ flipBoxTabletSwitcher: value })}

														mobileValue={flipBoxMobileSwitcher}
														setMobileValue={(value) => setAttributes({ flipBoxMobileSwitcher: value })}
													/>
												</PanelBody>
												<PanelBody
													title={__("Custom CSS", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_CustomCSSEditor
														value={flipBoxGlobalCustomCSS}
														onChangeValue={(value) => setAttributes({ flipBoxGlobalCustomCSS: value })}
													/>
												</PanelBody>
											</div>
										</div>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}
