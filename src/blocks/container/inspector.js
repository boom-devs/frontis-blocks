import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
	SelectControl,
	Dropdown,
	ToggleControl
} from "@wordpress/components";
import {useEffect, useState, useRef, useMemo } from "@wordpress/element";

import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_VisibilityControl from '@Components/visibility-control';
import { useDeviceType } from "@Config/displayType";
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_ColorControl from '@Components/color-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_PositionControl from '@Components/position-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_InputControl from '@Components/input-control';
import FB_InspectorControls from '@Components/InspectorControls';
import { SortableContext } from "@dnd-kit/sortable";
import ColumnSortableItem from "./columnSortableItem";
import RowSortableItem from "./rowSortableItem";
import { use } from "@wordpress/data";

const Inspector = (props) => {
	let deviceType = useDeviceType();
	const {
		attributes: {
			containerType,
			containerTypeFull,
			containerCustomWidth,
			containerCustomWidthUnits,
			globalFullWidthContentBoxedWidth,
			fullWidthContentBoxedWidth,
			fullWidthContentBoxedWidthUnits,
			fullWidthContentBoxedWidthHasEdited,
			isBlockRootParent,
			customWidth,
			resetFallBackCustomWidth,
			customWidthUnits,
			minHeight,
			minHeightUnits,
			containerWrap,
			globalColumnGap,
			globalRowGap,
			columnGap,
			rowGap,
			columnGapUnits,
			rowGapUnits,
			containerColumnGapHasEdited,
			containerRowGapHasEdited,
			containerZIndex,
			containerGlobalPadding,
			containerPaddingUnits,
			containerDesktopPadding,
			containerTabletPadding,
			containerMobilePadding,
			containerPaddingHasEdited,
			containerPaddingLink,
			containerMarginUnits,
			containerDesktopMargin,
			containerTabletMargin,
			containerMobileMargin,
			containerMarginLink,

			/** Normal Bg for fb container */
			containerBgColorSwitcher,
			containerBgNormalBackgroundType,
			containerBgNormalClassicColor,
			containerBgNormalGradientColor,
			containerBgNormalCustomGradientSwitcher,
			containerBgNormalCustomGradientInputValue,
			containerBgNormalBackgroundImageUrl,
			containerBgNormalBackgroundImagePosition,
			containerBgNormalBackgroundImageAttachment,
			containerBgNormalBackgroundImageRepeat,
			containerBgNormalBackgroundImageSize,

			/** Hover Bg for fb container */
			containerBgHoverBackgroundType,
			containerBgHoverClassicColor,
			containerBgHoverGradientColor,
			containerBgHoverCustomGradientSwitcher,
			containerBgHoverCustomGradientInputValue,
			containerBgHoverBackgroundImageUrl,
			containerBgHoverBackgroundImagePosition,
			containerBgHoverBackgroundImageAttachment,
			containerBgHoverBackgroundImageRepeat,
			containerBgHoverBackgroundImageSize,

			/** Overlay for fb container */
			containerBgOverlaySwitcher,
			containerBgOverlayOpacity,

			/** Normal Bg Overlay for fb container */
			containerBgOverlayColorSwitcher,
			containerBgOverlayNormalBackgroundType,
			containerBgOverlayNormalClassicColor,
			containerBgOverlayNormalGradientColor,
			containerBgOverlayNormalCustomGradientSwitcher,
			containerBgOverlayNormalCustomGradientInputValue,
			containerBgOverlayNormalBackgroundImageUrl,
			containerBgOverlayNormalBackgroundImagePosition,
			containerBgOverlayNormalBackgroundImageAttachment,
			containerBgOverlayNormalBackgroundImageRepeat,
			containerBgOverlayNormalBackgroundImageSize,

			/** Hover Bg overaly for fb container */
			containerBgOverlayHoverBackgroundType,
			containerBgOverlayHoverClassicColor,
			containerBgOverlayHoverGradientColor,
			containerBgOverlayHoverCustomGradientSwitcher,
			containerBgOverlayHoverCustomGradientInputValue,
			containerBgOverlayHoverBackgroundImageUrl,
			containerBgOverlayHoverBackgroundImagePosition,
			containerBgOverlayHoverBackgroundImageAttachment,
			containerBgOverlayHoverBackgroundImageRepeat,
			containerBgOverlayHoverBackgroundImageSize,

			htmlTag,
			htmlTagLink,
			containerDesktopSwitcher,
			containerTabletSwitcher,
			containerMobileSwitcher,
			containerLayout,
			containerDirection,
			containerJustify,
			containerAlignItems,
			containerEqualHeight,
			containerChildrenWidth,

			// Grid
			containerColumnsItemList,
			containerRowsItemList,
			containerGridJustifyItems,
			containerGridAlignItems,

			// Position
			containerOverflow,
			containerPositionType,
			containerHZOrientationType,
			containerVROrientationType,
			containerHZLeftOffset,
			containerHZLeftOffsetUnits,
			containerHZRightOffset,
			containerHZRightOffsetUnits,
			containerVRTopOffset,
			containerVRTopOffsetUnits,
			containerVRBottomOffset,
			containerVRBottomOffsetUnits,

			containerBorder,
			containerBorderColor,
			containerBorderHoverColor,
			containerBorderColorSwitcher,
			containerBorderUnits,
			containerDesktopBorderWidth,
			containerTabBorderWidth,
			containerMobileBorderWidth,
			containerBorderLink,
			containerBorderRadiusUnits,
			containerDesktopBorderRadiusWidth,
			containerTabBorderRadiusWidth,
			containerMobileBorderRadiusWidth,
			containerBorderRadiusLink,

			containerGlobalBoxShadowSwitcher,
			containerGlobalBoxShadowValues,
			containerGlobalHoverBoxShadowValues,
			containerGlobalCustomCSS,
			containerGlobalCustomCSSID,
			containerGlobalCustomCSSClass
		},
		setAttributes
	} = props;

	// 1️⃣ Create a reusable function for parsing
	const parseResponsiveValue = (value) => {
		if (typeof value === "string") {
			try {
				return JSON.parse(value);
			} catch (e) {
				console.error("Parsing error:", e);
				return {
					Desktop: value,
					Tablet: value,
					Mobile: value,
				};
			}
		} else if (typeof value === "object") {
			return value;
		} else {
			return {
				Desktop: value,
				Tablet: value,
				Mobile: value,
			};
		}
	};

	// 2️⃣ Memoize parsed values
	const formatted_desktop_breakpoint = FrontisBlocksData.desktop_breakpoint;
	const formatted_tablet_breakpoint = FrontisBlocksData.tablet_breakpoint;
	const formatted_mobile_breakpoint = FrontisBlocksData.mobile_breakpoint;

	const formatted_container_column_gap = useMemo(() => {
		return parseResponsiveValue(FrontisBlocksData.container_column_gap);
	}, [FrontisBlocksData.container_column_gap]);

	const formatted_container_row_gap = useMemo(() => {
		return parseResponsiveValue(FrontisBlocksData.container_row_gap);
	}, [FrontisBlocksData.container_row_gap]);

	const formatted_container_padding = useMemo(() => {
		return parseResponsiveValue(FrontisBlocksData.container_padding);
	}, [FrontisBlocksData.container_padding]);


	useEffect(() => {
		setAttributes({
			globalFullWidthContentBoxedWidth: {
				Desktop: formatted_desktop_breakpoint || "1200",
				Tablet: formatted_tablet_breakpoint || "1024",
				Mobile: formatted_mobile_breakpoint || "767",
			},
		});
	}, [formatted_desktop_breakpoint, formatted_tablet_breakpoint, formatted_mobile_breakpoint]);


	useEffect(() => {
		setAttributes({
			globalColumnGap: {
				Desktop: formatted_container_column_gap.Desktop || "",
				Tablet: formatted_container_column_gap.Tablet || "",
				Mobile: formatted_container_column_gap.Mobile || "",
			},
		});
	}, [formatted_container_column_gap]);


	useEffect(() => {
		setAttributes({
			globalRowGap: {
				Desktop: formatted_container_row_gap.Desktop || "",
				Tablet: formatted_container_row_gap.Tablet || "",
				Mobile: formatted_container_row_gap.Mobile || "",
			},
		});
	}, [formatted_container_row_gap]);

	useEffect(() => {
		setAttributes({
			containerGlobalPadding: {
				Desktop: formatted_container_padding.Desktop || "",
				Tablet: formatted_container_padding.Tablet || "",
				Mobile: formatted_container_padding.Mobile || "",
			},
		});
	}, [formatted_container_padding]);


	const CONTAINER_TYPE = [
		{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
		{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
		{ label: __('Custom', 'frontis-blocks'), value: "custom" },
	];

	const CONTAINER_TYPE_FULL = [
		{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
		{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
	];

	const BORDER_STYLES = [
		{ label: __("None", "frontis-blocks"), value: "none" },
		{ label: __("Solid", "frontis-blocks"), value: "solid" },
		{ label: __("Dashed", "frontis-blocks"), value: "dashed" },
		{ label: __("Dotted", "frontis-blocks"), value: "dotted" },
		{ label: __("Double", "frontis-blocks"), value: "double" },
		{ label: __("Groove", "frontis-blocks"), value: "groove" },
		{ label: __("Outset", "frontis-blocks"), value: "outset" },
		{ label: __("Ridge", "frontis-blocks"), value: "ridge" },
	];

	const HTML_TAG = [
		{ title: 'div', label: __('div', 'frontis-blocks'), value: "div" },
		{ title: 'section', label: __('section', 'frontis-blocks'), value: "section" },
		{ title: 'article', label: __('article', 'frontis-blocks'), value: "article" },
		{ title: 'header', label: __('header', 'frontis-blocks'), value: "header" },
		{ title: 'footer', label: __('footer', 'frontis-blocks'), value: "footer" },
		{ title: 'main', label: __('main', 'frontis-blocks'), value: "main" },
		{ title: 'nav', label: __('nav', 'frontis-blocks'), value: "nav" },
		{ title: 'a', label: __('a', 'frontis-blocks'), value: "a" },
	];
	const LAYOUT_TYPE = [
		{ title: 'Flex', label: __('Flex', 'frontis-blocks'), value: "flex" },
		{ title: 'Grid', label: __('Grid', 'frontis-blocks'), value: "grid" },
	];
	const CHILDREN_WIDTH = [
		{ title: 'Default', label: __('Default', 'frontis-blocks'), value: "default" },
		{ title: 'Auto', label: __('Auto', 'frontis-blocks'), value: "auto" },
		{ title: 'Full', label: __('Full', 'frontis-blocks'), value: "full" },
	];
	const DIRECTION = [
		{ title: 'Row', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53729L15.3485 5.28601" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53723L15.3485 9.78851" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4173L15.3485 14.1774" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4172L15.3485 18.6685" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "row" },
		{ title: 'Column', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.391 6.72949L16.391 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3909 17.1923L18.606 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.391 17.1923L14.176 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 6.72949L7.65393 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65381 17.1923L9.85767 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 17.1923L5.43889 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "column" },
		{ title: 'Row Reverse', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2705 16.391L6.80771 16.391" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.3909L8.70593 18.606" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.391L8.70593 14.176" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2705 7.65393L6.80771 7.65393" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65381L8.70593 9.85767" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65393L8.70593 5.43889" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "row-reverse" },
		{ title: 'Column Reverse', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60901 17.2705L7.60901 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60908 6.80767L5.39404 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60901 6.80767L9.82405 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 17.2705L16.3461 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3462 6.80767L14.1423 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 6.80767L18.5611 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "column-reverse" }
	];
	const JUSTIFY_CONTENT = [
		{ title: 'Flex Start',  label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-start" },
		{ title: 'Center', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
		{ title: 'Flex End', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-end" },
		{ title: 'Space Between', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 7.1615L7.48088 7.1615" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8386L7.48088 16.8386" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-between" },
		{ title: 'Space Around', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6713 8.21777L7.54619 8.21777" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 15.8041L7.48088 15.8041" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-around" },
		{ title: 'Space Evenly', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 8.73425L7.48088 8.73425" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 15.2767L7.48088 15.2767" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-evenly" }
	];

	const JUSTIFY_ITEMS = [
		{ title: 'Flex Start',  label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-start" },
		{ title: 'Center', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
		{ title: 'Flex End', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-end" },
		{ title: 'Stretch', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00001 15.27L16.39 15.27" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00001 9.27002L16.39 9.27002" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 4.03003L3.97001 4.03003" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 20.51L3.97001 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "stretch" }	];

	const ALIGN_ITEMS = [
		{ title: 'Flex Start', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-start" },
		{ title: 'Center', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
		{ title: 'Flex End', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-end" },
		{ title: 'Stretch', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00001 15.27L16.39 15.27" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00001 9.27002L16.39 9.27002" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 4.03003L3.97001 4.03003" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 20.51L3.97001 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "stretch" }
	];

	const WRAP = [
		{ title: 'No Wrap', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.51 12.0109H6.18005" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "nowrap" },
		{ title: 'Wrap', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.07 11.8368L6.77002 15.2757L10.07 18.7255" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "wrap" },
		{ title: 'Wrap Reverse', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.35999 8.76794H15.26C16.34 8.76794 17.22 9.72562 17.22 10.901V16.5926C17.22 17.7679 16.34 18.7256 15.26 18.7256H7.51999" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.0699 12.2068L6.7699 8.76783L10.0699 5.30713" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "wrap-reverse" },
	];

	const BACKGROUND_TYPES = [
        { label: __('Classic', 'frontis-blocks'), value: 'classic' },
        { label: __('Gradient', 'frontis-blocks'), value: 'gradient' },
    ];

	const OVERFLOW_OP = [
		{ label: __('Default', 'frontis-blocks'), value: 'default' },
		{ label: __('Auto', 'frontis-blocks'), value: 'auto' },
		{ label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
		{ label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
		{ label: __('Clip', 'frontis-blocks'), value: 'clip' },
	];

	const [containerColumnsItem, setContainerColumnsItem] = useState(containerColumnsItemList);
	const [containerRowsItem, setContainerRowsItem] = useState(containerRowsItemList);

	const handleColumnAddItem = () => {
        const newItem = {
            id: `column-${containerColumnsItem[deviceType].length + 1}`,
            title: `Column ${containerColumnsItem[deviceType].length + 1}`,
			type: 'custom',
			width: 1,
			widthUnits: 'fr',
			min: 10,
			minUnits: 'px',
			max: 1,
			maxUnits: 'fr',
        };
        setAttributes({ containerColumnsItemList: {...containerColumnsItemList, [deviceType]: [...containerColumnsItemList[deviceType], newItem]}  });
        setContainerColumnsItem({ ...containerColumnsItem, [deviceType]: [...containerColumnsItem[deviceType], newItem] });
    };

    const handleColumnChangeItem = (id, key, value) => {
		let updatedItems = [];

		if(deviceType === 'Desktop') {
			updatedItems = containerColumnsItem.Desktop.map(item => {
				if (item.id === id) {
					return { ...item, [key]: value };
				}
				return item;
			});
		} else if(deviceType === 'Tablet') {
			updatedItems = containerColumnsItem.Tablet.map(item => {
				if (item.id === id) {
					return { ...item, [key]: value };
				}
				return item;
			});
		} else if(deviceType === 'Mobile') {
			updatedItems = containerColumnsItem.Mobile.map(item => {
				if (item.id === id) {
					return { ...item, [key]: value };
				}
				return item;
			});
		}

        setContainerColumnsItem({ ...containerColumnsItem, [deviceType]: updatedItems });
        setAttributes({ containerColumnsItemList: {...containerColumnsItemList, [deviceType]: updatedItems} });
    };

	const reindexItems = (items, idType, titleType) => {
		return items.map((item, index) => ({
			...item,
			id: `${idType}-${index + 1}`,
			title: `${titleType} ${index + 1}`,
		}));
	};

	const handleColumnDeleteItem = (id) => {
		let updatedItems = [];

		if (deviceType === 'Desktop') {
			updatedItems = reindexItems(
				containerColumnsItem.Desktop.filter(item => item.id !== id),
				'column',
				'Column'
			);
		} else if (deviceType === 'Tablet') {
			updatedItems = reindexItems(
				containerColumnsItem.Tablet.filter(item => item.id !== id),
				'column',
				'Column'
			);
		} else if (deviceType === 'Mobile') {
			updatedItems = reindexItems(
				containerColumnsItem.Mobile.filter(item => item.id !== id),
				'column',
				'Column'
			);
		}

		setAttributes({
			containerColumnsItemList: {
				...containerColumnsItemList,
				[deviceType]: updatedItems,
			},
		});

		setContainerColumnsItem({
			...containerColumnsItem,
			[deviceType]: updatedItems,
		});
	};


	const handleColumnDuplicateItem = (id) => {

		const items = containerColumnsItem?.[deviceType] ?? [];

		const srcIndex = items.findIndex((item) => item.id === id);
		if (srcIndex === -1) return;

		const itemToDuplicate = items[srcIndex];

		const newId = `column-${containerColumnsItem[deviceType].length + 1}`;
		const newTitle = `Column ${containerColumnsItem[deviceType].length + 1}`;

		const newItem = { ...itemToDuplicate, id: newId, title: newTitle };

		const updatedItems = [...items, newItem];

		setContainerColumnsItem({...containerColumnsItem, [deviceType]: updatedItems});
		setAttributes({containerColumnsItemList: {...containerColumnsItemList,[deviceType]: updatedItems}});
	};

	const handleRowAddItem = () => {
        const newItem = {
            id: `row-${containerRowsItem[deviceType].length + 1}`,
            title: `Row ${containerRowsItem[deviceType].length + 1}`,
			type: 'custom',
			width: 1,
			widthUnits: 'fr',
			min: 10,
			minUnits: 'px',
			max: 1,
			maxUnits: 'fr',
        };
        setAttributes({ containerRowsItemList: {...containerRowsItemList, [deviceType]: [...containerRowsItemList[deviceType], newItem]}  });
        setContainerRowsItem({ ...containerRowsItem, [deviceType]: [...containerRowsItem[deviceType], newItem] });
    };

    const handleRowChangeItem = (id, key, value) => {
		let updatedItems = [];

		if(deviceType === 'Desktop') {
			updatedItems = containerRowsItem.Desktop.map(item => {
				if (item.id === id) {
					return { ...item, [key]: value };
				}
				return item;
			});
		} else if(deviceType === 'Tablet') {
			updatedItems = containerRowsItem.Tablet.map(item => {
				if (item.id === id) {
					return { ...item, [key]: value };
				}
				return item;
			});
		} else if(deviceType === 'Mobile') {
			updatedItems = containerRowsItem.Mobile.map(item => {
				if (item.id === id) {
					return { ...item, [key]: value };
				}
				return item;
			});
		}

        setContainerRowsItem({ ...containerRowsItem, [deviceType]: updatedItems });
        setAttributes({ containerRowsItemList: {...containerRowsItemList, [deviceType]: updatedItems} });
    };

    const handleRowDeleteItem = (id) => {
		let updatedItems = [];

		if(deviceType === 'Desktop') {
			updatedItems = reindexItems(
				containerRowsItem.Desktop.filter(item => item.id !== id),
				'row',
				'Row'
			);
		} else if (deviceType === 'Tablet') {
			updatedItems = reindexItems(
				containerRowsItem.Tablet.filter(item => item.id !== id),
				'row',
				'Row'
			);
		} else if (deviceType === 'Mobile') {
			updatedItems = reindexItems(
				containerRowsItem.Mobile.filter(item => item.id !== id),
				'row',
				'Row'
			);
		}

        setAttributes({ containerRowsItemList: {...containerRowsItemList, [deviceType]: updatedItems} });
        setContainerRowsItem({ ...containerRowsItem, [deviceType]: updatedItems });

    };

	const handleRowDuplicateItem = (id) => {

		const items = containerRowsItem?.[deviceType] ?? [];
		const srcIndex = items.findIndex((item) => item.id === id);
		if (srcIndex === -1) return;

		const itemToDuplicate = items[srcIndex];
		const newId = `row-${containerRowsItem[deviceType].length + 1}`;
		const newTitle = `Row ${containerRowsItem[deviceType].length + 1}`;
		const newItem = { ...itemToDuplicate, id: newId, title: newTitle };
		const updatedItems = [...items, newItem];
		setContainerRowsItem({...containerRowsItem, [deviceType]: updatedItems});
		setAttributes({containerRowsItemList: {...containerRowsItemList,[deviceType]: updatedItems}});
	  };

	// Handle full width content boxed width
	const fullWidthContentBoxedWidthFn = (width) => {
		setAttributes({
			fullWidthContentBoxedWidth: width,
			fullWidthContentBoxedWidthHasEdited: true
		});
	}

	const fullWidthContentBoxedWidthUnitsFn = (units) => {
		setAttributes({ fullWidthContentBoxedWidthUnits: units });
	}

	const columnGapFn = (width) => {
		setAttributes({ columnGap: width });
		setAttributes({ containerColumnGapHasEdited: true });
	}

	const columnGapUnitsFn = (units) => {
		setAttributes({ columnGapUnits: units });
	}

	const rowGapFn = (width) => {
		setAttributes({ rowGap: width });
		setAttributes({ containerRowGapHasEdited: true });
	}

	const rowGapUnitsFn = (units) => {
		setAttributes({ rowGapUnits: units });
	}

	// Handle min height
	const minHeightFn = (height) => {
		setAttributes({ minHeight: height });
	}

	const minHeightUnitsFn = (units) => {
		setAttributes({ minHeightUnits: units });
	}

	// Handle custom width each row
	const customContentWidthFn = (width) => {
		setAttributes({ customWidth: width });
	}

	const customContentWidthFnUnitsFn = (units) => {
		setAttributes({ customWidthUnits: units });
	}

	// Container type custom width
	const containerCustomContentWidthFn = (width) => {
		setAttributes({ containerCustomWidth: width });
	}

	const containerCustomContentWidthFnUnitsFn = (units) => {
		setAttributes({ containerCustomWidthUnits: units });
	}

	const containerZindexFn = (value) => {
		setAttributes({ containerZIndex: value });
	}

	/** Start Heading Padding */
	const containerPaddingUnitsChange = (event, position) => {
		const value = event.target.value;

		// Set the containerPaddingHasEdited to true to trigger the useEffect
		setAttributes({ containerPaddingHasEdited: true });

		if (containerPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						containerDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						containerTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						containerMobilePadding: {
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
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ containerDesktopPadding: { ...containerDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ containerTabletPadding: { ...containerTabletPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ containerMobilePadding: { ...containerMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const containerPaddingLinkBtn = () => {
		setAttributes({
			containerPaddingLink: !containerPaddingLink
		});
	};

	const containerPaddingUnitsHandler = (unit) => {
		setAttributes({
			containerPaddingUnits: {
				...containerPaddingUnits,
				[deviceType]: unit
			}
		});
	}

	/** Start container margin */
	const containerMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (containerMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						containerDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						containerTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						containerMobileMargin: {
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
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ containerDesktopMargin: { ...containerDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ containerTabletMargin: { ...containerTabletMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ containerMobileMargin: { ...containerMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const containerMarginLinkBtn = () => {
		setAttributes({
			containerMarginLink: !containerMarginLink
		});
	};

	const containerMarginUnitsHandler = (unit) => {
		setAttributes({
			containerMarginUnits: {
				...containerMarginUnits,
				[deviceType]: unit
			}
		});
	};


	// container BorderWidth Function
    const handleContainerBorderUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( containerBorderLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        containerDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        containerTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        containerMobileBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {containerDesktopBorderWidth: {...containerDesktopBorderWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {containerTabBorderWidth: {...containerTabBorderWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {containerMobileBorderWidth: {...containerMobileBorderWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleContainerBorderCombineBtn = () => {
        setAttributes( {containerBorderLink: !containerBorderLink} );
    }

    const handleContainerBorderUnitsHandler = (unit) => {
        setAttributes( {
            containerBorderUnits: {
                ...containerBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // container BorderRadiusWidth Function
    const handleContainerBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( containerBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        containerDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        containerTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        containerMobileBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {containerDesktopBorderRadiusWidth: {...containerDesktopBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {containerTabBorderRadiusWidth: {...containerTabBorderRadiusWidth, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {containerMobileBorderRadiusWidth: {...containerMobileBorderRadiusWidth, [position]: value}} );
                    break;
                default:
                    break;
            }
        }
    }

    const handleContainerBorderRadiusCombineBtn = () => {
        setAttributes( {containerBorderRadiusLink: !containerBorderRadiusLink} );
    }

    const handleContainerBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            containerBorderRadiusUnits: {
                ...containerBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-advanced-button-wrapper">
				<PanelBody
					title={__("Container Type", "frontis-blocks")}
					initialOpen={true}
				>
					{isBlockRootParent &&
						<BaseControl
							label={__("Container Width", "frontis-blocks")}
							id="fb-setting-text-alignment"
							className="fb-setting-text-alignment"
						>
							<ButtonGroup
								className="fb-setting-text-alignment-group-btn"
							>
								{CONTAINER_TYPE.map((item, key) => (
									<Button
										key={key}
										onClick={() => setAttributes({ containerType: item.value })}
										className={`fb-setting-text-alignment-single-btn ${containerType === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
					}

					{/* Container width is custom */}
					{(isBlockRootParent && containerType === 'custom') &&
						<>
							<FB_Range
								min={1}
								max={containerCustomWidthUnits[deviceType] !== 'px' ? 100 : 2000}
								label={__("Custom Width", "frontis-blocks")}
								rangeValue={containerCustomWidth}
								onChangeHandler={containerCustomContentWidthFn}
								rangeUnitHandler={containerCustomContentWidthFnUnitsFn}
								deviceType={deviceType}
								units={containerCustomWidthUnits}
								rangeStep={1}
								resetFallbackValue={parseInt(resetFallBackCustomWidth[deviceType])}
								units_types_arr={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'vw', value: 'vw' },
								]}
							/>
						</>
					}

					{(containerType === 'full-width' && isBlockRootParent) && (
						<>
							<BaseControl
								label={__("Content Width", "frontis-blocks")}
								id="fb-setting-text-alignment"
								className="fb-setting-text-alignment"
							>
								<ButtonGroup
									className="fb-setting-text-alignment-group-btn"
								>
									{CONTAINER_TYPE_FULL.map((item, key) => (
										<Button
											key={key}
											onClick={() => setAttributes({ containerTypeFull: item.value })}
											className={`fb-setting-text-alignment-single-btn ${containerTypeFull === item.value ? 'active' : ''}`}
										>
											{item.label}
										</Button>
									))}
								</ButtonGroup>
								<div style={{ marginTop: '10px' }}></div>
								{containerTypeFull !== 'full-width' &&
									<FB_Range
										min={1}
										max={fullWidthContentBoxedWidthUnits[deviceType] !== 'px' ? 100 : 2000}
										label={__("Content Box Width", "frontis-blocks")}
										rangeValue={fullWidthContentBoxedWidth.Desktop === '' ? globalFullWidthContentBoxedWidth : fullWidthContentBoxedWidth}
										onChangeHandler={fullWidthContentBoxedWidthFn}
										rangeUnitHandler={fullWidthContentBoxedWidthUnitsFn}
										deviceType={deviceType}
										units={fullWidthContentBoxedWidthUnits}
										rangeStep={1}
										resetFallbackValue={resetFallBackCustomWidth[deviceType]}
										units_types_arr={[
											{ label: 'px', value: 'px' },
											{ label: '%', value: '%' },
											{ label: 'vw', value: 'vw' },
										]}
									/>
								}
							</BaseControl>
						</>
					)}

					{!isBlockRootParent &&
						<>
							<FB_Range
								min={1}
								max={customWidthUnits[deviceType] !== 'px' ? 100 : 2000}
								label={__("Custom Width", "frontis-blocks")}
								rangeValue={customWidth}
								onChangeHandler={customContentWidthFn}
								rangeUnitHandler={customContentWidthFnUnitsFn}
								deviceType={deviceType}
								units={customWidthUnits}
								rangeStep={1}
								resetFallbackValue={parseInt(resetFallBackCustomWidth[deviceType])}
								units_types_arr={[
									{ label: 'px', value: 'px' },
									{ label: '%', value: '%' },
									{ label: 'vw', value: 'vw' },
								]}
							/>
						</>
					}

					<FB_Range
						min={1}
						max={minHeightUnits[deviceType] !== 'px' ? 100 : 2000}
						label={__("Minimum Height", "frontis-blocks")}
						rangeValue={minHeight}
						onChangeHandler={minHeightFn}
						rangeUnitHandler={minHeightUnitsFn}
						deviceType={deviceType}
						units={minHeightUnits}
						rangeStep={1}
						resetFallbackValue={''}
						units_types_arr={[
							{ label: 'px', value: 'px' },
							{ label: 'vh', value: 'vh' },
							{ label: '%', value: '%' },
						]}
					/>

					<ToggleControl
						label={__("Equal Height", "frontis-blocks")}
						checked={containerEqualHeight}
						onChange={(value) => setAttributes({ containerEqualHeight: value })}
					/>

					<SelectControl
						label={__("HTML Tag", "frontis-blocks")}
						value={htmlTag}
						options={HTML_TAG}
						onChange={(value) => setAttributes({ htmlTag: value })}
					/>
					{htmlTag === 'a' &&
						<FB_InputControl
							label={__("Tag Link", "frontis-blocks")}
							value={htmlTagLink.url}
							onChangeValue={(value) => setAttributes({ htmlTagLink: { ...htmlTagLink, url: value } })}
							helpText={__("Enter the custom link for the container.", "frontis-blocks")}
						/>
					}
				</PanelBody>
			</div>
			{/* {isBlockRootParent && */}
				<div className="fb-flex-properties-wrapper">
					<PanelBody
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
					>

						<BaseControl
							id="fb-setting-alignment"
							className="fb-advanced-alignment list"
						>
							<ButtonGroup className="fb-advanced-alignment-group-btn">
								{LAYOUT_TYPE.map((item, key) => (
									<Button
										key={key}
										onClick={() =>
											setAttributes({
												containerLayout: item.value
											})
										}
										title={item.title}
										className={`fb-advanced-alignment-single-btn ${containerLayout === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>

						{containerLayout === 'grid' && <>
							<BaseControl
								id="fb-setting-alignment"
								className="fb-advanced-alignment list"
							>
								<FB_ResponsiveControl
									labelText={__('Columns', 'frontis-blocks')}
									device={deviceType}
								/>
								<br />
								<div className="fb-feature-wrapper">
									<SortableContext items={containerColumnsItem[deviceType].map(item => item.id)}>
										<ul className='dnd-items-wrapper'>
											{containerColumnsItem[deviceType].map((item, index) => (
												<ColumnSortableItem
													key={item.id}
													id={item.id}
													columnItem={item}
													handleChangeItem={handleColumnChangeItem}
													handleDeleteItem={handleColumnDeleteItem}
													handleDuplicateItem={handleColumnDuplicateItem}
													containerColumnsItem={containerColumnsItem[deviceType]}
													index={index}
												/>
											))}
										</ul>
									</SortableContext>
									<Button isPrimary onClick={handleColumnAddItem}>
										{__("Add Column", "frontis-blocks")}
									</Button>
								</div>
							</BaseControl>

							<BaseControl
								id="fb-setting-alignment"
								className="fb-advanced-alignment list"
							>
								<FB_ResponsiveControl
									labelText={__('Rows', 'frontis-blocks')}
									device={deviceType}
								/>
								<br />
								<div className="fb-feature-wrapper">
									<SortableContext items={containerRowsItem[deviceType].map(item => item.id)}>
										<ul className='dnd-items-wrapper'>
											{containerRowsItem[deviceType].map((item, index) => (
												<RowSortableItem
													key={item.id}
													id={item.id}
													rowItem={item}
													handleChangeItem={handleRowChangeItem}
													handleDeleteItem={handleRowDeleteItem}
													handleDuplicateItem={handleRowDuplicateItem}
													containerRowsItem={containerRowsItem[deviceType]}
													index={index}
												/>
											))}
										</ul>
									</SortableContext>
									<Button isPrimary onClick={handleRowAddItem}>
										{__("Add Row", "frontis-blocks")}
									</Button>
								</div>
							</BaseControl>

							<BaseControl
								id="fb-setting-alignment"
								className="fb-advanced-alignment list"
							>
								<FB_ResponsiveControl
									labelText={__('Align Items', 'frontis-blocks')}
									device={deviceType}
								/>
								<br />
								<ButtonGroup className={`fb-advanced-alignment-group-btn`}>
									{ALIGN_ITEMS.map((item, key) => (
										<Button
											key={key}
											onClick={() =>
												setAttributes({
													containerGridAlignItems: {
														...containerGridAlignItems, // Spread the existing values
														[deviceType]: item.value, // Update the specific device type
													},
												})
											}
											title={item.title}
											className={`fb-advanced-alignment-single-btn ${containerGridAlignItems[deviceType] === item.value ? 'active' : ''}`}
										>
											{item.label}
										</Button>
									))}
								</ButtonGroup>
							</BaseControl>

							<BaseControl
								id="fb-setting-alignment"
								className="fb-advanced-alignment list"
							>
								<FB_ResponsiveControl
									labelText={__('Justify Content', 'frontis-blocks')}
									device={deviceType}
								/>
								<br />
								<ButtonGroup className={`fb-advanced-alignment-group-btn justify-content-btn`}>
									{JUSTIFY_ITEMS.map((item, key) => (
										<Button
											key={key}
											onClick={() =>
												setAttributes({
													containerGridJustifyItems: {
														...containerGridJustifyItems, // Spread the existing values
														[deviceType]: item.value, // Update the specific device type
													},
												})
											}
											title={item.title}
											className={`fb-advanced-alignment-single-btn ${containerGridJustifyItems[deviceType] === item.value ? 'active' : ''}`}
										>
											{item.label}
										</Button>
									))}
								</ButtonGroup>
							</BaseControl>
						</>}

						{containerLayout === 'flex' && <>
						<BaseControl
							id="fb-setting-alignment"
							className="fb-advanced-alignment list"
						>
							<FB_ResponsiveControl
								labelText={__('Direction', 'frontis-blocks')}
								device={deviceType}
							/>
							<br />
							<ButtonGroup className="fb-advanced-alignment-group-btn">
								{DIRECTION.map((item, key) => (
									<Button
										key={key}
										onClick={() =>
											setAttributes({
												containerDirection: {
													...containerDirection,
													[deviceType]: item.value,
												},
											})
										}
										title={item.title}
										className={`fb-advanced-alignment-single-btn ${containerDirection[deviceType] === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>

						<BaseControl
							id="fb-setting-alignment"
							className="fb-advanced-alignment list"
							label={__("Children Width", "frontis-blocks")}
						>
							<ButtonGroup className="fb-advanced-alignment-group-btn">
								{CHILDREN_WIDTH.map((item, key) => (
									<Button
										key={key}
										onClick={() =>
											setAttributes({
												containerChildrenWidth: item.value
											})
										}
										title={item.title}
										className={`fb-advanced-alignment-single-btn ${containerChildrenWidth === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
						</>}

						{containerLayout === 'flex' && <>
						<BaseControl
							id="fb-setting-alignment"
							className="fb-advanced-alignment list"
						>
							<FB_ResponsiveControl
								labelText={__('Align Items', 'frontis-blocks')}
								device={deviceType}
							/>
							<br />
							<ButtonGroup className={`fb-advanced-alignment-group-btn ${containerLayout === 'flex' && containerDirection[deviceType] !== 'row' && containerDirection[deviceType] !== 'row-reverse' ? 'column-direction' : ''}`}>
								{ALIGN_ITEMS.map((item, key) => (
									<Button
										key={key}
										onClick={() =>
											setAttributes({
												containerAlignItems: {
													...containerAlignItems, // Spread the existing values
													[deviceType]: item.value, // Update the specific device type
												},
											})
										}
										title={item.title}
										className={`fb-advanced-alignment-single-btn ${containerAlignItems[deviceType] === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>

						<BaseControl
							id="fb-setting-alignment"
							className="fb-advanced-alignment list"
						>
							<FB_ResponsiveControl
								labelText={__('Justify Content', 'frontis-blocks')}
								device={deviceType}
							/>
							<br />
							<ButtonGroup className={`fb-advanced-alignment-group-btn justify-content-btn ${containerLayout === 'flex' && containerDirection[deviceType] !== 'row' && containerDirection[deviceType] !== 'row-reverse' ? 'column-direction' : ''}`}>
								{JUSTIFY_CONTENT.map((item, key) => (
									<Button
										key={key}
										onClick={() =>
											setAttributes({
												containerJustify: {
													...containerJustify, // Spread the existing values
													[deviceType]: item.value, // Update the specific device type
												},
											})
										}
										title={item.title}
										className={`fb-advanced-alignment-single-btn ${containerJustify[deviceType] === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>

						<BaseControl
							id="fb-setting-alignment"
							className="fb-advanced-alignment list"
						>
							<FB_ResponsiveControl
								labelText={__('Wrap', 'frontis-blocks')}
								device={deviceType}
							/>
							<br />
							<ButtonGroup className="fb-advanced-alignment-group-btn">
								{WRAP.map((item, key) => (
									<Button
										key={key}
										onClick={() =>
											setAttributes({
												containerWrap: {
													...containerWrap,
													[deviceType]: item.value,
												},
											})
										}
										title={item.title}
										className={`fb-advanced-alignment-single-btn ${containerWrap[deviceType] === item.value ? 'active' : ''}`}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
						</>}
					</PanelBody>
				</div>
			{/* } */}
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Container Gap", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Range
					min={0}
					max={200}
					label={__("Column", "frontis-blocks")}
					rangeValue={columnGap.Desktop === '' ? globalColumnGap : columnGap}
					onChangeHandler={columnGapFn}
					rangeUnitHandler={columnGapUnitsFn}
					deviceType={deviceType}
					units={columnGapUnits}
					rangeStep={1}
					resetFallbackValue={''}
					units_types_arr={[
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
					]}
				/>

				<FB_Range
					min={0}
					max={200}
					label={__("Row", "frontis-blocks")}
					rangeValue={rowGap.Desktop === '' ? globalRowGap : rowGap}
					onChangeHandler={rowGapFn}
					rangeUnitHandler={rowGapUnitsFn}
					deviceType={deviceType}
					units={rowGapUnits}
					rangeStep={1}
					resetFallbackValue={''}
					units_types_arr={[
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
					]}
				/>
			</PanelBody>
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
						title={__("Advanced", "frontis-blocks")}
						initialOpen={true}
					>
						<FB_Range
							min={0}
							max={99999}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={containerZIndex}
							onChangeHandler={containerZindexFn}
							deviceType={deviceType}
							rangeStep={1}
							resetFallbackValue={''}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={containerOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ containerOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={containerPositionType}
							setPositionType={(value) => setAttributes({ containerPositionType: value })}

							HZOrientationType={containerHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ containerHZOrientationType: value })
							}
							VROrientationType={containerVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ containerVROrientationType: value })
							}

							HZLeftOffset={containerHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ containerHZLeftOffset: value })}
							HZLeftOffsetUnits={containerHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ containerHZLeftOffsetUnits: value })}
							HZRightOffset={containerHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ containerHZRightOffset: value })}
							HZRightOffsetUnits={containerHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ containerHZRightOffsetUnits: value })}

							VRTopOffset={containerVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ containerVRTopOffset: value })}
							VRTopOffsetUnits={containerVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ containerVRTopOffsetUnits: value })}
							VRBottomOffset={containerVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ containerVRBottomOffset: value })}
							VRBottomOffsetUnits={containerVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ containerVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>
						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={containerGlobalCustomCSSID}
							onChangeValue={(value) => setAttributes({ containerGlobalCustomCSSID: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={containerGlobalCustomCSSClass}
							onChangeValue={(value) => setAttributes({ containerGlobalCustomCSSClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>
					<PanelBody
						title={__("Padding and Margin", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={containerMarginUnitsHandler}
							spacingUnits={containerMarginUnits}
							spacingDesktop={containerDesktopMargin}
							spacingTablet={containerTabletMargin}
							spacingMobile={containerMobileMargin}
							handleSpacingUnitHandler={containerMarginUnitsChange}
							spacingCombineBtn={containerMarginLink}
							spacingCombineBtnHandler={containerMarginLinkBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={containerPaddingUnitsHandler}
							spacingUnits={containerPaddingUnits}
							spacingDesktop={isBlockRootParent && containerDesktopPadding.top === '' ? {top: containerGlobalPadding.Desktop, right: containerGlobalPadding.Desktop, bottom: containerGlobalPadding.Desktop, left: containerGlobalPadding.Desktop} : containerDesktopPadding}
							spacingTablet={isBlockRootParent && containerTabletPadding.top === '' ? {top: containerGlobalPadding.Tablet, right: containerGlobalPadding.Tablet, bottom: containerGlobalPadding.Tablet, left: containerGlobalPadding.Tablet} : containerTabletPadding}
							spacingMobile={isBlockRootParent && containerMobilePadding.top === '' ? {top: containerGlobalPadding.Mobile, right: containerGlobalPadding.Mobile, bottom: containerGlobalPadding.Mobile, left: containerGlobalPadding.Mobile} : containerMobilePadding}
							handleSpacingUnitHandler={containerPaddingUnitsChange}
							spacingCombineBtn={containerPaddingLink}
							spacingCombineBtnHandler={containerPaddingLinkBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={containerBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ containerBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={containerBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ containerBorderColorSwitcher: value })}
						/>

						{containerBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={containerBorderColor}
								setGlobalColor={(value) => setAttributes({ containerBorderColor: value })}
							/>
						)}

						{containerBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={containerBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ containerBorderHoverColor: value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleContainerBorderUnitsHandler}
							spacingUnits={containerBorderUnits}
							spacingDesktop={containerDesktopBorderWidth}
							spacingTablet={containerTabBorderWidth}
							spacingMobile={containerMobileBorderWidth}
							handleSpacingUnitHandler={handleContainerBorderUnitChange}
							spacingCombineBtn={containerBorderLink}
							spacingCombineBtnHandler={handleContainerBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleContainerBorderRadiusUnitsHandler}
							spacingUnits={containerBorderRadiusUnits}
							spacingDesktop={containerDesktopBorderRadiusWidth}
							spacingTablet={containerTabBorderRadiusWidth}
							spacingMobile={containerMobileBorderRadiusWidth}
							handleSpacingUnitHandler={handleContainerBorderRadiusUnitChange}
							spacingCombineBtn={containerBorderRadiusLink}
							spacingCombineBtnHandler={handleContainerBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={containerGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ containerGlobalBoxShadowSwitcher: value })}
						/>

						{containerGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ containerGlobalBoxShadowValues: value })
								}
								initialShadowValue={containerGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({
										containerGlobalBoxShadowCssValue: value,
									})
								}
							/>
						)}

						{containerGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ containerGlobalHoverBoxShadowValues: value })
								}
								initialShadowValue={containerGlobalHoverBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({
										containerGlobalHoverBoxShadowCssValue: value,
									})
								}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Background", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_SwitcherControl
							label={__("Background Type", "frontis-blocks")}
							globalSwitcher={containerBgColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ containerBgColorSwitcher: value })}
						/>

						{containerBgColorSwitcher === 'normal' && (
							<BaseControl
								className="fb-setting-background-color-setting-wrapper"
								label={__("Normal Background Type", "frontis-blocks")}
							>
								<Dropdown
									className="fb-setting-background-color-setting-icon-dropdown"
									contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
									popoverProps={{ placement: 'bottom-start' }}
									renderToggle={({ isOpen, onToggle }) => (
										<Button
											variant="primary"
											onClick={onToggle}
											aria-expanded={isOpen}
											className="fb-setting-background-color-setting-icon-btn"
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
												<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
											</svg>
										</Button>
									)}
									renderContent={() => (
										<div className="fb-setting-background-color-popup-wrapper">
											<BaseControl
												className="fb-setting-background-color-popup-inner-wrapper"
											>
												<ButtonGroup className="fb-setting-background-color-panel-btn">
													{BACKGROUND_TYPES.map((item) => (
														<Button
															key={item.value}
															onClick={() => setAttributes({ containerBgNormalBackgroundType: item.value })}
															className={`fb-setting-background-color-panel-btn-switcher ${containerBgNormalBackgroundType === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{containerBgNormalBackgroundType === 'classic' && (

												<>
													<FB_ColorControl
														label={__("Color", "frontis-blocks")}
														globalColor={containerBgNormalClassicColor}
														setGlobalColor={(value) => setAttributes({ containerBgNormalClassicColor: value })}
													/>

													<FB_ResponsiveBackgroundImageControl
														deviceType={deviceType}
														globalBackgroundImageUrl={containerBgNormalBackgroundImageUrl}
														setGlobalBackgroundImageUrl={(value) => setAttributes({ containerBgNormalBackgroundImageUrl: value })}
														globalBackgroundImagePosition={containerBgNormalBackgroundImagePosition}
														setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ containerBgNormalBackgroundImagePosition: newPosition })}
														globalBackgroundImageAttachment={containerBgNormalBackgroundImageAttachment}
														setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ containerBgNormalBackgroundImageAttachment: newAttachment })}
														globalBackgroundImageRepeat={containerBgNormalBackgroundImageRepeat}
														setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ containerBgNormalBackgroundImageRepeat: newRepeat })}
														globalBackgroundImageSize={containerBgNormalBackgroundImageSize}
														setGlobalBackgroundImageSize={(newSize) => setAttributes({ containerBgNormalBackgroundImageSize: newSize })}
														setAttributes={setAttributes}
													/>

												</>
											)}

											{containerBgNormalBackgroundType === 'gradient' && (
												<FB_GradientColorControl
													globalCustomGradientSwitcher={containerBgNormalCustomGradientSwitcher}
													setGlobalCustomGradientSwitcher={(value) => setAttributes({ containerBgNormalCustomGradientSwitcher: value })}
													globalCustomGradientInputValue={containerBgNormalCustomGradientInputValue}
													setGlobalCustomGradientInputValue={(value) => setAttributes({ containerBgNormalCustomGradientInputValue: value })}
													globalGradientColor={containerBgNormalGradientColor}
													setGlobalGradientColor={(value) => setAttributes({ containerBgNormalGradientColor: value })}
												/>
											)}
										</div>
									)}
								/>
							</BaseControl>

						)}

						{containerBgColorSwitcher === 'hover' && (
							<BaseControl
								className="fb-setting-background-color-setting-wrapper"
								label={__("Hover Background Type", "frontis-blocks")}
							>
								<Dropdown
									className="fb-setting-background-color-setting-icon-dropdown"
									contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
									popoverProps={{ placement: 'bottom-start' }}
									renderToggle={({ isOpen, onToggle }) => (
										<Button
											variant="primary"
											onClick={onToggle}
											aria-expanded={isOpen}
											className="fb-setting-background-color-setting-icon-btn"
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
												<path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
												<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
											</svg>
										</Button>
									)}
									renderContent={() => (
										<div className="fb-setting-background-color-popup-wrapper">
											<BaseControl
												className="fb-setting-background-color-popup-inner-wrapper"
											>
												<ButtonGroup className="fb-setting-background-color-panel-btn">
													{BACKGROUND_TYPES.map((item) => (
														<Button
															key={item.value}
															onClick={() => setAttributes({ containerBgHoverBackgroundType: item.value })}
															className={`fb-setting-background-color-panel-btn-switcher ${containerBgHoverBackgroundType === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{containerBgHoverBackgroundType === 'classic' && (

												<>
													<FB_ColorControl
														label={__("Color", "frontis-blocks")}
														globalColor={containerBgHoverClassicColor}
														setGlobalColor={(value) => setAttributes({ containerBgHoverClassicColor: value })}
													/>

													<FB_ResponsiveBackgroundImageControl
														deviceType={deviceType}
														globalBackgroundImageUrl={containerBgHoverBackgroundImageUrl}
														setGlobalBackgroundImageUrl={(value) => setAttributes({ containerBgHoverBackgroundImageUrl: value })}
														globalBackgroundImagePosition={containerBgHoverBackgroundImagePosition}
														setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ containerBgHoverBackgroundImagePosition: newPosition })}
														globalBackgroundImageAttachment={containerBgHoverBackgroundImageAttachment}
														setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ containerBgHoverBackgroundImageAttachment: newAttachment })}
														globalBackgroundImageRepeat={containerBgHoverBackgroundImageRepeat}
														setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ containerBgHoverBackgroundImageRepeat: newRepeat })}
														globalBackgroundImageSize={containerBgHoverBackgroundImageSize}
														setGlobalBackgroundImageSize={(newSize) => setAttributes({ containerBgHoverBackgroundImageSize: newSize })}
														setAttributes={setAttributes}
													/>

												</>
											)}

											{containerBgHoverBackgroundType === 'gradient' && (
												<FB_GradientColorControl
													globalCustomGradientSwitcher={containerBgHoverCustomGradientSwitcher}
													setGlobalCustomGradientSwitcher={(value) => setAttributes({ containerBgHoverCustomGradientSwitcher: value })}
													globalCustomGradientInputValue={containerBgHoverCustomGradientInputValue}
													setGlobalCustomGradientInputValue={(value) => setAttributes({ containerBgHoverCustomGradientInputValue: value })}
													globalGradientColor={containerBgHoverGradientColor}
													setGlobalGradientColor={(value) => setAttributes({ containerBgHoverGradientColor: value })}
												/>
											)}
										</div>
									)}
								/>
							</BaseControl>
						)}

						<ToggleControl
							label={__("Enable Overlay", "frontis-blocks")}
							checked={containerBgOverlaySwitcher}
							onChange={(value) => setAttributes({ containerBgOverlaySwitcher: value })}
						/>

						{containerBgOverlaySwitcher && (
							<>
								<FB_Range
									min={0}
									max={1}
									label={__("Overlay Opacity", "frontis-blocks")}
									rangeValue={containerBgOverlayOpacity}
									onChangeHandler={(value) => setAttributes({ containerBgOverlayOpacity: value === 0 ? undefined : value })}
									deviceType={deviceType}
									setAttributes={setAttributes}
									rangeStep={0.1}
									resetFallbackValue={""}
									isRangeUnit={false}
								/>

								<FB_SwitcherControl
									label={__("Overlay Type", "frontis-blocks")}
									globalSwitcher={containerBgOverlayColorSwitcher}
									setGlobalSwitcher={(value) => setAttributes({ containerBgOverlayColorSwitcher: value })}
								/>

								{containerBgOverlayColorSwitcher === 'normal' && (
									<BaseControl
										className="fb-setting-background-color-setting-wrapper"
										label={__("Normal Overlay Type", "frontis-blocks")}
									>
										<Dropdown
											className="fb-setting-background-color-setting-icon-dropdown"
											contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
											popoverProps={{ placement: 'bottom-start' }}
											renderToggle={({ isOpen, onToggle }) => (
												<Button
													variant="primary"
													onClick={onToggle}
													aria-expanded={isOpen}
													className="fb-setting-background-color-setting-icon-btn"
												>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
														<path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
														<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
													</svg>
												</Button>
											)}
											renderContent={() => (
												<div className="fb-setting-background-color-popup-wrapper">
													<BaseControl
														className="fb-setting-background-color-popup-inner-wrapper"
													>
														<ButtonGroup className="fb-setting-background-color-panel-btn">
															{BACKGROUND_TYPES.map((item) => (
																<Button
																	key={item.value}
																	onClick={() => setAttributes({ containerBgOverlayNormalBackgroundType: item.value })}
																	className={`fb-setting-background-color-panel-btn-switcher ${containerBgOverlayNormalBackgroundType === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>

													{containerBgOverlayNormalBackgroundType === 'classic' && (

														<>
															<FB_ColorControl
																label={__("Color", "frontis-blocks")}
																globalColor={containerBgOverlayNormalClassicColor}
																setGlobalColor={(value) => setAttributes({ containerBgOverlayNormalClassicColor: value })}
															/>

															<FB_ResponsiveBackgroundImageControl
																deviceType={deviceType}
																globalBackgroundImageUrl={containerBgOverlayNormalBackgroundImageUrl}
																setGlobalBackgroundImageUrl={(value) => setAttributes({ containerBgOverlayNormalBackgroundImageUrl: value })}
																globalBackgroundImagePosition={containerBgOverlayNormalBackgroundImagePosition}
																setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ containerBgOverlayNormalBackgroundImagePosition: newPosition })}
																globalBackgroundImageAttachment={containerBgOverlayNormalBackgroundImageAttachment}
																setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ containerBgOverlayNormalBackgroundImageAttachment: newAttachment })}
																globalBackgroundImageRepeat={containerBgOverlayNormalBackgroundImageRepeat}
																setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ containerBgOverlayNormalBackgroundImageRepeat: newRepeat })}
																globalBackgroundImageSize={containerBgOverlayNormalBackgroundImageSize}
																setGlobalBackgroundImageSize={(newSize) => setAttributes({ containerBgOverlayNormalBackgroundImageSize: newSize })}
																setAttributes={setAttributes}
															/>

														</>
													)}

													{containerBgOverlayNormalBackgroundType === 'gradient' && (
														<FB_GradientColorControl
															globalCustomGradientSwitcher={containerBgOverlayNormalCustomGradientSwitcher}
															setGlobalCustomGradientSwitcher={(value) => setAttributes({ containerBgOverlayNormalCustomGradientSwitcher: value })}
															globalCustomGradientInputValue={containerBgOverlayNormalCustomGradientInputValue}
															setGlobalCustomGradientInputValue={(value) => setAttributes({ containerBgOverlayNormalCustomGradientInputValue: value })}
															globalGradientColor={containerBgOverlayNormalGradientColor}
															setGlobalGradientColor={(value) => setAttributes({ containerBgOverlayNormalGradientColor: value })}
														/>
													)}
												</div>
											)}
										/>
									</BaseControl>

								)}

								{containerBgOverlayColorSwitcher === 'hover' && (
									<BaseControl
										className="fb-setting-background-color-setting-wrapper"
										label={__("Hover Overlay Type", "frontis-blocks")}
									>
										<Dropdown
											className="fb-setting-background-color-setting-icon-dropdown"
											contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
											popoverProps={{ placement: 'bottom-start' }}
											renderToggle={({ isOpen, onToggle }) => (
												<Button
													variant="primary"
													onClick={onToggle}
													aria-expanded={isOpen}
													className="fb-setting-background-color-setting-icon-btn"
												>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
														<path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
														<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
													</svg>
												</Button>
											)}
											renderContent={() => (
												<div className="fb-setting-background-color-popup-wrapper">
													<BaseControl
														className="fb-setting-background-color-popup-inner-wrapper"
													>
														<ButtonGroup className="fb-setting-background-color-panel-btn">
															{BACKGROUND_TYPES.map((item) => (
																<Button
																	key={item.value}
																	onClick={() => setAttributes({ containerBgOverlayHoverBackgroundType: item.value })}
																	className={`fb-setting-background-color-panel-btn-switcher ${containerBgOverlayHoverBackgroundType === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>

													{containerBgOverlayHoverBackgroundType === 'classic' && (

														<>
															<FB_ColorControl
																label={__("Color", "frontis-blocks")}
																globalColor={containerBgOverlayHoverClassicColor}
																setGlobalColor={(value) => setAttributes({ containerBgOverlayHoverClassicColor: value })}
															/>

															<FB_ResponsiveBackgroundImageControl
																deviceType={deviceType}
																globalBackgroundImageUrl={containerBgOverlayHoverBackgroundImageUrl}
																setGlobalBackgroundImageUrl={(value) => setAttributes({ containerBgOverlayHoverBackgroundImageUrl: value })}
																globalBackgroundImagePosition={containerBgOverlayHoverBackgroundImagePosition}
																setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ containerBgOverlayHoverBackgroundImagePosition: newPosition })}
																globalBackgroundImageAttachment={containerBgOverlayHoverBackgroundImageAttachment}
																setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ containerBgOverlayHoverBackgroundImageAttachment: newAttachment })}
																globalBackgroundImageRepeat={containerBgOverlayHoverBackgroundImageRepeat}
																setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ containerBgOverlayHoverBackgroundImageRepeat: newRepeat })}
																globalBackgroundImageSize={containerBgOverlayHoverBackgroundImageSize}
																setGlobalBackgroundImageSize={(newSize) => setAttributes({ containerBgOverlayHoverBackgroundImageSize: newSize })}
																setAttributes={setAttributes}
															/>

														</>
													)}

													{containerBgOverlayHoverBackgroundType === 'gradient' && (
														<FB_GradientColorControl
															globalCustomGradientSwitcher={containerBgOverlayHoverCustomGradientSwitcher}
															setGlobalCustomGradientSwitcher={(value) => setAttributes({ containerBgOverlayHoverCustomGradientSwitcher: value })}
															globalCustomGradientInputValue={containerBgOverlayHoverCustomGradientInputValue}
															setGlobalCustomGradientInputValue={(value) => setAttributes({ containerBgOverlayHoverCustomGradientInputValue: value })}
															globalGradientColor={containerBgOverlayHoverGradientColor}
															setGlobalGradientColor={(value) => setAttributes({ containerBgOverlayHoverGradientColor: value })}
														/>
													)}
												</div>
											)}
										/>
									</BaseControl>
								)}
							</>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={containerDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ containerDesktopSwitcher: value })}

							tabletValue={containerTabletSwitcher}
							setTabletValue={(value) => setAttributes({ containerTabletSwitcher: value })}

							mobileValue={containerMobileSwitcher}
							setMobileValue={(value) => setAttributes({ containerMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={containerGlobalCustomCSS}
							onChangeValue={(value) => setAttributes({ containerGlobalCustomCSS: value })}
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
};

export default Inspector;
