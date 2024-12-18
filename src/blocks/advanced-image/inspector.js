import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	Button,
	ButtonGroup,
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
import FB_UrlControl from "@Components/url-control";
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import loadGoogleFont from '@Utils/loadGoogleFont';

import { useEffect, useMemo, useState } from "@wordpress/element";
import {
	BORDER_STYLES,
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
		imageBorder,
		imageBorderColorSwitcher,
		imageBorderColor,
		imageBorderHoverColor,
		imageBorderUnits,
		imageBorderDesktop,
		imageBorderTablet,
		imageBorderMobile,
		imageBorderLink,
		imageBorderRadiusUnits,
		imageBorderRadiusDesktop,
		imageBorderRadiusTablet,
		imageBorderRadiusMobile,
		imageBorderRadiusLink,
		imageBoxShadowValues,
		imageBoxShadowCssValue,
		autoHeightSwitch,
		autoFitSwitch,
		linkSwitch,
		captionAlignment,
		mediaHeight,
		mediaSize,
		mediaSizeUnits,
		mediaHeightUnits,
		imageUrl,
		imageAlt,
		imageId,
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
		showOverlay,

		/** Overlay Backgroud **/
		overlayBgColorSwitcher,
		overlayBackgroundType,
		overlayClassicColor,
		overlayGradientColor,
		overlayCustomGradientSwitcher,
		overlayCustomGradientInputValue,
		overlayBackgroundImageUrl,
		overlayBackgroundImageAlt,
		overlayBackgroundImageID,
		overlayBackgroundImagePosition,
		overlayBackgroundImageAttachment,
		overlayBackgroundImageRepeat,
		overlayBackgroundImageSize,
		overlayHoverBackgroundType,
		overlayHoverClassicColor,
		overlayHoverGradientColor,
		overlayHoverCustomGradientSwitcher,
		overlayHoverCustomGradientInputValue,
		overlayHoverBackgroundImageUrl,
		overlayHoverBackgroundImageAlt,
		overlayHoverBackgroundImageID,
		overlayHoverBackgroundImagePosition,
		overlayHoverBackgroundImageAttachment,
		overlayHoverBackgroundImageRepeat,
		overlayHoverBackgroundImageSize,
		overlayOpacity
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-advanced-image-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	useEffect(() => {
		if (headingFontFamily) {
			loadGoogleFont(headingFontFamily);
		}
	}, [headingFontFamily]);

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
	
	/** Start Image Border */
	const handleImageBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderMobile: {
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
						imageBorderDesktop: { ...imageBorderDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderTablet: { ...imageBorderTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderMobile: { ...imageBorderMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleImageBorderCombineBtn = () => {
		setAttributes({ imageBorderLink: !imageBorderLink });
	};

	const handleImageBorderUnitsHandler = (unit) => {
		setAttributes({
			imageBorderUnits: {
				...imageBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for desktop (using desktop_padding) */
	const imageDesktopBorder = `${imageBorderDesktop.top}${imageBorderUnits.Desktop} ${imageBorderDesktop.right}${imageBorderUnits.Desktop} ${imageBorderDesktop.bottom}${imageBorderUnits.Desktop} ${imageBorderDesktop.left}${imageBorderUnits.Desktop}`;
	const imageTabletBorder = `${imageBorderTablet.top}${imageBorderUnits.Tablet} ${imageBorderTablet.right}${imageBorderUnits.Tablet} ${imageBorderTablet.bottom}${imageBorderUnits.Tablet} ${imageBorderTablet.left}${imageBorderUnits.Tablet}`;
	const imageMobileBorder = `${imageBorderMobile.top}${imageBorderUnits.Mobile} ${imageBorderMobile.right}${imageBorderUnits.Mobile} ${imageBorderMobile.bottom}${imageBorderUnits.Mobile} ${imageBorderMobile.left}${imageBorderUnits.Mobile}`;
	
	/** Start Image Border Radius */
	const handleImageBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (imageBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						imageBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderRadiusMobile: {
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
						imageBorderRadiusDesktop: { ...imageBorderRadiusDesktop, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						imageBorderRadiusTablet: { ...imageBorderRadiusTablet, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						imageBorderRadiusMobile: { ...imageBorderRadiusMobile, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};
	
	const handleImageBorderRadiusCombineBtn = () => {
		setAttributes({ imageBorderRadiusLink: !imageBorderRadiusLink });
	};
	
	const handleImageBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			imageBorderRadiusUnits: {
				...imageBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	
	/** Default border radius for desktop (using desktop_border_radius) */
	const imageDesktopBorderRadius = `${imageBorderRadiusDesktop.top}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.right}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.bottom}${imageBorderRadiusUnits.Desktop} ${imageBorderRadiusDesktop.left}${imageBorderRadiusUnits.Desktop}`;
	const imageTabletBorderRadius = `${imageBorderRadiusTablet.top}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.right}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.bottom}${imageBorderRadiusUnits.Tablet} ${imageBorderRadiusTablet.left}${imageBorderRadiusUnits.Tablet}`;
	const imageMobileBorderRadius = `${imageBorderRadiusMobile.top}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.right}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.bottom}${imageBorderRadiusUnits.Mobile} ${imageBorderRadiusMobile.left}${imageBorderRadiusUnits.Mobile}`;
	

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
			background-size: ${testBackgroundImageSize};` : `
			background: ${testClassicColor}; `
			}
			transition: all .3s ease-in-out;
		}
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner{
			width: ${mediaSize.Desktop}${mediaSizeUnits.Desktop};
			${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Desktop}${mediaHeightUnits.Desktop}`
			};
			${imageBorder ? `border: ${imageBorder};` : ''}
			${imageDesktopBorder ? `border-width: ${imageDesktopBorder};` : ''}
            ${imageDesktopBorderRadius ? `border-radius: ${imageDesktopBorderRadius};` : ''}
            ${imageBorderColor ? `border-color: ${imageBorderColor};` : ''}
			${imageBoxShadowCssValue ? `box-shadow: ${imageBoxShadowCssValue};` : ''}
		}
		
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner:before{
			${overlayBackgroundType === "gradient" ? ` background: ${ overlayCustomGradientSwitcher && overlayCustomGradientInputValue ? overlayCustomGradientInputValue : overlayGradientColor };
			`
			: overlayBackgroundImageUrl && overlayBackgroundImageUrl !== "null"
			? `
			background-image: url(${overlayBackgroundImageUrl});
			background-position: ${overlayBackgroundImagePosition};
			background-attachment: ${overlayBackgroundImageAttachment};
			background-repeat: ${overlayBackgroundImageRepeat};
			background-size: ${overlayBackgroundImageSize};` : `
			background: ${overlayClassicColor}; `
			}
			opacity: ${overlayOpacity};
		}
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner:before {
            ${overlayBackgroundType === 'gradient' ? `  
                background: ${overlayCustomGradientSwitcher && overlayCustomGradientInputValue ? overlayCustomGradientInputValue : overlayGradientColor};
            `: `
                background: ${overlayClassicColor};
            `}
        }
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner:before:hover{
			${overlayHoverBackgroundType === 'gradient' ? `  
                background: ${overlayHoverCustomGradientSwitcher && overlayHoverCustomGradientInputValue ? overlayHoverCustomGradientInputValue : overlayHoverGradientColor};
            `: `
                background: ${overlayHoverClassicColor};
            `}
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
			${headingDesktopMargin ? `margin: ${headingDesktopMargin};` : ""}
			border: ${HeadingBorder};
			${HeadingBorderColor !== undefined ? `border-color: ${HeadingBorderColor};` : "" }
		}
		@media all and (max-width: 1024px) {
		.fb-advanced-image-wrapper.${blockID} {
			padding: ${globalTabPadding};
			margin: ${globalTabMargin};
			border-width: ${globalTabBorder};
			border-radius: ${globalTabBorderRadius} !important;
		}
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
			${imageTabletBorder ? `border-width: ${imageTabletBorder};` : ''}
            ${imageTabletBorderRadius ? `border-radius: ${imageTabletBorderRadius};` : ''}
			width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
			${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}` };
		}
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
			${headingFontSize.Tablet && headingFontSizeUnits.Tablet ? `font-size: ${headingFontSize.Tablet}${headingFontSizeUnits.Tablet};` : ''}
			${headingLetterSpacing.Tablet && headingLetterSpacingUnits.Tablet ? `letter-spacing: ${headingLetterSpacing.Tablet}${headingLetterSpacingUnits.Tablet};` : ''}
			${headingLineHeight.Tablet && headingLineHeightUnits.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
			width: ${mediaSize.Tablet}${mediaSizeUnits.Tablet};
			${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Tablet}${mediaHeightUnits.Tablet}` };
			${headingTabletPadding ? `padding: ${headingTabletPadding};` : ""}
			${headingTabletMargin ? `margin: ${headingTabletMargin};` : ""}
		}
		}
		@media all and (max-width: 767px) {
		.fb-advanced-image-wrapper.${blockID} {
			padding: ${globalMobPadding};
			margin: ${globalMobMargin};
			border-width: ${globalMobBorder};
			border-radius: ${globalMobBorderRadius} !important;
		}
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-inner {
			${imageMobileBorder ? `border-width: ${imageMobileBorder};` : ''}
            ${imageMobileBorderRadius ? `border-radius: ${imageMobileBorderRadius};` : ''}
			width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
			${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}` };
		}
		
		.fb-advanced-image-wrapper.${blockID} .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
			${headingFontSize.Mobile && headingFontSizeUnits.Mobile ? `font-size: ${headingFontSize.Mobile}${headingFontSizeUnits.Mobile};` : ''}
			${headingLetterSpacing.Mobile && headingLetterSpacingUnits.Mobile ? `letter-spacing: ${headingLetterSpacing.Mobile}${headingLetterSpacingUnits.Mobile};` : ''}
			${headingLineHeight.Mobile && headingLineHeightUnits.Mobile ? `line-height: ${headingLineHeight.Mobile}${headingLineHeightUnits.Mobile};` : ''}
			width: ${mediaSize.Mobile}${mediaSizeUnits.Mobile};
			${autoHeightSwitch ? `height: auto;` : `height: ${mediaHeight.Mobile}${mediaHeightUnits.Mobile}` };
			${headingMobilePadding ? `padding: ${headingMobilePadding};` : ""}
			${headingMobileMargin ? `margin: ${headingMobileMargin};` : ""}
		}
		}
	`,
		[
			blockID,
			globalDeskPadding,
			globalTabPadding,
			globalMobPadding,
			globalDeskMargin,
			globalTabMargin,
			globalMobMargin,
			globalBorder,
			globalDeskBorder,
			globalTabBorder,
			globalMobBorder,
			globalDeskBorderRadius,
			globalTabBorderRadius,
			globalMobBorderRadius,
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
			overlayBackgroundType,
			overlayCustomGradientSwitcher,
			overlayCustomGradientInputValue,
			overlayGradientColor,
			overlayBackgroundImageUrl,
			overlayBackgroundImagePosition,
			overlayBackgroundImageAttachment,
			overlayBackgroundImageRepeat,
			overlayBackgroundImageSize,
			overlayClassicColor,
			overlayOpacity,
			overlayHoverBackgroundType,
			overlayHoverCustomGradientSwitcher,
			overlayHoverCustomGradientInputValue,
			overlayHoverGradientColor,
			overlayHoverBackgroundImageUrl,
			overlayHoverBackgroundImagePosition,
			overlayHoverBackgroundImageAttachment,
			overlayHoverBackgroundImageRepeat,
			overlayHoverBackgroundImageSize,
			overlayHoverClassicColor,
			mediaSize,
			mediaSizeUnits,
			autoHeightSwitch,
			mediaHeight,
			mediaHeightUnits,
			imageBorder,
			imageBorderColor,
			imageDesktopBorder,
			imageTabletBorder,
			imageMobileBorder,
			imageDesktopBorderRadius,
			imageTabletBorderRadius,
			imageMobileBorderRadius,
			imageBoxShadowCssValue,
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
			headingDesktopPadding,
			headingTabletPadding,
			headingMobilePadding,
			headingDesktopMargin,
			headingTabletMargin,
			headingMobileMargin,
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
												initialOpen={false}
											>
											{/** Image Uploader **/}
											<BaseControl
											label={__("Image", "frontis-blocks")}
											className="fb-advanced-heading-bg-image"
                                            >
                                                {imageUrl ? (
                                                    <div className="fb-image-avatar-control" style={{backgroundImage: `url(${imageUrl})`}}>
                                                        <button
                                                            className='fb-image-avatar-delete'
                                                            onClick={() => {
                                                                setAttributes({
                                                                    imageUrl: null,
                                                                    imageAlt: null,
                                                                    imageId: null,
                                                                });
                                                            }}
                                                        >
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 9L9 15" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L15 15" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                        </button>
                                                        <button
                                                            className='fb-image-replace-btn'
                                                            onClick={() => {
                                                                const mediaUploader = wp.media({
                                                                    title: __('Select or Upload Background Image', 'frontis-blocks'),
                                                                    button: {
                                                                        text: __('Use this image', 'frontis-blocks'),
                                                                    },
                                                                    multiple: false
                                                                });

                                                                mediaUploader.on('select', function() {
                                                                    const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                                    setAttributes({
                                                                        imageUrl: attachment.url,
                                                                        imageAlt: attachment.alt,
                                                                        imageId: attachment.id,
                                                                    });
                                                                });

                                                                mediaUploader.open();
                                                            }}
                                                        >
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12V12.01" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                            Replace
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        className='fb-image-upload-btn'
                                                        onClick={() => {
                                                            const mediaUploader = wp.media({
                                                                title: __('Select or Upload Background Image', 'frontis-blocks'),
                                                                button: {
                                                                    text: __('Use this image', 'frontis-blocks'),
                                                                },
                                                                multiple: false
                                                            });

                                                            mediaUploader.on('select', function() {
                                                                const attachment = mediaUploader.state().get('selection').first().toJSON();
                                                                setAttributes({
                                                                    imageUrl: attachment.url,
                                                                    imageAlt: attachment.alt,
                                                                    imageId: attachment.id,
                                                                });
                                                            });

                                                            mediaUploader.open();
                                                        }}
                                                    >
                                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path></svg>
                                                        Upload
                                                    </button>
                                                )}
                                            	</BaseControl>

												<SelectControl
													label={__("Styles", "frontis-blocks")}
													value={imageStyle || "square"}
													options={[
														{
															label: __("Square", "frontis-blocks"),
															value: "square",
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
														<FB_AlignmentControl
															label={__("Alignment", "frontis-blocks")}
															globalAlignment={captionAlignment}
															setGlobalAlignment={(value) => setAttributes({ captionAlignment: value })}
														/>
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
														
														<FB_HtmlTagControl
															label={__("Title Tag", "frontis-blocks")}
															globalHtmlTag={titleTag}
															setGlobalHtmlTag={(value) => setAttributes({ titleTag: value })}
														/>
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
													<FB_UrlControl
													url={linkUrl}
													onChangeUrl={(value) =>
														setAttributes({ linkUrl: value })
													}
													openInNewTab={linkTargetUrl}
													onChangeOpenInNewTab={(value) =>
														setAttributes({ linkTargetUrl: value })
													}
													/>
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
										{displayTitle && (
											<PanelBody
											title={__("Title", "frontis-blocks")}
											initialOpen={false}
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
										)}
										{/*	Image Style*/}
										<PanelBody
											title={__("Image", "frontis-blocks")}
											initialOpen={false}
										>
										<FB_Range
											min={1}
											max={1400}
											label={__("Width", "frontis-blocks")}
											rangeValue={mediaSize}
											onChangeHandler={(value) => setAttributes({ mediaSize: value })}
											rangeUnitHandler={(value) => setAttributes({ mediaSizeUnits: value })}
											deviceType={deviceType}
											units={mediaSizeUnits}
											setAttributes={setAttributes}
											rangeStep={1}
											resetFallbackValue={"100"}
										/>
										<FB_Range
											min={1}
											max={1400}
											label={__("Height", "frontis-blocks")}
											rangeValue={mediaHeight}
											onChangeHandler={(value) => setAttributes({ mediaHeight: value })}
											rangeUnitHandler={(value) => setAttributes({ mediaHeightUnits: value })}
											deviceType={deviceType}
											units={mediaHeightUnits}
											setAttributes={setAttributes}
											rangeStep={1}
											resetFallbackValue={"100"}
										/>

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

										<SelectControl
										label={__("Border Style", "frontis-blocks")}
										value={imageBorder}
										options={BORDER_STYLES}
										onChange={(value) => setAttributes({ imageBorder: value }) }
										/>
										<FB_Color
											label={__("Border Color", "frontis-blocks")}
											globalColorSwitcher={imageBorderColorSwitcher}
											globalColor={imageBorderColor}
											globalHoverColor={imageBorderHoverColor}
											handleColorSwitcherChange={(value) => setAttributes({ imageBorderColorSwitcher: value })}
											handleGlobalColorChange={(value) => setAttributes({ imageBorderColor: value })}
											handleGlobalHoverColorChange={(value) => setAttributes({ imageBorderHoverColor: value })}
										/>
										
										<FB_Spacing
										label={__("Border Width", "frontis-blocks")}
										deviceType={deviceType}
										spacingUnitsHandler={handleImageBorderUnitsHandler}
										spacingUnits={imageBorderUnits}
										spacingDesktop={imageBorderDesktop}
										spacingTablet={imageBorderTablet}
										spacingMobile={imageBorderMobile}
										handleSpacingUnitHandler={handleImageBorderUnitChange}
										spacingCombineBtn={imageBorderLink}
										spacingCombineBtnHandler={handleImageBorderCombineBtn}
										setAttributes={setAttributes}
										/>

										<FB_Spacing
										label={__("Border Radius", "frontis-blocks")}
										deviceType={deviceType}
										spacingUnitsHandler={handleImageBorderRadiusUnitsHandler}
										spacingUnits={imageBorderRadiusUnits}
										spacingDesktop={imageBorderRadiusDesktop}
										spacingTablet={imageBorderRadiusTablet}
										spacingMobile={imageBorderRadiusMobile}
										handleSpacingUnitHandler={handleImageBorderRadiusUnitChange}
										spacingCombineBtn={imageBorderRadiusLink}
										spacingCombineBtnHandler={handleImageBorderRadiusCombineBtn}
										setAttributes={setAttributes}
										/>

										<FB_BoxShadowControl
										onBoxShadowChange={(value) => setAttributes({ imageBoxShadowValues: value }) }
										initialShadowValue={imageBoxShadowValues}
										onBoxShadowStyleChange={(value) => setAttributes({ imageBoxShadowCssValue: value, }) }
										/>
										{/*	Overlay Style*/}
										</PanelBody>
										{showOverlay && (
										<PanelBody
											title={__("Overlay", "frontis-blocks")}
											initialOpen={false}
										>
										
									<FB_BackgroundColorControl
										label={__("Background Color", "frontis-blocks")}
										bgColorSwitcher={overlayBgColorSwitcher}  
										setBgColorSwitcher={(value) => setAttributes({ overlayBgColorSwitcher: value })}
										
										normalBackgroundType={overlayBackgroundType}
										setNormalBackgroundType={(value) => setAttributes({ overlayBackgroundType: value })}
										normalClassicColor={overlayClassicColor}
										setNormalClassicColor={(value) => setAttributes({ overlayClassicColor: value })}
										normalGradientColor={overlayGradientColor}
										setNormalGradientColor={(value) => setAttributes({ overlayGradientColor: value })}
										normalCustomGradientSwitcher={overlayCustomGradientSwitcher}
										setNormalCustomGradientSwitcher={(value) => setAttributes({ overlayCustomGradientSwitcher: value })}
										normalCustomGradientInputValue={overlayCustomGradientInputValue}
										setNormalCustomGradientInputValue={(value) => setAttributes({ overlayCustomGradientInputValue: value })}
										
										hoverBackgroundType={overlayHoverBackgroundType} 
										setHoverBackgroundType={(value) => setAttributes({ postGridHoverBackgroundType: value })}
										hoverClassicColor={overlayHoverClassicColor}
										setHoverClassicColor={(value) => setAttributes({ overlayHoverClassicColor: value })}
										hoverGradientColor={overlayHoverGradientColor} 
										setHoverGradientColor={(value) => setAttributes({ overlayHoverGradientColor: value })}
										hoverCustomGradientSwitcher={overlayHoverCustomGradientSwitcher}
										setHoverCustomGradientSwitcher={(value) => setAttributes({ overlayHoverCustomGradientSwitcher: value })}
										hoverCustomGradientInputValue={overlayHoverCustomGradientInputValue}
										setHoverCustomGradientInputValue={(value) => setAttributes({ overlayHoverCustomGradientInputValue: value })}

										isBackgroundImage={false}

									/>

									<RangeControl
									label="Opacity"
									value={overlayOpacity}
									onChange={(value) => setAttributes({ overlayOpacity: value, }) }
									min={0}
									max={1}
									step={0.1}
									allowReset
									resetFallbackValue={undefined}
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
													initialOpen={false}
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
														setBgColorSwitcher={(value) => setAttributes({ testBgColorSwitcher: value }) }
														normalBackgroundType={testBackgroundType}
														setNormalBackgroundType={(value) => setAttributes({ testBackgroundType: value }) }
														normalClassicColor={testClassicColor}
														setNormalClassicColor={(value) => setAttributes({ testClassicColor: value }) }
														normalGradientColor={testGradientColor}
														setNormalGradientColor={(value) => setAttributes({ testGradientColor: value }) }
														normalCustomGradientSwitcher={ testCustomGradientSwitcher }
														setNormalCustomGradientSwitcher={(value) => setAttributes({ testCustomGradientSwitcher: value, }) }
														normalCustomGradientInputValue={ testCustomGradientInputValue }
														setNormalCustomGradientInputValue={(value) => setAttributes({ testCustomGradientInputValue: value, }) }
														normalBackgroundImageUrl={testBackgroundImageUrl}
														setNormalBackgroundImageUrl={(value) => setAttributes({ testBackgroundImageUrl: value }) }
														normalBackgroundImageAlt={testBackgroundImageAlt}
														setNormalBackgroundImageAlt={(value) => setAttributes({ testBackgroundImageAlt: value }) }
														normalBackgroundImageID={testBackgroundImageID}
														setNormalBackgroundImageID={(value) => setAttributes({ testBackgroundImageID: value })}
														normalBackgroundImagePosition={ testBackgroundImagePosition }
														setNormalBackgroundImagePosition={(value) => setAttributes({ testBackgroundImagePosition: value, }) }
														normalBackgroundImageAttachment={ testBackgroundImageAttachment }
														setNormalBackgroundImageAttachment={(value) => setAttributes({ testBackgroundImageAttachment: value, }) }
														normalBackgroundImageRepeat={ testBackgroundImageRepeat }
														setNormalBackgroundImageRepeat={(value) => setAttributes({ testBackgroundImageRepeat: value, }) }
														normalBackgroundImageSize={testBackgroundImageSize}
														setNormalBackgroundImageSize={(value) => setAttributes({ testBackgroundImageSize: value }) }
														hoverBackgroundType={hoverBackgroundType}
														setHoverBackgroundType={(value) => setAttributes({ hoverBackgroundType: value }) }
														hoverClassicColor={hoverClassicColor}
														setHoverClassicColor={(value) => setAttributes({ hoverClassicColor: value }) }
														hoverGradientColor={hoverGradientColor}
														setHoverGradientColor={(value) => setAttributes({ hoverGradientColor: value }) }
														hoverCustomGradientSwitcher={ hoverCustomGradientSwitcher }
														setHoverCustomGradientSwitcher={(value) => setAttributes({ hoverCustomGradientSwitcher: value, }) }
														hoverCustomGradientInputValue={ hoverCustomGradientInputValue }
														setHoverCustomGradientInputValue={(value) => setAttributes({ hoverCustomGradientInputValue: value, }) }
														hoverBackgroundImageUrl={hoverBackgroundImageUrl}
														setHoverBackgroundImageUrl={(value) => setAttributes({ hoverBackgroundImageUrl: value }) }
														hoverBackgroundImageAlt={hoverBackgroundImageAlt}
														setHoverBackgroundImageAlt={(value) => setAttributes({ hoverBackgroundImageAlt: value }) }
														hoverBackgroundImageID={hoverBackgroundImageID}
														setHoverBackgroundImageID={(value) => setAttributes({ hoverBackgroundImageID: value }) }
														hoverBackgroundImagePosition={ hoverBackgroundImagePosition }
														setHoverBackgroundImagePosition={(value) => setAttributes({ hoverBackgroundImagePosition: value, }) }
														hoverBackgroundImageAttachment={ hoverBackgroundImageAttachment }
														setHoverBackgroundImageAttachment={(value) => setAttributes({ hoverBackgroundImageAttachment: value, }) }
														hoverBackgroundImageRepeat={ hoverBackgroundImageRepeat }
														setHoverBackgroundImageRepeat={(value) => setAttributes({ hoverBackgroundImageRepeat: value, }) }
														hoverBackgroundImageSize={hoverBackgroundImageSize}
														setHoverBackgroundImageSize={(value) => setAttributes({ hoverBackgroundImageSize: value }) }
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