import { __ } from "@wordpress/i18n";

import {
	SelectControl,
	PanelBody,
	BaseControl,
	ToggleControl,
	TextareaControl,
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
	INFO_ICON_POSITION,
	INFO_ICON_VERTICAL_POSITION,
	INFO_WRAP_ALIGNMENT,
	PRESETS,
	OVERFLOW_OP
} from "./constants/constants";

import { useEffect, useMemo, memo } from "@wordpress/element";

import FBIconPicker from "../../components/icon-picker";
import FB_Range from "@Components/range";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Spacing from "@Components/spacing";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_UrlControl from "@Components/url-control";
import FB_TypographyControl from '@Components/typography-control';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_ColorControl from "../../components/color-control";
import FB_SwitcherControl from "../../components/switcher-control";
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ImageControl from '@Components/image-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';
import FB_Presets from '@Components/presets';
import './editor.scss';
import {infoBoxPresets} from './preset';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		infoBoxPresetStyle,
		Heading_Text,
		headingTag,
		Heading_Background_Color,
		Alignment,
		Sub_Heading_Switcher,
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

		info_Button_Switcher,
		info_Button_Text,
		info_Button_Link,
		wrapperAlignment,
		descAlignment,
		buttonAlignment,
		infoBoxBg,

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

		infoBoxPaddingUnits,
		infoBoxDesktopPadding,
		infoBoxTabPadding,
		infoBoxMobilePadding,
		infoBoxBorderUnits,
		infoBoxDesktopBorderWidth,
		infoBoxTabBorderWidth,
		infoBoxMobileBorderWidth,

		infoBoxBorderRadiusUnits,
		infoBoxDesktopBorderRadiusWidth,
		infoBoxTabBorderRadiusWidth,
		infoBoxMobileBorderRadiusWidth,

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

		infoButtonMarginLink,
		infoButtonMarginUnits,
		infoButtonDesktopMargin,
		infoButtonTabMargin,
		infoButtonMobileMargin,
		infoButtonActiveMarginDevice,

		infoButtonPaddingUnits,
		infoButtonDesktopPadding,
		infoButtonTabPadding,
		infoButtonMobilePadding,
		infoButtonPaddingLink,
		infoButtonLink,
		infobtnTargetUrl,
		icon,
		frontendIcon,
		btnIcon,
		frontendBtnIcon,
		btnImageUrl,
		btnImageAlt,
		btnImageID,
		width,
		mediaSwitcher,
		contentAlignment,

		infoButtonBorder,
		infoBoxMarginUnits,
		infoBoxDesktopMargin,
		infoBoxTabMargin,
		infoBoxMobileMargin,
		infoBoxMarginLink,
		infoButtonBorderUnits,
		infoButtonDesktopBorderWidth,
		infoButtonTabBorderWidth,
		infoButtonMobileBorderWidth,
		infoBtnBorderradiusUnits,
		infoBtnDesktopBorderradiusWidth,
		infoBtnTabBorderradiusWidth,
		infoBtnMobileBorderradiusWidth,
		infoButtonBorderColorSwitcher,
		infoButtonBorderColor,
		infoButtonHoverBorderColor,
		boxBgColor,
		boxBgColorSwitcher,
		boxBgHoverColor,
		globalZIndex,
		infoBoxOverflow,
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

		mediaSize,
		mediaSizeUnits,
		mediaHeight,
		mediaHeightUnits,

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
		buttonIconType,
		btnIconColor,
		btnIconHoverColor,
		btnIconColorSwitcher,
		btnIconPosition,
		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,
		infoIconPosition,

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
		infoMediaID,
		infoMediaAlt,
		infoMediaUrl,
		infoMediaSize,
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
		infoButtonBorderLink,
		infoIconVerticalPosition,
		infoCardAlignment,

		infoBoxDesktopSwitcher,
		infoBoxTabletSwitcher,
		infoBoxMobileSwitcher,

		infoBoxGlobalCustomCSS,
		infoBoxGlobalWraperID,
		infoBoxGlobalWraperClass,

		// Position
		infoBoxPositionType,
		infoBoxHZOrientationType,
		infoBoxVROrientationType,
		infoBoxHZLeftOffset,
		infoBoxHZLeftOffsetUnits,
		infoBoxHZRightOffset,
		infoBoxHZRightOffsetUnits,
		infoBoxVRTopOffset,
		infoBoxVRTopOffsetUnits,
		infoBoxVRBottomOffset,
		infoBoxVRBottomOffsetUnits,

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
	} = attributes;

	const deviceType = useDeviceType();

	/** Info Image */
	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/avatar.png';
	}

	// Set default value for teamMemberBackgroundImageUrl
	useEffect(() => {
		if (!infoMediaUrl) {
			setAttributes({ infoMediaUrl: defaultImageUrl });
		}
	}, []);

	const iconHandler = (iconName) => {
		setAttributes({ icon: iconName });
	};
	const buttonIconHandler = (iconName) => {
		setAttributes({ btnIcon: iconName });
	};

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
				dynamicTitleEnableLink: false,
				dynamicDescriptionEnabled: false,
				dynamicDescriptionEnableLink: false,
				dynamicBtnEnabled: false,
				dynamicBtnEnableLink: false,
			});
		}
	}, [getProActiveState]);

	/**
	 * Toggle Controls for Dynamic Content
	 */
	const dynamicTitleContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-info-box-dynamic-title-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicTitleEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'info-box-dynamic-title-content',
		isProActive : getProActiveState
	});

	const dynamicDescriptionContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-info-box-dynamic-description-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicDescriptionEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'info-box-dynamic-description-content',
		isProActive : getProActiveState
	});

	const dynamicBtnContentToggleControls = getProToggleControls({ 
		hook: 'frontisblocks-info-box-dynamic-btn-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBtnEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'info-box-dynamic-btn-content',
		isProActive : getProActiveState
	});

	/** Start Preset Style **/
	const changeInfoBoxPreset = (selectedPreset) => {
		const presetConfigurations = {
			"preset-1": {
				info_Button_Switcher: true,
				info_Button_Text: 'Learn more',
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
				buttonTextHoverColor: '#ffffff',
				btnIconColor: '#399CFF',
				btnIconHoverColor: '#ffffff',
				buttonBgColor: '',
				buttonBgHoverColor: '',
				btnIcon: 'arrow-left',
				buttonIconRotate: {
					Desktop: "145",
					Tablet: "145",
					Mobile: "145",
				},
				btnIconPosition: 'right',
				infoButtonDesktopMargin: {
					top: "0",
					bottom: "0",
					left: "16",
					right: "16",
				},
				infoButtonDesktopPadding: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				infoBtnDesktopBorderradiusWidth: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				mediaBorderRadiusDesktop: {
					top: "50",
					bottom: "50",
					left: "50",
					right: "50",
				},
			},
			"preset-2": {
				info_Button_Switcher: false,
				info_Button_Text: 'Learn more',
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
				info_Button_Switcher: false,
				info_Button_Text: 'Learn more',
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
				info_Button_Switcher: true,
				info_Button_Text: 'Learn more',
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
				buttonTextHoverColor: '#ffffff',
				btnIconColor: '#F89B2E',
				btnIconHoverColor: '#ffffff',
				buttonBgColor: '',
				buttonBgHoverColor: '',
				btnIcon: 'arrow-left',
				buttonIconRotate: {
					Desktop: "145",
					Tablet: "145",
					Mobile: "145",
				},
				btnIconPosition: 'right',
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
				info_Button_Switcher: true,
				info_Button_Text: 'Learn more',
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
				buttonBgColor: '',
				buttonBgHoverColor: '',
				btnIcon: 'arrow-left',
				buttonIconRotate: {
					Desktop: "145",
					Tablet: "145",
					Mobile: "145",
				},
				btnIconPosition: 'right',
				infoButtonDesktopMargin: {
					top: "0",
					bottom: "0",
					left: "16",
					right: "16",
				},
				infoButtonDesktopPadding: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
				infoBtnDesktopBorderradiusWidth: {
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
				},
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
				infoBoxPresetStyle: selectedPreset,
				...selectedPresetConfig,
			});
		} else {
			console.warn(`Info Box: Preset "${selectedPreset}" not found.`);
		}
	};
	/** End Preset Style **/

	/**
	* Preset Styles Data Object
	*/
	const presetStyles = {
		'preset-1': {
			info_Button_Switcher: true,
			info_Button_Text: 'Learn more',
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
			buttonTextHoverColor: '#ffffff',
			btnIconColor: '#399CFF',
			btnIconHoverColor: '#ffffff',
			buttonBgColor: '',
			buttonBgHoverColor: '',
			btnIcon: 'arrow-left',
			buttonIconRotate: {
				Desktop: "145",
				Tablet: "145",
				Mobile: "145",
			},
			btnIconPosition: 'right',
			infoButtonDesktopMargin: {
				top: "0",
				bottom: "0",
				left: "16",
				right: "16",
			},
			infoButtonDesktopPadding: {
				top: "0",
				bottom: "0",
				left: "0",
				right: "0",
			},
			infoBtnDesktopBorderradiusWidth: {
				top: "0",
				bottom: "0",
				left: "0",
				right: "0",
			},
			mediaBorderRadiusDesktop: {
				top: "50",
				bottom: "50",
				left: "50",
				right: "50",
			},
		},
	  
		'preset-2': {
			info_Button_Switcher: false,
			info_Button_Text: 'Learn more',
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
			info_Button_Switcher: false,
			info_Button_Text: 'Learn more',
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
			info_Button_Switcher: true,
			info_Button_Text: 'Learn more',
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
			buttonTextHoverColor: '#ffffff',
			btnIconColor: '#F89B2E',
			btnIconHoverColor: '#ffffff',
			buttonBgColor: '',
			buttonBgHoverColor: '',
			btnIcon: 'arrow-left',
			buttonIconRotate: {
				Desktop: "145",
				Tablet: "145",
				Mobile: "145",
			},
			btnIconPosition: 'right',
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
			info_Button_Switcher: true,
			info_Button_Text: 'Learn more',
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
			buttonBgColor: '',
			buttonBgHoverColor: '',
			btnIcon: 'arrow-left',
			buttonIconRotate: {
				Desktop: "145",
				Tablet: "145",
				Mobile: "145",
			},
			btnIconPosition: 'right',
			infoButtonDesktopMargin: {
				top: "0",
				bottom: "0",
				left: "16",
				right: "16",
			},
			infoButtonDesktopPadding: {
				top: "0",
				bottom: "0",
				left: "0",
				right: "0",
			},
			infoBtnDesktopBorderradiusWidth: {
				top: "0",
				bottom: "0",
				left: "0",
				right: "0",
			},
			globalBorderRadiusDesktop: {
				top: "",
				bottom: "",
				left: "",
				right: "",
			},
		},
	};
	  
	const infoBoxPresets = [
		{
			value: 'preset-1',
			label: __('Preset 1', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<rect x="24" y="23" width="300" height="230" rx="14" fill="white" fill-opacity="0.4"/>
						<rect x="44" y="43" width="44" height="44" rx="22" fill="white"/>
						<g clip-path="url(#clip0_16980_14882)">
						<path fillRule="evenodd" clipRule="evenodd" d="M58.3881 54.8457C57.7148 54.8457 57.0692 55.1131 56.5931 55.5892C56.1171 56.0653 55.8496 56.7109 55.8496 57.3842V71.3457C55.8496 72.3556 56.2508 73.3241 56.9649 74.0381C57.6789 74.7522 58.6474 75.1534 59.6573 75.1534C60.6672 75.1534 61.6357 74.7522 62.3497 74.0381C63.0638 73.3241 63.465 72.3556 63.465 71.3457V57.3842C63.465 56.7109 63.1975 56.0653 62.7215 55.5892C62.2454 55.1131 61.5998 54.8457 60.9265 54.8457H58.3881ZM59.6573 72.6149C59.9939 72.6149 60.3168 72.4812 60.5548 72.2432C60.7928 72.0052 60.9265 71.6823 60.9265 71.3457C60.9265 71.0091 60.7928 70.6862 60.5548 70.4482C60.3168 70.2102 59.9939 70.0765 59.6573 70.0765C59.3207 70.0765 58.9978 70.2102 58.7598 70.4482C58.5218 70.6862 58.3881 71.0091 58.3881 71.3457C58.3881 71.6823 58.5218 72.0052 58.7598 72.2432C58.9978 72.4812 59.3207 72.6149 59.6573 72.6149ZM66.0035 70.3849L72.2227 64.1657C72.6986 63.6896 72.9659 63.0441 72.9659 62.371C72.9659 61.6979 72.6986 61.0523 72.2227 60.5763L70.4267 58.7803C69.9507 58.3044 69.3051 58.0371 68.632 58.0371C67.9589 58.0371 67.3134 58.3044 66.8373 58.7803L66.0035 59.6142V70.3849ZM73.6188 75.1534H64.8243L72.4397 67.538H73.6188C74.2921 67.538 74.9377 67.8055 75.4138 68.2815C75.8899 68.7576 76.1573 69.4032 76.1573 70.0765V72.6149C76.1573 73.2882 75.8899 73.9338 75.4138 74.4099C74.9377 74.886 74.2921 75.1534 73.6188 75.1534Z" fill="#404655"/>
						</g>
						<g filter="url(#filter0_d_16980_14882)">
						<path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
						</g>
						<g filter="url(#filter1_d_16980_14882)">
						<rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
						</g>
						<g filter="url(#filter2_d_16980_14882)">
						<rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
						<rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_14882" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14882"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14882" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_14882" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14882"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14882" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_14882" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14882"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14882" result="shape"/>
						</filter>
						<clipPath id="clip0_16980_14882">
						<rect width="22" height="22" fill="white" transform="translate(55 54)"/>
						</clipPath>
						</defs>
				</svg>`,
		},
		{
			value: 'preset-2',
			label: __('Preset 2', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<rect x="24" y="23" width="300" height="230" rx="14" fill="white" fill-opacity="0.4"/>
						<g clip-path="url(#clip0_16980_14915)">
						<path fillRule="evenodd" clipRule="evenodd" d="M58.3881 54.8457C57.7148 54.8457 57.0692 55.1131 56.5931 55.5892C56.1171 56.0653 55.8496 56.7109 55.8496 57.3842V71.3457C55.8496 72.3556 56.2508 73.3241 56.9649 74.0381C57.6789 74.7522 58.6474 75.1534 59.6573 75.1534C60.6672 75.1534 61.6357 74.7522 62.3497 74.0381C63.0638 73.3241 63.465 72.3556 63.465 71.3457V57.3842C63.465 56.7109 63.1975 56.0653 62.7215 55.5892C62.2454 55.1131 61.5998 54.8457 60.9265 54.8457H58.3881ZM59.6573 72.6149C59.9939 72.6149 60.3168 72.4812 60.5548 72.2432C60.7928 72.0052 60.9265 71.6823 60.9265 71.3457C60.9265 71.0091 60.7928 70.6862 60.5548 70.4482C60.3168 70.2102 59.9939 70.0765 59.6573 70.0765C59.3207 70.0765 58.9978 70.2102 58.7598 70.4482C58.5218 70.6862 58.3881 71.0091 58.3881 71.3457C58.3881 71.6823 58.5218 72.0052 58.7598 72.2432C58.9978 72.4812 59.3207 72.6149 59.6573 72.6149ZM66.0035 70.3849L72.2227 64.1657C72.6986 63.6896 72.9659 63.0441 72.9659 62.371C72.9659 61.6979 72.6986 61.0523 72.2227 60.5763L70.4267 58.7803C69.9507 58.3044 69.3051 58.0371 68.632 58.0371C67.9589 58.0371 67.3134 58.3044 66.8373 58.7803L66.0035 59.6142V70.3849ZM73.6188 75.1534H64.8243L72.4397 67.538H73.6188C74.2921 67.538 74.9377 67.8055 75.4138 68.2815C75.8899 68.7576 76.1573 69.4032 76.1573 70.0765V72.6149C76.1573 73.2882 75.8899 73.9338 75.4138 74.4099C74.9377 74.886 74.2921 75.1534 73.6188 75.1534Z" fill="#404655"/>
						</g>
						<g filter="url(#filter0_d_16980_14915)">
						<path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
						</g>
						<g filter="url(#filter1_d_16980_14915)">
						<rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
						</g>
						<g filter="url(#filter2_d_16980_14915)">
						<rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
						<rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_14915" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14915"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14915" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_14915" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14915"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14915" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_14915" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14915"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14915" result="shape"/>
						</filter>
						<clipPath id="clip0_16980_14915">
						<rect width="22" height="22" fill="white" transform="translate(55 54)"/>
						</clipPath>
						</defs>
				</svg>`,
		},
		{
			value: 'preset-3',
			label: __('Preset 3', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-3']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<rect x="44" y="43" width="44" height="44" rx="14" fill="white"/>
						<g clip-path="url(#clip0_16980_14402)">
						<path fillRule="evenodd" clipRule="evenodd" d="M58.3881 54.8457C57.7148 54.8457 57.0692 55.1131 56.5931 55.5892C56.1171 56.0653 55.8496 56.7109 55.8496 57.3842V71.3457C55.8496 72.3556 56.2508 73.3241 56.9649 74.0381C57.6789 74.7522 58.6474 75.1534 59.6573 75.1534C60.6672 75.1534 61.6357 74.7522 62.3497 74.0381C63.0638 73.3241 63.465 72.3556 63.465 71.3457V57.3842C63.465 56.7109 63.1975 56.0653 62.7215 55.5892C62.2454 55.1131 61.5998 54.8457 60.9265 54.8457H58.3881ZM59.6573 72.6149C59.9939 72.6149 60.3168 72.4812 60.5548 72.2432C60.7928 72.0052 60.9265 71.6823 60.9265 71.3457C60.9265 71.0091 60.7928 70.6862 60.5548 70.4482C60.3168 70.2102 59.9939 70.0765 59.6573 70.0765C59.3207 70.0765 58.9978 70.2102 58.7598 70.4482C58.5218 70.6862 58.3881 71.0091 58.3881 71.3457C58.3881 71.6823 58.5218 72.0052 58.7598 72.2432C58.9978 72.4812 59.3207 72.6149 59.6573 72.6149ZM66.0035 70.3849L72.2227 64.1657C72.6986 63.6896 72.9659 63.0441 72.9659 62.371C72.9659 61.6979 72.6986 61.0523 72.2227 60.5763L70.4267 58.7803C69.9507 58.3044 69.3051 58.0371 68.632 58.0371C67.9589 58.0371 67.3134 58.3044 66.8373 58.7803L66.0035 59.6142V70.3849ZM73.6188 75.1534H64.8243L72.4397 67.538H73.6188C74.2921 67.538 74.9377 67.8055 75.4138 68.2815C75.8899 68.7576 76.1573 69.4032 76.1573 70.0765V72.6149C76.1573 73.2882 75.8899 73.9338 75.4138 74.4099C74.9377 74.886 74.2921 75.1534 73.6188 75.1534Z" fill="#404655"/>
						</g>
						<g filter="url(#filter0_d_16980_14402)">
						<path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
						</g>
						<g filter="url(#filter1_d_16980_14402)">
						<rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
						</g>
						<g filter="url(#filter2_d_16980_14402)">
						<rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
						<rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_14402" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14402"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14402" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_14402" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14402"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14402" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_14402" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14402"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14402" result="shape"/>
						</filter>
						<clipPath id="clip0_16980_14402">
						<rect width="22" height="22" fill="white" transform="translate(55 54)"/>
						</clipPath>
						</defs>
				</svg>`,
		},
		{
			value: 'preset-4',
			label: __('Preset 4', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<rect x="24" y="22" width="300" height="232" rx="14" fill="white" fill-opacity="0.4"/>
						<rect x="44" y="42" width="44" height="44" rx="14" fill="white"/>
						<g clip-path="url(#clip0_16980_14893)">
						<path fillRule="evenodd" clipRule="evenodd" d="M58.3881 53.8457C57.7148 53.8457 57.0692 54.1131 56.5931 54.5892C56.1171 55.0653 55.8496 55.7109 55.8496 56.3842V70.3457C55.8496 71.3556 56.2508 72.3241 56.9649 73.0381C57.6789 73.7522 58.6474 74.1534 59.6573 74.1534C60.6672 74.1534 61.6357 73.7522 62.3497 73.0381C63.0638 72.3241 63.465 71.3556 63.465 70.3457V56.3842C63.465 55.7109 63.1975 55.0653 62.7215 54.5892C62.2454 54.1131 61.5998 53.8457 60.9265 53.8457H58.3881ZM59.6573 71.6149C59.9939 71.6149 60.3168 71.4812 60.5548 71.2432C60.7928 71.0052 60.9265 70.6823 60.9265 70.3457C60.9265 70.0091 60.7928 69.6862 60.5548 69.4482C60.3168 69.2102 59.9939 69.0765 59.6573 69.0765C59.3207 69.0765 58.9978 69.2102 58.7598 69.4482C58.5218 69.6862 58.3881 70.0091 58.3881 70.3457C58.3881 70.6823 58.5218 71.0052 58.7598 71.2432C58.9978 71.4812 59.3207 71.6149 59.6573 71.6149ZM66.0035 69.3849L72.2227 63.1657C72.6986 62.6896 72.9659 62.0441 72.9659 61.371C72.9659 60.6979 72.6986 60.0523 72.2227 59.5763L70.4267 57.7803C69.9507 57.3044 69.3051 57.0371 68.632 57.0371C67.9589 57.0371 67.3134 57.3044 66.8373 57.7803L66.0035 58.6142V69.3849ZM73.6188 74.1534H64.8243L72.4397 66.538H73.6188C74.2921 66.538 74.9377 66.8055 75.4138 67.2815C75.8899 67.7576 76.1573 68.4032 76.1573 69.0765V71.6149C76.1573 72.2882 75.8899 72.9338 75.4138 73.4099C74.9377 73.886 74.2921 74.1534 73.6188 74.1534Z" fill="#404655"/>
						</g>
						<g filter="url(#filter0_d_16980_14893)">
						<path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
						</g>
						<g filter="url(#filter1_d_16980_14893)">
						<rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
						</g>
						<g filter="url(#filter2_d_16980_14893)">
						<rect x="44" y="186" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
						<rect x="60" y="202" width="72" height="16" rx="8" fill="#EBEBEB"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_14893" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14893"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14893" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_14893" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14893"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14893" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_14893" x="43" y="186" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14893"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14893" result="shape"/>
						</filter>
						<clipPath id="clip0_16980_14893">
						<rect width="22" height="22" fill="white" transform="translate(55 53)"/>
						</clipPath>
						</defs>
					</svg>`,
		},
		{
			value: 'preset-5',
			label: __('Preset 5', 'frontis-blocks'),
			attributes: Object.entries(presetStyles['preset-5']).map(([label, value]) => ({ label, value })),
			icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
						<path d="M87.7318 67.9185C86.0779 90.7749 74.8911 87.6456 65.3042 85.5691C48.2608 81.416 44 78.2401 44 67.9185C44 57.5969 57.8477 42.9999 74.8911 43C87.7318 43.4572 88.6747 54.8875 87.7318 67.9185Z" fill="white"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M61.4021 57.1992C60.8187 57.1992 60.2591 57.431 59.8465 57.8436C59.4339 58.2562 59.2021 58.8157 59.2021 59.3992V71.4992C59.2021 72.3744 59.5498 73.2138 60.1687 73.8327C60.7876 74.4515 61.6269 74.7992 62.5021 74.7992C63.3774 74.7992 64.2167 74.4515 64.8356 73.8327C65.4545 73.2138 65.8021 72.3744 65.8021 71.4992V59.3992C65.8021 58.8157 65.5704 58.2562 65.1578 57.8436C64.7452 57.431 64.1856 57.1992 63.6021 57.1992H61.4021ZM62.5021 72.5992C62.7939 72.5992 63.0737 72.4833 63.28 72.277C63.4863 72.0707 63.6021 71.791 63.6021 71.4992C63.6021 71.2075 63.4863 70.9277 63.28 70.7214C63.0737 70.5151 62.7939 70.3992 62.5021 70.3992C62.2104 70.3992 61.9306 70.5151 61.7243 70.7214C61.518 70.9277 61.4021 71.2075 61.4021 71.4992C61.4021 71.791 61.518 72.0707 61.7243 72.277C61.9306 72.4833 62.2104 72.5992 62.5021 72.5992ZM68.0021 70.6665L73.3921 65.2765C73.8046 64.864 74.0363 64.3045 74.0363 63.7211C74.0363 63.1378 73.8046 62.5783 73.3921 62.1657L71.8356 60.6092C71.4231 60.1968 70.8636 59.9651 70.2802 59.9651C69.6969 59.9651 69.1374 60.1968 68.7248 60.6092L68.0021 61.3319V70.6665ZM74.6021 74.7992H66.9802L73.5802 68.1992H74.6021C75.1856 68.1992 75.7452 68.431 76.1578 68.8436C76.5704 69.2562 76.8021 69.8157 76.8021 70.3992V72.5992C76.8021 73.1827 76.5704 73.7423 76.1578 74.1549C75.7452 74.5674 75.1856 74.7992 74.6021 74.7992Z" fill="#404655"/>
						<g filter="url(#filter0_d_16980_14904)">
						<path d="M44 120C44 112.82 49.8203 107 57 107H149C156.18 107 162 112.82 162 120C162 127.18 156.18 133 149 133H57C49.8203 133 44 127.18 44 120Z" fill="white"/>
						</g>
						<g filter="url(#filter1_d_16980_14904)">
						<rect x="44" y="149" width="260" height="16" rx="8" fill="white"/>
						</g>
						<g filter="url(#filter2_d_16980_14904)">
						<rect x="44" y="185" width="104" height="48" rx="24" fill="white" shape-rendering="crispEdges"/>
						<rect x="60" y="201" width="72" height="16" rx="8" fill="#EBEBEB"/>
						</g>
						<defs>
						<filter id="filter0_d_16980_14904" x="43" y="107" width="120" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14904"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14904" result="shape"/>
						</filter>
						<filter id="filter1_d_16980_14904" x="43" y="149" width="262" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14904"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14904" result="shape"/>
						</filter>
						<filter id="filter2_d_16980_14904" x="43" y="185" width="106" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
						<feFlood flood-opacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="2"/>
						<feGaussianBlur stdDeviation="0.5"/>
						<feComposite in2="hardAlpha" operator="out"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14904"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14904" result="shape"/>
						</filter>
						</defs>
					</svg>`,
		},
	];

	/** Heading Margin */
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

	/** Desc Padding */
	/** Subheading Padding */
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

	const handleButtonPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (infoButtonPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						infoButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoButtonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoButtonMobilePadding: {
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
						infoButtonDesktopPadding: {
							...infoButtonDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoButtonTabPadding: {
							...infoButtonTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoButtonMobilePadding: {
							...infoButtonMobilePadding,
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
		setAttributes({ infoButtonPaddingLink: !infoButtonPaddingLink });
	};

	const handleButtonPaddingUnitsHandler = (unit) => {
		setAttributes({
			infoButtonPaddingUnits: {
				...infoButtonPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleButtonMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (infoButtonMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						infoButtonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoButtonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoButtonMobileMargin: {
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
						infoButtonDesktopMargin: {
							...infoButtonDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoButtonTabMargin: {
							...infoButtonTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoButtonMobileMargin: {
							...infoButtonMobileMargin,
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
		setAttributes({ infoButtonMarginLink: !infoButtonMarginLink });
	};

	const handleButtonMarginUnitsHandler = (unit) => {
		setAttributes({
			infoButtonMarginUnits: {
				...infoButtonMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Start Border */
	const handleButtonBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (infoButtonBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						infoButtonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoButtonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoButtonMobileBorderWidth: {
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
						infoButtonDesktopBorderWidth: {
							...infoButtonDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoButtonTabBorderWidth: {
							...infoButtonTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoButtonMobileBorderWidth: {
							...infoButtonMobileBorderWidth,
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
		setAttributes({ infoButtonBorderLink: !infoButtonBorderLink });
	};

	const handleButtonBorderUnitsHandler = (unit) => {
		setAttributes({
			infoButtonBorderUnits: {
				...infoButtonBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Start Border */
	const handleButtonBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						infoBtnDesktopBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoBtnTabBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoBtnMobileBorderradiusWidth: {
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
						infoBtnDesktopBorderradiusWidth: {
							...infoBtnDesktopBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						infoBtnTabBorderradiusWidth: {
							...infoBtnTabBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						infoBtnMobileBorderradiusWidth: {
							...infoBtnMobileBorderradiusWidth,
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
			infoBtnBorderradiusUnits: {
				...infoBtnBorderradiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Global Typography */
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
	/** end Global border */
	/** End Global Border Radius */
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
	/** Default padding for desktop (using desktop_padding) */
	/** End Padding */

	/** Start Media margin */
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
	/** end Global margin */
	/** End Margin */

	/** Start Media border */
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
	/** End Media border */
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
	/** End Media border */
	/** End Global Border Radius */

	/**
	* Inspector General Controls
	*/
	const generalControls = (
		<>
			<div className="fb-presets-wrapper">
				<PanelBody
					title={__("Presets", "frontis-block")}
					initialOpen={true}
				>
					<FB_Presets
						className="fb-info-box-presets"
						label={__('Select Preset', 'frontis-blocks')}
						presets={infoBoxPresets}
						value = {infoBoxPresetStyle}
						onChangeValue = 'infoBoxPresetStyle'
						defaultPresetValue="preset-1"
						setAttributes={setAttributes}
					/>

				</PanelBody>
			</div>
			<div className="fb-advanced-wrapper">
				<PanelBody
					title={__("Icon/Image", "frontis-block")}
					initialOpen={false}
				>

					<FB_AlignmentControl
						label={__("Alignment", "frontis-blocks")}
						globalAlignment={wrapperAlignment}
						setGlobalAlignment={(value) => setAttributes({ wrapperAlignment: value })}
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

					<BaseControl className="fb-media-position">
						<SelectControl
							label={__("Media Position", "frontis-block")}
							value={infoIconPosition}
							options={INFO_ICON_POSITION}
							onChange={(value) =>
								setAttributes({ infoIconPosition: value })
							}
						/>
					</BaseControl>

					{(infoIconPosition === 'left' || infoIconPosition === 'right') && (
						<BaseControl className="fb-media-vertical-position">
							<SelectControl
								label={__("Card Alignment", "frontis-block")}
								value={infoCardAlignment}
								options={INFO_WRAP_ALIGNMENT}
								onChange={(value) =>
									setAttributes({ infoCardAlignment: value })
								}
							/>
						</BaseControl>
					)}

					{(infoIconPosition === 'left' || infoIconPosition === 'right') && (
						<BaseControl className="fb-media-vertical-position">
							<SelectControl
								label={__("Vertical Position", "frontis-block")}
								value={infoIconVerticalPosition}
								options={INFO_ICON_VERTICAL_POSITION}
								onChange={(value) =>
									setAttributes({ infoIconVerticalPosition: value })
								}
							/>
						</BaseControl>
					)}

					<div className="fb-image-upload-field-wrapper">
						{mediaSwitcher === "image" && (
							<FB_ImageControl
								globalImageUrl={infoMediaUrl}
								setglobalImageUrl={(value) => setAttributes({ infoMediaUrl: value })}
								globalImageAlt={infoMediaAlt}
								setglobalImageAlt={(value) => setAttributes({ infoMediaAlt: value })}
								globalImageID={infoMediaID}
								setglobalImageID={(value) => setAttributes({ infoMediaID: value })}
								globalImageSize={infoMediaSize}
								setglobalImageSize={(value) => setAttributes({ infoMediaSize: value })}
							/>
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
					{dynamicTitleEnabled && (
						<DynamicDataLinkControl
							enableLink={dynamicTitleEnableLink}
							setEnableLink={(value) => setAttributes({ dynamicTitleEnableLink: value })}
							linkSource={dynamicTitleLinkSource}
							setLinkSource={(value) => setAttributes({ dynamicTitleLinkSource: value })}
						/>
					)}

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
				</PanelBody>
			</div>
			<div className="fb-advanced-wrapper">
				<PanelBody
					title={__("Description", "frontis-block")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Description", "frontis-block")}
						checked={Sub_Heading_Switcher}
						onChange={(value) =>
							setAttributes({ Sub_Heading_Switcher: value })
						}
					/>

					{Sub_Heading_Switcher && (
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

							{dynamicDescriptionEnabled && ( 
								<DynamicDataLinkControl
									enableLink={dynamicDescriptionEnableLink}
									setEnableLink={(value) => setAttributes({ dynamicDescriptionEnableLink: value })}
									linkSource={dynamicDescriptionLinkSource}
									setLinkSource={(value) => setAttributes({ dynamicDescriptionLinkSource: value })}
								/>
							)}

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
			<div className="fb-info-button-wrapper">
				<PanelBody
					title={__("Button", "frontis-block")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Button", "frontis-block")}
						checked={info_Button_Switcher}
						onChange={(value) =>
							setAttributes({ info_Button_Switcher: value })
						}
					/>

					{info_Button_Switcher && (
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
									value={info_Button_Text}
									onChange={(value) =>
										setAttributes({ info_Button_Text: value })
									}
									className="fb-info-button-text"
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
									<FB_SwitcherControl
										globalSwitcher={buttonIconType}
										setGlobalSwitcher={(value) => setAttributes({ buttonIconType: value })}
										options={[
											{ label: __('Icon', 'frontis-blocks'), value: 'icon' },
											{ label: __('Image', 'frontis-blocks'), value: 'image' },
										]}
									/>
									{buttonIconType === 'icon' && (
										<BaseControl>
											<FBIconPicker
												value={btnIcon}
												setIconHandler={buttonIconHandler}
											/>
										</BaseControl>
									)}
									{buttonIconType === 'image' && (
										<FB_ImageControl
											globalImageUrl={btnImageUrl}
											setglobalImageUrl={(value) => setAttributes({ btnImageUrl: value })}
											globalImageAlt={btnImageAlt}
											setglobalImageAlt={(value) => setAttributes({ btnImageAlt: value })}
											globalImageID={btnImageID}
											setglobalImageID={(value) => setAttributes({ btnImageID: value })}
											isImageSize={false}
										/>
									)}
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
							{dynamicBtnEnabled && ( 
								<DynamicDataLinkControl
									enableLink={dynamicBtnEnableLink}
									setEnableLink={(value) => setAttributes({ dynamicBtnEnableLink: value })}
									linkSource={dynamicBtnLinkSource}
									setLinkSource={(value) => setAttributes({ dynamicBtnLinkSource: value })}
								/>
							)}
							{!dynamicBtnEnableLink && (
								<BaseControl>
									<FB_UrlControl
										url={infoButtonLink}
										onChangeUrl={(value) =>
											setAttributes({ infoButtonLink: value })
										}
										openInNewTab={infobtnTargetUrl}
										onChangeOpenInNewTab={(value) =>
											setAttributes({ infobtnTargetUrl: value })
										}
									/>
								</BaseControl>
							)}
						</>
					)}
				</PanelBody>
			</div>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			{/*Image/Icon Style*/}
			<PanelBody
				title={__("Image/Icon", "frontis-block")}
				initialOpen={false}
			>
				<FB_Range
					min={0}
					max={mediaSizeUnits === '%' ? 100 : 1000}
					label={__("Width", "frontis-blocks")}
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

				<FB_Range
					min={0}
					max={mediaHeightUnits === '%' ? 100 : 1000}
					label={__("Height", "frontis-blocks")}
					rangeValue={mediaHeight}
					onChangeHandler={(value) =>
						setAttributes({ mediaHeight: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ mediaHeightUnits: value })
					}
					deviceType={deviceType}
					units={mediaHeightUnits}
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
			{/*Heading Style*/}
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
			{/*Description Style*/}
			{Sub_Heading_Switcher && (
				<PanelBody
					title={__("Description", "frontis-block")}
					initialOpen={false}
					className="fb-info-box-desc-setting-wrapper"
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
			{info_Button_Switcher && (
				<PanelBody
					title={__("Button", "frontis-block")}
					className="fb-info-box-button-setting-wrapper"
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
						<FB_Range
							min={0}
							max={btnIconSizeUnits === '%' ? 100 : 200}
							label={__("Icon Size", "frontis-blocks")}
							rangeValue={btnIconSize}
							onChangeHandler={(value) =>
								setAttributes({ btnIconSize: value })
							}
							rangeUnitHandler={(value) =>
								setAttributes({ btnIconSizeUnits: value })
							}
							deviceType={deviceType}
							units={btnIconSizeUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={''}
						/>

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
						spacingUnits={infoButtonPaddingUnits}
						spacingDesktop={infoButtonDesktopPadding}
						spacingTablet={infoButtonTabPadding}
						spacingMobile={infoButtonMobilePadding}
						handleSpacingUnitHandler={handleButtonPaddingUnitChange}
						spacingCombineBtn={infoButtonPaddingLink}
						spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleButtonMarginUnitsHandler}
						spacingUnits={infoButtonMarginUnits}
						spacingDesktop={infoButtonDesktopMargin}
						spacingTablet={infoButtonTabMargin}
						spacingMobile={infoButtonMobileMargin}
						handleSpacingUnitHandler={handleButtonMarginUnitChange}
						spacingCombineBtn={infoButtonMarginLink}
						spacingCombineBtnHandler={handleButtonMarginCombineBtn}
						setAttributes={setAttributes}
					/>
					{/* Border Width */}

					<SelectControl
						label={__("Border Style", "frontis-block")}
						value={infoButtonBorder}
						options={BORDER_STYLES}
						onChange={(value) =>
							setAttributes({ infoButtonBorder: value })
						}
					/>

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={infoButtonBorderColorSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ infoButtonBorderColorSwitcher: value })}
					/>

					{infoButtonBorderColorSwitcher === 'normal' && (
						<FB_ColorControl
							label={__("Normal Color", "frontis-blocks")}
							globalColor={infoButtonBorderColor}
							setGlobalColor={(value) => setAttributes({ infoButtonBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{infoButtonBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={infoButtonHoverBorderColor}
							setGlobalColor={(value) => setAttributes({ infoButtonHoverBorderColor: value === undefined ? '' : value })}
						/>
					)}

					<FB_Spacing
						label={__("Border Width", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleButtonBorderUnitsHandler}
						spacingUnits={infoButtonBorderUnits}
						spacingDesktop={infoButtonDesktopBorderWidth}
						spacingTablet={infoButtonTabBorderWidth}
						spacingMobile={infoButtonMobileBorderWidth}
						handleSpacingUnitHandler={handleButtonBorderUnitChange}
						spacingCombineBtn={infoButtonBorderLink}
						spacingCombineBtnHandler={handleButtonBorderCombineBtn}
						setAttributes={setAttributes}
					/>

					{/* Border radius Width */}
					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handleButtonBorderRadiusUnitsHandler}
						spacingUnits={infoBtnBorderradiusUnits}
						spacingDesktop={infoBtnDesktopBorderradiusWidth}
						spacingTablet={infoBtnTabBorderradiusWidth}
						spacingMobile={infoBtnMobileBorderradiusWidth}
						handleSpacingUnitHandler={handleButtonBorderRadiusUnitChange}
						spacingCombineBtn={btnBorderRadiusLink}
						spacingCombineBtnHandler={handleButtonBorderRadiusCombineBtn}
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
						className="fb-setting-layout-header"
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
							value={infoBoxOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ infoBoxOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={infoBoxPositionType}
							setPositionType={(value) => setAttributes({ infoBoxPositionType: value })}

							HZOrientationType={infoBoxHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ infoBoxHZOrientationType: value })
							}
							VROrientationType={infoBoxVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ infoBoxVROrientationType: value })
							}

							HZLeftOffset={infoBoxHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ infoBoxHZLeftOffset: value })}
							HZLeftOffsetUnits={infoBoxHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ infoBoxHZLeftOffsetUnits: value })}
							HZRightOffset={infoBoxHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ infoBoxHZRightOffset: value })}
							HZRightOffsetUnits={infoBoxHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ infoBoxHZRightOffsetUnits: value })}

							VRTopOffset={infoBoxVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ infoBoxVRTopOffset: value })}
							VRTopOffsetUnits={infoBoxVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ infoBoxVRTopOffsetUnits: value })}
							VRBottomOffset={infoBoxVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ infoBoxVRBottomOffset: value })}
							VRBottomOffsetUnits={infoBoxVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ infoBoxVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={infoBoxGlobalWraperID}
							onChangeValue={(value) => setAttributes({ infoBoxGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={infoBoxGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ infoBoxGlobalWraperClass: value })}
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
							desktopValue={infoBoxDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ infoBoxDesktopSwitcher: value })}

							tabletValue={infoBoxTabletSwitcher}
							setTabletValue={(value) => setAttributes({ infoBoxTabletSwitcher: value })}

							mobileValue={infoBoxMobileSwitcher}
							setMobileValue={(value) => setAttributes({ infoBoxMobileSwitcher: value })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={infoBoxGlobalCustomCSS}
							onChangeValue={(value) => setAttributes({ infoBoxGlobalCustomCSS: value })}
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