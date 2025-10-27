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
	INFO_ICON_POSITION,
	INFO_ICON_VERTICAL_POSITION,
	INFO_WRAP_ALIGNMENT,
	PRESETS,
	OVERFLOW_OP
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
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ImageControl from '@Components/image-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';

export default function Inspector({ attributes, setAttributes, clientId }) {
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

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-info-box-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

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
				btnIconColor: '#399CFF',
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
				buttonTextHoverColor: '#F89B2E',
				btnIconColor: '#F89B2E',
				btnIconHoverColor: '#F89B2E',
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
			// "preset-6": {
			// 	info_Button_Switcher: true,
			// 	info_Button_Text: '',
			// 	mediaClassicColor: '',
			// 	mediaHoverClassicColor: '',
			// 	globalBgColor: '#EBF5FF',
			// 	globalBgHoverColor: '#EBF5FF',
			// 	mediaIconColor: '#399CFF',
			// 	mediaIconHoverColor: '#399CFF',
			// 	Heading_Color: '#15171C',
			// 	Heading_Hover_Color: '#15171C',
			// 	SubHeadingColor: '#555E72',
			// 	SubHeadingHoverColor: '#555E72',
			// 	buttonTextColor: '#399CFF',
			// 	buttonTextHoverColor: '#399CFF',
			// 	buttonBgColor: '#EBF5FF',
			// 	buttonBgHoverColor: '#EBF5FF',
			// 	btnIcon: 'arrow-left',
			// 	btnIconColor: '#399CFF',
			// 	btnIconHoverColor: '#399CFF',
			// 	buttonIconRotate: {
			// 		Desktop: "145",
			// 		Tablet: "145",
			// 		Mobile: "145",
			// 	},
			// 	btnIconPosition: 'left',
			// 	infoButtonDesktopMargin: {
			// 		top: "0",
			// 		bottom: "0",
			// 		left: "0",
			// 		right: "0",
			// 	},
			// 	infoButtonDesktopPadding: {
			// 		top: "19",
			// 		bottom: "19",
			// 		left: "19",
			// 		right: "19",
			// 	},
			// 	infoBtnDesktopBorderradiusWidth: {
			// 		top: "18",
			// 		bottom: "18",
			// 		left: "8",
			// 		right: "18",
			// 	},
			// 	globalBorderRadiusDesktop: {
			// 		top: "18",
			// 		bottom: "18",
			// 		left: "18",
			// 		right: "18",
			// 	},
			// },
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
	const descMobileMarginValue = `${descMobileMargin.top}${descMarginUnits.Mobile} ${descMobileMargin.right}${descMarginUnits.Mobile} ${descMobileMargin.bottom}${descMarginUnits.Mobile} ${descMobileMargin.left}${descMarginUnits.Mobile}`;

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

	const buttonDesktopPaddingValue = `${infoButtonDesktopPadding?.top}${infoButtonPaddingUnits?.Desktop} ${infoButtonDesktopPadding?.right}${infoButtonPaddingUnits?.Desktop} ${infoButtonDesktopPadding?.bottom}${infoButtonPaddingUnits?.Desktop} ${infoButtonDesktopPadding?.left}${infoButtonPaddingUnits?.Desktop}`;
	const buttonTabPaddingValue = `${infoButtonTabPadding?.top}${infoButtonPaddingUnits?.Tablet} ${infoButtonTabPadding?.right}${infoButtonPaddingUnits?.Tablet} ${infoButtonTabPadding?.bottom}${infoButtonPaddingUnits?.Tablet} ${infoButtonTabPadding?.left}${infoButtonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingValue = `${infoButtonMobilePadding?.top}${infoButtonPaddingUnits?.Mobile} ${infoButtonMobilePadding?.right}${infoButtonPaddingUnits?.Mobile} ${infoButtonMobilePadding?.bottom}${infoButtonPaddingUnits?.Mobile} ${infoButtonMobilePadding?.left}${infoButtonPaddingUnits?.Mobile}`;


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

	const buttonDesktopMarginValue = `${infoButtonDesktopMargin?.top}${infoButtonMarginUnits?.Desktop} ${infoButtonDesktopMargin?.right}${infoButtonMarginUnits?.Desktop} ${infoButtonDesktopMargin?.bottom}${infoButtonMarginUnits?.Desktop} ${infoButtonDesktopMargin?.left}${infoButtonMarginUnits?.Desktop}`;
	const buttonTabMarginValue = `${infoButtonTabMargin?.top}${infoButtonMarginUnits?.Tablet} ${infoButtonTabMargin?.right}${infoButtonMarginUnits?.Tablet} ${infoButtonTabMargin?.bottom}${infoButtonMarginUnits?.Tablet} ${infoButtonTabMargin?.left}${infoButtonMarginUnits?.Tablet}`;
	const buttonMobileMarginValue = `${infoButtonMobileMargin?.top}${infoButtonMarginUnits?.Mobile} ${infoButtonMobileMargin?.right}${infoButtonMarginUnits?.Mobile} ${infoButtonMobileMargin?.bottom}${infoButtonMarginUnits?.Mobile} ${infoButtonMobileMargin?.left}${infoButtonMarginUnits?.Mobile}`;


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

	const buttonDesktopBorderValue = `${infoButtonDesktopBorderWidth?.top}${infoButtonBorderUnits?.Desktop} ${infoButtonDesktopBorderWidth?.right}${infoButtonBorderUnits?.Desktop} ${infoButtonDesktopBorderWidth?.bottom}${infoButtonBorderUnits?.Desktop} ${infoButtonDesktopBorderWidth?.left}${infoButtonBorderUnits?.Desktop}`;
	const buttonTabBorderValue = `${infoButtonTabBorderWidth?.top}${infoButtonBorderUnits?.Tablet} ${infoButtonTabBorderWidth?.right}${infoButtonBorderUnits?.Tablet} ${infoButtonTabBorderWidth?.bottom}${infoButtonBorderUnits?.Tablet} ${infoButtonTabBorderWidth?.left}${infoButtonBorderUnits?.Tablet}`;
	const buttonMobileBorderValue = `${infoButtonMobileBorderWidth?.top}${infoButtonBorderUnits?.Mobile} ${infoButtonMobileBorderWidth?.right}${infoButtonBorderUnits?.Mobile} ${infoButtonMobileBorderWidth?.bottom}${infoButtonBorderUnits?.Mobile} ${infoButtonMobileBorderWidth?.left}${infoButtonBorderUnits?.Mobile}`;

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

	const buttonDesktopBorderRadiusValue = `${infoBtnDesktopBorderradiusWidth?.top}${infoBtnBorderradiusUnits?.Desktop} ${infoBtnDesktopBorderradiusWidth?.right}${infoBtnBorderradiusUnits?.Desktop} ${infoBtnDesktopBorderradiusWidth?.bottom}${infoBtnBorderradiusUnits?.Desktop} ${infoBtnDesktopBorderradiusWidth?.left}${infoBtnBorderradiusUnits?.Desktop}`;
	const buttonTabBorderRadiusValue = `${infoBtnTabBorderradiusWidth?.top}${infoBtnBorderradiusUnits?.Tablet} ${infoBtnTabBorderradiusWidth?.right}${infoBtnBorderradiusUnits?.Tablet} ${infoBtnTabBorderradiusWidth?.bottom}${infoBtnBorderradiusUnits?.Tablet} ${infoBtnTabBorderradiusWidth?.left}${infoBtnBorderradiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusValue = `${infoBtnMobileBorderradiusWidth?.top}${infoBtnBorderradiusUnits?.Mobile} ${infoBtnMobileBorderradiusWidth?.right}${infoBtnBorderradiusUnits?.Mobile} ${infoBtnMobileBorderradiusWidth?.bottom}${infoBtnBorderradiusUnits?.Mobile} ${infoBtnMobileBorderradiusWidth?.left}${infoBtnBorderradiusUnits?.Mobile}`;

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
	/** end Global border */

	/** End Global Border Radius */
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

	/** Default padding for desktop (using desktop_padding) */
	const mediaDesktopPadding = `${mediaPaddingDesktop?.top}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.right}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.bottom}${mediaPaddingUnits?.Desktop} ${mediaPaddingDesktop?.left}${mediaPaddingUnits?.Desktop}`;
	const mediaTabletPadding = `${mediaPaddingTablet?.top}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.right}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.bottom}${mediaPaddingUnits?.Tablet} ${mediaPaddingTablet?.left}${mediaPaddingUnits?.Tablet}`;
	const mediaMobilePadding = `${mediaPaddingMobile?.top}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.right}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.bottom}${mediaPaddingUnits?.Mobile} ${mediaPaddingMobile?.left}${mediaPaddingUnits?.Mobile}`;
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

	const mediaDesktopMargin = `${mediaMarginDesktop?.top}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.right}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.bottom}${mediaMarginUnits?.Desktop} ${mediaMarginDesktop?.left}${mediaMarginUnits?.Desktop}`;
	const mediaTabletMargin = `${mediaMarginTablet?.top}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.right}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.bottom}${mediaMarginUnits?.Tablet} ${mediaMarginTablet?.left}${mediaMarginUnits?.Tablet}`;
	const mediaMobileMargin = `${mediaMarginMobile?.top}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.right}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.bottom}${mediaMarginUnits?.Mobile} ${mediaMarginMobile?.left}${mediaMarginUnits?.Mobile}`;
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
	/** End Media border */

	/** End Global Border Radius */
	const mediaBorderRadiusDesktopWidth = `${mediaBorderRadiusDesktop?.top}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.right}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.bottom}${mediaBorderRadiusUnits?.Desktop} ${mediaBorderRadiusDesktop?.left}${mediaBorderRadiusUnits?.Desktop}`;
	const mediaBorderRadiusTabletWidth = `${mediaBorderRadiusTablet?.top}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.right}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.bottom}${mediaBorderRadiusUnits?.Tablet} ${mediaBorderRadiusTablet?.left}${mediaBorderRadiusUnits?.Tablet}`;
	const mediaBorderRadiusMobileWidth = `${mediaBorderRadiusMobile?.top}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.right}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.bottom}${mediaBorderRadiusUnits?.Mobile} ${mediaBorderRadiusMobile?.left}${mediaBorderRadiusUnits?.Mobile}`;


	/* set default values for the style attributes */
	useEffect(() => {
		loadGoogleFont(headingFontFamily);
		loadGoogleFont(buttonFontFamily);
		loadGoogleFont(subHeadingFontFamily);
	}, [headingFontFamily, buttonFontFamily, subHeadingFontFamily]);


	const fbInfoBoxStyle = useMemo(
		() => `
		  .fb-info-box-main-wrapper.${blockID} {
			${infoBoxPositionType === 'default' ? `position: relative;` : ''}
			${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' ? `width: 100%;` : ''}
            ${infoBoxPositionType !== 'default' ? `position: ${infoBoxPositionType};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'left' && infoBoxHZLeftOffset?.Desktop ? `left: ${infoBoxHZLeftOffset?.Desktop}${infoBoxHZLeftOffsetUnits?.Desktop};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'right' && infoBoxHZRightOffset?.Desktop ? `right: ${infoBoxHZRightOffset?.Desktop}${infoBoxHZRightOffsetUnits?.Desktop};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'top' && infoBoxVRTopOffset?.Desktop ? `top: ${infoBoxVRTopOffset?.Desktop}${infoBoxVRTopOffsetUnits?.Desktop};` : ''}
            ${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'bottom' && infoBoxVRBottomOffset?.Desktop ? `bottom: ${infoBoxVRBottomOffset?.Desktop}${infoBoxVRBottomOffsetUnits?.Desktop};` : ''}
			${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ""}
            ${infoBoxOverflow !== 'default' ? `overflow: ${infoBoxOverflow};` : ''}
		  }
		  .fb-info-box-wrapper.${blockID} {
		  	  position: relative;
			  ${globalBgColor ? `background-color: ${globalBgColor};` : ""}
			  ${DesktopPadding && globalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ""}
			  ${DesktopMargin && globalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ""}
			  ${globalBorder ? `border: ${globalBorder};` : ""}
			  ${BorderDesktopWidth && globalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ""}
			  ${BorderRadiusDesktopWidth && globalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth};` : ""}
			  ${globalBorderColor ? `border-color: ${globalBorderColor};` : ""}
			  ${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : ""}
			  transition: all .3s ease-in-out;
		  }
	  
		  .fb-info-box-wrapper.${blockID}:hover {
			  ${globalBgHoverColor ? `background-color: ${globalBgHoverColor};` : ""}
			  ${globalBorderHoverColor ? `border-color: ${globalBorderHoverColor};` : ""}
			  ${boxGlobalHoverBoxShadowCssValue ? `box-shadow: ${boxGlobalHoverBoxShadowCssValue};` : ""}
			  transition: all .3s ease-in-out;
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-info-box-main-wrapper.${blockID} {
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'left' && infoBoxHZLeftOffset?.Tablet ? `left: ${infoBoxHZLeftOffset?.Tablet}${infoBoxHZLeftOffsetUnits?.Tablet};` : ''}
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'right' && infoBoxHZRightOffset?.Tablet ? `right: ${infoBoxHZRightOffset?.Tablet}${infoBoxHZRightOffsetUnits?.Tablet};` : ''}
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'top' && infoBoxVRTopOffset?.Tablet ? `top: ${infoBoxVRTopOffset?.Tablet}${infoBoxVRTopOffsetUnits?.Tablet};` : ''}
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'bottom' && infoBoxVRBottomOffset?.Tablet ? `bottom: ${infoBoxVRBottomOffset?.Tablet}${infoBoxVRBottomOffsetUnits?.Tablet};` : ''}
				${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ""}
			  }
			  .fb-info-box-wrapper.${blockID} {
				${TabletPadding && globalPaddingTablet?.top ? `padding: ${TabletPadding};` : ""}
				${TabletMargin && globalMarginTablet?.top ? `margin: ${TabletMargin};` : ""}
				${BorderTabletWidth && globalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ""}
				${BorderRadiusTabletWidth && globalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth};` : ""}
			  }
		  }
	  
		  @media only screen and (max-width: 767px) {
			  .fb-info-box-main-wrapper.${blockID} {
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'left' && infoBoxHZLeftOffset?.Mobile ? `left: ${infoBoxHZLeftOffset?.Mobile}${infoBoxHZLeftOffsetUnits?.Mobile};` : ''}
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxHZOrientationType === 'right' && infoBoxHZRightOffset?.Mobile ? `right: ${infoBoxHZRightOffset?.Mobile}${infoBoxHZRightOffsetUnits?.Mobile};` : ''}
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'top' && infoBoxVRTopOffset?.Mobile ? `top: ${infoBoxVRTopOffset?.Mobile}${infoBoxVRTopOffsetUnits?.Mobile};` : ''}
				${infoBoxPositionType !== 'default' && infoBoxPositionType !== 'relative' && infoBoxVROrientationType === 'bottom' && infoBoxVRBottomOffset?.Mobile ? `bottom: ${infoBoxVRBottomOffset?.Mobile}${infoBoxVRBottomOffsetUnits?.Mobile};` : ''} 
				${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ""}
			  }
			  .fb-info-box-wrapper.${blockID} {
				${MobilePadding && globalPaddingMobile?.top ? `padding: ${MobilePadding};` : ""}
				${MobileMargin && globalMarginMobile?.top ? `margin: ${MobileMargin};` : ""}
				${BorderMobileWidth && globalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ""}
				${BorderRadiusMobileWidth && globalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth};` : ""}
			  }
		  }

		  .fb-info-box-wrapper.${blockID} .fb-info-box-wrapper-inner {
			display: flex;
			${infoIconPosition === 'top' ? 'flex-direction: column;' : ''}
			${infoIconPosition === 'bottom' ? 'flex-direction: column-reverse;' : ''}
			${infoIconPosition === 'left' ? 'flex-direction: row;' : ''}
			${infoIconPosition === 'right' ? 'flex-direction: row-reverse;' : ''}
			${infoIconPosition !== 'top' || infoIconPosition !== 'bottom' ? `justify-content: ${infoCardAlignment};` : ''}
		  }
		  .fb-info-box-wrapper.${blockID} .fb-info-box-wrapper-inner .fb-info-media-container {
			display: flex;
			${wrapperAlignment ? `justify-content: ${wrapperAlignment};` : ''}
			align-items: ${infoIconVerticalPosition === "v-top" ? "flex-start" : infoIconVerticalPosition === "v-middle" ? "center" : infoIconVerticalPosition === "v-bottom" ? "flex-end" : "flex-start"};
		  }
	  
		  .fb-info-box-wrapper.${blockID} .fb-heading,
		  .fb-info-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
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
	  
		  .fb-info-box-wrapper.${blockID}:hover .fb-heading,
		   .fb-info-box-wrapper.${blockID}:hover .fb-heading .fb-title-dynamic-link {
			  ${Heading_Hover_Color ? `color: ${Heading_Hover_Color};` : ""}
			  ${Heading_Border_Hover_Color ? `border-color: ${Heading_Border_Hover_Color};` : ""}
			  transition: all .3s ease-in-out;
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-info-box-wrapper.${blockID} .fb-heading,
			  .fb-info-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
				  ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
                  ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
                  ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight?.Tablet}${headingLineHeightUnits?.Tablet};` : ''}
				  ${headingPaddingTabWidthValue && Heading_Tab_padding?.top ? `padding: ${headingPaddingTabWidthValue};` : ''}
				  ${headingMarginTabWidthValue && Heading_Tab_Margin?.top ? `margin: ${headingMarginTabWidthValue};` : ''}
				  ${headingBorderTabWidthValue && Heading_Tab_Border_Width?.top ? `border-width: ${headingBorderTabWidthValue};` : ''}
			  	  ${headingBorderRadiusTabWidthValue && Heading_Tab_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusTabWidthValue};` : ''}
			  }
		  }
		  @media only screen and (max-width: 724px) {
			  .fb-info-box-wrapper.${blockID} .fb-heading,
			  .fb-info-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
				  ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
                  ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
                  ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
				  ${headingPaddingMobileWidthValue && Heading_Mobile_padding?.top ? `padding: ${headingPaddingMobileWidthValue};` : ''}
				  ${headingMarginMobileWidthValue && Heading_Mobile_Margin?.top ? `margin: ${headingMarginMobileWidthValue};` : ''}
				  ${headingBorderMobileWidthValue && Heading_Mobile_Border_Width?.top ? `border-width: ${headingBorderMobileWidthValue};` : ''}
			  	  ${headingBorderRadiusMobileWidthValue && Heading_Mobile_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusMobileWidthValue};` : ''}
			  }
		  }
		
		.fb-info-box-wrapper.${blockID} .fb-description,
		.fb-info-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
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

		.fb-info-box-wrapper.${blockID}:hover .fb-description,
		.fb-info-box-wrapper.${blockID}:hover .fb-description .fb-description-dynamic-link {
			${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-description,
			.fb-info-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
				${subHeadingTabPaddingValue && SubHeadingTabPadding?.top ? `padding: ${subHeadingTabPaddingValue};` : ""}
				${descTabMarginValue && descTabMargin?.top ? `margin: ${descTabMarginValue};` : ""}
				${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Tablet && subHeadingFontSizeUnits?.Tablet ? `font-size: ${subHeadingFontSize?.Tablet}${subHeadingFontSizeUnits?.Tablet};` : ''}
				${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Tablet && subHeadingLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingLetterSpacing?.Tablet}${subHeadingLetterSpacingUnits?.Tablet};` : ''}
				${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Tablet && subHeadingLineHeightUnits?.Tablet ? `line-height: ${subHeadingLineHeight?.Tablet}${subHeadingLineHeightUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 757px) {
			.fb-info-box-wrapper.${blockID} .fb-description,
			 .fb-info-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
				${subHeadingMobilePaddingValue && SubHeadingMobilePadding?.top ? `padding: ${subHeadingMobilePaddingValue};` : ""}
				${descMobileMarginValue && descMobileMargin?.top ? `margin: ${descMobileMarginValue};` : ""}
				${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Mobile && subHeadingFontSizeUnits?.Mobile ? `font-size: ${subHeadingFontSize?.Mobile}${subHeadingFontSizeUnits?.Mobile};` : ''}
				${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Mobile && subHeadingLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingLetterSpacing?.Mobile}${subHeadingLetterSpacingUnits?.Mobile};` : ''}
				${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Mobile && subHeadingLineHeightUnits?.Mobile ? `line-height: ${subHeadingLineHeight?.Mobile}${subHeadingLineHeightUnits?.Mobile};` : ''}
			}
		}
		.fb-info-box-wrapper.${blockID}.preset-6 .fb-info-button {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 6;
		}
		.fb-info-box-wrapper.${blockID} .fb-info-btn-container {
			${buttonAlignment ? `text-align: ${buttonAlignment};` : ''}
		}
		.fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
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
			
			${buttonDesktopPaddingValue && infoButtonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingValue};` : ''}	
			${buttonDesktopMarginValue && infoButtonDesktopMargin?.top ? `margin: ${buttonDesktopMarginValue};` : ''}
			${infoButtonBorder ? `border-style: ${infoButtonBorder};` : ''}
			${buttonDesktopBorderValue && infoButtonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderValue};` : ''}
			${infoButtonBorderColor ? `border-color: ${infoButtonBorderColor};` : ''}
			${buttonDesktopBorderRadiusValue && infoBtnDesktopBorderradiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusValue};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-info-box-wrapper.${blockID}:hover .fb-info-btn-wrapper {
			${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}
			${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
			${infoButtonHoverBorderColor ? `border-color: ${infoButtonHoverBorderColor};` : ''}
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
				${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
				${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
				${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
				${buttonTabPaddingValue && infoButtonTabPadding?.top ? `padding: ${buttonTabPaddingValue};` : ''}
				${buttonTabMarginValue && infoButtonTabMargin?.top ? `margin: ${buttonTabMarginValue};` : ''}
				${buttonTabBorderValue && infoButtonTabBorderWidth?.top ? `border-width: ${buttonTabBorderValue};` : ''}
				${buttonTabBorderRadiusValue && infoBtnTabBorderradiusWidth?.top ? `border-radius: ${buttonTabBorderRadiusValue};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
				${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
				${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
				${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
				${buttonMobilePaddingValue && infoButtonMobilePadding?.top ? `padding: ${buttonMobilePaddingValue};` : ''}
				${buttonMobileMarginValue && infoButtonMobileMargin?.top ? `margin: ${buttonMobileMarginValue};` : ''}
				${buttonMobileBorderValue && infoButtonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderValue};` : ''}
				${buttonMobileBorderRadiusValue && infoBtnMobileBorderradiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusValue};` : ''}
			}
		}
		.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
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
			${mediaDesktopPadding && mediaPaddingDesktop?.top ? `padding: ${mediaDesktopPadding};` : ''}
			${mediaDesktopMargin && mediaMarginDesktop?.top ? `margin: ${mediaDesktopMargin};` : ''}
			${mediaBorder ? `border-style: ${mediaBorder};` : ''}
			${mediaBorderDesktopWidth && mediaBorderDesktop?.top ? `border-width: ${mediaBorderDesktopWidth};` : ''}
			${mediaBorderColor ? `border-color: ${mediaBorderColor};` : ''}
			${mediaBorderRadiusDesktop && mediaBorderRadiusDesktop?.top ? `border-radius: ${mediaBorderRadiusDesktopWidth};` : ''}
			background-repeat: none;
			background-size: cover;
			${mediaClassicColor ? `justify-content: center; ` : ''}
			overflow: hidden;
			transition: all .3s ease-in-out;
		}
		.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper{
			${infoBoxPresetStyle === "preset-5" ?
				`
				border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
				` : ''
			}
		}
		
		.fb-info-box-wrapper.${blockID}:hover .fb-info-media-wrapper {
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
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
				${mediaTabletPadding && mediaPaddingTablet?.top ? `padding: ${mediaTabletPadding};` : ''}
				${mediaTabletMargin && mediaMarginTablet?.top ? `margin: ${mediaTabletMargin};` : ''}
				${mediaBorderTabletWidth && mediaBorderTablet?.top ? `border-width: ${mediaBorderTabletWidth};` : ''}
				${mediaBorderRadiusTabletWidth && mediaBorderRadiusTablet?.top ? `border-radius: ${mediaBorderRadiusTabletWidth};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
				${mediaMobilePadding && mediaPaddingMobile?.top ? `padding: ${mediaMobilePadding};` : ''}
				${mediaMobileMargin && mediaMarginMobile?.top ? `margin: ${mediaMobileMargin};` : ''}
				${mediaBorderMobileWidth && mediaBorderMobile?.top ? `border-width: ${mediaBorderMobileWidth};` : ''}
				${mediaBorderRadiusMobileWidth && mediaBorderRadiusMobile?.top ? `border-radius: ${mediaBorderRadiusMobileWidth};` : ''}
			}
		}

		.fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
		.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
			${mediaSize?.Desktop ? `width: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
			${mediaHeight?.Desktop ? `height: ${mediaHeight?.Desktop}${mediaHeightUnits?.Desktop};` : ''}
			${mediaSwitcher === "icon" && mediaIconColor ? `fill: ${mediaIconColor};` : ""}
			${mediaSwitcher === "image" && infoMediaSize ? `object-fit: ${infoMediaSize};` : ""}
		}

		.fb-info-box-wrapper.${blockID}:hover .fb-icon-wrapper svg {
			${mediaIconHoverColor ? `fill: ${mediaIconHoverColor};` : "#ffffff"}
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
				${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
				${mediaHeight?.Tablet ? `height: ${mediaHeight?.Tablet}${mediaHeightUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
				${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
				${mediaHeight?.Mobile ? `height: ${mediaHeight?.Mobile}${mediaHeightUnits?.Mobile};` : ''}
			}
		}

		.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper img,
		.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
			${btnIconSize?.Desktop ? `width: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ''}
			${btnIconColor ? `fill: ${btnIconColor};` : "#ffffff"}
			transform: rotate(${buttonIconRotate?.Desktop}deg);
			transition: all .3s ease-in-out;
		}

		.fb-info-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg,
		.fb-info-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper img {
			${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : "#ffffff"}
			transform: rotate(${buttonIconRotateHover?.Desktop}deg);
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg,
			.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper img {
				${btnIconSize?.Tablet ? `width: ${btnIconSize?.Tablet}${btnIconSizeUnits?.Tablet};` : ''}
				transform: rotate(${buttonIconRotate?.Tablet}deg);
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg,
			.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper img {
				${btnIconSize?.Mobile ? `width: ${btnIconSize?.Mobile}${btnIconSizeUnits?.Mobile};` : ''}
				transform: rotate(${buttonIconRotate?.Mobile}deg);
			}
		}
		.fb-info-box-wrapper.${blockID}.preset-6 .shape{
			position: absolute;
			top: 0;
			right: 0;
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

			info_Button_Text,
			wrapperAlignment,
			descAlignment,
			buttonAlignment,
			infoBoxBg,

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

			infoButtonMarginUnits,
			infoButtonDesktopMargin,
			infoButtonTabMargin,
			infoButtonMobileMargin,
			infoButtonActiveMarginDevice,

			infoButtonPaddingUnits,
			infoButtonDesktopPadding,
			infoButtonTabPadding,
			infoButtonMobilePadding,
			icon,
			btnIcon,
			width,
			contentAlignment,

			infoButtonBorder,
			infoBoxMarginUnits,
			infoBoxDesktopMargin,
			infoBoxTabMargin,
			infoBoxMobileMargin,
			infoButtonBorderUnits,
			infoButtonDesktopBorderWidth,
			infoButtonTabBorderWidth,
			infoButtonMobileBorderWidth,
			infoBtnBorderradiusUnits,
			infoBtnDesktopBorderradiusWidth,
			infoBtnTabBorderradiusWidth,
			infoBtnMobileBorderradiusWidth,
			infoButtonBorderColor,
			infoButtonHoverBorderColor,
			boxBgColor,
			boxBgHoverColor,
			globalZIndex,
			infoBoxOverflow,
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

			mediaSize,
			mediaSizeUnits,
			mediaHeight,
			mediaHeightUnits,

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
			buttonIconRotateSwitcher,
			buttonIconRotate,
			buttonIconRotateHover,
			infoIconPosition,

			mediaIconColor,
			mediaIconHoverColor,
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
			infoIconVerticalPosition,
			infoCardAlignment,

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
		],
	);

	const customCss = getCustomCss(infoBoxGlobalCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${fbInfoBoxStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
		});
	}, [fbInfoBoxStyle, customCss]);

	const editorStyle = `${fbInfoBoxStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

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
					<SelectControl
						label={__("Preset Style", "frontis-blocks")}
						value={infoBoxPresetStyle}
						options={PRESETS}
						onChange={(selected) => changeInfoBoxPreset(selected)}
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
