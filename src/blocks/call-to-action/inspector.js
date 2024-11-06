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
	TextControl,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
	ColorPicker,
	ColorPalette,
	GradientPicker,
	CircularOptionPicker,
	ResponsiveWrapper,
	__experimentalHStack as HStack,
	__experimentalHeading as Heading,
} from "@wordpress/components";
/**
 * Internal depencencies
 */
import {
	WRAPPER_BG,
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	TITLE_MARGIN,
	SUBTITLE_MARGIN,
	separator_MARGIN,
	separator_LINE_SIZE,
	separator_ICON_SIZE,
	separator_WIDTH,
	separator_POSITION,
	subheading_POSITION,
	NORMAL_HOVER,
	UNIT_TYPES,
	separator_UNIT_TYPES,
	PRESETS,
	TEXT_ALIGN,
	HEADING,
	SEPERATOR_STYLES,
	separator_TYPE,
	FONT_FAMILYS,
	CLASSIC_GRADIENT,
	BORDER_STYLES,
	mediaType,
	ICON_POSITION,
	INFO_ICON_POSITION,
	BG_TYPE,
} from "./constants/constants";

import { useState, createRef, useEffect, useMemo } from "@wordpress/element";

import "./editor.scss";
import FBIconPicker from "../../components/icon-picker";
import FB_ResponsiveControl from "@Components/responsive-control";
import FB_Range from "@Components/range";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Spacing from "@Components/spacing";
import FB_Color from "@Components/color";
import FB_TypographyControl from "@Components/typography-control";
import FB_BackgroundColorControl from "@Components/background-color-control";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		Heading_Text,
		Heading_Tag,
		Heading_Background_Color,
		Alignment,
		Sub_Heading_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Position,
		Heading_Font_Family,
		Heading_Font_Size,
		Heading_Font_size_units,
		Heading_Font_Weight,
		Heading_Font_Style,
		Heading_Text_Transform,
		Heading_Text_Decoration,
		Heading_Letter_Spacing,
		Heading_Line_Height,
		Heading_Letter_Spacing_units,
		Heading_Line_Height_units,
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
		activeBorderDevice,
		Heading_Desktop_Border_radius_Width,
		Heading_Tab_Border_radius_Width,
		Heading_Mobile_Border_radius_Width,
		activeBorderRadiusDevice,
		borderRadiusLink,
		borderLink,
		Heading_padding_units,
		Heading_Desktop_padding,
		Heading_Tab_padding,
		Heading_Mobile_padding,
		deviceType,
		paddingLink,

		Heading_Margin_Units,
		Heading_Desktop_Margin,
		Heading_Tab_Margin,
		Heading_Mobile_Margin,
		Heading_Active_Margin_Device,
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
		SubHeadingTextDecoration,
		SubHeadingTextTransform,
		SubHeadingFontStyle,
		SubHeadingFontWeight,
		SubHeadingFontSizeUnits,
		SubHeadingFontSize,
		SubHeadingFontFamily,
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
		infoBoxBorder,
		infoBoxBorderColor,
		infoBoxBorderHoverColor,
		infoBoxBorderColorSwitcher,
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

		mediaBgWidth,
		mediaBgWidthDesktop,
		mediaBgWidthTablet,
		mediaBgWidthMobile,
		mediaBgWidthUnitsSave,
		mediaBgWidthUnits,
		mediaBgHeight,
		mediaBgHeightDesktop,
		mediaBgHeightTablet,
		mediaBgHeightMobile,
		mediaBgHeightUnitsSave,
		mediaBgHeightUnits,
		mediaIconColor,
		mediaIconHoverColor,
		mediaIconColorSwitcher,
		boxGlobalBoxShadowValues,
		boxGlobalBoxShadowCssValue,
		mediaBgTypeImage,
		bgType,
		btnTwoText,
		btnTwoSwitcher,
		buttonTwoIconSwitcher,
		btnTwoLink,
		btnTwoPaddingUnits,
		btnTwoDesktopPadding,
		btnTwoTabPadding,
		btnTwoMobilePadding,
		btnTwoPaddingLink,
		btnTwoMarginUnits,
		btnTwoDesktopMargin,
		btnTwoTabMargin,
		btnTwoMobileMargin,
		btnTwoMarginLink,
		btnTwoBorderColorSwitcher,
		btnTwoBorder,
		btnTwoBorderColor,
		btnTwoHoverBorderColor,
		btnTwoBorderUnits,
		btnTwoDesktopBorder,
		btnTwoTabBorder,
		btnTwoMobileBorder,
		btnTwoBorderRadiusUnits,
		btnTwoDesktopBorderRadius,
		btnTwoTabBorderRadius,
		btnTwoMobileBorderRadius,
		btnTwoIcon,
		btnTwoIconSize,
		btnTwoIconSizeUnits,
		btnTwoIconColorSwitcher,
		btnTwoIconColor,
		btnTwoIconHoverColor,
		btnTwoIconPosition,
		buttonTwoFontFamily,
		buttonTwoFontSize,
		buttonTwoFontSizeUnits,
		buttonTwoFontWeight,
		buttonTwoFontStyle,
		buttonTwoTextTransform,
		buttonTwoTextDecoration,
		buttonTwoLetterSpacing,
		buttonTwoLetterSpacingUnits,
		buttonTwoLineHeight,
		buttonTwoLineHeightUnits,
		buttonTwoColorSwitcher,
		buttonTwoTextColor,
		buttonTwoTextHoverColor,
		buttonTwoBgColorSwitcher,
		buttonTwoBgColor,
		buttonTwoBgHoverColor,
		btnTwoBorderLink,
		btnTwoBorderradiusUnits,
		btnTwoDesktopBorderradiusWidth,
		btnTwoTabBorderradiusWidth,
		btnTwoMobileBorderradiusWidth,
		btnTwoBorderRadiusLink,
		testBgColorSwitcher,
		testBackgroundType,
		testClassicColor,
		testGradientColor,
		testCustomGradientSwitcher,
		testCustomGradientInputValue,
		testBackgroundColorStyle,
		testBackgroundImageUrl,
		testBackgroundImageAlt,
		testBackgroundImageID,
		testBackgroundImagePosition,
		testBackgroundImageAttachment,
		testBackgroundImageSize,
		testBackgroundImageRepeat,
		hoverBackgroundType,
		hoverClassicColor,
		hoverGradientColor,
		hoverCustomGradientSwitcher,
		hoverCustomGradientInputValue,
		hoverBackgroundColorStyle,
		hoverBackgroundImageUrl,
		hoverBackgroundImageAlt,
		hoverBackgroundImageID,
		hoverBackgroundImagePosition,
		hoverBackgroundImageAttachment,
		hoverBackgroundImageSize,
		hoverBackgroundImageRepeat,
		blockStyle,
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-cta-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();

	// Info media remove handler
	const removeInfoMedia = () => {
		setAttributes({
			infoMediaId: "",
			infoMediaUrl: "",
		});
	};

	const removeMediaBg = () => {
		setAttributes({
			mediaBgId: "",
			mediaBgTypeImage: "",
		});
	};
	const buttonIconHandler = (iconName) => {
		setAttributes({ btnIcon: iconName });
	};
	const buttonTwoIconHandler = (iconName) => {
		setAttributes({ btnTwoIcon: iconName });
	};

	const mediaSizeHandler = (value) => {
		setAttributes({ mediaSize: value });
	};

	const mediaSizeUnitsHandler = (value) => {
		setAttributes({ mediaSizeUnits: value });
	};
	/** Media Bg Width */
	const mediaBgWidthHandler = (value) => {
		setAttributes({ mediaBgWidth: value });
	};

	const mediaBgWidthUnitsHandler = (value) => {
		setAttributes({ mediaBgWidthUnits: value });
	};
	/** Media Bg Width */
	const mediaBgHeightHandler = (value) => {
		setAttributes({ mediaBgHeight: value });
	};

	const mediaBgHeightUnitsHandler = (value) => {
		setAttributes({ mediaBgWidthUnits: value });
	};
	/** Start Padding */
	const [previousPadding, setPreviousPadding] = useState(
		Heading_Desktop_padding,
	);
	/** Function to update all padding values */
	const updateAllPadding = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handlePaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					Heading_Desktop_padding: {
						...Heading_Desktop_padding,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					Heading_Tab_padding: { ...Heading_Tab_padding, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					Heading_Mobile_padding: {
						...Heading_Mobile_padding,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateAllPadding(value, deviceType);
		}
	};

	/** Function to handle paddingLink toggle */
	const handlePaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({ Heading_Desktop_padding: previousPadding });
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({ paddingLink: !paddingLink });
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPadding(Heading_Desktop_padding);
	}, [Heading_Desktop_padding]);

	/** Function to handle device click for padding */
	const handlePaddingDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default padding for desktop (using desktop_padding) */
	const padding = `${Heading_Desktop_padding.top}${Heading_padding_units} ${Heading_Desktop_padding.right}${Heading_padding_units} ${Heading_Desktop_padding.bottom}${Heading_padding_units} ${Heading_Desktop_padding.left}${Heading_padding_units}`;
	/** End Padding */

	/** Start Padding */
	const [buttonPreviousPadding, setButtonPreviousPadding] = useState(
		infoButtonDesktopPadding,
	);
	/** Function to update all padding values */
	const updateButtonPadding = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleButtonPaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					infoButtonDesktopPadding: {
						...infoButtonDesktopPadding,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoButtonTabPadding: { ...infoButtonTabPadding, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					infoButtonMobilePadding: {
						...infoButtonMobilePadding,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateButtonPadding(value, deviceType);
		}
	};

	/** Function to handle paddingLink toggle */
	const handleButtonPaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({ infoButtonDesktopPadding: buttonPreviousPadding });
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({ paddingLink: !paddingLink });
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setButtonPreviousPadding(infoButtonDesktopPadding);
	}, [infoButtonDesktopPadding]);

	/** Function to handle device click for padding */
	const handleButtonPaddingDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default padding for desktop (using desktop_padding) */
	const buttonPadding = `${infoButtonDesktopPadding.top}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.right}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.bottom}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.left}${infoButtonPaddingUnits}`;
	/** End Padding */

	/*BOX SPACING*/
	/** Start Padding */
	const [boxPreviousPadding, setBoxPreviousPadding] = useState(
		infoBoxDesktopPadding,
	);
	/** Function to update all padding values */
	const updateAllBoxPadding = (value, device) => {
		switch (device) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoBoxTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobilePadding: {
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
	};

	/** Function to handle input change */
	const handleBoxPaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopPadding: {
						...infoBoxDesktopPadding,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoBoxTabPadding: { ...infoBoxTabPadding, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobilePadding: { ...infoBoxMobilePadding, [direction]: value },
				});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateAllBoxPadding(value, deviceType);
		}
	};

	/** Function to handle paddingLink toggle */
	const handleBoxPaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({ infoBoxDesktopPadding: boxPreviousPadding });
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({ paddingLink: !paddingLink });
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setBoxPreviousPadding(infoBoxDesktopPadding);
	}, [infoBoxDesktopPadding]);

	/** Function to handle device click for padding */
	const handleBoxPaddingDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default padding for desktop (using desktop_padding) */
	const boxPadding = `${infoBoxDesktopPadding.top}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.right}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.bottom}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.left}${infoBoxPaddingUnits}`;
	/** End Padding */

	/** Start Margin */
	const [boxPreviousMargin, setBoxPreviousMargin] =
		useState(infoBoxDesktopMargin);
	/** Function to update all margin values */
	const updateBoxMargin = (value, device) => {
		switch (device) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoBoxTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobileMargin: {
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
	};

	/** Function to handle input change */
	const handleBoxMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopMargin: { ...infoBoxDesktopMargin, [direction]: value },
				});
				break;
			case "Tablet":
				setAttributes({
					infoBoxTabMargin: { ...infoBoxTabMargin, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobileMargin: { ...infoBoxMobileMargin, [direction]: value },
				});
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (infoBoxMarginLink) {
			updateBoxMargin(value, deviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleBoxMarginLinkToggle = () => {
		if (!infoBoxMarginLink) {
			setAttributes({ infoBoxDesktopMargin: boxPreviousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({ infoBoxMarginLink: !infoBoxMarginLink });
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setBoxPreviousMargin(infoBoxDesktopMargin);
	}, [infoBoxDesktopMargin]);

	/** Function to handle device click for margin */
	const handleBoxMarginDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const boxMargin = `${infoBoxDesktopMargin.top}${infoBoxMarginUnits} ${infoBoxDesktopMargin.right}${infoBoxMarginUnits} ${infoBoxDesktopMargin.bottom}${infoBoxMarginUnits} ${infoBoxDesktopMargin.left}${infoBoxMarginUnits}`;
	/** End Margin */

	/** Start Padding For Description*/
	const [previousPaddingDescription, setPreviousPaddingDescription] = useState(
		SubHeadingDesktopPadding,
	);
	/** Function to update all padding values */
	const updateAllDescPadding = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleDescPaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					SubHeadingDesktopPadding: {
						...SubHeadingDesktopPadding,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					SubHeadingTabPadding: { ...SubHeadingTabPadding, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					SubHeadingMobilePadding: {
						...SubHeadingMobilePadding,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateAllDescPadding(value, deviceType);
		}
	};

	/** Function to handle paddingLink toggle */
	const handleDescPaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({ SubHeadingDesktopPadding: previousPaddingDescription });
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({ paddingLink: !paddingLink });
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPaddingDescription(SubHeadingDesktopPadding);
	}, [SubHeadingDesktopPadding]);

	/** Function to handle device click for padding */
	const handleDescPaddingDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default padding for desktop (using desktop_padding) */
	const descPadding = `${SubHeadingDesktopPadding.top}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.right}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.bottom}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.left}${SubHeadingPaddingUnits}`;
	/** End Padding */

	/** Start Margin */
	const [descPreviousMargin, setDescPreviousMargin] =
		useState(descDesktopMargin);
	/** Function to update all margin values */
	const updateDescMargin = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleDescMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					descDesktopMargin: { ...descDesktopMargin, [direction]: value },
				});
				break;
			case "Tablet":
				setAttributes({
					descTabMargin: { ...descTabMargin, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					descMobileMargin: { ...descMobileMargin, [direction]: value },
				});
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (descMarginLink) {
			updateDescMargin(value, deviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleDescMarginLinkToggle = () => {
		if (!descMarginLink) {
			setAttributes({ descDesktopMargin: descPreviousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({ descMarginLink: !descMarginLink });
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setDescPreviousMargin(descDesktopMargin);
	}, [descDesktopMargin]);

	/** Function to handle device click for margin */
	const handleDescMarginDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const descMargin = `${descDesktopMargin.top}${descMarginUnits} ${descDesktopMargin.right}${descMarginUnits} ${descDesktopMargin.bottom}${descMarginUnits} ${descDesktopMargin.left}${descMarginUnits}`;
	/** End Description Margin */

	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(Heading_Desktop_Margin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					Heading_Desktop_Margin: {
						...Heading_Desktop_Margin,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					Heading_Tab_Margin: { ...Heading_Tab_Margin, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					Heading_Mobile_Margin: {
						...Heading_Mobile_Margin,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (Heading_Margin_Link) {
			updateAllMargin(value, deviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!Heading_Margin_Link) {
			setAttributes({ Heading_Desktop_Margin: previousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({ Heading_Margin_Link: !Heading_Margin_Link });
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(Heading_Desktop_Margin);
	}, [Heading_Desktop_Margin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};
	/** Default margin for desktop (using desktop_margin) */
	const margin = `${Heading_Desktop_Margin.top}${Heading_padding_units} ${Heading_Desktop_Margin.right}${Heading_padding_units} ${Heading_Desktop_Margin.bottom}${Heading_padding_units} ${Heading_Desktop_Margin.left}${Heading_padding_units}`;
	/** End Margin */

	/** Start Margin */
	const [buttonPreviousMargin, setButtonPreviousMargin] = useState(
		infoButtonDesktopMargin,
	);
	/** Function to update all margin values */
	const updateButtonMargin = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleButtonMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					infoButtonDesktopMargin: {
						...infoButtonDesktopMargin,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoButtonTabMargin: { ...infoButtonTabMargin, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					infoButtonMobileMargin: {
						...infoButtonMobileMargin,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (infoButtonMarginLink) {
			updateButtonMargin(value, deviceType);
		}
	};

	/** Function to handle marginLink toggle */
	const handleButtonMarginLinkToggle = () => {
		if (!infoButtonMarginLink) {
			setAttributes({ infoButtonDesktopMargin: buttonPreviousMargin });
		}
		/** setmarginLink(!marginLink) */
		setAttributes({ infoButtonMarginLink: !infoButtonMarginLink });
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setButtonPreviousMargin(infoButtonDesktopMargin);
	}, [infoButtonDesktopMargin]);

	/** Function to handle device click for margin */
	const handleButtonMarginDeviceClick = (device) => {
		setAttributes({ infoButtonActiveMarginDevice: device });
	};

	/** Default margin for desktop (using desktop_margin) */
	const buttonMargin = `${infoButtonDesktopMargin.top}${infoButtonMarginUnits} ${infoButtonDesktopMargin.right}${infoButtonMarginUnits} ${infoButtonDesktopMargin.bottom}${infoButtonMarginUnits} ${infoButtonDesktopMargin.left}${infoButtonMarginUnits}`;
	/** End Margin */

	/** Start Button Border Width */
	const [buttonPreviousBorderWidth, setButtonPreviousBorderWidth] = useState(
		infoButtonDesktopBorderWidth,
	);
	/** Function to update all Border Width values */
	const updateButtonBorderWidth = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleButtonBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					infoButtonDesktopBorderWidth: {
						...infoButtonDesktopBorderWidth,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoButtonTabBorderWidth: {
						...infoButtonTabBorderWidth,
						[direction]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoButtonMobileBorderWidth: {
						...infoButtonMobileBorderWidth,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderLink is true */
		if (borderLink) {
			updateButtonBorderWidth(value, deviceType);
		}
	};

	/** Function to handle borderLink toggle */
	const handleButtonBorderWidthLinkToggle = () => {
		if (!borderLink) {
			setAttributes({
				infoButtonDesktopBorderWidth: buttonPreviousBorderWidth,
			});
		}
		/** setborderLinkLink(!borderLink) */
		setAttributes({ borderLink: !borderLink });
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setButtonPreviousBorderWidth(infoButtonDesktopBorderWidth);
	}, [infoButtonDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleButtonBorderWidthDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const buttonBorderWidth = `${infoButtonDesktopBorderWidth.top}${infoButtonBorderUnits} ${infoButtonDesktopBorderWidth.right}${infoButtonBorderUnits} ${infoButtonDesktopBorderWidth.bottom}${infoButtonBorderUnits} ${infoButtonDesktopBorderWidth.left}${infoButtonBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [buttonPreviousBorderRadiusWidth, setButtonPreviousBorderRadiusWidth] =
		useState(infoBtnDesktopBorderradiusWidth);
	/** Function to update all Border Width values */
	const updateButtonBorderRadiusWidth = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleButtonBorderRadiusWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					infoBtnDesktopBorderradiusWidth: {
						...infoBtnDesktopBorderradiusWidth,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoBtnTabBorderradiusWidth: {
						...infoBtnTabBorderradiusWidth,
						[direction]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoBtnMobileBorderradiusWidth: {
						...infoBtnMobileBorderradiusWidth,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderRadiusLink is true */
		if (borderRadiusLink) {
			updateButtonBorderRadiusWidth(value, deviceType);
		}
	};

	/** Function to handle borderRadiusLink toggle */
	const handleButtonBorderRadiusWidthLinkToggle = () => {
		if (!borderRadiusLink) {
			setAttributes({
				infoBtnDesktopBorderradiusWidth: buttonPreviousBorderRadiusWidth,
			});
		}
		/** setborderRadiusLinkLink(!borderRadiusLink) */
		setAttributes({ borderRadiusLink: !borderRadiusLink });
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setButtonPreviousBorderRadiusWidth(infoBtnDesktopBorderradiusWidth);
	}, [infoBtnDesktopBorderradiusWidth]);

	/** Function to handle device click for Border Width */
	const handleButtonBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const buttonBorderRadiusWidth = `${infoBtnDesktopBorderradiusWidth.top}${infoBtnBorderradiusUnits} ${infoBtnDesktopBorderradiusWidth.right}${infoBtnBorderradiusUnits} ${infoBtnDesktopBorderradiusWidth.bottom}${infoBtnBorderradiusUnits} ${infoBtnDesktopBorderradiusWidth.left}${infoBtnBorderradiusUnits}`;
	/** End Border Radius Width */

	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(
		Heading_Desktop_Border_Width,
	);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					Heading_Desktop_Border_Width: {
						...Heading_Desktop_Border_Width,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					Heading_Tab_Border_Width: {
						...Heading_Tab_Border_Width,
						[direction]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					Heading_Mobile_Border_Width: {
						...Heading_Mobile_Border_Width,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderLink is true */
		if (borderLink) {
			updateAllBorderWidth(value, deviceType);
		}
	};

	/** Function to handle borderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!borderLink) {
			setAttributes({ Heading_Desktop_Border_Width: previousBorderWidth });
		}
		/** setborderLinkLink(!borderLink) */
		setAttributes({ borderLink: !borderLink });
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(Heading_Desktop_Border_Width);
	}, [Heading_Desktop_Border_Width]);

	/** Function to handle device click for Border Width */
	const handleBorderWidthDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const borderWidth = `${Heading_Desktop_Border_Width.top}${Heading_Border_units} ${Heading_Desktop_Border_Width.right}${Heading_Border_units} ${Heading_Desktop_Border_Width.bottom}${Heading_Border_units} ${Heading_Desktop_Border_Width.left}${Heading_Border_units}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(
		Heading_Desktop_Border_radius_Width,
	);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleBorderRadiusWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					Heading_Desktop_Border_radius_Width: {
						...Heading_Desktop_Border_radius_Width,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					Heading_Tab_Border_radius_Width: {
						...Heading_Tab_Border_radius_Width,
						[direction]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					Heading_Mobile_Border_radius_Width: {
						...Heading_Mobile_Border_radius_Width,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderRadiusLink is true */
		if (borderRadiusLink) {
			updateAllBorderRadiusWidth(value, deviceType);
		}
	};

	/** Function to handle borderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!borderRadiusLink) {
			setAttributes({
				Heading_Desktop_Border_radius_Width: previousBorderRadiusWidth,
			});
		}
		/** setborderRadiusLinkLink(!borderRadiusLink) */
		setAttributes({ borderRadiusLink: !borderRadiusLink });
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(Heading_Desktop_Border_radius_Width);
	}, [Heading_Desktop_Border_radius_Width]);

	/** Function to handle device click for Border Width */
	const handleBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const borderRadiusWidth = `${Heading_Desktop_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.left}${Heading_Border_radius_units}`;
	/** End Border Radius Width */

	/** Start Box Border Width */
	const [boxPreviousBorderWidth, setBoxPreviousBorderWidth] = useState(
		infoBoxDesktopBorderWidth,
	);

	/** Button Two */
	/** Start Heading Padding */
	const btnTwoPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobilePadding: {
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
						btnTwoDesktopPadding: {
							...btnTwoDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabPadding: { ...btnTwoTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobilePadding: { ...btnTwoMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const btnTwoPaddingLinkBtn = () => {
		setAttributes({
			btnTwoPaddingLink: !btnTwoPaddingLink,
		});
	};

	const btnTwoPaddingUnitsHandler = (unit) => {
		setAttributes({
			btnTwoPaddingUnits: {
				...btnTwoPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for button two */
	const btnTwoDesktopPaddingWidth = `${btnTwoDesktopPadding.top}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.right}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.bottom}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.left}${btnTwoPaddingUnits.Desktop}`;
	const btnTwoTabletPaddingWidth = `${btnTwoTabPadding.top}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.right}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.bottom}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.left}${btnTwoPaddingUnits.Tablet}`;
	const btnTwoMobilePaddingWidth = `${btnTwoMobilePadding.top}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.right}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.bottom}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.left}${btnTwoPaddingUnits.Mobile}`;
	/** End button two Padding */

	/** Start Media padding */
	const handleButtonTwoPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobilePadding: {
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
						btnTwoDesktopPadding: {
							...btnTwoDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabPadding: { ...btnTwoTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobilePadding: { ...btnTwoMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonTwoPaddingCombineBtn = () => {
		setAttributes({ btnTwoPaddingLink: !btnTwoPaddingLink });
	};

	const handleButtonTwoPaddingUnitsHandler = (unit) => {
		setAttributes({
			btnTwoPaddingUnits: {
				...btnTwoPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for desktop (using desktop_padding) */
	const buttonTwoDesktopPadding = `${btnTwoDesktopPadding.top}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.right}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.bottom}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.left}${btnTwoPaddingUnits.Desktop}`;
	const buttonTwoTabletPadding = `${btnTwoTabPadding.top}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.right}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.bottom}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.left}${btnTwoPaddingUnits.Tablet}`;
	const buttonTwoMobilePadding = `${btnTwoMobilePadding.top}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.right}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.bottom}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.left}${btnTwoPaddingUnits.Mobile}`;

	/** Start btnTwo Margin */
	const btnTwoMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileMargin: {
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
						btnTwoDesktopMargin: { ...btnTwoDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabMargin: { ...btnTwoTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileMargin: { ...btnTwoMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const btnTwoMarginLinkBtn = () => {
		setAttributes({
			btnTwoMarginLink: !btnTwoMarginLink,
		});
	};

	const btnTwoMarginUnitsHandler = (unit) => {
		setAttributes({
			btnTwoMarginUnits: {
				...btnTwoMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default margin for btnTwo */
	const btnTwoDesktopMarginWidth = `${btnTwoDesktopMargin.top}${btnTwoMarginUnits.Desktop} ${btnTwoDesktopMargin.right}${btnTwoMarginUnits.Desktop} ${btnTwoDesktopMargin.bottom}${btnTwoMarginUnits.Desktop} ${btnTwoDesktopMargin.left}${btnTwoMarginUnits.Desktop}`;
	const btnTwoTabletMarginWidth = `${btnTwoTabMargin.top}${btnTwoMarginUnits.Tablet} ${btnTwoTabMargin.right}${btnTwoMarginUnits.Tablet} ${btnTwoTabMargin.bottom}${btnTwoMarginUnits.Tablet} ${btnTwoTabMargin.left}${btnTwoMarginUnits.Tablet}`;
	const btnTwoMobileMarginWidth = `${btnTwoMobileMargin.top}${btnTwoMarginUnits.Mobile} ${btnTwoMobileMargin.right}${btnTwoMarginUnits.Mobile} ${btnTwoMobileMargin.bottom}${btnTwoMarginUnits.Mobile} ${btnTwoMobileMargin.left}${btnTwoMarginUnits.Mobile}`;
	/** End btnTwo Margin */

	/** Start btnTwo Border */
	const btnTwoBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorder: {
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
						btnTwoDesktopBorder: { ...btnTwoDesktopBorder, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorder: { ...btnTwoTabBorder, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorder: { ...btnTwoMobileBorder, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const btnTwoBorderLinkBtn = () => {
		setAttributes({
			btnTwoBorderLink: !btnTwoBorderLink,
		});
	};

	const btnTwoBorderUnitsHandler = (unit) => {
		setAttributes({
			btnTwoBorderUnits: {
				...btnTwoBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default border for btnTwo */
	const btnTwoDesktopBorderWidthStyle = `${btnTwoDesktopBorder.top}${btnTwoBorderUnits.Desktop} ${btnTwoDesktopBorder.right}${btnTwoBorderUnits.Desktop} ${btnTwoDesktopBorder.bottom}${btnTwoBorderUnits.Desktop} ${btnTwoDesktopBorder.left}${btnTwoBorderUnits.Desktop}`;
	const btnTwoTabletBorderWidthStyle = `${btnTwoTabBorder.top}${btnTwoBorderUnits.Tablet} ${btnTwoTabBorder.right}${btnTwoBorderUnits.Tablet} ${btnTwoTabBorder.bottom}${btnTwoBorderUnits.Tablet} ${btnTwoTabBorder.left}${btnTwoBorderUnits.Tablet}`;
	const btnTwoMobileBorderWidthStyle = `${btnTwoMobileBorder.top}${btnTwoBorderUnits.Mobile} ${btnTwoMobileBorder.right}${btnTwoBorderUnits.Mobile} ${btnTwoMobileBorder.bottom}${btnTwoBorderUnits.Mobile} ${btnTwoMobileBorder.left}${btnTwoBorderUnits.Mobile}`;
	/** End btnTwo Border */

	/** Start Button Two Border Radius */
	const btnTwoBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorderRadius: {
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
						btnTwoDesktopBorderRadius: {
							...btnTwoDesktopBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorderRadius: {
							...btnTwoTabBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorderRadius: {
							...btnTwoMobileBorderRadius,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const btnTwoBorderRadiusLinkBtn = () => {
		setAttributes({
			btnTwoBorderRadiusLink: !btnTwoBorderRadiusLink,
		});
	};

	const btnTwoBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			btnTwoBorderRadiusUnits: {
				...btnTwoBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default border radius for btnTwo */
	const btnTwoDesktopBorderRadiusWidthStyle = `${btnTwoDesktopBorderRadius.top}${btnTwoBorderRadiusUnits.Desktop} ${btnTwoDesktopBorderRadius.right}${btnTwoBorderRadiusUnits.Desktop} ${btnTwoDesktopBorderRadius.bottom}${btnTwoBorderRadiusUnits.Desktop} ${btnTwoDesktopBorderRadius.left}${btnTwoBorderRadiusUnits.Desktop}`;
	const btnTwoTabletBorderRadiusWidthStyle = `${btnTwoTabBorderRadius.top}${btnTwoBorderRadiusUnits.Tablet} ${btnTwoTabBorderRadius.right}${btnTwoBorderRadiusUnits.Tablet} ${btnTwoTabBorderRadius.bottom}${btnTwoBorderRadiusUnits.Tablet} ${btnTwoTabBorderRadius.left}${btnTwoBorderRadiusUnits.Tablet}`;
	const btnTwoMobileBorderRadiusWidthStyle = `${btnTwoMobileBorderRadius.top}${btnTwoBorderRadiusUnits.Mobile} ${btnTwoMobileBorderRadius.right}${btnTwoBorderRadiusUnits.Mobile} ${btnTwoMobileBorderRadius.bottom}${btnTwoBorderRadiusUnits.Mobile} ${btnTwoMobileBorderRadius.left}${btnTwoBorderRadiusUnits.Mobile}`;
	/** End btnTwo Border Radius */

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

	/** Start Global Bg Color */
	const handleGlobalBgColorSwitcherChange = (value) => {
		setAttributes({ globalBgColorSwitcher: value });
	};
	const handleGlobalBgColorChange = (value) => {
		setAttributes({ globalBgColor: value });
	};
	const handleGlobalBgHoverColorChange = (value) => {
		setAttributes({ globalBgHoverColor: value });
	};
	/** End Global Bg Color */

	/** Start Global Border Color */
	const handleGlobalBorderColorSwitcherChange = (value) => {
		setAttributes({ globalBorderColorSwitcher: value });
	};
	const handleGlobalBorderColorChange = (value) => {
		setAttributes({ globalBorderColor: value });
	};
	const handleGlobalBorderHoverColorChange = (value) => {
		setAttributes({ globalBorderHoverColor: value });
	};

	/* set default values for the style attributes */
	useEffect(() => {
		if (Heading_Font_Family) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${Heading_Font_Family.replace(
				" ",
				"+",
			)}`;
			const linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [Heading_Font_Family]);

	// Define the CSS as a string
	const css = `
        #${blockID} {
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
        }
    `;

	const ctaContentStyle = useMemo(
		() => `
		  .fb-cta-content-wrapper.${blockID} {
			  ${DesktopPadding ? `padding: ${DesktopPadding};` : ""}
			  ${DesktopMargin ? `margin: ${DesktopMargin};` : ""}
			  ${globalBorder ? `border: ${globalBorder};` : ""}
			  ${BorderDesktopWidth ? `border-width: ${BorderDesktopWidth};` : ""}
			  ${
					BorderRadiusDesktopWidth
						? `border-radius: ${BorderRadiusDesktopWidth} !important;`
						: ""
				}
			  ${
					globalBorderColor !== undefined
						? `border-color: ${globalBorderColor};`
						: ""
				}
			  ${
					boxGlobalBoxShadowCssValue
						? `box-shadow: ${boxGlobalBoxShadowCssValue};`
						: ""
				}
			  ${
					testBackgroundType === "gradient"
						? `background: ${
								testCustomGradientSwitcher && testCustomGradientInputValue
									? testCustomGradientInputValue
									: testGradientColor
						  };`
						: testBackgroundImageUrl && testBackgroundImageUrl !== "null"
						? `
					  ${
							testBackgroundImageUrl
								? `background-image: url(${testBackgroundImageUrl});`
								: ""
						}
					  ${
							testBackgroundImagePosition
								? `background-position: ${testBackgroundImagePosition};`
								: ""
						}
					  ${
							testBackgroundImageAttachment
								? `background-attachment: ${testBackgroundImageAttachment};`
								: ""
						}
					  ${
							testBackgroundImageRepeat
								? `background-repeat: ${testBackgroundImageRepeat};`
								: ""
						}
					  ${
							testBackgroundImageSize
								? `background-size: ${testBackgroundImageSize};`
								: ""
						}
					`
						: `background: ${testClassicColor};`
				}
			  transition: all .3s ease-in-out;
		  }
		  .fb-cta-content-wrapper.${blockID}:hover {
			  ${
					globalBgHoverColor !== undefined
						? `background-color: ${globalBgHoverColor};`
						: ""
				}
			  ${
					globalBorderHoverColor !== undefined
						? `border-color: ${globalBorderHoverColor};`
						: ""
				}
			  ${
					testBackgroundType === "gradient"
						? `background: ${
								testCustomGradientSwitcher && testCustomGradientInputValue
									? testCustomGradientInputValue
									: testGradientColor
						  };`
						: testBackgroundImageUrl && testBackgroundImageUrl !== "null"
						? `
					  ${
							testBackgroundImageUrl
								? `background-image: url(${testBackgroundImageUrl});`
								: ""
						}
					  ${
							testBackgroundImagePosition
								? `background-position: ${testBackgroundImagePosition};`
								: ""
						}
					  ${
							testBackgroundImageAttachment
								? `background-attachment: ${testBackgroundImageAttachment};`
								: ""
						}
					  ${
							testBackgroundImageRepeat
								? `background-repeat: ${testBackgroundImageRepeat};`
								: ""
						}
					  ${
							testBackgroundImageSize
								? `background-size: ${testBackgroundImageSize};`
								: ""
						}
					`
						: `background: ${testClassicColor};`
				}
		  }
		  @media only screen and (max-width: 1024px) {
			.fb-cta-content-wrapper-inner.${blockID} {
			  padding: ${infoBoxTabPadding.top}${infoBoxPaddingUnits} ${
					infoBoxTabPadding.right
				}${infoBoxPaddingUnits} ${
					infoBoxTabPadding.bottom
				}${infoBoxPaddingUnits} ${
					infoBoxTabPadding.left
				}${infoBoxPaddingUnits} !important;
			  margin: ${infoBoxTabMargin.top}${infoBoxMarginUnits} ${
					infoBoxTabMargin.right
				}${infoBoxMarginUnits} ${
					infoBoxTabMargin.bottom
				}${infoBoxMarginUnits} ${
					infoBoxTabMargin.left
				}${infoBoxMarginUnits} !important;
			  border-width: ${infoBoxTabBorderWidth.top}${infoBoxBorderUnits} ${
					infoBoxTabBorderWidth.right
				}${infoBoxBorderUnits} ${
					infoBoxTabBorderWidth.bottom
				}${infoBoxBorderUnits} ${
					infoBoxTabBorderWidth.left
				}${infoBoxBorderUnits} !important;
			  border-radius: ${
					infoBoxTabBorderRadiusWidth.top
				}${infoBoxBorderRadiusUnits} ${
					infoBoxTabBorderRadiusWidth.right
				}${infoBoxBorderRadiusUnits} ${
					infoBoxTabBorderRadiusWidth.bottom
				}${infoBoxBorderRadiusUnits} ${
					infoBoxTabBorderRadiusWidth.left
				}${infoBoxBorderRadiusUnits} !important;
			}
		  }
		  @media only screen and (max-width: 767px) {
			.fb-cta-content-wrapper-inner.${blockID} {
			  padding: ${infoBoxMobilePadding.top}${infoBoxPaddingUnits} ${
					infoBoxMobilePadding.right
				}${infoBoxPaddingUnits} ${
					infoBoxMobilePadding.bottom
				}${infoBoxPaddingUnits} ${
					infoBoxMobilePadding.left
				}${infoBoxPaddingUnits} !important;
			  margin: ${infoBoxMobileMargin.top}${infoBoxMarginUnits} ${
					infoBoxMobileMargin.right
				}${infoBoxMarginUnits} ${
					infoBoxMobileMargin.bottom
				}${infoBoxMarginUnits} ${
					infoBoxMobileMargin.left
				}${infoBoxMarginUnits} !important;
			  border-width: ${infoBoxMobileBorderWidth.top}${infoBoxBorderUnits} ${
					infoBoxMobileBorderWidth.right
				}${infoBoxBorderUnits} ${
					infoBoxMobileBorderWidth.bottom
				}${infoBoxBorderUnits} ${
					infoBoxMobileBorderWidth.left
				}${infoBoxBorderUnits} !important;
			  border-radius: ${
					infoBoxMobileBorderRadiusWidth.top
				}${infoBoxBorderRadiusUnits} ${
					infoBoxMobileBorderRadiusWidth.right
				}${infoBoxBorderRadiusUnits} ${
					infoBoxMobileBorderRadiusWidth.bottom
				}${infoBoxBorderRadiusUnits} ${
					infoBoxMobileBorderRadiusWidth.left
				}${infoBoxBorderRadiusUnits} !important;
			}
		  }
		.fb-cta-content-wrapper.${blockID} .fb-heading {
        ${Heading_Color ? `color: ${Heading_Color};` : ""}
        ${
					Heading_Background_Color
						? `background-color: ${Heading_Background_Color};`
						: ""
				}
        font-family: ${
					Heading_Font_Family !== "default" ? Heading_Font_Family : "inherit"
				};
        font-size: ${
					Heading_Font_Size
						? `${Heading_Font_Size}${Heading_Font_size_units}`
						: "inherit"
				};
        font-weight: ${Heading_Font_Weight || "normal"};
        font-style: ${Heading_Font_Style || "normal"};
        text-transform: ${Heading_Text_Transform || "none"};
        text-decoration: ${Heading_Text_Decoration || "none"};
        ${
					Heading_Letter_Spacing
						? `letter-spacing: ${Heading_Letter_Spacing}${Heading_Letter_Spacing_units};`
						: ""
				}
        ${
					Heading_Line_Height
						? `line-height: ${Heading_Line_Height}${Heading_Line_Height_units};`
						: ""
				}
        transition: all .3s ease-in-out;
        padding: ${padding || "0"};
        margin: ${margin || "0"};
        border: ${Heading_Border || "none"};
        ${Heading_Border_Color ? `border-color: ${Heading_Border_Color};` : ""}
        ${borderWidth ? `border-width: ${borderWidth};` : ""}
        ${borderRadiusWidth ? `border-radius: ${borderRadiusWidth};` : ""}
    }
    .fb-cta-content-wrapper.${blockID}:hover .fb-heading {
        ${Heading_Hover_Color ? `color: ${Heading_Hover_Color};` : ""}
        ${
					Heading_Border_Hover_Color
						? `border-color: ${Heading_Border_Hover_Color};`
						: ""
				}
    }

    /* Tablet Styles */
    @media only screen and (max-width: 1024px) {
        .fb-cta-content-wrapper.${blockID} .fb-heading {
            padding: ${
							Heading_Tab_padding
								? `${Heading_Tab_padding.top}${Heading_padding_units} ${Heading_Tab_padding.right}${Heading_padding_units} ${Heading_Tab_padding.bottom}${Heading_padding_units} ${Heading_Tab_padding.left}${Heading_padding_units}`
								: "inherit"
						} !important;
            margin: ${
							Heading_Tab_Margin
								? `${Heading_Tab_Margin.top}${Heading_Margin_Units} ${Heading_Tab_Margin.right}${Heading_Margin_Units} ${Heading_Tab_Margin.bottom}${Heading_Margin_Units} ${Heading_Tab_Margin.left}${Heading_Margin_Units}`
								: "inherit"
						} !important;
            ${
							Heading_Tab_Border_Width
								? `border-width: ${Heading_Tab_Border_Width.top}${Heading_Border_units} ${Heading_Tab_Border_Width.right}${Heading_Border_units} ${Heading_Tab_Border_Width.bottom}${Heading_Border_units} ${Heading_Tab_Border_Width.left}${Heading_Border_units};`
								: ""
						}
            ${
							Heading_Tab_Border_radius_Width
								? `border-radius: ${Heading_Tab_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.left}${Heading_Border_radius_units};`
								: ""
						}
        }
    }

    /* Mobile Styles */
    @media only screen and (max-width: 767px) {
        .fb-cta-content-wrapper.${blockID} .fb-heading {
            padding: ${
							Heading_Mobile_padding
								? `${Heading_Mobile_padding.top}${Heading_padding_units} ${Heading_Mobile_padding.right}${Heading_padding_units} ${Heading_Mobile_padding.bottom}${Heading_padding_units} ${Heading_Mobile_padding.left}${Heading_padding_units}`
								: "inherit"
						} !important;
            margin: ${
							Heading_Mobile_Margin
								? `${Heading_Mobile_Margin.top}${Heading_Margin_Units} ${Heading_Mobile_Margin.right}${Heading_Margin_Units} ${Heading_Mobile_Margin.bottom}${Heading_Margin_Units} ${Heading_Mobile_Margin.left}${Heading_Margin_Units}`
								: "inherit"
						} !important;
            ${
							Heading_Mobile_Border_Width
								? `border-width: ${Heading_Mobile_Border_Width.top}${Heading_Border_units} ${Heading_Mobile_Border_Width.right}${Heading_Border_units} ${Heading_Mobile_Border_Width.bottom}${Heading_Border_units} ${Heading_Mobile_Border_Width.left}${Heading_Border_units};`
								: ""
						}
            ${
							Heading_Mobile_Border_radius_Width
								? `border-radius: ${Heading_Mobile_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.left}${Heading_Border_radius_units};`
								: ""
						}
        }
    }
		.fb-cta-content-wrapper.${blockID} .fb-description {
        ${SubHeadingColor ? `color: ${SubHeadingColor};` : ""}
        font-family: ${
					SubHeadingFontFamily !== "default" ? SubHeadingFontFamily : "inherit"
				};
        font-size: ${
					SubHeadingFontSize
						? `${SubHeadingFontSize}${SubHeadingFontSizeUnits}`
						: "inherit"
				};
        font-weight: ${SubHeadingFontWeight || "normal"};
        font-style: ${SubHeadingFontStyle || "normal"};
        text-transform: ${SubHeadingTextTransform || "none"};
        text-decoration: ${SubHeadingTextDecoration || "none"};
        padding: ${descPadding || "0"};
        margin: ${descMargin || "0"};
    }
    .fb-cta-content-wrapper.${blockID}:hover .fb-description {
        ${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
    }

    /* Tablet Styles */
    @media only screen and (max-width: 1024px) {
        .fb-cta-content-wrapper.${blockID} .fb-description {
            padding: ${
							SubHeadingTabPadding
								? `${SubHeadingTabPadding.top}${SubHeadingPaddingUnits} ${SubHeadingTabPadding.right}${SubHeadingPaddingUnits} ${SubHeadingTabPadding.bottom}${SubHeadingPaddingUnits} ${SubHeadingTabPadding.left}${SubHeadingPaddingUnits}`
								: "inherit"
						} !important;
            margin: ${
							descTabMargin
								? `${descTabMargin.top}${descMarginUnits} ${descTabMargin.right}${descMarginUnits} ${descTabMargin.bottom}${descMarginUnits} ${descTabMargin.left}${descMarginUnits}`
								: "inherit"
						} !important;
        }
    }

    /* Mobile Styles */
    @media only screen and (max-width: 757px) {
        .fb-cta-content-wrapper.${blockID} .fb-description {
            padding: ${
							SubHeadingMobilePadding
								? `${SubHeadingMobilePadding.top}${SubHeadingPaddingUnits} ${SubHeadingMobilePadding.right}${SubHeadingPaddingUnits} ${SubHeadingMobilePadding.bottom}${SubHeadingPaddingUnits} ${SubHeadingMobilePadding.left}${SubHeadingPaddingUnits}`
								: "inherit"
						} !important;
            margin: ${
							descMobileMargin
								? `${descMobileMargin.top}${descMarginUnits} ${descMobileMargin.right}${descMarginUnits} ${descMobileMargin.bottom}${descMarginUnits} ${descMobileMargin.left}${descMarginUnits}`
								: "inherit"
						} !important;
        }
    }
		.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
      ${buttonTextColor !== undefined ? `color: ${buttonTextColor};` : ""}
      ${
				buttonBgColor !== undefined ? `background-color: ${buttonBgColor};` : ""
			}
      font-family: ${
				buttonFontFamily !== "default" ? buttonFontFamily : "inherit"
			};
      font-size: ${
				buttonFontSize !== undefined
					? `${buttonFontSize}${buttonFontSizeUnits}`
					: ""
			};
      font-weight: ${buttonFontWeight};
      font-style: ${buttonFontStyle};
      text-transform: ${buttonTextTransform};
      text-decoration: ${buttonTextDecoration};
      ${buttonPadding ? `padding: ${buttonPadding};` : ""}
      ${buttonMargin ? `margin: ${buttonMargin};` : ""}
      ${infoButtonBorder ? `border: ${infoButtonBorder};` : ""}
      ${infoButtonBorderColor ? `border-color: ${infoButtonBorderColor};` : ""}
      ${buttonBorderWidth ? `border-width: ${buttonBorderWidth};` : ""}
      ${
				buttonBorderRadiusWidth
					? `border-radius: ${buttonBorderRadiusWidth};`
					: ""
			}
    }

    .fb-cta-content-wrapper.${blockID}:hover .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
      ${
				buttonTextHoverColor !== undefined
					? `color: ${buttonTextHoverColor};`
					: ""
			}
      ${
				buttonBgHoverColor !== undefined
					? `background-color: ${buttonBgHoverColor};`
					: ""
			}
    }

    @media only screen and (max-width: 1024px) {
      .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
        ${
					infoButtonTabPadding
						? `padding: ${infoButtonTabPadding.top}${infoButtonPaddingUnits} ${infoButtonTabPadding.right}${infoButtonPaddingUnits} ${infoButtonTabPadding.bottom}${infoButtonPaddingUnits} ${infoButtonTabPadding.left}${infoButtonPaddingUnits} !important;`
						: ""
				}
        ${
					infoButtonTabMargin
						? `margin: ${infoButtonTabMargin.top}${infoButtonMarginUnits} ${infoButtonTabMargin.right}${infoButtonMarginUnits} ${infoButtonTabMargin.bottom}${infoButtonMarginUnits} ${infoButtonTabMargin.left}${infoButtonMarginUnits} !important;`
						: ""
				}
        ${
					infoButtonTabBorderWidth
						? `border-width: ${infoButtonTabBorderWidth.top}${infoButtonBorderUnits} ${infoButtonTabBorderWidth.right}${infoButtonBorderUnits} ${infoButtonTabBorderWidth.bottom}${infoButtonBorderUnits} ${infoButtonTabBorderWidth.left}${infoButtonBorderUnits} !important;`
						: ""
				}
        ${
					infoBtnTabBorderradiusWidth
						? `border-radius: ${infoBtnTabBorderradiusWidth.top}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.right}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.bottom}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.left}${infoBtnBorderradiusUnits} !important;`
						: ""
				}
      }
    }

    @media only screen and (max-width: 767px) {
      .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
        ${
					infoButtonMobilePadding
						? `padding: ${infoButtonMobilePadding.top}${infoButtonPaddingUnits} ${infoButtonMobilePadding.right}${infoButtonPaddingUnits} ${infoButtonMobilePadding.bottom}${infoButtonPaddingUnits} ${infoButtonMobilePadding.left}${infoButtonPaddingUnits} !important;`
						: ""
				}
        ${
					infoButtonMobileMargin
						? `margin: ${infoButtonMobileMargin.top}${infoButtonMarginUnits} ${infoButtonMobileMargin.right}${infoButtonMarginUnits} ${infoButtonMobileMargin.bottom}${infoButtonMarginUnits} ${infoButtonMobileMargin.left}${infoButtonMarginUnits} !important;`
						: ""
				}
        ${
					infoButtonMobileBorderWidth
						? `border-width: ${infoButtonMobileBorderWidth.top}${infoButtonBorderUnits} ${infoButtonMobileBorderWidth.right}${infoButtonBorderUnits} ${infoButtonMobileBorderWidth.bottom}${infoButtonBorderUnits} ${infoButtonMobileBorderWidth.left}${infoButtonBorderUnits} !important;`
						: ""
				}
        ${
					infoBtnTabBorderradiusWidth
						? `border-radius: ${infoBtnTabBorderradiusWidth.top}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.right}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.bottom}${infoBtnBorderradiusUnits} ${infoBtnTabBorderradiusWidth.left}${infoBtnBorderradiusUnits} !important;`
						: ""
				}
      }
    }
	  .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
            ${
							buttonTwoTextColor !== undefined
								? `color: ${buttonTwoTextColor};`
								: ""
						}
            ${
							buttonTwoBgColor !== undefined
								? `background-color: ${buttonTwoBgColor};`
								: ""
						}
            font-family: ${
							buttonTwoFontFamily !== "default"
								? buttonTwoFontFamily
								: buttonTwoFontFamily
						};
            ${
							buttonTwoFontSize.Desktop && buttonTwoFontSizeUnits.Desktop
								? `font-size: ${buttonTwoFontSize.Desktop}${buttonTwoFontSizeUnits.Desktop};`
								: ""
						}
            font-weight: ${buttonTwoFontWeight};
            font-style: ${buttonTwoFontStyle};
            text-transform: ${buttonTwoTextTransform};
            text-decoration: ${buttonTwoTextDecoration};
            ${
							buttonTwoLetterSpacing.Desktop &&
							buttonTwoLetterSpacingUnits.Desktop
								? `letter-spacing: ${buttonTwoLetterSpacing.Desktop}${buttonTwoLetterSpacingUnits.Desktop};`
								: ""
						}
            ${
							buttonTwoLineHeight.Desktop && buttonTwoLineHeightUnits.Desktop
								? `line-height: ${buttonTwoLineHeight.Desktop}${buttonTwoLineHeightUnits.Desktop};`
								: ""
						}
            padding: ${buttonTwoDesktopPadding};
            margin: ${btnTwoDesktopMarginWidth};
            border: ${btnTwoBorder};
            ${btnTwoBorderColor ? `border-color: ${btnTwoBorderColor};` : ""}
            border-width: ${btnTwoDesktopBorderWidthStyle};
            border-radius: ${btnTwoDesktopBorderRadiusWidthStyle};
        }
        
        .fb-cta-content-wrapper.${blockID}:hover .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
            ${
							buttonTwoTextHoverColor !== undefined
								? `color: ${buttonTwoTextHoverColor};`
								: ""
						}
            ${
							buttonTwoBgHoverColor !== undefined
								? `background-color: ${buttonTwoBgHoverColor};`
								: ""
						}
        }
        
        @media only screen and (max-width: 1024px) {
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
                padding: ${buttonTwoTabletPadding} !important;
                margin: ${btnTwoTabletMarginWidth} !important;
                border-width: ${btnTwoTabletBorderWidthStyle} !important;
                border-radius: ${btnTwoTabletBorderRadiusWidthStyle} !important;
            }
        }
        
        @media only screen and (max-width: 767px) {
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
                padding: ${buttonTwoMobilePadding} !important;
                margin: ${btnTwoMobileMarginWidth} !important;
                border-width: ${btnTwoMobileBorderWidthStyle} !important;
                border-radius: ${btnTwoMobileBorderRadiusWidthStyle} !important;
            }
        }
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
            width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};
            ${
							btnIconColor !== undefined ? `fill: ${btnIconColor};` : "#ffffff"
						};
        }
        .fb-cta-content-wrapper.${blockID}:hover .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
            ${
							btnIconHoverColor !== undefined
								? `fill: ${btnIconHoverColor};`
								: "#ffffff"
						};
        }

        @media only screen and (max-width: 1024px) {
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
                width: ${btnIconSize.Tablet}${btnIconSizeUnits.Tablet};
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
                width: ${btnIconSize.Mobile}${btnIconSizeUnits.Mobile};
            }
        }

        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
            width: ${btnTwoIconSize.Desktop}${btnTwoIconSizeUnits.Desktop};
            ${
							btnTwoIconColor !== undefined
								? `fill: ${btnTwoIconColor};`
								: "#ffffff"
						};
        }
        .fb-cta-content-wrapper.${blockID}:hover .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
            ${
							btnTwoIconHoverColor !== undefined
								? `fill: ${btnTwoIconHoverColor};`
								: "#ffffff"
						};
        }

        @media only screen and (max-width: 1024px) {
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
                width: ${btnTwoIconSize.Tablet}${btnTwoIconSizeUnits.Tablet};
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
                width: ${btnTwoIconSize.Mobile}${btnTwoIconSizeUnits.Mobile};
            }
        }
		`,
		[
			blockID,
			DesktopPadding,
			DesktopMargin,
			globalBorder,
			BorderDesktopWidth,
			BorderRadiusDesktopWidth,
			globalBorderColor,
			boxGlobalBoxShadowCssValue,
			testBackgroundType,
			testCustomGradientSwitcher,
			testCustomGradientInputValue,
			testGradientColor,
			testBackgroundImageUrl,
			testBackgroundImagePosition,
			testBackgroundImageAttachment,
			testBackgroundImageRepeat,
			testBackgroundImageSize,
			testClassicColor,
			globalBgHoverColor,
			globalBorderHoverColor,
			infoBoxTabPadding,
			infoBoxTabMargin,
			infoBoxTabBorderWidth,
			infoBoxTabBorderRadiusWidth,
			infoBoxMobilePadding,
			infoBoxMobileMargin,
			infoBoxMobileBorderWidth,
			infoBoxMobileBorderRadiusWidth,
			Heading_Color,
			Heading_Background_Color,
			Heading_Font_Family,
			Heading_Font_Size,
			Heading_Font_size_units,
			Heading_Font_Weight,
			Heading_Font_Style,
			Heading_Text_Transform,
			Heading_Text_Decoration,
			Heading_Letter_Spacing,
			Heading_Letter_Spacing_units,
			Heading_Line_Height,
			Heading_Line_Height_units,
			padding,
			margin,
			Heading_Border,
			Heading_Border_Color,
			borderWidth,
			borderRadiusWidth,
			Heading_Hover_Color,
			Heading_Border_Hover_Color,
			Heading_Tab_padding,
			Heading_padding_units,
			Heading_Tab_Margin,
			Heading_Margin_Units,
			Heading_Tab_Border_Width,
			Heading_Border_units,
			Heading_Tab_Border_radius_Width,
			Heading_Border_radius_units,
			Heading_Mobile_padding,
			Heading_Mobile_Margin,
			Heading_Mobile_Border_Width,
			Heading_Mobile_Border_radius_Width,
			SubHeadingColor,
			SubHeadingFontFamily,
			SubHeadingFontSize,
			SubHeadingFontSizeUnits,
			SubHeadingFontWeight,
			SubHeadingFontStyle,
			SubHeadingTextTransform,
			SubHeadingTextDecoration,
			descPadding,
			descMargin,
			SubHeadingHoverColor,
			SubHeadingTabPadding,
			SubHeadingPaddingUnits,
			descTabMargin,
			descMarginUnits,
			SubHeadingMobilePadding,
			descMobileMargin,
			buttonTextColor,
			buttonBgColor,
			buttonFontFamily,
			buttonFontSize,
			buttonFontSizeUnits,
			buttonFontWeight,
			buttonFontStyle,
			buttonTextTransform,
			buttonTextDecoration,
			buttonPadding,
			buttonMargin,
			infoButtonBorder,
			infoButtonBorderColor,
			buttonBorderWidth,
			buttonBorderRadiusWidth,
			buttonTextHoverColor,
			buttonBgHoverColor,
			infoButtonTabPadding,
			infoButtonPaddingUnits,
			infoButtonTabMargin,
			infoButtonMarginUnits,
			infoButtonTabBorderWidth,
			infoButtonBorderUnits,
			infoBtnTabBorderradiusWidth,
			infoBtnBorderradiusUnits,
			infoButtonMobilePadding,
			infoButtonMobileMargin,
			infoButtonMobileBorderWidth,
			buttonTwoTextColor,
			buttonTwoBgColor,
			buttonTwoFontFamily,
			buttonTwoFontSize,
			buttonTwoFontSizeUnits,
			buttonTwoFontWeight,
			buttonTwoFontStyle,
			buttonTwoTextTransform,
			buttonTwoTextDecoration,
			buttonTwoLetterSpacing,
			buttonTwoLetterSpacingUnits,
			buttonTwoLineHeight,
			buttonTwoLineHeightUnits,
			buttonTwoDesktopPadding,
			btnTwoDesktopMarginWidth,
			btnTwoBorder,
			btnTwoBorderColor,
			btnTwoDesktopBorderWidthStyle,
			btnTwoDesktopBorderRadiusWidthStyle,
			buttonTwoTextHoverColor,
			buttonTwoBgHoverColor,
			buttonTwoTabletPadding,
			btnTwoTabletMarginWidth,
			btnTwoTabletBorderWidthStyle,
			btnTwoTabletBorderRadiusWidthStyle,
			buttonTwoMobilePadding,
			btnTwoMobileMarginWidth,
			btnTwoMobileBorderWidthStyle,
			btnTwoMobileBorderRadiusWidthStyle,
			btnIconSize,
			btnIconSizeUnits,
			btnIconColor,
			btnIconHoverColor,
			btnTwoIconSize,
			btnTwoIconSizeUnits,
			btnTwoIconColor,
			btnTwoIconHoverColor,
		],
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${ctaContentStyle}`.replace(/\s+/g, " ").trim(),
		});
	}, [ctaContentStyle]);

	return (
		<>
			<style>
				{`
				
				${blockStyle}
            `}
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
												title={__("Title", "frontis-block")}
												initialOpen={false}
											>
												<BaseControl
													label={__("Heading Alignment", "frontis-block")}
													id="fb-setting-alignment"
													className="fb-advanced-alignment"
												>
													<ButtonGroup className="fb-advanced-alignment-group-btn">
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() =>
																	setAttributes({ Alignment: item.value })
																}
																className={`fb-advanced-alignment-single-btn ${
																	Alignment === item.value ? "active" : ""
																}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

												<BaseControl
													label={__("Heading Tag", "frontis-block")}
													className="fb-setting-tag-wrapper"
												>
													<ButtonGroup className="fb-setting-tag-inner-wrapper">
														{HEADING.map((item, key) => (
															<Button
																key={key}
																onClick={() =>
																	setAttributes({ Heading_Tag: item.value })
																}
																className={`fb-setting-tag-single-btn ${
																	Heading_Tag === item.value ? "active" : ""
																}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

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
														<BaseControl
															label={__("Alignment", "frontis-block")}
															id="fb-media-alignment"
															className="fb-advanced-alignment"
														>
															<ButtonGroup className="fb-advanced-alignment-group-btn">
																{TEXT_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				descAlignment: item.value,
																			})
																		}
																		className={`fb-advanced-alignment-single-btn ${
																			descAlignment === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>

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

										{/*Button One*/}
										<div className="fb-cta-button-wrapper">
											<PanelBody
												title={__("Button One", "frontis-block")}
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
														<BaseControl
															label={__("Alignment", "frontis-block")}
															id="fb-media-alignment"
															className="fb-advanced-alignment"
														>
															<ButtonGroup className="fb-advanced-alignment-group-btn">
																{TEXT_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				buttonAlignment: item.value,
																			})
																		}
																		className={`fb-advanced-alignment-single-btn ${
																			buttonAlignment === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>
														<TextareaControl
															label={__("Button Text", "frontis-block")}
															value={info_Button_Text}
															onChange={(value) =>
																setAttributes({ info_Button_Text: value })
															}
															className="fb-cta-button-text"
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
															<URLInput
																value={info_Button_Link}
																className="info-btn-url-input"
																onChange={(value, post) => {
																	const formattedLink =
																		value.startsWith("http://") ||
																		value.startsWith("https://")
																			? value
																			: `https://${value}`;

																	setAttributes({
																		info_Button_Link: formattedLink,
																		info_Button_Text:
																			(post && post.title) || info_Button_Text,
																	});
																}}
															/>
														</BaseControl>
													</>
												)}
											</PanelBody>
										</div>
										{/*Button Two*/}
										<div className="fb-cta-button-wrapper">
											<PanelBody
												title={__("Button Two", "frontis-block")}
												initialOpen={false}
											>
												<ToggleControl
													label={__("Show Button", "frontis-block")}
													checked={btnTwoSwitcher}
													onChange={(value) =>
														setAttributes({ btnTwoSwitcher: value })
													}
												/>
												{btnTwoSwitcher && (
													<>
														<TextareaControl
															label={__("Button Text", "frontis-block")}
															value={btnTwoText}
															onChange={(value) =>
																setAttributes({ btnTwoText: value })
															}
															className="fb-cta-button-text"
														/>
														<ToggleControl
															label={__("Show Icon", "frontis-block")}
															checked={buttonTwoIconSwitcher}
															onChange={(value) =>
																setAttributes({ buttonTwoIconSwitcher: value })
															}
														/>
														{buttonTwoIconSwitcher && (
															<>
																<BaseControl>
																	<FBIconPicker
																		value={btnTwoIcon}
																		setIconHandler={buttonTwoIconHandler}
																	/>
																</BaseControl>
																<SelectControl
																	label={__("Icon Position", "frontis-block")}
																	value={btnTwoIconPosition}
																	options={ICON_POSITION}
																	onChange={(value) =>
																		setAttributes({ btnTwoIconPosition: value })
																	}
																/>
															</>
														)}

														<BaseControl>
															<URLInput
																value={btnTwoLink}
																className="info-btn-url-input"
																onChange={(value, post) => {
																	const formattedLink =
																		value.startsWith("http://") ||
																		value.startsWith("https://")
																			? value
																			: `https://${value}`;

																	setAttributes({
																		btnTwoLink: formattedLink,
																		btnTwoText:
																			(post && post.title) || btnTwoText,
																	});
																}}
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
										{/*Heading Style*/}
										<PanelBody
											title={__("Heading", "frontis-block")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Typography", "frontis-block")}
												className="fb-setting-typography"
											>
												<Dropdown
													className="fb-setting-typography-icon-dropdown"
													contentClassName="fb-setting-typography-dropdown-content"
													popoverProps={{ placement: "bottom-start" }}
													renderToggle={({ isOpen, onToggle }) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__(
																"Toggle Typography Settings",
																"frontis-block",
															)}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon
																icon="edit"
																className="fb-setting-typography-icon"
															/>
														</Button>
													)}
													renderContent={() => (
														<div className="fb-setting-typography-popup">
															<BaseControl className="fb-setting-typography-popup-inner">
																<div className="fb-setting-fontfamily-wrapper">
																	<SelectControl
																		label={__("Font Family", "frontis-block")}
																		options={FONT_FAMILYS}
																		value={Heading_Font_Family}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Font_Family: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>
																				{__("Font Size", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup className="fb-setting-fontsize-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									Heading_Font_size_units:
																										item.value,
																								})
																							}
																							className={`fb-setting-fontsize-units-switcher ${
																								Heading_Font_size_units ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={Heading_Font_Size}
																			onChange={(value) =>
																				setAttributes({
																					Heading_Font_Size: value,
																				})
																			}
																			min={1}
																			max={200}
																			allowReset
																			resetFallbackValue={undefined}
																		/>
																	</div>
																</div>
																<div className="fb-setting-fontweight-wrapper">
																	<SelectControl
																		label={__("Font Weight", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "700",
																			},
																			{
																				label: __("100", "frontis-block"),
																				value: "100",
																			},
																			{
																				label: __("200", "frontis-block"),
																				value: "200",
																			},
																			{
																				label: __("300", "frontis-block"),
																				value: "300",
																			},
																			{
																				label: __("400", "frontis-block"),
																				value: "400",
																			},
																			{
																				label: __("500", "frontis-block"),
																				value: "500",
																			},
																			{
																				label: __("600", "frontis-block"),
																				value: "600",
																			},
																			{
																				label: __("700", "frontis-block"),
																				value: "700",
																			},
																			{
																				label: __("800", "frontis-block"),
																				value: "800",
																			},
																			{
																				label: __("900", "frontis-block"),
																				value: "900",
																			},
																		]}
																		value={Heading_Font_Weight}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Font_Weight: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "normal",
																			},
																			{
																				label: __("Normal", "frontis-block"),
																				value: "normal",
																			},
																			{
																				label: __("Italic", "frontis-block"),
																				value: "italic",
																			},
																			{
																				label: __("Oblique", "frontis-block"),
																				value: "oblique",
																			},
																		]}
																		value={Heading_Font_Style}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Font_Style: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__(
																			"Text Transform",
																			"frontis-block",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __(
																					"Capitalize",
																					"frontis-block",
																				),
																				value: "capitalize",
																			},
																			{
																				label: __("Uppercase", "frontis-block"),
																				value: "uppercase",
																			},
																			{
																				label: __("Lowercase", "frontis-block"),
																				value: "lowercase",
																			},
																		]}
																		value={Heading_Text_Transform}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Text_Transform: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__(
																			"Text Decoration",
																			"frontis-block",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("Underline", "frontis-block"),
																				value: "underline",
																			},
																			{
																				label: __("Overline", "frontis-block"),
																				value: "overline",
																			},
																			{
																				label: __(
																					"Line Through",
																					"frontis-block",
																				),
																				value: "line-through",
																			},
																		]}
																		value={Heading_Text_Decoration}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Text_Decoration: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>
																				{__("Letter Spacing", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup className="fb-setting-letterspacing-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									Heading_Letter_Spacing_units:
																										item.value,
																								})
																							}
																							className={`fb-setting-letterspacing-units-switcher ${
																								Heading_Letter_Spacing_units ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Letter_Spacing}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Letter_Spacing:
																					value === 0 ? undefined : value,
																			})
																		}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
																<div className="fb-setting-lineheight-wrapper">
																	<div className="fb-setting-lineheight-header">
																		<div className="fb-setting-lineheight-label">
																			<span>
																				{__("Line Height", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup className="fb-setting-lineheight-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									Heading_Line_Height_units:
																										item.value,
																								})
																							}
																							className={`fb-setting-lineheight-units-switcher ${
																								Heading_Line_Height_units ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Line_Height}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Line_Height:
																					value === 1 ? undefined : value,
																			})
																		}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											<BaseControl
												label={__("Text Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	Heading_Color_Switcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																Heading_Color_Switcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{Heading_Color_Switcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={Heading_Color}
																			onChange={(value) =>
																				setAttributes({ Heading_Color: value })
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={Heading_Color}
																			onChange={(value) =>
																				setAttributes({ Heading_Color: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{Heading_Color_Switcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={Heading_Hover_Color}
																			onChange={(value) =>
																				setAttributes({
																					Heading_Hover_Color: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={Heading_Hover_Color}
																			onChange={(value) =>
																				setAttributes({
																					Heading_Hover_Color: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{/*Spacing*/}
											<Heading>Spacing</Heading>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Padding", "frontis-block")}
															device={deviceType}
															deviceHandler={handlePaddingDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				Heading_padding_units: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			Heading_padding_units === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_padding.top
																		: deviceType === "Tablet"
																		? Heading_Tab_padding.top
																		: Heading_Mobile_padding.top
																}
																onChange={(e) =>
																	handlePaddingInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_padding.right
																		: deviceType === "Tablet"
																		? Heading_Tab_padding.right
																		: Heading_Mobile_padding.right
																}
																onChange={(e) =>
																	handlePaddingInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_padding.bottom
																		: deviceType === "Tablet"
																		? Heading_Tab_padding.bottom
																		: Heading_Mobile_padding.bottom
																}
																onChange={(e) =>
																	handlePaddingInputChange(e, "bottom")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_padding.left
																		: deviceType === "Tablet"
																		? Heading_Tab_padding.left
																		: Heading_Mobile_padding.left
																}
																onChange={(e) =>
																	handlePaddingInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	paddingLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${paddingLink ? "is-checked" : ""}`}
																onClick={handlePaddingLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Margin", "frontis-block")}
															device={deviceType}
															deviceHandler={handleMarginDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				Heading_Margin_Units: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			Heading_Margin_Units === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Margin.top
																		: deviceType === "Tablet"
																		? Heading_Tab_Margin.top
																		: Heading_Mobile_Margin.top
																}
																onChange={(e) =>
																	handleMarginInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Margin.right
																		: deviceType === "Tablet"
																		? Heading_Tab_Margin.right
																		: Heading_Mobile_Margin.right
																}
																onChange={(e) =>
																	handleMarginInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Margin.bottom
																		: deviceType === "Tablet"
																		? Heading_Tab_Margin.bottom
																		: Heading_Mobile_Margin.bottom
																}
																onChange={(e) =>
																	handleMarginInputChange(e, "bottom")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Margin.left
																		: deviceType === "Tablet"
																		? Heading_Tab_Margin.left
																		: Heading_Mobile_Margin.left
																}
																onChange={(e) =>
																	handleMarginInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	Heading_Margin_Link
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${Heading_Margin_Link ? "is-checked" : ""}`}
																onClick={handleMarginLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
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

											<BaseControl
												label={__("Border Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	Heading_Border_Color_Switcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																Heading_Border_Color_Switcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{Heading_Border_Color_Switcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={Heading_Border_Color}
																			onChange={(value) =>
																				setAttributes({
																					Heading_Border_Color: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={Heading_Border_Color}
																			onChange={(value) =>
																				setAttributes({
																					Heading_Border_Color: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{Heading_Border_Color_Switcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={Heading_Border_Hover_Color}
																			onChange={(value) =>
																				setAttributes({
																					Heading_Border_Hover_Color: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={Heading_Border_Hover_Color}
																			onChange={(value) =>
																				setAttributes({
																					Heading_Border_Hover_Color: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Border Width */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Border Width", "frontis-block")}
															device={deviceType}
															deviceHandler={handleBorderWidthDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				Heading_Border_units: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			Heading_Border_units === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_Width.top
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_Width.top
																		: Heading_Mobile_Border_Width.top
																}
																onChange={(e) =>
																	handleBorderWidthInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_Width.right
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_Width.right
																		: Heading_Mobile_Border_Width.right
																}
																onChange={(e) =>
																	handleBorderWidthInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_Width.bottom
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_Width.bottom
																		: Heading_Mobile_Border_Width.bottom
																}
																onChange={(e) =>
																	handleBorderWidthInputChange(e, "bottom")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_Width.left
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_Width.left
																		: Heading_Mobile_Border_Width.left
																}
																onChange={(e) =>
																	handleBorderWidthInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	borderLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${borderLink ? "is-checked" : ""}`}
																onClick={handleBorderWidthLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>

											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Border radius Width */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Border Radius", "frontis-block")}
															device={deviceType}
															deviceHandler={handleBorderRadiusWidthDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				Heading_Border_radius_units: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			Heading_Border_radius_units === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.top
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_radius_Width.top
																		: Heading_Mobile_Border_radius_Width.top
																}
																onChange={(e) =>
																	handleBorderRadiusWidthInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.right
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_radius_Width.right
																		: Heading_Mobile_Border_radius_Width.right
																}
																onChange={(e) =>
																	handleBorderRadiusWidthInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.bottom
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_radius_Width.bottom
																		: Heading_Mobile_Border_radius_Width.bottom
																}
																onChange={(e) =>
																	handleBorderRadiusWidthInputChange(
																		e,
																		"bottom",
																	)
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.left
																		: deviceType === "Tablet"
																		? Heading_Tab_Border_radius_Width.left
																		: Heading_Mobile_Border_radius_Width.left
																}
																onChange={(e) =>
																	handleBorderRadiusWidthInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	borderRadiusLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${borderRadiusLink ? "is-checked" : ""}`}
																onClick={handleBorderRadiusWidthLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>
										{/*Description Style*/}
										<PanelBody
											title={__("Description", "frontis-block")}
											initialOpen={false}
											className="fb-cta-desc-setting-wrapper"
										>
											{/*Typography*/}
											<BaseControl
												label={__("Typography", "frontis-block")}
												className="fb-setting-typography"
											>
												<Dropdown
													className="fb-setting-typography-icon-dropdown"
													contentClassName="fb-setting-typography-dropdown-content"
													popoverProps={{ placement: "bottom-start" }}
													renderToggle={({ isOpen, onToggle }) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__(
																"Toggle Typography Settings",
																"frontis-block",
															)}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon
																icon="edit"
																className="fb-setting-typography-icon"
															/>
														</Button>
													)}
													renderContent={() => (
														<div className="fb-setting-typography-popup">
															<BaseControl className="fb-setting-typography-popup-inner">
																<div className="fb-setting-fontfamily-wrapper">
																	<SelectControl
																		label={__("Font Family", "frontis-block")}
																		options={FONT_FAMILYS}
																		value={SubHeadingFontFamily}
																		onChange={(value) =>
																			setAttributes({
																				SubHeadingFontFamily: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>
																				{__("Font Size", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup className="fb-setting-fontsize-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									SubHeadingFontSizeUnits:
																										item.value,
																								})
																							}
																							className={`fb-setting-fontsize-units-switcher ${
																								SubHeadingFontSizeUnits ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={SubHeadingFontSize}
																			onChange={(value) =>
																				setAttributes({
																					SubHeadingFontSize: value,
																				})
																			}
																			min={1}
																			max={200}
																			allowReset
																			resetFallbackValue={undefined}
																		/>
																	</div>
																</div>
																<div className="fb-setting-fontweight-wrapper">
																	<SelectControl
																		label={__("Font Weight", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "700",
																			},
																			{
																				label: __("100", "frontis-block"),
																				value: "100",
																			},
																			{
																				label: __("200", "frontis-block"),
																				value: "200",
																			},
																			{
																				label: __("300", "frontis-block"),
																				value: "300",
																			},
																			{
																				label: __("400", "frontis-block"),
																				value: "400",
																			},
																			{
																				label: __("500", "frontis-block"),
																				value: "500",
																			},
																			{
																				label: __("600", "frontis-block"),
																				value: "600",
																			},
																			{
																				label: __("700", "frontis-block"),
																				value: "700",
																			},
																			{
																				label: __("800", "frontis-block"),
																				value: "800",
																			},
																			{
																				label: __("900", "frontis-block"),
																				value: "900",
																			},
																		]}
																		value={SubHeadingFontWeight}
																		onChange={(value) =>
																			setAttributes({
																				SubHeadingFontWeight: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "normal",
																			},
																			{
																				label: __("Normal", "frontis-block"),
																				value: "normal",
																			},
																			{
																				label: __("Italic", "frontis-block"),
																				value: "italic",
																			},
																			{
																				label: __("Oblique", "frontis-block"),
																				value: "oblique",
																			},
																		]}
																		value={SubHeadingFontStyle}
																		onChange={(value) =>
																			setAttributes({
																				SubHeadingFontStyle: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__(
																			"Text Transform",
																			"frontis-block",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __(
																					"Capitalize",
																					"frontis-block",
																				),
																				value: "capitalize",
																			},
																			{
																				label: __("Uppercase", "frontis-block"),
																				value: "uppercase",
																			},
																			{
																				label: __("Lowercase", "frontis-block"),
																				value: "lowercase",
																			},
																		]}
																		value={SubHeadingTextTransform}
																		onChange={(value) =>
																			setAttributes({
																				SubHeadingTextTransform: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__(
																			"Text Decoration",
																			"frontis-block",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("Underline", "frontis-block"),
																				value: "underline",
																			},
																			{
																				label: __("Overline", "frontis-block"),
																				value: "overline",
																			},
																			{
																				label: __(
																					"Line Through",
																					"frontis-block",
																				),
																				value: "line-through",
																			},
																		]}
																		value={SubHeadingTextDecoration}
																		onChange={(value) =>
																			setAttributes({
																				SubHeadingTextDecoration: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>
																				{__("Letter Spacing", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup className="fb-setting-letterspacing-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									Heading_Letter_Spacing_units:
																										item.value,
																								})
																							}
																							className={`fb-setting-letterspacing-units-switcher ${
																								Heading_Letter_Spacing_units ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Letter_Spacing}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Letter_Spacing:
																					value === 0 ? undefined : value,
																			})
																		}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
																<div className="fb-setting-lineheight-wrapper">
																	<div className="fb-setting-lineheight-header">
																		<div className="fb-setting-lineheight-label">
																			<span>
																				{__("Line Height", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup className="fb-setting-lineheight-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									Heading_Line_Height_units:
																										item.value,
																								})
																							}
																							className={`fb-setting-lineheight-units-switcher ${
																								Heading_Line_Height_units ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Line_Height}
																		onChange={(value) =>
																			setAttributes({
																				Heading_Line_Height:
																					value === 1 ? undefined : value,
																			})
																		}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											{/*Color*/}
											<BaseControl
												label={__("Text Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	SubHeadingColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																SubHeadingColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{SubHeadingColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={SubHeadingColor}
																			onChange={(value) =>
																				setAttributes({
																					SubHeadingColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={SubHeadingColor}
																			onChange={(value) =>
																				setAttributes({
																					SubHeadingColor: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{SubHeadingColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={SubHeadingHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					SubHeadingHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={SubHeadingHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					SubHeadingHoverColor: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}
											{/*Spacing*/}
											<Heading>Spacing</Heading>
											{/* Padding */}
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Padding", "frontis-block")}
															device={deviceType}
															deviceHandler={handleDescPaddingDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				SubHeadingPaddingUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			SubHeadingPaddingUnits === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? SubHeadingDesktopPadding.top
																		: deviceType === "Tablet"
																		? SubHeadingTabPadding.top
																		: SubHeadingMobilePadding.top
																}
																onChange={(e) =>
																	handleDescPaddingInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? SubHeadingDesktopPadding.right
																		: deviceType === "Tablet"
																		? SubHeadingTabPadding.right
																		: SubHeadingMobilePadding.right
																}
																onChange={(e) =>
																	handleDescPaddingInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? SubHeadingDesktopPadding.bottom
																		: deviceType === "Tablet"
																		? SubHeadingTabPadding.bottom
																		: SubHeadingMobilePadding.bottom
																}
																onChange={(e) =>
																	handleDescPaddingInputChange(e, "bottom")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? SubHeadingDesktopPadding.left
																		: deviceType === "Tablet"
																		? SubHeadingTabPadding.left
																		: SubHeadingMobilePadding.left
																}
																onChange={(e) =>
																	handleDescPaddingInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	paddingLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${paddingLink ? "is-checked" : ""}`}
																onClick={handleDescPaddingLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
											{/* Margin */}
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Margin", "frontis-block")}
															device={deviceType}
															deviceHandler={handleDescMarginDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				descMarginUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			descMarginUnits === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? descDesktopMargin.top
																		: deviceType === "Tablet"
																		? descTabMargin.top
																		: descMobileMargin.top
																}
																onChange={(e) =>
																	handleDescMarginInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? descDesktopMargin.right
																		: deviceType === "Tablet"
																		? descTabMargin.right
																		: descMobileMargin.right
																}
																onChange={(e) =>
																	handleDescMarginInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? descDesktopMargin.bottom
																		: deviceType === "Tablet"
																		? descTabMargin.bottom
																		: descMobileMargin.bottom
																}
																onChange={(e) =>
																	handleDescMarginInputChange(e, "bottom")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? descDesktopMargin.left
																		: deviceType === "Tablet"
																		? descTabMargin.left
																		: descMobileMargin.left
																}
																onChange={(e) =>
																	handleDescMarginInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	descMarginLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${descMarginLink ? "is-checked" : ""}`}
																onClick={handleDescMarginLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>
										{/*Button One Style*/}
										<PanelBody
											title={__("Button One", "frontis-block")}
											className="fb-cta-button-setting-wrapper"
											initialOpen={false}
										>
											<BaseControl
												label={__("Typography", "frontis-block")}
												className="fb-setting-typography"
											>
												<Dropdown
													className="fb-setting-typography-icon-dropdown"
													contentClassName="fb-setting-typography-dropdown-content"
													popoverProps={{ placement: "bottom-start" }}
													renderToggle={({ isOpen, onToggle }) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__(
																"Toggle Typography Settings",
																"frontis-block",
															)}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon
																icon="edit"
																className="fb-setting-typography-icon"
															/>
														</Button>
													)}
													renderContent={() => (
														<div className="fb-setting-typography-popup">
															<BaseControl className="fb-setting-typography-popup-inner">
																<div className="fb-setting-fontfamily-wrapper">
																	<SelectControl
																		label={__("Font Family", "frontis-block")}
																		options={FONT_FAMILYS}
																		value={Heading_Font_Family}
																		onChange={(value) =>
																			setAttributes({ buttonFontFamily: value })
																		}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>
																				{__("Font Size", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup className="fb-setting-fontsize-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									buttonFontSizeUnits:
																										item.value,
																								})
																							}
																							className={`fb-setting-fontsize-units-switcher ${
																								buttonFontSizeUnits ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={Heading_Font_Size}
																			onChange={(value) =>
																				setAttributes({ buttonFontSize: value })
																			}
																			min={1}
																			max={200}
																			allowReset
																			resetFallbackValue={undefined}
																		/>
																	</div>
																</div>
																<div className="fb-setting-fontweight-wrapper">
																	<SelectControl
																		label={__("Font Weight", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "700",
																			},
																			{
																				label: __("100", "frontis-block"),
																				value: "100",
																			},
																			{
																				label: __("200", "frontis-block"),
																				value: "200",
																			},
																			{
																				label: __("300", "frontis-block"),
																				value: "300",
																			},
																			{
																				label: __("400", "frontis-block"),
																				value: "400",
																			},
																			{
																				label: __("500", "frontis-block"),
																				value: "500",
																			},
																			{
																				label: __("600", "frontis-block"),
																				value: "600",
																			},
																			{
																				label: __("700", "frontis-block"),
																				value: "700",
																			},
																			{
																				label: __("800", "frontis-block"),
																				value: "800",
																			},
																			{
																				label: __("900", "frontis-block"),
																				value: "900",
																			},
																		]}
																		value={buttonFontWeight}
																		onChange={(value) =>
																			setAttributes({ buttonFontWeight: value })
																		}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "normal",
																			},
																			{
																				label: __("Normal", "frontis-block"),
																				value: "normal",
																			},
																			{
																				label: __("Italic", "frontis-block"),
																				value: "italic",
																			},
																			{
																				label: __("Oblique", "frontis-block"),
																				value: "oblique",
																			},
																		]}
																		value={buttonFontStyle}
																		onChange={(value) =>
																			setAttributes({ buttonFontStyle: value })
																		}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__(
																			"Text Transform",
																			"frontis-block",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __(
																					"Capitalize",
																					"frontis-block",
																				),
																				value: "capitalize",
																			},
																			{
																				label: __("Uppercase", "frontis-block"),
																				value: "uppercase",
																			},
																			{
																				label: __("Lowercase", "frontis-block"),
																				value: "lowercase",
																			},
																		]}
																		value={buttonTextTransform}
																		onChange={(value) =>
																			setAttributes({
																				buttonTextTransform: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__(
																			"Text Decoration",
																			"frontis-block",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none",
																			},
																			{
																				label: __("Underline", "frontis-block"),
																				value: "underline",
																			},
																			{
																				label: __("Overline", "frontis-block"),
																				value: "overline",
																			},
																			{
																				label: __(
																					"Line Through",
																					"frontis-block",
																				),
																				value: "line-through",
																			},
																		]}
																		value={buttonTextDecoration}
																		onChange={(value) =>
																			setAttributes({
																				buttonTextDecoration: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>
																				{__("Letter Spacing", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup className="fb-setting-letterspacing-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									buttonLetterSpacingUnits:
																										item.value,
																								})
																							}
																							className={`fb-setting-letterspacing-units-switcher ${
																								buttonLetterSpacingUnits ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={buttonLetterSpacing}
																		onChange={(value) =>
																			setAttributes({
																				buttonLetterSpacing:
																					value === 0 ? undefined : value,
																			})
																		}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
																<div className="fb-setting-lineheight-wrapper">
																	<div className="fb-setting-lineheight-header">
																		<div className="fb-setting-lineheight-label">
																			<span>
																				{__("Line Height", "frontis-block")}
																			</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup className="fb-setting-lineheight-units-wrap">
																				{separator_UNIT_TYPES.map(
																					(item, key) => (
																						<Button
																							key={key}
																							onClick={() =>
																								setAttributes({
																									buttonLineHeightUnits:
																										item.value,
																								})
																							}
																							className={`fb-setting-lineheight-units-switcher ${
																								buttonLineHeightUnits ===
																								item.value
																									? "active"
																									: ""
																							}`}
																						>
																							{item.label}
																						</Button>
																					),
																				)}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={buttonLineHeight}
																		onChange={(value) =>
																			setAttributes({
																				buttonLineHeight:
																					value === 1 ? undefined : value,
																			})
																		}
																		min={1}
																		max={100}
																		step={1}
																		allowReset
																		resetFallbackValue={undefined}
																	/>
																</div>
															</BaseControl>
														</div>
													)}
												/>
											</BaseControl>
											{/* Start Text Color*/}
											<BaseControl
												label={__("Text Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	buttonColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																buttonColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{buttonColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={buttonTextColor}
																			onChange={(value) =>
																				setAttributes({
																					buttonTextColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={buttonTextColor}
																			onChange={(value) =>
																				setAttributes({
																					buttonTextColor: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{buttonColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={buttonTextHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					buttonTextHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={buttonTextHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					buttonTextHoverColor: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}
											{/* Start Button Bg Color*/}
											<BaseControl
												label={__("Background Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	buttonBgColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																buttonBgColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{buttonColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={buttonBgColor}
																			onChange={(value) =>
																				setAttributes({ buttonBgColor: value })
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={buttonBgColor}
																			onChange={(value) =>
																				setAttributes({ buttonBgColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{buttonColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={buttonBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					buttonBgHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={buttonBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					buttonBgHoverColor: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}
											{/* Button Icon color */}
											{buttonIconSwitcher && (
												<>
													{/* Start Button Bg Color*/}
													<BaseControl
														label={__("Icon Color", "frontis-block")}
														className="fb-setting-color-panel-wrapper"
													>
														<ButtonGroup className="fb-setting-color-panel-btn">
															{NORMAL_HOVER.map((item, key) => (
																<Button
																	key={key}
																	onClick={() =>
																		setAttributes({
																			btnIconColorSwitcher: item.value,
																		})
																	}
																	className={`fb-setting-color-panel-btn-switchr ${
																		btnIconColorSwitcher === item.value
																			? "active"
																			: ""
																	}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>

													{btnIconColorSwitcher === "normal" && (
														<BaseControl
															label={__("Nomal Color", "frontis-block")}
															className="fb-setting-color-setting-wrapper"
														>
															<Dropdown
																className="fb-setting-color-setting-icon-dropdown"
																contentClassName="fb-setting-color-setting-icon-dropdown-content"
																popoverProps={{ placement: "bottom-start" }}
																renderToggle={({ isOpen, onToggle }) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		aria-label={__(
																			"Toggle Typography Settings",
																			"frontis-block",
																		)}
																		className="fb-setting-color-setting-icon-btn"
																	>
																		<Dashicon
																			icon="color-picker"
																			className="fb-setting-color-setting-icon"
																		/>
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-setting-color-setting-icon-popup">
																		<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																			<div className="fb-setting-normal-color">
																				<ColorPicker
																					color={btnIconColor}
																					onChange={(value) =>
																						setAttributes({
																							btnIconColor: value,
																						})
																					}
																					enableAlpha={true}
																				/>
																				<div className="fb-setting-color-label">
																					{__(
																						"Default Colors",
																						"frontis-block",
																					)}
																				</div>
																				<ColorPalette
																					colors={[
																						{ color: "#F72585" },
																						{ color: "#7209B7" },
																						{ color: "#3A0CA3" },
																						{ color: "#4361EE" },
																						{ color: "#4CC9F0" },
																					]}
																					disableCustomColors={true}
																					value={btnIconColor}
																					onChange={(value) =>
																						setAttributes({
																							btnIconColor: value,
																						})
																					}
																				/>
																			</div>
																		</BaseControl>
																	</div>
																)}
															/>
														</BaseControl>
													)}

													{btnIconColorSwitcher === "hover" && (
														<BaseControl
															label={__("Hover Color", "frontis-block")}
															className="fb-setting-color-setting-wrapper"
														>
															<Dropdown
																className="fb-setting-color-setting-icon-dropdown"
																contentClassName="fb-setting-color-setting-icon-dropdown-content"
																popoverProps={{ placement: "bottom-start" }}
																renderToggle={({ isOpen, onToggle }) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		aria-label={__(
																			"Toggle Typography Settings",
																			"frontis-block",
																		)}
																		className="fb-setting-color-setting-icon-btn"
																	>
																		<Dashicon
																			icon="color-picker"
																			className="fb-setting-color-setting-icon"
																		/>
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-setting-color-setting-icon-popup">
																		<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																			<div className="fb-setting-hover-color">
																				<ColorPicker
																					color={btnIconHoverColor}
																					onChange={(value) =>
																						setAttributes({
																							btnIconHoverColor: value,
																						})
																					}
																					enableAlpha={true}
																				/>
																				<div className="fb-setting-hover-color-label">
																					{__(
																						"Default Colors",
																						"frontis-block",
																					)}
																				</div>
																				<ColorPalette
																					colors={[
																						{ color: "#F72585" },
																						{ color: "#7209B7" },
																						{ color: "#3A0CA3" },
																						{ color: "#4361EE" },
																						{ color: "#4CC9F0" },
																					]}
																					disableCustomColors={true}
																					value={btnIconHoverColor}
																					onChange={(value) =>
																						setAttributes({
																							btnIconHoverColor: value,
																						})
																					}
																				/>
																			</div>
																		</BaseControl>
																	</div>
																)}
															/>
														</BaseControl>
													)}
												</>
											)}
											{/*Spacing*/}
											<Heading>Spacing</Heading>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Padding", "frontis-block")}
															device={deviceType}
															deviceHandler={handleButtonPaddingDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoButtonPaddingUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoButtonPaddingUnits === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopPadding.top
																		: deviceType === "Tablet"
																		? infoButtonTabPadding.top
																		: infoButtonMobilePadding.top
																}
																onChange={(e) =>
																	handleButtonPaddingInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopPadding.right
																		: deviceType === "Tablet"
																		? infoButtonTabPadding.right
																		: infoButtonMobilePadding.right
																}
																onChange={(e) =>
																	handleButtonPaddingInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopPadding.bottom
																		: deviceType === "Tablet"
																		? infoButtonTabPadding.bottom
																		: infoButtonMobilePadding.bottom
																}
																onChange={(e) =>
																	handleButtonPaddingInputChange(e, "bottom")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopPadding.left
																		: deviceType === "Tablet"
																		? infoButtonTabPadding.left
																		: infoButtonMobilePadding.left
																}
																onChange={(e) =>
																	handleButtonPaddingInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	paddingLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${paddingLink ? "is-checked" : ""}`}
																onClick={handleButtonPaddingLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Margin", "frontis-block")}
															device={deviceType}
															deviceHandler={handleButtonMarginDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoButtonMarginUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoButtonMarginUnits === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopMargin.top
																		: deviceType === "Tablet"
																		? infoButtonTabMargin.top
																		: infoButtonMobileMargin.top
																}
																onChange={(e) =>
																	handleButtonMarginInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopMargin.right
																		: deviceType === "Tablet"
																		? infoButtonTabMargin.right
																		: infoButtonMobileMargin.right
																}
																onChange={(e) =>
																	handleButtonMarginInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopMargin.bottom
																		: deviceType === "Tablet"
																		? infoButtonTabMargin.bottom
																		: infoButtonMobileMargin.bottom
																}
																onChange={(e) =>
																	handleButtonMarginInputChange(e, "bottom")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopMargin.left
																		: deviceType === "Tablet"
																		? infoButtonTabMargin.left
																		: infoButtonMobileMargin.left
																}
																onChange={(e) =>
																	handleButtonMarginInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	infoButtonMarginLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${infoButtonMarginLink ? "is-checked" : ""}`}
																onClick={handleButtonMarginLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
											{/* Border Width */}
											{/*Border*/}
											<Heading>Border</Heading>
											<SelectControl
												label={__("Border Style", "frontis-block")}
												value={infoButtonBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ infoButtonBorder: value })
												}
											/>

											<BaseControl
												label={__("Border Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	infoButtonBorderColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																infoButtonBorderColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{infoButtonBorderColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={infoButtonBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					infoButtonBorderColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={infoButtonBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					infoButtonBorderColor: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{Heading_Border_Color_Switcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{ placement: "bottom-start" }}
														renderToggle={({ isOpen, onToggle }) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__(
																	"Toggle Typography Settings",
																	"frontis-block",
																)}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon
																	icon="color-picker"
																	className="fb-setting-color-setting-icon"
																/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={infoButtonHoverBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					infoButtonHoverBorderColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-block")}
																		</div>
																		<ColorPalette
																			colors={[
																				{ color: "#F72585" },
																				{ color: "#7209B7" },
																				{ color: "#3A0CA3" },
																				{ color: "#4361EE" },
																				{ color: "#4CC9F0" },
																			]}
																			disableCustomColors={true}
																			value={infoButtonHoverBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					infoButtonHoverBorderColor: value,
																				})
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Border Width */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Border", "frontis-block")}
															device={deviceType}
															deviceHandler={handleButtonBorderWidthDeviceClick}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoButtonBorderUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoButtonBorderUnits === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.top
																		: deviceType === "Tablet"
																		? infoButtonTabBorderWidth.top
																		: infoButtonMobileBorderWidth.top
																}
																onChange={(e) =>
																	handleButtonBorderWidthInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.right
																		: deviceType === "Tablet"
																		? infoButtonTabBorderWidth.right
																		: infoButtonMobileBorderWidth.right
																}
																onChange={(e) =>
																	handleButtonBorderWidthInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.bottom
																		: deviceType === "Tablet"
																		? infoButtonTabBorderWidth.bottom
																		: infoButtonMobileBorderWidth.bottom
																}
																onChange={(e) =>
																	handleButtonBorderWidthInputChange(
																		e,
																		"bottom",
																	)
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.left
																		: deviceType === "Tablet"
																		? infoButtonTabBorderWidth.left
																		: infoButtonMobileBorderWidth.left
																}
																onChange={(e) =>
																	handleButtonBorderWidthInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	borderLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${borderLink ? "is-checked" : ""}`}
																onClick={handleButtonBorderWidthLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
											{/* Border radius Width */}
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Border Radius", "frontis-block")}
															device={deviceType}
															deviceHandler={
																handleButtonBorderRadiusWidthDeviceClick
															}
														/>

														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoBtnBorderradiusUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoBtnBorderradiusUnits === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Top", "frontis-block")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.top
																		: deviceType === "Tablet"
																		? infoBtnTabBorderradiusWidth.top
																		: infoBtnMobileBorderradiusWidth.top
																}
																onChange={(e) =>
																	handleButtonBorderRadiusWidthInputChange(
																		e,
																		"top",
																	)
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-block")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.right
																		: deviceType === "Tablet"
																		? infoBtnTabBorderradiusWidth.right
																		: infoBtnMobileBorderradiusWidth.right
																}
																onChange={(e) =>
																	handleButtonBorderRadiusWidthInputChange(
																		e,
																		"right",
																	)
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-block")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.bottom
																		: deviceType === "Tablet"
																		? infoBtnTabBorderradiusWidth.bottom
																		: infoBtnMobileBorderradiusWidth.bottom
																}
																onChange={(e) =>
																	handleButtonBorderRadiusWidthInputChange(
																		e,
																		"bottom",
																	)
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Left", "frontis-block")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.left
																		: deviceType === "Tablet"
																		? infoBtnTabBorderradiusWidth.left
																		: infoBtnMobileBorderradiusWidth.left
																}
																onChange={(e) =>
																	handleButtonBorderRadiusWidthInputChange(
																		e,
																		"left",
																	)
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	borderRadiusLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${borderRadiusLink ? "is-checked" : ""}`}
																onClick={
																	handleButtonBorderRadiusWidthLinkToggle
																}
															></span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>
										{/* Button Two Style */}
										<PanelBody
											title={__("Button Two", "frontis-blocks")}
											initialOpen={true}
										>
											<FB_TypographyControl
												fontFamily={buttonTwoFontFamily}
												onChangeFontFamily={(value) =>
													setAttributes({ buttonTwoFontFamily: value })
												}
												fontSize={buttonTwoFontSize}
												onChangeFontSize={(value) =>
													setAttributes({ buttonTwoFontSize: value })
												}
												fontSizeUnits={buttonTwoFontSizeUnits}
												onChangeFontSizeUnit={(value) =>
													setAttributes({ buttonTwoFontSizeUnits: value })
												}
												fontWeight={buttonTwoFontWeight}
												onChangeFontWeight={(value) =>
													setAttributes({ buttonTwoFontWeight: value })
												}
												fontStyle={buttonTwoFontStyle}
												onChangeFontStyle={(value) =>
													setAttributes({ buttonTwoFontStyle: value })
												}
												textTransform={buttonTwoTextTransform}
												onChangeTextTransform={(value) =>
													setAttributes({ buttonTwoTextTransform: value })
												}
												textDecoration={buttonTwoTextDecoration}
												onChangeTextDecoration={(value) =>
													setAttributes({ buttonTwoTextDecoration: value })
												}
												letterSpacing={buttonTwoLetterSpacing}
												onChangeLetterSpacing={(value) =>
													setAttributes({ buttonTwoLetterSpacing: value })
												}
												letterSpacingUnits={buttonTwoLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) =>
													setAttributes({ buttonTwoLetterSpacingUnits: value })
												}
												lineHeight={buttonTwoLineHeight}
												onChangeLineHeight={(value) =>
													setAttributes({ buttonTwoLineHeight: value })
												}
												lineHeightUnits={buttonTwoLineHeightUnits}
												onChangeLineHeightUnit={(value) =>
													setAttributes({ buttonTwoLineHeightUnits: value })
												}
												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Text Color", "frontis-blocks")}
												globalColorSwitcher={buttonTwoColorSwitcher}
												globalColor={buttonTwoTextColor}
												globalHoverColor={buttonTwoTextHoverColor}
												handleColorSwitcherChange={(value) =>
													setAttributes({ buttonTwoColorSwitcher: value })
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ buttonTwoTextColor: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({ buttonTwoTextHoverColor: value })
												}
											/>
											<FB_Color
												label={__("Background Color", "frontis-blocks")}
												globalColorSwitcher={buttonTwoBgColorSwitcher}
												globalColor={buttonTwoBgColor}
												globalHoverColor={buttonTwoBgHoverColor}
												handleColorSwitcherChange={(value) =>
													setAttributes({ buttonTwoBgColorSwitcher: value })
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ buttonTwoBgColor: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({ buttonTwoBgHoverColor: value })
												}
											/>
											<FB_Color
												label={__("Icon Color", "frontis-blocks")}
												globalColorSwitcher={btnTwoIconColorSwitcher}
												globalColor={btnTwoIconColor}
												globalHoverColor={btnTwoIconHoverColor}
												handleColorSwitcherChange={(value) =>
													setAttributes({ btnTwoIconColorSwitcher: value })
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ btnTwoIconColor: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({ btnTwoIconHoverColor: value })
												}
											/>

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonTwoPaddingUnitsHandler}
												spacingUnits={btnTwoPaddingUnits}
												spacingDesktop={btnTwoDesktopPadding}
												spacingTablet={btnTwoTabPadding}
												spacingMobile={btnTwoMobilePadding}
												handleSpacingUnitHandler={
													handleButtonTwoPaddingUnitChange
												}
												spacingCombineBtn={btnTwoPaddingLink}
												spacingCombineBtnHandler={
													handleButtonTwoPaddingCombineBtn
												}
												setAttributes={setAttributes}
											/>
											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={btnTwoMarginUnitsHandler}
												spacingUnits={btnTwoMarginUnits}
												spacingDesktop={btnTwoDesktopMargin}
												spacingTablet={btnTwoTabMargin}
												spacingMobile={btnTwoMobileMargin}
												handleSpacingUnitHandler={btnTwoMarginUnitsChange}
												spacingCombineBtn={btnTwoMarginLink}
												spacingCombineBtnHandler={btnTwoMarginLinkBtn}
												setAttributes={setAttributes}
											/>
											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={btnTwoBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ btnTwoBorder: value })
												}
											/>
											<FB_Color
												label={__("Border Color", "frontis-blocks")}
												globalColorSwitcher={btnTwoBorderColorSwitcher}
												globalColor={btnTwoBorderColor}
												globalHoverColor={btnTwoHoverBorderColor}
												handleColorSwitcherChange={(value) =>
													setAttributes({ btnTwoBorderColorSwitcher: value })
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ btnTwoBorderColor: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({ btnTwoHoverBorderColor: value })
												}
											/>
											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={btnTwoBorderUnitsHandler}
												spacingUnits={btnTwoBorderUnits}
												spacingDesktop={btnTwoDesktopBorder}
												spacingTablet={btnTwoTabBorder}
												spacingMobile={btnTwoMobileBorder}
												handleSpacingUnitHandler={btnTwoBorderUnitsChange}
												spacingCombineBtn={btnTwoBorderLink}
												spacingCombineBtnHandler={btnTwoBorderLinkBtn}
												setAttributes={setAttributes}
											/>
											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={btnTwoBorderRadiusUnitsHandler}
												spacingUnits={btnTwoBorderRadiusUnits}
												spacingDesktop={btnTwoDesktopBorderRadius}
												spacingTablet={btnTwoTabBorderRadius}
												spacingMobile={btnTwoMobileBorderRadius}
												handleSpacingUnitHandler={btnTwoBorderRadiusUnitsChange}
												spacingCombineBtn={btnTwoBorderRadiusLink}
												spacingCombineBtnHandler={btnTwoBorderRadiusLinkBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>
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
													<RangeControl
														value={globalZIndex}
														onChange={(value) =>
															setAttributes({
																globalZIndex: value === 0 ? undefined : value,
															})
														}
														min={1}
														max={10000}
														step={1}
														allowReset
														resetFallbackValue={100}
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

												<PanelBody title="Background" initialOpen={false}>
													<FB_BackgroundColorControl
														bgColorSwitcher={testBgColorSwitcher}
														setBgColorSwitcher={(value) =>
															setAttributes({ testBgColorSwitcher: value })
														}
														normalBackgroundType={testBackgroundType}
														setNormalBackgroundType={(value) =>
															setAttributes({ testBackgroundType: value })
														}
														normalClassicColor={testClassicColor}
														setNormalClassicColor={(value) =>
															setAttributes({ testClassicColor: value })
														}
														normalGradientColor={testGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ testGradientColor: value })
														}
														normalCustomGradientSwitcher={
															testCustomGradientSwitcher
														}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({
																testCustomGradientSwitcher: value,
															})
														}
														normalCustomGradientInputValue={
															testCustomGradientInputValue
														}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({
																testCustomGradientInputValue: value,
															})
														}
														normalBackgroundImageUrl={testBackgroundImageUrl}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({ testBackgroundImageUrl: value })
														}
														normalBackgroundImageAlt={testBackgroundImageAlt}
														setNormalBackgroundImageAlt={(value) =>
															setAttributes({ testBackgroundImageAlt: value })
														}
														normalBackgroundImageID={testBackgroundImageID}
														setNormalBackgroundImageID={(value) =>
															setAttributes({ testBackgroundImageID: value })
														}
														normalBackgroundImagePosition={
															testBackgroundImagePosition
														}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({
																testBackgroundImagePosition: value,
															})
														}
														normalBackgroundImageAttachment={
															testBackgroundImageAttachment
														}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({
																testBackgroundImageAttachment: value,
															})
														}
														normalBackgroundImageRepeat={
															testBackgroundImageRepeat
														}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({
																testBackgroundImageRepeat: value,
															})
														}
														normalBackgroundImageSize={testBackgroundImageSize}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({ testBackgroundImageSize: value })
														}
														hoverBackgroundType={hoverBackgroundType}
														setHoverBackgroundType={(value) =>
															setAttributes({ hoverBackgroundType: value })
														}
														hoverClassicColor={hoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ hoverClassicColor: value })
														}
														hoverGradientColor={hoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ hoverGradientColor: value })
														}
														hoverCustomGradientSwitcher={
															hoverCustomGradientSwitcher
														}
														setHoverCustomGradientSwitcher={(value) =>
															setAttributes({
																hoverCustomGradientSwitcher: value,
															})
														}
														hoverCustomGradientInputValue={
															hoverCustomGradientInputValue
														}
														setHoverCustomGradientInputValue={(value) =>
															setAttributes({
																hoverCustomGradientInputValue: value,
															})
														}
														hoverBackgroundImageUrl={hoverBackgroundImageUrl}
														setHoverBackgroundImageUrl={(value) =>
															setAttributes({ hoverBackgroundImageUrl: value })
														}
														hoverBackgroundImageAlt={hoverBackgroundImageAlt}
														setHoverBackgroundImageAlt={(value) =>
															setAttributes({ hoverBackgroundImageAlt: value })
														}
														hoverBackgroundImageID={hoverBackgroundImageID}
														setHoverBackgroundImageID={(value) =>
															setAttributes({ hoverBackgroundImageID: value })
														}
														hoverBackgroundImagePosition={
															hoverBackgroundImagePosition
														}
														setHoverBackgroundImagePosition={(value) =>
															setAttributes({
																hoverBackgroundImagePosition: value,
															})
														}
														hoverBackgroundImageAttachment={
															hoverBackgroundImageAttachment
														}
														setHoverBackgroundImageAttachment={(value) =>
															setAttributes({
																hoverBackgroundImageAttachment: value,
															})
														}
														hoverBackgroundImageRepeat={
															hoverBackgroundImageRepeat
														}
														setHoverBackgroundImageRepeat={(value) =>
															setAttributes({
																hoverBackgroundImageRepeat: value,
															})
														}
														hoverBackgroundImageSize={hoverBackgroundImageSize}
														setHoverBackgroundImageSize={(value) =>
															setAttributes({ hoverBackgroundImageSize: value })
														}
													/>
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

													<FB_Color
														label={__("Border Color", "frontis-blocks")}
														globalColorSwitcher={globalBorderColorSwitcher}
														globalColor={globalBorderColor}
														globalHoverColor={globalBorderHoverColor}
														handleColorSwitcherChange={
															handleGlobalBorderColorSwitcherChange
														}
														handleGlobalColorChange={
															handleGlobalBorderColorChange
														}
														handleGlobalHoverColorChange={
															handleGlobalBorderHoverColorChange
														}
													/>

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
													<FB_BoxShadowControl
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
