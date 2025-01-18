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
	PRESETS
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
import {useDeviceType} from "@Config/displayType";

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
		btnIcon,
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
		mediaSize,
		mediaSizeUnits,
		globalZIndex,
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
		infoCardAlignment
	} = attributes;

	const deviceType= useDeviceType();
	
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

	/** End Preset Style **/
	const changeInfoBoxPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-1": {
				info_Button_Switcher: true,
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
				info_Button_Switcher: false,
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
                info_Button_Switcher: true,
                mediaClassicColor: '#399CFF',
                mediaHoverClassicColor: '399CFF',
                globalBgColor: '#F89B2E',
                globalBgHoverColor: '#F89B2E',
				mediaIconColor: '#ffffff',
                mediaIconHoverColor: '#ffffff',
                Heading_Color: '#15171C',
                Heading_Hover_Color: '#15171C',
                SubHeadingColor: '#555E72',
                SubHeadingHoverColor: '#555E72',
				buttonTextColor: '#F89B2E',
				buttonTextHoverColor: '#F89B2E',
                btnIconColor: '#F89B2E',
                btnIconHoverColor: '#F89B2E',
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
            console.warn(`Dual Button: Preset "${selectedPreset}" not found.`);
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
	const headingPaddingDesktopWidthValue = `${Heading_Desktop_padding.top}${Heading_padding_units.Desktop} ${Heading_Desktop_padding.right}${Heading_padding_units.Desktop} ${Heading_Desktop_padding.bottom}${Heading_padding_units.Desktop} ${Heading_Desktop_padding.left}${Heading_padding_units.Desktop}`;
	const headingPaddingTabWidthValue = `${Heading_Tab_padding.top}${Heading_padding_units.Tablet} ${Heading_Tab_padding.right}${Heading_padding_units.Tablet} ${Heading_Tab_padding.bottom}${Heading_padding_units.Tablet} ${Heading_Tab_padding.left}${Heading_padding_units.Tablet}`;
	const headingPaddingMobileWidthValue = `${Heading_Mobile_padding.top}${Heading_padding_units.Mobile} ${Heading_Mobile_padding.right}${Heading_padding_units.Mobile} ${Heading_Mobile_padding.bottom}${Heading_padding_units.Mobile} ${Heading_Mobile_padding.left}${Heading_padding_units.Mobile}`;
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

	const headingMarginDesktopWidthValue = `${Heading_Desktop_Margin.top}${Heading_Margin_Units.Desktop} ${Heading_Desktop_Margin.right}${Heading_Margin_Units.Desktop} ${Heading_Desktop_Margin.bottom}${Heading_Margin_Units.Desktop} ${Heading_Desktop_Margin.left}${Heading_Margin_Units.Desktop}`;
	const headingMarginTabWidthValue = `${Heading_Tab_Margin.top}${Heading_Margin_Units.Tablet} ${Heading_Tab_Margin.right}${Heading_Margin_Units.Tablet} ${Heading_Tab_Margin.bottom}${Heading_Margin_Units.Tablet} ${Heading_Tab_Margin.left}${Heading_Margin_Units.Tablet}`;
	const headingMarginMobileWidthValue = `${Heading_Mobile_Margin.top}${Heading_Margin_Units.Mobile} ${Heading_Mobile_Margin.right}${Heading_Margin_Units.Mobile} ${Heading_Mobile_Margin.bottom}${Heading_Margin_Units.Mobile} ${Heading_Mobile_Margin.left}${Heading_Margin_Units.Mobile}`;
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

	const headingBorderDesktopWidthValue = `${Heading_Desktop_Border_Width.top}${Heading_Border_units.Desktop} ${Heading_Desktop_Border_Width.right}${Heading_Border_units.Desktop} ${Heading_Desktop_Border_Width.bottom}${Heading_Border_units.Desktop} ${Heading_Desktop_Border_Width.left}${Heading_Border_units.Desktop}`;
	const headingBorderTabWidthValue = `${Heading_Tab_Border_Width.top}${Heading_Border_units.Tablet} ${Heading_Tab_Border_Width.right}${Heading_Border_units.Tablet} ${Heading_Tab_Border_Width.bottom}${Heading_Border_units.Tablet} ${Heading_Tab_Border_Width.left}${Heading_Border_units.Tablet}`;
	const headingBorderMobileWidthValue = `${Heading_Mobile_Border_Width.top}${Heading_Border_units.Mobile} ${Heading_Mobile_Border_Width.right}${Heading_Border_units.Mobile} ${Heading_Mobile_Border_Width.bottom}${Heading_Border_units.Mobile} ${Heading_Mobile_Border_Width.left}${Heading_Border_units.Mobile}`;

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

	const headingBorderRadiusDesktopWidthValue = `${Heading_Desktop_Border_radius_Width.top}${Heading_Border_radius_units.Desktop} ${Heading_Desktop_Border_radius_Width.right}${Heading_Border_radius_units.Desktop} ${Heading_Desktop_Border_radius_Width.bottom}${Heading_Border_radius_units.Desktop} ${Heading_Desktop_Border_radius_Width.left}${Heading_Border_radius_units.Desktop}`;
	const headingBorderRadiusTabWidthValue = `${Heading_Tab_Border_radius_Width.top}${Heading_Border_radius_units.Tablet} ${Heading_Tab_Border_radius_Width.right}${Heading_Border_radius_units.Tablet} ${Heading_Tab_Border_radius_Width.bottom}${Heading_Border_radius_units.Tablet} ${Heading_Tab_Border_radius_Width.left}${Heading_Border_radius_units.Tablet}`;
	const headingBorderRadiusMobileWidthValue = `${Heading_Mobile_Border_radius_Width.top}${Heading_Border_radius_units.Mobile} ${Heading_Mobile_Border_radius_Width.right}${Heading_Border_radius_units.Mobile} ${Heading_Mobile_Border_radius_Width.bottom}${Heading_Border_radius_units.Mobile} ${Heading_Mobile_Border_radius_Width.left}${Heading_Border_radius_units.Mobile}`;

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

	const subHeadingDesktopPaddingValue = `${SubHeadingDesktopPadding.top}${SubHeadingPaddingUnits.Desktop} ${SubHeadingDesktopPadding.right}${SubHeadingPaddingUnits.Desktop} ${SubHeadingDesktopPadding.bottom}${SubHeadingPaddingUnits.Desktop} ${SubHeadingDesktopPadding.left}${SubHeadingPaddingUnits.Desktop}`;
	const subHeadingTabPaddingValue = `${SubHeadingTabPadding.top}${SubHeadingPaddingUnits.Tablet} ${SubHeadingTabPadding.right}${SubHeadingPaddingUnits.Tablet} ${SubHeadingTabPadding.bottom}${SubHeadingPaddingUnits.Tablet} ${SubHeadingTabPadding.left}${SubHeadingPaddingUnits.Tablet}`;
	const subHeadingMobilePaddingValue = `${SubHeadingMobilePadding.top}${SubHeadingPaddingUnits.Mobile} ${SubHeadingMobilePadding.right}${SubHeadingPaddingUnits.Mobile} ${SubHeadingMobilePadding.bottom}${SubHeadingPaddingUnits.Mobile} ${SubHeadingMobilePadding.left}${SubHeadingPaddingUnits.Mobile}`;


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
	
	const descDesktopMarginValue = `${descDesktopMargin.top}${descMarginUnits.Desktop} ${descDesktopMargin.right}${descMarginUnits.Desktop} ${descDesktopMargin.bottom}${descMarginUnits.Desktop} ${descDesktopMargin.left}${descMarginUnits.Desktop}`;
	const descTabMarginValue = `${descTabMargin.top}${descMarginUnits.Tablet} ${descTabMargin.right}${descMarginUnits.Tablet} ${descTabMargin.bottom}${descMarginUnits.Tablet} ${descTabMargin.left}${descMarginUnits.Tablet}`;
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
	
	const buttonDesktopPaddingValue = `${infoButtonDesktopPadding.top}${infoButtonPaddingUnits.Desktop} ${infoButtonDesktopPadding.right}${infoButtonPaddingUnits.Desktop} ${infoButtonDesktopPadding.bottom}${infoButtonPaddingUnits.Desktop} ${infoButtonDesktopPadding.left}${infoButtonPaddingUnits.Desktop}`;
	const buttonTabPaddingValue = `${infoButtonTabPadding.top}${infoButtonPaddingUnits.Tablet} ${infoButtonTabPadding.right}${infoButtonPaddingUnits.Tablet} ${infoButtonTabPadding.bottom}${infoButtonPaddingUnits.Tablet} ${infoButtonTabPadding.left}${infoButtonPaddingUnits.Tablet}`;
	const buttonMobilePaddingValue = `${infoButtonMobilePadding.top}${infoButtonPaddingUnits.Mobile} ${infoButtonMobilePadding.right}${infoButtonPaddingUnits.Mobile} ${infoButtonMobilePadding.bottom}${infoButtonPaddingUnits.Mobile} ${infoButtonMobilePadding.left}${infoButtonPaddingUnits.Mobile}`;
	
	
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
	
	const buttonDesktopMarginValue = `${infoButtonDesktopMargin.top}${infoButtonMarginUnits.Desktop} ${infoButtonDesktopMargin.right}${infoButtonMarginUnits.Desktop} ${infoButtonDesktopMargin.bottom}${infoButtonMarginUnits.Desktop} ${infoButtonDesktopMargin.left}${infoButtonMarginUnits.Desktop}`;
	const buttonTabMarginValue = `${infoButtonTabMargin.top}${infoButtonMarginUnits.Tablet} ${infoButtonTabMargin.right}${infoButtonMarginUnits.Tablet} ${infoButtonTabMargin.bottom}${infoButtonMarginUnits.Tablet} ${infoButtonTabMargin.left}${infoButtonMarginUnits.Tablet}`;
	const buttonMobileMarginValue = `${infoButtonMobileMargin.top}${infoButtonMarginUnits.Mobile} ${infoButtonMobileMargin.right}${infoButtonMarginUnits.Mobile} ${infoButtonMobileMargin.bottom}${infoButtonMarginUnits.Mobile} ${infoButtonMobileMargin.left}${infoButtonMarginUnits.Mobile}`;
	
	
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
	
	const buttonDesktopBorderValue = `${infoButtonDesktopBorderWidth.top}${infoButtonBorderUnits.Desktop} ${infoButtonDesktopBorderWidth.right}${infoButtonBorderUnits.Desktop} ${infoButtonDesktopBorderWidth.bottom}${infoButtonBorderUnits.Desktop} ${infoButtonDesktopBorderWidth.left}${infoButtonBorderUnits.Desktop}`;
	const buttonTabBorderValue = `${infoButtonTabBorderWidth.top}${infoButtonBorderUnits.Tablet} ${infoButtonTabBorderWidth.right}${infoButtonBorderUnits.Tablet} ${infoButtonTabBorderWidth.bottom}${infoButtonBorderUnits.Tablet} ${infoButtonTabBorderWidth.left}${infoButtonBorderUnits.Tablet}`;
	const buttonMobileBorderValue = `${infoButtonMobileBorderWidth.top}${infoButtonBorderUnits.Mobile} ${infoButtonMobileBorderWidth.right}${infoButtonBorderUnits.Mobile} ${infoButtonMobileBorderWidth.bottom}${infoButtonBorderUnits.Mobile} ${infoButtonMobileBorderWidth.left}${infoButtonBorderUnits.Mobile}`;
	
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
	
	const buttonDesktopBorderRadiusValue = `${infoBtnDesktopBorderradiusWidth.top}${infoBtnBorderradiusUnits.Desktop} ${infoBtnDesktopBorderradiusWidth.right}${infoBtnBorderradiusUnits.Desktop} ${infoBtnDesktopBorderradiusWidth.bottom}${infoBtnBorderradiusUnits.Desktop} ${infoBtnDesktopBorderradiusWidth.left}${infoBtnBorderradiusUnits.Desktop}`;
	const buttonTabBorderRadiusValue = `${infoBtnTabBorderradiusWidth.top}${infoBtnBorderradiusUnits.Tablet} ${infoBtnTabBorderradiusWidth.right}${infoBtnBorderradiusUnits.Tablet} ${infoBtnTabBorderradiusWidth.bottom}${infoBtnBorderradiusUnits.Tablet} ${infoBtnTabBorderradiusWidth.left}${infoBtnBorderradiusUnits.Tablet}`;
	const buttonMobileBorderRadiusValue = `${infoBtnMobileBorderradiusWidth.top}${infoBtnBorderradiusUnits.Mobile} ${infoBtnMobileBorderradiusWidth.right}${infoBtnBorderradiusUnits.Mobile} ${infoBtnMobileBorderradiusWidth.bottom}${infoBtnBorderradiusUnits.Mobile} ${infoBtnMobileBorderradiusWidth.left}${infoBtnBorderradiusUnits.Mobile}`;

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

	const DesktopPadding = `${globalPaddingDesktop.top}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.right}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.bottom}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.left}${globalPaddingUnits.Desktop}`;
	const TabletPadding = `${globalPaddingTablet.top}${globalPaddingUnits.Tablet} ${globalPaddingTablet.right}${globalPaddingUnits.Tablet} ${globalPaddingTablet.bottom}${globalPaddingUnits.Tablet} ${globalPaddingTablet.left}${globalPaddingUnits.Tablet}`;
	const MobilePadding = `${globalPaddingMobile.top}${globalPaddingUnits.Mobile} ${globalPaddingMobile.right}${globalPaddingUnits.Mobile} ${globalPaddingMobile.bottom}${globalPaddingUnits.Mobile} ${globalPaddingMobile.left}${globalPaddingUnits.Mobile}`;

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

	const DesktopMargin = `${globalMarginDesktop.top}${globalMarginUnits.Desktop} ${globalMarginDesktop.right}${globalMarginUnits.Desktop} ${globalMarginDesktop.bottom}${globalMarginUnits.Desktop} ${globalMarginDesktop.left}${globalMarginUnits.Desktop}`;
	const TabletMargin = `${globalMarginTablet.top}${globalMarginUnits.Tablet} ${globalMarginTablet.right}${globalMarginUnits.Tablet} ${globalMarginTablet.bottom}${globalMarginUnits.Tablet} ${globalMarginTablet.left}${globalMarginUnits.Tablet}`;
	const MobileMargin = `${globalMarginMobile.top}${globalMarginUnits.Mobile} ${globalMarginMobile.right}${globalMarginUnits.Mobile} ${globalMarginMobile.bottom}${globalMarginUnits.Mobile} ${globalMarginMobile.left}${globalMarginUnits.Mobile}`;

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
	const BorderDesktopWidth = `${globalBorderDesktop.top}${globalBorderUnits.Desktop} ${globalBorderDesktop.right}${globalBorderUnits.Desktop} ${globalBorderDesktop.bottom}${globalBorderUnits.Desktop} ${globalBorderDesktop.left}${globalBorderUnits.Desktop}`;
	const BorderTabletWidth = `${globalBorderTablet.top}${globalBorderUnits.Tablet} ${globalBorderTablet.right}${globalBorderUnits.Tablet} ${globalBorderTablet.bottom}${globalBorderUnits.Tablet} ${globalBorderTablet.left}${globalBorderUnits.Tablet}`;
	const BorderMobileWidth = `${globalBorderMobile.top}${globalBorderUnits.Mobile} ${globalBorderMobile.right}${globalBorderUnits.Mobile} ${globalBorderMobile.bottom}${globalBorderUnits.Mobile} ${globalBorderMobile.left}${globalBorderUnits.Mobile}`;
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
	const BorderRadiusDesktopWidth = `${globalBorderRadiusDesktop.top}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.right}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.bottom}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.left}${globalBorderRadiusUnits.Desktop}`;
	const BorderRadiusTabletWidth = `${globalBorderRadiusTablet.top}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.right}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.bottom}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.left}${globalBorderRadiusUnits.Tablet}`;
	const BorderRadiusMobileWidth = `${globalBorderRadiusMobile.top}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.right}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.bottom}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.left}${globalBorderRadiusUnits.Mobile}`;
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
	const mediaDesktopPadding = `${mediaPaddingDesktop.top}${mediaPaddingUnits.Desktop} ${mediaPaddingDesktop.right}${mediaPaddingUnits.Desktop} ${mediaPaddingDesktop.bottom}${mediaPaddingUnits.Desktop} ${mediaPaddingDesktop.left}${mediaPaddingUnits.Desktop}`;
	const mediaTabletPadding = `${mediaPaddingTablet.top}${mediaPaddingUnits.Tablet} ${mediaPaddingTablet.right}${mediaPaddingUnits.Tablet} ${mediaPaddingTablet.bottom}${mediaPaddingUnits.Tablet} ${mediaPaddingTablet.left}${mediaPaddingUnits.Tablet}`;
	const mediaMobilePadding = `${mediaPaddingMobile.top}${mediaPaddingUnits.Mobile} ${mediaPaddingMobile.right}${mediaPaddingUnits.Mobile} ${mediaPaddingMobile.bottom}${mediaPaddingUnits.Mobile} ${mediaPaddingMobile.left}${mediaPaddingUnits.Mobile}`;
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

	const mediaDesktopMargin = `${mediaMarginDesktop.top}${mediaMarginUnits.Desktop} ${mediaMarginDesktop.right}${mediaMarginUnits.Desktop} ${mediaMarginDesktop.bottom}${mediaMarginUnits.Desktop} ${mediaMarginDesktop.left}${mediaMarginUnits.Desktop}`;
	const mediaTabletMargin = `${mediaMarginTablet.top}${mediaMarginUnits.Tablet} ${mediaMarginTablet.right}${mediaMarginUnits.Tablet} ${mediaMarginTablet.bottom}${mediaMarginUnits.Tablet} ${mediaMarginTablet.left}${mediaMarginUnits.Tablet}`;
	const mediaMobileMargin = `${mediaMarginMobile.top}${mediaMarginUnits.Mobile} ${mediaMarginMobile.right}${mediaMarginUnits.Mobile} ${mediaMarginMobile.bottom}${mediaMarginUnits.Mobile} ${mediaMarginMobile.left}${mediaMarginUnits.Mobile}`;
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
	const mediaBorderDesktopWidth = `${mediaBorderDesktop.top}${mediaBorderUnits.Desktop} ${mediaBorderDesktop.right}${mediaBorderUnits.Desktop} ${mediaBorderDesktop.bottom}${mediaBorderUnits.Desktop} ${mediaBorderDesktop.left}${mediaBorderUnits.Desktop}`;
	const mediaBorderTabletWidth = `${mediaBorderTablet.top}${mediaBorderUnits.Tablet} ${mediaBorderTablet.right}${mediaBorderUnits.Tablet} ${mediaBorderTablet.bottom}${mediaBorderUnits.Tablet} ${mediaBorderTablet.left}${mediaBorderUnits.Tablet}`;
	const mediaBorderMobileWidth = `${mediaBorderMobile.top}${mediaBorderUnits.Mobile} ${mediaBorderMobile.right}${mediaBorderUnits.Mobile} ${mediaBorderMobile.bottom}${mediaBorderUnits.Mobile} ${mediaBorderMobile.left}${mediaBorderUnits.Mobile}`;
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
	const mediaBorderRadiusDesktopWidth = `${mediaBorderRadiusDesktop.top}${mediaBorderRadiusUnits.Desktop} ${mediaBorderRadiusDesktop.right}${mediaBorderRadiusUnits.Desktop} ${mediaBorderRadiusDesktop.bottom}${mediaBorderRadiusUnits.Desktop} ${mediaBorderRadiusDesktop.left}${mediaBorderRadiusUnits.Desktop}`;
	const mediaBorderRadiusTabletWidth = `${mediaBorderRadiusTablet.top}${mediaBorderRadiusUnits.Tablet} ${mediaBorderRadiusTablet.right}${mediaBorderRadiusUnits.Tablet} ${mediaBorderRadiusTablet.bottom}${mediaBorderRadiusUnits.Tablet} ${mediaBorderRadiusTablet.left}${mediaBorderRadiusUnits.Tablet}`;
	const mediaBorderRadiusMobileWidth = `${mediaBorderRadiusMobile.top}${mediaBorderRadiusUnits.Mobile} ${mediaBorderRadiusMobile.right}${mediaBorderRadiusUnits.Mobile} ${mediaBorderRadiusMobile.bottom}${mediaBorderRadiusUnits.Mobile} ${mediaBorderRadiusMobile.left}${mediaBorderRadiusUnits.Mobile}`;


	/* set default values for the style attributes */
	useEffect(() => {
		loadGoogleFont(headingFontFamily);
		loadGoogleFont(buttonFontFamily);
		loadGoogleFont(subHeadingFontFamily);
	}, [headingFontFamily, buttonFontFamily, subHeadingFontFamily]);


	const fbInfoBoxStyle = useMemo(
		() => `
		  .fb-info-box-wrapper.${blockID} {
		  	  position: relative;
			  ${globalZIndex.Desktop !== undefined ? `z-index: ${globalZIndex.Desktop};` : ""}
			  ${globalBgColor !== undefined ? `background-color: ${globalBgColor};` : ""}
			  ${DesktopPadding ? `padding: ${DesktopPadding};` : ""}
			  ${DesktopMargin ? `margin: ${DesktopMargin};` : ""}
			  ${globalBorder ? `border: ${globalBorder};` : ""}
			  ${BorderDesktopWidth ? `border-width: ${BorderDesktopWidth};` : ""}
			  ${BorderRadiusDesktopWidth ? `border-radius: ${BorderRadiusDesktopWidth};` : "" }
			  ${globalBorderColor !== undefined ? `border-color: ${globalBorderColor};` : "" }
			  ${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : "" }
			  transition: all .3s ease-in-out;
		  }
	  
		  .fb-info-box-wrapper.${blockID}:hover {
			  ${globalBgHoverColor !== undefined ? `background-color: ${globalBgHoverColor};` : "" }
			  ${globalBorderHoverColor !== undefined ? `border-color: ${globalBorderHoverColor};` : "" }
			  ${boxGlobalHoverBoxShadowCssValue ? `box-shadow: ${boxGlobalHoverBoxShadowCssValue};` : "" }
			  transition: all .3s ease-in-out;
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-info-box-wrapper.${blockID} {
				${globalZIndex.Tablet !== undefined ? `z-index: ${globalZIndex.Tablet};` : ""}
				${TabletPadding ? `padding: ${TabletPadding};` : ""}
				${TabletMargin ? `margin: ${TabletMargin};` : ""}
				${BorderTabletWidth ? `border-width: ${BorderTabletWidth};` : ""}
				${BorderRadiusTabletWidth ? `border-radius: ${BorderRadiusTabletWidth};` : "" }
			  }
		  }
	  
		  @media only screen and (max-width: 767px) {
			  .fb-info-box-wrapper.${blockID} {
				${globalZIndex.Mobile !== undefined ? `z-index: ${globalZIndex.Mobile};` : ""}
				${MobilePadding ? `padding: ${TabletPadding};` : ""}
				${MobileMargin ? `margin: ${TabletMargin};` : ""}
				${BorderMobileWidth ? `border-width: ${BorderMobileWidth};` : ""}
				${BorderRadiusMobileWidth ? `border-radius: ${BorderRadiusMobileWidth};` : ""
				}
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
			${wrapperAlignment !== undefined ? `justify-content: ${wrapperAlignment};` : ''}
			align-items: ${infoIconVerticalPosition === "v-top" ? "flex-start" : infoIconVerticalPosition === "v-middle" ? "center" : infoIconVerticalPosition === "v-bottom" ? "flex-end" : "flex-start"};
		  }
	  
		  .fb-info-box-wrapper.${blockID} .fb-heading {
			  ${Heading_Color !== undefined ? `color: ${Heading_Color};` : ""}
			  ${Heading_Background_Color !== undefined ? `background-color: ${Heading_Background_Color};` : "" }
			  ${headingFontFamily ? `font-family: ${headingFontFamily};` : ''}
			  ${headingFontSize.Desktop && headingFontSizeUnits.Desktop ? `font-size: ${headingFontSize.Desktop}${headingFontSizeUnits.Desktop};` : ''}
			  ${headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
			  ${headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
			  ${headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
			  ${headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
			  ${headingLetterSpacing.Desktop && headingLetterSpacingUnits.Desktop ? `letter-spacing: ${headingLetterSpacing.Desktop}${headingLetterSpacingUnits.Desktop};` : ''}
			  ${headingLineHeight.Desktop && headingLineHeightUnits.Desktop ? `line-height: ${headingLineHeight.Desktop}${headingLineHeightUnits.Desktop};` : ''}
			  padding: ${headingPaddingDesktopWidthValue};
			  margin: ${headingMarginDesktopWidthValue};
			  ${Heading_Border !== undefined ? `border-style: ${Heading_Border};` : ''}
			  ${headingBorderDesktopWidthValue !== undefined ? `border-width: ${headingBorderDesktopWidthValue};` : ''}
			  ${Heading_Border_Color !== undefined ? `border-color: ${Heading_Border_Color};` : ''}
			  ${headingBorderRadiusDesktopWidthValue !== undefined ? `border-radius: ${headingBorderRadiusDesktopWidthValue};` : ''}
			  ${Alignment !== undefined ? `text-align: ${Alignment};` : ''}
			  transition: all .3s ease-in-out;
			}
	  
		  .fb-info-box-wrapper.${blockID}:hover .fb-heading {
			  ${Heading_Hover_Color !== undefined ? `color: ${Heading_Hover_Color};` : ""}
			  ${ Heading_Border_Hover_Color !== undefined ? `border-color: ${Heading_Border_Hover_Color};` : "" }
			  transition: all .3s ease-in-out;
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-info-box-wrapper.${blockID} .fb-heading {
				  ${headingFontSize.Tablet && headingFontSizeUnits.Tablet ? `font-size: ${headingFontSize.Tablet}${headingFontSizeUnits.Tablet};` : ''}
                  ${headingLetterSpacing.Tablet && headingLetterSpacingUnits.Tablet ? `letter-spacing: ${headingLetterSpacing.Tablet}${headingLetterSpacingUnits.Tablet};` : ''}
                  ${headingLineHeight.Tablet && headingLineHeightUnits.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
				  padding: ${headingPaddingTabWidthValue};
				  margin: ${headingMarginTabWidthValue};
				  ${headingBorderTabWidthValue !== undefined ? `border-width: ${headingBorderTabWidthValue};` : ''}
			  	  ${headingBorderRadiusTabWidthValue !== undefined ? `border-radius: ${headingBorderRadiusTabWidthValue};` : ''}
			  }
		  }
		  @media only screen and (max-width: 724px) {
			  .fb-info-box-wrapper.${blockID} .fb-heading {
				  ${headingFontSize.Mobile && headingFontSizeUnits.Mobile ? `font-size: ${headingFontSize.Mobile}${headingFontSizeUnits.Mobile};` : ''}
                  ${headingLetterSpacing.Mobile && headingLetterSpacingUnits.Mobile ? `letter-spacing: ${headingLetterSpacing.Mobile}${headingLetterSpacingUnits.Mobile};` : ''}
                  ${headingLineHeight.Mobile && headingLineHeightUnits.Mobile ? `line-height: ${headingLineHeight.Mobile}${headingLineHeightUnits.Mobile};` : ''}
				  padding: ${headingPaddingMobileWidthValue};
				  margin: ${headingMarginMobileWidthValue};
				  ${headingBorderMobileWidthValue !== undefined ? `border-width: ${headingBorderMobileWidthValue};` : ''}
			  	  ${headingBorderRadiusMobileWidthValue !== undefined ? `border-radius: ${headingBorderRadiusMobileWidthValue};` : ''}
			  }
		  }
		
		.fb-info-box-wrapper.${blockID} .fb-description {
			${SubHeadingColor !== undefined ? `color: ${SubHeadingColor};` : ""}
			${subHeadingFontFamily ? `font-family: ${subHeadingFontFamily};` : ''}
			${subHeadingFontSize.Desktop && subHeadingFontSizeUnits.Desktop ? `font-size: ${subHeadingFontSize.Desktop}${subHeadingFontSizeUnits.Desktop};` : ''}
			${subHeadingFontWeight ? `font-weight: ${subHeadingFontWeight};` : ''}
			${subHeadingFontStyle ? `font-style: ${subHeadingFontStyle};` : ''}
			${subHeadingTextTransform ? `text-transform: ${subHeadingTextTransform};` : ''}
			${subHeadingTextDecoration ? `text-decoration: ${subHeadingTextDecoration};` : ''}
			${subHeadingLetterSpacing.Desktop && subHeadingLetterSpacingUnits.Desktop ? `letter-spacing: ${subHeadingLetterSpacing.Desktop}${subHeadingLetterSpacingUnits.Desktop};` : ''}
			${subHeadingLineHeight.Desktop && subHeadingLineHeightUnits.Desktop ? `line-height: ${subHeadingLineHeight.Desktop}${subHeadingLineHeightUnits.Desktop};` : ''}
			${subHeadingDesktopPaddingValue !== undefined ? `padding: ${subHeadingDesktopPaddingValue};` : "" }
			${descDesktopMarginValue  !== undefined ? `margin: ${descDesktopMarginValue };` : ""}
			${descAlignment !== undefined ? `text-align: ${descAlignment};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-info-box-wrapper.${blockID}:hover .fb-description {
			${ SubHeadingHoverColor !== undefined ? `color: ${SubHeadingHoverColor};` : "" }
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-description {
				${ subHeadingTabPaddingValue !== undefined ? `padding: ${subHeadingTabPaddingValue};` : "" }
				${descTabMarginValue  !== undefined ? `margin: ${descTabMarginValue };` : ""}
				${subHeadingFontSize.Tablet && subHeadingFontSizeUnits.Tablet ? `font-size: ${subHeadingFontSize.Tablet}${subHeadingFontSizeUnits.Tablet};` : ''}
				${subHeadingLetterSpacing.Tablet && subHeadingLetterSpacingUnits.Tablet ? `letter-spacing: ${subHeadingLetterSpacing.Tablet}${subHeadingLetterSpacingUnits.Tablet};` : ''}
				${subHeadingLineHeight.Tablet && subHeadingLineHeightUnits.Tablet ? `line-height: ${subHeadingLineHeight.Tablet}${subHeadingLineHeightUnits.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 757px) {
			.fb-info-box-wrapper.${blockID} .fb-description {
				${ subHeadingMobilePaddingValue !== undefined ? `padding: ${subHeadingMobilePaddingValue};` : "" }
				${descMobileMarginValue  !== undefined ? `margin: ${descMobileMarginValue };` : ""}
				${subHeadingFontSize.Mobile && subHeadingFontSizeUnits.Mobile ? `font-size: ${subHeadingFontSize.Mobile}${subHeadingFontSizeUnits.Mobile};` : ''}
				${subHeadingLetterSpacing.Mobile && subHeadingLetterSpacingUnits.Mobile ? `letter-spacing: ${subHeadingLetterSpacing.Mobile}${subHeadingLetterSpacingUnits.Mobile};` : ''}
				${subHeadingLineHeight.Mobile && subHeadingLineHeightUnits.Mobile ? `line-height: ${subHeadingLineHeight.Mobile}${subHeadingLineHeightUnits.Mobile};` : ''}
			}
		}
		.fb-info-box-wrapper.${blockID} .fb-info-btn-container {
			${buttonAlignment !== undefined ? `text-align: ${buttonAlignment};` : ''}
		}
		.fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
			flex-direction: ${btnIconPosition === "left" ? "row-reverse" : "row"};
			${buttonTextColor !== undefined ? `color: ${buttonTextColor};` : ""}
			${buttonBgColor !== undefined ? `background-color: ${buttonBgColor};` : "" }
			font-family: ${ buttonFontFamily !== "default" ? buttonFontFamily : buttonFontFamily };
			${buttonFontSize.Desktop !== undefined ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};` : ''}
			${buttonLetterSpacing.Desktop !== undefined ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};` : ''}
			${buttonLineHeight.Desktop !== undefined ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};` : ''}
			font-weight: ${buttonFontWeight};
			font-style: ${buttonFontStyle};
			text-transform: ${buttonTextTransform};
			text-decoration: ${buttonTextDecoration};
			${infoButtonDesktopPadding !== undefined ? `padding: ${buttonDesktopPaddingValue};` : ''}
			${infoButtonDesktopMargin !== undefined ? `margin: ${buttonDesktopMarginValue};` : ''}
			${infoButtonBorder !== undefined ? `border-style: ${infoButtonBorder};` : ''}
			${infoButtonDesktopBorderWidth !== undefined ? `border-width: ${buttonDesktopBorderValue};` : ''}
			${infoButtonBorderColor !== undefined ? `border-color: ${infoButtonBorderColor};` : ''}
			${infoBtnDesktopBorderradiusWidth !== undefined ? `border-radius: ${buttonDesktopBorderRadiusValue};` : ''}
			transition: all .3s ease-in-out;
		}

		.fb-info-box-wrapper.${blockID}:hover .fb-info-btn-wrapper {
			${buttonTextHoverColor !== undefined ? `color: ${buttonTextHoverColor};` : "" }
			${buttonBgHoverColor !== undefined ? `background-color: ${buttonBgHoverColor};` : "" }
			${infoButtonHoverBorderColor !== undefined ? `border-color: ${infoButtonHoverBorderColor};` : ''}
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
				${buttonFontSize.Tablet !== undefined ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};` : ''}
				${buttonLetterSpacing.Tablet !== undefined ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};` : ''}
				${buttonLineHeight.Tablet !== undefined ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};` : ''}
				${infoButtonTabPadding !== undefined ? `padding: ${buttonTabPaddingValue};` : ''}
				${infoButtonTabMargin !== undefined ? `margin: ${buttonTabMarginValue};` : ''}
				${infoButtonTabBorderWidth !== undefined ? `border-width: ${buttonTabBorderValue};` : ''}
				${infoBtnTabBorderradiusWidth !== undefined ? `border-radius: ${buttonTabBorderRadiusValue};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-info-btn-wrapper {
				${buttonFontSize.Mobile !== undefined ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};` : ''}
				${buttonLetterSpacing.Mobile !== undefined ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};` : ''}
				${buttonLineHeight.Mobile !== undefined ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};` : ''}
				${infoButtonMobilePadding !== undefined ? `padding: ${buttonMobilePaddingValue};` : ''}
				${infoButtonMobileMargin !== undefined ? `margin: ${buttonMobileMarginValue};` : ''}
				${infoButtonMobileBorderWidth !== undefined ? `border-width: ${buttonMobileBorderValue};` : ''}
				${infoBtnMobileBorderradiusWidth !== undefined ? `border-radius: ${buttonMobileBorderRadiusValue};` : ''}
			}
		}
		.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
			${mediaBackgroundType === "gradient" ? `
			background: ${mediaCustomGradientSwitcher && mediaCustomGradientInputValue ? mediaCustomGradientInputValue : mediaGradientColor };
			`
			: mediaBackgroundImageUrl && mediaBackgroundImageUrl !== "null" ? `
			${mediaBackgroundImageUrl ? `background-image: url(${mediaBackgroundImageUrl});` : "" }
			${mediaBackgroundImagePosition ? `background-position: ${mediaBackgroundImagePosition};` : "" }
			${mediaBackgroundImageAttachment ? `background-attachment: ${mediaBackgroundImageAttachment};` : "" }
			${mediaBackgroundImageRepeat ? `background-repeat: ${mediaBackgroundImageRepeat};` : "" }
			${mediaBackgroundImageSize ? `background-size: ${mediaBackgroundImageSize};` : "" }` : `
			background: ${mediaClassicColor}; `}
			${mediaBgWidth.Desktop ? `width: ${mediaBgWidth.Desktop}${mediaBgWidthUnits.Desktop};` : ''}
			${mediaBgHeight.Desktop ? `height: ${mediaBgHeight.Desktop}${mediaBgHeightUnits.Desktop};` : ''}
			padding: ${mediaDesktopPadding};
			margin: ${mediaDesktopMargin};
			${mediaBorder !== undefined ? `border-style: ${mediaBorder};` : ''}
			${mediaBorderDesktop !== undefined ? `border-width: ${mediaBorderDesktopWidth};` : ''}
			${mediaBorderColor !== undefined ? `border-color: ${mediaBorderColor};` : ''}
			${mediaBorderRadiusDesktop !== undefined ? `border-radius: ${mediaBorderRadiusDesktopWidth};` : ''}
			background-repeat: none;
			background-size: cover;
			${mediaClassicColor ? `justify-content: center; ` : ''}
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
			${mediaHoverBackgroundType === "gradient" ? ` background: ${ mediaHoverCustomGradientSwitcher && mediaHoverCustomGradientInputValue ? mediaHoverCustomGradientInputValue : mediaHoverGradientColor
			};
			`: mediaHoverBackgroundImageUrl &&  mediaHoverBackgroundImageUrl !== "null" ? `
			${mediaHoverBackgroundImageUrl ? `background-image: url(${mediaHoverBackgroundImageUrl});` : "" }
			${mediaHoverBackgroundImagePosition ? `background-position: ${mediaHoverBackgroundImagePosition};` : "" }
			${mediaHoverBackgroundImageAttachment ? `background-attachment: ${mediaHoverBackgroundImageAttachment};` : "" }
			${ mediaHoverBackgroundImageRepeat ? `background-repeat: ${mediaHoverBackgroundImageRepeat};` : "" }
			${mediaHoverBackgroundImageSize ? `background-size: ${mediaHoverBackgroundImageSize};` : "" } ` : `
			background: ${mediaHoverClassicColor}; ` }
			${mediaBorderHoverColor !== undefined ? `border-color: ${mediaBorderHoverColor};` : ''}
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
				padding: ${mediaTabletPadding};
				margin: ${mediaTabletMargin};
				${mediaBorderTablet !== undefined ? `border-width: ${mediaBorderTabletWidth};` : ''}
				${mediaBorderRadiusTablet !== undefined ? `border-radius: ${mediaBorderRadiusTabletWidth};` : ''}
				${mediaBgWidth.Tablet ? `width: ${mediaBgWidth.Tablet}${mediaBgWidthUnits.Tablet};` : ''}
				${mediaBgHeight.Tablet ? `height: ${mediaBgHeight.Tablet}${mediaBgHeightUnits.Tablet};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper {
				padding: ${mediaMobilePadding};
				margin: ${mediaMobileMargin};
				${mediaBorderMobile !== undefined ? `border-width: ${mediaBorderMobileWidth};` : ''}
				${mediaBorderRadiusMobile !== undefined ? `border-radius: ${mediaBorderRadiusMobileWidth};` : ''}
				${mediaBgWidth.Mobile ? `width: ${mediaBgWidth.Mobile}${mediaBgWidthUnits.Mobile};` : ''}
				${mediaBgHeight.Mobile ? `height: ${mediaBgHeight.Mobile}${mediaBgHeightUnits.Mobile};` : ''}
			}
		}

		.fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
		.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
			width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
			height: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
			${mediaIconColor !== undefined ? `fill: ${mediaIconColor};` : ""}
		}

		.fb-info-box-wrapper.${blockID}:hover .fb-icon-wrapper svg {
			${mediaIconHoverColor !== undefined ? `fill: ${mediaIconHoverColor};` : "#ffffff" }
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
				width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
				height: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-icon-wrapper svg,
			.fb-info-box-wrapper.${blockID} .fb-info-media-wrapper img {
				width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
				height: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
			}
		}

		.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
			width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};
			${btnIconColor !== undefined ? `fill: ${btnIconColor};` : "#ffffff"}
			transition: all .3s ease-in-out;
		}

		.fb-info-box-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg {
			${btnIconHoverColor !== undefined ? `fill: ${btnIconHoverColor};` : "#ffffff" }
			transition: all .3s ease-in-out;
		}

		@media only screen and (max-width: 1024px) {
			.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
				width: ${btnIconSize.Tablet}${btnIconSizeUnits.Tablet};
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-info-box-wrapper.${blockID} .fb-btn-icon-wrapper svg {
				width: ${btnIconSize.Mobile}${btnIconSizeUnits.Mobile};
			}
		}
		`,
		[
			blockID,
			Heading_Background_Color,
			Alignment,
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
			mediaSize,
			mediaSizeUnits,
			globalZIndex,
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
			infoCardAlignment
		],
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${fbInfoBoxStyle}`.replace(/\s+/g, ' ').trim(),
		});
	}, [fbInfoBoxStyle]);

	const editorStyle = fbInfoBoxStyle.replace(/\s+/g, ' ').trim();
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
										<div className="fb-advanced-wrapper">
											<PanelBody
												title={__("Icon/Image", "frontis-block")}
												initialOpen={true}
											>
												
												<SelectControl
													label={__("Preset Style", "frontis-blocks")}
													value={infoBoxPresetStyle}
													options={PRESETS}
													onChange={(selected) => changeInfoBoxPreset(selected)}
												/>

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
														<>
															<BaseControl
																label={__("Background Image", "frontis-blocks")}
																className="fb-advanced-heading-bg-image"
															>
																{infoMediaUrl ? (
																	<div
																		className="fb-image-avatar-control"
																		style={{
																			backgroundImage: `url(${infoMediaUrl})`,
																		}}
																	>
																		<button
																			className="fb-image-avatar-delete"
																			onClick={() => {
																				setAttributes({
																					infoMediaUrl: null,
																					infoMediaAlt: null,
																					infoMediaID: null,
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
																						infoMediaUrl: attachment.url,
																						infoMediaAlt: attachment.alt,
																						infoMediaID: attachment.id,
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
																					infoMediaUrl: attachment.url,
																					infoMediaAlt: attachment.alt,
																					infoMediaID: attachment.id,
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
												

												<TextareaControl
													label={__("Heading Text", "frontis-block")}
													value={Heading_Text}
													onChange={(value) =>
														setAttributes({ Heading_Text: value })
													}
													className="fb-setting-text"
												/>
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

														<TextareaControl
															label={__("Sub Heading Text", "frontis-block")}
															value={Sub_Heading_Text}
															onChange={(value) =>
																setAttributes({ Sub_Heading_Text: value })
															}
															className="fb-sub-heading-text"
														/>
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
														<TextareaControl
															label={__("Button Text", "frontis-block")}
															value={info_Button_Text}
															onChange={(value) =>
																setAttributes({ info_Button_Text: value })
															}
															className="fb-info-button-text"
														/>
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
													</>
												)}
											</PanelBody>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
										{/*Image/Icon Style*/}
										<PanelBody
											title={__("Image/Icon", "frontis-block")}
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
															setGlobalColor={(value) => setAttributes({ mediaIconColor: value })}
														/>
													)}
															
													{mediaIconColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={mediaIconHoverColor}
															setGlobalColor={(value) => setAttributes({ mediaIconHoverColor: value })}
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
											setNormalClassicColor={(value) => setAttributes({ mediaClassicColor: value })}
											normalGradientColor={mediaGradientColor}
											setNormalGradientColor={(value) => setAttributes({ mediaGradientColor: value })}
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
											setHoverClassicColor={(value) => setAttributes({ mediaHoverClassicColor: value })}
											hoverGradientColor={mediaHoverGradientColor}
											setHoverGradientColor={(value) => setAttributes({ mediaHoverGradientColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ mediaBorderColor: value })}
                                                />
                                            )}
                                                    
                                            {mediaBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={mediaBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ mediaBorderHoverColor: value })}
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
                                                fontFamily={headingFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value })}

                                                fontSize={headingFontSize}
                                                onChangeFontSize={(value) => setAttributes({ headingFontSize: value })}

                                                fontSizeUnits={headingFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

                                                fontWeight={headingFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value })}

                                                fontStyle={headingFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value })}

                                                textTransform={headingTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value })}

                                                textDecoration={headingTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value })}

                                                letterSpacing={headingLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value })}

                                                letterSpacingUnits={headingLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

                                                lineHeight={headingLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ Heading_Color: value })}
                                                />
                                            )}
                                                    
                                            {Heading_Color_Switcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={Heading_Hover_Color}
                                                    setGlobalColor={(value) => setAttributes({ Heading_Hover_Color: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ Heading_Border_Color: value })}
                                                />
                                            )}
                                                    
                                            {Heading_Border_Color_Switcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={Heading_Border_Hover_Color}
                                                    setGlobalColor={(value) => setAttributes({ Heading_Border_Hover_Color: value })}
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
                                                fontFamily={subHeadingFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ subHeadingFontFamily: value })}

                                                fontSize={subHeadingFontSize}
                                                onChangeFontSize={(value) => setAttributes({ subHeadingFontSize: value })}

                                                fontSizeUnits={subHeadingFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ subHeadingFontSizeUnits: value })}

                                                fontWeight={subHeadingFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ subHeadingFontWeight: value })}

                                                fontStyle={subHeadingFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ subHeadingFontStyle: value })}

                                                textTransform={subHeadingTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ subHeadingTextTransform: value })}

                                                textDecoration={subHeadingTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ subHeadingTextDecoration: value })}

                                                letterSpacing={subHeadingLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ subHeadingLetterSpacing: value })}

                                                letterSpacingUnits={subHeadingLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ subHeadingLetterSpacingUnits: value })}

                                                lineHeight={subHeadingLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ subHeadingLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ SubHeadingColor: value })}
                                                />
                                            )}
                                                    
                                            {SubHeadingColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={SubHeadingHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ SubHeadingHoverColor: value })}
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
                                                fontFamily={buttonFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value })}

                                                fontSize={buttonFontSize}
                                                onChangeFontSize={(value) => setAttributes({ buttonFontSize: value })}

                                                fontSizeUnits={buttonFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

                                                fontWeight={buttonFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value })}

                                                fontStyle={buttonFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value })}

                                                textTransform={buttonTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value })}

                                                textDecoration={buttonTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value })}

                                                letterSpacing={buttonLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value })}

                                                letterSpacingUnits={buttonLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

                                                lineHeight={buttonLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ buttonTextColor: value })}
                                                />
                                            )}
                                                    
                                            {buttonColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={buttonTextHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ buttonTextHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ buttonBgColor: value })}
                                                />
                                            )}
                                                    
                                            {buttonBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={buttonBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ buttonBgHoverColor: value })}
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
														setGlobalColor={(value) => setAttributes({ btnIconColor: value })}
													/>
												)}
														
												{btnIconColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={btnIconHoverColor}
														setGlobalColor={(value) => setAttributes({ btnIconHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ infoButtonBorderColor: value })}
                                                />
                                            )}
                                                    
                                            {infoButtonBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={infoButtonHoverBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ infoButtonHoverBorderColor: value })}
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
															setGlobalColor={(value) => setAttributes({ globalBgColor: value })}
														/>
													)}
															
													{globalBgColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={globalBgHoverColor}
															setGlobalColor={(value) => setAttributes({ globalBgHoverColor: value })}
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
															setGlobalColor={(value) => setAttributes({ globalBorderColor: value })}
														/>
													)}
															
													{globalBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={globalBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ globalBorderHoverColor: value })}
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
