import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState, useEffect, useMemo } from "@wordpress/element";
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
import loadGoogleFont from "@Utils/loadGoogleFont";
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

export default function Inspector({ attributes, setAttributes, clientId }) {
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

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-news-ticker-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const iconHandler = (iconName) => {
		setAttributes({ tickerLabelIcon: iconName });
	};

	const PRESETS = [
		{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
		{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
		{ label: __("Preset 3", "frontis-blocks"), value: "preset-3" },
		{ label: __("Preset 4", "frontis-blocks"), value: "preset-4" },
		{ label: __("Preset 5", "frontis-blocks"), value: "preset-5" },
	];
	/** Start Preset Style **/
	const changeNewsTickerPreset = (selectedPreset) => {
		const presetConfigurations = {
			"preset-1": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "classic",
				labelContainerNormalClassicColor: '#399CFF',
				labelContainerNormalCustomGradientInputValue: "",
				labelContainerNormalCustomGradientSwitcher: false,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#399CFF",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: false,
				labelIconSwitcher: false,
				showTime: false,
				labelPosition: "left",
				navigationPosition: "right",
			},
			"preset-2": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: '',
				labelContainerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#B9087B",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				tickerTimerBorderRadiusDesktop: {top: '50', right: '0', bottom: '0', left: '50'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: true,
				labelIconSwitcher: true,
				showTime: false,
				timerPosition: 'top-right',
				labelPosition: "left",
				navigationPosition: "right",
				navigationIconColor: "#E95B68"
			},
			"preset-3": {
				labelContainerPaddingDesktop: {
					top: "18",
					bottom: "18",
					left: "24",
					right: "24",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: "",
				labelContainerNormalCustomGradientInputValue: "linear-gradient(103deg, rgba(248, 155, 46, 0.10) 0%, rgba(86, 165, 243, 0.10) 25%, rgba(189, 89, 255, 0.10) 49.5%, rgba(228, 50, 66, 0.10) 75%, rgba(223, 242, 127, 0.20) 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#FFF4EC",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				tickerTimerNormalClassicColor: "",
				tickerTimerNormalBackgroundType: "gradient",
			    tickerTimerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				tickerTimerNormalCustomGradientSwitcher: true,
				labelContainerBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				newsTickerGlobalBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				tickerTimerPaddingDesktop: {top: '4', right: '16', bottom: '4', left: '16'},
				newsTickerGlobalPaddingDesktop: {top: '10', right: '10', bottom: '10', left: '10'},
				tickerTimerColor: "#ffffff",
				labelIconColor: "#0b0c0e",
				labelTextColor: "#0b0c0e",
				showArrows: false,
				labelIconSwitcher: true,
				showTime: true,
				labelPosition: "left",
				navigationPosition: "right",
				timerPosition: 'top-right',
			},
			"preset-4": {
				labelContainerPaddingDesktop: {
					top: "18",
					bottom: "18",
					left: "24",
					right: "24",
				},
				labelContainerNormalBackgroundType: "classic",
				labelContainerNormalClassicColor: "#70BF73",
				labelContainerNormalCustomGradientInputValue: "",
				labelContainerNormalCustomGradientSwitcher: false,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#70BF73",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				tickerTimerNormalClassicColor: "",
			    tickerTimerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				labelContainerBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				newsTickerGlobalBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				tickerTimerPaddingDesktop: {top: '4', right: '16', bottom: '4', left: '16'},
				newsTickerGlobalPaddingDesktop: {top: '10', right: '10', bottom: '10', left: '10'},
				tickerTimerColor: "#ffffff",
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				tickerTimerNormalCustomGradientSwitcher: true,
				showArrows: true,
				labelIconSwitcher: true,
				showTime: false,
				labelPosition: "right",
				navigationPosition: "left",
				navigationIconColor: "#C3C8D2"
			},
			"preset-5": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: '',
				labelContainerNormalCustomGradientInputValue: "linear-gradient(270deg, #F67C87 0%, #B9087B 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#F67C87",
				tickerTimerNormalClassicColor: "",
				tickerTimerNormalBackgroundType: "gradient",
			    tickerTimerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				tickerTimerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				tickerTimerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: true,
				labelIconSwitcher: true,
				showTime: true,
				timerPosition: 'bottom-left',
				labelPosition: "left",
				navigationPosition: "right",
				navigationIconColor: "#0B0C0E"
			},
			"preset-6": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: '',
				labelContainerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#B9087B",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: true,
				labelIconSwitcher: true,
				showTime: false,
				labelPosition: "left",
				navigationPosition: "right",
				navigationIconColor: "#E95B68"
			},

		};

		const selectedPresetConfig = presetConfigurations[selectedPreset];

		if (selectedPresetConfig) {
			setAttributes({
				newsTickerPresetStyle: selectedPreset,
				...selectedPresetConfig,
			});
		} else {
			console.warn(`Info Box: Preset "${selectedPreset}" not found.`);
		}
	};
	/** End Preset Style **/

	/**
		* Preset Styles Data Object
		*/
		const presetStyles = {
			"preset-1": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "classic",
				labelContainerNormalClassicColor: '#399CFF',
				labelContainerNormalCustomGradientInputValue: "",
				labelContainerNormalCustomGradientSwitcher: false,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#399CFF",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: false,
				labelIconSwitcher: false,
				showTime: false,
				labelPosition: "left",
				navigationPosition: "right",
			},
			"preset-2": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: '',
				labelContainerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#B9087B",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				tickerTimerBorderRadiusDesktop: {top: '50', right: '0', bottom: '0', left: '50'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: true,
				labelIconSwitcher: true,
				showTime: false,
				timerPosition: 'top-right',
				labelPosition: "left",
				navigationPosition: "right",
				navigationIconColor: "#E95B68"
			},
			"preset-3": {
				labelContainerPaddingDesktop: {
					top: "18",
					bottom: "18",
					left: "24",
					right: "24",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: "",
				labelContainerNormalCustomGradientInputValue: "linear-gradient(103deg, rgba(248, 155, 46, 0.10) 0%, rgba(86, 165, 243, 0.10) 25%, rgba(189, 89, 255, 0.10) 49.5%, rgba(228, 50, 66, 0.10) 75%, rgba(223, 242, 127, 0.20) 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#FFF4EC",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				tickerTimerNormalClassicColor: "",
				tickerTimerNormalBackgroundType: "gradient",
			    tickerTimerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				tickerTimerNormalCustomGradientSwitcher: true,
				labelContainerBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				newsTickerGlobalBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				tickerTimerPaddingDesktop: {top: '4', right: '16', bottom: '4', left: '16'},
				newsTickerGlobalPaddingDesktop: {top: '10', right: '10', bottom: '10', left: '10'},
				tickerTimerColor: "#ffffff",
				labelIconColor: "#0b0c0e",
				labelTextColor: "#0b0c0e",
				showArrows: false,
				labelIconSwitcher: true,
				showTime: true,
				labelPosition: "left",
				navigationPosition: "right",
				timerPosition: 'top-right',
			},
			"preset-4": {
				labelContainerPaddingDesktop: {
					top: "18",
					bottom: "18",
					left: "24",
					right: "24",
				},
				labelContainerNormalBackgroundType: "classic",
				labelContainerNormalClassicColor: "#70BF73",
				labelContainerNormalCustomGradientInputValue: "",
				labelContainerNormalCustomGradientSwitcher: false,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#70BF73",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				tickerTimerNormalClassicColor: "",
			    tickerTimerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				labelContainerBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				newsTickerGlobalBorderRadiusDesktop: {top: '50', right: '50', bottom: '50', left: '50'},
				tickerTimerPaddingDesktop: {top: '4', right: '16', bottom: '4', left: '16'},
				newsTickerGlobalPaddingDesktop: {top: '10', right: '10', bottom: '10', left: '10'},
				tickerTimerColor: "#ffffff",
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				tickerTimerNormalCustomGradientSwitcher: true,
				showArrows: true,
				labelIconSwitcher: true,
				showTime: false,
				labelPosition: "right",
				navigationPosition: "left",
				navigationIconColor: "#C3C8D2"
			},
			"preset-5": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: '',
				labelContainerNormalCustomGradientInputValue: "linear-gradient(270deg, #F67C87 0%, #B9087B 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#F67C87",
				tickerTimerNormalClassicColor: "",
				tickerTimerNormalBackgroundType: "gradient",
			    tickerTimerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				tickerTimerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				tickerTimerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: true,
				labelIconSwitcher: true,
				showTime: true,
				timerPosition: 'bottom-left',
				labelPosition: "left",
				navigationPosition: "right",
				navigationIconColor: "#0B0C0E"
			},
			"preset-6": {
				labelContainerPaddingDesktop: {
					top: "28",
					bottom: "28",
					left: "36",
					right: "36",
				},
				labelContainerNormalBackgroundType: "gradient",
				labelContainerNormalClassicColor: '',
				labelContainerNormalCustomGradientInputValue: "linear-gradient(270deg, #B9087B 0%, #F67C87 100%);",
				labelContainerNormalCustomGradientSwitcher: true,
				newsTickerGlobalBorder: "solid",
				newsTickerGlobalBorderColor: "#B9087B",
				newsTickerGlobalBorderDesktop: {top: '1', bottom: '1', left: '1', right: '1'},
				labelContainerBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalBorderRadiusDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				newsTickerGlobalPaddingDesktop: {top: '0', right: '0', bottom: '0', left: '0'},
				labelIconColor: "#ffffff",
				labelTextColor: "#ffffff",
				showArrows: true,
				labelIconSwitcher: true,
				showTime: false,
				labelPosition: "left",
				navigationPosition: "right",
				navigationIconColor: "#E95B68"
			},
		};
		  
		const newsTickerPresets = [
			{
				value: 'preset-1',
				label: __('Preset 1', 'frontis-blocks'),
				attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
				icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
							<g filter="url(#filter0_d_16980_14487)">
							<rect x="48" y="112" width="252" height="52" fill="white" shape-rendering="crispEdges"/>
							<rect x="48.75" y="112.75" width="250.5" height="50.5" stroke="#404655" stroke-width="1.5" shape-rendering="crispEdges"/>
							<rect width="96" height="52" transform="translate(48 112)" fill="#404655"/>
							<g filter="url(#filter1_d_16980_14487)">
							<path d="M65 138C65 135.239 67.2386 133 70 133H122C124.761 133 127 135.239 127 138C127 140.761 124.761 143 122 143H70C67.2386 143 65 140.761 65 138Z" fill="white"/>
							</g>
							<g filter="url(#filter2_d_16980_14487)">
							<path d="M156 138C156 133.582 159.582 130 164 130H194C198.418 130 202 133.582 202 138C202 142.418 198.418 146 194 146H164C159.582 146 156 142.418 156 138Z" fill="#C3C8D2"/>
							</g>
							<g filter="url(#filter3_d_16980_14487)">
							<path d="M214 138C214 133.582 217.582 130 222 130H280C284.418 130 288 133.582 288 138C288 142.418 284.418 146 280 146H222C217.582 146 214 142.418 214 138Z" fill="#C3C8D2"/>
							</g>
							</g>
							<defs>
							<filter id="filter0_d_16980_14487" x="47" y="112" width="254" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14487"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14487" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14487" x="64" y="133" width="64" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14487"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14487" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14487" x="155" y="130" width="48" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14487"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14487" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14487" x="213" y="130" width="76" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14487"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14487" result="shape"/>
							</filter>
							</defs>
						</svg>`,
			},
			{
				value: 'preset-2',
				label: __('Preset 2', 'frontis-blocks'),
				attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
				icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
							<g filter="url(#filter0_d_16980_14493)">
							<rect x="38" y="112" width="272" height="52" fill="white" shape-rendering="crispEdges"/>
							<rect x="38.75" y="112.75" width="270.5" height="50.5" stroke="#404655" stroke-width="1.5" shape-rendering="crispEdges"/>
							<rect width="110" height="52" transform="translate(38 112)" fill="#404655"/>
							<path d="M59.6868 131.001C59.8421 131.073 59.9162 131.165 59.9993 131.313C60.0112 131.398 60.0153 131.467 60.0126 131.552C60.0121 131.577 60.0117 131.602 60.0113 131.628C59.9996 132.069 59.9558 132.509 59.9183 132.947C59.9068 133.082 59.8956 133.217 59.8844 133.351C59.8656 133.577 59.8466 133.802 59.8274 134.028C59.8053 134.288 59.7834 134.549 59.7617 134.809C59.7385 135.088 59.7151 135.366 59.6917 135.644C59.6849 135.724 59.6782 135.804 59.6716 135.884C59.6611 136.009 59.6505 136.135 59.6398 136.26C59.6359 136.306 59.632 136.352 59.6282 136.398C59.6229 136.461 59.6176 136.523 59.6122 136.586C59.6092 136.621 59.6063 136.656 59.6032 136.692C59.5947 136.767 59.5825 136.835 59.5618 136.907C59.6147 136.894 59.6147 136.894 59.6687 136.881C59.904 136.829 60.1431 136.798 60.3815 136.763C60.434 136.756 60.4865 136.748 60.539 136.74C60.6487 136.724 60.7585 136.709 60.8683 136.693C61.0078 136.673 61.1472 136.652 61.2867 136.632C61.3951 136.616 61.5035 136.601 61.6119 136.585C61.6633 136.578 61.7146 136.57 61.766 136.563C62.5621 136.445 62.5621 136.445 62.8 136.552C62.9734 136.725 63.0135 136.844 63.022 137.085C62.9673 137.333 62.7631 137.535 62.6028 137.725C62.5639 137.772 62.5251 137.819 62.4863 137.865C62.4673 137.888 62.4483 137.911 62.4287 137.935C62.351 138.029 62.2755 138.125 62.2004 138.221C62.078 138.379 61.9534 138.534 61.8274 138.688C61.7008 138.843 61.5756 138.999 61.4524 139.157C61.3123 139.336 61.1693 139.513 61.0254 139.689C60.9163 139.823 60.8087 139.958 60.7024 140.095C60.5623 140.274 60.4193 140.451 60.2754 140.627C60.1663 140.761 60.0587 140.896 59.9524 141.032C59.8123 141.211 59.6693 141.388 59.5254 141.564C59.4163 141.698 59.3087 141.833 59.2024 141.97C59.0623 142.149 58.9193 142.326 58.7754 142.502C58.6663 142.636 58.5587 142.771 58.4524 142.907C58.3123 143.086 58.1693 143.263 58.0254 143.439C57.9163 143.573 57.8087 143.708 57.7024 143.845C57.5603 144.027 57.4155 144.206 57.2693 144.385C57.1728 144.503 57.0786 144.622 56.9856 144.743C56.872 144.883 56.786 144.988 56.5984 145.012C56.4482 145.019 56.3398 145.014 56.2024 144.95C56.0844 144.838 56.0071 144.744 55.984 144.579C55.9838 144.536 55.9846 144.493 55.986 144.45C55.9864 144.425 55.9868 144.399 55.9872 144.374C55.999 143.933 56.0428 143.493 56.0803 143.054C56.0917 142.919 56.1029 142.785 56.1141 142.65C56.133 142.425 56.152 142.199 56.1711 141.974C56.1932 141.713 56.2151 141.453 56.2368 141.192C56.2601 140.914 56.2834 140.636 56.3069 140.357C56.3136 140.277 56.3203 140.197 56.327 140.117C56.3375 139.992 56.3481 139.867 56.3588 139.741C56.3627 139.696 56.3665 139.65 56.3704 139.604C56.3756 139.541 56.381 139.478 56.3863 139.416C56.3893 139.381 56.3923 139.345 56.3953 139.309C56.4038 139.235 56.4161 139.167 56.4368 139.095C56.4006 139.104 56.3644 139.114 56.3271 139.123C56.1996 139.155 56.0716 139.177 55.9416 139.196C55.9069 139.201 55.9069 139.201 55.8715 139.206C55.7959 139.217 55.7202 139.228 55.6445 139.238C55.5913 139.246 55.538 139.254 55.4848 139.261C55.3734 139.277 55.262 139.293 55.1505 139.309C55.0089 139.329 54.8673 139.349 54.7257 139.37C54.6157 139.385 54.5057 139.401 54.3957 139.417C54.3436 139.424 54.2914 139.431 54.2393 139.439C53.435 139.556 53.435 139.556 53.1985 139.45C53.0251 139.277 52.985 139.158 52.9766 138.916C53.0312 138.668 53.2355 138.466 53.3958 138.276C53.4346 138.23 53.4734 138.183 53.5122 138.136C53.5407 138.102 53.5407 138.102 53.5699 138.067C53.6475 137.972 53.723 137.877 53.7981 137.78C53.9206 137.623 54.0451 137.468 54.1711 137.313C54.2977 137.158 54.423 137.002 54.5461 136.845C54.6862 136.665 54.8293 136.488 54.9731 136.312C55.0822 136.178 55.1898 136.043 55.2961 135.907C55.4362 135.728 55.5793 135.551 55.7231 135.375C55.8322 135.241 55.9398 135.106 56.0461 134.97C56.1862 134.79 56.3293 134.613 56.4731 134.437C56.5822 134.303 56.6898 134.168 56.7961 134.032C56.9362 133.853 57.0793 133.676 57.2231 133.5C57.3322 133.366 57.4398 133.231 57.5461 133.095C57.6862 132.915 57.8293 132.738 57.9731 132.562C58.0822 132.428 58.1898 132.293 58.2961 132.157C58.4383 131.975 58.583 131.795 58.7293 131.617C58.8257 131.499 58.9199 131.379 59.0129 131.259C59.2099 131.016 59.3767 130.959 59.6868 131.001Z" fill="white"/>
							<g filter="url(#filter1_d_16980_14493)">
							<path d="M74 138C74 134.686 76.6863 132 80 132H130C133.314 132 136 134.686 136 138C136 141.314 133.314 144 130 144H80C76.6863 144 74 141.314 74 138Z" fill="white"/>
							</g>
							<g filter="url(#filter2_d_16980_14493)">
							<path d="M154 138C154 133.582 157.582 130 162 130H212C216.418 130 220 133.582 220 138C220 142.418 216.418 146 212 146H162C157.582 146 154 142.418 154 138Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter3_d_16980_14493)">
							<path d="M226 138C226 133.582 229.582 130 234 130H273C277.418 130 281 133.582 281 138C281 142.418 277.418 146 273 146H234C229.582 146 226 142.418 226 138Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter4_d_16980_14493)">
							<path d="M287 135.5C287 132.462 289.462 130 292.5 130C295.538 130 298 132.462 298 135.5V140.5C298 143.538 295.538 146 292.5 146C289.462 146 287 143.538 287 140.5V135.5Z" fill="#E1E3E8"/>
							</g>
							</g>
							<path d="M281 134C281 134 277 136.946 277 138C277 139.054 281 142 281 142" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M299 134C299 134 303 136.946 303 138C303 139.054 299 142 299 142" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<filter id="filter0_d_16980_14493" x="37" y="112" width="274" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14493"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14493" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14493" x="73" y="132" width="64" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14493"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14493" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14493" x="153" y="130" width="68" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14493"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14493" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14493" x="225" y="130" width="57" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14493"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14493" result="shape"/>
							</filter>
							<filter id="filter4_d_16980_14493" x="286" y="130" width="13" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14493"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14493" result="shape"/>
							</filter>
							</defs>
						</svg>`,
			},
			{
				value: 'preset-3',
				label: __('Preset 3', 'frontis-blocks'),
				attributes: Object.entries(presetStyles['preset-3']).map(([label, value]) => ({ label, value })),
				icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
							<rect x="38.5" y="112.5" width="271" height="51" rx="25.5" fill="white"/>
							<rect x="38.5" y="112.5" width="271" height="51" rx="25.5" stroke="#C3C8D2"/>
							<rect x="44" y="118" width="103" height="40" rx="20" fill="#E1E3E8"/>
							<path d="M62.6868 131.001C62.8421 131.073 62.9162 131.165 62.9993 131.313C63.0112 131.398 63.0153 131.467 63.0126 131.552C63.0121 131.577 63.0117 131.602 63.0113 131.628C62.9996 132.069 62.9558 132.509 62.9183 132.947C62.9068 133.082 62.8956 133.217 62.8844 133.351C62.8656 133.577 62.8466 133.802 62.8274 134.028C62.8053 134.288 62.7834 134.549 62.7617 134.809C62.7385 135.088 62.7151 135.366 62.6917 135.644C62.6849 135.724 62.6782 135.804 62.6716 135.884C62.6611 136.009 62.6505 136.135 62.6398 136.26C62.6359 136.306 62.632 136.352 62.6282 136.398C62.6229 136.461 62.6176 136.523 62.6122 136.586C62.6092 136.621 62.6063 136.656 62.6032 136.692C62.5947 136.767 62.5825 136.835 62.5618 136.907C62.6147 136.894 62.6147 136.894 62.6687 136.881C62.904 136.829 63.1431 136.798 63.3815 136.763C63.434 136.756 63.4865 136.748 63.539 136.74C63.6487 136.724 63.7585 136.709 63.8683 136.693C64.0078 136.673 64.1472 136.652 64.2867 136.632C64.3951 136.616 64.5035 136.601 64.6119 136.585C64.6633 136.578 64.7146 136.57 64.766 136.563C65.5621 136.445 65.5621 136.445 65.8 136.552C65.9734 136.725 66.0135 136.844 66.022 137.085C65.9673 137.333 65.7631 137.535 65.6028 137.725C65.5639 137.772 65.5251 137.819 65.4863 137.865C65.4673 137.888 65.4483 137.911 65.4287 137.935C65.351 138.029 65.2755 138.125 65.2004 138.221C65.078 138.379 64.9534 138.534 64.8274 138.688C64.7008 138.843 64.5756 138.999 64.4524 139.157C64.3123 139.336 64.1693 139.513 64.0254 139.689C63.9163 139.823 63.8087 139.958 63.7024 140.095C63.5623 140.274 63.4193 140.451 63.2754 140.627C63.1663 140.761 63.0587 140.896 62.9524 141.032C62.8123 141.211 62.6693 141.388 62.5254 141.564C62.4163 141.698 62.3087 141.833 62.2024 141.97C62.0623 142.149 61.9193 142.326 61.7754 142.502C61.6663 142.636 61.5587 142.771 61.4524 142.907C61.3123 143.086 61.1693 143.263 61.0254 143.439C60.9163 143.573 60.8087 143.708 60.7024 143.845C60.5603 144.027 60.4155 144.206 60.2693 144.385C60.1728 144.503 60.0786 144.622 59.9856 144.743C59.872 144.883 59.786 144.988 59.5984 145.012C59.4482 145.019 59.3398 145.014 59.2024 144.95C59.0844 144.838 59.0071 144.744 58.984 144.579C58.9838 144.536 58.9846 144.493 58.986 144.45C58.9864 144.425 58.9868 144.399 58.9872 144.374C58.999 143.933 59.0428 143.493 59.0803 143.054C59.0917 142.919 59.1029 142.785 59.1141 142.65C59.133 142.425 59.152 142.199 59.1711 141.974C59.1932 141.713 59.2151 141.453 59.2368 141.192C59.2601 140.914 59.2834 140.636 59.3069 140.357C59.3136 140.277 59.3203 140.197 59.327 140.117C59.3375 139.992 59.3481 139.867 59.3588 139.741C59.3627 139.696 59.3665 139.65 59.3704 139.604C59.3756 139.541 59.381 139.478 59.3863 139.416C59.3893 139.381 59.3923 139.345 59.3953 139.309C59.4038 139.235 59.4161 139.167 59.4368 139.095C59.4006 139.104 59.3644 139.114 59.3271 139.123C59.1996 139.155 59.0716 139.177 58.9416 139.196C58.9069 139.201 58.9069 139.201 58.8715 139.206C58.7959 139.217 58.7202 139.228 58.6445 139.238C58.5913 139.246 58.538 139.254 58.4848 139.261C58.3734 139.277 58.262 139.293 58.1505 139.309C58.0089 139.329 57.8673 139.349 57.7257 139.37C57.6157 139.385 57.5057 139.401 57.3957 139.417C57.3436 139.424 57.2914 139.431 57.2393 139.439C56.435 139.556 56.435 139.556 56.1985 139.45C56.0251 139.277 55.985 139.158 55.9766 138.916C56.0312 138.668 56.2355 138.466 56.3958 138.276C56.4346 138.23 56.4734 138.183 56.5122 138.136C56.5407 138.102 56.5407 138.102 56.5699 138.067C56.6475 137.972 56.723 137.877 56.7981 137.78C56.9206 137.623 57.0451 137.468 57.1711 137.313C57.2977 137.158 57.423 137.002 57.5461 136.845C57.6862 136.665 57.8293 136.488 57.9731 136.312C58.0822 136.178 58.1898 136.043 58.2961 135.907C58.4362 135.728 58.5793 135.551 58.7231 135.375C58.8322 135.241 58.9398 135.106 59.0461 134.97C59.1862 134.79 59.3293 134.613 59.4731 134.437C59.5822 134.303 59.6898 134.168 59.7961 134.032C59.9362 133.853 60.0793 133.676 60.2231 133.5C60.3322 133.366 60.4398 133.231 60.5461 133.095C60.6862 132.915 60.8293 132.738 60.9731 132.562C61.0822 132.428 61.1898 132.293 61.2961 132.157C61.4383 131.975 61.583 131.795 61.7293 131.617C61.8257 131.499 61.9199 131.379 62.0129 131.259C62.2099 131.016 62.3767 130.959 62.6868 131.001Z" fill="#404655"/>
							<g filter="url(#filter0_d_16980_14527)">
							<path d="M78 138C78 135.239 80.2386 133 83 133H126C128.761 133 131 135.239 131 138C131 140.761 128.761 143 126 143H83C80.2386 143 78 140.761 78 138Z" fill="white"/>
							</g>
							<g filter="url(#filter1_d_16980_14527)">
							<path d="M153 138C153 133.582 156.582 130 161 130H214.5C218.918 130 222.5 133.582 222.5 138C222.5 142.418 218.918 146 214.5 146H161C156.582 146 153 142.418 153 138Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter2_d_16980_14527)">
							<path d="M228.5 138C228.5 133.582 232.082 130 236.5 130H290C294.418 130 298 133.582 298 138C298 142.418 294.418 146 290 146H236.5C232.082 146 228.5 142.418 228.5 138Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter3_d_16980_14527)">
							<path d="M242 116.935C242 114.209 244.209 112 246.935 112H290C299.941 112 308 120.059 308 130H250C245.582 130 242 126.418 242 122V116.935Z" fill="#404655" shape-rendering="crispEdges"/>
							<path d="M252 121C252 119.343 253.343 118 255 118H295C296.657 118 298 119.343 298 121C298 122.657 296.657 124 295 124H255C253.343 124 252 122.657 252 121Z" fill="white"/>
							</g>
							<defs>
							<filter id="filter0_d_16980_14527" x="77" y="133" width="55" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14527"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14527" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14527" x="152" y="130" width="71.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14527"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14527" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14527" x="227.5" y="130" width="71.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14527"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14527" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14527" x="241" y="112" width="68" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14527"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14527" result="shape"/>
							</filter>
							</defs>
						</svg>`,
			},
			{
				value: 'preset-4',
				label: __('Preset 4', 'frontis-blocks'),
				attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
				icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
							<rect x="38.5" y="112.5" width="271" height="51" rx="25.5" fill="white"/>
							<rect x="38.5" y="112.5" width="271" height="51" rx="25.5" stroke="#C3C8D2"/>
							<g filter="url(#filter0_d_16980_14537)">
							<path d="M50 138C50 133.582 53.5817 130 58 130H111.5C115.918 130 119.5 133.582 119.5 138C119.5 142.418 115.918 146 111.5 146H58C53.5817 146 50 142.418 50 138Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter1_d_16980_14537)">
							<path d="M125.5 138C125.5 133.582 129.082 130 133.5 130H187C191.418 130 195 133.582 195 138C195 142.418 191.418 146 187 146H133.5C129.082 146 125.5 142.418 125.5 138Z" fill="#E1E3E8"/>
							</g>
							<rect x="201" y="118" width="103" height="40" rx="20" fill="#404655"/>
							<path d="M219.687 131.001C219.842 131.073 219.916 131.165 219.999 131.313C220.011 131.398 220.015 131.467 220.013 131.552C220.012 131.577 220.012 131.602 220.011 131.628C220 132.069 219.956 132.509 219.918 132.947C219.907 133.082 219.896 133.217 219.884 133.351C219.866 133.577 219.847 133.802 219.827 134.028C219.805 134.288 219.783 134.549 219.762 134.809C219.738 135.088 219.715 135.366 219.692 135.644C219.685 135.724 219.678 135.804 219.672 135.884C219.661 136.009 219.65 136.135 219.64 136.26C219.636 136.306 219.632 136.352 219.628 136.398C219.623 136.461 219.618 136.523 219.612 136.586C219.609 136.621 219.606 136.656 219.603 136.692C219.595 136.767 219.582 136.835 219.562 136.907C219.615 136.894 219.615 136.894 219.669 136.881C219.904 136.829 220.143 136.798 220.381 136.763C220.434 136.756 220.486 136.748 220.539 136.74C220.649 136.724 220.758 136.709 220.868 136.693C221.008 136.673 221.147 136.652 221.287 136.632C221.395 136.616 221.503 136.601 221.612 136.585C221.663 136.578 221.715 136.57 221.766 136.563C222.562 136.445 222.562 136.445 222.8 136.552C222.973 136.725 223.014 136.844 223.022 137.085C222.967 137.333 222.763 137.535 222.603 137.725C222.564 137.772 222.525 137.819 222.486 137.865C222.467 137.888 222.448 137.911 222.429 137.935C222.351 138.029 222.276 138.125 222.2 138.221C222.078 138.379 221.953 138.534 221.827 138.688C221.701 138.843 221.576 138.999 221.452 139.157C221.312 139.336 221.169 139.513 221.025 139.689C220.916 139.823 220.809 139.958 220.702 140.095C220.562 140.274 220.419 140.451 220.275 140.627C220.166 140.761 220.059 140.896 219.952 141.032C219.812 141.211 219.669 141.388 219.525 141.564C219.416 141.698 219.309 141.833 219.202 141.97C219.062 142.149 218.919 142.326 218.775 142.502C218.666 142.636 218.559 142.771 218.452 142.907C218.312 143.086 218.169 143.263 218.025 143.439C217.916 143.573 217.809 143.708 217.702 143.845C217.56 144.027 217.415 144.206 217.269 144.385C217.173 144.503 217.079 144.622 216.986 144.743C216.872 144.883 216.786 144.988 216.598 145.012C216.448 145.019 216.34 145.014 216.202 144.95C216.084 144.838 216.007 144.744 215.984 144.579C215.984 144.536 215.985 144.493 215.986 144.45C215.986 144.425 215.987 144.399 215.987 144.374C215.999 143.933 216.043 143.493 216.08 143.054C216.092 142.919 216.103 142.785 216.114 142.65C216.133 142.425 216.152 142.199 216.171 141.974C216.193 141.713 216.215 141.453 216.237 141.192C216.26 140.914 216.283 140.636 216.307 140.357C216.314 140.277 216.32 140.197 216.327 140.117C216.337 139.992 216.348 139.867 216.359 139.741C216.363 139.696 216.367 139.65 216.37 139.604C216.376 139.541 216.381 139.478 216.386 139.416C216.389 139.381 216.392 139.345 216.395 139.309C216.404 139.235 216.416 139.167 216.437 139.095C216.401 139.104 216.364 139.114 216.327 139.123C216.2 139.155 216.072 139.177 215.942 139.196C215.907 139.201 215.907 139.201 215.872 139.206C215.796 139.217 215.72 139.228 215.645 139.238C215.591 139.246 215.538 139.254 215.485 139.261C215.373 139.277 215.262 139.293 215.151 139.309C215.009 139.329 214.867 139.349 214.726 139.37C214.616 139.385 214.506 139.401 214.396 139.417C214.344 139.424 214.291 139.431 214.239 139.439C213.435 139.556 213.435 139.556 213.198 139.45C213.025 139.277 212.985 139.158 212.977 138.916C213.031 138.668 213.235 138.466 213.396 138.276C213.435 138.23 213.473 138.183 213.512 138.136C213.541 138.102 213.541 138.102 213.57 138.067C213.648 137.972 213.723 137.877 213.798 137.78C213.921 137.623 214.045 137.468 214.171 137.313C214.298 137.158 214.423 137.002 214.546 136.845C214.686 136.665 214.829 136.488 214.973 136.312C215.082 136.178 215.19 136.043 215.296 135.907C215.436 135.728 215.579 135.551 215.723 135.375C215.832 135.241 215.94 135.106 216.046 134.97C216.186 134.79 216.329 134.613 216.473 134.437C216.582 134.303 216.69 134.168 216.796 134.032C216.936 133.853 217.079 133.676 217.223 133.5C217.332 133.366 217.44 133.231 217.546 133.095C217.686 132.915 217.829 132.738 217.973 132.562C218.082 132.428 218.19 132.293 218.296 132.157C218.438 131.975 218.583 131.795 218.729 131.617C218.826 131.499 218.92 131.379 219.013 131.259C219.21 131.016 219.377 130.959 219.687 131.001Z" fill="white"/>
							<g filter="url(#filter2_d_16980_14537)">
							<path d="M235 138C235 135.239 237.239 133 240 133H283C285.761 133 288 135.239 288 138C288 140.761 285.761 143 283 143H240C237.239 143 235 140.761 235 138Z" fill="white"/>
							</g>
							<defs>
							<filter id="filter0_d_16980_14537" x="49" y="130" width="71.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14537"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14537" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14537" x="124.5" y="130" width="71.5" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14537"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14537" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14537" x="234" y="133" width="55" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14537"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14537" result="shape"/>
							</filter>
							</defs>
						</svg>`,
			},
			{
				value: 'preset-5',
				label: __('Preset 5', 'frontis-blocks'),
				attributes: Object.entries(presetStyles['preset-5']).map(([label, value]) => ({ label, value })),
				icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
							<g filter="url(#filter0_d_16980_14509)">
							<rect x="38" y="112" width="272" height="52" fill="white" shape-rendering="crispEdges"/>
							<rect x="38.75" y="112.75" width="270.5" height="50.5" stroke="#404655" stroke-width="1.5" shape-rendering="crispEdges"/>
							<rect width="110" height="52" transform="translate(38 112)" fill="#404655"/>
							<path d="M59.6868 131.001C59.8421 131.073 59.9162 131.165 59.9993 131.313C60.0112 131.398 60.0153 131.467 60.0126 131.552C60.0121 131.577 60.0117 131.602 60.0113 131.628C59.9996 132.069 59.9558 132.509 59.9183 132.947C59.9068 133.082 59.8956 133.217 59.8844 133.351C59.8656 133.577 59.8466 133.802 59.8274 134.028C59.8053 134.288 59.7834 134.549 59.7617 134.809C59.7385 135.088 59.7151 135.366 59.6917 135.644C59.6849 135.724 59.6782 135.804 59.6716 135.884C59.6611 136.009 59.6505 136.135 59.6398 136.26C59.6359 136.306 59.632 136.352 59.6282 136.398C59.6229 136.461 59.6176 136.523 59.6122 136.586C59.6092 136.621 59.6063 136.656 59.6032 136.692C59.5947 136.767 59.5825 136.835 59.5618 136.907C59.6147 136.894 59.6147 136.894 59.6687 136.881C59.904 136.829 60.1431 136.798 60.3815 136.763C60.434 136.756 60.4865 136.748 60.539 136.74C60.6487 136.724 60.7585 136.709 60.8683 136.693C61.0078 136.673 61.1472 136.652 61.2867 136.632C61.3951 136.616 61.5035 136.601 61.6119 136.585C61.6633 136.578 61.7146 136.57 61.766 136.563C62.5621 136.445 62.5621 136.445 62.8 136.552C62.9734 136.725 63.0135 136.844 63.022 137.085C62.9673 137.333 62.7631 137.535 62.6028 137.725C62.5639 137.772 62.5251 137.819 62.4863 137.865C62.4673 137.888 62.4483 137.911 62.4287 137.935C62.351 138.029 62.2755 138.125 62.2004 138.221C62.078 138.379 61.9534 138.534 61.8274 138.688C61.7008 138.843 61.5756 138.999 61.4524 139.157C61.3123 139.336 61.1693 139.513 61.0254 139.689C60.9163 139.823 60.8087 139.958 60.7024 140.095C60.5623 140.274 60.4193 140.451 60.2754 140.627C60.1663 140.761 60.0587 140.896 59.9524 141.032C59.8123 141.211 59.6693 141.388 59.5254 141.564C59.4163 141.698 59.3087 141.833 59.2024 141.97C59.0623 142.149 58.9193 142.326 58.7754 142.502C58.6663 142.636 58.5587 142.771 58.4524 142.907C58.3123 143.086 58.1693 143.263 58.0254 143.439C57.9163 143.573 57.8087 143.708 57.7024 143.845C57.5603 144.027 57.4155 144.206 57.2693 144.385C57.1728 144.503 57.0786 144.622 56.9856 144.743C56.872 144.883 56.786 144.988 56.5984 145.012C56.4482 145.019 56.3398 145.014 56.2024 144.95C56.0844 144.838 56.0071 144.744 55.984 144.579C55.9838 144.536 55.9846 144.493 55.986 144.45C55.9864 144.425 55.9868 144.399 55.9872 144.374C55.999 143.933 56.0428 143.493 56.0803 143.054C56.0917 142.919 56.1029 142.785 56.1141 142.65C56.133 142.425 56.152 142.199 56.1711 141.974C56.1932 141.713 56.2151 141.453 56.2368 141.192C56.2601 140.914 56.2834 140.636 56.3069 140.357C56.3136 140.277 56.3203 140.197 56.327 140.117C56.3375 139.992 56.3481 139.867 56.3588 139.741C56.3627 139.696 56.3665 139.65 56.3704 139.604C56.3756 139.541 56.381 139.478 56.3863 139.416C56.3893 139.381 56.3923 139.345 56.3953 139.309C56.4038 139.235 56.4161 139.167 56.4368 139.095C56.4006 139.104 56.3644 139.114 56.3271 139.123C56.1996 139.155 56.0716 139.177 55.9416 139.196C55.9069 139.201 55.9069 139.201 55.8715 139.206C55.7959 139.217 55.7202 139.228 55.6445 139.238C55.5913 139.246 55.538 139.254 55.4848 139.261C55.3734 139.277 55.262 139.293 55.1505 139.309C55.0089 139.329 54.8673 139.349 54.7257 139.37C54.6157 139.385 54.5057 139.401 54.3957 139.417C54.3436 139.424 54.2914 139.431 54.2393 139.439C53.435 139.556 53.435 139.556 53.1985 139.45C53.0251 139.277 52.985 139.158 52.9766 138.916C53.0312 138.668 53.2355 138.466 53.3958 138.276C53.4346 138.23 53.4734 138.183 53.5122 138.136C53.5407 138.102 53.5407 138.102 53.5699 138.067C53.6475 137.972 53.723 137.877 53.7981 137.78C53.9206 137.623 54.0451 137.468 54.1711 137.313C54.2977 137.158 54.423 137.002 54.5461 136.845C54.6862 136.665 54.8293 136.488 54.9731 136.312C55.0822 136.178 55.1898 136.043 55.2961 135.907C55.4362 135.728 55.5793 135.551 55.7231 135.375C55.8322 135.241 55.9398 135.106 56.0461 134.97C56.1862 134.79 56.3293 134.613 56.4731 134.437C56.5822 134.303 56.6898 134.168 56.7961 134.032C56.9362 133.853 57.0793 133.676 57.2231 133.5C57.3322 133.366 57.4398 133.231 57.5461 133.095C57.6862 132.915 57.8293 132.738 57.9731 132.562C58.0822 132.428 58.1898 132.293 58.2961 132.157C58.4383 131.975 58.583 131.795 58.7293 131.617C58.8257 131.499 58.9199 131.379 59.0129 131.259C59.2099 131.016 59.3767 130.959 59.6868 131.001Z" fill="white"/>
							<g filter="url(#filter1_d_16980_14509)">
							<path d="M74 138C74 134.686 76.6863 132 80 132H130C133.314 132 136 134.686 136 138C136 141.314 133.314 144 130 144H80C76.6863 144 74 141.314 74 138Z" fill="white"/>
							</g>
							<g filter="url(#filter2_d_16980_14509)">
							<path d="M154 138C154 133.582 157.582 130 162 130H200C204.418 130 208 133.582 208 138C208 142.418 204.418 146 200 146H162C157.582 146 154 142.418 154 138Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter3_d_16980_14509)">
							<path d="M214 138C214 133.582 217.582 130 222 130H260C264.418 130 268 133.582 268 138C268 142.418 264.418 146 260 146H222C217.582 146 214 142.418 214 138Z" fill="#E1E3E8"/>
							</g>
							<g filter="url(#filter4_d_16980_14509)">
							<path d="M274 138C274 133.582 277.582 130 282 130H290C294.418 130 298 133.582 298 138C298 142.418 294.418 146 290 146H282C277.582 146 274 142.418 274 138Z" fill="#E1E3E8"/>
							</g>
							</g>
							<rect width="70" height="26" transform="translate(38 138)" fill="#555E72"/>
							<path d="M48 151C48 148.791 49.7909 147 52 147H94C96.2091 147 98 148.791 98 151C98 153.209 96.2091 155 94 155H52C49.7909 155 48 153.209 48 151Z" fill="white"/>
							<path d="M281 134C281 134 277 136.946 277 138C277 139.054 281 142 281 142" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M299 134C299 134 303 136.946 303 138C303 139.054 299 142 299 142" stroke="#404655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<defs>
							<filter id="filter0_d_16980_14509" x="37" y="112" width="274" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14509"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14509" result="shape"/>
							</filter>
							<filter id="filter1_d_16980_14509" x="73" y="132" width="64" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14509"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14509" result="shape"/>
							</filter>
							<filter id="filter2_d_16980_14509" x="153" y="130" width="56" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14509"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14509" result="shape"/>
							</filter>
							<filter id="filter3_d_16980_14509" x="213" y="130" width="56" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14509"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14509" result="shape"/>
							</filter>
							<filter id="filter4_d_16980_14509" x="273" y="130" width="26" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
							<feOffset dy="2"/>
							<feGaussianBlur stdDeviation="0.5"/>
							<feComposite in2="hardAlpha" operator="out"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14509"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14509" result="shape"/>
							</filter>
							</defs>
						</svg>`,
			},
		];

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
	const globalDesktopPadding = `${newsTickerGlobalPaddingDesktop?.top}${newsTickerGlobalPaddingUnits?.Desktop} ${newsTickerGlobalPaddingDesktop?.right}${newsTickerGlobalPaddingUnits?.Desktop} ${newsTickerGlobalPaddingDesktop?.bottom}${newsTickerGlobalPaddingUnits?.Desktop} ${newsTickerGlobalPaddingDesktop?.left}${newsTickerGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${newsTickerGlobalPaddingTablet?.top}${newsTickerGlobalPaddingUnits?.Tablet} ${newsTickerGlobalPaddingTablet?.right}${newsTickerGlobalPaddingUnits?.Tablet} ${newsTickerGlobalPaddingTablet?.bottom}${newsTickerGlobalPaddingUnits?.Tablet} ${newsTickerGlobalPaddingTablet?.left}${newsTickerGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${newsTickerGlobalPaddingMobile?.top}${newsTickerGlobalPaddingUnits?.Mobile} ${newsTickerGlobalPaddingMobile?.right}${newsTickerGlobalPaddingUnits?.Mobile} ${newsTickerGlobalPaddingMobile?.bottom}${newsTickerGlobalPaddingUnits?.Mobile} ${newsTickerGlobalPaddingMobile?.left}${newsTickerGlobalPaddingUnits?.Mobile}`;
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

	const globalDesktopMargin = `${newsTickerGlobalMarginDesktop?.top}${newsTickerGlobalMarginUnits?.Desktop} ${newsTickerGlobalMarginDesktop?.right}${newsTickerGlobalMarginUnits?.Desktop} ${newsTickerGlobalMarginDesktop?.bottom}${newsTickerGlobalMarginUnits?.Desktop} ${newsTickerGlobalMarginDesktop?.left}${newsTickerGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${newsTickerGlobalMarginTablet?.top}${newsTickerGlobalMarginUnits?.Tablet} ${newsTickerGlobalMarginTablet?.right}${newsTickerGlobalMarginUnits?.Tablet} ${newsTickerGlobalMarginTablet?.bottom}${newsTickerGlobalMarginUnits?.Tablet} ${newsTickerGlobalMarginTablet?.left}${newsTickerGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${newsTickerGlobalMarginMobile?.top}${newsTickerGlobalMarginUnits?.Mobile} ${newsTickerGlobalMarginMobile?.right}${newsTickerGlobalMarginUnits?.Mobile} ${newsTickerGlobalMarginMobile?.bottom}${newsTickerGlobalMarginUnits?.Mobile} ${newsTickerGlobalMarginMobile?.left}${newsTickerGlobalMarginUnits?.Mobile}`;
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
	const globalDesktopBorderWidth = `${newsTickerGlobalBorderDesktop?.top}${newsTickerGlobalBorderUnits?.Desktop} ${newsTickerGlobalBorderDesktop?.right}${newsTickerGlobalBorderUnits?.Desktop} ${newsTickerGlobalBorderDesktop?.bottom}${newsTickerGlobalBorderUnits?.Desktop} ${newsTickerGlobalBorderDesktop?.left}${newsTickerGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${newsTickerGlobalBorderTablet?.top}${newsTickerGlobalBorderUnits?.Tablet} ${newsTickerGlobalBorderTablet?.right}${newsTickerGlobalBorderUnits?.Tablet} ${newsTickerGlobalBorderTablet?.bottom}${newsTickerGlobalBorderUnits?.Tablet} ${newsTickerGlobalBorderTablet?.left}${newsTickerGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${newsTickerGlobalBorderMobile?.top}${newsTickerGlobalBorderUnits?.Mobile} ${newsTickerGlobalBorderMobile?.right}${newsTickerGlobalBorderUnits?.Mobile} ${newsTickerGlobalBorderMobile?.bottom}${newsTickerGlobalBorderUnits?.Mobile} ${newsTickerGlobalBorderMobile?.left}${newsTickerGlobalBorderUnits?.Mobile}`;
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
	const globalDesktopBorderRadiusWidth = `${newsTickerGlobalBorderRadiusDesktop?.top}${newsTickerGlobalBorderRadiusUnits?.Desktop} ${newsTickerGlobalBorderRadiusDesktop?.right}${newsTickerGlobalBorderRadiusUnits?.Desktop} ${newsTickerGlobalBorderRadiusDesktop?.bottom}${newsTickerGlobalBorderRadiusUnits?.Desktop} ${newsTickerGlobalBorderRadiusDesktop?.left}${newsTickerGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${newsTickerGlobalBorderRadiusTablet?.top}${newsTickerGlobalBorderRadiusUnits?.Tablet} ${newsTickerGlobalBorderRadiusTablet?.right}${newsTickerGlobalBorderRadiusUnits?.Tablet} ${newsTickerGlobalBorderRadiusTablet?.bottom}${newsTickerGlobalBorderRadiusUnits?.Tablet} ${newsTickerGlobalBorderRadiusTablet?.left}${newsTickerGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${newsTickerGlobalBorderRadiusMobile?.top}${newsTickerGlobalBorderRadiusUnits?.Mobile} ${newsTickerGlobalBorderRadiusMobile?.right}${newsTickerGlobalBorderRadiusUnits?.Mobile} ${newsTickerGlobalBorderRadiusMobile?.bottom}${newsTickerGlobalBorderRadiusUnits?.Mobile} ${newsTickerGlobalBorderRadiusMobile?.left}${newsTickerGlobalBorderRadiusUnits?.Mobile}`;
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
	const labelContainerDesktopPadding = `${labelContainerPaddingDesktop?.top}${labelContainerPaddingUnits?.Desktop} ${labelContainerPaddingDesktop?.right}${labelContainerPaddingUnits?.Desktop} ${labelContainerPaddingDesktop?.bottom}${labelContainerPaddingUnits?.Desktop} ${labelContainerPaddingDesktop?.left}${labelContainerPaddingUnits?.Desktop}`;
	const labelContainerTabletPadding = `${labelContainerPaddingTablet?.top}${labelContainerPaddingUnits?.Tablet} ${labelContainerPaddingTablet?.right}${labelContainerPaddingUnits?.Tablet} ${labelContainerPaddingTablet?.bottom}${labelContainerPaddingUnits?.Tablet} ${labelContainerPaddingTablet?.left}${labelContainerPaddingUnits?.Tablet}`;
	const labelContainerMobilePadding = `${labelContainerPaddingMobile?.top}${labelContainerPaddingUnits?.Mobile} ${labelContainerPaddingMobile?.right}${labelContainerPaddingUnits?.Mobile} ${labelContainerPaddingMobile?.bottom}${labelContainerPaddingUnits?.Mobile} ${labelContainerPaddingMobile?.left}${labelContainerPaddingUnits?.Mobile}`;
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

	const labelContainerDesktopMargin = `${labelContainerMarginDesktop?.top}${labelContainerMarginUnits?.Desktop} ${labelContainerMarginDesktop?.right}${labelContainerMarginUnits?.Desktop} ${labelContainerMarginDesktop?.bottom}${labelContainerMarginUnits?.Desktop} ${labelContainerMarginDesktop?.left}${labelContainerMarginUnits?.Desktop}`;
	const labelContainerTabletMargin = `${labelContainerMarginTablet?.top}${labelContainerMarginUnits?.Tablet} ${labelContainerMarginTablet?.right}${labelContainerMarginUnits?.Tablet} ${labelContainerMarginTablet?.bottom}${labelContainerMarginUnits?.Tablet} ${labelContainerMarginTablet?.left}${labelContainerMarginUnits?.Tablet}`;
	const labelContainerMobileMargin = `${labelContainerMarginMobile?.top}${labelContainerMarginUnits?.Mobile} ${labelContainerMarginMobile?.right}${labelContainerMarginUnits?.Mobile} ${labelContainerMarginMobile?.bottom}${labelContainerMarginUnits?.Mobile} ${labelContainerMarginMobile?.left}${labelContainerMarginUnits?.Mobile}`;
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
	const labelContainerDesktopBorderWidth = `${labelContainerBorderDesktop?.top}${labelContainerBorderUnits?.Desktop} ${labelContainerBorderDesktop?.right}${labelContainerBorderUnits?.Desktop} ${labelContainerBorderDesktop?.bottom}${labelContainerBorderUnits?.Desktop} ${labelContainerBorderDesktop?.left}${labelContainerBorderUnits?.Desktop}`;
	const labelContainerTabletBorderWidth = `${labelContainerBorderTablet?.top}${labelContainerBorderUnits?.Tablet} ${labelContainerBorderTablet?.right}${labelContainerBorderUnits?.Tablet} ${labelContainerBorderTablet?.bottom}${labelContainerBorderUnits?.Tablet} ${labelContainerBorderTablet?.left}${labelContainerBorderUnits?.Tablet}`;
	const labelContainerMobileBorderWidth = `${labelContainerBorderMobile?.top}${labelContainerBorderUnits?.Mobile} ${labelContainerBorderMobile?.right}${labelContainerBorderUnits?.Mobile} ${labelContainerBorderMobile?.bottom}${labelContainerBorderUnits?.Mobile} ${labelContainerBorderMobile?.left}${labelContainerBorderUnits?.Mobile}`;
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
	const labelContainerDesktopBorderRadiusWidth = `${labelContainerBorderRadiusDesktop?.top}${labelContainerBorderRadiusUnits?.Desktop} ${labelContainerBorderRadiusDesktop?.right}${labelContainerBorderRadiusUnits?.Desktop} ${labelContainerBorderRadiusDesktop?.bottom}${labelContainerBorderRadiusUnits?.Desktop} ${labelContainerBorderRadiusDesktop?.left}${labelContainerBorderRadiusUnits?.Desktop}`;
	const labelContainerTabletBorderRadiusWidth = `${labelContainerBorderRadiusTablet?.top}${labelContainerBorderRadiusUnits?.Tablet} ${labelContainerBorderRadiusTablet?.right}${labelContainerBorderRadiusUnits?.Tablet} ${labelContainerBorderRadiusTablet?.bottom}${labelContainerBorderRadiusUnits?.Tablet} ${labelContainerBorderRadiusTablet?.left}${labelContainerBorderRadiusUnits?.Tablet}`;
	const labelContainerMobileBorderRadiusWidth = `${labelContainerBorderRadiusMobile?.top}${labelContainerBorderRadiusUnits?.Mobile} ${labelContainerBorderRadiusMobile?.right}${labelContainerBorderRadiusUnits?.Mobile} ${labelContainerBorderRadiusMobile?.bottom}${labelContainerBorderRadiusUnits?.Mobile} ${labelContainerBorderRadiusMobile?.left}${labelContainerBorderRadiusUnits?.Mobile}`;
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
	const labelIconDesktopPadding = `${labelIconPaddingDesktop?.top}${labelIconPaddingUnits?.Desktop} ${labelIconPaddingDesktop?.right}${labelIconPaddingUnits?.Desktop} ${labelIconPaddingDesktop?.bottom}${labelIconPaddingUnits?.Desktop} ${labelIconPaddingDesktop?.left}${labelIconPaddingUnits?.Desktop}`;
	const labelIconTabletPadding = `${labelIconPaddingTablet?.top}${labelIconPaddingUnits?.Tablet} ${labelIconPaddingTablet?.right}${labelIconPaddingUnits?.Tablet} ${labelIconPaddingTablet?.bottom}${labelIconPaddingUnits?.Tablet} ${labelIconPaddingTablet?.left}${labelIconPaddingUnits?.Tablet}`;
	const labelIconMobilePadding = `${labelIconPaddingMobile?.top}${labelIconPaddingUnits?.Mobile} ${labelIconPaddingMobile?.right}${labelIconPaddingUnits?.Mobile} ${labelIconPaddingMobile?.bottom}${labelIconPaddingUnits?.Mobile} ${labelIconPaddingMobile?.left}${labelIconPaddingUnits?.Mobile}`;
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

	const labelIconDesktopMargin = `${labelIconMarginDesktop?.top}${labelIconMarginUnits?.Desktop} ${labelIconMarginDesktop?.right}${labelIconMarginUnits?.Desktop} ${labelIconMarginDesktop?.bottom}${labelIconMarginUnits?.Desktop} ${labelIconMarginDesktop?.left}${labelIconMarginUnits?.Desktop}`;
	const labelIconTabletMargin = `${labelIconMarginTablet?.top}${labelIconMarginUnits?.Tablet} ${labelIconMarginTablet?.right}${labelIconMarginUnits?.Tablet} ${labelIconMarginTablet?.bottom}${labelIconMarginUnits?.Tablet} ${labelIconMarginTablet?.left}${labelIconMarginUnits?.Tablet}`;
	const labelIconMobileMargin = `${labelIconMarginMobile?.top}${labelIconMarginUnits?.Mobile} ${labelIconMarginMobile?.right}${labelIconMarginUnits?.Mobile} ${labelIconMarginMobile?.bottom}${labelIconMarginUnits?.Mobile} ${labelIconMarginMobile?.left}${labelIconMarginUnits?.Mobile}`;
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
	const labelIconDesktopBorderWidth = `${labelIconBorderDesktop?.top}${labelIconBorderUnits?.Desktop} ${labelIconBorderDesktop?.right}${labelIconBorderUnits?.Desktop} ${labelIconBorderDesktop?.bottom}${labelIconBorderUnits?.Desktop} ${labelIconBorderDesktop?.left}${labelIconBorderUnits?.Desktop}`;
	const labelIconTabletBorderWidth = `${labelIconBorderTablet?.top}${labelIconBorderUnits?.Tablet} ${labelIconBorderTablet?.right}${labelIconBorderUnits?.Tablet} ${labelIconBorderTablet?.bottom}${labelIconBorderUnits?.Tablet} ${labelIconBorderTablet?.left}${labelIconBorderUnits?.Tablet}`;
	const labelIconMobileBorderWidth = `${labelIconBorderMobile?.top}${labelIconBorderUnits?.Mobile} ${labelIconBorderMobile?.right}${labelIconBorderUnits?.Mobile} ${labelIconBorderMobile?.bottom}${labelIconBorderUnits?.Mobile} ${labelIconBorderMobile?.left}${labelIconBorderUnits?.Mobile}`;
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
	const labelIconDesktopBorderRadiusWidth = `${labelIconBorderRadiusDesktop?.top}${labelIconBorderRadiusUnits?.Desktop} ${labelIconBorderRadiusDesktop?.right}${labelIconBorderRadiusUnits?.Desktop} ${labelIconBorderRadiusDesktop?.bottom}${labelIconBorderRadiusUnits?.Desktop} ${labelIconBorderRadiusDesktop?.left}${labelIconBorderRadiusUnits?.Desktop}`;
	const labelIconTabletBorderRadiusWidth = `${labelIconBorderRadiusTablet?.top}${labelIconBorderRadiusUnits?.Tablet} ${labelIconBorderRadiusTablet?.right}${labelIconBorderRadiusUnits?.Tablet} ${labelIconBorderRadiusTablet?.bottom}${labelIconBorderRadiusUnits?.Tablet} ${labelIconBorderRadiusTablet?.left}${labelIconBorderRadiusUnits?.Tablet}`;
	const labelIconMobileBorderRadiusWidth = `${labelIconBorderRadiusMobile?.top}${labelIconBorderRadiusUnits?.Mobile} ${labelIconBorderRadiusMobile?.right}${labelIconBorderRadiusUnits?.Mobile} ${labelIconBorderRadiusMobile?.bottom}${labelIconBorderRadiusUnits?.Mobile} ${labelIconBorderRadiusMobile?.left}${labelIconBorderRadiusUnits?.Mobile}`;
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
	const tickerTimerDesktopPadding = `${tickerTimerPaddingDesktop?.top}${tickerTimerPaddingUnits?.Desktop} ${tickerTimerPaddingDesktop?.right}${tickerTimerPaddingUnits?.Desktop} ${tickerTimerPaddingDesktop?.bottom}${tickerTimerPaddingUnits?.Desktop} ${tickerTimerPaddingDesktop?.left}${tickerTimerPaddingUnits?.Desktop}`;
	const tickerTimerTabletPadding = `${tickerTimerPaddingTablet?.top}${tickerTimerPaddingUnits?.Tablet} ${tickerTimerPaddingTablet?.right}${tickerTimerPaddingUnits?.Tablet} ${tickerTimerPaddingTablet?.bottom}${tickerTimerPaddingUnits?.Tablet} ${tickerTimerPaddingTablet?.left}${tickerTimerPaddingUnits?.Tablet}`;
	const tickerTimerMobilePadding = `${tickerTimerPaddingMobile?.top}${tickerTimerPaddingUnits?.Mobile} ${tickerTimerPaddingMobile?.right}${tickerTimerPaddingUnits?.Mobile} ${tickerTimerPaddingMobile?.bottom}${tickerTimerPaddingUnits?.Mobile} ${tickerTimerPaddingMobile?.left}${tickerTimerPaddingUnits?.Mobile}`;
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

	const tickerTimerDesktopMargin = `${tickerTimerMarginDesktop?.top}${tickerTimerMarginUnits?.Desktop} ${tickerTimerMarginDesktop?.right}${tickerTimerMarginUnits?.Desktop} ${tickerTimerMarginDesktop?.bottom}${tickerTimerMarginUnits?.Desktop} ${tickerTimerMarginDesktop?.left}${tickerTimerMarginUnits?.Desktop}`;
	const tickerTimerTabletMargin = `${tickerTimerMarginTablet?.top}${tickerTimerMarginUnits?.Tablet} ${tickerTimerMarginTablet?.right}${tickerTimerMarginUnits?.Tablet} ${tickerTimerMarginTablet?.bottom}${tickerTimerMarginUnits?.Tablet} ${tickerTimerMarginTablet?.left}${tickerTimerMarginUnits?.Tablet}`;
	const tickerTimerMobileMargin = `${tickerTimerMarginMobile?.top}${tickerTimerMarginUnits?.Mobile} ${tickerTimerMarginMobile?.right}${tickerTimerMarginUnits?.Mobile} ${tickerTimerMarginMobile?.bottom}${tickerTimerMarginUnits?.Mobile} ${tickerTimerMarginMobile?.left}${tickerTimerMarginUnits?.Mobile}`;
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
	const tickerTimerDesktopBorderWidth = `${tickerTimerBorderDesktop?.top}${tickerTimerBorderUnits?.Desktop} ${tickerTimerBorderDesktop?.right}${tickerTimerBorderUnits?.Desktop} ${tickerTimerBorderDesktop?.bottom}${tickerTimerBorderUnits?.Desktop} ${tickerTimerBorderDesktop?.left}${tickerTimerBorderUnits?.Desktop}`;
	const tickerTimerTabletBorderWidth = `${tickerTimerBorderTablet?.top}${tickerTimerBorderUnits?.Tablet} ${tickerTimerBorderTablet?.right}${tickerTimerBorderUnits?.Tablet} ${tickerTimerBorderTablet?.bottom}${tickerTimerBorderUnits?.Tablet} ${tickerTimerBorderTablet?.left}${tickerTimerBorderUnits?.Tablet}`;
	const tickerTimerMobileBorderWidth = `${tickerTimerBorderMobile?.top}${tickerTimerBorderUnits?.Mobile} ${tickerTimerBorderMobile?.right}${tickerTimerBorderUnits?.Mobile} ${tickerTimerBorderMobile?.bottom}${tickerTimerBorderUnits?.Mobile} ${tickerTimerBorderMobile?.left}${tickerTimerBorderUnits?.Mobile}`;
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
	const tickerTimerDesktopBorderRadiusWidth = `${tickerTimerBorderRadiusDesktop?.top}${tickerTimerBorderRadiusUnits?.Desktop} ${tickerTimerBorderRadiusDesktop?.right}${tickerTimerBorderRadiusUnits?.Desktop} ${tickerTimerBorderRadiusDesktop?.bottom}${tickerTimerBorderRadiusUnits?.Desktop} ${tickerTimerBorderRadiusDesktop?.left}${tickerTimerBorderRadiusUnits?.Desktop}`;
	const tickerTimerTabletBorderRadiusWidth = `${tickerTimerBorderRadiusTablet?.top}${tickerTimerBorderRadiusUnits?.Tablet} ${tickerTimerBorderRadiusTablet?.right}${tickerTimerBorderRadiusUnits?.Tablet} ${tickerTimerBorderRadiusTablet?.bottom}${tickerTimerBorderRadiusUnits?.Tablet} ${tickerTimerBorderRadiusTablet?.left}${tickerTimerBorderRadiusUnits?.Tablet}`;
	const tickerTimerMobileBorderRadiusWidth = `${tickerTimerBorderRadiusMobile?.top}${tickerTimerBorderRadiusUnits?.Mobile} ${tickerTimerBorderRadiusMobile?.right}${tickerTimerBorderRadiusUnits?.Mobile} ${tickerTimerBorderRadiusMobile?.bottom}${tickerTimerBorderRadiusUnits?.Mobile} ${tickerTimerBorderRadiusMobile?.left}${tickerTimerBorderRadiusUnits?.Mobile}`;
	/** End Ticker Timer Border Radius */

	/* Start Load Google Fonts */
	useEffect(() => {
		loadGoogleFont(tickerLabelFontFamily);
	}, [tickerLabelFontFamily]);

	/* End Load Google Fonts */

	const allBlockStyle = useMemo(() => {
        let style = `
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner{
                ${newsTickerGlobalNormalBackgroundType === "gradient"
                    ? `background: ${
                        newsTickerGlobalNormalCustomGradientSwitcher && newsTickerGlobalNormalCustomGradientInputValue
                            ? newsTickerGlobalNormalCustomGradientInputValue
                            : newsTickerGlobalNormalGradientColor
                    };`
                    : newsTickerGlobalNormalBackgroundImageUrl && newsTickerGlobalNormalBackgroundImageUrl !== "null"
                    ? `
                        ${newsTickerGlobalNormalBackgroundImageUrl ? `background-image: url(${newsTickerGlobalNormalBackgroundImageUrl});` : ""}
                        ${newsTickerGlobalNormalBackgroundImagePosition ? `background-position: ${newsTickerGlobalNormalBackgroundImagePosition};` : ""}
                        ${newsTickerGlobalNormalBackgroundImageAttachment ? `background-attachment: ${newsTickerGlobalNormalBackgroundImageAttachment};` : ""}
                        ${newsTickerGlobalNormalBackgroundImageRepeat ? `background-repeat: ${newsTickerGlobalNormalBackgroundImageRepeat};` : ""}
                        ${newsTickerGlobalNormalBackgroundImageSize ? `background-size: ${newsTickerGlobalNormalBackgroundImageSize};` : ""}
                    `
                    : `${newsTickerGlobalNormalClassicColor ? `background: ${newsTickerGlobalNormalClassicColor};` : ""}`
                }
                ${globalDesktopPadding && newsTickerGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ""}
                ${globalDesktopMargin && newsTickerGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ""}
                ${newsTickerGlobalBorder ? `border: ${newsTickerGlobalBorder};` : ""}
                ${globalDesktopBorderWidth && newsTickerGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
                ${globalDesktopBorderRadiusWidth && newsTickerGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
                ${newsTickerGlobalBorderColor ? `border-color: ${newsTickerGlobalBorderColor};` : ""}
                ${newsTickerGlobalBoxShadowCssValue ? `box-shadow: ${newsTickerGlobalBoxShadowCssValue};` : ""}
                ${newsTickerPositionType === "default" ? `position: relative;` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" ? `width: 100%;` : ""}
                ${newsTickerPositionType !== "default" ? `position: ${newsTickerPositionType};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "left" && newsTickerHZLeftOffset?.Desktop !== undefined ? `left: ${newsTickerHZLeftOffset?.Desktop}${newsTickerHZLeftOffsetUnits?.Desktop};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "right" && newsTickerHZRightOffset?.Desktop !== undefined ? `right: ${newsTickerHZRightOffset?.Desktop}${newsTickerHZRightOffsetUnits?.Desktop};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "top" && newsTickerVRTopOffset?.Desktop !== undefined ? `top: ${newsTickerVRTopOffset?.Desktop}${newsTickerVRTopOffsetUnits?.Desktop};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "bottom" && newsTickerVRBottomOffset?.Desktop !== undefined ? `bottom: ${newsTickerVRBottomOffset?.Desktop}${newsTickerVRBottomOffsetUnits?.Desktop};` : ""}
                ${newsTickerGlobalZIndex?.Desktop ? `z-index: ${newsTickerGlobalZIndex?.Desktop};` : ""}
                ${newsTickerOverflow !== "default" ? `overflow: ${newsTickerOverflow};` : ""}
				${labelPosition === "right" ? "flex-direction: row-reverse;" : "flex-direction: row;"}
                transition: all .3s ease-in-out;
            }
    
            .fb-news-ticker-wrapper.${blockID}:hover .fb-news-ticker-inner{
                ${newsTickerGlobalHoverBackgroundType === "gradient"
                    ? `background: ${
                        newsTickerGlobalHoverCustomGradientSwitcher && newsTickerGlobalHoverCustomGradientInputValue
                            ? newsTickerGlobalHoverCustomGradientInputValue
                            : newsTickerGlobalHoverGradientColor
                    };`
                    : newsTickerGlobalHoverBackgroundImageUrl && newsTickerGlobalHoverBackgroundImageUrl !== "null"
                    ? `
                        ${newsTickerGlobalHoverBackgroundImageUrl ? `background-image: url(${newsTickerGlobalHoverBackgroundImageUrl});` : ""}
                        ${newsTickerGlobalHoverBackgroundImagePosition ? `background-position: ${newsTickerGlobalHoverBackgroundImagePosition};` : ""}
                        ${newsTickerGlobalHoverBackgroundImageAttachment ? `background-attachment: ${newsTickerGlobalHoverBackgroundImageAttachment};` : ""}
                        ${newsTickerGlobalHoverBackgroundImageRepeat ? `background-repeat: ${newsTickerGlobalHoverBackgroundImageRepeat};` : ""}
                        ${newsTickerGlobalHoverBackgroundImageSize ? `background-size: ${newsTickerGlobalHoverBackgroundImageSize};` : ""}
                    `
                    : `${newsTickerGlobalHoverClassicColor ? `background: ${newsTickerGlobalHoverClassicColor};` : ""}`
                }
                ${newsTickerGlobalBorderHoverColor ? `border-color: ${newsTickerGlobalBorderHoverColor};` : ""}
                ${newsTickerGlobalBoxShadowHoverCssValue ? `box-shadow: ${newsTickerGlobalBoxShadowHoverCssValue};` : ""}
            }
    
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
                ${labelContainerNormalBackgroundType === "gradient"
                    ? `background: ${
                        labelContainerNormalCustomGradientSwitcher && labelContainerNormalCustomGradientInputValue
                            ? labelContainerNormalCustomGradientInputValue
                            : labelContainerNormalGradientColor
                    };`
                    : labelContainerNormalBackgroundImageUrl && labelContainerNormalBackgroundImageUrl !== "null"
                    ? `
                        ${labelContainerNormalBackgroundImageUrl ? `background-image: url(${labelContainerNormalBackgroundImageUrl});` : ""}
                        ${labelContainerNormalBackgroundImagePosition ? `background-position: ${labelContainerNormalBackgroundImagePosition};` : ""}
                        ${labelContainerNormalBackgroundImageAttachment ? `background-attachment: ${labelContainerNormalBackgroundImageAttachment};` : ""}
                        ${labelContainerNormalBackgroundImageRepeat ? `background-repeat: ${labelContainerNormalBackgroundImageRepeat};` : ""}
                        ${labelContainerNormalBackgroundImageSize ? `background-size: ${labelContainerNormalBackgroundImageSize};` : ""}
                    `
                    : `${labelContainerNormalClassicColor ? `background: ${labelContainerNormalClassicColor};` : ""}`
                }
                ${labelContainerDesktopPadding && labelContainerPaddingDesktop?.top ? `padding: ${labelContainerDesktopPadding};` : ""}
                ${labelContainerDesktopMargin && labelContainerMarginDesktop?.top ? `margin: ${labelContainerDesktopMargin};` : ""}
                ${labelContainerBorder ? `border: ${labelContainerBorder};` : ""}
                ${labelContainerDesktopBorderWidth && labelContainerBorderDesktop?.top ? `border-width: ${labelContainerDesktopBorderWidth};` : ""}
                ${labelContainerDesktopBorderRadiusWidth && labelContainerBorderRadiusDesktop?.top ? `border-radius: ${labelContainerDesktopBorderRadiusWidth};` : ""}
                ${labelContainerBorderColor ? `border-color: ${labelContainerBorderColor};` : ""}
                transition: all .3s ease-in-out;
            }
    
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container:hover {
                ${labelContainerHoverBackgroundType === "gradient"
                    ? `background: ${
                        labelContainerHoverCustomGradientSwitcher && labelContainerHoverCustomGradientInputValue
                            ? labelContainerHoverCustomGradientInputValue
                            : labelContainerHoverGradientColor
                    };`
                    : labelContainerHoverBackgroundImageUrl && labelContainerHoverBackgroundImageUrl !== "null"
                    ? `
                        ${labelContainerHoverBackgroundImageUrl ? `background-image: url(${labelContainerHoverBackgroundImageUrl});` : ""}
                        ${labelContainerHoverBackgroundImagePosition ? `background-position: ${labelContainerHoverBackgroundImagePosition};` : ""}
                        ${labelContainerHoverBackgroundImageAttachment ? `background-attachment: ${labelContainerHoverBackgroundImageAttachment};` : ""}
                        ${labelContainerHoverBackgroundImageRepeat ? `background-repeat: ${labelContainerHoverBackgroundImageRepeat};` : ""}
                        ${labelContainerHoverBackgroundImageSize ? `background-size: ${labelContainerHoverBackgroundImageSize};` : ""}
                    `
                    : `${labelContainerHoverClassicColor ? `background: ${labelContainerHoverClassicColor};` : ""}`
                }
                ${labelContainerBorderHoverColor ? `border-color: ${labelContainerBorderHoverColor};` : ""}
            }
    
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
                ${labelIconNormalBackgroundType === "gradient"
                ? `background: ${
                labelIconNormalCustomGradientSwitcher && labelIconNormalCustomGradientInputValue
                ? labelIconNormalCustomGradientInputValue
                : labelIconNormalGradientColor
                };`
                : labelIconNormalBackgroundImageUrl && labelIconNormalBackgroundImageUrl !== "null"
                ? `
                ${labelIconNormalBackgroundImageUrl ? `background-image: url(${labelIconNormalBackgroundImageUrl});` : ""}
                ${labelIconNormalBackgroundImagePosition ? `background-position: ${labelIconNormalBackgroundImagePosition};` :
                ""}
                ${labelIconNormalBackgroundImageAttachment ? `background-attachment:
                ${labelIconNormalBackgroundImageAttachment};` : ""}
                ${labelIconNormalBackgroundImageRepeat ? `background-repeat: ${labelIconNormalBackgroundImageRepeat};` : ""}
                ${labelIconNormalBackgroundImageSize ? `background-size: ${labelIconNormalBackgroundImageSize};` : ""}
                `
                : `${labelIconNormalClassicColor ? `background: ${labelIconNormalClassicColor};` : ""}`
                }
                ${labelIconDesktopPadding && labelIconPaddingDesktop?.top ? `padding: ${labelIconDesktopPadding};` : ""}
                ${labelIconDesktopMargin && labelIconMarginDesktop?.top ? `margin: ${labelIconDesktopMargin};` : ""}
                ${labelIconBorder ? `border: ${labelIconBorder};` : ""}
                ${labelIconDesktopBorderWidth && labelIconBorderDesktop?.top ? `border-width:
                ${labelIconDesktopBorderWidth};` : ""}
                ${labelIconDesktopBorderRadiusWidth && labelIconBorderRadiusDesktop?.top ? `border-radius:
                ${labelIconDesktopBorderRadiusWidth};` : ""}
                ${labelIconBorderColor ? `border-color: ${labelIconBorderColor};` : ""}
                transition: all .3s ease-in-out;
            }

            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper:hover{
                ${labelIconHoverBackgroundType === "gradient"
                    ? `background: ${
                        labelIconHoverCustomGradientSwitcher && labelIconHoverCustomGradientInputValue
                            ? labelIconHoverCustomGradientInputValue
                            : labelIconHoverGradientColor
                    };`
                    : labelIconHoverBackgroundImageUrl && labelIconHoverBackgroundImageUrl !== "null"
                    ? `
                        ${labelIconHoverBackgroundImageUrl ? `background-image: url(${labelIconHoverBackgroundImageUrl});` : ""}
                        ${labelIconHoverBackgroundImagePosition ? `background-position: ${labelIconHoverBackgroundImagePosition};` : ""}
                        ${labelIconHoverBackgroundImageAttachment ? `background-attachment: ${labelIconHoverBackgroundImageAttachment};` : ""}
                        ${labelIconHoverBackgroundImageRepeat ? `background-repeat: ${labelIconHoverBackgroundImageRepeat};` : ""}
                        ${labelIconHoverBackgroundImageSize ? `background-size: ${labelIconHoverBackgroundImageSize};` : ""}
                    `
                    : `${labelIconHoverClassicColor ? `background: ${labelIconHoverClassicColor};` : ""}`
                }
                ${labelIconBorderHoverColor ? `border-color: ${labelIconBorderHoverColor};` : ""}
            }

            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label span{
                ${tickerLabelTypoSwitcher?.fontFamily === true && tickerLabelTypographyData?.fontFamily ? `font-family: ${tickerLabelTypographyData?.fontFamily};` : ''}
				${tickerLabelTypoSwitcher?.fontSize === true && tickerLabelTypographyData?.fontSize ? `font-size: ${tickerLabelTypographyData?.fontSize};` : ''}
				${tickerLabelTypoSwitcher?.fontWeight === true && tickerLabelTypographyData?.fontWeight ? `font-weight: ${tickerLabelTypographyData?.fontWeight};` : ''}
				${tickerLabelTypoSwitcher?.fontStyle === true && tickerLabelTypographyData?.fontStyle ? `font-style: ${tickerLabelTypographyData?.fontStyle};` : ''}
				${tickerLabelTypoSwitcher?.textTransform === true && tickerLabelTypographyData?.textTransform ? `text-transform: ${tickerLabelTypographyData?.textTransform};` : ''}
				${tickerLabelTypoSwitcher?.textDecoration === true && tickerLabelTypographyData?.textDecoration ? `text-decoration: ${tickerLabelTypographyData?.textDecoration};` : ''}
				${tickerLabelTypoSwitcher?.letterSpacing === true && tickerLabelTypographyData?.letterSpacing ? `letter-spacing: ${tickerLabelTypographyData?.letterSpacing};` : ''}
				${tickerLabelTypoSwitcher?.lineHeight === true && tickerLabelTypographyData?.lineHeight ? `line-height: ${tickerLabelTypographyData?.lineHeight};` : ''}

                ${tickerLabelTypoSwitcher?.fontFamily === false && tickerLabelFontFamily && tickerLabelFontFamily !== "Default" ? `font-family: ${tickerLabelFontFamily};` : ''}
                ${tickerLabelTypoSwitcher?.fontSize === false && tickerLabelFontSize?.Desktop && tickerLabelFontSizeUnits?.Desktop ? `font-size: ${tickerLabelFontSize?.Desktop}${tickerLabelFontSizeUnits?.Desktop};` : ''}
                ${tickerLabelTypoSwitcher?.fontWeight === false && tickerLabelFontWeight ? `font-weight: ${tickerLabelFontWeight};` : ''}
                ${tickerLabelTypoSwitcher?.fontStyle === false && tickerLabelFontStyle ? `font-style: ${tickerLabelFontStyle};` : ''}
                ${tickerLabelTypoSwitcher?.textTransform === false && tickerLabelTextTransform ? `text-transform: ${tickerLabelTextTransform};` : ''}
                ${tickerLabelTypoSwitcher?.textDecoration === false && tickerLabelTextDecoration ? `text-decoration: ${tickerLabelTextDecoration};` : ''}
                ${tickerLabelTypoSwitcher?.letterSpacing === false && tickerLabelLetterSpacing?.Desktop && tickerLabelLetterSpacingUnits?.Desktop ? `letter-spacing: ${tickerLabelLetterSpacing?.Desktop}${tickerLabelLetterSpacingUnits?.Desktop};` : ''}
                ${tickerLabelTypoSwitcher?.lineHeight === false && tickerLabelLineHeight?.Desktop && tickerLabelLineHeightUnits?.Desktop ? `line-height: ${tickerLabelLineHeight?.Desktop}${tickerLabelLineHeightUnits?.Desktop};` : ''}
				${labelTextColor ? `color: ${labelTextColor};` : ""}
            }
			
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label:hover span{
				${labelTextHoverColor ? `color: ${labelTextHoverColor};` : ""}
			}
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                ${iconSize?.Desktop ? `width: ${iconSize?.Desktop}${iconSizeUnits?.Desktop};` : ""}
                ${iconSize?.Desktop ? `height: ${iconSize?.Desktop}${iconSizeUnits?.Desktop};` : ""}
                ${labelIconColor ? `fill: ${labelIconColor};` : ""}
            }
    
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper:hover svg{
                ${labelIconHoverColor ? `fill: ${labelIconHoverColor};` : ""}
            }
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time{
				${tickerTimerNormalBackgroundType === "gradient"
                    ? `background: ${
                        tickerTimerNormalCustomGradientSwitcher && tickerTimerNormalCustomGradientInputValue
                            ? tickerTimerNormalCustomGradientInputValue
                            : tickerTimerNormalGradientColor
                    };`
                    : tickerTimerNormalBackgroundImageUrl && tickerTimerNormalBackgroundImageUrl !== "null"
                    ? `
                        ${tickerTimerNormalBackgroundImageUrl ? `background-image: url(${tickerTimerNormalBackgroundImageUrl});` : ""}
                        ${tickerTimerNormalBackgroundImagePosition ? `background-position: ${tickerTimerNormalBackgroundImagePosition};` : ""}
                        ${tickerTimerNormalBackgroundImageAttachment ? `background-attachment: ${tickerTimerNormalBackgroundImageAttachment};` : ""}
                        ${tickerTimerNormalBackgroundImageRepeat ? `background-repeat: ${tickerTimerNormalBackgroundImageRepeat};` : ""}
                        ${tickerTimerNormalBackgroundImageSize ? `background-size: ${tickerTimerNormalBackgroundImageSize};` : ""}
                    `
                    : `${tickerTimerNormalClassicColor ? `background: ${tickerTimerNormalClassicColor};` : ""}`
                }
                ${tickerTimerDesktopPadding && tickerTimerPaddingDesktop?.top ? `padding: ${tickerTimerDesktopPadding};` : ""}
                ${tickerTimerDesktopMargin && tickerTimerMarginDesktop?.top ? `margin: ${tickerTimerDesktopMargin};` : ""}
                ${tickerTimerBorder ? `border: ${tickerTimerBorder};` : ""}
                ${tickerTimerDesktopBorderWidth && tickerTimerBorderDesktop?.top ? `border-width: ${tickerTimerDesktopBorderWidth};` : ""}
                ${tickerTimerDesktopBorderRadiusWidth && tickerTimerBorderRadiusDesktop?.top ? `border-radius: ${tickerTimerDesktopBorderRadiusWidth};` : ""}
                ${tickerTimerBorderColor ? `border-color: ${tickerTimerBorderColor};` : ""}
                transition: all .3s ease-in-out;
			}
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time:hover{
				${tickerTimerHoverBackgroundType === "gradient"
                    ? `background: ${
                        tickerTimerHoverCustomGradientSwitcher && tickerTimerHoverCustomGradientInputValue
                            ? tickerTimerHoverCustomGradientInputValue
                            : tickerTimerHoverGradientColor
                    };`
                    : tickerTimerHoverBackgroundImageUrl && tickerTimerHoverBackgroundImageUrl !== "null"
                    ? `
                        ${tickerTimerHoverBackgroundImageUrl ? `background-image: url(${tickerTimerHoverBackgroundImageUrl});` : ""}
                        ${tickerTimerHoverBackgroundImagePosition ? `background-position: ${tickerTimerHoverBackgroundImagePosition};` : ""}
                        ${tickerTimerHoverBackgroundImageAttachment ? `background-attachment: ${tickerTimerHoverBackgroundImageAttachment};` : ""}
                        ${tickerTimerHoverBackgroundImageRepeat ? `background-repeat: ${tickerTimerHoverBackgroundImageRepeat};` : ""}
                        ${tickerTimerHoverBackgroundImageSize ? `background-size: ${tickerTimerHoverBackgroundImageSize};` : ""}
                    `
                    : `${tickerTimerHoverClassicColor ? `background: ${tickerTimerHoverClassicColor};` : ""}`
                }
                ${tickerTimerBorderHoverColor ? `border-color: ${tickerTimerBorderHoverColor};` : ""}
			}
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time span{
				${tickerTimerTypoSwitcher?.fontFamily === true && tickerTimerTypographyData?.fontFamily ? `font-family: ${tickerTimerTypographyData?.fontFamily};` : ''}
				${tickerTimerTypoSwitcher?.fontSize === true && tickerTimerTypographyData?.fontSize ? `font-size: ${tickerTimerTypographyData?.fontSize};` : ''}
				${tickerTimerTypoSwitcher?.fontWeight === true && tickerTimerTypographyData?.fontWeight ? `font-weight: ${tickerTimerTypographyData?.fontWeight};` : ''}
				${tickerTimerTypoSwitcher?.fontStyle === true && tickerTimerTypographyData?.fontStyle ? `font-style: ${tickerTimerTypographyData?.fontStyle};` : ''}
				${tickerTimerTypoSwitcher?.textTransform === true && tickerTimerTypographyData?.textTransform ? `text-transform: ${tickerTimerTypographyData?.textTransform};` : ''}
				${tickerTimerTypoSwitcher?.textDecoration === true && tickerTimerTypographyData?.textDecoration ? `text-decoration: ${tickerTimerTypographyData?.textDecoration};` : ''}
				${tickerTimerTypoSwitcher?.letterSpacing === true && tickerTimerTypographyData?.letterSpacing ? `letter-spacing: ${tickerTimerTypographyData?.letterSpacing};` : ''}
				${tickerTimerTypoSwitcher?.lineHeight === true && tickerTimerTypographyData?.lineHeight ? `line-height: ${tickerTimerTypographyData?.lineHeight};` : ''}

                ${tickerTimerTypoSwitcher?.fontFamily === false && tickerTimerFontFamily && tickerTimerFontFamily !== "Default" ? `font-family: ${tickerTimerFontFamily};` : ''}
                ${tickerTimerTypoSwitcher?.fontSize === false && tickerTimerFontSize?.Desktop && tickerTimerFontSizeUnits?.Desktop ? `font-size: ${tickerTimerFontSize?.Desktop}${tickerTimerFontSizeUnits?.Desktop};` : ''}
                ${tickerTimerTypoSwitcher?.fontWeight === false && tickerTimerFontWeight ? `font-weight: ${tickerTimerFontWeight};` : ''}
                ${tickerTimerTypoSwitcher?.fontStyle === false && tickerTimerFontStyle ? `font-style: ${tickerTimerFontStyle};` : ''}
                ${tickerTimerTypoSwitcher?.textTransform === false && tickerTimerTextTransform ? `text-transform: ${tickerTimerTextTransform};` : ''}
                ${tickerTimerTypoSwitcher?.textDecoration === false && tickerTimerTextDecoration ? `text-decoration: ${tickerTimerTextDecoration};` : ''}
                ${tickerTimerTypoSwitcher?.letterSpacing === false && tickerTimerLetterSpacing?.Desktop && tickerTimerLetterSpacingUnits?.Desktop ? `letter-spacing: ${tickerTimerLetterSpacing?.Desktop}${tickerTimerLetterSpacingUnits?.Desktop};` : ''}
                ${tickerTimerTypoSwitcher?.lineHeight === false && tickerTimerLineHeight?.Desktop && tickerTimerLineHeightUnits?.Desktop ? `line-height: ${tickerTimerLineHeight?.Desktop}${tickerTimerLineHeightUnits?.Desktop};` : ''}
				${tickerTimerColor ? `color: ${tickerTimerColor};` : ""}
			}
			
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time:hover span{
				${tickerTimerHoverColor ? `color: ${tickerTimerHoverColor};` : ""}
			}

			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows {
				${navigationPosition === "right" ? "right: 20px;" : "left: 20px;"}
			}
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows svg path{
				${navigationIconColor ? `stroke: ${navigationIconColor};` : ""}
			}
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows .fb-news-ticker-pause-btn svg path{
				${navigationIconColor ? `fill: ${navigationIconColor};` : ""}
			}
			.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows:hover svg path{
				${navigationIconHoverColor ? `stroke: ${navigationIconHoverColor};` : ""}
			}
            @media only screen and (max-width: 1024px) {
                .fb-news-ticker-wrapper.${blockID} {
                    ${newsTickerPositionType !== "default" ? `position: ${newsTickerPositionType};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "left" && newsTickerHZLeftOffset?.Tablet !== undefined ? `left: ${newsTickerHZLeftOffset?.Tablet}${newsTickerHZLeftOffsetUnits?.Tablet};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "right" && newsTickerHZRightOffset?.Tablet !== undefined ? `right: ${newsTickerHZRightOffset?.Tablet}${newsTickerHZRightOffsetUnits?.Tablet};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "top" && newsTickerVRTopOffset?.Tablet !== undefined ? `top: ${newsTickerVRTopOffset?.Tablet}${newsTickerVRTopOffsetUnits?.Tablet};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "bottom" && newsTickerVRBottomOffset?.Tablet !== undefined ? `bottom: ${newsTickerVRBottomOffset?.Tablet}${newsTickerVRBottomOffsetUnits?.Tablet};` : ""}
                    ${newsTickerGlobalZIndex?.Tablet ? `z-index: ${newsTickerGlobalZIndex?.Tablet};` : ""}
                    ${globalTabletPadding && newsTickerGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ""}
                    ${globalTabletMargin && newsTickerGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ""}
                    ${globalTabletBorderWidth && newsTickerGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ""}
                    ${globalTabletBorderRadiusWidth && newsTickerGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
                    ${labelIconTabletPadding && labelIconPaddingTablet?.top ? `padding: ${labelIconTabletPadding};` : ""}
                    ${labelIconTabletMargin && labelIconMarginTablet?.top ? `margin: ${labelIconTabletMargin};` : ""}
                    ${labelIconTabletBorderWidth && labelIconBorderTablet?.top ? `border-width:
                    ${labelIconTabletBorderWidth};` : ""}
                    ${labelIconTabletBorderRadiusWidth && labelIconBorderRadiusTablet?.top ? `border-radius:
                    ${labelIconTabletBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
                    ${labelContainerTabletPadding && labelContainerPaddingTablet?.top ? `padding: ${labelContainerTabletPadding};` : ""}
                    ${labelContainerTabletMargin && labelContainerMarginTablet?.top ? `margin: ${labelContainerTabletMargin};` : ""}
                    ${labelContainerTabletBorderWidth && labelContainerBorderTablet?.top ? `border-width: ${labelContainerTabletBorderWidth};` : ""}
                    ${labelContainerTabletBorderRadiusWidth && labelContainerBorderRadiusTablet?.top ? `border-radius: ${labelContainerTabletBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                    ${iconSize?.Tablet ? `width: ${iconSize?.Tablet}${iconSizeUnits?.Tablet};` : ""}
                    ${iconSize?.Tablet ? `height: ${iconSize?.Tablet}${iconSizeUnits?.Tablet};` : ""}
                }
				.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time{
					${tickerTimerTabletPadding && tickerTimerPaddingTablet?.top ? `padding: ${tickerTimerTabletPadding};` : ""}
					${tickerTimerTabletMargin && tickerTimerMarginTablet?.top ? `margin: ${tickerTimerTabletMargin};` : ""}
					${tickerTimerTabletBorderWidth && tickerTimerBorderTablet?.top ? `border-width: ${tickerTimerTabletBorderWidth};` : ""}
					${tickerTimerTabletBorderRadiusWidth && tickerTimerBorderRadiusTablet?.top ? `border-radius: ${tickerTimerTabletBorderRadiusWidth};` : ""}
				}
            }
    
            @media only screen and (max-width: 767px) {
                .fb-news-ticker-wrapper.${blockID} {
                    ${newsTickerPositionType !== "default" ? `position: ${newsTickerPositionType};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "left" && newsTickerHZLeftOffset?.Mobile !== undefined ? `left: ${newsTickerHZLeftOffset?.Mobile}${newsTickerHZLeftOffsetUnits?.Mobile};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "right" && newsTickerHZRightOffset?.Mobile !== undefined ? `right: ${newsTickerHZRightOffset?.Mobile}${newsTickerHZRightOffsetUnits?.Mobile};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "top" && newsTickerVRTopOffset?.Mobile !== undefined ? `top: ${newsTickerVRTopOffset?.Mobile}${newsTickerVRTopOffsetUnits?.Mobile};` : ""}
                    ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "bottom" && newsTickerVRBottomOffset?.Mobile !== undefined ? `bottom: ${newsTickerVRBottomOffset?.Mobile}${newsTickerVRBottomOffsetUnits?.Mobile};` : ""}
                    ${newsTickerGlobalZIndex?.Mobile ? `z-index: ${newsTickerGlobalZIndex?.Mobile};` : ""}
                    ${globalMobilePadding && newsTickerGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ""}
                    ${globalMobileMargin && newsTickerGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ""}
                    ${globalMobileBorderWidth && newsTickerGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ""}
                    ${globalMobileBorderRadiusWidth && newsTickerGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
                    ${labelContainerMobilePadding && labelContainerPaddingMobile?.top ? `padding: ${labelContainerMobilePadding};` : ""}
                    ${labelContainerMobileMargin && labelContainerMarginMobile?.top ? `margin: ${labelContainerMobileMargin};` : ""}
                    ${labelContainerMobileBorderWidth && labelContainerBorderMobile?.top ? `border-width: ${labelContainerMobileBorderWidth};` : ""}
                    ${labelContainerMobileBorderRadiusWidth && labelContainerBorderRadiusMobile?.top ? `border-radius: ${labelContainerMobileBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
                    ${labelIconMobilePadding && labelIconPaddingMobile?.top ? `padding: ${labelIconMobilePadding};` : ""}
                    ${labelIconMobileMargin && labelIconMarginMobile?.top ? `margin: ${labelIconMobileMargin};` : ""}
                    ${labelIconMobileBorderWidth && labelIconBorderMobile?.top ? `border-width:
                    ${labelIconMobileBorderWidth};` : ""}
                    ${labelIconMobileBorderRadiusWidth && labelIconBorderRadiusMobile?.top ? `border-radius:
                    ${labelIconMobileBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                    ${iconSize?.Mobile ? `width: ${iconSize?.Mobile}${iconSizeUnits?.Mobile};` : ""}
                    ${iconSize?.Mobile ? `height: ${iconSize?.Mobile}${iconSizeUnits?.Mobile};` : ""}
                }
				.fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time{
					${tickerTimerMobilePadding && tickerTimerPaddingMobile?.top ? `padding: ${tickerTimerMobilePadding};` : ""} 
					${tickerTimerMobileMargin && tickerTimerMarginMobile?.top ? `margin: ${tickerTimerMobileMargin};` : ""}
					${tickerTimerMobileBorderWidth && tickerTimerBorderMobile?.top ? `border-width: ${tickerTimerMobileBorderWidth};` : ""}
					${tickerTimerMobileBorderRadiusWidth && tickerTimerBorderRadiusMobile?.top ? `border-radius: ${tickerTimerMobileBorderRadiusWidth};` : ""}
				}

            }
        `;
        return style;
    }, [attributes]);
    

	const customCss = getCustomCss(
		newsTickerGlobalWraperCustomCSS,
		`.${blockID}`,
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [allBlockStyle, customCss]);

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
					{/* <SelectControl
						label={__("Preset Style", "frontis-blocks")}
						value={newsTickerPresetStyle}
						options={PRESETS}
						onChange={(selected) => changeNewsTickerPreset(selected)}
					/> */}
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
