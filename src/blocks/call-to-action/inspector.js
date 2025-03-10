import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';

import {
	SelectControl,
	PanelBody,
	TabPanel,
	BaseControl,
	Button,
	ToggleControl,
	TextareaControl,
	__experimentalHStack as HStack,
	__experimentalHeading as Heading,
} from "@wordpress/components";
/**
 * Internal depencencies
 */
import {
	BORDER_STYLES,
	ICON_POSITION,
	OVERFLOW_OP,
	PRESETS
} from "./constants/constants";
import { useEffect, useMemo, useState } from "@wordpress/element";
import "./editor.scss";
import FBIconPicker from "../../components/icon-picker";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_Spacing from "@Components/spacing";
import FB_Range from '@Components/range';
import FB_TypographyControl from "@Components/typography-control";
import FB_BackgroundColorControl from "@Components/background-color-control";
import FB_UrlControl from "@Components/url-control";
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';


export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		blockStyle,
		ctaPresetStyle,
		FeatureItems,
		Heading_Text,
		headingTag,
		subTitleAlignment,
		subTitleText,
		subTitleTag,
		Heading_Background_Color,
		Alignment,
		subHeadingSwitcher,
		descriptionSwitcher,
		Sub_Heading_Text,
		headingGlobalTypoSwitcher,
		headingGlobalTypographyData,
		headingGlobalTypoType,
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
		headingColorSwitcher,
		headingColor,
		headingHoverColor,
		Heading_Border,
		headingBorderColor,
		headingBorderHoverColor,
		headingBorderColorSwitcher,
		headingPaddingUnits,
		headingDesktopPadding,
		headingTabPadding,
		headingMobilePadding,
		// deviceType,
		headingPaddingLink,
		headingMarginUnits,
		headingDesktopMargin,
		headingTabMargin,
		headingMobileMargin,
		headingMarginLink,
		headingBorderUnits,
		headingDesktopBorder,
		headingTabBorder,
		headingMobileBorder,
		headingBorderLink,
		headingBorderRadiusUnits,
		headingDesktopBorderRadius,
		headingTabBorderRadius,
		headingMobileBorderRadius,
		headingBorderRadiusLink,

		ctaBtnOneSwitcher,
		info_Button_Text,
		info_Button_Link,
		descAlignment,
		buttonAlignment,

		descPaddingUnits,
		descDesktopPadding,
		descTabPadding,
		descMobilePadding,
		descPaddingLink,
		descMarginUnits,
		descDesktopMargin,
		descTabMargin,
		descMobileMargin,
		descMarginLink,
		SubHeadingGlobalTypoSwitcher,
		SubHeadingGlobalTypographyData,
		SubHeadingGlobalTypoType,
		SubHeadingTextDecoration,
		SubHeadingTextTransform,
		SubHeadingFontStyle,
		SubHeadingFontWeight,
		SubHeadingFontSizeUnits,
		SubHeadingFontSize,
		SubHeadingFontFamily,
		SubHeadingLetterSpacing,
		SubHeadingLetterSpacingUnits,
		SubHeadingLineHeight,
		SubHeadingLineHeightUnits,
		SubHeadingColor,
		SubHeadingColorSwitcher,
		SubHeadingHoverColor,
		infoBoxTabPadding,
		infoBoxMobilePadding,
		infoBoxTabBorderWidth,
		infoBoxMobileBorderWidth,
		infoBoxTabBorderRadiusWidth,
		infoBoxMobileBorderRadiusWidth,

		buttonGlobalTypoSwitcher,
		buttonGlobalTypographyData,
		buttonGlobalTypoType,
		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,
		buttonColorSwitcher,
		buttonTextColor,
		buttonTextHoverColor,
		buttonBgColorSwitcher,
		buttonBgColor,
		buttonBgHoverColor,

		btnOnePaddingUnits,
		btnOneDesktopPadding,
		btnOneTabPadding,
		btnOneMobilePadding,
		btnOnePaddingLink,
		btnOneMarginUnits,
		btnOneDesktopMargin,
		btnOneTabMargin,
		btnOneMobileMargin,
		btnOneMarginLink,
		icon,
		btnIcon,
		btnIconRotate,
		width,
		mediaSwitcher,
		contentAlignment,

		infoButtonBorder,
		infoBoxMarginUnits,
		infoBoxDesktopMargin,
		infoBoxTabMargin,
		infoBoxMobileMargin,
		infoBoxMarginLink,
		infoButtonBorderUnits,
		infoButtonDesktopBorderWidth,
		infoButtonTabBorderWidth,
		infoButtonMobileBorderWidth,
		infoBtnBorderradiusUnits,
		infoBtnDesktopBorderradiusWidth,
		infoBtnTabBorderradiusWidth,
		infoBtnMobileBorderradiusWidth,
		infoButtonBorderColorSwitcher,
		infoButtonBorderColor,
		infoButtonHoverBorderColor,
		boxBgColor,
		boxBgColorSwitcher,
		boxBgHoverColor,
		mediaSize,
		mediaSizeUnits,
		
		btnOneBorderUnits,
		btnOneDesktopBorder,
		btnOneTabBorder,
		btnOneMobileBorder,
		btnOneBorderLink,
		btnOneBorderRadiusUnits,
		btnOneDesktopBorderRadius,
		btnOneTabBorderRadius,
		btnOneMobileBorderRadius,
		btnOneBorderRadiusLink,
		btnIconSize,
		btnIconSizeUnits,
		buttonIconSwitcher,
		btnIconColor,
		btnIconHoverColor,
		btnIconColorSwitcher,
		btnIconPosition,
		boxGlobalBoxShadowValues,
		boxGlobalBoxShadowCssValue,
		btnTwoText,
		btnTwoSwitcher,
		buttonTwoIconSwitcher,
		btnTwoLink,
		btnTwoPaddingUnits,
		btnTwoDesktopPadding,
		btnTwoTabPadding,
		btnTwoMobilePadding,
		btnTwoPaddingLink,
		btnTwoMarginUnits,
		btnTwoDesktopMargin,
		btnTwoTabMargin,
		btnTwoMobileMargin,
		btnTwoMarginLink,
		btnTwoBorderColorSwitcher,
		btnTwoBorder,
		btnTwoBorderColor,
		btnTwoHoverBorderColor,
		btnTwoBorderUnits,
		btnTwoDesktopBorder,
		btnTwoTabBorder,
		btnTwoMobileBorder,
		btnTwoBorderRadiusUnits,
		btnTwoDesktopBorderRadius,
		btnTwoTabBorderRadius,
		btnTwoMobileBorderRadius,
		btnTwoIcon,
		btnTwoIconSize,
		btnTwoIconSizeUnits,
		btnTwoIconColorSwitcher,
		btnTwoIconColor,
		btnTwoIconHoverColor,
		btnTwoIconPosition,
		buttonTwoGlobalTypoSwitcher,
		buttonTwoGlobalTypographyData,
		buttonTwoGlobalTypoType,
		buttonTwoFontFamily,
		buttonTwoFontSize,
		buttonTwoFontSizeUnits,
		buttonTwoFontWeight,
		buttonTwoFontStyle,
		buttonTwoTextTransform,
		buttonTwoTextDecoration,
		buttonTwoLetterSpacing,
		buttonTwoLetterSpacingUnits,
		buttonTwoLineHeight,
		buttonTwoLineHeightUnits,
		buttonTwoColorSwitcher,
		buttonTwoTextColor,
		buttonTwoTextHoverColor,
		buttonTwoBgColorSwitcher,
		buttonTwoBgColor,
		buttonTwoBgHoverColor,
		btnTwoBorderLink,
		btnTwoIconRotate,
		btnTwoBorderradiusUnits,
		btnTwoDesktopBorderradiusWidth,
		btnTwoTabBorderradiusWidth,
		btnTwoMobileBorderradiusWidth,
		btnTwoBorderRadiusLink,
		testBgColorSwitcher,
		ctaGlobalBackgroundType,
		ctaGlobalClassicColor,
		ctaGlobalGradientColor,
		ctaGlobalCustomGradientSwitcher,
		ctaGlobalCustomGradientInputValue,
		testBackgroundColorStyle,
		ctaGlobalBackgroundImageUrl,
		testBackgroundImageAlt,
		testBackgroundImageID,
		ctaGlobalBackgroundImagePosition,
		ctaGlobalBackgroundImageAttachment,
		ctaGlobalBackgroundImageSize,
		ctaGlobalBackgroundImageRepeat,
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
		btnOneTargetUrl,
		btnTwoTargetUrl,
		globalBoxShadowSwitcher,
		globalBoxShadowValues,
		globalBoxShadowHoverValues,
		globalBoxShadowCssValue,
		globalHoverBoxShadowCssValue,
		globalZIndex,
		ctaOverflow,
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

		globalBgColorSwitcher,
		globalBgColor,
		globalBgHoverColor,

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
		imageSwitcher,

		ctaDesktopSwitcher,
		ctaTabletSwitcher,
		ctaMobileSwitcher,

		ctaCustomCSS,
		ctaGlobalWraperID,
		ctaGlobalWraperClass,

		// Position
		ctaPositionType,
		ctaHZOrientationType,
		ctaVROrientationType,
		ctaHZLeftOffset,
		ctaHZLeftOffsetUnits,
		ctaHZRightOffset,
		ctaHZRightOffsetUnits,
		ctaVRTopOffset,
		ctaVRTopOffsetUnits,
		ctaVRBottomOffset,
		ctaVRBottomOffsetUnits,
	} = attributes;

	const deviceType = useDeviceType();
	
	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "fb-cta-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();

	const buttonIconHandler = (iconName) => {
		setAttributes({ btnIcon: iconName });
	};
	const buttonTwoIconHandler = (iconName) => {
		setAttributes({ btnTwoIcon: iconName });
	};
	
	

	/** Start Heading padding */
	const handleHeadingPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (headingPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobilePadding: {
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
						headingDesktopPadding: { ...headingDesktopPadding, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabPadding: { ...headingTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobilePadding: { ...headingMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingPaddingCombineBtn = () => {
		setAttributes({ headingPaddingLink: !headingPaddingLink });
	};

	const handleHeadingPaddingUnitsHandler = (unit) => {
		setAttributes({
			headingPaddingUnits: {
				...headingPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for desktop **/
	const headingDesktopPaddingWidth = `${headingDesktopPadding.top}${headingPaddingUnits.Desktop} ${headingDesktopPadding.right}${headingPaddingUnits.Desktop} ${headingDesktopPadding.bottom}${headingPaddingUnits.Desktop} ${headingDesktopPadding.left}${headingPaddingUnits.Desktop}`;
	const headingTabletPaddingWidth = `${headingTabPadding.top}${headingPaddingUnits.Tablet} ${headingTabPadding.right}${headingPaddingUnits.Tablet} ${headingTabPadding.bottom}${headingPaddingUnits.Tablet} ${headingTabPadding.left}${headingPaddingUnits.Tablet}`;
	const headingMobilePaddingWidth = `${headingMobilePadding.top}${headingPaddingUnits.Mobile} ${headingMobilePadding.right}${headingPaddingUnits.Mobile} ${headingMobilePadding.bottom}${headingPaddingUnits.Mobile} ${headingMobilePadding.left}${headingPaddingUnits.Mobile}`;
	/** End Padding */

	/** Start Heading margin */
	const handleHeadingMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (headingMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobileMargin: {
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
						headingDesktopMargin: { ...headingDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabMargin: { ...headingTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobileMargin: { ...headingMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingMarginCombineBtn = () => {
		setAttributes({ headingMarginLink: !headingMarginLink });
	};

	const handleHeadingMarginUnitsHandler = (unit) => {
		setAttributes({
			headingMarginUnits: {
				...headingMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default margin for desktop **/
	const headingDesktopMarginWidth = `${headingDesktopMargin.top}${headingMarginUnits.Desktop} ${headingDesktopMargin.right}${headingMarginUnits.Desktop} ${headingDesktopMargin.bottom}${headingMarginUnits.Desktop} ${headingDesktopMargin.left}${headingMarginUnits.Desktop}`;
	const headingTabletMarginWidth = `${headingTabMargin.top}${headingMarginUnits.Tablet} ${headingTabMargin.right}${headingMarginUnits.Tablet} ${headingTabMargin.bottom}${headingMarginUnits.Tablet} ${headingTabMargin.left}${headingMarginUnits.Tablet}`;
	const headingMobileMarginWidth = `${headingMobileMargin.top}${headingMarginUnits.Mobile} ${headingMobileMargin.right}${headingMarginUnits.Mobile} ${headingMobileMargin.bottom}${headingMarginUnits.Mobile} ${headingMobileMargin.left}${headingMarginUnits.Mobile}`;
	/** End Margin */

	/** Start Heading Border */
	const handleHeadingBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (headingBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobileBorder: {
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
						headingDesktopBorder: { ...headingDesktopBorder, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabBorder: { ...headingTabBorder, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobileBorder: { ...headingMobileBorder, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingBorderCombineBtn = () => {
		setAttributes({ headingBorderLink: !headingBorderLink });
	};

	const handleHeadingBorderUnitsHandler = (unit) => {
		setAttributes({
			headingBorderUnits: {
				...headingBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default border for desktop **/
	const headingDesktopBorderWidth = `${headingDesktopBorder.top}${headingBorderUnits.Desktop} ${headingDesktopBorder.right}${headingBorderUnits.Desktop} ${headingDesktopBorder.bottom}${headingBorderUnits.Desktop} ${headingDesktopBorder.left}${headingBorderUnits.Desktop}`;
	const headingTabletBorderWidth = `${headingTabBorder.top}${headingBorderUnits.Tablet} ${headingTabBorder.right}${headingBorderUnits.Tablet} ${headingTabBorder.bottom}${headingBorderUnits.Tablet} ${headingTabBorder.left}${headingBorderUnits.Tablet}`;
	const headingMobileBorderWidth = `${headingMobileBorder.top}${headingBorderUnits.Mobile} ${headingMobileBorder.right}${headingBorderUnits.Mobile} ${headingMobileBorder.bottom}${headingBorderUnits.Mobile} ${headingMobileBorder.left}${headingBorderUnits.Mobile}`;
	/** End Border */

	/** Start Heading BorderRadius */
	const handleHeadingBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (headingBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						headingDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobileBorderRadius: {
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
						headingDesktopBorderRadius: { ...headingDesktopBorderRadius, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						headingTabBorderRadius: { ...headingTabBorderRadius, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						headingMobileBorderRadius: { ...headingMobileBorderRadius, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleHeadingBorderRadiusCombineBtn = () => {
		setAttributes({ headingBorderRadiusLink: !headingBorderRadiusLink });
	};

	const handleHeadingBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			headingBorderRadiusUnits: {
				...headingBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default border-radius for desktop **/
	const headingDesktopBorderRadiusWidth = `${headingDesktopBorderRadius.top}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.right}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.bottom}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.left}${headingBorderRadiusUnits.Desktop}`;
	const headingTabletBorderRadiusWidth = `${headingTabBorderRadius.top}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.right}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.bottom}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.left}${headingBorderRadiusUnits.Tablet}`;
	const headingMobileBorderRadiusWidth = `${headingMobileBorderRadius.top}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.right}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.bottom}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.left}${headingBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

	
	/** Start Description padding */
	const handleDescPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (descPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						descDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						descTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						descMobilePadding: {
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
						descDesktopPadding: { ...descDesktopPadding, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						descTabPadding: { ...descTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						descMobilePadding: { ...descMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleDescPaddingCombineBtn = () => {
		setAttributes({ descPaddingLink: !descPaddingLink });
	};

	const handleDescPaddingUnitsHandler = (unit) => {
		setAttributes({
			descPaddingUnits: {
				...descPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default padding for desktop **/
	const descDesktopPaddingWidth = `${descDesktopPadding.top}${descPaddingUnits.Desktop} ${descDesktopPadding.right}${descPaddingUnits.Desktop} ${descDesktopPadding.bottom}${descPaddingUnits.Desktop} ${descDesktopPadding.left}${descPaddingUnits.Desktop}`;
	const descTabletPaddingWidth = `${descTabPadding.top}${descPaddingUnits.Tablet} ${descTabPadding.right}${descPaddingUnits.Tablet} ${descTabPadding.bottom}${descPaddingUnits.Tablet} ${descTabPadding.left}${descPaddingUnits.Tablet}`;
	const descMobilePaddingWidth = `${descMobilePadding.top}${descPaddingUnits.Mobile} ${descMobilePadding.right}${descPaddingUnits.Mobile} ${descMobilePadding.bottom}${descPaddingUnits.Mobile} ${descMobilePadding.left}${descPaddingUnits.Mobile}`;
	/** End Padding */

	/** Start Description margin */
	const handleDescMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (descMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						descDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						descTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						descMobileMargin: {
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
						descDesktopMargin: { ...descDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						descTabMargin: { ...descTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						descMobileMargin: { ...descMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleDescMarginCombineBtn = () => {
		setAttributes({ descMarginLink: !descMarginLink });
	};

	const handleDescMarginUnitsHandler = (unit) => {
		setAttributes({
			descMarginUnits: {
				...descMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default margin for desktop **/
	const descDesktopMarginWidth = `${descDesktopMargin.top}${descMarginUnits.Desktop} ${descDesktopMargin.right}${descMarginUnits.Desktop} ${descDesktopMargin.bottom}${descMarginUnits.Desktop} ${descDesktopMargin.left}${descMarginUnits.Desktop}`;
	const descTabletMarginWidth = `${descTabMargin.top}${descMarginUnits.Tablet} ${descTabMargin.right}${descMarginUnits.Tablet} ${descTabMargin.bottom}${descMarginUnits.Tablet} ${descTabMargin.left}${descMarginUnits.Tablet}`;
	const descMobileMarginWidth = `${descMobileMargin.top}${descMarginUnits.Mobile} ${descMobileMargin.right}${descMarginUnits.Mobile} ${descMobileMargin.bottom}${descMarginUnits.Mobile} ${descMobileMargin.left}${descMarginUnits.Mobile}`;
	/** End Margin */

	/** Start padding */
	const handleButtonOnePaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnOnePaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnOneDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobilePadding: {
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
						btnOneDesktopPadding: {
							...btnOneDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabPadding: { ...btnOneTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobilePadding: { ...btnOneMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonOnePaddingCombineBtn = () => {
		setAttributes({ btnOnePaddingLink: !btnOnePaddingLink });
	};

	const handleButtonOnePaddingUnitsHandler = (unit) => {
		setAttributes({
			btnOnePaddingUnits: {
				...btnOnePaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonOneDesktopPadding = `${btnOneDesktopPadding.top}${btnOnePaddingUnits.Desktop} ${btnOneDesktopPadding.right}${btnOnePaddingUnits.Desktop} ${btnOneDesktopPadding.bottom}${btnOnePaddingUnits.Desktop} ${btnOneDesktopPadding.left}${btnOnePaddingUnits.Desktop}`;
	const buttonOneTabletPadding = `${btnOneTabPadding.top}${btnOnePaddingUnits.Tablet} ${btnOneTabPadding.right}${btnOnePaddingUnits.Tablet} ${btnOneTabPadding.bottom}${btnOnePaddingUnits.Tablet} ${btnOneTabPadding.left}${btnOnePaddingUnits.Tablet}`;
	const buttonOneMobilePadding = `${btnOneMobilePadding.top}${btnOnePaddingUnits.Mobile} ${btnOneMobilePadding.right}${btnOnePaddingUnits.Mobile} ${btnOneMobilePadding.bottom}${btnOnePaddingUnits.Mobile} ${btnOneMobilePadding.left}${btnOnePaddingUnits.Mobile}`;

	/** Start Margin */
	const btnOneMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnOneMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnOneDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobileMargin: {
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
						btnOneDesktopMargin: { ...btnOneDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabMargin: { ...btnOneTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobileMargin: { ...btnOneMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const btnOneMarginLinkBtn = () => {
		setAttributes({
			btnOneMarginLink: !btnOneMarginLink,
		});
	};

	const btnOneMarginUnitsHandler = (unit) => {
		setAttributes({
			btnOneMarginUnits: {
				...btnOneMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const btnOneDesktopMarginWidth = `${btnOneDesktopMargin.top}${btnOneMarginUnits.Desktop} ${btnOneDesktopMargin.right}${btnOneMarginUnits.Desktop} ${btnOneDesktopMargin.bottom}${btnOneMarginUnits.Desktop} ${btnOneDesktopMargin.left}${btnOneMarginUnits.Desktop}`;
	const btnOneTabletMarginWidth = `${btnOneTabMargin.top}${btnOneMarginUnits.Tablet} ${btnOneTabMargin.right}${btnOneMarginUnits.Tablet} ${btnOneTabMargin.bottom}${btnOneMarginUnits.Tablet} ${btnOneTabMargin.left}${btnOneMarginUnits.Tablet}`;
	const btnOneMobileMarginWidth = `${btnOneMobileMargin.top}${btnOneMarginUnits.Mobile} ${btnOneMobileMargin.right}${btnOneMarginUnits.Mobile} ${btnOneMobileMargin.bottom}${btnOneMarginUnits.Mobile} ${btnOneMobileMargin.left}${btnOneMarginUnits.Mobile}`;
	/** End Margin */

	/** Start Button One Border */
	const handleButtonOneBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnOneBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnOneDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobileBorder: {
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
						btnOneDesktopBorder: { ...btnOneDesktopBorder, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabBorder: { ...btnOneTabBorder, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobileBorder: { ...btnOneMobileBorder, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonOneBorderCombineBtn = () => {
		setAttributes({ btnOneBorderLink: !btnOneBorderLink });
	};

	const handleButtonOneBorderUnitsHandler = (unit) => {
		setAttributes({
			btnOneBorderUnits: {
				...btnOneBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default border for desktop **/
	const btnOneDesktopBorderWidth = `${btnOneDesktopBorder.top}${btnOneBorderUnits.Desktop} ${btnOneDesktopBorder.right}${btnOneBorderUnits.Desktop} ${btnOneDesktopBorder.bottom}${btnOneBorderUnits.Desktop} ${btnOneDesktopBorder.left}${btnOneBorderUnits.Desktop}`;
	const btnOneTabletBorderWidth = `${btnOneTabBorder.top}${btnOneBorderUnits.Tablet} ${btnOneTabBorder.right}${btnOneBorderUnits.Tablet} ${btnOneTabBorder.bottom}${btnOneBorderUnits.Tablet} ${btnOneTabBorder.left}${btnOneBorderUnits.Tablet}`;
	const btnOneMobileBorderWidth = `${btnOneMobileBorder.top}${btnOneBorderUnits.Mobile} ${btnOneMobileBorder.right}${btnOneBorderUnits.Mobile} ${btnOneMobileBorder.bottom}${btnOneBorderUnits.Mobile} ${btnOneMobileBorder.left}${btnOneBorderUnits.Mobile}`;
	/** End Border */

	/** Start Button One Border Radius */
	const handleButtonOneBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnOneBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnOneDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobileBorderRadius: {
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
						btnOneDesktopBorderRadius: { ...btnOneDesktopBorderRadius, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						btnOneTabBorderRadius: { ...btnOneTabBorderRadius, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnOneMobileBorderRadius: { ...btnOneMobileBorderRadius, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonOneBorderRadiusCombineBtn = () => {
		setAttributes({ btnOneBorderRadiusLink: !btnOneBorderRadiusLink });
	};

	const handleButtonOneBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			btnOneBorderRadiusUnits: {
				...btnOneBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default border-radius for desktop **/
	const btnOneDesktopBorderRadiusWidth = `${btnOneDesktopBorderRadius.top}${btnOneBorderRadiusUnits.Desktop} ${btnOneDesktopBorderRadius.right}${btnOneBorderRadiusUnits.Desktop} ${btnOneDesktopBorderRadius.bottom}${btnOneBorderRadiusUnits.Desktop} ${btnOneDesktopBorderRadius.left}${btnOneBorderRadiusUnits.Desktop}`;
	const btnOneTabletBorderRadiusWidth = `${btnOneTabBorderRadius.top}${btnOneBorderRadiusUnits.Tablet} ${btnOneTabBorderRadius.right}${btnOneBorderRadiusUnits.Tablet} ${btnOneTabBorderRadius.bottom}${btnOneBorderRadiusUnits.Tablet} ${btnOneTabBorderRadius.left}${btnOneBorderRadiusUnits.Tablet}`;
	const btnOneMobileBorderRadiusWidth = `${btnOneMobileBorderRadius.top}${btnOneBorderRadiusUnits.Mobile} ${btnOneMobileBorderRadius.right}${btnOneBorderRadiusUnits.Mobile} ${btnOneMobileBorderRadius.bottom}${btnOneBorderRadiusUnits.Mobile} ${btnOneMobileBorderRadius.left}${btnOneBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

	/** Start padding */
	const handleButtonTwoPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoPaddingLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobilePadding: {
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
						btnTwoDesktopPadding: {
							...btnTwoDesktopPadding,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabPadding: { ...btnTwoTabPadding, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobilePadding: { ...btnTwoMobilePadding, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const handleButtonTwoPaddingCombineBtn = () => {
		setAttributes({ btnTwoPaddingLink: !btnTwoPaddingLink });
	};

	const handleButtonTwoPaddingUnitsHandler = (unit) => {
		setAttributes({
			btnTwoPaddingUnits: {
				...btnTwoPaddingUnits,
				[deviceType]: unit,
			},
		});
	};

	const buttonTwoDesktopPadding = `${btnTwoDesktopPadding.top}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.right}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.bottom}${btnTwoPaddingUnits.Desktop} ${btnTwoDesktopPadding.left}${btnTwoPaddingUnits.Desktop}`;
	const buttonTwoTabletPadding = `${btnTwoTabPadding.top}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.right}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.bottom}${btnTwoPaddingUnits.Tablet} ${btnTwoTabPadding.left}${btnTwoPaddingUnits.Tablet}`;
	const buttonTwoMobilePadding = `${btnTwoMobilePadding.top}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.right}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.bottom}${btnTwoPaddingUnits.Mobile} ${btnTwoMobilePadding.left}${btnTwoPaddingUnits.Mobile}`;

	/** Start Margin */
	const btnTwoMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoMarginLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileMargin: {
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
						btnTwoDesktopMargin: { ...btnTwoDesktopMargin, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabMargin: { ...btnTwoTabMargin, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileMargin: { ...btnTwoMobileMargin, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const btnTwoMarginLinkBtn = () => {
		setAttributes({
			btnTwoMarginLink: !btnTwoMarginLink,
		});
	};

	const btnTwoMarginUnitsHandler = (unit) => {
		setAttributes({
			btnTwoMarginUnits: {
				...btnTwoMarginUnits,
				[deviceType]: unit,
			},
		});
	};

	const btnTwoDesktopMarginWidth = `${btnTwoDesktopMargin.top}${btnTwoMarginUnits.Desktop} ${btnTwoDesktopMargin.right}${btnTwoMarginUnits.Desktop} ${btnTwoDesktopMargin.bottom}${btnTwoMarginUnits.Desktop} ${btnTwoDesktopMargin.left}${btnTwoMarginUnits.Desktop}`;
	const btnTwoTabletMarginWidth = `${btnTwoTabMargin.top}${btnTwoMarginUnits.Tablet} ${btnTwoTabMargin.right}${btnTwoMarginUnits.Tablet} ${btnTwoTabMargin.bottom}${btnTwoMarginUnits.Tablet} ${btnTwoTabMargin.left}${btnTwoMarginUnits.Tablet}`;
	const btnTwoMobileMarginWidth = `${btnTwoMobileMargin.top}${btnTwoMarginUnits.Mobile} ${btnTwoMobileMargin.right}${btnTwoMarginUnits.Mobile} ${btnTwoMobileMargin.bottom}${btnTwoMarginUnits.Mobile} ${btnTwoMobileMargin.left}${btnTwoMarginUnits.Mobile}`;
	/** End Margin */

	/** Start Border */
	const btnTwoBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoBorderLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorder: {
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
						btnTwoDesktopBorder: { ...btnTwoDesktopBorder, [position]: value },
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorder: { ...btnTwoTabBorder, [position]: value },
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorder: { ...btnTwoMobileBorder, [position]: value },
					});
					break;
				default:
					break;
			}
		}
	};

	const btnTwoBorderLinkBtn = () => {
		setAttributes({
			btnTwoBorderLink: !btnTwoBorderLink,
		});
	};

	const btnTwoBorderUnitsHandler = (unit) => {
		setAttributes({
			btnTwoBorderUnits: {
				...btnTwoBorderUnits,
				[deviceType]: unit,
			},
		});
	};

	/** Default border for btnTwo */
	const btnTwoDesktopBorderWidthStyle = `${btnTwoDesktopBorder.top}${btnTwoBorderUnits.Desktop} ${btnTwoDesktopBorder.right}${btnTwoBorderUnits.Desktop} ${btnTwoDesktopBorder.bottom}${btnTwoBorderUnits.Desktop} ${btnTwoDesktopBorder.left}${btnTwoBorderUnits.Desktop}`;
	const btnTwoTabletBorderWidthStyle = `${btnTwoTabBorder.top}${btnTwoBorderUnits.Tablet} ${btnTwoTabBorder.right}${btnTwoBorderUnits.Tablet} ${btnTwoTabBorder.bottom}${btnTwoBorderUnits.Tablet} ${btnTwoTabBorder.left}${btnTwoBorderUnits.Tablet}`;
	const btnTwoMobileBorderWidthStyle = `${btnTwoMobileBorder.top}${btnTwoBorderUnits.Mobile} ${btnTwoMobileBorder.right}${btnTwoBorderUnits.Mobile} ${btnTwoMobileBorder.bottom}${btnTwoBorderUnits.Mobile} ${btnTwoMobileBorder.left}${btnTwoBorderUnits.Mobile}`;
	/** End btnTwo Border */

	/** Start Button Two Border Radius */
	const btnTwoBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (btnTwoBorderRadiusLink) {
			switch (deviceType) {
				case "Desktop":
					setAttributes({
						btnTwoDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorderRadius: {
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
						btnTwoDesktopBorderRadius: {
							...btnTwoDesktopBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Tablet":
					setAttributes({
						btnTwoTabBorderRadius: {
							...btnTwoTabBorderRadius,
							[position]: value,
						},
					});
					break;
				case "Mobile":
					setAttributes({
						btnTwoMobileBorderRadius: {
							...btnTwoMobileBorderRadius,
							[position]: value,
						},
					});
					break;
				default:
					break;
			}
		}
	};

	const btnTwoBorderRadiusLinkBtn = () => {
		setAttributes({
			btnTwoBorderRadiusLink: !btnTwoBorderRadiusLink,
		});
	};

	const btnTwoBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			btnTwoBorderRadiusUnits: {
				...btnTwoBorderRadiusUnits,
				[deviceType]: unit,
			},
		});
	};

	const btnTwoDesktopBorderRadiusWidthStyle = `${btnTwoDesktopBorderRadius.top}${btnTwoBorderRadiusUnits.Desktop} ${btnTwoDesktopBorderRadius.right}${btnTwoBorderRadiusUnits.Desktop} ${btnTwoDesktopBorderRadius.bottom}${btnTwoBorderRadiusUnits.Desktop} ${btnTwoDesktopBorderRadius.left}${btnTwoBorderRadiusUnits.Desktop}`;
	const btnTwoTabletBorderRadiusWidthStyle = `${btnTwoTabBorderRadius.top}${btnTwoBorderRadiusUnits.Tablet} ${btnTwoTabBorderRadius.right}${btnTwoBorderRadiusUnits.Tablet} ${btnTwoTabBorderRadius.bottom}${btnTwoBorderRadiusUnits.Tablet} ${btnTwoTabBorderRadius.left}${btnTwoBorderRadiusUnits.Tablet}`;
	const btnTwoMobileBorderRadiusWidthStyle = `${btnTwoMobileBorderRadius.top}${btnTwoBorderRadiusUnits.Mobile} ${btnTwoMobileBorderRadius.right}${btnTwoBorderRadiusUnits.Mobile} ${btnTwoMobileBorderRadius.bottom}${btnTwoBorderRadiusUnits.Mobile} ${btnTwoMobileBorderRadius.left}${btnTwoBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

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

	const DesktopPadding = `${globalPaddingDesktop.top}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.right}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.bottom}${globalPaddingUnits.Desktop} ${globalPaddingDesktop.left}${globalPaddingUnits.Desktop}`;
	const TabletPadding = `${globalPaddingTablet.top}${globalPaddingUnits.Tablet} ${globalPaddingTablet.right}${globalPaddingUnits.Tablet} ${globalPaddingTablet.bottom}${globalPaddingUnits.Tablet} ${globalPaddingTablet.left}${globalPaddingUnits.Tablet}`;
	const MobilePadding = `${globalPaddingMobile.top}${globalPaddingUnits.Mobile} ${globalPaddingMobile.right}${globalPaddingUnits.Mobile} ${globalPaddingMobile.bottom}${globalPaddingUnits.Mobile} ${globalPaddingMobile.left}${globalPaddingUnits.Mobile}`;

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

	const DesktopMargin = `${globalMarginDesktop.top}${globalMarginUnits.Desktop} ${globalMarginDesktop.right}${globalMarginUnits.Desktop} ${globalMarginDesktop.bottom}${globalMarginUnits.Desktop} ${globalMarginDesktop.left}${globalMarginUnits.Desktop}`;
	const TabletMargin = `${globalMarginTablet.top}${globalMarginUnits.Tablet} ${globalMarginTablet.right}${globalMarginUnits.Tablet} ${globalMarginTablet.bottom}${globalMarginUnits.Tablet} ${globalMarginTablet.left}${globalMarginUnits.Tablet}`;
	const MobileMargin = `${globalMarginMobile.top}${globalMarginUnits.Mobile} ${globalMarginMobile.right}${globalMarginUnits.Mobile} ${globalMarginMobile.bottom}${globalMarginUnits.Mobile} ${globalMarginMobile.left}${globalMarginUnits.Mobile}`;

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
	const BorderDesktopWidth = `${globalBorderDesktop.top}${globalBorderUnits.Desktop} ${globalBorderDesktop.right}${globalBorderUnits.Desktop} ${globalBorderDesktop.bottom}${globalBorderUnits.Desktop} ${globalBorderDesktop.left}${globalBorderUnits.Desktop}`;
	const BorderTabletWidth = `${globalBorderTablet.top}${globalBorderUnits.Tablet} ${globalBorderTablet.right}${globalBorderUnits.Tablet} ${globalBorderTablet.bottom}${globalBorderUnits.Tablet} ${globalBorderTablet.left}${globalBorderUnits.Tablet}`;
	const BorderMobileWidth = `${globalBorderMobile.top}${globalBorderUnits.Mobile} ${globalBorderMobile.right}${globalBorderUnits.Mobile} ${globalBorderMobile.bottom}${globalBorderUnits.Mobile} ${globalBorderMobile.left}${globalBorderUnits.Mobile}`;
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
	const BorderRadiusDesktopWidth = `${globalBorderRadiusDesktop.top}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.right}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.bottom}${globalBorderRadiusUnits.Desktop} ${globalBorderRadiusDesktop.left}${globalBorderRadiusUnits.Desktop}`;
	const BorderRadiusTabletWidth = `${globalBorderRadiusTablet.top}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.right}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.bottom}${globalBorderRadiusUnits.Tablet} ${globalBorderRadiusTablet.left}${globalBorderRadiusUnits.Tablet}`;
	const BorderRadiusMobileWidth = `${globalBorderRadiusMobile.top}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.right}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.bottom}${globalBorderRadiusUnits.Mobile} ${globalBorderRadiusMobile.left}${globalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

	/* set default values for the style attributes */
	useEffect(() => {
		if (headingFontFamily) {
			loadGoogleFont(headingFontFamily);
		}
		if (buttonFontFamily) {
			loadGoogleFont(buttonFontFamily);
		}
		if (SubHeadingFontFamily) {
			loadGoogleFont(SubHeadingFontFamily);
		}
		if (buttonTwoFontFamily) {
			loadGoogleFont(buttonTwoFontFamily);
		}
	}, [headingFontFamily, buttonFontFamily, SubHeadingFontFamily, buttonTwoFontFamily]);

	const ctaContentStyle = useMemo(
		() => `
			.fb-cta-main-wrapper.${blockID} {
				${ctaPositionType === 'default' ? `position: relative;` : ''}
				${ctaPositionType !== 'default' && ctaPositionType !== 'relative' ? `width: 100%;` : ''}
				${ctaPositionType !== 'default' ? `position: ${ctaPositionType};` : ''}
				${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'left' && ctaHZLeftOffset.Desktop ? `left: ${ctaHZLeftOffset.Desktop}${ctaHZLeftOffsetUnits.Desktop};` : ''}
				${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'right' && ctaHZRightOffset.Desktop ? `right: ${ctaHZRightOffset.Desktop}${ctaHZRightOffsetUnits.Desktop};` : ''}
				${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'top' && ctaVRTopOffset.Desktop ? `top: ${ctaVRTopOffset.Desktop}${ctaVRTopOffsetUnits.Desktop};` : ''}
				${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'bottom' && ctaVRBottomOffset.Desktop ? `bottom: ${ctaVRBottomOffset.Desktop}${ctaVRBottomOffsetUnits.Desktop};` : ''}
				${globalZIndex.Desktop ? `z-index: ${globalZIndex.Desktop};` : ''}
				${ctaOverflow !== 'default' ? `overflow: ${ctaOverflow};` : ''}
			}
			.fb-cta-content-wrapper.${blockID} {
				${DesktopPadding && globalPaddingDesktop.top ? `padding: ${DesktopPadding};` : ""}
				${DesktopMargin && globalMarginDesktop.top ? `margin: ${DesktopMargin};` : ""}
				${globalBorder ? `border: ${globalBorder};` : ""}
				${BorderDesktopWidth && globalBorderDesktop.top ? `border-width: ${BorderDesktopWidth};` : ""}
				${BorderRadiusDesktopWidth && globalBorderRadiusDesktop.top ? `border-radius: ${BorderRadiusDesktopWidth} !important;` : "" }
				${globalBorderColor ? `border-color: ${globalBorderColor};` : "" }
				${globalBoxShadowCssValue ? `box-shadow: ${globalBoxShadowCssValue};` : "" }
				${ctaGlobalBackgroundType === "gradient" 
					? (ctaGlobalCustomGradientSwitcher && ctaGlobalCustomGradientInputValue 
						? `background: ${ctaGlobalCustomGradientInputValue};` 
						: (ctaGlobalGradientColor 
							? `background: ${ctaGlobalGradientColor};` 
							: `background: ${ctaGlobalClassicColor};`))
					: (ctaGlobalBackgroundImageUrl && ctaGlobalBackgroundImageUrl !== "null" 
						? `
							${ctaGlobalBackgroundImageUrl ? `background-image: url(${ctaGlobalBackgroundImageUrl});` : "" }
							${ctaGlobalBackgroundImagePosition ? `background-position: ${ctaGlobalBackgroundImagePosition};` : "" }
							${ctaGlobalBackgroundImageAttachment ? `background-attachment: ${ctaGlobalBackgroundImageAttachment};` : "" }
							${ctaGlobalBackgroundImageRepeat ? `background-repeat: ${ctaGlobalBackgroundImageRepeat};` : "" }
							${ctaGlobalBackgroundImageSize ? `background-size: ${ctaGlobalBackgroundImageSize};` : "" } 
						`
						: ctaGlobalClassicColor ? `background: ${ctaGlobalClassicColor};` : '')
				}
				transition: all .3s ease-in-out;
			}

			.fb-cta-content-wrapper.${blockID}:hover {
				${hoverBackgroundType === "gradient" ? `background: ${hoverCustomGradientSwitcher && hoverCustomGradientInputValue ? hoverCustomGradientInputValue : hoverGradientColor };` : hoverBackgroundImageUrl && hoverBackgroundImageUrl !== "null" ? `
				${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : "" }
				${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : "" }
				${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : "" }
				${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : "" }
				${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : "" } ` 
				: hoverClassicColor ? `background: ${hoverClassicColor};` : '' }
				${globalHoverBoxShadowCssValue ? `box-shadow: ${globalHoverBoxShadowCssValue};` : "" }
				${globalBorderHoverColor ? `border-color: ${globalBorderHoverColor};` : "" }
			}
			.fb-cta-content-wrapper.${blockID} .fb-heading {
				${headingColor ? `color: ${headingColor};` : ""}
				${Heading_Background_Color ? `background-color: ${Heading_Background_Color};` : "" }

				${headingGlobalTypoSwitcher.fontFamily === true && headingGlobalTypographyData.fontFamily ? `font-family: ${headingGlobalTypographyData.fontFamily};` : ''}
				${headingGlobalTypoSwitcher.fontSize === true && headingGlobalTypographyData.fontSize ? `font-size: ${headingGlobalTypographyData.fontSize};` : ''}
				${headingGlobalTypoSwitcher.fontWeight === true && headingGlobalTypographyData.fontWeight ? `font-weight: ${headingGlobalTypographyData.fontWeight};` : ''}
				${headingGlobalTypoSwitcher.fontStyle === true && headingGlobalTypographyData.fontStyle ? `font-style: ${headingGlobalTypographyData.fontStyle};` : ''}
				${headingGlobalTypoSwitcher.textTransform === true && headingGlobalTypographyData.textTransform ? `text-transform: ${headingGlobalTypographyData.textTransform};` : ''}
				${headingGlobalTypoSwitcher.textDecoration === true && headingGlobalTypographyData.textDecoration ? `text-decoration: ${headingGlobalTypographyData.textDecoration};` : ''}
				${headingGlobalTypoSwitcher.letterSpacing === true && headingGlobalTypographyData.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData.letterSpacing};` : ''}
				${headingGlobalTypoSwitcher.lineHeight === true && headingGlobalTypographyData.lineHeight ? `line-height: ${headingGlobalTypographyData.lineHeight};` : ''}

				${headingGlobalTypoSwitcher.fontFamily === false && headingFontFamily && headingFontFamily !== "Default" ? `font-family: ${headingFontFamily};` : ''}
				${headingGlobalTypoSwitcher.fontSize === false && headingFontSize.Desktop && headingFontSizeUnits.Desktop ? `font-size: ${headingFontSize.Desktop}${headingFontSizeUnits.Desktop};` : ''}
				${headingGlobalTypoSwitcher.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
				${headingGlobalTypoSwitcher.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
				${headingGlobalTypoSwitcher.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
				${headingGlobalTypoSwitcher.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
				${headingGlobalTypoSwitcher.letterSpacing === false && headingLetterSpacing.Desktop && headingLetterSpacingUnits.Desktop ? `letter-spacing: ${headingLetterSpacing.Desktop}${headingLetterSpacingUnits.Desktop};` : ''}
				${headingGlobalTypoSwitcher.lineHeight === false && headingLineHeight.Desktop && headingLineHeightUnits.Desktop ? `line-height: ${headingLineHeight.Desktop}${headingLineHeightUnits.Desktop};` : ''}
				
				${headingDesktopPaddingWidth && headingDesktopPadding.top ? `padding: ${headingDesktopPaddingWidth};` : ""}
				${headingDesktopMarginWidth && headingDesktopMargin.top ? `margin: ${headingDesktopMarginWidth};` : ""}
				${Heading_Border ? `border: ${Heading_Border};` : ""}
				${headingBorderColor ? `border-color: ${headingBorderColor};` : ""}
				${headingDesktopBorderWidth && headingDesktopBorder.top ? `border-width: ${headingDesktopBorderWidth};` : ""}
				${headingDesktopBorderRadiusWidth && headingDesktopBorderRadius.top ? `border-radius: ${headingDesktopBorderRadiusWidth};` : ""}
				transition: all .3s ease-in-out;
			}
			.fb-cta-content-wrapper.${blockID}:hover .fb-heading {
				${headingHoverColor ? `color: ${headingHoverColor};` : ""}
				${headingBorderHoverColor ? `border-color: ${headingBorderHoverColor};` : "" }
			}
			
			.fb-cta-content-wrapper.${blockID} .fb-description {
				${SubHeadingColor ? `color: ${SubHeadingColor};` : ""}
				${descDesktopPaddingWidth && descDesktopPadding.top ? `padding: ${descDesktopPaddingWidth};` : ""}
				${descDesktopMarginWidth && descDesktopMargin.top ? `margin: ${descDesktopMarginWidth};` : ""}

				${SubHeadingGlobalTypoSwitcher.fontFamily === true && SubHeadingGlobalTypographyData.fontFamily ? `font-family: ${SubHeadingGlobalTypographyData.fontFamily};` : ''}
				${SubHeadingGlobalTypoSwitcher.fontSize === true && SubHeadingGlobalTypographyData.fontSize ? `font-size: ${SubHeadingGlobalTypographyData.fontSize};` : ''}
				${SubHeadingGlobalTypoSwitcher.fontWeight === true && SubHeadingGlobalTypographyData.fontWeight ? `font-weight: ${SubHeadingGlobalTypographyData.fontWeight};` : ''}
				${SubHeadingGlobalTypoSwitcher.fontStyle === true && SubHeadingGlobalTypographyData.fontStyle ? `font-style: ${SubHeadingGlobalTypographyData.fontStyle};` : ''}
				${SubHeadingGlobalTypoSwitcher.textTransform === true && SubHeadingGlobalTypographyData.textTransform ? `text-transform: ${SubHeadingGlobalTypographyData.textTransform};` : ''}
				${SubHeadingGlobalTypoSwitcher.textDecoration === true && SubHeadingGlobalTypographyData.textDecoration ? `text-decoration: ${SubHeadingGlobalTypographyData.textDecoration};` : ''}
				${SubHeadingGlobalTypoSwitcher.letterSpacing === true && SubHeadingGlobalTypographyData.letterSpacing ? `letter-spacing: ${SubHeadingGlobalTypographyData.letterSpacing};` : ''}
				${SubHeadingGlobalTypoSwitcher.lineHeight === true && SubHeadingGlobalTypographyData.lineHeight ? `line-height: ${SubHeadingGlobalTypographyData.lineHeight};` : ''}
				
				${SubHeadingGlobalTypoSwitcher.fontFamily === false && SubHeadingFontFamily && SubHeadingFontFamily !== "Default" ? `font-family: ${SubHeadingFontFamily};` : ''}
				${SubHeadingGlobalTypoSwitcher.fontSize === false && SubHeadingFontSize.Desktop && SubHeadingFontSizeUnits.Desktop ? `font-size: ${SubHeadingFontSize.Desktop}${SubHeadingFontSizeUnits.Desktop};` : ''}
				${SubHeadingGlobalTypoSwitcher.fontWeight === false && SubHeadingFontWeight ? `font-weight: ${SubHeadingFontWeight};` : ''}
				${SubHeadingGlobalTypoSwitcher.fontStyle === false && SubHeadingFontStyle ? `font-style: ${SubHeadingFontStyle};` : ''}
				${SubHeadingGlobalTypoSwitcher.textTransform === false && SubHeadingTextTransform ? `text-transform: ${SubHeadingTextTransform};` : ''}
				${SubHeadingGlobalTypoSwitcher.textDecoration === false && SubHeadingTextDecoration ? `text-decoration: ${SubHeadingTextDecoration};` : ''}
				${SubHeadingGlobalTypoSwitcher.letterSpacing === false && SubHeadingLetterSpacing.Desktop && SubHeadingLetterSpacingUnits.Desktop ? `letter-spacing: ${SubHeadingLetterSpacing.Desktop}${SubHeadingLetterSpacingUnits.Desktop};` : ''}
				${SubHeadingGlobalTypoSwitcher.lineHeight === false && SubHeadingLineHeight.Desktop && SubHeadingLineHeightUnits.Desktop ? `line-height: ${SubHeadingLineHeight.Desktop}${SubHeadingLineHeightUnits.Desktop};` : ''}
			}
			.fb-cta-content-wrapper.${blockID}:hover .fb-description {
				${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
				${buttonBgColor ? `background-color: ${buttonBgColor};` : "" }
				${buttonOneDesktopPadding && btnOneDesktopPadding.top ? `padding: ${buttonOneDesktopPadding};` : ''}
				${btnOneDesktopMarginWidth && btnOneDesktopMargin.top ? `margin: ${btnOneDesktopMarginWidth};` : ''}
				${infoButtonBorder ? `border: ${infoButtonBorder};` : ""}
				${infoButtonBorderColor ? `border-color: ${infoButtonBorderColor};` : ""}
				${btnOneDesktopBorderWidth && btnOneDesktopBorder.top ? `border-width: ${btnOneDesktopBorderWidth};` : ""}
				${btnOneDesktopBorderRadiusWidth && btnOneDesktopBorderRadius.top ? `border-radius: ${btnOneDesktopBorderRadiusWidth};` : ""}
				transition: all .3s ease-in-out;
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper .fb-cta-button{
				${buttonGlobalTypoSwitcher.fontFamily === true && buttonGlobalTypographyData.fontFamily ? `font-family: ${buttonGlobalTypographyData.fontFamily};` : ''}
				${buttonGlobalTypoSwitcher.fontSize === true && buttonGlobalTypographyData.fontSize ? `font-size: ${buttonGlobalTypographyData.fontSize};` : ''}
				${buttonGlobalTypoSwitcher.fontWeight === true && buttonGlobalTypographyData.fontWeight ? `font-weight: ${buttonGlobalTypographyData.fontWeight};` : ''}
				${buttonGlobalTypoSwitcher.fontStyle === true && buttonGlobalTypographyData.fontStyle ? `font-style: ${buttonGlobalTypographyData.fontStyle};` : ''}
				${buttonGlobalTypoSwitcher.textTransform === true && buttonGlobalTypographyData.textTransform ? `text-transform: ${buttonGlobalTypographyData.textTransform};` : ''}
				${buttonGlobalTypoSwitcher.textDecoration === true && buttonGlobalTypographyData.textDecoration ? `text-decoration: ${buttonGlobalTypographyData.textDecoration};` : ''}
				${buttonGlobalTypoSwitcher.letterSpacing === true && buttonGlobalTypographyData.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData.letterSpacing};` : ''}
				${buttonGlobalTypoSwitcher.lineHeight === true && buttonGlobalTypographyData.lineHeight ? `line-height: ${buttonGlobalTypographyData.lineHeight};` : ''}
					
				${buttonGlobalTypoSwitcher.fontFamily === false && buttonFontFamily && buttonFontFamily !== "Default" ? `font-family: ${buttonFontFamily};` : ''}
				${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Desktop && buttonFontSizeUnits.Desktop ? `font-size: ${buttonFontSize.Desktop}${buttonFontSizeUnits.Desktop};` : ''}
				${buttonGlobalTypoSwitcher.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
				${buttonGlobalTypoSwitcher.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
				${buttonGlobalTypoSwitcher.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
				${buttonGlobalTypoSwitcher.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
				${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Desktop && buttonLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonLetterSpacing.Desktop}${buttonLetterSpacingUnits.Desktop};` : ''}
				${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Desktop && buttonLineHeightUnits.Desktop ? `line-height: ${buttonLineHeight.Desktop}${buttonLineHeightUnits.Desktop};` : ''}
				
				${buttonTextColor ? `color: ${buttonTextColor};` : ""}
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper:hover .fb-cta-button{
				${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}	
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper:hover {
				${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : "" }
				${infoButtonHoverBorderColor ? `border-color: ${infoButtonHoverBorderColor};` : ""}
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
				${ buttonTwoBgColor ? `background-color: ${buttonTwoBgColor};` : "" }
				${buttonTwoDesktopPadding && btnTwoDesktopPadding.top ? `padding: ${buttonTwoDesktopPadding};` : ''}
				${btnTwoDesktopMarginWidth && btnTwoDesktopMargin.top ? `margin: ${btnTwoDesktopMarginWidth};` : ''}
				${btnTwoBorder ? `border: ${btnTwoBorder};` : ""}
				${btnTwoBorderColor ? `border-color: ${btnTwoBorderColor};` : ""}
				${btnTwoDesktopBorderWidthStyle && btnTwoDesktopBorder.top ? `border-width: ${btnTwoDesktopBorderWidthStyle};` : ""}
				${btnTwoDesktopBorderRadiusWidthStyle && btnTwoDesktopBorderRadius.top ? `border-radius: ${btnTwoDesktopBorderRadiusWidthStyle};` : ""}
				transition: all .3s ease-in-out;
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper .fb-cta-button {
				${buttonTwoGlobalTypoSwitcher.fontFamily === true && buttonTwoGlobalTypographyData.fontFamily ? `font-family: ${buttonTwoGlobalTypographyData.fontFamily};` : ''}
				${buttonTwoGlobalTypoSwitcher.fontSize === true && buttonTwoGlobalTypographyData.fontSize ? `font-size: ${buttonTwoGlobalTypographyData.fontSize};` : ''}
				${buttonTwoGlobalTypoSwitcher.fontWeight === true && buttonTwoGlobalTypographyData.fontWeight ? `font-weight: ${buttonTwoGlobalTypographyData.fontWeight};` : ''}
				${buttonTwoGlobalTypoSwitcher.fontStyle === true && buttonTwoGlobalTypographyData.fontStyle ? `font-style: ${buttonTwoGlobalTypographyData.fontStyle};` : ''}
				${buttonTwoGlobalTypoSwitcher.textTransform === true && buttonTwoGlobalTypographyData.textTransform ? `text-transform: ${buttonTwoGlobalTypographyData.textTransform};` : ''}
				${buttonTwoGlobalTypoSwitcher.textDecoration === true && buttonTwoGlobalTypographyData.textDecoration ? `text-decoration: ${buttonTwoGlobalTypographyData.textDecoration};` : ''}
				${buttonTwoGlobalTypoSwitcher.letterSpacing === true && buttonTwoGlobalTypographyData.letterSpacing ? `letter-spacing: ${buttonTwoGlobalTypographyData.letterSpacing};` : ''}
				${buttonTwoGlobalTypoSwitcher.lineHeight === true && buttonTwoGlobalTypographyData.lineHeight ? `line-height: ${buttonTwoGlobalTypographyData.lineHeight};` : ''}
				
				${buttonTwoGlobalTypoSwitcher.fontFamily === false && buttonTwoFontFamily && buttonTwoFontFamily !== "Default" ? `font-family: ${buttonTwoFontFamily};` : "" }
				${buttonTwoGlobalTypoSwitcher.fontSize === false && buttonTwoFontSize.Desktop && buttonTwoFontSizeUnits.Desktop ? `font-size: ${buttonTwoFontSize.Desktop}${buttonTwoFontSizeUnits.Desktop};` : "" }
				${buttonTwoGlobalTypoSwitcher.fontWeight === false && buttonTwoFontWeight ? `font-weight: ${buttonTwoFontWeight};` : "" }
				${buttonTwoGlobalTypoSwitcher.fontStyle === false && buttonTwoFontStyle ? `font-style: ${buttonTwoFontStyle};` : "" }
				${buttonTwoGlobalTypoSwitcher.textTransform === false && buttonTwoTextTransform ? `text-transform: ${buttonTwoTextTransform};` : "" }
				${buttonTwoGlobalTypoSwitcher.textDecoration === false && buttonTwoTextDecoration ? `text-decoration: ${buttonTwoTextDecoration};` : "" }
				${buttonTwoGlobalTypoSwitcher.letterSpacing === false && buttonTwoLetterSpacing.Desktop && buttonTwoLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonTwoLetterSpacing.Desktop}${buttonTwoLetterSpacingUnits.Desktop};` : "" }
				${buttonTwoGlobalTypoSwitcher.lineHeight === false && buttonTwoLineHeight.Desktop && buttonTwoLineHeightUnits.Desktop ? `line-height: ${buttonTwoLineHeight.Desktop}${buttonTwoLineHeightUnits.Desktop};` : "" }
				
				${buttonTwoTextColor ? `color: ${buttonTwoTextColor};` : "" }
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper:hover .fb-cta-button{
				${ buttonTwoTextHoverColor ? `color: ${buttonTwoTextHoverColor};` : "" }
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper:hover {
				${buttonTwoBgHoverColor ? `background-color: ${buttonTwoBgHoverColor};` : "" }
				${btnTwoHoverBorderColor ? `border-color: ${btnTwoHoverBorderColor};` : ""}
			}
			
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
				${btnIconSize.Desktop && btnIconSizeUnits.Desktop ? `width: ${btnIconSize.Desktop}${btnIconSizeUnits.Desktop};` : ""}
				${btnIconColor ? `fill: ${btnIconColor};` : "" }
				${btnIconRotate.Desktop ? `transform: rotate(${btnIconRotate.Desktop}deg);` : ""}
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper:hover .fb-btn-icon-wrapper svg {
				${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : "" }
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
				${btnTwoIconSize.Desktop && btnTwoIconSizeUnits.Desktop ? `width: ${btnTwoIconSize.Desktop}${btnTwoIconSizeUnits.Desktop};` : ""}
				${btnTwoIconColor ? `fill: ${btnTwoIconColor};` : "" }
				${btnTwoIconRotate.Desktop ? `transform: rotate(${btnTwoIconRotate.Desktop}deg);` : ""}
			}
			.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper:hover .fb-btn-icon-wrapper svg {
				${btnTwoIconHoverColor ? `fill: ${btnTwoIconHoverColor};` : "" }
			}
			@media only screen and (max-width: 1024px) {
				.fb-cta-main-wrapper.${blockID} {
					${ctaPositionType !== 'default' ? `position: ${ctaPositionType};` : ''}	
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'left' && ctaHZLeftOffset.Tablet ? `left: ${ctaHZLeftOffset.Tablet}${ctaHZLeftOffsetUnits.Tablet};` : ''}
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'right' && ctaHZRightOffset.Tablet ? `right: ${ctaHZRightOffset.Tablet}${ctaHZRightOffsetUnits.Tablet};` : ''}
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'top' && ctaVRTopOffset.Tablet ? `top: ${ctaVRTopOffset.Tablet}${ctaVRTopOffsetUnits.Tablet};` : ''}
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'bottom' && ctaVRBottomOffset.Tablet ? `bottom: ${ctaVRBottomOffset.Tablet}${ctaVRBottomOffsetUnits.Tablet};` : ''}
					${globalZIndex.Tablet ? `z-index: ${globalZIndex.Desktop};` : ''}
				}
				.fb-cta-content-wrapper.${blockID} {
					${TabletPadding && globalPaddingTablet.top ? `padding: ${TabletPadding};` : ""}
					${TabletMargin && globalMarginTablet.top ? `margin: ${TabletMargin};` : ""}
					${BorderTabletWidth && globalBorderTablet.top ? `border-width: ${BorderTabletWidth};` : ""}
					${BorderRadiusTabletWidth && globalBorderRadiusTablet.top ? `border-radius: ${BorderRadiusTabletWidth} !important;` : "" }
				}
				.fb-cta-content-wrapper.${blockID} .fb-heading {
					${headingGlobalTypoSwitcher.fontSize === false && headingFontSize.Tablet && headingFontSizeUnits.Tablet ? `font-size: ${headingFontSize.Tablet}${headingFontSizeUnits.Tablet};` : ''}
					${headingGlobalTypoSwitcher.letterSpacing === false && headingLetterSpacing.Tablet && headingLetterSpacingUnits.Tablet ? `letter-spacing: ${headingLetterSpacing.Tablet}${headingLetterSpacingUnits.Tablet};` : ''}
					${headingGlobalTypoSwitcher.lineHeight === false && headingLineHeight.Tablet && headingLineHeightUnits.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
					${headingTabletPaddingWidth && headingTabPadding.top ? `padding: ${headingTabletPaddingWidth};` : ""}
					${headingTabletMarginWidth && headingTabMargin.top ? `margin: ${headingTabletMarginWidth};` : ""}
					${headingTabletBorderWidth && headingTabBorder.top ? `border-width: ${headingTabletBorderWidth};` : ""}
					${headingTabletBorderRadiusWidth && headingTabBorderRadius.top ? `border-radius: ${headingTabletBorderRadiusWidth};` : ""}
				}
				.fb-cta-content-wrapper.${blockID} .fb-description {
					${descTabletPaddingWidth && descTabPadding.top ? `padding: ${descTabletPaddingWidth};` : ""}
					${descTabletMarginWidth && descTabMargin.top ? `margin: ${descTabletMarginWidth};` : ""}
					${SubHeadingGlobalTypoSwitcher.fontSize === false && SubHeadingFontSize.Tablet && SubHeadingFontSizeUnits.Tablet ? `font-size: ${SubHeadingFontSize.Tablet}${SubHeadingFontSizeUnits.Tablet};` : ''}
					${SubHeadingGlobalTypoSwitcher.letterSpacing === false && SubHeadingLetterSpacing.Tablet && SubHeadingLetterSpacingUnits.Tablet ? `letter-spacing: ${SubHeadingLetterSpacing.Tablet}${SubHeadingLetterSpacingUnits.Tablet};` : ''}
					${SubHeadingGlobalTypoSwitcher.lineHeight === false && SubHeadingLineHeight.Tablet && SubHeadingLineHeightUnits.Tablet ? `line-height: ${SubHeadingLineHeight.Tablet}${SubHeadingLineHeightUnits.Tablet};` : ''}
				}
				
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper .fb-cta-button {
					${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Tablet && buttonFontSizeUnits.Tablet ? `font-size: ${buttonFontSize.Tablet}${buttonFontSizeUnits.Tablet};` : "" }
					${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Tablet && buttonLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonLetterSpacing.Tablet}${buttonLetterSpacingUnits.Tablet};` : "" }
					${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Tablet && buttonLineHeightUnits.Tablet ? `line-height: ${buttonLineHeight.Tablet}${buttonLineHeightUnits.Tablet};` : "" }
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
					${buttonOneTabletPadding && btnOneTabPadding.top ? `padding: ${buttonOneTabletPadding};` : ''}
					${btnOneTabletMarginWidth && btnOneTabMargin.top ? `margin: ${btnOneTabletMarginWidth};` : ''}
					${btnOneTabletBorderWidth && btnOneTabBorder.top ? `border-width: ${btnOneTabletBorderWidth};` : ""}
					${btnOneTabletBorderRadiusWidth && btnOneTabBorderRadius.top ? `border-radius: ${btnOneTabletBorderRadiusWidth};` : ""}
				}

				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper .fb-cta-button {
					${buttonTwoGlobalTypoSwitcher.fontSize === false && buttonTwoFontSize.Tablet && buttonTwoFontSizeUnits.Tablet ? `font-size: ${buttonTwoFontSize.Tablet}${buttonTwoFontSizeUnits.Tablet};` : "" }
					${buttonTwoGlobalTypoSwitcher.letterSpacing === false && buttonTwoLetterSpacing.Tablet && buttonTwoLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonTwoLetterSpacing.Tablet}${buttonTwoLetterSpacingUnits.Tablet};` : "" }
					${buttonTwoGlobalTypoSwitcher.lineHeight === false && buttonTwoLineHeight.Tablet && buttonTwoLineHeightUnits.Tablet ? `line-height: ${buttonTwoLineHeight.Tablet}${buttonTwoLineHeightUnits.Tablet};` : "" }
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
					${buttonTwoTabletPadding && btnTwoTabPadding.top ? `padding: ${buttonTwoTabletPadding};` : ''}
					${btnTwoTabletMarginWidth && btnTwoTabMargin.top ? `margin: ${btnTwoTabletMarginWidth};` : ''}
					${btnTwoTabletBorderWidthStyle && btnTwoTabBorder.top ? `border-width: ${btnTwoTabletBorderWidthStyle};` : ""}
					${btnTwoTabletBorderRadiusWidthStyle && btnTwoTabBorderRadius.top ? `border-radius: ${btnTwoTabletBorderRadiusWidthStyle};` : ""}
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
					${btnIconSize.Tablet && btnIconSizeUnits.Tablet ? `width: ${btnIconSize.Tablet}${btnIconSizeUnits.Tablet};` : ""}
					${btnIconRotate.Tablet ? `transform: rotate(${btnIconRotate.Tablet}deg);` : ""}
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
					${btnTwoIconSize.Tablet && btnTwoIconSizeUnits.Tablet ? `width: ${btnTwoIconSize.Tablet}${btnTwoIconSizeUnits.Tablet};` : ""}
					${btnTwoIconRotate.Tablet ? `transform: rotate(${btnTwoIconRotate.Tablet}deg);` : ""}
				}
			}
			@media only screen and (max-width: 767px) {
				.fb-cta-main-wrapper.${blockID} {
					${ctaPositionType !== 'default' ? `position: ${ctaPositionType};` : ''}
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'left' && ctaHZLeftOffset.Mobile ? `left: ${ctaHZLeftOffset.Mobile}${ctaHZLeftOffsetUnits.Mobile};` : ''}
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'right' && ctaHZRightOffset.Mobile ? `right: ${ctaHZRightOffset.Mobile}${ctaHZRightOffsetUnits.Mobile};` : ''}
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'top' && ctaVRTopOffset.Mobile ? `top: ${ctaVRTopOffset.Mobile}${ctaVRTopOffsetUnits.Mobile};` : ''}
					${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'bottom' && ctaVRBottomOffset.Mobile ? `bottom: ${ctaVRBottomOffset.Mobile}${ctaVRBottomOffsetUnits.Mobile};` : ''}
					${globalZIndex.Mobile ? `z-index: ${globalZIndex.Mobile};` : ''}
				}
				.fb-cta-content-wrapper.${blockID} {
					${MobilePadding && globalPaddingMobile.top ? `padding: ${MobilePadding};` : ""}
					${MobileMargin && globalMarginMobile.top ? `margin: ${MobileMargin};` : ""}
					${BorderMobileWidth && globalBorderMobile.top ? `border-width: ${BorderMobileWidth};` : ""}
					${BorderRadiusMobileWidth && globalBorderRadiusMobile.top ? `border-radius: ${BorderRadiusMobileWidth} !important;` : "" }
				}
				.fb-cta-content-wrapper.${blockID} .fb-heading {
					${headingGlobalTypoSwitcher.fontSize === false && headingFontSize.Mobile && headingFontSizeUnits.Mobile ? `font-size: ${headingFontSize.Mobile}${headingFontSizeUnits.Mobile};` : ''}
					${headingGlobalTypoSwitcher.letterSpacing === false && headingLetterSpacing.Mobile && headingLetterSpacingUnits.Mobile ? `letter-spacing: ${headingLetterSpacing.Mobile}${headingLetterSpacingUnits.Mobile};` : ''}
					${headingGlobalTypoSwitcher.lineHeight === false && headingLineHeight.Mobile && headingLineHeightUnits.Mobile ? `line-height: ${headingLineHeight.Mobile}${headingLineHeightUnits.Mobile};` : ''}
					${headingMobilePaddingWidth && headingMobilePadding.top ? `padding: ${headingMobilePaddingWidth};` : ""}
					${headingMobileMarginWidth && headingMobileMargin.top ? `margin: ${headingMobileMarginWidth};` : ""}
					${headingMobileBorderWidth && headingMobileBorder.top ? `border-width: ${headingMobileBorderWidth};` : ""}
					${headingMobileBorderRadiusWidth && headingMobileBorderRadius.top ? `border-radius: ${headingMobileBorderRadiusWidth};` : ""}
				}
				.fb-cta-content-wrapper.${blockID} .fb-description {
					${descMobilePaddingWidth && descMobilePadding.top ? `padding: ${descMobilePaddingWidth};` : ""}
					${descMobileMarginWidth && descMobileMargin.top ? `margin: ${descMobileMarginWidth};` : ""}
					${SubHeadingGlobalTypoSwitcher.fontSize === false && SubHeadingFontSize.Mobile && SubHeadingFontSizeUnits.Mobile ? `font-size: ${SubHeadingFontSize.Mobile}${SubHeadingFontSizeUnits.Mobile};` : ''}
					${SubHeadingGlobalTypoSwitcher.letterSpacing === false && SubHeadingLetterSpacing.Mobile && SubHeadingLetterSpacingUnits.Mobile ? `letter-spacing: ${SubHeadingLetterSpacing.Mobile}${SubHeadingLetterSpacingUnits.Mobile};` : ''}
					${SubHeadingGlobalTypoSwitcher.lineHeight === false && SubHeadingLineHeight.Mobile && SubHeadingLineHeightUnits.Mobile ? `line-height: ${SubHeadingLineHeight.Mobile}${SubHeadingLineHeightUnits.Mobile};` : ''}
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper .fb-cta-button {
					${buttonGlobalTypoSwitcher.fontSize === false && buttonFontSize.Mobile && buttonFontSizeUnits.Mobile ? `font-size: ${buttonFontSize.Mobile}${buttonFontSizeUnits.Mobile};` : "" }
					${buttonGlobalTypoSwitcher.letterSpacing === false && buttonLetterSpacing.Mobile && buttonLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonLetterSpacing.Mobile}${buttonLetterSpacingUnits.Mobile};` : "" }
					${buttonGlobalTypoSwitcher.lineHeight === false && buttonLineHeight.Mobile && buttonLineHeightUnits.Mobile ? `line-height: ${buttonLineHeight.Mobile}${buttonLineHeightUnits.Mobile};` : "" }
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
					${buttonOneMobilePadding && btnOneMobilePadding.top ? `padding: ${buttonOneMobilePadding};` : ''}
					${btnOneMobileMarginWidth && btnOneMobileMargin.top ? `margin: ${btnOneMobileMarginWidth};` : ''}
					${btnOneMobileBorderWidth && btnOneMobileBorder.top ? `border-width: ${btnOneMobileBorderWidth};` : ""}
					${btnOneMobileBorderRadiusWidth && btnOneMobileBorderRadius.top ? `border-radius: ${btnOneMobileBorderRadiusWidth};` : ""}
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper .fb-cta-button {
					${buttonTwoGlobalTypoSwitcher.fontSize === false && buttonTwoFontSize.Mobile && buttonTwoFontSizeUnits.Mobile ? `font-size: ${buttonTwoFontSize.Mobile}${buttonTwoFontSizeUnits.Mobile};` : "" }
					${buttonTwoGlobalTypoSwitcher.letterSpacing === false && buttonTwoLetterSpacing.Mobile && buttonTwoLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonTwoLetterSpacing.Mobile}${buttonTwoLetterSpacingUnits.Mobile};` : "" }
					${buttonTwoGlobalTypoSwitcher.lineHeight === false && buttonTwoLineHeight.Mobile && buttonTwoLineHeightUnits.Mobile ? `line-height: ${buttonTwoLineHeight.Mobile}${buttonTwoLineHeightUnits.Mobile};` : "" }
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
					${buttonTwoMobilePadding && btnTwoMobilePadding.top ? `padding: ${buttonTwoMobilePadding};` : ''}
					${btnTwoMobileMarginWidth && btnTwoMobileMargin.top ? `margin: ${btnTwoMobileMarginWidth};` : ''}
					${btnTwoMobileBorderWidthStyle && btnTwoMobileBorder.top ? `border-width: ${btnTwoMobileBorderWidthStyle};` : ""}
					${btnTwoMobileBorderRadiusWidthStyle && btnTwoMobileBorderRadius.top ? `border-radius: ${btnTwoMobileBorderRadiusWidthStyle};` : ""}
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
					${btnIconSize.Mobile && btnIconSizeUnits.Mobile ? `width: ${btnIconSize.Mobile}${btnIconSizeUnits.Mobile};` : ""}
					${btnIconRotate.Mobile ? `transform: rotate(${btnIconRotate.Mobile}deg);` : ""}
				}
				.fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
					${btnTwoIconSize.Mobile && btnTwoIconSizeUnits.Mobile ? `width: ${btnTwoIconSize.Mobile}${btnTwoIconSizeUnits.Mobile};` : ""}
					${btnTwoIconRotate.Mobile ? `transform: rotate(${btnTwoIconRotate.Mobile}deg);` : ""}
				}
			}
		`,
		[
			blockID,
			DesktopPadding,
			DesktopMargin,
			globalBorder,
			BorderDesktopWidth,
			BorderRadiusDesktopWidth,
			TabletPadding,
			MobilePadding,
			TabletMargin,
			MobileMargin,
			BorderTabletWidth,
			BorderMobileWidth,
			BorderRadiusTabletWidth,
			BorderRadiusMobileWidth,
			globalBorderColor,
			boxGlobalBoxShadowCssValue,
			ctaGlobalBackgroundType,
			ctaGlobalCustomGradientSwitcher,
			ctaGlobalCustomGradientInputValue,
			ctaGlobalGradientColor,
			ctaGlobalBackgroundImageUrl,
			ctaGlobalBackgroundImagePosition,
			ctaGlobalBackgroundImageAttachment,
			ctaGlobalBackgroundImageRepeat,
			ctaGlobalBackgroundImageSize,
			ctaGlobalClassicColor,
			hoverBackgroundType,
			hoverCustomGradientSwitcher,
			hoverCustomGradientInputValue,
			hoverGradientColor,
			hoverBackgroundImageUrl,
			hoverBackgroundImagePosition,
			hoverBackgroundImageAttachment,
			hoverBackgroundImageRepeat,
			hoverBackgroundImageSize,
			hoverClassicColor,
			globalBgColor,
			globalBgHoverColor,
			globalBorderHoverColor,
			infoBoxTabPadding,
			infoBoxTabMargin,
			infoBoxTabBorderWidth,
			infoBoxTabBorderRadiusWidth,
			infoBoxMobilePadding,
			infoBoxMobileMargin,
			infoBoxMobileBorderWidth,
			infoBoxMobileBorderRadiusWidth,
			headingColor,
			headingHoverColor,
			Heading_Background_Color,
			headingGlobalTypoSwitcher,
			headingGlobalTypographyData,
			headingGlobalTypoType,
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
			Heading_Border,
			headingBorderColor,
			headingBorderHoverColor,
			SubHeadingColor,
			SubHeadingGlobalTypoSwitcher,
			SubHeadingGlobalTypographyData,
			SubHeadingGlobalTypoType,
			SubHeadingFontFamily,
			SubHeadingFontSize,
			SubHeadingFontSizeUnits,
			SubHeadingFontWeight,
			SubHeadingFontStyle,
			SubHeadingTextTransform,
			SubHeadingTextDecoration,
			SubHeadingLetterSpacing,
			SubHeadingLetterSpacingUnits,
			SubHeadingLineHeight,
			SubHeadingLineHeightUnits,
			SubHeadingHoverColor,
			descTabMargin,
			descMarginUnits,
			descMobileMargin,
			buttonTextColor,
			buttonBgColor,
			buttonGlobalTypoSwitcher,
			buttonGlobalTypographyData,
			buttonGlobalTypoType,
			buttonFontFamily,
			buttonFontSize,
			buttonFontSizeUnits,
			buttonFontWeight,
			buttonFontStyle,
			buttonTextTransform,
			buttonTextDecoration,
			buttonLetterSpacing,
			buttonLetterSpacingUnits,
			buttonLineHeight,
			buttonLineHeightUnits,
			infoButtonBorder,
			infoButtonBorderColor,
			buttonTextHoverColor,
			buttonBgHoverColor,
			btnOneDesktopBorderWidth,
			btnOneTabletBorderWidth,
			btnOneMobileBorderWidth,
			btnOneDesktopBorderRadiusWidth,
			btnOneTabletBorderRadiusWidth,
			btnOneMobileBorderRadiusWidth,
			buttonTwoTextColor,
			buttonTwoBgColor,
			buttonTwoGlobalTypoSwitcher,
			buttonTwoGlobalTypographyData,
			buttonTwoGlobalTypoType,
			buttonTwoFontFamily,
			buttonTwoFontSize,
			buttonTwoFontSizeUnits,
			buttonTwoFontWeight,
			buttonTwoFontStyle,
			buttonTwoTextTransform,
			buttonTwoTextDecoration,
			buttonTwoLetterSpacing,
			buttonTwoLetterSpacingUnits,
			buttonTwoLineHeight,
			buttonTwoLineHeightUnits,
			buttonTwoDesktopPadding,
			btnTwoDesktopMarginWidth,
			btnTwoBorder,
			btnTwoBorderColor,
			btnTwoDesktopBorderWidthStyle,
			btnTwoDesktopBorderRadiusWidthStyle,
			buttonTwoTextHoverColor,
			buttonTwoBgHoverColor,
			buttonTwoTabletPadding,
			btnTwoTabletMarginWidth,
			btnTwoTabletBorderWidthStyle,
			btnTwoTabletBorderRadiusWidthStyle,
			buttonTwoMobilePadding,
			btnTwoMobileMarginWidth,
			btnTwoMobileBorderWidthStyle,
			btnTwoMobileBorderRadiusWidthStyle,
			btnIconSize,
			btnIconSizeUnits,
			btnIconColor,
			btnIconHoverColor,
			btnTwoIconSize,
			btnTwoIconSizeUnits,
			btnTwoIconColor,
			btnTwoIconHoverColor,
			headingDesktopPaddingWidth,
			headingTabletPaddingWidth,
			headingMobilePaddingWidth,
			headingDesktopMarginWidth,
			headingTabletMarginWidth,
			headingMobileMarginWidth,
			headingDesktopBorderWidth,
			headingTabletBorderWidth,
			headingMobileBorderWidth,
			headingDesktopBorderRadiusWidth,
			headingTabletBorderRadiusWidth,
			headingMobileBorderRadiusWidth,
			descDesktopPaddingWidth,
			descTabletPaddingWidth,
			descMobilePaddingWidth,
			descDesktopMarginWidth,
			descTabletMarginWidth,
			descMobileMarginWidth,
			buttonOneDesktopPadding,
			buttonOneTabletPadding,
			buttonOneMobilePadding,
			btnOneDesktopMarginWidth,
			btnOneTabletMarginWidth,
			btnOneMobileMarginWidth,
			btnOneDesktopBorderWidth,
			btnOneTabletBorderWidth,
			btnOneMobileBorderWidth,
			btnOneDesktopBorderRadiusWidth,
			btnOneTabletBorderRadiusWidth,
			btnOneMobileBorderRadiusWidth,
			globalZIndex,
			ctaOverflow,
			btnIconRotate,
			btnTwoIconRotate,
			globalBoxShadowSwitcher,
			globalBoxShadowValues,
			globalBoxShadowHoverValues,
			globalBoxShadowCssValue,
			globalHoverBoxShadowCssValue,

			// Position
			ctaPositionType,
			ctaHZOrientationType,
			ctaVROrientationType,
			ctaHZLeftOffset,
			ctaHZLeftOffsetUnits,
			ctaHZRightOffset,
			ctaHZRightOffsetUnits,
			ctaVRTopOffset,
			ctaVRTopOffsetUnits,
			ctaVRBottomOffset,
			ctaVRBottomOffsetUnits,
		],
	);

	const customCss = getCustomCss(ctaCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${ctaContentStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [ctaContentStyle, customCss]);

	const editorStyle = `${ctaContentStyle}${customCss}`.replace(/\s+/g, ' ').trim();

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
								name: "advance",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === "general" && (
									<>
										{/* Title Element */}
										<div className="fb-advanced-wrapper">
											<PanelBody
												title={__("Title", "frontis-block")}
												initialOpen={false}
											>
												
												<FB_AlignmentControl
													label={__("Title Alignment", "frontis-blocks")}
													globalAlignment={Alignment}
													setGlobalAlignment={(value) => setAttributes({ Alignment: value })}
												/>

												<FB_HtmlTagControl
													label={__("Title Tag", "frontis-blocks")}
													globalHtmlTag={headingTag}
													setGlobalHtmlTag={(value) => setAttributes({ headingTag: value })}
												/>
											
												<TextareaControl
													label={__("Title Text", "frontis-block")}
													className="fb-setting-text"
													value={Heading_Text}
													onChange={(value) =>
														setAttributes({ Heading_Text: value })
													}
													
												/>
											</PanelBody>
										</div>

										{/* Image control */}
										<div className="fb-advanced-wrapper">
											<PanelBody
												title={__("Description", "frontis-block")}
												initialOpen={false}
											>
												<ToggleControl
													label={__("Show Description", "frontis-block")}
													checked={descriptionSwitcher}
													onChange={(value) =>
														setAttributes({ descriptionSwitcher: value })
													}
												/>

												{descriptionSwitcher && (
													<>
														
														<FB_AlignmentControl
															label={__("Alignment", "frontis-blocks")}
															globalAlignment={descAlignment}
															setGlobalAlignment={(value) => setAttributes({ descAlignment: value })}
														/>

														<TextareaControl
															label={__("Sub Heading Text", "frontis-block")}
															value={Sub_Heading_Text}
															onChange={(value) =>
																setAttributes({ Sub_Heading_Text: value })
															}
															className="fb-sub-heading-text"
														/>
													</>
												)}
											</PanelBody>
										</div>

										{/*Button One*/}
										<div className="fb-cta-button-wrapper">
											<PanelBody
												title={__("Button One", "frontis-block")}
												initialOpen={false}
											>
												<ToggleControl
													label={__("Show Button", "frontis-block")}
													checked={ctaBtnOneSwitcher}
													onChange={(value) =>
														setAttributes({ ctaBtnOneSwitcher: value })
													}
												/>

												{ctaBtnOneSwitcher && (
													<>
														
														<FB_AlignmentControl
															label={__("Alignment", "frontis-blocks")}
															globalAlignment={buttonAlignment}
															setGlobalAlignment={(value) => setAttributes({ buttonAlignment: value })}
														/>
														<TextareaControl
															label={__("Button Text", "frontis-block")}
															value={info_Button_Text}
															onChange={(value) =>
																setAttributes({ info_Button_Text: value })
															}
															className="fb-cta-button-text"
														/>
														<ToggleControl
															label={__("Show Icon", "frontis-block")}
															checked={buttonIconSwitcher}
															onChange={(value) =>
																setAttributes({ buttonIconSwitcher: value })
															}
														/>
														{buttonIconSwitcher && (
															<>
																<BaseControl>
																	<FBIconPicker
																		value={btnIcon}
																		setIconHandler={buttonIconHandler}
																	/>
																</BaseControl>
																<SelectControl
																	label={__("Icon Position", "frontis-block")}
																	value={btnIconPosition}
																	options={ICON_POSITION}
																	onChange={(value) =>
																		setAttributes({ btnIconPosition: value })
																	}
																/>
															</>
														)}

														<BaseControl>
															<FB_UrlControl
																url={info_Button_Link}
																onChangeUrl={(value) =>
																	setAttributes({ info_Button_Link: value })
																}
																openInNewTab={btnOneTargetUrl}
																onChangeOpenInNewTab={(value) =>
																	setAttributes({ btnOneTargetUrl: value })
																}
															/>
														</BaseControl>
													</>
												)}
											</PanelBody>
										</div>
										{/*Button Two*/}
										<div className="fb-cta-button-wrapper">
											<PanelBody
												title={__("Button Two", "frontis-block")}
												initialOpen={false}
											>
												<ToggleControl
													label={__("Show Button", "frontis-block")}
													checked={btnTwoSwitcher}
													onChange={(value) =>
														setAttributes({ btnTwoSwitcher: value })
													}
												/>
												{btnTwoSwitcher && (
													<>
														<TextareaControl
															label={__("Button Text", "frontis-block")}
															value={btnTwoText}
															onChange={(value) =>
																setAttributes({ btnTwoText: value })
															}
															className="fb-cta-button-text"
														/>
														<ToggleControl
															label={__("Show Icon", "frontis-block")}
															checked={buttonTwoIconSwitcher}
															onChange={(value) =>
																setAttributes({ buttonTwoIconSwitcher: value })
															}
														/>
														{buttonTwoIconSwitcher && (
															<>
																<BaseControl>
																	<FBIconPicker
																		value={btnTwoIcon}
																		setIconHandler={buttonTwoIconHandler}
																	/>
																</BaseControl>
																<SelectControl
																	label={__("Icon Position", "frontis-block")}
																	value={btnTwoIconPosition}
																	options={ICON_POSITION}
																	onChange={(value) =>
																		setAttributes({ btnTwoIconPosition: value })
																	}
																/>
															</>
														)}

														<BaseControl>
															<FB_UrlControl
																url={btnTwoLink}
																onChangeUrl={(value) =>
																	setAttributes({ btnTwoLink: value })
																}
																openInNewTab={btnTwoTargetUrl}
																onChangeOpenInNewTab={(value) =>
																	setAttributes({ btnTwoTargetUrl: value })
																}
															/>
														</BaseControl>
													</>
												)}
											</PanelBody>
										</div>
									</>
								)}

								{tab.name === "styles" && (
									<>
										{/*Heading Style*/}
										<PanelBody
											title={__("Title", "frontis-block")}
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
														headingGlobalTypoSwitcher: value === 'default' ? {...headingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...headingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
													})
												}}

												fontFamily={headingFontFamily}
												onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontFamily: value && false} })}

												fontSize={headingFontSize}
												onChangeFontSize={(value) => setAttributes({ headingFontSize: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontSize: value && false} })}

												fontSizeUnits={headingFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

												fontWeight={headingFontWeight}
												onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontWeight: value && false} })}

												fontStyle={headingFontStyle}
												onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontStyle: value && false} })}

												textTransform={headingTextTransform}
												onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, textTransform: value && false} })}

												textDecoration={headingTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, textDecoration: value && false} })}

												letterSpacing={headingLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, letterSpacing: value && false} })}

												letterSpacingUnits={headingLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

												lineHeight={headingLineHeight}
												onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, lineHeight: value && false} })}

												lineHeightUnits={headingLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ headingLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
											
											<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={headingColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ headingColorSwitcher: value })}
                                            />

                                            {headingColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={headingColor}
                                                    setGlobalColor={(value) => setAttributes({ headingColor: value })}
                                                />
                                            )}

                                            {headingColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleHeadingPaddingUnitsHandler}
												spacingUnits={headingPaddingUnits}
												spacingDesktop={headingDesktopPadding}
												spacingTablet={headingTabPadding}
												spacingMobile={headingMobilePadding}
												handleSpacingUnitHandler={handleHeadingPaddingUnitChange}
												spacingCombineBtn={headingPaddingLink}
												spacingCombineBtnHandler={handleHeadingPaddingCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleHeadingMarginUnitsHandler}
												spacingUnits={headingMarginUnits}
												spacingDesktop={headingDesktopMargin}
												spacingTablet={headingTabMargin}
												spacingMobile={headingMobileMargin}
												handleSpacingUnitHandler={handleHeadingMarginUnitChange}
												spacingCombineBtn={headingMarginLink}
												spacingCombineBtnHandler={handleHeadingMarginCombineBtn}
												setAttributes={setAttributes}
											/>
											
											<SelectControl
												label={__("Border Style", "frontis-block")}
												value={Heading_Border}
												options={BORDER_STYLES}
												onChange={(value) =>
													setAttributes({ Heading_Border: value })
												}
											/>

											<FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={headingBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ headingBorderColorSwitcher: value })}
                                            />

                                            {headingBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={headingBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ headingBorderColor: value })}
                                                />
                                            )}

                                            {headingBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingBorderHoverColor: value })}
                                                />
                                            )}

											<FB_Spacing
												label={__("Border Width", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handleHeadingBorderUnitsHandler}
												spacingUnits={headingBorderUnits}
												spacingDesktop={headingDesktopBorder}
												spacingTablet={headingTabBorder}
												spacingMobile={headingMobileBorder}
												handleSpacingUnitHandler={handleHeadingBorderUnitChange}
												spacingCombineBtn={headingBorderLink}
												spacingCombineBtnHandler={handleHeadingBorderCombineBtn}
												setAttributes={setAttributes}
											/>
											
											<FB_Spacing
											label={__("Border Radius", "frontis-blocks")}
											deviceType={deviceType}
											spacingUnitsHandler={handleHeadingBorderRadiusUnitsHandler}
											spacingUnits={headingBorderRadiusUnits}
											spacingDesktop={headingDesktopBorderRadius}
											spacingTablet={headingTabBorderRadius}
											spacingMobile={headingMobileBorderRadius}
											handleSpacingUnitHandler={handleHeadingBorderRadiusUnitChange}
											spacingCombineBtn={headingBorderRadiusLink}
											spacingCombineBtnHandler={handleHeadingBorderRadiusCombineBtn}
											setAttributes={setAttributes}
											/>

										</PanelBody>
										{/*Description Style*/}
										{descriptionSwitcher && (
											<PanelBody
												title={__("Description", "frontis-block")}
												initialOpen={false}
												className="fb-cta-desc-setting-wrapper"
											>
												{/* Typography */}
												<FB_TypographyControl
													globalTypoControlActive={true}
													globalTypoSwitcher={SubHeadingGlobalTypoSwitcher}
													storeGlobalTypographyData={(value) => setAttributes({ SubHeadingGlobalTypographyData: value })}

													globalTypoType={SubHeadingGlobalTypoType}
													onChangeGlobalTypoType={(value) => {
														setAttributes({ 
															SubHeadingGlobalTypoType: value, 
															SubHeadingGlobalTypoSwitcher: value === 'default' ? {...SubHeadingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...SubHeadingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
														})
													}}

													fontFamily={SubHeadingFontFamily}
													onChangeFontFamily={(value) => setAttributes({ SubHeadingFontFamily: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, fontFamily: value && false} })}

													fontSize={SubHeadingFontSize}
													onChangeFontSize={(value) => setAttributes({ SubHeadingFontSize: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, fontSize: value && false} })}

													fontSizeUnits={SubHeadingFontSizeUnits}
													onChangeFontSizeUnit={(value) => setAttributes({ SubHeadingFontSizeUnits: value })}

													fontWeight={SubHeadingFontWeight}
													onChangeFontWeight={(value) => setAttributes({ SubHeadingFontWeight: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, fontWeight: value && false} })}

													fontStyle={SubHeadingFontStyle}
													onChangeFontStyle={(value) => setAttributes({ SubHeadingFontStyle: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, fontStyle: value && false} })}

													textTransform={SubHeadingTextTransform}
													onChangeTextTransform={(value) => setAttributes({ SubHeadingTextTransform: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, textTransform: value && false} })}

													textDecoration={SubHeadingTextDecoration}
													onChangeTextDecoration={(value) => setAttributes({ SubHeadingTextDecoration: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, textDecoration: value && false} })}

													letterSpacing={SubHeadingLetterSpacing}
													onChangeLetterSpacing={(value) => setAttributes({ SubHeadingLetterSpacing: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, letterSpacing: value && false} })}

													letterSpacingUnits={SubHeadingLetterSpacingUnits}
													onChangeLetterSpacingUnit={(value) => setAttributes({ SubHeadingLetterSpacingUnits: value })}

													lineHeight={SubHeadingLineHeight}
													onChangeLineHeight={(value) => setAttributes({ SubHeadingLineHeight: value, SubHeadingGlobalTypoSwitcher: {...SubHeadingGlobalTypoSwitcher, lineHeight: value && false} })}

													lineHeightUnits={SubHeadingLineHeightUnits}
													onChangeLineHeightUnit={(value) => setAttributes({ SubHeadingLineHeightUnits: value })}

													deviceType={deviceType}
													setAttributes={setAttributes}
												/>
												{/*Color*/}
												
												<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={SubHeadingColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ SubHeadingColorSwitcher: value })}
												/>

												{SubHeadingColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={SubHeadingColor}
														setGlobalColor={(value) => setAttributes({ SubHeadingColor: value })}
													/>
												)}

												{SubHeadingColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={SubHeadingHoverColor}
														setGlobalColor={(value) => setAttributes({ SubHeadingHoverColor: value })}
													/>
												)}
												<FB_Spacing
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleDescPaddingUnitsHandler}
													spacingUnits={descPaddingUnits}
													spacingDesktop={descDesktopPadding}
													spacingTablet={descTabPadding}
													spacingMobile={descMobilePadding}
													handleSpacingUnitHandler={handleDescPaddingUnitChange}
													spacingCombineBtn={descPaddingLink}
													spacingCombineBtnHandler={handleDescPaddingCombineBtn}
													setAttributes={setAttributes}
												/>
												<FB_Spacing
													label={__("Margin", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleDescMarginUnitsHandler}
													spacingUnits={descMarginUnits}
													spacingDesktop={descDesktopMargin}
													spacingTablet={descTabMargin}
													spacingMobile={descMobileMargin}
													handleSpacingUnitHandler={handleDescMarginUnitChange}
													spacingCombineBtn={descMarginLink}
													spacingCombineBtnHandler={handleDescMarginCombineBtn}
													setAttributes={setAttributes}
												/>
											</PanelBody>
										)}

										{/*Button One Style*/}
										{ctaBtnOneSwitcher && (
											<PanelBody
												title={__("Button One", "frontis-block")}
												className="fb-cta-button-setting-wrapper"
												initialOpen={false}
											>
												<FB_TypographyControl
													globalTypoControlActive={true}
													globalTypoSwitcher={buttonGlobalTypoSwitcher}
													storeGlobalTypographyData={(value) => setAttributes({ buttonGlobalTypographyData: value })}

													globalTypoType={buttonGlobalTypoType}
													onChangeGlobalTypoType={(value) => {
														setAttributes({ 
															buttonGlobalTypoType: value, 
															buttonGlobalTypoSwitcher: value === 'default' ? {...buttonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...buttonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
														})
													}}

													fontFamily={buttonFontFamily}
													onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontFamily: value && false} })}

													fontSize={buttonFontSize}
													onChangeFontSize={(value) => setAttributes({ buttonFontSize: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontSize: value && false} })}

													fontSizeUnits={buttonFontSizeUnits}
													onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

													fontWeight={buttonFontWeight}
													onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontWeight: value && false} })}

													fontStyle={buttonFontStyle}
													onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, fontStyle: value && false} })}

													textTransform={buttonTextTransform}
													onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, textTransform: value && false} })}

													textDecoration={buttonTextDecoration}
													onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, textDecoration: value && false} })}

													letterSpacing={buttonLetterSpacing}
													onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, letterSpacing: value && false} })}

													letterSpacingUnits={buttonLetterSpacingUnits}
													onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

													lineHeight={buttonLineHeight}
													onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value, buttonGlobalTypoSwitcher: {...buttonGlobalTypoSwitcher, lineHeight: value && false} })}

													lineHeightUnits={buttonLineHeightUnits}
													onChangeLineHeightUnit={(value) => setAttributes({ buttonLineHeightUnits: value })}

													deviceType={deviceType}
													setAttributes={setAttributes}
												/>

												{/*Color*/}
												<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={buttonColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ buttonColorSwitcher: value })}
												/>

												{buttonColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={buttonTextColor}
														setGlobalColor={(value) => setAttributes({ buttonTextColor: value })}
													/>
												)}

												{buttonColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={buttonTextHoverColor}
														setGlobalColor={(value) => setAttributes({ buttonTextHoverColor: value })}
													/>
												)}

												{/* Start Button Bg Color*/}
												<FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={buttonBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ buttonBgColorSwitcher: value })}
												/>

												{buttonBgColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={buttonBgColor}
														setGlobalColor={(value) => setAttributes({ buttonBgColor: value })}
													/>
												)}

												{buttonBgColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={buttonBgHoverColor}
														setGlobalColor={(value) => setAttributes({ buttonBgHoverColor: value })}
													/>
												)}

												{/* Button Icon color */}
												{buttonIconSwitcher && (
													<>
														{/* Start Icon Color*/}
														<FB_SwitcherControl
														label={__("Icon Color", "frontis-blocks")}
														globalSwitcher={btnIconColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ btnIconColorSwitcher: value })}
														/>

														{btnIconColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={btnIconColor}
																setGlobalColor={(value) => setAttributes({ btnIconColor: value })}
															/>
														)}

														{btnIconColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={btnIconHoverColor}
																setGlobalColor={(value) => setAttributes({ btnIconHoverColor: value })}
															/>
														)}
														<FB_Range
														min={0}
														max={360}
														label={__("Rotate Icon", "frontis-blocks")}
														rangeValue={btnIconRotate}
														onChangeHandler={(value) => setAttributes({ btnIconRotate: value === 0 ? undefined : value })}
														deviceType={deviceType}
														setAttributes={setAttributes}
														rangeStep={1}
														resetFallbackValue={""}
														isRangeUnit={false}
														/>
													</>
												)}
												
												<FB_Spacing
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={ handleButtonOnePaddingUnitsHandler }
													spacingUnits={btnOnePaddingUnits}
													spacingDesktop={btnOneDesktopPadding}
													spacingTablet={btnOneTabPadding}
													spacingMobile={btnOneMobilePadding}
													handleSpacingUnitHandler={ handleButtonOnePaddingUnitChange }
													spacingCombineBtn={btnOnePaddingLink}
													spacingCombineBtnHandler={ handleButtonOnePaddingCombineBtn }
													setAttributes={setAttributes}
												/>
												<FB_Spacing
													label={__("Margin", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={btnOneMarginUnitsHandler}
													spacingUnits={btnOneMarginUnits}
													spacingDesktop={btnOneDesktopMargin}
													spacingTablet={btnOneTabMargin}
													spacingMobile={btnOneMobileMargin}
													handleSpacingUnitHandler={btnOneMarginUnitsChange}
													spacingCombineBtn={btnOneMarginLink}
													spacingCombineBtnHandler={btnOneMarginLinkBtn}
													setAttributes={setAttributes}
												/>

												{/* Border Width */}
												<SelectControl
													label={__("Border Style", "frontis-block")}
													value={infoButtonBorder}
													options={BORDER_STYLES}
													onChange={(value) =>
														setAttributes({ infoButtonBorder: value })
													}
												/>

												<FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={infoButtonBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ infoButtonBorderColorSwitcher: value })}
												/>

												{infoButtonBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={infoButtonBorderColor}
														setGlobalColor={(value) => setAttributes({ infoButtonBorderColor: value })}
													/>
												)}

												{infoButtonBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={infoButtonHoverBorderColor}
														setGlobalColor={(value) => setAttributes({ infoButtonHoverBorderColor: value })}
													/>
												)}

												<FB_Spacing
													label={__("Border Width", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleButtonOneBorderUnitsHandler}
													spacingUnits={btnOneBorderUnits}
													spacingDesktop={btnOneDesktopBorder}
													spacingTablet={btnOneTabBorder}
													spacingMobile={btnOneMobileBorder}
													handleSpacingUnitHandler={handleButtonOneBorderUnitChange}
													spacingCombineBtn={btnOneBorderLink}
													spacingCombineBtnHandler={handleButtonOneBorderCombineBtn}
													setAttributes={setAttributes}
												/>

												<FB_Spacing
													label={__("Border Radius", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={handleButtonOneBorderRadiusUnitsHandler}
													spacingUnits={btnOneBorderRadiusUnits}
													spacingDesktop={btnOneDesktopBorderRadius}
													spacingTablet={btnOneTabBorderRadius}
													spacingMobile={btnOneMobileBorderRadius}
													handleSpacingUnitHandler={handleButtonOneBorderRadiusUnitChange}
													spacingCombineBtn={btnOneBorderRadiusLink}
													spacingCombineBtnHandler={handleButtonOneBorderRadiusCombineBtn}
													setAttributes={setAttributes}
												/>

											</PanelBody>
										)}

										{/* Button Two Style */}
										{btnTwoSwitcher && (
											<PanelBody
												title={__("Button Two", "frontis-blocks")}
												initialOpen={false}
											>
												<FB_TypographyControl
													globalTypoControlActive={true}
													globalTypoSwitcher={buttonTwoGlobalTypoSwitcher}
													storeGlobalTypographyData={(value) => setAttributes({ buttonTwoGlobalTypographyData: value })}

													globalTypoType={buttonTwoGlobalTypoType}
													onChangeGlobalTypoType={(value) => {
														setAttributes({ 
															buttonTwoGlobalTypoType: value, 
															buttonTwoGlobalTypoSwitcher: value === 'default' ? {...buttonTwoGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...buttonTwoGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
														})
													}}

													fontFamily={buttonTwoFontFamily}
													onChangeFontFamily={(value) => setAttributes({ buttonTwoFontFamily: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, fontFamily: value && false} })}

													fontSize={buttonTwoFontSize}
													onChangeFontSize={(value) => setAttributes({ buttonTwoFontSize: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, fontSize: value && false} })}

													fontSizeUnits={buttonTwoFontSizeUnits}
													onChangeFontSizeUnit={(value) => setAttributes({ buttonTwoFontSizeUnits: value })}

													fontWeight={buttonTwoFontWeight}
													onChangeFontWeight={(value) => setAttributes({ buttonTwoFontWeight: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, fontWeight: value && false} })}

													fontStyle={buttonTwoFontStyle}
													onChangeFontStyle={(value) => setAttributes({ buttonTwoFontStyle: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, fontStyle: value && false} })}

													textTransform={buttonTwoTextTransform}
													onChangeTextTransform={(value) => setAttributes({ buttonTwoTextTransform: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, textTransform: value && false} })}

													textDecoration={buttonTwoTextDecoration}
													onChangeTextDecoration={(value) => setAttributes({ buttonTwoTextDecoration: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, textDecoration: value && false} })}

													letterSpacing={buttonTwoLetterSpacing}
													onChangeLetterSpacing={(value) => setAttributes({ buttonTwoLetterSpacing: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, letterSpacing: value && false} })}

													letterSpacingUnits={buttonTwoLetterSpacingUnits}
													onChangeLetterSpacingUnit={(value) => setAttributes({ buttonTwoLetterSpacingUnits: value })}

													lineHeight={buttonTwoLineHeight}
													onChangeLineHeight={(value) => setAttributes({ buttonTwoLineHeight: value, buttonTwoGlobalTypoSwitcher: {...buttonTwoGlobalTypoSwitcher, lineHeight: value && false} })}

													lineHeightUnits={buttonTwoLineHeightUnits}
													onChangeLineHeightUnit={(value) => setAttributes({ buttonTwoLineHeightUnits: value })}

													deviceType={deviceType}
													setAttributes={setAttributes}
												/>
												
												<FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={buttonTwoColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ buttonTwoColorSwitcher: value })}
												/>

												{buttonTwoColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={buttonTwoTextColor}
														setGlobalColor={(value) => setAttributes({ buttonTwoTextColor: value })}
													/>
												)}

												{buttonTwoColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={buttonTwoTextHoverColor}
														setGlobalColor={(value) => setAttributes({ buttonTwoTextHoverColor: value })}
													/>
												)}
												
												<FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={buttonTwoBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ buttonTwoBgColorSwitcher: value })}
												/>

												{buttonTwoBgColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={buttonTwoBgColor}
														setGlobalColor={(value) => setAttributes({ buttonTwoBgColor: value })}
													/>
												)}

												{buttonTwoBgColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={buttonTwoBgHoverColor}
														setGlobalColor={(value) => setAttributes({ buttonTwoBgHoverColor: value })}
													/>
												)}

												{buttonTwoIconSwitcher &&(
													<>
														<FB_SwitcherControl
														label={__("Icon Color", "frontis-blocks")}
														globalSwitcher={btnTwoIconColorSwitcher}
														setGlobalSwitcher={(value) => setAttributes({ btnTwoIconColorSwitcher: value })}
														/>

														{btnTwoIconColorSwitcher === 'normal' && (
															<FB_ColorControl
																label={__("Normal Color", "frontis-blocks")}
																globalColor={btnTwoIconColor}
																setGlobalColor={(value) => setAttributes({ btnTwoIconColor: value })}
															/>
														)}

														{btnTwoIconColorSwitcher === 'hover' && (
															<FB_ColorControl
																label={__("Hover Color", "frontis-blocks")}
																globalColor={btnTwoIconHoverColor}
																setGlobalColor={(value) => setAttributes({ btnTwoIconHoverColor: value })}
															/>
														)}

														<FB_Range
															min={0}
															max={360}
															label={__("Rotate Icon", "frontis-blocks")}
															rangeValue={btnTwoIconRotate}
															onChangeHandler={(value) => setAttributes({ btnTwoIconRotate: value === 0 ? undefined : value })}
															deviceType={deviceType}
															setAttributes={setAttributes}
															rangeStep={1}
															resetFallbackValue={""}
															isRangeUnit={false}
														/>
													</>
												)}
												
												<FB_Spacing
													label={__("Padding", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={ handleButtonTwoPaddingUnitsHandler }
													spacingUnits={btnTwoPaddingUnits}
													spacingDesktop={btnTwoDesktopPadding}
													spacingTablet={btnTwoTabPadding}
													spacingMobile={btnTwoMobilePadding}
													handleSpacingUnitHandler={ handleButtonTwoPaddingUnitChange }
													spacingCombineBtn={btnTwoPaddingLink}
													spacingCombineBtnHandler={ handleButtonTwoPaddingCombineBtn }
													setAttributes={setAttributes}
												/>
												<FB_Spacing
													label={__("Margin", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={btnTwoMarginUnitsHandler}
													spacingUnits={btnTwoMarginUnits}
													spacingDesktop={btnTwoDesktopMargin}
													spacingTablet={btnTwoTabMargin}
													spacingMobile={btnTwoMobileMargin}
													handleSpacingUnitHandler={btnTwoMarginUnitsChange}
													spacingCombineBtn={btnTwoMarginLink}
													spacingCombineBtnHandler={btnTwoMarginLinkBtn}
													setAttributes={setAttributes}
												/>
												<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={btnTwoBorder}
													options={BORDER_STYLES}
													onChange={(value) =>
														setAttributes({ btnTwoBorder: value })
													}
												/>
												
												<FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={btnTwoBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ btnTwoBorderColorSwitcher: value })}
												/>

												{btnTwoBorderColorSwitcher === 'normal' && (
													<FB_ColorControl
														label={__("Normal Color", "frontis-blocks")}
														globalColor={btnTwoBorderColor}
														setGlobalColor={(value) => setAttributes({ btnTwoBorderColor: value })}
													/>
												)}

												{btnTwoBorderColorSwitcher === 'hover' && (
													<FB_ColorControl
														label={__("Hover Color", "frontis-blocks")}
														globalColor={btnTwoHoverBorderColor}
														setGlobalColor={(value) => setAttributes({ btnTwoHoverBorderColor: value })}
													/>
												)}

												<FB_Spacing
													label={__("Border", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={btnTwoBorderUnitsHandler}
													spacingUnits={btnTwoBorderUnits}
													spacingDesktop={btnTwoDesktopBorder}
													spacingTablet={btnTwoTabBorder}
													spacingMobile={btnTwoMobileBorder}
													handleSpacingUnitHandler={btnTwoBorderUnitsChange}
													spacingCombineBtn={btnTwoBorderLink}
													spacingCombineBtnHandler={btnTwoBorderLinkBtn}
													setAttributes={setAttributes}
												/>
												<FB_Spacing
													label={__("Border Radius", "frontis-blocks")}
													deviceType={deviceType}
													spacingUnitsHandler={btnTwoBorderRadiusUnitsHandler}
													spacingUnits={btnTwoBorderRadiusUnits}
													spacingDesktop={btnTwoDesktopBorderRadius}
													spacingTablet={btnTwoTabBorderRadius}
													spacingMobile={btnTwoMobileBorderRadius}
													handleSpacingUnitHandler={
														btnTwoBorderRadiusUnitsChange
													}
													spacingCombineBtn={btnTwoBorderRadiusLink}
													spacingCombineBtnHandler={btnTwoBorderRadiusLinkBtn}
													setAttributes={setAttributes}
												/>
											</PanelBody>
										)}
									</>
								)}
								{tab.name === "advance" && (
									<>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Z Index", "frontis-blocks")}
													initialOpen={true}
													className="fb-setting-z-index-header"
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
                                                        value={ctaOverflow}
                                                        options={OVERFLOW_OP}
                                                        onChange={(value) => setAttributes({ ctaOverflow: value })}
                                                    />

													<FB_PositionControl
														deviceType={deviceType}
														positionType={ctaPositionType}
														setPositionType={(value) => setAttributes({ ctaPositionType: value })}
																										
														HZOrientationType={ctaHZOrientationType}
														setHZOrientationType={(value) =>
															setAttributes({ ctaHZOrientationType: value })
														}
														VROrientationType={ctaVROrientationType}
														setVROrientationType={(value) =>
															setAttributes({ ctaVROrientationType: value })
														}
																											
														HZLeftOffset={ctaHZLeftOffset}
														setHZLeftOffset={(value) => setAttributes({ ctaHZLeftOffset: value })}
														HZLeftOffsetUnits={ctaHZLeftOffsetUnits}
														setHZLeftOffsetUnits={(value) => setAttributes({ ctaHZLeftOffsetUnits: value })}
														HZRightOffset={ctaHZRightOffset}
														setHZRightOffset={(value) => setAttributes({ ctaHZRightOffset: value })}
														HZRightOffsetUnits={ctaHZRightOffsetUnits}
														setHZRightOffsetUnits={(value) => setAttributes({ ctaHZRightOffsetUnits: value })}
																										
														VRTopOffset={ctaVRTopOffset}
														setVRTopOffset={(value) => setAttributes({ ctaVRTopOffset: value })}
														VRTopOffsetUnits={ctaVRTopOffsetUnits}
														setVRTopOffsetUnits={(value) => setAttributes({ ctaVRTopOffsetUnits: value })}
														VRBottomOffset={ctaVRBottomOffset}
														setVRBottomOffset={(value) => setAttributes({ ctaVRBottomOffset: value })}
														VRBottomOffsetUnits={ctaVRBottomOffsetUnits}
														setVRBottomOffsetUnits={(value) => setAttributes({ ctaVRBottomOffsetUnits: value })}

														setAttributes={setAttributes}
													/>

													<FB_InputControl
														label={__("CSS ID", "frontis-blocks")}
														value={ctaGlobalWraperID}
														onChangeValue={(value) => setAttributes({ ctaGlobalWraperID: value })}
														helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
													/>

													<FB_InputControl
														label={__("CSS Class", "frontis-blocks")}
														value={ctaGlobalWraperClass}
														onChangeValue={(value) => setAttributes({ ctaGlobalWraperClass: value })}
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
														setBgColorSwitcher={(value) =>
															setAttributes({ testBgColorSwitcher: value })
														}
														normalBackgroundType={ctaGlobalBackgroundType}
														setNormalBackgroundType={(value) =>
															setAttributes({ ctaGlobalBackgroundType: value })
														}
														normalClassicColor={ctaGlobalClassicColor}
														setNormalClassicColor={(value) =>
															setAttributes({ ctaGlobalClassicColor: value })
														}
														normalGradientColor={ctaGlobalGradientColor}
														setNormalGradientColor={(value) =>
															setAttributes({ ctaGlobalGradientColor: value })
														}
														normalCustomGradientSwitcher={
															ctaGlobalCustomGradientSwitcher
														}
														setNormalCustomGradientSwitcher={(value) =>
															setAttributes({
																ctaGlobalCustomGradientSwitcher: value,
															})
														}
														normalCustomGradientInputValue={
															ctaGlobalCustomGradientInputValue
														}
														setNormalCustomGradientInputValue={(value) =>
															setAttributes({
																ctaGlobalCustomGradientInputValue: value,
															})
														}
														normalBackgroundImageUrl={ctaGlobalBackgroundImageUrl}
														setNormalBackgroundImageUrl={(value) =>
															setAttributes({ ctaGlobalBackgroundImageUrl: value })
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
															ctaGlobalBackgroundImagePosition
														}
														setNormalBackgroundImagePosition={(value) =>
															setAttributes({
																ctaGlobalBackgroundImagePosition: value,
															})
														}
														normalBackgroundImageAttachment={
															ctaGlobalBackgroundImageAttachment
														}
														setNormalBackgroundImageAttachment={(value) =>
															setAttributes({
																ctaGlobalBackgroundImageAttachment: value,
															})
														}
														normalBackgroundImageRepeat={
															ctaGlobalBackgroundImageRepeat
														}
														setNormalBackgroundImageRepeat={(value) =>
															setAttributes({
																ctaGlobalBackgroundImageRepeat: value,
															})
														}
														normalBackgroundImageSize={ctaGlobalBackgroundImageSize}
														setNormalBackgroundImageSize={(value) =>
															setAttributes({ ctaGlobalBackgroundImageSize: value })
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

													<FB_SwitcherControl
													label={__("Border Color", "frontis-blocks")}
													globalSwitcher={globalBorderColorSwitcher}
													setGlobalSwitcher={(value) => setAttributes({ globalBorderColorSwitcher: value })}
													/>

													{globalBorderColorSwitcher === 'normal' && (
														<FB_ColorControl
															label={__("Normal Color", "frontis-blocks")}
															globalColor={globalBorderColor}
															setGlobalColor={(value) => setAttributes({ globalBorderColor: value })}
														/>
													)}

													{globalBorderColorSwitcher === 'hover' && (
														<FB_ColorControl
															label={__("Hover Color", "frontis-blocks")}
															globalColor={globalBorderHoverColor}
															setGlobalColor={(value) => setAttributes({ globalBorderHoverColor: value })}
														/>
													)}
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
													<FB_SwitcherControl
                                                    label={__("Box Shadow", "frontis-blocks")}
                                                    globalSwitcher={globalBoxShadowSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ globalBoxShadowSwitcher: value })}
													/>

													{globalBoxShadowSwitcher === 'normal' && (
														<FB_BoxShadowControl
															label={__("Normal Shadow", "frontis-blocks")}
															onBoxShadowChange={(value) => setAttributes({ globalBoxShadowValues: value })}
															initialShadowValue={globalBoxShadowValues}
															onBoxShadowStyleChange={(value) => setAttributes({ globalBoxShadowCssValue: value })}
														/>
													)}

													{globalBoxShadowSwitcher === 'hover' && (
														<FB_BoxShadowControl
															label={__("Hover Shadow", "frontis-blocks")}
															onBoxShadowChange={(value) => setAttributes({ globalBoxShadowHoverValues: value })}
															initialShadowValue={globalBoxShadowHoverValues}
															onBoxShadowStyleChange={(value) => setAttributes({ globalHoverBoxShadowCssValue: value })}
														/>
													)}
												</PanelBody>

												<PanelBody
													title={__("Responsive Control", "frontis-blocks")}
													initialOpen={false}
													className="fb-setting-responsive-control-wrapper"
												>
													<FB_VisibilityControl
                                                        desktopValue={ctaDesktopSwitcher}
                                                        setDesktopValue={(value) => setAttributes({ ctaDesktopSwitcher: value })}

                                                        tabletValue={ctaTabletSwitcher}
                                                        setTabletValue={(value) => setAttributes({ ctaTabletSwitcher: value })}

                                                        mobileValue={ctaMobileSwitcher}
                                                        setMobileValue={(value) => setAttributes({ ctaMobileSwitcher: value })}
                                                    />
												</PanelBody>

												<PanelBody
													title={__("Custom CSS", "frontis-blocks")}
													initialOpen={false}
												>
													<FB_CustomCSSEditor  
														value={ctaCustomCSS} 
														onChangeValue={(value) => setAttributes({ ctaCustomCSS: value })}
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
