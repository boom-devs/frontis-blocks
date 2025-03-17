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
	ICON_ALIGN,
	BORDER_STYLES,
	ICON_POSITION,
	BUTTONS_DIRECTION,
	PRESETS,
	OVERFLOW_OP
} from "./constants/constants";

import { useState, useEffect, useMemo } from "@wordpress/element";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';


export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		// deviceType,
		dualButtonPresetStyle,
		ButtonText,
		ButtonUrl,
		ButtonTargetUrl,
		ButtonWidth,
		ButtonWidthWidthUnits,
		ButtonGlobalTypoSwitcher,
		ButtonGlobalTypographyData,
		ButtonGlobalTypoType,
		ButtonGlobalTypoOption,
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
		btnIconBgColorSwitcher,
		btnIconBgColor,
		btnIconBgHoverColor,

		btnTwoIconColorSwitcher,
		btnTwoIconColor,
		btnTwoIconHoverColor,
		btnTwoIconSize,
		btnTwoIconSizeUnits,
		btnIconTwoBgColorSwitcher,
		btnTwoIconBgColor,
		btnTwoIconBgHoverColor,

		iconBorder,
		iconBorderColorSwitcher,
		iconBorderColor,
		iconBorderHoverColor,
		iconBorderUnits,
		iconBorderDesktop,
		iconBorderTablet,
		iconBorderMobile,
		iconBorderLink,
		iconBorderRadiusUnits,
		iconBorderRadiusDesktop,
		iconBorderRadiusTablet,
		iconBorderRadiusMobile,
		iconBorderRadiusLink,

		iconTwoBorder,
		iconTwoBorderColorSwitcher,
		iconTwoBorderColor,
		iconTwoBorderHoverColor,
		iconTwoBorderUnits,
		iconTwoBorderDesktop,
		iconTwoBorderTablet,
		iconTwoBorderMobile,
		iconTwoBorderLink,
		iconTwoBorderRadiusUnits,
		iconTwoBorderRadiusDesktop,
		iconTwoBorderRadiusTablet,
		iconTwoBorderRadiusMobile,
		iconTwoBorderRadiusLink,
		connectorSwitcher,
		connectorText,
		connectorGlobalTypoSwitcher,
		connectorGlobalTypographyData,
		connectorGlobalTypoType,
		connectorGlobalTypoOption,
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
		btnTwoIconSpacing,
		btnTwoIconSpacingUnits,
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
		dualBtnOverflow,
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
		globalBoxShadowSwitcher,
		globalBoxShadowValues,
		globalBoxShadowHoverValues,
		globalBoxShadowCssValue,
		globalHoverBoxShadowCssValue,

		dualBtnDesktopSwitcher,
		dualBtnTabletSwitcher,
		dualBtnMobileSwitcher,

		dualButtonGlobalWraperCustomCSS,
		dualButtonGlobalWraperID,
		dualButtonGlobalWraperClass,

		// Position
		dualBtnPositionType,
		dualBtnHZOrientationType,
		dualBtnVROrientationType,
		dualBtnHZLeftOffset,
		dualBtnHZLeftOffsetUnits,
		dualBtnHZRightOffset,
		dualBtnHZRightOffsetUnits,
		dualBtnVRTopOffset,
		dualBtnVRTopOffsetUnits,
		dualBtnVRBottomOffset,
		dualBtnVRBottomOffsetUnits,
	} = attributes;

	const deviceType= useDeviceType();

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

	/** Start Preset Style */
    const changeDualButtonPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-1": {
                buttonIconAlign: 'none',
                buttonTwoIconAlign: 'none',
				connectorSwitcher: true,
				buttonsDirection: 'vertical',
                ButtonDesktopPadding: {
                    top: "12",
					bottom: "12",
					left: "30",
					right: "30",
                },
				ButtonDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				ButtonTwoDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				buttonsGap: {
					Desktop: '0',
					Tablet: '0',
					Mobile: '0',
				},
				ButtonWidth: {
					Desktop: '100',
					Tablet: '100',
					Mobile: '100'
				},
            },
            "preset-2": {
                buttonIconAlign: 'icon-text',
                buttonTwoIconAlign: 'icon-text',
				buttonsDirection: 'vertical',
				connectorSwitcher: true,
                ButtonDesktopPadding: {
                    top: "12",
					bottom: "12",
					left: "30",
					right: "30",
                },
				ButtonDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				ButtonTwoDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				buttonsGap: {
					Desktop: '0',
					Tablet: '0',
					Mobile: '0',
				},
				ButtonWidth: {
					Desktop: '100',
					Tablet: '100',
					Mobile: '100'
				},
            },
            "preset-3": {
                buttonIconAlign: 'none',
                buttonTwoIconAlign: 'none',
				connectorSwitcher: false,
				buttonsDirection: 'vertical',
                ButtonDesktopPadding: {
                    top: "12",
					bottom: "12",
					left: "30",
					right: "30",
                },
				ButtonDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				ButtonTwoDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				buttonsGap: {
					Desktop: '10',
					Tablet: '10',
					Mobile: '10',
				},
				ButtonWidth: {
					Desktop: '100',
					Tablet: '100',
					Mobile: '100'
				},
            },
            "preset-4": {
                buttonIconAlign: 'none',
                buttonTwoIconAlign: 'none',
                buttonsDirection: 'horizontal',
				connectorSwitcher: false,
                ButtonDesktopPadding: {
                    top: "12",
					bottom: "12",
					left: "30",
					right: "30",
                },
				ButtonDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				ButtonTwoDesktopBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoTabBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
                ButtonTwoMobileBorderRadiusWidth: {
                    top: "0",
					bottom: "0",
					left: "0",
					right: "0",
                },
				buttonsGap: {
					Desktop: '10',
					Tablet: '10',
					Mobile: '10',
				},
				ButtonWidth: {
					Desktop: '',
					Tablet: '',
					Mobile: ''
				},
            },
			"preset-5": {
                buttonIconAlign: 'none',
                buttonTwoIconAlign: 'none',
                buttonsDirection: 'vertical',
				connectorSwitcher: true,
                ButtonDesktopPadding: {
                    top: "12",
					bottom: "12",
					left: "30",
					right: "30",
                },
                ButtonDesktopBorderRadiusWidth: {
                    top: "50",
					bottom: "50",
					left: "50",
					right: "50",
                },
                ButtonTabBorderRadiusWidth: {
                    top: "50",
					bottom: "50",
					left: "50",
					right: "50",
                },
                ButtonMobileBorderRadiusWidth: {
                    top: "50",
					bottom: "50",
					left: "50",
					right: "50",
                },
                ButtonTwoDesktopBorderRadiusWidth: {
                    top: "50",
					bottom: "50",
					left: "50",
					right: "50",
                },
                ButtonTwoTabBorderRadiusWidth: {
                    top: "50",
					bottom: "50",
					left: "50",
					right: "50",
                },
                ButtonTwoMobileBorderRadiusWidth: {
                    top: "50",
					bottom: "50",
					left: "50",
					right: "50",
                },
				buttonsGap: {
					Desktop: '0',
					Tablet: '0',
					Mobile: '0',
				},
				ButtonWidth: {
					Desktop: '100',
					Tablet: '100',
					Mobile: '100'
				},
            },
            
        };

        const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                dualButtonPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Dual Button: Preset "${selectedPreset}" not found.`);
        }
    };
    /** End Preset Style */
	
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

	const buttonOneBorderDesktopWidth = `${ButtonDesktopBorderWidth.top}${ButtonBorderUnits.Desktop} ${ButtonDesktopBorderWidth.right}${ButtonBorderUnits.Desktop} ${ButtonDesktopBorderWidth.bottom}${ButtonBorderUnits.Desktop} ${ButtonDesktopBorderWidth.left}${ButtonBorderUnits.Desktop}`;
	const buttonOneBorderTabletWidth = `${ButtonTabBorderWidth.top}${ButtonBorderUnits.Tablet} ${ButtonTabBorderWidth.right}${ButtonBorderUnits.Tablet} ${ButtonTabBorderWidth.bottom}${ButtonBorderUnits.Tablet} ${ButtonTabBorderWidth.left}${ButtonBorderUnits.Tablet}`;
	const buttonOneBorderMobileWidth = `${ButtonMobileBorderWidth.top}${ButtonBorderUnits.Mobile} ${ButtonMobileBorderWidth.right}${ButtonBorderUnits.Mobile} ${ButtonMobileBorderWidth.bottom}${ButtonBorderUnits.Mobile} ${ButtonMobileBorderWidth.left}${ButtonBorderUnits.Mobile}`;

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

	const buttonOneBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth.top}${ButtonBorderRadiusUnits.Desktop} ${ButtonDesktopBorderRadiusWidth.right}${ButtonBorderRadiusUnits.Desktop} ${ButtonDesktopBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits.Desktop} ${ButtonDesktopBorderRadiusWidth.left}${ButtonBorderRadiusUnits.Desktop}`;
	const buttonOneBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth.top}${ButtonBorderRadiusUnits.Tablet} ${ButtonTabBorderRadiusWidth.right}${ButtonBorderRadiusUnits.Tablet} ${ButtonTabBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits.Tablet} ${ButtonTabBorderRadiusWidth.left}${ButtonBorderRadiusUnits.Tablet}`;
	const buttonOneBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth.top}${ButtonBorderRadiusUnits.Mobile} ${ButtonMobileBorderRadiusWidth.right}${ButtonBorderRadiusUnits.Mobile} ${ButtonMobileBorderRadiusWidth.bottom}${ButtonBorderRadiusUnits.Mobile} ${ButtonMobileBorderRadiusWidth.left}${ButtonBorderRadiusUnits.Mobile}`;

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

	const buttonBorderDesktopWidth = `${ButtonTwoDesktopBorderWidth.top}${ButtonTwoBorderUnits.Desktop} ${ButtonTwoDesktopBorderWidth.right}${ButtonTwoBorderUnits.Desktop} ${ButtonTwoDesktopBorderWidth.bottom}${ButtonTwoBorderUnits.Desktop} ${ButtonTwoDesktopBorderWidth.left}${ButtonTwoBorderUnits.Desktop}`;
	const buttonBorderTabletWidth = `${ButtonTwoTabBorderWidth.top}${ButtonTwoBorderUnits.Tablet} ${ButtonTwoTabBorderWidth.right}${ButtonTwoBorderUnits.Tablet} ${ButtonTwoTabBorderWidth.bottom}${ButtonTwoBorderUnits.Tablet} ${ButtonTwoTabBorderWidth.left}${ButtonTwoBorderUnits.Tablet}`;
	const buttonBorderMobileWidth = `${ButtonTwoMobileBorderWidth.top}${ButtonTwoBorderUnits.Mobile} ${ButtonTwoMobileBorderWidth.right}${ButtonTwoBorderUnits.Mobile} ${ButtonTwoMobileBorderWidth.bottom}${ButtonTwoBorderUnits.Mobile} ${ButtonTwoMobileBorderWidth.left}${ButtonTwoBorderUnits.Mobile}`;

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

	const buttonBorderRadiusDesktopWidth = `${ButtonTwoDesktopBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits.Desktop} ${ButtonTwoDesktopBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits.Desktop} ${ButtonTwoDesktopBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits.Desktop} ${ButtonTwoDesktopBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits.Desktop}`;
	const buttonBorderRadiusTabletWidth = `${ButtonTwoTabBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits.Tablet} ${ButtonTwoTabBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits.Tablet} ${ButtonTwoTabBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits.Tablet} ${ButtonTwoTabBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits.Tablet}`;
	const buttonBorderRadiusMobileWidth = `${ButtonTwoMobileBorderRadiusWidth.top}${ButtonTwoBorderRadiusUnits.Mobile} ${ButtonTwoMobileBorderRadiusWidth.right}${ButtonTwoBorderRadiusUnits.Mobile} ${ButtonTwoMobileBorderRadiusWidth.bottom}${ButtonTwoBorderRadiusUnits.Mobile} ${ButtonTwoMobileBorderRadiusWidth.left}${ButtonTwoBorderRadiusUnits.Mobile}`;
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

	const buttonDesktopPadding = `${ButtonDesktopPadding.top}${ButtonPaddingUnits.Desktop} ${ButtonDesktopPadding.right}${ButtonPaddingUnits.Desktop} ${ButtonDesktopPadding.bottom}${ButtonPaddingUnits.Desktop} ${ButtonDesktopPadding.left}${ButtonPaddingUnits.Desktop}`;
	const buttonTabPadding = `${ButtonTabPadding.top}${ButtonPaddingUnits.Tablet} ${ButtonTabPadding.right}${ButtonPaddingUnits.Tablet} ${ButtonTabPadding.bottom}${ButtonPaddingUnits.Tablet} ${ButtonTabPadding.left}${ButtonPaddingUnits.Tablet}`;
	const buttonMobilePadding = `${ButtonMobilePadding.top}${ButtonPaddingUnits.Mobile} ${ButtonMobilePadding.right}${ButtonPaddingUnits.Mobile} ${ButtonMobilePadding.bottom}${ButtonPaddingUnits.Mobile} ${ButtonMobilePadding.left}${ButtonPaddingUnits.Mobile}`;

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

	const buttonDesktopMargin = `${ButtonDesktopMargin.top}${ButtonTwoMarginUnits.Desktop} ${ButtonDesktopMargin.right}${ButtonTwoMarginUnits.Desktop} ${ButtonDesktopMargin.bottom}${ButtonTwoMarginUnits.Desktop} ${ButtonDesktopMargin.left}${ButtonTwoMarginUnits.Desktop}`;
	const buttonTabMargin = `${ButtonTabMargin.top}${ButtonTwoMarginUnits.Tablet} ${ButtonTabMargin.right}${ButtonTwoMarginUnits.Tablet} ${ButtonTabMargin.bottom}${ButtonTwoMarginUnits.Tablet} ${ButtonTabMargin.left}${ButtonTwoMarginUnits.Tablet}`;
	const buttonMobileMargin = `${ButtonMobileMargin.top}${ButtonTwoMarginUnits.Mobile} ${ButtonMobileMargin.right}${ButtonTwoMarginUnits.Mobile} ${ButtonMobileMargin.bottom}${ButtonTwoMarginUnits.Mobile} ${ButtonMobileMargin.left}${ButtonTwoMarginUnits.Mobile}`;
	

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
							top: value,
							bottom: value,
							left: value,
							right: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						connectorBorderRadiusTablet: {
							top: value,
							bottom: value,
							left: value,
							right: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						connectorBorderRadiusMobile: {
							top: value,
							bottom: value,
							left: value,
							right: value,
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
	
	const connectorDesktopBorderRadius = `${connectorBorderRadiusDesktop.top}${connectorBorderRadiusUnits.Desktop} ${connectorBorderRadiusDesktop.right}${connectorBorderRadiusUnits.Desktop} ${connectorBorderRadiusDesktop.bottom}${connectorBorderRadiusUnits.Desktop} ${connectorBorderRadiusDesktop.left}${connectorBorderRadiusUnits.Desktop}`;
	const connectorTabletBorderRadius = `${connectorBorderRadiusTablet.top}${connectorBorderRadiusUnits.Tablet} ${connectorBorderRadiusTablet.right}${connectorBorderRadiusUnits.Tablet} ${connectorBorderRadiusTablet.bottom}${connectorBorderRadiusUnits.Tablet} ${connectorBorderRadiusTablet.left}${connectorBorderRadiusUnits.Tablet}`;
	const connectorMobileBorderRadius = `${connectorBorderRadiusMobile.top}${connectorBorderRadiusUnits.Mobile} ${connectorBorderRadiusMobile.right}${connectorBorderRadiusUnits.Mobile} ${connectorBorderRadiusMobile.bottom}${connectorBorderRadiusUnits.Mobile} ${connectorBorderRadiusMobile.left}${connectorBorderRadiusUnits.Mobile}`;	
	
	/** Start Icon border */
	const iconBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (iconBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						iconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBorderMobile: {
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
						iconBorderDesktop: {
							...iconBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBorderTablet: {
							...iconBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBorderMobile: {
							...iconBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const iconBorderCombineBtn = () => {
		setAttributes({ iconBorderLink: !iconBorderLink });
	};

	const iconBorderUnitsHandler = (unit) => {
		setAttributes({
			iconBorderUnits: {
				...iconBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	const iconDesktopBorderWidth = `${iconBorderDesktop.top}${iconBorderUnits.Desktop} ${iconBorderDesktop.right}${iconBorderUnits.Desktop} ${iconBorderDesktop.bottom}${iconBorderUnits.Desktop} ${iconBorderDesktop.left}${iconBorderUnits.Desktop}`;
	const iconTabletBorderWidth = `${iconBorderTablet.top}${iconBorderUnits.Tablet} ${iconBorderTablet.right}${iconBorderUnits.Tablet} ${iconBorderTablet.bottom}${iconBorderUnits.Tablet} ${iconBorderTablet.left}${iconBorderUnits.Tablet}`;
	const iconMobileBorderWidth = `${iconBorderMobile.top}${iconBorderUnits.Mobile} ${iconBorderMobile.right}${iconBorderUnits.Mobile} ${iconBorderMobile.bottom}${iconBorderUnits.Mobile} ${iconBorderMobile.left}${iconBorderUnits.Mobile}`;

	/** Icon Border Radius **/
	const iconBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (iconBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						iconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBorderRadiusMobile: {
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
						iconBorderRadiusDesktop: {
							...iconBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconBorderRadiusTablet: {
							...iconBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconBorderRadiusMobile: {
							...iconBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const iconBorderRadiusCombineBtn = () => {
		setAttributes({ iconBorderRadiusLink: !iconBorderRadiusLink });
	};

	const iconBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			iconBorderRadiusUnits: {
				...iconBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const iconDesktopBorderRadius = `${iconBorderRadiusDesktop.top}${iconBorderRadiusUnits.Desktop} ${iconBorderRadiusDesktop.right}${iconBorderRadiusUnits.Desktop} ${iconBorderRadiusDesktop.bottom}${iconBorderRadiusUnits.Desktop} ${iconBorderRadiusDesktop.left}${iconBorderRadiusUnits.Desktop}`;
	const iconTabletBorderRadius = `${iconBorderRadiusTablet.top}${iconBorderRadiusUnits.Tablet} ${iconBorderRadiusTablet.right}${iconBorderRadiusUnits.Tablet} ${iconBorderRadiusTablet.bottom}${iconBorderRadiusUnits.Tablet} ${iconBorderRadiusTablet.left}${iconBorderRadiusUnits.Tablet}`;
	const iconMobileBorderRadius = `${iconBorderRadiusMobile.top}${iconBorderRadiusUnits.Mobile} ${iconBorderRadiusMobile.right}${iconBorderRadiusUnits.Mobile} ${iconBorderRadiusMobile.bottom}${iconBorderRadiusUnits.Mobile} ${iconBorderRadiusMobile.left}${iconBorderRadiusUnits.Mobile}`;

	/** Start Icon Two border */
	const iconTwoBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (iconTwoBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						iconTwoBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconTwoBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconTwoBorderMobile: {
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
						iconTwoBorderDesktop: {
							...iconTwoBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconTwoBorderTablet: {
							...iconTwoBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconTwoBorderMobile: {
							...iconTwoBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const iconTwoBorderCombineBtn = () => {
		setAttributes({ iconTwoBorderLink: !iconTwoBorderLink });
	};

	const iconTwoBorderUnitsHandler = (unit) => {
		setAttributes({
			iconTwoBorderUnits: {
				...iconTwoBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	const iconTwoDesktopBorderWidth = `${iconTwoBorderDesktop.top}${iconTwoBorderUnits.Desktop} ${iconTwoBorderDesktop.right}${iconTwoBorderUnits.Desktop} ${iconTwoBorderDesktop.bottom}${iconTwoBorderUnits.Desktop} ${iconTwoBorderDesktop.left}${iconTwoBorderUnits.Desktop}`;
	const iconTwoTabletBorderWidth = `${iconTwoBorderTablet.top}${iconTwoBorderUnits.Tablet} ${iconTwoBorderTablet.right}${iconTwoBorderUnits.Tablet} ${iconTwoBorderTablet.bottom}${iconTwoBorderUnits.Tablet} ${iconTwoBorderTablet.left}${iconTwoBorderUnits.Tablet}`;
	const iconTwoMobileBorderWidth = `${iconTwoBorderMobile.top}${iconTwoBorderUnits.Mobile} ${iconTwoBorderMobile.right}${iconTwoBorderUnits.Mobile} ${iconTwoBorderMobile.bottom}${iconTwoBorderUnits.Mobile} ${iconTwoBorderMobile.left}${iconTwoBorderUnits.Mobile}`;

	/** Icon Two Border Radius **/
	const iconTwoBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (iconTwoBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						iconTwoBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconTwoBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconTwoBorderRadiusMobile: {
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
						iconTwoBorderRadiusDesktop: {
							...iconTwoBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						iconTwoBorderRadiusTablet: {
							...iconTwoBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						iconTwoBorderRadiusMobile: {
							...iconTwoBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const iconTwoBorderRadiusCombineBtn = () => {
		setAttributes({ iconTwoBorderRadiusLink: !iconTwoBorderRadiusLink });
	};

	const iconTwoBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			iconTwoBorderRadiusUnits: {
				...iconTwoBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const iconTwoDesktopBorderRadius = `${iconTwoBorderRadiusDesktop.top}${iconTwoBorderRadiusUnits.Desktop} ${iconTwoBorderRadiusDesktop.right}${iconTwoBorderRadiusUnits.Desktop} ${iconTwoBorderRadiusDesktop.bottom}${iconTwoBorderRadiusUnits.Desktop} ${iconTwoBorderRadiusDesktop.left}${iconTwoBorderRadiusUnits.Desktop}`;
	const iconTwoTabletBorderRadius = `${iconTwoBorderRadiusTablet.top}${iconTwoBorderRadiusUnits.Tablet} ${iconTwoBorderRadiusTablet.right}${iconTwoBorderRadiusUnits.Tablet} ${iconTwoBorderRadiusTablet.bottom}${iconTwoBorderRadiusUnits.Tablet} ${iconTwoBorderRadiusTablet.left}${iconTwoBorderRadiusUnits.Tablet}`;
	const iconTwoMobileBorderRadius = `${iconTwoBorderRadiusMobile.top}${iconTwoBorderRadiusUnits.Mobile} ${iconTwoBorderRadiusMobile.right}${iconTwoBorderRadiusUnits.Mobile} ${iconTwoBorderRadiusMobile.bottom}${iconTwoBorderRadiusUnits.Mobile} ${iconTwoBorderRadiusMobile.left}${iconTwoBorderRadiusUnits.Mobile}`;

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
		.fb-dual-button-main-wrapper.${blockID} {
			${dualBtnPositionType === 'default' ? `position: relative;` : ''}
			${dualBtnPositionType !== 'default' ? `position: ${dualBtnPositionType};` : ''}
			${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'left' && dualBtnHZLeftOffset.Desktop ? `left: ${dualBtnHZLeftOffset.Desktop}${dualBtnHZLeftOffsetUnits.Desktop};` : ''}
			${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'right' && dualBtnHZRightOffset.Desktop ? `right: ${dualBtnHZRightOffset.Desktop}${dualBtnHZRightOffsetUnits.Desktop};` : ''}
			${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'top' && dualBtnVRTopOffset.Desktop ? `top: ${dualBtnVRTopOffset.Desktop}${dualBtnVRTopOffsetUnits.Desktop};` : ''}
			${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'bottom' && dualBtnVRBottomOffset.Desktop ? `bottom: ${dualBtnVRBottomOffset.Desktop}${dualBtnVRBottomOffsetUnits.Desktop};` : ''}
			${dualButtonGlobalZIndex.Desktop ? `z-index: ${dualButtonGlobalZIndex.Desktop};` : "" }
			${dualBtnOverflow !== 'default' ? `overflow: ${dualBtnOverflow};` : ''}
		}
		.fb-dual-button-container.${blockID} {
            ${dualButtonGlobalBgColor ? `background-color: ${dualButtonGlobalBgColor};` : "" } 
            ${globalDesktopPadding && dualButtonGlobalPaddingDesktop.top ? `padding: ${globalDesktopPadding};` : ""}
            ${globalDesktopMargin && dualButtonGlobalMarginDesktop.top ? `margin: ${globalDesktopMargin};` : ""} 
            ${dualButtonGlobalBorder ? `border: ${dualButtonGlobalBorder};` : "" } 
            ${globalDesktopBorderWidth && dualButtonGlobalBorderDesktop.top ? `border-width: ${globalDesktopBorderWidth};` : "" }
            ${globalDesktopBorderRadiusWidth && dualButtonGlobalBorderRadiusDesktop.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : "" }
            ${dualButtonGlobalBorderColor ? `border-color: ${dualButtonGlobalBorderColor};` : "" }
            ${globalBoxShadowCssValue ? `box-shadow: ${globalBoxShadowCssValue};` : "" }
            transition: all .3s ease-in-out;
            position: relative;
        }
        .fb-dual-button-container.${blockID}:hover {
            ${dualButtonGlobalBgHoverColor ? `background-color: ${dualButtonGlobalBgHoverColor};` : "" }
            ${dualButtonGlobalBorderHoverColor ? `border-color: ${dualButtonGlobalBorderHoverColor};` : "" }
			${globalHoverBoxShadowCssValue ? `box-shadow: ${globalHoverBoxShadowCssValue};` : "" }
        }
		.fb-dual-button-container.${blockID} .fb-advanced-button {
			${ButtonGlobalTypoSwitcher.fontFamily === true && ButtonGlobalTypographyData.fontFamily ? `font-family: ${ButtonGlobalTypographyData.fontFamily};` : ''}
			${ButtonGlobalTypoSwitcher.fontSize === true && ButtonGlobalTypographyData.fontSize ? `font-size: ${ButtonGlobalTypographyData.fontSize};` : ''}
			${ButtonGlobalTypoSwitcher.fontWeight === true && ButtonGlobalTypographyData.fontWeight ? `font-weight: ${ButtonGlobalTypographyData.fontWeight};` : ''}
			${ButtonGlobalTypoSwitcher.fontStyle === true && ButtonGlobalTypographyData.fontStyle ? `font-style: ${ButtonGlobalTypographyData.fontStyle};` : ''}
			${ButtonGlobalTypoSwitcher.textTransform === true && ButtonGlobalTypographyData.textTransform ? `text-transform: ${ButtonGlobalTypographyData.textTransform};` : ''}
			${ButtonGlobalTypoSwitcher.textDecoration === true && ButtonGlobalTypographyData.textDecoration ? `text-decoration: ${ButtonGlobalTypographyData.textDecoration};` : ''}
			${ButtonGlobalTypoSwitcher.letterSpacing === true && ButtonGlobalTypographyData.letterSpacing ? `letter-spacing: ${ButtonGlobalTypographyData.letterSpacing};` : ''}
			${ButtonGlobalTypoSwitcher.lineHeight === true && ButtonGlobalTypographyData.lineHeight ? `line-height: ${ButtonGlobalTypographyData.lineHeight};` : ''}
			
			${ButtonGlobalTypoSwitcher.fontFamily === false && ButtonFontFamily && ButtonFontFamily !== "Default" ? `font-family: ${ButtonFontFamily};` : "" }
			${ButtonGlobalTypoSwitcher.fontSize === false && ButtonFontSize.Desktop && ButtonFontSizeUnits.Desktop ? `font-size: ${ButtonFontSize.Desktop}${ButtonFontSizeUnits.Desktop};` : ''}
			${ButtonGlobalTypoSwitcher.fontWeight === false && ButtonFontWeight ? `font-weight: ${ButtonFontWeight};` : "" }
			${ButtonGlobalTypoSwitcher.fontStyle === false && ButtonFontStyle ? `font-style: ${ButtonFontStyle};` : "" }
			${ButtonGlobalTypoSwitcher.textTransform === false && ButtonTextTransform ? `text-transform: ${ButtonTextTransform};` : "" }
			${ButtonGlobalTypoSwitcher.textDecoration === false && ButtonTextDecoration ? `text-decoration: ${ButtonTextDecoration};` : "" }
			${ButtonGlobalTypoSwitcher.letterSpacing === false && ButtonLetterSpacing.Desktop && ButtonLetterSpacingUnits.Desktop ? `letter-spacing: ${ButtonLetterSpacing.Desktop}${ButtonLetterSpacingUnits.Desktop};` : ''}
			${ButtonGlobalTypoSwitcher.lineHeight === false && ButtonLineHeight.Desktop && ButtonLineHeightUnits.Desktop ? `line-height: ${ButtonLineHeight.Desktop}${ButtonLineHeightUnits.Desktop};` : ''}
			
			${buttonDesktopPadding && ButtonDesktopPadding.top ? `padding: ${buttonDesktopPadding};` : ""}
			${buttonDesktopMargin && ButtonDesktopMargin.top ? `margin: ${buttonDesktopMargin};` : ""}
			${ButtonZIndex ? `z-index: ${ButtonZIndex};` : ""}
			${ButtonWidth.Desktop && ButtonWidthWidthUnits.Desktop ? `width: ${ButtonWidth.Desktop}${ButtonWidthWidthUnits.Desktop};` : ''}
			${btnIconSpacing.Desktop && btnIconSpacingUnits.Desktop ? `gap: ${btnIconSpacing.Desktop}${btnIconSpacingUnits.Desktop};` : ''}
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-wrapper {
			${buttonsGap.Desktop && buttonsGapUnits.Desktop ? `gap: ${buttonsGap.Desktop}${buttonsGapUnits.Desktop};` : ''}
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
			${ButtonBgColor ? `background-color: ${ButtonBgColor};` : ""}
			${ButtonBorder ? `border: ${ButtonBorder};` : ""}
			${ButtonBorderColor ? `border-color: ${ButtonBorderColor};` : ""}
			${buttonOneBorderDesktopWidth && ButtonDesktopBorderWidth.top ? `border-width: ${buttonOneBorderDesktopWidth};` : ''}
			${buttonOneBorderRadiusDesktopWidth && ButtonDesktopBorderRadiusWidth.top ? `border-radius: ${buttonOneBorderRadiusDesktopWidth};` : ''}
			
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button:hover {
			${ButtonBgHoverColor ? `background-color: ${ButtonBgHoverColor};` : "" }
			${ButtonBorderHoverColor ? `border-color: ${ButtonBorderHoverColor};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
			${ButtonTwoBgColor ? `background-color: ${ButtonTwoBgColor} !important;` : "" }
			${ButtonTwoBorder ? `border: ${ButtonTwoBorder};` : ""}
			${buttonBorderDesktopWidth && ButtonTwoDesktopBorderWidth.top ? `border-width: ${buttonBorderDesktopWidth};` : ''}
			${buttonBorderRadiusDesktopWidth && ButtonTwoDesktopBorderRadiusWidth.top ? `border-radius: ${buttonBorderRadiusDesktopWidth};` : ''}
			${ButtonTwoBorderColor ? `border-color: ${ButtonTwoBorderColor};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button:hover {
			${ButtonTwoBgHoverColor ? `background-color: ${ButtonTwoBgHoverColor} !important;` : ""}
			${ButtonTwoBorderHoverColor ? `border-color: ${ButtonTwoBorderHoverColor};` : "" }
		}
		
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one .fb-advanced-button-text {
			${ButtonColor ? `color: ${ButtonColor};` : ""}
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-one:hover .fb-advanced-button-text {
			${ButtonHoverColor ? `color: ${ButtonHoverColor};` : ""}
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two .fb-advanced-button-text {
			${ButtonTwoColor ? `color: ${ButtonTwoColor};` : ""}
		}
		.fb-dual-button-container.${blockID} .fb-advanced-button.fb-dual-button-two:hover .fb-advanced-button-text {
			${ButtonTwoHoverColor ? `color: ${ButtonTwoHoverColor};` : ""}
		}
		
    	.fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
			${connectorColor ? `color: ${connectorColor};` : ""}
			${connectorBgColor ? `background-color: ${connectorBgColor};` : "" }

			${connectorGlobalTypoSwitcher.fontFamily === true && connectorGlobalTypographyData.fontFamily ? `font-family: ${connectorGlobalTypographyData.fontFamily};` : ''}
			${connectorGlobalTypoSwitcher.fontSize === true && connectorGlobalTypographyData.fontSize ? `font-size: ${connectorGlobalTypographyData.fontSize};` : ''}
			${connectorGlobalTypoSwitcher.fontWeight === true && connectorGlobalTypographyData.fontWeight ? `font-weight: ${connectorGlobalTypographyData.fontWeight};` : ''}
			${connectorGlobalTypoSwitcher.fontStyle === true && connectorGlobalTypographyData.fontStyle ? `font-style: ${connectorGlobalTypographyData.fontStyle};` : ''}
			${connectorGlobalTypoSwitcher.textTransform === true && connectorGlobalTypographyData.textTransform ? `text-transform: ${connectorGlobalTypographyData.textTransform};` : ''}
			${connectorGlobalTypoSwitcher.textDecoration === true && connectorGlobalTypographyData.textDecoration ? `text-decoration: ${connectorGlobalTypographyData.textDecoration};` : ''}
			${connectorGlobalTypoSwitcher.letterSpacing === true && connectorGlobalTypographyData.letterSpacing ? `letter-spacing: ${connectorGlobalTypographyData.letterSpacing};` : ''}
			${connectorGlobalTypoSwitcher.lineHeight === true && connectorGlobalTypographyData.lineHeight ? `line-height: ${connectorGlobalTypographyData.lineHeight};` : ''}

			${connectorGlobalTypoSwitcher.fontFamily === false && connectorFontFamily && connectorFontFamily !== "Default" ? `font-family: ${connectorFontFamily};` : "" }
			${connectorGlobalTypoSwitcher.fontSize === false && connectorFontSize.Desktop && connectorFontSizeUnits.Desktop ? `font-size: ${connectorFontSize.Desktop}${connectorFontSizeUnits.Desktop};` : ''}
			${connectorGlobalTypoSwitcher.fontWeight === false && connectorFontWeight ? `font-weight: ${connectorFontWeight};` : "" }
			${connectorGlobalTypoSwitcher.fontStyle === false && connectorFontStyle ? `font-style: ${connectorFontStyle};` : "" }
			${connectorGlobalTypoSwitcher.textTransform === false && connectorTextTransform ? `text-transform: ${connectorTextTransform};` : "" }
			${connectorGlobalTypoSwitcher.textDecoration === false && connectorTextDecoration ? `text-decoration: ${connectorTextDecoration};` : "" }
			${connectorGlobalTypoSwitcher.letterSpacing === false && connectorLetterSpacing.Desktop && connectorLetterSpacingUnits.Desktop ? `letter-spacing: ${connectorLetterSpacing.Desktop}${connectorLetterSpacingUnits.Desktop};` : ''}
			${connectorSize.Desktop && connectorSizeUnits.Desktop ? `line-height: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};` : ''}
			
			${connectorBorder ? `border: ${connectorBorder};` : "" }
			${connectorBorderColor ? `border-color: ${connectorBorderColor};` : "" }
			${connectorDesktopBorderWidth && connectorBorderDesktop.top ? `border-width: ${connectorDesktopBorderWidth};` : "" }
			${connectorDesktopBorderRadius && connectorBorderRadiusDesktop.top ? `border-radius: ${connectorDesktopBorderRadius};` : "" }
			${connectorSize.Desktop && connectorSizeUnits.Desktop ? `width: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};` : ''}
			${connectorSize.Desktop && connectorSizeUnits.Desktop ? `height: ${connectorSize.Desktop}${connectorSizeUnits.Desktop};` : ''}
			transition: all .3s ease-in-out;
    	}
		.fb-dual-button-container.${blockID} .fb-dual-button-connector:hover .fb-dual-button-connector-text {
			${connectorHoverColor ? `color: ${connectorHoverColor};` : "" }
			${connectorBgHoverColor ? `background-color: ${connectorBgHoverColor};` : "" }
			${connectorBorderHoverColor ? `border-color: ${connectorBorderHoverColor};` : "" }
		}

		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper{
			${btnIconBgColor ? `background: ${btnIconBgColor};` : ""}
			${iconBorder ? `border: ${iconBorder};` : "" } 
			${iconBorderColor ? `border-color: ${iconBorderColor};` : "" }
            ${iconDesktopBorderWidth && iconBorderDesktop.top ? `border-width: ${iconDesktopBorderWidth};` : "" }
            ${iconDesktopBorderRadius && iconBorderRadiusDesktop.top ? `border-radius: ${iconDesktopBorderRadius};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper:hover .fb-advanced-button-icon-wrapper{
			${btnIconBgHoverColor ? `background: ${btnIconBgHoverColor};` : ""}
			${iconBorderHoverColor ? `border-color: ${iconBorderHoverColor};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper{
			${btnTwoIconBgColor ? `background: ${btnTwoIconBgColor};` : ""}
			${iconTwoBorder ? `border: ${iconTwoBorder};` : "" } 
			${iconTwoBorderColor ? `border-color: ${iconTwoBorderColor};` : "" }
            ${iconTwoDesktopBorderWidth && iconTwoBorderDesktop.top ? `border-width: ${iconTwoDesktopBorderWidth};` : "" }
            ${iconTwoDesktopBorderRadius && iconTwoBorderRadiusDesktop.top ? `border-radius: ${iconTwoDesktopBorderRadius};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper:hover .fb-advanced-button-icon-wrapper{
			${btnTwoIconBgHoverColor ? `background: ${btnTwoIconBgHoverColor};` : ""}
			${iconTwoBorderHoverColor ? `border-color: ${iconTwoBorderHoverColor};` : "" }
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper svg {
			${btnIconColor ? `fill: ${btnIconColor};` : ""}
			${btnIconSize.Desktop && btnIconSizeUnits.Desktop ? `width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};` : ""}
			${btnIconSize.Desktop && btnIconSizeUnits.Desktop ? `height: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};` : ""}
		}

		.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper svg {
			${btnTwoIconColor ? `fill: ${btnTwoIconColor};` : ""}
			${btnTwoIconSize.Desktop && btnTwoIconSizeUnits.Desktop ? `width: ${btnTwoIconSize.Desktop}${btnTwoIconSizeUnits.Desktop};` : ""}
			${btnTwoIconSize.Desktop && btnTwoIconSizeUnits.Desktop ? `height: ${btnTwoIconSize.Desktop}${btnTwoIconSizeUnits.Desktop};` : ""}
		}
		.fb-dual-button-container.${blockID} .fb-dual-button-one:hover svg{
			${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : ""}
		}
    
		@media only screen and (max-width: 1024px) {
			.fb-dual-button-main-wrapper.${blockID} {
				${dualBtnPositionType !== 'default' ? `position: ${dualBtnPositionType};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'left' && dualBtnHZLeftOffset.Tablet ? `left: ${dualBtnHZLeftOffset.Tablet}${dualBtnHZLeftOffsetUnits.Tablet};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'right' && dualBtnHZRightOffset.Tablet ? `right: ${dualBtnHZRightOffset.Tablet}${dualBtnHZRightOffsetUnits.Tablet};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'top' && dualBtnVRTopOffset.Tablet ? `top: ${dualBtnVRTopOffset.Tablet}${dualBtnVRTopOffsetUnits.Tablet};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'bottom' && dualBtnVRBottomOffset.Tablet ? `bottom: ${dualBtnVRBottomOffset.Tablet}${dualBtnVRBottomOffsetUnits.Tablet};` : ''}
				${dualButtonGlobalZIndex.Tablet ? `z-index: ${dualButtonGlobalZIndex.Tablet};` : "" }
			}
			.fb-dual-button-container.${blockID} {
				${globalTabletPadding && dualButtonGlobalPaddingTablet.top ? `padding: ${globalTabletPadding};` : ""}
				${globalTabletMargin && dualButtonGlobalMarginTablet.top ? `margin: ${globalTabletMargin};` : ""} 
				${globalTabletBorderWidth && dualButtonGlobalBorderTablet.top ? `border-width: ${globalTabletBorderWidth};` : "" }
				${globalTabletBorderRadiusWidth && dualButtonGlobalBorderRadiusTablet.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : "" }
			}
			.fb-dual-button-container.${blockID} .fb-advanced-button {
				${ButtonWidth.Tablet && ButtonWidthWidthUnits.Tablet ? `width: ${ButtonWidth.Tablet}${ButtonWidthWidthUnits.Tablet};` : ''}
				${ButtonGlobalTypoSwitcher.fontSize === false && ButtonFontSize.Tablet && ButtonFontSizeUnits.Tablet ? `font-size: ${ButtonFontSize.Tablet}${ButtonFontSizeUnits.Tablet};` : ''}
				${ButtonGlobalTypoSwitcher.letterSpacing === false && ButtonLetterSpacing.Tablet && ButtonLetterSpacingUnits.Tablet ? `letter-spacing: ${ButtonLetterSpacing.Tablet}${ButtonLetterSpacingUnits.Tablet};` : ''}
				${ButtonGlobalTypoSwitcher.lineHeight === false && ButtonLineHeight.Tablet && ButtonLineHeightUnits.Tablet ? `line-height: ${ButtonLineHeight.Tablet}${ButtonLineHeightUnits.Tablet};` : ''}
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
					${buttonTabPadding && ButtonTabPadding.top ? `padding: ${buttonTabPadding};` : ''}
					${buttonTabMargin && ButtonTabMargin.top ? `margin: ${buttonTabMargin};` : ''}
					${buttonOneBorderTabletWidth && ButtonTabBorderWidth.top ? `border-width: ${buttonOneBorderTabletWidth};` : ''}
					${buttonOneBorderRadiusTabletWidth && ButtonTabBorderRadiusWidth.top ? `border-radius: ${buttonOneBorderRadiusTabletWidth};` : ''}
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
				${ButtonTwoBorder ? `border: ${ButtonTwoBorder};` : ''}
				${buttonBorderTabletWidth && ButtonTwoTabBorderWidth.top ? `border-width: ${buttonBorderTabletWidth};` : ''}
				${buttonBorderRadiusTabletWidth && ButtonTwoTabBorderRadiusWidth.top ? `border-radius: ${buttonBorderRadiusTabletWidth};` : ''}
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
				${connectorGlobalTypoSwitcher.fontSize === false && connectorFontSize.Tablet && connectorFontSizeUnits.Tablet ? `font-size: ${connectorFontSize.Tablet}${connectorFontSizeUnits.Tablet};` : ''}
				${connectorGlobalTypoSwitcher.letterSpacing === false && connectorLetterSpacing.Tablet && connectorLetterSpacingUnits.Tablet ? `letter-spacing: ${connectorLetterSpacing.Tablet}${connectorLetterSpacingUnits.Tablet};` : ''}
				${connectorLineHeight.Tablet && connectorLineHeightUnits.Tablet ? `line-height: ${connectorLineHeight.Tablet}${connectorLineHeightUnits.Tablet};` : ''}
				${connectorSize.Tablet && connectorSizeUnits.Tablet ? `width: ${connectorSize.Tablet}${connectorSizeUnits.Tablet};` : ''}
				${connectorTabletBorderWidth && connectorBorderTablet.top ? `border-width: ${connectorTabletBorderWidth};` : ''}
				${connectorTabletBorderRadius && connectorBorderRadiusTablet.top ? `border-radius: ${connectorTabletBorderRadius};` : ''}
			}
			
			.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper{
				${iconTabletBorderWidth && iconBorderTablet.top ? `border-width: ${iconTabletBorderWidth};` : "" }
				${iconTabletBorderRadius && iconBorderRadiusTablet.top ? `border-radius: ${iconTabletBorderRadius};` : "" }
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper{
				${iconTwoTabletBorderWidth && iconTwoBorderTablet.top ? `border-width: ${iconTwoTabletBorderWidth};` : "" }
				${iconTwoTabletBorderRadius && iconTwoBorderRadiusTablet.top ? `border-radius: ${iconTwoTabletBorderRadius};` : "" }
			}
		}
		@media only screen and (max-width: 767px) {
			.fb-dual-button-main-wrapper.${blockID} {
				${dualBtnPositionType !== 'default' ? `position: ${dualBtnPositionType};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'left' && dualBtnHZLeftOffset.Mobile ? `left: ${dualBtnHZLeftOffset.Mobile}${dualBtnHZLeftOffsetUnits.Mobile};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnHZOrientationType === 'right' && dualBtnHZRightOffset.Mobile ? `right: ${dualBtnHZRightOffset.Mobile}${dualBtnHZRightOffsetUnits.Mobile};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'top' && dualBtnVRTopOffset.Mobile ? `top: ${dualBtnVRTopOffset.Mobile}${dualBtnVRTopOffsetUnits.Mobile};` : ''}
				${dualBtnPositionType !== 'default' && dualBtnPositionType !== 'relative' && dualBtnVROrientationType === 'bottom' && dualBtnVRBottomOffset.Mobile ? `bottom: ${dualBtnVRBottomOffset.Mobile}${dualBtnVRBottomOffsetUnits.Mobile};` : ''}
				${dualButtonGlobalZIndex.Mobile ? `z-index: ${dualButtonGlobalZIndex.Mobile};` : "" }
			}	
			.fb-dual-button-container.${blockID} {
				${globalMobilePadding && dualButtonGlobalPaddingMobile.top ? `padding: ${globalMobilePadding};` : ""}
				${globalMobileMargin && dualButtonGlobalMarginMobile.top ? `margin: ${globalMobileMargin};` : ""} 
				${globalMobileBorderWidth && dualButtonGlobalBorderMobile.top ? `border-width: ${globalMobileBorderWidth};` : "" }
				${globalMobileBorderRadiusWidth && dualButtonGlobalBorderRadiusMobile.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : "" }
			}
			.fb-dual-button-container.${blockID} .fb-advanced-button {
				${ButtonWidth.Mobile && ButtonWidthWidthUnits.Mobile ? `width: ${ButtonWidth.Mobile}${ButtonWidthWidthUnits.Mobile};` : ''}
				${ButtonGlobalTypoSwitcher.fontSize === false && ButtonFontSize.Mobile && ButtonFontSizeUnits.Mobile ? `font-size: ${ButtonFontSize.Mobile}${ButtonFontSizeUnits.Mobile};` : ''}
				${ButtonGlobalTypoSwitcher.letterSpacing === false && ButtonLetterSpacing.Mobile && ButtonLetterSpacingUnits.Mobile ? `letter-spacing: ${ButtonLetterSpacing.Mobile}${ButtonLetterSpacingUnits.Mobile};` : ''}
				${ButtonGlobalTypoSwitcher.lineHeight === false && ButtonLineHeight.Mobile && ButtonLineHeightUnits.Mobile ? `line-height: ${ButtonLineHeight.Mobile}${ButtonLineHeightUnits.Mobile};` : ''}
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button {
				${buttonMobilePadding && ButtonMobilePadding.top ? `padding: ${buttonMobilePadding};` : ''}
				${buttonMobileMargin && ButtonMobileMargin.top ? `margin: ${buttonMobileMargin};` : ''}
				${buttonOneBorderMobileWidth && ButtonMobileBorderWidth.top ? `border-width: ${buttonOneBorderMobileWidth};` : ''}
				${buttonOneBorderRadiusMobileWidth && ButtonMobileBorderRadiusWidth.top ? `border-radius: ${buttonOneBorderRadiusMobileWidth};` : ''}
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button {
				${ButtonTwoBorder ? `border: ${ButtonTwoBorder};` : ''}
				${buttonBorderMobileWidth && ButtonTwoMobileBorderWidth.top ? `border-width: ${buttonBorderMobileWidth};` : ''}
				${buttonBorderRadiusMobileWidth && ButtonTwoMobileBorderRadiusWidth.top ? `border-radius: ${buttonBorderRadiusMobileWidth};` : ''}
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-connector .fb-dual-button-connector-text {
				${connectorGlobalTypoSwitcher.fontSize === false && connectorFontSize.Mobile && connectorFontSizeUnits.Mobile ? `font-size: ${connectorFontSize.Mobile}${connectorFontSizeUnits.Mobile};` : ''}
				${connectorGlobalTypoSwitcher.letterSpacing === false && connectorLetterSpacing.Mobile && connectorLetterSpacingUnits.Mobile ? `letter-spacing: ${connectorLetterSpacing.Mobile}${connectorLetterSpacingUnits.Mobile};` : ''}
				${connectorLineHeight.Mobile && connectorLineHeightUnits.Mobile ? `line-height: ${connectorLineHeight.Mobile}${connectorLineHeightUnits.Mobile};` : ''}
				${connectorSize.Mobile && connectorSizeUnits.Mobile ? `width: ${connectorSize.Mobile}${connectorSizeUnits.Mobile};` : ''}
				${connectorMobileBorderWidth && connectorBorderMobile.top ? `border-width: ${connectorMobileBorderWidth};` : ''}
				${connectorMobileBorderRadius && connectorBorderRadiusMobile.top ? `border-radius: ${connectorMobileBorderRadius};` : ''}
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-one-wrapper .fb-advanced-button-icon-wrapper{
				${iconMobileBorderWidth && iconBorderMobile.top ? `border-width: ${iconMobileBorderWidth};` : "" }
				${iconMobileBorderRadius && iconBorderRadiusMobile.top ? `border-radius: ${iconMobileBorderRadius};` : "" }
			}
			.fb-dual-button-container.${blockID} .fb-dual-button-two-wrapper .fb-advanced-button-icon-wrapper{
				${iconTwoMobileBorderWidth && iconTwoBorderMobile.top ? `border-width: ${iconTwoMobileBorderWidth};` : "" }
				${iconTwoMobileBorderRadius && iconTwoBorderRadiusMobile.top ? `border-radius: ${iconTwoMobileBorderRadius};` : "" }
			}
		
		}
	`,
		[
			blockID,
			dualButtonGlobalZIndex,
			dualBtnOverflow,
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
			ButtonGlobalTypoSwitcher,
			ButtonGlobalTypographyData,
			ButtonGlobalTypoType,
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
			ButtonBorderHoverColor,
			ButtonBorderColor,
			ButtonBgHoverColor,
			ButtonTwoBgColor,
			ButtonTwoBorder,
			buttonBorderDesktopWidth,
			buttonBorderRadiusDesktopWidth,
			buttonBorderRadiusTabletWidth,
			buttonBorderRadiusMobileWidth,
			buttonOneBorderDesktopWidth,
			buttonOneBorderTabletWidth,
			buttonOneBorderMobileWidth,
			buttonOneBorderRadiusDesktopWidth,
			buttonOneBorderRadiusTabletWidth,
			buttonOneBorderRadiusMobileWidth,
			ButtonTwoBorderColor,
			ButtonTwoBorderHoverColor,
			ButtonTwoBgHoverColor,
			buttonBorderTabletWidth,
			buttonBorderMobileWidth,
			ButtonMobileBorderWidth,
			ButtonMobileBorderRadiusWidth,
			ButtonTwoColor,
			ButtonTwoHoverColor,
			iconDesktopBorderWidth,
			iconTabletBorderWidth,
			iconMobileBorderWidth,
			iconDesktopBorderRadius,
			iconTabletBorderRadius,
			iconMobileBorderRadius,
			iconTwoDesktopBorderWidth,
			iconTwoTabletBorderWidth,
			iconTwoMobileBorderWidth,
			iconTwoDesktopBorderRadius,
			iconTwoTabletBorderRadius,
			iconTwoMobileBorderRadius,
			btnTwoIconBgColor,
			btnTwoIconBgHoverColor,
			iconTwoBorderColor,
			iconTwoBorderHoverColor,
			btnTwoIconSize,
			btnTwoIconSizeUnits,

			connectorBgColor,
			connectorBgHoverColor,
			connectorColor,
			connectorHoverColor,
			connectorGlobalTypoSwitcher,
			connectorGlobalTypographyData,
			connectorGlobalTypoType,
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
			btnIconBgColor,
			btnIconSize,
			btnIconSizeUnits,
			btnIconHoverColor,
			btnIconSpacing,
			btnIconSpacingUnits,
			buttonsGap,
			buttonsGapUnits,
			btnTwoIconSpacing,
			btnTwoIconSpacingUnits,
			globalBoxShadowSwitcher,
			globalBoxShadowValues,
			globalBoxShadowHoverValues,
			globalBoxShadowCssValue,
			globalHoverBoxShadowCssValue,

			// Position
			dualBtnPositionType,
			dualBtnHZOrientationType,
			dualBtnVROrientationType,
			dualBtnHZLeftOffset,
			dualBtnHZLeftOffsetUnits,
			dualBtnHZRightOffset,
			dualBtnHZRightOffsetUnits,
			dualBtnVRTopOffset,
			dualBtnVRTopOffsetUnits,
			dualBtnVRBottomOffset,
			dualBtnVRBottomOffsetUnits,
		],
	);

	const customCss = getCustomCss(dualButtonGlobalWraperCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${dualButtonStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [dualButtonStyle, customCss]);

	const editorStyle = `${dualButtonStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

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
										<div className="fb-dual-button-pressets">
										<PanelBody
											title={__("Presets", "frontis-blocks")}
											initialOpen={true}
										>
											<SelectControl
												label={__("Preset Style", "frontis-blocks")}
												value={dualButtonPresetStyle}
												options={PRESETS}
												onChange={(selected) => changeDualButtonPreset(selected)}
											/>	
										</PanelBody>
										</div>
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
												globalTypoControlActive={true}
												globalTypoSwitcher={ButtonGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ ButtonGlobalTypographyData: value })}

												globalTypoType={ButtonGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({ 
														ButtonGlobalTypoType: value, 
														ButtonGlobalTypoSwitcher: value === 'default' ? {...ButtonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...ButtonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
													})
												}}

												globalTypoOption={ButtonGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ ButtonGlobalTypoOption: value })}

												fontFamily={ButtonFontFamily}
												onChangeFontFamily={(value) => setAttributes({ ButtonFontFamily: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, fontFamily: value && false} })}

												fontSize={ButtonFontSize}
												onChangeFontSize={(value) => setAttributes({ ButtonFontSize: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, fontSize: value && false} })}

												fontSizeUnits={ButtonFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ ButtonFontSizeUnits: value })}

												fontWeight={ButtonFontWeight}
												onChangeFontWeight={(value) => setAttributes({ ButtonFontWeight: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, fontWeight: value && false} })}

												fontStyle={ButtonFontStyle}
												onChangeFontStyle={(value) => setAttributes({ ButtonFontStyle: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, fontStyle: value && false} })}

												textTransform={ButtonTextTransform}
												onChangeTextTransform={(value) => setAttributes({ ButtonTextTransform: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, textTransform: value && false} })}

												textDecoration={ButtonTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ ButtonTextDecoration: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, textDecoration: value && false} })}

												letterSpacing={ButtonLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ ButtonLetterSpacing: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, letterSpacing: value && false} })}

												letterSpacingUnits={ButtonLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ ButtonLetterSpacingUnits: value })}

												lineHeight={ButtonLineHeight}
												onChangeLineHeight={(value) => setAttributes({ ButtonLineHeight: value, ButtonGlobalTypoSwitcher: {...ButtonGlobalTypoSwitcher, lineHeight: value && false} })}

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
												globalTypoControlActive={true}
												globalTypoSwitcher={connectorGlobalTypoSwitcher}
												storeGlobalTypographyData={(value) => setAttributes({ connectorGlobalTypographyData: value })}

												globalTypoType={connectorGlobalTypoType}
												onChangeGlobalTypoType={(value) => {
													setAttributes({ 
														connectorGlobalTypoType: value, 
														connectorGlobalTypoSwitcher: value === 'default' ? {...connectorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...connectorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
													})
												}}

												globalTypoOption={connectorGlobalTypoOption}
												onChangeGlobalTypoOption={(value) => setAttributes({ connectorGlobalTypoOption: value })}

												fontFamily={connectorFontFamily}
												onChangeFontFamily={(value) => setAttributes({ connectorFontFamily: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, fontFamily: value && false} })}

												fontSize={connectorFontSize}
												onChangeFontSize={(value) => setAttributes({ connectorFontSize: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, fontSize: value && false} })}

												fontSizeUnits={connectorFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ connectorFontSizeUnits: value })}

												fontWeight={connectorFontWeight}
												onChangeFontWeight={(value) => setAttributes({ connectorFontWeight: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, fontWeight: value && false} })}

												fontStyle={connectorFontStyle}
												onChangeFontStyle={(value) => setAttributes({ connectorFontStyle: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, fontStyle: value && false} })}

												textTransform={connectorTextTransform}
												onChangeTextTransform={(value) => setAttributes({ connectorTextTransform: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, textTransform: value && false} })}

												textDecoration={connectorTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ connectorTextDecoration: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, textDecoration: value && false} })}

												letterSpacing={connectorLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ connectorLetterSpacing: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, letterSpacing: value && false} })}

												letterSpacingUnits={connectorLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ connectorLetterSpacingUnits: value })}

												lineHeight={connectorLineHeight}
												onChangeLineHeight={(value) => setAttributes({ connectorLineHeight: value, connectorGlobalTypoSwitcher: {...connectorGlobalTypoSwitcher, lineHeight: value && false} })}

												lineHeightUnits={connectorLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ connectorLineHeightUnits: value })}

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

											<FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={connectorBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ connectorBorderColorSwitcher: value })}
                                            />

                                            {connectorBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={connectorBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ connectorBorderColor: value })}
                                                />
                                            )}

                                            {connectorBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={connectorBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ connectorBorderHoverColor: value })}
                                                />
                                            )}

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
										
										{/*	Icon One Style */}
										{(buttonIconAlign === 'icon-text' || 
										buttonIconAlign === 'icon-only') && (
										<PanelBody
											title={__("Button One Icon", "frontis-blocks")}
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

											{/** Icon Color **/}
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
											{/** Icon Background Color **/}
											<FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={btnIconBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ btnIconBgColorSwitcher: value })}
                                            />

                                            {btnIconBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={btnIconBgColor}
                                                    setGlobalColor={(value) => setAttributes({ btnIconBgColor: value })}
                                                />
                                            )}

                                            {btnIconBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={btnIconBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ btnIconBgHoverColor: value })}
                                                />
                                            )}

											{/** Border **/}
											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={iconBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ iconBorder: value })
												}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={iconBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ iconBorderColorSwitcher: value })}
											/>

											{iconBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={iconBorderColor}
													setGlobalColor={(value) => setAttributes({ iconBorderColor: value })}
												/>
											)}

											{iconBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={iconBorderHoverColor}
													setGlobalColor={(value) => setAttributes({ iconBorderHoverColor: value })}
												/>
											)}

											<FB_Spacing
												label={__("Border Width", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={iconBorderUnitsHandler}
												spacingUnits={iconBorderUnits}
												spacingDesktop={iconBorderDesktop}
												spacingTablet={iconBorderTablet}
												spacingMobile={iconBorderMobile}
												handleSpacingUnitHandler={iconBorderUnitChange}
												spacingCombineBtn={iconBorderLink}
												spacingCombineBtnHandler={iconBorderCombineBtn}
												setAttributes={setAttributes}
											/>
											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={iconBorderRadiusUnitsHandler}
												spacingUnits={iconBorderRadiusUnits}
												spacingDesktop={iconBorderRadiusDesktop}
												spacingTablet={iconBorderRadiusTablet}
												spacingMobile={iconBorderRadiusMobile}
												handleSpacingUnitHandler={iconBorderRadiusUnitChange}
												spacingCombineBtn={iconBorderRadiusLink}
												spacingCombineBtnHandler={iconBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

										</PanelBody>
										)}

										{/*	Icon Style Two */}
										{(buttonTwoIconAlign === 'icon-text' || 
										buttonTwoIconAlign === 'icon-only') && (
										<PanelBody
											title={__("Button Two Icon", "frontis-blocks")}
											initialOpen={false}
										>
											<FB_Range
												min={1}
												max={100}
												label={__("Icon Size", "frontis-blocks")}
												rangeValue={btnTwoIconSize}
												onChangeHandler={(value) => setAttributes({ btnTwoIconSize: value }) }
												rangeUnitHandler={(value) => setAttributes({ btnTwoIconSizeUnits: value }) }
												deviceType={deviceType}
												units={btnTwoIconSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>
											<FB_Range
												min={1}
												max={100}
												label={__("Spacing", "frontis-blocks")}
												rangeValue={btnTwoIconSpacing}
												onChangeHandler={(value) => setAttributes({ btnTwoIconSpacing: value }) }
												rangeUnitHandler={(value) => setAttributes({ btnTwoIconSpacingUnits: value }) }
												deviceType={deviceType}
												units={btnTwoIconSpacingUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>

											<FB_SwitcherControl
												label={__("Icon Color", "frontis-blocks")}
												globalColorSwitcher={btnIconColorSwitcher}
												globalColor={btnIconColor}
												globalHoverColor={btnIconHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ btnIconColorSwitcher: value }) }
												handleGlobalColorChange={(value) => setAttributes({ btnIconColor: value }) }
												handleGlobalHoverColorChange={(value) => setAttributes({ btnIconHoverColor: value }) }
											/>

											{btnTwoIconColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={btnTwoIconColor}
													setGlobalColor={(value) => setAttributes({ btnTwoIconColor: value })}
												/>
											)}

											{btnTwoIconColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={btnTwoIconHoverColor}
													setGlobalColor={(value) => setAttributes({ btnTwoIconHoverColor: value })}
												/>
											)}
											{/** Icon Two Background Color **/}
											<FB_SwitcherControl
												label={__("Background Color", "frontis-blocks")}
												globalSwitcher={btnIconTwoBgColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ btnIconTwoBgColorSwitcher: value })}
											/>

											{btnIconTwoBgColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={btnTwoIconBgColor}
													setGlobalColor={(value) => setAttributes({ btnTwoIconBgColor: value })}
												/>
											)}

											{btnIconTwoBgColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={btnTwoIconBgHoverColor}
													setGlobalColor={(value) => setAttributes({ btnTwoIconBgHoverColor: value })}
												/>
											)}

											{/** Border **/}
											<SelectControl
												label={__("Border Style", "frontis-blocks")}
												value={iconTwoBorder}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ iconTwoBorder: value })
												}
											/>

											<FB_SwitcherControl
												label={__("Border Color", "frontis-blocks")}
												globalSwitcher={iconTwoBorderColorSwitcher}
												setGlobalSwitcher={(value) => setAttributes({ iconTwoBorderColorSwitcher: value })}
											/>

											{iconTwoBorderColorSwitcher === 'normal' && (
												<FB_ColorControl
													label={__("Normal Color", "frontis-blocks")}
													globalColor={iconTwoBorderColor}
													setGlobalColor={(value) => setAttributes({ iconTwoBorderColor: value })}
												/>
											)}

											{iconTwoBorderColorSwitcher === 'hover' && (
												<FB_ColorControl
													label={__("Hover Color", "frontis-blocks")}
													globalColor={iconTwoBorderHoverColor}
													setGlobalColor={(value) => setAttributes({ iconTwoBorderHoverColor: value })}
												/>
											)}

											<FB_Spacing
												label={__("Border Width", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={iconTwoBorderUnitsHandler}
												spacingUnits={iconTwoBorderUnits}
												spacingDesktop={iconTwoBorderDesktop}
												spacingTablet={iconTwoBorderTablet}
												spacingMobile={iconTwoBorderMobile}
												handleSpacingUnitHandler={iconTwoBorderUnitChange}
												spacingCombineBtn={iconTwoBorderLink}
												spacingCombineBtnHandler={iconTwoBorderCombineBtn}
												setAttributes={setAttributes}
											/>
											<FB_Spacing
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={iconTwoBorderRadiusUnitsHandler}
												spacingUnits={iconTwoBorderRadiusUnits}
												spacingDesktop={iconTwoBorderRadiusDesktop}
												spacingTablet={iconTwoBorderRadiusTablet}
												spacingMobile={iconTwoBorderRadiusMobile}
												handleSpacingUnitHandler={iconTwoBorderRadiusUnitChange}
												spacingCombineBtn={iconTwoBorderRadiusLink}
												spacingCombineBtnHandler={iconTwoBorderRadiusCombineBtn}
												setAttributes={setAttributes}
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
													<FB_Range
                                                        min={0}
                                                        max={10000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={dualButtonGlobalZIndex}
                                                        onChangeHandler={(value) => setAttributes({ dualButtonGlobalZIndex: value === 0 ? undefined : value })}
                                                        deviceType={deviceType}
                                                        setAttributes={setAttributes}
                                                        rangeStep={1}
                                                        resetFallbackValue={""}
                                                        isRangeUnit={false}
                                                    />

													<SelectControl
                                                        label={__("Overflow", "frontis-blocks")}
                                                        value={dualBtnOverflow}
                                                        options={OVERFLOW_OP}
                                                        onChange={(value) => setAttributes({ dualBtnOverflow: value })}
                                                    />

													<FB_PositionControl
														deviceType={deviceType}
														positionType={dualBtnPositionType}
														setPositionType={(value) => setAttributes({ dualBtnPositionType: value })}
																										
														HZOrientationType={dualBtnHZOrientationType}
														setHZOrientationType={(value) =>
															setAttributes({ dualBtnHZOrientationType: value })
														}
														VROrientationType={dualBtnVROrientationType}
														setVROrientationType={(value) =>
															setAttributes({ dualBtnVROrientationType: value })
														}
																											
														HZLeftOffset={dualBtnHZLeftOffset}
														setHZLeftOffset={(value) => setAttributes({ dualBtnHZLeftOffset: value })}
														HZLeftOffsetUnits={dualBtnHZLeftOffsetUnits}
														setHZLeftOffsetUnits={(value) => setAttributes({ dualBtnHZLeftOffsetUnits: value })}
														HZRightOffset={dualBtnHZRightOffset}
														setHZRightOffset={(value) => setAttributes({ dualBtnHZRightOffset: value })}
														HZRightOffsetUnits={dualBtnHZRightOffsetUnits}
														setHZRightOffsetUnits={(value) => setAttributes({ dualBtnHZRightOffsetUnits: value })}
																										
														VRTopOffset={dualBtnVRTopOffset}
														setVRTopOffset={(value) => setAttributes({ dualBtnVRTopOffset: value })}
														VRTopOffsetUnits={dualBtnVRTopOffsetUnits}
														setVRTopOffsetUnits={(value) => setAttributes({ dualBtnVRTopOffsetUnits: value })}
														VRBottomOffset={dualBtnVRBottomOffset}
														setVRBottomOffset={(value) => setAttributes({ dualBtnVRBottomOffset: value })}
														VRBottomOffsetUnits={dualBtnVRBottomOffsetUnits}
														setVRBottomOffsetUnits={(value) => setAttributes({ dualBtnVRBottomOffsetUnits: value })}

														setAttributes={setAttributes}
													/>

													<FB_InputControl
														label={__("CSS ID", "frontis-blocks")}
														value={dualButtonGlobalWraperID}
														onChangeValue={(value) => setAttributes({ dualButtonGlobalWraperID: value })}
														helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
													/>

													<FB_InputControl
														label={__("CSS Class", "frontis-blocks")}
														value={dualButtonGlobalWraperClass}
														onChangeValue={(value) => setAttributes({ dualButtonGlobalWraperClass: value })}
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
													
													<FB_SwitcherControl
														label={__("Background Color", "frontis-blocks")}
														globalSwitcher={dualButtonGlobalBgColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ dualButtonGlobalBgColorSwitcher: value })}
													/>

													{dualButtonGlobalBgColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={dualButtonGlobalBgColor}
															setGlobalColor={(value) => setAttributes({ dualButtonGlobalBgColor: value })}
														/>
													)}

													{dualButtonGlobalBgColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={dualButtonGlobalBgHoverColor}
															setGlobalColor={(value) => setAttributes({ dualButtonGlobalBgHoverColor: value })}
														/>
													)}
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

													<FB_SwitcherControl
														label={__("Border Color", "frontis-blocks")}
														globalSwitcher={dualButtonGlobalBorderColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ dualButtonGlobalBorderColorSwitcher: value })}
													/>

													{dualButtonGlobalBgColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={dualButtonGlobalBorderColor}
															setGlobalColor={(value) => setAttributes({ dualButtonGlobalBorderColor: value })}
														/>
													)}

													{dualButtonGlobalBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={dualButtonGlobalBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ dualButtonGlobalBorderHoverColor: value })}
														/>
													)}

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
													
													<FB_SwitcherControl
                                                    label={__("Box Shadow", "frontis-blocks")}
                                                    globalSwitcher={globalBoxShadowSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ globalBoxShadowSwitcher: value })}
													/>

													{globalBoxShadowSwitcher === 'normal' && (
														<FB_BoxShadowControl
															label={__("Normal Shadow", "frontis-blocks")}
															onBoxShadowChange={(value) => setAttributes({ globalBoxShadowValues: value })}
															initialShadowValue={globalBoxShadowValues}
															onBoxShadowStyleChange={(value) => setAttributes({ globalBoxShadowCssValue: value })}
														/>
													)}

													{globalBoxShadowSwitcher === 'hover' && (
														<FB_BoxShadowControl
															label={__("Hover Shadow", "frontis-blocks")}
															onBoxShadowChange={(value) => setAttributes({ globalBoxShadowHoverValues: value })}
															initialShadowValue={globalBoxShadowHoverValues}
															onBoxShadowStyleChange={(value) => setAttributes({ globalHoverBoxShadowCssValue: value })}
														/>
													)}
												</PanelBody>

												<PanelBody
													title={__("Responsive Control", "frontis-blocks")}
													initialOpen={false}
													className="fb-setting-responsive-control-wrapper"
												>
													<FB_VisibilityControl
                                                        desktopValue={dualBtnDesktopSwitcher}
                                                        setDesktopValue={(value) => setAttributes({ dualBtnDesktopSwitcher: value })}

                                                        tabletValue={dualBtnTabletSwitcher}
                                                        setTabletValue={(value) => setAttributes({ dualBtnTabletSwitcher: value })}

                                                        mobileValue={dualBtnMobileSwitcher}
                                                        setMobileValue={(value) => setAttributes({ dualBtnMobileSwitcher: value })}
                                                    />
												</PanelBody>

												<PanelBody
													title={__("Custom CSS", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_CustomCSSEditor  
														value={dualButtonGlobalWraperCustomCSS}
														onChangeValue={(value) => setAttributes({ dualButtonGlobalWraperCustomCSS: value })}
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
