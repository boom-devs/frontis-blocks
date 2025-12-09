import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	lottieAnimation,
	lottieAnimationGroup,
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
	BORDER_STYLES,
	OVERFLOW_OP,
	LOTTIE_RENDER_TYPE,
	LOTTIE_HOVER_STATE
} from "../../fbConstants/fbConstants";

import { useState, useEffect, useMemo } from "@wordpress/element";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
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

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		lottieAnimationJsonTypeSwitcher,
		lottieAnimationImageUrl,
		lottieAnimationImageAlt,
		lottieAnimationImageID,
		lottieAnimationJsonUrl,
		lottieAnimationJsonTargetUrl,
		lottieAnimationGlobalWraperCustomCSS,
		lottieRenderer,
		lottieLoop,
		lottieAutoplay,
		lottieAnimationSpeed,
		lottieEffectsOnHover,
		lottieAnimationReverse,
		lottieAnimationGlobalWraperClass,
		lottieAnimationGlobalWraperID,
		lottieAnimationMobileSwitcher,
		lottieAnimationTabletSwitcher,
		lottieAnimationDesktopSwitcher,
		lottieAnimationGlobalZIndex,
		lottieAnimationOverflow,
		lottieAnimationContainerHeight,
		lottieAnimationContainerHeightUnits,
		lottieAnimationContainerWidth,
		lottieAnimationContainerWidthUnits,
		lottieAnimationNormalOpacity,
		lottieAnimationHoverOpacity,
		lottieOpacitySwitcher,
		// Padding
		lottieAnimationGlobalPaddingUnits,
		lottieAnimationGlobalPaddingDesktop,
		lottieAnimationGlobalPaddingTablet,
		lottieAnimationGlobalPaddingMobile,
		lottieAnimationGlobalPaddingLink,

		// Margin
		lottieAnimationGlobalMarginUnits,
		lottieAnimationGlobalMarginDesktop,
		lottieAnimationGlobalMarginTablet,
		lottieAnimationGlobalMarginMobile,
		lottieAnimationGlobalMarginLink,

		// Background
		lottieAnimationGlobalBgColorSwitcher,
		lottieAnimationGlobalNormalBackgroundType,
		lottieAnimationGlobalNormalClassicColor,
		lottieAnimationGlobalNormalGradientColor,
		lottieAnimationGlobalNormalCustomGradientSwitcher,
		lottieAnimationGlobalNormalCustomGradientInputValue,

		lottieAnimationGlobalHoverBackgroundType,
		lottieAnimationGlobalHoverClassicColor,
		lottieAnimationGlobalHoverGradientColor,
		lottieAnimationGlobalHoverCustomGradientSwitcher,
		lottieAnimationGlobalHoverCustomGradientInputValue,

		// Border
		lottieAnimationGlobalBorder,
		lottieAnimationGlobalBorderColorSwitcher,
		lottieAnimationGlobalBorderColor,
		lottieAnimationGlobalBorderHoverColor,
		lottieAnimationGlobalBorderUnits,
		lottieAnimationGlobalBorderDesktop,
		lottieAnimationGlobalBorderTablet,
		lottieAnimationGlobalBorderMobile,
		lottieAnimationGlobalBorderLink,

		// Border Radius
		lottieAnimationGlobalBorderRadiusUnits,
		lottieAnimationGlobalBorderRadiusDesktop,
		lottieAnimationGlobalBorderRadiusTablet,
		lottieAnimationGlobalBorderRadiusMobile,
		lottieAnimationGlobalBorderRadiusLink,

		// Box Shadow
		lottieAnimationGlobalBoxShadowSwitcher,
		lottieAnimationGlobalBoxShadowValues,
		lottieAnimationGlobalBoxShadowCssValue,
		lottieAnimationGlobalBoxShadowHoverValues,
		lottieAnimationGlobalBoxShadowHoverCssValue,
		lottieAnimationPositionType,
		lottieAnimationHZOrientationType,
		lottieAnimationVROrientationType,

		lottieAnimationHZLeftOffset,
		lottieAnimationHZLeftOffsetUnits,

		lottieAnimationHZRightOffset,
		lottieAnimationHZRightOffsetUnits,

		lottieAnimationVRTopOffset,
		lottieAnimationVRTopOffsetUnits,

		lottieAnimationVRBottomOffset,
		lottieAnimationVRBottomOffsetUnits,
	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-lottie-animation-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (lottieAnimationGlobalPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						lottieAnimationGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						lottieAnimationGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						lottieAnimationGlobalPaddingMobile: {
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
					setAttributes({ lottieAnimationGlobalPaddingDesktop: { ...lottieAnimationGlobalPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ lottieAnimationGlobalPaddingTablet: { ...lottieAnimationGlobalPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ lottieAnimationGlobalPaddingMobile: { ...lottieAnimationGlobalPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ lottieAnimationGlobalPaddingLink: !lottieAnimationGlobalPaddingLink });
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			lottieAnimationGlobalPaddingUnits: {
				...lottieAnimationGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding = `${lottieAnimationGlobalPaddingDesktop?.top}${lottieAnimationGlobalPaddingUnits?.Desktop} ${lottieAnimationGlobalPaddingDesktop?.right}${lottieAnimationGlobalPaddingUnits?.Desktop} ${lottieAnimationGlobalPaddingDesktop?.bottom}${lottieAnimationGlobalPaddingUnits?.Desktop} ${lottieAnimationGlobalPaddingDesktop?.left}${lottieAnimationGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${lottieAnimationGlobalPaddingTablet?.top}${lottieAnimationGlobalPaddingUnits?.Tablet} ${lottieAnimationGlobalPaddingTablet?.right}${lottieAnimationGlobalPaddingUnits?.Tablet} ${lottieAnimationGlobalPaddingTablet?.bottom}${lottieAnimationGlobalPaddingUnits?.Tablet} ${lottieAnimationGlobalPaddingTablet?.left}${lottieAnimationGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${lottieAnimationGlobalPaddingMobile?.top}${lottieAnimationGlobalPaddingUnits?.Mobile} ${lottieAnimationGlobalPaddingMobile?.right}${lottieAnimationGlobalPaddingUnits?.Mobile} ${lottieAnimationGlobalPaddingMobile?.bottom}${lottieAnimationGlobalPaddingUnits?.Mobile} ${lottieAnimationGlobalPaddingMobile?.left}${lottieAnimationGlobalPaddingUnits?.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (lottieAnimationGlobalMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						lottieAnimationGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						lottieAnimationGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						lottieAnimationGlobalMarginMobile: {
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
					setAttributes({ lottieAnimationGlobalMarginDesktop: { ...lottieAnimationGlobalMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ lottieAnimationGlobalMarginTablet: { ...lottieAnimationGlobalMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ lottieAnimationGlobalMarginMobile: { ...lottieAnimationGlobalMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ lottieAnimationGlobalMarginLink: !lottieAnimationGlobalMarginLink });
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			lottieAnimationGlobalMarginUnits: {
				...lottieAnimationGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${lottieAnimationGlobalMarginDesktop?.top}${lottieAnimationGlobalMarginUnits?.Desktop} ${lottieAnimationGlobalMarginDesktop?.right}${lottieAnimationGlobalMarginUnits?.Desktop} ${lottieAnimationGlobalMarginDesktop?.bottom}${lottieAnimationGlobalMarginUnits?.Desktop} ${lottieAnimationGlobalMarginDesktop?.left}${lottieAnimationGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${lottieAnimationGlobalMarginTablet?.top}${lottieAnimationGlobalMarginUnits?.Tablet} ${lottieAnimationGlobalMarginTablet?.right}${lottieAnimationGlobalMarginUnits?.Tablet} ${lottieAnimationGlobalMarginTablet?.bottom}${lottieAnimationGlobalMarginUnits?.Tablet} ${lottieAnimationGlobalMarginTablet?.left}${lottieAnimationGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${lottieAnimationGlobalMarginMobile?.top}${lottieAnimationGlobalMarginUnits?.Mobile} ${lottieAnimationGlobalMarginMobile?.right}${lottieAnimationGlobalMarginUnits?.Mobile} ${lottieAnimationGlobalMarginMobile?.bottom}${lottieAnimationGlobalMarginUnits?.Mobile} ${lottieAnimationGlobalMarginMobile?.left}${lottieAnimationGlobalMarginUnits?.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (lottieAnimationGlobalBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						lottieAnimationGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						lottieAnimationGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						lottieAnimationGlobalBorderMobile: {
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
					setAttributes({ lottieAnimationGlobalBorderDesktop: { ...lottieAnimationGlobalBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ lottieAnimationGlobalBorderTablet: { ...lottieAnimationGlobalBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ lottieAnimationGlobalBorderMobile: { ...lottieAnimationGlobalBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ lottieAnimationGlobalBorderLink: !lottieAnimationGlobalBorderLink });
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			lottieAnimationGlobalBorderUnits: {
				...lottieAnimationGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${lottieAnimationGlobalBorderDesktop?.top}${lottieAnimationGlobalBorderUnits?.Desktop} ${lottieAnimationGlobalBorderDesktop?.right}${lottieAnimationGlobalBorderUnits?.Desktop} ${lottieAnimationGlobalBorderDesktop?.bottom}${lottieAnimationGlobalBorderUnits?.Desktop} ${lottieAnimationGlobalBorderDesktop?.left}${lottieAnimationGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${lottieAnimationGlobalBorderTablet?.top}${lottieAnimationGlobalBorderUnits?.Tablet} ${lottieAnimationGlobalBorderTablet?.right}${lottieAnimationGlobalBorderUnits?.Tablet} ${lottieAnimationGlobalBorderTablet?.bottom}${lottieAnimationGlobalBorderUnits?.Tablet} ${lottieAnimationGlobalBorderTablet?.left}${lottieAnimationGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${lottieAnimationGlobalBorderMobile?.top}${lottieAnimationGlobalBorderUnits?.Mobile} ${lottieAnimationGlobalBorderMobile?.right}${lottieAnimationGlobalBorderUnits?.Mobile} ${lottieAnimationGlobalBorderMobile?.bottom}${lottieAnimationGlobalBorderUnits?.Mobile} ${lottieAnimationGlobalBorderMobile?.left}${lottieAnimationGlobalBorderUnits?.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (lottieAnimationGlobalBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						lottieAnimationGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						lottieAnimationGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						lottieAnimationGlobalBorderRadiusMobile: {
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
					setAttributes({ lottieAnimationGlobalBorderRadiusDesktop: { ...lottieAnimationGlobalBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ lottieAnimationGlobalBorderRadiusTablet: { ...lottieAnimationGlobalBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ lottieAnimationGlobalBorderRadiusMobile: { ...lottieAnimationGlobalBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ lottieAnimationGlobalBorderRadiusLink: !lottieAnimationGlobalBorderRadiusLink });
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			lottieAnimationGlobalBorderRadiusUnits: {
				...lottieAnimationGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${lottieAnimationGlobalBorderRadiusDesktop?.top}${lottieAnimationGlobalBorderRadiusUnits?.Desktop} ${lottieAnimationGlobalBorderRadiusDesktop?.right}${lottieAnimationGlobalBorderRadiusUnits?.Desktop} ${lottieAnimationGlobalBorderRadiusDesktop?.bottom}${lottieAnimationGlobalBorderRadiusUnits?.Desktop} ${lottieAnimationGlobalBorderRadiusDesktop?.left}${lottieAnimationGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${lottieAnimationGlobalBorderRadiusTablet?.top}${lottieAnimationGlobalBorderRadiusUnits?.Tablet} ${lottieAnimationGlobalBorderRadiusTablet?.right}${lottieAnimationGlobalBorderRadiusUnits?.Tablet} ${lottieAnimationGlobalBorderRadiusTablet?.bottom}${lottieAnimationGlobalBorderRadiusUnits?.Tablet} ${lottieAnimationGlobalBorderRadiusTablet?.left}${lottieAnimationGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${lottieAnimationGlobalBorderRadiusMobile?.top}${lottieAnimationGlobalBorderRadiusUnits?.Mobile} ${lottieAnimationGlobalBorderRadiusMobile?.right}${lottieAnimationGlobalBorderRadiusUnits?.Mobile} ${lottieAnimationGlobalBorderRadiusMobile?.bottom}${lottieAnimationGlobalBorderRadiusUnits?.Mobile} ${lottieAnimationGlobalBorderRadiusMobile?.left}${lottieAnimationGlobalBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	const lottieAnimationStyle = useMemo(
		() => `
			.${blockID}.fb-lottie-animation-main-wrapper {
				${lottieAnimationPositionType === 'default' ? `position: relative;` : ''}
				${lottieAnimationPositionType !== 'default' ? `position: ${lottieAnimationPositionType} !important;` : ''}
				${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'left' && lottieAnimationHZLeftOffset?.Desktop ? `left: ${lottieAnimationHZLeftOffset?.Desktop}${lottieAnimationHZLeftOffsetUnits?.Desktop};` : ''}
				${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'right' && lottieAnimationHZRightOffset?.Desktop ? `right: ${lottieAnimationHZRightOffset?.Desktop}${lottieAnimationHZRightOffsetUnits?.Desktop};` : ''}
				${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'top' && lottieAnimationVRTopOffset?.Desktop ? `top: ${lottieAnimationVRTopOffset?.Desktop}${lottieAnimationVRTopOffsetUnits?.Desktop};` : ''}
				${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'bottom' && lottieAnimationVRBottomOffset?.Desktop ? `bottom: ${lottieAnimationVRBottomOffset?.Desktop}${lottieAnimationVRBottomOffsetUnits?.Desktop};` : ''}
				${lottieAnimationGlobalZIndex?.Desktop ? `z-index: ${lottieAnimationGlobalZIndex?.Desktop};` : ''}
				${lottieAnimationOverflow !== 'default' ? `overflow: ${lottieAnimationOverflow};` : ''}
				${lottieAnimationContainerWidth?.Desktop ? `width: ${lottieAnimationContainerWidth?.Desktop}${lottieAnimationContainerWidthUnits?.Desktop};` : ''}
				
			}
			.${blockID}.fb-lottie-animation-main-wrapper .fb-lottie-animation-container {
				${lottieAnimationGlobalNormalBackgroundType === 'gradient' ? `  
					${lottieAnimationGlobalNormalCustomGradientSwitcher && lottieAnimationGlobalNormalCustomGradientInputValue ? `background: ${lottieAnimationGlobalNormalCustomGradientInputValue};` : `background: ${lottieAnimationGlobalNormalGradientColor};`}
				`: `
					${lottieAnimationGlobalNormalClassicColor ? `background: ${lottieAnimationGlobalNormalClassicColor};` : ''}
				`}
				${globalDesktopPadding && lottieAnimationGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
				${globalDesktopMargin && lottieAnimationGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
				${lottieAnimationGlobalBorder ? `border: ${lottieAnimationGlobalBorder};` : ''} 
				${globalDesktopBorderWidth && lottieAnimationGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
				${globalDesktopBorderRadiusWidth && lottieAnimationGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
				${lottieAnimationGlobalBorderColor ? `border-color: ${lottieAnimationGlobalBorderColor};` : ''}
				${lottieAnimationGlobalBoxShadowCssValue ? `box-shadow: ${lottieAnimationGlobalBoxShadowCssValue};` : ''}
				${lottieAnimationNormalOpacity ? `opacity: ${lottieAnimationNormalOpacity};` : ''}
				${lottieAnimationContainerHeight?.Desktop ? `height: ${lottieAnimationContainerHeight?.Desktop}${lottieAnimationContainerHeightUnits?.Desktop};` : ''}
				transition: all .3s ease-in-out;
				position: relative;
			}
			.${blockID} .fb-lottie-animation-container:hover{
				${lottieAnimationGlobalHoverBackgroundType === 'gradient' ? `   	
					${lottieAnimationGlobalHoverCustomGradientSwitcher && lottieAnimationGlobalHoverCustomGradientInputValue ? `background: ${lottieAnimationGlobalHoverCustomGradientInputValue};` : `background: ${lottieAnimationGlobalHoverGradientColor};`}
				`: `
					${lottieAnimationGlobalHoverClassicColor ? `background: ${lottieAnimationGlobalHoverClassicColor};` : ''}
				`}
				${lottieAnimationGlobalBorderHoverColor ? `border-color: ${lottieAnimationGlobalBorderHoverColor};` : ''}
				${lottieAnimationGlobalBoxShadowHoverCssValue ? `box-shadow: ${lottieAnimationGlobalBoxShadowHoverCssValue};` : ''}
				${lottieAnimationHoverOpacity ? `opacity: ${lottieAnimationHoverOpacity};` : ''}
			}

			@media only screen and (max-width: 1024px) {
				.${blockID}.fb-lottie-animation-main-wrapper {
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'left' && lottieAnimationHZLeftOffset?.Tablet ? `left: ${lottieAnimationHZLeftOffset?.Tablet}${lottieAnimationHZLeftOffsetUnits?.Tablet};` : ''}
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'right' && lottieAnimationHZRightOffset?.Tablet ? `right: ${lottieAnimationHZRightOffset?.Tablet}${lottieAnimationHZRightOffsetUnits?.Tablet};` : ''}
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'top' && lottieAnimationVRTopOffset?.Tablet ? `top: ${lottieAnimationVRTopOffset?.Tablet}${lottieAnimationVRTopOffsetUnits?.Tablet};` : ''}
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'bottom' && lottieAnimationVRBottomOffset?.Tablet ? `bottom: ${lottieAnimationVRBottomOffset?.Tablet}${lottieAnimationVRBottomOffsetUnits?.Tablet};` : ''}
					${lottieAnimationGlobalZIndex?.Tablet ? `z-index: ${lottieAnimationGlobalZIndex?.Tablet};` : ''}
					${lottieAnimationContainerWidth?.Tablet ? `width: ${lottieAnimationContainerWidth?.Tablet}${lottieAnimationContainerWidthUnits?.Tablet};` : ''}
					
				}
				.${blockID}.fb-lottie-animation-main-wrapper .fb-lottie-animation-container {
					${globalTabletPadding && lottieAnimationGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
					${globalTabletMargin && lottieAnimationGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
					${globalTabletBorderWidth && lottieAnimationGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
					${globalTabletBorderRadiusWidth && lottieAnimationGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
					${lottieAnimationContainerHeight?.Tablet ? `height: ${lottieAnimationContainerHeight?.Tablet}${lottieAnimationContainerHeightUnits?.Tablet};` : ''}
				}
			}
			@media only screen and (max-width: 767px) {
				.${blockID}.fb-lottie-animation-main-wrapper {
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'left' && lottieAnimationHZLeftOffset?.Mobile ? `left: ${lottieAnimationHZLeftOffset?.Mobile}${lottieAnimationHZLeftOffsetUnits?.Mobile};` : ''}
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationHZOrientationType === 'right' && lottieAnimationHZRightOffset?.Mobile ? `right: ${lottieAnimationHZRightOffset?.Mobile}${lottieAnimationHZRightOffsetUnits?.Mobile};` : ''}
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'top' && lottieAnimationVRTopOffset?.Mobile ? `top: ${lottieAnimationVRTopOffset?.Mobile}${lottieAnimationVRTopOffsetUnits?.Mobile};` : ''}
					${lottieAnimationPositionType !== 'default' && lottieAnimationPositionType !== 'relative' && lottieAnimationVROrientationType === 'bottom' && lottieAnimationVRBottomOffset?.Mobile ? `bottom: ${lottieAnimationVRBottomOffset?.Mobile}${lottieAnimationVRBottomOffsetUnits?.Mobile};` : ''}
					${lottieAnimationGlobalZIndex?.Mobile ? `z-index: ${lottieAnimationGlobalZIndex?.Mobile};` : ''}
					${lottieAnimationContainerWidth?.Mobile ? `width: ${lottieAnimationContainerWidth?.Mobile}${lottieAnimationContainerWidthUnits?.Mobile};` : ''}
					
				}
				.${blockID}.fb-lottie-animation-main-wrapper .fb-lottie-animation-container {
					${globalMobilePadding && lottieAnimationGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
					${globalMobileMargin && lottieAnimationGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
					${globalMobileBorderWidth && lottieAnimationGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
					${globalMobileBorderRadiusWidth && lottieAnimationGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
					${lottieAnimationContainerHeight?.Mobile ? `height: ${lottieAnimationContainerHeight?.Mobile}${lottieAnimationContainerHeightUnits?.Mobile};` : ''}
				}
			}
		`,
		[
			attributes
		],
	);

	const customCss = getCustomCss(lottieAnimationGlobalWraperCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${lottieAnimationStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [lottieAnimationStyle, customCss]);

	const editorStyle = `${lottieAnimationStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-dual-lottieAnimation-pressets">
				<PanelBody
					title={__("Lottie", "frontis-blocks")}
					initialOpen={true}
				>
					<FB_SwitcherControl
						label={__("Select Json", "frontis-blocks")}
						globalSwitcher={lottieAnimationJsonTypeSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ lottieAnimationJsonTypeSwitcher: value })}
						options={[
							{ label: __('Json File', 'frontis-blocks'), value: 'json-file' },
							{ label: __('Json Url', 'frontis-blocks'), value: 'json-url' },
						]
						}
					/>
					{lottieAnimationJsonTypeSwitcher === 'json-file' && (
						<>
							<FB_ImageControl
								globalImageUrl={lottieAnimationImageUrl}
								setglobalImageUrl={(value) => {
									// Only update if value is not null/empty, otherwise keep current value
									if (value !== null && value !== undefined && value !== '') {
										setAttributes({ lottieAnimationImageUrl: value });
									}
								}}
								globalImageAlt={lottieAnimationImageAlt}
								setglobalImageAlt={(value) => {
									// Only update if value is not null/empty, otherwise keep current value
									if (value !== null && value !== undefined && value !== '') {
										setAttributes({ lottieAnimationImageAlt: value });
									}
								}}
								globalImageID={lottieAnimationImageID}
								setglobalImageID={(value) => {
									// Only update if value is not null/empty, otherwise keep current value
									if (value !== null && value !== undefined && value !== '') {
										setAttributes({ lottieAnimationImageID: value });
									}
								}}
								isImageSize={false}
							/>
						</>
					)}
					{lottieAnimationJsonTypeSwitcher === 'json-url' && (
						<>
							<FB_UrlControl
								url={lottieAnimationJsonUrl}
								onChangeUrl={(value) => {
									// Only update if value is not null/empty, otherwise keep current value
									if (value !== null && value !== undefined && value !== '') {
										setAttributes({ lottieAnimationJsonUrl: value });
									}
								}}
								openInNewTab={lottieAnimationJsonTargetUrl}
								onChangeOpenInNewTab={(value) => setAttributes({ lottieAnimationJsonTargetUrl: value })}
							/>
						</>
					)}
					<SelectControl
						label={__("Render Type", "frontis-blocks")}
						value={lottieRenderer}
						options={LOTTIE_RENDER_TYPE}
						onChange={(value) =>
							setAttributes({ lottieRenderer: value })
						}
					/>

					<ToggleControl
						label={__("Loop Animation", "frontis-block")}
						checked={lottieLoop}
						onChange={(value) =>
							setAttributes({ lottieLoop: value })
						}
					/>

					<ToggleControl
						label={__("Autoplay", "frontis-block")}
						checked={lottieAutoplay}
						onChange={(value) =>
							setAttributes({ lottieAutoplay: value })
						}
					/>

					<ToggleControl
						label={__("Reverse", "frontis-block")}
						checked={lottieAnimationReverse}
						onChange={(value) =>
							setAttributes({ lottieAnimationReverse: value })
						}
					/>

					<RangeControl
						label={__("Speed", "frontis-blocks")}
						value={lottieAnimationSpeed || 1}
						onChange={(value) =>
							setAttributes({
								lottieAnimationSpeed: value,
							})
						}
						min={0.1}
						max={5}
						step={0.1}
						resetFallbackValue={1}
						help={__("Control animation playback speed. 1 = normal speed, 2 = double speed, 0.5 = half speed", "frontis-blocks")}
					/>
					<SelectControl
						label={__("On Hover", "frontis-blocks")}
						value={lottieEffectsOnHover}
						options={LOTTIE_HOVER_STATE}
						onChange={(value) =>
							setAttributes({ lottieEffectsOnHover: value })
						}
						help={__("Choose what happens when user hovers over the animation", "frontis-blocks")}
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
				title={__("Lottie", "frontis-blocks")}
				initialOpen={true}
			>
				<FB_Range
					min={0}
					max={lottieAnimationContainerWidthUnits[deviceType] === '%' ? 100 : 1000}
					label={__("Width", "frontis-blocks")}
					rangeValue={lottieAnimationContainerWidth}
					onChangeHandler={(value) =>
						setAttributes({ lottieAnimationContainerWidth: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ lottieAnimationContainerWidthUnits: value })
					}
					deviceType={deviceType}
					units={lottieAnimationContainerWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={0}
					max={lottieAnimationContainerHeightUnits[deviceType] === '%' ? 100 : 1000}
					label={__("Height", "frontis-blocks")}
					rangeValue={lottieAnimationContainerHeight}
					onChangeHandler={(value) =>
						setAttributes({ lottieAnimationContainerHeight: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ lottieAnimationContainerHeightUnits: value })
					}
					deviceType={deviceType}
					units={lottieAnimationContainerHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_SwitcherControl
					label={__("Opacity", "frontis-blocks")}
					globalSwitcher={lottieOpacitySwitcher}
					setGlobalSwitcher={(value) => setAttributes({ lottieOpacitySwitcher: value })}
					options={[
						{ label: __('Normal', 'frontis-blocks'), value: 'normal' },
						{ label: __('Hover', 'frontis-blocks'), value: 'hover' },
					]
					}
				/>
				{lottieOpacitySwitcher === 'normal' && (
					<RangeControl
						label={__("Opacity", "frontis-blocks")}
						value={lottieAnimationNormalOpacity}
						onChange={(value) =>
							setAttributes({
								lottieAnimationNormalOpacity: value,
							})
						}
						min={0.1}
						max={1}
						step={0.1}
						resetFallbackValue={1}
					/>
				)}

				{lottieOpacitySwitcher === 'hover' && (
					<RangeControl
						label={__("Opacity", "frontis-blocks")}
						value={lottieAnimationHoverOpacity}
						onChange={(value) =>
							setAttributes({
								lottieAnimationHoverOpacity: value,
							})
						}
						min={0.1}
						max={1}
						step={0.1}
						resetFallbackValue={1}
					/>
				)}

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
							rangeValue={lottieAnimationGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ lottieAnimationGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={lottieAnimationOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ lottieAnimationOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={lottieAnimationPositionType}
							setPositionType={(value) => setAttributes({ lottieAnimationPositionType: value })}

							HZOrientationType={lottieAnimationHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ lottieAnimationHZOrientationType: value })
							}
							VROrientationType={lottieAnimationVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ lottieAnimationVROrientationType: value })
							}

							HZLeftOffset={lottieAnimationHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ lottieAnimationHZLeftOffset: value })}
							HZLeftOffsetUnits={lottieAnimationHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ lottieAnimationHZLeftOffsetUnits: value })}
							HZRightOffset={lottieAnimationHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ lottieAnimationHZRightOffset: value })}
							HZRightOffsetUnits={lottieAnimationHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ lottieAnimationHZRightOffsetUnits: value })}

							VRTopOffset={lottieAnimationVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ lottieAnimationVRTopOffset: value })}
							VRTopOffsetUnits={lottieAnimationVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ lottieAnimationVRTopOffsetUnits: value })}
							VRBottomOffset={lottieAnimationVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ lottieAnimationVRBottomOffset: value })}
							VRBottomOffsetUnits={lottieAnimationVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ lottieAnimationVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={lottieAnimationGlobalWraperID}
							onChangeValue={(value) => setAttributes({ lottieAnimationGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={lottieAnimationGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ lottieAnimationGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>
					</PanelBody>

					<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={lottieAnimationGlobalPaddingUnits}
							spacingDesktop={lottieAnimationGlobalPaddingDesktop}
							spacingTablet={lottieAnimationGlobalPaddingTablet}
							spacingMobile={lottieAnimationGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={lottieAnimationGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={lottieAnimationGlobalMarginUnits}
							spacingDesktop={lottieAnimationGlobalMarginDesktop}
							spacingTablet={lottieAnimationGlobalMarginTablet}
							spacingMobile={lottieAnimationGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={lottieAnimationGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody title="Background Color" initialOpen={false} >

						<FB_BackgroundColorControl
							label={__("Background Color", "frontis-blocks")}
							bgColorSwitcher={lottieAnimationGlobalBgColorSwitcher}
							setBgColorSwitcher={(value) => setAttributes({ lottieAnimationGlobalBgColorSwitcher: value })}

							normalBackgroundType={lottieAnimationGlobalNormalBackgroundType}
							setNormalBackgroundType={(value) => setAttributes({ lottieAnimationGlobalNormalBackgroundType: value })}
							normalClassicColor={lottieAnimationGlobalNormalClassicColor}
							setNormalClassicColor={(value) => setAttributes({ lottieAnimationGlobalNormalClassicColor: value === undefined ? '' : value })}
							normalGradientColor={lottieAnimationGlobalNormalGradientColor}
							setNormalGradientColor={(value) => setAttributes({ lottieAnimationGlobalNormalGradientColor: value === undefined ? null : value })}
							normalCustomGradientSwitcher={lottieAnimationGlobalNormalCustomGradientSwitcher}
							setNormalCustomGradientSwitcher={(value) => setAttributes({ lottieAnimationGlobalNormalCustomGradientSwitcher: value })}
							normalCustomGradientInputValue={lottieAnimationGlobalNormalCustomGradientInputValue}
							setNormalCustomGradientInputValue={(value) => setAttributes({ lottieAnimationGlobalNormalCustomGradientInputValue: value })}

							hoverBackgroundType={lottieAnimationGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) => setAttributes({ lottieAnimationGlobalHoverBackgroundType: value })}
							hoverClassicColor={lottieAnimationGlobalHoverClassicColor}
							setHoverClassicColor={(value) => setAttributes({ lottieAnimationGlobalHoverClassicColor: value === undefined ? '' : value })}
							hoverGradientColor={lottieAnimationGlobalHoverGradientColor}
							setHoverGradientColor={(value) => setAttributes({ lottieAnimationGlobalHoverGradientColor: value === undefined ? null : value })}
							hoverCustomGradientSwitcher={lottieAnimationGlobalHoverCustomGradientSwitcher}
							setHoverCustomGradientSwitcher={(value) => setAttributes({ lottieAnimationGlobalHoverCustomGradientSwitcher: value })}
							hoverCustomGradientInputValue={lottieAnimationGlobalHoverCustomGradientInputValue}
							setHoverCustomGradientInputValue={(value) => setAttributes({ lottieAnimationGlobalHoverCustomGradientInputValue: value })}

							isBackgroundImage={false}

						/>
					</PanelBody>
					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>

						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={lottieAnimationGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ lottieAnimationGlobalBorder: value })}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={lottieAnimationGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ lottieAnimationGlobalBorderColorSwitcher: value })}
						/>

						{lottieAnimationGlobalBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={lottieAnimationGlobalBorderColor}
								setGlobalColor={(value) => setAttributes({ lottieAnimationGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{lottieAnimationGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={lottieAnimationGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ lottieAnimationGlobalBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={lottieAnimationGlobalBorderUnits}
							spacingDesktop={lottieAnimationGlobalBorderDesktop}
							spacingTablet={lottieAnimationGlobalBorderTablet}
							spacingMobile={lottieAnimationGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={lottieAnimationGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={lottieAnimationGlobalBorderRadiusUnits}
							spacingDesktop={lottieAnimationGlobalBorderRadiusDesktop}
							spacingTablet={lottieAnimationGlobalBorderRadiusTablet}
							spacingMobile={lottieAnimationGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={lottieAnimationGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={lottieAnimationGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ lottieAnimationGlobalBoxShadowSwitcher: value })}
						/>

						{lottieAnimationGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ lottieAnimationGlobalBoxShadowValues: value })}
								initialShadowValue={lottieAnimationGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ lottieAnimationGlobalBoxShadowCssValue: value })}
							/>
						)}

						{lottieAnimationGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ lottieAnimationGlobalBoxShadowHoverValues: value })}
								initialShadowValue={lottieAnimationGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ lottieAnimationGlobalBoxShadowHoverCssValue: value })}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={lottieAnimationDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ lottieAnimationDesktopSwitcher: value })}

							tabletValue={lottieAnimationTabletSwitcher}
							setTabletValue={(value) => setAttributes({ lottieAnimationTabletSwitcher: value })}

							mobileValue={lottieAnimationMobileSwitcher}
							setMobileValue={(value) => setAttributes({ lottieAnimationMobileSwitcher: value })}
						/>
					</PanelBody>

					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={lottieAnimationGlobalWraperCustomCSS}
							onChangeValue={(value) => setAttributes({ lottieAnimationGlobalWraperCustomCSS: value })}
						/>
					</PanelBody>
				</div>
			</div>
		</>
	);

	return (
		<>
			<style>
				{editorStyle}
			</style>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
