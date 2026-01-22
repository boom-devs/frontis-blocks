import { __ } from "@wordpress/i18n";

import { InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	riveAnimation,
	riveAnimationGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown,
	Dashicon,
	RangeControl,
	Button,
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
	PRESETS,
	OVERFLOW_OP,
} from "../../fbConstants/fbConstants";

import { useState, useEffect, useMemo } from "@wordpress/element";
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
import FB_ImageControl from '@Components/image-control';
import FB_UrlControl from '@Components/url-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		riveAnimationJsonTypeSwitcher,
		riveAnimationImageUrl,
		riveAnimationImageAlt,
		riveAnimationImageID,
		riveAnimationJsonUrl,
		riveAnimationJsonTargetUrl,
		riveAnimationGlobalWraperCustomCSS,
		riveRenderer,
		riveLoop,
		riveAutoplay,
		riveAnimationSpeed,
		riveEffectsOnHover,
		riveAnimationReverse,
		riveAnimationGlobalWraperClass,
		riveAnimationGlobalWraperID,
		riveAnimationMobileSwitcher,
		riveAnimationTabletSwitcher,
		riveAnimationDesktopSwitcher,
		riveAnimationGlobalZIndex,
		riveAnimationOverflow,
		riveAnimationContainerHeight,
		riveAnimationContainerHeightUnits,
		riveAnimationContainerWidth,
		riveAnimationContainerWidthUnits,
		riveAnimationNormalOpacity,
		riveAnimationHoverOpacity,
		riveOpacitySwitcher,
		// Padding
		riveAnimationGlobalPaddingUnits,
		riveAnimationGlobalPaddingDesktop,
		riveAnimationGlobalPaddingTablet,
		riveAnimationGlobalPaddingMobile,
		riveAnimationGlobalPaddingLink,

		// Margin
		riveAnimationGlobalMarginUnits,
		riveAnimationGlobalMarginDesktop,
		riveAnimationGlobalMarginTablet,
		riveAnimationGlobalMarginMobile,
		riveAnimationGlobalMarginLink,

		// Background
		riveAnimationGlobalBgColorSwitcher,
		riveAnimationGlobalNormalBackgroundType,
		riveAnimationGlobalNormalClassicColor,
		riveAnimationGlobalNormalGradientColor,
		riveAnimationGlobalNormalCustomGradientSwitcher,
		riveAnimationGlobalNormalCustomGradientInputValue,

		riveAnimationGlobalHoverBackgroundType,
		riveAnimationGlobalHoverClassicColor,
		riveAnimationGlobalHoverGradientColor,
		riveAnimationGlobalHoverCustomGradientSwitcher,
		riveAnimationGlobalHoverCustomGradientInputValue,

		// Border
		riveAnimationGlobalBorder,
		riveAnimationGlobalBorderColorSwitcher,
		riveAnimationGlobalBorderColor,
		riveAnimationGlobalBorderHoverColor,
		riveAnimationGlobalBorderUnits,
		riveAnimationGlobalBorderDesktop,
		riveAnimationGlobalBorderTablet,
		riveAnimationGlobalBorderMobile,
		riveAnimationGlobalBorderLink,

		// Border Radius
		riveAnimationGlobalBorderRadiusUnits,
		riveAnimationGlobalBorderRadiusDesktop,
		riveAnimationGlobalBorderRadiusTablet,
		riveAnimationGlobalBorderRadiusMobile,
		riveAnimationGlobalBorderRadiusLink,

		// Box Shadow
		riveAnimationGlobalBoxShadowSwitcher,
		riveAnimationGlobalBoxShadowValues,
		riveAnimationGlobalBoxShadowCssValue,
		riveAnimationGlobalBoxShadowHoverValues,
		riveAnimationGlobalBoxShadowHoverCssValue,
		riveAnimationPositionType,
		riveAnimationHZOrientationType,
		riveAnimationVROrientationType,

		riveAnimationHZLeftOffset,
		riveAnimationHZLeftOffsetUnits,

		riveAnimationHZRightOffset,
		riveAnimationHZRightOffsetUnits,

		riveAnimationVRTopOffset,
		riveAnimationVRTopOffsetUnits,

		riveAnimationVRBottomOffset,
		riveAnimationVRBottomOffsetUnits,

		//canvas width and height
		riveAnimationCanvasWidth,
		riveAnimationCanvasHeight,
		riveAnimationCanvasHeightUnits,
		riveAnimationCanvasWidthUnits,
	} = attributes;

	 useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "fb-slider-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const deviceType = useDeviceType();

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalPaddingMobile: {
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
					setAttributes({ riveAnimationGlobalPaddingDesktop: { ...riveAnimationGlobalPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalPaddingTablet: { ...riveAnimationGlobalPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalPaddingMobile: { ...riveAnimationGlobalPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ riveAnimationGlobalPaddingLink: !riveAnimationGlobalPaddingLink });
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalPaddingUnits: {
				...riveAnimationGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding = `${riveAnimationGlobalPaddingDesktop?.top}${riveAnimationGlobalPaddingUnits?.Desktop} ${riveAnimationGlobalPaddingDesktop?.right}${riveAnimationGlobalPaddingUnits?.Desktop} ${riveAnimationGlobalPaddingDesktop?.bottom}${riveAnimationGlobalPaddingUnits?.Desktop} ${riveAnimationGlobalPaddingDesktop?.left}${riveAnimationGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${riveAnimationGlobalPaddingTablet?.top}${riveAnimationGlobalPaddingUnits?.Tablet} ${riveAnimationGlobalPaddingTablet?.right}${riveAnimationGlobalPaddingUnits?.Tablet} ${riveAnimationGlobalPaddingTablet?.bottom}${riveAnimationGlobalPaddingUnits?.Tablet} ${riveAnimationGlobalPaddingTablet?.left}${riveAnimationGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${riveAnimationGlobalPaddingMobile?.top}${riveAnimationGlobalPaddingUnits?.Mobile} ${riveAnimationGlobalPaddingMobile?.right}${riveAnimationGlobalPaddingUnits?.Mobile} ${riveAnimationGlobalPaddingMobile?.bottom}${riveAnimationGlobalPaddingUnits?.Mobile} ${riveAnimationGlobalPaddingMobile?.left}${riveAnimationGlobalPaddingUnits?.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalMarginMobile: {
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
					setAttributes({ riveAnimationGlobalMarginDesktop: { ...riveAnimationGlobalMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalMarginTablet: { ...riveAnimationGlobalMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalMarginMobile: { ...riveAnimationGlobalMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ riveAnimationGlobalMarginLink: !riveAnimationGlobalMarginLink });
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalMarginUnits: {
				...riveAnimationGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${riveAnimationGlobalMarginDesktop?.top}${riveAnimationGlobalMarginUnits?.Desktop} ${riveAnimationGlobalMarginDesktop?.right}${riveAnimationGlobalMarginUnits?.Desktop} ${riveAnimationGlobalMarginDesktop?.bottom}${riveAnimationGlobalMarginUnits?.Desktop} ${riveAnimationGlobalMarginDesktop?.left}${riveAnimationGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${riveAnimationGlobalMarginTablet?.top}${riveAnimationGlobalMarginUnits?.Tablet} ${riveAnimationGlobalMarginTablet?.right}${riveAnimationGlobalMarginUnits?.Tablet} ${riveAnimationGlobalMarginTablet?.bottom}${riveAnimationGlobalMarginUnits?.Tablet} ${riveAnimationGlobalMarginTablet?.left}${riveAnimationGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${riveAnimationGlobalMarginMobile?.top}${riveAnimationGlobalMarginUnits?.Mobile} ${riveAnimationGlobalMarginMobile?.right}${riveAnimationGlobalMarginUnits?.Mobile} ${riveAnimationGlobalMarginMobile?.bottom}${riveAnimationGlobalMarginUnits?.Mobile} ${riveAnimationGlobalMarginMobile?.left}${riveAnimationGlobalMarginUnits?.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalBorderMobile: {
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
					setAttributes({ riveAnimationGlobalBorderDesktop: { ...riveAnimationGlobalBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalBorderTablet: { ...riveAnimationGlobalBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalBorderMobile: { ...riveAnimationGlobalBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ riveAnimationGlobalBorderLink: !riveAnimationGlobalBorderLink });
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalBorderUnits: {
				...riveAnimationGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${riveAnimationGlobalBorderDesktop?.top}${riveAnimationGlobalBorderUnits?.Desktop} ${riveAnimationGlobalBorderDesktop?.right}${riveAnimationGlobalBorderUnits?.Desktop} ${riveAnimationGlobalBorderDesktop?.bottom}${riveAnimationGlobalBorderUnits?.Desktop} ${riveAnimationGlobalBorderDesktop?.left}${riveAnimationGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${riveAnimationGlobalBorderTablet?.top}${riveAnimationGlobalBorderUnits?.Tablet} ${riveAnimationGlobalBorderTablet?.right}${riveAnimationGlobalBorderUnits?.Tablet} ${riveAnimationGlobalBorderTablet?.bottom}${riveAnimationGlobalBorderUnits?.Tablet} ${riveAnimationGlobalBorderTablet?.left}${riveAnimationGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${riveAnimationGlobalBorderMobile?.top}${riveAnimationGlobalBorderUnits?.Mobile} ${riveAnimationGlobalBorderMobile?.right}${riveAnimationGlobalBorderUnits?.Mobile} ${riveAnimationGlobalBorderMobile?.bottom}${riveAnimationGlobalBorderUnits?.Mobile} ${riveAnimationGlobalBorderMobile?.left}${riveAnimationGlobalBorderUnits?.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (riveAnimationGlobalBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						riveAnimationGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						riveAnimationGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						riveAnimationGlobalBorderRadiusMobile: {
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
					setAttributes({ riveAnimationGlobalBorderRadiusDesktop: { ...riveAnimationGlobalBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ riveAnimationGlobalBorderRadiusTablet: { ...riveAnimationGlobalBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ riveAnimationGlobalBorderRadiusMobile: { ...riveAnimationGlobalBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ riveAnimationGlobalBorderRadiusLink: !riveAnimationGlobalBorderRadiusLink });
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			riveAnimationGlobalBorderRadiusUnits: {
				...riveAnimationGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${riveAnimationGlobalBorderRadiusDesktop?.top}${riveAnimationGlobalBorderRadiusUnits?.Desktop} ${riveAnimationGlobalBorderRadiusDesktop?.right}${riveAnimationGlobalBorderRadiusUnits?.Desktop} ${riveAnimationGlobalBorderRadiusDesktop?.bottom}${riveAnimationGlobalBorderRadiusUnits?.Desktop} ${riveAnimationGlobalBorderRadiusDesktop?.left}${riveAnimationGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${riveAnimationGlobalBorderRadiusTablet?.top}${riveAnimationGlobalBorderRadiusUnits?.Tablet} ${riveAnimationGlobalBorderRadiusTablet?.right}${riveAnimationGlobalBorderRadiusUnits?.Tablet} ${riveAnimationGlobalBorderRadiusTablet?.bottom}${riveAnimationGlobalBorderRadiusUnits?.Tablet} ${riveAnimationGlobalBorderRadiusTablet?.left}${riveAnimationGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${riveAnimationGlobalBorderRadiusMobile?.top}${riveAnimationGlobalBorderRadiusUnits?.Mobile} ${riveAnimationGlobalBorderRadiusMobile?.right}${riveAnimationGlobalBorderRadiusUnits?.Mobile} ${riveAnimationGlobalBorderRadiusMobile?.bottom}${riveAnimationGlobalBorderRadiusUnits?.Mobile} ${riveAnimationGlobalBorderRadiusMobile?.left}${riveAnimationGlobalBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Rive Animation Style */
	const riveAnimationStyle = useMemo(
		() => `
			.${blockID}.fb-rive-animation-main-wrapper {
				${riveAnimationPositionType === 'default' ? `position: relative;` : ''}
				${riveAnimationPositionType !== 'default' ? `position: ${riveAnimationPositionType} !important;` : ''}
				${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'left' && riveAnimationHZLeftOffset?.Desktop ? `left: ${riveAnimationHZLeftOffset?.Desktop}${riveAnimationHZLeftOffsetUnits?.Desktop};` : ''}
				${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'right' && riveAnimationHZRightOffset?.Desktop ? `right: ${riveAnimationHZRightOffset?.Desktop}${riveAnimationHZRightOffsetUnits?.Desktop};` : ''}
				${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'top' && riveAnimationVRTopOffset?.Desktop ? `top: ${riveAnimationVRTopOffset?.Desktop}${riveAnimationVRTopOffsetUnits?.Desktop};` : ''}
				${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'bottom' && riveAnimationVRBottomOffset?.Desktop ? `bottom: ${riveAnimationVRBottomOffset?.Desktop}${riveAnimationVRBottomOffsetUnits?.Desktop};` : ''}
				${riveAnimationGlobalZIndex?.Desktop ? `z-index: ${riveAnimationGlobalZIndex?.Desktop};` : ''}
				${riveAnimationOverflow !== 'default' ? `overflow: ${riveAnimationOverflow};` : ''}
			}
			.${blockID}.fb-rive-animation-main-wrapper .fb-rive-canvas-wrapper {
				${riveAnimationGlobalNormalBackgroundType === 'gradient' ? `  
					${riveAnimationGlobalNormalCustomGradientSwitcher && riveAnimationGlobalNormalCustomGradientInputValue ? `background: ${riveAnimationGlobalNormalCustomGradientInputValue};` : `background: ${riveAnimationGlobalNormalGradientColor};`}
				`: `
					${riveAnimationGlobalNormalClassicColor ? `background: ${riveAnimationGlobalNormalClassicColor};` : ''}
				`}
				${riveAnimationCanvasWidth?.Desktop ? `width: ${riveAnimationCanvasWidth?.Desktop}${riveAnimationCanvasWidthUnits?.Desktop};` : ''}
				${riveAnimationCanvasHeight?.Desktop ? `height: ${riveAnimationCanvasHeight?.Desktop}${riveAnimationCanvasHeightUnits?.Desktop};` : ''}
				${globalDesktopPadding && riveAnimationGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
				${globalDesktopMargin && riveAnimationGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
				${riveAnimationGlobalBorder ? `border: ${riveAnimationGlobalBorder};` : ''} 
				${globalDesktopBorderWidth && riveAnimationGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
				${globalDesktopBorderRadiusWidth && riveAnimationGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
				${riveAnimationGlobalBorderColor ? `border-color: ${riveAnimationGlobalBorderColor};` : ''}
				${riveAnimationGlobalBoxShadowCssValue ? `box-shadow: ${riveAnimationGlobalBoxShadowCssValue};` : ''}
				${riveAnimationNormalOpacity ? `opacity: ${riveAnimationNormalOpacity};` : ''}
				transition: all .3s ease-in-out;
				position: relative;
			}
			.${blockID} .fb-rive-animation-container:hover .fb-rive-canvas-wrapper{
				${riveAnimationGlobalHoverBackgroundType === 'gradient' ? `   	
					${riveAnimationGlobalHoverCustomGradientSwitcher && riveAnimationGlobalHoverCustomGradientInputValue ? `background: ${riveAnimationGlobalHoverCustomGradientInputValue};` : `background: ${riveAnimationGlobalHoverGradientColor};`}
				`: `
					${riveAnimationGlobalHoverClassicColor ? `background: ${riveAnimationGlobalHoverClassicColor};` : ''}
				`}
				${riveAnimationGlobalBorderHoverColor ? `border-color: ${riveAnimationGlobalBorderHoverColor};` : ''}
				${riveAnimationGlobalBoxShadowHoverCssValue ? `box-shadow: ${riveAnimationGlobalBoxShadowHoverCssValue};` : ''}
				${riveAnimationHoverOpacity ? `opacity: ${riveAnimationHoverOpacity};` : ''}
			}

			@media only screen and (max-width: 1024px) {
				.${blockID}.fb-rive-animation-main-wrapper {
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'left' && riveAnimationHZLeftOffset?.Tablet ? `left: ${riveAnimationHZLeftOffset?.Tablet}${riveAnimationHZLeftOffsetUnits?.Tablet};` : ''}
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'right' && riveAnimationHZRightOffset?.Tablet ? `right: ${riveAnimationHZRightOffset?.Tablet}${riveAnimationHZRightOffsetUnits?.Tablet};` : ''}
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'top' && riveAnimationVRTopOffset?.Tablet ? `top: ${riveAnimationVRTopOffset?.Tablet}${riveAnimationVRTopOffsetUnits?.Tablet};` : ''}
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'bottom' && riveAnimationVRBottomOffset?.Tablet ? `bottom: ${riveAnimationVRBottomOffset?.Tablet}${riveAnimationVRBottomOffsetUnits?.Tablet};` : ''}
					${riveAnimationGlobalZIndex?.Tablet ? `z-index: ${riveAnimationGlobalZIndex?.Tablet};` : ''}
				}
				.${blockID}.fb-rive-animation-main-wrapper .fb-rive-canvas-wrapper {
					${riveAnimationCanvasWidth?.Tablet ? `width: ${riveAnimationCanvasWidth?.Tablet}${riveAnimationCanvasWidthUnits?.Tablet};` : ''}
					${riveAnimationCanvasHeight?.Tablet ? `height: ${riveAnimationCanvasHeight?.Tablet}${riveAnimationCanvasHeightUnits?.Tablet};` : ''}
					${globalTabletPadding && riveAnimationGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
					${globalTabletMargin && riveAnimationGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
					${globalTabletBorderWidth && riveAnimationGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
					${globalTabletBorderRadiusWidth && riveAnimationGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
				}
			}
			@media only screen and (max-width: 767px) {
				.${blockID}.fb-rive-animation-main-wrapper {
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'left' && riveAnimationHZLeftOffset?.Mobile ? `left: ${riveAnimationHZLeftOffset?.Mobile}${riveAnimationHZLeftOffsetUnits?.Mobile};` : ''}
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationHZOrientationType === 'right' && riveAnimationHZRightOffset?.Mobile ? `right: ${riveAnimationHZRightOffset?.Mobile}${riveAnimationHZRightOffsetUnits?.Mobile};` : ''}
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'top' && riveAnimationVRTopOffset?.Mobile ? `top: ${riveAnimationVRTopOffset?.Mobile}${riveAnimationVRTopOffsetUnits?.Mobile};` : ''}
					${riveAnimationPositionType !== 'default' && riveAnimationPositionType !== 'relative' && riveAnimationVROrientationType === 'bottom' && riveAnimationVRBottomOffset?.Mobile ? `bottom: ${riveAnimationVRBottomOffset?.Mobile}${riveAnimationVRBottomOffsetUnits?.Mobile};` : ''}
					${riveAnimationGlobalZIndex?.Mobile ? `z-index: ${riveAnimationGlobalZIndex?.Mobile};` : ''}
				}
				.${blockID}.fb-rive-animation-main-wrapper .fb-rive-canvas-wrapper {
					${riveAnimationCanvasWidth?.Mobile ? `width: ${riveAnimationCanvasWidth?.Mobile}${riveAnimationCanvasWidthUnits?.Mobile};` : ''}
					${riveAnimationCanvasHeight?.Mobile ? `height: ${riveAnimationCanvasHeight?.Mobile}${riveAnimationCanvasHeightUnits?.Mobile};` : ''}
					${globalMobilePadding && riveAnimationGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
					${globalMobileMargin && riveAnimationGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
					${globalMobileBorderWidth && riveAnimationGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
					${globalMobileBorderRadiusWidth && riveAnimationGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
				}
			}
		`,
		[
			attributes,
		],
	);

	const customCss = getCustomCss(riveAnimationGlobalWraperCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${riveAnimationStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [riveAnimationStyle, customCss]);

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-dual-riveAnimation-pressets">
				<PanelBody
					title={__("Rive", "frontis-blocks")}
					initialOpen={true}
				>
					<FB_ImageControl
						globalImageUrl={riveAnimationImageUrl}
						setglobalImageUrl={(value) => setAttributes({ riveAnimationImageUrl: value })}
						globalImageAlt={riveAnimationImageAlt}
						setglobalImageAlt={(value) => setAttributes({ riveAnimationImageAlt: value })}
						globalImageID={riveAnimationImageID}
						setglobalImageID={(value) => setAttributes({ riveAnimationImageID: value })}
						isImageSize={false}
						showThumbnail={false}
						allowedExtension="riv"
						allowedTypes={['application/octet-stream']}
					/>

					<ToggleControl
						label={__("Loop Animation", "frontis-block")}
						checked={riveLoop}
						onChange={(value) =>
							setAttributes({ riveLoop: value })
						}
					/>

					<ToggleControl
						label={__("Autoplay", "frontis-block")}
						checked={riveAutoplay}
						onChange={(value) =>
							setAttributes({ riveAutoplay: value })
						}
					/>
				</PanelBody>

			</div>

		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody
				title={__("Rive", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_Range
					min={0}
					max={2000}
					label={__("Width", "frontis-blocks")}
					rangeValue={riveAnimationCanvasWidth}
					onChangeHandler={(value) =>
						setAttributes({ riveAnimationCanvasWidth: value })
					}
					isRangeUnit={false}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={0}
					max={2000}
					label={__("Height", "frontis-blocks")}
					rangeValue={riveAnimationCanvasHeight}
					onChangeHandler={(value) =>
						setAttributes({ riveAnimationCanvasHeight: value })
					}
					isRangeUnit={false}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
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
						title={__("Layout", "frontis-blocks")}
						initialOpen={true}
						className='fb-setting-layout-header'
					>
						<FB_Range
							min={0}
							max={10000000}
							label={__("Z Index", "frontis-blocks")}
							rangeValue={riveAnimationGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ riveAnimationGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={riveAnimationOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ riveAnimationOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={riveAnimationPositionType}
							setPositionType={(value) => setAttributes({ riveAnimationPositionType: value })}

							HZOrientationType={riveAnimationHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ riveAnimationHZOrientationType: value })
							}
							VROrientationType={riveAnimationVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ riveAnimationVROrientationType: value })
							}

							HZLeftOffset={riveAnimationHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ riveAnimationHZLeftOffset: value })}
							HZLeftOffsetUnits={riveAnimationHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ riveAnimationHZLeftOffsetUnits: value })}
							HZRightOffset={riveAnimationHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ riveAnimationHZRightOffset: value })}
							HZRightOffsetUnits={riveAnimationHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ riveAnimationHZRightOffsetUnits: value })}

							VRTopOffset={riveAnimationVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ riveAnimationVRTopOffset: value })}
							VRTopOffsetUnits={riveAnimationVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ riveAnimationVRTopOffsetUnits: value })}
							VRBottomOffset={riveAnimationVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ riveAnimationVRBottomOffset: value })}
							VRBottomOffsetUnits={riveAnimationVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ riveAnimationVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={riveAnimationGlobalWraperID}
							onChangeValue={(value) => setAttributes({ riveAnimationGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={riveAnimationGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ riveAnimationGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={riveAnimationGlobalPaddingUnits}
							spacingDesktop={riveAnimationGlobalPaddingDesktop}
							spacingTablet={riveAnimationGlobalPaddingTablet}
							spacingMobile={riveAnimationGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={riveAnimationGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={riveAnimationGlobalMarginUnits}
							spacingDesktop={riveAnimationGlobalMarginDesktop}
							spacingTablet={riveAnimationGlobalMarginTablet}
							spacingMobile={riveAnimationGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={riveAnimationGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody title="Background Color" initialOpen={false} >

						<FB_BackgroundColorControl
							label={__("Background Color", "frontis-blocks")}
							bgColorSwitcher={riveAnimationGlobalBgColorSwitcher}
							setBgColorSwitcher={(value) => setAttributes({ riveAnimationGlobalBgColorSwitcher: value })}

							normalBackgroundType={riveAnimationGlobalNormalBackgroundType}
							setNormalBackgroundType={(value) => setAttributes({ riveAnimationGlobalNormalBackgroundType: value })}
							normalClassicColor={riveAnimationGlobalNormalClassicColor}
							setNormalClassicColor={(value) => setAttributes({ riveAnimationGlobalNormalClassicColor: value === undefined ? '' : value })}
							normalGradientColor={riveAnimationGlobalNormalGradientColor}
							setNormalGradientColor={(value) => setAttributes({ riveAnimationGlobalNormalGradientColor: value === undefined ? null : value })}
							normalCustomGradientSwitcher={riveAnimationGlobalNormalCustomGradientSwitcher}
							setNormalCustomGradientSwitcher={(value) => setAttributes({ riveAnimationGlobalNormalCustomGradientSwitcher: value })}
							normalCustomGradientInputValue={riveAnimationGlobalNormalCustomGradientInputValue}
							setNormalCustomGradientInputValue={(value) => setAttributes({ riveAnimationGlobalNormalCustomGradientInputValue: value })}

							hoverBackgroundType={riveAnimationGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) => setAttributes({ riveAnimationGlobalHoverBackgroundType: value })}
							hoverClassicColor={riveAnimationGlobalHoverClassicColor}
							setHoverClassicColor={(value) => setAttributes({ riveAnimationGlobalHoverClassicColor: value === undefined ? '' : value })}
							hoverGradientColor={riveAnimationGlobalHoverGradientColor}
							setHoverGradientColor={(value) => setAttributes({ riveAnimationGlobalHoverGradientColor: value === undefined ? null : value })}
							hoverCustomGradientSwitcher={riveAnimationGlobalHoverCustomGradientSwitcher}
							setHoverCustomGradientSwitcher={(value) => setAttributes({ riveAnimationGlobalHoverCustomGradientSwitcher: value })}
							hoverCustomGradientInputValue={riveAnimationGlobalHoverCustomGradientInputValue}
							setHoverCustomGradientInputValue={(value) => setAttributes({ riveAnimationGlobalHoverCustomGradientInputValue: value })}

							isBackgroundImage={false}

						/>
					</PanelBody>
					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>

						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={riveAnimationGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ riveAnimationGlobalBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={riveAnimationGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ riveAnimationGlobalBorderColorSwitcher: value })}
						/>

						{riveAnimationGlobalBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={riveAnimationGlobalBorderColor}
								setGlobalColor={(value) => setAttributes({ riveAnimationGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{riveAnimationGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={riveAnimationGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ riveAnimationGlobalBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={riveAnimationGlobalBorderUnits}
							spacingDesktop={riveAnimationGlobalBorderDesktop}
							spacingTablet={riveAnimationGlobalBorderTablet}
							spacingMobile={riveAnimationGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={riveAnimationGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={riveAnimationGlobalBorderRadiusUnits}
							spacingDesktop={riveAnimationGlobalBorderRadiusDesktop}
							spacingTablet={riveAnimationGlobalBorderRadiusTablet}
							spacingMobile={riveAnimationGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={riveAnimationGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={riveAnimationGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ riveAnimationGlobalBoxShadowSwitcher: value })}
						/>

						{riveAnimationGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowValues: value })}
								initialShadowValue={riveAnimationGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowCssValue: value })}
							/>
						)}

						{riveAnimationGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowHoverValues: value })}
								initialShadowValue={riveAnimationGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ riveAnimationGlobalBoxShadowHoverCssValue: value })}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={riveAnimationDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ riveAnimationDesktopSwitcher: value })}

							tabletValue={riveAnimationTabletSwitcher}
							setTabletValue={(value) => setAttributes({ riveAnimationTabletSwitcher: value })}

							mobileValue={riveAnimationMobileSwitcher}
							setMobileValue={(value) => setAttributes({ riveAnimationMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={riveAnimationGlobalWraperCustomCSS}
							onChangeValue={(value) => setAttributes({ riveAnimationGlobalWraperCustomCSS: value })}
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
