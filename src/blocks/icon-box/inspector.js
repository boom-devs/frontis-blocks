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
import FB_TypographyControl from "@Components/typography-control";
import FBIconPicker from "../../components/icon-picker";
import FB_ResponsiveControl from "@Components/responsive-control";
import FB_Range from "@Components/range";
import FB_BoxShadowControl from "@Components/box-shadow";
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

import { useState, useEffect, useMemo } from "@wordpress/element";

import "./editor.scss";

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
		SubHeadingLineHeight,
		SubHeadingLineHeightUnits,
		SubHeadingLetterSpacing,
		SubHeadingLetterSpacingUnits,
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
		infoBoxTabBorderRadiusWidth,
		infoBoxMobileBorderRadiusWidth,

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
		subHeadingPaddingLink,
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-icon-box-" + clientId.slice(0, 8),
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

	/** Heading Spacing */
	/** Start Heading padding */
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
						Heading_Tab_padding: {
							...Heading_Tab_padding,
							[position]: value,
						},
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
	/** End Heading padding */

	/** End Global Padding */
	const Heading_Desktop_paddingWidth = `${Heading_Desktop_padding.top}${Heading_padding_units.Desktop} ${Heading_Desktop_padding.right}${Heading_padding_units.Desktop} ${Heading_Desktop_padding.bottom}${Heading_padding_units.Desktop} ${Heading_Desktop_padding.left}${Heading_padding_units.Desktop}`;
	const Heading_Tab_paddingWidth = `${Heading_Tab_padding.top}${Heading_padding_units.Tablet} ${Heading_Tab_padding.right}${Heading_padding_units.Tablet} ${Heading_Tab_padding.bottom}${Heading_padding_units.Tablet} ${Heading_Tab_padding.left}${Heading_padding_units.Tablet}`;
	const Heading_Mobile_paddingWidth = `${Heading_Mobile_padding.top}${Heading_padding_units.Mobile} ${Heading_Mobile_padding.right}${Heading_padding_units.Mobile} ${Heading_Mobile_padding.bottom}${Heading_padding_units.Mobile} ${Heading_Mobile_padding.left}${Heading_padding_units.Mobile}`;

	/** Start Heading Margin */
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
						Heading_Tab_Margin: {
							...Heading_Tab_Margin,
							[position]: value,
						},
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
		setAttributes({ Heading_Margin_Link: !Heading_Margin_Link });
	};

	const handleHeadingMarginUnitsHandler = (unit) => {
		setAttributes({
			Heading_Margin_Units: {
				...Heading_Margin_Units,
				[deviceType]: unit,
			},
		});
	};
	/** End Heading Margin */

	/** End Global Margin */
	const HeadingDesktopMarginValue = `${Heading_Desktop_Margin.top}${Heading_Margin_Units.Desktop} ${Heading_Desktop_Margin.right}${Heading_Margin_Units.Desktop} ${Heading_Desktop_Margin.bottom}${Heading_Margin_Units.Desktop} ${Heading_Desktop_Margin.left}${Heading_Margin_Units.Desktop}`;
	const HeadingTabMarginValue = `${Heading_Tab_Margin.top}${Heading_Margin_Units.Tablet} ${Heading_Tab_Margin.right}${Heading_Margin_Units.Tablet} ${Heading_Tab_Margin.bottom}${Heading_Margin_Units.Tablet} ${Heading_Tab_Margin.left}${Heading_Margin_Units.Tablet}`;
	const HeadingMobileMarginValue = `${Heading_Mobile_Margin.top}${Heading_Margin_Units.Mobile} ${Heading_Mobile_Margin.right}${Heading_Margin_Units.Mobile} ${Heading_Mobile_Margin.bottom}${Heading_Margin_Units.Mobile} ${Heading_Mobile_Margin.left}${Heading_Margin_Units.Mobile}`;

	/** Start Heading Border */
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
	/** End Heading Border */

	/** End Global Border */
	const HeadingDesktopBorderWidthValue = `${Heading_Desktop_Border_Width.top}${Heading_Border_units.Desktop} ${Heading_Desktop_Border_Width.right}${Heading_Border_units.Desktop} ${Heading_Desktop_Border_Width.bottom}${Heading_Border_units.Desktop} ${Heading_Desktop_Border_Width.left}${Heading_Border_units.Desktop}`;
	const HeadingTabBorderWidthValue = `${Heading_Tab_Border_Width.top}${Heading_Border_units.Tablet} ${Heading_Tab_Border_Width.right}${Heading_Border_units.Tablet} ${Heading_Tab_Border_Width.bottom}${Heading_Border_units.Tablet} ${Heading_Tab_Border_Width.left}${Heading_Border_units.Tablet}`;
	const HeadingMobileBorderWidthValue = `${Heading_Mobile_Border_Width.top}${Heading_Border_units.Mobile} ${Heading_Mobile_Border_Width.right}${Heading_Border_units.Mobile} ${Heading_Mobile_Border_Width.bottom}${Heading_Border_units.Mobile} ${Heading_Mobile_Border_Width.left}${Heading_Border_units.Mobile}`;

	/** Start Heading Border Radius Width */
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
	/** End Heading Border Radius Width */

	/** End Global Border Radius Width */
	const HeadingDesktopBorderradiusWidthValue = `${Heading_Desktop_Border_radius_Width.top}${Heading_Border_radius_units.Desktop} ${Heading_Desktop_Border_radius_Width.right}${Heading_Border_radius_units.Desktop} ${Heading_Desktop_Border_radius_Width.bottom}${Heading_Border_radius_units.Desktop} ${Heading_Desktop_Border_radius_Width.left}${Heading_Border_radius_units.Desktop}`;
	const HeadingTabBorderradiusWidthValue = `${Heading_Tab_Border_radius_Width.top}${Heading_Border_radius_units.Tablet} ${Heading_Tab_Border_radius_Width.right}${Heading_Border_radius_units.Tablet} ${Heading_Tab_Border_radius_Width.bottom}${Heading_Border_radius_units.Tablet} ${Heading_Tab_Border_radius_Width.left}${Heading_Border_radius_units.Tablet}`;
	const HeadingMobileBorderradiusWidthValue = `${Heading_Mobile_Border_radius_Width.top}${Heading_Border_radius_units.Mobile} ${Heading_Mobile_Border_radius_Width.right}${Heading_Border_radius_units.Mobile} ${Heading_Mobile_Border_radius_Width.bottom}${Heading_Border_radius_units.Mobile} ${Heading_Mobile_Border_radius_Width.left}${Heading_Border_radius_units.Mobile}`;

	/** Start SubHeading Padding */
	const handleSubHeadingPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (subHeadingPaddingLink) {
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

	const handleSubHeadingPaddingCombineBtn = () => {
		setAttributes({ subHeadingPaddingLink: !subHeadingPaddingLink });
	};

	const handleSubHeadingPaddingUnitsHandler = (unit) => {
		setAttributes({
			SubHeadingPaddingUnits: {
				...SubHeadingPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End SubHeading Padding */

	/** End Global SubHeading Padding */
	const SubHeadingDesktopPaddingValue = `${SubHeadingDesktopPadding.top}${SubHeadingPaddingUnits.Desktop} ${SubHeadingDesktopPadding.right}${SubHeadingPaddingUnits.Desktop} ${SubHeadingDesktopPadding.bottom}${SubHeadingPaddingUnits.Desktop} ${SubHeadingDesktopPadding.left}${SubHeadingPaddingUnits.Desktop}`;
	const SubHeadingTabPaddingValue = `${SubHeadingTabPadding.top}${SubHeadingPaddingUnits.Tablet} ${SubHeadingTabPadding.right}${SubHeadingPaddingUnits.Tablet} ${SubHeadingTabPadding.bottom}${SubHeadingPaddingUnits.Tablet} ${SubHeadingTabPadding.left}${SubHeadingPaddingUnits.Tablet}`;
	const SubHeadingMobilePaddingValue = `${SubHeadingMobilePadding.top}${SubHeadingPaddingUnits.Mobile} ${SubHeadingMobilePadding.right}${SubHeadingPaddingUnits.Mobile} ${SubHeadingMobilePadding.bottom}${SubHeadingPaddingUnits.Mobile} ${SubHeadingMobilePadding.left}${SubHeadingPaddingUnits.Mobile}`;

	/** Start Desc Margin */
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
/** End Desc Margin */

/** End Global Desc Margin */
const descDesktopMarginValue = `${descDesktopMargin.top}${descMarginUnits.Desktop} ${descDesktopMargin.right}${descMarginUnits.Desktop} ${descDesktopMargin.bottom}${descMarginUnits.Desktop} ${descDesktopMargin.left}${descMarginUnits.Desktop}`;
const descTabMarginValue = `${descTabMargin.top}${descMarginUnits.Tablet} ${descTabMargin.right}${descMarginUnits.Tablet} ${descTabMargin.bottom}${descMarginUnits.Tablet} ${descTabMargin.left}${descMarginUnits.Tablet}`;
const descMobileMarginValue = `${descMobileMargin.top}${descMarginUnits.Mobile} ${descMobileMargin.right}${descMarginUnits.Mobile} ${descMobileMargin.bottom}${descMarginUnits.Mobile} ${descMobileMargin.left}${descMarginUnits.Mobile}`;

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

	const iconBoxStyle = useMemo(
		() => `
    .fb-icon-box-content-wrapper.${blockID} {
        ${
					globalBgColor !== undefined
						? `background-color: ${globalBgColor};`
						: ""
				}
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
    
    .fb-icon-box-content-wrapper.${blockID}:hover {
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
        .fb-icon-box-content-wrapper-inner.${blockID} {
            padding: ${TabletPadding} !important;
            margin: ${TabletMargin} !important;
            border-width: ${BorderTabletWidth} !important;
            border-radius: ${BorderRadiusTabletWidth} !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-icon-box-content-wrapper-inner.${blockID} {
            padding: ${MobilePadding} !important;
            margin: ${MobileMargin} !important;
            border-width: ${BorderMobileWidth} !important;
            border-radius: ${BorderRadiusMobileWidth} !important;
        }
    }

    .fb-icon-box-content-wrapper.${blockID} .fb-heading {
        ${Heading_Color !== undefined ? `color: ${Heading_Color};` : ""}
        ${
					Heading_Background_Color !== undefined
						? `background-color: ${Heading_Background_Color};`
						: ""
				}
        font-family: ${
					Heading_Font_Family !== "default" ? Heading_Font_Family : "inherit"
				};
       ${
					Heading_Font_Size.Desktop && Heading_Font_size_units.Desktop
						? `font-size: ${Heading_Font_Size.Desktop}${Heading_Font_size_units.Desktop};`
						: ""
				}
        font-weight: ${Heading_Font_Weight};
        font-style: ${Heading_Font_Style};
        text-transform: ${Heading_Text_Transform};
        text-decoration: ${Heading_Text_Decoration};
        
		${
			Heading_Letter_Spacing.Desktop && Heading_Letter_Spacing_units.Desktop
				? `letter-spacing: ${Heading_Letter_Spacing.Desktop}${Heading_Letter_Spacing_units.Desktop};`
				: ""
		}
		${
			Heading_Line_Height.Desktop && Heading_Line_Height_units.Desktop
				? `line-height: ${Heading_Line_Height.Desktop}${Heading_Line_Height_units.Desktop};`
				: ""
		}
        transition: all .3s ease-in-out;
        padding: ${Heading_Desktop_paddingWidth};
        margin: ${HeadingDesktopMarginValue};
        border: ${Heading_Border};
        border-width: ${HeadingDesktopBorderWidthValue};
        border-radius: ${HeadingDesktopBorderradiusWidthValue};
        ${
					Heading_Border_Color !== undefined
						? `border-color: ${Heading_Border_Color};`
						: ""
				}
    }

    .fb-icon-box-content-wrapper.${blockID}:hover .fb-heading {
        ${
					Heading_Hover_Color !== undefined
						? `color: ${Heading_Hover_Color};`
						: ""
				}
        ${
					Heading_Border_Hover_Color !== undefined
						? `border-color: ${Heading_Border_Hover_Color};`
						: ""
				}
    }

    @media only screen and (max-width: 1024px) {
        .fb-icon-box-content-wrapper.${blockID} .fb-heading {
            padding: ${Heading_Tab_paddingWidth} !important;
            margin: ${HeadingTabMarginValue} !important;
            border-width: ${HeadingTabBorderWidthValue} !important;
            border-radius: ${HeadingTabBorderradiusWidthValue} !important;
        }
    }

    @media only screen and (max-width: 767px) {
        .fb-icon-box-content-wrapper.${blockID} .fb-heading {
            padding: ${Heading_Mobile_paddingWidth} !important;
            margin: ${HeadingMobileMarginValue} !important;
            border-width: ${HeadingMobileBorderWidthValue} !important;
            border-radius: ${HeadingMobileBorderradiusWidthValue} !important;
        }
    }
	.fb-icon-box-content-wrapper.${blockID} .fb-description {
        ${SubHeadingColor ? `color: ${SubHeadingColor};` : ""}
        font-family: ${
					SubHeadingFontFamily !== "default"
						? SubHeadingFontFamily
						: SubHeadingFontFamily
				};
		${
			SubHeadingFontSize.Desktop && SubHeadingFontSizeUnits.Desktop
				? `line-height: ${SubHeadingFontSize.Desktop}${SubHeadingFontSizeUnits.Desktop};`
				: ""
		}
        font-weight: ${SubHeadingFontWeight};
        font-style: ${SubHeadingFontStyle};
        text-transform: ${SubHeadingTextTransform};
        text-decoration: ${SubHeadingTextDecoration};
		
		${
			SubHeadingLetterSpacing.Desktop && SubHeadingLetterSpacingUnits.Desktop
				? `line-height: ${SubHeadingLetterSpacing.Desktop}${SubHeadingLetterSpacingUnits.Desktop};`
				: ""
		}
		${
			SubHeadingLineHeight.Desktop && SubHeadingLineHeightUnits.Desktop
				? `line-height: ${SubHeadingLineHeight.Desktop}${SubHeadingLineHeightUnits.Desktop};`
				: ""
		}
        padding: ${SubHeadingDesktopPaddingValue};
        margin: ${descDesktopMarginValue};
    }
    .fb-icon-box-content-wrapper.${blockID}:hover .fb-description {
        ${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
    }
    @media only screen and (max-width: 1024px) {
      .fb-icon-box-content-wrapper.${blockID} .fb-description {
        padding: ${SubHeadingTabPaddingValue} !important;
        margin: ${descTabMarginValue} !important;
      }
    }
    @media only screen and (max-width: 757px) {
      .fb-icon-box-content-wrapper.${blockID} .fb-description {
        padding: ${SubHeadingMobilePaddingValue} !important;
        margin: ${descMobileMarginValue} !important;
      }
    }
    .fb-icon-box-content-wrapper.${blockID} .fb-icon-media-wrapper {
      width: ${mediaBgWidth.Desktop}${mediaBgWidthUnits.Desktop};
      height: ${mediaBgHeight.Desktop}${mediaBgHeightUnits.Desktop};
      ${
				mediaBackgroundType === "gradient"
					? `background: ${
							mediaCustomGradientSwitcher && mediaCustomGradientInputValue
								? mediaCustomGradientInputValue
								: mediaGradientColor
					  };`
					: mediaBackgroundImageUrl && mediaBackgroundImageUrl !== "null"
					? `
        background-image: url(${mediaBackgroundImageUrl});
        background-position: ${mediaBackgroundImagePosition};
        background-attachment: ${mediaBackgroundImageAttachment};
        background-repeat: ${mediaBackgroundImageRepeat};
        background-size: ${mediaBackgroundImageSize};`
					: `background: ${mediaClassicColor};`
			}
      padding: ${mediaDesktopPadding};
      margin: ${mediaDesktopMargin};
      border: ${mediaBorder};
      border-width: ${mediaBorderDesktopWidth};
      border-radius: ${mediaBorderRadiusDesktopWidth};
      background-repeat: none;
      background-size: cover;
    }
    .fb-icon-box-content-wrapper.${blockID}:hover .fb-icon-media-wrapper {
      ${
				mediaHoverBackgroundType === "gradient"
					? `background: ${
							mediaHoverCustomGradientSwitcher &&
							mediaHoverCustomGradientInputValue
								? mediaHoverCustomGradientInputValue
								: mediaHoverGradientColor
					  };`
					: mediaHoverBackgroundImageUrl &&
					  mediaHoverBackgroundImageUrl !== "null"
					? `
        background-image: url(${mediaHoverBackgroundImageUrl});
        background-position: ${mediaHoverBackgroundImagePosition};
        background-attachment: ${mediaHoverBackgroundImageAttachment};
        background-repeat: ${mediaHoverBackgroundImageRepeat};
        background-size: ${mediaHoverBackgroundImageSize};`
					: `background: ${mediaHoverClassicColor};`
			}
    }
    @media only screen and (max-width: 1024px) {
      .fb-icon-box-content-wrapper.${blockID} .fb-icon-media-wrapper {
        width: ${mediaBgWidth.Tablet}${mediaBgWidthUnits.Tablet};
        height: ${mediaBgHeight.Tablet}${mediaBgHeightUnits.Tablet};
        padding: ${mediaTabletPadding};
        margin: ${mediaTabletMargin};
        border-width: ${mediaBorderTabletWidth};
        border-radius: ${mediaBorderRadiusTabletWidth};
      }
    }
    @media only screen and (max-width: 767px) {
      .fb-icon-box-content-wrapper.${blockID} .fb-icon-media-wrapper {
        width: ${mediaBgWidth.Mobile}${mediaBgWidthUnits.Mobile};
        height: ${mediaBgHeight.Mobile}${mediaBgHeightUnits.Mobile};
        padding: ${mediaMobilePadding};
        margin: ${mediaMobileMargin};
        border-width: ${mediaBorderMobileWidth};
        border-radius: ${mediaBorderRadiusMobileWidth};
      }
    }
    .fb-icon-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
    .fb-icon-box-content-wrapper.${blockID} .fb-icon-media-wrapper img {
      width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
      ${mediaIconColor ? `fill: ${mediaIconColor};` : "#ffffff"}
    }
    .fb-icon-box-content-wrapper.${blockID}:hover .fb-icon-wrapper svg {
      ${mediaIconHoverColor ? `fill: ${mediaIconHoverColor};` : "#ffffff"}
    }
    .fb-icon-box-content-wrapper.${blockID}:hover .fb-icon-media-wrapper {
      ${mediaBgHoverColor ? `fill: ${mediaBgHoverColor};` : "#ffffff"}
    }
    @media only screen and (max-width: 1024px) {
      .fb-icon-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
      .fb-icon-box-content-wrapper.${blockID} .fb-icon-media-wrapper img {
        width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
      }
    }
    @media only screen and (max-width: 767px) {
      .fb-icon-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
      .fb-icon-box-content-wrapper.${blockID} .fb-icon-media-wrapper img {
        width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
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
			Heading_Color,
			Heading_Background_Color,
			Heading_Font_Family,
			Heading_Font_Size,
			Heading_Font_Weight,
			Heading_Font_Style,
			Heading_Text_Transform,
			Heading_Text_Decoration,
			Heading_Letter_Spacing,
			Heading_Line_Height,
			Heading_Font_Size,
			Heading_Font_size_units,
			Heading_Letter_Spacing_units,
			Heading_Line_Height_units,
			padding,
			margin,
			Heading_Border,
			borderWidth,
			borderRadiusWidth,
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
			SubHeadingLetterSpacing,
			SubHeadingLetterSpacingUnits,
			SubHeadingLineHeight,
			SubHeadingLineHeightUnits,
			descPadding,
			descMargin,
			SubHeadingHoverColor,
			SubHeadingTabPadding,
			SubHeadingPaddingUnits,
			descTabMargin,
			descMarginUnits,
			SubHeadingMobilePadding,
			descMobileMargin,
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
			mediaDesktopPadding,
			mediaDesktopMargin,
			mediaBorder,
			mediaBorderDesktopWidth,
			mediaBorderRadiusDesktopWidth,
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
		],
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${iconBoxStyle}`.replace(/\s+/g, " ").trim(),
		});
	}, [iconBoxStyle]);

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
											{/*Background*/}
											<FB_Color
												label={__("Icon Color", "frontis-blocks")}
												globalColorSwitcher={mediaIconColorSwitcher}
												globalColor={mediaIconColor}
												globalHoverColor={mediaIconHoverColor}
												handleColorSwitcherChange={(value) =>
													setAttributes({
														mediaIconColorSwitcher: value,
													})
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ mediaIconColor: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({
														mediaIconHoverColor: value,
													})
												}
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
											<FB_TypographyControl
												fontFamily={Heading_Font_Family}
												onChangeFontFamily={(value) =>
													setAttributes({ Heading_Font_Family: value })
												}
												fontSize={Heading_Font_Size}
												onChangeFontSize={(value) =>
													setAttributes({ Heading_Font_Size: value })
												}
												fontSizeUnits={Heading_Font_size_units}
												onChangeFontSizeUnit={(value) =>
													setAttributes({ Heading_Font_size_units: value })
												}
												fontWeight={Heading_Font_Weight}
												onChangeFontWeight={(value) =>
													setAttributes({ Heading_Font_Weight: value })
												}
												fontStyle={Heading_Font_Style}
												onChangeFontStyle={(value) =>
													setAttributes({ Heading_Font_Style: value })
												}
												textTransform={Heading_Text_Transform}
												onChangeTextTransform={(value) =>
													setAttributes({ Heading_Text_Transform: value })
												}
												textDecoration={Heading_Text_Decoration}
												onChangeTextDecoration={(value) =>
													setAttributes({ Heading_Text_Decoration: value })
												}
												letterSpacing={Heading_Letter_Spacing}
												onChangeLetterSpacing={(value) =>
													setAttributes({ Heading_Letter_Spacing: value })
												}
												letterSpacingUnits={Heading_Letter_Spacing_units}
												onChangeLetterSpacingUnit={(value) =>
													setAttributes({ Heading_Letter_Spacing_units: value })
												}
												lineHeight={Heading_Line_Height}
												onChangeLineHeight={(value) =>
													setAttributes({ Heading_Line_Height: value })
												}
												lineHeightUnits={Heading_Line_Height_units}
												onChangeLineHeightUnit={(value) =>
													setAttributes({ Heading_Line_Height_units: value })
												}
												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Text Color", "frontis-blocks")}
												globalColorSwitcher={Heading_Color_Switcher}
												globalColor={Heading_Color}
												globalHoverColor={Heading_Hover_Color}
												handleColorSwitcherChange={(value) =>
													setAttributes({
														Heading_Color_Switcher: value,
													})
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ Heading_Color: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({
														Heading_Hover_Color: value,
													})
												}
											/>

											{/*Spacing*/}
											<Heading>Spacing</Heading>
											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleHeadingPaddingUnitsHandler}
												spacingUnits={Heading_padding_units}
												spacingDesktop={Heading_Desktop_padding}
												spacingTablet={Heading_Tab_padding}
												spacingMobile={Heading_Mobile_padding}
												handleSpacingUnitHandler={
													handleHeadingPaddingUnitChange
												}
												spacingCombineBtn={paddingLink}
												spacingCombineBtnHandler={
													handleHeadingPaddingCombineBtn
												}
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
											<FB_Color
												label={__("Text Color", "frontis-blocks")}
												globalColorSwitcher={Heading_Border_Color_Switcher}
												globalColor={Heading_Border_Color}
												globalHoverColor={Heading_Border_Hover_Color}
												handleColorSwitcherChange={(value) =>
													setAttributes({
														Heading_Border_Color_Switcher: value,
													})
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ Heading_Border_Color: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({
														Heading_Border_Hover_Color: value,
													})
												}
											/>

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
										<PanelBody
											title={__("Description", "frontis-block")}
											initialOpen={false}
											className="fb-icon-box-desc-setting-wrapper"
										>
											{/*Typography*/}

											<FB_TypographyControl
												fontFamily={SubHeadingFontFamily}
												onChangeFontFamily={(value) =>
													setAttributes({ SubHeadingFontFamily: value })
												}
												fontSize={SubHeadingFontSize}
												onChangeFontSize={(value) =>
													setAttributes({ SubHeadingFontSize: value })
												}
												fontSizeUnits={SubHeadingFontSizeUnits}
												onChangeFontSizeUnit={(value) =>
													setAttributes({ SubHeadingFontSizeUnits: value })
												}
												fontWeight={SubHeadingFontWeight}
												onChangeFontWeight={(value) =>
													setAttributes({ SubHeadingFontWeight: value })
												}
												fontStyle={SubHeadingFontStyle}
												onChangeFontStyle={(value) =>
													setAttributes({ SubHeadingFontStyle: value })
												}
												textTransform={SubHeadingTextTransform}
												onChangeTextTransform={(value) =>
													setAttributes({ SubHeadingTextTransform: value })
												}
												textDecoration={SubHeadingTextDecoration}
												onChangeTextDecoration={(value) =>
													setAttributes({ SubHeadingTextDecoration: value })
												}
												letterSpacing={SubHeadingLetterSpacing}
												onChangeLetterSpacing={(value) =>
													setAttributes({ SubHeadingLetterSpacing: value })
												}
												letterSpacingUnits={SubHeadingLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) =>
													setAttributes({ SubHeadingLetterSpacingUnits: value })
												}
												lineHeight={SubHeadingLineHeight}
												onChangeLineHeight={(value) =>
													setAttributes({ SubHeadingLineHeight: value })
												}
												lineHeightUnits={SubHeadingLineHeightUnits}
												onChangeLineHeightUnit={(value) =>
													setAttributes({ SubHeadingLineHeightUnits: value })
												}
												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											{/*Color*/}

											<FB_Color
												label={__("Text Color", "frontis-blocks")}
												globalColorSwitcher={SubHeadingColorSwitcher}
												globalColor={SubHeadingColor}
												globalHoverColor={SubHeadingHoverColor}
												handleColorSwitcherChange={(value) =>
													setAttributes({
														SubHeadingColorSwitcher: value,
													})
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ SubHeadingColor: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({
														SubHeadingHoverColor: value,
													})
												}
											/>
											{/*Spacing*/}
											<Heading>Spacing</Heading>
											{/* Padding */}
											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={
													handleSubHeadingPaddingUnitsHandler
												}
												spacingUnits={SubHeadingPaddingUnits}
												spacingDesktop={SubHeadingDesktopPadding}
												spacingTablet={SubHeadingTabPadding}
												spacingMobile={SubHeadingMobilePadding}
												handleSpacingUnitHandler={
													handleSubHeadingPaddingUnitChange
												}
												spacingCombineBtn={subHeadingPaddingLink}
												spacingCombineBtnHandler={
													handleSubHeadingPaddingCombineBtn
												}
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
														handleSpacingUnitHandler={
															handleDescMarginUnitChange
														}
														spacingCombineBtn={descMarginLink}
														spacingCombineBtnHandler={
															handleDescMarginCombineBtn
														}
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
