import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	SelectControl,
	PanelBody,
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
} from '@Constants/fbConstants';

import { useEffect, memo } from "@wordpress/element";
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
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';

const Inspector = ({ attributes, setAttributes }) => {
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
		SubHeadingGlobalTypoOption,
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
		buttonGlobalTypoOption,
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
		btnFrontendIcon,
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
		btnTwoFrontendIcon,
		btnTwoIconSize,
		btnTwoIconSizeUnits,
		btnTwoIconColorSwitcher,
		btnTwoIconColor,
		btnTwoIconHoverColor,
		btnTwoIconPosition,
		buttonTwoGlobalTypoSwitcher,
		buttonTwoGlobalTypographyData,
		buttonTwoGlobalTypoType,
		buttonTwoGlobalTypoOption,
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

		/** Start Dynamic Title Text */
		dynamicTitleEnabled,
		dynamicTitleSource,
		dynamicTitlePostId,
		dynamicTitlePostType,
		dynamicTitlePostLabel,
		dynamicTitleField,
		dynamicTitleFeaturedImageField,

		dynamicTitleDateType,
		dynamicTitleDateFormat,

		dynamicTitleTimeType,
		dynamicTitleTimeFormat,

		dynamicTitleCommentsZeroText,
		dynamicTitleCommentsOneText,
		dynamicTitleCommentsManyText,

		dynamicTitleTermsTaxonomy,
		dynamicTitleTermsSeparator,
		dynamicTitleEnableLink,
		dynamicTitleLinkSource,
		/** End Dynamic Title Text */

		/** Start Dynamic Description Text */
		dynamicDescriptionEnabled,
		dynamicDescriptionSource,
		dynamicDescriptionPostId,
		dynamicDescriptionPostType,
		dynamicDescriptionPostLabel,
		dynamicDescriptionField,
		dynamicDescriptionFeaturedImageField,

		dynamicDescriptionDateType,
		dynamicDescriptionDateFormat,

		dynamicDescriptionTimeType,
		dynamicDescriptionTimeFormat,

		dynamicDescriptionCommentsZeroText,
		dynamicDescriptionCommentsOneText,
		dynamicDescriptionCommentsManyText,

		dynamicDescriptionTermsTaxonomy,
		dynamicDescriptionTermsSeparator,
		dynamicDescriptionEnableLink,
		dynamicDescriptionLinkSource,
		/** End Dynamic Description Text */

		/** Start Dynamic Btn One Text */
		dynamicBtnOneEnabled,
		dynamicBtnOneSource,
		dynamicBtnOnePostId,
		dynamicBtnOnePostType,
		dynamicBtnOnePostLabel,
		dynamicBtnOneField,
		dynamicBtnOneFeaturedImageField,

		dynamicBtnOneDateType,
		dynamicBtnOneDateFormat,

		dynamicBtnOneTimeType,
		dynamicBtnOneTimeFormat,

		dynamicBtnOneCommentsZeroText,
		dynamicBtnOneCommentsOneText,
		dynamicBtnOneCommentsManyText,

		dynamicBtnOneTermsTaxonomy,
		dynamicBtnOneTermsSeparator,
		dynamicBtnOneEnableLink,
		dynamicBtnOneLinkSource,
		/** End Dynamic Btn One Text */

		/** Start Dynamic Btn Two Text */
		dynamicBtnTwoEnabled,
		dynamicBtnTwoSource,
		dynamicBtnTwoPostId,
		dynamicBtnTwoPostType,
		dynamicBtnTwoPostLabel,
		dynamicBtnTwoField,
		dynamicBtnTwoFeaturedImageField,

		dynamicBtnTwoDateType,
		dynamicBtnTwoDateFormat,

		dynamicBtnTwoTimeType,
		dynamicBtnTwoTimeFormat,

		dynamicBtnTwoCommentsZeroText,
		dynamicBtnTwoCommentsOneText,
		dynamicBtnTwoCommentsManyText,

		dynamicBtnTwoTermsTaxonomy,
		dynamicBtnTwoTermsSeparator,
		dynamicBtnTwoEnableLink,
		dynamicBtnTwoLinkSource,
		/** End Dynamic Btn Two Text */

	} = attributes;

	const deviceType = useDeviceType();

	const blockProps = useBlockProps();

	const buttonIconHandler = (iconName) => {
		setAttributes({ btnIcon: iconName });
	};
	const buttonTwoIconHandler = (iconName) => {
		setAttributes({ btnTwoIcon: iconName });
	};

	/**
	 * Generate SVG Icons for Icon
	 */
	useEffect(() => {
		setAttributes({
			btnFrontendIcon: generateSvgIcon(btnIcon),
			btnTwoFrontendIcon: generateSvgIcon(btnTwoIcon),
		})
	}, [btnIcon, btnTwoIcon]);



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
	/** End Border Radius */

	/**
	 * Inspector General Controls
	 */
	const generalControls = (
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

					<ToggleControl
						label={__("Dynamic Content", "frontis-blocks")}
						checked={dynamicTitleEnabled}
						onChange={(value) => setAttributes({ dynamicTitleEnabled: value })}
					/>

					<DynamicDataSourceControl
						enabled={dynamicTitleEnabled}

						source={dynamicTitleSource}
						setSource={(value) => setAttributes({ dynamicTitleSource: value })}
						postId={dynamicTitlePostId}
						setPostId={(value) => setAttributes({ dynamicTitlePostId: value })}
						postType={dynamicTitlePostType}
						setPostType={(value) => setAttributes({ dynamicTitlePostType: value })}
						postLabel={dynamicTitlePostLabel}
						setPostLabel={(value) => setAttributes({ dynamicTitlePostLabel: value })}

						field={dynamicTitleField}
						setField={(value) => setAttributes({ dynamicTitleField: value })}
						featuredImageField={dynamicTitleFeaturedImageField}
						setFeaturedImageField={(value) => setAttributes({ dynamicTitleFeaturedImageField: value })}

						dateType={dynamicTitleDateType}
						setDateType={(value) => setAttributes({ dynamicTitleDateType: value })}
						dateFormat={dynamicTitleDateFormat}
						setDateFormat={(value) => setAttributes({ dynamicTitleDateFormat: value })}
						timeType={dynamicTitleTimeType}
						setTimeType={(value) => setAttributes({ dynamicTitleTimeType: value })}
						timeFormat={dynamicTitleTimeFormat}
						setTimeFormat={(value) => setAttributes({ dynamicTitleTimeFormat: value })}

						commentsZeroText={dynamicTitleCommentsZeroText}
						setCommentsZeroText={(value) => setAttributes({ dynamicTitleCommentsZeroText: value })}
						commentsOneText={dynamicTitleCommentsOneText}
						setCommentsOneText={(value) => setAttributes({ dynamicTitleCommentsOneText: value })}
						commentsManyText={dynamicTitleCommentsManyText}
						setCommentsManyText={(value) => setAttributes({ dynamicTitleCommentsManyText: value })}

						termsTaxonomy={dynamicTitleTermsTaxonomy}
						setTermsTaxonomy={(value) => setAttributes({ dynamicTitleTermsTaxonomy: value })}
						termsSeparator={dynamicTitleTermsSeparator}
						setTermsSeparator={(value) => setAttributes({ dynamicTitleTermsSeparator: value })}
					/>

					{dynamicTitleEnabled && (
						<DynamicDataLinkControl
							enableLink={dynamicTitleEnableLink}
							setEnableLink={(value) => setAttributes({ dynamicTitleEnableLink: value })}
							linkSource={dynamicTitleLinkSource}
							setLinkSource={(value) => setAttributes({ dynamicTitleLinkSource: value })}
						/>
					)}

					{!dynamicTitleEnabled && (
						<TextareaControl
							label={__("Title Text", "frontis-block")}
							className="fb-setting-text"
							value={Heading_Text}
							onChange={(value) => setAttributes({ Heading_Text: value })}
						/>
					)}
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

							<ToggleControl
								label={__("Dynamic Content", "frontis-blocks")}
								checked={dynamicDescriptionEnabled}
								onChange={(value) => setAttributes({ dynamicDescriptionEnabled: value })}
							/>

							<DynamicDataSourceControl
								enabled={dynamicDescriptionEnabled}

								source={dynamicDescriptionSource}
								setSource={(value) => setAttributes({ dynamicDescriptionSource: value })}
								postId={dynamicDescriptionPostId}
								setPostId={(value) => setAttributes({ dynamicDescriptionPostId: value })}
								postType={dynamicDescriptionPostType}
								setPostType={(value) => setAttributes({ dynamicDescriptionPostType: value })}
								postLabel={dynamicDescriptionPostLabel}
								setPostLabel={(value) => setAttributes({ dynamicDescriptionPostLabel: value })}

								field={dynamicDescriptionField}
								setField={(value) => setAttributes({ dynamicDescriptionField: value })}
								featuredImageField={dynamicDescriptionFeaturedImageField}
								setFeaturedImageField={(value) => setAttributes({ dynamicDescriptionFeaturedImageField: value })}

								dateType={dynamicDescriptionDateType}
								setDateType={(value) => setAttributes({ dynamicDescriptionDateType: value })}
								dateFormat={dynamicDescriptionDateFormat}
								setDateFormat={(value) => setAttributes({ dynamicDescriptionDateFormat: value })}
								timeType={dynamicDescriptionTimeType}
								setTimeType={(value) => setAttributes({ dynamicDescriptionTimeType: value })}
								timeFormat={dynamicDescriptionTimeFormat}
								setTimeFormat={(value) => setAttributes({ dynamicDescriptionTimeFormat: value })}

								commentsZeroText={dynamicDescriptionCommentsZeroText}
								setCommentsZeroText={(value) => setAttributes({ dynamicDescriptionCommentsZeroText: value })}
								commentsOneText={dynamicDescriptionCommentsOneText}
								setCommentsOneText={(value) => setAttributes({ dynamicDescriptionCommentsOneText: value })}
								commentsManyText={dynamicDescriptionCommentsManyText}
								setCommentsManyText={(value) => setAttributes({ dynamicDescriptionCommentsManyText: value })}

								termsTaxonomy={dynamicDescriptionTermsTaxonomy}
								setTermsTaxonomy={(value) => setAttributes({ dynamicDescriptionTermsTaxonomy: value })}
								termsSeparator={dynamicDescriptionTermsSeparator}
								setTermsSeparator={(value) => setAttributes({ dynamicDescriptionTermsSeparator: value })}
							/>

							{dynamicDescriptionEnabled && (
								<DynamicDataLinkControl
									enableLink={dynamicDescriptionEnableLink}
									setEnableLink={(value) => setAttributes({ dynamicDescriptionEnableLink: value })}
									linkSource={dynamicDescriptionLinkSource}
									setLinkSource={(value) => setAttributes({ dynamicDescriptionLinkSource: value })}
								/>
							)}

							{!dynamicDescriptionEnabled && (
								<TextareaControl
									label={__("Description Text", "frontis-block")}
									value={Sub_Heading_Text}
									onChange={(value) =>
										setAttributes({ Sub_Heading_Text: value })
									}
									className="fb-sub-heading-text"
								/>
							)}
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

							<ToggleControl
								label={__("Dynamic Content", "frontis-blocks")}
								checked={dynamicBtnOneEnabled}
								onChange={(value) => setAttributes({ dynamicBtnOneEnabled: value })}
							/>

							<DynamicDataSourceControl
								enabled={dynamicBtnOneEnabled}

								source={dynamicBtnOneSource}
								setSource={(value) => setAttributes({ dynamicBtnOneSource: value })}
								postId={dynamicBtnOnePostId}
								setPostId={(value) => setAttributes({ dynamicBtnOnePostId: value })}
								postType={dynamicBtnOnePostType}
								setPostType={(value) => setAttributes({ dynamicBtnOnePostType: value })}
								postLabel={dynamicBtnOnePostLabel}
								setPostLabel={(value) => setAttributes({ dynamicBtnOnePostLabel: value })}

								field={dynamicBtnOneField}
								setField={(value) => setAttributes({ dynamicBtnOneField: value })}
								featuredImageField={dynamicBtnOneFeaturedImageField}
								setFeaturedImageField={(value) => setAttributes({ dynamicBtnOneFeaturedImageField: value })}

								dateType={dynamicBtnOneDateType}
								setDateType={(value) => setAttributes({ dynamicBtnOneDateType: value })}
								dateFormat={dynamicBtnOneDateFormat}
								setDateFormat={(value) => setAttributes({ dynamicBtnOneDateFormat: value })}
								timeType={dynamicBtnOneTimeType}
								setTimeType={(value) => setAttributes({ dynamicBtnOneTimeType: value })}
								timeFormat={dynamicBtnOneTimeFormat}
								setTimeFormat={(value) => setAttributes({ dynamicBtnOneTimeFormat: value })}

								commentsZeroText={dynamicBtnOneCommentsZeroText}
								setCommentsZeroText={(value) => setAttributes({ dynamicBtnOneCommentsZeroText: value })}
								commentsOneText={dynamicBtnOneCommentsOneText}
								setCommentsOneText={(value) => setAttributes({ dynamicBtnOneCommentsOneText: value })}
								commentsManyText={dynamicBtnOneCommentsManyText}
								setCommentsManyText={(value) => setAttributes({ dynamicBtnOneCommentsManyText: value })}

								termsTaxonomy={dynamicBtnOneTermsTaxonomy}
								setTermsTaxonomy={(value) => setAttributes({ dynamicBtnOneTermsTaxonomy: value })}
								termsSeparator={dynamicBtnOneTermsSeparator}
								setTermsSeparator={(value) => setAttributes({ dynamicBtnOneTermsSeparator: value })}
							/>

							{!dynamicBtnOneEnabled && (
								<TextareaControl
									label={__("Button Text", "frontis-block")}
									value={info_Button_Text}
									onChange={(value) =>
										setAttributes({ info_Button_Text: value })
									}
									className="fb-cta-button-text"
								/>
							)}
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
									<FB_SwitcherControl
										label={__("Icon Position", "frontis-block")}
										value={btnIconPosition}
										options={ICON_POSITION}
										globalSwitcher={btnIconPosition}
										setGlobalSwitcher={(value) =>
											setAttributes({ btnIconPosition: value })
										}
									/>
								</>
							)}
							{dynamicBtnOneEnabled && (
								<DynamicDataLinkControl
									enableLink={dynamicBtnOneEnableLink}
									setEnableLink={(value) => setAttributes({ dynamicBtnOneEnableLink: value })}
									linkSource={dynamicBtnOneLinkSource}
									setLinkSource={(value) => setAttributes({ dynamicBtnOneLinkSource: value })}
								/>
							)}
							{!dynamicBtnOneEnableLink && (
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
							)}
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

							<ToggleControl
								label={__("Dynamic Content", "frontis-blocks")}
								checked={dynamicBtnTwoEnabled}
								onChange={(value) => setAttributes({ dynamicBtnTwoEnabled: value })}
							/>

							<DynamicDataSourceControl
								enabled={dynamicBtnTwoEnabled}

								source={dynamicBtnTwoSource}
								setSource={(value) => setAttributes({ dynamicBtnTwoSource: value })}
								postId={dynamicBtnTwoPostId}
								setPostId={(value) => setAttributes({ dynamicBtnTwoPostId: value })}
								postType={dynamicBtnTwoPostType}
								setPostType={(value) => setAttributes({ dynamicBtnTwoPostType: value })}
								postLabel={dynamicBtnTwoPostLabel}
								setPostLabel={(value) => setAttributes({ dynamicBtnTwoPostLabel: value })}

								field={dynamicBtnTwoField}
								setField={(value) => setAttributes({ dynamicBtnTwoField: value })}
								featuredImageField={dynamicBtnTwoFeaturedImageField}
								setFeaturedImageField={(value) => setAttributes({ dynamicBtnTwoFeaturedImageField: value })}

								dateType={dynamicBtnTwoDateType}
								setDateType={(value) => setAttributes({ dynamicBtnTwoDateType: value })}
								dateFormat={dynamicBtnTwoDateFormat}
								setDateFormat={(value) => setAttributes({ dynamicBtnTwoDateFormat: value })}
								timeType={dynamicBtnTwoTimeType}
								setTimeType={(value) => setAttributes({ dynamicBtnTwoTimeType: value })}
								timeFormat={dynamicBtnTwoTimeFormat}
								setTimeFormat={(value) => setAttributes({ dynamicBtnTwoTimeFormat: value })}

								commentsZeroText={dynamicBtnTwoCommentsZeroText}
								setCommentsZeroText={(value) => setAttributes({ dynamicBtnTwoCommentsZeroText: value })}
								commentsOneText={dynamicBtnTwoCommentsOneText}
								setCommentsOneText={(value) => setAttributes({ dynamicBtnTwoCommentsOneText: value })}
								commentsManyText={dynamicBtnTwoCommentsManyText}
								setCommentsManyText={(value) => setAttributes({ dynamicBtnTwoCommentsManyText: value })}

								termsTaxonomy={dynamicBtnTwoTermsTaxonomy}
								setTermsTaxonomy={(value) => setAttributes({ dynamicBtnTwoTermsTaxonomy: value })}
								termsSeparator={dynamicBtnTwoTermsSeparator}
								setTermsSeparator={(value) => setAttributes({ dynamicBtnTwoTermsSeparator: value })}
							/>

							{!dynamicBtnTwoEnabled && (
								<TextareaControl
									label={__("Button Text", "frontis-block")}
									value={btnTwoText}
									onChange={(value) =>
										setAttributes({ btnTwoText: value })
									}
									className="fb-cta-button-text"
								/>
							)}
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
									<FB_SwitcherControl
										label={__("Icon Position", "frontis-block")}
										value={btnTwoIconPosition}
										options={ICON_POSITION}
										globalSwitcher={btnTwoIconPosition}
										setGlobalSwitcher={(value) =>
											setAttributes({ btnTwoIconPosition: value })
										}
									/>
								</>
							)}
							{dynamicBtnTwoEnabled && (
								<DynamicDataLinkControl
									enableLink={dynamicBtnTwoEnableLink}
									setEnableLink={(value) => setAttributes({ dynamicBtnTwoEnableLink: value })}
									linkSource={dynamicBtnTwoLinkSource}
									setLinkSource={(value) => setAttributes({ dynamicBtnTwoLinkSource: value })}
								/>
							)}
							{!dynamicBtnTwoEnableLink && (
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
							)}
						</>
					)}
				</PanelBody>
			</div>
		</>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
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
					label={__("Text Color", "frontis-blocks")}
					globalSwitcher={headingColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ headingColorSwitcher: value })}
				/>

				{headingColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={headingColor}
						setGlobalColor={(value) => setAttributes({ headingColor: value === undefined ? '' : value })}
					/>
				)}

				{headingColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={headingHoverColor}
						setGlobalColor={(value) => setAttributes({ headingHoverColor: value === undefined ? '' : value })}
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
						setGlobalColor={(value) => setAttributes({ headingBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{headingBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={headingBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ headingBorderHoverColor: value === undefined ? '' : value })}
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
								SubHeadingGlobalTypoSwitcher: value === 'default' ? { ...SubHeadingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...SubHeadingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
							})
						}}

						globalTypoOption={SubHeadingGlobalTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ SubHeadingGlobalTypoOption: value })}

						fontFamily={SubHeadingFontFamily}
						onChangeFontFamily={(value) => setAttributes({ SubHeadingFontFamily: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, fontFamily: value && false } })}

						fontSize={SubHeadingFontSize}
						onChangeFontSize={(value) => setAttributes({ SubHeadingFontSize: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, fontSize: value && false } })}

						fontSizeUnits={SubHeadingFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ SubHeadingFontSizeUnits: value })}

						fontWeight={SubHeadingFontWeight}
						onChangeFontWeight={(value) => setAttributes({ SubHeadingFontWeight: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, fontWeight: value && false } })}

						fontStyle={SubHeadingFontStyle}
						onChangeFontStyle={(value) => setAttributes({ SubHeadingFontStyle: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, fontStyle: value && false } })}

						textTransform={SubHeadingTextTransform}
						onChangeTextTransform={(value) => setAttributes({ SubHeadingTextTransform: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, textTransform: value && false } })}

						textDecoration={SubHeadingTextDecoration}
						onChangeTextDecoration={(value) => setAttributes({ SubHeadingTextDecoration: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, textDecoration: value && false } })}

						letterSpacing={SubHeadingLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ SubHeadingLetterSpacing: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, letterSpacing: value && false } })}

						letterSpacingUnits={SubHeadingLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ SubHeadingLetterSpacingUnits: value })}

						lineHeight={SubHeadingLineHeight}
						onChangeLineHeight={(value) => setAttributes({ SubHeadingLineHeight: value, SubHeadingGlobalTypoSwitcher: { ...SubHeadingGlobalTypoSwitcher, lineHeight: value && false } })}

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
							setGlobalColor={(value) => setAttributes({ SubHeadingColor: value === undefined ? '' : value })}
						/>
					)}

					{SubHeadingColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={SubHeadingHoverColor}
							setGlobalColor={(value) => setAttributes({ SubHeadingHoverColor: value === undefined ? '' : value })}
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
								buttonGlobalTypoSwitcher: value === 'default' ? { ...buttonGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...buttonGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
							})
						}}

						globalTypoOption={buttonGlobalTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ buttonGlobalTypoOption: value })}

						fontFamily={buttonFontFamily}
						onChangeFontFamily={(value) => setAttributes({ buttonFontFamily: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontFamily: value && false } })}

						fontSize={buttonFontSize}
						onChangeFontSize={(value) => setAttributes({ buttonFontSize: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontSize: value && false } })}

						fontSizeUnits={buttonFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ buttonFontSizeUnits: value })}

						fontWeight={buttonFontWeight}
						onChangeFontWeight={(value) => setAttributes({ buttonFontWeight: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontWeight: value && false } })}

						fontStyle={buttonFontStyle}
						onChangeFontStyle={(value) => setAttributes({ buttonFontStyle: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, fontStyle: value && false } })}

						textTransform={buttonTextTransform}
						onChangeTextTransform={(value) => setAttributes({ buttonTextTransform: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, textTransform: value && false } })}

						textDecoration={buttonTextDecoration}
						onChangeTextDecoration={(value) => setAttributes({ buttonTextDecoration: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, textDecoration: value && false } })}

						letterSpacing={buttonLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ buttonLetterSpacing: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, letterSpacing: value && false } })}

						letterSpacingUnits={buttonLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ buttonLetterSpacingUnits: value })}

						lineHeight={buttonLineHeight}
						onChangeLineHeight={(value) => setAttributes({ buttonLineHeight: value, buttonGlobalTypoSwitcher: { ...buttonGlobalTypoSwitcher, lineHeight: value && false } })}

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
							setGlobalColor={(value) => setAttributes({ buttonTextColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonTextHoverColor}
							setGlobalColor={(value) => setAttributes({ buttonTextHoverColor: value === undefined ? '' : value })}
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
							setGlobalColor={(value) => setAttributes({ buttonBgColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonBgColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonBgHoverColor}
							setGlobalColor={(value) => setAttributes({ buttonBgHoverColor: value === undefined ? '' : value })}
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
									setGlobalColor={(value) => setAttributes({ btnIconColor: value === undefined ? '' : value })}
								/>
							)}

							{btnIconColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={btnIconHoverColor}
									setGlobalColor={(value) => setAttributes({ btnIconHoverColor: value === undefined ? '' : value })}
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
						spacingUnitsHandler={handleButtonOnePaddingUnitsHandler}
						spacingUnits={btnOnePaddingUnits}
						spacingDesktop={btnOneDesktopPadding}
						spacingTablet={btnOneTabPadding}
						spacingMobile={btnOneMobilePadding}
						handleSpacingUnitHandler={handleButtonOnePaddingUnitChange}
						spacingCombineBtn={btnOnePaddingLink}
						spacingCombineBtnHandler={handleButtonOnePaddingCombineBtn}
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
							setGlobalColor={(value) => setAttributes({ infoButtonBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{infoButtonBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={infoButtonHoverBorderColor}
							setGlobalColor={(value) => setAttributes({ infoButtonHoverBorderColor: value === undefined ? '' : value })}
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
								buttonTwoGlobalTypoSwitcher: value === 'default' ? { ...buttonTwoGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...buttonTwoGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
							})
						}}

						globalTypoOption={buttonTwoGlobalTypoOption}
						onChangeGlobalTypoOption={(value) => setAttributes({ buttonTwoGlobalTypoOption: value })}

						fontFamily={buttonTwoFontFamily}
						onChangeFontFamily={(value) => setAttributes({ buttonTwoFontFamily: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, fontFamily: value && false } })}

						fontSize={buttonTwoFontSize}
						onChangeFontSize={(value) => setAttributes({ buttonTwoFontSize: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, fontSize: value && false } })}

						fontSizeUnits={buttonTwoFontSizeUnits}
						onChangeFontSizeUnit={(value) => setAttributes({ buttonTwoFontSizeUnits: value })}

						fontWeight={buttonTwoFontWeight}
						onChangeFontWeight={(value) => setAttributes({ buttonTwoFontWeight: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, fontWeight: value && false } })}

						fontStyle={buttonTwoFontStyle}
						onChangeFontStyle={(value) => setAttributes({ buttonTwoFontStyle: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, fontStyle: value && false } })}

						textTransform={buttonTwoTextTransform}
						onChangeTextTransform={(value) => setAttributes({ buttonTwoTextTransform: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, textTransform: value && false } })}

						textDecoration={buttonTwoTextDecoration}
						onChangeTextDecoration={(value) => setAttributes({ buttonTwoTextDecoration: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, textDecoration: value && false } })}

						letterSpacing={buttonTwoLetterSpacing}
						onChangeLetterSpacing={(value) => setAttributes({ buttonTwoLetterSpacing: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, letterSpacing: value && false } })}

						letterSpacingUnits={buttonTwoLetterSpacingUnits}
						onChangeLetterSpacingUnit={(value) => setAttributes({ buttonTwoLetterSpacingUnits: value })}

						lineHeight={buttonTwoLineHeight}
						onChangeLineHeight={(value) => setAttributes({ buttonTwoLineHeight: value, buttonTwoGlobalTypoSwitcher: { ...buttonTwoGlobalTypoSwitcher, lineHeight: value && false } })}

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
							setGlobalColor={(value) => setAttributes({ buttonTwoTextColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonTwoColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonTwoTextHoverColor}
							setGlobalColor={(value) => setAttributes({ buttonTwoTextHoverColor: value === undefined ? '' : value })}
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
							setGlobalColor={(value) => setAttributes({ buttonTwoBgColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonTwoBgColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={buttonTwoBgHoverColor}
							setGlobalColor={(value) => setAttributes({ buttonTwoBgHoverColor: value === undefined ? '' : value })}
						/>
					)}

					{buttonTwoIconSwitcher && (
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
									setGlobalColor={(value) => setAttributes({ btnTwoIconColor: value === undefined ? '' : value })}
								/>
							)}

							{btnTwoIconColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={btnTwoIconHoverColor}
									setGlobalColor={(value) => setAttributes({ btnTwoIconHoverColor: value === undefined ? '' : value })}
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
						spacingUnitsHandler={handleButtonTwoPaddingUnitsHandler}
						spacingUnits={btnTwoPaddingUnits}
						spacingDesktop={btnTwoDesktopPadding}
						spacingTablet={btnTwoTabPadding}
						spacingMobile={btnTwoMobilePadding}
						handleSpacingUnitHandler={handleButtonTwoPaddingUnitChange}
						spacingCombineBtn={btnTwoPaddingLink}
						spacingCombineBtnHandler={handleButtonTwoPaddingCombineBtn}
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
							setGlobalColor={(value) => setAttributes({ btnTwoBorderColor: value === undefined ? '' : value })}
						/>
					)}

					{btnTwoBorderColorSwitcher === 'hover' && (
						<FB_ColorControl
							label={__("Hover Color", "frontis-blocks")}
							globalColor={btnTwoHoverBorderColor}
							setGlobalColor={(value) => setAttributes({ btnTwoHoverBorderColor: value === undefined ? '' : value })}
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
								setAttributes({ ctaGlobalClassicColor: value === undefined ? '' : value })
							}
							normalGradientColor={ctaGlobalGradientColor}
							setNormalGradientColor={(value) =>
								setAttributes({ ctaGlobalGradientColor: value === undefined ? null : value })
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
								setAttributes({ hoverClassicColor: value === undefined ? '' : value })
							}
							hoverGradientColor={hoverGradientColor}
							setHoverGradientColor={(value) =>
								setAttributes({ hoverGradientColor: value === undefined ? null : value })
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
								setGlobalColor={(value) => setAttributes({ globalBorderColor: value === undefined ? '' : value })}
							/>
						)}

						{globalBorderColorSwitcher === 'hover' && (
							<FB_ColorControl
								label={__("Hover Color", "frontis-blocks")}
								globalColor={globalBorderHoverColor}
								setGlobalColor={(value) => setAttributes({ globalBorderHoverColor: value === undefined ? '' : value })}
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