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
} from "./constants/constants";

import { useState, createRef, useEffect } from "@wordpress/element";

import "./editor.scss";
import FBIconPicker from "../../components/icon-picker";
import FB_ResponsiveControl from "@Components/responsive-control";
import FB_Range from "@Components/range";
import FB_BoxShadowControl from '@Components/box-shadow';

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
		DeviceType,
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
		boxGlobalBoxShadowCssValue
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
	const removeInfoMedia = () => {
		setAttributes({
			infoMediaId: "",
			infoMediaUrl: "",
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
		switch (DeviceType) {
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
			updateAllPadding(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateButtonPadding(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateAllBoxPadding(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateBoxMargin(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateAllDescPadding(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateDescMargin(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateAllMargin(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateButtonMargin(value, DeviceType);
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
		switch (DeviceType) {
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
			updateButtonBorderWidth(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateButtonBorderRadiusWidth(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateAllBorderWidth(value, DeviceType);
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
		setAttributes({ DeviceType: device });
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
		switch (DeviceType) {
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
			updateAllBorderRadiusWidth(value, DeviceType);
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
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const borderRadiusWidth = `${Heading_Desktop_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.left}${Heading_Border_radius_units}`;
	/** End Border Radius Width */

	/** Start Box Border Width */
	const [boxPreviousBorderWidth, setBoxPreviousBorderWidth] = useState(
		infoBoxDesktopBorderWidth,
	);
	/** Function to update all Border Width values */
	const updateBoxBorderWidth = (value, device) => {
		switch (device) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoBoxTabBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobileBorderWidth: {
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
	const handleBoxBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (DeviceType) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopBorderWidth: {
						...infoBoxDesktopBorderWidth,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoBoxTabBorderWidth: {
						...infoBoxTabBorderWidth,
						[direction]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobileBorderWidth: {
						...infoBoxMobileBorderWidth,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderLink is true */
		if (borderLink) {
			updateBoxBorderWidth(value, DeviceType);
		}
	};

	/** Function to handle borderLink toggle */
	const handleBoxBorderWidthLinkToggle = () => {
		if (!borderLink) {
			setAttributes({ infoBoxDesktopBorderWidth: boxPreviousBorderWidth });
		}
		/** setborderLinkLink(!borderLink) */
		setAttributes({ borderLink: !borderLink });
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setBoxPreviousBorderWidth(infoBoxDesktopBorderWidth);
	}, [infoBoxDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleBoxBorderWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const boxBorderWidth = `${infoBoxDesktopBorderWidth.top}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.right}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.bottom}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.left}${infoBoxBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [boxPreviousBorderRadiusWidth, setBoxPreviousBorderRadiusWidth] =
		useState(infoBoxDesktopBorderRadiusWidth);
	/** Function to update all Border Width values */
	const updateBoxBorderRadiusWidth = (value, device) => {
		switch (device) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});

				break;
			case "Tablet":
				setAttributes({
					infoBoxTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobileBorderRadiusWidth: {
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
	const handleBoxBorderRadiusWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activeBorderRadiusDevice) {
			case "Desktop":
				setAttributes({
					infoBoxDesktopBorderRadiusWidth: {
						...infoBoxDesktopBorderRadiusWidth,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					infoBoxTabBorderRadiusWidth: {
						...infoBoxTabBorderRadiusWidth,
						[direction]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					infoBoxMobileBorderRadiusWidth: {
						...infoBoxMobileBorderRadiusWidth,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderRadiusLink is true */
		if (borderRadiusLink) {
			updateBoxBorderRadiusWidth(value, DeviceType);
		}
	};

	/** Function to handle borderRadiusLink toggle */
	const handleBoxBorderRadiusWidthLinkToggle = () => {
		if (!borderRadiusLink) {
			setAttributes({
				infoBoxDesktopBorderRadiusWidth: boxPreviousBorderRadiusWidth,
			});
		}
		/** setborderRadiusLinkLink(!borderRadiusLink) */
		setAttributes({ borderRadiusLink: !borderRadiusLink });
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setBoxPreviousBorderRadiusWidth(infoBoxDesktopBorderRadiusWidth);
	}, [infoBoxDesktopBorderRadiusWidth]);

	/** Function to handle device click for Border Width */
	const handleBoxBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ DeviceType: device });
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const boxBorderRadiusWidth = `${infoBoxDesktopBorderRadiusWidth.top}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.right}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.bottom}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.left}${infoBoxBorderRadiusUnits}`;
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

	return (
		<>
			<style>
				{`
				.fb-info-box-content-wrapper.${blockID} {
                    ${
											globalBgColor !== undefined
												? `background-color: ${globalBgColor};`
												: ""
										};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${globalBorder};
                    border-width: ${BorderDesktopWidth};
                    border-radius: ${BorderRadiusDesktopWidth} !important;
                    ${
											globalBorderColor !== undefined
												? `border-color: ${globalBorderColor};`
												: ""
										};
					${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : ''}
                    transition: all .3s ease-in-out;
                }
                .fb-info-box-content-wrapper.${blockID}:hover {
                    ${
											globalBgHoverColor !== undefined
												? `background-color: ${globalBgHoverColor};`
												: ""
										};
                    ${
											globalBorderHoverColor !== undefined
												? `border-color: ${globalBorderHoverColor};`
												: ""
										};
                }
				
                @media only screen and (max-width: 1024px){
                .fb-info-box-content-wrapper-inner.${blockID}{
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
                border-width: ${
									infoBoxTabBorderWidth.top
								}${infoBoxBorderUnits} ${
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
                @media only screen and (max-width: 767px){
                .fb-info-box-content-wrapper-inner.${blockID}{
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
                border-width: ${
									infoBoxMobileBorderWidth.top
								}${infoBoxBorderUnits} ${
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
                .fb-info-box-content-wrapper.${blockID} .fb-heading {
                    ${
											Heading_Color !== undefined
												? `color: ${Heading_Color};`
												: ""
										}
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
                    font-size: ${
											Heading_Font_Size !== undefined
												? `${Heading_Font_Size}${Heading_Font_size_units}`
												: ""
										};
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
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    ${
											Heading_Border_Color !== undefined
												? `border-color: ${Heading_Border_Color};`
												: ""
										}
                }
                .fb-info-box-content-wrapper.${blockID}:hover .fb-heading {
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
                    .fb-info-box-content-wrapper.${blockID} .fb-heading {
                        padding: ${
													Heading_Tab_padding.top
												}${Heading_padding_units} ${
													Heading_Tab_padding.right
												}${Heading_padding_units} ${
													Heading_Tab_padding.bottom
												}${Heading_padding_units} ${
													Heading_Tab_padding.left
												}${Heading_padding_units} !important;
                        margin: ${
													Heading_Tab_Margin.top
												}${Heading_Margin_Units} ${
													Heading_Tab_Margin.right
												}${Heading_Margin_Units} ${
													Heading_Tab_Margin.bottom
												}${Heading_Margin_Units} ${
													Heading_Tab_Margin.left
												}${Heading_Margin_Units} !important;
                        border-width: ${
													Heading_Tab_Border_Width.top
												}${Heading_Border_units} ${
													Heading_Tab_Border_Width.right
												}${Heading_Border_units} ${
													Heading_Tab_Border_Width.bottom
												}${Heading_Border_units} ${
													Heading_Tab_Border_Width.left
												}${Heading_Border_units} !important;
                        border-radius: ${
													Heading_Tab_Border_radius_Width.top
												}${Heading_Border_radius_units} ${
													Heading_Tab_Border_radius_Width.right
												}${Heading_Border_radius_units} ${
													Heading_Tab_Border_radius_Width.bottom
												}${Heading_Border_radius_units} ${
													Heading_Tab_Border_radius_Width.left
												}${Heading_Border_radius_units} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-info-box-content-wrapper.${blockID} .fb-heading {
                        padding: ${
													Heading_Mobile_padding.top
												}${Heading_padding_units} ${
													Heading_Mobile_padding.right
												}${Heading_padding_units} ${
													Heading_Mobile_padding.bottom
												}${Heading_padding_units} ${
													Heading_Mobile_padding.left
												}${Heading_padding_units} !important;
                        margin: ${
													Heading_Mobile_Margin.top
												}${Heading_Margin_Units} ${
													Heading_Mobile_Margin.right
												}${Heading_Margin_Units} ${
													Heading_Mobile_Margin.bottom
												}${Heading_Margin_Units} ${
													Heading_Mobile_Margin.left
												}${Heading_Margin_Units} !important;
                        border-width: ${
													Heading_Mobile_Border_Width.top
												}${Heading_Border_units} ${
													Heading_Mobile_Border_Width.right
												}${Heading_Border_units} ${
													Heading_Mobile_Border_Width.bottom
												}${Heading_Border_units} ${
													Heading_Mobile_Border_Width.left
												}${Heading_Border_units} !important;
                        border-radius: ${
													Heading_Mobile_Border_radius_Width.top
												}${Heading_Border_radius_units} ${
													Heading_Mobile_Border_radius_Width.right
												}${Heading_Border_radius_units} ${
													Heading_Mobile_Border_radius_Width.bottom
												}${Heading_Border_radius_units} ${
													Heading_Mobile_Border_radius_Width.left
												}${Heading_Border_radius_units} !important;
                    }
                }

                .fb-info-box-content-wrapper.${blockID} .fb-description {
                	${
										SubHeadingColor !== undefined
											? `color: ${SubHeadingColor};`
											: ""
									}
                	font-family: ${
										SubHeadingFontFamily !== "default"
											? SubHeadingFontFamily
											: SubHeadingFontFamily
									};
                    font-size: ${
											SubHeadingFontSize !== undefined
												? `${SubHeadingFontSize}${SubHeadingFontSizeUnits}`
												: ""
										};
                    font-weight: ${SubHeadingFontWeight};
                    font-style: ${SubHeadingFontStyle};
                    text-transform: ${SubHeadingTextTransform};
                    text-decoration: ${SubHeadingTextDecoration};
                    padding: ${descPadding};
                    margin: ${descMargin};
                }
                .fb-info-box-content-wrapper.${blockID}:hover .fb-description {
                    ${
											SubHeadingHoverColor !== undefined
												? `color: ${SubHeadingHoverColor};`
												: ""
										}
                }
				@media only screen and (max-width: 1024px){
				.fb-info-box-content-wrapper.${blockID} .fb-description {
                        padding: ${
													SubHeadingTabPadding.top
												}${SubHeadingPaddingUnits} ${
													SubHeadingTabPadding.right
												}${SubHeadingPaddingUnits} ${
													SubHeadingTabPadding.bottom
												}${SubHeadingPaddingUnits} ${
													SubHeadingTabPadding.left
												}${SubHeadingPaddingUnits} !important;
                        margin: ${descTabMargin.top}${descMarginUnits} ${
													descTabMargin.right
												}${descMarginUnits} ${
													descTabMargin.bottom
												}${descMarginUnits} ${
													descTabMargin.left
												}${descMarginUnits} !important;

                    }
				}
				@media only screen and (max-width: 757px){
				.fb-info-box-content-wrapper.${blockID} .fb-description {
                        padding: ${
													SubHeadingMobilePadding.top
												}${SubHeadingPaddingUnits} ${
													SubHeadingMobilePadding.right
												}${SubHeadingPaddingUnits} ${
													SubHeadingMobilePadding.bottom
												}${SubHeadingPaddingUnits} ${
													SubHeadingMobilePadding.left
												}${SubHeadingPaddingUnits} !important;
                        margin: ${descMobileMargin.top}${descMarginUnits} ${
													descMobileMargin.right
												}${descMarginUnits} ${
													descMobileMargin.bottom
												}${descMarginUnits} ${
													descMobileMargin.left
												}${descMarginUnits} !important;
                    }
				}
                .fb-info-box-content-wrapper.${blockID} .fb-info-btn-wrapper{
                	${
										buttonTextColor !== undefined
											? `color: ${buttonTextColor};`
											: ""
									}
                	${
										buttonBgColor !== undefined
											? `background-color: ${buttonBgColor};`
											: ""
									}
                	font-family: ${
										buttonFontFamily !== "default"
											? buttonFontFamily
											: buttonFontFamily
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
                        padding: ${
													infoButtonTabPadding.top
												}${infoButtonPaddingUnits} ${
													infoButtonTabPadding.right
												}${infoButtonPaddingUnits} ${
													infoButtonTabPadding.bottom
												}${infoButtonPaddingUnits} ${
													infoButtonTabPadding.left
												}${infoButtonPaddingUnits} !important;
                        margin: ${
													infoButtonTabMargin.top
												}${infoButtonMarginUnits} ${
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
                    .fb-info-box-content-wrapper.${blockID} .fb-heading {
                        padding: ${
													infoButtonMobilePadding.top
												}${infoButtonPaddingUnits} ${
													infoButtonMobilePadding.right
												}${infoButtonPaddingUnits} ${
													infoButtonMobilePadding.bottom
												}${infoButtonPaddingUnits} ${
													infoButtonMobilePadding.left
												}${infoButtonPaddingUnits} !important;
                        margin: ${
													infoButtonMobileMargin.top
												}${infoButtonMarginUnits} ${
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

                .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper{
                	width: ${mediaBgWidth.Desktop}${mediaBgWidthUnits.Desktop};
                	height: ${mediaBgHeight.Desktop}${mediaBgHeightUnits.Desktop};
					${mediaBgColor !== undefined ? `background-color: ${mediaBgColor};` : "#ffffff"}
					padding: ${mediaDesktopPadding};
                    margin: ${mediaDesktopMargin};
                    border: ${mediaBorder};
                    border-width: ${mediaBorderDesktopWidth};
                    border-radius: ${mediaBorderRadiusDesktopWidth};
                }
				.fb-info-box-content-wrapper.${blockID}:hover .fb-info-media-wrapper{
					${mediaBgHoverColor !== undefined ? `background-color: ${mediaBgHoverColor};` : "#ffffff"}
				}
				@media only screen and (max-width: 1024px) {
                .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper{
                	width: ${mediaBgWidth.Tablet}${mediaBgWidthUnits.Tablet};
                	height: ${mediaBgHeight.Tablet}${mediaBgHeightUnits.Tablet};
					padding: ${mediaTabletPadding};
                    margin: ${mediaTabletMargin};
                    border-width: ${mediaBorderTabletWidth};
                    border-radius: ${mediaBorderRadiusTabletWidth};
                }
                }
                @media only screen and (max-width: 767px) {
                .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper{
                	width: ${mediaBgWidth.Mobile}${mediaBgWidthUnits.Mobile};
                	height: ${mediaBgHeight.Mobile}${mediaBgHeightUnits.Mobile};
					padding: ${mediaMobilePadding};
                    margin: ${mediaMobileMargin};
                    border-width: ${mediaBorderMobileWidth};
                    border-radius: ${mediaBorderRadiusMobileWidth};
                }
                }

				.fb-info-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
                .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper img{
                	width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
					${mediaIconColor !== undefined ? `fill: ${mediaIconColor};` : "#ffffff"}
				}
				.fb-info-box-content-wrapper.${blockID}:hover .fb-icon-wrapper svg{
					${mediaIconHoverColor !== undefined ? `fill: ${mediaIconHoverColor};` : "#ffffff"}
				}
                .fb-info-box-content-wrapper.${blockID}:hover .fb-info-media-wrapper{
					${mediaBgHoverColor !== undefined ? `fill: ${mediaBgHoverColor};` : "#ffffff"}
				}

                @media only screen and (max-width: 1024px) {
                .fb-info-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
                .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper img{
                	width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
                }
                }
                @media only screen and (max-width: 767px) {
                .fb-info-box-content-wrapper.${blockID} .fb-icon-wrapper svg,
                .fb-info-box-content-wrapper.${blockID} .fb-info-media-wrapper img{
                	width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
                }
                }
				
				.fb-info-box-content-wrapper.${blockID} .fb-btn-icon-wrapper svg{
                	width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};
					${btnIconColor !== undefined ? `fill: ${btnIconColor};` : "#ffffff"}
                }
				.fb-info-box-content-wrapper.${blockID}:hover .fb-btn-icon-wrapper svg{
					${btnIconHoverColor !== undefined ? `fill: ${btnIconHoverColor};` : "#ffffff"}
                }
                @media only screen and (max-width: 1024px) {
                .fb-info-box-content-wrapper.${blockID} .fb-btn-icon-wrapper svg{
                	width: ${btnIconSize.Tablet}${btnIconSizeUnits.Tablet};
                }
                }
                @media only screen and (max-width: 767px) {
                .fb-info-box-content-wrapper.${blockID} .fb-btn-icon-wrapper svg{
                	width: ${btnIconSize.Mobile}${btnIconSizeUnits.Mobile};
                }
                }
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
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		setAttributes({
																			infoMediaId: media["id"],
																			infoMediaUrl: media["url"],
																			infoMediaWidth: media["width"],
																			infoMediaHeight: media["height"],
																		});
																	}}
																	type="image"
																	value={attributes.infoMediaId}
																	render={({ open }) => {
																		return (
																			<Button
																				className={
																					attributes.infoMediaId == 0
																						? "editor-post-featured-image__toggle"
																						: "editor-post-featured-image__preview"
																				}
																				onClick={open}
																			>
																				{attributes.infoMediaId == 0 &&
																					__(
																						"Select Icon Image",
																						"ultimate-addons-for-gutenberg-blocks",
																					)}
																				{attributes.infoMediaId != 0 && (
																					<ResponsiveWrapper
																						naturalWidth={
																							attributes.infoMediaWidth
																						}
																						naturalHeight={
																							attributes.infoMediaHeight
																						}
																					>
																						<img
																							src={attributes.infoMediaUrl}
																						/>
																					</ResponsiveWrapper>
																				)}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{attributes.infoMediaId != 0 && (
																<HStack className="editor-post-featured-image__actions">
																	<Button
																		className="editor-post-featured-image__action"
																		onClick={() => removeInfoMedia()}
																	>
																		{__("Remove", "frontis-block")}
																	</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__(
																				"Replace image",
																				"frontis-block",
																			)}
																			value={attributes.infoMediaId}
																			onSelect={(media) => {
																				setAttributes({
																					infoMediaId: media["id"],
																					infoMediaUrl: media["url"],
																					infoMediaWidth: media["width"],
																					infoMediaHeight: media["height"],
																				});
																			}}
																			type="image"
																			render={({ open }) => (
																				<Button
																					className="editor-post-featured-image__action"
																					onClick={open}
																				>
																					{__("Replace", "frontis-block")}
																				</Button>
																			)}
																		/>
																	</MediaUploadCheck>
																</HStack>
															)}
														</BaseControl>
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
										<PanelBody
											title={__("Box", "frontis-block")}
											initialOpen={false}
										>
											{/*Background*/}
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
																	boxBgColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																boxBgColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{boxBgColorSwitcher === "normal" && (
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
																			color={boxBgColor}
																			onChange={(value) =>
																				setAttributes({ boxBgColor: value })
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
																			value={boxBgColor}
																			onChange={(value) =>
																				setAttributes({ boxBgColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{boxBgColorSwitcher === "hover" && (
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
																			color={boxBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					boxBgHoverColor: value,
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
																			value={boxBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					boxBgHoverColor: value,
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
											{/*Padding control*/}
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Padding", "frontis-block")}
															device={DeviceType}
															deviceHandler={handleBoxPaddingDeviceClick}
														/>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoBoxPaddingUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoBoxPaddingUnits === item.value
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopPadding.top
																		: DeviceType === "Tablet"
																		? infoBoxTabPadding.top
																		: infoBoxMobilePadding.top
																}
																onChange={(e) =>
																	handleBoxPaddingInputChange(e, "top")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopPadding.right
																		: DeviceType === "Tablet"
																		? infoBoxTabPadding.right
																		: infoBoxMobilePadding.right
																}
																onChange={(e) =>
																	handleBoxPaddingInputChange(e, "right")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopPadding.bottom
																		: DeviceType === "Tablet"
																		? infoBoxTabPadding.bottom
																		: infoBoxMobilePadding.bottom
																}
																onChange={(e) =>
																	handleBoxPaddingInputChange(e, "bottom")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopPadding.left
																		: DeviceType === "Tablet"
																		? infoBoxTabPadding.left
																		: infoBoxMobilePadding.left
																}
																onChange={(e) =>
																	handleBoxPaddingInputChange(e, "left")
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
																onClick={handleBoxPaddingLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
											{/*Margin control*/}
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<FB_ResponsiveControl
															labelText={__("Margin", "frontis-block")}
															device={DeviceType}
															deviceHandler={handleBoxMarginDeviceClick}
														/>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoBoxMarginUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoBoxMarginUnits === item.value
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopMargin.top
																		: DeviceType === "Tablet"
																		? infoBoxTabMargin.top
																		: infoBoxMobileMargin.top
																}
																onChange={(e) =>
																	handleBoxMarginInputChange(e, "top")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopMargin.right
																		: DeviceType === "Tablet"
																		? infoBoxTabMargin.right
																		: infoBoxMobileMargin.right
																}
																onChange={(e) =>
																	handleBoxMarginInputChange(e, "right")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopMargin.bottom
																		: DeviceType === "Tablet"
																		? infoBoxTabMargin.bottom
																		: infoBoxMobileMargin.bottom
																}
																onChange={(e) =>
																	handleBoxMarginInputChange(e, "bottom")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopMargin.left
																		: DeviceType === "Tablet"
																		? infoBoxTabMargin.left
																		: infoBoxMobileMargin.left
																}
																onChange={(e) =>
																	handleBoxMarginInputChange(e, "left")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${
																	infoBoxMarginLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${infoBoxMarginLink ? "is-checked" : ""}`}
																onClick={handleBoxMarginLinkToggle}
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
													setAttributes({ infoBoxBorder: value })
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
																	infoBoxBorderColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																infoBoxBorderColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{infoBoxBorderColorSwitcher === "normal" && (
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
																					infoBoxBorderColor: value,
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
																					infoBoxBorderColor: value,
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

											{infoBoxBorderColorSwitcher === "hover" && (
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
																			color={infoBoxBorderHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					infoBoxBorderHoverColor: value,
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
															device={DeviceType}
															deviceHandler={handleBoxBorderWidthDeviceClick}
														/>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoBoxBorderUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoBoxBorderUnits === item.value
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderWidth.top
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderWidth.top
																		: infoBoxMobileBorderWidth.top
																}
																onChange={(e) =>
																	handleBoxBorderWidthInputChange(e, "top")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderWidth.right
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderWidth.right
																		: infoBoxMobileBorderWidth.right
																}
																onChange={(e) =>
																	handleBoxBorderWidthInputChange(e, "right")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderWidth.bottom
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderWidth.bottom
																		: infoBoxMobileBorderWidth.bottom
																}
																onChange={(e) =>
																	handleBoxBorderWidthInputChange(e, "bottom")
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderWidth.left
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderWidth.left
																		: infoBoxMobileBorderWidth.left
																}
																onChange={(e) =>
																	handleBoxBorderWidthInputChange(e, "left")
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
																onClick={handleBoxBorderWidthLinkToggle}
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
															device={DeviceType}
															deviceHandler={
																handleBoxBorderRadiusWidthDeviceClick
															}
														/>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				infoBoxBorderRadiusUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			infoBoxBorderRadiusUnits === item.value
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderRadiusWidth.top
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderRadiusWidth.top
																		: infoBoxMobileBorderRadiusWidth.top
																}
																onChange={(e) =>
																	handleBoxBorderRadiusWidthInputChange(
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderRadiusWidth.right
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderRadiusWidth.right
																		: infoBoxMobileBorderRadiusWidth.right
																}
																onChange={(e) =>
																	handleBoxBorderRadiusWidthInputChange(
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderRadiusWidth.bottom
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderRadiusWidth.bottom
																		: infoBoxMobileBorderRadiusWidth.bottom
																}
																onChange={(e) =>
																	handleBoxBorderRadiusWidthInputChange(
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
																	DeviceType === "Desktop"
																		? infoBoxDesktopBorderRadiusWidth.left
																		: DeviceType === "Tablet"
																		? infoBoxTabBorderRadiusWidth.left
																		: infoBoxMobileBorderRadiusWidth.left
																}
																onChange={(e) =>
																	handleBoxBorderRadiusWidthInputChange(
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
																onClick={handleBoxBorderRadiusWidthLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>
										{/*Image Style*/}
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
																	mediaBgColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																mediaBgColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{mediaBgColorSwitcher === "normal" && (
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
																			color={mediaBgColor}
																			onChange={(value) =>
																				setAttributes({ mediaBgColor: value })
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
																			value={mediaBgColor}
																			onChange={(value) =>
																				setAttributes({ mediaBgColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{mediaBgColorSwitcher === "hover" && (
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
																			color={mediaBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					mediaBgHoverColor: value,
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
																			value={mediaBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					mediaBgHoverColor: value,
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
												label={__("Radius Border", "frontis-blocks")}
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_padding.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_padding.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_padding.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_padding.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Margin.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Margin.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Margin.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Margin.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_Width.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_Width.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_Width.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_Width.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? Heading_Desktop_Border_radius_Width.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? SubHeadingDesktopPadding.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? SubHeadingDesktopPadding.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? SubHeadingDesktopPadding.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? SubHeadingDesktopPadding.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? descDesktopMargin.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? descDesktopMargin.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? descDesktopMargin.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? descDesktopMargin.left
																		: DeviceType === "Tablet"
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
																			setAttributes({ btnIconColor: value })
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
																		value={btnIconColor}
																		onChange={(value) =>
																			setAttributes({ btnIconColor: value })
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopPadding.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopPadding.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopPadding.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopPadding.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopMargin.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopMargin.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopMargin.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopMargin.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoButtonDesktopBorderWidth.left
																		: DeviceType === "Tablet"
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
															device={DeviceType}
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
																	DeviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.top
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.right
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.bottom
																		: DeviceType === "Tablet"
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
																	DeviceType === "Desktop"
																		? infoBtnDesktopBorderradiusWidth.left
																		: DeviceType === "Tablet"
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
														onBoxShadowChange={(value) => setAttributes({ boxGlobalBoxShadowValues: value })}
														initialShadowValue={boxGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) => setAttributes({ boxGlobalBoxShadowCssValue: value })}
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
