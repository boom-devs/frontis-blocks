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
	ICON_VERTICAL_ALIGN,
	TEXT_ALIGN,
	BORDER_STYLES,
	OVERFLOW_OP,
	LIST_DIRECTION_ICON,
	LIST_WRAP_ICON,
	CONTENT_TYPE,
} from "./constants/constants";

import "./editor.scss";

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		// deviceType,
		blockStyle,
		FeatureAlignment,
		FeatureIconAlignment,
		FeatureTitleFontFamily,
		FeatureDescFontFamily,

		/** Global Style */
		FeatureGlobalZIndex,
		featuresListOverflow,
		FeatureGlobalPaddingUnits,
		FeatureGlobalPaddingDesktop,
		FeatureGlobalPaddingTablet,
		FeatureGlobalPaddingMobile,
		FeatureGlobalPaddingLink,

		FeatureGlobalMarginUnits,
		FeatureGlobalMarginDesktop,
		FeatureGlobalMarginTablet,
		FeatureGlobalMarginMobile,
		FeatureGlobalMarginLink,

		/** Start Global Background Color */
		FeatureGlobalBgColorSwitcher,

		FeatureGlobalNormalBackgroundType,
		FeatureGlobalNormalClassicColor,
		FeatureGlobalNormalGradientColor,
		FeatureGlobalNormalCustomGradientSwitcher,
		FeatureGlobalNormalCustomGradientInputValue,

		FeatureGlobalNormalBackgroundImageUrl,
		FeatureGlobalNormalBackgroundImageAlt,
		FeatureGlobalNormalBackgroundImageID,
		FeatureGlobalNormalBackgroundImagePosition,
		FeatureGlobalNormalBackgroundImageAttachment,
		FeatureGlobalNormalBackgroundImageRepeat,
		FeatureGlobalNormalBackgroundImageSize,

		FeatureGlobalHoverBackgroundType,
		FeatureGlobalHoverClassicColor,
		FeatureGlobalHoverGradientColor,
		FeatureGlobalHoverCustomGradientSwitcher,
		FeatureGlobalHoverCustomGradientInputValue,

		FeatureGlobalHoverBackgroundImageUrl,
		FeatureGlobalHoverBackgroundImageAlt,
		FeatureGlobalHoverBackgroundImageID,
		FeatureGlobalHoverBackgroundImagePosition,
		FeatureGlobalHoverBackgroundImageAttachment,
		FeatureGlobalHoverBackgroundImageRepeat,
		FeatureGlobalHoverBackgroundImageSize,
		/** End Global Background Color */

		FeatureGlobalBorder,
		FeatureGlobalBorderColorSwitcher,
		FeatureGlobalBorderColor,
		FeatureGlobalBorderHoverColor,

		FeatureGlobalBorderUnits,
		FeatureGlobalBorderDesktop,
		FeatureGlobalBorderTablet,
		FeatureGlobalBorderMobile,
		FeatureGlobalBorderLink,

		FeatureGlobalBorderRadiusUnits,
		FeatureGlobalBorderRadiusDesktop,
		FeatureGlobalBorderRadiusTablet,
		FeatureGlobalBorderRadiusMobile,
		FeatureGlobalBorderRadiusLink,

		FeatureGlobalBoxShadowSwitcher,
		FeatureGlobalBoxShadowValues,
		FeatureGlobalBoxShadowCssValue,
		FeatureGlobalBoxShadowHoverValues,
		FeatureGlobalBoxShadowHoverCssValue,
		/** End Global Style */

		featuresListDesktopSwitcher,
		featuresListTabletSwitcher,
		featuresListMobileSwitcher,

		featuresListGlobalWraperCustomCSS,
		featuresListGlobalWraperID,
		featuresListGlobalWraperClass,

		// Position
		featuresListPositionType,
		featuresListHZOrientationType,
		featuresListVROrientationType,
		featuresListHZLeftOffset,
		featuresListHZLeftOffsetUnits,
		featuresListHZRightOffset,
		featuresListHZRightOffsetUnits,
		featuresListVRTopOffset,
		featuresListVRTopOffsetUnits,
		featuresListVRBottomOffset,
		featuresListVRBottomOffsetUnits,
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

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (FeatureGlobalPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						FeatureGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalPaddingMobile: {
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
						FeatureGlobalPaddingDesktop: {
							...FeatureGlobalPaddingDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalPaddingTablet: {
							...FeatureGlobalPaddingTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalPaddingMobile: {
							...FeatureGlobalPaddingMobile,
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
		setAttributes({ FeatureGlobalPaddingLink: !FeatureGlobalPaddingLink });
	};

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			FeatureGlobalPaddingUnits: {
				...FeatureGlobalPaddingUnits,
				[deviceType]: unit,
			},
		});
	};
	const globalDesktopPadding = `${FeatureGlobalPaddingDesktop.top}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.right}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.bottom}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.left}${FeatureGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding = `${FeatureGlobalPaddingTablet.top}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.right}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.bottom}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.left}${FeatureGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding = `${FeatureGlobalPaddingMobile.top}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.right}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.bottom}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.left}${FeatureGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (FeatureGlobalMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						FeatureGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalMarginMobile: {
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
						FeatureGlobalMarginDesktop: {
							...FeatureGlobalMarginDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalMarginTablet: {
							...FeatureGlobalMarginTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalMarginMobile: {
							...FeatureGlobalMarginMobile,
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
		setAttributes({ FeatureGlobalMarginLink: !FeatureGlobalMarginLink });
	};

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			FeatureGlobalMarginUnits: {
				...FeatureGlobalMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const globalDesktopMargin = `${FeatureGlobalMarginDesktop.top}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.right}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.bottom}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.left}${FeatureGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${FeatureGlobalMarginTablet.top}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.right}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.bottom}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.left}${FeatureGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${FeatureGlobalMarginMobile.top}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.right}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.bottom}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.left}${FeatureGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (FeatureGlobalBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						FeatureGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalBorderMobile: {
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
						FeatureGlobalBorderDesktop: {
							...FeatureGlobalBorderDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalBorderTablet: {
							...FeatureGlobalBorderTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalBorderMobile: {
							...FeatureGlobalBorderMobile,
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
		setAttributes({ FeatureGlobalBorderLink: !FeatureGlobalBorderLink });
	};

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			FeatureGlobalBorderUnits: {
				...FeatureGlobalBorderUnits,
				[deviceType]: unit,
			},
		});
	};
	const globalDesktopBorderWidth = `${FeatureGlobalBorderDesktop.top}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.right}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.bottom}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.left}${FeatureGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${FeatureGlobalBorderTablet.top}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.right}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.bottom}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.left}${FeatureGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${FeatureGlobalBorderMobile.top}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.right}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.bottom}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.left}${FeatureGlobalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (FeatureGlobalBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						FeatureGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalBorderRadiusMobile: {
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
						FeatureGlobalBorderRadiusDesktop: {
							...FeatureGlobalBorderRadiusDesktop,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						FeatureGlobalBorderRadiusTablet: {
							...FeatureGlobalBorderRadiusTablet,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						FeatureGlobalBorderRadiusMobile: {
							...FeatureGlobalBorderRadiusMobile,
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
			FeatureGlobalBorderRadiusLink: !FeatureGlobalBorderRadiusLink,
		});
	};

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			FeatureGlobalBorderRadiusUnits: {
				...FeatureGlobalBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${FeatureGlobalBorderRadiusDesktop.top}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.right}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.bottom}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.left}${FeatureGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${FeatureGlobalBorderRadiusTablet.top}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.right}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.bottom}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.left}${FeatureGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${FeatureGlobalBorderRadiusMobile.top}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.right}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.bottom}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.left}${FeatureGlobalBorderRadiusUnits.Mobile}`;
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
	const labelContainerDesktopPadding = `${labelContainerPaddingDesktop.top}${labelContainerPaddingUnits.Desktop} ${labelContainerPaddingDesktop.right}${labelContainerPaddingUnits.Desktop} ${labelContainerPaddingDesktop.bottom}${labelContainerPaddingUnits.Desktop} ${labelContainerPaddingDesktop.left}${labelContainerPaddingUnits.Desktop}`;
	const labelContainerTabletPadding = `${labelContainerPaddingTablet.top}${labelContainerPaddingUnits.Tablet} ${labelContainerPaddingTablet.right}${labelContainerPaddingUnits.Tablet} ${labelContainerPaddingTablet.bottom}${labelContainerPaddingUnits.Tablet} ${labelContainerPaddingTablet.left}${labelContainerPaddingUnits.Tablet}`;
	const labelContainerMobilePadding = `${labelContainerPaddingMobile.top}${labelContainerPaddingUnits.Mobile} ${labelContainerPaddingMobile.right}${labelContainerPaddingUnits.Mobile} ${labelContainerPaddingMobile.bottom}${labelContainerPaddingUnits.Mobile} ${labelContainerPaddingMobile.left}${labelContainerPaddingUnits.Mobile}`;
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

	const labelContainerDesktopMargin = `${labelContainerMarginDesktop.top}${labelContainerMarginUnits.Desktop} ${labelContainerMarginDesktop.right}${labelContainerMarginUnits.Desktop} ${labelContainerMarginDesktop.bottom}${labelContainerMarginUnits.Desktop} ${labelContainerMarginDesktop.left}${labelContainerMarginUnits.Desktop}`;
	const labelContainerTabletMargin = `${labelContainerMarginTablet.top}${labelContainerMarginUnits.Tablet} ${labelContainerMarginTablet.right}${labelContainerMarginUnits.Tablet} ${labelContainerMarginTablet.bottom}${labelContainerMarginUnits.Tablet} ${labelContainerMarginTablet.left}${labelContainerMarginUnits.Tablet}`;
	const labelContainerMobileMargin = `${labelContainerMarginMobile.top}${labelContainerMarginUnits.Mobile} ${labelContainerMarginMobile.right}${labelContainerMarginUnits.Mobile} ${labelContainerMarginMobile.bottom}${labelContainerMarginUnits.Mobile} ${labelContainerMarginMobile.left}${labelContainerMarginUnits.Mobile}`;
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
	const labelContainerDesktopBorderWidth = `${labelContainerBorderDesktop.top}${labelContainerBorderUnits.Desktop} ${labelContainerBorderDesktop.right}${labelContainerBorderUnits.Desktop} ${labelContainerBorderDesktop.bottom}${labelContainerBorderUnits.Desktop} ${labelContainerBorderDesktop.left}${labelContainerBorderUnits.Desktop}`;
	const labelContainerTabletBorderWidth = `${labelContainerBorderTablet.top}${labelContainerBorderUnits.Tablet} ${labelContainerBorderTablet.right}${labelContainerBorderUnits.Tablet} ${labelContainerBorderTablet.bottom}${labelContainerBorderUnits.Tablet} ${labelContainerBorderTablet.left}${labelContainerBorderUnits.Tablet}`;
	const labelContainerMobileBorderWidth = `${labelContainerBorderMobile.top}${labelContainerBorderUnits.Mobile} ${labelContainerBorderMobile.right}${labelContainerBorderUnits.Mobile} ${labelContainerBorderMobile.bottom}${labelContainerBorderUnits.Mobile} ${labelContainerBorderMobile.left}${labelContainerBorderUnits.Mobile}`;
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
	const labelContainerDesktopBorderRadiusWidth = `${labelContainerBorderRadiusDesktop.top}${labelContainerBorderRadiusUnits.Desktop} ${labelContainerBorderRadiusDesktop.right}${labelContainerBorderRadiusUnits.Desktop} ${labelContainerBorderRadiusDesktop.bottom}${labelContainerBorderRadiusUnits.Desktop} ${labelContainerBorderRadiusDesktop.left}${labelContainerBorderRadiusUnits.Desktop}`;
	const labelContainerTabletBorderRadiusWidth = `${labelContainerBorderRadiusTablet.top}${labelContainerBorderRadiusUnits.Tablet} ${labelContainerBorderRadiusTablet.right}${labelContainerBorderRadiusUnits.Tablet} ${labelContainerBorderRadiusTablet.bottom}${labelContainerBorderRadiusUnits.Tablet} ${labelContainerBorderRadiusTablet.left}${labelContainerBorderRadiusUnits.Tablet}`;
	const labelContainerMobileBorderRadiusWidth = `${labelContainerBorderRadiusMobile.top}${labelContainerBorderRadiusUnits.Mobile} ${labelContainerBorderRadiusMobile.right}${labelContainerBorderRadiusUnits.Mobile} ${labelContainerBorderRadiusMobile.bottom}${labelContainerBorderRadiusUnits.Mobile} ${labelContainerBorderRadiusMobile.left}${labelContainerBorderRadiusUnits.Mobile}`;
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
	const labelIconDesktopPadding = `${labelIconPaddingDesktop.top}${labelIconPaddingUnits.Desktop} ${labelIconPaddingDesktop.right}${labelIconPaddingUnits.Desktop} ${labelIconPaddingDesktop.bottom}${labelIconPaddingUnits.Desktop} ${labelIconPaddingDesktop.left}${labelIconPaddingUnits.Desktop}`;
	const labelIconTabletPadding = `${labelIconPaddingTablet.top}${labelIconPaddingUnits.Tablet} ${labelIconPaddingTablet.right}${labelIconPaddingUnits.Tablet} ${labelIconPaddingTablet.bottom}${labelIconPaddingUnits.Tablet} ${labelIconPaddingTablet.left}${labelIconPaddingUnits.Tablet}`;
	const labelIconMobilePadding = `${labelIconPaddingMobile.top}${labelIconPaddingUnits.Mobile} ${labelIconPaddingMobile.right}${labelIconPaddingUnits.Mobile} ${labelIconPaddingMobile.bottom}${labelIconPaddingUnits.Mobile} ${labelIconPaddingMobile.left}${labelIconPaddingUnits.Mobile}`;
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

	const labelIconDesktopMargin = `${labelIconMarginDesktop.top}${labelIconMarginUnits.Desktop} ${labelIconMarginDesktop.right}${labelIconMarginUnits.Desktop} ${labelIconMarginDesktop.bottom}${labelIconMarginUnits.Desktop} ${labelIconMarginDesktop.left}${labelIconMarginUnits.Desktop}`;
	const labelIconTabletMargin = `${labelIconMarginTablet.top}${labelIconMarginUnits.Tablet} ${labelIconMarginTablet.right}${labelIconMarginUnits.Tablet} ${labelIconMarginTablet.bottom}${labelIconMarginUnits.Tablet} ${labelIconMarginTablet.left}${labelIconMarginUnits.Tablet}`;
	const labelIconMobileMargin = `${labelIconMarginMobile.top}${labelIconMarginUnits.Mobile} ${labelIconMarginMobile.right}${labelIconMarginUnits.Mobile} ${labelIconMarginMobile.bottom}${labelIconMarginUnits.Mobile} ${labelIconMarginMobile.left}${labelIconMarginUnits.Mobile}`;
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
	const labelIconDesktopBorderWidth = `${labelIconBorderDesktop.top}${labelIconBorderUnits.Desktop} ${labelIconBorderDesktop.right}${labelIconBorderUnits.Desktop} ${labelIconBorderDesktop.bottom}${labelIconBorderUnits.Desktop} ${labelIconBorderDesktop.left}${labelIconBorderUnits.Desktop}`;
	const labelIconTabletBorderWidth = `${labelIconBorderTablet.top}${labelIconBorderUnits.Tablet} ${labelIconBorderTablet.right}${labelIconBorderUnits.Tablet} ${labelIconBorderTablet.bottom}${labelIconBorderUnits.Tablet} ${labelIconBorderTablet.left}${labelIconBorderUnits.Tablet}`;
	const labelIconMobileBorderWidth = `${labelIconBorderMobile.top}${labelIconBorderUnits.Mobile} ${labelIconBorderMobile.right}${labelIconBorderUnits.Mobile} ${labelIconBorderMobile.bottom}${labelIconBorderUnits.Mobile} ${labelIconBorderMobile.left}${labelIconBorderUnits.Mobile}`;
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
	const labelIconDesktopBorderRadiusWidth = `${labelIconBorderRadiusDesktop.top}${labelIconBorderRadiusUnits.Desktop} ${labelIconBorderRadiusDesktop.right}${labelIconBorderRadiusUnits.Desktop} ${labelIconBorderRadiusDesktop.bottom}${labelIconBorderRadiusUnits.Desktop} ${labelIconBorderRadiusDesktop.left}${labelIconBorderRadiusUnits.Desktop}`;
	const labelIconTabletBorderRadiusWidth = `${labelIconBorderRadiusTablet.top}${labelIconBorderRadiusUnits.Tablet} ${labelIconBorderRadiusTablet.right}${labelIconBorderRadiusUnits.Tablet} ${labelIconBorderRadiusTablet.bottom}${labelIconBorderRadiusUnits.Tablet} ${labelIconBorderRadiusTablet.left}${labelIconBorderRadiusUnits.Tablet}`;
	const labelIconMobileBorderRadiusWidth = `${labelIconBorderRadiusMobile.top}${labelIconBorderRadiusUnits.Mobile} ${labelIconBorderRadiusMobile.right}${labelIconBorderRadiusUnits.Mobile} ${labelIconBorderRadiusMobile.bottom}${labelIconBorderRadiusUnits.Mobile} ${labelIconBorderRadiusMobile.left}${labelIconBorderRadiusUnits.Mobile}`;
	/** End Label Container Border Radius */

	/* Start Load Google Fonts */
	useEffect(() => {
		loadGoogleFont(FeatureTitleFontFamily);
		loadGoogleFont(FeatureDescFontFamily);
	}, [FeatureTitleFontFamily, FeatureDescFontFamily]);

	/* End Load Google Fonts */

	const allBlockStyle = useMemo(() => {
        let style = `
            .fb-news-ticker-wrapper.${blockID} {
                ${FeatureGlobalNormalBackgroundType === "gradient"
                    ? `background: ${
                        FeatureGlobalNormalCustomGradientSwitcher && FeatureGlobalNormalCustomGradientInputValue
                            ? FeatureGlobalNormalCustomGradientInputValue
                            : FeatureGlobalNormalGradientColor
                    };`
                    : FeatureGlobalNormalBackgroundImageUrl && FeatureGlobalNormalBackgroundImageUrl !== "null"
                    ? `
                        ${FeatureGlobalNormalBackgroundImageUrl ? `background-image: url(${FeatureGlobalNormalBackgroundImageUrl});` : ""}
                        ${FeatureGlobalNormalBackgroundImagePosition ? `background-position: ${FeatureGlobalNormalBackgroundImagePosition};` : ""}
                        ${FeatureGlobalNormalBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalNormalBackgroundImageAttachment};` : ""}
                        ${FeatureGlobalNormalBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalNormalBackgroundImageRepeat};` : ""}
                        ${FeatureGlobalNormalBackgroundImageSize ? `background-size: ${FeatureGlobalNormalBackgroundImageSize};` : ""}
                    `
                    : `${FeatureGlobalNormalClassicColor ? `background: ${FeatureGlobalNormalClassicColor};` : ""}`
                }
                ${globalDesktopPadding && FeatureGlobalPaddingDesktop.top ? `padding: ${globalDesktopPadding};` : ""}
                ${globalDesktopMargin && FeatureGlobalMarginDesktop.top ? `margin: ${globalDesktopMargin};` : ""}
                ${FeatureGlobalBorder ? `border: ${FeatureGlobalBorder};` : ""}
                ${globalDesktopBorderWidth && FeatureGlobalBorderDesktop.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
                ${globalDesktopBorderRadiusWidth && FeatureGlobalBorderRadiusDesktop.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
                ${FeatureGlobalBorderColor ? `border-color: ${FeatureGlobalBorderColor};` : ""}
                ${FeatureGlobalBoxShadowCssValue ? `box-shadow: ${FeatureGlobalBoxShadowCssValue};` : ""}
                ${featuresListPositionType === "default" ? `position: relative;` : ""}
                ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" ? `width: 100%;` : ""}
                ${featuresListPositionType !== "default" ? `position: ${featuresListPositionType};` : ""}
                ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListHZOrientationType === "left" && featuresListHZLeftOffset.Desktop !== undefined ? `left: ${featuresListHZLeftOffset.Desktop}${featuresListHZLeftOffsetUnits.Desktop};` : ""}
                ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListHZOrientationType === "right" && featuresListHZRightOffset.Desktop !== undefined ? `right: ${featuresListHZRightOffset.Desktop}${featuresListHZRightOffsetUnits.Desktop};` : ""}
                ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListVROrientationType === "top" && featuresListVRTopOffset.Desktop !== undefined ? `top: ${featuresListVRTopOffset.Desktop}${featuresListVRTopOffsetUnits.Desktop};` : ""}
                ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListVROrientationType === "bottom" && featuresListVRBottomOffset.Desktop !== undefined ? `bottom: ${featuresListVRBottomOffset.Desktop}${featuresListVRBottomOffsetUnits.Desktop};` : ""}
                ${FeatureGlobalZIndex.Desktop ? `z-index: ${FeatureGlobalZIndex.Desktop};` : ""}
                ${featuresListOverflow !== "default" ? `overflow: ${featuresListOverflow};` : ""}
                transition: all .3s ease-in-out;
            }
    
            .fb-feature-main-wrapper.${blockID}:hover {
                ${FeatureGlobalHoverBackgroundType === "gradient"
                    ? `background: ${
                        FeatureGlobalHoverCustomGradientSwitcher && FeatureGlobalHoverCustomGradientInputValue
                            ? FeatureGlobalHoverCustomGradientInputValue
                            : FeatureGlobalHoverGradientColor
                    };`
                    : FeatureGlobalHoverBackgroundImageUrl && FeatureGlobalHoverBackgroundImageUrl !== "null"
                    ? `
                        ${FeatureGlobalHoverBackgroundImageUrl ? `background-image: url(${FeatureGlobalHoverBackgroundImageUrl});` : ""}
                        ${FeatureGlobalHoverBackgroundImagePosition ? `background-position: ${FeatureGlobalHoverBackgroundImagePosition};` : ""}
                        ${FeatureGlobalHoverBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalHoverBackgroundImageAttachment};` : ""}
                        ${FeatureGlobalHoverBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalHoverBackgroundImageRepeat};` : ""}
                        ${FeatureGlobalHoverBackgroundImageSize ? `background-size: ${FeatureGlobalHoverBackgroundImageSize};` : ""}
                    `
                    : `${FeatureGlobalHoverClassicColor ? `background: ${FeatureGlobalHoverClassicColor};` : ""}`
                }
                ${FeatureGlobalBorderHoverColor ? `border-color: ${FeatureGlobalBorderHoverColor};` : ""}
                ${FeatureGlobalBoxShadowHoverCssValue ? `box-shadow: ${FeatureGlobalBoxShadowHoverCssValue};` : ""}
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
                ${labelContainerDesktopPadding && labelContainerPaddingDesktop.top ? `padding: ${labelContainerDesktopPadding};` : ""}
                ${labelContainerDesktopMargin && labelContainerMarginDesktop.top ? `margin: ${labelContainerDesktopMargin};` : ""}
                ${labelContainerBorder ? `border: ${labelContainerBorder};` : ""}
                ${labelContainerDesktopBorderWidth && labelContainerBorderDesktop.top ? `border-width: ${labelContainerDesktopBorderWidth};` : ""}
                ${labelContainerDesktopBorderRadiusWidth && labelContainerBorderRadiusDesktop.top ? `border-radius: ${labelContainerDesktopBorderRadiusWidth};` : ""}
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
                ${labelIconDesktopPadding && labelIconPaddingDesktop.top ? `padding: ${labelIconDesktopPadding};` : ""}
                ${labelIconDesktopMargin && labelIconMarginDesktop.top ? `margin: ${labelIconDesktopMargin};` : ""}
                ${labelIconBorder ? `border: ${labelIconBorder};` : ""}
                ${labelIconDesktopBorderWidth && labelIconBorderDesktop.top ? `border-width:
                ${labelIconDesktopBorderWidth};` : ""}
                ${labelIconDesktopBorderRadiusWidth && labelIconBorderRadiusDesktop.top ? `border-radius:
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
                ${tickerLabelTypoSwitcher.fontFamily === true && tickerLabelTypographyData.fontFamily ? `font-family: ${tickerLabelTypographyData.fontFamily};` : ''}
				${tickerLabelTypoSwitcher.fontSize === true && tickerLabelTypographyData.fontSize ? `font-size: ${tickerLabelTypographyData.fontSize};` : ''}
				${tickerLabelTypoSwitcher.fontWeight === true && tickerLabelTypographyData.fontWeight ? `font-weight: ${tickerLabelTypographyData.fontWeight};` : ''}
				${tickerLabelTypoSwitcher.fontStyle === true && tickerLabelTypographyData.fontStyle ? `font-style: ${tickerLabelTypographyData.fontStyle};` : ''}
				${tickerLabelTypoSwitcher.textTransform === true && tickerLabelTypographyData.textTransform ? `text-transform: ${tickerLabelTypographyData.textTransform};` : ''}
				${tickerLabelTypoSwitcher.textDecoration === true && tickerLabelTypographyData.textDecoration ? `text-decoration: ${tickerLabelTypographyData.textDecoration};` : ''}
				${tickerLabelTypoSwitcher.letterSpacing === true && tickerLabelTypographyData.letterSpacing ? `letter-spacing: ${tickerLabelTypographyData.letterSpacing};` : ''}
				${tickerLabelTypoSwitcher.lineHeight === true && tickerLabelTypographyData.lineHeight ? `line-height: ${tickerLabelTypographyData.lineHeight};` : ''}

                ${tickerLabelTypoSwitcher.fontFamily === false && tickerLabelFontFamily && tickerLabelFontFamily !== "Default" ? `font-family: ${tickerLabelFontFamily};` : ''}
                ${tickerLabelTypoSwitcher.fontSize === false && tickerLabelFontSize.Desktop && tickerLabelFontSizeUnits.Desktop ? `font-size: ${tickerLabelFontSize.Desktop}${tickerLabelFontSizeUnits.Desktop};` : ''}
                ${tickerLabelTypoSwitcher.fontWeight === false && tickerLabelFontWeight ? `font-weight: ${tickerLabelFontWeight};` : ''}
                ${tickerLabelTypoSwitcher.fontStyle === false && tickerLabelFontStyle ? `font-style: ${tickerLabelFontStyle};` : ''}
                ${tickerLabelTypoSwitcher.textTransform === false && tickerLabelTextTransform ? `text-transform: ${tickerLabelTextTransform};` : ''}
                ${tickerLabelTypoSwitcher.textDecoration === false && tickerLabelTextDecoration ? `text-decoration: ${tickerLabelTextDecoration};` : ''}
                ${tickerLabelTypoSwitcher.letterSpacing === false && tickerLabelLetterSpacing.Desktop && tickerLabelLetterSpacingUnits.Desktop ? `letter-spacing: ${tickerLabelLetterSpacing.Desktop}${tickerLabelLetterSpacingUnits.Desktop};` : ''}
                ${tickerLabelTypoSwitcher.lineHeight === false && tickerLabelLineHeight.Desktop && tickerLabelLineHeightUnits.Desktop ? `line-height: ${tickerLabelLineHeight.Desktop}${tickerLabelLineHeightUnits.Desktop};` : ''}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                ${iconSize.Desktop ? `width: ${iconSize.Desktop}${iconSizeUnits.Desktop};` : ""}
                ${iconSize.Desktop ? `height: ${iconSize.Desktop}${iconSizeUnits.Desktop};` : ""}
                ${labelIconColor ? `fill: ${labelIconColor};` : ""}
            }
    
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper:hover svg{
                ${labelIconHoverColor ? `fill: ${labelIconHoverColor};` : ""}
            }
            @media only screen and (max-width: 1024px) {
                .fb-feature-main-wrapper.${blockID} {
                    ${featuresListPositionType !== "default" ? `position: ${featuresListPositionType};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListHZOrientationType === "left" && featuresListHZLeftOffset.Tablet !== undefined ? `left: ${featuresListHZLeftOffset.Tablet}${featuresListHZLeftOffsetUnits.Tablet};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListHZOrientationType === "right" && featuresListHZRightOffset.Tablet !== undefined ? `right: ${featuresListHZRightOffset.Tablet}${featuresListHZRightOffsetUnits.Tablet};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListVROrientationType === "top" && featuresListVRTopOffset.Tablet !== undefined ? `top: ${featuresListVRTopOffset.Tablet}${featuresListVRTopOffsetUnits.Tablet};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListVROrientationType === "bottom" && featuresListVRBottomOffset.Tablet !== undefined ? `bottom: ${featuresListVRBottomOffset.Tablet}${featuresListVRBottomOffsetUnits.Tablet};` : ""}
                    ${FeatureGlobalZIndex.Tablet ? `z-index: ${FeatureGlobalZIndex.Tablet};` : ""}
                    ${globalTabletPadding && FeatureGlobalPaddingTablet.top ? `padding: ${globalTabletPadding};` : ""}
                    ${globalTabletMargin && FeatureGlobalMarginTablet.top ? `margin: ${globalTabletMargin};` : ""}
                    ${globalTabletBorderWidth && FeatureGlobalBorderTablet.top ? `border-width: ${globalTabletBorderWidth};` : ""}
                    ${globalTabletBorderRadiusWidth && FeatureGlobalBorderRadiusTablet.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
                    ${labelIconTabletPadding && labelIconPaddingTablet.top ? `padding: ${labelIconTabletPadding};` : ""}
                    ${labelIconTabletMargin && labelIconMarginTablet.top ? `margin: ${labelIconTabletMargin};` : ""}
                    ${labelIconTabletBorderWidth && labelIconBorderTablet.top ? `border-width:
                    ${labelIconTabletBorderWidth};` : ""}
                    ${labelIconTabletBorderRadiusWidth && labelIconBorderRadiusTablet.top ? `border-radius:
                    ${labelIconTabletBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
                    ${labelContainerTabletPadding && labelContainerPaddingTablet.top ? `padding: ${labelContainerTabletPadding};` : ""}
                    ${labelContainerTabletMargin && labelContainerMarginTablet.top ? `margin: ${labelContainerTabletMargin};` : ""}
                    ${labelContainerTabletBorderWidth && labelContainerBorderTablet.top ? `border-width: ${labelContainerTabletBorderWidth};` : ""}
                    ${labelContainerTabletBorderRadiusWidth && labelContainerBorderRadiusTablet.top ? `border-radius: ${labelContainerTabletBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                    ${iconSize.Tablet ? `width: ${iconSize.Tablet}${iconSizeUnits.Tablet};` : ""}
                    ${iconSize.Tablet ? `height: ${iconSize.Tablet}${iconSizeUnits.Tablet};` : ""}
                }
            }
    
            @media only screen and (max-width: 767px) {
                .fb-feature-main-wrapper.${blockID} {
                    ${featuresListPositionType !== "default" ? `position: ${featuresListPositionType};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListHZOrientationType === "left" && featuresListHZLeftOffset.Mobile !== undefined ? `left: ${featuresListHZLeftOffset.Mobile}${featuresListHZLeftOffsetUnits.Mobile};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListHZOrientationType === "right" && featuresListHZRightOffset.Mobile !== undefined ? `right: ${featuresListHZRightOffset.Mobile}${featuresListHZRightOffsetUnits.Mobile};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListVROrientationType === "top" && featuresListVRTopOffset.Mobile !== undefined ? `top: ${featuresListVRTopOffset.Mobile}${featuresListVRTopOffsetUnits.Mobile};` : ""}
                    ${featuresListPositionType !== "default" && featuresListPositionType !== "relative" && featuresListVROrientationType === "bottom" && featuresListVRBottomOffset.Mobile !== undefined ? `bottom: ${featuresListVRBottomOffset.Mobile}${featuresListVRBottomOffsetUnits.Mobile};` : ""}
                    ${FeatureGlobalZIndex.Mobile ? `z-index: ${FeatureGlobalZIndex.Mobile};` : ""}
                    ${globalMobilePadding && FeatureGlobalPaddingMobile.top ? `padding: ${globalMobilePadding};` : ""}
                    ${globalMobileMargin && FeatureGlobalMarginMobile.top ? `margin: ${globalMobileMargin};` : ""}
                    ${globalMobileBorderWidth && FeatureGlobalBorderMobile.top ? `border-width: ${globalMobileBorderWidth};` : ""}
                    ${globalMobileBorderRadiusWidth && FeatureGlobalBorderRadiusMobile.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
                    ${labelContainerMobilePadding && labelContainerPaddingMobile.top ? `padding: ${labelContainerMobilePadding};` : ""}
                    ${labelContainerMobileMargin && labelContainerMarginMobile.top ? `margin: ${labelContainerMobileMargin};` : ""}
                    ${labelContainerMobileBorderWidth && labelContainerBorderMobile.top ? `border-width: ${labelContainerMobileBorderWidth};` : ""}
                    ${labelContainerMobileBorderRadiusWidth && labelContainerBorderRadiusMobile.top ? `border-radius: ${labelContainerMobileBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
                    ${labelIconMobilePadding && labelIconPaddingMobile.top ? `padding: ${labelIconMobilePadding};` : ""}
                    ${labelIconMobileMargin && labelIconMarginMobile.top ? `margin: ${labelIconMobileMargin};` : ""}
                    ${labelIconMobileBorderWidth && labelIconBorderMobile.top ? `border-width:
                    ${labelIconMobileBorderWidth};` : ""}
                    ${labelIconMobileBorderRadiusWidth && labelIconBorderRadiusMobile.top ? `border-radius:
                    ${labelIconMobileBorderRadiusWidth};` : ""}
                }
                .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                    ${iconSize.Mobile ? `width: ${iconSize.Mobile}${iconSizeUnits.Mobile};` : ""}
                    ${iconSize.Mobile ? `height: ${iconSize.Mobile}${iconSizeUnits.Mobile};` : ""}
                }
            }
        `;
        return style;
    }, [attributes]);
    

	const customCss = getCustomCss(
		featuresListGlobalWraperCustomCSS,
		`.${blockID}`,
	);

	useEffect(() => {
		setAttributes({
			blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [allBlockStyle, customCss]);

	const editorStyle = `${allBlockStyle} ${customCss}`
		.replace(/\s+/g, " ")
		.trim();

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
		<>
			<PanelBody title={__("Label", "frontis-blocks")} initialOpen={true}>
				<SelectControl
					label={__("Content Type", "frontis-block")}
					value={contentType}
					options={CONTENT_TYPE}
					onChange={(value) => setAttributes({ contentType: value })}
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
											setAttributes({ FeatureIconAlignment: item.value })
										}
										className={`fb-setting-text-alignment-single-btn ${
											FeatureIconAlignment === item.value ? "active" : ""
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
				title={__("Icon", "frontis-blocks")}
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
							rangeValue={FeatureGlobalZIndex}
							onChangeHandler={(value) =>
								setAttributes({
									FeatureGlobalZIndex: value === 0 ? undefined : value,
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
							value={featuresListOverflow}
							options={OVERFLOW_OP}
							onChange={(value) =>
								setAttributes({ featuresListOverflow: value })
							}
						/>

						<FB_PositionControl
							deviceType={deviceType}
							positionType={featuresListPositionType}
							setPositionType={(value) =>
								setAttributes({ featuresListPositionType: value })
							}
							HZOrientationType={featuresListHZOrientationType}
							setHZOrientationType={(value) =>
								setAttributes({ featuresListHZOrientationType: value })
							}
							VROrientationType={featuresListVROrientationType}
							setVROrientationType={(value) =>
								setAttributes({ featuresListVROrientationType: value })
							}
							HZLeftOffset={featuresListHZLeftOffset}
							setHZLeftOffset={(value) =>
								setAttributes({ featuresListHZLeftOffset: value })
							}
							HZLeftOffsetUnits={featuresListHZLeftOffsetUnits}
							setHZLeftOffsetUnits={(value) =>
								setAttributes({ featuresListHZLeftOffsetUnits: value })
							}
							HZRightOffset={featuresListHZRightOffset}
							setHZRightOffset={(value) =>
								setAttributes({ featuresListHZRightOffset: value })
							}
							HZRightOffsetUnits={featuresListHZRightOffsetUnits}
							setHZRightOffsetUnits={(value) =>
								setAttributes({ featuresListHZRightOffsetUnits: value })
							}
							VRTopOffset={featuresListVRTopOffset}
							setVRTopOffset={(value) =>
								setAttributes({ featuresListVRTopOffset: value })
							}
							VRTopOffsetUnits={featuresListVRTopOffsetUnits}
							setVRTopOffsetUnits={(value) =>
								setAttributes({ featuresListVRTopOffsetUnits: value })
							}
							VRBottomOffset={featuresListVRBottomOffset}
							setVRBottomOffset={(value) =>
								setAttributes({ featuresListVRBottomOffset: value })
							}
							VRBottomOffsetUnits={featuresListVRBottomOffsetUnits}
							setVRBottomOffsetUnits={(value) =>
								setAttributes({ featuresListVRBottomOffsetUnits: value })
							}
							setAttributes={setAttributes}
						/>

						<FB_InputControl
							label={__("CSS ID", "frontis-blocks")}
							value={featuresListGlobalWraperID}
							onChangeValue={(value) =>
								setAttributes({ featuresListGlobalWraperID: value })
							}
							helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
						/>

						<FB_InputControl
							label={__("CSS Class", "frontis-blocks")}
							value={featuresListGlobalWraperClass}
							onChangeValue={(value) =>
								setAttributes({ featuresListGlobalWraperClass: value })
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
							spacingUnits={FeatureGlobalPaddingUnits}
							spacingDesktop={FeatureGlobalPaddingDesktop}
							spacingTablet={FeatureGlobalPaddingTablet}
							spacingMobile={FeatureGlobalPaddingMobile}
							handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
							spacingCombineBtn={FeatureGlobalPaddingLink}
							spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
							setAttributes={setAttributes}
						/>
						<FB_Spacing
							label={__("Margin", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalMarginUnitsHandler}
							spacingUnits={FeatureGlobalMarginUnits}
							spacingDesktop={FeatureGlobalMarginDesktop}
							spacingTablet={FeatureGlobalMarginTablet}
							spacingMobile={FeatureGlobalMarginMobile}
							handleSpacingUnitHandler={handleGlobalMarginUnitChange}
							spacingCombineBtn={FeatureGlobalMarginLink}
							spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
							setAttributes={setAttributes}
						/>
					</PanelBody>

					<PanelBody
						title={__("Background Color", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_BackgroundColorControl
							bgColorSwitcher={FeatureGlobalBgColorSwitcher}
							setBgColorSwitcher={(value) =>
								setAttributes({ FeatureGlobalBgColorSwitcher: value })
							}
							normalBackgroundType={FeatureGlobalNormalBackgroundType}
							setNormalBackgroundType={(value) =>
								setAttributes({ FeatureGlobalNormalBackgroundType: value })
							}
							normalClassicColor={FeatureGlobalNormalClassicColor}
							setNormalClassicColor={(value) =>
								setAttributes({
									FeatureGlobalNormalClassicColor:
										value === undefined ? "" : value,
								})
							}
							normalGradientColor={FeatureGlobalNormalGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({
									FeatureGlobalNormalGradientColor:
										value === undefined ? null : value,
								})
							}
							normalCustomGradientSwitcher={
								FeatureGlobalNormalCustomGradientSwitcher
							}
							setNormalCustomGradientSwitcher={(value) =>
								setAttributes({
									FeatureGlobalNormalCustomGradientSwitcher: value,
								})
							}
							normalCustomGradientInputValue={
								FeatureGlobalNormalCustomGradientInputValue
							}
							setNormalCustomGradientInputValue={(value) =>
								setAttributes({
									FeatureGlobalNormalCustomGradientInputValue: value,
								})
							}
							normalBackgroundImageUrl={FeatureGlobalNormalBackgroundImageUrl}
							setNormalBackgroundImageUrl={(value) =>
								setAttributes({ FeatureGlobalNormalBackgroundImageUrl: value })
							}
							normalBackgroundImageAlt={FeatureGlobalNormalBackgroundImageAlt}
							setNormalBackgroundImageAlt={(value) =>
								setAttributes({ FeatureGlobalNormalBackgroundImageAlt: value })
							}
							normalBackgroundImageID={FeatureGlobalNormalBackgroundImageID}
							setNormalBackgroundImageID={(value) =>
								setAttributes({ FeatureGlobalNormalBackgroundImageID: value })
							}
							normalBackgroundImagePosition={
								FeatureGlobalNormalBackgroundImagePosition
							}
							setNormalBackgroundImagePosition={(value) =>
								setAttributes({
									FeatureGlobalNormalBackgroundImagePosition: value,
								})
							}
							normalBackgroundImageAttachment={
								FeatureGlobalNormalBackgroundImageAttachment
							}
							setNormalBackgroundImageAttachment={(value) =>
								setAttributes({
									FeatureGlobalNormalBackgroundImageAttachment: value,
								})
							}
							normalBackgroundImageRepeat={
								FeatureGlobalNormalBackgroundImageRepeat
							}
							setNormalBackgroundImageRepeat={(value) =>
								setAttributes({
									FeatureGlobalNormalBackgroundImageRepeat: value,
								})
							}
							normalBackgroundImageSize={FeatureGlobalNormalBackgroundImageSize}
							setNormalBackgroundImageSize={(value) =>
								setAttributes({ FeatureGlobalNormalBackgroundImageSize: value })
							}
							hoverBackgroundType={FeatureGlobalHoverBackgroundType}
							setHoverBackgroundType={(value) =>
								setAttributes({ FeatureGlobalHoverBackgroundType: value })
							}
							hoverClassicColor={FeatureGlobalHoverClassicColor}
							setHoverClassicColor={(value) =>
								setAttributes({
									FeatureGlobalHoverClassicColor:
										value === undefined ? "" : value,
								})
							}
							hoverGradientColor={FeatureGlobalHoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({
									FeatureGlobalHoverGradientColor:
										value === undefined ? null : value,
								})
							}
							hoverCustomGradientSwitcher={
								FeatureGlobalHoverCustomGradientSwitcher
							}
							setHoverCustomGradientSwitcher={(value) =>
								setAttributes({
									FeatureGlobalHoverCustomGradientSwitcher: value,
								})
							}
							hoverCustomGradientInputValue={
								FeatureGlobalHoverCustomGradientInputValue
							}
							setHoverCustomGradientInputValue={(value) =>
								setAttributes({
									FeatureGlobalHoverCustomGradientInputValue: value,
								})
							}
							hoverBackgroundImageUrl={FeatureGlobalHoverBackgroundImageUrl}
							setHoverBackgroundImageUrl={(value) =>
								setAttributes({ FeatureGlobalHoverBackgroundImageUrl: value })
							}
							hoverBackgroundImageAlt={FeatureGlobalHoverBackgroundImageAlt}
							setHoverBackgroundImageAlt={(value) =>
								setAttributes({ FeatureGlobalHoverBackgroundImageAlt: value })
							}
							hoverBackgroundImageID={FeatureGlobalHoverBackgroundImageID}
							setHoverBackgroundImageID={(value) =>
								setAttributes({ FeatureGlobalHoverBackgroundImageID: value })
							}
							hoverBackgroundImagePosition={
								FeatureGlobalHoverBackgroundImagePosition
							}
							setHoverBackgroundImagePosition={(value) =>
								setAttributes({
									FeatureGlobalHoverBackgroundImagePosition: value,
								})
							}
							hoverBackgroundImageAttachment={
								FeatureGlobalHoverBackgroundImageAttachment
							}
							setHoverBackgroundImageAttachment={(value) =>
								setAttributes({
									FeatureGlobalHoverBackgroundImageAttachment: value,
								})
							}
							hoverBackgroundImageRepeat={
								FeatureGlobalHoverBackgroundImageRepeat
							}
							setHoverBackgroundImageRepeat={(value) =>
								setAttributes({
									FeatureGlobalHoverBackgroundImageRepeat: value,
								})
							}
							hoverBackgroundImageSize={FeatureGlobalHoverBackgroundImageSize}
							setHoverBackgroundImageSize={(value) =>
								setAttributes({ FeatureGlobalHoverBackgroundImageSize: value })
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Border and Shadow", "frontis-blocks")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Border Style", "frontis-blocks")}
							value={FeatureGlobalBorder}
							options={BORDER_STYLES}
							onChange={(value) =>
								setAttributes({ FeatureGlobalBorder: value })
							}
						/>

						<FB_SwitcherControl
							label={__("Border Color", "frontis-blocks")}
							globalSwitcher={FeatureGlobalBorderColorSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ FeatureGlobalBorderColorSwitcher: value })
							}
						/>

						{FeatureGlobalBorderColorSwitcher === "normal" && (
							<FB_ColorControl
								label={__("Color", "frontis-blocks")}
								globalColor={FeatureGlobalBorderColor}
								setGlobalColor={(value) =>
									setAttributes({
										FeatureGlobalBorderColor: value === undefined ? "" : value,
									})
								}
							/>
						)}

						{FeatureGlobalBorderColorSwitcher === "hover" && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={FeatureGlobalBorderHoverColor}
								setGlobalColor={(value) =>
									setAttributes({
										FeatureGlobalBorderHoverColor:
											value === undefined ? "" : value,
									})
								}
							/>
						)}

						<FB_Spacing
							label={__("Border", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderUnitsHandler}
							spacingUnits={FeatureGlobalBorderUnits}
							spacingDesktop={FeatureGlobalBorderDesktop}
							spacingTablet={FeatureGlobalBorderTablet}
							spacingMobile={FeatureGlobalBorderMobile}
							handleSpacingUnitHandler={handleGlobalBorderUnitChange}
							spacingCombineBtn={FeatureGlobalBorderLink}
							spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_Spacing
							label={__("Border Radius", "frontis-blocks")}
							deviceType={deviceType}
							spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
							spacingUnits={FeatureGlobalBorderRadiusUnits}
							spacingDesktop={FeatureGlobalBorderRadiusDesktop}
							spacingTablet={FeatureGlobalBorderRadiusTablet}
							spacingMobile={FeatureGlobalBorderRadiusMobile}
							handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
							spacingCombineBtn={FeatureGlobalBorderRadiusLink}
							spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
							setAttributes={setAttributes}
						/>

						<FB_SwitcherControl
							label={__("Box Shadow", "frontis-blocks")}
							globalSwitcher={FeatureGlobalBoxShadowSwitcher}
							setGlobalSwitcher={(value) =>
								setAttributes({ FeatureGlobalBoxShadowSwitcher: value })
							}
						/>

						{FeatureGlobalBoxShadowSwitcher === "normal" && (
							<FB_BoxShadowControl
								label={__("Normal Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ FeatureGlobalBoxShadowValues: value })
								}
								initialShadowValue={FeatureGlobalBoxShadowValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ FeatureGlobalBoxShadowCssValue: value })
								}
							/>
						)}

						{FeatureGlobalBoxShadowSwitcher === "hover" && (
							<FB_BoxShadowControl
								label={__("Hover Shadow", "frontis-blocks")}
								onBoxShadowChange={(value) =>
									setAttributes({ FeatureGlobalBoxShadowHoverValues: value })
								}
								initialShadowValue={FeatureGlobalBoxShadowHoverValues}
								onBoxShadowStyleChange={(value) =>
									setAttributes({ FeatureGlobalBoxShadowHoverCssValue: value })
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
							desktopValue={featuresListDesktopSwitcher}
							setDesktopValue={(value) =>
								setAttributes({ featuresListDesktopSwitcher: value })
							}
							tabletValue={featuresListTabletSwitcher}
							setTabletValue={(value) =>
								setAttributes({ featuresListTabletSwitcher: value })
							}
							mobileValue={featuresListMobileSwitcher}
							setMobileValue={(value) =>
								setAttributes({ featuresListMobileSwitcher: value })
							}
						/>
					</PanelBody>
					<PanelBody
						title={__("Custom CSS", "frontis-blocks")}
						initialOpen={false}
					>
						<FB_CustomCSSEditor
							value={featuresListGlobalWraperCustomCSS}
							onChangeValue={(value) =>
								setAttributes({ featuresListGlobalWraperCustomCSS: value })
							}
						/>
					</PanelBody>
				</div>
			</div>
		</>
	);

	return (
		<>
			<style>{editorStyle}</style>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
