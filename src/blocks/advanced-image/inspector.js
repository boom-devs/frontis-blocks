import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	Button,
	ButtonGroup,
	ColorPalette,
	ColorPicker,
	Dashicon,
	Dropdown,
	PanelBody,
	RangeControl,
	SelectControl,
	TabPanel,
	TextControl,
	ToggleControl
} from "@wordpress/components";

import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Color from "@Components/color";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';

import { useEffect, useMemo, useState } from "@wordpress/element";
import {
	BORDER_STYLES,
	FONT_FAMILYS,
	HEADING,
	TEXT_ALIGN,
} from "../advanced-image/constants/constants";
import "./editor.scss";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		deviceType,
		imageStyle,
		displayCaption,
		imageSize,
		imageWidth,
		horizontalAlign,
		borderType,
		normalBorderColor,
		borderStyle,
		normalBorderRadUnit,
		normalBorderRad,
		normalBorderRadiusLink,
		autoHeightSwitch,
		autoFitSwitch,
		linkSwitch,
		captionAlignment,
		mediaHeight,
		mediaSize,
		mediaSizeUnits,
		mediaHeightUnits,
		linkUrl,
		linkTargetUrl,
		imageHover,
		imageFit,
		displayTitle,
		titleText,
		titleTag,
		headingFontFamily,
		headingFontSize,
		headingFontSizeUnits,
		headingFontWeight,
		headingFontStyle,
		headingTextTransform,
		headingTextDecoration,
		headingLetterSpacing,
		headingLetterSpacingUnits,
		headingLineHeight,
		headingLineHeightUnits,
		HeadingColorSwitcher,
		HeadingColor,
		HeadingHoverColor,
		HeadingBackgroundColor,
		HeadingBorder,
		HeadingBorderColor,
		HeadingBorderHoverColor,
		HeadingBorderColorSwitcher,
		HeadingBorderUnits,
		HeadingDesktopBorderWidth,
		HeadingTabBorderWidth,
		HeadingMobileBorderWidth,
		HeadingBorderLink,
		HeadingBorderRadiusUnits,
		HeadingDesktopBorderRadiusWidth,
		HeadingTabBorderRadiusWidth,
		HeadingMobileBorderRadiusWidth,
		HeadingBorderRadiusLink,
		HeadingPaddingUnits,
		HeadingDesktopPadding,
		HeadingTabPadding,
		HeadingMobilePadding,
		HeadingPaddingLink,
		HeadingMarginUnits,
		HeadingDesktopMargin,
		HeadingTabMargin,
		HeadingMobileMargin,
		HeadingMarginLink,
		titlePosition,
		titleHoverEffects,
		boxGlobalBoxShadowValues,
		boxGlobalBoxShadowCssValue,
		testBgColorSwitcher,
		testBackgroundType,
		testClassicColor,
		testGradientColor,
		testCustomGradientSwitcher,
		testCustomGradientInputValue,
		testBackgroundColorStyle,
		testBackgroundImageUrl,
		testBackgroundImageAlt,
		testBackgroundImageID,
		testBackgroundImagePosition,
		testBackgroundImageAttachment,
		testBackgroundImageSize,
		testBackgroundImageRepeat,
		hoverBackgroundType,
		hoverClassicColor,
		hoverGradientColor,
		hoverCustomGradientSwitcher,
		hoverCustomGradientInputValue,
		hoverBackgroundColorStyle,
		hoverBackgroundImageUrl,
		hoverBackgroundImageAlt,
		hoverBackgroundImageID,
		hoverBackgroundImagePosition,
		hoverBackgroundImageAttachment,
		hoverBackgroundImageSize,
		hoverBackgroundImageRepeat,
		globalPaddingUnits,
		globalPaddingDesktop,
		globalPaddingTablet,
		globalPaddingMobile,
		globalPaddingLink,
		globalMarginUnits,
		globalMarginDesktop,
		globalMarginTablet,
		globalMarginMobile,
		globalMarginLink,
		globalBorder,
		globalBorderColorSwitcher,
		globalBorderColor,
		globalBorderHoverColor,
		globalBorderUnits,
		globalBorderDesktop,
		globalBorderTablet,
		globalBorderMobile,
		globalBorderLink,
		globalBorderRadiusUnits,
		globalBorderRadiusDesktop,
		globalBorderRadiusTablet,
		globalBorderRadiusMobile,
		globalBorderRadiusLink,
		globalZIndex,
		blockStyle,
		showOverlay 
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-advanced-image-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	// Handle device
	const handleDevice = (device) => {
		setAttributes({ deviceType: device });
	};

	const mediaSizeHandler = (value) => {
		setAttributes({ mediaSize: value });
	};
	const mediaHeightHandler = (value) => {
		setAttributes({ mediaHeight: value });
	};

	const mediaSizeUnitsHandler = (value) => {
		setAttributes({ mediaSizeUnits: value });
	};
	const mediaHeightUnitsHandler = (value) => {
		setAttributes({ mediaHeightUnits: value });
	};

	// Heading Padding
	const handleHeadingPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (HeadingPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						HeadingDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						HeadingTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						HeadingMobilePadding: {
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
						HeadingDesktopPadding: { ...HeadingDesktopPadding, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						HeadingTabPadding: { ...HeadingTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						HeadingMobilePadding: { ...HeadingMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingPaddingCombineBtn = () => {
		setAttributes({ HeadingPaddingLink: !HeadingPaddingLink });
	};

	const handleHeadingPaddingUnitsHandler = (unit) => {
		setAttributes({
			HeadingPaddingUnits: {
				...HeadingPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for desktop (using desktop_padding) */
	const headingDesktopPadding = `${HeadingDesktopPadding.top}${HeadingPaddingUnits.Desktop} ${HeadingDesktopPadding.right}${HeadingPaddingUnits.Desktop} ${HeadingDesktopPadding.bottom}${HeadingPaddingUnits.Desktop} ${HeadingDesktopPadding.left}${HeadingPaddingUnits.Desktop}`;
	const headingTabletPadding = `${HeadingTabPadding.top}${HeadingPaddingUnits.Tablet} ${HeadingTabPadding.right}${HeadingPaddingUnits.Tablet} ${HeadingTabPadding.bottom}${HeadingPaddingUnits.Tablet} ${HeadingTabPadding.left}${HeadingPaddingUnits.Tablet}`;
	const headingMobilePadding = `${HeadingMobilePadding.top}${HeadingPaddingUnits.Mobile} ${HeadingMobilePadding.right}${HeadingPaddingUnits.Mobile} ${HeadingMobilePadding.bottom}${HeadingPaddingUnits.Mobile} ${HeadingMobilePadding.left}${HeadingPaddingUnits.Mobile}`;

	// Heading Margin
	const handleHeadingMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (HeadingMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						HeadingDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						HeadingTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						HeadingMobileMargin: {
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
						HeadingDesktopMargin: { ...HeadingDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						HeadingTabMargin: { ...HeadingTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						HeadingMobileMargin: { ...HeadingMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingMarginCombineBtn = () => {
		setAttributes({ HeadingMarginLink: !HeadingMarginLink });
	};

	const handleHeadingMarginUnitsHandler = (unit) => {
		setAttributes({
			HeadingMarginUnits: {
				...HeadingMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for desktop (using desktop_padding) */
	const headingDesktopMargin = `${HeadingDesktopMargin.top}${HeadingMarginUnits.Desktop} ${HeadingDesktopMargin.right}${HeadingMarginUnits.Desktop} ${HeadingDesktopMargin.bottom}${HeadingMarginUnits.Desktop} ${HeadingDesktopMargin.left}${HeadingMarginUnits.Desktop}`;
	const headingTabletMargin = `${HeadingTabMargin.top}${HeadingMarginUnits.Tablet} ${HeadingTabMargin.right}${HeadingMarginUnits.Tablet} ${HeadingTabMargin.bottom}${HeadingMarginUnits.Tablet} ${HeadingTabMargin.left}${HeadingMarginUnits.Tablet}`;
	const headingMobileMargin = `${HeadingMobileMargin.top}${HeadingMarginUnits.Mobile} ${HeadingMobileMargin.right}${HeadingMarginUnits.Mobile} ${HeadingMobileMargin.bottom}${HeadingMarginUnits.Mobile} ${HeadingMobileMargin.left}${HeadingMarginUnits.Mobile}`;
	

	
	/** Start Global Setting */
	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalPaddingMobile: {
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
						globalPaddingDesktop: {
							...globalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalPaddingTablet: { ...globalPaddingTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						globalPaddingMobile: { ...globalPaddingMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ globalPaddingLink: !globalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			globalPaddingUnits: {
				...globalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDeskPadding = `${globalPaddingDesktop.top}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.right}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.bottom}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.left}${globalPaddingUnits.Desktop}`;
	const globalTabPadding = `${globalPaddingTablet.top}${globalPaddingUnits.Tablet} ${globalPaddingTablet.right}${globalPaddingUnits.Tablet} ${globalPaddingTablet.bottom}${globalPaddingUnits.Tablet} ${globalPaddingTablet.left}${globalPaddingUnits.Tablet}`;
	const globalMobPadding = `${globalPaddingMobile.top}${globalPaddingUnits.Mobile} ${globalPaddingMobile.right}${globalPaddingUnits.Mobile} ${globalPaddingMobile.bottom}${globalPaddingUnits.Mobile} ${globalPaddingMobile.left}${globalPaddingUnits.Mobile}`;

	
	/** Start Global margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalMarginMobile: {
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
						globalMarginDesktop: { ...globalMarginDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						globalMarginTablet: { ...globalMarginTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						globalMarginMobile: { ...globalMarginMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ globalMarginLink: !globalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			globalMarginUnits: {
				...globalMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDeskMargin = `${globalMarginDesktop.top}${globalMarginUnits.Desktop} ${globalMarginDesktop.right}${globalMarginUnits.Desktop} ${globalMarginDesktop.bottom}${globalMarginUnits.Desktop} ${globalMarginDesktop.left}${globalMarginUnits.Desktop}`;
	const globalTabMargin = `${globalMarginTablet.top}${globalMarginUnits.Tablet} ${globalMarginTablet.right}${globalMarginUnits.Tablet} ${globalMarginTablet.bottom}${globalMarginUnits.Tablet} ${globalMarginTablet.left}${globalMarginUnits.Tablet}`;
	const globalMobMargin = `${globalMarginMobile.top}${globalMarginUnits.Mobile} ${globalMarginMobile.right}${globalMarginUnits.Mobile} ${globalMarginMobile.bottom}${globalMarginUnits.Mobile} ${globalMarginMobile.left}${globalMarginUnits.Mobile}`;

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderMobile: {
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
						globalBorderDesktop: { ...globalBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderTablet: { ...globalBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderMobile: { ...globalBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ globalBorderLink: !globalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			globalBorderUnits: {
				...globalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	/** End Global border */
	const globalDeskBorder = `${globalBorderDesktop.top}${globalBorderUnits.Desktop} ${globalBorderDesktop.right}${globalBorderUnits.Desktop} ${globalBorderDesktop.bottom}${globalBorderUnits.Desktop} ${globalBorderDesktop.left}${globalBorderUnits.Desktop}`;
	const globalTabBorder = `${globalBorderTablet.top}${globalBorderUnits.Tablet} ${globalBorderTablet.right}${globalBorderUnits.Tablet} ${globalBorderTablet.bottom}${globalBorderUnits.Tablet} ${globalBorderTablet.left}${globalBorderUnits.Tablet}`;
	const globalMobBorder = `${globalBorderMobile.top}${globalBorderUnits.Mobile} ${globalBorderMobile.right}${globalBorderUnits.Mobile} ${globalBorderMobile.bottom}${globalBorderUnits.Mobile} ${globalBorderMobile.left}${globalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (globalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						globalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderRadiusMobile: {
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
						globalBorderRadiusDesktop: {
							...globalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						globalBorderRadiusTablet: {
							...globalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						globalBorderRadiusMobile: {
							...globalBorderRadiusMobile,
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
		setAttributes({ globalBorderRadiusLink: !globalBorderRadiusLink });
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			globalBorderRadiusUnits: {
				...globalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Global border */

	/** End Global Border Radius */
	const globalDeskBorderRadius = `${globalBorderRadiusDesktop.top}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.right}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.bottom}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.left}${globalBorderRadiusUnits.Desktop}`;
	const globalTabBorderRadius = `${globalBorderRadiusTablet.top}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.right}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.bottom}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.left}${globalBorderRadiusUnits.Tablet}`;
	const globalMobBorderRadius = `${globalBorderRadiusMobile.top}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.right}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.bottom}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.left}${globalBorderRadiusUnits.Mobile}`;

	/** Start Global Border Color */
	const handleGlobalBorderColorSwitcherChange = (value) => {
		setAttributes({ globalBorderColorSwitcher: value });
	};
	const handleGlobalBorderColorChange = (value) => {
		setAttributes({ globalBorderColor: value });
	};
	const handleGlobalBorderHoverColorChange = (value) => {
		setAttributes({ globalBorderHoverColor: value });
	};

	const advancedImageStyle = useMemo(
		() => `
		.fb-advanced-image-wrapper.${blockID} {
			padding: ${globalDeskPadding};
			margin: ${globalDeskMargin};
			border: ${globalBorder};
			border-width: ${globalDeskBorder};
			border-radius: ${globalDeskBorderRadius} !important;
			${globalBorderColor !== undefined ? `border-color: ${globalBorderColor};` : ""}
			${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : "" }
			${testBackgroundType === "gradient" ? ` background: ${ testCustomGradientSwitcher && testCustomGradientInputValue ? testCustomGradientInputValue : testGradientColor };
			`
			: testBackgroundImageUrl && testBackgroundImageUrl !== "null"
			? `
			background-image: url(${testBackgroundImageUrl});
			background-position: ${testBackgroundImagePosition};
			background-attachment: ${testBackgroundImageAttachment};
			background-repeat: ${testBackgroundImageRepeat};
			background-size: ${testBackgroundImageSize};
			`
			: `
			background: ${testClassicColor};
					`
			}
			transition: all .3s ease-in-out;
		}
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
			width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
			${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Desktop}${mediaHeightUnits.Desktop}`
			};
		}
		@media all and (max-width: 1024px) {
			.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
				padding: ${globalTabPadding};
				margin: ${globalTabMargin};
				border-width: ${globalTabBorder};
				border-radius: ${globalTabBorderRadius} !important;
				width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
				${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}` };
			}
		}
		@media all and (max-width: 767px) {
			.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
				padding: ${globalMobPadding};
				margin: ${globalMobMargin};
				border-width: ${globalMobBorder};
				border-radius: ${globalMobBorderRadius} !important;
				width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
				${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}` };
			}
		}
		
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image-caption figcaption {
			text-align: ${captionAlignment};
		}
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
			${HeadingColor !== undefined ? `color: ${HeadingColor};` : ""}
			${ HeadingBackgroundColor !== undefined ? `background-color: ${HeadingBackgroundColor};` : ""
			}
			${headingFontFamily ? `font-family: ${headingFontFamily};` : ''}
			${headingFontSize.Desktop && headingFontSizeUnits.Desktop ? `font-size: ${headingFontSize.Desktop}${headingFontSizeUnits.Desktop};` : ''}
			${headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
			${headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
			${headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
			${headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
			${headingLetterSpacing.Desktop && headingLetterSpacingUnits.Desktop ? `letter-spacing: ${headingLetterSpacing.Desktop}${headingLetterSpacingUnits.Desktop};` : ''}
			${headingLineHeight.Desktop && headingLineHeightUnits.Desktop ? `line-height: ${headingLineHeight.Desktop}${headingLineHeightUnits.Desktop};` : ''}
			transition: all .3s ease-in-out;
			${headingDesktopPadding ? `padding: ${headingDesktopPadding};` : ""}
			${headingDesktopMargin ? `padding: ${headingDesktopMargin};` : ""}
			border: ${HeadingBorder};
			${HeadingBorderColor !== undefined ? `border-color: ${HeadingBorderColor};` : "" }
		}
		@media all and (max-width: 1024px) {
			.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
				${headingFontSize.Tablet && headingFontSizeUnits.Tablet ? `font-size: ${headingFontSize.Tablet}${headingFontSizeUnits.Tablet};` : ''}
                ${headingLetterSpacing.Tablet && headingLetterSpacingUnits.Tablet ? `letter-spacing: ${headingLetterSpacing.Tablet}${headingLetterSpacingUnits.Tablet};` : ''}
                ${headingLineHeight.Tablet && headingLineHeightUnits.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
				width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
				${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}` };
				${headingTabletPadding ? `padding: ${headingTabletPadding};` : ""}
				${headingTabletMargin ? `padding: ${headingTabletMargin};` : ""}
			}
		}
		@media all and (max-width: 767px) {
			.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
				${headingFontSize.Mobile && headingFontSizeUnits.Mobile ? `font-size: ${headingFontSize.Mobile}${headingFontSizeUnits.Mobile};` : ''}
                ${headingLetterSpacing.Mobile && headingLetterSpacingUnits.Mobile ? `letter-spacing: ${headingLetterSpacing.Mobile}${headingLetterSpacingUnits.Mobile};` : ''}
                ${headingLineHeight.Mobile && headingLineHeightUnits.Mobile ? `line-height: ${headingLineHeight.Mobile}${headingLineHeightUnits.Mobile};` : ''}
				width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
				${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}` };
				${headingMobilePadding ? `padding: ${headingMobilePadding};` : ""}
				${headingMobileMargin ? `padding: ${headingMobileMargin};` : ""}
			}
		}
	`,
		[
			blockID,
			globalDeskPadding,
			globalDeskMargin,
			globalBorder,
			globalDeskBorder,
			globalDeskBorderRadius,
			globalBorderColor,
			boxGlobalBoxShadowCssValue,
			testBackgroundType,
			testCustomGradientSwitcher,
			testCustomGradientInputValue,
			testGradientColor,
			testBackgroundImageUrl,
			testBackgroundImagePosition,
			testBackgroundImageAttachment,
			testBackgroundImageRepeat,
			testBackgroundImageSize,
			testClassicColor,
			mediaSize,
			mediaSizeUnits,
			autoHeightSwitch,
			mediaHeight,
			mediaHeightUnits,
			captionAlignment,
			HeadingColor,
			HeadingBackgroundColor,
			headingFontFamily,
			headingFontSize,
			headingFontSizeUnits,
			headingFontWeight,
			headingFontStyle,
			headingTextTransform,
			headingTextDecoration,
			headingLetterSpacing,
			headingLetterSpacingUnits,
			headingLineHeight,
			headingLineHeightUnits,
			HeadingBorder,
		],
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${advancedImageStyle}`.replace(/\s+/g, " ").trim(),
		});
	}, [advancedImageStyle]);

	const editorStyle = advancedImageStyle.replace(/\s+/g, ' ').trim();

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
										<div className="fb-advanced-wrapper">
											<PanelBody
												title={__("General", "frontis-blocks")}
												initialOpen={true}
											>
												<SelectControl
													label={__("Styles", "frontis-blocks")}
													value={imageStyle || "square"}
													options={[
														{
															label: __("Circle", "frontis-blocks"),
															value: "circle",
														},
														{
															label: __("Square", "frontis-blocks"),
															value: "square",
														},
														{
															label: __("Rounded", "frontis-blocks"),
															value: "rounded",
														},
														{
															label: __("Octagon", "frontis-blocks"),
															value: "octagon",
														},
														{
															label: __("Triangle", "frontis-blocks"),
															value: "triangle",
														},
														{
															label: __("Rhombus", "frontis-blocks"),
															value: "rhombus",
														},
														{
															label: __("Hexagon", "frontis-blocks"),
															value: "hexagon",
														},
														{
															label: __("Bevel", "frontis-blocks"),
															value: "bevel",
														},
														{
															label: __("Abstract", "frontis-blocks"),
															value: "abstract",
														},
														{
															label: __("Container", "frontis-blocks"),
															value: "container",
														},
														{
															label: __("Aesthetic Blob", "frontis-blocks"),
															value: "aesthetic-blob",
														},
														{
															label: __("Aesthetic Blob 2", "frontis-blocks"),
															value: "aesthetic-blob-2",
														},
														{
															label: __("Aesthetic Blob 3", "frontis-blocks"),
															value: "aesthetic-blob-3",
														},
														{
															label: __("Aesthetic Blob 4", "frontis-blocks"),
															value: "aesthetic-blob-4",
														},
														{
															label: __("Irregular Blob", "frontis-blocks"),
															value: "irregular-blob",
														},
														{
															label: __("Triangle Blob", "frontis-blocks"),
															value: "triangle-blob",
														},
														{
															label: __("Overlaped Blob", "frontis-blocks"),
															value: "overlaped-blob",
														},
														{
															label: __("Seperate Blob", "frontis-blocks"),
															value: "seperate-blob",
														},
														{
															label: __("Pattern", "frontis-blocks"),
															value: "pattern",
														},
														
													]}
													onChange={(newStyle) =>
														setAttributes({ imageStyle: newStyle })
													}
													__nextHasNoMarginBottom
												/>
												<ToggleControl
													__nextHasNoMarginBottom
													label={__("Show Overlay", "frontis-block")}
													checked={showOverlay}
													onChange={(newValue) => {
														setAttributes({ showOverlay: newValue });
													}}
												/>
												{/* Display Caption */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__("Display Caption", "frontis-block")}
													checked={displayCaption}
													onChange={(newValue) => {
														setAttributes({ displayCaption: newValue });
													}}
												/>

												{displayCaption && (
													<>
														<BaseControl
															label={__("Caption Alignment", "frontis-blocks")}
															id="fb-setting-text-alignment"
															className="fb-setting-text-alignment"
														>
															<ButtonGroup className="fb-setting-text-alignment-group-btn">
																{TEXT_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({
																				captionAlignment: item.value,
																			})
																		}
																		className={`fb-setting-text-alignment-single-btn ${
																			captionAlignment === item.value
																				? "active"
																				: ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>
													</>
												)}
												{/* Title */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__("Display Title", "frontis-block")}
													checked={displayTitle}
													onChange={(newValue) => {
														setAttributes({ displayTitle: newValue });
													}}
												/>
												{displayTitle && (
													<>
														<TextControl
															value={titleText}
															onChange={(value) =>
																setAttributes({ titleText: value })
															}
															className="fb-advance-title"
															placeholder={__("Enter Title", "frontis-blocks")}
														/>
														<BaseControl
															label={__("Title Tag", "frontis-blocks")}
															id="fb-setting-text-alignment"
															className="fb-setting-text-alignment"
														>
															<ButtonGroup className="fb-setting-text-alignment-group-btn">
																{HEADING.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() =>
																			setAttributes({ titleTag: item.value })
																		}
																		className={`fb-setting-text-alignment-single-btn ${
																			titleTag === item.value ? "active" : ""
																		}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
														</BaseControl>
														<SelectControl
															label={__("Title Position", "frontis-blocks")}
															value={titlePosition || "center"}
															options={[
																{
																	label: __("Center", "frontis-blocks"),
																	value: "center",
																},
																{
																	label: __("Center Left", "frontis-blocks"),
																	value: "center-left",
																},
																{
																	label: __("Center Right", "frontis-blocks"),
																	value: "center-right",
																},
																{
																	label: __("Top Left", "frontis-blocks"),
																	value: "top-left",
																},
																{
																	label: __("Top Center", "frontis-blocks"),
																	value: "top-center",
																},
																{
																	label: __("Top Right", "frontis-blocks"),
																	value: "top-right",
																},
																{
																	label: __("Bottom Left", "frontis-blocks"),
																	value: "bottom-left",
																},
																{
																	label: __("Bottom Center", "frontis-blocks"),
																	value: "bottom-center",
																},
																{
																	label: __("Bottom Right", "frontis-blocks"),
																	value: "bottom-right",
																},
																{
																	label: __(
																		"Vertically Center",
																		"frontis-blocks",
																	),
																	value: "vertical-center",
																},
															]}
															onChange={(value) =>
																setAttributes({ titlePosition: value })
															}
															__nextHasNoMarginBottom
														/>
													</>
												)}

												{/* Image Size */}
												<SelectControl
													label={__("Image Size", "frontis-blocks")}
													value={imageSize || "default"}
													options={[
														{
															label: __("Default", "frontis-blocks"),
															value: "default",
														},
														{
															label: __("Thumbnail", "frontis-blocks"),
															value: "thumbnail",
														},
														{
															label: __("Medium", "frontis-blocks"),
															value: "medium",
														},
														{
															label: __("Large", "frontis-blocks"),
															value: "large",
														},
														{
															label: __("Full Size", "frontis-blocks"),
															value: "full-size",
														},
														{
															label: __("Custom", "frontis-blocks"),
															value: "custom",
														},
													]}
													onChange={(size) =>
														setAttributes({ imageSize: size })
													}
													__nextHasNoMarginBottom
												/>

												{/*Width control*/}

												{imageSize === "custom" && (
													<>
														<FB_Range
															min={1}
															max={1400}
															label={__("Width", "frontis-blocks")}
															rangeValue={mediaSize}
															onChangeHandler={mediaSizeHandler}
															rangeUnitHandler={mediaSizeUnitsHandler}
															deviceType={deviceType}
															units={mediaSizeUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={200}
														/>
														<FB_Range
															min={1}
															max={1400}
															label={__("Height", "frontis-blocks")}
															rangeValue={mediaHeight}
															onChangeHandler={mediaHeightHandler}
															rangeUnitHandler={mediaHeightUnitsHandler}
															deviceType={deviceType}
															units={mediaHeightUnits}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={200}
														/>
													</>
												)}
												{/* Auto Height */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__("Auto Height", "frontis-block")}
													checked={autoHeightSwitch}
													onChange={(newValue) => {
														setAttributes({ autoHeightSwitch: newValue });
													}}
												/>

												{/* Auto Fit Image */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__("Auto Fit Image?", "frontis-block")}
													checked={autoFitSwitch}
													onChange={(newValue) => {
														setAttributes({ autoFitSwitch: newValue });
													}}
												/>

												{/* Image Fit Options */}
												{autoFitSwitch && (
													<SelectControl
														label={__("Image Fit Options", "frontis-blocks")}
														value={imageFit || "cover"}
														options={[
															{
																label: __("Cover", "frontis-blocks"),
																value: "cover",
															},
															{
																label: __("Fill", "frontis-blocks"),
																value: "fill",
															},
															{
																label: __("Contain", "frontis-blocks"),
																value: "contain",
															},
														]}
														onChange={(size) =>
															setAttributes({ imageFit: size })
														}
														__nextHasNoMarginBottom
													/>
												)}

												{/* Enable Link? */}
												<ToggleControl
													__nextHasNoMarginBottom
													label={__("Enable Link?", "frontis-block")}
													checked={linkSwitch}
													onChange={(newValue) => {
														setAttributes({ linkSwitch: newValue });
													}}
												/>

												{linkSwitch && (
													<div className="fb-link-control-wrapper">
														<BaseControl label={__("URL", "frontis-blocks")}>
															<div className="fb-link-control-inner-wrapper">
																<TextControl
																	value={linkUrl}
																	onChange={(value) =>
																		setAttributes({ linkUrl: value })
																	}
																	className="fb-link-control-url"
																	placeholder={__("https://", "frontis-blocks")}
																/>
																<Dropdown
																	className="fb-setting-dropdown-icon-wrapper"
																	contentClassName="fb-setting-dropdown-icon-content"
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
																			className="fb-setting-dropdown-icon-btn"
																		>
																			<Dashicon
																				icon="color-picker"
																				className="fb-setting-dropdown-icon"
																			/>
																		</Button>
																	)}
																	renderContent={() => (
																		<div className="fb-link-control-icon-popup">
																			<BaseControl className="fb-link-control-icon-popup-inner">
																				<ToggleControl
																					label={__(
																						"Open in new tab",
																						"frontis-blocks",
																					)}
																					checked={linkTargetUrl}
																					onChange={(value) =>
																						setAttributes({
																							linkTargetUrl: value,
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
												{/*	Hover Effect */}
												<SelectControl
													label={__("Hover Effect", "frontis-blocks")}
													value={imageHover}
													options={[
														{
															label: __("No Effect", "frontis-blocks"),
															value: "no-effect",
														},
														{
															label: __("Zoom In", "frontis-blocks"),
															value: "zoom-in",
														},
														{
															label: __("Zoom Out", "frontis-blocks"),
															value: "zoom-out",
														},
														{
															label: __("Slide", "frontis-blocks"),
															value: "slide",
														},
														{
															label: __("Blur", "frontis-blocks"),
															value: "blur",
														},
														{
															label: __("Overlay", "frontis-blocks"),
															value: "overlay",
														},
														{
															label: __("Tilt", "frontis-blocks"),
															value: "tilt",
														},
														{
															label: __("Skew", "frontis-blocks"),
															value: "skew",
														},
													]}
													onChange={(size) =>
														setAttributes({ imageHover: size })
													}
													__nextHasNoMarginBottom
												/>
											</PanelBody>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
										{/*	Title */}
										<PanelBody
											title={__("Title", "frontis-blocks")}
											initialOpen={true}
										>
											<FB_TypographyControl
                                                fontFamily={headingFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value })}

                                                fontSize={headingFontSize}
                                                onChangeFontSize={(value) => setAttributes({ headingFontSize: value })}

                                                fontSizeUnits={headingFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

                                                fontWeight={headingFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value })}

                                                fontStyle={headingFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value })}

                                                textTransform={headingTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value })}

                                                textDecoration={headingTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value })}

                                                letterSpacing={headingLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value })}

                                                letterSpacingUnits={headingLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

                                                lineHeight={headingLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value })}

                                                lineHeightUnits={headingLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ headingLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />

											<FB_SwitcherControl
                                                label={__("Color", "frontis-blocks")}
                                                globalSwitcher={HeadingColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ HeadingColorSwitcher: value })}
                                            />

                                            {HeadingColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={HeadingColor}
                                                    setGlobalColor={(value) => setAttributes({ HeadingColor: value })}
                                                />
                                            )}

                                            {HeadingColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={HeadingHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ HeadingHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleHeadingPaddingUnitsHandler}
												spacingUnits={HeadingPaddingUnits}
												spacingDesktop={HeadingDesktopPadding}
												spacingTablet={HeadingTabPadding}
												spacingMobile={HeadingMobilePadding}
												handleSpacingUnitHandler={handleHeadingPaddingUnitChange}
												spacingCombineBtn={HeadingPaddingLink}
												spacingCombineBtnHandler={handleHeadingPaddingCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleHeadingMarginUnitsHandler}
												spacingUnits={HeadingMarginUnits}
												spacingDesktop={HeadingDesktopMargin}
												spacingTablet={HeadingTabMargin}
												spacingMobile={HeadingMobileMargin}
												handleSpacingUnitHandler={handleHeadingMarginUnitChange}
												spacingCombineBtn={HeadingMarginLink}
												spacingCombineBtnHandler={handleHeadingMarginCombineBtn}
												setAttributes={setAttributes}
											/>
										</PanelBody>
										{/*	Overlay */}
										{showOverlay && (
											<PanelBody
											title={__("Overlay", "frontis-blocks")}
											initialOpen={true}
										>
											
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
													<RangeControl
														value={globalZIndex}
														onChange={(value) =>
															setAttributes({
																globalZIndex: value === 0 ? undefined : value,
															})
														}
														min={1}
														max={10000}
														step={1}
														allowReset
														resetFallbackValue={100}
													/>
												</PanelBody>
												<PanelBody
													title={__("Padding and Margin", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_Spacing
														label={__("Padding", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={
															handleGlobalPaddingUnitsHandler
														}
														spacingUnits={globalPaddingUnits}
														spacingDesktop={globalPaddingDesktop}
														spacingTablet={globalPaddingTablet}
														spacingMobile={globalPaddingMobile}
														handleSpacingUnitHandler={
															handleGlobalPaddingUnitChange
														}
														spacingCombineBtn={globalPaddingLink}
														spacingCombineBtnHandler={
															handleGlobalPaddingCombineBtn
														}
														setAttributes={setAttributes}
													/>
													<FB_Spacing
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalMarginUnitsHandler}
														spacingUnits={globalMarginUnits}
														spacingDesktop={globalMarginDesktop}
														spacingTablet={globalMarginTablet}
														spacingMobile={globalMarginMobile}
														handleSpacingUnitHandler={
															handleGlobalMarginUnitChange
														}
														spacingCombineBtn={globalMarginLink}
														spacingCombineBtnHandler={
															handleGlobalMarginCombineBtn
														}
														setAttributes={setAttributes}
													/>
												</PanelBody>

												<PanelBody title="Background" initialOpen={false}>
													<FB_BackgroundColorControl
														bgColorSwitcher={testBgColorSwitcher}
														setBgColorSwitcher={(value) =>
															setAttributes({ testBgColorSwitcher: value })
														}
														normalBackgroundType={testBackgroundType}
														setNormalBackgroundType={(value) =>
															setAttributes({ testBackgroundType: value })
														}
														normalClassicColor={testClassicColor}
														setNormalClassicColor={(value) =>
															setAttributes({ testClassicColor: value })
														}
														normalGradientColor={testGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ testGradientColor: value })
														}
														normalCustomGradientSwitcher={
															testCustomGradientSwitcher
														}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({
																testCustomGradientSwitcher: value,
															})
														}
														normalCustomGradientInputValue={
															testCustomGradientInputValue
														}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({
																testCustomGradientInputValue: value,
															})
														}
														normalBackgroundImageUrl={testBackgroundImageUrl}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({ testBackgroundImageUrl: value })
														}
														normalBackgroundImageAlt={testBackgroundImageAlt}
														setNormalBackgroundImageAlt={(value) =>
															setAttributes({ testBackgroundImageAlt: value })
														}
														normalBackgroundImageID={testBackgroundImageID}
														setNormalBackgroundImageID={(value) =>
															setAttributes({ testBackgroundImageID: value })
														}
														normalBackgroundImagePosition={
															testBackgroundImagePosition
														}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({
																testBackgroundImagePosition: value,
															})
														}
														normalBackgroundImageAttachment={
															testBackgroundImageAttachment
														}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({
																testBackgroundImageAttachment: value,
															})
														}
														normalBackgroundImageRepeat={
															testBackgroundImageRepeat
														}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({
																testBackgroundImageRepeat: value,
															})
														}
														normalBackgroundImageSize={testBackgroundImageSize}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({ testBackgroundImageSize: value })
														}
														hoverBackgroundType={hoverBackgroundType}
														setHoverBackgroundType={(value) =>
															setAttributes({ hoverBackgroundType: value })
														}
														hoverClassicColor={hoverClassicColor}
														setHoverClassicColor={(value) =>
															setAttributes({ hoverClassicColor: value })
														}
														hoverGradientColor={hoverGradientColor}
														setHoverGradientColor={(value) =>
															setAttributes({ hoverGradientColor: value })
														}
														hoverCustomGradientSwitcher={
															hoverCustomGradientSwitcher
														}
														setHoverCustomGradientSwitcher={(value) =>
															setAttributes({
																hoverCustomGradientSwitcher: value,
															})
														}
														hoverCustomGradientInputValue={
															hoverCustomGradientInputValue
														}
														setHoverCustomGradientInputValue={(value) =>
															setAttributes({
																hoverCustomGradientInputValue: value,
															})
														}
														hoverBackgroundImageUrl={hoverBackgroundImageUrl}
														setHoverBackgroundImageUrl={(value) =>
															setAttributes({ hoverBackgroundImageUrl: value })
														}
														hoverBackgroundImageAlt={hoverBackgroundImageAlt}
														setHoverBackgroundImageAlt={(value) =>
															setAttributes({ hoverBackgroundImageAlt: value })
														}
														hoverBackgroundImageID={hoverBackgroundImageID}
														setHoverBackgroundImageID={(value) =>
															setAttributes({ hoverBackgroundImageID: value })
														}
														hoverBackgroundImagePosition={
															hoverBackgroundImagePosition
														}
														setHoverBackgroundImagePosition={(value) =>
															setAttributes({
																hoverBackgroundImagePosition: value,
															})
														}
														hoverBackgroundImageAttachment={
															hoverBackgroundImageAttachment
														}
														setHoverBackgroundImageAttachment={(value) =>
															setAttributes({
																hoverBackgroundImageAttachment: value,
															})
														}
														hoverBackgroundImageRepeat={
															hoverBackgroundImageRepeat
														}
														setHoverBackgroundImageRepeat={(value) =>
															setAttributes({
																hoverBackgroundImageRepeat: value,
															})
														}
														hoverBackgroundImageSize={hoverBackgroundImageSize}
														setHoverBackgroundImageSize={(value) =>
															setAttributes({ hoverBackgroundImageSize: value })
														}
													/>
												</PanelBody>
												<PanelBody
													title={__("Border and Shadow", "frontis-blocks")}
													initialOpen={false}
												>
													<SelectControl
														label={__("Border Style", "frontis-blocks")}
														value={globalBorder}
														options={BORDER_STYLES}
														onChange={(value) =>
															setAttributes({ globalBorder: value })
														}
													/>

													<FB_Color
														label={__("Border Color", "frontis-blocks")}
														globalColorSwitcher={globalBorderColorSwitcher}
														globalColor={globalBorderColor}
														globalHoverColor={globalBorderHoverColor}
														handleColorSwitcherChange={
															handleGlobalBorderColorSwitcherChange
														}
														handleGlobalColorChange={
															handleGlobalBorderColorChange
														}
														handleGlobalHoverColorChange={
															handleGlobalBorderHoverColorChange
														}
													/>

													<FB_Spacing
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderUnitsHandler}
														spacingUnits={globalBorderUnits}
														spacingDesktop={globalBorderDesktop}
														spacingTablet={globalBorderTablet}
														spacingMobile={globalBorderMobile}
														handleSpacingUnitHandler={
															handleGlobalBorderUnitChange
														}
														spacingCombineBtn={globalBorderLink}
														spacingCombineBtnHandler={
															handleGlobalBorderCombineBtn
														}
														setAttributes={setAttributes}
													/>

													<FB_Spacing
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={
															handleGlobalBorderRadiusUnitsHandler
														}
														spacingUnits={globalBorderRadiusUnits}
														spacingDesktop={globalBorderRadiusDesktop}
														spacingTablet={globalBorderRadiusTablet}
														spacingMobile={globalBorderRadiusMobile}
														handleSpacingUnitHandler={
															handleGlobalBorderRadiusUnitChange
														}
														spacingCombineBtn={globalBorderRadiusLink}
														spacingCombineBtnHandler={
															handleGlobalBorderRadiusCombineBtn
														}
														setAttributes={setAttributes}
													/>
													<FB_BoxShadowControl
														onBoxShadowChange={(value) =>
															setAttributes({ boxGlobalBoxShadowValues: value })
														}
														initialShadowValue={boxGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) =>
															setAttributes({
																boxGlobalBoxShadowCssValue: value,
															})
														}
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