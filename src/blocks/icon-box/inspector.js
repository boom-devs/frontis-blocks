import { __ } from "@wordpress/i18n";

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
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
	ICON_ICON_POSITION,
	ICON_ICON_VERTICAL_POSITION,
	ICON_WRAP_ALIGNMENT,
	PRESETS,
	OVERFLOW_OP
} from "./constants/constants";

import { useState, createRef, useEffect, useMemo, memo } from "@wordpress/element";


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
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';
import FB_Presets from '@Components/presets';
import './editor.scss';
import {iconBoxPresets} from './preset';

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		iconBoxPresetStyle,
		Heading_Text,
		headingTag,
		Alignment,
		Sub_Heading_Switcher,
		Sub_Heading_Text,
		headingGlobalTypoSwitcher,
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
		borderRadiusLink,
		Heading_padding_units,
		Heading_Desktop_padding,
		Heading_Tab_padding,
		Heading_Mobile_padding,
		paddingLink,
		borderLink,

		Heading_Margin_Units,
		Heading_Desktop_Margin,
		Heading_Tab_Margin,
		Heading_Mobile_Margin,
		Heading_Margin_Link,

		icon_Box_Button_Switcher,
		icon_Box_Button_Text,
		wrapperAlignment,
		descAlignment,
		buttonAlignment,

		SubHeadingPaddingUnits,
		SubHeadingDesktopPadding,
		SubHeadingTabPadding,
		SubHeadingMobilePadding,
		SubHeadingPaddingLink,

		subHeadingGlobalTypoSwitcher,
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
		descMarginLink,

		buttonGlobalTypoSwitcher,
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
		btnBorderRadiusLink,

		iconBoxButtonMarginLink,
		iconBoxButtonMarginUnits,
		iconBoxButtonDesktopMargin,
		iconBoxButtonTabMargin,
		iconBoxButtonMobileMargin,

		iconBoxButtonPaddingUnits,
		iconBoxButtonDesktopPadding,
		iconBoxButtonTabPadding,
		iconBoxButtonMobilePadding,
		iconBoxButtonPaddingLink,
		iconBoxButtonLink,
		iconBoxbtnTargetUrl,
		icon,
		btnIcon,
		mediaSwitcher,

		iconBoxButtonBorder,
		iconBoxButtonBorderUnits,
		iconBoxButtonDesktopBorderWidth,
		iconBoxButtonTabBorderWidth,
		iconBoxButtonMobileBorderWidth,
		iconBoxBtnBorderradiusUnits,
		iconBoxBtnDesktopBorderradiusWidth,
		iconBoxBtnTabBorderradiusWidth,
		iconBoxBtnMobileBorderradiusWidth,
		iconBoxButtonBorderColorSwitcher,
		iconBoxButtonBorderColor,
		iconBoxButtonHoverBorderColor,
		mediaSize,
		mediaSizeUnits,
		globalZIndex,
		iconBoxOverflow,
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

		buttonIconSwitcher,
		btnIconColor,
		btnIconHoverColor,
		btnIconColorSwitcher,
		btnIconPosition,
		iconBoxIconPosition,

		mediaIconColor,
		mediaIconHoverColor,
		mediaIconColorSwitcher,
		boxGlobalBoxShadowSwitcher,
		boxGlobalBoxShadowValues,
		boxGlobalHoverBoxShadowValues,
		iconBoxMediaUrl,
		mediaBackColorSwitcher,
		mediaBackgroundType,
		mediaClassicColor,
		mediaGradientColor,
		mediaCustomGradientSwitcher,
		mediaCustomGradientInputValue,
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
		mediaHoverBackgroundImageUrl,
		mediaHoverBackgroundImageAlt,
		mediaHoverBackgroundImageID,
		mediaHoverBackgroundImagePosition,
		mediaHoverBackgroundImageAttachment,
		mediaHoverBackgroundImageSize,
		mediaHoverBackgroundImageRepeat,
		iconBoxButtonBorderLink,
		iconBoxIconVerticalPosition,
		iconBoxCardAlignment,

		wrapperLink,
		wrapperTargetUrl,
		wrapperUrlSwitcher,

		iconBoxDesktopSwitcher,
		iconBoxTabletSwitcher,
		iconBoxMobileSwitcher,

		iconBoxCustomCSS,
		iconBoxGlobalWraperID,
		iconBoxGlobalWraperClass,

		// Position
        iconBoxPositionType,
        iconBoxHZOrientationType,
        iconBoxVROrientationType,
        iconBoxHZLeftOffset,
        iconBoxHZLeftOffsetUnits,
        iconBoxHZRightOffset,
        iconBoxHZRightOffsetUnits,
        iconBoxVRTopOffset,
        iconBoxVRTopOffsetUnits,
        iconBoxVRBottomOffset,
        iconBoxVRBottomOffsetUnits,

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

	const deviceType= useDeviceType();

	/** iconBox Image */
	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/avatar.png';
	}

	// Set default value for teamMemberBackgroundImageUrl
	useEffect(() => {
		if (!iconBoxMediaUrl) {
			setAttributes({ iconBoxMediaUrl: defaultImageUrl });
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
		hook: 'frontisblocks-icon-box-dynamic-title-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicTitleEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'icon-box-dynamic-title-content',
		isProActive : getProActiveState
	});

	const dynamicDescriptionContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-icon-box-dynamic-description-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicDescriptionEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'icon-box-dynamic-description-content',
		isProActive : getProActiveState
	});

	const dynamicBtnContentToggleControls = getProToggleControls({ 
		hook: 'frontisblocks-icon-box-dynamic-btn-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBtnEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'icon-box-dynamic-btn-content',
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
		if (iconBoxButtonPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						iconBoxButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxButtonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxButtonMobilePadding: {
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
						iconBoxButtonDesktopPadding: {
							...iconBoxButtonDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxButtonTabPadding: {
							...iconBoxButtonTabPadding,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxButtonMobilePadding: {
							...iconBoxButtonMobilePadding,
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
		setAttributes({ iconBoxButtonPaddingLink: !iconBoxButtonPaddingLink });
	};
	
	const handleButtonPaddingUnitsHandler = (unit) => {
		setAttributes({
			iconBoxButtonPaddingUnits: {
				...iconBoxButtonPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	
	const handleButtonMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (iconBoxButtonMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						iconBoxButtonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxButtonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxButtonMobileMargin: {
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
						iconBoxButtonDesktopMargin: {
							...iconBoxButtonDesktopMargin,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxButtonTabMargin: {
							...iconBoxButtonTabMargin,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxButtonMobileMargin: {
							...iconBoxButtonMobileMargin,
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
		setAttributes({ iconBoxButtonMarginLink: !iconBoxButtonMarginLink });
	};
	
	const handleButtonMarginUnitsHandler = (unit) => {
		setAttributes({
			iconBoxButtonMarginUnits: {
				...iconBoxButtonMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	
	/** Start Border */
	const handleButtonBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (iconBoxButtonBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						iconBoxButtonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxButtonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxButtonMobileBorderWidth: {
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
						iconBoxButtonDesktopBorderWidth: {
							...iconBoxButtonDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxButtonTabBorderWidth: {
							...iconBoxButtonTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxButtonMobileBorderWidth: {
							...iconBoxButtonMobileBorderWidth,
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
		setAttributes({ iconBoxButtonBorderLink: !iconBoxButtonBorderLink });
	};
	
	const handleButtonBorderUnitsHandler = (unit) => {
		setAttributes({
			iconBoxButtonBorderUnits: {
				...iconBoxButtonBorderUnits,
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
						iconBoxBtnDesktopBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxBtnTabBorderradiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxBtnMobileBorderradiusWidth: {
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
						iconBoxBtnDesktopBorderradiusWidth: {
							...iconBoxBtnDesktopBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBoxBtnTabBorderradiusWidth: {
							...iconBoxBtnTabBorderradiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBoxBtnMobileBorderradiusWidth: {
							...iconBoxBtnMobileBorderradiusWidth,
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
			iconBoxBtnBorderradiusUnits: {
				...iconBoxBtnBorderradiusUnits,
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
						className="fb-icon-box-presets"
						label={__('Select Preset', 'frontis-blocks')}
						presets={iconBoxPresets}
						value = {iconBoxPresetStyle}
						onChangeValue = 'iconBoxPresetStyle'
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
							value={iconBoxIconPosition}
							options={ICON_ICON_POSITION}
							onChange={(value) =>
								setAttributes({ iconBoxIconPosition: value })
							}
						/>
					</BaseControl>

					{(iconBoxIconPosition === 'left' || iconBoxIconPosition === 'right') && (
					<BaseControl className="fb-media-vertical-position">
						<SelectControl
							label={__("Card Alignment", "frontis-block")}
							value={iconBoxCardAlignment}
							options={ICON_WRAP_ALIGNMENT}
							onChange={(value) =>
								setAttributes({ iconBoxCardAlignment: value })
							}
						/>
					</BaseControl>
					)}

					{(iconBoxIconPosition === 'left' || iconBoxIconPosition === 'right') && (
					<BaseControl className="fb-media-vertical-position">
						<SelectControl
							label={__("Vertical Position", "frontis-block")}
							value={iconBoxIconVerticalPosition}
							options={ICON_ICON_VERTICAL_POSITION}
							onChange={(value) =>
								setAttributes({ iconBoxIconVerticalPosition: value })
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
									{iconBoxMediaUrl ? (
										<div
											className="fb-image-avatar-control"
											style={{
												backgroundImage: `url(${iconBoxMediaUrl})`,
											}}
										>
											<button
												className="fb-image-avatar-delete"
												onClick={() => {
													setAttributes({
														iconBoxMediaUrl: null,
														iconBoxMediaAlt: null,
														iconBoxMediaID: null,
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
															iconBoxMediaUrl: attachment.url,
															iconBoxMediaAlt: attachment.alt,
															iconBoxMediaID: attachment.id,
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
														iconBoxMediaUrl: attachment.url,
														iconBoxMediaAlt: attachment.alt,
														iconBoxMediaID: attachment.id,
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
			<div className="fb-icon-button-wrapper">
				<PanelBody
					title={__("Button", "frontis-block")}
					initialOpen={false}
				>
					<ToggleControl
						label={__("Show Button", "frontis-block")}
						checked={icon_Box_Button_Switcher}
						onChange={(value) =>
							setAttributes({ icon_Box_Button_Switcher: value })
						}
					/>

					{icon_Box_Button_Switcher && (
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
									value={icon_Box_Button_Text}
									onChange={(value) =>
										setAttributes({ icon_Box_Button_Text: value })
									}
									className="fb-icon-button-text"
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
										url={iconBoxButtonLink}
										onChangeUrl={(value) =>
											setAttributes({ iconBoxButtonLink: value })
										}
										openInNewTab={iconBoxbtnTargetUrl}
										onChangeOpenInNewTab={(value) =>
											setAttributes({ iconBoxbtnTargetUrl: value })
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
				title={__("Icon/Image", "frontis-block")}
				initialOpen={false}
			>
				<FB_Range
					min={0}
					max={500}
					label={__("Icon Size", "frontis-blocks")}
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
				setNormalCustomGradientInputValue={(value) => setAttributes({ mediaCustomGradientInputValue: value }) }
				normalBackgroundImageUrl={mediaBackgroundImageUrl}
				setNormalBackgroundImageUrl={(value) => setAttributes({ mediaBackgroundImageUrl: value })}
				normalBackgroundImageAlt={mediaBackgroundImageAlt}
				setNormalBackgroundImageAlt={(value) => setAttributes({ mediaBackgroundImageAlt: value })}
				normalBackgroundImageID={mediaBackgroundImageID}
				setNormalBackgroundImageID={(value) => setAttributes({ mediaBackgroundImageID: value })}
				normalBackgroundImagePosition={mediaBackgroundImagePosition}
				setNormalBackgroundImagePosition={(value) => setAttributes({ mediaBackgroundImagePosition: value }) }
				normalBackgroundImageAttachment={mediaBackgroundImageAttachment}
				setNormalBackgroundImageAttachment={(value) => setAttributes({ mediaBackgroundImageAttachment: value }) }
				normalBackgroundImageRepeat={mediaBackgroundImageRepeat}
				setNormalBackgroundImageRepeat={(value) => setAttributes({ mediaBackgroundImageRepeat: value }) }
				normalBackgroundImageSize={mediaBackgroundImageSize}
				setNormalBackgroundImageSize={(value) => setAttributes({ mediaBackgroundImageSize: value }) }
				hoverBackgroundType={mediaHoverBackgroundType}
				setHoverBackgroundType={(value) => setAttributes({ mediaHoverBackgroundType: value })}
				hoverClassicColor={mediaHoverClassicColor}
				setHoverClassicColor={(value) => setAttributes({ mediaHoverClassicColor: value === undefined ? '' : value })}
				hoverGradientColor={mediaHoverGradientColor}
				setHoverGradientColor={(value) => setAttributes({ mediaHoverGradientColor: value === undefined ? null : value })}
				hoverCustomGradientSwitcher={mediaHoverCustomGradientSwitcher}
				setHoverCustomGradientSwitcher={(value) => setAttributes({ mediaHoverCustomGradientSwitcher: value }) }
				hoverCustomGradientInputValue={mediaHoverCustomGradientInputValue}
				setHoverCustomGradientInputValue={(value) => setAttributes({ mediaHoverCustomGradientInputValue: value }) }
				hoverBackgroundImageUrl={mediaHoverBackgroundImageUrl}
				setHoverBackgroundImageUrl={(value) => setAttributes({ mediaHoverBackgroundImageUrl: value })}
				hoverBackgroundImageAlt={mediaHoverBackgroundImageAlt}
				setHoverBackgroundImageAlt={(value) => setAttributes({ mediaHoverBackgroundImageAlt: value })}
				hoverBackgroundImageID={mediaHoverBackgroundImageID}
				setHoverBackgroundImageID={(value) => setAttributes({ mediaHoverBackgroundImageID: value })}
				hoverBackgroundImagePosition={mediaHoverBackgroundImagePosition}
				setHoverBackgroundImagePosition={(value) => setAttributes({ mediaHoverBackgroundImagePosition: value }) }
				hoverBackgroundImageAttachment={mediaHoverBackgroundImageAttachment}
				setHoverBackgroundImageAttachment={(value) => setAttributes({ mediaHoverBackgroundImageAttachment: value }) }
				hoverBackgroundImageRepeat={mediaHoverBackgroundImageRepeat}
				setHoverBackgroundImageRepeat={(value) => setAttributes({ mediaHoverBackgroundImageRepeat: value }) }
				hoverBackgroundImageSize={mediaHoverBackgroundImageSize}
				setHoverBackgroundImageSize={(value) => setAttributes({ mediaHoverBackgroundImageSize: value }) }
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
							headingGlobalTypoSwitcher: value === 'default' ? {...headingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...headingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={headingGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ headingGlobalTypoOption: value })}

					fontFamily={headingFontFamily}
					onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={headingFontSize}
					onChangeFontSize={(value) => setAttributes({ headingFontSize: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={headingFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

					fontWeight={headingFontWeight}
					onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={headingFontStyle}
					onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={headingTextTransform}
					onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={headingTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={headingLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={headingLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

					lineHeight={headingLineHeight}
					onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, lineHeight: value && false} })}

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
			className="fb-icon-box-desc-setting-wrapper"
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
						subHeadingGlobalTypoSwitcher: value === 'default' ? {...subHeadingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...subHeadingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
					})
				}}

				globalTypoOption={subHeadingGlobalTypoOption}
				onChangeGlobalTypoOption={(value) => setAttributes({ subHeadingGlobalTypoOption: value })}

				fontFamily={subHeadingFontFamily}
				onChangeFontFamily={(value) => setAttributes({ subHeadingFontFamily: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontFamily: value && false} })}

				fontSize={subHeadingFontSize}
				onChangeFontSize={(value) => setAttributes({ subHeadingFontSize: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontSize: value && false} })}

				fontSizeUnits={subHeadingFontSizeUnits}
				onChangeFontSizeUnit={(value) => setAttributes({ subHeadingFontSizeUnits: value })}

				fontWeight={subHeadingFontWeight}
				onChangeFontWeight={(value) => setAttributes({ subHeadingFontWeight: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontWeight: value && false} })}

				fontStyle={subHeadingFontStyle}
				onChangeFontStyle={(value) => setAttributes({ subHeadingFontStyle: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontStyle: value && false} })}

				textTransform={subHeadingTextTransform}
				onChangeTextTransform={(value) => setAttributes({ subHeadingTextTransform: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, textTransform: value && false} })}

				textDecoration={subHeadingTextDecoration}
				onChangeTextDecoration={(value) => setAttributes({ subHeadingTextDecoration: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, textDecoration: value && false} })}

				letterSpacing={subHeadingLetterSpacing}
				onChangeLetterSpacing={(value) => setAttributes({ subHeadingLetterSpacing: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, letterSpacing: value && false} })}

				letterSpacingUnits={subHeadingLetterSpacingUnits}
				onChangeLetterSpacingUnit={(value) => setAttributes({ subHeadingLetterSpacingUnits: value })}

				lineHeight={subHeadingLineHeight}
				onChangeLineHeight={(value) => setAttributes({ subHeadingLineHeight: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, lineHeight: value && false} })}

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
			{icon_Box_Button_Switcher && (
			<PanelBody
				title={__("Button", "frontis-block")}
				className="fb-icon-box-button-setting-wrapper"
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
							buttonGlobalTypoSwitcher: value === 'default' ? {...buttonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...buttonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
						})
					}}

					globalTypoOption={buttonGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ buttonGlobalTypoOption: value })}

					fontFamily={buttonFontFamily}
					onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontFamily: value && false} })}

					fontSize={buttonFontSize}
					onChangeFontSize={(value) => setAttributes({ buttonFontSize: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontSize: value && false} })}

					fontSizeUnits={buttonFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

					fontWeight={buttonFontWeight}
					onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontWeight: value && false} })}

					fontStyle={buttonFontStyle}
					onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontStyle: value && false} })}

					textTransform={buttonTextTransform}
					onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, textTransform: value && false} })}

					textDecoration={buttonTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, textDecoration: value && false} })}

					letterSpacing={buttonLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, letterSpacing: value && false} })}

					letterSpacingUnits={buttonLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

					lineHeight={buttonLineHeight}
					onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, lineHeight: value && false} })}

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
				</>}

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleButtonPaddingUnitsHandler}
					spacingUnits={iconBoxButtonPaddingUnits}
					spacingDesktop={iconBoxButtonDesktopPadding}
					spacingTablet={iconBoxButtonTabPadding}
					spacingMobile={iconBoxButtonMobilePadding}
					handleSpacingUnitHandler={handleButtonPaddingUnitChange}
					spacingCombineBtn={iconBoxButtonPaddingLink}
					spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleButtonMarginUnitsHandler}
					spacingUnits={iconBoxButtonMarginUnits}
					spacingDesktop={iconBoxButtonDesktopMargin}
					spacingTablet={iconBoxButtonTabMargin}
					spacingMobile={iconBoxButtonMobileMargin}
					handleSpacingUnitHandler={handleButtonMarginUnitChange}
					spacingCombineBtn={iconBoxButtonMarginLink}
					spacingCombineBtnHandler={handleButtonMarginCombineBtn}
					setAttributes={setAttributes}
				/>
				{/* Border Width */}
				
				<SelectControl
					label={__("Border Style", "frontis-block")}
					value={iconBoxButtonBorder}
					options={BORDER_STYLES}
					onChange={(value) =>
						setAttributes({ iconBoxButtonBorder: value })
					}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={iconBoxButtonBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ iconBoxButtonBorderColorSwitcher: value })}
				/>
						
				{iconBoxButtonBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={iconBoxButtonBorderColor}
						setGlobalColor={(value) => setAttributes({ iconBoxButtonBorderColor: value === undefined ? '' : value })}
					/>
				)}
						
				{iconBoxButtonBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={iconBoxButtonHoverBorderColor}
						setGlobalColor={(value) => setAttributes({ iconBoxButtonHoverBorderColor: value === undefined ? '' : value })}
					/>
				)}
				
				<FB_Spacing
					label={__("Border Width", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleButtonBorderUnitsHandler}
					spacingUnits={iconBoxButtonBorderUnits}
					spacingDesktop={iconBoxButtonDesktopBorderWidth}
					spacingTablet={iconBoxButtonTabBorderWidth}
					spacingMobile={iconBoxButtonMobileBorderWidth}
					handleSpacingUnitHandler={handleButtonBorderUnitChange}
					spacingCombineBtn={iconBoxButtonBorderLink}
					spacingCombineBtnHandler={handleButtonBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				{/* Border radius Width */}
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleButtonBorderRadiusUnitsHandler}
					spacingUnits={iconBoxBtnBorderradiusUnits}
					spacingDesktop={iconBoxBtnDesktopBorderradiusWidth}
					spacingTablet={iconBoxBtnTabBorderradiusWidth}
					spacingMobile={iconBoxBtnMobileBorderradiusWidth}
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
							value={iconBoxOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ iconBoxOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={iconBoxPositionType}
							setPositionType={(value) => setAttributes({ iconBoxPositionType: value })}
																			
							HZOrientationType={iconBoxHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ iconBoxHZOrientationType: value })
							}
							VROrientationType={iconBoxVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ iconBoxVROrientationType: value })
							}
																				
							HZLeftOffset={iconBoxHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ iconBoxHZLeftOffset: value })}
							HZLeftOffsetUnits={iconBoxHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ iconBoxHZLeftOffsetUnits: value })}
							HZRightOffset={iconBoxHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ iconBoxHZRightOffset: value })}
							HZRightOffsetUnits={iconBoxHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ iconBoxHZRightOffsetUnits: value })}
																			
							VRTopOffset={iconBoxVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ iconBoxVRTopOffset: value })}
							VRTopOffsetUnits={iconBoxVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ iconBoxVRTopOffsetUnits: value })}
							VRBottomOffset={iconBoxVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ iconBoxVRBottomOffset: value })}
							VRBottomOffsetUnits={iconBoxVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ iconBoxVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={iconBoxGlobalWraperID}
							onChangeValue={(value) => setAttributes({ iconBoxGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={iconBoxGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ iconBoxGlobalWraperClass: value })}
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
						title={__("Wrapper Link", "frontis-blocks")}
						initialOpen={false}
					>
						<ToggleControl
								label={__("Enable Link", "frontis-blocks")}
								checked={wrapperUrlSwitcher}
								onChange={(value) => setAttributes({ wrapperUrlSwitcher: value })}
						/>
						
						{wrapperUrlSwitcher && (
							<FB_UrlControl
								url={wrapperLink}
								onChangeUrl={(value) =>
									setAttributes({ wrapperLink: value })
								}
								openInNewTab={wrapperTargetUrl}
								onChangeOpenInNewTab={(value) =>
									setAttributes({ wrapperTargetUrl: value })
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
							desktopValue={iconBoxDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ iconBoxDesktopSwitcher: value })}

							tabletValue={iconBoxTabletSwitcher}
							setTabletValue={(value) => setAttributes({ iconBoxTabletSwitcher: value })}

							mobileValue={iconBoxMobileSwitcher}
							setMobileValue={(value) => setAttributes({ iconBoxMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor  
							value={iconBoxCustomCSS} 
							onChangeValue={(value) => setAttributes({ iconBoxCustomCSS: value })}
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