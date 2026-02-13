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

import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';
import FB_Presets from '@Components/presets';
import { dualButtonPresets } from './presets';

const Inspector = ({ attributes, setAttributes }) => {
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
		frontendButtonIcon,
		frontendButtonTwoIcon,
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
		buttonIconRotateSwitcher,
		buttonIconRotate,
		buttonIconRotateHover,


		btnTwoIconColorSwitcher,
		btnTwoIconColor,
		btnTwoIconHoverColor,
		btnTwoIconSize,
		btnTwoIconSizeUnits,
		btnIconTwoBgColorSwitcher,
		btnTwoIconBgColor,
		btnTwoIconBgHoverColor,
		buttonTwoIconRotateSwitcher,
		buttonTwoIconRotate,
		buttonTwoIconRotateHover,

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

		/** Start Dynamic Btn One Text */
		dynamicBtnOneEnabled,
		dynamicBtnOneSource,
		dynamicBtnOnePostId,
		dynamicBtnOnePostType,
		dynamicBtnOnePostLabel,
		dynamicBtnOneField,
		dynamicBtnOneFeaturedImageField,

		dynamicBtnOneDateType,
		dynamicBtnOneDateFormat,

		dynamicBtnOneTimeType,
		dynamicBtnOneTimeFormat,

		dynamicBtnOneCommentsZeroText,
		dynamicBtnOneCommentsOneText,
		dynamicBtnOneCommentsManyText,

		dynamicBtnOneTermsTaxonomy,
		dynamicBtnOneTermsSeparator,
		dynamicBtnOneEnableLink,	
		dynamicBtnOneLinkSource,
		/** End Dynamic Btn One Text */

		/** Start Dynamic Btn Two Text */
		dynamicBtnTwoEnabled,
		dynamicBtnTwoSource,
		dynamicBtnTwoPostId,
		dynamicBtnTwoPostType,
		dynamicBtnTwoPostLabel,
		dynamicBtnTwoField,
		dynamicBtnTwoFeaturedImageField,

		dynamicBtnTwoDateType,
		dynamicBtnTwoDateFormat,

		dynamicBtnTwoTimeType,
		dynamicBtnTwoTimeFormat,

		dynamicBtnTwoCommentsZeroText,
		dynamicBtnTwoCommentsOneText,
		dynamicBtnTwoCommentsManyText,

		dynamicBtnTwoTermsTaxonomy,
		dynamicBtnTwoTermsSeparator,
		dynamicBtnTwoEnableLink,
		dynamicBtnTwoLinkSource,
		/** End Dynamic Btn Two Text */
	} = attributes;

	const deviceType = useDeviceType();

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

	const iconHandler = (IconName) => {
		setAttributes({ ButtonIcon: IconName });
	};

	const iconHandlerTwo = (IconName) => {
		setAttributes({ ButtonTwoIcon: IconName });
	};

	/**
     * Generate SVG Icons for Icon
     */
	useEffect(() => {
		setAttributes({
			frontendButtonIcon: generateSvgIcon(ButtonIcon), 
			frontendButtonTwoIcon: generateSvgIcon(ButtonTwoIcon), 
		})
	}, [ButtonIcon, ButtonTwoIcon]);

	// Check if Pro is active
	const getProActiveState = getProActive();
	useEffect(() => {
		if (!getProActiveState) { 
			setAttributes({
				dynamicBtnOneEnabled: false,
				dynamicBtnOneEnableLink: false,
				dynamicBtnTwoEnabled: false,
				dynamicBtnTwoEnableLink: false,
			});
		}
	}, [getProActiveState]);

	const dynamicBtnOneContentToggleControls = getProToggleControls({ 
		hook: 'frontisblocks-dual-button-one-toggle-controls', 
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBtnOneEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'dual-button-dynamic-btn-one-content',
		isProActive : getProActiveState
	});

	const dynamicBtnTwoContentToggleControls = getProToggleControls({ 
		hook: 'frontisblocks-dual-button-two-toggle-controls', 
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicBtnTwoEnabled',
		label: __('Dynamic Content', 'frontis-blocks'),
		keyPrefix: 'dual-button-dynamic-btn-two-content',
		isProActive : getProActiveState
	});
	

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-dual-button-pressets">
				<PanelBody
					title={__("Presets", "frontis-blocks")}
					initialOpen={true}
				>
					<FB_Presets
						className="fb-dual-button-presets"
						label={__('Select Preset', 'frontis-blocks')}
						presets={dualButtonPresets}
						value = {dualButtonPresetStyle}
						onChangeValue = 'dualButtonPresetStyle'
						defaultPresetValue="preset-1"
						setAttributes={setAttributes}
					/>
				</PanelBody>
			</div>
			<div className="fb-dual-button-container">
				{/*Button One*/}
				<div className="fb-dual-button-one-wrapper">
					<PanelBody
						title={__("Button One", "frontis-blocks")}
						initialOpen={false}
					>

						{dynamicBtnOneContentToggleControls.map((control, index) => (
							<div key={control.key || index}>{control.comp}</div>
						))}
		
						<DynamicDataSourceControl
							enabled={dynamicBtnOneEnabled}
							
							source={dynamicBtnOneSource}
							setSource={(value) => setAttributes({ dynamicBtnOneSource: value })}
							postId={dynamicBtnOnePostId}
							setPostId={(value) => setAttributes({ dynamicBtnOnePostId: value })}
							postType={dynamicBtnOnePostType}
							setPostType={(value) => setAttributes({ dynamicBtnOnePostType: value })}
							postLabel={dynamicBtnOnePostLabel}
							setPostLabel={(value) => setAttributes({ dynamicBtnOnePostLabel: value })}

							field={dynamicBtnOneField}
							setField={(value) => setAttributes({ dynamicBtnOneField: value })}
							featuredImageField={dynamicBtnOneFeaturedImageField}
							setFeaturedImageField={(value) => setAttributes({ dynamicBtnOneFeaturedImageField: value })}

							dateType={dynamicBtnOneDateType}
							setDateType={(value) => setAttributes({ dynamicBtnOneDateType: value })}
							dateFormat={dynamicBtnOneDateFormat}
							setDateFormat={(value) => setAttributes({ dynamicBtnOneDateFormat: value })}
							timeType={dynamicBtnOneTimeType}
							setTimeType={(value) => setAttributes({ dynamicBtnOneTimeType: value })}
							timeFormat={dynamicBtnOneTimeFormat}
							setTimeFormat={(value) => setAttributes({ dynamicBtnOneTimeFormat: value })}

							commentsZeroText={dynamicBtnOneCommentsZeroText}
							setCommentsZeroText={(value) => setAttributes({ dynamicBtnOneCommentsZeroText: value })}
							commentsOneText={dynamicBtnOneCommentsOneText}
							setCommentsOneText={(value) =>setAttributes({ dynamicBtnOneCommentsOneText: value })}
							commentsManyText={dynamicBtnOneCommentsManyText}
							setCommentsManyText={(value) =>setAttributes({ dynamicBtnOneCommentsManyText: value })}

							termsTaxonomy={dynamicBtnOneTermsTaxonomy}
							setTermsTaxonomy={(value) => setAttributes({ dynamicBtnOneTermsTaxonomy: value })}
							termsSeparator={dynamicBtnOneTermsSeparator}
							setTermsSeparator={(value) => setAttributes({ dynamicBtnOneTermsSeparator: value })}
						/>
						{!dynamicBtnOneEnabled && (
							<TextControl
								label={__("Text", "frontis-blocks")}
								value={ButtonText}
								onChange={(value) =>
									setAttributes({ ButtonText: value })
								}
								className="fb-advanced-button-text"
							/>
						)}
						{dynamicBtnOneEnabled && ( 
							<DynamicDataLinkControl
								enableLink={dynamicBtnOneEnableLink}
								setEnableLink={(value) => setAttributes({ dynamicBtnOneEnableLink: value })}
								linkSource={dynamicBtnOneLinkSource}
								setLinkSource={(value) => setAttributes({ dynamicBtnOneLinkSource: value })}
							/>
						)}
						{!dynamicBtnOneEnableLink && (
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
						)}

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
											className={`fb-setting-text-alignment-single-btn ${buttonIconAlign === item.value
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
						{buttonIconAlign === "icon-text" && (
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

						{dynamicBtnTwoContentToggleControls.map((control, index) => (
							<div key={control.key || index}>{control.comp}</div>
						))}
		
						<DynamicDataSourceControl
							enabled={dynamicBtnTwoEnabled}
							
							source={dynamicBtnTwoSource}
							setSource={(value) => setAttributes({ dynamicBtnTwoSource: value })}
							postId={dynamicBtnTwoPostId}
							setPostId={(value) => setAttributes({ dynamicBtnTwoPostId: value })}
							postType={dynamicBtnTwoPostType}
							setPostType={(value) => setAttributes({ dynamicBtnTwoPostType: value })}
							postLabel={dynamicBtnTwoPostLabel}
							setPostLabel={(value) => setAttributes({ dynamicBtnTwoPostLabel: value })}

							field={dynamicBtnTwoField}
							setField={(value) => setAttributes({ dynamicBtnTwoField: value })}
							featuredImageField={dynamicBtnTwoFeaturedImageField}
							setFeaturedImageField={(value) => setAttributes({ dynamicBtnTwoFeaturedImageField: value })}

							dateType={dynamicBtnTwoDateType}
							setDateType={(value) => setAttributes({ dynamicBtnTwoDateType: value })}
							dateFormat={dynamicBtnTwoDateFormat}
							setDateFormat={(value) => setAttributes({ dynamicBtnTwoDateFormat: value })}
							timeType={dynamicBtnTwoTimeType}
							setTimeType={(value) => setAttributes({ dynamicBtnTwoTimeType: value })}
							timeFormat={dynamicBtnTwoTimeFormat}
							setTimeFormat={(value) => setAttributes({ dynamicBtnTwoTimeFormat: value })}

							commentsZeroText={dynamicBtnTwoCommentsZeroText}
							setCommentsZeroText={(value) => setAttributes({ dynamicBtnTwoCommentsZeroText: value })}
							commentsOneText={dynamicBtnTwoCommentsOneText}
							setCommentsOneText={(value) =>setAttributes({ dynamicBtnTwoCommentsOneText: value })}
							commentsManyText={dynamicBtnTwoCommentsManyText}
							setCommentsManyText={(value) =>setAttributes({ dynamicBtnTwoCommentsManyText: value })}

							termsTaxonomy={dynamicBtnTwoTermsTaxonomy}
							setTermsTaxonomy={(value) => setAttributes({ dynamicBtnTwoTermsTaxonomy: value })}
							termsSeparator={dynamicBtnTwoTermsSeparator}
							setTermsSeparator={(value) => setAttributes({ dynamicBtnTwoTermsSeparator: value })}
						/>
						{!dynamicBtnTwoEnabled && (
							<TextControl
								label={__("Text", "frontis-blocks")}
								value={ButtonTwoText}
								onChange={(value) =>
									setAttributes({ ButtonTwoText: value })
								}
								className="fb-advanced-button-text"
							/>
						)}
						{dynamicBtnTwoEnabled && ( 
							<DynamicDataLinkControl
								enableLink={dynamicBtnTwoEnableLink}
								setEnableLink={(value) => setAttributes({ dynamicBtnTwoEnableLink: value })}
								linkSource={dynamicBtnTwoLinkSource}
								setLinkSource={(value) => setAttributes({ dynamicBtnTwoLinkSource: value })}
							/>
						)}
						{!dynamicBtnTwoEnableLink && (
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
						)}

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
											className={`fb-setting-text-alignment-single-btn ${buttonTwoIconAlign === item.value
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
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
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
							ButtonGlobalTypoSwitcher: value === 'default' ? { ...ButtonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...ButtonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={ButtonGlobalTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ ButtonGlobalTypoOption: value })}

					fontFamily={ButtonFontFamily}
					onChangeFontFamily={(value) => setAttributes({ ButtonFontFamily: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, fontFamily: value && false } })}

					fontSize={ButtonFontSize}
					onChangeFontSize={(value) => setAttributes({ ButtonFontSize: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={ButtonFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ ButtonFontSizeUnits: value })}

					fontWeight={ButtonFontWeight}
					onChangeFontWeight={(value) => setAttributes({ ButtonFontWeight: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, fontWeight: value && false } })}

					fontStyle={ButtonFontStyle}
					onChangeFontStyle={(value) => setAttributes({ ButtonFontStyle: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, fontStyle: value && false } })}

					textTransform={ButtonTextTransform}
					onChangeTextTransform={(value) => setAttributes({ ButtonTextTransform: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, textTransform: value && false } })}

					textDecoration={ButtonTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ ButtonTextDecoration: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={ButtonLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ ButtonLetterSpacing: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={ButtonLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ ButtonLetterSpacingUnits: value })}

					lineHeight={ButtonLineHeight}
					onChangeLineHeight={(value) => setAttributes({ ButtonLineHeight: value, ButtonGlobalTypoSwitcher: { ...ButtonGlobalTypoSwitcher, lineHeight: value && false } })}

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
						setGlobalColor={(value) => setAttributes({ ButtonColor: value === undefined ? '' : value })}
					/>
				)}

				{ButtonColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={ButtonHoverColor}
						setGlobalColor={(value) => setAttributes({ ButtonHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ ButtonBgColor: value === undefined ? '' : value })}
					/>
				)}

				{ButtonBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={ButtonBgHoverColor}
						setGlobalColor={(value) => setAttributes({ ButtonBgHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ ButtonBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{ButtonBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={ButtonBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ ButtonBorderHoverColor: value === undefined ? '' : value })}
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
					handleSpacingUnitHandler={handleButtonOneBorderUnitChange}
					spacingCombineBtn={ButtonTwoBorderLink}
					spacingCombineBtnHandler={handleButtonOneBorderCombineBtn}
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
					handleSpacingUnitHandler={handleButtonOneBorderRadiusUnitChange}
					spacingCombineBtn={ButtonBorderRadiusLink}
					spacingCombineBtnHandler={handleButtonOneBorderRadiusCombineBtn}
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
						setGlobalColor={(value) => setAttributes({ ButtonTwoColor: value === undefined ? '' : value })}
					/>
				)}

				{ButtonTwoColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={ButtonTwoHoverColor}
						setGlobalColor={(value) => setAttributes({ ButtonTwoHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ ButtonTwoBgColor: value === undefined ? '' : value })}
					/>
				)}

				{ButtonTwoBgColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={ButtonTwoBgHoverColor}
						setGlobalColor={(value) => setAttributes({ ButtonTwoBgHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ ButtonTwoBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{ButtonTwoBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={ButtonTwoBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ ButtonTwoBorderHoverColor: value === undefined ? '' : value })}
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
								connectorGlobalTypoSwitcher: value === 'default' ? { ...connectorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...connectorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
							})
						}}

						globalTypoOption={connectorGlobalTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ connectorGlobalTypoOption: value })}

						fontFamily={connectorFontFamily}
						onChangeFontFamily={(value) => setAttributes({ connectorFontFamily: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, fontFamily: value && false } })}

						fontSize={connectorFontSize}
						onChangeFontSize={(value) => setAttributes({ connectorFontSize: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, fontSize: value && false } })}

						fontSizeUnits={connectorFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ connectorFontSizeUnits: value })}

						fontWeight={connectorFontWeight}
						onChangeFontWeight={(value) => setAttributes({ connectorFontWeight: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, fontWeight: value && false } })}

						fontStyle={connectorFontStyle}
						onChangeFontStyle={(value) => setAttributes({ connectorFontStyle: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, fontStyle: value && false } })}

						textTransform={connectorTextTransform}
						onChangeTextTransform={(value) => setAttributes({ connectorTextTransform: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, textTransform: value && false } })}

						textDecoration={connectorTextDecoration}
						onChangeTextDecoration={(value) => setAttributes({ connectorTextDecoration: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, textDecoration: value && false } })}

						letterSpacing={connectorLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ connectorLetterSpacing: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, letterSpacing: value && false } })}

						letterSpacingUnits={connectorLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ connectorLetterSpacingUnits: value })}

						lineHeight={connectorLineHeight}
						onChangeLineHeight={(value) => setAttributes({ connectorLineHeight: value, connectorGlobalTypoSwitcher: { ...connectorGlobalTypoSwitcher, lineHeight: value && false } })}

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
							setGlobalColor={(value) => setAttributes({ connectorColor: value === undefined ? '' : value })}
						/>
					)}

					{connectorColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={connectorHoverColor}
							setGlobalColor={(value) => setAttributes({ connectorHoverColor: value === undefined ? '' : value })}
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
							setGlobalColor={(value) => setAttributes({ connectorBgColor: value === undefined ? '' : value })}
						/>
					)}

					{connectorBgColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={connectorBgHoverColor}
							setGlobalColor={(value) => setAttributes({ connectorBgHoverColor: value === undefined ? '' : value })}
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
							setGlobalColor={(value) => setAttributes({ connectorBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{connectorBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={connectorBorderHoverColor}
							setGlobalColor={(value) => setAttributes({ connectorBorderHoverColor: value === undefined ? '' : value })}
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
							onChangeHandler={(value) => setAttributes({ btnIconSpacing: value })}
							rangeUnitHandler={(value) => setAttributes({ btnIconSpacingUnits: value })}
							deviceType={deviceType}
							units={btnIconSpacingUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>

						<FB_SwitcherControl
							label={__("Icon Rotation", "frontis-blocks")}
							globalSwitcher={buttonIconRotateSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ buttonIconRotateSwitcher: value })}
						/>

						{buttonIconRotateSwitcher === 'normal' && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Icon Rotation", "frontis-blocks")}
								rangeValue={buttonIconRotate}
								onChangeHandler={(value) => setAttributes({ buttonIconRotate: value === 0 ? undefined : value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}

							/>
						)}

						{buttonIconRotateSwitcher === 'hover' && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Icon Rotation", "frontis-blocks")}
								rangeValue={buttonIconRotateHover}
								onChangeHandler={(value) => setAttributes({ buttonIconRotateHover: value === 0 ? undefined : value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}
							/>
						)}
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
								setGlobalColor={(value) => setAttributes({ btnIconBgColor: value === undefined ? '' : value })}
							/>
						)}

						{btnIconBgColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={btnIconBgHoverColor}
								setGlobalColor={(value) => setAttributes({ btnIconBgHoverColor: value === undefined ? '' : value })}
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
								setGlobalColor={(value) => setAttributes({ iconBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{iconBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={iconBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ iconBorderHoverColor: value === undefined ? '' : value })}
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
							onChangeHandler={(value) => setAttributes({ btnTwoIconSize: value })}
							rangeUnitHandler={(value) => setAttributes({ btnTwoIconSizeUnits: value })}
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
							onChangeHandler={(value) => setAttributes({ btnTwoIconSpacing: value })}
							rangeUnitHandler={(value) => setAttributes({ btnTwoIconSpacingUnits: value })}
							deviceType={deviceType}
							units={btnTwoIconSpacingUnits}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
						/>

						<FB_SwitcherControl
							label={__("Icon Rotation", "frontis-blocks")}
							globalSwitcher={buttonTwoIconRotateSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ buttonTwoIconRotateSwitcher: value })}
						/>

						{buttonTwoIconRotateSwitcher === 'normal' && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Icon Rotation", "frontis-blocks")}
								rangeValue={buttonTwoIconRotate}
								onChangeHandler={(value) => setAttributes({ buttonTwoIconRotate: value === 0 ? undefined : value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}

							/>
						)}

						{buttonTwoIconRotateSwitcher === 'hover' && (
							<FB_Range
								min={-360}
								max={360}
								label={__("Icon Rotation", "frontis-blocks")}
								rangeValue={buttonTwoIconRotateHover}
								onChangeHandler={(value) => setAttributes({ buttonTwoIconRotateHover: value === 0 ? undefined : value })}
								deviceType={deviceType}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
								isRangeUnit={false}
							/>
						)}
						<FB_SwitcherControl
							label={__("Icon Color", "frontis-blocks")}
							globalColorSwitcher={btnIconColorSwitcher}
							globalColor={btnIconColor}
							globalHoverColor={btnIconHoverColor}
							handleColorSwitcherChange={(value) => setAttributes({ btnIconColorSwitcher: value })}
							handleGlobalColorChange={(value) => setAttributes({ btnIconColor: value === undefined ? '' : value })}
							handleGlobalHoverColorChange={(value) => setAttributes({ btnIconHoverColor: value === undefined ? '' : value })}
						/>

						{btnTwoIconColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={btnTwoIconColor}
								setGlobalColor={(value) => setAttributes({ btnTwoIconColor: value === undefined ? '' : value })}
							/>
						)}

						{btnTwoIconColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={btnTwoIconHoverColor}
								setGlobalColor={(value) => setAttributes({ btnTwoIconHoverColor: value === undefined ? '' : value })}
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
								setGlobalColor={(value) => setAttributes({ btnTwoIconBgColor: value === undefined ? '' : value })}
							/>
						)}

						{btnIconTwoBgColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={btnTwoIconBgHoverColor}
								setGlobalColor={(value) => setAttributes({ btnTwoIconBgHoverColor: value === undefined ? '' : value })}
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
								setGlobalColor={(value) => setAttributes({ iconTwoBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{iconTwoBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={iconTwoBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ iconTwoBorderHoverColor: value === undefined ? '' : value })}
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
	);

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
			<div className="fb-setting-advanced-tab-wrapper">
				<div className="fb-setting-z-index-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className="fb-setting-layout-header"
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
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={dualButtonGlobalPaddingUnits}
							spacingDesktop={dualButtonGlobalPaddingDesktop}
							spacingTablet={dualButtonGlobalPaddingTablet}
							spacingMobile={dualButtonGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={dualButtonGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
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
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={dualButtonGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
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
								setGlobalColor={(value) => setAttributes({ dualButtonGlobalBgColor: value === undefined ? '' : value })}
							/>
						)}

						{dualButtonGlobalBgColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={dualButtonGlobalBgHoverColor}
								setGlobalColor={(value) => setAttributes({ dualButtonGlobalBgHoverColor: value === undefined ? '' : value })}
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
							onChange={(value) => setAttributes({ dualButtonGlobalBorder: value })}
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
								setGlobalColor={(value) => setAttributes({ dualButtonGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{dualButtonGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={dualButtonGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ dualButtonGlobalBorderHoverColor: value === undefined ? '' : value })}
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
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={dualButtonGlobalBorderRadiusUnits}
							spacingDesktop={dualButtonGlobalBorderRadiusDesktop}
							spacingTablet={dualButtonGlobalBorderRadiusTablet}
							spacingMobile={dualButtonGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={dualButtonGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
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
export default memo(Inspector);