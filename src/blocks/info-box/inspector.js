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
	BORDER_STYLES,
	mediaTypes,
	ICON_POSITION,
	ITEM_POSITION,
	ICON_VERTICAL_POSITION,
	LAYOUT_ALIGNMENT,
	OVERFLOW_OP
} from '@Constants/fbConstants';

import { useEffect, memo } from "@wordpress/element";

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
							options={mediaTypes}
							onChange={(value) =>
								setAttributes({ mediaSwitcher: value })
							}
						/>
					</BaseControl>

					<BaseControl className="fb-media-position">
						<SelectControl
							label={__("Media Position", "frontis-block")}
							value={infoIconPosition}
							options={ITEM_POSITION}
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
								options={LAYOUT_ALIGNMENT}
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
								options={ICON_VERTICAL_POSITION}
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