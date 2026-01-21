import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	PanelBody,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl
} from "@wordpress/components";

import { 
    DYNAMIC_IMAGE_SOURCE_OPTIONS,
    DYNAMIC_LINK_SOURCE_OPTIONS,
    BORDER_STYLES,
    OVERFLOW_OP,
	DYNAMIC_IMAGE_FIELD_OPTIONS,
	WP_IMAGE_SIZE_OPTIONS,
	IMAGE_STYLES,
	TITLE_POSITION,
	IMAGE_HOVER_EFFECTS,
	IMAGE_AUTO_FIT,
	IMAGE_MASK_SIZE,
	IMAGE_MASK_POSITION,
	IMAGE_MASK_REPEAT,
	IMAGE_MASK_IMAEGS,

} from '@Constants/fbConstants';

import Select2 from "react-select";
import { useSelect } from "@wordpress/data";
import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import { useEntityProp, store as coreStore } from '@wordpress/core-data';

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
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ImageControl from '@Components/image-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProDynamicButton from '@Utils/getProDynamicButton';
import "./editor.scss";
import DynamicImageSourceControl from '@Components/dynamic-image-source-control';

const Inspector = ({ attributes, setAttributes, clientId, onSelectImage }) => {
	const {
		blockID,
		// deviceType,
		imageStyle,
		displayCaption,
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
		advancedImageUrl,
		linkUrl,
		linkTargetUrl,
		imageHover,
		imageFit,
		displayTitle,
		titleText,
		titleTag,
		headingGlobalTypoSwitcher,
		headingGlobalTypographyData,
		headingGlobalTypoType,
		headingGlobalTypoOption,
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
		boxGlobalBoxShadowValues,
		boxGlobalBoxShadowCssValue,
		testBgColorSwitcher,
		testBackgroundType,
		testClassicColor,
		testGradientColor,
		testCustomGradientSwitcher,
		testCustomGradientInputValue,
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
		advancedImageOverflow,
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
		overlayBackgroundImagePosition,
		overlayBackgroundImageAttachment,
		overlayBackgroundImageRepeat,
		overlayBackgroundImageSize,
		overlayHoverBackgroundType,
		overlayHoverClassicColor,
		overlayHoverGradientColor,
		overlayHoverCustomGradientSwitcher,
		overlayHoverCustomGradientInputValue,
		overlayOpacity,

		advancedImageDesktopSwitcher,
		advancedImageTabletSwitcher,
		advancedImageMobileSwitcher,

		advancedImageCustomCSS,
		advancedImageGlobalWraperID,
		advancedImageGlobalWraperClass,

		// Position
		advancedImagePositionType,
		advancedImageHZOrientationType,
		advancedImageVROrientationType,
		advancedImageHZLeftOffset,
		advancedImageHZLeftOffsetUnits,
		advancedImageHZRightOffset,
		advancedImageHZRightOffsetUnits,
		advancedImageVRTopOffset,
		advancedImageVRTopOffsetUnits,
		advancedImageVRBottomOffset,
		advancedImageVRBottomOffsetUnits,

		advancedImageLazyLoadSwitcher,
		smartLazyLoadSwitcher,
		smartLazyLoadImageUrl,
		smartLazyLoadImageId,
		smartLazyLoadImageAlt,
		maskImageUrl,
		maskImageSize,
		maskImagePosition,
		maskImageRepeat,

		dynamicImageEnabled,
		dynamicImageSource,
		dynamicImagePostId,
		dynamicImagePostType,
		dynamicImagePostLabel,
		dynamicImageField,
		dynamicImageSize,
		dynamicImageFallbackUrl,
		dynamicImageFallbackAlt,
		dynamicImageFallbackId,

		dynamicImageEnableLink,
		dynamicImageLinkSource,

	} = attributes;

	const deviceType = useDeviceType();

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
	const headingDesktopPaddingValue = `${HeadingDesktopPadding?.top}${HeadingPaddingUnits?.Desktop} ${HeadingDesktopPadding?.right}${HeadingPaddingUnits?.Desktop} ${HeadingDesktopPadding?.bottom}${HeadingPaddingUnits?.Desktop} ${HeadingDesktopPadding?.left}${HeadingPaddingUnits?.Desktop}`;
	const headingTabletPaddingValue = `${HeadingTabPadding?.top}${HeadingPaddingUnits?.Tablet} ${HeadingTabPadding?.right}${HeadingPaddingUnits?.Tablet} ${HeadingTabPadding?.bottom}${HeadingPaddingUnits?.Tablet} ${HeadingTabPadding?.left}${HeadingPaddingUnits?.Tablet}`;
	const headingMobilePaddingValue = `${HeadingMobilePadding?.top}${HeadingPaddingUnits?.Mobile} ${HeadingMobilePadding?.right}${HeadingPaddingUnits?.Mobile} ${HeadingMobilePadding?.bottom}${HeadingPaddingUnits?.Mobile} ${HeadingMobilePadding?.left}${HeadingPaddingUnits?.Mobile}`;

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
	const headingDesktopMarginValue = `${HeadingDesktopMargin?.top}${HeadingMarginUnits?.Desktop} ${HeadingDesktopMargin?.right}${HeadingMarginUnits?.Desktop} ${HeadingDesktopMargin?.bottom}${HeadingMarginUnits?.Desktop} ${HeadingDesktopMargin?.left}${HeadingMarginUnits?.Desktop}`;
	const headingTabletMarginValue = `${HeadingTabMargin?.top}${HeadingMarginUnits?.Tablet} ${HeadingTabMargin?.right}${HeadingMarginUnits?.Tablet} ${HeadingTabMargin?.bottom}${HeadingMarginUnits?.Tablet} ${HeadingTabMargin?.left}${HeadingMarginUnits?.Tablet}`;
	const headingMobileMarginValue = `${HeadingMobileMargin?.top}${HeadingMarginUnits?.Mobile} ${HeadingMobileMargin?.right}${HeadingMarginUnits?.Mobile} ${HeadingMobileMargin?.bottom}${HeadingMarginUnits?.Mobile} ${HeadingMobileMargin?.left}${HeadingMarginUnits?.Mobile}`;

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
	const imageDesktopBorder = `${imageBorderDesktop?.top}${imageBorderUnits?.Desktop} ${imageBorderDesktop?.right}${imageBorderUnits?.Desktop} ${imageBorderDesktop?.bottom}${imageBorderUnits?.Desktop} ${imageBorderDesktop?.left}${imageBorderUnits?.Desktop}`;
	const imageTabletBorder = `${imageBorderTablet?.top}${imageBorderUnits?.Tablet} ${imageBorderTablet?.right}${imageBorderUnits?.Tablet} ${imageBorderTablet?.bottom}${imageBorderUnits?.Tablet} ${imageBorderTablet?.left}${imageBorderUnits?.Tablet}`;
	const imageMobileBorder = `${imageBorderMobile?.top}${imageBorderUnits?.Mobile} ${imageBorderMobile?.right}${imageBorderUnits?.Mobile} ${imageBorderMobile?.bottom}${imageBorderUnits?.Mobile} ${imageBorderMobile?.left}${imageBorderUnits?.Mobile}`;

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
	const imageDesktopBorderRadius = `${imageBorderRadiusDesktop?.top}${imageBorderRadiusUnits?.Desktop} ${imageBorderRadiusDesktop?.right}${imageBorderRadiusUnits?.Desktop} ${imageBorderRadiusDesktop?.bottom}${imageBorderRadiusUnits?.Desktop} ${imageBorderRadiusDesktop?.left}${imageBorderRadiusUnits?.Desktop}`;
	const imageTabletBorderRadius = `${imageBorderRadiusTablet?.top}${imageBorderRadiusUnits?.Tablet} ${imageBorderRadiusTablet?.right}${imageBorderRadiusUnits?.Tablet} ${imageBorderRadiusTablet?.bottom}${imageBorderRadiusUnits?.Tablet} ${imageBorderRadiusTablet?.left}${imageBorderRadiusUnits?.Tablet}`;
	const imageMobileBorderRadius = `${imageBorderRadiusMobile?.top}${imageBorderRadiusUnits?.Mobile} ${imageBorderRadiusMobile?.right}${imageBorderRadiusUnits?.Mobile} ${imageBorderRadiusMobile?.bottom}${imageBorderRadiusUnits?.Mobile} ${imageBorderRadiusMobile?.left}${imageBorderRadiusUnits?.Mobile}`;


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

	const globalDeskPadding = `${globalPaddingDesktop?.top}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.right}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.bottom}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.left}${globalPaddingUnits?.Desktop}`;
	const globalTabPadding = `${globalPaddingTablet?.top}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.right}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.bottom}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.left}${globalPaddingUnits?.Tablet}`;
	const globalMobPadding = `${globalPaddingMobile?.top}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.right}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.bottom}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.left}${globalPaddingUnits?.Mobile}`;


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

	const globalDeskMargin = `${globalMarginDesktop?.top}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.right}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.bottom}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.left}${globalMarginUnits?.Desktop}`;
	const globalTabMargin = `${globalMarginTablet?.top}${globalMarginUnits?.Tablet} ${globalMarginTablet?.right}${globalMarginUnits?.Tablet} ${globalMarginTablet?.bottom}${globalMarginUnits?.Tablet} ${globalMarginTablet?.left}${globalMarginUnits?.Tablet}`;
	const globalMobMargin = `${globalMarginMobile?.top}${globalMarginUnits?.Mobile} ${globalMarginMobile?.right}${globalMarginUnits?.Mobile} ${globalMarginMobile?.bottom}${globalMarginUnits?.Mobile} ${globalMarginMobile?.left}${globalMarginUnits?.Mobile}`;

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
	const globalDeskBorder = `${globalBorderDesktop?.top}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.right}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.bottom}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.left}${globalBorderUnits?.Desktop}`;
	const globalTabBorder = `${globalBorderTablet?.top}${globalBorderUnits?.Tablet} ${globalBorderTablet?.right}${globalBorderUnits?.Tablet} ${globalBorderTablet?.bottom}${globalBorderUnits?.Tablet} ${globalBorderTablet?.left}${globalBorderUnits?.Tablet}`;
	const globalMobBorder = `${globalBorderMobile?.top}${globalBorderUnits?.Mobile} ${globalBorderMobile?.right}${globalBorderUnits?.Mobile} ${globalBorderMobile?.bottom}${globalBorderUnits?.Mobile} ${globalBorderMobile?.left}${globalBorderUnits?.Mobile}`;
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
	const globalDeskBorderRadius = `${globalBorderRadiusDesktop?.top}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.right}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.bottom}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.left}${globalBorderRadiusUnits?.Desktop}`;
	const globalTabBorderRadius = `${globalBorderRadiusTablet?.top}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.right}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.bottom}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.left}${globalBorderRadiusUnits?.Tablet}`;
	const globalMobBorderRadius = `${globalBorderRadiusMobile?.top}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.right}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.bottom}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.left}${globalBorderRadiusUnits?.Mobile}`;

	/** Start Global Border Color */
	const handleGlobalBorderColorSwitcherChange = (value) => {
		setAttributes({ globalBorderColorSwitcher: value });
	};
	const handleGlobalBorderColorChange = (value) => {
		setAttributes({ globalBorderColor: value === undefined ? '' : value });
	};
	const handleGlobalBorderHoverColorChange = (value) => {
		setAttributes({ globalBorderHoverColor: value === undefined ? '' : value });
	};

	const advancedImageStyle = useMemo(
		() => `
		.fb-advanced-image-main-wrapper.${blockID} {
			${advancedImagePositionType === 'default' ? `position: relative !important;` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' ? `width: 100%;` : ''}
			${advancedImagePositionType !== 'default' ? `position: ${advancedImagePositionType} !important;` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'left' && advancedImageHZLeftOffset?.Desktop ? `left: ${advancedImageHZLeftOffset?.Desktop}${advancedImageHZLeftOffsetUnits?.Desktop};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'right' && advancedImageHZRightOffset?.Desktop ? `right: ${advancedImageHZRightOffset?.Desktop}${advancedImageHZRightOffsetUnits?.Desktop};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'top' && advancedImageVRTopOffset?.Desktop ? `top: ${advancedImageVRTopOffset?.Desktop}${advancedImageVRTopOffsetUnits?.Desktop};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'bottom' && advancedImageVRBottomOffset?.Desktop ? `bottom: ${advancedImageVRBottomOffset?.Desktop}${advancedImageVRBottomOffsetUnits?.Desktop};` : ''}
			${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ''}
			${advancedImageOverflow !== 'default' ? `overflow: ${advancedImageOverflow};` : ''}
		}
		.${blockID} .fb-advanced-image-wrapper{
			${autoFitSwitch ? `display: block;` : `display: flex;`}
			flex-direction: column;
			padding: ${globalDeskPadding};	
			margin: ${globalDeskMargin};
			border: ${globalBorder};
			border-width: ${globalDeskBorder};
			border-radius: ${globalDeskBorderRadius} !important;
			${globalBorderColor !== undefined ? `border-color: ${globalBorderColor};` : ""}
			${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : ""}
			${testBackgroundType === "gradient" ? ` background: ${testCustomGradientSwitcher && testCustomGradientInputValue ? testCustomGradientInputValue : testGradientColor};
			`
				: testBackgroundImageUrl && testBackgroundImageUrl !== "null"
					? `
			background-image: url(${testBackgroundImageUrl});
			background-position: ${testBackgroundImagePosition};
			background-attachment: ${testBackgroundImageAttachment};
			background-repeat: ${testBackgroundImageRepeat};
			background-size: ${testBackgroundImageSize};`
					: testClassicColor ? `background: ${testClassicColor}` : ''
			}
			transition: all .3s ease-in-out;
		}
		.${blockID} .fb-advanced-image-wrapper:hover{
			${globalBorderHoverColor !== undefined ? `border-color: ${globalBorderHoverColor};` : ""}
			${hoverBackgroundType === "gradient" ? `background: ${hoverCustomGradientSwitcher && hoverCustomGradientInputValue ? hoverCustomGradientInputValue : hoverGradientColor};` : hoverBackgroundImageUrl && hoverBackgroundImageUrl !== "null" ? `
			${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : ""}
			${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : ""}
			${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : ""}
			${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : ""}
			${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : ""} `
				: hoverClassicColor ? `background: ${hoverClassicColor}` : ''
			}
		}
		.${blockID} .fb-advanced-image .fb-advanced-image-inner{
			${mediaSize?.Desktop ? `width: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
			${!autoHeightSwitch && mediaHeight?.Desktop ? `height: ${mediaHeight?.Desktop}${mediaHeightUnits?.Desktop};` : `height: auto;`}
			${imageBorder ? `border: ${imageBorder};` : ''}
			${imageDesktopBorder && imageBorderDesktop?.top ? `border-width: ${imageDesktopBorder};` : ''}
            ${imageDesktopBorderRadius && imageBorderRadiusDesktop?.top ? `border-radius: ${imageDesktopBorderRadius};` : ''}
            ${imageBorderColor ? `border-color: ${imageBorderColor};` : ''}
			${imageBoxShadowCssValue ? `box-shadow: ${imageBoxShadowCssValue};` : ''}
			${maskImageUrl && !['square', 'octagon', 'triangle', 'rhombus', 'hexagon', 'bevel'].includes(imageStyle) && `
				-webkit-mask-image: url(${maskImageUrl});
				mask-image: url(${maskImageUrl});
				mask-size: ${maskImageSize};
				mask-position: ${maskImagePosition};
				mask-repeat: ${maskImageRepeat};
			`}
		}
		.${blockID} .fb-advanced-image .fb-advanced-image-inner:hover{
			${imageBorderHoverColor ? `border-color: ${imageBorderHoverColor};` : ''}
		}
		.${blockID} .fb-advanced-image.overlay-simple .fb-advanced-image-inner:before{
			${overlayBackgroundType === "gradient" ? ` background: ${overlayCustomGradientSwitcher && overlayCustomGradientInputValue ? overlayCustomGradientInputValue : overlayGradientColor};
			`
				: overlayBackgroundImageUrl && overlayBackgroundImageUrl !== "null"
					? `
			background-image: url(${overlayBackgroundImageUrl});
			background-position: ${overlayBackgroundImagePosition};
			background-attachment: ${overlayBackgroundImageAttachment};
			background-repeat: ${overlayBackgroundImageRepeat};
			background-size: ${overlayBackgroundImageSize};`
					: overlayClassicColor ? `background: ${overlayClassicColor};` : ''
			}
			opacity: ${overlayOpacity};
			transition: all .3s ease-in-out;
		}
		
		.${blockID} .fb-advanced-image .fb-advanced-image-inner:hover:before{
			${overlayHoverBackgroundType === 'gradient' ? `  
                background: ${overlayHoverCustomGradientSwitcher && overlayHoverCustomGradientInputValue ? overlayHoverCustomGradientInputValue : overlayHoverGradientColor};
            `: `
                background: ${overlayHoverClassicColor};
            `}
		}
		
		.${blockID} .fb-advanced-image-wrapper .fb-advanced-image-caption figcaption {
			text-align: ${captionAlignment};
		}
		.${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
			display: block;
			${HeadingColor ? `color: ${HeadingColor};` : ''}
			${HeadingBackgroundColor ? `background-color: ${HeadingBackgroundColor};` : ''}

			${headingGlobalTypoSwitcher?.fontFamily === true && headingGlobalTypographyData?.fontFamily ? `font-family: ${headingGlobalTypographyData.fontFamily};` : ''}
			${headingGlobalTypoSwitcher?.fontSize === true && headingGlobalTypographyData?.fontSize ? `font-size: ${headingGlobalTypographyData.fontSize};` : ''}
			${headingGlobalTypoSwitcher?.fontWeight === true && headingGlobalTypographyData?.fontWeight ? `font-weight: ${headingGlobalTypographyData.fontWeight};` : ''}
			${headingGlobalTypoSwitcher?.fontStyle === true && headingGlobalTypographyData?.fontStyle ? `font-style: ${headingGlobalTypographyData.fontStyle};` : ''}
			${headingGlobalTypoSwitcher?.textTransform === true && headingGlobalTypographyData?.textTransform ? `text-transform: ${headingGlobalTypographyData.textTransform};` : ''}
			${headingGlobalTypoSwitcher?.textDecoration === true && headingGlobalTypographyData?.textDecoration ? `text-decoration: ${headingGlobalTypographyData.textDecoration};` : ''}
			${headingGlobalTypoSwitcher?.letterSpacing === true && headingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData.letterSpacing};` : ''}
			${headingGlobalTypoSwitcher?.lineHeight === true && headingGlobalTypographyData?.lineHeight ? `line-height: ${headingGlobalTypographyData.lineHeight};` : ''}

			${headingGlobalTypoSwitcher?.fontFamily === false && headingFontFamily && headingFontFamily !== 'Default' ? `font-family: ${headingFontFamily};` : ''}
			${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Desktop && headingFontSizeUnits?.Desktop ? `font-size: ${headingFontSize?.Desktop}${headingFontSizeUnits?.Desktop};` : ''}
			${headingGlobalTypoSwitcher?.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
			${headingGlobalTypoSwitcher?.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
			${headingGlobalTypoSwitcher?.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
			${headingGlobalTypoSwitcher?.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
			${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Desktop && headingLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingLetterSpacing?.Desktop}${headingLetterSpacingUnits?.Desktop};` : ''}
			${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Desktop && headingLineHeightUnits?.Desktop ? `line-height: ${headingLineHeight?.Desktop}${headingLineHeightUnits?.Desktop};` : ''}
			
			${headingDesktopPaddingValue && HeadingDesktopPadding?.top ? `padding: ${headingDesktopPaddingValue};` : ""}
			${headingDesktopMarginValue && HeadingDesktopMargin?.top ? `margin: ${headingDesktopMarginValue};` : ''}
			border: ${HeadingBorder};
			${HeadingBorderColor ? `border-color: ${HeadingBorderColor};` : ''}
			transition: all .3s ease-in-out;
		}
		.${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title:hover {
			${HeadingHoverColor ? `color: ${HeadingHoverColor};` : ''}
			${HeadingBorderHoverColor ? `background-color: ${HeadingBorderHoverColor};` : ''}
			border: ${HeadingBorderHoverColor};
		}
		@media all and (max-width: 1024px) {	
		.fb-advanced-image-main-wrapper.${blockID} {
			${advancedImagePositionType !== 'default' ? `position: ${advancedImagePositionType};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'left' && advancedImageHZLeftOffset?.Tablet ? `left: ${advancedImageHZLeftOffset?.Tablet}${advancedImageHZLeftOffsetUnits?.Tablet};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'right' && advancedImageHZRightOffset?.Tablet ? `right: ${advancedImageHZRightOffset.Tablet}${advancedImageHZRightOffsetUnits.Tablet};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'top' && advancedImageVRTopOffset?.Tablet ? `top: ${advancedImageVRTopOffset?.Tablet}${advancedImageVRTopOffsetUnits?.Tablet};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'bottom' && advancedImageVRBottomOffset?.Tablet ? `bottom: ${advancedImageVRBottomOffset?.Tablet}${advancedImageVRBottomOffsetUnits?.Tablet};` : ''}
			${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ''}
		}
		.${blockID} .fb-advanced-image-wrapper {
			${globalTabPadding && globalPaddingTablet?.top ? `padding: ${globalTabPadding};` : ''}
			${globalTabMargin && globalMarginTablet?.top ? `margin: ${globalTabMargin};` : ''}
			${globalTabBorder && globalBorderTablet?.top ? `border-width: ${globalTabBorder};` : ''}
			${globalTabBorderRadius && globalBorderRadiusTablet?.top ? `border-radius: ${globalTabBorderRadius} !important;` : ''}
		}
		.${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-inner {
			${imageTabletBorder ? `border-width: ${imageTabletBorder};` : ''}
            ${imageTabletBorderRadius ? `border-radius: ${imageTabletBorderRadius};` : ''}
			${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
			${!autoHeightSwitch && mediaHeight?.Tablet ? `height: ${mediaHeight?.Tablet}${mediaHeightUnits?.Tablet};` : `height: auto;`}
		}
		.${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
			${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
			${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
			${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
			${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
			${!autoHeightSwitch && mediaHeight?.Tablet ? `height: ${mediaHeight?.Tablet}${mediaHeightUnits?.Tablet};` : `height: auto;`}
			${headingTabletPaddingValue && HeadingTabPadding?.top ? `padding: ${headingTabletPaddingValue};` : ''}
			${headingTabletMarginValue && HeadingTabMargin?.top ? `margin: ${headingTabletMarginValue};` : ''}
		}
		}
		@media all and (max-width: 767px) {
		.fb-advanced-image-main-wrapper.${blockID} {
			${advancedImagePositionType !== 'default' ? `position: ${advancedImagePositionType};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'left' && advancedImageHZLeftOffset?.Mobile ? `left: ${advancedImageHZLeftOffset?.Mobile}${advancedImageHZLeftOffsetUnits?.Mobile};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'right' && advancedImageHZRightOffset?.Mobile ? `right: ${advancedImageHZRightOffset?.Mobile}${advancedImageHZRightOffsetUnits?.Mobile};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'top' && advancedImageVRTopOffset?.Mobile ? `top: ${advancedImageVRTopOffset?.Mobile}${advancedImageVRTopOffsetUnits?.Mobile};` : ''}
			${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'bottom' && advancedImageVRBottomOffset?.Mobile ? `bottom: ${advancedImageVRBottomOffset?.Mobile}${advancedImageVRBottomOffsetUnits?.Mobile};` : ''}
			${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ''}
		}
		.${blockID} .fb-advanced-image-wrapper {
			${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ''}
			${globalMobPadding && globalPaddingMobile?.top ? `padding: ${globalMobPadding};` : ''}
			${globalMobMargin && globalMarginMobile?.top ? `margin: ${globalMobMargin};` : ''}
			${globalMobBorder && globalBorderMobile?.top ? `border-width: ${globalMobBorder};` : ''}
			${globalMobBorderRadius && globalBorderRadiusMobile?.top ? `border-radius: ${globalMobBorderRadius} !important;` : ''}
		}
		.${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-inner {
			${imageMobileBorder && imageBorderMobile?.top ? `border-width: ${imageMobileBorder};` : ''}
            ${imageMobileBorderRadius && imageBorderRadiusMobile?.top ? `border-radius: ${imageMobileBorderRadius};` : ''}
			${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
			${!autoHeightSwitch && mediaHeight?.Mobile ? `height: ${mediaHeight?.Mobile}${mediaHeightUnits?.Mobile};` : `height: auto;`}
		}
		
		.${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
			${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
			${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
			${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
			${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
			${!autoHeightSwitch && mediaHeight?.Mobile ? `height: ${mediaHeight?.Mobile}${mediaHeightUnits?.Mobile};` : `height: auto;`}
			${headingMobilePaddingValue && HeadingMobilePadding?.top ? `padding: ${headingMobilePaddingValue};` : ''}
			${headingMobileMarginValue && HeadingMobileMargin?.top ? `margin: ${headingMobileMarginValue};` : ''}
		}
		}
	`,
		[attributes]);

	const customCss = getCustomCss(advancedImageCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${advancedImageStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [advancedImageStyle, customCss]);

	useEffect(() => {
		if (IMAGE_MASK_IMAEGS[imageStyle]) {
			setAttributes({ maskImageUrl: IMAGE_MASK_IMAEGS[imageStyle] });
		}
	}, [imageStyle]);

	/**
	 * Dynamic Image Button Controls
	 */
	const dynamicImageBtnControls = getProDynamicButton({
		hook: 'frontisblocks-advanced-image-dynamic-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicImageEnabled',
		keyPrefix: 'pro-dynamic-advanced-image',
	});

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<div className="fb-advanced-wrapper">
				<PanelBody
					title={__("General", "frontis-blocks")}
					initialOpen={true}
				>
					<BaseControl label={__("Image", "frontis-blocks")} className="fb-advanced-image-upload-control">
						{dynamicImageEnabled ? (
							<div className="fb-dynamic-image-panel">
								<DynamicImageSourceControl
									enabled = {dynamicImageEnabled}
									onChangeEnabled={(value) => setAttributes({ dynamicImageEnabled: value })}
								
									source = {dynamicImageSource}
									onChangeSource={(value) => setAttributes({ dynamicImageSource: value })}
								
									postId = {dynamicImagePostId}
									setPostId={(value) => setAttributes({ dynamicImagePostId: value })}
									postType = {dynamicImagePostType}
									setPostType={(value) => setAttributes({ dynamicImagePostType: value })}
									postLabel = {dynamicImagePostLabel}
									setPostLabel={(value) => setAttributes({ dynamicImagePostLabel: value })}
								
									field = {dynamicImageField}
									onChangeField={(value) => setAttributes({ dynamicImageField: value })}
								
									size = {dynamicImageSize}
									onChangeSize={(value) => setAttributes({ dynamicImageSize: value })}
								
									fallbackUrl = {dynamicImageFallbackUrl}
									setFallbackUrl={(value) => setAttributes({ dynamicImageFallbackUrl: value })}
									fallbackAlt = {dynamicImageFallbackAlt}
									setFallbackAlt={(value) => setAttributes({ dynamicImageFallbackAlt: value })}
									fallbackId = {dynamicImageFallbackId}
									setFallbackId={(value) => setAttributes({ dynamicImageFallbackId: value })}
								
									enableLink = {dynamicImageEnableLink}
									onChangeEnableLink={(value) => setAttributes({ dynamicImageEnableLink: value })}
									linkSource = {dynamicImageLinkSource}
									onChangeLinkSource={(value) => setAttributes({ dynamicImageLinkSource: value })}
								/>
							</div>
						) : (
						<>
							{advancedImageUrl ? (
								<div className="fb-image-avatar-control" style={{ backgroundImage: `url(${advancedImageUrl})` }}>
									<button
										className='fb-image-avatar-delete'
										onClick={() => {
											setAttributes({
												advancedImageUrl: null,
												advancedImageAlt: null,
												advancedImageId: null,
												advancedImageSrcSet: null,
											});
										}}
									>
										<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.9431 22C18.466 22 22.9431 17.5228 22.9431 12C22.9431 6.47715 18.466 2 12.9431 2C7.42027 2 2.94312 6.47715 2.94312 12C2.94312 17.5228 7.42027 22 12.9431 22Z" stroke="#1C274C" />
											<path d="M15.4431 9.50002L10.4431 14.5M10.4431 9.5L15.4431 14.5" stroke="#1C274C" />
										</svg>
									</button>
									<div className="fb-image-replace-dynamic-btn-wrapper">
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

												mediaUploader.on('select', function () {
													const attachment = mediaUploader.state().get('selection').first().toJSON();
													onSelectImage(attachment);
												});

												mediaUploader.open();
											}}
										>
											<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C" />
												<path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C" />
											</svg>
											Replace
										</button>
										{dynamicImageBtnControls.map((control, index) => (
											<div key={control.key || index}>{control.comp}</div>
										))}
									</div>
								</div>
							) : (
							<button
								className='fb-image-upload-btn'
								onClick={() => {
								const mediaUploader = wp.media({
									title: __('Select or Upload Background Image', 'frontis-blocks'),
									button: { text: __('Use this image', 'frontis-blocks') },
									multiple: false
								});
								mediaUploader.on('select', () => {
									const attachment = mediaUploader.state().get('selection').first().toJSON();
									onSelectImage(attachment);
								});
								mediaUploader.open();
								}}
							>
								{__('Upload','frontis-blocks')}
							</button>
							)}
						</>
						)}
					</BaseControl>

					<SelectControl
						label={__("Styles", "frontis-blocks")}
						value={imageStyle || "square"}
						options={IMAGE_STYLES}
						onChange={(value) => {
							setAttributes({ imageStyle: value });
						}}
						__nextHasNoMarginBottom
					/>

					<ToggleControl
						__nextHasNoMarginBottom
						label={__("Show Overlay", "frontis-block")}
						checked={showOverlay}
						onChange={(value) => {
							setAttributes({ showOverlay: value });
						}}
					/>
					{/* Display Caption */}
					<ToggleControl
						__nextHasNoMarginBottom
						label={__("Display Caption", "frontis-block")}
						checked={displayCaption}
						onChange={(value) => {
							setAttributes({ displayCaption: value });
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
						onChange={(value) => {
							setAttributes({ displayTitle: value });
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
								options={TITLE_POSITION}
								onChange={(value) =>
									setAttributes({ titlePosition:value })
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
						onChange={(value) => {
							setAttributes({ linkSwitch: value });
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
						options={IMAGE_HOVER_EFFECTS}
						onChange={(value) =>
							setAttributes({ imageHover: value })
						}
						__nextHasNoMarginBottom
					/>

					<ToggleControl
						label={__("Smart Lazy Load", "frontis-block")}
						checked={smartLazyLoadSwitcher}
						onChange={(value) => {
							setAttributes({ smartLazyLoadSwitcher: value });
						}}
					/>
					{smartLazyLoadSwitcher && (
						<FB_ImageControl
							label={__("Upload Lazy Load Image", "frontis-blocks")}
							globalImageUrl={smartLazyLoadImageUrl}
							setglobalImageUrl={(value) => setAttributes({ smartLazyLoadImageUrl: value })}
							globalImageAlt={smartLazyLoadImageAlt}
							setglobalImageAlt={(value) => setAttributes({ smartLazyLoadImageAlt: value })}
							globalImageID={smartLazyLoadImageId}
							setglobalImageID={(value) => setAttributes({ smartLazyLoadImageId: value })}
							isImageSize={false}
						/>
					)}

					<ToggleControl
						label={__("Lazy Load", "frontis-block")}
						checked={advancedImageLazyLoadSwitcher}
						onChange={(value) => {
							setAttributes({ advancedImageLazyLoadSwitcher: value });
						}}
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
			{/*	Title */}
			{displayTitle && (
				<PanelBody
					title={__("Title", "frontis-blocks")}
					initialOpen={true}
				>
					<FB_TypographyControl
						globalTypoControlActive={true}
						globalTypoSwitcher={headingGlobalTypoSwitcher}
						storeGlobalTypographyData={(value) => setAttributes({ headingGlobalTypographyData: value })}

						globalTypoType={headingGlobalTypoType}
						onChangeGlobalTypoType={(value) => {
							setAttributes({
								headingGlobalTypoType: value,
								headingGlobalTypoSwitcher: value === 'default' ? { ...headingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...headingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
							})
						}}

						globalTypoOption={headingGlobalTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ headingGlobalTypoOption: value })}

						fontFamily={headingFontFamily}
						onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontFamily: value && false } })}

						fontSize={headingFontSize}
						onChangeFontSize={(value) => setAttributes({ headingFontSize: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontSize: value && false } })}

						fontSizeUnits={headingFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

						fontWeight={headingFontWeight}
						onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontWeight: value && false } })}

						fontStyle={headingFontStyle}
						onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, fontStyle: value && false } })}

						textTransform={headingTextTransform}
						onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, textTransform: value && false } })}

						textDecoration={headingTextDecoration}
						onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, textDecoration: value && false } })}

						letterSpacing={headingLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, letterSpacing: value && false } })}

						letterSpacingUnits={headingLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

						lineHeight={headingLineHeight}
						onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value, headingGlobalTypoSwitcher: { ...headingGlobalTypoSwitcher, lineHeight: value && false } })}

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
							setGlobalColor={(value) => setAttributes({ HeadingColor: value === undefined ? '' : value })}
						/>
					)}

					{HeadingColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={HeadingHoverColor}
							setGlobalColor={(value) => setAttributes({ HeadingHoverColor: value === undefined ? '' : value })}
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
					max={mediaSizeUnits === '%' ? 100 : 1400}
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
					max={mediaHeightUnits === '%' ? 100 : 1400}
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
						options={IMAGE_AUTO_FIT}
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
					onChange={(value) => setAttributes({ imageBorder: value })}
				/>
				<FB_Color
					label={__("Border Color", "frontis-blocks")}
					globalColorSwitcher={imageBorderColorSwitcher}
					globalColor={imageBorderColor}
					globalHoverColor={imageBorderHoverColor}
					handleColorSwitcherChange={(value) => setAttributes({ imageBorderColorSwitcher: value })}
					handleGlobalColorChange={(value) => setAttributes({ imageBorderColor: value === undefined ? '' : value })}
					handleGlobalHoverColorChange={(value) => setAttributes({ imageBorderHoverColor: value === undefined ? '' : value })}
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
					onBoxShadowChange={(value) => setAttributes({ imageBoxShadowValues: value })}
					initialShadowValue={imageBoxShadowValues}
					onBoxShadowStyleChange={(value) => setAttributes({ imageBoxShadowCssValue: value, })}
				/>
				{/*	Overlay Style*/}
			</PanelBody>
			{showOverlay && (
				<PanelBody
					title={__("Overlay", "frontis-blocks")}
					initialOpen={false}
				>

					<FB_BackgroundColorControl
						label={__("Overlay Color", "frontis-blocks")}
						bgColorSwitcher={overlayBgColorSwitcher}
						setBgColorSwitcher={(value) => setAttributes({ overlayBgColorSwitcher: value })}

						normalBackgroundType={overlayBackgroundType}
						setNormalBackgroundType={(value) => setAttributes({ overlayBackgroundType: value })}
						normalClassicColor={overlayClassicColor}
						setNormalClassicColor={(value) => setAttributes({ overlayClassicColor: value === undefined ? '' : value })}
						normalGradientColor={overlayGradientColor}
						setNormalGradientColor={(value) => setAttributes({ overlayGradientColor: value === undefined ? null : value })}
						normalCustomGradientSwitcher={overlayCustomGradientSwitcher}
						setNormalCustomGradientSwitcher={(value) => setAttributes({ overlayCustomGradientSwitcher: value })}
						normalCustomGradientInputValue={overlayCustomGradientInputValue}
						setNormalCustomGradientInputValue={(value) => setAttributes({ overlayCustomGradientInputValue: value })}

						hoverBackgroundType={overlayHoverBackgroundType}
						setHoverBackgroundType={(value) => setAttributes({ postGridHoverBackgroundType: value })}
						hoverClassicColor={overlayHoverClassicColor}
						setHoverClassicColor={(value) => setAttributes({ overlayHoverClassicColor: value === undefined ? '' : value })}
						hoverGradientColor={overlayHoverGradientColor}
						setHoverGradientColor={(value) => setAttributes({ overlayHoverGradientColor: value === undefined ? null : value })}
						hoverCustomGradientSwitcher={overlayHoverCustomGradientSwitcher}
						setHoverCustomGradientSwitcher={(value) => setAttributes({ overlayHoverCustomGradientSwitcher: value })}
						hoverCustomGradientInputValue={overlayHoverCustomGradientInputValue}
						setHoverCustomGradientInputValue={(value) => setAttributes({ overlayHoverCustomGradientInputValue: value })}

						isBackgroundImage={false}

					/>

					<RangeControl
						label="Opacity"
						value={overlayOpacity}
						onChange={(value) => setAttributes({ overlayOpacity: value, })}
						min={0}
						max={1}
						step={0.1}
						allowReset
						resetFallbackValue={undefined}
					/>
				</PanelBody>
			)}
			<PanelBody
				title={__("Mask Image", "frontis-blocks")}
				initialOpen={false}
			>
				<SelectControl
					label={__("Size", "frontis-blocks")}
					value={maskImageSize}
					options={IMAGE_MASK_SIZE}
					onChange={(value) => setAttributes({ maskImageSize: value })}
				/>
				<SelectControl
					label={__("Position", "frontis-blocks")}
					value={maskImagePosition}
					options={IMAGE_MASK_POSITION}
					onChange={(value) => setAttributes({ maskImagePosition: value })}
				/>
				<SelectControl
					label={__("Repeat", "frontis-blocks")}
					value={maskImageRepeat}
					options={IMAGE_MASK_REPEAT}
					onChange={(value) => setAttributes({ maskImageRepeat: value })}
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
							rangeValue={globalZIndex}
							onChangeHandler={(value) => setAttributes({ globalZIndex: value === 0 ? undefined : value })}
							deviceType={deviceType}
							setAttributes={setAttributes}
							rangeStep={1}
							resetFallbackValue={""}
							isRangeUnit={false}

						/>

						<SelectControl
							label={__("Overflow", "frontis-blocks")}
							value={advancedImageOverflow}
							options={OVERFLOW_OP}
							onChange={(value) => setAttributes({ advancedImageOverflow: value })}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={advancedImagePositionType}
							setPositionType={(value) => setAttributes({ advancedImagePositionType: value })}

							HZOrientationType={advancedImageHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ advancedImageHZOrientationType: value })
							}
							VROrientationType={advancedImageVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ advancedImageVROrientationType: value })
							}

							HZLeftOffset={advancedImageHZLeftOffset}
							setHZLeftOffset={(value) => setAttributes({ advancedImageHZLeftOffset: value })}
							HZLeftOffsetUnits={advancedImageHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) => setAttributes({ advancedImageHZLeftOffsetUnits: value })}
							HZRightOffset={advancedImageHZRightOffset}
							setHZRightOffset={(value) => setAttributes({ advancedImageHZRightOffset: value })}
							HZRightOffsetUnits={advancedImageHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) => setAttributes({ advancedImageHZRightOffsetUnits: value })}

							VRTopOffset={advancedImageVRTopOffset}
							setVRTopOffset={(value) => setAttributes({ advancedImageVRTopOffset: value })}
							VRTopOffsetUnits={advancedImageVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) => setAttributes({ advancedImageVRTopOffsetUnits: value })}
							VRBottomOffset={advancedImageVRBottomOffset}
							setVRBottomOffset={(value) => setAttributes({ advancedImageVRBottomOffset: value })}
							VRBottomOffsetUnits={advancedImageVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) => setAttributes({ advancedImageVRBottomOffsetUnits: value })}

							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={advancedImageGlobalWraperID}
							onChangeValue={(value) => setAttributes({ advancedImageGlobalWraperID: value })}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={advancedImageGlobalWraperClass}
							onChangeValue={(value) => setAttributes({ advancedImageGlobalWraperClass: value })}
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
							setBgColorSwitcher={(value) => setAttributes({ testBgColorSwitcher: value })}
							normalBackgroundType={testBackgroundType}
							setNormalBackgroundType={(value) => setAttributes({ testBackgroundType: value })}
							normalClassicColor={testClassicColor}
							setNormalClassicColor={(value) => setAttributes({ testClassicColor: value === undefined ? '' : value })}
							normalGradientColor={testGradientColor}
							setNormalGradientColor={(value) => setAttributes({ testGradientColor: value === undefined ? null : value })}
							normalCustomGradientSwitcher={testCustomGradientSwitcher}
							setNormalCustomGradientSwitcher={(value) => setAttributes({ testCustomGradientSwitcher: value, })}
							normalCustomGradientInputValue={testCustomGradientInputValue}
							setNormalCustomGradientInputValue={(value) => setAttributes({ testCustomGradientInputValue: value, })}
							normalBackgroundImageUrl={testBackgroundImageUrl}
							setNormalBackgroundImageUrl={(value) => setAttributes({ testBackgroundImageUrl: value })}
							normalBackgroundImageAlt={testBackgroundImageAlt}
							setNormalBackgroundImageAlt={(value) => setAttributes({ testBackgroundImageAlt: value })}
							normalBackgroundImageID={testBackgroundImageID}
							setNormalBackgroundImageID={(value) => setAttributes({ testBackgroundImageID: value })}
							normalBackgroundImagePosition={testBackgroundImagePosition}
							setNormalBackgroundImagePosition={(value) => setAttributes({ testBackgroundImagePosition: value, })}
							normalBackgroundImageAttachment={testBackgroundImageAttachment}
							setNormalBackgroundImageAttachment={(value) => setAttributes({ testBackgroundImageAttachment: value, })}
							normalBackgroundImageRepeat={testBackgroundImageRepeat}
							setNormalBackgroundImageRepeat={(value) => setAttributes({ testBackgroundImageRepeat: value, })}
							normalBackgroundImageSize={testBackgroundImageSize}
							setNormalBackgroundImageSize={(value) => setAttributes({ testBackgroundImageSize: value })}
							hoverBackgroundType={hoverBackgroundType}
							setHoverBackgroundType={(value) => setAttributes({ hoverBackgroundType: value })}
							hoverClassicColor={hoverClassicColor}
							setHoverClassicColor={(value) => setAttributes({ hoverClassicColor: value === undefined ? '' : value })}
							hoverGradientColor={hoverGradientColor}
							setHoverGradientColor={(value) => setAttributes({ hoverGradientColor: value === undefined ? null : value })}
							hoverCustomGradientSwitcher={hoverCustomGradientSwitcher}
							setHoverCustomGradientSwitcher={(value) => setAttributes({ hoverCustomGradientSwitcher: value, })}
							hoverCustomGradientInputValue={hoverCustomGradientInputValue}
							setHoverCustomGradientInputValue={(value) => setAttributes({ hoverCustomGradientInputValue: value, })}
							hoverBackgroundImageUrl={hoverBackgroundImageUrl}
							setHoverBackgroundImageUrl={(value) => setAttributes({ hoverBackgroundImageUrl: value })}
							hoverBackgroundImageAlt={hoverBackgroundImageAlt}
							setHoverBackgroundImageAlt={(value) => setAttributes({ hoverBackgroundImageAlt: value })}
							hoverBackgroundImageID={hoverBackgroundImageID}
							setHoverBackgroundImageID={(value) => setAttributes({ hoverBackgroundImageID: value })}
							hoverBackgroundImagePosition={hoverBackgroundImagePosition}
							setHoverBackgroundImagePosition={(value) => setAttributes({ hoverBackgroundImagePosition: value, })}
							hoverBackgroundImageAttachment={hoverBackgroundImageAttachment}
							setHoverBackgroundImageAttachment={(value) => setAttributes({ hoverBackgroundImageAttachment: value, })}
							hoverBackgroundImageRepeat={hoverBackgroundImageRepeat}
							setHoverBackgroundImageRepeat={(value) => setAttributes({ hoverBackgroundImageRepeat: value, })}
							hoverBackgroundImageSize={hoverBackgroundImageSize}
							setHoverBackgroundImageSize={(value) => setAttributes({ hoverBackgroundImageSize: value })}
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

					<PanelBody
						title={__("Responsive Control", "frontis-blocks")}
						initialOpen={false}
						className="fb-setting-responsive-control-wrapper"
					>
						<FB_VisibilityControl
							desktopValue={advancedImageDesktopSwitcher}
							setDesktopValue={(value) => setAttributes({ advancedImageDesktopSwitcher: value })}

							tabletValue={advancedImageTabletSwitcher}
							setTabletValue={(value) => setAttributes({ advancedImageTabletSwitcher: value })}

							mobileValue={advancedImageMobileSwitcher}
							setMobileValue={(value) => setAttributes({ advancedImageMobileSwitcher: value })}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={advancedImageCustomCSS}
							onChangeValue={(value) => setAttributes({ advancedImageCustomCSS: value })}
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
