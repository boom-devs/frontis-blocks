import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
	ColorPicker,
	ColorPalette,
} from "@wordpress/components";

/**
 * Internal depencencies
 */
import {
	NORMAL_HOVER,
	UNIT_TYPES,
	TEXT_ALIGN,
	ICON_ALIGN,
	FONT_FAMILYS,
	BORDER_STYLES,
	ICON_POSITION,
	BUTTONS_DIRECTION,
} from "./constants/constants";

import { useState, useEffect, useMemo } from "@wordpress/element";
import FB_Color from "@Components/color";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
		ButtonText,
		ButtonUrl,
		ButtonTargetUrl,
		ButtonWidth,
		ButtonWidthWidthUnits,
		ButtonFontFamily,
		ButtonFontSize,
		ButtonFontSizeUnits,
		ButtonFontWeight,
		ButtonFontStyle,
		ButtonTextTransform,
		ButtonTextDecoration,
		ButtonLetterSpacing,
		ButtonLetterSpacingUnits,
		ButtonLineHeight,
		ButtonLineHeightUnits,
		ButtonColorSwitcher,
		ButtonColor,
		ButtonHoverColor,
		ButtonBgColorSwitcher,
		ButtonBgColor,
		ButtonBgHoverColor,
		ButtonBorder,
		ButtonBorderColor,
		ButtonBorderHoverColor,
		ButtonBorderColorSwitcher,
		ButtonBorderUnits,
		ButtonDesktopBorderWidth,
		ButtonTabBorderWidth,
		ButtonMobileBorderWidth,
		ButtonBorderLink,
		ButtonBorderRadiusUnits,
		ButtonDesktopBorderRadiusWidth,
		ButtonTabBorderRadiusWidth,
		ButtonMobileBorderRadiusWidth,
		ButtonBorderRadiusLink,
		ButtonPaddingUnits,
		ButtonDesktopPadding,
		ButtonTabPadding,
		ButtonMobilePadding,
		ButtonPaddingLink,
		ButtonIconAlign,
		ButtonIcon,
		ButtonZIndex,
		ButtonTwoText,
		ButtonTwoUrl,
		ButtonTwoTargetUrl,
		ButtonTwoBorder,
		ButtonTwoBorderColor,
		ButtonTwoBorderHoverColor,
		ButtonTwoBorderColorSwitcher,
		ButtonTwoBorderUnits,
		ButtonTwoDesktopBorderWidth,
		ButtonTwoTabBorderWidth,
		ButtonTwoMobileBorderWidth,
		ButtonTwoBorderLink,
		ButtonTwoBorderRadiusUnits,
		ButtonTwoDesktopBorderRadiusWidth,
		ButtonTwoTabBorderRadiusWidth,
		ButtonTwoMobileBorderRadiusWidth,
		ButtonTwoBorderRadiusLink,
		ButtonTwoMarginUnits,
		ButtonTwoIconAlign,
		ButtonTwoIcon,
		ButtonMarginUnits,
		ButtonDesktopMargin,
		ButtonTabMargin,
		ButtonMobileMargin,
		ButtonMarginLink,
		buttonIconAlign,
		buttonTwoIconAlign,

		ButtonTwoColorSwitcher,
		ButtonTwoColor,
		ButtonTwoHoverColor,
		ButtonTwoBgColorSwitcher,
		ButtonTwoBgColor,
		ButtonTwoBgHoverColor,

		btnIconColorSwitcher,
		btnIconColor,
		btnIconHoverColor,

		connectorSwitcher,
		connectorText,
		connectorFontFamily,
		connectorFontSize,
		connectorFontSizeUnits,
		connectorFontWeight,
		connectorFontStyle,
		connectorTextTransform,
		connectorTextDecoration,
		connectorLetterSpacing,
		connectorLetterSpacingUnits,
		connectorLineHeight,
		connectorLineHeightUnits,
		connectorColorSwitcher,
		connectorColor,
		connectorHoverColor,
		connectorBgColorSwitcher,
		connectorBgColor,
		connectorBgHoverColor,
		connectorSize,
		connectorSizeUnits,
		btnIconSize,
		btnIconSizeUnits,
		btnIconSpacing,
		btnIconSpacingUnits,
		btnIconPosition,
		btnTwoIconPosition,
		buttonsGap,
		buttonsGapUnits,
		buttonsDirection,
		blockStyle,
		connectorBorder,
		connectorBorderColorSwitcher,
		connectorBorderColor,
		connectorBorderHoverColor,
		connectorBorderUnits,
		connectorBorderDesktop,
		connectorBorderTablet,
		connectorBorderMobile,
		connectorBorderLink,
		connectorBorderRadiusUnits,
		connectorBorderRadiusDesktop,
		connectorBorderRadiusTablet,
		connectorBorderRadiusMobile,
		connectorBorderRadiusLink,
		dualButtonGlobalZIndex,
		dualButtonGlobalPaddingUnits,
		dualButtonGlobalPaddingDesktop,
		dualButtonGlobalPaddingTablet,
		dualButtonGlobalPaddingMobile,
		dualButtonGlobalPaddingLink,
		dualButtonGlobalMarginUnits,
		dualButtonGlobalMarginDesktop,
		dualButtonGlobalMarginTablet,
		dualButtonGlobalMarginMobile,
		dualButtonGlobalMarginLink,
		dualButtonGlobalBgColorSwitcher,
		dualButtonGlobalBgColor,
		dualButtonGlobalBgHoverColor,
		dualButtonGlobalBorder,
		dualButtonGlobalBorderColorSwitcher,
		dualButtonGlobalBorderColor,
		dualButtonGlobalBorderHoverColor,
		dualButtonGlobalBorderUnits,
		dualButtonGlobalBorderDesktop,
		dualButtonGlobalBorderTablet,
		dualButtonGlobalBorderMobile,
		dualButtonGlobalBorderLink,
		dualButtonGlobalBorderRadiusUnits,
		dualButtonGlobalBorderRadiusDesktop,
		dualButtonGlobalBorderRadiusTablet,
		dualButtonGlobalBorderRadiusMobile,
		dualButtonGlobalBorderRadiusLink,
		dualButtonGlobalBoxShadowValues,
		dualButtonGlobalBoxShadowCssValue,
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-dual-button-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const connectorSizeHandler = (value) => {
		setAttributes({ connectorSize: value });
	};

	const connectorSizeUnitsHandler = (value) => {
		setAttributes({ connectorSizeUnits: value });
	};

	const btnIconSizeHandler = (value) => {
		setAttributes({ btnIconSize: value });
	};

	const btnIconSizeUnitsHandler = (value) => {
		setAttributes({ btnIconSizeUnits: value });
	};

	/** Button One **/
	/** Border **/
	const handleButtonOneBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (ButtonBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						ButtonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobileBorderWidth: {
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
						ButtonDesktopBorderWidth: {
							...ButtonDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabBorderWidth: {
							...ButtonTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobileBorderWidth: {
							...ButtonMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonOneBorderUnitsHandler = (unit) => {
		setAttributes({
			ButtonBorderUnits: {
				...ButtonBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleButtonOneBorderCombineBtn = () => {
		setAttributes({ ButtonBorderLink: !ButtonBorderLink });
	};

	const buttonOneBorderDesktopWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits[deviceType]} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits[deviceType]} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderRadiusUnits[deviceType]} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits[deviceType]}`;
	const buttonOneBorderTabletWidth = `${ButtonTabBorderWidth.top}${ButtonBorderUnits[deviceType]} ${ButtonTabBorderWidth.right}${ButtonBorderUnits[deviceType]} ${ButtonTabBorderWidth.bottom}${ButtonBorderUnits[deviceType]} ${ButtonTabBorderWidth.left}${ButtonBorderUnits[deviceType]}`;
	const buttonOneBorderMobileWidth = `${ButtonMobileBorderWidth.top}${ButtonBorderUnits[deviceType]} ${ButtonMobileBorderWidth.right}${ButtonBorderUnits[deviceType]} ${ButtonMobileBorderWidth.bottom}${ButtonBorderUnits[deviceType]} ${ButtonMobileBorderWidth.left}${ButtonBorderUnits[deviceType]}`;

	/** Border Radius **/
	const handleButtonOneBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (ButtonBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						ButtonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobileBorderRadiusWidth: {
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
						ButtonDesktopBorderRadiusWidth: {
							...ButtonDesktopBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabBorderRadiusWidth: {
							...ButtonTabBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobileBorderRadiusWidth: {
							...ButtonMobileBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonOneBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			ButtonBorderRadiusUnits: {
				...ButtonBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleButtonOneBorderRadiusCombineBtn = () => {
		setAttributes({ ButtonBorderRadiusLink: !ButtonBorderRadiusLink });
	};

	const buttonOneBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits[deviceType]} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits[deviceType]} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[deviceType]} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits[deviceType]}`;
	const buttonOneBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth.top}${ButtonBorderRadiusUnits[deviceType]} ${ButtonTabBorderRadiusWidth.right}${ButtonBorderRadiusUnits[deviceType]} ${ButtonTabBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[deviceType]} ${ButtonTabBorderRadiusWidth.left}${ButtonBorderRadiusUnits[deviceType]}`;
	const buttonOneBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth.top}${ButtonBorderRadiusUnits[deviceType]} ${ButtonMobileBorderRadiusWidth.right}${ButtonBorderRadiusUnits[deviceType]} ${ButtonMobileBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits[deviceType]} ${ButtonMobileBorderRadiusWidth.left}${ButtonBorderRadiusUnits[deviceType]}`;

	/** Button Two **/
	/** Border **/
	const handleButtonBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (ButtonTwoBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						ButtonTwoDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTwoTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonTwoMobileBorderWidth: {
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
						ButtonTwoDesktopBorderWidth: {
							...ButtonTwoDesktopBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTwoTabBorderWidth: {
							...ButtonTwoTabBorderWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonTwoMobileBorderWidth: {
							...ButtonTwoMobileBorderWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};
	const handleButtonBorderUnitsHandler = (unit) => {
		setAttributes({
			ButtonTwoBorderUnits: {
				...ButtonTwoBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleButtonBorderCombineBtn = () => {
		setAttributes({ ButtonTwoBorderLink: !ButtonTwoBorderLink });
	};

	const buttonBorderDesktopWidth = `${ButtonTwoDesktopBorderWidth.top}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoDesktopBorderWidth.right}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoDesktopBorderWidth.bottom}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoDesktopBorderWidth.left}${ButtonTwoBorderUnits[deviceType]}`;
	const buttonBorderTabletWidth = `${ButtonTwoTabBorderWidth.top}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoTabBorderWidth.right}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoTabBorderWidth.bottom}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoTabBorderWidth.left}${ButtonTwoBorderUnits[deviceType]}`;
	const buttonBorderMobileWidth = `${ButtonTwoMobileBorderWidth.top}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoMobileBorderWidth.right}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoMobileBorderWidth.bottom}${ButtonTwoBorderUnits[deviceType]} ${ButtonTwoMobileBorderWidth.left}${ButtonTwoBorderUnits[deviceType]}`;

	/** Border Radius **/
	const handleButtonBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (ButtonTwoBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						ButtonTwoDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTwoTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonTwoMobileBorderRadiusWidth: {
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
						ButtonTwoDesktopBorderRadiusWidth: {
							...ButtonTwoDesktopBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTwoTabBorderRadiusWidth: {
							...ButtonTwoTabBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonTwoMobileBorderRadiusWidth: {
							...ButtonTwoMobileBorderRadiusWidth,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};
	const handleButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			ButtonTwoBorderRadiusUnits: {
				...ButtonTwoBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleButtonBorderRadiusCombineBtn = () => {
		setAttributes({ ButtonTwoBorderRadiusLink: !ButtonTwoBorderRadiusLink });
	};

	const buttonBorderRadiusDesktopWidth = `${ButtonTwoDesktopBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoDesktopBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoDesktopBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoDesktopBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits[deviceType]}`;
	const buttonBorderRadiusTabletWidth = `${ButtonTwoTabBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoTabBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoTabBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoTabBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits[deviceType]}`;
	const buttonBorderRadiusMobileWidth = `${ButtonTwoMobileBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoMobileBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoMobileBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoBorderRadiusUnits[deviceType]} ${ButtonTwoMobileBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits[deviceType]}`;
	/** Start Padding */
	const handleButtonPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (ButtonPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						ButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobilePadding: {
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
						ButtonDesktopPadding: {
							...ButtonDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabPadding: { ...ButtonTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobilePadding: { ...ButtonMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};
	const handleButtonPaddingUnitsHandler = (unit) => {
		setAttributes({
			ButtonPaddingUnits: {
				...ButtonPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleButtonPaddingCombineBtn = () => {
		setAttributes({ ButtonPaddingLink: !ButtonPaddingLink });
	};

	const buttonDesktopPadding = `${ButtonDesktopPadding.top}${ButtonPaddingUnits[deviceType]} ${ButtonDesktopPadding.right}${ButtonPaddingUnits[deviceType]} ${ButtonDesktopPadding.bottom}${ButtonPaddingUnits[deviceType]} ${ButtonDesktopPadding.left}${ButtonPaddingUnits[deviceType]}`;
	const buttonTabPadding = `${ButtonTabPadding.top}${ButtonPaddingUnits[deviceType]} ${ButtonTabPadding.right}${ButtonPaddingUnits[deviceType]} ${ButtonTabPadding.bottom}${ButtonPaddingUnits[deviceType]} ${ButtonTabPadding.left}${ButtonPaddingUnits[deviceType]}`;
	const buttonMobilePadding = `${ButtonMobilePadding.top}${ButtonPaddingUnits[deviceType]} ${ButtonMobilePadding.right}${ButtonPaddingUnits[deviceType]} ${ButtonMobilePadding.bottom}${ButtonPaddingUnits[deviceType]} ${ButtonMobilePadding.left}${ButtonPaddingUnits[deviceType]}`;

	/** Margin */
	const handleButtonMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (ButtonMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						ButtonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobileMargin: {
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
						ButtonDesktopMargin: { ...ButtonDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						ButtonTabMargin: { ...ButtonTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						ButtonMobileMargin: { ...ButtonMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};
	const handleButtonMarginUnitsHandler = (unit) => {
		setAttributes({
			ButtonMarginUnits: {
				...ButtonMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const handleButtonMarginCombineBtn = () => {
		setAttributes({ ButtonMarginLink: !ButtonMarginLink });
	};

	const buttonDesktopMargin = `${ButtonDesktopMargin.top}${ButtonTwoMarginUnits[deviceType]} ${ButtonDesktopMargin.right}${ButtonTwoMarginUnits[deviceType]} ${ButtonDesktopMargin.bottom}${ButtonTwoMarginUnits[deviceType]} ${ButtonDesktopMargin.left}${ButtonTwoMarginUnits[deviceType]}`;
	const buttonTabMargin = `${ButtonTabMargin.top}${ButtonTwoMarginUnits[deviceType]} ${ButtonTabMargin.right}${ButtonTwoMarginUnits[deviceType]} ${ButtonTabMargin.bottom}${ButtonTwoMarginUnits[deviceType]} ${ButtonTabMargin.left}${ButtonTwoMarginUnits[deviceType]}`;
	const buttonMobileMargin = `${ButtonMobileMargin.top}${ButtonTwoMarginUnits[deviceType]} ${ButtonMobileMargin.right}${ButtonTwoMarginUnits[deviceType]} ${ButtonMobileMargin.bottom}${ButtonTwoMarginUnits[deviceType]} ${ButtonMobileMargin.left}${ButtonTwoMarginUnits[deviceType]}`;
	

	/** Start Connector border */
	const connectorBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (connectorBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						connectorBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						connectorBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						connectorBorderMobile: {
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
						connectorBorderDesktop: {
							...connectorBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						connectorBorderTablet: {
							...connectorBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						connectorBorderMobile: {
							...connectorBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const connectorBorderCombineBtn = () => {
		setAttributes({ connectorBorderLink: !connectorBorderLink });
	};

	const connectorBorderUnitsHandler = (unit) => {
		setAttributes({
			connectorBorderUnits: {
				...connectorBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	const connectorDesktopBorderWidth = `${connectorBorderDesktop.top}${connectorBorderUnits.Desktop} ${connectorBorderDesktop.right}${connectorBorderUnits.Desktop} ${connectorBorderDesktop.bottom}${connectorBorderUnits.Desktop} ${connectorBorderDesktop.left}${connectorBorderUnits.Desktop}`;
	const connectorTabletBorderWidth = `${connectorBorderTablet.top}${connectorBorderUnits.Tablet} ${connectorBorderTablet.right}${connectorBorderUnits.Tablet} ${connectorBorderTablet.bottom}${connectorBorderUnits.Tablet} ${connectorBorderTablet.left}${connectorBorderUnits.Tablet}`;
	const connectorMobileBorderWidth = `${connectorBorderMobile.top}${connectorBorderUnits.Mobile} ${connectorBorderMobile.right}${connectorBorderUnits.Mobile} ${connectorBorderMobile.bottom}${connectorBorderUnits.Mobile} ${connectorBorderMobile.left}${connectorBorderUnits.Mobile}`;

	/** Connector Border Radius **/
	const connectorBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (connectorBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						connectorBorderRadiusDesktop: {
							topLeft: value,
							topRight: value,
							bottomRight: value,
							bottomLeft: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						connectorBorderRadiusTablet: {
							topLeft: value,
							topRight: value,
							bottomRight: value,
							bottomLeft: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						connectorBorderRadiusMobile: {
							topLeft: value,
							topRight: value,
							bottomRight: value,
							bottomLeft: value,
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
						connectorBorderRadiusDesktop: {
							...connectorBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						connectorBorderRadiusTablet: {
							...connectorBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						connectorBorderRadiusMobile: {
							...connectorBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};
	
	const connectorBorderRadiusCombineBtn = () => {
		setAttributes({ connectorBorderRadiusLink: !connectorBorderRadiusLink });
	};
	
	const connectorBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			connectorBorderRadiusUnits: {
				...connectorBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	
	const connectorDesktopBorderRadius = `${connectorBorderRadiusDesktop.topLeft}${connectorBorderRadiusUnits.Desktop} ${connectorBorderRadiusDesktop.topRight}${connectorBorderRadiusUnits.Desktop} ${connectorBorderRadiusDesktop.bottomRight}${connectorBorderRadiusUnits.Desktop} ${connectorBorderRadiusDesktop.bottomLeft}${connectorBorderRadiusUnits.Desktop}`;
	const connectorTabletBorderRadius = `${connectorBorderRadiusTablet.topLeft}${connectorBorderRadiusUnits.Tablet} ${connectorBorderRadiusTablet.topRight}${connectorBorderRadiusUnits.Tablet} ${connectorBorderRadiusTablet.bottomRight}${connectorBorderRadiusUnits.Tablet} ${connectorBorderRadiusTablet.bottomLeft}${connectorBorderRadiusUnits.Tablet}`;
	const connectorMobileBorderRadius = `${connectorBorderRadiusMobile.topLeft}${connectorBorderRadiusUnits.Mobile} ${connectorBorderRadiusMobile.topRight}${connectorBorderRadiusUnits.Mobile} ${connectorBorderRadiusMobile.bottomRight}${connectorBorderRadiusUnits.Mobile} ${connectorBorderRadiusMobile.bottomLeft}${connectorBorderRadiusUnits.Mobile}`;	
	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (dualButtonGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dualButtonGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalPaddingMobile: {
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
						dualButtonGlobalPaddingDesktop: {
							...dualButtonGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalPaddingTablet: {
							...dualButtonGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalPaddingMobile: {
							...dualButtonGlobalPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({
			dualButtonGlobalPaddingLink: !dualButtonGlobalPaddingLink,
		});
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			dualButtonGlobalPaddingUnits: {
				...dualButtonGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDesktopPadding = `${dualButtonGlobalPaddingDesktop.top}${dualButtonGlobalPaddingUnits.Desktop} ${dualButtonGlobalPaddingDesktop.right}${dualButtonGlobalPaddingUnits.Desktop} ${dualButtonGlobalPaddingDesktop.bottom}${dualButtonGlobalPaddingUnits.Desktop} ${dualButtonGlobalPaddingDesktop.left}${dualButtonGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding = `${dualButtonGlobalPaddingTablet.top}${dualButtonGlobalPaddingUnits.Tablet} ${dualButtonGlobalPaddingTablet.right}${dualButtonGlobalPaddingUnits.Tablet} ${dualButtonGlobalPaddingTablet.bottom}${dualButtonGlobalPaddingUnits.Tablet} ${dualButtonGlobalPaddingTablet.left}${dualButtonGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding = `${dualButtonGlobalPaddingMobile.top}${dualButtonGlobalPaddingUnits.Mobile} ${dualButtonGlobalPaddingMobile.right}${dualButtonGlobalPaddingUnits.Mobile} ${dualButtonGlobalPaddingMobile.bottom}${dualButtonGlobalPaddingUnits.Mobile} ${dualButtonGlobalPaddingMobile.left}${dualButtonGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (dualButtonGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dualButtonGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalMarginMobile: {
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
						dualButtonGlobalMarginDesktop: {
							...dualButtonGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalMarginTablet: {
							...dualButtonGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalMarginMobile: {
							...dualButtonGlobalMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ dualButtonGlobalMarginLink: !dualButtonGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			dualButtonGlobalMarginUnits: {
				...dualButtonGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDesktopMargin = `${dualButtonGlobalMarginDesktop.top}${dualButtonGlobalMarginUnits.Desktop} ${dualButtonGlobalMarginDesktop.right}${dualButtonGlobalMarginUnits.Desktop} ${dualButtonGlobalMarginDesktop.bottom}${dualButtonGlobalMarginUnits.Desktop} ${dualButtonGlobalMarginDesktop.left}${dualButtonGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${dualButtonGlobalMarginTablet.top}${dualButtonGlobalMarginUnits.Tablet} ${dualButtonGlobalMarginTablet.right}${dualButtonGlobalMarginUnits.Tablet} ${dualButtonGlobalMarginTablet.bottom}${dualButtonGlobalMarginUnits.Tablet} ${dualButtonGlobalMarginTablet.left}${dualButtonGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${dualButtonGlobalMarginMobile.top}${dualButtonGlobalMarginUnits.Mobile} ${dualButtonGlobalMarginMobile.right}${dualButtonGlobalMarginUnits.Mobile} ${dualButtonGlobalMarginMobile.bottom}${dualButtonGlobalMarginUnits.Mobile} ${dualButtonGlobalMarginMobile.left}${dualButtonGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global Border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (dualButtonGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dualButtonGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalBorderMobile: {
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
						dualButtonGlobalBorderDesktop: {
							...dualButtonGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalBorderTablet: {
							...dualButtonGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalBorderMobile: {
							...dualButtonGlobalBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ dualButtonGlobalBorderLink: !dualButtonGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			dualButtonGlobalBorderUnits: {
				...dualButtonGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDesktopBorderWidth = `${dualButtonGlobalBorderDesktop.top}${dualButtonGlobalBorderUnits.Desktop} ${dualButtonGlobalBorderDesktop.right}${dualButtonGlobalBorderUnits.Desktop} ${dualButtonGlobalBorderDesktop.bottom}${dualButtonGlobalBorderUnits.Desktop} ${dualButtonGlobalBorderDesktop.left}${dualButtonGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${dualButtonGlobalBorderTablet.top}${dualButtonGlobalBorderUnits.Tablet} ${dualButtonGlobalBorderTablet.right}${dualButtonGlobalBorderUnits.Tablet} ${dualButtonGlobalBorderTablet.bottom}${dualButtonGlobalBorderUnits.Tablet} ${dualButtonGlobalBorderTablet.left}${dualButtonGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${dualButtonGlobalBorderMobile.top}${dualButtonGlobalBorderUnits.Mobile} ${dualButtonGlobalBorderMobile.right}${dualButtonGlobalBorderUnits.Mobile} ${dualButtonGlobalBorderMobile.bottom}${dualButtonGlobalBorderUnits.Mobile} ${dualButtonGlobalBorderMobile.left}${dualButtonGlobalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global Border Radius */
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (dualButtonGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						dualButtonGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalBorderRadiusMobile: {
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
						dualButtonGlobalBorderRadiusDesktop: {
							...dualButtonGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						dualButtonGlobalBorderRadiusTablet: {
							...dualButtonGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						dualButtonGlobalBorderRadiusMobile: {
							...dualButtonGlobalBorderRadiusMobile,
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
		setAttributes({
			dualButtonGlobalBorderRadiusLink: !dualButtonGlobalBorderRadiusLink,
		});
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			dualButtonGlobalBorderRadiusUnits: {
				...dualButtonGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDesktopBorderRadiusWidth = `${dualButtonGlobalBorderRadiusDesktop.top}${dualButtonGlobalBorderRadiusUnits.Desktop} ${dualButtonGlobalBorderRadiusDesktop.right}${dualButtonGlobalBorderRadiusUnits.Desktop} ${dualButtonGlobalBorderRadiusDesktop.bottom}${dualButtonGlobalBorderRadiusUnits.Desktop} ${dualButtonGlobalBorderRadiusDesktop.left}${dualButtonGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${dualButtonGlobalBorderRadiusTablet.top}${dualButtonGlobalBorderRadiusUnits.Tablet} ${dualButtonGlobalBorderRadiusTablet.right}${dualButtonGlobalBorderRadiusUnits.Tablet} ${dualButtonGlobalBorderRadiusTablet.bottom}${dualButtonGlobalBorderRadiusUnits.Tablet} ${dualButtonGlobalBorderRadiusTablet.left}${dualButtonGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${dualButtonGlobalBorderRadiusMobile.top}${dualButtonGlobalBorderRadiusUnits.Mobile} ${dualButtonGlobalBorderRadiusMobile.right}${dualButtonGlobalBorderRadiusUnits.Mobile} ${dualButtonGlobalBorderRadiusMobile.bottom}${dualButtonGlobalBorderRadiusUnits.Mobile} ${dualButtonGlobalBorderRadiusMobile.left}${dualButtonGlobalBorderRadiusUnits.Mobile}`;

	/* Load Google Fonts */
	useEffect(() => {
		loadGoogleFont(ButtonFontFamily);
		loadGoogleFont(connectorFontFamily);
	}, [ButtonFontFamily, connectorFontFamily]); 
	/* End Load Google Fonts */

	const iconHandler = (IconName) => {
		setAttributes({ ButtonIcon: IconName });
	};

	const iconHandlerTwo = (IconName) => {
		setAttributes({ ButtonTwoIcon: IconName });
	};

	const dualButtonStyle = useMemo(
		() => `
		.fb-dual-button-container.${blockID} {
            ${dualButtonGlobalZIndex !== undefined ? `z-index: ${dualButtonGlobalZIndex};` : "" }
            ${ dualButtonGlobalBgColor !== undefined ? `background-color: ${dualButtonGlobalBgColor};` : "" } 
            ${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ""}
            ${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ""} 
            ${dualButtonGlobalBorder ? `border: ${dualButtonGlobalBorder};` : "" } 
            ${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : "" }
            ${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : "" }
            ${dualButtonGlobalBorderColor !== undefined ? `border-color: ${dualButtonGlobalBorderColor};` : "" }
            ${dualButtonGlobalBoxShadowCssValue ? `box-shadow: ${dualButtonGlobalBoxShadowCssValue};` : "" }
            transition: all .3s ease-in-out;
            position: relative;
        }
        .fb-dual-button-container.${blockID}:hover {
            ${dualButtonGlobalBgHoverColor !== undefined ? `background-color: ${dualButtonGlobalBgHoverColor};` : "" }
            ${dualButtonGlobalBorderHoverColor !== undefined ? `border-color: ${dualButtonGlobalBorderHoverColor};` : "" }
        }
		.fb-dual-button-container.${blockID} .fb-advanced-button {
			font-family: ${ButtonFontFamily !== "default" ? ButtonFontFamily : ButtonFontFamily };
			${ButtonFontSize.Desktop && ButtonFontSizeUnits.Desktop ? `font-size: ${ButtonFontSize.Desktop}${ButtonFontSizeUnits.Desktop};` : ''}
			${ButtonLetterSpacing.Desktop && ButtonLetterSpacingUnits.Desktop ? `letter-spacing: ${ButtonLetterSpacing.Desktop}${ButtonLetterSpacingUnits.Desktop};` : ''}
			${ButtonLineHeight.Desktop && ButtonLineHeightUnits.Desktop ? `line-height: ${ButtonLineHeight.Desktop}${ButtonLineHeightUnits.Desktop};` : ''}
			font-weight: ${ButtonFontWeight};
			font-style: ${ButtonFontStyle};
			text-transform: ${ButtonTextTransform};
			text-decoration: ${ButtonTextDecoration};
			padding: ${buttonDesktopPadding};
			margin: ${buttonDesktopMargin};
			z-index: ${ButtonZIndex !== undefined ? ButtonZIndex : ""};
			${ButtonWidth.Desktop && ButtonWidthWidthUnits.Desktop ? `width: ${ButtonWidth.Desktop}${ButtonWidthWidthUnits.Desktop};` : ''}
			gap: ${btnIconSpacing.Desktop}${btnIconSpacingUnits.Desktop};
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-wrapper {
			gap: ${buttonsGap.Desktop}${buttonsGapUnits.Desktop};
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
			${ButtonBgColor !== undefined ? `background-color: ${ButtonBgColor};` : ""}
			border: ${ButtonBorder};
			${ButtonBorderColor !== undefined ? `border-color: ${ButtonBorderColor};` : ""}
			${buttonOneBorderDesktopWidth ? `border-width: ${buttonOneBorderDesktopWidth};` : ''}
			${buttonOneBorderRadiusDesktopWidth ? `border-radius: ${buttonOneBorderRadiusDesktopWidth};` : ''}
			
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button:hover {
			${ButtonBgHoverColor !== undefined ? `background-color: ${ButtonBgHoverColor};` : "" }
			${ButtonBorderHoverColor !== undefined ? `border-color: ${ButtonBorderHoverColor};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
			${ButtonTwoBgColor !== undefined ? `background-color: ${ButtonTwoBgColor} !important;` : "" }
			border: ${ButtonTwoBorder};
			border-width: ${buttonBorderDesktopWidth};
			border-radius: ${buttonBorderRadiusDesktopWidth};
			${ButtonTwoBorderColor !== undefined ? `border-color: ${ButtonTwoBorderColor};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button:hover {
			${ButtonTwoBgHoverColor !== undefined ? `background-color: ${ButtonTwoBgHoverColor} !important;` : ""}
			${ButtonTwoBorderHoverColor !== undefined ? `border-color: ${ButtonTwoBorderHoverColor};` : "" }
		}
		
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one .fb-advanced-button-text {
			${ButtonColor !== undefined ? `color: ${ButtonColor};` : ""}
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one:hover .fb-advanced-button-text {
			${ButtonHoverColor !== undefined ? `color: ${ButtonHoverColor};` : ""}
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two .fb-advanced-button-text {
			${ButtonTwoColor !== undefined ? `color: ${ButtonTwoColor};` : ""}
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two:hover .fb-advanced-button-text {
			${ButtonTwoHoverColor !== undefined ? `color: ${ButtonTwoHoverColor};` : ""}
		}
		
    	.fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
        ${connectorColor !== undefined ? `color: ${connectorColor};` : ""}
        ${connectorBgColor !== undefined ? `background-color: ${connectorBgColor};` : "" }
        font-family: ${ connectorFontFamily !== "default" ? connectorFontFamily : connectorFontFamily };
		${connectorFontSize.Desktop && connectorFontSizeUnits.Desktop ? `font-size: ${connectorFontSize.Desktop}${connectorFontSizeUnits.Desktop};` : ''}
		${connectorLetterSpacing.Desktop && connectorLetterSpacingUnits.Desktop ? `letter-spacing: ${connectorLetterSpacing.Desktop}${connectorLetterSpacingUnits.Desktop};` : ''}
		${connectorSize.Desktop && connectorSizeUnits.Desktop ? `line-height: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};` : ''}
        font-weight: ${connectorFontWeight};
        font-style: ${connectorFontStyle};
        text-transform: ${connectorTextTransform};
        text-decoration: ${connectorTextDecoration};
		border: ${connectorBorder};
		border-color: ${connectorBorderColor};
        border-width: ${connectorDesktopBorderWidth};
        border-radius: ${connectorDesktopBorderRadius};
        width: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};
        height: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};
		transition: all .3s ease-in-out;
    	}
		.fb-dual-button-container.${blockID} .fb-dual-button-connector:hover .fb-dual-button-connector-text {
			${connectorHoverColor !== undefined ? `color: ${connectorHoverColor};` : "" }
			${connectorBgHoverColor !== undefined ? `background-color: ${connectorBgHoverColor};` : "" }
			${connectorBorderHoverColor !== undefined ? `border-color: ${connectorBorderHoverColor};` : "" }
		}
		
		.fb-dual-button-container.${blockID} .fb-advanced-button-icon-wrapper svg {
			${btnIconColor !== undefined ? `fill: ${btnIconColor};` : ""}
			width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one:hover svg,
		.fb-dual-button-container.${blockID} .fb-dual-button-two:hover svg {
			${btnIconHoverColor !== undefined ? `fill: ${btnIconHoverColor};` : ""}
		}
    
		@media only screen and (max-width: 1024px) {
		.fb-dual-button-container.${blockID} {
		${globalTabletPadding ? `padding: ${globalTabletPadding};` : ""}
		${globalTabletMargin ? `margin: ${globalTabletMargin};` : ""} 
		${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : "" }
		${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button {
			${ButtonWidth.Tablet && ButtonWidthWidthUnits.Tablet ? `width: ${ButtonWidth.Tablet}${ButtonWidthWidthUnits.Tablet};` : ''}
			${ButtonFontSize.Tablet && ButtonFontSizeUnits.Tablet ? `font-size: ${ButtonFontSize.Tablet}${ButtonFontSizeUnits.Tablet};` : ''}
			${ButtonLetterSpacing.Tablet && ButtonLetterSpacingUnits.Tablet ? `letter-spacing: ${ButtonLetterSpacing.Tablet}${ButtonLetterSpacingUnits.Tablet};` : ''}
			${ButtonLineHeight.Tablet && ButtonLineHeightUnits.Tablet ? `line-height: ${ButtonLineHeight.Tablet}${ButtonLineHeightUnits.Tablet};` : ''}
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
				padding: ${buttonTabPadding};
				margin: ${buttonTabMargin};
				${buttonOneBorderTabletWidth ? `border-width: ${buttonOneBorderTabletWidth};` : ''}
				${buttonOneBorderRadiusTabletWidth ? `border-radius: ${buttonOneBorderRadiusTabletWidth};` : ''}
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
            border: ${ButtonTwoBorder};
            border-width: ${buttonBorderTabletWidth};
            border-radius: ${buttonBorderRadiusTabletWidth};
        }
		.fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
			${connectorFontSize.Tablet && connectorFontSizeUnits.Tablet ? `font-size: ${connectorFontSize.Tablet}${connectorFontSizeUnits.Tablet};` : ''}
			${connectorLetterSpacing.Tablet && connectorLetterSpacingUnits.Tablet ? `letter-spacing: ${connectorLetterSpacing.Tablet}${connectorLetterSpacingUnits.Tablet};` : ''}
			${connectorLineHeight.Tablet && connectorLineHeightUnits.Tablet ? `line-height: ${connectorLineHeight.Tablet}${connectorLineHeightUnits.Tablet};` : ''}
            width: ${connectorSize.Tablet}${connectorSizeUnits.Tablet};
        	height: ${connectorSize.Tablet}${connectorSizeUnits.Tablet};
			border-width: ${connectorTabletBorderWidth};
			border-radius: ${connectorTabletBorderRadius};
        }
		.fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
		width: ${btnIconSize.Tablet}${btnIconSizeUnits.Tablet};
		}
		}
		@media only screen and (max-width: 767px) {
		.fb-dual-button-container.${blockID} {
			${globalMobilePadding ? `padding: ${globalMobilePadding};` : ""}
			${globalMobileMargin ? `margin: ${globalMobileMargin};` : ""} 
			${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : "" }
			${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button {
			${ButtonWidth.Mobile && ButtonWidthWidthUnits.Mobile ? `width: ${ButtonWidth.Mobile}${ButtonWidthWidthUnits.Mobile};` : ''}
			${ButtonFontSize.Mobile && ButtonFontSizeUnits.Mobile ? `font-size: ${ButtonFontSize.Mobile}${ButtonFontSizeUnits.Mobile};` : ''}
			${ButtonLetterSpacing.Mobile && ButtonLetterSpacingUnits.Mobile ? `letter-spacing: ${ButtonLetterSpacing.Mobile}${ButtonLetterSpacingUnits.Mobile};` : ''}
			${ButtonLineHeight.Mobile && ButtonLineHeightUnits.Mobile ? `line-height: ${ButtonLineHeight.Mobile}${ButtonLineHeightUnits.Mobile};` : ''}
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
			padding: ${buttonMobilePadding};
			margin: ${buttonMobileMargin};
			${buttonOneBorderMobileWidth ? `border-width: ${buttonOneBorderMobileWidth};` : ''}
			${buttonOneBorderRadiusMobileWidth ? `border-radius: ${buttonOneBorderRadiusMobileWidth};` : ''}
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
			border: ${ButtonTwoBorder};
			border-width: ${buttonBorderMobileWidth};
			border-radius: ${buttonBorderRadiusMobileWidth};
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
			${connectorFontSize.Mobile && connectorFontSizeUnits.Mobile ? `font-size: ${connectorFontSize.Mobile}${connectorFontSizeUnits.Mobile};` : ''}
			${connectorLetterSpacing.Mobile && connectorLetterSpacingUnits.Mobile ? `letter-spacing: ${connectorLetterSpacing.Mobile}${connectorLetterSpacingUnits.Mobile};` : ''}
			${connectorLineHeight.Mobile && connectorLineHeightUnits.Mobile ? `line-height: ${connectorLineHeight.Mobile}${connectorLineHeightUnits.Mobile};` : ''}
            width: ${connectorSize.Mobile}${connectorSizeUnits.Mobile};
            height: ${connectorSize.Mobile}${connectorSizeUnits.Mobile};
			border-width: ${connectorMobileBorderWidth};
			border-radius: ${connectorMobileBorderRadius};
        }
		
	}
	`,
		[
			blockID,
			dualButtonGlobalZIndex,
			dualButtonGlobalBgColor,
			globalDesktopPadding,
			globalDesktopMargin,
			dualButtonGlobalBorder,
			globalDesktopBorderWidth,
			globalDesktopBorderRadiusWidth,
			dualButtonGlobalBorderColor,
			dualButtonGlobalBoxShadowCssValue,
			dualButtonGlobalBgHoverColor,
			dualButtonGlobalBorderHoverColor,
			ButtonFontFamily,
			ButtonFontSize,
			ButtonFontSizeUnits,
			ButtonFontWeight,
			ButtonFontStyle,
			ButtonTextTransform,
			ButtonTextDecoration,
			ButtonLetterSpacing,
			ButtonLetterSpacingUnits,
			ButtonLineHeight,
			ButtonLineHeightUnits,
			buttonDesktopPadding,
			buttonDesktopMargin,
			ButtonZIndex,
			ButtonWidth,
			ButtonWidthWidthUnits,
			ButtonColor,
			ButtonHoverColor,
			ButtonBgColor,
			ButtonBorder,
			ButtonBorderColor,
			ButtonBgHoverColor,
			ButtonTwoBgColor,
			ButtonTwoBorder,
			buttonBorderDesktopWidth,
			buttonBorderRadiusDesktopWidth,
			buttonOneBorderDesktopWidth,
			buttonOneBorderTabletWidth,
			buttonOneBorderMobileWidth,
			buttonOneBorderRadiusDesktopWidth,
			buttonOneBorderRadiusTabletWidth,
			buttonOneBorderRadiusMobileWidth,
			ButtonTwoBorderColor,
			ButtonTwoBgHoverColor,
			buttonBorderTabletWidth,
			buttonBorderMobileWidth,
			ButtonMobileBorderWidth,
			ButtonMobileBorderRadiusWidth,
			ButtonTwoColor,
			ButtonTwoHoverColor,
			connectorBgColor,
			connectorBgHoverColor,
			connectorColor,
			connectorHoverColor,
			connectorFontFamily,
			connectorFontSize,
			connectorFontSizeUnits,
			connectorFontWeight,
			connectorFontStyle,
			connectorTextTransform,
			connectorTextDecoration,
			connectorLetterSpacing,
			connectorLetterSpacingUnits,
			connectorLineHeight,
			connectorLineHeightUnits,
			connectorBorder,
			connectorBorderColor,
			connectorBorderHoverColor,
			connectorDesktopBorderWidth,
			connectorTabletBorderWidth,
			connectorMobileBorderWidth,
			connectorDesktopBorderRadius,
			connectorTabletBorderRadius,
			connectorMobileBorderRadius,
			connectorSize,
			btnIconColor,
			btnIconSize,
			btnIconSizeUnits,
			btnIconHoverColor,
			btnIconSpacing,
			btnIconSpacingUnits,
			buttonsGap,
			buttonsGapUnits,
		],
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${dualButtonStyle}`.replace(/\s+/g, " ").trim(),
		});
	}, [dualButtonStyle]);

	const editorStyle = dualButtonStyle.replace(/\s+/g, ' ').trim();

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
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advanced",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === "general" && (
									<>
										<div className="fb-dual-button-container">
											{/*Button One*/}
											<div className="fb-dual-button-one-wrapper">
												<PanelBody
													title={__("Button One", "frontis-blocks")}
													initialOpen={true}
												>
													<TextControl
														label={__("Text", "frontis-blocks")}
														value={ButtonText}
														onChange={(value) =>
															setAttributes({ ButtonText: value })
														}
														className="fb-advanced-button-text"
													/>
													<div className="fb-link-control-wrapper">
														<BaseControl label={__("URL", "frontis-blocks")}>
															<div className="fb-link-control-inner-wrapper">
																<TextControl
																	value={ButtonUrl}
																	onChange={(value) =>
																		setAttributes({ ButtonUrl: value })
																	}
																	className="fb-advanced-button-url"
																	placeholder={__("https://", "frontis-blocks")}
																/>
																<Dropdown
																	className="fb-advanced-button-icon-dropdown"
																	contentClassName="fb-advanced-button-icon-dropdown-content"
																	popoverProps={{ placement: "bottom-start" }}
																	renderToggle={({ isOpen, onToggle }) => (
																		<Button
																			variant="primary"
																			onClick={onToggle}
																			aria-expanded={isOpen}
																			aria-label={__(
																				"Toggle Typography Settings",
																				"frontis-blocks",
																			)}
																			className="fb-advanced-button-icon-btn"
																		>
																			<Dashicon
																				icon="color-picker"
																				className="fb-advanced-button-icon"
																			/>
																		</Button>
																	)}
																	renderContent={() => (
																		<div className="fb-advanced-button-icon-popup">
																			<BaseControl className="fb-advanced-button-icon-popup-inner">
																				<ToggleControl
																					label={__(
																						"Open in new tab",
																						"frontis-blocks",
																					)}
																					checked={ButtonTargetUrl}
																					onChange={(value) =>
																						setAttributes({
																							ButtonTargetUrl: value,
																						})
																					}
																				/>
																			</BaseControl>
																		</div>
																	)}
																/>
															</div>
														</BaseControl>
													</div>

													<div className="fb-advanced-btn-icon-wrapper">
														<BaseControl
															label={__("Icon", "frontis-blocks")}
															id="fb-setting-text-alignment"
															className="fb-setting-text-alignment"
														>
															<ButtonGroup className="fb-setting-text-alignment-group-btn">
															{ICON_ALIGN.map((item, key) => (
																<Button
																	key={key}
																	onClick={() =>
																		setAttributes({
																			buttonIconAlign: item.value,
																		})
																	}
																	className={`fb-setting-text-alignment-single-btn ${
																		buttonIconAlign === item.value
																			? "active"
																			: ""
																	}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
														
															{(buttonIconAlign === "icon-text" ||
																buttonIconAlign === "icon-only") && (
																<FBIconPicker
																	value={ButtonIcon}
																	setIconHandler={iconHandler}
																/>
															)}
														</BaseControl>
													</div>
													{buttonIconAlign === "icon-text"  && (
													<SelectControl
														label={__("Icon Position", "frontis-blocks")}
														options={ICON_POSITION}
														value={btnIconPosition}
														onChange={(value) =>
															setAttributes({ btnIconPosition: value })
														}
													/>
													)}
												</PanelBody>
											</div>
											{/* Connector */}
											<div className="fb-dual-button-connenctor-wrapper">
												<PanelBody
													title={__("Connector", "frontis-blocks")}
													initialOpen={false}
												>
													<ToggleControl
														label={__("Show Connector", "frontis-block")}
														checked={connectorSwitcher}
														onChange={(value) =>
															setAttributes({ connectorSwitcher: value })
														}
													/>
													{connectorSwitcher && (
														<TextControl
															label={__("Connector Text", "frontis-blocks")}
															value={connectorText}
															onChange={(value) =>
																setAttributes({ connectorText: value })
															}
															className="fb-advanced-button-text"
														/>
													)}
												</PanelBody>
											</div>
											{/* Button Two */}
											<div className="fb-dual-button-two-wrapper">
												<PanelBody
													title={__("Button Two", "frontis-blocks")}
													initialOpen={false}
												>
													<TextControl
														label={__("Text", "frontis-blocks")}
														value={ButtonTwoText}
														onChange={(value) =>
															setAttributes({ ButtonTwoText: value })
														}
														className="fb-advanced-button-text"
													/>
													<div className="fb-link-control-wrapper">
														<BaseControl label={__("URL", "frontis-blocks")}>
															<div className="fb-link-control-inner-wrapper">
																<TextControl
																	value={ButtonTwoUrl}
																	onChange={(value) =>
																		setAttributes({ ButtonTwoUrl: value })
																	}
																	className="fb-advanced-button-url"
																	placeholder={__("https://", "frontis-blocks")}
																/>
																<Dropdown
																	className="fb-advanced-button-icon-dropdown"
																	contentClassName="fb-advanced-button-icon-dropdown-content"
																	popoverProps={{ placement: "bottom-start" }}
																	renderToggle={({ isOpen, onToggle }) => (
																		<Button
																			variant="primary"
																			onClick={onToggle}
																			aria-expanded={isOpen}
																			aria-label={__(
																				"Toggle Typography Settings",
																				"frontis-blocks",
																			)}
																			className="fb-advanced-button-icon-btn"
																		>
																			<Dashicon
																				icon="color-picker"
																				className="fb-advanced-button-icon"
																			/>
																		</Button>
																	)}
																	renderContent={() => (
																		<div className="fb-advanced-button-icon-popup">
																			<BaseControl className="fb-advanced-button-icon-popup-inner">
																				<ToggleControl
																					label={__(
																						"Open in new tab",
																						"frontis-blocks",
																					)}
																					checked={ButtonTwoTargetUrl}
																					onChange={(value) =>
																						setAttributes({
																							ButtonTwoTargetUrl: value,
																						})
																					}
																				/>
																			</BaseControl>
																		</div>
																	)}
																/>
															</div>
														</BaseControl>
													</div>

													<div className="fb-advanced-btn-icon-wrapper">
														<BaseControl
															label={__("Icon", "frontis-blocks")}
															id="fb-setting-text-alignment"
															className="fb-setting-text-alignment"
														>
															<ButtonGroup className="fb-setting-text-alignment-group-btn">
																{ICON_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				buttonTwoIconAlign: item.value,
																			})
																		}
																		className={`fb-setting-text-alignment-single-btn ${
																			buttonTwoIconAlign === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
															{(buttonTwoIconAlign === "icon-text" ||
																buttonTwoIconAlign === "icon-only") && (
																<FBIconPicker
																	value={ButtonTwoIcon}
																	setIconHandler={iconHandlerTwo}
																/>
															)}
														</BaseControl>
													</div>
													{buttonTwoIconAlign === "icon-text" && (
													<SelectControl
														label={__("Icon Position", "frontis-blocks")}
														options={ICON_POSITION}
														value={btnTwoIconPosition}
														onChange={(value) =>
															setAttributes({ btnTwoIconPosition: value })
														}
													/>
													)}
												</PanelBody>
											</div>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Buttons", "frontis-blocks")}
											initialOpen={false}
										>
											<FB_Range
													min={0}
													max={100}
													label={__("Width", "frontis-blocks")}
													rangeValue={ButtonWidth}
													onChangeHandler={(value) => setAttributes({ ButtonWidth: value })}
													rangeUnitHandler={(value) => setAttributes({ ButtonWidthWidthUnits: value })}
													deviceType={deviceType}
													units={ButtonWidthWidthUnits}
													setAttributes={setAttributes}
													rangeStep={1}
													resetFallbackValue={""}
											/>
											<SelectControl
												label={__("Direction", "frontis-blocks")}
												options={BUTTONS_DIRECTION}
												value={buttonsDirection}
												onChange={(value) =>
													setAttributes({ buttonsDirection: value })
												}
											/>
											<FB_TypographyControl
                                                fontFamily={ButtonFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ ButtonFontFamily: value })}

                                                fontSize={ButtonFontSize}
                                                onChangeFontSize={(value) => setAttributes({ ButtonFontSize: value })}

                                                fontSizeUnits={ButtonFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ ButtonFontSizeUnits: value })}

                                                fontWeight={ButtonFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ ButtonFontWeight: value })}

                                                fontStyle={ButtonFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ ButtonFontStyle: value })}

                                                textTransform={ButtonTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ ButtonTextTransform: value })}

                                                textDecoration={ButtonTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ ButtonTextDecoration: value })}

                                                letterSpacing={ButtonLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ ButtonLetterSpacing: value })}

                                                letterSpacingUnits={ButtonLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ ButtonLetterSpacingUnits: value })}

                                                lineHeight={ButtonLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ ButtonLineHeight: value })}

                                                lineHeightUnits={ButtonLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ ButtonLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />
											

											{/*	Spacing */}
											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonPaddingUnitsHandler}
												spacingUnits={ButtonPaddingUnits}
												spacingDesktop={ButtonDesktopPadding}
												spacingTablet={ButtonTabPadding}
												spacingMobile={ButtonMobilePadding}
												handleSpacingUnitHandler={handleButtonPaddingUnitChange}
												spacingCombineBtn={ButtonPaddingLink}
												spacingCombineBtnHandler={handleButtonPaddingCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonMarginUnitsHandler}
												spacingUnits={ButtonMarginUnits}
												spacingDesktop={ButtonDesktopMargin}
												spacingTablet={ButtonTabMargin}
												spacingMobile={ButtonMobileMargin}
												handleSpacingUnitHandler={handleButtonMarginUnitChange}
												spacingCombineBtn={ButtonMarginLink}
												spacingCombineBtnHandler={handleButtonMarginCombineBtn}
												setAttributes={setAttributes}
											/>
											<FB_Range
												min={0}
												max={300}
												label={__("Gap", "frontis-blocks")}
												rangeValue={buttonsGap}
												onChangeHandler={(value) =>
													setAttributes({ buttonsGap: value })
												}
												rangeUnitHandler={(value) =>
													setAttributes({ buttonsGapUnits: value })
												}
												deviceType={deviceType}
												units={buttonsGapUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>
										</PanelBody>
										<PanelBody
											title={__("Button One", "frontis-blocks")}
											initialOpen={false}
											className="fb-setting-border-setting-wrapper"
										>
											{/* Text Color */}
											<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={ButtonColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ ButtonColorSwitcher: value })}
                                            />

                                            {ButtonColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={ButtonColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonColor: value })}
                                                />
                                            )}

                                            {ButtonColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={ButtonHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonHoverColor: value })}
                                                />
                                            )}
											{/* Background Color */}
											<FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={ButtonBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ ButtonBgColorSwitcher: value })}
                                            />

                                            {ButtonBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={ButtonBgColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonBgColor: value })}
                                                />
                                            )}

                                            {ButtonBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={ButtonBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonBgHoverColor: value })}
                                                />
                                            )}
											
											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={ButtonBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ ButtonBorder: value })
												}
											/>
											{/* Border Color */}
											<FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={ButtonBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ ButtonBorderColorSwitcher: value })}
                                            />

                                            {ButtonBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={ButtonBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonBorderColor: value })}
                                                />
                                            )}

                                            {ButtonBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={ButtonBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonBorderHoverColor: value })}
                                                />
                                            )}
											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonOneBorderUnitsHandler}
												spacingUnits={ButtonBorderUnits}
												spacingDesktop={ButtonDesktopBorderWidth}
												spacingTablet={ButtonTabBorderWidth}
												spacingMobile={ButtonMobileBorderWidth}
												handleSpacingUnitHandler={ handleButtonOneBorderUnitChange }
												spacingCombineBtn={ButtonTwoBorderLink}
												spacingCombineBtnHandler={ handleButtonOneBorderCombineBtn }
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Border radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonOneBorderRadiusUnitsHandler}
												spacingUnits={ButtonBorderRadiusUnits}
												spacingDesktop={ButtonDesktopBorderRadiusWidth}
												spacingTablet={ButtonTabBorderRadiusWidth}
												spacingMobile={ButtonMobileBorderRadiusWidth}
												handleSpacingUnitHandler={ handleButtonOneBorderRadiusUnitChange }
												spacingCombineBtn={ButtonBorderRadiusLink}
												spacingCombineBtnHandler={ handleButtonOneBorderRadiusCombineBtn }
												setAttributes={setAttributes}
											/>

										</PanelBody>
										<PanelBody title="Button Two" initialOpen={false}>
											{/* Text Color */}
											<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={ButtonTwoColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ ButtonTwoColorSwitcher: value })}
                                            />

                                            {ButtonTwoColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={ButtonTwoColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonTwoColor: value })}
                                                />
                                            )}

                                            {ButtonTwoColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={ButtonTwoHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonTwoHoverColor: value })}
                                                />
                                            )}
											{/* Background Color */}
											<FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={ButtonTwoBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ ButtonTwoBgColorSwitcher: value })}
                                            />

                                            {ButtonTwoBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={ButtonTwoBgColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonTwoBgColor: value })}
                                                />
                                            )}

                                            {ButtonTwoBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={ButtonTwoBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonTwoBgHoverColor: value })}
                                                />
                                            )}
											
											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={ButtonTwoBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ ButtonTwoBorder: value })
												}
											/>
											{/* Border Color */}
											<FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={ButtonTwoBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ ButtonTwoBorderColorSwitcher: value })}
                                            />

                                            {ButtonTwoBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={ButtonTwoBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonTwoBorderColor: value })}
                                                />
                                            )}

                                            {ButtonTwoBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={ButtonTwoBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ ButtonTwoBorderHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonBorderUnitsHandler}
												spacingUnits={ButtonTwoBorderUnits}
												spacingDesktop={ButtonTwoDesktopBorderWidth}
												spacingTablet={ButtonTwoTabBorderWidth}
												spacingMobile={ButtonTwoMobileBorderWidth}
												handleSpacingUnitHandler={handleButtonBorderUnitChange}
												spacingCombineBtn={ButtonTwoBorderLink}
												spacingCombineBtnHandler={handleButtonBorderCombineBtn}
												setAttributes={setAttributes}
											/>
											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={
													handleButtonBorderRadiusUnitsHandler
												}
												spacingUnits={ButtonTwoBorderRadiusUnits}
												spacingDesktop={ButtonTwoDesktopBorderRadiusWidth}
												spacingTablet={ButtonTwoTabBorderRadiusWidth}
												spacingMobile={ButtonTwoMobileBorderRadiusWidth}
												handleSpacingUnitHandler={
													handleButtonBorderRadiusUnitChange
												}
												spacingCombineBtn={ButtonTwoBorderRadiusLink}
												spacingCombineBtnHandler={
													handleButtonBorderRadiusCombineBtn
												}
												setAttributes={setAttributes}
											/>
										</PanelBody>
										{/*	Connector Style*/}
										{connectorSwitcher && (
											<PanelBody
											title={__("Connector", "frontis-blocks")}
											initialOpen={false}
										>
											<FB_Range
												min={1}
												max={300}
												label={__("Connector Size", "frontis-blocks")}
												rangeValue={connectorSize}
												onChangeHandler={connectorSizeHandler}
												rangeUnitHandler={connectorSizeUnitsHandler}
												deviceType={deviceType}
												units={connectorSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={50}
											/>
											<FB_TypographyControl
                                                fontFamily={connectorFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ connectorFontFamily: value })}

                                                fontSize={connectorFontSize}
                                                onChangeFontSize={(value) => setAttributes({ connectorFontSize: value })}

                                                fontSizeUnits={connectorFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ connectorFontSizeUnits: value })}

                                                fontWeight={connectorFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ connectorFontWeight: value })}

                                                fontStyle={connectorFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ connectorFontStyle: value })}

                                                textTransform={connectorTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ connectorTextTransform: value })}

                                                textDecoration={connectorTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ connectorTextDecoration: value })}

                                                letterSpacing={connectorLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ connectorLetterSpacing: value })}

                                                letterSpacingUnits={connectorLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ connectorLetterSpacingUnits: value })}

                                                lineHeight={connectorSize}
                                                onChangeLineHeight={(value) => setAttributes({ connectorSize: value })}

                                                lineHeightUnits={connectorSizeUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ connectorSizeUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

											{/* Text Color */}
											<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={connectorColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ connectorColorSwitcher: value })}
                                            />

                                            {connectorColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={connectorColor}
                                                    setGlobalColor={(value) => setAttributes({ connectorColor: value })}
                                                />
                                            )}

                                            {connectorColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={connectorHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ connectorHoverColor: value })}
                                                />
                                            )}

											{/* Background Color */}
											<FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={connectorBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ connectorBgColorSwitcher: value })}
                                            />

                                            {connectorBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={connectorBgColor}
                                                    setGlobalColor={(value) => setAttributes({ connectorBgColor: value })}
                                                />
                                            )}

                                            {connectorBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={connectorBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ connectorBgHoverColor: value })}
                                                />
                                            )}

											

											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={connectorBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ connectorBorder: value })
												}
											/>

											<FB_Color
												label={__("Border Color", "frontis-blocks")}
												globalColorSwitcher={connectorBorderColorSwitcher}
												globalColor={connectorBorderColor}
												globalHoverColor={connectorBorderHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ connectorBorderColorSwitcher: value, })}
												handleGlobalColorChange={(value) =>setAttributes({ connectorBorderColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ connectorBorderHoverColor: value, })
												}
											/>
											<FB_Spacing
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={connectorBorderUnitsHandler}
												spacingUnits={connectorBorderUnits}
												spacingDesktop={connectorBorderDesktop}
												spacingTablet={connectorBorderTablet}
												spacingMobile={connectorBorderMobile}
												handleSpacingUnitHandler={connectorBorderUnitChange}
												spacingCombineBtn={connectorBorderLink}
												spacingCombineBtnHandler={connectorBorderCombineBtn}
												setAttributes={setAttributes}
											/>
											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={connectorBorderRadiusUnitsHandler}
												spacingUnits={connectorBorderRadiusUnits}
												spacingDesktop={connectorBorderRadiusDesktop}
												spacingTablet={connectorBorderRadiusTablet}
												spacingMobile={connectorBorderRadiusMobile}
												handleSpacingUnitHandler={connectorBorderRadiusUnitChange}
												spacingCombineBtn={connectorBorderRadiusLink}
												spacingCombineBtnHandler={connectorBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>
										)}
										
										{/*	Icon */}
										{buttonIconAlign === 'icon-text' || 
										buttonIconAlign === 'icon-only' && (
											<PanelBody
											title={__("Icon", "frontis-blocks")}
											initialOpen={false}
										>
											<FB_Range
												min={1}
												max={300}
												label={__("Icon Size", "frontis-blocks")}
												rangeValue={btnIconSize}
												onChangeHandler={btnIconSizeHandler}
												rangeUnitHandler={btnIconSizeUnitsHandler}
												deviceType={deviceType}
												units={btnIconSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={50}
											/>

											<FB_Range
												min={1}
												max={100}
												label={__("Spacing", "frontis-blocks")}
												rangeValue={btnIconSpacing}
												onChangeHandler={(value) => setAttributes({ btnIconSpacing: value }) }
												rangeUnitHandler={(value) => setAttributes({ btnIconSpacingUnits: value }) }
												deviceType={deviceType}
												units={btnIconSpacingUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>
											<FB_Color
												label={__("Icon Color", "frontis-blocks")}
												globalColorSwitcher={btnIconColorSwitcher}
												globalColor={btnIconColor}
												globalHoverColor={btnIconHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ btnIconColorSwitcher: value }) }
												handleGlobalColorChange={(value) => setAttributes({ btnIconColor: value }) }
												handleGlobalHoverColorChange={(value) => setAttributes({ btnIconHoverColor: value }) }
											/>
										</PanelBody>
										)}
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-z-index-wrapper">
												<PanelBody
													title={__("Z Index", "frontis-blocks")}
													initialOpen={true}
													className="fb-setting-z-index-header"
												>
													<RangeControl
														value={dualButtonGlobalZIndex}
														onChange={(value) => setAttributes({ dualButtonGlobalZIndex: value === 0 ? undefined : value, })}
														min={0}
														max={10000000}
														step={1}
														allowReset
														resetFallbackValue={""}
														className="default-range"
													/>
												</PanelBody>

												<PanelBody
													title={__("Padding and Margin", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_Spacing
														label={__("Padding", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={ handleGlobalPaddingUnitsHandler }
														spacingUnits={dualButtonGlobalPaddingUnits}
														spacingDesktop={dualButtonGlobalPaddingDesktop}
														spacingTablet={dualButtonGlobalPaddingTablet}
														spacingMobile={dualButtonGlobalPaddingMobile}
														handleSpacingUnitHandler={ handleGlobalPaddingUnitChange }
														spacingCombineBtn={dualButtonGlobalPaddingLink}
														spacingCombineBtnHandler={ handleGlobalPaddingCombineBtn }
														setAttributes={setAttributes}
													/>
													<FB_Spacing
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalMarginUnitsHandler}
														spacingUnits={dualButtonGlobalMarginUnits}
														spacingDesktop={dualButtonGlobalMarginDesktop}
														spacingTablet={dualButtonGlobalMarginTablet}
														spacingMobile={dualButtonGlobalMarginMobile}
														handleSpacingUnitHandler={ handleGlobalMarginUnitChange }
														spacingCombineBtn={dualButtonGlobalMarginLink}
														spacingCombineBtnHandler={ handleGlobalMarginCombineBtn }
														setAttributes={setAttributes}
													/>
												</PanelBody>

												<PanelBody title="Background Color" initialOpen={false}>
													<FB_Color
														label={__("Background Color", "frontis-blocks")}
														globalColorSwitcher={ dualButtonGlobalBgColorSwitcher }
														globalColor={dualButtonGlobalBgColor}
														globalHoverColor={dualButtonGlobalBgHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({ dualButtonGlobalBgColorSwitcher: value, })}
														handleGlobalColorChange={(value) => setAttributes({ dualButtonGlobalBgColor: value }) }
														handleGlobalHoverColorChange={(value) => setAttributes({ dualButtonGlobalBgHoverColor: value, })
														}
													/>
												</PanelBody>
												<PanelBody
													title={__("Border and Shadow", "frontis-blocks")}
													initialOpen={false}
												>
													<SelectControl
														label={__("Border Style", "frontis-blocks")}
														value={dualButtonGlobalBorder}
														options={BORDER_STYLES}
														onChange={(value) => setAttributes({ dualButtonGlobalBorder: value }) }
													/>

													<FB_Color
														label={__("Border Color", "frontis-blocks")}
														globalColorSwitcher={ dualButtonGlobalBorderColorSwitcher }
														globalColor={dualButtonGlobalBorderColor}
														globalHoverColor={dualButtonGlobalBorderHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({dualButtonGlobalBorderColorSwitcher: value,})}
														handleGlobalColorChange={(value) => setAttributes({dualButtonGlobalBorderColor: value,})}
														handleGlobalHoverColorChange={(value) =>setAttributes({dualButtonGlobalBorderHoverColor: value,})}
													/>

													<FB_Spacing
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderUnitsHandler}
														spacingUnits={dualButtonGlobalBorderUnits}
														spacingDesktop={dualButtonGlobalBorderDesktop}
														spacingTablet={dualButtonGlobalBorderTablet}
														spacingMobile={dualButtonGlobalBorderMobile}
														handleSpacingUnitHandler={handleGlobalBorderUnitChange}
														spacingCombineBtn={dualButtonGlobalBorderLink}
														spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={ handleGlobalBorderRadiusUnitsHandler }
														spacingUnits={dualButtonGlobalBorderRadiusUnits}
														spacingDesktop={dualButtonGlobalBorderRadiusDesktop}
														spacingTablet={dualButtonGlobalBorderRadiusTablet}
														spacingMobile={dualButtonGlobalBorderRadiusMobile}
														handleSpacingUnitHandler={ handleGlobalBorderRadiusUnitChange }
														spacingCombineBtn={dualButtonGlobalBorderRadiusLink}
														spacingCombineBtnHandler={ handleGlobalBorderRadiusCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_BoxShadowControl
														onBoxShadowChange={(value) => setAttributes({ dualButtonGlobalBoxShadowValues: value, }) }
														initialShadowValue={dualButtonGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) => setAttributes({ dualButtonGlobalBoxShadowCssValue: value, })}
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
