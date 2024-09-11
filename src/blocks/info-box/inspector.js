import {__} from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
	URLInput
} from '@wordpress/block-editor';

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
	__experimentalHeading as Heading
} from '@wordpress/components';


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
} from "./constants/constants";

import {useState, createRef, useEffect} from "@wordpress/element";


import './editor.scss';
import FBIconPicker from "../../components/icon-picker";
export default function Inspector({attributes, setAttributes, clientId}) {

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
		activePaddingDevice,
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
		width

	} = attributes;


	useEffect(() => {
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "fb-icon-picker-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();

	// Info media remove handler
	const removeInfoMedia = () => {
		setAttributes({
			infoMediaId: '',
			infoMediaUrl: ''
		});
	}

	const iconHandler = (iconName) => {
		setAttributes({icon: iconName})
	}

	/** Start Padding */
	const [previousPadding, setPreviousPadding] = useState(Heading_Desktop_padding);
	/** Function to update all padding values */
	const updateAllPadding = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					Heading_Desktop_padding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					Heading_Tab_padding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					Heading_Mobile_padding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handlePaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activePaddingDevice) {
			case 'desktop':
				setAttributes({Heading_Desktop_padding: {...Heading_Desktop_padding, [direction]: value}});
				break;
			case 'tab':
				setAttributes({Heading_Tab_padding: {...Heading_Tab_padding, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({Heading_Mobile_padding: {...Heading_Mobile_padding, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateAllPadding(value, activePaddingDevice);
		}
	};

	/** Function to handle paddingLink toggle */
	const handlePaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({Heading_Desktop_padding: previousPadding});
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({paddingLink: !paddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPadding(Heading_Desktop_padding);
	}, [Heading_Desktop_padding]);

	/** Function to handle device click for padding */
	const handlePaddingDeviceClick = (device) => {
		setAttributes({activePaddingDevice: device});
	};

	/** Default padding for desktop (using desktop_padding) */
	const padding = `${Heading_Desktop_padding.top}${Heading_padding_units} ${Heading_Desktop_padding.right}${Heading_padding_units} ${Heading_Desktop_padding.bottom}${Heading_padding_units} ${Heading_Desktop_padding.left}${Heading_padding_units}`;
	/** End Padding */


	/** Start Padding */
	const [buttonPreviousPadding, setButtonPreviousPadding] = useState(infoButtonDesktopPadding);
	/** Function to update all padding values */
	const updateButtonPadding = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					infoButtonDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					infoButtonTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					infoButtonMobilePadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleButtonPaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activePaddingDevice) {
			case 'desktop':
				setAttributes({infoButtonDesktopPadding: {...infoButtonDesktopPadding, [direction]: value}});
				break;
			case 'tab':
				setAttributes({infoButtonTabPadding: {...infoButtonTabPadding, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({infoButtonMobilePadding: {...infoButtonMobilePadding, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateButtonPadding(value, activePaddingDevice);
		}
	};

	/** Function to handle paddingLink toggle */
	const handleButtonPaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({infoButtonDesktopPadding: buttonPreviousPadding});
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({paddingLink: !paddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setButtonPreviousPadding(infoButtonDesktopPadding);
	}, [infoButtonDesktopPadding]);

	/** Function to handle device click for padding */
	const handleButtonPaddingDeviceClick = (device) => {
		setAttributes({activePaddingDevice: device});
	};

	/** Default padding for desktop (using desktop_padding) */
	const buttonPadding = `${infoButtonDesktopPadding.top}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.right}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.bottom}${infoButtonPaddingUnits} ${infoButtonDesktopPadding.left}${infoButtonPaddingUnits}`;
	/** End Padding */

	/** Start Padding */
	const [boxPreviousPadding, setBoxPreviousPadding] = useState(infoBoxDesktopPadding);
	/** Function to update all padding values */
	const updateAllBoxPadding = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					infoBoxDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					infoBoxTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					infoBoxMobilePadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleBoxPaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activePaddingDevice) {
			case 'desktop':
				setAttributes({infoBoxDesktopPadding: {...infoBoxDesktopPadding, [direction]: value}});
				break;
			case 'tab':
				setAttributes({infoBoxTabPadding: {...infoBoxTabPadding, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({infoBoxMobilePadding: {...infoBoxMobilePadding, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateAllBoxPadding(value, activePaddingDevice);
		}
	};

	/** Function to handle paddingLink toggle */
	const handleBoxPaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({infoBoxDesktopPadding: boxPreviousPadding});
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({paddingLink: !paddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setBoxPreviousPadding(infoBoxDesktopPadding);
	}, [infoBoxDesktopPadding]);

	/** Function to handle device click for padding */
	const handleBoxPaddingDeviceClick = (device) => {
		setAttributes({activePaddingDevice: device});
	};

	/** Default padding for desktop (using desktop_padding) */
	const boxPadding = `${infoBoxDesktopPadding.top}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.right}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.bottom}${infoBoxPaddingUnits} ${infoBoxDesktopPadding.left}${infoBoxPaddingUnits}`;
	/** End Padding */

	/** Start Padding For Description*/
	const [previousPaddingDescription, setPreviousPaddingDescription] = useState(SubHeadingDesktopPadding);
	/** Function to update all padding values */
	const updateAllDescPadding = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					SubHeadingDesktopPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					SubHeadingTabPadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					SubHeadingMobilePadding: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleDescPaddingInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activePaddingDevice) {
			case 'desktop':
				setAttributes({SubHeadingDesktopPadding: {...SubHeadingDesktopPadding, [direction]: value}});
				break;
			case 'tab':
				setAttributes({SubHeadingTabPadding: {...SubHeadingTabPadding, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({SubHeadingMobilePadding: {...SubHeadingMobilePadding, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all padding values if paddingLink is true */
		if (paddingLink) {
			updateAllDescPadding(value, activePaddingDevice);
		}
	};

	/** Function to handle paddingLink toggle */
	const handleDescPaddingLinkToggle = () => {
		if (!paddingLink) {
			setAttributes({SubHeadingDesktopPadding: previousPaddingDescription});
		}
		/** setPaddingLink(!paddingLink) */
		setAttributes({paddingLink: !paddingLink})
	};

	/** Update previousPadding state when padding changes */
	useEffect(() => {
		setPreviousPaddingDescription(SubHeadingDesktopPadding);
	}, [SubHeadingDesktopPadding]);

	/** Function to handle device click for padding */
	const handleDescPaddingDeviceClick = (device) => {
		setAttributes({activePaddingDevice: device});
	};

	/** Default padding for desktop (using desktop_padding) */
	const descPadding = `${SubHeadingDesktopPadding.top}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.right}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.bottom}${SubHeadingPaddingUnits} ${SubHeadingDesktopPadding.left}${SubHeadingPaddingUnits}`;
	/** End Padding */

	/** Start Margin */
	const [previousMargin, setPreviousMargin] = useState(Heading_Desktop_Margin);
	/** Function to update all margin values */
	const updateAllMargin = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					Heading_Desktop_Margin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					Heading_Tab_Margin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					Heading_Mobile_Margin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch (Heading_Active_Margin_Device) {
			case 'desktop':
				setAttributes({Heading_Desktop_Margin: {...Heading_Desktop_Margin, [direction]: value}});
				break;
			case 'tab':
				setAttributes({Heading_Tab_Margin: {...Heading_Tab_Margin, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({Heading_Mobile_Margin: {...Heading_Mobile_Margin, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (Heading_Margin_Link) {
			updateAllMargin(value, Heading_Active_Margin_Device);
		}
	};

	/** Function to handle marginLink toggle */
	const handleMarginLinkToggle = () => {
		if (!Heading_Margin_Link) {
			setAttributes({Heading_Desktop_Margin: previousMargin});
		}
		/** setmarginLink(!marginLink) */
		setAttributes({Heading_Margin_Link: !Heading_Margin_Link})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setPreviousMargin(Heading_Desktop_Margin);
	}, [Heading_Desktop_Margin]);

	/** Function to handle device click for margin */
	const handleMarginDeviceClick = (device) => {
		setAttributes({Heading_Active_Margin_Device: device});
	};

	/** Default margin for desktop (using desktop_margin) */
	const margin = `${Heading_Desktop_Margin.top}${Heading_padding_units} ${Heading_Desktop_Margin.right}${Heading_padding_units} ${Heading_Desktop_Margin.bottom}${Heading_padding_units} ${Heading_Desktop_Margin.left}${Heading_padding_units}`;
	/** End Margin */

	/** Start Margin */
	const [buttonPreviousMargin, setButtonPreviousMargin] = useState(infoButtonDesktopMargin);
	/** Function to update all margin values */
	const updateButtonMargin = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					infoButtonDesktopMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					infoButtonTabMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					infoButtonMobileMargin: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleButtonMarginInputChange = (e, direction) => {
		const value = e.target.value;
		switch (infoButtonActiveMarginDevice) {
			case 'desktop':
				setAttributes({infoButtonDesktopMargin: {...infoButtonDesktopMargin, [direction]: value}});
				break;
			case 'tab':
				setAttributes({infoButtonTabMargin: {...infoButtonTabMargin, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({infoButtonMobileMargin: {...infoButtonMobileMargin, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all margin values if marginLink is true */
		if (Heading_Margin_Link) {
			updateButtonMargin(value, infoButtonActiveMarginDevice);
		}
	};

	/** Function to handle marginLink toggle */
	const handleButtonMarginLinkToggle = () => {
		if (!Heading_Margin_Link) {
			setAttributes({infoButtonDesktopMargin: buttonPreviousMargin});
		}
		/** setmarginLink(!marginLink) */
		setAttributes({infoButtonMarginLink: !infoButtonMarginLink})
	};

	/** Update previousMargin state when margin changes */
	useEffect(() => {
		setButtonPreviousMargin(infoButtonDesktopMargin);
	}, [infoButtonDesktopMargin]);

	/** Function to handle device click for margin */
	const handleButtonMarginDeviceClick = (device) => {
		setAttributes({infoButtonActiveMarginDevice: device});
	};

	/** Default margin for desktop (using desktop_margin) */
	const buttonMargin = `${infoButtonDesktopMargin.top}${infoButtonMarginUnits} ${infoButtonDesktopMargin.right}${infoButtonMarginUnits} ${infoButtonDesktopMargin.bottom}${infoButtonMarginUnits} ${infoButtonDesktopMargin.left}${infoButtonMarginUnits}`;
	/** End Margin */

	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(Heading_Desktop_Border_Width);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					Heading_Desktop_Border_Width: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					Heading_Tab_Border_Width: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					Heading_Mobile_Border_Width: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activeBorderDevice) {
			case 'desktop':
				setAttributes({Heading_Desktop_Border_Width: {...Heading_Desktop_Border_Width, [direction]: value}});
				break;
			case 'tab':
				setAttributes({Heading_Tab_Border_Width: {...Heading_Tab_Border_Width, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({Heading_Mobile_Border_Width: {...Heading_Mobile_Border_Width, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all padding values if borderLink is true */
		if (borderLink) {
			updateAllBorderWidth(value, activeBorderDevice);
		}
	};

	/** Function to handle borderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!borderLink) {
			setAttributes({Heading_Desktop_Border_Width: previousBorderWidth});
		}
		/** setborderLinkLink(!borderLink) */
		setAttributes({borderLink: !borderLink})
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(Heading_Desktop_Border_Width);
	}, [Heading_Desktop_Border_Width]);

	/** Function to handle device click for Border Width */
	const handleBorderWidthDeviceClick = (device) => {
		setAttributes({activeBorderDevice: device});
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const borderWidth = `${Heading_Desktop_Border_Width.top}${Heading_Border_units} ${Heading_Desktop_Border_Width.right}${Heading_Border_units} ${Heading_Desktop_Border_Width.bottom}${Heading_Border_units} ${Heading_Desktop_Border_Width.left}${Heading_Border_units}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(Heading_Desktop_Border_radius_Width);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					Heading_Desktop_Border_radius_Width: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					Heading_Tab_Border_radius_Width: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					Heading_Mobile_Border_radius_Width: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleBorderRadiusWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activeBorderRadiusDevice) {
			case 'desktop':
				setAttributes({
					Heading_Desktop_Border_radius_Width: {
						...Heading_Desktop_Border_radius_Width,
						[direction]: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					Heading_Tab_Border_radius_Width: {
						...Heading_Tab_Border_radius_Width,
						[direction]: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					Heading_Mobile_Border_radius_Width: {
						...Heading_Mobile_Border_radius_Width,
						[direction]: value
					}
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderRadiusLink is true */
		if (borderRadiusLink) {
			updateAllBorderRadiusWidth(value, activeBorderRadiusDevice);
		}
	};

	/** Function to handle borderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!borderRadiusLink) {
			setAttributes({Heading_Desktop_Border_radius_Width: previousBorderRadiusWidth});
		}
		/** setborderRadiusLinkLink(!borderRadiusLink) */
		setAttributes({borderRadiusLink: !borderRadiusLink})
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(Heading_Desktop_Border_radius_Width);
	}, [Heading_Desktop_Border_radius_Width]);

	/** Function to handle device click for Border Width */
	const handleBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({activeBorderRadiusDevice: device});
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const borderRadiusWidth = `${Heading_Desktop_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Desktop_Border_radius_Width.left}${Heading_Border_radius_units}`;
	/** End Border Radius Width */


	/** Start Box Border Width */
	const [boxPreviousBorderWidth, setBoxPreviousBorderWidth] = useState(infoBoxDesktopBorderWidth);
	/** Function to update all Border Width values */
	const updateBoxBorderWidth = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					infoBoxDesktopBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					infoBoxTabBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					infoBoxMobileBorderWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			default:
				break;
		}
	};

	/** Function to handle input change */
	const handleBoxBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (activeBorderDevice) {
			case 'desktop':
				setAttributes({infoBoxDesktopBorderWidth: {...infoBoxDesktopBorderWidth, [direction]: value}});
				break;
			case 'tab':
				setAttributes({infoBoxTabBorderWidth: {...infoBoxTabBorderWidth, [direction]: value}});
				break;
			case 'mobile':
				setAttributes({infoBoxMobileBorderWidth: {...infoBoxMobileBorderWidth, [direction]: value}});
				break;
			default:
				break;
		}
		/** Update all padding values if borderLink is true */
		if (borderLink) {
			updateBoxBorderWidth(value, activeBorderDevice);
		}
	};

	/** Function to handle borderLink toggle */
	const handleBoxBorderWidthLinkToggle = () => {
		if (!borderLink) {
			setAttributes({infoBoxDesktopBorderWidth: boxPreviousBorderWidth});
		}
		/** setborderLinkLink(!borderLink) */
		setAttributes({borderLink: !borderLink})
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setBoxPreviousBorderWidth(infoBoxDesktopBorderWidth);
	}, [infoBoxDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleBoxBorderWidthDeviceClick = (device) => {
		setAttributes({activeBorderDevice: device});
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const boxBorderWidth = `${infoBoxDesktopBorderWidth.top}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.right}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.bottom}${infoBoxBorderUnits} ${infoBoxDesktopBorderWidth.left}${infoBoxBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [boxPreviousBorderRadiusWidth, setBoxPreviousBorderRadiusWidth] = useState(infoBoxDesktopBorderRadiusWidth);
	/** Function to update all Border Width values */
	const updateBoxBorderRadiusWidth = (value, device) => {
		switch (device) {
			case 'desktop':
				setAttributes({
					infoBoxDesktopBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					infoBoxTabBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					infoBoxMobileBorderRadiusWidth: {
						top: value,
						right: value,
						bottom: value,
						left: value
					}
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
			case 'desktop':
				setAttributes({
					infoBoxDesktopBorderRadiusWidth: {
						...infoBoxDesktopBorderRadiusWidth,
						[direction]: value
					}
				});
				break;
			case 'tab':
				setAttributes({
					infoBoxTabBorderRadiusWidth: {
						...infoBoxTabBorderRadiusWidth,
						[direction]: value
					}
				});
				break;
			case 'mobile':
				setAttributes({
					infoBoxMobileBorderRadiusWidth: {
						...infoBoxMobileBorderRadiusWidth,
						[direction]: value
					}
				});
				break;
			default:
				break;
		}
		/** Update all padding values if borderRadiusLink is true */
		if (borderRadiusLink) {
			updateBoxBorderRadiusWidth(value, activeBorderRadiusDevice);
		}
	};

	/** Function to handle borderRadiusLink toggle */
	const handleBoxBorderRadiusWidthLinkToggle = () => {
		if (!borderRadiusLink) {
			setAttributes({infoBoxDesktopBorderRadiusWidth: boxPreviousBorderRadiusWidth});
		}
		/** setborderRadiusLinkLink(!borderRadiusLink) */
		setAttributes({borderRadiusLink: !borderRadiusLink})
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setBoxPreviousBorderRadiusWidth(infoBoxDesktopBorderRadiusWidth);
	}, [infoBoxDesktopBorderRadiusWidth]);

	/** Function to handle device click for Border Width */
	const handleBoxBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({activeBorderRadiusDevice: device});
	};

	/** Default Border Width for desktop (using Heading_Desktop_Border_Width) */
	const boxBorderRadiusWidth = `${infoBoxDesktopBorderRadiusWidth.top}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.right}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.bottom}${infoBoxBorderRadiusUnits} ${infoBoxDesktopBorderRadiusWidth.left}${infoBoxBorderRadiusUnits}`;
	/** End Border Radius Width */
	/* set default values for the style attributes */
	useEffect(() => {
		if (Heading_Font_Family) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${Heading_Font_Family.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
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
                    padding: ${boxPadding};
                    border: ${infoBoxBorder};
                    border-width: ${boxBorderWidth};
                    border-radius: ${boxBorderRadiusWidth};
                    ${infoBoxBorderColor !== undefined ? `border-color: ${infoBoxBorderColor};` : ''}
                }
                .fb-info-box-content-wrapper.${blockID} .fb-heading {
                    ${Heading_Color !== undefined ? `color: ${Heading_Color};` : ''}
                    ${Heading_Background_Color !== undefined ? `background-color: ${Heading_Background_Color};` : ''}
                    font-family: ${Heading_Font_Family !== 'default' ? Heading_Font_Family : Heading_Font_Family};
                    font-size: ${Heading_Font_Size !== undefined ? `${Heading_Font_Size}${Heading_Font_size_units}` : ''};
                    font-weight: ${Heading_Font_Weight};
                    font-style: ${Heading_Font_Style};
                    text-transform: ${Heading_Text_Transform};
                    text-decoration: ${Heading_Text_Decoration};
                    ${Heading_Letter_Spacing !== undefined ? `letter-spacing: ${Heading_Letter_Spacing}${Heading_Letter_Spacing_units};` : ''}
                    ${Heading_Line_Height !== undefined ? `line-height: ${Heading_Line_Height}${Heading_Line_Height_units};` : ''}
                    transition: all .3s ease-in-out;
                    padding: ${padding};
                    margin: ${margin};
                    border: ${Heading_Border};
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                    ${Heading_Border_Color !== undefined ? `border-color: ${Heading_Border_Color};` : ''}
                }
                .fb-info-box-content-wrapper.${blockID} .fb-heading:hover {
                    ${Heading_Hover_Color !== undefined ? `color: ${Heading_Hover_Color};` : ''}
                    ${Heading_Border_Hover_Color !== undefined ? `border-color: ${Heading_Border_Hover_Color};` : ''}
                }

                @media only screen and (max-width: 1024px) {
                    .fb-info-box-content-wrapper.${blockID} .fb-heading {
                        padding: ${Heading_Tab_padding.top}${Heading_padding_units} ${Heading_Tab_padding.right}${Heading_padding_units} ${Heading_Tab_padding.bottom}${Heading_padding_units} ${Heading_Tab_padding.left}${Heading_padding_units} !important;
                        margin: ${Heading_Tab_Margin.top}${Heading_Margin_Units} ${Heading_Tab_Margin.right}${Heading_Margin_Units} ${Heading_Tab_Margin.bottom}${Heading_Margin_Units} ${Heading_Tab_Margin.left}${Heading_Margin_Units} !important;
                        border-width: ${Heading_Tab_Border_Width.top}${Heading_Border_units} ${Heading_Tab_Border_Width.right}${Heading_Border_units} ${Heading_Tab_Border_Width.bottom}${Heading_Border_units} ${Heading_Tab_Border_Width.left}${Heading_Border_units} !important;
                        border-radius: ${Heading_Tab_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Tab_Border_radius_Width.left}${Heading_Border_radius_units} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-info-box-content-wrapper.${blockID} .fb-heading {
                        padding: ${Heading_Mobile_padding.top}${Heading_padding_units} ${Heading_Mobile_padding.right}${Heading_padding_units} ${Heading_Mobile_padding.bottom}${Heading_padding_units} ${Heading_Mobile_padding.left}${Heading_padding_units} !important;
                        margin: ${Heading_Mobile_Margin.top}${Heading_Margin_Units} ${Heading_Mobile_Margin.right}${Heading_Margin_Units} ${Heading_Mobile_Margin.bottom}${Heading_Margin_Units} ${Heading_Mobile_Margin.left}${Heading_Margin_Units} !important;
                        border-width: ${Heading_Mobile_Border_Width.top}${Heading_Border_units} ${Heading_Mobile_Border_Width.right}${Heading_Border_units} ${Heading_Mobile_Border_Width.bottom}${Heading_Border_units} ${Heading_Mobile_Border_Width.left}${Heading_Border_units} !important;
                        border-radius: ${Heading_Mobile_Border_radius_Width.top}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.right}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.bottom}${Heading_Border_radius_units} ${Heading_Mobile_Border_radius_Width.left}${Heading_Border_radius_units} !important;
                    }
                }

                .fb-info-box-content-wrapper.${blockID} .fb-description {
                	${SubHeadingColor !== undefined ? `color: ${SubHeadingColor};` : ''}
                	font-family: ${SubHeadingFontFamily !== 'default' ? SubHeadingFontFamily : SubHeadingFontFamily};
                    font-size: ${SubHeadingFontSize !== undefined ? `${SubHeadingFontSize}${SubHeadingFontSizeUnits}` : ''};
                    font-weight: ${SubHeadingFontWeight};
                    font-style: ${SubHeadingFontStyle};
                    text-transform: ${SubHeadingTextTransform};
                    text-decoration: ${SubHeadingTextDecoration};
                    padding: ${descPadding};

                }
                .fb-info-box-content-wrapper.${blockID} .fb-description:hover {
                    ${SubHeadingHoverColor !== undefined ? `color: ${SubHeadingHoverColor};` : ''}
                }

                .fb-info-box-content-wrapper.${blockID} .fb-info-btn-wrapper .fb-info-button {
                	${buttonTextColor !== undefined ? `color: ${buttonTextColor};` : ''}
                	${buttonBgColor !== undefined ? `background-color: ${buttonBgColor};` : ''}
                	font-family: ${buttonFontFamily !== 'default' ? buttonFontFamily : buttonFontFamily};
                    font-size: ${buttonFontSize !== undefined ? `${buttonFontSize}${buttonFontSizeUnits}` : ''};
                    font-weight: ${buttonFontWeight};
                    font-style: ${buttonFontStyle};
                    text-transform: ${buttonTextTransform};
                    text-decoration: ${buttonTextDecoration};
                    padding: ${buttonPadding};
                    margin: ${buttonMargin};

                }

                .fb-info-box-content-wrapper.${blockID} .fb-info-btn-wrapper .fb-info-button:hover {
                	${buttonTextHoverColor !== undefined ? `color: ${buttonTextHoverColor};` : ''}
                	${buttonBgHoverColor !== undefined ? `background-color: ${buttonBgHoverColor};` : ''}
                }
                .fb-info-box-content-wrapper.${blockID} .fb-icon-wrapper svg {
                	width: ${attributes.width}px;
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
								{tab.name === 'general' && (
									<>
										<div className="fb-advanced-wrapper">
											<PanelBody
												title={__("Icon/Image", "frontis-block")}
												initialOpen={true}
											>
												<BaseControl
													label={__("Media Alignment", "frontis-block")}
													id="fb-media-alignment"
													className="fb-advanced-alignment"
												>
													<ButtonGroup
														className="fb-advanced-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({wrapperAlignment: item.value})}
																className={`fb-advanced-alignment-single-btn ${Alignment === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

												<div className='fb-image-upload-field-wrapper'>
													<MediaUploadCheck>
														<MediaUpload
															onSelect={(media) => {
																setAttributes({
																	infoMediaId: media['id'],
																	infoMediaUrl: media['url'],
																	infoMediaWidth: media['width'],
																	infoMediaHeight: media['height']
																});
															}}
															type="image"
															value={attributes.infoMediaId}
															render={({open}) => {
																return (
																	<Button
																		className={attributes.infoMediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																		onClick={open}
																	>
																		{attributes.infoMediaId == 0 && __('Select Icon Image', 'ultimate-addons-for-gutenberg-blocks')}
																		{attributes.infoMediaId != 0 &&
																			<ResponsiveWrapper
																				naturalWidth={attributes.infoMediaWidth}
																				naturalHeight={attributes.infoMediaHeight}>
																				<img src={attributes.infoMediaUrl}/>
																			</ResponsiveWrapper>
																		}
																	</Button>
																);
															}}
														/>
													</MediaUploadCheck>
													{attributes.infoMediaId != 0 &&
														<HStack className='editor-post-featured-image__actions'>
															<Button className='editor-post-featured-image__action'
																	onClick={() => removeInfoMedia()}>{__('Remove', 'frontis-block')}</Button>
															<MediaUploadCheck>
																<MediaUpload
																	title={__('Replace image', 'frontis-block')}
																	value={attributes.infoMediaId}
																	onSelect={(media) => {
																		setAttributes({
																			infoMediaId: media['id'],
																			infoMediaUrl: media['url'],
																			infoMediaWidth: media['width'],
																			infoMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	render={({open}) => (
																		<Button
																			className='editor-post-featured-image__action'
																			onClick={open}>{__('Replace', 'frontis-block')}</Button>
																	)}
																/>
															</MediaUploadCheck>
														</HStack>
													}

												</div>
												<FBIconPicker value={icon} setIconHandler={iconHandler}/>
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
													<ButtonGroup
														className="fb-advanced-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({Alignment: item.value})}
																className={`fb-advanced-alignment-single-btn ${Alignment === item.value ? 'active' : ''}`}
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
													<ButtonGroup
														className="fb-setting-tag-inner-wrapper"
													>
														{HEADING.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({Heading_Tag: item.value})}
																className={`fb-setting-tag-single-btn ${Heading_Tag === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

												<TextareaControl
													label={__("Heading Text", "frontis-block")}
													value={Heading_Text}
													onChange={(value) => setAttributes({Heading_Text: value})}
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
													onChange={(value) => setAttributes({Sub_Heading_Switcher: value})}
												/>

												{Sub_Heading_Switcher && (
													<>
														<BaseControl
															label={__("Alignment", "frontis-block")}
															id="fb-media-alignment"
															className="fb-advanced-alignment"
														>
															<ButtonGroup
																className="fb-advanced-alignment-group-btn"
															>
																{TEXT_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({descAlignment: item.value})}
																		className={`fb-advanced-alignment-single-btn ${descAlignment === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>
														<BaseControl className="fb-sub-heading-position">
															<SelectControl
																label={__("Description Position", "frontis-block")}
																value={Sub_Heading_Position}
																options={subheading_POSITION}
																onChange={(value) => setAttributes({Sub_Heading_Position: value})}
															/>
														</BaseControl>

														<TextareaControl
															label={__("Sub Heading Text", "frontis-block")}
															value={Sub_Heading_Text}
															onChange={(value) => setAttributes({Sub_Heading_Text: value})}
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
													onChange={(value) => setAttributes({info_Button_Switcher: value})}
												/>

												{info_Button_Switcher && (
													<>
														<BaseControl
															label={__("Alignment", "frontis-block")}
															id="fb-media-alignment"
															className="fb-advanced-alignment"
														>
															<ButtonGroup
																className="fb-advanced-alignment-group-btn"
															>
																{TEXT_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({buttonAlignment: item.value})}
																		className={`fb-advanced-alignment-single-btn ${buttonAlignment === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>
														<TextareaControl
															label={__("Button Text", "frontis-block")}
															value={info_Button_Text}
															onChange={(value) => setAttributes({info_Button_Text: value})}
															className="fb-info-button-text"
														/>
														<URLInput
															value={info_Button_Link}
															onChange={(value, post) => {
																// Check if the URL has a protocol (http or https), otherwise prepend it
																const formattedLink = value.startsWith('http://') || value.startsWith('https://')
																	? value
																	: `https://${value}`;

																setAttributes({
																	info_Button_Link: formattedLink,
																	info_Button_Text: (post && post.title) || info_Button_Text
																});
															}}
														/>
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
											<ColorPicker
												color={infoBoxBg}
												onChange={(value) => setAttributes({infoBoxBg: value})}
											/>
											{/*Spacing*/}
											<Heading>
												Spacing
											</Heading>
											{/*Padding control*/}
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Padding", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activePaddingDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleBoxPaddingDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activePaddingDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleBoxPaddingDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activePaddingDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleBoxPaddingDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({infoBoxPaddingUnits: item.value})}
																		className={`fb-setting-units-type-switcher ${infoBoxPaddingUnits === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.top : activePaddingDevice === 'tab' ? infoBoxTabPadding.top : infoBoxMobilePadding.top}
																onChange={(e) => handleBoxPaddingInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.right : activePaddingDevice === 'tab' ? infoBoxTabPadding.right : infoBoxMobilePadding.right}
																onChange={(e) => handleBoxPaddingInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.bottom : activePaddingDevice === 'tab' ? infoBoxTabPadding.bottom : infoBoxMobilePadding.bottom}
																onChange={(e) => handleBoxPaddingInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activePaddingDevice === 'desktop' ? infoBoxDesktopPadding.left : activePaddingDevice === 'tab' ? infoBoxTabPadding.left : infoBoxMobilePadding.left}
																onChange={(e) => handleBoxPaddingInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${paddingLink ? 'is-checked' : ''}`}
																onClick={handleBoxPaddingLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
											{/*Margin control*/}
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Margin", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${Heading_Active_Margin_Device === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device ${Heading_Active_Margin_Device === 'tab' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${Heading_Active_Margin_Device === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({Heading_Margin_Units: item.value})}
																		className={`fb-setting-units-type-switcher ${Heading_Margin_Units === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.top : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.top : Heading_Mobile_Margin.top}
																onChange={(e) => handleMarginInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.right : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.right : Heading_Mobile_Margin.right}
																onChange={(e) => handleMarginInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.bottom : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.bottom : Heading_Mobile_Margin.bottom}
																onChange={(e) => handleMarginInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.left : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.left : Heading_Mobile_Margin.left}
																onChange={(e) => handleMarginInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${Heading_Margin_Link ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${Heading_Margin_Link ? 'is-checked' : ''}`}
																onClick={handleMarginLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
											{/*Border*/}
											<Heading>
												Border
											</Heading>
											<SelectControl
												label={__("Border Style", "frontis-block")}
												value={Heading_Border}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({infoBoxBorder: value})}
											/>

											<BaseControl
												label={__("Border Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({infoBoxBorderColorSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${infoBoxBorderColorSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{infoBoxBorderColorSwitcher === 'normal' && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={Heading_Border_Color}
																			onChange={(value) => setAttributes({infoBoxBorderColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={Heading_Border_Color}
																			onChange={(value) => setAttributes({infoBoxBorderColor: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{infoBoxBorderColorSwitcher === 'hover' && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={infoBoxBorderHoverColor}
																			onChange={(value) => setAttributes({infoBoxBorderHoverColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-hover-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={Heading_Border_Hover_Color}
																			onChange={(value) => setAttributes({Heading_Border_Hover_Color: value})}
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
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Border Width", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activeBorderDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleBorderWidthDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activeBorderDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleBorderWidthDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activeBorderDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleBorderWidthDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({Heading_Border_units: item.value})}
																		className={`fb-setting-units-type-switcher ${Heading_Border_units === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>

													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.top : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.top : infoBoxMobileBorderWidth.top}
																onChange={(e) => handleBoxBorderWidthInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.right : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.right : infoBoxMobileBorderWidth.right}
																onChange={(e) => handleBoxBorderWidthInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.bottom : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.bottom : infoBoxMobileBorderWidth.bottom}
																onChange={(e) => handleBoxBorderWidthInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activeBorderDevice === 'desktop' ? infoBoxDesktopBorderWidth.left : activeBorderDevice === 'tab' ? infoBoxTabBorderWidth.left : infoBoxMobileBorderWidth.left}
																onChange={(e) => handleBoxBorderWidthInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${borderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${borderLink ? 'is-checked' : ''}`}
																onClick={handleBoxBorderWidthLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>

											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Border radius Width */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Border Radius Width", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activeBorderRadiusDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleBoxBorderRadiusWidthDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activeBorderRadiusDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleBoxBorderRadiusWidthDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activeBorderRadiusDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleBoxBorderRadiusWidthDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({infoBoxBorderRadiusUnits: item.value})}
																		className={`fb-setting-units-type-switcher ${infoBoxBorderRadiusUnits === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.top : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.top : infoBoxMobileBorderRadiusWidth.top}
																onChange={(e) => handleBoxBorderRadiusWidthInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.right : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.right : infoBoxMobileBorderRadiusWidth.right}
																onChange={(e) => handleBoxBorderRadiusWidthInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.bottom : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.bottom : infoBoxMobileBorderRadiusWidth.bottom}
																onChange={(e) => handleBoxBorderRadiusWidthInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activeBorderRadiusDevice === 'desktop' ? infoBoxDesktopBorderRadiusWidth.left : activeBorderRadiusDevice === 'tab' ? infoBoxTabBorderRadiusWidth.left : infoBoxMobileBorderRadiusWidth.left}
																onChange={(e) => handleBoxBorderRadiusWidthInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${borderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${borderRadiusLink ? 'is-checked' : ''}`}
																onClick={handleBoxBorderRadiusWidthLinkToggle}
															>
                                                            </span>
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
											<RangeControl
												__nextHasNoMarginBottom
												label="Width"
												value={attributes.width}
												onChange={(value) => setAttributes({width: value})}
												min={0}
												max={500}
											/>
											<RangeControl
												__nextHasNoMarginBottom
												label="Height"
												value={attributes.height}
												onChange={(value) => setAttributes({height: value})}
												min={0}
												max={500}
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
													popoverProps={{placement: 'bottom-start'}}
													renderToggle={({isOpen, onToggle}) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__("Toggle Typography Settings", "frontis-block")}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon icon="edit"
																	  className="fb-setting-typography-icon"/>
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
																		onChange={(value) => setAttributes({Heading_Font_Family: value})}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>{__("Font Size", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup
																				className="fb-setting-fontsize-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({Heading_Font_size_units: item.value})}
																						className={`fb-setting-fontsize-units-switcher ${Heading_Font_size_units === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={Heading_Font_Size}
																			onChange={(value) => setAttributes({Heading_Font_Size: value})}
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
																				value: "700"
																			},
																			{
																				label: __("100", "frontis-block"),
																				value: "100"
																			},
																			{
																				label: __("200", "frontis-block"),
																				value: "200"
																			},
																			{
																				label: __("300", "frontis-block"),
																				value: "300"
																			},
																			{
																				label: __("400", "frontis-block"),
																				value: "400"
																			},
																			{
																				label: __("500", "frontis-block"),
																				value: "500"
																			},
																			{
																				label: __("600", "frontis-block"),
																				value: "600"
																			},
																			{
																				label: __("700", "frontis-block"),
																				value: "700"
																			},
																			{
																				label: __("800", "frontis-block"),
																				value: "800"
																			},
																			{
																				label: __("900", "frontis-block"),
																				value: "900"
																			},
																		]}
																		value={Heading_Font_Weight}
																		onChange={(value) => setAttributes({Heading_Font_Weight: value})}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "normal"
																			},
																			{
																				label: __("Normal", "frontis-block"),
																				value: "normal"
																			},
																			{
																				label: __("Italic", "frontis-block"),
																				value: "italic"
																			},
																			{
																				label: __("Oblique", "frontis-block"),
																				value: "oblique"
																			},
																		]}
																		value={Heading_Font_Style}
																		onChange={(value) => setAttributes({Heading_Font_Style: value})}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__("Text Transform", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("Capitalize", "frontis-block"),
																				value: "capitalize"
																			},
																			{
																				label: __("Uppercase", "frontis-block"),
																				value: "uppercase"
																			},
																			{
																				label: __("Lowercase", "frontis-block"),
																				value: "lowercase"
																			},
																		]}
																		value={Heading_Text_Transform}
																		onChange={(value) => setAttributes({Heading_Text_Transform: value})}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__("Text Decoration", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("Underline", "frontis-block"),
																				value: "underline"
																			},
																			{
																				label: __("Overline", "frontis-block"),
																				value: "overline"
																			},
																			{
																				label: __("Line Through", "frontis-block"),
																				value: "line-through"
																			},
																		]}
																		value={Heading_Text_Decoration}
																		onChange={(value) => setAttributes({Heading_Text_Decoration: value})}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>{__("Letter Spacing", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup
																				className="fb-setting-letterspacing-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({Heading_Letter_Spacing_units: item.value})}
																						className={`fb-setting-letterspacing-units-switcher ${Heading_Letter_Spacing_units === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Letter_Spacing}
																		onChange={(value) => setAttributes({Heading_Letter_Spacing: value === 0 ? undefined : value})}
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
																			<span>{__("Line Height", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup
																				className="fb-setting-lineheight-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({Heading_Line_Height_units: item.value})}
																						className={`fb-setting-lineheight-units-switcher ${Heading_Line_Height_units === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Line_Height}
																		onChange={(value) => setAttributes({Heading_Line_Height: value === 1 ? undefined : value})}
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
															onClick={() => setAttributes({Heading_Color_Switcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${Heading_Color_Switcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{Heading_Color_Switcher === 'normal' && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={Heading_Color}
																			onChange={(value) => setAttributes({Heading_Color: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={Heading_Color}
																			onChange={(value) => setAttributes({Heading_Color: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{Heading_Color_Switcher === 'hover' && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={Heading_Hover_Color}
																			onChange={(value) => setAttributes({Heading_Hover_Color: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-hover-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={Heading_Hover_Color}
																			onChange={(value) => setAttributes({Heading_Hover_Color: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{/*Spacing*/}
											<Heading>
												Spacing
											</Heading>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Padding", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activePaddingDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handlePaddingDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activePaddingDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handlePaddingDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activePaddingDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handlePaddingDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({Heading_padding_units: item.value})}
																		className={`fb-setting-units-type-switcher ${Heading_padding_units === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activePaddingDevice === 'desktop' ? Heading_Desktop_padding.top : activePaddingDevice === 'tab' ? Heading_Tab_padding.top : Heading_Mobile_padding.top}
																onChange={(e) => handlePaddingInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activePaddingDevice === 'desktop' ? Heading_Desktop_padding.right : activePaddingDevice === 'tab' ? Heading_Tab_padding.right : Heading_Mobile_padding.right}
																onChange={(e) => handlePaddingInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activePaddingDevice === 'desktop' ? Heading_Desktop_padding.bottom : activePaddingDevice === 'tab' ? Heading_Tab_padding.bottom : Heading_Mobile_padding.bottom}
																onChange={(e) => handlePaddingInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activePaddingDevice === 'desktop' ? Heading_Desktop_padding.left : activePaddingDevice === 'tab' ? Heading_Tab_padding.left : Heading_Mobile_padding.left}
																onChange={(e) => handlePaddingInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${paddingLink ? 'is-checked' : ''}`}
																onClick={handlePaddingLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Margin", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${Heading_Active_Margin_Device === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device ${Heading_Active_Margin_Device === 'tab' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${Heading_Active_Margin_Device === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({Heading_Margin_Units: item.value})}
																		className={`fb-setting-units-type-switcher ${Heading_Margin_Units === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.top : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.top : Heading_Mobile_Margin.top}
																onChange={(e) => handleMarginInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.right : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.right : Heading_Mobile_Margin.right}
																onChange={(e) => handleMarginInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.bottom : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.bottom : Heading_Mobile_Margin.bottom}
																onChange={(e) => handleMarginInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.left : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.left : Heading_Mobile_Margin.left}
																onChange={(e) => handleMarginInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${Heading_Margin_Link ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${Heading_Margin_Link ? 'is-checked' : ''}`}
																onClick={handleMarginLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
											{/*Border*/}
											<Heading>
												Border
											</Heading>
											<SelectControl
												label={__("Border Style", "frontis-block")}
												value={Heading_Border}
												options={BORDER_STYLES}
												onChange={(value) => setAttributes({Heading_Border: value})}
											/>

											<BaseControl
												label={__("Border Color", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({Heading_Border_Color_Switcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${Heading_Border_Color_Switcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{Heading_Border_Color_Switcher === 'normal' && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={Heading_Border_Color}
																			onChange={(value) => setAttributes({Heading_Border_Color: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={Heading_Border_Color}
																			onChange={(value) => setAttributes({Heading_Border_Color: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{Heading_Border_Color_Switcher === 'hover' && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={Heading_Border_Hover_Color}
																			onChange={(value) => setAttributes({Heading_Border_Hover_Color: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-hover-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={Heading_Border_Hover_Color}
																			onChange={(value) => setAttributes({Heading_Border_Hover_Color: value})}
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
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Border Width", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activeBorderDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleBorderWidthDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activeBorderDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleBorderWidthDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activeBorderDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleBorderWidthDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({Heading_Border_units: item.value})}
																		className={`fb-setting-units-type-switcher ${Heading_Border_units === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>

													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.top : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.top : Heading_Mobile_Border_Width.top}
																onChange={(e) => handleBorderWidthInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.right : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.right : Heading_Mobile_Border_Width.right}
																onChange={(e) => handleBorderWidthInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.bottom : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.bottom : Heading_Mobile_Border_Width.bottom}
																onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activeBorderDevice === 'desktop' ? Heading_Desktop_Border_Width.left : activeBorderDevice === 'tab' ? Heading_Tab_Border_Width.left : Heading_Mobile_Border_Width.left}
																onChange={(e) => handleBorderWidthInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${borderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${borderLink ? 'is-checked' : ''}`}
																onClick={handleBorderWidthLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>

											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Border radius Width */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Border Radius Width", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activeBorderRadiusDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleBorderRadiusWidthDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activeBorderRadiusDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleBorderRadiusWidthDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activeBorderRadiusDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleBorderRadiusWidthDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({Heading_Border_radius_units: item.value})}
																		className={`fb-setting-units-type-switcher ${Heading_Border_radius_units === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.top : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.top : Heading_Mobile_Border_radius_Width.top}
																onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.right : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.right : Heading_Mobile_Border_radius_Width.right}
																onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.bottom : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.bottom : Heading_Mobile_Border_radius_Width.bottom}
																onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activeBorderRadiusDevice === 'desktop' ? Heading_Desktop_Border_radius_Width.left : activeBorderRadiusDevice === 'tab' ? Heading_Tab_Border_radius_Width.left : Heading_Mobile_Border_radius_Width.left}
																onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${borderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${borderRadiusLink ? 'is-checked' : ''}`}
																onClick={handleBorderRadiusWidthLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>

										</PanelBody>
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
													popoverProps={{placement: 'bottom-start'}}
													renderToggle={({isOpen, onToggle}) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__("Toggle Typography Settings", "frontis-block")}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon icon="edit"
																	  className="fb-setting-typography-icon"/>
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
																		onChange={(value) => setAttributes({SubHeadingFontFamily: value})}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>{__("Font Size", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup
																				className="fb-setting-fontsize-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({SubHeadingFontSizeUnits: item.value})}
																						className={`fb-setting-fontsize-units-switcher ${SubHeadingFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={SubHeadingFontSize}
																			onChange={(value) => setAttributes({SubHeadingFontSize: value})}
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
																				value: "700"
																			},
																			{
																				label: __("100", "frontis-block"),
																				value: "100"
																			},
																			{
																				label: __("200", "frontis-block"),
																				value: "200"
																			},
																			{
																				label: __("300", "frontis-block"),
																				value: "300"
																			},
																			{
																				label: __("400", "frontis-block"),
																				value: "400"
																			},
																			{
																				label: __("500", "frontis-block"),
																				value: "500"
																			},
																			{
																				label: __("600", "frontis-block"),
																				value: "600"
																			},
																			{
																				label: __("700", "frontis-block"),
																				value: "700"
																			},
																			{
																				label: __("800", "frontis-block"),
																				value: "800"
																			},
																			{
																				label: __("900", "frontis-block"),
																				value: "900"
																			},
																		]}
																		value={SubHeadingFontWeight}
																		onChange={(value) => setAttributes({SubHeadingFontWeight: value})}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "normal"
																			},
																			{
																				label: __("Normal", "frontis-block"),
																				value: "normal"
																			},
																			{
																				label: __("Italic", "frontis-block"),
																				value: "italic"
																			},
																			{
																				label: __("Oblique", "frontis-block"),
																				value: "oblique"
																			},
																		]}
																		value={SubHeadingFontStyle}
																		onChange={(value) => setAttributes({SubHeadingFontStyle: value})}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__("Text Transform", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("Capitalize", "frontis-block"),
																				value: "capitalize"
																			},
																			{
																				label: __("Uppercase", "frontis-block"),
																				value: "uppercase"
																			},
																			{
																				label: __("Lowercase", "frontis-block"),
																				value: "lowercase"
																			},
																		]}
																		value={SubHeadingTextTransform}
																		onChange={(value) => setAttributes({SubHeadingTextTransform: value})}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__("Text Decoration", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("Underline", "frontis-block"),
																				value: "underline"
																			},
																			{
																				label: __("Overline", "frontis-block"),
																				value: "overline"
																			},
																			{
																				label: __("Line Through", "frontis-block"),
																				value: "line-through"
																			},
																		]}
																		value={SubHeadingTextDecoration}
																		onChange={(value) => setAttributes({SubHeadingTextDecoration: value})}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>{__("Letter Spacing", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup
																				className="fb-setting-letterspacing-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({Heading_Letter_Spacing_units: item.value})}
																						className={`fb-setting-letterspacing-units-switcher ${Heading_Letter_Spacing_units === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Letter_Spacing}
																		onChange={(value) => setAttributes({Heading_Letter_Spacing: value === 0 ? undefined : value})}
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
																			<span>{__("Line Height", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup
																				className="fb-setting-lineheight-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({Heading_Line_Height_units: item.value})}
																						className={`fb-setting-lineheight-units-switcher ${Heading_Line_Height_units === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={Heading_Line_Height}
																		onChange={(value) => setAttributes({Heading_Line_Height: value === 1 ? undefined : value})}
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
															onClick={() => setAttributes({SubHeadingColorSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${SubHeadingColorSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{SubHeadingColorSwitcher === 'normal' && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={SubHeadingColor}
																			onChange={(value) => setAttributes({SubHeadingColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={SubHeadingColor}
																			onChange={(value) => setAttributes({SubHeadingColor: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{SubHeadingColorSwitcher === 'hover' && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={SubHeadingHoverColor}
																			onChange={(value) => setAttributes({SubHeadingHoverColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-hover-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={SubHeadingHoverColor}
																			onChange={(value) => setAttributes({SubHeadingHoverColor: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}
											{/*Spacing*/}
											<Heading>
												Spacing
											</Heading>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Padding", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activePaddingDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleDescPaddingDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activePaddingDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleDescPaddingDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activePaddingDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleDescPaddingDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({SubHeadingPaddingUnits: item.value})}
																		className={`fb-setting-units-type-switcher ${SubHeadingPaddingUnits === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.top : activePaddingDevice === 'tab' ? SubHeadingTabPadding.top : SubHeadingMobilePadding.top}
																onChange={(e) => handleDescPaddingInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.right : activePaddingDevice === 'tab' ? SubHeadingTabPadding.right : SubHeadingMobilePadding.right}
																onChange={(e) => handleDescPaddingInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.bottom : activePaddingDevice === 'tab' ? SubHeadingTabPadding.bottom : SubHeadingMobilePadding.bottom}
																onChange={(e) => handleDescPaddingInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activePaddingDevice === 'desktop' ? SubHeadingDesktopPadding.left : activePaddingDevice === 'tab' ? SubHeadingTabPadding.left : SubHeadingMobilePadding.left}
																onChange={(e) => handleDescPaddingInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${paddingLink ? 'is-checked' : ''}`}
																onClick={handleDescPaddingLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Margin", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${Heading_Active_Margin_Device === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${Heading_Active_Margin_Device === 'tab' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${Heading_Active_Margin_Device === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleMarginDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({Heading_Margin_Units: item.value})}
																		className={`fb-setting-units-type-switcher ${Heading_Margin_Units === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.top : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.top : Heading_Mobile_Margin.top}
																onChange={(e) => handleMarginInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.right : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.right : Heading_Mobile_Margin.right}
																onChange={(e) => handleMarginInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.bottom : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.bottom : Heading_Mobile_Margin.bottom}
																onChange={(e) => handleMarginInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={Heading_Active_Margin_Device === 'desktop' ? Heading_Desktop_Margin.left : Heading_Active_Margin_Device === 'tab' ? Heading_Tab_Margin.left : Heading_Mobile_Margin.left}
																onChange={(e) => handleMarginInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${Heading_Margin_Link ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${Heading_Margin_Link ? 'is-checked' : ''}`}
																onClick={handleMarginLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>
										{/*Button Style*/}
										<PanelBody
											title={__("Button", "frontis-block")}
											className="fb-info-box-button-setting-wrapper"
											initialOpen={false}>
											<BaseControl
												label={__("Typography", "frontis-block")}
												className="fb-setting-typography"
											>
												<Dropdown
													className="fb-setting-typography-icon-dropdown"
													contentClassName="fb-setting-typography-dropdown-content"
													popoverProps={{placement: 'bottom-start'}}
													renderToggle={({isOpen, onToggle}) => (
														<Button
															variant="primary"
															onClick={onToggle}
															aria-expanded={isOpen}
															aria-label={__("Toggle Typography Settings", "frontis-block")}
															className="fb-setting-typography-icon-btn"
														>
															<Dashicon icon="edit"
																	  className="fb-setting-typography-icon"/>
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
																		onChange={(value) => setAttributes({buttonFontFamily: value})}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>{__("Font Size", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup
																				className="fb-setting-fontsize-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({buttonFontSizeUnits: item.value})}
																						className={`fb-setting-fontsize-units-switcher ${buttonFontSizeUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={Heading_Font_Size}
																			onChange={(value) => setAttributes({buttonFontSize: value})}
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
																				value: "700"
																			},
																			{
																				label: __("100", "frontis-block"),
																				value: "100"
																			},
																			{
																				label: __("200", "frontis-block"),
																				value: "200"
																			},
																			{
																				label: __("300", "frontis-block"),
																				value: "300"
																			},
																			{
																				label: __("400", "frontis-block"),
																				value: "400"
																			},
																			{
																				label: __("500", "frontis-block"),
																				value: "500"
																			},
																			{
																				label: __("600", "frontis-block"),
																				value: "600"
																			},
																			{
																				label: __("700", "frontis-block"),
																				value: "700"
																			},
																			{
																				label: __("800", "frontis-block"),
																				value: "800"
																			},
																			{
																				label: __("900", "frontis-block"),
																				value: "900"
																			},
																		]}
																		value={buttonFontWeight}
																		onChange={(value) => setAttributes({buttonFontWeight: value})}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "normal"
																			},
																			{
																				label: __("Normal", "frontis-block"),
																				value: "normal"
																			},
																			{
																				label: __("Italic", "frontis-block"),
																				value: "italic"
																			},
																			{
																				label: __("Oblique", "frontis-block"),
																				value: "oblique"
																			},
																		]}
																		value={buttonFontStyle}
																		onChange={(value) => setAttributes({buttonFontStyle: value})}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__("Text Transform", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("Capitalize", "frontis-block"),
																				value: "capitalize"
																			},
																			{
																				label: __("Uppercase", "frontis-block"),
																				value: "uppercase"
																			},
																			{
																				label: __("Lowercase", "frontis-block"),
																				value: "lowercase"
																			},
																		]}
																		value={buttonTextTransform}
																		onChange={(value) => setAttributes({buttonTextTransform: value})}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__("Text Decoration", "frontis-block")}
																		options={[
																			{
																				label: __("Default", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("None", "frontis-block"),
																				value: "none"
																			},
																			{
																				label: __("Underline", "frontis-block"),
																				value: "underline"
																			},
																			{
																				label: __("Overline", "frontis-block"),
																				value: "overline"
																			},
																			{
																				label: __("Line Through", "frontis-block"),
																				value: "line-through"
																			},
																		]}
																		value={buttonTextDecoration}
																		onChange={(value) => setAttributes({buttonTextDecoration: value})}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>{__("Letter Spacing", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup
																				className="fb-setting-letterspacing-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({buttonLetterSpacingUnits: item.value})}
																						className={`fb-setting-letterspacing-units-switcher ${buttonLetterSpacingUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={buttonLetterSpacing}
																		onChange={(value) => setAttributes({buttonLetterSpacing: value === 0 ? undefined : value})}
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
																			<span>{__("Line Height", "frontis-block")}</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup
																				className="fb-setting-lineheight-units-wrap">
																				{separator_UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() => setAttributes({buttonLineHeightUnits: item.value})}
																						className={`fb-setting-lineheight-units-switcher ${buttonLineHeightUnits === item.value ? 'active' : ''}`}
																					>
																						{item.label}
																					</Button>
																				))}
																			</ButtonGroup>
																		</div>
																	</div>
																	<RangeControl
																		value={buttonLineHeight}
																		onChange={(value) => setAttributes({buttonLineHeight: value === 1 ? undefined : value})}
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
															onClick={() => setAttributes({buttonColorSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${buttonColorSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{buttonColorSwitcher === 'normal' && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={buttonTextColor}
																			onChange={(value) => setAttributes({buttonTextColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={buttonTextColor}
																			onChange={(value) => setAttributes({buttonTextColor: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{buttonColorSwitcher === 'hover' && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={buttonTextHoverColor}
																			onChange={(value) => setAttributes({buttonTextHoverColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-hover-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={buttonTextHoverColor}
																			onChange={(value) => setAttributes({buttonTextHoverColor: value})}
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
															onClick={() => setAttributes({buttonBgColorSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${buttonBgColorSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{buttonColorSwitcher === 'normal' && (
												<BaseControl
													label={__("Nomal Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-normal-color">
																		<ColorPicker
																			color={buttonBgColor}
																			onChange={(value) => setAttributes({buttonBgColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={buttonBgColor}
																			onChange={(value) => setAttributes({buttonBgColor: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{buttonColorSwitcher === 'hover' && (
												<BaseControl
													label={__("Hover Color", "frontis-block")}
													className="fb-setting-color-setting-wrapper"
												>
													<Dropdown
														className="fb-setting-color-setting-icon-dropdown"
														contentClassName="fb-setting-color-setting-icon-dropdown-content"
														popoverProps={{placement: 'bottom-start'}}
														renderToggle={({isOpen, onToggle}) => (
															<Button
																variant="primary"
																onClick={onToggle}
																aria-expanded={isOpen}
																aria-label={__("Toggle Typography Settings", "frontis-block")}
																className="fb-setting-color-setting-icon-btn"
															>
																<Dashicon icon="color-picker"
																		  className="fb-setting-color-setting-icon"/>
															</Button>
														)}
														renderContent={() => (
															<div className="fb-setting-color-setting-icon-popup">
																<BaseControl
																	className="fb-setting-color-setting-icon-popup-inner">
																	<div className="fb-setting-hover-color">
																		<ColorPicker
																			color={buttonBgHoverColor}
																			onChange={(value) => setAttributes({buttonBgHoverColor: value})}
																			enableAlpha={true}
																		/>
																		<div
																			className="fb-setting-hover-color-label">{__("Default Colors", "frontis-block")}</div>
																		<ColorPalette
																			colors={[
																				{color: '#F72585'},
																				{color: '#7209B7'},
																				{color: '#3A0CA3'},
																				{color: '#4361EE'},
																				{color: '#4CC9F0'},
																			]}
																			disableCustomColors={true}
																			value={buttonBgHoverColor}
																			onChange={(value) => setAttributes({buttonBgHoverColor: value})}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{/*Spacing*/}
											<Heading>
												Spacing
											</Heading>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Padding */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Padding", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${activePaddingDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleButtonPaddingDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device  ${activePaddingDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleButtonPaddingDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${activePaddingDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleButtonPaddingDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({infoButtonPaddingUnits: item.value})}
																		className={`fb-setting-units-type-switcher ${infoButtonPaddingUnits === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={activePaddingDevice === 'desktop' ? infoButtonDesktopPadding.top : activePaddingDevice === 'tab' ? infoButtonTabPadding.top : infoButtonMobilePadding.top}
																onChange={(e) => handleButtonPaddingInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={activePaddingDevice === 'desktop' ? infoButtonDesktopPadding.right : activePaddingDevice === 'tab' ? infoButtonTabPadding.right : infoButtonMobilePadding.right}
																onChange={(e) => handleButtonPaddingInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={activePaddingDevice === 'desktop' ? infoButtonDesktopPadding.bottom : activePaddingDevice === 'tab' ? infoButtonTabPadding.bottom : infoButtonMobilePadding.bottom}
																onChange={(e) => handleButtonPaddingInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={activePaddingDevice === 'desktop' ? infoButtonDesktopPadding.left : activePaddingDevice === 'tab' ? infoButtonTabPadding.left : infoButtonMobilePadding.left}
																onChange={(e) => handleButtonPaddingInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${paddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${paddingLink ? 'is-checked' : ''}`}
																onClick={handlePaddingLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
											<div className="fb-setting-spacing-container">
												<div className="fb-setting-spacing-inner-container">
													{/* Margin */}
													<div className="fb-setting-spacing-label-container">
														<div className="fb-setting-label-wrapper">
															<p className="fb-setting-label-text">{__("Margin", "frontis-block")}</p>
															<div className="fb-responsive-device-wrapper">
																<button
																	className={`fb-responsive-desktop-device ${infoButtonActiveMarginDevice === 'desktop' ? 'active' : ''}`}
																	onClick={() => handleButtonMarginDeviceClick('desktop')}>
																	<svg width="8" height="7" viewBox="0 0 8 7">
																		<path
																			d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-tablet-device ${infoButtonActiveMarginDevice === 'tab' ? 'active' : ''}`}
																	onClick={() => handleButtonMarginDeviceClick('tab')}>
																	<svg width="6" height="7" viewBox="0 0 6 7">
																		<path
																			d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
																	</svg>
																</button>
																<button
																	className={`fb-responsive-mobile-device ${infoButtonActiveMarginDevice === 'mobile' ? 'active' : ''}`}
																	onClick={() => handleButtonMarginDeviceClick('mobile')}>
																	<svg width="4" height="7" viewBox="0 0 4 7">
																		<path
																			d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
																	</svg>
																</button>
															</div>
														</div>
														<div className="fb-setting-units-type">
															<ButtonGroup className="fb-setting-units-type-wrap">
																{separator_UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({infoButtonMarginUnits: item.value})}
																		className={`fb-setting-units-type-switcher ${infoButtonMarginUnits === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</div>
													</div>
													<div className="fb-setting-spacing-input-container">
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Top", "frontis-block")}</label>
															<input
																type="number"
																name="top"
																value={infoButtonActiveMarginDevice === 'desktop' ? infoButtonDesktopMargin.top : infoButtonActiveMarginDevice === 'tab' ? infoButtonTabMargin.top : infoButtonMobileMargin.top}
																onChange={(e) => handleButtonMarginInputChange(e, 'top')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Right", "frontis-block")}</label>
															<input
																type="number"
																name="right"
																value={infoButtonActiveMarginDevice === 'desktop' ? infoButtonDesktopMargin.right : infoButtonActiveMarginDevice === 'tab' ? infoButtonTabMargin.right : infoButtonMobileMargin.right}
																onChange={(e) => handleButtonMarginInputChange(e, 'right')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Bottom", "frontis-block")}</label>
															<input
																type="number"
																name="bottom"
																value={infoButtonActiveMarginDevice === 'desktop' ? infoButtonDesktopMargin.bottom : infoButtonActiveMarginDevice === 'tab' ? infoButtonTabMargin.bottom : infoButtonMobileMargin.bottom}
																onChange={(e) => handleButtonMarginInputChange(e, 'bottom')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label
																className="fb-setting-spacing-input-label">{__("Left", "frontis-block")}</label>
															<input
																type="number"
																name="left"
																value={infoButtonActiveMarginDevice === 'desktop' ? infoButtonDesktopMargin.left : infoButtonActiveMarginDevice === 'tab' ? infoButtonTabMargin.left : infoButtonMobileMargin.left}
																onChange={(e) => handleButtonMarginInputChange(e, 'left')}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label"></label>
															<span
																className={`dashicons ${infoButtonMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${infoButtonMarginLink ? 'is-checked' : ''}`}
																onClick={handleButtonMarginLinkToggle}
															>
                                                            </span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>
									</>
								)}
								{tab.name === "advance" && (
									<>
										<p>Advanced settings</p>
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
