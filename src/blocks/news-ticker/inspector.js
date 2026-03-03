import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_SwitcherControl from "@Components/switcher-control";
import FB_Range from "@Components/range";
import FB_ColorControl from "@Components/color-control";
import FB_Spacing from "@Components/spacing";
import FB_TypographyControl from "@Components/typography-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_UrlControl from "@Components/url-control";
import FB_HtmlTagControl from "@Components/html-tag-control";
import FB_InputControl from "@Components/input-control";
import FB_CustomCSSEditor from "@Components/custom-css-editor";
import getCustomCss from "@Utils/getCustomCss";
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from "@Components/position-control";
import FB_VisibilityControl from "@Components/visibility-control";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_ResponsiveControl from "@Components/responsive-control";
import FBIconPicker from "../../components/icon-picker";
import FB_Presets from '@Components/presets';
import { newsTickerPresets } from "./presets";

import {
	SelectControl,
	PanelBody,
	BaseControl,
	Button,
	ButtonGroup,
	TextControl,
	ToggleControl,
} from "@wordpress/components";

import {
	TEXT_ALIGN,
	BORDER_STYLES,
	OVERFLOW_OP,
	CONTENT_TYPE,
	TIMER_POSITION,
	NAVIGATION_POSITION,
	LABEL_POSITION
} from "../../fbConstants/fbConstants";

