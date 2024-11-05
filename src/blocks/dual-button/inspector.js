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
	BUTTONS_DIRECTION
} from "./constants/constants";

import { useState, useEffect } from "@wordpress/element";
import FB_ResponsiveControl from "@Components/responsive-control";
import FB_Color from "@Components/color";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
		ButtonText,
		ButtonUrl,
		ButtonTargetUrl,
		ButtonWidth,
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
		buttonsDirection
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

	const btnIconSpacingHandler = (value) => {
		setAttributes({ btnIconSpacing: value });
	};

	const btnIconSpacingUnitsHandler = (value) => {
		setAttributes({ btnIconSpacingUnits: value });
	};

	//Button One
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
	//Button Two
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
	/** Start Border Width */
	const [previousBorderWidth, setPreviousBorderWidth] = useState(
		ButtonDesktopBorderWidth,
	);
	/** Function to update all Border Width values */
	const updateAllBorderWidth = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleBorderWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					ButtonDesktopBorderWidth: {
						...ButtonDesktopBorderWidth,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					ButtonTabBorderWidth: { ...ButtonTabBorderWidth, [direction]: value },
				});
				break;
			case "Mobile":
				setAttributes({
					ButtonMobileBorderWidth: {
						...ButtonMobileBorderWidth,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if ButtonBorderLink is true */
		if (ButtonBorderLink) {
			updateAllBorderWidth(value, deviceType);
		}
	};

	/** Function to handle ButtonBorderLink toggle */
	const handleBorderWidthLinkToggle = () => {
		if (!ButtonBorderLink) {
			setAttributes({ ButtonDesktopBorderWidth: previousBorderWidth });
		}
		/** setButtonBorderLinkLink(!ButtonBorderLink) */
		setAttributes({ ButtonBorderLink: !ButtonBorderLink });
	};

	/** Update previousborderWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderWidth(ButtonDesktopBorderWidth);
	}, [ButtonDesktopBorderWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderWidthDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default Border Width for desktop (using ButtonDesktopBorderWidth) */
	const borderWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderUnits} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits}`;
	/** End Border Width */

	/** Start Border Radius Width */
	const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(
		ButtonDesktopBorderRadiusWidth,
	);
	/** Function to update all Border Width values */
	const updateAllBorderRadiusWidth = (value, device) => {
		switch (device) {
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
	};

	/** Function to handle input change */
	const handleBorderRadiusWidthInputChange = (e, direction) => {
		const value = e.target.value;
		switch (deviceType) {
			case "Desktop":
				setAttributes({
					ButtonDesktopBorderRadiusWidth: {
						...ButtonDesktopBorderRadiusWidth,
						[direction]: value,
					},
				});
				break;
			case "Tablet":
				setAttributes({
					ButtonTabBorderRadiusWidth: {
						...ButtonTabBorderRadiusWidth,
						[direction]: value,
					},
				});
				break;
			case "Mobile":
				setAttributes({
					ButtonMobileBorderRadiusWidth: {
						...ButtonMobileBorderRadiusWidth,
						[direction]: value,
					},
				});
				break;
			default:
				break;
		}
		/** Update all padding values if ButtonBorderRadiusLink is true */
		if (ButtonBorderRadiusLink) {
			updateAllBorderRadiusWidth(value, deviceType);
		}
	};

	/** Function to handle ButtonBorderRadiusLink toggle */
	const handleBorderRadiusWidthLinkToggle = () => {
		if (!ButtonBorderRadiusLink) {
			setAttributes({
				ButtonDesktopBorderRadiusWidth: previousBorderRadiusWidth,
			});
		}
		/** setButtonBorderRadiusLinkLink(!ButtonBorderRadiusLink) */
		setAttributes({ ButtonBorderRadiusLink: !ButtonBorderRadiusLink });
	};

	/** Update previousBorderRadiusWidth state when Border Width changes */
	useEffect(() => {
		setPreviousBorderRadiusWidth(ButtonDesktopBorderRadiusWidth);
	}, [ButtonDesktopBorderRadiusWidth]);

	/** Function to handle device click for Border Width */
	const handleBorderRadiusWidthDeviceClick = (device) => {
		setAttributes({ deviceType: device });
	};

	/** Default Border Width for desktop (using ButtonDesktopBorderWidth) */
	const borderRadiusWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits}`;
	/** End Border Radius Width */

	/* set default values for the style attributes */
	useEffect(() => {
		if (ButtonFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${ButtonFontFamily.replace(
				" ",
				"+",
			)}`;
			const linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [ButtonFontFamily]);

	const iconHandler = (IconName) => {
		setAttributes({ ButtonIcon: IconName });
	};

	const iconHandlerTwo = (IconName) => {
		setAttributes({ ButtonTwoIcon: IconName });
	};

	return (
		<>
			<style>
				{`
                .fb-dual-button-container.${blockID} .fb-advanced-button {
                    font-family: ${
											ButtonFontFamily !== "default"
												? ButtonFontFamily
												: ButtonFontFamily
										};
                    font-size: ${
											ButtonFontSize !== undefined
												? `${ButtonFontSize}${ButtonFontSizeUnits}`
												: ""
										};
                    font-weight: ${ButtonFontWeight};
                    font-style: ${ButtonFontStyle};
                    text-transform: ${ButtonTextTransform};
                    text-decoration: ${ButtonTextDecoration};
                    ${
											ButtonLetterSpacing !== undefined
												? `letter-spacing: ${ButtonLetterSpacing}${ButtonLetterSpacingUnits};`
												: ""
										}
                    ${
											ButtonLineHeight !== undefined
												? `line-height: ${ButtonLineHeight}${ButtonLineHeightUnits};`
												: ""
										}
                    padding: ${buttonDesktopPadding};
                    margin: ${buttonDesktopMargin};
                    z-index: ${ButtonZIndex !== undefined ? ButtonZIndex : ""};
                    width: ${
											ButtonWidth !== undefined ? `${ButtonWidth}%` : ""
										};
                }
				.fb-dual-button-container.${blockID} .fb-dual-button-wrapper
                {
					gap: ${buttonsGap.Desktop}${buttonsGapUnits.Desktop};
                }
				.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button{
                    ${
					ButtonBgColor !== undefined ? `background-color: ${ButtonBgColor};` : ""
					}
					border: ${ButtonBorder};
					${
						ButtonBorderColor !== undefined ? `border-color: ${ButtonBorderColor};` : ""
					}
                    border-width: ${borderWidth};
                    border-radius: ${borderRadiusWidth};
                }
				.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
                    ${
											ButtonTwoBgColor !== undefined
												? `background-color: ${ButtonTwoBgColor} !important;`
												: ""
										}
                }
                .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one .fb-advanced-button-text {
                    ${ButtonColor !== undefined ? `color: ${ButtonColor};` : ""}
                }
                .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two .fb-advanced-button-text {
                    ${
											ButtonTwoColor !== undefined
												? `color: ${ButtonTwoColor};`
												: ""
										}
                }
                .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one:hover .fb-advanced-button-text {
                    ${
											ButtonHoverColor !== undefined
												? `color: ${ButtonHoverColor};`
												: ""
										}
                }

                .fb-dual-button-container.${blockID} .fb-advanced-button:hover {
                    ${
											ButtonBgHoverColor !== undefined
												? `background-color: ${ButtonBgHoverColor};`
												: ""
										}
                }
                @media only screen and (max-width: 1024px) {
                    .fb-dual-button-container.${blockID} .fb-advanced-button {
                        padding: ${buttonTabPadding};
                        margin: ${buttonTabMargin};
                        border-width: ${
													ButtonTabBorderWidth.top
												}${ButtonBorderUnits} ${
													ButtonTabBorderWidth.right
												}${ButtonBorderUnits} ${
													ButtonTabBorderWidth.bottom
												}${ButtonBorderUnits} ${
													ButtonTabBorderWidth.left
												}${ButtonBorderUnits} !important;
                        border-radius: ${
													ButtonTabBorderRadiusWidth.top
												}${ButtonBorderRadiusUnits} ${
													ButtonTabBorderRadiusWidth.right
												}${ButtonBorderRadiusUnits} ${
													ButtonTabBorderRadiusWidth.bottom
												}${ButtonBorderRadiusUnits} ${
													ButtonTabBorderRadiusWidth.left
												}${ButtonBorderRadiusUnits} !important;
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-dual-button-container.${blockID} .fb-advanced-button {
                        padding: ${buttonMobilePadding};
                        margin: ${buttonMobileMargin};
                        border-width: ${
													ButtonMobileBorderWidth.top
												}${ButtonBorderUnits} ${
													ButtonMobileBorderWidth.right
												}${ButtonBorderUnits} ${
													ButtonMobileBorderWidth.bottom
												}${ButtonBorderUnits} ${
													ButtonMobileBorderWidth.left
												}${ButtonBorderUnits} !important;
                        border-radius: ${
													ButtonMobileBorderRadiusWidth.top
												}${ButtonBorderRadiusUnits} ${
													ButtonMobileBorderRadiusWidth.right
												}${ButtonBorderRadiusUnits} ${
													ButtonMobileBorderRadiusWidth.bottom
												}${ButtonBorderRadiusUnits} ${
													ButtonMobileBorderRadiusWidth.left
												}${ButtonBorderRadiusUnits} !important;
                    }
                }

                .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
                    ${
											connectorBgColor !== undefined
												? `background-color: ${connectorBgColor};`
												: ""
										}
                    font-family: ${
											connectorFontFamily !== "default"
												? connectorFontFamily
												: connectorFontFamily
										};
                    font-size: ${
											connectorFontSize !== undefined
												? `${connectorFontSize}${connectorFontSizeUnits}`
												: ""
										};
                    font-weight: ${connectorFontWeight};
                    font-style: ${connectorFontStyle};
                    text-transform: ${connectorTextTransform};
                    text-decoration: ${connectorTextDecoration};
                    ${
											ButtonLetterSpacing !== undefined
												? `letter-spacing: ${connectorLetterSpacing}${connectorLetterSpacingUnits};`
												: ""
										}
                    ${
											connectorLineHeight !== undefined
												? `line-height: ${connectorLineHeight}${connectorLineHeightUnits};`
												: ""
										}
                    width: ${connectorSize.Desktop}${
											connectorSizeUnits.Desktop
										};
                    height: ${connectorSize.Desktop}${
											connectorSizeUnits.Desktop
										};
                }
                @media only screen and (max-width: 1024px) {
                .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text{
                width: ${connectorSize.Tablet}${connectorSizeUnits.Tablet};
                height: ${connectorSize.Tablet}${connectorSizeUnits.Tablet};
                }
                }
                @media only screen and (max-width: 767px) {
                .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text{
                width: ${connectorSize.Mobile}${connectorSizeUnits.Mobile};
                height: ${connectorSize.Mobile}${connectorSizeUnits.Mobile};
                }
                }

				.fb-dual-button-container.${blockID} .fb-advanced-button-icon-wrapper svg {
                    ${
											btnIconColor !== undefined
												? `fill: ${btnIconColor};`
												: ""
										}
                    
                    width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};
                }
				.fb-dual-button-container.${blockID} .fb-advanced-button
                {
					gap: ${btnIconSpacing.Desktop}${btnIconSpacingUnits.Desktop};
                }
				.fb-dual-button-container.${blockID} .fb-dual-button-one:hover svg,
				.fb-dual-button-container.${blockID} .fb-dual-button-two:hover svg {
                ${
									btnIconHoverColor !== undefined
										? `fill: ${btnIconHoverColor};`
										: ""
								}
                }
                @media only screen and (max-width: 1024px) {
                .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text{
                width: ${btnIconSize.Tablet}${btnIconSizeUnits.Tablet};
                }
                }
                @media only screen and (max-width: 767px) {
                .fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text{
                width: ${btnIconSize.Mobile}${btnIconSizeUnits.Mobile};
                }
                }

                .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two {
                    ${
											ButtonBgColor !== undefined
												? `background-color: ${ButtonBgColor};`
												: ""
										}
                    border: ${ButtonTwoBorder};
                    border-width: ${buttonBorderDesktopWidth};
                    border-radius: ${buttonBorderRadiusDesktopWidth};
                    ${
					ButtonTwoBorderColor !== undefined ? `border-color: ${ButtonTwoBorderColor};` : ""
					}
                }
                @media only screen and  (max-width:1024px){
                .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two {
                    border: ${ButtonTwoBorder};
                    border-width: ${buttonBorderTabletWidth};
                    border-radius: ${buttonBorderRadiusTabletWidth};
                }
                }
                @media only screen and  (max-width:727px){
                .fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two {
                    border: ${ButtonTwoBorder};
                    border-width: ${buttonBorderMobileWidth};
                    border-radius: ${buttonBorderRadiusMobileWidth};
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
													<SelectControl
																		label={__("Icon Position", "frontis-blocks")}
																		options={ICON_POSITION}
																		value={btnIconPosition}
																		onChange={(value) =>
																			setAttributes({ btnIconPosition: value })
																		}
																	/>
												</PanelBody>
											</div>
											{/* Connector */}
											<div className="fb-dual-button-connenctor-wrapper">
												<PanelBody
													title={__("Connector", "frontis-blocks")}
													initialOpen={true}
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
													initialOpen={true}
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
													<SelectControl
																		label={__("Icon Position", "frontis-blocks")}
																		options={ICON_POSITION}
																		value={btnTwoIconPosition}
																		onChange={(value) =>
																			setAttributes({ btnTwoIconPosition: value })
																		}
																	/>
												</PanelBody>
											</div>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Buttons", "frontis-blocks")}
											initialOpen={true}
										>
											<BaseControl
												label={__("Width", "frontis-blocks")}
												className="fb-advanced-button-width"
											>
												<RangeControl
													value={ButtonWidth}
													onChange={(value) =>
														setAttributes({
															ButtonWidth: value === 0 ? undefined : value,
														})
													}
													min={1}
													max={100}
													step={1}
													allowReset
													resetFallbackValue={undefined}
												/>
											</BaseControl>
											<SelectControl
																		label={__("Direction", "frontis-blocks")}
																		options={BUTTONS_DIRECTION}
																		value={buttonsDirection}
																		onChange={(value) =>
																			setAttributes({ buttonsDirection: value })
																		}
																	/>
											<BaseControl
												label={__("Typography", "frontis-blocks")}
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
																"frontis-blocks",
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
																		label={__("Font Family", "frontis-blocks")}
																		options={FONT_FAMILYS}
																		value={ButtonFontFamily}
																		onChange={(value) =>
																			setAttributes({ ButtonFontFamily: value })
																		}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>
																				{__("Font Size", "frontis-blocks")}
																			</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup className="fb-setting-fontsize-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() =>
																							setAttributes({
																								ButtonFontSizeUnits: item.value,
																							})
																						}
																						className={`fb-setting-fontsize-units-switcher ${
																							ButtonFontSizeUnits === item.value
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
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={ButtonFontSize}
																			onChange={(value) =>
																				setAttributes({ ButtonFontSize: value })
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
																		label={__("Font Weight", "frontis-blocks")}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "700",
																			},
																			{
																				label: __("100", "frontis-blocks"),
																				value: "100",
																			},
																			{
																				label: __("200", "frontis-blocks"),
																				value: "200",
																			},
																			{
																				label: __("300", "frontis-blocks"),
																				value: "300",
																			},
																			{
																				label: __("400", "frontis-blocks"),
																				value: "400",
																			},
																			{
																				label: __("500", "frontis-blocks"),
																				value: "500",
																			},
																			{
																				label: __("600", "frontis-blocks"),
																				value: "600",
																			},
																			{
																				label: __("700", "frontis-blocks"),
																				value: "700",
																			},
																			{
																				label: __("800", "frontis-blocks"),
																				value: "800",
																			},
																			{
																				label: __("900", "frontis-blocks"),
																				value: "900",
																			},
																		]}
																		value={ButtonFontWeight}
																		onChange={(value) =>
																			setAttributes({ ButtonFontWeight: value })
																		}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-blocks")}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "normal",
																			},
																			{
																				label: __("Normal", "frontis-blocks"),
																				value: "normal",
																			},
																			{
																				label: __("Italic", "frontis-blocks"),
																				value: "italic",
																			},
																			{
																				label: __("Oblique", "frontis-blocks"),
																				value: "oblique",
																			},
																		]}
																		value={ButtonFontStyle}
																		onChange={(value) =>
																			setAttributes({ ButtonFontStyle: value })
																		}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__(
																			"Text Transform",
																			"frontis-blocks",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __(
																					"Capitalize",
																					"frontis-blocks",
																				),
																				value: "capitalize",
																			},
																			{
																				label: __(
																					"Uppercase",
																					"frontis-blocks",
																				),
																				value: "uppercase",
																			},
																			{
																				label: __(
																					"Lowercase",
																					"frontis-blocks",
																				),
																				value: "lowercase",
																			},
																		]}
																		value={ButtonTextTransform}
																		onChange={(value) =>
																			setAttributes({
																				ButtonTextTransform: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__(
																			"Text Decoration",
																			"frontis-blocks",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __(
																					"Underline",
																					"frontis-blocks",
																				),
																				value: "underline",
																			},
																			{
																				label: __("Overline", "frontis-blocks"),
																				value: "overline",
																			},
																			{
																				label: __(
																					"Line Through",
																					"frontis-blocks",
																				),
																				value: "line-through",
																			},
																		]}
																		value={ButtonTextDecoration}
																		onChange={(value) =>
																			setAttributes({
																				ButtonTextDecoration: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>
																				{__("Letter Spacing", "frontis-blocks")}
																			</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup className="fb-setting-letterspacing-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() =>
																							setAttributes({
																								ButtonLetterSpacingUnits:
																									item.value,
																							})
																						}
																						className={`fb-setting-letterspacing-units-switcher ${
																							ButtonLetterSpacingUnits ===
																							item.value
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
																	<RangeControl
																		value={ButtonLetterSpacing}
																		onChange={(value) =>
																			setAttributes({
																				ButtonLetterSpacing:
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
																				{__("Line Height", "frontis-blocks")}
																			</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup className="fb-setting-lineheight-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() =>
																							setAttributes({
																								ButtonLineHeightUnits:
																									item.value,
																							})
																						}
																						className={`fb-setting-lineheight-units-switcher ${
																							ButtonLineHeightUnits ===
																							item.value
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
																	<RangeControl
																		value={ButtonLineHeight}
																		onChange={(value) =>
																			setAttributes({
																				ButtonLineHeight:
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
                                                        min={1}
                                                        max={300}
                                                        label={__("Gap", "frontis-blocks")}
                                                        rangeValue={buttonsGap}
                                                        onChangeHandler={(value) => setAttributes({ buttonsGap: value })}
                                                        rangeUnitHandler={(value) => setAttributes({ buttonsGapUnits: value })}
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
											<BaseControl
												label={__("Text Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	ButtonColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																ButtonColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{ButtonColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonColor}
																			onChange={(value) =>
																				setAttributes({ ButtonColor: value })
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonColor}
																			onChange={(value) =>
																				setAttributes({ ButtonColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{ButtonColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonHoverColor: value,
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

											<BaseControl
												label={__("Background Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	ButtonBgColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																ButtonBgColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{ButtonBgColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonBgColor}
																			onChange={(value) =>
																				setAttributes({ ButtonBgColor: value })
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonBgColor}
																			onChange={(value) =>
																				setAttributes({ ButtonBgColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{ButtonBgColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonBgHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonBgHoverColor: value,
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
											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={ButtonBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ ButtonBorder: value })
												}
											/>

											<BaseControl
												label={__("Border Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	ButtonBorderColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																ButtonBorderColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{ButtonBorderColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonBorderColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonBorderColor: value,
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

											{ButtonBorderColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonBorderHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonBorderHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonBorderHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonBorderHoverColor: value,
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
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleButtonOneBorderUnitsHandler}
												spacingUnits={ButtonBorderUnits}
												spacingDesktop={ButtonDesktopBorderWidth}
												spacingTablet={ButtonTabBorderWidth}
												spacingMobile={ButtonMobileBorderWidth}
												handleSpacingUnitHandler={handleButtonOneBorderUnitChange}
												spacingCombineBtn={ButtonTwoBorderLink}
												spacingCombineBtnHandler={handleButtonOneBorderCombineBtn}
												setAttributes={setAttributes}
											/>
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
																{UNIT_TYPES.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				ButtonBorderRadiusUnits: item.value,
																			})
																		}
																		className={`fb-setting-units-type-switcher ${
																			ButtonBorderRadiusUnits === item.value
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
																{__("Top", "frontis-blocks")}
															</label>
															<input
																type="number"
																name="top"
																value={
																	deviceType === "Desktop"
																		? ButtonDesktopBorderRadiusWidth.top
																		: deviceType === "Tablet"
																		? ButtonTabBorderRadiusWidth.top
																		: ButtonMobileBorderRadiusWidth.top
																}
																onChange={(e) =>
																	handleBorderRadiusWidthInputChange(e, "top")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Right", "frontis-blocks")}
															</label>
															<input
																type="number"
																name="right"
																value={
																	deviceType === "Desktop"
																		? ButtonDesktopBorderRadiusWidth.right
																		: deviceType === "Tablet"
																		? ButtonTabBorderRadiusWidth.right
																		: ButtonMobileBorderRadiusWidth.right
																}
																onChange={(e) =>
																	handleBorderRadiusWidthInputChange(e, "right")
																}
															/>
														</div>
														<div className="fb-setting-spacing-input-wrapper">
															<label className="fb-setting-spacing-input-label">
																{__("Bottom", "frontis-blocks")}
															</label>
															<input
																type="number"
																name="bottom"
																value={
																	deviceType === "Desktop"
																		? ButtonDesktopBorderRadiusWidth.bottom
																		: deviceType === "Tablet"
																		? ButtonTabBorderRadiusWidth.bottom
																		: ButtonMobileBorderRadiusWidth.bottom
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
																{__("Left", "frontis-blocks")}
															</label>
															<input
																type="number"
																name="left"
																value={
																	deviceType === "Desktop"
																		? ButtonDesktopBorderRadiusWidth.left
																		: deviceType === "Tablet"
																		? ButtonTabBorderRadiusWidth.left
																		: ButtonMobileBorderRadiusWidth.left
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
																	ButtonBorderRadiusLink
																		? "dashicons-admin-links"
																		: "dashicons-editor-unlink"
																} ${
																	ButtonBorderRadiusLink ? "is-checked" : ""
																}`}
																onClick={handleBorderRadiusWidthLinkToggle}
															></span>
														</div>
													</div>
												</div>
											</div>
										</PanelBody>
										{/*Spacing*/}
										<PanelBody title="Button Two" initialOpen={false}>
											{/* Border */}
											<BaseControl
												label={__("Text Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	ButtonTwoColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																ButtonTwoColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{ButtonTwoColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonTwoColor}
																			onChange={(value) =>
																				setAttributes({ ButtonTwoColor: value })
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonTwoColor}
																			onChange={(value) =>
																				setAttributes({ ButtonTwoColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{ButtonTwoColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonTwoHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonTwoHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoHoverColor: value,
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

											<BaseControl
												label={__("Background Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	ButtonTwoBgColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																ButtonTwoBgColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{ButtonTwoBgColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonTwoBgColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBgColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonTwoBgColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBgColor: value,
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

											{ButtonTwoBgColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonTwoBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBgHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonTwoBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBgHoverColor: value,
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
											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={ButtonTwoBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ ButtonTwoBorder: value })
												}
											/>

											<BaseControl
												label={__("Border Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	ButtonTwoBorderColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																ButtonTwoBorderColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{ButtonTwoBorderColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonTwoBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBorderColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonTwoBorderColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBorderColor: value,
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

											{ButtonTwoBorderColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={ButtonTwoBorderHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBorderHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={ButtonTwoBorderHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					ButtonTwoBorderHoverColor: value,
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
											{/* Margin */}
										</PanelBody>
										{/*	Button Two */}

										{/*Spacing*/}

										{/*	Connector */}
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
											<BaseControl
												label={__("Typography", "frontis-blocks")}
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
																"frontis-blocks",
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
																		label={__("Font Family", "frontis-blocks")}
																		options={FONT_FAMILYS}
																		value={ButtonFontFamily}
																		onChange={(value) =>
																			setAttributes({
																				connectorFontFamily: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-fontsize-wrapper">
																	<div className="fb-setting-fontsize-header">
																		<div className="fb-setting-fontsize-label">
																			<span>
																				{__("Font Size", "frontis-blocks")}
																			</span>
																		</div>
																		<div className="fb-setting-fontsize-units">
																			<ButtonGroup className="fb-setting-fontsize-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() =>
																							setAttributes({
																								connectorFontSizeUnits:
																									item.value,
																							})
																						}
																						className={`fb-setting-fontsize-units-switcher ${
																							connectorFontSizeUnits ===
																							item.value
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
																	<div className="fb-setting-fontsize-rangecontrol">
																		<RangeControl
																			value={connectorFontSize}
																			onChange={(value) =>
																				setAttributes({
																					connectorFontSize: value,
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
																		label={__("Font Weight", "frontis-blocks")}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "700",
																			},
																			{
																				label: __("100", "frontis-blocks"),
																				value: "100",
																			},
																			{
																				label: __("200", "frontis-blocks"),
																				value: "200",
																			},
																			{
																				label: __("300", "frontis-blocks"),
																				value: "300",
																			},
																			{
																				label: __("400", "frontis-blocks"),
																				value: "400",
																			},
																			{
																				label: __("500", "frontis-blocks"),
																				value: "500",
																			},
																			{
																				label: __("600", "frontis-blocks"),
																				value: "600",
																			},
																			{
																				label: __("700", "frontis-blocks"),
																				value: "700",
																			},
																			{
																				label: __("800", "frontis-blocks"),
																				value: "800",
																			},
																			{
																				label: __("900", "frontis-blocks"),
																				value: "900",
																			},
																		]}
																		value={connectorFontWeight}
																		onChange={(value) =>
																			setAttributes({
																				connectorFontWeight: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-fontstyle-wrapper">
																	<SelectControl
																		label={__("Font Style", "frontis-blocks")}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "normal",
																			},
																			{
																				label: __("Normal", "frontis-blocks"),
																				value: "normal",
																			},
																			{
																				label: __("Italic", "frontis-blocks"),
																				value: "italic",
																			},
																			{
																				label: __("Oblique", "frontis-blocks"),
																				value: "oblique",
																			},
																		]}
																		value={connectorFontStyle}
																		onChange={(value) =>
																			setAttributes({
																				connectorFontStyle: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-texttransform-wrapper">
																	<SelectControl
																		label={__(
																			"Text Transform",
																			"frontis-blocks",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __(
																					"Capitalize",
																					"frontis-blocks",
																				),
																				value: "capitalize",
																			},
																			{
																				label: __(
																					"Uppercase",
																					"frontis-blocks",
																				),
																				value: "uppercase",
																			},
																			{
																				label: __(
																					"Lowercase",
																					"frontis-blocks",
																				),
																				value: "lowercase",
																			},
																		]}
																		value={connectorTextTransform}
																		onChange={(value) =>
																			setAttributes({
																				connectorTextTransform: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-textdecoration-wrapper">
																	<SelectControl
																		label={__(
																			"Text Decoration",
																			"frontis-blocks",
																		)}
																		options={[
																			{
																				label: __("Default", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __("None", "frontis-blocks"),
																				value: "none",
																			},
																			{
																				label: __(
																					"Underline",
																					"frontis-blocks",
																				),
																				value: "underline",
																			},
																			{
																				label: __("Overline", "frontis-blocks"),
																				value: "overline",
																			},
																			{
																				label: __(
																					"Line Through",
																					"frontis-blocks",
																				),
																				value: "line-through",
																			},
																		]}
																		value={connectorTextDecoration}
																		onChange={(value) =>
																			setAttributes({
																				connectorTextDecoration: value,
																			})
																		}
																	/>
																</div>
																<div className="fb-setting-letterspacing-wrapper">
																	<div className="fb-setting-letterspacing-header">
																		<div className="fb-setting-letterspacing-label">
																			<span>
																				{__("Letter Spacing", "frontis-blocks")}
																			</span>
																		</div>
																		<div className="fb-setting-letterspacing-units">
																			<ButtonGroup className="fb-setting-letterspacing-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() =>
																							setAttributes({
																								connectorLetterSpacingUnits:
																									item.value,
																							})
																						}
																						className={`fb-setting-letterspacing-units-switcher ${
																							connectorLetterSpacingUnits ===
																							item.value
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
																	<RangeControl
																		value={connectorLetterSpacing}
																		onChange={(value) =>
																			setAttributes({
																				connectorLetterSpacing:
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
																				{__("Line Height", "frontis-blocks")}
																			</span>
																		</div>
																		<div className="fb-setting-lineheight-units">
																			<ButtonGroup className="fb-setting-lineheight-units-wrap">
																				{UNIT_TYPES.map((item, key) => (
																					<Button
																						key={key}
																						onClick={() =>
																							setAttributes({
																								connectorLineHeightUnits:
																									item.value,
																							})
																						}
																						className={`fb-setting-lineheight-units-switcher ${
																							connectorLineHeightUnits ===
																							item.value
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
																	<RangeControl
																		value={connectorLineHeight}
																		onChange={(value) =>
																			setAttributes({
																				connectorLineHeight:
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
												label={__("Text Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	connectorColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																connectorColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{connectorColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={connectorColor}
																			onChange={(value) =>
																				setAttributes({ connectorColor: value })
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={connectorColor}
																			onChange={(value) =>
																				setAttributes({ connectorColor: value })
																			}
																		/>
																	</div>
																</BaseControl>
															</div>
														)}
													/>
												</BaseControl>
											)}

											{connectorColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={connectorHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					connectorHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={connectorHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					connectorHoverColor: value,
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

											<BaseControl
												label={__("Background Color", "frontis-blocks")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{NORMAL_HOVER.map((item, key) => (
														<Button
															key={key}
															onClick={() =>
																setAttributes({
																	connectorBgColorSwitcher: item.value,
																})
															}
															className={`fb-setting-color-panel-btn-switchr ${
																connectorBgColorSwitcher === item.value
																	? "active"
																	: ""
															}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{connectorBgColorSwitcher === "normal" && (
												<BaseControl
													label={__("Nomal Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={connectorBgColor}
																			onChange={(value) =>
																				setAttributes({
																					connectorBgColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={connectorBgColor}
																			onChange={(value) =>
																				setAttributes({
																					connectorBgColor: value,
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

											{connectorBgColorSwitcher === "hover" && (
												<BaseControl
													label={__("Hover Color", "frontis-blocks")}
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
																	"frontis-blocks",
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
																			color={connectorBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					connectorBgHoverColor: value,
																				})
																			}
																			enableAlpha={true}
																		/>
																		<div className="fb-setting-hover-color-label">
																			{__("Default Colors", "frontis-blocks")}
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
																			value={connectorBgHoverColor}
																			onChange={(value) =>
																				setAttributes({
																					connectorBgHoverColor: value,
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
										</PanelBody>
										{/*	Icon */}
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
												max={300}
												label={__("Spacing", "frontis-blocks")}
												rangeValue={btnIconSpacing}
												onChangeHandler={btnIconSpacingHandler}
												rangeUnitHandler={btnIconSpacingUnitsHandler}
												deviceType={deviceType}
												units={btnIconSpacingUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={50}
											/>
											<FB_Color
												label={__("Icon Color", "frontis-blocks")}
												globalColorSwitcher={btnIconColorSwitcher}
												globalColor={btnIconColor}
												globalHoverColor={btnIconHoverColor}
												handleColorSwitcherChange={(value) =>
													setAttributes({ btnIconColorSwitcher: value })
												}
												handleGlobalColorChange={(value) =>
													setAttributes({ btnIconColor: value })
												}
												handleGlobalHoverColorChange={(value) =>
													setAttributes({ btnIconHoverColor: value })
												}
											/>
										</PanelBody>
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
														value={ButtonZIndex}
														onChange={(value) =>
															setAttributes({
																ButtonZIndex: value === 0 ? undefined : value,
															})
														}
														min={1}
														max={100}
														step={1}
														allowReset
														resetFallbackValue={undefined}
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
