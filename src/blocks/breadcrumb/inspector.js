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

import { useState, useEffect, useMemo } from "@wordpress/element";
import {
	OVERFLOW_OP,
	BACKGROUND_TYPES,
	BORDER_STYLES,
} from '@Constants/fbConstants';
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
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		separatorType,
		separatorText,
		separatorIcon,
		separatorGap,
		showHomeIcon,
		homeIcon,
		homeText,
		showItemIcon,
		itemIcon,
		breadcrumbTypography,
		textColor,
		linkColor,
		linkHoverColor,
		separatorColor,
		iconColor,
		align,

		breadcrumbGlobalZIndex,
		breadcrumbOverflow,

		//position
		breadcrumbPositionType,
        breadcrumbHZOrientationType,
        breadcrumbVROrientationType,
        breadcrumbHZLeftOffset,
        breadcrumbHZLeftOffsetUnits,
        breadcrumbHZRightOffset,
        breadcrumbHZRightOffsetUnits,
        breadcrumbVRTopOffset,
        breadcrumbVRTopOffsetUnits,
        breadcrumbVRBottomOffset,
        breadcrumbVRBottomOffsetUnits,

		breadcrumbGlobalWraperID,
		breadcrumbGlobalWraperClass,

		breadcrumbGlobalPaddingUnits,
        breadcrumbGlobalPaddingDesktop,
        breadcrumbGlobalPaddingTablet,
        breadcrumbGlobalPaddingMobile,
        breadcrumbGlobalPaddingLink,

        breadcrumbGlobalMarginUnits,
        breadcrumbGlobalMarginDesktop,
        breadcrumbGlobalMarginTablet,
        breadcrumbGlobalMarginMobile,
        breadcrumbGlobalMarginLink,

		 /** Start Background */
        breadcrumbGlobalBgColorSwitcher,
        breadcrumbGlobalBgNormalBackgroundType,
        breadcrumbGlobalBgNormalClassicColor,
        breadcrumbGlobalBgNormalGradientColor,
        breadcrumbGlobalBgNormalCustomGradientSwitcher,
        breadcrumbGlobalBgNormalCustomGradientInputValue,
        breadcrumbGlobalBgNormalBackgroundImageUrl,
		breadcrumbGlobalBgNormalBackgroundImageAlt,
		breadcrumbGlobalBgNormalBackgroundImageID,
        breadcrumbGlobalBgNormalBackgroundImagePosition,
        breadcrumbGlobalBgNormalBackgroundImageAttachment,
        breadcrumbGlobalBgNormalBackgroundImageRepeat,
        breadcrumbGlobalBgNormalBackgroundImageSize,

        breadcrumbGlobalBgHoverBackgroundType,
        breadcrumbGlobalBgHoverClassicColor,
        breadcrumbGlobalBgHoverGradientColor,
        breadcrumbGlobalBgHoverCustomGradientSwitcher,
        breadcrumbGlobalBgHoverCustomGradientInputValue,
        breadcrumbGlobalBgHoverBackgroundImageUrl,
        breadcrumbGlobalBgHoverBackgroundImagePosition,
        breadcrumbGlobalBgHoverBackgroundImageAttachment,
        breadcrumbGlobalBgHoverBackgroundImageRepeat,
        breadcrumbGlobalBgHoverBackgroundImageSize,

		breadcrumbGlobalBorder,
        breadcrumbGlobalBorderColorSwitcher,
        breadcrumbGlobalBorderColor,
        breadcrumbGlobalBorderHoverColor,
        breadcrumbGlobalBorderUnits,
        breadcrumbGlobalBorderDesktop,
        breadcrumbGlobalBorderTablet,
        breadcrumbGlobalBorderMobile,
        breadcrumbGlobalBorderLink,

        breadcrumbGlobalBorderRadiusUnits,
        breadcrumbGlobalBorderRadiusDesktop,
        breadcrumbGlobalBorderRadiusTablet,
        breadcrumbGlobalBorderRadiusMobile,
        breadcrumbGlobalBorderRadiusLink,

        breadcrumbGlobalBoxShadowSwitcher,
        breadcrumbGlobalBoxShadowValues,
        breadcrumbGlobalBoxShadowCssValue,
        breadcrumbGlobalBoxShadowHoverValues,
        breadcrumbGlobalBoxShadowHoverCssValue,

		breadcrumbDesktopSwitcher,
		breadcrumbTabletSwitcher,
		breadcrumbMobileSwitcher,
		
		breadcrumbCustomCSS,
		blockStyle

	} = attributes;

	const deviceType = useDeviceType();

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-breadcrumb-" + clientId,
			});
		}
	}, [clientId]);

	const homeIconHandler = (IconName) => {
		setAttributes({ homeIcon: IconName })
	}
	const separatorIconHandler = (IconName) => {
		setAttributes({ separatorIcon: IconName })
	}
	const itemIconHandler = (IconName) => {
		setAttributes({ itemIcon: IconName })
	}

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( breadcrumbGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						breadcrumbGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						breadcrumbGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						breadcrumbGlobalPaddingMobile: {
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
					setAttributes( {breadcrumbGlobalPaddingDesktop: {...breadcrumbGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {breadcrumbGlobalPaddingTablet: {...breadcrumbGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {breadcrumbGlobalPaddingMobile: {...breadcrumbGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {breadcrumbGlobalPaddingLink: !breadcrumbGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			breadcrumbGlobalPaddingUnits: {
				...breadcrumbGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${breadcrumbGlobalPaddingDesktop?.top}${breadcrumbGlobalPaddingUnits?.Desktop} ${breadcrumbGlobalPaddingDesktop?.right}${breadcrumbGlobalPaddingUnits?.Desktop} ${breadcrumbGlobalPaddingDesktop?.bottom}${breadcrumbGlobalPaddingUnits?.Desktop} ${breadcrumbGlobalPaddingDesktop?.left}${breadcrumbGlobalPaddingUnits?.Desktop}`;

	const globalTabletPadding     = `${breadcrumbGlobalPaddingTablet?.top}${breadcrumbGlobalPaddingUnits?.Tablet} ${breadcrumbGlobalPaddingTablet?.right}${breadcrumbGlobalPaddingUnits?.Tablet} ${breadcrumbGlobalPaddingTablet?.bottom}${breadcrumbGlobalPaddingUnits?.Tablet} ${breadcrumbGlobalPaddingTablet?.left}${breadcrumbGlobalPaddingUnits?.Tablet}`;

	const globalMobilePadding     = `${breadcrumbGlobalPaddingMobile?.top}${breadcrumbGlobalPaddingUnits?.Mobile} ${breadcrumbGlobalPaddingMobile?.right}${breadcrumbGlobalPaddingUnits?.Mobile} ${breadcrumbGlobalPaddingMobile?.bottom}${breadcrumbGlobalPaddingUnits?.Mobile} ${breadcrumbGlobalPaddingMobile?.left}${breadcrumbGlobalPaddingUnits?.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( breadcrumbGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						breadcrumbGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						breadcrumbGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						breadcrumbGlobalMarginMobile: {
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
					setAttributes( {breadcrumbGlobalMarginDesktop: {...breadcrumbGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {breadcrumbGlobalMarginTablet: {...breadcrumbGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {breadcrumbGlobalMarginMobile: {...breadcrumbGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {breadcrumbGlobalMarginLink: !breadcrumbGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			breadcrumbGlobalMarginUnits: {
				...breadcrumbGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${breadcrumbGlobalMarginDesktop?.top}${breadcrumbGlobalMarginUnits?.Desktop} ${breadcrumbGlobalMarginDesktop?.right}${breadcrumbGlobalMarginUnits?.Desktop} ${breadcrumbGlobalMarginDesktop?.bottom}${breadcrumbGlobalMarginUnits?.Desktop} ${breadcrumbGlobalMarginDesktop?.left}${breadcrumbGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${breadcrumbGlobalMarginTablet?.top}${breadcrumbGlobalMarginUnits?.Tablet} ${breadcrumbGlobalMarginTablet?.right}${breadcrumbGlobalMarginUnits?.Tablet} ${breadcrumbGlobalMarginTablet?.bottom}${breadcrumbGlobalMarginUnits?.Tablet} ${breadcrumbGlobalMarginTablet?.left}${breadcrumbGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${breadcrumbGlobalMarginMobile?.top}${breadcrumbGlobalMarginUnits?.Mobile} ${breadcrumbGlobalMarginMobile?.right}${breadcrumbGlobalMarginUnits?.Mobile} ${breadcrumbGlobalMarginMobile?.bottom}${breadcrumbGlobalMarginUnits?.Mobile} ${breadcrumbGlobalMarginMobile?.left}${breadcrumbGlobalMarginUnits?.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( breadcrumbGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						breadcrumbGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						breadcrumbGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						breadcrumbGlobalBorderMobile: {
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
					setAttributes( {breadcrumbGlobalBorderDesktop: {...breadcrumbGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {breadcrumbGlobalBorderTablet: {...breadcrumbGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {breadcrumbGlobalBorderMobile: {...breadcrumbGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {breadcrumbGlobalBorderLink: !breadcrumbGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			breadcrumbGlobalBorderUnits: {
				...breadcrumbGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${breadcrumbGlobalBorderDesktop?.top}${breadcrumbGlobalBorderUnits?.Desktop} ${breadcrumbGlobalBorderDesktop?.right}${breadcrumbGlobalBorderUnits?.Desktop} ${breadcrumbGlobalBorderDesktop?.bottom}${breadcrumbGlobalBorderUnits?.Desktop} ${breadcrumbGlobalBorderDesktop?.left}${breadcrumbGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${breadcrumbGlobalBorderTablet?.top}${breadcrumbGlobalBorderUnits?.Tablet} ${breadcrumbGlobalBorderTablet?.right}${breadcrumbGlobalBorderUnits?.Tablet} ${breadcrumbGlobalBorderTablet?.bottom}${breadcrumbGlobalBorderUnits?.Tablet} ${breadcrumbGlobalBorderTablet?.left}${breadcrumbGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${breadcrumbGlobalBorderMobile?.top}${breadcrumbGlobalBorderUnits?.Mobile} ${breadcrumbGlobalBorderMobile?.right}${breadcrumbGlobalBorderUnits?.Mobile} ${breadcrumbGlobalBorderMobile?.bottom}${breadcrumbGlobalBorderUnits?.Mobile} ${breadcrumbGlobalBorderMobile?.left}${breadcrumbGlobalBorderUnits?.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( breadcrumbGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						breadcrumbGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						breadcrumbGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						breadcrumbGlobalBorderRadiusMobile: {
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
					setAttributes( {breadcrumbGlobalBorderRadiusDesktop: {...breadcrumbGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {breadcrumbGlobalBorderRadiusTablet: {...breadcrumbGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {breadcrumbGlobalBorderRadiusMobile: {...breadcrumbGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {breadcrumbGlobalBorderRadiusLink: !breadcrumbGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			breadcrumbGlobalBorderRadiusUnits: {
				...breadcrumbGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${breadcrumbGlobalBorderRadiusDesktop?.top}${breadcrumbGlobalBorderRadiusUnits?.Desktop} ${breadcrumbGlobalBorderRadiusDesktop?.right}${breadcrumbGlobalBorderRadiusUnits?.Desktop} ${breadcrumbGlobalBorderRadiusDesktop?.bottom}${breadcrumbGlobalBorderRadiusUnits?.Desktop} ${breadcrumbGlobalBorderRadiusDesktop?.left}${breadcrumbGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${breadcrumbGlobalBorderRadiusTablet?.top}${breadcrumbGlobalBorderRadiusUnits?.Tablet} ${breadcrumbGlobalBorderRadiusTablet?.right}${breadcrumbGlobalBorderRadiusUnits?.Tablet} ${breadcrumbGlobalBorderRadiusTablet?.bottom}${breadcrumbGlobalBorderRadiusUnits?.Tablet} ${breadcrumbGlobalBorderRadiusTablet?.left}${breadcrumbGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${breadcrumbGlobalBorderRadiusMobile?.top}${breadcrumbGlobalBorderRadiusUnits?.Mobile} ${breadcrumbGlobalBorderRadiusMobile?.right}${breadcrumbGlobalBorderRadiusUnits?.Mobile} ${breadcrumbGlobalBorderRadiusMobile?.bottom}${breadcrumbGlobalBorderRadiusUnits?.Mobile} ${breadcrumbGlobalBorderRadiusMobile?.left}${breadcrumbGlobalBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/**
     * Get background normal styles
     */
	const getBackgroundNormalStyles = (device) => {
		const bgType = breadcrumbGlobalBgNormalBackgroundType;
		const bgColor = breadcrumbGlobalBgNormalClassicColor;
		const bgGradient = breadcrumbGlobalBgNormalGradientColor;
		const customGradient = breadcrumbGlobalBgNormalCustomGradientInputValue;
		const customGradientEnabled = breadcrumbGlobalBgNormalCustomGradientSwitcher;

		const bgImageUrl = breadcrumbGlobalBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = breadcrumbGlobalBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = breadcrumbGlobalBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = breadcrumbGlobalBgNormalBackgroundImageRepeat?.[device];
		const bgSize = breadcrumbGlobalBgNormalBackgroundImageSize?.[device];  

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Get background hover styles
	 */
	const getBackgroundHoverStyles = (device) => {
		const bgType = breadcrumbGlobalBgHoverBackgroundType;
		const bgColor = breadcrumbGlobalBgHoverClassicColor;
		const bgGradient = breadcrumbGlobalBgHoverGradientColor;
		const customGradient = breadcrumbGlobalBgHoverCustomGradientInputValue;
		const customGradientEnabled = breadcrumbGlobalBgHoverCustomGradientSwitcher;

		const bgImageUrl = breadcrumbGlobalBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = breadcrumbGlobalBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = breadcrumbGlobalBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = breadcrumbGlobalBgHoverBackgroundImageRepeat?.[device];
		const bgSize = breadcrumbGlobalBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	 /**
     * Convert object to string
     */
    const backgroundStyleObjectToString = (styleObj) => Object.entries(styleObj).map(([key, value]) => `${key}: ${value};`).join(' ');

	const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
	const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
	const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
	const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
	const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
	const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));


	const breadcrumbStyle = useMemo(
		() => `
			.${blockID}.fb-breadcrumb-main-wrapper {
				${breadcrumbPositionType === 'default' ? `position: relative !important;` : ''}
				${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' ? `width: 100%;` : ''}
				${breadcrumbPositionType !== 'default' ? `position: ${breadcrumbPositionType} !important;` : ''}
				${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'left' && breadcrumbHZLeftOffset?.Desktop ? `left: ${breadcrumbHZLeftOffset?.Desktop}${breadcrumbHZLeftOffsetUnits?.Desktop};` : ''} 
				${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'right' && breadcrumbHZRightOffset?.Desktop ? `right: ${breadcrumbHZRightOffset?.Desktop}${breadcrumbHZRightOffsetUnits?.Desktop};` : ''}
				${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'top' && breadcrumbVRTopOffset?.Desktop ? `top: ${breadcrumbVRTopOffset?.Desktop}${breadcrumbVRTopOffsetUnits?.Desktop};` : ''}
				${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'bottom' && breadcrumbVRBottomOffset?.Desktop ? `bottom: ${breadcrumbVRBottomOffset?.Desktop}${breadcrumbVRBottomOffsetUnits?.Desktop};` : ''}
				${breadcrumbGlobalZIndex?.Desktop ? `z-index: ${breadcrumbGlobalZIndex?.Desktop};` : ''}
				${breadcrumbOverflow !== 'default' ? `overflow: ${breadcrumbOverflow};` : ''}
				transition: all .3s ease-in-out;
			}

			.${blockID} .fb-parent-wrapper.fb-breadcrumb-container {
				${desktopBackgroundNormalStyles}
				${globalDesktopPadding && breadcrumbGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
				${globalDesktopMargin && breadcrumbGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
				${breadcrumbGlobalBorder ? `border: ${breadcrumbGlobalBorder};` : ''}
				${globalDesktopBorderWidth && breadcrumbGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
				${globalDesktopBorderRadiusWidth && breadcrumbGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
				${breadcrumbGlobalBorderColor ? `border-color: ${breadcrumbGlobalBorderColor};` : ''}
				${breadcrumbGlobalBoxShadowCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowCssValue};` : ''}
				transition: all .3s ease-in-out;
			}

			.${blockID}.fb-breadcrumb-main-wrapper:hover .fb-parent-wrapper.fb-breadcrumb-container {
				${desktopBackgroundHoverStyles}
				${breadcrumbGlobalBorderHoverColor ? `border-color: ${breadcrumbGlobalBorderHoverColor};` : ''}
            	${breadcrumbGlobalBoxShadowHoverCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowHoverCssValue};` : ''}
				transition: all .3s ease-in-out;
			}

			.${blockID} .fb-breadcrumb-list {
				justify-content: ${align};
				gap: ${separatorGap}px;
			}
			.${blockID} .fb-breadcrumb-item, .${blockID} .fb-breadcrumb-separator {
				color: ${textColor};
			}
			.${blockID} .fb-breadcrumb-link {
				color: ${linkColor};
			}
			.${blockID} .fb-breadcrumb-link:hover {
				color: ${linkHoverColor};
			}
			.${blockID} .fb-breadcrumb-separator {
				color: ${separatorColor};
			}
			.${blockID} .fb-breadcrumb-icon {
				color: ${iconColor};
			}

			@media only screen and (max-width: 1024px) {
				.${blockID}.fb-breadcrumb-main-wrapper {
					${breadcrumbPositionType === 'default' ? `position: relative !important;` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' ? `width: 100%;` : ''}
					${breadcrumbPositionType !== 'default' ? `position: ${breadcrumbPositionType} !important;` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'left' && breadcrumbHZLeftOffset?.Tablet ? `left: ${breadcrumbHZLeftOffset?.Tablet}${breadcrumbHZLeftOffsetUnits?.Tablet};` : ''} 
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'right' && breadcrumbHZRightOffset?.Tablet ? `right: ${breadcrumbHZRightOffset?.Tablet}${breadcrumbHZRightOffsetUnits?.Tablet};` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'top' && breadcrumbVRTopOffset?.Tablet ? `top: ${breadcrumbVRTopOffset?.Tablet}${breadcrumbVRTopOffsetUnits?.Tablet};` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'bottom' && breadcrumbVRBottomOffset?.Tablet ? `bottom: ${breadcrumbVRBottomOffset?.Tablet}${breadcrumbVRBottomOffsetUnits?.Tablet};` : ''}
					${breadcrumbGlobalZIndex?.Tablet ? `z-index: ${breadcrumbGlobalZIndex?.Tablet};` : ''}
					${breadcrumbOverflow !== 'default' ? `overflow: ${breadcrumbOverflow};` : ''}
					transition: all .3s ease-in-out;
				}

				.${blockID} .fb-parent-wrapper.fb-breadcrumb-container {
					${tabletBackgroundNormalStyles}
					${globalTabletPadding && breadcrumbGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
					${globalTabletMargin && breadcrumbGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
					${breadcrumbGlobalBorder ? `border: ${breadcrumbGlobalBorder};` : ''}
					${globalTabletBorderWidth && breadcrumbGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
					${globalTabletBorderRadiusWidth && breadcrumbGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
					${breadcrumbGlobalBorderColor ? `border-color: ${breadcrumbGlobalBorderColor};` : ''}
					${breadcrumbGlobalBoxShadowCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowCssValue};` : ''}
					transition: all .3s ease-in-out;
				}
				.${blockID}.fb-breadcrumb-main-wrapper:hover .fb-parent-wrapper.fb-breadcrumb-container {
					${tabletBackgroundHoverStyles}
					${breadcrumbGlobalBorderHoverColor ? `border-color: ${breadcrumbGlobalBorderHoverColor};` : ''}
            		${breadcrumbGlobalBoxShadowHoverCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowHoverCssValue};` : ''}
					transition: all .3s ease-in-out;
				}
			}

			@media only screen and (max-width: 768px) {
				.${blockID}.fb-breadcrumb-main-wrapper {
					${breadcrumbPositionType === 'default' ? `position: relative !important;` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' ? `width: 100%;` : ''}
					${breadcrumbPositionType !== 'default' ? `position: ${breadcrumbPositionType} !important;` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'left' && breadcrumbHZLeftOffset?.Mobile ? `left: ${breadcrumbHZLeftOffset?.Mobile}${breadcrumbHZLeftOffsetUnits?.Mobile};` : ''} 
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbHZOrientationType === 'right' && breadcrumbHZRightOffset?.Mobile ? `right: ${breadcrumbHZRightOffset?.Mobile}${breadcrumbHZRightOffsetUnits?.Mobile};` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'top' && breadcrumbVRTopOffset?.Mobile ? `top: ${breadcrumbVRTopOffset?.Mobile}${breadcrumbVRTopOffsetUnits?.Mobile};` : ''}
					${breadcrumbPositionType !== 'default' && breadcrumbPositionType !== 'relative' && breadcrumbVROrientationType === 'bottom' && breadcrumbVRBottomOffset?.Mobile ? `bottom: ${breadcrumbVRBottomOffset?.Mobile}${breadcrumbVRBottomOffsetUnits?.Mobile};` : ''}
					${breadcrumbGlobalZIndex?.Mobile ? `z-index: ${breadcrumbGlobalZIndex?.Mobile};` : ''}
					${breadcrumbOverflow !== 'default' ? `overflow: ${breadcrumbOverflow};` : ''}
					transition: all .3s ease-in-out;
				}

				.${blockID} .fb-parent-wrapper.fb-breadcrumb-container {
					${mobileBackgroundNormalStyles}
					${globalMobilePadding && breadcrumbGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
					${globalMobileMargin && breadcrumbGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
					${breadcrumbGlobalBorder ? `border: ${breadcrumbGlobalBorder};` : ''}
					${globalMobileBorderWidth && breadcrumbGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
					${globalMobileBorderRadiusWidth && breadcrumbGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
					${breadcrumbGlobalBorderColor ? `border-color: ${breadcrumbGlobalBorderColor};` : ''}
					${breadcrumbGlobalBoxShadowCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowCssValue};` : ''}
					transition: all .3s ease-in-out;
				}
				.${blockID}.fb-breadcrumb-main-wrapper:hover .fb-parent-wrapper.fb-breadcrumb-container {
					${mobileBackgroundHoverStyles}
					${breadcrumbGlobalBorderHoverColor ? `border-color: ${breadcrumbGlobalBorderHoverColor};` : ''}
            		${breadcrumbGlobalBoxShadowHoverCssValue ? `box-shadow: ${breadcrumbGlobalBoxShadowHoverCssValue};` : ''}
					transition: all .3s ease-in-out;
				}
			}
		`,
		[
			blockID,
			align,
			separatorGap,
			textColor,
			linkColor,
			linkHoverColor,
			separatorColor,
			iconColor,

			breadcrumbGlobalZIndex,
			breadcrumbOverflow,

			//position
			breadcrumbPositionType,
			breadcrumbHZOrientationType,
			breadcrumbVROrientationType,
			breadcrumbHZLeftOffset,
			breadcrumbHZLeftOffsetUnits,
			breadcrumbHZRightOffset,
			breadcrumbHZRightOffsetUnits,
			breadcrumbVRTopOffset,
			breadcrumbVRTopOffsetUnits,
			breadcrumbVRBottomOffset,
			breadcrumbVRBottomOffsetUnits,

			breadcrumbGlobalWraperID,
			breadcrumbGlobalWraperClass,

			breadcrumbGlobalPaddingUnits,
			breadcrumbGlobalPaddingDesktop,
			breadcrumbGlobalPaddingTablet,
			breadcrumbGlobalPaddingMobile,
			breadcrumbGlobalPaddingLink,

			breadcrumbGlobalMarginUnits,
			breadcrumbGlobalMarginDesktop,
			breadcrumbGlobalMarginTablet,
			breadcrumbGlobalMarginMobile,
			breadcrumbGlobalMarginLink,

			/** Start Background */
			breadcrumbGlobalBgColorSwitcher,
			breadcrumbGlobalBgNormalBackgroundType,
			breadcrumbGlobalBgNormalClassicColor,
			breadcrumbGlobalBgNormalGradientColor,
			breadcrumbGlobalBgNormalCustomGradientSwitcher,
			breadcrumbGlobalBgNormalCustomGradientInputValue,
			breadcrumbGlobalBgNormalBackgroundImageUrl,
			breadcrumbGlobalBgNormalBackgroundImageAlt,
			breadcrumbGlobalBgNormalBackgroundImageID,
			breadcrumbGlobalBgNormalBackgroundImagePosition,
			breadcrumbGlobalBgNormalBackgroundImageAttachment,
			breadcrumbGlobalBgNormalBackgroundImageRepeat,
			breadcrumbGlobalBgNormalBackgroundImageSize,

			breadcrumbGlobalBgHoverBackgroundType,
			breadcrumbGlobalBgHoverClassicColor,
			breadcrumbGlobalBgHoverGradientColor,
			breadcrumbGlobalBgHoverCustomGradientSwitcher,
			breadcrumbGlobalBgHoverCustomGradientInputValue,
			breadcrumbGlobalBgHoverBackgroundImageUrl,
			breadcrumbGlobalBgHoverBackgroundImagePosition,
			breadcrumbGlobalBgHoverBackgroundImageAttachment,
			breadcrumbGlobalBgHoverBackgroundImageRepeat,
			breadcrumbGlobalBgHoverBackgroundImageSize,

			breadcrumbGlobalBorder,
			breadcrumbGlobalBorderColorSwitcher,
			breadcrumbGlobalBorderColor,
			breadcrumbGlobalBorderHoverColor,
			breadcrumbGlobalBorderUnits,
			breadcrumbGlobalBorderDesktop,
			breadcrumbGlobalBorderTablet,
			breadcrumbGlobalBorderMobile,
			breadcrumbGlobalBorderLink,

			breadcrumbGlobalBorderRadiusUnits,
			breadcrumbGlobalBorderRadiusDesktop,
			breadcrumbGlobalBorderRadiusTablet,
			breadcrumbGlobalBorderRadiusMobile,
			breadcrumbGlobalBorderRadiusLink,

			breadcrumbGlobalBoxShadowSwitcher,
			breadcrumbGlobalBoxShadowValues,
			breadcrumbGlobalBoxShadowCssValue,
			breadcrumbGlobalBoxShadowHoverValues,
			breadcrumbGlobalBoxShadowHoverCssValue,

			breadcrumbDesktopSwitcher,
			breadcrumbTabletSwitcher,
			breadcrumbMobileSwitcher,

			blockStyle,
        	breadcrumbCustomCSS,
		],
	);

	const customCss = getCustomCss(breadcrumbCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${breadcrumbStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [breadcrumbStyle, customCss]);

	const editorStyle = `${breadcrumbStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("Home Settings", "frontis-blocks")} initialOpen={true}>
				<ToggleControl
					label={__("Show Home Icon", "frontis-blocks")}
					checked={showHomeIcon}
					onChange={(value) => setAttributes({ showHomeIcon: value })}
				/>
				{showHomeIcon && (
					<div className="fb-control-wrapper">
						<label>{__("Home Icon", "frontis-blocks")}</label>
						<FBIconPicker
							value={homeIcon}
							setIconHandler={homeIconHandler}
						/>
					</div>
				)}
				<TextControl
					label={__("Home Text", "frontis-blocks")}
					value={homeText}
					onChange={(value) => setAttributes({ homeText: value })}
				/>
			</PanelBody>

			<PanelBody title={__("Separator Settings", "frontis-blocks")} initialOpen={false}>
				<SelectControl
					label={__("Separator Type", "frontis-blocks")}
					value={separatorType}
					options={[
						{ label: "Text", value: "text" },
						{ label: "Icon", value: "icon" },
					]}
					onChange={(value) => setAttributes({ separatorType: value })}
				/>
				{separatorType === "text" ? (
					<TextControl
						label={__("Separator Text", "frontis-blocks")}
						value={separatorText}
						onChange={(value) => setAttributes({ separatorText: value })}
					/>
				) : (
					<div className="fb-control-wrapper">
						<label>{__("Separator Icon", "frontis-blocks")}</label>
						<FBIconPicker
							value={separatorIcon}
							onChange={(value) => separatorIconHandler(value)}
						/>
					</div>
				)}
				<RangeControl
					label={__("Gap", "frontis-blocks")}
					value={separatorGap}
					onChange={(value) => setAttributes({ separatorGap: value })}
					min={0}
					max={100}
				/>
			</PanelBody>

			<PanelBody title={__("Item Settings", "frontis-blocks")} initialOpen={false}>
				<ToggleControl
					label={__("Show Item Icon", "frontis-blocks")}
					checked={showItemIcon}
					onChange={(value) => setAttributes({ showItemIcon: value })}
					help={__("Show an icon before every breadcrumb item (except Home).", "frontis-blocks")}
				/>
				{showItemIcon && (
					<div className="fb-control-wrapper">
						<label>{__("Item Icon", "frontis-blocks")}</label>
						<FBIconPicker
							value={itemIcon}
							setIconHandler={itemIconHandler}
						/>
					</div>
				)}
			</PanelBody>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
		<>
			<PanelBody title={__("Colors", "frontis-blocks")} initialOpen={false}>

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
							rangeValue={breadcrumbGlobalZIndex}
							onChangeHandler={(value) => setAttributes({ breadcrumbGlobalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}
						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={breadcrumbOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ breadcrumbOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={breadcrumbPositionType}
							setPositionType={(value) => setAttributes({ breadcrumbPositionType: value })}

							HZOrientationType={breadcrumbHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ breadcrumbHZOrientationType: value })
							}
							VROrientationType={breadcrumbVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ breadcrumbVROrientationType: value })
							}

							HZLeftOffset={breadcrumbHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ breadcrumbHZLeftOffset: value })}
							HZLeftOffsetUnits={breadcrumbHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ breadcrumbHZLeftOffsetUnits: value })}
							HZRightOffset={breadcrumbHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ breadcrumbHZRightOffset: value })}
							HZRightOffsetUnits={breadcrumbHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ breadcrumbHZRightOffsetUnits: value })}

							VRTopOffset={breadcrumbVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ breadcrumbVRTopOffset: value })}
							VRTopOffsetUnits={breadcrumbVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ breadcrumbVRTopOffsetUnits: value })}
							VRBottomOffset={breadcrumbVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ breadcrumbVRBottomOffset: value })}
							VRBottomOffsetUnits={breadcrumbVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ breadcrumbVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={breadcrumbGlobalWraperID}
							onChangeValue={(value) => setAttributes({ breadcrumbGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={breadcrumbGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ breadcrumbGlobalWraperClass: value })}
							helpText={__("Separate with spaces key.", "frontis-blocks")}
						/>

					</PanelBody>

					 <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
						<FB_Spacing
							label={__("Padding", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
							spacingUnits={breadcrumbGlobalPaddingUnits}
							spacingDesktop={breadcrumbGlobalPaddingDesktop}
							spacingTablet={breadcrumbGlobalPaddingTablet}
							spacingMobile={breadcrumbGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={breadcrumbGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={breadcrumbGlobalMarginUnits}
							spacingDesktop={breadcrumbGlobalMarginDesktop}
							spacingTablet={breadcrumbGlobalMarginTablet}
							spacingMobile={breadcrumbGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={breadcrumbGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Background", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_SwitcherControl
							label={__("Background Type", "frontis-blocks")}
							globalSwitcher={breadcrumbGlobalBgColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ breadcrumbGlobalBgColorSwitcher: value })}
						/>

						{breadcrumbGlobalBgColorSwitcher === 'normal' && (
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
															onClick={() => setAttributes({ breadcrumbGlobalBgNormalBackgroundType: item.value })}
															className={`fb-setting-background-color-panel-btn-switcher ${breadcrumbGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{breadcrumbGlobalBgNormalBackgroundType === 'classic' && (

												<>
													<FB_ColorControl
														label={__("Color", "frontis-blocks")}
														globalColor={breadcrumbGlobalBgNormalClassicColor}
														setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBgNormalClassicColor: value === undefined ? '' : value })}
													/>

													<FB_ResponsiveBackgroundImageControl
														deviceType={deviceType}
														globalBackgroundImageUrl={breadcrumbGlobalBgNormalBackgroundImageUrl}
														setGlobalBackgroundImageUrl={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageUrl: value })}
														globalBackgroundImageAlt={breadcrumbGlobalBgNormalBackgroundImageAlt}
														setGlobalBackgroundImageAlt={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageAlt: value })}
														globalBackgroundImageID={breadcrumbGlobalBgNormalBackgroundImageID}
														setGlobalBackgroundImageID={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageID: value })}
														globalBackgroundImagePosition={breadcrumbGlobalBgNormalBackgroundImagePosition}
														setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImagePosition: newPosition })}
														globalBackgroundImageAttachment={breadcrumbGlobalBgNormalBackgroundImageAttachment}
														setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageAttachment: newAttachment })}
														globalBackgroundImageRepeat={breadcrumbGlobalBgNormalBackgroundImageRepeat}
														setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageRepeat: newRepeat })}
														globalBackgroundImageSize={breadcrumbGlobalBgNormalBackgroundImageSize}
														setGlobalBackgroundImageSize={(newSize) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageSize: newSize })}
														setAttributes={setAttributes}
													/>

												</>
											)}

											{breadcrumbGlobalBgNormalBackgroundType === 'gradient' && (
												<FB_GradientColorControl
													globalCustomGradientSwitcher={breadcrumbGlobalBgNormalCustomGradientSwitcher}
													setGlobalCustomGradientSwitcher={(value) => setAttributes({ breadcrumbGlobalBgNormalCustomGradientSwitcher: value })}
													globalCustomGradientInputValue={breadcrumbGlobalBgNormalCustomGradientInputValue}
													setGlobalCustomGradientInputValue={(value) => setAttributes({ breadcrumbGlobalBgNormalCustomGradientInputValue: value })}
													globalGradientColor={breadcrumbGlobalBgNormalGradientColor}
													setGlobalGradientColor={(value) => setAttributes({ breadcrumbGlobalBgNormalGradientColor: value === undefined ? null : value })}
												/>
											)}
										</div>
									)}
								/>
							</BaseControl>

						)}

						{breadcrumbGlobalBgColorSwitcher === 'hover' && (
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
															onClick={() => setAttributes({ breadcrumbGlobalBgHoverBackgroundType: item.value })}
															className={`fb-setting-background-color-panel-btn-switcher ${breadcrumbGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>

											{breadcrumbGlobalBgHoverBackgroundType === 'classic' && (

												<>
													<FB_ColorControl
														label={__("Color", "frontis-blocks")}
														globalColor={breadcrumbGlobalBgHoverClassicColor}
														setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBgHoverClassicColor: value === undefined ? '' : value })}
													/>

													<FB_ResponsiveBackgroundImageControl
														deviceType={deviceType}
														globalBackgroundImageUrl={breadcrumbGlobalBgHoverBackgroundImageUrl}
														setGlobalBackgroundImageUrl={(value) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageUrl: value })}
														globalBackgroundImageAlt={breadcrumbGlobalBgNormalBackgroundImageAlt}
														setGlobalBackgroundImageAlt={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageAlt: value })}
														globalBackgroundImageID={breadcrumbGlobalBgNormalBackgroundImageID}
														setGlobalBackgroundImageID={(value) => setAttributes({ breadcrumbGlobalBgNormalBackgroundImageID: value })}
														globalBackgroundImagePosition={breadcrumbGlobalBgHoverBackgroundImagePosition}
														setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImagePosition: newPosition })}
														globalBackgroundImageAttachment={breadcrumbGlobalBgHoverBackgroundImageAttachment}
														setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageAttachment: newAttachment })}
														globalBackgroundImageRepeat={breadcrumbGlobalBgHoverBackgroundImageRepeat}
														setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageRepeat: newRepeat })}
														globalBackgroundImageSize={breadcrumbGlobalBgHoverBackgroundImageSize}
														setGlobalBackgroundImageSize={(newSize) => setAttributes({ breadcrumbGlobalBgHoverBackgroundImageSize: newSize })}
														setAttributes={setAttributes}
													/>

												</>
											)}

											{breadcrumbGlobalBgHoverBackgroundType === 'gradient' && (
												<FB_GradientColorControl
													globalCustomGradientSwitcher={breadcrumbGlobalBgHoverCustomGradientSwitcher}
													setGlobalCustomGradientSwitcher={(value) => setAttributes({ breadcrumbGlobalBgHoverCustomGradientSwitcher: value })}
													globalCustomGradientInputValue={breadcrumbGlobalBgHoverCustomGradientInputValue}
													setGlobalCustomGradientInputValue={(value) => setAttributes({ breadcrumbGlobalBgHoverCustomGradientInputValue: value })}
													globalGradientColor={breadcrumbGlobalBgHoverGradientColor}
													setGlobalGradientColor={(value) => setAttributes({ breadcrumbGlobalBgHoverGradientColor: value === undefined ? null : value })}
												/>
											)}
										</div>
									)}
								/>
							</BaseControl>
						)}
					</PanelBody>

					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>

						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={breadcrumbGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) => setAttributes({ breadcrumbGlobalBorder: value })}
						/>


						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={breadcrumbGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ breadcrumbGlobalBorderColorSwitcher: value })}
						/>

						{breadcrumbGlobalBorderColorSwitcher === 'normal' && (
							<FB_ColorControl
								label={__("Normal Color", "frontis-blocks")}
								globalColor={breadcrumbGlobalBorderColor}
								setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{breadcrumbGlobalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={breadcrumbGlobalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ breadcrumbGlobalBorderHoverColor: value === undefined ? '' : value })}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={breadcrumbGlobalBorderUnits}
							spacingDesktop={breadcrumbGlobalBorderDesktop}
							spacingTablet={breadcrumbGlobalBorderTablet}
							spacingMobile={breadcrumbGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={breadcrumbGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={breadcrumbGlobalBorderRadiusUnits}
							spacingDesktop={breadcrumbGlobalBorderRadiusDesktop}
							spacingTablet={breadcrumbGlobalBorderRadiusTablet}
							spacingMobile={breadcrumbGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={breadcrumbGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={breadcrumbGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) => setAttributes({ breadcrumbGlobalBoxShadowSwitcher: value })}
						/>

						{breadcrumbGlobalBoxShadowSwitcher === 'normal' && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowValues: value })}
								initialShadowValue={breadcrumbGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowCssValue: value })}
							/>
						)}

						{breadcrumbGlobalBoxShadowSwitcher === 'hover' && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowHoverValues: value })}
								initialShadowValue={breadcrumbGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) => setAttributes({ breadcrumbGlobalBoxShadowHoverCssValue: value })}
							/>
						)}
					</PanelBody>

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={breadcrumbDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ breadcrumbDesktopSwitcher: value })}

							tabletValue={breadcrumbTabletSwitcher}
							setTabletValue={(value) => setAttributes({ breadcrumbTabletSwitcher: value })}

							mobileValue={breadcrumbMobileSwitcher}
							setMobileValue={(value) => setAttributes({ breadcrumbMobileSwitcher: value })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={breadcrumbCustomCSS}
							onChangeValue={(value) => setAttributes({ breadcrumbCustomCSS: value })}
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
