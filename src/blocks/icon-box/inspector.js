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

import { useState, createRef, useEffect, useMemo } from "@wordpress/element";


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

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		iconBoxPresetStyle,
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
		paddingLink,
		borderLink,

		Heading_Margin_Units,
		Heading_Desktop_Margin,
		Heading_Tab_Margin,
		Heading_Mobile_Margin,
		Heading_Margin_Link,

		icon_Box_Button_Switcher,
		icon_Box_Button_Text,
		icon_Box_Button_Link,
		wrapperAlignment,
		descAlignment,
		buttonAlignment,
		iconBoxBg,

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

		iconBoxPaddingUnits,
		iconBoxDesktopPadding,
		iconBoxTabPadding,
		iconBoxMobilePadding,
		iconBoxBorderUnits,
		iconBoxDesktopBorderWidth,
		iconBoxTabBorderWidth,
		iconBoxMobileBorderWidth,

		iconBoxBorderRadiusUnits,
		iconBoxDesktopBorderRadiusWidth,
		iconBoxTabBorderRadiusWidth,
		iconBoxMobileBorderRadiusWidth,

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

		iconBoxButtonMarginLink,
		iconBoxButtonMarginUnits,
		iconBoxButtonDesktopMargin,
		iconBoxButtonTabMargin,
		iconBoxButtonMobileMargin,
		iconBoxButtonActiveMarginDevice,

		iconBoxButtonPaddingUnits,
		iconBoxButtonDesktopPadding,
		iconBoxButtonTabPadding,
		iconBoxButtonMobilePadding,
		iconBoxButtonPaddingLink,
		iconBoxButtonLink,
		iconBoxbtnTargetUrl,
		icon,
		frontendIcon,
		btnIcon,
		frontendBtnIcon,
		width,
		mediaSwitcher,
		contentAlignment,

		iconBoxButtonBorder,
		iconBoxMarginUnits,
		iconBoxDesktopMargin,
		iconBoxTabMargin,
		iconBoxMobileMargin,
		iconBoxMarginLink,
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
		boxBgColor,
		boxBgColorSwitcher,
		boxBgHoverColor,
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
		iconBoxIconPosition,

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
		iconBoxMediaID,
		iconBoxMediaAlt,
		iconBoxMediaUrl,
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

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-icon-box-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

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

	/** Start Preset Style **/
	const changeIconBoxPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-1": {
				buttonIconSwitcher: false,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'center',
				Alignment: 'center',
				descAlignment: 'center',
				buttonAlignment: 'center',
                mediaClassicColor: '#D7EBFF',
                mediaHoverClassicColor: '#D7EBFF',
				globalBgColor: '',
                globalBgHoverColor: '',
                mediaIconColor: '#399CFF',
                mediaIconHoverColor: '#399CFF',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#399CFF',
                btnIconColor: '#15171C',
                globalBorderRadiusDesktop: {
                    top: "14",
					bottom: "14",
					left: "14",
					right: "14",
                },
				mediaBorderRadiusDesktop: {
                    top: "24",
					bottom: "24",
					left: "24",
					right: "24",
                },
				mediaMarginDesktop: {
                    top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
            "preset-2": {
				buttonIconSwitcher: true,
				iconBoxIconPosition: 'left',
				wrapperAlignment: 'left',
				Alignment: 'left',
				descAlignment: 'left',
				buttonAlignment: 'left',
                mediaClassicColor: '',
                mediaHoverClassicColor: '',
				globalBgColor: '#ffffff',
                globalBgHoverColor: '#ffffff',
                mediaIconColor: '#399CFF',
                mediaIconHoverColor: '#399CFF',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#15171C',
                btnIconColor: '#15171C',
                globalBorderRadiusDesktop: {
                    top: "",
					bottom: "",
					left: "",
					right: "",
                },
				mediaBorderRadiusDesktop: {
                    top: "",
					bottom: "",
					left: "",
					right: "",
                },
				mediaMarginDesktop: {
                    top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
            "preset-3": {
                buttonIconSwitcher: true,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'center',
				Alignment: 'center',
				descAlignment: 'center',
				buttonAlignment: 'center',
                mediaClassicColor: '#F89B2E',
                mediaHoverClassicColor: '#F89B2E',
				globalBgColor: '#FFFBF5',
                globalBgHoverColor: '#FFFBF5',
                mediaIconColor: '#ffffff',
                mediaIconHoverColor: '#ffffff',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#F89B2E',
                btnIconColor: '#F89B2E',
                globalBorderRadiusDesktop: {
                    top: "6",
					bottom: "6",
					left: "6",
					right: "6",
                },
				mediaBorderRadiusDesktop: {
                    top: "14",
					bottom: "14",
					left: "14",
					right: "14",
                },
				mediaMarginDesktop: {
					top: '-64',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
            "preset-4": {
                buttonIconSwitcher: true,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'left',
				Alignment: 'left',
				descAlignment: 'left',
				buttonAlignment: 'left',
                mediaClassicColor: '#F89B2E',
                mediaHoverClassicColor: '#F89B2E',
				globalBgColor: '',
                globalBgHoverColor: '',
                mediaIconColor: '#ffffff',
                mediaIconHoverColor: '#ffffff',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#F89B2E',
                btnIconColor: '#F89B2E',
                globalBorderRadiusDesktop: {
                    top: "6",
					bottom: "6",
					left: "6",
					right: "6",
                },
				mediaBorderRadiusDesktop: {
                    top: "",
					bottom: "",
					left: "",
					right: "",
                },
				mediaMarginDesktop: {
					top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
			"preset-5": {
                buttonIconSwitcher: true,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'left',
				Alignment: 'left',
				descAlignment: 'left',
				buttonAlignment: 'left',
                mediaClassicColor: '#15171C',
                mediaHoverClassicColor: '#15171C',
				globalBgColor: '#F7F7F7',
                globalBgHoverColor: '#F7F7F7',
                mediaIconColor: '#ffffff',
                mediaIconHoverColor: '#ffffff',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#15171C',
                btnIconColor: '#15171C',
                globalBorderRadiusDesktop: {
                    top: "6",
					bottom: "6",
					left: "6",
					right: "6",
                },
				mediaBorderRadiusDesktop: {
                    top: "14",
					bottom: "14",
					left: "14",
					right: "14",
                },
				mediaMarginDesktop: {
					top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
            
        };

        const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                iconBoxPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Dual Button: Preset "${selectedPreset}" not found.`);
        }
    };
    /** End Preset Style **/

	/**
		* Preset Styles Data Object
		*/
		const presetStyles = {
			"preset-1": {
				buttonIconSwitcher: true,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'center',
				Alignment: 'center',
				descAlignment: 'center',
				buttonAlignment: 'center',
                mediaClassicColor: '#D7EBFF',
                mediaHoverClassicColor: '#D7EBFF',
				globalBgColor: '',
                globalBgHoverColor: '',
                mediaIconColor: '#399CFF',
                mediaIconHoverColor: '#399CFF',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#399CFF',
                btnIconColor: '#15171C',
				mediaSize: {
					Desktop: '25',
					Tablet: '',
					Mobile: ''
				},
                globalBorderRadiusDesktop: {
                    top: "14",
					bottom: "14",
					left: "14",
					right: "14",
                },
				mediaBorderRadiusDesktop: {
                    top: "24",
					bottom: "24",
					left: "24",
					right: "24",
                },
				mediaMarginDesktop: {
                    top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
            "preset-2": {
				buttonIconSwitcher: true,
				iconBoxIconPosition: 'left',
				wrapperAlignment: 'left',
				Alignment: 'left',
				descAlignment: 'left',
				buttonAlignment: 'left',
                mediaClassicColor: '',
                mediaHoverClassicColor: '',
				globalBgColor: '#ffffff',
                globalBgHoverColor: '#ffffff',
                mediaIconColor: '#399CFF',
                mediaIconHoverColor: '#399CFF',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#15171C',
                btnIconColor: '#15171C',
				mediaSize: {
					Desktop: '68',
					Tablet: '',
					Mobile: ''
				},
                globalBorderRadiusDesktop: {
                    top: "",
					bottom: "",
					left: "",
					right: "",
                },
				mediaBorderRadiusDesktop: {
                    top: "",
					bottom: "",
					left: "",
					right: "",
                },
				mediaMarginDesktop: {
                    top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
            "preset-3": {
                buttonIconSwitcher: true,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'center',
				Alignment: 'center',
				descAlignment: 'center',
				buttonAlignment: 'center',
                mediaClassicColor: '#F89B2E',
                mediaHoverClassicColor: '#F89B2E',
				globalBgColor: '#FFFBF5',
                globalBgHoverColor: '#FFFBF5',
                mediaIconColor: '#ffffff',
                mediaIconHoverColor: '#ffffff',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#F89B2E',
                btnIconColor: '#F89B2E',
				mediaSize: {
					Desktop: '25',
					Tablet: '',
					Mobile: ''
				},
                globalBorderRadiusDesktop: {
                    top: "6",
					bottom: "6",
					left: "6",
					right: "6",
                },
				mediaBorderRadiusDesktop: {
                    top: "14",
					bottom: "14",
					left: "14",
					right: "14",
                },
				mediaMarginDesktop: {
					top: '-64',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
            "preset-4": {
                buttonIconSwitcher: true,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'left',
				Alignment: 'left',
				descAlignment: 'left',
				buttonAlignment: 'left',
                mediaClassicColor: '#F89B2E',
                mediaHoverClassicColor: '#F89B2E',
				globalBgColor: '',
                globalBgHoverColor: '',
                mediaIconColor: '#ffffff',
                mediaIconHoverColor: '#ffffff',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#F89B2E',
                btnIconColor: '#F89B2E',
				mediaSize: {
					Desktop: '25',
					Tablet: '',
					Mobile: ''
				},
                globalBorderRadiusDesktop: {
                    top: "6",
					bottom: "6",
					left: "6",
					right: "6",
                },
				mediaBorderRadiusDesktop: {
                    top: "",
					bottom: "",
					left: "",
					right: "",
                },
				mediaMarginDesktop: {
					top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
			"preset-5": {
                buttonIconSwitcher: true,
				iconBoxIconPosition: 'top',
				wrapperAlignment: 'left',
				Alignment: 'left',
				descAlignment: 'left',
				buttonAlignment: 'left',
                mediaClassicColor: '#15171C',
                mediaHoverClassicColor: '#15171C',
				globalBgColor: '#F7F7F7',
                globalBgHoverColor: '#F7F7F7',
                mediaIconColor: '#ffffff',
                mediaIconHoverColor: '#ffffff',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
                buttonTextColor: '#15171C',
                btnIconColor: '#15171C',
				mediaSize: {
					Desktop: '25',
					Tablet: '',
					Mobile: ''
				},
                globalBorderRadiusDesktop: {
                    top: "6",
					bottom: "6",
					left: "6",
					right: "6",
                },
				mediaBorderRadiusDesktop: {
                    top: "14",
					bottom: "14",
					left: "14",
					right: "14",
                },
				mediaMarginDesktop: {
					top: '0',
					bottom: '32',
					left: '12',
					right: '12',
                },
            },
		};
		  
		const iconBoxPresets = [
			{
				value: 'preset-1',
				label: __('Preset 1', 'frontis-blocks'),
				attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
				icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
							<g filter="url(#filter0_d_16980_14436)">
							<rect x="40" y="33" width="268" height="210" rx="14" fill="#EBEBEB" shape-rendering="crispEdges"/>
							<rect x="40.5" y="33.5" width="267" height="209" rx="13.5" stroke="white" shape-rendering="crispEdges"/>
							<g filter="url(#filter1_d_16980_14436)">
							<rect x="150" y="57" width="48" height="48" rx="14" fill="white" shape-rendering="crispEdges"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M164.254 68C163.392 68 162.565 68.3424 161.956 68.9519C161.346 69.5614 161.004 70.388 161.004 71.25V89.125C161.004 90.4179 161.518 91.6579 162.432 92.5721C163.346 93.4864 164.586 94 165.879 94C167.172 94 168.412 93.4864 169.326 92.5721C170.24 91.6579 170.754 90.4179 170.754 89.125V71.25C170.754 70.388 170.411 69.5614 169.802 68.9519C169.193 68.3424 168.366 68 167.504 68H164.254ZM165.879 90.75C166.31 90.75 166.723 90.5788 167.028 90.274C167.333 89.9693 167.504 89.556 167.504 89.125C167.504 88.694 167.333 88.2807 167.028 87.976C166.723 87.6712 166.31 87.5 165.879 87.5C165.448 87.5 165.035 87.6712 164.73 87.976C164.425 88.2807 164.254 88.694 164.254 89.125C164.254 89.556 164.425 89.9693 164.73 90.274C165.035 90.5788 165.448 90.75 165.879 90.75ZM174.004 87.8949L181.966 79.9324C182.576 79.3229 182.918 78.4964 182.918 77.6346C182.918 76.7728 182.576 75.9463 181.966 75.3369L179.667 73.0375C179.058 72.4282 178.231 72.0859 177.369 72.0859C176.507 72.0859 175.681 72.4282 175.072 73.0375L174.004 74.1051V87.8949ZM183.754 94H172.494L182.244 84.25H183.754C184.616 84.25 185.443 84.5924 186.052 85.2019C186.661 85.8114 187.004 86.638 187.004 87.5V90.75C187.004 91.612 186.661 92.4386 186.052 93.0481C185.443 93.6576 184.616 94 183.754 94Z" fill="#404655"/>
							</g>
							<g filter="url(#filter2_d_16980_14436)">
							<path d="M93 135C93 129.477 97.4772 125 103 125H245C250.523 125 255 129.477 255 135C255 140.523 250.523 145 245 145H103C97.4772 145 93 140.523 93 135Z" fill="white"/>
							</g>
							<g filter="url(#filter3_d_16980_14436)">
							<rect x="64" y="163" width="220" height="14" rx="7" fill="white"/>
							</g>
							<g filter="url(#filter4_d_16980_14436)">
							<rect x="130" y="197" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
							<rect x="138" y="205" width="50" height="6" rx="3" fill="#EBEBEB"/>
							</g>
							<g clip-path="url(#clip0_16980_14436)">
							<circle cx="210" cy="208.001" r="6.66667" stroke="#404655" stroke-width="1.6"/>
							<path d="M208 210L212 206M212 206V208.667M212 206H209.333" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							</g>
							<defs>
							<filter id="filter0_d_16980_14436" x="39" y="33" width="270" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14436" x="149" y="57" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14436" x="92" y="125" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14436" x="63" y="163" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
							</filter>
							<filter id="filter4_d_16980_14436" x="129" y="197" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14436"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14436" result="shape"/>
							</filter>
							<clipPath id="clip0_16980_14436">
							<rect width="16" height="16" fill="white" transform="translate(202 200)"/>
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
							<g filter="url(#filter0_d_16980_14736)">
							<rect x="40" y="67" width="268" height="142" rx="14" fill="#EBEBEB" shape-rendering="crispEdges"/>
							<rect x="40.5" y="67.5" width="267" height="141" rx="13.5" stroke="white" shape-rendering="crispEdges"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M70.8007 94.4004C69.8989 94.4004 69.034 94.7586 68.3963 95.3963C67.7586 96.034 67.4004 96.8989 67.4004 97.8007V116.503C67.4004 117.855 67.9378 119.153 68.8943 120.109C69.8508 121.066 71.1482 121.603 72.5009 121.603C73.8537 121.603 75.151 121.066 76.1075 120.109C77.0641 119.153 77.6015 117.855 77.6015 116.503V97.8007C77.6015 96.8989 77.2432 96.034 76.6055 95.3963C75.9678 94.7586 75.1029 94.4004 74.2011 94.4004H70.8007ZM72.5009 118.203C72.9518 118.203 73.3843 118.024 73.7031 117.705C74.022 117.386 74.2011 116.954 74.2011 116.503C74.2011 116.052 74.022 115.619 73.7031 115.3C73.3843 114.982 72.9518 114.803 72.5009 114.803C72.05 114.803 71.6176 114.982 71.2987 115.3C70.9799 115.619 70.8007 116.052 70.8007 116.503C70.8007 116.954 70.9799 117.386 71.2987 117.705C71.6176 118.024 72.05 118.203 72.5009 118.203ZM81.0018 115.216L89.3327 106.885C89.9701 106.247 90.3283 105.382 90.3283 104.481C90.3283 103.579 89.9701 102.714 89.3327 102.077L86.9269 99.6709C86.2893 99.0335 85.4245 98.6754 84.5229 98.6754C83.6212 98.6754 82.7565 99.0335 82.1188 99.6709L81.0018 100.788V115.216ZM91.2029 121.603H79.4223L89.6234 111.402H91.2029C92.1047 111.402 92.9696 111.76 93.6073 112.398C94.245 113.036 94.6032 113.901 94.6032 114.803V118.203C94.6032 119.105 94.245 119.97 93.6073 120.607C92.9696 121.245 92.1047 121.603 91.2029 121.603Z" fill="#404655"/>
							<g filter="url(#filter1_d_16980_14736)">
							<path d="M118.004 101C118.004 95.4772 122.481 91 128.004 91H270.004C275.527 91 280.004 95.4772 280.004 101C280.004 106.523 275.527 111 270.004 111H128.004C122.481 111 118.004 106.523 118.004 101Z" fill="white"/>
							</g>
							<g filter="url(#filter2_d_16980_14736)">
							<rect x="118.004" y="129" width="165.996" height="14" rx="7" fill="white"/>
							</g>
							<g filter="url(#filter3_d_16980_14736)">
							<rect x="118.004" y="163" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
							<rect x="126.004" y="171" width="50" height="6" rx="3" fill="#EBEBEB"/>
							</g>
							<g clip-path="url(#clip0_16980_14736)">
							<circle cx="198.004" cy="174.001" r="6.66667" stroke="#404655" stroke-width="1.6"/>
							<path d="M196.004 176L200.004 172M200.004 172V174.667M200.004 172H197.337" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							</g>
							<defs>
							<filter id="filter0_d_16980_14736" x="39" y="67" width="270" height="145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14736" x="117.004" y="91" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14736" x="117.004" y="129" width="167.996" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14736" x="117.004" y="163" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14736"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14736" result="shape"/>
							</filter>
							<clipPath id="clip0_16980_14736">
							<rect width="16" height="16" fill="white" transform="translate(190.004 166)"/>
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
							<g filter="url(#filter0_d_16980_14724)">
							<rect x="40" y="67" width="268" height="169" rx="14" fill="white"/>
							</g>
							<g filter="url(#filter1_d_16980_14724)">
							<rect x="150" y="45" width="48" height="48" rx="10" fill="white" shape-rendering="crispEdges"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M164.254 56C163.392 56 162.565 56.3424 161.956 56.9519C161.346 57.5614 161.004 58.388 161.004 59.25V77.125C161.004 78.4179 161.518 79.6579 162.432 80.5721C163.346 81.4864 164.586 82 165.879 82C167.172 82 168.412 81.4864 169.326 80.5721C170.24 79.6579 170.754 78.4179 170.754 77.125V59.25C170.754 58.388 170.411 57.5614 169.802 56.9519C169.193 56.3424 168.366 56 167.504 56H164.254ZM165.879 78.75C166.31 78.75 166.723 78.5788 167.028 78.274C167.333 77.9693 167.504 77.556 167.504 77.125C167.504 76.694 167.333 76.2807 167.028 75.976C166.723 75.6712 166.31 75.5 165.879 75.5C165.448 75.5 165.035 75.6712 164.73 75.976C164.425 76.2807 164.254 76.694 164.254 77.125C164.254 77.556 164.425 77.9693 164.73 78.274C165.035 78.5788 165.448 78.75 165.879 78.75ZM174.004 75.8949L181.966 67.9324C182.576 67.3229 182.918 66.4964 182.918 65.6346C182.918 64.7728 182.576 63.9463 181.966 63.3369L179.667 61.0375C179.058 60.4282 178.231 60.0859 177.369 60.0859C176.507 60.0859 175.681 60.4282 175.072 61.0375L174.004 62.1051V75.8949ZM183.754 82H172.494L182.244 72.25H183.754C184.616 72.25 185.443 72.5924 186.052 73.2019C186.661 73.8114 187.004 74.638 187.004 75.5V78.75C187.004 79.612 186.661 80.4386 186.052 81.0481C185.443 81.6576 184.616 82 183.754 82Z" fill="#404655"/>
							</g>
							<g filter="url(#filter2_d_16980_14724)">
							<path d="M101 123C101 117.477 105.477 113 111 113H237C242.523 113 247 117.477 247 123C247 128.523 242.523 133 237 133H111C105.477 133 101 128.523 101 123Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter3_d_16980_14724)">
							<rect x="64" y="151" width="220" height="14" rx="7" fill="#F3F3F3"/>
							</g>
							<g filter="url(#filter4_d_16980_14724)">
							<rect x="141" y="185" width="66" height="22" rx="11" fill="#E1E3E8" shape-rendering="crispEdges"/>
							<rect x="149" y="193" width="50" height="6" rx="3" fill="white"/>
							</g>
							<defs>
							<filter id="filter0_d_16980_14724" x="39" y="67" width="270" height="172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14724" x="149" y="45" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14724" x="100" y="113" width="148" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14724" x="63" y="151" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
							</filter>
							<filter id="filter4_d_16980_14724" x="140" y="185" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14724"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14724" result="shape"/>
							</filter>
							</defs>
						</svg>`,
			},
			{
				value: 'preset-4',
				label: __('Preset 4', 'frontis-blocks'),
				attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
				icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
							<g filter="url(#filter0_d_16980_14691)">
							<rect x="40" y="33" width="268" height="210" rx="14" fill="#EBEBEB" shape-rendering="crispEdges"/>
							<rect x="40.5" y="33.5" width="267" height="209" rx="13.5" stroke="white" shape-rendering="crispEdges"/>
							<g filter="url(#filter1_d_16980_14691)">
							<path d="M110.379 84.2505C108.625 109.246 96.761 105.824 86.5938 103.553C68.5188 99.0112 64 95.538 64 84.2505C64 72.963 78.6859 56.9999 96.761 57C110.379 57.5 111.379 70 110.379 84.2505Z" fill="white"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M82.6912 71.4043C82.0533 71.4043 81.4416 71.6577 80.9906 72.1087C80.5395 72.5598 80.2861 73.1715 80.2861 73.8093V87.0371C80.2861 87.9939 80.6662 88.9115 81.3428 89.588C82.0193 90.2646 82.9369 90.6446 83.8937 90.6446C84.8505 90.6446 85.7681 90.2646 86.4446 89.588C87.1212 88.9115 87.5013 87.9939 87.5013 87.0371V73.8093C87.5013 73.1715 87.2479 72.5598 86.7968 72.1087C86.3458 71.6577 85.7341 71.4043 85.0962 71.4043H82.6912ZM83.8937 88.2396C84.2126 88.2396 84.5185 88.1129 84.744 87.8874C84.9695 87.6619 85.0962 87.356 85.0962 87.0371C85.0962 86.7181 84.9695 86.4123 84.744 86.1868C84.5185 85.9612 84.2126 85.8345 83.8937 85.8345C83.5748 85.8345 83.2689 85.9612 83.0434 86.1868C82.8179 86.4123 82.6912 86.7181 82.6912 87.0371C82.6912 87.356 82.8179 87.6619 83.0434 87.8874C83.2689 88.1129 83.5748 88.2396 83.8937 88.2396ZM89.9063 86.1268L95.7987 80.2344C96.2495 79.7834 96.5028 79.1718 96.5028 78.534C96.5028 77.8963 96.2495 77.2847 95.7987 76.8337L94.0971 75.1321C93.6461 74.6812 93.0345 74.4279 92.3967 74.4279C91.759 74.4279 91.1474 74.6812 90.6964 75.1321L89.9063 75.9222V86.1268ZM97.1214 90.6446H88.7892L96.0043 83.4295H97.1214C97.7593 83.4295 98.371 83.6829 98.822 84.1339C99.2731 84.585 99.5265 85.1967 99.5265 85.8345V88.2396C99.5265 88.8774 99.2731 89.4892 98.822 89.9402C98.371 90.3912 97.7593 90.6446 97.1214 90.6446Z" fill="#404655"/>
							</g>
							<g filter="url(#filter2_d_16980_14691)">
							<path d="M64 135C64 129.477 68.4772 125 74 125H216C221.523 125 226 129.477 226 135C226 140.523 221.523 145 216 145H74C68.4772 145 64 140.523 64 135Z" fill="white"/>
							</g>
							<g filter="url(#filter3_d_16980_14691)">
							<rect x="64" y="163" width="220" height="14" rx="7" fill="white"/>
							</g>
							<g filter="url(#filter4_d_16980_14691)">
							<rect x="64" y="197" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
							<rect x="72" y="205" width="50" height="6" rx="3" fill="#EBEBEB"/>
							</g>
							<g clip-path="url(#clip0_16980_14691)">
							<circle cx="144" cy="208.001" r="6.66667" stroke="#404655" stroke-width="1.6"/>
							<path d="M142 210L146 206M146 206V208.667M146 206H143.333" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							</g>
							<defs>
							<filter id="filter0_d_16980_14691" x="39" y="33" width="270" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14691" x="63" y="57" width="50" height="51.1172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14691" x="63" y="125" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14691" x="63" y="163" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
							</filter>
							<filter id="filter4_d_16980_14691" x="63" y="197" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14691"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14691" result="shape"/>
							</filter>
							<clipPath id="clip0_16980_14691">
							<rect width="16" height="16" fill="white" transform="translate(136 200)"/>
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
							<g filter="url(#filter0_d_16980_14708)">
							<rect x="40" y="33" width="268" height="210" rx="14" fill="white" fill-opacity="0.4" shape-rendering="crispEdges"/>
							<g filter="url(#filter1_d_16980_14708)">
							<rect x="64" y="57" width="48" height="48" rx="10" fill="white" shape-rendering="crispEdges"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M78.2539 68C77.392 68 76.5653 68.3424 75.9558 68.9519C75.3463 69.5614 75.0039 70.388 75.0039 71.25V89.125C75.0039 90.4179 75.5175 91.6579 76.4318 92.5721C77.346 93.4864 78.586 94 79.8789 94C81.1718 94 82.4118 93.4864 83.3261 92.5721C84.2403 91.6579 84.7539 90.4179 84.7539 89.125V71.25C84.7539 70.388 84.4115 69.5614 83.802 68.9519C83.1925 68.3424 82.3659 68 81.5039 68H78.2539ZM79.8789 90.75C80.3099 90.75 80.7232 90.5788 81.028 90.274C81.3327 89.9693 81.5039 89.556 81.5039 89.125C81.5039 88.694 81.3327 88.2807 81.028 87.976C80.7232 87.6712 80.3099 87.5 79.8789 87.5C79.4479 87.5 79.0346 87.6712 78.7299 87.976C78.4251 88.2807 78.2539 88.694 78.2539 89.125C78.2539 89.556 78.4251 89.9693 78.7299 90.274C79.0346 90.5788 79.4479 90.75 79.8789 90.75ZM88.0039 87.8949L95.9664 79.9324C96.5757 79.3229 96.918 78.4964 96.918 77.6346C96.918 76.7728 96.5757 75.9463 95.9664 75.3369L93.667 73.0375C93.0576 72.4282 92.2311 72.0859 91.3693 72.0859C90.5075 72.0859 89.681 72.4282 89.0715 73.0375L88.0039 74.1051V87.8949ZM97.7539 94H86.4943L96.2443 84.25H97.7539C98.6159 84.25 99.4425 84.5924 100.052 85.2019C100.661 85.8114 101.004 86.638 101.004 87.5V90.75C101.004 91.612 100.661 92.4386 100.052 93.0481C99.4425 93.6576 98.6159 94 97.7539 94Z" fill="#404655"/>
							</g>
							<g filter="url(#filter2_d_16980_14708)">
							<path d="M64 135C64 129.477 68.4772 125 74 125H216C221.523 125 226 129.477 226 135C226 140.523 221.523 145 216 145H74C68.4772 145 64 140.523 64 135Z" fill="white"/>
							</g>
							<g filter="url(#filter3_d_16980_14708)">
							<rect x="64" y="163" width="220" height="14" rx="7" fill="white"/>
							</g>
							<g filter="url(#filter4_d_16980_14708)">
							<rect x="64" y="197" width="66" height="22" rx="11" fill="white" shape-rendering="crispEdges"/>
							<rect x="72" y="205" width="50" height="6" rx="3" fill="#EBEBEB"/>
							</g>
							<g clip-path="url(#clip0_16980_14708)">
							<circle cx="144" cy="208.001" r="6.66667" stroke="#404655" stroke-width="1.6"/>
							<path d="M142 210L146 206M146 206V208.667M146 206H143.333" stroke="#404655" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							</g>
							<defs>
							<filter id="filter0_d_16980_14708" x="39" y="33" width="270" height="213" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14708" x="63" y="57" width="50" height="51" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14708" x="63" y="125" width="164" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14708" x="63" y="163" width="222" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
							</filter>
							<filter id="filter4_d_16980_14708" x="63" y="197" width="68" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14708"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14708" result="shape"/>
							</filter>
							<clipPath id="clip0_16980_14708">
							<rect width="16" height="16" fill="white" transform="translate(136 200)"/>
							</clipPath>
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
	const headingPaddingDesktopWidthValue = `${Heading_Desktop_padding?.top}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.right}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.bottom}${Heading_padding_units?.Desktop} ${Heading_Desktop_padding?.left}${Heading_padding_units?.Desktop}`;
	const headingPaddingTabWidthValue = `${Heading_Tab_padding.top}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.right}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.bottom}${Heading_padding_units?.Tablet} ${Heading_Tab_padding?.left}${Heading_padding_units?.Tablet}`;
	const headingPaddingMobileWidthValue = `${Heading_Mobile_padding.top}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.right}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.bottom}${Heading_padding_units?.Mobile} ${Heading_Mobile_padding?.left}${Heading_padding_units?.Mobile}`;
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
	const descMobileMarginValue = `${descMobileMargin?.top}${descMarginUnits?.Mobile} ${descMobileMargin?.right}${descMarginUnits?.Mobile} ${descMobileMargin?.bottom}${descMarginUnits?.Mobile} ${descMobileMargin?.left}${descMarginUnits?.Mobile}`;
	
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
	
	const buttonDesktopPaddingValue = `${iconBoxButtonDesktopPadding?.top}${iconBoxButtonPaddingUnits?.Desktop} ${iconBoxButtonDesktopPadding?.right}${iconBoxButtonPaddingUnits?.Desktop} ${iconBoxButtonDesktopPadding?.bottom}${iconBoxButtonPaddingUnits?.Desktop} ${iconBoxButtonDesktopPadding?.left}${iconBoxButtonPaddingUnits?.Desktop}`;
	const buttonTabPaddingValue = `${iconBoxButtonTabPadding?.top}${iconBoxButtonPaddingUnits?.Tablet} ${iconBoxButtonTabPadding?.right}${iconBoxButtonPaddingUnits?.Tablet} ${iconBoxButtonTabPadding?.bottom}${iconBoxButtonPaddingUnits?.Tablet} ${iconBoxButtonTabPadding?.left}${iconBoxButtonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingValue = `${iconBoxButtonMobilePadding?.top}${iconBoxButtonPaddingUnits?.Mobile} ${iconBoxButtonMobilePadding?.right}${iconBoxButtonPaddingUnits?.Mobile} ${iconBoxButtonMobilePadding?.bottom}${iconBoxButtonPaddingUnits?.Mobile} ${iconBoxButtonMobilePadding?.left}${iconBoxButtonPaddingUnits?.Mobile}`;
	
	
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
	
	const buttonDesktopMarginValue = `${iconBoxButtonDesktopMargin?.top}${iconBoxButtonMarginUnits?.Desktop} ${iconBoxButtonDesktopMargin?.right}${iconBoxButtonMarginUnits?.Desktop} ${iconBoxButtonDesktopMargin?.bottom}${iconBoxButtonMarginUnits?.Desktop} ${iconBoxButtonDesktopMargin?.left}${iconBoxButtonMarginUnits?.Desktop}`;
	const buttonTabMarginValue = `${iconBoxButtonTabMargin?.top}${iconBoxButtonMarginUnits?.Tablet} ${iconBoxButtonTabMargin?.right}${iconBoxButtonMarginUnits?.Tablet} ${iconBoxButtonTabMargin?.bottom}${iconBoxButtonMarginUnits?.Tablet} ${iconBoxButtonTabMargin?.left}${iconBoxButtonMarginUnits?.Tablet}`;
	const buttonMobileMarginValue = `${iconBoxButtonMobileMargin?.top}${iconBoxButtonMarginUnits?.Mobile} ${iconBoxButtonMobileMargin?.right}${iconBoxButtonMarginUnits?.Mobile} ${iconBoxButtonMobileMargin?.bottom}${iconBoxButtonMarginUnits?.Mobile} ${iconBoxButtonMobileMargin?.left}${iconBoxButtonMarginUnits?.Mobile}`;
	
	
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
	
	const buttonDesktopBorderValue = `${iconBoxButtonDesktopBorderWidth?.top}${iconBoxButtonBorderUnits?.Desktop} ${iconBoxButtonDesktopBorderWidth?.right}${iconBoxButtonBorderUnits?.Desktop} ${iconBoxButtonDesktopBorderWidth?.bottom}${iconBoxButtonBorderUnits?.Desktop} ${iconBoxButtonDesktopBorderWidth?.left}${iconBoxButtonBorderUnits?.Desktop}`;
	const buttonTabBorderValue = `${iconBoxButtonTabBorderWidth?.top}${iconBoxButtonBorderUnits?.Tablet} ${iconBoxButtonTabBorderWidth?.right}${iconBoxButtonBorderUnits?.Tablet} ${iconBoxButtonTabBorderWidth?.bottom}${iconBoxButtonBorderUnits?.Tablet} ${iconBoxButtonTabBorderWidth?.left}${iconBoxButtonBorderUnits?.Tablet}`;
	const buttonMobileBorderValue = `${iconBoxButtonMobileBorderWidth?.top}${iconBoxButtonBorderUnits?.Mobile} ${iconBoxButtonMobileBorderWidth?.right}${iconBoxButtonBorderUnits?.Mobile} ${iconBoxButtonMobileBorderWidth?.bottom}${iconBoxButtonBorderUnits?.Mobile} ${iconBoxButtonMobileBorderWidth?.left}${iconBoxButtonBorderUnits?.Mobile}`;
	
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
	
	const buttonDesktopBorderRadiusValue = `${iconBoxBtnDesktopBorderradiusWidth?.top}${iconBoxBtnBorderradiusUnits?.Desktop} ${iconBoxBtnDesktopBorderradiusWidth?.right}${iconBoxBtnBorderradiusUnits?.Desktop} ${iconBoxBtnDesktopBorderradiusWidth?.bottom}${iconBoxBtnBorderradiusUnits?.Desktop} ${iconBoxBtnDesktopBorderradiusWidth?.left}${iconBoxBtnBorderradiusUnits?.Desktop}`;
	const buttonTabBorderRadiusValue = `${iconBoxBtnTabBorderradiusWidth?.top}${iconBoxBtnBorderradiusUnits?.Tablet} ${iconBoxBtnTabBorderradiusWidth?.right}${iconBoxBtnBorderradiusUnits?.Tablet} ${iconBoxBtnTabBorderradiusWidth?.bottom}${iconBoxBtnBorderradiusUnits?.Tablet} ${iconBoxBtnTabBorderradiusWidth?.left}${iconBoxBtnBorderradiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusValue = `${iconBoxBtnMobileBorderradiusWidth?.top}${iconBoxBtnBorderradiusUnits?.Mobile} ${iconBoxBtnMobileBorderradiusWidth?.right}${iconBoxBtnBorderradiusUnits?.Mobile} ${iconBoxBtnMobileBorderradiusWidth?.bottom}${iconBoxBtnBorderradiusUnits?.Mobile} ${iconBoxBtnMobileBorderradiusWidth?.left}${iconBoxBtnBorderradiusUnits?.Mobile}`;

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


	const fbIconBoxStyle = useMemo(
		() => `
		  .fb-icon-box-main-wrapper.${blockID} {
			${iconBoxPositionType === 'default' ? `position: relative;` : ''}
			${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' ? `width: 100%;` : ''}
            ${iconBoxPositionType !== 'default' ? `position: ${iconBoxPositionType};` : ''}
            ${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxHZOrientationType === 'left' && iconBoxHZLeftOffset?.Desktop ? `left: ${iconBoxHZLeftOffset?.Desktop}${iconBoxHZLeftOffsetUnits?.Desktop};` : ''}
            ${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxHZOrientationType === 'right' && iconBoxHZRightOffset?.Desktop ? `right: ${iconBoxHZRightOffset?.Desktop}${iconBoxHZRightOffsetUnits?.Desktop};` : ''}
            ${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxVROrientationType === 'top' && iconBoxVRTopOffset?.Desktop ? `top: ${iconBoxVRTopOffset?.Desktop}${iconBoxVRTopOffsetUnits?.Desktop};` : ''}
            ${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxVROrientationType === 'bottom' && iconBoxVRBottomOffset?.Desktop ? `bottom: ${iconBoxVRBottomOffset?.Desktop}${iconBoxVRBottomOffsetUnits?.Desktop};` : ''} 
			${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ""}  
            ${iconBoxOverflow !== 'default' ? `overflow: ${iconBoxOverflow};` : ''}
		  }
		  .fb-icon-box-wrapper.${blockID} {
		  	  position: relative;
			  ${globalBgColor ? `background-color: ${globalBgColor};` : ""}
			  ${DesktopPadding && globalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ""}
			  ${DesktopMargin && globalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ""}
			  ${globalBorder ? `border-style: ${globalBorder};` : ""}
			  ${BorderDesktopWidth && globalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ""}
			  ${BorderRadiusDesktopWidth && globalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth};` : "" }
			  ${globalBorderColor ? `border-color: ${globalBorderColor};` : "" }
			  ${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : "" }
			  transition: all .3s ease-in-out;
		  }
	  
		  .fb-icon-box-wrapper.${blockID}:hover {
			  ${globalBgHoverColor ? `background-color: ${globalBgHoverColor};` : "" }
			  ${globalBorderHoverColor ? `border-color: ${globalBorderHoverColor};` : "" }
			  ${boxGlobalHoverBoxShadowCssValue ? `box-shadow: ${boxGlobalHoverBoxShadowCssValue};` : "" }
			  transition: all .3s ease-in-out;
		  }
	  
		  @media only screen and (max-width: 1024px) {
			.fb-icon-box-main-wrapper.${blockID} {
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxHZOrientationType === 'left' && iconBoxHZLeftOffset?.Tablet ? `left: ${iconBoxHZLeftOffset?.Tablet}${iconBoxHZLeftOffsetUnits?.Tablet};` : ''}
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxHZOrientationType === 'right' && iconBoxHZRightOffset?.Tablet ? `right: ${iconBoxHZRightOffset?.Tablet}${iconBoxHZRightOffsetUnits?.Tablet};` : ''}
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxVROrientationType === 'top' && iconBoxVRTopOffset?.Tablet ? `top: ${iconBoxVRTopOffset?.Tablet}${iconBoxVRTopOffsetUnits?.Tablet};` : ''}
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxVROrientationType === 'bottom' && iconBoxVRBottomOffset?.Tablet ? `bottom: ${iconBoxVRBottomOffset?.Tablet}${iconBoxVRBottomOffsetUnits?.Tablet};` : ''}
				${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ""}
			}
			  .fb-icon-box-wrapper.${blockID} {
				${TabletPadding && globalPaddingTablet?.top ? `padding: ${TabletPadding};` : ""}
				${TabletMargin && globalMarginTablet?.top ? `margin: ${TabletMargin};` : ""}
				${BorderTabletWidth && globalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ""}
				${BorderRadiusTabletWidth && globalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth};` : "" }
			  }
		  }
	  
		  @media only screen and (max-width: 767px) {
			  .fb-icon-box-main-wrapper.${blockID} {
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxHZOrientationType === 'left' && iconBoxHZLeftOffset?.Mobile ? `left: ${iconBoxHZLeftOffset?.Mobile}${iconBoxHZLeftOffsetUnits?.Mobile};` : ''}
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxHZOrientationType === 'right' && iconBoxHZRightOffset?.Mobile ? `right: ${iconBoxHZRightOffset?.Mobile}${iconBoxHZRightOffsetUnits?.Mobile};` : ''}
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxVROrientationType === 'top' && iconBoxVRTopOffset?.Mobile ? `top: ${iconBoxVRTopOffset?.Mobile}${iconBoxVRTopOffsetUnits?.Mobile};` : ''}
				${iconBoxPositionType !== 'default' && iconBoxPositionType !== 'relative' && iconBoxVROrientationType === 'bottom' && iconBoxVRBottomOffset?.Mobile ? `bottom: ${iconBoxVRBottomOffset?.Mobile}${iconBoxVRBottomOffsetUnits?.Mobile};` : ''} 
			  	${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ""}
			  }
			  .fb-icon-box-wrapper.${blockID} {
				${MobilePadding && globalPaddingMobile?.top ? `padding: ${MobilePadding};` : ""}
				${MobileMargin && globalMarginMobile?.top ? `margin: ${MobileMargin};` : ""}
				${BorderMobileWidth && globalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ""}
				${BorderRadiusMobileWidth && globalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth};` : ""}
			  }
		  }

		  .fb-icon-box-wrapper.${blockID} .fb-icon-box-wrapper-inner {
			display: flex;
				${iconBoxIconPosition === 'top' ? 'flex-direction: column;' : ''}
				${iconBoxIconPosition === 'bottom' ? 'flex-direction: column-reverse;' : ''}
				${iconBoxIconPosition === 'left' ? 'flex-direction: row;' : ''}
				${iconBoxIconPosition === 'right' ? 'flex-direction: row-reverse;' : ''}
				${iconBoxIconPosition === 'left' || iconBoxIconPosition === 'right' ? `justify-content: ${iconBoxCardAlignment};` : ''}
			}
		  .fb-icon-box-wrapper.${blockID} .fb-icon-box-wrapper-inner .fb-icon-media-container {
			display: flex;
			${wrapperAlignment ? `justify-content: ${wrapperAlignment};` : ''}
			align-items: ${iconBoxIconVerticalPosition === "v-top" ? "flex-start" : iconBoxIconVerticalPosition === "v-middle" ? "center" : iconBoxIconVerticalPosition === "v-bottom" ? "flex-end" : "flex-start"};
		  }
	  
		  .fb-icon-box-wrapper.${blockID} .fb-heading,
		  .fb-icon-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
			  ${Heading_Color ? `color: ${Heading_Color};` : ""}
			  ${Heading_Background_Color ? `background-color: ${Heading_Background_Color};` : "" }

			  ${headingGlobalTypoSwitcher?.fontFamily === true && headingGlobalTypographyData?.fontFamily ? `font-family: ${headingGlobalTypographyData?.fontFamily};` : ''}
			  ${headingGlobalTypoSwitcher?.fontSize === true && headingGlobalTypographyData?.fontSize ? `font-size: ${headingGlobalTypographyData?.fontSize};` : ''}
			  ${headingGlobalTypoSwitcher?.fontWeight === true && headingGlobalTypographyData?.fontWeight ? `font-weight: ${headingGlobalTypographyData?.fontWeight};` : ''}
			  ${headingGlobalTypoSwitcher?.fontStyle === true && headingGlobalTypographyData?.fontStyle ? `font-style: ${headingGlobalTypographyData?.fontStyle};` : ''}
			  ${headingGlobalTypoSwitcher?.textTransform === true && headingGlobalTypographyData?.textTransform ? `text-transform: ${headingGlobalTypographyData?.textTransform};` : ''}
			  ${headingGlobalTypoSwitcher?.textDecoration === true && headingGlobalTypographyData?.textDecoration ? `text-decoration: ${headingGlobalTypographyData?.textDecoration};` : ''}
			  ${headingGlobalTypoSwitcher?.letterSpacing === true && headingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData?.letterSpacing};` : ''}
			  ${headingGlobalTypoSwitcher?.lineHeight === true && headingGlobalTypographyData?.lineHeight ? `line-height: ${headingGlobalTypographyData?.lineHeight};` : ''}

			  ${headingGlobalTypoSwitcher?.fontFamily === false && headingFontFamily && headingFontFamily !== 'Default' ? `font-family: ${headingFontFamily};` : ''}
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
	  
		  .fb-icon-box-wrapper.${blockID}:hover .fb-heading,
		  .fb-icon-box-wrapper.${blockID}:hover .fb-heading .fb-title-dynamic-link {
			  ${Heading_Hover_Color ? `color: ${Heading_Hover_Color};` : ""}
			  ${ Heading_Border_Hover_Color ? `border-color: ${Heading_Border_Hover_Color};` : "" }
			  transition: all .3s ease-in-out;
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-icon-box-wrapper.${blockID} .fb-heading,
			  .fb-icon-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
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
			  .fb-icon-box-wrapper.${blockID} .fb-heading,
			  .fb-icon-box-wrapper.${blockID} .fb-heading .fb-title-dynamic-link {
				  ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
                  ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
                  ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
				  ${headingPaddingMobileWidthValue && Heading_Mobile_padding?.top ? `padding: ${headingPaddingMobileWidthValue};` : ''}
				  ${headingMarginMobileWidthValue && Heading_Mobile_Margin?.top ? `margin: ${headingMarginMobileWidthValue};` : ''}
				  ${headingBorderMobileWidthValue && Heading_Mobile_Border_Width?.top ? `border-width: ${headingBorderMobileWidthValue};` : ''}
			  	  ${headingBorderRadiusMobileWidthValue && Heading_Mobile_Border_radius_Width?.top ? `border-radius: ${headingBorderRadiusMobileWidthValue};` : ''}
			  }
		  }

		.fb-icon-box-wrapper.${blockID} .fb-description,
		.fb-icon-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
			${subHeadingGlobalTypoSwitcher?.fontFamily === true && subHeadingGlobalTypographyData?.fontFamily ? `font-family: ${subHeadingGlobalTypographyData?.fontFamily};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontSize === true && subHeadingGlobalTypographyData?.fontSize ? `font-size: ${subHeadingGlobalTypographyData?.fontSize};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontWeight === true && subHeadingGlobalTypographyData?.fontWeight ? `font-weight: ${subHeadingGlobalTypographyData?.fontWeight};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontStyle === true && subHeadingGlobalTypographyData?.fontStyle ? `font-style: ${subHeadingGlobalTypographyData?.fontStyle};` : ''}
			${subHeadingGlobalTypoSwitcher?.textTransform === true && subHeadingGlobalTypographyData?.textTransform ? `text-transform: ${subHeadingGlobalTypographyData?.textTransform};` : ''}
			${subHeadingGlobalTypoSwitcher?.textDecoration === true && subHeadingGlobalTypographyData?.textDecoration ? `text-decoration: ${subHeadingGlobalTypographyData?.textDecoration};` : ''}
			${subHeadingGlobalTypoSwitcher?.letterSpacing === true && subHeadingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${subHeadingGlobalTypographyData?.letterSpacing};` : ''}
			${subHeadingGlobalTypoSwitcher?.lineHeight === true && subHeadingGlobalTypographyData?.lineHeight ? `line-height: ${subHeadingGlobalTypographyData?.lineHeight};` : ''}
			
			${subHeadingGlobalTypoSwitcher?.fontFamily === false && subHeadingFontFamily && subHeadingFontFamily !== 'Default' ? `font-family: ${subHeadingFontFamily};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Desktop && subHeadingFontSizeUnits?.Desktop ? `font-size: ${subHeadingFontSize?.Desktop}${subHeadingFontSizeUnits?.Desktop};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontWeight === false && subHeadingFontWeight ? `font-weight: ${subHeadingFontWeight};` : ''}
			${subHeadingGlobalTypoSwitcher?.fontStyle === false && subHeadingFontStyle ? `font-style: ${subHeadingFontStyle};` : ''}
			${subHeadingGlobalTypoSwitcher?.textTransform === false && subHeadingTextTransform ? `text-transform: ${subHeadingTextTransform};` : ''}
			${subHeadingGlobalTypoSwitcher?.textDecoration === false && subHeadingTextDecoration ? `text-decoration: ${subHeadingTextDecoration};` : ''}
			${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Desktop && subHeadingLetterSpacingUnits?.Desktop ? `letter-spacing: ${subHeadingLetterSpacing?.Desktop}${subHeadingLetterSpacingUnits?.Desktop};` : ''}
			${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Desktop && subHeadingLineHeightUnits?.Desktop ? `line-height: ${subHeadingLineHeight?.Desktop}${subHeadingLineHeightUnits?.Desktop};` : ''}
			
			${SubHeadingColor ? `color: ${SubHeadingColor};` : ""}
			${subHeadingDesktopPaddingValue && SubHeadingDesktopPadding?.top ? `padding: ${subHeadingDesktopPaddingValue};` : "" }
			${descDesktopMarginValue  && descDesktopMargin?.top ? `margin: ${descDesktopMarginValue };` : ""}
			${descAlignment ? `text-align: ${descAlignment};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-icon-box-wrapper.${blockID}:hover .fb-description,
		.fb-icon-box-wrapper.${blockID}:hover .fb-description .fb-description-dynamic-link {
			${ SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : "" }
		}

		@media only screen and (max-width: 1024px) {
			.fb-icon-box-wrapper.${blockID} .fb-description,
			.fb-icon-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
				${subHeadingTabPaddingValue && SubHeadingTabPadding?.top ? `padding: ${subHeadingTabPaddingValue};` : "" }
				${descTabMarginValue  && descTabMargin?.top ? `margin: ${descTabMarginValue};` : ""}
				${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Tablet && subHeadingFontSizeUnits?.Tablet ? `font-size: ${subHeadingFontSize?.Tablet}${subHeadingFontSizeUnits?.Tablet};` : ''}
				${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Tablet && subHeadingLetterSpacingUnits?.Tablet ? `letter-spacing: ${subHeadingLetterSpacing?.Tablet}${subHeadingLetterSpacingUnits?.Tablet};` : ''}
				${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Tablet && subHeadingLineHeightUnits?.Tablet ? `line-height: ${subHeadingLineHeight?.Tablet}${subHeadingLineHeightUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 757px) {
			.fb-icon-box-wrapper.${blockID} .fb-description,
			.fb-icon-box-wrapper.${blockID} .fb-description .fb-description-dynamic-link {
				${subHeadingMobilePaddingValue && SubHeadingMobilePadding?.top ? `padding: ${subHeadingMobilePaddingValue};` : "" }
				${descMobileMarginValue  && descMobileMargin?.top ? `margin: ${descMobileMarginValue };` : ""}
				${subHeadingGlobalTypoSwitcher?.fontSize === false && subHeadingFontSize?.Mobile && subHeadingFontSizeUnits?.Mobile ? `font-size: ${subHeadingFontSize?.Mobile}${subHeadingFontSizeUnits?.Mobile};` : ''}
				${subHeadingGlobalTypoSwitcher?.letterSpacing === false && subHeadingLetterSpacing?.Mobile && subHeadingLetterSpacingUnits?.Mobile ? `letter-spacing: ${subHeadingLetterSpacing?.Mobile}${subHeadingLetterSpacingUnits?.Mobile};` : ''}
				${subHeadingGlobalTypoSwitcher?.lineHeight === false && subHeadingLineHeight?.Mobile && subHeadingLineHeightUnits?.Mobile ? `line-height: ${subHeadingLineHeight?.Mobile}${subHeadingLineHeightUnits?.Mobile};` : ''}
			}
		}
		.fb-icon-box-wrapper.${blockID} .fb-icon-btn-container {
			${buttonAlignment ? `text-align: ${buttonAlignment};` : ''}
		}
		.fb-icon-box-wrapper.${blockID} .fb-icon-btn-wrapper {
			${btnIconPosition ? `flex-direction: ${btnIconPosition === "left" ? "row-reverse" : "row"};` : ''}
			${buttonTextColor ? `color: ${buttonTextColor};` : ""}
			${buttonBgColor ? `background-color: ${buttonBgColor};` : "" }

			${buttonGlobalTypoSwitcher?.fontFamily === true && buttonGlobalTypographyData?.fontFamily ? `font-family: ${buttonGlobalTypographyData?.fontFamily};` : ''}
			${buttonGlobalTypoSwitcher?.fontSize === true && buttonGlobalTypographyData?.fontSize ? `font-size: ${buttonGlobalTypographyData?.fontSize};` : ''}
			${buttonGlobalTypoSwitcher?.fontWeight === true && buttonGlobalTypographyData?.fontWeight ? `font-weight: ${buttonGlobalTypographyData?.fontWeight};` : ''}
			${buttonGlobalTypoSwitcher?.fontStyle === true && buttonGlobalTypographyData?.fontStyle ? `font-style: ${buttonGlobalTypographyData?.fontStyle};` : ''}
			${buttonGlobalTypoSwitcher?.textTransform === true && buttonGlobalTypographyData?.textTransform ? `text-transform: ${buttonGlobalTypographyData?.textTransform};` : ''}
			${buttonGlobalTypoSwitcher?.textDecoration === true && buttonGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonGlobalTypographyData?.textDecoration};` : ''}
			${buttonGlobalTypoSwitcher?.letterSpacing === true && buttonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData?.letterSpacing};` : ''}
			${buttonGlobalTypoSwitcher?.lineHeight === true && buttonGlobalTypographyData?.lineHeight ? `line-height: ${buttonGlobalTypographyData?.lineHeight};` : ''}
			
			${buttonGlobalTypoSwitcher?.fontFamily === false && buttonFontFamily && buttonFontFamily !== 'Default' ? `font-family: ${buttonFontFamily};` : ''}
			${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Desktop ? `font-size: ${buttonFontSize?.Desktop}${buttonFontSizeUnits?.Desktop};` : ''}
			${buttonGlobalTypoSwitcher?.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
			${buttonGlobalTypoSwitcher?.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
			${buttonGlobalTypoSwitcher?.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
			${buttonGlobalTypoSwitcher?.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
			${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Desktop ? `letter-spacing: ${buttonLetterSpacing?.Desktop}${buttonLetterSpacingUnits?.Desktop};` : ''}
			${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Desktop ? `line-height: ${buttonLineHeight?.Desktop}${buttonLineHeightUnits?.Desktop};` : ''}
			
			${buttonDesktopPaddingValue && iconBoxButtonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingValue};` : ''}
			${buttonDesktopMarginValue && iconBoxButtonDesktopMargin?.top ? `margin: ${buttonDesktopMarginValue};` : ''}
			${iconBoxButtonBorder ? `border-style: ${iconBoxButtonBorder};` : ''}
			${buttonDesktopBorderValue && iconBoxButtonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderValue};` : ''}
			${iconBoxButtonBorderColor ? `border-color: ${iconBoxButtonBorderColor};` : ''}
			${buttonDesktopBorderRadiusValue && iconBoxBtnDesktopBorderradiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusValue};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-icon-box-wrapper.${blockID}:hover .fb-icon-btn-wrapper {
			${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : "" }
			${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : "" }
			${iconBoxButtonHoverBorderColor ? `border-color: ${iconBoxButtonHoverBorderColor};` : ''}
		}

		@media only screen and (max-width: 1024px) {
			.fb-icon-box-wrapper.${blockID} .fb-icon-btn-wrapper {
				${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
				${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
				${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
				${buttonTabPaddingValue && iconBoxButtonTabPadding?.top ? `padding: ${buttonTabPaddingValue};` : ''}
				${buttonTabMarginValue && iconBoxButtonTabMargin?.top ? `margin: ${buttonTabMarginValue};` : ''}
				${buttonTabBorderValue && iconBoxButtonTabBorderWidth?.top ? `border-width: ${buttonTabBorderValue};` : ''}
				${buttonTabBorderRadiusValue && iconBoxBtnTabBorderradiusWidth?.top ? `border-radius: ${buttonTabBorderRadiusValue};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-icon-box-wrapper.${blockID} .fb-icon-btn-wrapper {
				${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
				${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
				${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
				${buttonMobilePaddingValue && iconBoxButtonMobilePadding?.top ? `padding: ${buttonMobilePaddingValue};` : ''}
				${buttonMobileMarginValue && iconBoxButtonMobileMargin?.top ? `margin: ${buttonMobileMarginValue};` : ''}
				${buttonMobileBorderValue && iconBoxButtonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderValue};` : ''}
				${buttonMobileBorderRadiusValue && iconBoxBtnMobileBorderradiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusValue};` : ''}
			}
		}
		.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper,
		.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper img {
			${mediaBackgroundType === "gradient" ? `
				background: ${mediaCustomGradientSwitcher && mediaCustomGradientInputValue ? mediaCustomGradientInputValue : mediaGradientColor };
				`
				: mediaBackgroundImageUrl && mediaBackgroundImageUrl !== "null" ? `
				${mediaBackgroundImageUrl ? `background-image: url(${mediaBackgroundImageUrl});` : "" }
				${mediaBackgroundImagePosition ? `background-position: ${mediaBackgroundImagePosition};` : "" }
				${mediaBackgroundImageAttachment ? `background-attachment: ${mediaBackgroundImageAttachment};` : "" }
				${mediaBackgroundImageRepeat ? `background-repeat: ${mediaBackgroundImageRepeat};` : "" }
				${mediaBackgroundImageSize ? `background-size: ${mediaBackgroundImageSize};` : "" }` 
				: mediaClassicColor ? `background: ${mediaClassicColor}; ` : ""
			}
			${mediaBgWidth?.Desktop ? `width: ${mediaBgWidth?.Desktop}${mediaBgWidthUnits?.Desktop};` : ''}
			${mediaBgHeight?.Desktop ? `height: ${mediaBgHeight?.Desktop}${mediaBgHeightUnits?.Desktop};` : ''}
			${mediaDesktopPadding && mediaPaddingDesktop?.top ? `padding: ${mediaDesktopPadding};` : ''}
			${mediaDesktopMargin && mediaMarginDesktop?.top ? `margin: ${mediaDesktopMargin};` : ''}
			${mediaBorder ? `border-style: ${mediaBorder};` : ''}
			${mediaBorderDesktopWidth && mediaBorderDesktop?.top ? `border-width: ${mediaBorderDesktopWidth};` : ''}
			${mediaBorderColor ? `border-color: ${mediaBorderColor};` : ''}
			${mediaBorderRadiusDesktopWidth && mediaBorderRadiusDesktop?.top ? `border-radius: ${mediaBorderRadiusDesktopWidth};` : ''}
			background-repeat: none;
			background-size: cover;
			${mediaClassicColor ? `justify-content: center; ` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-icon-box-wrapper.${blockID}:hover .fb-icon-media-wrapper,
		.fb-icon-box-wrapper.${blockID}:hover .fb-icon-media-wrapper img {
			${mediaHoverBackgroundType === "gradient" ? ` background: ${ mediaHoverCustomGradientSwitcher && mediaHoverCustomGradientInputValue ? mediaHoverCustomGradientInputValue : mediaHoverGradientColor
			};
			`: mediaHoverBackgroundImageUrl &&  mediaHoverBackgroundImageUrl !== "null" ? `
			${mediaHoverBackgroundImageUrl ? `background-image: url(${mediaHoverBackgroundImageUrl});` : "" }
			${mediaHoverBackgroundImagePosition ? `background-position: ${mediaHoverBackgroundImagePosition};` : "" }
			${mediaHoverBackgroundImageAttachment ? `background-attachment: ${mediaHoverBackgroundImageAttachment};` : "" }
			${ mediaHoverBackgroundImageRepeat ? `background-repeat: ${mediaHoverBackgroundImageRepeat};` : "" }
			${mediaHoverBackgroundImageSize ? `background-size: ${mediaHoverBackgroundImageSize};` : "" } ` 
			: mediaHoverClassicColor ? `background: ${mediaHoverClassicColor}; ` : ""
			}
			${mediaBorderHoverColor ? `border-color: ${mediaBorderHoverColor};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper,
		.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper img {
			${iconBoxPresetStyle === "preset-4" ? 
				`
				border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
				` : ''
			}
		}
		@media only screen and (max-width: 1024px) {
			.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper,
			.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper img {
				${mediaTabletPadding && mediaPaddingTablet?.top ? `padding: ${mediaTabletPadding};` : ''}
				${mediaTabletMargin && mediaMarginTablet?.top ? `margin: ${mediaTabletMargin};` : ''}
				${mediaBorderTabletWidth && mediaBorderTablet?.top ? `border-width: ${mediaBorderTabletWidth};` : ''}
				${mediaBorderRadiusTabletWidth && mediaBorderRadiusTablet?.top ? `border-radius: ${mediaBorderRadiusTabletWidth};` : ''}
				${mediaBgWidth?.Tablet ? `width: ${mediaBgWidth?.Tablet}${mediaBgWidthUnits?.Tablet};` : ''}
				${mediaBgHeight?.Tablet ? `height: ${mediaBgHeight?.Tablet}${mediaBgHeightUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper,
			.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper img {
				${mediaMobilePadding && mediaPaddingMobile?.top ? `padding: ${mediaMobilePadding};` : ''}
				${mediaMobileMargin && mediaMarginMobile?.top ? `margin: ${mediaMobileMargin};` : ''}
				${mediaBorderMobileWidth && mediaBorderMobile?.top ? `border-width: ${mediaBorderMobileWidth};` : ''}
				${mediaBorderRadiusMobileWidth && mediaBorderRadiusMobile?.top ? `border-radius: ${mediaBorderRadiusMobileWidth};` : ''}
				${mediaBgWidth?.Mobile ? `width: ${mediaBgWidth?.Mobile}${mediaBgWidthUnits?.Mobile};` : ''}
				${mediaBgHeight?.Mobile ? `height: ${mediaBgHeight?.Mobile}${mediaBgHeightUnits?.Mobile};` : ''}
			}
		}

		.fb-icon-box-wrapper.${blockID} .fb-icon-wrapper svg,
		.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper img {
			${mediaSize?.Desktop ? `width: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
			${mediaSize?.Desktop ? `height: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
			${mediaIconColor ? `fill: ${mediaIconColor};` : ""}
		}

		.fb-icon-box-wrapper.${blockID}:hover .fb-icon-wrapper svg {
			${mediaIconHoverColor ? `fill: ${mediaIconHoverColor};` : "" }
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-icon-box-wrapper.${blockID} .fb-icon-wrapper svg,
			.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper img {
				${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
				${mediaSize?.Tablet ? `height: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-icon-box-wrapper.${blockID} .fb-icon-wrapper svg,
			.fb-icon-box-wrapper.${blockID} .fb-icon-media-wrapper img {
				${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
				${mediaSize?.Mobile ? `height: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
			}
		}

		.fb-icon-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
			${btnIconSize?.Desktop ? `width: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ''}
			${btnIconColor ? `fill: ${btnIconColor};` : ""}
			transition: all .3s ease-in-out;
		}

		.fb-icon-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg {
			${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : "" }
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-icon-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
				${btnIconSize?.Tablet ? `width: ${btnIconSize?.Tablet}${btnIconSizeUnits?.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-icon-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
				${btnIconSize?.Mobile ? `width: ${btnIconSize?.Mobile}${btnIconSizeUnits?.Mobile};` : ''}
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

			icon_Box_Button_Text,
			wrapperAlignment,
			descAlignment,
			buttonAlignment,
			iconBoxBg,

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

			iconBoxPaddingUnits,
			iconBoxDesktopPadding,
			iconBoxTabPadding,
			iconBoxMobilePadding,
			iconBoxBorderUnits,
			iconBoxDesktopBorderWidth,
			iconBoxTabBorderWidth,
			iconBoxMobileBorderWidth,

			iconBoxBorderRadiusUnits,
			iconBoxDesktopBorderRadiusWidth,
			iconBoxTabBorderRadiusWidth,
			iconBoxMobileBorderRadiusWidth,

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

			iconBoxButtonMarginUnits,
			iconBoxButtonDesktopMargin,
			iconBoxButtonTabMargin,
			iconBoxButtonMobileMargin,
			iconBoxButtonActiveMarginDevice,

			iconBoxButtonPaddingUnits,
			iconBoxButtonDesktopPadding,
			iconBoxButtonTabPadding,
			iconBoxButtonMobilePadding,
			icon,
			btnIcon,
			width,
			contentAlignment,

			iconBoxButtonBorder,
			iconBoxMarginUnits,
			iconBoxDesktopMargin,
			iconBoxTabMargin,
			iconBoxMobileMargin,
			iconBoxButtonBorderUnits,
			iconBoxButtonDesktopBorderWidth,
			iconBoxButtonTabBorderWidth,
			iconBoxButtonMobileBorderWidth,
			iconBoxBtnBorderradiusUnits,
			iconBoxBtnDesktopBorderradiusWidth,
			iconBoxBtnTabBorderradiusWidth,
			iconBoxBtnMobileBorderradiusWidth,
			iconBoxButtonBorderColor,
			iconBoxButtonHoverBorderColor,
			boxBgColor,
			boxBgHoverColor,
			mediaSize,
			mediaSizeUnits,
			globalZIndex,
			iconBoxOverflow,
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
			iconBoxIconPosition,

			mediaIconColor,
			mediaIconHoverColor,
			boxGlobalBoxShadowSwitcher,
			boxGlobalBoxShadowValues,
			boxGlobalBoxShadowCssValue,
			boxGlobalHoverBoxShadowValues,
			boxGlobalHoverBoxShadowCssValue,
			mediaBgTypeImage,
			bgType,
			iconBoxMediaID,
			iconBoxMediaAlt,
			iconBoxMediaUrl,
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
			iconBoxIconVerticalPosition,
			iconBoxCardAlignment,

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
		],
	);


	const customCss = getCustomCss(iconBoxCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${fbIconBoxStyle} ${customCss}`.replace(/\s+/g, ' ').trim(),
		});
	}, [fbIconBoxStyle, customCss]);

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
					{/* <SelectControl
						label={__("Preset Style", "frontis-blocks")}
						value={iconBoxPresetStyle}
						options={PRESETS}
						onChange={(selected) => changeIconBoxPreset(selected)}
					/> */}
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
