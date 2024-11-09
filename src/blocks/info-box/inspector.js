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

import FB_Spacing from "@Components/spacing";
import FB_Color from "@Components/color";
import FB_BackgroundColorControl from "@Components/background-color-control";
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
		SubHeadingLetterSpacing,
		SubHeadingLetterSpacingUnits,
		SubHeadingLineHeight,
		SubHeadingLineHeightUnits,
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
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-info-box-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();

	// Info media remove handler

	const removeMediaBg = () => {
		setAttributes({
			mediaBgId: "",
			mediaBgTypeImage: "",
		});
	};

	const iconHandler = (iconName) => {
		setAttributes({ icon: iconName });
	};
	const buttonIconHandler = (iconName) => {
		setAttributes({ btnIcon: iconName });
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

	const fbInfoBoxStyle = useMemo(
		() => `
		  .fb-info-box-content-wrapper.${blockID} {
			  ${globalBgColor !== undefined ? `background-color: ${globalBgColor};` : ""}
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
			  transition: all .3s ease-in-out;
		  }
	  
		  .fb-info-box-content-wrapper.${blockID}:hover {
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
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-info-box-content-wrapper-inner.${blockID} {
				  ${
						infoBoxTabPadding.top
							? `padding-top: ${infoBoxTabPadding.top}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxTabPadding.right
							? `padding-right: ${infoBoxTabPadding.right}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxTabPadding.bottom
							? `padding-bottom: ${infoBoxTabPadding.bottom}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxTabPadding.left
							? `padding-left: ${infoBoxTabPadding.left}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxTabMargin.top
							? `margin-top: ${infoBoxTabMargin.top}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxTabMargin.right
							? `margin-right: ${infoBoxTabMargin.right}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxTabMargin.bottom
							? `margin-bottom: ${infoBoxTabMargin.bottom}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxTabMargin.left
							? `margin-left: ${infoBoxTabMargin.left}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderWidth.top
							? `border-top-width: ${infoBoxTabBorderWidth.top}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderWidth.right
							? `border-right-width: ${infoBoxTabBorderWidth.right}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderWidth.bottom
							? `border-bottom-width: ${infoBoxTabBorderWidth.bottom}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderWidth.left
							? `border-left-width: ${infoBoxTabBorderWidth.left}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderRadiusWidth.top
							? `border-top-left-radius: ${infoBoxTabBorderRadiusWidth.top}${infoBoxBorderRadiusUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderRadiusWidth.right
							? `border-top-right-radius: ${infoBoxTabBorderRadiusWidth.right}${infoBoxBorderRadiusUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderRadiusWidth.bottom
							? `border-bottom-left-radius: ${infoBoxTabBorderRadiusWidth.bottom}${infoBoxBorderRadiusUnits};`
							: ""
					}
				  ${
						infoBoxTabBorderRadiusWidth.left
							? `border-bottom-right-radius: ${infoBoxTabBorderRadiusWidth.left}${infoBoxBorderRadiusUnits};`
							: ""
					}
			  }
		  }
	  
		  @media only screen and (max-width: 767px) {
			  .fb-info-box-content-wrapper-inner.${blockID} {
				  ${
						infoBoxMobilePadding.top
							? `padding-top: ${infoBoxMobilePadding.top}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxMobilePadding.right
							? `padding-right: ${infoBoxMobilePadding.right}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxMobilePadding.bottom
							? `padding-bottom: ${infoBoxMobilePadding.bottom}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxMobilePadding.left
							? `padding-left: ${infoBoxMobilePadding.left}${infoBoxPaddingUnits};`
							: ""
					}
				  ${
						infoBoxMobileMargin.top
							? `margin-top: ${infoBoxMobileMargin.top}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxMobileMargin.right
							? `margin-right: ${infoBoxMobileMargin.right}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxMobileMargin.bottom
							? `margin-bottom: ${infoBoxMobileMargin.bottom}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxMobileMargin.left
							? `margin-left: ${infoBoxMobileMargin.left}${infoBoxMarginUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderWidth.top
							? `border-top-width: ${infoBoxMobileBorderWidth.top}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderWidth.right
							? `border-right-width: ${infoBoxMobileBorderWidth.right}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderWidth.bottom
							? `border-bottom-width: ${infoBoxMobileBorderWidth.bottom}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderWidth.left
							? `border-left-width: ${infoBoxMobileBorderWidth.left}${infoBoxBorderUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderRadiusWidth.top
							? `border-top-left-radius: ${infoBoxMobileBorderRadiusWidth.top}${infoBoxBorderRadiusUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderRadiusWidth.right
							? `border-top-right-radius: ${infoBoxMobileBorderRadiusWidth.right}${infoBoxBorderRadiusUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderRadiusWidth.bottom
							? `border-bottom-left-radius: ${infoBoxMobileBorderRadiusWidth.bottom}${infoBoxBorderRadiusUnits};`
							: ""
					}
				  ${
						infoBoxMobileBorderRadiusWidth.left
							? `border-bottom-right-radius: ${infoBoxMobileBorderRadiusWidth.left}${infoBoxBorderRadiusUnits};`
							: ""
					}
			  }
		  }
	  
		  .fb-info-box-content-wrapper.${blockID} .fb-heading {
			  ${Heading_Color !== undefined ? `color: ${Heading_Color};` : ""}
			  ${
					Heading_Background_Color !== undefined
						? `background-color: ${Heading_Background_Color};`
						: ""
				}
			  font-family: ${
					Heading_Font_Family !== "default"
						? Heading_Font_Family
						: Heading_Font_Family
				};
			  ${
					Heading_Font_Size !== undefined
						? `font-size: ${Heading_Font_Size}${Heading_Font_size_units};`
						: ""
				}
			  font-weight: ${Heading_Font_Weight};
			  font-style: ${Heading_Font_Style};
			  text-transform: ${Heading_Text_Transform};
			  text-decoration: ${Heading_Text_Decoration};
			  ${
					Heading_Letter_Spacing !== undefined
						? `letter-spacing: ${Heading_Letter_Spacing}${Heading_Letter_Spacing_units};`
						: ""
				}
			  ${
					Heading_Line_Height !== undefined
						? `line-height: ${Heading_Line_Height}${Heading_Line_Height_units};`
						: ""
				}
			  transition: all .3s ease-in-out;
			  padding: ${padding};
			  margin: ${margin};
			  border: ${Heading_Border};
			  ${
					Heading_Border_Color !== undefined
						? `border-color: ${Heading_Border_Color};`
						: ""
				}
		  }
	  
		  .fb-info-box-content-wrapper.${blockID}:hover .fb-heading {
			  ${Heading_Hover_Color !== undefined ? `color: ${Heading_Hover_Color};` : ""}
			  ${
					Heading_Border_Hover_Color !== undefined
						? `border-color: ${Heading_Border_Hover_Color};`
						: ""
				}
		  }
	  
		  @media only screen and (max-width: 1024px) {
			  .fb-info-box-content-wrapper.${blockID} .fb-heading {
				  ${
						Heading_Tab_padding.top
							? `padding-top: ${Heading_Tab_padding.top}${Heading_padding_units};`
							: ""
					}
				  ${
						Heading_Tab_padding.right
							? `padding-right: ${Heading_Tab_padding.right}${Heading_padding_units};`
							: ""
					}
				  ${
						Heading_Tab_padding.bottom
							? `padding-bottom: ${Heading_Tab_padding.bottom}${Heading_padding_units};`
							: ""
					}
				  ${
						Heading_Tab_padding.left
							? `padding-left: ${Heading_Tab_padding.left}${Heading_padding_units};`
							: ""
					}
				  ${
						Heading_Tab_Margin.top
							? `margin-top: ${Heading_Tab_Margin.top}${Heading_Margin_Units};`
							: ""
					}
				  ${
						Heading_Tab_Margin.right
							? `margin-right: ${Heading_Tab_Margin.right}${Heading_Margin_Units};`
							: ""
					}
				  ${
						Heading_Tab_Margin.bottom
							? `margin-bottom: ${Heading_Tab_Margin.bottom}${Heading_Margin_Units};`
							: ""
					}
				  ${
						Heading_Tab_Margin.left
							? `margin-left: ${Heading_Tab_Margin.left}${Heading_Margin_Units};`
							: ""
					}
				  ${
						Heading_Tab_Border_Width.top
							? `border-top-width: ${Heading_Tab_Border_Width.top}${Heading_Border_units};`
							: ""
					}
				  ${
						Heading_Tab_Border_Width.right
							? `border-right-width: ${Heading_Tab_Border_Width.right}${Heading_Border_units};`
							: ""
					}
				  ${
						Heading_Tab_Border_Width.bottom
							? `border-bottom-width: ${Heading_Tab_Border_Width.bottom}${Heading_Border_units};`
							: ""
					}
				  ${
						Heading_Tab_Border_Width.left
							? `border-left-width: ${Heading_Tab_Border_Width.left}${Heading_Border_units};`
							: ""
					}
				  ${
						Heading_Tab_Border_radius_Width.top
							? `border-top-left-radius: ${Heading_Tab_Border_radius_Width.top}${Heading_Border_radius_units};`
							: ""
					}
				  ${
						Heading_Tab_Border_radius_Width.right
							? `border-top-right-radius: ${Heading_Tab_Border_radius_Width.right}${Heading_Border_radius_units};`
							: ""
					}
				  ${
						Heading_Tab_Border_radius_Width.bottom
							? `border-bottom-left-radius: ${Heading_Tab_Border_radius_Width.bottom}${Heading_Border_radius_units};`
							: ""
					}
				  ${
						Heading_Tab_Border_radius_Width.left
							? `border-bottom-right-radius: ${Heading_Tab_Border_radius_Width.left}${Heading_Border_radius_units};`
							: ""
					}
			  }
		  }
		

    .fb-info-box-content-wrapper.${blockID} .fb-description {
        ${SubHeadingColor !== undefined ? `color: ${SubHeadingColor};` : ""}
        ${
					SubHeadingFontFamily !== "default"
						? `font-family: ${SubHeadingFontFamily};`
						: ""
				}
        ${
					SubHeadingFontSize !== undefined
						? `font-size: ${SubHeadingFontSize}${SubHeadingFontSizeUnits};`
						: ""
				}
        ${
					SubHeadingFontWeight !== undefined
						? `font-weight: ${SubHeadingFontWeight};`
						: ""
				}
        ${
					SubHeadingFontStyle !== undefined
						? `font-style: ${SubHeadingFontStyle};`
						: ""
				}
        ${
					SubHeadingTextTransform !== undefined
						? `text-transform: ${SubHeadingTextTransform};`
						: ""
				}
        ${
					SubHeadingTextDecoration !== undefined
						? `text-decoration: ${SubHeadingTextDecoration};`
						: ""
				}
				${
					SubHeadingLetterSpacing !== undefined
						? `letter-spacing: ${SubHeadingLetterSpacing}${SubHeadingLetterSpacingUnits};`
						: ""
				}
			  ${
					SubHeadingLineHeight !== undefined
						? `line-height: ${SubHeadingLineHeight}${SubHeadingLineHeightUnits};`
						: ""
				}
        ${descPadding !== undefined ? `padding: ${descPadding};` : ""}
        ${descMargin !== undefined ? `margin: ${descMargin};` : ""}
    }

    .fb-info-box-content-wrapper.${blockID}:hover .fb-description {
        ${
					SubHeadingHoverColor !== undefined
						? `color: ${SubHeadingHoverColor};`
						: ""
				}
    }

    @media only screen and (max-width: 1024px) {
        .fb-info-box-content-wrapper.${blockID} .fb-description {
            ${
							SubHeadingTabPadding.top !== undefined
								? `padding-top: ${SubHeadingTabPadding.top}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            ${
							SubHeadingTabPadding.right !== undefined
								? `padding-right: ${SubHeadingTabPadding.right}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            ${
							SubHeadingTabPadding.bottom !== undefined
								? `padding-bottom: ${SubHeadingTabPadding.bottom}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            ${
							SubHeadingTabPadding.left !== undefined
								? `padding-left: ${SubHeadingTabPadding.left}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            
            ${
							descTabMargin.top !== undefined
								? `margin-top: ${descTabMargin.top}${descMarginUnits} !important;`
								: ""
						}
            ${
							descTabMargin.right !== undefined
								? `margin-right: ${descTabMargin.right}${descMarginUnits} !important;`
								: ""
						}
            ${
							descTabMargin.bottom !== undefined
								? `margin-bottom: ${descTabMargin.bottom}${descMarginUnits} !important;`
								: ""
						}
            ${
							descTabMargin.left !== undefined
								? `margin-left: ${descTabMargin.left}${descMarginUnits} !important;`
								: ""
						}
        }
    }

    @media only screen and (max-width: 757px) {
        .fb-info-box-content-wrapper.${blockID} .fb-description {
            ${
							SubHeadingMobilePadding.top !== undefined
								? `padding-top: ${SubHeadingMobilePadding.top}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            ${
							SubHeadingMobilePadding.right !== undefined
								? `padding-right: ${SubHeadingMobilePadding.right}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            ${
							SubHeadingMobilePadding.bottom !== undefined
								? `padding-bottom: ${SubHeadingMobilePadding.bottom}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            ${
							SubHeadingMobilePadding.left !== undefined
								? `padding-left: ${SubHeadingMobilePadding.left}${SubHeadingPaddingUnits} !important;`
								: ""
						}
            
            ${
							descMobileMargin.top !== undefined
								? `margin-top: ${descMobileMargin.top}${descMarginUnits} !important;`
								: ""
						}
            ${
							descMobileMargin.right !== undefined
								? `margin-right: ${descMobileMargin.right}${descMarginUnits} !important;`
								: ""
						}
            ${
							descMobileMargin.bottom !== undefined
								? `margin-bottom: ${descMobileMargin.bottom}${descMarginUnits} !important;`
								: ""
						}
            ${
							descMobileMargin.left !== undefined
								? `margin-left: ${descMobileMargin.left}${descMarginUnits} !important;`
								: ""
						}
        }
    }
		.fb-info-box-content-wrapper.${blockID} .fb-info-btn-wrapper {
        ${buttonTextColor !== undefined ? `color: ${buttonTextColor};` : ""}
        ${
					buttonBgColor !== undefined
						? `background-color: ${buttonBgColor};`
						: ""
				}
        font-family: ${
					buttonFontFamily !== "default" ? buttonFontFamily : buttonFontFamily
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
        padding: ${buttonPadding};
        margin: ${buttonMargin};
        border: ${infoButtonBorder};
        border-width: ${buttonBorderWidth};
        border-radius: ${buttonBorderRadiusWidth};
    }

    .fb-info-box-content-wrapper.${blockID}:hover .fb-info-btn-wrapper {
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
        .fb-info-box-content-wrapper.${blockID} .fb-info-btn-wrapper {
            padding: ${infoButtonTabPadding.top}${infoButtonPaddingUnits} ${
							infoButtonTabPadding.right
						}${infoButtonPaddingUnits} ${
							infoButtonTabPadding.bottom
						}${infoButtonPaddingUnits} ${
							infoButtonTabPadding.left
						}${infoButtonPaddingUnits} !important;
            margin: ${infoButtonTabMargin.top}${infoButtonMarginUnits} ${
							infoButtonTabMargin.right
						}${infoButtonMarginUnits} ${
							infoButtonTabMargin.bottom
						}${infoButtonMarginUnits} ${
							infoButtonTabMargin.left
						}${infoButtonMarginUnits} !important;
            border-width: ${
							infoButtonTabBorderWidth.top
						}${infoButtonBorderUnits} ${
							infoButtonTabBorderWidth.right
						}${infoButtonBorderUnits} ${
							infoButtonTabBorderWidth.bottom
						}${infoButtonBorderUnits} ${
							infoButtonTabBorderWidth.left
						}${infoButtonBorderUnits} !important;
            border-radius: ${
							infoBtnTabBorderradiusWidth.top
						}${infoBtnBorderradiusUnits} ${
							infoBtnTabBorderradiusWidth.right
						}${infoBtnBorderradiusUnits} ${
							infoBtnTabBorderradiusWidth.bottom
						}${infoBtnBorderradiusUnits} ${
							infoBtnTabBorderradiusWidth.left
						}${infoBtnBorderradiusUnits} !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-info-box-content-wrapper.${blockID} .fb-info-btn-wrapper {
            padding: ${infoButtonMobilePadding.top}${infoButtonPaddingUnits} ${
							infoButtonMobilePadding.right
						}${infoButtonPaddingUnits} ${
							infoButtonMobilePadding.bottom
						}${infoButtonPaddingUnits} ${
							infoButtonMobilePadding.left
						}${infoButtonPaddingUnits} !important;
            margin: ${infoButtonMobileMargin.top}${infoButtonMarginUnits} ${
							infoButtonMobileMargin.right
						}${infoButtonMarginUnits} ${
							infoButtonMobileMargin.bottom
						}${infoButtonMarginUnits} ${
							infoButtonMobileMargin.left
						}${infoButtonMarginUnits} !important;
            border-width: ${
							infoButtonMobileBorderWidth.top
						}${infoButtonBorderUnits} ${
							infoButtonMobileBorderWidth.right
						}${infoButtonBorderUnits} ${
							infoButtonMobileBorderWidth.bottom
						}${infoButtonBorderUnits} ${
							infoButtonMobileBorderWidth.left
						}${infoButtonBorderUnits} !important;
            border-radius: ${
							infoBtnTabBorderradiusWidth.top
						}${infoBtnBorderradiusUnits} ${
							infoBtnTabBorderradiusWidth.right
						}${infoBtnBorderradiusUnits} ${
							infoBtnTabBorderradiusWidth.bottom
						}${infoBtnBorderradiusUnits} ${
							infoBtnTabBorderradiusWidth.left
						}${infoBtnBorderradiusUnits} !important;
        }
    }
		.fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper {
        width: ${mediaBgWidth.Desktop}${mediaBgWidthUnits.Desktop};
        height: ${mediaBgHeight.Desktop}${mediaBgHeightUnits.Desktop};
        ${
					mediaBackgroundType === "gradient"
						? `
            background: ${
							mediaCustomGradientSwitcher && mediaCustomGradientInputValue
								? mediaCustomGradientInputValue
								: mediaGradientColor
						};
        `
						: mediaBackgroundImageUrl && mediaBackgroundImageUrl !== "null"
						? `
            ${
							mediaBackgroundImageUrl
								? `background-image: url(${mediaBackgroundImageUrl});`
								: ""
						}
            ${
							mediaBackgroundImagePosition
								? `background-position: ${mediaBackgroundImagePosition};`
								: ""
						}
            ${
							mediaBackgroundImageAttachment
								? `background-attachment: ${mediaBackgroundImageAttachment};`
								: ""
						}
            ${
							mediaBackgroundImageRepeat
								? `background-repeat: ${mediaBackgroundImageRepeat};`
								: ""
						}
            ${
							mediaBackgroundImageSize
								? `background-size: ${mediaBackgroundImageSize};`
								: ""
						}
        `
						: `
            background: ${mediaClassicColor};
        `
				}
        padding: ${mediaDesktopPadding};
        margin: ${mediaDesktopMargin};
        border: ${mediaBorder};
        border-width: ${mediaBorderDesktopWidth};
        border-radius: ${mediaBorderRadiusDesktopWidth};
        background-repeat: none;
        background-size: cover;
    }

    .fb-info-box-content-wrapper.${blockID}:hover .fb-info-media-wrapper {
        ${
					mediaHoverBackgroundType === "gradient"
						? `
            background: ${
							mediaHoverCustomGradientSwitcher &&
							mediaHoverCustomGradientInputValue
								? mediaHoverCustomGradientInputValue
								: mediaHoverGradientColor
						};
        `
						: mediaHoverBackgroundImageUrl &&
						  mediaHoverBackgroundImageUrl !== "null"
						? `
            ${
							mediaHoverBackgroundImageUrl
								? `background-image: url(${mediaHoverBackgroundImageUrl});`
								: ""
						}
            ${
							mediaHoverBackgroundImagePosition
								? `background-position: ${mediaHoverBackgroundImagePosition};`
								: ""
						}
            ${
							mediaHoverBackgroundImageAttachment
								? `background-attachment: ${mediaHoverBackgroundImageAttachment};`
								: ""
						}
            ${
							mediaHoverBackgroundImageRepeat
								? `background-repeat: ${mediaHoverBackgroundImageRepeat};`
								: ""
						}
            ${
							mediaHoverBackgroundImageSize
								? `background-size: ${mediaHoverBackgroundImageSize};`
								: ""
						}
        `
						: `
            background: ${mediaHoverClassicColor};
        `
				}
    }

    @media only screen and (max-width: 1024px) {
        .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper {
            width: ${mediaBgWidth.Tablet}${mediaBgWidthUnits.Tablet};
            height: ${mediaBgHeight.Tablet}${mediaBgHeightUnits.Tablet};
            padding: ${mediaTabletPadding};
            margin: ${mediaTabletMargin};
            border-width: ${mediaBorderTabletWidth};
            border-radius: ${mediaBorderRadiusTabletWidth};
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper {
            width: ${mediaBgWidth.Mobile}${mediaBgWidthUnits.Mobile};
            height: ${mediaBgHeight.Mobile}${mediaBgHeightUnits.Mobile};
            padding: ${mediaMobilePadding};
            margin: ${mediaMobileMargin};
            border-width: ${mediaBorderMobileWidth};
            border-radius: ${mediaBorderRadiusMobileWidth};
        }
    }

    .fb-info-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
    .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper img {
        width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
        ${mediaIconColor !== undefined ? `fill: ${mediaIconColor};` : "#ffffff"}
    }

    .fb-info-box-content-wrapper.${blockID}:hover .fb-icon-wrapper svg {
        ${
					mediaIconHoverColor !== undefined
						? `fill: ${mediaIconHoverColor};`
						: "#ffffff"
				}
    }

    .fb-info-box-content-wrapper.${blockID}:hover .fb-info-media-wrapper {
        ${
					mediaBgHoverColor !== undefined
						? `fill: ${mediaBgHoverColor};`
						: "#ffffff"
				}
    }

    @media only screen and (max-width: 1024px) {
        .fb-info-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
        .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper img {
            width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-info-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
        .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper img {
            width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
        }
    }

    .fb-info-box-content-wrapper.${blockID} .fb-btn-icon-wrapper svg {
        width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};
        ${btnIconColor !== undefined ? `fill: ${btnIconColor};` : "#ffffff"}
    }

    .fb-info-box-content-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg {
        ${
					btnIconHoverColor !== undefined
						? `fill: ${btnIconHoverColor};`
						: "#ffffff"
				}
    }

    @media only screen and (max-width: 1024px) {
        .fb-info-box-content-wrapper.${blockID} .fb-btn-icon-wrapper svg {
            width: ${btnIconSize.Tablet}${btnIconSizeUnits.Tablet};
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-info-box-content-wrapper.${blockID} .fb-btn-icon-wrapper svg {
            width: ${btnIconSize.Mobile}${btnIconSizeUnits.Mobile};
        }
    }
		`,
		[
			blockID,
			globalBgColor,
			DesktopPadding,
			DesktopMargin,
			globalBorder,
			BorderDesktopWidth,
			BorderRadiusDesktopWidth,
			globalBorderColor,
			boxGlobalBoxShadowCssValue,
			globalBgHoverColor,
			globalBorderHoverColor,
			blockID,
			infoBoxTabPadding,
			infoBoxPaddingUnits,
			infoBoxTabMargin,
			infoBoxMarginUnits,
			infoBoxTabBorderWidth,
			infoBoxBorderUnits,
			infoBoxTabBorderRadiusWidth,
			infoBoxBorderRadiusUnits,
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
			Heading_padding_units,
			Heading_Mobile_Margin,
			Heading_Margin_Units,
			Heading_Mobile_Border_Width,
			Heading_Border_units,
			Heading_Mobile_Border_radius_Width,
			Heading_Border_radius_units,
			SubHeadingColor,
			SubHeadingFontFamily,
			SubHeadingLetterSpacing,
			SubHeadingLetterSpacingUnits,
			SubHeadingLineHeight,
			SubHeadingLineHeightUnits,
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
			buttonBorderWidth,
			buttonBorderRadiusWidth,
			buttonTextHoverColor,
			buttonBgHoverColor,
			infoButtonTabPadding,
			infoButtonTabMargin,
			infoButtonTabBorderWidth,
			infoBtnTabBorderradiusWidth,
			infoButtonMobilePadding,
			infoButtonMobileMargin,
			infoButtonMobileBorderWidth,
			mediaBgWidth,
			mediaBgWidthUnits,
			mediaBgHeight,
			mediaBgHeightUnits,
			mediaBackgroundType,
			mediaCustomGradientSwitcher,
			mediaCustomGradientInputValue,
			mediaGradientColor,
			mediaBackgroundImageUrl,
			mediaBackgroundImagePosition,
			mediaBackgroundImageAttachment,
			mediaBackgroundImageRepeat,
			mediaBackgroundImageSize,
			mediaClassicColor,
			mediaHoverBackgroundType,
			mediaHoverCustomGradientSwitcher,
			mediaHoverCustomGradientInputValue,
			mediaHoverGradientColor,
			mediaHoverBackgroundImageUrl,
			mediaHoverBackgroundImagePosition,
			mediaHoverBackgroundImageAttachment,
			mediaHoverBackgroundImageRepeat,
			mediaHoverBackgroundImageSize,
			mediaHoverClassicColor,
			mediaDesktopPadding,
			mediaDesktopMargin,
			mediaBorder,
			mediaBorderDesktopWidth,
			mediaBorderRadiusDesktopWidth,
			mediaTabletPadding,
			mediaTabletMargin,
			mediaBorderTabletWidth,
			mediaBorderRadiusTabletWidth,
			mediaMobilePadding,
			mediaMobileMargin,
			mediaBorderMobileWidth,
			mediaBorderRadiusMobileWidth,
			mediaSize,
			mediaSizeUnits,
			mediaIconColor,
			mediaIconHoverColor,
			mediaBgHoverColor,
			btnIconSize,
			btnIconSizeUnits,
			btnIconColor,
			btnIconHoverColor,
		],
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${fbInfoBoxStyle}`.replace(/\s+/g, " ").trim(),
		});
	}, [fbInfoBoxStyle]);
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
												title={__("Icon/Image", "frontis-block")}
												initialOpen={true}
											>
												<BaseControl
													label={__("Alignment", "frontis-block")}
													id="fb-setting-alignment"
													className="fb-advanced-alignment"
												>
													<ButtonGroup className="fb-advanced-alignment-group-btn">
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() =>
																	setAttributes({
																		wrapperAlignment: item.value,
																	})
																}
																className={`fb-advanced-alignment-single-btn ${
																	wrapperAlignment === item.value
																		? "active"
																		: ""
																}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

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

												<BaseControl className="fb-sub-heading-position">
													<SelectControl
														label={__("Icon Position", "frontis-block")}
														value={infoIconPosition}
														options={INFO_ICON_POSITION}
														onChange={(value) =>
															setAttributes({ infoIconPosition: value })
														}
													/>
												</BaseControl>

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
																					stroke-width="1.5"
																					stroke-linecap="round"
																					stroke-linejoin="round"
																				></path>
																				<path
																					d="M15 9L9 15"
																					stroke="#4D4D4D"
																					stroke-width="1.5"
																					stroke-linecap="round"
																					stroke-linejoin="round"
																				></path>
																				<path
																					d="M9 9L15 15"
																					stroke="#4D4D4D"
																					stroke-width="1.5"
																					stroke-linecap="round"
																					stroke-linejoin="round"
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
																			<svg
																				width="24"
																				height="24"
																				viewBox="0 0 24 24"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z"
																					stroke="black"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				></path>
																				<path
																					d="M12 12V12.01"
																					stroke="black"
																					strokeWidth="1.5"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				></path>
																			</svg>
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
									</>
								)}

								{tab.name === "styles" && (
									<>
										{/*Box Style*/}

										{/*Image/Icon Style*/}
										<PanelBody
											title={__("Image/Icon", "frontis-block")}
											initialOpen={false}
										>
											<FB_Range
												min={1}
												max={300}
												label={__("Width", "frontis-blocks")}
												rangeValue={mediaSize}
												onChangeHandler={mediaSizeHandler}
												rangeUnitHandler={mediaSizeUnitsHandler}
												deviceType={deviceType}
												units={mediaSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={50}
											/>
											{/*Background*/}
											<FB_BackgroundColorControl
												bgColorSwitcher={mediaBackColorSwitcher}
												setBgColorSwitcher={(value) =>
													setAttributes({ mediaBackColorSwitcher: value })
												}
												normalBackgroundType={mediaBackgroundType}
												setNormalBackgroundType={(value) =>
													setAttributes({ mediaBackgroundType: value })
												}
												normalClassicColor={mediaClassicColor}
												setNormalClassicColor={(value) =>
													setAttributes({ mediaClassicColor: value })
												}
												normalGradientColor={mediaGradientColor}
												setNormalGradientColor={(value) =>
													setAttributes({ mediaGradientColor: value })
												}
												normalCustomGradientSwitcher={
													mediaCustomGradientSwitcher
												}
												setNormalCustomGradientSwitcher={(value) =>
													setAttributes({ mediaCustomGradientSwitcher: value })
												}
												normalCustomGradientInputValue={
													mediaCustomGradientInputValue
												}
												setNormalCustomGradientInputValue={(value) =>
													setAttributes({
														mediaCustomGradientInputValue: value,
													})
												}
												normalBackgroundImageUrl={mediaBackgroundImageUrl}
												setNormalBackgroundImageUrl={(value) =>
													setAttributes({ mediaBackgroundImageUrl: value })
												}
												normalBackgroundImageAlt={mediaBackgroundImageAlt}
												setNormalBackgroundImageAlt={(value) =>
													setAttributes({ mediaBackgroundImageAlt: value })
												}
												normalBackgroundImageID={mediaBackgroundImageID}
												setNormalBackgroundImageID={(value) =>
													setAttributes({ mediaBackgroundImageID: value })
												}
												normalBackgroundImagePosition={
													mediaBackgroundImagePosition
												}
												setNormalBackgroundImagePosition={(value) =>
													setAttributes({ mediaBackgroundImagePosition: value })
												}
												normalBackgroundImageAttachment={
													mediaBackgroundImageAttachment
												}
												setNormalBackgroundImageAttachment={(value) =>
													setAttributes({
														mediaBackgroundImageAttachment: value,
													})
												}
												normalBackgroundImageRepeat={mediaBackgroundImageRepeat}
												setNormalBackgroundImageRepeat={(value) =>
													setAttributes({ mediaBackgroundImageRepeat: value })
												}
												normalBackgroundImageSize={mediaBackgroundImageSize}
												setNormalBackgroundImageSize={(value) =>
													setAttributes({ mediaBackgroundImageSize: value })
												}
												hoverBackgroundType={mediaHoverBackgroundType}
												setHoverBackgroundType={(value) =>
													setAttributes({ mediaHoverBackgroundType: value })
												}
												hoverClassicColor={mediaHoverClassicColor}
												setHoverClassicColor={(value) =>
													setAttributes({ mediaHoverClassicColor: value })
												}
												hoverGradientColor={mediaHoverGradientColor}
												setHoverGradientColor={(value) =>
													setAttributes({ mediaHoverGradientColor: value })
												}
												hoverCustomGradientSwitcher={
													mediaHoverCustomGradientSwitcher
												}
												setHoverCustomGradientSwitcher={(value) =>
													setAttributes({
														mediaHoverCustomGradientSwitcher: value,
													})
												}
												hoverCustomGradientInputValue={
													mediaHoverCustomGradientInputValue
												}
												setHoverCustomGradientInputValue={(value) =>
													setAttributes({
														mediaHoverCustomGradientInputValue: value,
													})
												}
												hoverBackgroundImageUrl={mediaHoverBackgroundImageUrl}
												setHoverBackgroundImageUrl={(value) =>
													setAttributes({ mediaHoverBackgroundImageUrl: value })
												}
												hoverBackgroundImageAlt={mediaHoverBackgroundImageAlt}
												setHoverBackgroundImageAlt={(value) =>
													setAttributes({ mediaHoverBackgroundImageAlt: value })
												}
												hoverBackgroundImageID={mediaHoverBackgroundImageID}
												setHoverBackgroundImageID={(value) =>
													setAttributes({ mediaHoverBackgroundImageID: value })
												}
												hoverBackgroundImagePosition={
													mediaHoverBackgroundImagePosition
												}
												setHoverBackgroundImagePosition={(value) =>
													setAttributes({
														mediaHoverBackgroundImagePosition: value,
													})
												}
												hoverBackgroundImageAttachment={
													mediaHoverBackgroundImageAttachment
												}
												setHoverBackgroundImageAttachment={(value) =>
													setAttributes({
														mediaHoverBackgroundImageAttachment: value,
													})
												}
												hoverBackgroundImageRepeat={
													mediaHoverBackgroundImageRepeat
												}
												setHoverBackgroundImageRepeat={(value) =>
													setAttributes({
														mediaHoverBackgroundImageRepeat: value,
													})
												}
												hoverBackgroundImageSize={mediaHoverBackgroundImageSize}
												setHoverBackgroundImageSize={(value) =>
													setAttributes({
														mediaHoverBackgroundImageSize: value,
													})
												}
											/>

											<FB_Range
												min={1}
												max={300}
												label={__("Background Width", "frontis-blocks")}
												rangeValue={mediaBgWidth}
												onChangeHandler={mediaBgWidthHandler}
												rangeUnitHandler={mediaBgWidthUnitsHandler}
												deviceType={deviceType}
												units={mediaBgWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={50}
											/>
											<FB_Range
												min={1}
												max={300}
												label={__("Background Height", "frontis-blocks")}
												rangeValue={mediaBgHeight}
												onChangeHandler={mediaBgHeightHandler}
												rangeUnitHandler={mediaBgHeightUnitsHandler}
												deviceType={deviceType}
												units={mediaBgHeightUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={50}
											/>

											{/*Background*/}
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
																	mediaIconColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																mediaIconColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{mediaIconColorSwitcher === "normal" && (
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
																			color={mediaIconColor}
																			onChange={(value) =>
																				setAttributes({ mediaIconColor: value })
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
																			value={mediaIconColor}
																			onChange={(value) =>
																				setAttributes({ mediaIconColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{mediaIconColorSwitcher === "hover" && (
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
																			color={mediaIconHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					mediaIconHoverColor: value,
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
																			value={mediaIconHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					mediaIconHoverColor: value,
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
											className="fb-info-box-desc-setting-wrapper"
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
																									SubHeadingLetterSpacingUnits:
																										item.value,
																								})
																							}
																							className={`fb-setting-letterspacing-units-switcher ${
																								SubHeadingLetterSpacingUnits ===
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
																		value={SubHeadingLetterSpacing}
																		onChange={(value) =>
																			setAttributes({
																				SubHeadingLetterSpacing:
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
																									SubHeadingLineHeightUnits:
																										item.value,
																								})
																							}
																							className={`fb-setting-lineheight-units-switcher ${
																								SubHeadingLineHeightUnits ===
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
																		value={SubHeadingLineHeight}
																		onChange={(value) =>
																			setAttributes({
																				SubHeadingLineHeight:
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
										{/*Button Style*/}
										<PanelBody
											title={__("Button", "frontis-block")}
											className="fb-info-box-button-setting-wrapper"
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

												<PanelBody title="Background Color" initialOpen={false}>
													<FB_Color
														label={__("Background Color", "frontis-blocks")}
														globalColorSwitcher={globalBgColorSwitcher}
														globalColor={globalBgColor}
														globalHoverColor={globalBgHoverColor}
														handleColorSwitcherChange={
															handleGlobalBgColorSwitcherChange
														}
														handleGlobalColorChange={handleGlobalBgColorChange}
														handleGlobalHoverColorChange={
															handleGlobalBgHoverColorChange
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
														handleColorSwitcherChange={(value) => setAttributes({ globalBorderColorSwitcher: value })}
														handleGlobalColorChange={(value) => setAttributes({ globalBorderColor: value })}
														handleGlobalHoverColorChange={(value) => setAttributes({ globalBorderHoverColor: value })}
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
