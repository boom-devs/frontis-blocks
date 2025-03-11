import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	BaseControl,
	Button,
	ButtonGroup,
	PanelBody,
	RangeControl,
	SelectControl,
	Dropdown,
	TabPanel,
	ToggleControl
} from "@wordpress/components";

import FB_AlignmentControl from '@Components/alignment-control';
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Spacing from "@Components/spacing";
import FB_Range from "@Components/range";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_ResponsiveControl from '@Components/responsive-control';
import FB_VisibilityControl from '@Components/visibility-control';
import { useDeviceType } from "@Config/displayType";

import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_ColorControl from '@Components/color-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_PositionControl from '@Components/position-control';

const Inspector = (props) => {
	let deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			p_block_id,
			containerType,
			containerTypeFull,
			containerCustomWidth,
			containerCustomWidthUnits,
			fullWidthContentBoxedWidth,
			fullWidthContentBoxedWidthUnits,
			isBlockRootParent,
			customWidth,
			resetFallBackCustomWidth,
			customWidthUnits,
			minHeight,
			minHeightUnits,
			containerWrap,
			columnGap,
			rowGap,
			columnGapUnits,
			rowGapUnits,
			containerZIndex,
			containerPaddingUnits,
			containerDesktopPadding,
			containerTabletPadding,
			containerMobilePadding,
			containerPaddingLink,
			containerMarginUnits,
			containerDesktopMargin,
			containerTabletMargin,
			containerMobileMargin,
			containerMarginLink,

			/** Normal Bg */
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

			/** Hover Bg */
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

			containerDesktopSwitcher,
			containerTabletSwitcher,
			containerMobileSwitcher,
			containerDirection,
			containerJustify,
			containerAlignItems,

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
			containerGlobalBoxShadowCssValue,
			containerGlobalHoverBoxShadowValues,
			containerGlobalHoverBoxShadowCssValue,
		},

		setAttributes
	} = props;

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

	const DIRECTION = [
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53729L15.3485 5.28601" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53723L15.3485 9.78851" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4173L15.3485 14.1774" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4172L15.3485 18.6685" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "row" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.391 6.72949L16.391 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3909 17.1923L18.606 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.391 17.1923L14.176 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 6.72949L7.65393 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65381 17.1923L9.85767 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 17.1923L5.43889 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "column" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2705 16.391L6.80771 16.391" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.3909L8.70593 18.606" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.391L8.70593 14.176" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2705 7.65393L6.80771 7.65393" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65381L8.70593 9.85767" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65393L8.70593 5.43889" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "row-reverse" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60901 17.2705L7.60901 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60908 6.80767L5.39404 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60901 6.80767L9.82405 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 17.2705L16.3461 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3462 6.80767L14.1423 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 6.80767L18.5611 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "column-reverse" }
	];
	const JUSTIFY_CONTENT = [
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "flex-start" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "center" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "flex-end" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 7.1615L7.48088 7.1615" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.606 16.8386L7.48088 16.8386" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "space-between" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6713 8.21777L7.54619 8.21777" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.606 15.8041L7.48088 15.8041" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "space-around" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 8.73425L7.48088 8.73425" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.606 15.2767L7.48088 15.2767" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "space-evenly" }
	];

	const ALIGN_ITEMS = [
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "flex-start" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "center" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>), value: "flex-end" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00001 15.27L16.39 15.27" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00001 9.27002L16.39 9.27002" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 4.03003L3.97001 4.03003" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 20.51L3.97001 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "stretch" }
	];
	const WRAP = [
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.07 11.8368L6.77002 15.2757L10.07 18.7255" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "wrap" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.51 12.0109H6.18005" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "nowrap" },
		{ label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.35999 8.76794H15.26C16.34 8.76794 17.22 9.72562 17.22 10.901V16.5926C17.22 17.7679 16.34 18.7256 15.26 18.7256H7.51999" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.0699 12.2068L6.7699 8.76783L10.0699 5.30713" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "wrap-reverse" },
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

	// Handle full width content boxed width
	const fullWidthContentBoxedWidthFn = (width) => {
		setAttributes({ fullWidthContentBoxedWidth: width });
	}

	const fullWidthContentBoxedWidthUnitsFn = (units) => {
		setAttributes({ fullWidthContentBoxedWidthUnits: units });
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

	// Handling responsive
	const handleResponsive = (attr) => {
		// setDeviceType(attr.deviceType, false);
	}

	// Container type custom width
	const containerCustomContentWidthFn = (width) => {
		setAttributes({ containerCustomWidth: width });
	}

	const containerCustomContentWidthFnUnitsFn = (units) => {
		setAttributes({ containerCustomWidthUnits: units });
	}

	const columnGapFn = (width) => {
		setAttributes({ columnGap: width });
	}

	const columnGapUnitsFn = (units) => {
		setAttributes({ columnGapUnits: units });
	}

	const rowGapFn = (width) => {
		setAttributes({ rowGap: width });
	}

	const rowGapUnitsFn = (units) => {
		setAttributes({ rowGapUnits: units });
	}

	const containerZindexFn = (value) => {
		setAttributes({ containerZIndex: value });
	}

	/** Start Heading Padding */
	const containerPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
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



	return (
		<>
			{/* <style>
		{`
			#${p_block_id} {
				${containerBgNormalBackgroundType === 'gradient' ? `  
					background: ${containerBgNormalCustomGradientSwitcher && containerBgNormalCustomGradientInputValue ? containerBgNormalCustomGradientInputValue : containerBgNormalGradientColor};
				`: `
					background: ${containerBgNormalClassicColor};
				`}
			}
		`}
		</style> */}
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
								{tab.name === 'general' && (
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
																	rangeValue={fullWidthContentBoxedWidth}
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
													max={minHeightUnits[deviceType] !== 'px' ? 100 : 1000}
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
													]}
												/>
											</PanelBody>
										</div>
										{isBlockRootParent &&
											<div className="fb-flex-properties-wrapper">
												<PanelBody
													title={__("Flex Properties", "frontis-blocks")}
													initialOpen={true}
												>
													<BaseControl
														id="fb-setting-alignment"
														className="fb-advanced-alignment"
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
																				...containerDirection, // Spread the existing values
																				[deviceType]: item.value, // Update the specific device type
																			},
																		})
																	}
																	className={`fb-advanced-alignment-single-btn ${containerDirection[deviceType] === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
													<BaseControl
														id="fb-setting-alignment"
														className="fb-advanced-alignment"
													>
														<FB_ResponsiveControl
															labelText={__('Align Items', 'frontis-blocks')}
															device={deviceType}
														/>
														<br />
														<ButtonGroup className="fb-advanced-alignment-group-btn">
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
																	className={`fb-advanced-alignment-single-btn ${containerAlignItems[deviceType] === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
													<BaseControl
														id="fb-setting-alignment"
														className="fb-advanced-alignment"
													>
														<FB_ResponsiveControl
															labelText={__('Justify Content', 'frontis-blocks')}
															device={deviceType}
														/>
														<br />
														<ButtonGroup className="fb-advanced-alignment-group-btn">
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
																	className={`fb-advanced-alignment-single-btn ${containerJustify[deviceType] === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
													<BaseControl
														id="fb-setting-alignment"
														className="fb-advanced-alignment"
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
																				...containerWrap, // Spread the existing values
																				[deviceType]: item.value, // Update the specific device type
																			},
																		})
																	}
																	className={`fb-advanced-alignment-single-btn ${containerWrap[deviceType] === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
													{/* <div id="fb-setting-alignment"
														className="fb-advanced-alignment">
														<FB_ResponsiveControl
															labelText={__('Wrap', 'frontis-blocks')}
															device={deviceType}
														/>
														<ButtonGroup className="fb-advanced-alignment-group-btn">
															{WRAP.map((item, key) => (
																<Button
																	key={key}
																	onClick={() =>
																		setAttributes({
																			containerWrap: {
																				...containerWrap, // Spread the existing values
																				[deviceType]: item.value, // Update the specific device type
																			},
																		})
																	}
																	className={`fb-advanced-alignment-single-btn ${containerWrap[deviceType] === item.value ? 'active' : ''}`}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</div> */}
												</PanelBody>
											</div>
										}
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Background", "frontis-blocks")}
											initialOpen={true}
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
																			globalBackgroundImageSize={containerBgNormalBackgroundImageSize}
																			setGlobalBackgroundImageSize={(newSize) => setAttributes({ containerBgNormalBackgroundImageSize: newSize })}
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

										</PanelBody>
										{isBlockRootParent &&
											<PanelBody
												title={__("Container Gap", "frontis-blocks")}
												initialOpen={true}
											>
												<FB_Range
													min={0}
													max={200}
													label={__("Column", "frontis-blocks")}
													rangeValue={columnGap}
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
													rangeValue={rowGap}
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
										}
									</>
								)}
								{tab.name === "advanced" && (
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
														spacingDesktop={containerDesktopPadding}
														spacingTablet={containerTabletPadding}
														spacingMobile={containerMobilePadding}
														handleSpacingUnitHandler={containerPaddingUnitsChange}
														spacingCombineBtn={containerPaddingLink}
														spacingCombineBtnHandler={containerPaddingLinkBtn}
														setAttributes={setAttributes}
													/>
												</PanelBody>

												<PanelBody title="Background" initialOpen={false}>
													<FB_BackgroundColorControl
														bgColorSwitcher={''}
														setBgColorSwitcher={(value) =>
															setAttributes({})
														}
														normalBackgroundType={''}
														setNormalBackgroundType={(value) =>
															setAttributes({})
														}
														normalClassicColor={''}
														setNormalClassicColor={(value) =>
															setAttributes({})
														}
														normalGradientColor={''}
														setNormalGradientColor={(value) =>
															setAttributes({})
														}
														normalCustomGradientSwitcher={
															''
														}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({

															})
														}
														normalCustomGradientInputValue={
															''
														}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({

															})
														}
														normalBackgroundImageUrl={''}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({})
														}
														normalBackgroundImageAlt={''}
														setNormalBackgroundImageAlt={(value) =>
															setAttributes({})
														}
														normalBackgroundImageID={''}
														setNormalBackgroundImageID={(value) =>
															setAttributes({})
														}
														normalBackgroundImagePosition={
															''
														}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({

															})
														}
														normalBackgroundImageAttachment={
															''
														}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({

															})
														}
														normalBackgroundImageRepeat={
															''
														}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({

															})
														}
														normalBackgroundImageSize={''}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({})
														}
														hoverBackgroundType={''}
														setHoverBackgroundType={(value) =>
															setAttributes({})
														}
														hoverClassicColor={''}
														setHoverClassicColor={(value) =>
															setAttributes({})
														}
														hoverGradientColor={''}
														setHoverGradientColor={(value) =>
															setAttributes({})
														}
														hoverCustomGradientSwitcher={
															''
														}
														setHoverCustomGradientSwitcher={(value) =>
															setAttributes({

															})
														}
														hoverCustomGradientInputValue={
															''
														}
														setHoverCustomGradientInputValue={(value) =>
															setAttributes({

															})
														}
														hoverBackgroundImageUrl={''}
														setHoverBackgroundImageUrl={(value) =>
															setAttributes({})
														}
														hoverBackgroundImageAlt={''}
														setHoverBackgroundImageAlt={(value) =>
															setAttributes({})
														}
														hoverBackgroundImageID={''}
														setHoverBackgroundImageID={(value) =>
															setAttributes({})
														}
														hoverBackgroundImagePosition={
															''
														}
														setHoverBackgroundImagePosition={(value) =>
															setAttributes({

															})
														}
														hoverBackgroundImageAttachment={
															''
														}
														setHoverBackgroundImageAttachment={(value) =>
															setAttributes({

															})
														}
														hoverBackgroundImageRepeat={
															''
														}
														setHoverBackgroundImageRepeat={(value) =>
															setAttributes({

															})
														}
														hoverBackgroundImageSize={''}
														setHoverBackgroundImageSize={(value) =>
															setAttributes({})
														}
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
};

export default Inspector;