import "./editor.scss";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		blockID,
		// deviceType,
		blockStyle,
		newsTickerIconAlignment,
		showArrows,
		showTime,
		/** Global Style */
		newsTickerGlobalZIndex,
		newsTickerOverflow,
		newsTickerGlobalPaddingUnits,
		newsTickerGlobalPaddingDesktop,
		newsTickerGlobalPaddingTablet,
		newsTickerGlobalPaddingMobile,
		newsTickerGlobalPaddingLink,

		newsTickerGlobalMarginUnits,
		newsTickerGlobalMarginDesktop,
		newsTickerGlobalMarginTablet,
		newsTickerGlobalMarginMobile,
		newsTickerGlobalMarginLink,

		/** Start Global Background Color */
		newsTickerGlobalBgColorSwitcher,

		newsTickerGlobalNormalBackgroundType,
		newsTickerGlobalNormalClassicColor,
		newsTickerGlobalNormalGradientColor,
		newsTickerGlobalNormalCustomGradientSwitcher,
		newsTickerGlobalNormalCustomGradientInputValue,

		newsTickerGlobalNormalBackgroundImageUrl,
		newsTickerGlobalNormalBackgroundImageAlt,
		newsTickerGlobalNormalBackgroundImageID,
		newsTickerGlobalNormalBackgroundImagePosition,
		newsTickerGlobalNormalBackgroundImageAttachment,
		newsTickerGlobalNormalBackgroundImageRepeat,
		newsTickerGlobalNormalBackgroundImageSize,

		newsTickerGlobalHoverBackgroundType,
		newsTickerGlobalHoverClassicColor,
		newsTickerGlobalHoverGradientColor,
		newsTickerGlobalHoverCustomGradientSwitcher,
		newsTickerGlobalHoverCustomGradientInputValue,

		newsTickerGlobalHoverBackgroundImageUrl,
		newsTickerGlobalHoverBackgroundImageAlt,
		newsTickerGlobalHoverBackgroundImageID,
		newsTickerGlobalHoverBackgroundImagePosition,
		newsTickerGlobalHoverBackgroundImageAttachment,
		newsTickerGlobalHoverBackgroundImageRepeat,
		newsTickerGlobalHoverBackgroundImageSize,
		/** End Global Background Color */

		newsTickerGlobalBorder,
		newsTickerGlobalBorderColorSwitcher,
		newsTickerGlobalBorderColor,
		newsTickerGlobalBorderHoverColor,

		newsTickerGlobalBorderUnits,
		newsTickerGlobalBorderDesktop,
		newsTickerGlobalBorderTablet,
		newsTickerGlobalBorderMobile,
		newsTickerGlobalBorderLink,

		newsTickerGlobalBorderRadiusUnits,
		newsTickerGlobalBorderRadiusDesktop,
		newsTickerGlobalBorderRadiusTablet,
		newsTickerGlobalBorderRadiusMobile,
		newsTickerGlobalBorderRadiusLink,

		newsTickerGlobalBoxShadowSwitcher,
		newsTickerGlobalBoxShadowValues,
		newsTickerGlobalBoxShadowCssValue,
		newsTickerGlobalBoxShadowHoverValues,
		newsTickerGlobalBoxShadowHoverCssValue,
		/** End Global Style */

		newsTickerDesktopSwitcher,
		newsTickerTabletSwitcher,
		newsTickerMobileSwitcher,

		newsTickerGlobalWraperCustomCSS,
		newsTickerGlobalWraperID,
		newsTickerGlobalWraperClass,

		// Position
		newsTickerPositionType,
		newsTickerHZOrientationType,
		newsTickerVROrientationType,
		newsTickerHZLeftOffset,
		newsTickerHZLeftOffsetUnits,
		newsTickerHZRightOffset,
		newsTickerHZRightOffsetUnits,
		newsTickerVRTopOffset,
		newsTickerVRTopOffsetUnits,
		newsTickerVRBottomOffset,
		newsTickerVRBottomOffsetUnits,
		contentType,
		tickerLabel,
		tickerLabelIcon,
		iconSize,
		iconSizeUnits,

		// Label Container Styling
		labelContainerPaddingUnits,
		labelContainerPaddingDesktop,
		labelContainerPaddingTablet,
		labelContainerPaddingMobile,
		labelContainerPaddingLink,

		labelContainerMarginUnits,
		labelContainerMarginDesktop,
		labelContainerMarginTablet,
		labelContainerMarginMobile,
		labelContainerMarginLink,

		labelContainerBorder,
		labelContainerBorderColorSwitcher,
		labelContainerBorderColor,
		labelContainerBorderHoverColor,

		labelContainerBorderUnits,
		labelContainerBorderDesktop,
		labelContainerBorderTablet,
		labelContainerBorderMobile,
		labelContainerBorderLink,

		labelContainerBorderRadiusUnits,
		labelContainerBorderRadiusDesktop,
		labelContainerBorderRadiusTablet,
		labelContainerBorderRadiusMobile,
		labelContainerBorderRadiusLink,

		labelContainerBgColorSwitcher,
		labelContainerNormalBackgroundType,
		labelContainerNormalClassicColor,
		labelContainerNormalGradientColor,
		labelContainerNormalCustomGradientSwitcher,
		labelContainerNormalCustomGradientInputValue,

		labelContainerNormalBackgroundImageUrl,
		labelContainerNormalBackgroundImageAlt,
		labelContainerNormalBackgroundImageID,
		labelContainerNormalBackgroundImagePosition,
		labelContainerNormalBackgroundImageAttachment,
		labelContainerNormalBackgroundImageRepeat,
		labelContainerNormalBackgroundImageSize,

		labelContainerHoverBackgroundType,
		labelContainerHoverClassicColor,
		labelContainerHoverGradientColor,
		labelContainerHoverCustomGradientSwitcher,
		labelContainerHoverCustomGradientInputValue,

		labelContainerHoverBackgroundImageUrl,
		labelContainerHoverBackgroundImageAlt,
		labelContainerHoverBackgroundImageID,
		labelContainerHoverBackgroundImagePosition,
		labelContainerHoverBackgroundImageAttachment,
		labelContainerHoverBackgroundImageRepeat,
		labelContainerHoverBackgroundImageSize,
		labelIconSwitcher,

        // Label Container Padding
        labelIconPaddingUnits,
        labelIconPaddingDesktop,
        labelIconPaddingTablet,
        labelIconPaddingMobile,
        labelIconPaddingLink,

        // Label Container Margin
        labelIconMarginUnits,
        labelIconMarginDesktop,
        labelIconMarginTablet,
        labelIconMarginMobile,
        labelIconMarginLink,

        // Label Container Border
        labelIconBorder,
        labelIconBorderColorSwitcher,
        labelIconBorderColor,
        labelIconBorderHoverColor,
        labelIconBorderUnits,
        labelIconBorderDesktop,
        labelIconBorderTablet,
        labelIconBorderMobile,
        labelIconBorderLink,

        // Label Container Border Radius
        labelIconBorderRadiusUnits,
        labelIconBorderRadiusDesktop,
        labelIconBorderRadiusTablet,
        labelIconBorderRadiusMobile,
        labelIconBorderRadiusLink,

        // Label Container Background Color
        labelIconBgColorSwitcher,
        labelIconNormalBackgroundType,
        labelIconNormalClassicColor,
        labelIconNormalGradientColor,
        labelIconNormalCustomGradientSwitcher,
        labelIconNormalCustomGradientInputValue,
        labelIconNormalBackgroundImageUrl,
        labelIconNormalBackgroundImageAlt,
        labelIconNormalBackgroundImageID,
        labelIconNormalBackgroundImagePosition,
        labelIconNormalBackgroundImageAttachment,
        labelIconNormalBackgroundImageRepeat,
        labelIconNormalBackgroundImageSize,

        labelIconHoverBackgroundType,
        labelIconHoverClassicColor,
        labelIconHoverGradientColor,
        labelIconHoverCustomGradientSwitcher,
        labelIconHoverCustomGradientInputValue,
        labelIconHoverBackgroundImageUrl,
        labelIconHoverBackgroundImageAlt,
        labelIconHoverBackgroundImageID,
        labelIconHoverBackgroundImagePosition,
        labelIconHoverBackgroundImageAttachment,
        labelIconHoverBackgroundImageRepeat,
        labelIconHoverBackgroundImageSize,
        labelIconColorSwitcher,
        labelIconColor,
        labelIconHoverColor,
        tickerLabelTypographyData,
        tickerLabelTypoSwitcher,
        tickerLabelTypoType,
        tickerLabelTypoOption,
        tickerLabelFontFamily,
        tickerLabelFontSize,
        tickerLabelFontSizeUnits,
        tickerLabelFontWeight,
        tickerLabelFontStyle,
        tickerLabelTextTransform,
        tickerLabelTextDecoration,
        tickerLabelLetterSpacing,
        tickerLabelLetterSpacingUnits,
        tickerLabelLineHeight,
        tickerLabelLineHeightUnits,
		// ticker timer
		timerPosition,
		tickerTimerTypographyData,
		tickerTimerTypoSwitcher,
		tickerTimerTypoType,
		tickerTimerTypoOption,
		tickerTimerFontFamily,
		tickerTimerFontSize,
		tickerTimerFontSizeUnits,
		tickerTimerFontWeight,
		tickerTimerFontStyle,
		tickerTimerTextTransform,
		tickerTimerTextDecoration,
		tickerTimerLetterSpacing,
		tickerTimerLetterSpacingUnits,
		tickerTimerLineHeight,
		tickerTimerLineHeightUnits,
		// Padding
		tickerTimerPaddingUnits,
		tickerTimerPaddingDesktop,
		tickerTimerPaddingTablet,
		tickerTimerPaddingMobile,
		tickerTimerPaddingLink,
	
		// Margin
		tickerTimerMarginUnits,
		tickerTimerMarginDesktop,
		tickerTimerMarginTablet,
		tickerTimerMarginMobile,
		tickerTimerMarginLink,
	
		// Border
		tickerTimerBorder,
		tickerTimerBorderColorSwitcher,
		tickerTimerBorderColor,
		tickerTimerBorderHoverColor,
		tickerTimerBorderUnits,
		tickerTimerBorderDesktop,
		tickerTimerBorderTablet,
		tickerTimerBorderMobile,
		tickerTimerBorderLink,
	
		// Border Radius
		tickerTimerBorderRadiusUnits,
		tickerTimerBorderRadiusDesktop,
		tickerTimerBorderRadiusTablet,
		tickerTimerBorderRadiusMobile,
		tickerTimerBorderRadiusLink,
	
		// Background
		tickerTimerBgColorSwitcher,
		tickerTimerNormalBackgroundType,
		tickerTimerNormalClassicColor,
		tickerTimerNormalGradientColor,
		tickerTimerNormalCustomGradientSwitcher,
		tickerTimerNormalCustomGradientInputValue,
		tickerTimerNormalBackgroundImageUrl,
		tickerTimerNormalBackgroundImageAlt,
		tickerTimerNormalBackgroundImageID,
		tickerTimerNormalBackgroundImagePosition,
		tickerTimerNormalBackgroundImageAttachment,
		tickerTimerNormalBackgroundImageRepeat,
		tickerTimerNormalBackgroundImageSize,
		tickerTimerHoverBackgroundType,
		tickerTimerHoverClassicColor,
		tickerTimerHoverGradientColor,
		tickerTimerHoverCustomGradientSwitcher,
		tickerTimerHoverCustomGradientInputValue,
		tickerTimerHoverBackgroundImageUrl,
		tickerTimerHoverBackgroundImageAlt,
		tickerTimerHoverBackgroundImageID,
		tickerTimerHoverBackgroundImagePosition,
		tickerTimerHoverBackgroundImageAttachment,
		tickerTimerHoverBackgroundImageRepeat,
		tickerTimerHoverBackgroundImageSize,
		tickerTimerColorSwitcher,
		tickerTimerColor,
		tickerTimerHoverColor,
		newsTickerPresetStyle,
		labelTextColorSwitcher,
		labelTextColor,
		labelTextHoverColor,
		navigationPosition,
		labelPosition,
		navigationIconColorSwitcher,
		navigationIconColor,
		navigationIconHoverColor,
		showAutoplayButton
	} = attributes;

	const deviceType = useDeviceType();

	const iconHandler = (iconName) => {
		setAttributes({ tickerLabelIcon: iconName });
	};

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (newsTickerGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						newsTickerGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalPaddingMobile: {
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
						newsTickerGlobalPaddingDesktop: {
							...newsTickerGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalPaddingTablet: {
							...newsTickerGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalPaddingMobile: {
							...newsTickerGlobalPaddingMobile,
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
		setAttributes({ newsTickerGlobalPaddingLink: !newsTickerGlobalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			newsTickerGlobalPaddingUnits: {
				...newsTickerGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (newsTickerGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						newsTickerGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalMarginMobile: {
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
						newsTickerGlobalMarginDesktop: {
							...newsTickerGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalMarginTablet: {
							...newsTickerGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalMarginMobile: {
							...newsTickerGlobalMarginMobile,
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
		setAttributes({ newsTickerGlobalMarginLink: !newsTickerGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			newsTickerGlobalMarginUnits: {
				...newsTickerGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (newsTickerGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						newsTickerGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalBorderMobile: {
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
						newsTickerGlobalBorderDesktop: {
							...newsTickerGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalBorderTablet: {
							...newsTickerGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalBorderMobile: {
							...newsTickerGlobalBorderMobile,
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
		setAttributes({ newsTickerGlobalBorderLink: !newsTickerGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			newsTickerGlobalBorderUnits: {
				...newsTickerGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (newsTickerGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						newsTickerGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalBorderRadiusMobile: {
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
						newsTickerGlobalBorderRadiusDesktop: {
							...newsTickerGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						newsTickerGlobalBorderRadiusTablet: {
							...newsTickerGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						newsTickerGlobalBorderRadiusMobile: {
							...newsTickerGlobalBorderRadiusMobile,
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
			newsTickerGlobalBorderRadiusLink: !newsTickerGlobalBorderRadiusLink,
		});
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			newsTickerGlobalBorderRadiusUnits: {
				...newsTickerGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Global border */
	/** End Global Border Radius */
	/** End Border Radius */

	/** Start Label Container Padding */
	const handleLabelContainerPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelContainerPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelContainerPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerPaddingMobile: {
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
						labelContainerPaddingDesktop: {
							...labelContainerPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerPaddingTablet: {
							...labelContainerPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerPaddingMobile: {
							...labelContainerPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleLabelContainerPaddingCombineBtn = () => {
		setAttributes({ labelContainerPaddingLink: !labelContainerPaddingLink });
	};

	const handleLabelContainerPaddingUnitsHandler = (unit) => {
		setAttributes({
			labelContainerPaddingUnits: {
				...labelContainerPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Label Container Padding */

	/** Start Label Container Margin */
	const handleLabelContainerMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelContainerMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelContainerMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerMarginMobile: {
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
						labelContainerMarginDesktop: {
							...labelContainerMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerMarginTablet: {
							...labelContainerMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerMarginMobile: {
							...labelContainerMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleLabelContainerMarginCombineBtn = () => {
		setAttributes({ labelContainerMarginLink: !labelContainerMarginLink });
	};

	const handleLabelContainerMarginUnitsHandler = (unit) => {
		setAttributes({
			labelContainerMarginUnits: {
				...labelContainerMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Label Container Margin */

	/** Start Label Container border */
	const handleLabelContainerBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelContainerBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelContainerBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerBorderMobile: {
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
						labelContainerBorderDesktop: {
							...labelContainerBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerBorderTablet: {
							...labelContainerBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerBorderMobile: {
							...labelContainerBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleLabelContainerBorderCombineBtn = () => {
		setAttributes({ labelContainerBorderLink: !labelContainerBorderLink });
	};

	const handleLabelContainerBorderUnitsHandler = (unit) => {
		setAttributes({
			labelContainerBorderUnits: {
				...labelContainerBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Label Container Border */

	/** Start Label Container border radius*/
	const handleLabelContainerBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelContainerBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelContainerBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerBorderRadiusMobile: {
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
						labelContainerBorderRadiusDesktop: {
							...labelContainerBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelContainerBorderRadiusTablet: {
							...labelContainerBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelContainerBorderRadiusMobile: {
							...labelContainerBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handleLabelContainerBorderRadiusCombineBtn = () => {
		setAttributes({
			labelContainerBorderRadiusLink: !labelContainerBorderRadiusLink,
		});
	};

	const handleLabelContainerBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			labelContainerBorderRadiusUnits: {
				...labelContainerBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Label Container border */
	/** End Label Container Border Radius */
	/** End Label Container Border Radius */

    /** Start Label Container Padding */
	const handlelabelIconPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelIconPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconPaddingMobile: {
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
						labelIconPaddingDesktop: {
							...labelIconPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconPaddingTablet: {
							...labelIconPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconPaddingMobile: {
							...labelIconPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlelabelIconPaddingCombineBtn = () => {
		setAttributes({ labelIconPaddingLink: !labelIconPaddingLink });
	};

	const handlelabelIconPaddingUnitsHandler = (unit) => {
		setAttributes({
			labelIconPaddingUnits: {
				...labelIconPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Label Container Padding */

	/** Start Label Container Margin */
	const handlelabelIconMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelIconMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconMarginMobile: {
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
						labelIconMarginDesktop: {
							...labelIconMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconMarginTablet: {
							...labelIconMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconMarginMobile: {
							...labelIconMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlelabelIconMarginCombineBtn = () => {
		setAttributes({ labelIconMarginLink: !labelIconMarginLink });
	};

	const handlelabelIconMarginUnitsHandler = (unit) => {
		setAttributes({
			labelIconMarginUnits: {
				...labelIconMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Label Container Margin */

	/** Start Label Container border */
	const handlelabelIconBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelIconBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconBorderMobile: {
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
						labelIconBorderDesktop: {
							...labelIconBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconBorderTablet: {
							...labelIconBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconBorderMobile: {
							...labelIconBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlelabelIconBorderCombineBtn = () => {
		setAttributes({ labelIconBorderLink: !labelIconBorderLink });
	};

	const handlelabelIconBorderUnitsHandler = (unit) => {
		setAttributes({
			labelIconBorderUnits: {
				...labelIconBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Label Container Border */

	/** Start Label Container border radius*/
	const handlelabelIconBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (labelIconBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						labelIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconBorderRadiusMobile: {
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
						labelIconBorderRadiusDesktop: {
							...labelIconBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						labelIconBorderRadiusTablet: {
							...labelIconBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						labelIconBorderRadiusMobile: {
							...labelIconBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handlelabelIconBorderRadiusCombineBtn = () => {
		setAttributes({
			labelIconBorderRadiusLink: !labelIconBorderRadiusLink,
		});
	};

	const handlelabelIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			labelIconBorderRadiusUnits: {
				...labelIconBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Label Container border */
	/** End Label Container Border Radius */
	/** End Label Container Border Radius */

	/** Start Ticker Timer Padding */
	const handletickerTimerPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (tickerTimerPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						tickerTimerPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerPaddingMobile: {
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
						tickerTimerPaddingDesktop: {
							...tickerTimerPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerPaddingTablet: {
							...tickerTimerPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerPaddingMobile: {
							...tickerTimerPaddingMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handletickerTimerPaddingCombineBtn = () => {
		setAttributes({ tickerTimerPaddingLink: !tickerTimerPaddingLink });
	};

	const handletickerTimerPaddingUnitsHandler = (unit) => {
		setAttributes({
			tickerTimerPaddingUnits: {
				...tickerTimerPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Ticker Timer Padding */

	/** Start Ticker Timer Margin */
	const handletickerTimerMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (tickerTimerMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						tickerTimerMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerMarginMobile: {
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
						tickerTimerMarginDesktop: {
							...tickerTimerMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerMarginTablet: {
							...tickerTimerMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerMarginMobile: {
							...tickerTimerMarginMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handletickerTimerMarginCombineBtn = () => {
		setAttributes({ tickerTimerMarginLink: !tickerTimerMarginLink });
	};

	const handletickerTimerMarginUnitsHandler = (unit) => {
		setAttributes({
			tickerTimerMarginUnits: {
				...tickerTimerMarginUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Ticker Timer Margin */

	/** Start Ticker Timer border */
	const handletickerTimerBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (tickerTimerBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						tickerTimerBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerBorderMobile: {
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
						tickerTimerBorderDesktop: {
							...tickerTimerBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerBorderTablet: {
							...tickerTimerBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerBorderMobile: {
							...tickerTimerBorderMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handletickerTimerBorderCombineBtn = () => {
		setAttributes({ tickerTimerBorderLink: !tickerTimerBorderLink });
	};

	const handletickerTimerBorderUnitsHandler = (unit) => {
		setAttributes({
			tickerTimerBorderUnits: {
				...tickerTimerBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Ticker Timer Border */

	/** Start Ticker Timer border radius*/
	const handletickerTimerBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (tickerTimerBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						tickerTimerBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerBorderRadiusMobile: {
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
						tickerTimerBorderRadiusDesktop: {
							...tickerTimerBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						tickerTimerBorderRadiusTablet: {
							...tickerTimerBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						tickerTimerBorderRadiusMobile: {
							...tickerTimerBorderRadiusMobile,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const handletickerTimerBorderRadiusCombineBtn = () => {
		setAttributes({
			tickerTimerBorderRadiusLink: !tickerTimerBorderRadiusLink,
		});
	};

	const handletickerTimerBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			tickerTimerBorderRadiusUnits: {
				...tickerTimerBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Ticker Timer border */
	/** End Ticker Timer Border Radius */
	/** End Ticker Timer Border Radius */

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-presets-wrapper">
				<PanelBody
					title={__("Presets", "frontis-block")}
					initialOpen={true}
				>
					<FB_Presets
						className="fb-news-ticker-presets"
						label={__('Select Preset', 'frontis-blocks')}
						presets={newsTickerPresets}
						value = {newsTickerPresetStyle}
						onChangeValue = 'newsTickerPresetStyle'
						defaultPresetValue="preset-1"
						setAttributes={setAttributes}
					/>
				</PanelBody>
			</div>
			<PanelBody title={__("Settings", "frontis-blocks")} initialOpen={true}>
				<ToggleControl
					label={__("Show Navigation", "frontis-blocks")}
					checked={showArrows}
					onChange={(value) => setAttributes({ showArrows: value })}
				/>
				<ToggleControl
					label={__("Show Time", "frontis-blocks")}
					checked={showTime}
					onChange={(value) => setAttributes({ showTime: value })}
				/>
				{showArrows && (
					<ToggleControl
						label={__("Show Auto Play Button", "frontis-blocks")}
						checked={showAutoplayButton}
						onChange={(value) => setAttributes({ showAutoplayButton: value })}
					/>
				)}
				
				{showArrows && (
					<SelectControl
						label={__("Navigation Position", "frontis-block")}
						value={navigationPosition}
						options={NAVIGATION_POSITION}
						onChange={(value) => setAttributes({ navigationPosition: value })}
					/>
				)}

				{showTime && (
					<SelectControl
						label={__("Time Position", "frontis-block")}
						value={timerPosition}
						options={TIMER_POSITION}
						onChange={(value) => setAttributes({ timerPosition: value })}
					/>
				)}
				
			</PanelBody>
			<PanelBody title={__("Label", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Content Type", "frontis-block")}
					value={contentType}
					options={CONTENT_TYPE}
					onChange={(value) => setAttributes({ contentType: value })}
				/>

				<SelectControl
					label={__("Label Position", "frontis-block")}
					value={labelPosition}
					options={LABEL_POSITION}
					onChange={(value) => setAttributes({ labelPosition: value })}
				/>

				<TextControl
					label={__("Label", "frontis-block")}
					value={tickerLabel}
					onChange={(value) => setAttributes({ tickerLabel: value })}
					className="fb-setting-text"
				/>

				<ToggleControl
					label={__("Show Icon", "frontis-block")}
					checked={labelIconSwitcher}
					onChange={(value) => setAttributes({ labelIconSwitcher: value })}
				/>
				{labelIconSwitcher && (
					<>
						<div className="fb-icon-picker-wrapper">
							<FBIconPicker
								value={tickerLabelIcon}
								setIconHandler={iconHandler}
							/>
						</div>

						<BaseControl
							label={__("Icon Position", "frontis-blocks")}
							id="fb-setting-text-alignment"
							className="fb-setting-text-alignment"
						>
							<ButtonGroup className="fb-setting-text-alignment-group-btn">
								{TEXT_ALIGN.map((item, key) => (
									<Button
										key={key}
										onClick={() =>
											setAttributes({ newsTickerIconAlignment: item.value })
										}
										className={`fb-setting-text-alignment-single-btn ${
											newsTickerIconAlignment === item.value ? "active" : ""
										}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
					</>
				)}
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Label", "frontis-blocks")}
				initialOpen={true}
				className="fb-setting-layout-header"
			>
                <FB_TypographyControl
					globalTypoControlActive={true}
					globalTypoSwitcher={tickerLabelTypoSwitcher}
					storeGlobalTypographyData={(value) => setAttributes({ tickerLabelTypographyData: value })}

					globalTypoType={tickerLabelTypoType}
					onChangeGlobalTypoType={(value) => {
						setAttributes({
							tickerLabelTypoType: value,
							tickerLabelTypoSwitcher: value === 'default' ? { ...tickerLabelTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...tickerLabelTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
						})
					}}

					globalTypoOption={tickerLabelTypoOption}
					onChangeGlobalTypoOption={(value) => setAttributes({ tickerLabelTypoOption: value })}

					fontFamily={tickerLabelFontFamily}
					onChangeFontFamily={(value) => setAttributes({ tickerLabelFontFamily: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, fontFamily: value && false } })}

					fontSize={tickerLabelFontSize}
					onChangeFontSize={(value) => setAttributes({ tickerLabelFontSize: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, fontSize: value && false } })}

					fontSizeUnits={tickerLabelFontSizeUnits}
					onChangeFontSizeUnit={(value) => setAttributes({ tickerLabelFontSizeUnits: value })}

					fontWeight={tickerLabelFontWeight}
					onChangeFontWeight={(value) => setAttributes({ tickerLabelFontWeight: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, fontWeight: value && false } })}

					fontStyle={tickerLabelFontStyle}
					onChangeFontStyle={(value) => setAttributes({ tickerLabelFontStyle: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, fontStyle: value && false } })}

					textTransform={tickerLabelTextTransform}
					onChangeTextTransform={(value) => setAttributes({ tickerLabelTextTransform: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, textTransform: value && false } })}

					textDecoration={tickerLabelTextDecoration}
					onChangeTextDecoration={(value) => setAttributes({ tickerLabelTextDecoration: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, textDecoration: value && false } })}

					letterSpacing={tickerLabelLetterSpacing}
					onChangeLetterSpacing={(value) => setAttributes({ tickerLabelLetterSpacing: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, letterSpacing: value && false } })}

					letterSpacingUnits={tickerLabelLetterSpacingUnits}
					onChangeLetterSpacingUnit={(value) => setAttributes({ tickerLabelLetterSpacingUnits: value })}

					lineHeight={tickerLabelLineHeight}
					onChangeLineHeight={(value) => setAttributes({ tickerLabelLineHeight: value, tickerLabelTypoSwitcher: { ...tickerLabelTypoSwitcher, lineHeight: value && false } })}

					lineHeightUnits={tickerLabelLineHeightUnits}
					onChangeLineHeightUnit={(value) => setAttributes({ tickerLabelLineHeightUnits: value })}

					deviceType={deviceType}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Color", "frontis-blocks")}
					globalSwitcher={labelTextColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ labelTextColorSwitcher: value })
					}
				/>

				{labelTextColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Color", "frontis-blocks")}
						globalColor={labelTextColor}
						setGlobalColor={(value) =>
							setAttributes({
								labelTextColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{labelTextColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={labelTextHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								labelTextHoverColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleLabelContainerPaddingUnitsHandler}
					spacingUnits={labelContainerPaddingUnits}
					spacingDesktop={labelContainerPaddingDesktop}
					spacingTablet={labelContainerPaddingTablet}
					spacingMobile={labelContainerPaddingMobile}
					handleSpacingUnitHandler={handleLabelContainerPaddingUnitChange}
					spacingCombineBtn={labelContainerPaddingLink}
					spacingCombineBtnHandler={handleLabelContainerPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleLabelContainerMarginUnitsHandler}
					spacingUnits={labelContainerMarginUnits}
					spacingDesktop={labelContainerMarginDesktop}
					spacingTablet={labelContainerMarginTablet}
					spacingMobile={labelContainerMarginMobile}
					handleSpacingUnitHandler={handleLabelContainerMarginUnitChange}
					spacingCombineBtn={labelContainerMarginLink}
					spacingCombineBtnHandler={handleLabelContainerMarginCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_BackgroundColorControl
					bgColorSwitcher={labelContainerBgColorSwitcher}
					setBgColorSwitcher={(value) =>
						setAttributes({ labelContainerBgColorSwitcher: value })
					}
					normalBackgroundType={labelContainerNormalBackgroundType}
					setNormalBackgroundType={(value) =>
						setAttributes({ labelContainerNormalBackgroundType: value })
					}
					normalClassicColor={labelContainerNormalClassicColor}
					setNormalClassicColor={(value) =>
						setAttributes({
							labelContainerNormalClassicColor:
								value === undefined ? "" : value,
						})
					}
					normalGradientColor={labelContainerNormalGradientColor}
					setNormalGradientColor={(value) =>
						setAttributes({
							labelContainerNormalGradientColor:
								value === undefined ? null : value,
						})
					}
					normalCustomGradientSwitcher={
						labelContainerNormalCustomGradientSwitcher
					}
					setNormalCustomGradientSwitcher={(value) =>
						setAttributes({ labelContainerNormalCustomGradientSwitcher: value })
					}
					normalCustomGradientInputValue={
						labelContainerNormalCustomGradientInputValue
					}
					setNormalCustomGradientInputValue={(value) =>
						setAttributes({
							labelContainerNormalCustomGradientInputValue: value,
						})
					}
					normalBackgroundImageUrl={labelContainerNormalBackgroundImageUrl}
					setNormalBackgroundImageUrl={(value) =>
						setAttributes({ labelContainerNormalBackgroundImageUrl: value })
					}
					normalBackgroundImageAlt={labelContainerNormalBackgroundImageAlt}
					setNormalBackgroundImageAlt={(value) =>
						setAttributes({ labelContainerNormalBackgroundImageAlt: value })
					}
					normalBackgroundImageID={labelContainerNormalBackgroundImageID}
					setNormalBackgroundImageID={(value) =>
						setAttributes({ labelContainerNormalBackgroundImageID: value })
					}
					normalBackgroundImagePosition={
						labelContainerNormalBackgroundImagePosition
					}
					setNormalBackgroundImagePosition={(value) =>
						setAttributes({
							labelContainerNormalBackgroundImagePosition: value,
						})
					}
					normalBackgroundImageAttachment={
						labelContainerNormalBackgroundImageAttachment
					}
					setNormalBackgroundImageAttachment={(value) =>
						setAttributes({
							labelContainerNormalBackgroundImageAttachment: value,
						})
					}
					normalBackgroundImageRepeat={
						labelContainerNormalBackgroundImageRepeat
					}
					setNormalBackgroundImageRepeat={(value) =>
						setAttributes({ labelContainerNormalBackgroundImageRepeat: value })
					}
					normalBackgroundImageSize={labelContainerNormalBackgroundImageSize}
					setNormalBackgroundImageSize={(value) =>
						setAttributes({ labelContainerNormalBackgroundImageSize: value })
					}
					hoverBackgroundType={labelContainerHoverBackgroundType}
					setHoverBackgroundType={(value) =>
						setAttributes({ labelContainerHoverBackgroundType: value })
					}
					hoverClassicColor={labelContainerHoverClassicColor}
					setHoverClassicColor={(value) =>
						setAttributes({
							labelContainerHoverClassicColor: value === undefined ? "" : value,
						})
					}
					hoverGradientColor={labelContainerHoverGradientColor}
					setHoverGradientColor={(value) =>
						setAttributes({
							labelContainerHoverGradientColor:
								value === undefined ? null : value,
						})
					}
					hoverCustomGradientSwitcher={
						labelContainerHoverCustomGradientSwitcher
					}
					setHoverCustomGradientSwitcher={(value) =>
						setAttributes({ labelContainerHoverCustomGradientSwitcher: value })
					}
					hoverCustomGradientInputValue={
						labelContainerHoverCustomGradientInputValue
					}
					setHoverCustomGradientInputValue={(value) =>
						setAttributes({
							labelContainerHoverCustomGradientInputValue: value,
						})
					}
					hoverBackgroundImageUrl={labelContainerHoverBackgroundImageUrl}
					setHoverBackgroundImageUrl={(value) =>
						setAttributes({ labelContainerHoverBackgroundImageUrl: value })
					}
					hoverBackgroundImageAlt={labelContainerHoverBackgroundImageAlt}
					setHoverBackgroundImageAlt={(value) =>
						setAttributes({ labelContainerHoverBackgroundImageAlt: value })
					}
					hoverBackgroundImageID={labelContainerHoverBackgroundImageID}
					setHoverBackgroundImageID={(value) =>
						setAttributes({ labelContainerHoverBackgroundImageID: value })
					}
					hoverBackgroundImagePosition={
						labelContainerHoverBackgroundImagePosition
					}
					setHoverBackgroundImagePosition={(value) =>
						setAttributes({ labelContainerHoverBackgroundImagePosition: value })
					}
					hoverBackgroundImageAttachment={
						labelContainerHoverBackgroundImageAttachment
					}
					setHoverBackgroundImageAttachment={(value) =>
						setAttributes({
							labelContainerHoverBackgroundImageAttachment: value,
						})
					}
					hoverBackgroundImageRepeat={labelContainerHoverBackgroundImageRepeat}
					setHoverBackgroundImageRepeat={(value) =>
						setAttributes({ labelContainerHoverBackgroundImageRepeat: value })
					}
					hoverBackgroundImageSize={labelContainerHoverBackgroundImageSize}
					setHoverBackgroundImageSize={(value) =>
						setAttributes({ labelContainerHoverBackgroundImageSize: value })
					}
				/>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={labelContainerBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ labelContainerBorder: value })}
				/>

				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={labelContainerBorderColorSwitcher}
					setGlobalSwitcher={(value) =>
						setAttributes({ labelContainerBorderColorSwitcher: value })
					}
				/>

				{labelContainerBorderColorSwitcher === "normal" && (
					<FB_ColorControl
						label={__("Color", "frontis-blocks")}
						globalColor={labelContainerBorderColor}
						setGlobalColor={(value) =>
							setAttributes({
								labelContainerBorderColor: value === undefined ? "" : value,
							})
						}
					/>
				)}

				{labelContainerBorderColorSwitcher === "hover" && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={labelContainerBorderHoverColor}
						setGlobalColor={(value) =>
							setAttributes({
								labelContainerBorderHoverColor:
									value === undefined ? "" : value,
							})
						}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleLabelContainerBorderUnitsHandler}
					spacingUnits={labelContainerBorderUnits}
					spacingDesktop={labelContainerBorderDesktop}
					spacingTablet={labelContainerBorderTablet}
					spacingMobile={labelContainerBorderMobile}
					handleSpacingUnitHandler={handleLabelContainerBorderUnitChange}
					spacingCombineBtn={labelContainerBorderLink}
					spacingCombineBtnHandler={handleLabelContainerBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleLabelContainerBorderRadiusUnitsHandler}
					spacingUnits={labelContainerBorderRadiusUnits}
					spacingDesktop={labelContainerBorderRadiusDesktop}
					spacingTablet={labelContainerBorderRadiusTablet}
					spacingMobile={labelContainerBorderRadiusMobile}
					handleSpacingUnitHandler={handleLabelContainerBorderRadiusUnitChange}
					spacingCombineBtn={labelContainerBorderRadiusLink}
					spacingCombineBtnHandler={handleLabelContainerBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>
            {labelIconSwitcher &&(
                <PanelBody
				title={__("Label Icon", "frontis-blocks")}
				initialOpen={true}
				className="fb-setting-layout-header"
                >
                    <FB_Range
                        min={0}
                        max={iconSizeUnits === "%" ? 100 : 1000}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={iconSize}
                        onChangeHandler={(value) => setAttributes({ iconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ iconSizeUnits: value })}
                        deviceType={deviceType}
                        units={iconSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />
                    <FB_SwitcherControl
                        label={__("Icon Color", "frontis-blocks")}
                        globalSwitcher={labelIconColorSwitcher}
                        setGlobalSwitcher={(value) =>
                            setAttributes({ labelIconColorSwitcher: value })
                        }
                    />

                    {labelIconColorSwitcher === "normal" && (
                        <FB_ColorControl
                            label={__("Color", "frontis-blocks")}
                            globalColor={labelIconColor}
                            setGlobalColor={(value) =>
                                setAttributes({
                                    labelIconColor: value === undefined ? "" : value,
                                })
                            }
                        />
                    )}

                    {labelIconColorSwitcher === "hover" && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={labelIconHoverColor}
                            setGlobalColor={(value) =>
                                setAttributes({
                                    labelIconHoverColor:
                                        value === undefined ? "" : value,
                                })
                            }
                        />
                    )}

                    <FB_Spacing
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlelabelIconPaddingUnitsHandler}
                        spacingUnits={labelIconPaddingUnits}
                        spacingDesktop={labelIconPaddingDesktop}
                        spacingTablet={labelIconPaddingTablet}
                        spacingMobile={labelIconPaddingMobile}
                        handleSpacingUnitHandler={handlelabelIconPaddingUnitChange}
                        spacingCombineBtn={labelIconPaddingLink}
                        spacingCombineBtnHandler={handlelabelIconPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlelabelIconMarginUnitsHandler}
                        spacingUnits={labelIconMarginUnits}
                        spacingDesktop={labelIconMarginDesktop}
                        spacingTablet={labelIconMarginTablet}
                        spacingMobile={labelIconMarginMobile}
                        handleSpacingUnitHandler={handlelabelIconMarginUnitChange}
                        spacingCombineBtn={labelIconMarginLink}
                        spacingCombineBtnHandler={handlelabelIconMarginCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_BackgroundColorControl
                        bgColorSwitcher={labelIconBgColorSwitcher}
                        setBgColorSwitcher={(value) =>
                            setAttributes({ labelIconBgColorSwitcher: value })
                        }
                        normalBackgroundType={labelIconNormalBackgroundType}
                        setNormalBackgroundType={(value) =>
                            setAttributes({ labelIconNormalBackgroundType: value })
                        }
                        normalClassicColor={labelIconNormalClassicColor}
                        setNormalClassicColor={(value) =>
                            setAttributes({
                                labelIconNormalClassicColor:
                                    value === undefined ? "" : value,
                            })
                        }
                        normalGradientColor={labelIconNormalGradientColor}
                        setNormalGradientColor={(value) =>
                            setAttributes({
                                labelIconNormalGradientColor:
                                    value === undefined ? null : value,
                            })
                        }
                        normalCustomGradientSwitcher={
                            labelIconNormalCustomGradientSwitcher
                        }
                        setNormalCustomGradientSwitcher={(value) =>
                            setAttributes({ labelIconNormalCustomGradientSwitcher: value })
                        }
                        normalCustomGradientInputValue={
                            labelIconNormalCustomGradientInputValue
                        }
                        setNormalCustomGradientInputValue={(value) =>
                            setAttributes({
                                labelIconNormalCustomGradientInputValue: value,
                            })
                        }
                        normalBackgroundImageUrl={labelIconNormalBackgroundImageUrl}
                        setNormalBackgroundImageUrl={(value) =>
                            setAttributes({ labelIconNormalBackgroundImageUrl: value })
                        }
                        normalBackgroundImageAlt={labelIconNormalBackgroundImageAlt}
                        setNormalBackgroundImageAlt={(value) =>
                            setAttributes({ labelIconNormalBackgroundImageAlt: value })
                        }
                        normalBackgroundImageID={labelIconNormalBackgroundImageID}
                        setNormalBackgroundImageID={(value) =>
                            setAttributes({ labelIconNormalBackgroundImageID: value })
                        }
                        normalBackgroundImagePosition={
                            labelIconNormalBackgroundImagePosition
                        }
                        setNormalBackgroundImagePosition={(value) =>
                            setAttributes({
                                labelIconNormalBackgroundImagePosition: value,
                            })
                        }
                        normalBackgroundImageAttachment={
                            labelIconNormalBackgroundImageAttachment
                        }
                        setNormalBackgroundImageAttachment={(value) =>
                            setAttributes({
                                labelIconNormalBackgroundImageAttachment: value,
                            })
                        }
                        normalBackgroundImageRepeat={
                            labelIconNormalBackgroundImageRepeat
                        }
                        setNormalBackgroundImageRepeat={(value) =>
                            setAttributes({ labelIconNormalBackgroundImageRepeat: value })
                        }
                        normalBackgroundImageSize={labelIconNormalBackgroundImageSize}
                        setNormalBackgroundImageSize={(value) =>
                            setAttributes({ labelIconNormalBackgroundImageSize: value })
                        }
                        hoverBackgroundType={labelIconHoverBackgroundType}
                        setHoverBackgroundType={(value) =>
                            setAttributes({ labelIconHoverBackgroundType: value })
                        }
                        hoverClassicColor={labelIconHoverClassicColor}
                        setHoverClassicColor={(value) =>
                            setAttributes({
                                labelIconHoverClassicColor: value === undefined ? "" : value,
                            })
                        }
                        hoverGradientColor={labelIconHoverGradientColor}
                        setHoverGradientColor={(value) =>
                            setAttributes({
                                labelIconHoverGradientColor:
                                    value === undefined ? null : value,
                            })
                        }
                        hoverCustomGradientSwitcher={
                            labelIconHoverCustomGradientSwitcher
                        }
                        setHoverCustomGradientSwitcher={(value) =>
                            setAttributes({ labelIconHoverCustomGradientSwitcher: value })
                        }
                        hoverCustomGradientInputValue={
                            labelIconHoverCustomGradientInputValue
                        }
                        setHoverCustomGradientInputValue={(value) =>
                            setAttributes({
                                labelIconHoverCustomGradientInputValue: value,
                            })
                        }
                        hoverBackgroundImageUrl={labelIconHoverBackgroundImageUrl}
                        setHoverBackgroundImageUrl={(value) =>
                            setAttributes({ labelIconHoverBackgroundImageUrl: value })
                        }
                        hoverBackgroundImageAlt={labelIconHoverBackgroundImageAlt}
                        setHoverBackgroundImageAlt={(value) =>
                            setAttributes({ labelIconHoverBackgroundImageAlt: value })
                        }
                        hoverBackgroundImageID={labelIconHoverBackgroundImageID}
                        setHoverBackgroundImageID={(value) =>
                            setAttributes({ labelIconHoverBackgroundImageID: value })
                        }
                        hoverBackgroundImagePosition={
                            labelIconHoverBackgroundImagePosition
                        }
                        setHoverBackgroundImagePosition={(value) =>
                            setAttributes({ labelIconHoverBackgroundImagePosition: value })
                        }
                        hoverBackgroundImageAttachment={
                            labelIconHoverBackgroundImageAttachment
                        }
                        setHoverBackgroundImageAttachment={(value) =>
                            setAttributes({
                                labelIconHoverBackgroundImageAttachment: value,
                            })
                        }
                        hoverBackgroundImageRepeat={labelIconHoverBackgroundImageRepeat}
                        setHoverBackgroundImageRepeat={(value) =>
                            setAttributes({ labelIconHoverBackgroundImageRepeat: value })
                        }
                        hoverBackgroundImageSize={labelIconHoverBackgroundImageSize}
                        setHoverBackgroundImageSize={(value) =>
                            setAttributes({ labelIconHoverBackgroundImageSize: value })
                        }
                    />
                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={labelIconBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ labelIconBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={labelIconBorderColorSwitcher}
                        setGlobalSwitcher={(value) =>
                            setAttributes({ labelIconBorderColorSwitcher: value })
                        }
                    />

                    {labelIconBorderColorSwitcher === "normal" && (
                        <FB_ColorControl
                            label={__("Color", "frontis-blocks")}
                            globalColor={labelIconBorderColor}
                            setGlobalColor={(value) =>
                                setAttributes({
                                    labelIconBorderColor: value === undefined ? "" : value,
                                })
                            }
                        />
                    )}

                    {labelIconBorderColorSwitcher === "hover" && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={labelIconBorderHoverColor}
                            setGlobalColor={(value) =>
                                setAttributes({
                                    labelIconBorderHoverColor:
                                        value === undefined ? "" : value,
                                })
                            }
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlelabelIconBorderUnitsHandler}
                        spacingUnits={labelIconBorderUnits}
                        spacingDesktop={labelIconBorderDesktop}
                        spacingTablet={labelIconBorderTablet}
                        spacingMobile={labelIconBorderMobile}
                        handleSpacingUnitHandler={handlelabelIconBorderUnitChange}
                        spacingCombineBtn={labelIconBorderLink}
                        spacingCombineBtnHandler={handlelabelIconBorderCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handlelabelIconBorderRadiusUnitsHandler}
                        spacingUnits={labelIconBorderRadiusUnits}
                        spacingDesktop={labelIconBorderRadiusDesktop}
                        spacingTablet={labelIconBorderRadiusTablet}
                        spacingMobile={labelIconBorderRadiusMobile}
                        handleSpacingUnitHandler={handlelabelIconBorderRadiusUnitChange}
                        spacingCombineBtn={labelIconBorderRadiusLink}
                        spacingCombineBtnHandler={handlelabelIconBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
            )}
			{showArrows &&(
				<PanelBody
				title={__("Navigation Icon", "frontis-blocks")}
				initialOpen={true}
				className="fb-setting-layout-header"
                >
                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={navigationIconColorSwitcher}
                        setGlobalSwitcher={(value) =>
                            setAttributes({ navigationIconColorSwitcher: value })
                        }
                    />

                    {navigationIconColorSwitcher === "normal" && (
                        <FB_ColorControl
                            label={__("Color", "frontis-blocks")}
                            globalColor={navigationIconColor}
                            setGlobalColor={(value) =>
                                setAttributes({
                                    navigationIconColor: value === undefined ? "" : value,
                                })
                            }
                        />
                    )}

                    {navigationIconColorSwitcher === "hover" && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={navigationIconHoverColor}
                            setGlobalColor={(value) =>
                                setAttributes({
                                    navigationIconHoverColor:
                                        value === undefined ? "" : value,
                                })
                            }
                        />
                    )}
                </PanelBody>
			)}
			{showTime &&(
				<PanelBody
				title={__("Time", "frontis-blocks")}
				initialOpen={true}
				className="fb-setting-layout-header"
				>

					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={tickerTimerTypoSwitcher}
						storeGlobalTypographyData={(value) => setAttributes({ tickerTimerTypographyData: value })}

						globalTypoType={tickerTimerTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								tickerTimerTypoType: value,
								tickerTimerTypoSwitcher: value === 'default' ? { ...tickerTimerTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...tickerTimerTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
							})
						}}

						globalTypoOption={tickerTimerTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ tickerTimerTypoOption: value })}

						fontFamily={tickerTimerFontFamily}
						onChangeFontFamily={(value) => setAttributes({ tickerTimerFontFamily: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, fontFamily: value && false } })}

						fontSize={tickerTimerFontSize}
						onChangeFontSize={(value) => setAttributes({ tickerTimerFontSize: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, fontSize: value && false } })}

						fontSizeUnits={tickerTimerFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ tickerTimerFontSizeUnits: value })}

						fontWeight={tickerTimerFontWeight}
						onChangeFontWeight={(value) => setAttributes({ tickerTimerFontWeight: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, fontWeight: value && false } })}

						fontStyle={tickerTimerFontStyle}
						onChangeFontStyle={(value) => setAttributes({ tickerTimerFontStyle: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, fontStyle: value && false } })}

						textTransform={tickerTimerTextTransform}
						onChangeTextTransform={(value) => setAttributes({ tickerTimerTextTransform: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, textTransform: value && false } })}

						textDecoration={tickerTimerTextDecoration}
						onChangeTextDecoration={(value) => setAttributes({ tickerTimerTextDecoration: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, textDecoration: value && false } })}

						letterSpacing={tickerTimerLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ tickerTimerLetterSpacing: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, letterSpacing: value && false } })}

						letterSpacingUnits={tickerTimerLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ tickerTimerLetterSpacingUnits: value })}

						lineHeight={tickerTimerLineHeight}
						onChangeLineHeight={(value) => setAttributes({ tickerTimerLineHeight: value, tickerTimerTypoSwitcher: { ...tickerTimerTypoSwitcher, lineHeight: value && false } })}

						lineHeightUnits={tickerTimerLineHeightUnits}
						onChangeLineHeightUnit={(value) => setAttributes({ tickerTimerLineHeightUnits: value })}

						deviceType={deviceType}
						setAttributes={setAttributes}
					/>

					<FB_SwitcherControl
						label={__("Text Color", "frontis-blocks")}
						globalSwitcher={tickerTimerColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ tickerTimerColorSwitcher: value })
						}
					/>

					{tickerTimerColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Color", "frontis-blocks")}
							globalColor={tickerTimerColor}
							setGlobalColor={(value) =>
								setAttributes({
									tickerTimerColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{tickerTimerColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={tickerTimerHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									tickerTimerHoverColor:
										value === undefined ? "" : value,
								})
							}
						/>
					)}
					
					<FB_Spacing
						label={__("Padding", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handletickerTimerPaddingUnitsHandler}
						spacingUnits={tickerTimerPaddingUnits}
						spacingDesktop={tickerTimerPaddingDesktop}
						spacingTablet={tickerTimerPaddingTablet}
						spacingMobile={tickerTimerPaddingMobile}
						handleSpacingUnitHandler={handletickerTimerPaddingUnitChange}
						spacingCombineBtn={tickerTimerPaddingLink}
						spacingCombineBtnHandler={handletickerTimerPaddingCombineBtn}
						setAttributes={setAttributes}
					/>
					<FB_Spacing
						label={__("Margin", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handletickerTimerMarginUnitsHandler}
						spacingUnits={tickerTimerMarginUnits}
						spacingDesktop={tickerTimerMarginDesktop}
						spacingTablet={tickerTimerMarginTablet}
						spacingMobile={tickerTimerMarginMobile}
						handleSpacingUnitHandler={handletickerTimerMarginUnitChange}
						spacingCombineBtn={tickerTimerMarginLink}
						spacingCombineBtnHandler={handletickerTimerMarginCombineBtn}
						setAttributes={setAttributes}
					/>
					<FB_BackgroundColorControl
						bgColorSwitcher={tickerTimerBgColorSwitcher}
						setBgColorSwitcher={(value) =>
							setAttributes({ tickerTimerBgColorSwitcher: value })
						}
						normalBackgroundType={tickerTimerNormalBackgroundType}
						setNormalBackgroundType={(value) =>
							setAttributes({ tickerTimerNormalBackgroundType: value })
						}
						normalClassicColor={tickerTimerNormalClassicColor}
						setNormalClassicColor={(value) =>
							setAttributes({
								tickerTimerNormalClassicColor:
									value === undefined ? "" : value,
							})
						}
						normalGradientColor={tickerTimerNormalGradientColor}
						setNormalGradientColor={(value) =>
							setAttributes({
								tickerTimerNormalGradientColor:
									value === undefined ? null : value,
							})
						}
						normalCustomGradientSwitcher={
							tickerTimerNormalCustomGradientSwitcher
						}
						setNormalCustomGradientSwitcher={(value) =>
							setAttributes({ tickerTimerNormalCustomGradientSwitcher: value })
						}
						normalCustomGradientInputValue={
							tickerTimerNormalCustomGradientInputValue
						}
						setNormalCustomGradientInputValue={(value) =>
							setAttributes({
								tickerTimerNormalCustomGradientInputValue: value,
							})
						}
						normalBackgroundImageUrl={tickerTimerNormalBackgroundImageUrl}
						setNormalBackgroundImageUrl={(value) =>
							setAttributes({ tickerTimerNormalBackgroundImageUrl: value })
						}
						normalBackgroundImageAlt={tickerTimerNormalBackgroundImageAlt}
						setNormalBackgroundImageAlt={(value) =>
							setAttributes({ tickerTimerNormalBackgroundImageAlt: value })
						}
						normalBackgroundImageID={tickerTimerNormalBackgroundImageID}
						setNormalBackgroundImageID={(value) =>
							setAttributes({ tickerTimerNormalBackgroundImageID: value })
						}
						normalBackgroundImagePosition={
							tickerTimerNormalBackgroundImagePosition
						}
						setNormalBackgroundImagePosition={(value) =>
							setAttributes({
								tickerTimerNormalBackgroundImagePosition: value,
							})
						}
						normalBackgroundImageAttachment={
							tickerTimerNormalBackgroundImageAttachment
						}
						setNormalBackgroundImageAttachment={(value) =>
							setAttributes({
								tickerTimerNormalBackgroundImageAttachment: value,
							})
						}
						normalBackgroundImageRepeat={
							tickerTimerNormalBackgroundImageRepeat
						}
						setNormalBackgroundImageRepeat={(value) =>
							setAttributes({ tickerTimerNormalBackgroundImageRepeat: value })
						}
						normalBackgroundImageSize={tickerTimerNormalBackgroundImageSize}
						setNormalBackgroundImageSize={(value) =>
							setAttributes({ tickerTimerNormalBackgroundImageSize: value })
						}
						hoverBackgroundType={tickerTimerHoverBackgroundType}
						setHoverBackgroundType={(value) =>
							setAttributes({ tickerTimerHoverBackgroundType: value })
						}
						hoverClassicColor={tickerTimerHoverClassicColor}
						setHoverClassicColor={(value) =>
							setAttributes({
								tickerTimerHoverClassicColor: value === undefined ? "" : value,
							})
						}
						hoverGradientColor={tickerTimerHoverGradientColor}
						setHoverGradientColor={(value) =>
							setAttributes({
								tickerTimerHoverGradientColor:
									value === undefined ? null : value,
							})
						}
						hoverCustomGradientSwitcher={
							tickerTimerHoverCustomGradientSwitcher
						}
						setHoverCustomGradientSwitcher={(value) =>
							setAttributes({ tickerTimerHoverCustomGradientSwitcher: value })
						}
						hoverCustomGradientInputValue={
							tickerTimerHoverCustomGradientInputValue
						}
						setHoverCustomGradientInputValue={(value) =>
							setAttributes({
								tickerTimerHoverCustomGradientInputValue: value,
							})
						}
						hoverBackgroundImageUrl={tickerTimerHoverBackgroundImageUrl}
						setHoverBackgroundImageUrl={(value) =>
							setAttributes({ tickerTimerHoverBackgroundImageUrl: value })
						}
						hoverBackgroundImageAlt={tickerTimerHoverBackgroundImageAlt}
						setHoverBackgroundImageAlt={(value) =>
							setAttributes({ tickerTimerHoverBackgroundImageAlt: value })
						}
						hoverBackgroundImageID={tickerTimerHoverBackgroundImageID}
						setHoverBackgroundImageID={(value) =>
							setAttributes({ tickerTimerHoverBackgroundImageID: value })
						}
						hoverBackgroundImagePosition={
							tickerTimerHoverBackgroundImagePosition
						}
						setHoverBackgroundImagePosition={(value) =>
							setAttributes({ tickerTimerHoverBackgroundImagePosition: value })
						}
						hoverBackgroundImageAttachment={
							tickerTimerHoverBackgroundImageAttachment
						}
						setHoverBackgroundImageAttachment={(value) =>
							setAttributes({
								tickerTimerHoverBackgroundImageAttachment: value,
							})
						}
						hoverBackgroundImageRepeat={tickerTimerHoverBackgroundImageRepeat}
						setHoverBackgroundImageRepeat={(value) =>
							setAttributes({ tickerTimerHoverBackgroundImageRepeat: value })
						}
						hoverBackgroundImageSize={tickerTimerHoverBackgroundImageSize}
						setHoverBackgroundImageSize={(value) =>
							setAttributes({ tickerTimerHoverBackgroundImageSize: value })
						}
					/>
					<SelectControl
						label={__("Border Style", "frontis-blocks")}
						value={tickerTimerBorder}
						options={BORDER_STYLES}
						onChange={(value) => setAttributes({ tickerTimerBorder: value })}
					/>

					<FB_SwitcherControl
						label={__("Border Color", "frontis-blocks")}
						globalSwitcher={tickerTimerBorderColorSwitcher}
						setGlobalSwitcher={(value) =>
							setAttributes({ tickerTimerBorderColorSwitcher: value })
						}
					/>

					{tickerTimerBorderColorSwitcher === "normal" && (
						<FB_ColorControl
							label={__("Color", "frontis-blocks")}
							globalColor={tickerTimerBorderColor}
							setGlobalColor={(value) =>
								setAttributes({
									tickerTimerBorderColor: value === undefined ? "" : value,
								})
							}
						/>
					)}

					{tickerTimerBorderColorSwitcher === "hover" && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={tickerTimerBorderHoverColor}
							setGlobalColor={(value) =>
								setAttributes({
									tickerTimerBorderHoverColor:
										value === undefined ? "" : value,
								})
							}
						/>
					)}

					<FB_Spacing
						label={__("Border", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handletickerTimerBorderUnitsHandler}
						spacingUnits={tickerTimerBorderUnits}
						spacingDesktop={tickerTimerBorderDesktop}
						spacingTablet={tickerTimerBorderTablet}
						spacingMobile={tickerTimerBorderMobile}
						handleSpacingUnitHandler={handletickerTimerBorderUnitChange}
						spacingCombineBtn={tickerTimerBorderLink}
						spacingCombineBtnHandler={handletickerTimerBorderCombineBtn}
						setAttributes={setAttributes}
					/>

					<FB_Spacing
						label={__("Border Radius", "frontis-blocks")}
						deviceType={deviceType}
						spacingUnitsHandler={handletickerTimerBorderRadiusUnitsHandler}
						spacingUnits={tickerTimerBorderRadiusUnits}
						spacingDesktop={tickerTimerBorderRadiusDesktop}
						spacingTablet={tickerTimerBorderRadiusTablet}
						spacingMobile={tickerTimerBorderRadiusMobile}
						handleSpacingUnitHandler={handletickerTimerBorderRadiusUnitChange}
						spacingCombineBtn={tickerTimerBorderRadiusLink}
						spacingCombineBtnHandler={handletickerTimerBorderRadiusCombineBtn}
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
				<div className="fb-setting-inner-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className="fb-setting-layout-header"
					>
						<FB_Range
							min={0}
							max={10000000}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={newsTickerGlobalZIndex}
							onChangeHandler={(value) =>
								setAttributes({
									newsTickerGlobalZIndex: value === 0 ? undefined : value,
								})
							}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={newsTickerOverflow}
							options={OVERFLOW_OP}
							onChange={(value) =>
								setAttributes({ newsTickerOverflow: value })
							}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={newsTickerPositionType}
							setPositionType={(value) =>
								setAttributes({ newsTickerPositionType: value })
							}
							HZOrientationType={newsTickerHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ newsTickerHZOrientationType: value })
							}
							VROrientationType={newsTickerVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ newsTickerVROrientationType: value })
							}
							HZLeftOffset={newsTickerHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({ newsTickerHZLeftOffset: value })
							}
							HZLeftOffsetUnits={newsTickerHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({ newsTickerHZLeftOffsetUnits: value })
							}
							HZRightOffset={newsTickerHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({ newsTickerHZRightOffset: value })
							}
							HZRightOffsetUnits={newsTickerHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({ newsTickerHZRightOffsetUnits: value })
							}
							VRTopOffset={newsTickerVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({ newsTickerVRTopOffset: value })
							}
							VRTopOffsetUnits={newsTickerVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({ newsTickerVRTopOffsetUnits: value })
							}
							VRBottomOffset={newsTickerVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({ newsTickerVRBottomOffset: value })
							}
							VRBottomOffsetUnits={newsTickerVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({ newsTickerVRBottomOffsetUnits: value })
							}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={newsTickerGlobalWraperID}
							onChangeValue={(value) =>
								setAttributes({ newsTickerGlobalWraperID: value })
							}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={newsTickerGlobalWraperClass}
							onChangeValue={(value) =>
								setAttributes({ newsTickerGlobalWraperClass: value })
							}
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
							spacingUnits={newsTickerGlobalPaddingUnits}
							spacingDesktop={newsTickerGlobalPaddingDesktop}
							spacingTablet={newsTickerGlobalPaddingTablet}
							spacingMobile={newsTickerGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={newsTickerGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={newsTickerGlobalMarginUnits}
							spacingDesktop={newsTickerGlobalMarginDesktop}
							spacingTablet={newsTickerGlobalMarginTablet}
							spacingMobile={newsTickerGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={newsTickerGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Background Color", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_BackgroundColorControl
							bgColorSwitcher={newsTickerGlobalBgColorSwitcher}
							setBgColorSwitcher={(value) =>
								setAttributes({ newsTickerGlobalBgColorSwitcher: value })
							}
							normalBackgroundType={newsTickerGlobalNormalBackgroundType}
							setNormalBackgroundType={(value) =>
								setAttributes({ newsTickerGlobalNormalBackgroundType: value })
							}
							normalClassicColor={newsTickerGlobalNormalClassicColor}
							setNormalClassicColor={(value) =>
								setAttributes({
									newsTickerGlobalNormalClassicColor:
										value === undefined ? "" : value,
								})
							}
							normalGradientColor={newsTickerGlobalNormalGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({
									newsTickerGlobalNormalGradientColor:
										value === undefined ? null : value,
								})
							}
							normalCustomGradientSwitcher={
								newsTickerGlobalNormalCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({
									newsTickerGlobalNormalCustomGradientSwitcher: value,
								})
							}
							normalCustomGradientInputValue={
								newsTickerGlobalNormalCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({
									newsTickerGlobalNormalCustomGradientInputValue: value,
								})
							}
							normalBackgroundImageUrl={newsTickerGlobalNormalBackgroundImageUrl}
							setNormalBackgroundImageUrl={(value) =>
								setAttributes({ newsTickerGlobalNormalBackgroundImageUrl: value })
							}
							normalBackgroundImageAlt={newsTickerGlobalNormalBackgroundImageAlt}
							setNormalBackgroundImageAlt={(value) =>
								setAttributes({ newsTickerGlobalNormalBackgroundImageAlt: value })
							}
							normalBackgroundImageID={newsTickerGlobalNormalBackgroundImageID}
							setNormalBackgroundImageID={(value) =>
								setAttributes({ newsTickerGlobalNormalBackgroundImageID: value })
							}
							normalBackgroundImagePosition={
								newsTickerGlobalNormalBackgroundImagePosition
							}
							setNormalBackgroundImagePosition={(value) =>
								setAttributes({
									newsTickerGlobalNormalBackgroundImagePosition: value,
								})
							}
							normalBackgroundImageAttachment={
								newsTickerGlobalNormalBackgroundImageAttachment
							}
							setNormalBackgroundImageAttachment={(value) =>
								setAttributes({
									newsTickerGlobalNormalBackgroundImageAttachment: value,
								})
							}
							normalBackgroundImageRepeat={
								newsTickerGlobalNormalBackgroundImageRepeat
							}
							setNormalBackgroundImageRepeat={(value) =>
								setAttributes({
									newsTickerGlobalNormalBackgroundImageRepeat: value,
								})
							}
							normalBackgroundImageSize={newsTickerGlobalNormalBackgroundImageSize}
							setNormalBackgroundImageSize={(value) =>
								setAttributes({ newsTickerGlobalNormalBackgroundImageSize: value })
							}
							hoverBackgroundType={newsTickerGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) =>
								setAttributes({ newsTickerGlobalHoverBackgroundType: value })
							}
							hoverClassicColor={newsTickerGlobalHoverClassicColor}
							setHoverClassicColor={(value) =>
								setAttributes({
									newsTickerGlobalHoverClassicColor:
										value === undefined ? "" : value,
								})
							}
							hoverGradientColor={newsTickerGlobalHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({
									newsTickerGlobalHoverGradientColor:
										value === undefined ? null : value,
								})
							}
							hoverCustomGradientSwitcher={
								newsTickerGlobalHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({
									newsTickerGlobalHoverCustomGradientSwitcher: value,
								})
							}
							hoverCustomGradientInputValue={
								newsTickerGlobalHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									newsTickerGlobalHoverCustomGradientInputValue: value,
								})
							}
							hoverBackgroundImageUrl={newsTickerGlobalHoverBackgroundImageUrl}
							setHoverBackgroundImageUrl={(value) =>
								setAttributes({ newsTickerGlobalHoverBackgroundImageUrl: value })
							}
							hoverBackgroundImageAlt={newsTickerGlobalHoverBackgroundImageAlt}
							setHoverBackgroundImageAlt={(value) =>
								setAttributes({ newsTickerGlobalHoverBackgroundImageAlt: value })
							}
							hoverBackgroundImageID={newsTickerGlobalHoverBackgroundImageID}
							setHoverBackgroundImageID={(value) =>
								setAttributes({ newsTickerGlobalHoverBackgroundImageID: value })
							}
							hoverBackgroundImagePosition={
								newsTickerGlobalHoverBackgroundImagePosition
							}
							setHoverBackgroundImagePosition={(value) =>
								setAttributes({
									newsTickerGlobalHoverBackgroundImagePosition: value,
								})
							}
							hoverBackgroundImageAttachment={
								newsTickerGlobalHoverBackgroundImageAttachment
							}
							setHoverBackgroundImageAttachment={(value) =>
								setAttributes({
									newsTickerGlobalHoverBackgroundImageAttachment: value,
								})
							}
							hoverBackgroundImageRepeat={
								newsTickerGlobalHoverBackgroundImageRepeat
							}
							setHoverBackgroundImageRepeat={(value) =>
								setAttributes({
									newsTickerGlobalHoverBackgroundImageRepeat: value,
								})
							}
							hoverBackgroundImageSize={newsTickerGlobalHoverBackgroundImageSize}
							setHoverBackgroundImageSize={(value) =>
								setAttributes({ newsTickerGlobalHoverBackgroundImageSize: value })
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={newsTickerGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) =>
								setAttributes({ newsTickerGlobalBorder: value })
							}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={newsTickerGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ newsTickerGlobalBorderColorSwitcher: value })
							}
						/>

						{newsTickerGlobalBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Color", "frontis-blocks")}
								globalColor={newsTickerGlobalBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										newsTickerGlobalBorderColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{newsTickerGlobalBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={newsTickerGlobalBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										newsTickerGlobalBorderHoverColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={newsTickerGlobalBorderUnits}
							spacingDesktop={newsTickerGlobalBorderDesktop}
							spacingTablet={newsTickerGlobalBorderTablet}
							spacingMobile={newsTickerGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={newsTickerGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={newsTickerGlobalBorderRadiusUnits}
							spacingDesktop={newsTickerGlobalBorderRadiusDesktop}
							spacingTablet={newsTickerGlobalBorderRadiusTablet}
							spacingMobile={newsTickerGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={newsTickerGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={newsTickerGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ newsTickerGlobalBoxShadowSwitcher: value })
							}
						/>

						{newsTickerGlobalBoxShadowSwitcher === "normal" && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ newsTickerGlobalBoxShadowValues: value })
								}
								initialShadowValue={newsTickerGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ newsTickerGlobalBoxShadowCssValue: value })
								}
							/>
						)}

						{newsTickerGlobalBoxShadowSwitcher === "hover" && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ newsTickerGlobalBoxShadowHoverValues: value })
								}
								initialShadowValue={newsTickerGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ newsTickerGlobalBoxShadowHoverCssValue: value })
								}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={newsTickerDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({ newsTickerDesktopSwitcher: value })
							}
							tabletValue={newsTickerTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({ newsTickerTabletSwitcher: value })
							}
							mobileValue={newsTickerMobileSwitcher}
							setMobileValue={(value) =>
								setAttributes({ newsTickerMobileSwitcher: value })
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={newsTickerGlobalWraperCustomCSS}
							onChangeValue={(value) =>
								setAttributes({ newsTickerGlobalWraperCustomCSS: value })
							}
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